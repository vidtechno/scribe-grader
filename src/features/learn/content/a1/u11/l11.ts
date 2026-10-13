import type { Lesson } from '../../../types';

// Mini lesson (review): all Beginner + Elementary tenses and modal basics.
const lesson: Lesson = {
  id: "u11-l11",
  title: "Elementary: final review",
  titleUz: "Elementary: yakuniy takror",
  mini: true,
  goal: "Elementary darajasini yakunlaysiz: **Present Simple, Present Continuous, Past Simple, going to, will, Present Perfect** va modal fe'llar **can, have to, must, should** — hammasini bitta kichik takrorda mustahkamlaysiz.",
  slides: [
    {
      title: "Zamonlar: tezkor takror",
      blocks: [
        { t: "p", md: "Bitta kichik hikoya ichida barcha zamonlarni ko'ring. Har bir zamon o'z vazifasini bajaradi." },
        { t: "dialog", lines: [
          { who: "Malika", en: "I work in a bank, but today I'm studying English at home.", uz: "Men bankda ishlayman, lekin bugun uyda ingliz tilini o'rganyapman." },
          { who: "Ali", en: "Did you study yesterday too?", uz: "Kecha ham o'qiganmidingiz?" },
          { who: "Malika", en: "Yes, I did. I've learnt a lot of new words this month.", uz: "Ha. Bu oy ko'p yangi so'zlarni o'rgandim." },
          { who: "Ali", en: "What are you going to do next?", uz: "Keyin nima qilmoqchisiz?" },
          { who: "Malika", en: "I'm going to take an exam in June. I think I'll pass it!", uz: "Iyunda imtihon topshiraman. Menimcha, o'taman!" },
        ] },
        { t: "table", head: ["Zamon", "Misol"], speak: [1], rows: [
          ["Present Simple", "I work in a bank."],
          ["Present Continuous", "I'm studying now."],
          ["Past Simple", "I studied yesterday."],
          ["Present Perfect", "I've learnt a lot."],
          ["going to / will", "I'm going to take an exam. I'll pass."],
        ] },
        { t: "check", ex: { k: "choice", q: "\"Men kecha ingliz tilini o'qidim.\"", opts: ["I study English yesterday.", "I studied English yesterday.", "I've studied English yesterday.", "I'm studying English yesterday."], a: 1, why: "**yesterday** → Past Simple." } },
      ],
    },
    {
      title: "Modal fe'llar: can, have to, must, should",
      blocks: [
        { t: "table", head: ["Modal", "Ma'nosi", "Misol"], speak: [2], rows: [
          ["can", "qila olish, ruxsat", "I can swim. Can I sit here?"],
          ["have to", "majburiyat (tashqi qoida)", "I have to work on Monday."],
          ["must", "kuchli majburiyat, tavsiya", "You must wear a seat belt."],
          ["should", "maslahat", "You should sleep more."],
          ["don't have to", "shart emas", "You don't have to come."],
        ] },
        { t: "tip", tone: "warn", md: "**can, must, should** dan keyin fe'l **oddiy shaklda** va **to**siz: *She can swim* (❌ *She cans swim / can to swim*). **have to** — oddiy fe'l kabi: *He has to go. Does he have to go?*" },
        { t: "check", ex: { k: "fill", q: "It's late. You ___ go to bed. (maslahat)", a: ["should"], why: "Maslahat → **should**." } },
        { t: "check", ex: { k: "choice", q: "He ___ to wear a uniform at school.", opts: ["has", "have", "must", "should"], a: 0, why: "**he** bilan: **has to** + V1." } },
      ],
    },
    {
      title: "Tez-tez uchraydigan xatolar",
      blocks: [
        { t: "compare", good: { title: "To'g'ri", items: ["She can swim.", "Did you go there?", "I've never been to Spain.", "He doesn't like tea.", "I'll call you."], }, bad: { title: "Noto'g'ri", items: ["She cans swim.", "Did you went there?", "I've never went to Spain.", "He don't like tea.", "I will to call you."] } },
        { t: "tip", tone: "good", md: "Oltin qoida: **yordamchi fe'l + to'g'ri shakl**.\n• *do / does / did / will / can / should* → **V1**\n• *am / is / are* → **V-ing**\n• *have / has* → **V3**" },
        { t: "check", ex: { k: "fix", wrong: "Did you saw the film?", a: ["Did you see the film?"], why: "**Did** dan keyin V1: *see*." } },
      ],
    },
  ],
  words: [
    { en: "tense", uz: "zamon (grammatikada)", ipa: "tens", pos: "noun", ex: "Past Simple is a tense.", exUz: "Past Simple — bu zamon." },
    { en: "sentence", uz: "gap", ipa: "ˈsen.təns", pos: "noun", ex: "Write a short sentence.", exUz: "Qisqa gap yozing." },
    { en: "grammar", uz: "grammatika", ipa: "ˈɡræm.ər", pos: "noun", ex: "English grammar is not difficult.", exUz: "Ingliz grammatikasi qiyin emas." },
    { en: "exam", uz: "imtihon", ipa: "ɪɡˈzæm", pos: "noun", ex: "I have an exam on Monday.", exUz: "Dushanba kuni imtihonim bor." },
    { en: "correct", uz: "to'g'ri (javob, gap)", ipa: "kəˈrekt", pos: "adjective", ex: "Choose the correct sentence.", exUz: "To'g'ri gapni tanlang." },
  ],
  practice: [
    { k: "choice", q: "She ___ tea every morning.", opts: ["drink", "drinks", "is drink", "drank"], a: 1 },
    { k: "fill", q: "Listen! Someone ___ at the door. (knock)", a: ["is knocking", "'s knocking"], why: "**Listen!** → Present Continuous." },
    { k: "order", uz: "Men ertaga ishlashim kerak.", words: ["I", "have", "to", "work", "tomorrow"], extra: ["must", "working"] },
    { k: "translate", uz: "U hech qachon Parijda bo'lmagan.", a: ["She has never been to Paris.", "She's never been to Paris.", "He has never been to Paris.", "He's never been to Paris."] },
    { k: "match", pairs: [["can", "qila olish"], ["should", "maslahat"], ["have to", "majburiyat"], ["tense", "zamon"], ["grammar", "grammatika"]] },
    { k: "tf", q: "*She can to swim* — gap to'g'ri.", a: false, why: "**can** dan keyin **to** kerak emas: *She can swim.*" },
    { k: "listen", say: "You should sleep more.", opts: ["You should sleep more.", "You must sleep more.", "You can sleep more.", "You should sleep now."], a: 0 },
    { k: "dictation", say: "I'm going to take an exam.", a: ["I'm going to take an exam.", "I am going to take an exam."] },
    { k: "fix", wrong: "She has gone to Paris last year.", a: ["She went to Paris last year."], why: "**last year** → Past Simple." },
    { k: "fill", q: "A: It's hot in here. B: OK, I ___ open the window.", a: ["will", "'ll"], why: "Shu zahoti qaror → **will**." },
    { k: "speak", say: "I've never been to Japan.", uz: "Men hech qachon Yaponiyada bo'lmaganman." },
  ],
  quiz: [
    { k: "choice", q: "We ___ to Samarkand last year.", opts: ["go", "went", "have gone", "are going"], a: 1 },
    { k: "fill", q: "You ___ be quiet in the library. (kuchli majburiyat)", a: ["must", "have to"], why: "Qoida → **must** / **have to**." },
    { k: "order", uz: "Menimcha, u o'tadi.", words: ["I", "think", "she", "will", "pass"], extra: ["passes", "to"] },
    { k: "translate", uz: "Siz ko'proq uxlashingiz kerak.", a: ["You should sleep more.", "You should sleep more"] },
    { k: "tf", q: "*Does he has to go?* — gap to'g'ri.", a: false, why: "To'g'risi: *Does he have to go?*" },
    { k: "fix", wrong: "He don't like coffee.", a: ["He doesn't like coffee.", "He does not like coffee."], why: "**he** → doesn't." },
    { k: "match", pairs: [["I work.", "Present Simple"], ["I'm working.", "Present Continuous"], ["I worked.", "Past Simple"], ["I've worked.", "Present Perfect"]] },
    { k: "choice", q: "Look at those clouds! It ___ rain.", opts: ["will to", "is going to", "goes to", "has to"], a: 1 },
  ],
  summary: [
    "Zamonlar: **Simple** — odat, **Continuous** — hozir, **Past Simple** — aniq o'tmish, **Present Perfect** — tajriba, **going to / will** — kelajak.",
    "Modallar: **can** (qila olish), **have to / must** (majburiyat), **should** (maslahat) + oddiy fe'l.",
    "Oltin qoida: yordamchi fe'ldan keyin to'g'ri shakl (V1, V-ing, V3).",
    "Yangi so'zlar: **tense, sentence, grammar, exam, correct**.",
  ],
  homework: "O'zingiz haqingizda 6 ta gap yozing: har bir zamon uchun bittadan (Simple, Continuous, Past, Perfect, going to, will).",
};

export default lesson;
