import { COMPETITORS } from "@/data/competitors";
import { ROLES } from "@/data/roles";
import { BLOG_POSTS } from "@/data/blog-posts";

/**
 * Sitemap generator for YourCV.
 * This file is automatically transformed into /sitemap.xml by Next.js.
 */
export default function sitemap() {
    const baseUrl = 'https://your-cv-eta.vercel.app'; // Correct Vercel deployment URL

    // 1. Core Pages (High Priority)
    const corePages = [
        { url: '', priority: 1, changeFrequency: 'daily' },
        { url: '/templates', priority: 0.9, changeFrequency: 'weekly' },
        { url: '/blog', priority: 0.8, changeFrequency: 'daily' },
        { url: '/pricing', priority: 0.8, changeFrequency: 'monthly' },
    ];

    // 2. Resource & Informational Pages (Medium Priority)
    const resourcePages = [
        { url: '/about', priority: 0.7, changeFrequency: 'monthly' },
        { url: '/contact', priority: 0.7, changeFrequency: 'monthly' },
        { url: '/resources/ats-guide', priority: 0.8, changeFrequency: 'weekly' },
        { url: '/resources/examples', priority: 0.8, changeFrequency: 'weekly' },
        { url: '/resources/tips', priority: 0.8, changeFrequency: 'weekly' },
    ];

    // 3. Legal & Compliance (Low Priority)
    const legalPages = [
        { url: '/privacy', priority: 0.3, changeFrequency: 'monthly' },
        { url: '/terms', priority: 0.3, changeFrequency: 'monthly' },
    ];

    // 4. Dynamic Pages: Role-specific Resumes
    const roleRoutes = ROLES.map((role) => ({
        url: `/resumes/${role.slug}`,
        priority: 0.9,
        changeFrequency: 'weekly',
    }));

    // 5. Dynamic Pages: Competitor Alternatives
    const alternativeRoutes = COMPETITORS.map((competitor) => ({
        url: `/alternatives/${competitor.slug}`,
        priority: 0.7,
        changeFrequency: 'monthly',
    }));

    // 6. Dynamic Pages: Blog Posts (NEW — Critical for SEO)
    const blogRoutes = BLOG_POSTS.map((post) => ({
        url: `/blog/${post.slug}`,
        priority: 0.8,
        changeFrequency: 'weekly',
    }));

    const allRoutes = [
        ...corePages,
        ...resourcePages,
        ...legalPages,
        ...roleRoutes,
        ...alternativeRoutes,
        ...blogRoutes,
    ];

    return allRoutes.map((route) => ({
        url: `${baseUrl}${route.url}`,
        lastModified: new Date().toISOString().split('T')[0],
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }));
}

