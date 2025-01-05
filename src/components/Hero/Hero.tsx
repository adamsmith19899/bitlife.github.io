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
              Bitlife Simulator
            </h1>
            <p className="text-white/80 text-base md:text-lg">
              Players make choices at every stage, influencing their character's relationships, education, career, health, and overall well-being.
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
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgl38qHBIQfta9Ln2cjSzyHfpygl9TpIUCWa6bTO-jGiPdGFsbGuIzybD8lHiW2DrXEKcfS_GVQd_kYawF35oox9c9h2HoEk628mmwwbpx3pECg4Hd6VzC71k_bUJzRdBh09xj5R4p4d5XwCKFS2E_5JqQNgpIG64gN_GVXdsnNo4SIesueuyHhSU4TfOQ/s320/Untitled_design__95_-removebg-preview.png"
              alt="Bitlife Github"
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
