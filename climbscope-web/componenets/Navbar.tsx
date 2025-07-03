import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "../const";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="bg-white flex items-center justify-between max-container padding-container relative z-30 py-7 px-4 lg:px-8">
      {/* Logo */}
      <Link href="/">
        <span className="font-bold text-black text-lg">climbingscope</span>
      </Link>

      {/* Navigation Links - Hidden on mobile, visible on lg screens */}
      <ul className="hidden lg:flex items-center h-full gap-8 lg:gap-12 lg:pr-8">
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <Link
              href={link.href}
              className="regular-16 text-black cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Button (visible only on lg screens) */}
      <div className="hidden lg:flex">
        <Button 
          type="button" 
          title="Login" 
          variant="btn_dark_green" 
        />
      </div>

      {/* Mobile menu button - Visible only on mobile */}
      <Image 
        src="/menu.svg"
        alt="menu" 
        height={32} 
        width={32} 
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;