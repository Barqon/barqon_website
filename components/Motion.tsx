'use client';

import { motion, MotionProps } from 'framer-motion';
import { forwardRef } from 'react';

type ElementProps<T> = React.HTMLAttributes<T> & MotionProps;

export const MotionDiv = forwardRef<HTMLDivElement, ElementProps<HTMLDivElement>>(
  ({ children, ...rest }, ref) => <motion.div ref={ref} {...rest}>{children}</motion.div>
);

MotionDiv.displayName = 'MotionDiv';

export const MotionSpan = forwardRef<HTMLSpanElement, ElementProps<HTMLSpanElement>>(
  ({ children, ...rest }, ref) => <motion.span ref={ref} {...rest}>{children}</motion.span>
);

MotionSpan.displayName = 'MotionSpan';

export const MotionSection = forwardRef<HTMLElement, ElementProps<HTMLElement>>(
  ({ children, ...rest }, ref) => <motion.section ref={ref} {...rest}>{children}</motion.section>
);

MotionSection.displayName = 'MotionSection';

export const MotionA = forwardRef<HTMLAnchorElement, React.AnchorHTMLAttributes<HTMLAnchorElement> & MotionProps>(
  ({ children, ...rest }, ref) => <motion.a ref={ref} {...rest}>{children}</motion.a>
);

MotionA.displayName = 'MotionA';

export const MotionH1 = forwardRef<HTMLHeadingElement, ElementProps<HTMLHeadingElement>>(
  ({ children, ...rest }, ref) => <motion.h1 ref={ref} {...rest}>{children}</motion.h1>
);

MotionH1.displayName = 'MotionH1';

export const MotionH2 = forwardRef<HTMLHeadingElement, ElementProps<HTMLHeadingElement>>(
  ({ children, ...rest }, ref) => <motion.h2 ref={ref} {...rest}>{children}</motion.h2>
);

MotionH2.displayName = 'MotionH2';

export const MotionH3 = forwardRef<HTMLHeadingElement, ElementProps<HTMLHeadingElement>>(
  ({ children, ...rest }, ref) => <motion.h3 ref={ref} {...rest}>{children}</motion.h3>
);

MotionH3.displayName = 'MotionH3';

export const MotionP = forwardRef<HTMLParagraphElement, ElementProps<HTMLParagraphElement>>(
  ({ children, ...rest }, ref) => <motion.p ref={ref} {...rest}>{children}</motion.p>
);

MotionP.displayName = 'MotionP';