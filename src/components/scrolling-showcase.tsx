'use client';

import { ScrollingFloat } from '@/components/ui/scrolling-float';
import { motion } from 'framer-motion';

/**
 * ScrollingShowcase Component
 * Displays a collection of items with smooth floating animations on scroll
 * Optimized for performance with intersection observer and requestAnimationFrame
 */
export default function ScrollingShowcase() {
  // Example showcase items - can be replaced with your actual content
  const showcaseItems = [
    {
      id: 1,
      title: 'Innovative Design',
      description: 'Crafting beautiful user experiences',
      icon: '🎨',
      color: 'from-blue-500/20 to-purple-500/20',
      borderColor: 'border-blue-500/30',
    },
    {
      id: 2,
      title: 'Modern Development',
      description: 'Building scalable solutions',
      icon: '💻',
      color: 'from-green-500/20 to-emerald-500/20',
      borderColor: 'border-green-500/30',
    },
    {
      id: 3,
      title: 'Creative Solutions',
      description: 'Transforming ideas into reality',
      icon: '✨',
      color: 'from-orange-500/20 to-pink-500/20',
      borderColor: 'border-orange-500/30',
    },
    {
      id: 4,
      title: 'Performance Focused',
      description: 'Optimized for speed and efficiency',
      icon: '⚡',
      color: 'from-yellow-500/20 to-amber-500/20',
      borderColor: 'border-yellow-500/30',
    },
    {
      id: 5,
      title: 'User Centric',
      description: 'Putting users at the heart of design',
      icon: '👥',
      color: 'from-indigo-500/20 to-blue-500/20',
      borderColor: 'border-indigo-500/30',
    },
    {
      id: 6,
      title: 'Quality Assured',
      description: 'Rigorous testing and refinement',
      icon: '✅',
      color: 'from-teal-500/20 to-cyan-500/20',
      borderColor: 'border-teal-500/30',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="relative py-20 lg:py-32 bg-white dark:bg-black overflow-hidden transition-colors duration-300">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ddfe00] to-transparent opacity-20 dark:opacity-30"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ddfe00] to-transparent opacity-20 dark:opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6">
            <span className="text-gray-900 dark:text-white">What We</span>{' '}
            <span className="bg-gradient-to-r from-[#ddfe00] to-[#ddfe00] bg-clip-text text-transparent">
              Offer
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Experience smooth, elegant animations that bring your content to life
          </p>
        </motion.div>

        {/* Scrolling Float Items Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {showcaseItems.map((item, index) => {
            // Alternate directions for visual variety
            const directions: Array<'up' | 'down' | 'left' | 'right'> = [
              'up',
              'down',
              'left',
              'right',
            ];
            const direction = directions[index % directions.length];

            return (
              <motion.div key={item.id} variants={itemVariants}>
                <ScrollingFloat
                  speed={0.3 + (index % 3) * 0.1} // Vary speed for each item
                  direction={direction}
                  distance={30 + (index % 2) * 20} // Vary distance
                  delay={index * 50} // Stagger delays
                  className="h-full"
                >
                  <div className="group relative h-full bg-white dark:bg-gradient-to-br dark:from-gray-900/90 dark:to-black/90 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 lg:p-8 transition-all duration-300 hover:border-[#ddfe00] hover:shadow-xl hover:shadow-[#ddfe00]/10 dark:hover:shadow-[#ddfe00]/20">
                    {/* Background Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}
                    />

                    {/* Icon */}
                    <div className="mb-4">
                      <div
                        className={`w-16 h-16 lg:w-20 lg:h-20 rounded-xl bg-gradient-to-br ${item.color} border ${item.borderColor} flex items-center justify-center text-3xl lg:text-4xl shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-110`}
                      >
                        {item.icon}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#ddfe00] transition-colors duration-300 leading-tight">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                      {item.description}
                    </p>

                    {/* Decorative Bottom Accent on Hover */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ddfe00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"></div>
                  </div>
                </ScrollingFloat>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

