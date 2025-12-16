'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import RouteProgress from './route-progress';
import Image from 'next/image';
// import logo from '../../public/dalogo.png';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/blog', label: 'Blog' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 pointer-events-none pt-[env(safe-area-inset-top)]">
      {/* Background Shape - Full width when scrolled, constrained when not */}
      <div
        className={`fixed transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${isScrolled
          ? 'bg-black/70 backdrop-blur-xl shadow-lg shadow-[#ddfe00]/10 border-b border-[#ddfe00]/20 left-0 right-0 top-0'
          : 'bg-transparent backdrop-blur-none left-4 right-4 top-4'
          }`}
        style={{
          height: '5rem',
          borderRadius: isScrolled ? '0' : '9999px',
          maxWidth: isScrolled ? '100%' : '80rem',
          margin: '0 auto',
        }}
      />

      {/* Content Container - Always constrained to max-w-7xl */}
      <div className={`fixed left-0 right-0 pointer-events-none transition-all duration-300 ${isScrolled ? 'top-0' : 'top-4'
        }`}>
        <div className="flex w-full max-w-full lg:max-w-7xl mx-auto h-20 py-2 pointer-events-auto px-4 sm:px-6 lg:px-8 items-center justify-between">
          {/* Logo - Left */}
          <Link
            href="/"
            className="flex items-center space-x-2 group z-10 flex-shrink-0"
          >
            <Image
              src="/dalogo.png"
              alt="DigitalAddis Logo"
              width={120}
              height={40}
              className="w-[80px] sm:w-[100px] lg:w-[120px] h-auto"
              priority
            />
          </Link>


          {/* Navigation Links - Center (hidden on mobile) */}
          <div className={`hidden md:flex items-center justify-center z-10 ${!isScrolled ? 'rounded-full bg-black/50 backdrop-blur-lg shadow-xl shadow-[#ddfe00]/15 border border-[#ddfe00]/30 px-6 sm:px-8 py-3' : ''
            } transition-all duration-300`}>
            {/* Desktop Navigation */}
            <div className="flex items-center justify-center space-x-1">
              {navLinks.map((link) => {
                const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 text-sm font-medium transition-colors duration-300 relative group ${isActive ? 'text-[#ddfe00]' : 'text-gray-300 hover:text-[#ddfe00]'
                      }`}
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    {link.label}
                    <span
                      className="absolute bottom-0 left-0 h-0.5 bg-[#ddfe00] transition-all duration-300 w-0 group-hover:w-full"
                    ></span>
                  </Link>
                );
              })}
            </div>

            {/* Glossy overlay effect - only in initial state */}
            {!isScrolled && (
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ddfe00]/20 to-transparent pointer-events-none"></div>
            )}
          </div>

          {/* Contact Button & Mobile Menu - Right */}
          <div className="flex items-center gap-4 z-10 flex-shrink-0">
            <Link
              href="/contact"
              className="hidden md:block px-6 py-2.5 bg-[#ddfe00] text-black font-semibold rounded-full hover:bg-[#ddfe00] hover:shadow-lg hover:shadow-[#ddfe00]/50 transition-shadow duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex md:hidden p-3 text-white hover:text-[#ddfe00] transition-colors duration-300 z-50"
              aria-label="Toggle menu"
            >
              <div className="w-7 h-7 flex flex-col justify-center space-y-1.5">
                <span
                  className={`block h-[3px] w-7 bg-current rounded transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[9px]' : ''
                    }`}
                ></span>
                <span
                  className={`block h-[3px] w-7 bg-current rounded transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''
                    }`}
                ></span>
                <span
                  className={`block h-[3px] w-7 bg-current rounded transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''
                    }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out pointer-events-auto ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
            }`}
        >
          <div className="px-4 sm:px-6 lg:px-8 pt-2">
            <div className="max-w-full lg:max-w-7xl mx-auto py-4 space-y-2 bg-black/50 backdrop-blur-lg rounded-xl border border-white/5 px-4">
              {navLinks.map((link) => {
                const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`block px-4 py-3 rounded-lg transition-all duration-300 ${isActive
                      ? 'text-[#ddfe00] bg-gray-900/50'
                      : 'text-gray-300 hover:text-[#ddfe00] hover:bg-gray-900/50'
                      }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block mx-4 mt-4 px-6 py-3 bg-[#ddfe00] text-black font-semibold text-center rounded-full hover:bg-[#ddfe00] transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Route Progress Indicator */}
        <RouteProgress />
      </div>
    </nav>
  );
}

