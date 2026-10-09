import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u15-l2",
  title: "Should and shouldn't",
  titleUz: "Should / shouldn't: maslahat berish",
  goal: "**should** va **shouldn't** bilan maslahat berasiz va maslahat so'raysiz (**What should I do?**), **I think you should…** va **If I were you, I'd…** kabi tabiiy iboralarni ishlatasiz hamda *should to go*, *an advice* kabi xatolardan qochasiz.",
  slides: [
    {
      title: "Should: maslahat",
      blocks: [
        { t: "p", md: "**should** — \"kerak, yaxshi bo'lardi\" degan **maslahat** ma'nosini beradi. U **must** dan yumshoqroq: majburlamaydi, faqat \"shunday qilgan yaxshi\" deydi. Qoidalar o'sha — modal fe'l:" },
        {
          t: "table", head: ["Shakl", "Misol"], speak: [1],
          rows: [
            ["+ : subject + **should** + V1", "You should see a doctor."],
            ["− : subject + **shouldn't** + V1", "You shouldn't eat so much sugar."],
            ["? : **Should** + subject + V1?", "Should I take an umbrella?"],
            ["Qisqa javob", "Yes, you should. / No, you shouldn't."],
          ],
        },
        {
          t: "examples", items: [
            { en: "You should drink more water.", uz: "Ko'proq suv ichishingiz kerak (yaxshi bo'ladi)." },
            { en: "He shouldn't stay up so late.", uz: "U bunchalik kech yotmasligi kerak." },
            { en: "Should we invite Kamol to the party?", uz: "Kamolni ziyofatga taklif qilsakmikin?" },
            { en: "What should I buy for my mother's birthday?", uz: "Onamning tug'ilgan kuniga nima olsam bo'ladi?" },
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["You should rest.", "She shouldn't worry.", "Should I call him?"] },
          bad: { title: "Xato", items: ["You should to rest.", "She shoulds worry.", "Do I should call him?"] },
        },
        { t: "check", ex: { k: "choice", q: "\"Sen shifokorga borishing kerak.\"", opts: ["You should to see a doctor.", "You should see a doctor.", "You shoulds see a doctor.", "You should seeing a doctor."], a: 1, why: "**should + V1**: to yo'q, -s yo'q." } },
      ],
    },
    {
      title: "Maslahat so'rash va berish iboralari",
      blocks: [
        { t: "p", md: "Faqat \"You should…\" deyavermang. Inglizlar maslahatni yumshoqroq aytishni yaxshi ko'radi:" },
        {
          t: "table", head: ["Maqsad", "Ibora"], speak: [1],
          rows: [
            ["Maslahat so'rash", "What should I do?"],
            ["Maslahat so'rash", "Do you think I should apply for the job?"],
            ["Maslahat berish", "I think you should talk to him."],
            ["Salbiy maslahat", "I don't think you should buy it."],
            ["Taklif", "Why don't you try the new café?"],
            ["Taklif", "If I were you, I'd take a taxi."],
          ],
        },
        { t: "tip", tone: "info", md: "**If I were you, I'd…** = \"Sizning o'rningizda bo'lsam, men … qilardim\". Bu yerda *I* bilan ham **were** ishlatiladi. Bu maslahatning eng muloyim shakllaridan biri." },
        { t: "tip", tone: "warn", md: "Inkor maslahatda inglizlar **I don't think you should…** deydi, **I think you shouldn't…** emas (ikkinchisi ham xato emas, lekin kamroq tabiiy). *I don't think you should wait.*" },
        { t: "check", ex: { k: "fill", q: "I don't think you ___ eat that. It's old.", a: ["should"], why: "**I don't think you should** + V1." } },
      ],
    },
    {
      title: "Should va must: farq",
      blocks: [
        {
          t: "table", head: ["", "should", "must / have to"], speak: [],
          rows: [
            ["Ma'no", "Maslahat — yaxshi bo'lardi", "Majburiyat — shart"],
            ["Tanlov", "Siz o'zingiz hal qilasiz", "Tanlov yo'q"],
            ["Misol", "You should wear a coat. It's cold.", "You must wear a helmet on a motorbike."],
          ],
        },
        {
          t: "examples", items: [
            { en: "You should visit Bukhara. It's beautiful!", uz: "Buxoroga borishing kerak. U juda go'zal!", note: "Maslahat — borsangiz ham bo'ladi, bormasangiz ham." },
            { en: "You must have a ticket to enter.", uz: "Kirish uchun chipta bo'lishi shart.", note: "Qoida — chiptasiz kirib bo'lmaydi." },
          ],
        },
        { t: "tip", tone: "good", md: "O'zbekchada \"kerak\" ikkala holatda ham ishlatiladi: *Shifokorga borishing kerak* (maslahat) va *Pasport kerak* (shart). Inglizchada tanlang: maslahat → **should**, majburiyat → **must / have to**." },
        { t: "check", ex: { k: "choice", q: "**Sizning do'stingiz juda charchagan. Siz unga maslahat berasiz:**", opts: ["You must sleep now!", "You should get some rest.", "You have sleep.", "You should resting."], a: 1, why: "Maslahat → **should** + V1." } },
        { t: "check", ex: { k: "choice", q: "Qaysi gap qoidani bildiradi, maslahatni emas?", opts: ["You should try plov.", "You shouldn't be sad.", "Passengers must show their tickets.", "I think you should rest."], a: 2, why: "**must** — majburiyat, qoida." } },
      ],
    },
    {
      title: "Odatiy xatolar: advice",
      blocks: [
        { t: "p", md: "**advice** (maslahat) — **sanalmaydigan** ot. Uning oldiga **an** qo'yilmaydi va **-s** olmaydi. Bitta maslahat — **a piece of advice**:" },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["Can you give me some advice?", "That's good advice.", "He gave me a piece of advice.", "I need your advice."] },
          bad: { title: "Xato", items: ["Can you give me an advice?", "These are good advices.", "He gave me two advices.", "I need your advices."] },
        },
        { t: "tip", tone: "warn", md: "Fe'l **advise** — \"maslahat bermoq\" (s bilan yoziladi va **z** o'qiladi): *She advised me to rest.* Ot **advice** — \"s\" tovushi bilan. Tinglang va farqini eshiting." },
        {
          t: "sounds", items: [
            { label: "advice", say: "advice", uz: "**\"ədˈvaɪs\"** — oxirida \"s\". Ot.", examples: ["advice"] },
            { label: "advise", say: "advise", uz: "**\"ədˈvaɪz\"** — oxirida \"z\". Fe'l.", examples: ["advise"] },
          ],
        },
        { t: "check", ex: { k: "fill", q: "Can I ask you for some ___? (maslahat)", a: ["advice"], why: "**advice** — sanalmaydi: some advice." } },
      ],
    },
    {
      title: "O'qing: Imtihondan oldin",
      blocks: [
        {
          t: "text", title: "Laylo is stressed",
          en: "Laylo has an important English exam on Friday. She is very stressed and she can't sleep well. She asks her friend Dilnoza for advice.\n\"What should I do?\" Laylo asks.\n\"I think you should study for one hour every day, not all night,\" says Dilnoza. \"You shouldn't drink too much coffee, and you should go for a walk after lunch.\"\n\"Should I study with a friend?\"\n\"Yes, you should! If I were you, I'd practise speaking with someone.\"\nLaylo smiles. \"Thanks. That's good advice.\"",
          uz: "Layloning juma kuni muhim ingliz tili imtihoni bor. U juda stressda va yaxshi uxlay olmayapti. U do'sti Dilnozadan maslahat so'raydi.\n\"Nima qilishim kerak?\" deb so'raydi Laylo.\n\"Menimcha, har kuni bir soatdan o'qishing kerak, tun bo'yi emas,\" deydi Dilnoza. \"Juda ko'p kofe ichmasliging va tushlikdan keyin sayr qilishing kerak.\"\n\"Do'st bilan birga o'qisam bo'ladimi?\"\n\"Ha, albatta! Sening o'rningda bo'lsam, kimdir bilan gapirishni mashq qilardim.\"\nLaylo jilmayadi. \"Rahmat. Bu yaxshi maslahat.\"",
        },
        { t: "check", ex: { k: "tf", q: "Dilnoza thinks Laylo should study all night.", a: false, why: "*One hour every day, not all night.*" } },
        { t: "check", ex: { k: "choice", q: "What shouldn't Laylo do?", opts: ["Go for a walk.", "Drink too much coffee.", "Practise speaking.", "Study every day."], a: 1, why: "*You shouldn't drink too much coffee.*" } },
      ],
    },
    {
      title: "Dialog: kimdir ish topishni xohlaydi",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Bobur", en: "I want to find a better job, but I don't know where to start.", uz: "Yaxshiroq ish topmoqchiman, lekin qayerdan boshlashni bilmayman." },
            { who: "Nigora", en: "You should update your CV first.", uz: "Avval rezyumeni yangilashing kerak." },
            { who: "Bobur", en: "Should I write it in English?", uz: "Uni inglizcha yozishim kerakmi?" },
            { who: "Nigora", en: "Yes, you should. And I don't think you should send it to every company.", uz: "Ha. Va menimcha, uni hamma kompaniyaga yuborma." },
            { who: "Bobur", en: "What would you do?", uz: "Sen nima qilarding?" },
            { who: "Nigora", en: "If I were you, I'd choose five good companies and write to them directly.", uz: "Sening o'rningda bo'lsam, beshta yaxshi kompaniyani tanlab, ularga to'g'ridan-to'g'ri yozardim." },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Nigora thinks Bobur should send his CV to every company.", a: false, why: "*I don't think you should send it to every company.*" } },
      ],
    },
  ],
  words: [
    { en: "advice", uz: "maslahat", ipa: "ədˈvaɪs", pos: "noun", ex: "Thank you for your advice.", exUz: "Maslahatingiz uchun rahmat." },
    { en: "suggest", uz: "taklif qilmoq", ipa: "səˈdʒest", pos: "verb", ex: "I suggest taking a taxi.", exUz: "Taksi olishni taklif qilaman." },
    { en: "recommend", uz: "tavsiya qilmoq", ipa: "ˌrekəˈmend", pos: "verb", ex: "Can you recommend a good restaurant?", exUz: "Yaxshi restoran tavsiya qila olasizmi?" },
    { en: "sensible", uz: "oqilona, aqlli", ipa: "ˈsensəbl", pos: "adj", ex: "That's a sensible idea.", exUz: "Bu oqilona fikr." },
    { en: "stressed", uz: "stressda, asabiy", ipa: "strest", pos: "adj", ex: "I feel stressed before exams.", exUz: "Imtihondan oldin stress his qilaman." },
    { en: "relax", uz: "dam olmoq, tinchlanmoq", ipa: "rɪˈlæks", pos: "verb", ex: "You should relax at the weekend.", exUz: "Dam olish kunlari dam olishing kerak." },
    { en: "habit", uz: "odat", ipa: "ˈhæbɪt", pos: "noun", ex: "Reading every day is a good habit.", exUz: "Har kuni o'qish — yaxshi odat." },
    { en: "give up", uz: "voz kechmoq, tashlamoq", ipa: "ɡɪv ʌp", pos: "phrasal verb", ex: "You shouldn't give up now.", exUz: "Hozir taslim bo'lmasligingiz kerak." },
    { en: "take a break", uz: "tanaffus qilmoq", ipa: "teɪk ə breɪk", pos: "phrase", ex: "Let's take a break for ten minutes.", exUz: "O'n daqiqa tanaffus qilaylik." },
    { en: "enough", uz: "yetarli", ipa: "ɪˈnʌf", pos: "adj / adv", ex: "You should get enough sleep.", exUz: "Yetarlicha uxlashingiz kerak." },
  ],
  practice: [
    { k: "match", pairs: [["advice", "maslahat"], ["recommend", "tavsiya qilmoq"], ["sensible", "oqilona"], ["habit", "odat"], ["give up", "voz kechmoq"]] },
    { k: "listen", say: "You should see a doctor.", opts: ["You should see a doctor.", "You shouldn't see a doctor.", "You should say a doctor."], a: 0 },
    { k: "listen", say: "What should I do?", opts: ["What should I do?", "What shall I do?", "What would I do?"], a: 0 },
    { k: "choice", q: "You look tired. You ___ go to bed early.", opts: ["should", "should to", "shoulds", "do should"], a: 0, why: "**should + V1**." },
    { k: "choice", q: "Ular juda ko'p shirinlik yemasligi kerak.", opts: ["They don't should eat so many sweets.", "They shouldn't eat so many sweets.", "They shouldn't to eat so many sweets.", "They no should eat so many sweets."], a: 1, why: "**shouldn't + V1**." },
    { k: "choice", q: "Can you give me some ___?", opts: ["advices", "an advice", "advice", "advise"], a: 2, why: "**advice** — sanalmaydigan ot." },
    { k: "choice", q: "If I ___ you, I'd talk to the teacher.", opts: ["am", "were", "was being", "will be"], a: 1, why: "**If I were you…** — maslahat iborasi." },
    { k: "fill", q: "___ I buy this jacket or that one?", a: ["Should"], why: "Maslahat so'rash: **Should I…?**" },
    { k: "fill", q: "I don't think you ___ drive when you're so tired.", a: ["should"], why: "**I don't think you should** + V1." },
    { k: "fill", q: "He ___ eat so much fast food. It's not healthy. (maslahat: yemasligi kerak)", a: ["shouldn't", "should not"], why: "Inkor maslahat → **shouldn't**." },
    { k: "tf", q: "**You should to study more** — to'g'ri gap.", a: false, why: "should dan keyin to kerak emas." },
    { k: "tf", q: "**should** dan **must** ko'ra kuchsizroq ma'no beradi.", a: true, why: "should — maslahat, must — majburiyat." },
    { k: "order", uz: "Menimcha, siz ko'proq suv ichishingiz kerak.", words: ["I", "think", "you", "should", "drink", "more", "water."], extra: ["to", "shoulds"] },
    { k: "order", uz: "Sening o'rningda bo'lsam, men uni chaqirmasdim.", words: ["If", "I", "were", "you,", "I", "wouldn't", "call", "him."], extra: ["am", "don't"] },
    { k: "translate", uz: "Men nima qilishim kerak?", a: ["What should I do?"] },
    { k: "speak", say: "I think you should take a break and relax.", uz: "Menimcha, tanaffus qilib dam olishing kerak." },
  ],
  quiz: [
    { k: "choice", q: "You ___ be rude to older people. It's not polite.", opts: ["shouldn't", "should", "don't should", "should to"], a: 0, why: "Inkor maslahat → **shouldn't**." },
    { k: "choice", q: "Qaysi gap **to'g'ri**?", opts: ["He gave me a good advice.", "He gave me good advice.", "He gave me good advices.", "He gave me a good advise."], a: 1, why: "**advice** — sanalmaydigan ot: good advice." },
    { k: "choice", q: "**I'm tired every day.** — **I think you ___ more sleep.**", opts: ["get should", "should get", "should to get", "shoulds get"], a: 1, why: "**you should get**." },
    { k: "choice", q: "Kimdir sizdan maslahat so'raydi: \"Should I take the bus or the metro?\" Siz javob berasiz:", opts: ["Yes, you are.", "I think you should take the metro.", "No, you don't.", "You have the metro."], a: 1, why: "Maslahat so'raydi → **I think you should…**" },
    { k: "fill", q: "___ we invite Kamol to the party?", a: ["Should"], why: "**Should we…?**" },
    { k: "fill", q: "If I ___ you, I'd see a doctor.", a: ["were"], why: "**If I were you…**" },
    { k: "tf", q: "**Do I should call him?** — to'g'ri savol.", a: false, why: "To'g'ri: *Should I call him?*" },
    { k: "listen", say: "You shouldn't give up.", opts: ["You shouldn't give up.", "You should give up.", "You shouldn't get up."], a: 0 },
    { k: "order", uz: "Ko'proq dam olishing kerak.", words: ["You", "should", "relax", "more."], extra: ["to", "must to"] },
    { k: "translate", uz: "Sizga yaxshi maslahatim bor.", a: ["I have some good advice for you.", "I've got some good advice for you.", "I have good advice for you.", "I've got good advice for you.", "I have some good advice.", "I've got some good advice."] },
  ],
  summary: [
    "**should** + V1 = maslahat: *You should rest.* **shouldn't** = \"…masligi kerak\": *You shouldn't worry.*",
    "Savol: **Should I…?** / **What should I do?** — to, -s va do/does kerak emas.",
    "Maslahat iboralari: **I think you should…**, **I don't think you should…**, **If I were you, I'd…**",
    "**advice** — sanalmaydi: *some advice, a piece of advice* (an advice ❌, advices ❌).",
  ],
  homework: "Do'stingiz inglizcha o'rganmoqchi deb tasavvur qiling va unga 5 ta maslahat yozing (3 tasi **should**, 1 tasi **shouldn't**, 1 tasi **If I were you, I'd…** bilan). Keyin bitta maslahat so'rash savolini ham tuzing: **What should I…?**",
};

export default lesson;
