import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u15-l6",
  title: "At the doctor's",
  titleUz: "Shifokorda: kasallik va maslahat",
  goal: "Shifokorga yoki dorixonaga murojaat qilasiz: o'z holatingizni (**I've got a headache, My back hurts, I feel dizzy**) tushuntirasiz, **What's the matter?** kabi savollarga javob berasiz va **should / shouldn't** bilan oddiy kundalik maslahatlarni tushunasiz.",
  slides: [
    {
      title: "Qanday ahvoldasiz? What's the matter?",
      blocks: [
        { t: "p", md: "Shifokor yoki do'stingiz sog'lig'ingiz haqida so'rasa, quyidagi savollarni eshitasiz:" },
        {
          t: "table", head: ["Savol", "Ma'nosi"], speak: [0],
          rows: [
            ["What's the matter?", "Nima bo'ldi? (nima muammo?)"],
            ["What's wrong?", "Nima gap? Nima bo'ldi?"],
            ["How do you feel?", "O'zingizni qanday his qilyapsiz?"],
            ["Where does it hurt?", "Qayeringiz og'riyapti?"],
            ["When did it start?", "Qachon boshlandi?"],
          ],
        },
        {
          t: "examples", items: [
            { en: "I don't feel well.", uz: "O'zimni yaxshi his qilmayapman." },
            { en: "I feel ill. / I feel sick.", uz: "O'zimni yomon his qilyapman. / Ko'nglim aynayapti.", note: "**sick** ko'pincha \"ko'ngil aynishi\" ma'nosida (ayniqsa Britaniyada), **ill** — \"kasalman\"." },
            { en: "I feel dizzy.", uz: "Boshim aylanyapti." },
            { en: "I'm very tired.", uz: "Juda charchadim." },
          ],
        },
        { t: "tip", tone: "warn", md: "**I feel bad** yoki **I feel ill** deymiz, **I feel myself bad** deb aytmaymiz. Bu o'zbekchadan (\"o'zimni yomon his qilyapman\") to'g'ridan-to'g'ri tarjima xatosi." },
        { t: "check", ex: { k: "choice", q: "Doktor: \"___?\" — Bemor: \"I've got a headache.\"", opts: ["What's the matter?", "What is your name?", "Where do you live?", "How old are you?"], a: 0, why: "Bemorning javobi muammoni bildiradi → **What's the matter?**" } },
      ],
    },
    {
      title: "Belgilarni aytish: I've got… / I have…",
      blocks: [
        { t: "p", md: "Kasallik yoki og'riqni aytishning ikki asosiy usuli bor:" },
        {
          t: "table", head: ["Usul", "Misol"], speak: [1],
          rows: [
            ["**I've got / I have + a/an + ot**", "I've got a headache. / I have a sore throat."],
            ["**My + tana qismi + hurts**", "My back hurts. / My head hurts."],
            ["**I've got a pain in my + tana qismi**", "I've got a pain in my leg."],
          ],
        },
        {
          t: "table", head: ["Kasallik", "Ma'nosi", "Misol"], speak: [2],
          rows: [
            ["a headache", "bosh og'rig'i", "I've got a headache."],
            ["a sore throat", "tomoq og'rig'i", "She has a sore throat."],
            ["a cough", "yo'tal", "He has a cough."],
            ["a cold", "shamollash", "I've got a cold."],
            ["a temperature", "isitma (harorat)", "The child has a temperature."],
            ["a stomach ache", "qorin og'rig'i", "I've got a stomach ache."],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I've got a headache.", "My back hurts.", "She has a cough."] },
          bad: { title: "Xato", items: ["I have headache.", "My back is hurt.", "She is cough."] },
        },
        { t: "tip", tone: "info", md: "**hurt** ning 3 shakli bir xil: *hurt – hurt – hurt*. *My head **hurts**.* — og'riyapti. *I **hurt** my knee yesterday.* — kecha tizzamni lat yedirdim." },
        { t: "check", ex: { k: "fill", q: "I can't talk. I've got a sore ___. (tomoq)", a: ["throat"], why: "**a sore throat**." } },
        { t: "check", ex: { k: "choice", q: "\"Boshim og'riyapti.\"", opts: ["I'm headache.", "I have headache.", "I've got a headache.", "My head is headache."], a: 2, why: "**I've got a headache** (artikl **a** bilan)." } },
      ],
    },
    {
      title: "Shifokor maslahati: should / shouldn't",
      blocks: [
        { t: "p", md: "Shifokorlar va do'stlar sog'liq haqida oddiy maslahatlarni **should / shouldn't** bilan beradi. Eslatma: bu darsda faqat **kundalik, umumiy** maslahatlar. Aniq davolanishni faqat shifokor belgilaydi." },
        {
          t: "table", head: ["Maslahat", "Misol"], speak: [1],
          rows: [
            ["Dam olish", "You should get some rest."],
            ["Suv ichish", "You should drink plenty of water."],
            ["Uyda qolish", "You should stay at home today."],
            ["Shifokorga borish", "You should see a doctor if you still feel ill."],
            ["Ko'p ishlamaslik", "You shouldn't go to work."],
            ["Kech yotmaslik", "You shouldn't stay up late."],
          ],
        },
        { t: "tip", tone: "good", md: "**plenty of** = ko'p. *plenty of water, plenty of sleep.* Va **see a doctor** = shifokorga murojaat qilmoq (**go to doctor** emas — artikl **the/a** kerak: *go to the doctor's*, *see a doctor*)." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["You should see a doctor.", "You shouldn't go to work today.", "You should drink plenty of water."] },
          bad: { title: "Xato", items: ["You should go to doctor.", "You shouldn't to go to work.", "You should drink much water."] },
        },
        { t: "check", ex: { k: "choice", q: "Do'stingiz isitmalab turibdi. Qaysi maslahat mos?", opts: ["You should stay at home and rest.", "You must dance all night.", "You shouldn't sleep at all.", "You should run a marathon."], a: 0, why: "Eng oqilona va xavfsiz maslahat — uyda dam olish." } },
        { t: "check", ex: { k: "fill", q: "You should drink ___ of water.", a: ["plenty"], why: "**plenty of water**." } },
      ],
    },
    {
      title: "Dialog: shifokor qabulida",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Doctor", en: "Good morning, Aziz. What's the matter?", uz: "Xayrli tong, Aziz. Nima bo'ldi?" },
            { who: "Aziz", en: "I don't feel well. I've got a bad headache and a sore throat.", uz: "O'zimni yaxshi his qilmayapman. Boshim qattiq og'riyapti va tomog'im og'riyapti." },
            { who: "Doctor", en: "When did it start?", uz: "Qachon boshlandi?" },
            { who: "Aziz", en: "Two days ago. And I've got a cough.", uz: "Ikki kun oldin. Yo'talim ham bor." },
            { who: "Doctor", en: "Do you have a temperature?", uz: "Isitmangiz bormi?" },
            { who: "Aziz", en: "Yes, a little.", uz: "Ha, ozgina." },
            { who: "Doctor", en: "OK. You should stay at home and rest. You should drink plenty of water, and you shouldn't go to work for a few days.", uz: "Mayli. Uyda qolib dam olishingiz kerak. Ko'p suv ichishingiz va bir necha kun ishga bormasligingiz kerak." },
            { who: "Aziz", en: "Thank you, doctor.", uz: "Rahmat, shifokor." },
            { who: "Doctor", en: "If you don't feel better, come back and see me.", uz: "Agar yaxshi bo'lmasangiz, yana kelib menga ko'rining." },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Aziz has had the headache for a month.", a: false, why: "*Two days ago.*" } },
        { t: "check", ex: { k: "choice", q: "What shouldn't Aziz do?", opts: ["Drink water.", "Rest.", "Go to work.", "Stay at home."], a: 2, why: "*You shouldn't go to work for a few days.*" } },
      ],
    },
    {
      title: "O'qing: Dorixonada",
      blocks: [
        {
          t: "text", title: "At the pharmacy",
          en: "Laylo has a cold. She has a cough and a runny nose, and she feels very tired. After work she goes to the pharmacy near her house.\n\"Hello,\" she says. \"Could you help me, please? I've got a cold.\"\n\"Of course,\" says the pharmacist. \"How long have you felt like this?\"\n\"Since Monday.\"\n\"You should rest and drink warm tea with lemon. You shouldn't go out in cold weather. If you still feel ill after a few days, you should see a doctor.\"\nLaylo thanks her and goes home. She makes some tea and goes to bed early.",
          uz: "Laylo shamollagan. Uning yo'tali va tumovi bor, o'zini juda charchagan his qilyapti. Ishdan keyin u uyi yaqinidagi dorixonaga boradi.\n\"Salom,\" deydi u. \"Menga yordam bera olasizmi? Shamollab qoldim.\"\n\"Albatta,\" deydi farmatsevt. \"Qancha vaqtdan beri o'zingizni shunday his qilyapsiz?\"\n\"Dushanbadan beri.\"\n\"Dam olishingiz va limonli issiq choy ichishingiz kerak. Sovuq havoda tashqariga chiqmasligingiz kerak. Agar bir necha kundan keyin ham o'zingizni yomon his qilsangiz, shifokorga ko'rinishingiz kerak.\"\nLaylo undan minnatdorchilik bildirib uyga ketadi. U choy damlaydi va erta yotadi.",
        },
        { t: "check", ex: { k: "choice", q: "What has Laylo got?", opts: ["A stomach ache.", "A cold.", "A toothache.", "A broken leg."], a: 1, why: "*Laylo has a cold.*" } },
        { t: "check", ex: { k: "tf", q: "The pharmacist says Laylo should go out in cold weather.", a: false, why: "*You shouldn't go out in cold weather.*" } },
      ],
    },
    {
      title: "Qabulga yozilish",
      blocks: [
        { t: "p", md: "Shifokorga qabulga yozilish uchun **appointment** (belgilangan uchrashuv) kerak:" },
        {
          t: "dialog", lines: [
            { who: "Receptionist", en: "Good morning. Can I help you?", uz: "Xayrli tong. Sizga yordam bera olamanmi?" },
            { who: "Kamol", en: "Yes, I'd like to make an appointment with Dr Karimova, please.", uz: "Ha, doktor Karimova qabuliga yozilmoqchiman." },
            { who: "Receptionist", en: "Is it urgent?", uz: "Shoshilinchmi?" },
            { who: "Kamol", en: "No, but my back has hurt for a week.", uz: "Yo'q, lekin bir haftadan beri belim og'riyapti." },
            { who: "Receptionist", en: "She's free on Thursday at ten. Is that OK?", uz: "U payshanba kuni soat o'nda bo'sh. Mayli, shu vaqtmi?" },
            { who: "Kamol", en: "Yes, that's fine. Thank you.", uz: "Ha, yaxshi. Rahmat." },
          ],
        },
        { t: "tip", tone: "warn", md: "**Shoshilinch holatda** (qattiq og'riq, nafas qiyinlashishi, hushdan ketish) kutib o'tirmang — darhol tez yordam chaqiring yoki shifokorga boring. Bu dars faqat til o'rganish uchun." },
        { t: "check", ex: { k: "fill", q: "I'd like to make an ___ with the doctor.", a: ["appointment"], why: "**make an appointment**." } },
      ],
    },
  ],
  words: [
    { en: "symptom", uz: "belgi (kasallik belgisi)", ipa: "ˈsɪmptəm", pos: "noun", ex: "A cough is a common symptom of a cold.", exUz: "Yo'tal — shamollashning keng tarqalgan belgisi." },
    { en: "headache", uz: "bosh og'rig'i", ipa: "ˈhedeɪk", pos: "noun", ex: "I've got a terrible headache.", exUz: "Boshim qattiq og'riyapti." },
    { en: "sore throat", uz: "tomoq og'rig'i", ipa: "sɔː θrəʊt", pos: "noun", ex: "She has a sore throat today.", exUz: "Bugun uning tomog'i og'riyapti." },
    { en: "cough", uz: "yo'tal", ipa: "kɒf", pos: "noun / verb", ex: "He has a bad cough.", exUz: "Uning qattiq yo'tali bor." },
    { en: "temperature", uz: "isitma, harorat", ipa: "ˈtemprətʃə", pos: "noun", ex: "The child has a temperature.", exUz: "Bolada isitma bor." },
    { en: "appointment", uz: "qabulga yozilish, uchrashuv", ipa: "əˈpɔɪntmənt", pos: "noun", ex: "I have an appointment at ten.", exUz: "Soat o'nda qabulga yozilganman." },
    { en: "ill", uz: "kasal", ipa: "ɪl", pos: "adj", ex: "My brother is ill today.", exUz: "Akam bugun kasal." },
    { en: "hurt", uz: "og'rimoq; lat yedirmoq", ipa: "hɜːt", pos: "verb", ex: "My back hurts.", exUz: "Belim og'riyapti." },
    { en: "pharmacy", uz: "dorixona", ipa: "ˈfɑːməsi", pos: "noun", ex: "The pharmacy opens at eight.", exUz: "Dorixona soat sakkizda ochiladi." },
    { en: "rest", uz: "dam; dam olmoq", ipa: "rest", pos: "noun / verb", ex: "You need a rest.", exUz: "Sizga dam kerak." },
  ],
  practice: [
    { k: "match", pairs: [["headache", "bosh og'rig'i"], ["sore throat", "tomoq og'rig'i"], ["cough", "yo'tal"], ["temperature", "isitma"], ["pharmacy", "dorixona"]] },
    { k: "listen", say: "I've got a sore throat.", opts: ["I've got a sore throat.", "I've got a sore foot.", "I've got a sore thumb."], a: 0 },
    { k: "listen", say: "You should drink plenty of water.", opts: ["You should drink plenty of water.", "You shouldn't drink plenty of water.", "You should drink a plenty of water."], a: 0 },
    { k: "choice", q: "Doctor: \"___?\" Patient: \"My back hurts.\"", opts: ["Where does it hurt?", "Where do you work?", "What time is it?", "Who is your teacher?"], a: 0, why: "Bemor og'riqning joyini aytyapti → **Where does it hurt?**" },
    { k: "choice", q: "Qaysi gap **to'g'ri**?", opts: ["I have headache.", "I've got a headache.", "I am headache.", "My head has a hurt."], a: 1, why: "**I've got a headache.**" },
    { k: "choice", q: "She's ill. She ___ stay in bed.", opts: ["should", "should to", "shoulds", "does should"], a: 0, why: "**should + V1**." },
    { k: "choice", q: "You ___ go to work today. You have a temperature.", opts: ["shouldn't", "should", "must to", "don't should"], a: 0, why: "Maslahat: ishga bormaslik → **shouldn't**." },
    { k: "fill", q: "My head ___. (hurt)", a: ["hurts"], why: "head = it → **hurts**." },
    { k: "fill", q: "What's the ___? You look pale.", a: ["matter", "problem"], why: "**What's the matter?**" },
    { k: "fill", q: "If you don't feel better, you should ___ a doctor.", a: ["see"], why: "**see a doctor**." },
    { k: "tf", q: "**I feel myself bad** — inglizchada to'g'ri ibora.", a: false, why: "To'g'ri: *I feel bad / I feel ill.*" },
    { k: "tf", q: "**hurt** fe'lining o'tgan zamon shakli ham **hurt**.", a: true, why: "hurt – hurt – hurt." },
    { k: "order", uz: "Nima bo'ldi? Yomon ko'rinasan.", words: ["What's", "the", "matter?", "You", "look", "ill."], extra: ["is", "wrong"], alt: [["What's", "wrong?", "You", "look", "ill."]] },
    { k: "order", uz: "Sizga ko'p suv ichish kerak.", words: ["You", "should", "drink", "plenty", "of", "water."], extra: ["to", "much"] },
    { k: "translate", uz: "Boshim og'riyapti va yo'talim bor.", a: ["I've got a headache and a cough.", "I have a headache and a cough.", "I've got a headache and I've got a cough.", "My head hurts and I have a cough.", "My head hurts and I've got a cough."] },
    { k: "speak", say: "I don't feel well. I've got a headache and a sore throat.", uz: "O'zimni yaxshi his qilmayapman. Boshim va tomog'im og'riyapti." },
  ],
  quiz: [
    { k: "choice", q: "He has a cough and a temperature. He ___ stay at home.", opts: ["should", "shouldn't", "can't to", "doesn't"], a: 0, why: "Kundalik maslahat: uyda qolish → **should**." },
    { k: "choice", q: "\"Qayeringiz og'riyapti?\"", opts: ["Where does it hurt?", "Where is it hurts?", "What hurts you?", "Where you hurt?"], a: 0, why: "**Where does it hurt?**" },
    { k: "choice", q: "She ___ a sore throat today.", opts: ["has", "is", "does", "feels to"], a: 0, why: "**She has a sore throat.**" },
    { k: "choice", q: "Shifokorga qabulga yozilish uchun nima deysiz?", opts: ["I'd like to make an appointment.", "I want doctor now.", "Give me doctor.", "I am appointment."], a: 0, why: "**I'd like to make an appointment.**" },
    { k: "fill", q: "My back ___ a lot. (hurt)", a: ["hurts"], why: "back = it → **hurts**." },
    { k: "fill", q: "You shouldn't go ___ in cold weather.", a: ["out"], why: "**go out** — tashqariga chiqmoq." },
    { k: "tf", q: "**I'm headache** — to'g'ri gap.", a: false, why: "To'g'ri: *I've got a headache.*" },
    { k: "listen", say: "You should get some rest.", opts: ["You should get some rest.", "You should get some rice.", "You shouldn't get some rest."], a: 0 },
    { k: "order", uz: "Sizga shifokorga borish kerak.", words: ["You", "should", "see", "a", "doctor."], extra: ["go", "to"] },
    { k: "translate", uz: "Men o'zimni yaxshi his qilmayapman.", a: ["I don't feel well.", "I do not feel well.", "I feel ill.", "I feel bad.", "I'm not feeling well.", "I am not feeling well."] },
  ],
  summary: [
    "Savollar: **What's the matter? Where does it hurt? When did it start?**",
    "Belgilar: **I've got a headache / a cold / a cough / a sore throat.** Og'riq: **My back hurts.** (*I have headache* ❌ — artikl kerak.)",
    "Kundalik maslahat: **You should rest / drink plenty of water / see a doctor. You shouldn't go to work.**",
    "**I feel ill / bad** (feel myself ❌). Qabul: **I'd like to make an appointment.** Jiddiy belgi bo'lsa — darhol shifokorga boring.",
  ],
  homework: "Do'stingiz shamollaganini tasavvur qiling. U bilan 8–10 qatorlik mini-dialog yozing: u o'zining belgilarini aytadi (**I've got…**), siz **What's the matter?** deb so'raysiz va 3 ta oddiy maslahat berasiz (**You should… You shouldn't…**). Jiddiy holatlarda doim shifokorga murojaat qiling.",
};

export default lesson;
