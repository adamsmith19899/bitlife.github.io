import React from 'react';
import { Icon } from 'lucide-react';

interface TextStatCardProps {
  icon: Icon;
  value: string;
  label: string;
}

export const TextStatCard: React.FC<TextStatCardProps> = ({ icon: IconComponent, value, label }) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-colors">
      <IconComponent className="w-6 h-6 text-white/80 mb-3" />
      <div className="space-y-1">
        <p className="text-2xl font-bold text-white">{value}</p>
        <p className="text-sm text-white/70">{label}</p>
      </div>
    </div>
  );
};