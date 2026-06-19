class IdeaForgeInput:
    def __init__(self):
        self.theme = "Gaming"
        self.designStyle = "Cyberpunk"
        self.techStack = ["React"]
        self.teamSize = "Solo"
        self.buildTime = "1 week"
        self.intent = None
        self.specialRequests = None

inputs = IdeaForgeInput()
tech_str = "React"

prompt = f"""Generate a comprehensive, innovative project idea based on these specifications:

Theme: {inputs.theme}
Design Style: {inputs.designStyle}
Tech Stack: {tech_str}
Team Size: {inputs.teamSize}
Build Time: {inputs.buildTime}
Intent/Mood: {inputs.intent or 'Professional and impactful'}
Special Requirements: {inputs.specialRequests or 'None specified'}

Return ONLY a valid JSON object with these exact keys:
{{ 
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
}} """
print(prompt)
