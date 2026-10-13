import type { Lesson } from '../../../types';

// Mini lesson (skill): listening and speaking about my job and my free time.
const lesson: Lesson = {
  id: 'u7-l14',
  title: 'Listening and speaking: my job and my free time',
  titleUz: "Tinglash va gapirish: ishim va bo'sh vaqtim",
  mini: true,
  kind: 'skill',
  goal: "Ikki suhbatni tinglab, **kasb va bo'sh vaqt** haqidagi asosiy ma'lumotni topasiz va o'zingiz haqingizda **ish va hobbilaringizni** aytib berasiz.",
  slides: [
    {
      title: 'Tinglang: yangi hamkasb',
      blocks: [
        { t: 'p', md: "Dialogni o'qing va tinglang. Diqqat: **kasb**, **ish joyi** va **hobbi**." },
        { t: 'dialog', lines: [
          { who: 'Jack', en: "Hi, I'm Jack. I'm the new manager.", uz: "Salom, men Jekman. Men yangi menejerman." },
          { who: 'Sara', en: "Nice to meet you, Jack. I'm Sara. I'm an engineer.", uz: "Tanishganimdan xursandman, Jek. Men Saraman. Men muhandisman." },
          { who: 'Jack', en: "Do you like your job?", uz: "Ishingiz yoqadimi?" },
          { who: 'Sara', en: "Yes, I do. The office is great and my colleagues are friendly.", uz: "Ha. Ofis ajoyib, hamkasblarim mehribon." },
          { who: 'Jack', en: "What do you do in your spare time?", uz: "Bo'sh vaqtingizda nima qilasiz?" },
          { who: 'Sara', en: "I love cycling. I go cycling twice a week. And you?", uz: "Men velosipedni yaxshi ko'raman. Haftada ikki marta velosiped haydayman. Siz-chi?" },
          { who: 'Jack', en: "I cycle badly, but I play tennis well.", uz: "Men velosipedni yomon haydayman, lekin tennisni yaxshi o'ynayman." },
        ] },
        { t: 'check', ex: { k: 'choice', q: "What is Sara's job?", opts: ['manager', 'engineer', 'driver', 'chef'], a: 1, why: "*I'm an engineer.*" } },
        { t: 'check', ex: { k: 'tf', q: "Sara goes cycling every day.", a: false, why: "*I go cycling **twice a week**.*" } },
      ],
    },
    {
      title: "Ikkinchi suhbat: telefonda",
      blocks: [
        { t: 'dialog', lines: [
          { who: 'Dan', en: "Hello, Laura? Are you busy at the moment?", uz: "Allo, Laura? Hozir bandmisiz?" },
          { who: 'Laura', en: "A little. I'm working in the office right now. I finish at six.", uz: "Ozgina. Hozir ofisda ishlayapman. Oltida tugataman." },
          { who: 'Dan', en: "Shall we play volleyball after work?", uz: "Ishdan keyin voleybol o'ynaymizmi?" },
          { who: 'Laura', en: "I'd love to, but I can't. I'm meeting my sister at seven. How about Saturday?", uz: "Mamnuniyat bilan, lekin bo'lmaydi. Soat yettida opam bilan uchrashaman. Shanba-chi?" },
          { who: 'Dan', en: "Saturday is perfect. Let's meet at ten.", uz: "Shanba juda yaxshi. Soat o'nda uchrashaylik." },
        ] },
        { t: 'check', ex: { k: 'choice', q: "Why can't Laura play volleyball after work?", opts: ["She's busy at the office.", "She's meeting her sister.", "She hates volleyball.", "She's cycling."], a: 1, why: "*I'm meeting my sister at seven.*" } },
        { t: 'tip', tone: 'good', md: "Gapirishda **to'liq gaplar** ishlating va savol qaytaring: *And you? What do you do in your spare time?*" },
      ],
    },
    {
      title: 'Gapiring: o‘zingiz haqingizda',
      blocks: [
        { t: 'table', head: ['Savol', 'Javob namunasi'], speak: [0, 1], rows: [
          ['What do you do?', "I'm a driver. I work in an office."],
          ['Do you like your job?', "Yes, I do. It's interesting."],
          ['What do you do in your spare time?', 'I love cycling.'],
          ['What are you doing this weekend?', "I'm visiting my parents."],
        ] },
        { t: 'tip', tone: 'good', md: "Javob bergach, **And you?** deb savol qaytaring. Shunda suhbat to'xtamaydi." },
        { t: 'check', ex: { k: 'fill', q: "What do you do in your ___ time?", a: ['spare', 'free'], uz: "Bo'sh vaqtingizda nima qilasiz?", why: "**spare time / free time** — bo'sh vaqt." } },
      ],
    },
  ],
  words: [
    { en: 'manager', uz: 'menejer, boshliq', ipa: 'ˈmæn.ɪ.dʒər', pos: 'noun', ex: 'The manager is in the office.', exUz: 'Menejer ofisda.' },
    { en: 'perfect', uz: 'ajoyib, juda yaxshi', ipa: 'ˈpɜː.fekt', pos: 'adjective', ex: 'Friday is perfect for me.', exUz: 'Juma men uchun juda qulay.' },
    { en: 'friendly', uz: 'mehribon, samimiy', ipa: 'ˈfrend.li', pos: 'adjective', ex: 'My colleagues are friendly.', exUz: 'Hamkasblarim mehribon.' },
    { en: 'spare time', uz: "bo'sh vaqt", ipa: 'speə taɪm', pos: 'noun', ex: 'What do you do in your spare time?', exUz: "Bo'sh vaqtingizda nima qilasiz?" },
    { en: 'part-time', uz: 'yarim kunlik', ipa: 'ˌpɑːt ˈtaɪm', pos: 'adjective', ex: 'She has a part-time job.', exUz: 'Uning yarim kunlik ishi bor.' },
  ],
  practice: [
    { k: 'listen', say: "I'm an engineer and I work in an office.", opts: ["I'm an engineer and I work in an office.", "I'm a driver and I work in an office.", "I'm an engineer and I work in a factory.", "She's an engineer and she works in an office."], a: 0 },
    { k: 'dictation', say: "What do you do in your spare time?", a: ["What do you do in your spare time?"] },
    { k: 'choice', q: 'Listen and choose the best answer.', say: "Do you like your job?", opts: ["Yes, I do. It's interesting.", "Yes, I like.", "I'm a driver.", "No, I'm not."], a: 0 },
    { k: 'fill', q: "I go cycling ___ a week. (2x)", a: ['twice'], uz: "Haftada ikki marta velosiped haydayman.", why: "2 marta = **twice**." },
    { k: 'order', uz: "Hozir ofisda ishlayapman.", words: ["I'm", 'working', 'in', 'the', 'office', 'right', 'now'], extra: ['work', 'at'], alt: [['I', 'am', 'working', 'in', 'the', 'office', 'right', 'now']] },
    { k: 'translate', uz: "U yarim kunlik ishlaydi.", a: ['He works part-time.', 'She works part-time.'], why: "**works part-time** — u yarim kun ishlaydi." },
    { k: 'match', pairs: [['manager', 'menejer'], ['engineer', 'muhandis'], ['driver', 'haydovchi'], ['office', 'ofis'], ['spare time', "bo'sh vaqt"]] },
    { k: 'tf', q: "Laura is meeting her sister at seven. She can play volleyball after work.", a: false, why: "U opasi bilan uchrashadi, shuning uchun **bora olmaydi**." },
    { k: 'listen', say: "How about Saturday? Let's meet at ten.", opts: ["How about Saturday? Let's meet at ten.", "How about Sunday? Let's meet at ten.", "How about Saturday? Let's meet at two.", "What about Saturday? We meet at ten."], a: 0 },
    { k: 'speak', say: "I'm a driver and I work in an office.", uz: "Men haydovchiman va ofisda ishlayman." },
    { k: 'speak', say: "In my spare time I love cycling.", uz: "Bo'sh vaqtimda velosiped haydashni yaxshi ko'raman." },
    { k: 'speak', say: "Shall we play volleyball on Saturday?", uz: "Shanba kuni voleybol o'ynaymizmi?" },
  ],
  quiz: [
    { k: 'listen', say: "She works part-time in an office.", opts: ["She works part-time in an office.", "She works full-time in an office.", "She works part-time in a factory.", "He works part-time in an office."], a: 0 },
    { k: 'dictation', say: "I'm meeting my sister at seven.", a: ["I'm meeting my sister at seven.", 'I am meeting my sister at seven.'] },
    { k: 'choice', q: "\"What do you do?\" means:", opts: ["Kasbingiz nima?", "Hozir nima qilyapsiz?", "Qayerda yashaysiz?", "Qachon ishlaysiz?"], a: 0 },
    { k: 'fill', q: "He is a bus ___. (haydovchi)", a: ['driver'], uz: "U avtobus haydovchisi.", why: "**driver** — haydovchi." },
    { k: 'order', uz: "Bo'sh vaqtingizda nima qilasiz?", words: ['What', 'do', 'you', 'do', 'in', 'your', 'spare', 'time'], extra: ['does', 'are'] },
    { k: 'translate', uz: "Men menejerman.", a: ["I'm a manager.", 'I am a manager.'] },
    { k: 'match', pairs: [['manager', 'menejer'], ['engineer', 'muhandis'], ['office', 'ofis'], ['part-time', 'yarim kunlik']] },
    { k: 'fix', wrong: 'I work in the office right now.', a: ["I'm working in the office right now.", 'I am working in the office right now.'], why: "**right now** — hozir: Present Continuous." },
  ],
  summary: [
    "Tinglaganda avval **kim**, **qaysi kasb**, **hobbi** nima ekanini toping.",
    "Kasb: **I'm an engineer.** Hobbi: **I love cycling.** Tez-tezlik: **twice a week.**",
    "Taklif va javob: **Shall we…? — I'd love to, but I can't.**",
    "Yangi so'zlar: **manager, friendly, spare time, part-time, perfect**.",
  ],
  homework: "Telefoningizga 30 soniyalik audio yozing: kasbingiz, hozirgi ishingiz va bo'sh vaqtdagi hobbiyingiz haqida.",
};

export default lesson;
