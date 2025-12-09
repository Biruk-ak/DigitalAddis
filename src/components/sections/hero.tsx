'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import CircularLogo from '@/components/ui/circular-logo';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#050505] to-[#0f0f0f] overflow-hidden"
    >
      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(221, 254, 0, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(221, 254, 0, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Soft Neon Glow Accents */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#ddfe00] opacity-[0.08] blur-[150px] rounded-full" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#ddfe00] opacity-[0.08] blur-[150px] rounded-full" />

      {/* Content Container - Side by Side */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 md:pt-0"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12 lg:gap-16 min-h-[80vh]">
          {/* Left Side - Text Content */}
          <motion.div
            variants={textVariants}
            className="h-full flex flex-col justify-center text-center md:text-left"
          >
            {/* Main Heading */}
            <motion.h1
              variants={textVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight mb-6"
            >
              <span className="text-white block">INNOVATING</span>
              <span className="text-white block">YOUR <span className="text-[#ddfe00]">DIGITAL</span></span>
              <span className="text-white block">WORLD</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={textVariants}
              className="text-base sm:text-lg md:text-xl text-[#a0a0a0] max-w-xl mx-auto md:mx-0 leading-relaxed"
            >
              A full-service digital agency delivering UI/UX design, web development, and branding that makes an impact.
            </motion.p>
          </motion.div>

          {/* Right Side - Circular Logo */}
          <motion.div
            variants={imageVariants}
            className="flex-1 h-full flex items-center justify-center relative"
          >
            {/* Soft neon glow behind logo */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="w-[320px] sm:w-[380px] md:w-[440px] lg:w-[500px] h-[320px] sm:h-[380px] md:h-[440px] lg:h-[500px] bg-[#ddfe00] opacity-20 blur-[110px] rounded-full mix-blend-screen" />
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <Link href="/contact" className="block">
                <CircularLogo size={221} className="md:hidden" />
                <CircularLogo size={281} className="hidden md:block lg:hidden" />
                <CircularLogo size={341} className="hidden lg:block" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
