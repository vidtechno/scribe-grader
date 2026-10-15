import type { Lesson } from '../../../types';

// Mini lesson (review): the whole unit with new examples (conditionals, wish, deduction, past modals, advice).
const lesson: Lesson = {
  id: 'u20-l11',
  title: 'Possibilities: final review',
  titleUz: "Imkoniyatlar: yakuniy takror",
  mini: true,
  kind: 'review',
  goal: "Bosqichdagi barcha mavzularni takrorlaysiz: **conditionals, wish, must / might / can't, should have, should / ought to / had better** va ularni yangi gaplarda to'g'ri ishlatasiz.",
  slides: [
    {
      title: "Shart gaplar: qaysi biri?",
      blocks: [
        { t: 'p', md: "Uchta shart gapni bir jadvalda ko'ring. Tanlov **vaqtga va haqiqatga** bog'liq:" },
        { t: 'table', head: ['Tur', 'Qolip', 'Misol'], speak: [2], rows: [
          ['First (haqiqiy kelajak)', 'if + Present, will + fe\'l', "If it rains, we will stay at home."],
          ['Second (xayoliy hozirgi)', 'if + Past Simple, would + fe\'l', "If I had a boat, I would sail around the world."],
          ['Third (o\'tgan zamon)', 'if + had + V3, would have + V3', "If we had left earlier, we would have caught the train."],
        ] },
        { t: 'tip', tone: 'info', md: "**unless** = *if … not*: *Unless you hurry, you will be late.* **as long as / provided** = \"faqat shu shart bilan\": *You can borrow my car as long as you drive carefully.*" },
        { t: 'check', ex: { k: 'choice', q: "If she ___ harder, she would pass the exam. (hozirgi xayol)", opts: ['studied', 'studies', 'had studied', 'will study'], a: 0, why: "Second conditional: **if + Past Simple**." } },
        { t: 'check', ex: { k: 'fill', q: "___ you leave now, you'll miss the bus. (agar ... bo'lmasa)", a: ['Unless'], uz: "Hozir chiqmasangiz, avtobusdan qolasiz.", why: "**unless** = *if not*." } },
      ],
    },
    {
      title: "Wish, taxmin va o'tgan zamon modallari",
      blocks: [
        { t: 'table', head: ['Mavzu', 'Qoida', 'Misol'], speak: [2], rows: [
          ['wish (hozir)', 'wish + Past Simple / could', "I wish I lived closer to work."],
          ['wish (o\'tgan)', 'wish + had + V3', "I wish I had saved more money."],
          ['must / might / can\'t', 'ishonch darajasi', "He must be tired. She might be late. They can't be at home."],
          ['o\'tgan taxmin', 'modal + have + V3', "He must have missed the bus."],
          ['pushaymonlik / tanqid', 'should / shouldn\'t have + V3', "You should have asked for help."],
        ] },
        { t: 'compare',
          good: { title: "To'g'ri", items: ['I wish I could swim.', 'If I had known, I would have told you.', 'She must have forgotten.', "You shouldn't have shouted."] },
          bad: { title: 'Xato', items: ['I wish I can swim.', 'If I would have known, I would have told you.', 'She must forgot.', "You shouldn't shouted."] } },
        { t: 'check', ex: { k: 'choice', q: "The lights are off and nobody answers. They ___ be at home. (aniq emas, balki)", opts: ["might not", "must have", "should", "needn't"], a: 0, why: "Taxmin, ishonch kam → **might not**." } },
        { t: 'check', ex: { k: 'fix', wrong: 'I wish I would have studied law.', a: ['I wish I had studied law.'], why: "**wish** dan keyin **had + V3**." } },
      ],
    },
    {
      title: "Maslahat",
      blocks: [
        { t: 'table', head: ['Ibora', 'Kuchi', 'Misol'], speak: [2], rows: [
          ['should / ought to', "oddiy maslahat", "You should see a doctor. You ought to rest."],
          ['had better', "kuchli maslahat, ogohlantirish", "You'd better leave now, or you'll miss the train."],
          ["If I were you…", "yumshoq maslahat", "If I were you, I'd talk to her."],
        ] },
        { t: 'tip', tone: 'warn', md: "**had better** + fe'l (**to** yo'q): *You'd better go.* Inkor: *You'd better not go.* Bu o'tgan zamon emas, kelajak haqida ogohlantirish." },
        { t: 'check', ex: { k: 'choice', q: "Qaysi gap to'g'ri?", opts: ["You'd better take an umbrella.", "You'd better to take an umbrella.", "You had better took an umbrella.", "You better taking an umbrella."], a: 0, why: "**had better + fe'l (to siz)**." } },
      ],
    },
    {
      title: "Dialog: yakuniy takror",
      blocks: [
        { t: 'dialog', lines: [
          { who: 'Tom', en: "Sara, you look worried. Is something wrong?", uz: "Sara, tashvishli ko'rinasan. Nimadir bo'ldimi?" },
          { who: 'Sara', en: "I missed my train this morning. I wish I had got up earlier.", uz: "Bugun ertalab poyezddan qoldim. Kaskiydi, oldinroq turgan bo'lsam." },
          { who: 'Tom', en: "You should have set two alarms. If you leave now, you might still catch the next one.", uz: "Ikkita budilnik qo'yishing kerak edi. Hozir chiqsang, keyingisiga ulgurishing mumkin." },
          { who: 'Sara', en: "I can't go unless my manager agrees. He must be in a meeting.", uz: "Boshliq rozi bo'lmasa, ketolmayman. U majlisda bo'lsa kerak." },
          { who: 'Tom', en: "You'd better send him a message. If I were you, I'd explain the situation.", uz: "Unga xabar yozganing yaxshi. Sening o'rningda bo'lsam, vaziyatni tushuntirardim." },
        ] },
        { t: 'check', ex: { k: 'tf', q: "Sara caught her train.", a: false, why: "*I missed my train this morning.*" } },
        { t: 'check', ex: { k: 'choice', q: "What does Tom advise at the end?", opts: ['Send the manager a message.', 'Take a taxi.', 'Go home.', 'Wait for the manager.'], a: 0, why: "*You'd better send him a message.*" } },
      ],
    },
  ],
  words: [
    { en: 'imagine', uz: "tasavvur qilmoq", ipa: 'ɪˈmædʒ.ɪn', pos: 'verb', ex: "Imagine you won a prize.", exUz: "Tasavvur qiling, siz sovrin yutdingiz." },
    { en: 'chance', uz: "imkoniyat, ehtimol", ipa: 'tʃɑːns', pos: 'noun', ex: "There is a good chance of rain.", exUz: "Yomg'ir yog'ish ehtimoli katta." },
    { en: 'unlikely', uz: "ehtimoldan yiroq", ipa: 'ʌnˈlaɪk.li', pos: 'adj', ex: "It is unlikely that he will come.", exUz: "Uning kelishi ehtimoldan yiroq." },
    { en: 'otherwise', uz: "aks holda", ipa: 'ˈʌð.ə.waɪz', pos: 'adv', ex: "Hurry up, otherwise we'll be late.", exUz: "Tezroq bo'l, aks holda kechikamiz." },
    { en: 'suppose', uz: "faraz qilmoq, deb o'ylamoq", ipa: 'səˈpəʊz', pos: 'verb', ex: "I suppose you are right.", exUz: "Menimcha, haqsiz." },
  ],
  practice: [
    { k: 'match', pairs: [['imagine', 'tasavvur qilmoq'], ['chance', 'imkoniyat'], ['unlikely', 'ehtimoldan yiroq'], ['otherwise', 'aks holda'], ['suppose', 'faraz qilmoq']] },
    { k: 'choice', q: "If I ___ a million pounds, I would travel the world.", opts: ['had', 'have', 'will have', 'would have'], a: 0, why: "Second conditional: **if + Past Simple**." },
    { k: 'choice', q: "If we ___ the map, we wouldn't have got lost.", opts: ['had checked', 'checked', 'would check', 'have checked'], a: 0, why: "Third conditional: **if + had + V3**." },
    { k: 'choice', q: "He has won the lottery again. He ___ be very lucky!", opts: ['must', "can't", 'needn\'t', 'mustn\'t'], a: 0, why: "Aniq xulosa → **must**." },
    { k: 'fill', q: "You can use my laptop ___ long as you are careful.", a: ['as'], uz: "Ehtiyot bo'lsangiz, noutbukimdan foydalanishingiz mumkin.", why: "**as long as** — shart." },
    { k: 'fill', q: "I wish I ___ more time to read. (have)", a: ['had'], uz: "Kaskiydi, o'qishga vaqtim ko'proq bo'lsa.", why: "**wish + Past Simple**." },
    { k: 'fill', q: "You ___ have called me. I was worried. (kerak edi)", a: ['should'], uz: "Menga qo'ng'iroq qilishing kerak edi. Xavotirda edim.", why: "**should have + V3**." },
    { k: 'listen', say: "If I were you, I'd ask for advice.", opts: ["If I were you, I'd ask for advice.", "If I was you, I'd give advice.", "If I am you, I'll ask for advice.", "If I were him, I'd ask for advice."], a: 0 },
    { k: 'order', uz: "Tezroq ketganing yaxshi, aks holda kechikasan.", words: ["You'd", 'better', 'go,', 'otherwise', "you'll", 'be', 'late.'], extra: ['to', 'would'], why: "**had better + fe'l**." },
    { k: 'fix', wrong: "You'd better to see a doctor.", a: ["You'd better see a doctor.", 'You had better see a doctor.'], why: "**had better** dan keyin **to** yo'q." },
    { k: 'fix', wrong: 'If I would be rich, I would buy a house.', a: ['If I were rich, I would buy a house.', "If I were rich, I'd buy a house.", 'If I was rich, I would buy a house.', "If I was rich, I'd buy a house."], why: "**if** dan keyin **would** emas, Past Simple." },
    { k: 'translate', uz: "U kelmagan bo'lsa kerak.", a: ["He can't have come.", "She can't have come.", "He must not have come.", "She must not have come.", "He cannot have come.", "She cannot have come."], why: "O'tgan zamon taxmin: **can't have + V3**." },
    { k: 'tf', q: "*Unless you hurry, you will be late.* — Shoshilsangiz, kechikasiz.", a: false, why: "**unless** = *if not*: shoshilmasangiz, kechikasiz." },
    { k: 'dictation', say: 'If I had known, I would have told you.', a: ['If I had known, I would have told you.', "If I'd known, I would have told you.", "If I had known, I'd have told you.", "If I'd known, I'd have told you."], uz: "Bilganimda, senga aytgan bo'lardim." },
    { k: 'speak', say: 'I wish I had studied harder.', uz: "Kaskiydi, ko'proq o'qiganimda." },
    { k: 'speak', say: "If I were you, I'd talk to him.", uz: "Sening o'rningda bo'lsam, u bilan gaplashardim." },
  ],
  quiz: [
    { k: 'choice', q: "Which sentence is about an imaginary present situation?", opts: ['If I lived by the sea, I would swim every day.', 'If it rains, I will stay home.', 'If I had known, I would have come.', 'If you heat ice, it melts.'], a: 0, why: "**if + Past Simple, would** — xayoliy hozirgi." },
    { k: 'choice', q: "She ___ have taken the bus. Her car is still outside. (aniq emas, balki)", opts: ['might', "can't", 'should', 'needn\'t'], a: 0, why: "Taxmin, ishonch kam → **might have**." },
    { k: 'choice', q: "I ___ have worried. Everything was fine. (keraksiz edi, qildim)", opts: ["needn't", "mustn't", "shouldn't to", "can't"], a: 0, why: "**needn't have + V3** — keraksiz bo'lgan ish." },
    { k: 'fill', q: "If he ___ harder, he would have passed the test.", a: ['had worked', 'had studied', 'had tried', 'had practised', 'had practiced'], hint: 'had + V3', why: "Third conditional: **if + had + V3**." },
    { k: 'fill', q: "I wish I ___ so much last night. (eat, not)", a: ["hadn't eaten", 'had not eaten'], why: "**wish + hadn't + V3**." },
    { k: 'order', uz: "Agar yomg'ir yog'masa, biz piknik qilamiz.", words: ["If", 'it', "doesn't", 'rain,', 'we', 'will', 'have', 'a', 'picnic.'], extra: ['would', "didn't"], why: "First conditional: **if + Present, will**." },
    { k: 'translate', uz: "Kaskiydi, men sizga yordam bera olsam.", a: ['I wish I could help you.'], why: "**wish + could**." },
    { k: 'listen', say: 'You should have told me earlier.', opts: ['You should have told me earlier.', 'You should tell me earlier.', 'You could tell me earlier.', "You shouldn't have told me earlier."], a: 0 },
    { k: 'tf', q: "*I wish I would have gone.* — to'g'ri gap.", a: false, why: "To'g'ri: *I wish I had gone.*" },
  ],
  summary: [
    "**First:** if + Present, will. **Second:** if + Past Simple, would. **Third:** if + had + V3, would have + V3. **unless** = if not.",
    "**wish** + Past Simple / could (hozir), **wish + had + V3** (o'tgan). *I wish I would have* ❌.",
    "**must / might / can't** + fe'l (hozir), + **have + V3** (o'tgan); **should / shouldn't / could / needn't have + V3**.",
    "Maslahat: **should, ought to, had better (to siz), If I were you…**",
    "Yangi so'zlar: **imagine, chance, unlikely, otherwise, suppose**.",
  ],
  homework: "Bosqichning har bir mavzusidan bittadan gap yozing (first, second, third conditional, wish, must/might/can't, should have, had better). Jami 7 ta o'zingizning gapingiz.",
};

export default lesson;
