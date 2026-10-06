import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: 'u4-l1',
  title: 'Wh- questions',
  titleUz: "Wh-savollar: what, where, who…",
  goal: "**What, where, when, who, why, how** kabi so'roq so'zlari bilan to'g'ri savol tuzasiz (so'roq so'zi + do/does/be + ega) va bunday savollarga qisqa javob bera olasiz.",
  slides: [
    {
      title: "So'roq so'zlari nima uchun kerak?",
      blocks: [
        { t: 'p', md: "3-bo'limda **Yes/No savollar**ni o'rgandik: *Do you live in Tashkent?* — *Yes, I do.* Lekin ko'pincha bizga \"ha/yo'q\" emas, **ma'lumot** kerak: *qayerda? qachon? kim? nima uchun?*" },
        { t: 'p', md: "Buning uchun **so'roq so'zlari** ishlatiladi. Ularning ko'pi **wh** bilan boshlanadi, shuning uchun *Wh-questions* deyiladi." },
        { t: 'p', md: "O'zbek tilida so'roq so'zi gap o'rtasida turishi mumkin: *Sen **qayerda** yashaysan?* Ingliz tilida esa so'roq so'zi **har doim gap boshida** turadi: ***Where** do you live?*" },
        { t: 'tip', tone: 'info', md: "Formula juda oddiy: **Yes/No savolning oldiga so'roq so'zini qo'yasiz.**\n• *Do you live in Tashkent?* → ***Where** do you live?*\n• *Is she a teacher?* → ***Who** is she?*" },
      ],
    },
    {
      title: "Asosiy so'roq so'zlari",
      blocks: [
        {
          t: 'table', head: ["So'z", "Ma'nosi", 'Misol'], speak: [0, 2],
          rows: [
            ['what', 'nima? qanday?', 'What is your name?'],
            ['where', 'qayerda? qayerga?', 'Where do you live?'],
            ['when', 'qachon?', 'When do you get up?'],
            ['who', 'kim?', 'Who is your teacher?'],
            ['why', 'nima uchun? nega?', 'Why are you tired?'],
            ['how', 'qanday? qanaqa?', 'How are you?'],
            ['which', 'qaysi? (tanlovdan)', 'Which bag do you like?'],
            ['whose', 'kimning?', 'Whose phone is this?'],
            ['how many', 'nechta?', 'How many books do you have?'],
            ['how old', 'necha yoshda?', 'How old are you?'],
          ],
        },
        {
          t: 'sounds', items: [
            { label: 'wh = w', say: 'what where when why which', uz: "Ko'p so'zlarda **wh** oddiy **\"w\"** bo'lib o'qiladi: lablarni dumaloq qilib \"u\" boshlang. *h* eshitilmaydi.", examples: ['what', 'where', 'when', 'why', 'which'] },
            { label: 'who = h', say: 'who whose', uz: "Diqqat! **who** va **whose** da esa **\"h\"** eshitiladi, *w* esa o'qilmaydi: **\"hu:\"**, **\"hu:z\"**.", examples: ['who', 'whose'] },
          ],
        },
        { t: 'check', ex: { k: 'listen', say: 'who', opts: ['how', 'who', 'why', 'where'], a: 1, why: "\"hu:\" — bu **who** (kim). *how* esa \"hau\" deb aytiladi." } },
      ],
    },
    {
      title: 'Savol tuzilishi: do / does bilan',
      blocks: [
        { t: 'p', md: "Present Simple fe'llari bilan savol tuzishda **do / does** yordamchisi kerak. Tartib:\n**So'roq so'zi + do/does + ega + fe'l (asosiy shakl)?**" },
        {
          t: 'table', head: ["So'roq so'zi", 'do / does', 'Ega', "Fe'l + qolgan qism"], speak: [],
          rows: [
            ['Where', 'do', 'you', 'live?'],
            ['What', 'does', 'she', 'like?'],
            ['When', 'do', 'they', 'play football?'],
            ['Why', 'does', 'he', 'study English?'],
            ['How many', 'do', 'you', 'have?'],
          ],
        },
        {
          t: 'examples', items: [
            { en: 'Where do you work?', uz: 'Qayerda ishlaysiz?' },
            { en: 'What does your friend study?', uz: "Do'stingiz nimani o'qiydi?", note: "*does* bor — fe'lga **-s qo'shilmaydi**: *study*, not *studies*." },
            { en: 'When do you have lunch?', uz: 'Qachon tushlik qilasiz?' },
            { en: 'Why does she drink coffee?', uz: 'U nega qahva ichadi?' },
          ],
        },
        {
          t: 'compare',
          good: { title: "To'g'ri", items: ['Where do you live?', 'What does he like?', 'When does she work?'] },
          bad: { title: "Noto'g'ri", items: ['Where you live?', 'What does he likes?', 'When she works?'] },
        },
        { t: 'check', ex: { k: 'fill', q: 'Where ___ your sister work?', a: ['does'], uz: 'Opangiz qayerda ishlaydi?', why: "*your sister* = she → **does**. Fe'l esa *work* (s siz)." } },
      ],
    },
    {
      title: 'Savol tuzilishi: to be bilan',
      blocks: [
        { t: 'p', md: "Agar gapda **am / is / are** bo'lsa, *do/does* kerak emas. To be egadan **oldinga** o'tadi:\n**So'roq so'zi + am/is/are + ega?**" },
        {
          t: 'examples', items: [
            { en: 'What is your name?', uz: 'Ismingiz nima?' },
            { en: 'Where are you from?', uz: 'Qayerdansiz?' },
            { en: 'How old is your teacher?', uz: "O'qituvchingiz necha yoshda?" },
            { en: 'Why are they late?', uz: 'Ular nega kech qolishdi?' },
            { en: 'Who is that man?', uz: 'Anavi erkak kim?' },
          ],
        },
        { t: 'tip', tone: 'info', md: "Og'zaki nutqda qisqa shakllar ko'p ishlatiladi: **What's** = What is, **Where's** = Where is, **Who's** = Who is. *Who's* (kim) va *whose* (kimning) bir xil aytiladi — ma'noni gapdan tushunasiz." },
        {
          t: 'compare',
          good: { title: "To'g'ri", items: ['How old are you?', 'Where is the bank?'] },
          bad: { title: "Noto'g'ri", items: ['How old you are?', 'How many years are you?', 'Where the bank is?'] },
        },
        { t: 'check', ex: { k: 'choice', q: "To'g'ri savolni tanlang: \"Siz necha yoshdasiz?\"", opts: ['How old you are?', 'How many years you have?', 'How old are you?', 'How old do you?'], a: 2, why: "Yosh **to be** bilan so'raladi: **How old are you?** — *I'm twenty.*" } },
      ],
    },
    {
      title: '"Who" — ega haqida savol',
      blocks: [
        { t: 'p', md: "**Who** ikki xil ishlaydi:\n• **kimni / kim bilan** haqida: *Who **do** you like?* — *I like my teacher.* (do kerak)\n• **ega o'zi** noma'lum bo'lsa: *Who **lives** here?* — *Ali lives here.* (**do yo'q!**)" },
        { t: 'p', md: "Ega haqida so'raganda **who** egani almashtiradi, gap tartibi xuddi darak gapdagidek qoladi. Who — *he/she* kabi, shuning uchun fe'lga **-s** qo'shiladi." },
        {
          t: 'examples', items: [
            { en: 'Who teaches you English?', uz: "Sizga ingliz tilini kim o'rgatadi?", note: "Javob: *Mr Brown teaches me.*" },
            { en: 'Who lives in this house?', uz: 'Bu uyda kim yashaydi?' },
            { en: 'Who do you live with?', uz: 'Kim bilan yashaysiz?', note: "Bu yerda *you* — ega, shuning uchun **do** kerak." },
          ],
        },
        {
          t: 'compare',
          good: { title: "To'g'ri", items: ['Who speaks English?', 'Who wants tea?'] },
          bad: { title: "Noto'g'ri", items: ['Who does speak English?', 'Who want tea?'] },
        },
        { t: 'check', ex: { k: 'choice', q: "\"Kim choy xohlaydi?\" — to'g'ri variant:", opts: ['Who does want tea?', 'Who wants tea?', 'Who want tea?'], a: 1, why: "Who — ega. **do** kerak emas, fe'lga **-s**: *Who **wants** tea?*" } },
      ],
    },
    {
      title: 'Which, whose, how many va intonatsiya',
      blocks: [
        { t: 'p', md: "**which** — bir nechta variantdan tanlaganda: *Which colour do you like, red or blue?*\n**whose** — egasini so'raganda: *Whose bag is this?* — *It's Anna's.*\n**how many** + ko'plikdagi ot: *How many friends do you have?*" },
        { t: 'p', md: "**why** savoliga odatda **because** (chunki) bilan javob beriladi: *Why do you study English?* — *Because I need it for work.*" },
        { t: 'tip', tone: 'good', md: "**Intonatsiya:** Wh-savollarda ovoz oxirida **pastga tushadi** ↘: *Where do you live?↘* Yes/No savollarda esa odatda ko'tariladi ↗: *Do you live here?↗* 🔊 tugmalari bilan eshitib, takrorlang." },
        {
          t: 'dialog', lines: [
            { who: 'Aziz', en: "Hi! What's your name?", uz: 'Salom! Ismingiz nima?' },
            { who: 'Lola', en: "I'm Lola.", uz: 'Men Lolaman.' },
            { who: 'Aziz', en: 'Where are you from?', uz: 'Qayerdansiz?' },
            { who: 'Lola', en: "I'm from Samarkand.", uz: 'Samarqanddanman.' },
            { who: 'Aziz', en: 'Why do you study English?', uz: "Nega ingliz tilini o'qiysiz?" },
            { who: 'Lola', en: 'Because I need English for my work.', uz: 'Chunki ishim uchun ingliz tili kerak.' },
            { who: 'Aziz', en: 'Whose book is this?', uz: 'Bu kimning kitobi?' },
            { who: 'Lola', en: "It's my teacher's book.", uz: "Bu ustozimning kitobi." },
          ],
        },
        { t: 'check', ex: { k: 'fill', q: '___ pen is this? — It is Ali\'s pen.', a: ['whose'], uz: 'Bu kimning ruchkasi?', why: "Egasini so'rayapmiz → **Whose**." } },
      ],
    },
  ],
  words: [
    { en: 'what', uz: 'nima', ipa: 'wɒt', pos: 'question word', ex: 'What do you drink in the morning?', exUz: 'Ertalab nima ichasiz?' },
    { en: 'where', uz: 'qayerda, qayerga', ipa: 'weə', pos: 'question word', ex: 'Where do you live?', exUz: 'Qayerda yashaysiz?' },
    { en: 'when', uz: 'qachon', ipa: 'wen', pos: 'question word', ex: 'When do you go to bed?', exUz: 'Qachon uxlashga yotasiz?' },
    { en: 'who', uz: 'kim', ipa: 'huː', pos: 'question word', ex: 'Who is your teacher?', exUz: "O'qituvchingiz kim?" },
    { en: 'why', uz: 'nima uchun, nega', ipa: 'waɪ', pos: 'question word', ex: 'Why are you sad?', exUz: "Nega xafasiz?" },
    { en: 'how', uz: 'qanday', ipa: 'haʊ', pos: 'question word', ex: 'How do you go to work?', exUz: 'Ishga qanday borasiz?' },
    { en: 'which', uz: 'qaysi', ipa: 'wɪtʃ', pos: 'question word', ex: 'Which shirt do you like?', exUz: "Qaysi ko'ylak sizga yoqadi?" },
    { en: 'whose', uz: 'kimning', ipa: 'huːz', pos: 'question word', ex: 'Whose car is this?', exUz: 'Bu kimning mashinasi?' },
    { en: 'how many', uz: 'nechta', ipa: 'haʊ ˈmen.i', pos: 'phrase', ex: 'How many children do they have?', exUz: 'Ularning nechta farzandi bor?' },
    { en: 'how old', uz: 'necha yoshda', ipa: 'haʊ ˈəʊld', pos: 'phrase', ex: 'How old is your friend?', exUz: "Do'stingiz necha yoshda?" },
  ],
  practice: [
    { k: 'match', pairs: [['what', 'nima'], ['where', 'qayerda'], ['when', 'qachon'], ['who', 'kim'], ['why', 'nega']] },
    { k: 'match', pairs: [['how', 'qanday'], ['which', 'qaysi'], ['whose', 'kimning'], ['how many', 'nechta'], ['how old', 'necha yoshda']] },
    { k: 'listen', say: 'whose', opts: ['who', 'whose', 'where', 'how'], a: 1, why: "\"hu:z\" — **whose** (kimning). *who* — \"hu:\", oxirida *z* yo'q." },
    { k: 'listen', say: 'Where do you work?', opts: ['Where do you work?', 'When do you work?', 'Why do you work?', 'Where do you walk?'], a: 0 },
    { k: 'choice', q: "\"Ertalab soat nechada turasiz?\" uchun qaysi so'z kerak? ___ do you get up?", opts: ['Where', 'Who', 'When', 'Whose'], a: 2, why: "Vaqt haqida → **When**." },
    { k: 'choice', q: "To'g'ri savolni tanlang:", opts: ['What she likes?', 'What does she like?', 'What does she likes?', 'What do she like?'], a: 1, why: "she → **does**, fe'l asosiy shaklda: *like*." },
    { k: 'fill', q: 'Where ___ they live?', a: ['do'], uz: 'Ular qayerda yashaydi?', why: "they → **do**." },
    { k: 'fill', q: 'How old ___ your sister?', a: ['is'], uz: 'Opangiz necha yoshda?', why: "Yosh — **to be** bilan; *your sister* = she → **is**." },
    { k: 'fill', q: '___ many friends do you have?', a: ['how'], uz: "Nechta do'stingiz bor?", why: "nechta = **How many**." },
    { k: 'tf', q: "*Who lives here?* gapida **does** kerak emas, chunki who — ega.", a: true, why: "Who ega bo'lsa: *Who **lives** here?* — do/does yo'q, fe'lga -s." },
    { k: 'tf', q: "**who** so'zida *w* harfi aniq eshitiladi.", a: false, why: "who — **\"hu:\"**, *w* o'qilmaydi." },
    { k: 'order', uz: "Do'stingiz qayerda ishlaydi?", words: ['Where', 'does', 'your', 'friend', 'work'], why: "So'roq so'zi + **does** + ega + fe'l." },
    { k: 'order', uz: "Nega ingliz tilini o'qiysiz?", words: ['Why', 'do', 'you', 'study', 'English'], extra: ['does'], why: "you → **do**." },
    { k: 'translate', uz: 'Ismingiz nima?', a: ["What is your name", "What's your name"], why: "**What is your name?** — to be bilan, do kerak emas." },
    { k: 'translate', uz: 'Bu kimning sumkasi?', a: ['Whose bag is this', "Whose bag is it", "Whose is this bag"], why: "kimning = **whose**: *Whose bag is this?*" },
    { k: 'speak', say: 'Where do you live? How old are you?', uz: "Ikkala savolni ovoz pastga tushadigan qilib ayting" },
  ],
  quiz: [
    { k: 'listen', say: 'Why are you late?', opts: ['Why are you late?', 'Who are you late?', 'Where are you late?', 'When are you late?'], a: 0 },
    { k: 'listen', say: 'Which book do you want?', opts: ['Whose book do you want?', 'What book do you want?', 'Which book do you want?'], a: 2 },
    { k: 'choice', q: "Javob: *Because I'm hungry.* Savol qaysi so'z bilan boshlangan?", opts: ['When', 'Why', 'How', 'Where'], a: 1, why: "**because** — **why** savoliga javob." },
    { k: 'choice', q: "\"Bu yerda kim ishlaydi?\"", opts: ['Who does work here?', 'Who work here?', 'Who works here?', 'Who is work here?'], a: 2, why: "Who — ega: *Who **works** here?*" },
    { k: 'fill', q: 'When ___ your father go to work?', a: ['does'], why: "your father = he → **does**." },
    { k: 'fill', q: 'What ___ your teacher\'s name?', a: ['is'], why: "*name* — birlik → **is**." },
    { k: 'order', uz: "U qayerdan?", words: ['Where', 'is', 'she', 'from'], extra: ['does'], why: "to be bilan: *Where **is** she from?*" },
    { k: 'order', uz: "Sizning nechta mushukingiz bor?", words: ['How', 'many', 'cats', 'do', 'you', 'have'], why: "*How many* + ko'plikdagi ot + do + ega + fe'l." },
    { k: 'translate', uz: 'Siz necha yoshdasiz?', a: ['How old are you'], why: "**How old are you?** — *How many years* emas." },
    { k: 'translate', uz: 'Qayerda yashaysiz?', a: ['Where do you live'], why: "**Where do you live?**" },
    { k: 'translate', uz: 'Qaysi rang sizga yoqadi?', a: ['Which colour do you like', 'Which color do you like', 'What colour do you like', 'What color do you like'] },
  ],
  summary: [
    "So'roq so'zi **har doim gap boshida**: *Where do you live?*",
    "Fe'l bilan: **so'roq so'zi + do/does + ega + fe'l** (does bo'lsa -s yo'q): *What does she like?*",
    "To be bilan: **so'roq so'zi + am/is/are + ega**: *How old are you?*",
    "**Who** ega bo'lsa do kerak emas: *Who lives here?*",
    "**who / whose** \"hu:\" deb o'qiladi; wh-savollarda ovoz oxirida pasayadi ↘.",
  ],
  homework: "O'zingiz haqingizda 8 ta wh-savol yozing (what, where, when, who, why, how, which, how many) va har biriga to'liq javob bering. Keyin savollarni ovoz chiqarib, oxirida ovozni pasaytirib o'qing.",
};

export default lesson;
