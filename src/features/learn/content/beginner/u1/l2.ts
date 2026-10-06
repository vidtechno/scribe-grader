import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: 'u1-l2',
  title: 'The alphabet: N–Z',
  titleUz: 'Alifbo: N–Z',
  goal: "Alifboning qolgan 13 ta harfini (**N–Z**) nomi bilan to'g'ri aytasiz, butun alifboni boshidan oxirigacha ayta olasiz va shu harflar bilan boshlanadigan 10 ta yangi so'zni bilib olasiz.",
  slides: [
    {
      title: 'Alifboning ikkinchi yarmi',
      blocks: [
        { t: 'p', md: "O'tgan darsda **A dan M gacha** 13 ta harfni o'rgandik. Bugun qolgan 13 tasi: **N O P Q R S T U V W X Y Z**. Dars oxirida siz butun alifboni — 26 ta harfni — ayta olasiz." },
        { t: 'p', md: "Eslatma: harfning **nomi** (alifboda qanday aytilishi) va so'z ichidagi **tovushi** har doim bir xil emas. Bugun yana nomlarni o'rganamiz — ular ismingizni harflab aytishda (7-dars) juda kerak bo'ladi." },
        { t: 'tip', tone: 'info', md: "Tez takror: **E** = \"i:\", **I** = \"ay\", **G** = \"dji:\", **J** = \"djey\". Bu to'rttasini adashtirmasangiz, eng qiyin qism ortda qoldi!" },
        { t: 'check', ex: { k: 'listen', say: 'G', opts: ['J', 'E', 'G', 'I'], a: 2, why: "\"dji:\" — bu **G** (o'tgan darsdan). J esa \"djey\"." } },
      ],
    },
    {
      title: 'N dan T gacha',
      blocks: [
        {
          t: 'sounds', items: [
            { label: 'N n', say: 'N', uz: "**\"en\"** — F, L, M kabi \"e\" bilan boshlanadi.", examples: ['nose', 'name', 'nine'] },
            { label: 'O o', say: 'O', uz: "**\"ou\"** — \"o\"dan boshlab, oxirida lablar \"u\"ga yumiladi. Faqat \"o\" emas!", examples: ['orange', 'old', 'open'] },
            { label: 'P p', say: 'P', uz: "**\"pi:\"** — \"i\" cho'ziq. \"P\" tovushi o'zbekchadagidan kuchliroq, ozgina havo chiqadi.", examples: ['pen', 'pink', 'park'] },
            { label: 'Q q', say: 'Q', uz: "**\"kyu:\"** — \"k\" + \"yu\". O'zbekcha \"q\" (qalam) tovushi emas!", examples: ['queen', 'quick'] },
            { label: 'R r', say: 'R', uz: "**\"a:\"** — uzun \"a\", og'iz keng ochiq. Britaniya talaffuzida \"r\" eshitilmaydi. \"er\" deb aytmang!", examples: ['red', 'rose', 'run'] },
            { label: 'S s', say: 'S', uz: "**\"es\"**", examples: ['sun', 'sit', 'six'] },
            { label: 'T t', say: 'T', uz: "**\"ti:\"** — \"i\" cho'ziq, \"t\"dan keyin ozgina havo chiqadi.", examples: ['table', 'ten', 'tea'] },
          ],
        },
        { t: 'tip', tone: 'warn', md: "**R** — o'zbek o'quvchilarining eng ko'p xatosi. O'zbekchada \"er\" deymiz, inglizcha esa **\"a:\"** (xuddi shifokorga \"aaa\" deganda kabi). **O** ham faqat \"o\" emas — **\"ou\"**." },
        { t: 'check', ex: { k: 'listen', say: 'R', opts: ['A', 'R', 'O', 'E'], a: 1, why: "Uzun \"a:\" — bu **R** harfining nomi. A harfi esa \"ey\" deb aytiladi." } },
      ],
    },
    {
      title: 'U dan Z gacha',
      blocks: [
        {
          t: 'sounds', items: [
            { label: 'U u', say: 'U', uz: "**\"yu:\"** — xuddi o'zbekcha \"yu\" kabi, cho'ziq. \"u\" emas!", examples: ['umbrella', 'use', 'up'] },
            { label: 'V v', say: 'V', uz: "**\"vi:\"** — yuqori tishlar pastki labga tegadi.", examples: ['van', 'very'] },
            { label: 'W w', say: 'W', uz: "**\"dabl yu:\"** — so'zma-so'z \"ikkita U\". Eng uzun harf nomi: uch bo'g'in.", examples: ['water', 'window', 'west'] },
            { label: 'X x', say: 'X', uz: "**\"eks\"**", examples: ['box', 'six', 'taxi'] },
            { label: 'Y y', say: 'Y', uz: "**\"uay\"** — lablar dumaloq boshlanib, \"ay\" bilan tugaydi.", examples: ['yes', 'yellow'] },
            { label: 'Z z', say: 'zed', uz: "**\"zed\"** (Britaniya). Amerikada **\"zi:\"** deyiladi — ikkalasini ham tushunishingiz kerak.", examples: ['zoo', 'zero'] },
          ],
        },
        { t: 'tip', tone: 'warn', md: "**U** — \"yu:\", **W** — \"dabl yu:\", **Y** — \"uay\". Bu uchtasi quloqda o'xshash eshitiladi, shuning uchun har birini 3 marta ovoz chiqarib takrorlang." },
        { t: 'check', ex: { k: 'choice', q: "Qaysi harfning nomi **\"dabl yu:\"**?", opts: ['U', 'V', 'Y', 'W'], a: 3, why: "**W** — \"double U\", ya'ni \"ikkita U\". U esa shunchaki \"yu:\"." } },
      ],
    },
    {
      title: "Butun alifbo: tovush guruhlari",
      blocks: [
        { t: 'p', md: "Endi 26 ta harfning hammasini bilasiz. Ularni nomidagi **unli tovush** bo'yicha guruhlaymiz — shunda yodlash juda oson bo'ladi:" },
        {
          t: 'table', head: ['Tovush', 'Harflar', 'Qanday aytiladi'],
          rows: [
            ['ey', 'A, H, J, K', 'ey · eych · djey · key'],
            ['i:', 'B, C, D, E, G, P, T, V', 'bi: · si: · di: · i: · dji: · pi: · ti: · vi:'],
            ['e', 'F, L, M, N, S, X, Z', 'ef · el · em · en · es · eks · zed'],
            ['ay', 'I, Y', 'ay · uay'],
            ['ou', 'O', 'ou'],
            ['yu:', 'Q, U, W', 'kyu: · yu: · dabl yu:'],
            ['a:', 'R', 'a:'],
          ],
        },
        { t: 'p', md: "**Unli harflar** (vowels): **A, E, I, O, U**. Qolganlari — **undosh harflar** (consonants). Bu juda muhim: unli tovush bilan boshlanadigan so'z oldida *a* emas, **an** ishlatiladi: *an orange, an umbrella*." },
        { t: 'tip', tone: 'good', md: "Usul: alifboni ikki qismga bo'lib ayting — **A–M** (o'tgan dars), keyin **N–Z**. Har kuni bir marta to'liq aytsangiz, bir haftada avtomatik bo'lib qoladi." },
        { t: 'check', ex: { k: 'choice', q: "Qaysi harf **\"i:\"** guruhiga kiradi?", opts: ['S', 'R', 'T', 'Y'], a: 2, why: "T — \"ti:\". S (\"es\"), R (\"a:\"), Y (\"uay\") boshqa guruhlarda." } },
      ],
    },
    {
      title: "Tipik xatolar",
      blocks: [
        {
          t: 'compare',
          good: { title: "To'g'ri", items: ['R — "a:"', 'O — "ou"', 'U — "yu:"', 'Q — "kyu:"', 'Y — "uay"', 'Z — "zed" (yoki "zi:")'] },
          bad: { title: "Noto'g'ri (o'zbekcha o'qish)", items: ['R — "er"', 'O — "o"', 'U — "u"', 'Q — "qu"', 'Y — "igrek"', 'Z — "ze" yoki "zet"'] },
        },
        { t: 'tip', tone: 'info', md: "Rus tilini bilsangiz, ehtiyot bo'ling: **Y** \"igrek\" emas, **\"uay\"**; **Z** \"zet\" emas, **\"zed\"**." },
        { t: 'p', md: "Quyidagi juftliklarni tinglab, farqini sezing:\n• **E** (\"i:\") — **I** (\"ay\")\n• **A** (\"ey\") — **R** (\"a:\")\n• **U** (\"yu:\") — **W** (\"dabl yu:\")\n• **G** (\"dji:\") — **J** (\"djey\")" },
        { t: 'table', head: ['Harf', 'Juftligi', 'Farqi'], rows: [['E', 'I', 'i: · ay'], ['A', 'R', 'ey · a:'], ['U', 'W', 'yu: · dabl yu:'], ['P', 'B', 'pi: · bi:']], speak: [0, 1] },
        { t: 'check', ex: { k: 'tf', q: "**R** harfi Britaniya inglizchasida \"er\" deb aytiladi.", a: false, why: "R — **\"a:\"** deb aytiladi. \"er\" — o'zbekcha nomi." } },
      ],
    },
    {
      title: "Yangi so'zlar: N dan Z gacha",
      blocks: [
        { t: 'p', md: "Har bir so'zni eshiting va takrorlang. Qaysi harf bilan boshlanishiga e'tibor bering. Bu darsning **yodlash ro'yxati**." },
        {
          t: 'examples', items: [
            { en: 'a nose', uz: 'burun' },
            { en: 'an orange', uz: 'apelsin', note: "unli bilan boshlanadi → **an**" },
            { en: 'a pen', uz: 'ruchka' },
            { en: 'a queen', uz: 'qirolicha', note: "*qu* = \"kw\" (lablar dumaloq, \"v\" emas): \"kwi:n\"" },
            { en: 'the sun', uz: 'quyosh', note: "*u* bu yerda qisqa \"a\": \"san\"" },
            { en: 'a table', uz: 'stol', note: "*a* — \"ey\": \"teybl\"" },
            { en: 'an umbrella', uz: 'soyabon', note: "unli bilan boshlanadi → **an**" },
            { en: 'a van', uz: 'furgon (yuk mashinasi)' },
            { en: 'water', uz: 'suv', note: "\"uo:ta\" — *w* lablar dumaloq, \"v\" emas" },
            { en: 'a zoo', uz: "hayvonot bog'i", note: "*oo* = uzun \"u:\"" },
          ],
        },
        { t: 'tip', tone: 'warn', md: "**W** tovushi o'zbekcha \"v\" emas! Lablarni \"u\" deyotgandek dumaloq qiling va tez ochib yuboring: *water* = \"uo:ta\", *window* = \"uindou\". Tishlar labga tegmaydi." },
        { t: 'check', ex: { k: 'choice', q: "Qaysi so'z oldida **an** ishlatiladi?", opts: ['pen', 'umbrella', 'van', 'table'], a: 1, why: "*umbrella* unli **U** bilan boshlanadi → **an umbrella**." } },
      ],
    },
  ],
  words: [
    { en: 'nose', uz: 'burun', ipa: 'nəʊz', pos: 'noun', ex: 'This is my nose.', exUz: 'Bu mening burnim.' },
    { en: 'orange', uz: 'apelsin', ipa: 'ˈɒr.ɪndʒ', pos: 'noun', ex: 'I have an orange.', exUz: 'Menda apelsin bor.' },
    { en: 'pen', uz: 'ruchka', ipa: 'pen', pos: 'noun', ex: 'This is a pen.', exUz: 'Bu ruchka.' },
    { en: 'queen', uz: 'qirolicha', ipa: 'kwiːn', pos: 'noun', ex: 'She is a queen.', exUz: 'U qirolicha.' },
    { en: 'sun', uz: 'quyosh', ipa: 'sʌn', pos: 'noun', ex: 'The sun is big.', exUz: 'Quyosh katta.' },
    { en: 'table', uz: 'stol', ipa: 'ˈteɪ.bəl', pos: 'noun', ex: 'The table is big.', exUz: 'Stol katta.' },
    { en: 'umbrella', uz: 'soyabon', ipa: 'ʌmˈbrel.ə', pos: 'noun', ex: 'I have an umbrella.', exUz: 'Menda soyabon bor.' },
    { en: 'van', uz: 'furgon (yuk mashinasi)', ipa: 'væn', pos: 'noun', ex: 'This is a van.', exUz: 'Bu furgon.' },
    { en: 'water', uz: 'suv', ipa: 'ˈwɔː.tə', pos: 'noun', ex: 'I drink water.', exUz: 'Men suv ichaman.' },
    { en: 'zoo', uz: "hayvonot bog'i", ipa: 'zuː', pos: 'noun', ex: 'The zoo is big.', exUz: "Hayvonot bog'i katta." },
  ],
  practice: [
    { k: 'listen', say: 'R', opts: ['A', 'E', 'R', 'O'], a: 2, why: "\"a:\" — bu **R**." },
    { k: 'listen', say: 'O', opts: ['O', 'U', 'A', 'W'], a: 0, why: "\"ou\" — bu **O**." },
    { k: 'listen', say: 'Y', opts: ['I', 'W', 'U', 'Y'], a: 3, why: "\"uay\" — bu **Y**. I esa shunchaki \"ay\"." },
    { k: 'choice', q: "**Q** harfi qanday aytiladi?", opts: ['qu', 'kyu:', 'kvi:', 'ku'], a: 1, why: "Q — **\"kyu:\"**, xuddi U (\"yu:\") ga \"k\" qo'shilgandek." },
    { k: 'match', pairs: [['O', 'ou'], ['R', 'a:'], ['U', 'yu:'], ['Y', 'uay'], ['Z', 'zed']] },
    { k: 'choice', q: "Qaysi harfning nomi **\"e\"** bilan boshlanadi?", opts: ['T', 'P', 'X', 'V'], a: 2, why: "X — **\"eks\"**. T, P, V — \"i:\" guruhida." },
    { k: 'fill', q: 'N, O, P, Q, ___, S, T', a: ['R', 'r'], why: "N, O, P, Q, **R**, S, T." },
    { k: 'fill', q: 'U, V, W, ___, Y, Z', a: ['X', 'x'], why: "U, V, W, **X**, Y, Z." },
    { k: 'listen', say: 'umbrella', opts: ['orange', 'umbrella', 'table', 'water'], a: 1 },
    { k: 'match', pairs: [['nose', 'burun'], ['sun', 'quyosh'], ['pen', 'ruchka'], ['zoo', "hayvonot bog'i"], ['water', 'suv']] },
    { k: 'tf', q: "**A, E, I, O, U** — unli harflar (vowels).", a: true, why: "Ha, ingliz tilida 5 ta unli harf bor: A, E, I, O, U." },
    { k: 'fill', q: 'I have ___ orange.', a: ['an'], uz: 'Menda apelsin bor.', why: "*orange* unli **O** bilan boshlanadi → **an** orange." },
    { k: 'translate', uz: 'stol', a: ['table', 'a table', 'the table'], why: "stol — **table** (\"teybl\")." },
    { k: 'translate', uz: 'soyabon', a: ['umbrella', 'an umbrella', 'the umbrella'], why: "soyabon — **umbrella**; oldidan *an* keladi." },
    { k: 'speak', say: 'N, O, P, Q, R, S, T, U, V, W, X, Y, Z', uz: "N dan Z gacha harflarni ketma-ket ayting" },
    { k: 'speak', say: 'water', uz: "\"suv\" — w ni lablar bilan, \"v\"siz ayting" },
  ],
  quiz: [
    { k: 'listen', say: 'U', opts: ['W', 'Q', 'U', 'O'], a: 2 },
    { k: 'listen', say: 'W', opts: ['W', 'V', 'U', 'Y'], a: 0 },
    { k: 'listen', say: 'E', opts: ['I', 'E', 'Y', 'A'], a: 1, why: "\"i:\" — bu **E** (o'tgan darsdan)." },
    { k: 'choice', q: "**\"a:\"** deb aytiladigan harfni tanlang.", opts: ['A', 'O', 'E', 'R'], a: 3 },
    { k: 'choice', q: "Qaysi qatorda faqat **unli** harflar bor?", opts: ['A, E, R, O', 'A, E, I, O, U', 'A, Y, I, W', 'E, I, U, Q'], a: 1 },
    { k: 'fill', q: 'R, S, T, ___, V', a: ['U', 'u'] },
    { k: 'fill', q: 'I have ___ umbrella.', a: ['an'], uz: 'Menda soyabon bor.' },
    { k: 'translate', uz: 'burun', a: ['nose', 'a nose', 'the nose'] },
    { k: 'translate', uz: 'quyosh', a: ['sun', 'the sun', 'a sun'] },
    { k: 'listen', say: 'queen', opts: ['queen', 'green', 'key', 'zoo'], a: 0 },
    { k: 'tf', q: "Britaniya inglizchasida **Z** harfi \"zed\" deb aytiladi.", a: true },
  ],
  summary: [
    "Endi butun alifboni bilasiz: **A–M** va **N–Z**, jami 26 ta harf.",
    "Tuzoqlar: **R = \"a:\"**, **O = \"ou\"**, **U = \"yu:\"**, **W = \"dabl yu:\"**, **Y = \"uay\"**, **Z = \"zed\"**.",
    "Unli harflar: **A, E, I, O, U**. Unli bilan boshlansa — **an**: *an orange, an umbrella*.",
    "**W** — lablar dumaloq, \"v\" emas: *water* (\"uo:ta\").",
    "Yangi so'zlar: nose, orange, pen, queen, sun, table, umbrella, van, water, zoo.",
  ],
  homework: "Butun alifboni (A–Z) ovoz chiqarib 3 marta ayting — bir martasini yozib olib, eshitib ko'ring. Atrofingizdagi 5 ta narsaning inglizcha nomini (masalan, *pen, table, water*) ayting va birinchi harfini nomi bilan ayting.",
};

export default lesson;
