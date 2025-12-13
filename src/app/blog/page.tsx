'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Future of Web Development in 2024',
    excerpt:
      'Explore the latest trends and technologies shaping the future of web development, from AI integration to modern frameworks.',
    date: 'March 15, 2024',
    category: 'Development',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Designing for Accessibility: A Complete Guide',
    excerpt:
      'Learn how to create inclusive digital experiences that are accessible to all users, regardless of their abilities.',
    date: 'March 10, 2024',
    category: 'Design',
    readTime: '7 min read',
  },
  {
    id: 3,
    title: 'Mobile-First Design: Why It Matters',
    excerpt:
      'Discover why mobile-first design is crucial for modern websites and how to implement it effectively in your projects.',
    date: 'March 5, 2024',
    category: 'Design',
    readTime: '6 min read',
  },
  {
    id: 4,
    title: 'SEO Best Practices for 2024',
    excerpt:
      'Stay ahead with the latest SEO strategies and techniques that will help your website rank higher in search results.',
    date: 'February 28, 2024',
    category: 'Marketing',
    readTime: '8 min read',
  },
  {
    id: 5,
    title: 'Building Scalable React Applications',
    excerpt:
      'Learn the best practices and patterns for building scalable React applications that can grow with your business.',
    date: 'February 20, 2024',
    category: 'Development',
    readTime: '10 min read',
  },
  {
    id: 6,
    title: 'The Power of User Experience Design',
    excerpt:
      'Understand how great UX design can transform your product and create meaningful connections with your users.',
    date: 'February 15, 2024',
    category: 'Design',
    readTime: '6 min read',
  },
];

export default function BlogPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const featured = blogPosts[0];
  const remainingPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <section className="relative py-20 lg:py-32 bg-white dark:bg-black overflow-hidden transition-colors duration-300">
        {/* Subtle Background Accent */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ddfe00] to-transparent opacity-20 dark:opacity-30"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ddfe00] to-transparent opacity-20 dark:opacity-30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            {/* Page Header */}
            <motion.div variants={itemVariants} className="text-center mb-16 lg:mb-20">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6 drop-shadow-[0_0_12px_rgba(221,254,0,0.28)]">
                <span className="text-gray-900 dark:text-white">Our</span>{' '}
                <span className="bg-gradient-to-r from-[#ddfe00] to-[#ddfe00] bg-clip-text text-transparent">
                  Blog
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Insights, tips, and updates from our team on web development,
                design, and digital marketing
              </p>
            </motion.div>

            {/* Featured Article */}
            {featured && (
              <motion.div
                variants={itemVariants}
                className="mb-16 lg:mb-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center rounded-3xl bg-gradient-to-br from-[#0a0f0a] via-[#0f160f] to-black p-6 sm:p-10 lg:p-14 border border-[#1f2b1f] shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-[#ddfe00]">
                    <span className="text-xs font-semibold tracking-[0.16em] uppercase">Feature Article</span>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ddfe00] inline-block" />
                      <span className="flex items-center gap-1 text-gray-300">
                        <span className="text-gray-300">{featured.readTime}</span>
                      </span>
                    </div>
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
                    {featured.title}
                  </h2>

                  <p className="text-lg text-gray-300 leading-relaxed">
                    {featured.excerpt}
                  </p>

                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-[#ddfe00]/10 text-[#ddfe00] rounded-full">
                      {featured.category}
                    </span>
                    <span className="text-sm text-gray-400">{featured.date}</span>
                  </div>

                  <Link
                    href={`/blog/${featured.id}`}
                    className="inline-flex items-center gap-2 px-5 py-3 bg-[#ddfe00] text-black font-semibold rounded-full shadow-[0_10px_30px_rgba(221,254,0,0.35)] hover:shadow-[0_12px_40px_rgba(221,254,0,0.45)] transition-all duration-300 w-fit"
                  >
                    Read More
                    <span aria-hidden>→</span>
                  </Link>
                </div>

                <div className="relative w-full">
                  <div className="absolute inset-4 rounded-[28px] bg-[#ddfe00]/20 blur-[40px]"></div>
                  <div className="relative overflow-hidden rounded-3xl border border-[#1f2b1f] shadow-2xl">
                    <div className="aspect-[16/10] bg-gradient-to-br from-[#0a0f0a] to-[#0f1610]">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-full h-full">
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(221,254,0,0.08),transparent_35%),radial-gradient(circle_at_70%_70%,rgba(221,254,0,0.12),transparent_45%)]" />
                          <div className="absolute inset-8 rounded-2xl bg-black/30 border border-[#ddfe00]/20" />
                          <div className="absolute inset-10 rounded-xl border border-[#ddfe00]/15" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-[#ddfe00] text-5xl sm:text-6xl font-black drop-shadow-[0_0_28px_rgba(221,254,0,0.5)]">
                              Top 10
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {remainingPosts.map((post) => (
                <motion.div
                  key={post.id}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group"
                >
                  <Link href={`/blog/${post.id}`}>
                    <div className="relative h-full bg-white dark:bg-gradient-to-br dark:from-gray-900/90 dark:to-black/90 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 lg:p-8 transition-all duration-300 hover:border-[#ddfe00] hover:shadow-xl hover:shadow-[#ddfe00]/10 dark:hover:shadow-[#ddfe00]/20">
                      {/* Category Badge */}
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 text-xs font-semibold bg-[#ddfe00]/10 dark:bg-[#ddfe00]/20 text-[#ddfe00] rounded-full">
                          {post.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#ddfe00] transition-colors duration-300 leading-tight">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Meta Information */}
                      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-500 pt-4 border-t border-gray-200 dark:border-gray-800">
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>

                      {/* Decorative Bottom Accent on Hover */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ddfe00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"></div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Load More Button */}
            <motion.div
              variants={itemVariants}
              className="text-center mt-12 lg:mt-16"
            >
              <button className="px-8 py-3 bg-[#ddfe00] text-black font-semibold rounded-lg hover:bg-[#ddfe00] hover:shadow-lg hover:shadow-[#ddfe00]/50 transition-all duration-300 transform hover:scale-105">
                Load More Posts
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

