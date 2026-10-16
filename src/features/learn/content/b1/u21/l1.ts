import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u21-l1",
  title: "The passive: present and past",
  titleUz: "Majhul nisbat: hozirgi va o'tgan zamon (is made, was built)",
  goal: "**Majhul nisbat** (*passive*) ni hozirgi va o'tgan zamonda tuzasiz: *Rice is grown here. The bridge was built in 1998.* Qachon **by** kerakligini bilasiz, passive savol va inkor gaplar tuzasiz va **The accident was happened** kabi xatodan qochasiz.",
  slides: [
    {
      title: "Majhul nisbat nima uchun kerak?",
      blocks: [
        { t: "p", md: "Oddiy (aktiv) gapda **ish qiluvchi** birinchi turadi: *Tom wrote the email.* Majhul nisbatda esa **ishning o'zi yoki natijasi** muhim bo'ladi: *The email was written yesterday.* Kim qilgani noma'lum, muhim emas yoki o'zi ma'lum bo'lsa, passive ishlatamiz." },
        { t: "p", md: "O'zbek tilida buni **-il, -in** qo'shimchalari beradi: *qurilgan, ishlab chiqariladi, o'g'irlangan*. Inglizchada esa qo'shimcha yo'q: **be + V3** (fe'lning uchinchi shakli) ishlatiladi." },
        {
          t: "table", head: ["Aktiv", "Passive"],
          rows: [
            ["They **make** cars here.", "Cars **are made** here."],
            ["Someone **stole** my bag.", "My bag **was stolen**."],
            ["A French company **built** the bridge.", "The bridge **was built** by a French company."],
          ],
        },
        { t: "tip", tone: "info", md: "Aktiv gapdagi **to'ldiruvchi** (*cars, my bag, the bridge*) passive gapda **ega** bo'lib birinchi o'ringa chiqadi. Fe'l esa **be + V3** ga aylanadi." },
        { t: "check", ex: { k: "choice", q: "Qaysi gap passive?", opts: ["They sell fresh bread here.", "Fresh bread is sold here.", "We are selling fresh bread.", "He sold fresh bread."], a: 1, why: "**is sold** = be + V3 — passive. Qolganlarida ish qiluvchi (*they, we, he*) bor." } },
      ],
    },
    {
      title: "Hozirgi zamon: am / is / are + V3",
      blocks: [
        { t: "p", md: "Doimiy faktlar, odatlar va ishlab chiqarish jarayonlari haqida **Present Simple passive** ishlatamiz. **Be** ni ega bo'yicha tanlaymiz (*is* yoki *are*), keyin **V3**." },
        {
          t: "table", head: ["Shakl", "Tuzilishi", "Misol"], speak: [2],
          rows: [
            ["Darak", "ega + am / is / are + V3", "English is spoken here."],
            ["Inkor", "ega + isn't / aren't + V3", "The office isn't cleaned at weekends."],
            ["Savol", "Is / Are + ega + V3?", "Are these shoes made in Italy?"],
            ["Wh-savol", "Wh- + is / are + ega + V3?", "Where is rice grown?"],
          ],
        },
        {
          t: "examples", items: [
            { en: "Coffee is grown in warm countries.", uz: "Qahva issiq mamlakatlarda yetishtiriladi." },
            { en: "These parcels are delivered every morning.", uz: "Bu posilkalar har kuni ertalab yetkaziladi." },
            { en: "I am paid on the first of the month.", uz: "Menga maosh oyning birinchi kuni to'lanadi." },
            { en: "How is this cheese made?", uz: "Bu pishloq qanday tayyorlanadi?" },
          ],
        },
        { t: "tip", tone: "warn", md: "Fe'lning **V3** shakli kerak: *made, sold, grown, written, taken*. Noto'g'ri fe'llarni yodlab oling. To'g'ri fe'llarda **-ed**: *produced, delivered, repaired*." },
        { t: "check", ex: { k: "fill", q: "Olive oil ___ in many Mediterranean countries. (produce)", a: ["is produced"], why: "Olive oil — birlik, hozirgi doimiy fakt: **is produced**." } },
        { t: "check", ex: { k: "choice", q: "These tools ___ in a small factory.", opts: ["are made", "is made", "made", "are make"], a: 0, why: "**These tools** — ko'plik: **are** + V3 (*made*)." } },
      ],
    },
    {
      title: "O'tgan zamon: was / were + V3",
      blocks: [
        { t: "p", md: "Tugagan, aniq o'tgan vaqtdagi ish haqida **was / were + V3** ishlatamiz. Ega birlik bo'lsa **was**, ko'plik bo'lsa **were**." },
        {
          t: "table", head: ["Shakl", "Tuzilishi", "Misol"], speak: [2],
          rows: [
            ["Darak", "ega + was / were + V3", "The bridge was built in 1998."],
            ["Inkor", "ega + wasn't / weren't + V3", "The letters weren't delivered on time."],
            ["Savol", "Was / Were + ega + V3?", "Was the thief caught?"],
            ["Wh-savol", "Wh- + was / were + ega + V3?", "When was the telephone invented?"],
          ],
        },
        {
          t: "examples", items: [
            { en: "My bike was stolen last night.", uz: "Mening velosipedim kecha kechasi o'g'irlangan." },
            { en: "Two windows were broken in the storm.", uz: "Bo'ronda ikkita oyna sindi." },
            { en: "Was anyone hurt in the accident?", uz: "Avariyada kimdir jarohat oldimi?" },
            { en: "The old library was damaged by a fire.", uz: "Eski kutubxona yong'indan zarar ko'rgan." },
          ],
        },
        { t: "tip", tone: "warn", md: "Savolda **did** kerak emas: *When was it invented?* (**When did it invented?** — xato). Passive savolda **be** fe'li ega oldiga o'tadi." },
        { t: "check", ex: { k: "fix", wrong: "When did the telephone invented?", a: ["When was the telephone invented?"], hint: "Passive savol: be + ega + V3", why: "Passive savolda **was** + ega + V3, **did** ishlatilmaydi." } },
        { t: "check", ex: { k: "choice", q: "Where ___ your phone made? — In China, I think.", opts: ["is", "does", "did", "has"], a: 0, why: "Hozirgi zamon passive savol: **Where is … made?**" } },
      ],
    },
    {
      title: "By + kim? Qachon aytiladi?",
      blocks: [
        { t: "p", md: "Ish qiluvchini passive gapda **by** bilan aytish mumkin, lekin ko'pincha **aytilmaydi**. Quyidagi hollarda **by** kerak emas:" },
        {
          t: "table", head: ["Holat", "Misol"],
          rows: [
            ["Kim qilgani noma'lum", "My car was stolen. (kim o'g'irlaganini bilmaymiz)"],
            ["Kim qilgani ahamiyatsiz yoki hammaga ma'lum", "The shop is closed on Sundays."],
            ["Umumiy fikr: *odamlar, ular*", "English is spoken all over the world."],
          ],
        },
        { t: "p", md: "**By** ish qiluvchi **muhim yoki qiziq** bo'lsa ishlatiladi: mualliflik, mashhur odamlar, yangi ma'lumot." },
        {
          t: "examples", items: [
            { en: "This song was written by a young girl from Samarkand.", uz: "Bu qo'shiqni Samarqandlik yosh qiz yozgan." },
            { en: "The painting was damaged by the rain.", uz: "Rasm yomg'irdan zarar ko'rdi." },
          ],
        },
        { t: "tip", tone: "warn", md: "**Faqat o'timli fe'llar** (to'ldiruvchi qabul qiladigan: *make, build, write, steal*) passive bo'ladi. **O'timsiz fe'llar** (*happen, arrive, die, sleep, go*) passive bo'lmaydi. O'zbekchada «bo'lib o'tdi» deymiz, lekin inglizcha **The accident was happened** — xato!" },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["The accident happened at 8 o'clock.", "My cousin arrived late.", "The meeting was cancelled."] },
          bad: { title: "Xato", items: ["The accident was happened at 8 o'clock.", "My cousin was arrived late.", "The meeting was cancel."] },
        },
        { t: "check", ex: { k: "fix", wrong: "The train was arrived at six.", a: ["The train arrived at six."], hint: "arrive passive bo'lmaydi", why: "**arrive** o'timsiz fe'l, passive bo'lmaydi: *The train arrived.*" } },
        { t: "check", ex: { k: "tf", q: "*Someone broke the window.* gapini passive qilganda **by someone** qo'shish shart.", a: false, why: "Kim ekani noma'lum bo'lsa, **by someone** aytilmaydi: *The window was broken.*" } },
      ],
    },
    {
      title: "O'qing: Bizning nonvoyxona",
      blocks: [
        {
          t: "text", title: "Bread from the corner bakery",
          en: "Our local bakery is famous in the neighbourhood. The bread is made every morning before sunrise, and it is sold while it is still warm. The flour is delivered from a small mill outside the town. In the past, the dough was mixed by hand, but today it is mixed by a machine. Last year the old oven was replaced and the shop was repainted. Not all the bread is sold on the same day. What is left is given to a local charity in the evening.",
          uz: "Bizning mahalladagi nonvoyxona hammaga tanish. Non har kuni tong otishidan oldin pishiriladi va hali iliq paytida sotiladi. Un shahar tashqarisidagi kichik tegirmondan yetkazib beriladi. Ilgari xamir qo'lda qorilgan, bugun esa mashinada qoriladi. O'tgan yili eski tandir almashtirildi va do'kon qayta bo'yaldi. Barcha non o'sha kuni sotilmaydi. Qolgani kechqurun mahalliy xayriya tashkilotiga beriladi.",
        },
        { t: "check", ex: { k: "tf", q: "Today the dough is mixed by hand.", a: false, why: "*In the past* qo'lda edi, hozir **mashinada**: *it is mixed by a machine*." } },
        { t: "check", ex: { k: "choice", q: "Why does the text say \"the old oven was replaced\"?", opts: ["It happened last year and who did it is not important.", "The oven is still old.", "It is a question.", "It happens every day."], a: 0, why: "**Last year** — o'tgan zamon passive, ishni kim qilgani muhim emas." } },
      ],
    },
    {
      title: "Dialog: Noutbuk ta'mirlandi",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Karim", en: "Hi, Madina. Is your laptop working again?", uz: "Salom, Madina. Noutbukingiz yana ishlayaptimi?" },
            { who: "Madina", en: "Yes! It was repaired yesterday, and it was delivered to my house this morning.", uz: "Ha! Kecha ta'mirlandi, bugun ertalab uyimga yetkazib berildi." },
            { who: "Karim", en: "What was wrong with it?", uz: "Nima bo'lgan edi?" },
            { who: "Madina", en: "The screen was damaged when I dropped it. A new one was fitted.", uz: "Men tushirib yuborganimda ekran shikastlangan edi. Yangisi o'rnatildi." },
            { who: "Karim", en: "Where was it repaired?", uz: "Qayerda ta'mirlandi?" },
            { who: "Madina", en: "At a small shop near the station. Phones and tablets are repaired there too.", uz: "Bekat yaqinidagi kichik do'konda. U yerda telefon va planshetlar ham ta'mirlanadi." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "When was the laptop delivered?", opts: ["This morning", "Yesterday evening", "Last week", "It was not delivered"], a: 0, why: "*It was delivered to my house this morning.*" } },
      ],
    },
  ],
  words: [
    { en: "manufacture", uz: "ishlab chiqarmoq (sanoatda)", ipa: "ˌmæn.jəˈfæk.tʃə", pos: "verb", ex: "Cars are manufactured in this factory.", exUz: "Mashinalar shu zavodda ishlab chiqariladi." },
    { en: "export", uz: "eksport qilmoq", ipa: "ɪkˈspɔːt", pos: "verb", ex: "Many countries export fruit and vegetables.", exUz: "Ko'p mamlakatlar meva va sabzavot eksport qiladi." },
    { en: "construct", uz: "qurmoq", ipa: "kənˈstrʌkt", pos: "verb", ex: "The bridge was constructed in 1998.", exUz: "Ko'prik 1998-yilda qurilgan." },
    { en: "assemble", uz: "yig'moq, yig'ib qurmoq", ipa: "əˈsem.bəl", pos: "verb", ex: "The furniture is assembled by hand.", exUz: "Mebel qo'lda yig'iladi." },
    { en: "release", uz: "chiqarmoq, e'lon qilmoq", ipa: "rɪˈliːs", pos: "verb", ex: "The new phone was released last week.", exUz: "Yangi telefon o'tgan hafta sotuvga chiqarildi." },
    { en: "steal", uz: "o'g'irlamoq", ipa: "stiːl", pos: "verb", ex: "Someone stole my wallet on the bus.", exUz: "Kimdir avtobusda hamyonimni o'g'irladi." },
    { en: "transport", uz: "tashimoq", ipa: "trænˈspɔːt", pos: "verb", ex: "Fruit is transported to the shops by lorry.", exUz: "Mevalar do'konlarga yuk mashinasida tashiladi." },
    { en: "harvest", uz: "hosilni yig'ib olmoq", ipa: "ˈhɑː.vɪst", pos: "verb", ex: "The wheat is harvested in July.", exUz: "Bug'doy iyul oyida o'rib olinadi." },
    { en: "raw material", uz: "xomashyo", ipa: "rɔː məˈtɪə.ri.əl", pos: "noun", ex: "Wood is the main raw material for paper.", exUz: "Yog'och qog'oz uchun asosiy xomashyodir." },
    { en: "product", uz: "mahsulot", ipa: "ˈprɒd.ʌkt", pos: "noun", ex: "The company sells its products all over the world.", exUz: "Kompaniya o'z mahsulotlarini butun dunyoga sotadi." },
  ],
  practice: [
    { k: "choice", q: "Rice ___ in many countries in Asia.", opts: ["is grown", "grows", "is growing", "grown"], a: 0, why: "Doimiy fakt, passive: **is grown** (be + V3)." },
    { k: "choice", q: "This bridge ___ in 1998.", opts: ["was built", "built", "is built", "were built"], a: 0, why: "**1998** — aniq o'tgan vaqt, birlik: **was built**." },
    { k: "listen", say: "The room is cleaned every morning.", opts: ["The room is cleaned every morning.", "The rooms are cleaned every morning.", "The room was cleaned every morning.", "The room cleans every morning."], a: 0, why: "Birlik + hozirgi zamon: **is cleaned**." },
    { k: "fill", q: "These cars ___ in Uzbekistan. (make)", a: ["are made"], uz: "Bu mashinalar O'zbekistonda ishlab chiqariladi.", why: "Ko'plik + hozirgi zamon: **are made**." },
    { k: "fill", q: "My phone ___ stolen last week.", a: ["was"], uz: "Telefonim o'tgan hafta o'g'irlangan.", why: "**last week** va birlik ega: **was** stolen." },
    { k: "fill", q: "When ___ the telephone invented?", a: ["was"], uz: "Telefon qachon ixtiro qilingan?", why: "Passive savol: **When was … invented?**" },
    { k: "order", uz: "Bu mashinalar Germaniyada ishlab chiqariladi.", words: ["These", "cars", "are", "made", "in", "Germany."], extra: ["is", "makes"], why: "Ko'plik: **are made**." },
    { k: "order", uz: "Mening velosipedim kecha o'g'irlangan.", words: ["My", "bike", "was", "stolen", "yesterday."], extra: ["were", "stole"], alt: [["Yesterday", "my", "bike", "was", "stolen."]], why: "O'tgan zamon passive: **was stolen**." },
    { k: "translate", uz: "Bu kitob 1990-yilda yozilgan.", a: ["This book was written in 1990.", "The book was written in 1990.", "That book was written in 1990."], why: "**was written** — o'tgan zamon passive." },
    { k: "translate", uz: "Bu yerda ingliz tilida gapirishadi.", a: ["English is spoken here."], why: "Umumiy fikr, ish qiluvchi aytilmaydi: **is spoken**." },
    { k: "fix", wrong: "The accident was happened last night.", a: ["The accident happened last night.", "The accident happened yesterday evening."], hint: "happen passive bo'lmaydi", why: "**happen** o'timsiz fe'l, passive bo'lmaydi." },
    { k: "fix", wrong: "Cheese is making from milk.", a: ["Cheese is made from milk."], hint: "be + V3", why: "Passive: be + **V3** (*made*), **-ing** emas." },
    { k: "match", pairs: [["produce", "ishlab chiqarmoq"], ["invent", "ixtiro qilmoq"], ["discover", "kashf qilmoq"], ["steal", "o'g'irlamoq"], ["deliver", "yetkazib bermoq"]] },
    { k: "tf", q: "*My laptop was damaged.* gapida laptopni kim shikastlagani aytilmagan.", a: true, why: "**by** yo'q, demak ish qiluvchi noma'lum yoki muhim emas." },
    { k: "dictation", say: "My wallet was stolen on the bus.", uz: "Hamyonim avtobusda o'g'irlangan.", why: "**was stolen** — o'tgan zamon passive." },
    { k: "speak", say: "Rice is grown in many countries, and it is eaten every day.", uz: "Guruch ko'p mamlakatlarda yetishtiriladi va har kuni yeyiladi." },
  ],
  quiz: [
    { k: "choice", q: "Olive oil ___ in this region.", opts: ["is produced", "produces", "is produce", "are produced"], a: 0, why: "Birlik, hozirgi zamon passive: **is produced**." },
    { k: "choice", q: "The windows ___ broken in the storm.", opts: ["were", "was", "are", "did"], a: 0, why: "Ko'plik, o'tgan zamon: **were** broken." },
    { k: "choice", q: "Where ___ your jacket made?", opts: ["was", "did", "has", "does"], a: 0, why: "Passive savol: be + ega + V3. O'tgan zamon: **was**." },
    { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["The meeting was cancelled.", "The meeting was cancel.", "The meeting cancelled by.", "The meeting is cancelling."], a: 0, why: "Passive: **was** + V3 (*cancelled*)." },
    { k: "fill", q: "Letters ___ delivered every day. (not)", a: ["aren't", "are not"], uz: "Xatlar har kuni yetkazib berilmaydi.", why: "Hozirgi zamon inkor passive: **aren't delivered**." },
    { k: "fill", q: "Who was this song written ___?", a: ["by"], uz: "Bu qo'shiq kim tomonidan yozilgan?", why: "Ish qiluvchi: **by**." },
    { k: "order", uz: "Bu uy 1950-yilda qurilgan.", words: ["This", "house", "was", "built", "in", "1950."], extra: ["is", "build"], why: "**was built** — o'tgan zamon passive." },
    { k: "translate", uz: "Do'kon yakshanba kuni yopiladi.", a: ["The shop is closed on Sundays.", "The shop is closed on Sunday."], why: "Doimiy fakt: **is closed**." },
    { k: "fix", wrong: "When did the telephone invented?", a: ["When was the telephone invented?"], hint: "Passive savol", why: "Passive savolda **was**, **did** emas." },
    { k: "tf", q: "*The train was arrived late.* — bu gap to'g'ri.", a: false, why: "**arrive** passive bo'lmaydi: *The train arrived late.*" },
  ],
  summary: [
    "Passive = **be + V3**. Ish yoki natija muhim bo'lsa, ish qiluvchi noma'lum yoki ahamiyatsiz bo'lsa ishlatamiz.",
    "Hozirgi zamon: **am / is / are + V3** (*Cars are made here*). O'tgan zamon: **was / were + V3** (*The bridge was built in 1998*).",
    "Inkor: **isn't / wasn't + V3**. Savol: **Is / Was + ega + V3?** va **Where was it made?** — savolda **do / did** kerak emas.",
    "**By** faqat ish qiluvchi muhim bo'lsa aytiladi: *written by a young girl*.",
    "O'timsiz fe'llar passive bo'lmaydi: ~~The accident was happened~~ → **The accident happened.**",
  ],
  homework: "Kundalik hayotingizdagi 6 ta narsa haqida passive gap yozing (*My shirt was made in…, Bread is sold…, My phone was repaired…*). Ikkitasiga **by** qo'shing. Keyin xatolarni tekshiring: har bir gapda **be + V3** bormi?",
};

export default lesson;
