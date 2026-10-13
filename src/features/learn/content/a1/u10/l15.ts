import type { Lesson } from '../../../types';

// Mini lesson (skill): reading and writing a postcard and a short email from a trip.
const lesson: Lesson = {
  id: 'u10-l15',
  title: 'Reading and writing: a postcard and an email',
  titleUz: "O'qish va yozish: otkritka va xat",
  mini: true,
  kind: 'skill',
  goal: "Sayohatdan yozilgan **otkritka va qisqa xatni** o'qib tushunasiz va o'zingiz **otkritka yozasiz**: joy, ob-havo, nima qildingiz va keyin nima qilasiz.",
  slides: [
    {
      title: "O'qing: otkritka",
      blocks: [
        { t: 'p', md: "Otkritka qisqa bo'ladi: **salom → qayerdasiz → ob-havo → nima qildingiz → tilak**. Gaplar oddiy: *We are… The weather is… Yesterday we…*" },
        { t: 'text', title: 'A postcard from Khiva', en: "Dear Mum and Dad,\nGreetings from Khiva! We are having a lovely time here. The weather is hot and sunny, so we go to the old town in the morning. Yesterday we visited a museum and walked on the old city walls. The sunset was beautiful! Tomorrow we are going to take photos at the market.\nI miss you. See you next week!\nLove,\nMalika", uz: "Aziz ota-onam,\nXivadan salom! Bu yerda vaqtimiz juda yaxshi o'tyapti. Ob-havo issiq va quyoshli, shuning uchun ertalab eski shaharga boramiz. Kecha muzeyga bordik va eski shahar devorlarida sayr qildik. Quyosh botishi juda chiroyli edi! Ertaga bozorda suratga tushamiz.\nSizni sog'indim. Kelasi hafta ko'rishamiz!\nMehr bilan,\nMalika" },
        { t: 'check', ex: { k: 'choice', q: "What was beautiful?", opts: ['The sunset', 'The museum', 'The market', 'The weather in the morning'], a: 0, why: "*The sunset was beautiful!*" } },
        { t: 'check', ex: { k: 'tf', q: 'Malika is going to take photos at the market tomorrow.', a: true, why: "*Tomorrow we are going to take photos at the market.*" } },
      ],
    },
    {
      title: "O'qing: qisqa xat",
      blocks: [
        { t: 'text', title: 'An email from the beach', en: "Hi Jasur,\nHow are you? I'm on holiday at the beach with my family. The hotel is near the sea and the water is warm. Every day I swim in the morning and read a book in the afternoon. Yesterday I forgot my sunscreen, so my nose is red!\nTomorrow we are going to take a boat trip. Why don't you come next summer? Let me know.\nBest wishes,\nDilnoza", uz: "Salom Jasur,\nQalaysan? Men oilam bilan plyajda ta'tildaman. Mehmonxona dengiz yonida, suv iliq. Har kuni ertalab suzaman, tushdan keyin kitob o'qiyman. Kecha quyoshdan himoya kremimni unutdim, shuning uchun burnim qizarib ketdi!\nErtaga qayiqda sayr qilmoqchimiz. Kelasi yozda sen ham kelsang-chi? Menga xabar ber.\nEng yaxshi tilaklar bilan,\nDilnoza" },
        { t: 'check', ex: { k: 'choice', q: 'Why is Dilnoza\'s nose red?', opts: ['She forgot her sunscreen.', 'She is ill.', 'It is cold.', 'She swam all night.'], a: 0, why: "*I forgot my sunscreen, so my nose is red!*" } },
        { t: 'check', ex: { k: 'fill', q: 'Dilnoza invites Jasur. She says: "Why ___ you come next summer?"', a: ["don't", 'do not'], uz: "Kelasi yozda kelsang-chi?", why: "**Why don't you…?** — taklif/maslahat." } },
      ],
    },
    {
      title: "Yozing: o'z otkritkangiz",
      blocks: [
        { t: 'tip', tone: 'info', md: "Namuna reja: **1** Dear… **2** Greetings from… **3** The weather is… **4** Yesterday we… **5** Tomorrow we are going to… **6** I miss you / See you soon! **7** Love, (ism)" },
        { t: 'compare', good: { title: "To'g'ri", items: ['Greetings from Samarkand!', 'Yesterday we visited a museum.', 'The weather is sunny.'] }, bad: { title: "Noto'g'ri", items: ['Greetings of Samarkand!', 'Yesterday we visit a museum.', 'The weather are sunny.'] } },
        { t: 'check', ex: { k: 'fix', wrong: 'Yesterday we visit the museum.', a: ['Yesterday we visited the museum.', 'Yesterday we visited a museum.'], why: "*Yesterday* — o'tgan zamon: **visited**." } },
      ],
    },
  ],
  words: [
    { en: 'beach', uz: 'plyaj', ipa: 'biːtʃ', pos: 'noun', ex: 'We swim at the beach every day.', exUz: 'Biz har kuni plyajda suzamiz.' },
    { en: 'sunset', uz: 'quyosh botishi', ipa: 'ˈsʌn.set', pos: 'noun', ex: 'The sunset is beautiful here.', exUz: 'Bu yerda quyosh botishi chiroyli.' },
    { en: 'lovely', uz: 'ajoyib, yoqimli', ipa: 'ˈlʌv.li', pos: 'adjective', ex: 'We are having a lovely time.', exUz: "Vaqtimiz juda yaxshi o'tyapti." },
    { en: 'miss', uz: "sog'inmoq", ipa: 'mɪs', pos: 'verb', ex: 'I miss my family.', exUz: "Oilamni sog'inyapman." },
    { en: 'stamp', uz: 'marka (pochta)', ipa: 'stæmp', pos: 'noun', ex: 'I need a stamp for the postcard.', exUz: 'Otkritka uchun marka kerak.' },
    { en: 'address', uz: 'manzil', ipa: 'əˈdres', pos: 'noun', ex: 'Write the address on the postcard.', exUz: 'Manzilni otkritkaga yozing.' },
  ],
  practice: [
    { k: 'choice', q: 'Postcard: "Greetings ___ Khiva!"', opts: ['from', 'of', 'in', 'to'], a: 0, why: "**Greetings from + joy.**" },
    { k: 'fill', q: 'We are having a ___ time here. (ajoyib)', a: ['lovely'], uz: "Bu yerda vaqtimiz ajoyib o'tyapti.", why: "**a lovely time**." },
    { k: 'order', uz: "Kecha biz muzeyga bordik.", words: ['Yesterday', 'we', 'visited', 'a', 'museum'], extra: ['visit', 'visiting'] },
    { k: 'translate', uz: "Ob-havo issiq va quyoshli.", a: ['The weather is hot and sunny.', "The weather's hot and sunny."], why: "**The weather is…**" },
    { k: 'match', pairs: [['beach', 'plyaj'], ['sunset', 'quyosh botishi'], ['miss', "sog'inmoq"], ['stamp', 'marka'], ['address', 'manzil']] },
    { k: 'tf', q: "*The weather are sunny.* — gap to'g'ri.", a: false, why: "*weather* — birlik: **The weather is sunny.**" },
    { k: 'choice', q: 'Which ending is good for a postcard?', opts: ['I miss you. See you next week! Love, Malika', 'Dear Sir or Madam, Kind regards', 'Subject: Hotel booking', 'Please call me back.'], a: 0 },
    { k: 'dictation', say: 'I miss you. See you soon!', a: ['I miss you. See you soon!', 'I miss you. See you soon'] },
    { k: 'fix', wrong: 'Yesterday we walk on the beach.', a: ['Yesterday we walked on the beach.'], why: "**walked** — o'tgan zamon." },
    { k: 'order', uz: "Ertaga biz qayiqda sayr qilamiz.", words: ['Tomorrow', 'we', 'are', 'going', 'to', 'take', 'a', 'boat', 'trip'], extra: ['will', 'taking'] },
    { k: 'translate', uz: "Sizni sog'indim.", a: ['I miss you.', 'I miss you very much.'], why: "**I miss you.**" },
    { k: 'fill', q: 'Dear Mum and Dad, Greetings ___ Samarkand!', a: ['from'], uz: "Aziz ota-onam, Samarqanddan salom!", why: "**Greetings from…**" },
  ],
  quiz: [
    { k: 'choice', q: 'Which sentence tells about yesterday?', opts: ['Yesterday we visited a museum.', 'Tomorrow we visit a museum.', 'We are visiting a museum yesterday.', 'We will visited a museum.'], a: 0 },
    { k: 'fill', q: 'Yesterday we ___ on the old city walls. (walk)', a: ['walked'] },
    { k: 'order', uz: "Bu yerda ob-havo iliq.", words: ['The', 'weather', 'is', 'warm', 'here'], extra: ['are', 'warms'] },
    { k: 'translate', uz: "Xivadan salom!", a: ['Greetings from Khiva!', 'Greetings from Khiva'] },
    { k: 'tf', q: "*Love, Malika* — otkritka oxirida yaqinlarga yoziladi.", a: true },
    { k: 'fix', wrong: 'Greetings of Khiva!', a: ['Greetings from Khiva!', 'Greetings from Khiva'], why: "**Greetings from + joy.**" },
    { k: 'match', pairs: [['beach', 'plyaj'], ['lovely', 'ajoyib'], ['stamp', 'marka'], ['sunset', 'quyosh botishi']] },
    { k: 'choice', q: 'Where do you write the address?', opts: ['On the postcard', 'In the stamp', 'On the beach', 'In the weather'], a: 0 },
  ],
  summary: [
    "Otkritka tuzilishi: **Dear… → Greetings from… → ob-havo → Yesterday we… → Tomorrow we are going to… → I miss you → Love,**",
    "O'tgan voqealar: **Yesterday we visited / walked…**; reja: **Tomorrow we are going to…**",
    "Xatda taklif: **Why don't you come next summer?** Tugatish: **Best wishes, / Love,**",
    "Yangi so'zlar: **beach, sunset, lovely, miss, stamp, address**.",
  ],
  homework: "Sayohatdagi do'stingizga 40–60 so'zdan iborat otkritka yozing: *Greetings from…*, ob-havo, *Yesterday we…*, *Tomorrow we are going to…* va *I miss you*.",
};

export default lesson;
