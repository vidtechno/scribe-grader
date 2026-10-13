import type { Lesson } from '../../../types';

// Mini lesson (situation): planning a dinner. Recycles shopping list, recipe steps, should / shouldn't.
const lesson: Lesson = {
  id: "u8-l10",
  title: "Planning a dinner: shopping list and recipe",
  titleUz: "Kechki ovqat rejasi: ro'yxat va retsept",
  mini: true,
  goal: "Kechki ovqatga **xaridlar ro'yxatini tuzasiz** (*We need…, We don't need…*), retseptni **first, then, finally** bilan aytasiz va maslahat berasiz: **You should / shouldn't…**",
  slides: [
    {
      title: "Vaziyat: kechki ovqat rejasi",
      blocks: [
        { t: "p", md: "Mehmonlar keladi. Siz do'stingiz bilan nima pishirishni va nima sotib olishni rejalashtiryapsiz." },
        { t: "dialog", lines: [
          { who: "Dilya", en: "We have guests tonight. What should we cook?", uz: "Bugun kechqurun mehmonlar keladi. Nima pishirsak ekan?" },
          { who: "Omar", en: "Let's make soup. We need potatoes, carrots and onions.", uz: "Sho'rva qilaylik. Bizga kartoshka, sabzi va piyoz kerak." },
          { who: "Dilya", en: "We have onions, but we don't have any carrots. Let's write a list.", uz: "Piyoz bor, lekin sabzi yo'q. Ro'yxat yozaylik." },
          { who: "Omar", en: "First, wash and peel the vegetables. Then chop them.", uz: "Avval sabzavotlarni yuving va archib oling. Keyin to'g'rang." },
          { who: "Dilya", en: "Then fry the onions and add water. Finally, boil everything for thirty minutes.", uz: "Keyin piyozni qovuring va suv qo'shing. Oxirida hammasini o'ttiz daqiqa qaynating." },
          { who: "Omar", en: "You shouldn't add too much salt!", uz: "Tuzni juda ko'p solmaslik kerak!" },
          { who: "Dilya", en: "I know. I'll add a little.", uz: "Bilaman. Ozgina qo'shaman." },
        ] },
        { t: "check", ex: { k: "choice", q: "\"___, wash the vegetables. Then chop them.\"", opts: ["First", "Finally", "Last", "End"], a: 0, why: "Birinchi qadam — **First**." } },
      ],
    },
    {
      title: "Foydali iboralar",
      blocks: [
        { t: "table", head: ["Inglizcha", "Qachon aytiladi"], speak: [0, 1], rows: [
          ["Let's write a shopping list.", "Ro'yxat tuzishni taklif qilasiz"],
          ["We need two kilos of potatoes.", "Nima kerakligini aytasiz"],
          ["We don't need any bread.", "Nima kerak emasligini aytasiz"],
          ["First, wash the vegetables.", "Birinchi qadam"],
          ["Finally, serve the soup.", "Oxirgi qadam"],
          ["You should taste it first.", "Maslahat berasiz"],
        ] },
        { t: "tip", tone: "info", md: "**should / shouldn't** dan keyin fe'l oddiy shaklda: *You should **cook** it longer.* (**cooks** emas, **to cook** emas)." },
        { t: "check", ex: { k: "fill", q: "You ___ add too much sugar.", a: ["shouldn't", "should not"], uz: "Shakarni juda ko'p solmaslik kerak.", why: "Tavsiya qilinmaydi → **shouldn't**." } },
      ],
    },
    {
      title: "Ehtiyot bo'ling: tez-tez uchraydigan xatolar",
      blocks: [
        { t: "compare", good: { title: "To'g'ri", items: ["You should taste it.", "We don't have any carrots.", "First, wash the potatoes.", "Finally, serve the soup."] }, bad: { title: "Noto'g'ri", items: ["You should to taste it.", "We don't have some carrots.", "Firstly wash, then...", "You shoulds taste it."] } },
        { t: "p", md: "Eslatma: inkor gapda **some** o'rniga **any** ishlatiladi: *We don't have **any** milk.*" },
        { t: "check", ex: { k: "choice", q: "To'g'ri gapni tanlang.", opts: ["We should buy some fruit.", "We should to buy some fruit.", "We should buys some fruit.", "We should buying some fruit."], a: 0, why: "**should** + oddiy fe'l." } },
      ],
    },
  ],
  words: [
    { en: "list", uz: "ro'yxat", ipa: "lɪst", pos: "noun", ex: "My shopping list is long.", exUz: "Mening xaridlar ro'yxatim uzun." },
    { en: "guest", uz: "mehmon", ipa: "ɡest", pos: "noun", ex: "We have five guests tonight.", exUz: "Bugun kechqurun besh mehmonimiz bor." },
    { en: "ingredient", uz: "masalliq, tarkibiy qism", ipa: "ɪnˈɡriː.di.ənt", pos: "noun", ex: "Rice is the main ingredient.", exUz: "Guruch asosiy masalliq." },
    { en: "serve", uz: "(ovqat) tortmoq", ipa: "sɜːv", pos: "verb", ex: "Serve the soup hot.", exUz: "Sho'rvani issiq torting." },
  ],
  practice: [
    { k: "choice", q: "___, boil the eggs. Then peel them.", opts: ["First", "Finally", "Last", "End"], a: 0 },
    { k: "fill", q: "We don't have ___ carrots.", a: ["any"], uz: "Bizda sabzi yo'q.", why: "Inkor gapda **any**." },
    { k: "fill", q: "You ___ eat so many sweets. (not good)", a: ["shouldn't", "should not"], uz: "Shuncha ko'p shirinlik yemaslik kerak.", why: "Tavsiya qilinmaydi → **shouldn't**." },
    { k: "order", uz: "Avval sabzavotlarni yuving.", words: ["First,", "wash", "the", "vegetables."], extra: ["washes", "then"] },
    { k: "translate", uz: "Oxirida sho'rvani torting.", a: ["Finally, serve the soup.", "Finally serve the soup.", "At the end, serve the soup."] },
    { k: "match", pairs: [["list", "ro'yxat"], ["guest", "mehmon"], ["ingredient", "masalliq"], ["serve", "tortmoq"]] },
    { k: "tf", q: "*You should to taste it.* — gap to'g'ri.", a: false, why: "To'g'risi: *You should taste it.*" },
    { k: "listen", say: "We need a shopping list.", opts: ["We need a shopping list.", "We need a shopping store.", "We want a shopping list.", "We have a shopping list."], a: 0 },
    { k: "dictation", say: "First, wash the potatoes.", a: ["First, wash the potatoes.", "First wash the potatoes."] },
    { k: "fix", wrong: "You should to drink water.", a: ["You should drink water."], why: "**should** dan keyin **to** yo'q." },
    { k: "speak", say: "First, chop the onions. Then fry them.", uz: "Avval piyozni to'g'rang. Keyin qovuring." },
  ],
  quiz: [
    { k: "choice", q: "You ___ drink more water.", opts: ["should", "shoulds", "should to", "are should"], a: 0 },
    { k: "choice", q: "We don't need ___ bread.", opts: ["any", "some", "a few", "a"], a: 0 },
    { k: "fill", q: "___, serve the soup hot.", a: ["Finally", "Lastly"], uz: "Oxirida sho'rvani issiq torting." },
    { k: "order", uz: "Bizga ro'yxat kerak.", words: ["We", "need", "a", "list."], extra: ["needs", "an"] },
    { k: "translate", uz: "Mehmonlar bugun keladi.", a: ["We have guests tonight.", "We have guests today.", "Guests are coming tonight.", "Guests are coming today."] },
    { k: "fix", wrong: "We don't have some milk.", a: ["We don't have any milk."], why: "Inkor gapda **any**." },
    { k: "tf", q: "Retseptda eng oxirgi qadam **Finally** bilan boshlanadi.", a: true },
  ],
  summary: [
    "Ro'yxat: **We need…**, **We don't need any…**",
    "Retsept: **First, … Then … Finally, …**",
    "Maslahat: **You should / shouldn't** + oddiy fe'l.",
    "Yangi so'zlar: **list, guest, ingredient, serve**.",
  ],
  homework: "Bugungi kechki ovqat uchun 5 ta masalliqdan iborat ro'yxat va 3 qadamli retsept yozing.",
};

export default lesson;
