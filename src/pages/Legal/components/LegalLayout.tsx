import React from 'react';

interface LegalLayoutProps {
  title: string;
  children: React.ReactNode;
}

export const LegalLayout: React.FC<LegalLayoutProps> = ({ title, children }) => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-8">{title}</h1>
          {children}
        </div>
      </div>
    </div>
  );
};