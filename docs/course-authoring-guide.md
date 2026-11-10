# Scorify English course, Upper-Intermediate (B2): authoring guide

You are writing lesson content for **Scorify Learn**, an English course for **Uzbek speakers**. Explanations are in **Uzbek (Latin script)**, examples, texts, dialogues and exercises are in **English**. The level is **B2 (Upper-Intermediate)**: the learner has finished Beginner, Elementary, Pre-Intermediate and Intermediate (B1) and now needs real fluency, accuracy and exam-style skills (IELTS 5.5–6.5 range). The result must be a lesson that **gives the learner a measurable result**, not a generic page of rules.

Repository: `/home/user/scribe-grader`. Content files live in `src/features/learn/content/b2/<unit>/` (unit = u24 … u30). Never touch files outside the files you were asked to write. **Do not run git commands.** Do not edit `course.ts`, `games.ts` or any test: the outline (titles, ids, mini/kind flags, drill ids, game kinds) is already there and your files must match it **exactly**.

## 0. Read first (in this order)

1. `src/features/learn/types.ts`: the content model (blocks, exercises, Lesson, Drill, Word).
2. `src/features/learn/content-validate.ts`: the structural rules every file must pass.
3. Your unit's spec: `the per-unit brief (docs/upper-intermediate-curriculum.md lists the outline)` (title, per-lesson `focus` brief, `drillGame`).
4. Exemplars from Intermediate (B1), same structure, **read at least these before writing**:
   - full grammar lesson: `src/features/learn/content/b1/u21/l1.ts`, `.../u22/l1.ts`
   - vocabulary lesson: `.../b1/u21/l5.ts`; writing lesson: `.../b1/u21/l7.ts`; unit review: `.../b1/u21/l8.ts`
   - mini grammar `.../b1/u21/l12.ts`; situation `.../b1/u21/l9.ts`; skill `.../b1/u21/l14.ts`; final review `.../b1/u21/l11.ts`
   - drills: `.../b1/u21/drills-a.ts`, `drills-b.ts`, `drills-c.ts`; extras: `.../b1/u21/extras.ts`
5. The list of words already taught in Beginner–B1 (do not teach them again as new words): `a list of every word taught at earlier levels (generate it from `loadUnit` over all units)` (`grep -ix 'word' file` to check one). Also avoid repeating a new word that another lesson of your unit or another B2 unit already teaches (`grep -rn "en: 'word'" src/features/learn/content/b2`).

## 1. File layout and exports

- One file per lesson: `l1.ts` … `l15.ts`: `import type { Lesson } from '../../../types'; const lesson: Lesson = { … }; export default lesson;`
- Drills: `drills-a.ts`, `drills-b.ts`, `drills-c.ts`: `import type { Drill } from '../../../types'; export const drills: Drill[] = [ … ];` Split as the exemplar does (about 4 drills per file). Drill id = `<lessonId>-d1`.
- Extras: `extras.ts`: `import type { UnitExtras } from '../../../unit-extras'; export const extras: UnitExtras = { canDo, traps, culture, project }` (see the B1 exemplar for the exact shape).
- `index.ts` is written by the lead. Do not create it.
- Validate every file you write with: `cd /home/user/scribe-grader && npx vite-node scripts/check-content.ts <file> [<file> …]` until it prints ✓ for all. This checks structure, ids, exact titles, `mini`/`kind`, drill announcements and game kinds. Also run `npx tsc --noEmit -p tsconfig.app.json` once at the end.

## 2. Lesson requirements

Lesson `id`, `title`, `titleUz`, `mini`, `kind` must equal the outline in `course.ts` (the spec json shows them). For full lessons there is no `kind` property; for mini lessons use the `kind` from the outline.

**Full lesson** (l1–l8): 6–8 slides, about 28–34 blocks; **exactly 10 words**; practice 15–17 items with **at least 6 different exercise kinds**; quiz 10 items; at least 8 `check` blocks inside the slides; at least one connected `text` (reading) block **and** one `dialog`; summary 4–5 points; goal; homework. Size: 18–24 KB.
**Mini lesson** (l9–l15): 4–5 slides, about 16–20 blocks; 5–7 words; practice 13–15 with at least 5 kinds; quiz 8–9; at least 5 `check` blocks; at least one `dialog` or `text`; summary 4–5. Size: 11–15 KB.

Every lesson follows this arc (Uzbek headings):
1. **Maqsad / nima uchun kerak** with a real-life B2 situation (work, study, travel, society, IELTS), and what the learner will be able to do.
2. **Qoida va tuzilma**: tables (`table` with `speak` column where useful), `examples` (en+uz), `compare` good/bad.
3. **Ma'no va ishlatilishi**: when to use form A and when form B; contrast with what the learner already knows from B1; register (formal/informal); typical collocations.
4. **Tipik xatolar (o'zbek tilidan interferensiya)**, a slide with 3–4 mistakes that Uzbek speakers really make in this topic, each shown as `compare` bad→good and checked with a `fix` exercise. This is how the course teaches **repeating mistakes**, make them concrete and true (word-for-word translation from Uzbek, missing auxiliary, wrong preposition, wrong word order…).
5. **O'qing** (`text`, 90–180 words, natural, B2 level, with a clear topic) and **Dialog** (6–10 lines, two speakers, realistic).
6. Practice (many kinds), quiz, summary, homework (a concrete task the learner does on their own: write, record, notice).

**B2 depth:** this is not a re-run of B1. Go deeper: nuance, register, exceptions, collocation, "why this and not that", real examples from news, work emails, lectures, interviews, IELTS-style prompts. Keep explanations simple and exact: short Uzbek sentences, English terms in *italics* or **bold**. Never leave a rule without an example, never give an example without the point it illustrates.

**Vocabulary (words array):** B2-level words/collocations (not B1 words), each with `en`, `uz` (short, accurate meaning), `ipa` (British, no slashes), `pos`, `ex` (one natural sentence at B2 level), `exUz`. Prefer words that fit the lesson topic so that the learner can use them in the lesson's own text and dialogue; use several of the lesson's words in its text, dialogue, practice and quiz. For mini lessons use 5–7 words.

## 3. Voices (audio will be recorded from your text)

The course is voiced with **two British voices: Emma (female) and George (male)** and they must be **mixed sensibly**:
- In every `dialog`, use two speakers of **different gender**, with names from this list so the right voice is chosen: female: Anna, Sara, Kate, Emma, Emily, Lily, Mia, Lucy, Helen, Jane, Maria, Sofia, Sophie, Alice, Laura, Julia, Olivia, Rachel, Nora, Eva, Grace, Nina, Madina, Malika, Nilufar, Dilnoza, Zarina, Aziza; male: Tom, Ben, Sam, Jack, John, Mike, Peter, Paul, David, James, George, Max, Leo, Adam, Alex, Chris, Will, Oliver, Ali, Sardor, Jasur, Botir, Karim, Bobur, Timur, Rustam, Aziz. A role name (Doctor, Manager, Interviewer) takes the voice that is not yet used, so pair it with a named speaker. Use Uzbek and English names, alternate who speaks first from lesson to lesson.
- In every `text` block set `voice: 'emma'` or `voice: 'george'` explicitly and alternate between lessons (a story told by a woman in one lesson, by a man in the next). Content must make sense for the speaker's gender (no first-person details that contradict the voice).
- Texts for listening lessons (l14) are meant to be **heard first**; write them in a spoken style.
- Write numbers, abbreviations and punctuation so that a TTS voice reads them well: avoid symbols such as `&`, `%` (write "per cent"), `@`, URLs and tables inside the text that is spoken; spell out "10 a.m." as "ten o'clock in the morning" in listening texts; use plain apostrophes.

## 4. Exercises: rules that decide whether the lesson is correct

Kinds: `choice, listen, fill, order, translate, match, tf, dictation, fix, speak` (see types.ts and content-validate.ts).
- **Exactly one** option is correct in `choice`/`listen`; no duplicate options; 3–4 options; vary the position of the correct answer (`a`).
- `fill`: exactly one `___`; list **every** correct variant in `a` (contractions and full forms: `["I've been", "I have been"]`, British/American spelling where relevant). If more than one word could fit, rewrite the question (add a hint or context) so that only your answer fits.
- `fix`: the `wrong` sentence must really be wrong; list all acceptable corrections; at least one word must change.
- `order`: `words` in the correct order; add `alt` for other valid orders; `extra` distractor tiles; the Uzbek prompt must lead to your sentence.
- `translate` (Uzbek → English): list **all** natural translations (contractions, synonyms).
- `match`: 3–6 pairs, no duplicates on either side.
- `tf`: statements that are unambiguously true or false with a reason in `why`.
- `dictation`, `listen`, `speak`: English sentences that are good spoken English (no formulas, no brackets). `speak` is allowed in practice, **never in quiz or drills**.
- Every wrong answer must be wrong **for the reason given in `why`**; `why` is in Uzbek and explains the rule, not just the answer. Test each exercise mentally: would a good student, or a native speaker, accept a different answer? If yes, fix the item.
- Use the `q`/`uz` fields so the learner always has enough context; at B2 prefer context sentences and short texts over isolated gap-fills.
- Make practice **varied**: do not repeat the same kind in a row more than twice, mix recognition (choice/tf/match/listen) and production (fill/order/translate/fix/dictation).
- Markdown in text fields: `**bold**`, `*italic*`, `` `highlight` ``, `\n` line break.

## 5. Practice games (drills)

Each drill is a **game** with 10–12 exercises (**exactly 12 where you can**), easy first, **at least 5 different kinds**, no `speak`. Its game kind is fixed in `games.ts` (see `drillGame` in your spec) and the exercises must fit the game's character:
- `word-match`: pairs and meaning/usage choices for the lesson's words and collocations (several `match` of 4–6 pairs, `choice` with a definition or a context).
- `sentence-builder`: `order` and `translate` items that build correct sentences from the unit's structures; add a few `fill`.
- `grammar-detective`: `fix` and `choice` of the type "which sentence has a mistake / which is correct", sentences full of the typical Uzbek-speaker errors.
- `fill-gap`: mostly `fill` (some `choice`) in short contexts; vary forms.
- `odd-one-out`: `choice` of the type "which one does not belong / which one is not possible here", plus `tf`.
- `listening`: `listen` and `dictation` (sentences from the unit's lessons and new ones), plus comprehension `choice` of a short heard sentence.
- `conversation`: situations: a short context line then `choice`/`fill`/`order` for the best reply.
- `speed-round`: short items (`choice`, `tf`, `fill` with a one-word answer) that can be answered in a few seconds.
- `memory-review`: mixes items from **all earlier lessons of the unit** and one or two points from earlier units (B1) so that knowledge is recycled.
- `mastery`: a check of the topic: items that revisit exactly the lessons listed in `masteryDrillRevisits`; fair but demanding (B2).
- `mini-boss`: the unit's whole content (l1–l8) in 12 items, mixed kinds, increasing difficulty.
A drill may only use grammar and words that the learner has met in the unit (or in earlier levels); do not test things that were never taught.

## 6. Extras (per unit)

`extras.ts`: `canDo` (4 statements "Men … qila olaman"), `traps` (3 typical traps for Uzbek speakers, each with an explanation `md` and a valid `fix` exercise), `culture` (a short, true, interesting note about English-speaking usage related to the unit), `project` (title, prompt, 4 criteria: a real written/spoken task of 100–250 words).

## 7. Quality bar (the lead will verify)

- English must be **correct and natural** (British spelling). Examples that a native speaker would not say are a defect. Uzbek must be correct, simple and consistent (use the terminology of the B1 lessons: *majhul nisbat, zamon, fe'l, ot, sifat, ravish, bog'lovchi, predlog, ko'chirma gap…*).
- No answer-key mistakes, no two correct options, no accepted wrong answers. This is the most important rule.
- No invented facts presented as real (dates, statistics, quotations from real people). Use invented, clearly fictional names/places/data where needed, or well-known stable facts.
- Do not copy B1 or other lessons' sentences; write new material. Do not mention scorify, prices, or other products.
- No placeholder text. No "TODO". Every field filled.
- Keep the tone encouraging and respectful, adult learners, no childish jokes.

## 8. When done

Run `check-content.ts` on all your files until all ✓, then `npx tsc --noEmit -p tsconfig.app.json`. Report back (briefly): the files written, the number of words/exercises, and anything in the outline you could not follow or any judgement call.
