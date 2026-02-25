import { supabase } from "../supabase";
import { executeAction } from "./actions";

/**
 * Triggers a workflow event.
 * @param {string} triggerId - The ID of the trigger (e.g., 'resume_updated')
 * @param {string} userId - The ID of the user
 * @param {object} payload - Data associated with the event
 */
export async function triggerWorkflow(triggerId, userId, payload = {}) {
    console.log(`[WorkflowEngine] Triggered: ${triggerId} for user: ${userId}`);

    try {
        // 1. Fetch active workflows for this trigger
        // Note: Using flat selection for foreign table to avoid deep nesting issues if schema is simple
        const { data: workflows, error: workflowError } = await supabase
            .from('workflows')
            .select(`
                id,
                name,
                workflow_step_actions (
                    id,
                    action_id,
                    config,
                    step_order
                )
            `)
            .eq('user_id', userId)
            .eq('trigger_id', triggerId)
            .eq('is_active', true);

        if (workflowError) throw workflowError;

        if (!workflows || workflows.length === 0) {
            console.log(`[WorkflowEngine] No active workflows found for trigger: ${triggerId}`);
            return;
        }

        // 2. Process each workflow
        for (const workflow of workflows) {
            // Sort steps manually if query ordering fails on nested select
            const sortedSteps = workflow.workflow_step_actions.sort((a, b) => a.step_order - b.step_order);
            await processWorkflow({ ...workflow, workflow_step_actions: sortedSteps }, payload);
        }

    } catch (error) {
        console.error("[WorkflowEngine] Error:", error.message);
    }
}

async function processWorkflow(workflow, payload) {
    const logId = await createLog(workflow.id, payload.eventId || 'internal');

    try {
        const results = [];
        for (const step of workflow.workflow_step_actions) {
            console.log(`[WorkflowEngine] Executing action: ${step.action_id} for workflow: ${workflow.name}`);
            const result = await executeAction(step.action_id, step.config, payload);
            results.push({ action_id: step.action_id, result });
        }

        await updateLog(logId, 'completed', null, results);
    } catch (error) {
        console.error(`[WorkflowEngine] Workflow ${workflow.name} failed:`, error.message);
        await updateLog(logId, 'failed', error.message);
    }
}

async function createLog(workflowId, eventId) {
    const { data, error } = await supabase
        .from('workflow_logs')
        .insert([{
            workflow_id: workflowId,
            trigger_event_id: eventId,
            status: 'pending'
        }])
        .select()
        .single();

    if (error) {
        console.error("[WorkflowEngine] Log Creation Error:", error);
        return null;
    }
    return data?.id;
}

async function updateLog(logId, status, error = null, data = null) {
    if (!logId) return;
    await supabase
        .from('workflow_logs')
        .update({
            status,
            error_message: error,
            execution_data: data,
            completed_at: new Date().toISOString()
        })
        .eq('id', logId);
}
