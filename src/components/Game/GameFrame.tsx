import React from 'react';
import { Maximize2, Minimize2 } from 'lucide-react';

interface GameFrameProps {
  url: string;
}

export const GameFrame: React.FC<GameFrameProps> = ({ url }) => {
  const [isFullscreen, setIsFullscreen] = React.useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div 
      className={`relative ${
        isFullscreen 
          ? 'fixed inset-0 z-50' 
          : 'w-full aspect-video max-w-7x1'
      }`}
    >
      <div className="absolute top-2 md:top-4 right-2 md:right-4 z-10">
        <button
          onClick={toggleFullscreen}
          className="p-1.5 md:p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors"
        >
          {isFullscreen ? (
            <Minimize2 className="text-white w-4 h-4 md:w-5 md:h-5" />
          ) : (
            <Maximize2 className="text-white w-4 h-4 md:w-5 md:h-5" />
          )}
        </button>
      </div>
      <iframe
        src={url}
        className="w-full h-full rounded-xl md:rounded-2xl shadow-2xl"
        style={{ 
          minHeight: isFullscreen ? '100vh' : '600px',
          height: isFullscreen ? '100vh' : '600px'
        }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};
