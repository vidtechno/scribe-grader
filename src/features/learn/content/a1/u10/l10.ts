import type { Lesson } from '../../../types';

// Mini lesson (situation): at the pharmacy and the doctor. Recycles headache, cough, sore throat, medicine, should, have to.
const lesson: Lesson = {
  id: 'u10-l10',
  title: 'At the pharmacy and the doctor',
  titleUz: 'Dorixona va shifokorda',
  mini: true,
  goal: "Dorixona va shifokorda **nima bezovta qilayotganini** aytasiz va maslahatni tushunasiz: *What's the matter? I've got a fever. You should rest. You shouldn't go to work.*",
  slides: [
    {
      title: 'Vaziyat: shifokor qabulida',
      blocks: [
        { t: 'p', md: "Shifokor **What's the matter?** deb so'raydi. Siz belgilarni aytasiz (**I've got…**), shifokor esa **should / shouldn't** bilan maslahat beradi." },
        { t: 'dialog', lines: [
          { who: 'Doctor', en: "Good morning. What's the matter?", uz: 'Xayrli tong. Nima bezovta qilyapti?' },
          { who: 'Patient', en: "I've got a headache and a sore throat. I've also got a fever.", uz: "Boshim og'riyapti, tomog'im og'riyapti. Haroratim ham bor." },
          { who: 'Doctor', en: 'Do you have a cough?', uz: "Yo'talingiz bormi?" },
          { who: 'Patient', en: 'Yes, a little cough.', uz: "Ha, ozgina yo'talaman." },
          { who: 'Doctor', en: 'You should stay at home and rest. You shouldn\'t go to work.', uz: "Uyda qolib dam olishingiz kerak. Ishga bormasligingiz kerak." },
          { who: 'Patient', en: 'Do I have to take medicine?', uz: 'Dori ichishim shartmi?' },
          { who: 'Doctor', en: 'Yes. Take one tablet three times a day. Get it at the pharmacy.', uz: "Ha. Kuniga uch marta bittadan tabletka iching. Uni dorixonadan oling." },
        ] },
        { t: 'check', ex: { k: 'choice', q: 'Doctor: "You ___ go to work."', opts: ["shouldn't", "don't should", 'not should', 'shouldn\'t to'], a: 0, why: "**shouldn't** + V1: *You shouldn't go.*" } },
      ],
    },
    {
      title: 'Dorixonada va shifokorda: iboralar',
      blocks: [
        { t: 'table', head: ['Inglizcha', "Qachon aytiladi"], speak: [0], rows: [
          ["What's the matter?", 'Shifokor/do\'st so\'raydi'],
          ["I've got a fever.", 'Belgini aytasiz'],
          ['I need something for a cough.', 'Dorixonada dori so\'raysiz'],
          ['You should drink water.', 'Maslahat'],
          ["You shouldn't eat cold food.", "Qilmaslik kerak bo'lgan ish"],
          ['How often do I take it?', 'Dorini qanchalik tez-tez ichishni so\'raysiz'],
        ] },
        { t: 'tip', tone: 'info', md: "**should** — maslahat (\"yaxshi bo'lardi\"), **have to** — majburiyat (\"shart\"). *You should rest.* (maslahat) / *I have to see a doctor.* (shart)." },
        { t: 'check', ex: { k: 'fill', q: 'You ___ drink hot tea. (maslahat)', a: ['should'], uz: "Issiq choy ichganingiz ma'qul.", why: "Maslahat uchun **should** + V1." } },
      ],
    },
    {
      title: "Ehtiyot bo'ling: tez-tez uchraydigan xatolar",
      blocks: [
        { t: 'compare', good: { title: "To'g'ri", items: ["I've got a headache.", 'She should rest.', "He doesn't have to go."], }, bad: { title: "Noto'g'ri", items: ['I have a headache pain.', 'She should to rest.', 'He should rests.'] } },
        { t: 'p', md: "Eslatma: **should** dan keyin fe'l oddiy shaklda, *to* va **-s** yo'q (he/she bilan ham). *I'm headache* demang — to'g'risi *I've got a headache.*" },
        { t: 'check', ex: { k: 'choice', q: "Dorixonada: \"Yo'talga biror narsa kerak.\"", opts: ['I need something for a cough.', 'I am cough.', 'I have cough pain.', 'My cough is need.'], a: 0, why: "**I need something for + kasallik** — dorixonada tabiiy ibora." } },
      ],
    },
  ],
  words: [
    { en: 'pharmacy', uz: 'dorixona', ipa: 'ˈfɑː.mə.si', pos: 'noun', ex: 'The pharmacy is near the station.', exUz: 'Dorixona vokzal yaqinida.' },
    { en: 'fever', uz: 'isitma, harorat', ipa: 'ˈfiː.vər', pos: 'noun', ex: 'I have a fever today.', exUz: 'Bugun haroratim bor.' },
    { en: 'tablet', uz: 'tabletka', ipa: 'ˈtæb.lət', pos: 'noun', ex: 'Take one tablet after lunch.', exUz: 'Tushlikdan keyin bitta tabletka iching.' },
    { en: 'rest', uz: 'dam olmoq', ipa: 'rest', pos: 'verb', ex: 'You should rest at home.', exUz: 'Uyda dam olishingiz kerak.' },
  ],
  practice: [
    { k: 'choice', q: "Doctor: \"What's the ___?\"", opts: ['matter', 'problem is', 'wrong is', 'sick'], a: 0, why: "**What's the matter?** — tayyor ibora." },
    { k: 'fill', q: 'You ___ stay in bed. (maslahat)', a: ['should'], uz: "Yotib dam olganingiz ma'qul.", why: "Maslahat: **should** + V1." },
    { k: 'order', uz: "Siz ishga bormasligingiz kerak.", words: ['You', "shouldn't", 'go', 'to', 'work'], extra: ["don't", 'goes'] },
    { k: 'translate', uz: "Menda isitma bor.", a: ["I've got a fever.", 'I have a fever.', 'I have got a fever.'], why: "**I've got / I have** + kasallik." },
    { k: 'match', pairs: [['pharmacy', 'dorixona'], ['fever', 'isitma'], ['tablet', 'tabletka'], ['rest', 'dam olmoq'], ['cough', "yo'tal"]] },
    { k: 'tf', q: "*She should to rest.* — gap to'g'ri.", a: false, why: "**should** dan keyin *to* yo'q: *She should rest.*" },
    { k: 'listen', say: "What's the matter?", opts: ["What's the matter?", "What's your name?", "Where's the doctor?", "What's the time?"], a: 0 },
    { k: 'dictation', say: "I've got a sore throat.", a: ["I've got a sore throat.", 'I have got a sore throat.', 'I have a sore throat.'] },
    { k: 'fix', wrong: 'He should takes medicine.', a: ['He should take medicine.', 'He should take the medicine.'], why: "**should** dan keyin fe'l oddiy shaklda." },
    { k: 'fill', q: 'I ___ to see a doctor. It is important. (have to)', a: ['have'], uz: "Shifokorga borishim shart.", why: "**I** bilan — **have to**." },
    { k: 'speak', say: 'I need something for a cough.', uz: "Menga yo'talga biror narsa kerak." },
  ],
  quiz: [
    { k: 'choice', q: 'You have a fever. You ___ rest.', opts: ['should', 'shouldn\'t', 'doesn\'t', 'are'], a: 0 },
    { k: 'fill', q: 'You ___ drink cold water. (qilmaslik kerak)', a: ["shouldn't", 'should not'], why: "Qilmaslik kerak — **shouldn't**." },
    { k: 'order', uz: "Dorixona qayerda?", words: ['Where', 'is', 'the', 'pharmacy'], extra: ['are', 'a'] },
    { k: 'translate', uz: "Boshim og'riyapti.", a: ["I've got a headache.", 'I have a headache.', 'I have got a headache.'] },
    { k: 'tf', q: "*You should rest.* — bu maslahat.", a: true },
    { k: 'fix', wrong: 'I am a sore throat.', a: ["I've got a sore throat.", 'I have a sore throat.', 'I have got a sore throat.'], why: "Kasallik bilan **I've got / I have**." },
    { k: 'match', pairs: [['headache', "bosh og'rig'i"], ['cough', "yo'tal"], ['medicine', 'dori'], ['doctor', 'shifokor']] },
    { k: 'choice', q: 'Do you have to take medicine? — Yes, I ...', opts: ['do', 'should', 'am', 'have'], a: 0 },
  ],
  summary: [
    "Shifokor: **What's the matter?** — javob: **I've got a headache / a fever / a cough.**",
    "Maslahat: **should + V1**, qilmaslik: **shouldn't + V1** (to va -s yo'q).",
    "Majburiyat: **have to** — *I have to see a doctor.*",
    "Yangi so'zlar: **pharmacy, fever, tablet, rest**.",
  ],
  homework: "Do'stingizga kasal bo'lgandek 3 ta maslahat bering: *You should…, You shouldn't…*",
};

export default lesson;
