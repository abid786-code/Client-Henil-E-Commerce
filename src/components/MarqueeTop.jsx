import React from 'react';
import { ArrowRight } from 'lucide-react';

const MarqueeSection = () => {
  return (
    <div className="hidden bg-gray-800 py-3 fixed top-0 w-full z-50">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
      <div className="whitespace-nowrap inline-block animate-marquee" style={{ animation: 'marquee 15s linear infinite' }}>
        <a
          href="https://yourlink.com"
          className="flex items-center text-yellow-50 hover:underline px-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="mr-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, minus.</span>
          <ArrowRight size={20} />
        </a>
      </div>
    </div>
  );
};

export default MarqueeSection;
