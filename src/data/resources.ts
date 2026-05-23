export interface Pricing {
  free?: string;
  paid?: string[];
}

export interface Resource {
  id: string;
  name: string;
  description: string;
  detailedDescription?: string;
  url: string;
  tags: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  type?: 'course' | 'tutorial' | 'article' | 'video' | 'book' | 'tool' | 'website' | 'platform' | 'app' | 'service' | 'community' | 'model';
  isFree: boolean;
  rating?: number;
  reviewCount?: number;
  featured?: boolean;
  features?: string[];
  pricing?: Pricing;
  requirements?: string[];
  alternatives?: string[];
  location?: string;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  icon: string;
  gradient: string;
  resources: Resource[];
}

import { aiTechTools } from './categories/aiTechTools';
import { grantsFunding } from './categories/grantsFunding';
import { hackathonsEvents } from './categories/hackathonsEvents';
import { learningCourses } from './categories/learningCourses';
import { onlineCommunities } from './categories/onlineCommunities';
import { openSourceVolunteer } from './categories/openSourceVolunteer';

export const categories: Category[] = [
  aiTechTools,
  grantsFunding,
  hackathonsEvents,
  learningCourses,
  onlineCommunities,
  openSourceVolunteer
];
