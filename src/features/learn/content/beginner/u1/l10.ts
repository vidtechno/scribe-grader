import type { Lesson } from '../../../types';

// Mini lesson (review): whole unit u1 — alphabet, vowels, letter teams, greetings, numbers, spelling, colours.
const lesson: Lesson = {
  id: 'u1-l10',
  title: 'Letters & sounds: final review',
  titleUz: 'Alifbo va tovushlar: yakuniy takror',
  mini: true,
  goal: "1-bo'limdagi hamma narsani takrorlaysiz: **alifbo, unlilar, harf juftliklari, salomlashish, 0–20 raqamlar, harflab aytish va ranglar**. Bo'lim oxirida o'zingizni sinab ko'rasiz.",
  slides: [
    {
      title: 'Harflar va tovushlar',
      blocks: [
        { t: 'p', md: "Ingliz alifbosida **26 harf** bor. Unlilar — **a, e, i, o, u**; qolganlari — undoshlar. Unli **qisqa** (*hat, bed, sit, hot, cut*) yoki **uzun** (*hate, tree, kite, home, cute*) bo'lishi mumkin: oxirgi **sehrli e** unlini uzun qiladi." },
        { t: 'table', head: ['Harf juftligi', 'Tovush', 'Misol'], speak: [2], rows: [
          ['sh', '"sh"', 'ship'],
          ['ch', '"ch"', 'chicken'],
          ['th', 'tilni tishlar orasiga qo\'ying', 'think'],
          ['ph', '"f"', 'photo'],
          ['ng', '"ng"', 'sing'],
          ['oo', 'uzun "u:"', 'food'],
        ] },
        { t: 'check', ex: { k: 'choice', q: '*hate* so\'zidagi unli qanday o\'qiladi?', opts: ['Qisqa "æ"', 'Uzun "ey"', 'Uzun "i:"', 'O\'qilmaydi'], a: 1, why: "Sehrli e: *hat* → *hate*." } },
      ],
    },
    {
      title: 'Salom, raqamlar va ranglar',
      blocks: [
        { t: 'examples', items: [
          { en: "Hello, I'm Malika. Nice to meet you.", uz: 'Salom, men Malikaman. Tanishganimdan xursandman.' },
          { en: "How are you? — I'm fine, thanks. And you?", uz: "Qalaysiz? — Yaxshi, rahmat. O'zingiz-chi?" },
          { en: 'How do you spell your name?', uz: 'Ismingiz qanday yoziladi?' },
          { en: "I'm twelve. My bag is blue.", uz: "Men 12 yoshdaman. Sumkam ko'k." },
        ] },
        { t: 'p', md: "Raqamlar: *zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve… twenty*. Ranglar: *red, blue, green, yellow, black, white, brown*." },
        { t: 'check', ex: { k: 'fill', q: 'What ___ is it? — It is red.', a: ['colour', 'color'], uz: 'U qanday rang? — U qizil.', why: "**What colour is it?**" } },
        { t: 'check', ex: { k: 'listen', say: 'thirteen', opts: ['thirty', 'thirteen', 'fourteen', 'eighteen'], a: 1 } },
      ],
    },
    {
      title: "Ehtiyot bo'ling: eng ko'p xatolar",
      blocks: [
        { t: 'compare', good: { title: "To'g'ri", items: ["I'm fine, thanks.", 'How do you spell it?', 'a green apple', 'an egg'] }, bad: { title: "Noto'g'ri", items: ['I fine, thanks.', 'How you spell it?', 'green a apple', 'a egg'] } },
        { t: 'tip', tone: 'warn', md: "Adashadigan harflar: **E** = \"i:\", **I** = \"ay\", **R** = \"a:\". **thirteen** (13) va **thirty** (30) ni ham ajrating: urg'u qayerda?" },
        { t: 'check', ex: { k: 'choice', q: "Harflab aytishda *Anna* — ", opts: ['A, N, A', 'A, double N, A', 'A, two N, A', 'double A, N'], a: 1, why: "Ikki bir xil harf — **double N**." } },
      ],
    },
  ],
  words: [
    { en: 'alphabet', uz: 'alifbo', ipa: 'ˈæl.fə.bet', pos: 'noun', ex: 'The English alphabet has twenty-six letters.', exUz: 'Ingliz alifbosida yigirma olti harf bor.' },
    { en: 'vowel', uz: 'unli harf', ipa: 'ˈvaʊ.əl', pos: 'noun', ex: 'A, E, I, O, U are vowels.', exUz: 'A, E, I, O, U — unli harflar.' },
    { en: 'sound', uz: 'tovush', ipa: 'saʊnd', pos: 'noun', ex: 'This letter has a long sound.', exUz: 'Bu harfning uzun tovushi bor.' },
    { en: 'colour', uz: 'rang', ipa: 'ˈkʌl.ə', pos: 'noun', ex: 'Blue is my colour.', exUz: "Ko'k — mening rangim." },
  ],
  practice: [
    { k: 'choice', q: "Qaysi so'zda **sehrli e** bor?", opts: ['hat', 'cute', 'sit', 'cut'], a: 1, why: "*cute* — uzun \"yu:\"." },
    { k: 'choice', q: "*photo* so'zida **ph** qanday o'qiladi?", opts: ['"p"', '"f"', '"sh"', '"th"'], a: 1 },
    { k: 'fill', q: 'Hello, ___ Ali. Nice to meet you.', a: ["I'm", 'I am'], uz: 'Salom, men Aliman.' },
    { k: 'fill', q: 'How do you ___ your name?', a: ['spell'], uz: 'Ismingiz qanday yoziladi?' },
    { k: 'order', uz: 'Mening sumkam ko\'k.', words: ['My', 'bag', 'is', 'blue'], extra: ['are'] },
    { k: 'translate', uz: 'Men o\'n ikki yoshdaman.', a: ["i'm twelve", 'i am twelve', "i'm twelve years old", 'i am twelve years old'] },
    { k: 'listen', say: 'sheep', opts: ['ship', 'sheep', 'chip', 'cheap'], a: 1, why: "*sheep* — uzun \"i:\"." },
    { k: 'listen', say: 'A, L, I', opts: ['Ali', 'Eli', 'Ola', 'Ill'], a: 0 },
    { k: 'match', pairs: [['red', 'qizil'], ['green', 'yashil'], ['white', 'oq'], ['black', 'qora'], ['yellow', 'sariq']] },
    { k: 'match', pairs: [['hello', 'salom'], ['goodbye', 'xayr'], ['sorry', 'kechirasiz'], ['thank you', 'rahmat']] },
    { k: 'fix', wrong: 'a egg', a: ['an egg'], why: "Unli tovushdan oldin **an**." },
    { k: 'dictation', say: 'Nice to meet you, too.', a: ['Nice to meet you, too.', 'Nice to meet you too.'] },
    { k: 'tf', q: "*eight* so'zi *eat* kabi o'qiladi.", a: false, why: "*eight* = \"eyt\"." },
    { k: 'speak', say: 'I think the chicken is big.', uz: 'th, ch va sh tovushlariga e\'tibor bering' },
  ],
  quiz: [
    { k: 'choice', q: 'Alifbo nechta harfdan iborat?', opts: ['20', '24', '26', '30'], a: 2 },
    { k: 'choice', q: "*How are you?* ga javob:", opts: ["I'm fine, thanks.", 'My name is Ali.', 'Goodbye.', 'Twelve.'], a: 0 },
    { k: 'listen', say: 'fifteen', opts: ['fifty', 'fifteen', 'sixteen', 'five'], a: 1 },
    { k: 'fill', q: 'a ___ umbrella (ko\'k)', a: ['blue'], uz: "ko'k soyabon" },
    { k: 'fill', q: 'Good ___, Aziz! (kechqurun)', a: ['evening'], uz: 'Xayrli kech, Aziz!' },
    { k: 'order', uz: 'Katta qora it.', words: ['a', 'big', 'black', 'dog'], extra: ['an'] },
    { k: 'fix', wrong: 'I fine, thanks.', a: ["I'm fine, thanks.", 'I am fine, thanks.'] },
    { k: 'match', pairs: [['alphabet', 'alifbo'], ['vowel', 'unli harf'], ['sound', 'tovush'], ['colour', 'rang']] },
    { k: 'tf', q: "*write* so'zida **w** eshitilmaydi.", a: true },
  ],
  summary: [
    "Alifbo — **26 harf**; unlilar a, e, i, o, u; sehrli e unlini uzun qiladi (*hat → hate*).",
    "Harf juftliklari: **sh, ch, th, ph, ng, oo** — bitta tovush beradi.",
    "Salom va tanishuv: **Hello, I'm… / Nice to meet you. / I'm fine, thanks.**",
    "Raqamlar **0–20**, ranglar va **a / an** — gaplarda ishlating.",
    "Harflash: **How do you spell it?** — harflar nomi bilan, *double* bilan.",
  ],
  homework: "Bo'lim bo'yicha o'zingizni sinang: alifboni qo'shiq kabi ayting, ismingizni harflang, 0 dan 20 gacha sanang va xonangizdagi 5 ta narsaning rangini inglizcha ayting.",
};

export default lesson;
