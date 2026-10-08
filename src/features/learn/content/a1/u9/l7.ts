import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u9-l7",
  title: "Holidays & transport",
  titleUz: "Ta'til va transport: by bus, on foot",
  goal: "Ta'tilingiz va safaringiz haqida gapirib bera olasiz: **by bus / by train / on foot, took a taxi, got on / got off, flew, drove, rode, It took four hours, went sightseeing, stayed at a hotel**.",
  slides: [
    {
      title: "by + transport, lekin on foot",
      blocks: [
        { t: "p", md: "Qanday transportda borganimizni aytish uchun **by + transport nomi** ishlatamiz — **artiklsiz**:" },
        {
          t: "table", head: ["Inglizcha", "O'zbekcha"],
          rows: [
            ["by bus", "avtobusda"],
            ["by car", "mashinada"],
            ["by train", "poyezdda"],
            ["by plane / by air", "samolyotda"],
            ["by taxi", "taksida"],
            ["by metro", "metroda"],
            ["by bike", "velosipedda"],
            ["on foot", "piyoda"],
          ],
          speak: [0],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I go to work by bus.", "We went to Samarkand by train.", "She came on foot."] },
          bad: { title: "Xato", items: ["I go to work with bus.", "We went to Samarkand by the train.", "She came by foot."] },
        },
        { t: "tip", tone: "warn", md: "O'zbekchada \"avtobus **bilan**\" deymiz, shuning uchun ko'pchilik ❌ *with bus* deydi. To'g'risi — **by bus**. \"Piyoda\" esa **on foot** (❌ *by foot*). Lekin egalik yoki artikl bo'lsa, **by** ishlatilmaydi: *in **my dad's** car, on **the** 8 o'clock train*." },
        { t: "check", ex: { k: "choice", q: "\"Biz Buxoroga poyezdda bordik.\"", opts: ["We went to Bukhara with train.", "We went to Bukhara by the train.", "We went to Bukhara by train.", "We went to Bukhara on train."], a: 2, why: "**by train** — artiklsiz." } },
      ],
    },
    {
      title: "Transport fe'llari: take, get on, fly, drive, ride",
      blocks: [
        { t: "p", md: "**by bus** o'rniga ko'pincha fe'l bilan aytamiz. Uchta yangi noto'g'ri fe'lga e'tibor bering — **fly, drive, ride**:" },
        {
          t: "table", head: ["V1", "V2", "Nima bilan", "Misol"],
          rows: [
            ["take", "took", "a bus, a taxi, the metro", "I took a taxi to the airport."],
            ["fly", "flew", "to + joy (samolyotda)", "We flew to Istanbul."],
            ["drive", "drove", "a car, to + joy", "My father drove to Chimgan."],
            ["ride", "rode", "a bike, a horse, a camel", "The children rode camels."],
            ["walk", "walked", "to + joy", "We walked to the old town."],
          ],
          speak: [0, 1, 3],
        },
        {
          t: "sounds", items: [
            { label: "flew", say: "flew", uz: "**\"flu:\"** — *grew, knew* bilan qofiyadosh.", examples: ["fly", "flew"] },
            { label: "drove / rode", say: "drove, rode", uz: "**\"drouv\", \"roud\"** — \"ou\" tovushi. *road* (yo'l) va **rode** bir xil eshitiladi!", examples: ["drove", "rode", "road"] },
          ],
        },
        { t: "check", ex: { k: "fill", q: "Last summer we ___ to Dubai. (fly)", a: ["flew"], why: "**fly – flew** (\"flu:\")." } },
      ],
    },
    {
      title: "get on / off va get in / out of",
      blocks: [
        { t: "p", md: "Transportga **chiqish** va **tushish** uchun ikki xil fe'l bor. Qoida oddiy: ichida **tik turib yursa bo'ladigan** katta transport — **on / off**; kichik mashina — **in / out of**." },
        {
          t: "table", head: ["Transport", "Chiqmoq", "Tushmoq"],
          rows: [
            ["bus, train, plane, metro, bike", "get on", "get off"],
            ["car, taxi", "get in / get into", "get out of"],
          ],
          speak: [1, 2],
        },
        {
          t: "examples", items: [
            { en: "We got on the train at nine.", uz: "Soat to'qqizda poyezdga chiqdik." },
            { en: "Get off at the next stop.", uz: "Keyingi bekatda tushing." },
            { en: "She got into the taxi and left.", uz: "U taksiga o'tirib ketdi." },
            { en: "I got out of the car and took a photo.", uz: "Mashinadan tushib, suratga oldim." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "We ___ the bus at Amir Temur Square.", opts: ["got out of", "got off", "got down", "went off"], a: 1, why: "Avtobusdan tushmoq — **get off**." } },
      ],
    },
    {
      title: "How did you get there? It took…",
      blocks: [
        { t: "p", md: "Safar haqida eng ko'p beriladigan ikki savol:" },
        {
          t: "table", head: ["Savol", "Javob"],
          rows: [
            ["How did you get there?", "We went by train. / We flew. / We drove."],
            ["How long did the journey take?", "It took about four hours."],
            ["How long did it take you?", "It took me twenty minutes on foot."],
          ],
          speak: [0, 1],
        },
        { t: "tip", tone: "info", md: "**get there** = u yerga yetib bormoq. **It took + vaqt** = \"… vaqt ketdi\": *It took (us) six hours.* Ega odatda **It** bo'ladi: ❌ *The way took six hours* emas." },
        { t: "check", ex: { k: "order", uz: "Yo'l bizga uch soat vaqt oldi.", words: ["It", "took", "us", "three", "hours"], extra: ["take", "was"] } },
      ],
    },
    {
      title: "Ta'til iboralari",
      blocks: [
        {
          t: "table", head: ["Ibora", "O'tgan zamonda", "O'zbekcha"],
          rows: [
            ["go on holiday", "went on holiday", "ta'tilga chiqmoq / dam olishga bormoq"],
            ["go abroad", "went abroad", "chet elga bormoq"],
            ["go sightseeing", "went sightseeing", "diqqatga sazovor joylarni ko'rmoq"],
            ["stay at a hotel / with friends", "stayed at a hotel", "mehmonxonada / do'stlarnikida qolmoq"],
            ["buy souvenirs", "bought souvenirs", "esdalik sovg'alari olmoq"],
            ["take photos", "took photos", "suratga olmoq"],
            ["have a great time", "had a great time", "ajoyib vaqt o'tkazmoq"],
          ],
          speak: [0, 1],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["We went on holiday to Turkey.", "They went abroad last year.", "We stayed at a small hotel."] },
          bad: { title: "Xato", items: ["We went to holiday to Turkey.", "They went to abroad last year.", "We stayed at hotel."] },
        },
        { t: "tip", tone: "warn", md: "**abroad** — o'zi \"chet elga / chet elda\" degani, oldiga **to** qo'yilmaydi (xuddi *home* kabi): *go abroad, live abroad*." },
        { t: "check", ex: { k: "fill", q: "In Khiva we went ___ and saw the old madrasahs.", a: ["sightseeing"], uz: "Xivada diqqatga sazovor joylarni aylandik va eski madrasalarni ko'rdik." } },
      ],
    },
    {
      title: "O'qing: Xorazmga sayohat",
      blocks: [
        {
          t: "text", title: "Our trip to Khiva",
          en: "Last May my family went on holiday to Khiva. First, we took the fast train from Tashkent to Bukhara. It took about four hours, and the journey was very comfortable.\nWe spent two days in Bukhara. Then my uncle drove us to Khiva. It took six hours, but the desert was beautiful.\nIn Khiva we stayed at a small hotel inside the old town, so we walked everywhere on foot. We went sightseeing, climbed a minaret and bought souvenirs. My little brother rode a camel!\nAt the end of the week, we flew home from Urgench. The flight took only an hour and a half.",
          uz: "O'tgan may oyida oilam bilan Xivaga dam olishga bordik. Avval Toshkentdan Buxorogacha tezyurar poyezdga chiqdik. Yo'l taxminan to'rt soat davom etdi va juda qulay bo'ldi.\nBuxoroda ikki kun qoldik. Keyin amakim bizni mashinada Xivaga olib bordi. Olti soat ketdi, lekin cho'l juda chiroyli edi.\nXivada eski shahar ichidagi kichik mehmonxonada qoldik, shuning uchun hamma joyga piyoda yurdik. Diqqatga sazovor joylarni aylandik, minoraga chiqdik va esdalik sovg'alari oldik. Ukam tuyaga mindi!\nHafta oxirida Urganchdan uyga samolyotda uchdik. Parvoz atigi bir yarim soat davom etdi.",
        },
        { t: "check", ex: { k: "choice", q: "How did the family get from Bukhara to Khiva?", opts: ["By train.", "By plane.", "By car.", "On foot."], a: 2, why: "*…my uncle drove us to Khiva.*" } },
        { t: "check", ex: { k: "tf", q: "Oila Toshkentga poyezdda qaytdi.", a: false, why: "*…we **flew** home from Urgench.* — samolyotda." } },
      ],
    },
    {
      title: "Dialog: Ta'til qanday o'tdi?",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Aziza", en: "Welcome back! Where did you go on holiday?", uz: "Xush kelibsan! Ta'tilda qayerga bording?" },
            { who: "Timur", en: "We went abroad — to Georgia!", uz: "Chet elga bordik — Gruziyaga!" },
            { who: "Aziza", en: "Wow! How did you get there?", uz: "Voy! U yerga qanday bordinglar?" },
            { who: "Timur", en: "We flew to Tbilisi. It took about four hours.", uz: "Tbilisiga samolyotda uchdik. Taxminan to'rt soat ketdi." },
            { who: "Aziza", en: "Where did you stay?", uz: "Qayerda qoldinglar?" },
            { who: "Timur", en: "With my friend's family. Then we drove to the mountains.", uz: "Do'stimning oilasinikida. Keyin mashinada tog'larga bordik." },
            { who: "Aziza", en: "Did you have a good time?", uz: "Yaxshi dam oldingizmi?" },
            { who: "Timur", en: "A great time! But I didn't ride a horse. I was too scared!", uz: "Ajoyib! Lekin otga minmadim. Juda qo'rqdim!" },
          ],
        },
        { t: "check", ex: { k: "fill", q: "Where ___ Timur stay in Georgia?", a: ["did"], why: "**Where + did + ega + V1**." } },
      ],
    },
  ],
  words: [
    { en: "camel", uz: "tuya", ipa: "ˈkæm.əl", pos: "noun", ex: "The children rode a camel in the desert.", exUz: "Bolalar cho'lda tuyaga minishdi." },
    { en: "fly – flew", uz: "uchmoq, samolyotda bormoq", ipa: "flaɪ – fluː", pos: "verb", ex: "We flew to Istanbul last summer.", exUz: "O'tgan yozda Istanbulga samolyotda uchdik." },
    { en: "drive – drove", uz: "(mashina) haydamoq, mashinada bormoq", ipa: "draɪv – drəʊv", pos: "verb", ex: "My dad drove us to the airport.", exUz: "Dadam bizni aeroportga mashinada olib bordi." },
    { en: "ride – rode", uz: "minmoq (velosiped, ot, tuya)", ipa: "raɪd – rəʊd", pos: "verb", ex: "I rode a camel in the desert.", exUz: "Cho'lda tuyaga mindim." },
    { en: "get on", uz: "(avtobus, poyezd, samolyotga) chiqmoq", ipa: "ˌɡet ˈɒn", pos: "phrasal verb", ex: "We got on the train at nine.", exUz: "Soat to'qqizda poyezdga chiqdik." },
    { en: "get off", uz: "(avtobus, poyezddan) tushmoq", ipa: "ˌɡet ˈɒf", pos: "phrasal verb", ex: "Get off at the next stop.", exUz: "Keyingi bekatda tushing." },
    { en: "go on holiday", uz: "ta'tilga / dam olishga bormoq", ipa: "ˌɡəʊ ɒn ˈhɒl.ə.deɪ", pos: "phrase", ex: "We went on holiday to Turkey.", exUz: "Biz Turkiyaga dam olishga bordik." },
    { en: "go sightseeing", uz: "diqqatga sazovor joylarni aylanmoq", ipa: "ˌɡəʊ ˈsaɪtˌsiː.ɪŋ", pos: "phrase", ex: "We went sightseeing in Samarkand.", exUz: "Samarqandda tarixiy joylarni aylandik." },
    { en: "souvenir", uz: "esdalik sovg'asi", ipa: "ˌsuː.vəˈnɪə", pos: "noun", ex: "I bought a souvenir for my mum.", exUz: "Onamga esdalik sovg'asi oldim." },
    { en: "comfortable", uz: "qulay, rohat", ipa: "ˈkʌm.fə.tə.bəl", pos: "adj", ex: "The train was fast and comfortable.", exUz: "Poyezd tez va qulay edi." },
  ],
  practice: [
    { k: "listen", say: "We drove to Chimgan.", opts: ["We drove to Chimgan.", "We drive to Chimgan.", "We rode to Chimgan."], a: 0, why: "\"drouv\" — **drove**." },
    { k: "listen", say: "She went abroad.", opts: ["She went aboard.", "She went abroad.", "She went to a road."], a: 1 },
    { k: "match", pairs: [["fly", "flew"], ["drive", "drove"], ["ride", "rode"], ["take", "took"], ["get", "got"]] },
    { k: "match", pairs: [["on foot", "piyoda"], ["souvenir", "esdalik sovg'asi"], ["abroad", "chet elda"], ["get off", "tushmoq"], ["go sightseeing", "diqqatga sazovor joylarni aylanmoq"]] },
    { k: "choice", q: "\"U ishga piyoda boradi.\"", opts: ["He goes to work by foot.", "He goes to work on foot.", "He goes to work with foot.", "He goes to work on feet."], a: 1, why: "\"Piyoda\" — **on foot**." },
    { k: "choice", q: "She ___ the taxi and thanked the driver.", opts: ["got off", "got out of", "got down", "went off"], a: 1, why: "Taksi — kichik mashina → **get out of**." },
    { k: "choice", q: "Qaysi gap **to'g'ri**?", opts: ["We went to abroad.", "We went on holiday to Italy.", "We went to holiday to Italy.", "We went on the holiday in abroad."], a: 1 },
    { k: "fill", q: "My grandfather ___ a horse when he was young. (ride)", a: ["rode"] },
    { k: "fill", q: "We went to Tashkent ___ train.", a: ["by"] },
    { k: "fill", q: "How long did the journey ___? — Five hours.", a: ["take"], why: "**did** + V1: *take*." },
    { k: "fill", q: "It ___ us two hours to get there. (take)", a: ["took"] },
    { k: "tf", q: "*I came by my brother's car.* — to'g'ri gap.", a: false, why: "Egalik bo'lsa, **by** emas: *I came **in** my brother's car.*" },
    { k: "order", uz: "Biz keyingi bekatda tushdik.", words: ["We", "got", "off", "at", "the", "next", "stop"], extra: ["out", "on"] },
    { k: "order", uz: "Ular Samarqandda mehmonxonada qolishdi.", words: ["They", "stayed", "at", "a", "hotel", "in", "Samarkand"], extra: ["by", "stay"], alt: [["They", "stayed", "in", "a", "hotel", "in", "Samarkand"], ["In", "Samarkand", "they", "stayed", "at", "a", "hotel"]] },
    { k: "translate", uz: "Biz Istanbulga samolyotda uchdik.", a: ["We flew to Istanbul", "We went to Istanbul by plane", "We went to Istanbul by air", "We travelled to Istanbul by plane", "We traveled to Istanbul by plane"] },
    { k: "speak", say: "We took the train to Bukhara. It took about four hours.", uz: "Buxoroga poyezdda bordik. Taxminan to'rt soat ketdi." },
  ],
  quiz: [
    { k: "choice", q: "\"Ishga metroda boraman.\"", opts: ["I go to work with metro.", "I go to work by the metro.", "I go to work by metro.", "I go to work on metro."], a: 2 },
    { k: "choice", q: "We ___ the plane at 6 a.m.", opts: ["got into", "got on", "got in", "got out"], a: 1, why: "Samolyot — katta transport → **get on**." },
    { k: "choice", q: "Last year they ___ to Malaysia. It took eight hours.", opts: ["flied", "flew", "flown", "fly"], a: 1, why: "**fly – flew**." },
    { k: "fill", q: "My uncle ___ us to the station in his car. (drive)", a: ["drove"] },
    { k: "fill", q: "Did you buy any ___? — Yes, a small plate and a hat.", a: ["souvenirs", "souvenir"], uz: "Esdalik sovg'alari oldingmi? — Ha, kichkina likopcha va shapka." },
    { k: "fill", q: "How did you get to the old town? — We walked. We went on ___.", a: ["foot"] },
    { k: "listen", say: "How did you get there?", opts: ["How did you get there?", "How did you get here?", "Who did you get there?"], a: 0 },
    { k: "tf", q: "Xivaga sayohatda oila Buxorodan Xivaga mashinada bordi va yo'l olti soat davom etdi.", a: true, why: "*…my uncle drove us to Khiva. It took six hours…*" },
    { k: "order", uz: "Ukam tuyaga mindi.", words: ["My", "brother", "rode", "a", "camel"], extra: ["ride", "rided"] },
    { k: "translate", uz: "U (she) chet elda ishlaydi.", a: ["She works abroad", "She is working abroad", "She's working abroad"] },
  ],
  summary: [
    "**by bus / car / train / plane / taxi / metro** — artiklsiz; piyoda — **on foot** (❌ *by foot*, ❌ *with bus*).",
    "Yangi fe'llar: **fly – flew, drive – drove, ride – rode**; **took a taxi / the train**.",
    "**get on / off** — avtobus, poyezd, samolyot; **get in(to) / out of** — mashina, taksi.",
    "**How did you get there? — It took (us) four hours.** Ta'til: **went on holiday, went abroad, went sightseeing, stayed at a hotel, bought souvenirs**.",
  ],
  homework: "Eng yoqqan safaringiz haqida 8–10 gap yozing: qayerga bordingiz, qanday transportda (*by train, flew, drove*), yo'l qancha vaqt oldi (*It took…*), qayerda qoldingiz, nima ko'rdingiz va nima sotib oldingiz. Keyin uni 1 daqiqada og'zaki aytib bering.",
};

export default lesson;
