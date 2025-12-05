'use client';

import Link from 'next/link';
import Image from 'next/image';

type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
  description?: string;
  socialMedia?: {
    linkedin?: string;
    github?: string;
    linktree?: string;
  };
};

const members: TeamMember[] = [
  {
    id: 1,
    name: 'Chris Bruce',
    role: 'Founder & CEO',
    image:
      'https://img.freepik.com/premium-photo/png-headset-headphones-portrait-glasses_53876-855224.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
    socialMedia: {
      linktree: '#',
    },
  },
  {
    id: 2,
    name: 'Sean Carey',
    role: 'Founder & CTO',
    image:
      'https://img.freepik.com/premium-photo/png-cartoon-portrait-glasses-white-background_53876-905385.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
    socialMedia: {
      linktree: '#',
    },
  },
  {
    id: 3,
    name: 'Aileen Gomes',
    role: 'Chief of Staff',
    image:
      'https://img.freepik.com/premium-psd/3d-avatar-character_975163-690.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
    socialMedia: {
      linktree: '#',
    },
  },
  {
    id: 4,
    name: 'Rambo',
    role: 'Blockchain Reliability Engineer',
    image:
      'https://img.freepik.com/premium-photo/png-headset-headphones-portrait-cartoon_53876-762197.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
    socialMedia: {
      linktree: '#',
    },
  },
  {
    id: 5,
    name: 'Thomas Stätter',
    role: 'Backend Engineer',
    image:
      'https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833554.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
    socialMedia: {
      linktree: '#',
    },
  },
  {
    id: 6,
    name: 'Oleksii Suslov',
    role: 'Systems Engineer',
    image:
      'https://img.freepik.com/premium-photo/png-cartoon-female-adult-doll_53876-747120.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid',
    socialMedia: {
      linktree: '#',
    },
  },
];

export default function Team() {
  return (
    <section className="bg-[#0a0a0a] py-16 md:py-32 dark:bg-black">
      <div className="mx-auto max-w-7xl border-t border-gray-800 px-4 sm:px-6 lg:px-8">
        <span className="text-xs text-gray-400 -ml-4 sm:-ml-6 lg:-ml-8 -mt-3.5 block w-max bg-[#0a0a0a] px-4 sm:px-6 lg:px-8 dark:bg-black">
          Team
        </span>
        <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
          <div className="sm:w-2/5">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Our dream team
            </h2>
          </div>
          <div className="mt-6 sm:mt-0">
            <p className="text-gray-300">
              During the working process, we perform regular fitting with the
              client because he is the only person who can feel whether a new
              suit fits or not.
            </p>
          </div>
        </div>

        <div className="mt-12 md:mt-24">
          <div className="grid gap-x-6 gap-y-8 sm:gap-y-12 grid-cols-2 lg:grid-cols-3">
            {members.map((member, index) => (
              <div key={member.id} className="group overflow-hidden">
                <div className="relative h-48 sm:h-80 md:h-96 w-full overflow-hidden rounded-md transition-all duration-500 group-hover:h-[11rem] sm:group-hover:h-[18.5rem] md:group-hover:h-[22.5rem] group-hover:rounded-xl bg-[#1a1a1a]">
                  <Image
                    className="h-full w-full rounded-md object-cover object-top grayscale transition-all duration-500 group-hover:grayscale-0"
                    src={member.image}
                    alt={member.name}
                    width={826}
                    height={1239}
                    unoptimized
                  />
                </div>
                <div className="px-1 sm:px-2 pt-2 sm:pb-0 sm:pt-4">
                  <div className="flex justify-between items-start gap-1">
                    <h3 className="text-sm sm:text-base font-medium text-white transition-all duration-500 group-hover:tracking-wider leading-tight">
                      {member.name}
                    </h3>
                    <span className="text-[10px] sm:text-xs text-gray-400 flex-shrink-0">_0{index + 1}</span>
                  </div>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-gray-400 inline-block translate-y-6 text-xs sm:text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      {member.role}
                    </span>
                    {member.socialMedia?.linktree && (
                      <Link
                        href={member.socialMedia.linktree}
                        className="text-gray-400 inline-block translate-y-8 text-xs sm:text-sm tracking-wide opacity-0 transition-all duration-500 hover:text-[#ddfe00] hover:underline group-hover:translate-y-0 group-hover:opacity-100 dark:group-hover:text-[#ddfe00]"
                      >
                        Linktree
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
