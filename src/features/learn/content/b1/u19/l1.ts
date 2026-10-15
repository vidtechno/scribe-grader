import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u19-l1",
  title: "Past Perfect: what had happened before",
  titleUz: "Past Perfect: o'tmishdan oldin nima bo'lgan edi",
  goal: "**Past Perfect** (*had + V3*) ni yasaysiz va o'tmishdagi ikki voqeadan **oldin bo'lganini** to'g'ri ifodalaysiz: *When I arrived, the film had already started.* Inkor, savol va **never, already, just, yet** bilan ishlata olasiz.",
  slides: [
    {
      title: "Past Perfect nima?",
      blocks: [
        { t: "p", md: "Hikoya qilganda ba'zan o'tmishdagi **ikki voqea** haqida gapiramiz. Bittasi ikkinchisidan **oldin** bo'lgan. Oldin bo'lgan voqeani **Past Perfect** bilan aytamiz. O'zbekchada bu ko'pincha **-gan edi** shakliga to'g'ri keladi: *kelgan edim, ketgan edi, ko'rgan edik*." },
        { t: "table", head: ["Gap turi", "Shakl", "Misol"], rows: [
          ["Darak", "ega + had + V3", "She had left."],
          ["Inkor", "ega + had not (hadn't) + V3", "She hadn't left."],
          ["Savol", "Had + ega + V3?", "Had she left?"],
          ["Qisqa javob", "Yes, she had. / No, she hadn't.", "Yes, she had."],
        ] },
        { t: "tip", tone: "good", md: "**had** hamma shaxs uchun bir xil: *I had, you had, he had, we had, they had*. Past Perfect da faqat **had** bor, **has / have** yo'q. V3 esa Present Perfect dagi bilan bir xil: *finished, seen, gone, been*." },
        { t: "examples", items: [
          { en: "I had finished my homework before dinner.", uz: "Men kechki ovqatdan oldin uy vazifamni tugatgan edim." },
          { en: "They had already left when we arrived.", uz: "Biz yetib kelganimizda ular allaqachon ketgan edi." },
          { en: "He had never seen snow before.", uz: "U avval hech qachon qor ko'rmagan edi." },
        ] },
        { t: "check", ex: { k: "choice", q: "Qaysi gap **Past Perfect** da?", opts: ["She leaves early.", "She left early.", "She had left early.", "She has left early."], a: 2, why: "Past Perfect = **had + V3**: *had left*." } },
      ],
    },
    {
      title: "Qachon ishlatamiz: ikkita o'tgan voqea",
      blocks: [
        { t: "p", md: "Past Perfect **yolg'iz** ishlatilmaydi. U doim boshqa o'tgan voqea (yoki o'tmishdagi bir payt) bilan bog'liq bo'ladi: ikkinchi voqea **Past Simple** da, undan oldingisi **Past Perfect** da." },
        { t: "examples", items: [
          { en: "When I got to the station, the train had left.", uz: "Bekatga yetib borganimda poyezd ketib bo'lgan edi.", note: "Avval poyezd ketdi, keyin men yetib keldim." },
          { en: "I couldn't open the door because I had lost my key.", uz: "Eshikni och olmadim, chunki kalitimni yo'qotgan edim.", note: "Kalitni yo'qotish eshikka kelishdan oldin bo'lgan: sabab." },
          { en: "She was tired because she hadn't slept well.", uz: "U charchagan edi, chunki yaxshi uxlamagan edi." },
        ] },
        { t: "table", head: ["Vaziyat", "Zamon", "Misol"], rows: [
          ["Ketma-ket voqealar", "ikkalasi Past Simple", "I got home and I cooked dinner."],
          ["Biri oldin bo'lgan", "oldingisi Past Perfect", "When I got home, my brother had cooked dinner."],
        ] },
        { t: "tip", tone: "info", md: "Ikki voqea **ketma-ket** bo'lsa va tartibi gapda ko'rinib tursa, ikkalasini ham **Past Simple** bilan aytamiz: *He opened the door and went in.* Past Perfect esa **oldin bo'lgan** va ikkinchisiga **ta'sir qilgan** voqeani ko'rsatish uchun kerak." },
        { t: "check", ex: { k: "fill", q: "When we arrived at the cinema, the film ___ already started.", a: ["had"], why: "Film biz kelishimizdan **oldin** boshlangan: **had started**." } },
        { t: "check", ex: { k: "choice", q: "Qaysi variant to'g'ri?", opts: ["I was late because I missed the bus.", "I was late because I had missed the bus.", "I was late because I have missed the bus.", "I was late because I am missing the bus."], a: 1, why: "Avtobusni o'tkazib yuborish kechikishdan **oldin** bo'lgan sabab. Eng aniq variant: **had missed**." } },
      ],
    },
    {
      title: "Inkor, savol va yordamchi so'zlar",
      blocks: [
        { t: "p", md: "Inkor va savol oddiy: **hadn't** qo'shamiz yoki **had** ni gap boshiga olib chiqamiz. Past Perfect bilan **already, just, never, yet, ever** so'zlari ishlatiladi, ular Present Perfect dagi joyda turadi (**had** dan keyin)." },
        { t: "table", head: ["So'z", "Ma'nosi", "Misol"], speak: [2], rows: [
          ["already", "allaqachon", "The shop had already closed."],
          ["just", "hozirgina (o'sha paytda)", "I had just woken up when you called."],
          ["never ... before", "avval hech qachon", "She had never flown before."],
          ["yet", "hali (inkorda)", "He hadn't finished yet."],
          ["ever", "(savolda) hech", "Had you ever met him before?"],
        ] },
        { t: "tip", tone: "warn", md: "**Had** ni **have** bilan adashtirmang. O'tgan voqea haqida *I have lost my key* emas, *I had lost my key* deymiz. Va *I had went* emas, **I had gone**: har doim **V3** kerak." },
        { t: "check", ex: { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["I had went home.", "I had gone home.", "I had go home.", "I did gone home."], a: 1, why: "had + **V3**: *go - went - gone*, shuning uchun **had gone**." } },
        { t: "check", ex: { k: "fill", q: "Had you ever ___ him before the party? Yes, I had.", a: ["met"], why: "Savolda ham **had + V3**: *Had you ever met…?*" } },
      ],
    },
    {
      title: "Uzbek tilidagi xatolar",
      blocks: [
        { t: "p", md: "O'zbek tilida «-gan edi» va oddiy o'tgan zamon ko'pincha bir-biriga yaqin ishlatiladi, shuning uchun o'zbek o'quvchilar Past Perfect ni ko'p tashlab ketishadi yoki aksincha, har joyga qo'yishadi." },
        { t: "compare",
          good: { title: "To'g'ri", items: ["When I called, she had already gone out.", "I didn't recognise him because he had changed a lot.", "They had never been abroad before 2020."] },
          bad: { title: "Xato", items: ["When I called, she already went out.", "I didn't recognise him because he changed a lot.", "They never were abroad before 2020."] } },
        { t: "tip", tone: "warn", md: "Past Perfect ni **aniq o'tgan vaqt** bilan (*yesterday, in 2019*) yolg'iz ishlatmang. *I had seen him yesterday* gapi o'z-o'zidan g'alati eshitiladi. Bunday joyda oddiy **Past Simple** kerak: *I saw him yesterday.*" },
        { t: "check", ex: { k: "fix", wrong: "When I arrived, the lesson already started.", a: ["When I arrived, the lesson had already started."], hint: "Dars men kelishimdan oldin boshlangan", why: "Oldin bo'lgan voqea: **had already started**." } },
        { t: "check", ex: { k: "tf", q: "*Had you finished?* — bu savol Past Perfect da.", a: true, why: "**Had + ega + V3** = Past Perfect savoli." } },
      ],
    },
    {
      title: "O'qing: Yo'qolgan sumka",
      blocks: [
        {
          t: "text", title: "A bad morning",
          en: "Last Monday was a terrible day for Helen. When she woke up, her alarm clock hadn't rung, so she was late. She ran to the bus stop, but the bus had already gone. At the office she discovered that she had left her laptop at home. Her manager had already arrived and was waiting for her. In the afternoon she realised that she had also forgotten her lunch. Luckily, a colleague had brought some extra sandwiches, and Helen finally smiled. \"I had never had such a bad morning before,\" she said later, \"but the evening was much better.\"",
          uz: "O'tgan dushanba Helen uchun dahshatli kun bo'ldi. U uyg'onganda budilnigi jiringlamagan edi, shuning uchun kech qoldi. U avtobus bekatiga yugurdi, lekin avtobus allaqachon ketib bo'lgan edi. Ofisda noutbukini uyda qoldirganini bildi. Menejeri allaqachon kelgan va uni kutayotgan edi. Tushdan keyin u tushlikni ham unutganini angladi. Yaxshiyamki, bir hamkasbi qo'shimcha sendvichlar olib kelgan edi va Helen nihoyat jilmaydi. «Bunchalik yomon ertalab avval hech bo'lmagan edi,» dedi u keyinroq, «lekin kechqurun ancha yaxshi bo'ldi.»",
        },
        { t: "check", ex: { k: "tf", q: "Helen's alarm clock rang in the morning.", a: false, why: "Matnda: *her alarm clock hadn't rung* — budilnik jiringlamagan." } },
        { t: "check", ex: { k: "choice", q: "Why was Helen late for work?", opts: ["Her alarm clock hadn't rung.", "Her bus was early.", "She had a long breakfast.", "She lost her bag."], a: 0, why: "Sabab oldin bo'lgan: budilnik jiringlamagan (*hadn't rung*)." } },
      ],
    },
    {
      title: "Dialog: Nima bo'ldi?",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Tom", en: "You look worried, Emma. What happened?", uz: "Xavotirda ko'rinasan, Emma. Nima bo'ldi?" },
            { who: "Emma", en: "I couldn't get into my flat last night. I had lost my keys.", uz: "Kecha kvartiramga kira olmadim. Kalitlarimni yo'qotgan edim." },
            { who: "Tom", en: "Oh no! Where had you been before that?", uz: "Voy, yo'q! Bundan oldin qayerda bo'lgan eding?" },
            { who: "Emma", en: "I had been at the gym and then I had gone shopping.", uz: "Sport zalida bo'lgan edim, keyin do'konlarga borgan edim." },
            { who: "Tom", en: "Had you checked your bag?", uz: "Sumkangni tekshirib ko'rgan edingmi?" },
            { who: "Emma", en: "Yes, I had. Twice. Luckily my neighbour had a spare key.", uz: "Ha, ko'rgan edim. Ikki marta. Oxiri qo'shnimda zaxira kalit bor ekan." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "Why couldn't Emma get into her flat?", opts: ["She had lost her keys.", "She had forgotten the address.", "Her neighbour had locked it.", "She had broken the door."], a: 0, why: "Dialogda: *I had lost my keys.*" } },
      ],
    },
  ],
  words: [
    { en: "figure out", uz: "tushunib yetmoq, aniqlab olmoq", ipa: "ˈfɪɡ.ər aʊt", pos: "phrasal verb", ex: "We finally figured out why the lights had gone off.", exUz: "Nega chiroqlar o'chib qolganini nihoyat aniqladik." },
    { en: "spot", uz: "ko'rib qolmoq, payqab qolmoq", ipa: "spɒt", pos: "verb", ex: "I spotted my friend, who had arrived earlier than me.", exUz: "Do'stimni ko'rib qoldim, u mendan oldinroq kelgan edi." },
    { en: "run out of", uz: "...i tugab qolmoq", ipa: "rʌn aʊt əv", pos: "phrasal verb", ex: "We had run out of milk, so I went to the shop.", exUz: "Sutimiz tugab qolgan edi, shuning uchun do'konga bordim." },
    { en: "recognise", uz: "tanimoq", ipa: "ˈrek.əɡ.naɪz", pos: "verb", ex: "I didn't recognise her because she had cut her hair.", exUz: "Uni tanimadim, chunki u sochini kesgan edi." },
    { en: "disappear", uz: "g'oyib bo'lmoq", ipa: "ˌdɪs.əˈpɪər", pos: "verb", ex: "My wallet had disappeared from my bag.", exUz: "Hamyonim sumkamdan g'oyib bo'lgan edi." },
    { en: "oversleep", uz: "uxlab qolmoq (kech turmoq)", ipa: "ˌəʊ.vəˈsliːp", pos: "verb", ex: "I was late because I had overslept.", exUz: "Men uxlab qolgan edim, shuning uchun kechikdim." },
    { en: "misplace", uz: "qo'yib, yo'qotib qo'ymoq", ipa: "ˌmɪsˈpleɪs", pos: "verb", ex: "I had misplaced my keys, so I couldn't open the door.", exUz: "Kalitlarimni qayoqqadir qo'yib yo'qotgan edim, shuning uchun eshikni och olmadim." },
    { en: "set off", uz: "yo'lga chiqmoq", ipa: "set ɒf", pos: "phrasal verb", ex: "They had already set off when I called.", exUz: "Men qo'ng'iroq qilganimda ular allaqachon yo'lga chiqqan edi." },
    { en: "leave behind", uz: "qoldirib ketmoq", ipa: "liːv bɪˈhaɪnd", pos: "phrasal verb", ex: "She realised she had left her umbrella behind on the bus.", exUz: "U soyabonini avtobusda qoldirib ketganini angladi." },
    { en: "double-check", uz: "yana bir bor tekshirmoq", ipa: "ˌdʌb.əl ˈtʃek", pos: "verb", ex: "I had double-checked the time before I left home.", exUz: "Uydan chiqishdan oldin vaqtni yana bir bor tekshirgan edim." },
  ],
  practice: [
    { k: "choice", q: "**When I arrived, they ___ already eaten.**", opts: ["have", "had", "has", "were"], a: 1, why: "Ular men kelishimdan oldin ovqatlangan: **had eaten**." },
    { k: "choice", q: "**She ___ never ridden a horse before that day.**", opts: ["has", "have", "had", "did"], a: 2, why: "O'sha kundan oldingi tajriba: **had never ridden**." },
    { k: "listen", say: "The film had already started when we got there.", opts: ["The film had already started when we got there.", "The film started when we got there.", "The film has already started when we got there.", "The film was starting when we got there."], a: 0, why: "**had already started** — film oldin boshlangan." },
    { k: "fill", q: "I was angry because he ___ forgotten my birthday.", a: ["had"], why: "Sabab oldin bo'lgan: **had forgotten**." },
    { k: "fill", q: "By the evening we ___ not finished the report yet.", hint: "Past Perfect inkor", a: ["had"], why: "Inkor: **had not finished**. Bo'sh joyga **had** kerak (not allaqachon berilgan)." },
    { k: "fill", q: "Nobody knew where she had ___.", hint: "go - went - gone", a: ["gone"], why: "had + **V3**: *gone*." },
    { k: "order", uz: "Men eshikni qulflaganimni esladim.", words: ["I", "remembered", "that", "I", "had", "locked", "the", "door."], extra: ["have", "lock"], why: "Eslash payti — Past Simple, qulflash undan oldin — **had locked**." },
    { k: "order", uz: "Sen avval u bilan uchrashgan eding?", words: ["Had", "you", "met", "him", "before?"], extra: ["Have", "meet"], why: "Savol: **Had + ega + V3**." },
    { k: "translate", uz: "Men yetib kelganimda poyezd allaqachon ketgan edi.", a: ["When I arrived, the train had already left.", "The train had already left when I arrived.", "When I got there, the train had already left.", "The train had already left when I got there."], why: "Oldin bo'lgan voqea: **had already left**." },
    { k: "translate", uz: "U avval hech qachon samolyotda uchmagan edi.", a: ["She had never flown before.", "He had never flown before.", "She had never flown on a plane before.", "He had never flown on a plane before."], why: "**had never flown before**." },
    { k: "match", pairs: [["realise", "anglab yetmoq"], ["disappear", "g'oyib bo'lmoq"], ["recognise", "tanimoq"], ["cancel", "bekor qilmoq"], ["lock", "qulflamoq"], ["borrow", "qarz olmoq"]] },
    { k: "tf", q: "**She had left** — bu gap ko'pincha boshqa o'tgan voqeadan **oldin** bo'lgan ishni bildiradi.", a: true, why: "Past Perfect oldin bo'lgan voqeani ko'rsatadi." },
    { k: "tf", q: "**I had went home.** — bu gap to'g'ri.", a: false, why: "Past Perfect da V3 kerak: **I had gone home.**" },
    { k: "fix", wrong: "When he called, I already left.", a: ["When he called, I had already left.", "When he called I had already left."], hint: "Men u qo'ng'iroq qilishidan oldin ketgan edim", why: "Oldin bo'lgan voqea: **had already left**." },
    { k: "dictation", say: "She hadn't seen him for ten years.", uz: "U uni o'n yildan beri ko'rmagan edi.", why: "**hadn't seen** — Past Perfect inkor." },
    { k: "speak", say: "When I got home, my sister had already cooked dinner.", uz: "Uyga kelganimda opam kechki ovqatni allaqachon pishirib bo'lgan edi." },
  ],
  quiz: [
    { k: "choice", q: "**When we got to the airport, the plane ___.**", opts: ["left", "had left", "has left", "was leaving"], a: 1, why: "Samolyot biz kelishimizdan oldin uchib ketgan: **had left**." },
    { k: "choice", q: "**I didn't know him because I ___ him before.**", opts: ["hadn't met", "haven't met", "didn't meet", "don't meet"], a: 0, why: "O'sha paytdan oldingi tajriba yo'q: **hadn't met**." },
    { k: "choice", q: "**___ you finished the exam when the teacher came?**", opts: ["Have", "Did", "Had", "Were"], a: 2, why: "Past Perfect savoli: **Had you finished…?**" },
    { k: "fill", q: "She was upset because she ___ lost her phone.", a: ["had"], why: "Sabab oldin bo'lgan: **had lost**." },
    { k: "fill", q: "We didn't go to the cinema because they had ___ the film.", hint: "cancel", a: ["cancelled", "canceled"], why: "had + V3: **cancelled** (AQSH: canceled)." },
    { k: "fill", q: "Had she ___ been to London before?", hint: "hech (savolda)", a: ["ever"], why: "Past Perfect savolida tajriba uchun **ever**." },
    { k: "listen", say: "I had never seen such a big crowd.", opts: ["I had never seen such a big crowd.", "I have never seen such a big crowd.", "I never saw such a big crowd.", "I had never seen such a big cloud."], a: 0, why: "**had never seen** — Past Perfect." },
    { k: "tf", q: "Past Perfect da **have** ishlatiladi: *I have eaten before he came.*", a: false, why: "Past Perfect da faqat **had**: *I had eaten before he came.*" },
    { k: "order", uz: "U allaqachon hamma narsani yig'ib bo'lgan edi.", words: ["He", "had", "already", "packed", "everything."], extra: ["has", "pack"], why: "**had + already + V3**." },
    { k: "translate", uz: "Biz kechikdik, chunki avtobusni o'tkazib yuborgan edik.", a: ["We were late because we had missed the bus.", "We were late because we'd missed the bus.", "We were late because we had missed our bus."], why: "Sabab oldin bo'lgan: **had missed**." },
  ],
  summary: [
    "**Past Perfect** = **had + V3** (*had finished, had gone*). Hamma shaxs uchun bir xil: *I had, she had, they had*.",
    "U o'tmishdagi ikki voqeadan **oldin bo'lganini** ko'rsatadi: *When I arrived, the train had left.*",
    "Inkor: **hadn't + V3**. Savol: **Had + ega + V3?** Qisqa javob: *Yes, I had. / No, I hadn't.*",
    "**already, just, never ... before, yet, ever** — had dan keyin keladi: *She had already left.*",
    "Xatolar: ~~I had went~~ (to'g'risi **had gone**); Past Perfect ni yolg'iz va aniq vaqt bilan ishlatmang.",
  ],
  homework: "Kechagi kuningiz haqida 5 ta gap yozing. Har birida ikki voqea bo'lsin: biri oldin bo'lgan (**had + V3**), ikkinchisi keyin (**Past Simple**). Masalan: *When I got home, my mother had already made tea.* Keyin gaplaringizni baland ovozda o'qing.",
};

export default lesson;
