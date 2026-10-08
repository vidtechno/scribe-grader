import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u9-l8",
  title: "Irregular verbs 4",
  titleUz: "Noto'g'ri fe'llar 4 va o'tgan zamon takrori",
  goal: "Yana 10 ta noto'g'ri fe'lni o'rganasiz: **swam, ran, began, sang, won, broke, forgot, wore, caught, fell** — va butun bo'lim bo'yicha Past Simple'ni (ijobiy, inkor, savol, **was / were, there was, could**) xatosiz ishlatib, hikoya qila olasiz.",
  slides: [
    {
      title: "Bugungi 10 ta fe'l",
      blocks: [
        { t: "p", md: "Bu bo'limda allaqachon yangi fe'llarni o'rgandik: *slept, left, spent, told, heard…* (2-dars), *grew, became* (5-dars), *flew, drove, rode* (7-dars). Endi oxirgi o'ntasi — sport, bayram va kundalik voqealar uchun:" },
        {
          t: "table", head: ["V1", "V2", "Ma'nosi", "V2 talaffuzi"],
          rows: [
            ["swim", "swam", "suzmoq", "swæm"],
            ["run", "ran", "yugurmoq", "ræn"],
            ["begin", "began", "boshlamoq, boshlanmoq", "bi-GÆN"],
            ["sing", "sang", "kuylamoq", "sæŋ"],
            ["win", "won", "yutmoq, g'alaba qozonmoq", "wan"],
            ["break", "broke", "sindirmoq, sinmoq", "brouk"],
            ["forget", "forgot", "unutmoq", "fə-GOT"],
            ["wear", "wore", "kiymoq, kiyib yurmoq", "wo:"],
            ["catch", "caught", "tutmoq, ushlamoq; (transportga) ulgurmoq", "ko:t"],
            ["fall", "fell", "yiqilmoq, tushmoq", "fel"],
          ],
          speak: [0, 1],
        },
        { t: "tip", tone: "warn", md: "**fall – fell** va **feel – felt** ni adashtirmang! *I **fell*** = yiqildim, *I **felt*** = his qildim. Bitta harf — butunlay boshqa ma'no." },
        { t: "check", ex: { k: "fill", q: "The concert ___ at eight o'clock. (begin)", a: ["began"], uz: "Konsert soat sakkizda boshlandi.", why: "**begin – began**." } },
      ],
    },
    {
      title: "Naqshlar va talaffuz",
      blocks: [
        {
          t: "table", head: ["Naqsh", "Fe'llar"],
          rows: [
            ["i → a (\"æ\")", "swim → swam, begin → began, sing → sang (+ drink → drank)"],
            ["u → a", "run → ran"],
            ["→ o", "break → broke, forget → forgot, wear → wore"],
            ["→ -aught (\"o:t\")", "catch → caught (+ teach → taught)"],
            ["boshqacha", "win → won, fall → fell"],
          ],
        },
        {
          t: "sounds", items: [
            { label: "won", say: "won", uz: "**\"wan\"** — *one* (bir) so'zi bilan **bir xil** eshitiladi! ❌ \"won\" deb o'qilmaydi.", examples: ["won", "one", "We won!"] },
            { label: "caught", say: "caught", uz: "**\"ko:t\"** — *taught, bought* bilan qofiyadosh. **gh** o'qilmaydi.", examples: ["caught", "taught"] },
            { label: "swam / sang / ran", say: "swam, sang, ran", uz: "Keng **\"æ\"** — og'izni keng ochib, \"a\" va \"e\" o'rtasida: *cat* dagi kabi.", examples: ["swam", "sang", "ran"] },
            { label: "wore", say: "wore", uz: "**\"wo:\"** — *r* Britaniya talaffuzida eshitilmaydi.", examples: ["wear", "wore"] },
          ],
        },
        { t: "check", ex: { k: "listen", say: "caught", opts: ["cut", "caught", "cat"], a: 1, why: "\"ko:t\" — **caught**." } },
      ],
    },
    {
      title: "O'zgarmaydigan fe'llar va iboralar",
      blocks: [
        { t: "p", md: "Ba'zi noto'g'ri fe'llar o'tgan zamonda **umuman o'zgarmaydi**. Zamonni vaqt so'zidan yoki egadan bilasiz:" },
        {
          t: "table", head: ["V1 = V2", "Misol", "O'zbekcha"],
          rows: [
            ["put", "I put my keys on the table last night.", "Kecha kalitlarimni stolga qo'ydim."],
            ["cut", "She cut the cake yesterday.", "U kecha tortni kesdi."],
            ["cost", "The tickets cost 100,000 sums.", "Chiptalar 100 000 so'm turdi."],
            ["hit", "The ball hit the window.", "To'p derazaga tegdi."],
          ],
          speak: [1],
        },
        { t: "tip", tone: "info", md: "Diqqat: *She **cuts*** (hozirgi, -s bor) va *She **cut*** (o'tgan) — farq faqat **-s** da!" },
        {
          t: "table", head: ["Ibora", "O'tgan zamonda", "O'zbekcha"],
          rows: [
            ["win a game / a prize", "won the game", "o'yinda yutmoq / sovrin yutmoq"],
            ["catch a bus / a cold", "caught the bus / a cold", "avtobusga ulgurmoq / shamollamoq"],
            ["break my arm / a glass", "broke my arm", "qo'limni sindirmoq"],
            ["fall asleep", "fell asleep", "uxlab qolmoq"],
            ["wear a suit / a dress", "wore a dress", "kostyum / ko'ylak kiymoq"],
          ],
          speak: [1],
        },
        { t: "check", ex: { k: "choice", q: "\"Kecha shamollab qoldim.\"", opts: ["I caught a cold yesterday.", "I catched a cold yesterday.", "I took a cold yesterday.", "I fell a cold yesterday."], a: 0, why: "**catch a cold → caught a cold**." } },
      ],
    },
    {
      title: "Bo'lim takrori: Past Simple bir sahifada",
      blocks: [
        {
          t: "table", head: ["", "be", "Boshqa fe'llar", "could"],
          rows: [
            ["+", "I was tired.", "I swam in the lake.", "I could swim."],
            ["−", "I wasn't tired.", "I didn't swim.", "I couldn't swim."],
            ["?", "Were you tired?", "Did you swim?", "Could you swim?"],
            ["Wh-?", "Why were you tired?", "Where did you swim?", "—"],
          ],
          speak: [1, 2, 3],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I didn't forget.", "Did you win?", "Where did they go?", "There were a lot of people.", "I couldn't sleep.", "We went by bus two days ago."] },
          bad: { title: "Xato", items: ["I didn't forgot.", "Did you won?", "Where they went?", "There was a lot of people.", "I couldn't slept.", "We went with bus before two days."] },
        },
        { t: "tip", tone: "good", md: "Oltin qoida: **did, didn't, could, couldn't** dan keyin doim **V1**. V2 faqat ijobiy gapda (*I swam*) va ega-savolda (*Who won?*)." },
        { t: "check", ex: { k: "choice", q: "Qaysi gap **xato**?", opts: ["Who won the match?", "Did you wore a suit?", "I forgot his birthday.", "She didn't fall."], a: 1, why: "**Did** + V1: *Did you **wear** a suit?*" } },
      ],
    },
    {
      title: "O'qing: Maktab sport kuni",
      blocks: [
        {
          t: "text", title: "Sports day",
          en: "Last Saturday there was a sports day at my son's school in Fergana. It began at nine, and all the parents came to watch.\nFirst, the children ran a 100-metre race. My son, Amir, ran very fast, but near the end he fell and cut his knee. Luckily, he didn't break anything! He got up and finished the race.\nThen there was a swimming competition. Amir's class swam really well and won a cup. In the afternoon, the girls sang Uzbek songs, and everybody wore the school colours — blue and white.\nI forgot my camera at home, so I couldn't take any photos. But I will never forget that day.",
          uz: "O'tgan shanba Farg'onadagi o'g'limning maktabida sport kuni bo'ldi. U soat to'qqizda boshlandi va barcha ota-onalar tomosha qilgani kelishdi.\nAvval bolalar 100 metrga yugurishdi. O'g'lim Amir juda tez yugurdi, lekin marraga yaqin yiqilib, tizzasini kesib oldi. Baxtimizga, hech narsasini sindirmadi! U o'rnidan turib, poygani tugatdi.\nKeyin suzish musobaqasi bo'ldi. Amirning sinfi juda yaxshi suzdi va kubok yutdi. Tushdan keyin qizlar o'zbek qo'shiqlarini kuylashdi, hamma maktab ranglarida — ko'k va oq kiyimda edi.\nMen fotoapparatimni uyda unutib qoldirdim, shuning uchun birorta ham surat ololmadim. Lekin bu kunni hech qachon unutmayman.",
        },
        { t: "check", ex: { k: "tf", q: "Amir yiqildi va oyog'ini sindirdi.", a: false, why: "*…he fell and cut his knee. Luckily, he **didn't break** anything!*" } },
        { t: "check", ex: { k: "choice", q: "Why couldn't the writer take any photos?", opts: ["Because the camera broke.", "Because the writer forgot the camera at home.", "Because there was a power cut.", "Because Amir fell."], a: 1, why: "*I forgot my camera at home, so I couldn't take any photos.*" } },
      ],
    },
    {
      title: "Dialog: O'yin qanday o'tdi?",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Nigora", en: "How was the football match last night?", uz: "Kechagi futbol o'yini qanday o'tdi?" },
            { who: "Bahrom", en: "Amazing! We won 3–2!", uz: "Zo'r! 3:2 hisobida yutdik!" },
            { who: "Nigora", en: "Who scored the goals?", uz: "Gollarni kim urdi?" },
            { who: "Bahrom", en: "Ulugbek scored two, and I scored one. But the game began badly — we were 0–2 after twenty minutes.", uz: "Ulug'bek ikkita, men bitta urdim. Lekin o'yin yomon boshlandi — yigirma daqiqadan keyin 0:2 edi." },
            { who: "Nigora", en: "Did you celebrate after the match?", uz: "O'yindan keyin nishonladinglarmi?" },
            { who: "Bahrom", en: "Yes! We went to a café and sang songs. I fell asleep at two in the morning!", uz: "Ha! Kafega borib, qo'shiq aytdik. Tungi soat ikkida uxlab qoldim!" },
            { who: "Nigora", en: "No wonder you look tired!", uz: "Charchagan ko'rinishing bejiz emas ekan!" },
          ],
        },
        { t: "check", ex: { k: "fill", q: "Who ___ the goals? — Ulugbek and Bahrom. (score)", a: ["scored"], why: "Ega so'raladi (**Who**) → **did** yo'q, fe'l V2: *Who **scored**…?*" } },
      ],
    },
  ],
  words: [
    { en: "swim – swam", uz: "suzmoq", ipa: "swɪm – swæm", pos: "verb", ex: "We swam in Charvak Lake.", exUz: "Chorvoq ko'lida suzdik." },
    { en: "run – ran", uz: "yugurmoq", ipa: "rʌn – ræn", pos: "verb", ex: "He ran to the bus stop.", exUz: "U bekatga yugurdi." },
    { en: "begin – began", uz: "boshlamoq, boshlanmoq", ipa: "bɪˈɡɪn – bɪˈɡæn", pos: "verb", ex: "The lesson began at nine.", exUz: "Dars soat to'qqizda boshlandi." },
    { en: "sing – sang", uz: "kuylamoq, qo'shiq aytmoq", ipa: "sɪŋ – sæŋ", pos: "verb", ex: "She sang at her sister's wedding.", exUz: "U opasining to'yida qo'shiq kuyladi." },
    { en: "cut – cut", uz: "kesmoq; (qo'lni) kesib olmoq", ipa: "kʌt – kʌt", pos: "verb", ex: "She cut the cake into eight pieces.", exUz: "U tortni sakkiz bo'lakka kesdi." },
    { en: "break – broke", uz: "sindirmoq, sinmoq", ipa: "breɪk – brəʊk", pos: "verb", ex: "I broke my phone screen.", exUz: "Telefonim ekranini sindirib qo'ydim." },
    { en: "forget – forgot", uz: "unutmoq", ipa: "fəˈɡet – fəˈɡɒt", pos: "verb", ex: "I forgot my umbrella.", exUz: "Soyabonimni unutib qoldirdim." },
    { en: "wear – wore", uz: "kiymoq, kiyib yurmoq", ipa: "weə – wɔː", pos: "verb", ex: "She wore a beautiful atlas dress.", exUz: "U chiroyli atlas ko'ylak kiygan edi." },
    { en: "catch – caught", uz: "tutmoq; ulgurmoq; (kasal) yuqtirmoq", ipa: "kætʃ – kɔːt", pos: "verb", ex: "We caught the last train.", exUz: "Oxirgi poyezdga ulgurdik." },
    { en: "fall – fell", uz: "yiqilmoq, tushmoq", ipa: "fɔːl – fel", pos: "verb", ex: "My little brother fell off his bike.", exUz: "Ukam velosipeddan yiqildi." },
  ],
  practice: [
    { k: "listen", say: "We won the match.", opts: ["We want the match.", "We won the match.", "We watched the match."], a: 1, why: "\"wan\" — **won**." },
    { k: "listen", say: "She fell.", opts: ["She fell.", "She felt.", "She fills."], a: 0, why: "**fell** — oxirida *t* yo'q." },
    { k: "listen", say: "The film began at seven.", opts: ["The film begins at seven.", "The film began at seven.", "The film begun at seven."], a: 1 },
    { k: "match", pairs: [["swim", "swam"], ["run", "ran"], ["begin", "began"], ["sing", "sang"], ["win", "won"]] },
    { k: "match", pairs: [["break", "broke"], ["forget", "forgot"], ["wear", "wore"], ["catch", "caught"], ["fall", "fell"]] },
    { k: "fill", q: "I ___ my homework at home, so the teacher was angry. (forget)", a: ["forgot"] },
    { k: "fill", q: "He ___ a white shirt to the wedding. (wear)", a: ["wore"] },
    { k: "fill", q: "Did you ___ the 8:15 bus? — No, I missed it. (catch)", a: ["catch"], why: "**Did** + V1." },
    { k: "fill", q: "The glass fell and ___. (break)", a: ["broke"], uz: "Stakan tushib, sindi." },
    { k: "choice", q: "\"Bolaligimda daryoda suzardik.\"", opts: ["When I was a child, we swimmed in the river.", "When I was a child, we swam in the river.", "When I was a child, we swum in the river.", "When I was a child, we swim in the river."], a: 1, why: "**swim – swam**." },
    { k: "choice", q: "Qaysi juftlik **xato**?", opts: ["put – put", "cost – cost", "cut – cutted", "hit – hit"], a: 2, why: "**cut – cut** — o'zgarmaydi." },
    { k: "tf", q: "**won** (yutdi) va **one** (bir) bir xil talaffuz qilinadi.", a: true, why: "Ikkalasi ham **\"wan\"**." },
    { k: "tf", q: "*She didn't sang at the party.* — to'g'ri gap.", a: false, why: "**didn't** + V1: *She didn't **sing**…*" },
    { k: "order", uz: "Kecha qaysi jamoa yutdi?", words: ["Which", "team", "won", "yesterday?"], extra: ["did", "win"] },
    { k: "order", uz: "U (he) televizor oldida uxlab qoldi.", words: ["He", "fell", "asleep", "in", "front", "of", "the", "TV"], extra: ["felt", "sleep"] },
    { k: "translate", uz: "Men soyabonimni unutdim.", a: ["I forgot my umbrella", "I've forgotten my umbrella", "I have forgotten my umbrella"] },
    { k: "speak", say: "Our team won the match, and we sang all the way home.", uz: "Jamoamiz o'yinda yutdi va uygacha qo'shiq aytib bordik." },
  ],
  quiz: [
    { k: "choice", q: "Yesterday it ___ to rain at five.", opts: ["begun", "began", "beginned", "begins"], a: 1 },
    { k: "choice", q: "Javob: *\"Our team won.\"* Savol:", opts: ["Which team winned?", "Which team won?", "Which team did won?", "Which team win?"], a: 1, why: "Ega so'raladi → **did** yo'q, V2: *Which team **won**?*" },
    { k: "choice", q: "Qaysi gap **to'g'ri**?", opts: ["There was many people at the concert.", "We didn't caught the train.", "I couldn't find my keys, so I was late.", "Where you bought this dress?"], a: 2, why: "Qolganlari: *There **were** many people; didn't **catch**; Where **did you buy**…?*" },
    { k: "fill", q: "My grandmother ___ off a chair and broke her arm. (fall)", a: ["fell"] },
    { k: "fill", q: "We ___ in the sea every day on holiday. (swim)", a: ["swam"] },
    { k: "fill", q: "Did you ___ a jacket? It was cold yesterday. (wear)", a: ["wear"] },
    { k: "listen", say: "I caught a cold.", opts: ["I caught a cold.", "I got a coat.", "I cut a cold."], a: 0 },
    { k: "tf", q: "Sport kunida Amir yiqildi, lekin poygani tugatdi.", a: true, why: "*He got up and finished the race.*" },
    { k: "order", uz: "Men telefonimni sindirib qo'ydim va hech kimga qo'ng'iroq qila olmadim.", words: ["I", "broke", "my", "phone,", "so", "I", "couldn't", "call", "anybody"], extra: ["breaked", "called"] },
    { k: "translate", uz: "Bolalar maktabgacha yugurishdi.", a: ["The children ran to school", "The kids ran to school", "Children ran to school"] },
  ],
  summary: [
    "Yangi fe'llar: **swim – swam, run – ran, begin – began, sing – sang, win – won** (\"wan\").",
    "**break – broke, forget – forgot, wear – wore, catch – caught** (\"ko:t\"), **fall – fell** (*felt* emas!).",
    "O'zgarmaydiganlar: **put, cut, cost, hit** — vaqt so'zidan bilinadi.",
    "Oltin qoida: **did / didn't / could / couldn't + V1**; V2 — ijobiy gapda va *Who won?* kabi ega-savollarda.",
    "Hikoya: vaqt so'zlari (**ago, last, later**) + **there was / were** + **and, but, so, because**.",
  ],
  homework: "Butun bo'limdagi 25 ta yangi fe'lni (2-, 5-, 7-, 8-darslar) kartochkalarda takrorlang. So'ng \"Hayotimdagi esda qolarli kun\" mavzusida 12–15 gapli hikoya yozing: kamida 8 ta noto'g'ri fe'l, **there was / were**, **couldn't**, bitta Wh-savol va **so / because** ishlatilsin. Hikoyani ovoz chiqarib yozib oling va eshiting.",
};

export default lesson;
