import React from "react";
import { motion } from "framer-motion";


  const skills = [
  { name: "React", icon: "/icons/react.svg", progress: 85 },
  { name: "JavaScript", icon: "/icons/brand-javascript.svg", progress: 75 },
  { name: "Tailwind", icon: "/icons/tailwind-css.svg", progress: 90 },
  { name: "Python", icon: "/icons/python-fill.svg", progress: 55 },
  { name: "Arduino", icon: "/icons/arduino.svg", progress: 65 },
  { name: "Adobe Illustrator", icon: "/icons/adobe-illustrator.svg", progress: 75 },
  { name: "Adobe Photoshop", icon: "/icons/adobe-photoshop.svg", progress: 60 },
  { name: "C++", icon: "/icons/language-cpp.svg", progress: 80 },
  { name: "HTML5", icon: "/icons/html-five2.svg", progress: 85 },
  { name: "VHDL", icon: "/icons/vhdl.svg", progress: 70 },
  { name: "SQL", icon: "/icons/sqlite-editor.svg", progress: 70 },
  { name: "MS Access", icon: "/icons/microsoft-access.svg", progress: 50 },
  { name: "MS PowerPoint", icon: "/icons/microsoft-project.svg", progress: 85 },
];

export default function Skills() {
  const radius = 30;
  const circumference = 2 * Math.PI * radius;

  return (
    <section id="skills" className="py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent bg-clip-text mb-4">
          Skills & Progress
        </h2>
        <p className="text-gray-300">A showcase of my experiences and technologies</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl shadow-lg bg-gradient-to-tr from-purple-700/30 via-indigo-700/30 to-purple-600/20 hover:shadow-purple-500/50 transition-all duration-300 flex flex-col items-center"
            whileHover={{ scale: 1.07, rotate: 1 }}
          >
            {/* Icon */}
            <motion.img
              src={skill.icon}
              alt={skill.name}
              className="w-12 h-12 sm:w-16 sm:h-16 mb-4"
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
            />

            {/* Progress Circle */}
            <div className="relative w-24 h-24 mb-4">
              <svg className="w-full h-full drop-shadow-[0_0_8px_#e713ff]">
                <circle
                  cx="50%"
                  cy="50%"
                  r={radius}
                  stroke="#908e8e"
                  strokeWidth="10"
                  fill="none"
                />
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r={radius}
                  stroke={`url(#gradient-${i})`}
                  strokeWidth="10"
                  fill="none"
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference}
                  animate={{
                    strokeDashoffset:
                      circumference - (circumference * skill.progress) / 100,
                  }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id={`gradient-${i}`}
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#503996" />
                    <stop offset="100%" stopColor="#e713ff" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="absolute inset-0 flex items-center justify-center font-bold text-lg text-white">
                {skill.progress}%
              </span>
            </div>

            {/* Name */}
            <h3 className="text-lg font-semibold bg-gradient-to-r from-pink-500 to-purple-400 text-transparent bg-clip-text">
              {skill.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
