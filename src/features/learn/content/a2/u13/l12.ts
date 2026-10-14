import type { Lesson } from '../../../types';

// Mini lesson (grammar): future time expressions and where they go. Builds on l1-l3 (going to, will, shall) without repeating them.
const lesson: Lesson = {
  id: 'u13-l12',
  title: "Future time expressions",
  titleUz: "Kelasi zamon iboralari: tomorrow, next week, in two days, soon",
  mini: true,
  kind: 'grammar',
  goal: "Kelajak vaqtini to'g'ri aytasiz: **tomorrow morning, next Friday, in two days, by Friday, soon, later, in 2027** — va ularni **going to**, **will** hamda **Present Continuous** bilan qo'llab, **in / at / on** ni adashtirmaysiz.",
  slides: [
    {
      title: "Kelajak vaqtini aytish",
      blocks: [
        { t: 'p', md: "Kelajak gapida **qachon** degan savolga vaqt iborasi javob beradi. Ba'zi iboralar oldida predlog **kerak emas**, ba'zilarida esa kerak. Jadvalni ovoz chiqarib o'qing:" },
        { t: 'table', head: ['Ibora', "O'zbekcha", 'Predlog'], speak: [0], rows: [
          ['tomorrow morning', 'ertaga ertalab', "yo'q"],
          ['this evening / tonight', 'bugun kechqurun', "yo'q"],
          ['next Friday / next month', 'kelasi juma / oy', "yo'q"],
          ['the day after tomorrow', 'indinga', "yo'q"],
          ['in two days / in a week', 'ikki kundan / bir haftadan keyin', 'in'],
          ['in 2027', '2027-yilda', 'in'],
          ['by Friday', 'juma kunigacha (kechi bilan)', 'by'],
        ] },
        { t: 'compare', good: { title: "To'g'ri", items: ['I\'ll call you tomorrow.', 'We\'re leaving next week.', 'See you in two days.'] }, bad: { title: "Xato", items: ['I\'ll call you in tomorrow.', 'We\'re leaving in next week.', 'See you on two days.'] } },
        { t: 'tip', tone: 'warn', md: "**tomorrow, this, next** oldidan **in / on / at** qo'ymang: *next week* ✅, *in next week* ❌. Lekin **in two days** — hozirdan boshlab sanalgan muddat uchun **in** kerak." },
        { t: 'check', ex: { k: 'choice', q: "\"Ikki kundan keyin Samarqandga boraman.\"", opts: ["I'm going to Samarkand in two days.", "I'm going to Samarkand after two days ago.", "I'm going to Samarkand next two days.", "I'm going to Samarkand on two days."], a: 0, why: "Hozirdan muddat — **in two days**." } },
      ],
    },
    {
      title: "In two days yoki by Friday?",
      blocks: [
        { t: 'p', md: "Ikkita ibora o'xshash ko'rinadi, lekin ma'nosi boshqa:" },
        { t: 'table', head: ['Ibora', "Ma'nosi", 'Misol'], speak: [2], rows: [
          ['in + muddat', "shu muddatdan keyin", "The doctor is coming in an hour."],
          ['by + vaqt', "shu vaqtgacha (kech bo'lmasdan)", "I'll finish the report by Friday."],
          ['soon', "tez orada", "I'll see you soon."],
          ['later', "keyinroq", "I'll call you later."],
        ] },
        { t: 'examples', items: [
          { en: "The film starts in ten minutes.", uz: "Film o'n daqiqadan keyin boshlanadi.", note: "Hozirdan o'n daqiqa." },
          { en: "I'll send you the photos by Sunday.", uz: "Rasmlarni yakshanbagacha yuboraman.", note: "Yakshanba — oxirgi muddat." },
          { en: "We're going to buy a new flat in 2027.", uz: "2027-yilda yangi kvartira sotib olmoqchimiz.", note: "Yil oldidan in." },
          { en: "Don't worry. Help is coming soon.", uz: "Xavotir olmang. Yordam tez orada keladi." },
        ] },
        { t: 'check', ex: { k: 'fill', q: 'I\'ll finish the homework ___ Friday. (juma kunigacha)', a: ['by'], why: "Oxirgi muddat — **by Friday**." } },
        { t: 'check', ex: { k: 'fill', q: 'The bus is coming ___ five minutes.', a: ['in'], why: "Hozirdan muddat — **in five minutes**." } },
      ],
    },
    {
      title: "Vaqt iborasi gapning qayerida?",
      blocks: [
        { t: 'p', md: "Vaqt iborasi odatda **gap oxirida** turadi. Uni **boshiga** ham qo'yish mumkin — shunda ortidan **vergul** qo'ying. Ma'no o'zgarmaydi. Uchala kelajak shakli (**going to**, **will**, **Present Continuous**) bilan ham shunday:" },
        { t: 'table', head: ['Shakl', 'Misol'], speak: [1], rows: [
          ['going to', "We're going to move in 2027."],
          ['will', "I'll call you later."],
          ['Present Continuous', "I'm seeing the dentist tomorrow morning."],
          ["Boshida (vergul bilan)", "Next week, we're going to start a new course."],
        ] },
        { t: 'tip', tone: 'info', md: "**Kelasi zamon iborasi kelajak shakli bilan keladi.** *tomorrow* + *I went* ❌ — o'tgan zamon emas. Xato: *I went to Samarkand next week.* To'g'ri: *I'm going to Samarkand next week.*" },
        { t: 'compare', good: { title: "To'g'ri", items: ["We're leaving the day after tomorrow.", 'Next month, I\'ll start work.'], }, bad: { title: "Xato", items: ["We left the day after tomorrow.", 'Next month, I started work.'] } },
        { t: 'check', ex: { k: 'order', uz: "Ertaga ertalab stomatologga boraman.", words: ["I'm", 'seeing', 'the', 'dentist', 'tomorrow', 'morning'], extra: ['in', 'saw'], alt: [['I', 'am', 'seeing', 'the', 'dentist', 'tomorrow', 'morning'], ['Tomorrow', 'morning', "I'm", 'seeing', 'the', 'dentist'], ['Tomorrow', 'morning', 'I', 'am', 'seeing', 'the', 'dentist']] } },
      ],
    },
    {
      title: "Dialog: kelasi hafta rejalari",
      blocks: [
        { t: 'dialog', lines: [
          { who: 'Dilnoza', en: "Are you free this evening, Jasur?", uz: "Jasur, bugun kechqurun bo'shmisan?" },
          { who: 'Jasur', en: "Sorry, I'm busy tonight. I'm meeting my cousin at seven.", uz: "Kechirasan, bugun kechqurun bandman. Soat yettida amakivachcham bilan uchrashaman." },
          { who: 'Dilnoza', en: "No problem. How about the day after tomorrow?", uz: "Hech gap emas. Indinga-chi?" },
          { who: 'Jasur', en: "Good idea! I'll call you later and we'll decide the place.", uz: "Yaxshi fikr! Keyinroq qo'ng'iroq qilaman va joyni kelishamiz." },
          { who: 'Dilnoza', en: "Great. I'm going to visit my aunt in a week, so I need to see you soon.", uz: "Zo'r. Bir haftadan keyin xolamnikiga boraman, shuning uchun siz bilan tez orada ko'rishishim kerak." },
        ] },
        { t: 'check', ex: { k: 'choice', q: 'When is Jasur meeting his cousin?', opts: ['Tonight at seven.', 'The day after tomorrow.', 'In a week.', 'Tomorrow morning.'], a: 0, why: "Dialog: *I'm busy tonight. I'm meeting my cousin at seven.*" } },
        { t: 'check', ex: { k: 'tf', q: "Dilnoza is going to visit her aunt in a week.", a: true, why: "Dialog: *I'm going to visit my aunt in a week.*" } },
      ],
    },
  ],
  words: [
    { en: 'soon', uz: 'tez orada', ipa: 'suːn', pos: 'adv', ex: 'I will see you soon.', exUz: "Sizni tez orada ko'raman." },
    { en: 'later', uz: 'keyinroq', ipa: 'ˈleɪ.tər', pos: 'adv', ex: 'I will call you later.', exUz: "Sizga keyinroq qo'ng'iroq qilaman." },
    { en: 'the day after tomorrow', uz: 'indinga', ipa: 'ðə deɪ ˈɑːf.tə təˈmɒr.əʊ', pos: 'phrase', ex: "We're leaving the day after tomorrow.", exUz: "Biz indinga jo'naymiz." },
    { en: 'by (a time)', uz: '… gacha (kech qolmasdan)', ipa: 'baɪ', pos: 'prep', ex: 'Please finish it by Friday.', exUz: "Iltimos, buni juma kunigacha tugating." },
    { en: 'in a week', uz: 'bir haftadan keyin', ipa: 'ɪn ə wiːk', pos: 'phrase', ex: 'My exam is in a week.', exUz: "Imtihonim bir haftadan keyin." },
  ],
  practice: [
    { k: 'match', pairs: [['tomorrow morning', 'ertaga ertalab'], ['next Friday', 'kelasi juma'], ['in two days', 'ikki kundan keyin'], ['the day after tomorrow', 'indinga'], ['this evening', 'bugun kechqurun']] },
    { k: 'choice', q: "I'm seeing the dentist ___.", opts: ['tomorrow morning', 'in tomorrow morning', 'at tomorrow morning', 'on next tomorrow'], a: 0, why: "**tomorrow** oldida predlog kerak emas." },
    { k: 'fill', q: "We're going to fly to Istanbul ___ two days.", a: ['in'], uz: "Ikki kundan keyin Istanbulga uchamiz.", why: "Hozirdan muddat — **in two days**." },
    { k: 'fill', q: 'The report must be ready ___ Friday.', a: ['by'], uz: "Hisobot juma kunigacha tayyor bo'lishi kerak.", why: "Oxirgi muddat — **by Friday**." },
    { k: 'order', uz: "Kelasi hafta Samarqandga boramiz.", words: ['We', 'are', 'going', 'to', 'visit', 'Samarkand', 'next', 'week'], extra: ['in', 'went'], alt: [["We're", 'going', 'to', 'visit', 'Samarkand', 'next', 'week'], ['Next', 'week', 'we', 'are', 'going', 'to', 'visit', 'Samarkand'], ['Next', 'week', "we're", 'going', 'to', 'visit', 'Samarkand']], why: "Vaqt iborasi oxirida yoki boshida (vergul bilan)." },
    { k: 'fix', wrong: "I'm going to call you in tomorrow.", a: ["I'm going to call you tomorrow.", 'I am going to call you tomorrow.'], why: "**tomorrow** oldida **in** yo'q." },
    { k: 'fix', wrong: 'We are going to visit our grandparents in next Sunday.', a: ['We are going to visit our grandparents next Sunday.', "We're going to visit our grandparents next Sunday."], why: "**next Sunday** oldida predlog kerak emas." },
    { k: 'listen', say: "I'll call you later.", opts: ["I'll call you later.", "I'll call you tomorrow.", "I called you later.", "I'll call you soon."], a: 0 },
    { k: 'dictation', say: "We're leaving the day after tomorrow.", a: ["We're leaving the day after tomorrow.", 'We are leaving the day after tomorrow.'], uz: "Biz indinga jo'naymiz." },
    { k: 'translate', uz: "Men sizga tez orada qo'ng'iroq qilaman.", a: ["I'll call you soon.", 'I will call you soon.', "I'll phone you soon.", 'I will phone you soon.', "I'm going to call you soon.", 'I am going to call you soon.'], why: "Qaror yoki va'da — **I'll call you soon**." },
    { k: 'tf', q: "*I'm going to start a new job in next month.* — to'g'ri gap.", a: false, why: "To'g'ri: *next month* (predlogsiz) yoki *in a month*." },
    { k: 'choice', q: "It is 2026 now. Which sentence is correct?", opts: ["I'm going to buy a car in 2027.", "I'm going to buy a car at 2027.", "I'm going to buy a car on 2027.", "I'm going to buy a car next 2027."], a: 0, why: "Yil oldidan **in**." },
    { k: 'choice', q: '*The film starts ___ ten minutes.* (hozirdan o\'n daqiqa keyin)', opts: ['in', 'by', 'on', 'at'], a: 0, why: "Muddat — **in ten minutes**." },
  ],
  quiz: [
    { k: 'choice', q: "\"Indinga ko'rishamiz.\"", opts: ["See you the day after tomorrow.", "See you in the day after tomorrow.", "See you at day after tomorrow.", "See you after tomorrow day."], a: 0, why: "**the day after tomorrow** — predlogsiz." },
    { k: 'fill', q: 'My exam is ___ a week.', a: ['in'], why: "Hozirdan bir hafta keyin — **in a week**." },
    { k: 'fill', q: "I'll send you the photos ___ Sunday. (yakshanbagacha)", a: ['by'], why: "Oxirgi muddat — **by**." },
    { k: 'order', uz: "Kelasi oy yangi ish boshlayman.", words: ["I'm", 'starting', 'a', 'new', 'job', 'next', 'month'], extra: ['in', 'started'], alt: [['I', 'am', 'starting', 'a', 'new', 'job', 'next', 'month'], ['Next', 'month', "I'm", 'starting', 'a', 'new', 'job'], ['Next', 'month', 'I', 'am', 'starting', 'a', 'new', 'job']] },
    { k: 'fix', wrong: 'I went to the market tomorrow.', a: ["I'm going to go to the market tomorrow.", 'I am going to go to the market tomorrow.', "I'm going to the market tomorrow.", 'I am going to the market tomorrow.', 'I will go to the market tomorrow.', "I'll go to the market tomorrow."], why: "**tomorrow** bilan kelajak shakli kerak." },
    { k: 'translate', uz: "Ertaga ertalab uchrashamiz.", a: ["We're meeting tomorrow morning.", 'We are meeting tomorrow morning.', "We're going to meet tomorrow morning.", 'We are going to meet tomorrow morning.', "We'll meet tomorrow morning.", 'We will meet tomorrow morning.'], why: "**tomorrow morning** — predlogsiz." },
    { k: 'tf', q: "*by Friday* — juma kunidan keyin degani.", a: false, why: "**by Friday** — juma kunigacha, kech bo'lmasdan." },
    { k: 'listen', say: 'My flight is in two days.', opts: ['My flight is in two days.', 'My flight was two days ago.', 'My flight is on Tuesday.', 'My flight is in two weeks.'], a: 0 },
  ],
  summary: [
    "**tomorrow, tonight, this evening, next week** oldida predlog yo'q. Hozirdan muddat uchun **in two days / in a week**, yil oldidan **in 2027**.",
    "**by Friday** — juma kunigacha (oxirgi muddat); **in** — shu muddatdan keyin.",
    "Vaqt iborasi odatda gap oxirida; boshida bo'lsa, vergul qo'yiladi. Kelajak shakllari: **going to, will, Present Continuous**.",
    "Yangi so'zlar: **soon, later, the day after tomorrow, by, in a week**.",
  ],
  homework: "Keyingi 5 kun uchun 5 ta reja yozing, har birida boshqa vaqt iborasi bo'lsin: *tomorrow morning, in two days, by Friday, next week, soon*. Ovoz chiqarib ayting.",
};

export default lesson;
