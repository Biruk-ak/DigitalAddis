'use client';

import {
  Dribbble,
  Facebook,
  Github,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from 'lucide-react';
import Link from 'next/link';

const data = {
  facebookLink: 'https://facebook.com/digitaladdis',
  instaLink: 'https://instagram.com/digitaladdis',
  twitterLink: 'https://twitter.com/digitaladdis',
  githubLink: 'https://github.com/digitaladdis',
  dribbbleLink: 'https://dribbble.com/digitaladdis',
  services: {
    webdev: '/services',
    webdesign: '/services',
    marketing: '/services',
    googleads: '/services',
  },
  about: {
    history: '/about',
    team: '/about',
    handbook: '/about',
    careers: '/contact',
  },
  help: {
    faqs: '/contact',
    support: '/contact',
    livechat: '/contact',
  },
  contact: {
    email: 'info@digitaladdis.com',
    phone: '+251-911-234-567',
    address: 'Addis Ababa, Ethiopia',
  },
  company: {
    name: 'DigitalAddis',
    description:
      'Building beautiful and functional web experiences with modern technologies. We help startups and businesses create their digital presence.',
    logo: '/dalogo.png',
  },
};

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: data.facebookLink },
  { icon: Instagram, label: 'Instagram', href: data.instaLink },
  { icon: Twitter, label: 'Twitter', href: data.twitterLink },
  { icon: Github, label: 'GitHub', href: data.githubLink },
  { icon: Dribbble, label: 'Dribbble', href: data.dribbbleLink },
];

const aboutLinks = [
  { text: 'Company History', href: data.about.history },
  { text: 'Meet the Team', href: data.about.team },
  { text: 'Employee Handbook', href: data.about.handbook },
  { text: 'Careers', href: data.about.careers },
];

const serviceLinks = [
  { text: 'Web Development', href: data.services.webdev },
  { text: 'Web Design', href: data.services.webdesign },
  { text: 'Marketing', href: data.services.marketing },
  { text: 'Google Ads', href: data.services.googleads },
];

const helpfulLinks = [
  { text: 'FAQs', href: data.help.faqs },
  { text: 'Support', href: data.help.support },
  { text: 'Live Chat', href: data.help.livechat, hasIndicator: true },
];

const contactInfo = [
  { icon: Mail, text: data.contact.email },
  { icon: Phone, text: data.contact.phone },
  { icon: MapPin, text: data.contact.address, isAddress: true },
];

export default function Footer() {
  return (
    <footer className="bg-black dark:bg-black/80 mt-16 w-full place-self-end rounded-t-xl border-t border-gray-900">
      {/* Top Glow Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ddfe00] to-transparent opacity-30"></div>

      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="text-[#ddfe00] flex justify-center gap-2sm:justify-start">
              <img
                src={data.company.logo || '/placeholder.svg'}
                alt="logo"
                className="h-40 w-40 rounded-full"
              />
            </div>

            <p className="text-gray-400 mt-6 max-w-md text-center leading-relaxed sm:max-w-xs sm:text-left">
              {data.company.description}
            </p>

            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <Link
                    prefetch={false}
                    href={href}
                    className="text-[#ddfe00] hover:text-[#ddfe00]/80 transition"
                  >
                    <span className="sr-only">{label}</span>
                    <Icon className="size-6" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">About Us</p>
              <ul className="mt-8 space-y-4 text-sm">
                {aboutLinks.map(({ text, href }) => (
                  <li key={text}>
                    <Link
                      className="text-gray-400 hover:text-[#ddfe00] transition"
                      href={href}
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Our Services</p>
              <ul className="mt-8 space-y-4 text-sm">
                {serviceLinks.map(({ text, href }) => (
                  <li key={text}>
                    <Link
                      className="text-gray-400 hover:text-[#ddfe00] transition"
                      href={href}
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Helpful Links</p>
              <ul className="mt-8 space-y-4 text-sm">
                {helpfulLinks.map(({ text, href, hasIndicator }) => (
                  <li key={text}>
                    <Link
                      href={href}
                      className={`${
                        hasIndicator
                          ? 'group flex justify-center gap-1.5 sm:justify-start'
                          : 'text-gray-400 hover:text-[#ddfe00] transition'
                      }`}
                    >
                      <span className="text-gray-400 hover:text-[#ddfe00] transition">
                        {text}
                      </span>
                      {hasIndicator && (
                        <span className="relative flex size-2">
                          <span className="bg-[#ddfe00] absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
                          <span className="bg-[#ddfe00] relative inline-flex size-2 rounded-full" />
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Contact Us</p>
              <ul className="mt-8 space-y-4 text-sm">
                {contactInfo.map(({ icon: Icon, text, isAddress }) => (
                  <li key={text}>
                    <a
                      className="flex items-center justify-center gap-1.5 sm:justify-start"
                      href={
                        Icon === Mail
                          ? `mailto:${text}`
                          : Icon === Phone
                          ? `tel:${text}`
                          : '#'
                      }
                    >
                      <Icon className="text-[#ddfe00] size-5 shrink-0 shadow-sm" />
                      {isAddress ? (
                        <address className="text-gray-400 -mt-0.5 flex-1 not-italic transition">
                          {text}
                        </address>
                      ) : (
                        <span className="text-gray-400 flex-1 transition">
                          {text}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-gray-400">
              <span className="block sm:inline">All rights reserved.</span>
            </p>

            <p className="text-gray-400 mt-4 text-sm transition sm:order-first sm:mt-0">
              &copy; {new Date().getFullYear()} {data.company.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
