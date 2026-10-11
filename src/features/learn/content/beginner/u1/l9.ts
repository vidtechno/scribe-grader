import type { Lesson } from '../../../types';

// Mini lesson (situation): meeting someone — name, spelling, phone number. Recycles greetings, spell, numbers, name, letter, repeat.
const lesson: Lesson = {
  id: 'u1-l9',
  title: 'Meeting someone: name, spelling, numbers',
  titleUz: 'Yangi tanish: ism, harflash, raqam',
  mini: true,
  goal: "Yangi odam bilan **tanishasiz**, ismingizni harflab aytasiz va telefon raqamingizni raqam-raqam diktant qilasiz. Hammasi 1–8-darslarda o'rganganlaringiz asosida.",
  slides: [
    {
      title: 'Vaziyat: ro\'yxatdan o\'tish stolida',
      blocks: [
        { t: 'p', md: "Kursga yozilayotganda xodim sizdan **ism**, **familiya** va **telefon raqam** so'raydi. Salomlashish, harflash va raqamlar — uchalasi bir suhbatda kerak bo'ladi." },
        { t: 'dialog', lines: [
          { who: 'Clerk', en: 'Good morning! What\'s your name, please?', uz: 'Xayrli tong! Ismingiz nima, iltimos?' },
          { who: 'Sardor', en: "Good morning. I'm Sardor.", uz: 'Xayrli tong. Men Sardorman.' },
          { who: 'Clerk', en: 'How do you spell your surname?', uz: 'Familiyangiz qanday yoziladi?' },
          { who: 'Sardor', en: 'R-A-Z-I-K-O-V.', uz: 'R-A-Z-I-K-O-V.' },
          { who: 'Clerk', en: "And your phone number?", uz: 'Telefon raqamingiz-chi?' },
          { who: 'Sardor', en: 'Nine, zero, one, two, three, one, five.', uz: "To'qqiz, nol, bir, ikki, uch, bir, besh." },
          { who: 'Clerk', en: 'Sorry, can you repeat that, please?', uz: 'Kechirasiz, takrorlay olasizmi, iltimos?' },
          { who: 'Sardor', en: 'Sure. Nine, zero, one, two, three, one, five.', uz: "Albatta. To'qqiz, nol, bir, ikki, uch, bir, besh." },
          { who: 'Clerk', en: "Thank you. Nice to meet you, Sardor.", uz: 'Rahmat. Tanishganimdan xursandman, Sardor.' },
        ] },
        { t: 'check', ex: { k: 'choice', q: 'Clerk: "How do you ___ your surname?"', opts: ['spell', 'read', 'open', 'close'], a: 0, why: "*How do you **spell**…?* — \"qanday yoziladi?\"" } },
      ],
    },
    {
      title: 'Foydali iboralar',
      blocks: [
        { t: 'table', head: ['Inglizcha', 'Qachon aytiladi'], speak: [0], rows: [
          ["What's your name?", "Ismini so'raysiz"],
          ['How do you spell it?', "Yozilishini so'raysiz"],
          ["What's your phone number?", "Telefon raqamini so'raysiz"],
          ['Can you repeat that, please?', 'Tushunmadingiz'],
          ['Can you say it again, please?', 'Yana bir marta so\'raysiz'],
          ['Nice to meet you, too.', 'Tanishuvga javob'],
        ] },
        { t: 'tip', tone: 'info', md: "Telefon raqami **raqam-raqam** aytiladi: *nine, zero, one…*. Nol ko'pincha **zero** deyiladi. Ikki bir xil raqam bo'lsa ham har birini ayting." },
        { t: 'check', ex: { k: 'fill', q: 'Can you ___ that, please?', a: ['repeat'], uz: 'Takrorlay olasizmi, iltimos?', why: "**repeat** — takrorlamoq." } },
      ],
    },
    {
      title: "Ehtiyot bo'ling: tez-tez uchraydigan xatolar",
      blocks: [
        { t: 'compare', good: { title: "To'g'ri", items: ["I'm Sardor.", 'How do you spell it?', 'Can you repeat that, please?'] }, bad: { title: "Noto'g'ri", items: ['I Sardor.', 'How you spell it?', 'Repeat!'] } },
        { t: 'p', md: "Eslatma: **I'm** (= I am) ni tushirmang va **please** deyishni unutmang. Raqamlarni ham, harflarni ham **nomi bilan** ayting." },
        { t: 'check', ex: { k: 'choice', q: "Xodim tez gapirdi. Nima deysiz?", opts: ['Goodbye.', 'Can you repeat that, please?', 'Good night.', 'Nice to meet you.'], a: 1, why: "Muloyim iltimos: **Can you repeat that, please?**" } },
      ],
    },
  ],
  words: [
    { en: 'surname', uz: 'familiya', ipa: 'ˈsɜː.neɪm', pos: 'noun', ex: 'My surname is Karimov.', exUz: 'Mening familiyam Karimov.' },
    { en: 'phone', uz: 'telefon', ipa: 'fəʊn', pos: 'noun', ex: 'My phone is new.', exUz: 'Mening telefonim yangi.' },
    { en: 'number', uz: 'raqam, son', ipa: 'ˈnʌm.bə', pos: 'noun', ex: 'My number is five, two, eight.', exUz: 'Mening raqamim besh, ikki, sakkiz.' },
    { en: 'again', uz: 'yana, qayta', ipa: 'əˈɡen', pos: 'adverb', ex: 'Say it again, please.', exUz: 'Yana bir marta ayting, iltimos.' },
  ],
  practice: [
    { k: 'choice', q: 'Tanishuvda: "Nice to meet you." — javobingiz?', opts: ['Nice to meet you, too.', "I'm fine, thanks.", 'Goodbye.', 'Sorry.'], a: 0, why: "Javobda **too** qo'shiladi." },
    { k: 'fill', q: "Good morning. ___ Sardor.", a: ["I'm", 'I am'], uz: 'Xayrli tong. Men Sardorman.', why: "**I'm** — \"men ...man\"." },
    { k: 'order', uz: 'Familiyangiz qanday yoziladi?', words: ['How', 'do', 'you', 'spell', 'your', 'surname'], extra: ['name'] },
    { k: 'translate', uz: 'Mening ismim Dilnoza.', a: ['my name is dilnoza', "i'm dilnoza", 'i am dilnoza', "my name's dilnoza"] },
    { k: 'listen', say: 'A, N, V, A, R', opts: ['Anvar', 'Anwar', 'Enver', 'Anvir'], a: 0, why: "\"ey — en — vi: — ey — a:\" — **Anvar**." },
    { k: 'listen', say: 'five, two, eight, one', opts: ['five, two, eight, one', 'five, two, eighteen, one', 'nine, two, eight, one', 'five, ten, eight, one'], a: 0 },
    { k: 'dictation', say: "What's your phone number?", a: ["What's your phone number?", 'What is your phone number?'] },
    { k: 'match', pairs: [['surname', 'familiya'], ['phone', 'telefon'], ['number', 'raqam'], ['again', 'yana'], ['spell', 'harflab aytmoq']] },
    { k: 'fix', wrong: 'How you spell your name?', a: ['How do you spell your name?'], why: "Savolda **do** kerak." },
    { k: 'tf', q: "Telefon raqami *fifteen, twenty* kabi ikki xonali sonlar bilan emas, **raqam-raqam** aytiladi.", a: true, why: "Odatda: *nine, zero, one…*" },
    { k: 'speak', say: 'Can you say it again, please?', uz: 'Muloyim iltimos qiling' },
  ],
  quiz: [
    { k: 'choice', q: 'Xodim: "What\'s your name, please?" — javob:', opts: ["I'm fine.", "I'm Sardor.", 'Goodbye.', 'Thank you.'], a: 1 },
    { k: 'fill', q: 'What\'s your ___ number?', a: ['phone'], uz: 'Telefon raqamingiz nima?' },
    { k: 'order', uz: 'Yana bir marta ayting, iltimos.', words: ['Say', 'it', 'again', 'please'], extra: ['name'] },
    { k: 'translate', uz: 'Tanishganimdan xursandman.', a: ['nice to meet you'], why: "**Nice to meet you.**" },
    { k: 'listen', say: 'K, A, R, I, M, O, V', opts: ['Karimov', 'Kerimov', 'Karimow', 'Karimof'], a: 0 },
    { k: 'match', pairs: [['surname', 'familiya'], ['phone', 'telefon'], ['number', 'raqam'], ['repeat', 'takrorlamoq']] },
    { k: 'fix', wrong: 'I Sardor.', a: ["I'm Sardor.", 'I am Sardor.'], why: "**I'm** (am) ni tushirmang." },
    { k: 'tf', q: "*Repeat!* deyish *Can you repeat that, please?* dan ko'ra muloyimroq.", a: false, why: "Faqat *Repeat!* qo'pol eshitiladi." },
  ],
  summary: [
    "Tanishuv: **Good morning. I'm… — Nice to meet you, too.**",
    "Ism so'rash: **What's your name? How do you spell it?** Harflar nomi bilan aytiladi.",
    "Telefon raqami **raqam-raqam** aytiladi: *nine, zero, one…*",
    "Tushunmasangiz: **Can you repeat that, please?**",
  ],
  homework: "Ismingiz, familiyangiz va telefon raqamingizni inglizcha ovoz chiqarib ayting. Do'stingizga ham xuddi shunday dialogni o'qib bering.",
};

export default lesson;
