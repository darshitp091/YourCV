
import { refineWithAI } from '../src/lib/duckai.js';

async function test() {
    console.log("🚀 Testing DuckDuckGo AI (Keyless)...");

    const sampleContent = "I am a software engineer with 5 years of experience in React and Node.js. I have worked on many projects and I am good at coding.";
    const context = {
        jobTitle: "Senior Software Engineer",
        skills: ["React", "Node.js", "System Design", "Cloud Computing"]
    };

    try {
        console.log("📝 Original Content:", sampleContent);
        console.log("📡 Sending to Duck.ai...");

        const refined = await refineWithAI(sampleContent, 'summary', context);

        console.log("\n✅ Refinement Successful!");
        console.log("✨ Refined Content:\n", refined);

        if (refined && refined.length > content.length) {
            console.log("\n📊 Analysis: Success. AI expanded and professionalized the content.");
        } else {
            console.log("\n⚠️ Analysis: AI response received but might be short.");
        }
    } catch (error) {
        console.error("\n❌ Test Failed:", error.message);
    }
}

test();
