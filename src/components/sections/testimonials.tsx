'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, memo } from 'react';
import { ChevronLeft, ChevronRight, Star, Building2 } from 'lucide-react';
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
  company: string;
  review: string;
  rating: number;
}

const clients: Client[] = [
  { id: 1, name: 'Oromia Bank', logo: '/brands/oromia.png' },
  { id: 2, name: 'Telebirr', logo: '/brands/tele birr.png' },
  { id: 3, name: 'Wegagen Bank', logo: '/brands/wegagen benk.png' },
  { id: 4, name: 'Tsehay Bank', logo: '/brands/tsehay bank.png' },
  { id: 5, name: 'Ethio Telecom', logo: '/brands/ethiotele.png' },
  { id: 6, name: 'Cooperative Bank', logo: '/brands/coop.png' },
  { id: 7, name: 'Hibret Bank', logo: '/brands/amhara bank.png' },
  { id: 8, name: 'Abay Bank', logo: '/brands/abayy bankf.png' },
  { id: 9, name: 'CTI', logo: '/brands/cti.png' },
  { id: 10, name: 'SafeZone', logo: '/brands/safezone.png' },
  { id: 11, name: 'Hub Addis', logo: '/brands/hubaddis.png' },
  { id: 12, name: 'Amara Bank', logo: '/brands/amhara bank.png' },
  { id: 13, name: 'Ahadu Bank', logo: '/brands/abna bank.png' },
  { id: 14, name: 'Bynna Bank', logo: '/brands/bynnabank.png' },
  { id: 15, name: "Kaldi's Coffee", logo: '/brands/kaldi\'s.png' },
  { id: 16, name: 'NBC', logo: '/brands/nbc.png' },
  { id: 17, name: 'fdre', logo: '/brands/fdre.png' },
  { id: 18, name: 'signature', logo: '/brands/signature.png' },
];

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Pastor Dr Yonas Badi',
    avatar: '/testimonials/yonas.jpg',
    company: 'Mercy Life University',
    review: 'Digital Addis created a website that truly reflects the mission and values of Mercy Life University. The design is clear, elegant, and purposeful, making our online presence both professional and welcoming. The process was smooth, and the final result exceeded our expectations.',
    rating: 5.0,
  },
  {
    id: 2,
    name: 'Biniyam Tefaye',
    avatar: '/testimonials/ben.jpg',
    company: 'Signature Fitness',
    review: 'Digital Addis delivered an experience that truly reflects the level of quality we aim to offer at Signature Fitness. From the website to the overall marketing direction, every detail felt intentional, elegant, and aligned with our brand. Their team was attentive, thoughtful, and a pleasure to work with. We are very proud of the final result and highly recommend Digital Addis. ',
    rating: 5.0,
  },
  {
    id: 3,
    name: 'Ambassor Fitsum Aregawi',
    avatar: '/testimonials/ambassador.jpg',
    company: 'EDS',
    review: 'Digital Addis delivered a complete branding identity that truly reflects our mission and values. From the visual direction to the overall brand feel, everything was cohesive, professional, and thoughtfully executed. Their team took the time to understand our purpose and translated it into a brand that feels trustworthy and impactful.',
    rating: 5.0,
  },
  {
    id: 4,
    name: 'Liya Golomt',
    avatar: '/testimonials/liya_gole.jpg',
    company: 'LMS',
    review: 'Digital Addis brought a new level of sophistication to our social media presence. Their understanding of the beauty industry, combined with a clear and strategic digital approach, allowed IMS to communicate its standards and artistry effortlessly online. Every detail felt considered and on-brand.',
    rating: 5.0,
  },
  {
    id: 5,
    name: 'Dr. Hassen Hussien',
    avatar: '/testimonials/gedabank.jpg',
    company: 'Gaddaa Bank',
    review: 'Digital Addis has played a pivotal role in enhancing Gaddaa Bank’s digital presence. Their strategic approach to digital marketing has been thoughtful, precise, and highly effective in communicating our brand values to a wider audience. We appreciate their professionalism, expertise, and commitment to delivering impactful results, and we confidently recommend Digital Addis to any organization seeking to strengthen its digital footprint.',
    rating: 5.0,
  },
  {
    id: 6,
    name: 'Dr. Aklilu Wubet',
    avatar: '/testimonials/wegagen.jpg',
    company: 'Wegagen Bank',
    review: 'Wegagen Bank has experienced a significant enhancement in its online presence and engagement with its audience. The team at Digital Addis demonstrated exceptional expertise, creativity, and professionalism, ensuring that every initiative aligned seamlessly with our brand values. We are extremely satisfied with the results and confidently recommend Digital Addis to any organization seeking high-quality, impactful solutions to strengthen their brand.',
    rating: 5.0,
  },
];

const BrandLogos = memo(() => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="mb-20 space-y-8 w-full"
  >
    {/* First Row - Scrolling Right */}
    <div className="w-full">
      <VelocityScroll default_velocity={0.8}>
        <div className="flex gap-4">
          {clients.map((client) => (
            <div key={client.id} className="group flex-shrink-0">
              <div className="relative w-44 h-32 lg:w-64 lg:h-40 flex items-center justify-center mx-3">
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
      <VelocityScroll default_velocity={-0.8}>
        <div className="flex gap-4">
          {clients.map((client) => (
            <div key={client.id} className="group flex-shrink-0">
              <div className="relative w-44 h-32 lg:w-64 lg:h-40 flex items-center justify-center mx-3">
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
));

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


      {/* Client Logos - VelocityScroll in 2 Rows - Full Width */}
      <BrandLogos />

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
            <div className="relative w-full h-full flex flex-col justify-center">


              {/* Neon Blurred Glow Behind Image */}
              <div className="absolute inset-0 z-0 flex items-center justify-center">
                <div
                  className="w-[80%] h-[80%] rounded-full opacity-40 blur-3xl"
                  style={{
                    background: 'radial-gradient(circle, rgba(221, 254, 0, 0.6) 0%, rgba(221, 254, 0, 0.3) 50%, transparent 100%)',
                  }}
                />
              </div>

              <div className="relative w-full h-[100%] z-10">
                <img
                  src="/aman.png"
                  alt="CEO"
                  className="w-full h-full object-contain object-left"
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
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-3xl xl:max-w-4xs font-bold text-white mb-2 leading-tight uppercase tracking-tight">
                  WHAT OUR CLIENTS SAY {' '}
                  <span className="text-[#ddfe00]">ABOUT OUR COMPANY</span>
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
                                <Building2 size={16} className="text-[#ddfe00]" />
                                <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">{testimonial.company}</span>
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
                                className={`${i < testimonial.rating
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
                    className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
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
