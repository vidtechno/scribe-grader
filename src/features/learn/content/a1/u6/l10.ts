import type { Lesson } from '../../../types';

// Mini lesson (situation): lost in the city. Recycles pharmacy, traffic lights, crossroads, corner, turn, straight on.
const lesson: Lesson = {
  id: 'u6-l10',
  title: 'Lost in the city: asking the way',
  titleUz: "Shaharda adashdim: yo'l so'rash",
  mini: true,
  goal: "Shaharda adashib qolsangiz, **muloyim yo'l so'raysiz** (*Excuse me, how do I get to the station?*) va javobni tushunasiz: *Go straight on, turn left at the traffic lights.*",
  slides: [
    {
      title: "Vaziyat: adashib qoldim",
      blocks: [
        { t: 'p', md: "Siz notanish shaharda adashdingiz. Yo'lovchiga **Excuse me** bilan murojaat qiling, so'ng joyni so'rang va javobni diqqat bilan tinglang." },
        { t: 'dialog', lines: [
          { who: 'Tom', en: "Excuse me, I'm lost. How do I get to the metro station?", uz: "Kechirasiz, men adashdim. Metro bekatiga qanday boraman?" },
          { who: 'Woman', en: 'Go straight on. Turn left at the traffic lights.', uz: "To'g'riga yuring. Svetoforda chapga buriling." },
          { who: 'Tom', en: 'Is it far?', uz: 'Uzoqmi?' },
          { who: 'Woman', en: "No, it isn't. It's about five minutes on foot. It's opposite the pharmacy.", uz: "Yo'q. Piyoda taxminan besh daqiqa. U dorixonaning qarshisida." },
          { who: 'Tom', en: 'Sorry, can you say that again, please?', uz: 'Kechirasiz, iltimos, yana bir marta ayta olasizmi?' },
          { who: 'Woman', en: 'Sure. Straight on, then left at the traffic lights.', uz: "Albatta. To'g'riga, keyin svetoforda chapga." },
          { who: 'Tom', en: 'Thank you very much!', uz: 'Katta rahmat!' },
        ] },
        { t: 'check', ex: { k: 'choice', q: "\"Go straight on\" nimani anglatadi?", opts: ["To'g'riga yuring", 'Chapga buriling', "O'ngga buriling", "Ortga qayting"], a: 0, why: "**straight on** — to'g'riga." } },
      ],
    },
    {
      title: "Yo'l so'rash va ko'rsatish",
      blocks: [
        { t: 'table', head: ['Inglizcha', "Ma'nosi"], speak: [0], rows: [
          ["Excuse me, I'm lost.", 'Kechirasiz, adashdim.'],
          ['How do I get to the bank?', 'Bankka qanday boraman?'],
          ['Is there a pharmacy near here?', 'Yaqin atrofda dorixona bormi?'],
          ['Go straight on.', "To'g'riga yuring."],
          ['Turn left / right at the crossroads.', 'Chorrahada chapga / o\'ngga buriling.'],
          ['Take the second left.', 'Ikkinchi chapga buriling.'],
          ['It\'s opposite the bank.', 'U bankning qarshisida.'],
          ['Can you say that again, please?', 'Yana bir marta ayta olasizmi?'],
        ] },
        { t: 'tip', tone: 'good', md: "Tushunmasangiz: **Sorry, can you say that again, please?** Sekinroq so'rash: *Can you speak more slowly, please?* Oxirida: *Thank you very much!*" },
        { t: 'check', ex: { k: 'fill', q: 'Turn left ___ the traffic lights.', a: ['at'], uz: 'Svetoforda chapga buriling.', why: "Joy oldidan **at**: *at the traffic lights, at the corner*." } },
      ],
    },
    {
      title: "Ehtiyot bo'ling: tez-tez uchraydigan xatolar",
      blocks: [
        { t: 'compare', good: { title: "To'g'ri", items: ['How do I get to the station?', 'Is there a bank near here?', 'Turn left at the corner.'] }, bad: { title: "Noto'g'ri", items: ['How I get to the station?', 'There is a bank near here?', 'Turn to left in the corner.'] } },
        { t: 'p', md: "Eslatma: **Excuse me** — notanish odamga murojaat; **Sorry** — kechirim so'rash yoki tushunmaganingizda. *Hey, you!* — qo'pol." },
        { t: 'check', ex: { k: 'choice', q: "Notanish odamga birinchi nima deysiz?", opts: ['Hey, you!', 'Excuse me,', 'Where, street?', 'Give me the way.'], a: 1, why: "Muloyim murojaat: **Excuse me,**" } },
      ],
    },
  ],
  words: [
    { en: 'lost', uz: 'adashgan', ipa: 'lɒst', pos: 'adjective', ex: "I'm lost. Can you help me?", exUz: 'Men adashdim. Yordam bera olasizmi?' },
    { en: 'opposite', uz: 'qarshisida', ipa: 'ˈɒp.ə.zɪt', pos: 'preposition', ex: "The bank is opposite the school.", exUz: 'Bank maktabning qarshisida.' },
    { en: 'block', uz: 'kvartal', ipa: 'blɒk', pos: 'noun', ex: 'The station is two blocks away.', exUz: 'Bekat ikki kvartal narida.' },
    { en: 'on foot', uz: 'piyoda', ipa: 'ɒn fʊt', pos: 'phrase', ex: 'I go to work on foot.', exUz: 'Men ishga piyoda boraman.' },
  ],
  practice: [
    { k: 'choice', q: 'Excuse me, ___ I get to the museum?', opts: ['how do', 'how does', 'where do', 'what is'], a: 0, why: "Yo'l so'rash: **How do I get to…?**" },
    { k: 'fill', q: 'The pharmacy is ___ the bank. (qarshisida)', a: ['opposite'], uz: 'Dorixona bankning qarshisida.', why: "**opposite** — qarshisida." },
    { k: 'order', uz: "To'g'riga yuring, keyin chapga buriling.", words: ['Go', 'straight', 'on', 'then', 'turn', 'left'], extra: ['to', 'in'] },
    { k: 'translate', uz: 'Yaqin atrofda dorixona bormi?', a: ['Is there a pharmacy near here?', 'Is there a pharmacy nearby?'] },
    { k: 'match', pairs: [['lost', 'adashgan'], ['opposite', 'qarshisida'], ['block', 'kvartal'], ['on foot', 'piyoda'], ['crossroads', 'chorraha']] },
    { k: 'tf', q: "*Turn left at the traffic lights* — svetoforda chapga burilish.", a: true },
    { k: 'listen', say: 'Take the second left.', opts: ['Take the second left.', 'Take the second right.', 'Take the first left.', 'Turn left at the corner.'], a: 0 },
    { k: 'dictation', say: "Excuse me, I'm lost.", a: ["Excuse me, I'm lost.", 'Excuse me, I am lost.'] },
    { k: 'fix', wrong: 'How I get to the station?', a: ['How do I get to the station?'], why: "Savolda **do** kerak: *How do I get…?*" },
    { k: 'fill', q: 'Is it far? — No, it ___ . It is five minutes on foot.', a: ["isn't", 'is not'], why: "*Is it…?* ga qisqa javob: **No, it isn't.**" },
    { k: 'speak', say: 'Excuse me, how do I get to the station?', uz: 'Kechirasiz, bekatga qanday boraman?' },
  ],
  quiz: [
    { k: 'choice', q: 'Go ___ on, then turn right.', opts: ['straight', 'strong', 'street', 'stop'], a: 0 },
    { k: 'fill', q: "Turn right ___ the crossroads.", a: ['at'], why: "**at the crossroads**." },
    { k: 'order', uz: 'Bu uzoqmi?', words: ['Is', 'it', 'far'], extra: ['Are', 'do'] },
    { k: 'translate', uz: "U bankning qarshisida.", a: ["It's opposite the bank.", 'It is opposite the bank.'] },
    { k: 'tf', q: "*Excuse me* — notanish odamga murojaat uchun muloyim ibora.", a: true },
    { k: 'fix', wrong: 'Turn to left in the corner.', a: ['Turn left at the corner.'], why: "**Turn left at the corner.** — *to* va *in* kerak emas." },
    { k: 'match', pairs: [['lost', 'adashgan'], ['opposite', 'qarshisida'], ['on foot', 'piyoda'], ['block', 'kvartal']] },
    { k: 'choice', q: "Tushunmadingiz. Nima deysiz?", opts: ['Sorry, can you say that again, please?', 'Go away.', 'I am a pharmacy.', 'Where you are?'], a: 0 },
  ],
  summary: [
    "So'rash: **Excuse me, how do I get to…? Is there a … near here? Is it far?**",
    "Ko'rsatish: **Go straight on. Turn left/right at the … Take the second left. It's opposite …**",
    "Tushunmasangiz: **Can you say that again, please?** Yangi so'zlar: **lost, opposite, block, on foot**.",
  ],
  homework: "Uyingizdan eng yaqin dorixonagacha yo'lni 3–4 ta inglizcha gap bilan yozing: *Go straight on… Turn left at…*",
};

export default lesson;
