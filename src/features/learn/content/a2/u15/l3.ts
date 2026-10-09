import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u15-l3",
  title: "Can, could, be able to",
  titleUz: "Can, could, be able to: qobiliyat va ruxsat",
  goal: "Qobiliyatni hozir, o'tmishda va kelajakda to'g'ri ifodalaysiz (**can, could, was able to, will be able to**), ruxsat so'raysiz (**Can I…? Could I…?**) va *I will can*, *I can to swim* kabi xatolardan qochasiz.",
  slides: [
    {
      title: "Can: hozirgi qobiliyat va ruxsat",
      blocks: [
        { t: "p", md: "A1 da **can / can't** ni o'rgangansiz. Takrorlaymiz va ikki yangi ma'no qo'shamiz. **can** ham modal fe'l: hamma shaxsda bir xil, keyin **to yo'q**, savol va inkorda **do yo'q**." },
        {
          t: "table", head: ["Ma'no", "Misol"], speak: [1],
          rows: [
            ["Qobiliyat (qila olish)", "Laylo can speak three languages."],
            ["Imkoniyat (mumkin)", "We can meet at six."],
            ["Ruxsat (mumkin, ruxsat bor)", "You can use my phone."],
            ["Ruxsat so'rash", "Can I sit here?"],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I can swim.", "She can't drive.", "Can you help me?"] },
          bad: { title: "Xato", items: ["I can to swim.", "She cans drive.", "Do you can help me?"] },
        },
        { t: "check", ex: { k: "choice", q: "\"U tez yugura oladi.\"", opts: ["He can to run fast.", "He cans run fast.", "He can run fast.", "He does can run fast."], a: 2, why: "**can + V1**, he bilan ham -s yo'q." } },
      ],
    },
    {
      title: "Could: o'tmishdagi qobiliyat",
      blocks: [
        { t: "p", md: "**could** — **can** ning o'tgan zamon shakli. U \"umuman qila olardim\" (umumiy, doimiy qobiliyat) ma'nosida ishlatiladi:" },
        {
          t: "examples", items: [
            { en: "I could swim when I was five.", uz: "Besh yoshimda suza olardim.", note: "Umumiy qobiliyat — doimo shunday edi." },
            { en: "My grandfather couldn't use a computer.", uz: "Bobom kompyuterdan foydalana olmasdi." },
            { en: "Could you read when you were four?", uz: "To'rt yoshingda o'qiy olarmiding?" },
          ],
        },
        { t: "table", head: ["Zamon", "+", "−", "?"], speak: [1, 2, 3], rows: [
          ["Hozir", "I can swim.", "I can't swim.", "Can you swim?"],
          ["O'tgan", "I could swim.", "I couldn't swim.", "Could you swim?"],
        ] },
        { t: "tip", tone: "info", md: "Bir marta bo'lgan, aniq voqea (\"bugun uddaladim\") haqida musbat gapda **could** emas, **was/were able to** ishlatiladi — keyingi slaydda ko'ramiz. Inkorda esa ikkalasi ham mumkin: *I couldn't find it / I wasn't able to find it.*" },
        { t: "check", ex: { k: "fill", q: "When I was a child, I ___ climb trees. (could / can)", a: ["could"], why: "O'tgan zamonda umumiy qobiliyat → **could**." } },
      ],
    },
    {
      title: "Be able to: har bir zamon uchun",
      blocks: [
        { t: "p", md: "**can** ning faqat hozirgi (can) va o'tgan (could) shakli bor. Kelajak yoki Present Perfect kerak bo'lsa — **be able to** ishlatamiz. U \"qila olmoq\" ma'nosini beradi va **be** fe'li o'zgaradi:" },
        {
          t: "table", head: ["Zamon", "Shakl", "Misol"], speak: [2],
          rows: [
            ["Hozir", "am / is / are able to", "She is able to run a marathon."],
            ["O'tgan (aniq voqea)", "was / were able to", "Yesterday I was able to finish early."],
            ["Kelajak", "will be able to", "You will be able to speak English well."],
            ["Present Perfect", "has / have been able to", "I haven't been able to call him."],
            ["Inkor, kelajak", "won't be able to", "We won't be able to come."],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I will be able to help you.", "I wasn't able to sleep.", "She has been able to swim since she was six."] },
          bad: { title: "Xato", items: ["I will can help you.", "I was able to slept.", "She has could swim since she was six."] },
        },
        { t: "tip", tone: "warn", md: "**will can** ❌ — bunday shakl yo'q. Kelajakda faqat **will be able to**. Bu — o'zbek tilida o'ylab tarjima qilgan o'quvchilarning eng ko'p qiladigan xatosi." },
        { t: "check", ex: { k: "choice", q: "\"Ertaga biz sizga yordam bera olamiz.\"", opts: ["We will can help you tomorrow.", "We will be able to help you tomorrow.", "We can will help you tomorrow.", "We will able to help you tomorrow."], a: 1, why: "Kelajak → **will be able to** + V1." } },
      ],
    },
    {
      title: "Could yoki was able to?",
      blocks: [
        { t: "p", md: "Qoida oddiy:\n• **Umumiy qobiliyat** (doim shunday edi) → **could** yoki **was able to**.\n• **Bitta aniq voqea, uddalagan** (musbat) → **was/were able to** (yoki *managed to*)." },
        {
          t: "examples", items: [
            { en: "I could run fast when I was young.", uz: "Yoshligimda tez yugura olardim.", note: "Umumiy qobiliyat." },
            { en: "The bus was late, but I was able to catch it.", uz: "Avtobus kechikdi, lekin men unga ulgurdim.", note: "Bitta aniq voqea — uddaladim." },
            { en: "The bus was late, so I couldn't catch it.", uz: "Avtobus kechikdi, shuning uchun ulgura olmadim.", note: "Inkorda could ham bo'ladi." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "**Kecha tun bo'yi ishladim, lekin hisobotni tugata oldim.**", opts: ["Last night I could finish the report.", "Last night I was able to finish the report.", "Last night I can finish the report.", "Last night I am able to finish the report."], a: 1, why: "Bitta aniq voqea, musbat → **was able to**." } },
        { t: "check", ex: { k: "fill", q: "Sorry, I wasn't ___ to call you yesterday.", a: ["able"], why: "**wasn't able to** + V1." } },
      ],
    },
    {
      title: "Ruxsat so'rash: Can, Could, May",
      blocks: [
        { t: "p", md: "Ruxsat so'rash uchun uchta fe'l bor. Hammasi keyin **fe'lning 1-shakli** bilan keladi:" },
        {
          t: "table", head: ["Ibora", "Qachon", "Misol"], speak: [2],
          rows: [
            ["**Can I…?**", "Oddiy, do'stlar va oila", "Can I borrow your pen?"],
            ["**Could I…?**", "Muloyimroq, notanish yoki katta odam", "Could I open the window, please?"],
            ["**May I…?**", "Eng rasmiy", "May I come in?"],
          ],
        },
        {
          t: "examples", items: [
            { en: "Can I go home now? — Yes, you can.", uz: "Hozir uyga ketsam bo'ladimi? — Ha, mumkin." },
            { en: "Could I speak to the manager, please?", uz: "Menejer bilan gaplashsam bo'ladimi?" },
            { en: "You can't park here. It's private.", uz: "Bu yerga qo'ysangiz bo'lmaydi. Xususiy joy." },
          ],
        },
        { t: "tip", tone: "info", md: "**Could I…?** o'tmish emas, **muloyimlik**. *Could I have some water?* — hozirgi iltimos. Javobda odatda **could** emas, **can** ishlatiladi: *Yes, you can.*" },
        { t: "check", ex: { k: "choice", q: "Rasmiy tarzda: \"___ I ask you a question?\"", opts: ["May", "Must", "Do", "Am"], a: 0, why: "**May I…?** — eng rasmiy." } },
      ],
    },
    {
      title: "O'qing: Mening bobom",
      blocks: [
        {
          t: "text", title: "My grandfather's story",
          en: "My grandfather Karim is seventy-five. When he was young, he could run very fast and he could repair any bike. He couldn't read English, but he was able to learn a few words from tourists in Samarkand.\nToday he can't run any more, but he can still tell wonderful stories. Last week the internet was down, but he was able to fix it with a phone call to the company!\nHe says, \"In the future, I will be able to learn English. I have plenty of time!\" Can you imagine that?",
          uz: "Mening bobom Karim yetmish besh yoshda. Yoshligida u juda tez yugura olardi va har qanday velosipedni tuzata olardi. U inglizcha o'qiy olmasdi, lekin Samarqanddagi turistlardan bir necha so'z o'rganishga muvaffaq bo'lgan.\nBugun u endi yugura olmaydi, lekin hamon ajoyib hikoyalar aytib bera oladi. O'tgan hafta internet ishlamay qoldi, lekin u kompaniyaga qo'ng'iroq qilib, uni tuzatishga muvaffaq bo'ldi!\nU aytadi: \"Kelajakda inglizcha o'rgana olaman. Vaqtim juda ko'p!\" Tasavvur qila olasizmi?",
        },
        { t: "check", ex: { k: "tf", q: "Karim can run fast today.", a: false, why: "*Today he can't run any more.*" } },
        { t: "check", ex: { k: "choice", q: "What was Karim able to do last week?", opts: ["Run a marathon.", "Fix the internet.", "Read English.", "Repair a bike."], a: 1, why: "*He was able to fix it with a phone call.*" } },
      ],
    },
    {
      title: "Dialog: yangi shahar",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Aziz", en: "Hi! Can I sit here?", uz: "Salom! Bu yerga o'tirsam bo'ladimi?" },
            { who: "Emma", en: "Of course, you can. Are you new here?", uz: "Albatta mumkin. Siz bu yerda yangimisiz?" },
            { who: "Aziz", en: "Yes, I'm from Tashkent. I couldn't speak English well last year, but now I can.", uz: "Ha, Toshkentdanman. O'tgan yili inglizchani yaxshi gapira olmasdim, hozir esa gapira olaman." },
            { who: "Emma", en: "Your English is great! Can you speak Russian too?", uz: "Inglizchangiz zo'r! Ruscha ham gapira olasizmi?" },
            { who: "Aziz", en: "Yes, I can. And next year I'll be able to speak German, I hope!", uz: "Ha, gapira olaman. Kelasi yil nemischa ham gapira olsam kerak, umid qilaman!" },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Aziz couldn't speak English well last year.", a: true, why: "*I couldn't speak English well last year.*" } },
      ],
    },
  ],
  words: [
    { en: "ability", uz: "qobiliyat", ipa: "əˈbɪləti", pos: "noun", ex: "She has the ability to learn fast.", exUz: "Uning tez o'rganish qobiliyati bor." },
    { en: "skill", uz: "malaka, ko'nikma", ipa: "skɪl", pos: "noun", ex: "Cooking is a useful skill.", exUz: "Ovqat pishirish — foydali ko'nikma." },
    { en: "talent", uz: "iste'dod", ipa: "ˈtælənt", pos: "noun", ex: "Dilnoza has a talent for music.", exUz: "Dilnozaning musiqaga iste'dodi bor." },
    { en: "manage to", uz: "uddalamoq, ulgurmoq", ipa: "ˈmænɪdʒ tuː", pos: "phrase", ex: "I managed to finish on time.", exUz: "Vaqtida tugatishga ulgurdim." },
    { en: "permission", uz: "ruxsat", ipa: "pəˈmɪʃn", pos: "noun", ex: "You need permission to enter.", exUz: "Kirish uchun ruxsat kerak." },
    { en: "allowed", uz: "ruxsat etilgan", ipa: "əˈlaʊd", pos: "adj", ex: "Dogs aren't allowed in the café.", exUz: "Kafega itlarni kiritish mumkin emas." },
    { en: "possible", uz: "mumkin, imkoni bor", ipa: "ˈpɒsəbl", pos: "adj", ex: "Is it possible to pay by card?", exUz: "Karta bilan to'lash mumkinmi?" },
    { en: "impossible", uz: "imkonsiz", ipa: "ɪmˈpɒsəbl", pos: "adj", ex: "It's impossible to finish in one hour.", exUz: "Buni bir soatda tugatish imkonsiz." },
    { en: "be good at", uz: "…da yaxshi bo'lmoq", ipa: "bi ɡʊd æt", pos: "phrase", ex: "Kamol is good at maths.", exUz: "Kamol matematikada kuchli." },
    { en: "by myself", uz: "o'zim, yolg'iz o'zim", ipa: "baɪ maɪˈself", pos: "phrase", ex: "I can carry it by myself.", exUz: "Uni o'zim ko'tara olaman." },
  ],
  practice: [
    { k: "match", pairs: [["ability", "qobiliyat"], ["skill", "ko'nikma"], ["permission", "ruxsat"], ["possible", "mumkin"], ["impossible", "imkonsiz"]] },
    { k: "listen", say: "Could you swim when you were five?", opts: ["Could you swim when you were five?", "Can you swim when you are five?", "Could you swim when you were nine?"], a: 0 },
    { k: "listen", say: "I won't be able to come.", opts: ["I won't be able to come.", "I wasn't able to come.", "I can't come."], a: 0 },
    { k: "choice", q: "Next year she ___ speak English fluently.", opts: ["will can", "will be able to", "can will", "is able"], a: 1, why: "Kelajak → **will be able to**." },
    { k: "choice", q: "He ___ read when he was only four.", opts: ["can", "could", "will can", "is able"], a: 1, why: "O'tgan zamonda umumiy qobiliyat → **could**." },
    { k: "choice", q: "The shop was open, so I ___ buy some bread.", opts: ["can", "was able to", "am able to", "could to"], a: 1, why: "Bitta aniq voqea → **was able to**." },
    { k: "choice", q: "Qaysi gap **xato**?", opts: ["I can swim.", "She can speak French.", "They will can come.", "We couldn't find it."], a: 2, why: "**will can** yo'q. To'g'ri: *They will be able to come.*" },
    { k: "fill", q: "I haven't been ___ to sleep well this week.", a: ["able"], why: "Present Perfect → **have been able to**." },
    { k: "fill", q: "___ I borrow your dictionary, please?", a: ["Could", "Can", "May"], why: "Ruxsat so'rash: **Could / Can / May I…?**" },
    { k: "fill", q: "My little sister ___ ride a bike yet. (hozircha qila olmaydi)", a: ["can't", "cannot", "can not"], why: "Hozir, inkor → **can't**." },
    { k: "tf", q: "**Last night I could finish the report** — bitta aniq voqea uchun eng tabiiy shakl.", a: false, why: "Bu holatda **was able to** (yoki *managed to*) tabiiyroq." },
    { k: "tf", q: "**Could I use your phone?** — o'tmish haqida savol.", a: false, why: "Bu hozirgi muloyim iltimos." },
    { k: "order", uz: "Men sizga ertaga yordam bera olaman.", words: ["I", "will", "be", "able", "to", "help", "you", "tomorrow."], extra: ["can", "am"], alt: [["Tomorrow", "I", "will", "be", "able", "to", "help", "you."]] },
    { k: "order", uz: "Bobom yoshligida tez yugura olardi.", words: ["My", "grandfather", "could", "run", "fast", "when", "he", "was", "young."], extra: ["can", "to"] },
    { k: "translate", uz: "Men yaxshi suza olmayman.", a: ["I can't swim well.", "I cannot swim well.", "I can not swim well.", "I'm not able to swim well.", "I am not able to swim well."] },
    { k: "speak", say: "I could swim when I was five, and now I can swim very well.", uz: "Besh yoshimda suza olardim, hozir esa juda yaxshi suzaman." },
  ],
  quiz: [
    { k: "choice", q: "I'm sorry, I ___ come to your party tomorrow.", opts: ["won't can", "won't be able to", "can't to", "don't can"], a: 1, why: "**won't be able to**." },
    { k: "choice", q: "___ you speak English when you were ten?", opts: ["Can", "Could", "Will", "Are"], a: 1, why: "O'tgan zamon → **Could**." },
    { k: "choice", q: "Last night the train was late, but we ___ get home before midnight.", opts: ["can", "could", "were able to", "will be able to"], a: 2, why: "Bitta aniq voqea, musbat → **were able to**." },
    { k: "choice", q: "\"Derazani ochsam bo'ladimi?\" (muloyim)", opts: ["Could I open the window?", "Do I can open the window?", "Am I could open the window?", "Could I to open the window?"], a: 0, why: "**Could I + V1?**" },
    { k: "fill", q: "She ___ speak three languages. (U gapira oladi.)", a: ["can", "is able to"], why: "Hozirgi qobiliyat → **can**." },
    { k: "fill", q: "You will ___ able to read this book next year.", a: ["be"], why: "**will be able to**." },
    { k: "tf", q: "**He cans swim** — to'g'ri gap.", a: false, why: "can ga -s qo'shilmaydi: *He can swim.*" },
    { k: "listen", say: "She wasn't able to find her keys.", opts: ["She wasn't able to find her keys.", "She isn't able to find her keys.", "She won't be able to find her keys."], a: 0 },
    { k: "order", uz: "Siz bu yerda chekishingiz mumkin emas.", words: ["You", "can't", "smoke", "here."], extra: ["cans", "to"] },
    { k: "translate", uz: "Men o'tgan yili yugura olmasdim.", a: ["I couldn't run last year.", "I wasn't able to run last year.", "Last year I couldn't run.", "Last year I wasn't able to run."] },
  ],
  summary: [
    "**can** — hozirgi qobiliyat va ruxsat; **could** — o'tmishdagi umumiy qobiliyat va muloyim iltimos (*Could I…?*).",
    "Bitta aniq voqea, uddalagan (musbat) → **was / were able to** yoki *managed to*: *I was able to catch the bus.*",
    "Kelajak va Present Perfect uchun **be able to**: *I will be able to…, I haven't been able to…* (**will can ❌**).",
    "Hamma modal fe'llardan keyin **to yo'q** va -s yo'q: *I can swim* (I can to swim ❌).",
  ],
  homework: "Uchta ro'yxat yozing: (1) 5 ta nimani **hozir** qila olasiz (*I can…*), (2) 3 ta nimani **bolaligingizda** qila olardingiz (*I could…*), (3) 3 ta nimani **kelasi yil** qila olishingizni umid qilasiz (*I will be able to…*).",
};

export default lesson;
