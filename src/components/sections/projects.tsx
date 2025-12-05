'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ChevronDown, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const EASING_X1 = 0.4;
const EASING_Y1 = 0.0;
const EASING_X2 = 0.2;
const EASING_Y2 = 1;
const smoothEasing: [number, number, number, number] = [EASING_X1, EASING_Y1, EASING_X2, EASING_Y2];

export type Card = {
  id: number;
  title: string;
  image: string;
  content: string;
  categories?: string[];
  author?: {
    name: string;
    role: string;
    image: string;
  };
};

interface ProjectsProps {
  showViewMore?: boolean;
}

const projects: Card[] = [
  {
    id: 1,
    title: 'Student Diwan',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
    content: 'An all-in-one school management system designed to simplify educational operations. Simple, fast, and organized.',
    categories: ['LMS', 'FULL-STACK-DEV', 'UI/UX'],
    author: {
      name: 'DigitalAddis Team',
      role: 'Development Team',
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop',
    },
  },
  {
    id: 2,
    title: 'Woepedia Village',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
    content: 'Connect, ask, and discover tribal insights through this innovative platform. Explore village stories and cultural heritage.',
    categories: ['MOBILE-APP', 'UI/UX', 'APP-DESIGN'],
    author: {
      name: 'DigitalAddis Team',
      role: 'Design Team',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    },
  },
  {
    id: 3,
    title: 'Skill Platform',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
    content: 'Upgrade yourself today. Learn what matters, learn it fast. A comprehensive learning platform for skill development.',
    categories: ['WEBSITE-UI', 'UI/UX', 'FULL-STACK-DEVELOPMENT'],
    author: {
      name: 'DigitalAddis Team',
      role: 'Product Team',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    },
  },
  {
    id: 4,
    title: 'TKOD Finance',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    content: 'Be your own financial advisor. Smarter spending, better financial management. Take control of your finances with intelligent tools.',
    categories: ['MOBILE-APP', 'FINTECH', 'UI/UX'],
    author: {
      name: 'DigitalAddis Team',
      role: 'Development Team',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    },
  },
];

export default function Projects({ showViewMore = true }: ProjectsProps) {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Detect mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      const scrollWidth = scrollRef.current.scrollWidth;
      const clientWidth = scrollRef.current.clientWidth;
      scrollRef.current.scrollLeft = (scrollWidth - clientWidth) / 2;
    }
  }, []);

  const handleCardClick = (id: number) => {
    if (selectedCard === id) {
      setSelectedCard(null);
    } else {
      setSelectedCard(id);
      // Center the clicked card in view
      const cardElement = document.querySelector(`[data-card-id="${id}"]`);
      if (cardElement) {
        cardElement.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        });
      }
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
          {showViewMore && (
            <Link
              href="/projects"
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
          EXPLORE OUR PROJECT
        </motion.h2>

        {/* Expandable Cards */}
        <div className={`flex w-full flex-col gap-4 ${!isMobile ? 'overflow-hidden' : ''}`}>
          <div
            className={`scrollbar-hide flex overflow-x-auto pt-4 pb-8 -mx-4 px-4 ${!isMobile ? 'mx-auto' : ''}`}
            ref={scrollRef}
            style={{
              scrollSnapType: 'x mandatory',
              scrollPaddingLeft: isMobile ? '16px' : '20%',
            }}
          >
            {projects.map((card) => (
              <motion.div
                key={card.id}
                animate={
                  isMobile
                    ? { height: selectedCard === card.id ? '520px' : '260px' }
                    : { width: selectedCard === card.id ? '500px' : '200px' }
                }
                className={`relative mr-4 shrink-0 cursor-pointer overflow-hidden rounded-2xl border border-gray-800 bg-[#0f0f0f] shadow-lg ${
                  isMobile ? 'w-[320px]' : 'h-[300px]'
                }`}
                data-card-id={card.id}
                layout
                onClick={() => handleCardClick(card.id)}
                style={{
                  scrollSnapAlign: 'start',
                }}
                transition={{
                  duration: 0.5,
                  ease: smoothEasing,
                }}
                whileHover={{
                  borderColor: selectedCard === card.id ? '#ddfe00' : 'rgba(221, 254, 0, 0.3)',
                }}
              >
                {/* Image Section */}
                <div className={`relative ${isMobile ? 'h-[260px] w-full' : 'h-full w-[200px]'}`}>
                  <Image
                    alt={card.title}
                    className="h-full w-full object-cover"
                    height={isMobile ? 260 : 300}
                    src={card.image}
                    width={isMobile ? 280 : 200}
                    unoptimized
                  />
                  <div className={`absolute inset-0 ${isMobile ? 'bg-gradient-to-t from-black/70 via-black/20 to-transparent' : 'bg-black/40'}`} />

                  <div className={`absolute inset-0 flex flex-col justify-between text-white ${isMobile ? 'p-4' : 'p-6'}`}>
                    <h2 className={`font-bold ${isMobile ? 'text-lg' : 'text-2xl'}`}>{card.title}</h2>
                    <div className="flex items-center gap-2">
                      <button
                        aria-label="View more"
                        className={`flex items-center justify-center rounded-full bg-black/30 backdrop-blur-sm transition-transform hover:scale-110 border border-white/20 ${
                          isMobile ? 'h-10 w-10' : 'h-12 w-12'
                        }`}
                        type="button"
                      >
                        {isMobile ? (
                          <ChevronDown className="text-white h-5 w-5" />
                        ) : (
                          <ChevronRight className="text-white h-6 w-6" />
                        )}
                      </button>
                      <span className={`font-medium ${isMobile ? 'text-xs' : 'text-sm'}`}>View more</span>
                    </div>
                  </div>
                </div>

                {/* Expandable Details */}
                <AnimatePresence mode="popLayout">
                  {selectedCard === card.id && (
                    <motion.div
                      animate={
                        isMobile
                          ? { height: 'auto', opacity: 1 }
                          : { width: '300px', opacity: 1, filter: 'blur(0px)' }
                      }
                      className={
                        isMobile
                          ? 'w-full bg-[#0f0f0f] border-t border-gray-800'
                          : 'absolute top-0 right-0 h-full bg-[#0f0f0f] border-l border-gray-800'
                      }
                      exit={
                        isMobile
                          ? { height: 0, opacity: 0 }
                          : { width: 0, opacity: 0, filter: 'blur(5px)' }
                      }
                      initial={
                        isMobile
                          ? { height: 0, opacity: 0 }
                          : { width: 0, opacity: 0, filter: 'blur(5px)' }
                      }
                      transition={{
                        duration: 0.5,
                        ease: smoothEasing,
                        opacity: { duration: 0.3, delay: 0.2 },
                      }}
                    >
                      <motion.div
                        animate={
                          isMobile
                            ? { opacity: 1, y: 0 }
                            : { opacity: 1, x: 0, filter: 'blur(0px)' }
                        }
                        className={`flex flex-col ${isMobile ? 'p-4' : 'h-full justify-between p-8'}`}
                        exit={
                          isMobile
                            ? { opacity: 0, y: 10 }
                            : { opacity: 0, x: 20, filter: 'blur(5px)' }
                        }
                        initial={
                          isMobile
                            ? { opacity: 0, y: 10 }
                            : { opacity: 0, x: 20, filter: 'blur(5px)' }
                        }
                        transition={{ delay: isMobile ? 0.3 : 0.4, duration: 0.3 }}
                      >
                        {isMobile ? (
                          /* Mobile Layout */
                          <>
                            <div>
                              <p className="text-gray-300 text-xs leading-relaxed mb-3">
                                {card.content}
                              </p>
                              {card.categories && (
                                <div className="flex flex-wrap gap-1.5 mb-3">
                                  {card.categories.map((category, idx) => (
                                    <span
                                      key={idx}
                                      className="px-2 py-1 text-[10px] font-medium text-white bg-[#1a1a1a] rounded-md border border-gray-800"
                                    >
                                      {category}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                            {card.author && (
                              <div className="flex items-center gap-2 mt-2">
                                <div className="h-8 w-8 overflow-hidden rounded-full border-2 border-[#ddfe00]/50 bg-[#1a1a1a]">
                                  <Image
                                    alt={card.author.name}
                                    className="h-full w-full object-cover"
                                    height={32}
                                    src={card.author.image}
                                    width={32}
                                    unoptimized
                                  />
                                </div>
                                <div>
                                  <p className="font-semibold text-white text-xs">
                                    {card.author.name}
                                  </p>
                                  <p className="text-gray-400 text-[10px]">
                                    {card.author.role}
                                  </p>
                                </div>
                              </div>
                            )}
                          </>
                        ) : (
                          /* Desktop Layout - Original */
                          <>
                            <div>
                              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                                {card.content}
                              </p>
                              {card.categories && (
                                <div className="flex flex-wrap gap-2 mb-6">
                                  {card.categories.map((category, idx) => (
                                    <span
                                      key={idx}
                                      className="px-3 py-1.5 text-xs font-medium text-white bg-[#1a1a1a] rounded-md border border-gray-800"
                                    >
                                      {category}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                            {card.author && (
                              <div className="flex items-center gap-3">
                                <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-[#ddfe00]/50 bg-[#1a1a1a]">
                                  <Image
                                    alt={card.author.name}
                                    className="h-full w-full object-cover"
                                    height={48}
                                    src={card.author.image}
                                    width={48}
                                    unoptimized
                                  />
                                </div>
                                <div>
                                  <p className="font-semibold text-white">
                                    {card.author.name}
                                  </p>
                                  <p className="text-gray-400 text-xs">
                                    {card.author.role}
                                  </p>
                                </div>
                              </div>
                            )}
                          </>
                        )}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
