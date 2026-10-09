import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u13-l2",
  title: "Will and won't",
  titleUz: "Will / won't: qaror, va'da, taxmin",
  goal: "**will / won't** bilan gap qurasiz va uni uchta holatda ishlatasiz: **shu zahoti qaror** (*I'll answer it*), **va'da va taklif** (*I'll help you*) hamda **fikrga asoslangan taxmin** (*I think it will be hot*).",
  slides: [
    {
      title: "Shakli: will + V1",
      blocks: [
        { t: "p", md: "**will** — modal fe'l. Barcha egalar bilan **bir xil** shaklda keladi, undan keyin **V1** (to'siz) turadi. Savol va inkorda **do / does** kerak emas." },
        {
          t: "table", head: ["Shakl", "Qolip", "Misol"], speak: [2],
          rows: [
            ["Darak", "ega + will ('ll) + V1", "She will call you. / She'll call you."],
            ["Inkor", "ega + will not (won't) + V1", "I won't forget. / They will not come."],
            ["Savol", "Will + ega + V1?", "Will you help me?"],
            ["Qisqa javob", "Yes, I will. / No, I won't.", "Will it rain? — No, it won't."],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["He will come tomorrow.", "Will you help me?", "I won't tell anyone."] },
          bad: { title: "Xato", items: ["He wills come tomorrow.", "Will you to help me?", "I won't to tell anyone."] },
        },
        { t: "tip", tone: "warn", md: "**will** dan keyin **to** qo'yilmaydi va **-s** qo'shilmaydi: *he will go*, **he wills go** ❌, **he will to go** ❌." },
        { t: "check", ex: { k: "choice", q: "\"U ertaga qo'ng'iroq qiladi.\"", opts: ["She will calls tomorrow.", "She will call tomorrow.", "She will to call tomorrow.", "She wills call tomorrow."], a: 1, why: "**will + V1**, hech qanday -s yo'q." } },
      ],
    },
    {
      title: "1) Shu zahoti qaror",
      blocks: [
        { t: "p", md: "Qarorni **gapirayotgan paytning o'zida** qabul qilsak, **will** ishlatamiz. Bu — oldindan rejalashtirilgan ish emas (u uchun *going to*, ikkinchi qismda ko'ramiz)." },
        {
          t: "examples", items: [
            { en: "The phone is ringing. I'll answer it.", uz: "Telefon jiringlayapti. Men javob beraman.", note: "Qaror shu soniyada tug'ildi." },
            { en: "It's cold in here. I'll close the window.", uz: "Bu yerda sovuq. Derazani yopaman." },
            { en: "I can't find my keys. — I'll help you look.", uz: "Kalitlarimni topolmayapman. — Qidirishga yordam beraman." },
            { en: "The menu looks great. I'll have the plov, please.", uz: "Menyu zo'r ko'rinadi. Palov olaman, iltimos.", note: "Restoranda buyurtma berish." },
          ],
        },
        { t: "tip", tone: "good", md: "Ichingizda **\"Mayli, unda…\"** deb qaror qilsangiz — **I'll…** deng. Masalan: *\"Mayli, unda men olaman\"* = *OK, I'll take it.*" },
        { t: "check", ex: { k: "fill", q: "There's no milk. — OK, I ___ buy some. (will)", a: ["'ll", "will"], why: "Shu zahoti qaror: **I'll buy**." } },
      ],
    },
    {
      title: "2) Va'da, taklif, rad javob",
      blocks: [
        { t: "p", md: "Yana bir muhim ishlatilishi — **va'da berish**, **yordam taklif qilish** va **iltimos qilish**. Rad etilganda **won't** — \"hech qachon / hech qanday holatda\" ma'nosini ham beradi." },
        {
          t: "table", head: ["Vazifa", "Misol"], speak: [1],
          rows: [
            ["Va'da", "I'll call you tonight. I promise."],
            ["Va'da (inkor)", "I won't tell anyone your secret."],
            ["Taklif", "That bag looks heavy. I'll carry it."],
            ["Iltimos", "Will you open the door, please?"],
            ["Qat'iy rad", "The car won't start! (U yurmayapti.)"],
          ],
        },
        { t: "tip", tone: "info", md: "**promise**, **offer**, **refuse** fe'llari bilan ham: *I promise I'll be on time.* — *to be on time* = o'z vaqtida kelmoq." },
        { t: "check", ex: { k: "choice", q: "Do'stingiz sirini aytmaslikka va'da bering:", opts: ["I don't tell anyone.", "I won't tell anyone.", "I'm not going tell anyone.", "I wills not tell anyone."], a: 1, why: "Va'da: **I won't + V1**." } },
      ],
    },
    {
      title: "3) Taxmin va fikr",
      blocks: [
        { t: "p", md: "Kelajak haqida **fikr, taxmin yoki ishonch** bildirganda ham **will** ishlatamiz. Ko'pincha quyidagi so'zlar bilan keladi:" },
        {
          t: "table", head: ["So'z", "Ma'nosi", "Misol"], speak: [2],
          rows: [
            ["I think", "menimcha", "I think it will be hot tomorrow."],
            ["I'm sure", "ishonchim komil", "I'm sure you'll pass the test."],
            ["probably", "ehtimol, ko'pincha", "She'll probably be late."],
            ["definitely", "albatta, shubhasiz", "It will definitely be fun."],
            ["perhaps / maybe", "balki", "Perhaps he'll call later."],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I don't think it will rain.", "She'll probably be late.", "He definitely won't come."] },
          bad: { title: "Xato", items: ["I think it will not to rain.", "She will probably to be late.", "He doesn't will come."] },
        },
        { t: "tip", tone: "warn", md: "Inglizlar inkor fikrni odatda **\"I don't think … will\"** deb aytadi: *I don't think it will rain.* **probably / definitely** darak gapda **'ll / will** dan **keyin** (*She'll probably be late*), inkorda esa **won't** dan **oldin** keladi (*He definitely won't come*)." },
        { t: "check", ex: { k: "order", uz: "Menimcha, ertaga yomg'ir yog'maydi.", words: ["I", "don't", "think", "it", "will", "rain", "tomorrow."], extra: ["won't", "going"] } },
      ],
    },
    {
      title: "O'qing: 2050-yil",
      blocks: [
        {
          t: "text", title: "Life in 2050",
          en: "What will life be like in 2050? Many people think robots will do the boring jobs, and cars will drive themselves. Kamol is sure that people will work from home more. \"Offices will probably be smaller,\" he says. His sister Dilnoza disagrees. \"I don't think we'll stop going to work. People need to meet each other,\" she says.\nThey both agree on one thing: the weather will be hotter. \"Cities will definitely need more trees,\" Kamol says. \"I promise I'll plant one in our garden this spring!\"",
          uz: "2050-yilda hayot qanday bo'ladi? Ko'pchilik robotlar zerikarli ishlarni qiladi va mashinalar o'zi haydaydi deb o'ylaydi. Kamol odamlar uydan ko'proq ishlashiga ishonadi. \"Ofislar ehtimol kichikroq bo'ladi,\" deydi u. Singlisi Dilnoza rozi emas. \"Menimcha, ishga borishni to'xtatmaymiz. Odamlarga bir-biri bilan uchrashish kerak,\" deydi u.\nIkkalasi bir narsada bir fikrda: ob-havo issiqroq bo'ladi. \"Shaharlarga albatta ko'proq daraxt kerak bo'ladi,\" deydi Kamol. \"Bu bahorda bog'imizga bitta daraxt ekishga va'da beraman!\"",
        },
        { t: "check", ex: { k: "choice", q: "What does Dilnoza think?", opts: ["Nobody will work in offices.", "People will keep going to work.", "Robots won't exist.", "Cities won't need trees."], a: 1, why: "*I don't think we'll stop going to work.*" } },
        { t: "check", ex: { k: "tf", q: "Kamol promises to plant a tree.", a: true, why: "*I promise I'll plant one in our garden this spring!*" } },
      ],
    },
    {
      title: "Dialog: ofisda",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Laylo", en: "Oh no, I've left my laptop at home!", uz: "Voy, noutbukni uyda qoldiribman!" },
            { who: "Aziz", en: "Don't worry. I'll bring you mine.", uz: "Xavotir olma. Menikini olib kelaman." },
            { who: "Laylo", en: "Really? Thank you! Will you need it this afternoon?", uz: "Rostdanmi? Rahmat! Tushdan keyin o'zingga kerak bo'ladimi?" },
            { who: "Aziz", en: "No, I won't. I'll be in meetings all day.", uz: "Yo'q, kerak bo'lmaydi. Kun bo'yi yig'ilishlarda bo'laman." },
            { who: "Laylo", en: "I promise I'll give it back before six.", uz: "Oltigacha qaytarib berishga va'da beraman." },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Aziz will need his laptop this afternoon.", a: false, why: "*No, I won't. I'll be in meetings all day.*" } },
      ],
    },
  ],
  words: [
    { en: "promise", uz: "va'da bermoq; va'da", ipa: "ˈprɒmɪs", pos: "verb/noun", ex: "I promise I'll call you.", exUz: "Qo'ng'iroq qilishga va'da beraman." },
    { en: "probably", uz: "ehtimol, ko'pincha", ipa: "ˈprɒbəbli", pos: "adv", ex: "It will probably rain tonight.", exUz: "Bugun kechqurun ehtimol yomg'ir yog'adi." },
    { en: "definitely", uz: "albatta, shubhasiz", ipa: "ˈdefɪnətli", pos: "adv", ex: "I'll definitely be there.", exUz: "Men albatta u yerda bo'laman." },
    { en: "perhaps", uz: "balki", ipa: "pəˈhæps", pos: "adv", ex: "Perhaps she'll come later.", exUz: "Balki u keyinroq keladi." },
    { en: "secret", uz: "sir", ipa: "ˈsiːkrət", pos: "noun", ex: "I won't tell your secret.", exUz: "Sirini hech kimga aytmayman." },
    { en: "future", uz: "kelajak", ipa: "ˈfjuːtʃə", pos: "noun", ex: "In the future, we'll live on Mars.", exUz: "Kelajakda Marsda yashaymiz." },
    { en: "robot", uz: "robot", ipa: "ˈrəʊbɒt", pos: "noun", ex: "A robot will clean my room.", exUz: "Xonamni robot tozalaydi." },
    { en: "carry", uz: "ko'tarib yurmoq, olib bormoq", ipa: "ˈkæri", pos: "verb", ex: "I'll carry your bag.", exUz: "Sumkangni ko'taraman." },
    { en: "on time", uz: "o'z vaqtida", ipa: "ɒn taɪm", pos: "phrase", ex: "I promise I'll be on time.", exUz: "O'z vaqtida kelishga va'da beraman." },
    { en: "right away", uz: "darhol", ipa: "raɪt əˈweɪ", pos: "phrase", ex: "I'll do it right away.", exUz: "Buni darhol qilaman." },
  ],
  practice: [
    { k: "match", pairs: [["promise", "va'da bermoq"], ["probably", "ehtimol"], ["definitely", "albatta"], ["secret", "sir"], ["on time", "o'z vaqtida"]] },
    { k: "listen", say: "I'll help you with your bags.", opts: ["I help you with your bags.", "I'll help you with your bags.", "I helped you with your bags."], a: 1 },
    { k: "listen", say: "I won't tell anyone.", opts: ["I want to tell anyone.", "I won't tell anyone.", "I don't tell anyone."], a: 1, why: "**won't** — \"wount\"; **want** — \"wont\" (qisqa)." },
    { k: "fill", q: "The phone is ringing! — I ___ answer it.", a: ["'ll", "will"], why: "Shu zahoti qaror → **I'll answer**." },
    { k: "fill", q: "I don't think it ___ rain tomorrow.", a: ["will"], why: "*I don't think … will*." },
    { k: "fill", q: "Will you help me? — No, I ___.", a: ["won't", "will not"], uz: "Yordam berasanmi? — Yo'q, bermayman." },
    { k: "fill", q: "Don't worry. I ___ forget your birthday. I promise!", a: ["won't", "will not"], uz: "Xavotir olma. Tug'ilgan kuningni unutmayman. Va'da beraman!" },
    { k: "choice", q: "Qaysi gap **xato**?", opts: ["I'll call you later.", "Will you help me?", "He will to come.", "They won't know."], a: 2, why: "**will** dan keyin **to** yo'q: *He will come.*" },
    { k: "choice", q: "**I'm cold. — OK, I ___ close the window.**", opts: ["will", "am going", "closing", "close"], a: 0 },
    { k: "choice", q: "Taklif: \"Men sumkangni ko'taraman.\"", opts: ["I carry your bag.", "I'll carry your bag.", "I'll to carry your bag.", "I carrying your bag."], a: 1 },
    { k: "tf", q: "**She wills come** to'g'ri.", a: false, why: "**will** ga -s qo'shilmaydi: *She **will** come.*" },
    { k: "tf", q: "**I think it won't rain** o'rniga ko'proq **I don't think it will rain** deyiladi.", a: true },
    { k: "order", uz: "Men o'z vaqtida kelishga va'da beraman.", words: ["I", "promise", "I'll", "be", "on", "time."], extra: ["to", "am"], alt: [["I", "promise", "I", "will", "be", "on", "time."]] },
    { k: "translate", uz: "Men sizga yordam beraman.", a: ["I'll help you.", "I will help you."] },
    { k: "speak", say: "I promise I'll call you tonight.", uz: "Bugun kechqurun qo'ng'iroq qilishga va'da beraman." },
  ],
  quiz: [
    { k: "fill", q: "It's very hot. — I ___ open the window.", a: ["'ll", "will"] },
    { k: "fill", q: "He ___ definitely come. He promised!", a: ["will", "'ll"] },
    { k: "choice", q: "\"Men hech kimga aytmayman.\"", opts: ["I don't tell anyone.", "I won't tell anybody.", "I will not to tell anybody.", "I not will tell anybody."], a: 1 },
    { k: "choice", q: "**Will you come to the party?** — qisqa javob (ha):", opts: ["Yes, I do.", "Yes, I will.", "Yes, I'll.", "Yes, I am."], a: 1, why: "Qisqa javobda **'ll** ishlatilmaydi: *Yes, I will.*" },
    { k: "choice", q: "**I'm sure she ___ the exam.**", opts: ["pass", "passes", "will pass", "will passes"], a: 2 },
    { k: "listen", say: "Perhaps he will call later.", opts: ["Perhaps he will call later.", "Perhaps he called later.", "Perhaps he calls later."], a: 0 },
    { k: "tf", q: "**Restoranda \"I'll have the soup\"** — shu zahoti qaror.", a: true },
    { k: "tf", q: "**Will she to come?** — to'g'ri savol.", a: false, why: "To'g'ri: **Will she come?**" },
    { k: "order", uz: "Menimcha, u kech qoladi.", words: ["I", "think", "she", "will", "be", "late."], extra: ["wills", "to"], alt: [["I", "think", "she'll", "be", "late."]] },
    { k: "translate", uz: "Men ertaga albatta qo'ng'iroq qilaman.", a: ["I'll definitely call tomorrow.", "I will definitely call tomorrow.", "I'll call tomorrow for sure.", "I'll definitely call you tomorrow.", "I will definitely call you tomorrow.", "Tomorrow I'll definitely call.", "Tomorrow I will definitely call."] },
  ],
  summary: [
    "**will + V1** barcha egalar bilan: *I / he / they will go.* Inkor: **won't**. Savol: **Will you…?** Hech qachon *will to go*, *wills*.",
    "Shu zahoti qaror, va'da va taklif: *The phone is ringing — I'll answer it. I won't tell anyone.*",
    "Fikr va taxmin: *I think / I'm sure / probably / definitely* + **will**.",
    "Inkor fikr: **I don't think it will rain** (*I think it won't* emas).",
  ],
  homework: "Uyda 6 ta gap yozing: 2 ta shu zahoti qaror (*It's dark. I'll turn on the light.*), 2 ta va'da (*I promise I'll…*) va 2 ta kelajak haqida taxmin (*I think … will …*). Keyin yaqin odamingizga \"Will you help me?\" bilan 3 ta iltimos qilib ko'ring.",
};

export default lesson;
