import React from 'react';
import { Cpu, HardDrive, Monitor, Wifi } from 'lucide-react';

const requirements = [
  {
    icon: Cpu,
    label: 'Processor',
    value: 'Intel Core i5 or equivalent',
  },
  {
    icon: HardDrive,
    label: 'Memory',
    value: '8 GB RAM',
  },
  {
    icon: Monitor,
    label: 'Graphics',
    value: 'WebGL 2.0 compatible',
  },
  {
    icon: Wifi,
    label: 'Network',
    value: 'Broadband connection',
  },
];

export const GameRequirements: React.FC = () => {
  return (
    <div className="bg-white/5 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-6">
      <h2 className="text-lg md:text-xl font-semibold text-white mb-4">System Requirements</h2>
      <div className="space-y-3">
        {requirements.map((req, index) => (
          <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
            <req.icon className="text-white/90 w-5 h-5" />
            <div>
              <p className="text-white/70 text-sm">{req.label}</p>
              <p className="text-white text-sm font-medium">{req.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};