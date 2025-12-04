'use client';

import { motion, Variants } from 'framer-motion';
import React, { ElementType } from 'react';

interface TextEffectProps {
  children: string;
  per?: 'word' | 'character' | 'line';
  as?: ElementType;
  preset?: 'slide' | 'fade' | 'scale' | 'blur';
  className?: string;
  delay?: number;
  duration?: number;
}

const presets: Record<string, Variants> = {
  slide: {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    }),
  },
  fade: {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
      },
    }),
  },
  scale: {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.08,
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    }),
  },
  blur: {
    hidden: { opacity: 0, filter: 'blur(10px)' },
    visible: (i: number) => ({
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        delay: i * 0.06,
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    }),
  },
};

export function TextEffect({
  children,
  per = 'word',
  as: Component = 'span',
  preset = 'slide',
  className = '',
  delay = 0,
  duration,
}: TextEffectProps) {
  const selectedPreset = presets[preset] || presets.slide;
  
  // Split text based on 'per' prop
  const splitText = () => {
    if (per === 'word') {
      return children.split(' ').filter(Boolean);
    } else if (per === 'character') {
      return children.split('');
    } else {
      return [children];
    }
  };

  const textParts = splitText();
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay,
      },
    },
  };

  // Override duration if provided
  const customVariants = duration
    ? {
        ...selectedPreset,
        visible: (i: number) => {
          const visibleFn = selectedPreset.visible as (i: number) => { opacity: number; transition: { delay: number; duration: number } };
          const result = visibleFn(i);
          return {
            ...result,
            transition: {
              ...result.transition,
              duration,
            },
          };
        },
      }
    : selectedPreset;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={className}
    >
      <Component className="inline-block">
        {textParts.map((part, index) => (
          <motion.span
            key={index}
            variants={customVariants}
            custom={index}
            className="inline-block"
            style={per === 'word' && index < textParts.length - 1 ? { marginRight: '0.25em' } : {}}
          >
            {part}
            {per === 'word' && index < textParts.length - 1 && '\u00A0'}
          </motion.span>
        ))}
      </Component>
    </motion.div>
  );
}

