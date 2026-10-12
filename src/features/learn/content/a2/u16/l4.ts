import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u16-l4",
  title: "The passive",
  titleUz: "Majhul nisbat: is made, was built",
  goal: "**Present Simple** va **Past Simple** majhul nisbatini tuzasiz (*Cars are made in factories. The cake was baked by my mother*), **by** ni faqat kerak bo'lganda qo'shasiz va **I born**, **was happened** kabi xatolardan qochasiz.",
  slides: [
    {
      title: "Majhul nisbat nima uchun kerak?",
      blocks: [
        { t: "p", md: "Odatda gapda ishni **kim qilgani** muhim: *My mother baked the cake.* Lekin ba'zan ishni qilgan kishi noma'lum, ahamiyatsiz yoki hammaga ayon bo'ladi. Shunda **ish yoki natija** haqida gapiramiz — bu **passive** (majhul nisbat). O'zbekchada ham shunday: *palov pishiriladi, uy qurildi, ingliz tili gapiriladi* (-il, -in qo'shimchalari)." },
        {
          t: "table", head: ["Active (ega ishni qiladi)", "Passive (ish bajariladi)"], speak: [0, 1],
          rows: [
            ["People speak English in many countries.", "English is spoken in many countries."],
            ["Farmers grow rice in warm countries.", "Rice is grown in warm countries."],
            ["Workers make cars in factories.", "Cars are made in factories."],
          ],
        },
        { t: "p", md: "Formula: **am / is / are + V3**. Active gapdagi *to'ldiruvchi* passive da *ega* bo'ladi: *rice* → **Rice** is grown." },
        { t: "tip", tone: "info", md: "Birlik ega → **is** (*Rice is grown*), ko'plik ega → **are** (*Cars are made*). Fe'lning 3-shakli (V3) siz bilgan: *made, grown, spoken, written, sold, built*." },
        { t: "check", ex: { k: "choice", q: "**Cars ___ in factories.**", opts: ["make", "are made", "is made", "are make"], a: 1, why: "Ko'plik ega + passive → **are made**." } },
      ],
    },
    {
      title: "Past Simple passive; savol va inkor",
      blocks: [
        { t: "p", md: "O'tgan zamonda **was / were + V3** ishlatiladi. Birlik — **was**, ko'plik — **were**:" },
        {
          t: "table", head: ["Zamon", "Shakl", "Misol"], speak: [2],
          rows: [
            ["Present", "am / is / are + V3", "The shop is closed on Sundays."],
            ["Past", "was / were + V3", "The window was broken last night."],
            ["Past (ko'plik)", "were + V3", "The letters were delivered yesterday."],
          ],
        },
        {
          t: "table", head: ["", "Present", "Past"], speak: [1, 2],
          rows: [
            ["Inkor", "The cars aren't made here.", "The window wasn't broken."],
            ["Savol", "Is plov cooked in a kazan?", "Where was this carpet made?"],
          ],
        },
        { t: "tip", tone: "good", md: "Savol va inkorda faqat **be** o'zgaradi (*is → isn't, was → wasn't*), V3 esa o'zgarmaydi. **Do / did kerak emas**: *Did the window broken?* ❌" },
        { t: "check", ex: { k: "fill", q: "The letters ___ yesterday. (deliver)", a: ["were delivered"], why: "Ko'plik + o'tgan zamon → **were delivered**." } },
        { t: "check", ex: { k: "choice", q: "**My phone ___ on the bus yesterday.** (o'g'irlangan)", opts: ["stolen", "was stolen", "is stolen", "were stolen"], a: 1, why: "**steal – stole – stolen**; birlik + o'tgan zamon → **was stolen**." } },
      ],
    },
    {
      title: "By — faqat kerak bo'lganda",
      blocks: [
        { t: "p", md: "Ishni qilgan kishini ko'rsatish uchun **by + kim** ishlatiladi. Lekin bu **kerak bo'lgandagina** yoziladi:" },
        {
          t: "examples", items: [
            { en: "The cake was baked by my mother.", uz: "Tortni oyim pishirgan.", note: "Kim pishirgani muhim — yangi ma'lumot." },
            { en: "Hamlet was written by Shakespeare.", uz: "\"Hamlet\"ni Shekspir yozgan.", note: "Muallif — muhim ma'lumot." },
            { en: "My bag was stolen.", uz: "Sumkamni o'g'irlab ketishdi.", note: "Kim o'g'irlagani noma'lum — by kerak emas." },
            { en: "English is spoken in many countries.", uz: "Ingliz tili ko'p mamlakatlarda gapiriladi.", note: "Kim gapirishi ayon (odamlar) — by kerak emas." },
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["English is spoken in many countries.", "My bag was stolen.", "The cake was baked by my mother."] },
          bad: { title: "Xato / ortiqcha", items: ["English is spoken by people.", "My bag was stolen by somebody.", "The cake was baked."] },
        },
        { t: "tip", tone: "warn", md: "*by people, by someone, by them, by workers* — ortiqcha, ularni yozmang. **by hand** (qo'lda) — bu ish bajaruvchi emas, usul: *The carpets are made by hand.*" },
        { t: "check", ex: { k: "tf", q: "**English is spoken by people in many countries.** — bu yerda **by people** kerak.", a: false, why: "Odamlar gapirishi hammaga ayon — **by people** ortiqcha." } },
      ],
    },
    {
      title: "Uzbek o'quvchilari qiladigan xatolar",
      blocks: [
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["Cars are made in factories.", "The window was broken.", "The book is written by a famous author.", "I was born in Samarkand."] },
          bad: { title: "Xato", items: ["Cars made in factories.", "The window was broke.", "The book is wrote by a famous author.", "I born in Samarkand."] },
        },
        { t: "p", md: "Uch qoidani eslab qoling:" },
        {
          t: "table", head: ["Xato", "Sababi", "To'g'ri"],
          rows: [
            ["Cars made in factories", "**be** unutilgan", "Cars **are** made…"],
            ["was broke / is wrote", "V2 ishlatilgan", "was **broken** / is **written**"],
            ["It was happened", "happen — passive bo'lmaydi", "It happened."],
          ],
        },
        { t: "tip", tone: "warn", md: "**happen, arrive, die, sleep, come, go** kabi fe'llarda to'ldiruvchi yo'q (ular *o'timsiz*), shuning uchun ularning passive shakli yo'q: *The accident **happened**.* — *was happened* ❌. Tug'ilganlik haqida esa passive shart: **I was born in…** (*I born* ❌)." },
        { t: "check", ex: { k: "choice", q: "Qaysi gap **xato**?", opts: ["The window was broken by someone.", "The letter was written yesterday.", "The match was happened last night.", "The bread is sold here."], a: 2, why: "**happen** — passive da ishlatilmaydi: *The match happened…*" } },
        { t: "check", ex: { k: "fill", q: "I ___ born in Tashkent.", a: ["was"], why: "**I was born** — doimiy qolip." } },
      ],
    },
    {
      title: "O'qing: Palov qanday pishiriladi",
      blocks: [
        {
          t: "text", title: "How plov is made",
          en: "Plov is one of the most famous dishes in Uzbekistan, and it is cooked for weddings, holidays and big family dinners. First, the onions and carrots are cut. Then the meat is fried in oil in a big kazan. Next, the onions and carrots are added, and the rice is washed and put on top. Everything is cooked slowly, and finally the plov is mixed and served on a large plate. In many families plov is often cooked by men. At Laylo's wedding, the plov was cooked by her uncle, and everybody asked for more!",
          uz: "Palov O'zbekistondagi eng mashhur taomlardan biri va u to'ylar, bayramlar va katta oilaviy ziyofatlar uchun pishiriladi. Avval piyoz va sabzi to'g'raladi. Keyin katta qozonda go'sht moyda qovuriladi. Undan keyin piyoz va sabzi qo'shiladi, guruch esa yuvilib, ustiga solinadi. Hammasi sekin pishiriladi va nihoyat palov aralashtirilib, katta laganda tortiladi. Ko'p oilalarda palovni ko'pincha erkaklar pishiradi. Layloning to'yida palovni amakisi pishirgan va hamma yana so'radi!",
        },
        { t: "check", ex: { k: "choice", q: "What happens to the rice?", opts: ["It is fried first.", "It is washed and put on top.", "It is served raw.", "It is cut."], a: 1, why: "*the rice is washed and put on top*." } },
        { t: "check", ex: { k: "tf", q: "At Laylo's wedding the plov was cooked by her uncle.", a: true, why: "Bu yerda **by her uncle** kerak — kim pishirgani yangi ma'lumot." } },
      ],
    },
    {
      title: "Dialog: esdalik do'konida",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Tourist", en: "These carpets are beautiful! Where are they made?", uz: "Bu gilamlar juda chiroyli! Ular qayerda to'qilgan?" },
            { who: "Seller", en: "They are made in Bukhara. They are made by hand.", uz: "Ular Buxoroda to'qilgan. Qo'lda to'qilgan." },
            { who: "Tourist", en: "And what about these cups? Were they made in Bukhara too?", uz: "Bu piyolalar-chi? Ular ham Buxoroda yasalganmi?" },
            { who: "Seller", en: "No, they were made in a small workshop near here.", uz: "Yo'q, ular shu yaqindagi kichik ustaxonada yasalgan." },
            { who: "Tourist", en: "I'd like to buy two. Can I pay by card?", uz: "Ikkitasini sotib olmoqchiman. Karta bilan to'lasam bo'ladimi?" },
            { who: "Seller", en: "Sorry, cards aren't accepted today. Only cash.", uz: "Kechirasiz, bugun kartalar qabul qilinmaydi. Faqat naqd pul." },
          ],
        },
        { t: "check", ex: { k: "tf", q: "The cups were made in Bukhara.", a: false, why: "*They were made in a **small workshop near here**.*" } },
      ],
    },
  ],
  words: [
    { en: "factory", uz: "zavod, fabrika", ipa: "ˈfæk.tər.i", pos: "noun", ex: "Shoes are made in this factory.", exUz: "Poyabzallar shu zavodda tayyorlanadi." },
    { en: "produce", uz: "ishlab chiqarmoq", ipa: "prəˈdjuːs", pos: "verb", ex: "Cotton is produced in many regions.", exUz: "Paxta ko'p hududlarda yetishtiriladi." },
    { en: "build – built – built", uz: "qurmoq", ipa: "bɪld – bɪlt – bɪlt", pos: "verb", ex: "The bridge was built last year.", exUz: "Ko'prik o'tgan yili qurilgan." },
    { en: "invent", uz: "ixtiro qilmoq", ipa: "ɪnˈvent", pos: "verb", ex: "The telephone was invented in the nineteenth century.", exUz: "Telefon XIX asrda ixtiro qilingan." },
    { en: "repair", uz: "ta'mirlamoq", ipa: "rɪˈpeər", pos: "verb", ex: "My car was repaired yesterday.", exUz: "Mashinam kecha ta'mirlandi." },
    { en: "steal – stole – stolen", uz: "o'g'irlamoq", ipa: "stiːl – stəʊl – ˈstəʊ.lən", pos: "verb", ex: "My bike was stolen last night.", exUz: "Velosipedim kecha kechasi o'g'irlandi." },
    { en: "invite", uz: "taklif qilmoq", ipa: "ɪnˈvaɪt", pos: "verb", ex: "We were invited to the wedding.", exUz: "Biz to'yga taklif qilindik." },
    { en: "deliver", uz: "yetkazib bermoq", ipa: "dɪˈlɪv.ər", pos: "verb", ex: "Pizza is delivered to your door.", exUz: "Pitsa eshigingizgacha yetkazib beriladi." },
    { en: "damage", uz: "shikast yetkazmoq, zarar bermoq", ipa: "ˈdæm.ɪdʒ", pos: "verb", ex: "The car was damaged in the accident.", exUz: "Mashina avtohalokatda shikastlandi." },
    { en: "discover", uz: "kashf qilmoq, topmoq", ipa: "dɪˈskʌv.ər", pos: "verb", ex: "America was discovered a long time ago.", exUz: "Amerika juda qadim zamonda kashf qilingan." },
  ],
  practice: [
    { k: "choice", q: "**Cars ___ in factories.**", opts: ["make", "are made", "is made", "are make"], a: 1 },
    { k: "choice", q: "**My phone ___ yesterday.**", opts: ["was stolen", "stolen", "is stolen", "were stolen"], a: 0 },
    { k: "fill", q: "English ___ in many countries. (speak)", a: ["is spoken"], why: "Present passive: **is spoken**." },
    { k: "fill", q: "The letters ___ yesterday. (deliver)", a: ["were delivered"] },
    { k: "fill", q: "The cake ___ by my mother. (bake)", a: ["was baked"], why: "O'tgan zamon, birlik: **was baked**." },
    { k: "fill", q: "I ___ born in Samarkand.", a: ["was"] },
    { k: "listen", say: "The window was broken last night.", opts: ["The window was broken last night.", "The window broke last night.", "The windows were broken last night."], a: 0 },
    { k: "order", uz: "Palov qozonda pishiriladi.", words: ["Plov", "is", "cooked", "in", "a", "kazan."], extra: ["cook", "are"] },
    { k: "order", uz: "Muzey mashhur arxitektor tomonidan qurilgan.", words: ["The", "museum", "was", "built", "by", "a", "famous", "architect."], extra: ["were", "build"] },
    { k: "translate", uz: "Bu xat kecha yuborildi.", a: ["This letter was sent yesterday.", "The letter was sent yesterday.", "This email was sent yesterday.", "The email was sent yesterday."] },
    { k: "translate", uz: "Ingliz tili ko'p mamlakatlarda gapiriladi.", a: ["English is spoken in many countries.", "English is spoken in a lot of countries."] },
    { k: "tf", q: "**The accident was happened.** — to'g'ri gap.", a: false, why: "**happen** passive bo'lmaydi: *The accident happened.*" },
    { k: "tf", q: "**English is spoken in many countries** gapiga **by people** qo'shish kerak.", a: false, why: "Odamlar gapirishi aniq — **by people** ortiqcha." },
    { k: "match", pairs: [["factory", "zavod"], ["steal", "o'g'irlamoq"], ["invite", "taklif qilmoq"], ["repair", "ta'mirlamoq"], ["discover", "kashf qilmoq"]] },
    { k: "speak", say: "Rice is grown in many countries.", uz: "Guruch ko'p mamlakatlarda yetishtiriladi." },
  ],
  quiz: [
    { k: "choice", q: "**The bridge ___ last year.**", opts: ["built", "was built", "is built", "were built"], a: 1 },
    { k: "choice", q: "**Rice ___ in warm countries.**", opts: ["is grow", "is grown", "grown", "are grown"], a: 1 },
    { k: "choice", q: "Qaysi gap **xato**?", opts: ["The window was broken by someone.", "The letter was written yesterday.", "The match was happened last night.", "The bread is sold here."], a: 2 },
    { k: "fill", q: "These shirts ___ in a factory. (make)", a: ["are made"] },
    { k: "fill", q: "The cars ___ last week. (repair)", a: ["were repaired"] },
    { k: "fill", q: "Where ___ you born?", a: ["were"] },
    { k: "listen", say: "Plov is served on a large plate.", opts: ["Plov is served on a large plate.", "Plov serves on a large plate.", "Plov is serving on a large plate."], a: 0 },
    { k: "order", uz: "Sumkam metroda o'g'irlandi.", words: ["My", "bag", "was", "stolen", "on", "the", "metro."], extra: ["stole", "were"] },
    { k: "translate", uz: "Mehmonlar to'yga taklif qilindi.", a: ["The guests were invited to the wedding.", "Guests were invited to the wedding."] },
    { k: "tf", q: "**Hamlet was written by Shakespeare** gapida **by** to'g'ri ishlatilgan, chunki muallif muhim.", a: true },
  ],
  summary: [
    "**Passive** = **be + V3**. Present: *Cars **are made** in factories.* Past: *The window **was broken**.*",
    "Savol va inkorda faqat **be** o'zgaradi: *Is plov cooked here? The window wasn't broken.* **do / did** kerak emas.",
    "**by + kim** faqat ish bajaruvchi muhim bo'lsa: *The cake was baked by my mother.* Aks holda yozmang.",
    "Xatolar: *Cars made…* (be yo'q), *was broke* (V2), *was happened* (o'timsiz fe'l), *I born* (to'g'risi: **I was born**).",
  ],
  homework: "Atrofingizdagi 8 ta narsa haqida passive gap yozing (*Bread is sold in the bakery. This phone was made in…, Our house was built in…*). 3 ta gapga **by** qo'shing, qolganlarida qo'shmang va nima uchun qo'shmaganingizni o'ylab ko'ring.",
};

export default lesson;
