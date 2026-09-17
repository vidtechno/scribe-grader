-- Questions include answer keys. Only the service role may read or change rows;
-- the Edge Function returns a safe question view and grades submissions.
DROP POLICY IF EXISTS "Users view own grammar tests" ON public.grammar_tests;
DROP POLICY IF EXISTS "Users update own grammar tests" ON public.grammar_tests;
REVOKE ALL ON public.grammar_tests FROM PUBLIC, anon, authenticated;
GRANT ALL ON public.grammar_tests TO service_role;

ALTER TABLE public.grammar_tests
  ADD COLUMN IF NOT EXISTS source_essays jsonb NOT NULL DEFAULT '[]'::jsonb;

CREATE INDEX IF NOT EXISTS grammar_tests_user_completed_idx
  ON public.grammar_tests (user_id, completed_at DESC)
  WHERE completed_at IS NOT NULL;
