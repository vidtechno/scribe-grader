# Scorify — learning platform architecture

Scorify is learning-first: the course (levels → units → lessons) is the core,
IELTS Writing/Speaking is a secondary, always-available track.

## Single source of truth (SQL)
- `learning_record_activity` is the one engine that awards XP, updates the streak,
  daily goal bonus, comeback bonus and achievements. Lessons, drills, unit tests,
  placement and IELTS triggers all go through it.
- Streak lives on `learning_profiles` (Tashkent days). A day counts when XP > 0.
  A freeze is earned every 7th streak day (max 2) and covers one missed day.
  Coming back after 3+ missed days gives +25 XP; XP never decays, a broken streak
  restarts at 1 (best streak is kept).
- Daily XP is capped (400); repeats give little XP, so the leaderboard rewards regular study.

## Levels
`learning_levels` is the registry (id, position, title, is_open). A new level is a
row plus content in code; no schema change. Non-first levels start with a placement test.

## Social
Public key is `public_id`; display name is "First L.". Settings: discoverable,
show_progress, show_ielts, leaderboard_visible. Follow/unfollow is soft (`ended_at`).
Leaderboard: weekly/all-time XP, global or people I follow.

## Trust model
Scores are client-reported. Mitigations: daily XP cap, low XP for repeats,
profile columns locked (only full_name, age, city, phone are user-updatable).

## Progression
- The path starts at the level the learner chose; units open one after another through their tests.
- **Test-out:** a reached unit's test is `optional` while lessons are unfinished. Passing it marks the
  whole unit as done (client-side in `courseMap`, the test row is the source of truth) and opens the next unit.
  Same rules as any unit test: 80% to pass, 2 attempts, then a 48-hour pause.
- **Placement:** `learning_start(level)` for a non-first level asks for a placement test over all units of the
  levels below (20 questions, 70%, 2 attempts, `placement_target`). Failing twice starts at the first level.
- Adding a level: a row in `learning_levels`, its units in `src/features/learn/course.ts`, `is_open = true`.

## Retention loop
Daily goal (10–200 XP, default 30) → XP and streak (freezes, comeback bonus) → achievements →
weekly/all-time leaderboard (global or people I follow) → followers/following → Telegram reminders and praise.

## Telegram messages (character, caps, opt-out)
- Cron (Tashkent): morning 09:30, afternoon 14:30, evening 20:30 → `telegram_enqueue_learn_slot(slot)`.
- Ladder by days away: 0–2 daily slots (normal: all three, light: evening only), 3–6 evening "come back"
  (+25 XP hint after 4+ days), 7–13 weekly, then one last message and silence.
- Max 3 study reminders a day (1 in light mode); `reminder_mode` normal | light | off plus `notify_reminders`.
- Praise (`learn_praise`) is queued by a trigger on the first XP of the day; a failure there never blocks progress.
- Copy lives in `supabase/functions/telegram-bot/learn-copy.ts` (variant chosen per user and day).
- The IELTS daily grammar-test reminder goes only to non-learners (or learners who did a test this week).
- Google users see one quiet line after their first finished lesson (and the Telegram card in the profile);
  Telegram sign-ins are connected automatically.
