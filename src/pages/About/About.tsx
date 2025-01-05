import React from 'react';
import { Team } from './components/Team';
import { Mission } from './components/Mission';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <Mission />
        <Team />
      </div>
    </div>
  );
};