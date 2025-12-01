'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  categories: string[];
  deviceType: 'laptop' | 'mobile' | 'multiple-laptop';
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Student Diwan. All-in-One School System',
    subtitle: '',
    description: 'Simple Fast Organised',
    categories: ['LMS', 'FULL-STACK-DEV', 'UI/UX'],
    deviceType: 'laptop',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
  },
  {
    id: 2,
    title: 'Woepedia Village Stories, Tribal Insights.',
    subtitle: '',
    description: 'Connect Ask Discover',
    categories: ['MOBILE-APP', 'UI/UX', 'APP-DESIGN'],
    deviceType: 'mobile',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
  },
  {
    id: 3,
    title: 'Skill - Upgrade Yourself Today. Learn What Matters.',
    subtitle: '',
    description: 'Learn It Fast',
    categories: ['WEBSITE-UI', 'UI/UX', 'FULL-STACK-DEVELOPMENT'],
    deviceType: 'multiple-laptop',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const renderDeviceMockup = (project: Project) => {
    if (project.deviceType === 'laptop') {
      return (
        <div className="relative w-full h-[300px] sm:h-[360px] lg:h-[400px] flex items-center justify-center">
          {/* MacBook Frame - Angled */}
          <div className="relative w-full max-w-[90%] transform rotate-[-2deg] sm:rotate-[-3deg]">
            {/* MacBook Top Bar */}
            <div className="relative mx-auto w-[95%] h-6 bg-[#1a1a1a] rounded-t-lg border border-gray-700">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500/80"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500/80"></div>
                <div className="w-2 h-2 rounded-full bg-green-500/80"></div>
              </div>
            </div>
            {/* Screen */}
            <div className="relative w-full h-[300px] sm:h-[340px] lg:h-[380px] bg-white rounded-lg border-4 border-[#1a1a1a] overflow-hidden shadow-2xl">
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
        <div className="relative w-full h-[300px] sm:h-[360px] lg:h-[400px] flex items-center justify-center">
          {/* Phone Frame - Handheld style */}
          <div className="relative w-[200px] sm:w-[220px] lg:w-[240px] transform rotate-[-5deg]">
            {/* Phone Screen */}
            <div className="relative w-full h-[300px] sm:h-[340px] lg:h-[380px] bg-white rounded-[2.5rem] border-8 border-[#1a1a1a] overflow-hidden shadow-2xl">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#1a1a1a] rounded-b-2xl z-10"></div>
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 200px, (max-width: 1200px) 220px, 240px"
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      );
    } else {
      // Multiple laptops
      return (
        <div className="relative w-full h-[300px] sm:h-[360px] lg:h-[400px] flex items-center justify-center gap-4">
          {[1, 2].map((i) => (
            <div key={i} className="relative w-[45%] transform" style={{ transform: i === 1 ? 'rotate(-3deg) translateY(10px)' : 'rotate(2deg)' }}>
              <div className="relative w-full">
                {/* MacBook Top Bar */}
                <div className="relative mx-auto w-[95%] h-5 bg-[#1a1a1a] rounded-t-lg border border-gray-700">
                  <div className="absolute left-2 top-1/2 -translate-y-1/2 flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500/80"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/80"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500/80"></div>
                  </div>
                </div>
                {/* Screen */}
                <div className="relative w-full h-[280px] sm:h-[320px] lg:h-[360px] bg-white rounded-lg border-4 border-[#1a1a1a] overflow-hidden shadow-xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 45vw, (max-width: 1200px) 22vw, 15vw"
                    className="object-cover"
                    unoptimized
                  />
                </div>
                {/* MacBook Bottom */}
                <div className="relative mx-auto w-[95%] h-1 bg-[#1a1a1a] rounded-b-lg border border-gray-700"></div>
                <div className="relative mx-auto w-full h-1.5 bg-[#0a0a0a] rounded-b-lg"></div>
              </div>
            </div>
          ))}
        </div>
      );
    }
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
          className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-12 lg:mb-16"
        >
          {/* Left Side - Logo and Label */}
          <div className="flex items-center gap-3 mb-4 sm:mb-0">
            {/* Green Logo/Icon */}
            <div className="w-8 h-8 bg-[#ddfe00] rounded flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-black rounded-sm"></div>
            </div>
            <span className="text-[#ddfe00] text-sm font-semibold uppercase tracking-wider">
              CASE STUDY
            </span>
          </div>

          {/* Right Side - View More Button */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#ddfe00] text-black font-semibold rounded-lg hover:bg-[#c4e800] transition-colors duration-300 self-start sm:self-auto"
          >
            <span>View More</span>
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-12 lg:mb-16 uppercase tracking-tight"
        >
          EXPLORE OUR TOP PROJECT
        </motion.h2>

        {/* Projects Grid - 3 columns */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group"
            >
              <div className="relative">
                {/* Device Mockup */}
                <div className="relative bg-[#0f0f0f] rounded-2xl p-4 sm:p-6 mb-4">
                  {renderDeviceMockup(project)}
                </div>

                {/* Title and Description */}
                <div className="mb-4">
                  <h3 className="text-lg lg:text-xl font-bold text-white mb-2 leading-tight">
                    {project.title}
                  </h3>
                  {project.description && (
                    <p className="text-sm lg:text-base text-gray-400">
                      {project.description}
                    </p>
                  )}
                </div>

                {/* Category Tags - Below the card */}
                <div className="flex flex-wrap gap-2">
                  {project.categories.map((category, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 text-xs font-medium text-white bg-[#1a1a1a] rounded-md border border-gray-800"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
