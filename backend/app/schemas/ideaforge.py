from typing import Annotated, List, Optional
from pydantic import BaseModel, Field


class IdeaForgeInput(BaseModel):
    """Validated input for the IdeaForge project idea generator."""

    theme: str = Field(
        ...,
        min_length=3,
        max_length=100,
        strip_whitespace=True,
        description="Project theme or domain (e.g. 'AI & Machine Learning')",
    )
    designStyle: str = Field(
        ...,
        min_length=3,
        max_length=50,
        strip_whitespace=True,
        description="Visual design style (e.g. 'Minimalist')",
    )
    techStack: List[Annotated[str, Field(min_length=1, max_length=50)]] = Field(
        default=[],
        max_length=10,
        description="Preferred technologies (max 10 items)",
    )
    teamSize: str = Field(
        ...,
        min_length=2,
        max_length=30,
        strip_whitespace=True,
        description="Team size (e.g. 'Solo', 'Duo')",
    )
    buildTime: str = Field(
        ...,
        min_length=2,
        max_length=30,
        strip_whitespace=True,
        description="Available build time (e.g. '24 hours')",
    )
    intent: Optional[str] = Field(
        default=None,
        max_length=200,
        strip_whitespace=True,
        description="Optional mood or intent for the idea",
    )
    specialRequests: Optional[str] = Field(
        default=None,
        max_length=500,
        strip_whitespace=True,
        description="Any special requirements or constraints",
    )
    # repr=False prevents the key from appearing in logs or __repr__ output
    customApiKey: Optional[str] = Field(
        default=None,
        min_length=20,
        max_length=100,
        repr=False,
        description="Optional user-supplied Gemini API key (BYOK)",
    )


class ProjectIdea(BaseModel):
    """Structured project idea returned by the Gemini AI generator."""

    title: str
    description: str
    detailedDescription: str
    difficulty: str
    estimated_time: str
    innovation_score: int = Field(..., ge=0, le=100)
    features: List[str]
    suggested_stack: List[str]
    targetAudience: str
    marketPotential: str
    keyBenefits: List[str]
    implementationSteps: List[str]
