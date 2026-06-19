import os
import logging
from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import contact, ideaforge
from app.database import init_db_pool, close_db_pool, init_db, execute_query, is_db_configured

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s",
    handlers=[logging.StreamHandler()]
)
logger = logging.getLogger(__name__)

@asynccontextmanager
async def lifespan(app: FastAPI):
    logger.info("Starting IgniteHub API...")
    # Initialize the database connection pool
    init_db_pool()
    # Initialize database tables
    init_db()
    yield
    # Cleanup resources on shutdown
    close_db_pool()

app = FastAPI(
    title="IgniteHub API",
    description="Backend services for IgniteHub (Gemini API proxy, Neon DB gateway)",
    version="1.0.0",
    lifespan=lifespan
)

# Configure CORS dynamically from environment variables
allowed_origins_raw = os.getenv("ALLOWED_ORIGINS", "")
if allowed_origins_raw:
    origins = [origin.strip() for origin in allowed_origins_raw.split(",") if origin.strip()]
    logger.info(f"Configuring CORS with custom origins: {origins}")
else:
    origins = [
        "http://localhost:3000",
        "http://localhost:3001",
        "http://127.0.0.1:3000",
        "http://127.0.0.1:3001",
        "https://ignitehub-beta.vercel.app",
        "https://ignitehub-teal.vercel.app",
        "https://ignitehub.dev",
    ]
    logger.info("Configuring CORS with default local/beta development origins.")

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register routers
app.include_router(contact.router)
app.include_router(ideaforge.router)

@app.get("/")
def read_root():
    return {
        "status": "online",
        "service": "IgniteHub API",
        "docs": "/docs"
    }

@app.get("/api/health")
@app.get("/health")
def health_check():
    """Performs a comprehensive health check on internal state and database integration."""
    health_status = {
        "status": "healthy",
        "service": "IgniteHub API",
        "database": "not_configured",
        "gemini_api": "not_configured"
    }
    
    # 1. Check Database Connectivity
    if is_db_configured():
        try:
            execute_query("SELECT 1")
            health_status["database"] = "connected"
        except Exception as e:
            logger.error(f"Database health check query failed: {e}")
            health_status["database"] = "unreachable"
            health_status["status"] = "degraded"
    
    # 2. Check Gemini API Configuration (without leaking key)
    gemini_key = os.getenv("GEMINI_API_KEY")
    if gemini_key:
        health_status["gemini_api"] = f"configured (ends with ...{gemini_key[-4:] if len(gemini_key) > 4 else ''})"
        
    return health_status

