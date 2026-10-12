import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u15-l9",
  title: "A friend has a problem: giving advice",
  titleUz: "Do'stning muammosi: maslahat berish",
  mini: true,
  kind: 'situation',
  goal: "Do'stingiz muammosini aytganda unga **should / shouldn't** va **Why don't you…?** bilan muloyim maslahat bera olasiz va maslahat so'ray olasiz.",
  slides: [
    {
      title: "Dialog: Dilshod charchagan",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Malika", en: "You look tired, Dilshod. What's the problem?", uz: "Charchagan ko'rinasiz, Dilshod. Nima muammo?" },
            { who: "Dilshod", en: "I'm worried about my exams. I can't sleep at night.", uz: "Imtihonlarim haqida xavotirdaman. Kechasi uxlay olmayman." },
            { who: "Malika", en: "Why don't you go to bed earlier? And you shouldn't drink coffee in the evening.", uz: "Nega ertaroq yotmaysiz? Kechqurun qahva ichmasligingiz kerak." },
            { who: "Dilshod", en: "That's a good idea. What should I do about the studying?", uz: "Yaxshi fikr. O'qish bilan nima qilishim kerak?" },
            { who: "Malika", en: "You should take a break every hour. If I were you, I'd talk to the teacher, too.", uz: "Har soatda tanaffus qilishingiz kerak. Sizning o'rningizda bo'lsam, o'qituvchi bilan ham gaplashardim." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "What is Dilshod's problem?", opts: ["He can't sleep before his exams.", "He lost his book.", "He is ill.", "He has no money."], a: 0, why: "*I'm worried about my exams. I can't sleep.*" } },
      ],
    },
    {
      title: "Maslahat berish iboralari",
      blocks: [
        { t: "p", md: "Do'stingiz muammosini aytsa, **tinglang**, so'ng maslahat bering. Maslahat qo'pol eshitilmasligi uchun yumshoq iboralarni ishlating." },
        {
          t: "examples", items: [
            { en: "You should talk to your teacher.", uz: "O'qituvchi bilan gaplashishingiz kerak.", note: "**should + V1** — maslahat." },
            { en: "You shouldn't worry too much.", uz: "Haddan ziyod xavotir olmasligingiz kerak.", note: "**shouldn't** — \"qilmagan ma'qul\"." },
            { en: "Why don't you ask Malika for help?", uz: "Nega Malikadan yordam so'ramaysiz?", note: "**Why don't you + V1?** — do'stona taklif." },
            { en: "What should I do?", uz: "Nima qilishim kerak?", note: "Maslahat so'rash." },
          ],
        },
        { t: "tip", tone: "warn", md: "**Why don't you** savol emas, balki **taklif**. Javobni kutmang: \"Nega?\" deb sabab so'ralmayapti. Fe'l 1-shaklda: *Why don't you **go**…?* (to yo'q)." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["You should rest.", "Why don't you call him?", "You shouldn't give up.", "Let me give you some advice."] },
          bad: { title: "Xato", items: ["You should to rest.", "Why you don't call him?", "You shouldn't to give up.", "Let me give you an advice."] },
        },
        { t: "check", ex: { k: "choice", q: "Qaysi gap **to'g'ri**?", opts: ["Why don't you to call him?", "Why you don't call him?", "Why don't you call him?", "Why not you call him?"], a: 2, why: "**Why don't you + V1?**" } },
      ],
    },
    {
      title: "Muammoga mos maslahat",
      blocks: [
        {
          t: "table", head: ["Muammo", "Maslahat"], speak: [1],
          rows: [
            ["I'm lonely in the new city.", "You should join a club."],
            ["I made a mistake at work.", "Why don't you tell your boss?"],
            ["I can't decide what to buy.", "You shouldn't hurry. Take your time."],
            ["I'm worried about money.", "You shouldn't spend so much."],
          ],
        },
        { t: "tip", tone: "info", md: "Maslahat berishdan oldin hamdardlik bildiring: *I'm sorry to hear that.* (Eshitganimdan afsusdaman.)" },
        { t: "check", ex: { k: "fill", q: "I'm lonely. — You ___ join a club.", a: ["should"], why: "Maslahat → **should**." } },
        { t: "check", ex: { k: "order", uz: "Nega unga qo'ng'iroq qilmaysiz?", words: ["Why", "don't", "you", "call", "him?"], extra: ["to", "do"], alt: [["Why", "do", "not", "you", "call", "him?"]] } },
      ],
    },
  ],
  words: [
    { en: "problem", uz: "muammo", ipa: "ˈprɒb.ləm", pos: "noun", ex: "I have a problem with my phone.", exUz: "Telefonim bilan muammom bor." },
    { en: "worried", uz: "xavotirli", ipa: "ˈwʌr.id", pos: "adj", ex: "She is worried about her brother.", exUz: "U akasi haqida xavotirda." },
    { en: "solution", uz: "yechim", ipa: "səˈluː.ʃn", pos: "noun", ex: "Let's find a solution together.", exUz: "Yechimni birga topaylik." },
    { en: "decide", uz: "qaror qilmoq", ipa: "dɪˈsaɪd", pos: "verb", ex: "I can't decide what to wear.", exUz: "Nima kiyishni hal qila olmayapman." },
    { en: "mistake", uz: "xato", ipa: "mɪˈsteɪk", pos: "noun", ex: "Everyone makes mistakes.", exUz: "Hamma xato qiladi." },
    { en: "lonely", uz: "yolg'iz, o'zini yolg'iz his qilgan", ipa: "ˈləʊn.li", pos: "adj", ex: "He felt lonely in the big city.", exUz: "U katta shaharda o'zini yolg'iz his qildi." },
  ],
  practice: [
    { k: "match", pairs: [["problem", "muammo"], ["worried", "xavotirli"], ["solution", "yechim"], ["mistake", "xato"], ["lonely", "o'zini yolg'iz his qilgan"]] },
    { k: "listen", say: "Why don't you ask your teacher?", opts: ["Why don't you ask your teacher?", "Why didn't you ask your teacher?", "Why don't they ask your teacher?"], a: 0 },
    { k: "choice", q: "I'm worried about my exam. — You ___ study all night.", opts: ["shouldn't", "should to", "don't should", "shoulds"], a: 0, why: "Kechasi bilan o'qimaslik ma'qul → **shouldn't**." },
    { k: "choice", q: "Do'stingizga maslahat berasiz. Eng yumshoq variant:", opts: ["Why don't you take a break?", "Take a break now!", "You must take a break.", "Break!"], a: 0, why: "**Why don't you…?** — do'stona taklif." },
    { k: "choice", q: "\"I can't decide.\" — Qaysi maslahat mos?", opts: ["You shouldn't hurry.", "You mustn't hurry.", "You shoulds hurry.", "You should hurrying."], a: 0, why: "**shouldn't + V1**." },
    { k: "choice", q: "Qaysi gap **xato**?", opts: ["You should rest.", "Why don't you rest?", "You should to rest.", "What should I do?"], a: 2, why: "should dan keyin to yo'q." },
    { k: "fill", q: "Why don't you ___ to bed earlier?", a: ["go"], why: "**Why don't you + V1**." },
    { k: "fill", q: "Can you give me some ___? (maslahat)", a: ["advice"], why: "**some advice** (an advice ❌)." },
    { k: "fix", wrong: "Why you don't talk to your boss?", a: ["Why don't you talk to your boss?"], why: "To'g'ri tartib: **Why don't you…?**" },
    { k: "fix", wrong: "You shouldn't to worry.", a: ["You shouldn't worry."], why: "**shouldn't + V1**, to yo'q." },
    { k: "tf", q: "**Why don't you call her?** — bu sabab so'rash emas, taklif.", a: true },
    { k: "order", uz: "Menimcha, sizga ko'proq dam olish kerak.", words: ["I", "think", "you", "should", "rest", "more."], extra: ["to", "must"] },
    { k: "translate", uz: "Nima qilishim kerak?", a: ["What should I do?"] },
    { k: "speak", say: "I'm sorry to hear that. Why don't you talk to your teacher?", uz: "Eshitganimdan afsusdaman. Nega o'qituvchi bilan gaplashmaysiz?" },
  ],
  quiz: [
    { k: "choice", q: "I feel lonely here. — You ___ join a club.", opts: ["should", "shoulds", "should to", "are should"], a: 0, why: "**should + V1**." },
    { k: "choice", q: "Which sentence gives advice?", opts: ["Why don't you ask for help?", "Why did you ask for help?", "Who asked for help?", "Where is help?"], a: 0, why: "**Why don't you…?** = maslahat." },
    { k: "choice", q: "Maslahat so'rash:", opts: ["What should I do?", "What I should do?", "What do I should?", "What should I to do?"], a: 0, why: "**What should I do?**" },
    { k: "fill", q: "You ___ give up. Try again! (maslahat: taslim bo'lmang)", a: ["shouldn't", "should not"], why: "**shouldn't give up**." },
    { k: "tf", q: "**She gave me an advice** — to'g'ri gap.", a: false, why: "advice sanalmaydi: *some advice* yoki *a piece of advice*." },
    { k: "order", uz: "Nega ertaroq yotmaysiz?", words: ["Why", "don't", "you", "go", "to", "bed", "earlier?"], extra: ["do", "going"] },
    { k: "translate", uz: "Haddan ziyod xavotir olmasligingiz kerak.", a: ["You shouldn't worry too much.", "You should not worry too much."] },
    { k: "listen", say: "You should take a break.", opts: ["You should take a break.", "You shouldn't take a break.", "You should make a break."], a: 0 },
  ],
  summary: [
    "Maslahat: **You should + V1**; qilmaslik haqida: **You shouldn't + V1**. To va -s yo'q.",
    "Do'stona taklif: **Why don't you + V1?** — bu sabab so'rash emas.",
    "Maslahat so'rash: **What should I do?**",
    "**advice** sanalmaydi: *some advice*, *a piece of advice*.",
  ],
  homework: "Do'stingizning 3 ta muammosini o'ylab toping (masalan: charchoq, yolg'izlik, xato) va har biriga ikkitadan maslahat yozing: biri **should / shouldn't** bilan, biri **Why don't you…?** bilan. Ularni ovoz chiqarib ayting.",
};

export default lesson;
