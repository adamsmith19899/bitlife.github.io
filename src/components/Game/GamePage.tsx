import React from 'react';
import { GameFrame } from './GameFrame';
import { GameContent } from './GameContent';
import { FavoriteButton } from './GameActions/FavoriteButton';
import { ShareButton } from './GameActions/ShareButton';

export const GamePage: React.FC = () => {
  const gameTitle = "Awesome Game Title";
  const gameDescription = "Experience an incredible gaming adventure with stunning graphics and immersive gameplay.";

  return (
    <div className="min-h-screen pt-16 md:pt-24 pb-6 md:pb-12 px-3 md:px-4">
      <div className="max-w-7xl mx-auto space-y-4 md:space-y-8">
        {/* Game Title and Actions */}
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-xl md:text-3xl font-bold text-white text-center">
            {gameTitle}
          </h1>
          <div className="flex items-center gap-2 md:gap-4">
            <FavoriteButton gameId="awesome-game" />
            <ShareButton 
              gameId="awesome-game"
              title={gameTitle}
              description={gameDescription}
            />
          </div>
        </div>

        {/* Game Frame */}
        <div className="flex justify-center">
          <GameFrame url="https://bith-life.vercel.app" />
        </div>

        {/* Game Description */}
        <div className="bg-white/5 backdrop-blur-md rounded-lg md:rounded-2xl p-3 md:p-6">
          <h2 className="text-base md:text-xl font-semibold text-white mb-2 md:mb-4">About the Game</h2>
          <p className="text-white/80 text-sm md:text-base">
            {gameDescription}
          </p>
        </div>

        {/* Game Content */}
        <GameContent />
      </div>
    </div>
  );
};
