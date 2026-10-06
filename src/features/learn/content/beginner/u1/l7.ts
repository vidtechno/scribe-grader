import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: 'u1-l7',
  title: 'How do you spell it?',
  titleUz: 'Harflab aytish va sinf iboralari',
  goal: "Ismingizni va so'zlarni harfma-harf aytasiz (**How do you spell…?**), o'qituvchining topshiriqlarini (*Open your books, Listen and repeat*) tushunasiz va darsda kerakli iboralarni (*Sorry, I don't understand. Can you repeat that, please?*) ishlatasiz.",
  slides: [
    {
      title: 'Nega harflab aytish kerak?',
      blocks: [
        { t: 'p', md: "Ingliz tilida so'z **eshitilganidek yozilmaydi** — buni o'tgan darslarda ko'rdingiz (*eight, two, one*). Shuning uchun inglizlar tez-tez so'raydi: **\"How do you spell it?\"** — \"Bu qanday yoziladi?\"" },
        { t: 'p', md: "Siz ham mehmonxonada, bankda, telefonda yoki onlayn ro'yxatdan o'tishda ismingizni **harfma-harf** aytishingiz kerak bo'ladi. Buning uchun 1–2-darslardagi harf nomlari kerak:" },
        {
          t: 'table', head: ['Tovush', 'Harflar'],
          rows: [
            ['ey', 'A, H, J, K'],
            ['i:', 'B, C, D, E, G, P, T, V'],
            ['e', 'F, L, M, N, S, X, Z'],
            ['ay', 'I, Y'],
            ['ou', 'O'],
            ['yu:', 'Q, U, W'],
            ['a:', 'R'],
          ],
        },
        { t: 'check', ex: { k: 'listen', say: 'R', opts: ['A', 'E', 'R', 'I'], a: 2, why: "\"a:\" — **R**. Harflab aytishda eng ko'p adashtiriladigan harf!" } },
      ],
    },
    {
      title: 'How do you spell your name?',
      blocks: [
        {
          t: 'examples', items: [
            { en: 'How do you spell your name?', uz: 'Ismingiz qanday yoziladi?' },
            { en: 'A-Z-I-Z.', uz: 'A-Z-I-Z.', note: "harflar **nomi bilan**: \"ey — zed — ay — zed\"" },
            { en: 'How do you spell "book"?', uz: '"book" qanday yoziladi?' },
            { en: 'B-O-O-K. Double O.', uz: 'B-O-O-K. Ikkita O.' },
          ],
        },
        { t: 'p', md: "Qoidalar:\n• Ikki bir xil harf ketma-ket kelsa — **double**: *Anna* → \"A, **double N**, A\"\n• Ismlar **katta harf** bilan boshlanadi; kerak bo'lsa ayting: **capital A**\n• O'zbek ismlaridagi tutuq belgisi (o', g') — **apostrophe**: *G'ayrat* → \"G, apostrophe, A, Y, R, A, T\"" },
        {
          t: 'dialog', lines: [
            { who: 'Receptionist', en: "Hello! What's your name, please?", uz: 'Salom! Ismingiz nima, iltimos?' },
            { who: 'Dilnoza', en: 'My name is Dilnoza Karimova.', uz: 'Mening ismim Dilnoza Karimova.' },
            { who: 'Receptionist', en: 'How do you spell your name?', uz: 'Ismingiz qanday yoziladi?' },
            { who: 'Dilnoza', en: 'D-I-L-N-O-Z-A.', uz: 'D-I-L-N-O-Z-A.' },
            { who: 'Receptionist', en: 'Thank you.', uz: 'Rahmat.' },
          ],
        },
        { t: 'check', ex: { k: 'choice', q: "*Anna* ismini qanday harflab aytasiz?", opts: ['A, N, A', 'A, double N, A', 'A, two N, A', 'double A, N'], a: 1, why: "Ikki bir xil harf — **double N**." } },
      ],
    },
    {
      title: "Ehtiyot bo'ling: o'xshash harflar",
      blocks: [
        { t: 'p', md: "Harflab aytganda o'zbek o'quvchilari ko'pincha shu harflarni adashtiradi. Har bir juftlikni tinglang:" },
        {
          t: 'sounds', items: [
            { label: 'E / I', say: 'E, I', uz: "**E** — \"i:\", **I** — \"ay\". O'zbekchaga teskari!", examples: ['E', 'I'] },
            { label: 'A / R', say: 'A, R', uz: "**A** — \"ey\", **R** — \"a:\". R ni \"er\" demang.", examples: ['A', 'R'] },
            { label: 'G / J', say: 'G, J', uz: "**G** — \"dji:\", **J** — \"djey\".", examples: ['G', 'J'] },
            { label: 'U / W / Y', say: 'U, W, Y', uz: "**U** — \"yu:\", **W** — \"dabl yu:\", **Y** — \"uay\".", examples: ['U', 'W', 'Y'] },
          ],
        },
        {
          t: 'compare',
          good: { title: "To'g'ri: Ilhom", items: ['"ay — el — eych — ou — em"'] },
          bad: { title: "Noto'g'ri", items: ["\"i — el — xa — o — em\" (o'zbekcha nomlar)"] },
        },
        { t: 'tip', tone: 'good', md: "Mashq: o'z ismingiz, familiyangiz va shahringiz nomini inglizcha harflab ayting. Bu — eng foydali alifbo mashqi." },
        { t: 'check', ex: { k: 'listen', say: 'J, A, M, I, L, A', opts: ['Jamila', 'Gamila', 'Jemila', 'Jamela'], a: 0, why: "\"djey — ey — em — ay — el — ey\" — **Jamila**." } },
      ],
    },
    {
      title: "O'qituvchining topshiriqlari",
      blocks: [
        { t: 'p', md: "Darsda o'qituvchi qisqa buyruqlar beradi. Ular fe'lning eng oddiy shakli bilan aytiladi:" },
        {
          t: 'table', head: ['Inglizcha', "O'zbekcha"],
          rows: [
            ['Open your books.', 'Kitoblaringizni oching.'],
            ['Close your books.', 'Kitoblaringizni yoping.'],
            ['Listen.', 'Tinglang.'],
            ['Listen and repeat.', 'Tinglang va takrorlang.'],
            ['Read the text.', "Matnni o'qing."],
            ['Write the word.', "So'zni yozing."],
            ['Spell the word.', "So'zni harflab ayting."],
          ],
          speak: [0],
        },
        {
          t: 'sounds', items: [
            { label: 'write', say: 'write', uz: "**w eshitilmaydi**: \"rayt\". (*right* — \"to'g'ri\" ham xuddi shunday o'qiladi!)", examples: ['write', 'Write the word.'] },
            { label: 'listen', say: 'listen', uz: "**t eshitilmaydi**: \"lisn\".", examples: ['listen', 'Listen and repeat.'] },
            { label: 'read', say: 'read', uz: "**ea** = uzun \"i:\": \"ri:d\".", examples: ['read', 'Read the text.'] },
            { label: 'close', say: 'close', uz: "Sehrli e: o = \"ou\", s = **\"z\"**: \"klouz\".", examples: ['close', 'Close your books.'] },
          ],
        },
        { t: 'check', ex: { k: 'tf', q: "*write* so'zida **w** harfi eshitiladi.", a: false, why: "*write* = \"rayt\" — w eshitilmaydi." } },
      ],
    },
    {
      title: "O'quvchi uchun foydali iboralar",
      blocks: [
        {
          t: 'examples', items: [
            { en: "Sorry, I don't understand.", uz: 'Kechirasiz, tushunmadim.' },
            { en: 'Can you repeat that, please?', uz: 'Takrorlay olasizmi, iltimos?' },
            { en: 'How do you spell it?', uz: 'U qanday yoziladi?' },
            { en: 'How do you say "kitob" in English?', uz: '"Kitob" inglizcha qanday?' },
            { en: 'What does "spell" mean?', uz: '"spell" nima degani?' },
          ],
        },
        {
          t: 'compare',
          good: { title: "To'g'ri", items: ['How do you spell your name?', "I don't understand.", 'Can you repeat that, please?'] },
          bad: { title: "Noto'g'ri", items: ['How you spell your name?', 'I not understand.', 'Repeat!'] },
        },
        { t: 'tip', tone: 'warn', md: "Savoldagi **do** — tarjima qilinmaydi, lekin tushib qolmasligi kerak: **How do you spell…?** Buni 3-bo'limda batafsil o'rganamiz; hozircha tayyor ibora sifatida yodlang." },
        { t: 'tip', tone: 'info', md: "Faqat *\"Repeat!\"* deyish qo'pol eshitiladi. Har doim **please** qo'shing: *Can you repeat that, please?*" },
        { t: 'check', ex: { k: 'order', uz: 'Ismingiz qanday yoziladi?', words: ['How', 'do', 'you', 'spell', 'your', 'name'], why: "*How **do** you spell your name?* — \"do\" kerak." } },
      ],
    },
    {
      title: "Yangi so'zlar",
      blocks: [
        {
          t: 'examples', items: [
            { en: 'name', uz: 'ism', note: 'sehrli e: "neym"' },
            { en: 'spell', uz: 'harflab aytmoq / yozmoq' },
            { en: 'letter', uz: 'harf (yana: xat)' },
            { en: 'word', uz: "so'z", note: "or = uzun \"ə:\", girl so'zidagi kabi" },
            { en: 'repeat', uz: 'takrorlamoq', note: "urg'u: re-**PEAT**" },
            { en: 'listen', uz: 'tinglamoq', note: 't eshitilmaydi' },
            { en: 'read', uz: "o'qimoq", note: '"ri:d"' },
            { en: 'write', uz: 'yozmoq', note: 'w eshitilmaydi' },
            { en: 'open', uz: 'ochmoq' },
            { en: 'close', uz: 'yopmoq', note: '"klouz"' },
          ],
        },
        { t: 'check', ex: { k: 'listen', say: 'word', opts: ['world', 'word', 'water', 'write'], a: 1 } },
      ],
    },
  ],
  words: [
    { en: 'name', uz: 'ism', ipa: 'neɪm', pos: 'noun', ex: 'My name is Ali.', exUz: 'Mening ismim Ali.' },
    { en: 'spell', uz: 'harflab aytmoq', ipa: 'spel', pos: 'verb', ex: 'How do you spell your name?', exUz: 'Ismingiz qanday yoziladi?' },
    { en: 'letter', uz: 'harf', ipa: 'ˈlet.ə', pos: 'noun', ex: 'A is a letter.', exUz: 'A — bu harf.' },
    { en: 'word', uz: "so'z", ipa: 'wɜːd', pos: 'noun', ex: 'Write the word.', exUz: "So'zni yozing." },
    { en: 'repeat', uz: 'takrorlamoq', ipa: 'rɪˈpiːt', pos: 'verb', ex: 'Listen and repeat.', exUz: 'Tinglang va takrorlang.' },
    { en: 'listen', uz: 'tinglamoq', ipa: 'ˈlɪs.ən', pos: 'verb', ex: 'Listen, please.', exUz: 'Tinglang, iltimos.' },
    { en: 'read', uz: "o'qimoq", ipa: 'riːd', pos: 'verb', ex: 'Read the word.', exUz: "So'zni o'qing." },
    { en: 'write', uz: 'yozmoq', ipa: 'raɪt', pos: 'verb', ex: 'Write your name.', exUz: 'Ismingizni yozing.' },
    { en: 'open', uz: 'ochmoq', ipa: 'ˈəʊ.pən', pos: 'verb', ex: 'Open your books.', exUz: 'Kitoblaringizni oching.' },
    { en: 'close', uz: 'yopmoq', ipa: 'kləʊz', pos: 'verb', ex: 'Close your books.', exUz: 'Kitoblaringizni yoping.' },
  ],
  practice: [
    { k: 'listen', say: 'A, N, N, A', opts: ['Ana', 'Anna', 'Enna', 'Inna'], a: 1, why: "\"ey — en — en — ey\" — **Anna**." },
    { k: 'listen', say: 'D, I, L, N, O, Z, A', opts: ['Delnoza', 'Dilnora', 'Dilnoza', 'Dilnoze'], a: 2, why: "\"di: — ay — el — en — ou — zed — ey\" — **Dilnoza**." },
    { k: 'listen', say: 'G, U, L, I', opts: ['Juli', 'Guli', 'Gule', 'Gwli'], a: 1, why: "\"dji: — yu: — el — ay\" — **Guli**." },
    { k: 'choice', q: "*book* so'zini qanday harflab aytasiz?", opts: ['B, O, K', 'B, double O, K', 'B, two O, K', 'double B, O, K'], a: 1 },
    { k: 'match', pairs: [['read', "o'qimoq"], ['write', 'yozmoq'], ['listen', 'tinglamoq'], ['open', 'ochmoq'], ['close', 'yopmoq']] },
    { k: 'match', pairs: [['name', 'ism'], ['letter', 'harf'], ['word', "so'z"], ['repeat', 'takrorlamoq'], ['spell', 'harflab aytmoq']] },
    { k: 'choice', q: "O'qituvchi tez gapirdi va siz tushunmadingiz. Nima deysiz?", opts: ['Goodbye.', 'Can you repeat that, please?', 'Nice to meet you.', 'Close your books.'], a: 1 },
    { k: 'tf', q: "*listen* so'zida **t** harfi eshitilmaydi.", a: true, why: "*listen* = \"lisn\"." },
    { k: 'tf', q: "*close* (yopmoq) so'zidagi **s** \"z\" bo'lib o'qiladi.", a: true, why: "*close* = \"klouz\"." },
    { k: 'fill', q: 'How do you ___ your name?', a: ['spell'], uz: 'Ismingiz qanday yoziladi?', why: "**spell** — harflab aytmoq." },
    { k: 'fill', q: 'Listen and ___.', a: ['repeat'], uz: 'Tinglang va takrorlang.', why: "**repeat** — takrorlamoq." },
    { k: 'fill', q: "Sorry, I don't ___.", a: ['understand'], uz: 'Kechirasiz, tushunmadim.', why: "*I don't **understand**.*" },
    { k: 'order', uz: 'Kitoblaringizni oching.', words: ['Open', 'your', 'books'], extra: ['close'], why: "*Open your books.* — buyruq fe'l bilan boshlanadi." },
    { k: 'translate', uz: 'Ismingizni yozing.', a: ['write your name', 'write your name please', 'please write your name'], why: "**Write your name.**" },
    { k: 'speak', say: 'How do you spell your name?', uz: "\"do\" ni tushirmasdan ayting" },
    { k: 'speak', say: 'Can you repeat that, please?', uz: 'Muloyim iltimos qiling' },
  ],
  quiz: [
    { k: 'listen', say: 'J, A, S, U, R', opts: ['Gasur', 'Jasur', 'Jasir', 'Jasar'], a: 1 },
    { k: 'listen', say: 'E, R, K, I, N', opts: ['Irkin', 'Erken', 'Arkin', 'Erkin'], a: 3, why: "\"i: — a: — key — ay — en\" — **Erkin**." },
    { k: 'listen', say: 'Close your books.', opts: ['Open your books.', 'Close your books.', 'Read your books.', 'Write your name.'], a: 1 },
    { k: 'choice', q: "Qaysi savol **to'g'ri**?", opts: ['How you spell your name?', 'How spell you your name?', 'How do you spell your name?', 'How do spell your name?'], a: 2 },
    { k: 'fill', q: 'Can you ___ that, please?', a: ['repeat'], uz: 'Takrorlay olasizmi, iltimos?' },
    { k: 'fill', q: '___ the text.', a: ['read'], uz: "Matnni o'qing." },
    { k: 'translate', uz: 'Kitoblaringizni yoping.', a: ['close your books', 'close your books please', 'please close your books'] },
    { k: 'translate', uz: 'Tinglang va takrorlang.', a: ['listen and repeat', 'listen and repeat please', 'please listen and repeat'] },
    { k: 'order', uz: 'Kechirasiz, tushunmadim.', words: ['Sorry', 'I', "don't", 'understand'], extra: ['not'] },
    { k: 'tf', q: "*write* so'zi \"rayt\" deb o'qiladi.", a: true },
    { k: 'match', pairs: [['letter', 'harf'], ['word', "so'z"], ['name', 'ism'], ['spell', 'harflab aytmoq']] },
  ],
  summary: [
    "Savol: **How do you spell your name?** — javob harflar **nomi bilan**: *A-Z-I-Z*.",
    "Ikki bir xil harf — **double**: *Anna* = A, double N, A. Tutuq belgisi — **apostrophe**.",
    "Topshiriqlar: **Open / Close your books. Listen and repeat. Read. Write.**",
    "Kerakli iboralar: **Sorry, I don't understand. Can you repeat that, please?**",
    "Talaffuz: *write* (w yo'q), *listen* (t yo'q), *read* = \"ri:d\", *close* = \"klouz\".",
  ],
  homework: "Ismingiz, familiyangiz, shahringiz va 3 ta do'stingizning ismini inglizcha harflab ovoz chiqarib ayting. Yozib olib, E/I va A/R harflarini to'g'ri aytganingizni tekshiring.",
};

export default lesson;
