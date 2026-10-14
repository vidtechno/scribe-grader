# Scorify

AI-powered IELTS Writing and Speaking practice at [scorify.uz](https://www.scorify.uz). Learners submit an essay or a spoken answer and get an estimated band, per-criterion scores, corrections and next steps within seconds.

## Status (October 2026)

Live in production. Personal practice only (Teacher Mode was removed). Sign-in with Google or Telegram.

### Product
- **English course from zero** (`/learn`), the centre of the product: three open levels, **Beginner** (5 units, 88 lessons, 14 of them real-life scenes), **Elementary / A1** (6 units, 90 lessons) and **Pre-Intermediate / A2** (6 units, 66 lessons). Short situation lessons (5–12 min) sit between the full lessons (15–25 min); every hard topic is followed by practice games (44 in Beginner, 62 in Elementary, 29 in Pre-Intermediate), then a unit test. Explanations in Uzbek, examples and exercises in English; every English text has a natural pre-recorded voice. 7 days free, then the Learn plan (details in [docs/learning-course.md](docs/learning-course.md)).
- **Level check and level-ups**: a new learner takes a 12-question level check (`/learn/start`) and is placed at the right level (they can also pick a level or say "Bilmayman"); someone who picked a level that is too easy takes a quick test (`/learn/upgrade/:level`) to move up. Beginner and Elementary end with a skills-based final exam (grammar, vocabulary, reading, listening, writing, plus an unscored speaking part) and a certificate.
- **Real-life scenes** (Beginner): 14 interactive voiced conversations between the ordinary lessons (meeting someone, café, bus station, asking the way, shop, hotel, weekend chat, plans, a final mission). A chat with an animated partner who speaks in the Emma or George voice; the learner picks, types, builds or completes replies; every wrong answer is explained in Uzbek, any correct variant is accepted, and progress, XP and streak use the normal lesson system (`src/features/learn/scene/`, content in `content/beginner/uN/`, see [docs/learning-course.md](docs/learning-course.md)).
- **Roadmap** (timeline of units with lessons, games, unit tests and what each topic teaches), **spaced repetition** of words and mistakes, personal dictionary, streak, XP, daily goal and achievements.
- **Social**: Instagram-style profile with username and avatars, people search and follow, learning **leaderboard** (`/leaderboard`).
- **Referral program**: a friend who signs up through your link and buys a paid plan after the 7-day trial adds 10 000 so'm to your referral balance; payout from 100 000 so'm through the bot (admin approves).
- **IELTS practice** (secondary, IELTS plan): **Writing** Task 1 and 2 and **Speaking** Parts 1–3 with an estimated band, criteria scores and corrections; **mock tests**, a daily **grammar test**, vocabulary, **AI Mentor**.
- **Dashboard** (`/dashboard`): continue card with the next steps of the course, streak and XP, IELTS practice row, plan usage, recent activity.
- **Support** (`/support`): opens a Telegram chat with @scorify_support with the user's ID, plan and page pre-filled; the same account takes payments.
- **Announcements** sent by admins and a **Telegram bot** (see [Telegram bot](#telegram-bot)). Sign-in with Google or Telegram.
- **Content reports**: learners can report a mistake in a lesson; admins review them in the admin panel (Ta'lim tab).

### Telegram bot
Part of the same product (same Supabase project, accounts, plans and results), not a separate service. Built in a separate Claude session; full details in [docs/telegram-bot.md](docs/telegram-bot.md).

- **Sign-in:** "Continue with Telegram" on `/auth` (bot confirmation) and automatic sign-in in the Mini App (`/tg`); Google users can connect Telegram from Profile. Handled by the `telegram-auth` Edge Function.
- **Learner menu:** 🎓 English course on top, then dictionary, referral, cabinet (results history, stats, goals, plan, leaderboard, settings), useful articles, and for IELTS: Writing, Speaking, daily grammar test and vocabulary quiz. Essays and spoken answers are never accepted in chat; buttons open the website pages inside the Mini App.
- **Notifications:** Writing, Speaking and Mock Test results arrive automatically (database triggers → `telegram_outbox` → `pg_net` → bot). Also daily test reminders (18:00–20:00 Tashkent), plan expiry warnings, a Sunday weekly report and announcements of new blog posts.
- **Bot admin panel:** statistics, broadcasts with audience selection, user search and plan changes, latest sign-ups, website announcements and bot health. Edge Function: `telegram-bot`; scheduled jobs run with `pg_cron`.
- **Safety:** tables are service-role only, triggers never block saving a result, the bot token lives in Supabase Vault.

### Plans (USD first, UZS for local payments)
| Plan | Price / month | Writing | Speaking | Mock tests |
|------|---------------|---------|----------|-----------|
| Free (7-day Learn trial) | 0 | 3 | 2 | 0 |
| Learn (internal slug `go`) | 49 000 UZS | 0 | 0 | 0 |
| IELTS (internal slug `plus`) | 129 000 UZS | 50 | 30 | 3 |

Paying 6 months at once is 10% cheaper. Payment is made through Telegram (@scorify_support) and the plan is switched on by an admin.

Defined in `src/lib/plans.ts`.

### Admin panel (`/admin`)
- **Users**: 20 users per page with numbered pages; the list opens sorted by last visit with the people who are on the site right now on top (green dot, "Hozir onlayn") and everybody else as "2 soat oldin", "3 kun oldin"…; segments (online now, last online, paid, free week, expiring, expired, active/inactive, never studied, referrers), search, other sorts, CSV export, manual plan changes. A second view, **Statistika**, shows who is online (now / 1 hour / 24 hours / 7 / 30 days), growth against the previous period, how many come back, daily active learners, lessons done, plans, levels, sign-in methods, cities and the top learners.
- **Presence**: a signed-in visitor with the tab open sends a heartbeat (`touch_presence`, `src/hooks/usePresence.ts`) every 2 minutes; the database writes at most once a minute per user (`user_presence` table, no direct access). "Online" means a heartbeat in the last 5 minutes. Statistics come from `admin_user_stats()`, the list from `admin_users_list()` (`online_at`).
- **Analytics**: site statistics (DataFast), admin only.
- **Blog**: TipTap rich-text editor (`/admin/blog/:id`), images, SEO fields, publish/draft, view stats.
- **Announcements** and settings.

### SEO
Server-rendered pages from Vercel serverless functions (`api/*.ts`), cached at the CDN (`s-maxage=300`; add `?nc=<timestamp>` to bypass when verifying).

- `api/blog.ts`: blog hub, posts and RSS (posts live in the `blog_posts` table).
- `api/seo.ts`: programmatic hubs and topic pages: Writing Task 2 questions, Task 1 samples (SVG charts from `api/_lib/charts.ts`), Speaking Part 1/2/3, vocabulary by topic and the band score calculator.
- `api/_lib/course-pages.ts`: public course pages in Uzbek (`/ingliz-tili-darslari`, the three open levels and all their lessons) generated from `data-course.ts` (`npx tsx scripts/build-course-seo.ts`).
- `api/_lib/learn-pages.ts`: learning SEO that feeds the course: Uzbek grammar guides `/ingliz-tili-qoidalari` (`data-learn-guides.ts`, 15 guides), topic word lists `/inglizcha-sozlar` (`data-learn-words.ts`, 11 topics with IPA) and the English landing `/learn-english-from-uzbek` (hreflang pair with the Uzbek course hub). Checked by `src/test/learn-seo.test.ts`.
- `api/sitemap.ts`: sitemap of the course, guides, word lists, IELTS pages and blog posts.
- Home page title and JSON-LD are brand-first ("Scorify.uz — Ingliz tili darslari...", WebSite name `Scorify` with alternate names) to win branded searches.
- Data lives in `api/_lib/data-*.ts`; integrity is checked by `src/test/seo-data.test.ts` and `faq.test.ts`.
- JSON-LD (Article/BlogPosting, FAQPage, BreadcrumbList), hreflang, Open Graph images, noindex headers for app pages (see `vercel.json`).

### Performance
Vendor chunks split in `vite.config.ts` (react, radix, supabase, motion, query). Auth, support and level-check pages are lazy; Dashboard, Learn and the lesson page are prefetched when the browser is idle. Plans are cached for 30 minutes, the subscription is shared through one query, and `/audio/*` and `/assets/*` are cached for a year (audio URLs carry `?v=` from `AUDIO_VERSION`, raise it when recordings change). The editor and chart libraries are not in the landing preload set. AI Mentor, announcements, pricing modal and the goals chart load lazily. Dashboard data uses shared TanStack Query caches (`src/hooks/useDashboardData.ts`).

## Stack
React 18, Vite, TypeScript, Tailwind + shadcn/ui, TanStack Query, framer-motion, recharts. Supabase (auth, Postgres with RLS, RPCs, storage, Edge Functions: `grade-essay`, `grade-speaking`, `transcribe-audio`, `transcribe-lesson`, `ai-mentor`, `generate-grammar-test`, `process-mock-test`, `telegram-bot`, `telegram-auth`). Hosted on Vercel; every push to `main` deploys automatically.

## Local development

Copy `.env.example` to `.env.local`, fill in the public Supabase settings, then run:

```sh
npm ci
npm run dev
```

The development server uses port 8080. `.env` and `.env.local` are ignored by Git. Frontend builds contain only the public Supabase URL and publishable key. Never put a service-role key, OpenAI key or database password in a `VITE_*` variable.

## Checks

```sh
npm run typecheck
npm test
npm run build
npm run lint
deno test --allow-env supabase/functions/_shared/
deno check supabase/functions/*/index.ts
```

## Production configuration

Supabase project: `bywqpgjojnqscelloxew`. Frontend on Vercel at `scorify.uz` / `www.scorify.uz`.

- Set `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` for builds. The `api/*` functions read blog posts from Supabase REST.
- Authentication: Google OAuth and Telegram (bot confirmation or Mini App, handled by `telegram-auth`). Allow callback URLs for `https://scorify.uz` and `https://www.scorify.uz`.
- The Telegram bot token is stored in Supabase Vault (`telegram_bot_token`); deployment details are in [docs/telegram-bot.md](docs/telegram-bot.md).
- Store `OPENAI_API_KEY` only in Supabase Edge Function secrets.
- Migrations are applied by hand (SQL editor or `execute_sql`, in small pieces: a long migration can time out). Latest: `20261024000000_certificates`, `20261026000000_lesson_completion_threshold`, `20261027000000_security_and_load_hardening`, `20261028000000_start_placed_and_upgrade_level`, `20261029000000_user_presence_and_stats`. Blog posts were inserted with ad-hoc SQL, not migrations. In the Supabase Auth settings enable leaked-password protection (a dashboard switch, not a migration).
- Do not import demo data or users from the previous project.

## Roadmap
More course levels (Intermediate and up), a Pre-Intermediate final exam and games, an Android app (APK), a broader online payment flow, mistake notebook and daily Telegram exercises, A/B conversion tests, more blog and programmatic SEO content, Bing/Yandex indexing.
