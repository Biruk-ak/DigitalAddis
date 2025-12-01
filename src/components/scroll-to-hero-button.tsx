'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { FadeContent } from '@/components/ui/fade-content';

/**
 * ScrollToHeroButton Component
 * Floating button that scrolls user back to the Hero section
 * Appears after scrolling down 200px
 */
export default function ScrollToHeroButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setIsVisible(scrollY > 200);
    };

    // Check initial scroll position
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToHero = () => {
    const heroElement = document.getElementById('hero');
    if (heroElement) {
      heroElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <FadeContent delay={0} duration={0.3}>
      <button
        onClick={scrollToHero}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-[#ddfe00] text-black rounded-full shadow-lg shadow-[#ddfe00]/30 hover:shadow-xl hover:shadow-[#ddfe00]/40 flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 group"
        aria-label="Scroll to top"
      >
        {/* Hover Glow Effect */}
        <div className="absolute inset-0 rounded-full bg-[#ddfe00] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
        
        {/* Arrow Icon */}
        <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" strokeWidth={2.5} />
      </button>
    </FadeContent>
  );
}

