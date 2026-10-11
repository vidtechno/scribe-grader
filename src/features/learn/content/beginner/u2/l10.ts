import type { Lesson } from '../../../types';

// Mini lesson (situation): registration form at a language school. Recycles to be questions, countries, jobs, a / an, phone number, address, email, surname.
const lesson: Lesson = {
  id: 'u2-l10',
  title: 'At the language school: a registration form',
  titleUz: 'Til maktabida: ro\'yxatdan o\'tish anketasi',
  mini: true,
  goal: "Til maktabida **anketani to'ldirasiz** va administrator savollariga javob berasiz: *What's your name? Where are you from? What's your job?* Davlat, kasb va a / an ni ishlatasiz.",
  slides: [
    {
      title: 'Vaziyat: ro\'yxatdan o\'tish',
      blocks: [
        { t: 'p', md: "Siz yangi til maktabiga keldingiz. Administrator sizdan anketani to'ldirishni so'raydi va **to be** bilan savollar beradi: *What is…? Where are you from? Are you…?*" },
        { t: 'dialog', lines: [
          { who: 'Admin', en: 'Hello! Welcome. Please fill in this form.', uz: "Salom! Xush kelibsiz. Iltimos, shu anketani to'ldiring." },
          { who: 'Dilnoza', en: 'Thank you. What is my first name here?', uz: 'Rahmat. Bu yerda ismim qaysi?' },
          { who: 'Admin', en: "Dilnoza. And what's your surname?", uz: 'Dilnoza. Familiyangiz nima?' },
          { who: 'Dilnoza', en: "It's Karimova. I'm from Uzbekistan.", uz: "Karimova. Men O'zbekistondanman." },
          { who: 'Admin', en: "Great. What's your job? Are you a student?", uz: "Zo'r. Kasbingiz nima? Talabamisiz?" },
          { who: 'Dilnoza', en: "No, I'm not. I'm a nurse.", uz: "Yo'q. Men hamshiraman." },
          { who: 'Admin', en: "And what's your phone number?", uz: 'Telefon raqamingiz nima?' },
        ] },
        { t: 'check', ex: { k: 'choice', q: 'Admin: "Are you a student?" Dilnoza: "___"', opts: ["No, I'm not.", "No, I don't.", 'No, she isn\'t.', 'No, I amn\'t.'], a: 0, why: "*Are you…?* ga javob: **No, I'm not.**" } },
      ],
    },
    {
      title: 'Anketa savollari',
      blocks: [
        { t: 'table', head: ['Savol', 'Javob'], speak: [0, 1], rows: [
          ["What's your first name?", "My first name's Dilnoza."],
          ["What's your surname?", "It's Karimova."],
          ['Where are you from?', "I'm from Uzbekistan."],
          ["What's your nationality?", "I'm Uzbek."],
          ["What's your job?", "I'm a nurse."],
          ["How old are you?", "I'm 25."],
        ] },
        { t: 'tip', tone: 'info', md: "*What's your job?* — \"Kasbingiz nima?\" Javobda **a / an** unutmang: *I'm **a** driver. I'm **an** engineer.* Davlat nomi uchun **from**, millat uchun **from siz**: *I'm from Uzbekistan. / I'm Uzbek.*" },
        { t: 'check', ex: { k: 'fill', q: "What's your job? — I'm ___ lawyer.", a: ['a'], uz: 'Kasbingiz nima? — Men huquqshunosman.', why: "*lawyer* undosh bilan boshlanadi → **a**." } },
      ],
    },
    {
      title: 'Ehtiyot bo\'ling: tez-tez uchraydigan xatolar',
      blocks: [
        { t: 'compare', good: { title: "To'g'ri", items: ["Where are you from?", "I'm from Uzbekistan.", "What's your job?", "I'm an engineer."] }, bad: { title: "Noto'g'ri", items: ["Where you are from?", "I'm from Uzbek.", "What your job?", "I'm engineer."] } },
        { t: 'p', md: "Eslatma: savolda **to be** gapning **boshiga** chiqadi: *You are from Uzbekistan. → **Are** you from Uzbekistan?* So'roq so'zdan keyin ham shunday: *Where **are** you from?*" },
        { t: 'check', ex: { k: 'order', uz: 'Qayerdansiz?', words: ['Where', 'are', 'you', 'from'], extra: ['is'] } },
      ],
    },
  ],
  words: [
    { en: 'form', uz: 'anketa, blank', ipa: 'fɔːm', pos: 'noun', ex: 'Please fill in this form.', exUz: "Iltimos, shu anketani to'ldiring." },
    { en: 'first name', uz: 'ism', ipa: 'ˈfɜːst neɪm', pos: 'noun', ex: 'My first name is Dilnoza.', exUz: 'Mening ismim Dilnoza.' },
    { en: 'nationality', uz: 'millat, fuqarolik', ipa: 'ˌnæʃ.ənˈæl.ə.ti', pos: 'noun', ex: 'My nationality is Uzbek.', exUz: "Millatim o'zbek." },
    { en: 'job', uz: 'kasb, ish', ipa: 'dʒɒb', pos: 'noun', ex: "What's your job?", exUz: 'Kasbingiz nima?' },
  ],
  practice: [
    { k: 'choice', q: "___ is your surname?", opts: ['What', 'Where', 'Who are', 'Are'], a: 0, why: "Familiya nima? → **What**." },
    { k: 'fill', q: "Where ___ you from?", a: ['are'], uz: 'Siz qayerdansiz?', why: "*you* bilan — **are**." },
    { k: 'order', uz: "Kasbingiz nima?", words: ["What's", 'your', 'job'], extra: ['are'], alt: [['What', 'is', 'your', 'job']] },
    { k: 'translate', uz: "Men O'zbekistondanman.", a: ["I'm from Uzbekistan.", 'I am from Uzbekistan.'] },
    { k: 'match', pairs: [['form', 'anketa'], ['first name', 'ism'], ['job', 'kasb'], ['nationality', 'millat'], ['surname', 'familiya']] },
    { k: 'tf', q: "*I'm engineer.* — gap to'g'ri.", a: false, why: "To'g'risi: *I'm **an** engineer.*" },
    { k: 'listen', say: "What's your job?", opts: ["What's your job?", "What's your name?", "Where's your job?", "Who's your teacher?"], a: 0 },
    { k: 'dictation', say: "I'm from Kazakhstan.", a: ["I'm from Kazakhstan.", 'I am from Kazakhstan.'] },
    { k: 'fix', wrong: 'Where you are from?', a: ['Where are you from?'], why: "Savolda **are** — **you** dan oldin." },
    { k: 'fill', q: "Are you ___ student? — Yes, I am.", a: ['a'], why: "*student* undosh → **a**." },
    { k: 'speak', say: "My first name's Dilnoza. I'm from Uzbekistan. I'm a nurse.", uz: "Anketadagidek o'zingizni tanishtiring" },
  ],
  quiz: [
    { k: 'choice', q: "What's your nationality? — ...", opts: ["I'm Uzbek.", "I'm from Uzbek.", "I'm a Uzbek job.", 'I Uzbek.'], a: 0, why: "Millat: **I'm Uzbek.**" },
    { k: 'fill', q: "He is ___ engineer.", a: ['an'] },
    { k: 'order', uz: 'Telefon raqamingiz nima?', words: ['What', 'is', 'your', 'phone', 'number'], extra: ['are'] },
    { k: 'translate', uz: "Siz talabamisiz?", a: ['Are you a student?'] },
    { k: 'tf', q: "*Where are you from? — I'm Uzbekistan.* — javob to'g'ri.", a: false, why: "To'g'risi: *I'm **from** Uzbekistan.*" },
    { k: 'fix', wrong: 'What your first name?', a: ["What's your first name?", 'What is your first name?'], why: "Savolda **is / 's** kerak." },
    { k: 'match', pairs: [['form', 'anketa'], ['job', 'kasb'], ['first name', 'ism'], ['nationality', 'millat']] },
    { k: 'choice', q: "Is Dilnoza a student? — ...", opts: ["No, she isn't.", "No, she doesn't.", "No, I'm not.", 'No, it isn\'t.'], a: 0, why: "*Dilnoza* = she, *Is…?* → **No, she isn't.**" },
  ],
  summary: [
    "Anketa savollari: **What's your…? Where are you from? How old are you?**",
    "Davlat: **I'm from Uzbekistan.** Millat: **I'm Uzbek.** Kasb: **I'm a nurse / an engineer.**",
    "Yangi so'zlar: **form, first name, nationality, job**.",
  ],
  homework: "Haqiqiy anketadagidek 6 ta savolga inglizcha javob yozing: first name, surname, age, country, nationality, job.",
};

export default lesson;
