import React from 'react';
import { Target } from 'lucide-react';

export const Mission: React.FC = () => {
  return (
    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 text-center">
      <div className="inline-flex p-3 bg-white/10 rounded-full mb-4">
        <Target className="w-6 h-6 text-white" />
      </div>
      <h1 className="text-3xl font-bold text-white mb-4">Our Mission</h1>
      <p className="text-white/80 text-lg leading-relaxed">
        We're dedicated to creating immersive gaming experiences that bring people together. 
        Our platform combines cutting-edge technology with creative storytelling to deliver 
        unforgettable adventures.
      </p>
    </div>
  );
};