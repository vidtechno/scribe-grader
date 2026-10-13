import type { Lesson } from '../../../types';

// Mini lesson (situation): mixed real-life conversation at a station. Recycles ticket, bus, late, tea, coffee, work.
const lesson: Lesson = {
  id: "u11-l10",
  title: "Mixed conversations: real-life situations",
  titleUz: "Aralash suhbatlar: hayotiy vaziyatlar",
  mini: true,
  goal: "Haqiqiy suhbatda zamonlar **aralash** keladi: kim ekaningiz (Present Simple), hozir nima qilayotganingiz (Continuous), nima bo'lgani (Past Simple, Present Perfect) va rejalaringiz (*going to, will*). Vokzalda va kafeda shunday suhbat qurasiz.",
  slides: [
    {
      title: "Vaziyat: vokzalda tanishuv",
      blocks: [
        { t: "p", md: "Anvar poyezdni kutyapti. Yoniga Sarah degan sayyoh o'tiradi. Suhbatda **bir nechta zamon** ishlatiladi — har biri o'z vazifasi uchun." },
        { t: "dialog", lines: [
          { who: "Sarah", en: "Excuse me, is this seat free?", uz: "Kechirasiz, bu joy bo'shmi?" },
          { who: "Anvar", en: "Yes, please sit down. Are you waiting for the Tashkent train?", uz: "Ha, o'tiring. Toshkent poyezdini kutyapsizmi?" },
          { who: "Sarah", en: "Yes, but it's delayed. I'm a bit nervous. I'm meeting a friend at six.", uz: "Ha, lekin u kechikyapti. Biroz xavotirdaman. Oltida do'stim bilan uchrashaman." },
          { who: "Anvar", en: "Don't worry, you'll be fine. Where are you from?", uz: "Xavotir olmang, hammasi yaxshi bo'ladi. Qayerdansiz?" },
          { who: "Sarah", en: "I'm from Canada. I came here two weeks ago. I've visited Bukhara and Khiva.", uz: "Kanadadanman. Bu yerga ikki hafta oldin kelganman. Buxoro va Xivada bo'lganman." },
          { who: "Anvar", en: "Great! What are you going to do in Tashkent?", uz: "Zo'r! Toshkentda nima qilmoqchisiz?" },
          { who: "Sarah", en: "I'm going to visit the museums. Maybe we can have tea later?", uz: "Muzeylarni ko'rmoqchiman. Balki keyinroq choy icharmiz?" },
          { who: "Anvar", en: "Good idea. I'll wait for you at the café.", uz: "Yaxshi fikr. Sizni kafeda kutaman." },
        ] },
        { t: "check", ex: { k: "choice", q: "Sarah: \"I ___ here two weeks ago.\"", opts: ["come", "have come", "came", "am coming"], a: 2, why: "**two weeks ago** — aniq vaqt → Past Simple: **came**." } },
      ],
    },
    {
      title: "Qaysi zamon nima uchun?",
      blocks: [
        { t: "table", head: ["Gap", "Zamon", "Vazifasi"], speak: [0], rows: [
          ["I'm from Canada.", "Present Simple", "Kimligingiz, doimiy fakt"],
          ["I'm waiting for a train.", "Present Continuous", "Hozir sodir bo'layotgan ish"],
          ["I came two weeks ago.", "Past Simple", "Aniq vaqtdagi o'tmish"],
          ["I've visited Bukhara.", "Present Perfect", "Tajriba (vaqt aytilmaydi)"],
          ["I'm going to visit museums.", "going to", "Reja"],
          ["I'll wait for you.", "will", "Shu zahoti qaror, va'da"],
        ] },
        { t: "tip", tone: "good", md: "Suhbatda har bir gapdan oldin o'zingizga savol bering: *Bu odatmi, hozirmi, o'tganmi yoki rejami?* Shunda zamon o'zi chiqadi." },
        { t: "check", ex: { k: "fill", q: "Look! The train ___. (come)", a: ["is coming", "'s coming"], why: "**Look!** — hozir → Present Continuous." } },
      ],
    },
    {
      title: "Foydali iboralar va xatolar",
      blocks: [
        { t: "table", head: ["Inglizcha", "Qachon aytiladi"], speak: [0], rows: [
          ["Excuse me, is this seat free?", "Joy so'raysiz"],
          ["Is the train on time?", "Poyezd vaqtida ekanini so'raysiz"],
          ["It's delayed.", "Kechikayotganini aytasiz"],
          ["Where are you from?", "Tanishuvda so'raysiz"],
          ["Nice to meet you.", "Tanishganingizda aytasiz"],
          ["I'll see you later.", "Xayrlashasiz"],
        ] },
        { t: "compare", good: { title: "To'g'ri", items: ["I'm from Canada.", "I came two weeks ago.", "I'll wait for you."], }, bad: { title: "Noto'g'ri", items: ["I from Canada.", "I have come two weeks ago.", "I will to wait for you."] } },
        { t: "check", ex: { k: "choice", q: "Siz kafega kelmoqchisiz va hozir qaror qildingiz: \"I think ___ you there.\"", opts: ["I'll see", "I see", "I saw", "I've seen"], a: 0, why: "Shu zahoti qaror → **will**: *I'll see you there.*" } },
      ],
    },
  ],
  words: [
    { en: "platform", uz: "platforma (vokzalda)", ipa: "ˈplæt.fɔːm", pos: "noun", ex: "The train is on platform two.", exUz: "Poyezd ikkinchi platformada." },
    { en: "delayed", uz: "kechikkan", ipa: "dɪˈleɪd", pos: "adjective", ex: "My train is delayed.", exUz: "Poyezdim kechikyapti." },
    { en: "seat", uz: "o'rindiq, joy", ipa: "siːt", pos: "noun", ex: "Is this seat free?", exUz: "Bu joy bo'shmi?" },
    { en: "nervous", uz: "xavotirli", ipa: "ˈnɜː.vəs", pos: "adjective", ex: "I feel a bit nervous.", exUz: "O'zimni biroz xavotirda his qilyapman." },
    { en: "free", uz: "bo'sh (joy)", ipa: "friː", pos: "adjective", ex: "Is this table free?", exUz: "Bu stol bo'shmi?" },
    { en: "Excuse me", uz: "Kechirasiz (murojaat)", ipa: "ɪkˈskjuːs miː", pos: "phrase", ex: "Excuse me, where is platform two?", exUz: "Kechirasiz, ikkinchi platforma qayerda?" },
  ],
  practice: [
    { k: "choice", q: "Where ___ you from?", opts: ["is", "are", "do", "does"], a: 1 },
    { k: "fill", q: "I'm tired now, but I ___ a rest later. (will, have)", a: ["will have", "'ll have"], why: "Va'da/qaror: **will + V1**." },
    { k: "order", uz: "Bu joy bo'shmi?", words: ["Is", "this", "seat", "free"], extra: ["are", "does"] },
    { k: "translate", uz: "Men Kanadadanman.", a: ["I'm from Canada.", "I am from Canada."] },
    { k: "match", pairs: [["platform", "platforma"], ["delayed", "kechikkan"], ["seat", "o'rindiq"], ["nervous", "xavotirli"], ["ticket", "chipta"]] },
    { k: "tf", q: "*I have come two weeks ago* — gap to'g'ri.", a: false, why: "**ago** bilan — Past Simple: *I came two weeks ago.*" },
    { k: "listen", say: "My train is delayed.", opts: ["My train is delayed.", "My train is late.", "My bus is delayed.", "Your train is delayed."], a: 0 },
    { k: "dictation", say: "I'm going to visit the museums.", a: ["I'm going to visit the museums.", "I am going to visit the museums."] },
    { k: "fix", wrong: "I will to wait for you.", a: ["I will wait for you.", "I'll wait for you."], why: "**will** dan keyin **to** kerak emas." },
    { k: "fill", q: "Look at the clouds! It ___ rain.", a: ["is going to", "'s going to"], why: "Ko'z oldidagi belgi → **going to**." },
    { k: "speak", say: "Nice to meet you.", uz: "Tanishganimdan xursandman." },
  ],
  quiz: [
    { k: "choice", q: "Sarah ___ Bukhara and Khiva. (experience)", opts: ["visits", "has visited", "is visiting", "will visit"], a: 1 },
    { k: "fill", q: "He ___ the bus every day. (take)", a: ["takes"], why: "Odat → Present Simple, he → -s." },
    { k: "order", uz: "Poyezd kechikyapti.", words: ["The", "train", "is", "delayed"], extra: ["are", "delay"] },
    { k: "translate", uz: "Men uni ikki hafta oldin ko'rdim.", a: ["I saw him two weeks ago.", "I saw her two weeks ago."] },
    { k: "tf", q: "*I'm meeting a friend at six* — kelishilgan reja haqida gap.", a: true },
    { k: "fix", wrong: "I from Canada.", a: ["I'm from Canada.", "I am from Canada."], why: "**be** fe'li kerak: *I'm from…*" },
    { k: "match", pairs: [["I'll help you.", "will"], ["I'm going to study.", "going to"], ["I came yesterday.", "Past Simple"], ["I live here.", "Present Simple"]] },
    { k: "choice", q: "Excuse me, ___ this seat free?", opts: ["do", "is", "does", "are"], a: 1 },
  ],
  summary: [
    "Bitta suhbatda zamonlar aralashadi: **odat/fakt** — Simple, **hozir** — Continuous, **o'tmish** — Past Simple / Present Perfect, **kelajak** — going to / will.",
    "Aniq vaqt (*ago, yesterday*) bo'lsa — **Past Simple**; tajriba — **Present Perfect**.",
    "Vokzal iboralari: *Is this seat free? It's delayed. Nice to meet you.*",
    "Yangi so'zlar: **platform, delayed, seat, nervous, free, Excuse me**.",
  ],
  homework: "Do'stingiz bilan tanishuv suhbatini yozing: 6 ta gap, kamida 4 xil zamon bilan.",
};

export default lesson;
