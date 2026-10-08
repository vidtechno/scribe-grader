import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u8-l3",
  title: "Money & prices",
  titleUz: "Pul, narx va How much?",
  goal: "Narxni so'raysiz va aytasiz: **How much is this? / How much are these? / How much does it cost?** Katta summalarni (**fifteen thousand soums, £3.50**) to'g'ri o'qiysiz va to'lov iboralarini ishlatasiz: **pay by card, pay in cash, change, receipt**.",
  slides: [
    {
      title: "Narx so'rash: is yoki are?",
      blocks: [
        { t: "p", md: "Beginner darajasida *How much is it?* ni o'rgandik. Endi to'liq tizim: **birlik** narsa uchun **is / does**, **ko'plik** uchun **are / do**:" },
        {
          t: "table", head: ["Savol", "Javob", "O'zbekcha"],
          rows: [
            ["How much is this bag?", "It's 40 dollars.", "Bu sumka qancha?"],
            ["How much are these shoes?", "They're 60 dollars.", "Bu tuflilar qancha?"],
            ["How much does this bag cost?", "It costs 40 dollars.", "Bu sumka qancha turadi?"],
            ["How much do these shoes cost?", "They cost 60 dollars.", "Bu tuflilar qancha turadi?"],
          ],
          speak: [0, 1],
        },
        { t: "tip", tone: "info", md: "**cost** — oddiy fe'l (Present Simple): *it cost**s***, *they cost*. Savolda **does / do** keladi va **cost** -s olmaydi: *How much **does** it **cost**?*" },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["How much is it?", "How much does it cost?", "How much are these apples?", "It costs five dollars."] },
          bad: { title: "Xato", items: ["How much it costs?", "How much cost it?", "How much is these apples?", "It cost five dollars. (hozir)"] },
        },
        { t: "check", ex: { k: "choice", q: "How much ___ these tomatoes?", opts: ["is", "are", "does", "do"], a: 1, why: "**tomatoes** — ko'plik → **How much are…?** (*do* bo'lsa, oxirida *cost* kerak bo'lardi)." } },
      ],
    },
    {
      title: "Katta sonlar va narxni o'qish",
      blocks: [
        { t: "p", md: "O'zbekistonda narxlar ming va yuz minglarda. Inglizchada **hundred** (yuz) va **thousand** (ming) son bilan kelganda **-s olmaydi**:" },
        {
          t: "table", head: ["Yozilishi", "O'qilishi"],
          rows: [
            ["500", "five hundred"],
            ["2,000", "two thousand"],
            ["15,000", "fifteen thousand"],
            ["250,000", "two hundred and fifty thousand"],
            ["1,000,000", "a million / one million"],
          ],
          speak: [1],
        },
        { t: "tip", tone: "warn", md: "*five thousands* ❌ → **five thousand** ✅. *two hundreds* ❌ → **two hundred** ✅.\nBritaniyada **hundred** dan keyin **and** aytiladi: *two hundred **and** fifty*. Raqamda minglar **vergul** bilan ajratiladi: *15,000* (nuqta emas!)." },
        { t: "p", md: "Valyutalar va tiyinli narxlar. Odatda tiyin qismida **pence / cents** so'zi aytilmaydi:" },
        {
          t: "table", head: ["Narx", "Qanday o'qiladi"],
          rows: [
            ["£3.50", "three pounds fifty"],
            ["$12.99", "twelve ninety-nine / twelve dollars ninety-nine"],
            ["€8.20", "eight euros twenty"],
            ["75p", "seventy-five pence (\"p\" deb ham aytiladi)"],
            ["30,000 soums", "thirty thousand soums"],
          ],
          speak: [1],
        },
        { t: "tip", tone: "info", md: "O'zbek so'mi inglizcha matnlarda odatda **soum** (ko'plikda **soums**) deb yoziladi. Funt — **pound**, uning yuzdan biri — **penny** (ko'plikda **pence**)." },
        { t: "check", ex: { k: "listen", say: "It's fifteen thousand soums.", opts: ["It's fifteen thousand soums.", "It's fifty thousand soums.", "It's five thousand soums."], a: 0, why: "**fif-TEEN** — urg'u oxirida; *FIF-ty* da urg'u boshida." } },
      ],
    },
    {
      title: "To'lash: by card, in cash, change",
      blocks: [
        {
          t: "table", head: ["Ibora", "O'zbekcha"],
          rows: [
            ["pay by card", "karta bilan to'lash"],
            ["pay in cash", "naqd pul bilan to'lash"],
            ["pay for the tickets", "chiptalar uchun to'lash"],
            ["Here's your change.", "Mana qaytimingiz."],
            ["Can I have a receipt, please?", "Chek bera olasizmi?"],
            ["Keep the change.", "Qaytim kerak emas."],
          ],
          speak: [0],
        },
        { t: "tip", tone: "warn", md: "O'zbek tilida so'zlashuvchilarning tipik xatosi: *pay the shoes* ❌. Narsa uchun to'lasangiz — **pay for**: *I paid **for** the shoes.* Odamga to'lasangiz — **for** kerak emas: *I paid the taxi driver.*" },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["Can I pay by card?", "I paid in cash.", "She paid for the coffee."] },
          bad: { title: "Xato", items: ["Can I pay by a card?", "I paid on cash.", "She paid the coffee."] },
        },
        { t: "check", ex: { k: "fill", q: "Can I pay ___ card, please?", a: ["by"], uz: "Karta bilan to'lasam bo'ladimi?", why: "Doimiy ibora: **pay by card**, lekin **pay in cash**." } },
      ],
    },
    {
      title: "Talaffuz: receipt, change, costs",
      blocks: [
        {
          t: "sounds", items: [
            { label: "receipt", say: "receipt", uz: "**\"risi:t\"** — **p** umuman o'qilmaydi!", examples: ["receipt", "Can I have a receipt?"] },
            { label: "change", say: "change", uz: "**\"cheynj\"** — oxiri yumshoq \"j\".", examples: ["change", "Here's your change."] },
            { label: "costs", say: "costs", uz: "**\"kosts\"** — oxirida **sts**, \"s\" ni yutib yubormang.", examples: ["It costs ten pounds."] },
            { label: "thousand", say: "thousand", uz: "**\"tauzənd\"** — *th* tilni tishlar orasiga qo'yib; \"s\" emas, **\"z\"** eshitiladi.", examples: ["two thousand", "ten thousand soums"] },
            { label: "pence", say: "pence", uz: "**\"pens\"** — oxirida **s** (*pens* \"penz\" — ruchkalar — oxirida z).", examples: ["fifty pence"] },
          ],
        },
        { t: "check", ex: { k: "tf", q: "**receipt** so'zida **p** harfi o'qilmaydi: \"risi:t\".", a: true } },
      ],
    },
    {
      title: "O'qing: Siyob bozorida",
      blocks: [
        {
          t: "text", title: "A scarf from Siyob Bazaar",
          en: "Emma is from Manchester. She is on holiday in Samarkand, and today she is at Siyob Bazaar. She wants a present for her mum, and she finds a beautiful silk scarf.\n\"How much is this scarf?\" she asks.\n\"It's three hundred thousand soums,\" says the seller.\nThat's about twenty pounds. \"It's a bit expensive. Can you give me a discount?\"\nThe seller smiles. \"OK, two hundred and fifty thousand.\"\nEmma pays in cash. She gives him three notes of a hundred thousand soums, and he gives her fifty thousand soums change. Her mum is going to love it!",
          uz: "Emma Manchesterdan. U Samarqandda dam olyapti, bugun esa Siyob bozorida. U oyisiga sovg'a olmoqchi va chiroyli ipak ro'mol topadi.\n\"Bu ro'mol qancha?\" — deb so'raydi u.\n\"Uch yuz ming so'm\", — deydi sotuvchi.\nBu taxminan yigirma funt. \"Biroz qimmat ekan. Chegirma qila olasizmi?\"\nSotuvchi jilmayadi. \"Mayli, ikki yuz ellik ming.\"\nEmma naqd pul bilan to'laydi. U sotuvchiga yuz ming so'mlik uchta qog'oz pul beradi, sotuvchi esa unga ellik ming so'm qaytim beradi. Oyisiga bu albatta yoqadi!",
        },
        { t: "check", ex: { k: "choice", q: "How much does Emma pay for the scarf?", opts: ["300,000 soums", "250,000 soums", "50,000 soums", "20,000 soums"], a: 1, why: "Chegirmadan keyin: *two hundred and fifty thousand*. 50,000 — bu qaytim." } },
        { t: "check", ex: { k: "tf", q: "Emma pays by card.", a: false, why: "*Emma pays in cash.* — naqd pul bilan." } },
      ],
    },
    {
      title: "Dialog: kassada",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Cashier", en: "Hello! Have you got a bag?", uz: "Salom! Sumkangiz bormi?" },
            { who: "Rustam", en: "No, can I have one, please? How much are the bags?", uz: "Yo'q, bitta bera olasizmi? Paketlar qancha turadi?" },
            { who: "Cashier", en: "They're two thousand soums. So that's eighty-seven thousand altogether.", uz: "Ikki ming so'm. Demak, hammasi bo'lib sakson yetti ming." },
            { who: "Rustam", en: "Can I pay by card?", uz: "Karta bilan to'lasam bo'ladimi?" },
            { who: "Cashier", en: "Sorry, the card machine isn't working today. Cash only.", uz: "Kechirasiz, bugun terminal ishlamayapti. Faqat naqd." },
            { who: "Rustam", en: "No problem. Here's a hundred thousand.", uz: "Muammo yo'q. Mana yuz ming." },
            { who: "Cashier", en: "Thank you. Here's your change — thirteen thousand — and your receipt.", uz: "Rahmat. Mana qaytimingiz — o'n uch ming — va chekingiz." },
          ],
        },
        { t: "tip", tone: "good", md: "Foydali iboralar: **altogether** (hammasi bo'lib), **Cash only.** (faqat naqd), **The card machine isn't working.** (terminal ishlamayapti)." },
        { t: "check", ex: { k: "order", uz: "Bu tuflilar qancha turadi?", words: ["How", "much", "do", "these", "shoes", "cost?"], extra: ["does", "costs"], why: "Ko'plik → **do**, savolda **cost** -s siz." } },
      ],
    },
  ],
  words: [
    { en: "cost", uz: "turmoq (narxi …)", ipa: "kɒst", pos: "verb", ex: "How much does this jacket cost?", exUz: "Bu kurtka qancha turadi?" },
    { en: "pay", uz: "to'lamoq", ipa: "peɪ", pos: "verb", ex: "Can I pay by card?", exUz: "Karta bilan to'lasam bo'ladimi?" },
    { en: "cash", uz: "naqd pul", ipa: "kæʃ", pos: "noun", ex: "I always pay in cash at the bazaar.", exUz: "Bozorda doim naqd to'layman." },
    { en: "card", uz: "(bank) karta", ipa: "kɑːd", pos: "noun", ex: "She paid by card.", exUz: "U karta bilan to'ladi." },
    { en: "change", uz: "qaytim; mayda pul", ipa: "tʃeɪndʒ", pos: "noun", ex: "Here's your change.", exUz: "Mana qaytimingiz." },
    { en: "receipt", uz: "chek", ipa: "rɪˈsiːt", pos: "noun", ex: "Can I have a receipt, please?", exUz: "Chek bera olasizmi?" },
    { en: "discount", uz: "chegirma", ipa: "ˈdɪs.kaʊnt", pos: "noun", ex: "Can you give me a discount?", exUz: "Chegirma qila olasizmi?" },
    { en: "coin", uz: "tanga", ipa: "kɔɪn", pos: "noun", ex: "I've got a few coins in my pocket.", exUz: "Cho'ntagimda bir nechta tanga bor." },
    { en: "note", uz: "qog'oz pul (kupyura)", ipa: "nəʊt", pos: "noun", ex: "He gave me a ten-pound note.", exUz: "U menga o'n funtlik banknota berdi." },
    { en: "thousand", uz: "ming", ipa: "ˈθaʊ.zənd", pos: "number", ex: "It costs fifteen thousand soums.", exUz: "U o'n besh ming so'm turadi." },
  ],
  practice: [
    { k: "listen", say: "That's twelve pounds fifty.", opts: ["That's twelve pounds fifty.", "That's twenty pounds fifty.", "That's twelve pounds fifteen."], a: 0, why: "£12.50 — **twelve pounds fifty**." },
    { k: "listen", say: "It costs ninety thousand soums.", opts: ["It costs ninety thousand soums.", "It costs nineteen thousand soums.", "It costs nine thousand soums."], a: 0 },
    { k: "choice", q: "How much ___ this bag cost?", opts: ["is", "are", "does", "do"], a: 2, why: "Birlik + **cost** → **does**." },
    { k: "choice", q: "Qaysi savol **xato**?", opts: ["How much is it?", "How much does it cost?", "How much it costs?", "How much are they?"], a: 2, why: "Savolda yordamchi fe'l kerak: *How much **does** it cost?*" },
    { k: "choice", q: "4,000 qanday o'qiladi?", opts: ["four thousands", "four thousand", "four of thousand", "fourth thousand"], a: 1, why: "**thousand** son bilan -s olmaydi." },
    { k: "fill", q: "I want to pay ___ cash.", a: ["in", "with"], uz: "Naqd pul bilan to'lamoqchiman.", why: "Eng tabiiy ibora — **pay in cash**; *with cash* ham to'g'ri." },
    { k: "fill", q: "This T-shirt ___ ten dollars.", a: ["costs", "is"], uz: "Bu futbolka o'n dollar turadi.", why: "**it** → **costs** (yoki *is*)." },
    { k: "fill", q: "Here's your ___ — two thousand soums.", a: ["change"], uz: "Mana qaytimingiz — ikki ming so'm." },
    { k: "fill", q: "My dad paid ___ the tickets.", a: ["for"], uz: "Chiptalar uchun dadam to'ladi.", why: "Narsa uchun — **pay for**." },
    { k: "tf", q: "**five thousands soums** — to'g'ri ibora.", a: false, why: "Son bilan **thousand** -s olmaydi: *five thousand soums*." },
    { k: "tf", q: "Matnda Emma sotuvchidan chegirma so'raydi.", a: true, why: "*Can you give me a discount?*" },
    { k: "match", pairs: [["cash", "naqd pul"], ["change", "qaytim"], ["receipt", "chek"], ["discount", "chegirma"], ["coin", "tanga"]] },
    { k: "order", uz: "Bu olmalar qancha?", words: ["How", "much", "are", "these", "apples?"], extra: ["is", "many"] },
    { k: "translate", uz: "Bu qancha turadi?", a: ["How much is this", "How much is it", "How much does this cost", "How much does it cost", "How much is that", "How much does that cost"] },
    { k: "translate", uz: "Karta bilan to'lasam bo'ladimi?", a: ["Can I pay by card", "Could I pay by card", "Can I pay with a card", "Could I pay with a card", "Can I pay with card", "Could I pay by card", "Can I pay with my card", "Could I pay with my card", "Can I pay by credit card", "May I pay by card"] },
    { k: "speak", say: "How much are these apples? They're twenty thousand soums a kilo.", uz: "Bu olmalar qancha? Kilosi yigirma ming so'm." },
  ],
  quiz: [
    { k: "choice", q: "How much ___ the grapes?", opts: ["is", "are", "does"], a: 1, why: "**grapes** — ko'plik → **are**." },
    { k: "choice", q: "\"Bu soat ellik dollar turadi.\"", opts: ["This watch costs fifty dollars.", "This watch cost fifty dollar.", "This watch is cost fifty dollars.", "This watch costs fifty dollar."], a: 0, why: "**it costs** + **dollars** (ko'plik)." },
    { k: "listen", say: "It's ninety-nine pence.", opts: ["It's ninety-nine pence.", "It's nineteen pence.", "It's ninety-five pence."], a: 0 },
    { k: "fill", q: "£3.50 = three pounds ___", a: ["fifty", "fifty pence"], why: "Tiyin qismi oddiy son bilan: **three pounds fifty**." },
    { k: "fill", q: "Sorry, the card machine isn't working. You can only pay ___ cash.", a: ["in", "with"], uz: "Kechirasiz, terminal ishlamayapti. Faqat naqd to'lash mumkin." },
    { k: "tf", q: "*She paid the coffee.* — \"U qahva uchun to'ladi\" degan ma'noda to'g'ri gap.", a: false, why: "Narsa uchun — **pay for**: *She paid **for** the coffee.*" },
    { k: "choice", q: "\"Can I have a receipt, please?\" — nima so'ralyapti?", opts: ["chek", "qaytim", "chegirma", "paket"], a: 0 },
    { k: "match", pairs: [["pay", "to'lamoq"], ["cost", "turmoq (narxi)"], ["note", "qog'oz pul"], ["thousand", "ming"]] },
    { k: "translate", uz: "Bu olmalar qancha turadi?", a: ["How much are these apples", "How much do these apples cost", "How much are the apples", "How much do the apples cost"] },
    { k: "order", uz: "Men naqd pul bilan to'lamoqchiman.", words: ["I", "want", "to", "pay", "in", "cash."], extra: ["on", "for"] },
  ],
  summary: [
    "Birlik: **How much is it? / How much does it cost? — It costs…**; ko'plik: **How much are they? / do they cost?**",
    "**hundred, thousand** son bilan -s olmaydi: *fifteen thousand soums*; **£3.50** = *three pounds fifty*.",
    "To'lov: **pay by card, pay in cash, pay for** something; **change** = qaytim, **receipt** = chek (\"risi:t\").",
    "Savdolashish: **It's a bit expensive. Can you give me a discount?**",
  ],
  homework: "Do'kon yoki bozorga borganingizda 6 ta mahsulot narxini inglizcha yozing va ovoz chiqarib o'qing (*Apples are twenty-two thousand soums a kilo*). Keyin kassadagi dialogni rol bo'yicha o'qing va narxlarni o'zingiznikiga almashtiring.",
};

export default lesson;
