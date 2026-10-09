import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u12-l4",
  title: "Past Simple or Past Continuous?",
  titleUz: "Past Simple yoki Past Continuous? when va while",
  goal: "Ikki zamonni **bir gapda** ishlatasiz: uzoq davom etgan ish (**Past Continuous**) va uni to'xtatgan qisqa voqea (**Past Simple**): *I was walking home when I saw an accident.* **when** va **while** ning farqini bilasiz va ikki parallel ishni ham ayta olasiz.",
  slides: [
    {
      title: "Uzun ish va qisqa voqea",
      blocks: [
        { t: "p", md: "Ikki zamonning vazifasi turlicha. **Past Continuous** — fon, davom etayotgan jarayon (\"uzun chiziq\"). **Past Simple** — qisqa, to'satdan bo'lgan voqea (\"nuqta\"), ko'pincha jarayonni **to'xtatadi** yoki **uzadi**." },
        {
          t: "table", head: ["Uzun ish (Past Continuous)", "Qisqa voqea (Past Simple)"], speak: [0, 1],
          rows: [
            ["I was walking home", "when I saw an accident."],
            ["She was cooking dinner", "when the phone rang."],
            ["We were having lunch", "when the lights went out."],
            ["It was raining", "when I left the office."],
          ],
        },
        { t: "tip", tone: "good", md: "Rasm chizing: uzun chiziq (——————) ustida nuqta (•). Chiziq = **was / were + -ing**, nuqta = **Past Simple**. Birinchi chiziq boshlandi, o'rtasida nuqta bo'ldi." },
        { t: "check", ex: { k: "fill", q: "I ___ TV when you called. (watch)", a: ["was watching"], why: "Qo'ng'iroq qilganingizda ko'rish jarayonda edi → **was watching**." } },
      ],
    },
    {
      title: "when va while",
      blocks: [
        { t: "p", md: "Ikki bo'lak gapni **when** yoki **while** bog'laydi (ikkalasi ham \"-ganda, payti\" degan ma'noda):" },
        {
          t: "table", head: ["So'z", "Keyin odatda", "Misol"], speak: [2],
          rows: [
            ["**while**", "Past Continuous (uzun ish)", "While I was crossing the road, I dropped my phone."],
            ["**when**", "Past Simple (qisqa voqea)", "I was crossing the road when my phone fell."],
            ["**when**", "Past Continuous ham bo'la oladi", "When I was crossing the road, I saw a friend."],
          ],
        },
        { t: "tip", tone: "info", md: "Oson qoida: **while** — keyin uzun ish: *While I **was walking**, I saw…* ; **when** — keyin qisqa voqea: *… when I **saw** an accident.* Gap boshida kelsa — **vergul** qo'yiladi: *While I was walking, I saw Laylo.* O'rtada kelsa — vergul kerak emas." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["While I was cooking, the phone rang.", "I was cooking when the phone rang.", "When the phone rang, I was cooking."] },
          bad: { title: "Xato", items: ["While I was cook, the phone rang.", "I was cooking when the phone ringed.", "While I cooking, the phone rang."] },
        },
        { t: "check", ex: { k: "choice", q: "___ we were having dinner, the lights went out.", opts: ["While", "Then", "So", "Because of"], a: 0, why: "Uzun ish (*were having*) oldidan → **While**." } },
      ],
    },
    {
      title: "Ikki ish bir vaqtda",
      blocks: [
        { t: "p", md: "Agar **ikkala ish ham bir vaqtda davom etgan** bo'lsa, ikkalasi ham **Past Continuous** da bo'ladi, **while** bilan bog'lanadi:" },
        {
          t: "examples", items: [
            { en: "While I was cooking, my brother was watching TV.", uz: "Men ovqat pishirayotganimda, akam televizor ko'rayotgan edi." },
            { en: "Laylo was studying while her sister was sleeping.", uz: "Laylo o'qiyotgan edi, singlisi esa uxlayotgan edi." },
            { en: "While we were driving to Bukhara, we were listening to music.", uz: "Buxoroga mashinada ketayotib, musiqa eshitib bordik." },
          ],
        },
        { t: "tip", tone: "info", md: "Ikki **qisqa** voqea ketma-ket bo'lsa, ikkalasi ham **Past Simple**: *When the bell **rang**, the students **left**.* (qo'ng'iroq bo'ldi → keyin chiqishdi). Bu — ketma-ketlik, jarayon emas." },
        {
          t: "examples", items: [
            { en: "When I got home, I made tea.", uz: "Uyga kelgach, choy damladim.", note: "Ikkalasi Past Simple — voqealar ketma-ket: avval keldim, keyin damladim." },
            { en: "When I got home, he was making tea.", uz: "Uyga kelganimda, u choy damlayotgan edi.", note: "Ikkinchi ish allaqachon davom etayotgan edi." },
          ],
        },
        { t: "check", ex: { k: "fill", q: "While Dilnoza ___ , her brother was playing football. (study)", a: ["was studying"], why: "Ikkala ish bir vaqtda → ikkalasi ham Past Continuous." } },
      ],
    },
    {
      title: "Zamonni tanlang",
      blocks: [
        { t: "p", md: "Gapni tuzishdan oldin o'zingizdan so'rang: **qaysi ish jarayonda edi?** va **nima to'satdan bo'ldi?**" },
        {
          t: "table", head: ["Vaziyat", "Gap"], speak: [1],
          rows: [
            ["Mashinada ketayotib → yo'lda to'xtadim", "I was driving to work when my car broke down."],
            ["Ko'chada yurib → do'stni ko'rdim", "While I was walking in Tashkent, I saw an old friend."],
            ["Darsda → telefon jiringladi", "The teacher was explaining the rule when somebody's phone rang."],
            ["Uyga keldim → hammasi yotgan edi", "When I got home, everybody was sleeping."],
          ],
        },
        { t: "tip", tone: "warn", md: "Holat fe'llari (**know, like, want, have** \"ega bo'lmoq\") Continuous da kelmaydi: *When I saw him, I **knew** he was my cousin.* (❌ *was knowing*)." },
        { t: "check", ex: { k: "choice", q: "I ___ a shower when the phone rang.", opts: ["took", "was taking", "were taking", "am taking"], a: 1, why: "Dush qabul qilish davom etayotgan edi → **was taking**." } },
        { t: "check", ex: { k: "choice", q: "When she ___ the news, she started to cry.", opts: ["was hearing", "heard", "was heard", "hears"], a: 1, why: "Qisqa voqea (eshitdi) → **Past Simple**: *heard*." } },
      ],
    },
    {
      title: "O'qing: Kutilmagan uchrashuv",
      blocks: [
        {
          t: "text", title: "A surprise in the market",
          en: "Last Saturday Aziz was walking through the bazaar in Samarkand when he heard someone shout his name. He turned around and saw his old teacher, Mr Karimov. While they were talking, it started to rain, so they ran into a small teahouse. They sat down and ordered tea. While they were waiting for the tea, Mr Karimov showed Aziz some photos on his phone. Suddenly Aziz saw a picture of himself at school! He was laughing so loudly that everybody looked at him. It was a lovely afternoon.",
          uz: "O'tgan shanba kuni Aziz Samarqanddagi bozor bo'ylab yurib ketayotgan edi, birdan kimdir uning ismini baqirganini eshitdi. U orqasiga o'girilib, eski ustozi janob Karimovni ko'rdi. Ular gaplashib turganda yomg'ir yog'a boshladi, shuning uchun kichik choyxonaga yugurib kirishdi. O'tirib, choy buyurtma qilishdi. Choyni kutayotganlarida janob Karimov Azizga telefonidan bir nechta suratni ko'rsatdi. Birdan Aziz maktabdagi o'z suratini ko'rdi! U shunchalik baland kulayotgan ediki, hamma unga qaradi. Ajoyib tush o'tdi.",
        },
        { t: "tip", tone: "info", md: "Matnda har bir **uzun ish** (*was walking, were talking, were waiting*) ga **qisqa voqea** (*heard, started, showed, saw*) to'g'ri keladi. Topib ko'ring!" },
        { t: "check", ex: { k: "tf", q: "Aziz and Mr Karimov were sitting in the teahouse when it started to rain.", a: false, why: "Yomg'ir yog'a boshlaganda ular **gaplashib turishgan edi** (*While they were talking*), keyin choyxonaga yugurib kirishdi." } },
        { t: "check", ex: { k: "choice", q: "What did Mr Karimov show Aziz?", opts: ["A book.", "Photos on his phone.", "A map of Samarkand.", "A tea set."], a: 1, why: "*Mr Karimov showed Aziz some photos on his phone.*" } },
      ],
    },
    {
      title: "Dialog: Nima bo'ldi?",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Nilufar", en: "Why are you limping, Kamol? What happened?", uz: "Nega oqsayapsan, Kamol? Nima bo'ldi?" },
            { who: "Kamol", en: "I fell off my bike. I was riding to work when a dog ran across the road.", uz: "Velosipeddan yiqildim. Ishga ketayotgan edim, it yo'lni kesib o'tib qoldi." },
            { who: "Nilufar", en: "Oh no! Were you going fast?", uz: "Voy-voy! Tez ketayotgan eding-mi?" },
            { who: "Kamol", en: "Not really, but I wasn't looking at the road. I was checking my phone!", uz: "Unchalik emas, lekin yo'lga qaramayotgan edim. Telefonimni tekshirayotgan edim!" },
            { who: "Nilufar", en: "That was silly. Did anybody help you?", uz: "Bu ahmoqlik bo'libdi. Kimdir yordam berdimi?" },
            { who: "Kamol", en: "Yes. While I was lying there, a kind woman stopped and called an ambulance.", uz: "Ha. Men yerda yotganimda, mehribon bir ayol to'xtab, tez yordam chaqirdi." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "Why did Kamol fall off his bike?", opts: ["A car hit him.", "A dog ran across the road.", "It started to rain.", "His bike broke."], a: 1, why: "*I was riding to work when a dog ran across the road.*" } },
      ],
    },
  ],
  words: [
    { en: "accident", uz: "halokat, baxtsiz hodisa", ipa: "ˈæksɪdənt", pos: "noun", ex: "I saw an accident on my way to work.", exUz: "Ishga ketayotib halokatni ko'rdim." },
    { en: "suddenly", uz: "birdan, to'satdan", ipa: "ˈsʌdənli", pos: "adverb", ex: "Suddenly the lights went out.", exUz: "Birdan chiroqlar o'chib qoldi." },
    { en: "ring – rang", uz: "jiringlamoq; qo'ng'iroq qilmoq", ipa: "rɪŋ – ræŋ", pos: "verb", ex: "The phone rang during dinner.", exUz: "Kechki ovqat paytida telefon jiringladi." },
    { en: "fall – fell", uz: "yiqilmoq, tushmoq", ipa: "fɔːl – fel", pos: "verb", ex: "She fell off her bike.", exUz: "U velosipeddan yiqildi." },
    { en: "break down", uz: "buzilmoq (mashina)", ipa: "breɪk daʊn", pos: "phrasal verb", ex: "Our car broke down near Bukhara.", exUz: "Mashinamiz Buxoro yaqinida buzildi." },
    { en: "shout", uz: "baqirmoq", ipa: "ʃaʊt", pos: "verb", ex: "Somebody shouted my name.", exUz: "Kimdir ismimni baqirdi." },
    { en: "notice", uz: "payqamoq, sezmoq", ipa: "ˈnəʊtɪs", pos: "verb", ex: "I didn't notice the sign.", exUz: "Belgini payqamadim." },
    { en: "hurt", uz: "og'rimoq; jarohatlamoq", ipa: "hɜːt", pos: "verb", ex: "He hurt his leg while he was playing.", exUz: "U o'ynayotib oyog'ini jarohatladi." },
    { en: "lights went out", uz: "chiroq o'chdi", ipa: "laɪts went aʊt", pos: "phrase", ex: "The lights went out at nine.", exUz: "Chiroqlar soat to'qqizda o'chdi." },
    { en: "on my way", uz: "yo'lda ketayotib", ipa: "ɒn maɪ weɪ", pos: "phrase", ex: "I met Laylo on my way home.", exUz: "Uyga ketayotib Laylo bilan uchrashdim." },
  ],
  practice: [
    { k: "match", pairs: [["ring", "rang"], ["fall", "fell"], ["break", "broke"], ["see", "saw"], ["hear", "heard"]] },
    { k: "match", pairs: [["accident", "halokat"], ["suddenly", "birdan"], ["shout", "baqirmoq"], ["notice", "payqamoq"], ["on my way", "yo'lda ketayotib"]] },
    { k: "listen", say: "I was walking home when I saw an accident.", opts: ["I walked home when I saw an accident.", "I was walking home when I saw an accident.", "I was walking home while I saw an accident."], a: 1 },
    { k: "listen", say: "While she was cooking, the phone rang.", opts: ["While she was cooking, the phone rang.", "While she cooked, the phone was ringing.", "When she cooked, the phone rang."], a: 0 },
    { k: "fill", q: "I ___ TV when the lights went out. (watch)", a: ["was watching"], why: "Jarayon → **was watching**." },
    { k: "fill", q: "We were having dinner when the phone ___. (ring)", a: ["rang"], why: "Qisqa voqea → **rang**." },
    { k: "fill", q: "___ I was waiting for the bus, I met an old friend.", a: ["While", "when"], hint: "Uzun ish oldidan", why: "*while* + Past Continuous. (*When I was waiting…* ham mumkin.)" },
    { k: "fill", q: "She was crossing the road when a car ___ her. (hit)", a: ["hit"], why: "**hit – hit – hit**: Past Simple *hit*." },
    { k: "choice", q: "The children ___ in the garden when it started to rain.", opts: ["played", "were playing", "was playing", "play"], a: 1, why: "*the children* = they → **were playing**." },
    { k: "choice", q: "Qaysi gap **to'g'ri**?", opts: ["While I walked home, I was seeing a snake.", "While I was walking home, I saw a snake.", "While I walking home, I saw a snake.", "While I was walking home, I was saw a snake."], a: 1, why: "Uzun ish — *was walking*, qisqa voqea — *saw*." },
    { k: "tf", q: "**When I was seeing the accident, I called the police.** — to'g'ri gap.", a: false, why: "**see** — qisqa voqea: *When I **saw** the accident, I called the police.*" },
    { k: "tf", q: "**While Aziz was cooking, Laylo was setting the table.** — ikkala ish bir vaqtda.", a: true },
    { k: "order", uz: "Telefon jiringlaganda men dush qabul qilayotgan edim.", words: ["I", "was", "taking", "a", "shower", "when", "the", "phone", "rang."], extra: ["took", "were"], alt: [["When", "the", "phone", "rang,", "I", "was", "taking", "a", "shower."]] },
    { k: "translate", uz: "Men uyga ketayotganimda, Lailoni ko'rdim.", a: ["While I was walking home, I saw Laylo.", "While I was going home, I saw Laylo.", "I was walking home when I saw Laylo.", "I was going home when I saw Laylo.", "When I was walking home, I saw Laylo.", "When I was going home, I saw Laylo."] },
    { k: "speak", say: "I was walking to work when I met my old teacher.", uz: "Ishga ketayotib, eski ustozimni uchratdim." },
  ],
  quiz: [
    { k: "choice", q: "He ___ his leg while he was playing football.", opts: ["was hurting", "hurt", "were hurting", "hurts"], a: 1, why: "Qisqa voqea → **hurt** (V2)." },
    { k: "choice", q: "___ she was studying, her brother was playing computer games.", opts: ["Because", "While", "So", "If"], a: 1, why: "Ikki parallel ish → **while**." },
    { k: "choice", q: "**A: What ___ you doing when the lights went out?** **B: I was reading.**", opts: ["did", "were", "was", "are"], a: 1, why: "*you* + **were** + doing." },
    { k: "choice", q: "Qaysi gap **xato**?", opts: ["I was reading when you called.", "While I was walk home, I saw him.", "While they were swimming, it started to rain.", "He broke his arm when he was skiing."], a: 1, why: "*was* dan keyin fe'l -ing bilan: *While I was **walking** home, I saw him.*" },
    { k: "fill", q: "We ___ to Samarkand when the car broke down. (drive)", a: ["were driving"], why: "*we* + **were driving**." },
    { k: "fill", q: "I ___ my keys while I was running for the bus. (lose)", a: ["lost"], why: "Qisqa voqea → **lost**." },
    { k: "listen", say: "They were talking when the teacher came in.", opts: ["They were talking when the teacher came in.", "They talked when the teacher was coming in.", "They were talking when the teacher is coming in."], a: 0 },
    { k: "tf", q: "**When I arrived, they were having dinner.** — ular men kelganimda allaqachon ovqatlanayotgan edi.", a: true },
    { k: "order", uz: "U yurib ketayotganda qo'ng'iroq qildi.", words: ["He", "called", "while", "I", "was", "walking."], extra: ["were", "walked"], alt: [["While", "I", "was", "walking,", "he", "called."]] },
    { k: "translate", uz: "Ular choy ichib o'tirganda, yomg'ir yog'a boshladi.", a: ["It started to rain while they were drinking tea.", "While they were drinking tea, it started to rain.", "It started raining while they were drinking tea.", "When they were drinking tea, it started to rain.", "It started to rain when they were drinking tea."] },
  ],
  summary: [
    "**Past Continuous** — fon, davom etayotgan ish (*was walking*); **Past Simple** — to'satdan bo'lgan qisqa voqea (*saw, rang*).",
    "Namuna: *I **was walking** home when I **saw** an accident.*",
    "**while** + uzun ish (*While I was cooking…*); **when** + qisqa voqea (*…when the phone rang*).",
    "Ikkala ish ham bir vaqtda davom etgan bo'lsa — ikkalasi **Past Continuous**: *While I was cooking, he was watching TV.*",
    "Gap boshida **when / while** bo'lsa, vergul qo'yiladi: *While I was walking, I saw him.*",
  ],
  homework: "Hayotingizdagi 3 ta kutilmagan voqeani yozing (*I was… when…*). Har bir gapda uzun ish va qisqa voqea bo'lsin. Keyin shu 3 ta gapni **While …, …** shaklida qayta yozing. Oxirida 2 ta \"ikki parallel ish\" gap qo'shing (*While I was…, my sister was…*).",
};

export default lesson;
