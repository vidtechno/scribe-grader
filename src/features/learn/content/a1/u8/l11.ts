import type { Lesson } from '../../../types';

// Mini lesson (review): whole unit u8. Recycles food, containers, quantity, money, café, clothes, recipes, should, comparatives.
const lesson: Lesson = {
  id: "u8-l11",
  title: "Food and shopping: final review",
  titleUz: "Ovqat va xarid: yakuniy takror",
  mini: true,
  goal: "8-bo'lim mavzularini takrorlaysiz: **idish va o'lchovlar, miqdor so'zlari, narx, kafe, kiyim, retsept, should, qiyoslash**.",
  slides: [
    {
      title: "Takror: dialog",
      blocks: [
        { t: "p", md: "Bir dialogda butun bo'lim: miqdor, narx, buyurtma va maslahat." },
        { t: "dialog", lines: [
          { who: "Sara", en: "I'd like a cup of tea and a slice of cake, please.", uz: "Bir chashka choy va bir bo'lak tort, iltimos." },
          { who: "Waiter", en: "That's four dollars fifty. Anything else?", uz: "To'rt dollar ellik sent. Yana nimadir kerakmi?" },
          { who: "Sara", en: "No, thanks. Can I pay by card?", uz: "Yo'q, rahmat. Karta bilan to'lasam bo'ladimi?" },
          { who: "Waiter", en: "Of course. This cake is the best in town!", uz: "Albatta. Bu tort shahardagi eng yaxshisi!" },
          { who: "Sara", en: "Really? It's much better than my cake!", uz: "Rostdanmi? U mening tortimdan ancha yaxshi!" },
          { who: "Waiter", en: "You should try our lemon cake too.", uz: "Limonli tortimizni ham tatib ko'rishingiz kerak." },
        ] },
        { t: "check", ex: { k: "choice", q: "\"a ___ of cake\"", opts: ["slice", "bottle", "bunch", "carton"], a: 0, why: "Tort — **a slice of cake**." } },
      ],
    },
    {
      title: "Qoidalar jadvali",
      blocks: [
        { t: "table", head: ["Mavzu", "Namuna"], speak: [0, 1, 2, 3, 4], rows: [
          ["Idish / o'lchov", "a bottle of water, a loaf of bread"],
          ["Miqdor", "a few eggs, a little milk, a lot of rice"],
          ["Narx", "How much are these shoes? — They're sixty dollars."],
          ["Kafe", "Could I have the bill, please?"],
          ["Retsept", "First, chop the onions. Then fry them. Finally, add salt."],
          ["Maslahat", "You should eat more fruit. You shouldn't skip breakfast."],
          ["Qiyoslash", "better than, the best, as tasty as"],
        ] },
        { t: "tip", tone: "info", md: "Qiyoslashda: **-er than** (cheaper than), **the -est** (the cheapest), **as … as** (as big as). **good → better → the best**." },
        { t: "check", ex: { k: "fill", q: "This soup is ___ than that one. (good)", a: ["better"], uz: "Bu sho'rva anavisidan yaxshiroq.", why: "**good → better**." } },
      ],
    },
    {
      title: "Ehtiyot bo'ling: tez-tez uchraydigan xatolar",
      blocks: [
        { t: "compare", good: { title: "To'g'ri", items: ["a few apples", "a little salt", "You should rest.", "the best cafe", "as cheap as"] }, bad: { title: "Noto'g'ri", items: ["a few salt", "a little apples", "You should to rest.", "the most good cafe", "as cheaper as"] } },
        { t: "p", md: "Eslatma: **How much is it?** (bitta) — **How much are they?** (bir nechta). **a kilo of** — doim **of** bilan." },
        { t: "check", ex: { k: "choice", q: "To'g'ri gapni tanlang.", opts: ["It is the best shop.", "It is the goodest shop.", "It is the most good shop.", "It is best shop."], a: 0, why: "**good** → **the best**." } },
      ],
    },
  ],
  words: [
    { en: "bargain", uz: "arzon xarid", ipa: "ˈbɑː.ɡɪn", pos: "noun", ex: "These shoes are a bargain.", exUz: "Bu tuflilar arzon xarid." },
    { en: "customer", uz: "xaridor, mijoz", ipa: "ˈkʌs.tə.mər", pos: "noun", ex: "The customer pays by card.", exUz: "Xaridor karta bilan to'laydi." },
    { en: "offer", uz: "taklif qilmoq", ipa: "ˈɒf.ər", pos: "verb", ex: "They offer free tea.", exUz: "Ular bepul choy taklif qilishadi." },
  ],
  practice: [
    { k: "choice", q: "Can I have a ___ of water?", opts: ["bottle", "slice", "loaf", "bunch"], a: 0 },
    { k: "fill", q: "We have a ___ time. (not much)", a: ["little"], uz: "Bizda ozgina vaqt bor.", why: "**time** sanalmaydi → **a little**." },
    { k: "fill", q: "How much ___ these trousers?", a: ["are"], uz: "Bu shimlar qancha?", why: "Ko'plik → **are**." },
    { k: "order", uz: "Avval piyozni to'g'rang.", words: ["First,", "chop", "the", "onions."], extra: ["chops", "finally"] },
    { k: "translate", uz: "Siz ko'proq meva yeyishingiz kerak.", a: ["You should eat more fruit.", "You should eat more fruits."], why: "**should** + oddiy fe'l." },
    { k: "match", pairs: [["bargain", "arzon xarid"], ["customer", "xaridor"], ["offer", "taklif qilmoq"], ["receipt", "chek"], ["change", "qaytim"]] },
    { k: "tf", q: "*the most good* — to'g'ri ibora.", a: false, why: "To'g'risi: *the best*." },
    { k: "listen", say: "Could I have the bill, please?", opts: ["Could I have the bill, please?", "Could I have the menu, please?", "Can I pay by card?", "Could I have a bill, please?"], a: 0 },
    { k: "dictation", say: "You shouldn't skip breakfast.", a: ["You shouldn't skip breakfast.", "You should not skip breakfast."] },
    { k: "fix", wrong: "Plov is more good than soup.", a: ["Plov is better than soup."], why: "**good → better**." },
    { k: "speak", say: "This is the best cake in town.", uz: "Bu shahardagi eng yaxshi tort." },
  ],
  quiz: [
    { k: "choice", q: "Bread is ___ than cake. (cheap)", opts: ["cheaper", "more cheap", "the cheapest", "cheap"], a: 0 },
    { k: "choice", q: "These shoes are too small. I need a ___ size.", opts: ["bigger", "more big", "biggest", "big"], a: 0 },
    { k: "fill", q: "A kilo ___ apples, please.", a: ["of"] },
    { k: "fill", q: "This tea isn't ___ hot as that one.", a: ["as"], uz: "Bu choy anavisichalik issiq emas." },
    { k: "order", uz: "Karta bilan to'lasam bo'ladimi?", words: ["Can", "I", "pay", "by", "card?"], extra: ["with", "does"] },
    { k: "translate", uz: "Shakarni juda ko'p solmang.", a: ["Don't add too much sugar.", "You shouldn't add too much sugar."] },
    { k: "fix", wrong: "You should to rest.", a: ["You should rest."], why: "**should** dan keyin **to** yo'q." },
    { k: "tf", q: "*a few* sanaladigan ko'plik bilan ishlatiladi.", a: true },
  ],
  summary: [
    "Miqdor: **a kilo of, a bottle of, a few + ko'plik, a little + sanalmaydigan**.",
    "Narx va buyurtma: **How much is/are…? Could I have…? Can I pay by card?**",
    "Retsept va maslahat: **First, then, finally**; **should / shouldn't** + oddiy fe'l.",
    "Qiyoslash: **better than, the best, as … as**.",
  ],
  homework: "O'zingizning sevimli taomingiz haqida 5 ta gap yozing: masalliq, narx va maslahat bilan.",
};

export default lesson;
