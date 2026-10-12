import type { Lesson } from '../../../types';

// Mini lesson (grammar): spelling of regular plurals and how the ending sounds.
const lesson: Lesson = {
  id: 'u2-l13',
  title: 'Plurals: spelling rules',
  titleUz: "Ko'plik: -s, -es, -ies imlosi",
  mini: true,
  goal: "Otning oxirgi harfiga qarab ko'plikni **to'g'ri yozasiz** (*dish → dishes, party → parties, day → days, shelf → shelves*) va ko'plik oxirini **/s/, /z/, /ɪz/** deb to'g'ri o'qiysiz.",
  slides: [
    {
      title: 'Asosiy qoida va -es',
      blocks: [
        { t: 'p', md: "Ko'pchilik otlarda ko'plik oddiy: oxiriga **-s** qo'shamiz: *dog → dogs, book → books, friend → friends*. Ot **s, ss, x, sh, ch, z** bilan tugasa, **-es** qo'shiladi: bu tovushdan keyin yolg'iz \"s\" ni ayta olmaymiz." },
        { t: 'table', head: ['Birlik', "Ko'plik", 'Qoida'], speak: [0, 1], rows: [
          ['a dish', 'dishes', 'sh → -es'],
          ['a class', 'classes', 'ss → -es'],
          ['a brush', 'brushes', 'sh → -es'],
          ['a tomato', 'tomatoes', 'ba\'zi -o → -es'],
          ['a photo', 'photos', 'ko\'pchilik -o → -s'],
        ] },
        { t: 'tip', tone: 'info', md: "**-o** bilan tugaydigan so'zlarda ikki yo'l bor. **tomato, potato, hero** → **-es**. **photo, piano, radio** → **-s**. Yodlab oling: *tomatoes, potatoes* (sabzavotlar)." },
        { t: 'check', ex: { k: 'fill', q: 'one class → two ___', a: ['classes'], why: "**ss** bilan tugaydi → **-es**: *classes*." } },
      ],
    },
    {
      title: '-y bilan tugaydigan otlar',
      blocks: [
        { t: 'p', md: "Bu yerda y dan **oldingi harfga** qarang:\n• **undosh + y** → **y** tushadi, **-ies** qo'shiladi: *party → part**ies***\n• **unli + y** → shunchaki **-s**: *day → day**s***" },
        { t: 'examples', items: [
          { en: 'a story → stories', uz: 'hikoya', note: 'r + y → -ies' },
          { en: 'a party → parties', uz: "ziyofat, bazm", note: 't + y → -ies' },
          { en: 'a day → days', uz: 'kun', note: 'a + y → -s' },
          { en: 'a toy → toys', uz: "o'yinchoq", note: 'o + y → -s' },
        ] },
        { t: 'check', ex: { k: 'choice', q: 'one story → two ___', opts: ['storys', 'stories', 'storyes', 'storis'], a: 1, why: "**r** undosh + y → **-ies**: *stories*." } },
        { t: 'check', ex: { k: 'choice', q: 'one day → seven ___', opts: ['daies', 'days', 'dayes', 'dies'], a: 1, why: "**a** unli + y → faqat **-s**: *days*." } },
      ],
    },
    {
      title: '-f / -fe → -ves',
      blocks: [
        { t: 'p', md: "Ba'zi otlarda **-f** yoki **-fe** o'rniga **-ves** yoziladi. Bu otlarning soni kam, ularni yod olish oson:" },
        { t: 'table', head: ['Birlik', "Ko'plik"], speak: [0, 1], rows: [
          ['a shelf', 'shelves'],
          ['a life', 'lives'],
          ['a leaf', 'leaves'],
          ['a wife', 'wives'],
        ] },
        { t: 'tip', tone: 'warn', md: "Hammasi emas! **roof → roofs**, **cliff → cliffs**, **chef → chefs** — oddiy **-s**. Shubha bo'lsa lug'atga qarang." },
        { t: 'check', ex: { k: 'fill', q: 'one shelf → three ___', a: ['shelves'], why: "**-f** → **-ves**: *shelves*." } },
      ],
    },
    {
      title: 'Ko\'plik oxiri qanday o\'qiladi',
      blocks: [
        { t: 'p', md: "Yozilishi bir xil (**-s**), lekin o'qilishi uch xil. Oxirgi tovushga qarang:" },
        { t: 'sounds', items: [
          { label: '/s/', say: 'cats', uz: "**p, t, k, f** (ovozsiz) dan keyin — oddiy \"s\".", examples: ['cats', 'books', 'roofs'] },
          { label: '/z/', say: 'days', uz: "Unli va ovozli tovushlardan keyin — \"z\". Eng keng tarqalgan.", examples: ['days', 'parties', 'shelves', 'tomatoes'] },
          { label: '/ɪz/', say: 'dishes', uz: "**s, z, sh, ch, x** dan keyin — qo'shimcha bo'g'in \"iz\".", examples: ['dishes', 'classes', 'brushes'] },
        ] },
        { t: 'compare',
          good: { title: "To'g'ri", items: ['two dishes', 'three parties', 'five days', 'two shelves'] },
          bad: { title: "Noto'g'ri", items: ['two dish', 'three partys', 'five daies', 'two shelfs'] } },
        { t: 'check', ex: { k: 'choice', q: "**classes** oxiri qanday o'qiladi?", say: 'classes', opts: ['/s/', '/z/', '/ɪz/'], a: 2, why: "**ss** dan keyin qo'shimcha bo'g'in: \"klaa-siz\"." } },
      ],
    },
  ],
  words: [
    { en: 'toy', uz: "o'yinchoq", ipa: 'tɔɪ', pos: 'noun', ex: 'The toys are new.', exUz: "O'yinchoqlar yangi." },
    { en: 'class', uz: 'sinf; dars', ipa: 'klɑːs', pos: 'noun', ex: 'We are in class.', exUz: 'Biz darsdamiz.' },
    { en: 'story', uz: 'hikoya', ipa: 'ˈstɔː.ri', pos: 'noun', ex: 'It is a good story.', exUz: 'Bu yaxshi hikoya.' },
    { en: 'party', uz: 'ziyofat, bazm', ipa: 'ˈpɑː.ti', pos: 'noun', ex: 'The party is at home.', exUz: 'Ziyofat uyda.' },
    { en: 'shelf', uz: 'tokcha, javon', ipa: 'ʃelf', pos: 'noun', ex: 'The books are on the shelf.', exUz: 'Kitoblar tokchada.' },
    { en: 'tomato', uz: 'pomidor', ipa: 'təˈmɑː.təʊ', pos: 'noun', ex: 'The tomatoes are red.', exUz: 'Pomidorlar qizil.' },
  ],
  practice: [
    { k: 'choice', q: 'one dish → two ___', opts: ['dishs', 'dishes', 'dishies', 'dish'], a: 1, why: "**sh** → **-es**." },
    { k: 'choice', q: 'one party → three ___', opts: ['partys', 'partyes', 'parties', 'partis'], a: 2, why: "**t** + y → **-ies**." },
    { k: 'choice', q: 'one toy → four ___', opts: ['toies', 'toys', 'toyes', 'tois'], a: 1, why: "**o** unli + y → **-s**." },
    { k: 'fill', q: 'one tomato → five ___', a: ['tomatoes'], why: "**tomato** → **-es**." },
    { k: 'fill', q: 'one story → two ___', a: ['stories'], why: "**r** + y → **-ies**." },
    { k: 'fill', q: 'one wife → two ___', a: ['wives'], why: "**-fe** → **-ves**." },
    { k: 'listen', say: 'two classes', opts: ['two class', 'two classes', 'two glasses', 'two clashes'], a: 1 },
    { k: 'tf', q: "*shelfs* — to'g'ri ko'plik.", a: false, why: "**shelf → shelves**." },
    { k: 'tf', q: "*photos* — to'g'ri ko'plik.", a: true, why: "*photo* — **-o** bilan tugaydi, lekin **-s** oladi." },
    { k: 'fix', wrong: 'The partys are at home.', a: ['The parties are at home.'], why: "**party → parties**." },
    { k: 'fix', wrong: 'The dishs are clean.', a: ['The dishes are clean.'], why: "**dish → dishes**." },
    { k: 'match', pairs: [['dish', 'dishes'], ['class', 'classes'], ['story', 'stories'], ['shelf', 'shelves'], ['day', 'days']] },
    { k: 'choice', q: "**parties** oxiri qanday o'qiladi?", say: 'parties', opts: ['/s/', '/z/', '/ɪz/'], a: 1, why: "Unli tovushdan keyin → **/z/**." },
    { k: 'order', uz: 'Pomidorlar qizil.', words: ['The', 'tomatoes', 'are', 'red'], extra: ['is', 'tomatos'], why: "Ko'plik → **are**." },
    { k: 'translate', uz: 'uchta hikoya', a: ['three stories', '3 stories'], why: "**story → stories**." },
    { k: 'speak', say: 'dishes, classes, stories', uz: "Uch ko'plikni ayting" },
  ],
  quiz: [
    { k: 'choice', q: 'one class → two ___', opts: ['clases', 'classs', 'classes', 'classies'], a: 2 },
    { k: 'choice', q: 'one day → ten ___', opts: ['days', 'daies', 'dayes', 'dies'], a: 0 },
    { k: 'choice', q: "**dishes** oxiri qanday o'qiladi?", say: 'dishes', opts: ['/s/', '/z/', '/ɪz/'], a: 2 },
    { k: 'fill', q: 'one life → two ___', a: ['lives'] },
    { k: 'fill', q: 'one party → ten ___', a: ['parties'] },
    { k: 'fix', wrong: 'The shelfs are old.', a: ['The shelves are old.'], why: "**shelf → shelves**." },
    { k: 'translate', uz: 'ikki sinf', a: ['two classes', '2 classes'] },
    { k: 'match', pairs: [['story', 'stories'], ['tomato', 'tomatoes'], ['wife', 'wives'], ['toy', 'toys']] },
  ],
  summary: [
    "Ko'pchilik otlar: **-s** (*dogs, days, photos*).",
    "**s, ss, x, sh, ch** bilan tugasa: **-es** (*dishes, classes*); **tomato, potato** → *tomatoes, potatoes*.",
    "**Undosh + y** → **-ies** (*parties, stories*); **unli + y** → **-s** (*days, toys*).",
    "**-f / -fe** → **-ves** (*shelves, lives, wives*), lekin *roofs*.",
    "Oxiri: **/s/** cats · **/z/** days · **/ɪz/** dishes.",
  ],
  homework: "Yangi 6 ta so'zning ko'pligini yozing va uch guruhga ajrating: /s/, /z/, /ɪz/. Keyin ularni ovoz chiqarib ayting.",
};

export default lesson;
