import type { Lesson } from '../../../types';

// Mini lesson (situation): Present Simple at a café. Recycles tea, coffee, sugar, like, need, want, drink, live.
const lesson: Lesson = {
  id: 'u3-l9',
  title: 'At the café: Present Simple in real life',
  titleUz: 'Kafeda: Present Simple hayotda',
  mini: true,
  goal: "Kafeda **buyurtma berasiz** va savollarga javob qaytarasiz: *Do you want sugar? — Yes, please. / No, thanks.* Present Simple'ni (do / does / don't / doesn't) real vaziyatda ishlatasiz.",
  slides: [
    {
      title: 'Vaziyat: kafeda',
      blocks: [
        { t: 'p', md: "Kafeda ofitsiant sizga **Do you…?** deb savol beradi. Siz **I like…**, **I need…**, **I don't…** deb javob berasiz. Bu — o'tgan darslardagi qoidalarning aynan o'zi." },
        { t: 'dialog', lines: [
          { who: 'Waiter', en: 'Hello! Do you want coffee or tea?', uz: 'Salom! Kofe istaysizmi yoki choy?' },
          { who: 'Anna', en: 'I like tea. Does the tea have sugar?', uz: "Men choyni yoqtiraman. Choyda shakar bormi?" },
          { who: 'Waiter', en: "No, it doesn't. Do you want sugar?", uz: "Yo'q, shakar yo'q. Shakar istaysizmi?" },
          { who: 'Anna', en: "Yes, please. And my friend drinks coffee. He doesn't like sugar.", uz: "Ha, iltimos. Do'stim kofe ichadi. U shakarni yoqtirmaydi." },
          { who: 'Waiter', en: 'OK! One tea and one coffee.', uz: 'Xo\'p! Bitta choy va bitta kofe.' },
          { who: 'Anna', en: 'Thank you. Do I pay now?', uz: "Rahmat. Hozir to'layymi?" },
          { who: 'Waiter', en: 'No, you pay at the end.', uz: "Yo'q, oxirida to'laysiz." },
        ] },
        { t: 'check', ex: { k: 'choice', q: 'Anna: "My friend ___ coffee."', opts: ['drink', 'drinks', 'is drink', 'drinking'], a: 1, why: "*my friend* = he → fe'lga **-s**: drink**s**." } },
      ],
    },
    {
      title: "Kafe iboralari",
      blocks: [
        { t: 'table', head: ['Inglizcha', "Qachon aytiladi"], speak: [0], rows: [
          ['Do you want sugar?', 'Ofitsiant sizdan so\'raydi'],
          ['Does it have milk?', 'Siz taom haqida so\'raysiz'],
          ["I need a menu, please.", 'Menyu so\'raysiz'],
          ["I don't like coffee.", 'Yoqtirmasligingizni aytasiz'],
          ["He doesn't drink tea.", "Do'stingiz haqida aytasiz"],
          ['Where do I pay?', "To'lov joyini so'raysiz"],
        ] },
        { t: 'tip', tone: 'good', md: "Muloyim bo'lish uchun **please** va **thanks** qo'shing: *Yes, please. / No, thanks.* Faqat *Yes* yoki *No* deyish quruq eshitiladi." },
        { t: 'check', ex: { k: 'fill', q: 'Does the soup ___ meat?', a: ['have'], uz: "Sho'rvada go'sht bormi?", why: "**Does** dan keyin fe'l oddiy shaklda: **have** (has emas)." } },
      ],
    },
    {
      title: 'Ehtiyot bo\'ling: tez-tez uchraydigan xatolar',
      blocks: [
        { t: 'compare', good: { title: "To'g'ri", items: ['Does it have sugar?', "He doesn't like tea.", 'Do you want coffee?'] }, bad: { title: "Noto'g'ri", items: ['Does it has sugar?', "He don't like tea.", 'Do you wants coffee?'] } },
        { t: 'p', md: "Eslatma: **Does / doesn't** bor joyda fe'lga **-s** qo'yilmaydi. **Do / don't** — I, you, we, they bilan." },
        { t: 'check', ex: { k: 'choice', q: "To'g'ri javobni tanlang: *Do you want sugar?*", opts: ['Yes, he does.', 'Yes, please.', 'Yes, I am.', 'Yes, I does.'], a: 1, why: "Kafeda eng tabiiy javob: **Yes, please.** yoki **No, thanks.**" } },
      ],
    },
  ],
  words: [
    { en: 'order', uz: 'buyurtma bermoq', ipa: 'ˈɔː.dər', pos: 'verb', ex: 'I order tea and bread.', exUz: 'Men choy va non buyurtma beraman.' },
    { en: 'menu', uz: 'menyu', ipa: 'ˈmen.juː', pos: 'noun', ex: 'I need the menu, please.', exUz: 'Menga menyu kerak, iltimos.' },
    { en: 'bill', uz: 'hisob (to\'lov cheki)', ipa: 'bɪl', pos: 'noun', ex: 'The bill is ten dollars.', exUz: "Hisob o'n dollar." },
    { en: 'pay', uz: "to'lamoq", ipa: 'peɪ', pos: 'verb', ex: 'I pay at the end.', exUz: "Men oxirida to'layman." },
    { en: 'cup', uz: 'piyola, finjon', ipa: 'kʌp', pos: 'noun', ex: 'I want a cup of tea.', exUz: 'Men bir piyola choy istayman.' },
  ],
  practice: [
    { k: 'choice', q: '___ you want tea or coffee?', opts: ['Do', 'Does', 'Are', 'Is'], a: 0, why: "**you** bilan — **Do**." },
    { k: 'fill', q: 'My brother ___ coffee. (drink)', a: ['drinks'], uz: "Akam kofe ichadi.", why: "*my brother* = he → **drinks**." },
    { k: 'order', uz: "Menga menyu kerak.", words: ['I', 'need', 'the', 'menu'], extra: ['needs', 'am'] },
    { k: 'translate', uz: "U shakarni yoqtirmaydi.", a: ["He doesn't like sugar.", "He does not like sugar.", "She doesn't like sugar.", "She does not like sugar."], why: "**doesn't** + fe'l (s'siz)." },
    { k: 'match', pairs: [['order', 'buyurtma bermoq'], ['menu', 'menyu'], ['bill', 'hisob'], ['pay', "to'lamoq"], ['sugar', 'shakar']] },
    { k: 'tf', q: "*Does he drinks tea?* — gap to'g'ri.", a: false, why: "To'g'risi: *Does he **drink** tea?*" },
    { k: 'listen', say: 'Do you want sugar?', opts: ['Do you want sugar?', 'Does she want sugar?', 'Do you need sugar?', 'Do you like sugar?'], a: 0 },
    { k: 'dictation', say: "I don't like coffee.", a: ["I don't like coffee.", 'I do not like coffee.'] },
    { k: 'fix', wrong: 'Does it has sugar?', a: ['Does it have sugar?'], why: "**Does** dan keyin **have**." },
    { k: 'fill', q: 'Where ___ I pay?', a: ['do'], uz: "Qayerda to'layman?", why: "**I** bilan — **do**." },
    { k: 'speak', say: 'I need the menu, please.', uz: 'Menga menyu kerak, iltimos.' },
  ],
  quiz: [
    { k: 'choice', q: '___ the soup have meat?', opts: ['Do', 'Does', 'Is', 'Are'], a: 1 },
    { k: 'fill', q: "She ___ like sugar. (negative)", a: ["doesn't", 'does not'], why: "**she** → doesn't." },
    { k: 'order', uz: "Siz shakar istaysizmi?", words: ['Do', 'you', 'want', 'sugar'], extra: ['Does', 'wants'] },
    { k: 'translate', uz: "Men choy buyurtma beraman.", a: ['I order tea.', 'I order a tea.'] },
    { k: 'tf', q: "*No, thanks.* — shakar taklifini muloyim rad etish.", a: true },
    { k: 'fix', wrong: "He don't drink coffee.", a: ["He doesn't drink coffee.", 'He does not drink coffee.'], why: "**he** bilan — doesn't." },
    { k: 'match', pairs: [['tea', 'choy'], ['coffee', 'kofe'], ['menu', 'menyu'], ['bill', 'hisob']] },
    { k: 'choice', q: 'Do you want sugar? — ...', opts: ['Yes, please.', 'Yes, I wants.', 'Yes, he does.', 'I am yes.'], a: 0 },
  ],
  summary: [
    "Kafeda savol **Do you want…?**, javob **Yes, please. / No, thanks.**",
    "**He / she / it** bilan: **Does… ?** va **doesn't**, fe'l oddiy shaklda: *Does it have sugar?*",
    "Yangi so'zlar: **order, menu, bill, pay** — gaplarda ishlating.",
  ],
  homework: "Bugun kafe yoki choyxonada 3 ta gapni inglizcha aytib ko'ring: *I need…, Do you have…?, I don't like…*",
};

export default lesson;
