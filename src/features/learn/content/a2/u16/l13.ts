import type { Lesson } from '../../../types';

// Mini lesson (grammar): the passive in the past, questions and negatives, by + agent, active <-> passive.
// Builds on l4 (passive basics) without repeating the theory.
const lesson: Lesson = {
  id: 'u16-l13',
  title: 'The passive: past and questions',
  titleUz: "Majhul nisbat: o'tgan zamon va savollar",
  mini: true,
  kind: 'grammar',
  goal: "O'tgan zamon majhul nisbatida **savol** (*When was the phone invented?*) va **inkor** (*The window wasn't broken*) tuzasiz, **by** bilan ish bajaruvchini ko'rsatasiz va gapni **active ↔ passive** ga aylantirasiz.",
  slides: [
    {
      title: "Active gapni passive qilish",
      blocks: [
        { t: 'p', md: "Passive ni qadam-baqadam tuzamiz. Active gap: **Bell invented the telephone.** Uni passive qilish uchun 3 ta ish qilamiz:" },
        { t: 'table', head: ['Qadam', 'Nima qilamiz', 'Misol'], speak: [2], rows: [
          ['1', "To'ldiruvchi → ega bo'ladi", 'the telephone …'],
          ['2', "was / were + V3 (zamon o'tgan, ega birlik yoki ko'plik)", 'the telephone was invented'],
          ['3', "Eski ega → by + kim (kerak bo'lsa)", 'The telephone was invented by Bell.'],
        ] },
        { t: 'examples', items: [
          { en: 'Ali painted the room. → The room was painted by Ali.', uz: "Ali xonani bo'yadi. → Xona Ali tomonidan bo'yaldi." },
          { en: 'Workers built these houses. → These houses were built by workers.', uz: "Ishchilar bu uylarni qurdi. → Bu uylar ishchilar tomonidan qurilgan.", note: "*These houses* — ko'plik → **were**." },
          { en: 'Somebody stole my bike. → My bike was stolen.', uz: "Kimdir velosipedimni o'g'irladi. → Velosipedim o'g'irlandi.", note: "Kim ekani noma'lum — **by** yozilmaydi." },
        ] },
        { t: 'tip', tone: 'info', md: "Passive da gapning markazida **ish yoki natija** turadi. Shuning uchun kim qilgani muhim bo'lmasa (*somebody, someone, people*), **by** ni tushirib qoldiramiz." },
        { t: 'check', ex: { k: 'choice', q: "*Workers built the bridge.* gapining passive shakli qaysi?", opts: ['The bridge was built by workers.', 'The bridge built by workers.', 'The bridge were built by workers.', 'Workers were built the bridge.'], a: 0, why: "*the bridge* — birlik → **was built**." } },
      ],
    },
    {
      title: "Tartibsiz fe'llarning V3 shakli",
      blocks: [
        { t: 'p', md: "Passive da asosiy xato — V3 o'rniga V2 qo'yish (*was wrote* ❌). Eng kerakli tartibsiz fe'llarni yodlab oling:" },
        { t: 'table', head: ['V1', 'V2', 'V3 (passive da)'], speak: [2], rows: [
          ['write', 'wrote', 'written'],
          ['break', 'broke', 'broken'],
          ['take', 'took', 'taken'],
          ['send', 'sent', 'sent'],
          ['sell', 'sold', 'sold'],
          ['win', 'won', 'won'],
        ] },
        { t: 'compare',
          good: { title: "To'g'ri", items: ['The letter was written yesterday.', 'The photos were taken in Khiva.', 'The window was broken by a ball.'] },
          bad: { title: 'Xato', items: ['The letter was wrote yesterday.', 'The photos were took in Khiva.', 'The window was broke by a ball.'] } },
        { t: 'tip', tone: 'warn', md: "To'g'ri fe'llarda V2 va V3 bir xil (*painted, invented, published*), shuning uchun xato qilmaysiz. Tartibsizlarda ehtiyot bo'ling: **was + V3**, hech qachon *was + V2*." },
        { t: 'check', ex: { k: 'fill', q: 'This email was ___ yesterday. (send)', a: ['sent'], why: "send – sent – **sent**." } },
      ],
    },
    {
      title: "Savol va inkor",
      blocks: [
        { t: 'p', md: "O'tgan zamon passive da **was / were** ni ega oldiga qo'yamiz. **did** kerak emas, V3 esa o'zgarmaydi:" },
        { t: 'table', head: ['', 'Shakl', 'Misol'], speak: [2], rows: [
          ['Inkor', 'was / were + not + V3', "The window wasn't broken. / The cups weren't made here."],
          ['Yes / No savol', 'Was / Were + ega + V3?', 'Was the museum built in 1990? — Yes, it was. / No, it wasn\'t.'],
          ['Wh- savol', 'Wh- + was / were + ega + V3?', 'When was the telephone invented? Where were these shoes made?'],
          ['Kim tomonidan?', 'Who + was + ega + V3 + by?', 'Who was this picture painted by?'],
        ] },
        { t: 'compare',
          good: { title: "To'g'ri", items: ['Was the window broken?', 'When was the phone invented?', 'Where were the photos taken?'] },
          bad: { title: 'Xato', items: ['Did the window broken?', 'When invented the phone?', 'Where did the photos taken?'] } },
        { t: 'tip', tone: 'good', md: "Savol so'zi (**When, Where, How**) birinchi, keyin **was / were**, keyin ega: *When **was** the bridge built?* Faqat **Who … by** savolida **by** oxirga ketadi: *Who was it written **by**?*" },
        { t: 'check', ex: { k: 'fill', q: 'When ___ the Registan built?', a: ['was'], why: "Birlik ega (*the Registan*) + o'tgan zamon → **was**." } },
        { t: 'check', ex: { k: 'choice', q: "Where ___ these carpets made?", opts: ['were', 'was', 'did', 'are been'], a: 0, why: "*These carpets* — ko'plik → **were**." } },
      ],
    },
    {
      title: "By qachon kerak?",
      blocks: [
        { t: 'p', md: "**by + kim** ni faqat ish bajaruvchi **yangi yoki qiziq ma'lumot** bo'lsa yozing: mashhur odam, mualliflik yoki ixtirochi." },
        { t: 'examples', items: [
          { en: 'The telephone was invented by Alexander Graham Bell.', uz: "Telefonni Aleksandr Graham Bell ixtiro qilgan.", note: "Ixtirochi — muhim ma'lumot." },
          { en: 'Mona Lisa was painted by Leonardo da Vinci.', uz: "Mona Lizani Leonardo da Vinchi chizgan.", note: "Rassom — muhim ma'lumot." },
          { en: 'The shop was robbed last night.', uz: "Do'kon kecha kechasi o'marildi.", note: "Kim ekani noma'lum — **by** yo'q." },
          { en: 'Was the book translated by a famous writer?', uz: "Kitob mashhur yozuvchi tomonidan tarjima qilinganmi?", note: "Savolda ham **by** oxirda." },
        ] },
        { t: 'tip', tone: 'warn', md: "**Mashhur xato:** *The window was broken by somebody.* — *by somebody* ortiqcha. Shuningdek *happen, arrive, die* kabi fe'llar passive bo'lmaydi: *The accident was happened* ❌ → *The accident happened* ✅." },
        { t: 'check', ex: { k: 'tf', q: "*My phone was stolen by someone.* gapida **by someone** kerak.", a: false, why: "Kim ekani noma'lum — **by someone** ortiqcha: *My phone was stolen.*" } },
      ],
    },
    {
      title: "Muzeyda",
      blocks: [
        { t: 'dialog', lines: [
          { who: 'Kate', en: 'Look at this old vase! When was it made?', uz: "Mana bu eski guldonga qarang! U qachon yasalgan?" },
          { who: 'Tom', en: "The sign says it was made about two hundred years ago.", uz: "Yozuvda u taxminan ikki yuz yil oldin yasalgan deyilgan." },
          { who: 'Kate', en: 'Where was it found?', uz: 'U qayerdan topilgan?' },
          { who: 'Tom', en: "It was found near an old village. It wasn't damaged at all.", uz: "U eski qishloq yaqinidan topilgan. Umuman shikastlanmagan." },
          { who: 'Kate', en: 'And who was this picture painted by?', uz: "Bu rasmni kim chizgan?" },
          { who: 'Tom', en: 'It was painted by a famous artist. The book about him was published last year.', uz: "Uni mashhur rassom chizgan. U haqidagi kitob o'tgan yili nashr qilingan." },
          { who: 'Kate', en: "Was it translated into English?", uz: 'U ingliz tiliga tarjima qilinganmi?' },
          { who: 'Tom', en: "Yes, it was. I can buy it in the shop.", uz: "Ha, tarjima qilingan. Uni do'kondan sotib olsam bo'ladi." },
        ] },
        { t: 'check', ex: { k: 'choice', q: 'Where was the vase found?', opts: ['Near an old village.', 'In a shop.', 'In a museum.', 'In Tashkent.'], a: 0, why: "*It was found near an old village.*" } },
        { t: 'check', ex: { k: 'tf', q: 'The vase was damaged.', a: false, why: "*It wasn't damaged at all.*" } },
      ],
    },
  ],
  words: [
    { en: 'paint', uz: "rasm chizmoq, bo'yamoq", ipa: 'peɪnt', pos: 'verb', ex: 'This picture was painted by a famous artist.', exUz: "Bu rasmni mashhur rassom chizgan." },
    { en: 'design', uz: 'loyihalamoq, dizayn qilmoq', ipa: 'dɪˈzaɪn', pos: 'verb', ex: 'The bridge was designed by a young architect.', exUz: "Ko'prikni yosh arxitektor loyihalagan." },
    { en: 'destroy', uz: 'vayron qilmoq', ipa: 'dɪˈstrɔɪ', pos: 'verb', ex: 'The old house was destroyed in a fire.', exUz: "Eski uy yong'inda vayron bo'ldi." },
    { en: 'publish', uz: 'nashr qilmoq', ipa: 'ˈpʌb.lɪʃ', pos: 'verb', ex: 'The book was published in 2018.', exUz: 'Kitob 2018-yilda nashr qilingan.' },
    { en: 'translate', uz: 'tarjima qilmoq', ipa: 'trænzˈleɪt', pos: 'verb', ex: 'The story was translated into English.', exUz: 'Hikoya ingliz tiliga tarjima qilingan.' },
  ],
  practice: [
    { k: 'choice', q: 'The Eiffel Tower ___ in 1889.', opts: ['was built', 'built', 'is built', 'were built'], a: 0, why: "Aniq o'tgan vaqt + birlik → **was built**." },
    { k: 'choice', q: 'Where ___ the photos taken yesterday?', opts: ['were', 'was', 'did', 'are'], a: 0, why: "*The photos* — ko'plik, o'tgan zamon → **were**." },
    { k: 'fill', q: 'When ___ the telephone invented?', a: ['was'], uz: 'Telefon qachon ixtiro qilingan?', why: "Birlik ega + o'tgan zamon → **was**." },
    { k: 'fill', q: 'The windows ___ cleaned yesterday, so they are still dirty. (not)', a: ["weren't", 'were not'], hint: 'inkor', why: "Inkor: **weren't** + V3." },
    { k: 'order', uz: 'Bu rasm kim tomonidan chizilgan?', words: ['Who', 'was', 'this', 'picture', 'painted', 'by?'], extra: ['did', 'paint'], why: "**Who was … painted by?**" },
    { k: 'order', uz: 'Xonani Ali bo\'yadi. (passive)', words: ['The', 'room', 'was', 'painted', 'by', 'Ali.'], extra: ['were', 'paint'], why: "Active: *Ali painted the room.* → Passive: **The room was painted by Ali.**" },
    { k: 'fix', wrong: 'The letter wrote by my brother.', a: ['The letter was written by my brother.'], why: "Passive: **was + V3**; *write – wrote – written*." },
    { k: 'fix', wrong: 'Was the window broke?', a: ['Was the window broken?'], why: "Passive da **V3**: *broken*." },
    { k: 'fix', wrong: 'When did the bridge built?', a: ['When was the bridge built?'], why: "Passive savolda **did** emas, **was / were**." },
    { k: 'translate', uz: "Bu uy 1950-yilda qurilgan.", a: ['This house was built in 1950.', 'The house was built in 1950.', 'That house was built in 1950.'], why: "**was built** + aniq yil." },
    { k: 'translate', uz: 'Telefonni kim ixtiro qilgan?', a: ['Who was the telephone invented by?', 'Who was the phone invented by?', 'Who invented the telephone?', 'Who invented the phone?', 'By whom was the telephone invented?'], why: "Passive: **Who was … invented by?**; active: *Who invented …?*" },
    { k: 'match', pairs: [['paint', "rasm chizmoq, bo'yamoq"], ['design', 'loyihalamoq'], ['destroy', 'vayron qilmoq'], ['publish', 'nashr qilmoq'], ['translate', 'tarjima qilmoq']] },
    { k: 'listen', say: 'The bridge was destroyed in the war.', opts: ['The bridge was destroyed in the war.', 'The bridge is destroyed in the war.', 'The bridges were destroyed in the war.', 'The bridge destroyed in the war.'], a: 0 },
    { k: 'tf', q: "*Bell invented the telephone.* = *The telephone was invented by Bell.*", a: true, why: "Ma'no bir xil: active ↔ passive." },
    { k: 'tf', q: "*The song was wrote by her.* — to'g'ri gap.", a: false, why: "To'g'risi: *The song was written by her.*" },
    { k: 'dictation', say: 'When was this book published?', a: ['When was this book published?'], uz: 'Bu kitob qachon nashr qilingan?' },
    { k: 'speak', say: 'The book was translated into many languages.', uz: "Kitob ko'p tillarga tarjima qilingan." },
  ],
  quiz: [
    { k: 'choice', q: 'These photos ___ by my sister last year.', opts: ['were taken', 'was taken', 'took', 'are taken'], a: 0, why: "Ko'plik + o'tgan zamon → **were taken**." },
    { k: 'choice', q: '___ the museum built in 1990?', opts: ['Was', 'Were', 'Did', 'Do'], a: 0, why: "Birlik ega → **Was** + V3." },
    { k: 'choice', q: "Qaysi savol to'g'ri?", opts: ['When was the Registan built?', 'When did the Registan built?', 'When the Registan was built?', 'When was built the Registan?'], a: 0, why: "Tartib: **Wh-so'z + was + ega + V3**." },
    { k: 'fill', q: 'These cups ___ made in China. They were made in Uzbekistan. (not)', a: ["weren't", 'were not'], why: "Inkor: **weren't** made." },
    { k: 'fill', q: 'My bike ___ stolen yesterday.', a: ['was'], why: "Birlik ega + o'tgan zamon → **was stolen**." },
    { k: 'order', uz: 'Kitob 2010-yilda nashr qilingan.', words: ['The', 'book', 'was', 'published', 'in', '2010.'], extra: ['is', 'publish'], why: "**was published** + yil." },
    { k: 'translate', uz: "Bu kitob 2019-yilda ingliz tiliga tarjima qilingan.", a: ['This book was translated into English in 2019.', 'The book was translated into English in 2019.', 'In 2019 this book was translated into English.', 'It was translated into English in 2019.'], why: "**was translated into** + til." },
    { k: 'listen', say: 'Where were these shoes made?', opts: ['Where were these shoes made?', 'Where was this shoe made?', 'Where are these shoes made?', 'Where did these shoes make?'], a: 0 },
    { k: 'tf', q: "*When was the phone invented?* savolida **did** kerak.", a: false, why: "Passive savolda **was / were** ishlatiladi, **did** emas." },
    { k: 'fix', wrong: 'This carpet was maked in Bukhara.', a: ['This carpet was made in Bukhara.'], why: "make – made – **made**." },
  ],
  summary: [
    "Active → passive: to'ldiruvchi ega bo'ladi + **was / were + V3** (+ **by** + kim, kerak bo'lsa).",
    "Savol: **Was / Were + ega + V3?** *Was the window broken?* Wh-: **When was the phone invented?** — **did** kerak emas.",
    "Inkor: **wasn't / weren't + V3**. Tartibsiz fe'llarda V2 emas, **V3**: *written, broken, taken, sent*.",
    "**by** faqat ish bajaruvchi muhim bo'lsa: *painted by Leonardo*. **somebody / people** bilan yozilmaydi.",
    "Yangi so'zlar: **paint, design, destroy, publish, translate**.",
  ],
  homework: "Atrofingizdan 6 ta narsa tanlang (kitob, telefon, uy, rasm…) va har biriga 2 ta savol yozing: *When was it made / built / written? Where was it made?*. Javoblarni passive bilan yozing.",
};

export default lesson;
