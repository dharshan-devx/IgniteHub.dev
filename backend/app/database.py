import os
import logging
from typing import AsyncGenerator
from dotenv import load_dotenv

from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession, async_sessionmaker
from sqlalchemy.orm import declarative_base
from sqlalchemy import text

load_dotenv()

logger = logging.getLogger(__name__)

                                   
raw_url = os.getenv("DATABASE_URL", "")
if raw_url and raw_url.startswith("postgresql://"):
    ASYNC_DATABASE_URL = raw_url.replace("postgresql://", "postgresql+asyncpg://", 1)
else:
    ASYNC_DATABASE_URL = raw_url

connect_args = {}
                                                                                  
if "neon.tech" in ASYNC_DATABASE_URL:
    connect_args["ssl"] = True

Base = declarative_base()

engine = None
async_session_maker = None

def is_db_configured() -> bool:
    return bool(ASYNC_DATABASE_URL and ASYNC_DATABASE_URL.startswith("postgresql+asyncpg"))

def init_db_pool():
    """Initializes the SQLAlchemy async engine."""
    global engine, async_session_maker
    if not is_db_configured():
        logger.warning("DATABASE_URL not configured. Skipping DB connection pool initialization.")
        return False
    
    try:
        logger.info("Initializing async database engine...")
        engine = create_async_engine(
            ASYNC_DATABASE_URL,
            pool_size=10,
            max_overflow=20,
            pool_pre_ping=True,
            echo=False,
            connect_args=connect_args,
        )
        async_session_maker = async_sessionmaker(
            engine, class_=AsyncSession, expire_on_commit=False
        )
        logger.info("Database engine initialized successfully.")
        return True
    except Exception as e:
        logger.error(f"Failed to initialize database engine: {e}")
        return False

async def close_db_pool():
    """Disposes the SQLAlchemy engine."""
    global engine
    if engine:
        try:
            logger.info("Closing async database engine...")
            await engine.dispose()
            logger.info("Database engine closed.")
        except Exception as e:
            logger.error(f"Error closing database engine: {e}")

async def init_db():
    """Creates tables if they don't exist."""
    if not is_db_configured() or not engine:
        return False
    try:
        logger.info("Ensuring database tables are initialized...")
        async with engine.begin() as conn:
                                                                                
            await conn.run_sync(Base.metadata.create_all)
        return True
    except Exception as e:
        logger.error(f"Database initialization failed: {e}")
        return False

async def get_db() -> AsyncGenerator[AsyncSession, None]:
    """Dependency for getting async database session."""
    if async_session_maker is None:
        raise ValueError("Database is not configured or initialized.")
    async with async_session_maker() as session:
        try:
            yield session
        except Exception:
            await session.rollback()
            raise
        finally:
            await session.close()

async def execute_query_raw(query: str):
    """Utility for executing raw async queries (legacy/health-check use)."""
    if not async_session_maker:
        raise Exception("Database not configured")
    async with async_session_maker() as session:
        result = await session.execute(text(query))
        await session.commit()
        return result
