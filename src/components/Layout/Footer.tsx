import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin } from 'lucide-react';

const footerLinks = [
  { title: 'Company', links: [
    { label: 'About', path: '/about' },
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Terms', path: '/terms' },    
  ]},
];

const socialLinks = [
  { icon: Github, href: 'https://github.com' },
  { icon: Twitter, href: 'https://twitter.com' },
  { icon: Linkedin, href: 'https://linkedin.com' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="relative mt-auto">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-red-950/50" />
      <div className="relative container mx-auto px-4 py-12">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">About BitLife</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                BitLife is a revolutionary life simulation platform where players can experience unique storylines, make impactful decisions, and shape their virtual destiny through immersive gameplay.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">{footerLinks[0].title}</h3>
              <ul className="space-y-2">
                {footerLinks[0].links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      to={link.path}
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
                  >
                    <social.icon className="w-5 h-5 text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-white/60 text-sm text-center">
              © {new Date().getFullYear()} BitLife. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
