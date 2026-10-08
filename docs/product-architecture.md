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
