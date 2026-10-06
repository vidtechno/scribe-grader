# English course ("O'rganish")

A course for Uzbek speakers that starts from zero. Every lesson is written in advance (no AI is used while learning).
Explanations are in Uzbek; examples and exercises are in English. **Beginner** (units 1–5) and **Elementary / A1**
(units 6–11) are built; A2–C1 and IELTS show "Tez orada" (coming soon).

## Structure

- Beginner: 5 units × 8 lessons = 40 lessons. Elementary: 6 units × 8 lessons = 48 lessons. Unit ids run through all
  levels (u1–u5 Beginner, u6–u11 Elementary). The outline is in `src/features/learn/course.ts`; the lessons are in
  `src/features/learn/content/beginner/u1..u5/` and `content/a1/u6..u11/` (`l1..l8.ts`, one chunk per unit, loaded on demand).
- The learner picks a starting level. Beginner learners continue into Elementary after passing the Beginner unit
  tests; Elementary learners start at unit 6 and can revisit the Beginner lessons (shown as open for review, not required).
- From Elementary on every lesson has connected English to read or listen to (a `text` reading block or a dialogue).
- Lesson flow (`src/pages/LearnLesson.tsx`):
  1. **Review**: the previous lesson's key points plus 3 questions from its quiz.
  2. **Theory slides** with examples, tables, ✅/❌ comparisons, dialogues, sound cards, and quick checks the learner must answer.
  3. **10 words** on flashcards with audio, IPA and an example sentence.
  4. **Practice**: word drills plus 12–16 mixed exercises (listen, choice, match, fill, word order, translate, true/false, speak). Wrong answers come back at the end of the practice.
  5. **Quiz**: about 10 items. The lesson counts as done at ≥ 70%; 3 stars at ≥ 90%.
  6. **Result**: XP, streak, key points, the words to memorise and homework.
- **Unit test** (`/learn/test/:unit`):
  - 20 questions drawn from every lesson of the unit; pass at 80%.
  - 2 attempts; after two failures the test locks for 48 hours (time to review), then 2 new attempts open.
  - The next unit opens only after the test is passed.
- **Pronunciation**: every English text of the course is pre-recorded as a small mp3 (`public/audio/<key>.mp3`, about 2 600 files, 20 MB), served as static files by the site, so sound works on every phone (also those with no speech engine, such as many Android phones in Telegram or Hola). `manifest.json` lists the files; the file name is a hash of the text (`audioKey`).
  - When a lesson opens, its clips are loaded into the browser's memory and released when the next lesson opens, so a tap plays at once. Nothing touches our database.
  - Texts without a recording fall back to the free Dictionary API (single words), a free online voice (sentences) and the device's own voice.
  - If nothing plays, the play button says so once and listening exercises show a "Matnni ko'rsatish" link, so a learner is never stuck.
  - The recordings use the free voice available in the build environment (espeak-ng + mbrola). To get a more natural voice, run `pip install edge-tts` and `npx tsx scripts/generate-lesson-audio.ts --engine edge --force` on a machine with internet, then commit `public/audio`.
  - After adding or changing lessons run `npx tsx scripts/generate-lesson-audio.ts` (needs `espeak-ng`, `mbrola-us1` and `ffmpeg`); only new texts are recorded. A test fails when a released lesson has a text without a recording. Speak exercises use the browser's speech recognition when available, otherwise "repeat aloud".
- **Statistics**: streak (Tashkent days), XP, lessons, words, accuracy, minutes, last 7 days, and "Lug'atim" (all learned words with audio and a 10-word review drill).

## Access

- **Go and Plus**: unlimited.
- **Free**: 7 days from the moment the learner picks a level (`learning_profiles.trial_started_at`). After that the roadmap stays visible but lessons show the plan offer.
- **Enforcement**: the server checks access in every write function (`learning_complete_lesson`, `learning_submit_unit_test`, `learning_log_practice`).

## Database (`20261008000000_learning_course_and_pricing.sql`)

- **Tables**: `learning_profiles`, `learning_lesson_progress`, `learning_unit_tests`, `learning_daily_activity`. Learners can only read their own rows; all writes go through the functions above.
- **Prices**:
  - Go: $9 / 79 000 so'm.
  - Plus: $13 / 129 000 so'm.
  - 6 months paid at once: −10% (Go 426 600 so'm, Plus 696 600 so'm). The admin panel and the bot admin panel can grant 6 months.
  - On long plans the Writing/Speaking/Mock allowance renews every 30 days (`roll_subscription_usage`, also run daily by cron).
- **Telegram**:
  - Button "🎓 Ingliz tili darslari" and the /learn command show progress and open `/learn`.
  - Learners who started the course and have not studied today get one reminder between 20:00 and 21:00 (cron `telegram-learn-reminder`).

## AI mentor in lessons

Prepared but switched off: set `LESSON_MENTOR_ENABLED = true` in `src/features/learn/course.ts` to show the "?" button
in lessons. It opens the existing AI mentor with the lesson as context; the `ai-mentor` function then answers in simple
Uzbek. The global AI mentor switch in the admin panel still applies.

## Adding content

Write lessons in the same format (add a new level folder, its units to `course.ts` and the level to `learning_start` in a migration), run `npx vitest run src/features/learn` (the validator checks structure, answer
keys, word counts and exercise variety), and keep ids in sync with `course.ts`.
