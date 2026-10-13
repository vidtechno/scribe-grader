import type { Lesson } from '../../../types';

// Mini lesson (situation): making plans with a friend — Present Continuous for plans, would like, invitations, times.
const lesson: Lesson = {
  id: 'u7-l10',
  title: 'Making plans with a friend',
  titleUz: "Do'st bilan reja tuzish",
  mini: true,
  goal: "Do'stingizni **taklif qilasiz**, taklifni **qabul qilasiz yoki muloyim rad etasiz** va vaqtni kelishasiz: *Would you like to go to the cinema? I'm meeting Aziz at six. Sorry, I can't.*",
  slides: [
    {
      title: 'Vaziyat: hafta oxiri rejasi',
      blocks: [
        { t: 'p', md: "Yaqin kelajakdagi **aniq reja** uchun **Present Continuous** ishlatiladi (*I'm meeting Aziz tonight*). Taklif uchun: **Would you like to…?** Javob: **I'd love to. / Sorry, I can't.**" },
        { t: 'dialog', lines: [
          { who: 'Lola', en: 'Hi, Sam! Are you doing anything on Saturday?', uz: 'Salom, Sam! Shanba kuni biror ishing bormi?' },
          { who: 'Sam', en: "No, I'm free. Why?", uz: "Yo'q, bo'shman. Nima edi?" },
          { who: 'Lola', en: "Would you like to go to the cinema? I have two tickets.", uz: "Kinoga borishni xohlaysanmi? Menda ikkita chipta bor." },
          { who: 'Sam', en: "I'd love to! What time is the film?", uz: "Mamnuniyat bilan! Film soat nechada?" },
          { who: 'Lola', en: "It starts at seven. Let's meet at half past six.", uz: "Soat yettida boshlanadi. Keling, olti yarimda uchrashaylik." },
          { who: 'Sam', en: 'Sounds good. Maybe we can have dinner after the film.', uz: "Yaxshi. Ehtimol, filmdan keyin kechki ovqat yeymiz." },
          { who: 'Lola', en: 'Great plan! See you on Saturday.', uz: "Ajoyib reja! Shanba kuni ko'rishamiz." },
        ] },
        { t: 'check', ex: { k: 'choice', q: 'Lola: "Are you ___ anything on Saturday?"', opts: ['do', 'doing', 'does', 'to do'], a: 1, why: "Reja: **Present Continuous** — are you **doing**?" } },
      ],
    },
    {
      title: 'Taklif va javob iboralari',
      blocks: [
        { t: 'table', head: ['Inglizcha', "Ma'nosi"], speak: [0], rows: [
          ['Would you like to come?', 'Taklif qilish'],
          ["I'd love to!", 'Mamnuniyat bilan qabul qilish'],
          ['Sounds great!', "Zo'r, ma'qul"],
          ["I'm afraid I can't. I'm working.", 'Muloyim rad etish + sabab'],
          ['How about Sunday?', 'Boshqa vaqt taklif qilish'],
          ["Let's meet at six.", 'Uchrashuv vaqti'],
        ] },
        { t: 'tip', tone: 'good', md: "Rad etganda sababni ayting va boshqa vaqt taklif qiling: *Sorry, I'm working tonight. How about tomorrow?*" },
        { t: 'check', ex: { k: 'fill', q: "Sorry, I can't. I ___ working tonight.", a: ["'m", 'am'], uz: 'Kechirasan, bo‘lmaydi. Bugun kechqurun ishlayman.', why: "**I'm working** — Present Continuous (reja)." } },
      ],
    },
    {
      title: "Ehtiyot bo'ling: tez-tez uchraydigan xatolar",
      blocks: [
        { t: 'compare', good: { title: "To'g'ri", items: ['Would you like to come?', "I'm meeting Aziz tomorrow.", "I'd love to!"] }, bad: { title: "Noto'g'ri", items: ['Would you like come?', 'I meet Aziz tomorrow (reja).', 'Yes, I want!'] } },
        { t: 'p', md: "Eslatma: **would like** dan keyin **to + fe'l**. Aniq reja — **am / is / are + fe'l-ing**. Muloyim rad: **No** emas, **I'm afraid I can't.**" },
        { t: 'check', ex: { k: 'fix', wrong: 'Would you like go to the cinema?', a: ['Would you like to go to the cinema?'], why: "**would like to** + fe'l." } },
      ],
    },
  ],
  words: [
    { en: 'plan', uz: 'reja', ipa: 'plæn', pos: 'noun', ex: 'What are your plans for Sunday?', exUz: 'Yakshanba kuni rejangiz qanday?' },
    { en: 'popcorn', uz: 'popkorn', ipa: 'ˈpɒp.kɔːn', pos: 'noun', ex: 'Let\'s buy popcorn before the film.', exUz: 'Filmdan oldin popkorn olaylik.' },
    { en: 'seat', uz: 'o‘rindiq, joy', ipa: 'siːt', pos: 'noun', ex: 'Our seats are in row five.', exUz: 'Bizning joylarimiz beshinchi qatorda.' },
    { en: 'screen', uz: 'ekran', ipa: 'skriːn', pos: 'noun', ex: 'The cinema has a big screen.', exUz: 'Kinoteatrda katta ekran bor.' },
    { en: 'ticket', uz: 'chipta', ipa: 'ˈtɪk.ɪt', pos: 'noun', ex: 'I have two tickets.', exUz: 'Menda ikkita chipta bor.' },
  ],
  practice: [
    { k: 'choice', q: 'Would you ___ to come to my party?', opts: ['like', 'likes', 'liking', 'love'], a: 0, why: "**Would you like to…?**" },
    { k: 'fill', q: "I ___ meeting Aziz at six. (am)", a: ["'m", 'am'], uz: "Men Aziz bilan soat oltida uchrashaman.", why: "**I'm meeting** — reja." },
    { k: 'order', uz: 'Keling, olti yarimda uchrashaylik.', words: ["Let's", 'meet', 'at', 'half', 'past', 'six'], extra: ['meets', 'to'] },
    { k: 'translate', uz: "Kinoga borishni xohlaysanmi?", a: ['Would you like to go to the cinema?', 'Would you like to come to the cinema?', 'Do you want to go to the cinema?'] },
    { k: 'match', pairs: [['plan', 'reja'], ['ticket', 'chipta'], ['popcorn', 'popkorn'], ['seat', "o'rindiq"], ['screen', 'ekran']] },
    { k: 'tf', q: "*I'd love to!* — taklifni mamnuniyat bilan qabul qilish.", a: true },
    { k: 'listen', say: "Would you like to go to the cinema?", opts: ["Would you like to go to the cinema?", "Do you like going to the cinema?", "Would you like to go to the café?", "Are you going to the cinema?"], a: 0 },
    { k: 'dictation', say: "I'm afraid I can't.", a: ["I'm afraid I can't.", 'I am afraid I cannot.', 'I am afraid I can not.'] },
    { k: 'fix', wrong: 'Would you like come with us?', a: ['Would you like to come with us?'], why: "**would like to** + fe'l." },
    { k: 'choice', q: 'Sam: "Are you free on Sunday?" Which is a polite "no"?', opts: ["I'm afraid I'm busy. How about Monday?", 'No, I want not.', 'I am no.', 'Never!'], a: 0 },
    { k: 'fill', q: 'The film ___ at seven. (start)', a: ['starts'], uz: 'Film yettida boshlanadi.', why: "Jadval: Present Simple, **it** → starts." },
    { k: 'speak', say: "I'd love to! What time?", uz: 'Mamnuniyat bilan! Soat nechada?' },
  ],
  quiz: [
    { k: 'choice', q: 'What ___ you doing tomorrow?', opts: ['are', 'do', 'is', 'does'], a: 0 },
    { k: 'fill', q: "She ___ seeing the dentist at ten. (is)", a: ["'s", 'is'], why: "**she is seeing** — reja." },
    { k: 'order', uz: 'Shanba kuni bo\'shmisan?', words: ['Are', 'you', 'free', 'on', 'Saturday'], extra: ['Do', 'is'] },
    { k: 'translate', uz: "Kechirasiz, kela olmayman.", a: ["Sorry, I can't come.", "I'm afraid I can't come.", "Sorry, I can't.", "I'm sorry, I can't come.", "I'm sorry, I can't."], why: "Muloyim rad: *Sorry, I can't.*" },
    { k: 'tf', q: "*Would you like to come?* — bu taklif.", a: true },
    { k: 'fix', wrong: 'I meet my friend tonight at six.', a: ["I'm meeting my friend tonight at six.", 'I am meeting my friend tonight at six.'], why: "Aniq reja — **I'm meeting**." },
    { k: 'match', pairs: [['ticket', 'chipta'], ['popcorn', 'popkorn'], ['seat', "o'rindiq"], ['screen', 'ekran']] },
    { k: 'choice', q: '"Would you like to have dinner with us?" — ...', opts: ["I'd love to, thanks!", 'Yes, I like.', 'I am dinner.', 'No, I would not like.'], a: 0 },
  ],
  summary: [
    "Reja: **am / is / are + fe'l-ing** — *I'm meeting Aziz at six.*",
    "Taklif: **Would you like to…?** Qabul: **I'd love to!** Rad: **I'm afraid I can't.**",
    "Vaqt: **Let's meet at half past six. How about Sunday?**",
    "Yangi so'zlar: **plan, ticket, popcorn, seat, screen**.",
  ],
  homework: "Do'stingizga 3 ta xabar yozing: *Are you free on…? Would you like to…? Let's meet at…*",
};

export default lesson;
