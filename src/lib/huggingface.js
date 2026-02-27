
/**
 * Refines resume content using HuggingFace Inference API (Mistral-7B).
 */
export async function refineWithHuggingFace(content, type = 'summary', context = {}) {
    const apiKey = process.env.HUGGINGFACE_API_KEY;
    const model = "mistralai/Mistral-7B-Instruct-v0.3";
    const apiUrl = `https://api-inference.huggingface.co/models/${model}`;

    if (!apiKey) {
        throw new Error("HuggingFace API Key missing.");
    }

    const prompt = `<s>[INST] You are an expert ATS resume writer. 
Refine the following ${type} to be more professional, impactful, and quantify achievements where possible.
Maintain a professional tone and ensure high keyword density.
${type === 'summary' ? 'Limit to 3-4 powerful sentences.' : 'Ensure bullet points end with achievements.'}

Context:
Job Title: ${context.jobTitle || 'Professional'}
Skills: ${context.skills?.join(', ') || 'N/A'}

Raw Content:
"${content}"

Refined ${type}: [/INST]</s>`;

    try {
        const response = await fetch(apiUrl, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
                inputs: prompt,
                parameters: {
                    max_new_tokens: 500,
                    temperature: 0.7,
                    return_full_text: false
                }
            }),
        });

        const result = await response.json();

        if (result.error) {
            throw new Error(`HuggingFace Error: ${result.error}`);
        }

        let refinedText = Array.isArray(result) ? result[0].generated_text : result.generated_text;

        // Clean up any leaked prompt artifacts
        refinedText = refinedText.replace(/Refined (summary|experience):/i, '').trim();

        return refinedText;
    } catch (error) {
        console.error("HuggingFace API Error:", error);
        throw error;
    }
}

/**
 * Audits resume quality using HuggingFace Inference API.
 */
export async function auditWithHuggingFace(resumeData) {
    const apiKey = process.env.HUGGINGFACE_API_KEY;
    const model = "mistralai/Mistral-7B-Instruct-v0.3";
    const apiUrl = `https://api-inference.huggingface.co/models/${model}`;

    if (!apiKey) return { score: 0, feedback: ["API Key missing"] };

    const prompt = `<s>[INST] You are an ATS Audit Specialist. Analyze this resume and provide a quality score (0-100) and 3-4 professional feedback points.
Output ONLY a JSON object: {"score": number, "feedback": ["point1", "point2", "point3"]}

Resume Data:
${JSON.stringify(resumeData)}

Analysis (JSON ONLY): [/INST]</s>`;

    try {
        const response = await fetch(apiUrl, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
                inputs: prompt,
                parameters: { max_new_tokens: 300, temperature: 0.1 }
            }),
        });

        const result = await response.json();
        const text = Array.isArray(result) ? result[0].generated_text : result.generated_text;

        // Extract JSON from response
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        return jsonMatch ? JSON.parse(jsonMatch[0]) : { score: 75, feedback: ["Unable to parse full AI analysis"] };
    } catch (error) {
        console.error("Audit Error:", error);
        return { score: 50, feedback: ["AI Audit system temporarily offline"] };
    }
}
