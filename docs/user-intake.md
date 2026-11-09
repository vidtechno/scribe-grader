# Four-step introduction

After an authenticated account reaches a safe page, `UserIntakeGate` checks one account-scoped response. This applies to existing accounts as well as new Google/Telegram accounts; it does not depend on account creation time. It waits for the profile/device check and avoids login callbacks, lessons, exams and Speaking recordings.

The modal asks phone (optional), Telegram username (optional, with an explicit no-username choice), age range and discovery source. Each question has a separate screen, Back navigation and a clear progress indicator. Discovery source starts empty. Phone/Telegram can be skipped; the whole modal can be deferred for 24 hours. Only the deferral timestamp is stored locally, keyed by account. Contact values stay in memory until submission and are not sent to analytics or logs. The initial screen does not open the mobile keyboard automatically.

One final `complete_user_intake` RPC validates all answers and derives ownership from `auth.uid()`. One row per account makes retries idempotent. Supplied phone numbers also update the existing private profile phone; skipping does not erase an older phone. Age is a range, never a fabricated birth date or numeric age. A manually supplied Telegram handle is contact information, not a verified Telegram account link.

`user_intake` has RLS and no direct client write grants. Ordinary users read only their own response. Administrators can read responses and use checked `admin_user_intake` / `admin_intake_stats` RPCs. These details are absent from public profile/leaderboard APIs.

Admin navigation: **Foydalanuvchilar → Statistika → Tanishuv so‘rovnomasi**. Age and discovery source have separate count/percentage charts, including zero-count choices. Percentages use completed responses as the denominator. Contact details appear in each user's sheet under **Tanishuv javoblari**. Discovery source is deliberately separate from login provider.

Checks:

- `npm run typecheck`
- `npm run test -- src/test/user-intake.test.tsx src/i18n/keys.test.ts`
- `npm run build`
- `WRITING_PGLITE_MODULE=/tmp/scorify-writing-sql/node_modules/@electric-sql/pglite/dist/index.js node scripts/test-intake-migration.mjs` (isolated PostgreSQL WASM, no production connection)
- Mobile 390×844 and desktop local browser fixture: all four steps, no-username choice, initially empty dropdown and completion. Fixture submissions never store production data.

The migration is additive and creates no answers for existing users. No Auth provider setting, AI model, quota, existing essay or subscription is changed.
