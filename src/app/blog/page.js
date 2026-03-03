import { BLOG_POSTS } from "@/data/blog-posts";
import Link from "next/link";
import { LucideClock, LucideUser, LucideArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
    title: "Career Blog — Resume Tips, ATS Guides & Job Search Strategies",
    description: "Expert advice on resume building, ATS optimization, interview strategies, and navigating the job market in 2026. Free career insights from YourCV.",
    keywords: [
        "resume tips", "ATS guide", "resume writing tips", "how to write a resume",
        "interview tips", "career advice", "resume examples", "job search strategies",
        "resume format", "ATS resume tips", "resume keywords", "career blog"
    ],
    alternates: {
        canonical: '/blog',
    },
};

export default function BlogPage() {
    return (
        <main className="min-h-screen">
            <Header />

            <section className="pt-32 pb-24 px-6 bg-[#FAF7F2]">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                        <span className="text-primary font-bold uppercase tracking-widest text-xs">
                            Career Insights
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black font-heading">
                            The <span className="text-gradient">Career Blog</span>
                        </h1>
                        <p className="text-muted-foreground text-lg">
                            Expert advice on resume building, interview strategies, and navigating the future of work.
                        </p>
                    </div>

                    {/* Blog Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {BLOG_POSTS.map((post, index) => (
                            <article
                                key={post.id}
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
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
