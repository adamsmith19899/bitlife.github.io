import React from 'react';
import { Icon } from 'lucide-react';

interface FloatingIconProps {
  icon: Icon;
  color: string;
  size: number;
  style: React.CSSProperties;
}

export const FloatingIcon: React.FC<FloatingIconProps> = ({ icon: IconComponent, color, size, style }) => {
  return (
    <div 
      className="absolute animate-float"
      style={style}
    >
      <IconComponent size={size} color={color} />
    </div>
  );
};