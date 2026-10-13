import type { Lesson } from '../../../types';

// Mini lesson (grammar): invitations — accepting and declining politely.
const lesson: Lesson = {
  id: 'u7-l12',
  title: 'Invitations: accepting and declining',
  titleUz: "Takliflar: qabul qilish va muloyim rad etish",
  mini: true,
  kind: 'grammar',
  goal: "Taklifni **ingliz tilida odobli qabul qilasiz yoki rad etasiz**: *Would you like to…? Let's… Shall we…? Why don't we…?* — *I'd love to! / Sorry, I can't, but…*",
  slides: [
    {
      title: 'Taklif qilish: 4 ta usul',
      blocks: [
        { t: 'p', md: "Do'stingizni biror ishga chaqirmoqchimisiz? Mana to'rtta oson usul. Hammasidan keyin **to'g'ri fe'l** (to siz) keladi, faqat **Would you like** dan keyin **to + fe'l**:" },
        { t: 'table', head: ['Taklif', 'Misol', "Ma'nosi"], speak: [1], rows: [
          ['Would you like to…?', 'Would you like to come to my party?', 'Mening ziyofatimga kelasizmi?'],
          ["Let's…", "Let's play tennis on Sunday.", "Yakshanba kuni tennis o'ynaylik."],
          ['Shall we…?', 'Shall we have lunch together?', 'Birga tushlik qilamizmi?'],
          ["Why don't we…?", "Why don't we watch a film tonight?", "Bugun kechqurun film ko'rsak-chi?"],
        ] },
        { t: 'tip', tone: 'info', md: "**Shall we…?** — *We* bilan ishlatiladi: \"…qilamizmi?\" Keyin oddiy fe'l keladi: *Shall we go?*" },
        { t: 'check', ex: { k: 'choice', q: "Qaysi gap to'g'ri?", opts: ["Shall we to go home?", "Shall we go home?", "Shall we going home?", "Shall we goes home?"], a: 1, why: "**Shall we + fe'l** (to siz, -ing siz): *Shall we go home?*" } },
      ],
    },
    {
      title: 'Javob berish: ha yoki yo‘q',
      blocks: [
        { t: 'dialog', lines: [
          { who: 'Sam', en: "Would you like to come to the gym with me?", uz: "Men bilan sport zaliga borasanmi?" },
          { who: 'Kamila', en: "I'd love to, but I can't today. I'm working late.", uz: "Mamnuniyat bilan, lekin bugun bora olmayman. Kech ishlayman." },
          { who: 'Sam', en: "That's OK. Shall we go on Thursday?", uz: "Mayli. Payshanba kuni boramizmi?" },
          { who: 'Kamila', en: "Yes, Thursday is perfect. Thanks for asking!", uz: "Ha, payshanba juda yaxshi. Taklif uchun rahmat!" },
        ] },
        { t: 'table', head: ['Qabul qilish', 'Odobli rad etish'], speak: [0, 1], rows: [
          ["I'd love to!", "Sorry, I can't."],
          ['Good idea!', "I'd love to, but I'm busy."],
          ["Yes, let's!", "Sorry, I can't. Maybe another time?"],
        ] },
        { t: 'tip', tone: 'good', md: "Rad etsangiz: **1)** kechirim so'rang, **2)** qisqa sabab ayting, **3)** boshqa kunni taklif qiling: *Sorry, I can't. I'm working. How about Friday?*" },
        { t: 'check', ex: { k: 'choice', q: "Do'stingiz: *Why don't we go to the park?* Siz borishni xohlaysiz. Javob:", opts: ["Good idea!", "I can't stand.", "Yes, I'm afraid.", "No, thanks, I like."], a: 0, why: "Qabul qilish: **Good idea! / I'd love to! / Yes, let's!**" } },
        { t: 'check', ex: { k: 'fill', q: "Sorry, I ___ come. I'm working today.", a: ["can't", 'cannot'], uz: "Kechirasiz, kela olmayman. Bugun ishlayman.", why: "Rad etish: **I can't** + fe'l." } },
      ],
    },
    {
      title: "Ehtiyot bo'ling: tez-tez uchraydigan xatolar",
      blocks: [
        { t: 'compare', good: { title: "To'g'ri", items: ["Let's go to the cinema.", "Would you like to come?", "Sorry, I can't. Maybe another time?"] }, bad: { title: "Noto'g'ri", items: ["Let's to go to the cinema.", "Would you like come?", "No. I don't want."] } },
        { t: 'p', md: "Eslatma: **No.** yoki **I don't want** — qo'pol eshitiladi. Har doim **Sorry, I can't** + sabab deng." },
        { t: 'check', ex: { k: 'fix', wrong: "Let's to play football.", a: ["Let's play football."], why: "**Let's + fe'l** (to siz)." } },
      ],
    },
  ],
  words: [
    { en: 'accept', uz: 'qabul qilmoq', ipa: 'əkˈsept', pos: 'verb', ex: 'I accept your invitation.', exUz: 'Taklifingizni qabul qilaman.' },
    { en: 'decline', uz: 'rad etmoq', ipa: 'dɪˈklaɪn', pos: 'verb', ex: 'She declines politely.', exUz: 'U odob bilan rad etadi.' },
    { en: 'polite', uz: 'odobli', ipa: 'pəˈlaɪt', pos: 'adjective', ex: 'Please be polite to guests.', exUz: 'Iltimos, mehmonlarga odobli bo‘ling.' },
    { en: 'reason', uz: 'sabab', ipa: 'ˈriː.zən', pos: 'noun', ex: 'Give a reason when you say no.', exUz: "Yo'q desangiz, sabab ayting." },
    { en: 'perhaps', uz: 'balki', ipa: 'pəˈhæps', pos: 'adverb', ex: 'Perhaps we can meet on Friday.', exUz: 'Balki juma kuni uchrashamiz.' },
    { en: 'join', uz: "qo'shilmoq", ipa: 'dʒɔɪn', pos: 'verb', ex: 'Would you like to join us?', exUz: "Bizga qo'shilasizmi?" },
  ],
  practice: [
    { k: 'choice', q: "___ we have lunch together? — Yes, let's!", opts: ['Shall', 'Would', 'Do', 'Are'], a: 0, why: "Taklif: **Shall we…?**" },
    { k: 'fill', q: "Why don't we ___ to the park? (go)", a: ['go'], uz: "Parkka borsak-chi?", why: "**Why don't we + fe'l** (to siz)." },
    { k: 'order', uz: "Birga tushlik qilamizmi?", words: ['Shall', 'we', 'have', 'lunch', 'together'], extra: ['to', 'having'] },
    { k: 'translate', uz: "Men bilan kinoga borasanmi?", a: ['Would you like to go to the cinema with me?', 'Would you like to come to the cinema with me?'], why: "**Would you like to…?**" },
    { k: 'match', pairs: [['accept', 'qabul qilmoq'], ['decline', 'rad etmoq'], ['polite', 'odobli'], ['reason', 'sabab'], ['join', "qo'shilmoq"]] },
    { k: 'tf', q: "*I'd love to!* — taklifni rad etish.", a: false, why: "**I'd love to!** — taklifni quvonch bilan qabul qilish." },
    { k: 'listen', say: "Shall we go on Thursday?", opts: ['Shall we go on Thursday?', 'Shall we go on Tuesday?', 'Should we go on Thursday?', 'Will we go on Thursday?'], a: 0 },
    { k: 'dictation', say: "Sorry, I can't. Maybe another time?", a: ["Sorry, I can't. Maybe another time?", 'Sorry, I cannot. Maybe another time?'] },
    { k: 'fix', wrong: 'Would you like come with us?', a: ['Would you like to come with us?'], why: "**Would you like to** + fe'l." },
    { k: 'choice', q: 'Which is the most polite way to say no?', opts: ["Sorry, I can't. I'm working. How about Friday?", 'No.', "I don't want.", 'Never!'], a: 0, why: "Kechirim + sabab + boshqa kun." },
    { k: 'fill', q: "I'd love ___, but I'm busy.", a: ['to'], uz: "Mamnuniyat bilan, lekin bandman.", why: "**I'd love to, but…**" },
    { k: 'speak', say: "I'd love to, but I can't today.", uz: "Mamnuniyat bilan, lekin bugun bora olmayman." },
  ],
  quiz: [
    { k: 'choice', q: "Let's ___ a taxi.", opts: ['take', 'to take', 'taking', 'takes'], a: 0 },
    { k: 'fill', q: "Shall we ___ at six? (meet)", a: ['meet'], uz: "Soat oltida uchrashamizmi?", why: "**Shall we + fe'l.**" },
    { k: 'order', uz: "Film ko'rsak-chi?", words: ["Why", "don't", "we", "watch", "a", "film"], extra: ['to', 'watching'] },
    { k: 'translate', uz: "Kechirasiz, bora olmayman.", a: ["Sorry, I can't come.", "Sorry, I can't go.", "I'm sorry, I can't come.", "I'm sorry, I can't go."], why: "Odobli rad: *Sorry, I can't.*" },
    { k: 'tf', q: "*Shall we go home?* — bu taklif.", a: true },
    { k: 'fix', wrong: "Why don't we to go home?", a: ["Why don't we go home?"], why: "**Why don't we + fe'l** (to siz)." },
    { k: 'match', pairs: [['accept', 'qabul qilmoq'], ['decline', 'rad etmoq'], ['reason', 'sabab'], ['perhaps', 'balki']] },
    { k: 'choice', q: "\"Would you like to join us for dinner?\" — ...", opts: ["I'd love to, thanks!", 'Yes, I like.', 'I join dinner.', "No, I don't want."], a: 0 },
  ],
  summary: [
    "Taklif: **Would you like to…? / Let's… / Shall we…? / Why don't we…?**",
    "Qabul: **I'd love to! Good idea! Yes, let's!**",
    "Rad: **Sorry, I can't.** + sabab + **Maybe another time?**",
    "Yangi so'zlar: **accept, decline, polite, reason, perhaps, join**.",
  ],
  homework: "Do'stingizga 3 ta taklif yozing (*Let's… / Shall we…? / Why don't we…?*) va bittasini odob bilan rad eting.",
};

export default lesson;
