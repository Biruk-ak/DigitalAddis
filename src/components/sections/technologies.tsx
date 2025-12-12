'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Technology {
  name: string;
  icon: React.ReactNode;
}

const technologies: Technology[] = [
  // Row 1: Figma, Docker, PostgreSQL, Python, HTML, CSS
  { 
    name: 'Figma', 
    icon: <Image src="/icon/figma.png" alt="Figma" width={80} height={80} className="object-contain" />
  },
  // { 
  //   name: 'Framer Motion', 
  //   icon: (
  //     <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
  //       <span className="text-white font-bold text-xl">F</span>
  //     </div>
  //   )
  // },
  { 
    name: 'Docker', 
    icon: <Image src="/icon/docker.png" alt="Docker" width={80} height={80} className="object-contain" />
  },
  { 
    name: 'PostgreSQL', 
    icon: <Image src="/icon/postgre.png" alt="PostgreSQL" width={80} height={80} className="object-contain" />
  },
  { 
    name: 'Python', 
    icon: <Image src="/icon/python.png" alt="Python" width={80} height={80} className="object-contain" />
  },
  { 
    name: 'HTML', 
    icon: <Image src="/icon/html.png" alt="HTML" width={80} height={80} className="object-contain" />
  },
  { 
    name: 'CSS', 
    icon: <Image src="/icon/css-3.png" alt="CSS" width={80} height={80} className="object-contain" />
  },
  // Row 2: Tailwind CSS, Bootstrap, JavaScript, TypeScript, React, Next.js
  { 
    name: 'Tailwind CSS', 
    icon: (
      <div className="w-20 h-20 flex items-center justify-center">
        <svg viewBox="0 0 54 33" className="w-16 h-12 text-cyan-400 fill-current">
          <path d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"/>
        </svg>
      </div>
    )
  },
  { 
    name: 'Bootstrap', 
    icon: <Image src="/icon/bootstrap.png" alt="Bootstrap" width={80} height={80} className="object-contain" />
  },
  { 
    name: 'JavaScript', 
    icon: <Image src="/icon/js.png" alt="JavaScript" width={80} height={80} className="object-contain" />
  },
  { 
    name: 'TypeScript', 
    icon: <Image src="/icon/typescript.png" alt="TypeScript" width={80} height={80} className="object-contain" />
  },
  { 
    name: 'React', 
    icon: <Image src="/icon/reactjs.png" alt="React" width={80} height={80} className="object-contain" />
  },
  { 
    name: 'Next.js', 
    icon: (
      <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center border-2 border-white">
        <span className="text-white font-bold text-3xl">N</span>
      </div>
    )
  },
  // Row 3: Expo, React Native, Node.js, Express.js, NestJS, Prisma
  { 
    name: 'Expo', 
    icon: (
      <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center">
        <span className="text-white font-bold text-3xl">E</span>
      </div>
    )
  },
  { 
    name: 'React Native', 
    icon: <Image src="/icon/reactjs.png" alt="React Native" width={80} height={80} className="object-contain" />
  },
  { 
    name: 'Node.js', 
    icon: <Image src="/icon/nodejs.png" alt="Node.js" width={80} height={80} className="object-contain" />
  },
  { 
    name: 'GraphQL', 
    icon: <Image src="/icon/graphql.png" alt="GraphQL" width={80} height={80} className="object-contain" />
  },
  { 
    name: 'NestJS', 
    icon: (
      <div className="w-20 h-20 flex items-center justify-center">
        <span className="text-red-500 font-bold text-4xl">N</span>
      </div>
    )
  },
  { 
    name: 'Prisma', 
    icon: (
      <div className="w-20 h-20 flex items-center justify-center">
        <svg viewBox="0 0 24 24" className="w-16 h-16 fill-current text-cyan-400">
          <path d="M21.807 18.285L13.553.756a1.324 1.324 0 00-1.129-.754 1.31 1.31 0 00-1.206.626l-8.952 14.5a1.356 1.356 0 00.016 1.455l4.376 6.778a1.408 1.408 0 001.58.581l12.703-3.757c.389-.115.707-.39.873-.755s.164-.783-.007-1.145zm-1.848.752L9.18 22.224a.452.452 0 01-.575-.52l3.85-18.438c.072-.345.549-.4.699-.08l7.129 15.138a.515.515 0 01-.324.713z"/>
        </svg>
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
                THE TECHNOLOGY WE USE
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
