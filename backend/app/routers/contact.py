import logging
from fastapi import APIRouter, Depends, status
from app.schemas.contact import ContactCreate, ContactRead
from app.services.contact import ContactService
from app.core.dependencies import get_contact_service
from app.database import is_db_configured

router = APIRouter(prefix="/api/v1/contact", tags=["Contact"])
logger = logging.getLogger(__name__)


@router.get(
    "/status",
    summary="Database connectivity check",
    response_description="Returns the current database connection status",
)
async def get_db_status() -> dict:
    """Lightweight probe used by the frontend to decide its submission strategy."""
    if not is_db_configured():
        return {"status": "fallback", "message": "Database not configured"}
    return {"status": "connected", "message": "Database is reachable"}


@router.post(
    "",
    status_code=status.HTTP_201_CREATED,
    summary="Submit a contact message",
    response_description="Confirmation with the saved record ID",
)
async def submit_contact(
    submission: ContactCreate,
    service: ContactService = Depends(get_contact_service),
) -> dict:
    """Validates, persists, and acknowledges a contact form submission."""
    return await service.submit_contact(submission)
