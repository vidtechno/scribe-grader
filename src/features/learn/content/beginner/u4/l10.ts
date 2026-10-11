import type { Lesson } from '../../../types';

// Mini lesson (situation): at the shop. Recycles much/many, how much/how many, a kilo of, can I...?, prices.
const lesson: Lesson = {
  id: 'u4-l10',
  title: 'At the shop: much, many, can I…?',
  titleUz: "Do'konda: much, many, can",
  mini: true,
  goal: "Do'konda **kerakli narsani so'raysiz va to'laysiz**: *Can I have some bread, please? How much is it?* **Much / many**, **how much / how many** va **Can I…?** ni ishlatasiz.",
  slides: [
    {
      title: "Vaziyat: do'konda",
      blocks: [
        { t: 'p', md: "Do'konda ikki narsa kerak: **iltimos qilish** (*Can I have…?*) va **miqdor/narx so'rash** (*How much…? How many…?*)." },
        { t: 'dialog', lines: [
          { who: 'Seller', en: 'Hello! Can I help you?', uz: 'Salom! Yordam beraymi?' },
          { who: 'Aziz', en: 'Yes, please. Can I have a kilo of rice and some cheese?', uz: "Ha, iltimos. Bir kilo guruch va ozgina pishloq bersangiz bo'ladimi?" },
          { who: 'Seller', en: 'Sure. How much cheese do you want?', uz: "Albatta. Qancha pishloq kerak?" },
          { who: 'Aziz', en: 'Just a small piece. And I need six eggs. How much is it?', uz: "Kichik bir bo'lak. Va oltita tuxum kerak. Qancha bo'ladi?" },
          { who: 'Seller', en: 'It is ten dollars. Do you want a bag?', uz: "O'n dollar. Paket kerakmi?" },
          { who: 'Aziz', en: 'No, thanks. Can I pay by card?', uz: "Yo'q, rahmat. Karta bilan to'lasam bo'ladimi?" },
          { who: 'Seller', en: "Yes, you can. Thank you! Have a nice day.", uz: "Ha, bo'ladi. Rahmat! Yaxshi kun tilayman." },
        ] },
        { t: 'check', ex: { k: 'choice', q: '___ eggs do you need?', opts: ['How much', 'How many', 'How', 'How old'], a: 1, why: "*eggs* — sanaladi → **How many**." } },
      ],
    },
    {
      title: "Do'kon iboralari",
      blocks: [
        { t: 'table', head: ['Inglizcha', 'Qachon aytiladi'], speak: [0, 1], rows: [
          ['Can I have some bread, please?', "Iltimos qilasiz"],
          ['How much is it?', 'Narxni so\'raysiz'],
          ['How many do you want?', "Sanaladigan narsa miqdorini so'raydi"],
          ["I don't need much milk.", "Sanalmaydigan narsa, inkor"],
          ["We haven't got many apples.", "Sanaladigan narsa, inkor"],
          ['Can I pay by card?', "To'lov usulini so'raysiz"],
        ] },
        { t: 'tip', tone: 'info', md: "**many** + sanaladigan (*apples*), **much** + sanalmaydigan (*milk*). Odatda **much/many** savol va inkorda ishlatiladi: *How much milk? Not many eggs.*" },
        { t: 'check', ex: { k: 'fill', q: "How ___ milk do you want?", a: ['much'], uz: 'Qancha sut kerak?', why: "*milk* sanalmaydi → **much**." } },
      ],
    },
    {
      title: "Ehtiyot bo'ling: tez-tez uchraydigan xatolar",
      blocks: [
        { t: 'compare', good: { title: "To'g'ri", items: ['How much rice?', 'How many eggs?', 'Can I have some tea?'] }, bad: { title: "Noto'g'ri", items: ['How many rice?', 'How much eggs?', 'Can I to have some tea?'] } },
        { t: 'p', md: "Eslatma: **Can I** dan keyin **to**siz oddiy fe'l keladi: *Can I have…? Can I pay…?*" },
        { t: 'check', ex: { k: 'choice', q: "Do'konda iltimos: ___", opts: ['Can I have a bottle of water?', 'Can I to have a bottle of water?', 'I can has water.', 'Can have I water?'], a: 0, why: "**Can I + fe'l (to'siz)**." } },
      ],
    },
  ],
  words: [
    { en: 'cash', uz: 'naqd pul', ipa: 'kæʃ', pos: 'noun', ex: 'I pay in cash.', exUz: "Men naqd to'layman." },
    { en: 'card', uz: 'karta', ipa: 'kɑːd', pos: 'noun', ex: 'Can I pay by card?', exUz: "Karta bilan to'lasam bo'ladimi?" },
    { en: 'change', uz: 'qaytim', ipa: 'tʃeɪndʒ', pos: 'noun', ex: 'Here is your change.', exUz: 'Mana qaytimingiz.' },
    { en: 'fresh', uz: 'yangi, toza', ipa: 'freʃ', pos: 'adjective', ex: 'The bread is fresh.', exUz: 'Non yangi.' },
  ],
  practice: [
    { k: 'choice', q: 'How ___ apples do you want?', opts: ['much', 'many', 'any', 'a'], a: 1, why: "*apples* sanaladi → **many**." },
    { k: 'choice', q: 'How ___ sugar do you need?', opts: ['many', 'much', 'few', 'some'], a: 1, why: "*sugar* sanalmaydi → **much**." },
    { k: 'fill', q: "Can I ___ some water, please?", a: ['have'], uz: 'Ozgina suv bersangiz.', why: "**Can I have…**" },
    { k: 'order', uz: "Karta bilan to'lasam bo'ladimi?", words: ['Can', 'I', 'pay', 'by', 'card'], extra: ['to', 'am'] },
    { k: 'translate', uz: "Bu qancha turadi?", a: ['How much is it?', 'How much is this?'], why: "Narx: **How much…?**" },
    { k: 'match', pairs: [['cash', 'naqd pul'], ['card', 'karta'], ['change', 'qaytim'], ['fresh', 'yangi, toza']] },
    { k: 'tf', q: "*How many milk do you want?* — gap to'g'ri.", a: false, why: "*milk* sanalmaydi: **How much milk…?**" },
    { k: 'listen', say: 'Can I have a kilo of rice?', opts: ['Can I have a kilo of rice?', 'Can I have a bottle of rice?', 'Can you have a kilo of rice?', 'Can I have a kilo of rich?'], a: 0 },
    { k: 'fix', wrong: 'How many bread do you want?', a: ['How much bread do you want?'], why: "*bread* sanalmaydi → **much**." },
    { k: 'dictation', say: 'How much is it?', a: ['How much is it?', 'How much is it'] },
    { k: 'speak', say: 'Can I have some bread, please?', uz: "Do'konda iltimos qiling" },
  ],
  quiz: [
    { k: 'choice', q: 'How ___ eggs are there?', opts: ['much', 'many', 'a', 'any'], a: 1 },
    { k: 'fill', q: "We haven't got ___ milk.", a: ['much', 'any'], why: "Inkorda **much** yoki **any**." },
    { k: 'order', uz: 'Qancha guruch kerak?', words: ['How', 'much', 'rice', 'do', 'you', 'need'], extra: ['many'] },
    { k: 'translate', uz: "Ozgina pishloq bersangiz bo'ladimi?", a: ['Can I have some cheese?', 'Can I have some cheese, please?'] },
    { k: 'tf', q: "*Can I to pay?* — gap to'g'ri.", a: false, why: "**Can I pay?** — **to** kerak emas." },
    { k: 'fix', wrong: 'How much eggs do you want?', a: ['How many eggs do you want?'], why: "*eggs* sanaladi → **many**." },
    { k: 'match', pairs: [['rice', 'guruch'], ['cheese', 'pishloq'], ['salt', 'tuz'], ['butter', 'saryog\'']] },
    { k: 'choice', q: 'Can I pay by card? — ...', opts: ["Yes, you can.", 'Yes, you do.', 'Yes, I am.', 'Yes, it has.'], a: 0 },
  ],
  summary: [
    "**How many** + sanaladigan (*eggs*), **How much** + sanalmaydigan (*rice*). Narx: **How much is it?**",
    "Iltimos: **Can I have…?** — **Can I** dan keyin **to**siz fe'l.",
    "**some** — darakda, **any** — savol va inkorda.",
    "Yangi so'zlar: **cash, card, change, fresh**.",
  ],
  homework: "Do'konga borganda 3 ta narsani inglizcha so'rang: *Can I have…? How much is it? How many…?*",
};

export default lesson;
