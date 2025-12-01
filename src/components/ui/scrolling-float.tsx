'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';
import { useInView } from 'framer-motion';

interface ScrollingFloatProps {
  children: ReactNode;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  className?: string;
  delay?: number;
}

/**
 * ScrollingFloat Component
 * Creates a smooth floating animation effect based on scroll position
 * Only animates when the element is visible in the viewport
 */
export function ScrollingFloat({
  children,
  speed = 0.5,
  direction = 'up',
  distance = 50,
  className = '',
  delay = 0,
}: ScrollingFloatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });
  const [scrollY, setScrollY] = useState(0);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    if (!isInView) return;

    const handleScroll = () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }

      rafId.current = requestAnimationFrame(() => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const elementTop = rect.top;
          const elementHeight = rect.height;

          // Calculate scroll progress (0 to 1) when element is in viewport
          const scrollProgress = Math.max(
            0,
            Math.min(
              1,
              (windowHeight - elementTop) / (windowHeight + elementHeight)
            )
          );

          setScrollY(scrollProgress);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [isInView]);

  // Calculate transform based on direction and scroll progress
  const getTransform = () => {
    const offset = scrollY * distance * speed;
    const easeOffset = easeInOutCubic(scrollY) * distance * speed;

    switch (direction) {
      case 'up':
        return `translateY(${-easeOffset}px)`;
      case 'down':
        return `translateY(${easeOffset}px)`;
      case 'left':
        return `translateX(${-easeOffset}px)`;
      case 'right':
        return `translateX(${easeOffset}px)`;
      default:
        return `translateY(${-easeOffset}px)`;
    }
  };

  // Smooth easing function
  const easeInOutCubic = (t: number): number => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: isInView ? getTransform() : 'none',
        transition: `transform 0.1s ease-out`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

