import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u17-l1",
  title: "Like doing or want to do?",
  titleUz: "Fe'l qolipi: like doing, want to do",
  goal: "Ikki fe'l ketma-ket kelganda **-ing** yoki **to + V1** ni to'g'ri tanlaysiz: **enjoy swimming**, **want to go**, **would like to ask**. Shuningdek **Let's…**, **Why don't we…?**, **How about…?** bilan taklif qilishni o'rganasiz va *I like swim*, *I want go*, *enjoy to* kabi xatolardan qutulasiz.",
  slides: [
    {
      title: "Ikkinchi fe'l qanday shaklda bo'ladi?",
      blocks: [
        { t: "p", md: "O'zbekchada ikki fe'lni yonma-yon aytish oson: *suzishni yaxshi ko'raman, bormoqchiman*. Inglizchada esa birinchi fe'lga qarab **ikkinchi fe'lning shakli o'zgaradi**. Uchta asosiy qolip bor:" },
        {
          t: "table", head: ["Qolip", "Qaysi fe'llardan keyin", "Misol"], speak: [2],
          rows: [
            ["fe'l + **-ing**", "enjoy, finish, stop, practise, like, love, hate, prefer", "I enjoy swimming."],
            ["fe'l + **to + V1**", "want, need, hope, decide, plan, promise, refuse, would like", "I want to swim."],
            ["fe'l + **V1** (to'siz)", "can, must, should, will, let's", "I can swim. Let's swim!"],
          ],
        },
        { t: "tip", tone: "info", md: "Hozircha shunday eslang: **enjoy / finish / stop / practise** + **-ing**; **want / need / hope / decide / plan** + **to**. Ba'zi fe'llar (*like, love, hate, prefer*) ikkala qolipni ham qabul qiladi — bu haqida keyingi slaydlarda." },
        { t: "check", ex: { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["I want go home.", "I want going home.", "I want to go home.", "I want to going home."], a: 2, why: "**want** + **to + V1**: *I want **to go** home.*" } },
      ],
    },
    {
      title: "like, love, hate, enjoy + -ing",
      blocks: [
        { t: "p", md: "Biror ishni **umuman** yoqtirsak yoki yoqtirmasak (odat, umumiy yoqtirish), fe'ldan keyin **-ing** ishlatamiz. **enjoy** dan keyin **faqat -ing** keladi." },
        {
          t: "examples", items: [
            { en: "I love cooking plov on Sundays.", uz: "Yakshanba kunlari palov pishirishni yaxshi ko'raman." },
            { en: "My brother hates getting up early.", uz: "Akam erta turishni yomon ko'radi." },
            { en: "Do you enjoy learning English?", uz: "Ingliz tili o'rganishdan zavqlanasizmi?" },
            { en: "I prefer walking to driving.", uz: "Men mashina haydashdan ko'ra piyoda yurishni afzal ko'raman.", note: "**prefer A to B** — B ning o'rniga A ni afzal ko'rmoq." },
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I like swimming.", "She enjoys reading.", "We finished eating at nine.", "He doesn't like waiting."] },
          bad: { title: "Xato", items: ["I like swim.", "She enjoys to read.", "We finished eat at nine.", "He doesn't like wait."] },
        },
        { t: "tip", tone: "warn", md: "Uzbek tilida \"suzishni yoqtiraman\" deymiz va fe'l o'zgarmaydi, shuning uchun *I like swim* deb yuborish juda keng tarqalgan xato. Inglizchada ikkinchi fe'lga **-ing** qo'shing: *swim → swimming, cook → cooking, run → running* (oxirgi undosh ikkilanadi), *make → making* (**e** tushadi)." },
        { t: "check", ex: { k: "fill", q: "Laylo enjoys ___ pictures. (take)", a: ["taking"], why: "**enjoy** + -ing; *take* → *taking* (e tushadi)." } },
      ],
    },
    {
      title: "want, need, hope, decide + to",
      blocks: [
        { t: "p", md: "Kelajak, niyat, istak, qaror haqida gapirganda **to + V1** ishlatamiz. Bu fe'llar odatda kelajakka qaragan: nimadir **qilmoqchi**, **kerak**, **umid** qilamiz yoki **qaror** qilamiz." },
        {
          t: "table", head: ["Fe'l", "Misol", "Ma'nosi"], speak: [1],
          rows: [
            ["want to", "I want to visit Bukhara.", "Buxoroga bormoqchiman."],
            ["need to", "You need to buy a ticket.", "Chipta olishingiz kerak."],
            ["hope to", "We hope to see you soon.", "Tez orada ko'rishishga umid qilamiz."],
            ["decide to", "Aziz decided to learn English.", "Aziz ingliz tilini o'rganishga qaror qildi."],
            ["plan to", "They plan to buy a flat.", "Ular kvartira sotib olishni rejalashtiryapti."],
            ["promise to", "I promise to call you.", "Qo'ng'iroq qilishga va'da beraman."],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I want to go home.", "She needs to study.", "I hope to pass the exam.", "He decided to stay."] },
          bad: { title: "Xato", items: ["I want go home.", "She needs study.", "I hope pass the exam.", "He decided staying."] },
        },
        { t: "tip", tone: "warn", md: "**want** dan keyin hech qachon \"to\" tushib qolmasin: *I want **to** go.* Shuningdek *I want that you come* (\"sen kelishingni xohlayman\") deb ham bo'lmaydi — to'g'risi: *I want **you to come**.*" },
        { t: "check", ex: { k: "choice", q: "Kamol ___ a new job next year.", opts: ["hopes finding", "hopes to find", "hopes find", "hope to finding"], a: 1, why: "**hope** + **to + V1**; *Kamol* = he → **hopes**." } },
      ],
    },
    {
      title: "like doing yoki would like to do?",
      blocks: [
        { t: "p", md: "Bu ikki ibora o'xshash ko'rinadi, lekin ma'nosi boshqacha:" },
        {
          t: "table", head: ["Ibora", "Ma'nosi", "Misol"], speak: [2],
          rows: [
            ["like + **-ing**", "umuman yoqtirish (odat, umumiy)", "I like swimming. (Suzishni yaxshi ko'raman.)"],
            ["would like + **to + V1**", "hozir yoki yaqinda xohlash (muloyim)", "I'd like to swim today. (Bugun suzgim kelyapti.)"],
          ],
        },
        {
          t: "examples", items: [
            { en: "Would you like to have some tea?", uz: "Choy ichasizmi? (muloyim taklif)" },
            { en: "I'd like to ask you a question.", uz: "Sizga bir savol bermoqchiman." },
            { en: "I'd like a glass of water, please.", uz: "Bir stakan suv bering, iltimos.", note: "**would like** dan keyin ot ham kelishi mumkin." },
            { en: "Do you like drinking tea? — Yes, I do.", uz: "Choy ichishni yoqtirasizmi? — Ha." },
          ],
        },
        { t: "tip", tone: "info", md: "**I'd like** = **I would like**. Bu **I want** dan ancha muloyim: kafe, do'kon, mehmonxonada doim *I'd like…* deng. *I want a coffee* — qo'pol eshitilishi mumkin." },
        { t: "tip", tone: "info", md: "**stop** ikkala qolipda ham keladi, ma'nosi farq qiladi: *He **stopped smoking*** = chekishni tashladi; *He **stopped to buy** bread* = non olish uchun to'xtadi." },
        { t: "check", ex: { k: "choice", q: "Kafeda ofitsiantga qanday aytasiz?", opts: ["I want a coffee.", "I'd like a coffee, please.", "Give me coffee.", "I like to coffee."], a: 1, why: "Muloyim iltimos → **I'd like…, please.**" } },
      ],
    },
    {
      title: "Taklif qilish: Let's, Why don't we, How about",
      blocks: [
        { t: "p", md: "Do'stlarga birga biror ish qilishni taklif qilishning uch oddiy yo'li bor. Ular turli qolip bilan keladi — diqqat qiling:" },
        {
          t: "table", head: ["Ibora", "Keyin nima keladi", "Misol"], speak: [2],
          rows: [
            ["Let's", "V1", "Let's go to the chaikhana."],
            ["Why don't we", "V1", "Why don't we watch a film?"],
            ["Shall we", "V1", "Shall we take a taxi?"],
            ["How about", "-ing", "How about going to the park?"],
          ],
        },
        {
          t: "dialog", lines: [
            { who: "Dilnoza", en: "I'm bored. What shall we do?", uz: "Zerikdim. Nima qilamiz?" },
            { who: "Aziz", en: "Let's go for a walk in the park.", uz: "Keling, parkda sayr qilamiz." },
            { who: "Dilnoza", en: "It's too hot. How about going to the cinema?", uz: "Juda issiq. Kinoga borsak-chi?" },
            { who: "Aziz", en: "Good idea! Why don't we ask Kamol too?", uz: "Yaxshi fikr! Kamolni ham chaqirsak-chi?" },
            { who: "Dilnoza", en: "Great. I'll call him now.", uz: "Zo'r. Hozir qo'ng'iroq qilaman." },
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["Let's go.", "Why don't we go?", "How about going?"] },
          bad: { title: "Xato", items: ["Let's to go.", "Why don't we to go?", "How about go?"] },
        },
        { t: "check", ex: { k: "fill", q: "How about ___ to the market? (go)", a: ["going"], why: "**How about** + -ing." } },
        { t: "check", ex: { k: "choice", q: "Qaysi taklif to'g'ri?", opts: ["Let's playing football.", "Let's play football.", "Let's to play football.", "Let's plays football."], a: 1, why: "**Let's** + V1." } },
      ],
    },
    {
      title: "O'qing: Hafta oxiri rejalari",
      blocks: [
        {
          t: "text", title: "Weekend plans",
          en: "Laylo and her brother Kamol have different ideas about the weekend. Laylo loves going out. She enjoys visiting museums and she wants to see the new exhibition in Tashkent. Kamol hates getting up early on Saturdays. He prefers staying at home and playing computer games.\nOn Friday evening Laylo says, \"Why don't we go to the museum together? Afterwards we can have lunch in a chaikhana.\" Kamol thinks about it. He decides to go, because he's hungry and he'd like to eat real plov. \"OK,\" he says, \"but I need to sleep until nine!\"\nLaylo promises to wake him at nine, not earlier. They both look forward to the day.",
          uz: "Laylo va uning akasi Kamolning dam olish kunlari haqida fikrlari har xil. Laylo tashqariga chiqishni yaxshi ko'radi. U muzeylarga borishdan zavqlanadi va Toshkentdagi yangi ko'rgazmani ko'rishni xohlaydi. Kamol shanba kunlari erta turishni yomon ko'radi. U uyda qolib, kompyuter o'ynashni afzal ko'radi.\nJuma kuni kechqurun Laylo aytadi: \"Nega muzeyga birga bormaymiz? Keyin choyxonada tushlik qilamiz.\" Kamol o'ylab ko'radi. U borishga qaror qiladi, chunki qorni och va haqiqiy palov yegisi bor. \"Mayli,\" deydi u, \"lekin to'qqizgacha uxlashim kerak!\"\nLaylo uni to'qqizda uyg'otishga va'da beradi, undan erta emas. Ikkalasi ham shu kunni intiqlik bilan kutadi.",
        },
        { t: "check", ex: { k: "tf", q: "Kamol enjoys getting up early on Saturdays.", a: false, why: "*Kamol **hates** getting up early on Saturdays.*" } },
        { t: "check", ex: { k: "choice", q: "Why does Kamol decide to go?", opts: ["He loves museums.", "He is hungry and wants plov.", "He wants to get up early.", "He has a new computer game."], a: 1, why: "*Because he's hungry and he'd like to eat real plov.*" } },
      ],
    },
  ],
  words: [
    { en: "enjoy", uz: "zavqlanmoq, yoqtirmoq", ipa: "ɪnˈdʒɔɪ", pos: "verb", ex: "I enjoy walking in the evening.", exUz: "Kechqurun sayr qilishdan zavqlanaman." },
    { en: "hate", uz: "yomon ko'rmoq", ipa: "heɪt", pos: "verb", ex: "She hates waiting for the bus.", exUz: "U avtobus kutishni yomon ko'radi." },
    { en: "hope", uz: "umid qilmoq", ipa: "həʊp", pos: "verb", ex: "We hope to travel next summer.", exUz: "Kelasi yoz sayohat qilishga umid qilamiz." },
    { en: "decide", uz: "qaror qilmoq", ipa: "dɪˈsaɪd", pos: "verb", ex: "I decided to learn English.", exUz: "Ingliz tilini o'rganishga qaror qildim." },
    { en: "plan", uz: "rejalashtirmoq", ipa: "plæn", pos: "verb", ex: "They plan to open a café.", exUz: "Ular kafe ochishni rejalashtiryapti." },
    { en: "prefer", uz: "afzal ko'rmoq", ipa: "prɪˈfɜː", pos: "verb", ex: "I prefer tea to coffee.", exUz: "Men kofedan ko'ra choyni afzal ko'raman." },
    { en: "finish", uz: "tugatmoq", ipa: "ˈfɪnɪʃ", pos: "verb", ex: "I finished reading the book.", exUz: "Kitobni o'qib tugatdim." },
    { en: "practise", uz: "mashq qilmoq", ipa: "ˈpræktɪs", pos: "verb", ex: "You should practise speaking every day.", exUz: "Har kuni gapirishni mashq qilishingiz kerak." },
    { en: "refuse", uz: "rad etmoq, ko'nmaslik", ipa: "rɪˈfjuːz", pos: "verb", ex: "He refused to help us.", exUz: "U bizga yordam berishdan bosh tortdi." },
    { en: "promise", uz: "va'da bermoq", ipa: "ˈprɒmɪs", pos: "verb", ex: "I promise to call you tonight.", exUz: "Bugun kechqurun qo'ng'iroq qilishga va'da beraman." },
  ],
  practice: [
    { k: "match", pairs: [["I enjoy cooking.", "Ovqat pishirishdan zavqlanaman."], ["I want to cook.", "Ovqat pishirmoqchiman."], ["I hate cooking.", "Ovqat pishirishni yomon ko'raman."], ["I decided to cook.", "Ovqat pishirishga qaror qildim."], ["I'd like to cook.", "Ovqat pishirgim kelyapti (muloyim)."]] },
    { k: "listen", say: "I'd like to visit Samarkand next month.", opts: ["I like visiting Samarkand every month.", "I'd like to visit Samarkand next month.", "I visited Samarkand last month."], a: 1 },
    { k: "listen", say: "How about going to the cinema?", opts: ["How about go to the cinema?", "How about going to the cinema?", "How about to go to the cinema?"], a: 1 },
    { k: "choice", q: "She enjoys ___ plov for her family.", opts: ["cook", "to cook", "cooking", "cooked"], a: 2, why: "**enjoy** + -ing." },
    { k: "choice", q: "We decided ___ a taxi.", opts: ["taking", "take", "to take", "took"], a: 2, why: "**decide** + **to + V1**." },
    { k: "fill", q: "I want ___ a new phone. (buy)", a: ["to buy"], why: "**want** + to + V1." },
    { k: "fill", q: "He finished ___ his homework at nine. (do)", a: ["doing"], why: "**finish** + -ing." },
    { k: "fill", q: "Why don't we ___ to the park? (go)", a: ["go"], why: "**Why don't we** + V1." },
    { k: "fill", q: "I'm tired. I'd like ___ home. (go)", a: ["to go"], why: "**would like** + to + V1." },
    { k: "tf", q: "**She enjoys to swim.** — to'g'ri gap.", a: false, why: "**enjoy** dan keyin faqat -ing: *She enjoys **swimming**.*" },
    { k: "tf", q: "**Let's go to the cinema.** — to'g'ri gap.", a: true, why: "**Let's** + V1." },
    { k: "order", uz: "Men kitob o'qishni yoqtiraman.", words: ["I", "like", "reading", "books."], extra: ["to", "read"], alt: [["I", "like", "to", "read", "books."]] },
    { k: "order", uz: "Nega ertaga choyxonaga bormaymiz?", words: ["Why", "don't", "we", "go", "to", "the", "chaikhana", "tomorrow?"], extra: ["going", "to go"] },
    { k: "translate", uz: "Men ingliz tilini o'rganmoqchiman.", a: ["I want to learn English.", "I'd like to learn English.", "I would like to learn English.", "I want to study English.", "I'd like to study English.", "I would like to study English."] },
    { k: "translate", uz: "U (qiz) suzishni yoqtirmaydi.", a: ["She doesn't like swimming.", "She does not like swimming.", "She doesn't like to swim.", "She does not like to swim."] },
    { k: "speak", say: "I enjoy cooking, but I hate washing up.", uz: "Ovqat pishirishni yoqtiraman, lekin idish yuvishni yomon ko'raman." },
  ],
  quiz: [
    { k: "choice", q: "Qaysi gap **to'g'ri**?", opts: ["I enjoy to read.", "I enjoy reading.", "I enjoy read.", "I enjoy reads."], a: 1, why: "**enjoy** + -ing." },
    { k: "choice", q: "He hopes ___ the exam.", opts: ["passing", "pass", "to pass", "pass to"], a: 2, why: "**hope** + to + V1." },
    { k: "choice", q: "\"U bizga yordam berishdan bosh tortdi.\"", opts: ["He refused helping us.", "He refused to help us.", "He refused help us.", "He refused helped us."], a: 1, why: "**refuse** + to + V1." },
    { k: "choice", q: "How about ___ a film tonight?", opts: ["watch", "to watch", "watching", "watched"], a: 2, why: "**How about** + -ing." },
    { k: "fill", q: "My sister practises ___ the piano every day. (play)", a: ["playing"], why: "**practise** + -ing." },
    { k: "fill", q: "We need ___ more bread. (buy)", a: ["to buy"], why: "**need** + to + V1." },
    { k: "fill", q: "Let's ___ a taxi. (take)", a: ["take"], why: "**Let's** + V1." },
    { k: "listen", say: "She promised to call me tonight.", opts: ["She promised to call me tonight.", "She promised calling me tonight.", "She promises to call me tonight."], a: 0 },
    { k: "tf", q: "**I want that you help me** — to'g'ri gap.", a: false, why: "To'g'risi: *I want **you to help** me.*" },
    { k: "order", uz: "Akam erta turishni yomon ko'radi.", words: ["My", "brother", "hates", "getting", "up", "early."], extra: ["get", "to"], alt: [["My", "brother", "hates", "to", "get", "up", "early."]] },
    { k: "translate", uz: "Kinoga borsak-chi?", a: ["How about going to the cinema?", "Why don't we go to the cinema?", "Let's go to the cinema.", "Shall we go to the cinema?"] },
  ],
  summary: [
    "**enjoy, finish, stop, practise** + **-ing**: *I enjoy swimming.* Hech qachon *enjoy to swim* emas.",
    "**want, need, hope, decide, plan, promise** + **to + V1**: *I want to go.* \"to\" ni tushirib qoldirmang.",
    "**like, love, hate, prefer** + -ing — umumiy yoqtirish; **would like to + V1** — hozirgi yoki yaqin istak va muloyim iltimos.",
    "Taklif: **Let's / Why don't we / Shall we + V1**, **How about + -ing**.",
  ],
  homework: "O'zingiz haqingizda 8 ta gap yozing: 3 tasi **I like / love / hate + -ing** (hobbilar), 3 tasi **I want / hope / plan / need + to** (kelajak rejalari), 2 tasi **I'd like to…** (hozirgi istak). Keyin do'stingizga 3 ta taklif yozing: *Let's…, Why don't we…?, How about…?*",
};

export default lesson;
