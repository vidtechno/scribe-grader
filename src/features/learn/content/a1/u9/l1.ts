import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u9-l1",
  title: "Yesterday, last week, two days ago",
  titleUz: "O'tgan zamon vaqt so'zlari: ago, last, yesterday",
  goal: "O'tgan voqea **qachon** bo'lganini aniq ayta olasiz: **yesterday afternoon, the day before yesterday, last month, a long time ago, in 2019, this morning, when I was a child** — va bu iboralarni to'g'ri joyda, predlogsiz yoki to'g'ri predlog bilan ishlatasiz.",
  slides: [
    {
      title: "Takrorlash va yangi qadam",
      blocks: [
        { t: "p", md: "Beginner bosqichida **yesterday, last night, last week, two days ago** ni o'rgandik. Endi ularni kengaytiramiz: kunning qismlari, aniq sanalar, \"juda uzoq vaqt oldin\", \"bolaligimda\" kabi iboralar. Hikoya qilganda aynan shu so'zlar tinglovchiga **vaqtni** ko'rsatadi." },
        {
          t: "examples", items: [
            { en: "I called my mum yesterday afternoon.", uz: "Kecha tushdan keyin onamga qo'ng'iroq qildim." },
            { en: "We moved to Tashkent a long time ago.", uz: "Biz Toshkentga ancha oldin ko'chib kelganmiz." },
            { en: "She started a new job last month.", uz: "U o'tgan oy yangi ishni boshladi." },
            { en: "I saw Aziz the day before yesterday.", uz: "Azizni o'tgan kuni (kechadan oldingi kun) ko'rdim." },
            { en: "When I was a child, I lived in a village.", uz: "Bolaligimda qishloqda yashardim." },
          ],
        },
        { t: "tip", tone: "info", md: "Bu iboralar gapning **oxirida** yoki **boshida** turadi. Boshida tursa, ko'pincha vergul qo'yiladi: *Last month, she started a new job.* Lekin hech qachon ega va fe'l orasiga qo'yilmaydi: ❌ *She last month started…*" },
        { t: "check", ex: { k: "choice", q: "Qaysi gapda vaqt so'zi **to'g'ri** joyda?", opts: ["I yesterday afternoon called my mum.", "I called yesterday afternoon my mum.", "I called my mum yesterday afternoon.", "Yesterday afternoon I my mum called."], a: 2, why: "Vaqt iborasi gapning oxirida (yoki eng boshida) turadi: *I called my mum **yesterday afternoon**.*" } },
      ],
    },
    {
      title: "yesterday + kunning qismi, lekin last night",
      blocks: [
        {
          t: "table", head: ["Inglizcha", "O'zbekcha", "Eslatma"],
          rows: [
            ["yesterday morning", "kecha ertalab", "✅"],
            ["yesterday afternoon", "kecha tushdan keyin", "✅"],
            ["yesterday evening", "kecha kechqurun", "✅ (taxminan 18:00–21:00)"],
            ["last night", "kecha kechasi / kechqurun", "✅ ❌ yesterday night deyilmaydi"],
            ["the day before yesterday", "o'tgan kuni (2 kun oldin)", "✅ o'zbekcha \"avvalgi kuni\""],
            ["this morning", "bugun ertalab", "Hozir tushdan keyin bo'lsa — o'tgan zamon"],
          ],
          speak: [0],
        },
        { t: "tip", tone: "warn", md: "O'zbekchada \"kecha kechasi\" deymiz, shuning uchun ko'pchilik **yesterday night** deydi. Inglizlar deyarli doim **last night** deydi. Xuddi shunday, \"o'tgan kuni\" uchun ❌ *before yesterday* emas, **the day before yesterday** — to'liq ibora." },
        { t: "p", md: "**this morning** qiziq ibora: agar hozir soat 15:00 bo'lsa, ertalab o'tib ketgan — demak, o'tgan zamon: *I **had** a coffee this morning.* Ertalab soat 8 da aytsangiz, hozirgi zamon ham bo'lishi mumkin." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I slept badly last night.", "We met the day before yesterday.", "She phoned yesterday evening.", "I had tea this morning."] },
          bad: { title: "Xato", items: ["I slept badly yesterday night.", "We met before yesterday.", "She phoned in yesterday evening.", "I had tea in this morning."] },
        },
        { t: "check", ex: { k: "fill", q: "I didn't sleep well ___ night.", a: ["last"], uz: "Kecha kechasi yaxshi uxlamadim.", why: "\"Kecha kechasi\" — **last night**, *yesterday night* emas." } },
      ],
    },
    {
      title: "last + vaqt: the ham, on ham yo'q",
      blocks: [
        { t: "p", md: "**last** = \"o'tgan\". U bilan **artikl ham, predlog ham** ishlatilmaydi. Bu Uzbek o'quvchilarning eng ko'p uchraydigan xatosi: \"o'tgan haftada\" deganimiz uchun ❌ *in last week* deyishadi." },
        {
          t: "table", head: ["last + …", "O'zbekcha"],
          rows: [
            ["last Monday", "o'tgan dushanba"],
            ["last weekend", "o'tgan dam olish kunlari"],
            ["last month", "o'tgan oy"],
            ["last summer", "o'tgan yoz"],
            ["last year", "o'tgan yil"],
            ["last April", "o'tgan aprel"],
          ],
          speak: [0],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I went to Fergana last summer.", "They visited us last month.", "We played football last Sunday."] },
          bad: { title: "Xato", items: ["I went to Fergana in last summer.", "They visited us the last month.", "We played football on last Sunday."] },
        },
        { t: "tip", tone: "info", md: "Solishtiring: **on Sunday** (yakshanba kuni — qaysi yakshanba ekani kontekstdan ma'lum) va **last Sunday** (o'tgan yakshanba). **on** va **last** bir vaqtda kelmaydi." },
        { t: "check", ex: { k: "choice", q: "\"O'tgan oy Samarqandga bordim.\"", opts: ["I went to Samarkand in last month.", "I went to Samarkand the last month.", "I went to Samarkand last month.", "I went to Samarkand month ago."], a: 2, why: "**last month** — artikl ham, predlog ham yo'q." } },
      ],
    },
    {
      title: "ago: qancha vaqt oldin?",
      blocks: [
        { t: "p", md: "**ago** — hozirgi paytdan orqaga sanaymiz. Tuzilishi o'zbekchadagidek: **vaqt miqdori + ago** = \"... oldin\"." },
        {
          t: "table", head: ["Inglizcha", "O'zbekcha"],
          rows: [
            ["five minutes ago", "besh daqiqa oldin"],
            ["a few minutes ago", "bir necha daqiqa oldin"],
            ["an hour ago", "bir soat oldin"],
            ["three weeks ago", "uch hafta oldin"],
            ["a few days ago", "bir necha kun oldin"],
            ["a long time ago", "ancha oldin, uzoq vaqt oldin"],
          ],
          speak: [0],
        },
        {
          t: "sounds", items: [
            { label: "ago", say: "ago", uz: "Urg'u ikkinchi bo'g'inda: **\"ə-GOU\"**. Birinchi *a* — kuchsiz \"ə\".", examples: ["ago", "two days ago"] },
            { label: "an hour ago", say: "an hour ago", uz: "**hour** da *h* o'qilmaydi (\"auə\"), shuning uchun **an**. Hammasi bir nafasda: **\"ə-nauə-rə-gou\"**.", examples: ["an hour ago", "a long time ago"] },
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["three years ago", "a long time ago", "I met her two weeks ago."] },
          bad: { title: "Xato", items: ["before three years", "ago a long time", "I met her before two weeks."] },
        },
        { t: "tip", tone: "warn", md: "O'zbekchadagi \"oldin\" ni **before** deb tarjima qilmang! *before* dan keyin voqea yoki vaqt keladi: *before lunch* (tushlikdan oldin), *before 2020*. \"Uch yil oldin\" — faqat **three years ago**." },
        { t: "check", ex: { k: "order", uz: "U bir necha daqiqa oldin ketdi.", words: ["He", "went", "out", "a", "few", "minutes", "ago"], extra: ["before"], why: "Vaqt miqdori + **ago**: *a few minutes ago*." } },
      ],
    },
    {
      title: "in, on, at va when I was…",
      blocks: [
        { t: "p", md: "Aniq sana yoki davr aytilsa, Beginner'dagi **in / on / at** qoidasi ishlaydi. Bundan tashqari, hayotning bir davrini **when I was…** bilan aytamiz." },
        {
          t: "table", head: ["Predlog", "Nima bilan", "Misol"],
          rows: [
            ["in", "yil, oy, fasl", "in 2019, in May, in the summer of 2022"],
            ["on", "kun, sana", "on Friday, on 3 March, on my birthday"],
            ["at", "soat", "at six o'clock, at midnight"],
            ["—", "when + was/were", "when I was a child, when she was ten"],
          ],
          speak: [2],
        },
        {
          t: "examples", items: [
            { en: "My parents got married in 1998.", uz: "Ota-onam 1998-yilda turmush qurishgan." },
            { en: "The shop opened on 1 September.", uz: "Do'kon 1-sentabrda ochildi." },
            { en: "When I was a child, I loved cartoons.", uz: "Bolaligimda multfilmlarni yaxshi ko'rardim." },
            { en: "I came home late, and two hours later my brother came.", uz: "Uyga kech keldim, ikki soatdan keyin akam keldi." },
          ],
        },
        { t: "tip", tone: "good", md: "**ago** — hozirdan orqaga (*two days ago*). **later** — o'tmishdagi biror voqeadan keyin (*two days later*). Hikoya aytganda **later** juda foydali: *We arrived on Monday. Two days later, it snowed.*" },
        { t: "check", ex: { k: "fill", q: "My grandfather was born ___ 1950.", a: ["in"], why: "Yil bilan — **in**: *in 1950*." } },
      ],
    },
    {
      title: "O'qing: Malika'ning haftasi",
      blocks: [
        {
          t: "text", title: "A busy week",
          en: "My name is Malika and I work at a bank in Tashkent. Last week was very busy.\nOn Monday morning, I had a big meeting. The day before yesterday, I worked until nine in the evening, so I was very tired.\nYesterday afternoon, my cousin Laylo called me. We were best friends when we were children, but she moved to Andijan a long time ago. She came to Tashkent three days ago! Last night we had dinner in a small café near my office. We talked for hours.\nThis morning I woke up late, but I was happy.",
          uz: "Mening ismim Malika, men Toshkentdagi bankda ishlayman. O'tgan hafta juda band o'tdi.\nDushanba kuni ertalab katta yig'ilish bo'ldi. O'tgan kuni kechki soat to'qqizgacha ishladim, shuning uchun juda charchadim.\nKecha tushdan keyin xolamning qizi Laylo qo'ng'iroq qildi. Bolaligimizda eng yaqin dugonalar edik, lekin u ancha oldin Andijonga ko'chib ketgan. U uch kun oldin Toshkentga keldi! Kecha kechqurun ofisim yaqinidagi kichkina kafeda kechki ovqat qildik. Soatlab gaplashdik.\nBugun ertalab kech uyg'ondim, lekin xursand edim.",
        },
        { t: "check", ex: { k: "tf", q: "Malika va Laylo **last night** (kecha kechqurun) kafeda ovqatlanishdi.", a: true, why: "*Last night we had dinner in a small café…*" } },
        { t: "check", ex: { k: "choice", q: "Laylo Toshkentga qachon keldi?", opts: ["a long time ago", "three days ago", "last week", "this morning"], a: 1, why: "*She came to Tashkent **three days ago**!*" } },
      ],
    },
    {
      title: "Dialog: Qachon edi?",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Bekzod", en: "Did you see the new film at Magic City?", uz: "Magic City'dagi yangi filmni ko'rdingmi?" },
            { who: "Nodira", en: "Yes, I saw it the day before yesterday.", uz: "Ha, o'tgan kuni ko'rdim." },
            { who: "Bekzod", en: "Really? I went there last Saturday, but there were no tickets.", uz: "Rostdanmi? Men o'tgan shanba borgandim, lekin chipta yo'q edi." },
            { who: "Nodira", en: "I bought my ticket online a week ago.", uz: "Men chiptamni bir hafta oldin internetdan oldim." },
            { who: "Bekzod", en: "Good idea. When did you last go to the cinema before that?", uz: "Yaxshi fikr. Undan oldin oxirgi marta qachon kinoga borgansan?" },
            { who: "Nodira", en: "Oh, a long time ago. Maybe last summer!", uz: "Oh, ancha oldin. Balki o'tgan yozdadir!" },
          ],
        },
        { t: "tip", tone: "info", md: "**When did you last…?** — \"Oxirgi marta qachon …?\" degan juda tabiiy savol. Javob: *a long time ago, last summer, two days ago* va h.k." },
        { t: "check", ex: { k: "tf", q: "Nodira chiptani **o'tgan shanba** sotib oldi.", a: false, why: "U chiptani **a week ago** (bir hafta oldin) internetdan oldi. O'tgan shanba kinoga Bekzod borgan." } },
      ],
    },
  ],
  words: [
    { en: "the day before yesterday", uz: "o'tgan kuni (ikki kun oldin)", ipa: "ðə ˌdeɪ bɪˌfɔː ˈjes.tə.deɪ", pos: "phrase", ex: "I met him the day before yesterday.", exUz: "U bilan o'tgan kuni uchrashdim." },
    { en: "yesterday afternoon", uz: "kecha tushdan keyin", ipa: "ˌjes.tə.deɪ ˌɑːf.təˈnuːn", pos: "phrase", ex: "She called me yesterday afternoon.", exUz: "U menga kecha tushdan keyin qo'ng'iroq qildi." },
    { en: "this morning", uz: "bugun ertalab", ipa: "ðɪs ˈmɔː.nɪŋ", pos: "phrase", ex: "I missed breakfast this morning.", exUz: "Bugun ertalab nonushta qilmadim." },
    { en: "last month", uz: "o'tgan oy", ipa: "ˌlɑːst ˈmʌnθ", pos: "phrase", ex: "We moved to a new flat last month.", exUz: "O'tgan oy yangi kvartiraga ko'chdik." },
    { en: "last summer", uz: "o'tgan yoz", ipa: "ˌlɑːst ˈsʌm.ə", pos: "phrase", ex: "Last summer we went to the mountains.", exUz: "O'tgan yozda tog'ga bordik." },
    { en: "a long time ago", uz: "ancha oldin, uzoq vaqt oldin", ipa: "ə ˌlɒŋ ˈtaɪm əˌɡəʊ", pos: "phrase", ex: "My grandparents built this house a long time ago.", exUz: "Bobom va buvim bu uyni ancha oldin qurishgan." },
    { en: "a few minutes ago", uz: "bir necha daqiqa oldin", ipa: "ə ˌfjuː ˈmɪn.ɪts əˌɡəʊ", pos: "phrase", ex: "The bus left a few minutes ago.", exUz: "Avtobus bir necha daqiqa oldin ketdi." },
    { en: "later", uz: "keyinroq, …dan keyin", ipa: "ˈleɪ.tə", pos: "adv", ex: "We arrived on Monday, and two days later it snowed.", exUz: "Dushanba kuni yetib keldik, ikki kundan keyin qor yog'di." },
    { en: "when I was a child", uz: "bolaligimda", ipa: "wen aɪ wəz ə ˈtʃaɪld", pos: "phrase", ex: "When I was a child, I lived in Namangan.", exUz: "Bolaligimda Namanganda yashardim." },
    { en: "cousin", uz: "amakivachcha, xolavachcha (aka-uka/opa-singilning farzandi)", ipa: "ˈkʌz.ən", pos: "noun", ex: "My cousin came from Andijan three days ago.", exUz: "Xolavachcham uch kun oldin Andijondan keldi." },
  ],
  practice: [
    { k: "listen", say: "the day before yesterday", opts: ["the day after tomorrow", "the day before yesterday", "the day before today"], a: 1, why: "**the day before yesterday** — o'tgan kuni." },
    { k: "listen", say: "She left an hour ago.", opts: ["She left an hour ago.", "She left a year ago.", "She leaves in an hour."], a: 0, why: "**an hour ago** — \"ə-nauə-rə-gou\"." },
    { k: "match", pairs: [["last night", "kecha kechasi"], ["this morning", "bugun ertalab"], ["last month", "o'tgan oy"], ["a long time ago", "ancha oldin"], ["the day before yesterday", "o'tgan kuni"]] },
    { k: "choice", q: "\"Kecha kechasi\" ni qanday aytamiz?", opts: ["yesterday night", "last night", "the last night", "in last night"], a: 1, why: "Inglizlar **last night** deydi." },
    { k: "choice", q: "\"Ikki yil oldin\":", opts: ["before two years", "two years before", "two years ago", "ago two years"], a: 2, why: "Vaqt miqdori + **ago**." },
    { k: "fill", q: "We went to Khiva ___ summer.", a: ["last"], uz: "O'tgan yozda Xivaga bordik." },
    { k: "fill", q: "I saw her five minutes ___.", a: ["ago"], uz: "Uni besh daqiqa oldin ko'rdim." },
    { k: "fill", q: "They got married ___ 2015.", a: ["in"], why: "Yil — **in**." },
    { k: "fill", q: "The concert was ___ 12 June.", a: ["on"], why: "Sana — **on**." },
    { k: "tf", q: "*I visited my aunt in last week.* — to'g'ri gap.", a: false, why: "**last** bilan predlog yo'q: *I visited my aunt **last week**.*" },
    { k: "tf", q: "*We arrived on Friday. Two days later, we went to the mountains.* — bu yerda **later** to'g'ri ishlatilgan.", a: true, why: "**later** — o'tmishdagi voqeadan (juma kunidan) keyin sanaladi." },
    { k: "order", uz: "Bolaligimda qishloqda yashardim.", words: ["When", "I", "was", "a", "child,", "I", "lived", "in", "a", "village"], extra: ["were", "live"], alt: [["I", "lived", "in", "a", "village", "when", "I", "was", "a", "child,"]] },
    { k: "order", uz: "Biz o'tgan kuni uchrashdik.", words: ["We", "met", "the", "day", "before", "yesterday"], extra: ["ago", "last"] },
    { k: "translate", uz: "U (she) o'tgan oy Buxoroga bordi.", a: ["She went to Bukhara last month", "Last month she went to Bukhara", "Last month, she went to Bukhara"] },
    { k: "translate", uz: "Men bugun ertalab choy ichdim.", a: ["I drank tea this morning", "I had tea this morning", "This morning I drank tea", "This morning I had tea", "This morning, I drank tea", "This morning, I had tea", "I drank some tea this morning", "I had some tea this morning", "I had a cup of tea this morning", "I drank a cup of tea this morning"] },
    { k: "speak", say: "I saw her the day before yesterday.", uz: "Uni o'tgan kuni ko'rdim." },
  ],
  quiz: [
    { k: "choice", q: "Qaysi ibora **xato**?", opts: ["last night", "yesterday evening", "yesterday night", "this morning"], a: 2, why: "Odatda **last night** deyiladi, *yesterday night* emas." },
    { k: "choice", q: "\"O'tgan yozda dengizga bordik.\"", opts: ["We went to the sea in last summer.", "We went to the sea last summer.", "We went to the sea the last summer.", "We went to the sea on last summer."], a: 1, why: "**last summer** — predlogsiz va artiklsiz." },
    { k: "choice", q: "My uncle came to visit us ___.", opts: ["before three days", "three days ago", "ago three days", "three days before now ago"], a: 1 },
    { k: "fill", q: "Aziz called you a few minutes ___.", a: ["ago"], uz: "Aziz bir necha daqiqa oldin sizga qo'ng'iroq qildi." },
    { k: "fill", q: "I was born ___ 7 April.", a: ["on"], why: "Sana — **on**." },
    { k: "fill", q: "We met on Monday, and two days ___ we met again.", a: ["later"], uz: "Dushanba kuni uchrashdik, ikki kundan keyin yana uchrashdik.", why: "O'tmishdagi voqeadan keyin — **later**." },
    { k: "listen", say: "We moved here a long time ago.", opts: ["We moved here a long time ago.", "We moved here a month ago.", "We move here a long time ago."], a: 0 },
    { k: "tf", q: "Malika'ning hikoyasida Laylo **a long time ago** Andijonga ko'chib ketgan.", a: true, why: "*…she moved to Andijan a long time ago.*" },
    { k: "order", uz: "Avtobus bir soat oldin ketdi.", words: ["The", "bus", "left", "an", "hour", "ago"], extra: ["a", "before"] },
    { k: "translate", uz: "Men uni (him) kecha tushdan keyin ko'rdim.", a: ["I saw him yesterday afternoon", "Yesterday afternoon I saw him", "Yesterday afternoon, I saw him"] },
  ],
  summary: [
    "**yesterday morning / afternoon / evening**, lekin **last night** (*yesterday night* emas); **the day before yesterday** = o'tgan kuni.",
    "**last + week / month / summer / Monday** — oldida **the** ham, **in / on** ham yo'q.",
    "Vaqt miqdori + **ago**: *five minutes ago, a long time ago* (❌ *before two years*). O'tmishdagi voqeadan keyin — **later**.",
    "Aniq vaqt: **in** 2019 / May, **on** Friday / 3 March, **at** six; davr: **when I was a child**.",
  ],
  homework: "O'tgan haftangiz haqida 8 ta gap yozing va har birida boshqa vaqt iborasini ishlating: *this morning, yesterday afternoon, last night, the day before yesterday, last Sunday, a week ago, a long time ago, when I was a child*. Keyin ularni ovoz chiqarib o'qing.",
};

export default lesson;
