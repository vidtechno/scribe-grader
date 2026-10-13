import type { Lesson } from '../../../types';

// Mini lesson (skill): listening and speaking, ordering a meal in a restaurant.
const lesson: Lesson = {
  id: "u8-l14",
  title: "Listening and speaking: ordering a meal",
  titleUz: "Tinglash va gapirish: ovqat buyurtma qilish",
  mini: true,
  kind: 'skill',
  goal: "Restoran suhbatini tinglab, **nima buyurtma qilingani** va **maxsus talablarni** topasiz, o'zingiz esa stol band qilib, ovqat tanlab, **muloyim buyurtma** berasiz.",
  slides: [
    {
      title: "Tinglang: stol band qilish",
      blocks: [
        { t: "p", md: "Dialogni o'qing va tinglang. Diqqat: **necha kishi**, **soat nechada**, **kim nima so'radi**." },
        { t: "dialog", lines: [
          { who: "Tom", en: "Good evening. I'd like to book a table for two, please.", uz: "Xayrli kech. Ikki kishilik stol band qilmoqchiman." },
          { who: "Waiter", en: "Of course. What time would you like to come?", uz: "Albatta. Soat nechada kelmoqchisiz?" },
          { who: "Tom", en: "At seven o'clock. Is that OK?", uz: "Soat yettida. Bo'ladimi?" },
          { who: "Waiter", en: "Yes, that's fine. What's your name, please?", uz: "Ha, bo'ladi. Ismingiz nima?" },
          { who: "Tom", en: "It's Tom Hill. My friend is vegetarian. Do you have vegetarian food?", uz: "Tom Xill. Do'stim vegetarian. Vegetarian ovqat bormi?" },
          { who: "Waiter", en: "Yes, we do. We have a lot of vegetable dishes.", uz: "Ha, bor. Bizda sabzavotli taomlar ko'p." },
        ] },
        { t: "check", ex: { k: "choice", q: "How many people is the table for?", opts: ["Two", "Three", "Seven", "One"], a: 0, why: "*a table for **two***." } },
        { t: "check", ex: { k: "tf", q: "Tom's friend eats meat.", a: false, why: "*My friend is **vegetarian**.*" } },
      ],
    },
    {
      title: "Tinglang: buyurtma berish",
      blocks: [
        { t: "dialog", lines: [
          { who: "Waiter", en: "Are you ready to order?", uz: "Buyurtma berishga tayyormisiz?" },
          { who: "Tom", en: "Yes. What do you recommend?", uz: "Ha. Nimani tavsiya qilasiz?" },
          { who: "Waiter", en: "Today's special is chicken with rice. It's very tasty.", uz: "Bugungi maxsus taom — guruchli tovuq. Juda mazali." },
          { who: "Tom", en: "Great. I'll have that. And my friend would like the vegetable soup.", uz: "Ajoyib. Men shuni olaman. Do'stim sabzavotli sho'rva istaydi." },
          { who: "Waiter", en: "Would you like anything to drink?", uz: "Biror narsa ichasizmi?" },
          { who: "Tom", en: "Two glasses of water, please. My friend is allergic to nuts, so no nuts in the soup, please.", uz: "Ikki stakan suv, iltimos. Do'stim yong'oqqa allergik, shuning uchun sho'rvaga yong'oq solmang." },
          { who: "Waiter", en: "No problem. I'll tell the kitchen.", uz: "Muammo yo'q. Oshxonaga aytaman." },
        ] },
        { t: "check", ex: { k: "choice", q: "What does Tom order?", opts: ["The chicken with rice", "The vegetable soup", "A salad", "Fish and chips"], a: 0, why: "*I'll have that* = today's special: chicken with rice." } },
        { t: "check", ex: { k: "choice", q: "Why does Tom say \"no nuts\"?", opts: ["His friend is allergic to nuts.", "Tom hates nuts.", "Nuts are expensive.", "The soup is too hot."], a: 0, why: "*My friend is allergic to nuts.*" } },
      ],
    },
    {
      title: "Gapiring: o'zingiz buyurtma bering",
      blocks: [
        { t: "table", head: ["Vaziyat", "Siz aytasiz"], rows: [
          ["Stol band qilish", "I'd like to book a table for four, please."],
          ["Maslahat so'rash", "What do you recommend?"],
          ["Buyurtma berish", "I'll have the soup, and could I have some water, please?"],
          ["Ehtiyoj haqida aytish", "I'm vegetarian. / I'm allergic to nuts."],
          ["Hisob so'rash", "Could we have the bill, please?"],
        ], speak: [1] },
        { t: "tip", tone: "good", md: "Har doim **please** deng va **I'd like / Could I have / I'll have** dan foydalaning. *Give me…* ❌ qo'pol eshitiladi." },
        { t: "check", ex: { k: "fill", q: "I'm ___ to nuts, so no nuts, please.", a: ["allergic"], uz: "Men yong'oqqa allergikman, shuning uchun yong'oq solmang.", why: "**allergic to** — allergiyasi bor." } },
      ],
    },
  ],
  words: [
    { en: "waiter", uz: "ofitsiant", ipa: "ˈweɪ.tər", pos: "noun", ex: "The waiter brings the menu.", exUz: "Ofitsiant menyuni olib keladi." },
    { en: "recommend", uz: "tavsiya qilmoq", ipa: "ˌrek.əˈmend", pos: "verb", ex: "What do you recommend?", exUz: "Nimani tavsiya qilasiz?" },
    { en: "vegetarian", uz: "vegetarian (go'sht yemaydigan)", ipa: "ˌvedʒ.ɪˈteə.ri.ən", pos: "adjective", ex: "My sister is vegetarian.", exUz: "Opam vegetarian." },
    { en: "allergic", uz: "allergik", ipa: "əˈlɜː.dʒɪk", pos: "adjective", ex: "He is allergic to nuts.", exUz: "U yong'oqqa allergik." },
    { en: "special", uz: "maxsus taom (bugungi)", ipa: "ˈspeʃ.əl", pos: "noun", ex: "Today's special is fish.", exUz: "Bugungi maxsus taom — baliq." },
    { en: "book a table", uz: "stol band qilmoq", ipa: "bʊk ə ˈteɪ.bəl", pos: "phrase", ex: "I'd like to book a table for six.", exUz: "Olti kishilik stol band qilmoqchiman." },
  ],
  practice: [
    { k: "listen", say: "I'd like to book a table for two, please.", opts: ["I'd like to book a table for two, please.", "I'd like to book a table for four, please.", "I'd like to buy a table for two, please.", "I like to book a table for two."], a: 0 },
    { k: "dictation", say: "What do you recommend?", a: ["What do you recommend?"] },
    { k: "choice", q: "Listen and choose the best answer.", say: "Are you ready to order?", opts: ["Yes. I'll have the soup, please.", "Yes, I'm a waiter.", "No, I'm vegetarian.", "Give me the soup."], a: 0 },
    { k: "fill", q: "My friend is ___ to nuts. (allergik)", a: ["allergic"], uz: "Do'stim yong'oqqa allergik.", why: "**allergic to**." },
    { k: "order", uz: "Nimani tavsiya qilasiz?", words: ["What", "do", "you", "recommend?"], extra: ["does", "recommends"] },
    { k: "translate", uz: "Ikki kishilik stol band qilmoqchiman.", a: ["I'd like to book a table for two.", "I would like to book a table for two.", "I'd like to book a table for two, please."] },
    { k: "match", pairs: [["waiter", "ofitsiant"], ["recommend", "tavsiya qilmoq"], ["vegetarian", "vegetarian"], ["allergic", "allergik"], ["special", "maxsus taom"]] },
    { k: "tf", q: "Waiter: \"Today's special is chicken with rice.\" — Chicken is the special today.", a: true, why: "Bugungi maxsus taom — chicken with rice." },
    { k: "listen", say: "Would you like anything to drink?", opts: ["Would you like anything to drink?", "Would you like anything to eat?", "Do you like anything to drink?", "Would you like something to drink?"], a: 0 },
    { k: "fix", wrong: "Give me a soup.", a: ["I'd like a soup, please.", "Could I have a soup, please?", "I'll have a soup, please.", "Can I have a soup, please?"], why: "Muloyim buyurtma: **I'd like … please.**" },
    { k: "speak", say: "I'd like to book a table for two, please.", uz: "Ikki kishilik stol band qilmoqchiman." },
    { k: "speak", say: "What do you recommend?", uz: "Nimani tavsiya qilasiz?" },
    { k: "speak", say: "I'm vegetarian. Do you have vegetable soup?", uz: "Men vegetarianman. Sabzavotli sho'rva bormi?" },
    { k: "speak", say: "Could we have the bill, please?", uz: "Hisobni olib kelsangiz bo'ladimi?" },
  ],
  quiz: [
    { k: "listen", say: "Today's special is chicken with rice.", opts: ["Today's special is chicken with rice.", "Today's special is fish with rice.", "Today's special is chicken with salad.", "Today's menu is chicken with rice."], a: 0 },
    { k: "dictation", say: "I'm allergic to nuts.", a: ["I'm allergic to nuts.", "I am allergic to nuts."] },
    { k: "choice", q: "\"What do you recommend?\" means:", opts: ["Nimani tavsiya qilasiz?", "Nima pishirasiz?", "Nechi pul bo'ladi?", "Nima ichasiz?"], a: 0 },
    { k: "fill", q: "I'd like to ___ a table for four.", a: ["book"], uz: "To'rt kishilik stol band qilmoqchiman.", why: "**book a table**." },
    { k: "order", uz: "Menga sho'rva kerak, iltimos.", words: ["I'll", "have", "the", "soup,", "please."], extra: ["give", "me"] },
    { k: "translate", uz: "Men vegetarianman.", a: ["I'm vegetarian.", "I am vegetarian.", "I'm a vegetarian.", "I am a vegetarian."] },
    { k: "match", pairs: [["waiter", "ofitsiant"], ["special", "maxsus taom"], ["allergic", "allergik"], ["recommend", "tavsiya qilmoq"]] },
    { k: "fix", wrong: "I want a water.", a: ["I'd like some water, please.", "I'd like a water, please.", "Could I have some water, please?", "I'd like water, please."], why: "Muloyim: **I'd like … please.**" },
  ],
  summary: [
    "Stol band qilish: **I'd like to book a table for two.**",
    "Tavsiya so'rash: **What do you recommend?**; maxsus talab: **I'm vegetarian. I'm allergic to nuts.**",
    "Buyurtma: **I'd like… / I'll have… / Could I have…, please?** — *Give me* emas.",
    "Yangi so'zlar: **waiter, recommend, vegetarian, allergic, special, book a table**.",
  ],
  homework: "Restoranda ofitsiant bilan 6 qatorlik suhbat yozing (stol, tavsiya, buyurtma, hisob) va uni ovoz chiqarib 3 marta ayting.",
};

export default lesson;
