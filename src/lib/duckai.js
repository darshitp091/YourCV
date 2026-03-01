
/**
 * Utility for DuckDuckGo AI Chat (Keyless & Anonymous)
 * Based on internal Duck.ai v1 API
 */

const DUCK_MODELS = {
    GPT4o: "gpt-4o-mini",
    CLAUDE: "claude-3-haiku-20240307",
    LLAMA: "meta-llama/Llama-3.3-70B-Instruct-Turbo",
    MISTRAL: "mistralai/Mistral-Small-24B-Instruct-2501"
};

/**
 * Fetches a fresh VQD (Validation Query Digest) token from DuckDuckGo.
 */
async function getVQD() {
    try {
        const response = await fetch("https://duckduckgo.com/duckchat/v1/status?q=1", {
            headers: {
                "x-vqd-accept": "1",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
            }
        });

        const vqd = response.headers.get("x-vqd-4");
        if (!vqd) throw new Error("Failed to obtain VQD token from DuckDuckGo");
        return vqd;
    } catch (error) {
        console.error("DuckAI VQD Error:", error);
        throw error;
    }
}

/**
 * Refines resume content using DuckDuckGo AI.
 */
export async function refineWithAI(content, type = 'summary', context = {}) {
    try {
        const vqd = await getVQD();

        const prompt = `You are an expert ATS resume writer. 
Refine the following ${type} to be more professional, impactful, and quantify achievements where possible.
Maintain a professional tone and ensure high keyword density.
${type === 'summary' ? 'Limit to 3-4 powerful sentences.' : 'Ensure bullet points end with achievements.'}

Context:
Job Title: ${context.jobTitle || 'Professional'}
Skills: ${context.skills?.join(', ') || 'N/A'}

Raw Content:
"${content}"

Refined ${type}:`;

        const response = await fetch("https://duckduckgo.com/duckchat/v1/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-vqd-4": vqd,
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
            },
            body: JSON.stringify({
                model: DUCK_MODELS.GPT4o,
                messages: [{ role: "user", content: prompt }]
            })
        });

        if (!response.ok) {
            const errBody = await response.text();
            throw new Error(`DuckAI Request Failed: ${response.status} - ${errBody}`);
        }

        const data = await response.text();

        // DuckChat uses SSE (Server-Sent Events) but we can parse the chunks
        const lines = data.split('\n');
        let refinedText = "";

        for (const line of lines) {
            if (line.startsWith('data: ')) {
                const chunk = line.slice(6);
                if (chunk === '[DONE]') break;
                try {
                    const parsed = JSON.parse(chunk);
                    if (parsed.message) refinedText += parsed.message;
                } catch (e) {
                    // Ignore non-json chunks
                }
            }
        }

        return refinedText.trim();
    } catch (error) {
        console.error("DuckAI Refine Error:", error);
        throw error;
    }
}

/**
 * Audits resume quality using DuckDuckGo AI.
 */
export async function auditWithAI(resumeData) {
    try {
        const vqd = await getVQD();

        const prompt = `You are an ATS Audit Specialist. Analyze this resume and provide a quality score (0-100) and 3-4 professional feedback points.
Output ONLY a JSON object: {"score": number, "feedback": ["point1", "point2", "point3"]}

Resume Data:
${JSON.stringify(resumeData)}

Analysis (JSON ONLY):`;

        const response = await fetch("https://duckduckgo.com/duckchat/v1/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-vqd-4": vqd,
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
            },
            body: JSON.stringify({
                model: DUCK_MODELS.GPT4o,
                messages: [{ role: "user", content: prompt }]
            })
        });

        const data = await response.text();
        const lines = data.split('\n');
        let rawResponse = "";

        for (const line of lines) {
            if (line.startsWith('data: ')) {
                const chunk = line.slice(6);
                if (chunk === '[DONE]') break;
                try {
                    const parsed = JSON.parse(chunk);
                    if (parsed.message) rawResponse += parsed.message;
                } catch (e) { }
            }
        }

        // Extract JSON from response
        const jsonMatch = rawResponse.match(/\{[\s\S]*\}/);
        return jsonMatch ? JSON.parse(jsonMatch[0]) : { score: 75, feedback: ["Unable to parse full AI analysis"] };
    } catch (error) {
        console.error("DuckAI Audit Error:", error);
        return { score: 50, feedback: ["AI Audit system temporarily offline"] };
    }
}
