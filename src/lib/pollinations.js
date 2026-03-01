
/**
 * Utility for Pollinations.ai (Keyless & Anonymous)
 * Provides stable text generation for resume refinement.
 */

/**
 * Refines resume content using Pollinations.ai.
 */
export async function refineWithAI(content, type = 'summary', context = {}) {
    try {
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

        const response = await fetch("https://text.pollinations.ai/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                messages: [{ role: "user", content: prompt }],
                model: "openai", // Uses stable GPT-based model
                cache: false
            })
        });

        if (!response.ok) {
            throw new Error(`Pollinations AI Request Failed: ${response.status}`);
        }

        const data = await response.text();
        return data.trim();
    } catch (error) {
        console.error("Pollinations AI Refine Error:", error);
        throw error;
    }
}

/**
 * Audits resume quality using Pollinations.ai.
 */
export async function auditWithAI(resumeData) {
    try {
        const prompt = `You are an ATS Audit Specialist. Analyze this resume and provide a quality score (0-100) and 3-4 professional feedback points.
Output ONLY a JSON object: {"score": number, "feedback": ["point1", "point2", "point3"]}

Resume Data:
${JSON.stringify(resumeData)}

Analysis (JSON ONLY):`;

        const response = await fetch("https://text.pollinations.ai/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                messages: [{ role: "user", content: prompt }],
                model: "openai",
                cache: false
            })
        });

        if (!response.ok) {
            throw new Error(`Pollinations AI Audit Failed: ${response.status}`);
        }

        const rawResponse = await response.text();

        // Extract JSON from response
        const jsonMatch = rawResponse.match(/\{[\s\S]*\}/);
        return jsonMatch ? JSON.parse(jsonMatch[0]) : { score: 75, feedback: ["Unable to parse full AI analysis"] };
    } catch (error) {
        console.error("Pollinations AI Audit Error:", error);
        return { score: 50, feedback: ["AI Audit system temporarily offline"] };
    }
}
