import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DropdownMenu } from './Header/DropdownMenu';
import { Logo } from './Header/Logo';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-2 md:top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1rem)] md:w-auto">
      <nav className="relative px-3 md:px-6 py-2 md:py-3 bg-white/20 backdrop-blur-md rounded-full shadow-lg">
        <div className="flex items-center gap-6 md:gap-12">
          <Logo />
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 md:gap-4">
              <button 
                className="text-white hover:text-white/80 transition-colors text-sm md:text-base"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                Blog
              </button>
              <Link to="/about" className="text-white hover:text-white/80 transition-colors text-sm md:text-base">About</Link>
              <Link to="/contact" className="text-white hover:text-white/80 transition-colors text-sm md:text-base">Contact</Link>
            </div>
          </div>

          <DropdownMenu 
            isOpen={isMenuOpen}
            onClose={() => setIsMenuOpen(false)}
          />
        </div>
      </nav>
    </header>
  );
};