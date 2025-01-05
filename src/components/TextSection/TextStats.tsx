import React from 'react';
import { TextStatCard } from './TextStatCard';
import { Users, Gamepad, Trophy, Star } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '2M+',
    label: 'Active Players',
  },
  {
    icon: Gamepad,
    value: '500+',
    label: 'Games Created',
  },
  {
    icon: Trophy,
    value: '10K+',
    label: 'Tournaments',
  },
  {
    icon: Star,
    value: '4.9',
    label: 'User Rating',
  },
];

export const TextStats: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4 md:gap-6">
      {stats.map((stat, index) => (
        <TextStatCard key={index} {...stat} />
      ))}
    </div>
  );
};