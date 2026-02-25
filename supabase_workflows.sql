-- Trigger types available
CREATE TABLE IF NOT EXISTS public.workflow_triggers (
  id TEXT PRIMARY KEY, -- e.g. 'resume_updated', 'pdf_downloaded'
  name TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Action types available
CREATE TABLE IF NOT EXISTS public.workflow_actions (
  id TEXT PRIMARY KEY, -- e.g. 'ai_audit', 'send_email', 'sync_linkedin'
  name TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- User-defined workflows
CREATE TABLE IF NOT EXISTS public.workflows (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  trigger_id TEXT REFERENCES public.workflow_triggers(id),
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Actions defined for a workflow
CREATE TABLE IF NOT EXISTS public.workflow_step_actions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  workflow_id UUID REFERENCES public.workflows(id) ON DELETE CASCADE,
  action_id TEXT REFERENCES public.workflow_actions(id),
  config JSONB DEFAULT '{}', -- action specific settings
  step_order INT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Execution logs
CREATE TABLE IF NOT EXISTS public.workflow_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  workflow_id UUID REFERENCES public.workflows(id) ON DELETE CASCADE,
  trigger_event_id TEXT, -- identifier for the event that triggered it
  status TEXT DEFAULT 'pending', -- 'pending', 'completed', 'failed'
  error_message TEXT,
  execution_data JSONB,
  started_at TIMESTAMPTZ DEFAULT NOW(),
  completed_at TIMESTAMPTZ
);

-- Insert default triggers
INSERT INTO public.workflow_triggers (id, name, description) VALUES
('resume_updated', 'Resume Updated', 'Fires when any resume data is saved'),
('pdf_downloaded', 'PDF Downloaded', 'Fires when a PDF version is generated')
ON CONFLICT DO NOTHING;

-- Insert default actions
INSERT INTO public.workflow_actions (id, name, description) VALUES
('ai_audit', 'AI Quality Audit', 'Runs an AI analysis on the resume quality'),
('notify_user', 'In-app Notification', 'Sends a dashboard notification to the user'),
('sync_storage', 'Sync to Storage', 'Automatically backs up your resume or PDF to the cloud')
ON CONFLICT DO NOTHING;

-- Enable RLS
ALTER TABLE public.workflow_triggers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.workflow_actions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.workflows ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.workflow_step_actions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.workflow_logs ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Public triggers and actions are viewable" ON public.workflow_triggers FOR SELECT USING (true);
CREATE POLICY "Public triggers and actions are viewable_actions" ON public.workflow_actions FOR SELECT USING (true);
CREATE POLICY "Users can manage their own workflows" ON public.workflows FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can manage their own workflow steps" ON public.workflow_step_actions FOR ALL USING (
  EXISTS (SELECT 1 FROM public.workflows WHERE id = workflow_step_actions.workflow_id AND user_id = auth.uid())
);
CREATE POLICY "Users can view their own workflow logs" ON public.workflow_logs FOR SELECT USING (
  EXISTS (SELECT 1 FROM public.workflows WHERE id = workflow_logs.workflow_id AND user_id = auth.uid())
);
