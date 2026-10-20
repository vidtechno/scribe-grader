# SEO measurement (Google Search Console + product goals)

## Baselines (GSC, to 19 Oct 2026)
| Window | Clicks | Impressions |
|---|---|---|
| Last 30 days | 62 | 3,292 |
| 13–19 Oct (7 days) | 31 | 1,888 |
| Previous 7 days | 21 | 1,007 |

Per-day averages: 31/7 ≈ 4.4 clicks, 1,888/7 ≈ 270 impressions. (Earlier reports quoted 5.2 / 315 per day: those were 6-day figures.)
Other numbers: vocab pages 824 impr / 3 clicks; Speaking Part 3 344 / 18; mobile 2,124 / 25; desktop 1,105 / 35; `/uz` last week 1,405 / 14.
~696 sitemap URLs, 293 with impressions. "No impressions" ≠ "not indexed": check URL Inspection before concluding.

**Goal (a target, not a promise):** within 30 days of release, the latest *full* 7-day organic clicks ≥ 10× baseline (31 → 310/week).
Second KPI: sign-ups and first lesson / first IELTS practice completions (see goals below).

## GSC method
Never read one aggregate. Export with **query + page** dimensions, then re-cut by **country** and **device**:
1. Performance → Search results → Date: last 7 days vs previous 7 days (same weekdays); also 28 days.
2. Add filters one at a time: Country = Uzbekistan / not Uzbekistan; Device = mobile / desktop; Page contains `/uz`, `/ielts`, `/ingliz-tili`, `/blog`.
3. Per page family: impressions, clicks, CTR, avg position. Position 8–20 with impressions = title/snippet and content opportunity; position < 5 with CTR < 2 % = title problem.
4. Brand (query contains "scorify") vs non-brand separately.
5. Coverage: Pages report → "Crawled – currently not indexed", "Discovered – not indexed", "Duplicate, Google chose different canonical"; sitemap report counts submitted vs indexed.
6. After each release: URL Inspection → Request indexing for the ~10 changed key pages only (quota is small).
Use the same weekday-aligned windows in the table below; GSC data is ~2 days late and the last day is incomplete.

## Product goals (DataFast, `src/lib/analytics.ts`)
Each goal carries `lang`, `audience` (`general_english | ielts_uz | ielts_en | other`), `entry` (first path of the visit, no query) and a few non-personal fields. No emails, texts or audio.
| Goal | Fired when |
|---|---|
| `cta_click` (`location`, `target`) | a sign-up CTA on the landing page is clicked |
| `signup_complete` (`provider`) | a new account (< 10 min old) is seen signed in, once per user |
| `first_lesson_completed` | first passed General English lesson on this browser |
| `first_ielts_practice` (`skill`) | first Writing / Speaking / Reading / Listening / mock section saved |
| `plan_purchased` (`plan`) | a payment is confirmed `paid` |
Page views, referrers and countries come from DataFast itself. "First …" goals are per browser (localStorage), so a second device counts again.
Set the goals up in the DataFast dashboard (Goals → add the names above) so they show; breakdown by custom parameter `audience`/`lang`.

## Tracking table (fill in on each date; same windows)
| Metric | Baseline | Day 7 | Day 14 | Day 30 |
|---|---|---|---|---|
| Organic clicks, latest full 7 days | 31 | | | |
| Impressions, 7 days | 1,888 | | | |
| Avg CTR | 1.6 % | | | |
| Clicks `/` + `/ielts` (EN) | | | | |
| Clicks `/uz` + `/uz/ielts` + `/uz/blog` | | | | |
| Pages indexed (sitemap report) | | | | |
| Sign-ups from organic | | | | |
| `first_ielts_practice` | | | | |
| `first_lesson_completed` | | | | |
| `plan_purchased` | | | | |
| Mobile LCP / CLS / INP (CrUX, only if reported) | n/a | | | |

Status wording to use in reports: **code ready** → **deployed** → **Google recrawled** (URL Inspection shows the new version) → **organic growth** (GSC numbers). Do not skip stages.
