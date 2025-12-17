import type { Metadata } from 'next';
import Image from 'next/image';
import { Lightbulb, Award, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us - DigitalAddis Digital Agency',
  description: 'Learn about DigitalAddis, a full-service digital agency delivering innovative design, web development, and outstanding tech solutions.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <section className="relative py-20 lg:py-32 bg-white dark:bg-black overflow-hidden transition-colors duration-300">
        {/* Subtle Background Accent */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ddfe00] to-transparent opacity-20 dark:opacity-30"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ddfe00] to-transparent opacity-20 dark:opacity-30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-16 lg:mb-20">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6">
              <span className="text-gray-900 dark:text-white">About</span>{' '}
              <span className="bg-gradient-to-r from-[#ddfe00] to-[#ddfe00] bg-clip-text text-transparent">
                DigitalAddis
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              A full-service digital agency delivering innovative solutions
            </p>
          </div>

          {/* Company Story */}
          <div className="max-w-7xl mx-auto mb-16 lg:mb-32 space-y-20 lg:space-y-32">

            {/* Block 1: Image Left, Text Right */}
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#ddfe00]/20 to-[#ddfe00]/0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative h-[300px] lg:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/about/1.jpg"
                    alt="Digital Addis Technology Concept"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  Digital Addis (DA) was built with a simple idea in mind: technology should make people’s work easier, safer and more meaningful. For over a decade, we have been working closely with banks, government institutions, international organizations, NGOs, healthcare providers, telecom operators, manufacturers, real estate developers, hotels and logistics companies to help them solve real, everyday challenges using technology.
                </p>
              </div>
            </div>

            {/* Block 2: Text Left, Image Right */}
            <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
              <div className="w-full lg:w-1/2">
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  Our experience across many industries has shown us that successful digital solutions are not just about advanced systems they are about understanding people, processes and local realities. As a registered Limited Liability Company in both Ethiopia and the United States, and an officially listed Dun & Bradstreet partner, we operate with trust, transparency and a long term commitment to every organization we serve.
                </p>
              </div>
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute -inset-4 bg-gradient-to-l from-[#ddfe00]/20 to-[#ddfe00]/0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative h-[300px] lg:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/about/2.jpg"
                    alt="Partnership and Trust"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Block 3: Image Left, Text Right */}
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#ddfe00]/20 to-[#ddfe00]/0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative h-[300px] lg:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/about/3.jpg"
                    alt="Collaboration and Listening"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  At DA, we believe the best solutions come from strong relationships and open conversations. We take the time to listen, ask the right questions, and truly understand our clients goals before we start building. Our work ranges from custom software development and cybersecurity to cloud services, smart devices and infrastructure, digital consulting and skills training but at the core of everything we do is people.
                </p>
              </div>
            </div>

            {/* Block 4: Text Left, Image Right */}
            <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
              <div className="w-full lg:w-1/2">
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  We design systems that are secure, scalable and easy to use and we make sure the teams behind them feel confident and supported long after deployment. Guided by innovation, excellence, and integrity, we focus on long term partnerships rather than one time projects. Our purpose is to help organizations grow, adapt and move forward with confidence, while contributing to a stronger, more inclusive and sustainable digital future for the communities we are part of.
                </p>
              </div>
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute -inset-4 bg-gradient-to-l from-[#ddfe00]/20 to-[#ddfe00]/0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative h-[300px] lg:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/about/4.jpg"
                    alt="Future Vision"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Mission */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Our Mission
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                At Digital Addis, our mission is to deliver secure, innovative, and future ready digital
                solutions that drive real transformation. We combine global standards with local
                expertise to empower organizations of all sizes with the tools, systems and skills
                they need to thrive in the digital age.
              </p>
            </div>

            {/* Right Column - Vision */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Our Vision
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We envision becoming Ethiopia’s leading IT company and one of Africa’s most
                trusted providers of cybersecurity, smart infrastructure and digital innovation.
                Through excellence, integrity, and continuous improvement, we aim to build long
                term partnerships that help industries, governments and communities grow in a
                rapidly evolving digital world.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="mt-20 lg:mt-32">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Innovation',
                  description:
                    'We push boundaries to deliver modern, future focused solutions.',
                  Icon: Lightbulb,
                },
                {
                  title: 'Excellence',
                  description:
                    'We commit to quality, reliability and high impact results',
                  Icon: Award,
                },
                {
                  title: 'Integrity',
                  description:
                    'We operate with transparency, trust and responsibility in everything we do.',
                  Icon: Shield,
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="group relative bg-gray-50 dark:bg-zinc-900 p-8 rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#ddfe00]/20 border border-transparent dark:border-zinc-800 dark:hover:border-[#ddfe00]/50"
                  style={{
                    boxShadow: '0 0 1px rgba(0,0,0,0.1)'
                  }}
                >
                  <div className="absolute top-0 right-0 p-8 opacity-5 dark:opacity-10 group-hover:opacity-20 transition-opacity duration-300 transform scale-150 group-hover:rotate-12">
                    <value.Icon size={120} className="text-gray-900 dark:text-[#ddfe00]" />
                  </div>

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-14 h-14 bg-white dark:bg-black rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 border border-gray-100 dark:border-zinc-800">
                      <value.Icon className="w-7 h-7 text-gray-900 dark:text-[#ddfe00]" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

