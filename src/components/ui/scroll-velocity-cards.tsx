'use client';

import { useRef, useLayoutEffect, useState } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from 'framer-motion';

function useElementWidth(ref: React.RefObject<HTMLElement | null>) {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    function updateWidth() {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    }
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [ref]);

  return width;
}

interface ScrollVelocityCardsProps {
  scrollContainerRef?: React.RefObject<HTMLElement | null>;
  children: React.ReactNode[];
  velocity?: number;
  damping?: number;
  stiffness?: number;
  numCopies?: number;
  velocityMapping?: { input: number[]; output: number[] };
  className?: string;
}

export default function ScrollVelocityCards({
  scrollContainerRef,
  children,
  velocity = 50,
  damping = 50,
  stiffness = 400,
  numCopies = 3,
  velocityMapping = { input: [0, 1000], output: [0, 3] },
  className = '',
}: ScrollVelocityCardsProps) {
  const baseX = useMotionValue(0);
  const scrollOptions = scrollContainerRef ? { container: scrollContainerRef } : {};
  const { scrollY } = useScroll(scrollOptions);
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: damping ?? 50,
    stiffness: stiffness ?? 400,
  });
  const velocityFactor = useTransform(
    smoothVelocity,
    velocityMapping?.input || [0, 1000],
    velocityMapping?.output || [0, 5],
    { clamp: false },
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const containerWidth = useElementWidth(containerRef);

  function wrap(min: number, max: number, v: number) {
    const range = max - min;
    const mod = (((v - min) % range) + range) % range;
    return mod + min;
  }

  const x = useTransform(baseX, (v) => {
    if (containerWidth === 0) return '0px';
    return `${wrap(-containerWidth, 0, v)}px`;
  });

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * velocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  const items = [];
  for (let i = 0; i < (numCopies ?? 1); i++) {
    items.push(
      <div key={i} className="flex gap-4">
        {children.map((child, index) => (
          <div key={`${i}-${index}`} className="flex-shrink-0">
            {child}
          </div>
        ))}
      </div>,
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        ref={containerRef}
        className="flex"
        style={{ x }}
      >
        {items}
      </motion.div>
    </div>
  );
}

