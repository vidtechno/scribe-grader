import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u30-l7",
  title: "Writing: a review or a story (B2 final task)",
  titleUz: "Yozish: sharh va hikoya (B2 yakuniy topshirig'i)",
  goal: "B2 yakuniy yozma topshirig'ini bajarasiz: kitob, film yoki joy haqida **250 so'zli sharh** (*review*) yoki berilgan birinchi gap bo'yicha **hikoya**. Tuzilma (kirish, mazmun, baho, kamchilik, tavsiya), **tavsifiy so'zlar** (*gripping, convincing, thought-provoking*), balansli baho (*although, despite, admittedly*) va o'z ishingizni **B2 tekshiruv ro'yxati** bo'yicha baholashni o'rganasiz.",
  slides: [
    {
      title: "Vazifa va tuzilma",
      blocks: [
        { t: "p", md: "B2 yakuniy yozma topshirig'ida odatda ikki variant bo'ladi: **sharh** (*review*) yoki **hikoya** (*story*). Ikkalasi ham **250 so'z** atrofida. Sharhda siz o'z fikringizni **asoslab**, **muvozanatli** (ham yaxshi, ham yomon tomonlarni) yozasiz." },
        {
          t: "table", head: ["Abzats", "Mazmuni", "Namuna ibora"], speak: [2],
          rows: [
            ["1. Kirish", "nima haqida, kim yozgan, qayerda bo'ladi", "…is a quiet drama set on a remote island."],
            ["2. Mazmun / tavsif", "syujet yoki joyning qisqa tavsifi (oxirini aytmang)", "It tells the story of an old sailor who…"],
            ["3. Baho", "eng yaxshi tomonlari, dalil bilan", "What impressed me most was…"],
            ["4. Kamchilik", "kamchilik yoki zaif tomon", "Admittedly, the storyline is predictable."],
            ["5. Tavsiya", "kimga tavsiya qilasiz, umumiy xulosa", "I would highly recommend it to anyone who…"],
          ],
        },
        { t: "tip", tone: "info", md: "Sharh — **yarim rasmiy** uslub. Qisqartmalar (*it's, don't*) ni kamroq ishlating, «very good / nice» o'rniga aniqroq sifat tanlang." },
        { t: "check", ex: { k: "choice", q: "Which paragraph usually comes last in a review?", opts: ["Recommendation", "Plot summary", "Introduction", "Criticism"], a: 0, why: "Oxirgi abzats: **tavsiya** va umumiy xulosa." } },
      ],
    },
    {
      title: "Sharh uchun so'zlar",
      blocks: [
        { t: "p", md: "Quyidagi 10 ta so'z va birikma sharhning asosiy qurilish bloklari. *Good, bad, interesting* o'rniga ularni ishlating." },
        {
          t: "table", head: ["So'z", "Ma'nosi", "Misol"], speak: [0, 2],
          rows: [
            ["gripping", "diqqatni tortadigan, qiziqarli", "The novel is gripping from the first page."],
            ["predictable", "oldindan bilinadigan", "The ending is rather predictable."],
            ["thought-provoking", "o'ylantiradigan", "It is a thought-provoking documentary."],
            ["well-paced", "sur'ati to'g'ri tanlangan", "The film is well-paced, with no boring scenes."],
            ["storyline", "syujet chizig'i", "The storyline follows two sisters."],
            ["portray", "tasvirlamoq, rolni ijro etmoq", "She portrays a brave doctor."],
            ["convincing", "ishonarli", "The acting is very convincing."],
            ["cast", "aktyorlar tarkibi", "The cast includes many young actors."],
            ["soundtrack", "film musiqasi", "The soundtrack is calm and beautiful."],
            ["highly recommended", "qattiq tavsiya etiladi", "This café is highly recommended."],
          ],
        },
        { t: "tip", tone: "warn", md: "**Portray** — o'timli fe'l, predlog kerak emas: *The film portrays a young pilot*. **Cast** — jamlovchi ot: *The cast is excellent* (Britaniya ingliz tilida *are* ham uchraydi)." },
        { t: "check", ex: { k: "choice", q: "A film in which you can guess the ending from the beginning is ___.", opts: ["predictable", "gripping", "convincing", "well-paced"], a: 0, why: "Oldindan bilinadigan: **predictable**." } },
        { t: "check", ex: { k: "match", pairs: [["gripping", "diqqatni tortadigan"], ["convincing", "ishonarli"], ["thought-provoking", "o'ylantiradigan"], ["cast", "aktyorlar tarkibi"], ["soundtrack", "film musiqasi"]] } },
      ],
    },
    {
      title: "Namuna sharh: The Last Lighthouse",
      blocks: [
        { t: "p", md: "Quyida ikki qismli namuna (birinchi qism — kirish va mazmun, ikkinchi qism — baho, kamchilik va tavsiya). Film — **o'ylab topilgan**." },
        {
          t: "text", title: "The Last Lighthouse (1)", voice: "emma",
          en: "The Last Lighthouse is a quiet drama set on a remote island in the 1950s. It tells the story of an old sailor who refuses to leave his lighthouse when the government decides to close it. At first his daughter, a young nurse, tries to persuade him to move to the mainland. Gradually, however, she realises that the lighthouse holds the memories of three generations of her family. The cast is small, but the performances are convincing, especially that of the actor who portrays the sailor as a stubborn man with great warmth. The soundtrack, which uses only a guitar and the sound of the sea, creates a calm and thoughtful atmosphere.",
          uz: "The Last Lighthouse — 1950-yillarda olis orolda sodir bo'ladigan sokin drama. U hukumat mayakni yopishga qaror qilganda uni tark etishdan bosh tortgan keksa dengizchi haqida hikoya qiladi. Avval qizi, yosh hamshira, uni materikka ko'chishga ko'ndirmoqchi bo'ladi. Ammo asta-sekin u mayak oilasining uch avlodi xotirasini saqlashini tushunib yetadi. Aktyorlar tarkibi kichik, lekin ijro ishonarli, ayniqsa dengizchini o'jar, lekin mehribon odam sifatida tasvirlagan aktyorniki. Faqat gitara va dengiz tovushidan foydalangan film musiqasi sokin va o'ychan muhit yaratadi.",
        },
        {
          t: "text", title: "The Last Lighthouse (2)", voice: "emma",
          en: "What impressed me most was the way the director builds tension without noise or special effects. The film is slow, yet it is well paced, and the final scene is thought-provoking. Admittedly, the storyline is predictable in places, and a few secondary characters are underdeveloped. Despite these weaknesses, I found the film gripping from beginning to end. On the whole, it is a moving story about family and memory. I would highly recommend it to anyone who enjoys thoughtful drama, although viewers who prefer fast action may find it too calm.",
          uz: "Meni eng ko'p hayratga solgani rejissyor shovqin va maxsus effektlarsiz taranglikni qanday yaratgani edi. Film sekin, lekin sur'ati to'g'ri tanlangan va yakuniy sahna o'ylantiradi. To'g'ri, syujet ba'zi joylarda oldindan bilinadi va ba'zi ikkinchi darajali qahramonlar yetarli ochilmagan. Bu kamchiliklarga qaramay, men filmni boshidan oxirigacha diqqatni tortadigan deb topdim. Umuman olganda, bu oila va xotira haqidagi ta'sirli hikoya. Uni o'ychan dramani yoqtiradigan har kimga qattiq tavsiya qilaman, garchi tez harakatni afzal ko'radiganlarga u juda sokin tuyulishi mumkin.",
        },
        { t: "check", ex: { k: "tf", q: "The reviewer thinks the film is perfect and has no weaknesses.", a: false, why: "*Admittedly, the storyline is predictable… a few secondary characters are underdeveloped.* — kamchiliklar aytilgan." } },
        { t: "check", ex: { k: "choice", q: "Who may NOT enjoy the film, according to the review?", opts: ["Viewers who prefer fast action", "People who like thoughtful drama", "Fans of quiet music", "People interested in family stories"], a: 0, why: "*Viewers who prefer fast action may find it too calm.*" } },
      ],
    },
    {
      title: "Muvozanatli baho: bog'lovchilar",
      blocks: [
        { t: "p", md: "Yaxshi sharh **ikkala tomonni** ko'rsatadi. Buning uchun qarama-qarshilik bog'lovchilari kerak:" },
        {
          t: "table", head: ["Bog'lovchi", "Qoida", "Misol"], speak: [2],
          rows: [
            ["although / though", "+ gap (*but* kerak emas)", "Although the plot is simple, the acting is strong."],
            ["despite / in spite of", "+ ot yoki -ing", "Despite the slow start, the film is gripping."],
            ["however", "yangi gap boshida, vergul bilan", "The book is long. However, it is easy to read."],
            ["admittedly", "kamchilikni tan olish", "Admittedly, the ending is predictable."],
            ["on the whole / all in all", "xulosa", "On the whole, it is an excellent film."],
          ],
        },
        { t: "tip", tone: "warn", md: "**Although** + **but** birga ishlatilmaydi: *Although it is long, **but** it is good* — xato. **Despite of** ham xato: faqat **despite** yoki **in spite of**." },
        { t: "p", md: "**Idioma va collocation** (*keeps you on the edge of your seat, steeped in history*) — me'yorida: **1–2 ta**, aks holda uslub bo'lib ketadi." },
        { t: "check", ex: { k: "fix", wrong: "Despite of the long running time, the film is exciting.", a: ["Despite the long running time, the film is exciting.", "In spite of the long running time, the film is exciting."], hint: "predlog", why: "To'g'ri: **despite** (of siz) yoki **in spite of**." } },
        { t: "check", ex: { k: "choice", q: "Which sentence is correct?", opts: ["Although the cast is small, the performances are convincing.", "Although the cast is small, but the performances are convincing.", "Despite the cast is small, the performances are convincing.", "In spite the cast is small, the performances are convincing."], a: 0, why: "**Although** + gap; *but* ishlatilmaydi. *Despite* dan keyin gap emas, ot kerak." } },
      ],
    },
    {
      title: "Hikoya varianti",
      blocks: [
        { t: "p", md: "Agar hikoyani tanlasangiz, **birinchi gap** beriladi (*When the phone rang at midnight, I knew something was wrong.*). Tuzilma: **boshlanish → rivojlanish → kulminatsiya → yechim**." },
        {
          t: "table", head: ["Qism", "Nima qilinadi", "Zamon"],
          rows: [
            ["Boshlanish", "joy, qahramon, vaziyat", "Past Simple, Past Continuous"],
            ["Rivojlanish", "muammo paydo bo'ladi", "Past Simple, Past Perfect"],
            ["Kulminatsiya", "eng keskin lahza", "Past Simple, qisqa gaplar"],
            ["Yechim", "natija, his-tuyg'u", "Past Simple + qisqa xulosa"],
          ],
        },
        {
          t: "compare",
          good: { title: "Ko'rsating (show)", items: ["Her hands were shaking as she opened the door.", "He slammed the book shut and walked out."] },
          bad: { title: "Shunchaki aytmang (tell)", items: ["She was very scared.", "He was very angry."] },
        },
        { t: "tip", tone: "info", md: "Hikoyada **his-tuyg'uni** sifat bilan emas, **harakat va tafsilot** bilan ko'rsating. Aniq fe'llardan foydalaning: *whisper, stumble, grab* (*say, go, take* o'rniga)." },
        { t: "check", ex: { k: "choice", q: "Which sentence *shows* the feeling instead of just telling it?", opts: ["His voice trembled as he read the letter.", "He was very sad.", "He felt bad about the news.", "The news was not good."], a: 0, why: "**Ko'rsatish**: tashqi belgi (*voice trembled*)." } },
      ],
    },
    {
      title: "Tipik xatolar (o'zbek tilidan interferensiya)",
      blocks: [
        { t: "p", md: "Sharh yozganda eng ko'p uchraydigan xatolar so'zma-so'z tarjimadan chiqadi: «tavsiya qilaman» → *recommend to read*, «haqida hikoya qiladi» → *tells about*." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I highly recommend reading this book.", "The film tells the story of a young doctor.", "The actors played very well.", "Although the plot is simple, the acting is excellent."] },
          bad: { title: "Xato", items: ["I highly recommend to read this book.", "The film tells about a young doctor.", "The actors played very good.", "Although the plot is simple, but the acting is excellent."] },
        },
        { t: "tip", tone: "warn", md: "**1)** *Recommend* + **-ing** yoki **that you + fe'l**, *recommend to read* emas. **2)** *Tell about* emas: **tells the story of / is about**. **3)** Fe'lni ravish bilan aniqlang: *played **well***. **4)** *Although* + *but* birga kelmaydi." },
        { t: "check", ex: { k: "fix", wrong: "I highly recommend to read this book.", a: ["I highly recommend reading this book.", "I highly recommend that you read this book.", "I highly recommend this book."], hint: "recommend + ?", why: "*Recommend* dan keyin **-ing** yoki **that you read**." } },
        { t: "check", ex: { k: "fix", wrong: "The film tells about a young doctor.", a: ["The film tells the story of a young doctor.", "The film is about a young doctor."], hint: "fe'l", why: "**tells the story of** yoki **is about**." } },
        { t: "check", ex: { k: "fix", wrong: "The actors played very good.", a: ["The actors played very well."], hint: "sifat / ravish", why: "Fe'lni **ravish** (*well*) aniqlaydi." } },
        { t: "check", ex: { k: "fix", wrong: "Although the plot is simple, but the acting is excellent.", a: ["Although the plot is simple, the acting is excellent."], hint: "ortiqcha so'z", why: "**Although** bilan **but** ishlatilmaydi." } },
      ],
    },
    {
      title: "Tekshiruv ro'yxati va dialog",
      blocks: [
        { t: "p", md: "Yozib bo'lgach, ishingizni shu ro'yxat bo'yicha baholang:" },
        {
          t: "table", head: ["Mezon", "Savol"],
          rows: [
            ["Mazmun", "Sharhda ham ijobiy, ham salbiy tomonlar bormi? Aniq tavsiya bormi?"],
            ["Tuzilma", "5 ta abzats bormi? Har abzats bitta fikrga bag'ishlanganmi?"],
            ["Lug'at", "Kamida 5 ta yangi so'z va 1–2 ta collocation / idioma ishlatdimmi? *Very good* takrorlanmadimi?"],
            ["Bog'lovchilar", "Kamida 3 ta (*although, despite, however, admittedly*) bormi?"],
            ["Aniqlik", "Zamonlar, artikllar, predloglar tekshirildimi? 230–270 so'z orasidami?"],
          ],
        },
        { t: "tip", tone: "good", md: "**B2 can-do:** «Men tanlagan mavzuda aniq, batafsil matn yoza olaman. Bir mavzuning afzalliklari va kamchiliklarini ko'rsata olaman. Hikoya va sharhda o'z fikrimni asoslab beraman.»" },
        {
          t: "dialog", lines: [
            { who: "Olivia", en: "Adam, could you check my review of the new café? I think it's too positive.", uz: "Adam, yangi kafe haqidagi sharhimni tekshirib bera olasanmi? Menimcha, u juda ijobiy." },
            { who: "Adam", en: "Sure. You wrote 'very good' four times. Try 'outstanding' or 'memorable'.", uz: "Albatta. «very good» ni to'rt marta yozibsan. «outstanding» yoki «memorable» ni sinab ko'r." },
            { who: "Olivia", en: "Good point. Should I mention the prices?", uz: "To'g'ri aytding. Narxlar haqida yozishim kerakmi?", },
            { who: "Adam", en: "Yes. Admittedly, it's expensive, but the quality is high. That makes your review balanced.", uz: "Ha. To'g'ri, qimmat, lekin sifat yuqori. Bu sharhingni muvozanatli qiladi." },
            { who: "Olivia", en: "And the ending? I wrote 'I recommend to go there'.", uz: "Yakuni-chi? «I recommend to go there» deb yozdim." },
            { who: "Adam", en: "Change it to 'I highly recommend visiting it'. It sounds more natural.", uz: "Uni «I highly recommend visiting it» ga o'zgartir. Bu tabiiyroq eshitiladi." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "Why does Adam say the review needs to mention the prices?", opts: ["To make the review balanced", "Because prices are always low", "Because the café is cheap", "To make the review shorter"], a: 0, why: "*That makes your review balanced.*" } },
      ],
    },
  ],
  words: [
    { en: "gripping", uz: "diqqatni tortadigan", ipa: "ˈɡrɪp.ɪŋ", pos: "adj", ex: "The thriller was so gripping that I finished it in one night.", exUz: "Triller shu qadar qiziqarli ediki, uni bir kechada tugatdim." },
    { en: "predictable", uz: "oldindan bilinadigan", ipa: "prɪˈdɪk.tə.bəl", pos: "adj", ex: "The plot of the film was a little predictable.", exUz: "Filmning syujeti biroz oldindan bilinar edi." },
    { en: "thought-provoking", uz: "o'ylantiradigan", ipa: "ˈθɔːt prəˌvəʊ.kɪŋ", pos: "adj", ex: "It is a thought-provoking book about modern life.", exUz: "Bu zamonaviy hayot haqidagi o'ylantiradigan kitob." },
    { en: "well-paced", uz: "sur'ati to'g'ri tanlangan", ipa: "ˌwel ˈpeɪst", pos: "adj", ex: "The story is well-paced and never feels slow.", exUz: "Hikoya sur'ati yaxshi tanlangan va hech qachon sust tuyulmaydi." },
    { en: "storyline", uz: "syujet chizig'i", ipa: "ˈstɔː.ri.laɪn", pos: "noun", ex: "The storyline is simple but touching.", exUz: "Syujet oddiy, lekin ta'sirli." },
    { en: "portray", uz: "tasvirlamoq, rolni ijro etmoq", ipa: "pɔːˈtreɪ", pos: "verb", ex: "The actress portrays a young scientist.", exUz: "Aktrisa yosh olimani ijro etadi." },
    { en: "convincing", uz: "ishonarli", ipa: "kənˈvɪn.sɪŋ", pos: "adj", ex: "Her performance was convincing and emotional.", exUz: "Uning ijrosi ishonarli va hissiyotli edi." },
    { en: "cast", uz: "aktyorlar tarkibi", ipa: "kɑːst", pos: "noun", ex: "The cast includes several famous young actors.", exUz: "Aktyorlar tarkibida bir nechta mashhur yosh aktyor bor." },
    { en: "soundtrack", uz: "film musiqasi", ipa: "ˈsaʊnd.træk", pos: "noun", ex: "The soundtrack makes the final scene unforgettable.", exUz: "Film musiqasi yakuniy sahnani unutilmas qiladi." },
    { en: "highly recommended", uz: "qattiq tavsiya etiladi", ipa: "ˈhaɪ.li ˌrek.əˈmen.dɪd", pos: "phrase", ex: "The guesthouse is clean, quiet and highly recommended.", exUz: "Mehmon uyi toza, sokin va qattiq tavsiya etiladi." },
  ],
  practice: [
    { k: "choice", q: "A book that makes you think deeply is ___.", opts: ["thought-provoking", "predictable", "well-paced", "overrated"], a: 0, why: "O'ylantiradigan: **thought-provoking**." },
    { k: "match", pairs: [["gripping", "diqqatni tortadigan"], ["predictable", "oldindan bilinadigan"], ["well-paced", "sur'ati to'g'ri"], ["storyline", "syujet chizig'i"], ["cast", "aktyorlar tarkibi"]] },
    { k: "fill", q: "The actor ___ a lonely fisherman in the film.", a: ["portrays"], uz: "Aktyor filmda yolg'iz baliqchi rolini ijro etadi.", why: "**portrays** = tasvirlaydi, rolni ijro etadi.", hint: "portray" },
    { k: "listen", say: "Although the plot is simple, the acting is excellent.", opts: ["Although the plot is simple, the acting is excellent.", "Although the plot is simple, but the acting is excellent.", "Despite the plot is simple, the acting is excellent.", "Although the plot is simple the acting excellent."], a: 0, why: "**Although** + gap, *but* ishlatilmaydi." },
    { k: "fix", wrong: "I highly recommend to visit this museum.", a: ["I highly recommend visiting this museum.", "I highly recommend that you visit this museum.", "I highly recommend this museum."], hint: "recommend", why: "*Recommend* + **-ing** / **that you**." },
    { k: "choice", q: "Which sentence belongs in the *recommendation* paragraph?", opts: ["I would highly recommend it to anyone who loves history.", "The film begins in a small village.", "The director was born in 1960.", "The soundtrack was recorded in a studio."], a: 0, why: "Tavsiya abzatsida: **I would recommend it to…**" },
    { k: "order", uz: "Kamchiliklarga qaramay, men filmni juda qiziqarli deb topdim.", words: ["Despite", "these", "weaknesses,", "I", "found", "the", "film", "gripping."], extra: ["of", "although"], why: "**Despite** + ot: *despite these weaknesses*." },
    { k: "tf", q: "*Despite of the rain, we had a picnic.* gapi to'g'ri.", a: false, why: "**Despite** dan keyin *of* kelmaydi (*in spite of* bor)." },
    { k: "fix", wrong: "The film tells about a young doctor.", a: ["The film tells the story of a young doctor.", "The film is about a young doctor."], hint: "tell about", why: "**tells the story of** yoki **is about**." },
    { k: "translate", uz: "Film musiqasi tinch va yoqimli muhit yaratadi.", a: ["The soundtrack creates a calm and pleasant atmosphere.", "The soundtrack creates a calm and nice atmosphere.", "The soundtrack creates a calm, pleasant atmosphere.", "The soundtrack creates a peaceful and pleasant atmosphere."], why: "**soundtrack** = film musiqasi." },
    { k: "choice", q: "Which word fits? *The actors played very ___, so the film felt real.*", opts: ["well", "good", "goodly", "best"], a: 0, why: "Fe'lni ravish aniqlaydi: **played well**." },
    { k: "fill", q: "The ending is predictable, but, on the ___, it is a moving story.", a: ["whole"], uz: "Yakuni oldindan bilinadi, lekin umuman olganda, bu ta'sirli hikoya.", why: "Ibora: **on the whole**." },
    { k: "fix", wrong: "The actors played very good.", a: ["The actors played very well."], hint: "sifat / ravish", why: "**well** (ravish)." },
    { k: "dictation", say: "The cast is small, but the performances are convincing.", uz: "Aktyorlar tarkibi kichik, lekin ijro ishonarli.", why: "**convincing** = ishonarli." },
    { k: "choice", q: "Which sentence *shows* the feeling instead of telling it?", opts: ["Her hands were shaking as she opened the door.", "She was very scared.", "She felt terrible.", "She was frightened."], a: 0, why: "**Ko'rsatish**: tashqi belgi." },
    { k: "speak", say: "On the whole, the film is gripping and thought-provoking, so I would highly recommend it.", uz: "Umuman olganda, film diqqatni tortadi va o'ylantiradi, shuning uchun uni qattiq tavsiya qilaman." },
  ],
  quiz: [
    { k: "choice", q: "She ___ a brave doctor in the film.", opts: ["portrays", "portrays as", "is portraying to", "tells"], a: 0, why: "**portray** — o'timli fe'l, predlog kerak emas." },
    { k: "choice", q: "Which connector is correct? ___ the weather was bad, we enjoyed the trip.", opts: ["Although", "Despite", "In spite", "However of"], a: 0, why: "Gap oldidan **Although**; *despite* dan keyin ot kerak." },
    { k: "fill", q: "The film is slow, but it is ___-paced, so it never gets boring.", a: ["well"], uz: "Film sekin, lekin sur'ati yaxshi, shuning uchun zerikarli emas.", why: "**well-paced**." },
    { k: "fix", wrong: "Despite of the high price, the hotel is popular.", a: ["Despite the high price, the hotel is popular.", "In spite of the high price, the hotel is popular."], hint: "predlog", why: "**despite** / **in spite of**." },
    { k: "choice", q: "The cast ___ excellent.", opts: ["is", "are being", "does", "have"], a: 0, why: "**Cast** — jamlovchi ot; berilgan variantlardan faqat **is** to'g'ri (*are being*, *does*, *have* mos emas)." },
    { k: "tf", q: "A good review mentions only positive points.", a: false, why: "Muvozanatli sharh **ijobiy va salbiy** tomonlarni ko'rsatadi." },
    { k: "order", uz: "Men uni qattiq tavsiya qilaman.", words: ["I", "would", "highly", "recommend", "it."], extra: ["you", "to"], why: "**highly recommend it**." },
    { k: "translate", uz: "Syujet oldindan bilinadi, lekin aktyorlar ijrosi ishonarli.", a: ["The storyline is predictable, but the performances are convincing.", "The plot is predictable, but the performances are convincing.", "The storyline is predictable, but the acting is convincing.", "The plot is predictable, but the acting is convincing."], why: "**predictable**, **convincing**." },
    { k: "fix", wrong: "I recommend to read this novel.", a: ["I recommend reading this novel.", "I recommend that you read this novel.", "I recommend this novel."], hint: "recommend", why: "*Recommend* + **-ing** / **that you**." },
    { k: "choice", q: "Which word means *film music*?", opts: ["soundtrack", "storyline", "cast", "portray"], a: 0, why: "**soundtrack** = film musiqasi." },
  ],
  summary: [
    "Sharh tuzilmasi: **kirish → mazmun → baho → kamchilik → tavsiya**; hikoya: **boshlanish → rivojlanish → kulminatsiya → yechim**.",
    "Sharh so'zlari: **gripping, predictable, thought-provoking, well-paced, storyline, portray, convincing, cast, soundtrack, highly recommended**.",
    "Muvozanat: **although + gap**, **despite + ot / -ing**, **however**, **admittedly**, **on the whole**. *Although … but* va *despite of* — xato.",
    "Xatolar: ~~recommend to read~~ → **recommend reading / that you read**; ~~tells about~~ → **tells the story of**; ~~played very good~~ → **played well**.",
    "O'zingizni tekshiring: mazmun, tuzilma, lug'at, bog'lovchilar, aniqlik; hajm 230–270 so'z.",
  ],
  homework: "Yaqinda ko'rgan filmingiz, o'qigan kitobingiz yoki borgan joyingiz haqida **250 so'zli sharh** yozing (5 abzats). Kamida 5 ta bugungi so'zni va 3 ta bog'lovchini ishlating, bitta kamchilikni ko'rsating. Keyin tekshiruv ro'yxati bo'yicha o'zingizni baholang va **B2 can-do** jumlalaridan nechtasini bajarganingizni belgilang. Xohlasangiz, o'rniga «The letter arrived on the day everything went wrong.» gapidan boshlab hikoya yozing.",
};

export default lesson;
