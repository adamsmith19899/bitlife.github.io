import React from 'react';
import { Rating } from './Rating';
import { Stats } from './Stats';
import { PlayButton } from './PlayButton';
import { BlogSection } from '../Blog/BlogSection';
import { TextSection } from '../TextSection/TextSection';

export const Hero: React.FC = () => {
  return (
    <>
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-8 md:py-0 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 md:space-y-6 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Experience the Magic of Creation
            </h1>
            <p className="text-white/80 text-base md:text-lg">
              Join millions of creators and bring your ideas to life with our intuitive platform.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 justify-center md:justify-start">
              <PlayButton />
              <Rating rating={4.8} count={12350} />
            </div>
            <Stats plays={2345678} />
          </div>
          
          <div className="relative mt-6 md:mt-0">
            <div className="absolute inset-0 bg-gradient-to-t from-red-800/50 to-transparent rounded-xl md:rounded-2xl" />
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
              alt="Creative workspace"
              className="w-full h-[300px] md:h-[600px] object-cover rounded-xl md:rounded-2xl"
            />
          </div>
        </div>
      </div>
      <BlogSection />
      <TextSection />
    </>
  );
};