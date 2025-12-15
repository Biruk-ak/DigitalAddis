'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, Clock, Eye, Share2, MessageCircle, Twitter, Linkedin, Facebook } from 'lucide-react';
import { useState, useEffect } from 'react';

// Mock data for the specific post (in a real app, this would come from a CMS or API)
const post = {
    id: 1,
    title: 'Top 10 UI/UX Mistakes That Kill Signup Rates (and How to Fix Them)',
    subtitle: 'Discover the common pitfalls in user interface design that are costing you conversions and learn actionable strategies to optimize your signup flow.',
    date: '15 Dec 2025',
    readTime: '8 min read',
    views: '1.2k',
    category: 'Design',
    author: {
        name: 'Biruk A.',
        role: 'Lead Designer',
        avatar: '/team/biruk.jpg' // Placeholder
    },
    content: [
        {
            type: 'heading',
            text: '1. Too Many Questions',
            id: 'too-many-questions'
        },
        {
            type: 'paragraph',
            text: 'One of the most common mistakes in signup forms is asking for too much information upfront. Every additional field increases friction and the likelihood of users dropping off. Only ask for what is absolutely essential to get the user started. You can always collect more profile information later.'
        },
        {
            type: 'image',
            src: '/blog/comparison.png',
            alt: 'Comparison of simple vs complex signup forms'
        },
        {
            type: 'heading',
            text: '2. Bad Mobile Responsive UI',
            id: 'bad-mobile-ui'
        },
        {
            type: 'paragraph',
            text: 'With over 50% of web traffic coming from mobile devices, a non-responsive signup page is a conversion killer. Ensure your input fields are easily tappable, fonts are legible without zooming, and the layout adapts seamlessly to smaller screens.'
        },
        {
            type: 'heading',
            text: '3. Unclear Value Proposition',
            id: 'unclear-message'
        },
        {
            type: 'paragraph',
            text: 'Users need to know *why* they should sign up. If your value proposition isn\'t clear and compelling right next to the signup form, they might hesitate. Remind them of the benefits they\'ll unlock immediately after registering.'
        },
        {
            type: 'heading',
            text: '4. Ignoring Loading States',
            id: 'ignoring-loading'
        },
        {
            type: 'paragraph',
            text: 'When a user clicks "Sign Up", they expect immediate feedback. If your app processes the request without showing a spinner or loading state, users might click multiple times or refresh the page, leading to errors and frustration.'
        }
    ],
    tableOfContents: [
        { id: 'too-many-questions', title: '1. Too Many Questions' },
        { id: 'bad-mobile-ui', title: '2. Bad Mobile Responsive UI' },
        { id: 'unclear-message', title: '3. Unclear Message' },
        { id: 'ignoring-loading', title: '4. Ignoring Loading States' },
    ]
};

export default function BlogPostPage({ params }: { params: { id: string } }) {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [activeSection, setActiveSection] = useState<string>('');

    return (
        <div className="min-h-screen bg-white dark:bg-[#050505] text-gray-900 dark:text-gray-100 selection:bg-[#ddfe00] selection:text-black">
            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-[#ddfe00] origin-left z-50"
                style={{ scaleX }}
            />

            {/* Hero Section */}
            <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden bg-[#0a0f0a]">
                {/* Background Patterns */}
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_14px]"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full border border-[#ddfe00]/30 bg-[#ddfe00]/10 text-[#ddfe00] text-sm font-semibold tracking-wide uppercase mb-6">
                            {post.category}
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 text-white leading-tight">
                            Top 10 UI/UX Mistakes That <br className="hidden md:block" />
                            Kill Signup Rates <span className="text-[#ddfe00] font-serif italic">(and How to Fix Them)</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            {post.subtitle}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400"
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gray-700 overflow-hidden relative">
                                {/* Placeholder avatar */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-gray-600 to-gray-500"></div>
                            </div>
                            <span className="text-gray-300 font-medium">By {post.author.name}</span>
                        </div>
                        <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                        <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>{post.date}</span>
                        </div>
                        <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                        <div className="flex items-center gap-2">
                            <Clock size={16} />
                            <span>{post.readTime}</span>
                        </div>
                        <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                        <div className="flex items-center gap-2">
                            <Eye size={16} />
                            <span>{post.views} Views</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Main Content Layout */}
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Left Sidebar: Table of Contents */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-32 space-y-8">
                            <div className="p-6 rounded-2xl bg-[#0f110f] border border-white/5">
                                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                    Table of Contents
                                </h3>
                                <nav className="space-y-1">
                                    {post.tableOfContents.map((item) => (
                                        <a
                                            key={item.id}
                                            href={`#${item.id}`}
                                            className={`block py-2 px-3 rounded-lg text-sm transition-all duration-200 ${activeSection === item.id
                                                ? 'bg-[#ddfe00]/10 text-[#ddfe00] font-medium translate-x-1'
                                                : 'text-gray-400 hover:text-white hover:bg-white/5'
                                                }`}
                                            onClick={() => setActiveSection(item.id)}
                                        >
                                            {item.title}
                                        </a>
                                    ))}
                                </nav>
                            </div>

                            {/* Share Widget */}
                            <div className="p-6 rounded-2xl bg-[#0f110f] border border-white/5">
                                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                                    Share this article
                                </h3>
                                <div className="flex gap-2">
                                    <button className="p-2 rounded-full bg-white/5 hover:bg-[#1DA1F2]/20 hover:text-[#1DA1F2] transition-colors">
                                        <Twitter size={18} />
                                    </button>
                                    <button className="p-2 rounded-full bg-white/5 hover:bg-[#0A66C2]/20 hover:text-[#0A66C2] transition-colors">
                                        <Linkedin size={18} />
                                    </button>
                                    <button className="p-2 rounded-full bg-white/5 hover:bg-[#1877F2]/20 hover:text-[#1877F2] transition-colors">
                                        <Facebook size={18} />
                                    </button>
                                    <button className="p-2 rounded-full bg-white/5 hover:bg-[#ddfe00]/20 hover:text-[#ddfe00] transition-colors">
                                        <Share2 size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Center: Main Content */}
                    <main className="lg:col-span-6">
                        {/* Main Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7 }}
                            className="relative rounded-3xl overflow-hidden mb-12 aspect-video shadow-2xl border border-white/10 group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 transition-opacity duration-300"></div>

                            <Image
                                src="/blog/hero.png"
                                alt="UI/UX Design Future"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                priority
                            />
                        </motion.div>

                        <article className="max-w-none">
                            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed font-light">
                                Creating a seamless signup experience is crucial for any digital product. It is the gateway to your application, and if it is closed or hard to open, no one will see specifically what you have built inside.
                            </p>

                            {post.content.map((block, index) => {
                                if (block.type === 'heading') {
                                    return (
                                        <h2 key={index} id={block.id} className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6 scroll-mt-32 flex items-center gap-2 group">
                                            <span className="text-[#ddfe00] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 mr-2 hidden lg:inline-block">#</span>
                                            {block.text}
                                        </h2>
                                    );
                                }
                                if (block.type === 'paragraph') {
                                    return <p key={index} className="mb-6 text-gray-300 text-lg leading-8">{block.text}</p>;
                                }
                                if (block.type === 'image') {
                                    return (
                                        <div key={index} className="my-8 rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group">
                                            <div className="aspect-video bg-gray-900 relative flex items-center justify-center overflow-hidden">
                                                <Image
                                                    src={block.src || ''}
                                                    alt={block.alt || 'Blog Image'}
                                                    fill
                                                    className="object-cover"
                                                />
                                                <div className="absolute inset-0 bg-[#ddfe00]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0"></div>
                                            </div>
                                        </div>
                                    );
                                }
                                return null;
                            })}

                            <div className="my-12 p-8 rounded-2xl bg-gradient-to-br from-[#ddfe00]/5 to-transparent border border-[#ddfe00]/20 relative overflow-hidden group hover:border-[#ddfe00]/40 transition-colors">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[#ddfe00]/5 blur-3xl rounded-full -mr-32 -mt-32 pointer-events-none group-hover:bg-[#ddfe00]/10 transition-colors duration-500"></div>
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold text-[#ddfe00] mb-3 flex items-center gap-2">
                                        <span className="w-1.5 h-6 rounded-full bg-[#ddfe00] inline-block"></span>
                                        Pro Tip
                                    </h3>
                                    <p className="text-gray-300 m-0 text-lg leading-relaxed">
                                        Always use A/B testing to validate your signup flow changes. What works for one audience might not work for another.
                                    </p>
                                </div>
                            </div>
                        </article>

                        <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center">
                            <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                                <ArrowLeft size={20} />
                                <span>Back to Blog</span>
                            </Link>
                        </div>
                    </main>

                    {/* Right Sidebar: CTA */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-32 space-y-8">
                            {/* CTA Card */}
                            <div className="p-8 rounded-3xl bg-[#0a0f0a] border border-[#ddfe00]/30 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#ddfe0020,transparent_60%)] group-hover:opacity-70 transition-opacity"></div>

                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-xl bg-[#ddfe00] flex items-center justify-center text-black mb-6 shadow-lg shadow-[#ddfe00]/20">
                                        <MessageCircle size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">
                                        Have a project idea?
                                    </h3>
                                    <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                                        Let&apos;s collaborate and build something extraordinary together.
                                    </p>
                                    <button className="w-full py-3 px-6 rounded-xl bg-[#ddfe00] text-black font-bold hover:shadow-lg hover:shadow-[#ddfe00]/25 transition-all duration-300 transform hover:-translate-y-1">
                                        Let&apos;s Talk
                                    </button>
                                </div>
                            </div>

                            {/* Newsletter */}
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                                <h3 className="text-lg font-bold text-white mb-2">Weekly Digest</h3>
                                <p className="text-sm text-gray-400 mb-4">Get the latest design trends directly in your inbox.</p>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ddfe00] mb-3 transition-colors"
                                />
                                <button className="w-full py-2.5 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition-colors text-sm">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
