import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u23-l6",
  title: "Giving a short presentation",
  titleUz: "Qisqa taqdimot qilish: tuzilma va iboralar",
  goal: "Ikki-uch daqiqalik taqdimotni **tuzilma bilan** (kirish, asosiy fikrlar, xulosa, savollar) qurasiz, har bosqichda **tayyor iboralarni** ishlatasiz (*I'd like to talk about…, Moving on to…, To sum up…*) va *talk about* o'rniga *tell about* kabi xatolardan qochasiz.",
  slides: [
    {
      title: "Yaxshi taqdimotning tuzilmasi",
      blocks: [
        { t: "p", md: "Ish yoki o'qishda qisqa taqdimot qilish kerak bo'ladi. Tinglovchilar sizni **tuzilma** bo'lsa yaxshi tushunadi. Oddiy reja beshta qismdan iborat:" },
        {
          t: "table", head: ["Qism", "Maqsadi", "Misol ibora"], speak: [2],
          rows: [
            ["1. Opening", "Salomlashish va mavzuni aytish", "Today I'd like to talk about online learning."],
            ["2. Outline", "Reja: nimalar haqida gapirasiz", "I'll start with the benefits, then look at the problems."],
            ["3. Main points", "Asosiy fikrlar, har biriga misol", "First of all, online courses save time."],
            ["4. Conclusion", "Xulosa: asosiy fikrni takrorlash", "To sum up, online learning is useful but not perfect."],
            ["5. Questions", "Savollarni taklif qilish", "Thank you for listening. Are there any questions?"],
          ],
        },
        { t: "tip", tone: "info", md: "Eski maslahat hali ham ishlaydi: **ayting nimani aytmoqchisiz → ayting → ayting nimani aytdingiz.** Ya'ni rejani avval e'lon qiling, keyin gapiring, oxirida qisqacha takrorlang." },
        { t: "check", ex: { k: "choice", q: "Which part comes at the very end?", opts: ["Thank you for listening. Are there any questions?", "Today I'd like to talk about my job.", "First of all, I want to explain my job.", "I'll start with my daily work."], a: 0, why: "Taqdimot oxirida tinglovchilarga rahmat aytib, savol so'raladi." } },
      ],
    },
    {
      title: "Boshlash va reja",
      blocks: [
        { t: "p", md: "Birinchi o'ttiz soniya muhim. Salomlashing, o'zingizni tanishtiring (kerak bo'lsa), mavzuni va rejani ayting." },
        {
          t: "examples", items: [
            { en: "Good morning, everyone. My name is Aziz.", uz: "Hammaga xayrli tong. Ismim Aziz." },
            { en: "Today I'd like to talk about healthy habits at work.", uz: "Bugun men ishdagi sog'lom odatlar haqida gapirmoqchiman." },
            { en: "My talk has three parts.", uz: "Mening nutqim uch qismdan iborat." },
            { en: "First, I'll explain the problem. Then I'll give some examples. Finally, I'll suggest a solution.", uz: "Avval muammoni tushuntiraman. Keyin misollar keltiraman. Oxirida yechim taklif qilaman." },
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I'd like to talk about my city.", "I want to explain the idea to you.", "Let me discuss this problem."] },
          bad: { title: "Xato", items: ["I want to tell about my city.", "I want to explain you the idea.", "Let me discuss about this problem."] },
        },
        { t: "tip", tone: "warn", md: "O'zbekcha «... haqida gapirmoq» deymiz, shuning uchun *tell about* yoki *discuss about* deb yuboramiz. Inglizchada **talk about** (haqida gapirmoq), **discuss** (predlogsiz!). Va **explain something to someone**, *explain you* emas." },
        { t: "check", ex: { k: "fix", wrong: "I'd like to discuss about the traffic problem.", a: ["I'd like to discuss the traffic problem.", "I would like to discuss the traffic problem.", "I'd like to talk about the traffic problem.", "I would like to talk about the traffic problem."], hint: "discuss dan keyin predlog kerakmi?", why: "**discuss** to'g'ridan-to'g'ri to'ldiruvchi oladi; yoki **talk about** deymiz." } },
      ],
    },
    {
      title: "Fikrdan fikrga o'tish",
      blocks: [
        { t: "p", md: "Tinglovchi sizning qayerdaligingizni bilishi kerak. Buning uchun **signal iboralari** (signposting) ishlatiladi." },
        {
          t: "table", head: ["Vazifa", "Ibora"], speak: [1],
          rows: [
            ["Birinchi fikr", "First of all, … / Let's start with …"],
            ["Keyingi fikr", "Moving on to … / Next, I'd like to look at …"],
            ["Misol keltirish", "For example, … / A good example is …"],
            ["Nimanidir ta'kidlash", "I'd like to emphasise that … / The key point is …"],
            ["Xulosaga o'tish", "Finally, … / To sum up, … / In conclusion, …"],
          ],
        },
        {
          t: "examples", items: [
            { en: "Moving on to my second point: sleep.", uz: "Ikkinchi fikrimga o'taman: uyqu." },
            { en: "I'd like to emphasise that small changes can make a big difference.", uz: "Shuni ta'kidlamoqchimanki, kichik o'zgarishlar katta farq qilishi mumkin." },
            { en: "To sum up, we need better habits, not more rules.", uz: "Xulosa qilib aytganda, bizga ko'proq qoida emas, yaxshiroq odatlar kerak." },
          ],
        },
        { t: "check", ex: { k: "fill", q: "___ on to the next point, I'd like to show you a chart.", a: ["Moving"], hint: "M…", why: "**Moving on to …** — keyingi fikrga o'tishda ishlatiladi." } },
        { t: "check", ex: { k: "fill", q: "To ___ up, regular exercise is good for everyone.", a: ["sum"], why: "**To sum up** — xulosa qilib aytganda." } },
      ],
    },
    {
      title: "Slayd, diagramma va tinglovchi bilan aloqa",
      blocks: [
        { t: "p", md: "Slaydga ishora qilganda va tinglovchilarning diqqatini tortganda quyidagi iboralar yordam beradi." },
        {
          t: "examples", items: [
            { en: "As you can see on this slide, most people sleep less than seven hours.", uz: "Bu slaydda ko'rib turganingizdek, ko'pchilik yetti soatdan kam uxlaydi." },
            { en: "I'd like to draw your attention to the second column.", uz: "Ikkinchi ustunga e'tiboringizni qaratmoqchiman." },
            { en: "Does everyone understand so far?", uz: "Hozirgacha hamma tushundimi?" },
            { en: "Let me repeat that, because it's important.", uz: "Buni takrorlayman, chunki bu muhim." },
          ],
        },
        { t: "p", md: "**Savol-javob** vaqtida:" },
        {
          t: "table", head: ["Vaziyat", "Ibora"], speak: [1],
          rows: [
            ["Savol so'rashni taklif qilish", "Are there any questions?"],
            ["Savol yaxshi bo'lsa", "That's a good question."],
            ["Savol tushunarsiz bo'lsa", "Could you repeat that, please?"],
            ["Javobni bilmasangiz", "I'm afraid I don't know, but I can find out."],
          ],
        },
        { t: "tip", tone: "good", md: "Tinglovchilarning **ko'ziga qarang** (*eye contact*), sekin gapiring va muhim fikrdan keyin **to'xtab turing** (*pause*). Shoshilmaslik — ishonchli ko'rinishning eng oson yo'li." },
        { t: "check", ex: { k: "choice", q: "You do not know the answer to a question. What do you say?", opts: ["I'm afraid I don't know, but I can find out.", "That is not my problem.", "You should not ask this.", "I explain you tomorrow."], a: 0, why: "Xushmuomala va halol javob: **I'm afraid I don't know, but I can find out.**" } },
      ],
    },
    {
      title: "O'qing: namunaviy taqdimot",
      blocks: [
        {
          t: "text", title: "A short talk about sleep",
          en: "Good morning, everyone. Today I'd like to talk about sleep. My talk has three parts. First of all, I'll explain why sleep matters. Then I'll look at the problems many students have. Finally, I'll give some simple advice. Let's start with the first point. Sleep helps us remember what we learn. As you can see on this slide, students who sleep well get better results. Moving on to the problems: many students use their phones late at night. I'd like to emphasise that this is a bad habit. To sum up, good sleep is not a luxury, it is a basic need. Switch off your phone an hour before bed. Thank you for listening. Are there any questions?",
          uz: "Hammaga xayrli tong. Bugun men uyqu haqida gapirmoqchiman. Nutqim uch qismdan iborat. Avvalo, uyqu nega muhimligini tushuntiraman. Keyin ko'p talabalarda uchraydigan muammolarni ko'rib chiqaman. Oxirida oddiy maslahatlar beraman. Birinchi fikrdan boshlaymiz. Uyqu o'rganganlarimizni eslab qolishga yordam beradi. Bu slaydda ko'rib turganingizdek, yaxshi uxlaydigan talabalar yaxshiroq natija ko'rsatadi. Muammolarga o'tsak: ko'p talabalar kechasi kech telefonidan foydalanadi. Shuni ta'kidlamoqchimanki, bu yomon odat. Xulosa qilib aytganda, yaxshi uyqu hashamat emas, asosiy ehtiyoj. Yotishdan bir soat oldin telefonni o'chiring. E'tiboringiz uchun rahmat. Savollar bormi?",
          voice: "emma",
        },
        { t: "check", ex: { k: "tf", q: "The speaker says that using phones late at night is a good habit.", a: false, why: "Matnda: *I'd like to emphasise that this is a bad habit.*" } },
        { t: "check", ex: { k: "choice", q: "Which phrase does the speaker use to start the conclusion?", opts: ["To sum up", "First of all", "Moving on to", "For example"], a: 0, why: "Matnda: *To sum up, good sleep is not a luxury…*" } },
      ],
    },
    {
      title: "Dialog: taqdimotga tayyorgarlik",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Aziz", en: "Helen, could you listen to my presentation? I have to deliver it tomorrow.", uz: "Helen, taqdimotimni tinglab bera olasanmi? Ertaga uni aytishim kerak." },
            { who: "Helen", en: "Of course. What's the topic?", uz: "Albatta. Mavzu nima?" },
            { who: "Aziz", en: "Public transport in our city. I'll talk for about three minutes.", uz: "Shahrimizdagi jamoat transporti. Taxminan uch daqiqa gapiraman." },
            { who: "Helen", en: "Good. My advice is to speak slowly and look at the audience.", uz: "Yaxshi. Maslahatim: sekin gapir va tinglovchilarga qarab tur." },
            { who: "Aziz", en: "I know. I always read from my notes and forget eye contact.", uz: "Bilaman. Doim yozuvimdan o'qiyman va ko'z bilan aloqani unutaman." },
            { who: "Helen", en: "Try to rehearse it twice tonight. And remember to pause after your main points.", uz: "Bugun kechqurun uni ikki marta mashq qilib ko'r. Asosiy fikrlardan keyin to'xtab turishni unutma." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "What does Helen advise Aziz to do?", opts: ["Rehearse and pause after the main points.", "Speak very fast.", "Read everything from his notes.", "Make the talk much longer."], a: 0, why: "Helen: *rehearse it twice… pause after your main points.*" } },
      ],
    },
  ],
  words: [
    { en: "audience", uz: "tinglovchilar, auditoriya", ipa: "ˈɔː.di.əns", pos: "noun", ex: "The audience listened carefully.", exUz: "Tinglovchilar diqqat bilan eshitdi." },
    { en: "topic", uz: "mavzu", ipa: "ˈtɒp.ɪk", pos: "noun", ex: "Choose a topic that you know well.", exUz: "O'zingiz yaxshi biladigan mavzuni tanlang." },
    { en: "slide", uz: "slayd", ipa: "slaɪd", pos: "noun", ex: "Put only a few words on each slide.", exUz: "Har bir slaydga bir necha so'z yozing." },
    { en: "structure", uz: "tuzilma", ipa: "ˈstrʌk.tʃər", pos: "noun", ex: "A clear structure helps the audience.", exUz: "Aniq tuzilma tinglovchilarga yordam beradi." },
    { en: "summarise", uz: "qisqacha bayon qilmoq", ipa: "ˈsʌm.ə.raɪz", pos: "verb", ex: "Let me summarise the main points.", exUz: "Asosiy fikrlarni qisqacha aytib o'taman." },
    { en: "emphasise", uz: "ta'kidlamoq", ipa: "ˈem.fə.saɪz", pos: "verb", ex: "I want to emphasise this idea.", exUz: "Bu fikrni ta'kidlamoqchiman." },
    { en: "rehearse", uz: "mashq qilmoq, tayyorlanmoq", ipa: "rɪˈhɜːs", pos: "verb", ex: "We rehearsed the talk three times.", exUz: "Biz nutqni uch marta mashq qildik." },
    { en: "pause", uz: "to'xtab turmoq; pauza", ipa: "pɔːz", pos: "verb", ex: "Pause for a moment after a key idea.", exUz: "Asosiy fikrdan keyin bir lahza to'xtab turing." },
    { en: "eye contact", uz: "ko'z bilan aloqa", ipa: "ˈaɪ ˌkɒn.tækt", pos: "noun", ex: "Keep eye contact with the audience.", exUz: "Tinglovchilar bilan ko'z aloqasini saqlang." },
    { en: "convey", uz: "yetkazmoq, bildirmoq", ipa: "kənˈveɪ", pos: "verb", ex: "Good speakers convey their message clearly.", exUz: "Yaxshi notiqlar o'z fikrini aniq yetkazadi." },
  ],
  practice: [
    { k: "match", pairs: [["audience", "tinglovchilar"], ["topic", "mavzu"], ["structure", "tuzilma"], ["rehearse", "mashq qilmoq"], ["emphasise", "ta'kidlamoq"], ["summarise", "qisqacha bayon qilmoq"]] },
    { k: "choice", q: "Today I'd like to ___ about renewable energy.", opts: ["talk", "tell", "say", "speak to"], a: 0, why: "**talk about** — haqida gapirmoq." },
    { k: "choice", q: "Which phrase begins a conclusion?", opts: ["To sum up", "For example", "Moving on to", "First of all"], a: 0, why: "**To sum up** — xulosa boshlanadi." },
    { k: "fill", q: "___ of all, I'll explain the problem.", a: ["First"], uz: "Avvalo, muammoni tushuntiraman.", why: "**First of all** — birinchi fikr." },
    { k: "fill", q: "As you can ___ on this slide, prices are going up.", a: ["see"], uz: "Bu slaydda ko'rib turganingizdek, narxlar oshmoqda.", why: "**As you can see** — slaydga ishora." },
    { k: "fill", q: "I'd like to ___ that this point is very important.", a: ["emphasise", "emphasize"], uz: "Bu fikr juda muhimligini ta'kidlamoqchiman.", why: "**emphasise** — ta'kidlamoq." },
    { k: "listen", say: "Moving on to my second point.", opts: ["Moving on to my second point.", "Moving on to my last point.", "Looking at my second point.", "Move on to my second point."], a: 0 },
    { k: "dictation", say: "Thank you for listening. Are there any questions?", uz: "Tinglaganingiz uchun rahmat. Savollar bormi?" },
    { k: "order", uz: "Bugun men sog'lom ovqatlanish haqida gapirmoqchiman.", words: ["Today", "I'd", "like", "to", "talk", "about", "healthy", "eating."], extra: ["tell", "discuss"], alt: [["Today", "I", "would", "like", "to", "talk", "about", "healthy", "eating."]] },
    { k: "order", uz: "Nutqim uch qismdan iborat.", words: ["My", "talk", "has", "three", "parts."], extra: ["have", "part"] },
    { k: "fix", wrong: "I want to tell about my hometown.", a: ["I want to talk about my hometown.", "I want to tell you about my hometown.", "I'd like to talk about my hometown."], hint: "tell about emas", why: "**talk about** yoki **tell you about** deymiz." },
    { k: "fix", wrong: "Let me explain you the plan.", a: ["Let me explain the plan to you.", "Let me explain the plan.", "Let me tell you the plan."], hint: "explain + to", why: "**explain something to someone**." },
    { k: "tf", q: "In a presentation it is a good idea to pause after an important point.", a: true, why: "To'xtash tinglovchiga fikrni o'ylab olishga imkon beradi." },
    { k: "translate", uz: "Savollar bormi?", a: ["Are there any questions?", "Do you have any questions?", "Any questions?"], why: "Taqdimot oxirida standart savol." },
    { k: "speak", say: "To sum up, a clear structure and good rehearsal make a talk better.", uz: "Xulosa qilib aytganda, aniq tuzilma va yaxshi mashq nutqni yaxshilaydi." },
  ],
  quiz: [
    { k: "choice", q: "Which sentence is correct?", opts: ["I'd like to discuss this problem.", "I'd like to discuss about this problem.", "I'd like to tell about this problem.", "I'd like to speak about to this problem."], a: 0, why: "**discuss** predlogsiz ishlatiladi." },
    { k: "choice", q: "You want to show a chart to the audience. What do you say?", opts: ["As you can see on this slide, …", "As you can looking this slide, …", "As you see in the slide of me, …", "As you can seeing here, …"], a: 0, why: "**As you can see on this slide** — standart ibora." },
    { k: "choice", q: "You change to the next point. What do you say?", opts: ["Moving on to the next point, …", "Moving to go the next point, …", "I move on of the next point, …", "Now next point moving, …"], a: 0, why: "**Moving on to …** — keyingi fikrga o'tish." },
    { k: "fill", q: "My talk has three ___: the problem, the causes and the solution.", a: ["parts"], uz: "Nutqim uch qismdan iborat: muammo, sabablar va yechim.", why: "**parts** — qismlar." },
    { k: "fill", q: "Keep eye ___ with the audience.", a: ["contact"], uz: "Tinglovchilar bilan ko'z aloqasini saqlang.", why: "**eye contact** — ko'z bilan aloqa." },
    { k: "fill", q: "Could you ___ that, please? I didn't hear the question.", a: ["repeat"], uz: "Buni takrorlay olasizmi? Savolni eshitmadim.", why: "**repeat** — takrorlamoq." },
    { k: "listen", say: "I'd like to draw your attention to this chart.", opts: ["I'd like to draw your attention to this chart.", "I'd like to draw your attention to this part.", "I'd like to show your attention to this chart.", "I like to draw your attention to this chart."], a: 0 },
    { k: "tf", q: "**I will explain you the idea** — bu gap to'g'ri.", a: false, why: "To'g'risi: *I will explain the idea to you.*" },
    { k: "order", uz: "Xulosa qilib aytganda, biz ko'proq vaqt kerak.", words: ["To", "sum", "up,", "we", "need", "more", "time."], extra: ["sums", "needs"] },
    { k: "translate", uz: "Men buni ertaga mashq qilaman.", a: ["I will rehearse it tomorrow.", "I'll rehearse it tomorrow.", "I will practise it tomorrow.", "I'll practise it tomorrow.", "I will practice it tomorrow.", "I'll practice it tomorrow.", "I am going to rehearse it tomorrow.", "I'm going to rehearse it tomorrow."], why: "**rehearse** yoki **practise** — mashq qilmoq." },
  ],
  summary: [
    "Taqdimot tuzilmasi: **opening, outline, main points, conclusion, questions**.",
    "Boshlash: *Today I'd like to talk about… My talk has three parts.* Xato: ~~tell about~~, ~~discuss about~~.",
    "Signal iboralari: *First of all… Moving on to… For example… I'd like to emphasise that… To sum up…*",
    "Slaydga ishora: *As you can see on this slide… I'd like to draw your attention to…* Savollar: *Are there any questions? That's a good question.*",
    "**explain something to someone**, *explain you* emas. Sekin gapiring, ko'z aloqasini saqlang, muhim fikrdan keyin to'xtab turing.",
  ],
  homework: "Ixtiyoriy mavzu tanlang (masalan, «mening shahrim»). Tuzilma bo'yicha 8-10 ta gapdan iborat taqdimot yozing: opening, outline, ikkita asosiy fikr, conclusion, savollar. Keyin uni ovoz chiqarib, ikki marta mashq qiling va telefoningizga yozib oling.",
};

export default lesson;
