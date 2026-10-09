import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u14-l8",
  title: "Unit review: comparing",
  titleUz: "Bosqich takrori: taqqoslash",
  goal: "Butun bosqichni takrorlaysiz: **qiyosiy va orttirma daraja**, **as ... as**, **too / enough**, **ravishlar**, **odamlarni tasvirlash** va **shaharlarni solishtirish**. Aralash mashqlar orqali xatolaringizni topasiz va taqqoslash haqida erkin gapirishga tayyor bo'lasiz.",
  slides: [
    {
      title: "Takror: qiyosiy va orttirma daraja",
      blocks: [
        { t: "p", md: "Qisqa takror. **Ikki** narsa → qiyosiy daraja + **than**. **Uch va undan ortiq** → **the** + orttirma daraja:" },
        {
          t: "table", head: ["Sifat", "Qiyosiy (than)", "Orttirma (the)"], speak: [1, 2],
          rows: [
            ["tall", "taller", "the tallest"],
            ["big", "bigger", "the biggest"],
            ["easy", "easier", "the easiest"],
            ["expensive", "more expensive", "the most expensive"],
            ["good", "better", "the best"],
            ["bad", "worse", "the worst"],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["Aziz is taller than Kamol.", "She is the best student in the class.", "It is one of the oldest cities in Asia."] },
          bad: { title: "Xato", items: ["Aziz is more taller then Kamol.", "She is best student of the class.", "It is one of the oldest city in Asia."] },
        },
        { t: "check", ex: { k: "choice", q: "\"Bu men ko'rgan eng yaxshi film.\"", opts: ["This is the best film I've ever seen.", "This is the better film I've ever seen.", "This is best film I've ever seen.", "This is the most good film I've ever seen."], a: 0, why: "**the best** + *I've ever seen*." } },
        { t: "check", ex: { k: "fill", q: "The metro is ___ than the bus. (fast)", a: ["faster"], why: "*fast* → **faster** (+ **than**)." } },
      ],
    },
    {
      title: "Takror: as ... as, the same as, different from",
      blocks: [
        {
          t: "table", head: ["Qolip", "Misol"], speak: [1],
          rows: [
            ["as + sifat + as (teng)", "Laylo is as tall as Dilnoza."],
            ["not as + sifat + as (kam)", "Bukhara isn't as big as Tashkent."],
            ["the same as", "My phone is the same as yours."],
            ["different from", "Life here is different from life there."],
            ["similar to / look like", "She looks like her mother."],
          ],
        },
        { t: "tip", tone: "warn", md: "❌ *the same with*, ❌ *different with*, ❌ *as taller as*. ✅ *the same as*, ✅ *different from*, ✅ *as tall as*." },
        { t: "check", ex: { k: "choice", q: "\"Mening kitobim seniknidek.\"", opts: ["My book is same with yours.", "My book is the same as yours.", "My book is as same like yours.", "My book is the same with yours."], a: 1 } },
        { t: "check", ex: { k: "tf", q: "**This test isn't as hard as the last one** = The last test was harder.", a: true } },
      ],
    },
    {
      title: "Takror: too va enough",
      blocks: [
        {
          t: "table", head: ["Qolip", "Misol"], speak: [1],
          rows: [
            ["too + sifat (muammo)", "It's too hot to play football."],
            ["sifat + enough", "Is the room big enough?"],
            ["enough + ot", "We have enough chairs."],
            ["too much + sanalmaydigan ot", "There is too much traffic."],
            ["too many + sanaladigan ot", "There are too many cars."],
          ],
        },
        { t: "tip", tone: "warn", md: "❌ *too much hot*, ❌ *enough big*, ❌ *too many money*. ✅ *too hot*, ✅ *big enough*, ✅ *too much money*." },
        { t: "check", ex: { k: "choice", q: "I can't buy it. I don't have ___ money.", opts: ["enough", "too", "many", "much enough"], a: 0 } },
        { t: "check", ex: { k: "fill", q: "There are ___ people on the bus. (too many/too much)", a: ["too many"], why: "*people* sanaladi → **too many**." } },
      ],
    },
    {
      title: "Takror: ravishlar va tasvirlash",
      blocks: [
        {
          t: "table", head: ["Mavzu", "Eslab qoling", "Misol"], speak: [2],
          rows: [
            ["Ravish: sifat + -ly", "slow → slowly, happy → happily", "She walks slowly."],
            ["good → well", "sifat / ravish", "He is a good singer. He sings well."],
            ["bir xil shakl", "hard, fast, early, late", "They work hard."],
            ["Qiyosiy ravish", "faster, harder, better, **more** carefully", "Please drive more carefully."],
            ["be / have", "tashqi ko'rinish", "He is tall. He has dark hair."],
            ["look like / be like", "ko'rinish / xarakter", "What is he like? He's friendly."],
          ],
        },
        { t: "check", ex: { k: "choice", q: "\"U yaxshi gapiradi.\"", opts: ["She speaks good.", "She speaks well.", "She speaks goodly.", "She speaks goodness."], a: 1 } },
        { t: "check", ex: { k: "fill", q: "My sister has ___ curly hair. (uzun jingalak)", a: ["long"], why: "*She has **long** curly hair.*" } },
        { t: "check", ex: { k: "choice", q: "\"Akangning xarakteri qanday?\"", opts: ["What does your brother look like?", "What is your brother like?", "What does your brother like?", "How is your brother like?"], a: 1 } },
      ],
    },
    {
      title: "O'qing: Ikki do'st, ikki yo'l",
      blocks: [
        {
          t: "text", title: "Two friends, two cities",
          en: "Laylo and Dilnoza are old friends, but they live in different cities. Laylo lives in Tashkent, and Dilnoza lives in Bukhara. Laylo says that Tashkent is the best city in Uzbekistan because it has the most shops and the fastest public transport. Dilnoza disagrees. \"Bukhara isn't as big as Tashkent,\" she says, \"but it is much quieter, and the old town is one of the most beautiful places I've ever seen.\" The traffic in Tashkent is worse, and the cost of living is higher, too. On the other hand, there is more nightlife and there are more jobs. The two friends are also very different. Laylo is tall and funny and talks very quickly, while Dilnoza is shorter, shy and speaks more slowly. But they have a lot in common. They are both hard-working, and they both love plov. \"Is it the same as in Bukhara?\" asks Laylo. \"No,\" says Dilnoza, \"it's different, but it isn't better!\"",
          uz: "Laylo va Dilnoza eski do'stlar, lekin ular turli shaharlarda yashaydi. Laylo Toshkentda, Dilnoza esa Buxoroda yashaydi. Laylo Toshkent O'zbekistondagi eng yaxshi shahar deydi, chunki unda do'konlar eng ko'p va jamoat transporti eng tez. Dilnoza rozi emas. \"Buxoro Toshkentchalik katta emas,\" deydi u, \"lekin ancha sokinroq, eski shahar esa men ko'rgan eng go'zal joylardan biri.\" Toshkentda tirbandlik yomonroq va yashash xarajatlari ham yuqoriroq. Boshqa tomondan, u yerda tungi hayot ko'proq va ish o'rinlari ham ko'p. Ikki do'st ham juda farq qiladi. Laylo baland bo'yli, kulgili va juda tez gapiradi, Dilnoza esa pastroq, uyatchan va sekinroq gapiradi. Lekin ularda ko'p umumiy narsa bor. Ikkalasi ham mehnatkash va ikkalasi ham palovni yaxshi ko'radi. \"U Buxorodagi bilan bir xilmi?\" deb so'raydi Laylo. \"Yo'q,\" deydi Dilnoza, \"boshqacha, lekin yaxshiroq emas!\"",
        },
        { t: "check", ex: { k: "tf", q: "Dilnoza lives in a bigger city than Laylo.", a: false, why: "Laylo Toshkentda yashaydi — u kattaroq." } },
        { t: "check", ex: { k: "choice", q: "Who speaks more slowly?", opts: ["Laylo", "Dilnoza", "Both", "Neither"], a: 1, why: "*Dilnoza ... speaks more slowly.*" } },
        { t: "check", ex: { k: "choice", q: "What do they have in common?", opts: ["They are both tall.", "They both live in Tashkent.", "They are hard-working and love plov.", "They are both shy."], a: 2, why: "*They are both hard-working, and they both love plov.*" } },
      ],
    },
    {
      title: "Dialog: kafeda",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Kamol", en: "Which of these two cafes do you prefer?", uz: "Bu ikki kafedan qaysi birini ma'qul ko'rasan?" },
            { who: "Aziz", en: "The new one is more modern, but it's too noisy. The old one is quieter and the food is better.", uz: "Yangisi zamonaviyroq, lekin juda shovqinli. Eskisi sokinroq va ovqati yaxshiroq." },
            { who: "Kamol", en: "Is it as expensive as the new one?", uz: "U ham yangisichalik qimmatmi?" },
            { who: "Aziz", en: "No, it's cheaper. The waiter is very polite, too, and he works hard.", uz: "Yo'q, arzonroq. Ofitsiant ham juda odobli va qattiq ishlaydi." },
            { who: "Kamol", en: "OK, let's go to the old one. I'm too hungry to wait!", uz: "Mayli, eskisiga boramiz. Men kutishga juda ochman!" },
          ],
        },
        { t: "check", ex: { k: "tf", q: "The old cafe is cheaper than the new one.", a: true, why: "*No, it's cheaper.*" } },
      ],
    },
  ],
  words: [
    { en: "both", uz: "ikkalasi ham", ipa: "bəʊθ", pos: "pron", ex: "Both cities are beautiful.", exUz: "Ikkala shahar ham chiroyli." },
    { en: "whereas", uz: "holbuki, esa", ipa: "weərˈæz", pos: "conj", ex: "He is shy, whereas his sister is outgoing.", exUz: "U uyatchan, singlisi esa ochiq." },
    { en: "however", uz: "biroq", ipa: "haʊˈevə", pos: "adv", ex: "It's cheap. However, it's far.", exUz: "Arzon. Biroq uzoq." },
    { en: "prefer", uz: "afzal ko'rmoq", ipa: "prɪˈfɜː", pos: "verb", ex: "I prefer tea to coffee.", exUz: "Men choyni qahvadan afzal ko'raman." },
    { en: "especially", uz: "ayniqsa", ipa: "ɪˈspeʃəli", pos: "adv", ex: "I like fruit, especially apples.", exUz: "Men mevani yoqtiraman, ayniqsa olmani." },
    { en: "although", uz: "garchi", ipa: "ɔːlˈðəʊ", pos: "conj", ex: "Although it's cold, we go out.", exUz: "Sovuq bo'lsa ham, tashqariga chiqamiz." },
    { en: "instead", uz: "o'rniga", ipa: "ɪnˈsted", pos: "adv", ex: "Let's take the metro instead.", exUz: "Keling, o'rniga metroda boraylik." },
    { en: "choose", uz: "tanlamoq", ipa: "tʃuːz", pos: "verb", ex: "It's hard to choose.", exUz: "Tanlash qiyin." },
    { en: "advantage", uz: "afzallik", ipa: "ədˈvɑːntɪdʒ", pos: "noun", ex: "A big advantage is the price.", exUz: "Katta afzalligi narxida." },
    { en: "disadvantage", uz: "kamchilik", ipa: "ˌdɪsədˈvɑːntɪdʒ", pos: "noun", ex: "The only disadvantage is the noise.", exUz: "Yagona kamchiligi shovqin." },
  ],
  practice: [
    { k: "match", pairs: [["good", "better"], ["bad", "worse"], ["fast", "faster"], ["careful", "more careful"], ["easy", "easier"]] },
    { k: "match", pairs: [["advantage", "afzallik"], ["disadvantage", "kamchilik"], ["prefer", "afzal ko'rmoq"], ["choose", "tanlamoq"], ["however", "biroq"]] },
    { k: "listen", say: "This is the most beautiful city I've ever visited.", opts: ["This is the most beautiful city I've ever visited.", "This is a more beautiful city I've ever visited.", "This is the beautiful city I've ever visited."], a: 0 },
    { k: "listen", say: "He is too tired to study.", opts: ["He is too tired to study.", "He is tired enough to study.", "He is not tired to study."], a: 0 },
    { k: "fill", q: "My sister is ___ than me. (tall)", a: ["taller"], why: "*tall* → **taller**." },
    { k: "fill", q: "It was the ___ day of my life! (bad)", a: ["worst"] },
    { k: "fill", q: "Dilnoza isn't as tall ___ Laylo.", a: ["as"] },
    { k: "fill", q: "There are ___ many cars on the road. (juda)", a: ["too"], why: "**too many**." },
    { k: "fill", q: "The flat is big ___ for four people.", a: ["enough"] },
    { k: "fill", q: "He speaks English very ___. (good)", a: ["well"], why: "Fe'ldan keyin: **well**." },
    { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["Tashkent is more bigger than Bukhara.", "Tashkent is bigger than Bukhara.", "Tashkent is more big than Bukhara.", "Tashkent is bigger then Bukhara."], a: 1 },
    { k: "choice", q: "\"U onasiga o'xshaydi.\"", opts: ["She looks like her mother.", "She looks her mother.", "She is like look her mother.", "She looks as her mother."], a: 0 },
    { k: "tf", q: "**She is the most youngest.** — to'g'ri gap.", a: false, why: "**the youngest**." },
    { k: "order", uz: "Samarqand Toshkentdan sokinroq.", words: ["Samarkand", "is", "quieter", "than", "Tashkent."], extra: ["more", "then"] },
    { k: "translate", uz: "U menga o'xshamaydi, lekin u men kabi baland.", a: ["He doesn't look like me, but he is as tall as me.", "She doesn't look like me, but she is as tall as me.", "He doesn't look like me, but he's as tall as me.", "She doesn't look like me, but she's as tall as me.", "He doesn't look like me but he is as tall as me.", "She doesn't look like me but she is as tall as me."] },
    { k: "speak", say: "Tashkent is bigger and busier, while Bukhara is quieter and more traditional.", uz: "Toshkent kattaroq va gavjumroq, Buxoro esa sokinroq va an'anaviyroq." },
  ],
  quiz: [
    { k: "choice", q: "Samarkand is ___ than my village.", opts: ["older", "more old", "oldest", "the oldest"], a: 0 },
    { k: "choice", q: "It's one of the ___ restaurants in town.", opts: ["best", "better", "good", "most good"], a: 0, why: "*one of the best + ko'plik ot*." },
    { k: "choice", q: "This coat is ___ small for me. I need a bigger size.", opts: ["too", "enough", "very enough", "much"], a: 0 },
    { k: "choice", q: "He is a ___ worker. He works ___.", opts: ["hard / hard", "hardly / hardly", "hard / hardly", "hardly / hard"], a: 0, why: "*hard* — sifat ham, ravish ham." },
    { k: "choice", q: "\"Sening sochingga o'xshash.\"", opts: ["It's similar with your hair.", "It's similar to your hair.", "It's similar as your hair.", "It's similar from your hair."], a: 1 },
    { k: "fill", q: "My bag isn't as heavy ___ yours.", a: ["as"] },
    { k: "fill", q: "There isn't ___ time to finish. (yetarli)", a: ["enough"] },
    { k: "fill", q: "Please drive more ___. (careful)", a: ["carefully"] },
    { k: "listen", say: "Her English is better than mine.", opts: ["Her English is better than mine.", "Her English is the best of mine.", "Her English is more good than mine."], a: 0 },
    { k: "tf", q: "**Both of cities are interesting.** — to'g'ri gap.", a: false, why: "**Both cities are interesting.**" },
    { k: "order", uz: "U baland bo'yli va sochi qora.", words: ["She", "is", "tall", "and", "has", "dark", "hair."], extra: ["have", "got"] },
    { k: "translate", uz: "Bu men yegan eng mazali palov.", a: ["This is the most delicious plov I've ever eaten.", "It is the most delicious plov I've ever eaten.", "It's the most delicious plov I've ever eaten.", "This is the most delicious plov I have ever eaten.", "It is the most delicious plov I have ever eaten.", "This is the tastiest plov I've ever eaten.", "It's the tastiest plov I've ever eaten.", "This is the tastiest plov I have ever eaten."] },
  ],
  summary: [
    "**Qiyosiy**: *-er / more + than*; **orttirma**: *the -est / the most*; **good → better → the best**, **bad → worse → the worst**.",
    "**as ... as** (teng), **not as ... as** (kam), **the same as**, **different from**, **similar to**, **look like**.",
    "**too + sifat** (muammo), **sifat + enough**, **enough + ot**, **too much / too many**.",
    "**Ravish**: *-ly*, **well** (≠ good), **hard / fast / early / late**; qiyosiy: *faster, more carefully*. Tartib: fe'l + to'ldiruvchi + ravish.",
    "**Odamlarni tasvirlash**: *is tall*, *has curly hair*, *looks tired*, *What is he like?* **Shaharlarni solishtirish**: *while, whereas, however, both*.",
  ],
  homework: "Bosqichning eng qiyin mavzusini aniqlang va shu mavzu bo'yicha 10 ta gap yozing. Keyin ikki shahar haqida 10 gapli matn yozing (*while, however, both, fewer / less, the most*), uni ovoz chiqarib o'qing va yozib oling. Keyingi bosqichdan oldin bu bosqichning 10 ta so'zini yana bir marta takrorlang.",
};

export default lesson;
