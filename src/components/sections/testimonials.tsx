'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { VelocityScroll } from '@/components/ui/velocity-scroll';
import Image from 'next/image';

interface Client {
  id: number;
  name: string;
  logo: string;
  testimonial?: string;
  author?: string;
  role?: string;
}

interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  country: string;
  countryCode: string;
  review: string;
  rating: number;
}

const clients: Client[] = [
  { id: 1, name: 'Oromia Bank', logo: '/brands/oromia.png' },
  { id: 2, name: 'Telebirr', logo: '/brands/telebirr.png' },
  { id: 3, name: 'Wegagen Bank', logo: '/brands/wegagenbank.png' },
  { id: 4, name: 'Tsehay Bank', logo: '/brands/tsehaybank.png' },
  { id: 5, name: 'Ethio Telecom', logo: '/brands/tele.png' },
  { id: 6, name: 'Cooperative Bank', logo: '/brands/coop.png' },
  { id: 7, name: 'Hibret Bank', logo: '/brands/hibret.png' },
  { id: 8, name: 'Abay Bank', logo: '/brands/abaybank.png' },
  { id: 9, name: 'CTI', logo: '/brands/cti.png' },
  { id: 10, name: 'SafeZone', logo: '/brands/safezone.png' },
  { id: 11, name: 'Hub Addis', logo: '/brands/hubaddis.png' },
  { id: 12, name: 'Amara Bank', logo: '/brands/amarabank.png' },
  { id: 13, name: 'Ahadu Bank', logo: '/brands/ahadubank.png' },
  { id: 14, name: 'Bynna Bank', logo: '/brands/bynnabank.png' },
  { id: 15, name: "Kaldi's Coffee", logo: '/brands/kaldi\'s.png' },
  { id: 16, name: 'NBC', logo: '/brands/nbc.png' },
];

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Farhad Aliyev',
    avatar: 'https://ui-avatars.com/api/?name=Farhad+Aliyev&background=ddfe00&color=000000&size=128',
    country: 'Azerbaijan',
    countryCode: 'AZ',
    review: 'I am very pleased with the design work done for our WMS system. The seller understood the requirements perfectly and delivered a clean, intuitive interface. Communication was smooth throughout the project, and the final result exceeded my expectations.',
    rating: 5.0,
  },
  {
    id: 2,
    name: 'Badarmunir',
    avatar: 'https://ui-avatars.com/api/?name=Badarmunir&background=ddfe00&color=000000&size=128',
    country: 'Pakistan',
    countryCode: 'PK',
    review: 'It was a pleasure working with this team. They quickly grasped the project requirements and delivered exceptional results. Their keen eye for detail and professional wireframes made the entire process smooth. They were also very accommodating with revisions.',
    rating: 5.0,
  },
  {
    id: 3,
    name: 'Jaimyvang',
    avatar: 'https://ui-avatars.com/api/?name=Jaimyvang&background=ddfe00&color=000000&size=128',
    country: 'Belgium',
    countryCode: 'BE',
    review: 'Abdul Karim and his team did an outstanding job on our app design. Their attention to detail, creativity, and professionalism is unmatched. The communication was proactive, and they truly understood our vision. Highly recommended!',
    rating: 5.0,
  },
  {
    id: 4,
    name: 'Sarah Williams',
    avatar: 'https://ui-avatars.com/api/?name=Sarah+Williams&background=ddfe00&color=000000&size=128',
    country: 'United States',
    countryCode: 'US',
    review: 'Outstanding work! They transformed our digital presence and increased our engagement by 300%. The team was professional, creative, and results-driven. Best digital agency we\'ve worked with.',
    rating: 5.0,
  },
  {
    id: 5,
    name: 'Michael Brown',
    avatar: 'https://ui-avatars.com/api/?name=Michael+Brown&background=ddfe00&color=000000&size=128',
    country: 'United Kingdom',
    countryCode: 'GB',
    review: 'Their expertise in web development and design is unmatched. The project was delivered on time and exceeded all expectations. The team was responsive and made the entire process seamless.',
    rating: 5.0,
  },
  {
    id: 6,
    name: 'Emma Johnson',
    avatar: 'https://ui-avatars.com/api/?name=Emma+Johnson&background=ddfe00&color=000000&size=128',
    country: 'Canada',
    countryCode: 'CA',
    review: 'Working with DigitalAddis was a game-changer for our business. They understood our needs from day one and delivered a solution that perfectly aligned with our goals. The attention to detail and customer service was exceptional.',
    rating: 5.0,
  },
];

// Country flag emoji mapping
const countryFlags: Record<string, string> = {
  AZ: '🇦🇿',
  PK: '🇵🇰',
  BE: '🇧🇪',
  US: '🇺🇸',
  GB: '🇬🇧',
  CA: '🇨🇦',
};

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  // Update cards to show based on screen size - Show 3 at a time on desktop
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - cardsToShow);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [maxIndex]);

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + cardsToShow);

  return (
    <section className="relative py-20 lg:py-32 bg-[#0b0b0b] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Glow Line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ddfe00] to-transparent opacity-30"></div>
        {/* Bottom Glow Line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ddfe00] to-transparent opacity-30"></div>
      </div>

      {/* Client Logos - VelocityScroll in 2 Rows - Full Width */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20 space-y-8 w-full"
      >
        {/* First Row - Scrolling Right */}
        <div className="w-full">
          <VelocityScroll default_velocity={2}>
            <div className="flex gap-4">
              {clients.map((client) => (
                <div key={client.id} className="group flex-shrink-0">
                  <div className="relative w-56 h-40 lg:w-80 lg:h-52 flex items-center justify-center mx-4">
                    {/* Glow Effect on Hover */}
                    <div className="absolute inset-0 bg-[#ddfe00]/0 group-hover:bg-[#ddfe00]/10 rounded-xl blur-xl transition-all duration-300"></div>
                    
                    {/* Card Container */}
                    <div className="relative w-full h-full border border-gray-800/50 rounded-xl flex items-center justify-center p-4 transition-all duration-300 group-hover:border-[#ddfe00]/50 group-hover:brightness-110">
                      {/* Client Logo */}
                      <Image 
                        src={client.logo} 
                        alt={client.name} 
                        fill
                        className="object-contain p-1 relative z-10"
                      />
                      
                      {/* Glow on Hover */}
                      <div className="absolute inset-0 rounded-xl bg-[#ddfe00]/0 group-hover:bg-[#ddfe00]/5 transition-all duration-300 blur-sm"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </VelocityScroll>
        </div>

        {/* Second Row - Scrolling Left */}
        <div className="w-full">
          <VelocityScroll default_velocity={-2}>
            <div className="flex gap-4">
              {clients.map((client) => (
                <div key={client.id} className="group flex-shrink-0">
                  <div className="relative w-56 h-40 lg:w-80 lg:h-52 flex items-center justify-center mx-4">
                    {/* Glow Effect on Hover */}
                    <div className="absolute inset-0 bg-[#ddfe00]/0 group-hover:bg-[#ddfe00]/10 rounded-xl blur-xl transition-all duration-300"></div>
                    
                    {/* Card Container */}
                    <div className="relative w-full h-full border border-gray-800/50 rounded-xl flex items-center justify-center p-4 transition-all duration-300 group-hover:border-[#ddfe00]/50 group-hover:brightness-110">
                      {/* Client Logo */}
                      <Image 
                        src={client.logo} 
                        alt={client.name} 
                        fill
                        className="object-contain p-1 relative z-10"
                      />
                      
                      {/* Glow on Hover */}
                      <div className="absolute inset-0 rounded-xl bg-[#ddfe00]/0 group-hover:bg-[#ddfe00]/5 transition-all duration-300 blur-sm"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </VelocityScroll>
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          {/* Left Side - CEO Image */}
          <motion.div
            initial={{ opacity: 0, x: -100, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 1.2, 
              ease: [0.25, 0.1, 0.25, 1],
              opacity: { duration: 0.8 },
              x: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] },
              scale: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }
            }}
            className="relative hidden lg:block w-[25%] lg:w-[30%] flex-shrink-0 flex"
          >
            {/* Image Container - Enlarged */}
            <div className="relative w-full h-full flex flex-col">
              {/* Neon Blurred Glow Behind Image */}
              <div className="absolute inset-0 -z-10 flex items-center justify-center">
                <div 
                  className="w-[80%] h-[80%] rounded-full opacity-40 blur-3xl"
                  style={{
                    background: 'radial-gradient(circle, rgba(221, 254, 0, 0.6) 0%, rgba(221, 254, 0, 0.3) 50%, transparent 100%)',
                  }}
                />
              </div>
              
              <div className="relative w-full h-full z-10">
                <img
                  src="/aman.png"
                  alt="CEO"
                  className="w-full h-full object-contain object-left scale-125"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side - Title + Testimonials Carousel */}
          <div className="w-full lg:w-[70%] lg:flex-1 flex flex-col">
            {/* Section Header with Icon and Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: 0.2,
                ease: [0.25, 0.1, 0.25, 1],
                opacity: { duration: 0.6 },
                y: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
              }}
              className="mb-12 flex items-start justify-between gap-4 flex-shrink-0"
            >
              {/* Left Side - Icon and Label */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  {/* Green Icon/Play Button */}
                  <div className="w-8 h-8 bg-[#ddfe00] rounded flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-black rounded-sm"></div>
                  </div>
                  <p className="text-sm uppercase tracking-wider text-[#ddfe00] font-semibold">
                    TESTIMONIALS
                  </p>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-3xl xl:max-w-xs font-bold text-white mb-2 leading-tight uppercase tracking-tight">
                  OUR CLIENTS SAY{' '}
                  <span className="text-[#ddfe00]">ABOUT OUR AGENCY</span>
                </h2>
              </div>

              {/* Right Side - Navigation Arrows (Top Right) */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-white/20 bg-[#0b0b0b]/80 backdrop-blur-sm flex items-center justify-center text-white hover:border-[#ddfe00] hover:bg-[#ddfe00]/10 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:shadow-lg hover:shadow-[#ddfe00]/20 focus:outline-none focus:ring-2 focus:ring-[#ddfe00]/50"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} className="lg:w-6 lg:h-6" />
                </button>

                <button
                  onClick={nextSlide}
                  className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-white/20 bg-[#0b0b0b]/80 backdrop-blur-sm flex items-center justify-center text-white hover:border-[#ddfe00] hover:bg-[#ddfe00]/10 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:shadow-lg hover:shadow-[#ddfe00]/20 focus:outline-none focus:ring-2 focus:ring-[#ddfe00]/50"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} className="lg:w-6 lg:h-6" />
                </button>
              </div>
            </motion.div>

            {/* Carousel Container */}
            <div className="relative flex-1 flex flex-col justify-center">

              {/* Testimonial Cards - 3 Cards at a Time */}
              <div className="relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ 
                      duration: 0.7, 
                      ease: [0.25, 0.1, 0.25, 1],
                      opacity: { duration: 0.5 },
                      x: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }
                    }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {visibleTestimonials.map((testimonial, index) => (
                      <motion.div
                        key={testimonial.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          delay: index * 0.1, 
                          duration: 0.6,
                          ease: [0.25, 0.1, 0.25, 1],
                          opacity: { duration: 0.5 },
                          y: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
                        }}
                        whileHover={{ 
                          scale: 1.02, 
                          y: -5,
                          transition: { 
                            duration: 0.3,
                            ease: [0.25, 0.1, 0.25, 1]
                          }
                        }}
                        className="group relative bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:border-white/20 hover:bg-black/30"
                        style={{
                          backdropFilter: 'blur(12px)',
                          WebkitBackdropFilter: 'blur(12px)',
                        }}
                      >
                        {/* Card Content */}
                        <div className="relative z-10">
                          {/* Avatar & Name Row */}
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-700">
                              <img
                                src={testimonial.avatar}
                                alt={testimonial.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-white font-semibold text-sm mb-1 uppercase tracking-wide truncate">
                                {testimonial.name}
                              </h4>
                              <div className="flex items-center gap-2">
                                <span className="text-lg">{countryFlags[testimonial.countryCode] || '🌍'}</span>
                                <span className="text-gray-400 text-xs">{testimonial.country}</span>
                              </div>
                            </div>
                          </div>

                          {/* Review Text */}
                          <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-6">
                            {testimonial.review}
                          </p>

                          {/* Rating Stars */}
                          <div className="flex items-center gap-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                size={14}
                                className={`${
                                  i < testimonial.rating
                                    ? 'fill-[#ddfe00] text-[#ddfe00]'
                                    : 'fill-gray-800 text-gray-800'
                                }`}
                              />
                            ))}
                            {testimonial.rating === 5.0 && (
                              <span className="ml-2 text-gray-400 text-xs">{testimonial.rating.toFixed(1)}</span>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Carousel Indicators */}
              <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'w-8 bg-[#ddfe00]'
                        : 'w-2 bg-[#2c2c2c] hover:bg-[#ddfe00]/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
