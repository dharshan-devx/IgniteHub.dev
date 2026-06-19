from fastapi import Depends
from sqlalchemy.ext.asyncio import AsyncSession
from app.database import get_db
from app.repositories.contact import ContactRepository
from app.services.contact import ContactService
from app.services.ideaforge import IdeaForgeService


                                                                                

def get_contact_repository(db: AsyncSession = Depends(get_db)) -> ContactRepository:
    return ContactRepository(session=db)


def get_contact_service(
    repository: ContactRepository = Depends(get_contact_repository),
) -> ContactService:
    return ContactService(repository=repository)


                                                                                

def get_ideaforge_service() -> IdeaForgeService:
    return IdeaForgeService()
