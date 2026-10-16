import type { Lesson } from '../../../types';

// Mini lesson (review): the whole unit with new examples: Present Perfect, for and since, Present Perfect Continuous,
// Present Perfect or Past Simple, been or gone, used to / be used to / get used to, life events, a short biography.
const lesson: Lesson = {
  id: 'u18-l11',
  title: 'Life stories: final review',
  titleUz: "Hayot hikoyalari: yakuniy takror",
  mini: true,
  kind: 'review',
  goal: "Bosqichdagi barcha mavzularni takrorlaysiz: **Present Perfect, for / since, Present Perfect Continuous, Present Perfect yoki Past Simple, used to** va hayot voqealari haqida qisqa hikoya aytasiz.",
  slides: [
    {
      title: "Present Perfect yoki Past Simple?",
      blocks: [
        { t: 'p', md: "Eng muhim qoida: **aniq o'tgan vaqt** (*yesterday, in 2019, ago, last year*) bo'lsa — **Past Simple**. Vaqt aytilmagan yoki **hozirgacha** davom etgan davr bo'lsa — **Present Perfect**." },
        { t: 'table', head: ['Present Perfect', 'Past Simple'], speak: [0, 1], rows: [
          ["I've visited Italy twice.", "I visited Italy in 2022."],
          ["She has lost her phone.", "She lost her phone yesterday."],
          ["Have you ever tried sushi?", "Did you try sushi last week?"],
          ["He has lived here for ten years.", "He lived here for ten years, then moved."],
        ] },
        { t: 'tip', tone: 'info', md: "Tajriba savoli — **Present Perfect** (*Have you ever…?*), tafsilot savoli — **Past Simple** (*Where did you go? When was that?*). **been** — borib qaytgan, **gone** — ketgan va hozir yo'q." },
        { t: 'check', ex: { k: 'choice', q: "I ___ my passport last week.", opts: ["lost", "have lost", "have been losing", "was losing"], a: 0, why: "**last week** → Past Simple." } },
        { t: 'check', ex: { k: 'choice', q: "She isn't here. She ___ out.", opts: ["has gone", "has been", "went been", "is been"], a: 0, why: "Hozir yo'q → **has gone**." } },
      ],
    },
    {
      title: "For, since va davomiylik",
      blocks: [
        { t: 'table', head: ['Savol', 'Javob'], speak: [0, 1], rows: [
          ["How long have you studied English?", "I've studied it for three years."],
          ["How long have you been waiting?", "I've been waiting since nine o'clock."],
          ["How long ago did you start?", "I started two years ago."],
        ] },
        { t: 'compare',
          good: { title: "To'g'ri", items: ["I've known him since 2018.", "She has been working here for a year.", "I met him three years ago."] },
          bad: { title: 'Xato', items: ["I know him since 2018.", "She is working here for a year.", "I have met him three years ago."] } },
        { t: 'tip', tone: 'info', md: "**Present Perfect Continuous** jarayonni va uning davomiyligini ta'kidlaydi: *I've been learning* (hali o'rganyapman). **Present Perfect** esa natijani: *I've learned a lot*. **know, like, have** kabi holat fe'llari odatda continuous bo'lmaydi: *I've known her for years*." },
        { t: 'check', ex: { k: 'fill', q: "We have lived here ___ 2020.", a: ['since'], why: "Boshlanish nuqtasi → **since**." } },
        { t: 'check', ex: { k: 'choice', q: "Her hands are dirty. She ___ in the garden.", opts: ["has been working", "worked", "works", "is been working"], a: 0, why: "Jarayon va uning izi → **has been working**." } },
      ],
    },
    {
      title: "Used to va ko'nikish",
      blocks: [
        { t: 'table', head: ['Qolip', 'Misol', "Ma'nosi"], speak: [1], rows: [
          ['used to + V1', 'I used to play chess every day.', "Ilgari qilar edim, hozir qilmayman."],
          ['be used to + -ing / ot', "I'm used to getting up early.", "Ko'nikib bo'lganman."],
          ['get used to + -ing / ot', "I'm getting used to the noise.", "Ko'nikib boryapman."],
        ] },
        { t: 'tip', tone: 'warn', md: "Savol va inkorda **use to**: *Did you use to live here? I didn't use to like coffee.* **be / get used to** dan keyin **-ing** yoki ot keladi." },
        { t: 'check', ex: { k: 'fix', wrong: "I'm used to get up early.", a: ["I'm used to getting up early.", "I am used to getting up early."], why: "**be used to** + -ing." } },
        { t: 'check', ex: { k: 'choice', q: "We ___ have a dog, but it died last year.", opts: ["used to", "are used to", "get used to", "use to"], a: 0, why: "Ilgari bo'lgan, hozir yo'q → **used to**." } },
      ],
    },
    {
      title: "Matn: bitta hayot, bir necha bosqich",
      blocks: [
        { t: 'text', title: "A short life story", en: "My grandfather was born in a small village in 1950. He graduated from university in 1974 and got married a year later. He used to work as an engineer, and he moved house three times for his job. He retired in 2010. He has been living in the same town for twenty years, and he is used to the quiet life. Recently he has been writing a book about his life. So far, he has finished six chapters. He says that writing has been the biggest challenge of his career.", uz: "Mening bobom 1950-yilda kichik qishloqda tug'ilgan. U 1974-yilda universitetni tugatgan va bir yildan keyin uylangan. U muhandis bo'lib ishlagan va ish uchun uch marta ko'chib o'tgan. 2010-yilda nafaqaga chiqqan. U yigirma yildan beri bir shaharda yashaydi va tinch hayotga ko'nikib bo'lgan. So'nggi paytda o'z hayoti haqida kitob yozyapti. Hozircha olti bobni tugatgan. U yozish karerasidagi eng katta sinov bo'ldi, deydi." },
        { t: 'check', ex: { k: 'tf', q: "The grandfather still works as an engineer.", a: false, why: "*He retired in 2010.*" } },
        { t: 'check', ex: { k: 'choice', q: "What is he doing now?", opts: ["Writing a book", "Moving house", "Studying at university", "Looking for a job"], a: 0, why: "*Recently he has been writing a book.*" } },
      ],
    },
  ],
  words: [
    { en: 'nostalgic', uz: 'o\'tmishni sog\'ingan', ipa: 'nɒˈstæl.dʒɪk', pos: 'adj', ex: 'Looking at old photos makes me feel nostalgic.', exUz: 'Eski suratlarga qarash meni o\'tmishni sog\'intiradi.' },
    { en: 'treasure', uz: 'qadrlamoq, aziz ko\'rmoq', ipa: 'ˈtreʒ.ər', pos: 'verb', ex: 'I will always treasure the time we spent together.', exUz: 'Birga o\'tkazgan vaqtimizni doim aziz ko\'raman.' },
    { en: 'carry on', uz: 'davom etmoq', ipa: 'ˈkær.i ɒn', pos: 'phrasal verb', ex: 'Whatever happens, I\'ll carry on learning English.', exUz: 'Nima bo\'lsa ham, ingliz tilini o\'rganishda davom etaman.' },
    { en: 'look back', uz: "o'tmishga nazar tashlamoq", ipa: 'lʊk bæk', pos: 'phrasal verb', ex: "When I look back, I feel proud.", exUz: "O'tmishga qarasam, faxrlanaman." },
    { en: 'move on', uz: 'oldinga yurmoq, o\'tmishni ortda qoldirmoq', ipa: 'muːv ɒn', pos: 'phrasal verb', ex: 'It is time to move on and start a new chapter.', exUz: 'Oldinga yurib, yangi sahifa boshlash vaqti keldi.' },
  ],
  practice: [
    { k: 'match', pairs: [['experience', 'tajriba'], ['memory', 'xotira'], ['settle down', 'joylashib olmoq'], ['look back', "o'tmishga nazar tashlamoq"], ['adapt', 'moslashmoq']] },
    { k: 'choice', q: "Have you ___ been to Japan?", opts: ['ever', 'yet', 'ago', 'since'], a: 0, why: "Tajriba savoli: **Have you ever…?**" },
    { k: 'choice', q: "My sister ___ married in 2018.", opts: ['got', 'has got', 'has been getting', 'gets'], a: 0, why: "Aniq vaqt (**2018**) → Past Simple." },
    { k: 'fill', q: "They have been friends ___ they were children.", a: ['since'], uz: "Ular bolalikdan beri do'st.", why: "**since** + gap (Past Simple)." },
    { k: 'fill', q: "I ___ to live in a village, but now I live in a big city. (used to)", a: ['used'], uz: "Ilgari qishloqda yashardim, endi katta shaharda yashayman.", why: "**used to + V1**." },
    { k: 'fill', q: "It's been three years ___ I moved here.", a: ['since'], uz: "Men bu yerga ko'chib kelganimga uch yil bo'ldi.", why: "**It's been … years since + Past Simple**." },
    { k: 'listen', say: "I've been learning English for two years.", opts: ["I've been learning English for two years.", "I learned English two years ago.", "I've learned English since two years.", "I'm learning English two years."], a: 0 },
    { k: 'order', uz: "U 2010-yilda nafaqaga chiqqan.", words: ['He', 'retired', 'in', '2010.'], extra: ['has', 'since'] },
    { k: 'order', uz: "Men bu shaharda besh yildan beri yashayman.", words: ["I've", 'lived', 'in', 'this', 'city', 'for', 'five', 'years.'], extra: ['ago', 'since'], alt: [['I', 'have', 'lived', 'in', 'this', 'city', 'for', 'five', 'years.']] },
    { k: 'fix', wrong: "I have finished school in 2015.", a: ["I finished school in 2015."], why: "Aniq yil → Past Simple." },
    { k: 'fix', wrong: "She is working here since March.", a: ["She has been working here since March.", "She's been working here since March.", "She has worked here since March.", "She's worked here since March."], why: "**since** + Present Perfect." },
    { k: 'translate', uz: "Men ilgari ko'p televizor ko'rardim.", a: ["I used to watch a lot of TV.", "I used to watch a lot of television.", "I used to watch TV a lot."], why: "Ilgari takrorlangan odat → **used to**." },
    { k: 'dictation', say: "When I look back, I feel proud of my experience.", a: ["When I look back, I feel proud of my experience.", "When I look back I feel proud of my experience."] },
    { k: 'speak', say: "I've lived in this city for five years, and I'm used to it now.", uz: "Men bu shaharda besh yildan beri yashayman va hozir unga ko'nikib bo'ldim." },
    { k: 'speak', say: "I graduated in 2018, and I've been working ever since.", uz: "Men 2018-yilda tugatganman va o'shandan beri ishlayapman." },
  ],
  quiz: [
    { k: 'choice', q: "Qaysi gap to'g'ri?", opts: ["I've known her for ten years.", "I know her for ten years.", "I'm knowing her since ten years.", "I knew her since ten years."], a: 0, why: "Holat fe'li + **for** → Present Perfect." },
    { k: 'choice', q: "When ___ you move house?", opts: ['did', 'have', 'do', 'are'], a: 0, why: "Tafsilot savoli (**when**) → Past Simple." },
    { k: 'choice', q: "I'm not used to ___ in the dark.", opts: ["driving", "drive", "drove", "to drive"], a: 0, why: "**be used to** + -ing." },
    { k: 'fill', q: "He ___ gone to the bank. He'll be back in an hour.", a: ['has', "'s"], why: "**has gone** — hozir yo'q." },
    { k: 'fill', q: "She has been studying medicine ___ four years.", a: ['for'], why: "Davomiylik → **for**." },
    { k: 'tf', q: "*I used to smoke* — men hozir ham chekaman.", a: false, why: "**used to** — ilgari qilgan, hozir qilmaydi." },
    { k: 'order', uz: "Biz uch yil oldin turmush qurganmiz.", words: ['We', 'got', 'married', 'three', 'years', 'ago.'], extra: ['have', 'for'] },
    { k: 'translate', uz: "Men hali o'z tarjimai holimni yozganim yo'q.", a: ["I haven't written my biography yet.", "I have not written my biography yet.", "I haven't written my life story yet.", "I have not written my life story yet."], why: "**haven't + V3 + yet**." },
  ],
  summary: [
    "**Present Perfect** — tajriba, natija, hozirgacha davom etgan davr; **Past Simple** — aniq o'tgan vaqt (*ago, in 2019, last year*).",
    "**for** — davomiylik, **since** — boshlanish nuqtasi; ikkalasi Present Perfect (yoki Continuous) bilan. **been** — borib qaytgan, **gone** — hozir yo'q.",
    "**used to** — ilgarigi odat; **be / get used to + -ing** — ko'nikmoq.",
    "Yangi so'zlar: **experience, memory, settle down, look back, adapt**.",
  ],
  homework: "O'z hayotingiz haqida 8 gap yozing: 2 ta Past Simple (aniq yil), 2 ta Present Perfect (tajriba), 2 ta **for / since**, 1 ta **used to**, 1 ta **be used to**.",
};

export default lesson;
