import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u6-l5",
  title: "Ordinal numbers & dates",
  titleUz: "Tartib sonlar va sanalar",
  goal: "Tartib sonlarni (**first, second, third… twenty-first, thirty-first**) to'g'ri aytasiz va yozasiz (*1st, 2nd, 3rd*), sanani o'qiysiz (**the fifth of May**), yillarni aytasiz (**nineteen ninety-eight, twenty twenty-five**) va **on / in** bilan ishlatasiz.",
  slides: [
    {
      title: "Tartib sonlar: 1st – 10th",
      blocks: [
        { t: "p", md: "Oddiy sonlar (*one, two, three*) — **nechta**. Tartib sonlar (*first, second, third*) — **nechanchi**: *birinchi, ikkinchi, uchinchi*. Ular sana, qavat, navbat va g'oliblar haqida gapirganda kerak." },
        {
          t: "table", head: ["Son", "Tartib son", "Yozilishi", "O'zbekcha"],
          rows: [
            ["one", "first", "1st", "birinchi"],
            ["two", "second", "2nd", "ikkinchi"],
            ["three", "third", "3rd", "uchinchi"],
            ["four", "fourth", "4th", "to'rtinchi"],
            ["five", "fifth", "5th", "beshinchi"],
            ["six", "sixth", "6th", "oltinchi"],
            ["seven", "seventh", "7th", "yettinchi"],
            ["eight", "eighth", "8th", "sakkizinchi"],
            ["nine", "ninth", "9th", "to'qqizinchi"],
            ["ten", "tenth", "10th", "o'ninchi"],
          ],
          speak: [0, 1],
        },
        { t: "tip", tone: "info", md: "Ko'pchiligi oddiy: son + **-th**. Faqat **uchta** butunlay boshqacha: **first, second, third** (1st, 2nd, 3rd). Imlo o'zgaradigan to'rttasi: **five → fifth, eight → eighth, nine → ninth, twelve → twelfth**." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["fifth", "eighth", "ninth", "twelfth"] },
          bad: { title: "Xato", items: ["fiveth", "eightth", "nineth", "twelveth"] },
        },
        { t: "check", ex: { k: "fill", q: "nine → ___", a: ["ninth"], why: "**ninth** — *e* tushib qoladi." } },
      ],
    },
    {
      title: "11th dan 31st gacha",
      blocks: [
        {
          t: "table", head: ["Tartib son", "Yozilishi", "Izoh"],
          rows: [
            ["eleventh", "11th", ""],
            ["twelfth", "12th", "*ve → f*"],
            ["thirteenth", "13th", "11–19: hammasi -th"],
            ["twentieth", "20th", "*y → ie* + th"],
            ["twenty-first", "21st", "oxirgi raqam muhim: 1 → first"],
            ["twenty-second", "22nd", "2 → second"],
            ["twenty-third", "23rd", "3 → third"],
            ["thirtieth", "30th", "*y → ie* + th"],
            ["thirty-first", "31st", "eng katta sana"],
          ],
          speak: [0],
        },
        { t: "tip", tone: "warn", md: "Murakkab sonlarda faqat **oxirgi** so'z tartib songa aylanadi: *twenty-**first*** (❌ *twentieth-one*), *thirty-**second***. \nLekin **11, 12, 13** — istisno: **11th, 12th, 13th** (❌ *11st, 12nd, 13rd*)." },
        { t: "check", ex: { k: "choice", q: "22-chi qanday yoziladi?", opts: ["22th", "22st", "22nd", "22rd"], a: 2, why: "Oxirgi so'z **second** → **22nd**." } },
        { t: "check", ex: { k: "choice", q: "12-chi qanday yoziladi?", opts: ["12nd", "12th", "12st"], a: 1, why: "11, 12, 13 — doim **-th**: **12th** (twelfth)." } },
      ],
    },
    {
      title: "Sanani aytish va yozish",
      blocks: [
        { t: "p", md: "Britaniyada sana **kun → oy → yil** tartibida yoziladi, lekin o'qilganda **the** va **of** qo'shiladi:" },
        {
          t: "table", head: ["Yoziladi", "O'qiladi (BrE)", "O'zbekcha"],
          rows: [
            ["5 May / 5th May", "the fifth of May", "5-may"],
            ["1 September", "the first of September", "1-sentabr"],
            ["21 March", "the twenty-first of March", "21-mart"],
            ["31 December", "the thirty-first of December", "31-dekabr"],
          ],
          speak: [1],
        },
        { t: "p", md: "Boshqa shakl ham to'g'ri: **May the fifth** yoki AmE da **May fifth**. Amerikada yozuv **oy → kun**: *May 5*. Shuning uchun **05/06** Britaniyada *5-iyun*, AQShda esa *6-may*!" },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["the fifth of May", "May the fifth", "on the third of March"] },
          bad: { title: "Xato", items: ["the five of May", "fifth May of", "in the third of March"] },
        },
        { t: "tip", tone: "warn", md: "Sana aytilganda **oddiy son** emas, **tartib son** ishlatiladi: *the **fifth** of May*, ❌ *the five of May*. O'zbekchada ham \"besh**inchi** may\" deb o'ylang." },
        { t: "check", ex: { k: "listen", say: "the third of March", opts: ["the third of March", "the thirtieth of March", "the thirteenth of March"], a: 0, why: "\"θö:d\" — **third**, 3-mart." } },
      ],
    },
    {
      title: "Yillar va on / in",
      blocks: [
        { t: "p", md: "Yillar odatda **ikkitadan** bo'lib o'qiladi:" },
        {
          t: "table", head: ["Yil", "O'qilishi"],
          rows: [
            ["1991", "nineteen ninety-one"],
            ["1998", "nineteen ninety-eight"],
            ["2000", "two thousand"],
            ["2007", "two thousand and seven"],
            ["2025", "twenty twenty-five"],
            ["1905", "nineteen oh five"],
          ],
          speak: [1],
        },
        { t: "tip", tone: "info", md: "2001–2009: odatda **two thousand and one…nine** (AmE da *two thousand one*). 2010 dan keyin ikki usul ham bor: *twenty ten* yoki *two thousand and ten*; hozir ko'pincha **twenty twenty-five** deyiladi." },
        { t: "p", md: "Predloglar (Beginner'dagi qoidani eslang):" },
        {
          t: "table", head: ["Predlog", "Nima bilan", "Misol"],
          rows: [
            ["on", "aniq sana, kun", "on 1 September, on my birthday, on Monday"],
            ["in", "oy, yil, asr", "in May, in 1991, in the 21st century"],
          ],
          speak: [2],
        },
        {
          t: "examples", items: [
            { en: "Uzbekistan became independent in 1991.", uz: "O'zbekiston 1991-yilda mustaqil bo'ldi." },
            { en: "We celebrate Independence Day on the first of September.", uz: "Mustaqillik kunini 1-sentabrda nishonlaymiz." },
            { en: "My birthday is in June. It's on the twelfth.", uz: "Tug'ilgan kunim iyunda. 12-sanada." },
          ],
        },
        { t: "check", ex: { k: "fill", q: "Navruz is ___ the twenty-first of March.", a: ["on"], why: "Aniq sana — **on**." } },
      ],
    },
    {
      title: "Savollar: What's the date? When's your birthday?",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Shahzod", en: "What's the date today?", uz: "Bugun nechanchi sana?" },
            { who: "Gulnora", en: "It's the twenty-eighth of September.", uz: "Bugun 28-sentabr." },
            { who: "Shahzod", en: "Oh no! It's Mum and Dad's wedding anniversary on Thursday!", uz: "Voy! Payshanba kuni oyim va dadamning to'y yilligi!" },
            { who: "Gulnora", en: "Their anniversary? I thought it was in October.", uz: "To'y yilligimi? Men oktabrda deb o'ylagandim." },
            { who: "Shahzod", en: "No, it's on the thirtieth of September. They got married in 2001.", uz: "Yo'q, 30-sentabrda. Ular 2001-yilda turmush qurishgan." },
            { who: "Gulnora", en: "So it's their twenty-fifth! We need a really good present.", uz: "Demak, 25 yilligi! Bizga juda yaxshi sovg'a kerak." },
          ],
        },
        {
          t: "table", head: ["Savol", "Javob"],
          rows: [
            ["What's the date today?", "It's the tenth of October."],
            ["When's your birthday?", "It's on the second of July."],
            ["When were you born?", "I was born in 2008. / On 2 July 2008."],
            ["Which floor do you live on?", "On the fourth floor."],
          ],
          speak: [0, 1],
        },
        { t: "tip", tone: "info", md: "Tartib sonlar sanadan tashqari ham kerak: **the fifth floor**, **my first job**, **the 21st century**, **She came first** (birinchi bo'ldi).\nDiqqat: Britaniyada yerdagi qavat — **the ground floor**, undan yuqorisi — **the first floor** (bizda bu 2-qavat!)." },
        { t: "check", ex: { k: "tf", q: "Dialogga ko'ra, ota-onaning to'y yilligi **oktabrda**.", a: false, why: "*It's on the thirtieth of **September**.*" } },
      ],
    },
    {
      title: "Talaffuz: th tovushi",
      blocks: [
        { t: "p", md: "Tartib sonlarning oxiridagi **-th** — tilning uchi tishlar orasida, ovozsiz **θ**. \"t\" yoki \"s\" deb aytmang!" },
        {
          t: "sounds", items: [
            { label: "fifth", say: "fifth", uz: "**\"fifθ\"** — f, keyin darhol θ. Sekin mashq qiling: *fif — th*.", examples: ["fifth", "the fifth of May"] },
            { label: "twelfth", say: "twelfth", uz: "**\"twelfθ\"** — eng qiyin so'z! *v* emas, **f**.", examples: ["twelfth", "the twelfth of June"] },
            { label: "third", say: "third", uz: "**\"θö:d\"** — boshida θ. ❌ \"tird\" emas.", examples: ["third", "thirteenth", "thirtieth"] },
            { label: "thirteenth / thirtieth", say: "thirteenth", uz: "**thirTEENTH** — urg'u oxirida; **THIRtieth** — urg'u boshida.", examples: ["thirteenth", "thirtieth"] },
            { label: "eighth", say: "eighth", uz: "**\"eytθ\"** — *gh* o'qilmaydi.", examples: ["eighth", "the eighth floor"] },
          ],
        },
        { t: "check", ex: { k: "listen", say: "the thirtieth of June", opts: ["the thirteenth of June", "the thirtieth of June", "the third of June"], a: 1, why: "Urg'u boshida: **THIR**-tieth — 30-chi." } },
      ],
    },
    {
      title: "Matn: O'zbekistondagi bayramlar",
      blocks: [
        {
          t: "text", title: "Holidays in Uzbekistan",
          en: "There are a lot of public holidays in Uzbekistan. The year starts with New Year's Day on the first of January. On the eighth of March, people give flowers to their mothers, sisters and teachers. The most beautiful holiday is Navruz, on the twenty-first of March. Families cook sumalak and celebrate the start of spring. The ninth of May is the Day of Remembrance. Uzbekistan became independent in 1991, so the first of September is the biggest holiday of the year. A month later, on the first of October, students say thank you to their teachers. And on the eighth of December, we celebrate Constitution Day.",
          uz: "O'zbekistonda bayram kunlari ko'p. Yil 1-yanvar — Yangi yil bilan boshlanadi. 8-mart kuni odamlar onalari, opa-singillari va o'qituvchilariga gul sovg'a qilishadi. Eng go'zal bayram — 21-mart, Navro'z. Oilalar sumalak pishirib, bahor boshlanishini nishonlashadi. 9-may — Xotira kuni. O'zbekiston 1991-yilda mustaqil bo'ldi, shuning uchun 1-sentabr — yilning eng katta bayrami. Bir oydan keyin, 1-oktabrda, o'quvchilar o'qituvchilariga rahmat aytishadi. 8-dekabrda esa Konstitutsiya kunini nishonlaymiz.",
        },
        { t: "check", ex: { k: "choice", q: "Matnga ko'ra, Navro'z qachon?", opts: ["on the first of March", "on the twenty-first of March", "on the eighth of March", "in May"], a: 1 } },
        { t: "check", ex: { k: "tf", q: "Matnga ko'ra, **Teachers' Day is on the first of October.**", a: true, why: "*on the first of October, students say thank you to their teachers*." } },
      ],
    },
  ],
  words: [
    { en: "date", uz: "sana", ipa: "deɪt", pos: "noun", ex: "What's the date today?", exUz: "Bugun nechanchi sana?" },
    { en: "calendar", uz: "taqvim, kalendar", ipa: "ˈkæl.ən.də", pos: "noun", ex: "Write the date on the calendar.", exUz: "Sanani kalendarga yozib qo'y." },
    { en: "floor", uz: "qavat", ipa: "flɔː", pos: "noun", ex: "We live on the fifth floor.", exUz: "Biz beshinchi qavatda yashaymiz." },
    { en: "celebrate", uz: "nishonlamoq", ipa: "ˈsel.ə.breɪt", pos: "verb", ex: "We celebrate Navruz in March.", exUz: "Biz Navro'zni martda nishonlaymiz." },
    { en: "public holiday", uz: "davlat bayrami, dam olish kuni", ipa: "ˌpʌb.lɪk ˈhɒl.ə.deɪ", pos: "noun", ex: "The first of September is a public holiday.", exUz: "1-sentabr — dam olish kuni." },
    { en: "anniversary", uz: "yillik, yubiley", ipa: "ˌæn.ɪˈvɜː.sər.i", pos: "noun", ex: "It's my parents' wedding anniversary.", exUz: "Bu ota-onamning to'y yilligi." },
    { en: "wedding", uz: "to'y (nikoh to'yi)", ipa: "ˈwed.ɪŋ", pos: "noun", ex: "My cousin's wedding is on the tenth of June.", exUz: "Xolavachchamning to'yi 10-iyunda." },
    { en: "century", uz: "asr", ipa: "ˈsen.tʃər.i", pos: "noun", ex: "We live in the twenty-first century.", exUz: "Biz yigirma birinchi asrda yashaymiz." },
    { en: "appointment", uz: "uchrashuv (oldindan belgilangan), qabul", ipa: "əˈpɔɪnt.mənt", pos: "noun", ex: "I have a doctor's appointment on the third.", exUz: "Uchinchi sanada shifokor qabulim bor." },
    { en: "the day after tomorrow", uz: "indinga", ipa: "ðə ˌdeɪ ˌɑːf.tə təˈmɒr.əʊ", pos: "phrase", ex: "The exam is the day after tomorrow.", exUz: "Imtihon indinga." },
  ],
  practice: [
    { k: "match", pairs: [["1st", "first"], ["2nd", "second"], ["3rd", "third"], ["5th", "fifth"], ["12th", "twelfth"]] },
    { k: "match", pairs: [["calendar", "taqvim"], ["floor", "qavat"], ["century", "asr"], ["wedding", "to'y"], ["celebrate", "nishonlamoq"]] },
    { k: "listen", say: "My birthday is on the fifteenth of August.", opts: ["the fifteenth of August", "the fiftieth of August", "the fifth of August"], a: 0, why: "fif-**TEENTH** — 15." },
    { k: "listen", say: "nineteen ninety-eight", opts: ["1988", "1998", "1989"], a: 1 },
    { k: "choice", q: "\"20-chi\" qanday yoziladi?", opts: ["twentyth", "twentieth", "twentith", "twenteeth"], a: 1, why: "**y → ie + th**: *twentieth*." },
    { k: "choice", q: "Qaysi to'g'ri?", opts: ["the twenty-oneth of May", "the twentieth-one of May", "the twenty-first of May", "the twenty one of May"], a: 2, why: "Faqat oxirgi so'z: **twenty-first**." },
    { k: "choice", q: "2007-yil qanday o'qiladi?", opts: ["twenty seven", "two thousand and seven", "two hundred seven", "twenty oh seven hundred"], a: 1 },
    { k: "fill", q: "eight → ___", a: ["eighth"], why: "**eighth** — bitta *t*." },
    { k: "fill", q: "My sister was born ___ 2010.", a: ["in"], why: "Yil — **in**." },
    { k: "fill", q: "The concert is ___ the fourteenth of February.", a: ["on"], why: "Aniq sana — **on**." },
    { k: "tf", q: "Sanani aytganda *the five of May* deyish to'g'ri.", a: false, why: "Tartib son kerak: **the fifth of May**." },
    { k: "tf", q: "**13th** — *thirteenth*, **30th** — *thirtieth*.", a: true },
    { k: "order", uz: "Mening tug'ilgan kunim 2-iyulda.", words: ["My", "birthday", "is", "on", "the", "second", "of", "July."], extra: ["in", "two"] },
    { k: "order", uz: "Biz uchinchi qavatda yashaymiz.", words: ["We", "live", "on", "the", "third", "floor."], extra: ["three", "in"] },
    { k: "translate", uz: "Bugun nechanchi sana?", a: ["What's the date today", "What is the date today", "What's today's date", "What is today's date", "What date is it today", "What's the date", "What is the date", "What date is it"] },
    { k: "speak", say: "My birthday is on the twelfth of June.", uz: "Mening tug'ilgan kunim 12-iyunda." },
  ],
  quiz: [
    { k: "choice", q: "9-chi:", opts: ["nineth", "ninth", "nineeth", "nainth"], a: 1 },
    { k: "choice", q: "31-dekabr qanday o'qiladi?", opts: ["the thirty-one of December", "the thirtieth-first of December", "the thirty-first of December", "the thirty first December of"], a: 2 },
    { k: "choice", q: "Qaysi gap **xato**?", opts: ["We met in 2019.", "The party is on Friday.", "My exam is in the 5th of June.", "I was born in April."], a: 2, why: "Aniq sana — **on the 5th of June**." },
    { k: "fill", q: "My grandfather was born in the twentieth ___.", a: ["century"], uz: "Bobom yigirmanchi asrda tug'ilgan." },
    { k: "fill", q: "The office is on the ___ floor. (4)", a: ["fourth", "4th"], why: "**four → fourth**." },
    { k: "listen", say: "It's the thirteenth of April.", opts: ["It's the thirtieth of April.", "It's the thirteenth of April.", "It's the third of April."], a: 1, why: "thir-**TEENTH** — 13." },
    { k: "tf", q: "**05/06** Britaniyada 5-iyun degani.", a: true, why: "BrE: kun → oy. AQShda esa bu 6-may." },
    { k: "match", pairs: [["11th", "eleventh"], ["20th", "twentieth"], ["22nd", "twenty-second"], ["8th", "eighth"]] },
    { k: "order", uz: "Biz Mustaqillik kunini 1-sentabrda nishonlaymiz.", words: ["We", "celebrate", "Independence", "Day", "on", "the", "first", "of", "September."], extra: ["in", "one"] },
    { k: "translate", uz: "Uning (she) tug'ilgan kuni martda.", a: ["Her birthday is in March", "Her birthday's in March"] },
  ],
  summary: [
    "**first, second, third** — maxsus; qolganlari + **-th**. Imlo: **fifth, eighth, ninth, twelfth, twentieth**.",
    "Murakkab sonlarda faqat oxirgisi: **twenty-first (21st), thirty-second (32nd)**; lekin **11th, 12th, 13th**.",
    "Sana: yoziladi *5 May*, o'qiladi **the fifth of May** yoki **May the fifth**.",
    "Yillar: **nineteen ninety-one, two thousand and seven, twenty twenty-five**.",
    "**on** + aniq sana (*on the 1st of September*), **in** + oy/yil/asr (*in May, in 1991*).",
  ],
  homework: "Oilangizdagi 6 kishining tug'ilgan kunini to'liq gap bilan yozing va ovoz chiqarib o'qing: *My mum's birthday is on the twenty-third of April.* Keyin o'zingiz uchun muhim 4 ta sanani (bayram, imtihon, to'y…) yil bilan yozing: *My sister got married on the 2nd of June 2022.*",
};

export default lesson;
