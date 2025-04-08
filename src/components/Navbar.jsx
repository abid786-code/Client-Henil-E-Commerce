import { Menu } from "lucide-react";
import logo from '../assets/logo.png';
import { ArrowRight } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full border-b border-black fixed z-20 bg-yellow-50">

<div className="overflow-hidden bg-gray-800 py-3  top-0 w-full z-50">
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
      <nav className="max-w-7xl h-24 mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo + Brand */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="" className="h-24" />
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-8 text- font-2xl">
          <li><a href="#" className="hover:text-gray-700 ">New Arrival</a></li>
          <li><a href="#" className="hover:text-gray-700 ">Most Trending</a></li>
          <li><a href="#" className="hover:text-gray-700 ">Track Order</a></li>
          <li><a href="#" className="hover:text-gray-700 ">Support</a></li>
        </ul>

        {/* Login Button */}
        <button className="bg-black text-white px-4 py-1 rounded">
          Order Now
        </button>
      </nav>
    </header>
  );
}
