// Local type definitions for the application, formerly housed in supabase.ts

export type ResourceReview = {
  id: string;
  resource_id: string;
  user_id: string;
  rating: number;
  review_text?: string;
  created_at: string;
  is_edited: boolean;
};

export type UserCollection = {
  id: string;
  user_id: string;
  name: string;
  description?: string;
  is_public: boolean;
  color: string;
  icon: string;
  items_count: number;
  created_at: string;
  updated_at: string;
};

export type CollectionItem = {
  id: string;
  collection_id: string;
  resource_id: string;
  category_id: string;
  notes?: string;
  added_at: string;
};
