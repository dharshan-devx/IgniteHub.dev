import logging
from fastapi import APIRouter, HTTPException, status
from pydantic import BaseModel, EmailStr, Field
from app.database import execute_query, is_db_configured

router = APIRouter(prefix="/api/contact", tags=["Contact"])
logger = logging.getLogger(__name__)

class ContactSubmission(BaseModel):
    name: str = Field(..., max_length=100, min_length=1)
    email: EmailStr = Field(..., max_length=255)
    message: str = Field(..., max_length=2000, min_length=10)

@router.get("/status")
async def get_db_status():
    """Checks if the database is configured and reachable."""
    if not is_db_configured():
        return {"status": "fallback", "message": "Database not configured"}
    
    try:
        execute_query("SELECT 1")
        return {"status": "connected", "message": "Database connected"}
    except Exception as e:
        logger.warning(f"Database health check failed: {e}")
        return {"status": "fallback", "message": "Database unreachable"}

@router.post("", status_code=status.HTTP_201_CREATED)
async def submit_contact(submission: ContactSubmission):
    """Saves a contact message to the database."""
    if not is_db_configured():
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Database is not configured. Please use fallback."
        )
    
    try:
        logger.info(f"Saving contact submission from {submission.email}")
        execute_query(
            "INSERT INTO contacts (name, email, message) VALUES (%s, %s, %s)",
            (submission.name.strip(), submission.email.strip(), submission.message.strip())
        )
        return {"success": True, "message": "Message saved to database"}
    except Exception as e:
        logger.error(f"Failed to save contact message to database: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Database error: {str(e)}"
        )
