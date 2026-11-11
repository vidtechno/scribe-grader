import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u24-l1",
  title: "Narrative tenses at B2",
  titleUz: "Hikoya zamonlari B2 darajasida: Past Simple, Continuous, Perfect va Perfect Continuous",
  goal: "Hikoyani **to'rtta o'tgan zamon** bilan tuzasiz: **Past Simple** (asosiy voqealar), **Past Continuous** (fon va uzilgan ish), **Past Perfect** (undan oldingi voqea) va **Past Perfect Continuous** (oldingi davomli ish va uning natijasi). Zamonni **vaqt so'ziga qarab emas, ma'noga qarab** tanlaysiz va *had* ni tushirib qoldirish, *was happened* kabi xatolardan qochasiz. Bu IELTS Speaking Part 2 va blog hikoyalari uchun kerak.",
  slides: [
    {
      title: "Hikoya qanday zamonlardan tuziladi?",
      blocks: [
        { t: "p", md: "Do'stingizga bir voqeani aytib berasiz, IELTS Speaking Part 2 da *a memorable day* haqida gapirasiz yoki blogga hikoya yozasiz. Bunday matnda **bir zamon yetmaydi**. Yaxshi hikoyada to'rtta zamon bir-birini to'ldiradi: har biri o'z **vazifasini** bajaradi." },
        {
          t: "table", head: ["Zamon", "Vazifasi", "Misol"], speak: [2],
          rows: [
            ["Past Simple", "asosiy voqealar, birin-ketin", "I opened the door and stepped inside."],
            ["Past Continuous", "fon yoki o'sha paytda davom etayotgan ish", "It was raining and the street was empty."],
            ["Past Perfect", "hikoya vaqtidan **oldin** bo'lgan voqea", "I had left my keys at the office."],
            ["Past Perfect Continuous", "oldin davom etgan ish (davomiylik, natija)", "My hands were cold: I had been standing outside for an hour."],
          ],
        },
        { t: "p", md: "Buni **sahna** deb tasavvur qiling: **Past Simple** — sahnada harakat qilayotgan aktyorlar, **Past Continuous** — dekoratsiya va fon, **Past Perfect** va **Perfect Continuous** — voqeadan oldin nima bo'lgani (*flashback*)." },
        { t: "examples", items: [
          { en: "I was walking home when I overheard two men arguing.", uz: "Uyga piyoda ketayotib, ikki erkakning tortishayotganini tasodifan eshitib qoldim." },
          { en: "The café was quiet because everyone had already left.", uz: "Kafe jim edi, chunki hamma allaqachon ketgan edi." },
        ] },
        { t: "check", ex: { k: "choice", q: "Qaysi zamon hikoyada **fon** (dekoratsiya) uchun ishlatiladi?", opts: ["Past Continuous", "Past Simple", "Past Perfect", "Present Perfect"], a: 0, why: "Fon, ya'ni o'sha paytda davom etayotgan holat — **Past Continuous**: *The sun was shining.*" } },
      ],
    },
    {
      title: "Past Simple va Past Continuous",
      blocks: [
        { t: "p", md: "**Past Simple** voqealarni **ketma-ket** sanaydi: *I got up, made coffee and left.* **Past Continuous** (*was/were + V-ing*) esa boshqa voqea sodir bo'lganda **davom etayotgan** ishni ko'rsatadi. Qisqa voqea uzun ishni **uzadi**." },
        { t: "compare",
          good: { title: "Uzilish (uzun + qisqa)", items: ["I was cooking when the lights went out.", "While she was driving, her phone rang.", "They were watching TV when someone knocked."] },
          bad: { title: "Ketma-ketlik (ikki qisqa voqea)", items: ["I cooked when the lights went out. (avval pishirdim, keyin o'chdi)", "She drove when her phone rang.", "They watched TV when someone knocked."] } },
        { t: "p", md: "Ikki ish **bir vaqtda** davom etsa, ikkalasi ham Continuous bo'ladi: *While I was studying, my brother was playing the guitar.* Fon tavsifi ham Continuous: *It was getting dark and people were hurrying home.*" },
        { t: "tip", tone: "info", md: "**Holat fe'llari** (*know, believe, want, like, belong*) odatda Continuous bo'lmaydi: *I knew the answer* (~~I was knowing~~). Bu haqda 13-darsda batafsil." },
        { t: "check", ex: { k: "fill", q: "I ___ along the river when I saw an old friend. (walk)", a: ["was walking"], why: "Uzun ish (yurish) qisqa voqea (ko'rdim) bilan uzildi: **was walking**." } },
        { t: "check", ex: { k: "choice", q: "Qaysi gapda **ketma-ket** ikkita qisqa voqea bor?", opts: ["When the bell rang, the students stood up.", "When the bell rang, the students were standing up.", "The students were standing up when the bell was ringing.", "While the bell rang, the students stood up."], a: 0, why: "**rang** — keyin **stood up**: ikkalasi Past Simple, birin-ketin bo'lgan voqealar." } },
      ],
    },
    {
      title: "Past Perfect va Past Perfect Continuous",
      blocks: [
        { t: "p", md: "Hikoyada vaqtni **orqaga** qaytarish kerak bo'lsa, **Past Perfect** (*had + V3*) ishlatamiz: bu voqea hikoyaning asosiy payti**dan oldin** sodir bo'lgan. **Past Perfect Continuous** (*had been + V-ing*) esa oldin **davom etgan ish**ni va uning **natijasini** (ko'rinib turgan sabab) ko'rsatadi." },
        {
          t: "table", head: ["Shakl", "Tuzilishi", "Misol"], speak: [2],
          rows: [
            ["Past Perfect", "had + V3", "When I arrived, the film had started."],
            ["Inkor", "hadn't + V3", "She hadn't eaten all day, so she was starving."],
            ["Past Perfect Continuous", "had been + V-ing", "His eyes were red. He had been crying."],
            ["Savol", "Had + ega + V3 / been V-ing?", "Had you been waiting long?"],
          ],
        },
        { t: "examples", items: [
          { en: "By the time we got to the airport, the plane had taken off.", uz: "Aeroportga yetib borganimizda samolyot allaqachon uchib ketgan edi." },
          { en: "I was exhausted because I had been revising since six.", uz: "Charchagan edim, chunki soat oltidan beri takrorlayotgan edim." },
          { en: "She realised she had lost her passport.", uz: "U pasportini yo'qotganini angladi." },
        ] },
        { t: "tip", tone: "info", md: "**Simple** — natija yoki necha marta: *She had written three letters.* **Continuous** — jarayon va davomiylik: *She had been writing letters all morning.*" },
        { t: "check", ex: { k: "fill", q: "Her hands were covered in paint. She ___ the walls. (paint)", a: ["had been painting"], why: "Ko'rinib turgan natija (qo'llari bo'yoq) va oldingi davomli ish: **had been painting**." } },
        { t: "check", ex: { k: "fill", q: "When we got to the cinema, the film ___ . (already / start)", a: ["had already started", "had started"], why: "Film biz kelishimizdan **oldin** boshlangan: **had (already) started**." } },
      ],
    },
    {
      title: "Zamonni ma'noga qarab tanlang",
      blocks: [
        { t: "p", md: "**when, after, before, by the time** kabi so'zlar zamonni o'zi belgilamaydi. Bir xil gap ma'nosi **zamonga qarab o'zgaradi**:" },
        {
          t: "table", head: ["Gap", "Ma'nosi"],
          rows: [
            ["When I got home, my sister **cooked** dinner.", "Uyga keldim, keyin opam ovqat pishirdi."],
            ["When I got home, my sister **was cooking** dinner.", "Kelganimda opam ovqat pishirayotgan edi."],
            ["When I got home, my sister **had cooked** dinner.", "Kelganimda ovqat allaqachon tayyor edi."],
            ["When I got home, my sister **had been cooking** all afternoon.", "Opam tushdan beri pishirgan edi (oshxona to'la bug')."],
          ],
        },
        { t: "p", md: "Savolni o'zingizga bering: **Bu voqea hikoyaning asosiy payti bilan qanday bog'langan?** Keyin (ketma-ket) → *Simple*. O'sha paytda davom etayotgan → *Continuous*. Undan oldin tugagan → *Perfect*. Oldin davom etgan, natijasi sezilayotgan → *Perfect Continuous*." },
        { t: "tip", tone: "warn", md: "Hamma voqea **tartib bilan** aytilsa, **had** shart emas. Faqat tartib buzilganda ishlating: *I woke up, had breakfast and left.* (**had woken up, had had breakfast** — keraksiz va og'ir)." },
        { t: "check", ex: { k: "choice", q: "When Tom phoned, I ___ dinner, so I couldn't talk.", opts: ["was cooking", "cooked", "had cooked", "had been cooked"], a: 0, why: "Tom qo'ng'iroq qilgan paytda ish davom etayotgan edi, shuning uchun gaplasha olmadim: **was cooking**." } },
        { t: "check", ex: { k: "choice", q: "When I opened the fridge, someone ___ all the milk. There was none.", opts: ["had drunk", "was drinking", "drank", "drinks"], a: 0, why: "Sut men ochishimdan **oldin** ichilgan: **had drunk**." } },
      ],
    },
    {
      title: "Tipik xatolar (o'zbek tilidan)",
      blocks: [
        { t: "p", md: "O'zbek tilida o'tgan zamon shakllari kamroq, shuning uchun hammasini **bitta o'tgan zamon** bilan aytish odat bo'lib qoladi. Quyidagi xatolar juda ko'p uchraydi:" },
        { t: "compare",
          good: { title: "To'g'ri", items: ["When we arrived, the match had already started.", "A strange thing happened on my way home.", "She had been waiting for two hours when he phoned.", "Yesterday I met an old friend."] },
          bad: { title: "Xato", items: ["When we arrived, the match already started.", "A strange thing was happened on my way home.", "She was waiting for two hours when he phoned.", "Yesterday I have met an old friend."] } },
        { t: "p", md: "**1.** Oldingi voqea uchun **had** tushib qoladi (o'zbekchada *«o'yin allaqachon boshlangan edi»* ham *«boshlandi»* ham bir xil seziladi). **2.** *happen* o'timsiz fe'l, majhul nisbatda ishlatilmaydi. **3.** Oldin boshlanib, voqea paytigacha davom etgan ish **had been** bilan aytiladi. **4.** Aniq o'tgan vaqt (*yesterday*) bilan **Present Perfect** kelmaydi." },
        { t: "check", ex: { k: "fix", wrong: "When we arrived, the match already started.", a: ["When we arrived, the match had already started.", "When we arrived, the match had started."], hint: "Biz kelishimizdan oldin boshlangan", why: "Oldingi voqea: **had already started**." } },
        { t: "check", ex: { k: "fix", wrong: "A strange thing was happened on my way home.", a: ["A strange thing happened on my way home."], hint: "o'timsiz fe'l", why: "**happen** passive bo'lmaydi: *happened*." } },
        { t: "check", ex: { k: "fix", wrong: "She was waiting for two hours when he phoned.", a: ["She had been waiting for two hours when he phoned."], hint: "Qo'ng'iroqdan oldin boshlangan davomiylik", why: "Qo'ng'iroq paytigacha **ikki soat** davom etgan: **had been waiting**." } },
        { t: "check", ex: { k: "fix", wrong: "Yesterday I have met an old friend.", a: ["Yesterday I met an old friend."], hint: "yesterday bilan", why: "Aniq o'tgan vaqt (*yesterday*) → **Past Simple**." } },
      ],
    },
    {
      title: "O'qing: Yo'qolgan chipta",
      blocks: [
        {
          t: "text", title: "The missing ticket", voice: "emma",
          en: "Last spring I went to Samarkand to see a friend. I had been looking forward to the trip for weeks, but on the morning of the journey everything went wrong. I was running to the station when I realised I had left my ticket on the kitchen table. I turned back, found it and ran again, but by the time I reached the platform the train had already pulled out. I was standing there, out of breath, when an elderly man smiled at me. He had been waiting for the next train for an hour and had heard my story from the guard. \"Don't worry,\" he said. \"There is another one at noon.\" We talked all the way, and he told me about the city he had grown up in. Eventually I arrived three hours late, but I had made a new friend, and I still remember that conversation.",
          uz: "O'tgan bahorda do'stimni ko'rgani Samarqandga bordim. Bir necha haftadan beri sayohatni kutgan edim, ammo yo'lga chiqadigan ertalab hammasi chappasiga ketdi. Bekatga yugurib borayotib, chiptamni oshxona stolida qoldirganimni angladim. Orqaga qaytdim, chiptani olib, yana yugurdim, lekin perronga yetib borganimda poyezd allaqachon jo'nab ketgan edi. U yerda nafasim qaytmay turganimda, keksa bir kishi menga jilmaydi. U keyingi poyezdni bir soatdan beri kutayotgan edi va mening voqeamni nazoratchidan eshitgan edi. «Xavotir olmang,» dedi u. «Tush paytida yana biri bor.» Biz yo'l bo'yi suhbatlashdik va u o'zi o'sgan shahar haqida gapirib berdi. Oxir-oqibat uch soat kechikib yetib bordim, lekin yangi do'st orttirgan edim va o'sha suhbatni hali ham eslayman.",
        },
        { t: "check", ex: { k: "tf", q: "When the narrator reached the platform, the train was still there.", a: false, why: "*The train **had already pulled out*** — poyezd allaqachon ketib bo'lgan edi." } },
        { t: "check", ex: { k: "choice", q: "Why does the text say \"He had been waiting for the next train for an hour\"?", opts: ["It shows an activity that started before the conversation and was still going on.", "It describes the main event of the story.", "It says that he waited many times.", "It is a prediction about the future."], a: 0, why: "**had been waiting** — suhbatdan oldin boshlangan va o'sha paytda davom etgan ish." } },
      ],
    },
    {
      title: "Dialog: Qiziq kun",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Sardor", en: "You look exhausted, Nilufar. What happened?", uz: "Juda charchagan ko'rinasiz, Nilufar. Nima bo'ldi?" },
            { who: "Nilufar", en: "I had been working on my report until two in the morning, and then my alarm didn't go off.", uz: "Hisobot ustida ertalab soat ikkigacha ishlagan edim, keyin budilnik jiringlamadi." },
            { who: "Sardor", en: "So you were late for the meeting?", uz: "Demak, yig'ilishga kechikdingizmi?" },
            { who: "Nilufar", en: "Worse. I was rushing out of the flat when I noticed I had forgotten my laptop.", uz: "Bundan battar. Kvartiradan shoshib chiqayotib, noutbukni unutganimni payqadim." },
            { who: "Sardor", en: "Oh no! Did you go back for it?", uz: "Voy! Orqaga qaytdingizmi?" },
            { who: "Nilufar", en: "Yes, and by the time I arrived, the meeting had already begun. My manager just smiled.", uz: "Ha, yetib borganimda yig'ilish allaqachon boshlangan edi. Menejerim shunchaki jilmaydi." },
            { who: "Sardor", en: "At least she wasn't angry. She had probably been through the same thing herself.", uz: "Hech bo'lmasa u jahli chiqmadi. Ehtimol, o'zi ham shunday holatni boshidan kechirgandir." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "Why was Nilufar so tired?", opts: ["She had been working on a report until two in the morning.", "She was running in the morning.", "She had missed the train.", "She was waiting for her manager."], a: 0, why: "*I had been working on my report until two* — kechasi uzoq ishlagani charchoq sababi." } },
      ],
    },
  ],
  words: [
    { en: "overhear", uz: "tasodifan eshitib qolmoq", ipa: "ˌəʊ.vəˈhɪə", pos: "verb", ex: "I overheard two colleagues talking about a new project.", exUz: "Ikki hamkasbimning yangi loyiha haqida gaplashayotganini tasodifan eshitib qoldim." },
    { en: "startle", uz: "cho'chitib yubormoq", ipa: "ˈstɑː.təl", pos: "verb", ex: "The sudden noise startled the horses.", exUz: "To'satdan chiqqan shovqin otlarni cho'chitib yubordi." },
    { en: "stumble", uz: "qoqilmoq; tasodifan duch kelmoq", ipa: "ˈstʌm.bəl", pos: "verb", ex: "She stumbled on the stairs and dropped her bag.", exUz: "U zinada qoqilib, sumkasini tushirib yubordi." },
    { en: "glimpse", uz: "bir lahza ko'rib qolmoq; lahzalik ko'rinish", ipa: "ɡlɪmps", pos: "noun", ex: "I caught a glimpse of the actor as his car drove away.", exUz: "Mashinasi ketayotganda aktyorni bir lahza ko'rib qoldim." },
    { en: "burst into", uz: "birdan ... boshlab yubormoq (kulgi, yig'i)", ipa: "bɜːst ˈɪn.tuː", pos: "phrase", ex: "When she heard the news, she burst into tears.", exUz: "Xabarni eshitgach, u birdan yig'lab yubordi." },
    { en: "run into", uz: "tasodifan uchratib qolmoq", ipa: "rʌn ˈɪn.tuː", pos: "phrasal verb", ex: "I ran into my old teacher at the airport.", exUz: "Aeroportda eski o'qituvchimga duch keldim." },
    { en: "vanish", uz: "g'oyib bo'lmoq", ipa: "ˈvæn.ɪʃ", pos: "verb", ex: "The thief vanished into the crowd.", exUz: "O'g'ri olomon ichida g'oyib bo'ldi." },
    { en: "ordeal", uz: "og'ir sinov", ipa: "ɔːˈdiːl", pos: "noun", ex: "The long journey through the snow was a real ordeal.", exUz: "Qor ichidagi uzoq yo'l haqiqiy sinov bo'ldi." },
    { en: "out of the blue", uz: "kutilmaganda, to'satdan", ipa: "aʊt əv ðə bluː", pos: "phrase", ex: "An old friend called me out of the blue last night.", exUz: "Kecha kechqurun eski do'stim kutilmaganda qo'ng'iroq qildi." },
    { en: "end up", uz: "oxiri ... bo'lib qolmoq", ipa: "end ˈʌp", pos: "phrasal verb", ex: "We got lost and ended up in a different town.", exUz: "Adashib, oxiri boshqa shaharga borib qoldik." },
  ],
  practice: [
    { k: "choice", q: "I ___ down the street when I heard someone call my name.", opts: ["was walking", "walked", "had walked", "had been walked"], a: 0, why: "Uzun ish (yurish) qisqa voqea (eshitdim) bilan uzildi: **was walking**." },
    { k: "choice", q: "We arrived at six, but it was too late: the shop ___ by then.", opts: ["had closed", "was closing", "closed", "has closed"], a: 0, why: "Do'kon biz kelishimizdan **oldin** yopilgan: **had closed**." },
    { k: "listen", say: "She had been crying, so her eyes were red.", opts: ["She had been crying, so her eyes were red.", "She was crying, so her eyes were red.", "She has been crying, so her eyes are red.", "She had cried, so her eyes were red."], a: 0, why: "Oldin davom etgan ish va ko'rinib turgan natija: **had been crying**." },
    { k: "fill", q: "I was late because I ___ my phone at home. (leave)", a: ["had left"], uz: "Kech qoldim, chunki telefonimni uyda qoldirgan edim.", why: "Sabab — kechikishdan oldin bo'lgan voqea: **had left**." },
    { k: "fill", q: "Dilnoza was exhausted. She ___ since five o'clock. (study)", a: ["had been studying"], uz: "Dilnoza juda charchagan edi. U soat beshdan beri o'qiyotgan edi.", why: "**since five** — davomiylik va natija: **had been studying**." },
    { k: "order", uz: "Men yo'lda ketayotib, eski do'stimni uchratib qoldim.", words: ["I", "ran", "into", "an", "old", "friend", "while", "I", "was", "walking."], extra: ["had", "walked"], alt: [["While", "I", "was", "walking,", "I", "ran", "into", "an", "old", "friend."]], why: "Uzun ish — **was walking**, qisqa voqea — **ran into**." },
    { k: "tf", q: "*When I got home, the guests had left.* gapida mehmonlar men kelganimdan keyin ketishgan.", a: false, why: "**had left** — mehmonlar men kelishimdan **oldin** ketgan." },
    { k: "match", pairs: [["overhear", "tasodifan eshitib qolmoq"], ["vanish", "g'oyib bo'lmoq"], ["run into", "tasodifan uchratmoq"], ["ordeal", "og'ir sinov"], ["out of the blue", "kutilmaganda"]] },
    { k: "fix", wrong: "When I arrived at the station, the train already left.", a: ["When I arrived at the station, the train had already left.", "When I arrived at the station, the train had left."], hint: "Poyezd oldin ketgan", why: "Oldingi voqea: **had already left**." },
    { k: "fix", wrong: "The accident was happened while we were driving.", a: ["The accident happened while we were driving."], hint: "happen — o'timsiz", why: "**happen** majhul nisbatda ishlatilmaydi." },
    { k: "translate", uz: "U ikki soatdan beri kutayotgan edi, shunda poyezd keldi.", a: ["She had been waiting for two hours when the train arrived.", "She'd been waiting for two hours when the train arrived.", "He'd been waiting for two hours when the train arrived.", "He had been waiting for two hours when the train arrived.", "She had been waiting for two hours when the train came.", "He had been waiting for two hours when the train came."], why: "Voqeagacha davom etgan ish: **had been waiting for two hours**." },
    { k: "choice", q: "Qaysi gap hikoya zamonlarini to'g'ri ishlatgan?", opts: ["I opened the door and saw that someone had broken the window.", "I had opened the door and saw that someone broke the window.", "I was opening the door and had seen that someone was breaking the window.", "I opened the door and had saw that someone broken the window."], a: 0, why: "Asosiy voqealar — Past Simple (*opened, saw*), oldingi voqea — **had broken**." },
    { k: "dictation", say: "By the time I got there, everyone had gone home.", uz: "Men yetib borganimda hamma uyiga ketgan edi.", why: "**By the time** + Past Simple, oldingi voqea — **had gone**." },
    { k: "fill", q: "Suddenly the lights ___ out and the whole street went dark. (go)", a: ["went"], uz: "To'satdan chiroqlar o'chdi va butun ko'cha qorong'i bo'ldi.", why: "Hikoyaning asosiy voqeasi, qisqa: **went** (Past Simple)." },
    { k: "choice", q: "\"Why were your shoes so muddy?\" — \"Because I ___ in the garden since lunch.\"", opts: ["had been working", "worked", "was worked", "was working"], a: 0, why: "Oldingi davomli ish va ko'rinib turgan natija: **had been working**." },
    { k: "speak", say: "I was walking home when I ran into an old friend out of the blue.", uz: "Uyga ketayotib, kutilmaganda eski do'stimni uchratib qoldim." },
  ],
  quiz: [
    { k: "choice", q: "While we ___ dinner, the neighbours knocked on the door.", opts: ["were having", "having", "had had", "have"], a: 0, why: "Davom etayotgan ish uzildi: **were having**." },
    { k: "choice", q: "By the time the ambulance arrived, the man ___ .", opts: ["had recovered", "recovered", "recovers", "has recovered"], a: 0, why: "Tez yordam kelishidan oldin sodir bo'lgan: **had recovered**." },
    { k: "choice", q: "She looked tired. She ___ on the project since midnight.", opts: ["had been working", "worked", "was working", "works"], a: 0, why: "Natija ko'rinib turibdi, ish oldin davom etgan: **had been working**." },
    { k: "choice", q: "Qaysi gap xato?", opts: ["The crash was happened at midnight.", "The crash happened at midnight.", "A crash had happened before we arrived.", "I heard a crash while I was sleeping."], a: 0, why: "**happen** passive bo'lmaydi; *The crash happened.*" },
    { k: "fill", q: "When Ali called, I ___ a shower, so I didn't answer. (take)", a: ["was taking"], uz: "Ali qo'ng'iroq qilganda men dush qabul qilayotgan edim.", why: "O'sha paytda davom etayotgan ish: **was taking**." },
    { k: "fill", q: "I couldn't get in because I ___ my key. (lose)", a: ["had lost"], uz: "Ichkariga kira olmadim, chunki kalitimni yo'qotgan edim.", why: "Oldingi voqea: **had lost**." },
    { k: "order", uz: "Men kelganimda film allaqachon boshlangan edi.", words: ["When", "I", "arrived,", "the", "film", "had", "already", "started."], extra: ["was", "start"], alt: [["The", "film", "had", "already", "started", "when", "I", "arrived."]], why: "Oldingi voqea: **had already started**." },
    { k: "translate", uz: "Kecha men eski do'stimni uchratib qoldim.", a: ["Yesterday I ran into an old friend.", "I ran into an old friend yesterday.", "Yesterday I met an old friend.", "I met an old friend yesterday."], why: "**yesterday** bilan — **Past Simple**." },
    { k: "fix", wrong: "He was waiting for an hour when the bus finally came.", a: ["He had been waiting for an hour when the bus finally came.", "He had waited for an hour when the bus finally came."], hint: "Avtobus kelishidan oldin boshlangan", why: "Voqeagacha davom etgan ish: **had been waiting**." },
    { k: "tf", q: "*I was opening the door and walked in.* — bu hikoya zamonlari uchun eng tabiiy variant.", a: false, why: "Birin-ketin qisqa harakatlar **Past Simple** bilan: *I opened the door and walked in.*" },
  ],
  summary: [
    "Hikoyada zamonlar **vazifa** bo'yicha bo'linadi: **Past Simple** — asosiy voqealar, **Past Continuous** — fon va uzilgan ish.",
    "**Past Perfect** (*had + V3*) — hikoya payti**dan oldin** tugagan voqea; **Past Perfect Continuous** (*had been + V-ing*) — oldin davom etgan ish va uning natijasi.",
    "Zamonni **vaqt so'ziga emas, ma'noga qarab** tanlang: *When I arrived, it **had started** / **was starting** / **started**.*",
    "Tipik xatolar: **had** ni tushirib qoldirish, ~~was happened~~, davomiylikda ~~was waiting for two hours when~~ → **had been waiting**, ~~yesterday have met~~.",
    "Tartib bilan aytilgan voqealarda **had** ishlatmang: *I woke up, had breakfast and left.*",
  ],
  homework: "O'tgan haftadagi bitta qiziq voqeani 6–8 gapda yozing: kamida bitta **Past Continuous** (fon), bitta **Past Perfect** (oldingi voqea) va bitta **Past Perfect Continuous** ishlating. Keyin ovoz chiqarib hikoya qilib, telefonga yozib oling va **had** ni tushirib qoldirmaganingizni tekshiring.",
};

export default lesson;
