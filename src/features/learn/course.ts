// Outline of the Beginner course. The lesson content itself lives in content/beginner/u*/ and is
// loaded per unit, so the roadmap stays light.
import type { Lesson, LevelId, UnitMeta } from './types';

export const LEVELS: { id: LevelId; title: string; cefr: string; text: string; available: boolean }[] = [
  { id: 'beginner', title: 'Beginner', cefr: 'Noldan', text: "Ingliz tilini umuman bilmayman yoki juda kam bilaman. Harflar va tovushlardan boshlaymiz.", available: true },
  { id: 'a1', title: 'Elementary', cefr: 'A1', text: "Oddiy gaplarni tushunaman, o'zim haqimda biroz gapira olaman.", available: false },
  { id: 'a2', title: 'Pre-Intermediate', cefr: 'A2', text: "Kundalik mavzularda gaplasha olaman, lekin xatolarim ko'p.", available: false },
  { id: 'b1', title: 'Intermediate', cefr: 'B1', text: "Ko'p narsani tushunaman, fikrimni ayta olaman.", available: false },
  { id: 'b2', title: 'Upper-Intermediate', cefr: 'B2', text: "Erkin gaplashaman, murakkab matnlarni o'qiyman.", available: false },
  { id: 'c1', title: 'Advanced', cefr: 'C1', text: "Deyarli erkin, akademik ingliz tilini mukammallashtirmoqchiman.", available: false },
  { id: 'ielts', title: 'IELTS', cefr: 'IELTS', text: "IELTS imtihoniga maqsadli tayyorgarlik.", available: false },
];

export const BEGINNER_UNITS: UnitMeta[] = [
  {
    id: 'u1', n: 1, title: 'Letters & Sounds', titleUz: 'Harflar va tovushlar',
    description: "Alifbo, ingliz tovushlari, salomlashish, sonlar va birinchi so'zlar.",
    tone: 'from-rose-500 to-orange-400',
    lessons: [
      { id: 'u1-l1', title: 'The alphabet: A–M', titleUz: 'Alifbo: A–M' },
      { id: 'u1-l2', title: 'The alphabet: N–Z', titleUz: 'Alifbo: N–Z' },
      { id: 'u1-l3', title: 'Vowel sounds: short & long', titleUz: 'Unli tovushlar: qisqa va cho\'ziq' },
      { id: 'u1-l4', title: 'Letter teams: sh, ch, th…', titleUz: 'Harf birikmalari: sh, ch, th…' },
      { id: 'u1-l5', title: 'Hello! Greetings', titleUz: 'Salomlashish va xayrlashish' },
      { id: 'u1-l6', title: 'Numbers 0–20', titleUz: 'Sonlar 0–20' },
      { id: 'u1-l7', title: 'How do you spell it?', titleUz: 'Harflab aytish va sinf iboralari' },
      { id: 'u1-l8', title: 'Colours & things', titleUz: 'Ranglar va narsalar' },
    ],
  },
  {
    id: 'u2', n: 2, title: 'To be: Who am I?', titleUz: 'To be: men kimman?',
    description: "Olmoshlar, am / is / are, inkor va savol, a / an, ko'plik, this / that, egalik.",
    tone: 'from-violet-500 to-fuchsia-500',
    lessons: [
      { id: 'u2-l1', title: 'Personal pronouns', titleUz: 'Kishilik olmoshlari' },
      { id: 'u2-l2', title: 'To be: am / is / are', titleUz: 'To be: am / is / are' },
      { id: 'u2-l3', title: "To be: negatives", titleUz: "To be: inkor gaplar" },
      { id: 'u2-l4', title: 'To be: questions', titleUz: 'To be: savollar va qisqa javoblar' },
      { id: 'u2-l5', title: 'a / an & plurals', titleUz: "a / an va ko'plik" },
      { id: 'u2-l6', title: 'this / that / these / those', titleUz: 'this / that / these / those' },
      { id: 'u2-l7', title: "my, your, his… and 's", titleUz: "Egalik: my, your, his… va 's" },
      { id: 'u2-l8', title: 'Countries, nationalities & jobs', titleUz: 'Davlatlar, millatlar va kasblar' },
    ],
  },
  {
    id: 'u3', n: 3, title: 'Everyday Life', titleUz: 'Kundalik hayot',
    description: "Katta sonlar, Present Simple, vaqt, kun tartibi, in / on / at, always / never.",
    tone: 'from-sky-500 to-cyan-400',
    lessons: [
      { id: 'u3-l1', title: 'Numbers 20–100, age & prices', titleUz: 'Sonlar 20–100, yosh va narx' },
      { id: 'u3-l2', title: 'Present Simple: I / you / we / they', titleUz: 'Present Simple: I / you / we / they' },
      { id: 'u3-l3', title: 'Present Simple: he / she / it', titleUz: 'Present Simple: he / she / it' },
      { id: 'u3-l4', title: "don't / doesn't", titleUz: "Inkor: don't / doesn't" },
      { id: 'u3-l5', title: 'Do / Does questions', titleUz: 'Savollar: Do / Does' },
      { id: 'u3-l6', title: 'Time & daily routine', titleUz: 'Vaqt va kun tartibi' },
      { id: 'u3-l7', title: 'Days, months: in / on / at', titleUz: 'Kunlar, oylar: in / on / at' },
      { id: 'u3-l8', title: 'always, usually, never…', titleUz: "Qanchalik tez-tez: always, usually, never…" },
    ],
  },
  {
    id: 'u4', n: 4, title: 'The World Around Me', titleUz: 'Atrofimizdagi dunyo',
    description: "Wh-savollar, there is / are, joy predloglari, much / many, can, buyruq, have got, Present Continuous.",
    tone: 'from-emerald-500 to-teal-400',
    lessons: [
      { id: 'u4-l1', title: 'Wh- questions', titleUz: "Wh-savollar: what, where, who…" },
      { id: 'u4-l2', title: 'There is / there are', titleUz: 'There is / there are, some / any' },
      { id: 'u4-l3', title: 'Prepositions of place', titleUz: 'Joy predloglari: in, on, under…' },
      { id: 'u4-l4', title: 'Countable & uncountable', titleUz: "Sanaladigan / sanalmaydigan, much / many" },
      { id: 'u4-l5', title: "can / can't", titleUz: "can / can't: qobiliyat va iltimos" },
      { id: 'u4-l6', title: 'Imperatives & object pronouns', titleUz: 'Buyruq gaplar va me, him, her…' },
      { id: 'u4-l7', title: 'have got & family', titleUz: 'have got va oila' },
      { id: 'u4-l8', title: 'Present Continuous', titleUz: 'Present Continuous: hozir nima qilyapman' },
    ],
  },
  {
    id: 'u5', n: 5, title: 'Past & Future', titleUz: "O'tgan va kelasi zamon",
    description: "Ikki hozirgi zamon farqi, was / were, Past Simple, noto'g'ri fe'llar, going to, will, qiyoslash.",
    tone: 'from-amber-500 to-yellow-400',
    lessons: [
      { id: 'u5-l1', title: 'Present Simple vs Continuous', titleUz: 'Present Simple yoki Continuous?' },
      { id: 'u5-l2', title: 'was / were', titleUz: "O'tgan zamon: was / were" },
      { id: 'u5-l3', title: 'Past Simple: regular verbs', titleUz: "Past Simple: to'g'ri fe'llar (-ed)" },
      { id: 'u5-l4', title: 'Irregular verbs 1', titleUz: "Noto'g'ri fe'llar 1" },
      { id: 'u5-l5', title: "Irregular verbs 2: didn't, Did…?", titleUz: "Noto'g'ri fe'llar 2, didn't va Did…?" },
      { id: 'u5-l6', title: 'Future: be going to', titleUz: 'Kelasi zamon: be going to' },
      { id: 'u5-l7', title: 'Future: will', titleUz: 'Kelasi zamon: will' },
      { id: 'u5-l8', title: 'Comparatives & superlatives', titleUz: "Qiyoslash: bigger, the biggest" },
    ],
  },
];

export const UNIT_TEST = {
  /** Share of correct answers needed to pass a unit test. */
  passPercent: 80,
  questions: 20,
  attempts: 2,
  lockHours: 48,
} as const;

export const LESSON_PASS_PERCENT = 70;
/** Free plan users can learn for this many days after they start. */
export const TRIAL_DAYS = 7;
/** The in-lesson "Ask AI mentor" button. Off until the mentor is opened for the course. */
export const LESSON_MENTOR_ENABLED = false;

export const ALL_LESSONS = BEGINNER_UNITS.flatMap((u) => u.lessons.map((l) => ({ ...l, unitId: u.id })));

const unitLoaders: Record<string, () => Promise<{ lessons: Lesson[] }>> = {
  u1: () => import('./content/beginner/u1'),
  u2: () => import('./content/beginner/u2'),
  u3: () => import('./content/beginner/u3'),
  u4: () => import('./content/beginner/u4'),
  u5: () => import('./content/beginner/u5'),
};

export async function loadUnit(unitId: string): Promise<Lesson[]> {
  const load = unitLoaders[unitId];
  if (!load) throw new Error(`Unknown unit ${unitId}`);
  return (await load()).lessons;
}

export async function loadLesson(lessonId: string): Promise<{ lesson: Lesson; previous: Lesson | null }> {
  const index = ALL_LESSONS.findIndex((l) => l.id === lessonId);
  if (index < 0) throw new Error(`Unknown lesson ${lessonId}`);
  const meta = ALL_LESSONS[index];
  const lessons = await loadUnit(meta.unitId);
  const lesson = lessons.find((l) => l.id === lessonId);
  if (!lesson) throw new Error(`Lesson ${lessonId} is not written yet`);
  let previous: Lesson | null = null;
  if (index > 0) {
    const prevMeta = ALL_LESSONS[index - 1];
    const prevLessons = prevMeta.unitId === meta.unitId ? lessons : await loadUnit(prevMeta.unitId);
    previous = prevLessons.find((l) => l.id === prevMeta.id) ?? null;
  }
  return { lesson, previous };
}
