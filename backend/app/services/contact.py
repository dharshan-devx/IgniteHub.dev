import logging
from app.core.exceptions import AppError
from app.repositories.contact import ContactRepository
from app.schemas.contact import ContactCreate, ContactRead

logger = logging.getLogger(__name__)


class ContactService:
    """Handles business logic for contact message submissions.

    Raises ``AppError`` on failure — keeping HTTP concerns out of this layer.
    The router (or the global exception handler) is responsible for converting
    ``AppError`` into the appropriate HTTP response.
    """

    def __init__(self, repository: ContactRepository) -> None:
        self.repository = repository

    async def submit_contact(self, contact_in: ContactCreate) -> dict:
        """Persists a contact submission and returns a confirmation payload."""
        try:
            logger.info("Processing contact submission from %s", contact_in.email)
            created = await self.repository.create(contact_in)
            logger.info("Contact id=%d saved successfully", created.id)
            return {
                "success": True,
                "message": "Your message has been received. We'll be in touch soon!",
                "id": created.id,
            }
        except Exception as exc:
            logger.error("Failed to persist contact submission: %s", exc, exc_info=True)
            raise AppError(
                message="Unable to save your message. Please try again later.",
                status_code=503,
            ) from exc
