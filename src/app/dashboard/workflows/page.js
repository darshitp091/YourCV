"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
    LucideZap,
    LucidePlus,
    LucideSettings,
    LucideTrash2,
    LucideActivity,
    LucideCheckCircle2,
    LucideAlertCircle
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ActivityLog } from "@/components/dashboard/ActivityLog";

export default function WorkflowsPage() {
    const { user } = useAuth();
    const [workflows, setWorkflows] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [triggers, setTriggers] = useState([]);
    const [actions, setActions] = useState([]);

    useEffect(() => {
        if (user) {
            fetchWorkflows();
            fetchMetadata();
        }
    }, [user]);

    const fetchMetadata = async () => {
        const { data: t } = await supabase.from('workflow_triggers').select('*');
        const { data: a } = await supabase.from('workflow_actions').select('*');
        setTriggers(t || []);
        setActions(a || []);
    };

    const fetchWorkflows = async () => {
        try {
            const { data, error } = await supabase
                .from('workflows')
                .select(`
                    *,
                    workflow_step_actions (
                        id,
                        action_id,
                        config
                    )
                `)
                .eq('user_id', user.id);

            if (error) throw error;
            setWorkflows(data || []);
        } catch (error) {
            console.error("Fetch Workflows Error:", error);
        } finally {
            setLoading(false);
        }
    };

    const toggleWorkflow = async (id, currentStatus) => {
        try {
            const { error } = await supabase
                .from('workflows')
                .update({ is_active: !currentStatus })
                .eq('id', id);

            if (error) throw error;
            setWorkflows(workflows.map(w => w.id === id ? { ...w, is_active: !currentStatus } : w));
        } catch (error) {
            console.error("Toggle Error:", error);
        }
    };

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold font-heading">Automations</h1>
                    <p className="text-muted-foreground">Manage your event-driven resume workflows</p>
                </div>
                <Button className="rounded-full px-6">
                    <LucidePlus className="w-4 h-4 mr-2" />
                    New Workflow
                </Button>
            </div>

            {/* Active Workflows Grid */}
            {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[1, 2].map(i => (
                        <div key={i} className="h-48 bg-secondary/20 animate-pulse rounded-3xl" />
                    ))}
                </div>
            ) : workflows.length === 0 ? (
                <Card className="p-12 text-center space-y-4 border-dashed bg-secondary/5">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                        <LucideZap className="w-8 h-8" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold">No automations active</h3>
                        <p className="text-muted-foreground text-sm max-w-sm mx-auto">
                            Connect triggers like "Resume Updated" to actions like "AI Quality Audit" to automate your job search.
                        </p>
                    </div>
                    <Button variant="outline" onClick={() => setShowModal(true)}>Create your first workflow</Button>
                </Card>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {workflows.map((workflow) => (
                        <motion.div
                            key={workflow.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                        >
                            <Card className={`p-6 border-2 transition-all ${workflow.is_active ? 'border-primary/20' : 'border-transparent opacity-60'}`}>
                                <div className="flex items-start justify-between mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className={`p-2 rounded-xl ${workflow.is_active ? 'bg-primary text-white' : 'bg-secondary text-muted-foreground'}`}>
                                            <LucideZap className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold">{workflow.name}</h3>
                                            <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-black italic">
                                                Trigger: {workflow.trigger_id}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => toggleWorkflow(workflow.id, workflow.is_active)}
                                            className={`w-12 h-6 rounded-full p-1 transition-colors ${workflow.is_active ? 'bg-primary' : 'bg-secondary'}`}
                                        >
                                            <div className={`w-4 h-4 bg-white rounded-full transition-transform ${workflow.is_active ? 'translate-x-6' : 'translate-x-0'}`} />
                                        </button>
                                    </div>
                                </div>

                                <div className="space-y-3 mb-6">
                                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-tighter">Steps</p>
                                    {workflow.workflow_step_actions?.map((step, idx) => (
                                        <div key={step.id} className="flex items-center gap-3 text-sm font-medium p-3 bg-secondary/30 rounded-xl">
                                            <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[10px] font-black border border-border">
                                                {idx + 1}
                                            </span>
                                            <span className="capitalize">{step.action_id.replace('_', ' ')}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                                    <div className="flex items-center gap-4">
                                        <button className="text-muted-foreground hover:text-primary transition-colors">
                                            <LucideSettings className="w-4 h-4" />
                                        </button>
                                        <button className="text-muted-foreground hover:text-destructive transition-colors">
                                            <LucideTrash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <div className="flex items-center gap-2 text-[10px] font-bold text-emerald-600">
                                        <LucideActivity className="w-3 h-3" />
                                        SYSTEM READY
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            )}

            {/* Execution Activity Logs */}
            <div className="pt-12 border-t border-border/50">
                <ActivityLog userId={user?.id} />
            </div>

            {/* Modal for Creating Workflows */}
            <AnimatePresence>
                {showModal && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm">
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 50, scale: 0.95 }}
                            className="w-full max-w-2xl bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
                        >
                            <NewWorkflowModal
                                triggers={triggers}
                                actions={actions}
                                onClose={() => setShowModal(false)}
                                onSuccess={() => {
                                    setShowModal(false);
                                    fetchWorkflows();
                                }}
                                userId={user?.id}
                            />
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}

function NewWorkflowModal({ triggers, actions, onClose, onSuccess, userId }) {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        triggerId: "",
        actionId: "",
        config: {}
    });

    const handleCreate = async () => {
        try {
            // 1. Create Workflow
            const { data: workflow, error: wError } = await supabase
                .from('workflows')
                .insert([{
                    user_id: userId,
                    name: formData.name,
                    trigger_id: formData.triggerId,
                    is_active: true
                }])
                .select()
                .single();

            if (wError) throw wError;

            // 2. Create Step Action
            const { error: sError } = await supabase
                .from('workflow_step_actions')
                .insert([{
                    workflow_id: workflow.id,
                    action_id: formData.actionId,
                    config: formData.config,
                    step_order: 1
                }]);

            if (sError) throw sError;

            onSuccess();
        } catch (error) {
            console.error("Create Workflow Error:", error);
            alert("Failed to create workflow.");
        }
    };

    return (
        <div className="flex-1 flex flex-col p-12">
            <div className="flex items-center justify-between mb-10">
                <div>
                    <Badge variant="outline" className="mb-2 uppercase tracking-widest px-4 py-1">Step {step} of 2</Badge>
                    <h2 className="text-3xl font-black font-heading">New Automation</h2>
                </div>
                <button onClick={onClose} className="p-2 hover:bg-secondary rounded-full transition-colors">
                    <LucideTrash2 className="w-6 h-6 text-muted-foreground" />
                </button>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar space-y-8 pr-4">
                {step === 1 ? (
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Workflow Name</label>
                            <input
                                className="w-full p-4 rounded-2xl bg-secondary/50 border-none font-medium focus:ring-2 ring-primary/20 transition-all"
                                placeholder="e.g., AI Audit on Download"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div className="space-y-4">
                            <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Select Trigger</label>
                            <div className="grid grid-cols-1 gap-3">
                                {triggers.map(t => (
                                    <button
                                        key={t.id}
                                        onClick={() => setFormData({ ...formData, triggerId: t.id })}
                                        className={`flex items-center justify-between p-5 rounded-2xl border-2 transition-all ${formData.triggerId === t.id ? 'border-primary bg-primary/5 shadow-lg' : 'border-transparent bg-secondary/30'
                                            }`}
                                    >
                                        <div className="text-left">
                                            <p className="font-bold">{t.name}</p>
                                            <p className="text-xs text-muted-foreground">{t.description}</p>
                                        </div>
                                        <LucideZap className={`w-5 h-5 ${formData.triggerId === t.id ? 'text-primary' : 'text-muted-foreground/30'}`} />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Select Action</label>
                            <div className="grid grid-cols-1 gap-3">
                                {actions.map(a => (
                                    <button
                                        key={a.id}
                                        onClick={() => setFormData({ ...formData, actionId: a.id })}
                                        className={`flex items-center justify-between p-5 rounded-2xl border-2 transition-all ${formData.actionId === a.id ? 'border-primary bg-primary/5 shadow-lg' : 'border-transparent bg-secondary/30'
                                            }`}
                                    >
                                        <div className="text-left">
                                            <p className="font-bold">{a.name}</p>
                                            <p className="text-xs text-muted-foreground">{a.description}</p>
                                        </div>
                                        <LucideCheckCircle2 className={`w-5 h-5 ${formData.actionId === a.id ? 'text-primary' : 'text-muted-foreground/30'}`} />
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100 space-y-2">
                            <p className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Action Summary</p>
                            <p className="text-sm text-emerald-700 leading-relaxed">
                                When <b>{triggers.find(t => t.id === formData.triggerId)?.name}</b> happens,
                                YourCV will automatically run <b>{actions.find(a => a.id === formData.actionId)?.name}</b>.
                            </p>
                        </div>
                    </div>
                )}
            </div>

            <div className="pt-10 flex gap-4">
                {step === 2 && (
                    <Button variant="outline" className="flex-1 py-4 rounded-2xl" onClick={() => setStep(1)}>
                        Back
                    </Button>
                )}
                <Button
                    className="flex-[2] py-4 rounded-2xl"
                    disabled={step === 1 ? (!formData.name || !formData.triggerId) : !formData.actionId}
                    onClick={() => step === 1 ? setStep(2) : handleCreate()}
                >
                    {step === 1 ? "Next Step" : "Create Automation"}
                </Button>
            </div>
        </div>
    );
}

import { Badge } from "@/components/ui/Badge";
