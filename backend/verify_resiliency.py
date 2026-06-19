import asyncio
import json
import logging
from app.schemas.ideaforge import IdeaForgeInput
from app.services.ideaforge import IdeaForgeService

# Configure logging to see output
logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(name)s - %(levelname)s - %(message)s")

async def test_resiliency():
    service = IdeaForgeService()
    
    # Let's mock the synchronous _call_gemini_sync to simulate 503s
    original_call = service._call_gemini_sync
    
    call_counts = {
        "gemini-2.5-flash": 0,
        "gemini-2.5-flash-lite": 0,
        "gemini-2.0-flash": 0,
        "gemini-1.5-flash": 0
    }
    
    def mocked_gemini_sync(api_key, prompt, model_name):
        call_counts[model_name] += 1
        
        # Simulate high demand on the first two models
        if model_name in ["gemini-2.5-flash", "gemini-2.5-flash-lite"]:
            raise Exception(f"503 Service Unavailable: {model_name} is currently experiencing high demand")
        
        # Let gemini-2.0-flash succeed!
        return """{
          "title": "Resilient Forge AI",
          "description": "A successful generation after fallbacks.",
          "detailedDescription": "This proves the fallback logic works perfectly.",
          "difficulty": "Medium",
          "estimated_time": "2 weeks",
          "innovation_score": 99,
          "features": ["Retry", "Fallback", "Success"],
          "suggested_stack": ["Python", "FastAPI"],
          "targetAudience": "Developers",
          "marketPotential": "High",
          "keyBenefits": ["Robust", "Fault Tolerant"],
          "implementationSteps": ["Fail 1", "Fail 2", "Succeed 3"]
        }"""
        
    service._call_gemini_sync = mocked_gemini_sync
    
    inputs = IdeaForgeInput(
        theme="Resiliency Testing",
        designStyle="Cyberpunk",
        techStack=["React"],
        teamSize="Solo",
        buildTime="1 week",
        customApiKey="AIzaSy_dummy_mock_key"
    )
    
    print("\n--- STARTING VERIFICATION ---")
    
    try:
        # Override the backoff intervals to be very fast for the test
        # We'll monkeypatch it in the scope?
        # Actually, let's just let it run. Wait, 1+2+4+8 = 15s per model.
        # Two models = 30 seconds. That's perfectly fine for a test.
        result = await service.generate_idea(inputs)
        
        print("\n--- RESULTS REPORT ---")
        print("Models Tested & Retry Counts:")
        for model, count in call_counts.items():
            print(f"- {model}: {count} attempts")
        
        print("\nSuccessful Generation Output:")
        print(json.dumps(result, indent=2))
        
    except Exception as e:
        print(f"Test failed with exception: {e}")

if __name__ == "__main__":
    asyncio.run(test_resiliency())
