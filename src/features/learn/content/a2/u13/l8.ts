import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u13-l8",
  title: "Unit review: the future",
  titleUz: "Bosqich takrori: kelajak",
  goal: "Bosqichdagi barcha mavzuni takrorlaysiz: **going to**, **will / won't**, **will yoki going to + shall**, **Present Continuous (reja)**, **may / might**, **birinchi shart gap** va **taklif qilish / qabul qilish / rad etish**. Kelajak haqida erkin va to'g'ri gapira olasiz.",
  slides: [
    {
      title: "1) Going to: reja va dalil",
      blocks: [
        {
          t: "table", head: ["Shakl", "Misol", "Qachon"], speak: [1],
          rows: [
            ["am / is / are + going to + V1", "I'm going to study medicine.", "oldindan qilingan reja"],
            ["Inkor", "She isn't going to come.", "—"],
            ["Savol", "Are you going to book a hotel?", "—"],
            ["It's going to + V1", "Look at the clouds! It's going to rain.", "hozir ko'rinib turgan dalil"],
          ],
        },
        { t: "tip", tone: "warn", md: "**Do / does** ishlatmang: *Do you going to…?* ❌ → **Are you going to…?** ✅. Doim **going to + V1**." },
        { t: "check", ex: { k: "choice", q: "\"Biz kelasi yil ko'chib o'tishni rejalashtirganmiz.\"", opts: ["We going to move next year.", "We are going to move next year.", "We are going to moving next year.", "We do going to move next year."], a: 1 } },
      ],
    },
    {
      title: "2) Will / won't",
      blocks: [
        {
          t: "table", head: ["Vazifa", "Misol"], speak: [1],
          rows: [
            ["Shu zahoti qaror", "The phone is ringing. I'll answer it."],
            ["Va'da", "I won't tell anyone. I promise."],
            ["Taklif", "That bag looks heavy. I'll carry it."],
            ["Fikr / taxmin", "I think it will be hot. / I don't think it will rain."],
          ],
        },
        { t: "tip", tone: "info", md: "**will + V1** — hamma egalar bilan bir xil, **to** va **-s** yo'q: *She will come* ✅, *She wills to come* ❌. Inkor fikr: **I don't think … will**." },
        { t: "check", ex: { k: "fill", q: "It's cold in here. — OK, I ___ close the window.", a: ["will", "'ll"], why: "Shu zahoti qaror → **I'll close**." } },
      ],
    },
    {
      title: "3) Will yoki going to? Shall",
      blocks: [
        {
          t: "table", head: ["", "going to", "will"],
          rows: [
            ["Qaror", "oldindan qilingan", "shu zahoti"],
            ["Taxmin", "dalil bor", "fikr, ishonch"],
            ["Misol", "I've booked the tickets. We're going to fly.", "Hmm, it's late. I'll take a taxi."],
          ],
        },
        {
          t: "table", head: ["Qolip", "Misol"], speak: [1],
          rows: [
            ["Shall I + V1?", "Shall I open the window?"],
            ["Shall we + V1?", "Shall we go to the cinema?"],
          ],
        },
        { t: "tip", tone: "warn", md: "**Shall** faqat **I / we** bilan. **will going to** deb aralashtirmang — faqat bittasi." },
        { t: "check", ex: { k: "choice", q: "**I've already decided. I ___ become a pilot.**", opts: ["will to", "am going to", "shall", "going to"], a: 1 } },
      ],
    },
    {
      title: "4) Present Continuous: kelishilgan reja",
      blocks: [
        {
          t: "table", head: ["Reja turi", "Misol", "Eslatma"], speak: [1],
          rows: [
            ["Shaxsiy kelishuv", "I'm meeting Laylo at six.", "am / is / are + V-ing + vaqt"],
            ["Jadval, dastur", "The train leaves at 8:15.", "Present Simple"],
            ["Taxmin, ob-havo", "It's going to snow.", "Present Continuous emas"],
          ],
        },
        { t: "tip", tone: "info", md: "Vaqt iborasi (*tonight, on Friday, next week*) bo'lsa va boshqa odam bilan kelishilgan bo'lsa — **Present Continuous**." },
        { t: "check", ex: { k: "tf", q: "**I'm having lunch with Aziz on Friday** — kelishilgan reja.", a: true } },
      ],
    },
    {
      title: "5) May / might",
      blocks: [
        {
          t: "table", head: ["Ishonch", "Misol"], speak: [1],
          rows: [
            ["Aniq", "I'll definitely be there."],
            ["Ehtimol", "I might go to Khiva. / It may rain."],
            ["Ehtimol emas", "She may not come. / We might not have time."],
          ],
        },
        { t: "tip", tone: "warn", md: "**may / might + V1**, **to** va **-s** yo'q. Inkor: **may not / might not** (*mayn't* yo'q). **Maybe** (gap boshida) va **may be** (fe'l) farqiga e'tibor bering." },
        { t: "check", ex: { k: "choice", q: "\"Balki u uyda emasdir.\"", opts: ["He maybe is not at home.", "He may not be at home.", "He may not to be at home.", "He mights not be at home."], a: 1 } },
      ],
    },
    {
      title: "6) Birinchi shart gap",
      blocks: [
        {
          t: "table", head: ["Qism", "Qolip", "Misol"], speak: [2],
          rows: [
            ["Shart (if)", "If + Present Simple", "If it rains,"],
            ["Natija", "will + V1", "we'll stay home."],
            ["Unless", "= if … not", "Unless you hurry, you'll be late."],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["If she calls, I'll answer.", "If you don't hurry, you'll miss it."] },
          bad: { title: "Xato", items: ["If she will call, I answer.", "If you won't hurry, you'll miss it."] },
        },
        { t: "check", ex: { k: "fill", q: "If he ___ early, we'll start at six. (come)", a: ["comes"], why: "If-qismda Present Simple, **he comes**." } },
      ],
    },
    {
      title: "7) Reja tuzish iboralari",
      blocks: [
        {
          t: "table", head: ["Vazifa", "Misol"], speak: [1],
          rows: [
            ["Taklif", "Would you like to come to my party? / Why don't we go out? / How about going to the park?"],
            ["Qabul", "I'd love to! / That sounds great!"],
            ["Rad etish", "Thanks for asking, but I'm afraid I can't. Maybe another time?"],
            ["Kelishish", "What time shall we meet? — Let's meet at seven."],
          ],
        },
        { t: "tip", tone: "good", md: "**Would you like to + V1**, **Why don't we + V1**, **How about + V-ing**, **Let's + V1** — keyingi shakl har xil, shuni eslab qoling." },
        { t: "check", ex: { k: "fill", q: "How about ___ to the cinema? (go)", a: ["going"] } },
      ],
    },
    {
      title: "O'qing: Kamolning bitiruv bayrami",
      blocks: [
        {
          t: "text", title: "Kamol's big month",
          en: "Kamol is going to graduate from university in June. He has a lot of plans. Next week he is meeting the manager of a company in Tashkent because he wants a job there. He is nervous. \"If I get the job, I'll celebrate with my family,\" he says. \"I might move to a new flat, or I may stay with my parents for a while.\"\nHis sister Dilnoza is organising a surprise party for him. Ten friends are arriving at seven on Saturday. \"Shall I bring the cake?\" asks Laylo. \"Yes, please!\" says Dilnoza. \"But don't tell Kamol. I think he'll be very happy!\"",
          uz: "Kamol iyun oyida universitetni bitirmoqchi. Uning rejalari ko'p. Kelasi hafta u Toshkentdagi kompaniya rahbari bilan uchrashadi, chunki o'sha yerda ishlamoqchi. U hayajonda. \"Agar ishga qabul qilinsam, oilam bilan nishonlayman,\" deydi u. \"Yangi kvartiraga ko'chib o'tishim mumkin yoki ota-onamnikida biroz turarman.\"\nSinglisi Dilnoza unga syurpriz ziyofat uyushtirmoqda. O'nta do'st shanba kuni soat yettida keladi. \"Tort olib kelaymi?\" deb so'raydi Laylo. \"Ha, iltimos!\" deydi Dilnoza. \"Lekin Kamolga aytma. Menimcha, juda xursand bo'ladi!\"",
        },
        { t: "check", ex: { k: "choice", q: "What will Kamol do if he gets the job?", opts: ["Celebrate with his family.", "Go to Moscow.", "Stay at university.", "Cancel the party."], a: 0 } },
        { t: "check", ex: { k: "tf", q: "Kamol knows about the surprise party.", a: false, why: "*Don't tell Kamol* — bu syurpriz." } },
      ],
    },
    {
      title: "Dialog: bayramga taklif",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Dilnoza", en: "Aziz, would you like to come to Kamol's surprise party on Saturday?", uz: "Aziz, shanba kuni Kamolning syurpriz ziyofatiga kelishni xohlaysanmi?" },
            { who: "Aziz", en: "I'd love to, but I might have to work. Can I tell you tomorrow?", uz: "Xursand bo'lardim-u, ishlashimga to'g'ri kelishi mumkin. Ertaga ayta olamanmi?" },
            { who: "Dilnoza", en: "Of course. If you can come, we're meeting at seven outside the metro.", uz: "Albatta. Kela olsang, soat yettida metro oldida uchrashamiz." },
            { who: "Aziz", en: "OK. Shall I bring some drinks?", uz: "Mayli. Ichimliklar olib kelaymi?" },
            { who: "Dilnoza", en: "Yes, please! I think it's going to be a great party.", uz: "Ha, iltimos! Menimcha, zo'r ziyofat bo'ladi." },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Aziz is sure he can come.", a: false, why: "*I might have to work* — aniq emas." } },
      ],
    },
  ],
  words: [
    { en: "expect", uz: "kutmoq, umid qilmoq", ipa: "ɪkˈspekt", pos: "verb", ex: "I expect it will be a great day.", exUz: "Ajoyib kun bo'ladi deb o'ylayman." },
    { en: "prepare", uz: "tayyorlamoq; tayyorlanmoq", ipa: "prɪˈpeə", pos: "verb", ex: "She is preparing for the exam.", exUz: "U imtihonga tayyorlanyapti." },
    { en: "schedule", uz: "jadval, reja", ipa: "ˈʃedjuːl", pos: "noun", ex: "I have a busy schedule this week.", exUz: "Bu hafta jadvalim band." },
    { en: "deadline", uz: "oxirgi muddat", ipa: "ˈdedlaɪn", pos: "noun", ex: "The deadline is on Friday.", exUz: "Oxirgi muddat juma kuni." },
    { en: "celebrate", uz: "nishonlamoq", ipa: "ˈselɪbreɪt", pos: "verb", ex: "We're going to celebrate his birthday.", exUz: "Uning tug'ilgan kunini nishonlaymiz." },
    { en: "graduate", uz: "(universitetni) bitirmoq", ipa: "ˈɡrædʒueɪt", pos: "verb", ex: "She will graduate next year.", exUz: "U kelasi yil bitiradi." },
    { en: "surprise", uz: "syurpriz; hayratga solmoq", ipa: "səˈpraɪz", pos: "noun/verb", ex: "It's a surprise party.", exUz: "Bu syurpriz ziyofat." },
    { en: "arrive", uz: "yetib kelmoq", ipa: "əˈraɪv", pos: "verb", ex: "We arrive in Samarkand at noon.", exUz: "Samarqandga tushda yetib boramiz." },
    { en: "apply for", uz: "(ishga) topshirmoq, murojaat qilmoq", ipa: "əˈplaɪ fɔː", pos: "phrasal verb", ex: "He is going to apply for a job.", exUz: "U ishga ariza bermoqchi." },
    { en: "get ready", uz: "tayyorlanmoq", ipa: "ɡet ˈredi", pos: "phrase", ex: "I'm getting ready for the trip.", exUz: "Sayohatga tayyorlanyapman." },
  ],
  practice: [
    { k: "match", pairs: [["schedule", "jadval"], ["deadline", "oxirgi muddat"], ["celebrate", "nishonlamoq"], ["graduate", "bitirmoq"], ["arrive", "yetib kelmoq"]] },
    { k: "listen", say: "We're meeting at seven outside the metro.", opts: ["We're meeting at seven outside the metro.", "We met at seven outside the metro.", "We meet at seven outside the metro."], a: 0 },
    { k: "listen", say: "If I get the job, I'll celebrate.", opts: ["If I get the job, I'll celebrate.", "If I got the job, I'd celebrate.", "If I will get the job, I celebrate."], a: 0 },
    { k: "fill", q: "Look at the sky! It ___ going to rain.", a: ["is", "'s"] },
    { k: "fill", q: "If it rains, we ___ stay at home.", a: ["will", "'ll"] },
    { k: "fill", q: "___ you hurry, you'll miss the bus. (agar ... bo'lmasa)", a: ["Unless"] },
    { k: "fill", q: "Would you like ___ come to my party?", a: ["to"] },
    { k: "choice", q: "**I've bought the tickets. We ___ to Khiva on Friday.**", opts: ["will fly", "are going to fly", "fly will", "going to fly"], a: 1 },
    { k: "choice", q: "**___ we meet at six?**", opts: ["Will", "Shall", "Do", "Might"], a: 1 },
    { k: "choice", q: "Qaysi gap **ehtimol** bildiradi?", opts: ["I will go to Bukhara.", "I might go to Bukhara.", "I'm going to Bukhara.", "I went to Bukhara."], a: 1 },
    { k: "tf", q: "**If it will rain, we'll stay home** — to'g'ri gap.", a: false, why: "To'g'ri: **If it rains, we'll stay home.**" },
    { k: "tf", q: "**She may be late** = **Maybe she is late**.", a: true },
    { k: "order", uz: "U dushanba kuni Dubayga uchadi.", words: ["She", "is", "flying", "to", "Dubai", "on", "Monday."], extra: ["going", "fly"], alt: [["She's", "flying", "to", "Dubai", "on", "Monday."], ["On", "Monday", "she", "is", "flying", "to", "Dubai."]] },
    { k: "translate", uz: "Menimcha, ertaga yomg'ir yog'maydi.", a: ["I don't think it will rain tomorrow.", "I don't think it'll rain tomorrow."] },
    { k: "translate", uz: "Soyabon olib kelaymi?", a: ["Shall I bring an umbrella?", "Shall I bring the umbrella?", "Shall I bring your umbrella?", "Shall I bring umbrella?"] },
    { k: "speak", say: "I'm afraid I can't come, but maybe another time.", uz: "Afsuski, kela olmayman, lekin boshqa safar bo'lar." },
  ],
  quiz: [
    { k: "choice", q: "**Look at those clouds! It ___.**", opts: ["rains", "is going to rain", "will to rain", "is rain"], a: 1 },
    { k: "choice", q: "**The phone is ringing. — I ___ it.**", opts: ["'ll answer", "am going answer", "answering", "wills answer"], a: 0 },
    { k: "choice", q: "\"Dushanba kuni Dilnoza bilan uchrashaman\" (kelishilgan):", opts: ["I meet Dilnoza on Monday.", "I'm meeting Dilnoza on Monday.", "I will to meet Dilnoza on Monday.", "I meeting Dilnoza on Monday."], a: 1 },
    { k: "choice", q: "**He ___ come tomorrow. I'm not sure.**", opts: ["might", "mights", "might to", "will to"], a: 0 },
    { k: "choice", q: "**If you ___ me, I'll help you.**", opts: ["ask", "will ask", "asked", "asking"], a: 0 },
    { k: "choice", q: "**Would you like ___ lunch with us?**", opts: ["have", "having", "to have", "to having"], a: 2 },
    { k: "fill", q: "Aziz is not sure. He ___ not come.", a: ["might", "may"] },
    { k: "fill", q: "___ I carry your bag? (taklif)", a: ["Shall"] },
    { k: "listen", say: "Thanks for asking, but I'm afraid I can't.", opts: ["Thanks for asking, but I'm afraid I can't.", "Thanks for asking, and I'm afraid I can.", "Thanks for asking, but I'm afraid I can."], a: 0 },
    { k: "tf", q: "**Do you going to travel?** — to'g'ri savol.", a: false, why: "To'g'ri: **Are you going to travel?**" },
    { k: "order", uz: "Agar u kelsa, men xursand bo'laman.", words: ["If", "he", "comes,", "I'll", "be", "happy."], extra: ["will", "come"], alt: [["If", "he", "comes,", "I", "will", "be", "happy."], ["I'll", "be", "happy", "if", "he", "comes."], ["I", "will", "be", "happy", "if", "he", "comes."]] },
    { k: "translate", uz: "Nega biz shanba kuni uchrashmaymiz?", a: ["Why don't we meet on Saturday?", "Why don't we meet up on Saturday?", "Why don't we meet on Saturday"] },
  ],
  summary: [
    "**going to + V1** — reja yoki dalil; **will + V1** — shu zahoti qaror, va'da, fikr; **Shall I / we…?** — taklif.",
    "Kelishilgan shaxsiy reja — **Present Continuous** (*I'm meeting Laylo at six*); jadval — **Present Simple**.",
    "Ehtimol: **may / might + V1** (*It might rain*); inkor: **may not / might not**.",
    "Birinchi shart gap: **If + Present Simple, will + V1**; if-qismda **will** yo'q. **Unless** = if … not.",
    "Taklif: **Would you like to…? Why don't we…? How about…ing?** Rad etish: **I'd love to, but… / I'm afraid I can't.**",
  ],
  homework: "Keyingi oy rejangiz haqida 10 ta gapdan iborat kichik matn yozing. Unda: 2 ta **going to**, 2 ta **will** (qaror yoki fikr), 2 ta **Present Continuous** (kelishilgan uchrashuv), 2 ta **may / might** va 2 ta **if**-gap bo'lsin. Keyin uni ovoz chiqarib o'qing.",
};

export default lesson;
