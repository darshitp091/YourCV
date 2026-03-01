
async function testApiFreeLLM() {
    console.log("🚀 Testing ApiFreeLLM (Keyless)...");
    const prompt = "Improve this resume summary: I am a coder with 5 years experience.";
    const url = "https://apifreellm.com/api/v1/chat";

    try {
        const res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                message: prompt
            })
        });
        const data = await res.json();
        console.log("Response:", data);
        if (data && data.response) {
            console.log("✅ ApiFreeLLM is working and keyless!");
        } else {
            console.log("❌ ApiFreeLLM failed or returned unexpected format.");
        }
    } catch (e) {
        console.error("❌ ApiFreeLLM Error:", e.message);
    }
}

testApiFreeLLM();
