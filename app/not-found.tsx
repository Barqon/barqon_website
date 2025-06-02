import Link from 'next/link';
import { MotionDiv } from '@/components/Motion';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#121212] px-6">
      <div className="text-center">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#EED9B6] to-[#00FFBF] bg-clip-text text-transparent">404</span>
          </h1>
          <p className="text-[#C1C1C1] mb-8">Page not found</p>
          <Link 
            href="/"
            className="inline-block bg-[#00FFBF] text-black font-bold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            Return Home
          </Link>
        </MotionDiv>
      </div>
    </div>
  );
} 