import type { Lesson } from '../../../types';

// Mini lesson (grammar): Present Continuous questions and short answers.
const lesson: Lesson = {
  id: 'u4-l16',
  title: 'Present Continuous: questions',
  titleUz: "Present Continuous: savollar va qisqa javoblar",
  mini: true,
  goal: "Hozir bo'layotgan ish haqida **savol berasiz** va **qisqa javob** qaytarasiz: *Are you working? — Yes, I am.* *Is she sleeping? — No, she isn't.* *What are you doing?*",
  slides: [
    {
      title: 'Ha / yo\'q savollari',
      blocks: [
        { t: 'p', md: "Savol tuzish uchun **am / is / are** ni egadan **oldinga** o'tkazing. **Do / does kerak emas.**" },
        {
          t: 'table', head: ['Darak', 'Savol'], speak: [0, 1],
          rows: [
            ['You are working.', 'Are you working?'],
            ['She is sleeping.', 'Is she sleeping?'],
            ['They are eating lunch.', 'Are they eating lunch?'],
            ['I am talking too much.', 'Am I talking too much?'],
          ],
        },
        {
          t: 'compare',
          good: { title: "To'g'ri", items: ['Are you working?', 'Is she sleeping?', 'Are they eating lunch?'] },
          bad: { title: "Noto'g'ri", items: ['Do you working?', 'Does she sleeping?', 'You are working?'] },
        },
        { t: 'check', ex: { k: 'order', uz: 'U (ayol) uxlayaptimi?', words: ['Is', 'she', 'sleeping'], extra: ['Does', 'Are'], why: "**Is + she + sleeping?**" } },
      ],
    },
    {
      title: 'Qisqa javoblar',
      blocks: [
        { t: 'p', md: "Savolga **Yes/No + ega + am/is/are** deb qisqa javob beriladi. Fe'lni (-ing) takrorlamaysiz." },
        {
          t: 'table', head: ['Savol', 'Ha', "Yo'q"], speak: [0, 1, 2],
          rows: [
            ['Are you working?', 'Yes, I am.', "No, I'm not."],
            ['Is she sleeping?', 'Yes, she is.', "No, she isn't."],
            ['Are they eating?', 'Yes, they are.', "No, they aren't."],
          ],
        },
        { t: 'tip', tone: 'warn', md: "**Ha** javobda qisqartma yo'q: *Yes, I am.* ✅ — *Yes, I'm.* ❌ — *Yes, she's.* ❌. **Yo'q** javobda esa bo'ladi: *No, she isn't. / No, she's not.*" },
        { t: 'check', ex: { k: 'fill', q: 'Is your brother studying? — Yes, he ___.', a: ['is'], why: "Qisqa ijobiy javob: **Yes, he is.**" } },
        { t: 'check', ex: { k: 'fill', q: 'Are they playing? — No, they ___.', a: ["aren't", 'are not', "'re not"], why: "**No, they aren't.**" } },
      ],
    },
    {
      title: 'Wh-savollar',
      blocks: [
        { t: 'p', md: "So'roq so'zi (**what, where, who, why**) gap boshiga qo'yiladi, keyin xuddi shu tartib: **so'roq so'zi + am/is/are + ega + -ing?**" },
        {
          t: 'examples', items: [
            { en: 'What are you doing?', uz: 'Nima qilyapsiz?', note: "Javob: *I'm doing my homework.* (Yes/No emas)" },
            { en: 'Where is he going?', uz: 'U qayerga ketyapti?' },
            { en: 'Why are you laughing?', uz: 'Nega kulyapsiz?' },
            { en: 'Who is she talking to?', uz: 'U kim bilan gaplashyapti?' },
          ],
        },
        { t: 'check', ex: { k: 'choice', q: "Qaysi savol to'g'ri?", opts: ['What you are doing?', 'What do you doing?', 'What are you doing?', 'What you doing?'], a: 2, why: "**What + are + you + doing?**" } },
        { t: 'check', ex: { k: 'choice', q: "Are you free now? — ", opts: ["Yes, I'm.", 'Yes, I am.', 'Yes, I do.', 'Yes, I free.'], a: 1, why: "**Yes, I am.**" } },
      ],
    },
  ],
  words: [
    { en: 'free', uz: "bo'sh, band emas", ipa: 'friː', pos: 'adjective', ex: 'Are you free now?', exUz: "Hozir bo'shmisiz?" },
    { en: 'bored', uz: "zerikkan", ipa: 'bɔːd', pos: 'adjective', ex: "No, I'm not bored.", exUz: "Yo'q, zerikkanim yo'q." },
    { en: 'outside', uz: 'tashqarida', ipa: 'ˌaʊtˈsaɪd', pos: 'adverb', ex: 'The children are playing outside.', exUz: 'Bolalar tashqarida o\'ynayapti.' },
    { en: 'inside', uz: 'ichkarida', ipa: 'ˌɪnˈsaɪd', pos: 'adverb', ex: 'Is he sitting inside?', exUz: "U ichkarida o'tiribdimi?" },
    { en: 'lunch', uz: 'tushlik', ipa: 'lʌntʃ', pos: 'noun', ex: 'Are you having lunch?', exUz: 'Tushlik qilyapsizmi?' },
    { en: 'homework', uz: 'uy vazifasi', ipa: 'ˈhəʊm.wɜːk', pos: 'noun', ex: 'What are you doing? — My homework.', exUz: 'Nima qilyapsiz? — Uy vazifamni.' },
  ],
  practice: [
    { k: 'match', pairs: [['free', "bo'sh"], ['bored', 'zerikkan'], ['outside', 'tashqarida'], ['inside', 'ichkarida'], ['lunch', 'tushlik'], ['homework', 'uy vazifasi']] },
    { k: 'choice', q: '___ they playing outside?', opts: ['Do', 'Does', 'Are', 'Is'], a: 2, why: "**they** → **Are**." },
    { k: 'choice', q: '___ your mother cooking lunch?', opts: ['Are', 'Is', 'Do', 'Does'], a: 1, why: "**your mother** = she → **Is**." },
    { k: 'choice', q: "Is he doing his homework? — ", opts: ["Yes, he's.", 'Yes, he does.', 'Yes, he is.', 'Yes, he doing.'], a: 2, why: "**Yes, he is.**" },
    { k: 'fill', q: '___ you studying now? — Yes, I am.', a: ['Are'], why: "**you** → **Are**." },
    { k: 'fill', q: 'Is she eating lunch? — No, she ___.', a: ["isn't", 'is not', "'s not"], why: "**No, she isn't.**" },
    { k: 'fill', q: 'Are you bored? — No, I ___.', a: ["'m not", 'am not', "I'm not"], why: "**I am not / I'm not** — *amn't* bo'lmaydi." },
    { k: 'listen', say: 'Is he sleeping?', opts: ['Is he sleeping?', 'Is she sleeping?', 'Does he sleep?', 'Are they sleeping?'], a: 0 },
    { k: 'dictation', say: 'Are you doing your homework?', a: ['Are you doing your homework?', 'Are you doing your homework'] },
    { k: 'fix', wrong: 'Do you working now?', a: ['Are you working now?'], hint: 'Continuous savolini nima tuzadi?', why: "**Are you working?** — do kerak emas." },
    { k: 'fix', wrong: 'Is they sitting inside?', a: ['Are they sitting inside?'], hint: 'they bilan qaysi shakl?', why: "**they → Are**." },
    { k: 'order', uz: 'Nega kulyapsan?', words: ['Why', 'are', 'you', 'laughing'], extra: ['do'], why: "**Why + are + you + -ing?**" },
    { k: 'translate', uz: "Siz hozir bo'shmisiz?", a: ['Are you free now?', 'Are you free now', 'Are you free?'] },
    { k: 'translate', uz: "Ular tashqarida o'ynayaptimi?", a: ['Are they playing outside?', 'Are they playing outside'] },
    { k: 'speak', say: "Are you working? Yes, I am.", uz: "Savol va javobni ayting" },
  ],
  quiz: [
    { k: 'choice', q: '___ it raining outside?', opts: ['Is', 'Are', 'Do', 'Does'], a: 0 },
    { k: 'choice', q: "Are they having lunch? — ", opts: ["Yes, they're.", 'Yes, they are.', 'Yes, they do.', 'Yes, they has.'], a: 1 },
    { k: 'choice', q: "Qaysi savol to'g'ri?", opts: ['Does he sleeping?', 'He is sleeping?', 'Is he sleeping?', 'Is he sleep?'], a: 2 },
    { k: 'listen', say: 'Are you free now?', opts: ['Are you free now?', 'Are you busy now?', 'Do you free now?', 'Is she free now?'], a: 0 },
    { k: 'fill', q: 'What ___ he doing?', a: ['is'] },
    { k: 'fill', q: 'Is your sister working? — No, she ___.', a: ["isn't", 'is not', "'s not"] },
    { k: 'order', uz: 'Siz hozir nima qilyapsiz?', words: ['What', 'are', 'you', 'doing', 'now'], extra: ['do'] },
    { k: 'translate', uz: 'U (erkak) uxlayaptimi?', a: ['Is he sleeping?', 'Is he sleeping'] },
    { k: 'fix', wrong: 'Yes, I\'m.', a: ['Yes, I am.'], hint: 'Ha javobda qisqartma ishlatilmaydi.', why: "**Yes, I am.**" },
  ],
  summary: [
    "Savol: **Am / Is / Are + ega + -ing?** — *Are you working?* (do/does yo'q).",
    "Qisqa javob: **Yes, I am. / No, she isn't.** — fe'l takrorlanmaydi; *Yes, I'm* ❌.",
    "Wh-savol: **What are you doing? Where is he going?**",
    "Yangi so'zlar: **free, bored, outside, inside, lunch, homework**.",
  ],
  homework: "Oila a'zolari haqida 5 ta ha/yo'q savol yozing (*Is your mother cooking?*) va har biriga qisqa javob bering. Keyin 3 ta Wh-savol qo'shing.",
};

export default lesson;
