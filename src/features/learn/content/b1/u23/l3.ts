import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u23-l3",
  title: "Grammar bridge: conditionals and the passive",
  titleUz: "Grammatika ko'prigi: shart gaplar va majhul nisbat takrori",
  goal: "**Nol, birinchi, ikkinchi va uchinchi shart gaplarni** hamda **majhul nisbatni** (*is made, was built, will be done, has been repaired, must be finished*) aniq farqlaysiz va **If I will have time** yoki **It was happened** kabi xatolarni qilmaysiz.",
  slides: [
    {
      title: "To'rt xil shart gap",
      blocks: [
        { t: "p", md: "Shart gaplar **if** qismi va **natija** qismidan iborat. Qaysi zamonni tanlashimiz gapning **real yoki xayoliy** ekaniga bog'liq:" },
        {
          t: "table", head: ["Tur", "If qismi", "Natija", "Misol"], speak: [3],
          rows: [
            ["Zero (doimiy haqiqat)", "if + Present", "Present", "If you heat ice, it melts."],
            ["First (real kelajak)", "if + Present", "will + fe'l", "If it rains, we will stay at home."],
            ["Second (xayoliy hozir)", "if + Past", "would + fe'l", "If I had more time, I would learn Spanish."],
            ["Third (o'tgan, o'zgarmas)", "if + Past Perfect", "would have + V3", "If she had left earlier, she would have caught the train."],
          ],
        },
        { t: "tip", tone: "warn", md: "**if** dan keyin **will** va **would** ishlatilmaydi: ~~If I will have time, I will call you~~. To'g'risi: *If I have time, I will call you.* Ikkinchi shartda esa: ~~If I would know, I would tell you~~ emas, *If I knew, I would tell you.*" },
        { t: "check", ex: { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["If I will see him, I will tell him.", "If I see him, I will tell him.", "If I would see him, I would tell him.", "If I saw him, I will tell him."], a: 1, why: "Real kelajak: **if + Present**, **will + fe'l**." } },
      ],
    },
    {
      title: "If I were you…",
      blocks: [
        { t: "p", md: "Ikkinchi shart gapda xayoliy vaziyat haqida gapiramiz: hozir haqiqat emas, lekin tasavvur qilamiz. **be** fe'li barcha shaxslarda **were** bo'lishi mumkin:" },
        {
          t: "examples", items: [
            { en: "If I were you, I would ask for help.", uz: "Sizning o'rningizda bo'lsam, yordam so'rardim.", note: "Maslahat berishning eng ko'p ishlatiladigan qolipi." },
            { en: "If he lived closer, he would walk to work.", uz: "U yaqinroq yashasa, ishga piyoda borardi." },
            { en: "What would you do if you won a lot of money?", uz: "Ko'p pul yutib olsangiz, nima qilardingiz?" },
            { en: "If we had a car, we would drive to the lake.", uz: "Mashinamiz bo'lsa, ko'lga haydab borardik." },
          ],
        },
        { t: "p", md: "**Uchinchi shart** esa o'tgan va endi o'zgartirib bo'lmaydigan narsa haqida: afsus yoki tanqid." },
        {
          t: "examples", items: [
            { en: "If I had studied harder, I would have passed the exam.", uz: "Ko'proq o'qiganimda, imtihondan o'tgan bo'lardim.", note: "Aslida o'qimadim, o'tmadim." },
            { en: "If they hadn't missed the bus, they wouldn't have been late.", uz: "Avtobusga kechikmaganlarida, kech qolmagan bo'lardilar." },
          ],
        },
        { t: "tip", tone: "info", md: "Uchinchi shartda **would have** + V3 (qisqa: *would've*). **if** dan keyin **had** + V3 (*had studied*), ~~would have studied~~ emas." },
        { t: "check", ex: { k: "fill", q: "If I ___ you, I would take the job. (be)", a: ["were"], why: "*If I were you* — ikkinchi shart, barcha shaxslarda **were**." } },
        { t: "check", ex: { k: "choice", q: "If she ___ harder, she would have passed.", opts: ["studied", "had studied", "would study", "has studied"], a: 1, why: "Uchinchi shart: **if + had + V3**." } },
      ],
    },
    {
      title: "unless, as long as, in case",
      blocks: [
        { t: "p", md: "**If** o'rniga ba'zan boshqa so'zlar ishlatamiz. Ular ham birinchi shartdagidek **Present** zamon bilan keladi (kelajak ma'nosida):" },
        {
          t: "table", head: ["So'z", "Ma'nosi", "Misol"], speak: [2],
          rows: [
            ["unless", "agar … bo'lmasa (if not)", "We'll be late unless we hurry."],
            ["as long as / provided that", "faqat shu shart bilan", "You can borrow it as long as you return it."],
            ["in case", "…ehtimoli bo'lsa, ehtiyot uchun", "Take an umbrella in case it rains."],
            ["otherwise", "aks holda", "Hurry up. Otherwise, we'll miss the train."],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["Unless you hurry, you'll be late.", "Take a coat in case it gets cold.", "I'll go as long as you come with me."] },
          bad: { title: "Xato", items: ["Unless you don't hurry, you'll be late.", "Take a coat in case it will get cold.", "I'll go as long as you will come."] },
        },
        { t: "tip", tone: "warn", md: "**unless** o'zi inkor ma'noli (*if not*), shuning uchun ikkinchi marta inkor qo'shmang: ~~unless you don't~~. **in case** ham **will** bilan kelmaydi." },
        { t: "check", ex: { k: "fix", wrong: "Unless you don't study, you will fail.", a: ["Unless you study, you will fail.", "If you don't study, you will fail."], hint: "unless ichida inkor bor", why: "**unless** = *if not*, inkor ikki marta kerak emas." } },
      ],
    },
    {
      title: "Majhul nisbat: barcha shakllar",
      blocks: [
        { t: "p", md: "**Majhul nisbat (passive)** da ishni kim qilgani muhim emas yoki noma'lum. Tuzilma: **be + V3**. Zamonni **be** ko'rsatadi:" },
        {
          t: "table", head: ["Zamon", "Shakl", "Misol"], speak: [2],
          rows: [
            ["Present Simple", "am / is / are + V3", "English is spoken all over the world."],
            ["Past Simple", "was / were + V3", "The bridge was built in 1990."],
            ["Present Perfect", "has / have been + V3", "The road has been repaired."],
            ["Future", "will be + V3", "The results will be announced tomorrow."],
            ["Modal", "can / must / should be + V3", "This form must be signed."],
          ],
        },
        {
          t: "examples", items: [
            { en: "Thousands of cars are produced here every year.", uz: "Bu yerda har yili minglab mashina ishlab chiqariladi." },
            { en: "The window was broken last night.", uz: "Deraza kecha kechqurun sindirilgan." },
            { en: "Has the package been delivered yet?", uz: "Posilka yetkazib berildimi hali?" },
            { en: "The old building will be pulled down next month.", uz: "Eski bino kelasi oy buziladi." },
          ],
        },
        { t: "tip", tone: "info", md: "Ishni bajaruvchini ko'rsatish kerak bo'lsa, **by** ishlatamiz: *The song was written by a young singer.* Odatda bajaruvchi noma'lum yoki muhim bo'lmasa, **by** ni tushirib qoldiramiz." },
        { t: "check", ex: { k: "choice", q: "**The tickets ___ yet.**", opts: ["haven't been sold", "weren't sold", "aren't sell", "haven't sold"], a: 0, why: "*yet* → Present Perfect passive: **have/has been + V3**." } },
      ],
    },
    {
      title: "Majhul nisbatdagi tipik xatolar",
      blocks: [
        { t: "p", md: "O'zbek tilida «qurildi, ochildi, yozildi» kabi shakllar tabiiy. Inglizchada esa ko'p xatolar quyidagilardan chiqadi:" },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["The accident happened yesterday.", "The museum was opened in 2015.", "Where was this photo taken?"] },
          bad: { title: "Xato", items: ["The accident was happened yesterday.", "The museum opened by the mayor in 2015.", "Where did this photo take?"] },
        },
        { t: "tip", tone: "warn", md: "**happen, take place, arrive, die, appear** kabi fe'llar majhul nisbatda ishlatilmaydi (ular o'timsiz fe'llar: obyekti yo'q): ~~It was happened~~. Qolgan o'timli fe'llar uchun **be + V3** va **by** kerak." },
        { t: "tip", tone: "info", md: "Savol tuzilishi: **Was / Were** + ega + V3. *When was it built? Who was it written by?* **did** ishlatilmaydi." },
        { t: "check", ex: { k: "fix", wrong: "The accident was happened on Monday.", a: ["The accident happened on Monday."], hint: "happen — majhul bo'lmaydi", why: "**happen** majhul nisbatda ishlatilmaydi." } },
        { t: "check", ex: { k: "order", uz: "Bu kitob qachon yozilgan?", words: ["When", "was", "this", "book", "written?"], extra: ["did", "wrote"] } },
      ],
    },
    {
      title: "Dialog: uyni ta'mirlash",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Helen", en: "Has the kitchen been painted yet?", uz: "Oshxona bo'yaldimi hali?" },
            { who: "Jack", en: "Not yet. It will be done on Friday, as long as the workers arrive on time.", uz: "Hali yo'q. Ishchilar vaqtida kelsa, juma kuni bo'yaladi." },
            { who: "Helen", en: "If we had started last month, it would have been finished by now.", uz: "O'tgan oy boshlaganimizda, hozirgacha tugagan bo'lardi." },
            { who: "Jack", en: "True, but the materials were delivered late. Unless the paint arrives tomorrow, we'll have to wait.", uz: "To'g'ri, lekin materiallar kech yetkazildi. Bo'yoq ertaga kelmasa, kutishga to'g'ri keladi." },
            { who: "Helen", en: "Let's call the shop in case there's a problem.", uz: "Muammo bo'lsa, do'konga qo'ng'iroq qilaylik." },
            { who: "Jack", en: "Good idea. If I were you, I'd call them now.", uz: "Yaxshi fikr. Sening o'rningda bo'lsam, hozir qo'ng'iroq qilardim." },
          ],
        },
        { t: "check", ex: { k: "tf", q: "The kitchen has already been painted.", a: false, why: "Jack: *Not yet.* Oshxona hali bo'yalmagan." } },
      ],
    },
    {
      title: "O'qing: Katta o'zgarish",
      blocks: [
        {
          t: "text", title: "A new life for an old station",
          en: "The old railway station in our town was built in 1905. For many years it was used by thousands of people every day. Then it was closed, and the building was left empty. Last year, the council decided to change it. If the plan is approved, the station will be turned into a library and a cafe. Many residents are happy, provided that the old halls are kept. If the building had been repaired earlier, it would not have fallen into such a bad state. Now the work has been started, and the new library will be opened next spring. Unless something goes wrong, the town will have a wonderful new place.",
          uz: "Shahrimizdagi eski temir yo'l vokzali 1905-yilda qurilgan. Ko'p yillar davomida uni har kuni minglab odamlar ishlatgan. Keyin u yopildi va bino bo'sh qoldirildi. O'tgan yili kengash uni o'zgartirishga qaror qildi. Agar reja tasdiqlansa, vokzal kutubxona va kafega aylantiriladi. Ko'p aholi, eski zallar saqlansa, xursand. Bino ertaroq ta'mirlanganda, bunday yomon holatga tushmagan bo'lardi. Hozir ish boshlandi va yangi kutubxona kelasi bahorda ochiladi. Biror narsa xato ketmasa, shaharda ajoyib yangi joy bo'ladi.",
        },
        { t: "check", ex: { k: "tf", q: "The station will be turned into a library and a cafe if the plan is approved.", a: true, why: "Matnda: *If the plan is approved, the station will be turned into a library and a cafe.*" } },
      ],
    },
  ],
  words: [
    { en: "unless", uz: "agar … bo'lmasa", ipa: "ənˈles", pos: "conj", ex: "Unless you hurry, you will miss the bus.", exUz: "Shoshilmasangiz, avtobusga kech qolasiz." },
    { en: "as long as", uz: "faqat shu shart bilan, …gina bo'lsa", ipa: "æz lɒŋ æz", pos: "phrase", ex: "You can stay as long as you like.", exUz: "Xohlagancha qolishingiz mumkin." },
    { en: "otherwise", uz: "aks holda", ipa: "ˈʌð.ə.waɪz", pos: "adv", ex: "Write it down. Otherwise, you will forget.", exUz: "Yozib qo'ying. Aks holda unutasiz." },
    { en: "in case", uz: "ehtiyot uchun, ehtimol bo'lsa", ipa: "ɪn keɪs", pos: "phrase", ex: "Take some water in case you get thirsty.", exUz: "Chanqab qolsangiz, deb suv oling." },
    { en: "regret", uz: "afsuslanmoq; afsus", ipa: "rɪˈɡret", pos: "verb", ex: "I regret not learning English earlier.", exUz: "Ingliz tilini ertaroq o'rganmaganimdan afsuslanaman." },
    { en: "chance", uz: "imkoniyat, ehtimol", ipa: "tʃɑːns", pos: "noun", ex: "There is a good chance of rain tomorrow.", exUz: "Ertaga yomg'ir yog'ish ehtimoli katta." },
    { en: "condition", uz: "shart; holat", ipa: "kənˈdɪʃ.ən", pos: "noun", ex: "I will help you on one condition.", exUz: "Sizga bitta shart bilan yordam beraman." },
    { en: "require", uz: "talab qilmoq", ipa: "rɪˈkwaɪər", pos: "verb", ex: "This job requires good computer skills.", exUz: "Bu ish yaxshi kompyuter ko'nikmalarini talab qiladi." },
    { en: "guarantee", uz: "kafolat; kafolatlamoq", ipa: "ˌɡær.ənˈtiː", pos: "noun", ex: "The phone has a two-year guarantee.", exUz: "Telefonga ikki yillik kafolat berilgan." },
    { en: "provide", uz: "ta'minlamoq, taqdim etmoq", ipa: "prəˈvaɪd", pos: "verb", ex: "The company provides free lunch for staff.", exUz: "Kompaniya xodimlarga bepul tushlik beradi." },
  ],
  practice: [
    { k: "choice", q: "If it ___ tomorrow, we will cancel the picnic.", opts: ["rains", "will rain", "would rain", "rained"], a: 0, why: "Birinchi shart: **if + Present**." },
    { k: "choice", q: "If I ___ a million pounds, I would buy a house by the sea.", opts: ["have", "had", "would have", "will have"], a: 1, why: "Ikkinchi shart: **if + Past**." },
    { k: "choice", q: "If they had left earlier, they ___ the train.", opts: ["would catch", "would have caught", "had caught", "will catch"], a: 1, why: "Uchinchi shart: **would have + V3**." },
    { k: "listen", say: "If I were you, I would talk to your manager.", opts: ["If I were you, I would talk to your manager.", "If I was you, I will talk to your manager.", "If I were you, I will talk to your manager.", "If you were me, I would talk to your manager."], a: 0, why: "**If I were you, I would…** — maslahat." },
    { k: "fill", q: "The bridge ___ built in 1995. (be)", a: ["was"], uz: "Ko'prik 1995-yilda qurilgan.", why: "Past passive: **was + V3**." },
    { k: "fill", q: "The report must ___ finished by Monday. (be)", a: ["be"], uz: "Hisobot dushanbagacha tugatilishi kerak.", why: "Modal passive: **must be + V3**." },
    { k: "fill", q: "We'll miss the bus ___ we leave now.", a: ["unless"], uz: "Hozir chiqmasak, avtobusga kech qolamiz.", why: "**unless** = *if not*." },
    { k: "order", uz: "Agar ob-havo yaxshi bo'lsa, biz kelasi hafta ketamiz.", words: ["If", "the", "weather", "is", "good,", "we", "will", "leave", "next", "week."], extra: ["would", "are"], alt: [["We", "will", "leave", "next", "week", "if", "the", "weather", "is", "good."]], why: "Birinchi shart: **if + Present**." },
    { k: "order", uz: "Natijalar ertaga e'lon qilinadi.", words: ["The", "results", "will", "be", "announced", "tomorrow."], extra: ["are", "announce"], why: "Future passive: **will be + V3**." },
    { k: "translate", uz: "Sizning o'rningizda bo'lsam, ketmasdim.", a: ["If I were you, I wouldn't go.", "If I were you, I would not go.", "If I was you, I wouldn't go."], why: "Ikkinchi shart: *If I were you, I wouldn't…*" },
    { k: "translate", uz: "Bu bino 1920-yilda qurilgan.", a: ["This building was built in 1920.", "The building was built in 1920."], why: "Past passive: **was built**." },
    { k: "match", pairs: [["unless", "agar … bo'lmasa"], ["otherwise", "aks holda"], ["in case", "ehtiyot uchun"], ["guarantee", "kafolat"], ["require", "talab qilmoq"]] },
    { k: "tf", q: "**If I will have time, I will call you** — bu gap to'g'ri.", a: false, why: "**if** dan keyin **will** yo'q: *If I have time, I will call you.*" },
    { k: "fix", wrong: "If I would know the answer, I would tell you.", a: ["If I knew the answer, I would tell you.", "If I knew the answer, I'd tell you."], hint: "if dan keyin would yo'q", why: "Ikkinchi shartda **if + Past**." },
    { k: "speak", say: "If it rains tomorrow, the match will be cancelled.", uz: "Ertaga yomg'ir yog'sa, o'yin bekor qilinadi." },
  ],
  quiz: [
    { k: "choice", q: "**English ___ in many countries.**", opts: ["is spoken", "speaks", "is speak", "are spoken"], a: 0, why: "Present passive: **is + V3**." },
    { k: "choice", q: "**Take your keys ___ nobody is at home.**", opts: ["in case", "unless", "otherwise", "if"], a: 0, why: "Ehtiyot uchun → **in case**." },
    { k: "choice", q: "**If she ___ the message, she would have replied.**", opts: ["saw", "had seen", "has seen", "would see"], a: 1, why: "Uchinchi shart: **if + had + V3**." },
    { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["The match was happened yesterday.", "The match happened yesterday.", "The match was happen yesterday.", "The match has been happened yesterday."], a: 1, why: "**happen** majhul nisbatda ishlatilmaydi." },
    { k: "fill", q: "Has the room ___ cleaned yet?", a: ["been"], uz: "Xona tozalandimi hali?", why: "Present Perfect passive: **has been + V3**." },
    { k: "fill", q: "I'll lend you the book as long ___ you return it.", a: ["as"], uz: "Qaytarsangiz, kitobni qarz beraman.", why: "**as long as** — shart." },
    { k: "dictation", say: "If I had known, I would have called you.", uz: "Bilganimda, sizga qo'ng'iroq qilgan bo'lardim.", why: "Uchinchi shart." },
    { k: "fix", wrong: "Unless you don't hurry, we will be late.", a: ["Unless you hurry, we will be late.", "If you don't hurry, we will be late."], hint: "unless — if not", why: "**unless** o'zi inkor." },
    { k: "order", uz: "Bu surat qayerda olingan?", words: ["Where", "was", "this", "photo", "taken?"], extra: ["did", "take"], why: "Passive savol: **was + ega + V3**." },
    { k: "translate", uz: "Agar ko'proq pulim bo'lsa, dunyo bo'ylab sayohat qilardim.", a: ["If I had more money, I would travel around the world.", "If I had more money, I'd travel around the world.", "If I had more money, I would travel the world."], why: "Ikkinchi shart." },
  ],
  summary: [
    "Shart gaplar: **zero** (if + Present, Present), **first** (if + Present, will), **second** (if + Past, would), **third** (if + had + V3, would have + V3).",
    "**if** dan keyin **will / would** yo'q: ~~If I will have~~. Maslahat: **If I were you, I would…**",
    "**unless** = if not (qo'shimcha inkor yo'q). **as long as, provided that, in case, otherwise.**",
    "Majhul nisbat: **be + V3** — *is made, was built, has been repaired, will be done, must be finished*. **happen** va **arrive** kabi fe'llar majhul bo'lmaydi.",
  ],
  homework: "Har bir shart gap turi uchun o'zingiz haqingizda bittadan gap yozing (zero, first, second, third). Keyin 5 ta majhul nisbat gapi yozing: o'z shahringizdagi binolar, mahsulotlar yoki voqealar haqida (*was built, is made, will be opened*).",
};

export default lesson;
