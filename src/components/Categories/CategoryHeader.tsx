import React from 'react';

interface CategoryHeaderProps {
  title: string;
  description: string;
}

export const CategoryHeader: React.FC<CategoryHeaderProps> = ({ title, description }) => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h1>
      <p className="text-white/80 text-lg max-w-2xl mx-auto">{description}</p>
    </div>
  );
};