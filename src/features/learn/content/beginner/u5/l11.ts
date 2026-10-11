import type { Lesson } from '../../../types';

// Mini lesson (situation): choosing in a shop. Recycles shirt, jacket, expensive, cheap, big, small, price, how much.
const lesson: Lesson = {
  id: 'u5-l11',
  title: 'Choosing in a shop: comparing',
  titleUz: "Do'konda tanlash: qiyoslash",
  mini: true,
  goal: "Do'konda narsalarni **solishtirasiz** va tanlaysiz: *This jacket is cheaper than that one. I'll take the cheapest.* **-er / -est**, **more / most**, **better / the best** ni real vaziyatda ishlatasiz.",
  slides: [
    {
      title: "Vaziyat: do'konda",
      blocks: [
        { t: 'p', md: "Tanlashda doim solishtiramiz: **arzonroq, kattaroq, eng yaxshi**. Inglizcha: **cheaper (than)**, **bigger**, **the best**." },
        { t: 'dialog', lines: [
          { who: 'Seller', en: 'Hello! Can I help you?', uz: 'Salom! Yordam beraymi?' },
          { who: 'Nodira', en: 'Yes, please. I want a jacket. How much is this one?', uz: "Ha, iltimos. Kurtka kerak. Bu qancha turadi?" },
          { who: 'Seller', en: "It's sixty dollars. That one is cheaper, but it's smaller.", uz: "Oltmish dollar. Anavisi arzonroq, lekin kichikroq." },
          { who: 'Nodira', en: 'Is the blue one better than the black one?', uz: "Ko'k kurtka qoradan yaxshiroqmi?" },
          { who: 'Seller', en: 'Yes, the blue one is the best. The size is right and it is more comfortable.', uz: "Ha, ko'ki eng yaxshisi. O'lchami to'g'ri va qulayroq." },
          { who: 'Nodira', en: "OK, I'll take the blue one. It's not the cheapest, but it's the nicest.", uz: "Xo'p, ko'kini olaman. U eng arzon emas, lekin eng chiroylisi." },
        ] },
        { t: 'check', ex: { k: 'choice', q: 'Seller: "That jacket is ___ than this one."', opts: ['cheap', 'cheaper', 'cheapest', 'more cheap'], a: 1, why: "Ikkita narsani solishtirish: **cheap + er + than**." } },
      ],
    },
    {
      title: "Do'kon iboralari",
      blocks: [
        { t: 'table', head: ['Inglizcha', "Qachon aytiladi"], speak: [0], rows: [
          ['How much is it?', "Narxni so'raysiz"],
          ['Is this cheaper than that one?', 'Narxlarni solishtirasiz'],
          ['Do you have a bigger size?', "Kattaroq o'lcham so'raysiz"],
          ["What's the best one?", "Eng yaxshisini so'raysiz"],
          ["It's too expensive. Is there a discount?", "Chegirma so'raysiz"],
          ["I'll take this one.", 'Tanlovingizni aytasiz'],
        ] },
        { t: 'tip', tone: 'info', md: "Uzun sifatlar (*comfortable, expensive*) uchun **more / the most**: *more expensive*, *the most comfortable*. Istisnolar: **good – better – the best**, **bad – worse – the worst**." },
        { t: 'check', ex: { k: 'fill', q: 'This shirt is ___ than that one. (expensive)', a: ['more expensive'], uz: 'Bu ko\'ylak anavisidan qimmatroq.', why: "Uzun sifat: **more expensive than**." } },
      ],
    },
    {
      title: "Ehtiyot bo'ling: tez-tez uchraydigan xatolar",
      blocks: [
        { t: 'compare', good: { title: "To'g'ri", items: ['bigger than', 'the best', 'more expensive'] }, bad: { title: "Noto'g'ri", items: ['more bigger than', 'the goodest', 'expensiver'] } },
        { t: 'p', md: "Eslatma: solishtirishda **than**, eng yuqori darajada **the** kerak: *cheaper **than***, ***the** cheapest*. Bir vaqtda **more** va **-er** qo'yilmaydi." },
        { t: 'check', ex: { k: 'choice', q: 'This is ___ bag in the shop.', opts: ['the bigger', 'the biggest', 'biggest', 'more big'], a: 1, why: "Hammasidan eng — **the biggest**." } },
      ],
    },
  ],
  words: [
    { en: 'size', uz: "o'lcham", ipa: 'saɪz', pos: 'noun', ex: 'Do you have a bigger size?', exUz: "Kattaroq o'lchamingiz bormi?" },
    { en: 'choose', uz: 'tanlamoq', ipa: 'tʃuːz', pos: 'verb', ex: 'It is difficult to choose.', exUz: 'Tanlash qiyin.' },
    { en: 'discount', uz: 'chegirma', ipa: 'ˈdɪs.kaʊnt', pos: 'noun', ex: 'Is there a discount today?', exUz: 'Bugun chegirma bormi?' },
    { en: 'comfortable', uz: 'qulay', ipa: 'ˈkʌm.fə.tə.bəl', pos: 'adjective', ex: 'These shoes are comfortable.', exUz: 'Bu poyabzal qulay.' },
  ],
  practice: [
    { k: 'choice', q: 'This phone is ___ than that one.', opts: ['cheap', 'cheaper', 'the cheapest', 'more cheap'], a: 1, why: "**than** bor — qiyosiy daraja: cheap**er**." },
    { k: 'fill', q: 'This is the ___ jacket in the shop. (good)', a: ['best'], uz: "Bu do'kondagi eng yaxshi kurtka.", why: "good – better – **best**." },
    { k: 'order', uz: 'Sizda kattaroq o\'lcham bormi?', words: ['Do', 'you', 'have', 'a', 'bigger', 'size'], extra: ['biggest', 'than'] },
    { k: 'translate', uz: "Bu anavisidan arzonroq.", a: ['This is cheaper than that one.', 'This one is cheaper than that one.', 'This is cheaper than that.'] },
    { k: 'match', pairs: [['size', "o'lcham"], ['choose', 'tanlamoq'], ['discount', 'chegirma'], ['comfortable', 'qulay'], ['expensive', 'qimmat']] },
    { k: 'tf', q: "*This bag is more bigger than that one.* — gap to'g'ri.", a: false, why: "To'g'risi: *bigger than* (**more** va **-er** birga emas)." },
    { k: 'listen', say: 'Is this cheaper than that one?', opts: ['Is this cheaper than that one?', 'Is this the cheapest one?', 'Is this better than that one?', 'Is this bigger than that one?'], a: 0 },
    { k: 'dictation', say: "I'll take this one.", a: ["I'll take this one.", 'I will take this one.'] },
    { k: 'fix', wrong: 'He is the goodest student.', a: ['He is the best student.'], why: "good – better – **best**." },
    { k: 'fill', q: 'These shoes are ___ than my old shoes. (comfortable)', a: ['more comfortable'], uz: 'Bu poyabzal eskisidan qulayroq.', why: "Uzun sifat: **more comfortable**." },
    { k: 'speak', say: 'How much is this jacket?', uz: 'Bu kurtka qancha turadi?' },
  ],
  quiz: [
    { k: 'choice', q: 'The blue jacket is ___ of all.', opts: ['better', 'the best', 'good', 'more good'], a: 1 },
    { k: 'fill', q: 'Tashkent is ___ than Bukhara. (big)', a: ['bigger'], why: "big → **bigger** (undosh ikkilanadi)." },
    { k: 'order', uz: "Bu eng arzon kurtka.", words: ['This', 'is', 'the', 'cheapest', 'jacket'], extra: ['cheaper', 'more'] },
    { k: 'translate', uz: "Bu juda qimmat. Chegirma bormi?", a: ["It's too expensive. Is there a discount?", 'It is too expensive. Is there a discount?', "It's very expensive. Is there a discount?"] },
    { k: 'tf', q: "*the worst* — *bad* ning eng yuqori darajasi.", a: true },
    { k: 'fix', wrong: 'This bag is expensiver than that one.', a: ['This bag is more expensive than that one.'], why: "Uzun sifat: **more expensive**." },
    { k: 'match', pairs: [['good', 'best'], ['bad', 'worst'], ['big', 'biggest'], ['cheap', 'cheapest']] },
    { k: 'choice', q: 'I want the ___ one. It is the same size.', opts: ['cheaper than', 'cheapest', 'more cheap', 'cheap than'], a: 1 },
  ],
  summary: [
    "Ikkita narsa: **sifat + er + than** (*cheaper than*), uzun sifat: **more expensive than**.",
    "Hammasidan eng: **the + -est / the most** (*the cheapest, the most comfortable*).",
    "Istisnolar: **good – better – the best**, **bad – worse – the worst**.",
  ],
  homework: "Uyingizdagi 3 ta narsani solishtiring: *My phone is newer than…, This is the best…*",
};

export default lesson;
