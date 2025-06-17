import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHome, FaUsers, FaBriefcase, FaEnvelope } from 'react-icons/fa';

const navLinks = [
  { href: '/', icon: <FaHome size={22} />, label: 'Home' },
  { href: '/who-we-are', icon: <FaUsers size={22} />, label: 'Who We Are' },
  { href: '/services', icon: <FaBriefcase size={22} />, label: 'Services' },
  { href: '/contact-us', icon: <FaEnvelope size={22} />, label: 'Contact Us' },
];

export default function BottomNav({ show }: { show: boolean }) {
  const pathname = usePathname();
  if (!show) return null;
  return (
    <nav className="fixed bottom-3 left-1/2 -translate-x-1/2 z-50 w-[95vw] max-w-md rounded-2xl bg-white/30 dark:bg-[#232323]/60 backdrop-blur-xl shadow-2xl flex justify-around items-center py-2 px-3 border border-white/40 dark:border-[#00FFBF]/20 transition-all duration-300 md:hidden">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`flex flex-col items-center justify-center text-xs font-medium transition-colors duration-200 px-2 py-1 rounded-lg ${
            pathname === link.href
              ? 'text-[#00FFBF] bg-white/60 dark:bg-[#00FFBF]/10 shadow-md'
              : 'text-gray-700 dark:text-[#EED9B6] hover:text-[#00FFBF]'
          }`}
        >
          {link.icon}
        </Link>
      ))}
    </nav>
  );
} 