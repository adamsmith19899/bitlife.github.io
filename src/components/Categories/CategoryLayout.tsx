import React from 'react';

interface CategoryLayoutProps {
  children: React.ReactNode;
}

export const CategoryLayout: React.FC<CategoryLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-7xl">
        {children}
      </div>
    </div>
  );
};