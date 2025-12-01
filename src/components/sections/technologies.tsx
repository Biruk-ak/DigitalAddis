'use client';

import { motion } from 'framer-motion';

interface Technology {
  name: string;
  icon: React.ReactNode;
}

const technologies: Technology[] = [
  // Row 1
  { 
    name: 'Figma', 
    icon: (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-4xl font-bold" style={{ 
          background: 'linear-gradient(135deg, #F24E1E 0%, #A259FF 25%, #1ABCFE 50%, #0ACF83 75%, #FF7262 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>F</div>
      </div>
    )
  },
  { 
    name: 'Framer Motion', 
    icon: (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-3xl font-bold text-blue-500">F</div>
      </div>
    )
  },
  { 
    name: 'Webflow', 
    icon: (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
          <span className="text-white font-bold text-xl">W</span>
        </div>
      </div>
    )
  },
  { 
    name: 'Wix', 
    icon: (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-2xl font-bold text-purple-500">WIX</div>
      </div>
    )
  },
  // Row 2
  { 
    name: 'HTML', 
    icon: (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-12 h-12 bg-orange-500 rounded flex items-center justify-center">
          <span className="text-white font-bold text-lg">5</span>
        </div>
      </div>
    )
  },
  { 
    name: 'CSS', 
    icon: (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-12 h-12 bg-blue-500 rounded flex items-center justify-center">
          <span className="text-white font-bold text-lg">3</span>
        </div>
      </div>
    )
  },
  { 
    name: 'Tailwind CSS', 
    icon: (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-3xl text-cyan-400">~</div>
      </div>
    )
  },
  { 
    name: 'Bootstrap', 
    icon: (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-12 h-12 bg-purple-600 rounded flex items-center justify-center">
          <span className="text-white font-bold text-xl">B</span>
        </div>
      </div>
    )
  },
  // Row 3
  { 
    name: 'JavaScript', 
    icon: (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-12 h-12 bg-yellow-400 rounded flex items-center justify-center">
          <span className="text-black font-bold text-sm">JS</span>
        </div>
      </div>
    )
  },
  { 
    name: 'TypeScript', 
    icon: (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center">
          <span className="text-white font-bold text-sm">TS</span>
        </div>
      </div>
    )
  },
  { 
    name: 'React', 
    icon: (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-4xl text-cyan-400">⚛</div>
      </div>
    )
  },
  { 
    name: 'Next.js', 
    icon: (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center border-2 border-white">
          <span className="text-white font-bold text-lg">N</span>
        </div>
      </div>
    )
  },
  // Row 4
  { 
    name: 'Expo', 
    icon: (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-3xl text-blue-500">▲</div>
      </div>
    )
  },
  { 
    name: 'React Native', 
    icon: (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-4xl text-purple-500">⚛</div>
      </div>
    )
  },
  { 
    name: 'Node.js', 
    icon: (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xs">JS</span>
        </div>
      </div>
    )
  },
  { 
    name: 'Express.js', 
    icon: (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-2xl font-light text-gray-300">ex</div>
      </div>
    )
  },
  { 
    name: 'NestJS', 
    icon: (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-3xl text-pink-500">N</div>
      </div>
    )
  },
  { 
    name: 'Prisma', 
    icon: (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-10 h-10 bg-cyan-400 rotate-45 rounded-sm"></div>
      </div>
    )
  },
];

export default function Technologies() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section className="relative py-20 lg:py-32 bg-[#0a0a0a] dark:bg-black overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-12 lg:mb-16 gap-8"
        >
          {/* Left Side - Logo and Label */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              {/* Green Logo/Icon */}
              <div className="w-8 h-8 bg-[#ddfe00] rounded flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-black rounded-sm"></div>
              </div>
              <span className="text-[#ddfe00] text-sm font-semibold uppercase tracking-wider">
                WHAT WE USED TECHNOLOGY
              </span>
            </div>
            
            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white uppercase tracking-tight"
            >
              OUR TECHNOLOGY STACK
            </motion.h2>
          </div>

          {/* Right Side - Descriptive Text */}
          <div className="lg:max-w-md">
            <p className="text-sm lg:text-base text-gray-300 leading-relaxed">
              We build powerful applications using Node.js, Prisma, MongoDB, PostgreSQL, MySQL, Next.js, React, React Native, Redux, and TailwindCSS, backed by reliable VPS, Shared, and Cloud Hosting.
            </p>
          </div>
        </motion.div>

        {/* Technologies Grid - 4 columns */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-6"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative bg-[#1a1a1a] dark:bg-[#0f0f0f] rounded-xl p-4 lg:p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="relative w-full h-16 lg:h-20 mb-3 flex items-center justify-center">
                {tech.icon}
              </div>

              {/* Technology Name */}
              <span className="text-xs lg:text-sm font-medium text-white text-center block">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
