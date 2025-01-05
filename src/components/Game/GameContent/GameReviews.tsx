import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    author: 'John Doe',
    rating: 5,
    content: 'Amazing game! The graphics are stunning and gameplay is super engaging.',
    date: '2 days ago',
  },
  {
    author: 'Jane Smith',
    rating: 4,
    content: 'Really fun to play, especially with friends. Could use more levels though.',
    date: '1 week ago',
  },
];

export const GameReviews: React.FC = () => {
  return (
    <div className="bg-white/5 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-6">
      <h2 className="text-lg md:text-xl font-semibold text-white mb-4">Player Reviews</h2>
      <div className="space-y-4">
        {reviews.map((review, index) => (
          <div key={index} className="p-3 rounded-lg bg-white/5">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-white/90 text-sm">{review.author[0]}</span>
                </div>
                <span className="text-white font-medium text-sm">{review.author}</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={`${
                      i < review.rating
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-white/70 text-sm">{review.content}</p>
            <p className="text-white/50 text-xs mt-2">{review.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};