import { useState, useCallback } from 'react';

interface ShareData {
  title: string;
  text: string;
  url: string;
}

export const useShare = () => {
  const [isSharing, setIsSharing] = useState(false);

  const share = useCallback(async (data: ShareData) => {
    setIsSharing(true);
    try {
      if (navigator.share) {
        await navigator.share(data);
      } else {
        // Fallback: Copy to clipboard
        await navigator.clipboard.writeText(data.url);
        return 'Link copied to clipboard!';
      }
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') {
        return null; // User cancelled sharing
      }
      throw error;
    } finally {
      setIsSharing(false);
    }
  }, []);

  return { share, isSharing };
};