"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Card } from "@/components/ui/Card";
import {
    LucideCheckCircle2,
    LucideXCircle,
    LucideClock,
    LucideActivity,
    LucideChevronRight,
    LucideZap
} from "lucide-react";
import { formatDistanceToNow } from "date-fns";

export const ActivityLog = ({ userId }) => {
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (userId) fetchLogs();
    }, [userId]);

    const fetchLogs = async () => {
        try {
            const { data, error } = await supabase
                .from('workflow_logs')
                .select(`
                    *,
                    workflows (
                        name,
                        trigger_id
                    )
                `)
                .order('started_at', { ascending: false })
                .limit(10);

            if (error) throw error;
            setLogs(data || []);
        } catch (error) {
            console.error("Fetch Logs Error:", error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div className="h-48 bg-secondary/20 animate-pulse rounded-3xl" />;

    return (
        <Card className="p-8 bg-white border-border/50">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-primary/10 rounded-xl">
                        <LucideActivity className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold font-heading">Recent Activity</h3>
                </div>
                <button className="text-xs font-bold text-primary uppercase tracking-widest hover:underline">
                    View All
                </button>
            </div>

            <div className="space-y-4">
                {logs.length === 0 ? (
                    <div className="py-12 text-center space-y-3">
                        <LucideClock className="w-8 h-8 text-muted-foreground/30 mx-auto" />
                        <p className="text-sm text-muted-foreground">No recent automations recorded</p>
                    </div>
                ) : (
                    logs.map((log) => (
                        <div
                            key={log.id}
                            className="group flex items-center justify-between p-4 rounded-2xl hover:bg-secondary/30 transition-all border border-transparent hover:border-border/50"
                        >
                            <div className="flex items-center gap-4">
                                <div className={`p-2 rounded-lg ${log.status === 'completed' ? 'bg-emerald-50 text-emerald-600' :
                                        log.status === 'failed' ? 'bg-rose-50 text-rose-600' :
                                            'bg-amber-50 text-amber-600'
                                    }`}>
                                    {log.status === 'completed' ? <LucideCheckCircle2 className="w-4 h-4" /> :
                                        log.status === 'failed' ? <LucideXCircle className="w-4 h-4" /> :
                                            <LucideZap className="w-4 h-4 animate-pulse" />}
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-foreground">
                                        {log.workflows?.name || "Deleted Workflow"}
                                    </h4>
                                    <div className="flex items-center gap-2 mt-0.5">
                                        <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-black italic">
                                            {log.status}
                                        </span>
                                        <span className="text-[10px] text-muted-foreground/40">•</span>
                                        <span className="text-[10px] text-muted-foreground font-medium">
                                            {formatDistanceToNow(new Date(log.started_at), { addSuffix: true })}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <LucideChevronRight className="w-4 h-4 text-muted-foreground/20 group-hover:text-primary transition-colors" />
                        </div>
                    ))
                )}
            </div>
        </Card>
    );
};
