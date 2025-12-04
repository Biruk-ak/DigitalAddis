import type { Metadata } from 'next';
import Services from '@/components/sections/services';

export const metadata: Metadata = {
  title: 'Services - DigitalAddis Digital Agency',
  description: 'Comprehensive digital solutions tailored to elevate your business. Mobile apps, web development, UI/UX design, digital marketing, and more.',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-20">
      <Services showViewMore={false} />
    </div>
  );
}

