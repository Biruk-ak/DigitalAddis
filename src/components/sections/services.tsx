'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Code, Layers, Smartphone, Package, ArrowUpRight } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Service {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    id: 1,
    icon: <Code className="w-6 h-6" />,
    title: 'WEB DEVELOPMENT',
    description: 'High-performance, responsive websites built for speed, security, and scalability.',
  },
  {
    id: 2,
    icon: <Layers className="w-6 h-6" />,
    title: 'UX/UI DESIGN',
    description: 'Intuitive, visually stunning designs that enhance usability and actively engage users.',
  },
  {
    id: 3,
    icon: <Smartphone className="w-6 h-6" />,
    title: 'APP DEVELOPMENT',
    description: 'Robust, user-friendly mobile applications designed for seamless use on iOS and Android.',
  },
  {
    id: 4,
    icon: <Package className="w-6 h-6" />,
    title: 'PRODUCT BRANDING',
    description: 'Unique brand identities that make your product stand out in the market.',
  },
];

export default function Services() {
  // Detect if device is mobile/tablet for reduced hover effect
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  /**
   * Hover animation configuration
   * 
   * Features:
   * - Scale-up effect: 5% on desktop, 2% on mobile (reduced for better mobile UX)
   * - Ultra-fast duration-based transition: Maximum speed for instant response
   * - GPU-accelerated: Uses transform for optimal performance
   * - Responsive: Automatically adjusts based on screen size
   * 
   * Using duration-based transition for maximum speed:
   * - duration: 0.15s (very fast, near-instant)
   * - ease: smooth easing for polished feel
   */
  const hoverAnimation = {
    scale: isMobile ? 1.02 : 1.05, // Smaller scale on mobile (2% vs 5%)
    transition: {
      duration: 0.15, // Very fast, near-instant response
      ease: [0.4, 0, 0.2, 1] as [number, number, number, number], // Smooth easing curve for polished feel
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
          className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-12 lg:mb-16"
        >
          {/* Left Side - Logo and Label */}
          <div className="flex items-center gap-3 mb-4 sm:mb-0">
            {/* Green Logo/Icon */}
            <div className="w-8 h-8 bg-[#ddfe00] rounded flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-black rounded-sm"></div>
            </div>
            <span className="text-[#ddfe00] text-sm font-semibold uppercase tracking-wider">
              OUR SERVICES
            </span>
          </div>

          {/* Right Side - View More Button */}
          <Link
            href="/services"
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
          OUR EXCLUSIVE SERVICES
        </motion.h2>

        {/* Services Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={hoverAnimation}
              className="group relative bg-[#1a1a1a] dark:bg-[#0f0f0f] rounded-2xl p-6 lg:p-8 transition-all duration-300 border border-gray-800 group-hover:border-2 group-hover:border-[#ddfe00] will-change-transform"
              style={{
                // GPU-accelerated transform for better performance
                transformOrigin: 'center center',
                // No shadow by default
                boxShadow: 'none',
                filter: 'drop-shadow(0 0 0 transparent)',
              }}
              onMouseEnter={(e) => {
                // Apply only green shadow on hover
                e.currentTarget.style.boxShadow = '0 15px 50px rgba(221, 254, 0, 0.4), 0 25px 70px rgba(221, 254, 0, 0.25), 0 35px 90px rgba(221, 254, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                // Remove shadow when not hovering
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Number Badge - Top Right */}
              <div className="absolute top-4 right-4 text-2xl font-bold text-gray-600 group-hover:text-[#ddfe00] transition-colors duration-300">
                {String(service.id).padStart(2, '0')}
              </div>

              {/* Icon - Top Left */}
              <div className="mb-6 text-gray-400 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg lg:text-xl font-bold mb-4 uppercase tracking-tight text-white group-hover:text-[#ddfe00] transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm lg:text-base text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* View Details Link */}
              <Link
                href="/services"
                className="inline-flex items-center text-sm font-semibold uppercase tracking-wider text-gray-500 group-hover:text-[#ddfe00] hover:text-[#c4e800] transition-colors duration-300"
              >
                VIEW DETAILS
              </Link>

              {/* Hover Effect Glow */}
              <div className="absolute inset-0 rounded-2xl bg-[#ddfe00]/0 group-hover:bg-[#ddfe00]/5 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
