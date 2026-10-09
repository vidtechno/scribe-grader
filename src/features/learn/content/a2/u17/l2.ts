import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u17-l2",
  title: "Jobs and interviews",
  titleUz: "Kasblar va ish suhbati",
  goal: "Kasblar nomini artikl bilan to'g'ri aytasiz (**I'm an engineer**), **work as / for / in** farqini bilasiz, **I've worked here for five years** kabi tajribangiz haqida gapirasiz va ish suhbatida **o'zingizni tanishtirish, kuchli tomonlaringizni aytish** hamda oddiy savollarga javob berishni o'rganasiz.",
  slides: [
    {
      title: "Kasblar va a / an",
      blocks: [
        { t: "p", md: "O'zbek tilida \"Men o'qituvchiman\" deymiz. Inglizchada kasb nomi oldidan **a / an** kerak: *I'm **a** teacher.* Unli tovushdan boshlansa — **an**: *an engineer, an accountant, an electrician*." },
        {
          t: "table", head: ["Kasb", "O'zbekcha", "Misol"], speak: [0, 2],
          rows: [
            ["accountant", "buxgalter", "She's an accountant."],
            ["engineer", "muhandis", "My brother is an engineer."],
            ["nurse", "hamshira", "Laylo is a nurse."],
            ["waiter / waitress", "ofitsiant", "He's a waiter in a chaikhana."],
            ["driver", "haydovchi", "My uncle is a taxi driver."],
            ["receptionist", "resepshnist", "She's a receptionist at a hotel."],
            ["mechanic", "mexanik, usta", "He's a car mechanic."],
            ["IT specialist", "IT mutaxassisi", "Aziz is an IT specialist."],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I'm a teacher.", "She's an engineer.", "He's a doctor."] },
          bad: { title: "Xato", items: ["I'm teacher.", "She's engineer.", "He's doctor."] },
        },
        { t: "tip", tone: "warn", md: "Bu A1 dan beri eng ko'p uchraydigan xato: kasbdan oldin **a / an** tushib qoladi, chunki o'zbekchada artikl yo'q. Ko'plikda esa artikl kerak emas: *They are teachers.*" },
        { t: "check", ex: { k: "choice", q: "My mother is ___ accountant.", opts: ["a", "an", "the", "-"], a: 1, why: "*accountant* unli tovushdan boshlanadi → **an**." } },
      ],
    },
    {
      title: "Qayerda va qanday ishlaysiz?",
      blocks: [
        { t: "p", md: "Ish haqida so'rash va javob berishning asosiy iboralari:" },
        {
          t: "table", head: ["Savol", "Javob"], speak: [0, 1],
          rows: [
            ["What do you do?", "I'm a nurse. / I work as a nurse."],
            ["Where do you work?", "I work in a hospital. / I work at a school."],
            ["Who do you work for?", "I work for a big bank."],
            ["Do you like your job?", "Yes, I love it. / It's OK."],
          ],
        },
        { t: "tip", tone: "info", md: "**as** — lavozim: *I work **as** a driver.*\n**for** — kompaniya yoki xo'jayin: *I work **for** a travel agency.*\n**in** — joy yoki soha: *I work **in** a hospital / **in** sales.*\n**at** — aniq joy: *I work **at** a school.*" },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I work as a driver.", "I work for a travel agency.", "I've worked here for three years."] },
          bad: { title: "Xato", items: ["I work like a driver.", "I work as driver.", "I am working here since 2021."] },
        },
        { t: "tip", tone: "warn", md: "**What do you do?** = \"Kasbingiz nima?\" (doimiy), **What are you doing?** = \"Hozir nima qilyapsiz?\". Ularni adashtirmang." },
        { t: "check", ex: { k: "choice", q: "I work ___ a receptionist.", opts: ["as", "like", "for", "in"], a: 0, why: "Lavozim → **as**." } },
      ],
    },
    {
      title: "Tajriba: nechchi yildan beri?",
      blocks: [
        { t: "p", md: "Ish suhbatida eng ko'p so'raladigan narsa — tajriba. Hozir ham davom etayotgan ish uchun **Present Perfect + for / since** ishlatamiz. Tugagan ish uchun esa **Past Simple**." },
        {
          t: "examples", items: [
            { en: "I've worked as a nurse for six years.", uz: "Olti yildan beri hamshira bo'lib ishlayman.", note: "Hozir ham ishlayman." },
            { en: "She's been a manager since 2020.", uz: "U 2020-yildan beri menejer.", note: "**since** + boshlanish nuqtasi." },
            { en: "I worked as a waiter for two years.", uz: "Ikki yil ofitsiant bo'lib ishlaganman.", note: "Tugagan — hozir boshqa joyda." },
            { en: "Last year I worked for a travel agency.", uz: "O'tgan yili sayohat agentligida ishlaganman." },
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I've worked here for two years.", "I've worked here since 2023.", "I have been a teacher since 2019."] },
          bad: { title: "Xato", items: ["I work here since two years.", "I am working here since 2023.", "I'm a teacher since 2019."] },
        },
        { t: "tip", tone: "warn", md: "O'zbekchada \"besh yildan beri ishlayman\" deymiz (hozirgi zamon), shuning uchun *I work here for five years* deb xato qilinadi. Inglizchada davom etayotgan va hozirgacha cho'zilgan ish uchun **have / has + V3** kerak." },
        { t: "check", ex: { k: "fill", q: "She has been a teacher ___ 2018.", a: ["since"], why: "2018 — boshlanish nuqtasi → **since**." } },
        { t: "check", ex: { k: "fill", q: "We have worked here ___ four years.", a: ["for"], why: "four years — davomiylik → **for**." } },
      ],
    },
    {
      title: "Kuchli tomonlar: I'm good at…",
      blocks: [
        { t: "p", md: "Suhbatda \"Sizning kuchli tomonlaringiz nima?\" (*What are your strengths?*) deb so'rashadi. Javob uchun foydali qoliplar:" },
        {
          t: "table", head: ["Qolip", "Misol"], speak: [1],
          rows: [
            ["I'm + sifat", "I'm hard-working and reliable."],
            ["I'm good at + -ing / ot", "I'm good at solving problems."],
            ["I can + V1", "I can speak three languages."],
            ["I have experience in / of…", "I have experience in customer service."],
            ["I learn quickly.", "Men tez o'rganaman."],
          ],
        },
        {
          t: "examples", items: [
            { en: "I'm hard-working.", uz: "Men tirishqoqman." },
            { en: "I'm friendly and I like working in a team.", uz: "Men xushmuomalaman va jamoada ishlashni yoqtiraman.", note: "**like** + -ing" },
            { en: "I'm good at talking to people.", uz: "Odamlar bilan gaplashishda kuchliman." },
          ],
        },
        { t: "tip", tone: "info", md: "**good at** dan keyin fe'l bo'lsa — **-ing**: *good at **cooking***, hech qachon *good at cook* emas. Shuningdek: *good **with** children* (bolalar bilan yaxshi muomala qiladi), *good **at** maths*." },
        { t: "check", ex: { k: "choice", q: "I'm good ___ with customers.", opts: ["at work", "at working", "in working", "at to work"], a: 1, why: "**good at** + -ing." } },
      ],
    },
    {
      title: "Dialog: ish suhbati",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Manager", en: "Good morning, Aziz. Please sit down. Tell me about yourself.", uz: "Xayrli tong, Aziz. O'tiring. O'zingiz haqingizda gapirib bering." },
            { who: "Aziz", en: "Thank you. I'm 26 and I live in Tashkent. I'm an IT specialist. I've worked for a software company for three years.", uz: "Rahmat. Men 26 yoshdaman, Toshkentda yashayman. IT mutaxassisiman. Uch yildan beri dasturiy ta'minot kompaniyasida ishlayman." },
            { who: "Manager", en: "Why do you want to work here?", uz: "Nega aynan bu yerda ishlamoqchisiz?" },
            { who: "Aziz", en: "I'd like to learn new things, and your company has interesting projects.", uz: "Yangi narsalar o'rganmoqchiman, sizning kompaniyangizda esa qiziqarli loyihalar bor." },
            { who: "Manager", en: "What are your strengths?", uz: "Kuchli tomonlaringiz qanday?" },
            { who: "Aziz", en: "I'm reliable, and I'm good at solving problems. I also work well in a team.", uz: "Men ishonchliman va muammolarni yechishda kuchliman. Jamoada ham yaxshi ishlayman." },
            { who: "Manager", en: "Great. Can you start next month?", uz: "Zo'r. Kelasi oy boshlay olasizmi?" },
            { who: "Aziz", en: "Yes, I can. Thank you very much for your time.", uz: "Ha, boshlay olaman. Vaqt ajratganingiz uchun katta rahmat." },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Aziz has worked for the software company for three years.", a: true, why: "*I've worked for a software company for three years.*" } },
        { t: "check", ex: { k: "choice", q: "Which is one of Aziz's strengths?", opts: ["He is good at solving problems.", "He is good at cooking.", "He speaks five languages.", "He likes working alone."], a: 0, why: "*I'm reliable, and I'm good at solving problems.*" } },
      ],
    },
    {
      title: "O'qing: Dilnozaning yangi ishi",
      blocks: [
        {
          t: "text", title: "Dilnoza's new job",
          en: "Dilnoza is 24. She studied tourism at university in Samarkand. Last year she worked as a guide for a small travel agency, but she wanted more experience. She applied for a job at a big hotel in Bukhara, and last week she had an interview.\nThe manager asked her, \"Why do you want this job?\" Dilnoza answered, \"I love meeting people from other countries, and I'm good at speaking English.\" The manager liked her answers. This week she is working at the hotel reception as a trainee.\nShe isn't earning much yet, but she is happy. \"I'd like to become a manager one day,\" she says.",
          uz: "Dilnoza 24 yoshda. U Samarqanddagi universitetda turizm bo'yicha o'qigan. O'tgan yili kichik sayohat agentligida gid bo'lib ishlagan, lekin ko'proq tajriba olmoqchi edi. U Buxorodagi katta mehmonxonaga ishga murojaat qildi va o'tgan hafta suhbatdan o'tdi.\nMenejer undan so'radi: \"Nega bu ishni xohlaysiz?\" Dilnoza javob berdi: \"Boshqa mamlakatlardan kelgan odamlar bilan uchrashishni yaxshi ko'raman va inglizcha gapirishda kuchliman.\" Menejerga javoblari yoqdi. Shu hafta u mehmonxona qabulxonasida stajyor bo'lib ishlayapti.\nU hali ko'p pul topmayapti, lekin xursand. \"Bir kun menejer bo'lishni xohlayman,\" deydi u.",
        },
        { t: "check", ex: { k: "tf", q: "Dilnoza had the interview two years ago.", a: false, why: "*Last week she had an interview.*" } },
        { t: "check", ex: { k: "choice", q: "What does Dilnoza do now?", opts: ["She is a guide.", "She is a trainee at a hotel reception.", "She is a manager.", "She is a student."], a: 1, why: "*This week she is working at the hotel reception as a trainee.*" } },
      ],
    },
  ],
  words: [
    { en: "apply", uz: "ishga murojaat qilmoq", ipa: "əˈplaɪ", pos: "verb", ex: "I want to apply for this job.", exUz: "Bu ishga murojaat qilmoqchiman." },
    { en: "interview", uz: "ish suhbati", ipa: "ˈɪntəvjuː", pos: "noun", ex: "I have an interview on Monday.", exUz: "Dushanba kuni suhbatim bor." },
    { en: "experience", uz: "tajriba", ipa: "ɪkˈspɪəriəns", pos: "noun", ex: "Do you have any experience?", exUz: "Tajribangiz bormi?" },
    { en: "salary", uz: "oylik maosh", ipa: "ˈsæləri", pos: "noun", ex: "The salary is 8 million so'm a month.", exUz: "Maosh oyiga 8 million so'm." },
    { en: "colleague", uz: "hamkasb", ipa: "ˈkɒliːɡ", pos: "noun", ex: "My colleagues are very friendly.", exUz: "Hamkasblarim juda xushmuomala." },
    { en: "manager", uz: "menejer, boshliq", ipa: "ˈmænɪdʒə", pos: "noun", ex: "The manager is in a meeting.", exUz: "Menejer yig'ilishda." },
    { en: "skill", uz: "ko'nikma", ipa: "skɪl", pos: "noun", ex: "Communication is an important skill.", exUz: "Muloqot — muhim ko'nikma." },
    { en: "part-time", uz: "yarim kunlik", ipa: "ˌpɑːt ˈtaɪm", pos: "adjective", ex: "She has a part-time job in a café.", exUz: "U kafeda yarim kunlik ishlaydi." },
    { en: "full-time", uz: "to'liq kunlik", ipa: "ˌfʊl ˈtaɪm", pos: "adjective", ex: "He works full-time as a driver.", exUz: "U haydovchi bo'lib to'liq kun ishlaydi." },
    { en: "reliable", uz: "ishonchli", ipa: "rɪˈlaɪəbl", pos: "adjective", ex: "She's a reliable worker.", exUz: "U ishonchli xodim." },
  ],
  practice: [
    { k: "match", pairs: [["accountant", "buxgalter"], ["nurse", "hamshira"], ["engineer", "muhandis"], ["waiter", "ofitsiant"], ["driver", "haydovchi"]] },
    { k: "listen", say: "I've worked as a nurse for six years.", opts: ["I work as a nurse for six years.", "I've worked as a nurse for six years.", "I worked as a nurse six years ago."], a: 1 },
    { k: "listen", say: "What do you do?", opts: ["What do you do?", "What are you doing?", "Where do you work?"], a: 0 },
    { k: "choice", q: "She's ___ engineer.", opts: ["a", "an", "the", "-"], a: 1, why: "*engineer* → unli → **an**." },
    { k: "choice", q: "I work ___ a driver for a taxi company.", opts: ["like", "as", "in", "by"], a: 1, why: "Lavozim → **as**." },
    { k: "fill", q: "I'm good ___ talking to people.", a: ["at"], why: "**good at** + -ing." },
    { k: "fill", q: "I've worked here ___ 2019.", a: ["since"], why: "2019 — boshlanish nuqtasi." },
    { k: "fill", q: "My father is ___ accountant.", a: ["an"], why: "unli tovush → **an**." },
    { k: "fill", q: "We have lived in Samarkand ___ ten years.", a: ["for"], why: "ten years — davomiylik → **for**." },
    { k: "tf", q: "**I'm teacher.** — to'g'ri gap.", a: false, why: "Artikl kerak: *I'm **a** teacher.*" },
    { k: "tf", q: "**Tell me about yourself** — ish suhbatidagi odatiy savol.", a: true },
    { k: "order", uz: "Men mehmonxonada resepshnist bo'lib ishlayman.", words: ["I", "work", "as", "a", "receptionist", "in", "a", "hotel."], extra: ["for", "an"] },
    { k: "order", uz: "Nega bu ishni xohlaysiz?", words: ["Why", "do", "you", "want", "this", "job?"], extra: ["does", "to"] },
    { k: "translate", uz: "Men besh yildan beri o'qituvchi bo'lib ishlayman.", a: ["I have worked as a teacher for five years.", "I've worked as a teacher for five years.", "I have been a teacher for five years.", "I've been a teacher for five years.", "I have been working as a teacher for five years.", "I've been working as a teacher for five years."] },
    { k: "translate", uz: "Men inglizcha gapira olaman.", a: ["I can speak English.", "I am able to speak English.", "I'm able to speak English."] },
    { k: "speak", say: "I'm hard-working, and I'm good at solving problems.", uz: "Men tirishqoqman va muammolarni yechishda kuchliman." },
  ],
  quiz: [
    { k: "choice", q: "Qaysi gap **to'g'ri**?", opts: ["He is doctor.", "He is a doctor.", "He a doctor.", "He is an doctor."], a: 1, why: "*doctor* undosh bilan boshlanadi → **a**." },
    { k: "choice", q: "I ___ here since 2022.", opts: ["work", "am working", "have worked", "worked"], a: 2, why: "*since* + hozirgacha davom etayotgan → Present Perfect." },
    { k: "choice", q: "\"Kasbingiz nima?\"", opts: ["What are you doing?", "What do you do?", "What did you do?", "What have you done?"], a: 1, why: "**What do you do?** — kasb haqida." },
    { k: "choice", q: "He is good ___ children.", opts: ["at", "with", "in", "on"], a: 1, why: "**good with** children." },
    { k: "fill", q: "She works ___ a hospital.", a: ["in", "at"], why: "Joy: *in a hospital*." },
    { k: "fill", q: "He was a waiter ___ two years, but he isn't any more.", a: ["for"], why: "Davomiylik → **for**." },
    { k: "fill", q: "I'm good at ___ English. (speak)", a: ["speaking"], why: "**good at** + -ing." },
    { k: "listen", say: "I have an interview on Monday.", opts: ["I have an interview on Monday.", "I had an interview on Monday.", "I have an interview on Sunday."], a: 0 },
    { k: "tf", q: "**She works part-time** degani u kuniga 8 soat ishlaydi.", a: false, why: "**part-time** = yarim kunlik; 8 soat — *full-time*." },
    { k: "order", uz: "U 2020-yildan beri menejer.", words: ["She", "has", "been", "a", "manager", "since", "2020."], extra: ["for", "is"] },
  ],
  summary: [
    "Kasb oldidan **a / an**: *I'm a nurse, She's an engineer.* Ko'plikda artikl yo'q.",
    "**work as** (lavozim), **work for** (kompaniya), **work in / at** (joy).",
    "Hozirgacha davom etayotgan ish: **have / has + V3 + for / since**: *I've worked here for 3 years.*",
    "Kuchli tomonlar: **I'm + sifat**, **I'm good at + -ing**, **I can + V1**.",
    "Suhbatda muloyim va aniq bo'ling: *I'd like to…, Thank you for your time.*",
  ],
  homework: "O'zingiz uchun ish suhbati javoblarini yozing: (1) *Tell me about yourself* (4 gap), (2) *Why do you want this job?* (2 gap), (3) *What are your strengths?* (3 gap, **good at + -ing** ishlating). Keyin ularni ovoz chiqarib 3 marta ayting va telefoningizga yozib oling.",
};

export default lesson;
