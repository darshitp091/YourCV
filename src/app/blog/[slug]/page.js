import { BLOG_POSTS } from "@/data/blog-posts";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LucideCalendar, LucideUser, LucideClock, LucideArrowLeft, LucideShare2, LucideSparkles } from "lucide-react";
import Link from "next/link";
import { AuthorBio } from "@/components/blog/AuthorBio";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";

// SSG: Pre-render all blog pages at build time
export async function generateStaticParams() {
    return BLOG_POSTS.map((post) => ({
        slug: post.slug,
    }));
}

// Per-page SEO metadata
export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = BLOG_POSTS.find((p) => p.slug === slug);
    if (!post) return {};

    return {
        title: post.title,
        description: post.metaDescription || post.excerpt,
        keywords: post.keywords || [],
        openGraph: {
            title: post.title,
            description: post.metaDescription || post.excerpt,
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
            images: [{ url: post.image, width: 800, height: 400, alt: post.title }],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.metaDescription || post.excerpt,
            images: [post.image],
        },
        alternates: {
            canonical: `/blog/${post.slug}`,
        },
    };
}

export default async function BlogPostPage({ params }) {
    const { slug } = await params;
    const post = BLOG_POSTS.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    // Article JSON-LD Structured Data
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.metaDescription || post.excerpt,
        image: post.image,
        datePublished: post.date,
        author: {
            '@type': 'Person',
            name: post.author,
        },
        publisher: {
            '@type': 'Organization',
            name: 'YourCV',
            url: 'https://your-cv-eta.vercel.app',
        },
    };

    return (
        <main className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Header />

            <article className="pt-32 pb-24">
                {/* Hero Header */}
                <div className="px-6 mb-16">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-medium text-sm"
                        >
                            <LucideArrowLeft size={16} />
                            Back to Articles
                        </Link>

                        <div className="space-y-6 text-center">
                            <span
                                className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-black uppercase tracking-widest"
                            >
                                {post.category}
                            </span>

                            <h1
                                className="text-4xl md:text-6xl font-black font-heading leading-tight"
                            >
                                {post.title}
                            </h1>

                            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground font-medium">
                                <div className="flex items-center gap-2">
                                    <LucideUser size={16} />
                                    {post.author}
                                </div>
                                <div className="flex items-center gap-2">
                                    <LucideCalendar size={16} />
                                    {post.date}
                                </div>
                                <div className="flex items-center gap-2">
                                    <LucideClock size={16} />
                                    {post.readTime}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Featured Image */}
                <div className="px-6 mb-16">
                    <div
                        className="max-w-6xl mx-auto rounded-[3rem] overflow-hidden shadow-2xl"
                    >
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full aspect-[21/9] object-cover"
                        />
                    </div>
                </div>

                {/* Content */}
                <div className="px-6 relative">
                    <div className="max-w-3xl mx-auto">
                        <div
                            className="prose prose-lg prose-primary max-w-none text-muted-foreground leading-relaxed
                                prose-headings:font-heading prose-headings:text-foreground prose-headings:font-black
                                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                                prose-p:mb-6 prose-p:text-lg
                                prose-strong:text-foreground prose-strong:font-bold
                                prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:italic prose-blockquote:bg-primary/5 prose-blockquote:p-8 prose-blockquote:rounded-2xl
                                prose-ul:list-disc prose-ul:pl-6 prose-li:mb-2"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        {/* Author Bio Section */}
                        <AuthorBio authorName={post.author} />

                        {/* Internal Linking / CTA */}
                        <div className="mt-16 p-8 bg-primary/5 rounded-[2rem] border border-primary/10 space-y-6">
                            <div className="flex items-center gap-3 text-primary">
                                <LucideSparkles className="w-6 h-6" />
                                <h3 className="font-black font-heading text-xl">Ready to apply these tips?</h3>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                                Use our AI-powered builder to create a professional, ATS-optimized resume in minutes. Put your new career insights into action today.
                            </p>
                            <Link href="/builder">
                                <Button className="w-full md:w-auto px-8 py-6 rounded-2xl shadow-xl shadow-primary/20">
                                    Start Building for Free
                                </Button>
                            </Link>
                        </div>

                        {/* Footer / Share */}
                        <div className="mt-12 pt-10 border-t border-border flex items-center justify-end">
                            <button className="flex items-center gap-2 px-6 py-3 bg-secondary/10 hover:bg-secondary/20 transition-colors rounded-xl font-bold text-sm">
                                <LucideShare2 size={16} />
                                Share Article
                            </button>
                        </div>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
