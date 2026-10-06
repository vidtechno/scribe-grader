import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u7-l3",
  title: "Adverbs: quickly, well, hard",
  titleUz: "Ravishlar: quickly, well, hard",
  goal: "Ish **qanday** bajarilishini aytasiz: **She works quickly. He speaks English well. They work hard.** Sifatdan ravish yasashni (**-ly**), noto'g'ri ravishlarni (**well, fast, hard, early, late**) va ravishning gapdagi o'rnini o'rganasiz.",
  slides: [
    {
      title: "Sifat yoki ravish?",
      blocks: [
        { t: "p", md: "O'zbekchada *tez* so'zi ham **otni** (*tez mashina*), ham **fe'lni** (*tez yuradi*) tasvirlaydi. Ingliz tilida esa bular — **ikki xil so'z**:" },
        {
          t: "table", head: ["", "Nimani tasvirlaydi", "Misol", "O'zbekcha"],
          rows: [
            ["sifat (adjective)", "otni: qanday?", "She's a quick worker.", "U tez ishlaydigan xodim."],
            ["ravish (adverb)", "fe'lni: qanday qilib?", "She works quickly.", "U tez ishlaydi."],
            ["sifat", "otni", "He's a careful driver.", "U ehtiyotkor haydovchi."],
            ["ravish", "fe'lni", "He drives carefully.", "U ehtiyotkorlik bilan haydaydi."],
          ],
          speak: [2],
        },
        { t: "tip", tone: "info", md: "Oddiy test: so'zga **\"qanday qilib?\"** (*how?*) savolini bering. *How does she work?* — **quickly**. Javob fe'lga tegishli bo'lsa — **ravish** kerak, ko'pincha **-ly** bilan." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["He drives carefully.", "Please speak slowly.", "She sings beautifully."] },
          bad: { title: "Xato", items: ["He drives careful.", "Please speak slow.", "She sings beautiful."] },
        },
        { t: "check", ex: { k: "choice", q: "\"U (he) ishni tez bajaradi.\"", opts: ["He does the work quick.", "He does the work quickly.", "He quick does the work.", "He does quickly the work."], a: 1, why: "Fe'lni tasvirlaydi → ravish **quickly**, ob'ektdan keyin: *does the work quickly*." } },
      ],
    },
    {
      title: "Ravish yasash: -ly",
      blocks: [
        { t: "p", md: "Ko'pchilik ravishlar sifatga **-ly** qo'shib yasaladi. Imloda to'rtta holat bor:" },
        {
          t: "table", head: ["Qoida", "Sifat", "Ravish"],
          rows: [
            ["+ ly", "quick, slow, quiet, loud, bad, polite", "quickly, slowly, quietly, loudly, badly, politely"],
            ["-ful → -fully", "careful, beautiful", "carefully, beautifully"],
            ["undosh + y → -ily", "easy, happy, busy", "easily, happily, busily"],
            ["-le → -ly", "terrible, gentle, comfortable", "terribly, gently, comfortably"],
          ],
          speak: [2],
        },
        { t: "tip", tone: "warn", md: "**careful + ly** = **carefully** — ikkita **l**! ❌ *carefuly*. **-ly** qo'shilganda urg'u o'zgarmaydi: **QUICK**-ly, **CARE**-ful-ly, **EA**-si-ly." },
        {
          t: "sounds", items: [
            { label: "quietly", say: "quietly", uz: "**\"KWAY-ət-li\"** — *quiet* (jim) ikki bo'g'in! *quite* (\"kwayt\", ancha) bilan adashtirmang.", examples: ["quiet", "quietly", "quite"] },
            { label: "carefully", say: "carefully", uz: "**\"KEə-fə-li\"** — o'rtadagi *ful* qisqa va kuchsiz **\"fə\"**.", examples: ["careful", "carefully"] },
          ],
        },
        { t: "check", ex: { k: "fill", q: "The test was easy. I passed it ___.", a: ["easily"], uz: "Test oson edi. Uni osongina topshirdim.", why: "undosh + y → **-ily**: *easy → easily*." } },
        { t: "check", ex: { k: "fill", q: "The baby is sleeping. Please talk ___. (quiet)", a: ["quietly"], uz: "Chaqaloq uxlayapti. Iltimos, sekin gapiring.", why: "*talk* — fe'l → ravish **quietly**." } },
      ],
    },
    {
      title: "Noto'g'ri ravishlar: well, fast, hard",
      blocks: [
        { t: "p", md: "Bir nechta juda muhim ravish **qoidaga bo'ysunmaydi**. Ularni alohida yodlang:" },
        {
          t: "table", head: ["Sifat", "Ravish", "Misol"],
          rows: [
            ["good", "well", "She's a good cook. She cooks well."],
            ["fast", "fast", "He's a fast runner. He runs fast."],
            ["hard", "hard", "It's hard work. They work hard."],
            ["early", "early", "an early train — I get up early."],
            ["late", "late", "a late lunch — He often comes late."],
          ],
          speak: [2],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["You speak English well.", "He drives fast.", "My parents work hard."] },
          bad: { title: "Xato", items: ["You speak English good.", "He drives fastly.", "My parents work hardly."] },
        },
        { t: "tip", tone: "warn", md: "**hardly** — boshqa so'z! U **\"deyarli ... emas\"** degani: *I hardly work* = *deyarli ishlamayman*. Ya'ni ❌ *She works hardly* teskari ma'no beradi. **fastly** degan so'z umuman **yo'q**." },
        { t: "tip", tone: "info", md: "**I'm well** / **I'm fine** — sog'lig'im yaxshi. *How are you? — I'm well, thanks.* Bu yerda **well** sog'liq haqida sifat sifatida ishlatiladi." },
        { t: "check", ex: { k: "choice", q: "\"Akam juda ko'p (qattiq) ishlaydi.\"", opts: ["My brother works very hardly.", "My brother works very hard.", "My brother works very hardy.", "My brother very hard works."], a: 1, why: "**hard** — ravish ham **hard**. *hardly* = deyarli ... emas." } },
      ],
    },
    {
      title: "Ravish gapda qayerda turadi?",
      blocks: [
        { t: "p", md: "O'zbekchada ravish fe'ldan **oldin** keladi: *ingliz tilida **yaxshi** gapiradi*. Ingliz tilida esa odatda **fe'l + ob'ekt + ravish**:" },
        {
          t: "table", head: ["Ega", "Fe'l", "Ob'ekt", "Ravish"],
          rows: [
            ["She", "speaks", "English", "very well."],
            ["He", "drives", "his car", "carefully."],
            ["They", "did", "the job", "quickly."],
            ["I", "work", "—", "hard."],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["She speaks English very well.", "He plays the piano beautifully.", "I did my homework quickly."] },
          bad: { title: "Xato", items: ["She speaks very well English.", "He plays beautifully the piano.", "I did quickly my homework."] },
        },
        { t: "tip", tone: "warn", md: "Asosiy qoida: ravish **fe'l bilan ob'ekt orasiga tushmaydi**. ❌ *speaks well English*. Fe'l va ob'ekt — \"do'stlar\", ularni ajratmang." },
        { t: "check", ex: { k: "order", uz: "U (she) ingliz tilida juda yaxshi gapiradi.", words: ["She", "speaks", "English", "very", "well"], extra: ["good"] } },
      ],
    },
    {
      title: "be + sifat, fe'l + ravish",
      blocks: [
        { t: "p", md: "**be** (am / is / are) dan keyin **sifat** keladi, oddiy harakat fe'lidan keyin — **ravish**. Juft gaplarni solishtiring:" },
        {
          t: "examples", items: [
            { en: "Your English is good. You speak English well.", uz: "Ingliz tilingiz yaxshi. Inglizcha yaxshi gapirasiz." },
            { en: "Aziz is slow. He walks slowly.", uz: "Aziz sekin. U sekin yuradi." },
            { en: "The music is loud. They play music loudly.", uz: "Musiqa baland. Ular musiqani baland qo'yishadi." },
            { en: "Our new manager is polite. She talks to everyone politely.", uz: "Yangi menejerimiz xushmuomala. U hamma bilan xushmuomala gaplashadi." },
          ],
        },
        { t: "tip", tone: "good", md: "Ravishni kuchaytirish uchun oldiga **very / really / quite** qo'ying: *very quickly, really well, quite slowly*." },
        { t: "check", ex: { k: "choice", q: "To'g'ri variantni tanlang: **Dilnoza is a ___ dancer. She dances ___.**", opts: ["beautiful / beautiful", "beautifully / beautiful", "beautiful / beautifully", "beautifully / beautifully"], a: 2, why: "*a … dancer* — ot → sifat **beautiful**; *dances* — fe'l → ravish **beautifully**." } },
      ],
    },
    {
      title: "O'qing: Ofisdagi jamoa",
      blocks: [
        {
          t: "text", title: "Our team at work",
          en: "I'm Rustam and I'm the manager of a small travel agency in Bukhara. There are four people in my team.\nMadina is our best worker. She works very hard and she speaks English and French well. She answers emails quickly and politely.\nBobur is a nice guy, but he often comes to work late. He drives fast, and I worry about him!\nOur designer, Sevara, works slowly but very carefully. Her work is always perfect.\nAnd Akmal? He talks loudly on the phone all day. The others can't stand it! But the tourists love him because he explains everything clearly.",
          uz: "Men Rustamman, Buxorodagi kichik turistik agentlikning menejeriman. Jamoamda to'rt kishi bor.\nMadina — eng yaxshi xodimimiz. U juda qattiq ishlaydi, inglizcha va fransuzcha yaxshi gapiradi. Xatlarga tez va xushmuomalalik bilan javob beradi.\nBobur yaxshi yigit, lekin ishga tez-tez kech keladi. U tez haydaydi, men u haqida xavotirlanaman!\nDizaynerimiz Sevara sekin, lekin juda ehtiyotkorlik bilan ishlaydi. Uning ishi doim mukammal.\nAkmal-chi? U kun bo'yi telefonda baland ovozda gapiradi. Boshqalar bunga chiday olmaydi! Lekin turistlar uni yaxshi ko'rishadi, chunki u hamma narsani aniq tushuntiradi.",
        },
        { t: "check", ex: { k: "choice", q: "Who works slowly?", opts: ["Madina", "Bobur", "Sevara", "Akmal"], a: 2, why: "*Sevara works **slowly** but very carefully.*" } },
        { t: "check", ex: { k: "tf", q: "Bobur always comes to work early.", a: false, why: "*He often comes to work **late**.*" } },
      ],
    },
    {
      title: "Dialog: Haydash darsi",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Instructor", en: "OK, Nilufar. Start the car. Slowly… Good!", uz: "Xo'sh, Nilufar. Mashinani o't oldiring. Sekin… Yaxshi!" },
            { who: "Nilufar", en: "Am I driving too fast?", uz: "Juda tez haydayapmanmi?" },
            { who: "Instructor", en: "No, you're driving well. But look carefully at the road signs.", uz: "Yo'q, yaxshi haydayapsiz. Lekin yo'l belgilariga diqqat bilan qarang." },
            { who: "Nilufar", en: "Sorry, I'm a bit nervous. I can't think clearly.", uz: "Kechirasiz, biroz hayajondaman. Aniq o'ylay olmayapman." },
            { who: "Instructor", en: "Don't worry. Breathe deeply and turn left here. Gently!", uz: "Xavotir olmang. Chuqur nafas oling va shu yerdan chapga buriling. Muloyim!" },
            { who: "Nilufar", en: "Like this?", uz: "Shundaymi?" },
            { who: "Instructor", en: "Perfect! You learn quickly. See you on Thursday.", uz: "Mukammal! Tez o'rganyapsiz. Payshanba kuni ko'rishguncha." },
          ],
        },
        { t: "check", ex: { k: "tf", q: "The instructor says Nilufar is driving well.", a: true, why: "*No, you're driving **well**.*" } },
      ],
    },
  ],
  words: [
    { en: "quickly", uz: "tez, tezda", ipa: "ˈkwɪk.li", pos: "adverb", ex: "She answers emails quickly.", exUz: "U xatlarga tez javob beradi." },
    { en: "slowly", uz: "sekin", ipa: "ˈsləʊ.li", pos: "adverb", ex: "Please speak slowly.", exUz: "Iltimos, sekin gapiring." },
    { en: "carefully", uz: "ehtiyotkorlik bilan, diqqat bilan", ipa: "ˈkeə.fəl.i", pos: "adverb", ex: "Read the question carefully.", exUz: "Savolni diqqat bilan o'qing." },
    { en: "quietly", uz: "jimgina, past ovozda", ipa: "ˈkwaɪ.ət.li", pos: "adverb", ex: "The children are playing quietly.", exUz: "Bolalar jimgina o'ynashyapti." },
    { en: "loudly", uz: "baland ovozda", ipa: "ˈlaʊd.li", pos: "adverb", ex: "He talks loudly on the phone.", exUz: "U telefonda baland ovozda gapiradi." },
    { en: "badly", uz: "yomon", ipa: "ˈbæd.li", pos: "adverb", ex: "I sing badly, but I love it.", exUz: "Yomon kuylayman, lekin buni yaxshi ko'raman." },
    { en: "easily", uz: "osongina, oson", ipa: "ˈiː.zɪ.li", pos: "adverb", ex: "She makes friends easily.", exUz: "U osongina do'st orttiradi." },
    { en: "well", uz: "yaxshi (qanday qilib)", ipa: "wel", pos: "adverb", ex: "My grandmother cooks very well.", exUz: "Buvim juda yaxshi ovqat pishiradi." },
    { en: "hard", uz: "qattiq, astoydil (ishlamoq)", ipa: "hɑːd", pos: "adverb", ex: "Farmers work hard in summer.", exUz: "Fermerlar yozda qattiq ishlashadi." },
    { en: "early", uz: "erta", ipa: "ˈɜː.li", pos: "adverb", ex: "I get up early on weekdays.", exUz: "Ish kunlari erta turaman." },
  ],
  practice: [
    { k: "match", pairs: [["quick", "quickly"], ["good", "well"], ["easy", "easily"], ["careful", "carefully"], ["fast", "fast"]] },
    { k: "match", pairs: [["slowly", "sekin"], ["loudly", "baland ovozda"], ["quietly", "jimgina"], ["hard", "astoydil"], ["badly", "yomon"]] },
    { k: "listen", say: "Please speak quietly.", opts: ["Please speak quickly.", "Please speak quietly.", "Please speak quite loudly."], a: 1, why: "\"KWAY-ət-li\" — **quietly** (jimgina)." },
    { k: "listen", say: "He works hard.", opts: ["He works hard.", "He hardly works.", "He walks hard."], a: 0 },
    { k: "fill", q: "My sister is a good singer. She sings very ___.", a: ["well"], uz: "Singlim yaxshi qo'shiqchi. U juda yaxshi kuylaydi.", why: "**good** ning ravishi — **well**." },
    { k: "fill", q: "Drive ___! The road is dangerous. (careful)", a: ["carefully"], uz: "Ehtiyotkorlik bilan haydang! Yo'l xavfli.", why: "**careful → carefully** (ikkita l)." },
    { k: "fill", q: "He got up late and ate his breakfast very ___. (quick)", a: ["quickly"], uz: "U kech turdi va nonushtasini juda tez yedi." },
    { k: "fill", q: "We lost the match. We played ___. (bad)", a: ["badly"], uz: "Biz o'yinda yutqazdik. Yomon o'ynadik." },
    { k: "choice", q: "To'g'ri gapni tanlang:", opts: ["Bobur speaks very well English.", "Bobur speaks English very good.", "Bobur speaks English very well.", "Bobur very well speaks English."], a: 2, why: "fe'l + ob'ekt + ravish: *speaks English very **well***." },
    { k: "choice", q: "Qaysi so'z ingliz tilida **yo'q**?", opts: ["quietly", "fastly", "happily", "early"], a: 1, why: "**fast** ravishi ham **fast**. *fastly* — yo'q so'z." },
    { k: "tf", q: "**She works hardly** = U qattiq ishlaydi.", a: false, why: "**hardly** = deyarli ... emas. To'g'ri: *She works **hard**.*" },
    { k: "tf", q: "**Your English is good.** — to'g'ri gap.", a: true, why: "**is** (be) dan keyin sifat — **good**. Fe'l bilan esa: *You speak English **well**.*" },
    { k: "order", uz: "U (he) mashinasini juda ehtiyotkorlik bilan haydaydi.", words: ["He", "drives", "his", "car", "very", "carefully"], extra: ["careful"] },
    { k: "translate", uz: "Iltimos, sekin gapiring.", a: ["Please speak slowly.", "Speak slowly, please.", "Please speak more slowly.", "Speak more slowly, please.", "Please talk slowly.", "Talk slowly, please."], why: "*speak* — fe'l → **slowly**." },
    { k: "translate", uz: "Ular qattiq ishlashadi.", a: ["They work hard.", "They work very hard.", "They work really hard."], why: "**hard** — ravish ham **hard** (hardly emas)." },
    { k: "speak", say: "She speaks English very well and works very hard.", uz: "U inglizcha juda yaxshi gapiradi va juda qattiq ishlaydi." },
  ],
  quiz: [
    { k: "choice", q: "\"U (she) chiroyli raqsga tushadi.\"", opts: ["She dances beautiful.", "She dances beautifully.", "She beautiful dances.", "She dances beautifuly."], a: 1, why: "**beautiful → beautifully** (ikkita l)." },
    { k: "choice", q: "**Akmal is a ___ driver. He drives ___.**", opts: ["fast / fast", "fastly / fast", "fast / fastly", "quick / fastly"], a: 0, why: "**fast** — sifat ham, ravish ham **fast**." },
    { k: "fill", q: "My grandmother can't hear you. Please speak ___. (loud)", a: ["loudly"], uz: "Buvim sizni eshitmayapti. Iltimos, baland gapiring." },
    { k: "fill", q: "I passed the exam ___. It wasn't difficult. (easy)", a: ["easily"], uz: "Imtihonni osongina topshirdim. Qiyin emasdi." },
    { k: "fill", q: "You're a good student. You did the test very ___.", a: ["well"], uz: "Siz yaxshi talabasiz. Testni juda yaxshi bajardingiz." },
    { k: "listen", say: "They work very hard.", opts: ["They work very hard.", "They hardly work.", "They walk very far."], a: 0 },
    { k: "tf", q: "**I did quickly my homework.** — to'g'ri gap.", a: false, why: "Ravish ob'ektdan keyin: *I did my homework **quickly**.*" },
    { k: "order", uz: "Rustamning jamoasi qattiq ishlaydi.", words: ["Rustam's", "team", "works", "hard"], extra: ["hardly", "is"] },
    { k: "translate", uz: "Men ertalab erta turaman.", a: ["I get up early in the morning.", "I wake up early in the morning.", "I get up early.", "I wake up early.", "In the morning I get up early.", "In the morning I wake up early."], why: "**early** — ravish ham **early**." },
    { k: "choice", q: "Matnda (Our team at work) **Madina** qanday ishlaydi?", opts: ["slowly and carefully", "very hard", "late", "loudly"], a: 1, why: "*Madina … works **very hard**.*" },
  ],
  summary: [
    "Sifat otni tasvirlaydi (*a quick worker*), ravish fe'lni (*works quickly*).",
    "Ravish = sifat + **-ly**: *slowly, carefully, easily, gently*.",
    "Noto'g'ri ravishlar: **good → well**, **fast → fast**, **hard → hard**, **early, late** o'zgarmaydi. *hardly* = deyarli ... emas!",
    "Tartib: **fe'l + ob'ekt + ravish** — *She speaks English well.* (❌ *speaks well English*)",
    "**be** dan keyin sifat: *Your English is good.* — fe'ldan keyin ravish: *You speak English well.*",
  ],
  homework: "Oilangiz yoki hamkasblaringizdan 5 kishini tanlang va har biri haqida ravish bilan gap yozing (*My dad drives carefully. My sister speaks English well…*). Keyin o'zingiz haqingizda 3 ta gap yozing: nimani yaxshi, nimani yomon va nimani tez qilasiz.",
};

export default lesson;
