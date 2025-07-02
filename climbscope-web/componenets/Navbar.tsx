import Link from "next/link";
import { NAV_LINKS } from "../const";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between max-container padding-container relative z-30 py-7 px-4 lg:px-8">
      {/* Logo */}
      <Link href="#">
        <span className="font-bold text-white text-lg">climbingscope</span>
      </Link>

      {/* Navigation Links */}
      <ul className="flex items-center h-full gap-8 pr-4 lg:gap-12 lg:pr-8">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-white cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      {/* Button (visible only on lg screens) */}
      <div className="hidden lg:flex">
        <Button 
          type="button" 
          title="Login" 
          variant="btn_dark_green" 
          // icon="/user.svg" (optional: add if you have an icon)
        />
      </div>

      
    </nav>
  );
};

export default Navbar;