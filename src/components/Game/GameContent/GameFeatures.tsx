import React from 'react';
import { Sparkles, Target, Trophy, Users } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Stunning Graphics',
    description: 'Immerse yourself in breathtaking visuals and detailed environments.',
  },
  {
    icon: Target,
    title: 'Multiple Levels',
    description: 'Progress through challenging levels with increasing difficulty.',
  },
  {
    icon: Trophy,
    title: 'Achievements',
    description: 'Unlock special achievements and compete with other players.',
  },
  {
    icon: Users,
    title: 'Multiplayer',
    description: 'Play with friends or challenge players worldwide.',
  },
];

export const GameFeatures: React.FC = () => {
  return (
    <div className="bg-white/5 backdrop-blur-md rounded-lg md:rounded-2xl p-3 md:p-6">
      <h2 className="text-base md:text-xl font-semibold text-white mb-3 md:mb-4">Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-2 md:gap-3 p-2.5 md:p-3 rounded-lg bg-white/5">
            <feature.icon className="text-white/90 w-4 h-4 md:w-5 md:h-5 mt-0.5" />
            <div>
              <h3 className="text-white font-medium text-sm md:text-base">{feature.title}</h3>
              <p className="text-white/70 text-xs md:text-sm mt-0.5 md:mt-1">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};