import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u14-l5",
  title: "Adverbs of manner",
  titleUz: "Ravish: quickly, well, hard",
  goal: "Fe'l **qanday** bajarilishini ravish bilan aytasiz: **quickly, carefully, badly**. **good** (sifat) va **well** (ravish) farqini bilasiz, **hard, fast, late, early** kabi shakli o'zgarmaydigan ravishlarni, **hardly** va **lately** ning boshqa ma'nosini eslab qolasiz va ravishning qiyosiy darajasini tuzasiz (*faster, harder, more carefully*).",
  slides: [
    {
      title: "Sifat va ravish",
      blocks: [
        { t: "p", md: "**Sifat** (adjective) ot haqida gapiradi: *a quick **answer***. **Ravish** (adverb of manner) esa fe'lning **qanday** bajarilishini bildiradi: *He answers **quickly**.* (Savol: *how?* — qanday?)" },
        {
          t: "table", head: ["Sifat (nima? qanday?)", "Ravish (qanday qilib?)"], speak: [0, 1],
          rows: [
            ["She is a careful driver.", "She drives carefully."],
            ["He is a slow walker.", "He walks slowly."],
            ["It was a loud noise.", "The children shouted loudly."],
            ["They are quiet people.", "They talk quietly."],
          ],
        },
        { t: "p", md: "Ravish yasash qoidasi: sifat + **-ly**. Imlo:" },
        {
          t: "table", head: ["Qoida", "Sifat → Ravish"], speak: [1],
          rows: [
            ["+ ly", "slow → slowly, careful → carefully, loud → loudly"],
            ["-y → -ily", "happy → happily, easy → easily, angry → angrily"],
            ["-le → -ly", "possible → possibly, gentle → gently"],
          ],
        },
        { t: "tip", tone: "info", md: "O'zbekchada ravish ko'pincha **-lik** yoki **-ona** bilan yasaladi: *tez*, *ehtiyotkorlik bilan*. Inglizchada fe'ldan keyingi **-ly** — ravishning asosiy belgisi." },
        { t: "check", ex: { k: "choice", q: "Aziz is a very ___ student. He always writes ___.", opts: ["careful / careful", "careful / carefully", "carefully / carefully", "carefully / careful"], a: 1, why: "Ot oldidan sifat (*careful student*), fe'ldan keyin ravish (*writes carefully*)." } },
      ],
    },
    {
      title: "good yoki well?",
      blocks: [
        { t: "p", md: "Eng ko'p xato: **good** — sifat, **well** — ravish. *good* ning ravishi **well**:" },
        {
          t: "table", head: ["Sifat", "Ravish"], speak: [0, 1],
          rows: [
            ["She is a good singer.", "She sings well."],
            ["He is a good driver.", "He drives well."],
            ["Your English is good.", "You speak English well."],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["He speaks English well.", "She cooks very well.", "I don't feel well today."], },
          bad: { title: "Xato", items: ["He speaks English good.", "She cooks very good.", "She sings goodly."] },
        },
        { t: "tip", tone: "info", md: "**well** sog'liq haqida ham ishlatiladi: *I don't feel well.* — o'zimni yomon his qilyapman. **bad** ning ravishi — **badly**: *He plays badly.*" },
        { t: "tip", tone: "warn", md: "**-ly** bilan tugasa ham, ba'zi so'zlar **sifat**: *friendly, lovely, lonely, silly, lively*. *She is very friendly.* — to'g'ri (sifat). Ular uchun ravish shaklini *in a friendly way* kabi aytamiz." },
        { t: "check", ex: { k: "choice", q: "\"U ingliz tilida yaxshi gapiradi.\"", opts: ["She speaks English good.", "She speaks English well.", "She speaks good English well.", "She speaks well English."], a: 1, why: "Fe'ldan keyin ravish: **well**." } },
        { t: "check", ex: { k: "fill", q: "My brother plays the guitar very ___. (bad)", a: ["badly"], why: "*bad* → **badly**." } },
      ],
    },
    {
      title: "hard, fast, late, early",
      blocks: [
        { t: "p", md: "Ba'zi so'zlarning sifat va ravish shakli **bir xil** bo'ladi (**-ly** qo'shilmaydi):" },
        {
          t: "table", head: ["So'z", "Sifat", "Ravish"], speak: [1, 2],
          rows: [
            ["fast", "a fast car", "He drives fast."],
            ["hard", "a hard test", "She works hard."],
            ["late", "a late train", "I always arrive late."],
            ["early", "an early lesson", "We get up early."],
          ],
        },
        { t: "tip", tone: "warn", md: "❌ *He drives fastly.* ✅ *He drives fast.* ❌ *She works hardly.* ✅ *She works hard.*" },
        { t: "p", md: "**hard** ham, **late** ham -ly bilan tugagan boshqa so'zlar bor, lekin **ma'nosi boshqa**:" },
        {
          t: "table", head: ["So'z", "Ma'nosi", "Misol"], speak: [2],
          rows: [
            ["hardly", "deyarli ... emas", "I can hardly hear you. (Zo'rg'a eshityapman.)"],
            ["lately", "yaqinda, oxirgi paytda", "I've been busy lately."],
            ["hard", "qattiq, jiddiy", "It's raining hard."],
            ["late", "kech", "Don't be late."],
          ],
        },
        { t: "check", ex: { k: "choice", q: "\"U juda qattiq o'qiydi.\"", opts: ["She studies very hardly.", "She studies very hard.", "She studies very hardy.", "She studies very harder."], a: 1, why: "**hard** — ravish ham, sifat ham." } },
        { t: "check", ex: { k: "tf", q: "**I can hardly walk** = Men yura olmayman.", a: false, why: "**hardly** = \"deyarli ... olmayman\" (zo'rg'a), butunlay yo'q emas." } },
      ],
    },
    {
      title: "Ravishning o'rni",
      blocks: [
        { t: "p", md: "Ravish odatda **fe'ldan keyin** yoki **to'ldiruvchidan keyin** keladi. O'zbekchada esa fe'ldan **oldin** (*U ingliz tilida yaxshi gapiradi*) — shuning uchun inglizchada ham shu tartibni qo'llab yuboramiz:" },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["She speaks English well.", "He drives the car carefully.", "They finished the work quickly."] },
          bad: { title: "Xato", items: ["She speaks well English.", "He drives carefully the car.", "She plays beautifully the piano."] },
        },
        { t: "p", md: "Qoida: **fe'l + (to'ldiruvchi) + ravish**. Ravish fe'l bilan to'ldiruvchi **orasiga** tushmaydi." },
        {
          t: "table", head: ["Tartib", "Misol"], speak: [1],
          rows: [
            ["fe'l + ravish", "He runs fast."],
            ["fe'l + to'ldiruvchi + ravish", "She plays the piano beautifully."],
            ["be + sifat (ravish emas!)", "The soup is good. (❌ well)"],
          ],
        },
        { t: "tip", tone: "info", md: "**be**, **look**, **feel**, **taste**, **sound** kabi fe'llardan keyin **sifat** keladi: *The plov tastes **good**.* *You look **happy**.* Bu yerda holat haqida gapiryapmiz, harakat haqida emas." },
        { t: "check", ex: { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["The plov tastes well.", "The plov tastes good.", "The plov tastes goodly.", "The plov tastes wellly."], a: 1, why: "*taste* dan keyin sifat: **good**." } },
        { t: "check", ex: { k: "order", uz: "U inglizcha yaxshi gapiradi.", words: ["She", "speaks", "English", "well."], extra: ["good"] } },
      ],
    },
    {
      title: "Ravishning qiyosiy darajasi",
      blocks: [
        { t: "p", md: "Ravishlar ham qiyoslanadi. Qoida sifatlarnikiga o'xshash:" },
        {
          t: "table", head: ["Ravish", "Qiyosiy", "Misol"], speak: [1, 2],
          rows: [
            ["fast", "faster", "Kamol runs faster than me."],
            ["hard", "harder", "You must work harder."],
            ["early", "earlier", "Please come earlier tomorrow."],
            ["late", "later", "We arrived later than Aziz."],
            ["well", "**better**", "Laylo sings better than me."],
            ["badly", "**worse**", "I played worse than yesterday."],
            ["carefully", "**more** carefully", "Please drive more carefully."],
            ["quickly", "**more** quickly", "Please finish more quickly."],
          ],
        },
        { t: "tip", tone: "info", md: "**-ly** bilan tugaydigan ravishlar (**quickly, slowly, carefully**) **more / most** oladi. **fast, hard, early, late** esa **-er / -est**." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["Speak more slowly, please.", "She works harder than me.", "He sings better than his brother."] },
          bad: { title: "Xato", items: ["Speak slowlier, please.", "She works more hard than me.", "He sings more well than his brother."] },
        },
        { t: "check", ex: { k: "fill", q: "Can you speak ___ slowly, please? (more)", a: ["more"], why: "*slowly* → **more slowly**." } },
        { t: "check", ex: { k: "choice", q: "Dilnoza dances ___ than Laylo.", opts: ["gooder", "more well", "better", "more good"], a: 2, why: "*well* → **better**." } },
      ],
    },
    {
      title: "O'qing: Marafon",
      blocks: [
        {
          t: "text", title: "The Saturday race",
          en: "Every Saturday morning, Aziz and his friend Kamol run in the park near their house. Aziz runs fast, but he doesn't run carefully. Last week he fell and hurt his knee. Kamol runs more slowly, but he runs better because he trains hard. He gets up early on weekdays and practises before work. \"You should warm up properly,\" Kamol told him. Aziz listened carefully and nodded. This Saturday, he started the race slowly and finished strongly. \"I didn't win,\" he said happily, \"but I ran much better than last week!\"",
          uz: "Har shanba tongida Aziz va do'sti Kamol uylari yaqinidagi bog'da yuguradi. Aziz tez yuguradi, lekin ehtiyotkorlik bilan emas. O'tgan hafta u yiqilib, tizzasini jarohatladi. Kamol sekinroq yuguradi, lekin yaxshiroq yuguradi, chunki qattiq shug'ullanadi. U ish kunlari erta turadi va ishdan oldin mashq qiladi. \"Yaxshilab qizishtirishing kerak,\" dedi Kamol unga. Aziz diqqat bilan tingladi va bosh irg'adi. Bu shanba u poygani sekin boshladi va kuchli tugatdi. \"Yutmadim,\" dedi u xursand bo'lib, \"lekin o'tgan haftadan ancha yaxshi yugurdim!\"",
        },
        { t: "check", ex: { k: "tf", q: "Kamol runs faster than Aziz.", a: false, why: "*Aziz runs fast ... Kamol runs more slowly.*" } },
        { t: "check", ex: { k: "choice", q: "Why does Kamol run better?", opts: ["He is taller.", "He trains hard.", "He runs faster.", "He gets up late."], a: 1, why: "*He runs better because he trains hard.*" } },
      ],
    },
    {
      title: "Dialog: ingliz tili kursi",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Teacher", en: "Dilnoza, you speak English very well!", uz: "Dilnoza, siz ingliz tilida juda yaxshi gapirasiz!" },
            { who: "Dilnoza", en: "Thank you. I study hard and I listen carefully.", uz: "Rahmat. Men qattiq o'qiyman va diqqat bilan tinglayman." },
            { who: "Teacher", en: "Kamol, you speak quickly, but please speak more slowly.", uz: "Kamol, siz tez gapirasiz, iltimos, sekinroq gapiring." },
            { who: "Kamol", en: "Sorry, I get nervous. I'll try to speak more clearly.", uz: "Kechirasiz, hayajonlanaman. Aniqroq gapirishga harakat qilaman." },
            { who: "Teacher", en: "Don't worry. You write better than last month.", uz: "Xavotir olmang. Siz o'tgan oydan yaxshiroq yozasiz." },
            { who: "Kamol", en: "I hope so. I practise a little every day, even late at night!", uz: "Umid qilaman. Har kuni ozgina mashq qilaman, hatto kechasi kech ham!" },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Kamol speaks slowly.", a: false, why: "*You speak quickly, but please speak more slowly.*" } },
      ],
    },
  ],
  words: [
    { en: "quickly", uz: "tez, tezda", ipa: "ˈkwɪkli", pos: "adv", ex: "He ate quickly and left.", exUz: "U tez yedi va ketdi." },
    { en: "slowly", uz: "sekin", ipa: "ˈsləʊli", pos: "adv", ex: "Please speak slowly.", exUz: "Iltimos, sekin gapiring." },
    { en: "carefully", uz: "ehtiyotkorlik bilan, diqqat bilan", ipa: "ˈkeəfəli", pos: "adv", ex: "Read the question carefully.", exUz: "Savolni diqqat bilan o'qing." },
    { en: "badly", uz: "yomon", ipa: "ˈbædli", pos: "adv", ex: "He plays chess badly.", exUz: "U shaxmatni yomon o'ynaydi." },
    { en: "loudly", uz: "baland ovozda", ipa: "ˈlaʊdli", pos: "adv", ex: "Don't talk so loudly.", exUz: "Bunchalik baland gapirma." },
    { en: "quietly", uz: "jimgina, past ovozda", ipa: "ˈkwaɪətli", pos: "adv", ex: "The baby is sleeping quietly.", exUz: "Chaqaloq jimgina uxlayapti." },
    { en: "easily", uz: "oson, osongina", ipa: "ˈiːzɪli", pos: "adv", ex: "She solved the problem easily.", exUz: "U masalani osongina yechdi." },
    { en: "happily", uz: "xursandlik bilan", ipa: "ˈhæpɪli", pos: "adv", ex: "The children played happily.", exUz: "Bolalar xursand o'ynashdi." },
    { en: "hard", uz: "qattiq, jiddiy (ravish)", ipa: "hɑːd", pos: "adv", ex: "They work hard every day.", exUz: "Ular har kuni qattiq ishlaydi." },
    { en: "early", uz: "erta", ipa: "ˈɜːli", pos: "adv", ex: "I get up early on Sundays.", exUz: "Yakshanba kunlari erta turaman." },
  ],
  practice: [
    { k: "match", pairs: [["slow", "slowly"], ["careful", "carefully"], ["happy", "happily"], ["easy", "easily"], ["good", "well"]] },
    { k: "match", pairs: [["quickly", "tez"], ["slowly", "sekin"], ["badly", "yomon"], ["loudly", "baland ovozda"], ["early", "erta"]] },
    { k: "listen", say: "She speaks English very well.", opts: ["She speaks English very well.", "She speaks very good English.", "She speaks English very bad."], a: 0 },
    { k: "listen", say: "Please drive more carefully.", opts: ["Please drive more carefully.", "Please drive more careful.", "Please drive carefully more."], a: 0 },
    { k: "fill", q: "My sister sings very ___. (good)", a: ["well"], why: "Fe'ldan keyin: **well**." },
    { k: "fill", q: "He drives too ___. It's dangerous. (fast)", a: ["fast"], why: "**fast** — ravish ham, sifat ham." },
    { k: "fill", q: "Please read the text ___. (careful)", a: ["carefully"], why: "*careful* → **carefully**." },
    { k: "fill", q: "Aziz works ___ every day. (hard)", a: ["hard"], why: "**hard** — ravish ham bir xil." },
    { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["He plays football good.", "He plays football well.", "He plays well football.", "He plays football goodly."], a: 1, why: "Fe'l + to'ldiruvchi + **well**." },
    { k: "choice", q: "\"Sekinroq gapiring, iltimos.\"", opts: ["Speak slowlier, please.", "Speak more slowly, please.", "Speak more slow, please.", "Speak slow more, please."], a: 1, why: "**-ly** ravish → **more slowly**." },
    { k: "tf", q: "**She works hardly.** — to'g'ri gap (u qattiq ishlaydi).", a: false, why: "**hardly** = deyarli ... emas. To'g'risi: *She works **hard**.*" },
    { k: "tf", q: "**The soup tastes good.** — to'g'ri gap.", a: true, why: "*taste* dan keyin sifat: **good**." },
    { k: "order", uz: "U ehtiyotkorlik bilan haydaydi.", words: ["He", "drives", "carefully."], extra: ["careful", "careless"] },
    { k: "translate", uz: "Men erta turaman.", a: ["I get up early.", "I wake up early.", "I get up early every day."] },
    { k: "speak", say: "She speaks English well and writes very carefully.", uz: "U ingliz tilida yaxshi gapiradi va juda diqqat bilan yozadi." },
  ],
  quiz: [
    { k: "choice", q: "**happy** ning ravishi:", opts: ["happyly", "happily", "happy", "happier"], a: 1, why: "-y → **-ily**." },
    { k: "choice", q: "She is a ___ driver. She drives ___.", opts: ["good / well", "well / good", "good / good", "well / well"], a: 0, why: "Sifat (ot oldida) **good**, ravish (fe'ldan keyin) **well**." },
    { k: "choice", q: "Qaysi gap xato?", opts: ["He runs fast.", "She works hard.", "I arrived late.", "They sing good."], a: 3, why: "To'g'risi: *They sing **well**.*" },
    { k: "fill", q: "Dilnoza speaks English ___ than me. (well)", a: ["better"], why: "*well → **better***." },
    { k: "fill", q: "I can ___ hear you. The line is bad. (deyarli ... emas)", a: ["hardly"], why: "**hardly** = deyarli ... olmayman." },
    { k: "fill", q: "Please write ___ carefully. (more)", a: ["more"], why: "*carefully* → **more carefully**." },
    { k: "listen", say: "He works harder than his brother.", opts: ["He works harder than his brother.", "He works hardly than his brother.", "He works more hard than his brother."], a: 0 },
    { k: "tf", q: "**fastly** — to'g'ri ravish.", a: false, why: "**fast** — ravish ham shu shaklda." },
    { k: "order", uz: "Ular xursand o'ynashdi.", words: ["They", "played", "happily."], extra: ["happy", "playing"] },
    { k: "translate", uz: "U meni yaxshi tushunadi.", a: ["He understands me well.", "She understands me well."] },
  ],
  summary: [
    "**Ravish** fe'lning *qanday* bajarilishini bildiradi: odatda sifat + **-ly** (*slowly, carefully*); **-y → -ily** (*happily, easily*).",
    "**good** — sifat, **well** — ravish: *She is a good singer. She sings **well**.* ❌ *speaks good*.",
    "**hard, fast, late, early** — sifat va ravish bir xil. **hardly** = deyarli ... emas, **lately** = yaqinda.",
    "Tartib: **fe'l + to'ldiruvchi + ravish**: *He speaks English well.* ❌ *speaks well English*. *be / look / taste / feel* dan keyin sifat.",
    "Qiyosiy: **faster, harder, better, worse**; **-ly** ravishlar uchun **more**: *more slowly, more carefully*.",
  ],
  homework: "Kundalik odatlaringiz haqida 8 ta gap yozing, har birida ravish ishlatilsin (*I get up early. I cook plov badly. I listen carefully in class.*). Keyin 3 ta gapni do'stingiz bilan solishtiring: *You speak faster than me. I work harder than my brother.*",
};

export default lesson;
