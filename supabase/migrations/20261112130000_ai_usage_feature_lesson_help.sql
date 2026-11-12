-- The in-lesson AI tutor logs its tokens as feature 'lesson_help'; the old check did not allow it, so the rows would have been dropped.
alter table public.ai_usage_events drop constraint ai_usage_events_feature_check;
alter table public.ai_usage_events add constraint ai_usage_events_feature_check check (feature = any (array['writing','speaking','transcription','mock_writing','mock_speaking','mock_transcription','teacher_generation','teacher_grading','daily_grammar','ai_mentor','lesson-speaking','lesson_help']));
