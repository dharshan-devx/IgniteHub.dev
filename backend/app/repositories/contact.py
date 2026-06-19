from sqlalchemy.ext.asyncio import AsyncSession
from app.models.contact import Contact
from app.schemas.contact import ContactCreate

class ContactRepository:
    def __init__(self, session: AsyncSession):
        self.session = session

    async def create(self, contact_in: ContactCreate) -> Contact:
        db_contact = Contact(
            name=contact_in.name.strip(),
            email=contact_in.email.strip(),
            message=contact_in.message.strip()
        )
        self.session.add(db_contact)
        await self.session.commit()
        await self.session.refresh(db_contact)
        return db_contact
