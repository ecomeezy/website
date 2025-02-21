'use client';

import { motion, HTMLMotionProps, useInView } from 'framer-motion';
import { useRef } from 'react';

export type TransitionVariant = 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale';

interface TransitionProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  variant?: TransitionVariant;
  delay?: number;
}

const variants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  slideUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },
  slideLeft: {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  },
  slideRight: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  }
};

const Transition = ({ 
  children, 
  variant = 'fadeIn', 
  delay = 0,
  ...props 
}: TransitionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <motion.div
      ref={ref}
      variants={variants[variant]}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.6, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Transition;