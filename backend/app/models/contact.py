from sqlalchemy import Column, DateTime, Index, Integer, String, Text, func
from app.database import Base


class Contact(Base):
    """SQLAlchemy ORM model for contact form submissions."""

    __tablename__ = "contacts"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    email = Column(String(255), nullable=False, index=True)
    message = Column(Text, nullable=False)
    created_at = Column(
        DateTime(timezone=True), server_default=func.now(), nullable=False
    )

    __table_args__ = (
        Index("ix_contacts_email", "email"),
    )

    def __repr__(self) -> str:
        return f"<Contact id={self.id} email={self.email!r}>"
