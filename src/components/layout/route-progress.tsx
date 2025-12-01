'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function RouteProgress() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();
  const progressInterval = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Reset and start progress on route change
    setIsVisible(true);
    setProgress(0);

    // Clear any existing intervals/timeouts
    if (progressInterval.current) {
      clearInterval(progressInterval.current);
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }

    // Simulate progress with a smooth animation
    let currentProgress = 0;
    const increment = 3; // Speed of progress
    const maxProgress = 90; // Stop at 90% until route fully loads

    progressInterval.current = setInterval(() => {
      currentProgress += increment;
      if (currentProgress < maxProgress) {
        setProgress(currentProgress);
      } else {
        setProgress(maxProgress);
        // Clear interval when reaching max
        if (progressInterval.current) {
          clearInterval(progressInterval.current);
        }
      }
    }, 30);

    // Complete the progress after route loads (Next.js App Router loads quickly)
    timeoutRef.current = setTimeout(() => {
      // Complete to 100%
      setProgress(100);
      
      // Hide after a brief moment to show completion
      hideTimeoutRef.current = setTimeout(() => {
        setIsVisible(false);
        setProgress(0);
      }, 300);
    }, 400);

    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, [pathname]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="absolute top-0 left-0 right-0 z-[60] h-0.5 bg-transparent pointer-events-none">
      <div
        className="h-full bg-[#ddfe00] transition-all duration-200 ease-out shadow-[0_0_10px_rgba(221,254,0,0.5)]"
        style={{
          width: `${progress}%`,
          opacity: isVisible ? 1 : 0,
        }}
      />
    </div>
  );
}

