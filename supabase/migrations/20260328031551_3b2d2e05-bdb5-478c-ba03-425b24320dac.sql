
CREATE TABLE public.api_logs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  model_used TEXT NOT NULL,
  cost NUMERIC(10, 4) NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.api_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can view all api_logs"
  ON public.api_logs FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "System can insert api_logs"
  ON public.api_logs FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE INDEX idx_api_logs_created_at ON public.api_logs (created_at);
CREATE INDEX idx_api_logs_user_id ON public.api_logs (user_id);
