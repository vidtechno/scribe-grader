import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u13-l6",
  title: "First conditional",
  titleUz: "Birinchi shart gap: if + Present, will",
  goal: "**If + Present Simple, … will + V1** qolipi bilan kelajakdagi **real shart va natija** haqida gapirasiz (*If it rains, we'll stay at home*), va'da, ogohlantirish hamda maslahat berasiz va **unless** ni (ixtiyoriy) tushunasiz.",
  slides: [
    {
      title: "Real shart: nima bo'lsa, nima bo'ladi",
      blocks: [
        { t: "p", md: "**Birinchi shart gap** kelajakda **bo'lishi mumkin** bo'lgan vaziyat va uning **natijasi** haqida. O'zbekchada: *\"Agar yomg'ir yog'sa, uyda qolamiz\"*. Inglizchada ikkita qism bor:" },
        {
          t: "table", head: ["if-qism (shart)", "natija qismi"], speak: [0, 1],
          rows: [
            ["If + Present Simple", "will + V1"],
            ["If it rains tomorrow,", "we'll stay at home."],
            ["If you study hard,", "you'll pass the exam."],
            ["If I see Laylo,", "I'll tell her."],
          ],
        },
        { t: "tip", tone: "warn", md: "**If** dan keyin kelajak ma'nosi bo'lsa ham **Present Simple** ishlatiladi: *If it **rains***, **if it will rain** ❌. **will** esa faqat **natija qismida**." },
        { t: "check", ex: { k: "choice", q: "\"Agar ertaga yomg'ir yog'sa, biz uyda qolamiz.\"", opts: ["If it will rain tomorrow, we stay at home.", "If it rains tomorrow, we'll stay at home.", "If it rains tomorrow, we stay at home will.", "If it rained tomorrow, we'll stay at home."], a: 1, why: "**If + Present Simple, will + V1**." } },
      ],
    },
    {
      title: "Qismlar o'rni va vergul",
      blocks: [
        { t: "p", md: "Qismlarni **almashtirsa bo'ladi**. Qoida: **if-qism boshida bo'lsa — vergul qo'yamiz**, oxirida bo'lsa — vergul kerak emas:" },
        {
          t: "examples", items: [
            { en: "If you call me, I'll answer.", uz: "Qo'ng'iroq qilsang, javob beraman.", note: "if boshida — vergul bor." },
            { en: "I'll answer if you call me.", uz: "Qo'ng'iroq qilsang, javob beraman.", note: "if oxirida — vergul yo'q." },
            { en: "We'll miss the bus if we don't hurry.", uz: "Shoshilmasak, avtobusga kechikamiz." },
            { en: "If she doesn't come, I won't wait.", uz: "U kelmasa, kutmayman." },
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["If it rains, we'll stay home.", "We'll stay home if it rains.", "If you don't hurry, you'll be late."] },
          bad: { title: "Xato", items: ["If it will rain, we'll stay home.", "If it rains, we stay home will.", "If you won't hurry, you'll be late."] },
        },
        { t: "check", ex: { k: "order", uz: "Agar u kelsa, men xursand bo'laman.", words: ["If", "he", "comes,", "I'll", "be", "happy."], extra: ["will", "come"], alt: [["If", "he", "comes,", "I", "will", "be", "happy."]] } },
      ],
    },
    {
      title: "Inkor, savol va natijadagi boshqa shakllar",
      blocks: [
        { t: "p", md: "If-qismda inkor uchun **don't / doesn't** ishlating (**won't** emas). Savol bersangiz, **natija qismi** savolga aylanadi (if-qism o'zgarmaydi):" },
        {
          t: "table", head: ["Turi", "Misol"], speak: [1],
          rows: [
            ["Inkor (if-qism)", "If you don't eat, you'll be hungry."],
            ["Inkor (natija)", "If it rains, we won't go to the park."],
            ["Savol", "What will you do if you miss the bus?"],
            ["Savol", "Will you help me if I ask you?"],
          ],
        },
        { t: "p", md: "Natija qismida **will** dan tashqari ham fe'l bo'ladi: **can**, **may / might**, hamda **buyruq** (imperativ):" },
        {
          t: "examples", items: [
            { en: "If you finish early, you can go home.", uz: "Erta tugatsang, uyga ketishing mumkin." },
            { en: "If it's sunny, we might go for a walk.", uz: "Quyoshli bo'lsa, sayrga chiqishimiz mumkin." },
            { en: "If you see Aziz, tell him to call me.", uz: "Azizni ko'rsang, menga qo'ng'iroq qilishini ayt." },
          ],
        },
        { t: "check", ex: { k: "fill", q: "If you ___ hurry, you'll miss the train. (not)", a: ["don't", "do not"], why: "If-qismda inkor: **don't + V1**, **won't emas**." } },
      ],
    },
    {
      title: "Qayerda ishlatiladi",
      blocks: [
        { t: "p", md: "Birinchi shart gap kundalik hayotda uch asosiy vazifada keladi:" },
        {
          t: "table", head: ["Vazifa", "Misol"], speak: [1],
          rows: [
            ["Va'da", "If you help me, I'll buy you lunch."],
            ["Ogohlantirish", "If you touch that, you'll hurt yourself."],
            ["Maslahat", "If you want to improve, you'll need to practise every day."],
            ["Rejalar", "If I have time, I'll call you."],
          ],
        },
        { t: "tip", tone: "info", md: "Bu qolip **real** vaziyat uchun — bo'lishi mumkin. Real bo'lmagan yoki tasavvuriy vaziyat uchun (*If I won a million…*) boshqa qolip bor, uni keyingi darajada o'rganasiz." },
        { t: "check", ex: { k: "choice", q: "Qaysi gap **ogohlantirish**?", opts: ["If you help me, I'll buy you lunch.", "If you touch the fire, you'll burn your hand.", "If it's sunny, we'll go to the lake.", "If I have time, I'll call you."], a: 1 } },
      ],
    },
    {
      title: "Unless (ixtiyoriy)",
      blocks: [
        { t: "p", md: "**Unless** = **if … not** (\"agar … bo'lmasa\"). Undan keyin **darak shakl** keladi, chunki **unless** ning o'zi inkor ma'nosini beradi:" },
        {
          t: "table", head: ["Unless bilan", "If … not bilan"], speak: [0, 1],
          rows: [
            ["Unless you hurry, you'll miss the bus.", "If you don't hurry, you'll miss the bus."],
            ["I won't go unless you come with me.", "I won't go if you don't come with me."],
            ["Unless it rains, we'll have a picnic.", "If it doesn't rain, we'll have a picnic."],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["Unless you hurry, you'll be late.", "I'll stay unless you need me."] },
          bad: { title: "Xato", items: ["Unless you don't hurry, you'll be late.", "Unless you will hurry, you'll be late."] },
        },
        { t: "tip", tone: "good", md: "**Unless** ni o'qiganda va eshitganda tanisangiz yetarli. O'zingiz gapirganda **if … not** ishlatsangiz ham to'g'ri: xato qilish ehtimoli kamroq." },
        { t: "check", ex: { k: "fill", q: "___ you hurry, you'll miss the bus. (if not)", a: ["Unless"], why: "**Unless you hurry** = **If you don't hurry**." } },
      ],
    },
    {
      title: "O'qing: Imtihon oldidan",
      blocks: [
        {
          t: "text", title: "Before the exam",
          en: "Dilnoza has an English exam on Friday. She is nervous, so her brother Kamol gives her some advice.\n\"If you study for one hour every evening, you'll feel more confident,\" he says. \"And if you go to bed early on Thursday, you won't be tired.\"\nDilnoza smiles. \"If I pass, I'll buy you a big ice cream!\" she says. \"But unless you stop talking, I won't finish my homework!\"\nOn Friday morning, she wakes up early. If she catches the 8:15 bus, she'll arrive in time. She runs to the bus stop.",
          uz: "Dilnozaning juma kuni ingliz tili imtihoni bor. U hayajonda, shuning uchun akasi Kamol unga maslahat beradi.\n\"Agar har kuni kechqurun bir soatdan o'qisang, o'zingga ishonching ortadi,\" deydi u. \"Va agar payshanba kuni erta yotsang, charchamaysan.\"\nDilnoza jilmayadi. \"Agar o'tsam, senga katta muzqaymoq olib beraman!\" deydi u. \"Lekin gapirishni to'xtatmasang, uy vazifamni tugatmayman!\"\nJuma ertalab u erta turadi. Agar 8:15 dagi avtobusga ulgursa, o'z vaqtida yetib boradi. U bekatga yuguradi.",
        },
        { t: "check", ex: { k: "choice", q: "What will Dilnoza do if she passes?", opts: ["Buy Kamol an ice cream.", "Study every evening.", "Go to bed early.", "Take the bus."], a: 0, why: "*If I pass, I'll buy you a big ice cream!*" } },
        { t: "check", ex: { k: "tf", q: "Kamol says she'll be tired if she goes to bed early.", a: false, why: "*If you go to bed early, you **won't** be tired.*" } },
      ],
    },
    {
      title: "Dialog: kelasi hafta oxiriga",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Laylo", en: "What shall we do on Saturday?", uz: "Shanba kuni nima qilamiz?" },
            { who: "Aziz", en: "If the weather is nice, we'll go to the mountains.", uz: "Ob-havo yaxshi bo'lsa, tog'ga boramiz." },
            { who: "Laylo", en: "And if it rains?", uz: "Yomg'ir yog'sa-chi?" },
            { who: "Aziz", en: "Then we'll watch a film at my place. I'll make some plov if you bring the drinks.", uz: "Unda mening uyimda film ko'ramiz. Ichimliklarni olib kelsang, palov pishiraman." },
            { who: "Laylo", en: "Deal! But if Kamol doesn't come, we'll have too much food!", uz: "Kelishdik! Lekin Kamol kelmasa, ovqat ko'p bo'lib qoladi!" },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Aziz and Laylo will go to the mountains if it rains.", a: false, why: "Yomg'ir yog'sa — film ko'rishadi; tog'ga — ob-havo yaxshi bo'lsa." } },
      ],
    },
  ],
  words: [
    { en: "pass (an exam)", uz: "(imtihondan) o'tmoq", ipa: "pɑːs", pos: "verb", ex: "If you work hard, you'll pass the exam.", exUz: "Qattiq ishlasang, imtihondan o'tasan." },
    { en: "fail", uz: "yiqilmoq; o'ta olmamoq", ipa: "feɪl", pos: "verb", ex: "If you don't study, you'll fail.", exUz: "O'qimasang, o'ta olmaysan." },
    { en: "miss", uz: "o'tkazib yubormoq (transport)", ipa: "mɪs", pos: "verb", ex: "We'll miss the bus if we don't hurry.", exUz: "Shoshilmasak, avtobusga ulgurmaymiz." },
    { en: "catch", uz: "ulgurmoq; tutmoq (transport)", ipa: "kætʃ", pos: "verb", ex: "If we run, we'll catch the train.", exUz: "Yugursak, poyezdga ulgurib qolamiz." },
    { en: "borrow", uz: "qarzga olmoq", ipa: "ˈbɒrəʊ", pos: "verb", ex: "Can I borrow your pen?", exUz: "Qalamingni olib tursam bo'ladimi?" },
    { en: "lend", uz: "qarzga bermoq", ipa: "lend", pos: "verb", ex: "I'll lend you my umbrella.", exUz: "Soyabonimni senga beraman." },
    { en: "in time", uz: "o'z vaqtida (ulgurib)", ipa: "ɪn taɪm", pos: "phrase", ex: "We'll arrive in time for dinner.", exUz: "Kechki ovqatga ulguramiz." },
    { en: "warn", uz: "ogohlantirmoq", ipa: "wɔːn", pos: "verb", ex: "I warn you: it's dangerous.", exUz: "Ogohlantiraman: bu xavfli." },
    { en: "wake up", uz: "uyg'onmoq", ipa: "weɪk ʌp", pos: "phrasal verb", ex: "If you wake up late, call me.", exUz: "Kech uyg'onsang, menga qo'ng'iroq qil." },
    { en: "hurry up", uz: "shoshilmoq", ipa: "ˈhʌri ʌp", pos: "phrasal verb", ex: "Hurry up, or we'll be late!", exUz: "Shoshil, bo'lmasa kechikamiz!" },
  ],
  practice: [
    { k: "match", pairs: [["pass", "o'tmoq (imtihon)"], ["fail", "o'ta olmamoq"], ["borrow", "qarzga olmoq"], ["lend", "qarzga bermoq"], ["wake up", "uyg'onmoq"]] },
    { k: "listen", say: "If it rains, we'll stay at home.", opts: ["If it rains, we'll stay at home.", "If it rained, we'd stay at home.", "If it will rain, we stay at home."], a: 0 },
    { k: "listen", say: "I won't go unless you come with me.", opts: ["I won't go unless you come with me.", "I won't go if you come with me.", "I didn't go unless you came with me."], a: 0 },
    { k: "fill", q: "If it ___ tomorrow, we'll stay at home. (rain)", a: ["rains"], why: "If-qismda Present Simple: **rains**." },
    { k: "fill", q: "If you study hard, you ___ the exam. (pass)", a: ["will pass", "'ll pass"], why: "Natija qismida **will + V1**." },
    { k: "fill", q: "If she ___ come, I won't wait. (not)", a: ["doesn't", "does not"] },
    { k: "fill", q: "___ you hurry, you'll miss the bus. (agar ... bo'lmasa)", a: ["Unless"] },
    { k: "choice", q: "Qaysi gap **xato**?", opts: ["If I see him, I'll tell him.", "If it will rain, I'll stay home.", "If you call me, I'll answer.", "I'll help you if you ask."], a: 1, why: "If-qismda **will** ishlatilmaydi: *If it **rains***." },
    { k: "choice", q: "**If we ___ the 8:15 bus, we'll arrive in time.**", opts: ["catch", "will catch", "caught", "catching"], a: 0 },
    { k: "choice", q: "**What ___ you do if you miss the bus?**", opts: ["do", "will", "are", "would"], a: 1, why: "Natija qismi savol: **What will you do…?**" },
    { k: "tf", q: "**If you won't hurry, you'll be late** — to'g'ri gap.", a: false, why: "If-qismda inkor: **If you don't hurry…**" },
    { k: "tf", q: "If-qism gap boshida bo'lsa, undan keyin vergul qo'yiladi.", a: true },
    { k: "order", uz: "Agar yomg'ir yog'sa, biz uyda qolamiz.", words: ["If", "it", "rains,", "we'll", "stay", "at", "home."], extra: ["will", "rain"], alt: [["If", "it", "rains,", "we", "will", "stay", "at", "home."], ["If", "it", "rains,", "we'll", "stay", "home."], ["If", "it", "rains,", "we", "will", "stay", "home."]] },
    { k: "translate", uz: "Agar u kelsa, men unga aytaman.", a: ["If he comes, I'll tell him.", "If he comes, I will tell him.", "I'll tell him if he comes.", "I will tell him if he comes."] },
    { k: "speak", say: "If you help me, I'll buy you lunch.", uz: "Yordam bersang, senga tushlik olib beraman." },
  ],
  quiz: [
    { k: "fill", q: "If I ___ Laylo, I'll tell her. (see)", a: ["see"] },
    { k: "fill", q: "We'll be late if we ___ hurry. (not)", a: ["don't", "do not"] },
    { k: "choice", q: "\"Agar soat 8 da jo'nasak, ulguramiz.\"", opts: ["If we leave at 8, we'll be in time.", "If we will leave at 8, we are in time.", "If we left at 8, we'll be in time.", "If we leave at 8, we be in time."], a: 0 },
    { k: "choice", q: "**Unless you ___, you won't understand.**", opts: ["listen", "don't listen", "will listen", "listening"], a: 0, why: "Unless + darak shakl." },
    { k: "choice", q: "**I'll lend you my book if you ___ it back tomorrow.**", opts: ["bring", "will bring", "brought", "bringing"], a: 0 },
    { k: "listen", say: "What will you do if it snows?", opts: ["What will you do if it snows?", "What would you do if it snowed?", "What do you do when it snows?"], a: 0 },
    { k: "tf", q: "**If** dan keyin **will** ishlatiladi: *If it will rain…*", a: false },
    { k: "tf", q: "**Unless you hurry** = **If you don't hurry**.", a: true },
    { k: "order", uz: "Agar u qo'ng'iroq qilsa, men javob beraman.", words: ["If", "she", "calls,", "I'll", "answer."], extra: ["will", "call"], alt: [["If", "she", "calls,", "I", "will", "answer."], ["I'll", "answer", "if", "she", "calls."], ["I", "will", "answer", "if", "she", "calls."]] },
    { k: "translate", uz: "Agar kech qolsang, menga qo'ng'iroq qil.", a: ["If you're late, call me.", "If you are late, call me.", "Call me if you're late.", "Call me if you are late.", "If you are late, phone me.", "If you're late, phone me.", "If you are going to be late, call me."] },
  ],
  summary: [
    "**If + Present Simple, will + V1** — kelajakdagi real shart va natija: *If it rains, we'll stay home.*",
    "**If-qismda will yo'q**: *If it rains* ✅, *If it will rain* ❌. Inkor: **don't / doesn't**.",
    "If-qism boshida bo'lsa — vergul; oxirida bo'lsa — vergulsiz. Natijada **can, may, might** yoki buyruq ham kelishi mumkin.",
    "**Unless** = **if … not**: *Unless you hurry, you'll be late.* Unless dan keyin inkor kerak emas.",
  ],
  homework: "Quyidagi 6 ta shart gapni tugallang: *If it rains tomorrow, I… / If I have time this weekend, I… / If my friend calls tonight, I… / If I don't sleep well, I… / I'll be happy if… / I won't go out unless…*. Keyin 2 tasini ovoz chiqarib ayting.",
};

export default lesson;
