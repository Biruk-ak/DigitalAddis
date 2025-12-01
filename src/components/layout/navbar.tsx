'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import RouteProgress from './route-progress';
import Image from 'next/image';
// import logo from '../../public/dalogo.png';

export default function Navbar() {
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
    { href: '/services', label: 'Service' },
    { href: '/blog', label: 'Blog' },
    // { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className={`fixed left-0 right-0 px-4 sm:px-6 lg:px-8 pointer-events-none transition-all duration-300 ${
        isScrolled ? 'top-0' : 'top-4'
      }`}>
        {/* Background Shape - Changes based on scroll */}
        <div 
          className={`absolute inset-0 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            isScrolled 
              ? 'bg-black/70 backdrop-blur-xl shadow-lg shadow-[#ddfe00]/10 border-b border-[#ddfe00]/20' 
              : 'bg-transparent backdrop-blur-none'
          }`}
          style={{
            top: 0,
            left: isScrolled ? '0' : '1rem',
            right: isScrolled ? '0' : '1rem',
            height: '5rem',
            borderRadius: isScrolled ? '0' : '9999px',
            maxWidth: isScrolled ? '100%' : '56rem',
            margin: isScrolled ? '0' : '0 auto',
          }}
        />
        
        {/* Content Container - Always same position */}
        <div className="relative w-full h-20 py-2 pointer-events-auto">
          {/* Logo - Left - Fixed Position */}
          <Link
            href="/"
            className="absolute left-8 sm:left-12 lg:left-16 top-1/2 -translate-y-1/2 flex items-center space-x-2 group h-full z-10"
          >
            <Image 
              src="/dalogo.png" 
              alt="DigitalAddis Logo" 
              width={120}
              height={40}
              className="h-8 sm:h-10 lg:h-12 w-auto object-contain group-hover:opacity-80 transition-opacity duration-300"
              priority
            />
          </Link>


          {/* Navigation Links - Center */}
          <div className={`absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-full flex items-center justify-center z-10 ${
            !isScrolled ? 'rounded-full bg-black/50 backdrop-blur-lg shadow-xl shadow-[#ddfe00]/15 border border-[#ddfe00]/30 px-6 sm:px-8' : ''
          } transition-all duration-300`}>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center space-x-1 h-full">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-[#ddfe00] transition-colors duration-300 relative group"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ddfe00] group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>

            {/* Glossy overlay effect - only in initial state */}
            {!isScrolled && (
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ddfe00]/20 to-transparent pointer-events-none"></div>
            )}
          </div>

          {/* Contact Button - Right - Fixed Position */}
          <div className="absolute right-8 sm:right-12 lg:right-16 top-1/2 -translate-y-1/2 flex items-center gap-4 z-10">
            <Link
              href="/contact"
              className="hidden md:block px-6 py-2.5 bg-[#ddfe00] text-black font-semibold rounded-full hover:bg-[#ddfe00] hover:shadow-lg hover:shadow-[#ddfe00]/50 transition-shadow duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-[#ddfe00] transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                <span
                  className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : ''
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 sm:px-6 lg:px-8 pt-2">
            <div className="max-w-7xl mx-auto py-4 space-y-2 bg-black/50 backdrop-blur-lg rounded-xl border border-white/5 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="block px-4 py-3 text-gray-300 hover:text-[#ddfe00] hover:bg-gray-900/50 rounded-lg transition-all duration-300"
                >
                  {link.label}
                </Link>
              ))}
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

