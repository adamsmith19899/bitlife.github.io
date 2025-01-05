import React from 'react';
import { Baby } from 'lucide-react';
import { useCursorPosition } from './useCursorPosition';
import { useFollowerAnimation } from './useFollowerAnimation';

export const CursorFollower: React.FC = () => {
  const { position } = useCursorPosition();
  const { ref, style } = useFollowerAnimation(position);

  return (
    <div
      ref={ref}
      className="fixed pointer-events-none z-50 transition-transform"
      style={style}
    >
      <Baby 
        size={24} 
        className="text-white/80 animate-bounce"
      />
    </div>
  );
};