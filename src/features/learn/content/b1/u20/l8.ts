import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u20-l8",
  title: "Unit review: conditionals and modals",
  titleUz: "Bosqich takrori: shart gaplar va modallar",
  goal: "Bosqichdagi barcha mavzuni yangi misollarda takrorlaysiz: **first / second / third conditional**, **unless**, **wish**, **must / might / can't**, **should have** va maslahat qoliplari. Bunda o'n ta foydali so'zni ham o'rganasiz.",
  slides: [
    {
      title: "Shart gaplar: uch tur",
      blocks: [
        { t: "p", md: "Uchala shart gapni **vaziyat qanchalik real ekaniga** qarab tanlaymiz. Qoidani ketma-ket eslab chiqamiz." },
        {
          t: "table", head: ["Tur", "Shakl", "Misol"], speak: [2],
          rows: [
            ["First (real kelajak)", "If + Present, will + V1", "If it rains tomorrow, we'll stay at home."],
            ["Second (xayoliy hozir)", "If + Past, would + V1", "If I had more time, I would learn Spanish."],
            ["Third (o'tgan, o'zgarmas)", "If + Past Perfect, would have + V3", "If I had left earlier, I would have caught the bus."],
            ["Unless", "Unless = if not", "Unless you hurry, you'll be late."],
            ["As long as / provided", "faqat shart bajarilsa", "You can borrow it as long as you return it."],
          ],
        },
        { t: "tip", tone: "warn", md: "Eng ko'p xatolar: *If I will see him, I will tell him* (if dan keyin **will** yo'q), *If I would have time…* (if dan keyin **would** yo'q) va *Unless you don't hurry* (unless o'zi inkor, ikkinchi inkor kerak emas)." },
        { t: "check", ex: { k: "choice", q: "If I ___ the lottery, I would buy a house by the sea.", opts: ["won", "win", "would win", "had won"], a: 0, why: "Second conditional: if + **Past Simple**." } },
        { t: "check", ex: { k: "fill", q: "If she had studied harder, she ___ passed the exam.", a: ["would have"], why: "Third conditional: **would have** + V3." } },
      ],
    },
    {
      title: "Wish, taxmin va o'tgan zamon modallari",
      blocks: [
        { t: "p", md: "Orzu, pushaymonlik va taxmin qoliplari ham bosqichning asosiy qismi:" },
        {
          t: "table", head: ["Maqsad", "Qolip", "Misol"], speak: [2],
          rows: [
            ["Hozirgi orzu", "wish + Past Simple", "I wish I had a bigger flat."],
            ["O'tgan pushaymon", "wish + Past Perfect", "I wish I had studied medicine."],
            ["Ishonchli taxmin (ha)", "must + V1 / must have + V3", "He must be tired. He must have worked all night."],
            ["Ehtimol", "might / could + V1 / have + V3", "She might be at home. They might have missed the train."],
            ["Ishonchli taxmin (yo'q)", "can't + V1 / can't have + V3", "That can't be true. He can't have left yet."],
            ["O'tgan tanqid", "should have + V3", "You should have called me."],
            ["Keraksiz bo'lgan ish", "needn't have + V3", "We needn't have hurried."],
          ],
        },
        { t: "compare", good: { title: "To'g'ri", items: ["I wish I knew the answer.", "She must have forgotten.", "You should have told me."], }, bad: { title: "Xato", items: ["I wish I would know the answer.", "She must forgot.", "You should told me."] } },
        { t: "tip", tone: "info", md: "Wish dan keyin **bir zamon orqaga** qadam tashlanadi: hozir haqida — Past Simple, o'tgan haqida — Past Perfect. *I wish I were* (yoki *was*) — ikkalasi ham to'g'ri, *were* rasmiyroq." },
        { t: "check", ex: { k: "choice", q: "\"U uyda bo'lishi mumkin emas, chunki chiroq o'chiq.\"", opts: ["He can't be at home.", "He mustn't be at home.", "He can't to be at home.", "He mightn't at home."], a: 0, why: "Ishonchli inkor taxmin → **can't be**." } },
        { t: "check", ex: { k: "fill", q: "I wish I ___ more free time. (have)", a: ["had"], why: "Hozirgi orzu: wish + **Past Simple**." } },
      ],
    },
    {
      title: "Maslahat berish",
      blocks: [
        { t: "p", md: "Maslahat qoliplarini yana bir bor tartibga solamiz. Kuchlilik darajasi ortib boradi." },
        {
          t: "examples", items: [
            { en: "You could ask your teacher for help.", uz: "Ustozingizdan yordam so'rashingiz mumkin.", note: "Variant taklif qilish." },
            { en: "You should take a break.", uz: "Tanaffus qilganingiz ma'qul.", note: "Oddiy maslahat." },
            { en: "If I were you, I'd say sorry.", uz: "O'rningizda bo'lsam, kechirim so'rardim.", note: "Yumshoq maslahat." },
            { en: "You'd better not drive. It's very icy.", uz: "Mashina haydamagan yaxshi. Yo'l juda muzlagan.", note: "Kuchli ogohlantirish." },
          ],
        },
        { t: "tip", tone: "warn", md: "Yodda tuting: *should go* (to yo'q), *had better go* (to yo'q), *ought to go* (to bor), *I suggest you go* (you to go emas), *some advice* (an advice emas)." },
        { t: "check", ex: { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["You had better to call her.", "You'd better call her.", "You'd better calling her.", "You better to call her."], a: 1, why: "**had better** + V1, *to* yo'q." } },
      ],
    },
    {
      title: "O'qing: Dilnozaning tanlovi",
      blocks: [
        {
          t: "text", title: "Dilnoza's decision", voice: "emma",
          en: "Dilnoza has received a job offer from a company in Tashkent. It is a great opportunity, but the salary is only a little higher, and she would have to leave her family. She cannot make up her mind. \"If I stay here, I will save money,\" she thinks, \"but I might regret it later.\" Her friend Nilufar says, \"If I were you, I'd take the job, as long as you can visit home every month.\" Dilnoza sighs. \"I wish I were braver. If I had applied last year, I would not be so nervous now.\" In the end she decides to take the risk. She hopes the consequences will be good, and she is already looking forward to the first day.",
          uz: "Dilnoza Toshkentdagi kompaniyadan ish taklifi oldi. Bu ajoyib imkoniyat, lekin maosh biroz yuqoriroq, u esa oilasini tashlab ketishi kerak bo'ladi. U qaror qila olmayapti. «Agar shu yerda qolsam, pul yig'aman,» deb o'ylaydi u, «lekin keyin afsuslanishim mumkin». Do'sti Nilufar aytadi: «O'rningda bo'lsam, ishni qabul qilardim, agar har oy uyga kelib tura olsang». Dilnoza xo'rsinadi. «Qaniydi jasurroq bo'lsam. O'tgan yili ariza bergan bo'lsam, hozir bunchalik xavotirda bo'lmasdim». Oxir-oqibat u tavakkal qilishga qaror qiladi. U oqibatlar yaxshi bo'lishiga umid qiladi va allaqachon birinchi kunni intiqlik bilan kutmoqda.",
        },
        { t: "check", ex: { k: "tf", q: "Nilufar says Dilnoza should not take the job.", a: false, why: "Nilufar: *I'd take the job, as long as you can visit home every month.*" } },
        { t: "check", ex: { k: "choice", q: "Why does Dilnoza say \"If I had applied last year, I would not be so nervous now\"?", opts: ["She is thinking about a past mistake.", "She will apply next year.", "She has already applied.", "She is talking about Nilufar."], a: 0, why: "Aralash shart gap: o'tgan sabab (*had applied*) → hozirgi natija (*would not be*)." } },
      ],
    },
    {
      title: "Dialog: qiyin qaror",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Ben", en: "Have you made your decision about the course in London?", uz: "London kursi haqida qaror qildingmi?" },
            { who: "Madina", en: "Not yet. If I go, I'll improve my English, but it costs a lot.", uz: "Hali yo'q. Agar borsam, inglizchamni yaxshilayman, lekin juda qimmat." },
            { who: "Ben", en: "Unless you find a cheaper option, you'll have to pay it all yourself.", uz: "Arzonroq variant topmasang, hammasini o'zing to'lashing kerak bo'ladi." },
            { who: "Madina", en: "I wish I had saved some money last year.", uz: "Qaniydi o'tgan yili biroz pul yig'ib qo'ysam." },
            { who: "Ben", en: "You should have asked your uncle. He might have helped you.", uz: "Amakingdan so'rashing kerak edi. U yordam bergan bo'lishi mumkin edi." },
            { who: "Madina", en: "You're right. I'd better call him tonight.", uz: "To'g'ri aytasan. Yaxshisi bugun kechqurun unga qo'ng'iroq qilay." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "What does Ben think Madina should have done?", opts: ["Asked her uncle for help", "Saved money for a car", "Gone to London last year", "Found a cheaper flat"], a: 0, why: "Ben: *You should have asked your uncle.*" } },
      ],
    },
  ],
  words: [
    { en: "pay off", uz: "samara bermoq", ipa: "peɪ ɒf", pos: "phrasal verb", ex: "Her hard work finally paid off.", exUz: "Uning mehnati nihoyat o'zini oqladi." },
    { en: "effort", uz: "harakat, kuch", ipa: "ˈef.ət", pos: "noun", ex: "If you make an effort, you will improve quickly.", exUz: "Harakat qilsangiz, tez yaxshilanasiz." },
    { en: "courage", uz: "jasorat", ipa: "ˈkʌr.ɪdʒ", pos: "noun", ex: "It takes courage to change your life.", exUz: "Hayotingizni o'zgartirish uchun jasorat kerak." },
    { en: "go through", uz: "boshdan kechirmoq", ipa: "ɡəʊ θruː", pos: "phrasal verb", ex: "She has gone through a difficult time this year.", exUz: "U bu yil og'ir davrni boshdan kechirdi." },
    { en: "hold on", uz: "kutmoq, biroz sabr qilmoq", ipa: "həʊld ɒn", pos: "phrasal verb", ex: "Hold on, I need to think about it.", exUz: "Biroz kuting, bu haqda o'ylab ko'rishim kerak." },
    { en: "acknowledge", uz: "tan olmoq, e'tirof etmoq", ipa: "əkˈnɒl.ɪdʒ", pos: "verb", ex: "He acknowledged that he had made a mistake.", exUz: "U xato qilganini tan oldi." },
    { en: "hesitate", uz: "ikkilanmoq", ipa: "ˈhez.ɪ.teɪt", pos: "verb", ex: "Don't hesitate to ask if you need help.", exUz: "Yordam kerak bo'lsa, so'rashdan ikkilanmang." },
    { en: "convince", uz: "ishontirmoq", ipa: "kənˈvɪns", pos: "verb", ex: "She convinced me to try again.", exUz: "U meni yana urinib ko'rishga ishontirdi." },
    { en: "make up your mind", uz: "qaror qilmoq", ipa: "meɪk ʌp jɔː maɪnd", pos: "phrase", ex: "I can't make up my mind about the colour.", exUz: "Rang haqida qaror qila olmayapman." },
    { en: "turn down", uz: "rad etmoq", ipa: "tɜːn daʊn", pos: "phrasal verb", ex: "If I were you, I wouldn't turn down that offer.", exUz: "Sizning o'rningizda bo'lsam, bu taklifni rad etmasdim." },
  ],
  practice: [
    { k: "match", pairs: [["opportunity", "imkoniyat"], ["consequence", "oqibat"], ["risk", "xavf, tavakkal"], ["decision", "qaror"], ["option", "variant"], ["hesitate", "ikkilanmoq"]] },
    { k: "choice", q: "If it ___ tomorrow, we'll cancel the picnic.", opts: ["rains", "will rain", "rained", "would rain"], a: 0, why: "First conditional: if + **Present Simple**." },
    { k: "choice", q: "If I ___ taller, I would play basketball.", opts: ["were", "am", "will be", "had been"], a: 0, why: "Second conditional: if + Past (**were**)." },
    { k: "choice", q: "___ you leave now, you'll miss the train.", opts: ["Unless", "If not", "Provided", "As long as"], a: 0, why: "**Unless** = if … not: ketmasangiz poyezdga kech qolasiz" },
    { k: "fill", q: "If I had known, I ___ helped you. (would)", a: ["would have"], why: "Third conditional: **would have** + V3." },
    { k: "fill", q: "I wish I ___ speak French. (can)", a: ["could"], uz: "Qaniydi frantsuzcha gapira olsam.", why: "Wish + **could**." },
    { k: "fill", q: "The lights are off. They ___ be at home.", a: ["can't", "cannot", "can not"], uz: "Chiroqlar o'chiq. Ular uyda bo'lishi mumkin emas.", why: "Ishonchli inkor taxmin → **can't**." },
    { k: "fill", q: "You ___ have told me earlier! Now it's too late.", a: ["should"], why: "O'tgan tanqid: **should have** + V3." },
    { k: "order", uz: "Agar vaqtim ko'proq bo'lganida, sayohat qilgan bo'lardim.", words: ["If", "I", "had", "had", "more", "time,", "I", "would", "have", "travelled."], extra: ["will", "has"], alt: [["If", "I", "had", "had", "more", "time,", "I'd", "have", "travelled."]], why: "Third conditional: **If + had + V3, would have + V3**." },
    { k: "order", uz: "Bu qaror haqida yaxshilab o'ylashingiz kerak.", words: ["You", "should", "think", "twice", "about", "this", "decision."], extra: ["to", "must"], why: "**should** + V1." },
    { k: "translate", uz: "Qaniydi bu haqda oldinroq bilsam.", a: ["I wish I had known about this earlier.", "I wish I had known earlier.", "I wish I had known about it earlier.", "I wish I'd known about this earlier."], why: "O'tgan pushaymon: **wish + Past Perfect**." },
    { k: "translate", uz: "O'rningizda bo'lsam, bu imkoniyatni qabul qilardim.", a: ["If I were you, I'd take this opportunity.", "If I were you, I would take this opportunity.", "If I were you, I'd accept this opportunity.", "If I were you, I would accept this opportunity.", "If I was you, I'd take this opportunity."], why: "**If I were you, I'd** + V1." },
    { k: "fix", wrong: "If I will see her, I will tell her.", a: ["If I see her, I will tell her.", "If I see her, I'll tell her."], hint: "if dan keyin will bo'lmaydi", why: "First conditional: if + Present Simple." },
    { k: "fix", wrong: "She must forgot her keys at home.", a: ["She must have forgotten her keys at home.", "She must have left her keys at home."], hint: "o'tgan taxmin", why: "O'tgan taxmin: **must have** + V3." },
    { k: "tf", q: "**Unless you don't hurry, you'll be late** — bu gap to'g'ri.", a: false, why: "**unless** o'zi inkor: *Unless you hurry, you'll be late.*" },
    { k: "speak", say: "If I had more time, I would learn another language.", uz: "Vaqtim ko'proq bo'lganda, boshqa tilni o'rganardim." },
  ],
  quiz: [
    { k: "choice", q: "If she ___ harder, she would have passed the test.", opts: ["had worked", "worked", "works", "would work"], a: 0, why: "Third conditional: if + **Past Perfect**." },
    { k: "choice", q: "You can borrow my car ___ you drive carefully.", opts: ["as long as", "unless", "in case of", "although"], a: 0, why: "Shart: **as long as** (agar … bo'lsa)." },
    { k: "choice", q: "He ___ be at work. I just saw him in the park.", opts: ["can't", "must", "might", "should"], a: 0, why: "Aniq dalil bor, shuning uchun ishonchli inkor: **can't**." },
    { k: "choice", q: "I wish I ___ more patient.", opts: ["were", "will be", "would be", "am"], a: 0, why: "Hozirgi orzu: wish + **Past** (were/was)." },
    { k: "choice", q: "\"I can't make up my mind\" — bu nimani anglatadi?", opts: ["Qaror qila olmayapman.", "Fikrimni o'zgartirdim.", "Hammasini unutdim.", "Qaror qildim."], a: 0, why: "**make up your mind** — qaror qilmoq." },
    { k: "fill", q: "If it rains, we ___ stay at home. (will)", a: ["will", "'ll", "shall"], why: "First conditional: **will** + V1." },
    { k: "fill", q: "We ___ have hurried. The train was late. (keraksiz bo'lgan)", a: ["needn't", "need not"], why: "**needn't have** + V3 — keraksiz bo'lgan ish." },
    { k: "order", uz: "Yaxshisi, bugun uni chaqirganim yaxshi.", words: ["I'd", "better", "call", "him", "today."], extra: ["to", "calling"], alt: [["I", "had", "better", "call", "him", "today."]], why: "**had better** + V1." },
    { k: "fix", wrong: "If I would have time, I would help you.", a: ["If I had time, I would help you.", "If I had time, I'd help you."], hint: "if dan keyin would", why: "Second conditional: if + Past Simple." },
    { k: "fix", wrong: "He gave me an useful advice.", a: ["He gave me some useful advice.", "He gave me useful advice.", "He gave me a useful piece of advice."], hint: "advice sanalmaydi", why: "**advice** sanalmaydigan ot, *a/an* bilan kelmaydi." },
  ],
  summary: [
    "Shart gaplar: **first** (If + Present, will), **second** (If + Past, would), **third** (If + Past Perfect, would have + V3). **unless** = *if … not*.",
    "**wish + Past Simple** — hozirgi orzu, **wish + Past Perfect** — o'tgan pushaymon.",
    "Taxmin: **must** (ishonchli ha), **might** (ehtimol), **can't** (ishonchli yo'q); o'tgan zamonda: **must have + V3**. Tanqid: **should have + V3**.",
    "Maslahat: **should, ought to, had better, If I were you**; fe'ldan oldin *to* faqat **ought** dan keyin keladi.",
  ],
  homework: "Bosqich mavzularidan har biri bo'yicha bittadan o'zingizga tegishli gap yozing: first, second, third conditional, wish, must/can't, should have va maslahat. Jami 7 ta gap.",
};

export default lesson;
