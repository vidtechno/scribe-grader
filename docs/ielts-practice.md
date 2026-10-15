# IELTS practice: Reading, Listening and the Speaking report

## Reading (`/reading`, `/reading/:id`)
- Format follows IELTS Academic Reading: **3 passages, 40 questions, 60 minutes**, difficulty rising from passage 1 to 3. A single passage can also be practised (20 minutes).
- Question types: True/False/Not Given, Yes/No/Not Given, multiple choice, completion (sentence, note, table, summary with a word limit), matching (headings i–x, information to paragraphs A–G, features, sentence endings, word bank).
- Tests: `src/features/ielts/reading/r1.ts … r5.ts` (original texts; some names, institutes and studies in them are invented, real figures were written from memory and should be fact-checked before treating them as reference material). Test 1 is free; the others need a paid plan (soft gate in the UI, answer keys ship in the JS chunk of each test).
- The page loads one test as a separate chunk, shows the passage and questions side by side (tabs on a phone), a question navigator, a countdown and an auto-submit at 0.

## Listening (`/listening`, `/listening/:id`)
- Format follows IELTS Listening: **4 sections × 10 questions**; section 1 everyday conversation, 2 monologue, 3 academic discussion, 4 lecture. Exam mode plays each recording once with no pause or seeking; practice mode allows replay and rewinding.
- Scripts: `src/features/ielts/listening/l1.ts … l5.ts` (`lines` with `voice`, `text` and an optional `say` for numbers, postcodes and spelled names).
- Audio: run `KOKORO_DIR=<model> PYTHON=<python with sherpa-onnx> npx tsx scripts/generate-ielts-listening.ts [--force] [--only l1]`. Each section becomes one mp3 (`public/ielts-audio/<test>-s<n>.mp3`): an announcer line, then every turn in a British Kokoro voice (emma, isabella, george, lewis) with short pauses. Bump the `?v=` in `listeningAudioUrl` (registry.ts) when recordings are replaced.
- After the test the review shows every answer, the key, a short Uzbek explanation and the full transcript.

## Hub pages
`/reading` and `/listening` show a shelf of tests (name, difficulty, description, passages or sections, topics, best band, "up next" marker, recent attempts). Cards come from `registry.ts` (`READING_TESTS`, `LISTENING_TESTS`); a test checks that every file has a card and the card's `parts` match the file's titles. To add a test: write `rN.ts`/`lN.ts`, add its card, run the content tests, record the audio for listening.
Reading tools: highlighter (tap sentences), text size, flag a question to review (navigator shows flags).

## Speaking topics
`src/lib/speakingBank.ts` (40 Part 1 themes, 50 cue cards with linked Part 3 questions, 24 standalone Part 3 sets) is browsed in `/speaking` by category or search (`TopicPicker`), shown as a real cue card (`TopicCard`); Part 2 has a 60-second preparation timer with notes before recording.

## Scoring and history
- Scoring is done in the browser (`score.ts`): one mark per question, no negative marking, fill answers are compared case-insensitively against every accepted spelling. `bands.ts` converts the raw score to an **estimated** band (each real test has its own table).
- Finished attempts are saved with the `ielts_save_attempt` RPC into `ielts_practice_attempts` (RLS: own rows readable; the RPC validates ranges and limits 60 saves a day). The test list shows attempts and the best band.
- `validate.ts` and `ielts-content.test.ts` check every test: counts (40 questions, 12–14 per passage, 10 per section), at least 3 question types per passage, answer indexes, word limits, and that every completion answer can be found in the passage or the audio script; a perfect key must score 40/40.

## Speaking report (v2)
- `supabase/functions/grade-speaking`: the examiner prompt contains condensed band descriptors for the four criteria and **measured facts** computed in code (`_shared/speech-metrics.ts`: words, speed, lexical variety, sentence length, fillers, repeated words, linking words, long words). The model (gpt-4o, falling back to gpt-4o-mini) returns per-criterion feedback with evidence and "to gain +0.5" actions, an Uzbek summary and tips, upgraded phrases, a grammar profile (used / missing / error patterns), part-specific feedback, pronunciation focus words (text based, flagged as an estimate), a plan for the next band and a band-7.5 model answer.
- `_shared/speaking-feedback.ts` validates and cleans these extras and always overwrites the numbers with the measured ones. Older results without the new fields still render.
- Pronunciation is still an estimate from the transcript: the audio itself is not analysed.
