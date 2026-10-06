import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: 'u1-l8',
  title: 'Colours & things',
  titleUz: 'Ranglar va narsalar',
  goal: "Asosiy ranglarni va **big, small, new** sifatlarini to'g'ri aytasiz, ularni ot oldiga qo'yib narsalarni tasvirlaysiz (**a red bag, an orange, a big dog**) va **What colour is it? — It's blue.** savol-javobini ishlatasiz.",
  slides: [
    {
      title: 'Ranglar',
      blocks: [
        { t: 'p', md: "Rang so'zlari atrofimizdagi narsalarni tasvirlash uchun eng kerakli so'zlar. Har birini tinglang va **talaffuziga** e'tibor bering — bu yerda o'tgan darslardagi tovushlarning hammasi bor:" },
        {
          t: 'sounds', items: [
            { label: 'red', say: 'red', uz: "**\"red\"** — r yumshoq, til tanglayga urilmaydi (o'zbekcha \"r\" kabi titratmang).", examples: ['red', 'a red bag'] },
            { label: 'blue', say: 'blue', uz: "**\"blu:\"** — uzun \"u:\", lablar dumaloq. Oxiridagi e eshitilmaydi.", examples: ['blue', 'a blue pen'] },
            { label: 'green', say: 'green', uz: "**\"gri:n\"** — **ee** = uzun \"i:\" (4-dars).", examples: ['green', 'a green apple'] },
            { label: 'yellow', say: 'yellow', uz: "**\"yelou\"** — y = o'zbekcha \"y\", oxiri \"ou\". Urg'u boshida: **YEL**low.", examples: ['yellow', 'the yellow sun'] },
            { label: 'black', say: 'black', uz: "**\"blæk\"** — qisqa a (*cat* kabi), oxirida **ck** = \"k\".", examples: ['black', 'a black cat'] },
            { label: 'white', say: 'white', uz: "**\"uayt\"** — **wh** lablar dumaloq, i = \"ay\" (sehrli e).", examples: ['white', 'a white egg'] },
            { label: 'brown', say: 'brown', uz: "**\"braun\"** — **ow** = \"au\", xuddi o'zbekcha \"au\" kabi.", examples: ['brown', 'a brown dog'] },
          ],
        },
        { t: 'tip', tone: 'info', md: "Yana foydali ranglar: **orange** (to'q sariq), **pink** (pushti), **grey** (kulrang). *Colour* — britancha yozuv, Amerikada *color*." },
        { t: 'check', ex: { k: 'listen', say: 'brown', opts: ['blue', 'brown', 'black', 'green'], a: 1, why: "\"braun\" — **brown** (jigarrang)." } },
      ],
    },
    {
      title: 'Sifat + ot: a red bag',
      blocks: [
        { t: 'p', md: "Xushxabar: ingliz tilida sifat **otdan oldin** keladi — xuddi o'zbek tilidagidek! *qizil sumka* → **a red bag**." },
        {
          t: 'examples', items: [
            { en: 'a red bag', uz: 'qizil sumka' },
            { en: 'a black cat', uz: 'qora mushuk' },
            { en: 'a green apple', uz: 'yashil olma' },
            { en: 'a white egg', uz: 'oq tuxum' },
            { en: 'a blue umbrella', uz: "ko'k soyabon" },
          ],
        },
        {
          t: 'compare',
          good: { title: "To'g'ri", items: ['a red bag', 'a black dog', 'a yellow kite'] },
          bad: { title: "Noto'g'ri", items: ['a bag red', 'a dog black', 'a reds bag'] },
        },
        { t: 'tip', tone: 'good', md: "Sifat **hech qachon o'zgarmaydi**: unga -s qo'shilmaydi, u erkak/ayolga qarab ham o'zgarmaydi. *red* — doim *red*." },
        { t: 'check', ex: { k: 'order', uz: 'qora mushuk', words: ['a', 'black', 'cat'], why: "Sifat otdan oldin: **a black cat**." } },
      ],
    },
    {
      title: 'a yoki an? Sifat qaror qiladi',
      blocks: [
        { t: 'p', md: "Eslang: unli tovush bilan boshlanadigan so'z oldida **an**. Agar ot oldiga sifat qo'shsangiz, **a/an sifatga qarab** tanlanadi — chunki endi sifat birinchi turadi:" },
        {
          t: 'table', head: ['Faqat ot', 'Sifat + ot'],
          rows: [
            ['an apple', 'a red apple'],
            ['an egg', 'a big egg'],
            ['an umbrella', 'a black umbrella'],
            ['a bag', 'an orange bag'],
          ],
          speak: [0, 1],
        },
        { t: 'tip', tone: 'warn', md: "*an apple*, lekin **a** red apple — chunki *red* undosh bilan boshlanadi. *a bag*, lekin **an** orange bag — chunki *orange* unli bilan boshlanadi." },
        { t: 'check', ex: { k: 'fill', q: 'I have ___ big egg.', a: ['a'], uz: 'Menda katta tuxum bor.', why: "*big* undosh bilan boshlanadi → **a** big egg (garchi *an egg* bo'lsa ham)." } },
      ],
    },
    {
      title: 'big, small, new',
      blocks: [
        {
          t: 'sounds', items: [
            { label: 'big', say: 'big', uz: "**\"big\"** — qisqa i (*sit* kabi). Ma'nosi: katta.", examples: ['a big dog', 'a big tree'] },
            { label: 'small', say: 'small', uz: "**\"smo:l\"** — **a** bu yerda uzun \"o:\". Ma'nosi: kichik.", examples: ['a small cat', 'a small bag'] },
            { label: 'new', say: 'new', uz: "**\"nyu:\"** — U harfining nomi kabi. Ma'nosi: yangi.", examples: ['a new pen', 'a new book'] },
          ],
        },
        {
          t: 'examples', items: [
            { en: 'a big dog', uz: 'katta it' },
            { en: 'a small fish', uz: 'kichik baliq' },
            { en: 'a new book', uz: 'yangi kitob' },
            { en: 'a big black dog', uz: 'katta qora it', note: "ikki sifat: avval **o'lcham**, keyin **rang**" },
          ],
        },
        { t: 'tip', tone: 'info', md: "**big** ↔ **small** — qarama-qarshi ma'noli so'zlar. Juft qilib yodlang: *a big ship — a small ship*." },
        { t: 'check', ex: { k: 'choice', q: "**katta qora it** — qaysi biri to'g'ri?", opts: ['a dog big black', 'a black big dog', 'a big black dog', 'a big dog black'], a: 2, why: "O'lcham, keyin rang, keyin ot: **a big black dog**." } },
      ],
    },
    {
      title: "What colour is it? — It's red.",
      blocks: [
        { t: 'p', md: "Rangni so'rash va aytish uchun ikki tayyor ibora:" },
        {
          t: 'examples', items: [
            { en: 'What colour is it?', uz: 'U qanday rangda?' },
            { en: "It's red.", uz: 'U qizil.', note: "**It's** = it is" },
            { en: 'The bag is blue.', uz: "Sumka ko'k." },
            { en: 'The cat is small.', uz: 'Mushuk kichik.' },
          ],
        },
        {
          t: 'compare',
          good: { title: "To'g'ri", items: ['The bag is blue.', "It's red."] },
          bad: { title: "Noto'g'ri", items: ['The bag blue.', 'It red.'] },
        },
        { t: 'tip', tone: 'warn', md: "O'zbekchada *\"Sumka ko'k\"* deymiz — fe'l kerak emas. Inglizchada esa **is** shart: *The bag **is** blue.* Buni 2-bo'limda to'liq o'rganamiz." },
        {
          t: 'dialog', lines: [
            { who: 'Teacher', en: 'Look! What colour is it?', uz: "Qarang! Bu qanday rangda?" },
            { who: 'Student', en: "It's green.", uz: 'Yashil.' },
            { who: 'Teacher', en: 'Yes! A green apple. And this?', uz: 'Ha! Yashil olma. Bu-chi?' },
            { who: 'Student', en: "It's a big yellow bag.", uz: 'Bu katta sariq sumka.' },
            { who: 'Teacher', en: 'Very good!', uz: 'Juda yaxshi!' },
          ],
        },
        { t: 'check', ex: { k: 'fill', q: 'The cat ___ white.', a: ['is'], uz: 'Mushuk oq.', why: "**is** tushib qolmaydi: *The cat **is** white.*" } },
      ],
    },
    {
      title: "Yangi so'zlar",
      blocks: [
        {
          t: 'examples', items: [
            { en: 'red', uz: 'qizil' },
            { en: 'blue', uz: "ko'k, havorang" },
            { en: 'green', uz: 'yashil' },
            { en: 'yellow', uz: 'sariq' },
            { en: 'black', uz: 'qora' },
            { en: 'white', uz: 'oq' },
            { en: 'brown', uz: 'jigarrang' },
            { en: 'big', uz: 'katta' },
            { en: 'small', uz: 'kichik' },
            { en: 'new', uz: 'yangi' },
          ],
        },
        { t: 'tip', tone: 'good', md: "Yodlash usuli: uyingizdagi narsalarga qarab inglizcha ayting — *a white table, a small black bag, a new red pen*." },
      ],
    },
  ],
  words: [
    { en: 'red', uz: 'qizil', ipa: 'red', pos: 'adj', ex: 'I have a red bag.', exUz: 'Menda qizil sumka bor.' },
    { en: 'blue', uz: "ko'k, havorang", ipa: 'bluː', pos: 'adj', ex: 'The pen is blue.', exUz: "Ruchka ko'k." },
    { en: 'green', uz: 'yashil', ipa: 'ɡriːn', pos: 'adj', ex: 'This is a green apple.', exUz: 'Bu yashil olma.' },
    { en: 'yellow', uz: 'sariq', ipa: 'ˈjel.əʊ', pos: 'adj', ex: 'The sun is yellow.', exUz: 'Quyosh sariq.' },
    { en: 'black', uz: 'qora', ipa: 'blæk', pos: 'adj', ex: 'I have a black cat.', exUz: 'Mening qora mushugim bor.' },
    { en: 'white', uz: 'oq', ipa: 'waɪt', pos: 'adj', ex: 'The egg is white.', exUz: 'Tuxum oq.' },
    { en: 'brown', uz: 'jigarrang', ipa: 'braʊn', pos: 'adj', ex: 'This is a brown dog.', exUz: 'Bu jigarrang it.' },
    { en: 'big', uz: 'katta', ipa: 'bɪɡ', pos: 'adj', ex: 'The whale is big.', exUz: 'Kit katta.' },
    { en: 'small', uz: 'kichik', ipa: 'smɔːl', pos: 'adj', ex: 'It is a small fish.', exUz: 'Bu kichik baliq.' },
    { en: 'new', uz: 'yangi', ipa: 'njuː', pos: 'adj', ex: 'This is my new book.', exUz: 'Bu mening yangi kitobim.' },
  ],
  practice: [
    { k: 'listen', say: 'yellow', opts: ['yellow', 'white', 'blue', 'red'], a: 0 },
    { k: 'listen', say: 'black', opts: ['blue', 'brown', 'black', 'big'], a: 2, why: "\"blæk\" — **black** (qora)." },
    { k: 'listen', say: 'a small white cat', opts: ['a small white cat', 'a big white cat', 'a small black cat', 'a white small cat'], a: 0 },
    { k: 'match', pairs: [['red', 'qizil'], ['green', 'yashil'], ['yellow', 'sariq'], ['white', 'oq'], ['brown', 'jigarrang']] },
    { k: 'match', pairs: [['big', 'katta'], ['small', 'kichik'], ['new', 'yangi'], ['black', 'qora'], ['blue', "ko'k"]] },
    { k: 'choice', q: "**sariq soyabon** — qaysi biri to'g'ri?", opts: ['an yellow umbrella', 'a umbrella yellow', 'a yellow umbrella', 'an umbrella yellow'], a: 2, why: "Sifat otdan oldin; *yellow* undosh bilan boshlanadi → **a yellow umbrella**." },
    { k: 'choice', q: "Qaysi biri to'g'ri?", opts: ['a orange bag', 'an orange bag', 'an bag orange', 'a bag orange'], a: 1, why: "*orange* unli bilan boshlanadi → **an orange bag**." },
    { k: 'tf', q: "Ingliz tilida sifat otdan **keyin** keladi: *a bag red*.", a: false, why: "Sifat otdan **oldin**: *a red bag* — o'zbekchadagidek." },
    { k: 'tf', q: "*small* so'zidagi **a** uzun \"o:\" bo'lib o'qiladi.", a: true, why: "*small* = \"smo:l\"." },
    { k: 'fill', q: 'a ___ apple', a: ['green'], uz: 'yashil olma', why: "yashil — **green**." },
    { k: 'fill', q: 'I have ___ old cat.', a: ['an'], uz: 'Menda keksa mushuk bor.', why: "*old* (keksa) unli bilan boshlanadi → **an** old cat." },
    { k: 'fill', q: "What colour is it? – ___ blue.", a: ["it's", 'it is'], uz: "U qanday rangda? – U ko'k.", why: "**It's** blue. (= It is blue.)" },
    { k: 'order', uz: 'Menda yangi qizil ruchka bor.', words: ['I', 'have', 'a', 'new', 'red', 'pen'], extra: ['an'], why: "*I have a new red pen.* — sifatlar otdan oldin." },
    { k: 'translate', uz: 'katta it', a: ['a big dog', 'big dog', 'the big dog'], why: "**a big dog** — sifat otdan oldin." },
    { k: 'translate', uz: 'Mushuk oq.', a: ['the cat is white', "the cat's white"], why: "*The cat **is** white.* — **is** ni tushirmang." },
    { k: 'speak', say: 'red, blue, green, yellow, black, white, brown', uz: "Ranglarni aniq ayting: blue — uzun u:, brown — \"au\"" },
  ],
  quiz: [
    { k: 'listen', say: 'brown', opts: ['blue', 'black', 'brown', 'big'], a: 2 },
    { k: 'listen', say: 'a big green tree', opts: ['a big green tree', 'a small green tree', 'a big green three', 'a green big tree'], a: 0 },
    { k: 'choice', q: "**qizil olma** — qaysi biri to'g'ri?", opts: ['an red apple', 'a red apple', 'a apple red', 'an apple red'], a: 1, why: "*red* undosh bilan boshlanadi → **a red apple**." },
    { k: 'choice', q: "\"jigarrang\" inglizcha qanday?", opts: ['black', 'brown', 'blue', 'grey'], a: 1 },
    { k: 'fill', q: 'The bag ___ black.', a: ['is'], uz: 'Sumka qora.' },
    { k: 'fill', q: 'I have ___ orange umbrella.', a: ['an'], uz: "Menda to'q sariq soyabon bor." },
    { k: 'translate', uz: 'yangi kitob', a: ['a new book', 'new book', 'the new book'] },
    { k: 'translate', uz: 'kichik qora mushuk', a: ['a small black cat', 'small black cat', 'the small black cat'] },
    { k: 'translate', uz: 'Quyosh sariq.', a: ['the sun is yellow', "the sun's yellow"] },
    { k: 'order', uz: 'Bu katta oq kema.', words: ["It's", 'a', 'big', 'white', 'ship'], extra: ['an'] },
    { k: 'match', pairs: [['white', 'oq'], ['blue', "ko'k"], ['small', 'kichik'], ['new', 'yangi']] },
  ],
  summary: [
    "Ranglar: **red, blue, green, yellow, black, white, brown** (+ orange, pink, grey).",
    "Sifat **otdan oldin** keladi, o'zbekchadagidek: **a red bag**, **a big dog**. Sifat o'zgarmaydi.",
    "**a / an** birinchi so'zga qarab: *an apple* → **a red apple**; *a bag* → **an orange bag**.",
    "Ikki sifat: avval o'lcham, keyin rang — **a big black dog**.",
    "**What colour is it? — It's blue.** Rang aytganda **is** shart: *The bag is blue.*",
  ],
  homework: "Uyingizdagi 10 ta narsani inglizcha tasvirlang: *a white table, a small blue bag, a new black pen*. Har biri uchun *What colour is it? — It's …* savol-javobini ovoz chiqarib ayting.",
};

export default lesson;
