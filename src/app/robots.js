export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/api/',
                    '/dashboard/',
                    '/builder/',
                    '/verify/',
                    '/reset-password/',
                ],
            },
        ],
        sitemap: 'https://yourcv.app/sitemap.xml',
    };
}
