import asyncio
import json
import logging
import os
from functools import partial

from google import genai
from google.genai import types

from app.core.exceptions import AppError
from app.schemas.ideaforge import IdeaForgeInput, ProjectIdea

logger = logging.getLogger(__name__)

_SYSTEM_INSTRUCTION = (
    "You are an expert project idea generator for young innovators and developers. "
    "Always respond with valid JSON only. No markdown fences, no additional text."
)


class IdeaForgeService:
    """Generates project ideas by calling the Google Gemini API.

    The Gemini Python SDK currently exposes only a synchronous
    ``generate_content`` method.  To avoid blocking the asyncio event loop
    (which would stall every other in-flight request), the sync call is
    offloaded to a thread pool via ``asyncio.to_thread``.
    """

                                                                                

    def _build_prompt(self, inputs: IdeaForgeInput) -> str:
        tech_str = ", ".join(inputs.techStack) if inputs.techStack else "Any suitable technologies"
        return f"""Generate a comprehensive, innovative project idea based on these specifications:

Theme: {inputs.theme}
Design Style: {inputs.designStyle}
Tech Stack: {tech_str}
Team Size: {inputs.teamSize}
Build Time: {inputs.buildTime}
Intent/Mood: {inputs.intent or 'Professional and impactful'}
Special Requirements: {inputs.specialRequests or 'None specified'}

Return ONLY a valid JSON object with these exact keys:
{ 
  "title": "Creative and catchy project name",
  "description": "Brief 1-2 sentence overview",
  "detailedDescription": "Comprehensive 4-5 sentence description covering purpose, functionality, target users, unique features, and impact",
  "difficulty": "Easy|Medium|Hard",
  "estimated_time": "{inputs.buildTime}",
  "innovation_score": 85,
  "features": ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
  "suggested_stack": ["Tech1", "Tech2", "Tech3", "Tech4"],
  "targetAudience": "Specific target user description",
  "marketPotential": "Market opportunity analysis",
  "keyBenefits": ["Benefit 1", "Benefit 2", "Benefit 3"],
  "implementationSteps": ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"]
} """

                                                                                

    def _call_gemini_sync(self, api_key: str, prompt: str) -> str:
        """Performs the synchronous Gemini API call.

        This method is intentionally synchronous so it can be safely run
        inside ``asyncio.to_thread`` without holding the event loop.
        """
        client = genai.Client(api_key=api_key)
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt,
            config=types.GenerateContentConfig(
                system_instruction=_SYSTEM_INSTRUCTION,
                response_mime_type="application/json",
                temperature=0.8,
            ),
        )
        return response.text.strip()

                                                                                

    async def generate_idea(self, inputs: IdeaForgeInput) -> dict:
        """Generates an AI project idea and returns it as a validated dict.

        Raises:
            AppError: if the API key is missing, rate limited, or returns
                      an unparseable response.
        """
        server_key = os.getenv("GEMINI_API_KEY")
        api_key = (
            inputs.customApiKey.strip()
            if inputs.customApiKey and inputs.customApiKey.strip()
            else None
        ) or server_key

        if not api_key:
            logger.error("No Gemini API key available — request rejected")
            raise AppError(
                message=(
                    "Gemini API key is not configured. "
                    "Set GEMINI_API_KEY on the server or provide your own key."
                ),
                status_code=400,
            )

        prompt = self._build_prompt(inputs)

        try:
            logger.info(
                "Sending IdeaForge request to Gemini (theme=%r, stack=%s)",
                inputs.theme,
                inputs.techStack,
            )
                                                                      
                                                                          
            raw_text: str = await asyncio.to_thread(
                self._call_gemini_sync, api_key, prompt
            )
            logger.info("Gemini response received — parsing JSON")

                                                                         
                                                 
            if raw_text.startswith("```"):
                raw_text = raw_text.split("\n", 1)[-1]
                raw_text = raw_text.rsplit("```", 1)[0]

            return json.loads(raw_text.strip())

        except json.JSONDecodeError as exc:
            logger.error("Gemini returned non-JSON response: %s", exc)
            raise AppError(
                message="The AI returned an invalid response. Please try again.",
                status_code=502,
            ) from exc

        except Exception as exc:
            err_msg = str(exc).lower()
            logger.error("Gemini API error: %s", exc, exc_info=True)

            if any(kw in err_msg for kw in ("rate limit", "429", "quota", "rpm")):
                raise AppError(
                    message=(
                        "Gemini API rate limit reached. "
                        "Please wait a moment or provide your own API key."
                    ),
                    status_code=429,
                ) from exc

            raise AppError(
                message=f"Failed to generate project idea: {exc}",
                status_code=500,
            ) from exc
