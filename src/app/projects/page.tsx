import type { Metadata } from 'next';
import Projects from '@/components/sections/projects';

export const metadata: Metadata = {
  title: 'Projects - DigitalAddis Digital Agency',
  description: 'Explore our portfolio of successful projects. From web development to mobile apps, see how we help businesses transform digitally.',
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-20">
      <Projects />
    </div>
  );
}

