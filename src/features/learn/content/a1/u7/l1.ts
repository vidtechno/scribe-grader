import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u7-l1",
  title: "Jobs & workplaces",
  titleUz: "Kasblar va ish joylari",
  goal: "Kasb haqida so'raysiz va javob berasiz: **What do you do? — I'm a chef. I work in a restaurant.** Kasblar nomini, ish joylari bilan **in / at / on / for** predloglarini to'g'ri ishlatasiz va ishingiz haqida 4–5 gap aytib berasiz.",
  slides: [
    {
      title: "What do you do? — Kasbingiz nima?",
      blocks: [
        { t: "p", md: "Beginner darsida *She's a doctor. He's an engineer.* kabi gaplarni o'rgandik. Endi kasb haqida **so'rashni** va **batafsil gapirishni** o'rganamiz. Inglizlar kasbni ko'pincha shunday so'rashadi:" },
        {
          t: "examples", items: [
            { en: "What do you do?", uz: "Kasbingiz nima? / Nima ish qilasiz?", note: "Eng tabiiy savol." },
            { en: "What's your job?", uz: "Ishingiz nima?", note: "Bu ham to'g'ri, biroz to'g'ridan-to'g'ri." },
            { en: "What does your sister do?", uz: "Opangiz nima ish qiladi?" },
            { en: "I'm a nurse. I work in a hospital.", uz: "Men hamshiraman. Kasalxonada ishlayman." },
            { en: "She's a chef. She works in a hotel.", uz: "U oshpaz. Mehmonxonada ishlaydi." },
          ],
        },
        { t: "tip", tone: "warn", md: "**What do you do?** (Present Simple) = *kasbingiz nima?* \n**What are you doing?** (Present Continuous) = *hozir nima qilyapsiz?* \nAgar kimdir *What do you do?* desa, *I'm reading a book* deb javob bermang — u sizning **kasbingizni** so'rayapti!" },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I'm a teacher.", "She's an engineer.", "My father is a driver.", "They're waiters."] },
          bad: { title: "Xato", items: ["I'm teacher.", "She's engineer.", "My father is driver.", "They're a waiters."] },
        },
        { t: "tip", tone: "info", md: "O'zbekchada *Men o'qituvchiman* — artikl yo'q. Ingliz tilida esa birlikdagi kasb oldida **a / an** **shart**: *I'm **a** teacher.* Unli tovush oldida **an**: *an engineer, an actor, an artist*. Ko'plikda artikl yo'q: *They're teachers.*" },
        { t: "check", ex: { k: "choice", q: "Do'stingiz so'radi: **What do you do?** Qaysi javob to'g'ri?", opts: ["I'm watching TV.", "I'm a mechanic.", "I'm mechanic.", "I do a mechanic."], a: 1, why: "Savol kasb haqida → **I'm a mechanic.** Kasb oldida **a** kerak; *I'm watching TV* — hozir nima qilayotganingiz." } },
      ],
    },
    {
      title: "Kasblar: -er, -or, -ist, -ian",
      blocks: [
        { t: "p", md: "Ko'p kasb nomlari fe'l yoki otdan **qo'shimcha** bilan yasaladi. Qo'shimchani bilsangiz, yangi so'zni tez tushunasiz:" },
        {
          t: "table", head: ["Qo'shimcha", "Kasb", "Nimadan", "Ma'nosi"],
          rows: [
            ["-er", "teacher, driver, farmer, waiter", "teach, drive, farm, wait", "o'qituvchi, haydovchi, fermer, ofitsiant"],
            ["-or", "actor, doctor, director", "act, direct", "aktyor, shifokor, direktor"],
            ["-ist", "receptionist, artist, dentist", "reception, art, dental (tishga oid)", "administrator, rassom, tish shifokori"],
            ["-ian", "musician, electrician", "music, electric", "musiqachi, elektrik"],
            ["boshqa", "chef, pilot, mechanic, nurse", "—", "oshpaz, uchuvchi, mexanik, hamshira"],
          ],
          speak: [1],
        },
        { t: "tip", tone: "info", md: "**waiter** — erkak ofitsiant, **waitress** — ayol ofitsiant. Hozir ko'pincha ikkalasiga ham **server** yoki **waiter** deyishadi. **shop assistant** — do'kondagi sotuvchi (bozordagi sotuvchi esa — *seller*)." },
        {
          t: "sounds", items: [
            { label: "chef", say: "chef", uz: "**\"shef\"** — *ch* bu yerda **\"sh\"** o'qiladi (fransuzcha so'z). ❌ \"chef\" emas.", examples: ["chef", "a good chef"] },
            { label: "mechanic", say: "mechanic", uz: "**\"mi-KÆ-nik\"** — urg'u ikkinchi bo'g'inda, *ch* = **\"k\"**.", examples: ["mechanic", "a car mechanic"] },
            { label: "receptionist", say: "receptionist", uz: "**\"ri-SEP-shə-nist\"** — urg'u **SEP** da; *-tion* = **\"shən\"**.", examples: ["receptionist", "reception"] },
            { label: "engineer", say: "engineer", uz: "**\"en-ji-NIə\"** — urg'u **oxirgi** bo'g'inda.", examples: ["engineer", "an engineer"] },
          ],
        },
        { t: "check", ex: { k: "listen", say: "She's a chef.", opts: ["She's a chef.", "She's a chief.", "She's a shop."], a: 0, why: "\"shef\" — **chef** (oshpaz)." } },
      ],
    },
    {
      title: "Qayerda ishlaydi? in / at / on / for",
      blocks: [
        { t: "p", md: "Ish joyini aytganda **work + predlog + joy** ishlatiladi. Ko'pchilik binolar bilan — **in**, ba'zi joylar bilan — **at** yoki **on**, kompaniya bilan — **for**:" },
        {
          t: "table", head: ["Predlog", "Joy", "Misol"],
          rows: [
            ["in", "an office, a hospital, a factory, a shop, a restaurant, a hotel", "She works in a hotel."],
            ["at", "a school, a bank, the airport, home", "He works at the airport."],
            ["on", "a farm, a building site", "My uncle works on a farm."],
            ["for", "kompaniya / tashkilot nomi", "I work for a big IT company."],
            ["as", "kasb (\"sifatida\")", "She works as a receptionist."],
          ],
          speak: [2],
        },
        { t: "tip", tone: "info", md: "**at a school / in a school**, **at a bank / in a bank** — ikkalasi ham ishlatiladi. Lekin **on a farm** — doim **on**! Uyda ishlasangiz: **I work at home** yoki **I work from home** (masofadan)." },
        { t: "tip", tone: "warn", md: "**work as + kasb** = \"... bo'lib ishlayman\": *I work **as** a waiter.* ❌ *I work like a waiter* — bu \"ofitsiantga o'xshab ishlayman\" degan ma'noni beradi!" },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["He works on a farm.", "I work for a bank.", "She works as a nurse.", "We work in a factory."] },
          bad: { title: "Xato", items: ["He works in a farm.", "I work in for a bank.", "She works like a nurse.", "We work a factory."] },
        },
        { t: "check", ex: { k: "fill", q: "My grandfather works ___ a farm near Andijan.", a: ["on"], uz: "Bobom Andijon yaqinidagi fermada ishlaydi.", why: "**farm** bilan doim **on**: *on a farm*." } },
        { t: "check", ex: { k: "fill", q: "Dilshod works ___ a mechanic.", a: ["as"], uz: "Dilshod mexanik bo'lib ishlaydi.", why: "Kasb bilan **work as**: *works as a mechanic*." } },
      ],
    },
    {
      title: "Ishim haqida gapiraman",
      blocks: [
        { t: "p", md: "Kasbni aytish — boshlanishi xolos. Suhbatda ish haqida yana nimalar deyiladi? Bu iboralarni yodlang:" },
        {
          t: "examples", items: [
            { en: "I work from nine to six.", uz: "Soat to'qqizdan oltigacha ishlayman." },
            { en: "I work at weekends.", uz: "Dam olish kunlari ishlayman." },
            { en: "I wear a uniform.", uz: "Forma kiyaman." },
            { en: "I earn good money.", uz: "Yaxshi pul topaman (maoshim yaxshi)." },
            { en: "I help people / I cook / I fix cars.", uz: "Odamlarga yordam beraman / ovqat pishiraman / mashina tuzataman." },
            { en: "I love my job. It's interesting.", uz: "Ishimni yaxshi ko'raman. U qiziqarli." },
            { en: "It's hard work, but I like it.", uz: "Og'ir ish, lekin menga yoqadi." },
          ],
        },
        { t: "tip", tone: "warn", md: "**he / she** bilan fe'lga **-s** qo'shishni unutmang: *She work**s** in a shop. He wear**s** a uniform. My mum earn**s** good money.* Savolda — **does**: *Where **does** he work?* (❌ *Where does he works?*)" },
        { t: "tip", tone: "info", md: "**job** — sanaladigan ot: *a job, two jobs*. **work** — odatda sanalmaydi: *I have a lot of work.* ❌ *a work*. *I go to work* — ishga boraman (**the** yo'q!)." },
        { t: "check", ex: { k: "choice", q: "To'g'ri gapni tanlang:", opts: ["Where does your brother works?", "Where your brother works?", "Where does your brother work?", "Where do your brother work?"], a: 2, why: "**does** bor bo'lsa, fe'l **-s** siz: *Where does your brother **work**?*" } },
        { t: "check", ex: { k: "choice", q: "\"Menga yangi ish kerak.\"", opts: ["I need a new work.", "I need a new job.", "I need new job.", "I need a new jobs."], a: 1, why: "**job** sanaladi → **a new job**. *work* bilan *a* ishlatilmaydi." } },
      ],
    },
    {
      title: "O'qing: Bir oila — to'rt kasb",
      blocks: [
        { t: "p", md: "Matnni eshiting va o'qing. Har bir odam qayerda ishlashini toping." },
        {
          t: "text", title: "The Karimovs at work",
          en: "My name is Nodira and I'm a receptionist. I work in a big hotel in the centre of Tashkent. I start at eight and I wear a uniform. I speak English with the guests every day.\nMy husband, Sardor, is a pilot. He works for an airline and he often flies to Istanbul and Dubai. He earns good money, but he isn't at home very often.\nMy brother Jamshid is a mechanic. He fixes cars in a small garage near our house.\nAnd my sister? She's a chef in an Uzbek restaurant. She works in the evenings and at weekends. Her plov is the best in the city!",
          uz: "Mening ismim Nodira, men administratorman (qabulxona xodimiman). Toshkent markazidagi katta mehmonxonada ishlayman. Sakkizda boshlayman va forma kiyaman. Har kuni mehmonlar bilan inglizcha gaplashaman.\nErim Sardor — uchuvchi. U aviakompaniyada ishlaydi va tez-tez Istanbul va Dubayga uchadi. Yaxshi pul topadi, lekin uyda ko'p bo'lmaydi.\nAkam Jamshid — mexanik. U uyimiz yaqinidagi kichik ustaxonada mashinalarni tuzatadi.\nSinglimchi? U o'zbek restoranida oshpaz. Kechqurunlari va dam olish kunlari ishlaydi. Uning palovi shahardagi eng zo'ri!",
        },
        { t: "check", ex: { k: "tf", q: "Sardor works in a hotel.", a: false, why: "Mehmonxonada **Nodira** ishlaydi. Sardor — uchuvchi, **works for an airline**." } },
        { t: "check", ex: { k: "choice", q: "Who works at weekends?", opts: ["Nodira", "Sardor", "Jamshid", "Nodira's sister"], a: 3, why: "*She works in the evenings and **at weekends**.* — opa-singlisi, oshpaz." } },
      ],
    },
    {
      title: "Dialog: To'yda tanishuv",
      blocks: [
        { t: "p", md: "Aziz to'yda Londondan kelgan Emma bilan tanishdi. Kasb haqidagi suhbatga e'tibor bering:" },
        {
          t: "dialog", lines: [
            { who: "Aziz", en: "So, Emma, what do you do?", uz: "Xo'sh, Emma, nima ish qilasiz?" },
            { who: "Emma", en: "I'm a teacher. I teach English at a school in London. And you?", uz: "Men o'qituvchiman. Londondagi maktabda ingliz tilidan dars beraman. Sizchi?" },
            { who: "Aziz", en: "I'm an engineer. I work for a car company in Asaka.", uz: "Men muhandisman. Asakadagi avtomobil kompaniyasida ishlayman." },
            { who: "Emma", en: "Oh, interesting! Do you like your job?", uz: "Qiziq! Ishingiz sizga yoqadimi?" },
            { who: "Aziz", en: "Yes, I do. It's hard work, but the people are great.", uz: "Ha. Og'ir ish, lekin odamlar ajoyib." },
            { who: "Emma", en: "And what does your wife do?", uz: "Rafiqangiz nima ish qiladi?" },
            { who: "Aziz", en: "She's a dentist. She works in a clinic in the city centre.", uz: "U tish shifokori. Shahar markazidagi klinikada ishlaydi." },
          ],
        },
        { t: "tip", tone: "good", md: "Suhbatni davom ettirish uchun savolni qaytaring: **And you?** / **What about you?** Va qiziqish bildiring: **Oh, interesting! Do you like it?**" },
        { t: "check", ex: { k: "tf", q: "Aziz's wife works in a clinic.", a: true, why: "*She's a dentist. She works **in a clinic**.*" } },
      ],
    },
  ],
  words: [
    { en: "job", uz: "ish, kasb", ipa: "dʒɒb", pos: "noun", ex: "I love my new job.", exUz: "Yangi ishimni yaxshi ko'raman." },
    { en: "chef", uz: "oshpaz (restoranda)", ipa: "ʃef", pos: "noun", ex: "My sister is a chef in a restaurant.", exUz: "Singlim restoranda oshpaz." },
    { en: "waiter", uz: "ofitsiant", ipa: "ˈweɪ.tə", pos: "noun", ex: "The waiter brings us the menu.", exUz: "Ofitsiant bizga menyuni olib keladi." },
    { en: "shop assistant", uz: "do'kon sotuvchisi", ipa: "ˈʃɒp əˌsɪs.tənt", pos: "noun", ex: "She works as a shop assistant.", exUz: "U do'konda sotuvchi bo'lib ishlaydi." },
    { en: "receptionist", uz: "administrator, qabulxona xodimi", ipa: "rɪˈsep.ʃən.ɪst", pos: "noun", ex: "The receptionist speaks English.", exUz: "Administrator inglizcha gapiradi." },
    { en: "mechanic", uz: "mexanik, avtousta", ipa: "mɪˈkæn.ɪk", pos: "noun", ex: "The mechanic fixes my car.", exUz: "Mexanik mashinamni tuzatadi." },
    { en: "pilot", uz: "uchuvchi", ipa: "ˈpaɪ.lət", pos: "noun", ex: "He's a pilot and he flies to Dubai.", exUz: "U uchuvchi, Dubayga uchadi." },
    { en: "factory", uz: "zavod, fabrika", ipa: "ˈfæk.tər.i", pos: "noun", ex: "My uncle works in a factory.", exUz: "Amakim zavodda ishlaydi." },
    { en: "uniform", uz: "forma, maxsus kiyim", ipa: "ˈjuː.nɪ.fɔːm", pos: "noun", ex: "Nurses wear a uniform.", exUz: "Hamshiralar forma kiyishadi." },
    { en: "earn", uz: "pul topmoq, ishlab topmoq", ipa: "ɜːn", pos: "verb", ex: "She earns good money.", exUz: "U yaxshi pul topadi." },
  ],
  practice: [
    { k: "match", pairs: [["chef", "oshpaz"], ["pilot", "uchuvchi"], ["waiter", "ofitsiant"], ["mechanic", "mexanik"], ["receptionist", "administrator"]] },
    { k: "match", pairs: [["on a farm", "fermada"], ["in a factory", "zavodda"], ["at the airport", "aeroportda"], ["as a nurse", "hamshira bo'lib"], ["from home", "uydan (masofadan)"]] },
    { k: "listen", say: "receptionist", opts: ["reception", "receptionist", "recipe"], a: 1, why: "\"ri-SEP-shə-nist\" — **receptionist** (odam). *reception* — joy (qabulxona)." },
    { k: "listen", say: "He works on a farm.", opts: ["He works on a farm.", "He works in a firm.", "He walks on a farm."], a: 0 },
    { k: "choice", q: "\"U muhandis.\" (he)", opts: ["He's engineer.", "He's a engineer.", "He's an engineer.", "He an engineer."], a: 2, why: "*engineer* unli tovush bilan boshlanadi → **an engineer**." },
    { k: "choice", q: "**What does your mother do?** — eng yaxshi javob:", opts: ["She's cooking dinner.", "She's a nurse.", "She does a nurse.", "Yes, she does."], a: 1, why: "*What does … do?* — kasb haqida savol: **She's a nurse.**" },
    { k: "fill", q: "My cousin works ___ a big hotel in Samarkand.", a: ["in"], uz: "Amakivachcham Samarqanddagi katta mehmonxonada ishlaydi.", why: "Bino ichida → **in a hotel**." },
    { k: "fill", q: "Where ___ your father work?", a: ["does"], uz: "Otangiz qayerda ishlaydi?", why: "*your father* = **he** → **does**." },
    { k: "fill", q: "Pilots ___ a lot of money.", a: ["earn", "make"], uz: "Uchuvchilar ko'p pul topishadi.", why: "**earn money** — pul topmoq. *Pilots* = they → -s siz." },
    { k: "tf", q: "**I work like a waiter.** = \"Men ofitsiant bo'lib ishlayman.\"", a: false, why: "Kasb bilan **as**: *I work **as** a waiter.* **like** = \"... ga o'xshab\"." },
    { k: "tf", q: "**What do you do?** savoli kasbni so'raydi.", a: true, why: "Ha. Hozirgi harakatni so'rash uchun — *What are you doing?*" },
    { k: "order", uz: "Opam do'konda sotuvchi bo'lib ishlaydi.", words: ["My", "sister", "works", "as", "a", "shop", "assistant"], extra: ["like", "work"] },
    { k: "order", uz: "U qayerda ishlaydi?", words: ["Where", "does", "he", "work?"], extra: ["works?", "is"] },
    { k: "translate", uz: "Men oshpazman. Restoranda ishlayman.", a: ["I'm a chef. I work in a restaurant.", "I'm a chef and I work in a restaurant.", "I'm a chef. I work at a restaurant.", "I'm a chef and I work at a restaurant.", "I'm a cook. I work in a restaurant.", "I'm a cook and I work in a restaurant.", "I'm a cook. I work at a restaurant.", "I'm a cook and I work at a restaurant.", "I am a chef. I work in a restaurant.", "I am a chef and I work in a restaurant.", "I am a chef. I work at a restaurant.", "I am a chef and I work at a restaurant.", "I am a cook. I work in a restaurant.", "I am a cook and I work in a restaurant.", "I am a cook. I work at a restaurant.", "I am a cook and I work at a restaurant."], why: "Kasb oldida **a**: *a chef*; bino → **in a restaurant**." },
    { k: "translate", uz: "U (she) forma kiyadi.", a: ["She wears a uniform.", "She is wearing a uniform."], why: "**she** → fe'l + **s**: *wears*." },
    { k: "speak", say: "I'm an engineer. I work for a car company.", uz: "Men muhandisman. Avtomobil kompaniyasida ishlayman." },
  ],
  quiz: [
    { k: "choice", q: "To'g'ri gapni tanlang:", opts: ["My brother is mechanic.", "My brother is a mechanic.", "My brother is an mechanic.", "My brother a mechanic."], a: 1, why: "Birlikdagi kasb oldida **a**." },
    { k: "choice", q: "\"Bobom fermada ishlaydi.\"", opts: ["My grandfather works in a farm.", "My grandfather work on a farm.", "My grandfather works on a farm.", "My grandfather works at farm."], a: 2, why: "**on a farm** va **works** (he → -s)." },
    { k: "listen", say: "She's a shop assistant.", opts: ["She's a shop assistant.", "She's a shop at the station.", "She's at the shop."], a: 0 },
    { k: "fill", q: "I work ___ a waiter in a café.", a: ["as"], uz: "Kafeda ofitsiant bo'lib ishlayman.", why: "**work as** + kasb." },
    { k: "fill", q: "My uncle works in a car ___. They make cars there.", a: ["factory"], uz: "Amakim avtomobil zavodida ishlaydi. U yerda mashina yasashadi.", why: "Mashina yasaladigan joy — **factory**." },
    { k: "choice", q: "Kim **mashinalarni tuzatadi**?", opts: ["a pilot", "a chef", "a mechanic", "a receptionist"], a: 2, why: "**mechanic** — mexanik, avtousta." },
    { k: "tf", q: "**I need a new work.** — to'g'ri gap.", a: false, why: "**work** sanalmaydi: *I need a new **job**.*" },
    { k: "order", uz: "Akangiz nima ish qiladi?", words: ["What", "does", "your", "brother", "do?"], extra: ["doing?", "is"] },
    { k: "translate", uz: "U (he) aviakompaniyada ishlaydi.", a: ["He works for an airline.", "He works at an airline.", "He works for an airline company.", "He works for an aviation company."], why: "Kompaniya bilan odatda **for**: *works for an airline*." },
    { k: "choice", q: "Matnda (The Karimovs at work) **Nodira** kim?", opts: ["a chef", "a receptionist", "a pilot", "a teacher"], a: 1, why: "*I'm a receptionist. I work in a big hotel.*" },
  ],
  summary: [
    "Kasb haqida savol: **What do you do? / What does she do?** — *What are you doing?* emas!",
    "Birlikdagi kasb oldida **a / an** shart: *I'm **a** chef, she's **an** engineer.*",
    "Ish joyi: **in** an office / a hospital / a factory, **at** the airport / a school, **on** a farm, **for** + kompaniya, **as** + kasb.",
    "**job** sanaladi (*a new job*), **work** sanalmaydi (*a lot of work*, *go to work*).",
    "**he / she** bilan **-s**: *She works, he earns, he wears a uniform*; savolda — **does … work?**",
  ],
  homework: "Oilangizdagi yoki do'stlaringizdan 4 kishining kasbi haqida yozing: kim, qayerda ishlaydi (in / at / on / for), nima qiladi va ishi yoqadimi (*My aunt is a nurse. She works in a hospital. She helps people…*). Keyin o'zingiz haqingizda 5 gap tayyorlab, ovoz chiqarib ayting — xuddi notanish odamga *What do you do?* savoliga javob berayotgandek.",
};

export default lesson;
