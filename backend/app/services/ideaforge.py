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
        
        json_template = """{ 
  "title": "Creative and catchy project name",
  "description": "Brief 1-2 sentence overview",
  "detailedDescription": "Comprehensive 4-5 sentence description covering purpose, functionality, target users, unique features, and impact",
  "difficulty": "Easy|Medium|Hard",
  "estimated_time": "%s",
  "innovation_score": 85,
  "features": ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
  "suggested_stack": ["Tech1", "Tech2", "Tech3", "Tech4"],
  "targetAudience": "Specific target user description",
  "marketPotential": "Market opportunity analysis",
  "keyBenefits": ["Benefit 1", "Benefit 2", "Benefit 3"],
  "implementationSteps": ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"]
} """ % (inputs.buildTime)

        return f"""Generate a comprehensive, innovative project idea based on these specifications:

Theme: {inputs.theme}
Design Style: {inputs.designStyle}
Tech Stack: {tech_str}
Team Size: {inputs.teamSize}
Build Time: {inputs.buildTime}
Intent/Mood: {inputs.intent or 'Professional and impactful'}
Special Requirements: {inputs.specialRequests or 'None specified'}

Return ONLY a valid JSON object with these exact keys:
{json_template}"""


    def _call_gemini_sync(self, api_key: str, prompt: str, model_name: str) -> str:
        """Performs the synchronous Gemini API call."""
        client = genai.Client(api_key=api_key)
        response = client.models.generate_content(
            model=model_name,
            contents=prompt,
            config=types.GenerateContentConfig(
                system_instruction=_SYSTEM_INSTRUCTION,
                response_mime_type="application/json",
                temperature=0.8,
            ),
        )
        return response.text.strip()


    async def generate_idea(self, inputs: IdeaForgeInput) -> dict:
        """Generates an AI project idea and returns it as a validated dict."""
        server_key = os.getenv("GEMINI_API_KEY")
        api_key = (
            inputs.customApiKey.strip()
            if inputs.customApiKey and inputs.customApiKey.strip()
            else None
        ) or server_key

        if not api_key:
            logger.error("No Gemini API key available — request rejected")
            raise AppError(
                message="Gemini API key is not configured.",
                status_code=400,
            )

        prompt = self._build_prompt(inputs)
        
        models_to_try = [
            "gemini-2.5-flash",
            "gemini-2.5-flash-lite",
            "gemini-2.0-flash",
            "gemini-1.5-flash"
        ]
        
        backoff_intervals = [1, 2, 4, 8]  # Max 4 retries per model

        try:
            masked_key = f"{api_key[:6]}...{api_key[-4:]}" if len(api_key) > 10 else "***"
            logger.info("IdeaForge request starting | Theme: %s | Key: %s", inputs.theme, masked_key)
            
            for model_index, model_name in enumerate(models_to_try):
                for retry_count in range(len(backoff_intervals) + 1):
                    try:
                        logger.info("Attempting model: %s | Retry: %d/%d", model_name, retry_count, len(backoff_intervals))
                        
                        raw_text: str = await asyncio.to_thread(
                            self._call_gemini_sync, api_key, prompt, model_name
                        )
                        
                        logger.info("Gemini response received from %s | Parsing JSON...", model_name)
            
                        if raw_text.startswith("```"):
                            raw_text = raw_text.split("\n", 1)[-1]
                            raw_text = raw_text.rsplit("```", 1)[0]
            
                        result = json.loads(raw_text.strip())
                        logger.info("Successfully generated idea: %s (Selected Model: %s)", result.get("title", "Unknown Title"), model_name)
                        return result
                    
                    except Exception as inner_exc:
                        err_msg = str(inner_exc).lower()
                        # Fatal errors that shouldn't be retried
                        if any(kw in err_msg for kw in ("api key not valid", "invalid api key", "unauthorized", "api_key_invalid", "api key is invalid", "400")):
                            logger.error("Fatal API Key error detected. Aborting retries.")
                            raise AppError(
                                message="The provided Gemini API key is invalid or unauthorized. Please check your key.",
                                status_code=400,
                            ) from inner_exc

                        # Check if it's a transient capacity/rate limit error (429 or 503)
                        is_transient = any(kw in err_msg for kw in ("rate limit", "429", "quota", "rpm", "503", "unavailable", "high demand", "overloaded"))
                        
                        if is_transient:
                            if retry_count < len(backoff_intervals):
                                delay = backoff_intervals[retry_count]
                                logger.warning("Transient error on %s: %s | Backing off for %ds...", model_name, inner_exc, delay)
                                await asyncio.sleep(delay)
                                continue
                            else:
                                logger.warning("Exhausted retries for model %s.", model_name)
                                break # Move to the next model in the fallback chain
                        else:
                            # Not a transient error, maybe JSON decode error or general crash, abort model
                            logger.error("Non-transient error on %s: %s | Falling back to next model.", model_name, inner_exc)
                            break
            
            # If we exhausted all models and all retries
            logger.error("All models and retries exhausted. Failed to generate idea.")
            raise AppError(
                message="Gemini is temporarily overloaded. Please retry in a few moments.",
                status_code=503,
            )

        except AppError:
            raise
