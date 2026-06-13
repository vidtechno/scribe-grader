
CREATE TABLE public.mock_tests (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  status text NOT NULL DEFAULT 'in_progress',
  current_step text NOT NULL DEFAULT 'task1',
  task1_topic text,
  task2_topic text,
  speaking_p1_topic text,
  speaking_p2_topic text,
  speaking_p3_topic text,
  task1_essay text,
  task2_essay text,
  task1_word_count int,
  task2_word_count int,
  speaking_p1_audio_url text,
  speaking_p2_audio_url text,
  speaking_p3_audio_url text,
  speaking_p1_transcript text,
  speaking_p2_transcript text,
  speaking_p3_transcript text,
  task1_feedback jsonb,
  task2_feedback jsonb,
  speaking_feedback jsonb,
  task1_band numeric,
  task2_band numeric,
  speaking_band numeric,
  overall_band numeric,
  grammar_errors_count int DEFAULT 0,
  lexical_errors_count int DEFAULT 0,
  submitted_at timestamptz,
  completed_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.mock_tests TO authenticated;
GRANT ALL ON public.mock_tests TO service_role;

ALTER TABLE public.mock_tests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users view own mock tests"
ON public.mock_tests FOR SELECT TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Users insert own mock tests"
ON public.mock_tests FOR INSERT TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users update own mock tests"
ON public.mock_tests FOR UPDATE TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Users delete own mock tests"
ON public.mock_tests FOR DELETE TO authenticated
USING (auth.uid() = user_id);

CREATE TRIGGER update_mock_tests_updated_at
BEFORE UPDATE ON public.mock_tests
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE INDEX idx_mock_tests_user_created ON public.mock_tests(user_id, created_at DESC);

-- Allow authenticated users to read their own speaking-audio files
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname='storage' AND tablename='objects' AND policyname='Users read own speaking audio'
  ) THEN
    CREATE POLICY "Users read own speaking audio"
    ON storage.objects FOR SELECT TO authenticated
    USING (bucket_id = 'speaking-audio' AND (storage.foldername(name))[1] = auth.uid()::text);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname='storage' AND tablename='objects' AND policyname='Users upload own speaking audio'
  ) THEN
    CREATE POLICY "Users upload own speaking audio"
    ON storage.objects FOR INSERT TO authenticated
    WITH CHECK (bucket_id = 'speaking-audio' AND (storage.foldername(name))[1] = auth.uid()::text);
  END IF;
END $$;
