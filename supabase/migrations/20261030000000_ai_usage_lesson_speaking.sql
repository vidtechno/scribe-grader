-- Lesson speaking transcriptions log feature 'lesson-speaking'; the check constraint rejected it, so their cost was never recorded.
alter table public.ai_usage_events drop constraint if exists ai_usage_events_feature_check;
alter table public.ai_usage_events add constraint ai_usage_events_feature_check check (feature = any (array[
  'writing','speaking','transcription','mock_writing','mock_speaking','mock_transcription',
  'teacher_generation','teacher_grading','daily_grammar','ai_mentor','lesson-speaking']));
