import type { Lesson } from '../../../types';

// Mini lesson (consolidation): the whole To be unit. Recycles pronouns, am/is/are (+, -, ?), a / an, plurals,
// this / that, possessives, countries and jobs, and words from u2-l1…l10.
const lesson: Lesson = {
  id: 'u2-l11',
  title: 'To be: final review',
  titleUz: 'To be: yakuniy takror',
  mini: true,
  goal: "**To be** bo'limini yakunlaysiz: olmoshlar, **am / is / are** (darak, inkor, savol), **a / an**, ko'plik, **this / that**, **my / his / her**, davlat va kasblar — hammasi bitta joyda.",
  slides: [
    {
      title: 'Bir qarashda: to be',
      blocks: [
        { t: 'table', head: ['Turi', 'Misol', "O'zbekcha"], speak: [1], rows: [
          ['Darak', "I'm a student. She's from Kazakhstan.", 'Men talabaman. U Qozog\'istondan.'],
          ['Inkor', "He isn't a doctor. They aren't late.", 'U shifokor emas. Ular kech qolmagan.'],
          ['Savol', 'Are you a teacher? Is she at home?', "Siz o'qituvchimisiz? U uydami?"],
          ['Qisqa javob', "Yes, I am. / No, he isn't.", 'Ha. / Yo\'q.'],
          ['this / that', 'This is my phone. That is her bag.', 'Bu mening telefonim. U uning sumkasi.'],
          ['Ko\'plik', 'These are my shoes. They are doctors.', 'Bular mening oyoq kiyimlarim. Ular shifokorlar.'],
        ] },
        { t: 'tip', tone: 'info', md: "**I → am, he / she / it → is, you / we / they → are.** Savolda **to be** gap boshiga chiqadi: *Is she a nurse?* Kasb oldida **a / an**, ko'plikda esa yo'q." },
        { t: 'check', ex: { k: 'choice', q: "Qaysi gap to'g'ri?", opts: ["She is nurse.", "She is a nurse.", "She are a nurse.", "She a nurse."], a: 1 } },
      ],
    },
    {
      title: 'Hayotda: tanishuv',
      blocks: [
        { t: 'dialog', lines: [
          { who: 'Tom', en: "Hi! I'm Tom. I'm from England. Are you Uzbek?", uz: "Salom! Men Tomman. Angliyadanman. Siz o'zbekmisiz?" },
          { who: 'Malika', en: "Yes, I am. I'm Malika. This is my husband, Ali. He's also an engineer.", uz: "Ha. Men Malikaman. Bu erim Ali. U ham muhandis." },
          { who: 'Tom', en: 'Nice to meet you! Are you married?', uz: "Tanishganimdan xursandman! Turmush qurganmisiz?" },
          { who: 'Malika', en: "I'm married, but Ali's sister isn't. She's only 19.", uz: "Men turmush qurganman, lekin Alining singlisi yo'q. U atigi 19 yoshda." },
        ] },
        { t: 'check', ex: { k: 'fill', q: "Ali is an engineer. His sister ___ married.", a: ["isn't", 'is not'], uz: 'Alining singlisi turmush qurmagan.', why: "*sister* = she → **isn't**." } },
      ],
    },
    {
      title: 'Eng ko\'p uchraydigan xatolar',
      blocks: [
        { t: 'compare', good: { title: "To'g'ri", items: ["I'm from Uzbekistan.", "I'm Uzbek.", "He's an engineer.", "Are these your shoes?", "Her name is Sara."] }, bad: { title: "Noto'g'ri", items: ["I'm from Uzbek.", "I'm uzbek.", "He's engineer.", "These is your shoes?", "She name is Sara."] } },
        { t: 'check', ex: { k: 'choice', q: "___ your parents at home?", opts: ['Is', 'Are', 'Am', 'Do'], a: 1, why: "*parents* = they → **Are**." } },
      ],
    },
  ],
  words: [
    { en: 'also', uz: 'ham, shuningdek', ipa: 'ˈɔːl.səʊ', pos: 'adv', ex: 'She is also a teacher.', exUz: "U ham o'qituvchi." },
    { en: 'only', uz: 'faqat, atigi', ipa: 'ˈəʊn.li', pos: 'adv', ex: "My sister is only ten.", exUz: 'Singlim atigi o\'n yoshda.' },
    { en: 'married', uz: 'turmush qurgan, uylangan', ipa: 'ˈmær.id', pos: 'adj', ex: "He isn't married.", exUz: 'U uylanmagan.' },
  ],
  practice: [
    { k: 'choice', q: 'My brother ___ a driver.', opts: ['am', 'is', 'are', 'be'], a: 1, why: "*brother* = he → **is**." },
    { k: 'fill', q: "We ___ not late.", a: ['are'], uz: 'Biz kech qolganimiz yo\'q.' },
    { k: 'order', uz: "Bular mening kitoblarim.", words: ['These', 'are', 'my', 'books'], extra: ['is', 'This'] },
    { k: 'translate', uz: "U shifokor emas.", a: ["He isn't a doctor.", "He's not a doctor.", 'He is not a doctor.', "She isn't a doctor.", "She's not a doctor.", 'She is not a doctor.'] },
    { k: 'match', pairs: [['also', 'ham'], ['only', 'faqat, atigi'], ['married', 'turmush qurgan'], ['nurse', 'hamshira'], ['country', 'davlat']] },
    { k: 'tf', q: "*Is they at home?* — gap to'g'ri.", a: false, why: "To'g'risi: *Are they at home?*" },
    { k: 'listen', say: 'Are you from Uzbekistan?', opts: ['Are you from Uzbekistan?', 'Is she from Uzbekistan?', 'Are you Uzbek?', 'Are they from Uzbekistan?'], a: 0 },
    { k: 'dictation', say: "That is her bag.", a: ["That is her bag.", "That's her bag."] },
    { k: 'fix', wrong: "He's engineer from Turkey.", a: ["He's an engineer from Turkey.", 'He is an engineer from Turkey.'], why: "Kasb oldida **an**." },
    { k: 'fix', wrong: 'I am from Japanese.', a: ["I am from Japan.", "I'm from Japan.", 'I am Japanese.', "I'm Japanese."], why: "Davlat: *from Japan*; millat: *Japanese*." },
    { k: 'speak', say: "I'm Aziz. I'm from Uzbekistan. My sister is also a student.", uz: "O'zingiz va oilangizni tanishtiring" },
  ],
  quiz: [
    { k: 'choice', q: '___ that your phone?', opts: ['Am', 'Is', 'Are', 'Do'], a: 1 },
    { k: 'fill', q: "Ali and Vali ___ my friends.", a: ['are'] },
    { k: 'order', uz: "Sizning ismingiz nima?", words: ['What', 'is', 'your', 'name'], extra: ['are', 'you'] },
    { k: 'translate', uz: "Men talaba emasman.", a: ["I'm not a student.", 'I am not a student.'] },
    { k: 'tf', q: "*They're doctors.* — to'g'ri (ko'plikda **a** yo'q).", a: true },
    { k: 'fix', wrong: 'This are my shoes.', a: ['These are my shoes.', 'This is my shoe.'], why: "Ko'plik: **These are**." },
    { k: 'match', pairs: [['also', 'ham'], ['only', 'atigi'], ['married', 'turmush qurgan'], ['family', 'oila']] },
    { k: 'choice', q: "Is Emma from England? — ...", opts: ["Yes, she is.", "Yes, she does.", "Yes, I am.", 'Yes, it are.'], a: 0 },
  ],
  summary: [
    "**I am, he / she / it is, you / we / they are.** Inkor: **isn't / aren't / am not**. Savol: **Is she…? Are you…?**",
    "Kasb oldidan **a / an**, ko'plikda yo'q. Davlat — **from**, millat — **from siz**.",
    "**This / that** — bitta, **these / those** — bir nechta. Egalik: **my, your, his, her**.",
  ],
  homework: "Bo'lim bo'yicha 8 ta gap yozing: 2 ta darak, 2 ta inkor, 2 ta savol, 2 ta this / these bilan.",
};

export default lesson;
