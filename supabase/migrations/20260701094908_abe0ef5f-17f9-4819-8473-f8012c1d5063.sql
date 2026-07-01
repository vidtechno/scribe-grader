
-- Status lifecycle for essays
ALTER TABLE public.essays
  ADD COLUMN IF NOT EXISTS status text NOT NULL DEFAULT 'completed',
  ADD COLUMN IF NOT EXISTS error_message text;

ALTER TABLE public.speaking_attempts
  ADD COLUMN IF NOT EXISTS status text NOT NULL DEFAULT 'completed',
  ADD COLUMN IF NOT EXISTS error_message text;

-- CHECK constraints via triggers would be overkill — keep as free-text
-- Existing rows default to 'completed' so legacy history renders normally

-- Realtime
ALTER TABLE public.essays REPLICA IDENTITY FULL;
ALTER TABLE public.speaking_attempts REPLICA IDENTITY FULL;
ALTER TABLE public.mock_tests REPLICA IDENTITY FULL;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables
    WHERE pubname = 'supabase_realtime' AND schemaname = 'public' AND tablename = 'essays'
  ) THEN
    EXECUTE 'ALTER PUBLICATION supabase_realtime ADD TABLE public.essays';
  END IF;
  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables
    WHERE pubname = 'supabase_realtime' AND schemaname = 'public' AND tablename = 'speaking_attempts'
  ) THEN
    EXECUTE 'ALTER PUBLICATION supabase_realtime ADD TABLE public.speaking_attempts';
  END IF;
  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables
    WHERE pubname = 'supabase_realtime' AND schemaname = 'public' AND tablename = 'mock_tests'
  ) THEN
    EXECUTE 'ALTER PUBLICATION supabase_realtime ADD TABLE public.mock_tests';
  END IF;
END $$;
