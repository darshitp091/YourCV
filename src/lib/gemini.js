import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
const MODEL_NAME = "gemini-1.5-flash"; // Standard stable name

/**
 * Refines a professional summary or work experience description using Gemini.
 * @param {string} content - The raw content to refine.
 * @param {string} type - 'summary' or 'experience'.
 * @param {object} context - Additional context (title, skills, etc.).
 * @returns {Promise<string>} - The refined content.
 */
export async function refineResumeContent(content, type = 'summary', context = {}) {
    if (!process.env.GEMINI_API_KEY) {
        console.error("CRITICAL: GEMINI_API_KEY is missing from environment variables.");
        throw new Error("AI Configuration Error: API Key missing.");
    }

    try {
        // Explicitly using v1 to avoid version mismatches in some environments
        const model = genAI.getGenerativeModel({ model: MODEL_NAME }, { apiVersion: 'v1' });

        const prompt = `
      You are an expert ATS-certified resume writer with a focus on high-impact careers in North America and Europe.
      Your task is to refine the following ${type} to make it more professional, impactful, and ATS-optimized.

      Guidelines:
      - Use strong action verbs (e.g., Developed, Managed, Spearheaded, Optimized).
      - Quantify achievements whenever possible (e.g., "Increased sales by 20%" instead of "Helped with sales").
      - Maintain a professional, confident, yet humble tone.
      - Ensure high keyword density for relevant industries.
      - ${type === 'summary' ? 'Keep it to 3-4 powerful sentences.' : 'Ensure each bullet point is clear and ends with an achievement.'}

      Context:
      - Target Job Title: ${context.jobTitle || 'Professional'}
      - Key Skills: ${context.skills?.join(', ') || 'N/A'}

      Raw Content to Refine:
      "${content}"

      Refined ${type}:
    `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text().trim();

        if (!text) throw new Error("AI returned empty response.");
        return text;
    } catch (error) {
        console.error("Gemini API Error Detail:", {
            message: error.message,
            stack: error.stack,
            model: MODEL_NAME
        });
        throw new Error(`Gemini Error: ${error.message}`);
    }
}
/**
 * Performs a comprehensive audit of a resume's quality.
 * @param {object} resumeData - The full resume object.
 * @returns {Promise<object>} - A structured audit result.
 */
export async function auditResumeQuality(resumeData) {
    if (!process.env.GEMINI_API_KEY) {
        console.error("CRITICAL: GEMINI_API_KEY is missing for Audit.");
        return { score: 0, summary: "AI Configuration Error: API Key missing.", ats_status: "Error" };
    }

    try {
        const model = genAI.getGenerativeModel({ model: MODEL_NAME }, { apiVersion: 'v1' });

        const prompt = `
      You are an elite career coach and ATS specialized auditor.
      Analyze the following resume data and provide a structured JSON audit.
      
      Resume Data:
      ${JSON.stringify(resumeData, null, 2)}

      Response Format (JSON only):
      {
        "score": number (0-100),
        "summary": "Short 2-sentence quality overview",
        "strengths": ["list of 3 key strengths"],
        "weaknesses": ["list of 3 key weaknesses"],
        "action_plan": ["list of 5 priority improvements"],
        "ats_status": "Ready" | "Needs Improvement" | "Critical Issues"
      }
    `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text().trim();

        // Extract JSON if AI wrapped it in markdown blocks
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        return JSON.parse(jsonMatch ? jsonMatch[0] : text);
    } catch (error) {
        console.error("Audit AI Error:", error);
        return {
            score: 0,
            summary: "AI Audit failed to process.",
            ats_status: "Error"
        };
    }
}
