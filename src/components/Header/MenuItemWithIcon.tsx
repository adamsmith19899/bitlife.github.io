import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface MenuItemWithIconProps {
  icon: LucideIcon;
  label: string;
  path: string;
  onClick: () => void;
}

export const MenuItemWithIcon: React.FC<MenuItemWithIconProps> = ({ 
  icon: Icon, 
  label, 
  path, 
  onClick 
}) => {
  return (
    <Link
      to={path}
      className="flex items-center gap-3 px-4 py-3 text-white hover:bg-white/20 transition-colors text-sm font-medium"
      onClick={onClick}
    >
      <Icon size={16} className="text-white/80" />
      <span>{label}</span>
    </Link>
  );
};