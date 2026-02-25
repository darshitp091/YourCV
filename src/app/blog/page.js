"use client";

import { motion } from "framer-motion";
import { BLOG_POSTS } from "@/data/blog-posts";
import Link from "next/link";
import { LucideClock, LucideUser, LucideArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function BlogPage() {
    return (
        <main className="min-h-screen">
            <Header />

            <section className="pt-32 pb-24 px-6 bg-[#FAF7F2]">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-primary font-bold uppercase tracking-widest text-xs"
                        >
                            Career Insights
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-black font-heading"
                        >
                            The <span className="text-gradient">Career Blog</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-muted-foreground text-lg"
                        >
                            Expert advice on resume building, interview strategies, and navigating the future of work.
                        </motion.p>
                    </div>

                    {/* Blog Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {BLOG_POSTS.map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="group bg-white rounded-[2rem] rounded-tr-none overflow-hidden border border-border hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
                            >
                                <Link href={`/blog/${post.slug}`}>
                                    <div className="aspect-[16/10] overflow-hidden relative">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-primary">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-8 space-y-4">
                                        <div className="flex items-center gap-4 text-xs text-muted-foreground font-medium">
                                            <div className="flex items-center gap-1">
                                                <LucideClock size={14} />
                                                {post.readTime}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <LucideUser size={14} />
                                                {post.author}
                                            </div>
                                        </div>
                                        <h2 className="text-xl font-bold font-heading group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                                            {post.title}
                                        </h2>
                                        <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                                            {post.excerpt}
                                        </p>
                                        <div className="pt-4 flex items-center gap-2 text-primary font-bold text-sm">
                                            Read Full Article
                                            <LucideArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
