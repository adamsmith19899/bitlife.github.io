import React from 'react';
import { Play } from 'lucide-react';

interface StatsProps {
  plays: number;
}

export const Stats: React.FC<StatsProps> = ({ plays }) => {
  return (
    <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
      <Play size={16} className="text-white" />
      <span className="text-white text-sm font-medium">
        {plays.toLocaleString()} plays
      </span>
    </div>
  );
};