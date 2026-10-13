import type { Lesson } from '../../../types';

// Mini lesson (skill): reading and writing, a menu, a recipe, a shopping list and a short order.
const lesson: Lesson = {
  id: "u8-l15",
  title: "Reading and writing: a menu and a shopping list",
  titleUz: "O'qish va yozish: menyu va xarid ro'yxati",
  mini: true,
  kind: 'skill',
  goal: "**Menyu va retseptni** o'qib kerakli ma'lumotni (narx, masalliq, tartib) topasiz va o'zingiz **xarid ro'yxati** hamda **qisqa buyurtma xati** yozasiz.",
  slides: [
    {
      title: "O'qing: kafe menyusi",
      blocks: [
        { t: "p", md: "Menyuni o'qing. Diqqat: **narxlar**, **nima bilan beriladi** va **qo'shimcha** haqida." },
        { t: "text", title: "Blue Spoon Café", en: "Starters: Tomato soup - $3. Green salad - $4.\nMain courses: Grilled chicken with rice - $9. Vegetable pasta with cheese sauce - $8.\nDesserts: Honey cake - $3. Lemon ice cream - $3.\nDrinks: tea, coffee or juice - $2.\nAll main courses are served with a salad. Extra cheese costs $1. You can have snacks all day.", uz: "Birinchi taomlar: pomidorli sho'rva - 3$. Yashil salat - 4$.\nAsosiy taomlar: Panjarada pishirilgan tovuq guruch bilan - 9$. Sabzavotli makaron pishloqli sous bilan - 8$.\nShirinliklar: Asalli tort - 3$. Limonli muzqaymoq - 3$.\nIchimliklar: choy, qahva yoki sharbat - 2$.\nBarcha asosiy taomlar salat bilan beriladi. Qo'shimcha pishloq 1$ turadi. Yengil taomlarni kun bo'yi olishingiz mumkin." },
        { t: "check", ex: { k: "choice", q: "How much is the vegetable pasta?", opts: ["$8", "$9", "$3", "$4"], a: 0, why: "*Vegetable pasta with cheese sauce - $8.*" } },
        { t: "check", ex: { k: "tf", q: "The main courses come with a salad.", a: true, why: "*All main courses are served with a salad.*" } },
      ],
    },
    {
      title: "O'qing: pancake retsepti",
      blocks: [
        { t: "text", title: "Sara's pancakes", en: "Sara wants to make pancakes for breakfast. She needs flour, eggs, milk and a little oil. First, she mixes 200 grams of flour and two eggs. Then she adds a cup of milk and stirs. After that, she puts a little oil in a pan. Finally, she fries the pancakes. They are ready in ten minutes. She serves them with honey or lemon.", uz: "Sara nonushtaga bliny pishirmoqchi. Unga un, tuxum, sut va ozgina yog' kerak. Avval u 200 gramm un va ikkita tuxumni aralashtiradi. Keyin bir chashka sut qo'shib, aralashtiradi. Shundan so'ng tovaga ozgina yog' soladi. Oxirida blinlarni qovuradi. Ular o'n daqiqada tayyor bo'ladi. U ularni asal yoki limon bilan beradi." },
        { t: "check", ex: { k: "choice", q: "What does Sara add after the flour and eggs?", opts: ["A cup of milk", "A little oil", "Honey", "Lemon"], a: 0, why: "*Then she adds a cup of milk and stirs.*" } },
        { t: "check", ex: { k: "choice", q: "How does Sara serve the pancakes?", opts: ["With honey or lemon", "With cheese", "With butter only", "With rice"], a: 0, why: "*She serves them with honey or lemon.*" } },
      ],
    },
    {
      title: "Yozing: ro'yxat va buyurtma",
      blocks: [
        { t: "p", md: "Xarid ro'yxatida o'lchov so'zlarini (*a kilo of, a bottle of*) ishlating. Qisqa buyurtma xatida muloyim iboralar kerak:" },
        { t: "table", head: ["Xarid ro'yxati (namuna)", "Qisqa buyurtma (namuna)"], rows: [
          ["1 kilo of flour", "Hello, I'd like to order two grilled chickens with rice,"],
          ["6 eggs", "one vegetable pasta and three teas, please."],
          ["a bottle of oil", "No nuts, please."],
          ["a jar of honey", "Thank you very much."],
        ] },
        { t: "compare", good: { title: "To'g'ri", items: ["a kilo of flour", "a bottle of oil", "I'd like to order two soups.", "Three teas, please."] }, bad: { title: "Noto'g'ri", items: ["a kilo flour", "a bottle oil", "I want order two soups.", "Three tea please"] } },
        { t: "tip", tone: "info", md: "Ro'yxat qisqa bo'ladi: *6 eggs, a bottle of oil*. Xatni esa **Hello** bilan boshlab, **please** va **Thank you** bilan tugating." },
        { t: "check", ex: { k: "fill", q: "We need a ___ of oil.", a: ["bottle"], uz: "Bizga bir shisha yog' kerak.", why: "Suyuqlik shishada: **a bottle of**." } },
      ],
    },
  ],
  words: [
    { en: "recipe", uz: "retsept", ipa: "ˈres.ɪ.pi", pos: "noun", ex: "This recipe is easy.", exUz: "Bu retsept oson." },
    { en: "grilled", uz: "panjarada pishirilgan", ipa: "ɡrɪld", pos: "adjective", ex: "I like grilled fish.", exUz: "Menga panjarada pishirilgan baliq yoqadi." },
    { en: "snack", uz: "yengil taom, gazak", ipa: "snæk", pos: "noun", ex: "She eats a snack at four.", exUz: "U soat to'rtda gazak qiladi." },
    { en: "sauce", uz: "sous", ipa: "sɔːs", pos: "noun", ex: "The pasta has a cheese sauce.", exUz: "Makaronda pishloqli sous bor." },
    { en: "extra", uz: "qo'shimcha", ipa: "ˈek.strə", pos: "adjective", ex: "Extra cheese costs one dollar.", exUz: "Qo'shimcha pishloq bir dollar turadi." },
    { en: "served with", uz: "... bilan beriladi", ipa: "sɜːvd wɪð", pos: "phrase", ex: "The chicken is served with rice.", exUz: "Tovuq guruch bilan beriladi." },
  ],
  practice: [
    { k: "choice", q: "Menu: \"Honey cake - $3. Lemon ice cream - $3.\" The two desserts cost ___.", opts: ["the same", "different prices", "$6 each", "nothing"], a: 0, why: "Ikkalasi ham $3." },
    { k: "tf", q: "Extra cheese is free at the Blue Spoon Café.", a: false, why: "*Extra cheese costs $1.*" },
    { k: "choice", q: "How long do Sara's pancakes take?", opts: ["Ten minutes", "Two hours", "One minute", "A day"], a: 0, why: "*They are ready in ten minutes.*" },
    { k: "fill", q: "First, mix the flour and eggs. ___, add the milk.", a: ["Then", "After that", "Next"], uz: "Avval un va tuxumni aralashtiring. Keyin sut qo'shing.", why: "Ikkinchi qadam: **Then**." },
    { k: "order", uz: "Bizga bir kilo un kerak.", words: ["We", "need", "a", "kilo", "of", "flour."], extra: ["kilos", "some"] },
    { k: "order", uz: "Iltimos, uchta choy.", words: ["Three", "teas,", "please."], extra: ["tea", "give"] },
    { k: "translate", uz: "Ikkita panjarada pishirilgan tovuq buyurtma qilmoqchiman.", a: ["I'd like to order two grilled chickens.", "I would like to order two grilled chickens.", "I'd like two grilled chickens, please."] },
    { k: "fix", wrong: "We need a bottle oil.", a: ["We need a bottle of oil."], why: "**a bottle of** + ot." },
    { k: "fix", wrong: "I want order a soup.", a: ["I'd like to order a soup.", "I'd like a soup, please.", "I want to order a soup."], why: "**I'd like to order…** yoki **I want to order…**" },
    { k: "match", pairs: [["recipe", "retsept"], ["grilled", "panjarada pishirilgan"], ["snack", "gazak"], ["sauce", "sous"], ["extra", "qo'shimcha"]] },
    { k: "dictation", say: "The chicken is served with rice.", a: ["The chicken is served with rice."] },
    { k: "listen", say: "Extra cheese costs one dollar.", opts: ["Extra cheese costs one dollar.", "Extra cheese costs two dollars.", "Extra rice costs one dollar.", "Cheese is free."], a: 0 },
  ],
  quiz: [
    { k: "choice", q: "\"Served with a salad\" means:", opts: ["Salat bilan beriladi", "Salat sotiladi", "Salat yo'q", "Salat qimmat"], a: 0 },
    { k: "choice", q: "Which is a good shopping list line?", opts: ["a bottle of oil", "a bottle oil", "bottle of an oil", "oil bottle of"], a: 0 },
    { k: "fill", q: "Extra cheese ___ one dollar.", a: ["costs"], uz: "Qo'shimcha pishloq bir dollar turadi.", why: "**cheese** — birlik → **costs**." },
    { k: "order", uz: "Menga sabzavotli makaron kerak.", words: ["I'd", "like", "the", "vegetable", "pasta."], extra: ["want", "give"] },
    { k: "translate", uz: "Bizga oltita tuxum kerak.", a: ["We need six eggs.", "We need 6 eggs."] },
    { k: "fix", wrong: "I'd like three tea.", a: ["I'd like three teas.", "I'd like three teas, please."], why: "Uchta choy → **teas** (ko'plik)." },
    { k: "match", pairs: [["recipe", "retsept"], ["snack", "gazak"], ["sauce", "sous"], ["extra", "qo'shimcha"]] },
    { k: "tf", q: "Buyurtma xatini **Hello** bilan boshlab, **please** va **Thank you** bilan tugatish yaxshi.", a: true },
  ],
  summary: [
    "Menyuda avval **narx**, **nima bilan beriladi** (*served with*) va **qo'shimcha** (*extra*) ni qidiring.",
    "Retseptda tartib: **First, … Then … After that … Finally, …**",
    "Ro'yxat: **a kilo of flour, a bottle of oil, 6 eggs**.",
    "Buyurtma xati: **Hello, I'd like to order… please. Thank you.**",
    "Yangi so'zlar: **recipe, grilled, snack, sauce, extra, served with**.",
  ],
  homework: "Uyingiz uchun 6 qatorlik xarid ro'yxati va kafeda taom buyurtma qiluvchi 3 gaplik qisqa xat yozing.",
};

export default lesson;
