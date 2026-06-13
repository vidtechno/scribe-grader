
# Mock Test Simulator

A complete IELTS mock test (Writing Task 1 + Task 2 + Speaking Parts 1/2/3) with deferred AI grading and a history dashboard.

## 1. Database (single migration)

New tables in `public`:

**`mock_tests`** — one row per test session
- `id` uuid pk
- `user_id` uuid → auth.users
- `status` text: `in_progress` | `submitted` | `grading` | `completed` | `failed`
- `current_step` text: `task1` | `task2` | `speaking_p1` | `speaking_p2` | `speaking_p3` | `done`
- `task1_topic`, `task2_topic`, `speaking_p1_topic`, `speaking_p2_topic`, `speaking_p3_topic` text
- `task1_essay`, `task2_essay` text
- `speaking_p1_audio_url`, `speaking_p2_audio_url`, `speaking_p3_audio_url` text
- `task1_feedback`, `task2_feedback`, `speaking_feedback` jsonb
- `task1_band`, `task2_band`, `speaking_band`, `overall_band` numeric
- `grammar_errors_count`, `lexical_errors_count` int
- `submitted_at`, `completed_at` timestamptz
- `created_at`, `updated_at` timestamptz

RLS: users manage own rows; service_role full. Grants for `authenticated` + `service_role`.

Trigger to update `updated_at`.

Reuse existing `speaking-audio` storage bucket; add policies for `mock-tests/{user_id}/...` paths if missing.

## 2. Edge Function: `process-mock-test`

- Input: `{ mockTestId }`
- Auth: verify caller owns the test (or service role)
- Fetches the row, calls existing `grade-essay` logic inline for task1/task2 and `grade-speaking` for each speaking part, writes feedback + bands back, sets `status = completed`
- Charges 1 credit total per mock test (deduct on submit, not per task)
- On error → `status = failed`

Called fire-and-forget from the client right after submission (`supabase.functions.invoke('process-mock-test', { body: { mockTestId } })` without awaiting). User is redirected to the Thank You screen immediately.

## 3. Frontend

New routes:
- `/mock-test` — Dashboard (list + start button + band trend chart)
- `/mock-test/exam/:id` — multi-step exam flow
- `/mock-test/result/:id` — detailed results (similar to existing Result page, with all three sections)

New components:
- `MockTestDashboard.tsx` (page) — Past tests table, status badges, click → result, "Start New Mock Test" CTA
- `MockTestExam.tsx` — controls stepper: Task 1 (20m) → Task 2 (40m) → Speaking P1/P2/P3 (audio). After each step, `UPDATE mock_tests` with that step's data. Save-as-you-go: no risk of losing progress.
- `MockTestThankYou.tsx` — submitted state, polls status every 10s, redirects to result when `completed`
- `MockTestResult.tsx` — overall band, per-skill bands, grammar/lexical counts, full feedback per task, comments section
- `MockTestHistoryCard.tsx` — reusable list-item component matching the styling of Recent Essays / Recent Speaking
- `BandTrendChart.tsx` — recharts line chart of overall band over time

Dashboard integration:
- Add "Recent Mock Tests" section to `/dashboard` using `MockTestHistoryCard`
- Add Mock Test entry to `BottomNav` and `Navbar`

State management:
- Local React state for in-progress task input
- Persist to DB after each step completes (or on timer end)
- On page reload mid-test, resume from `current_step`

## 4. Out of scope (this iteration)

- Listening + Reading sections
- Real-time progress UI in Thank You beyond polling
- Per-question audio playback in results (only full part audio)

## Files

**New**
- `supabase/migrations/<ts>_mock_tests.sql`
- `supabase/functions/process-mock-test/index.ts`
- `src/pages/MockTestDashboard.tsx`
- `src/pages/MockTestExam.tsx`
- `src/pages/MockTestThankYou.tsx`
- `src/pages/MockTestResult.tsx`
- `src/components/MockTestHistoryCard.tsx`
- `src/components/BandTrendChart.tsx`

**Edited**
- `src/App.tsx` — routes
- `src/components/BottomNav.tsx` + `Navbar.tsx` — nav entry
- `src/pages/Dashboard.tsx` — Recent Mock Tests section
