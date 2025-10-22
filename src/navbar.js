import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const navLinks = [
    { to: "features", label: "Features" },
    { to: "pricing", label: "Pricing" },
    { to: "faq", label: "FAQ" },
    { to: "testimonials", label: "Testimonials" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/70 backdrop-blur-lg z-50 border-b border-gray-200">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex items-center">
          <span className="text-2xl font-semibold text-gray-900">BOMify</span>
        </div>
        <div className="hidden lg:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={700}
              offset={-100}
              className="text-sm font-semibold hover:text-gray-700 cursor-pointer"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex items-center space-x-4">
          <a href="#signin" className="text-sm font-bold text-gray-700 hover:text-blue-600 font-weight-medium">
            Sign in
          </a>
          <a
            href="#get-started"
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 font-weight-bold" 
           >
            Get started
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

