import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* LEFT SIDE: Logo + Links */}
        <div className="flex items-center gap-10">
                             <button
              onClick={() => scrollToSection("hero")}
              className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition"
            >
              BOMify
            </button>
          {/* Desktop Links (Left-Aligned) */}
          <div className="hidden md:flex items-center gap-8 text-gray-800 font-medium">
            <button
              onClick={() => scrollToSection("hero")}
              className="hover:text-blue-600 transition"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="hover:text-blue-600 transition"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="hover:text-blue-600 transition"
            >
              Pricing
            </button>
          </div>
        </div>

        {/* RIGHT SIDE: Auth Buttons */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/signin" className="hover:text-blue-600 transition font-medium">
            Sign In
          </Link>
          <Link
            to="/signup"
            className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition font-medium"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
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
            <button
              onClick={() => scrollToSection("hero")}
              className="hover:text-blue-600 text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="hover:text-blue-600 text-left"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="hover:text-blue-600 text-left"
            >
              Pricing
            </button>
            <Link to="/signin" onClick={toggleMenu} className="hover:text-blue-600">
              Sign In
            </Link>
            <Link
              to="/signup"
              onClick={toggleMenu}
              className="bg-blue-600 text-white px-4 py-2 rounded-full text-center hover:bg-blue-700"
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
