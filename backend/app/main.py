import os
import logging
from contextlib import asynccontextmanager
from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from slowapi.errors import RateLimitExceeded

from app.core.logger import setup_logger
from app.core.exceptions import add_exception_handlers
from app.database import init_db_pool, close_db_pool, init_db, execute_query_raw, is_db_configured
from app.routers import contact, ideaforge

                                                             
from app.core.limiter import limiter

setup_logger()
logger = logging.getLogger(__name__)

                                                                                

TAGS_METADATA = [
    {
        "name": "Contact",
        "description": "Submit and manage contact form messages stored in PostgreSQL.",
    },
    {
        "name": "IdeaForge",
        "description": (
            "AI-powered project idea generator using the Google Gemini API. "
            "Accepts theme, tech stack, team size, and build time to generate "
            "structured, actionable project ideas."
        ),
    },
    {
        "name": "Health",
        "description": "Liveness and readiness probes for deployment platforms.",
    },
    {
        "name": "Root",
        "description": "API root and version info.",
    },
]

                                                                                

@asynccontextmanager
async def lifespan(app: FastAPI):
    logger.info("Starting IgniteHub API...")
    init_db_pool()
                                                                        
                                  
    from app.models import contact as _contact_model              
    await init_db()
    yield
    await close_db_pool()
    logger.info("IgniteHub API shutdown complete.")


                                                                                

app = FastAPI(
    title="IgniteHub API",
    description=(
        "Production-grade backend for IgniteHub — an AI-powered resource hub "
        "for young innovators. Built with FastAPI, SQLAlchemy (async), "
        "PostgreSQL (Neon), and Google Gemini."
    ),
    version="2.0.0",
    lifespan=lifespan,
    docs_url="/api/docs",
    redoc_url="/api/redoc",
    openapi_url="/api/openapi.json",
    openapi_tags=TAGS_METADATA,
)

add_exception_handlers(app)

def rate_limit_exceeded_handler(request: Request, exc: RateLimitExceeded) -> JSONResponse:
    """
    Custom exception handler for rate limits to avoid importing 
    protected members from slowapi.
    """
    return JSONResponse(
        status_code=429,
        content={"detail": "Rate limit exceeded. Please try again later."},
    )
                            
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, rate_limit_exceeded_handler)

                                                                                

_raw_origins = os.getenv("ALLOWED_ORIGINS", "")
if _raw_origins:
    origins = [o.strip() for o in _raw_origins.split(",") if o.strip()]
    logger.info("CORS: %d custom origin(s) configured", len(origins))
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
    logger.info("CORS: using default development origins")

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

                                                                                

app.include_router(contact.router)
app.include_router(ideaforge.router)

                                                                                

@app.get("/", tags=["Root"], summary="API info")
def read_root() -> dict:
    return {
        "status": "online",
        "service": "IgniteHub API",
        "version": "2.0.0",
        "docs": "/api/docs",
    }


@app.get("/api/health", tags=["Health"], summary="Health check")
@app.get("/health", tags=["Health"], include_in_schema=False)
async def health_check() -> dict:
    """Readiness probe — checks database connectivity and Gemini API key presence."""
    health: dict = {
        "status": "healthy",
        "service": "IgniteHub API",
        "version": "2.0.0",
        "database": "not_configured",
        "gemini_api": "not_configured",
    }

    if is_db_configured():
        try:
            await execute_query_raw("SELECT 1")
            health["database"] = "connected"
        except Exception as exc:
            logger.error("DB health check failed: %s", exc)
            health["database"] = "unreachable"
            health["status"] = "degraded"

    gemini_key = os.getenv("GEMINI_API_KEY", "")
    if gemini_key:
        health["gemini_api"] = f"configured (...{gemini_key[-4:]})"

    return health
