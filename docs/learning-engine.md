# Scorify Learning Engine

The lesson content (slides, words, practice, quiz) is unchanged. The engine decides **which words are new**, **what comes back
from earlier lessons and when**, and **what the learner keeps getting wrong**.

## Exposure and mastery
- **Exposure** — the learner met the item: read it, heard it, saw it in a slide, dialogue or sentence.
- **Mastery** — the learner recalled it correctly. Each word has a box 0–6; a correct answer moves it up, a miss moves it down
  (from box 3 and up by two boxes, otherwise to 0). The wait before the next review per box: 30 min, 1, 2, 4, 8, 16, 32 days.
- A word is *new* (introduced, box 0), *learning* (box 1–4), *mastered* (box ≥ 5) or only *seen* (never introduced).
- Nothing decays. XP, boxes and counters stay however long the learner is away (only the streak is affected, see below).

## Tables (`20261015000000_learning_engine.sql`)
| Table | Holds |
|-------|-------|
| `learning_word_mastery` | per word: text (en/uz/example), introduced, exposures, attempts, correct, lapses, box, due_at |
| `learning_grammar_mastery` | per lesson topic: attempts, correct, lapses, box, due_at |
| `learning_mistakes` | the missed exercise itself (`payload`), wrong count, right streak, resolved_at |

RPCs: `learning_record_review(events, award)` (one batch per lesson / review round), `learning_review_queue()` (what is due,
the new-word target, every known word with its box, stats).

## New words per lesson
`learning_new_word_target`: 6 by default; 7–8 when the last 7 days were ≥ 90–95% correct and little is due; 5–4 when accuracy is
< 75–60% or more than 12–20 words wait for review. The lesson's remaining words are shown on a short "extra words" screen, count as
exposure, and come back through the queue (due the next day). Words the learner already works with are review, not new.

## What happens in a lesson
1. **Warm-up** (new phase "Eslab qolish", up to 7 items): due words (most overdue / shakiest first), words only seen before,
   notebook mistakes, one or two weak grammar topics. Word items change with the box: choice / listening → sentence with a blank →
   typing, building a sentence, saying it. Skipped when nothing is due. The old 3-question review is used only when the warm-up is empty.
2. **Flashcards + drills** only for the new words; practice and quiz are the lesson's own exercises.
3. **At the end** one `learning_record_review` call: `intro` for new words, `right`/`wrong` per word from the exercises it appears in,
   `seen` for the other words and for earlier words met again in the lesson text, `m` events for missed exercises (notebook) and for
   notebook items answered in the warm-up (two correct answers close a mistake), and a grammar result for the lesson topic.
4. **Words tab**: "Takrorlash (N)" runs the same mixed session (and awards small XP); with nothing due it is free practice as before.

Client code: `src/features/learn/engine/` (`engine.ts` pure logic + tests, `api.ts` queries).

## Streak and XP
XP is permanent. The streak resets only after **three missed days in a row** (one or two days off keep it); vocabulary, grammar
mastery, mistakes and all progress stay. A comeback after 3+ missed days gives +25 XP.

## Plans and trial
Learn (slug `go`, 49 000 so'm) — all English lessons and the engine. IELTS (slug `plus`, 129 000 so'm) — Learn + 50 Writing,
30 Speaking (+3 mock tests). Every account gets `subscriptions.learn_trial_ends_at = created + 7 days`: Learn access plus the Free
3 Writing + 2 Speaking (`consume_quota` refuses Free users once it has passed). IELTS has no trial; the Free allowance is separate
from the IELTS monthly allowance (upgrading sets the plan's limits and resets usage).

## Speaking exercises in lessons
`transcribe-lesson` (Whisper, `OPENAI_API_KEY` already used by the other functions) turns a short recording into text and returns
audio-quality numbers. It needs course access, has a rate limit and does not use the IELTS Speaking allowance. The target phrase is
not sent to Whisper (it would bias the transcript). `judgeSpeech` compares text leniently (endings, sound-alikes, numbers,
contractions, dropped articles, extra words) — it tells whether the phrase was understood, not that pronunciation is "correct";
after three tries the exercise counts as practice. Without a microphone API or when the function fails, the browser recogniser is used.
