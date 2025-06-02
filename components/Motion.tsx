'use client';

import { motion, MotionProps } from 'framer-motion';
import { forwardRef } from 'react';

type ElementProps<T> = React.HTMLAttributes<T> & MotionProps;

export const MotionDiv = forwardRef<HTMLDivElement, ElementProps<HTMLDivElement>>(
  ({ children, ...rest }, ref) => <motion.div ref={ref} {...rest}>{children}</motion.div>
);

export const MotionSpan = forwardRef<HTMLSpanElement, ElementProps<HTMLSpanElement>>(
  ({ children, ...rest }, ref) => <motion.span ref={ref} {...rest}>{children}</motion.span>
);

export const MotionSection = forwardRef<HTMLElement, ElementProps<HTMLElement>>(
  ({ children, ...rest }, ref) => <motion.section ref={ref} {...rest}>{children}</motion.section>
);

export const MotionA = forwardRef<HTMLAnchorElement, React.AnchorHTMLAttributes<HTMLAnchorElement> & MotionProps>(
  ({ children, ...rest }, ref) => <motion.a ref={ref} {...rest}>{children}</motion.a>
);

export const MotionH1 = forwardRef<HTMLHeadingElement, ElementProps<HTMLHeadingElement>>(
  ({ children, ...rest }, ref) => <motion.h1 ref={ref} {...rest}>{children}</motion.h1>
);

export const MotionH2 = forwardRef<HTMLHeadingElement, ElementProps<HTMLHeadingElement>>(
  ({ children, ...rest }, ref) => <motion.h2 ref={ref} {...rest}>{children}</motion.h2>
);

export const MotionH3 = forwardRef<HTMLHeadingElement, ElementProps<HTMLHeadingElement>>(
  ({ children, ...rest }, ref) => <motion.h3 ref={ref} {...rest}>{children}</motion.h3>
);

export const MotionP = forwardRef<HTMLParagraphElement, ElementProps<HTMLParagraphElement>>(
  ({ children, ...rest }, ref) => <motion.p ref={ref} {...rest}>{children}</motion.p>
);