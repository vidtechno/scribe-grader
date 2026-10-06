import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: 'u1-l3',
  title: 'Vowel sounds: short & long',
  titleUz: "Unli tovushlar: qisqa va cho'ziq",
  goal: "Har bir unli harfning **qisqa** va **uzun** o'qilishini ajratasiz, **\"sehrli e\"** qoidasi bilan *hat* va *hate* kabi so'zlarni to'g'ri o'qiysiz hamda 10 ta yangi so'zni bilib olasiz.",
  slides: [
    {
      title: "Bitta harf — ikki xil tovush",
      blocks: [
        { t: 'p', md: "O'zbek tilida **a** har doim \"a\", **o** har doim \"o\" o'qiladi. Ingliz tilida esa har bir unli harf (A, E, I, O, U) kamida **ikki xil** o'qiladi: **qisqa** va **uzun**." },
        { t: 'p', md: "Yaxshi xabar: **uzun tovush = harfning nomi**! Siz uni o'tgan ikki darsda o'rgandingiz. Masalan, A ning nomi \"ey\" — *hate* so'zida A aynan \"ey\" bo'lib o'qiladi." },
        { t: 'examples', items: [
          { en: 'hat', uz: 'shlyapa', note: "qisqa **a** — \"hæt\"" },
          { en: 'hate', uz: "yomon ko'rmoq", note: "uzun **a** (= harf nomi \"ey\") — \"heyt\"" },
        ] },
        { t: 'tip', tone: 'info', md: "Bu dars ingliz tilida **o'qishning kaliti**. Notanish so'zni ko'rganingizda qaysi tovush ekanini taxmin qila olasiz." },
      ],
    },
    {
      title: 'Qisqa unlilar',
      blocks: [
        { t: 'p', md: "Qisqa tovush odatda **undosh + unli + undosh** tuzilishidagi qisqa so'zlarda bo'ladi: *h-a-t, b-e-d, s-i-t, h-o-t, c-u-t*. Har bir kartani tinglang va takrorlang:" },
        {
          t: 'sounds', items: [
            { label: 'a  /æ/', say: 'hat', uz: "Og'izni keng oching va \"a\" bilan \"e\" orasidagi tovushni ayting. O'zbekcha \"a\"dan ingichkaroq, \"e\" tomonga yaqin.", examples: ['hat', 'cat', 'bag', 'man'] },
            { label: 'e  /e/', say: 'bed', uz: "O'zbekcha **\"e\"** (*sen, bet*) kabi — oson!", examples: ['bed', 'pen', 'egg', 'ten'] },
            { label: 'i  /ɪ/', say: 'sit', uz: "Qisqa, bo'sh **\"i\"** — o'zbekcha *bir, tish* so'zlaridagi kabi. Cho'zmang!", examples: ['sit', 'big', 'fish', 'six'] },
            { label: 'o  /ɒ/', say: 'hot', uz: "O'zbekcha **\"o\"** (*ona, tosh*) ga juda yaqin, qisqa aytiladi.", examples: ['hot', 'dog', 'box', 'not'] },
            { label: 'u  /ʌ/', say: 'cut', uz: "Qisqa **\"a\"** — og'iz sal ochiq. Diqqat: harf **u**, lekin tovush \"a\"ga o'xshaydi! *cut* = \"kat\", *sun* = \"san\".", examples: ['cut', 'sun', 'bus', 'up'] },
          ],
        },
        { t: 'tip', tone: 'warn', md: "Eng katta tuzoq — qisqa **u**. *bus* \"bus\" emas, **\"bas\"**; *cut* \"kut\" emas, **\"kat\"**." },
        { t: 'check', ex: { k: 'listen', say: 'cut', opts: ['cat', 'cut', 'cute', 'kite'], a: 1, why: "\"kat\" — bu **cut** (qisqa u = \"a\"). *cat* da esa ingichka \"æ\" eshitiladi." } },
      ],
    },
    {
      title: 'Uzun unlilar = harf nomi',
      blocks: [
        { t: 'p', md: "Uzun tovushda unli harf **o'z nomini aytadi**. Alifbodagi nomlarni eslang:" },
        {
          t: 'sounds', items: [
            { label: 'a  /eɪ/', say: 'hate', uz: "**\"ey\"** — A harfining nomi.", examples: ['hate', 'name', 'cake', 'table'] },
            { label: 'e  /iː/', say: 'tree', uz: "**\"i:\"** — E harfining nomi, cho'ziq.", examples: ['tree', 'me', 'he', 'see'] },
            { label: 'i  /aɪ/', say: 'kite', uz: "**\"ay\"** — I harfining nomi.", examples: ['kite', 'five', 'nine', 'bike'] },
            { label: 'o  /əʊ/', say: 'home', uz: "**\"ou\"** — O harfining nomi. Oxirida lablar \"u\"ga yumiladi.", examples: ['home', 'nose', 'go', 'no'] },
            { label: 'u  /juː/', say: 'cute', uz: "**\"yu:\"** — U harfining nomi.", examples: ['cute', 'use', 'tube', 'music'] },
          ],
        },
        {
          t: 'table', head: ['Harf', 'Qisqa', 'Uzun (= nomi)'],
          rows: [
            ['a', 'hat — "æ"', 'hate — "ey"'],
            ['e', 'bed — "e"', 'tree — "i:"'],
            ['i', 'sit — "i"', 'kite — "ay"'],
            ['o', 'hot — "o"', 'home — "ou"'],
            ['u', 'cut — "a"', 'cute — "yu:"'],
          ],
        },
        { t: 'check', ex: { k: 'choice', q: "Qaysi so'zda **uzun** tovush bor (harf o'z nomini aytadi)?", opts: ['hot', 'sit', 'home', 'bed'], a: 2, why: "*home* — o \"ou\" (O ning nomi). Qolganlarida qisqa tovush." } },
      ],
    },
    {
      title: '"Sehrli e" (magic e)',
      blocks: [
        { t: 'p', md: "Qoida: so'z **unli + undosh + e** bilan tugasa, oxirgi **e o'qilmaydi**, lekin oldingi unlini **uzun** qiladi (o'z nomini aytdiradi). Shuning uchun uni \"sehrli e\" deyishadi." },
        {
          t: 'table', head: ['Qisqa', 'Uzun (+ e)', "Nima o'zgardi"],
          rows: [
            ['hat', 'hate', 'æ → ey'],
            ['tap', 'tape', 'æ → ey'],
            ['kit', 'kite', 'i → ay'],
            ['pin', 'pine', 'i → ay'],
            ['hop', 'hope', 'o → ou'],
            ['not', 'note', 'o → ou'],
            ['cut', 'cute', 'a → yu:'],
          ],
          speak: [0, 1],
        },
        { t: 'tip', tone: 'warn', md: "Sehrli **e** o'zi **eshitilmaydi**! *hate* — \"heyt\", \"hate-e\" emas. *home* — \"houm\", \"home\" emas." },
        { t: 'tip', tone: 'good', md: "O'qish usuli: so'z oxirida **e** ko'rsangiz, avval o'sha e ni barmog'ingiz bilan yoping va oldingi unlini **harf nomi** bilan o'qing: *k-ay-t* → **kite**." },
        { t: 'check', ex: { k: 'fill', q: 'not + e = ___', a: ['note'], hint: "Oxiriga e qo'shing", why: "**note** — o endi \"ou\" o'qiladi: \"nout\"." } },
      ],
    },
    {
      title: 'Tipik xatolar',
      blocks: [
        {
          t: 'compare',
          good: { title: "To'g'ri", items: ['bus — "bas"', 'cut — "kat"', 'home — "houm"', 'hate — "heyt"', 'kite — "kayt"', 'tree — "tri:"'] },
          bad: { title: "Noto'g'ri (harfma-harf o'qish)", items: ['bus — "bus"', 'cut — "kut"', 'home — "home"', 'hate — "hate"', 'kite — "kite"', 'tree — "tre"'] },
        },
        { t: 'p', md: "**ee** — ikkita e birga kelsa, doim uzun **\"i:\"**: *tree, see, green*. Bu harf birikmalarini keyingi darsda batafsil o'rganamiz." },
        { t: 'p', md: "Qisqa va uzun tovush so'zning **ma'nosini o'zgartiradi**. Juftliklarni tinglab farqlang:" },
        { t: 'table', head: ['Qisqa', 'Uzun'], rows: [['hat', 'hate'], ['kit', 'kite'], ['hop', 'hope'], ['cut', 'cute']], speak: [0, 1] },
        { t: 'check', ex: { k: 'tf', q: "*home* so'zining oxiridagi **e** alohida o'qiladi.", a: false, why: "Sehrli e eshitilmaydi: *home* = \"houm\"." } },
      ],
    },
    {
      title: "Yangi so'zlar",
      blocks: [
        { t: 'p', md: "Bu so'zlar qisqa va uzun tovushlarni mashq qilish uchun tanlandi. Har birini tinglang, takrorlang va unlisi **qisqa** yoki **uzun** ekanini ayting." },
        {
          t: 'examples', items: [
            { en: 'a hat', uz: 'shlyapa', note: 'qisqa a' },
            { en: 'hate', uz: "yomon ko'rmoq", note: 'uzun a (sehrli e)' },
            { en: 'a bed', uz: 'karavot', note: 'qisqa e' },
            { en: 'sit', uz: "o'tirmoq", note: 'qisqa i' },
            { en: 'a kite', uz: 'varrak (havoda uchiriladigan)', note: 'uzun i (sehrli e)' },
            { en: 'hot', uz: 'issiq', note: 'qisqa o' },
            { en: 'home', uz: "uy (o'z uyi)", note: 'uzun o (sehrli e)' },
            { en: 'cut', uz: 'kesmoq', note: 'qisqa u = "a"' },
            { en: 'cute', uz: 'yoqimtoy, shirin', note: 'uzun u (sehrli e)' },
            { en: 'a tree', uz: 'daraxt', note: 'ee = uzun "i:"' },
          ],
        },
        { t: 'check', ex: { k: 'listen', say: 'kite', opts: ['kit', 'kite', 'cut', 'cute'], a: 1, why: "\"kayt\" — **kite**, uzun i (sehrli e)." } },
      ],
    },
  ],
  words: [
    { en: 'hat', uz: 'shlyapa', ipa: 'hæt', pos: 'noun', ex: 'I have a hat.', exUz: 'Mening shlyapam bor.' },
    { en: 'hate', uz: "yomon ko'rmoq", ipa: 'heɪt', pos: 'verb', ex: 'Cats hate water.', exUz: "Mushuklar suvni yomon ko'radi." },
    { en: 'bed', uz: 'karavot', ipa: 'bed', pos: 'noun', ex: 'This is my bed.', exUz: 'Bu mening karavotim.' },
    { en: 'sit', uz: "o'tirmoq", ipa: 'sɪt', pos: 'verb', ex: 'Sit here.', exUz: "Bu yerga o'tiring." },
    { en: 'kite', uz: 'varrak', ipa: 'kaɪt', pos: 'noun', ex: 'This is my kite.', exUz: 'Bu mening varragim.' },
    { en: 'hot', uz: 'issiq', ipa: 'hɒt', pos: 'adj', ex: 'The water is hot.', exUz: 'Suv issiq.' },
    { en: 'home', uz: 'uy', ipa: 'həʊm', pos: 'noun', ex: 'I am at home.', exUz: 'Men uydaman.' },
    { en: 'cut', uz: 'kesmoq', ipa: 'kʌt', pos: 'verb', ex: 'Cut the apple.', exUz: 'Olmani kesing.' },
    { en: 'cute', uz: 'yoqimtoy, shirin', ipa: 'kjuːt', pos: 'adj', ex: 'The cat is cute.', exUz: 'Mushuk yoqimtoy.' },
    { en: 'tree', uz: 'daraxt', ipa: 'triː', pos: 'noun', ex: 'The tree is big.', exUz: 'Daraxt katta.' },
  ],
  practice: [
    { k: 'listen', say: 'hat', opts: ['hate', 'hat', 'hot', 'hut'], a: 1, why: "Qisqa \"æ\" — **hat**. *hate* da \"ey\" eshitiladi." },
    { k: 'listen', say: 'hate', opts: ['hat', 'hot', 'hate', 'home'], a: 2, why: "\"heyt\" — **hate**." },
    { k: 'listen', say: 'cute', opts: ['cut', 'cat', 'kite', 'cute'], a: 3, why: "\"kyu:t\" — **cute**, uzun u." },
    { k: 'choice', q: "*cut* so'zidagi **u** qanday o'qiladi?", say: 'cut', opts: ['"u"', '"yu:"', '"a" (qisqa)', '"o"'], a: 2, why: "Qisqa u — \"a\"ga o'xshash: *cut* = \"kat\"." },
    { k: 'choice', q: "Qaysi so'zda **qisqa** unli bor?", opts: ['kite', 'home', 'sit', 'cute'], a: 2, why: "*sit* — undosh + unli + undosh, oxirida e yo'q → qisqa \"i\"." },
    { k: 'match', pairs: [['hat', 'shlyapa'], ['bed', 'karavot'], ['tree', 'daraxt'], ['hot', 'issiq'], ['kite', 'varrak']] },
    { k: 'match', pairs: [['hat', '"æ"'], ['hate', '"ey"'], ['hot', '"o"'], ['home', '"ou"'], ['cut', '"a"'], ['cute', '"yu:"']] },
    { k: 'tf', q: "Sehrli **e** o'zi eshitilmaydi, lekin oldingi unlini uzun qiladi.", a: true },
    { k: 'fill', q: 'kit + e = ___', a: ['kite'], why: "**kite** — i endi \"ay\": \"kayt\"." },
    { k: 'fill', q: 'hop + e = ___', a: ['hope'], why: "**hope** — o endi \"ou\": \"houp\"." },
    { k: 'fill', q: 'The water is ___.', a: ['hot'], uz: 'Suv issiq.', why: "issiq — **hot** (qisqa o)." },
    { k: 'order', uz: 'Mushuk yoqimtoy.', words: ['The', 'cat', 'is', 'cute'], why: "*The cat is cute.* — inglizchada **is** tushib qolmaydi." },
    { k: 'translate', uz: 'daraxt', a: ['tree', 'a tree', 'the tree'], why: "daraxt — **tree** (\"tri:\")." },
    { k: 'translate', uz: 'uy', a: ['home', 'house', 'a house', 'the house'], why: "uy — **home** (\"houm\"). *house* ham uy degani — buni keyinroq o'rganamiz." },
    { k: 'speak', say: 'hat, hate', uz: "Qisqa va uzun a ni farqlab ayting" },
    { k: 'speak', say: 'cut, cute', uz: "\"kat\" va \"kyu:t\" ni farqlab ayting" },
  ],
  quiz: [
    { k: 'listen', say: 'hot', opts: ['hat', 'hot', 'home', 'hate'], a: 1 },
    { k: 'listen', say: 'kit', opts: ['kite', 'cut', 'kit', 'cute'], a: 2 },
    { k: 'listen', say: 'home', opts: ['hot', 'hope', 'hat', 'home'], a: 3 },
    { k: 'choice', q: "Qaysi so'zda **a** harfi \"ey\" deb o'qiladi?", opts: ['hat', 'bag', 'hate', 'man'], a: 2, why: "*hate* — sehrli e bor, a o'z nomini aytadi." },
    { k: 'choice', q: "*bus* qanday o'qiladi?", opts: ['"bus"', '"byu:s"', '"bas"', '"bous"'], a: 2, why: "Qisqa u — \"a\": **\"bas\"**." },
    { k: 'fill', q: 'cut + e = ___', a: ['cute'] },
    { k: 'fill', q: 'not + e = ___', a: ['note'] },
    { k: 'translate', uz: "o'tirmoq", a: ['sit', 'to sit'] },
    { k: 'translate', uz: 'shlyapa', a: ['hat', 'a hat', 'the hat'] },
    { k: 'order', uz: 'Daraxt katta.', words: ['The', 'tree', 'is', 'big'], extra: ['are'] },
    { k: 'tf', q: "*tree* so'zidagi **ee** qisqa \"e\" deb o'qiladi.", a: false, why: "**ee** — doim uzun \"i:\": \"tri:\"." },
  ],
  summary: [
    "Har bir unli ikki xil o'qiladi: **qisqa** (*hat, bed, sit, hot, cut*) va **uzun** — harf nomi (*hate, tree, kite, home, cute*).",
    "**Sehrli e**: unli + undosh + e → unli o'z nomini aytadi, e esa eshitilmaydi: *kit → kite*.",
    "Qisqa **u** — \"a\"ga o'xshaydi: *cut* = \"kat\", *bus* = \"bas\".",
    "**ee** — uzun \"i:\": *tree*.",
    "Yangi so'zlar: hat, hate, bed, sit, kite, hot, home, cut, cute, tree.",
  ],
  homework: "Juftliklarni 5 martadan ovoz chiqarib o'qing: *hat–hate, kit–kite, hop–hope, cut–cute*. Keyin kitob yoki ko'chadagi yozuvlardan oxiri **e** bilan tugaydigan 3 ta inglizcha so'z topib, sehrli e qoidasi bilan o'qib ko'ring.",
};

export default lesson;
