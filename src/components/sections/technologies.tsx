'use client';

import { motion } from 'framer-motion';

interface Technology {
  name: string;
  icon: React.ReactNode;
}

const technologies: Technology[] = [
  // Row 1: Figma, Framer Motion, Webflow, Wix, HTML, CSS
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
  // Row 2: Tailwind CSS, Bootstrap, JavaScript, TypeScript, React, Next.js
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
  // Row 3: Expo, React Native, Node.js, Express.js, NestJS, Prisma
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
        <div className="text-3xl text-red-500">N</div>
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

        {/* Technologies Grid - 6 columns on desktop, 3 on tablet, 2 on mobile - No gaps, boxes touching */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-0 border border-gray-800"
        >
          {technologies.map((tech, index) => {
            const isLastInRow = (index + 1) % 6 === 0;
            const isInLastRow = index >= 12;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`group relative bg-[#1a1a1a] dark:bg-[#0f0f0f] p-4 lg:p-6 border-r border-b border-gray-800 transition-all duration-300 overflow-visible ${
                  isLastInRow ? 'lg:border-r-0' : ''
                } ${isInLastRow ? 'border-b-0' : ''}`}
                style={{
                  boxShadow: 'none',
                }}
              >
                {/* Glow overlay on hover - ensures full rounded glow on all sides */}
                <div 
                  className="absolute inset-0 border border-[#ddfe00] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
                  style={{
                    boxShadow: '0 0 20px rgba(221, 254, 0, 0.5), 0 0 40px rgba(221, 254, 0, 0.3), 0 0 60px rgba(221, 254, 0, 0.1)',
                    margin: '-1px',
                    zIndex: 1,
                  }}
                />
                {/* Icon Container */}
                <div className="relative w-full h-16 lg:h-20 mb-3 flex items-center justify-center z-10">
                  {tech.icon}
                </div>

                {/* Technology Name */}
                <span className="relative text-xs lg:text-sm font-medium text-white text-center block z-10">
                  {tech.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
