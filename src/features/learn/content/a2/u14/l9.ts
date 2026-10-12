import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u14-l9",
  title: "Choosing a phone: comparing products",
  titleUz: "Telefon tanlash: mahsulotlarni solishtirish",
  mini: true,
  kind: 'situation',
  goal: "Do'konda ikki telefonni (yoki boshqa mahsulotni) solishtirishni o'rganasiz: **qiyosiy va orttirma daraja**, **as ... as** va **too / enough** yordamida narx, ekran, batareya va sifat haqida gapirasiz va tanlovingizni tushuntirasiz.",
  slides: [
    {
      title: "Dialog: do'konda",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Aziz", en: "Excuse me, I want a new phone. What's the difference between these two?", uz: "Kechirasiz, menga yangi telefon kerak. Bu ikkisining farqi nima?" },
            { who: "Seller", en: "The Nova has a bigger screen, and its battery is better. The Zed is cheaper, but the camera isn't as good.", uz: "Novaning ekrani kattaroq, batareyasi ham yaxshiroq. Zed arzonroq, lekin kamerasi unchalik yaxshi emas." },
            { who: "Aziz", en: "Is the Nova the most expensive phone in the shop?", uz: "Nova do'kondagi eng qimmat telefonmi?" },
            { who: "Seller", en: "No, it isn't. It's not too expensive, and it's a very popular brand.", uz: "Yo'q. U juda qimmat emas va juda mashhur brend." },
            { who: "Aziz", en: "Hmm, the Zed is lighter, but the screen is too small for me. I'll take the Nova.", uz: "Hmm, Zed yengilroq, lekin ekrani men uchun juda kichik. Novani olaman." },
          ],
        },
        { t: "check", ex: { k: "tf", q: "The Zed has a better camera than the Nova.", a: false, why: "*The Zed is cheaper, but the camera isn't as good.*" } },
        { t: "check", ex: { k: "choice", q: "Why does Aziz choose the Nova?", opts: ["The Zed's screen is too small.", "The Nova is cheaper.", "The Zed is heavier.", "The Nova is the cheapest."], a: 0, why: "*The screen is too small for me.*" } },
      ],
    },
    {
      title: "Mahsulotlarni solishtirish",
      blocks: [
        { t: "p", md: "Mahsulot tanlaganda to'rtta qolipdan foydalanasiz:" },
        {
          t: "examples", items: [
            { en: "The Nova's battery is better than the Zed's.", uz: "Novaning batareyasi Zednikidan yaxshiroq.", note: "ikki narsa → **qiyosiy + than**" },
            { en: "It's the most popular brand in Uzbekistan.", uz: "Bu O'zbekistondagi eng mashhur brend.", note: "uch va undan ortiq → **the + orttirma**" },
            { en: "The Zed's camera isn't as good as the Nova's.", uz: "Zedning kamerasi Novaning kamerasichalik yaxshi emas.", note: "**not as ... as**" },
            { en: "This phone is too expensive, and that charger isn't cheap enough.", uz: "Bu telefon juda qimmat, anavi zaryadlagich esa yetarlicha arzon emas.", note: "**too** / **enough**" },
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["The Nova is more expensive than the Zed.", "The Zed isn't as big as the Nova.", "The screen is big enough."] },
          bad: { title: "Xato", items: ["The Nova is more expensive then the Zed.", "The Zed isn't so bigger as the Nova.", "The screen is enough big."] },
        },
        { t: "check", ex: { k: "fill", q: "The Zed is ___ than the Nova. (cheap)", a: ["cheaper"], why: "*cheap* → **cheaper** + than." } },
        { t: "check", ex: { k: "choice", q: "\"Bu men ko'rgan eng yaxshi ekran.\"", opts: ["It's the best screen I've ever seen.", "It's the better screen I've ever seen.", "It's best screen I've ever seen.", "It's the most good screen I've ever seen."], a: 0, why: "**the best** + *I've ever seen*." } },
      ],
    },
    {
      title: "Tanlovni tushuntirish",
      blocks: [
        { t: "p", md: "Tanlovingizni **because** bilan tushuntiring va ikki jumlani **but** yoki **however** bilan bog'lang:" },
        {
          t: "examples", items: [
            { en: "I'll take the Nova because the screen is bigger.", uz: "Men Novani olaman, chunki ekrani kattaroq." },
            { en: "The Zed is cheaper. However, the battery isn't good enough.", uz: "Zed arzonroq. Biroq batareyasi yetarlicha yaxshi emas." },
            { en: "Both phones are good, but the Nova is the best.", uz: "Ikkala telefon ham yaxshi, lekin Nova eng yaxshisi." },
          ],
        },
        { t: "check", ex: { k: "fill", q: "I'll take this one ___ it is lighter. (chunki)", a: ["because"] } },
        { t: "check", ex: { k: "choice", q: "\"Zed arzon. Biroq u juda kichik.\"", opts: ["The Zed is cheap. However, it is too small.", "The Zed is cheap. However, it is enough small.", "The Zed is cheap, however it small.", "The Zed is cheap. However, too small."], a: 0 } },
      ],
    },
  ],
  words: [
    { en: "battery", uz: "batareya", ipa: "ˈbætəri", pos: "noun", ex: "The battery lasts two days.", exUz: "Batareya ikki kun yetadi." },
    { en: "screen", uz: "ekran", ipa: "skriːn", pos: "noun", ex: "I want a bigger screen.", exUz: "Men kattaroq ekran xohlayman." },
    { en: "brand", uz: "brend, marka", ipa: "brænd", pos: "noun", ex: "It's a famous brand.", exUz: "Bu mashhur brend." },
    { en: "charger", uz: "zaryadlagich", ipa: "ˈtʃɑːdʒə", pos: "noun", ex: "My charger is too short.", exUz: "Mening zaryadlagichim juda qisqa." },
    { en: "discount", uz: "chegirma", ipa: "ˈdɪskaʊnt", pos: "noun", ex: "There is a ten percent discount today.", exUz: "Bugun o'n foiz chegirma bor." },
    { en: "lightweight", uz: "yengil (vazni kam)", ipa: "ˈlaɪtweɪt", pos: "adj", ex: "This laptop is very lightweight.", exUz: "Bu noutbuk juda yengil." },
  ],
  practice: [
    { k: "match", pairs: [["battery", "batareya"], ["screen", "ekran"], ["brand", "brend, marka"], ["charger", "zaryadlagich"], ["discount", "chegirma"]] },
    { k: "choice", q: "The Nova has a ___ screen than the Zed.", opts: ["bigger", "more big", "biggest", "the bigger"], a: 0 },
    { k: "choice", q: "This is ___ phone in the shop. All the others are cheaper.", opts: ["the most expensive", "more expensive", "the expensivest", "most expensive than"], a: 0 },
    { k: "fill", q: "This phone is as good ___ that one.", a: ["as"] },
    { k: "fill", q: "The battery is big ___ for two days. (yetarli)", a: ["enough"], why: "Sifatdan keyin: **big enough**." },
    { k: "fill", q: "The Zed is ___ for me. I can't read the small letters. (too/enough + small)", a: ["too small"], why: "Muammo bor → **too small**." },
    { k: "listen", say: "Is this the cheapest phone in the shop?", opts: ["Is this the cheapest phone in the shop?", "Is this cheaper phone in the shop?", "Is this the cheapest phone of the shop?"], a: 0 },
    { k: "tf", q: "**The Zed is more cheap than the Nova.** — to'g'ri gap.", a: false, why: "**cheaper** (qisqa sifat: -er)." },
    { k: "fix", wrong: "The Zed isn't as good then the Nova.", a: ["The Zed isn't as good as the Nova.", "The Zed is not as good as the Nova."], why: "*not as good **as***." },
    { k: "order", uz: "Bu telefonning batareyasi yaxshiroq.", words: ["This", "phone", "has", "a", "better", "battery."], extra: ["best", "then"] },
    { k: "order", uz: "Bu zaryadlagich juda qimmat.", words: ["This", "charger", "is", "too", "expensive."], extra: ["enough", "much"] },
    { k: "translate", uz: "Novaning ekrani Zednikidan kattaroq.", a: ["The Nova's screen is bigger than the Zed's.", "The Nova has a bigger screen than the Zed.", "The screen of the Nova is bigger than the Zed's.", "Nova's screen is bigger than Zed's."] },
    { k: "translate", uz: "Bu telefon men uchun juda og'ir.", a: ["This phone is too heavy for me.", "The phone is too heavy for me.", "This phone is too heavy for me."] },
    { k: "speak", say: "The Nova is more expensive, but the battery is better.", uz: "Nova qimmatroq, lekin batareyasi yaxshiroq." },
  ],
  quiz: [
    { k: "choice", q: "My old phone isn't ___ fast as this one.", opts: ["as", "so than", "more", "enough"], a: 0 },
    { k: "choice", q: "\"Menda yangi telefon uchun pul yetarli emas.\"", opts: ["I don't have enough money for a new phone.", "I have enough no money for a new phone.", "I don't have money enough too for a new phone.", "I have too money for a new phone."], a: 0 },
    { k: "choice", q: "Which sentence is correct?", opts: ["The Zed is the cheapest of the three phones.", "The Zed is the most cheap of the three phones.", "The Zed is more cheap of the three phones.", "The Zed is the cheaper of the three phones."], a: 0 },
    { k: "choice", q: "There is a ___ on this phone today. It costs less.", opts: ["discount", "battery", "charger", "screen"], a: 0 },
    { k: "fill", q: "This laptop is ___ than my old one. (light)", a: ["lighter"] },
    { k: "fill", q: "It's the ___ phone I've ever had. (good)", a: ["best"] },
    { k: "listen", say: "The screen is too small for me.", opts: ["The screen is too small for me.", "The screen is small enough for me.", "The screen is smaller for me."], a: 0 },
    { k: "translate", uz: "Bu telefon anavidek qimmat emas.", a: ["This phone isn't as expensive as that one.", "This phone is not as expensive as that one.", "This phone isn't as expensive as that phone.", "This phone is not as expensive as that phone."] },
  ],
  summary: [
    "**Ikki** mahsulot: *qiyosiy + than* (*The Nova is bigger than the Zed*). **Uch va ko'p**: *the + orttirma* (*the cheapest*).",
    "**as ... as** teng, **not as ... as** kamroq: *The Zed isn't as good as the Nova.*",
    "**too + sifat** — muammo (*too small*); **sifat + enough** — yetarli (*big enough*).",
    "Yangi so'zlar: *battery, screen, brand, charger, discount, lightweight*.",
  ],
  homework: "Uyingizdagi yoki do'konda ko'rgan ikkita mahsulotni (telefon, noutbuk, sumka) tanlang va ularni solishtiring: narx, o'lcham, sifat haqida 6 ta gap yozing (*than, the most, as ... as, too, enough*) va ovoz chiqarib o'qing.",
};

export default lesson;
