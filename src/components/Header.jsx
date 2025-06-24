import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-lg shadow-lg z-50 transition-all duration-300 ease-in-out">
      <nav className="flex items-center justify-between p-5 max-w-6xl mx-auto">
        {/* Logo */}
        <h1 className="text-3xl font-display font-extrabold text-gray-200 hover:text-teal-500 transition-all duration-200 cursor-pointer">
          USA.
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden font-family:League Spartan md:flex space-x-8">
          <Link
            to="hero"
            smooth
            duration={500}
            className="text-lg text-gray-400 hover:text-teal-500 transition-all duration-200 cursor-pointer uppercase"
          >
            Home
          </Link>
          <Link
            to="projects"
            smooth
            duration={500}
            className="text-lg text-gray-400 hover:text-teal-500 transition-all duration-200 cursor-pointer uppercase"
          >
            Projects
          </Link>
          <Link
            to="about"
            smooth
            duration={500}
            className="text-lg text-gray-400 hover:text-teal-500 transition-all duration-200 cursor-pointer uppercase"
          >
            About
          </Link>
          <Link
            to="contact"
            smooth
            duration={500}
            className="text-lg text-gray-400 hover:text-teal-500 transition-all duration-200 cursor-pointer uppercase"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl text-gray-400 focus:outline-none"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden flex flex-col items-center space-y-6 py-6 bg-white shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            to="hero"
            smooth
            duration={500}
            onClick={() => setIsOpen(false)}
            className="text-xl text-gray-400 hover:text-teal-500 transition-all duration-200 cursor-pointer uppercase"
          >
            Home
          </Link>
          <Link
            to="projects"
            smooth
            duration={500}
            onClick={() => setIsOpen(false)}
            className="text-xl text-gray-400 hover:text-teal-500 transition-all duration-200 cursor-pointer uppercase"
          >
            Projects
          </Link>
          <Link
            to="about"
            smooth
            duration={500}
            onClick={() => setIsOpen(false)}
            className="text-xl text-gray-400 hover:text-teal-500 transition-all duration-200 cursor-pointer uppercase"
          >
            About
          </Link>
          <Link
            to="contact"
            smooth
            duration={500}
            onClick={() => setIsOpen(false)}
            className="text-xl text-gray-400 hover:text-teal-500 transition-all duration-200 cursor-pointer uppercase"
          >
            Contact
          </Link>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
