'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Clock, ChevronRight } from 'lucide-react';

const blogPosts = [
    {
        id: 1,
        title: 'The Future of Web Development in 2024',
        excerpt: 'Explore the latest trends and technologies shaping the future of web development.',
        date: 'March 15, 2024',
        category: 'Development',
        readTime: '5 min read',
        image: '/blog/tech-future.jpg', // Placeholder path
    },
    {
        id: 2,
        title: 'Designing for Accessibility: A Complete Guide',
        excerpt: 'Learn how to create inclusive digital experiences that are accessible to all users.',
        date: 'March 10, 2024',
        category: 'Design',
        readTime: '7 min read',
        image: '/blog/accessibility.jpg', // Placeholder path
    },
];

export default function BlogSection() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ddfe00] opacity-[0.03] blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#3268FF] opacity-[0.03] blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Latest <span className="text-[#ddfe00]">Insights</span>
                        </h2>
                        <p className="text-lg text-gray-400">
                            Discover our latest thoughts on technology, design, and digital innovation.
                        </p>
                    </div>
                    <Link
                        href="/blog"
                        className="group flex items-center gap-2 text-white hover:text-[#ddfe00] transition-colors duration-300 pb-2 border-b border-transparent hover:border-[#ddfe00]"
                    >
                        View all articles
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative"
                        >
                            <Link href={`/blog/${post.id}`} className="block h-full">
                                <div className="relative h-full bg-[#0a0a0a] rounded-3xl border border-white/5 overflow-hidden transition-all duration-300 group-hover:border-[#ddfe00]/30 group-hover:shadow-[0_0_30px_rgba(221,254,0,0.1)]">
                                    {/* Image Placeholder Area */}
                                    <div className="aspect-[16/9] w-full bg-[#111] relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-60 z-10" />
                                        {/* Placeholder Pattern */}
                                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ddfe00_1px,transparent_1px)] [background-size:16px_16px]" />

                                        <div className="absolute top-6 left-6 z-20">
                                            <span className="inline-block px-3 py-1 text-xs font-semibold bg-[#ddfe00] text-black rounded-full">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-8 relative z-20 -mt-12">
                                        <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                                            <div className="flex items-center gap-1.5">
                                                <Calendar className="w-4 h-4 text-[#ddfe00]" />
                                                {post.date}
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <Clock className="w-4 h-4 text-[#ddfe00]" />
                                                {post.readTime}
                                            </div>
                                        </div>

                                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#ddfe00] transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-400 mb-6 line-clamp-2">
                                            {post.excerpt}
                                        </p>

                                        <div className="flex items-center text-[#ddfe00] font-medium group-hover:translate-x-2 transition-transform duration-300">
                                            Read Article <ChevronRight className="w-4 h-4 ml-1" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
