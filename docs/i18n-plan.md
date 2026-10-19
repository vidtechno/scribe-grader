# Two languages (English default, Uzbek) and SEO

## Decisions
- **UI language** is a per-person setting (`src/i18n`): saved choice → `/uz` landing → country (Uzbekistan → Uzbek, via `/api/geo`) → browser language → English. The switcher (EN | UZ) is in the top bar and on the profile page. Admin panel stays Uzbek.
- **SEO**: app pages are private (noindex), so their language does not need URLs. Indexable pages get **one URL per language** with `hreflang`:
  - Landing: `/` (English, x-default) and `/uz` (Uzbek, generated at build: `landing-meta.mjs`, `dist/uz/index.html`).
  - Blog: every article exists in English and Uzbek on separate URLs, linked with `hreflang`, a language switch on the page, and both in the sitemap.
  - Existing ranking pages keep their URLs (Uzbek vocabulary/course pages, English IELTS practice pages). Guides stay Uzbek.
- Crawlers are never redirected by country: Googlebot sees the same URLs as everyone and picks the language by `hreflang`.

## Phases
1. Foundation + shell + landing (switcher, `/uz`, geo, Navbar, BottomNav, Auth, Index, plans).
2. App pages (Dashboard, Profile, Learn UI, IELTS, Writing/Speaking, Mock) — texts moved to `src/i18n/messages/*.ts`; lesson content stays Uzbek.
3. Blog in both languages (schema, translations of all posts, switcher, hreflang, sitemap, RSS).
4. SEO polish: titles/descriptions for pages with impressions but few clicks, structured data, internal links.
