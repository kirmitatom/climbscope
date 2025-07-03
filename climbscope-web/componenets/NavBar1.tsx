"use client"; // Add this directive at the top

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" fixed w-full z-[9] isolate md:static md:py-8 md:px-4 md:max-w-full md:mx-auto md:flex md:items-center md:justify-between md:gap-8">
      {/* Nav Header */}
      <div className="px-4 w-full flex items-center justify-between bg-primary md:flex-1 md:p-0 md:bg-transparent">
        {/* Logo */}
        <div className="ml-5 animate-scrollright md:ml-0">
          <Link href="/" className="text-[1.75rem] font-normal font-header text-white md:text-dark">
            climbing<span className="text-white md:text-primary">Tribe</span>.
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="text-[1.5rem] text-white cursor-pointer mr-2.5 md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span>☰</span>
        </button>
      </div>

      {/* Navigation Links */}
      <ul className={`absolute top-16 left-0 w-full flex flex-col items-center justify-center gap-6 p-4 bg-primary transition-all duration-500 z-[-1] md:static md:z-auto md:p-0 md:flex-row md:bg-transparent md:transform-none ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'} md:translate-y-0`}>
        {['Home', 'Community', 'Events', 'Routes', 'Marketplace'].map((item) => (
          <li key={item}>
            <Link 
              href={`#${item}`} 
              className="font-medium text-white pb-1 hover:text-dark md:text-dark md:hover:border-b-4 md:hover:border-primary md:border-b-4 md:border-transparent"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>

      {/* Buttons */}
      <div className="hidden md:flex md:flex-1 md:justify-end md:mr-12 animate-scrollleft">
        <Link href="/signup" className="mr-4">
          <button className="px-6 py-3 font-bold text-dark bg-transparent rounded-lg transition-colors duration-300 hover:text-white">
            Sign Up
          </button>
        </Link>
        <Link href="/login">
          <button className="px-6 py-3 font-bold text-white bg-dark rounded-lg transition-colors duration-300 hover:bg-white hover:text-dark">
            Log In
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;