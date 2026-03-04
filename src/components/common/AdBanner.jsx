"use client";

import React, { useEffect, useRef } from 'react';

/**
 * AdBanner Component
 * Injects Adsterra ad snippets into the DOM.
 * @param {string} placementId - The Adsterra placement ID (e.g., from your dashboard)
 * @param {string} format - The format (e.g., 'banner', 'native', 'social-bar')
 */
export const AdBanner = ({ placementId, format = 'banner', className = "", children }) => {
    const bannerRef = useRef(null);

    useEffect(() => {
        if (!placementId || format === 'direct-link') return;

        const container = bannerRef.current;
        if (!container || container.firstChild) return;

        try {
            const confScript = document.createElement('script');
            confScript.type = 'text/javascript';

            if (format === 'native') {
                // Adsterra Native Banner Logic
                confScript.text = `
                    (function(s,o,i,l,n,g,h){
                        g=o.createElement(i),h=o.getElementsByTagName(i)[0];
                        g.async=1;g.src=s;h.parentNode.insertBefore(g,h)
                    })('//pl25927364.highperformanceformat.com/73/b6/b2/73b6b292ed780e89f620ff15c77b7ef0.js',document,'script');
                `;
            } else {
                // Standard Banner / Sidebar
                confScript.text = `
                    atOptions = {
                        'key' : '${placementId}',
                        'format' : 'iframe',
                        'height' : ${format === 'sidebar' ? 600 : 90},
                        'width' : ${format === 'sidebar' ? 160 : 728},
                        'params' : {}
                    };
                `;
                const mainScript = document.createElement('script');
                mainScript.type = 'text/javascript';
                mainScript.src = `//www.highperformanceformat.com/${placementId}/invoke.js`;
                container.appendChild(mainScript);
            }
            container.appendChild(confScript);
        } catch (error) {
            console.error("Ad Injection Error:", error);
        }
    }, [placementId, format]);

    if (format === 'direct-link') {
        const directLinkUrl = `https://www.highperformanceformat.com/${placementId}`;
        return (
            <a
                href={directLinkUrl}
                target="_blank"
                rel="sponsored noopener noreferrer"
                className={`inline-block w-full ${className}`}
            >
                {children || (
                    <div className="bg-primary/5 p-4 rounded-2xl border border-primary/20 text-center text-xs font-bold text-primary hover:bg-primary/10 transition-colors">
                        ⭐ SPONSORED CONTENT: Support the Community
                    </div>
                )}
            </a>
        );
    }

    return (
        <div
            ref={bannerRef}
            className={`ad-container flex justify-center items-center my-8 min-h-[90px] bg-secondary/10 rounded-xl overflow-hidden ${className} ${format === 'sidebar' ? 'min-h-[600px]' : ''}`}
            data-placement-id={placementId}
        >
            {!placementId && <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Sponsored Content</p>}
        </div>
    );
};
