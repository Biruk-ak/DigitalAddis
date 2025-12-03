'use client';

import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  MapPin,
  Phone,
  Download,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

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
    facebook: 'https://facebook.com/digitaladdis',
    twitter: 'https://twitter.com/digitaladdis',
    linkedin: 'https://linkedin.com/company/digitaladdis',
    instagram: 'https://instagram.com/digitaladdis',
    youtube: 'https://youtube.com/digitaladdis',
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
  { icon: 'X', label: 'Twitter', href: data.social.twitter },
  { icon: Linkedin, label: 'LinkedIn', href: data.social.linkedin },
  { icon: Instagram, label: 'Instagram', href: data.social.instagram },
  { icon: Youtube, label: 'YouTube', href: data.social.youtube },
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
              <div className="flex items-center max-w-sm">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <Mail className="w-4 h-4 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-3 bg-[#1a1a1a]/50 border border-[#333333] rounded-l-full text-white placeholder-gray-400 text-sm focus:outline-none focus:border-[#ddfe00]"
                  />
                </div>
                <button className="bg-[#ddfe00] hover:bg-[#c4e600] text-black p-3 rounded-full -ml-2 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6z" />
                  </svg>
                </button>
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

        {/* Large Brand Name */}
        <div className="w-full overflow-hidden py-8">
          <h2 
            className="text-[8vw] lg:text-[10vw] font-bold text-center tracking-tighter leading-none"
            style={{
              color: 'transparent',
              WebkitTextStroke: '2px rgba(255, 255, 255, 0.15)',
              textStroke: '2px rgba(255, 255, 255, 0.15)',
            }}
          >
            DIGITALADDIS
          </h2>
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
                    className="w-9 h-9 rounded-full border border-[#333333] flex items-center justify-center text-gray-400 hover:text-white hover:border-[#ddfe00] transition-all"
                  >
                    <span className="sr-only">{label}</span>
                    {Icon === 'X' ? (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
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
