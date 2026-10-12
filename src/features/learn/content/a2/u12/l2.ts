import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u12-l2",
  title: "Past Simple: questions and negatives",
  titleUz: "Past Simple: savol va inkor, ago va vaqt iboralari",
  goal: "Past Simple da **didn't** bilan inkor gap (*I didn't go*), **Did…?** bilan savol (*Did you see him?*), **Wh-** savollar (*Where did you go?*), **was / were** ning inkor va savol shakllarini tuzasiz va **yesterday, last week, two days ago, in 2019** kabi vaqt iboralarini to'g'ri ishlatasiz.",
  slides: [
    {
      title: "Inkor: didn't + V1",
      blocks: [
        { t: "p", md: "Past Simple da inkor gap uchun **didn't** (= did not) ishlatiladi, undan keyin fe'l **asl shaklda (V1)** keladi. Muhim: o'tgan zamon belgisi faqat **bitta** joyda — **didn't** da. Asosiy fe'l o'tgan shaklga o'tmaydi." },
        {
          t: "table", head: ["Darak gap (+)", "Inkor (−)"], speak: [0, 1],
          rows: [
            ["I **went** to the party.", "I **didn't go** to the party."],
            ["She **bought** a ticket.", "She **didn't buy** a ticket."],
            ["We **watched** the match.", "We **didn't watch** the match."],
            ["They **ate** plov.", "They **didn't eat** plov."],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I didn't go to work.", "She didn't see me.", "We didn't have time."] },
          bad: { title: "Xato", items: ["I didn't went to work.", "She didn't saw me.", "We not had time."] },
        },
        { t: "tip", tone: "warn", md: "O'zbekcha \"bormadim\" — bitta so'z. Inglizchada ikkita: **didn't + go**. Xatoning sababi: \"o'tgan zamon\" ni ikki marta belgilash (*didn't **went***). *did / didn't* turgan joyda fe'l **doim V1**." },
        { t: "check", ex: { k: "fill", q: "Kamol ___ come to school yesterday. (inkor)", a: ["didn't", "did not"], why: "Inkor: **didn't + come**." } },
      ],
    },
    {
      title: "Ha / yo'q savollar: Did…?",
      blocks: [
        { t: "p", md: "Savol uchun gapning boshiga **Did** qo'yamiz: **Did + ega + V1 …?** Qisqa javob ham **did** bilan beriladi." },
        {
          t: "table", head: ["Savol", "Qisqa javob (+)", "Qisqa javob (−)"], speak: [0, 1, 2],
          rows: [
            ["Did you see the film?", "Yes, I did.", "No, I didn't."],
            ["Did she call you?", "Yes, she did.", "No, she didn't."],
            ["Did they arrive on time?", "Yes, they did.", "No, they didn't."],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["Did you like the plov?", "Did he phone you?", "Did it rain yesterday?"] },
          bad: { title: "Xato", items: ["Did you liked the plov?", "You did like the plov?", "Did he phoned you?"] },
        },
        { t: "tip", tone: "info", md: "Qisqa javobda asosiy fe'lni takrorlamaymiz: *Did you see it? — Yes, I **did**.* (*Yes, I **saw** it* ham to'g'ri, lekin to'liq gap bo'ladi.) Javobdagi **did** — savoldagi **Did** ning takrori." },
        { t: "check", ex: { k: "choice", q: "**Did you ___ my message?**", opts: ["get", "got", "getting", "gets"], a: 0, why: "**Did** dan keyin V1: *Did you **get**…?*" } },
      ],
    },
    {
      title: "Wh- savollar",
      blocks: [
        { t: "p", md: "So'roq so'z (**What, Where, When, Why, How, Who**) gapning boshiga keladi, keyin xuddi shu tartib: **so'roq so'z + did + ega + V1**." },
        {
          t: "table", head: ["So'roq so'z", "Misol"], speak: [1],
          rows: [
            ["What", "What did you do last night?"],
            ["Where", "Where did you go on holiday?"],
            ["When", "When did they arrive?"],
            ["Why", "Why did he leave early?"],
            ["How", "How did you get here?"],
            ["Who … with", "Who did you go with?"],
          ],
        },
        { t: "tip", tone: "warn", md: "**Istisno:** agar **Who / What** gapning **egasi** bo'lsa, **did kerak emas**: *Who **called** you?* (kim qo'ng'iroq qildi) — lekin *Who did you call?* (siz kimga qo'ng'iroq qildingiz). Egasi so'ralganda fe'l o'tgan zamonda bo'ladi, **did** yo'q." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["Where did you buy this bag?", "What time did the train leave?", "Who broke the window?"] },
          bad: { title: "Xato", items: ["Where you bought this bag?", "What time the train left?", "Who did broke the window?"] },
        },
        { t: "check", ex: { k: "order", uz: "Siz qachon yetib keldingiz?", words: ["When", "did", "you", "arrive?"], extra: ["arrived", "do"] } },
      ],
    },
    {
      title: "was / were: inkor va savol",
      blocks: [
        { t: "p", md: "**be** fe'lida **did kerak emas**: inkor — **wasn't / weren't**, savol uchun **was / were** ni ega oldiga o'tkazamiz." },
        {
          t: "table", head: ["", "Misol"], speak: [1],
          rows: [
            ["Inkor", "I wasn't at home. They weren't happy."],
            ["Savol", "Was she at the party? Were you tired?"],
            ["Javob", "Yes, she was. / No, she wasn't. / Yes, we were. / No, we weren't."],
            ["Wh- savol", "Where were you last night? Why was he late?"],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["Was the film good?", "I wasn't there.", "Where were you?"] },
          bad: { title: "Xato", items: ["Did the film was good?", "I didn't was there.", "Where did you were?"] },
        },
        { t: "tip", tone: "good", md: "Qoida oddiy: **was / were** — o'zi yordamchi fe'l, **did** unga kerak emas. Faqat **boshqa** fe'llar (*go, see, like*…) bilan **did / didn't** kerak." },
        { t: "check", ex: { k: "choice", q: "**___ Dilnoza at the lesson yesterday?** — **No, she wasn't.**", opts: ["Did", "Was", "Were", "Does"], a: 1, why: "*Dilnoza* = she → **Was**. *be* bilan did ishlatilmaydi." } },
      ],
    },
    {
      title: "Vaqt iboralari: ago, last, in, yesterday",
      blocks: [
        { t: "p", md: "Past Simple bilan **aniq o'tgan vaqt** ishlatiladi. Quyidagi iboralar o'tmishni ko'rsatadi:" },
        {
          t: "table", head: ["Ibora", "Qanday ishlatiladi", "Misol"], speak: [2],
          rows: [
            ["yesterday", "yesterday morning / afternoon / evening", "I called him yesterday morning."],
            ["last", "last night / week / month / year / summer", "We moved here last year."],
            ["… ago", "davr + **ago** (hozirdan hisoblab)", "She left two hours ago."],
            ["in", "in + yil / oy / fasl", "I was born in 2001. We met in May."],
            ["on", "on + kun / sana", "He arrived on Monday."],
            ["when", "savol so'zi", "When did you start?"],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I saw him two days ago.", "I saw him last week.", "I saw him on Friday.", "He was born in 1995."], },
          bad: { title: "Xato", items: ["I saw him before two days.", "I saw him in last week.", "I saw him in Friday.", "He was born on 1995."] },
        },
        { t: "tip", tone: "warn", md: "• **ago** — davrdan **keyin** turadi: *two years **ago*** (✅), *ago two years* (❌).\n• **last** va **yesterday** bilan **in / on / at** kerak emas: *last week* (✅), *in last week* (❌).\n• **ago** bilan Past Simple, Present Perfect emas: *I came **two days ago*** (✅)." },
        { t: "check", ex: { k: "fill", q: "My grandfather came to Tashkent forty years ___.", a: ["ago"], why: "Davr + **ago**: *forty years ago*." } },
        { t: "check", ex: { k: "choice", q: "She was born ___ 1998.", opts: ["on", "at", "in", "ago"], a: 2, why: "Yil bilan **in**: *in 1998*." } },
      ],
    },
    {
      title: "O'qing: Birinchi kun",
      blocks: [
        {
          t: "text", title: "My first day at university",
          en: "Three years ago I started university in Tashkent. I remember my first day very well. I didn't sleep much the night before, so I woke up late and missed my bus. I took a taxi, but the driver didn't know the street! I arrived ten minutes late. Nobody laughed. A girl called Dilnoza smiled and gave me a seat next to her. We talked for an hour after the lesson, and now she is my best friend. Did I enjoy that day? Yes, I did, but I was very nervous.",
          uz: "Uch yil oldin men Toshkentda universitetga o'qishga kirdim. Birinchi kunimni juda yaxshi eslayman. Undan oldingi kechasi deyarli uxlamadim, shuning uchun kech turib, avtobusga ulgurmadim. Taksiga o'tirdim, lekin haydovchi ko'chani bilmasdi! Darsga o'n daqiqa kechikib keldim. Hech kim kulmadi. Dilnoza ismli qiz jilmayib, yoniga joy berdi. Darsdan keyin bir soat gaplashdik, endi u mening eng yaqin do'stim. O'sha kun menga yoqdimi? Ha, yoqdi, lekin juda hayajonlangan edim.",
        },
        { t: "tip", tone: "info", md: "Matnda *didn't sleep, didn't know* (inkor), *Did I enjoy…? Yes, I did* (savol va javob) va *Three years ago* (vaqt iborasi) bor. Topib chiqing." },
        { t: "check", ex: { k: "tf", q: "The driver knew the street.", a: false, why: "*The driver **didn't know** the street.*" } },
        { t: "check", ex: { k: "choice", q: "How did the narrator get to university?", opts: ["By bus.", "By taxi.", "On foot.", "By metro."], a: 1, why: "Avtobusga ulgurmadi, shuning uchun **taksi** oldi." } },
      ],
    },
    {
      title: "Dialog: Kecha kechqurun nima qilding?",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Laylo", en: "Where were you last night? I called you three times.", uz: "Kecha kechqurun qayerda eding? Senga uch marta qo'ng'iroq qildim." },
            { who: "Aziz", en: "Sorry! I didn't hear the phone. I was at my uncle's house.", uz: "Kechir! Telefonni eshitmadim. Amakimnikida edim." },
            { who: "Laylo", en: "Did you stay long?", uz: "Uzoq qoldingmi?" },
            { who: "Aziz", en: "Yes, we had dinner and then we played chess until midnight.", uz: "Ha, kechki ovqat yedik, keyin yarim tungacha shaxmat o'ynadik." },
            { who: "Laylo", en: "Who won?", uz: "Kim yutdi?" },
            { who: "Aziz", en: "My uncle did, as usual! When did you call me?", uz: "Odatdagidek amakim yutdi! Menga qachon qo'ng'iroq qilding?" },
            { who: "Laylo", en: "About eight. Never mind, it wasn't important.", uz: "Soat sakkizlarda. Hechqisi yo'q, muhim emas edi." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "Why didn't Aziz answer the phone?", opts: ["He was asleep.", "He didn't hear it.", "He lost his phone.", "He was angry."], a: 1, why: "*I didn't hear the phone.*" } },
      ],
    },
  ],
  words: [
    { en: "ago", uz: "oldin (hozirdan hisoblab)", ipa: "əˈɡəʊ", pos: "adverb", ex: "I met her three years ago.", exUz: "Men u bilan uch yil oldin tanishganman." },
    { en: "recently", uz: "yaqinda, ko'p o'tmay", ipa: "ˈriːsntli", pos: "adverb", ex: "I moved to a new flat recently.", exUz: "Yaqinda yangi kvartiraga ko'chdim." },
    { en: "last night", uz: "kecha kechqurun", ipa: "lɑːst naɪt", pos: "phrase", ex: "I slept badly last night.", exUz: "Kecha yomon uxladim." },
    { en: "the day before yesterday", uz: "avvalgi kuni (kechadan oldingi kun)", ipa: "ðə deɪ bɪˈfɔː ˈjestədeɪ", pos: "phrase", ex: "We met the day before yesterday.", exUz: "Biz avvalgi kuni uchrashdik." },
    { en: "a long time ago", uz: "ancha oldin", ipa: "ə lɒŋ taɪm əˈɡəʊ", pos: "phrase", ex: "That happened a long time ago.", exUz: "Bu ancha oldin bo'lgan." },
    { en: "during", uz: "davomida", ipa: "ˈdjʊərɪŋ", pos: "preposition", ex: "I fell asleep during the film.", exUz: "Film paytida uxlab qoldim." },
    { en: "all day", uz: "kun bo'yi", ipa: "ɔːl deɪ", pos: "phrase", ex: "It rained all day yesterday.", exUz: "Kecha kun bo'yi yomg'ir yog'di." },
    { en: "remember", uz: "eslamoq, yodda tutmoq", ipa: "rɪˈmembə", pos: "verb", ex: "I don't remember his name.", exUz: "Uning ismini eslay olmayapman." },
    { en: "enjoy", uz: "yoqtirmoq, zavqlanmoq", ipa: "ɪnˈdʒɔɪ", pos: "verb", ex: "Did you enjoy the concert?", exUz: "Konsert yoqdimi?" },
    { en: "miss", uz: "ulgurmaslik, o'tkazib yubormoq", ipa: "mɪs", pos: "verb", ex: "He missed the last train.", exUz: "U oxirgi poyezdga ulgurmadi." },
  ],
  practice: [
    { k: "match", pairs: [["two days ago", "ikki kun oldin"], ["last night", "kecha kechqurun"], ["all day", "kun bo'yi"], ["during", "davomida"], ["a long time ago", "ancha oldin"]] },
    { k: "match", pairs: [["Did you go?", "Yes, I did."], ["Was she there?", "Yes, she was."], ["Were they late?", "No, they weren't."], ["Did he call?", "No, he didn't."]] },
    { k: "listen", say: "I didn't see him yesterday.", opts: ["I didn't see him yesterday.", "I don't see him yesterday.", "I didn't saw him yesterday."], a: 0 },
    { k: "listen", say: "Where did you go last summer?", opts: ["Where do you go every summer?", "Where did you go last summer?", "Where are you going this summer?"], a: 1 },
    { k: "fill", q: "We ___ watch TV last night. We went out. (inkor)", a: ["didn't", "did not"], why: "Inkor: **didn't + watch**." },
    { k: "fill", q: "What time ___ you get up this morning?", a: ["did"], why: "Wh- savol: **did** + ega + V1." },
    { k: "fill", q: "___ they happy with the hotel?", a: ["Were"], uz: "Ular mehmonxonadan mamnun edilarmi?", why: "*they* + *be* → **Were**." },
    { k: "fill", q: "I started learning English four years ___.", a: ["ago"], why: "Davr + **ago**." },
    { k: "choice", q: "Qaysi gap **to'g'ri**?", opts: ["She didn't studied for the test.", "She didn't study for the test.", "She not study for the test.", "She doesn't studied for the test."], a: 1, why: "**didn't + V1**." },
    { k: "choice", q: "We moved to this city ___.", opts: ["in last year", "ago one year", "last year", "on last year"], a: 2, why: "*last year* oldida in / on kerak emas." },
    { k: "tf", q: "**Did he went to the bank?** — to'g'ri savol.", a: false, why: "**Did + V1**: *Did he **go** to the bank?*" },
    { k: "tf", q: "**Who called you?** — to'g'ri savol (Kim sizga qo'ng'iroq qildi?).", a: true, why: "**Who** egasi bo'lsa, *did* kerak emas." },
    { k: "order", uz: "Siz kecha qayerga bordingiz?", words: ["Where", "did", "you", "go", "yesterday?"], extra: ["went", "do"] },
    { k: "translate", uz: "Men kecha uyda emas edim.", a: ["I wasn't at home yesterday.", "I was not at home yesterday.", "Yesterday I wasn't at home.", "Yesterday I was not at home."] },
    { k: "speak", say: "Did you enjoy your weekend? What did you do?", uz: "Hafta oxiring yoqdimi? Nima qilding?" },
  ],
  quiz: [
    { k: "choice", q: "She ___ the answer, so she didn't say anything.", opts: ["didn't know", "didn't knew", "not knew", "doesn't knew"], a: 0, why: "**didn't + V1**." },
    { k: "choice", q: "___ you see Aziz at the party? — No, I didn't.", opts: ["Do", "Did", "Were", "Have"], a: 1, why: "Javob **didn't** → savol **Did**." },
    { k: "choice", q: "He left the office ___.", opts: ["in last night", "two hours ago", "ago two hours", "at two hours ago"], a: 1, why: "Davr + **ago**." },
    { k: "choice", q: "Qaysi gap **xato**?", opts: ["Where did you buy it?", "Was the weather nice?", "Why did she was angry?", "Who lost the keys?"], a: 2, why: "*be* bilan did yo'q: *Why **was** she angry?*" },
    { k: "fill", q: "I ___ go to school on Saturday. It was a holiday. (inkor)", a: ["didn't", "did not"], why: "**didn't + go**." },
    { k: "fill", q: "He was born ___ 2005.", a: ["in"], why: "Yil bilan **in**." },
    { k: "listen", say: "Did they arrive on time?", opts: ["Did they arrive on time?", "Do they arrive on time?", "Did they arrived on time?"], a: 0 },
    { k: "tf", q: "**They weren't at home** = Ular uyda emas edi.", a: true },
    { k: "order", uz: "U menga qo'ng'iroq qilmadi.", words: ["She", "didn't", "call", "me."], extra: ["called", "not"] },
    { k: "translate", uz: "Siz kecha dars qildingizmi?", a: ["Did you study yesterday?", "Did you do your homework yesterday?", "Did you have a lesson yesterday?", "Did you have a class yesterday?"], why: "*Did + you + V1*." },
  ],
  summary: [
    "**Inkor:** ega + **didn't** + V1 (*I didn't go*). Asosiy fe'l o'tgan shaklga o'tmaydi.",
    "**Savol:** **Did** + ega + V1? (*Did you see it?*). Qisqa javob: *Yes, I did. / No, I didn't.* Wh-: *Where did you go?*",
    "**be** bilan did kerak emas: *Was she…? I wasn't… Were you…? We weren't…*",
    "Vaqt: **yesterday, last week, two days ago, in 2019, on Monday**. **ago** davrdan keyin turadi; **last** oldida in / on yo'q.",
    "**Who / What** egasi bo'lsa, did ishlatilmaydi: *Who called you?*",
  ],
  homework: "Do'stingiz yoki oila a'zongizga o'tgan hafta oxiri haqida **8 ta savol** yozing (*What did you do? Where did you go? Who did you meet? Did you enjoy it?*). Keyin o'zingiz ularga javob bering: 4 ta darak va 4 ta inkor gap yozing (*I didn't go to… because…*). **ago**, **last** va **in** iboralaridan kamida bittadan ishlating.",
};

export default lesson;
