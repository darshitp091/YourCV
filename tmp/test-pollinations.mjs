
async function testPollinations() {
    console.log("🚀 Testing Pollinations.ai (Keyless)...");
    const prompt = "Explain the importance of a professional resume summary in one sentence.";
    const url = `https://text.pollinations.ai/${encodeURIComponent(prompt)}`;

    try {
        const res = await fetch(url);
        const text = await res.text();
        console.log("Response:", text);
        if (text && text.length > 5) {
            console.log("✅ Pollinations is working and free!");
        } else {
            console.log("❌ Pollinations returned empty or short response.");
        }
    } catch (e) {
        console.error("❌ Pollinations Error:", e.message);
    }
}

testPollinations();
