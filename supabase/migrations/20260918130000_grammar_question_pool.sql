-- One generated pool per user/day. A single persisted random selection of ten
-- questions is used for the day's scored attempt.
ALTER TABLE public.grammar_tests
  ADD COLUMN IF NOT EXISTS selected_indices integer[] NOT NULL DEFAULT '{}',
  ADD COLUMN IF NOT EXISTS started_at timestamptz;
