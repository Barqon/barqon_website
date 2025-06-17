'use client';
import { MotionH1, MotionP, MotionA, MotionDiv } from '@/components/Motion';
import { useTheme } from '@/app/context/ThemeContext';
import Image from 'next/image';

export default function Hero() {
  const { isDarkTheme } = useTheme();

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Hero Background Image.jpg"
          alt="Hero Background"
          fill
          priority
          className="object-cover"
          quality={100}
        />
      </div>

      {/* Overlay */}
      <MotionDiv 
        className={`absolute inset-0 bg-gradient-to-b ${isDarkTheme ? 'from-black/60 via-black/40 to-black/60' : 'from-black/40 via-black/10 to-black/40'} z-0`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        <MotionH1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
        >
          Welcome to <span className="bg-gradient-to-r from-[#EED9B6] to-[#00FFBF] bg-clip-text text-transparent">Barqon</span>
        </MotionH1>
        <MotionP
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className={`text-sm md:text-base ${isDarkTheme ? 'text-[#C1C1C1]' : 'text-white drop-shadow-lg'} mb-8 leading-relaxed max-w-2xl`}
        >
          A premium digital studio for Gen Z brands. We build bold, immersive websites and digital experiences that stand out.
        </MotionP>
        <MotionA
          href="/services"
          initial={{ opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          className="inline-block bg-[#00FFBF] text-black font-bold px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-[#00FFBF]/20"
        >
          View Our Services
        </MotionA>
      </div>
      
      {/* Scroll Indicator */}
      <MotionDiv
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <div className="w-6 h-10 border-2 border-[#00FFBF] rounded-full flex justify-center">
          <MotionDiv
            className="w-1 h-2 bg-[#00FFBF] rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </MotionDiv>
    </section>
  );
}
