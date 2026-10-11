import type { Lesson } from '../../../types';

// Mini lesson (situation): phone call / chat. Present Continuous; recycles have got and family words.
const lesson: Lesson = {
  id: 'u4-l11',
  title: 'On the phone: what are you doing?',
  titleUz: 'Telefonda: nima qilyapsiz?',
  mini: true,
  goal: "Telefonda yoki chatda **hozir nima qilayotganingizni** aytasiz va so'raysiz: *What are you doing? — I'm cooking. Where are you?* **Present Continuous** va **have got** (oila) ni qayta ishlatasiz.",
  slides: [
    {
      title: 'Vaziyat: telefon qo\'ng\'irog\'i',
      blocks: [
        { t: 'p', md: "Telefonda odamlar ko'pincha **hozirgi vaziyat** haqida gapiradi: *What are you doing? Where are you? Who is she talking to?*" },
        { t: 'dialog', lines: [
          { who: 'Lola', en: 'Hello, Sam! What are you doing?', uz: 'Salom, Sam! Nima qilyapsan?' },
          { who: 'Sam', en: "Hi, Lola! I'm cooking dinner. My mother is helping me.", uz: 'Salom, Lola! Kechki ovqat tayyorlayapman. Onam menga yordam berayapti.' },
          { who: 'Lola', en: 'Is your father cooking too?', uz: 'Otang ham ovqat pishiryaptimi?' },
          { who: 'Sam', en: "No, he isn't. He's watching TV with my brother. Have you got a minute?", uz: "Yo'q. U akam bilan televizor ko'ryapti. Bir daqiqang bormi?" },
          { who: 'Lola', en: "Yes, I have. I'm waiting for the bus, so I can talk.", uz: "Ha, bor. Avtobus kutyapman, shuning uchun gaplasha olaman." },
          { who: 'Sam', en: "Sorry, I can't hear you. Can you call me later?", uz: "Kechir, seni eshitmayapman. Keyinroq qo'ng'iroq qila olasanmi?" },
          { who: 'Lola', en: 'Sure. Bye!', uz: 'Albatta. Xayr!' },
        ] },
        { t: 'check', ex: { k: 'choice', q: 'Sam: "My mother ___ me."', opts: ['help', 'is helping', 'helping', 'are helping'], a: 1, why: "*my mother* = she → **is helping**." } },
      ],
    },
    {
      title: 'Telefon iboralari',
      blocks: [
        { t: 'table', head: ['Inglizcha', 'Qachon aytiladi'], speak: [0, 1], rows: [
          ['What are you doing?', "Hozir nima qilayotganini so'raysiz"],
          ["I'm having lunch.", 'Hozir nima qilayotganingizni aytasiz'],
          ["Where are you?", "Qayerdaligini so'raysiz"],
          ["I can't hear you.", "Eshitilmayotganini aytasiz"],
          ['Can you call me later?', "Keyinroq qo'ng'iroq qilishni so'raysiz"],
          ['Have you got a minute?', "Vaqti borligini so'raysiz"],
        ] },
        { t: 'tip', tone: 'info', md: "Savolga qisqa javob: *Are you working? — Yes, I am. / No, I'm not.* Qisqartmada: *Yes, I'm.* deyilmaydi." },
        { t: 'check', ex: { k: 'fill', q: 'Is she talking to her sister? — No, she ___.', a: ["isn't", 'is not'], uz: "Yo'q, gaplashmayapti.", why: "Qisqa inkor: **isn't**." } },
      ],
    },
    {
      title: "Ehtiyot bo'ling: tez-tez uchraydigan xatolar",
      blocks: [
        { t: 'compare', good: { title: "To'g'ri", items: ["I'm cooking now.", 'What are you doing?', 'Have you got a sister?'] }, bad: { title: "Noto'g'ri", items: ['I cooking now.', 'What you are doing?', 'Do you got a sister?'] } },
        { t: 'p', md: "Eslatma: **am/is/are** ni tashlab ketmang; savolda **are** ega oldidan keladi: *What **are you** doing?*" },
        { t: 'check', ex: { k: 'choice', q: "Qaysi gap to'g'ri?", opts: ["He's watch TV.", "He's watching TV.", 'He watching TV.', 'He is watches TV.'], a: 1, why: "**is + watching**." } },
      ],
    },
  ],
  words: [
    { en: 'call', uz: "qo'ng'iroq qilmoq", ipa: 'kɔːl', pos: 'verb', ex: 'Can you call me later?', exUz: "Keyinroq qo'ng'iroq qila olasizmi?" },
    { en: 'message', uz: 'xabar', ipa: 'ˈmes.ɪdʒ', pos: 'noun', ex: 'I am writing a message.', exUz: 'Men xabar yozyapman.' },
    { en: 'hear', uz: 'eshitmoq', ipa: 'hɪər', pos: 'verb', ex: "I can't hear you.", exUz: 'Sizni eshitmayapman.' },
    { en: 'online', uz: 'onlayn, internetda', ipa: 'ˈɒn.laɪn', pos: 'adjective', ex: 'My sister is online now.', exUz: 'Singlim hozir onlaynda.' },
  ],
  practice: [
    { k: 'choice', q: 'What ___ you doing now?', opts: ['is', 'are', 'do', 'am'], a: 1, why: "**you** → **are**." },
    { k: 'fill', q: 'My brother ___ playing football now.', a: ['is', "'s"], uz: 'Akam hozir futbol o\'ynayapti.', why: "**is** + playing." },
    { k: 'fill', q: "I ___ hear you. (–)", a: ["can't", 'cannot'], uz: 'Sizni eshitmayapman.', why: "**can't** + fe'l." },
    { k: 'order', uz: 'Hozir nima qilyapsiz?', words: ['What', 'are', 'you', 'doing', 'now'], extra: ['do', 'is'] },
    { k: 'translate', uz: "Men hozir xabar yozyapman.", a: ["I'm writing a message now.", 'I am writing a message now.', "I'm writing a message.", 'I am writing a message.'], why: "**am + writing**." },
    { k: 'match', pairs: [['call', "qo'ng'iroq qilmoq"], ['message', 'xabar'], ['hear', 'eshitmoq'], ['online', 'onlayn']] },
    { k: 'tf', q: "*Have you got a sister?* — gap to'g'ri.", a: true, why: "**have got** — oila haqida so'rash." },
    { k: 'listen', say: "He's watching TV with my brother.", opts: ["He's watching TV with my brother.", 'He watches TV with my brother.', "She's watching TV with my brother.", "He's watching TV with my mother."], a: 0 },
    { k: 'fix', wrong: 'What you are doing?', a: ['What are you doing?'], why: "Savolda **are** ega oldida." },
    { k: 'dictation', say: 'Can you call me later?', a: ['Can you call me later?', 'Can you call me later'] },
    { k: 'speak', say: "I'm cooking dinner. My mother is helping me.", uz: 'Hozir nima qilayotganingizni ayting' },
  ],
  quiz: [
    { k: 'choice', q: 'My parents ___ watching TV.', opts: ['is', 'are', 'am', 'do'], a: 1 },
    { k: 'fill', q: "Are you working? — No, I ___.", a: ["'m not", 'am not', "I'm not"], why: "**I'm not**." },
    { k: 'order', uz: "Opangizning bolalari bormi?", words: ['Has', 'your', 'sister', 'got', 'children'], extra: ['Have'] },
    { k: 'translate', uz: "U avtobus kutyapti.", a: ["She's waiting for the bus.", 'She is waiting for the bus.', "He's waiting for the bus.", 'He is waiting for the bus.'] },
    { k: 'tf', q: "*I cooking now.* — gap to'g'ri.", a: false, why: "To'g'risi: *I'm cooking now.*" },
    { k: 'fix', wrong: "She's talk to her mother.", a: ["She's talking to her mother.", 'She is talking to her mother.'], why: "**is + talking**." },
    { k: 'match', pairs: [['mother', 'ona'], ['father', 'ota'], ['brother', 'aka/uka'], ['sister', 'opa/singil']] },
    { k: 'choice', q: 'Where ___ you?', opts: ['is', 'are', 'do', 'have'], a: 1 },
  ],
  summary: [
    "Hozirgi ish: **am / is / are + -ing**. Savol: **What are you doing?**",
    "Qisqa javob: *Yes, I am. / No, he isn't.* Telefonda: *I can't hear you. Can you call me later?*",
    "Oila haqida: **have got / has got**: *Have you got a brother?*",
    "Yangi so'zlar: **call, message, hear, online**.",
  ],
  homework: "Do'stingizga xabar yozing yoki ayting: *What are you doing? I'm… Where are you?*",
};

export default lesson;
