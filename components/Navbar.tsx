'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { MotionDiv } from './Motion';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/who-we-are', label: 'Who We Are' },
    { href: '/services', label: 'Services' },
  ];

  return (
    <nav 
      className={`w-full px-2 py-3 fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#1B1B1B]/30 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="w-full">
        <div className="hidden md:flex justify-between items-center w-full px-2">
          <Link href="/" className="flex items-center gap-2 group text-lg md:text-xl font-bold">
            <img src="/Desktop Logo.png" alt="Barqon Logo" className="h-8 w-auto transition-transform duration-300 group-hover:scale-105" />
            <div className="text-lg font-bold bg-gradient-to-r from-[#EED9B6] to-[#00FFBF] bg-clip-text text-transparent">
              Barqon
            </div>
          </Link>

          <ul className="flex gap-6 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href}
                  className={`relative group ${
                    pathname === link.href ? 'text-[#00FFBF]' : 'text-[#D6C4A8] hover:text-[#00FFBF]'
                  } transition-colors duration-300`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-[#00FFBF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                    pathname === link.href ? 'scale-x-100' : ''
                  }`} />
                </Link>
              </li>
            ))}
          </ul>

          <Link 
            href="/contact-us" 
            className="text-sm px-4 py-1.5 rounded-full border border-[#EED9B6] hover:bg-[#EED9B6] hover:text-black transition-all"
          >
            Contact Us
          </Link>
        </div>

        {mounted && (
          <div className="md:hidden block w-full">
            <div className="flex justify-between items-center">
              <Link href="/" className="flex items-center gap-2">
                <img src="/Desktop Logo.png" alt="Barqon Logo" className="h-8 w-auto" />
                <div className="text-lg font-bold bg-gradient-to-r from-[#EED9B6] to-[#00FFBF] bg-clip-text text-transparent">
                  Barqon
                </div>
              </Link>
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                aria-label="Toggle Menu"
                className="p-1.5 hover:bg-[#00FFBF]/10 rounded-lg transition-colors duration-300"
              >
                {isOpen ? <HiX className="w-5 h-5" /> : <HiMenu className="w-5 h-5" />}
              </button>
            </div>
            <MotionDiv
              initial={false}
              animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <ul className="flex flex-col space-y-3 pt-4 px-4 text-sm">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      onClick={() => setIsOpen(false)}
                      className={`block py-1.5 ${
                        pathname === link.href ? 'text-[#00FFBF]' : 'text-[#D6C4A8] hover:text-[#00FFBF]'
                      } transition-colors duration-300`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link 
                    href="/contact-us" 
                    onClick={() => setIsOpen(false)}
                    className="block py-1.5 text-[#00FFBF] hover:text-[#00FFBF]/80 transition-colors duration-300"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </MotionDiv>
          </div>
        )}
      </div>
    </nav>
  );
}
