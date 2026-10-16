import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u21-l8",
  title: "Unit review: passive and relative clauses",
  titleUz: "Bosqich takrori: majhul nisbat va nisbiy gaplar",
  goal: "Bosqichni takrorlaysiz: **passive** (*is made, was built, has been done, will be opened*), **who / which / whose / where** bilan nisbiy gaplar, **artikl va miqdor so'zlari**, **question tags** va **xushmuomala savollar**ni yangi misollarda tekshirasiz.",
  slides: [
    {
      title: "Takror: passive",
      blocks: [
        { t: "p", md: "Passive'da ish **bajaruvchi** emas, **ish yoki natija** muhim bo'ladi. Shakl doim: **be + V3**. Zamon **be** fe'lida ko'rinadi." },
        {
          t: "table", head: ["Zamon", "Shakl", "Misol"], speak: [2],
          rows: [
            ["Present Simple", "am / is / are + V3", "These carpets are made by hand."],
            ["Past Simple", "was / were + V3", "The bridge was built in 1850."],
            ["Present Perfect", "has / have been + V3", "The road has been repaired."],
            ["Future", "will be + V3", "The library will be opened next week."],
            ["Modal", "can / must / should be + V3", "Photos can be taken outside."],
          ],
        },
        { t: "tip", tone: "info", md: "**by** + bajaruvchi faqat kerak bo'lganda: *The tower was designed **by a French architect**.* Aks holda tushirib qoldiring: *The room was cleaned.*" },
        { t: "check", ex: { k: "choice", q: "The new stadium ___ next summer.", opts: ["will be opened", "will opened", "is opened", "was opening"], a: 0, why: "Kelasi zamon passive: **will be + V3**." } },
        { t: "check", ex: { k: "choice", q: "The windows ___ yesterday.", opts: ["were cleaned", "are cleaned", "have been cleaned", "cleaned were"], a: 0, why: "**yesterday** → Past Simple passive: **were cleaned**." } },
      ],
    },
    {
      title: "Takror: nisbiy gaplar",
      blocks: [
        { t: "p", md: "Nisbiy gap (**relative clause**) odam yoki narsa haqida ma'lumot beradi. So'zni tanlash — ot turiga bog'liq:" },
        {
          t: "table", head: ["So'z", "Qachon", "Misol"], speak: [2],
          rows: [
            ["who / that", "odam", "She is the guide who showed us the old town."],
            ["which / that", "narsa", "This is the museum which opened last year."],
            ["where", "joy", "That is the street where I grew up."],
            ["whose", "egalik", "He is the artist whose paintings are famous."],
          ],
        },
        {
          t: "table", head: ["Aniqlovchi (vergulsiz)", "Qo'shimcha ma'lumot (vergul bilan)"],
          rows: [
            ["The man who called you is my uncle.", "My uncle, who lives in Osh, called you."],
            ["The hotel that we chose was cheap.", "The hotel, which has a pool, was cheap."],
          ],
        },
        { t: "tip", tone: "warn", md: "Vergulli gapda **that** ishlatilmaydi: ~~The hotel, that has a pool~~ → *The hotel, **which** has a pool*. Aniqlovchi gapda ob'ekt olmoshini tushirish mumkin: *The film (that) we saw was long.*" },
        { t: "check", ex: { k: "fill", q: "The woman ___ car was stolen called the police.", a: ["whose"], why: "Egalik → **whose**." } },
        { t: "check", ex: { k: "fill", q: "Bukhara, ___ is a very old city, attracts many visitors.", a: ["which"], why: "Vergul bilan, narsa/joy → **which**." } },
      ],
    },
    {
      title: "Takror: artikl va miqdor so'zlari",
      blocks: [
        { t: "p", md: "Artikl xatolari o'zbek tilida so'zlovchilar uchun eng keng tarqalgan xatolar. Qisqa eslatma:" },
        {
          t: "table", head: ["Qoida", "Misol"], speak: [1],
          rows: [
            ["**a / an** — birinchi marta, sanaladigan birlik ot", "We stayed in a small hotel."],
            ["**the** — ikkinchi marta yoki yagona/aniq narsa", "The hotel was near the sea."],
            ["Artikl yo'q — umumiy ko'plik yoki sanalmaydigan ot", "Tourists love old towns. Information is free."],
            ["**some / any** — sanalmaydigan va ko'plik ot", "Is there any milk? There are some shops."],
            ["**much / many**", "How much time? How many people?"],
          ],
        },
        { t: "p", md: "Yana beshta so'z: **all** (hammasi), **both** (ikkalasi), **either** (ikkidan biri), **neither** (hech biri), **each / every** (har bir; fe'l birlikda)." },
        { t: "examples", items: [
          { en: "Both of my brothers live abroad.", uz: "Ikkala akam ham chet elda yashaydi." },
          { en: "Neither of the restaurants was open.", uz: "Restoranlarning ikkalasi ham ochiq emas edi." },
          { en: "Every room has a view of the lake.", uz: "Har bir xonadan ko'lga ko'rinish bor." },
          { en: "Each guest receives a free map.", uz: "Har bir mehmon bepul xarita oladi." },
        ] },
        { t: "check", ex: { k: "choice", q: "I saw a beautiful old house. ___ house was built in 1900.", opts: ["The", "A", "An", "—"], a: 0, why: "Ikkinchi marta eslatilgan → **the**." } },
        { t: "check", ex: { k: "choice", q: "___ of the two hotels was cheap, so we chose a guesthouse.", opts: ["Neither", "Both", "All", "Every"], a: 0, why: "Ikkalasi ham arzon emas → **Neither**." } },
      ],
    },
    {
      title: "Takror: tag va xushmuomala savollar",
      blocks: [
        { t: "p", md: "Question tag: darak gap → **inkor tag**, inkor gap → **darak tag**. Xushmuomala savolda so'roq so'zidan keyin **gap tartibi**." },
        {
          t: "table", head: ["Mavzu", "To'g'ri", "Xato"], speak: [1],
          rows: [
            ["Tag", "The tour was great, wasn't it?", "The tour was great, did it?"],
            ["Tag (I am)", "I'm early, aren't I?", "I'm early, amn't I?"],
            ["Tag (Let's)", "Let's go, shall we?", "Let's go, will we?"],
            ["Polite", "Could you tell me where the bank is?", "Could you tell me where is the bank?"],
            ["Polite (yes/no)", "Do you know if it is open?", "Do you know is it open?"],
          ],
        },
        { t: "check", ex: { k: "fill", q: "They haven't arrived yet, ___?", a: ["have they"], why: "Inkor gap → darak tag: **have they**." } },
        { t: "check", ex: { k: "fix", wrong: "Do you know what time does the train arrive?", a: ["Do you know what time the train arrives?"], why: "Xushmuomala savolda **does** kerak emas." } },
      ],
    },
    {
      title: "O'qing: Oakford shahri",
      blocks: [
        {
          t: "text", title: "The town of Oakford", voice: "emma",
          en: "Oakford is a small town in the north of England. It is visited by thousands of people every summer. The old bridge, which was built in 1850, is the town's best-known landmark. Both of the museums are free, and every Saturday a market is held in the main square. The town is famous for its pottery, which is made by hand in small workshops. Neither of the two hotels in the centre is cheap, but there is a good campsite where visitors can stay. The mayor says that a new park will be opened next year. Oakford isn't very big, is it? No, but it has a lot of charm.",
          uz: "Oakford — Angliyaning shimolidagi kichik shahar. Uni har yozda minglab odamlar ziyorat qiladi. 1850-yilda qurilgan eski ko'prik shaharning eng mashhur belgisi. Ikkala muzey ham bepul, har shanba kuni bosh maydonda bozor o'tkaziladi. Shahar kulolchiligi bilan mashhur, u kichik ustaxonalarda qo'lda yasaladi. Markazdagi ikki mehmonxonaning hech biri arzon emas, lekin mehmonlar qolishi mumkin bo'lgan yaxshi kemping bor. Meri aytishicha, kelasi yil yangi bog' ochiladi. Oakford juda katta emas, shunday emasmi? Ha, lekin uning jozibasi ko'p.",
        },
        { t: "check", ex: { k: "tf", q: "The market is held in the main square every Saturday.", a: true, why: "Matnda: *every Saturday a market is held in the main square.*" } },
        { t: "check", ex: { k: "choice", q: "Why is *which was built in 1850* between commas?", opts: ["It gives extra information about the bridge.", "It identifies which bridge we mean.", "It is a question.", "It is a mistake."], a: 0, why: "Vergul — non-defining (qo'shimcha ma'lumot) belgisi." } },
      ],
    },
    {
      title: "Dialog: shahar haqida suhbat",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Lily", en: "Is this your first visit to Oakford?", uz: "Oakfordga birinchi marta kelishingizmi?" },
            { who: "Karim", en: "Yes. It's a charming place, isn't it? I've been told that the old bridge was designed by a famous architect.", uz: "Ha. Maftunkor joy, a? Eski ko'prikni mashhur me'mor loyihalagan, deb aytishdi." },
            { who: "Lily", en: "That's right. And there's a café near the bridge where you can try local cheese.", uz: "To'g'ri. Ko'prik yaqinida mahalliy pishloqni tatib ko'rish mumkin bo'lgan kafe bor." },
            { who: "Karim", en: "Could you tell me how I can get there?", uz: "U yerga qanday borishni ayta olasizmi?" },
            { who: "Lily", en: "Just walk down this street. Every visitor finds it easily.", uz: "Shu ko'cha bo'ylab yuring. Har bir mehmon uni oson topadi." },
            { who: "Karim", en: "Thank you. All the shops are closed on Sunday, aren't they?", uz: "Rahmat. Yakshanba kuni barcha do'konlar yopiq, a?" },
            { who: "Lily", en: "Not all of them, but most are.", uz: "Hammasi emas, lekin ko'pchiligi." },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Karim is asking for directions politely.", a: true, why: "*Could you tell me how I can get there?* — xushmuomala savol." } },
      ],
    },
  ],
  words: [
    { en: "resident", uz: "yashovchi, mahalliy aholi vakili", ipa: "ˈrez.ɪ.dənt", pos: "noun", ex: "Local residents helped to clean the park.", exUz: "Mahalliy aholi bog'ni tozalashga yordam berdi." },
    { en: "architect", uz: "me'mor", ipa: "ˈɑː.kɪ.tekt", pos: "noun", ex: "The theatre was designed by a young architect.", exUz: "Teatrni yosh me'mor loyihalagan." },
    { en: "medieval", uz: "o'rta asrlarga oid", ipa: "ˌmed.iˈiː.vəl", pos: "adj", ex: "The town has a medieval castle.", exUz: "Shaharchada o'rta asrlarga oid qasr bor." },
    { en: "settlement", uz: "aholi punkti, qishloq", ipa: "ˈset.əl.mənt", pos: "noun", ex: "The first settlement here was built by farmers.", exUz: "Bu yerdagi birinchi aholi punktini dehqonlar qurgan." },
    { en: "legacy", uz: "meros, qoldiq", ipa: "ˈleɡ.ə.si", pos: "noun", ex: "The old king left a rich legacy to his country.", exUz: "Keksa shoh o'z mamlakatiga boy meros qoldirdi." },
    { en: "heritage", uz: "madaniy meros", ipa: "ˈher.ɪ.tɪdʒ", pos: "noun", ex: "The old town is part of our cultural heritage.", exUz: "Eski shahar madaniy merosimizning bir qismi." },
    { en: "monument", uz: "yodgorlik", ipa: "ˈmɒn.jə.mənt", pos: "noun", ex: "There is a monument in the middle of the square.", exUz: "Maydon o'rtasida yodgorlik bor." },
    { en: "craftsman", uz: "hunarmand", ipa: "ˈkrɑːfts.mən", pos: "noun", ex: "The bowls are made by a local craftsman.", exUz: "Kosalarni mahalliy hunarmand yasaydi." },
    { en: "ceremony", uz: "marosim", ipa: "ˈser.ɪ.mə.ni", pos: "noun", ex: "The opening ceremony was held in the main square.", exUz: "Ochilish marosimi asosiy maydonda o'tkazildi." },
    { en: "ruins", uz: "xarobalar, vayronalar", ipa: "ˈruː.ɪnz", pos: "noun", ex: "We walked around the ruins of an old fortress.", exUz: "Biz eski qal'a xarobalari atrofida sayr qildik." },
  ],
  practice: [
    { k: "choice", q: "**These carpets ___ by hand in the village.**", opts: ["are made", "make", "is made", "are making"], a: 0, why: "Ko'plik, hozirgi zamon passive: **are made**." },
    { k: "choice", q: "**The tickets ___ yet, so please wait.**", opts: ["haven't been sent", "haven't sent", "aren't send", "didn't be sent"], a: 0, why: "Present Perfect passive inkor: **haven't been sent**." },
    { k: "choice", q: "**The new library ___ by the mayor next month.**", opts: ["will be opened", "will open", "opened", "is opening"], a: 0, why: "*by the mayor* — passive kelasi zamon: **will be opened**." },
    { k: "choice", q: "**___ of the two roads goes to the village, so we took a taxi.**", opts: ["Neither", "Both", "All", "Every"], a: 0, why: "Ikkalasi ham bormaydi → **Neither**." },
    { k: "fill", q: "Photos can ___ taken outside, but not inside the museum.", a: ["be"], why: "Modal passive: **can be + V3**." },
    { k: "fill", q: "She is the architect ___ designed the new bridge.", a: ["who", "that"], why: "Odam → **who** (yoki **that**)." },
    { k: "fill", q: "That is the village ___ my grandparents were born.", a: ["where", "in which"], why: "Joy → **where**." },
    { k: "fill", q: "The tourists, ___ bags were stolen, went to the police.", a: ["whose"], why: "Egalik → **whose**." },
    { k: "fill", q: "I saw a beautiful old bridge. ___ bridge was built by the Romans.", a: ["The"], why: "Ikkinchi marta eslatilgan → **the**." },
    { k: "fill", q: "We didn't see ___ tourists in the old town.", a: ["any", "many"], why: "Inkor gapda ko'plik ot bilan **any / many**." },
    { k: "fix", wrong: "The man which showed us the way was very kind.", a: ["The man who showed us the way was very kind.", "The man that showed us the way was very kind."], hint: "Odam haqida", why: "Odam → **who / that**, **which** emas." },
    { k: "fix", wrong: "It's a nice city, it isn't?", a: ["It's a nice city, isn't it?", "It is a nice city, isn't it?"], why: "Tag: **isn't it?** (fe'l + olmosh)." },
    { k: "order", uz: "Chiptaning narxi qancha ekanini bilasizmi?", words: ["Do", "you", "know", "how", "much", "the", "ticket", "costs?"], extra: ["does", "cost"], why: "Xushmuomala savol: **how much the ticket costs**." },
    { k: "translate", uz: "Bu ko'prik 1920-yilda qurilgan.", a: ["This bridge was built in 1920.", "The bridge was built in 1920."], why: "Past Simple passive: **was built**." },
    { k: "tf", q: "**The hotel, that has a pool, is expensive** — bu gap to'g'ri.", a: false, why: "Vergulli nisbiy gapda **that** emas, **which** ishlatiladi." },
    { k: "dictation", say: "Neither of the hotels is cheap.", uz: "Mehmonxonalarning hech biri arzon emas." },
    { k: "speak", say: "The old bridge, which was built in 1850, is a famous landmark.", uz: "1850-yilda qurilgan eski ko'prik mashhur belgi." },
  ],
  quiz: [
    { k: "choice", q: "**The castle ___ in the twelfth century.**", opts: ["was built", "is built", "has built", "built"], a: 0, why: "O'tgan zamon passive: **was built**." },
    { k: "choice", q: "**This is the girl ___ father is a famous chef.**", opts: ["whose", "who", "which", "where"], a: 0, why: "Egalik → **whose**." },
    { k: "choice", q: "**Qaysi savol to'g'ri?**", opts: ["Could you tell me where the museum is?", "Could you tell me where is the museum?", "Could you tell me where does the museum?", "Could you tell me the museum where is?"], a: 0, why: "Xushmuomala savolda gap tartibi." },
    { k: "choice", q: "**___ room in this hotel has a balcony.**", opts: ["Every", "All", "Both", "Neither"], a: 0, why: "**Every** + birlik ot." },
    { k: "fill", q: "The tour was great, ___ it?", a: ["wasn't"], why: "Past, darak gap → **wasn't it**." },
    { k: "fill", q: "Bukhara, ___ is more than two thousand years old, is a UNESCO city.", a: ["which"], why: "Vergul bilan, joy → **which**." },
    { k: "fill", q: "Let's visit the ruins, ___ we?", a: ["shall"], why: "**Let's** → **shall we**." },
    { k: "listen", say: "The monument was designed by a famous architect.", opts: ["The monument was designed by a famous architect.", "The monument is designed by a famous architect.", "The monument was designed by a famous artist."], a: 0 },
    { k: "tf", q: "**Both of the museums are free** — bu gap ikkala muzey ham bepul ekanini bildiradi.", a: true, why: "**Both** = ikkalasi." },
    { k: "fix", wrong: "Could you tell me do you have a map?", a: ["Could you tell me if you have a map?", "Could you tell me whether you have a map?"], why: "Ha/yo'q savolda **if / whether** va gap tartibi." },
  ],
  summary: [
    "**Passive**: be + V3 — *is made, was built, has been repaired, will be opened, can be seen*. **by** faqat kerak bo'lganda.",
    "**Nisbiy gap**: odam — **who**, narsa — **which**, joy — **where**, egalik — **whose**. Qo'shimcha ma'lumot vergul bilan va **that** siz.",
    "**Artikl**: birinchi marta **a / an**, keyin **the**, umumiy ko'plik va sanalmaydiganlarda artikl yo'q. **all, both, either, neither, each, every** ni to'g'ri tanlang.",
    "**Question tag** va **xushmuomala savol**: *It's nice, isn't it? Could you tell me where the bank is?*",
    "Sharh yozishda: **although, despite, however** va kuchli sifatlar (*stunning, overpriced*) ishlating.",
  ],
  homework: "O'z shahringiz yoki mahallangiz haqida 10 gapdan iborat matn yozing. Unda kamida 3 ta passive (*was built, is visited…*), 3 ta nisbiy gap (*who, which, where*), 2 ta artikl bilan bog'liq to'g'ri ishlatilgan ot va 1 ta question tag bo'lsin.",
};

export default lesson;
