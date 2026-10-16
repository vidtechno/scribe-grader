import type { Lesson } from '../../../types';

// Mini lesson (grammar): How long...? / How long ago...?, ago, for, and time words that go with Present Perfect or Past Simple.
// Builds on l1-l4 (Present Perfect, for and since, Present Perfect Continuous, Present Perfect or Past Simple).
const lesson: Lesson = {
  id: 'u18-l13',
  title: 'How long, ago and time words',
  titleUz: "How long, ago va vaqt so'zlari: to'g'ri zamonni tanlash",
  mini: true,
  kind: 'grammar',
  goal: "**How long…?** va **How long ago…?** savollarini farqlaysiz, **ago, for, since, so far, lately** kabi vaqt so'zlariga qarab **Present Perfect** yoki **Past Simple** ni tanlaysiz.",
  slides: [
    {
      title: "How long yoki how long ago?",
      blocks: [
        { t: 'p', md: "Ikkala savol ham *qancha vaqt* haqida, lekin zamonlari **butunlay boshqa**. O'zbek tilida ikkalasi ham *qachondan beri / qachon* bo'lib ketadi, shuning uchun adashish oson." },
        { t: 'table', head: ['Savol', 'Zamon', 'Javob', "Ma'nosi"], speak: [0, 2], rows: [
          ['How long have you lived here?', 'Present Perfect', "I've lived here for six years.", "Hozir ham shu yerda yashaysiz."],
          ['How long ago did you move here?', 'Past Simple', 'I moved here six years ago.', "Ko'chib kelgan payt o'tmishda."],
          ['How long have you been learning English?', 'Present Perfect Continuous', "I've been learning it since 2022.", "Hali ham o'rganyapsiz."],
        ] },
        { t: 'tip', tone: 'info', md: "**ago** faqat **Past Simple** bilan: *I met her three years ago.* **for** va **since** — davomiylik: *for three years, since 2022*, ular **Present Perfect** bilan ishlaydi." },
        { t: 'check', ex: { k: 'choice', q: "___ did you finish university?", opts: ["How long ago", "How long", "How long have", "How much"], a: 0, why: "Tugatgan payt o'tmishda → **How long ago did…?**" } },
        { t: 'check', ex: { k: 'choice', q: "How long ___ your sister worked at the hospital?", opts: ['has', 'did', 'is', 'does'], a: 0, why: "Hozir ham ishlaydi → **has … worked**." } },
      ],
    },
    {
      title: "Vaqt so'zlari qaysi zamon bilan?",
      blocks: [
        { t: 'p', md: "Gapdagi vaqt so'ziga qarab zamonni tanlang:" },
        { t: 'table', head: ['Past Simple bilan', 'Present Perfect bilan'], speak: [0, 1], rows: [
          ['I started a new job last month.', "I've started a new job recently."],
          ['We met in 2019.', "We've known each other for years."],
          ['He called me two hours ago.', "He hasn't called me today."],
          ['She lived in Leeds for two years.', "She has lived in Leeds for two years."],
        ] },
        { t: 'compare',
          good: { title: "To'g'ri", items: ["I've been very busy lately.", "So far, I've visited five countries.", "I saw that film last week."] },
          bad: { title: 'Xato', items: ["I was very busy lately.", "So far, I visit five countries.", "I've seen that film last week."] } },
        { t: 'tip', tone: 'warn', md: "Tugagan, aniq vaqt (**yesterday, last week, in 2019, ago**) → **Past Simple**. Hozirgacha davom etayotgan yoki hozirga aloqador davr (**lately, recently, so far, today, this week, for, since**) → **Present Perfect**. Oxirgi qatorga qarang: *lived … for two years* tugagan davr, *has lived … for two years* esa hozir ham yashaydi." },
        { t: 'check', ex: { k: 'fill', q: "I ___ my keys yesterday. (lose)", a: ['lost'], why: "**yesterday** → Past Simple: *lost*." } },
        { t: 'check', ex: { k: 'fill', q: "So far this year, I ___ three books. (read)", a: ['have read', "'ve read"], why: "**so far this year** hali tugamagan davr → Present Perfect." } },
      ],
    },
    {
      title: "Matn: yangi shahar, yangi hayot",
      blocks: [
        { t: 'text', title: "Moving to Manchester", voice: 'emma', en: "I moved to Manchester two years ago. I had a good job in London, but I wanted a quieter life. I have lived in my new flat for eighteen months now, and I love it. Lately I have been walking to work, so I have saved a lot of money. So far, I have made three close friends. I met the first one at a language class last spring. How long have you lived in your city? And how long ago did you decide to stay there?", uz: "Men ikki yil oldin Manchesterga ko'chib keldim. Londonda yaxshi ishim bor edi, lekin tinchroq hayot xohladim. Yangi kvartiramda o'n sakkiz oydan beri yashayman va u menga juda yoqadi. So'nggi paytda ishga piyoda boryapman, shuning uchun ko'p pul tejadim. Hozircha uchta yaqin do'st orttirdim. Birinchisi bilan o'tgan bahorda til kursida tanishdim. Siz shaharingizda qancha vaqtdan beri yashaysiz? Va shu yerda qolishga qancha vaqt oldin qaror qildingiz?" },
        { t: 'check', ex: { k: 'tf', q: "The writer still lives in Manchester.", a: true, why: "*I have lived in my new flat for eighteen months now.*" } },
        { t: 'check', ex: { k: 'choice', q: "When did the writer move to Manchester?", opts: ["Two years ago", "Eighteen months ago", "Last spring", "Last month"], a: 0, why: "*I moved to Manchester two years ago.*" } },
      ],
    },
  ],
  words: [
    { en: 'ever since', uz: 'o\'shandan beri', ipa: 'ˌev.ə ˈsɪns', pos: 'phrase', ex: 'I\'ve lived in London ever since I left university.', exUz: 'Universitetni tugatganimdan beri Londonda yashayman.' },
    { en: 'not any more', uz: 'endi emas', ipa: 'nɒt ˈen.i mɔːr', pos: 'phrase', ex: 'I haven\'t played football for years, so I don\'t play any more.', exUz: 'Men yillardan beri futbol o\'ynamaganman, endi o\'ynamayman.' },
    { en: 'these days', uz: 'hozirgi kunlarda', ipa: 'ðiːz deɪz', pos: 'phrase', ex: "These days, most people shop online.", exUz: "Hozirgi kunlarda ko'pchilik internetdan xarid qiladi." },
    { en: 'all my life', uz: "butun umr bo'yi", ipa: 'ɔːl maɪ laɪf', pos: 'phrase', ex: "I've lived in this street all my life.", exUz: "Men butun umrim shu ko'chada yashaganman." },
    { en: 'over the years', uz: "yillar davomida", ipa: 'ˈəʊ.və ðə jɪəz', pos: 'phrase', ex: "Over the years, the town has changed a lot.", exUz: "Yillar davomida shahar juda o'zgardi." },
  ],
  practice: [
    { k: 'match', pairs: [['lately', "so'nggi paytlarda"], ['so far', 'hozircha'], ['these days', 'hozirgi kunlarda'], ['all my life', "butun umr bo'yi"], ['over the years', 'yillar davomida']] },
    { k: 'choice', q: "We met ten years ___.", opts: ['ago', 'for', 'since', 'before ago'], a: 0, why: "O'tgan payt + **ago** (Past Simple bilan)." },
    { k: 'choice', q: "___ have you known your best friend?", opts: ['How long', 'How long ago', 'When have', 'How much'], a: 0, why: "Davomiylik, hozir ham tanish → **How long have you known…?**" },
    { k: 'fill', q: "How long ___ they been married? Since 2015.", a: ['have'], uz: "Ular qancha vaqtdan beri turmush qurgan?", why: "**How long have they been…?**" },
    { k: 'fill', q: "I bought this car three years ___.", a: ['ago'], uz: "Men bu mashinani uch yil oldin sotib olganman.", why: "**ago** — Past Simple bilan." },
    { k: 'choice', q: "She ___ in Leeds for two years, but now she lives in York.", opts: ['lived', 'has lived', 'has been living', 'is living'], a: 0, why: "Hozir Leedsda yashamaydi — tugagan davr → Past Simple." },
    { k: 'listen', say: 'How long ago did you start your job?', opts: ['How long ago did you start your job?', 'How long have you had your job?', 'When will you start your job?', 'How long did you start your job?'], a: 0 },
    { k: 'order', uz: "Siz bu shaharda qancha vaqtdan beri yashaysiz?", words: ['How', 'long', 'have', 'you', 'lived', 'in', 'this', 'city?'], extra: ['ago', 'did'], why: "**How long have you lived…?**" },
    { k: 'order', uz: "Siz qancha vaqt oldin ko'chib keldingiz?", words: ['How', 'long', 'ago', 'did', 'you', 'move', 'here?'], extra: ['have', 'moved'], why: "**How long ago did you move…?**" },
    { k: 'fix', wrong: "I have seen her three days ago.", a: ["I saw her three days ago."], why: "**ago** bilan Past Simple: *I saw*." },
    { k: 'fix', wrong: "I live in this town since 2018.", a: ["I have lived in this town since 2018.", "I've lived in this town since 2018.", "I have been living in this town since 2018.", "I've been living in this town since 2018."], why: "**since** bilan Present Perfect." },
    { k: 'translate', uz: "Hozircha men uchta shaharni ko'rdim.", a: ["So far, I have seen three cities.", "So far, I've seen three cities.", "I have seen three cities so far.", "I've seen three cities so far."], why: "**so far** → Present Perfect." },
    { k: 'dictation', say: 'I have been very tired lately.', a: ['I have been very tired lately.', "I've been very tired lately."] },
    { k: 'speak', say: 'How long have you lived here?', uz: "Siz bu yerda qancha vaqtdan beri yashaysiz?" },
    { k: 'speak', say: 'I moved here three years ago.', uz: "Men bu yerga uch yil oldin ko'chib kelganman." },
  ],
  quiz: [
    { k: 'choice', q: "Qaysi gap to'g'ri?", opts: ["I started this course two months ago.", "I have started this course two months ago.", "I start this course two months ago.", "I have been starting this course two months ago."], a: 0, why: "**ago** → Past Simple." },
    { k: 'choice', q: "My neighbour ___ here since last June.", opts: ["has lived", "lived", "lives", "is living"], a: 0, why: "**since** → Present Perfect." },
    { k: 'choice', q: "___ ago did the concert start?", opts: ['How long', 'How much', 'How many', 'How often'], a: 0, why: "**How long ago**." },
    { k: 'fill', q: "I haven't seen my cousin ___. Is he OK?", a: ['lately', 'recently'], why: "**lately / recently** → Present Perfect." },
    { k: 'fill', q: "Over the years, our town ___ a lot. (change)", a: ['has changed'], why: "**over the years** — hozirgacha davom etgan davr → Present Perfect." },
    { k: 'tf', q: "*I have worked here two years ago.* — to'g'ri gap.", a: false, why: "**ago** bilan *I worked*." },
    { k: 'order', uz: "U uch hafta oldin ishdan ketdi.", words: ['She', 'left', 'her', 'job', 'three', 'weeks', 'ago.'], extra: ['has', 'for'], why: "**ago** + Past Simple." },
    { k: 'translate', uz: "Siz qancha vaqtdan beri ingliz tilini o'rganyapsiz?", a: ["How long have you been learning English?", "How long have you learned English?", "How long have you been studying English?"], why: "**How long have you been learning…?**" },
  ],
  summary: [
    "**How long have you…?** — hozirgacha davom etgan davr (Present Perfect). **How long ago did you…?** — o'tmishdagi payt (Past Simple).",
    "**ago**, **yesterday**, **last week**, **in 2019** → Past Simple. **for**, **since**, **lately**, **so far**, **today** → Present Perfect.",
    "*I lived there for two years* — endi yashamaydi; *I have lived there for two years* — hali ham yashaydi.",
    "Yangi iboralar: **lately, so far, these days, all my life, over the years**.",
  ],
  homework: "Hayotingiz haqida 6 ta gap yozing: 3 tasida **ago** (Past Simple), 3 tasida **for** yoki **since** (Present Perfect). Masalan: *I started learning English two years ago. I have studied it for two years.*",
};

export default lesson;
