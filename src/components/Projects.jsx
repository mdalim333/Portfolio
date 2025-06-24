import React from "react";
import { motion } from "framer-motion";

const projects = [
  { name: "Globe Web Application", description: "Globe connects property owners with travelers seeking accommodations worldwide. It offers a user-friendly platform for browsing, reviewing, and hosting rental properties, making it seamless for both parties.", image: "/Portfolio/images/Globe.png", link: "https://globe-q069.onrender.com", link2: "https://github.com/UsmanAkhtar0/Globe.git" },
  { name: "Weather App", description: "The Weather App is a web-based tool designed to provide real-time weather information for any city around the world. The app features a clean and user-friendly interface, making it easy to search for and view current weather conditions.", image: "/Portfolio/images/Weather.png", link: "https://usmanakhtar0.github.io/Weather_app/", link2: "https://github.com/UsmanAkhtar0/Weather_app.git" },
  { name: "PW Skills", description: "The PW-Tailwind Project is a visually appealing and responsive website designed to highlight the power and flexibility of Tailwind CSS in building modern user interfaces. It demonstrates how utility-first CSS frameworks can streamline the development process while delivering professional and aesthetic results.", image: "/Portfolio/images/PW.png", link: "https://usmanakhtar0.github.io/PW-Tailwind_project/", link2: "https://github.com/UsmanAkhtar0/PW-Tailwind_project.git" },
  { name: "Textify text editor", description: "Textify is a web tool that allows users to manipulate text easily. It includes features such as counting words andcharacters etc. The user-friendly interface makes text editing simple and efficient.", image: "/Portfolio/images/Textify.png", link: "https://usmanakhtar0.github.io/Textify/", link2: "https://github.com/UsmanAkhtar0/Textify/tree/gh-pages" },
  { name: "Tic-Tac-Toe", description: "The Tic-Tac-Toe project is an interactive web game where two players take turns marking a grid. It features an easy-to-use interface with a reset option after each round and automatically detects the winner.", image: "/Portfolio/images/Tic-Tac-Toe.png", link: "https://usmanakhtar0.github.io/Tic-Tac-Toe/", link2: "https://github.com/UsmanAkhtar0/Tic-Tac-Toe.git" },
  { name: "Rock-Paper-Scissors", description: "The Rock-Paper-Scissors website is a digital version of the classic hand game, where users can play against a computer opponent. It's a great example of a simple and engaging project that combines interactivity with essential programming logic.", image: "/Portfolio/images/Rock-Paper-Scissors.png", link: "https://usmanakhtar0.github.io/Rock-Paper-Scissors/", link2: "https://github.com/UsmanAkhtar0/Rock-Paper-Scissors.git" },
];



const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gradient-to-r from-indigo-900 via-gray-800 to-gray-700 text-white">
      <h2 className="text-4xl font-semibold text-center text-teal-500 mb-12">My Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 md:px-16 lg:grid-cols-3 xl:grid-cols-3 xl:px-24 px-6 ">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <img src={project.image} alt={project.name} className="w-full h-40 object-cover" />
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-semibold text-teal-400 hover:text-teal-600 transition duration-200">{project.name}</h3>
              <p className="text-gray-400 text-base">{project.description}</p>
              <div className="
              flex space-x-5">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-teal-500 hover:text-teal-700 font-medium transition duration-300"
                >
                  View
                </a>
                <a href={project.link2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-teal-500 hover:text-teal-700 font-medium transition duration-300"
                >
                  Source code
                </a>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
