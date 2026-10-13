import type { Lesson } from '../../../types';

// Mini lesson (grammar): tickets, times and prices. Questions How much is/are...? What time does...? Which platform...?
const lesson: Lesson = {
  id: 'u10-l13',
  title: 'Tickets, times and prices',
  titleUz: 'Chipta, vaqt va narx: single, return, platform',
  mini: true,
  kind: 'grammar',
  goal: "Vokzalda **chipta, vaqt va narx** haqida so'raysiz va javobni tushunasiz: *How much is a return ticket? What time does the train leave? Which platform? It's delayed.*",
  slides: [
    {
      title: 'Narx, vaqt, platforma: uchta savol',
      blocks: [
        { t: 'p', md: "Vokzal kassasida deyarli har doim shu uchta savol kerak bo'ladi. Savol so'zi + **is/are** (narx) yoki **does** (vaqt):" },
        { t: 'table', head: ['Savol', 'Javob'], speak: [0], rows: [
          ['How much is a single ticket?', "It's fifty thousand sum."],
          ['How much are two return tickets?', "They're two hundred thousand sum."],
          ['What time does the train leave?', 'It leaves at ten past nine.'],
          ['What time does it arrive?', 'It arrives at half past twelve.'],
          ['Which platform does it leave from?', 'Platform 4.'],
        ] },
        { t: 'tip', tone: 'info', md: "**single** — bir tomonga, **return** — borib-kelish. Narx: **How much is** + 1 ta narsa, **How much are** + bir nechta. Vaqt savolida **does** bor, shuning uchun fe'l oddiy shaklda: *leave*, *arrive* (**-s** yo'q)." },
        { t: 'check', ex: { k: 'choice', q: '"What time ___ the train leave?"', opts: ['does', 'is', 'do', 'are'], a: 0, why: "*the train* = it → **does** + leave." } },
      ],
    },
    {
      title: 'Kassada va perronda',
      blocks: [
        { t: 'dialog', lines: [
          { who: 'Passenger', en: 'Good morning. How much is a return ticket to Bukhara?', uz: "Xayrli tong. Buxoroga borib-kelish chiptasi qancha?" },
          { who: 'Clerk', en: "It's one hundred and eighty thousand sum. A single is ninety thousand.", uz: "Bir yuz sakson ming so'm. Bir tomonga to'qson ming." },
          { who: 'Passenger', en: 'Two returns, please. What time does the next train leave?', uz: "Ikkita borib-kelish, iltimos. Keyingi poyezd soat nechada ketadi?" },
          { who: 'Clerk', en: "At ten to nine, from platform 3. But it's delayed by twenty minutes today.", uz: "To'qqizga o'n daqiqa qolganda, 3-platformadan. Lekin bugun yigirma daqiqa kechikyapti." },
          { who: 'Passenger', en: 'OK. Is it a direct train?', uz: "Yaxshi. U to'g'ridan-to'g'ri poyezdmi?" },
          { who: 'Clerk', en: "Yes, it is. You don't change trains.", uz: "Ha. Poyezd almashtirmaysiz." },
        ] },
        { t: 'check', ex: { k: 'choice', q: 'How much is a single ticket to Bukhara?', opts: ['Ninety thousand sum', 'One hundred and eighty thousand sum', 'Twenty thousand sum', 'Platform 3'], a: 0, why: "*A single is ninety thousand.*" } },
        { t: 'check', ex: { k: 'fill', q: 'The train is ___ by twenty minutes. It is late.', a: ['delayed'], uz: "Poyezd yigirma daqiqaga kechikyapti.", why: "**delayed** — kechikkan." } },
      ],
    },
    {
      title: "Ehtiyot bo'ling: tez-tez uchraydigan xatolar",
      blocks: [
        { t: 'compare', good: { title: "To'g'ri", items: ['What time does the train leave?', 'How much are two tickets?', 'It leaves from platform 2.'] }, bad: { title: "Noto'g'ri", items: ['What time the train leaves?', 'How much is two tickets?', 'It leaves in platform 2.'] } },
        { t: 'p', md: "Eslatma: vaqtni **at** bilan aytamiz (*at nine*), perronni esa shunchaki raqam bilan (*platform 2*). Savolda **does** bo'lsa, fe'lga **-s** qo'shilmaydi. Narx bir nechta chipta uchun **are**." },
        { t: 'check', ex: { k: 'choice', q: 'Qaysi savol to\'g\'ri?', opts: ['How much are two tickets?', 'How much is two tickets?', 'How much two tickets are?', 'How many is two tickets?'], a: 0, why: "Ko'plik (two tickets) → **How much are…?**" } },
      ],
    },
  ],
  words: [
    { en: 'timetable', uz: 'jadval (qatnov)', ipa: 'ˈtaɪmˌteɪ.bəl', pos: 'noun', ex: 'Look at the timetable on the wall.', exUz: 'Devordagi jadvalga qarang.' },
    { en: 'ticket office', uz: 'chipta kassasi', ipa: 'ˈtɪk.ɪt ˌɒf.ɪs', pos: 'noun phrase', ex: 'The ticket office is open now.', exUz: 'Chipta kassasi hozir ochiq.' },
    { en: 'fare', uz: "yo'l haqi", ipa: 'feə', pos: 'noun', ex: 'The fare to Samarkand is cheap.', exUz: "Samarqandga yo'l haqi arzon." },
    { en: 'direct train', uz: "to'g'ridan-to'g'ri poyezd", ipa: 'dəˈrekt treɪn', pos: 'noun phrase', ex: 'There is a direct train to Khiva.', exUz: "Xivaga to'g'ridan-to'g'ri poyezd bor." },
    { en: 'carriage', uz: 'vagon', ipa: 'ˈkær.ɪdʒ', pos: 'noun', ex: 'Our seats are in carriage five.', exUz: "Joylarimiz beshinchi vagonda." },
    { en: 'change trains', uz: 'poyezd almashtirmoq', ipa: 'tʃeɪndʒ treɪnz', pos: 'phrase', ex: 'You change trains in Navoi.', exUz: 'Siz Navoiyda poyezd almashtirasiz.' },
  ],
  practice: [
    { k: 'choice', q: 'How ___ is a return ticket?', opts: ['much', 'many', 'long time', 'old'], a: 0, why: "Narx so'rash: **How much…?**" },
    { k: 'fill', q: 'What time ___ the train arrive?', a: ['does'], uz: "Poyezd soat nechada yetib keladi?", why: "Vaqt savoli: **does** + V1." },
    { k: 'order', uz: "Poyezd qaysi platformadan ketadi?", words: ['Which', 'platform', 'does', 'the', 'train', 'leave', 'from'], extra: ['is', 'leaves'] },
    { k: 'translate', uz: "Borib-kelish chiptasi qancha turadi?", a: ['How much is a return ticket?', 'How much is a return?'], why: "**How much is…?**" },
    { k: 'match', pairs: [['timetable', 'jadval'], ['ticket office', 'chipta kassasi'], ['fare', "yo'l haqi"], ['carriage', 'vagon'], ['direct train', "to'g'ridan-to'g'ri poyezd"]] },
    { k: 'tf', q: "*What time does the train leaves?* — gap to'g'ri.", a: false, why: "**does** dan keyin: *leave* (-s yo'q)." },
    { k: 'listen', say: 'The train is delayed by ten minutes.', opts: ['The train is delayed by ten minutes.', 'The train is on time.', 'The train leaves at ten.', 'The train is delayed by two minutes.'], a: 0 },
    { k: 'dictation', say: 'It leaves from platform two.', a: ['It leaves from platform two.', 'It leaves from platform 2.'] },
    { k: 'fix', wrong: 'How much is two tickets?', a: ['How much are two tickets?'], why: "Ko'plik → **are**." },
    { k: 'fix', wrong: 'What time the train leaves?', a: ['What time does the train leave?'], why: "Savolda **does** kerak, fe'l esa oddiy shaklda." },
    { k: 'choice', q: 'A: How much is a return ticket? B: ...', opts: ["It's one hundred thousand sum.", 'It leaves at nine.', 'Platform 2.', 'Yes, it is.'], a: 0, why: "Narx so'ralgan — javob ham narx." },
    { k: 'speak', say: 'What time does the next train leave?', uz: 'Keyingi poyezd soat nechada ketadi?' },
  ],
  quiz: [
    { k: 'choice', q: 'A: ___ is a single ticket? B: Fifty thousand sum.', opts: ['How much', 'What time', 'Which', 'How many'], a: 0 },
    { k: 'fill', q: 'How much ___ two return tickets?', a: ['are'], why: "Ko'plik → **are**." },
    { k: 'order', uz: "Poyezd soat nechada yetib keladi?", words: ['What', 'time', 'does', 'it', 'arrive'], extra: ['arrives', 'is'] },
    { k: 'translate', uz: "Poyezd kechikyapti.", a: ['The train is delayed.', "It's delayed.", 'The train is late.'] },
    { k: 'tf', q: "*A direct train* — poyezd almashtirmaysiz.", a: true },
    { k: 'fix', wrong: 'It leaves in platform 3.', a: ['It leaves from platform 3.'], why: "**from platform 3.**" },
    { k: 'match', pairs: [['single', 'bir tomonga'], ['return', 'borib-kelish'], ['delayed', 'kechikkan'], ['platform', 'perron']] },
    { k: 'choice', q: 'Which question asks about the time?', opts: ['What time does the train leave?', 'How much is a ticket?', 'Which platform is it?', 'Is it a direct train?'], a: 0 },
  ],
  summary: [
    "Narx: **How much is a single ticket? / How much are two tickets?**",
    "Vaqt va perron: **What time does the train leave? Which platform does it leave from?** — **does** dan keyin fe'l oddiy.",
    "Foydali: **single, return, delayed, direct train, change trains**.",
    "Yangi so'zlar: **timetable, ticket office, fare, direct train, carriage, change trains**.",
  ],
  homework: "Chipta kassasida bo'lgandek 4 ta savol yozing: narx (single va return), vaqt va perron haqida. Keyin ularga o'zingiz javob bering.",
};

export default lesson;
