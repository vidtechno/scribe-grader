import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u12-l1",
  title: "Past Simple: regular and irregular",
  titleUz: "Past Simple takrori: to'g'ri va noto'g'ri fe'llar",
  goal: "Past Simple ni mustahkamlaysiz: to'g'ri fe'llarga **-ed** qo'shish qoidalari (*study – studied, stop – stopped*), **-ed** ning uch xil o'qilishi, eng ko'p ishlatiladigan noto'g'ri fe'llar (*went, saw, ate, bought, met, left…*) va **was / were**. O'tgan hafta oxiri haqida 6–8 gaplik hikoya yoza olasiz.",
  slides: [
    {
      title: "Takror: Past Simple va -ed qoidalari",
      blocks: [
        { t: "p", md: "**Past Simple** — o'tmishda boshlanib **tugagan** ish-harakat uchun ishlatiladi: *I visited my aunt yesterday.* Hamma shaxslar (I, you, he, she, we, they) uchun fe'l **bir xil**: *he worked, they worked*. O'zbekchada \"-di\" qo'shimchasiga o'xshaydi: *ishladi, bordi*." },
        {
          t: "table", head: ["Qoida", "Fe'l", "Past Simple"], speak: [2],
          rows: [
            ["Ko'pchilik fe'llar: **+ed**", "work, visit, watch", "worked, visited, watched"],
            ["**-e** bilan tugasa: **+d**", "live, arrive, decide", "lived, arrived, decided"],
            ["undosh + **y** → **-ied**", "study, try, carry", "studied, tried, carried"],
            ["unli + **y** → oddiy **+ed**", "play, stay, enjoy", "played, stayed, enjoyed"],
            ["bir bo'g'inli, 1 unli + 1 undosh → undosh **ikkilanadi**", "stop, plan, drop", "stopped, planned, dropped"],
          ],
        },
        { t: "tip", tone: "warn", md: "**study → studied**, lekin **play → played**. Farqi: *y* dan oldin **undosh** (*d*) bo'lsa — *ied*; **unli** (*a*) bo'lsa — faqat *ed*." },
        { t: "check", ex: { k: "choice", q: "**study** fe'lining Past Simple shakli:", opts: ["studyed", "studied", "studed", "studdied"], a: 1, why: "Undosh + y → **-ied**: *studied*." } },
      ],
    },
    {
      title: "-ed qanday o'qiladi?",
      blocks: [
        { t: "p", md: "Yozuvda hammasi **-ed**, lekin o'qilishi **uch xil**. Bu juda muhim — o'zbek tilida bunday tovush yo'q, shuning uchun ko'pchilik \"ed\" deb alohida bo'g'in qilib o'qiydi (xato!)." },
        {
          t: "sounds", items: [
            { label: "/t/", say: "worked", uz: "Jarangsiz tovushdan keyin (*k, p, s, ch, sh, f*): **\"workt\"**, **\"helpt\"**, **\"watcht\"**. Alohida \"ed\" yo'q!", examples: ["worked", "helped", "watched", "stopped"] },
            { label: "/d/", say: "played", uz: "Jarangli tovush va unlidan keyin: **\"pleyd\"**, **\"livd\"**, **\"oupend\"** (oxirida yumshoq \"d\").", examples: ["played", "lived", "opened", "cleaned"] },
            { label: "/ɪd/", say: "wanted", uz: "Faqat **t** va **d** dan keyin: **\"wontid\"**, **\"nidid\"** — bu yerda qo'shimcha bo'g'in bor.", examples: ["wanted", "needed", "decided", "visited"] },
          ],
        },
        { t: "tip", tone: "info", md: "Faqat **want, need, decide, start, visit, wait** kabi **t / d** bilan tugaydigan fe'llarda *-ed* alohida bo'g'in bo'ladi. Qolganlarida *worked, helped, watched* — **bir bo'g'in**." },
        { t: "check", ex: { k: "choice", q: "Qaysi fe'lda **-ed** alohida bo'g'in (/ɪd/) bo'lib o'qiladi?", opts: ["played", "worked", "decided", "stopped"], a: 2, why: "**decided** — d bilan tugaydi: de-**ci**-ded. Qolganlari bir bo'g'in." } },
      ],
    },
    {
      title: "Noto'g'ri fe'llar",
      blocks: [
        { t: "p", md: "Noto'g'ri fe'llar **-ed** olmaydi, ularning o'z o'tgan shakli bor. Eng ko'p ishlatiladiganlarini guruhlab yodlang. (Bu shakllarning ko'pini A1 da ko'rgansiz — endi ularni **tez** esga tushiring.)" },
        {
          t: "table", head: ["V1", "V2 (Past Simple)", "Ma'nosi", "Misol"], speak: [1, 3],
          rows: [
            ["go", "went", "bormoq", "We went to Bukhara."],
            ["see", "saw", "ko'rmoq", "I saw Laylo yesterday."],
            ["eat", "ate", "yemoq", "He ate two bowls of plov."],
            ["drink", "drank", "ichmoq", "She drank green tea."],
            ["buy", "bought", "sotib olmoq", "I bought a new phone."],
            ["meet", "met", "uchrashmoq", "We met at the metro."],
            ["leave", "left", "ketmoq, tark etmoq", "They left at six."],
            ["spend", "spent", "sarflamoq, o'tkazmoq", "I spent the day at home."],
            ["get", "got", "olmoq; bo'lmoq", "She got a letter."],
            ["take", "took", "olmoq; olib bormoq", "He took a photo."],
            ["make", "made", "qilmoq, yasamoq", "We made a cake."],
            ["write", "wrote", "yozmoq", "I wrote an email."],
          ],
        },
        { t: "tip", tone: "good", md: "Qofiyalab yodlang: **buy – bought, think – thought, bring – brought** (hammasi *-ought*); **meet – met, read – read** (*read* o'qilishi o'zgaradi: V2 \"red\"); **sit – sat, run – ran**." },
        { t: "check", ex: { k: "fill", q: "We ___ plov at a chaikhana last night. (eat)", a: ["ate"], why: "**eat – ate**." } },
        { t: "check", ex: { k: "choice", q: "**leave** ning Past Simple shakli:", opts: ["leaved", "left", "lefted", "leave"], a: 1, why: "**leave – left**." } },
      ],
    },
    {
      title: "Fe'l be: was / were",
      blocks: [
        { t: "p", md: "**be** fe'lining o'tgan zamoni **ikki** shakl: **was** va **were**. U ham noto'g'ri fe'l:" },
        {
          t: "table", head: ["Shaxs", "Past Simple", "Misol"], speak: [2],
          rows: [
            ["I / he / she / it", "**was**", "I was tired. It was cold."],
            ["you / we / they", "**were**", "We were in Samarkand. They were happy."],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["Yesterday I was at home.", "We were at the market.", "The film was great."] },
          bad: { title: "Xato", items: ["Yesterday I am at home.", "We was at the market.", "The film were great."] },
        },
        { t: "tip", tone: "warn", md: "O'zbek tilida \"edim, edi\" ko'pincha tushib qoladi (*Kecha uyda edim → Kecha uyda*). Inglizchada **was / were** ni **tushirib bo'lmaydi**: *Yesterday I **was** at home.*" },
        { t: "check", ex: { k: "fill", q: "My parents ___ in Tashkent last week.", a: ["were"], why: "*my parents* = they → **were**." } },
      ],
    },
    {
      title: "Odatiy xatolar",
      blocks: [
        { t: "p", md: "O'zbek tilida o'tgan zamon qo'shimchasi (**-di**) hamma fe'lga bir xil qo'shiladi. Inglizchada esa noto'g'ri fe'llarni yodlash kerak. Eng ko'p uchraydigan xatolar:" },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I went to the park.", "We bought some bread.", "She studied all evening.", "He stopped the car.", "Last year I was in Turkey."] },
          bad: { title: "Xato", items: ["I goed to the park.", "We buyed some bread.", "She studyed all evening.", "He stoped the car.", "Last year I am in Turkey."] },
        },
        { t: "tip", tone: "warn", md: "Gapda **yesterday, last week, in 2020, two days ago** kabi o'tgan vaqt so'zi bo'lsa — fe'l **doim** o'tgan zamonda. Ikkita o'tgan shakl yonma-yon bo'lmaydi: *I **went** to school* (✅), *I went to **went*** (❌)." },
        { t: "check", ex: { k: "choice", q: "Qaysi gap **to'g'ri**?", opts: ["Last week we goed to Khiva.", "Last week we went to Khiva.", "Last week we go to Khiva yesterday.", "Last week we gone to Khiva."], a: 1, why: "**go – went**. *goed* va *gone* (V3) bu yerda xato." } },
        { t: "check", ex: { k: "fill", q: "The bus ___ at the corner. (stop)", a: ["stopped"], why: "Bir bo'g'inli: undosh ikkilanadi → **stopped**." } },
      ],
    },
    {
      title: "O'qing: Samarqandda hafta oxiri",
      blocks: [
        {
          t: "text", title: "A weekend in Samarkand",
          en: "Last weekend Laylo and her cousin Dilnoza travelled to Samarkand by train. They left Tashkent at eight o'clock in the morning and arrived at ten. First they visited the Registan and took a lot of photos. At lunchtime they ate plov in a small chaikhana and drank green tea. In the afternoon they walked around the Shah-i-Zinda complex. Dilnoza bought a beautiful scarf in the bazaar, but Laylo spent her money on sweets! They were tired but happy. They got back to Tashkent late at night.",
          uz: "O'tgan hafta oxirida Laylo va uning amakivachchasi Dilnoza poyezdda Samarqandga borishdi. Ular Toshkentdan ertalab soat sakkizda chiqib, o'nda yetib kelishdi. Avval Registonni ko'rib, ko'p surat olishdi. Tushlikda kichik choyxonada palov yeb, ko'k choy ichishdi. Tushdan keyin Shohi Zinda majmuasi atrofida sayr qilishdi. Dilnoza bozordan chiroyli ro'mol sotib oldi, Laylo esa pulini shirinliklarga sarfladi! Ular charchagan, lekin xursand edi. Toshkentga kechqurun kech qaytishdi.",
        },
        { t: "check", ex: { k: "tf", q: "Laylo bought a scarf in the bazaar.", a: false, why: "Ro'molni **Dilnoza** sotib oldi (*Dilnoza bought a beautiful scarf*). Laylo pulini shirinlikka sarfladi." } },
        { t: "check", ex: { k: "choice", q: "How did the girls travel to Samarkand?", opts: ["By bus.", "By car.", "By train.", "By plane."], a: 2, why: "*travelled to Samarkand by train*." } },
      ],
    },
    {
      title: "Dialog: Dushanba kuni",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Aziz", en: "Hi, Kamol! How was your weekend?", uz: "Salom, Kamol! Hafta oxiri qanday o'tdi?" },
            { who: "Kamol", en: "It was great! I went to the mountains with my brothers.", uz: "Zo'r edi! Akalarim bilan tog'ga bordim." },
            { who: "Aziz", en: "Wow! What did you do there?", uz: "Voy! U yerda nima qildingiz?" },
            { who: "Kamol", en: "We walked for four hours, then we made a fire and cooked lunch.", uz: "To'rt soat piyoda yurdik, keyin gulxan yoqib, tushlik pishirdik." },
            { who: "Aziz", en: "Sounds fun. I stayed at home and watched football.", uz: "Qiziq ekan. Men uyda qolib, futbol ko'rdim." },
            { who: "Kamol", en: "Did your team win?", uz: "Jamoang yutdimi?" },
            { who: "Aziz", en: "No, they lost 2–1. It was a terrible match!", uz: "Yo'q, 2:1 hisobida yutqazdi. Dahshatli o'yin bo'ldi!" },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Aziz went to the mountains.", a: false, why: "Tog'ga **Kamol** bordi. Aziz uyda qolib futbol ko'rdi." } },
      ],
    },
  ],
  words: [
    { en: "arrive", uz: "yetib kelmoq", ipa: "əˈraɪv", pos: "verb", ex: "We arrived in Samarkand at ten.", exUz: "Biz Samarqandga soat o'nda yetib keldik." },
    { en: "decide", uz: "qaror qilmoq", ipa: "dɪˈsaɪd", pos: "verb", ex: "She decided to learn English.", exUz: "U ingliz tilini o'rganishga qaror qildi." },
    { en: "spend – spent", uz: "sarflamoq; (vaqt) o'tkazmoq", ipa: "spend – spent", pos: "verb", ex: "I spent the weekend with my family.", exUz: "Hafta oxirini oilam bilan o'tkazdim." },
    { en: "leave – left", uz: "ketmoq; tark etmoq", ipa: "liːv – left", pos: "verb", ex: "The train left at eight.", exUz: "Poyezd soat sakkizda jo'nadi." },
    { en: "meet – met", uz: "uchrashmoq, tanishmoq", ipa: "miːt – met", pos: "verb", ex: "I met my friend at the metro.", exUz: "Do'stim bilan metroda uchrashdim." },
    { en: "wake up – woke up", uz: "uyg'onmoq", ipa: "weɪk ʌp – wəʊk ʌp", pos: "phrasal verb", ex: "I woke up at six o'clock.", exUz: "Soat oltida uyg'ondim." },
    { en: "stay", uz: "qolmoq; turmoq (mehmonxonada)", ipa: "steɪ", pos: "verb", ex: "We stayed in a small hotel.", exUz: "Biz kichik mehmonxonada turdik." },
    { en: "travel", uz: "sayohat qilmoq", ipa: "ˈtrævl", pos: "verb", ex: "They travelled by train.", exUz: "Ular poyezdda sayohat qilishdi." },
    { en: "catch – caught", uz: "ulgurmoq (transport); tutmoq", ipa: "kætʃ – kɔːt", pos: "verb", ex: "She caught the last bus.", exUz: "U oxirgi avtobusga ulgurdi." },
    { en: "weekend", uz: "hafta oxiri", ipa: "ˌwiːkˈend", pos: "noun", ex: "How was your weekend?", exUz: "Hafta oxiring qanday o'tdi?" },
  ],
  practice: [
    { k: "match", pairs: [["go", "went"], ["see", "saw"], ["eat", "ate"], ["buy", "bought"], ["leave", "left"]] },
    { k: "match", pairs: [["study", "studied"], ["stop", "stopped"], ["live", "lived"], ["play", "played"], ["try", "tried"]] },
    { k: "listen", say: "We arrived in Samarkand at ten.", opts: ["We arrive in Samarkand at ten.", "We arrived in Samarkand at ten.", "We are arriving in Samarkand at ten."], a: 1 },
    { k: "listen", say: "She wanted a cup of tea.", opts: ["She wanted a cup of tea.", "She wants a cup of tea.", "She watched a cup of tea."], a: 0, why: "**wanted** — \"wontid\": -ed alohida bo'g'in." },
    { k: "fill", q: "Last summer we ___ to Khiva. (go)", a: ["went"], why: "**go – went**." },
    { k: "fill", q: "She ___ a lot of photos in Bukhara. (take)", a: ["took"], why: "**take – took**." },
    { k: "fill", q: "I ___ my keys at the office yesterday. (leave)", a: ["left"], why: "**leave – left**." },
    { k: "fill", q: "Yesterday the weather ___ very hot.", a: ["was"], why: "*weather* = it → **was**." },
    { k: "choice", q: "He ___ the whole evening on the phone.", opts: ["spended", "spent", "spend", "spents"], a: 1, why: "**spend – spent**." },
    { k: "choice", q: "Qaysi fe'lda **-ed** /ɪd/ deb o'qiladi?", opts: ["watched", "visited", "cleaned", "helped"], a: 1, why: "**visited** — t bilan tugaydi: vi-zi-tid." },
    { k: "tf", q: "**We was at the market yesterday.** — to'g'ri gap.", a: false, why: "*we* bilan **were**: *We **were** at the market.*" },
    { k: "tf", q: "**stop** fe'lining Past Simple shakli **stopped**.", a: true, why: "Bir bo'g'inli, 1 unli + 1 undosh → undosh ikkilanadi." },
    { k: "order", uz: "Biz kecha kinoga bordik.", words: ["We", "went", "to", "the", "cinema", "yesterday."], extra: ["go", "goed"], alt: [["Yesterday", "we", "went", "to", "the", "cinema."]] },
    { k: "translate", uz: "U kecha menga xat yozdi.", a: ["She wrote me a letter yesterday.", "She wrote a letter to me yesterday.", "He wrote me a letter yesterday.", "He wrote a letter to me yesterday.", "Yesterday she wrote me a letter.", "Yesterday he wrote me a letter."], why: "**write – wrote**. (U = she yoki he.)" },
    { k: "speak", say: "Last weekend I visited my grandmother and we cooked plov.", uz: "O'tgan hafta oxirida buvimnikiga bordim va palov pishirdik." },
  ],
  quiz: [
    { k: "choice", q: "Last night Dilnoza ___ a good film.", opts: ["saw", "seen", "see", "seed"], a: 0, why: "**see – saw** (Past Simple)." },
    { k: "choice", q: "They ___ in Tashkent in 2019.", opts: ["was", "were", "are", "be"], a: 1, why: "*they* → **were**." },
    { k: "choice", q: "**try** fe'lining Past Simple shakli:", opts: ["tryed", "tried", "triyed", "trid"], a: 1, why: "Undosh + y → **-ied**." },
    { k: "fill", q: "I ___ a new bag at the bazaar last week. (buy)", a: ["bought"], why: "**buy – bought**." },
    { k: "fill", q: "We ___ Aziz at the metro station. (meet)", a: ["met"], why: "**meet – met**." },
    { k: "fill", q: "He ___ his friends to the party. (invite)", a: ["invited"], why: "**-e** bilan tugagan to'g'ri fe'lga faqat **-d** qo'shiladi: *invite → invited*." },
    { k: "listen", say: "They left Tashkent at eight.", opts: ["They leave Tashkent at eight.", "They left Tashkent at eight.", "They live in Tashkent at eight."], a: 1 },
    { k: "tf", q: "**I goed to school by metro.** — to'g'ri gap.", a: false, why: "**go – went**: *I **went** to school by metro.*" },
    { k: "order", uz: "U ertalab soat oltida uyg'ondi.", words: ["She", "woke", "up", "at", "six", "in", "the", "morning."], extra: ["waked", "wake"] },
    { k: "translate", uz: "Biz mehmonxonada qoldik.", a: ["We stayed in a hotel.", "We stayed at a hotel.", "We stayed in the hotel.", "We stayed at the hotel."] },
  ],
  summary: [
    "**Past Simple** tugagan o'tmish uchun: *I visited…, we went…*. Hamma shaxslarda fe'l bir xil.",
    "To'g'ri fe'llar: **+ed** (*worked*), **+d** (*lived*), **-ied** (*studied*), undosh ikkilanadi (*stopped*). Noto'g'ri fe'llarni yodlash kerak (*go – went, buy – bought*).",
    "**-ed** uch xil o'qiladi: /t/ (*worked*), /d/ (*played*), /ɪd/ (*wanted*) — alohida \"ed\" bo'g'ini faqat t / d dan keyin.",
    "**be** → **was** (I, he, she, it) va **were** (you, we, they). Hech qachon tushirib qoldirmang.",
  ],
  homework: "O'tgan hafta oxiri haqida 6–8 ta gap yozing (*Last Saturday I woke up at… I went to… I met… We ate…*). Kamida 4 ta noto'g'ri fe'l ishlating. Keyin gaplarni ovoz chiqarib o'qing va har bir **-ed** ning qanday o'qilishini (/t/, /d/, /ɪd/) belgilab chiqing.",
};

export default lesson;
