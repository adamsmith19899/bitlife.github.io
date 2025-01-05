import React from 'react';
import { TextContent } from './TextContent';
import { TextStats } from './TextStats';

export const TextSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-transparent to-red-900/30">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <TextContent />
          <TextStats />
        </div>
      </div>
    </section>
  );
};