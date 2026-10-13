import type { Lesson } from '../../../types';

// Mini lesson (grammar): saying and writing dates. Builds on l5 (ordinals, dates, on/in) without repeating the theory.
const lesson: Lesson = {
  id: 'u6-l12',
  title: 'Saying and writing dates',
  titleUz: 'Sanalarni aytish va yozish: the 5th of May',
  mini: true,
  kind: 'grammar',
  goal: "Sanani **yozma** (*5 May, 5th May, May 5th*) va **og'zaki** (*the fifth of May*) to'g'ri ifodalaysiz, yilni aytasiz va Britaniya hamda Amerika yozuvini adashtirmaysiz.",
  slides: [
    {
      title: "Yozilishi boshqa, aytilishi boshqa",
      blocks: [
        { t: 'p', md: "Sana yozilganda ko'pincha **the** va **of** tushib qoladi, lekin gapirganda ikkalasi ham kerak. Yozuvda qisqa, og'zaki nutqda to'liq shakl ishlatiladi." },
        { t: 'table', head: ['Yozilishi', "Aytilishi", 'Qayerda'], speak: [1], rows: [
          ['5 May', 'the fifth of May', 'Britaniya'],
          ['5th May', 'the fifth of May', 'Britaniya'],
          ['May 5th', 'May fifth', 'Amerika'],
          ['May 5', 'May fifth', 'Amerika'],
        ] },
        { t: 'tip', tone: 'warn', md: "Raqamli yozuvda ehtiyot bo'ling: **03/04/2026** Britaniyada **3-aprel**, Amerikada esa **4-mart**. Muhim hujjatda oyni so'z bilan yozing: *3 April 2026*." },
        { t: 'check', ex: { k: 'choice', q: "*the twenty-first of June* — qaysi yozuv to'g'ri?", opts: ['21 June', 'June 12', '2 June', '21st of June of'], a: 0, why: "**the twenty-first of June** = **21 June** (yoki 21st June)." } },
      ],
    },
    {
      title: "Sana va yil birga",
      blocks: [
        { t: 'p', md: "To'liq sana: **kun + oy + yil**. Yilni oldin ikkitadan o'qing. Yildan oldin **vergul** ovozda to'xtash beradi." },
        { t: 'examples', items: [
          { en: 'The first of September, nineteen ninety-one.', uz: "1991-yil 1-sentabr.", note: "Yil: 19 + 91." },
          { en: 'My exam is on the fourth of June.', uz: "Imtihonim 4-iyunda." },
          { en: 'The deadline is Friday, the twelfth of December.', uz: "Oxirgi muddat — juma, 12-dekabr.", note: "Hafta kuni + vergul + sana." },
          { en: 'My date of birth is the ninth of March, two thousand and eight.', uz: "Tug'ilgan sanam — 2008-yil 9-mart." },
        ] },
        { t: 'compare', good: { title: "To'g'ri", items: ['on the fifth of May', 'in May', 'in 2026'], }, bad: { title: "Noto'g'ri", items: ['in the fifth of May', 'on May month', 'on 2026'] } },
        { t: 'check', ex: { k: 'fill', q: 'The exam is ___ the fourth of June.', a: ['on'], why: "Aniq sana oldidan **on**; oy va yil oldidan **in**." } },
        { t: 'check', ex: { k: 'fill', q: 'My sister was born ___ 2010.', a: ['in'], why: "Yil oldidan **in**: *in 2010*." } },
      ],
    },
    {
      title: "Dialog: reja tuzamiz",
      blocks: [
        { t: 'dialog', lines: [
          { who: 'Madina', en: "What's the date of the exam?", uz: "Imtihon qaysi sanada?" },
          { who: 'Jasur', en: "It's on the fourth of June. The schedule is on the board.", uz: "4-iyunda. Jadval doskada." },
          { who: 'Madina', en: "And the deadline for the homework?", uz: "Uy vazifasining oxirgi muddati-chi?" },
          { who: 'Jasur', en: "It's the thirtieth of May.", uz: "30-may." },
          { who: 'Madina', en: "Thanks! And what's the date of your party?", uz: "Rahmat! Sening ziyofating qaysi sanada?" },
          { who: 'Jasur', en: "It's on the seventh of June. Here's the invitation!", uz: "7-iyunda. Mana taklifnoma!" },
        ] },
        { t: 'tip', tone: 'good', md: "Sanani so'rash: **What's the date?** — bugungi sana. **What's the date of the exam?** — voqea sanasi. Javob: **It's (on) the fourth of June.**" },
        { t: 'check', ex: { k: 'choice', q: "Jasurning ziyofati qachon?", opts: ['On the seventh of June.', 'On the fourth of June.', 'On the thirtieth of May.', 'In June the seventh.'], a: 0, why: "Dialog: *It's on the seventh of June.*" } },
      ],
    },
  ],
  words: [
    { en: 'deadline', uz: 'oxirgi muddat', ipa: 'ˈded.laɪn', pos: 'noun', ex: 'The deadline is the thirtieth of May.', exUz: "Oxirgi muddat — 30-may." },
    { en: 'exam', uz: 'imtihon', ipa: 'ɪɡˈzæm', pos: 'noun', ex: 'My English exam is on the fourth of June.', exUz: "Ingliz tili imtihonim 4-iyunda." },
    { en: 'invitation', uz: 'taklifnoma', ipa: 'ˌɪn.vɪˈteɪ.ʃən', pos: 'noun', ex: 'I have an invitation to a party.', exUz: "Menda ziyofatga taklifnoma bor." },
    { en: 'schedule', uz: 'jadval, reja', ipa: 'ˈʃed.juːl', pos: 'noun', ex: 'The schedule is on the board.', exUz: "Jadval doskada." },
    { en: 'leap year', uz: 'kabisa yili', ipa: 'ˈliːp jɪə', pos: 'noun', ex: 'February has twenty-nine days in a leap year.', exUz: "Kabisa yilida fevral 29 kun bo'ladi." },
    { en: 'date of birth', uz: "tug'ilgan sana", ipa: 'ˌdeɪt əv ˈbɜːθ', pos: 'noun', ex: 'Write your date of birth here.', exUz: "Tug'ilgan sanangizni shu yerga yozing." },
  ],
  practice: [
    { k: 'choice', q: 'How do you say *3 June*?', opts: ['the third of June', 'the three of June', 'the thirty of June', 'third June of'], a: 0, why: "Sanada tartib son: **the third of June**." },
    { k: 'fill', q: 'Her birthday is ___ the ninth of November.', a: ['on'], uz: "Uning tug'ilgan kuni 9-noyabrda.", why: "Aniq sana — **on**." },
    { k: 'order', uz: "Mening tug'ilgan kunim 12-iyulda.", words: ['My', 'birthday', 'is', 'on', 'the', 'twelfth', 'of', 'July'], extra: ['twelve', 'in'] },
    { k: 'match', pairs: [['1st January', 'the first of January'], ['2 March', 'the second of March'], ['23 April', 'the twenty-third of April'], ['31 May', 'the thirty-first of May']] },
    { k: 'tf', q: "Britaniyada *05/06/2026* — bu **5-iyun**.", a: true, why: "Britaniyada avval **kun**, keyin **oy**." },
    { k: 'listen', say: 'the twenty-second of August', opts: ['the twelfth of August', 'the twentieth of August', 'the twenty-second of August', 'the second of August'], a: 2 },
    { k: 'dictation', say: 'The exam is on the fourth of June.', a: ['The exam is on the fourth of June.', 'The exam is on the 4th of June.', 'The exam is on June the fourth.'] },
    { k: 'fix', wrong: 'The deadline is on the fifteen of May.', a: ['The deadline is on the fifteenth of May.'], why: "Sanada **tartib son**: *fifteenth*." },
    { k: 'translate', uz: "Mening tug'ilgan kunim 3-martda.", a: ['My birthday is on the third of March.', 'My birthday is on March the third.', 'My birthday is on 3 March.', 'My birthday is on the 3rd of March.', 'My birthday is on March 3rd.', 'My birthday is on 3rd March.', 'My birthday is on March third.'], why: "**on the third of March** yoki **on March the third**." },
    { k: 'choice', q: 'We have an exam ___ June.', opts: ['in', 'on', 'at', 'of'], a: 0, why: "Oy oldidan **in**." },
    { k: 'speak', say: 'My birthday is on the fifth of May.', uz: "Mening tug'ilgan kunim 5-mayda." },
    { k: 'speak', say: "What's the date of the exam?", uz: 'Imtihon qaysi sanada?' },
  ],
  quiz: [
    { k: 'choice', q: 'How do you say *1999*?', opts: ['nineteen ninety-nine', 'one thousand nine ninety-nine', 'ninety-nine nineteen', 'nineteen and ninety nine'], a: 0, why: "Yil ikkitadan: **nineteen ninety-nine**." },
    { k: 'fill', q: 'The party is ___ the seventh of June.', a: ['on'], why: "Aniq sana — **on**." },
    { k: 'order', uz: 'Oxirgi muddat 30-may.', words: ['The', 'deadline', 'is', 'the', 'thirtieth', 'of', 'May'], extra: ['thirty', 'in'] },
    { k: 'translate', uz: 'Bugun nechanchi sana?', a: ["What's the date today?", 'What is the date today?', "What's the date?", 'What is the date?'] },
    { k: 'tf', q: "*the fifth of May* — Britaniyada **5 May** sanasining aytilishi.", a: true, why: "Britaniya: **5 May** = *the fifth of May*; Amerika: **May 5** = *May fifth*." },
    { k: 'fix', wrong: 'My exam is in the fourth of June.', a: ['My exam is on the fourth of June.'], why: "Aniq sana oldidan **on**." },
    { k: 'match', pairs: [['deadline', 'oxirgi muddat'], ['exam', 'imtihon'], ['schedule', 'jadval, reja'], ['invitation', 'taklifnoma']] },
    { k: 'listen', say: 'the thirty-first of December', opts: ['the thirteenth of December', 'the thirtieth of December', 'the thirty-first of December', 'the first of December'], a: 2 },
  ],
  summary: [
    "Yozuv: **5 May / 5th May** (Britaniya), **May 5th** (Amerika). Aytilishi: **the fifth of May**.",
    "Sanada **tartib son** ishlating, aniq sana oldidan **on**, oy va yil oldidan **in**.",
    "**03/04** Britaniyada 3-aprel, Amerikada 4-mart. Oyni so'z bilan yozish xavfsizroq.",
    "Yangi so'zlar: **deadline, exam, invitation, schedule, leap year, date of birth**.",
  ],
  homework: "O'zingizning 5 ta muhim sanangizni (tug'ilgan kun, imtihon, bayram…) inglizcha yozing va ovoz chiqarib ayting: *It's on the … of …*.",
};

export default lesson;
