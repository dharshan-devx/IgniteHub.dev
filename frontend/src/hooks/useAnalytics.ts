import { useEffect, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

// Generate or get session ID
const getSessionId = (): string => {
  if (typeof window === 'undefined') {
    return '';
  }
  let sessionId = sessionStorage.getItem('igniteHub_sessionId');
  if (!sessionId) {
    sessionId = uuidv4();
    sessionStorage.setItem('igniteHub_sessionId', sessionId);
  }
  return sessionId;
};

export const useAnalytics = () => {
  const sessionId = getSessionId();

  // Track resource view (Mocked - No Database)
  const trackResourceView = useCallback(async (
    resourceId: string,
    categoryId: string,
    duration: number = 0
  ) => {
    // Analytics locally disabled
  }, [sessionId]);

  // Track search (Mocked - No Database)
  const trackSearch = useCallback(async (
    searchTerm: string,
    categoryId: string | null,
    resultsCount: number,
    filtersApplied: Record<string, any> = {}
  ) => {
    // Analytics locally disabled
  }, [sessionId]);

  // Track category visit (Mocked - No Database)
  const trackCategoryVisit = useCallback(async (
    categoryId: string,
    timeSpent: number = 0,
    resourcesViewed: number = 0
  ) => {
    // Analytics locally disabled
  }, [sessionId]);

  // Update session (Mocked - No Database)
  const updateSession = useCallback(async () => {
    // Session tracking locally disabled
  }, [sessionId]);

  useEffect(() => {
    // No-op
  }, [updateSession]);

  return {
    trackResourceView,
    trackSearch,
    trackCategoryVisit,
    updateSession
  };
};