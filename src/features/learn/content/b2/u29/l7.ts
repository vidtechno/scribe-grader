import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u29-l7",
  title: "Writing: a report describing data",
  titleUz: "Yozish: ma'lumotlar bo'yicha hisobot (report)",
  goal: "Jadval yoki diagrammaga qarab **150 so'zli hisobot** yozasiz (IELTS Task 1 uslubida, 20 daqiqada): **kirish (paraphrase)**, **overview**, ikkita **asosiy bo'lim**, **taqqoslash va bog'lovchilar** (*whereas, respectively, in contrast*), shaxsiy fikrsiz va to'g'ri zamon hamda predloglar bilan. Yozgandan keyin **tekshiruv ro'yxati** bilan xatolarni topasiz.",
  slides: [
    {
      title: "Nima uchun kerak? Task 1 va ish hisoboti",
      blocks: [
        { t: "p", md: "IELTS Academic **Writing Task 1** da sizga grafik, jadval yoki diagramma beriladi va **20 daqiqada kamida 150 so'z** yozishingiz kerak. Ishda ham xuddi shu ko'nikma kerak: *haftalik savdo hisoboti, so'rovnoma natijalari*. Asosiy qoida: **fikr emas, faktlar**, tartib va aniqlik." },
        { t: "p", md: "20 daqiqani shunday taqsimlang:" },
        {
          t: "table", head: ["Daqiqa", "Nima qilasiz"],
          rows: [
            ["1–3", "Ma'lumotni o'qing: nima o'lchangan? qaysi birlik? qaysi yillar?"],
            ["4–5", "Eng katta o'sish, eng katta pasayish, eng yuqori va eng past raqamni toping"],
            ["6–15", "Yozing: kirish, overview, ikkita asosiy bo'lim"],
            ["16–20", "Tekshiring: zamon, predlog, raqam, imlo"],
          ],
        },
        { t: "tip", tone: "info", md: "**To'rt abzats:** (1) kirish — savolni o'z so'zingiz bilan, (2) overview — umumiy tendensiya, (3) bo'lim 1, (4) bo'lim 2. **Xulosa** shart emas: overview uning o'rnini bosadi." },
        { t: "check", ex: { k: "choice", q: "What is the best first paragraph of a Task 1 report?", opts: ["The table illustrates how much exercise people of different ages took in 2005 and 2025.", "I will now write about the table.", "Exercise is very important for health.", "In 2005 the 60+ group did 20 minutes."], a: 0, why: "Kirish — jadvalni o'z so'zingiz bilan aytib berish (*illustrates how much…*). Qolganlari fikr yoki mayda tafsilot." } },
        { t: "check", ex: { k: "tf", q: "A Task 1 report needs a long conclusion with your personal opinion.", a: false, why: "Task 1 da shaxsiy fikr va uzun xulosa kerak emas. Overview muhimroq." } },
      ],
    },
    {
      title: "Ma'lumotni o'qish: bugungi jadval",
      blocks: [
        { t: "p", md: "Bugun bitta **o'ylab topilgan** jadval bilan ishlaymiz. Unda to'rtta yosh guruhi kuniga necha daqiqa jismoniy mashq qilgani ko'rsatilgan (2005 va 2025)." },
        {
          t: "table", head: ["Age group", "2005 (minutes a day)", "2025 (minutes a day)"],
          rows: [
            ["18–29", "48", "35"],
            ["30–44", "36", "30"],
            ["45–59", "28", "33"],
            ["60 and over", "20", "31"],
          ],
        },
        { t: "p", md: "Yozishdan oldin **o'zingizdan so'rang**: nima o'lchangan? (daqiqa) qancha vaqt oralig'ida? (2005 va 2025) eng muhim o'zgarish nima? (yoshlar kamaydi, keksalar oshdi)." },
        {
          t: "table", head: ["Savol", "Javob (bu jadvalda)"],
          rows: [
            ["Eng katta pasayish?", "18–29: 48 → 35 (13 daqiqaga kamaydi)"],
            ["Eng katta o'sish?", "60 va undan katta: 20 → 31 (11 daqiqaga oshdi)"],
            ["2005 da eng faol guruh?", "18–29, 48 daqiqa"],
            ["2025 da eng faol guruh?", "18–29, 35 daqiqa"],
          ],
        },
        { t: "tip", tone: "warn", md: "Hisob-kitoblarni **tekshiring**: 48 − 35 = 13, 31 − 20 = 11. Raqam xatosi eng yomon xatolardan biri, chunki u butun gapni noto'g'ri qiladi." },
        { t: "check", ex: { k: "choice", q: "By how many minutes did the 60-and-over group increase its daily exercise?", opts: ["11", "13", "31", "9"], a: 0, why: "31 − 20 = **11** daqiqa." } },
        { t: "check", ex: { k: "tf", q: "In 2005 the oldest group was the least active.", a: true, why: "60+ guruhi 2005 da eng kam (20 daqiqa) mashq qilgan." } },
      ],
    },
    {
      title: "Overview va asosiy xususiyatlar",
      blocks: [
        { t: "p", md: "**Overview** — hisobotning eng muhim qismi. U 1–2 gapdan iborat va **raqamsiz** umumiy rasmni beradi: *nima oshdi, nima kamaydi, qaysi guruh ajralib turadi*." },
        {
          t: "table", head: ["Funksiya", "Foydali ibora"], speak: [1],
          rows: [
            ["Overview boshlash", "Overall, … / In general, … / It is clear that …"],
            ["Umumiy tendensiya", "…rose, whereas … fell. / The gap narrowed."],
            ["Eng ko'zga tashlanadigan xususiyat", "The most noticeable feature is … / … was by far the …"],
            ["Eng katta o'zgarish", "The biggest rise was in … / The sharpest fall was in …"],
          ],
        },
        {
          t: "examples", items: [
            { en: "Overall, younger people exercised less in 2025, whereas the older groups became more active.", uz: "Umuman olganda, yoshlar 2025-yilda kamroq mashq qildi, keksa guruhlar esa faolroq bo'ldi." },
            { en: "The most noticeable feature is the rise in exercise among the over-sixties.", uz: "Eng e'tiborli jihat — oltmishdan oshganlar orasida mashqning oshishi." },
            { en: "As a result, the gap between the oldest and youngest groups narrowed.", uz: "Natijada eng keksa va eng yosh guruhlar orasidagi tafovut qisqardi." },
          ],
        },
        { t: "tip", tone: "info", md: "**Key features** — 2–3 ta eng muhim narsa. Hamma raqamni yozish shart emas, **guruhlarga bo'lib** yozing: o'xshash o'zgarishlarni bitta bo'limga (*yoshlar kamaydi*), boshqalarini ikkinchisiga (*keksalar oshdi*)." },
        { t: "check", ex: { k: "choice", q: "Which sentence is a good overview for the exercise table?", opts: ["Overall, the two younger groups exercised less in 2025, while the two older groups exercised more.", "In 2005, the 18–29 group exercised 48 minutes.", "I believe older people should exercise more.", "The table is about exercise."], a: 0, why: "Overview — raqamsiz umumiy tendensiya. Boshqa variantlar mayda tafsilot, fikr yoki juda umumiy." } },
        { t: "check", ex: { k: "fill", q: "Overall, the youngest group exercised less in 2025, ___ the oldest group exercised more. (contrast)", a: ["whereas", "while"], why: "Qarama-qarshilik: **whereas / while**." } },
      ],
    },
    {
      title: "Taqqoslash va bog'lovchi iboralar",
      blocks: [
        { t: "p", md: "Raqamlarni ketma-ket sanash o'rniga **bog'lang va solishtiring**. Bu ball oshiradigan eng muhim usul." },
        {
          t: "table", head: ["Maqsad", "Ibora", "Misol"], speak: [2],
          rows: [
            ["qarama-qarshilik", "whereas, while, by contrast, in contrast", "The young exercised less, whereas the old exercised more."],
            ["o'xshashlik", "similarly, likewise, in the same way", "Similarly, the 30–44 group fell."],
            ["ikkita qiymatni ketma-ket", "respectively", "The figures were 48 and 36 minutes respectively."],
            ["taxminiy raqam", "approximately, roughly, around, just over", "The figure was approximately 30 minutes."],
            ["natija", "as a result, consequently", "As a result, the gap narrowed."],
            ["tartib", "followed by, then, after that", "…the 18–29 group, followed by the 30–44 group."],
          ],
        },
        { t: "p", md: "**Respectively** — ikkita ro'yxatni mosligi bo'yicha bog'laydi. *The 18–29 and 30–44 groups exercised 35 and 30 minutes respectively* — birinchi guruh 35, ikkinchisi 30." },
        { t: "tip", tone: "warn", md: "**Respectively** gap **oxirida** turadi va oldin ikkala narsa ham aytilgan bo'lishi kerak. ~~Respectively, the figures fell~~ — noto'g'ri. **Comparable** («taqqoslasa bo'ladigan») va **in terms of** («…jihatdan») ham foydali: *In terms of exercise, the oldest group caught up.*" },
        { t: "check", ex: { k: "fix", wrong: "In 2025 the 18–29 and 30–44 groups exercised 35 and 30 minutes respectfully.", a: ["In 2025 the 18–29 and 30–44 groups exercised 35 and 30 minutes respectively."], hint: "imlo / so'z", why: "**Respectively** (mos ravishda), *respectfully* — «hurmat bilan»." } },
        { t: "check", ex: { k: "choice", q: "The 45–59 group rose; ___, the 30–44 group fell.", opts: ["by contrast", "similarly", "as a result", "respectively"], a: 0, why: "Qarama-qarshi tendensiya: **by contrast**." } },
        { t: "check", ex: { k: "choice", q: "Which gives an approximate number?", opts: ["The figure was approximately 30 minutes.", "The figure was exactly 30 minutes.", "The figure was respectively 30 minutes.", "The figure was whereas 30 minutes."], a: 0, why: "**Approximately** = taxminan." } },
      ],
    },
    {
      title: "Namuna hisobot",
      blocks: [
        {
          t: "text", title: "Model report (about 170 words)", voice: "emma",
          en: "The table illustrates how many minutes per day people in four age groups spent on exercise in 2005 and in 2025.\n\nOverall, younger people exercised less in 2025 than twenty years earlier, whereas the two older groups became noticeably more active. As a result, the gap between the youngest and oldest groups narrowed considerably.\n\nIn 2005, the 18 to 29 group was the most active, with 48 minutes a day, followed by the 30 to 44 group at 36 minutes. By 2025, however, these figures had fallen to 35 and 30 minutes respectively, a drop of 13 minutes for the youngest group.\n\nBy contrast, people aged 45 to 59 increased their daily exercise from 28 to 33 minutes. The over-sixties showed the biggest rise, from 20 to 31 minutes, an increase of 11 minutes. Consequently, the oldest group, which had been the least active in 2005, was more active than the 30 to 44 group in 2025.",
          uz: "Jadvalda 2005 va 2025-yillarda to'rtta yosh guruhidagi odamlar kuniga necha daqiqa jismoniy mashq qilgani ko'rsatilgan.\n\nUmuman olganda, yoshlar 2025-yilda yigirma yil oldingidan kamroq mashq qildi, ikkita keksa guruh esa sezilarli faolroq bo'ldi. Natijada eng yosh va eng keksa guruhlar orasidagi tafovut ancha qisqardi.\n\n2005-yilda 18 dan 29 gacha guruh eng faol edi, kuniga 48 daqiqa, undan keyin 30 dan 44 gacha guruh 36 daqiqa bilan turardi. Biroq 2025-yilga kelib bu ko'rsatkichlar mos ravishda 35 va 30 daqiqagacha tushdi, eng yosh guruh uchun 13 daqiqaga kamaydi.\n\nAksincha, 45 dan 59 gacha yoshdagilar kunlik mashqni 28 dan 33 daqiqagacha oshirdi. Oltmishdan oshganlar eng katta o'sishni ko'rsatdi: 20 dan 31 daqiqagacha, 11 daqiqaga oshdi. Shunday qilib, 2005-yilda eng kam faol bo'lgan eng keksa guruh 2025-yilda 30 dan 44 gacha guruhdan faolroq bo'ldi.",
        },
        { t: "check", ex: { k: "choice", q: "Which paragraph contains the overview?", opts: ["The second paragraph", "The first paragraph", "The third paragraph", "The last sentence only"], a: 0, why: "Ikkinchi abzats *Overall, …* bilan boshlanadi va umumiy tendensiyani beradi." } },
        { t: "check", ex: { k: "tf", q: "In 2025 the 60-and-over group exercised more than the 30–44 group.", a: true, why: "2025: 60+ — 31 daqiqa, 30–44 — 30 daqiqa." } },
        { t: "check", ex: { k: "choice", q: "The writer uses 'respectively' to link ___.", opts: ["the two figures 35 and 30 with their groups", "two opinions", "two years", "the question and the answer"], a: 0, why: "*35 and 30 minutes respectively* — ikkita qiymat ikkita guruhga mos." } },
      ],
    },
    {
      title: "Tipik xatolar: raqam va predloglar",
      blocks: [
        { t: "p", md: "Hisobotlarda eng ko'p uchraydigan xatolar raqam va **predloglar** bilan bog'liq. O'zbekcha «11 daqiqaga oshdi» deymiz, inglizcha esa **by**. Quyida to'rtta xato:" },
        { t: "compare",
          good: { title: "To'g'ri", items: ["It increased by 11 minutes.", "In 2025 the figure was 31 minutes.", "The young exercised less than in 2005.", "The oldest group rose from 20 to 31."] },
          bad: { title: "Xato", items: ["It increased with 11 minutes.", "In 2025 the figure is 31 minutes.", "The young exercised less than 2005.", "The oldest group rose from 20 until 31."] } },
        { t: "check", ex: { k: "fix", wrong: "The figure increased with 11 minutes.", a: ["The figure increased by 11 minutes."], hint: "predlog", why: "O'zgarish miqdori: **by**." } },
        { t: "check", ex: { k: "fix", wrong: "In 2005 the 60+ group exercises 20 minutes a day.", a: ["In 2005 the 60+ group exercised 20 minutes a day."], hint: "o'tgan zamon", why: "2005 — o'tgan yil: **exercised**." } },
        { t: "check", ex: { k: "fix", wrong: "Young people exercised less than 2005.", a: ["Young people exercised less than in 2005."], hint: "than + in", why: "Vaqt bilan solishtirganda: **than in 2005**." } },
        { t: "check", ex: { k: "fix", wrong: "The oldest group rose from 20 until 31 minutes.", a: ["The oldest group rose from 20 to 31 minutes."], hint: "from … to", why: "Qiymat orasi: **from … to …**, *until* vaqt uchun." } },
      ],
    },
    {
      title: "Tekshiruv ro'yxati",
      blocks: [
        { t: "p", md: "Yozgandan keyin **eng kamida 4 daqiqa** tekshiring. Quyidagi ro'yxat bilan:" },
        {
          t: "table", head: ["Tekshiring", "Savol"],
          rows: [
            ["Kirish", "Savolni o'z so'zim bilan aytdimmi (nusxa ko'chirmaganmi)?"],
            ["Overview", "Raqamsiz umumiy tendensiya bormi?"],
            ["Raqamlar", "Har bir raqam jadvalga mos keladimi? Birliklar (*minutes, per cent*) bormi?"],
            ["Zamon", "Barcha o'tgan yillar uchun o'tgan zamon ishlatilganmi?"],
            ["Predloglar", "from … to, by, at, between … and … to'g'rimi?"],
            ["So'zlar soni", "150 dan kammi? Fikr yoki *I think* yo'qmi?"],
          ],
        },
        { t: "tip", tone: "good", md: "Vaqt kam bo'lsa, **overview** ni hech qachon tashlamang: u ball uchun eng muhim. Yaxshi hisobot raqamlar ko'p emas, **to'g'ri tanlangan** va **bog'langan** raqamlardan iborat." },
        { t: "check", ex: { k: "tf", q: "If you do not have time, you can skip the overview.", a: false, why: "Overview eng muhim qism, uni tashlab bo'lmaydi." } },
        { t: "check", ex: { k: "choice", q: "A sentence that gives your opinion is a problem in Task 1 because ___.", opts: ["the task asks only for facts from the data", "opinions are too short", "it uses present tense", "it is not formal"], a: 0, why: "Task 1 faqat ma'lumotni tasvirlaydi." } },
      ],
    },
    {
      title: "Dialog: Qoralamani tekshirish",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Zarina", en: "Rustam, could you check my report? I wrote it in twenty minutes.", uz: "Rustam, hisobotimni tekshirib berolasizmi? Uni yigirma daqiqada yozdim." },
            { who: "Rustam", en: "Sure. Your introduction is clear, but I can't find the overview.", uz: "Albatta. Kirishingiz aniq, lekin overview'ni topa olmayapman." },
            { who: "Zarina", en: "Oh, I went straight to the details. I'll add one sentence: younger groups fell, older ones rose.", uz: "Ha, to'g'ridan-to'g'ri tafsilotlarga o'tib ketdim. Bitta gap qo'shaman: yoshlar kamaydi, keksalar oshdi." },
            { who: "Rustam", en: "Good. Also check your tenses. You wrote 'In 2005 the figure is 48'.", uz: "Yaxshi. Zamonlarni ham tekshiring. Siz 'In 2005 the figure is 48' deb yozibsiz." },
            { who: "Zarina", en: "You're right. It should be 'was'. And I wrote 'increased with 11 minutes'.", uz: "Haqsiz. 'was' bo'lishi kerak. Va men 'increased with 11 minutes' deb yozibman." },
            { who: "Rustam", en: "That should be 'by'. Otherwise it reads well, and the numbers match the table.", uz: "Bu 'by' bo'lishi kerak. Aks holda yaxshi o'qiladi va raqamlar jadvalga mos." },
            { who: "Zarina", en: "Thanks. Next time I'll leave five minutes for checking.", uz: "Rahmat. Keyingi safar tekshirishga besh daqiqa qoldiraman." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "What is missing from Zarina's draft?", opts: ["An overview", "An introduction", "Numbers", "Paragraphs"], a: 0, why: "Rustam: *I can't find the overview.*" } },
        { t: "check", ex: { k: "match", pairs: [["overview", "umumiy tendensiya"], ["respectively", "mos ravishda"], ["approximately", "taxminan"], ["whereas", "holbuki, aksincha"]] } },
      ],
    },
  ],
  words: [
    { en: "overview", uz: "umumiy ko'rinish, umumlashtirish", ipa: "ˈəʊ.və.vjuː", pos: "noun", ex: "The report begins with a short overview of the results.", exUz: "Hisobot natijalarning qisqa umumiy ko'rinishi bilan boshlanadi." },
    { en: "respectively", uz: "mos ravishda", ipa: "rɪˈspek.tɪv.li", pos: "adv", ex: "The two teams scored three and five goals respectively.", exUz: "Ikki jamoa mos ravishda uchta va beshta gol urdi." },
    { en: "approximately", uz: "taxminan", ipa: "əˈprɒk.sɪ.mət.li", pos: "adv", ex: "The tunnel is approximately two kilometres long.", exUz: "Tunnel taxminan ikki kilometr uzunlikda." },
    { en: "illustrate", uz: "ko'rsatib bermoq, tasvirlamoq", ipa: "ˈɪl.ə.streɪt", pos: "verb", ex: "The graph illustrates the rise in energy prices.", exUz: "Grafik energiya narxlarining oshishini ko'rsatadi." },
    { en: "category", uz: "toifa, kategoriya", ipa: "ˈkæt.ə.ɡər.i", pos: "noun", ex: "Sales are divided into three categories.", exUz: "Savdo uchta toifaga bo'lingan." },
    { en: "key feature", uz: "asosiy xususiyat", ipa: "kiː ˈfiː.tʃə", pos: "noun", ex: "The key feature of the chart is the sharp fall in 2020.", exUz: "Diagrammaning asosiy xususiyati 2020-yildagi keskin pasayish." },
    { en: "comparable", uz: "taqqoslasa bo'ladigan, o'xshash", ipa: "ˈkɒm.pər.ə.bəl", pos: "adj", ex: "The two cities have comparable populations.", exUz: "Ikki shaharning aholisi taqqoslasa bo'ladigan darajada." },
    { en: "in terms of", uz: "…jihatdan, …nuqtai nazaridan", ipa: "ɪn tɜːmz əv", pos: "phrase", ex: "In terms of cost, the train is cheaper.", exUz: "Narx jihatidan poyezd arzonroq." },
    { en: "noteworthy", uz: "e'tiborga loyiq", ipa: "ˈnəʊtˌwɜː.ði", pos: "adj", ex: "It is noteworthy that sales rose in winter.", exUz: "Savdoning qishda oshgani e'tiborga loyiq." },
    { en: "tendency", uz: "moyillik, yo'nalish", ipa: "ˈten.dən.si", pos: "noun", ex: "There is a tendency for prices to rise in summer.", exUz: "Narxlar yozda oshishga moyil." },
  ],
  practice: [
    { k: "choice", q: "The overview of a Task 1 report should contain ___.", opts: ["the general trend without many numbers", "all the numbers in the table", "your opinion", "a long conclusion"], a: 0, why: "Overview — umumiy tendensiya, raqamsiz." },
    { k: "choice", q: "The figures were 48 and 36 minutes ___.", opts: ["respectively", "respectfully", "whereas", "approximately"], a: 0, why: "**Respectively** — mos ravishda." },
    { k: "listen", say: "Overall, younger people exercised less, whereas older people exercised more.", opts: ["Overall, younger people exercised less, whereas older people exercised more.", "Overall, younger people exercise less, whereas older people exercise more.", "Overall, younger people exercised less, respectively older people exercised more.", "Overall, younger people exercised less than older people exercised more."], a: 0, why: "**Whereas** qarama-qarshi tendensiyani bog'laydi; o'tgan zamon." },
    { k: "fill", q: "The figure rose ___ 11 minutes, from 20 to 31. (the amount of change)", a: ["by"], why: "O'zgarish miqdori: **by**." },
    { k: "fill", q: "The figure rose ___ 20 to 31 minutes between 2005 and 2025.", a: ["from"], why: "Boshlang'ich qiymat: **from**." },
    { k: "fill", q: "The report illustrates ___ many minutes people spent on exercise. (question word)", a: ["how"], why: "**Illustrates how many minutes…** — savol so'zi *how*." },
    { k: "order", uz: "Umuman olganda, yoshlar kamroq mashq qildi.", words: ["Overall,", "younger", "people", "exercised", "less."], extra: ["exercise", "than"], why: "Overview o'tgan zamonda." },
    { k: "order", uz: "Natijada tafovut qisqardi.", words: ["As", "a", "result,", "the", "gap", "narrowed."], extra: ["is", "narrow"], why: "**As a result,** + gap, o'tgan zamon." },
    { k: "translate", uz: "Jadvalda yosh guruhlari bo'yicha mashq qilingan vaqt ko'rsatilgan.", a: ["The table illustrates the time spent on exercise by age group.", "The table shows the time spent on exercise by age group.", "The table illustrates how much time was spent on exercise by age group.", "The table shows how much time was spent on exercise by age group."], why: "**The table illustrates / shows…** kirish." },
    { k: "translate", uz: "Eng katta o'sish oltmishdan oshganlar orasida bo'ldi.", a: ["The biggest rise was among the over-sixties.", "The biggest increase was among the over-sixties.", "The biggest rise was among people over sixty.", "The biggest increase was among people over sixty.", "The biggest rise was in the over-sixty group."], why: "**The biggest rise was among…**" },
    { k: "match", pairs: [["overview", "umumiy ko'rinish"], ["approximately", "taxminan"], ["category", "toifa"], ["tendency", "moyillik"], ["noteworthy", "e'tiborga loyiq"]] },
    { k: "fix", wrong: "The number of people increased with 5 per cent.", a: ["The number of people increased by 5 per cent."], hint: "predlog", why: "**Increased by**." },
    { k: "fix", wrong: "In 2015 the rate is 20 per cent.", a: ["In 2015 the rate was 20 per cent.", "In 2015 the rate stood at 20 per cent."], hint: "o'tgan zamon", why: "2015 — **was**." },
    { k: "tf", q: "*In my opinion, this result is terrible* — Task 1 hisobotiga mos jumla.", a: false, why: "Task 1 da shaxsiy fikr yo'q." },
    { k: "dictation", say: "The oldest group, which was the least active in 2005, became more active than the 30 to 44 group.", uz: "Eng keksa guruh, 2005-yilda eng kam faol bo'lgan, 30 dan 44 gacha guruhdan faolroq bo'ldi.", why: "Nisbiy gap + taqqoslash." },
    { k: "speak", say: "Overall, the two younger groups exercised less, whereas the two older groups exercised more.", uz: "Umuman olganda, ikki yosh guruh kamroq mashq qildi, ikki keksa guruh esa ko'proq." },
  ],
  quiz: [
    { k: "choice", q: "Which linking word expresses contrast?", opts: ["whereas", "respectively", "approximately", "category"], a: 0, why: "**Whereas** qarama-qarshilik." },
    { k: "choice", q: "Data: 18–29 fell from 48 to 35. By how much did it fall?", opts: ["13 minutes", "11 minutes", "35 minutes", "83 minutes"], a: 0, why: "48 − 35 = **13**." },
    { k: "choice", q: "Which sentence is correct?", opts: ["The figure peaked at 52 in 2025.", "The figure is peaked at 52 in 2025.", "The figure peaks to 52 in 2025.", "The figure was peak at 52 in 2025."], a: 0, why: "**Peaked at** + qiymat, o'tgan zamon." },
    { k: "choice", q: "Which word means 'about, not exact'?", opts: ["approximately", "respectively", "whereas", "noteworthy"], a: 0, why: "**Approximately** — taxminan." },
    { k: "fill", q: "In ___ of cost, the train is cheaper than the plane. (regarding)", a: ["terms"], uz: "Narx jihatidan poyezd samolyotdan arzonroq.", why: "**In terms of**." },
    { k: "fill", q: "The 60+ group rose; ___ contrast, the 18–29 group fell.", a: ["by", "in"], uz: "60+ guruhi oshdi; aksincha, 18–29 guruhi kamaydi.", why: "**By contrast / in contrast**." },
    { k: "order", uz: "Diagramma narxlarning oshishini ko'rsatadi.", words: ["The", "chart", "illustrates", "the", "rise", "in", "prices."], extra: ["illustrate", "of"], why: "**Illustrates the rise in prices**." },
    { k: "translate", uz: "Ko'rsatkichlar mos ravishda 35 va 30 daqiqa edi.", a: ["The figures were 35 and 30 minutes respectively.", "The figures were 35 and 30 minutes, respectively."], why: "**respectively** oxirida." },
    { k: "fix", wrong: "The rate rose until 52 per cent from 38.", a: ["The rate rose from 38 to 52 per cent."], hint: "from … to", why: "**from 38 to 52**." },
    { k: "tf", q: "A Task 1 report must have at least 150 words.", a: true, why: "IELTS Academic Task 1: kamida 150 so'z." },
  ],
  summary: [
    "Hisobot: **kirish (paraphrase) → overview → asosiy bo'lim 1 → asosiy bo'lim 2**. Kamida 150 so'z, 20 daqiqa. Fikr va keraksiz xulosa yo'q.",
    "**Overview**: raqamsiz umumiy tendensiya (*Overall, … whereas …*); eng katta o'zgarishni ko'rsating (*the biggest rise was…*).",
    "Bog'lash: **whereas, by contrast, similarly, as a result, respectively, approximately, in terms of**.",
    "Tekshiring: **zamon** (o'tgan yillar — o'tgan zamon), **predlog** (*from … to, by, at*), **raqam**, **per cent**.",
  ],
  homework: "Haftalik odatlaringiz haqida 4 qatorli jadval tuzing (masalan, 2 hafta uchun qadamlar soni) va 20 daqiqa ichida 150 so'zli hisobot yozing. Namuna tuzilmasidan foydalaning va tekshiruv ro'yxati bilan xatolarni toping.",
};

export default lesson;
