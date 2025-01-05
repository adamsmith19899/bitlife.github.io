import React from 'react';

export const ContactForm: React.FC = () => {
  return (
    <form className="bg-white/5 backdrop-blur-md rounded-2xl p-6 space-y-4">
      <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
      
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-1">Name</label>
        <input
          type="text"
          id="name"
          className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-white/40"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-1">Email</label>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-white/40"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-1">Message</label>
        <textarea
          id="message"
          rows={4}
          className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-white/40"
          placeholder="Your message..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-white text-red-600 font-semibold py-2 rounded-lg hover:bg-white/90 transition-colors"
      >
        Send Message
      </button>
    </form>
  );
};