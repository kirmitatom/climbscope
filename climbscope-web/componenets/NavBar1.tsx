"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" fixed w-full z-[9] md:static md:py-8 md:px-4 md:max-w-full md:mx-auto md:flex md:items-center md:justify-between md:gap-8">
      {/* Nav Header */}
      <div className="px-4 w-full flex items-center justify-between bg-primary md:flex-1 md:p-0 md:bg-transparent">
        {/* Logo */}
        <div className="ml-5 animate-scrollright md:ml-0">
          <Link href="/" className="text-[1.75rem] font-normal font-header text-white md:text-dark">
            climbing<span className="text-white md:text-primary">scope</span>.
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

      {/* Navigation Links - Changed positioning and z-index */}
      <div className={`bg-black fixed top-16 left-0 w-full bg-primary transition-all duration-500 overflow-hidden ${isMenuOpen ? 'max-h-screen' : 'max-h-0'} md:max-h-none md:static md:bg-transparent`}>
        <ul className="flex flex-col items-center justify-center gap-6 p-4 md:flex-row md:p-0">
          {['Home', 'Map', 'Ranks', 'climbing buddy', 'MyProfile'].map((item) => (
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
      </div>

      {/* Buttons */}
      <div className="hidden md:flex md:flex-1 md:justify-end md:mr-12 animate-scrollleft">
        <Link href="/signup" className="mr-4">
          <button className="px-6 py-3 font-bold bg-white text-black rounded-lg transition-colors duration-300 hover:text-white hover:bg-black">
            SignUp
          </button>
        </Link>
        <Link href="/login">
          <button className="px-6 py-3 font-bold text-white bg-dark rounded-lg transition-colors duration-300 hover:bg-white hover:text-black">
            LogIn
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;