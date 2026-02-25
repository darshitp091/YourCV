export const JsonLd = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "YourCV",
        "operatingSystem": "Web",
        "applicationCategory": "BusinessApplication",
        "offers": {
            "@type": "Offer",
            "price": "0.00",
            "priceCurrency": "USD"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "ratingCount": "1240"
        },
        "description": "Smart AI-Powered Resume Builder & ATS Optimizer. Build professional, niche-specific resumes in minutes.",
        "screenshot": "https://yourcv.app/og-image.png",
        "softwareVersion": "1.0",
        "author": {
            "@type": "Organization",
            "name": "YourCV AI"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};
