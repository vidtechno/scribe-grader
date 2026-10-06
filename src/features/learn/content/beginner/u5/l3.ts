import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u5-l3",
  title: "Past Simple: regular verbs",
  titleUz: "Past Simple: to'g'ri fe'llar (-ed)",
  goal: "O'tmishda tugagan ishlar haqida gapirasiz: *I visited my grandmother yesterday.* **-ed** ni to'g'ri yozasiz (*stopped, studied, played*) va uch xil talaffuzini (**/t/ /d/ /ɪd/**) ajratasiz.",
  slides: [
    {
      title: "Past Simple: tugagan ish",
      blocks: [
        { t: "p", md: "**Past Simple** — o'tmishda bo'lib, **tugagan** ish: kecha, o'tgan hafta, ikki yil oldin. O'zbekchada bu **-di** qo'shimchasi: *o'ynadi, ishladi, pishirdi*." },
        { t: "p", md: "To'g'ri (regular) fe'llarda qoida juda oddiy: fe'lga **-ed** qo'shamiz. Va eng yaxshi xabar — shakl **hamma shaxs uchun bir xil**! He/she uchun **-s** ham yo'q." },
        {
          t: "table", head: ["Hozir (odat)", "O'tgan zamon"],
          rows: [
            ["I play football.", "I played football."],
            ["She plays football.", "She played football."],
            ["We work every day.", "We worked yesterday."],
            ["He watches TV.", "He watched TV."],
          ],
          speak: [1],
        },
        { t: "tip", tone: "info", md: "Ko'p muhim fe'llar **-ed** olmaydi (*go → went*). Ular **noto'g'ri fe'llar** — keyingi darsda. Bugun faqat **-ed** li fe'llar." },
        { t: "check", ex: { k: "choice", q: "She ___ tennis yesterday.", opts: ["plays", "played", "playeds", "is playing"], a: 1, why: "*yesterday* → o'tgan zamon: **played**. Hamma shaxs uchun bir xil, **-s** qo'shilmaydi." } },
      ],
    },
    {
      title: "-ed ning imlo qoidalari",
      blocks: [
        {
          t: "table", head: ["Qoida", "Misollar"],
          rows: [
            ["Ko'pchilik fe'llar: + ed", "work → worked, visit → visited, clean → cleaned"],
            ["-e bilan tugasa: + d", "arrive → arrived, like → liked, dance → danced"],
            ["undosh + y: y → ied", "study → studied, try → tried, carry → carried"],
            ["unli + y: + ed", "play → played, stay → stayed, enjoy → enjoyed"],
            ["qisqa: undosh + unli + undosh → ikkilanadi", "stop → stopped, plan → planned, chat → chatted"],
          ],
        },
        { t: "tip", tone: "warn", md: "Ikkilantirish faqat **bir bo'g'inli** (yoki urg'u oxirida bo'lgan) fe'llarda: *stop → stopped*. Lekin *visit* va *open* da urg'u boshida — **ikkilanmaydi**: *visited, opened* (❌ *visitted*). **w, x, y** ham ikkilanmaydi: *showed, fixed, played*." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["played", "studied", "stopped", "arrived", "opened"] },
          bad: { title: "Xato", items: ["plaied", "studyed", "stoped", "arriveed", "openned"] },
        },
        { t: "check", ex: { k: "fill", q: "Last year we ___ English at school. (study)", a: ["studied"], why: "undosh + **y** → **ied**: *studied*." } },
        { t: "check", ex: { k: "fill", q: "I ___ at home last night. (stay)", a: ["stayed"], why: "unli + **y** → shunchaki **+ed**: *stayed*." } },
      ],
    },
    {
      title: "-ed ning uch tovushi",
      blocks: [
        { t: "p", md: "**-ed** har doim bir xil yoziladi, lekin **uch xil** o'qiladi. Bu fe'lning oxirgi tovushiga bog'liq:" },
        {
          t: "sounds", items: [
            { label: "/t/", say: "cooked", uz: "Jarangsiz tovushdan keyin (**p, k, s, sh, ch, f**) → **\"t\"**. *cooked* = \"kukt\" — bir bo'g'in!", examples: ["cooked", "finished", "worked", "watched", "helped"] },
            { label: "/d/", say: "played", uz: "Unlilar va jarangli tovushlardan keyin (**b, g, l, m, n, v, z** va boshqa) → **\"d\"**. *played* = \"pleyd\".", examples: ["played", "cleaned", "opened", "arrived", "stayed"] },
            { label: "/ɪd/", say: "wanted", uz: "Faqat **t** yoki **d** dan keyin → **\"id\"** — yangi bo'g'in qo'shiladi. *wanted* = \"won-tid\".", examples: ["wanted", "started", "visited", "needed"] },
          ],
        },
        {
          t: "table", head: ["/t/", "/d/", "/ɪd/"],
          rows: [
            ["cooked", "played", "wanted"],
            ["finished", "cleaned", "started"],
            ["watched", "opened", "visited"],
            ["helped", "arrived", "needed"],
          ],
          speak: [0, 1, 2],
        },
        { t: "tip", tone: "warn", md: "Eng ko'p xato: har bir **-ed** ni alohida \"ed\" deb o'qish. ❌ \"kuk-ed\", ❌ \"pley-ed\". Yangi bo'g'in faqat **t / d** dan keyin: *want**ed**, start**ed***." },
        { t: "check", ex: { k: "choice", q: "**started** so'zida -ed qanday o'qiladi?", say: "started", opts: ["/t/", "/d/", "/ɪd/"], a: 2, why: "Fe'l **t** bilan tugaydi (*start*) → **/ɪd/**: \"sta:-tid\"." } },
        { t: "check", ex: { k: "listen", say: "cooked", opts: ["cook", "cooked", "cooking"], a: 1, why: "\"kukt\" — oxirida qisqa **t** eshitiladi." } },
      ],
    },
    {
      title: "Vaqt iboralari va so'z tartibi",
      blocks: [
        { t: "p", md: "Past Simple bilan o'tgan darsdagi vaqt so'zlari ishlatiladi: **yesterday, last night, last week, two days ago, in 2020, at the weekend**. Ular odatda gap **oxirida** (yoki boshida) turadi." },
        {
          t: "examples", items: [
            { en: "I cleaned my room yesterday.", uz: "Kecha xonamni tozaladim." },
            { en: "We visited the museum last Sunday.", uz: "O'tgan yakshanba muzeyga bordik (ko'rdik)." },
            { en: "The lesson started at nine o'clock.", uz: "Dars soat to'qqizda boshlandi." },
            { en: "My uncle arrived from Moscow two days ago.", uz: "Amakim ikki kun oldin Moskvadan keldi." },
            { en: "Last year she worked in a hospital.", uz: "O'tgan yili u kasalxonada ishladi." },
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I cleaned my room yesterday.", "She worked late last night.", "They arrived at six."] },
          bad: { title: "Xato", items: ["I clean my room yesterday.", "She was worked late last night.", "They arriveds at six."] },
        },
        { t: "tip", tone: "warn", md: "O'zbek o'quvchilarining tipik xatosi: **was + fe'l** (*I was cleaned*). **was** faqat *at home, tired, happy* kabi so'zlar bilan. Harakat uchun shunchaki **fe'l + ed**: *I **cleaned**.*" },
        { t: "check", ex: { k: "order", uz: "Ular kecha soat oltida yetib kelishdi.", words: ["They", "arrived", "at", "six", "o'clock", "yesterday"], extra: ["were", "arrive"] } },
      ],
    },
    {
      title: "Dialog: dam olish kunlari",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Nodira", en: "Hi, Bekzod! How was your weekend?", uz: "Salom, Bekzod! Dam olish kunlaring qanday o'tdi?" },
            { who: "Bekzod", en: "It was great. On Saturday I visited my grandparents.", uz: "Ajoyib. Shanba kuni bobom va buvimnikiga bordim." },
            { who: "Bekzod", en: "My grandmother cooked plov, and we played chess with my grandfather.", uz: "Buvim palov pishirdi, bobom bilan shaxmat o'ynadik." },
            { who: "Nodira", en: "That's nice! I stayed at home.", uz: "Zo'r-ku! Men uyda qoldim." },
            { who: "Nodira", en: "I cleaned my room and watched a film. My cousin arrived from London on Sunday.", uz: "Xonamni tozaladim va film ko'rdim. Yakshanba kuni xolavachcham Londondan keldi." },
            { who: "Bekzod", en: "Wow! Was she happy?", uz: "Voy! U xursand edimi?" },
            { who: "Nodira", en: "Yes, she was. We talked and laughed all evening.", uz: "Ha. Kechqurun bo'yi gaplashdik va kuldik." },
          ],
        },
        { t: "tip", tone: "good", md: "Dialogdagi **-ed** larni ovoz chiqarib o'qing va tovushini aniqlang: visit**ed** /ɪd/, cook**ed** /t/, play**ed** /d/, stay**ed** /d/, clean**ed** /d/, watch**ed** /t/, arriv**ed** /d/, talk**ed** /t/, laugh**ed** /t/." },
        { t: "check", ex: { k: "tf", q: "Bekzodning buvisi palov pishirdi — **His grandmother cooked plov.**", a: true } },
      ],
    },
  ],
  words: [
    { en: "visit", uz: "borib ko'rmoq, ziyorat qilmoq", ipa: "ˈvɪz.ɪt", pos: "verb", ex: "I visited my grandmother last week.", exUz: "O'tgan hafta buvimnikiga bordim." },
    { en: "play", uz: "o'ynamoq", ipa: "pleɪ", pos: "verb", ex: "We played football yesterday.", exUz: "Kecha futbol o'ynadik." },
    { en: "cook", uz: "ovqat pishirmoq", ipa: "kʊk", pos: "verb", ex: "My mother cooked plov last night.", exUz: "Onam kecha kechqurun palov pishirdi." },
    { en: "clean", uz: "tozalamoq", ipa: "kliːn", pos: "verb", ex: "I cleaned my room at the weekend.", exUz: "Dam olish kunlari xonamni tozaladim." },
    { en: "start", uz: "boshlamoq, boshlanmoq", ipa: "stɑːt", pos: "verb", ex: "The lesson started at nine.", exUz: "Dars to'qqizda boshlandi." },
    { en: "finish", uz: "tugatmoq, tugamoq", ipa: "ˈfɪn.ɪʃ", pos: "verb", ex: "He finished school in 2020.", exUz: "U maktabni 2020-yilda tugatdi." },
    { en: "open", uz: "ochmoq", ipa: "ˈəʊ.pən", pos: "verb", ex: "She opened the window.", exUz: "U derazani ochdi." },
    { en: "want", uz: "xohlamoq", ipa: "wɒnt", pos: "verb", ex: "I wanted a cup of tea.", exUz: "Bir piyola choy xohladim." },
    { en: "arrive", uz: "yetib kelmoq", ipa: "əˈraɪv", pos: "verb", ex: "They arrived two hours ago.", exUz: "Ular ikki soat oldin yetib kelishdi." },
    { en: "stay", uz: "qolmoq", ipa: "steɪ", pos: "verb", ex: "We stayed at home yesterday.", exUz: "Kecha uyda qoldik." },
  ],
  practice: [
    { k: "listen", say: "wanted", opts: ["want", "wants", "wanted"], a: 2, why: "\"won-tid\" — ikki bo'g'in: **wanted**." },
    { k: "listen", say: "I visited my uncle.", opts: ["I visit my uncle.", "I visited my uncle.", "I invited my uncle."], a: 1, why: "**visited** — \"vi-zi-tid\", oxirida /ɪd/ eshitiladi." },
    { k: "choice", q: "**finished** — -ed qanday o'qiladi?", say: "finished", opts: ["/t/", "/d/", "/ɪd/"], a: 0, why: "*finish* **sh** bilan tugaydi (jarangsiz) → **/t/**: \"fi-nisht\"." },
    { k: "choice", q: "**arrived** — -ed qanday o'qiladi?", say: "arrived", opts: ["/ɪd/", "/t/", "/d/"], a: 2, why: "*arrive* **v** bilan tugaydi (jarangli) → **/d/**: \"ə-rayvd\"." },
    { k: "choice", q: "**visited** — -ed qanday o'qiladi?", say: "visited", opts: ["/d/", "/ɪd/", "/t/"], a: 1, why: "*visit* **t** bilan tugaydi → **/ɪd/**." },
    { k: "match", pairs: [["visit", "borib ko'rmoq, ziyorat qilmoq"], ["cook", "ovqat pishirmoq"], ["arrive", "yetib kelmoq"], ["stay", "qolmoq"], ["want", "xohlamoq"], ["finish", "tugatmoq, tugamoq"]] },
    { k: "fill", q: "We ___ chess last night. (play)", a: ["played"], why: "unli + y → **played**." },
    { k: "fill", q: "The film ___ at eight o'clock. (start)", a: ["started"] },
    { k: "fill", q: "He ___ to open the window. (try)", a: ["tried"], why: "undosh + y → **ied**: *tried*." },
    { k: "fill", q: "The bus ___ near the museum. (stop)", a: ["stopped"], why: "Qisqa fe'l: undosh + unli + undosh → **p** ikkilanadi: *stopped*." },
    { k: "tf", q: "**I was cleaned my room yesterday.** — to'g'ri gap.", a: false, why: "**was** kerak emas: *I **cleaned** my room yesterday.*" },
    { k: "tf", q: "**cooked** ikki bo'g'in bilan o'qiladi: \"ku-ked\".", a: false, why: "Bir bo'g'in: \"kukt\". Yangi bo'g'in faqat **t / d** dan keyin." },
    { k: "order", uz: "U derazani ochdi.", words: ["She", "opened", "the", "window"], extra: ["openned"] },
    { k: "translate", uz: "Men kecha xonamni tozaladim.", a: ["I cleaned my room yesterday", "Yesterday I cleaned my room", "Yesterday, I cleaned my room"] },
    { k: "translate", uz: "Onam palov pishirdi.", a: ["My mother cooked plov", "My mum cooked plov", "My mom cooked plov", "Mum cooked plov", "Mother cooked plov", "My mother cooked pilaf", "My mum cooked pilaf", "My mother made plov", "My mum made plov", "My mom made plov"] },
    { k: "speak", say: "I cooked dinner, cleaned the kitchen and watched a film.", uz: "Kechki ovqat pishirdim, oshxonani tozaladim va film ko'rdim." },
  ],
  quiz: [
    { k: "listen", say: "We stayed in the village.", opts: ["We stay in the village.", "We stayed in the village.", "We played in the village."], a: 1 },
    { k: "listen", say: "She opened the window.", opts: ["She opens the window.", "She closed the window.", "She opened the window."], a: 2 },
    { k: "choice", q: "Qaysi fe'lda -ed **alohida bo'g'in** (/ɪd/) bo'ladi?", opts: ["cleaned", "watched", "needed", "played"], a: 2, why: "*need* **d** bilan tugaydi → **need-ed** /ɪd/." },
    { k: "choice", q: "To'g'ri yozilishini tanlang.", opts: ["studyed", "studied", "studed", "studyied"], a: 1 },
    { k: "fill", q: "My brother ___ school two years ago. (finish)", a: ["finished"] },
    { k: "fill", q: "I ___ to call you, but my phone was at home. (want)", a: ["wanted"] },
    { k: "fill", q: "They ___ the party last week. (plan)", a: ["planned"], why: "plan → **planned** (n ikkilanadi)." },
    { k: "translate", uz: "Dars soat to'qqizda boshlandi.", a: ["The lesson started at nine", "The lesson started at nine o'clock", "The lesson started at 9", "The lesson started at 9 o'clock", "The class started at nine", "The class started at nine o'clock"] },
    { k: "order", uz: "U ikki kun oldin bobosini borib ko'rdi.", words: ["She", "visited", "her", "grandfather", "two", "days", "ago"], extra: ["visits", "before"] },
    { k: "tf", q: "**stayed** so'zida -ed **/d/** bo'lib o'qiladi: \"steyd\".", a: true },
  ],
  summary: [
    "Past Simple — o'tmishda tugagan ish. To'g'ri fe'llar: **fe'l + ed**, hamma shaxs uchun bir xil (*she played*).",
    "Imlo: **arrive → arrived**, **study → studied**, **play → played**, **stop → stopped**.",
    "Talaffuz: **/t/** cooked, watched · **/d/** played, cleaned · **/ɪd/** wanted, visited (faqat t / d dan keyin).",
    "Harakat uchun **was** kerak emas: *I cleaned* ✅, *I was cleaned* ❌.",
  ],
  homework: "Kecha qilgan ishlaringiz haqida 6 ta gap yozing, faqat **-ed** li fe'llar bilan (*I cleaned…, I watched…, I stayed…*). Keyin har bir fe'lni ovoz chiqarib o'qing va yoniga /t/, /d/ yoki /ɪd/ deb belgi qo'ying.",
};

export default lesson;
