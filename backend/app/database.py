import os
import logging
from contextlib import contextmanager
import psycopg2
from psycopg2.pool import ThreadedConnectionPool
from psycopg2.extras import RealDictCursor
from dotenv import load_dotenv

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")
logger = logging.getLogger(__name__)

# Global connection pool instance
_connection_pool = None

def is_db_configured() -> bool:
    return bool(DATABASE_URL and DATABASE_URL.startswith("postgresql"))

def init_db_pool():
    """Initializes the thread-safe connection pool for PostgreSQL."""
    global _connection_pool
    if not is_db_configured():
        logger.warning("DATABASE_URL not configured or invalid. Skipping DB connection pool initialization.")
        return False
    
    try:
        logger.info("Initializing database connection pool (minconn=1, maxconn=10)...")
        _connection_pool = ThreadedConnectionPool(1, 10, dsn=DATABASE_URL)
        logger.info("Database connection pool initialized successfully.")
        return True
    except Exception as e:
        logger.error(f"Failed to initialize database connection pool: {e}")
        _connection_pool = None
        return False

def close_db_pool():
    """Closes all connections in the database pool on application shutdown."""
    global _connection_pool
    if _connection_pool:
        try:
            logger.info("Closing database connection pool...")
            _connection_pool.closeall()
            logger.info("Database connection pool closed successfully.")
        except Exception as e:
            logger.error(f"Error closing database connection pool: {e}")
        finally:
            _connection_pool = None

@contextmanager
def get_db_connection():
    """Gets a connection from the pool, yielding it and returning it to the pool when done."""
    global _connection_pool
    if not is_db_configured():
        raise ValueError("DATABASE_URL environment variable is not set or invalid")
    
    if _connection_pool is None:
        logger.warning("Database connection pool is not initialized. Falling back to direct connection.")
        conn = psycopg2.connect(DATABASE_URL)
        try:
            yield conn
        finally:
            conn.close()
    else:
        conn = _connection_pool.getconn()
        try:
            yield conn
        finally:
            _connection_pool.putconn(conn)

def execute_query(query: str, params: tuple = None):
    """Utility function to execute queries safely with automatic connection management."""
    with get_db_connection() as conn:
        with conn.cursor(cursor_factory=RealDictCursor) as cur:
            cur.execute(query, params)
            results = None
            if cur.description:
                results = cur.fetchall()
            conn.commit()
            return results

def init_db():
    """Verifies that the contacts table exists or creates it on startup."""
    if not is_db_configured():
        logger.warning("DATABASE_URL not configured. Skipping DB initialization.")
        return False
    
    try:
        logger.info("Ensuring database tables are initialized...")
        create_table_query = """
        CREATE TABLE IF NOT EXISTS contacts (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(255) NOT NULL,
            message TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
        """
        execute_query(create_table_query)
        logger.info("Database initialization completed successfully.")
        return True
    except Exception as e:
        logger.error(f"Database initialization failed: {e}")
        return False

