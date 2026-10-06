import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: 'u2-l5',
  title: 'a / an & plurals',
  titleUz: "a / an va ko'plik",
  goal: "**a** va **an** ni so'zning **tovushiga** qarab tanlaysiz (*an hour, a university*), otlarni ko'plikka to'g'ri o'tkazasiz (*-s, -es, -ies, -ves* va *child → children* kabi noto'g'ri shakllar) va **-s** oxirini **/s/, /z/, /ɪz/** deb to'g'ri talaffuz qilasiz.",
  slides: [
    {
      title: 'a / an — "bitta" degan kichik so\'z',
      blocks: [
        { t: 'p', md: "O'zbek tilida *U talaba. Bu quti.* deymiz — otdan oldin hech narsa kerak emas. Ingliz tilida esa **bitta, sanaladigan** narsa yoki odam oldidan **a** yoki **an** qo'yiladi (artikl)." },
        {
          t: 'compare',
          good: { title: "To'g'ri", items: ["I'm a student.", "It's a box.", "She's an engineer."] },
          bad: { title: "Noto'g'ri", items: ["I'm student.", "It's box.", "She's engineer."] },
        },
        { t: 'p', md: "**a / an** qachon **ishlatilmaydi**:\n• ko'plikda: *They're students.* (\"a students\" emas)\n• ismlar oldida: *I'm Ali.*\n• yolg'iz sifat bilan: *She's tired.* (lekin sifat + ot bo'lsa — *She's **a** tired woman.*)" },
        { t: 'check', ex: { k: 'choice', q: "Qaysi gap **to'g'ri**?", opts: ["He's teacher.", "He's a teacher.", "He's a teachers.", "He a teacher."], a: 1, why: "Bitta odam + kasb → **a**: *He's a teacher.*" } },
      ],
    },
    {
      title: 'a yoki an? — tovushga qarang!',
      blocks: [
        { t: 'p', md: "Qoida harfga emas, **birinchi tovushga** qarab ishlaydi:\n• **unli tovush** (a, e, i, o, u kabi eshitilsa) → **an**: *an apple, an egg, an old bag*\n• **undosh tovush** → **a**: *a box, a city, a big apple*" },
        {
          t: 'table', head: ['So\'z', 'Birinchi tovush', 'Artikl'], speak: [0],
          rows: [
            ['an hour', '"au" — h o\'qilmaydi', 'an'],
            ['a house', '"h" eshitiladi', 'a'],
            ['an umbrella', '"a" (unli)', 'an'],
            ['a university', '"yu" (y — undosh)', 'a'],
            ['an orange', '"o" (unli)', 'an'],
            ['a uniform', '"yu"', 'a'],
          ],
        },
        { t: 'tip', tone: 'warn', md: "Tuzoqlar: **an hour** (soat) — *h* o'qilmaydi, so'z \"au\" bilan boshlanadi. **a university** — *u* harfi \"yu\" bo'lib o'qiladi, shuning uchun **a**." },
        { t: 'tip', tone: 'info', md: "Artikl keyingi so'zga qaraydi: *an apple*, lekin *a **red** apple* (r — undosh). *a bag*, lekin *an **old** bag*." },
        { t: 'check', ex: { k: 'choice', q: "*It's ___ hour.*", opts: ['a', 'an', '—'], a: 1, why: "*hour* — \"au\" bilan boshlanadi (h o'qilmaydi), demak **an hour**." } },
      ],
    },
    {
      title: "Ko'plik: -s va -es",
      blocks: [
        { t: 'p', md: "O'zbek tilida ko'plik **-lar** bilan yasaladi. Ingliz tilida ko'pincha **-s** qo'shiladi: *a cat → two cats, a bag → bags, a friend → friends*." },
        { t: 'p', md: "So'z **s, x, sh, ch** (va ba'zan **z**) bilan tugasa — **-es** qo'shiladi. Aks holda talaffuz qilib bo'lmaydi: \"boxs\" ni ayta olasizmi?" },
        {
          t: 'table', head: ['Birlik', "Ko'plik", 'Nega?'], speak: [0, 1],
          rows: [
            ['a bus', 'buses', '-s → -es'],
            ['a box', 'boxes', '-x → -es'],
            ['a watch', 'watches', '-ch → -es'],
            ['a dish', 'dishes', '-sh → -es'],
            ['a pen', 'pens', 'oddiy → -s'],
          ],
        },
        {
          t: 'compare',
          good: { title: "To'g'ri", items: ['two cats', 'five boxes', 'three friends'] },
          bad: { title: "Noto'g'ri", items: ['two cat', 'five box', 'three friend'] },
        },
        { t: 'tip', tone: 'warn', md: "O'zbekchada son bilan birlik ishlatamiz: *ikkita mushuk*. Ingliz tilida **son 1 dan katta bo'lsa — ot ko'plikda**: *two cat**s***. Bu juda keng tarqalgan xato!" },
        { t: 'check', ex: { k: 'fill', q: 'one watch → two ___', a: ['watches'], why: "**-ch** bilan tugaydi → **-es**: *watches*." } },
      ],
    },
    {
      title: "Ko'plik: -y → -ies, -f → -ves",
      blocks: [
        { t: 'p', md: "**Undosh + y** bilan tugasa: **y** o'rniga **-ies**.\n**Unli + y** bilan tugasa: shunchaki **-s**." },
        {
          t: 'table', head: ['Birlik', "Ko'plik", 'Qoida'], speak: [0, 1],
          rows: [
            ['a baby', 'babies', 'b + y → -ies'],
            ['a city', 'cities', 't + y → -ies'],
            ['a boy', 'boys', 'o + y → -s'],
            ['a key', 'keys', 'e + y → -s'],
          ],
        },
        { t: 'p', md: "Ko'p so'zlarda **-f / -fe** → **-ves**:" },
        {
          t: 'table', head: ['Birlik', "Ko'plik", "O'zbekcha"], speak: [0, 1],
          rows: [
            ['a knife', 'knives', 'pichoq — pichoqlar'],
            ['a wife', 'wives', 'xotin — xotinlar'],
            ['a leaf', 'leaves', 'barg — barglar'],
          ],
        },
        { t: 'tip', tone: 'info', md: "*knife* so'zida **k** o'qilmaydi: \"nayf\". Ko'plikda ham: \"nayvz\"." },
        { t: 'check', ex: { k: 'fill', q: 'one city → two ___', a: ['cities'], why: "t + y → **-ies**: *cities*." } },
      ],
    },
    {
      title: "Noto'g'ri ko'pliklar",
      blocks: [
        { t: 'p', md: "Ba'zi so'zlar qoidaga bo'ysunmaydi — ularni **yod olish** kerak. Ular juda ko'p ishlatiladi:" },
        {
          t: 'table', head: ['Birlik', "Ko'plik", "O'zbekcha"], speak: [0, 1],
          rows: [
            ['a man', 'men', 'erkak — erkaklar'],
            ['a woman', 'women', 'ayol — ayollar ("wimin")'],
            ['a child', 'children', 'bola — bolalar'],
            ['a person', 'people', 'odam, kishi — odamlar'],
            ['a foot', 'feet', 'oyoq (panja) — oyoqlar'],
            ['a tooth', 'teeth', 'tish — tishlar'],
            ['a fish', 'fish', "baliq — baliqlar (o'zgarmaydi)"],
          ],
        },
        {
          t: 'compare',
          good: { title: "To'g'ri", items: ['two children', 'three people', 'my feet'] },
          bad: { title: "Noto'g'ri", items: ['two childs', 'three peoples', 'my foots'] },
        },
        { t: 'tip', tone: 'warn', md: "**women** talaffuzi: \"**wimin**\" — birinchi bo'g'in \"wi\". Birlikda esa *woman* — \"wumən\"." },
        { t: 'check', ex: { k: 'translate', uz: 'ikki bola', a: ['two children', '2 children'], why: "child → **children** (noto'g'ri ko'plik)." } },
      ],
    },
    {
      title: '-s qanday o\'qiladi: /s/, /z/, /ɪz/',
      blocks: [
        { t: 'p', md: "Ko'plikdagi **-s** uch xil eshitiladi. Bu qoida keyinchalik fe'llarda ham (*he works, she plays*) ishlaydi, shuning uchun hozir yaxshilab o'rganing." },
        {
          t: 'sounds', items: [
            { label: '/s/', say: 'cats, books', uz: "**p, t, k, f** (ovozsiz tovush) dan keyin — oddiy **\"s\"**.", examples: ['cats', 'books', 'students'] },
            { label: '/z/', say: 'dogs, keys', uz: "Ovozli tovush va unlilardan keyin — **\"z\"**: *dogz, keyz, babiz*. Eng ko'p uchraydigan holat!", examples: ['dogs', 'keys', 'babies', 'friends'] },
            { label: '/ɪz/', say: 'buses, boxes', uz: "**s, z, sh, ch, x, j** tovushlaridan keyin — qo'shimcha bo'g'in **\"iz\"**: *bas-iz, boks-iz*.", examples: ['buses', 'boxes', 'watches', 'oranges'] },
          ],
        },
        { t: 'tip', tone: 'good', md: "Tekshirish usuli: barmog'ingizni tomog'ingizga qo'ying va so'zning oxirgi tovushini ayting. Titrasa (*g, b, n, l*, unlilar) — **/z/**, titramasa (*t, k, p, f*) — **/s/**." },
        { t: 'check', ex: { k: 'choice', q: "Qaysi so'zda **-es** qo'shimcha bo'g'in **\"iz\"** bo'lib o'qiladi?", say: 'watches', opts: ['cats', 'dogs', 'watches', 'keys'], a: 2, why: "*watch* **ch** bilan tugaydi → \"wotʃ-iz\" — **/ɪz/**." } },
      ],
    },
  ],
  words: [
    { en: 'box', uz: 'quti', ipa: 'bɒks', pos: 'noun', ex: 'The boxes are big.', exUz: 'Qutilar katta.' },
    { en: 'bus', uz: 'avtobus', ipa: 'bʌs', pos: 'noun', ex: "It's a red bus.", exUz: 'Bu qizil avtobus.' },
    { en: 'watch', uz: "qo'l soati", ipa: 'wɒtʃ', pos: 'noun', ex: 'The watches are expensive.', exUz: 'Soatlar qimmat.' },
    { en: 'baby', uz: "chaqaloq, go'dak", ipa: 'ˈbeɪ.bi', pos: 'noun', ex: 'The babies are hungry.', exUz: "Chaqaloqlarning qorni och." },
    { en: 'city', uz: 'shahar', ipa: 'ˈsɪt.i', pos: 'noun', ex: "It's a beautiful city.", exUz: 'Bu chiroyli shahar.' },
    { en: 'knife', uz: 'pichoq', ipa: 'naɪf', pos: 'noun', ex: 'The knives are clean.', exUz: 'Pichoqlar toza.' },
    { en: 'child', uz: 'bola', ipa: 'tʃaɪld', pos: 'noun', ex: 'The children are at school.', exUz: 'Bolalar maktabda.' },
    { en: 'person', uz: 'odam, kishi', ipa: 'ˈpɜː.sən', pos: 'noun', ex: 'They are young people.', exUz: 'Ular yosh odamlar.' },
    { en: 'foot', uz: 'oyoq (panja)', ipa: 'fʊt', pos: 'noun', ex: 'My feet are tired.', exUz: 'Oyoqlarim charchagan.' },
    { en: 'tooth', uz: 'tish', ipa: 'tuːθ', pos: 'noun', ex: 'My teeth are white.', exUz: 'Tishlarim oppoq.' },
  ],
  practice: [
    { k: 'choice', q: "*She's ___ student.*", opts: ['an', 'a', '—'], a: 1, why: "*student* — \"s\" undosh → **a**." },
    { k: 'choice', q: "*It's ___ umbrella.*", opts: ['a', '—', 'an'], a: 2, why: "*umbrella* — unli \"a\" tovushi → **an**." },
    { k: 'choice', q: "*I'm at ___ university.*", opts: ['an', 'a', 'the a'], a: 1, why: "*university* — \"yu\" bilan boshlanadi → **a**." },
    { k: 'listen', say: 'two buses', opts: ['two bus', 'two buses', 'two boxes', 'two busy'], a: 1 },
    { k: 'match', pairs: [['child', 'children'], ['person', 'people'], ['foot', 'feet'], ['tooth', 'teeth'], ['woman', 'women'], ['knife', 'knives']] },
    { k: 'match', pairs: [['box', 'quti'], ['watch', "qo'l soati"], ['baby', 'chaqaloq'], ['city', 'shahar'], ['bus', 'avtobus']] },
    { k: 'tf', q: "*an hour* — to'g'ri, chunki *h* o'qilmaydi.", a: true, why: "Ha: \"au-ə\" — unli tovush bilan boshlanadi." },
    { k: 'tf', q: "*three peoples* — to'g'ri ko'plik.", a: false, why: "*person* ning ko'pligi — **people** (−s siz): *three people*." },
    { k: 'fill', q: 'one baby → two ___', a: ['babies'], why: "b + y → **-ies**." },
    { k: 'fill', q: 'one box → three ___', a: ['boxes'], why: "**x** → **-es**." },
    { k: 'fill', q: 'one key → four ___', a: ['keys'], why: "Unli + y (*ey*) → faqat **-s**: *keys*." },
    { k: 'fill', q: "It's ___ old watch.", a: ['an'], uz: "Bu eski soat.", why: "Artikl keyingi so'zga qaraydi: *old* unli bilan → **an old watch**." },
    { k: 'order', uz: 'Bolalar charchagan.', words: ['The', 'children', 'are', 'tired'], extra: ['childs', 'is'] },
    { k: 'translate', uz: 'Bu eski avtobus.', a: ["It's an old bus", 'It is an old bus', 'This is an old bus'], why: "*old* unli bilan boshlanadi → **an old bus**." },
    { k: 'translate', uz: 'besh pichoq', a: ['five knives', '5 knives'], why: "knife → **knives**." },
    { k: 'speak', say: 'cats, dogs, buses', uz: "Uch xil -s tovushini ayting: /s/, /z/, /ɪz/" },
  ],
  quiz: [
    { k: 'listen', say: 'an hour', opts: ['a hour', 'an hour', 'an arm', 'a house'], a: 1 },
    { k: 'choice', q: "Qaysi to'g'ri?", opts: ['an university', 'a hour', 'an old city', 'a orange'], a: 2, why: "*old* — unli tovush → **an old city**." },
    { k: 'choice', q: "**dogs** so'zidagi **-s** qanday o'qiladi?", say: 'dogs', opts: ['/s/', '/z/', '/ɪz/'], a: 1, why: "*g* — ovozli tovush → **/z/**." },
    { k: 'fill', q: 'one city → five ___', a: ['cities'] },
    { k: 'fill', q: 'one tooth → two ___', a: ['teeth'] },
    { k: 'fill', q: 'one watch → three ___', a: ['watches'] },
    { k: 'translate', uz: 'Oyoqlarim charchagan.', a: ['My feet are tired'], why: "foot → **feet**, ko'plik → **are**." },
    { k: 'translate', uz: "U chaqaloq.", a: ["It's a baby", 'It is a baby', "He's a baby", 'He is a baby', "She's a baby", 'She is a baby'] },
    { k: 'order', uz: 'Ular yosh odamlar.', words: ['They', 'are', 'young', 'people'], extra: ['a', 'peoples'] },
    { k: 'match', pairs: [['bus', 'buses'], ['baby', 'babies'], ['knife', 'knives'], ['person', 'people'], ['box', 'boxes']] },
  ],
  summary: [
    "Bitta sanaladigan narsa/odam oldidan **a / an**: *I'm **a** student. It's **a** box.* Ko'plikda — yo'q.",
    "**a / an** tovushga qarab: **an hour, an umbrella**, lekin **a university, a house**.",
    "Ko'plik: **-s** (cats), **-es** (buses, boxes, watches), **-ies** (babies, cities), **-ves** (knives).",
    "Yod oling: **children, people, men, women, feet, teeth**. Sondan keyin doim ko'plik: *two cat**s***.",
    "**-s** talaffuzi: **/s/** cats · **/z/** dogs · **/ɪz/** buses.",
  ],
  homework: "Xonangizdagi 8 ta narsani sanang va yozing: *one box, two pens, three books…* Har birining ko'pligini ovoz chiqarib ayting va **-s** qaysi tovush (/s/, /z/, /ɪz/) ekanini belgilang.",
};

export default lesson;
