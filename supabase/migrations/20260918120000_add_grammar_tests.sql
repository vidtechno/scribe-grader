-- Daily grammar tests are generated once per user per UTC day.
CREATE TABLE IF NOT EXISTS public.grammar_tests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  test_date date NOT NULL DEFAULT (now() AT TIME ZONE 'UTC')::date,
  source_essay_ids uuid[] NOT NULL DEFAULT '{}',
  source_summary text NOT NULL DEFAULT '',
  difficulty text NOT NULL DEFAULT 'intermediate' CHECK (difficulty IN ('elementary','intermediate','upper-intermediate','advanced')),
  questions jsonb NOT NULL DEFAULT '[]'::jsonb,
  answers jsonb NOT NULL DEFAULT '{}'::jsonb,
  score integer,
  completed_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, test_date)
);

ALTER TABLE public.grammar_tests ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users view own grammar tests" ON public.grammar_tests;
CREATE POLICY "Users view own grammar tests" ON public.grammar_tests FOR SELECT TO authenticated USING (auth.uid() = user_id);
DROP POLICY IF EXISTS "Users update own grammar tests" ON public.grammar_tests;
CREATE POLICY "Users update own grammar tests" ON public.grammar_tests FOR UPDATE TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
GRANT SELECT, UPDATE ON public.grammar_tests TO authenticated;
GRANT ALL ON public.grammar_tests TO service_role;
CREATE INDEX IF NOT EXISTS grammar_tests_user_date_idx ON public.grammar_tests(user_id, test_date DESC);
