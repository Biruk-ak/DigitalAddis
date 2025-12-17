'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag, User } from 'lucide-react';
import { Project } from '@/lib/projects';

interface ProjectViewProps {
    project: Project;
}

export default function ProjectView({ project }: ProjectViewProps) {
    return (
        <article className="min-h-screen bg-[#0a0a0a] text-white pt-24 pb-20">
            {/* Back Button */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                <Link
                    href="/#projects"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-[#ddfe00] transition-colors duration-300 group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span>Back to Projects</span>
                </Link>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left Column: Title and Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                        {/* Categories */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.categories?.map((cat, idx) => (
                                <span
                                    key={idx}
                                    className="px-3 py-1 text-xs font-semibold tracking-wider text-[#ddfe00] border border-[#ddfe00]/20 bg-[#ddfe00]/5 rounded-full uppercase"
                                >
                                    {cat}
                                </span>
                            ))}
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold uppercase tracking-tight mb-8 leading-tight">
                            {project.title}
                        </h1>

                        <div className="prose prose-invert prose-lg max-w-none text-gray-300 mb-12">
                            <p className="text-xl leading-relaxed font-light">
                                {project.content}
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <p>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>

                        {/* Project Details Grid */}
                        <div className="grid grid-cols-2 text-sm gap-8 border-t border-gray-800 pt-8">
                            <div>
                                <h3 className="flex items-center gap-2 text-gray-500 mb-2 uppercase tracking-wider text-xs font-semibold">
                                    <User size={14} /> Client
                                </h3>
                                <p className="text-white font-medium">Global Corp</p>
                            </div>
                            <div>
                                <h3 className="flex items-center gap-2 text-gray-500 mb-2 uppercase tracking-wider text-xs font-semibold">
                                    <Calendar size={14} /> Year
                                </h3>
                                <p className="text-white font-medium">2024</p>
                            </div>
                            <div>
                                <h3 className="flex items-center gap-2 text-gray-500 mb-2 uppercase tracking-wider text-xs font-semibold">
                                    <Tag size={14} /> Services
                                </h3>
                                <p className="text-white font-medium">UI/UX, Development</p>
                            </div>
                            {project.author && (
                                <div>
                                    <h3 className="flex items-center gap-2 text-gray-500 mb-2 uppercase tracking-wider text-xs font-semibold">
                                        <User size={14} /> Team
                                    </h3>
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full overflow-hidden relative">
                                            <Image
                                                src={project.author.image}
                                                alt={project.author.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <span className="text-white font-medium">{project.author.name}</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>

                    {/* Right Column: Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl shadow-[#ddfe00]/5 border border-gray-800 group">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                priority
                                unoptimized
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60"></div>
                        </div>

                        {/* Decoration */}
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#ddfe00] rounded-full filter blur-[100px] opacity-10 pointer-events-none"></div>
                    </motion.div>
                </div>
            </div>
        </article>
    );
}
