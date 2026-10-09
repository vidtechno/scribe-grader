import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u16-l7",
  title: "Writing an email",
  titleUz: "Elektron xat yozish: do'stga va rasmiy",
  goal: "Elektron xatning **tuzilishini** bilasiz (*mavzu, salomlashish, asosiy qism, xayrlashuv*), do'stingizga **norasmiy**, notanish odamga esa **muloyim rasmiy** xat yozasiz (*I am writing to ask… Could you please…? Yours sincerely*) va ikkala uslubni aralashtirmaysiz.",
  slides: [
    {
      title: "Xatning tuzilishi",
      blocks: [
        { t: "p", md: "Har bir yaxshi xat bir xil **qadamlar** bilan quriladi. Qadamlarni bilsangiz, yozish ancha oson bo'ladi:" },
        {
          t: "table", head: ["Qism", "Norasmiy (do'stga)", "Rasmiy (notanishga)"], speak: [1, 2],
          rows: [
            ["Mavzu (Subject)", "Weekend plans", "Question about the English course"],
            ["Salomlashish", "Hi Laylo, / Hello Aziz,", "Dear Mr Karimov, / Dear Sir or Madam,"],
            ["Boshlanishi", "Thanks for your email!", "I am writing to ask about…"],
            ["Asosiy qism", "Qisqa jumlalar, shaxsiy gaplar", "Aniq savol yoki iltimos"],
            ["Yakun", "Write soon! / See you!", "I look forward to hearing from you."],
            ["Xayrlashuv", "Best wishes, / Love, / Bye,", "Yours sincerely, / Kind regards,"],
          ],
        },
        { t: "tip", tone: "info", md: "Ismi ma'lum odamga: **Dear Mr / Ms Karimov … Yours sincerely**. Ismi noma'lum bo'lsa: **Dear Sir or Madam … Yours faithfully**. Do'stga **Dear** ham, **Hi** ham bo'ladi." },
        { t: "check", ex: { k: "choice", q: "Do'stingizga qaysi xayrlashuv mos?", opts: ["Yours faithfully,", "Write soon! Best wishes,", "I look forward to hearing from you. Yours sincerely,", "Dear Sir or Madam,"], a: 1, why: "Norasmiy xatda **Write soon! Best wishes,** tabiiy." } },
      ],
    },
    {
      title: "Norasmiy xat: do'stga",
      blocks: [
        { t: "p", md: "Do'stga yozganda xuddi gaplashayotgandek yozasiz: qisqartmalar (*I'm, we're, can't*), oddiy so'zlar, hissiyot. Foydali iboralar:" },
        {
          t: "table", head: ["Maqsad", "Ibora"], speak: [1],
          rows: [
            ["Xat uchun rahmat", "Thanks for your email. It was great to hear from you."],
            ["Yangilik aytish", "I've got some good news! I've just passed my exam."],
            ["Taklif qilish", "Would you like to come to my birthday party on Saturday?"],
            ["Uzr so'rash", "Sorry I haven't written for ages. I've been very busy."],
            ["Tugatish", "Anyway, I have to go now. Write soon!"],
          ],
        },
        {
          t: "text", title: "An email to a friend",
          en: "Hi Kamol,\n\nThanks for your email! It was great to hear from you. Sorry I haven't written for ages — I've been very busy at work.\n\nI've got some good news! I'm visiting Tashkent next month. I'll arrive on Friday evening and stay for a week. Would you like to meet on Saturday? We could have lunch and then walk in the park.\n\nLet me know what you think. Anyway, I have to go now. Write soon!\n\nBest wishes,\nDilnoza",
          uz: "Salom Kamol,\n\nXating uchun rahmat! Sendan xabar olish juda yoqimli bo'ldi. Uzoq yozmaganim uchun kechir — ishda juda band edim.\n\nYaxshi xabarim bor! Keyingi oy Toshkentga kelyapman. Juma kuni kechqurun yetib kelaman va bir hafta turaman. Shanba kuni uchrashaymizmi? Tushlik qilib, keyin bog'da sayr qilsak bo'ladi.\n\nFikringni bildir. Mayli, endi ketishim kerak. Tezroq yoz!\n\nEng yaxshi tilaklar bilan,\nDilnoza",
        },
        { t: "check", ex: { k: "tf", q: "Dilnoza is going to visit Tashkent next month.", a: true, why: "*I'm visiting Tashkent next month.*" } },
        { t: "check", ex: { k: "choice", q: "Why does Dilnoza say sorry?", opts: ["She forgot Kamol's birthday.", "She hasn't written for a long time.", "She can't come to Tashkent.", "She lost Kamol's phone number."], a: 1, why: "*Sorry I haven't written for ages.*" } },
      ],
    },
    {
      title: "Rasmiy xat: iltimos va savol",
      blocks: [
        { t: "p", md: "Notanish odamga yoki tashkilotga yozganda **muloyim va aniq** bo'ling. Qisqartmalar (*I'm, can't*) o'rniga to'liq shakllarni (*I am, cannot*) ishlating, *Hi* o'rniga *Dear* yozing:" },
        {
          t: "table", head: ["Maqsad", "Rasmiy ibora"], speak: [1],
          rows: [
            ["Sababni aytish", "I am writing to ask about the evening English course."],
            ["Iltimos", "Could you please send me more information?"],
            ["Savol", "Could you tell me how much the course costs?"],
            ["Minnatdorchilik", "Thank you for your help."],
            ["Javobni kutish", "I look forward to hearing from you."],
          ],
        },
        {
          t: "compare",
          good: { title: "Rasmiy (to'g'ri)", items: ["Dear Mr Karimov,", "I am writing to ask about the course.", "Could you please send me the timetable?", "Yours sincerely, Aziz Rahimov"] },
          bad: { title: "Rasmiy xat uchun xato", items: ["Hi Mr Karimov!", "I wanna ask about the course.", "Send me the timetable.", "Bye, Aziz"] },
        },
        { t: "tip", tone: "warn", md: "Rasmiy xatda **buyruq** (*Send me…*) yozmang — *Could you please send me…?* deng. *wanna, gonna, thx, bye* ham faqat norasmiy yozuvga tegishli." },
        { t: "check", ex: { k: "choice", q: "Qaysi gap rasmiy xat uchun mos?", opts: ["Send me the price now.", "I wanna know the price.", "Could you please tell me the price?", "What's the price, mate?"], a: 2 } },
      ],
    },
    {
      title: "O'qing: ma'lumot so'rash",
      blocks: [
        {
          t: "text", title: "A formal email",
          en: "Dear Ms Alieva,\n\nI am writing to ask about the evening English course advertised on your website. I work during the day, so I can only study after six o'clock.\n\nCould you please tell me when the next course starts and how much it costs? I would also like to know if there is a free first lesson.\n\nThank you for your help. I look forward to hearing from you.\n\nYours sincerely,\nAziz Rahimov",
          uz: "Hurmatli Aliyeva xonim,\n\nSaytingizda e'lon qilingan kechki ingliz tili kursi haqida so'rash uchun yozyapman. Men kunduzi ishlayman, shuning uchun faqat soat oltidan keyin o'qiy olaman.\n\nKeyingi kurs qachon boshlanishini va narxi qancha ekanini ayta olasizmi? Bepul birinchi dars bor-yo'qligini ham bilmoqchiman.\n\nYordamingiz uchun rahmat. Javobingizni kutaman.\n\nHurmat bilan,\nAziz Rahimov",
        },
        { t: "check", ex: { k: "tf", q: "Aziz can study in the morning.", a: false, why: "*I work during the day, so I can only study after six o'clock.*" } },
        { t: "check", ex: { k: "choice", q: "What does Aziz want to know?", opts: ["Where the school is.", "When the course starts and how much it costs.", "Who the teacher is.", "How long the lesson is."], a: 1, why: "*Could you please tell me when the next course starts and how much it costs?*" } },
      ],
    },
    {
      title: "Qanday yozamiz: reja",
      blocks: [
        { t: "p", md: "Har qanday xatni 4 qadamda yozing:" },
        {
          t: "examples", items: [
            { en: "1. Why am I writing?", uz: "1. Nima uchun yozyapman?", note: "*I am writing to… / Thanks for your email.*" },
            { en: "2. What do I want to say or ask?", uz: "2. Nima demoqchiman yoki so'ramoqchiman?", note: "Har bir fikr — alohida abzats." },
            { en: "3. What do I want the reader to do?", uz: "3. O'quvchi nima qilishi kerak?", note: "*Could you please…? Let me know.*" },
            { en: "4. How do I finish?", uz: "4. Qanday tugataman?", note: "*I look forward to… / Write soon!*" },
          ],
        },
        { t: "tip", tone: "good", md: "Yuborishdan oldin tekshiring: **salomlashish va xayrlashuv uslubi bir xilmi?** (*Hi … Yours sincerely* ❌), **imlo**, **mavzu (Subject)** to'ldirilganmi." },
        { t: "check", ex: { k: "choice", q: "Qaysi ikki ibora bir xatda **birga kelmaydi**?", opts: ["Dear Sir or Madam / Yours faithfully", "Hi Laylo / Write soon", "Dear Mr Karimov / Yours sincerely", "Hi Aziz / Yours faithfully"], a: 3, why: "*Hi* norasmiy, *Yours faithfully* rasmiy — aralashmaydi." } },
      ],
    },
  ],
  words: [
    { en: "subject", uz: "mavzu (xatning)", ipa: "ˈsʌbdʒɪkt", pos: "noun", ex: "Please write a clear subject.", exUz: "Iltimos, aniq mavzu yozing." },
    { en: "greeting", uz: "salomlashish", ipa: "ˈɡriːtɪŋ", pos: "noun", ex: "Dear Mr Karimov is a formal greeting.", exUz: "Dear Mr Karimov — rasmiy salomlashish." },
    { en: "sincerely", uz: "hurmat bilan (xat oxirida)", ipa: "sɪnˈsɪəli", pos: "adverb", ex: "Yours sincerely, Aziz.", exUz: "Hurmat bilan, Aziz." },
    { en: "apologise", uz: "uzr so'ramoq", ipa: "əˈpɒlədʒaɪz", pos: "verb", ex: "I apologise for the mistake.", exUz: "Xato uchun uzr so'rayman." },
    { en: "confirm", uz: "tasdiqlamoq", ipa: "kənˈfɜːm", pos: "verb", ex: "Please confirm your booking.", exUz: "Iltimos, bronni tasdiqlang." },
    { en: "request", uz: "iltimos, so'rov", ipa: "rɪˈkwest", pos: "noun", ex: "I have a small request.", exUz: "Mening kichik bir iltimosim bor." },
    { en: "available", uz: "bo'sh, mavjud", ipa: "əˈveɪləbl", pos: "adj", ex: "Are you available on Saturday?", exUz: "Shanba kuni bandmisiz?" },
    { en: "keep in touch", uz: "aloqada bo'lmoq", ipa: "kiːp ɪn tʌtʃ", pos: "phrase", ex: "Let's keep in touch.", exUz: "Aloqada bo'laylik." },
    { en: "look forward to", uz: "intizorlik bilan kutmoq", ipa: "lʊk ˈfɔːwəd tuː", pos: "phrase", ex: "I look forward to meeting you.", exUz: "Siz bilan uchrashishni intiqlik bilan kutaman." },
    { en: "message", uz: "xabar", ipa: "ˈmesɪdʒ", pos: "noun", ex: "I'll send you a message tonight.", exUz: "Bugun kechqurun senga xabar yuboraman." },
  ],
  practice: [
    { k: "match", pairs: [["Dear Sir or Madam,", "Yours faithfully"], ["Dear Mr Karimov,", "Yours sincerely"], ["Hi Laylo,", "Write soon!"], ["Thanks for your email!", "Best wishes"]] },
    { k: "match", pairs: [["subject", "xat mavzusi"], ["greeting", "salomlashish"], ["request", "iltimos"], ["available", "bo'sh, mavjud"], ["message", "xabar"]] },
    { k: "listen", say: "I look forward to hearing from you.", opts: ["I look forward to hearing from you.", "I look for a word from you.", "I looked forward to seeing you."], a: 0 },
    { k: "listen", say: "Could you please send me more information?", opts: ["Could you please send me more information?", "I could send you more information.", "Could you send me more invitations?"], a: 0 },
    { k: "choice", q: "Rasmiy xat qaysi gap bilan boshlanadi?", opts: ["Hi mate!", "I am writing to ask about the course.", "Yo! What's up?", "Guess what!"], a: 1 },
    { k: "choice", q: "**Dear Sir or Madam, … Yours ___,**", opts: ["sincerely", "faithfully", "love", "friend"], a: 1, why: "Ismi noma'lum odamga: **Yours faithfully**." },
    { k: "choice", q: "Do'stingizga qaysi xat mos?", opts: ["I would be grateful if you could reply.", "Thanks for your email! Write soon!", "I look forward to hearing from you. Yours faithfully,", "Dear Sir or Madam,"], a: 1 },
    { k: "fill", q: "I am ___ to ask about the evening course.", a: ["writing"], uz: "Kechki kurs haqida so'rash uchun yozyapman.", why: "**I am writing to…**" },
    { k: "fill", q: "Could you ___ tell me the price? (muloyim iltimos)", a: ["please"], why: "**Could you please…?**" },
    { k: "fill", q: "I look forward to ___ from you. (hear)", a: ["hearing"], why: "**look forward to** + **-ing**." },
    { k: "tf", q: "**Hi Mr Karimov! Yours sincerely, Aziz** — bu uslub to'g'ri.", a: false, why: "Uslublar aralashgan: *Hi* norasmiy, *Yours sincerely* rasmiy." },
    { k: "tf", q: "Rasmiy xatda *wanna* va *thx* ishlatish mumkin.", a: false, why: "Bu so'zlar faqat norasmiy yozuvda." },
    { k: "order", uz: "Iltimos, menga ko'proq ma'lumot yuboring.", words: ["Could", "you", "please", "send", "me", "more", "information?"], extra: ["sending", "to"] },
    { k: "translate", uz: "Xating uchun rahmat!", a: ["Thanks for your email!", "Thank you for your email!", "Thanks for your email.", "Thank you for your email."] },
    { k: "translate", uz: "Javobingizni intiqlik bilan kutaman.", a: ["I look forward to hearing from you.", "I look forward to your reply.", "I'm looking forward to hearing from you."] },
    { k: "speak", say: "Thanks for your email! Write soon!", uz: "Xating uchun rahmat! Tezroq yoz!" },
  ],
  quiz: [
    { k: "choice", q: "Ismi noma'lum odamga qanday murojaat qilamiz?", opts: ["Hi!", "Dear Sir or Madam,", "Dear friend,", "Hello mate,"], a: 1 },
    { k: "choice", q: "**Dear Ms Alieva, … Yours ___,**", opts: ["faithfully", "sincerely", "bye", "love"], a: 1, why: "Ismi ma'lum → **Yours sincerely**." },
    { k: "choice", q: "Qaysi gap rasmiy iltimos?", opts: ["Send me the timetable.", "Give me the timetable.", "Could you please send me the timetable?", "I want the timetable now."], a: 2 },
    { k: "choice", q: "**It was great to ___ from you.** (do'stga)", opts: ["hear", "listen", "say", "tell"], a: 0, why: "**hear from** — xabar olmoq." },
    { k: "fill", q: "Sorry I haven't written for ___. (uzoq vaqt)", a: ["ages"], why: "**for ages** — uzoq vaqtdan beri." },
    { k: "fill", q: "Are you ___ on Saturday? (bo'shmisiz)", a: ["available", "free"], why: "**available** yoki **free**." },
    { k: "listen", say: "I am writing to ask about the course.", opts: ["I am writing to ask about the course.", "I am waiting to ask about the course.", "I was writing to ask about the cause."], a: 0 },
    { k: "order", uz: "Yordamingiz uchun rahmat.", words: ["Thank", "you", "for", "your", "help."], extra: ["to", "helping"] },
    { k: "tf", q: "Yaxshi xat tugashida *Write soon!* faqat do'stga yoziladi.", a: true, why: "Rasmiy xatda *I look forward to hearing from you.*" },
    { k: "translate", uz: "Shanba kuni uchrashaylikmi?", a: ["Shall we meet on Saturday?", "Would you like to meet on Saturday?", "Let's meet on Saturday.", "Can we meet on Saturday?"] },
  ],
  summary: [
    "Xat tuzilishi: **mavzu → salomlashish → asosiy qism → yakun → xayrlashuv**.",
    "Norasmiy: *Hi, Thanks for your email, Write soon, Best wishes* — qisqartmalar mumkin.",
    "Rasmiy: *Dear Mr / Ms…, I am writing to…, Could you please…?, I look forward to hearing from you, Yours sincerely / faithfully*.",
    "Ismi ma'lum → **sincerely**; ismi noma'lum (Sir or Madam) → **faithfully**.",
    "Uslublarni **aralashtirmang** va rasmiy xatda buyruq o'rniga *Could you please…?* ishlating.",
  ],
  homework: "Ikkita xat yozing: (1) do'stingizga hafta oxiriga taklif; (2) o'quv markaziga kurs haqida savol. Salomlashish va xayrlashuv uslubi bir xil ekanini tekshiring.",
};

export default lesson;
