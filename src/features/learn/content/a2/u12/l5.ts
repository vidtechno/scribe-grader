import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u12-l5",
  title: "Used to",
  titleUz: "Used to: avval shunday edi",
  goal: "**used to + V1** bilan o'tmishdagi **odatlar va holatlarni** aytasiz (*I used to play chess every day*), **didn't use to** va **Did you use to…?** shakllarini tuzasiz, **used to** va **Past Simple** ni to'g'ri tanlaysiz hamda *use to / used to going* kabi xatolardan qochasiz.",
  slides: [
    {
      title: "Used to nima?",
      blocks: [
        { t: "p", md: "**used to + V1** o'tmishda **odat bo'lgan** yoki **doim shunday bo'lgan**, lekin **endi bunday emas** narsani bildiradi. O'zbekchada: *avval ... edi, ... lar edim, ... ardim*." },
        {
          t: "examples", items: [
            { en: "I used to play chess every day.", uz: "Avval har kuni shaxmat o'ynar edim.", note: "O'tgan odat — endi o'ynamayman." },
            { en: "We used to live in a small village.", uz: "Biz avval kichik qishloqda yashar edik.", note: "O'tgan holat — endi yashamaymiz." },
            { en: "She used to have long hair.", uz: "Uning sochi uzun edi (avval).", note: "Endi qisqa." },
            { en: "There used to be a cinema here.", uz: "Bu yerda avval kinoteatr bo'lgan.", note: "Endi yo'q." },
          ],
        },
        { t: "tip", tone: "info", md: "**used to** hamma shaxs uchun **bir xil** (*I, he, they used to*). Undan keyin **fe'l V1**: *used to **go***. **Faqat o'tgan zamon** uchun, hozirgi zamonda *use to* degan shakl yo'q — hozirgi odat uchun **usually** ishlating." },
        { t: "check", ex: { k: "choice", q: "\"Avval men dengizga tez-tez borar edim.\"", opts: ["I used to go to the sea often.", "I use to go to the sea often.", "I used to going to the sea often.", "I was use to go to the sea often."], a: 0, why: "**used to + V1**." } },
      ],
    },
    {
      title: "Inkor va savol",
      blocks: [
        { t: "p", md: "Inkor va savolda **did** ishlatiladi, shuning uchun **used** → **use** (Past Simple dagi *did + V1* kabi):" },
        {
          t: "table", head: ["", "Shakl", "Misol"], speak: [2],
          rows: [
            ["+", "ega + **used to** + V1", "He used to smoke."],
            ["−", "ega + **didn't use to** + V1", "I didn't use to like coffee."],
            ["?", "**Did** + ega + **use to** + V1?", "Did you use to walk to school?"],
            ["Javob", "Yes, I did. / No, I didn't.", "Did she use to live here? — Yes, she did."],
            ["Wh-", "So'roq so'z + did + ega + use to…?", "Where did you use to live?"],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I didn't use to like vegetables.", "Did you use to play football?", "What did you use to do?"] },
          bad: { title: "Xato", items: ["I didn't used to like vegetables.", "Did you used to play football?", "What did you used to do?"] },
        },
        { t: "tip", tone: "warn", md: "Qoida o'sha: **did / didn't dan keyin asosiy shakl** (*use*, *go*, *play*). Shuning uchun *didn't **use** to*, *Did you **use** to…?* (**used** emas)." },
        { t: "check", ex: { k: "fill", q: "Did you ___ to walk to school when you were a child?", a: ["use"], why: "*Did* dan keyin: **use to**." } },
      ],
    },
    {
      title: "Used to yoki Past Simple?",
      blocks: [
        { t: "p", md: "Ikkalasi ham o'tmishni aytadi, lekin farqi bor. **used to** — takrorlanadigan **odat** yoki uzoq davom etgan **holat**; **Past Simple** — bir marta yoki **sanalgan** (necha marta, qancha vaqt) voqea:" },
        {
          t: "table", head: ["used to (odat, holat)", "Past Simple (aniq voqea)"], speak: [0, 1],
          rows: [
            ["I used to visit Samarkand every summer.", "I visited Samarkand last summer."],
            ["She used to work in a bank.", "She worked in a bank for five years."],
            ["We used to eat plov on Sundays.", "We ate plov yesterday."],
            ["He used to be shy.", "He was shy at the party last night."],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I went to Paris three times.", "I lived in Bukhara for ten years.", "Last year I started a new job."] },
          bad: { title: "Xato", items: ["I used to go to Paris three times.", "I used to live in Bukhara for ten years.", "Last year I used to start a new job."] },
        },
        { t: "tip", tone: "good", md: "**Sanoq (three times), aniq muddat (for ten years) va yakka voqea** bilan *used to* **ishlatilmaydi** — bu yerda doim **Past Simple**. Va yana: o'tmish odati uchun Past Simple ham to'g'ri, faqat *used to* \"endi bunday emas\" ni **aniq ta'kidlaydi**." },
        { t: "check", ex: { k: "choice", q: "Qaysi gap **xato**?", opts: ["I used to play tennis when I was young.", "She used to live in Khiva.", "We used to go to Turkey in 2019.", "He didn't use to wear glasses."], a: 2, why: "*in 2019* — aniq vaqt, yakka voqea → **We went to Turkey in 2019.**" } },
      ],
    },
    {
      title: "Odatiy xatolar",
      blocks: [
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I used to get up early.", "She used to play the piano.", "I'm used to getting up early now. (ko'nikkanman)"] },
          bad: { title: "Xato", items: ["I use to get up early.", "She used to played the piano.", "I used to getting up early."] },
        },
        { t: "tip", tone: "warn", md: "**Uch xavfli narsa:**\n1. Darak gapda **used** (d bilan!), o'qilishi \"yu:st tu\".\n2. **used to + V1**, -ing yoki V2 emas.\n3. **be used to + -ing** (*I'm used to getting up early*) — butunlay boshqa qurilma: \"ko'nikkanman\". Hozircha faqat **used to + V1** ni ishlating." },
        {
          t: "sounds", items: [
            { label: "used to", say: "used to", uz: "**\"yu:st tu\"** (so'zlashuvda \"yu:sta\"). Ikkinchi *s* jarangsiz: **\"yust\"**, \"yuzd\" emas.", examples: ["used to", "I used to play", "We used to live"] },
          ],
        },
        { t: "check", ex: { k: "fill", q: "She used to ___ the piano when she was young. (play)", a: ["play"], why: "**used to + V1**." } },
        { t: "check", ex: { k: "tf", q: "**I didn't used to like tea.** — to'g'ri gap.", a: false, why: "**didn't use to**: *I didn't **use** to like tea.*" } },
      ],
    },
    {
      title: "O'qing: Bobom hikoyasi",
      blocks: [
        {
          t: "text", title: "My grandfather's Tashkent",
          en: "My grandfather is eighty now, and he loves talking about the past. \"When I was a boy, life was different,\" he says. \"We didn't use to have a TV or a fridge. In the evenings we used to sit in the yard and listen to stories. The street near our house used to be very quiet, and there were no big buildings. Children used to play outside until it got dark. I used to walk to school because there wasn't any metro.\" He smiles. \"Tashkent has changed, but my favourite thing is the same: my wife's plov!\"",
          uz: "Bobom hozir sakson yoshda va o'tmish haqida gapirishni yaxshi ko'radi. \"Men bola paytimda hayot boshqacha edi,\" deydi u. \"Bizda televizor ham, muzlatgich ham yo'q edi. Kechqurunlari hovlida o'tirib, hikoyalar tinglar edik. Uyimiz yaqinidagi ko'cha juda sokin bo'lardi, katta binolar ham yo'q edi. Bolalar qorong'i tushguncha tashqarida o'ynar edi. Men maktabga piyoda borardim, chunki metro yo'q edi.\" U jilmayadi. \"Toshkent o'zgardi, lekin eng yaxshi ko'rgan narsam o'sha-o'sha: buvingning palovi!\"",
        },
        { t: "check", ex: { k: "tf", q: "Grandfather's family had a TV when he was a boy.", a: false, why: "*We **didn't use to have** a TV or a fridge.*" } },
        { t: "check", ex: { k: "choice", q: "How did Grandfather get to school?", opts: ["By metro.", "By bus.", "He walked.", "By bike."], a: 2, why: "*I used to walk to school because there wasn't any metro.*" } },
      ],
    },
    {
      title: "Dialog: Avval va hozir",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Dilnoza", en: "Kamol, you look different! Did you use to have a beard?", uz: "Kamol, o'zgarib ketibsan! Avval soqolli eding-mi?" },
            { who: "Kamol", en: "Yes, I did. I had a beard for two years, but I shaved it last month.", uz: "Ha. Ikki yil soqol qo'ydim, lekin o'tgan oy oldim." },
            { who: "Dilnoza", en: "And you don't wear glasses now!", uz: "Hozir ko'zoynak ham taqmayapsan!" },
            { who: "Kamol", en: "No, I wear contact lenses. I used to hate them, but now I'm fine.", uz: "Ha, linza taqaman. Avval ularni yoqtirmas edim, hozir hechqisi yo'q." },
            { who: "Dilnoza", en: "Did you use to play football too?", uz: "Avval futbol ham o'ynar eding-mi?" },
            { who: "Kamol", en: "Yes, every day! Now I only go swimming on Sundays. What about you?", uz: "Ha, har kuni! Hozir faqat yakshanba kunlari suzishga boraman. O'zing-chi?" },
            { who: "Dilnoza", en: "I didn't use to like running, but now I run every morning!", uz: "Avval yugurishni yoqtirmas edim, hozir esa har ertalab yuguraman!" },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Kamol still plays football every day.", a: false, why: "*Now I only go swimming on Sundays* — avval har kuni o'ynardi, hozir emas." } },
      ],
    },
  ],
  words: [
    { en: "childhood", uz: "bolalik", ipa: "ˈtʃaɪldhʊd", pos: "noun", ex: "I had a happy childhood.", exUz: "Mening bolaligim baxtli o'tgan." },
    { en: "grow up – grew up", uz: "ulg'ayib kamolga yetmoq", ipa: "ɡrəʊ ʌp – ɡruː ʌp", pos: "phrasal verb", ex: "I grew up in a small town.", exUz: "Men kichik shaharchada katta bo'lganman." },
    { en: "neighbourhood", uz: "mahalla, tuman", ipa: "ˈneɪbəhʊd", pos: "noun", ex: "It's a quiet neighbourhood.", exUz: "Bu sokin mahalla." },
    { en: "in those days", uz: "o'sha kunlarda", ipa: "ɪn ðəʊz deɪz", pos: "phrase", ex: "In those days we had no phones.", exUz: "O'sha kunlarda bizda telefon yo'q edi." },
    { en: "no longer", uz: "endi ... emas", ipa: "nəʊ ˈlɒŋɡə", pos: "phrase", ex: "He no longer lives here.", exUz: "U endi bu yerda yashamaydi." },
    { en: "change", uz: "o'zgarmoq; o'zgarish", ipa: "tʃeɪndʒ", pos: "verb / noun", ex: "The city has changed a lot.", exUz: "Shahar juda o'zgargan." },
    { en: "traditional", uz: "an'anaviy", ipa: "trəˈdɪʃənl", pos: "adjective", ex: "We cooked a traditional meal.", exUz: "Biz an'anaviy taom pishirdik." },
    { en: "habit", uz: "odat", ipa: "ˈhæbɪt", pos: "noun", ex: "Biting nails is a bad habit.", exUz: "Tirnoq tishlash yomon odat." },
    { en: "memory", uz: "xotira; esdalik", ipa: "ˈmeməri", pos: "noun", ex: "I have happy memories of that summer.", exUz: "O'sha yoz haqida yaxshi xotiralarim bor." },
    { en: "village", uz: "qishloq", ipa: "ˈvɪlɪdʒ", pos: "noun", ex: "My grandparents live in a village.", exUz: "Bobom-buvim qishloqda yashaydi." },
  ],
  practice: [
    { k: "match", pairs: [["childhood", "bolalik"], ["habit", "odat"], ["village", "qishloq"], ["traditional", "an'anaviy"], ["memory", "xotira"]] },
    { k: "match", pairs: [["used to + V1", "o'tgan odat"], ["didn't use to", "avval ... emas edi"], ["Did you use to…?", "avval ... eding-mi?"], ["no longer", "endi ... emas"]] },
    { k: "listen", say: "I used to play chess every day.", opts: ["I use to play chess every day.", "I used to play chess every day.", "I'm used to playing chess every day."], a: 1 },
    { k: "listen", say: "Did you use to live in the village?", opts: ["Did you use to live in the village?", "Did you used to live in the village?", "Do you use to live in the village?"], a: 0 },
    { k: "fill", q: "We ___ to live in Fergana, but now we live in Tashkent.", a: ["used"], why: "Darak gap: **used to**." },
    { k: "fill", q: "I ___ use to like fish, but now I love it. (inkor)", a: ["didn't", "did not"], why: "Inkor: **didn't use to**." },
    { k: "fill", q: "___ she use to have long hair?", a: ["Did"], uz: "Avval uning sochi uzun edi-mi?", why: "Savol: **Did** + ega + **use to**." },
    { k: "fill", q: "Where did you ___ to go on holiday?", a: ["use"], why: "*did* dan keyin **use to**." },
    { k: "choice", q: "Qaysi gap **to'g'ri**?", opts: ["He used to going to the gym.", "He use to go to the gym.", "He used to go to the gym.", "He was used go to the gym."], a: 2, why: "**used to + V1**." },
    { k: "choice", q: "Qaysi gap uchun **used to** mos **emas**?", opts: ["Avval u har kuni sutni ichardi.", "Avval bu yerda bozor bor edi.", "Men Parijga uch marta bordim.", "Bolaligimda ko'p kitob o'qirdim."], a: 2, why: "Sanalgan marta (*three times*) → Past Simple: *I went to Paris three times.*" },
    { k: "tf", q: "**I didn't used to wake up early.** — to'g'ri gap.", a: false, why: "**didn't use to**." },
    { k: "tf", q: "**She used to be shy, but now she isn't.** — avval uyatchan edi, hozir emas.", a: true },
    { k: "order", uz: "Avval u kichik kvartirada yashar edi.", words: ["He", "used", "to", "live", "in", "a", "small", "flat."], extra: ["use", "living"], alt: [["He", "used", "to", "live", "in", "a", "small", "apartment."]] },
    { k: "translate", uz: "Bolaligimda men har yozda qishloqqa borar edim.", a: ["When I was a child, I used to go to the village every summer.", "I used to go to the village every summer when I was a child.", "When I was a child I used to go to the village every summer.", "As a child, I used to go to the village every summer.", "As a child I used to go to the village every summer."] },
    { k: "speak", say: "When I was a child, I used to play outside every day.", uz: "Bolaligimda har kuni tashqarida o'ynar edim." },
  ],
  quiz: [
    { k: "choice", q: "My grandmother ___ cook plov every Friday.", opts: ["use to", "used to", "uses to", "was used to"], a: 1, why: "**used to + V1**." },
    { k: "choice", q: "We ___ have a car when I was a kid.", opts: ["didn't used to", "didn't use to", "not used to", "don't use to"], a: 1, why: "**didn't use to**." },
    { k: "choice", q: "___ you use to play chess?", opts: ["Do", "Did", "Were", "Are"], a: 1, why: "Savol: **Did** … use to." },
    { k: "choice", q: "Qaysi gap **xato**?", opts: ["There used to be a park here.", "I used to hate mornings.", "We used to went to the lake.", "She didn't use to eat fish."], a: 2, why: "**used to + V1**: *We used to **go** to the lake.*" },
    { k: "fill", q: "I used to ___ a lot of sweets, but now I don't. (eat)", a: ["eat"], why: "**used to + V1**." },
    { k: "fill", q: "Last summer we ___ to Khiva. (go) — bir marta", a: ["went"], why: "Yakka voqea → Past Simple: **went**." },
    { k: "listen", say: "She didn't use to like coffee.", opts: ["She didn't use to like coffee.", "She doesn't use to like coffee.", "She didn't used to like coffee."], a: 0 },
    { k: "tf", q: "**I used to visit Bukhara twice.** — to'g'ri gap.", a: false, why: "*twice* — sanalgan marta: **I visited Bukhara twice.**" },
    { k: "order", uz: "Bu yerda avval kinoteatr bor edi.", words: ["There", "used", "to", "be", "a", "cinema", "here."], extra: ["is", "use"] },
    { k: "translate", uz: "Men avval kofe ichmas edim.", a: ["I didn't use to drink coffee.", "I never used to drink coffee."], why: "**didn't use to + V1**." },
  ],
  summary: [
    "**used to + V1** — o'tgan odat yoki holat, hozir endi bunday emas: *I used to play chess.*",
    "Inkor va savol: **didn't use to**, **Did you use to…?** — **used** emas, **use**.",
    "Sanalgan marta, aniq muddat va yakka voqea uchun **Past Simple**: *I went to Paris three times.*",
    "*use to* (darak gapda), *used to going*, *didn't used to* — odatiy xatolar.",
  ],
  homework: "Bolaligingiz va hozirgi hayotingizni solishtiring: 8 ta gap yozing — 4 tasi **I used to…**, 2 tasi **I didn't use to…**, 2 tasi **Did you use to…?** savoli bo'lsin. Har bir gapda hozirgi holatni ham ayting (*I used to…, but now I…*). Bobo yoki buvingizdan \"Siz avval nima qilar edingiz?\" deb so'rab, javobini inglizcha yozing.",
};

export default lesson;
