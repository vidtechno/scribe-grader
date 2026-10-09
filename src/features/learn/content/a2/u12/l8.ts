import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u12-l8",
  title: "Unit review: the past",
  titleUz: "Bosqich takrori: o'tgan zamon",
  goal: "12-bosqichdagi hamma narsani takrorlaysiz: **Past Simple** (to'g'ri / noto'g'ri fe'llar, savol va inkor), **Past Continuous**, **when / while**, **used to**, **because / so / but / although** va hikoya aytish. Oxirida o'tgan hafta oxiri yoki sayohat haqida bog'langan hikoya yoza va aytib bera olasiz.",
  slides: [
    {
      title: "Past Simple: shakllar",
      blocks: [
        { t: "p", md: "**Past Simple** — tugagan o'tmish. To'g'ri fe'llar **-ed** oladi (*worked, studied, stopped*), noto'g'rilarning o'z shakli bor (*went, saw, ate, bought, met, left*). **be** → **was / were**." },
        {
          t: "table", head: ["Turi", "Qoida", "Misol"], speak: [2],
          rows: [
            ["To'g'ri fe'l", "+ed / +d / -ied / undosh ikkilanadi", "visited, lived, studied, stopped"],
            ["Noto'g'ri fe'l", "yodlash kerak", "go – went, see – saw, buy – bought"],
            ["be", "I / he / she / it **was**; you / we / they **were**", "She was tired. We were late."],
            ["-ed o'qilishi", "/t/, /d/, /ɪd/", "worked, played, wanted"],
          ],
        },
        { t: "check", ex: { k: "choice", q: "\"Biz kecha palov yedik.\"", opts: ["We eated plov yesterday.", "We ate plov yesterday.", "We eat plov yesterday.", "We were eat plov yesterday."], a: 1, why: "**eat – ate**." } },
        { t: "check", ex: { k: "fill", q: "She ___ (study) all night for the exam.", a: ["studied"], why: "Undosh + y → **-ied**." } },
      ],
    },
    {
      title: "Savol, inkor va vaqt iboralari",
      blocks: [
        {
          t: "table", head: ["Shakl", "Qoida", "Misol"], speak: [2],
          rows: [
            ["Inkor", "ega + **didn't** + V1", "I didn't go to school."],
            ["Savol", "**Did** + ega + V1?", "Did you see the film?"],
            ["Wh- savol", "so'roq so'z + did + ega + V1", "Where did they go?"],
            ["be: inkor / savol", "wasn't, weren't / Was…? Were…?", "Was it good? We weren't there."],
            ["Egasi so'ralsa", "did kerak emas", "Who called you?"],
          ],
        },
        {
          t: "table", head: ["Vaqt ibora", "Qoida", "Misol"], speak: [2],
          rows: [
            ["yesterday", "o'tgan kun", "I called her yesterday."],
            ["last …", "oldida in / on yo'q", "We moved here last year."],
            ["… ago", "davrdan keyin", "He left two hours ago."],
            ["in / on", "in 2019, in May; on Monday", "She was born in 1999."],
          ],
        },
        { t: "tip", tone: "warn", md: "Eng ko'p xato: **ikki marta o'tgan zamon** — *didn't went* ❌. **did / didn't** dan keyin fe'l doim **V1**: *didn't **go***." },
        { t: "check", ex: { k: "choice", q: "Qaysi gap **to'g'ri**?", opts: ["Did you went to the party?", "Did you go to the party?", "You did went to the party?", "Did you going to the party?"], a: 1, why: "**Did + ega + V1**." } },
        { t: "check", ex: { k: "fill", q: "My parents came to Tashkent thirty years ___.", a: ["ago"], why: "Davr + **ago**." } },
      ],
    },
    {
      title: "Past Continuous; when va while",
      blocks: [
        {
          t: "table", head: ["Mavzu", "Qoida", "Misol"], speak: [2],
          rows: [
            ["Past Continuous", "**was / were + V-ing**: o'sha paytdagi jarayon", "At nine I was cooking."],
            ["Inkor / savol", "wasn't / weren't; Was / Were + ega + V-ing?", "Were you sleeping?"],
            ["Uzun + qisqa", "Past Continuous + Past Simple", "I was walking home when I saw an accident."],
            ["while", "keyin uzun ish", "While I was walking, I saw Laylo."],
            ["Ikki parallel ish", "ikkalasi Past Continuous", "While I was cooking, he was watching TV."],
          ],
        },
        { t: "tip", tone: "info", md: "Holat fe'llari (*know, like, want, need*) odatda Continuous da ishlatilmaydi: *I **knew** the answer* (❌ *was knowing*)." },
        { t: "check", ex: { k: "fill", q: "We ___ dinner when the lights went out. (have)", a: ["were having"], why: "*we* + **were having**." } },
        { t: "check", ex: { k: "choice", q: "She ___ her phone while she was running for the bus.", opts: ["was losing", "lost", "were losing", "loses"], a: 1, why: "Qisqa voqea → **lost**." } },
      ],
    },
    {
      title: "Used to",
      blocks: [
        {
          t: "table", head: ["Shakl", "Misol"], speak: [1],
          rows: [
            ["+  used to + V1", "I used to play chess every day."],
            ["−  didn't use to + V1", "She didn't use to like vegetables."],
            ["?  Did + ega + use to + V1?", "Did you use to live here?"],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I used to walk to school.", "I didn't use to like tea.", "I went to Paris twice."] },
          bad: { title: "Xato", items: ["I use to walk to school.", "I didn't used to like tea.", "I used to go to Paris twice."] },
        },
        { t: "tip", tone: "good", md: "**used to** — endi bunday emas bo'lgan odat va holatlar. Sanalgan marta, aniq muddat, yakka voqea uchun — **Past Simple**." },
        { t: "check", ex: { k: "choice", q: "\"Avval bu yerda bozor bor edi.\"", opts: ["There use to be a market here.", "There used to be a market here.", "There used to being a market here.", "There was used to be a market here."], a: 1, why: "**used to be**." } },
      ],
    },
    {
      title: "Because, so, but, although",
      blocks: [
        {
          t: "table", head: ["So'z", "Vazifa", "Misol"], speak: [2],
          rows: [
            ["because", "sabab", "I stayed home because I was ill."],
            ["so", "natija", "I was ill, so I stayed home."],
            ["but", "qarama-qarshilik (gap orasida)", "I was ill, but I went to work."],
            ["although", "garchi; but kerak emas", "Although I was ill, I went to work."],
          ],
        },
        { t: "tip", tone: "warn", md: "Bitta gapda **because ... so** yoki **although ... but** ishlatilmaydi. Gap boshidagi *Because / Although* bo'lagidan keyin **vergul**." },
        { t: "check", ex: { k: "choice", q: "___ it was raining, we went to the park.", opts: ["Because", "Although", "So", "Then"], a: 1, why: "Yomg'ir yog'ayotgan bo'lsa ham → **Although**." } },
        { t: "check", ex: { k: "fill", q: "I was very tired, ___ I went to bed early.", a: ["so"], why: "Natija → **so**." } },
      ],
    },
    {
      title: "Hikoya aytish",
      blocks: [
        {
          t: "table", head: ["Qism", "So'zlar", "Zamon"], speak: [1],
          rows: [
            ["Boshlanish", "It was … and … was / were -ing", "Past Continuous, was / were"],
            ["Voqealar", "First, Then, After that, Suddenly", "Past Simple"],
            ["Bog'lash", "after, before, as soon as, while", "Past Simple / Continuous"],
            ["Yakun", "Finally, In the end", "Past Simple"],
          ],
        },
        { t: "tip", tone: "info", md: "Suhbatda: *Guess what!* — boshlash, *What happened next?* — davom ettirishni so'rash, *No way!* — hayratlanish." },
        { t: "check", ex: { k: "fill", q: "We missed the bus. ___ we walked home. (keyin)", a: ["Then", "So", "After that"], why: "Ketma-ketlik: **Then / After that**; natija sifatida **So** ham mumkin." } },
        { t: "check", ex: { k: "choice", q: "Qaysi gap hikoyaning **yakuni** uchun mos?", opts: ["In the end, we found the hotel.", "It was a dark night.", "First, we left the house.", "Suddenly I heard a noise."], a: 0, why: "Yakun → **In the end**." } },
      ],
    },
    {
      title: "O'qing: Ayoz bilan sarguzasht",
      blocks: [
        {
          t: "text", title: "A trip to the mountains",
          en: "Two years ago, Aziz and his brother Ayoz decided to climb a mountain near Tashkent. At first the weather was perfect, so they walked happily for three hours. Suddenly it started to rain while they were crossing a river. Although they had raincoats, they got completely wet. Ayoz fell and hurt his knee, but he didn't want to go back because the view was beautiful. After that, they rested in a small cave and ate some bread. Aziz used to be afraid of heights, but that day he felt brave. In the end, they reached the top, and the view was amazing.",
          uz: "Ikki yil oldin Aziz va uning ukasi Ayoz Toshkent yaqinidagi tog'ga chiqishga qaror qilishdi. Dastlab ob-havo a'lo edi, shuning uchun ular uch soat xursand yurishdi. Ular daryodan o'tayotganlarida birdan yomg'ir yog'a boshladi. Yomg'irpo'shlari bo'lsa ham, butunlay ho'l bo'lishdi. Ayoz yiqilib tizzasini shikastladi, lekin orqaga qaytishni xohlamadi, chunki manzara chiroyli edi. Shundan so'ng ular kichik g'orda dam olib, non yeyishdi. Aziz avval balandlikdan qo'rqar edi, lekin o'sha kuni o'zini jasur his qildi. Oxirida cho'qqiga yetishdi va manzara ajoyib edi.",
        },
        { t: "check", ex: { k: "choice", q: "Why did Ayoz not want to go back?", opts: ["He wasn't tired.", "The view was beautiful.", "It stopped raining.", "He wanted more bread."], a: 1, why: "*He didn't want to go back because the view was beautiful.*" } },
        { t: "check", ex: { k: "tf", q: "Aziz was never afraid of heights.", a: false, why: "*Aziz **used to be** afraid of heights* — avval qo'rqar edi." } },
        { t: "check", ex: { k: "choice", q: "What was happening when it started to rain?", opts: ["They were eating.", "They were crossing a river.", "They were sleeping.", "They were climbing the top."], a: 1, why: "*Suddenly it started to rain **while they were crossing** a river.*" } },
      ],
    },
    {
      title: "Dialog: Sayohat haqida",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Laylo", en: "Hi, Kamol! Did you enjoy your holiday in Turkey?", uz: "Salom, Kamol! Turkiyadagi ta'tilingiz yoqdimi?" },
            { who: "Kamol", en: "Yes, I did! Although the flight was delayed, we had a great time.", uz: "Ha! Reys kechiksa ham, vaqtimiz a'lo o'tdi." },
            { who: "Laylo", en: "What did you do there?", uz: "U yerda nima qildingiz?" },
            { who: "Kamol", en: "First, we visited Istanbul. Then we took a bus to the coast. While we were swimming, my brother lost his sunglasses!", uz: "Avval Istanbulga bordik. Keyin avtobusda sohilga bordik. Biz suzayotganda akam ko'zoynagini yo'qotib qo'ydi!" },
            { who: "Laylo", en: "No way! Did you find them?", uz: "Yo'q-e! Topdingizmi?" },
            { who: "Kamol", en: "Luckily, a boy found them. In the end, he got an ice cream as a reward.", uz: "Omadimizga bir bola topib berdi. Oxirida mukofot sifatida muzqaymoq oldi." },
            { who: "Laylo", en: "Sounds lovely. I didn't use to like the sea, but now I want to go!", uz: "Ajoyib ekan. Avval dengizni yoqtirmas edim, hozir esa borgim kelyapti!" },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Kamol's brother lost his sunglasses while they were swimming.", a: true, why: "*While we were swimming, my brother lost his sunglasses.*" } },
      ],
    },
  ],
  words: [
    { en: "journey", uz: "yo'l, safar", ipa: "ˈdʒɜːni", pos: "noun", ex: "The journey to Bukhara took six hours.", exUz: "Buxoroga yo'l olti soat davom etdi." },
    { en: "adventure", uz: "sarguzasht", ipa: "ədˈventʃə", pos: "noun", ex: "Our trip was a real adventure.", exUz: "Safarimiz haqiqiy sarguzasht bo'ldi." },
    { en: "souvenir", uz: "esdalik (sovg'a)", ipa: "ˌsuːvəˈnɪə", pos: "noun", ex: "I bought a souvenir for my mother.", exUz: "Onam uchun esdalik sovg'a oldim." },
    { en: "memorable", uz: "esda qoladigan", ipa: "ˈmemərəbl", pos: "adjective", ex: "It was a memorable evening.", exUz: "Bu esda qolarli kecha bo'ldi." },
    { en: "experience", uz: "tajriba; boshdan kechirmoq", ipa: "ɪkˈspɪəriəns", pos: "noun / verb", ex: "It was a great experience.", exUz: "Bu ajoyib tajriba bo'ldi." },
    { en: "argue", uz: "tortishmoq, janjallashmoq", ipa: "ˈɑːɡjuː", pos: "verb", ex: "They argued about money.", exUz: "Ular pul haqida tortishdi." },
    { en: "promise", uz: "va'da bermoq; va'da", ipa: "ˈprɒmɪs", pos: "verb / noun", ex: "He promised to call me.", exUz: "U menga qo'ng'iroq qilishga va'da berdi." },
    { en: "whole", uz: "butun, tamom", ipa: "həʊl", pos: "adjective", ex: "I waited the whole day.", exUz: "Butun kun kutdim." },
    { en: "brave", uz: "jasur", ipa: "breɪv", pos: "adjective", ex: "The little boy was very brave.", exUz: "Kichkina bola juda jasur edi." },
    { en: "strange", uz: "g'alati", ipa: "streɪndʒ", pos: "adjective", ex: "I heard a strange noise.", exUz: "G'alati shovqin eshitdim." },
  ],
  practice: [
    { k: "match", pairs: [["go", "went"], ["buy", "bought"], ["meet", "met"], ["fall", "fell"], ["spend", "spent"], ["wake", "woke"]] },
    { k: "match", pairs: [["Past Simple", "I visited Bukhara yesterday."], ["Past Continuous", "I was visiting Bukhara at nine."], ["used to", "I used to visit Bukhara every summer."], ["although", "Although it rained, we went."]] },
    { k: "listen", say: "While I was cooking, the phone rang.", opts: ["While I was cooking, the phone rang.", "While I cooked, the phone was ringing.", "When I was cooking, the phone was ringing."], a: 0 },
    { k: "listen", say: "Did you use to live in Samarkand?", opts: ["Did you use to live in Samarkand?", "Do you use to live in Samarkand?", "Did you used to live in Samarkand?"], a: 0 },
    { k: "fill", q: "Last weekend we ___ to Khiva by train. (go)", a: ["went"], why: "**go – went**." },
    { k: "fill", q: "What ___ you do yesterday evening?", a: ["did"], why: "Wh- savol: **did**." },
    { k: "fill", q: "I ___ watching TV at nine. I was reading. (inkor)", a: ["wasn't", "was not"], why: "Inkor: **wasn't + watching**." },
    { k: "fill", q: "My grandfather ___ to smoke, but he stopped. (used to)", a: ["used"], why: "**used to + V1**." },
    { k: "choice", q: "He ___ his arm while he was playing football.", opts: ["was breaking", "broke", "were breaking", "breaks"], a: 1, why: "Qisqa voqea → **broke**." },
    { k: "choice", q: "We stayed at home ___ it was snowing.", opts: ["although", "because", "but", "so"], a: 1, why: "Sabab → **because**." },
    { k: "choice", q: "Qaysi gap **xato**?", opts: ["Did she call you?", "He didn't went to school.", "We were watching a film.", "I used to be shy."], a: 1, why: "**didn't + V1**: *He didn't **go** to school.*" },
    { k: "tf", q: "**I used to go to Paris three times.** — to'g'ri gap.", a: false, why: "Sanalgan marta → Past Simple: *I went to Paris three times.*" },
    { k: "tf", q: "**Although he was tired, but he worked.** — to'g'ri gap.", a: false, why: "*Although* va *but* birga ishlatilmaydi." },
    { k: "order", uz: "Avval biz yurdik, keyin choyxonada dam oldik.", words: ["First", "we", "walked,", "then", "we", "rested", "in", "a", "chaikhana."], extra: ["rest", "after"], alt: [["First,", "we", "walked,", "then", "we", "rested", "in", "a", "chaikhana."]] },
    { k: "translate", uz: "Men uyga ketayotganimda do'stimni uchratdim.", a: ["I met my friend while I was walking home.", "While I was walking home, I met my friend.", "I met my friend when I was walking home.", "When I was walking home, I met my friend.", "I met my friend while I was going home.", "While I was going home, I met my friend."] },
    { k: "speak", say: "First we visited the old town, then we ate plov, and in the end we took a lot of photos.", uz: "Avval eski shaharni ko'rdik, keyin palov yedik, oxirida ko'p surat oldik." },
  ],
  quiz: [
    { k: "choice", q: "They ___ in London in 2018.", opts: ["was", "were", "are", "be"], a: 1, why: "*they* → **were**." },
    { k: "choice", q: "___ she call you last night? — No, she didn't.", opts: ["Does", "Did", "Was", "Is"], a: 1, why: "**Did + ega + V1**." },
    { k: "choice", q: "At ten o'clock last night I ___ a book.", opts: ["read", "was reading", "were reading", "am reading"], a: 1, why: "Aniq paytdagi jarayon → **was reading**." },
    { k: "choice", q: "I ___ like spicy food, but now I love it.", opts: ["didn't used to", "didn't use to", "not used to", "don't use to"], a: 1, why: "**didn't use to**." },
    { k: "choice", q: "It was late, ___ we took a taxi.", opts: ["because", "although", "so", "but"], a: 2, why: "Natija → **so**." },
    { k: "fill", q: "When I got home, my sister ___ . (sleep) — u allaqachon uxlayotgan edi", a: ["was sleeping"], why: "Davom etayotgan ish → **was sleeping**." },
    { k: "fill", q: "___ we arrived, we called our parents. (-ishi bilan)", a: ["As soon as"], why: "**As soon as** + Past Simple." },
    { k: "fill", q: "He didn't go to the party ___ he was ill.", a: ["because"], why: "Sabab → **because**." },
    { k: "listen", say: "We were having lunch when you called.", opts: ["We were having lunch when you called.", "We had lunch when you were calling.", "We are having lunch when you call."], a: 0 },
    { k: "tf", q: "**Who did call you?** — savol (Kim sizga qo'ng'iroq qildi?) to'g'ri tuzilgan.", a: false, why: "Egasi so'ralganda did yo'q: *Who **called** you?*" },
    { k: "order", uz: "Garchi yomg'ir yog'ayotgan bo'lsa ham, biz sayr qildik.", words: ["Although", "it", "was", "raining,", "we", "went", "for", "a", "walk."], extra: ["but", "because"] },
    { k: "translate", uz: "U kecha menga qo'ng'iroq qilmadi.", a: ["She didn't call me yesterday.", "He didn't call me yesterday.", "She did not call me yesterday.", "He did not call me yesterday.", "Yesterday she didn't call me.", "Yesterday he didn't call me."] },
  ],
  summary: [
    "**Past Simple**: *I went / worked*; inkor **didn't + V1**; savol **Did + ega + V1?**; **be** → was / were. Vaqt: *yesterday, last week, two days ago, in 2019*.",
    "**Past Continuous** (**was / were + V-ing**) — jarayon; **Past Simple** — qisqa voqea: *I was walking when I saw…*; **while** + uzun ish.",
    "**used to + V1** — o'tgan odat va holat; sanalgan marta va aniq muddat uchun Past Simple.",
    "**because** (sabab), **so** (natija), **but / although** (qarama-qarshilik) — bir gapda *because ... so* va *although ... but* yo'q.",
    "Hikoya: fon (Continuous) → voqealar (**First, Then, After that, Finally**) → yakun. Zamon boshdan oxirigacha o'tgan.",
  ],
  homework: "\"Mening eng yaxshi sayohatim\" mavzusida 10–12 gaplik hikoya yozing. Unda bo'lsin: kamida 3 ta noto'g'ri fe'l, 1 ta inkor gap (*didn't*), 1 ta *was / were + -ing*, 1 ta *used to*, *because* va *although* bilan 2 ta gap hamda *First, Then, After that, Finally*. Keyin hikoyani yozmasdan, ovoz chiqarib 1 daqiqada aytib bering va ovozingizni yozib oling.",
};

export default lesson;
