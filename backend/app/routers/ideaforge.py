import logging
from fastapi import APIRouter, Depends, Request
from app.schemas.ideaforge import IdeaForgeInput, ProjectIdea
from app.services.ideaforge import IdeaForgeService
from app.core.dependencies import get_ideaforge_service
from app.core.limiter import limiter

router = APIRouter(prefix="/api/v1/ideaforge", tags=["IdeaForge"])
logger = logging.getLogger(__name__)


@router.post(
    "/generate",
    response_model=ProjectIdea,
    summary="Generate an AI project idea",
    response_description="A structured project idea with features, stack, and implementation steps",
)
@limiter.limit("5/minute")
async def generate_idea(
    request: Request,
    inputs: IdeaForgeInput,
    service: IdeaForgeService = Depends(get_ideaforge_service),
) -> ProjectIdea:
    """Accepts forge parameters and returns a Gemini-generated project idea.

    The Gemini API call is offloaded to a thread pool so the asyncio event
    loop is never blocked during the network round-trip.
    """
    logger.info(
        "IdeaForge request received — theme=%r stack=%s", inputs.theme, inputs.techStack
    )
    return await service.generate_idea(inputs)
