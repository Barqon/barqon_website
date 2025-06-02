'use client';
import { motion } from 'framer-motion';
import { MotionH1, MotionP, MotionA } from '@/components/Motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-[#1B1B1B] text-[#D6C4A8] px-6">
      <MotionH1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-bold mb-4"
      >
        Welcome to Barqon
      </MotionH1>
      <MotionP
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-lg md:text-xl text-[#EED9B6] mb-6 max-w-2xl"
      >
        A premium digital studio for Gen Z brands. We build bold, immersive websites and digital experiences that stand out.
      </MotionP>
      <MotionA
        href="/projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="bg-[#00FFBF] text-black font-bold px-6 py-3 rounded-full hover:scale-105 transition-transform"
      >
        View Our Projects
      </MotionA>
    </section>
  );
}
