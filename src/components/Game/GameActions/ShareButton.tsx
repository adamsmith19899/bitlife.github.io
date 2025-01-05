import React, { useState } from 'react';
import { Share2 } from 'lucide-react';
import { useShare } from '../../../hooks/useShare';

interface ShareButtonProps {
  gameId: string;
  title: string;
  description: string;
}

export const ShareButton: React.FC<ShareButtonProps> = ({ gameId, title, description }) => {
  const { share, isSharing } = useShare();
  const [message, setMessage] = useState<string | null>(null);

  const handleShare = async () => {
    try {
      const result = await share({
        title,
        text: description,
        url: `${window.location.origin}/game/${gameId}`,
      });
      
      if (result) {
        setMessage(result);
        setTimeout(() => setMessage(null), 2000);
      }
    } catch (error) {
      setMessage('Failed to share');
      setTimeout(() => setMessage(null), 2000);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={handleShare}
        disabled={isSharing}
        className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors text-sm md:text-base disabled:opacity-50"
      >
        <Share2 size={16} className="md:w-[18px] md:h-[18px]" />
        <span>Share</span>
      </button>
      
      {message && (
        <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 bg-white/90 text-red-600 text-sm rounded-full">
          {message}
        </div>
      )}
    </div>
  );
};