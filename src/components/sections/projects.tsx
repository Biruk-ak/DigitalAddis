'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  categories: string[];
  deviceType: 'laptop' | 'mobile' | 'multiple-mobile';
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Student Diwan',
    subtitle: 'All-in-One School System',
    description: 'Simple Fast Organised',
    categories: ['LMS', 'FULL-STACK-DEV', 'UI/UX'],
    deviceType: 'laptop',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
  },
  {
    id: 2,
    title: 'Woepedia Village Stories',
    subtitle: 'Tribal Insights',
    description: 'Connect Ask Discover',
    categories: ['MOBILE-APP', 'UI/UX', 'APP-DESIGN'],
    deviceType: 'mobile',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
  },
  {
    id: 3,
    title: 'Skill - Upgrade Yourself Today',
    subtitle: 'Learn What Matters',
    description: 'Learn It Fast',
    categories: ['WEBSITE-UI', 'UI/UX', 'FULL-STACK-DEVELOPMENT'],
    deviceType: 'laptop',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
  },
  {
    id: 4,
    title: 'Discover the World with Tripzio',
    subtitle: 'Tour Ultimate Travel Companion',
    description: '01 NEVER STOP EXPLORING THE WORLD',
    categories: ['TRAVEL-WEBSITE', 'UI/UX'],
    deviceType: 'laptop',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
  },
  {
    id: 5,
    title: 'TKOD - Be Your Own Financial',
    subtitle: 'Smarter Spending',
    description: '',
    categories: ['MOBILE APP', 'UI'],
    deviceType: 'multiple-mobile',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const renderDeviceMockup = (project: Project) => {
    if (project.deviceType === 'laptop') {
      return (
        <div className="relative w-full h-[280px] sm:h-[320px] lg:h-[360px] flex items-center justify-center">
          {/* MacBook Frame */}
          <div className="relative w-full max-w-[90%]">
            {/* MacBook Top Bar */}
            <div className="relative mx-auto w-[95%] h-6 bg-[#1a1a1a] rounded-t-lg border border-gray-700">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500/80"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500/80"></div>
                <div className="w-2 h-2 rounded-full bg-green-500/80"></div>
              </div>
            </div>
            {/* Screen */}
            <div className="relative w-full h-[280px] sm:h-[300px] lg:h-[340px] bg-white rounded-lg border-4 border-[#1a1a1a] overflow-hidden shadow-2xl">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                unoptimized
              />
            </div>
            {/* MacBook Bottom */}
            <div className="relative mx-auto w-[95%] h-1 bg-[#1a1a1a] rounded-b-lg border border-gray-700"></div>
            <div className="relative mx-auto w-full h-2 bg-[#0a0a0a] rounded-b-lg"></div>
          </div>
        </div>
      );
    } else if (project.deviceType === 'mobile') {
      return (
        <div className="relative w-full h-[280px] sm:h-[320px] lg:h-[360px] flex items-center justify-center">
          {/* Phone Frame */}
          <div className="relative w-[180px] sm:w-[200px] lg:w-[220px]">
            {/* Phone Screen */}
            <div className="relative w-full h-[280px] sm:h-[300px] lg:h-[340px] bg-white rounded-[2.5rem] border-8 border-[#1a1a1a] overflow-hidden shadow-2xl">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#1a1a1a] rounded-b-2xl z-10"></div>
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 180px, (max-width: 1200px) 200px, 220px"
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      );
    } else {
      // Multiple phones
      return (
        <div className="relative w-full h-[280px] sm:h-[320px] lg:h-[360px] flex items-center justify-center gap-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="relative w-[120px] sm:w-[140px] lg:w-[160px]">
              <div className="relative w-full h-[260px] sm:h-[280px] lg:h-[320px] bg-white rounded-[2rem] border-6 border-[#1a1a1a] overflow-hidden shadow-xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 120px, (max-width: 1200px) 140px, 160px"
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <section className="relative py-20 lg:py-32 bg-[#0a0a0a] overflow-hidden">
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
            <span className="text-white">OUR</span>{' '}
            <span className="bg-gradient-to-r from-[#ddfe00] to-[#ddfe00] bg-clip-text text-transparent">
              PROJECTS
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Showcasing innovative solutions and creative excellence
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="relative bg-[#0f0f0f] rounded-2xl overflow-hidden border border-gray-800/50 hover:border-gray-700 transition-all duration-300">
                {/* Device Mockup */}
                <div className="relative bg-gradient-to-b from-gray-900/50 to-[#0f0f0f] p-6 sm:p-8">
                  {renderDeviceMockup(project)}
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.categories.map((category, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium text-gray-400 bg-gray-800/50 rounded-md border border-gray-700/50"
                      >
                        {category}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#ddfe00] transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Subtitle */}
                  {project.subtitle && (
                    <p className="text-base text-gray-300 mb-2 font-medium">
                      {project.subtitle}
                    </p>
                  )}

                  {/* Description */}
                  {project.description && (
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {project.description}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

