import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <a href="#hero" className="text-2xl font-bold text-blue-600">
          BOMify
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-800 font-medium">
          <a href="#features" className="hover:text-blue-600 transition">Features</a>
          <a href="#pricing" className="hover:text-blue-600 transition">Pricing</a>
          <a href="#get-started" className="hover:text-blue-600 transition">Get Started</a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden p-2 rounded-md text-gray-800 hover:bg-gray-100"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white shadow-lg border-t border-gray-200"
        >
          <div className="flex flex-col px-6 py-4 space-y-4 text-gray-800 font-medium">
            <a href="#features" onClick={toggleMenu} className="hover:text-blue-600">
              Features
            </a>
            <a href="#pricing" onClick={toggleMenu} className="hover:text-blue-600">
              Pricing
            </a>
            <a href="#get-started" onClick={toggleMenu} className="hover:text-blue-600">
              Get Started
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;


