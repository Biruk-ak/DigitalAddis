'use client';

import { Linkedin, Github } from 'lucide-react';
import Link from 'next/link';

// Team member data type
type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
  description?: string;
  socialMedia?: {
    linkedin?: string;
    github?: string;
  };
};

const image =
  'https://img.freepik.com/premium-photo/png-headset-headphones-portrait-cartoon_53876-762197.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid';

const dami_data: TeamMember[] = [
  {
    id: 1,
    name: 'Chris Bruce',
    role: 'Founder & CEO',
    image:
      'https://img.freepik.com/premium-photo/png-headset-headphones-portrait-glasses_53876-855224.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
    description: 'Visionary leader with over 15 years of experience in building successful tech companies. Passionate about innovation and team growth.',
    socialMedia: {
      linkedin: '#',
      github: '#',
    },
  },
  {
    id: 2,
    name: 'Sean Carey',
    role: 'Founder & CTO',
    image:
      'https://img.freepik.com/premium-photo/png-cartoon-portrait-glasses-white-background_53876-905385.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
    description: 'Technical architect specializing in scalable systems and cutting-edge technologies. Expert in cloud infrastructure and distributed systems.',
    socialMedia: {
      linkedin: '#',
      github: '#',
    },
  },
  {
    id: 3,
    name: 'Aileen Gomes',
    role: 'Chief of Staff',
    image:
      'https://img.freepik.com/premium-psd/3d-avatar-character_975163-690.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
    description: 'Strategic operations leader ensuring seamless coordination across all departments. Expert in process optimization and team management.',
    socialMedia: {
      linkedin: '#',
      github: '#',
    },
  },
  {
    id: 4,
    name: 'Rambo',
    role: 'Blockchain Reliability Engineer',
    image: image,
    description: 'You miss 100% of the shots you don\'t take. -Wayne Gretzky -Michael Scott. Expert in blockchain infrastructure and validator management.',
    socialMedia: {
      linkedin: '#',
      github: '#',
    },
  },
  {
    id: 5,
    name: 'Thomas Stätter',
    role: 'Backend Engineer',
    image:
      'https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833554.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
    description: 'Backend systems specialist with expertise in microservices architecture, API design, and database optimization. Passionate about performance.',
    socialMedia: {
      linkedin: '#',
      github: '#',
    },
  },
  {
    id: 6,
    name: 'Oleksii Suslov',
    role: 'Systems Engineer',
    image:
      'https://img.freepik.com/premium-photo/png-cartoon-female-adult-doll_53876-747120.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
    description: 'Infrastructure expert focused on system reliability, monitoring, and automation. Ensures our platform runs smoothly at scale.',
    socialMedia: {
      linkedin: '#',
      github: '#',
    },
  },
  {
    id: 7,
    name: 'Joe Harrison',
    role: 'Frontend Engineer',
    image:
      'https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833578.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
    description: 'UI/UX enthusiast creating beautiful and intuitive user experiences. Expert in React, TypeScript, and modern frontend frameworks.',
    socialMedia: {
      linkedin: '#',
      github: '#',
    },
  },
  {
    id: 8,
    name: 'Jason Alex',
    role: 'Site Reliability Engineer',
    image:
      'https://img.freepik.com/free-photo/3d-portrait-businessman_23-2150793883.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
    description: 'SRE specialist ensuring high availability and performance. Expert in incident response, monitoring, and infrastructure automation.',
    socialMedia: {
      linkedin: '#',
      github: '#',
    },
  },
];

export default function Team({
  teamMembers = dami_data,
  title1 = 'BLOCKJOY STARTED AS A PROJECT TO',
  title2 = ' MANAGE STAKING WITH FRIENDS AND FAMILY.',
  headline1 = 'A TEAM OF',
  headline2 = 'WEB3 EXPERTS',
  description1 = 'We built advanced tooling to optimize validator management for teams of two. But, due to the sheer difficulty of installing and running nodes, our little VaaS company grew crazy fast.',
  description2 = "We quickly realized that VaaS can't work for a network because it centralizes control. We turned our platform into a SaaS tool so that anyone could launch and run their own node with full control over where and on what infrastructure it runs. Now, network operators can run their own nodes; BlockJoy just takes the headaches away.",
}: {
  title1?: string;
  title2?: string;
  headline1?: string;
  headline2?: string;
  description1?: string;
  description2?: string;
  teamMembers?: TeamMember[];
}) {
  return (
    <section className="w-full bg-black py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-12 flex flex-col gap-12 md:flex-row">
          <div className="md:w-1/2">
            <div className="mb-4 flex items-center gap-2 text-white">
              <span className="text-[#ddfe00]">★</span>
              <span className="rounded-full bg-gray-800 px-3 py-1 text-sm text-white">
                WHO
              </span>
              <span className="rounded-full bg-gray-800 px-3 py-1 text-sm text-white">
                WE
              </span>
              <span className="rounded-full bg-gray-800 px-3 py-1 text-sm text-white">
                ARE
              </span>
            </div>
            <h2 className="mb-4 text-4xl font-bold text-white">
              {headline1} <br />
              <span className="text-[#ddfe00]">{headline2}</span>
            </h2>
            <p className="mb-4 text-gray-300">
              {title1}
              <br />
              {title2}
            </p>
          </div>
          <div className="md:w-1/2">
            <p className="mb-4 text-gray-300">{description1}</p>
            <p className="text-gray-300">{description2}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {teamMembers.slice(0, 4).map((member) => (
            <div
              key={member.id}
              className="group h-fit rounded-lg bg-gray-900 border border-gray-800 p-6 transition-all duration-300 hover:bg-gray-800 hover:border-[#ddfe00]/30 hover:shadow-lg hover:shadow-[#ddfe00]/10 relative overflow-hidden"
            >
              <div className="relative mb-4 h-48 w-full overflow-hidden rounded-lg">
                <img
                  src={member.image || '/placeholder.svg'}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mb-2 inline-block rounded-full bg-gray-800 px-4 py-1 text-sm font-medium text-white group-hover:bg-[#ddfe00] group-hover:text-black transition-all duration-300">
                {member.name}
              </div>
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300">{member.role}</p>
              
              {/* Description - Shows on hover */}
              <div className="mt-4 max-h-0 overflow-hidden transition-all duration-300 group-hover:max-h-96 group-hover:mt-4">
                <p className="text-sm text-gray-400 group-hover:text-gray-300 leading-relaxed">
                  {member.description}
                </p>
              </div>
              
              <div className="mt-2 flex space-x-2">
                {member.socialMedia?.linkedin && (
                  <Link
                    prefetch={false}
                    href={member.socialMedia.linkedin}
                    className="text-gray-400 hover:text-[#ddfe00] transition-colors"
                  >
                    <Linkedin size={18} />
                  </Link>
                )}
                {member.socialMedia?.github && (
                  <Link
                    prefetch={false}
                    href={member.socialMedia.github}
                    className="text-gray-400 hover:text-[#ddfe00] transition-colors"
                  >
                    <Github size={18} />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {teamMembers.slice(4).map((member) => (
            <div
              key={member.id}
              className="group h-fit rounded-lg bg-gray-900 border border-gray-800 p-6 transition-all duration-300 hover:bg-gray-800 hover:border-[#ddfe00]/30 hover:shadow-lg hover:shadow-[#ddfe00]/10 relative overflow-hidden"
            >
              <div className="relative mb-4 h-48 w-full overflow-hidden rounded-lg">
                <img
                  src={member.image || '/placeholder.svg'}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mb-2 inline-block rounded-full bg-gray-800 px-4 py-1 text-sm font-medium text-white group-hover:bg-[#ddfe00] group-hover:text-black transition-all duration-300">
                {member.name}
              </div>
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300">{member.role}</p>
              
              {/* Description - Shows on hover */}
              <div className="mt-4 max-h-0 overflow-hidden transition-all duration-300 group-hover:max-h-96 group-hover:mt-4">
                <p className="text-sm text-gray-400 group-hover:text-gray-300 leading-relaxed">
                  {member.description}
                </p>
              </div>
              
              <div className="mt-2 flex space-x-2">
                {member.socialMedia?.linkedin && (
                  <Link
                    prefetch={false}
                    href={member.socialMedia.linkedin}
                    className="text-gray-400 hover:text-[#ddfe00] transition-colors"
                  >
                    <Linkedin size={18} />
                  </Link>
                )}
                {member.socialMedia?.github && (
                  <Link
                    prefetch={false}
                    href={member.socialMedia.github}
                    className="text-gray-400 hover:text-[#ddfe00] transition-colors"
                  >
                    <Github size={18} />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
