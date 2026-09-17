# Scorify

IELTS Writing and Speaking practice built with React, Vite and a dedicated Supabase project.

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

The frontend is hosted on Vercel at `scorify.uz`. Supabase project: `bywqpgjojnqscelloxew`.

- Set `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` before building.
- Configure production SMTP in Supabase Auth. Keep email confirmation enabled and verify delivery with an owned account.
- Allow callback and reset-password URLs for `https://scorify.uz` and `https://www.scorify.uz`.
- Google OAuth is currently disabled. The authentication form uses email and password.
- Store `OPENAI_API_KEY` only in Supabase Edge Function secrets.
- Keep `app_settings.ai_chat_enabled` set to `false` until AI Mentor is explicitly ready.

Do not import demo data or users from the previous project. Browser checks and mocked tests do not replace testing a confirmed user session, email delivery, microphone permissions and paid AI grading.
