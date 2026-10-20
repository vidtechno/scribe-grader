# 30-day distribution plan (owner actions; nothing here is automated or sent)

Principles: real people, real places, no purchased links, no comment spam, no fake reviews, no invented authors or results.

## Week 0 (release day)
- Merge the PR, wait for the Vercel deploy. Check: `/`, `/uz`, `/ielts`, `/uz/ielts`, `/uz/blog`, `/sitemap.xml`, a nonsense URL (must be a real 404), `/ebdd529c7d82cd937834adb705a40353.txt`.
- GSC: submit the sitemap again; URL Inspection → Request indexing for `/`, `/uz`, `/ielts`, `/uz/ielts`, `/uz/blog` and the 8–10 improved pages.
- Bing Webmaster Tools: add the site (import from GSC is the quickest), put the given code in the Vercel env `BING_SITE_VERIFICATION`, redeploy. Yandex Webmaster: same with `YANDEX_SITE_VERIFICATION` (Yandex has ~20 % share in Uzbekistan). Then `node scripts/indexnow.mjs` (dry run) and `--submit`.
## Week 1–2
- Telegram: pin one useful post in @scorify_uz per audience (Uzbek: free weekday/colour/number lesson; IELTS: the Task 1 graph guide). Reuse existing channel; no mass-adding.
- Your own accounts/profile links (Telegram bot bio, Instagram, YouTube if any) → `https://www.scorify.uz/uz` for Uzbek audiences, `https://www.scorify.uz/ielts` for IELTS.
- Ask existing users who are happy (personally) whether they would share a link or write a genuine review where they choose.
## Week 3–4
- Share individual guides in IELTS/English-learning communities where self-promotion is allowed by the rules, as an answer to a real question, with the link as supporting material.
- Review GSC (see `docs/seo-measurement.md`): double down on the pages with impressions at positions 8–20.
- Social preview images are optional; do after the first measurement.
