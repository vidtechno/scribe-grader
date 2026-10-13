# English course ("O'rganish")

A course for Uzbek speakers that starts from zero. Every lesson is written in advance (no AI is used while learning).
Explanations are in Uzbek; examples and exercises are in English. Three levels are open: **Beginner** (units 1–5),
**Elementary / A1** (units 6–11) and **Pre-Intermediate / A2** (units 12–17). Intermediate and up show "Tez orada".
Per-lesson outlines: [beginner-curriculum.md](beginner-curriculum.md), [elementary-curriculum.md](elementary-curriculum.md).

## Structure

| Level | Units | Lessons (full + short) | Practice games |
|---|---|---|---|
| Beginner | 5 | 74 (40 + 34) | 44 |
| Elementary A1 | 6 | 90 (48 + 42) | 62 |
| Pre-Intermediate A2 | 6 | 66 (48 + 18) | 29 |

- **Full lessons** (15–25 min) teach one grammar point or topic; **short lessons** (`mini`, 5–12 min, 3–7 new words) are
  life situations, reviews and skill lessons between them. The order of `lessons` in each unit is the teaching order.
  The outline is in `src/features/learn/course.ts` (`BEGINNER_UNITS`, `A1_UNITS`, `A2_UNITS`; each unit has a `learns`
  list shown on its card); the lessons are in `src/features/learn/content/<level>/uN/lM.ts`, loaded on demand.
- **Practice games** (`drills`, ids like `u2-l2-d1`) follow hard lessons: word match, sentence builder, grammar detective,
  listening, memory review, speed round, mini-boss and topic mastery checks. The next lesson waits until the lesson's
  games are done (70% to pass). Their metadata is in `src/features/learn/games.ts`.
- **Lessons added later count as done** for learners who already went past them (`courseMap()` in `api.ts`); the saved
  progress is never touched.
- **Roadmap** (`/learn`, `components/Roadmap.tsx`): a timeline of units with status labels, lessons, games, the unit
  test and "what you will learn". `learningPlan()` (`plan.ts`) gives the next steps shown on the dashboard, the course
  page and the continue card.

## Choosing and changing level

- **Level check** (`/learn/start`, `level-check.ts`): a new learner (no profile) answers 12 questions, easy first
  (5 Beginner, 4 Elementary, 3 Pre-Intermediate; "Bilmayman" skips a question) and gets a recommended level; they can
  also choose a level themselves (`/learn?pick=1`). Placement is saved by `learning_start_placed`.
- **Quick upgrade test** (`/learn/upgrade/:level`): someone who picked a level that is too easy takes a 12-question
  test on the next level (75% to pass) and moves up with `learning_upgrade_level`; lower levels stay open for review.
- **Final exams**: Beginner and Elementary end with a 20-question skills exam (4 each: grammar, vocabulary, reading,
  listening, writing; an unscored speaking part). 70% overall and at least 50% in every skill; a weak skill caps the
  score below the pass mark. Passing gives a certificate. Pre-Intermediate has unit tests only for now.
- The older placement test (`/learn/placement`, 20 questions from the Beginner units) still exists for the
  Elementary placement flow; the level exams live in `LearnBeginnerExam.tsx` (`LevelExam`).

## Lesson flow (`src/pages/LearnLesson.tsx`)

1. **Intro**, then **Review** of the previous lesson (3 questions) and a short **warm-up** of due words.
2. **Theory slides** with examples, tables, ✅/❌ comparisons, dialogues, sound cards and quick checks. From
   Elementary on every lesson has connected English to read or listen to. The learner can go back to earlier slides.
3. **New words** (flashcards with audio, IPA and an example).
4. **Practice**: word drills plus mixed exercises (listen, choice, match, fill, word order, translate, true/false, dictation,
   fix-the-error, speak). Wrong answers come back. Fill, translate and fix exercises have step-by-step help; the answer can
   be shown at the end (it counts as a mistake). A "previous question" button shows earlier answers without letting them change.
5. **Quick check**: 3 questions (`LESSON_CHECK_QUESTIONS`). The lesson counts as done at `LESSON_COMPLETE_PERCENT` = 50%
   of the first-try answers (stars: 90% / 75% / 50%, `learning_complete_lesson`).
6. **Result**: XP, streak, key points, words to memorise, homework, the next step (games, unit test or next lesson).

- **Unit test** (`/learn/test/:unit`): 20 questions drawn from the unit, pass at 80%, 2 attempts, then a 48-hour lock.
  The next unit opens only after the test is passed.
- **Content mistakes**: a "report" button on exercises sends a report to the admin panel (Ta'lim tab).
- **Pronunciation**: every English text of the course is pre-recorded as a small mp3 (`public/audio/<key>.mp3`, ~14 000
  files), served as static files, so sound works on every phone. `manifest.json` lists the files; the file name is a
  hash of the text (`audioKey`). **Only these recordings are played**: the browser voice and online voices are not used.
  When a lesson opens its clips are loaded into memory; nothing touches the database. If nothing plays, listening
  exercises show a "Matnni ko'rsatish" link. A test (`audio-coverage.test.ts`) fails when a playable text has no recording.
  - Voices: Beginner and Elementary are recorded with the free **Kokoro** model (British male "george"); some early
    Beginner lessons keep earlier neural recordings (ElevenLabs/edge-tts); Pre-Intermediate is still the older espeak voice.
  - Recording: `KOKORO_DIR=<model folder> PYTHON=<python with sherpa-onnx> npx tsx scripts/generate-lesson-audio.ts --engine kokoro [--only keys.json]`
    (see `scripts/kokoro-tts.py`); `--engine edge`, `--engine elevenlabs` and the default espeak engine also exist. Only new texts
    are recorded unless `--force` or `--only` is given.
  - Files are cached for a year. **When recordings are replaced, raise `AUDIO_VERSION` in `audio-key.ts`** so devices fetch the new files.
- **Speaking**: `speak` exercises transcribe the learner's voice (`transcribe-lesson`, Whisper with a fallback model) and judge it leniently.
- **Statistics**: streak (Tashkent days), XP, lessons, words, accuracy, minutes, last 7 days, "Lug'atim" (learned words with audio and a review drill).

## Access

- **Learn and IELTS plans** (slugs `go`, `plus`): unlimited.
- **Free**: 7 days from the moment the learner picks a level (`learning_profiles.trial_started_at`). After that the roadmap stays visible but lessons show the plan offer.
- **Enforcement**: the server checks access in every write function (`learning_complete_lesson`, `learning_submit_unit_test`, `learning_log_practice`).

## Database (`20261008000000_learning_course_and_pricing.sql`)

- **Tables**: `learning_profiles`, `learning_lesson_progress`, `learning_unit_tests`, `learning_daily_activity`. Learners can only read their own rows; all writes go through the functions above.
- **Prices**:
  - Learn (slug `go`): 49 000 so'm — the English course only. IELTS (slug `plus`): 129 000 so'm — Learn + 50 Writing + 30 Speaking a month.
  - Every new account gets a 7-day Learn trial (`subscriptions.learn_trial_ends_at`, set at sign-up) with 3 Writing + 2 Speaking that belong to the trial, not to the IELTS allowance. IELTS has no trial.
  - 6 months paid at once: −10% (Learn 264 600 so'm, IELTS 696 600 so'm). The admin panel and the bot admin panel can grant 6 months.
  - On long plans the Writing/Speaking/Mock allowance renews every 30 days (`roll_subscription_usage`, also run daily by cron).
- **Telegram**:
  - Button "🎓 Ingliz tili darslari" and the /learn command show progress and open `/learn`.
  - Learners who started the course and have not studied today get one reminder between 20:00 and 21:00 (cron `telegram-learn-reminder`).

## Site structure

Lessons come first: the dashboard opens with the continue card (next steps, streak, XP, trial days, last 7 days) and
the desktop navbar highlights **Learn**; **Yordam** (`/support`, Telegram) is one tap away on desktop and mobile. Writing, Speaking, Mock tests and Daily Grammar live in the **IELTS Practice**
section (`/practice`, a menu in the navbar, a tab in the mobile bar) and as a compact row on the dashboard.
Mobile bottom bar: Home, Words (`/learn?tab=words`), Learn (centre), Practice, Profile.

## AI mentor in lessons

Prepared but switched off: set `LESSON_MENTOR_ENABLED = true` in `src/features/learn/course.ts` to show the "?" button
in lessons. It opens the existing AI mentor with the lesson as context; the `ai-mentor` function then answers in simple
Uzbek. The global AI mentor switch in the admin panel still applies.

## Adding content

Write lessons in the same format (add a new level folder, its units to `course.ts` and the level to `learning_start` in a migration), run `npx vitest run src/features/learn` (the validator checks structure, answer
keys, word counts and exercise variety), and keep ids in sync with `course.ts`.
