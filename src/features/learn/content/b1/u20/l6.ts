import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u20-l6",
  title: "Advice and suggestions: should, ought to, had better",
  titleUz: "Maslahat va taklif: should, ought to, had better, If I were you",
  goal: "**should, ought to, had better** va **If I were you** yordamida kuchli va yumshoq maslahat berasiz, **suggest / recommend / advise** fe'llarini to'g'ri qolipda ishlatasiz va **should to go**, **an advice** kabi xatolardan qochasiz.",
  slides: [
    {
      title: "Should va ought to: oddiy maslahat",
      blocks: [
        { t: "p", md: "O'zbekchada maslahat berganda «…ish kerak», «…sangiz yaxshi bo'ladi» deymiz. Inglizchada buning uchun modal fe'llar bor. Eng oddiysi — **should**. Undan keyin fe'l **to'siz** (V1) keladi." },
        {
          t: "table", head: ["Shakl", "Misol", "Ma'nosi"], speak: [1],
          rows: [
            ["should + fe'l", "You should see a doctor.", "Shifokorga borganingiz ma'qul."],
            ["shouldn't + fe'l", "You shouldn't work so late.", "Bunchalik kech ishlamaganingiz ma'qul."],
            ["Should I + fe'l?", "Should I call him now?", "Hozir unga qo'ng'iroq qilaymi?"],
            ["What should I + fe'l?", "What should I do?", "Nima qilishim kerak?"],
            ["ought to + fe'l", "You ought to apologise.", "Kechirim so'rashingiz kerak."],
          ],
        },
        { t: "p", md: "**Ought to** ma'nosi *should* ga juda yaqin, lekin biroz rasmiyroq va ko'proq «to'g'ri ish shu» degan ma'no beradi. Kundalik gapda *should* ko'p ishlatiladi. Inkori: *oughtn't to*, lekin bu kam uchraydi, shuning uchun *shouldn't* dan foydalaning." },
        { t: "compare", good: { title: "To'g'ri", items: ["You should study more.", "You ought to study more.", "He shouldn't drive so fast."] }, bad: { title: "Xato", items: ["You should to study more.", "You ought study more.", "He shouldn't to drive so fast."] } },
        { t: "tip", tone: "warn", md: "**should** dan keyin **to** kelmaydi (*should go*, *should to go* emas). Lekin **ought** dan keyin **to** shart: *ought to go*." },
        { t: "check", ex: { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["You should to rest.", "You should rest.", "You should resting.", "You should rests."], a: 1, why: "**should** + V1: *should rest*." } },
        { t: "check", ex: { k: "fill", q: "You ought ___ drink more water.", a: ["to"], why: "**ought to** + fe'l: *to* tushib qolmaydi." } },
      ],
    },
    {
      title: "Had better: kuchli maslahat va ogohlantirish",
      blocks: [
        { t: "p", md: "**Had better** (qisqartmasi *'d better*) kuchliroq: «yaxshisi shunday qiling, aks holda yomon oqibat bo'ladi». U aniq bir vaziyatda, hozir yoki yaqin kelajak haqida gapirganda ishlatiladi." },
        {
          t: "examples", items: [
            { en: "You'd better hurry, or you'll miss the train.", uz: "Yaxshisi shoshiling, bo'lmasa poyezdga kech qolasiz." },
            { en: "We'd better leave now. It's getting late.", uz: "Yaxshisi hozir ketaylik. Kech bo'lyapti." },
            { en: "You'd better not tell him. He'll be upset.", uz: "Unga aytmasangiz yaxshi bo'ladi. U xafa bo'ladi.", note: "Inkor: **had better not**." },
            { en: "I'd better go. My mother is waiting for me.", uz: "Ketganim yaxshi. Onam meni kutyapti." },
          ],
        },
        { t: "tip", tone: "warn", md: "**had better** shakli o'tgan zamonga o'xshasa-da, ma'nosi **hozirgi yoki kelajak**. Undan keyin ham **to** kelmaydi: *You'd better go*, *had better to go* emas. Inkor: *had better **not** go* (*hadn't better* emas)." },
        { t: "compare", good: { title: "To'g'ri", items: ["You'd better take an umbrella.", "You'd better not be late.", "I had better call my boss."], }, bad: { title: "Xato", items: ["You'd better to take an umbrella.", "You'd better don't be late.", "You hadn't better be late."] } },
        { t: "tip", tone: "info", md: "**should** — oddiy maslahat, tanlov sizda. **had better** — «aks holda muammo bo'ladi». Do'stga *You should rest* desangiz, bu maslahat. *You'd better rest* desangiz, bu deyarli ogohlantirish." },
        { t: "check", ex: { k: "choice", q: "It's 8:55 and the lesson starts at 9:00. ___ hurry!", opts: ["You should to", "You'd better", "You'd better to", "You ought"], a: 1, why: "Shoshilinch ogohlantirish → **You'd better** + V1." } },
      ],
    },
    {
      title: "If I were you va boshqa qoliplar",
      blocks: [
        { t: "p", md: "Maslahatni yumshoqroq berishning ko'p yo'li bor. **If I were you, I'd…** — «o'rningizda bo'lsam…». Bu second conditional, shuning uchun *I* bilan ham **were** ishlatiladi." },
        {
          t: "table", head: ["Qolip", "Misol"], speak: [1],
          rows: [
            ["If I were you, I'd + fe'l", "If I were you, I'd talk to your boss."],
            ["Why don't you + fe'l?", "Why don't you take a few days off?"],
            ["You could + fe'l", "You could ask your teacher for help."],
            ["How about + -ing?", "How about going for a walk?"],
            ["I suggest (that) you + fe'l", "I suggest you start again."],
            ["I suggest + -ing", "I suggest taking a break."],
            ["I'd recommend + -ing", "I'd recommend visiting the museum early."],
            ["It might be a good idea to + fe'l", "It might be a good idea to save some money."],
          ],
        },
        { t: "compare", good: { title: "To'g'ri", items: ["I suggest you go home.", "I suggest going home.", "I advise you to go home."], }, bad: { title: "Xato", items: ["I suggest you to go home.", "I suggest to go home.", "I advise you go home."] } },
        { t: "tip", tone: "warn", md: "**suggest** dan keyin odam + **to** kelmaydi: *I suggest **you go*** yoki *I suggest **going***. **advise** esa boshqacha: *I advise **you to go***." },
        { t: "check", ex: { k: "choice", q: "\"Dam olishni maslahat beraman.\"", opts: ["I suggest you to rest.", "I suggest that you rest.", "I suggest rest to you.", "I suggest you resting."], a: 1, why: "**suggest (that) you + V1**." } },
        { t: "check", ex: { k: "fill", q: "If I ___ you, I'd see a doctor.", a: ["were", "was"], why: "**If I were you** — o'rningizda bo'lsam. *Was* ham ishlatiladi, lekin *were* ko'proq." } },
      ],
    },
    {
      title: "Maslahat so'rash va advice so'zi",
      blocks: [
        { t: "p", md: "Maslahat so'rashning ham qulay yo'llari bor:" },
        {
          t: "examples", items: [
            { en: "What should I do?", uz: "Nima qilishim kerak?" },
            { en: "Do you think I should change my job?", uz: "Sizningcha, ishimni almashtirishim kerakmi?" },
            { en: "What would you do in my situation?", uz: "Mening o'rnimda nima qilardingiz?" },
            { en: "Can you give me some advice?", uz: "Menga biroz maslahat bera olasizmi?" },
          ],
        },
        { t: "p", md: "**advice** (maslahat, ot) — **sanalmaydigan ot**. Unga **-s** qo'shilmaydi va **an** bilan kelmaydi. **advise** (maslahat bermoq, fe'l) — talaffuzi ham, yozilishi ham boshqacha: *advice* /ədˈvaɪs/, *advise* /ədˈvaɪz/." },
        { t: "compare", good: { title: "To'g'ri", items: ["She gave me some good advice.", "Let me give you a piece of advice.", "I advise you to wait."], }, bad: { title: "Xato", items: ["She gave me a good advice.", "She gave me many advices.", "I advice you to wait."] } },
        { t: "tip", tone: "info", md: "Salbiy fikr aytayotganda inglizlar odatda *I don't think you should…* deydi, *I think you shouldn't…* emas: *I don't think you should lend him money.*" },
        { t: "check", ex: { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["He gave me an useful advice.", "He gave me some useful advice.", "He gave me useful advices.", "He gave me a useful advices."], a: 1, why: "**advice** sanalmaydi: *some advice*, *a piece of advice*." } },
      ],
    },
    {
      title: "Dialog: uyqu muammosi",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Tom", en: "I'm so tired. I can't sleep before midnight, and I get up at six.", uz: "Juda charchadim. Yarim tungacha uxlay olmayman, ertalab oltida turaman." },
            { who: "Emma", en: "What do you do before bed?", uz: "Uxlashdan oldin nima qilasan?" },
            { who: "Tom", en: "I usually watch videos on my phone for an hour or two.", uz: "Odatda bir-ikki soat telefonda video ko'raman." },
            { who: "Emma", en: "Well, you shouldn't use your phone in bed. It keeps your brain awake.", uz: "Yaxshi, yotoqda telefondan foydalanmasliging kerak. U miyani uyg'oq ushlaydi." },
            { who: "Tom", en: "Really? What do you suggest?", uz: "Rostanmi? Nima maslahat berasan?" },
            { who: "Emma", en: "I suggest reading a book instead. And if I were you, I'd go to bed earlier.", uz: "Uning o'rniga kitob o'qishni maslahat beraman. Sening o'rningda bo'lsam, erta yotardim." },
            { who: "Tom", en: "You're right. I'd better start tonight, or I'll be tired again tomorrow.", uz: "To'g'ri aytasan. Yaxshisi bugun kechadan boshlayin, bo'lmasa ertaga yana charchagan bo'laman." },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Emma thinks Tom should use his phone more before bed.", a: false, why: "Emma: *you shouldn't use your phone in bed* — telefondan foydalanmaslik kerak." } },
        { t: "check", ex: { k: "choice", q: "What does Emma suggest?", opts: ["Reading a book", "Watching a film", "Buying a new phone", "Getting up later"], a: 0, why: "*I suggest reading a book instead.*" } },
      ],
    },
  ],
  words: [
    { en: "recommendation", uz: "tavsiya", ipa: "ˌrek.ə.menˈdeɪ.ʃən", pos: "noun", ex: "Thanks for your recommendation; the restaurant was excellent.", exUz: "Tavsiyangiz uchun rahmat; restoran a'lo darajada edi." },
    { en: "urge", uz: "qattiq maslahat bermoq, undamoq", ipa: "ɜːdʒ", pos: "verb", ex: "The doctor urged him to rest for a week.", exUz: "Shifokor unga bir hafta dam olishni qattiq tavsiya qildi." },
    { en: "wise", uz: "dono, oqilona", ipa: "waɪz", pos: "adj", ex: "It is wise to save a little money every month.", exUz: "Har oy ozgina pul yig'ib borish oqilona." },
    { en: "avoid", uz: "qochmoq, ehtiyot bo'lmoq", ipa: "əˈvɔɪd", pos: "verb", ex: "You should avoid the city centre at rush hour.", exUz: "Gavjum paytda shahar markazidan qochganingiz ma'qul." },
    { en: "solve", uz: "hal qilmoq", ipa: "sɒlv", pos: "verb", ex: "Talking to him might solve the problem.", exUz: "U bilan gaplashish muammoni hal qilishi mumkin." },
    { en: "cope with", uz: "uddalamoq, bardosh bermoq", ipa: "kəʊp wɪð", pos: "phrase", ex: "How do you cope with so much stress?", exUz: "Shuncha stressga qanday bardosh berasiz?" },
    { en: "deal with", uz: "bilan shug'ullanmoq, hal etmoq", ipa: "diːl wɪð", pos: "phrase", ex: "I need to deal with this problem today.", exUz: "Bu muammoni bugun hal qilishim kerak." },
    { en: "bear in mind", uz: "yodda tutmoq, hisobga olmoq", ipa: "beər ɪn maɪnd", pos: "phrase", ex: "Bear in mind that the shop closes early on Sundays.", exUz: "Yakshanba kunlari do'kon barvaqt yopilishini yodda tuting." },
    { en: "think twice", uz: "yaxshilab o'ylab ko'rmoq", ipa: "θɪŋk twaɪs", pos: "phrase", ex: "You should think twice before you quit your job.", exUz: "Ishdan ketishdan oldin yaxshilab o'ylab ko'ring." },
    { en: "take your time", uz: "shoshilmaslik, vaqt olmoq", ipa: "teɪk jɔː taɪm", pos: "phrase", ex: "Take your time. There is no hurry.", exUz: "Shoshilmang. Shoshilinch emas." },
  ],
  practice: [
    { k: "choice", q: "You ___ drink so much coffee. It's bad for you.", opts: ["shouldn't", "shouldn't to", "don't should", "ought"], a: 0, why: "Inkor maslahat: **shouldn't** + V1." },
    { k: "choice", q: "You ___ take an umbrella, or you'll get wet.", opts: ["had better", "had better to", "ought", "should to"], a: 0, why: "Ogohlantirish (aks holda…) → **had better** + V1." },
    { k: "choice", q: "\"O'rningizda bo'lsam, unga qo'ng'iroq qilardim.\"", opts: ["If I were you, I'd call him.", "If I am you, I'll call him.", "If I was you, I call him.", "If I were you, I'd to call him."], a: 0, why: "**If I were you, I'd** + V1." },
    { k: "fill", q: "You'd better ___ late for the interview. (be)", a: ["not be"], hint: "inkor", uz: "Suhbatga kech qolmaganingiz ma'qul.", why: "Inkor: **had better not** + V1." },
    { k: "fill", q: "I suggest ___ a taxi because it's raining. (take)", a: ["taking"], why: "**suggest** + **-ing**." },
    { k: "fill", q: "Can you give me some ___? (maslahat)", a: ["advice"], why: "**advice** — sanalmaydigan ot." },
    { k: "fill", q: "I ___ you to see a dentist. (maslahat bermoq)", a: ["advise"], why: "Fe'l shakli **advise** (talaffuzi /z/)." },
    { k: "order", uz: "Nima qilishim kerak?", words: ["What", "should", "I", "do?"], extra: ["to", "does"], why: "Savol: **What should I + V1?**" },
    { k: "order", uz: "Yaxshisi hozir ketaylik.", words: ["We'd", "better", "leave", "now."], extra: ["to", "going"], alt: [["We", "had", "better", "leave", "now."]], why: "**had better** + V1." },
    { k: "translate", uz: "Shifokorga borganingiz ma'qul.", a: ["You should see a doctor.", "You should go to the doctor.", "You ought to see a doctor.", "You should go to a doctor."], why: "**should** + V1." },
    { k: "translate", uz: "Unga aytmasangiz yaxshi bo'ladi.", a: ["You'd better not tell him.", "You had better not tell him.", "You shouldn't tell him."], why: "**had better not** + V1." },
    { k: "fix", wrong: "You should to rest more.", a: ["You should rest more.", "You ought to rest more."], hint: "should dan keyin to yo'q", why: "**should** + V1, *to* yo'q." },
    { k: "fix", wrong: "She gave me a very good advice.", a: ["She gave me very good advice.", "She gave me some very good advice.", "She gave me a very good piece of advice."], hint: "advice sanalmaydi", why: "**advice** — sanalmaydigan ot, *a* bilan kelmaydi." },
    { k: "fix", wrong: "I suggest you to go home early.", a: ["I suggest you go home early.", "I suggest that you go home early.", "I suggest going home early."], hint: "suggest + you + to", why: "**suggest** dan keyin odam + *to* yo'q." },
    { k: "match", pairs: [["recommend", "tavsiya qilmoq"], ["warn", "ogohlantirmoq"], ["avoid", "qochmoq"], ["solve", "hal qilmoq"], ["sensible", "oqilona"]] },
    { k: "speak", say: "If I were you, I'd talk to my boss.", uz: "O'rningizda bo'lsam, boshlig'im bilan gaplashardim." },
  ],
  quiz: [
    { k: "choice", q: "You look ill. You ___ go home.", opts: ["should", "should to", "ought", "had better to"], a: 0, why: "**should** + V1." },
    { k: "choice", q: "It's very late. We ___ go now.", opts: ["'d better", "better to", "had to better", "should to"], a: 0, why: "**'d better** + V1." },
    { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["I advice you to wait.", "I advise you to wait.", "I advise you wait.", "I advise to wait you."], a: 1, why: "**advise** + odam + **to** + V1." },
    { k: "choice", q: "He gave me ___ about my CV.", opts: ["some advice", "an advice", "advices", "a advice"], a: 0, why: "**advice** sanalmaydi → *some advice*." },
    { k: "fill", q: "If I ___ you, I wouldn't lend him money. (be)", a: ["were", "was"], why: "**If I were you** …" },
    { k: "fill", q: "You ought ___ be more careful.", a: ["to"], why: "**ought to** + V1." },
    { k: "fill", q: "Why don't you ___ a few days off? (take)", a: ["take"], why: "**Why don't you** + V1." },
    { k: "order", uz: "Unga hozir qo'ng'iroq qilganim yaxshi.", words: ["I'd", "better", "call", "him", "now."], extra: ["to", "calling"], alt: [["I", "had", "better", "call", "him", "now."]], why: "**had better** + V1." },
    { k: "fix", wrong: "You'd better to take a taxi.", a: ["You'd better take a taxi.", "You had better take a taxi."], hint: "had better + to?", why: "**had better** dan keyin *to* kelmaydi." },
    { k: "tf", q: "**had better** hozirgi yoki kelajak haqida ogohlantirish bildiradi.", a: true, why: "Shakli o'tgan zamonga o'xshasa ham, ma'nosi hozirgi/kelajak." },
  ],
  summary: [
    "**should / ought to** — oddiy maslahat; **had better** — kuchli ogohlantirish (*aks holda muammo*). Uchalasidan keyin ham fe'l V1 (**ought** dan keyin *to*).",
    "Xatolar: *should to go*, *had better to go*, *had better don't* — bularning hammasi noto'g'ri. Inkor: *shouldn't*, *had better not*.",
    "Yumshoq maslahat: **If I were you, I'd…**, **Why don't you…?**, **How about + -ing?**, **I suggest + -ing / you + V1**.",
    "**suggest** + *you to go* bo'lmaydi; **advise** + odam + *to* + V1. **advice** — sanalmaydigan ot: *some advice*, *a piece of advice*.",
  ],
  homework: "Do'stingiz uxlay olmaydi, ko'p charchaydi deb tasavvur qiling. Unga 6 ta maslahat yozing: *should*, *shouldn't*, *had better*, *If I were you*, *Why don't you* va *I suggest* ni ishlating.",
};

export default lesson;
