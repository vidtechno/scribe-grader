import type { Lesson } from '../../../types';

// Mini lesson (review): whole unit u9. Recycles older words (Beginner) too.
const lesson: Lesson = {
  id: 'u9-l11',
  title: 'Stories from the past: final review',
  titleUz: "O'tmishdan hikoyalar: yakuniy takror",
  mini: true,
  goal: "Butun bo'limni takrorlaysiz: **ago / last / yesterday**, noto'g'ri fe'llar, o'tgan zamon **Wh-savollari**, **there was / were**, **could / couldn't**, hayot hikoyasi, **and / but / so / because** va transport. Oxirida o'tmish haqida kichik hikoya aytib bera olasiz.",
  slides: [
    {
      title: "Takror: asosiy qoidalar",
      blocks: [
        { t: 'table', head: ['Mavzu', 'Misol'], speak: [0, 1, 2, 3], rows: [
          ['ago / last / yesterday', 'I met her two years ago. We left last night.'],
          ['Noto\'g\'ri fe\'llar', 'I slept, felt, heard, flew, drove, won, forgot.'],
          ['Wh-savollar', 'Where did you go? What did you buy? Who won?'],
          ['there was / were, could', "There were many people. I couldn't swim."],
          ['Hayot yo\'li', 'She was born in 1990, grew up in Tashkent and became a doctor.'],
          ['Bog\'lovchilar', 'It rained, so we stayed home, but we had fun.'],
          ['Transport', 'We went by bus. I walked on foot.'],
        ] },
        { t: 'tip', tone: 'good', md: "Oltin qoida: **did, didn't, could, couldn't** dan keyin doim **V1**. V2 faqat ijobiy gapda: *I went*, lekin *I didn't go*." },
        { t: 'check', ex: { k: 'choice', q: 'I ___ my keys at home yesterday.', opts: ['forget', 'forgot', 'forgotten', 'did forgot'], a: 1, why: "**forget – forgot**." } },
      ],
    },
    {
      title: "Dialog: sayohat va hayot",
      blocks: [
        { t: 'dialog', lines: [
          { who: 'Laylo', en: 'Where did you grow up, Mr Karimov?', uz: "Karimov janoblari, siz qayerda ulg'aydingiz?" },
          { who: 'Mr Karimov', en: 'I was born in Khiva, but we moved to Tashkent when I was ten.', uz: "Men Xivada tug'ilganman, lekin o'n yoshimda Toshkentga ko'chib keldik." },
          { who: 'Laylo', en: 'And what did you do last summer?', uz: "O'tgan yozda nima qildingiz?" },
          { who: 'Mr Karimov', en: 'I flew to Istanbul two weeks ago... no, a month ago! There was a beautiful view from our hotel.', uz: "Istanbulga samolyotda uchdim... yo'q, bir oy oldin! Mehmonxonamizdan chiroyli manzara bor edi." },
          { who: 'Laylo', en: 'Did you visit the market?', uz: 'Bozorga bordingizmi?' },
          { who: 'Mr Karimov', en: "Yes, but it was crowded, so I couldn't buy much. I forgot my money at the hotel!", uz: "Ha, lekin odam ko'p edi, shuning uchun ko'p narsa ola olmadim. Pulimni mehmonxonada unutibman!" },
        ] },
        { t: 'check', ex: { k: 'tf', q: "Mr Karimov Toshkentda tug'ilgan.", a: false, why: "*I was born in **Khiva**…*" } },
        { t: 'check', ex: { k: 'fill', q: 'We moved to Tashkent when I ___ ten.', a: ['was'], uz: "O'n yoshimda Toshkentga ko'chib keldik.", why: "**be** o'tgan zamonda: I **was**." } },
      ],
    },
    {
      title: "Ehtiyot bo'ling: xatolar",
      blocks: [
        { t: 'compare', good: { title: "To'g'ri", items: ['two days ago', 'Did you win?', 'Where did they go?', 'There were three hotels.', "I couldn't sleep.", 'We went by train.'] }, bad: { title: "Noto'g'ri", items: ['before two days', 'Did you won?', 'Where they went?', 'There was three hotels.', "I couldn't slept.", 'We went with train.'] } },
        { t: 'check', ex: { k: 'choice', q: 'Qaysi gap **xato**?', opts: ['Who won the game?', 'She didn\'t came.', 'He was born in 1980.', 'I lived there for ten years.'], a: 1, why: "**didn't + V1**: She didn't **come**." } },
      ],
    },
  ],
  words: [
    { en: 'journey', uz: 'safar, yo\'l', ipa: 'ˈdʒɜː.ni', pos: 'noun', ex: 'The journey took five hours.', exUz: 'Safar besh soat davom etdi.' },
    { en: 'adventure', uz: 'sarguzasht', ipa: 'ədˈven.tʃər', pos: 'noun', ex: 'Our trip was a big adventure.', exUz: 'Sayohatimiz katta sarguzasht bo\'ldi.' },
    { en: 'memory', uz: 'xotira, esdalik', ipa: 'ˈmem.ər.i', pos: 'noun', ex: 'I have happy memories of my childhood.', exUz: "Bolaligimdan quvonchli xotiralarim bor." },
  ],
  practice: [
    { k: 'choice', q: 'I met my best friend five years ___.', opts: ['ago', 'last', 'before', 'yesterday'], a: 0, why: "**ago** — hozirdan orqaga hisoblash." },
    { k: 'fill', q: 'We ___ a lot of postcards on holiday. (send)', a: ['sent'], uz: 'Ta\'tilda ko\'p otkritka yubordik.', why: "**send – sent**." },
    { k: 'order', uz: "Kecha qayerga bording?", words: ['Where', 'did', 'you', 'go', 'yesterday'], extra: ['went', 'do'] },
    { k: 'translate', uz: "U Samarqandda tug'ilgan va Toshkentda ulg'aygan.", a: ['She was born in Samarkand and grew up in Tashkent.', 'He was born in Samarkand and grew up in Tashkent.'] },
    { k: 'match', pairs: [['journey', 'safar'], ['adventure', 'sarguzasht'], ['memory', 'xotira'], ['beach', 'plyaj'], ['view', 'manzara']] },
    { k: 'tf', q: "*There was many people in the square.* — gap to'g'ri.", a: false, why: "**There were** many people." },
    { k: 'listen', say: 'I flew to Moscow last year.', opts: ['I flew to Moscow last year.', 'I fly to Moscow every year.', 'I drove to Moscow last year.', 'I flew to Moscow last week.'], a: 0 },
    { k: 'fix', wrong: 'Where they went last summer?', a: ['Where did they go last summer?'], why: "Savol: **Wh + did + ega + V1**." },
    { k: 'fill', q: 'It was raining, ___ we stayed at home.', a: ['so'], uz: "Yomg'ir yog'ayotgan edi, shuning uchun uyda qoldik.", why: "Natija → **so**." },
    { k: 'fill', q: 'She ___ swim when she was five. (can, past)', a: ['could'], uz: "U besh yoshida suzishni bilardi.", why: "**can → could**." },
    { k: 'dictation', say: 'We went there by train two days ago.', a: ['We went there by train two days ago.'] },
    { k: 'speak', say: 'The journey was long, but it was a great adventure.', uz: "Safar uzoq bo'ldi, lekin ajoyib sarguzasht edi." },
  ],
  quiz: [
    { k: 'choice', q: 'Which question is correct?', opts: ['What did you bought?', 'What you bought?', 'What did you buy?', 'What bought you?'], a: 2 },
    { k: 'fill', q: 'My grandfather ___ in 2015. (die)', a: ['died'] },
    { k: 'order', uz: "Chipta qimmat edi, shuning uchun avtobusda bordik.", words: ['The', 'ticket', 'was', 'expensive,', 'so', 'we', 'went', 'by', 'bus'], extra: ['because', 'with'] },
    { k: 'translate', uz: "Biz hech narsa eshita olmadik.", a: ["We couldn't hear anything.", 'We could not hear anything.', "We couldn't hear a thing."] },
    { k: 'tf', q: "*I woke up two hours ago* — o'tgan vaqt haqida.", a: true },
    { k: 'fix', wrong: 'She didn\'t won the prize.', a: ["She didn't win the prize.", 'She did not win the prize.'], why: "**didn't + V1**." },
    { k: 'match', pairs: [['grow up', "ulg'aymoq"], ['get married', 'turmush qurmoq'], ['journey', 'safar'], ['memory', 'xotira']] },
    { k: 'choice', q: 'The film was long, ___ it was interesting.', opts: ['so', 'because', 'but', 'then'], a: 2 },
  ],
  summary: [
    "Vaqt: **ago** (two days **ago**), **last** (last week), **yesterday**.",
    "Savol: **Wh + did + ega + V1**; ega-savolda: *Who won?*",
    "**there was** (birlik) / **there were** (ko'plik); **could / couldn't + V1**.",
    "Hikoya: **and, but, so, because**; transport: **by bus, on foot**.",
    "Yangi so'zlar: **journey, adventure, memory**.",
  ],
  homework: "Bo'limdagi barcha noto'g'ri fe'llarni takrorlang va \"Mening hayotim\" haqida 8–10 gap yozing: **born, grew up, moved, ago, because**.",
};

export default lesson;
