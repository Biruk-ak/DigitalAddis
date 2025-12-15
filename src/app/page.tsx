import Hero from '@/components/sections/hero';
import Services from '@/components/sections/services';
import Projects from '@/components/sections/projects';
import Technologies from '@/components/sections/technologies';
import Team from '@/components/sections/team';
import Testimonials from '@/components/sections/testimonials';
import CTA from '@/components/sections/cta';
import Blog from '@/components/sections/blog';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <Services />
      <Projects />
      <Technologies />
      <Team />
      <Testimonials />
      <Blog />
      {/* <CTA /> */}
    </div>
  );
}
