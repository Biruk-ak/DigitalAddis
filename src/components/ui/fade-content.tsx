'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeContentProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

/**
 * FadeContent Component (ReactBits-style)
 * Provides smooth fade-in animation (fixed position, no floating)
 */
export function FadeContent({
  children,
  delay = 0,
  duration = 0.8,
  className = '',
}: FadeContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration,
        delay,
        ease: [0.6, -0.05, 0.01, 0.99],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

