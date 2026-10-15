import type { Lesson } from '../../../types';

// Mini lesson (situation): disagreeing politely and finding a compromise. Uses opinion phrases (l1), linkers (l12) and first conditional (l3) as revision.
const lesson: Lesson = {
  id: 'u23-l10',
  title: 'Disagreeing politely and finding a compromise',
  titleUz: "Xushmuomala e'tiroz bildirish va kelishuvga erishish",
  mini: true,
  kind: 'situation',
  goal: "Boshqa odamning fikriga **muloyim e'tiroz** bildirasiz (*I see your point, but…*, *I'm afraid I don't agree*) va **kelishuv** taklif qilasiz (*Why don't we…?*, *Let's meet halfway*, *If you…, I will…*).",
  slides: [
    {
      title: "Dialog: ofis uchun yangi qoida",
      blocks: [
        { t: 'p', md: "Nilufar va Karim bir ofisda ishlaydi. Karim jamoa uchrashuvini har kuni ertalab o'tkazmoqchi, Nilufar esa bunga qarshi. Qarang, ular **janjallashmasdan** kelishuvga qanday erishadi." },
        { t: 'dialog', lines: [
          { who: 'Karim', en: "I think we should have a team meeting every morning. It would keep everyone informed.", uz: "Menimcha, har kuni ertalab jamoa yig'ilishi o'tkazishimiz kerak. Bu hammani xabardor qiladi." },
          { who: 'Nilufar', en: "I see your point, Karim, but I'm afraid I don't agree. Every day is too much. People lose time.", uz: "Fikringizni tushundim, Karim, lekin afsuski rozi emasman. Har kuni juda ko'p. Odamlar vaqtini yo'qotadi." },
          { who: 'Karim', en: "I understand your concern. However, without meetings we often repeat the same work.", uz: "Xavotiringizni tushunaman. Biroq yig'ilishlarsiz ko'pincha bir ishni takrorlaymiz." },
          { who: 'Nilufar', en: "That's true. Why don't we meet twice a week instead?", uz: "To'g'ri. Buning o'rniga haftasiga ikki marta yig'ilsak-chi?" },
          { who: 'Karim', en: "Hmm. Two meetings are not enough for me, but three could work. How about Monday, Wednesday and Friday?", uz: "Hmm. Menga ikkitasi yetmaydi, lekin uchtasi to'g'ri kelishi mumkin. Dushanba, chorshanba va juma bo'lsa-chi?" },
          { who: 'Nilufar', en: "Let's meet halfway. Three meetings, but each one only fifteen minutes. If we keep them short, I will agree.", uz: "O'rtasidan kelishaylik. Uchta yig'ilish, lekin har biri faqat o'n besh daqiqa. Qisqa qilsak, men rozi bo'laman." },
          { who: 'Karim', en: "That sounds fair. I'm happy with that.", uz: "Bu adolatli eshitiladi. Men rozi." },
        ] },
        { t: 'check', ex: { k: 'choice', q: "How many meetings do they agree on?", opts: ['Three a week', 'One a day', 'Two a week', 'One a month'], a: 0, why: "*Three meetings, but each one only fifteen minutes.*" } },
        { t: 'check', ex: { k: 'tf', q: "Nilufar agrees with Karim at the start.", a: false, why: "*I'm afraid I don't agree.*" } },
      ],
    },
    {
      title: "Muloyim e'tiroz",
      blocks: [
        { t: 'p', md: "Inglizchada to'g'ridan-to'g'ri *No, you are wrong* deyish qo'pol eshitiladi. Avval **tushunganingizni** ko'rsating, keyin **e'tiroz** bildiring." },
        { t: 'table', head: ['Daraja', 'Ibora'], speak: [1], rows: [
          ['Yumshoq', "I see your point, but I think…"],
          ['Yumshoq', "That's interesting, but I'm not sure that's right."],
          ["O'rtacha", "I'm afraid I don't agree."],
          ["O'rtacha", "I understand your concern. However, …"],
          ["Qisman rozi", "I agree up to a point, but…"],
          ["Qisman rozi", "You may be right, but I would say…"],
        ] },
        { t: 'tip', tone: 'warn', md: "**I'm afraid** bu yerda \"qo'rqaman\" emas, \"afsuski\" degani: *I'm afraid I can't agree.* Muloyim e'tirozning belgisi. **I don't agree with you at all!** esa juda keskin eshitiladi." },
        { t: 'compare',
          good: { title: "Muloyim", items: ["I see your point, but I'm not sure.", "I'm afraid I don't agree.", "That's interesting, but I think differently."] },
          bad: { title: "Keskin", items: ["You are completely wrong.", "That's a stupid idea.", "No. I don't want to listen."] } },
        { t: 'check', ex: { k: 'choice', q: "Qaysi ibora eng muloyim?", opts: ["I see your point, but I'm not sure.", "You are wrong.", "That's stupid.", "No way."], a: 0, why: "Avval tushunish, keyin e'tiroz: **I see your point, but…**" } },
      ],
    },
    {
      title: "Kelishuvga erishish",
      blocks: [
        { t: 'p', md: "Kelishuv (compromise) — ikkala tomon ham biroz yon berishi. Inglizchada bunday takliflar odatda **Why don't we…? / How about…? / If …, I will…** bilan boshlanadi." },
        { t: 'examples', items: [
          { en: "Why don't we meet halfway?", uz: "O'rtasidan kelishsak-chi?", note: "**Why don't we + fe'l** — taklif." },
          { en: "How about splitting the cost?", uz: "Xarajatni bo'lishsak-chi?", note: "**How about + -ing**." },
          { en: "If you choose the place, I will choose the date.", uz: "Joyni siz tanlasangiz, sanani men tanlayman.", note: "**If** + hozirgi zamon, **will** + fe'l." },
          { en: "That sounds fair. I'm happy with that.", uz: "Bu adolatli eshitiladi. Men rozi.", note: "Kelishuvni qabul qilish." },
        ] },
        { t: 'tip', tone: 'good', md: "Kelishuv tuzilmasi: **1) tushundim, 2) rozi emasman (sabab bilan), 3) variant taklif qilaman, 4) kelishuvni tasdiqlayman.**" },
        { t: 'check', ex: { k: 'fill', q: "If you ___ the dishes, I will cook dinner.", a: ['wash', 'do'], uz: "Idish-tovoqni siz yuvsangiz, kechki ovqatni men pishiraman.", why: "**If** dan keyin hozirgi zamon: *wash / do*." } },
        { t: 'check', ex: { k: 'order', uz: "Xarajatni bo'lishsak-chi?", words: ['How', 'about', 'splitting', 'the', 'cost?'], extra: ['split', 'to'], why: "**How about + -ing**." } },
      ],
    },
  ],
  words: [
    { en: 'compromise', uz: "kelishuv, yon berish", ipa: 'ˈkɒm.prə.maɪz', pos: 'noun', ex: 'We found a compromise in the end.', exUz: 'Oxirida kelishuvga erishdik.' },
    { en: 'disagree', uz: "rozi bo'lmaslik", ipa: 'ˌdɪs.əˈɡriː', pos: 'verb', ex: 'I disagree with you about the price.', exUz: "Narx haqida sizga qo'shilmayman." },
    { en: 'fair', uz: 'adolatli', ipa: 'feər', pos: 'adj', ex: 'It is not fair to ask her to pay everything.', exUz: "Hammasini uning to'lashini so'rash adolatsizlik." },
    { en: 'persuade', uz: "ishontirmoq", ipa: 'pəˈsweɪd', pos: 'verb', ex: 'She persuaded me to join the club.', exUz: "U meni klubga qo'shilishga ko'ndirdi." },
    { en: 'alternative', uz: 'muqobil variant', ipa: 'ɔːlˈtɜː.nə.tɪv', pos: 'noun', ex: 'Is there an alternative to this plan?', exUz: "Bu rejaga muqobil bormi?" },
  ],
  practice: [
    { k: 'match', pairs: [['compromise', 'kelishuv'], ['disagree', "rozi bo'lmaslik"], ['fair', 'adolatli'], ['persuade', 'ishontirmoq'], ['alternative', 'muqobil variant']] },
    { k: 'listen', say: "I see your point, but I'm afraid I don't agree.", opts: ["I see your point, but I'm afraid I don't agree.", "I see your point, and I completely agree.", "I'm afraid I can't see your point.", "I see you, but I don't know."], a: 0 },
    { k: 'choice', q: "Do'stingiz rejasi sizga yoqmadi. Muloyim javob:", opts: ["I see your point, but I'm not sure.", "That is a terrible plan.", "You never listen.", "I won't do it."], a: 0, why: "Avval tushunish, keyin e'tiroz." },
    { k: 'choice', q: "Kelishuv taklif qilasiz:", opts: ["Why don't we meet halfway?", "Do it my way.", "I won't change.", "It is your problem."], a: 0, why: "Taklif: **Why don't we…?**" },
    { k: 'fill', q: "I agree up to a ___, but I have a concern.", a: ['point'], why: "**up to a point** — ma'lum darajada." },
    { k: 'fill', q: "If you finish the report today, I ___ help you tomorrow.", a: ['will', "'ll"], uz: "Hisobotni bugun tugatsangiz, ertaga sizga yordam beraman.", why: "**If** + hozirgi, **will** + fe'l." },
    { k: 'order', uz: "Men bu bilan roziman.", words: ["I'm", 'happy', 'with', 'that.'], extra: ['for', 'glad'], alt: [['I', 'am', 'happy', 'with', 'that.']], why: "**I'm happy with that.**" },
    { k: 'order', uz: "Afsuski, men rozi emasman.", words: ["I'm", 'afraid', 'I', "don't", 'agree.'], extra: ['scared', 'am'], alt: [['I', 'am', 'afraid', 'I', "don't", 'agree.'], ["I'm", 'afraid', 'I', 'do', 'not', 'agree.']], why: "**I'm afraid I don't agree.**" },
    { k: 'fix', wrong: "No, you are wrong. I disagree you.", a: ["I'm afraid I disagree with you.", "I'm afraid I don't agree with you.", "I see your point, but I disagree with you."], why: "**disagree with** somebody; va muloyim bo'ling." },
    { k: 'translate', uz: "Fikringizni tushundim, lekin rozi emasman.", a: ["I see your point, but I don't agree.", "I see your point, but I do not agree.", "I understand your point, but I don't agree.", "I understand your point, but I do not agree."], why: "Muloyim e'tiroz." },
    { k: 'dictation', say: "That sounds fair. I'm happy with that.", a: ["That sounds fair. I'm happy with that.", "That sounds fair. I am happy with that."], uz: "Bu adolatli eshitiladi. Men rozi." },
    { k: 'speak', say: "Let's meet halfway. I'm happy with that.", uz: "O'rtasidan kelishaylik. Men rozi." },
    { k: 'speak', say: "I understand your concern, but I'm afraid I don't agree.", uz: "Xavotiringizni tushunaman, lekin afsuski rozi emasman." },
  ],
  quiz: [
    { k: 'choice', q: "\"I'm afraid I don't agree\" — bu:", opts: ["Muloyim e'tiroz", "Qo'rquv", "Keskin rad etish", "Kelishuv"], a: 0, why: "**I'm afraid** — afsuski (muloyimlik)." },
    { k: 'choice', q: "Qaysi gap kelishuvni taklif qiladi?", opts: ["How about splitting the cost?", "I won't pay anything.", "You must pay everything.", "That's not my problem."], a: 0, why: "**How about + -ing** — taklif." },
    { k: 'fill', q: "I disagree ___ you about the price.", a: ['with'], why: "**disagree with** somebody." },
    { k: 'fill', q: "That sounds ___ . I accept your idea.", a: ['fair'], why: "**That sounds fair.**" },
    { k: 'order', uz: "Xavotiringizni tushunaman.", words: ['I', 'understand', 'your', 'concern.'], extra: ['understands', 'my'], why: "**I understand your concern.**" },
    { k: 'tf', q: "*You are completely wrong* — munozarada eng muloyim ibora.", a: false, why: "Bu keskin; muloyim ibora: *I see your point, but…*" },
    { k: 'translate', uz: "Joyni siz tanlasangiz, vaqtni men tanlayman.", a: ["If you choose the place, I will choose the time.", "If you choose the place, I'll choose the time."], why: "**If** + hozirgi, **will** + fe'l." },
  ],
  summary: [
    "Muloyim e'tiroz: **I see your point, but…**, **I'm afraid I don't agree**, **I agree up to a point, but…**",
    "Kelishuv: **Why don't we…? How about + -ing? Let's meet halfway.** Shart: **If you…, I will…**",
    "Qabul qilish: **That sounds fair. I'm happy with that.** **disagree with** somebody.",
    "Yangi so'zlar: **compromise, disagree, fair, persuade, alternative**.",
  ],
  homework: "Do'stingiz bilan kelishmovchilik bo'lgan bir vaziyatni tasavvur qiling (masalan, dam olish joyi). 6 qatorli dialog yozing: e'tiroz, tushuntirish, kelishuv taklifi, kelishuvni qabul qilish.",
};

export default lesson;
