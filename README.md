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
- Email confirmation is temporarily disabled because custom SMTP is not configured. Signups use email and password without a confirmation email. Configure production SMTP, verify delivery, and then re-enable email confirmation. Password recovery still depends on Supabase's limited built-in email service until SMTP is configured.
- Allow callback and reset-password URLs for `https://scorify.uz` and `https://www.scorify.uz`.
- Google OAuth is currently disabled. The authentication form uses email and password.
- Store `OPENAI_API_KEY` only in Supabase Edge Function secrets.
- Keep `app_settings.ai_chat_enabled` set to `false` until AI Mentor is explicitly ready.

Do not import demo data or users from the previous project. The production admin session has been checked. Email delivery, microphone permissions and paid AI grading still require separate live verification.
