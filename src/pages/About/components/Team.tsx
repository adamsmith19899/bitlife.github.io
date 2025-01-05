import React from 'react';

const team = [
  {
    name: 'Sarah Johnson',
    role: 'Game Director',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
  },
  {
    name: 'Michael Chen',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Art Director',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
  },
];

export const Team: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white text-center">Meet Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {team.map((member) => (
          <div key={member.name} className="bg-white/5 backdrop-blur-md rounded-xl p-4 text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-white font-semibold">{member.name}</h3>
            <p className="text-white/70 text-sm">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};