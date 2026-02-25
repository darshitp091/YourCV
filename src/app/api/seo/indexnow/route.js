import { NextResponse } from 'next/server';

/**
 * API route to trigger IndexNow ping to search engines.
 * This can be called after publishing a new blog post or significant update.
 */
export async function POST(req) {
    try {
        const { urlList } = await req.json();

        if (!urlList || !Array.isArray(urlList)) {
            return NextResponse.json({ error: "Invalid URL list" }, { status: 400 });
        }

        const host = 'your-cv-eta.vercel.app';
        const key = 'yourcv_indexnow_key_2026'; // Should match the key file served at root
        const keyLocation = `https://${host}/${key}.txt`;

        // Bing IndexNow API endpoint
        const indexNowEndpoint = 'https://www.bing.com/indexnow';

        const response = await fetch(indexNowEndpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                host,
                key,
                keyLocation,
                urlList
            })
        });

        if (response.ok) {
            return NextResponse.json({ message: "IndexNow notification sent successfully" });
        } else {
            const error = await response.text();
            throw new Error(`IndexNow Error: ${error}`);
        }
    } catch (error) {
        console.error("IndexNow Ping Failure:", error);
        return NextResponse.json({ error: "Failed to send IndexNow notification" }, { status: 500 });
    }
}
