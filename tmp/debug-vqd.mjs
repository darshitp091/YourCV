
async function debugVQD() {
    console.log("Checking DuckAI Status...");
    const url = "https://duckduckgo.com/duckchat/v1/status?q=1";
    const res = await fetch(url, {
        headers: {
            "x-vqd-accept": "1",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            "Referer": "https://duckduckgo.com/"
        }
    });

    console.log("Status:", res.status);
    console.log("Headers:");
    for (const [key, value] of res.headers.entries()) {
        console.log(`  ${key}: ${value}`);
    }
}

debugVQD();
