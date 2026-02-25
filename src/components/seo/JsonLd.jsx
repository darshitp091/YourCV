"use client";

import { usePathname } from 'next/navigation';

export const JsonLd = () => {
    const pathname = usePathname();
    const baseUrl = 'https://your-cv-eta.vercel.app';

    // 1. Core SoftwareApplication Schema
    const softwareSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "YourCV",
        "url": baseUrl,
        "operatingSystem": "Web",
        "applicationCategory": "BusinessApplication",
        "offers": {
            "@type": "Offer",
            "price": "0.00",
            "priceCurrency": "INR"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "ratingCount": "1240"
        },
        "description": "Smart AI-Powered Resume Builder & ATS Optimizer. Build professional, niche-specific resumes in minutes.",
        "author": {
            "@type": "Organization",
            "name": "YourCV AI",
            "url": baseUrl
        }
    };

    // 2. Organization Schema
    const orgSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "YourCV AI",
        "url": baseUrl,
        "logo": `${baseUrl}/logo.png`,
        "sameAs": [
            "https://twitter.com/yourcv_ai",
            "https://linkedin.com/company/yourcv-ai"
        ]
    };

    // 3. BreadcrumbList Schema
    const pathSegments = pathname.split('/').filter(Boolean);
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": baseUrl
            },
            ...pathSegments.map((segment, index) => ({
                "@type": "ListItem",
                "position": index + 2,
                "name": segment.charAt(0).toUpperCase() + segment.slice(1).replace('-', ' '),
                "item": `${baseUrl}/${pathSegments.slice(0, index + 1).join('/')}`
            }))
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
        </>
    );
};
