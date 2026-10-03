# Scorify

AI-powered IELTS Writing and Speaking practice at [scorify.uz](https://www.scorify.uz). Learners submit an essay or a spoken answer and get an estimated band, per-criterion scores, corrections and next steps within seconds.

## Status (October 2026)

Live in production. Personal practice only (Teacher Mode was removed). Sign-in is Google only.

### Product
- **Writing** Task 1 and Task 2 with timer, drafts, history and detailed results with corrections.
- **Speaking** Parts 1–3: in-browser recording, audio quality check, transcription, scores and history.
- **Mock tests**, a daily **grammar test**, a **vocabulary** section, **leaderboard** and an **AI Mentor** (loaded only for signed-in users).
- **Dashboard**: quick-start actions, goals and streak (target band, weekly plan, exam countdown, 8-week trend), recent activity, plan status.
- **Referral program**: 10 friends = 1 month Go, 20 friends = 1 month Plus. Only accounts created in the last 24 hours can be claimed; at most 20 are counted per cycle; a cycle resets when the referral-granted plan expires.
- **Announcements** sent by admins.

### Plans (USD first, UZS for local payments)
| Plan | Price / month | Writing | Speaking | Mock tests |
|------|---------------|---------|----------|-----------|
| Free | $0 | 1 | 1 | 0 |
| Scorify Go | $5 (49 000 UZS) | 20 | 15 | 3 |
| Scorify Plus | $9 (99 000 UZS) | 50 | 40 | 8 |

Defined in `src/lib/plans.ts`.

### Admin panel (`/admin`)
- **Users**: join date, last seen, activity, plan, filters, search, CSV export, manual plan changes.
- **Analytics**: site statistics (DataFast), admin only.
- **Blog**: TipTap rich-text editor (`/admin/blog/:id`), images, SEO fields, publish/draft, view stats.
- **Announcements** and settings.

### SEO
Server-rendered pages from Vercel serverless functions (`api/*.ts`), cached at the CDN (`s-maxage=300`; add `?nc=<timestamp>` to bypass when verifying).

- `api/blog.ts`: blog hub, posts and RSS (posts live in the `blog_posts` table).
- `api/seo.ts`: programmatic hubs and topic pages: Writing Task 2 questions, Task 1 samples (SVG charts from `api/_lib/charts.ts`), Speaking Part 1/2/3, vocabulary by topic and the band score calculator.
- `api/sitemap.ts`: sitemap of ~166 URLs including blog posts.
- Data lives in `api/_lib/data-*.ts`; integrity is checked by `src/test/seo-data.test.ts` and `faq.test.ts`.
- JSON-LD (Article/BlogPosting, FAQPage, BreadcrumbList), hreflang, Open Graph images, noindex headers for app pages (see `vercel.json`).

### Performance
Vendor chunks split in `vite.config.ts` (react, radix, supabase, motion). The editor and chart libraries are not in the landing preload set. AI Mentor, announcements, pricing modal and the goals chart load lazily. Dashboard data uses shared TanStack Query caches (`src/hooks/useDashboardData.ts`).

## Stack
React 18, Vite, TypeScript, Tailwind + shadcn/ui, TanStack Query, framer-motion, recharts. Supabase (auth, Postgres with RLS, RPCs, storage, Edge Functions: `grade-essay`, `grade-speaking`, `transcribe-audio`, `ai-mentor`, `generate-grammar-test`, `process-mock-test`). Hosted on Vercel; every push to `main` deploys automatically.

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
- Authentication is Google OAuth only; the email provider is disabled. Allow callback URLs for `https://scorify.uz` and `https://www.scorify.uz`.
- Store `OPENAI_API_KEY` only in Supabase Edge Function secrets.
- Migrations are applied manually in the Supabase SQL editor. Latest: `20261002000000_remove_teacher_mode`, `20261003000000_admin_user_overview`, `20261004000000_growth_referrals_goals_blog`. Blog posts were inserted with ad-hoc SQL, not migrations.
- Do not import demo data or users from the previous project.

## Roadmap
Telegram sign-in, a broader online payment flow, further landing JS reduction and A/B conversion tests, more blog and programmatic SEO content, Bing/Yandex indexing.
