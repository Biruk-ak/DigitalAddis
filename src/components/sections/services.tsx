'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { CardHoverEffect } from '@/components/ui/card-hover-effect';
import { Spotlight } from '@/components/ui/spotlight';
import { BorderBeam } from '@/components/ui/border-beam';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: '📱',
    title: 'Mobile App Design & Development',
    description: 'Create stunning mobile experiences for iOS and Android with cutting-edge design and seamless functionality.',
  },
  {
    icon: '💻',
    title: 'Web Design & Development',
    description: 'Build responsive, high-performance websites that engage users and drive business growth.',
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    description: 'Craft intuitive user interfaces and experiences that delight users and enhance engagement.',
  },
  {
    icon: '📊',
    title: 'Digital Marketing',
    description: 'Boost your online presence with strategic digital marketing campaigns that deliver results.',
  },
  {
    icon: '🔍',
    title: 'SEO & Content Marketing',
    description: 'Improve your search rankings and reach your target audience with optimized content strategies.',
  },
  {
    icon: '📱',
    title: 'Social Media Marketing',
    description: 'Engage your audience and grow your brand across all major social media platforms.',
  },
];

export default function Services() {
  const [isSectionHovered, setIsSectionHovered] = useState(false);

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
    <section 
      className="relative py-20 lg:py-32 bg-white dark:bg-black overflow-hidden transition-colors duration-300 group"
      onMouseEnter={() => setIsSectionHovered(true)}
      onMouseLeave={() => setIsSectionHovered(false)}
    >
      {/* Spotlight Background Effect */}
      <Spotlight
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(84, 100%, 50%, 0.1) 0, hsla(84, 100%, 55%, 0.02) 50%, hsla(84, 100%, 45%, 0) 80%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(84, 100%, 85%, 0.06) 0, hsla(84, 100%, 55%, 0.02) 80%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(84, 100%, 85%, 0.04) 0, hsla(84, 100%, 85%, 0.04) 80%, transparent 100%)"
        translateY={-350}
        width={560}
        height={1380}
        smallWidth={240}
        duration={7}
        xOffset={100}
        isHovered={isSectionHovered}
      />

      {/* Subtle Background Accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ddfe00] to-transparent opacity-20 dark:opacity-30"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ddfe00] to-transparent opacity-20 dark:opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6">
            <span className="text-gray-900 dark:text-white">Our</span>{' '}
            <span className="bg-gradient-to-r from-[#ddfe00] to-[#ddfe00] bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Comprehensive digital solutions tailored to elevate your business
          </p>
        </motion.div>

        {/* Services Grid - New Card Hover Effect */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative"
            >
              <div className="relative">
                <CardHoverEffect
                  icon={
                    <span className="text-2xl" role="img" aria-label={service.title}>
                      {service.icon}
                    </span>
                  }
                  title={service.title}
                  description={service.description}
                  variant="lime"
                  size="md"
                  glowEffect={true}
                  hoverScale={1.02}
                  interactive={true}
                  className="h-full"
                />
                <BorderBeam
                  size={50}
                  duration={6}
                  colorFrom="#ddfe00"
                  colorTo="#ddfe00"
                  delay={index * 0.5}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
