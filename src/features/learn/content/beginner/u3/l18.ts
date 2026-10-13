import type { Lesson } from '../../../types';

// Real-life scene: arranging to meet a friend. Present Simple, in / on / at, clock times, days.
// New: Let's meet ...
const lesson: Lesson = {
  id: 'u3-l18',
  title: 'Real life: arranging to meet',
  titleUz: 'Real hayot: uchrashuv vaqtini kelishish',
  mini: true,
  kind: 'scene',
  goal: "Do'stingiz bilan **uchrashuv kelishasiz**: kun va vaqtni to'g'ri **in / on / at** bilan aytasiz, rozi bo'lasiz yoki muloyim rad etasiz.",
  slides: [], words: [], practice: [], quiz: [],
  summary: [
    "**Let's meet on Saturday.** — «Shanba kuni uchrashaylik.»",
    "**on** + kun (**on Saturday**), **at** + soat (**at six**), **in** + kun qismi (**in the evening**).",
    "**Do you work on Saturday? — No, I don't.** — qisqa javob **do / don't** bilan.",
    "Rad etish: **Sorry, I work on Sunday.**; xayrlashish: **See you on Saturday at six!**",
  ],
  homework: "Do'stingizga xabar yozing: **Let's meet on ... at ...** Kun va soatni o'zingiz tanlang. **on / at / in** ni tekshiring.",
  scene: {
    place: 'time',
    partner: { name: 'Sara', role: "Do'st", voice: 'emma', emoji: '👩' },
    intro: "Siz — **Ali**. Do'stingiz **Sara** siz bilan uchrashmoqchi. Qaysi kunlar bo'sh ekanini ayting, kun va vaqtni kelishing.",
    steps: [
      { k: 'say', en: 'Hi, Ali! Do you work on Saturday?', uz: 'Salom, Ali! Shanba kuni ishlaysizmi?' },
      {
        k: 'pick', ask: "Shanba kuni ishlamaysiz. Qisqa javob bering.",
        opts: [
          { en: "No, I don't.", ok: true },
          { en: "No, I don't work on Saturday.", ok: true },
          { en: "No, I'm not.", why: "**Do you work...?** savoliga **do / don't** bilan javob beramiz: **No, I don't.** **I'm not** — **am** bilan savolga." },
          { en: "No, I doesn't.", why: "**I** bilan **doesn't** emas, **don't**: **No, I don't.**" },
          { en: 'Yes, I do.', why: "Siz shanba kuni ishlamaysiz, shuning uchun javob **No, I don't.**" },
        ],
        why: "**Do you work...?** → **No, I don't.**",
        drill: { k: 'choice', q: "**Do you work on Sunday?** Javob (ha, ishlayman):", opts: ['Yes, I am.', 'Yes, I do.', 'Yes, I does.'], a: 1, why: "**Do you ...?** → **Yes, I do.**" },
      },
      { k: 'say', en: 'Great! What time do you finish work?', uz: 'Zo\'r! Ishni soat nechada tugatasiz?' },
      {
        k: 'type', ask: "Ishni soat beshda tugatasiz: «Men beshda tugataman.»",
        a: ['I finish at five.', 'I finish at five o\'clock.', 'I finish work at five.', 'I finish work at five o\'clock.', 'I finish at 5.', 'At five.', 'At five o\'clock.'],
        mistakes: [
          { a: ['I finish in five', 'I finish on five', 'I finish in five o\'clock', 'I finish on five o\'clock'], why: "Aniq soat oldidan **at** keladi: **at five**. **in** va **on** emas." },
          { a: ['I finishes at five'], why: "**I** bilan fe'lga **-s** qo'yilmaydi: **I finish**." },
        ],
        why: "**I finish at five.** — soat oldidan **at**.", hint: 'I finish ... five.',
      },
      { k: 'say', en: "OK. Let's meet on Sunday at ten!", uz: "Xo'p. Yakshanba kuni soat o'nda uchrashaylik!" },
      { k: 'note', title: "Taklif: Let's meet ...", md: "**Let's meet on Saturday.** — «Shanba kuni uchrashaylik.»\n\n**Let's** = **let us** — «keling, ...aylik». Undan keyin fe'l oddiy shaklda: **Let's meet**.\n\nKun oldidan **on** (**on Saturday**), soat oldidan **at** (**at six**), kun qismi oldidan **in** (**in the evening**)." },
      {
        k: 'pick', ask: "Yakshanba kuni ishlaysiz. Muloyim rad eting.",
        opts: [
          { en: 'Sorry, I work on Sunday.', ok: true },
          { en: 'Sorry, I work on Sunday. Is Saturday OK?', ok: true },
          { en: "Sorry, I don't work on Sunday.", why: "Bu «yakshanba kuni ishlamayman» degani. Siz ishlaysiz: **I work on Sunday.**" },
          { en: 'Yes, great! See you on Sunday.', why: "Bu rozilik. Siz yakshanba kuni ishlaysiz, shuning uchun muloyim rad eting: **Sorry, I work on Sunday.**" },
          { en: 'No. Sunday.', why: "Juda qisqa va quruq eshitiladi. Muloyim: **Sorry, I work on Sunday.**" },
        ],
        why: "Rad etish: **Sorry, I work on Sunday.** (**Sorry** — muloyimlik).",
      },
      { k: 'say', en: 'OK. What day is good for you?', uz: 'Xo\'p. Qaysi kun sizga qulay?' },
      {
        k: 'fill', ask: "Shanba kunini taklif qiling: «Shanba kuni uchrashaylik.»", q: "Let's meet ___ Saturday.", a: ['on'],
        mistakes: [{ a: ['in'], why: "Hafta kunlari oldidan **on**: **on Saturday**. (**in** — oy va kun qismi uchun: in May, in the evening.)" }, { a: ['at'], why: "**at** — aniq soat uchun (**at six**). Kun oldidan **on**: **on Saturday**." }],
        why: "Kun oldidan **on**: **on Saturday**.", hint: 'kun oldidan...',
        drill: { k: 'choice', q: "To'g'ri variantni tanlang.", opts: ['in Saturday', 'on Saturday', 'at Saturday'], a: 1, why: "Kun oldidan **on**: **on Saturday**." },
      },
      { k: 'say', en: 'Saturday is good! In the morning or in the evening?', uz: 'Shanba yaxshi! Ertalabmi yoki kechqurunmi?' },
      {
        k: 'fill', ask: "Kechqurun bo'lsin: «Kechqurun uchrashaylik.»", q: "Let's meet ___ the evening.", a: ['in'],
        mistakes: [{ a: ['on'], why: "Kunning qismi oldidan **in**: **in the evening**, **in the morning**. **on** — aniq kun uchun." }, { a: ['at'], why: "**at** — aniq soat uchun (**at six**). Kun qismi oldidan **in**: **in the evening**." }],
        why: "Kun qismi oldidan **in**: **in the evening**.", hint: 'kun qismi oldidan...',
      },
      { k: 'say', en: 'Great! What time?', uz: 'Zo\'r! Soat nechada?' },
      {
        k: 'build', ask: "Soat oltida kelishing: «Soat oltida uchrashaylik.»", words: ["Let's", 'meet', 'at', 'six'], extra: ['on', 'in', 'meets'],
        alt: [["Let's", 'meet', 'at', 'six', "o'clock"]],
        mistakes: [
          { a: ["Let's meet on six", "Let's meet in six"], why: "Soat oldidan **at** keladi: **at six**. **on** kun uchun, **in** kun qismi uchun." },
          { a: ["Let's meets at six"], why: "**Let's** dan keyin fe'l oddiy shaklda: **Let's meet**." },
        ],
        why: "Soat oldidan **at**: **Let's meet at six.**",
        drill: { k: 'fill', q: 'We have lunch ___ one o\'clock.', a: ['at'], why: "Soat oldidan **at**: **at one o'clock**." },
      },
      { k: 'say', en: 'Great! Saturday evening at six.', uz: 'Zo\'r! Shanba kuni kechqurun soat oltida.' },
      {
        k: 'type', ask: "Xayrlashing: «Shanba kuni soat oltida ko'rishamiz!»",
        a: ['See you on Saturday at six!', 'See you on Saturday at six o\'clock!', 'See you at six on Saturday!', 'See you on Saturday!', 'See you on Saturday at 6!'],
        mistakes: [
          { a: ['See you at Saturday at six', 'See you at Saturday'], why: "Kun oldidan **on**: **See you on Saturday!** (**at** — soat uchun.)" },
          { a: ['See you on Saturday on six', 'See you on Saturday in six'], why: "Soat oldidan **at**: **at six**." },
        ],
        why: "**See you on Saturday at six!** — kun: **on**, soat: **at**.", hint: 'See you ... Saturday ... six!',
      },
    ],
    outro: "Siz do'stingiz bilan **kun va vaqtni kelishdingiz**. **on** — kun, **at** — soat, **in** — kun qismi: bu uchlikni endi bilasiz.",
  },
};

export default lesson;
