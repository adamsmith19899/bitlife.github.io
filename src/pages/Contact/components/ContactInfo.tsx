import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const contactDetails = [
  {
    icon: MapPin,
    title: 'Visit us',
    details: ['123 Gaming Street', 'San Francisco, CA 94105'],
  },
  {
    icon: Phone,
    title: 'Call us',
    details: ['+1 (555) 457-4517'],
  },
  {
    icon: Mail,
    title: 'Email us',
    details: ['info@eblogs.online'],
  },
];

export const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Get in Touch</h1>
      <p className="text-white/80">
        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
      </p>
      
      <div className="space-y-4">
        {contactDetails.map((item) => (
          <div key={item.title} className="flex items-start gap-4">
            <div className="p-2 bg-white/10 rounded-lg">
              <item.icon className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-medium">{item.title}</h3>
              {item.details.map((detail) => (
                <p key={detail} className="text-white/70">{detail}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
