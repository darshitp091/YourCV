
async function testHuggingFaceNoKey() {
    console.log("🚀 Testing HuggingFace (No Key)...");
    const model = "mistralai/Mistral-7B-Instruct-v0.2";
    const url = `https://api-inference.huggingface.co/models/${model}`;

    try {
        const res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                inputs: "Improve this resume summary: I am a coder with 5 years experience.",
                parameters: { max_new_tokens: 50 }
            })
        });
        const data = await res.json();
        console.log("Response:", data);
        if (Array.isArray(data) && data[0].generated_text) {
            console.log("✅ HuggingFace No-Key is working!");
        } else {
            console.log("❌ HuggingFace No-Key failed or needs auth.");
        }
    } catch (e) {
        console.error("❌ HuggingFace Error:", e.message);
    }
}

testHuggingFaceNoKey();
