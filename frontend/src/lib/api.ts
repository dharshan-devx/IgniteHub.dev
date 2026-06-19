const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
export class ApiError extends Error {
  constructor(
    public readonly status: number,
    message: string,
  ) {
    super(message);
    this.name = 'ApiError';
  }
}
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
async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...init,
  });
  if (!res.ok) {
    let detail = `HTTP ${res.status}`;
    try {
      const body = await res.json();
      detail = body?.detail ?? detail;
    } catch {
    }
    throw new ApiError(res.status, detail);
  }
  return res.json() as Promise<T>;
}
export const contactApi = {
  checkStatus: async (): Promise<{ status: string; message: string }> => {
    try {
      return await apiFetch<{ status: string; message: string }>(
        '/api/v1/contact/status',
        { cache: 'no-store' },
      );
    } catch {
      return { status: 'fallback', message: 'Backend unreachable' };
    }
  },
  submit: (data: ContactData): Promise<{ success: boolean; message: string }> =>
    apiFetch<{ success: boolean; message: string }>('/api/v1/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
};
export const ideaForgeApi = {
  generate: (inputs: IdeaForgeInput): Promise<ProjectIdea> =>
    apiFetch<ProjectIdea>('/api/v1/ideaforge/generate', {
      method: 'POST',
      body: JSON.stringify(inputs),
    }),
};
