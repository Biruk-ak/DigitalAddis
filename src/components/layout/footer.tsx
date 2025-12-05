'use client';

import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Download,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { TextShimmerWave } from '@/components/core/text-shimmer-wave';

const data = {
  services: [
    { text: 'UI/UX Design', href: '/services' },
    { text: 'Web Design', href: '/services' },
    { text: 'Mobile App Development', href: '/services' },
    { text: 'Digital Marketing', href: '/services' },
    { text: 'Logo & Branding', href: '/services' },
    { text: 'SaaS Design', href: '/services' },
    { text: 'Motion Graphics', href: '/services' },
    { text: 'Brand Strategy', href: '/services' },
  ],
  quickLinks: [
    { text: 'Home', href: '/' },
    { text: 'Projects', href: '/projects' },
    { text: 'Blog', href: '/blog' },
    { text: 'Contact', href: '/contact' },
    { text: 'FAQ', href: '/faq' },
    { text: 'Support', href: '/support' },
  ],
  specialized: [
    { text: 'E-Commerce Industry', href: '/services' },
    { text: 'Healthcare & Fitness Industry', href: '/services' },
    { text: 'Edtech Industry', href: '/services' },
    { text: 'Fintech Industry', href: '/services' },
  ],
  contact: {
    location: 'Addis Ababa, Ethiopia',
    email: 'hello@digitaladdis.com',
    phone: '+251 911 234 567',
    whatsapp: '+251 911 234 567',
  },
  social: {
    facebook: 'https://web.facebook.com/digitaladdis',
    linkedin: 'https://www.linkedin.com/company/digital-addis/',
    instagram: 'https://instagram.com/digitaladdis/',
    telegram: 'https://t.me/digitaladdis',
    tiktok: 'https://www.tiktok.com/@digitaladdis',
  },
  company: {
    name: 'DigitalAddis',
    description:
      'We imagine and build experiences, products and businesses that disrupt the status quo, win hearts and realize the future. Explore how we work',
    logo: '/dalogo.png',
  },
};

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: data.social.facebook },
  { icon: Linkedin, label: 'LinkedIn', href: data.social.linkedin },
  { icon: Instagram, label: 'Instagram', href: data.social.instagram },
  { icon: 'Telegram', label: 'Telegram', href: data.social.telegram },
  { icon: 'TikTok', label: 'TikTok', href: data.social.tiktok },
];

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #111111 25%, #1a1a1a 50%, #0a0a0a 100%)',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-6">
            {/* Logo and Description */}
            <div className="lg:col-span-2">
              {/* Logo */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-[#1a1a1a] rounded-xl flex items-center justify-center border border-[#ddfe00]/30 overflow-hidden">
                  <Image 
                    src={data.company.logo} 
                    alt="DigitalAddis Logo" 
                    width={64} 
                    height={64}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed mb-8 max-w-sm">
                {data.company.description}
              </p>

              {/* Email Subscription */}
              <div className="relative flex items-center max-w-sm">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none z-10" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full pl-11 pr-14 py-3 bg-[#1a1a1a]/50 border border-[#333333] rounded-full text-white placeholder-gray-400 text-sm focus:outline-none focus:border-[#ddfe00]"
                  />
                  <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#ddfe00] hover:bg-[#c4e600] text-black p-2.5 rounded-full transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
                Services
              </h3>
              <ul className="space-y-3">
                {data.services.map(({ text, href }) => (
                  <li key={text}>
                    <Link
                      href={href}
                      className="text-gray-400 hover:text-[#ddfe00] text-sm transition-colors"
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Link */}
            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
                Quick Link
              </h3>
              <ul className="space-y-3">
                {data.quickLinks.map(({ text, href }) => (
                  <li key={text}>
                    <Link
                      href={href}
                      className="text-gray-400 hover:text-[#ddfe00] text-sm transition-colors"
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specialized */}
            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
                Specialized
              </h3>
              <ul className="space-y-3">
                {data.specialized.map(({ text, href }) => (
                  <li key={text}>
                    <Link
                      href={href}
                      className="text-gray-400 hover:text-[#ddfe00] text-sm transition-colors"
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
                Contact
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">{data.contact.location}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <a 
                    href={`mailto:${data.contact.email}`}
                    className="text-gray-400 hover:text-[#ddfe00] text-sm transition-colors"
                  >
                    {data.contact.email}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <a 
                    href={`tel:${data.contact.phone}`}
                    className="text-gray-400 hover:text-[#ddfe00] text-sm transition-colors"
                  >
                    {data.contact.phone}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <a 
                    href={`https://wa.me/${data.contact.whatsapp.replace(/\s/g, '')}`}
                    className="text-gray-400 hover:text-[#ddfe00] text-sm transition-colors"
                  >
                    {data.contact.whatsapp}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Large Brand Name with Shimmer Animation */}
        <div className="w-full overflow-hidden py-8 flex justify-center">
          {/* Mobile version - solid text with animation */}
          <div className="block sm:hidden">
            <span className="inline-flex text-[8vw] font-bold text-center tracking-tighter leading-none">
              {'DIGITAL ADDIS'.split('').map((char, index) => (
                <span
                  key={index}
                  className="inline-block text-[#ddfe00] animate-pulse"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animationDuration: '2s',
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </span>
          </div>
          {/* Desktop version - full animation */}
          <div className="hidden sm:block">
            <TextShimmerWave
              className="text-[8vw] lg:text-[10vw] font-bold text-center tracking-tighter leading-none [--base-color:transparent] [--base-gradient-color:#ddfe00]"
              duration={2}
              spread={2}
              zDistance={0.5}
              scaleDistance={1.05}
              rotateYDistance={10}
            >
              DIGITAL ADDIS
            </TextShimmerWave>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#333333]/50">
          <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Company Deck Download */}
              <a 
                href="#" 
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Download className="w-5 h-5" />
                <div>
                  <span className="text-white font-semibold text-sm">COMPANY DECK</span>
                  <span className="text-gray-500 text-xs block">PDF/5 MB</span>
                </div>
              </a>

              {/* Copyright */}
              <p className="text-gray-400 text-sm text-center">
                © 2022-{new Date().getFullYear()}, DigitalAddis.com - All Rights Reserved
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-[#333333] flex items-center justify-center text-gray-400 hover:text-white hover:border-[#ddfe00] transition-all"
                  >
                    <span className="sr-only">{label}</span>
                    {Icon === 'Telegram' ? (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                      </svg>
                    ) : Icon === 'TikTok' ? (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                      </svg>
                    ) : (
                      <Icon className="w-4 h-4" />
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
