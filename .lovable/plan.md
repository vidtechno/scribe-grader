# IELTS Platform Upgrade — Credits, Async Queue, Drafts, Tabs

Big scope. Grouping into 4 shippable phases. Each phase is one migration + focused code changes.

## 1. Credit & Pricing System

**Rules**
- Full Mock Test: **8 credits** (currently 1)
- Individual Writing evaluation: **2 credits** (currently 1)
- Individual Speaking evaluation: **2 credits** (currently 1)
- Deduction happens **only** at the moment the user clicks "Start Evaluation" (already the case for individual flows; Mock Test already deducts at final submit — bump to 8).

**Changes**
- `MockTestExam.tsx` — deduct 8 in final submit, guard if `credits < 8`.
- `Exam.tsx` (writing) and `Speaking.tsx` — deduct 2 (not 1) at Start Evaluation, guard.
- Update copy in `PricingModal.tsx` and `AIMentor.tsx` referencing per-action cost.

## 2. Async Task Queue + Status Polling

**Database (migration)**
Add `status` columns where missing so every attempt row has a lifecycle:
- `essays.status` text: `draft | queued | processing | completed | failed` (default `completed` for legacy rows)
- `essays.error_message` text
- `speaking_attempts.status` text (same enum) + `error_message`
- `mock_tests` already has `status`; add `processing` alias handling in UI.

Enable Realtime on `essays`, `speaking_attempts`, `mock_tests` so clients get push updates instead of tight polling.

**Edge functions**
Refactor `grade-essay` and `grade-speaking` into fire-and-forget mode:
- Client inserts a row with `status = 'queued'`, then invokes function without `await`.
- Function flips row to `processing`, runs OpenAI, writes feedback + `status = 'completed'` (or `failed` + `error_message`).

**Frontend**
- History cards show spinner + "Processing…" badge when `status ∈ {queued, processing}`.
- `useEffect` subscribes to Realtime `postgres_changes` on the user's rows; unsubscribes on unmount.
- Result pages redirect to a "Waiting for evaluation" screen if opened while still processing.

## 3. Writing & Speaking pages — Practice / History / Drafts tabs

Restructure two pages using shadcn `Tabs`.

**`/writing`** (new route, keeps `/exam` for legacy)
- Tab **Practice**: Task 1 / Task 2 selector, random topic button, essay editor, "Save Draft" + "Start Evaluation (2 credits)".
- Tab **History**: completed attempts + Drafts sub-section (`status = 'draft'`) with Resume button.

**`/speaking`** update existing page
- Tab **Practice**: random topic, `SpeechRecorder`, Preview / Discard / Save Draft / Start Evaluation.
- Tab **History**: completed attempts + Drafts.

**Draft system**
- `essays` and `speaking_attempts` gain `status = 'draft'` rows saved before evaluation.
- Resume loads the draft into the practice form; Start Evaluation flips the same row to `queued`.

## 4. Audio Quality Check

New `AudioQualityCheck.tsx` component shown before Speaking evaluation and before Mock Test speaking parts:
- Requests mic permission, plays a 3-second live meter using `AnalyserNode`.
- Requires user to hit > threshold before "I'm ready" unlocks. Falls back gracefully if permission denied.

## 5. Mock Test — draft-per-step + async

Already saves each step to `mock_tests` (that IS the draft). Two tweaks:
- Show in-progress mock tests as "Draft — Resume" in `MockTestDashboard.tsx`.
- On final submit: deduct 8 credits, set `status = 'queued'`, invoke `process-mock-test` fire-and-forget (already fire-and-forget; just rename state to queued → processing → completed).
- Thank-you page uses Realtime instead of polling.

## Files

**New**
- migration: statuses, error_message columns, realtime publication additions
- `src/pages/Writing.tsx` (new tabbed page) — reuses existing exam UI
- `src/components/AudioQualityCheck.tsx`
- `src/components/AttemptStatusBadge.tsx` (spinner / status pill, reused across history lists)
- `src/hooks/useRealtimeAttempts.ts`

**Edited**
- `src/App.tsx` — add `/writing` route
- `src/pages/Exam.tsx` — draft save, 2-credit cost, queued flow
- `src/pages/Speaking.tsx` — tabs, draft save, audio check, 2-credit cost, queued flow
- `src/pages/MockTestExam.tsx` — 8 credits, queued status
- `src/pages/MockTestDashboard.tsx` — Draft/Resume, realtime
- `src/pages/MockTestThankYou.tsx` — realtime
- `src/pages/Dashboard.tsx`, `src/components/BottomNav.tsx`, `Navbar.tsx` — link to new `/writing`
- `src/components/PricingModal.tsx`, `AIMentor.tsx` — updated pricing copy
- `supabase/functions/grade-essay/index.ts`, `grade-speaking/index.ts` — write status transitions

## Out of scope this pass
- WebSockets beyond Supabase Realtime.
- Rewriting existing result pages' layouts (only status handling added).
- Migrating legacy essay/speaking rows to a different status than `completed`.
