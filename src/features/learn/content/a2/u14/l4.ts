import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u14-l4",
  title: "Too and enough",
  titleUz: "Too va enough, too much / too many",
  goal: "**too** (me'yoridan ortiq, muammo) va **enough** (yetarli) so'zlarini to'g'ri o'rinda ishlatasiz: **too hot**, **big enough**, **enough money**, **too much sugar**, **too many people**, **too tired to study**. *too much hot*, *enough big*, *too many money* kabi xatolarni tuzatasiz.",
  slides: [
    {
      title: "too: me'yoridan ortiq",
      blocks: [
        { t: "p", md: "**too** + sifat / ravish = \"juda ... (ortiqcha, shuning uchun yomon)\". U doim **muammoni** bildiradi. **very** esa shunchaki \"juda\", muammo yo'q:" },
        {
          t: "table", head: ["very (oddiy fakt)", "too (muammo)"], speak: [0, 1],
          rows: [
            ["The tea is very hot. (Ichsa bo'ladi.)", "The tea is too hot. (Ichib bo'lmaydi!)"],
            ["This bag is very big.", "This bag is too big for me."],
            ["He drives very fast.", "He drives too fast. It's dangerous."],
          ],
        },
        { t: "p", md: "Qolip: **too + sifat** (+ **for** kim?) (+ **to** + fe'l):" },
        {
          t: "examples", items: [
            { en: "It's too hot to play football today.", uz: "Bugun futbol o'ynash uchun juda issiq." },
            { en: "This soup is too salty for me.", uz: "Bu sho'rva men uchun juda sho'r." },
            { en: "I'm too tired to study.", uz: "Men o'qiy olmaydigan darajada charchaganman." },
          ],
        },
        { t: "tip", tone: "warn", md: "❌ *too much hot* — xato! **too much** faqat ot bilan: *too much sugar*. Sifat bilan faqat **too**: ✅ *too hot*." },
        { t: "check", ex: { k: "choice", q: "\"Bu sho'rva juda issiq, ichib bo'lmaydi.\"", opts: ["This soup is too much hot.", "This soup is too hot.", "This soup is very hot to drink.", "This soup is hot too."], a: 1, why: "**too + sifat**." } },
      ],
    },
    {
      title: "enough: yetarli",
      blocks: [
        { t: "p", md: "**enough** = yetarli. Uning o'rni so'z turiga bog'liq: **sifat + enough**, lekin **enough + ot**:" },
        {
          t: "table", head: ["Qolip", "Misol", "Ma'nosi"], speak: [1],
          rows: [
            ["sifat / ravish + **enough**", "The room is big enough.", "Xona yetarlicha katta."],
            ["**enough** + ot", "We have enough chairs.", "Bizda stullar yetarli."],
            ["**not** + sifat + **enough**", "The room isn't big enough.", "Xona yetarlicha katta emas."],
            ["**not enough** + ot", "We don't have enough money.", "Bizda pul yetarli emas."],
          ],
        },
        { t: "p", md: "Ham **enough ... to** + fe'l bilan ishlatiladi:" },
        {
          t: "examples", items: [
            { en: "Are you old enough to drive?", uz: "Mashina haydash uchun yoshing yetarlimi?" },
            { en: "I don't have enough time to cook.", uz: "Pishirishga vaqtim yetmaydi." },
            { en: "She isn't tall enough to reach the shelf.", uz: "U javonga yetadigan darajada baland emas." },
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["The room is big enough.", "I have enough money.", "He is strong enough."] },
          bad: { title: "Xato", items: ["The room is enough big.", "I have money enough.", "He is enough strong."] },
        },
        { t: "tip", tone: "info", md: "Eslab qoling: **sifatdan KEYIN** (*big enough*), **otdan OLDIN** (*enough money*)." },
        { t: "check", ex: { k: "choice", q: "\"Bizda yetarlicha vaqt bor.\"", opts: ["We have time enough.", "We have enough time.", "We have enough of time.", "We have time too."], a: 1, why: "**enough + ot**: *enough time*." } },
        { t: "check", ex: { k: "fill", q: "Is your phone fast ___ for this game?", a: ["enough"], why: "Sifatdan keyin: **fast enough**." } },
      ],
    },
    {
      title: "too much yoki too many?",
      blocks: [
        { t: "p", md: "Ot bilan \"juda ko'p\" deganda ham **too** ishlatamiz, lekin otning turiga qarab:" },
        {
          t: "table", head: ["Ot turi", "Qolip", "Misol"], speak: [2],
          rows: [
            ["Sanalmaydigan (water, sugar, time, money, traffic)", "**too much**", "There is too much traffic in the centre."],
            ["Sanaladigan, ko'plik (people, cars, chairs)", "**too many**", "There are too many cars on the road."],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["too much sugar", "too many people", "too much homework", "too many mistakes"] },
          bad: { title: "Xato", items: ["too many sugar", "too much people", "too many homework", "too much mistakes"] },
        },
        { t: "tip", tone: "info", md: "**enough** esa ikkala turdagi otlar bilan ishlatiladi: *enough water, enough chairs*. **not enough** — yetarli emas, **too little / too few** — juda oz (*too little time, too few chairs*)." },
        { t: "tip", tone: "warn", md: "**much / many** haqida: *homework, advice, information, traffic, money* sanalmaydi (o'zbekchada sanalganidek tuyulsa ham) — *too much homework*, *too much money*." },
        { t: "check", ex: { k: "choice", q: "There are ___ students in this class. We need a bigger room.", opts: ["too much", "too many", "too", "enough of"], a: 1, why: "*students* — sanaladi → **too many**." } },
        { t: "check", ex: { k: "choice", q: "I drink ___ coffee. It's bad for me.", opts: ["too much", "too many", "too", "much too many"], a: 0, why: "*coffee* — sanalmaydi → **too much**." } },
      ],
    },
    {
      title: "Tipik xatolar va too ... to",
      blocks: [
        { t: "p", md: "**too ... to** va **not ... enough to** bir xil ma'noni berishi mumkin:" },
        {
          t: "table", head: ["too ... to", "not ... enough to"], speak: [0, 1],
          rows: [
            ["He is too young to drive.", "He isn't old enough to drive."],
            ["It's too cold to swim.", "It isn't warm enough to swim."],
            ["The bag is too heavy to carry.", "The bag isn't light enough to carry."],
          ],
        },
        { t: "tip", tone: "warn", md: "Sifat **teskari** bo'ladi: *too young* = *not old enough*; *too cold* = *not warm enough*." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["It's too late.", "I'm too tired to go out.", "This coat is too small for me."] },
          bad: { title: "Xato", items: ["It's too much late.", "I'm too tired for go out.", "This coat is too small to me."] },
        },
        { t: "tip", tone: "info", md: "**too** gap oxirida ham keladi va \"ham\" degan boshqa ma'noni beradi: *I'm hungry, too.* Bu yerda \"juda\" emas. Farqini kontekstdan bilasiz." },
        { t: "check", ex: { k: "fill", q: "My sister is too young ___ drive a car.", a: ["to"], why: "**too + sifat + to + fe'l**." } },
        { t: "check", ex: { k: "tf", q: "**It's too cold to swim** = It isn't warm enough to swim.", a: true, why: "*too cold* ≈ *not warm enough*." } },
      ],
    },
    {
      title: "O'qing: Kichkina kvartira",
      blocks: [
        {
          t: "text", title: "A small flat",
          en: "Kamol and Dilnoza are looking for a flat in Tashkent. The first flat is in the centre, but it is too small. It has only one bedroom, and there isn't enough space for a table. The second flat is big enough, but it is too far from the metro, and there is too much noise from the road. \"There are too many cars here,\" says Dilnoza. The third flat is not too expensive, and it is quiet. But the kitchen is too dark. \"I can't cook here,\" says Kamol. In the end, they choose the second flat. \"It isn't perfect,\" says Dilnoza, \"but we have enough money for it and it is big enough for our family.\"",
          uz: "Kamol va Dilnoza Toshkentda kvartira qidirishyapti. Birinchi kvartira markazda, lekin juda kichik. Unda faqat bitta yotoqxona bor, stol qo'yishga joy yetmaydi. Ikkinchi kvartira yetarlicha katta, lekin metrodan juda uzoq va ko'chadan shovqin haddan ziyod. \"Bu yerda mashinalar juda ko'p,\" deydi Dilnoza. Uchinchi kvartira unchalik qimmat emas va sokin. Lekin oshxonasi juda qorong'i. \"Bu yerda ovqat pishira olmayman,\" deydi Kamol. Oxirida ular ikkinchi kvartirani tanlashadi. \"U mukammal emas,\" deydi Dilnoza, \"lekin pulimiz yetadi va oilamiz uchun yetarlicha katta.\"",
        },
        { t: "check", ex: { k: "choice", q: "What is the problem with the first flat?", opts: ["It is too small.", "It is too dark.", "It is too far from the metro.", "It is too expensive."], a: 0, why: "*The first flat ... is too small.*" } },
        { t: "check", ex: { k: "tf", q: "The second flat is too small for the family.", a: false, why: "*It is big enough for our family.*" } },
      ],
    },
    {
      title: "Dialog: restoranda",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Waiter", en: "How is your soup?", uz: "Sho'rvangiz qalay?" },
            { who: "Aziz", en: "It's too spicy for me, and it's not hot enough.", uz: "Men uchun juda achchiq, va yetarlicha issiq ham emas." },
            { who: "Waiter", en: "I'm sorry. I'll bring you another one. Do you want some bread?", uz: "Kechirasiz. Boshqasini olib kelaman. Non xohlaysizmi?" },
            { who: "Aziz", en: "Yes, please. And can I have a little water? There is too much salt in the salad.", uz: "Ha, iltimos. Va ozgina suv olsam bo'ladimi? Salatda tuz haddan ziyod." },
            { who: "Laylo", en: "Your problem is that you add too many spices!", uz: "Sening muammong shuki, sen juda ko'p ziravor solasan!" },
            { who: "Aziz", en: "No, I don't! The cook puts too many in!", uz: "Yo'q, solmayman! Oshpaz juda ko'p soladi!" },
          ],
        },
        { t: "check", ex: { k: "choice", q: "What is wrong with Aziz's soup?", opts: ["It is too spicy and not hot enough.", "It is too cold and too sweet.", "It is too big.", "There is not enough salt."], a: 0, why: "*It's too spicy for me, and it's not hot enough.*" } },
      ],
    },
  ],
  words: [
    { en: "spicy", uz: "achchiq (ziravorli)", ipa: "ˈspaɪsi", pos: "adj", ex: "I don't like spicy food.", exUz: "Men achchiq ovqatni yoqtirmayman." },
    { en: "salty", uz: "sho'r", ipa: "ˈsɔːlti", pos: "adj", ex: "The soup is too salty.", exUz: "Sho'rva juda sho'r." },
    { en: "tight", uz: "tor (kiyim)", ipa: "taɪt", pos: "adj", ex: "These shoes are too tight.", exUz: "Bu poyabzal juda tor." },
    { en: "loose", uz: "keng (kiyim)", ipa: "luːs", pos: "adj", ex: "The jacket is a bit loose.", exUz: "Kurtka biroz keng." },
    { en: "crowded", uz: "gavjum, odam ko'p", ipa: "ˈkraʊdɪd", pos: "adj", ex: "The bus was too crowded.", exUz: "Avtobus juda gavjum edi." },
    { en: "afford", uz: "(puli) yetmoq, ega bo'la olmoq", ipa: "əˈfɔːd", pos: "verb", ex: "I can't afford a new car.", exUz: "Yangi mashina olishga pulim yetmaydi." },
    { en: "plenty of", uz: "yetarli darajada ko'p", ipa: "ˈplenti əv", pos: "phrase", ex: "We have plenty of time.", exUz: "Bizda vaqt yetarlicha." },
    { en: "enough", uz: "yetarli", ipa: "ɪˈnʌf", pos: "adj", ex: "Is there enough water?", exUz: "Suv yetarlimi?" },
    { en: "exhausted", uz: "juda charchagan", ipa: "ɪɡˈzɔːstɪd", pos: "adj", ex: "I'm too exhausted to cook.", exUz: "Ovqat pishirishga juda charchaganman." },
    { en: "cramped", uz: "tor, siqiq (joy)", ipa: "kræmpt", pos: "adj", ex: "Our flat is cramped.", exUz: "Kvartiramiz tor." },
  ],
  practice: [
    { k: "match", pairs: [["too hot", "juda issiq (muammo)"], ["big enough", "yetarlicha katta"], ["too much", "juda ko'p (sanalmaydigan)"], ["too many", "juda ko'p (sanaladigan)"], ["not enough", "yetarli emas"]] },
    { k: "match", pairs: [["spicy", "achchiq"], ["salty", "sho'r"], ["tight", "tor (kiyim)"], ["loose", "keng (kiyim)"], ["crowded", "gavjum"]] },
    { k: "listen", say: "It's too cold to swim today.", opts: ["It's too cold to swim today.", "It's cold enough to swim today.", "It's not too cold to swim today."], a: 0 },
    { k: "listen", say: "We don't have enough money.", opts: ["We don't have enough money.", "We don't have much money.", "We have too much money."], a: 0 },
    { k: "fill", q: "This coat is ___ small for me. I need a bigger one.", a: ["too"], why: "Muammo → **too small**." },
    { k: "fill", q: "There are ___ people on the bus. I can't sit down.", a: ["too many"], why: "*people* sanaladi → **too many**." },
    { k: "fill", q: "I put ___ much sugar in my tea.", a: ["too"], why: "**too much** sugar." },
    { k: "fill", q: "The room is big ___ for ten people.", a: ["enough"], why: "Sifatdan keyin: **big enough**." },
    { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["He is enough old to drive.", "He is old enough to drive.", "He is too old enough to drive.", "He is old too to drive."], a: 1, why: "**sifat + enough + to**." },
    { k: "choice", q: "I can't sleep. There is ___ noise outside.", opts: ["too many", "too much", "too", "much too many"], a: 1, why: "*noise* — sanalmaydi → **too much**." },
    { k: "tf", q: "**too much hot** — to'g'ri ibora.", a: false, why: "Sifat bilan faqat **too**: *too hot*." },
    { k: "tf", q: "**I don't have enough time** = Menda vaqt yetarli emas.", a: true },
    { k: "order", uz: "Bu sho'rva men uchun juda sho'r.", words: ["This", "soup", "is", "too", "salty", "for", "me."], extra: ["much", "enough"] },
    { k: "translate", uz: "Bizda yetarlicha pul bor.", a: ["We have enough money.", "We've got enough money.", "We have got enough money."] },
    { k: "speak", say: "The flat is big enough, but it's too far from the metro.", uz: "Kvartira yetarlicha katta, lekin metrodan juda uzoq." },
  ],
  quiz: [
    { k: "choice", q: "\"Poyabzalim juda tor.\"", opts: ["My shoes are too much tight.", "My shoes are too tight.", "My shoes are enough tight.", "My shoes are tight too much."], a: 1, why: "**too + sifat**." },
    { k: "choice", q: "There are ___ mistakes in your essay.", opts: ["too much", "too many", "too", "enough of"], a: 1, why: "*mistakes* sanaladi → **too many**." },
    { k: "choice", q: "\"Menda ishlash uchun yetarli vaqt yo'q.\"", opts: ["I don't have time enough to work.", "I don't have enough time to work.", "I have not enough of time to work.", "I don't have too time to work."], a: 1 },
    { k: "fill", q: "She isn't tall ___ to reach the top shelf.", a: ["enough"], why: "**tall enough to**." },
    { k: "fill", q: "I'm too tired ___ do my homework.", a: ["to"], why: "**too + sifat + to + fe'l**." },
    { k: "fill", q: "We have ___ chairs for everybody. (yetarlicha)", a: ["enough"] },
    { k: "listen", say: "The bus was too crowded.", opts: ["The bus was too crowded.", "The bus was crowded enough.", "The bus was not crowded."], a: 0 },
    { k: "tf", q: "**He is too young to drive** = He isn't old enough to drive.", a: true },
    { k: "order", uz: "Bu sumka men uchun juda og'ir.", words: ["This", "bag", "is", "too", "heavy", "for", "me."], extra: ["many", "enough"] },
    { k: "translate", uz: "Bu yerda mashinalar juda ko'p.", a: ["There are too many cars here.", "There are too many cars.", "There are too many cars in this place."] },
  ],
  summary: [
    "**too + sifat** — me'yoridan ortiq, muammo: *too hot, too small*. **very** esa shunchaki \"juda\" (muammo yo'q).",
    "**sifat + enough** (*big enough*), lekin **enough + ot** (*enough money*). ❌ *enough big*.",
    "**too much** + sanalmaydigan ot (*sugar, time, traffic*); **too many** + sanaladigan ko'plik ot (*people, cars*). ❌ *too much hot*.",
    "**too / enough + to + fe'l**: *too tired to study*, *old enough to drive*. *too young* = *not old enough*.",
  ],
  homework: "Uyingiz, ko'changiz yoki ish joyingiz haqida 8 ta gap yozing: 2 ta **too + sifat**, 2 ta **enough**, 2 ta **too much**, 2 ta **too many**. Masalan: *There is too much traffic near my house. The park is big enough for a football game.*",
};

export default lesson;
