import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u8-l8",
  title: "Comparing: better, the best, as… as",
  titleUz: "Qiyoslash: better, the best, as… as",
  goal: "Ovqat, narx va joylarni chuqurroq qiyoslaysiz: **much cheaper, a bit spicier than me**, tenglik va farq: **as tasty as / not as fresh as**, eng zo'ri: **the best plov in town**. Ta'm sifatlarini (**sweet, sour, salty, spicy, juicy…**) bilasiz.",
  slides: [
    {
      title: "Takrorlash: -er / more, imlo qoidalari",
      blocks: [
        { t: "p", md: "Beginner'da *bigger, the biggest, more difficult* ni o'rgandik. Bugun ta'm sifatlari bilan mashq qilamiz va imloni mustahkamlaymiz:" },
        {
          t: "table", head: ["Sifat", "Qiyosiy", "Orttirma", "Qoida"],
          rows: [
            ["fresh", "fresher", "the freshest", "+ er / est"],
            ["hot", "hotter", "the hottest", "unli + undosh → undosh ikkilanadi"],
            ["tasty", "tastier", "the tastiest", "-y → -ier / -iest"],
            ["spicy", "spicier", "the spiciest", "-y → -ier / -iest"],
            ["delicious", "more delicious", "the most delicious", "uzun sifat → more / most"],
            ["good", "better", "the best", "istisno"],
            ["bad", "worse", "the worst", "istisno"],
          ],
          speak: [0, 1, 2],
        },
        { t: "tip", tone: "warn", md: "**more** va **-er** hech qachon birga kelmaydi: *more tastier* ❌, *more better* ❌. **than** — \"…dan\": *Plov is tastier **than** pasta.* (*that* ❌, *then* ❌)" },
        { t: "check", ex: { k: "choice", q: "Chillies are ___ than tomatoes.", opts: ["spicier", "spicyer", "more spicier", "spicy"], a: 0, why: "**spicy → spicier** (-y → -ier)." } },
      ],
    },
    {
      title: "much / a bit + qiyosiy; than me",
      blocks: [
        { t: "p", md: "Farq **katta** yoki **kichik** ekanini aytish uchun qiyosiy daraja oldidan **much / a lot** (ancha) yoki **a bit / a little** (biroz) qo'yamiz:" },
        {
          t: "examples", items: [
            { en: "The bazaar is much cheaper than the supermarket.", uz: "Bozor supermarketdan ancha arzon." },
            { en: "This melon is a bit sweeter than that one.", uz: "Bu qovun unisidan biroz shirinroq." },
            { en: "Taxis are a lot more expensive than buses.", uz: "Taksi avtobusdan ancha qimmat." },
            { en: "My sister cooks better than me.", uz: "Opam mendan yaxshiroq ovqat qiladi.", note: "**than me** (og'zaki) = *than I do*" },
          ],
        },
        { t: "tip", tone: "warn", md: "Qiyosiy daraja bilan **very** ishlatilmaydi! *very cheaper* ❌ → **much cheaper** ✅.\n**than** dan keyin olmosh — **me, him, her, us, them**: *She's taller than **me**.* yoki to'liq: *than I am*." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["much cheaper", "a bit more expensive", "He's older than me."] },
          bad: { title: "Xato", items: ["very cheaper", "a bit expensiver", "He's older that me."] },
        },
        { t: "check", ex: { k: "choice", q: "This café is ___ than that one.", opts: ["much cheaper", "very cheaper", "more cheaper", "much cheap"], a: 0, why: "Qiyosiy daraja oldidan **much**, *very* emas." } },
      ],
    },
    {
      title: "as … as — bir xil; not as … as — kamroq",
      blocks: [
        { t: "p", md: "Ikki narsa **teng** bo'lsa — **as + sifat (oddiy shakl) + as**. Teng **bo'lmasa** — **not as … as**:" },
        {
          t: "table", head: ["Gap", "Ma'nosi"],
          rows: [
            ["Samarkand bread is as soft as Tashkent bread.", "Ikkalasi bir xil yumshoq."],
            ["This tea is as sweet as honey!", "Bu choy asaldek shirin!"],
            ["Cola isn't as healthy as juice.", "Kola sharbatchalik foydali emas (= Juice is healthier)."],
            ["The supermarket isn't as cheap as the bazaar.", "Supermarket bozorchalik arzon emas."],
          ],
          speak: [0],
        },
        { t: "tip", tone: "info", md: "**as … as** ichida sifat **o'zgarmaydi**: *as tasty as* ✅, *as tastier as* ❌.\n**not as … as** — ko'pincha *-er than* dan yumshoqroq eshitiladi: *My plov isn't as good as yours* (muloyim) = *Your plov is better than mine*." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["as good as", "not as cheap as", "as spicy as"] },
          bad: { title: "Xato", items: ["as better as", "not as cheap than", "so spicy than"] },
        },
        { t: "check", ex: { k: "fill", q: "Tea isn't as sweet ___ cola.", a: ["as"], uz: "Choy kolachalik shirin emas.", why: "**not as … as** — ikkala tomonda ham **as**." } },
      ],
    },
    {
      title: "the best … in / of",
      blocks: [
        { t: "p", md: "Orttirma daraja — **the + -est / the most / the best**. Joydan keyin **in**, guruhdan keyin **of**:" },
        {
          t: "examples", items: [
            { en: "This is the best plov in Tashkent.", uz: "Bu — Toshkentdagi eng zo'r palov.", note: "joy → **in**" },
            { en: "Saturday is the busiest day of the week at the bazaar.", uz: "Shanba — bozorda haftaning eng gavjum kuni.", note: "guruh/davr → **of**" },
            { en: "Which is the cheapest of these three phones?", uz: "Bu uchta telefondan qaysi biri eng arzon?" },
            { en: "It's the most delicious cake in the café.", uz: "Bu — kafedagi eng mazali tort." },
          ],
        },
        { t: "tip", tone: "warn", md: "O'zbek tilida so'zlashuvchilarning tipik xatosi — **the** ni tushirib qoldirish: *It's best café* ❌ → *It's **the** best café* ✅. Va *the best café **of** Tashkent* emas, **in** Tashkent." },
        { t: "check", ex: { k: "choice", q: "\"Bu — shahardagi eng arzon do'kon.\"", opts: ["It's the cheapest shop in the city.", "It's cheapest shop in the city.", "It's the cheapest shop of the city.", "It's the most cheap shop in the city."], a: 0, why: "**the** + **cheapest** + joy oldidan **in**." } },
      ],
    },
    {
      title: "Ta'mlar va talaffuz",
      blocks: [
        {
          t: "table", head: ["Ta'm", "O'zbekcha", "Misol"],
          rows: [
            ["sweet", "shirin", "Honey is sweet."],
            ["sour", "nordon", "Lemons are sour."],
            ["salty", "sho'r", "This soup is too salty."],
            ["bitter", "taxir, achchiq (qahvadek)", "Black coffee is bitter."],
            ["spicy", "achchiq (qalampirli)", "I love spicy food."],
          ],
          speak: [0, 2],
        },
        {
          t: "sounds", items: [
            { label: "than", say: "taller than me", uz: "Gapda kuchsiz: **\"ðən\"**. *then* (\"ðen\", keyin) bilan adashtirmang.", examples: ["better than", "cheaper than me"] },
            { label: "as … as", say: "as sweet as honey", uz: "Ikkala **as** kuchsiz: **\"əz swi:t əz\"**. Urg'u sifatda!", examples: ["as good as", "as sweet as honey"] },
            { label: "sour", say: "sour", uz: "**\"sauə\"** — \"sur\" ❌.", examples: ["sour", "sour cherries"] },
            { label: "worse", say: "worse", uz: "**\"wö:s\"** — *walk* (\"wo:k\") dagi \"o:\" emas.", examples: ["worse", "the worst"] },
          ],
        },
        { t: "check", ex: { k: "listen", say: "This melon is sweeter than that one.", opts: ["This melon is sweeter than that one.", "This melon is as sweet as that one.", "This lemon is sweeter than that one."], a: 0 } },
      ],
    },
    {
      title: "O'qing: bozormi yoki supermarket?",
      blocks: [
        {
          t: "text", title: "Bazaar or supermarket?",
          en: "Every family in Tashkent has an opinion about this question. My grandmother always goes to the bazaar. She says the fruit and vegetables there are fresher and tastier, and they are often much cheaper too. And you can try a piece of melon before you buy it!\nMy sister prefers the supermarket. It's cleaner and quieter than the bazaar, and you can pay by card. But the tomatoes there aren't as juicy as the bazaar tomatoes, and the bread isn't as soft.\nIn my opinion, the best place for bread and fruit is the bazaar, but the supermarket is better for milk, pasta and things in packets.",
          uz: "Toshkentdagi har bir oilaning bu savol bo'yicha o'z fikri bor. Buvim doim bozorga boradi. Uning aytishicha, u yerdagi meva va sabzavotlar yangiroq va mazaliroq, ko'pincha ancha arzonroq ham. Bundan tashqari, qovunni sotib olishdan oldin bir bo'lagini tatib ko'rish mumkin!\nOpam supermarketni afzal ko'radi. U bozordan tozaroq va tinchroq, karta bilan to'lash ham mumkin. Lekin u yerdagi pomidorlar bozor pomidorlarichalik sersuv emas, non ham unchalik yumshoq emas.\nMenimcha, non va meva uchun eng yaxshi joy — bozor, lekin sut, makaron va pachkadagi narsalar uchun supermarket yaxshiroq.",
        },
        { t: "check", ex: { k: "tf", q: "Matnga ko'ra, supermarketdagi pomidorlar bozordagidan sersuvroq.", a: false, why: "*the tomatoes there aren't as juicy as the bazaar tomatoes* — bozordagilar sersuvroq." } },
        { t: "check", ex: { k: "choice", q: "Why does the sister like the supermarket?", opts: ["It's cheaper and the bread is softer.", "It's cleaner and quieter, and she can pay by card.", "She can try the melons."], a: 1 } },
      ],
    },
    {
      title: "Dialog: qaysi qovun?",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Seller", en: "Look at these melons! They're the sweetest in the bazaar.", uz: "Mana bu qovunlarga qarang! Bozordagi eng shirinlari." },
            { who: "Otabek", en: "Which is better, this big one or that small one?", uz: "Qaysi biri yaxshiroq — mana bu kattasimi yoki u kichkinasimi?" },
            { who: "Seller", en: "The small one is a bit sweeter, but the big one is just as good.", uz: "Kichkinasi biroz shirinroq, lekin kattasi ham xuddi shunday yaxshi." },
            { who: "Otabek", en: "Is the big one much more expensive?", uz: "Kattasi ancha qimmatmi?" },
            { who: "Seller", en: "No, it isn't as expensive as you think. Thirty thousand. Try a piece!", uz: "Yo'q, siz o'ylagandek qimmat emas. O'ttiz ming. Bir bo'lagini tatib ko'ring!" },
            { who: "Otabek", en: "Mmm, it's really juicy! It's better than the melons in the supermarket.", uz: "Mmm, juda sersuv ekan! Supermarketdagi qovunlardan yaxshiroq." },
            { who: "Seller", en: "Of course! Our melons are the best.", uz: "Albatta! Bizning qovunlar eng zo'ri." },
          ],
        },
        { t: "check", ex: { k: "order", uz: "Kichkinasi biroz shirinroq.", words: ["The", "small", "one", "is", "a", "bit", "sweeter."], extra: ["very", "more"], why: "Kichik farq — **a bit + -er**." } },
      ],
    },
  ],
  words: [
    { en: "tasty", uz: "mazali", ipa: "ˈteɪ.sti", pos: "adjective", ex: "Home-made bread is tastier than shop bread.", exUz: "Uyda yopilgan non do'kon nonidan mazaliroq." },
    { en: "sweet", uz: "shirin", ipa: "swiːt", pos: "adjective", ex: "These grapes are very sweet.", exUz: "Bu uzum juda shirin." },
    { en: "sour", uz: "nordon", ipa: "ˈsaʊ.ə", pos: "adjective", ex: "Green apples are a bit sour.", exUz: "Yashil olmalar biroz nordon." },
    { en: "salty", uz: "sho'r", ipa: "ˈsɔːl.ti", pos: "adjective", ex: "The soup is too salty.", exUz: "Sho'rva juda sho'r." },
    { en: "bitter", uz: "taxir, achchiq (qahvadek)", ipa: "ˈbɪt.ə", pos: "adjective", ex: "Black coffee is bitter.", exUz: "Qora qahva taxir." },
    { en: "spicy", uz: "achchiq (qalampirli)", ipa: "ˈspaɪ.si", pos: "adjective", ex: "Is this dish spicy?", exUz: "Bu taom achchiqmi?" },
    { en: "juicy", uz: "sersuv, shirali", ipa: "ˈdʒuː.si", pos: "adjective", ex: "Bazaar tomatoes are juicier.", exUz: "Bozor pomidorlari sersuvroq." },
    { en: "ripe", uz: "pishgan (meva)", ipa: "raɪp", pos: "adjective", ex: "This melon isn't ripe yet.", exUz: "Bu qovun hali pishmagan." },
    { en: "crispy", uz: "qarsildoq", ipa: "ˈkrɪs.pi", pos: "adjective", ex: "I love crispy samsa.", exUz: "Qarsildoq somsani yaxshi ko'raman." },
    { en: "soft", uz: "yumshoq", ipa: "sɒft", pos: "adjective", ex: "This bread is soft and fresh.", exUz: "Bu non yumshoq va yangi." },
  ],
  practice: [
    { k: "listen", say: "It's not as expensive as the other one.", opts: ["It's not as expensive as the other one.", "It's more expensive than the other one.", "It's the most expensive one."], a: 0 },
    { k: "choice", q: "Qaysi gap **xato**?", opts: ["This soup is saltier than yesterday's.", "This soup is more saltier than yesterday's.", "This soup isn't as salty as yesterday's.", "This soup is a bit saltier."], a: 1, why: "**more** va **-er** birga kelmaydi." },
    { k: "choice", q: "\"Bu tort o'shandagidek mazali.\"", opts: ["This cake is as tasty as that one.", "This cake is as tastier as that one.", "This cake is so tasty than that one.", "This cake is tasty as that one."], a: 0, why: "**as + oddiy sifat + as**." },
    { k: "choice", q: "My brother cooks better than ___.", opts: ["me", "my", "mine is", "I'm"], a: 0, why: "**than** dan keyin og'zaki nutqda **me**." },
    { k: "fill", q: "My mum's plov is the ___ in the world!", a: ["best"], hint: "good", uz: "Oyimning palovi dunyodagi eng zo'ri!" },
    { k: "fill", q: "This soup is ___ than yesterday's. It's cold and too salty.", a: ["worse"], hint: "bad", uz: "Bu sho'rva kechagidan yomonroq. Sovuq va juda sho'r." },
    { k: "fill", q: "Watermelons are much ___ than apples.", a: ["bigger", "larger"], hint: "big", uz: "Tarvuzlar olmalardan ancha katta." },
    { k: "fill", q: "Saturday is the busiest day ___ the week.", a: ["of"], uz: "Shanba — haftaning eng gavjum kuni." },
    { k: "tf", q: "*as tastier as* — to'g'ri ibora.", a: false, why: "**as … as** ichida oddiy sifat: *as tasty as*." },
    { k: "tf", q: "*Cola isn't as healthy as juice* = *Juice is healthier than cola*.", a: true },
    { k: "match", pairs: [["sweet", "shirin"], ["sour", "nordon"], ["salty", "sho'r"], ["bitter", "taxir"], ["spicy", "achchiq (qalampirli)"]] },
    { k: "order", uz: "Bu olma unisidan ancha shirinroq.", words: ["This", "apple", "is", "much", "sweeter", "than", "that", "one."], extra: ["more", "very"] },
    { k: "order", uz: "Kola sharbatchalik foydali emas.", words: ["Cola", "isn't", "as", "healthy", "as", "juice."], extra: ["than", "healthier"] },
    { k: "translate", uz: "Akam mendan baland.", a: ["My brother is taller than me", "My brother is taller than I am", "My older brother is taller than me", "My older brother is taller than I am", "My elder brother is taller than me", "My elder brother is taller than I am", "My big brother is taller than me", "My big brother is taller than I am"] },
    { k: "translate", uz: "Bu qovun eng shirini.", a: ["This melon is the sweetest", "This melon is the sweetest one", "This is the sweetest melon", "It is the sweetest melon", "It's the sweetest melon"] },
    { k: "speak", say: "Home-made bread is much tastier than shop bread.", uz: "Uyda yopilgan non do'kon nonidan ancha mazali." },
  ],
  quiz: [
    { k: "choice", q: "Which is the ___ restaurant in your town?", opts: ["best", "better", "goodest", "most good"], a: 0 },
    { k: "choice", q: "Bukhara isn't ___ Tashkent.", opts: ["as big as", "as bigger as", "so big than", "as big than"], a: 0 },
    { k: "choice", q: "\"Taksi avtobusdan ancha qimmat.\"", opts: ["Taxis are much more expensive than buses.", "Taxis are very more expensive than buses.", "Taxis are much expensiver than buses.", "Taxis are much more expensive that buses."], a: 0 },
    { k: "fill", q: "Lemons are ___ than oranges.", a: ["sourer", "more sour"], hint: "sour", uz: "Limonlar apelsinlardan nordonroq." },
    { k: "fill", q: "Chillies are much ___ than peppers.", a: ["hotter", "spicier", "more spicy"], hint: "hot", uz: "Achchiq qalampir bulg'or qalampiridan ancha achchiq." },
    { k: "fill", q: "Is the bazaar cheaper ___ the supermarket?", a: ["than"], uz: "Bozor supermarketdan arzonmi?" },
    { k: "listen", say: "The small one is a bit sweeter.", opts: ["The small one is a bit sweeter.", "The small one is a lot sweeter.", "The small one is as sweet."], a: 0 },
    { k: "tf", q: "*not as … as* — kamroqni bildiradi: *Tea isn't as sweet as cola* = *Cola is sweeter than tea*.", a: true },
    { k: "match", pairs: [["tasty", "mazali"], ["juicy", "sersuv"], ["ripe", "pishgan"], ["crispy", "qarsildoq"], ["soft", "yumshoq"]] },
    { k: "translate", uz: "Bu — Toshkentdagi eng zo'r kafe.", a: ["This is the best cafe in Tashkent", "This is the best café in Tashkent", "It's the best cafe in Tashkent", "It's the best café in Tashkent", "It is the best cafe in Tashkent", "It is the best café in Tashkent", "This is the best coffee shop in Tashkent"] },
  ],
  summary: [
    "Imlo: **tasty → tastier, hot → hotter, fresh → fresher**; uzun: **more delicious**; istisno: **better / the best, worse / the worst**.",
    "Farq darajasi: **much / a lot / a bit + qiyosiy** — *much cheaper* (*very cheaper* ❌); **than me**.",
    "Tenglik: **as + sifat + as** — *as soft as*; farq: **not as … as** — *Cola isn't as healthy as juice.*",
    "Orttirma: **the best … in** (joy) / **of** (guruh): *the best plov in Tashkent, the busiest day of the week*.",
    "Ta'mlar: **sweet, sour, salty, bitter, spicy**; sifatlar: **juicy, ripe, crispy, soft, tasty**.",
  ],
  homework: "Ikki joyni qiyoslang (ikki kafe, bozor va supermarket yoki ikki taom) — 8 ta gap yozing: kamida 2 tasida **much / a bit + -er**, 2 tasida **as … as / not as … as**, 2 tasida **the best / the most … in**. Bu bilan 8-unit tugadi — 1-darsdan boshlab barcha xulosalarni bir marta ko'zdan kechiring!",
};

export default lesson;
