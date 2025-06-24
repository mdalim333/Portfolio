import React from "react";
import { motion, useInView } from "framer-motion";

const skills = [
  { name: "Java", level: "80%" },
  { name: "DSA", level: "65%" },
  { name: "JavaScript", level: "80%" },
  { name: "React", level: "75%" },
  { name: "CSS3", level: "80%" },
  { name: "Tailwind CSS", level: "75%" },
  { name: "Node.js", level: "75%" },
  { name: "Git", level: "80%" },
  { name: "MySQL", level: "60%" },
  { name: "MongoDB", level: "70%" },
];

const About = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-r from-indigo-900 via-gray-800 to-gray-700 text-white">
      <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-8 text-teal-400">
        About Me
      </h2>
      <div className="max-w-3xl mx-auto text-center space-y-4 px-4">
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300">
        I'm an enthusiastic developer with expertise in creating responsive and dynamic web applications. I have a strong drive for continuous learning and thrive in the rapidly evolving world of technology.
        </p>
        <div className="space-y-6 mt-8">
          {skills.map((skill, index) => (
            <SkillBar key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

// SkillBar component to handle each skill's animation
const SkillBar = ({ skill }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="text-left bg-gradient-to-r from-indigo-900 via-gray-800 to-gray-700" ref={ref}>
      <div className="flex justify-between text-sm font-medium text-gray-200">
        <span>{skill.name}</span>
        <span>{skill.level}</span>
      </div>
      <motion.div
        className="bg-gray-600 h-3 rounded-full overflow-hidden mt-2"
        initial={{ width: "0%" }}
        animate={{ width: isInView ? skill.level : "0%" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="h-full bg-teal-500"></div>
      </motion.div>
    </div>
  );
};

export default About;
