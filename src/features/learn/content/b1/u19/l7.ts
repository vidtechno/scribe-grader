import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u19-l7",
  title: "Writing a story",
  titleUz: "Yozish: qiziqarli hikoya",
  goal: "Hikoyani **boshi, o'rtasi va oxiri** bilan tuzasiz, tasvirni **jonli** qilasiz, **to'g'ridan-to'g'ri nutqni** to'g'ri yozasiz (*\"I'm tired,\" said Tom.*) va tayyor hikoyani o'zingiz tekshirasiz.",
  slides: [
    {
      title: "Hikoyaning tuzilishi",
      blocks: [
        { t: "p", md: "Yaxshi hikoya tartibsiz voqealar to'plami emas. U **uch qismdan** iborat bo'ladi. Yozishdan oldin har bir qism uchun bir-ikki gap o'ylab oling (bu **plan** — reja)." },
        {
          t: "table", head: ["Qism", "Nima yoziladi", "Misol"], speak: [2],
          rows: [
            ["Boshi (beginning)", "Joy, vaqt, qahramonlar", "It was a cold evening in November. Karim was waiting at the station."],
            ["O'rtasi (middle)", "Muammo va voqealar", "Suddenly, he heard footsteps behind him."],
            ["Oxiri (ending)", "Yechim va his-tuyg'u", "In the end, he got home safely."],
          ],
        },
        { t: "tip", tone: "info", md: "Hikoyaning asosiy so'zlari: **plot** (syujet, voqealar zanjiri), **character** (qahramon), **setting** (voqea joyi va vaqti), **ending** (yakun), **narrator** (hikoyachi)." },
        { t: "check", ex: { k: "choice", q: "Which part of a story tells us WHERE and WHEN it happens?", opts: ["The setting", "The ending", "The headline", "The source"], a: 0, why: "Voqea joyi va vaqti — **setting**." } },
        { t: "check", ex: { k: "choice", q: "Hikoyaning o'rtasida odatda nima bo'ladi?", opts: ["Muammo yoki kutilmagan voqea", "Faqat qahramonning ismi", "Faqat xulosa", "Sarlavha"], a: 0, why: "O'rtada **muammo** va voqealar rivojlanadi; yechim oxirida keladi." } },
      ],
    },
    {
      title: "Tasvirni jonli qilish",
      blocks: [
        { t: "p", md: "«U qo'rqdi» deb yozish o'rniga, o'quvchi **o'zi his qiladigan** tasvir bering. Buning uchun sezgi a'zolari (ko'rish, eshitish, hid) va aniq so'zlar kerak. Solishtiring:" },
        {
          t: "compare",
          good: { title: "Jonli (vivid)", items: ["Her hands were shaking and her heart was beating fast.", "The old house smelled of dust and smoke.", "A cold wind pushed the door open."] },
          bad: { title: "Quruq", items: ["She was scared.", "The house was old.", "It was windy."] },
        },
        {
          t: "table", head: ["Maqsad", "Foydali so'zlar"],
          rows: [
            ["Ovoz", "loud, quiet, a sudden bang, whispered, shouted"],
            ["Ko'rinish", "dark, bright, empty, crowded, a long shadow"],
            ["Harakat", "hurried, crept, stared, jumped, trembled"],
            ["His-tuyg'u", "nervous, relieved, delighted, worried"],
          ],
        },
        { t: "tip", tone: "warn", md: "Juda ko'p sifat qo'shib yubormang. Bitta aniq fe'l ko'pincha uchta sifatdan yaxshi: *He hurried down the street* — *He walked very quickly down the street* dan qisqa va jonliroq." },
        { t: "check", ex: { k: "choice", q: "Which sentence is more vivid?", opts: ["Her hands shook as she opened the letter.", "She was nervous.", "She felt bad.", "The letter was there."], a: 0, why: "Aniq harakat va tasvir (**hands shook**) his-tuyg'uni ko'rsatadi." } },
        { t: "check", ex: { k: "fill", q: "\"Be quiet,\" she ___. (past of whisper)", a: ["whispered"], why: "Nutq fe'li o'tgan zamonda: **whispered**." } },
      ],
    },
    {
      title: "Qahramonlar nutqi",
      blocks: [
        { t: "p", md: "Hikoyada qahramonlar gapirsa, hikoya jonlanadi. Buni **to'g'ridan-to'g'ri nutq** (*direct speech*) deb ataymiz. Yozuv qoidalari:" },
        {
          t: "examples", items: [
            { en: "\"I'm tired,\" said Tom.", uz: "«Charchadim», dedi Tom.", note: "Nutq tirnoq ichida; vergul **tirnoq ichida** turadi." },
            { en: "Tom said, \"I'm tired.\"", uz: "Tom: «Charchadim», dedi.", note: "Avval so'z, keyin vergul, keyin katta harf bilan nutq." },
            { en: "\"Where are you going?\" asked Emma.", uz: "«Qayoqqa ketyapsan?» deb so'radi Emma.", note: "Savol belgisi tirnoq ichida; **asked** kichik harf bilan." },
            { en: "\"Come here!\" he shouted.", uz: "«Bu yoqqa kel!» deb qichqirdi u.", note: "Undov belgisidan keyin ham fe'l kichik harf." },
          ],
        },
        { t: "tip", tone: "info", md: "Har yangi gapiruvchi uchun **yangi qatordan** yozing. *said* o'rniga o'rinli joyda **asked, replied, whispered, shouted, laughed** ishlating. Britaniya kitoblarida ba'zan bitta tirnoq (' ') ishlatiladi; ikkalasi ham to'g'ri, lekin bir matnda bittasini tanlang." },
        { t: "tip", tone: "warn", md: "Gapiruvchi olmosh bo'lsa: *\"I'm tired,\" he said.* (**said he** emas). Ot bo'lsa ikkala tartib mumkin: *said Tom / Tom said*. Tirnoq ichidagi gap **katta harf** bilan boshlanadi." },
        { t: "check", ex: { k: "choice", q: "Qaysi gap to'g'ri yozilgan?", opts: ["\"I'm hungry,\" said Anna.", "\"I'm hungry\", said Anna.", "\"I'm hungry.\" said Anna.", "I'm hungry, said Anna."], a: 0, why: "Vergul tirnoq ichida, **said** kichik harf bilan, nutq esa tirnoqda." } },
        { t: "check", ex: { k: "tf", q: "In \"Where is it?\" asked Ben, the word asked starts with a small letter.", a: true, why: "Savol belgisidan keyin ham, tirnoqdan keyin kelgan fe'l kichik harf bilan yoziladi." } },
      ],
    },
    {
      title: "Boshlash, bog'lash, tugatish",
      blocks: [
        { t: "p", md: "Hikoyani **qiziqarli** boshlash uchun to'rt yo'l bor:" },
        {
          t: "table", head: ["Usul", "Misol"], speak: [1],
          rows: [
            ["Vaqt va joy", "It was a cold, dark evening in November."],
            ["Harakat", "Karim ran towards the station."],
            ["Savol", "Have you ever missed the last train?"],
            ["Nutq", "\"Excuse me,\" said a voice behind him."],
          ],
        },
        { t: "p", md: "**Zamonlar.** Hikoya asosan **Past Simple** da yoziladi. Fon uchun **Past Continuous** (*he was waiting*), oldingi voqea uchun **Past Perfect** (*he had missed the bus*). Bog'lovchi so'zlarni ham unutmang: *at first, suddenly, meanwhile, in the end.*" },
        { t: "tip", tone: "good", md: "Gaplarni **bir xil boshlamang** (har gap *He…* bilan boshlanmasin). Qisqa va uzun gaplarni aralashtiring. Oxirida his-tuyg'u yoki kichik syurpriz bering: *In the end, he got home with a new friend's phone number.*" },
        { t: "check", ex: { k: "fix", wrong: "When I arrived at the cinema, the film already started.", a: ["When I arrived at the cinema, the film had already started."], hint: "Avval bo'lgan voqea", why: "Boshqa o'tgan voqeadan oldin bo'lgan ish → **Past Perfect**: *had already started*." } },
        { t: "check", ex: { k: "fix", wrong: "While I walked home, it began to rain.", a: ["While I was walking home, it began to rain."], hint: "Fon holat", why: "Davom etayotgan fon harakat → **Past Continuous**: *was walking*." } },
      ],
    },
    {
      title: "Namuna hikoya",
      blocks: [
        {
          t: "text", title: "The Last Train",
          en: "It was a cold, dark evening in November. Karim was waiting at an empty station because he had missed the last bus. He was tired and hungry. Suddenly, he heard footsteps behind him. \"Excuse me,\" said a woman, \"is this the platform for the night train?\" Karim smiled with relief. \"Yes, it is,\" he replied. \"It should arrive in five minutes.\" They talked while they waited. Eventually, the train came out of the fog, and its yellow lights lit up the platform. In the end, Karim got home at midnight with a new friend's phone number in his pocket.",
          uz: "Noyabrdagi sovuq, qorong'i kech edi. Karim avtobusning oxirgi reysiga ulgurmagani uchun huvillagan bekatda kutib turardi. U charchagan va och edi. To'satdan orqasidan qadam tovushlari eshitildi. «Kechirasiz, — dedi bir ayol, — tungi poyezd shu platformadan jo'naydimi?» Karim yengil tortib jilmaydi. «Ha, shu yerdan, — deb javob berdi u. — Besh daqiqada kelishi kerak». Ular kutayotib suhbatlashdi. Nihoyat poyezd tuman ichidan chiqib keldi va uning sariq chiroqlari platformani yoritdi. Oxir-oqibat Karim yarim tunda cho'ntagida yangi do'stining telefon raqami bilan uyiga yetib keldi.",
        },
        { t: "check", ex: { k: "choice", q: "Why was Karim at the station?", opts: ["He had missed the last bus.", "He worked there.", "He was meeting his sister.", "He wanted to buy a ticket."], a: 0, why: "Matnda: *because he had missed the last bus*." } },
        { t: "check", ex: { k: "tf", q: "The woman wanted to know about the night train.", a: true, why: "U so'radi: *is this the platform for the night train?*" } },
      ],
    },
    {
      title: "Dialog: hikoyani birga tekshiramiz",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Madina", en: "Can you read my story, Ben? I want to know what you think.", uz: "Ben, hikoyamni o'qib ber. Fikringni bilmoqchiman." },
            { who: "Ben", en: "Of course. I like the beginning. The setting is very clear.", uz: "Albatta. Boshlanishi menga yoqdi. Joyi juda aniq tasvirlangan." },
            { who: "Madina", en: "Thank you. Is the middle too slow?", uz: "Rahmat. O'rtasi juda sekin emasmi?" },
            { who: "Ben", en: "A little. Maybe you could add a sudden event, and use more dialogue.", uz: "Biroz. Balki to'satdan bo'lgan voqea qo'shib, ko'proq dialog ishlatarsan." },
            { who: "Madina", en: "Good idea. What about the ending?", uz: "Yaxshi fikr. Yakuni-chi?" },
            { who: "Ben", en: "It is a nice surprise, but please check your punctuation. You forgot a comma in the speech.", uz: "Yaxshi syurpriz, lekin tinish belgilarini tekshir. Nutqda vergulni unutibsan." },
            { who: "Madina", en: "I'll write a second draft tonight and edit it carefully.", uz: "Bugun kechqurun ikkinchi variantni yozaman va ehtiyotkorlik bilan tahrir qilaman." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "What does Ben suggest for the middle?", opts: ["Add a sudden event and more dialogue", "Remove the ending", "Change the title", "Write a shorter beginning"], a: 0, why: "Ben: *add a sudden event, and use more dialogue*." } },
      ],
    },
  ],
  words: [
    { en: "plot", uz: "syujet, voqealar zanjiri", ipa: "plɒt", pos: "noun", ex: "The plot of the film is easy to follow.", exUz: "Filmning syujetini kuzatish oson." },
    { en: "character", uz: "qahramon, personaj", ipa: "ˈkær.ək.tər", pos: "noun", ex: "My favourite character is the old teacher.", exUz: "Mening sevimli qahramonim keksa o'qituvchi." },
    { en: "setting", uz: "voqea joyi va vaqti", ipa: "ˈset.ɪŋ", pos: "noun", ex: "The setting of the story is a small island.", exUz: "Hikoya kichik orolda bo'lib o'tadi." },
    { en: "ending", uz: "yakun, oxiri", ipa: "ˈen.dɪŋ", pos: "noun", ex: "I didn't like the ending of the book.", exUz: "Kitobning yakuni menga yoqmadi." },
    { en: "narrator", uz: "hikoyachi", ipa: "nəˈreɪ.tər", pos: "noun", ex: "The narrator tells the story in the first person.", exUz: "Hikoyachi voqeani birinchi shaxsdan aytadi." },
    { en: "vivid", uz: "jonli, yorqin", ipa: "ˈvɪv.ɪd", pos: "adj", ex: "She gave a vivid description of the storm.", exUz: "U bo'ronning jonli tasvirini berdi." },
    { en: "dialogue", uz: "dialog, suhbat", ipa: "ˈdaɪ.ə.lɒɡ", pos: "noun", ex: "The story has a lot of funny dialogue.", exUz: "Hikoyada kulgili dialoglar ko'p." },
    { en: "draft", uz: "qoralama", ipa: "drɑːft", pos: "noun", ex: "I wrote the first draft in one evening.", exUz: "Birinchi qoralamani bir kechada yozdim." },
    { en: "edit", uz: "tahrir qilmoq", ipa: "ˈed.ɪt", pos: "verb", ex: "Please edit your story before you send it.", exUz: "Yuborishdan oldin hikoyangizni tahrir qiling." },
    { en: "creative", uz: "ijodkor, ijodiy", ipa: "kriˈeɪ.tɪv", pos: "adj", ex: "He is a very creative writer.", exUz: "U juda ijodkor yozuvchi." },
  ],
  practice: [
    { k: "match", pairs: [["plot", "syujet"], ["character", "qahramon"], ["setting", "voqea joyi va vaqti"], ["ending", "yakun"], ["draft", "qoralama"], ["vivid", "jonli, yorqin"]] },
    { k: "choice", q: "The ___ of the story is a village in the mountains.", opts: ["setting", "draft", "narrator", "dialogue"], a: 0, why: "Voqea joyi → **setting**." },
    { k: "choice", q: "Which sentence is punctuated correctly?", opts: ["\"I'm ready,\" she said.", "\"I'm ready\", she said.", "\"I'm ready.\" she said.", "I'm ready, she said."], a: 0, why: "Vergul tirnoq ichida, **she said** kichik harf bilan." },
    { k: "listen", say: "It was a dark night, and the wind was blowing.", opts: ["It was a dark night, and the wind was blowing.", "It is a dark night, and the wind is blowing.", "It was a dark night, and the wind blew.", "It was a dark night, and the wind had blown."], a: 0, why: "Fon: **was blowing** — Past Continuous." },
    { k: "fill", q: "He ___ the door and walked in. (quietly open, past)", a: ["opened"], why: "Voqea — Past Simple: **opened**." },
    { k: "fill", q: "Before you send your story, please ___ it carefully. (tahrir qilmoq)", a: ["edit"], why: "**edit** — tahrir qilmoq." },
    { k: "fill", q: "The first ___ of my story was too short. (qoralama)", a: ["draft"], why: "**draft** — qoralama." },
    { k: "order", uz: "«Charchadim», dedi Tom.", words: ["\"I'm", "tired,\"", "said", "Tom."], extra: ["says"], alt: [["Tom", "said,", "\"I'm", "tired.\""]], why: "Nutq tirnoqda, vergul tirnoq ichida." },
    { k: "order", uz: "To'satdan eshik ochildi.", words: ["Suddenly,", "the", "door", "opened."], extra: ["sudden", "open"], why: "**Suddenly,** + Past Simple." },
    { k: "order", uz: "U kutayotganda kitob o'qidi.", words: ["She", "read", "a", "book", "while", "she", "waited."], extra: ["meanwhile", "wait"], alt: [["While", "she", "waited,", "she", "read", "a", "book."]], why: "**while** ikki ishni bitta gapda bog'laydi." },
    { k: "translate", uz: "Hikoyaning yakuni juda yaxshi edi.", a: ["The ending of the story was very good.", "The story's ending was very good.", "The ending of the story was really good."], why: "**ending** — yakun." },
    { k: "translate", uz: "U qo'llari titrab turgan holda xatni ochdi.", a: ["She opened the letter with shaking hands.", "She opened the letter and her hands were shaking.", "She opened the letter while her hands were shaking."], why: "Jonli tasvir: aniq harakat." },
    { k: "fix", wrong: "When he got to the station, the train already left.", a: ["When he got to the station, the train had already left.", "When he got to the station, the train had left."], hint: "Oldin bo'lgan voqea", why: "Oldingi voqea → **Past Perfect**: *had already left*." },
    { k: "tf", q: "In a story, every sentence should begin with \"He\" or \"She\".", a: false, why: "Gap boshlanishlarini **xilma-xil** qiling: vaqt, joy, bog'lovchi, nutq." },
    { k: "tf", q: "Vivid writing shows feelings with actions and details.", a: true, why: "*Her hands were shaking* — «u qo'rqdi» dan jonliroq." },
    { k: "speak", say: "It was a cold evening, and Karim was waiting at the station.", uz: "Sovuq kech edi va Karim bekatda kutib turardi." },
  ],
  quiz: [
    { k: "choice", q: "The person who tells the story is the ___.", opts: ["narrator", "plot", "setting", "draft"], a: 0, why: "Hikoyachi — **narrator**." },
    { k: "choice", q: "Which is the best ending?", opts: ["In the end, he got home with a new friend.", "The end of the story is finished.", "He is a man.", "Then then then."], a: 0, why: "Yaxshi yakun natija yoki his-tuyg'u beradi." },
    { k: "choice", q: "\"Where are you?\" ___ Sam.", opts: ["asked", "was asked", "ask", "asking"], a: 0, why: "O'tgan zamon nutq fe'li: **asked**; savol belgisidan keyin ham kichik harf bilan yoziladi." },
    { k: "fill", q: "\"Come here!\" he ___. (shout, past)", a: ["shouted"], why: "O'tgan zamon: **shouted**." },
    { k: "fill", q: "I was sleeping when ___ the phone rang. (to'satdan)", a: ["suddenly"], why: "To'satdan → **suddenly**." },
    { k: "fix", wrong: "\"I'm tired\" said he.", a: ["\"I'm tired,\" he said."], hint: "Olmosh bilan nutq", why: "Olmosh bilan: **he said** (said he emas); vergul tirnoq ichida." },
    { k: "listen", say: "Her hands were shaking.", opts: ["Her hands were shaking.", "Her hands are shaking.", "Her hands were shaken.", "His hands were shaking."], a: 0, why: "Eshitilgan gap: *Her hands were shaking.*" },
    { k: "tf", q: "A good story needs a beginning, a middle and an ending.", a: true, why: "Hikoya uch qismdan iborat." },
    { k: "order", uz: "Birinchi qoralamani kecha yozdim.", words: ["I", "wrote", "the", "first", "draft", "yesterday."], extra: ["written", "edit"], why: "Past Simple: **wrote**." },
    { k: "translate", uz: "Qahramonlar juda qiziqarli.", a: ["The characters are very interesting.", "The characters are really interesting."], why: "**characters** — qahramonlar (ko'plik)." },
  ],
  summary: [
    "Hikoya uch qismdan iborat: **beginning** (joy, vaqt, qahramonlar), **middle** (muammo, voqealar), **ending** (yechim, his-tuyg'u). Yozishdan oldin **reja** tuzing.",
    "**Jonli yozing**: «u qo'rqdi» o'rniga aniq harakat va tasvir bering (*her hands were shaking*). Aniq fe'l ko'p sifatdan yaxshi.",
    "**To'g'ridan-to'g'ri nutq**: *\"I'm tired,\" said Tom.* Vergul tirnoq ichida, fe'l kichik harfda; olmosh bilan *he said*.",
    "Zamonlar: asosiy voqealar **Past Simple**, fon **Past Continuous**, oldingi voqea **Past Perfect**. Bog'lovchilar: *at first, suddenly, meanwhile, in the end.*",
    "Yozib bo'lgach **draft** ni o'qing va **edit** qiling: zamonlar, tinish belgilari, gap boshlanishlari.",
  ],
  homework: "Reja tuzing: boshi, o'rtasi, oxiri uchun bittadan gap. Keyin 8-10 gapli hikoya yozing. Unda kamida bitta nutq (*\"…,\" said …*), 3 ta bog'lovchi va bitta Past Perfect gapi bo'lsin. Yozgach, darsdagi tekshiruv ro'yxati bo'yicha o'zingiz tahrir qiling.",
};

export default lesson;
