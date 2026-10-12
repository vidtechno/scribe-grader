import type { Lesson } from '../../../types';

// Mini lesson (situation): weekend plans. Recycles plan, trip, tomorrow, maybe, promise, decide.
const lesson: Lesson = {
  id: 'u5-l10',
  title: 'Plans for the weekend',
  titleUz: 'Dam olish kuni rejalari: going to, will',
  mini: true,
  goal: "Dam olish kuni rejalaringiz haqida gapirasiz va joyida **qaror qabul qilasiz**: *I'm going to visit my cousin. — OK, I'll come with you!* **be going to** (reja) va **will** (qaror, va'da) ni farqlaysiz.",
  slides: [
    {
      title: 'Vaziyat: dam olish kuni rejalari',
      blocks: [
        { t: 'p', md: "**Oldindan qilingan reja** — **be going to**. **Hozir qabul qilingan qaror** yoki **va'da** — **will** (*I'll…*)." },
        { t: 'dialog', lines: [
          { who: 'Ali', en: 'What are you going to do at the weekend?', uz: "Dam olish kuni nima qilmoqchisan?" },
          { who: 'Zara', en: "I'm going to visit my cousin. We're going to have a picnic.", uz: "Amakivachchamnikiga boraman. Piknik qilmoqchimiz." },
          { who: 'Ali', en: 'Nice! Will the weather be good?', uz: "Zo'r! Ob-havo yaxshi bo'larmikan?" },
          { who: 'Zara', en: "I think it will be sunny. Do you want to come?", uz: "Menimcha, quyoshli bo'ladi. Sen ham borasanmi?" },
          { who: 'Ali', en: "Hmm… OK, I'll come with you! I'll bring some bread.", uz: "Hmm… xo'p, men ham boraman! Non olib kelaman." },
          { who: 'Zara', en: "Great! I promise you'll like it.", uz: "Zo'r! Va'da beraman, senga yoqadi." },
        ] },
        { t: 'check', ex: { k: 'choice', q: 'Ali decides now: "OK, I ___ come with you!"', opts: ["'m going to", "'ll", 'am', 'did'], a: 1, why: "Gap paytida qabul qilingan qaror — **will** ('ll)." } },
      ],
    },
    {
      title: "Reja iboralari",
      blocks: [
        { t: 'table', head: ['Inglizcha', "Qachon aytiladi"], speak: [0], rows: [
          ['What are you going to do at the weekend?', "Rejani so'raysiz"],
          ["I'm going to relax at home.", 'Rejangizni aytasiz'],
          ["We're going to swim in the river.", "Birgalikdagi rejani aytasiz"],
          ["I'll come with you.", 'Joyida qaror qilasiz'],
          ["I'll call you tomorrow. I promise.", "Va'da berasiz"],
          ["I think it will rain.", 'Taxmin qilasiz'],
        ] },
        { t: 'tip', tone: 'info', md: "**going to** — *men allaqachon rejalagan edim*. **will** — *hozir qaror qildim* yoki *va'da beraman*. Savol: **Will you…?** — iltimos yoki taklif." },
        { t: 'check', ex: { k: 'fill', q: "I ___ going to relax at home on Sunday.", a: ['am', "'m"], uz: 'Yakshanba kuni uyda dam olmoqchiman.', why: "**I** bilan — **am** going to." } },
      ],
    },
    {
      title: "Ehtiyot bo'ling: tez-tez uchraydigan xatolar",
      blocks: [
        { t: 'compare', good: { title: "To'g'ri", items: ["I'll help you.", "She's going to swim.", "I won't be late."] }, bad: { title: "Noto'g'ri", items: ["I'll to help you.", 'She going to swim.', "I won't to be late."] } },
        { t: 'p', md: "Eslatma: **will** dan keyin **to** yo'q va fe'l oddiy shaklda (*I'll help*). **going to** da esa **be** (am / is / are) kerak: *She **is** going to swim.*" },
        { t: 'check', ex: { k: 'choice', q: '"Shoshiling, kechikamiz!" — "Don\'t worry. I ___ late."', opts: ["won't be", "don't be", "not will be", "am not will"], a: 0, why: "Va'da: **won't** (will not) + oddiy fe'l." } },
      ],
    },
  ],
  words: [
    { en: 'picnic', uz: 'piknik', ipa: 'ˈpɪk.nɪk', pos: 'noun', ex: 'We are going to have a picnic.', exUz: 'Biz piknik qilmoqchimiz.' },
    { en: 'relax', uz: 'dam olmoq', ipa: 'rɪˈlæks', pos: 'verb', ex: 'I want to relax on Sunday.', exUz: 'Yakshanba kuni dam olgim keladi.' },
    { en: 'swim', uz: 'suzmoq', ipa: 'swɪm', pos: 'verb', ex: 'We are going to swim in the river.', exUz: 'Biz daryoda suzmoqchimiz.' },
    { en: 'cousin', uz: 'amakivachcha, xolavachcha', ipa: 'ˈkʌz.ən', pos: 'noun', ex: 'My cousin lives in Samarkand.', exUz: 'Amakivachcham Samarqandda yashaydi.' },
  ],
  practice: [
    { k: 'choice', q: 'We ___ going to have a picnic.', opts: ['is', 'are', 'will', 'do'], a: 1, why: "**we** → **are** going to." },
    { k: 'fill', q: "It's cold. I ___ close the window.", a: ["'ll", 'will', 'll'], uz: 'Sovuq. Derazani yopaman.', why: "Joyida qaror — **will**." },
    { k: 'order', uz: 'Dam olish kuni nima qilmoqchisan?', words: ['What', 'are', 'you', 'going', 'to', 'do', 'at', 'the', 'weekend'], extra: ['will'] },
    { k: 'translate', uz: "Men sen bilan boraman.", a: ["I'll come with you.", 'I will come with you.', "I'll go with you.", 'I will go with you.'] },
    { k: 'match', pairs: [['picnic', 'piknik'], ['relax', 'dam olmoq'], ['swim', 'suzmoq'], ['cousin', 'amakivachcha'], ['promise', "va'da"]] },
    { k: 'tf', q: "*She going to swim.* — gap to'g'ri.", a: false, why: "To'g'risi: *She **is** going to swim.*" },
    { k: 'listen', say: "I'm going to relax at home.", opts: ["I'm going to relax at home.", "I'll relax at home.", "I was at home.", "I'm going to work at home."], a: 0 },
    { k: 'dictation', say: "I'll call you tomorrow.", a: ["I'll call you tomorrow.", 'I will call you tomorrow.'] },
    { k: 'fix', wrong: "I'll to help you.", a: ["I'll help you.", 'I will help you.'], why: "**will** dan keyin **to** yo'q." },
    { k: 'fill', q: 'I think it ___ rain tomorrow.', a: ['will', "'ll"], uz: 'Menimcha, ertaga yomg\'ir yog\'adi.', why: "Taxmin — **will**." },
    { k: 'speak', say: "We're going to have a picnic.", uz: 'Biz piknik qilmoqchimiz.' },
  ],
  quiz: [
    { k: 'choice', q: 'He ___ going to visit his cousin.', opts: ['am', 'is', 'are', 'will'], a: 1 },
    { k: 'fill', q: "I promise I ___ be late. (negative)", a: ["won't", 'will not'], why: "Va'da — **won't**." },
    { k: 'order', uz: "Biz daryoda suzmoqchimiz.", words: ["We're", 'going', 'to', 'swim', 'in', 'the', 'river'], extra: ['will'], alt: [['We', 'are', 'going', 'to', 'swim', 'in', 'the', 'river']] },
    { k: 'translate', uz: "Ertaga senga qo'ng'iroq qilaman.", a: ["I'll call you tomorrow.", 'I will call you tomorrow.', "I'm going to call you tomorrow."] },
    { k: 'tf', q: "*I'll help you* — joyida qilingan taklif.", a: true },
    { k: 'fix', wrong: 'We going to relax on Sunday.', a: ["We're going to relax on Sunday.", 'We are going to relax on Sunday.'], why: "**are** kerak." },
    { k: 'match', pairs: [['plan', 'reja'], ['trip', 'sayohat'], ['maybe', 'balki'], ['soon', 'tez orada']] },
    { k: 'choice', q: 'Do you want tea or coffee? — ...', opts: ["I'll have tea, please.", "I'm having tea going.", 'I will to have tea.', 'I have going tea.'], a: 0 },
  ],
  summary: [
    "**be going to** — oldindan reja: *I'm going to visit my cousin.*",
    "**will** — joyida qaror, va'da, taxmin: *I'll come. I promise I won't be late.*",
    "**will** dan keyin **to** yo'q; **going to** da **am / is / are** kerak.",
  ],
  homework: "Dam olish kuniga 3 ta reja yozing (*I'm going to…*) va 1 ta va'da (*I'll… / I won't…*).",
};

export default lesson;
