import React from 'react';
import { Header } from '../Header';
import { Footer } from './Footer';
import { CursorFollower } from '../CursorFollower/CursorFollower';
import { BackgroundIcons } from './BackgroundIcons';

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-gradient-to-br from-red-800 via-red-600 to-red-400">
      <Header />
      <CursorFollower />
      <BackgroundIcons />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};