'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { TextEffect } from '@/components/core/text-effect';

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
      className="relative min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center bg-gradient-to-b from-[#050505] to-[#0f0f0f] overflow-hidden"
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

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-0"
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center px-6 py-3 sm:px-10 sm:py-4 bg-[#ddfe00] text-black font-bold text-sm sm:text-base rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(221,254,0,0.6)]"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-[#ddfe00] blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 -z-10" />
              <span className="relative z-10 tracking-wide">BOOK A CALL</span>
            </Link>
          </motion.div>
        </div>

        {/* Project Cards - Appears after scrolling */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-12 sm:mt-16"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative h-[280px] sm:h-[320px] lg:h-[360px] rounded-[20px] border border-[#2c2c2c] bg-gradient-to-br from-[#0a0a0a] to-[#050505] overflow-hidden transition-all duration-300 group-hover:border-[#ddfe00]/50 group-hover:shadow-[0_0_30px_rgba(221,254,0,0.2)]">
                {/* Neon edge flicker effect (very light) */}
                <div className="absolute inset-0 rounded-[20px] border border-[#ddfe00]/0 group-hover:border-[#ddfe00]/20 transition-all duration-500" />

                {/* Glow on hover */}
                <div className="absolute inset-0 bg-[#ddfe00]/0 group-hover:bg-[#ddfe00]/5 transition-all duration-300 blur-xl -z-10" />

                {/* Image */}
                <div className="relative w-full h-3/4 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#0a0a0a] to-transparent">
                  <h3 className="text-white font-bold text-base mb-1.5 group-hover:text-[#ddfe00] transition-colors duration-300">
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

        {/* Mobile Scrollable Cards (Alternative for very small screens) */}
        <div className="lg:hidden mt-8 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
          <div className="flex gap-6 min-w-max">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative flex-shrink-0 w-[240px]"
              >
                <div className="relative h-[280px] rounded-[20px] border border-[#2c2c2c] bg-gradient-to-br from-[#0a0a0a] to-[#050505] overflow-hidden transition-all duration-300 group-hover:border-[#ddfe00]/50 group-hover:shadow-[0_0_30px_rgba(221,254,0,0.2)]">
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
                    <h3 className="text-white font-bold text-base mb-1.5 group-hover:text-[#ddfe00] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-[#8b8b8b] text-xs leading-relaxed group-hover:text-[#cfcfcf] transition-colors duration-300">
                      {project.subtitle}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
