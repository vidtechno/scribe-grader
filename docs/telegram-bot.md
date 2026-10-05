# Scorify Telegram bot

The bot is part of the website, not a separate product. It uses the same Supabase project, the same accounts, plans, results and goals. Essays and spoken answers are **only** submitted on the website (or inside the Telegram Mini App, which is the website); the bot never accepts them in chat.

## What the learner gets

| Feature | In the bot | Connected to the website |
|---|---|---|
| Sign up / sign in | "Ro'yxatdan o'tish" creates a Scorify account in one tap | "Continue with Telegram" on `/auth`, automatic sign-in in the Mini App |
| Results | Writing, Speaking and Mock Test scores arrive automatically (criteria, strengths, tips, top corrections, change vs previous attempt, gap to target) | Database triggers on `essays`, `speaking_attempts`, `mock_tests`; "Open full analysis" opens `/result/:id` etc. in the Mini App |
| Statistics | averages, best, last, trend, streak, this week vs plan, exam countdown | same tables as the dashboard |
| Results history | last 10 results with filters and a detailed card for each | `/essays`, `/speaking-history`, `/mock-test` |
| Goals | target band, weekly Writing/Speaking plan, exam date | writes `user_goals`, the same data as the dashboard Goals card |
| Plan | plan, expiry, usage bars, prices, buy via @scorify_payments with the user ID pre-filled | `subscriptions`; plan changes are announced in the bot |
| Leaderboard | today / week / month, same formula as `/leaderboard` | `essays` |
| Referrals | links (site and bot), progress to 10/20, activate the Go reward, share button; new friend notifications | `referral_*` tables and functions |
| Daily practice | word of the day, Speaking question, Task 2 prompt, grammar tip (same for everyone each day) | buttons open `/speaking`, `/writing`, `/grammar-test` |
| Vocabulary quiz | multiple choice in both directions, personal score | – |
| Reminders | practice reminder (only for recently active learners), plan expiring in 3 days / 1 day, Sunday weekly report | `pg_cron` job `telegram_daily_jobs` |
| Settings | toggle results / reminders / news, disconnect | also on the Profile page |

## Admin panel (Telegram ID 6117815120 and site admins who connect Telegram)

- 📈 Statistics: users (total, today, 7/30 days, active), bot users (linked, blocked, banned), activity, paid plans, AI cost, notification delivery.
- 📣 Broadcast: choose an audience (all, linked, unlinked, Free, Go/Plus), send any message (text, photo, video, file), preview, confirm. Delivery runs in the background within Telegram limits and a report is sent at the end.
- 🔍 User search by email, name, `#ID`, `@username` or Telegram ID → user card with plan and usage, Go/Plus +30 days, downgrade to Free, direct message, ban in the bot.
- 🆕 Latest sign-ups (Telegram / Google).
- 📢 Website announcements: create a banner or modal shown on the site, optionally also broadcast it in Telegram; deactivate active ones.
- 🤖 Bot status: webhook health, queue; re-run setup, retry failed messages, flush the queue, send the daily reminders now.

## How it fits together

```
Website (React)                Supabase                                   Telegram
/auth  Continue with Telegram ─► telegram-auth (login_start/poll) ◄──────── bot confirms /start login_<code>
/tg    Mini App sign-in ───────► telegram-auth (webapp, verifies initData)
/profile Connect Telegram ─────► telegram-auth (link_start, status, settings, unlink)
                                 essays / speaking / mock / referrals / subscriptions
                                   └─ triggers → telegram_outbox → pg_net → telegram-bot (drain) ──► messages
                                 pg_cron: retries every minute, daily jobs 18:05 Tashkent
Telegram webhook ───────────────► telegram-bot (menus, admin panel)
```

- `supabase/migrations/20261005000000_telegram_bot.sql`: tables (`telegram_accounts`, `telegram_auth_requests`, `telegram_outbox`, `telegram_broadcasts`, `telegram_settings`), triggers, daily jobs and admin queries. Everything is service-role only; triggers never block saving a result.
- `supabase/functions/telegram-bot`: webhook, menus, admin panel, notification delivery, setup.
- `supabase/functions/telegram-auth`: sign-in and account linking for the website.
- Accounts created through Telegram use the placeholder email `tg<telegram id>@telegram.scorify.uz` (never shown in the UI). Sign-in creates a one-time Supabase magic-link token on the server and the browser exchanges it with `verifyOtp`.
- A Google user connects Telegram from Profile. If that Telegram already had an **empty** Telegram-only account, it is replaced; an account with results or a paid plan is never merged automatically.

## Deploy (once)

1. **Database**: run `supabase/migrations/20261005000000_telegram_bot.sql` in the SQL editor. It enables `pg_net` and `pg_cron` when available and schedules the jobs.
2. **Secret**: Edge Functions → Secrets → add `TELEGRAM_BOT_TOKEN` (from BotFather). Optional: `TELEGRAM_ADMIN_IDS` (comma-separated extra admin Telegram IDs).
3. **Functions** (JWT verification is turned off for these two in `supabase/config.toml`):
   ```sh
   npx supabase functions deploy telegram-bot telegram-auth --project-ref bywqpgjojnqscelloxew
   ```
4. **Connect the bot** by opening once in a browser:
   `https://bywqpgjojnqscelloxew.supabase.co/functions/v1/telegram-bot?setup=<TELEGRAM_BOT_TOKEN>`
   It sets the webhook (with a secret header), commands, the "Scorify" menu button (Mini App) and descriptions. The admin panel has the same action under 🤖 Bot holati.
5. **Website**: merge to `main`; Vercel deploys `/tg`, the Telegram button on `/auth` and the Profile card.

No BotFather changes are required. If Telegram sign-in on the website returns "Email logins are disabled", enable the Email provider in Supabase Auth (keep "Confirm email" on); the website still only shows Telegram and Google.
