'use client';

import { useTheme } from '@/app/context/ThemeContext';

export default function ThemeSwitcher() {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`fixed top-4 right-4 z-50 p-2 rounded-full ${
        isDarkTheme ? 'bg-[#2A2A2A] text-[#EED9B6]' : 'bg-gray-100 text-gray-800'
      } hover:shadow-lg transition-all duration-300`}
      aria-label="Toggle theme"
    >
      {isDarkTheme ? '☀️' : '🌙'}
    </button>
  );
} 