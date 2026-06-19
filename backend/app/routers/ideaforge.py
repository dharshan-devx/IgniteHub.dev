import os
import json
import logging
from typing import List, Optional
from fastapi import APIRouter, HTTPException, status
from pydantic import BaseModel, Field
import google.generativeai as genai

router = APIRouter(prefix="/api/ideaforge", tags=["IdeaForge"])
logger = logging.getLogger(__name__)

# Gemini API Key will be loaded from the environment variable GEMINI_API_KEY

class IdeaForgeInput(BaseModel):
    theme: str
    designStyle: str
    techStack: List[str] = Field(default=[])
    teamSize: str
    buildTime: str
    intent: Optional[str] = None
    specialRequests: Optional[str] = None
    customApiKey: Optional[str] = None

class ProjectIdea(BaseModel):
    title: str
    description: str
    detailedDescription: str
    difficulty: str
    estimated_time: str
    innovation_score: int
    features: List[str]
    suggested_stack: List[str]
    targetAudience: str
    marketPotential: str
    keyBenefits: List[str]
    implementationSteps: List[str]

def build_prompt(inputs: IdeaForgeInput) -> str:
    tech_stack_str = ", ".join(inputs.techStack) if inputs.techStack else 'Any suitable technologies'
    intent_str = inputs.intent or 'Professional and impactful'
    special_reqs_str = inputs.specialRequests or 'None specified'
    
    return f"""You are an expert project idea generator for young innovators and developers. Generate a comprehensive, innovative project idea based on these specifications:

Theme: {inputs.theme}
Design Style: {inputs.designStyle}
Tech Stack: {tech_stack_str}
Team Size: {inputs.teamSize}
Build Time: {inputs.buildTime}
Intent/Mood: {intent_str}
Special Requirements: {special_reqs_str}

Create a detailed project idea that is:
1. Innovative and unique
2. Feasible within the given timeframe
3. Aligned with the specified theme and requirements
4. Suitable for the team size
5. Commercially viable or socially impactful

Return ONLY a valid JSON response in this exact format:
{{
  "title": "Creative and catchy project name",
  "description": "Brief 1-2 sentence overview of the project",
  "detailedDescription": "Comprehensive 4-5 sentence description explaining the project's purpose, functionality, target users, unique features, and potential impact",
  "difficulty": "Easy|Medium|Hard",
  "estimated_time": "{inputs.buildTime}",
  "innovation_score": 85,
  "features": ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
  "suggested_stack": ["Tech1", "Tech2", "Tech3", "Tech4"],
  "targetAudience": "Specific description of who would use this project",
  "marketPotential": "Brief analysis of market opportunity and potential impact",
  "keyBenefits": ["Benefit 1", "Benefit 2", "Benefit 3"],
  "implementationSteps": ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"]
}}

Make it creative, practical, and aligned with current technology trends. Ensure the innovation score reflects genuine uniqueness and market potential (provide a highly realistic and specific score based on current market trends, not just standard rounded numbers)."""

@router.post("/generate", response_model=ProjectIdea)
async def generate_idea(inputs: IdeaForgeInput):
    """Generates a project idea using the Gemini API."""
    server_api_key = os.getenv("GEMINI_API_KEY")
    api_key = (inputs.customApiKey.strip() if inputs.customApiKey and inputs.customApiKey.strip() else None) or server_api_key
    
    if not api_key:
        logger.error("API Key missing: Neither server GEMINI_API_KEY nor customApiKey is configured.")
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Gemini API Key is not configured on the server, and no custom key was provided."
        )
    
    try:
        logger.info("Initializing genai model for idea generation")
        genai.configure(api_key=api_key)
        
        # Configure model with system instruction
        system_instruction = (
            "You are an expert project idea generator for young innovators and developers. "
            "Generate detailed, innovative, and feasible project ideas. "
            "Always respond with valid JSON only, no additional text or formatting."
        )
        
        model = genai.GenerativeModel(
            model_name='gemini-2.5-flash',
            system_instruction=system_instruction
        )
        
        prompt = build_prompt(inputs)
        logger.info("Generating content from Gemini model...")
        
        # Request JSON output
        response = model.generate_content(
            prompt,
            generation_config={"response_mime_type": "application/json", "temperature": 0.8}
        )
        
        response_text = response.text.strip()
        logger.info("Gemini API call succeeded. Parsing response...")
        
        # Clean potential markdown wrappers
        if response_text.startswith("```json"):
            response_text = response_text[7:]
        if response_text.endswith("```"):
            response_text = response_text[:-3]
        response_text = response_text.strip()
        
        idea_data = json.loads(response_text)
        return idea_data
        
    except json.JSONDecodeError as jde:
        logger.error(f"Failed to parse JSON response from Gemini API: {jde}")
        raise HTTPException(
            status_code=status.HTTP_502_BAD_GATEWAY,
            detail="AI generated an invalid JSON response. Please try again."
        )
    except Exception as e:
        logger.error(f"Gemini generation error: {e}")
        # Identify common rate limit error messages
        err_msg = str(e).lower()
        if "rate limit" in err_msg or "429" in err_msg or "quota" in err_msg:
            raise HTTPException(
                status_code=status.HTTP_429_TOO_MANY_REQUESTS,
                detail="Gemini API rate limit exceeded. Please try again later or add your own API key."
            )
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to generate project idea: {str(e)}"
        )
