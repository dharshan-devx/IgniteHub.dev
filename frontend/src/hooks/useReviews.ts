import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { ResourceReview } from '../lib/types';
import { v4 as uuidv4 } from 'uuid';

export const useReviews = (resourceId?: string) => {
  const [reviews, setReviews] = useState<ResourceReview[]>([]);
  const [loading, setLoading] = useState(false);
  const [averageRating, setAverageRating] = useState<number | null>(null);

  // Fetch reviews for a resource
  const fetchReviews = async () => {
    if (!resourceId) return;
    
    setLoading(true);
    try {
      if (typeof window !== 'undefined') {
        const savedReviewsStr = localStorage.getItem('igniteHub_reviews');
        if (savedReviewsStr) {
          const allReviews: ResourceReview[] = JSON.parse(savedReviewsStr);
          const resourceReviews = allReviews.filter(r => r.resource_id === resourceId)
            .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
            
          setReviews(resourceReviews);
          
          if (resourceReviews.length > 0) {
            const sum = resourceReviews.reduce((acc, rev) => acc + rev.rating, 0);
            setAverageRating(Math.round((sum / resourceReviews.length) * 10) / 10);
          } else {
            setAverageRating(null);
          }
        }
      }
    } catch (error) {
      console.error('Error fetching reviews:', error);
      toast.error('Failed to load reviews');
    } finally {
      setLoading(false);
    }
  };

  const saveToStorage = (newReview: ResourceReview, allReviews: ResourceReview[]) => {
    // If updating existing
    const existingIndex = allReviews.findIndex(r => r.id === newReview.id);
    let updatedReviews = [...allReviews];
    
    if (existingIndex >= 0) {
      updatedReviews[existingIndex] = newReview;
    } else {
      updatedReviews.push(newReview);
    }
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('igniteHub_reviews', JSON.stringify(updatedReviews));
    }
  };

  // Submit or update a review
  const submitReview = async (rating: number, reviewText?: string) => {
    if (!resourceId) return false;

    try {
      let savedReviewsStr = null;
      if (typeof window !== 'undefined') {
        savedReviewsStr = localStorage.getItem('igniteHub_reviews');
      }
      const allReviews: ResourceReview[] = savedReviewsStr ? JSON.parse(savedReviewsStr) : [];
      
      // Check if user already reviewed (using a generic local-user id)
      const userId = 'local-user';
      const existingReview = allReviews.find(r => r.resource_id === resourceId && r.user_id === userId);

      const newReview: ResourceReview = {
        id: existingReview ? existingReview.id : uuidv4(),
        resource_id: resourceId,
        user_id: userId,
        rating,
        review_text: reviewText,
        created_at: existingReview ? existingReview.created_at : new Date().toISOString(),
        is_edited: !!existingReview
      };

      saveToStorage(newReview, allReviews);
      toast.success(existingReview ? 'Review updated!' : 'Review submitted!');
      await fetchReviews();
      return true;
    } catch (error) {
      console.error('Error submitting review:', error);
      toast.error('Failed to submit review');
      return false;
    }
  };

  // Report a review (Mocked)
  const reportReview = async (reviewId: string, reason: string) => {
    try {
      // Just mock success
      toast.success('Review reported successfully');
      return true;
    } catch (error) {
      console.error('Error reporting review:', error);
      toast.error('Failed to report review');
      return false;
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [resourceId]);

  return {
    reviews,
    loading,
    averageRating,
    submitReview,
    reportReview,
    fetchReviews
  };
};