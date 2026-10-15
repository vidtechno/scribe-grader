import type { Lesson } from '../../../types';

// Mini lesson (review): the whole unit with new examples: Past Perfect, narrative tenses, reported statements, questions and orders, reporting verbs, linkers.
const lesson: Lesson = {
  id: 'u19-l11',
  title: 'Stories and reporting: final review',
  titleUz: "Hikoya va ko'chirma gap: yakuniy takror",
  mini: true,
  kind: 'review',
  goal: "Butun bosqichni takrorlaysiz: **Past Perfect**, **hikoya zamonlari**, **ko'chirma gap** (darak, savol, buyruq), **reporting fe'llari** va hikoya **bog'lovchilari** (*suddenly, meanwhile, eventually*).",
  slides: [
    {
      title: "Hikoya zamonlari",
      blocks: [
        { t: 'p', md: "Hikoyada uchta zamon birga ishlaydi: **Past Simple** (voqea), **Past Continuous** (fon), **Past Perfect** (undan oldingi ish)." },
        { t: 'table', head: ["Zamon", "Vazifasi", "Misol"], speak: [2], rows: [
          ["Past Simple", "asosiy voqealar", "I noticed the bag was missing."],
          ["Past Continuous", "fon, davom etayotgan ish", "I was walking to the station."],
          ["Past Perfect", "oldin bo'lgan ish", "I had left it at the café."],
        ] },
        { t: 'tip', tone: 'info', md: "**By the time** + Past Simple, asosiy gap Past Perfect: *By the time I got back, the café had closed.* Ketma-ket ishlar uchun hammasi Past Simple." },
        { t: 'check', ex: { k: 'choice', q: "When I got to the party, everybody ___ home.", opts: ["had gone", "was go", "goes", "has gone"], a: 0, why: "Oldin ketishgan → **had gone**." } },
      ],
    },
    {
      title: "Ko'chirma gap",
      blocks: [
        { t: 'p', md: "Ko'chirma gapda zamon **bir qadam o'tmishga** siljiydi; savollarda **if / whether** yoki so'roq so'z va **oddiy gap tartibi** keladi; buyruqda **to / not to**." },
        { t: 'table', head: ["To'g'ridan-to'g'ri", "Ko'chirma gap"], speak: [1], rows: [
          ['"I am tired."', "She said that she was tired."],
          ['"I saw him."', "He told me that he had seen him."],
          ['"Will you come?"', "She asked if I would come."],
          ['"Where do you live?"', "He asked where I lived."],
          ['"Close the door."', "She told me to close the door."],
          ['"Don\'t be late."', "He told us not to be late."],
        ] },
        { t: 'check', ex: { k: 'fill', q: "\"Where is the station?\" → He asked me where the station ___.", a: ["was"], why: "Savol → oddiy tartib, zamon siljiydi: **was**." } },
        { t: 'check', ex: { k: 'choice', q: "\"Open your bag.\" → The guard told me ___ my bag.", opts: ["to open", "opening", "that open", "open"], a: 0, why: "Buyruq → **told + kim + to + fe'l**." } },
      ],
    },
    {
      title: "Reporting fe'llari va bog'lovchilar",
      blocks: [
        { t: 'examples', items: [
          { en: "He promised to call me.", uz: "U menga qo'ng'iroq qilishga va'da berdi.", note: "**promise, offer, refuse** + to." },
          { en: "She denied taking the money.", uz: "U pulni olganini inkor qildi.", note: "**admit, deny, suggest** + -ing." },
          { en: "He warned us not to touch it.", uz: "U bizni unga tegmaslikka ogohlantirdi.", note: "**warn** + kim + not to." },
          { en: "Suddenly, the lights went out. Meanwhile, I was reading in the kitchen. Eventually, we found the problem.", uz: "To'satdan chiroq o'chdi. Shu orada men oshxonada o'qiyotgan edim. Oxir-oqibat muammoni topdik.", note: "Hikoya bog'lovchilari." },
        ] },
        { t: 'check', ex: { k: 'choice', q: "Qaysi gap to'g'ri?", opts: ["She suggested taking a taxi.", "She suggested me to take a taxi.", "She suggested to take a taxi.", "She suggested take a taxi."], a: 0, why: "**suggest** + -ing." } },
      ],
    },
    {
      title: "O'qing: yo'qolgan sumka",
      blocks: [
        { t: 'text', title: 'The lost bag',
          en: "Last Friday, I was walking to the station when I noticed that I had left my bag at the café. I ran back, but the waiter said that he hadn't seen it. Suddenly, a girl shouted that she had found a bag under a table. Meanwhile, my train left without me. I asked her where she had found it, and she told me to check inside. Everything was there. Eventually, I caught the next train and promised to send her a thank-you card.",
          uz: "O'tgan juma kuni stansiyaga ketayotib, sumkamni kafeda qoldirganimni payqadim. Orqaga yugurdim, lekin ofitsiant uni ko'rmaganini aytdi. To'satdan bir qiz stol tagidan sumka topganini baqirib aytdi. Shu orada poyezdim mensiz ketdi. Undan sumkani qayerdan topganini so'radim, u ichini tekshirishimni aytdi. Hamma narsa joyida edi. Oxir-oqibat keyingi poyezdga o'tirdim va unga minnatdorchilik kartasini yuborishga va'da berdim." },
        { t: 'check', ex: { k: 'choice', q: "Where had the writer left the bag?", opts: ["At a café", "On the train", "At home", "At the station"], a: 0, why: "*I had left my bag at the café.*" } },
        { t: 'check', ex: { k: 'tf', q: "The waiter said that he had seen the bag.", a: false, why: "*He hadn't seen it.*" } },
      ],
    },
  ],
  words: [
    { en: 'confess', uz: "tan olmoq, bo'yniga olmoq", ipa: 'kənˈfes', pos: 'verb', ex: "He confessed that he had broken the window.", exUz: "U derazani sindirganini bo'yniga oldi." },
    { en: 'reveal', uz: "oshkor qilmoq", ipa: 'rɪˈviːl', pos: 'verb', ex: "She revealed that she was moving abroad.", exUz: "U chet elga ko'chib ketayotganini oshkor qildi." },
    { en: 'murmur', uz: "pichirlab aytmoq, g'o'ldiramoq", ipa: 'ˈmɜː.mər', pos: 'verb', ex: "He murmured that he was tired and went to bed.", exUz: "U charchaganini pichirlab aytdi va yotgani ketdi." },
    { en: 'recount', uz: "hikoya qilib bermoq", ipa: 'rɪˈkaʊnt', pos: 'verb', ex: "She recounted what had happened that night.", exUz: "U o'sha kechasi nima bo'lganini hikoya qilib berdi." },
    { en: 'overlook', uz: "e'tibordan chetda qoldirmoq", ipa: 'ˌəʊ.vəˈlʊk', pos: 'verb', ex: "I had overlooked a small mistake in my report.", exUz: "Hisobotimdagi kichik xatoni e'tibordan chetda qoldirgan edim." },
  ],
  practice: [
    { k: 'match', pairs: [['notice', 'payqamoq'], ['reply', 'javob bermoq'], ['mention', 'tilga olmoq'], ['explain', 'tushuntirmoq'], ['apologise', "uzr so'ramoq"]] },
    { k: 'choice', q: "By the time we arrived, the concert ___.", opts: ["had started", "starts", "was start", "start"], a: 0, why: "Oldin boshlangan → **had started**." },
    { k: 'choice', q: "\"I'll help you,\" said Ben. → Ben said that he ___ help me.", opts: ["would", "will", "can", "had"], a: 0, why: "*will* → **would**." },
    { k: 'fill', q: "She asked me if I ___ tea or coffee. (want)", a: ["wanted"], why: "Savol → oddiy tartib, zamon siljiydi: **wanted**." },
    { k: 'fill', q: "He apologised ___ being late.", a: ["for"], why: "**apologise for**." },
    { k: 'fill', q: "The doctor told me ___ to eat too much sugar.", a: ["not"], why: "Inkor buyruq → **not to**." },
    { k: 'fix', wrong: "She asked me where did I work.", a: ["She asked me where I worked."], why: "Ko'chirma savolda oddiy tartib: **where I worked**." },
    { k: 'fix', wrong: "He denied to take the money.", a: ["He denied taking the money.", "He denied that he had taken the money.", "He denied that he took the money."], why: "**deny** + -ing." },
    { k: 'order', uz: "To'satdan chiroq o'chdi.", words: ["Suddenly,", "the", "lights", "went", "out."], extra: ["were", "going"], why: "Qisqa voqea → Past Simple." },
    { k: 'translate', uz: "U menga kechikmaslikni aytdi.", a: ["He told me not to be late.", "She told me not to be late."], why: "**told me not to be late**." },
    { k: 'dictation', say: "She told me that she had lost her keys.", a: ["She told me that she had lost her keys.", "She told me she had lost her keys."] },
    { k: 'speak', say: "Eventually, I caught the next train.", uz: "Oxir-oqibat keyingi poyezdga o'tirdim." },
  ],
  quiz: [
    { k: 'choice', q: "I was sleeping when the phone ___.", opts: ["rang", "was ringing", "had rung", "rings"], a: 0, why: "Qisqa voqea → Past Simple: **rang**." },
    { k: 'choice', q: "\"I live in Samarkand,\" he said. → He said that he ___ in Samarkand.", opts: ["lived", "lives", "has lived", "will live"], a: 0, why: "Present Simple → **Past Simple**." },
    { k: 'fill', q: "He asked ___ I had finished the report. (if / whether)", a: ["if", "whether"], why: "Ha/yo'q savol → **if** yoki **whether**." },
    { k: 'tf', q: "**She suggested me to leave.** — to'g'ri gap.", a: false, why: "To'g'risi: *She suggested leaving.*" },
    { k: 'order', uz: "U menga eshikni yopishni aytdi.", words: ["She", "told", "me", "to", "close", "the", "door."], extra: ["closing", "said"], why: "**told me to + fe'l**." },
    { k: 'translate', uz: "Shu orada poyezdim ketdi.", a: ["Meanwhile, my train left.", "Meanwhile my train left."] },
  ],
  summary: [
    "Hikoya: **Past Simple** (voqea), **Past Continuous** (fon), **Past Perfect** (oldingi ish).",
    "Ko'chirma gap: zamon bir qadam o'tmishga (*is* → *was*, *will* → *would*); savolda **if / whether** va oddiy tartib; buyruqda **to / not to**.",
    "Reporting fe'llari: **promise to**, **deny / admit / suggest -ing**, **warn somebody (not) to**.",
    "Bog'lovchilar: **suddenly, meanwhile, eventually**.",
  ],
  homework: "Bu bosqichdagi eng qiyin mavzuni (Past Perfect yoki ko'chirma savollar) tanlang va u haqida 5 ta o'z gapingizni yozing. Keyin 'The lost bag' matnini ko'rmasdan o'z so'zlaringiz bilan aytib bering.",
};

export default lesson;
