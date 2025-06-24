import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section id="hero" className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Hero Text */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 tracking-wide text-center leading-tight"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        Explore to My Portfolio
      </motion.h1>
      <motion.p
        className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl text-center mx-auto px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        A collection of my projects, expertise, and dedication to technology. Let’s create something extraordinary together.
      </motion.p>

      {/* Link for Smooth Scrolling */}
      <Link
        to="projects" // This is the target section ID
        smooth={true} // Enables smooth scrolling
        offset={-70} // Adjusts scroll position for fixed navigation bar
        duration={500} // Scroll duration in ms
        className="px-8 py-4 bg-gradient-to-r cursor-pointer from-teal-400 to-teal-600 text-white font-semibold rounded-full shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl focus:outline-none z-10"
      >
        View Projects
      </Link>

      {/* Animated Wave Shape with Decreased Height */}
      <div className="absolute bottom-0 w-full overflow-hidden z-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 160" // Decreased height by adjusting the viewBox height
          className="wave-shape fill-current text-teal-600"
        >
          <path
            className="wave-path"
            fill="currentColor"
            d="M0,96L48,106.7C96,117,192,139,288,149.3C384,160,480,160,576,138.7C672,117,768,75,864,74.7C960,75,1056,117,1152,128C1248,139,1344,117,1392,106.7L1440,96V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z" // Adjusted the wave path to lower the height
          ></path>
        </svg>
      </div>

      {/* Optional Decorative Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 via-gray-800 to-gray-700 opacity-30 blur-3xl"></div>

      {/* CSS Animation */}
      <style>
        {`
          .wave-path {
            animation: wave-animation 5s ease-in-out infinite;
          }

          @keyframes wave-animation {
            0% {
              d: path("M0,96L48,106.7C96,117,192,139,288,149.3C384,160,480,160,576,138.7C672,117,768,75,864,74.7C960,75,1056,117,1152,128C1248,139,1344,117,1392,106.7L1440,96V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z");
            }
            50% {
              d: path("M0,96L48,106.7C96,117,192,139,288,149.3C384,160,480,160,576,130C672,100,768,65,864,65C960,65,1056,100,1152,110C1248,120,1344,100,1392,90.7L1440,96V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z");
            }
            100% {
              d: path("M0,96L48,106.7C96,117,192,139,288,149.3C384,160,480,160,576,138.7C672,117,768,75,864,74.7C960,75,1056,117,1152,128C1248,139,1344,117,1392,106.7L1440,96V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z");
            }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
