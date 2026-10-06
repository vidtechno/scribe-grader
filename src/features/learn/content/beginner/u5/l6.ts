import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u5-l6",
  title: "Future: be going to",
  titleUz: "Kelasi zamon: be going to",
  goal: "Rejalaringiz haqida gapirasiz (*I'm going to visit Bukhara next week*) va ko'z oldingizdagi dalilga qarab bashorat qilasiz (*Look! It's going to rain*). Sayohatga oid 10 ta so'zni bilib olasiz.",
  slides: [
    {
      title: "Kelajak rejalari",
      blocks: [
        { t: "p", md: "Endi o'tmishdan kelajakka o'tamiz! Ingliz tilida kelajak haqida gapirishning bir necha yo'li bor. Birinchisi — **be going to**. U **oldindan o'ylab qo'yilgan reja, niyat** uchun ishlatiladi." },
        { t: "p", md: "O'zbekchada bu **\"-moqchiman\"** ga juda yaqin: *bormoqchiman, sotib olmoqchimiz, qolmoqchi*." },
        {
          t: "examples", items: [
            { en: "I'm going to visit my grandparents next week.", uz: "Kelasi hafta bobom va buvimnikiga bormoqchiman." },
            { en: "We're going to buy a new car.", uz: "Biz yangi mashina sotib olmoqchimiz." },
            { en: "She is going to study abroad.", uz: "U chet elda o'qimoqchi." },
            { en: "They're going to stay at a hotel.", uz: "Ular mehmonxonada qolmoqchi." },
          ],
        },
        { t: "tip", tone: "info", md: "**going to** da \"borish\" ma'nosi yo'q! Bu shunchaki kelajak qolipi: *I'm going to **cook** dinner* — \"Kechki ovqat pishirmoqchiman\"." },
        { t: "check", ex: { k: "choice", q: "\"Men yangi telefon sotib olmoqchiman.\"", opts: ["I going to buy a new phone.", "I'm going buy a new phone.", "I'm going to buy a new phone.", "I'm going to bought a new phone."], a: 2, why: "**am + going to + V1**: *I'm going to buy*." } },
      ],
    },
    {
      title: "Shakl: am / is / are + going to + V1",
      blocks: [
        {
          t: "table", head: ["", "Shakl", "Misol"],
          rows: [
            ["+", "I am / He is / They are + going to + V1", "I'm going to travel. He's going to travel."],
            ["−", "I'm not / He isn't / They aren't + going to + V1", "She isn't going to travel."],
            ["?", "Am I / Is he / Are they + going to + V1?", "Are you going to travel?"],
            ["Javob", "Yes, I am. / No, she isn't.", "Yes, we are. / No, they aren't."],
          ],
        },
        { t: "p", md: "Bu qolipni siz allaqachon bilasiz: **am / is / are** — Present Continuous'dagi kabi. Faqat oxiriga **going to + fe'lning oddiy shakli** qo'shiladi." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I'm going to visit Khiva.", "She is going to fly.", "Are you going to cook?", "He's going to go abroad."] },
          bad: { title: "Xato", items: ["I going to visit Khiva.", "She is going to flies.", "Do you going to cook?", "I'm going to visited Khiva."] },
        },
        { t: "tip", tone: "good", md: "**going to go** — to'g'ri va juda ko'p ishlatiladi: *I'm going to go to the bank.* Ikkita \"go\" dan qo'rqmang!" },
        { t: "check", ex: { k: "fill", q: "We ___ going to stay at a hotel.", a: ["are"], uz: "Biz mehmonxonada qolmoqchimiz.", why: "**we** → **are** going to." } },
      ],
    },
    {
      title: "Vaqt so'zlari va savollar",
      blocks: [
        {
          t: "table", head: ["Inglizcha", "O'zbekcha"],
          rows: [
            ["tomorrow", "ertaga"],
            ["tonight / this evening", "bugun kechqurun"],
            ["next week / next month", "kelasi hafta / kelasi oy"],
            ["next summer", "kelasi yoz"],
            ["in two days", "ikki kundan keyin"],
          ],
          speak: [0],
        },
        {
          t: "examples", items: [
            { en: "What are you going to do tomorrow?", uz: "Ertaga nima qilmoqchisiz?" },
            { en: "Where are you going to stay?", uz: "Qayerda qolmoqchisiz?" },
            { en: "When is he going to buy the tickets?", uz: "U chiptalarni qachon olmoqchi?" },
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["next week", "next summer", "tomorrow"] },
          bad: { title: "Xato", items: ["the next week / in next week", "in the next summer", "the tomorrow"] },
        },
        {
          t: "sounds", items: [
            { label: "going to", say: "I'm going to travel.", uz: "Tez nutqda **to** kuchsiz: \"gouing tə\". Jonli nutqda ko'pincha **\"gonna\"** eshitasiz — uni tushuning, lekin yozuvda doim **going to** yozing.", examples: ["I'm going to travel.", "What are you going to do?"] },
          ],
        },
        { t: "check", ex: { k: "order", uz: "Ertaga nima qilmoqchisiz?", words: ["What", "are", "you", "going", "to", "do", "tomorrow"], extra: ["is"] } },
      ],
    },
    {
      title: "Dalilga asoslangan bashorat",
      blocks: [
        { t: "p", md: "**be going to** ning ikkinchi vazifasi: **hozir ko'z oldingizdagi dalilga** qarab, nima bo'lishini aytish. O'zbekchada: *\"Hozir yomg'ir yog'adi\"*, *\"Kechikamiz!\"*" },
        {
          t: "examples", items: [
            { en: "Look at the clouds! It's going to rain.", uz: "Bulutlarga qarang! Yomg'ir yog'adi.", note: "dalil: qora bulutlar" },
            { en: "It's 8:55 and the train is at nine. We're going to be late!", uz: "Soat 8:55, poyezd to'qqizda. Kechikamiz!", note: "dalil: soat" },
            { en: "He's very tired. He's going to sleep.", uz: "U juda charchagan. Hozir uxlab qoladi.", note: "dalil: charchagani ko'rinib turibdi" },
          ],
        },
        { t: "tip", tone: "info", md: "Savol bering: **\"Dalil hozir ko'z oldimdami?\"** Ha bo'lsa — **going to**. (Shunchaki fikr bildirish uchun keyingi darsda **will** ni o'rganamiz.)" },
        { t: "check", ex: { k: "tf", q: "*Look at the sky! It's going to rain.* — bu dalilga asoslangan bashorat.", a: true, why: "Osmonni ko'rib turibmiz — dalil bor → **going to**." } },
      ],
    },
    {
      title: "Sayohat so'zlari",
      blocks: [
        {
          t: "examples", items: [
            { en: "We have a plan for the summer.", uz: "Yozga rejamiz bor." },
            { en: "We're going to take a trip to Khiva.", uz: "Xivaga sayohat qilmoqchimiz." },
            { en: "I bought the train tickets yesterday.", uz: "Kecha poyezd chiptalarini oldim." },
            { en: "My suitcase is ready.", uz: "Chamadonim tayyor." },
            { en: "Don't forget your passport!", uz: "Pasportingizni unutmang!" },
            { en: "They're going to go abroad on holiday.", uz: "Ular ta'tilda chet elga bormoqchi." },
            { en: "We're going to be at the airport at six.", uz: "Soat oltida aeroportda bo'lamiz." },
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["go abroad", "on holiday", "stay at a hotel", "by train"] },
          bad: { title: "Xato", items: ["go to abroad", "in holiday", "stay in hotel", "with train"] },
        },
        {
          t: "sounds", items: [
            { label: "hotel", say: "hotel", uz: "Urg'u **ikkinchi** bo'g'inda: \"hou-TEL\".", examples: ["hotel"] },
            { label: "suitcase", say: "suitcase", uz: "**ui** — cho'ziq \"u:\": \"SU:T-keys\".", examples: ["suitcase"] },
            { label: "abroad", say: "abroad", uz: "**oa** — \"o:\": \"ə-BRO:D\".", examples: ["abroad"] },
            { label: "airport", say: "airport", uz: "\"EƏ-po:t\" — *r* lar o'qilmaydi.", examples: ["airport", "passport"] },
          ],
        },
        { t: "check", ex: { k: "choice", q: "**hotel** so'zida urg'u qaysi bo'g'inda?", say: "hotel", opts: ["birinchi: HO-tel", "ikkinchi: ho-TEL"], a: 1, why: "\"hou-**TEL**\" — urg'u ikkinchi (oxirgi) bo'g'inda." } },
      ],
    },
    {
      title: "Dialog: yozgi ta'til",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Akmal", en: "What are you going to do in the summer holiday?", uz: "Yozgi ta'tilda nima qilmoqchisan?" },
            { who: "Zarina", en: "I'm going to travel abroad! My sister and I are going to visit Istanbul.", uz: "Chet elga sayohat qilmoqchiman! Opam bilan Istanbulga bormoqchimiz." },
            { who: "Akmal", en: "Wow! Are you going to fly?", uz: "Voy! Samolyotda uchasizlarmi?" },
            { who: "Zarina", en: "Yes, we are. I bought the tickets last week.", uz: "Ha. Chiptalarni o'tgan hafta oldim." },
            { who: "Akmal", en: "Where are you going to stay?", uz: "Qayerda qolmoqchisizlar?" },
            { who: "Zarina", en: "We're going to stay at a small hotel in the old city.", uz: "Eski shahardagi kichik mehmonxonada qolmoqchimiz." },
            { who: "Akmal", en: "Is your suitcase ready?", uz: "Chamadoning tayyormi?" },
            { who: "Zarina", en: "Not yet! And I'm going to get a new passport tomorrow.", uz: "Hali yo'q! Ertaga esa yangi pasport olmoqchiman." },
          ],
        },
        { t: "check", ex: { k: "fill", q: "Zarina and her sister ___ going to stay at a small hotel.", a: ["are"] } },
      ],
    },
  ],
  words: [
    { en: "plan", uz: "reja; rejalashtirmoq", ipa: "plæn", pos: "noun / verb", ex: "What are your plans for the weekend?", exUz: "Dam olish kunlariga qanday rejalaringiz bor?" },
    { en: "trip", uz: "sayohat, safar", ipa: "trɪp", pos: "noun", ex: "We're going to take a trip to Bukhara.", exUz: "Buxoroga sayohat qilmoqchimiz." },
    { en: "ticket", uz: "chipta", ipa: "ˈtɪk.ɪt", pos: "noun", ex: "I'm going to buy two tickets.", exUz: "Ikkita chipta olmoqchiman." },
    { en: "holiday", uz: "ta'til, dam olish", ipa: "ˈhɒl.ə.deɪ", pos: "noun", ex: "Where are you going to go on holiday?", exUz: "Ta'tilda qayerga bormoqchisiz?" },
    { en: "airport", uz: "aeroport", ipa: "ˈeə.pɔːt", pos: "noun", ex: "My father is going to take us to the airport.", exUz: "Otam bizni aeroportga olib bormoqchi." },
    { en: "train", uz: "poyezd", ipa: "treɪn", pos: "noun", ex: "We're going to go by train.", exUz: "Poyezdda bormoqchimiz." },
    { en: "hotel", uz: "mehmonxona", ipa: "həʊˈtel", pos: "noun", ex: "They're going to stay at a hotel.", exUz: "Ular mehmonxonada qolmoqchi." },
    { en: "suitcase", uz: "chamadon", ipa: "ˈsuːt.keɪs", pos: "noun", ex: "My suitcase is very big.", exUz: "Chamadonim juda katta." },
    { en: "passport", uz: "pasport", ipa: "ˈpɑːs.pɔːt", pos: "noun", ex: "Where is my passport?", exUz: "Pasportim qayerda?" },
    { en: "abroad", uz: "chet elga, chet elda", ipa: "əˈbrɔːd", pos: "adv", ex: "She is going to study abroad.", exUz: "U chet elda o'qimoqchi." },
  ],
  practice: [
    { k: "listen", say: "We're going to visit Bukhara.", opts: ["We're going to visit Bukhara.", "We went to visit Bukhara.", "We visited Bukhara."], a: 0 },
    { k: "listen", say: "Is she going to stay at a hotel?", opts: ["She is going to stay at a hotel.", "Is she going to stay at a hotel?", "Was she at a hotel?"], a: 1 },
    { k: "match", pairs: [["plan", "reja"], ["ticket", "chipta"], ["suitcase", "chamadon"], ["passport", "pasport"], ["abroad", "chet elga, chet elda"], ["airport", "aeroport"]] },
    { k: "match", pairs: [["trip", "sayohat, safar"], ["holiday", "ta'til, dam olish"], ["train", "poyezd"], ["hotel", "mehmonxona"]] },
    { k: "choice", q: "My parents ___ going to buy a new car.", opts: ["is", "am", "are", "be"], a: 2, why: "**parents** = they → **are**." },
    { k: "choice", q: "Look at the clouds! It ___.", opts: ["rains", "is going to rain", "rained", "going to rain"], a: 1, why: "Dalil bor (bulutlar) → **is going to rain**. *going to rain* da **is** yo'q." },
    { k: "fill", q: "She isn't going to ___ a big suitcase. (take)", a: ["take"], why: "**going to** + V1." },
    { k: "fill", q: "___ you going to go abroad this summer?", a: ["Are"], uz: "Bu yoz chet elga bormoqchimisiz?" },
    { k: "fill", q: "I'm going ___ travel by train.", a: ["to"], why: "**going to** — *to* ni unutmang." },
    { k: "tf", q: "**I'm going to went to Khiva.** — to'g'ri gap.", a: false, why: "**going to** + V1: *I'm going to **go** to Khiva.*" },
    { k: "tf", q: "**He's going to go abroad.** — to'g'ri gap.", a: true, why: "*going to go* — to'liq to'g'ri." },
    { k: "order", uz: "Biz mehmonxonada qolmoqchi emasmiz.", words: ["We", "aren't", "going", "to", "stay", "at", "a", "hotel"], extra: ["not", "staying"] },
    { k: "order", uz: "Ular poyezdda bormoqchi.", words: ["They", "are", "going", "to", "go", "by", "train"], extra: ["is", "with"] },
    { k: "translate", uz: "Men chet elga bormoqchiman.", a: ["I'm going to go abroad", "I am going to go abroad", "I'm going to travel abroad", "I am going to travel abroad"], why: "**abroad** oldidan **to** yo'q." },
    { k: "translate", uz: "Siz nima qilmoqchisiz?", a: ["What are you going to do"] },
    { k: "speak", say: "I'm going to visit my grandparents next week.", uz: "Kelasi hafta bobom va buvimnikiga bormoqchiman." },
  ],
  quiz: [
    { k: "listen", say: "They aren't going to fly.", opts: ["They are going to fly.", "They aren't going to fly.", "They weren't going to fly."], a: 1 },
    { k: "listen", say: "Where are you going to stay?", opts: ["Where are you staying?", "Where did you stay?", "Where are you going to stay?"], a: 2 },
    { k: "fill", q: "My brother ___ going to get a new passport.", a: ["is"] },
    { k: "fill", q: "Are you going ___ visit the museum?", a: ["to"] },
    { k: "choice", q: "It's 8:58 and the lesson starts at nine. We ___ late!", opts: ["are going to be", "were", "are being", "be going to"], a: 0, why: "Dalil (soat) → **are going to be** late." },
    { k: "choice", q: "Qaysi gap **xato**?", opts: ["She is going to buy a ticket.", "I'm going to go abroad.", "They going to stay at home.", "Are you going to cook?"], a: 2, why: "**are** tushib qolgan: *They **are** going to stay…*" },
    { k: "translate", uz: "U yangi chamadon sotib olmoqchi.", a: ["He's going to buy a new suitcase", "He is going to buy a new suitcase", "She's going to buy a new suitcase", "She is going to buy a new suitcase"] },
    { k: "translate", uz: "Biz kelasi oy Samarqandga bormoqchimiz.", a: ["We're going to go to Samarkand next month", "We are going to go to Samarkand next month", "We're going to visit Samarkand next month", "We are going to visit Samarkand next month", "We're going to travel to Samarkand next month", "We are going to travel to Samarkand next month", "Next month we're going to go to Samarkand", "Next month we are going to go to Samarkand", "Next month we're going to visit Samarkand", "Next month we are going to visit Samarkand"] },
    { k: "order", uz: "Siz poyezd chiptasini olmoqchimisiz?", words: ["Are", "you", "going", "to", "buy", "a", "train", "ticket"], extra: ["Do"] },
    { k: "tf", q: "**going to** dagi *going* \"bormoq\" ma'nosini bildiradi, shuning uchun *I'm going to cook* — \"Ovqat pishirgani boryapman\".", a: false, why: "**be going to** — kelajak qolipi: *I'm going to cook* = \"Ovqat pishirmoqchiman\"." },
  ],
  summary: [
    "**am / is / are + going to + V1** — oldindan qilingan reja: *I'm going to visit Khiva.*",
    "Inkor: *She **isn't going to** fly.* Savol: ***Are** you **going to** stay?* — *Yes, I am.*",
    "Dalilga asoslangan bashorat: *Look at the clouds! **It's going to rain.***",
    "Vaqt: **tomorrow, tonight, next week, next summer** (*the next week* ❌). **go abroad** (*to* yo'q).",
  ],
  homework: "Kelasi hafta yoki yozgi ta'til uchun 5 ta rejangizni yozing (*Next week I'm going to…*). Keyin xayoliy sayohat rejasini tuzing: qayerga, nimada, qayerda qolasiz — bugungi 10 ta so'zdan kamida 5 tasini ishlating.",
};

export default lesson;
