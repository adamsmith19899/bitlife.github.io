import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <h1 className="text-3xl font-bold text-white mb-4">Welcome to Eblogs.online</h1>
      <p className="text-white/80 text-lg leading-relaxed">
        Eblogs.online is your premier destination for online gaming. Our mission is to provide a fun, safe, and
        enjoyable gaming experience for players of all ages and skill levels.
      </p>

      {/* Our Story Section */}
      <h1 className="text-3xl font-bold text-white mb-4">Our Story</h1>
      <p className="text-white/80 text-lg leading-relaxed">
        Eblogs.online was founded by a team of gaming enthusiasts who wanted to create a platform where players could
        come together, share tips and strategies, and enjoy their favorite games. Since our launch, we've grown into a
        vibrant community of gamers from all over the world.
      </p>
    </div>
  );
};
