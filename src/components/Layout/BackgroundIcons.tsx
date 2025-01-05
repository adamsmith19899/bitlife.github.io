import React from 'react';
import { FloatingIcon } from '../FloatingIcon';
import { icons, colors } from '../../constants/icons';
import { generateRandomPosition } from '../../utils/animation';

export const BackgroundIcons: React.FC = () => {
  return (
    <>
      {Array.from({ length: 20 }).map((_, index) => {
        const IconComponent = icons[index % icons.length];
        const color = colors[index % colors.length];
        const size = 20 + Math.random() * 30;
        
        return (
          <FloatingIcon
            key={index}
            icon={IconComponent}
            color={color}
            size={size}
            style={generateRandomPosition()}
          />
        );
      })}
    </>
  );
};