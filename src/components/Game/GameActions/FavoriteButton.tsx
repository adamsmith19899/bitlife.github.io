import React from 'react';
import { Heart } from 'lucide-react';
import { useFavorites } from '../../../hooks/useFavorites';

interface FavoriteButtonProps {
  gameId: string;
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({ gameId }) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(gameId);

  return (
    <button
      onClick={() => toggleFavorite(gameId)}
      className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors text-sm md:text-base group"
      aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
    >
      <Heart
        size={16}
        className={`md:w-[18px] md:h-[18px] transition-colors ${
          favorite ? 'fill-red-500 text-red-500' : 'group-hover:text-red-500'
        }`}
      />
      <span>{favorite ? 'Favorited' : 'Favorite'}</span>
    </button>
  );
};