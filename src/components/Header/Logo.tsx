import React from 'react';
import { Link } from 'react-router-dom';
import { Baby } from 'lucide-react';

export const Logo: React.FC = () => {
  return (
    <Link 
      to="/" 
      className="flex items-center gap-2 text-white hover:text-white/90 transition-colors"
    >
      <Baby className="w-5 h-5 md:w-6 md:h-6" />
      <span className="font-bold text-sm md:text-lg">eBlogs </span>
    </Link>
  );
};
