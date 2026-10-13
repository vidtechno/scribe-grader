import type { Lesson } from '../../../types';

// Mini lesson (grammar): How many times? once, twice, three times; been vs gone.
const lesson: Lesson = {
  id: "u11-l13",
  title: "How many times? once, twice, three times",
  titleUz: "Necha marta? once, twice, three times",
  mini: true,
  kind: 'grammar',
  goal: "**Necha marta** bo'lganini aytasiz va so'raysiz: *How many times have you been to Khiva? — Twice.* Va **been** (borib qaytgan) bilan **gone** (ketgan, hali qaytmagan) ni adashtirmaysiz.",
  slides: [
    {
      title: "Necha marta?",
      blocks: [
        { t: "p", md: "Tajriba haqida gapirganda ko'pincha **necha marta** bo'lganini ham aytamiz. Son gap **oxirida** turadi." },
        { t: "table", head: ["Inglizcha", "Ma'nosi"], speak: [0], rows: [
          ["once", "bir marta"],
          ["twice", "ikki marta"],
          ["three times", "uch marta (3 dan boshlab: son + times)"],
          ["a few times", "bir necha marta"],
          ["many times", "ko'p marta"],
        ] },
        { t: "examples", items: [
          { en: "I've been to Bukhara once.", uz: "Buxoroda bir marta bo'lganman." },
          { en: "She has seen this film twice.", uz: "U bu filmni ikki marta ko'rgan." },
          { en: "We've eaten here a few times.", uz: "Biz bu yerda bir necha marta ovqatlanganmiz." },
        ] },
        { t: "p", md: "Savol: **How many times + have / has + ega + V3?** Javob — qisqa: *Once. / Twice. / Three times.*" },
        { t: "check", ex: { k: "choice", q: "\"U Samarqandda uch marta bo'lgan.\"", opts: ["She has been to Samarkand three times.", "She has been to Samarkand three time.", "She has been three times Samarkand.", "She was to Samarkand three times ago."], a: 0, why: "**three times** — gap oxirida, *time* emas, **times**." } },
      ],
    },
    {
      title: "been yoki gone?",
      blocks: [
        { t: "p", md: "Bu ikki so'z ham **go** ning V3 shakliga o'xshaydi, lekin ma'nosi farq qiladi:" },
        { t: "table", head: ["Gap", "Ma'nosi"], speak: [0], rows: [
          ["He's been to the market.", "U bozorga borib, qaytib keldi (hozir shu yerda)."],
          ["He's gone to the market.", "U bozorga ketdi (hozir u yerda yoki yo'lda)."],
        ] },
        { t: "compare",
          good: { title: "To'g'ri", items: ["I've been to Khiva twice.", "Where's Dad? — He's gone to work."] },
          bad: { title: "Noto'g'ri", items: ["I've gone to Khiva twice. (o'zim haqimda, qaytib kelganman)", "How many times have you gone to Paris?"] } },
        { t: "tip", tone: "info", md: "O'zingiz haqingizda va tajriba haqida gapirsangiz — **been**: *I've been to Paris twice.* Hozir yo'qligini aytsangiz — **gone**: *She's gone to Paris.*" },
        { t: "check", ex: { k: "fill", q: "Ali isn't here. He has ___ to the bank. (hozir u yerda)", a: ["gone"], why: "U hali qaytmagan → **gone**." } },
        { t: "check", ex: { k: "fill", q: "I've ___ to the zoo three times. (qaytib kelganman)", a: ["been"], why: "Tajriba, qaytib kelgan → **been**." } },
      ],
    },
    {
      title: "Dialog: How many times?",
      blocks: [
        { t: "dialog", lines: [
          { who: "Sara", en: "Have you ever been to Khiva, Timur?", uz: "Timur, Xivada bo'lganmisiz?" },
          { who: "Timur", en: "Yes, I have. I've been there twice.", uz: "Ha, ikki marta bo'lganman." },
          { who: "Sara", en: "How many times have you been to Bukhara?", uz: "Buxoroda necha marta bo'lgansiz?" },
          { who: "Timur", en: "A few times. My brother lives there, but he isn't there now. He's gone to Tashkent.", uz: "Bir necha marta. Akam o'sha yerda yashaydi, lekin hozir yo'q. U Toshkentga ketgan." },
        ] },
        { t: "check", ex: { k: "tf", q: "Timur has been to Khiva twice.", a: true, why: "*I've been there twice.*" } },
      ],
    },
  ],
  words: [
    { en: "a few times", uz: "bir necha marta", ipa: "ə fjuː taɪmz", pos: "phrase", ex: "I have seen him a few times.", exUz: "Men uni bir necha marta ko'rganman." },
    { en: "again", uz: "yana, qayta", ipa: "əˈɡen", pos: "adverb", ex: "I want to go there again.", exUz: "Men yana u yerga bormoqchiman." },
    { en: "so far", uz: "hozirgacha", ipa: "səʊ fɑː", pos: "phrase", ex: "I have been to two countries so far.", exUz: "Hozirgacha ikkita davlatda bo'lganman." },
    { en: "the first time", uz: "birinchi marta", ipa: "ðə fɜːst taɪm", pos: "phrase", ex: "It was the first time I saw the sea.", exUz: "Dengizni birinchi marta ko'rishim edi." },
    { en: "how many times", uz: "necha marta", ipa: "haʊ ˈmeni taɪmz", pos: "phrase", ex: "How many times have you been there?", exUz: "U yerda necha marta bo'lgansiz?" },
  ],
  practice: [
    { k: "match", pairs: [["once", "bir marta"], ["twice", "ikki marta"], ["a few times", "bir necha marta"], ["again", "yana"], ["so far", "hozirgacha"]] },
    { k: "listen", say: "I've been to Bukhara twice.", opts: ["I've been to Bukhara twice.", "I've been to Bukhara once.", "I'm going to Bukhara twice."], a: 0, why: "**twice** — ikki marta." },
    { k: "choice", q: "She has seen this film ___. (ikki marta)", opts: ["twice", "two time", "second", "twice times"], a: 0, why: "Ikki marta = **twice**." },
    { k: "choice", q: "**How many times have you been to Khiva?** — to'g'ri javob:", opts: ["Three times.", "Yes, I have.", "Three time.", "I went there."], a: 0, why: "**How many times…?** ga son bilan javob beriladi: *Three times.*" },
    { k: "fill", q: "I've been to the zoo ___. (bir marta)", a: ["once"], why: "Bir marta = **once**." },
    { k: "fill", q: "How many times ___ you been to Samarkand?", a: ["have"], why: "**you** + **have**." },
    { k: "fill", q: "Where's Aziz? — He's ___ to school. (hozir u yerda)", a: ["gone"], why: "Hali qaytmagan → **gone**." },
    { k: "tf", q: "**She's been to the market** — u hozir ham bozorda.", a: false, why: "**been** — borib qaytgan. Hozir u yerda bo'lsa — *She's gone*." },
    { k: "fix", wrong: "I have seen this film three time.", a: ["I have seen this film three times.", "I've seen this film three times."], why: "**three times** — ko'plik." },
    { k: "fix", wrong: "I've gone to Paris twice.", a: ["I've been to Paris twice.", "I have been to Paris twice."], hint: "Siz hozir bu yerdasiz, qaytib kelgansiz.", why: "O'zingiz haqingizda tajriba → **been**." },
    { k: "order", uz: "Siz Xivada necha marta bo'lgansiz?", words: ["How", "many", "times", "have", "you", "been", "to", "Khiva?"], extra: ["did", "gone"], why: "**How many times + have + you + V3**." },
    { k: "translate", uz: "Men Toshkentda ikki marta bo'lganman.", a: ["I have been to Tashkent twice.", "I've been to Tashkent twice."] },
    { k: "speak", say: "I've been to Samarkand three times.", uz: "Men Samarqandda uch marta bo'lganman." },
  ],
  quiz: [
    { k: "listen", say: "How many times have you been there?", opts: ["How many times have you been there?", "How much is it there?", "How often do you go there?"], a: 0 },
    { k: "choice", q: "We've eaten here ___. (bir necha marta)", opts: ["a few times", "a few time", "few times ago", "twice times"], a: 0 },
    { k: "fill", q: "He has seen the sea ___. (ikki marta)", a: ["twice"] },
    { k: "fill", q: "Mum isn't at home. She's ___ to the shop.", a: ["gone"], why: "Hali qaytmagan → **gone**." },
    { k: "fix", wrong: "How many times you have been to Bukhara?", a: ["How many times have you been to Bukhara?"], why: "Savolda **have** egadan oldin." },
    { k: "order", uz: "Biz u yerda uch marta bo'lganmiz.", words: ["We", "have", "been", "there", "three", "times."], extra: ["gone", "time"] },
    { k: "translate", uz: "U Buxoroda bir marta bo'lgan.", a: ["She has been to Bukhara once.", "She's been to Bukhara once.", "He has been to Bukhara once.", "He's been to Bukhara once."] },
    { k: "tf", q: "**once** = ikki marta.", a: false, why: "**once** — bir marta, **twice** — ikki marta." },
  ],
  summary: [
    "Necha marta: **once, twice, three times, a few times, many times** — gap oxirida.",
    "Savol: **How many times + have / has + ega + V3?** Javob: *Twice.*",
    "**been** — borib qaytgan (tajriba); **gone** — ketgan, hali qaytmagan.",
    "Yangi so'zlar: **a few times, again, so far, the first time, how many times**.",
  ],
  homework: "3 ta gap yozing: *I've been to … once / twice / three times.* Do'stingizga *How many times have you been to …?* deb savol bering.",
};

export default lesson;
