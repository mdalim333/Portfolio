import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 via-gray-800 to-gray-700 text-white text-center py-8">
      <div className="container mx-auto px-6">
        {/* Footer Text */}
        <p className="text-lg sm:text-xl font-semibold mb-4">&copy; 2024 Usman Akhtar. All rights reserved.</p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://github.com/mdalim333"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-teal-600 transition-colors duration-300"
          >
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/mdalim333"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-teal-600 transition-colors duration-300"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a
            href="https://x.com/mr__aalim__khan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-teal-600 transition-colors duration-300"
          >
            <i className="fab fa-twitter fa-2x"></i>
          </a>
        </div>

        {/* Optional Decorative Overlay for Footer */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 via-gray-800 to-gray-700 opacity-20 blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;
