export type Project = {
    id: number;
    title: string;
    image: string;
    content: string;
    slug: string;
    categories?: string[];
    author?: {
        name: string;
        role: string;
        image: string;
    };
};

export const projects: Project[] = [
    {
        id: 1,
        title: 'SIGNATURE FITNESS',
        slug: 'signature-fitness',
        image: '/projectimage/signaturem2.png',
        content: 'Connect, ask, and discover tribal insights through this innovative platform. Explore village stories and cultural heritage.',
        categories: ['WEBSITE-UI', 'UI/UX', 'FULL-STACK-DEVELOPMENT'],
        author: {
            name: 'DigitalAddis',
            role: 'Development Team',
            image: '/dalogs.png',
        },
    },
    {
        id: 2,
        title: 'MERCY LIFE UNIVERSTY',
        slug: 'mercy-life-university',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
        content: 'An all-in-one school management system designed to simplify educational operations. Simple, fast, and organized.',
        categories: ['WEBSITE-UI', 'UI/UX', 'FULL-STACK-DEVELOPMENT'],
        author: {
            name: 'DigitalAddis ',
            role: 'Development Team',
            image: '/dalogs.png',
        },
    },
    {
        id: 3,
        title: 'EDS',
        slug: 'eds',
        image: '/projectimage/edsd1.png',
        content: 'Upgrade yourself today. Learn what matters, learn it fast. A comprehensive learning platform for skill development.',
        categories: ['WEBSITE-UI', 'UI/UX', 'FULL-STACK-DEVELOPMENT'],
        author: {
            name: 'DigitalAddis ',
            role: 'Development Team',
            image: '/dalogs.png',
        },
    },
    {
        id: 4,
        title: 'LMS',
        slug: 'lms',
        image: '/projectimage/LMSD2.png',
        content: 'Be your own financial advisor. Smarter spending, better financial management. Take control of your finances with intelligent tools.',
        categories: ['WEBSITE-UI', 'UI/UX', 'FULL-STACK-DEVELOPMENT'],
        author: {
            name: 'DigitalAddis',
            role: 'Development Team',
            image: '/dalogs.png',
        },
    },
];
