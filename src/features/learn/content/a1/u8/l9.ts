import type { Lesson } from '../../../types';

// Mini lesson (situation): at the market. Recycles containers, a lot of / a few / a little, prices, How much?
const lesson: Lesson = {
  id: "u8-l9",
  title: "At the market: quantities and prices",
  titleUz: "Bozorda: miqdor va narx",
  mini: true,
  goal: "Bozorda **kerakli miqdorni aytasiz** (*a kilo of apples, a few tomatoes, a little cheese*) va narxni so'raysiz: **How much is it? / How much are they?**",
  slides: [
    {
      title: "Vaziyat: bozorda",
      blocks: [
        { t: "p", md: "Bozorda sotuvchi sizdan **qancha** kerakligini so'raydi. Siz **a kilo of…**, **a few…**, **a little…** deb javob berasiz va narxni so'raysiz." },
        { t: "dialog", lines: [
          { who: "Seller", en: "Good morning! What would you like?", uz: "Xayrli tong! Nima xohlaysiz?" },
          { who: "Aziza", en: "Hello. How much are the tomatoes?", uz: "Salom. Pomidorlar qancha?" },
          { who: "Seller", en: "They're two dollars a kilo.", uz: "Bir kilosi ikki dollar." },
          { who: "Aziza", en: "Can I have a kilo of tomatoes and a few onions, please?", uz: "Bir kilo pomidor va bir nechta piyoz bersangiz, iltimos?" },
          { who: "Seller", en: "Sure. Anything else?", uz: "Albatta. Yana nima kerak?" },
          { who: "Aziza", en: "A little cheese, please. How much is it?", uz: "Ozgina pishloq, iltimos. U qancha?" },
          { who: "Seller", en: "That's seven dollars. Here you are.", uz: "Jami yetti dollar. Marhamat." },
        ] },
        { t: "check", ex: { k: "choice", q: "Aziza: \"How much ___ the tomatoes?\"", opts: ["is", "are", "does", "do"], a: 1, why: "**tomatoes** — ko'plik → **How much are…?**" } },
      ],
    },
    {
      title: "Foydali iboralar",
      blocks: [
        { t: "table", head: ["Inglizcha", "Qachon aytiladi"], speak: [0, 1], rows: [
          ["Can I have a kilo of apples?", "Bir kilo olma so'raysiz"],
          ["A few grapes, please.", "Sanaladigan narsadan oz miqdor"],
          ["A little butter, please.", "Sanalmaydigan narsadan oz miqdor"],
          ["How much is it?", "Bitta narsaning narxi"],
          ["How much are they?", "Bir nechta narsaning narxi"],
          ["That's too expensive.", "Narx qimmat"],
        ] },
        { t: "tip", tone: "info", md: "**a few** + sanaladigan ko'plik (*a few onions*), **a little** + sanalmaydigan (*a little salt*). **a lot of** ikkalasi bilan ham ishlaydi." },
        { t: "check", ex: { k: "fill", q: "I need a ___ milk, please.", a: ["little"], uz: "Menga ozgina sut kerak.", why: "**milk** sanalmaydi → **a little**." } },
      ],
    },
    {
      title: "Ehtiyot bo'ling: tez-tez uchraydigan xatolar",
      blocks: [
        { t: "compare", good: { title: "To'g'ri", items: ["a few onions", "a little cheese", "How much are the apples?", "a kilo of apples"] }, bad: { title: "Noto'g'ri", items: ["a little onions", "a few cheese", "How much is the apples?", "a kilo apples"] } },
        { t: "p", md: "Eslatma: o'lchov so'zidan keyin **of** kerak: *a kilo **of** apples*, *a bottle **of** water*." },
        { t: "check", ex: { k: "choice", q: "To'g'ri gapni tanlang.", opts: ["I want a few tomatoes.", "I want a little tomatoes.", "I want a kilo tomatoes.", "I want few of tomatoes."], a: 0, why: "**tomatoes** sanaladi → **a few**." } },
      ],
    },
  ],
  words: [
    { en: "kilo", uz: "kilogramm", ipa: "ˈkiː.ləʊ", pos: "noun", ex: "I need a kilo of apples.", exUz: "Menga bir kilo olma kerak." },
    { en: "price", uz: "narx", ipa: "praɪs", pos: "noun", ex: "The price is two dollars.", exUz: "Narxi ikki dollar." },
    { en: "stall", uz: "peshtaxta, rasta", ipa: "stɔːl", pos: "noun", ex: "She has a fruit stall at the market.", exUz: "Uning bozorda meva rastasi bor." },
    { en: "weigh", uz: "tortmoq, og'irligini o'lchamoq", ipa: "weɪ", pos: "verb", ex: "Please weigh the grapes.", exUz: "Iltimos, uzumni torting." },
  ],
  practice: [
    { k: "choice", q: "How much ___ this melon?", opts: ["is", "are", "do", "have"], a: 0, why: "**melon** — birlik → **is**." },
    { k: "fill", q: "Can I have a ___ onions, please?", a: ["few"], uz: "Bir nechta piyoz bersangiz?", why: "**onions** sanaladi → **a few**." },
    { k: "fill", q: "I need a kilo ___ potatoes.", a: ["of"], uz: "Menga bir kilo kartoshka kerak.", why: "O'lchov + **of**." },
    { k: "order", uz: "Bu pomidorlar qancha?", words: ["How", "much", "are", "these", "tomatoes?"], extra: ["is", "many"] },
    { k: "translate", uz: "Menga ozgina pishloq kerak.", a: ["I need a little cheese.", "I want a little cheese."], why: "**cheese** sanalmaydi → **a little**." },
    { k: "match", pairs: [["kilo", "kilogramm"], ["price", "narx"], ["stall", "peshtaxta"], ["weigh", "tortmoq"]] },
    { k: "tf", q: "*a few milk* — to'g'ri ibora.", a: false, why: "To'g'risi: *a little milk*." },
    { k: "listen", say: "How much are the apples?", opts: ["How much are the apples?", "How much is the apple?", "How many apples are there?", "How much are the grapes?"], a: 0 },
    { k: "dictation", say: "That's too expensive.", a: ["That's too expensive.", "That is too expensive."] },
    { k: "fix", wrong: "How much is the apples?", a: ["How much are the apples?"], why: "**apples** — ko'plik → **are**." },
    { k: "speak", say: "Can I have a kilo of tomatoes, please?", uz: "Bir kilo pomidor bersangiz, iltimos?" },
  ],
  quiz: [
    { k: "choice", q: "I need a ___ sugar.", opts: ["little", "few", "many", "kilo"], a: 0 },
    { k: "choice", q: "How much ___ the grapes?", opts: ["is", "are", "does", "am"], a: 1 },
    { k: "fill", q: "A kilo ___ apples, please.", a: ["of"] },
    { k: "order", uz: "Bir nechta olma bersangiz?", words: ["Can", "I", "have", "a", "few", "apples?"], extra: ["little", "much"] },
    { k: "translate", uz: "Narxi qancha?", a: ["How much is it?", "How much is the price?"] },
    { k: "fix", wrong: "I want a little onions.", a: ["I want a few onions."], why: "**onions** sanaladi → **a few**." },
    { k: "tf", q: "*a little* sanalmaydigan narsa bilan ishlatiladi.", a: true },
  ],
  summary: [
    "Miqdor: **a kilo of…**, **a few** + sanaladigan, **a little** + sanalmaydigan.",
    "Narx: **How much is it?** (birlik), **How much are they?** (ko'plik).",
    "Yangi so'zlar: **kilo, price, stall, weigh**.",
  ],
  homework: "Bozorga borsangiz, 3 ta gapni inglizcha ayting: *A kilo of…, A few…, How much is it?*",
};

export default lesson;
