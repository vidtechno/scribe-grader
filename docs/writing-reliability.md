# Writing recovery

Normal Writing now follows `device snapshot → revision-checked account save → atomic grade claim/quota → AI → atomic result save → result page`. The editor stays visible at expiry and on failure. A mock Writing task uses the same save coordinator with its own account/mock/task namespace; the last save and step advance are one transaction. Listening, Reading, Speaking and mock final grading are unchanged.

## Persistence and load

- Local snapshot: 300 ms debounce; synchronous flush on final submit, page hide, visibility change and component cleanup. Contains text, topic, task, attempt ID, absolute start/deadline, timer phase, edit/version metadata and modification time. No text is sent to analytics or application logs.
- Background account save: one changed snapshot at most every 25 seconds; no overlapping writes. Manual save and final submission can flush immediately. Acknowledgements advance the server revision without replacing newer local edits. Empty text never creates a database draft. Autosave neither calls AI nor consumes quota.
- `writing_attempts` is the recovery/reservation record; a normal attempt reuses its ID as the existing `essays.id`, so existing Drafts/History still work. Mock tasks update their existing `mock_tests` fields and never create normal essays. Indexed ownership reads and optimistic revisions prevent silent cross-device overwrites.
- Recovery offers resume, copy and confirmed delete. Divergent versions require a choice, with both copies backed up locally. Completed/processing attempts cannot be deleted through recovery. Account switches remount the editor/controllers.
- Absolute deadlines survive refresh and offline time. Legacy drafts without timer metadata explicitly show that their timer begins on resume; elapsed time for a historical unsaved timer cannot be reconstructed.
- Local storage can be unavailable/full. The UI then reports failure and offers copying; no software can guarantee persistence if the browser clears its storage before the server acknowledges a save.

## Grading and retries

`grade-essay-v2` accepts only `attemptId`; JWT authentication supplies the owner and the saved database record supplies the actual essay. It imports the handler from `grade-essay/index.ts`. The previously deployed v1 endpoint is retained for existing open browser tabs. `claim_writing_grade` locks the attempt and reserves the existing Writing quota in one transaction, enforcing the current 150/250 minimums. Concurrent/repeated submissions return the same processing state or cached completed result. The client never writes its own score/status.

`finish_writing_grade` atomically saves the result and completes the essay. A definitive provider rejection releases the quota once and permits retry. An ambiguous timeout, invalid paid response or worker crash **does not automatically call the model again**: it remains processing or requires support review, retaining the text and reservation. This avoids duplicate AI spend, but these rare cases require checking provider/runtime logs before an operator releases a reservation; exactly-once external execution cannot be guaranteed across a network failure. No scheduled automatic retry is added.

## Verification

- `npm run typecheck`
- `npm run test -- src/test/writing-drafts.test.ts src/test/writing-flow.test.tsx src/test/mock-test.test.ts src/i18n/keys.test.ts`
- `deno check --no-lock supabase/functions/grade-essay/index.ts`
- `npm run build` (includes prerender and public artifact secret/source scan)
- Isolated Chrome fixture at 390px and 1440px: actual Writing component with mocked Auth/API, expired timer and failed final save. Editor remained visible/read-only, Copy/Retry remained reachable, and there was no horizontal overflow. This is layout verification, not a real Supabase/OpenAI end-to-end test.
- Optional isolated SQL test (no Supabase connection): install `@electric-sql/pglite@0.3.14` under a temporary directory, then run:
  `WRITING_PGLITE_MODULE=/tmp/scorify-writing-sql/node_modules/@electric-sql/pglite/dist/index.js node scripts/test-writing-migration.mjs`
  This checks the actual migration functions with minimal Auth/essay/mock schema and a quota stub. It verifies revisions, deadlines, RLS/ownership, duplicate claims/results/refunds, failed/ambiguous grading, mock progression and untouched historical rows. It does not emulate all existing production triggers or real Auth/provider networking.

## Production rollout

1. Review and stage `20261108140343_writing_attempt_recovery.sql` against the complete Supabase schema and advisors; its new functions/table do not backfill or rewrite existing essays/results. Follow migration ordering rules if newer migration timestamps are already recorded.
2. Deploy `grade-essay-v2` before the new frontend. Retain the currently deployed `grade-essay` endpoint for older open tabs; do not replace its body-only API during this rollout.
3. Run a staging Auth/database/Edge integration check and then mobile/desktop browser checks. Do not use existing production essays as fixtures. Real paid OpenAI requests and production changes were intentionally excluded from local tests.

The production rollout was separately authorized after local preparation. Apply only this migration, deploy the versioned endpoint with JWT verification enabled, then release the frontend through the repository's existing Vercel Git integration. Do not change Vercel environment variables or existing essays/results. No dependency/lockfile changes or repository secrets are needed.
