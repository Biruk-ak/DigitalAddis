'use client';

import { Globe, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export default function CTA() {
  return (
    <div className="w-full bg-black">
      <section className="mx-auto max-w-7xl px-4 py-6 lg:px-8 lg:py-20 relative">
        {/* Soft Radial Glow Behind Card */}
        <div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{
            background: 'radial-gradient(circle at center, rgba(223, 255, 77, 0.2) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />

        <div
          className="relative isolate w-full overflow-hidden rounded-2xl shadow-2xl"
          style={{
            background:
              'linear-gradient(135deg, rgba(196, 232, 0, 0.15) 0%, rgba(165, 204, 0, 0.12) 50%, rgba(221, 254, 0, 0.08) 100%), linear-gradient(100.5deg, rgba(221, 254, 0, 0.12) 29.55%, rgba(196, 232, 0, 0.08) 93.8%)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(223, 255, 77, 0.1)',
          }}
        >
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="h-full w-full bg-[linear-gradient(to_right,rgba(221,254,0,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(221,254,0,0.3)_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
          </div>

          {/* Gradient Overlay for Depth */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at top right, rgba(221, 254, 0, 0.1) 0%, transparent 60%)',
            }}
          />

          <div className="relative isolate overflow-hidden px-4 py-12 sm:px-24 z-10">
            <Link
              href="/contact"
              className="inline-block w-fit rounded-xl bg-gradient-to-r from-[#ddfe00] to-[#c4e800] px-4 py-1.5 text-center text-base leading-7 font-semibold text-[#0d0d0d] uppercase lg:text-left hover:from-[#c4e800] hover:to-[#a5cc00] transition-all duration-300 cursor-pointer shadow-lg shadow-[#ddfe00]/20"
            >
              Get in touch
            </Link>
            <h2 className="mt-3 max-w-md text-4xl font-semibold text-[#0d0d0d] md:text-6xl">
              How Can You <span className="text-[#ddfe00]">Reach Us</span>?
            </h2>
            <p className="my-auto mt-3 max-w-2xl text-base text-[#d9d9d9] md:text-lg">
              If you need to get in touch, there are several ways to contact us.
            </p>

            <div className="mt-8 flex w-full flex-col justify-between gap-4 text-lg md:flex-row">
              <a
                className="flex items-center gap-2 text-[#f7f7f7] hover:text-[#ddfe00] transition-colors duration-300"
                href="mailto:info@digitaladdis.com"
              >
                <Mail className="h-7 w-7 text-[#0094ff]" />
                info@digitaladdis.com
              </a>
              <a
                className="flex items-center gap-2 text-[#f7f7f7] hover:text-[#ddfe00] transition-colors duration-300"
                href="tel:+251911234567"
              >
                <Phone className="h-7 w-7 text-[#0bbf6a]" />
                +251-911-234-567
              </a>
              <Link
                prefetch={false}
                className="flex items-center gap-2 text-[#f7f7f7] hover:text-[#ddfe00] transition-colors duration-300"
                href="/"
              >
                <Globe className="h-7 w-7 text-[#0094ff]" />
                digitaladdis.com
              </Link>
            </div>

            <ul className="mt-8 ml-4 list-disc text-sm text-[#d9d9d9] md:text-base space-y-2">
              <li>Submit your query and state your requirements.</li>
              <li>
                Receive a call back from our experts as per your query to help
                for your need.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
