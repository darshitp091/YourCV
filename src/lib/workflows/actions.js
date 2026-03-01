import { supabase } from "../supabase";

import { auditWithAI } from "../pollinations";

/**
 * Executes a specific workflow action.
 * @param {string} actionId - The ID of the action (e.g., 'ai_audit')
 * @param {object} config - Configuration for the action
 * @param {object} payload - Data passed from the trigger
 */
export async function executeAction(actionId, config, payload) {
    switch (actionId) {
        case 'ai_audit':
            return await handleAiAudit(config, payload);
        case 'notify_user':
            return await handleNotifyUser(config, payload);
        case 'sync_storage':
            return await handleSyncToStorage(config, payload);
        default:
            throw new Error(`Unknown action: ${actionId}`);
    }
}

/**
 * Action: AI Quality Audit
 * Uses resume data to generate insights.
 */
async function handleAiAudit(config, payload) {
    if (!payload.resumeData) {
        console.warn("[Actions] AI Audit skipped: No resume data provided in payload.");
        return { error: "No resume data provided." };
    }

    console.log("[Actions] Running Real AI Audit (Pollinations)...");
    const auditResult = await auditWithAI(payload.resumeData);

    // Save the audit result to a metadata table or update the resume if needed
    // For now, return it to the engine to be logged in workflow_logs
    return auditResult;
}

/**
 * Action: In-app Notification
 */
async function handleNotifyUser(config, payload) {
    const message = config.message || "A workflow action was triggered successfully.";
    console.log("[Actions] Sending notification:", message);

    // Potential integration: Insert into a 'notifications' table
    const { error } = await supabase
        .from('notifications')
        .insert([{
            user_id: payload.userId,
            message,
            type: 'workflow_action',
            metadata: { action_id: 'notify_user', payload }
        }]);

    return { status: error ? "failed" : "sent", message, error };
}

/**
 * Action: Sync to Storage
 * Uploads a base64 version of the resume/PDF to Supabase Storage.
 */
async function handleSyncToStorage(config, payload) {
    const { folder = 'backups', fileType = 'pdf' } = config;
    const { userId, resumeId, fileContent } = payload;

    if (!fileContent) {
        return { status: "skipped", reason: "No file content to upload." };
    }

    console.log(`[Actions] Syncing ${fileType} to storage for user ${userId}...`);

    const fileName = `${userId}/${resumeId}_${Date.now()}.${fileType}`;

    // Convert base64 to Blob if needed, or upload directly if it's already a buffer/blob
    const { data, error } = await supabase.storage
        .from('resumes')
        .upload(fileName, fileContent, {
            contentType: fileType === 'pdf' ? 'application/pdf' : 'application/json',
            upsert: true
        });

    if (error) {
        console.error("[Actions] Storage Upload Error:", error);
        return { status: "failed", error: error.message };
    }

    return { status: "success", path: data.path };
}
