## Goal
Move to a permanent-premium activation model: free users have credits but see partially blurred results; once they accumulate 10+ purchased credits, they become **lifetime Premium** (AI Mentor unlocked, full feedback unblurred). Add a public comment section under each essay.

## 1. Database changes (single migration)

**`profiles` table** — add tracking fields:
- `total_credits_purchased INT DEFAULT 0` — cumulative purchased credits (never decrements on use)
- `is_premium BOOLEAN DEFAULT false` — lifetime flag, once true stays true

**Trigger** on `profiles`: when `total_credits_purchased >= 10`, auto-set `is_premium = true`.

**New table `essay_comments`**:
- `id`, `essay_id` (FK essays), `user_id` (FK auth.users), `content TEXT`, `created_at`, `updated_at`
- RLS: anyone authenticated can SELECT; users can INSERT their own; users can UPDATE/DELETE own; admins can DELETE any.
- GRANTS for authenticated + service_role.

**`handle_new_user`** function update: new users get **2 credits** (instead of 3).

**Admin credit-grant path**: when admin adds credits via Admin panel, increment `total_credits_purchased` too (handled in admin code, not DB).

## 2. Premium logic (frontend)

`useSubscription` hook returns new field `isPremium = profile.is_premium`.

Replace all `planType === 'free'` checks with `!isPremium`. Key files:
- `AIMentor.tsx` — unlock only if `isPremium` (replace `isFree` logic)
- `Result.tsx` & `SpeakingResult.tsx` — show blurred sections (suggestions, advanced corrections) when `!isPremium`, full when `isPremium`. Use existing `BlurredContent` component.
- `SubscriptionBadge.tsx` — show "Premium ✨" if premium, else "Credit Member".

Credits still required to run essay/speaking (1 / 2 credits) regardless of premium.

## 3. Result blur behavior

For non-premium users on Result pages, blur:
- Detailed suggestions / improvement tips
- Vocabulary upgrade suggestions
- Sample improved sentences

Keep visible: band scores, basic criterion scores, short overall comment. Add a small "Become Premium — buy 10+ credits total" CTA card.

## 4. Essay comments section

New component `src/components/EssayComments.tsx`:
- Fetches comments for essay_id, ordered newest-first
- Auth users can post (textarea + button)
- Shows commenter name (from profiles join), timestamp, content
- Owner/admin can delete

Mount on `Result.tsx` (after feedback) and on a public essay view if applicable — for now only Result page since that's where essays are viewed.

## 5. Admin panel update

When admin grants credits, also bump `total_credits_purchased` so trigger fires and user becomes premium if threshold reached.

## Files

**Migration:** new timestamped file under `supabase/migrations/`
**Edit:** `src/hooks/useSubscription.tsx`, `src/components/AIMentor.tsx`, `src/components/SubscriptionBadge.tsx`, `src/pages/Result.tsx`, `src/pages/SpeakingResult.tsx`, `src/pages/Admin.tsx`
**New:** `src/components/EssayComments.tsx`

## Out of scope
- Payment integration (credits still granted manually/by admin)
- Comments on speaking attempts (essays only, as requested)
- Notifications for new comments
