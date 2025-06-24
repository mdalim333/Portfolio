import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SocialSidebar from "./components/SocialSidebar";
import { motion } from "framer-motion";
import 'font-awesome/css/font-awesome.min.css';


function App() {
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-gray-800 to-gray-700 text-textPrimary font-sans">
      {/* Header */}
      <Header />

      {/* Floating Social Sidebar */}
      <SocialSidebar />

      {/* Main Content */}
      <main className="overflow-hidden">
        {/* Hero Section with Smooth Fade-in and Slide-up */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <Hero />
        </motion.div>

        {/* Projects Section with Staggered Fade-in Animation */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
          className="py-16"
        >
          <Projects />
        </motion.section>

        {/* About Section with Horizontal Slide-in Animation */}
        <motion.section
          initial={{ x: -150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="py-16 "
        >
          <About />
        </motion.section>

        {/* Contact Section with Pop-up and Rotate Effect */}
        <motion.section
          initial={{ scale: 0.9, opacity: 0, rotate: -5 }}
          whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="py-16"
        >
          <Contact />
        </motion.section>
      </main>

      {/* Footer with Fade-in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        <Footer />
      </motion.div>
    </div>
  );
}

export default App;
