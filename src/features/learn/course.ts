// Outline of the course. Units are numbered through all levels (Beginner u1–u5, then Elementary from u6), so a learner
// who finishes one level simply continues with the next. The lesson content lives in content/<level>/u*/ and is
// loaded per unit, so the roadmap stays light.
import type { Lesson, LevelId, UnitMeta } from './types';

/** Elementary (A1) is open. Set to false to hide it again without touching the lessons. */
const A1_OPEN = true;

export const LEVELS: { id: LevelId; title: string; cefr: string; text: string; available: boolean }[] = [
  { id: 'beginner', title: 'Beginner', cefr: 'Noldan', text: "Ingliz tilini umuman bilmayman yoki juda kam bilaman. Harflar va tovushlardan boshlaymiz.", available: true },
  { id: 'a1', title: 'Elementary', cefr: 'A1', text: "Oddiy gaplarni tushunaman, o'zim haqimda biroz gapira olaman.", available: A1_OPEN },
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
    level: 'beginner', tone: 'from-rose-500 to-orange-400',
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
    level: 'beginner', tone: 'from-violet-500 to-fuchsia-500',
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
    level: 'beginner', tone: 'from-sky-500 to-cyan-400',
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
    level: 'beginner', tone: 'from-emerald-500 to-teal-400',
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
    level: 'beginner', tone: 'from-amber-500 to-yellow-400',
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

// Elementary (A1): 6 units × 8 lessons, written in content/a1.
export const A1_UNITS: UnitMeta[] = [
  {
    id: "u6", n: 6, level: 'a1', title: "People & Places", titleUz: "Odamlar va joylar",
    description: "Tanishuv, odamlarni tasvirlash, mine / yours, tartib sonlar va sanalar, uy, shahar va yo'l so'rash, a / the.",
    tone: "from-indigo-500 to-blue-400",
    lessons: [
      { id: "u6-l1", title: "Nice to meet you!", titleUz: "Tanishuv va qisqa suhbat" },
      { id: "u6-l2", title: "What does she look like?", titleUz: "Tashqi ko'rinishni tasvirlash" },
      { id: "u6-l3", title: "Personality: very, quite, really", titleUz: "Xarakter va sifatlar: very, quite, really" },
      { id: "u6-l4", title: "mine, yours… Whose?", titleUz: "Egalik olmoshlari: mine, yours… va Whose?" },
      { id: "u6-l5", title: "Ordinal numbers & dates", titleUz: "Tartib sonlar va sanalar" },
      { id: "u6-l6", title: "My home", titleUz: "Mening uyim: xonalar va jihozlar" },
      { id: "u6-l7", title: "In town: asking the way", titleUz: "Shaharda: yo'l so'rash va ko'rsatish" },
      { id: "u6-l8", title: "a / an / the / no article", titleUz: "Artikllar: a / an / the yoki artiklsiz" },
    ],
  },
  {
    id: "u7", n: 7, level: 'a1', title: "Work & Free Time", titleUz: "Ish va bo'sh vaqt",
    description: "Kasblar, like / love / hate + -ing, ravishlar, play / go / do, rejalar, would like, takliflar, soat va jadval.",
    tone: "from-pink-500 to-rose-400",
    lessons: [
      { id: "u7-l1", title: "Jobs & workplaces", titleUz: "Kasblar va ish joylari" },
      { id: "u7-l2", title: "like, love, hate + -ing", titleUz: "Yoqtirish: like, love, hate + -ing" },
      { id: "u7-l3", title: "Adverbs: quickly, well, hard", titleUz: "Ravishlar: quickly, well, hard" },
      { id: "u7-l4", title: "Sports & hobbies: play, go, do", titleUz: "Sport va hobbi: play, go, do" },
      { id: "u7-l5", title: "Plans: Present Continuous for future", titleUz: "Rejalar: Present Continuous kelasi zamon uchun" },
      { id: "u7-l6", title: "would like & invitations", titleUz: "would like, taklif qilish va javob berish" },
      { id: "u7-l7", title: "Time & timetables", titleUz: "Soat, jadval: from… to, until, before, after" },
      { id: "u7-l8", title: "Questions: How often? How long?…", titleUz: "Savollar: How often, How long, How far…" },
    ],
  },
  {
    id: "u8", n: 8, level: 'a1', title: "Food & Shopping", titleUz: "Ovqat va xarid",
    description: "Ovqat, idishlar (a cup of…), a few / a little, narx va pul, kafeda buyurtma, kiyim do'koni, retsept, should, qiyoslash.",
    tone: "from-orange-500 to-amber-400",
    lessons: [
      { id: "u8-l1", title: "Food & containers: a cup of…", titleUz: "Ovqat va o'lchovlar: a cup of, a bottle of…" },
      { id: "u8-l2", title: "a lot of, a few, a little, no", titleUz: "Miqdor: a lot of, a few, a little, no" },
      { id: "u8-l3", title: "Money & prices", titleUz: "Pul, narx va How much?" },
      { id: "u8-l4", title: "At the café", titleUz: "Kafeda: buyurtma berish" },
      { id: "u8-l5", title: "Shopping for clothes", titleUz: "Kiyim do'konida: o'lcham, rang, too big" },
      { id: "u8-l6", title: "Recipes: first, then, finally", titleUz: "Retsept: first, then, after that, finally" },
      { id: "u8-l7", title: "Healthy habits: should / shouldn't", titleUz: "Sog'lom odatlar: should / shouldn't" },
      { id: "u8-l8", title: "Comparing: better, the best, as… as", titleUz: "Qiyoslash: better, the best, as… as" },
    ],
  },
  {
    id: "u9", n: 9, level: 'a1', title: "Stories from the Past", titleUz: "O'tmishdan hikoyalar",
    description: "Past Simple chuqurroq: ago / last, yangi noto'g'ri fe'llar, Wh-savollar, there was, could, tarjimai hol, hikoya qilish.",
    tone: "from-teal-500 to-emerald-400",
    lessons: [
      { id: "u9-l1", title: "Yesterday, last week, two days ago", titleUz: "O'tgan zamon vaqt so'zlari: ago, last, yesterday" },
      { id: "u9-l2", title: "Irregular verbs 3", titleUz: "Noto'g'ri fe'llar 3" },
      { id: "u9-l3", title: "Where did you go? What did you do?", titleUz: "O'tgan zamonda Wh-savollar" },
      { id: "u9-l4", title: "there was / were, could / couldn't", titleUz: "there was / were va could / couldn't" },
      { id: "u9-l5", title: "Life stories", titleUz: "Hayot yo'li: born, grew up, moved…" },
      { id: "u9-l6", title: "Telling a story: and, but, so, because", titleUz: "Hikoya qilish: and, but, so, because" },
      { id: "u9-l7", title: "Holidays & transport", titleUz: "Ta'til va transport: by bus, on foot" },
      { id: "u9-l8", title: "Irregular verbs 4", titleUz: "Noto'g'ri fe'llar 4 va o'tgan zamon takrori" },
    ],
  },
  {
    id: "u10", n: 10, level: 'a1', title: "Travel & Health", titleUz: "Sayohat va sog'liq",
    description: "Ob-havo, aeroport va vokzal, mehmonxona, Could I…?, will yoki going to, kasallik va maslahat, have to, must.",
    tone: "from-cyan-500 to-sky-400",
    lessons: [
      { id: "u10-l1", title: "What's the weather like?", titleUz: "Ob-havo va fasllar" },
      { id: "u10-l2", title: "At the station & airport", titleUz: "Vokzal va aeroportda" },
      { id: "u10-l3", title: "At the hotel: Could I…?", titleUz: "Mehmonxonada: Can I / Could I…?" },
      { id: "u10-l4", title: "will or going to?", titleUz: "will yoki going to?" },
      { id: "u10-l5", title: "What's the matter?", titleUz: "Sog'liq: What's the matter? I've got a headache" },
      { id: "u10-l6", title: "have to / don't have to", titleUz: "Majburiyat: have to / don't have to" },
      { id: "u10-l7", title: "must / mustn't: rules & signs", titleUz: "Qoidalar: must / mustn't" },
      { id: "u10-l8", title: "Writing a message or email", titleUz: "Xabar va xat yozish" },
    ],
  },
  {
    id: "u11", n: 11, level: 'a1', title: "Experiences", titleUz: "Tajribalar va yakun",
    description: "Present Perfect bilan tanishuv, ever / never, been / gone, fe'l + to / -ing, harakat predloglari, phrasal verbs, A1 yakuniy takrori.",
    tone: "from-purple-500 to-violet-400",
    lessons: [
      { id: "u11-l1", title: "Have you ever…?", titleUz: "Present Perfect: Have you ever…?" },
      { id: "u11-l2", title: "Past participles; been or gone?", titleUz: "3-shakl fe'llar va been / gone" },
      { id: "u11-l3", title: "Present Perfect or Past Simple?", titleUz: "Present Perfect yoki Past Simple?" },
      { id: "u11-l4", title: "Prepositions of movement", titleUz: "Harakat predloglari: into, across, along…" },
      { id: "u11-l5", title: "want to, enjoy -ing", titleUz: "Fe'l + to yoki -ing: want to, enjoy -ing" },
      { id: "u11-l6", title: "when, before, after, or", titleUz: "Gaplarni bog'lash: when, before, after, or" },
      { id: "u11-l7", title: "Everyday phrasal verbs", titleUz: "Kundalik phrasal verbs: get up, put on…" },
      { id: "u11-l8", title: "A1 review: all the tenses", titleUz: "A1 yakuniy takrori: barcha zamonlar" },
    ],
  },
];

/** Levels that are only partly released: shown under their units. */
export const PARTIAL_LEVELS: Partial<Record<LevelId, string>> = {};

/** Every unit of every level, in course order. */
export const COURSE_UNITS: UnitMeta[] = [...BEGINNER_UNITS, ...(A1_OPEN ? A1_UNITS : [])];

/** Every unit that is written, released or not (the content tests and the audio generator use this). */
export const WRITTEN_UNITS: UnitMeta[] = [...BEGINNER_UNITS, ...A1_UNITS];

export function unitsOf(level: LevelId): UnitMeta[] {
  return COURSE_UNITS.filter((u) => u.level === level);
}

/** Position of a unit inside its level (1-based): Elementary starts again at 1. */
export function unitNo(unit: UnitMeta): number {
  return unitsOf(unit.level).findIndex((u) => u.id === unit.id) + 1;
}

export function levelOf(levelId: string | null | undefined) {
  return LEVELS.find((l) => l.id === levelId) ?? LEVELS[0];
}

export const UNIT_TEST = {
  /** Share of correct answers needed to pass a unit test. */
  passPercent: 80,
  questions: 20,
  attempts: 2,
  lockHours: 48,
} as const;

/** Choosing Elementary starts with a placement test on the Beginner course; failing twice means starting at Beginner. */
export const PLACEMENT = { questions: 20, passPercent: 70, attempts: 2 } as const;

/** Final test of a level: always open at the end of the level, retake as often as needed. */
export const LEVEL_TEST = { questions: 20, passPercent: 70 } as const;

export const LESSON_PASS_PERCENT = 70;
/** Free plan users can learn for this many days after they start. */
export const TRIAL_DAYS = 7;
/** The in-lesson "Ask AI mentor" button. Off until the mentor is opened for the course. */
export const LESSON_MENTOR_ENABLED = false;

export const ALL_LESSONS = COURSE_UNITS.flatMap((u) => u.lessons.map((l) => ({ ...l, unitId: u.id, level: u.level })));

const unitLoaders: Record<string, () => Promise<{ lessons: Lesson[] }>> = {
  u1: () => import('./content/beginner/u1'),
  u2: () => import('./content/beginner/u2'),
  u3: () => import('./content/beginner/u3'),
  u4: () => import('./content/beginner/u4'),
  u5: () => import('./content/beginner/u5'),
  u6: () => import('./content/a1/u6'),
  u7: () => import('./content/a1/u7'),
  u8: () => import('./content/a1/u8'),
  u9: () => import('./content/a1/u9'),
  u10: () => import('./content/a1/u10'),
  u11: () => import('./content/a1/u11'),
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
