
async function testDeepSeek() {
    console.log("🚀 Testing DeepSeek via Pollinations (Keyless)...");
    const prompt = "Improve this resume summary: I am a coder with 5 years experience.";
    const url = `https://text.pollinations.ai/`;

    try {
        const res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                messages: [{ role: "user", content: prompt }],
                model: "deepseek", // Test if deepseek works
                cache: false
            })
        });
        const text = await res.text();
        console.log("Response:", text);
        if (text && text.length > 5) {
            console.log("✅ DeepSeek via Pollinations is working and free!");
        } else {
            console.log("❌ Pollinations returned empty or short response.");
        }
    } catch (e) {
        console.error("❌ Pollinations Error:", e.message);
    }
}

testDeepSeek();
