import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { UserCollection, CollectionItem } from '../lib/types';
import { v4 as uuidv4 } from 'uuid';

export const useCollections = () => {
  const [collections, setCollections] = useState<UserCollection[]>([]);
  const [collectionItems, setCollectionItems] = useState<CollectionItem[]>([]);
  const [loading, setLoading] = useState(false);

  // Load from local storage
  const fetchCollections = async () => {
    setLoading(true);
    try {
      if (typeof window !== 'undefined') {
        const savedCollections = localStorage.getItem('igniteHub_collections');
        const savedItems = localStorage.getItem('igniteHub_collectionItems');
        
        if (savedCollections) setCollections(JSON.parse(savedCollections));
        if (savedItems) setCollectionItems(JSON.parse(savedItems));
      }
    } catch (error) {
      console.error('Error fetching collections:', error);
    } finally {
      setLoading(false);
    }
  };

  const saveToStorage = (newCollections: UserCollection[], newItems: CollectionItem[]) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('igniteHub_collections', JSON.stringify(newCollections));
      localStorage.setItem('igniteHub_collectionItems', JSON.stringify(newItems));
    }
  };

  // Create a new collection
  const createCollection = async (
    name: string,
    description?: string,
    isPublic: boolean = false,
    color: string = '#8B5CF6',
    icon: string = '📚'
  ) => {
    const newCollection: UserCollection = {
      id: uuidv4(),
      user_id: 'local-user',
      name,
      description,
      is_public: isPublic,
      color,
      icon,
      items_count: 0,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    const newCollections = [newCollection, ...collections];
    setCollections(newCollections);
    saveToStorage(newCollections, collectionItems);
    toast.success('Collection created successfully!');
    return true;
  };

  // Add resource to collection
  const addToCollection = async (
    collectionId: string,
    resourceId: string,
    categoryId: string,
    notes?: string
  ) => {
    const newItem: CollectionItem = {
      id: uuidv4(),
      collection_id: collectionId,
      resource_id: resourceId,
      category_id: categoryId,
      notes,
      added_at: new Date().toISOString()
    };

    // Prevent duplicates
    if (collectionItems.some(i => i.collection_id === collectionId && i.resource_id === resourceId)) {
      toast.error('Resource already in collection');
      return false;
    }

    const newItems = [...collectionItems, newItem];
    
    // Update items count
    const newCollections = collections.map(c => 
      c.id === collectionId ? { ...c, items_count: c.items_count + 1, updated_at: new Date().toISOString() } : c
    );

    setCollectionItems(newItems);
    setCollections(newCollections);
    saveToStorage(newCollections, newItems);
    
    toast.success('Added to collection!');
    return true;
  };

  // Remove resource from collection
  const removeFromCollection = async (collectionId: string, resourceId: string) => {
    const newItems = collectionItems.filter(i => !(i.collection_id === collectionId && i.resource_id === resourceId));
    
    // Update items count
    const newCollections = collections.map(c => 
      c.id === collectionId ? { ...c, items_count: Math.max(0, c.items_count - 1), updated_at: new Date().toISOString() } : c
    );

    setCollectionItems(newItems);
    setCollections(newCollections);
    saveToStorage(newCollections, newItems);
    
    toast.success('Removed from collection');
    return true;
  };

  // Get collection items
  const getCollectionItems = async (collectionId: string): Promise<CollectionItem[]> => {
    return collectionItems.filter(i => i.collection_id === collectionId)
      .sort((a, b) => new Date(b.added_at).getTime() - new Date(a.added_at).getTime());
  };

  // Check if resource is in any collection
  const isInCollection = async (resourceId: string): Promise<string[]> => {
    return collectionItems
      .filter(i => i.resource_id === resourceId)
      .map(i => i.collection_id);
  };

  useEffect(() => {
    fetchCollections();
  }, []);

  return {
    collections,
    loading,
    createCollection,
    addToCollection,
    removeFromCollection,
    getCollectionItems,
    isInCollection,
    fetchCollections
  };
};