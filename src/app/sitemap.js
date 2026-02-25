import { COMPETITORS } from "@/data/competitors";

export default function sitemap() {
    const baseUrl = 'https://yourcv.app'; // Replace with actual domain

    // Core pages
    const baseRoutes = [
        '',
        '/templates',
        '/blog',
        '/pricing',
        '/about',
        '/contact',
        '/privacy',
        '/terms',
        '/resources/ats-guide',
    ];

    const routes = baseRoutes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString().split('T')[0],
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
    }));

    // Append alternatives
    const alternativeRoutes = COMPETITORS.map((competitor) => ({
        url: `${baseUrl}/alternatives/${competitor.slug}`,
        lastModified: new Date().toISOString().split('T')[0],
        changeFrequency: 'monthly',
        priority: 0.7,
    }));

    return [...routes, ...alternativeRoutes];
}
