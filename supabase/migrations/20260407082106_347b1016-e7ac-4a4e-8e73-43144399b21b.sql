
-- Create speaking_attempts table
CREATE TABLE public.speaking_attempts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  topic TEXT NOT NULL,
  part TEXT NOT NULL DEFAULT 'part2',
  transcript TEXT,
  audio_url TEXT,
  feedback JSONB,
  score NUMERIC,
  duration_seconds INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.speaking_attempts ENABLE ROW LEVEL SECURITY;

-- RLS policies
CREATE POLICY "Users can view own speaking attempts"
ON public.speaking_attempts FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own speaking attempts"
ON public.speaking_attempts FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own speaking attempts"
ON public.speaking_attempts FOR UPDATE
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all speaking attempts"
ON public.speaking_attempts FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Timestamp trigger
CREATE TRIGGER update_speaking_attempts_updated_at
BEFORE UPDATE ON public.speaking_attempts
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Storage bucket for audio
INSERT INTO storage.buckets (id, name, public) VALUES ('speaking-audio', 'speaking-audio', false);

-- Storage policies
CREATE POLICY "Users can upload own audio"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'speaking-audio' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can view own audio"
ON storage.objects FOR SELECT
TO authenticated
USING (bucket_id = 'speaking-audio' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can delete own audio"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'speaking-audio' AND auth.uid()::text = (storage.foldername(name))[1]);
