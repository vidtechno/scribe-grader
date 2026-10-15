import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u20-l1",
  title: "Second conditional: imaginary situations",
  titleUz: "Second conditional: xayoliy vaziyatlar (If I were…, I would…)",
  goal: "**Second conditional** (*If I won the lottery, I would travel the world*) yordamida hozirgi va kelajakdagi xayoliy yoki ehtimoli kam vaziyatlar haqida gapirasiz, **If I were you** bilan maslahat berasiz va *if* dan keyin **would** qo'yish xatosidan qochasiz.",
  slides: [
    {
      title: "Xayoliy vaziyat: tasavvur qilamiz",
      blocks: [
        { t: "p", md: "Pre-Intermediate darajada **first conditional** ni o'rgandingiz: *If it rains, I will stay at home.* Bu **haqiqatan bo'lishi mumkin** bo'lgan vaziyat. Endi esa **tasavvur** qilamiz: bo'lishi ehtimoli kam yoki umuman bo'lmaydigan vaziyatlar. Buning uchun **second conditional** ishlatiladi." },
        {
          t: "table", head: ["", "First conditional", "Second conditional"],
          rows: [
            ["Fikr", "Real, bo'lishi mumkin", "Xayoliy, ehtimoli kam"],
            ["If qismi", "Present Simple", "Past Simple"],
            ["Asosiy gap", "will + V1", "would + V1"],
            ["Misol", "If I get a bonus, I will buy a car.", "If I got a million pounds, I would buy an island."],
          ],
        },
        { t: "tip", tone: "info", md: "Past Simple bu yerda **o'tgan zamonni** bildirmaydi. U gapning **xayoliy** ekanini ko'rsatadi. *If I had a car* — hozir mashinam yo'q, lekin tasavvur qilyapman." },
        { t: "check", ex: { k: "choice", q: "Qaysi gap **xayoliy** vaziyat haqida?", opts: ["If it is sunny tomorrow, we will go to the park.", "If I lived in Paris, I would visit the Louvre every week.", "If you call me, I will answer.", "If the bus is late, I will take a taxi."], a: 1, why: "*If I lived in Paris* — hozir Parijda yashamayman, bu tasavvur. Qolganlari real vaziyat (first conditional)." } },
      ],
    },
    {
      title: "Shakl: If + Past Simple, would + V1",
      blocks: [
        { t: "p", md: "Second conditional ikki qismdan iborat: **if qismi** (shart) va **asosiy qism** (natija). Ularni istalgan tartibda yozish mumkin. **If** bilan boshlansa, o'rtada **vergul** qo'yamiz." },
        {
          t: "examples", items: [
            { en: "If I won the lottery, I would travel around the world.", uz: "Agar lotereya yutsam, dunyo bo'ylab sayohat qilardim." },
            { en: "I would buy a big house if I had more money.", uz: "Pulim ko'proq bo'lsa, katta uy sotib olardim.", note: "If o'rtada kelsa, vergul kerak emas." },
            { en: "If she spoke French, she would work in Paris.", uz: "Agar u fransuzcha gapirsa, Parijda ishlardi." },
            { en: "We wouldn't be late if we left now.", uz: "Hozir chiqsak, kech qolmasdik.", note: "Inkor: **wouldn't** + V1." },
          ],
        },
        { t: "tip", tone: "info", md: "O'zbekchada xuddi shunday: *«lotereya yutsam, … qilardim»*. **-sa** (shart) = **if + Past Simple**, **-ardim** = **would + V1**. Ma'no bir xil, faqat inglizchada ikkala qismni ham alohida yozish kerak." },
        { t: "check", ex: { k: "fill", q: "If I ___ more free time, I would learn the guitar. (have)", a: ["had"], why: "Second conditional: if qismida **Past Simple** (*had*)." } },
        { t: "check", ex: { k: "fill", q: "If Karim earned more money, he ___ a new laptop. (buy)", a: ["would buy", "'d buy"], why: "Asosiy qismda **would + V1**: *would buy*." } },
      ],
    },
    {
      title: "If I were… (hamma shaxs uchun were)",
      blocks: [
        { t: "p", md: "**to be** fe'li second conditional da hamma shaxslar uchun **were** bo'lishi mumkin: *I were, he were, she were, it were*. Bu to'g'ri va ayniqsa yozma va rasmiy nutqda yaxshi. Kundalik suhbatda *If I was…* ham eshitiladi, lekin imtihonda **were** yozing." },
        {
          t: "examples", items: [
            { en: "If I were rich, I would stop working.", uz: "Agar boy bo'lsam, ishlashni to'xtatardim." },
            { en: "If he were taller, he would play basketball.", uz: "Agar u bo'yi balandroq bo'lsa, basketbol o'ynardi." },
            { en: "If it were warmer, we would have lunch outside.", uz: "Havo issiqroq bo'lsa, tushlikni tashqarida qilardik." },
          ],
        },
        { t: "p", md: "**If I were you, I would…** — eng mashhur maslahat qolipi. «Sizning o'rningizda bo'lsam, …» degan ma'no. Bu yerda **were** deyish juda odatiy." },
        { t: "examples", items: [
          { en: "If I were you, I would talk to your manager.", uz: "Sizning o'rningizda bo'lsam, menejeringiz bilan gaplashardim." },
          { en: "I wouldn't buy that phone if I were you.", uz: "Sizning o'rningizda bo'lsam, u telefonni olmasdim." },
        ] },
        { t: "check", ex: { k: "fill", q: "If I ___ you, I would take the job.", a: ["were"], why: "**If I were you** — maslahat qolipi, *were*." } },
        { t: "check", ex: { k: "fill", q: "If it ___ cheaper, we would book the hotel for a week.", a: ["were", "was"], why: "Second conditional da **were** (kundalik nutqda *was* ham bor)." } },
      ],
    },
    {
      title: "Eng katta xato: if dan keyin would",
      blocks: [
        { t: "p", md: "O'zbek tilida «bo'lsam, qilardim» deymiz va ikkalasi ham «qilgan» ohangida. Shuning uchun ko'pchilik **if** dan keyin ham **would** qo'yib yuboradi. Inglizchada **would** faqat **asosiy qismda** turadi." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["If I had a car, I would drive to work.", "If she knew the answer, she would tell us.", "What would you do if you lost your passport?"] },
          bad: { title: "Xato", items: ["If I would have a car, I would drive to work.", "If she would know the answer, she would tell us.", "What would you do if you would lose your passport?"] },
        },
        { t: "tip", tone: "warn", md: "Qoida oddiy: **if** dan keyin hech qachon **will** ham, **would** ham qo'ymaymiz (first yoki second conditional bo'lishidan qat'i nazar). **If** dan keyin faqat oddiy zamon: *If I won, If I get*." },
        { t: "check", ex: { k: "fix", wrong: "If I would have more time, I would learn Spanish.", a: ["If I had more time, I would learn Spanish.", "If I had more time, I'd learn Spanish."], hint: "If dan keyin would bo'lmaydi", why: "**If** dan keyin Past Simple: *If I had*." } },
        { t: "check", ex: { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["If he would earn more, he would move out.", "If he earned more, he would move out.", "If he earns more, he would move out.", "If he earned more, he will move out."], a: 1, why: "Xayoliy vaziyat: **If + Past Simple, would + V1**." } },
      ],
    },
    {
      title: "Savol, qisqa javob, could va might",
      blocks: [
        { t: "p", md: "Savol berganda ham shu qolip ishlaydi. Eng ko'p ishlatiladigan savol: **What would you do if…?**" },
        {
          t: "table", head: ["Savol", "Javob"], speak: [0, 1],
          rows: [
            ["What would you do if you won a million pounds?", "I would buy a house for my parents."],
            ["Would you move abroad if you got a good job?", "Yes, I would. I would move to London."],
            ["Where would you live if you could choose?", "I'd live by the sea."],
          ],
        },
        { t: "p", md: "**would** o'rniga ba'zan **could** (*qila olardim*) yoki **might** (*ehtimol …*) ham ishlatiladi:" },
        {
          t: "examples", items: [
            { en: "If I had a bigger flat, I could invite all my friends.", uz: "Agar kattaroq xonadonim bo'lsa, hamma do'stlarimni taklif qila olardim." },
            { en: "If you asked her, she might say yes.", uz: "Agar undan so'rasangiz, u ehtimol ha deydi." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "___ you do if you saw a famous actor in the street?", opts: ["What would", "What will", "What did", "What do"], a: 0, why: "Xayoliy savol: **What would you do if…?**" } },
        { t: "check", ex: { k: "choice", q: "**Would you live abroad if you had the chance?** Qaysi javob to'g'ri?", opts: ["Yes, I would.", "Yes, I will.", "Yes, I do.", "Yes, I did."], a: 0, why: "Qisqa javobda ham **would**: *Yes, I would. / No, I wouldn't.*" } },
      ],
    },
    {
      title: "O'qing: Nilufarning bir yil",
      blocks: [
        {
          t: "text", title: "If I had a free year", voice: "emma",
          en: "Nilufar works in a bank in Tashkent. She likes her job, but sometimes she imagines a different life. \"If I had a free year, I would travel around Central Asia,\" she says. \"I would visit small villages and learn about local crafts. If I met an interesting craftsman, I would ask him to teach me. I could write a blog about my trip, too.\" Her brother laughs. \"If you quit your job, you wouldn't have any money,\" he says. \"That's true,\" Nilufar answers. \"I wouldn't leave my job without a plan. But it is fun to imagine, isn't it?\"",
          uz: "Nilufar Toshkentdagi bankda ishlaydi. U ishini yaxshi ko'radi, lekin ba'zan boshqacha hayotni tasavvur qiladi. «Agar bir yil bo'sh vaqtim bo'lsa, Markaziy Osiyo bo'ylab sayohat qilardim,» deydi u. «Kichik qishloqlarga borardim va mahalliy hunarmandchilik haqida o'rganardim. Qiziq usta uchratsam, undan menga o'rgatishini so'rardim. Sayohatim haqida blog ham yozishim mumkin bo'lardi.» Akasi kuladi. «Agar ishingdan ketsang, pulsiz qolasan,» deydi u. «To'g'ri,» deb javob beradi Nilufar. «Rejasiz ishimni tashlamasdim. Lekin tasavvur qilish qiziq-ku, shunday emasmi?»",
        },
        { t: "check", ex: { k: "tf", q: "Nilufar is going to travel around Central Asia next year.", a: false, why: "U faqat **tasavvur qilyapti** (*If I had a free year…*). Bu reja emas." } },
        { t: "check", ex: { k: "choice", q: "Why does the brother say \"you wouldn't have any money\"?", opts: ["Because she would stop working.", "Because she hates her job.", "Because he is a banker.", "Because travelling is free."], a: 0, why: "Agar ishdan ketsa, maoshi bo'lmaydi." } },
      ],
    },
    {
      title: "Dialog: lotereya yutsangiz?",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Sara", en: "What would you do if you won the lottery, Tom?", uz: "Tom, lotereya yutsang nima qilarding?" },
            { who: "Tom", en: "First, I would pay off my loan. Then I would buy a small house near the sea.", uz: "Birinchi navbatda qarzimni to'lardim. Keyin dengiz yaqinidan kichik uy sotib olardim." },
            { who: "Sara", en: "Would you stop working?", uz: "Ishlashni to'xtatarmiding?" },
            { who: "Tom", en: "No, I wouldn't. I would be bored. I would start my own company.", uz: "Yo'q. Zerikib qolardim. O'z kompaniyamni ochardim." },
            { who: "Sara", en: "If I were you, I would travel for a year first.", uz: "Sening o'rningda bo'lsam, avval bir yil sayohat qilardim." },
            { who: "Tom", en: "That's a good idea! And what would you do?", uz: "Yaxshi fikr! Sen nima qilarding?" },
            { who: "Sara", en: "I would give some money to charity and buy a camper van.", uz: "Pulning bir qismini xayriyaga berardim va avtofurgon sotib olardim." },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Tom would stop working if he won the lottery.", a: false, why: "Tom: *No, I wouldn't. I would be bored.*" } },
      ],
    },
  ],
  words: [
    { en: "imagine", uz: "tasavvur qilmoq", ipa: "ɪˈmædʒ.ɪn", pos: "verb", ex: "Imagine you could fly like a bird.", exUz: "Qush kabi uchishingizni tasavvur qiling." },
    { en: "lottery", uz: "lotereya", ipa: "ˈlɒt.ər.i", pos: "noun", ex: "Nobody in my family has ever won the lottery.", exUz: "Oilamda hech kim hech qachon lotereya yutmagan." },
    { en: "millionaire", uz: "millioner", ipa: "ˌmɪl.jəˈneər", pos: "noun", ex: "He became a millionaire at the age of thirty.", exUz: "U o'ttiz yoshida millioner bo'ldi." },
    { en: "afford", uz: "qurbi yetmoq, ega bo'la olmoq", ipa: "əˈfɔːd", pos: "verb", ex: "We can't afford a new car this year.", exUz: "Bu yil yangi mashinaga qurbimiz yetmaydi." },
    { en: "quit", uz: "tashlab ketmoq, to'xtatmoq", ipa: "kwɪt", pos: "verb", ex: "She quit her job to start a business.", exUz: "U biznes boshlash uchun ishini tashladi." },
    { en: "retire", uz: "nafaqaga chiqmoq", ipa: "rɪˈtaɪər", pos: "verb", ex: "My father wants to retire at sixty.", exUz: "Dadam oltmish yoshida nafaqaga chiqmoqchi." },
    { en: "unlikely", uz: "ehtimoldan yiroq", ipa: "ʌnˈlaɪk.li", pos: "adj", ex: "It is unlikely that he will come today.", exUz: "Uning bugun kelishi ehtimoldan yiroq." },
    { en: "choice", uz: "tanlov, tanlash imkoni", ipa: "tʃɔɪs", pos: "noun", ex: "You have a difficult choice to make.", exUz: "Sizning oldingizda qiyin tanlov turibdi." },
    { en: "island", uz: "orol", ipa: "ˈaɪ.lənd", pos: "noun", ex: "They live on a small island near Greece.", exUz: "Ular Gretsiya yaqinidagi kichik orolda yashashadi." },
    { en: "luxury", uz: "hashamat, dabdabali", ipa: "ˈlʌk.ʃər.i", pos: "noun", ex: "A holiday in a luxury hotel is too expensive for me.", exUz: "Hashamatli mehmonxonada dam olish men uchun juda qimmat." },
  ],
  practice: [
    { k: "choice", q: "**If I ___ a million pounds, I would buy an island.**", opts: ["have", "had", "would have", "will have"], a: 1, why: "Xayoliy vaziyat: if qismida **Past Simple** (*had*)." },
    { k: "choice", q: "**She ___ travel more if she had more free time.**", opts: ["will", "would", "did", "is"], a: 1, why: "Asosiy qismda **would + V1**." },
    { k: "listen", say: "What would you do if you won the lottery?", opts: ["What would you do if you won the lottery?", "What will you do if you win the lottery?", "What did you do when you won the lottery?"], a: 0 },
    { k: "fill", q: "If I ___ you, I would apologise to her.", a: ["were"], why: "**If I were you** — maslahat qolipi." },
    { k: "fill", q: "If we lived near the sea, we ___ swim every day. (can)", a: ["could"], why: "*Qila olardik* → **could** + V1." },
    { k: "fill", q: "Would you quit your job if you ___ enough money? (have)", a: ["had"], why: "If qismida Past Simple: *had*." },
    { k: "order", uz: "Agar vaqtim ko'proq bo'lsa, ispan tilini o'rganardim.", words: ["If", "I", "had", "more", "time,", "I", "would", "learn", "Spanish."], extra: ["have", "will"], alt: [["I", "would", "learn", "Spanish", "if", "I", "had", "more", "time."]], why: "If + Past Simple, would + V1." },
    { k: "order", uz: "Lotereya yutsangiz, nima qilardingiz?", words: ["What", "would", "you", "do", "if", "you", "won", "the", "lottery?"], extra: ["will", "win"], why: "What would you do if + Past Simple?" },
    { k: "translate", uz: "Sizning o'rningizda bo'lsam, bu ishni qabul qilardim.", a: ["If I were you, I would take the job.", "If I were you, I'd take the job.", "If I were you, I would take this job.", "If I were you, I'd take this job.", "If I was you, I would take the job.", "If I was you, I'd take the job."], why: "**If I were you, I would…**" },
    { k: "translate", uz: "Agar boy bo'lsam, dunyo bo'ylab sayohat qilardim.", a: ["If I were rich, I would travel around the world.", "If I were rich, I'd travel around the world.", "If I was rich, I would travel around the world.", "If I was rich, I'd travel around the world.", "If I were rich, I would travel the world.", "If I were rich, I'd travel the world."], why: "Xayoliy: if + were, would + V1." },
    { k: "match", pairs: [["imagine", "tasavvur qilmoq"], ["afford", "qurbi yetmoq"], ["retire", "nafaqaga chiqmoq"], ["unlikely", "ehtimoldan yiroq"], ["island", "orol"]] },
    { k: "tf", q: "**If I would have a car, I would drive to work.** — bu gap to'g'ri.", a: false, why: "**If** dan keyin would qo'yilmaydi: *If I had a car…*" },
    { k: "tf", q: "Second conditional hozirgi va kelajakdagi xayoliy vaziyatni bildiradi.", a: true, why: "Past Simple bu yerda xayoliylikni ko'rsatadi, o'tgan zamonni emas." },
    { k: "fix", wrong: "If she would know the answer, she would tell us.", a: ["If she knew the answer, she would tell us.", "If she knew the answer, she'd tell us."], hint: "If dan keyin would yo'q", why: "If qismida Past Simple: *knew*." },
    { k: "speak", say: "If I were you, I would talk to your manager.", uz: "Sizning o'rningizda bo'lsam, menejeringiz bilan gaplashardim." },
    { k: "speak", say: "What would you do if you won the lottery?", uz: "Lotereya yutsangiz, nima qilardingiz?" },
  ],
  quiz: [
    { k: "choice", q: "**If it ___ warmer, we would go to the beach.**", opts: ["is", "were", "would be", "will be"], a: 1, why: "Xayoliy vaziyat: **were**." },
    { k: "choice", q: "**I ___ buy a bigger flat if I had more money.**", opts: ["will", "would", "am going to", "had"], a: 1, why: "Asosiy qism: **would + V1**." },
    { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["If I would win, I would celebrate.", "If I won, I would celebrate.", "If I win, I would celebrate.", "If I won, I will celebrate."], a: 1, why: "**If + Past Simple, would + V1**." },
    { k: "fill", q: "If I ___ you, I wouldn't say that to her.", a: ["were"], why: "**If I were you** qolipi." },
    { k: "fill", q: "She ___ be happier if she lived in the countryside. (would)", a: ["would"], hint: "Bitta so'z", why: "Asosiy qism: **would** + V1." },
    { k: "fill", q: "If Aziz ___ more time, he would start a hobby. (have)", a: ["had"], why: "If + Past Simple: *had*." },
    { k: "listen", say: "If I had a car, I would drive to work.", opts: ["If I had a car, I would drive to work.", "If I have a car, I will drive to work.", "If I had a car, I drove to work."], a: 0 },
    { k: "tf", q: "**What would you do if you lost your passport?** — bu gap to'g'ri.", a: true, why: "Xayoliy savol: What would you do if + Past Simple." },
    { k: "fix", wrong: "If I would be rich, I would buy an island.", a: ["If I were rich, I would buy an island.", "If I were rich, I'd buy an island.", "If I was rich, I would buy an island.", "If I was rich, I'd buy an island."], hint: "If dan keyin would yo'q", why: "If qismida **were** (Past Simple)." },
    { k: "order", uz: "Agar seni taklif qilsam, kelarmiding?", words: ["Would", "you", "come", "if", "I", "invited", "you?"], extra: ["will", "invite"], why: "Would you + V1 + if + Past Simple?" },
  ],
  summary: [
    "**Second conditional**: *If + Past Simple, would + V1* — hozirgi va kelajakdagi **xayoliy** yoki ehtimoli kam vaziyat.",
    "Past Simple bu yerda o'tgan zamon emas: u gapning xayoliy ekanini ko'rsatadi. *If I had a car, I would…*",
    "**were** hamma shaxs uchun mumkin: *If I were rich…* Maslahat qolipi: **If I were you, I would…**",
    "Xato: ~~If I would have~~. **If** dan keyin **would** (va will) qo'yilmaydi. To'g'risi: *If I had…*",
    "Savol: **What would you do if…?** Qisqa javob: *Yes, I would. / No, I wouldn't.* Ba'zan would o'rniga **could** yoki **might** ishlatiladi.",
  ],
  homework: "Quyidagi savollarga to'liq gap bilan yozma javob bering: *What would you do if you won a million pounds? Where would you live if you could choose? What would you change if you were the mayor of your city?* Har bir javobda **If + Past Simple, would + V1** qolipini ishlating.",
};

export default lesson;
