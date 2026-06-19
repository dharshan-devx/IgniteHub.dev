from datetime import datetime
from pydantic import BaseModel, ConfigDict, EmailStr, Field


class ContactCreate(BaseModel):
    """Validated payload for a new contact message submission."""

    name: str = Field(..., min_length=1, max_length=100, strip_whitespace=True)
    email: EmailStr = Field(..., max_length=255)
    message: str = Field(..., min_length=10, max_length=2000, strip_whitespace=True)


class ContactRead(BaseModel):
    """Response schema — explicitly controls which fields are returned to the client.

    Using a separate Read schema (vs reusing the ORM model directly) prevents
    accidentally exposing internal fields if the model grows in the future.
    """

    model_config = ConfigDict(from_attributes=True)

    id: int
    name: str
    email: EmailStr
    created_at: datetime
