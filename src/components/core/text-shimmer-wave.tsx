'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface TextShimmerWaveProps {
  children: string;
  className?: string;
  duration?: number;
  spread?: number;
  zDistance?: number;
  scaleDistance?: number;
  rotateYDistance?: number;
}

export function TextShimmerWave({
  children,
  className,
  duration = 1,
  spread = 1,
  zDistance = 1,
  scaleDistance = 1.1,
  rotateYDistance = 20,
}: TextShimmerWaveProps) {
  return (
    <span
      className={cn(
        'relative inline-flex [--base-color:transparent] [--base-gradient-color:#ddfe00]',
        className
      )}
      style={{
        perspective: '1000px',
      }}
    >
      {children.split('').map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          style={{
            color: 'var(--base-color)',
            WebkitTextStroke: '1px var(--base-gradient-color)',
            transformStyle: 'preserve-3d',
          }}
          animate={{
            z: [0, zDistance * 10, 0],
            scale: [1, scaleDistance, 1],
            rotateY: [0, rotateYDistance, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: duration,
            repeat: Infinity,
            delay: (index * spread) / children.length,
            ease: 'easeInOut',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
}

