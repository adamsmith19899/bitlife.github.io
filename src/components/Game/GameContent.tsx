import React from 'react';
import { GameFeatures } from './GameContent/GameFeatures';
import { GameReviews } from './GameContent/GameReviews';

export const GameContent: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:gap-6">
      <GameFeatures />
      <GameReviews />
    </div>
  );
};