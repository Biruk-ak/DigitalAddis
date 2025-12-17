'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Code, Layers, Smartphone, Package, ArrowUpRight } from 'lucide-react';
import ServiceCardFlip from '@/components/sections/service-card-flip';

interface Service {
  id: number;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image?: string;
}

interface ServicesProps {
  showViewMore?: boolean;
}

const services: Service[] = [
  {
    id: 1,
    icon: <Code className="w-6 h-6" />,
    title: 'WEB DEVELOPMENT',
    subtitle: 'High-performance websites',
    description: 'High-performance, responsive websites built for speed, security, and scalability.',
    features: ['React & Next.js', 'Full-Stack Development', 'API Integration', 'Performance Optimization'],
    image: '/card5.png',
  },
  {
    id: 2,
    icon: <Layers className="w-6 h-6" />,
    title: 'UX/UI DESIGN',
    subtitle: 'Stunning visual designs',
    description: 'Intuitive, visually stunning designs that enhance usability and actively engage users.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    image: '/card2.png',
  },
  {
    id: 3,
    icon: <Smartphone className="w-6 h-6" />,
    title: 'APP DEVELOPMENT',
    subtitle: 'Mobile applications',
    description: 'Robust, user-friendly mobile applications designed for seamless use on iOS and Android.',
    features: ['iOS Development', 'Android Development', 'Cross-Platform', 'App Store Optimization'],
    image: '/card1.png',
  },
  {
    id: 4,
    icon: <Package className="w-6 h-6" />,
    title: 'PRODUCT BRANDING',
    subtitle: 'Unique brand identities',
    description: 'Unique brand identities that make your product stand out in the market.',
    features: ['Logo Design', 'Brand Strategy', 'Visual Identity', 'Brand Guidelines'],
    image: '/card4.png',
  },
];

export default function Services({ showViewMore = true }: ServicesProps) {
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

  return (
    <section className="relative pt-20 pb-8 lg:pt-32 lg:pb-12 bg-[#0a0a0a] dark:bg-black overflow-hidden">
      {/* Grid Pattern - Continuation from Hero section */}
      <div
        className="absolute top-0 left-0 right-0 h-64"
        style={{
          backgroundImage: `
            linear-gradient(rgba(221, 254, 0, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(221, 254, 0, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)',
        }}
      />

      {/* Secondary grid layer */}
      <div
        className="absolute top-0 left-0 right-0 h-64"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)',
        }}
      />

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
          {showViewMore && (
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#ddfe00] text-black font-semibold rounded-lg hover:bg-[#c4e800] transition-colors duration-300 self-start sm:self-auto"
            >
              <span>View More</span>
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          )}
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="w-full"
            >
              <ServiceCardFlip
                title={service.title}
                subtitle={service.subtitle}
                description={service.description}
                features={service.features}
                image={service.image}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
