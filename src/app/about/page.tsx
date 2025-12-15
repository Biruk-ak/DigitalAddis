import type { Metadata } from 'next';

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
                },
                {
                  title: 'Excellence',
                  description:
                    'We commit to quality, reliability and high impact results',
                },
                {
                  title: 'Integrity',
                  description:
                    'We operate with transparency, trust and responsibility in everything we do.',
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gradient-to-br dark:from-gray-900/90 dark:to-black/90 rounded-2xl border border-gray-200 dark:border-gray-800 p-8 transition-all duration-300 hover:border-[#ddfe00] hover:shadow-xl hover:shadow-[#ddfe00]/10 dark:hover:shadow-[#ddfe00]/20"
                >
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

