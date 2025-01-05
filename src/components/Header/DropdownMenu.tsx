import React from 'react';
import { MenuItemWithIcon } from './MenuItemWithIcon';
import { menuItems } from './MenuItems';

interface DropdownMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        onClick={onClose}
      />
      <div className="absolute top-full left-0 mt-2 w-56 bg-red-900/90 backdrop-blur-md rounded-xl overflow-hidden shadow-2xl z-50 border border-white/10">
        <div className="py-1">
          {menuItems.map((item) => (
            <MenuItemWithIcon
              key={item.path}
              icon={item.icon}
              label={item.label}
              path={item.path}
              onClick={onClose}
            />
          ))}
        </div>
      </div>
    </>
  );
};