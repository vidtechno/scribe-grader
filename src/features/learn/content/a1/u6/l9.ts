import type { Lesson } from '../../../types';

// Mini lesson (situation): meeting a new neighbour. Recycles introductions, describing people, small talk.
const lesson: Lesson = {
  id: 'u6-l9',
  title: 'Meeting a new neighbour',
  titleUz: "Yangi qo'shni bilan tanishuv",
  mini: true,
  goal: "Yangi qo'shni bilan **tanishasiz**, uning oilasi va ko'rinishi haqida so'raysiz va kichik suhbat qurasiz: *Nice to meet you! I'm your new neighbour. Where are you from?*",
  slides: [
    {
      title: "Vaziyat: eshik oldida",
      blocks: [
        { t: 'p', md: "Siz yangi uyga ko'chib keldingiz. Qo'shni eshik oldida salomlashadi. Avval **tanishing**, keyin 1–2 ta oddiy savol bering." },
        { t: 'dialog', lines: [
          { who: 'Sara', en: "Hello! I'm Sara. I live in the next flat. Welcome!", uz: "Salom! Men Saraman. Men yonidagi xonadonda yashayman. Xush kelibsiz!" },
          { who: 'Ali', en: "Hi, Sara! Nice to meet you. I'm Ali. I'm your new neighbour.", uz: "Salom, Sara! Tanishganimdan xursandman. Men Aliman. Men sizning yangi qo'shnингizman." },
          { who: 'Sara', en: 'Nice to meet you, too. Where are you from?', uz: 'Menam xursandman. Siz qayerdansiz?' },
          { who: 'Ali', en: "I'm from Samarkand. I live here with my wife and my sister.", uz: "Men Samarqanddanman. Bu yerda rafiqam va opam bilan yashayman." },
          { who: 'Sara', en: 'Is your sister tall?', uz: 'Opangiz novchami?' },
          { who: 'Ali', en: "No, she isn't. She's quite short, and she has long curly hair.", uz: "Yo'q. U ancha past bo'yli, uning uzun jingalak sochlari bor." },
          { who: 'Sara', en: 'Great! Come for tea one day.', uz: "Ajoyib! Bir kuni choyga keling." },
        ] },
        { t: 'check', ex: { k: 'choice', q: "Ali tells Sara: \"I'm ___ new neighbour.\"", opts: ['you', 'your', 'yours', 'you are'], a: 1, why: "Ot oldidan **your** (sizning) keladi: *your new neighbour*." } },
      ],
    },
    {
      title: "Foydali iboralar",
      blocks: [
        { t: 'table', head: ['Inglizcha', "Qachon aytiladi"], speak: [0], rows: [
          ["I'm your new neighbour.", "O'zingizni tanishtirasiz"],
          ['Welcome to the building!', "Qo'shni sizni kutib oladi"],
          ['Where are you from?', "Qayerdan ekanini so'raysiz"],
          ['Who do you live with?', "Kim bilan yashashini so'raysiz"],
          ['What does your sister look like?', "Ko'rinishini so'raysiz"],
          ['Is she friendly?', "Xarakteri haqida so'raysiz"],
          ['Nice to meet you, too.', 'Tanishuvga javob'],
        ] },
        { t: 'tip', tone: 'good', md: "Birinchi uchrashuvda shaxsiy savollarni ko'p bermang. **Where are you from?**, **Who do you live with?** — yetarli. Oxirida: *See you soon!*" },
        { t: 'check', ex: { k: 'fill', q: 'What does your sister ___ like?', a: ['look'], uz: "Opangiz qanday ko'rinishda?", why: "Ko'rinish haqida so'rash: **What does she look like?**" } },
      ],
    },
    {
      title: "Ehtiyot bo'ling: tez-tez uchraydigan xatolar",
      blocks: [
        { t: 'compare', good: { title: "To'g'ri", items: ["I'm from Samarkand.", 'She has long hair.', 'What does she look like?'] }, bad: { title: "Noto'g'ri", items: ['I from Samarkand.', 'She have long hair.', 'How does she look like?'] } },
        { t: 'p', md: "Eslatma: **look like** — tashqi ko'rinish, **be + sifat** — xarakter: *She's friendly.* Ikkalasi ham **she** bilan: **is / has / does**." },
        { t: 'check', ex: { k: 'choice', q: "Javobni tanlang: *Nice to meet you!*", opts: ['Nice to meet you, too.', 'I am meet you.', 'Yes, I do.', 'Me too nice.'], a: 0, why: "Tabiiy javob: **Nice to meet you, too.**" } },
      ],
    },
  ],
  words: [
    { en: 'neighbour', uz: "qo'shni", ipa: 'ˈneɪ.bər', pos: 'noun', ex: 'My neighbour is very friendly.', exUz: "Mening qo'shnim juda xushmuomala." },
    { en: 'move in', uz: "ko'chib kirmoq", ipa: 'muːv ɪn', pos: 'phrasal verb', ex: 'We move in on Monday.', exUz: "Biz dushanba kuni ko'chib kiramiz." },
    { en: 'welcome', uz: 'xush kelibsiz', ipa: 'ˈwel.kəm', pos: 'exclamation', ex: 'Welcome to our building!', exUz: 'Binomizga xush kelibsiz!' },
    { en: 'nearby', uz: 'yaqin atrofda', ipa: 'ˌnɪəˈbaɪ', pos: 'adverb', ex: 'My sister lives nearby.', exUz: 'Opam yaqin atrofda yashaydi.' },
  ],
  practice: [
    { k: 'choice', q: 'Where ___ you from?', opts: ['is', 'are', 'do', 'does'], a: 1, why: "**you** bilan — **are**." },
    { k: 'fill', q: 'She ___ long curly hair. (have)', a: ['has'], uz: "Uning uzun jingalak sochlari bor.", why: "**she** → **has**." },
    { k: 'order', uz: "Men sizning yangi qo'shnингizman.", words: ["I'm", 'your', 'new', 'neighbour'], extra: ['you', 'is'] },
    { k: 'translate', uz: 'Tanishganimdan xursandman.', a: ['Nice to meet you.', 'Nice to meet you!', 'Pleased to meet you.'], why: "Eng tabiiy ibora: **Nice to meet you.**" },
    { k: 'match', pairs: [['neighbour', "qo'shni"], ['welcome', 'xush kelibsiz'], ['nearby', 'yaqin atrofda'], ['move in', "ko'chib kirmoq"], ['friendly', 'xushmuomala']] },
    { k: 'tf', q: "*What does she look like?* — bu xarakter haqidagi savol.", a: false, why: "Bu **tashqi ko'rinish** haqida savol." },
    { k: 'listen', say: 'Welcome to the building!', opts: ['Welcome to the building!', 'Welcome to the bank!', 'Come to the building!', 'Welcome to my flat!'], a: 0 },
    { k: 'dictation', say: "I'm from Samarkand.", a: ["I'm from Samarkand.", 'I am from Samarkand.'] },
    { k: 'fix', wrong: 'She have long hair.', a: ['She has long hair.'], why: "**she** bilan — **has**." },
    { k: 'fill', q: 'Who do you ___ with?', a: ['live'], uz: "Kim bilan yashaysiz?", why: "**do you** dan keyin fe'l oddiy shaklda: **live**." },
    { k: 'speak', say: 'Nice to meet you. Where are you from?', uz: 'Tanishganimdan xursandman. Qayerdansiz?' },
  ],
  quiz: [
    { k: 'choice', q: 'What ___ your brother look like?', opts: ['do', 'does', 'is', 'are'], a: 1 },
    { k: 'fill', q: "I ___ from Tashkent.", a: ['am', "'m"], why: "**I** bilan — **am**." },
    { k: 'order', uz: 'Siz qayerdansiz?', words: ['Where', 'are', 'you', 'from'], extra: ['do', 'is'] },
    { k: 'translate', uz: "U juda xushmuomala.", a: ["She's very friendly.", 'She is very friendly.', "He's very friendly.", 'He is very friendly.'] },
    { k: 'tf', q: "*Nice to meet you, too.* — tanishuvga javob.", a: true },
    { k: 'fix', wrong: 'I from Bukhara.', a: ["I'm from Bukhara.", 'I am from Bukhara.'], why: "**from** dan oldin **am** kerak." },
    { k: 'match', pairs: [['neighbour', "qo'shni"], ['welcome', 'xush kelibsiz'], ['nearby', 'yaqin atrofda'], ['move in', "ko'chib kirmoq"]] },
    { k: 'choice', q: 'Is your sister tall? — ...', opts: ["No, she isn't.", "No, she doesn't.", 'No, I am not.', 'No, it is.'], a: 0 },
  ],
  summary: [
    "Tanishuv: **I'm your new neighbour. Nice to meet you. Where are you from?**",
    "Ko'rinish: **What does she look like?** — *She has long curly hair.* Xarakter: *She's friendly.*",
    "Yangi so'zlar: **neighbour, move in, welcome, nearby**.",
  ],
  homework: "Xayoliy qo'shningiz bilan 4 gapli dialog yozing: ism, qayerdan, kim bilan yashaydi, qanday ko'rinadi.",
};

export default lesson;
