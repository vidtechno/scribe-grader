import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u30-l5",
  title: "Arts, culture and travel",
  titleUz: "San'at, madaniyat va sayohat: so'zlar va birikmalar",
  goal: "San'at, madaniyat va sayohat haqida B2 darajada gapirasiz va yozasiz: *exhibition, masterpiece, customs, folklore, craftsmanship, breathtaking, vibrant, steeped in history, overrated, restore*. **Collocation** larni (*hold an exhibition, restore a painting, a vibrant atmosphere*) to'g'ri ishlatasiz va **customs / custom**, **folklore** (sanalmaydigan ot) kabi xatolardan qochasiz.",
  slides: [
    {
      title: "San'at va muzey: asosiy so'zlar",
      blocks: [
        { t: "p", md: "B1 da *museum, gallery, painting* kabi so'zlarni bilasiz. B2 da fikringizni aniqroq va chiroyli bildirish kerak: IELTS Speaking dagi «Describe a museum or gallery you visited» yoki Writing dagi madaniyat mavzusi uchun quyidagi so'zlar kerak bo'ladi." },
        {
          t: "table", head: ["So'z", "Ma'nosi", "Misol"], speak: [0, 2],
          rows: [
            ["exhibition", "ko'rgazma", "The gallery is holding an exhibition of modern photography."],
            ["masterpiece", "durdona asar", "Many critics call this painting a masterpiece."],
            ["craftsmanship", "hunarmandlik mahorati", "The craftsmanship of the carved doors is amazing."],
            ["restore", "tiklamoq, restavratsiya qilmoq", "They restored the old palace in only two years."],
          ],
        },
        { t: "tip", tone: "info", md: "**Craftsmanship** sanalmaydigan ot: *a craftsmanship* deb bo'lmaydi. *Exhibition* sanaladigan: *an exhibition, two exhibitions*. Ko'rgazma haqida fe'l: **hold / stage / put on an exhibition** (*make an exhibition* — xato)." },
        { t: "check", ex: { k: "choice", q: "The city museum will ___ an exhibition of local crafts next month.", opts: ["hold", "make", "do", "build"], a: 0, why: "Collocation: **hold an exhibition** (shuningdek *stage, put on*)." } },
        { t: "check", ex: { k: "choice", q: "Which word means «durdona asar»?", opts: ["masterpiece", "exhibition", "craftsmanship", "customs"], a: 0, why: "**masterpiece** = eng yuksak, mukammal asar." } },
      ],
    },
    {
      title: "Madaniyat va an'analar",
      blocks: [
        { t: "p", md: "**Customs** — jamiyatda qabul qilingan **odat-urf**: *It is the custom to take off your shoes.* **Folklore** — xalq og'zaki ijodi: ertaklar, rivoyatlar, qo'shiqlar, marosimlar. **Tradition** esa avloddan avlodga o'tadigan odat." },
        {
          t: "examples", items: [
            { en: "In some countries, it is the custom to bring a gift when you visit a family.", uz: "Ba'zi mamlakatlarda oilaga mehmonga borganda sovg'a olib borish odat.", note: "Birlik: **a custom, the custom**." },
            { en: "Local customs vary from region to region.", uz: "Mahalliy urf-odatlar hududdan hududga farq qiladi.", note: "Ko'plik: **customs**." },
            { en: "Folklore is an important part of a country's culture.", uz: "Folklor mamlakat madaniyatining muhim qismidir.", note: "**Folklore** sanalmaydi: *folklores* emas." },
            { en: "At the airport, you must show your passport to the customs officer.", uz: "Aeroportda bojxona xodimiga pasportingizni ko'rsatishingiz kerak.", note: "**the customs** — bojxona (**-s** bilan)." },
          ],
        },
        { t: "tip", tone: "warn", md: "**Custom** (odat-urf) va **customs** (bojxona) ning shakli bir xil, ma'nosi boshqa. *Customs officer* — bojxona xodimi, *custom officer* emas. **Habit** — shaxsiy odat (*a bad habit*), **custom** — jamiyat odati." },
        { t: "check", ex: { k: "fill", q: "Traditional stories and songs are part of the country's ___. (xalq ijodi)", a: ["folklore"], uz: "An'anaviy hikoyalar va qo'shiqlar mamlakat folklorining bir qismi.", why: "Xalq og'zaki ijodi — **folklore** (sanalmaydi)." } },
        { t: "check", ex: { k: "choice", q: "Which sentence is correct?", opts: ["The customs officer checked our bags.", "The custom officer checked our bags.", "The customs officers checks our bags.", "The custom's officer checked our bags."], a: 0, why: "Bojxona — **customs** (-s bilan): *the customs officer*." } },
      ],
    },
    {
      title: "Baho beruvchi sifatlar va tayyor iboralar",
      blocks: [
        { t: "p", md: "B1 da *beautiful, nice, interesting* ko'p ishlatilgan. B2 da ularni **aniqroq, kuchliroq** sifatlar bilan almashtiring:" },
        {
          t: "table", head: ["So'z", "Ma'nosi", "Qaysi otlar bilan"], speak: [0],
          rows: [
            ["breathtaking", "nafas olishni to'xtatadigan darajada chiroyli", "views, scenery, beauty"],
            ["vibrant", "jonli, rang-barang, hayotga to'la", "a vibrant city / atmosphere / colours"],
            ["steeped in history", "tarixga boy, tarix bilan sug'orilgan", "a town, a castle, a region"],
            ["overrated", "haddan tashqari maqtalgan", "a film, a restaurant, an attraction"],
          ],
        },
        { t: "tip", tone: "info", md: "**Breathtaking** — kuchli (*extreme*) sifat. Uni *very* bilan ishlatmaymiz: *absolutely breathtaking, really breathtaking* aytish mumkin. Salbiy baho uchun **overrated** (ma'nosi: «aslida unchalik yaxshi emas»)." },
        {
          t: "examples", items: [
            { en: "The view from the mountain top was absolutely breathtaking.", uz: "Tog' cho'qqisidan ko'rinish nihoyatda ajoyib edi." },
            { en: "The old town has a vibrant atmosphere, especially in the evening.", uz: "Eski shaharda, ayniqsa kechqurun, jonli muhit hukm suradi." },
            { en: "The whole region is steeped in history.", uz: "Butun hudud tarixga boy." },
            { en: "I thought the famous restaurant was overrated: the food was average.", uz: "Mashhur restoran haddan tashqari maqtalgan, deb o'yladim: taomlar o'rtacha edi." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "The film got excellent reviews, but I thought it was ___. It was just average.", opts: ["overrated", "breathtaking", "vibrant", "restored"], a: 0, why: "Maqtalganidan past — **overrated**." } },
        { t: "check", ex: { k: "fix", wrong: "The castle is steeped on history.", a: ["The castle is steeped in history."], hint: "predlog", why: "Ibora: **steeped in history**." } },
      ],
    },
    {
      title: "Collocationlar: qaysi fe'l qaysi ot bilan",
      blocks: [
        { t: "p", md: "Til o'rganishda eng ko'p xato **mos kelmaydigan fe'l + ot** birikmalarida bo'ladi. Ularni **butun birikma** sifatida yodlang:" },
        {
          t: "table", head: ["Birikma", "Misol"], speak: [0],
          rows: [
            ["hold / stage / put on an exhibition", "The museum is staging a major exhibition next spring."],
            ["stage a performance", "The students staged a performance of a folk tale."],
            ["restore a painting / a building", "Experts restored the damaged painting."],
            ["preserve heritage", "We must preserve our cultural heritage."],
            ["a vibrant atmosphere", "The market has a vibrant atmosphere."],
            ["breathtaking views", "The hotel offers breathtaking views of the valley."],
            ["off the beaten track", "We prefer places off the beaten track."],
          ],
        },
        { t: "p", md: "*Heritage* va *off the beaten track* B1 da uchragan; bu yerda ularni yangi birikmalar bilan bog'lab ishlating." },
        { t: "check", ex: { k: "match", pairs: [["stage", "a performance"], ["restore", "an old painting"], ["preserve", "cultural heritage"], ["hold", "an exhibition"]] } },
        { t: "check", ex: { k: "choice", q: "Experts spent two years trying to ___ the damaged mural.", opts: ["restore", "stage", "hold", "export"], a: 0, why: "Buzilgan asarni tiklash: **restore**." } },
      ],
    },
    {
      title: "Tipik xatolar (o'zbek tilidan interferensiya)",
      blocks: [
        { t: "p", md: "O'zbek tilida *ko'rgazma* uchun bitta so'z bor va *folklor* ko'plikda ishlatilmaydi. Inglizcha so'zlarni tanlashda quyidagi xatolar ko'p uchraydi:" },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["The gallery held a new exhibition.", "The folklore of this region is rich.", "The customs officer checked our bags.", "The castle is steeped in history."] },
          bad: { title: "Xato", items: ["The gallery made a new exhibition.", "The folklores of this region are rich.", "The custom officer checked our bags.", "The castle is steeped on history."] },
        },
        { t: "tip", tone: "warn", md: "**1)** *Ko'rgazma* bilan *make / do* emas, **hold / stage / put on**. **2)** **Folklore**, **craftsmanship** — sanalmaydigan otlar: *-s* yo'q, fe'l birlikda. **3)** **Customs officer**. **4)** Predlog: **steeped in**." },
        { t: "check", ex: { k: "fix", wrong: "The gallery made a new exhibition last month.", a: ["The gallery held a new exhibition last month.", "The gallery staged a new exhibition last month.", "The gallery opened a new exhibition last month.", "The gallery put on a new exhibition last month."], hint: "fe'l", why: "Ko'rgazma bilan: **hold / stage / put on / open**." } },
        { t: "check", ex: { k: "fix", wrong: "The folklores of this region are very interesting.", a: ["The folklore of this region is very interesting."], hint: "sanalmaydigan ot", why: "**folklore** sanalmaydi: *folklore ... is*." } },
        { t: "check", ex: { k: "fix", wrong: "The custom officer asked to see our passports.", a: ["The customs officer asked to see our passports."], hint: "bojxona", why: "Bojxona: **customs**." } },
        { t: "check", ex: { k: "tf", q: "*She admired the craftsmanships of the old doors.* — bu gap to'g'ri.", a: false, why: "**Craftsmanship** sanalmaydi: *the craftsmanship of the old doors*." } },
      ],
    },
    {
      title: "O'qing: Tog'dagi shaharcha",
      blocks: [
        {
          t: "text", title: "A town in the hills", voice: "emma",
          en: "Last autumn I spent a week in a small town that is steeped in history. The old centre has a vibrant atmosphere, especially on market days, when farmers sell fruit and handmade crafts. The main square hosts an exhibition of local art, and the highlight is a painting that many people regard as a masterpiece. It was badly damaged in the past, but experts restored it carefully. I was struck by the craftsmanship of the wooden balconies, which are decorated with tiny flowers. One evening we watched a group of students stage a performance based on local folklore. The views from the hill above the town were breathtaking. Some guidebooks describe the castle as overrated, and to be honest, I agree: it is smaller than I expected. But the people and the customs made the trip unforgettable.",
          uz: "O'tgan kuzda tarixga boy kichik shaharchada bir hafta o'tkazdim. Eski markazda, ayniqsa bozor kunlari, jonli muhit hukm suradi: dehqonlar meva va qo'lda yasalgan hunarmandchilik buyumlarini sotadi. Asosiy maydonda mahalliy san'at ko'rgazmasi o'tkaziladi va uning eng yaxshi asari ko'pchilik durdona deb biladigan rasm. U o'tmishda jiddiy zarar ko'rgan, ammo mutaxassislar uni ehtiyotkorlik bilan tikladi. Menga yog'och balkonlarning mahorati ta'sir qildi: ular mayda gullar bilan bezatilgan. Bir kechasi talabalar guruhi mahalliy folklorga asoslangan tomosha qo'yganini ko'rdik. Shaharcha tepasidagi tepalikdan ko'rinish nihoyatda go'zal edi. Ba'zi qo'llanmalar qal'ani haddan tashqari maqtalgan deb ta'riflaydi va rostini aytsam, men ham rozi bo'laman: u kutganimdan kichikroq. Lekin odamlar va urf-odatlar sayohatni unutilmas qildi.",
        },
        { t: "check", ex: { k: "choice", q: "What does the writer think about the castle?", opts: ["It is smaller than expected.", "It is the best part of the trip.", "It is vibrant.", "It was restored recently."], a: 0, why: "*Overrated... it is smaller than I expected.*" } },
        { t: "check", ex: { k: "tf", q: "The painting in the square was never damaged.", a: false, why: "*It was badly damaged in the past, but experts restored it.*" } },
      ],
    },
    {
      title: "Dialog: Muzeyga tashrif",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Helen", en: "Did you go to the new exhibition at the city museum?", uz: "Shahar muzeyidagi yangi ko'rgazmaga bordingmi?" },
            { who: "Karim", en: "Yes, on Sunday. The craftsmanship of the old pottery was incredible.", uz: "Ha, yakshanba kuni. Qadimiy kulolchilik buyumlarining mahorati ajoyib edi." },
            { who: "Helen", en: "I heard that one piece is considered a masterpiece.", uz: "Ulardan biri durdona hisoblanishini eshitdim." },
            { who: "Karim", en: "Yes, and it was restored last year. Honestly, though, the famous mosaic in the hall is a bit overrated.", uz: "Ha, va u o'tgan yili tiklangan. Lekin rostini aytsam, zaldagi mashhur mozaika biroz haddan tashqari maqtalgan." },
            { who: "Helen", en: "Was it crowded?", uz: "Odam ko'p edimi?" },
            { who: "Karim", en: "Not really. There was a vibrant atmosphere in the café, though. A group of musicians played folk songs.", uz: "Unchalik emas. Lekin kafe jonli edi. Musiqachilar guruhi xalq qo'shiqlarini ijro etdi." },
            { who: "Helen", en: "I love folklore. I'll go next weekend.", uz: "Men folklorni yaxshi ko'raman. Kelasi dam olish kunlarida boraman." },
            { who: "Karim", en: "Good idea. The views from the museum roof are breathtaking, too.", uz: "Yaxshi fikr. Muzey tomidan ko'rinish ham ajoyib." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "What did Karim like about the café?", opts: ["The vibrant atmosphere and folk music", "The cheap food", "The quiet corners", "The exhibition inside"], a: 0, why: "*There was a vibrant atmosphere in the café... musicians played folk songs.*" } },
      ],
    },
  ],
  words: [
    { en: "exhibition", uz: "ko'rgazma", ipa: "ˌek.sɪˈbɪʃ.ən", pos: "noun", ex: "The exhibition attracted thousands of visitors.", exUz: "Ko'rgazma minglab tashrif buyuruvchini jalb qildi." },
    { en: "masterpiece", uz: "durdona asar", ipa: "ˈmɑː.stə.piːs", pos: "noun", ex: "The novel is considered a masterpiece of modern literature.", exUz: "Roman zamonaviy adabiyotning durdonasi hisoblanadi." },
    { en: "customs", uz: "urf-odatlar; bojxona", ipa: "ˈkʌs.təmz", pos: "noun", ex: "It is important to respect local customs.", exUz: "Mahalliy urf-odatlarni hurmat qilish muhim." },
    { en: "folklore", uz: "folklor, xalq og'zaki ijodi", ipa: "ˈfəʊk.lɔː", pos: "noun", ex: "The festival celebrates the folklore of the region.", exUz: "Festival hududning folklorini nishonlaydi." },
    { en: "breathtaking", uz: "nafasni qaytaradigan darajada go'zal", ipa: "ˈbreθˌteɪ.kɪŋ", pos: "adj", ex: "We stood in silence in front of the breathtaking scenery.", exUz: "Nihoyatda go'zal manzara oldida jim turdik." },
    { en: "vibrant", uz: "jonli, rang-barang", ipa: "ˈvaɪ.brənt", pos: "adj", ex: "The capital has a vibrant cultural life.", exUz: "Poytaxtda jonli madaniy hayot bor." },
    { en: "steeped in history", uz: "tarixga boy", ipa: "stiːpt ɪn ˈhɪs.tər.i", pos: "phrase", ex: "Samarkand is a city steeped in history.", exUz: "Samarqand tarixga boy shahar." },
    { en: "craftsmanship", uz: "hunarmandlik mahorati", ipa: "ˈkrɑːfts.mən.ʃɪp", pos: "noun", ex: "The craftsmanship of these carpets is outstanding.", exUz: "Bu gilamlarning mahorati ajoyib." },
    { en: "overrated", uz: "haddan tashqari maqtalgan", ipa: "ˌəʊ.vəˈreɪ.tɪd", pos: "adj", ex: "Many people say that this beach is overrated.", exUz: "Ko'p odamlar bu plyaj haddan tashqari maqtalgan, deydi." },
    { en: "restore", uz: "tiklamoq, restavratsiya qilmoq", ipa: "rɪˈstɔː", pos: "verb", ex: "The team will restore the old theatre by 2030.", exUz: "Jamoa eski teatrni 2030-yilgacha tiklaydi." },
  ],
  practice: [
    { k: "choice", q: "The gallery will ___ an exhibition of photographs in May.", opts: ["stage", "make", "do", "carry"], a: 0, why: "Collocation: **stage an exhibition**." },
    { k: "match", pairs: [["exhibition", "ko'rgazma"], ["masterpiece", "durdona asar"], ["craftsmanship", "hunarmandlik mahorati"], ["folklore", "xalq og'zaki ijodi"], ["overrated", "haddan tashqari maqtalgan"]] },
    { k: "fill", q: "The view from the top of the tower was absolutely ___. (nafas olishni to'xtatadigan)", a: ["breathtaking"], uz: "Minora tepasidan ko'rinish nihoyatda go'zal edi.", why: "Kuchli sifat: **breathtaking**." },
    { k: "listen", say: "The old town is steeped in history.", opts: ["The old town is steeped in history.", "The old town is stepped in history.", "The old town is deep in historic.", "The old town steeps on history."], a: 0, why: "Ibora: **steeped in history**." },
    { k: "fix", wrong: "The folklores of this region are rich.", a: ["The folklore of this region is rich."], hint: "sanalmaydigan ot", why: "**folklore** sanalmaydi." },
    { k: "choice", q: "It is the ___ in Japan to take off your shoes before entering a house.", opts: ["custom", "customs officer", "folklore", "exhibition"], a: 0, why: "Jamiyat odati: **custom** (birlik, *the custom to…*)." },
    { k: "tf", q: "*Customs officer* bojxona xodimini bildiradi.", a: true, why: "Bojxona: **customs** (-s bilan)." },
    { k: "order", uz: "Ular qadimiy saroyni tikladilar.", words: ["They", "restored", "the", "ancient", "palace."], extra: ["held", "restore"], why: "Binoni tiklash: **restore** (o'tgan zamon: *restored*)." },
    { k: "fill", q: "The painting was damaged in a fire, but experts managed to ___ it.", a: ["restore"], uz: "Rasm yong'inda zarar ko'rgan, lekin mutaxassislar uni tiklay oldi.", why: "**restore** = tiklamoq." },
    { k: "translate", uz: "Mahalliy urf-odatlarni hurmat qilish muhim.", a: ["It is important to respect local customs.", "It's important to respect local customs.", "It is important to respect the local customs.", "It's important to respect the local customs."], why: "**local customs** — urf-odatlar." },
    { k: "fix", wrong: "The custom officer asked to see my passport.", a: ["The customs officer asked to see my passport."], hint: "bojxona", why: "**customs officer**." },
    { k: "choice", q: "Everyone said the restaurant was fantastic, but I found it ___.", opts: ["overrated", "vibrant", "breathtaking", "restored"], a: 0, why: "Haddan tashqari maqtalgan: **overrated**." },
    { k: "dictation", say: "The craftsmanship of these carpets is outstanding.", uz: "Bu gilamlarning mahorati ajoyib.", why: "**craftsmanship** sanalmaydi: *is*." },
    { k: "fix", wrong: "The gallery made a new exhibition last week.", a: ["The gallery held a new exhibition last week.", "The gallery staged a new exhibition last week.", "The gallery opened a new exhibition last week.", "The gallery put on a new exhibition last week."], hint: "fe'l", why: "**hold / stage / put on** an exhibition." },
    { k: "translate", uz: "Bu shahar tarixga boy.", a: ["This city is steeped in history.", "The city is steeped in history.", "This town is steeped in history.", "The town is steeped in history."], why: "**steeped in history**." },
    { k: "speak", say: "The old town has a vibrant atmosphere, and the views are absolutely breathtaking.", uz: "Eski shaharda jonli muhit bor, ko'rinishlar esa nihoyatda go'zal." },
  ],
  quiz: [
    { k: "choice", q: "Which word describes a city full of life and colour?", opts: ["vibrant", "overrated", "restored", "steeped"], a: 0, why: "**vibrant** = jonli, rang-barang." },
    { k: "choice", q: "The theatre is going to ___ a performance of a traditional story.", opts: ["stage", "restore", "export", "attract to"], a: 0, why: "**stage a performance** = tomosha qo'ymoq." },
    { k: "fill", q: "Some people think the famous tower is ___: it is just a tall building.", a: ["overrated"], uz: "Ba'zilar mashhur minorani haddan tashqari maqtalgan deb o'ylaydi: u shunchaki baland bino.", why: "**overrated**." },
    { k: "fill", q: "Traditional music and stories are part of our ___.", a: ["folklore"], uz: "An'anaviy musiqa va hikoyalar bizning folklorimizning bir qismi.", why: "**folklore**." },
    { k: "fix", wrong: "The castle is steeped on history.", a: ["The castle is steeped in history."], hint: "predlog", why: "**steeped in history**." },
    { k: "choice", q: "Which sentence is correct?", opts: ["The craftsmanship of the doors is amazing.", "The craftsmanships of the doors are amazing.", "The craftsmanship of the doors are amazing.", "A craftsmanship of the doors is amazing."], a: 0, why: "**craftsmanship** sanalmaydi: *is*." },
    { k: "tf", q: "We can say *very breathtaking* in the same way as *very beautiful*.", a: false, why: "**Breathtaking** — kuchli sifat; *absolutely / really breathtaking* aytiladi." },
    { k: "order", uz: "Muzey ikki yil davomida rasmni tikladi.", words: ["The", "museum", "restored", "the", "painting", "over", "two", "years."], extra: ["held", "for"], alt: [["Over", "two", "years", "the", "museum", "restored", "the", "painting."]], why: "**restored** — o'tgan zamon." },
    { k: "translate", uz: "Ko'rgazma kelasi oy ochiladi.", a: ["The exhibition opens next month.", "The exhibition will open next month.", "The exhibition is opening next month.", "The exhibition starts next month.", "The exhibition will start next month."], why: "**exhibition** — ko'rgazma." },
    { k: "fix", wrong: "The folklores are very interesting.", a: ["The folklore is very interesting.", "Folklore is very interesting."], hint: "sanalmaydigan ot", why: "**folklore** ko'plikda ishlatilmaydi." },
    { k: "choice", q: "Which phrase refers to a work of the highest quality?", opts: ["a masterpiece", "an exhibition", "customs", "folklore"], a: 0, why: "**masterpiece** — durdona." },
  ],
  summary: [
    "San'at: **exhibition** (ko'rgazma), **masterpiece** (durdona), **craftsmanship** (mahorat, sanalmaydi), **restore** (tiklamoq).",
    "Madaniyat: **customs** (odat-urf; *the customs officer* — bojxona), **folklore** (sanalmaydi, *folklores* emas).",
    "Baho: **breathtaking** (kuchli sifat), **vibrant** (jonli), **steeped in history** (tarixga boy), **overrated** (haddan tashqari maqtalgan).",
    "Collocation: **hold / stage / put on an exhibition**, **stage a performance**, **restore a painting**; *make an exhibition* — xato.",
    "Predlog: ~~steeped on history~~ → **steeped in history**.",
  ],
  homework: "O'zingiz borgan yoki borishni xohlagan muzey, shahar yoki bayram haqida 100 so'zli matn yozing. Unda darsdagi kamida **7 ta** so'z yoki birikmani ishlating (*vibrant, steeped in history, hold an exhibition, breathtaking…*). Keyin matnda **folklore, craftsmanship** kabi sanalmaydigan otlarni -s bilan yozmaganingizni va fe'l birlikda ekanini tekshiring.",
};

export default lesson;
