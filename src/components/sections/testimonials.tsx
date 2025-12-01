'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { VelocityScroll } from '@/components/ui/velocity-scroll';

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
  {
    id: 1,
    name: 'TechCorp',
    logo: '/api/placeholder/200/100',
  },
  {
    id: 2,
    name: 'InnovateHub',
    logo: '/api/placeholder/200/100',
  },
  {
    id: 3,
    name: 'DigitalFlow',
    logo: '/api/placeholder/200/100',
  },
  {
    id: 4,
    name: 'CloudSync',
    logo: '/api/placeholder/200/100',
  },
  {
    id: 5,
    name: 'StartupX',
    logo: '/api/placeholder/200/100',
  },
  {
    id: 6,
    name: 'FutureTech',
    logo: '/api/placeholder/200/100',
  },
  {
    id: 7,
    name: 'NexGen Solutions',
    logo: '/api/placeholder/200/100',
  },
  {
    id: 8,
    name: 'DataDrive',
    logo: '/api/placeholder/200/100',
  },
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

  // Update cards to show based on screen size
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
                  <div className="relative w-48 h-32 lg:w-64 lg:h-40 flex items-center justify-center mx-4">
                    {/* Glow Effect on Hover */}
                    <div className="absolute inset-0 bg-[#ddfe00]/0 group-hover:bg-[#ddfe00]/10 rounded-xl blur-xl transition-all duration-300"></div>
                    
                    {/* Card Container */}
                    <div className="relative w-full h-full bg-gray-900/50 border border-gray-800 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:border-[#ddfe00]/50 group-hover:bg-gray-900/80 grayscale group-hover:grayscale-0 group-hover:brightness-110">
                      {/* Client Name */}
                      <div className="text-gray-500 group-hover:text-[#ddfe00] transition-colors duration-300 font-semibold text-sm lg:text-base relative z-10">
                        {client.name}
                      </div>
                      
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
                  <div className="relative w-48 h-32 lg:w-64 lg:h-40 flex items-center justify-center mx-4">
                    {/* Glow Effect on Hover */}
                    <div className="absolute inset-0 bg-[#ddfe00]/0 group-hover:bg-[#ddfe00]/10 rounded-xl blur-xl transition-all duration-300"></div>
                    
                    {/* Card Container */}
                    <div className="relative w-full h-full bg-gray-900/50 border border-gray-800 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:border-[#ddfe00]/50 group-hover:bg-gray-900/80 grayscale group-hover:grayscale-0 group-hover:brightness-110">
                      {/* Client Name */}
                      <div className="text-gray-500 group-hover:text-[#ddfe00] transition-colors duration-300 font-semibold text-sm lg:text-base relative z-10">
                        {client.name}
                      </div>
                      
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Large Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            {/* Soft Neon Green Glow Behind Image */}
            <div className="absolute inset-0 bg-[#ddfe00] opacity-[0.15] blur-[80px] rounded-full -z-10"></div>
            
            {/* Image Container */}
            <div className="relative w-full h-[600px] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1200&fit=crop&crop=face"
                alt="Client testimonial"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b]/80 via-transparent to-transparent"></div>
            </div>
          </motion.div>

          {/* Right Side - Title + Testimonials Carousel */}
          <div className="w-full">
            {/* Section Title & Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <p className="text-sm uppercase tracking-wider text-[#ddfe00] mb-3 font-semibold">
                Testimonials
              </p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2 leading-tight">
                Our Clients Say{' '}
                <span className="text-[#ddfe00]">About Our Agency</span>
              </h2>
            </motion.div>

            {/* Carousel Container */}
            <div className="relative">
              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-0 lg:-left-16 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-[#ddfe00]/50 bg-[#0b0b0b]/80 backdrop-blur-sm flex items-center justify-center text-[#ddfe00] hover:border-[#ddfe00] hover:bg-[#ddfe00]/10 transition-all duration-300 hover:shadow-lg hover:shadow-[#ddfe00]/20 focus:outline-none focus:ring-2 focus:ring-[#ddfe00]/50"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} className="lg:w-6 lg:h-6" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-0 lg:-right-16 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-[#ddfe00]/50 bg-[#0b0b0b]/80 backdrop-blur-sm flex items-center justify-center text-[#ddfe00] hover:border-[#ddfe00] hover:bg-[#ddfe00]/10 transition-all duration-300 hover:shadow-lg hover:shadow-[#ddfe00]/20 focus:outline-none focus:ring-2 focus:ring-[#ddfe00]/50"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} className="lg:w-6 lg:h-6" />
              </button>

              {/* Testimonial Cards */}
              <div className="relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {visibleTestimonials.map((testimonial) => (
                      <motion.div
                        key={testimonial.id}
                        whileHover={{ scale: 1.02 }}
                        className="group relative bg-[#0b0b0b] border border-[#2c2c2c] rounded-[24px] p-6 transition-all duration-300 hover:border-[#ddfe00]/50 hover:shadow-lg hover:shadow-[#ddfe00]/5"
                      >
                        {/* Glow Effect on Hover */}
                        <div className="absolute inset-0 rounded-[24px] bg-[#ddfe00]/0 group-hover:bg-[#ddfe00]/5 transition-all duration-300 blur-xl -z-10"></div>

                        {/* Card Content */}
                        <div className="relative z-10">
                          {/* Avatar & Name Row */}
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#2c2c2c] group-hover:border-[#ddfe00]/50 transition-colors duration-300">
                              <img
                                src={testimonial.avatar}
                                alt={testimonial.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-white font-semibold text-base mb-1 group-hover:text-[#ddfe00] transition-colors duration-300">
                                {testimonial.name}
                              </h4>
                              <div className="flex items-center gap-2">
                                <span className="text-2xl">{countryFlags[testimonial.countryCode] || '🌍'}</span>
                                <span className="text-[#8b8b8b] text-sm">{testimonial.country}</span>
                              </div>
                            </div>
                          </div>

                          {/* Review Text */}
                          <p className="text-[#cccccc] text-sm leading-relaxed mb-4 group-hover:text-white transition-colors duration-300" style={{
                            display: '-webkit-box',
                            WebkitLineClamp: 6,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                          }}>
                            {testimonial.review}
                          </p>

                          {/* Rating Stars */}
                          <div className="flex items-center gap-1 mb-4">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                size={16}
                                className={`${
                                  i < testimonial.rating
                                    ? 'fill-[#ddfe00] text-[#ddfe00]'
                                    : 'fill-[#2c2c2c] text-[#2c2c2c]'
                                } transition-colors duration-300`}
                              />
                            ))}
                            <span className="ml-2 text-[#8b8b8b] text-sm">{testimonial.rating.toFixed(1)}</span>
                          </div>

                          {/* Bottom Divider */}
                          <div className="h-px bg-gradient-to-r from-transparent via-[#2c2c2c] to-transparent group-hover:via-[#ddfe00]/30 transition-all duration-300"></div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Carousel Indicators (Optional) */}
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
