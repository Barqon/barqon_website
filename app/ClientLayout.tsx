'use client';

import { useTheme } from './context/ThemeContext';
import { useWebVitals } from '@/lib/hooks/useWebVitals';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect } from 'react';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const { isDarkTheme } = useTheme();

  useEffect(() => {
    const meta = document.querySelector('meta[name=theme-color]');
    if (meta) {
      meta.setAttribute('content', isDarkTheme ? '#121212' : '#f8fafc');
    }
  }, [isDarkTheme]);

  useWebVitals();

  return (
    <>
      <div className={`fixed inset-0 ${isDarkTheme ? 'bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#00FFBF]/5 via-transparent to-transparent opacity-50' : 'bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-100/20 via-transparent to-transparent opacity-70'} pointer-events-none`} />
      <div className={`min-h-screen flex flex-col ${isDarkTheme ? 'bg-[#121212] text-[#C1C1C1]' : 'bg-gradient-to-b from-white via-gray-50 to-emerald-50/30 text-gray-800'}`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
}
