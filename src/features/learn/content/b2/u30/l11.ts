import type { Lesson } from '../../../types';

// Mini lesson (review): mini final review for the level exam. Mixed grammar (tenses, conditionals, passive, emphasis, comparison, relative clauses, ellipsis, questions), vocabulary, reading, listening, writing.
const lesson: Lesson = {
  id: 'u30-l11',
  title: 'Upper-Intermediate: final review',
  titleUz: 'Upper-Intermediate: yakuniy takror',
  mini: true,
  kind: 'review',
  goal: "Butun B2 bosqichini **imtihondan oldin** qisqa takrorlaysiz: **zamonlar, shart gaplar, majhul nisbat, ta'kid, solishtirish, nisbiy gaplar, ellipsis, savol shakllari** va mashq uchun o'qish, tinglash, yozish strategiyasi.",
  slides: [
    {
      title: "Zamonlar, shart gaplar va majhul nisbat",
      blocks: [
        { t: 'p', md: "Imtihonda eng ko'p xato qilinadigan joylar shular. Har bir qatorda **qoida + signal so'z** bor:" },
        { t: 'table', head: ['Mavzu', 'Qoida', 'Misol'], speak: [2], rows: [
          ['Present Perfect Continuous', 'davom etgan jarayon', 'I have been learning English for three years.'],
          ['Past Perfect', "o'tmishdagi ikki ish: oldingisi", 'When we arrived, the film had already started.'],
          ['3-shart', "o'tmishdagi tasavvur", 'If I had known, I would have called you.'],
          ['Aralash shart', "o'tmish sababi, hozirgi natija", 'If I had studied medicine, I would be a doctor now.'],
          ['wish / if only', "afsus", 'I wish I had more time. If only I had listened!'],
          ['Majhul nisbat (xabar)', 'It is said / believed that…', 'The bridge is said to be the oldest in the city.'],
        ] },
        { t: 'tip', tone: 'warn', md: "Tipik xatolar: *If I would know* → **If I knew**; *I am knowing* → **I know** (holat fe'li); *She said me* → **She told me / said to me**; majhul nisbatda *be* ni unutish: *The report written* → **The report was written**." },
        { t: 'check', ex: { k: 'choice', q: "If she ___ harder last year, she would have passed the exam.", opts: ['had studied', 'studied', 'would study', 'has studied'], a: 0, why: "3-shart: **if + Past Perfect, would have + V3**." } },
        { t: 'check', ex: { k: 'fix', wrong: "If I would have more time, I would travel more.", a: ["If I had more time, I would travel more."], why: "If-qismida **would** bo'lmaydi: *If I had…*" } },
      ],
    },
    {
      title: "Ta'kid, solishtirish va rasmiy uslub",
      blocks: [
        { t: 'examples', items: [
          { en: "What I need is a quiet place to study.", uz: "Menga kerak bo'lgani — o'qish uchun tinch joy.", note: "**What + gap + is** — ta'kid (cleft)." },
          { en: "Never have I seen such a beautiful view.", uz: "Hech qachon bunday go'zal manzarani ko'rmaganman.", note: "**Never + yordamchi fe'l + ega** — inversiya, rasmiy." },
          { en: "The more you practise, the more confident you become.", uz: "Qancha ko'p mashq qilsangiz, shuncha ishonchli bo'lasiz.", note: "**the more …, the more …**" },
          { en: "Her English is nowhere near as fluent as her brother's.", uz: "Uning inglizchasi akasinikidek ravon emas.", note: "**not nearly / nowhere near as … as**." },
          { en: "We regret to inform you that the flight has been cancelled.", uz: "Afsuski, reys bekor qilinganini ma'lum qilamiz.", note: "Rasmiy uslub: *regret to inform*." },
        ] },
        { t: 'tip', tone: 'info', md: "**Rasmiy / norasmiy:** *I'm writing to ask about…* (norasmiy) → *I am writing to enquire about…* (rasmiy). Rasmiy xatda qisqartma (*don't, I'm*) kam ishlatiladi; so'zlashuvda esa tabiiy." },
        { t: 'check', ex: { k: 'fill', q: "The harder you work, the ___ you will get.", a: ['better'], uz: "Qancha qattiq ishlasangiz, shuncha yaxshi natija olasiz.", why: "**the + qiyosiy daraja, the + qiyosiy daraja**: *the better*." } },
        { t: 'check', ex: { k: 'choice', q: "Which sentence uses inversion correctly?", opts: ["Rarely do we see such talent.", "Rarely we see such talent.", "Rarely we do see such talent.", "Rarely see we such talent."], a: 0, why: "Inversiya: **Rarely + do + ega + fe'l**." } },
      ],
    },
    {
      title: "Bu bosqichning yangi mavzulari",
      blocks: [
        { t: 'table', head: ['Mavzu', 'Misol'], speak: [1], rows: [
          ['Ellipsis', "A: I love hiking. B: So do I. / Neither can I."],
          ['Nisbiy gap', "My cousin, whose house we visited, is a guide."],
          ['Qisqargan nisbiy', "The man standing at the door is my uncle."],
          ['Nutq belgisi', "To be honest, I'd rather stay at home."],
          ['Indirect savol', "Could you tell me where the museum is?"],
          ['Idioma', "It was a piece of cake. / Once in a blue moon."],
          ['Collocation', "make a decision, do research, heavy rain"],
        ] },
        { t: 'compare',
          good: { title: "To'g'ri", items: ["So do I.", "The girl whose bag was stolen is here.", "Do you know where she lives?"], },
          bad: { title: 'Xato', items: ["So I do.", "The girl who her bag was stolen is here.", "Do you know where does she live?"] } },
        { t: 'check', ex: { k: 'choice', q: "'I can't swim.' — 'Neither ___ I.'", opts: ['can', 'do', 'am', 'will'], a: 0, why: "**Neither + yordamchi fe'l (can) + ega**." } },
        { t: 'check', ex: { k: 'fix', wrong: "Could you tell me where is the station?", a: ["Could you tell me where the station is?"], why: "Indirect savol: darak tartibi." } },
      ],
    },
    {
      title: "O'qing, tinglang va yozing",
      blocks: [
        { t: 'text', title: 'Getting ready for the exam', voice: 'george', en: "Preparing for an exam is not only about knowing grammar rules. What matters most is the accuracy of your answers and your fluency when you speak. Over the past months, you have learnt to consolidate your knowledge by revising a little every day. You can now notice the nuance between similar words, such as 'say' and 'tell', and you are becoming proficient at using a wide range of structures. Before the exam, plan your time carefully. In the reading test, read the questions first. In the listening test, underline key words. In the writing test, make a short plan and check your work at the end. In the speaking test, do not worry about small mistakes: keep going, use linking words and let your ideas flow. The more calm you stay, the better you will perform.", uz: "Imtihonga tayyorlanish faqat grammatika qoidalarini bilish emas. Eng muhimi — javoblaringizning aniqligi va gapirishdagi ravonligingiz. O'tgan oylarda har kuni oz-ozdan takrorlab, bilimingizni mustahkamlashni o'rgandingiz. Endi 'say' va 'tell' kabi o'xshash so'zlar orasidagi nozik farqni sezasiz va keng qamrovli tuzilmalarni mohirlik bilan ishlata boshlayapsiz. Imtihondan oldin vaqtingizni diqqat bilan rejalashtiring. O'qish testida avval savollarni o'qing. Tinglash testida kalit so'zlarning tagiga chizing. Yozish testida qisqa reja tuzing va oxirida ishingizni tekshiring. Gapirish testida kichik xatolardan tashvishlanmang: davom eting, bog'lovchilardan foydalaning va fikrlaringiz oqib tursin. Qancha xotirjam bo'lsangiz, shuncha yaxshi natija ko'rsatasiz." },
        { t: 'check', ex: { k: 'tf', q: "The text advises you to read the questions first in the reading test.", a: true, why: "*In the reading test, read the questions first.*" } },
        { t: 'dialog', lines: [
          { who: 'Nina', en: "Timur, I have been revising for two weeks, but I still feel nervous. Do you know what I should do?", uz: "Timur, ikki haftadan beri takrorlayapman, lekin hali ham hayajondaman. Nima qilishim kerakligini bilasanmi?" },
          { who: 'Timur', en: "To be honest, I think you are more prepared than you realise. Haven't you passed all the practice tests?", uz: "Rostini aytsam, o'zing o'ylagandan ko'ra tayyorsan. Barcha mashq testlaridan o'tmadingmi?" },
          { who: 'Nina', en: "I have, but I made a few mistakes in the writing part.", uz: "O'tdim, lekin yozish qismida bir nechta xato qildim." },
          { who: 'Timur', en: "If I were you, I would check the plan and the linking words. That is what helped me.", uz: "Sening o'rningda bo'lsam, reja va bog'lovchilarni tekshirardim. Menga shu yordam bergan." },
          { who: 'Nina', en: "Thanks. I wish I had started earlier, but it is not too late.", uz: "Rahmat. Qaniydi ertaroq boshlaganimda, lekin hali kech emas." },
        ] },
        { t: 'check', ex: { k: 'choice', q: "What does Timur advise Nina to do?", opts: ["Check the plan and the linking words.", "Skip the writing test.", "Revise for another year.", "Stop practising."], a: 0, why: "*I would check the plan and the linking words.*" } },
      ],
    },
  ],
  words: [
    { en: 'consolidate', uz: "mustahkamlamoq, birlashtirib mustahkamlamoq", ipa: 'kənˈsɒl.ɪ.deɪt', pos: 'verb', ex: 'Regular revision helps you consolidate new vocabulary.', exUz: "Muntazam takrorlash yangi so'zlarni mustahkamlashga yordam beradi." },
    { en: 'accuracy', uz: "aniqlik, to'g'rilik", ipa: 'ˈæk.jər.ə.si', pos: 'noun', ex: 'In writing, accuracy matters as much as speed.', exUz: "Yozishda aniqlik tezlik kabi muhim." },
    { en: 'nuance', uz: "nozik farq, ma'no ottenkasi", ipa: 'ˈnjuː.ɑːns', pos: 'noun', ex: 'There is a small nuance between "glad" and "delighted".', exUz: "'Glad' va 'delighted' orasida kichik ma'no farqi bor." },
    { en: 'proficient', uz: "mohir, yetarlicha malakali", ipa: 'prəˈfɪʃ.ənt', pos: 'adj', ex: 'She is proficient in three languages.', exUz: "U uch tilda yaxshi biladi." },
    { en: 'fluency', uz: "ravonlik (nutqda)", ipa: 'ˈfluː.ən.si', pos: 'noun', ex: 'Fluency comes with a lot of speaking practice.', exUz: "Ravonlik ko'p gapirish mashqidan keladi." },
  ],
  practice: [
    { k: 'match', pairs: [['consolidate', 'mustahkamlamoq'], ['accuracy', "aniqlik"], ['nuance', "nozik ma'no farqi"], ['proficient', 'mohir'], ['fluency', 'nutq ravonligi']] },
    { k: 'choice', q: "If I ___ the answer, I would tell you.", opts: ['knew', 'would know', 'had known', 'know'], a: 0, why: "2-shart (hozirgi tasavvur): **if + Past Simple, would + V1**." },
    { k: 'fill', q: "By the time we got to the station, the train ___ already left. (leave)", a: ['had'], uz: "Biz bekatga yetib kelganimizda poyezd allaqachon ketgan edi.", why: "Past Perfect: **had left**." },
    { k: 'fix', wrong: "She said me that she was tired.", a: ["She told me that she was tired.", "She said that she was tired.", "She said to me that she was tired."], why: "**tell somebody** yoki **say (to somebody)**: *said me* xato." },
    { k: 'order', uz: "Qancha ko'p mashq qilsangiz, shuncha yaxshi gapirasiz.", words: ['The', 'more', 'you', 'practise,', 'the', 'better', 'you', 'speak.'], extra: ['most', 'good'], alt: [['The', 'more', 'you', 'practice,', 'the', 'better', 'you', 'speak.']], why: "**the + qiyosiy, the + qiyosiy**." },
    { k: 'listen', say: 'Never have I seen such a beautiful view.', opts: ['Never have I seen such a beautiful view.', 'Never I have seen such a beautiful view.', 'Never did I see such a beautiful view.', 'I have never seen such beautiful view.'], a: 0 },
    { k: 'choice', q: "'I love hiking.' — 'So ___ I.'", opts: ['do', 'am', 'have', 'can'], a: 0, why: "*love* — Present Simple → **So do I.**" },
    { k: 'fix', wrong: "The woman who her car was stolen called the police.", a: ["The woman whose car was stolen called the police."], why: "Egalik: **whose car**." },
    { k: 'tf', q: "*Fluency* is about speaking smoothly; *accuracy* is about using correct language.", a: true, why: "Imtihonda ikkalasi ham baholanadi." },
    { k: 'translate', uz: "Qaniydi, vaqtida kelganimda.", a: ["I wish I had arrived on time.", "I wish I had come on time.", "I wish I had been on time.", "I wish I'd arrived on time.", "I wish I'd come on time.", "I wish I'd been on time."], why: "O'tmishdagi afsus: **wish + Past Perfect**." },
    { k: 'choice', q: "Which question is correct?", opts: ["Do you know when the exam starts?", "Do you know when does the exam start?", "Do you know when starts the exam?", "Do you know when the exam does start?"], a: 0, why: "Indirect savol: darak tartibi." },
    { k: 'fill', q: "It is said ___ the castle is five hundred years old.", a: ['that'], why: "Majhul nisbat: **It is said that…**" },
    { k: 'dictation', say: 'If I had studied harder, I would have passed the exam.', a: ['If I had studied harder, I would have passed the exam.'], uz: "Agar qattiqroq o'qiganimda, imtihondan o'tgan bo'lardim." },
    { k: 'speak', say: 'To be honest, I think you are more prepared than you realise.', uz: "Rostini aytsam, o'zing o'ylagandan ko'ra tayyorsan." },
  ],
  quiz: [
    { k: 'choice', q: "'I have been waiting for an hour.' — which tense is used?", opts: ['Present Perfect Continuous', 'Past Perfect', 'Present Simple', 'Past Continuous'], a: 0, why: "**have been + -ing** — Present Perfect Continuous." },
    { k: 'fix', wrong: "If I would be you, I would accept the offer.", a: ["If I were you, I would accept the offer.", "If I was you, I would accept the offer."], why: "If-qismida **would** bo'lmaydi: *If I were you*." },
    { k: 'choice', q: "'I can't dance.' — 'Neither ___ I.'", opts: ['can', 'do', 'am', 'have'], a: 0, why: "**Neither + can + I**." },
    { k: 'fill', q: "Rarely ___ she make a mistake in her reports.", a: ['does'], uz: "U hisobotlarida kamdan-kam xato qiladi.", why: "Inversiya: **Rarely does she make…**" },
    { k: 'order', uz: "Bu yerdan vokzal qayerdaligini ayta olasizmi?", words: ['Could', 'you', 'tell', 'me', 'where', 'the', 'station', 'is?'], extra: ['does', 'is the'], why: "Indirect savol: darak tartibi." },
    { k: 'tf', q: "'To be honest' is a discourse marker we use to introduce a frank opinion.", a: true, why: "**To be honest** — ochiq fikr bildirish belgisi." },
    { k: 'choice', q: "Which is the most formal way to begin an enquiry?", opts: ["I am writing to enquire about the course.", "I wanna ask about the course.", "Hey, tell me about the course.", "What's up with the course?"], a: 0, why: "**I am writing to enquire about…** — rasmiy xat." },
    { k: 'listen', say: 'The man standing at the door is my uncle.', opts: ['The man standing at the door is my uncle.', 'The man stood at the door is my uncle.', 'The man standing at the door was my uncle.', 'The men standing at the door are my uncle.'], a: 0 },
  ],
  summary: [
    "**Zamonlar va shartlar**: *have been doing, had done*, **3-shart** (*if + had done, would have done*), **aralash shart**, *wish + Past Perfect*.",
    "**Ta'kid va solishtirish**: *What I need is…*, *Never have I…*, *the more…, the more…*.",
    "Bu bosqich: **so do I / neither can I**, **whose / qisqargan nisbiy gap**, **to be honest**, **Could you tell me where…?**, idioma va collocation.",
    "Imtihonda: reja tuzing, kalit so'zlarni belgilang, oxirida tekshiring; gapirishda **fluency** va **accuracy** ikkalasi muhim.",
    "Yangi so'zlar: **consolidate, accuracy, nuance, proficient, fluency**.",
  ],
  homework: "O'zingizni sinab ko'ring: bu bosqichdagi 8 ta mavzuning har biridan bittadan gap yozing (zamon, shart, majhul nisbat, ta'kid, solishtirish, nisbiy gap, ellipsis, indirect savol). Keyin eng ko'p xato qilgan 2 ta mavzuni belgilab, bir hafta ichida qayta takrorlang.",
};

export default lesson;
