const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';

export interface ContactData {
  name: string;
  email: string;
  message: string;
}

export interface IdeaForgeInput {
  theme: string;
  designStyle: string;
  techStack: string[];
  teamSize: string;
  buildTime: string;
  intent?: string;
  specialRequests?: string;
  customApiKey?: string;
}

export interface ProjectIdea {
  title: string;
  description: string;
  detailedDescription: string;
  difficulty: string;
  estimated_time: string;
  innovation_score: number;
  features: string[];
  suggested_stack: string[];
  targetAudience: string;
  marketPotential: string;
  keyBenefits: string[];
  implementationSteps: string[];
}

export const contactApi = {
  checkStatus: async () => {
    try {
      const res = await fetch(`${API_URL}/api/contact/status`, {
        cache: 'no-store'
      });
      if (!res.ok) throw new Error('Backend status check failed');
      return await res.json();
    } catch (err) {
      console.warn('Backend status check failed, using fallback:', err);
      return { status: 'fallback', message: 'Backend unreachable' };
    }
  },
  
  submit: async (data: ContactData) => {
    const res = await fetch(`${API_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!res.ok) {
      const errData = await res.json().catch(() => ({ detail: 'Unknown server error' }));
      throw new Error(errData.detail || `Server error (${res.status})`);
    }
    
    return await res.json();
  }
};

export const ideaForgeApi = {
  generate: async (inputs: IdeaForgeInput) => {
    const res = await fetch(`${API_URL}/api/ideaforge/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    });
    
    if (!res.ok) {
      if (res.status === 429) {
        throw new Error('Rate limit exceeded');
      }
      const errData = await res.json().catch(() => ({ detail: 'Failed to generate project idea' }));
      throw new Error(errData.detail || `API error (${res.status})`);
    }
    
    return await res.json();
  }
};
