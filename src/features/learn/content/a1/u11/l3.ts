import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u11-l3",
  title: "Present Perfect or Past Simple?",
  titleUz: "Present Perfect yoki Past Simple?",
  goal: "Ikki zamonni to'g'ri tanlaysiz: vaqt aytilmasa — **Present Perfect** (*I've been to Bukhara*), aniq o'tgan vaqt bo'lsa — **Past Simple** (*I went there **last summer***). Tabiiy suhbat quriladi: **Have you ever…? → When did you…? Did you like it?**",
  slides: [
    {
      title: "Bitta voqea — ikki zamon",
      blocks: [
        { t: "p", md: "Takror: **Present Perfect** (*have / has + V3*) — hayotdagi tajriba yoki natija, **vaqt aytilmaydi**. **Past Simple** (*V2*) — **aniq, tugagan vaqt**. Real suhbatda ikkalasi birga keladi:" },
        {
          t: "dialog", lines: [
            { who: "A", en: "Have you ever been to Samarkand?", uz: "Samarqandda bo'lganmisiz?" },
            { who: "B", en: "Yes, I have. I went there last summer.", uz: "Ha, bo'lganman. O'tgan yozda bordim." },
            { who: "A", en: "Did you see the Registan?", uz: "Registonni ko'rdingizmi?" },
            { who: "B", en: "Yes, I did. It was amazing!", uz: "Ha, ko'rdim. Ajoyib edi!" },
          ],
        },
        { t: "tip", tone: "info", md: "Qolipni eslab qoling: **1-gap Present Perfect** (umumiy savol / yangilik) → **keyingi gaplar Past Simple** (qachon, qayerda, qanday — detallar). Vaqt paydo bo'ldimi — Past Simple ga o'tamiz." },
        {
          t: "table", head: ["", "Present Perfect", "Past Simple"],
          rows: [
            ["Vaqt", "aytilmaydi / muhim emas", "aniq: yesterday, last year, in 2020"],
            ["Shakl", "have / has + V3", "V2 (did / didn't + V1)"],
            ["Savol", "Have you ever…?", "When did you…? Did you…?"],
            ["Misol", "I've seen this film.", "I saw it on Sunday."],
          ],
        },
        { t: "check", ex: { k: "choice", q: "**Have you ever tried horse meat?** — **Yes, I have. I ___ it at a wedding last year.**", opts: ["have tried", "tried", "try", "have try"], a: 1, why: "*last year* — aniq vaqt → Past Simple: **tried**." } },
      ],
    },
    {
      title: "Signal so'zlar",
      blocks: [
        { t: "p", md: "Gapdagi vaqt so'zlari qaysi zamon kerakligini ko'rsatadi:" },
        {
          t: "table", head: ["Present Perfect bilan", "Past Simple bilan"], speak: [0, 1],
          rows: [
            ["ever, never", "yesterday, the day before yesterday"],
            ["once, twice, three times", "last night / week / year"],
            ["in my life", "two days ago, a long time ago"],
            ["I've been there. (no time word)", "in 2019, in May, on Monday, at six"],
            ["Have you ever…?", "When…? What time…? When I was a child…"],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I saw him yesterday.", "When did you go to Bukhara?", "She lived in Fergana in 2018.", "I've been to Fergana."] },
          bad: { title: "Xato", items: ["I've seen him yesterday.", "When have you been to Bukhara?", "She has lived in Fergana in 2018.", "I've been to Fergana last year."] },
        },
        { t: "tip", tone: "warn", md: "Eng ko'p xato: **Present Perfect + aniq vaqt**. *I have seen him yesterday* ❌. Agar **yesterday, ago, last, in 2020** bo'lsa — Present Perfect **ishlatilmaydi**. **When…?** savoli ham doim Past Simple: *When **did** you **go**?*" },
        { t: "check", ex: { k: "fill", q: "We ___ to Khiva two years ago. (go)", a: ["went"], why: "*two years ago* → Past Simple: **went**." } },
        { t: "check", ex: { k: "fill", q: "I've never ___ a waterfall. (see)", a: ["seen"], why: "*never*, vaqt yo'q → Present Perfect: **seen**." } },
      ],
    },
    {
      title: "Yangilik → detallar",
      blocks: [
        { t: "p", md: "Yangilik aytganda ham xuddi shu qolip: avval **Present Perfect** (nima bo'ldi), keyin **Past Simple** (qachon, qanday):" },
        {
          t: "examples", items: [
            { en: "I've lost my phone. I left it on the bus this morning.", uz: "Telefonimni yo'qotdim. Bugun ertalab avtobusda qoldirdim." },
            { en: "Malika has found a new job. She started on Monday.", uz: "Malika yangi ish topdi. Dushanba kuni boshladi." },
            { en: "We've bought a car! We bought it from my uncle.", uz: "Mashina oldik! Uni amakimdan sotib oldik." },
            { en: "Have you heard? Ali has won the competition. He got first prize yesterday.", uz: "Eshitdingmi? Ali musobaqada g'olib bo'ldi. Kecha birinchi o'rinni oldi." },
          ],
        },
        { t: "tip", tone: "info", md: "**this morning, today, this week** — agar bu vaqt **tugagan** bo'lsa (masalan, kechqurun \"bugun ertalab\" haqida) — Past Simple: *I **left** it this morning.* Hozircha shuni bilish yetarli: **aniq vaqtni aytsangiz — Past Simple**." },
        { t: "check", ex: { k: "choice", q: "**Malika has found a new job.** — **Really? When ___ start?**", opts: ["has she", "did she", "does she", "she has"], a: 1, why: "**When…?** → Past Simple: **did she start**." } },
      ],
    },
    {
      title: "Suhbatni davom ettirish",
      blocks: [
        { t: "p", md: "*Have you ever…?* ga **ha** javob olsangiz, Past Simple da savollar bering. Bu suhbatni jonli qiladi:" },
        {
          t: "table", head: ["Savol", "Javob"], speak: [0, 1],
          rows: [
            ["Have you ever been to Turkey?", "Yes, I have."],
            ["When did you go?", "I went there in 2022."],
            ["Who did you go with?", "With my wife."],
            ["Where did you stay?", "We stayed in a small hotel."],
            ["What did you do there?", "We went sightseeing and bought souvenirs."],
            ["Did you like it?", "Yes, I loved it!"],
          ],
        },
        { t: "tip", tone: "good", md: "Past Simple savolida **did + V1**: *When did you **go**?* (*went* emas!). Present Perfect savolida **have + V3**: *Have you **been**?*" },
        { t: "check", ex: { k: "order", uz: "U yerda nima qildingiz?", words: ["What", "did", "you", "do", "there?"], extra: ["are", "went"] } },
      ],
    },
    {
      title: "O'qing: Anvarning birinchi safari",
      blocks: [
        {
          t: "text", title: "My first trip abroad",
          en: "I'm Anvar and I'm a student from Namangan. I have travelled a lot in Uzbekistan, but I have been abroad only once.\nLast spring I went to Georgia with two friends. We flew from Tashkent to Tbilisi. We stayed with a local family and ate delicious Georgian bread every day. On the third day a guide took us to the mountains. The view was unforgettable!\nI have seen many beautiful places in my life, but I have never seen mountains like those. I bought some souvenirs for my family and took hundreds of photos. Now I want to visit Japan. Have you ever been there?",
          uz: "Men Anvarman, Namanganlik talabaman. O'zbekiston bo'ylab ko'p sayohat qilganman, lekin chet elda faqat bir marta bo'lganman.\nO'tgan bahorda ikki do'stim bilan Gruziyaga bordim. Toshkentdan Tbilisiga uchdik. Mahalliy oilanikida turdik va har kuni mazali gruzin nonini yedik. Uchinchi kuni gid bizni tog'larga olib bordi. Manzara unutilmas edi!\nHayotimda ko'p go'zal joylarni ko'rganman, lekin bunday tog'larni hech qachon ko'rmaganman. Oilamga esdalik sovg'alari oldim va yuzlab suratga tushirdim. Endi Yaponiyaga bormoqchiman. Siz u yerda bo'lganmisiz?",
        },
        { t: "tip", tone: "info", md: "Matnga qarang: umumiy tajriba — **have travelled, have been, have seen, have never seen**; aniq safar (*last spring*) haqida detallar — **went, flew, stayed, ate, took, bought**." },
        { t: "check", ex: { k: "tf", q: "Anvar has been abroad twice.", a: false, why: "*I have been abroad only **once**.*" } },
        { t: "check", ex: { k: "choice", q: "When did Anvar go to Georgia?", opts: ["Last summer.", "Last spring.", "Two years ago.", "He has never been there."], a: 1, why: "*Last spring I went to Georgia.*" } },
      ],
    },
    {
      title: "Dialog: ish suhbatida",
      blocks: [
        { t: "p", md: "Gulnoza mehmonxonaga ishga kirmoqchi. Menejer u bilan suhbatlashyapti:" },
        {
          t: "dialog", lines: [
            { who: "Manager", en: "Have you ever worked in a hotel?", uz: "Hech mehmonxonada ishlaganmisiz?" },
            { who: "Gulnoza", en: "Yes, I have. I worked at a hotel in Bukhara for two years.", uz: "Ha. Buxorodagi mehmonxonada ikki yil ishlaganman." },
            { who: "Manager", en: "When did you leave?", uz: "Qachon ketdingiz?" },
            { who: "Gulnoza", en: "I left last March. Then I moved to Tashkent.", uz: "O'tgan mart oyida ketdim. Keyin Toshkentga ko'chdim." },
            { who: "Manager", en: "Have you ever worked with foreign guests?", uz: "Xorijiy mehmonlar bilan ishlaganmisiz?" },
            { who: "Gulnoza", en: "Yes, many times. Last year I helped a group of tourists from Germany.", uz: "Ha, ko'p marta. O'tgan yili Germaniyadan kelgan turistlar guruhiga yordam berdim." },
            { who: "Manager", en: "Great. Have you ever been to England?", uz: "Ajoyib. Angliyada bo'lganmisiz?" },
            { who: "Gulnoza", en: "No, I haven't. But I studied English at university.", uz: "Yo'q. Lekin universitetda ingliz tilini o'rganganman." },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Gulnoza left the hotel in Bukhara last March.", a: true, why: "*I left last March.*" } },
      ],
    },
  ],
  words: [
    { en: "trip", uz: "safar, sayohat", ipa: "trɪp", pos: "noun", ex: "It was my first trip abroad.", exUz: "Bu mening chet elga birinchi safarim edi." },
    { en: "souvenir", uz: "esdalik sovg'asi", ipa: "ˌsuːvəˈnɪə", pos: "noun", ex: "I bought souvenirs for my family.", exUz: "Oilamga esdalik sovg'alari oldim." },
    { en: "go sightseeing", uz: "diqqatga sazovor joylarni ko'rib chiqmoq", ipa: "ɡəʊ ˈsaɪtsiːɪŋ", pos: "phrase", ex: "We went sightseeing in Khiva.", exUz: "Xivada diqqatga sazovor joylarni aylandik." },
    { en: "view", uz: "manzara", ipa: "vjuː", pos: "noun", ex: "The view from the mountain was beautiful.", exUz: "Tog'dan manzara go'zal edi." },
    { en: "guide", uz: "gid, yo'lboshlovchi", ipa: "ɡaɪd", pos: "noun", ex: "Our guide spoke very good English.", exUz: "Gidimiz ingliz tilida juda yaxshi gapirardi." },
    { en: "local", uz: "mahalliy", ipa: "ˈləʊkl", pos: "adjective", ex: "We stayed with a local family.", exUz: "Mahalliy oilanikida turdik." },
    { en: "amazing", uz: "ajoyib, hayratlanarli", ipa: "əˈmeɪzɪŋ", pos: "adjective", ex: "The festival was amazing!", exUz: "Festival ajoyib edi!" },
    { en: "unforgettable", uz: "unutilmas", ipa: "ˌʌnfəˈɡetəbl", pos: "adjective", ex: "It was an unforgettable experience.", exUz: "Bu unutilmas tajriba bo'ldi." },
    { en: "waterfall", uz: "sharshara", ipa: "ˈwɔːtəfɔːl", pos: "noun", ex: "Have you ever seen a waterfall?", exUz: "Hech sharshara ko'rganmisiz?" },
    { en: "festival", uz: "festival, bayram", ipa: "ˈfestɪvl", pos: "noun", ex: "We went to a music festival last summer.", exUz: "O'tgan yozda musiqa festivaliga bordik." },
  ],
  practice: [
    { k: "choice", q: "I ___ Aziz yesterday.", opts: ["have seen", "saw", "have saw", "seen"], a: 1, why: "*yesterday* → Past Simple: **saw**." },
    { k: "choice", q: "___ you ever ___ a waterfall?", opts: ["Has … seen", "Have … seen", "Have … saw", "Do … see"], a: 1, why: "*ever*, vaqt yo'q → **Have you ever seen**. (*Has* faqat he / she / it bilan.)" },
    { k: "choice", q: "Qaysi gap **to'g'ri**?", opts: ["When have you arrived?", "I've been to Khiva in 2021.", "She has visited Paris last year.", "We went to a festival last summer."], a: 3, why: "Aniq vaqt (*last summer*) → Past Simple. Qolganlarida Present Perfect aniq vaqt bilan ishlatilgan." },
    { k: "fill", q: "My parents ___ married in 1998. (get)", a: ["got"], why: "*in 1998* → Past Simple: **got**." },
    { k: "fill", q: "Have you ever ___ a camel? (ride)", a: ["ridden"] },
    { k: "fill", q: "When ___ you buy this souvenir?", a: ["did"], why: "**When…?** → **did**." },
    { k: "fill", q: "I've been to Bukhara, but I ___ never been to Khiva.", a: ["have", "'ve", "ve"], why: "Vaqt yo'q, *never* → **have** never been." },
    { k: "tf", q: "**I have met him two days ago.** — to'g'ri gap.", a: false, why: "*ago* → Past Simple: **I met him two days ago.**" },
    { k: "tf", q: "**Have you ever been to Japan? — Yes, I have. I went there in 2023.** — to'g'ri suhbat.", a: true, why: "Savol — Present Perfect, aniq vaqtli javob — Past Simple." },
    { k: "listen", say: "We went sightseeing last weekend.", opts: ["We went sightseeing last weekend.", "We've been sightseeing last weekend.", "We want sightseeing last weekend."], a: 0 },
    { k: "match", pairs: [["souvenir", "esdalik sovg'asi"], ["view", "manzara"], ["guide", "gid"], ["waterfall", "sharshara"], ["local", "mahalliy"]] },
    { k: "order", uz: "Siz Samarqandga qachon bordingiz?", words: ["When", "did", "you", "go", "to", "Samarkand?"], extra: ["have", "went"] },
    { k: "order", uz: "Men hech qachon festivalda bo'lmaganman.", words: ["I've", "never", "been", "to", "a", "festival."], extra: ["was", "didn't"] },
    { k: "translate", uz: "Biz o'tgan yili Turkiyaga bordik.", a: ["We went to Turkey last year.", "Last year we went to Turkey.", "We visited Turkey last year.", "Last year we visited Turkey.", "We travelled to Turkey last year.", "We traveled to Turkey last year."] },
    { k: "translate", uz: "U (she) hech qachon sharshara ko'rmagan.", a: ["She has never seen a waterfall.", "She's never seen a waterfall.", "She hasn't seen a waterfall.", "She has not seen a waterfall.", "She hasn't ever seen a waterfall."] },
    { k: "speak", say: "Have you ever been to Georgia? — Yes, I went there last spring.", uz: "Gruziyada bo'lganmisiz? — Ha, o'tgan bahorda bordim." },
  ],
  quiz: [
    { k: "choice", q: "She ___ to London three times.", opts: ["has been", "has gone", "have been", "was"], a: 0, why: "*three times*, vaqt yo'q, tajriba → **has been**. *has gone* — ketgan, hali u yerda (uch marta \"ketib qolish\" mantiqsiz)." },
    { k: "choice", q: "I ___ my keys last night.", opts: ["have lost", "lost", "have lose", "lose"], a: 1, why: "*last night* → **lost**." },
    { k: "choice", q: "**I've been to Paris.** — **Oh! When ___?**", opts: ["have you gone", "did you go", "did you went", "you went"], a: 1, why: "**When + did + V1**." },
    { k: "fill", q: "Look! I ___ bought a new phone!", a: ["have", "'ve", "ve"], why: "Yangilik, vaqt yo'q → **have bought**." },
    { k: "fill", q: "Our guide ___ us to a waterfall on Tuesday. (take)", a: ["took"], why: "*on Tuesday* → **took**." },
    { k: "tf", q: "**ago** bilan Present Perfect ishlatilmaydi.", a: true, why: "*ago* — aniq o'tgan vaqt → Past Simple." },
    { k: "listen", say: "Have you ever been to a festival?", opts: ["Have you ever been to a festival?", "Did you ever go to a festival?", "Have you ever gone to a festival?"], a: 0 },
    { k: "order", uz: "Men u yerda ko'p esdalik sovg'alari oldim.", words: ["I", "bought", "a", "lot", "of", "souvenirs", "there."], extra: ["buyed", "buy"] },
    { k: "translate", uz: "Siz hech Xivada bo'lganmisiz?", a: ["Have you ever been to Khiva?", "Have you been to Khiva?", "Have you ever been in Khiva?", "Have you ever visited Khiva?"] },
    { k: "translate", uz: "Men uni ikki kun oldin ko'rdim.", a: ["I saw him two days ago.", "I saw her two days ago.", "I saw it two days ago.", "Two days ago I saw him.", "Two days ago I saw her.", "Two days ago I saw it."] },
  ],
  summary: [
    "**Present Perfect** — vaqt aytilmaydi: tajriba (*I've been to Khiva*) yoki yangilik (*I've lost my phone*).",
    "**Past Simple** — aniq tugagan vaqt: **yesterday, last…, …ago, in 2020, when I was…**",
    "**When…?** savoli doim Past Simple: *When **did** you **go**?* (*When have you been* ❌)",
    "Suhbat qolipi: **Have you ever…? → Yes, I have. → When did you…? Did you like it?**",
  ],
  homework: "Hayotingizdagi eng qiziq safar haqida 8–10 gaplik hikoya yozing (Anvarning matni kabi): avval 2 ta umumiy gap Present Perfect da (*I've been to…, I've never…*), keyin bitta safar haqida detallar Past Simple da (*Last year I went…, We stayed…*). Oxirida bitta savol bilan tugating: *Have you ever been there?*",
};

export default lesson;
