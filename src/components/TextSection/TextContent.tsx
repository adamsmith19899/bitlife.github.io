import React from 'react';
import { ArrowRight } from 'lucide-react';

export const TextContent: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
        Transform Your Gaming Experience
      </h2>
      <p className="text-white/80 text-lg leading-relaxed">
        Join our community of passionate gamers and developers. Experience the next 
        level of gaming with cutting-edge technology and innovative design.
      </p>
      <button className="group flex items-center gap-2 text-white font-semibold hover:text-white/90 transition-colors">
        <span>Join the revolution</span>
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};