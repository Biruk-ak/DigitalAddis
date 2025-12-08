'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { TextEffect } from '@/components/core/text-effect';
import CircularLogo from '@/components/ui/circular-logo';

// Project card data
const projects = [
  {
    id: 1,
    title: 'Woepedia Village Stories',
    subtitle: 'Tribal Insights. Connect Ask Discover',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
  },
  {
    id: 2,
    title: 'Skill - Upgrade Yourself Today',
    subtitle: 'Learn What Matters. Learn It Fast',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
  },
  {
    id: 3,
    title: 'Discover the World with Tripzio',
    subtitle: 'Tour Ultimate Travel Companion',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
  },
  {
    id: 4,
    title: 'TKOD - Be Your Own Financial',
    subtitle: 'Smarter Spending',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
  },
];

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center bg-gradient-to-b from-[#050505] to-[#0f0f0f]"
    >
      {/* Grid Pattern Overlay - Small Squares - Full Coverage Including Navbar Area */}
      <div
        className="absolute inset-0 top-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(221, 254, 0, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(221, 254, 0, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0',
        }}
      />
      
      {/* Secondary grid layer for more depth */}
      <div
        className="absolute inset-0 top-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0',
        }}
      />

      {/* Soft Neon Glow Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ddfe00] opacity-[0.08] blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#ddfe00] opacity-[0.08] blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Bottom Fade Out - Grid pattern fades out smoothly */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent z-[5] pointer-events-none"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-28 w-full flex flex-col items-center justify-center min-h-[calc(100vh-5rem)]">
        <div className="text-center w-full flex flex-col items-center">
          {/* Half Arc Above Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative mb-0 flex justify-center items-center"
          >
            {/* Semi-Circular Arc */}
            <svg
              className="w-full max-w-[600px] h-[60px] sm:max-w-[700px] sm:h-[80px] lg:max-w-[800px] lg:h-[100px]"
              viewBox="0 0 1000 220"
              preserveAspectRatio="xMidYMin meet"
            >
              <defs>
                <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ddfe00" stopOpacity="0" />
                  <stop offset="10%" stopColor="#ddfe00" stopOpacity="0.5" />
                  <stop offset="25%" stopColor="#ddfe00" stopOpacity="0.7" />
                  <stop offset="40%" stopColor="#ddfe00" stopOpacity="0.6" />
                  <stop offset="48%" stopColor="#ddfe00" stopOpacity="0.5" />
                  <stop offset="50%" stopColor="#ddfe00" stopOpacity="0.4" />
                  <stop offset="52%" stopColor="#ddfe00" stopOpacity="0.5" />
                  <stop offset="60%" stopColor="#ddfe00" stopOpacity="0.6" />
                  <stop offset="75%" stopColor="#ddfe00" stopOpacity="0.7" />
                  <stop offset="90%" stopColor="#ddfe00" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#ddfe00" stopOpacity="0" />
                </linearGradient>
                <filter id="arcGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              {/* Semi-circular arc path - Extended width with pronounced bend */}
              <path
                d="M 50 200 Q 500 10 950 200"
                fill="none"
                stroke="url(#arcGradient)"
                strokeWidth="2.5"
                filter="url(#arcGlow)"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>

          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center justify-center mb-2"
          >
            <div className="relative px-4 py-1.5 rounded-full border border-[#ddfe00]/50 bg-[#ddfe00]/5 backdrop-blur-sm">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-[#ddfe00]/20 blur-xl -z-10" />
              <span className="text-[#ddfe00] text-xs font-semibold tracking-wider uppercase">
                DigitalAddis
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-2 sm:mb-3 leading-[1.1] tracking-tight">
            <TextEffect 
              per="word" 
              as="h1" 
              preset="slide"
              className="text-white block"
              delay={0.4}
            >
              INNOVATING YOUR
            </TextEffect>
            <TextEffect 
              per="word" 
              as="h1" 
              preset="slide"
              className="text-[#ddfe00] block"
              delay={0.5}
            >
              DIGITAL
            </TextEffect>
            <TextEffect 
              per="word" 
              as="h1" 
              preset="slide"
              className="text-white block"
              delay={0.6}
            >
              WORLD WITH US
            </TextEffect>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm sm:text-base md:text-lg text-[#cfcfcf] mb-4 sm:mb-6 max-w-3xl mx-auto leading-relaxed font-light"
          >
            A full-service digital agency delivering UI/UX design, web development, and branding that makes an impact.
          </motion.p>

          {/* Circular Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-0"
          >
            <Link href="/contact" className="block hover:scale-105 transition-transform duration-300">
              <CircularLogo size={200} className="sm:hidden" />
              <CircularLogo size={280} className="hidden sm:block lg:hidden" />
              <CircularLogo size={320} className="hidden lg:block" />
            </Link>
          </motion.div>
        </div>

        {/* Project Cards - Horizontal Scrollable on all screens */}
        <div className="w-full mt-8 sm:mt-12 overflow-x-auto pb-4 px-4 scrollbar-hide">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex gap-4 sm:gap-6 min-w-max"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative flex-shrink-0 w-[220px] sm:w-[260px] lg:w-[280px]"
              >
                <div className="relative h-[260px] sm:h-[300px] lg:h-[340px] rounded-[20px] border border-[#2c2c2c] bg-gradient-to-br from-[#0a0a0a] to-[#050505] overflow-hidden transition-all duration-300 group-hover:border-[#ddfe00]/50 group-hover:shadow-[0_0_30px_rgba(221,254,0,0.2)]">
                  <div className="absolute inset-0 rounded-[20px] border border-[#ddfe00]/0 group-hover:border-[#ddfe00]/20 transition-all duration-500" />
                  <div className="absolute inset-0 bg-[#ddfe00]/0 group-hover:bg-[#ddfe00]/5 transition-all duration-300 blur-xl -z-10" />
                  <div className="relative w-full h-3/4 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#0a0a0a] to-transparent">
                    <h3 className="text-white font-bold text-sm sm:text-base mb-1.5 group-hover:text-[#ddfe00] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-[#8b8b8b] text-xs leading-relaxed group-hover:text-[#cfcfcf] transition-colors duration-300">
                      {project.subtitle}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
