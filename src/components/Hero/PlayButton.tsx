import React from 'react';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PlayButton: React.FC = () => {
  return (
    <Link 
      to="/game"
      className="flex items-center gap-2 bg-white rounded-full px-6 py-3 text-red-600 font-semibold hover:bg-white/90 transition-colors"
    >
      <Play size={20} className="fill-red-600" />
      <span>Play Now</span>
    </Link>
  );
};