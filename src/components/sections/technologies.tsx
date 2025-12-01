'use client';

import { motion } from 'framer-motion';

interface Technology {
  name: string;
  icon: string;
}

const technologies: Technology[] = [
  { name: 'Python', icon: '🐍' },
  { name: 'Java', icon: '☕' },
  { name: 'JavaScript', icon: '📜' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '▲' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Vue.js', icon: '💚' },
  { name: 'Angular', icon: '🅰️' },
  { name: 'Django', icon: '🎸' },
  { name: 'Laravel', icon: '🔴' },
  { name: 'AWS', icon: '☁️' },
];

export default function Technologies() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section className="relative py-20 lg:py-32 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Glow Line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ddfe00] to-transparent opacity-30"></div>
        {/* Bottom Glow Line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ddfe00] to-transparent opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-white">OUR TECHNOLOGY</span>{' '}
            <span className="bg-gradient-to-r from-[#ddfe00] to-[#ddfe00] bg-clip-text text-transparent">
              STACK
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Cutting-edge tools and frameworks powering our solutions
          </p>
        </motion.div>

        {/* Technologies Panel */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative"
        >
          {/* Dark Panel with Vertical Gradient */}
          <div className="relative rounded-3xl overflow-hidden border border-gray-800">
            {/* Vertical Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-[#ddfe00]/20"></div>
            
            {/* Bottom Orange Glow */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#ddfe00]/30 to-transparent blur-2xl"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ddfe00] to-transparent"></div>

            {/* Grid Container */}
            <div className="relative z-10 p-8 lg:p-12">
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-6 lg:gap-8">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    variants={iconVariants}
                    whileHover={{ scale: 1.15, y: -5 }}
                    className="group flex flex-col items-center justify-center"
                  >
                    {/* Icon Container */}
                    <div className="relative w-20 h-20 lg:w-24 lg:h-24 mb-3 flex items-center justify-center">
                      {/* Background Glow on Hover */}
                      <div className="absolute inset-0 bg-[#ddfe00]/0 group-hover:bg-[#ddfe00]/20 rounded-xl blur-lg transition-all duration-300"></div>
                      
                      {/* Icon */}
                      <div className="relative w-full h-full bg-gray-900/50 border border-gray-800 rounded-xl flex items-center justify-center text-3xl lg:text-4xl opacity-60 group-hover:opacity-100 group-hover:border-[#ddfe00]/50 group-hover:bg-gray-900/80 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#ddfe00]/20">
                        <span className="group-hover:scale-110 transition-transform duration-300">
                          {tech.icon}
                        </span>
                      </div>

                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 rounded-xl bg-[#ddfe00]/0 group-hover:bg-[#ddfe00]/10 transition-all duration-300 blur-md"></div>
                    </div>

                    {/* Technology Name */}
                    <span className="text-xs lg:text-sm font-medium text-gray-400 group-hover:text-[#ddfe00] transition-colors duration-300 text-center">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#ddfe00]/5 blur-3xl"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#ddfe00]/5 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#ddfe00]/10 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#ddfe00]/10 blur-3xl"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

