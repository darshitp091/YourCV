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
            // Priority 1: Use specific Native key provided by user
            // Priority 2: Use specific Banner key provided by user
            // Fallback: Use placementId or management API key (placeholder)
            let activeKey = placementId;

            if (format === 'native') {
                activeKey = '33c3df11df50e8b553bc9e8a5eff8472';
            } else if (format === 'banner' && (!placementId || placementId === '73b6b292ed780e89f620ff15c77b7ef0')) {
                activeKey = '7b3167e90d981083359435c5f8b4d524';
            }

            const mainScript = document.createElement('script');
            mainScript.type = 'text/javascript';
            mainScript.async = true;

            if (format === 'native') {
                // Adsterra Native Banner Logic - Uses invoke.js with matching container ID
                mainScript.src = `https://pl28841434.effectivegatecpm.com/${activeKey}/invoke.js`;
                mainScript.setAttribute('data-cfasync', 'false');
                container.appendChild(mainScript);
            } else {
                // Standard Banner / Sidebar
                const confScript = document.createElement('script');
                confScript.type = 'text/javascript';
                confScript.text = `
                    atOptions = {
                        'key' : '${activeKey}',
                        'format' : 'iframe',
                        'height' : ${format === 'sidebar' ? 600 : 90},
                        'width' : ${format === 'sidebar' ? 160 : 728},
                        'params' : {}
                    };
                `;
                mainScript.src = `//www.highperformanceformat.com/${activeKey}/invoke.js`;
                container.appendChild(confScript);
                container.appendChild(mainScript);
            }
        } catch (error) {
            console.error("Ad Injection Error:", error);
        }
    }, [placementId, format]);

    if (format === 'direct-link') {
        const directLinkUrl = `https://www.highperformanceformat.com/${placementId || '73b6b292ed780e89f620ff15c77b7ef0'}`;
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

    // Determine the ID for native ad containers
    const containerId = format === 'native' ? `container-33c3df11df50e8b553bc9e8a5eff8472` : undefined;

    return (
        <div
            ref={bannerRef}
            id={containerId}
            className={`ad-container flex justify-center items-center my-8 min-h-[90px] bg-secondary/10 rounded-xl overflow-hidden ${className} ${format === 'sidebar' ? 'min-h-[600px]' : ''}`}
            data-placement-id={placementId}
        >
            {!placementId && <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Sponsored Content</p>}
        </div>
    );
};
