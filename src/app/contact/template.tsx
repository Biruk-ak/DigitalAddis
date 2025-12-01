'use client';

import { motion } from 'framer-motion';

export default function ContactTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99] as [number, number, number, number],
      }}
    >
      {children}
    </motion.div>
  );
}

