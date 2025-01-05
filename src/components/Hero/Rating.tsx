import React from 'react';
import { Star } from 'lucide-react';

interface RatingProps {
  rating: number;
  count: number;
}

export const Rating: React.FC<RatingProps> = ({ rating, count }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={`${
              i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      <span className="text-white/80 text-sm">({count.toLocaleString()})</span>
    </div>
  );
};