import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: 'u4-l6',
  title: 'Imperatives & object pronouns',
  titleUz: 'Buyruq gaplar va me, him, her…',
  goal: "Buyruq va ko'rsatma berasiz (*Sit down. Don't wait. Let's go.*), ularni **please** bilan muloyim qilasiz va **me, him, her, us, them** kabi kelishikdagi olmoshlarni to'g'ri ishlatasiz.",
  slides: [
    {
      title: 'Buyruq gap — eng qisqa gap',
      blocks: [
        { t: 'p', md: "Buyruq gap (imperative) — biror ishni **qiling** deyish: ko'rsatma, maslahat, iltimos. Ingliz tilida u juda oddiy: **fe'lning asosiy shakli**, ega yo'q.\n• *O'tiring.* → **Sit down.**\n• *Kuting.* → **Wait.**\n• *Kiring.* → **Come in.**" },
        { t: 'p', md: "O'zbekchada *o'tir* (sen) va *o'tiring* (siz) farq qiladi. Ingliz tilida esa bitta shakl: **Sit down.** Muloyimlikni **please** so'zi va ohang beradi." },
        { t: 'tip', tone: 'good', md: "**please** gap boshida yoki oxirida turishi mumkin: ***Please** sit down.* = *Sit down, **please**.* Notanish odamga yoki kattalarga albatta *please* qo'shing — usiz buyruq qo'pol eshitilishi mumkin." },
        {
          t: 'compare',
          good: { title: "To'g'ri", items: ['Sit down, please.', 'Please wait here.', 'Come in!'] },
          bad: { title: "Noto'g'ri", items: ['You sit down, please.', 'Please waiting here.', 'To come in!'] },
        },
        { t: 'check', ex: { k: 'choice', q: "\"Iltimos, kiring.\"", opts: ['You come in, please.', 'Please come in.', 'Please to come in.', 'Please comes in.'], a: 1, why: "Buyruq gap — **ega yo'q**, fe'l asosiy shaklda: *Please **come in**.*" } },
      ],
    },
    {
      title: "Inkor buyruq: Don't…",
      blocks: [
        { t: 'p', md: "\"Qilmang\" deyish uchun fe'l oldiga **Don't** qo'yamiz:\n**Don't + fe'l**" },
        {
          t: 'table', head: ['Ijobiy', 'Inkor', "Ma'nosi"], speak: [0, 1],
          rows: [
            ['Wait.', "Don't wait.", 'Kuting / Kutmang'],
            ['Stop here.', "Don't stop here.", "Shu yerda to'xtang / to'xtamang"],
            ['Turn on the TV.', "Don't turn on the TV.", 'Televizorni yoqing / yoqmang'],
            ['Look at me.', "Don't look at me.", 'Menga qarang / qaramang'],
          ],
        },
        { t: 'tip', tone: 'info', md: "Rasmiy yozuvlarda (qoidalar, belgilarda) to'liq shakl uchraydi: **Do not** touch. Hamma uchun bir xil — *Doesn't* ishlatilmaydi." },
        {
          t: 'compare',
          good: { title: "To'g'ri", items: ["Don't stop.", "Please don't wait for me.", "Don't be late."] },
          bad: { title: "Noto'g'ri", items: ['Not stop.', "Don't to wait for me.", "Don't late.", "No be late."] },
        },
        { t: 'tip', tone: 'warn', md: "Sifat bilan **be** kerak: *Be quiet!* (Jim bo'ling!), ***Don't be** late!* (Kechikmang!). *Don't late* ❌ — 2-bo'limdagi *to be* qoidasini eslang." },
        { t: 'check', ex: { k: 'fill', q: "___ open the window, please. It's cold.", a: ["don't", 'do not'], uz: 'Iltimos, derazani ochmang. Sovuq.', why: "Inkor buyruq → **Don't + fe'l**." } },
      ],
    },
    {
      title: "Let's — \"keling, …\"",
      blocks: [
        { t: 'p', md: "O'zingizni ham qo'shib taklif qilish uchun: **Let's + fe'l** (*let us* ning qisqasi).\n• **Let's go!** — Ketdik! / Qani, ketaylik!\n• **Let's play football.** — Keling, futbol o'ynaymiz.\n• **Let's wait** for Ali. — Keling, Alini kutaylik." },
        {
          t: 'examples', items: [
            { en: "Let's have lunch.", uz: 'Keling, tushlik qilamiz.' },
            { en: "Let's watch a film.", uz: "Qani, kino ko'raylik." },
            { en: "Let's help them.", uz: 'Keling, ularga yordam beraylik.' },
          ],
        },
        { t: 'tip', tone: 'warn', md: "*Let's* dan keyin ham **to yo'q** va fe'l asosiy shaklda: *Let's **go*** ✅ — *Let's to go* ❌, *Let's going* ❌." },
        { t: 'check', ex: { k: 'order', uz: "Keling, ingliz tilini o'rganamiz.", words: ["Let's", 'learn', 'English'], extra: ['to'], why: "**Let's + fe'l**, *to* yo'q." } },
      ],
    },
    {
      title: 'Olmoshlar: me, you, him, her…',
      blocks: [
        { t: 'p', md: "2-bo'limda **I, you, he, she…** (ega olmoshlari) ni o'rgandik. Fe'ldan **keyin** yoki predlogdan keyin boshqa shakl kerak — **kelishikdagi olmosh** (object pronoun). O'zbekchada bu *meni, menga, uni, unga* kabi qo'shimchalar bilan beriladi." },
        {
          t: 'table', head: ['Ega', 'Fe\'ldan keyin', "Ma'nosi", 'Misol'], speak: [3],
          rows: [
            ['I', 'me', 'meni, menga', 'Help me, please.'],
            ['you', 'you', 'sizni, sizga', 'I can help you.'],
            ['he', 'him', 'uni, unga (erkak)', 'Give him the book.'],
            ['she', 'her', 'uni, unga (ayol)', 'Look at her.'],
            ['it', 'it', 'uni, unga (narsa)', 'Take it.'],
            ['we', 'us', 'bizni, bizga', 'Wait for us.'],
            ['they', 'them', 'ularni, ularga', 'I like them.'],
          ],
        },
        {
          t: 'compare',
          good: { title: "To'g'ri", items: ['Help me!', 'Give her the key.', 'Look at them.', 'She likes him.'] },
          bad: { title: "Noto'g'ri", items: ['Help I!', 'Give she the key.', 'Look at they.', 'She likes he.'] },
        },
        { t: 'tip', tone: 'info', md: "**give** dan keyin tartib: **give + kimga + nimani**: *Give **me** the bag.* (Menga sumkani bering.) *Give him **it*** demaymiz — *Give **it** to him* deymiz." },
        { t: 'check', ex: { k: 'fill', q: "Where is Anna? I can't see ___.", a: ['her'], uz: "Anna qayerda? Uni ko'ra olmayapman.", why: "Anna — ayol, fe'ldan keyin → **her**." } },
      ],
    },
    {
      title: 'Talaffuz va sinfda',
      blocks: [
        {
          t: 'sounds', items: [
            { label: 'him, her', say: 'Help him. Help her.', uz: "Tez nutqda **h** tushib qoladi: *help him* → **\"helpim\"**, *help her* → **\"helpə\"**.", examples: ['Give him the book.', 'Look at her.'] },
            { label: 'them', say: 'Help them.', uz: "**them** — ovozli **ð** (til uchi tishlar orasida) + kuchsiz **\"əm\"**: **\"ðəm\"**.", examples: ['Look at them.', 'Wait for them.'] },
            { label: "Don't", say: "Don't stop.", uz: "**\"dount\"** — \"o\" emas, **\"ou\"**. *t* ko'pincha juda yengil aytiladi.", examples: ["Don't wait.", "Don't look."] },
          ],
        },
        {
          t: 'dialog', lines: [
            { who: 'Ustoz', en: 'Come in, please. Sit down.', uz: "Kiring, iltimos. O'tiring." },
            { who: 'Ustoz', en: "Look at the board. Don't open your books.", uz: 'Doskaga qarang. Kitoblaringizni ochmang.' },
            { who: 'Bekzod', en: "Sorry, I can't see it. Can you help me?", uz: "Kechirasiz, uni ko'ra olmayapman. Yordam bera olasizmi?" },
            { who: 'Ustoz', en: 'Stand up and sit next to Kamola. Help him, Kamola.', uz: "O'rningizdan turing va Kamolaning yoniga o'tiring. Unga yordam bering, Kamola." },
            { who: 'Kamola', en: 'OK. Take this pen.', uz: 'Xo\'p. Bu ruchkani oling.' },
            { who: 'Ustoz', en: "Good. Now let's start. Turn on the computer, please.", uz: 'Yaxshi. Endi boshlaymiz. Kompyuterni yoqing, iltimos.' },
          ],
        },
        { t: 'check', ex: { k: 'choice', q: "Ustoz: *Help ___, Kamola.* (Bekzodga)", opts: ['he', 'his', 'him', 'her'], a: 2, why: "Bekzod — erkak, fe'ldan keyin → **him**." } },
      ],
    },
  ],
  words: [
    { en: 'sit down', uz: "o'tirmoq", ipa: 'sɪt ˈdaʊn', pos: 'phrasal verb', ex: 'Please sit down.', exUz: "Iltimos, o'tiring." },
    { en: 'stand up', uz: "o'rnidan turmoq", ipa: 'stænd ˈʌp', pos: 'phrasal verb', ex: "Stand up, please.", exUz: "O'rningizdan turing, iltimos." },
    { en: 'come in', uz: 'kirmoq', ipa: 'kʌm ˈɪn', pos: 'phrasal verb', ex: 'Come in and sit down.', exUz: "Kiring va o'tiring." },
    { en: 'give', uz: 'bermoq', ipa: 'ɡɪv', pos: 'verb', ex: 'Give me the key, please.', exUz: 'Menga kalitni bering, iltimos.' },
    { en: 'take', uz: 'olmoq', ipa: 'teɪk', pos: 'verb', ex: 'Take your bag, please.', exUz: 'Sumkangizni oling, iltimos.' },
    { en: 'help', uz: 'yordam bermoq', ipa: 'help', pos: 'verb', ex: 'Can you help us?', exUz: 'Bizga yordam bera olasizmi?' },
    { en: 'wait', uz: 'kutmoq', ipa: 'weɪt', pos: 'verb', ex: 'Wait for me, please.', exUz: 'Meni kuting, iltimos.' },
    { en: 'look at', uz: 'qaramoq', ipa: 'ˈlʊk ət', pos: 'phrasal verb', ex: 'Look at the board.', exUz: 'Doskaga qarang.' },
    { en: 'stop', uz: "to'xtamoq, to'xtatmoq", ipa: 'stɒp', pos: 'verb', ex: "Stop! Don't go there.", exUz: "To'xtang! U yerga bormang." },
    { en: 'turn on', uz: 'yoqmoq', ipa: 'tɜːn ˈɒn', pos: 'phrasal verb', ex: 'Turn on the lamp, please.', exUz: 'Lampani yoqing, iltimos.' },
  ],
  practice: [
    { k: 'match', pairs: [['sit down', "o'tirmoq"], ['stand up', "o'rnidan turmoq"], ['come in', 'kirmoq'], ['look at', 'qaramoq'], ['turn on', 'yoqmoq']] },
    { k: 'match', pairs: [['give', 'bermoq'], ['take', 'olmoq'], ['help', 'yordam bermoq'], ['wait', 'kutmoq'], ['stop', "to'xtamoq"]] },
    { k: 'match', pairs: [['I', 'me'], ['he', 'him'], ['she', 'her'], ['we', 'us'], ['they', 'them']] },
    { k: 'listen', say: "Don't wait for them.", opts: ["Don't wait for them.", 'Wait for them.', "Don't wait for him.", "Don't wait for me."], a: 0 },
    { k: 'listen', say: 'Give her the book.', opts: ['Give him the book.', 'Give her the book.', 'Give me the book.', 'Take her book.'], a: 1 },
    { k: 'choice', q: "\"Kechikmang!\"", opts: ["Don't late!", "Not be late!", "Don't be late!", "You don't late!"], a: 2, why: "Sifat bilan **be**: *Don't **be** late!*" },
    { k: 'choice', q: "My friends are here. Let's help ___.", opts: ['they', 'them', 'their', 'us'], a: 1, why: "*friends* = they → fe'ldan keyin **them**." },
    { k: 'fill', q: '___ go to the park!', a: ["let's", 'let us'], uz: "Keling, bog'ga boramiz!", why: "Taklif → **Let's + fe'l**." },
    { k: 'fill', q: "Ali is my friend. I often help ___.", a: ['him'], why: "Ali — erkak → **him**." },
    { k: 'fill', q: "We can't see. Please help ___.", a: ['us'], why: "we → **us**." },
    { k: 'tf', q: "*Please sits down.* — to'g'ri buyruq gap.", a: false, why: "Buyruq — fe'lning asosiy shakli: **Please sit down.**" },
    { k: 'tf', q: "Tez nutqda *help him* \"helpim\" kabi eshitiladi.", a: true },
    { k: 'order', uz: 'Iltimos, televizorni yoqmang.', words: ['Please', "don't", 'turn', 'on', 'the', 'TV'], extra: ['not'], alt: [['Please', "don't", 'turn', 'the', 'TV', 'on']], why: "**Don't + fe'l**." },
    { k: 'order', uz: 'Menga kalitni bering.', words: ['Give', 'me', 'the', 'key'], extra: ['I'], why: "Fe'ldan keyin **me**: *Give **me** the key.*" },
    { k: 'translate', uz: "O'tiring, iltimos.", a: ['Sit down, please', 'Sit down please', 'Please sit down', 'Please, sit down', 'Sit down'] },
    { k: 'translate', uz: 'Bizni kuting!', a: ['Wait for us', 'Please wait for us', 'Wait for us, please', 'Wait for us please'], why: "*kutmoq* — **wait for**; biz → **us**." },
    { k: 'speak', say: "Come in, please. Sit down and look at me.", uz: "Ustozdek muloyim ohangda ayting" },
  ],
  quiz: [
    { k: 'listen', say: "Let's turn on the lamp.", opts: ["Let's turn on the lamp.", "Don't turn on the lamp.", 'Turn on the lamp.'], a: 0 },
    { k: 'listen', say: 'Look at them.', opts: ['Look at him.', 'Look at her.', 'Look at them.', 'Look at me.'], a: 2 },
    { k: 'choice', q: "Qaysi gap noto'g'ri?", opts: ['Stand up, please.', "Don't to stop here.", "Let's wait.", 'Help me!'], a: 1, why: "*Don't* dan keyin *to* yo'q: **Don't stop here.**" },
    { k: 'choice', q: "Malika is in the kitchen. Can you give ___ this bag?", opts: ['she', 'her', 'hers', 'him'], a: 1, why: "Malika — ayol, fe'ldan keyin → **her**." },
    { k: 'fill', q: "___ look at your phone in the lesson!", a: ["don't", 'do not'], uz: 'Darsda telefoningizga qaramang!' },
    { k: 'fill', q: 'These are my keys. Please take ___.', a: ['them'], why: "*keys* — ko'plik → **them**." },
    { k: 'order', uz: 'Keling, ularga yordam beraylik.', words: ["Let's", 'help', 'them'], extra: ['they', 'to'] },
    { k: 'translate', uz: 'Kiring!', a: ['Come in', 'Come in, please', 'Please come in', 'Come in please'] },
    { k: 'translate', uz: "To'xtang! Kutmang!", a: ["Stop! Don't wait", 'Stop. Do not wait', "Stop! Do not wait", "Stop. Don't wait", "Stop, don't wait", 'Stop, do not wait'] },
    { k: 'translate', uz: 'Unga qarang (ayolga).', a: ['Look at her', 'Look at her, please', 'Please look at her'] },
  ],
  summary: [
    "Buyruq gap = **fe'lning asosiy shakli**, ega yo'q: *Sit down. Wait.* Muloyim qilish uchun **please**.",
    "Inkor: **Don't + fe'l** (*Don't stop*); sifat bilan **be**: *Don't be late.*",
    "Taklif: **Let's + fe'l** — *Let's go!* (to yo'q).",
    "Fe'l yoki predlogdan keyin: **me, you, him, her, it, us, them** — *Help me. Look at them.*",
  ],
  homework: "Uyda yoki sinfda ishlatiladigan 8 ta buyruq gap yozing (4 ta ijobiy, 3 ta *Don't…*, 1 ta *Let's…*). Keyin har bir gapda bitta olmosh (me, him, her, us, them) ishlatib, 5 ta yangi gap tuzing va ularni ovoz chiqarib ayting.",
};

export default lesson;
