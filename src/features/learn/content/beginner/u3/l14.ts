import type { Lesson } from '../../../types';

// Mini lesson (grammar): Wh- questions with do / does. Builds on Do/Does questions (u3-l5) and "What time…?" (u3-l6 comes later,
// so only the pattern What/Where/When/Why/How + do/does + subject + verb is taught here).
const lesson: Lesson = {
  id: 'u3-l14',
  title: 'Wh- questions with do / does',
  titleUz: "Wh-savollar: What do you…? Where does she…?",
  mini: true,
  goal: "**What, Where, When, Why, How** so'zlari bilan savol berasiz: *Where does she live? When do you get up? Why do they study English?* va ularga qisqa javob qaytarasiz.",
  slides: [
    {
      title: "Formula: so'roq so'zi + do/does + ega + fe'l",
      blocks: [
        { t: 'p', md: "Siz **Do you…? / Does she…?** savollarini bilasiz (Yes/No savol). Agar \"ha/yo'q\" emas, **ma'lumot** so'ramoqchi bo'lsangiz, oldiga **so'roq so'zi** qo'yasiz:\n**so'roq so'zi + do / does + ega + fe'l (s'siz)?**" },
        {
          t: 'table', head: ["So'roq so'zi", "O'zbekcha", 'Misol'], speak: [2],
          rows: [
            ['What', 'nima?', 'What do you do?'],
            ['Where', 'qayerda? qayerga?', 'Where does she live?'],
            ['When', 'qachon?', 'When does he get up?'],
            ['Why', 'nega?', 'Why do they study English?'],
            ['How', 'qanday? qanaqa yo\'l bilan?', 'How do you go to work?'],
          ],
        },
        { t: 'tip', tone: 'info', md: "*What do you do?* — \"Siz nima ish qilasiz?\", ya'ni **kasbingiz nima**. Birinchi *do* — yordamchi so'z, ikkinchi *do* — \"qilmoq\"." },
        { t: 'check', ex: { k: 'order', uz: 'U qayerda yashaydi?', words: ['Where', 'does', 'she', 'live'], extra: ['lives', 'do'], why: "**Where + does + she + live?**" } },
      ],
    },
    {
      title: 'do yoki does? Fe\'lda -s yo\'q!',
      blocks: [
        { t: 'p', md: "Qoida o'zgarmaydi: **I / you / we / they** → **do**; **he / she / it** → **does**. **Does** bor joyda fe'lga **-s** qo'shilmaydi." },
        { t: 'examples', items: [
          { en: 'Where do you work?', uz: 'Qayerda ishlaysiz?' },
          { en: 'Where does your brother work?', uz: 'Akangiz qayerda ishlaydi?' },
          { en: 'When do you have lunch?', uz: 'Tushlikni qachon qilasiz?' },
          { en: 'How does she go to school?', uz: 'U maktabga qanday boradi?' },
        ] },
        { t: 'compare', good: { title: "To'g'ri", items: ['Where does he live?', 'When do they get up?', 'What does she do?'] }, bad: { title: "Noto'g'ri", items: ['Where does he lives?', 'When they get up?', 'What she does?', 'Where do he live?'] } },
        { t: 'check', ex: { k: 'choice', q: "To'g'ri savolni tanlang:", opts: ['When does Ali gets up?', 'When do Ali get up?', 'When does Ali get up?', 'When Ali gets up?'], a: 2, why: "*Ali* = he → **does** + fe'l **get** (s'siz)." } },
        { t: 'check', ex: { k: 'fill', q: 'Where ___ your parents live?', a: ['do'], uz: 'Ota-onangiz qayerda yashaydi?', why: "*your parents* = they → **do**." } },
      ],
    },
    {
      title: 'Javob berish: Why? — Because…',
      blocks: [
        { t: 'p', md: "Har bir savolga mos javob beriladi: **Where** → joy, **When** → vaqt, **How** → usul. **Why?** savoliga **Because…** (chunki) bilan javob beriladi." },
        { t: 'dialog', lines: [
          { who: 'Lola', en: 'Where do you live, Tom?', uz: 'Tom, qayerda yashaysan?' },
          { who: 'Tom', en: 'I live in Samarkand. My sister lives in Tashkent.', uz: 'Samarqandda yashayman. Singlim Toshkentda yashaydi.' },
          { who: 'Lola', en: 'How does she go to work?', uz: 'U ishga qanday boradi?' },
          { who: 'Tom', en: 'By bus. Why do you ask?', uz: 'Avtobusda. Nega so\'rayapsan?' },
          { who: 'Lola', en: 'Because I want a job in Tashkent too!', uz: 'Chunki men ham Toshkentda ish xohlayman!' },
        ] },
        { t: 'tip', tone: 'good', md: "Transport haqida: **by bus, by car, by train** (artikl yo'q!). Ammo piyoda: **on foot**." },
        { t: 'check', ex: { k: 'choice', q: '*Why do you study English?* — ...', opts: ['At seven.', 'In Tashkent.', 'Because I need it for work.', 'By bus.'], a: 2, why: "**Why?** → **Because…**." } },
      ],
    },
  ],
  words: [
    { en: 'where', uz: 'qayerda, qayerga', ipa: 'weə', pos: 'adverb', ex: 'Where does your friend live?', exUz: 'Do\'stingiz qayerda yashaydi?' },
    { en: 'when', uz: 'qachon', ipa: 'wen', pos: 'adverb', ex: 'When do you have lunch?', exUz: 'Tushlikni qachon qilasiz?' },
    { en: 'why', uz: 'nega, nima uchun', ipa: 'waɪ', pos: 'adverb', ex: 'Why do you like this game?', exUz: 'Nega bu o\'yinni yoqtirasiz?' },
    { en: 'because', uz: 'chunki', ipa: 'bɪˈkɒz', pos: 'conjunction', ex: 'I study because I need a job.', exUz: 'Men ish kerak bo\'lgani uchun o\'qiyman.' },
    { en: 'how', uz: 'qanday, qanaqa usulda', ipa: 'haʊ', pos: 'adverb', ex: 'How do you go to the park?', exUz: 'Parkka qanday borasiz?' },
    { en: 'by bus', uz: 'avtobusda', ipa: 'baɪ bʌs', pos: 'phrase', ex: 'She goes to school by bus.', exUz: 'U maktabga avtobusda boradi.' },
  ],
  practice: [
    { k: 'match', pairs: [['where', 'qayerda'], ['when', 'qachon'], ['why', 'nega'], ['because', 'chunki'], ['how', 'qanday']] },
    { k: 'choice', q: '___ does he live?', opts: ['Where', 'Because', 'By bus', 'Yes'], a: 0 },
    { k: 'choice', q: '___ do you get up? — At six.', opts: ['Where', 'When', 'Why', 'How'], a: 1, why: "Javob vaqt (**At six**) → **When**." },
    { k: 'choice', q: '___ do you go to work? — By bus.', opts: ['When', 'Where', 'How', 'Why'], a: 2, why: "Javob usul (**By bus**) → **How**." },
    { k: 'fill', q: 'What ___ you do?', a: ['do'], uz: 'Siz nima ish qilasiz?', why: "**you** → do." },
    { k: 'fill', q: 'Where ___ she work?', a: ['does'], uz: 'U qayerda ishlaydi?', why: "**she** → does." },
    { k: 'fill', q: 'When does he ___ lunch?', a: ['have'], uz: 'U tushlikni qachon qiladi?', why: "**does** dan keyin: *have* (has emas)." },
    { k: 'listen', say: 'Where does she live?', opts: ['Where does she live?', 'Where do you live?', 'When does she live?', 'Where does he live?'], a: 0 },
    { k: 'fix', wrong: 'Where does she lives?', a: ['Where does she live?'], why: "**does** dan keyin fe'lda -s yo'q." },
    { k: 'fix', wrong: 'When they get up?', a: ['When do they get up?'], why: "Savolda **do** kerak." },
    { k: 'order', uz: 'Nega ular ingliz tilini o\'rganishadi?', words: ['Why', 'do', 'they', 'study', 'English'], extra: ['does', 'studies'], why: "**Why + do + they + study…?**" },
    { k: 'order', uz: 'Siz ishga qanday borasiz?', words: ['How', 'do', 'you', 'go', 'to', 'work'], extra: ['does', 'goes'] },
    { k: 'translate', uz: 'Akang qayerda ishlaydi?', a: ['Where does your brother work', 'Where does your brother work?'], why: "*your brother* = he → **does**." },
    { k: 'speak', say: 'Where do you live? When do you get up?', uz: 'Savol ohangiga e\'tibor bering' },
  ],
  quiz: [
    { k: 'listen', say: 'How do you go to work?', opts: ['How do you go to work?', 'How does he go to work?', 'Who do you go to work?', 'How do you go to school?'], a: 0 },
    { k: 'choice', q: '___ does she study English? — Because she wants a job.', opts: ['Where', 'When', 'Why', 'How'], a: 2 },
    { k: 'choice', q: "To'g'ri savolni tanlang:", opts: ['Where she works?', 'Where does she works?', 'Where do she work?', 'Where does she work?'], a: 3 },
    { k: 'fill', q: 'When ___ your sister get up?', a: ['does'], why: "*your sister* = she → **does**." },
    { k: 'fill', q: 'Where ___ you live?', a: ['do'] },
    { k: 'fix', wrong: 'Why do he study English?', a: ['Why does he study English?'] },
    { k: 'order', uz: 'Bola maktabga qanday boradi?', words: ['How', 'does', 'the', 'boy', 'go', 'to', 'school'], extra: ['do', 'goes'] },
    { k: 'translate', uz: 'Siz qayerda yashaysiz?', a: ['Where do you live', 'Where do you live?'] },
    { k: 'tf', q: '*Why do you study English? — At nine.* Javob savolga mos.', a: false, why: "**Why?** → **Because…**, vaqt emas." },
  ],
  summary: [
    "Wh-savol: **so'roq so'zi + do/does + ega + fe'l**: *Where does she live?*",
    "**do** — I/you/we/they bilan, **does** — he/she/it bilan; **does** dan keyin fe'lda -s yo'q.",
    "**What** — nima, **Where** — qayerda, **When** — qachon, **Why** — nega (*Because…*), **How** — qanday (*by bus*).",
  ],
  homework: "Do'stingizga 5 ta savol yozing: What, Where, When, Why, How bilan (*Where do you live?*). Keyin o'zingiz ularga inglizcha javob bering.",
};

export default lesson;
