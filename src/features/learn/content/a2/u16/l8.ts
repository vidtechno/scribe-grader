import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u16-l8",
  title: "Unit review: experiences",
  titleUz: "Bosqich takrori: tajriba va dunyo",
  goal: "Bosqichni mustahkamlaysiz: **Present Perfect va Past Simple**, **for / since**, **who / which / that / where**, **majhul nisbat**, **frazali fe'llar**, **question tag** va **xat yozish** — hammasini bitta matn va aralash mashqlarda ishlatasiz.",
  slides: [
    {
      title: "Takror 1: Present Perfect, for / since",
      blocks: [
        {
          t: "table", head: ["Qachon", "Zamon", "Misol"], speak: [2],
          rows: [
            ["Vaqt aytilmagan tajriba, yangilik", "Present Perfect", "I've been to Khiva. I've lost my keys."],
            ["Tugagan aniq vaqt", "Past Simple", "I went to Khiva last year."],
            ["Davom etayotgan holat + muddat", "Present Perfect + for", "I've lived here for ten years."],
            ["Davom etayotgan holat + boshlanish", "Present Perfect + since", "I've lived here since 2015."],
          ],
        },
        { t: "compare", good: { title: "To'g'ri", items: ["I saw him yesterday.", "I've lived here since 2020.", "I moved here two years ago."] }, bad: { title: "Xato", items: ["I have seen him yesterday.", "I live here since 2020.", "I've moved here two years ago."] } },
        { t: "check", ex: { k: "choice", q: "**We've known each other ___ 2019.**", opts: ["for", "since", "ago", "from"], a: 1 } },
      ],
    },
    {
      title: "Takror 2: who, which, that, where",
      blocks: [
        {
          t: "examples", items: [
            { en: "The man who lives next door is a dentist.", uz: "Qo'shnimiz — tish shifokori." },
            { en: "The bag that I bought is very light.", uz: "Men sotib olgan sumka juda yengil." },
            { en: "This is the village where my grandfather was born.", uz: "Bu — bobom tug'ilgan qishloq." },
          ],
        },
        { t: "tip", tone: "info", md: "**who** — odam, **which** — narsa, **that** — ikkalasi, **where** — joy. Xato: ~~the book what I read~~." },
        { t: "check", ex: { k: "fill", q: "A bakery is a place ___ people buy bread.", a: ["where"] } },
      ],
    },
    {
      title: "Takror 3: passive, phrasal verbs, tags",
      blocks: [
        {
          t: "table", head: ["Mavzu", "Qoida", "Misol"], speak: [2],
          rows: [
            ["Passive (hozir)", "am / is / are + V3", "Cars are made in factories."],
            ["Passive (o'tgan)", "was / were + V3", "The window was broken."],
            ["Frazali fe'l (olmosh o'rtada)", "turn it on", "Please turn it off."],
            ["Question tag", "(+) → (−), (−) → (+)", "She likes tea, doesn't she?"],
          ],
        },
        { t: "check", ex: { k: "fill", q: "My bag ___ stolen last week. (be)", a: ["was"], why: "Past passive: **was + V3**." } },
        { t: "check", ex: { k: "choice", q: "**He can't swim, ___?**", opts: ["can't he", "can he", "does he", "isn't he"], a: 1, why: "Inkor gap → darak tag: **can he?**" } },
      ],
    },
    {
      title: "O'qing: Dilnozaning sayohati",
      blocks: [
        {
          t: "text", title: "A trip to Khiva",
          en: "Dilnoza has just come back from Khiva. She has never travelled so far before, and she has already told all her friends about it. She went there by train last month with her cousin, who works as a guide. They stayed in a small hotel that was built in an old house. Many souvenirs are sold near the city walls, and she has bought a lot of them. 'Have you ever been to Khiva?' she asks her friend. 'It's an amazing place, isn't it?' Dilnoza has been interested in history since she was a child, so she looked for old books in the market and found a beautiful one. Now she can't wait to go back.",
          uz: "Dilnoza Xivadan hozirgina qaytdi. U hech qachon bunchalik uzoqqa sayohat qilmagan va do'stlariga allaqachon hammasini aytib ulgurgan. U o'tgan oy amakivachchasi bilan poyezdda bordi, amakivachchasi gid bo'lib ishlaydi. Ular eski uyda qurilgan kichik mehmonxonada qolishdi. Shahar devorlari yonida ko'plab esdalik sovg'alari sotiladi va u ularning ko'pini sotib oldi. «Xivada bo'lganmisan?» deb so'raydi u do'stidan. «Bu ajoyib joy, shunday emasmi?» Dilnoza bolaligidan tarixga qiziqadi, shuning uchun bozorda eski kitoblarni qidirdi va chiroyli bittasini topdi. Endi u yana borishni intiqlik bilan kutyapti.",
        },
        { t: "check", ex: { k: "tf", q: "Dilnoza went to Khiva by plane.", a: false, why: "*She went there by train.*" } },
        { t: "check", ex: { k: "choice", q: "Who works as a guide?", opts: ["Dilnoza", "Her cousin", "Her friend", "Her teacher"], a: 1, why: "*her cousin, who works as a guide*" } },
        { t: "check", ex: { k: "choice", q: "Why is 'since she was a child' used?", opts: ["Because she is still interested in history.", "Because she finished a trip.", "Because it is Past Simple.", "Because she was a guide."], a: 0, why: "Hali davom etayotgan qiziqish → **since** + Present Perfect." } },
      ],
    },
  ],
  words: [
    { en: "article", uz: "maqola", ipa: "ˈɑːtɪkl", pos: "noun", ex: "I read an interesting article about Khiva.", exUz: "Xiva haqida qiziqarli maqola o'qidim." },
    { en: "century", uz: "asr", ipa: "ˈsentʃəri", pos: "noun", ex: "This house is a hundred years old, so it was built in the last century.", exUz: "Bu uy yuz yoshda, demak o'tgan asrda qurilgan." },
    { en: "invention", uz: "ixtiro", ipa: "ɪnˈvenʃn", pos: "noun", ex: "The telephone was a great invention.", exUz: "Telefon ajoyib ixtiro bo'lgan." },
    { en: "popular", uz: "mashhur, ommabop", ipa: "ˈpɒpjələ", pos: "adj", ex: "Plov is popular in Uzbekistan.", exUz: "Palov O'zbekistonda mashhur." },
    { en: "traditional", uz: "an'anaviy", ipa: "trəˈdɪʃənl", pos: "adj", ex: "We ate a traditional dinner.", exUz: "Biz an'anaviy kechki ovqat yedik." },
    { en: "modern", uz: "zamonaviy", ipa: "ˈmɒdn", pos: "adj", ex: "The museum is very modern.", exUz: "Muzey juda zamonaviy." },
    { en: "local", uz: "mahalliy", ipa: "ˈləʊkl", pos: "adj", ex: "I like local food.", exUz: "Men mahalliy taomlarni yoqtiraman." },
    { en: "nearby", uz: "yaqin atrofda", ipa: "ˌnɪəˈbaɪ", pos: "adj / adv", ex: "There is a shop nearby.", exUz: "Yaqin atrofda do'kon bor." },
    { en: "wonder", uz: "hayratlanarli narsa; hayron bo'lmoq", ipa: "ˈwʌndə", pos: "noun / verb", ex: "Khiva is a wonder of history.", exUz: "Xiva — tarixning mo'jizasi." },
    { en: "similar", uz: "o'xshash", ipa: "ˈsɪmələ", pos: "adj", ex: "My phone is similar to yours.", exUz: "Mening telefonim seniki kabi." },
  ],
  practice: [
    { k: "match", pairs: [["for", "muddat: two years"], ["since", "boshlanish: 2019"], ["ago", "o'tgan vaqt: two days"], ["yet", "hali (so'roq/inkor)"], ["already", "allaqachon"]] },
    { k: "match", pairs: [["who", "odam"], ["which", "narsa"], ["where", "joy"], ["that", "odam yoki narsa"]] },
    { k: "listen", say: "Have you ever been to Samarkand?", opts: ["Have you ever been to Samarkand?", "Did you ever go to Samarkand?", "Have you ever seen Samarkand?"], a: 0 },
    { k: "listen", say: "My bag was stolen last week.", opts: ["My bag was stolen last week.", "My bag has stolen last week.", "My bag is stolen every week."], a: 0 },
    { k: "choice", q: "**I ___ him yesterday.**", opts: ["have seen", "saw", "have saw", "see"], a: 1 },
    { k: "choice", q: "**She has worked here ___ five years.**", opts: ["since", "for", "ago", "from"], a: 1 },
    { k: "choice", q: "**The film ___ we saw was long.**", opts: ["what", "who", "that", "where"], a: 2 },
    { k: "choice", q: "**English is ___ in many countries.**", opts: ["speak", "spoken", "speaking", "spoke"], a: 1 },
    { k: "fill", q: "Please turn ___ off. (the TV → olmosh)", a: ["it"], why: "Ajraladigan frazali fe'l: **turn it off**." },
    { k: "fill", q: "You live in Bukhara, ___ you?", a: ["don't"], why: "Darak Present Simple → **don't you?**" },
    { k: "fill", q: "The cake ___ baked by my mother. (be, o'tgan)", a: ["was"] },
    { k: "order", uz: "Men bu yerda 2018 yildan beri yashayman.", words: ["I've", "lived", "here", "since", "2018."], extra: ["live", "for"], alt: [["I", "have", "lived", "here", "since", "2018."]] },
    { k: "translate", uz: "Siz hech Xivada bo'lganmisiz?", a: ["Have you ever been to Khiva?", "Have you been to Khiva?", "Have you ever been to Khiva before?"] },
    { k: "translate", uz: "Qo'shnim — tish shifokori.", a: ["My neighbour is a dentist.", "My neighbour is a dentist"], why: "Yoki: *The man who lives next door is a dentist.*" },
    { k: "tf", q: "**I have lost my keys** gapi natija hozir muhimligini bildiradi.", a: true },
    { k: "speak", say: "It's an amazing place, isn't it?", uz: "Bu ajoyib joy, shunday emasmi?" },
  ],
  quiz: [
    { k: "choice", q: "**We ___ to Bukhara last summer.**", opts: ["have been", "went", "have gone", "go"], a: 1, why: "*last summer* — aniq vaqt → Past Simple." },
    { k: "choice", q: "**Have you ___ finished?**", opts: ["yet", "already", "ago", "since"], a: 1, why: "Gap o'rtasida (*have you ___ finished*) **already** turadi; **yet** esa gap oxirida: *Have you finished yet?*" },
    { k: "choice", q: "**A tourist is a person ___ visits other countries.**", opts: ["which", "who", "where", "whose"], a: 1 },
    { k: "choice", q: "**Cars ___ made in factories.**", opts: ["is", "are", "was", "be"], a: 1 },
    { k: "choice", q: "**Don't give ___!**", opts: ["it up", "up it", "it on", "on"], a: 0 },
    { k: "fill", q: "She likes tea, ___ she?", a: ["doesn't"] },
    { k: "fill", q: "I've known her ___ ten years.", a: ["for"] },
    { k: "order", uz: "Shisha deraza kecha sindirilgan.", words: ["The", "window", "was", "broken", "yesterday."], extra: ["is", "broke"] },
    { k: "listen", say: "I've lived here for ten years.", opts: ["I've lived here for ten years.", "I lived here for ten years.", "I live here for ten years."], a: 0 },
    { k: "tf", q: "**Hi Mr Karimov, … Yours sincerely** — uslub to'g'ri.", a: false, why: "Uslublar aralashgan." },
  ],
  summary: [
    "Present Perfect — tajriba va natija (**vaqtsiz**); Past Simple — **aniq tugagan vaqt**.",
    "**for** + muddat, **since** + boshlanish; *ago* faqat Past Simple bilan.",
    "**who / which / that / where** otdan keyin tushuntirish beradi; *what* ishlatilmaydi.",
    "Passive: **be + V3**; frazali fe'llarda olmosh o'rtada (*turn it on*).",
    "Question tag gapdagi yordamchi fe'lga qarab o'zgaradi; xat uslubi bir xil bo'lsin.",
  ],
  homework: "Bir kichik matn yozing: eng esda qolgan sayohatingiz haqida 6–8 gap. Unda kamida ikkita Present Perfect, ikkita Past Simple, bitta *who* yoki *where* gapi va bitta passive bo'lsin.",
};

export default lesson;
