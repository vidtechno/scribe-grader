# Scorify Telegram bot

The bot is part of the website, not a separate product. It uses the same Supabase project, the same accounts, plans, results and goals. Essays and spoken answers are **only** submitted on the website (or inside the Telegram Mini App, which is the website); the bot never accepts them in chat.

## What the learner gets

| Feature | In the bot | Connected to the website |
|---|---|---|
| Main keyboard | Top row for everyone: 🎓 Ingliz tili darslari. Linked: ✍️ Writing · 🎤 Speaking · 📝 Kunlik test · 🧠 So'z testi · 📖 Foydali maqolalar · 👤 Kabinet. Not linked: 🚀 Boshlash · 🧠 So'z testi · 📖 Foydali maqolalar · ❓ Yordam. Everything else (results, goal, plan, leaderboard, referrals, daily practice, settings) lives in 👤 Kabinet. Buttons of older keyboards still work and bring the new keyboard | – |
| Sign up / sign in | "🚀 Boshlash" → "✅ Hisob ochish" creates a Scorify account in one tap | "Continue with Telegram" on `/auth`, automatic sign-in in the Mini App |
| Results | Writing, Speaking and Mock Test scores arrive automatically (criteria, strengths, tips, top corrections, change vs previous attempt, gap to target) | Database triggers on `essays`, `speaking_attempts`, `mock_tests`; "Open full analysis" opens `/result/:id` etc. in the Mini App |
| Statistics | averages, best, last, trend, streak, this week vs plan, exam countdown | same tables as the dashboard |
| Results history | last 10 results with filters and a detailed card for each | `/essays`, `/speaking-history`, `/mock-test` |
| Goals | target band, weekly Writing/Speaking plan, exam date | writes `user_goals`, the same data as the dashboard Goals card |
| Plan | plan, expiry, usage bars, prices, buy via @scorify_payments with the user ID pre-filled | `subscriptions`; plan changes are announced in the bot |
| Leaderboard | today / week / month, same formula as `/leaderboard` | `essays` |
| Referrals | links (site and bot), progress to 10/20, activate the Go reward, share button; new friend notifications | `referral_*` tables and functions |
| Daily practice | word of the day, Speaking question, Task 2 prompt, grammar tip (same for everyone each day) | buttons open `/speaking`, `/writing`, `/grammar-test` |
| Vocabulary quiz | multiple choice in both directions, personal score | – |
| Writing / Speaking / Daily test | cards with remaining evaluations, last score, a tip and buttons that open the page in the Mini App (answers are never accepted in chat) | `/writing`, `/speaking`, `/grammar-test`, `grammar_tests` |
| Articles | latest 7 published blog posts, each opens inside Telegram; a new post is announced to everyone with news notifications on (with a link preview) | `blog_posts` trigger `telegram_blog_publish` + `pg_cron` job `telegram-blog-posts` for scheduled posts |
| English course | progress card (lessons, streak, XP, unit tests, next lesson, free-trial days) and a button that opens `/learn`; one evening reminder (20:00–21:00) for learners who started and did not study today | `learning_*` tables, `telegram_learning_summary`, cron `telegram-learn-reminder` (see docs/learning-course.md) |
| Daily test reminder | everyone who has not finished today's grammar test gets one reminder, sent one by one between 18:00 and 20:00 Tashkent time; skipped if the test is done by then | `pg_cron` job `telegram-daily-test` → `telegram_enqueue_daily_test_reminders(120)` |
| Other reminders | plan expiring in 3 days / 1 day, Sunday weekly report | `pg_cron` job `telegram-daily-jobs` |
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
                                 pg_cron: retries every minute, daily test reminders 18:00–20:00, daily jobs 18:05, blog posts every 10 min
Telegram webhook ───────────────► telegram-bot (menus, admin panel)
```

- `supabase/migrations/20261005000000_telegram_bot.sql`: tables (`telegram_accounts`, `telegram_auth_requests`, `telegram_outbox`, `telegram_broadcasts`, `telegram_settings`), triggers, daily jobs and admin queries. Everything is service-role only; triggers never block saving a result.
- `supabase/migrations/20261006000000_telegram_daily_test_and_blog.sql`: daily test reminders and blog post announcements (posts published before the bot existed are never announced; a post is announced once, only within 3 days of its publish date).
- `supabase/functions/telegram-bot`: webhook, menus, admin panel, notification delivery, setup.
- `supabase/functions/telegram-auth`: sign-in and account linking for the website.
- Accounts created through Telegram use the placeholder email `tg<telegram id>@telegram.scorify.uz` (never shown in the UI). Sign-in creates a one-time Supabase magic-link token on the server and the browser exchanges it with `verifyOtp`.
- A Google user connects Telegram from Profile. If that Telegram already had an **empty** Telegram-only account, it is replaced; an account with results or a paid plan is never merged automatically.

## Deployment (done on 2026-10-06)

- Database: migration `20261005000000_telegram_bot.sql` applied to `scorify-production`; `pg_net` and `pg_cron` enabled; cron jobs `telegram-outbox-retry` (every minute) and `telegram-daily-jobs` (13:05 UTC) scheduled.
- Bot token: stored in Supabase Vault as `telegram_bot_token` (read by `telegram_bot_token()`, service role only). A `TELEGRAM_BOT_TOKEN` Edge Function secret, if added later, takes precedence. To rotate the token: `/revoke` in BotFather, then `select vault.update_secret((select id from vault.secrets where name='telegram_bot_token'), '<new token>');` and run the setup URL again.
- Functions `telegram-bot` and `telegram-auth` deployed with JWT verification off (they authenticate requests themselves).
- Webhook, commands, menu button and descriptions set via `https://bywqpgjojnqscelloxew.supabase.co/functions/v1/telegram-bot?setup=<token>` (also available in the admin panel → 🤖 Bot holati).
- Telegram ID 6117815120 is linked to the admin account.
- Verified in production: Mini App sign-in creates an account and the returned token is exchanged for a session (works with the Email provider disabled); outbox → pg_net → bot → Telegram delivery works.

Update 2026-10-06: migration `20261006000000_telegram_daily_test_and_blog.sql` applied (cron jobs `telegram-daily-test` 13:00 UTC and `telegram-blog-posts` every 10 minutes), `telegram-bot` v2 deployed and setup re-run (new commands: /writing, /speaking, /test, /quiz, /articles, /cabinet, /help).

To redeploy functions after code changes:
```sh
npx supabase functions deploy telegram-bot telegram-auth --project-ref bywqpgjojnqscelloxew
```
