import type { Lesson } from '../../../types';

// Mini lesson (grammar): How many times? question + so far / again / the first time.
const lesson: Lesson = {
  id: "u11-l13",
  title: "How many times? once, twice, three times",
  titleUz: "Necha marta? once, twice, three times",
  mini: true,
  kind: 'grammar',
  goal: "**Necha marta** bo'lganini so'raysiz va aytasiz: *How many times have you been to Khiva? — Twice.* Hamda **so far, again, the first time** iboralarini ishlatasiz.",
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
      title: "so far, again, the first time",
      blocks: [
        { t: "p", md: "Tajriba gaplariga uchta foydali ibora qo'shamiz: **so far** (hozirgacha), **again** (yana) va **the first time** (birinchi marta)." },
        { t: "table", head: ["Inglizcha", "Ma'nosi"], speak: [0], rows: [
          ["I've been to two countries so far.", "Hozirgacha ikkita davlatda bo'lganman."],
          ["We've eaten here again.", "Biz bu yerda yana ovqatlandik."],
          ["This is the first time I've seen the sea.", "Dengizni birinchi marta ko'rishim."],
        ] },
        { t: "compare",
          good: { title: "To'g'ri", items: ["How many times have you been to Paris?", "I've seen this film three times."] },
          bad: { title: "Noto'g'ri", items: ["How many times you have been to Paris?", "I've seen this film three time."] } },
        { t: "tip", tone: "info", md: "**so far** odatda gap oxirida turadi. **the first time** dan keyin ham **have + V3** ishlatiladi: *It's the first time I've flown.*" },
        { t: "check", ex: { k: "fill", q: "I've seen three films ___. (hozirgacha)", a: ["so far"], why: "Hozirgacha = **so far**." } },
        { t: "check", ex: { k: "fill", q: "It's the ___ time I've been to Khiva. (birinchi)", a: ["first"], why: "Birinchi marta = **the first time**." } },
      ],
    },
    {
      title: "Dialog: How many times?",
      blocks: [
        { t: "dialog", lines: [
          { who: "Sara", en: "Have you ever been to Khiva, Timur?", uz: "Timur, Xivada bo'lganmisiz?" },
          { who: "Timur", en: "Yes, I have. I've been there twice.", uz: "Ha, ikki marta bo'lganman." },
          { who: "Sara", en: "How many times have you been to Bukhara?", uz: "Buxoroda necha marta bo'lgansiz?" },
          { who: "Timur", en: "A few times. And you, Sara?", uz: "Bir necha marta. Siz-chi, Sara?" },
          { who: "Sara", en: "Only once. It's my first time in Khiva, and I love it!", uz: "Faqat bir marta. Xivada birinchi marta bo'lishim, va menga juda yoqyapti!" },
        ] },
        { t: "check", ex: { k: "tf", q: "Timur has been to Khiva twice.", a: true, why: "*I've been there twice.*" } },
        { t: "check", ex: { k: "tf", q: "Sara has been to Bukhara many times.", a: false, why: "Sara: *Only once.*" } },
      ],
    },
  ],
  words: [
    { en: "a few times", uz: "bir necha marta", ipa: "ə fjuː taɪmz", pos: "phrase", ex: "I have seen him a few times.", exUz: "Men uni bir necha marta ko'rganman." },
    { en: "again", uz: "yana, qayta", ipa: "əˈɡen", pos: "adverb", ex: "I want to go there again.", exUz: "Men yana u yerga bormoqchiman." },
    { en: "so far", uz: "hozirgacha", ipa: "səʊ fɑː", pos: "phrase", ex: "I have been to two countries so far.", exUz: "Hozirgacha ikkita davlatda bo'lganman." },
    { en: "the first time", uz: "birinchi marta", ipa: "ðə fɜːst taɪm", pos: "phrase", ex: "This is the first time I have seen the sea.", exUz: "Dengizni birinchi marta ko'rishim." },
    { en: "how many times", uz: "necha marta", ipa: "haʊ ˈmeni taɪmz", pos: "phrase", ex: "How many times have you been there?", exUz: "U yerda necha marta bo'lgansiz?" },
  ],
  practice: [
    { k: "match", pairs: [["once", "bir marta"], ["twice", "ikki marta"], ["a few times", "bir necha marta"], ["again", "yana"], ["so far", "hozirgacha"]] },
    { k: "listen", say: "I've been to Bukhara twice.", opts: ["I've been to Bukhara twice.", "I've been to Bukhara once.", "I'm going to Bukhara twice."], a: 0, why: "**twice** — ikki marta." },
    { k: "choice", q: "She has seen this film ___. (ikki marta)", opts: ["twice", "two time", "second", "twice times"], a: 0, why: "Ikki marta = **twice**." },
    { k: "choice", q: "**How many times have you been to Khiva?** — to'g'ri javob:", opts: ["Three times.", "Yes, I have.", "Three time.", "I went there."], a: 0, why: "**How many times…?** ga son bilan javob beriladi: *Three times.*" },
    { k: "fill", q: "I've been to the zoo ___. (bir marta)", a: ["once"], why: "Bir marta = **once**." },
    { k: "fill", q: "How many times ___ you been to Samarkand?", a: ["have"], why: "**you** + **have**." },
    { k: "fill", q: "I've been to two countries ___. (hozirgacha)", a: ["so far"], why: "Hozirgacha = **so far**." },
    { k: "tf", q: "**It's the first time I've seen snow.** — Men qorni oldin ham ko'rganman.", a: false, why: "**the first time** — birinchi marta, oldin ko'rmagan." },
    { k: "fix", wrong: "I have seen this film three time.", a: ["I have seen this film three times.", "I've seen this film three times."], why: "**three times** — ko'plik." },
    { k: "fix", wrong: "How many time have you been to Bukhara?", a: ["How many times have you been to Bukhara?"], why: "**times** — ko'plik." },
    { k: "order", uz: "Siz Xivada necha marta bo'lgansiz?", words: ["How", "many", "times", "have", "you", "been", "to", "Khiva?"], extra: ["did", "was"], why: "**How many times + have + you + V3**." },
    { k: "translate", uz: "Men Toshkentda ikki marta bo'lganman.", a: ["I have been to Tashkent twice.", "I've been to Tashkent twice."] },
    { k: "speak", say: "I've been to Samarkand three times.", uz: "Men Samarqandda uch marta bo'lganman." },
  ],
  quiz: [
    { k: "listen", say: "How many times have you been there?", opts: ["How many times have you been there?", "How much is it there?", "How often do you go there?"], a: 0 },
    { k: "choice", q: "We've eaten here ___. (bir necha marta)", opts: ["a few times", "a few time", "few times ago", "twice times"], a: 0 },
    { k: "fill", q: "He has seen the sea ___. (ikki marta)", a: ["twice"] },
    { k: "fill", q: "This is the ___ time I've seen the sea. (birinchi)", a: ["first"], why: "Birinchi marta = **the first time**." },
    { k: "fix", wrong: "How many times you have been to Bukhara?", a: ["How many times have you been to Bukhara?"], why: "Savolda **have** egadan oldin." },
    { k: "order", uz: "Biz u yerda uch marta bo'lganmiz.", words: ["We", "have", "been", "there", "three", "times."], extra: ["was", "time"] },
    { k: "translate", uz: "U Buxoroda bir marta bo'lgan.", a: ["She has been to Bukhara once.", "She's been to Bukhara once.", "He has been to Bukhara once.", "He's been to Bukhara once."] },
    { k: "tf", q: "**once** = ikki marta.", a: false, why: "**once** — bir marta, **twice** — ikki marta." },
  ],
  summary: [
    "Necha marta: **once, twice, three times, a few times, many times** — gap oxirida.",
    "Savol: **How many times + have / has + ega + V3?** Javob: *Twice.*",
    "**so far** — hozirgacha; **again** — yana; **the first time** — birinchi marta.",
    "Yangi so'zlar: **a few times, again, so far, the first time, how many times**.",
  ],
  homework: "3 ta gap yozing: *I've been to … once / twice / three times.* Do'stingizga *How many times have you been to …?* deb savol bering.",
};

export default lesson;
