import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u15-l7",
  title: "Rules and signs",
  titleUz: "Qoidalar va belgilar: need to / needn't",
  goal: "**need to** (kerak) va **don't need to / needn't** (kerak emas) ni to'g'ri ishlatasiz, maktab, ish va yo'ldagi qoidalarni **must / mustn't / have to** bilan aytasiz hamda ingliz tilidagi eng keng tarqalgan **belgi va yozuvlarni** (*No parking, Keep off the grass, Out of order*) tushunasiz.",
  slides: [
    {
      title: "Need to: kerak",
      blocks: [
        { t: "p", md: "**need to** — \"kerak, zarur\". U **have to** ga juda yaqin, lekin oddiy fe'l kabi o'zgaradi (**needs**, **do/does/did**):" },
        {
          t: "table", head: ["Shakl", "Misol"], speak: [1],
          rows: [
            ["+  I / you / we / they **need to** + V1", "We need to leave at six."],
            ["+  he / she / it **needs to** + V1", "She needs to buy a ticket."],
            ["−  **don't / doesn't need to** + V1", "You don't need to hurry."],
            ["?  **Do / Does … need to …?**", "Do I need to book a table?"],
            ["O'tgan: **needed to / didn't need to**", "I didn't need to pay."],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["She needs to see a doctor.", "Do you need to leave now?", "I need a pen. (+ ot)"] },
          bad: { title: "Xato", items: ["She need to see a doctor.", "Does you need to leave now?", "I need to a pen."] },
        },
        { t: "tip", tone: "info", md: "**need** ikki xil ishlatiladi: **need + ot** (*I need water*) va **need to + fe'l** (*I need to drink water*). Fe'ldan oldin **to** kerak, oddiy ot oldidan esa kerak emas." },
        { t: "check", ex: { k: "fill", q: "Kamol ___ to finish the report today. (needs/need)", a: ["needs"], why: "he → **needs to**." } },
      ],
    },
    {
      title: "Don't need to va needn't: shart emas",
      blocks: [
        { t: "p", md: "**Shart emas** deyish uchun uchta teng shakl bor:" },
        {
          t: "table", head: ["Shakl", "Misol"], speak: [1],
          rows: [
            ["**don't / doesn't need to** + V1", "You don't need to bring food."],
            ["**needn't** + V1 (to yo'q!)", "You needn't bring food."],
            ["**don't / doesn't have to** + V1", "You don't have to bring food."],
          ],
        },
        { t: "p", md: "Uchalasi bir xil ma'noni beradi: \"olib kelsangiz ham bo'ladi, olib kelmasangiz ham\". **needn't** — asosan Britaniya ingliz tilida, ancha rasmiy va qisqa." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["You don't need to wait.", "You needn't wait.", "She doesn't need to come."] },
          bad: { title: "Xato", items: ["You needn't to wait.", "You don't need wait.", "She needn't comes."] },
        },
        { t: "tip", tone: "warn", md: "**needn't** modal fe'l — shuning uchun **to** va **-s** yo'q: *He needn't come.* **mustn't** bilan adashtirmang: *You mustn't wait* = kutish taqiqlangan, *You needn't wait* = kutish shart emas." },
        { t: "check", ex: { k: "choice", q: "\"Bugun dars yo'q, shoshilishingiz shart emas.\"", opts: ["You mustn't hurry.", "You needn't hurry.", "You needn't to hurry.", "You don't need hurry."], a: 1, why: "Shart emas → **needn't hurry** yoki **don't need to hurry**." } },
        { t: "check", ex: { k: "choice", q: "Qaysi gap taqiqni bildiradi?", opts: ["You needn't park here.", "You don't need to park here.", "You mustn't park here.", "You don't have to park here."], a: 2, why: "**mustn't** = taqiq. Qolganlari — shart emas." } },
      ],
    },
    {
      title: "Qoidalar: must, mustn't, have to",
      blocks: [
        { t: "p", md: "Birinchi darsda o'rgangan fe'llar qoidalarni tasvirlashda doim kerak bo'ladi. Uch joydan misollar:" },
        {
          t: "table", head: ["Joy", "Qoida"], speak: [1],
          rows: [
            ["Maktab", "Students must wear a uniform. Students mustn't use phones in class."],
            ["Ish", "Employees have to arrive by nine. Visitors must sign in at reception."],
            ["Yo'l", "Drivers must stop at a red light. Pedestrians have to use the crossing."],
            ["Yo'l", "You mustn't drive fast near a school."],
          ],
        },
        {
          t: "examples", items: [
            { en: "At our school we have to wear a uniform.", uz: "Bizning maktabda forma kiyishimiz kerak." },
            { en: "You mustn't run in the corridor.", uz: "Yo'lakda yugurish mumkin emas." },
            { en: "We don't have to wear a uniform on Fridays.", uz: "Juma kunlari forma kiyishimiz shart emas." },
            { en: "Drivers need to wear a seat belt.", uz: "Haydovchilar xavfsizlik kamarini taqishi kerak." },
          ],
        },
        { t: "tip", tone: "good", md: "Rasmiy yozma qoidalarda (yo'riqnoma, e'lon) ko'pincha **must / must not** ishlatiladi. Oddiy suhbatda esa **have to / mustn't / don't have to** ko'proq eshitiladi." },
        { t: "check", ex: { k: "fill", q: "Visitors ___ sign in at reception. (shart)", a: ["must", "have to", "need to"], why: "Qoida → **must / have to / need to**." } },
      ],
    },
    {
      title: "Belgilar va yozuvlar",
      blocks: [
        { t: "p", md: "Ingliz tilidagi belgilar qisqa bo'ladi: ko'pincha **No + ot** yoki **No + -ing** (taqiq) yoki buyruq shakli. Eng keng tarqalganlari:" },
        {
          t: "table", head: ["Belgi", "Ma'nosi", "Shunday ham deyish mumkin"], speak: [0],
          rows: [
            ["No parking", "Mashina qo'yish mumkin emas", "You mustn't park here."],
            ["No smoking", "Chekish mumkin emas", "You mustn't smoke here."],
            ["No entry", "Kirish mumkin emas", "You mustn't enter."],
            ["Keep off the grass", "Maysaga bosmang", "You mustn't walk on the grass."],
            ["Wet floor", "Pol ho'l (ehtiyot bo'ling)", "Be careful, the floor is wet."],
            ["Out of order", "Ishlamaydi (buzilgan)", "It isn't working."],
            ["Give way", "Yo'l bering", "You must let other cars go first."],
            ["Exit", "Chiqish", "Way out"],
          ],
        },
        { t: "check", ex: { k: "choice", q: "Liftda \"Out of order\" yozuvi bor. Bu nimani anglatadi?", opts: ["Lift tez ishlaydi.", "Lift ishlamayapti.", "Lift to'la.", "Lift faqat xodimlar uchun."], a: 1, why: "**Out of order** = buzilgan, ishlamayapti." } },
        { t: "check", ex: { k: "choice", q: "\"Keep off the grass\" belgisiga ko'ra:", opts: ["Maysada o'tirishingiz kerak.", "Maysaga bosishingiz mumkin emas.", "Maysani sug'orishingiz kerak.", "Maysaga gul ekishingiz shart."], a: 1, why: "**Keep off** = yaqinlashmang, bosmang." } },
      ],
    },
    {
      title: "O'qing: Maktab qoidalari",
      blocks: [
        {
          t: "text", title: "Rules at our language school",
          en: "Our language school in Tashkent has a few simple rules. Students have to arrive on time, and they must switch off their phones in class. You mustn't eat in the classroom, but you can have a drink.\nYou don't need to wear a uniform, but you need to bring your notebook every day. If you are ill, you don't need to phone the school, but you should send a message to your teacher.\nThere is a sign on the door: \"Quiet please – exam in progress\". And there is another sign on the lift: \"Out of order\". So you have to use the stairs!",
          uz: "Toshkentdagi til maktabimizda bir nechta oddiy qoidalar bor. O'quvchilar o'z vaqtida kelishi kerak va dars paytida telefonlarini o'chirishi shart. Sinfda ovqatlanish mumkin emas, lekin ichimlik ichsa bo'ladi.\nForma kiyish shart emas, lekin har kuni daftaringizni olib kelishingiz kerak. Agar kasal bo'lsangiz, maktabga qo'ng'iroq qilishingiz shart emas, lekin o'qituvchingizga xabar yuborishingiz kerak.\nEshikda belgi bor: \"Iltimos, jim bo'ling – imtihon ketmoqda\". Liftda esa boshqa yozuv bor: \"Ishlamaydi\". Shunday ekan, zinadan foydalanish kerak!",
        },
        { t: "check", ex: { k: "tf", q: "Students have to wear a uniform.", a: false, why: "*You don't need to wear a uniform.*" } },
        { t: "check", ex: { k: "choice", q: "Why do the students have to use the stairs?", opts: ["The lift is out of order.", "The lift is for teachers.", "There is an exam.", "The lift is too slow."], a: 0, why: "*Out of order. So you have to use the stairs.*" } },
      ],
    },
    {
      title: "Dialog: sport zalida",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Reception", en: "Hello! Welcome to the gym. Have you got a membership card?", uz: "Salom! Sport zaliga xush kelibsiz. A'zolik kartangiz bormi?" },
            { who: "Dilnoza", en: "No, it's my first time. Do I need to buy one today?", uz: "Yo'q, birinchi marta kelganman. Bugun sotib olishim kerakmi?" },
            { who: "Reception", en: "No, you don't need to. You can try it for free today. But you have to fill in this form.", uz: "Yo'q, shart emas. Bugun bepul sinab ko'rishingiz mumkin. Lekin bu blankani to'ldirishingiz kerak." },
            { who: "Dilnoza", en: "OK. What are the rules?", uz: "Mayli. Qoidalar qanday?" },
            { who: "Reception", en: "You must wear sports shoes. You mustn't leave your bag in the corridor, and you needn't bring a towel — we have clean ones.", uz: "Sport poyabzalini kiyishingiz shart. Sumkangizni yo'lakda qoldirmaslik kerak, sochiq olib kelishingiz shart emas — bizda toza sochiqlar bor." },
            { who: "Dilnoza", en: "That's great, thank you!", uz: "Zo'r, rahmat!" },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Dilnoza must bring her own towel.", a: false, why: "*You needn't bring a towel — we have clean ones.*" } },
      ],
    },
  ],
  words: [
    { en: "sign", uz: "belgi, yozuv", ipa: "saɪn", pos: "noun", ex: "There is a sign on the door.", exUz: "Eshikda yozuv bor." },
    { en: "warning", uz: "ogohlantirish", ipa: "ˈwɔːnɪŋ", pos: "noun", ex: "Read the warning carefully.", exUz: "Ogohlantirishni diqqat bilan o'qing." },
    { en: "entrance", uz: "kirish joyi", ipa: "ˈentrəns", pos: "noun", ex: "The entrance is on the left.", exUz: "Kirish chap tomonda." },
    { en: "exit", uz: "chiqish joyi", ipa: "ˈeksɪt", pos: "noun", ex: "The nearest exit is behind you.", exUz: "Eng yaqin chiqish orqangizda." },
    { en: "queue", uz: "navbat", ipa: "kjuː", pos: "noun / verb", ex: "Please wait in the queue.", exUz: "Iltimos, navbatda kuting." },
    { en: "pedestrian", uz: "piyoda", ipa: "pəˈdestriən", pos: "noun", ex: "Pedestrians must use the crossing.", exUz: "Piyodalar o'tish joyidan foydalanishi kerak." },
    { en: "speed limit", uz: "tezlik chegarasi", ipa: "ˈspiːd ˌlɪmɪt", pos: "noun", ex: "The speed limit here is 50.", exUz: "Bu yerda tezlik chegarasi 50." },
    { en: "out of order", uz: "ishlamaydi, buzilgan", ipa: "aʊt əv ˈɔːdə", pos: "phrase", ex: "The ticket machine is out of order.", exUz: "Chipta avtomati ishlamayapti." },
    { en: "give way", uz: "yo'l bermoq", ipa: "ɡɪv weɪ", pos: "phrasal verb", ex: "You must give way to buses.", exUz: "Avtobuslarga yo'l berishingiz kerak." },
    { en: "keep off", uz: "yaqinlashmaslik, bosmaslik", ipa: "kiːp ɒf", pos: "phrasal verb", ex: "Keep off the grass.", exUz: "Maysaga bosmang." },
  ],
  practice: [
    { k: "match", pairs: [["sign", "belgi"], ["queue", "navbat"], ["pedestrian", "piyoda"], ["exit", "chiqish"], ["entrance", "kirish"]] },
    { k: "match", pairs: [["No parking", "Mashina qo'yish mumkin emas"], ["No smoking", "Chekish mumkin emas"], ["Out of order", "Ishlamaydi"], ["Give way", "Yo'l bering"]] },
    { k: "listen", say: "You needn't bring a towel.", opts: ["You needn't bring a towel.", "You mustn't bring a towel.", "You need to bring a towel."], a: 0 },
    { k: "listen", say: "Drivers must stop at a red light.", opts: ["Drivers must stop at a red light.", "Drivers mustn't stop at a red light.", "Drivers needn't stop at a red light."], a: 0 },
    { k: "choice", q: "You ___ pay. The museum is free today.", opts: ["don't need to", "mustn't", "need to", "needs to"], a: 0, why: "Shart emas → **don't need to**." },
    { k: "choice", q: "Qaysi gap **xato**?", opts: ["She needs to go.", "Do you need to leave?", "He needn't to come.", "We don't need to wait."], a: 2, why: "**needn't** dan keyin **to** kerak emas: *He needn't come.*" },
    { k: "choice", q: "\"No smoking\" belgisi nima deydi?", opts: ["You must smoke here.", "You mustn't smoke here.", "You needn't smoke here.", "You have to smoke here."], a: 1, why: "**No smoking** = chekish taqiqlangan." },
    { k: "choice", q: "Does she ___ to buy a new phone?", opts: ["need", "needs", "needed", "needing"], a: 0, why: "**Does + she + need to** + V1." },
    { k: "fill", q: "We ___ to wear a uniform. It's the rule.", a: ["have", "need"], why: "Qoida → **have to** (yoki **need to**)." },
    { k: "fill", q: "You needn't ___ so early. (come)", a: ["come"], why: "**needn't + V1** (to yo'q)." },
    { k: "fill", q: "Keep ___ the grass!", a: ["off"], why: "**Keep off** the grass." },
    { k: "tf", q: "**You mustn't wait** va **You needn't wait** bir xil ma'noni bildiradi.", a: false, why: "Birinchisi — taqiq, ikkinchisi — shart emas." },
    { k: "tf", q: "**Pedestrians have to use the crossing.** — bu qoida.", a: true },
    { k: "order", uz: "Sizga bilet sotib olishingiz shart emas.", words: ["You", "don't", "need", "to", "buy", "a", "ticket."], extra: ["needn't", "must"] },
    { k: "order", uz: "Haydovchilar piyodalarga yo'l berishi kerak.", words: ["Drivers", "must", "give", "way", "to", "pedestrians."], extra: ["mustn't", "gives"] },
    { k: "translate", uz: "Maktabda telefon ishlatish mumkin emas.", a: ["You mustn't use your phone at school.", "You mustn't use phones at school.", "Students mustn't use phones at school.", "Students mustn't use their phones at school.", "You must not use your phone at school.", "You must not use phones at school."] },
    { k: "speak", say: "You mustn't park here, and you don't need to pay.", uz: "Bu yerga mashina qo'ymaslik kerak va to'lash shart emas." },
  ],
  quiz: [
    { k: "choice", q: "The lift is out of order, so we ___ use the stairs.", opts: ["have to", "mustn't", "needn't", "don't have"], a: 0, why: "Boshqa yo'l yo'q → **have to**." },
    { k: "choice", q: "You ___ run in the corridor. It's dangerous.", opts: ["mustn't", "needn't", "don't need to", "doesn't"], a: 0, why: "Taqiq → **mustn't**." },
    { k: "choice", q: "\"You needn't hurry.\" = ", opts: ["You don't need to hurry.", "You mustn't hurry.", "You must hurry.", "You hurry not."], a: 0, why: "**needn't** = **don't need to**." },
    { k: "choice", q: "\"Give way\" belgisi nimani anglatadi?", opts: ["Boshqalarga yo'l ber.", "Tezroq yur.", "Chapga bur.", "Shu yerda to'xta."], a: 0, why: "**give way** = yo'l bermoq." },
    { k: "fill", q: "Do I ___ to bring my passport?", a: ["need", "have"], why: "**Do I need / have to…?**" },
    { k: "fill", q: "She ___ to leave early today. (needs/need)", a: ["needs"], why: "she → **needs to**." },
    { k: "tf", q: "**She needs to buy a ticket** va **She need to buy a ticket** ikkalasi ham to'g'ri.", a: false, why: "she → **needs**." },
    { k: "listen", say: "Visitors must sign in at reception.", opts: ["Visitors must sign in at reception.", "Visitors mustn't sign in at reception.", "Visitors needn't sign in at reception."], a: 0 },
    { k: "order", uz: "Sizga kutish shart emas.", words: ["You", "needn't", "wait."], extra: ["to", "mustn't"] },
    { k: "translate", uz: "Men bugun ishlashim shart emas.", a: ["I don't need to work today.", "I needn't work today.", "I don't have to work today.", "Today I don't need to work.", "Today I don't have to work.", "Today I needn't work."] },
  ],
  summary: [
    "**need to** + V1 = kerak (*She needs to go*). Inkor va savol: **don't / doesn't need to, Do I need to…?**",
    "Shart emas: **don't need to**, **needn't** (to yo'q!), **don't have to**. Taqiq: **mustn't**.",
    "Qoidalar: **must, mustn't, have to** (*Students must wear a uniform. You mustn't run.*).",
    "Belgilar: **No parking, No smoking, Keep off the grass, Out of order, Give way, Exit** — qisqa, ko'pincha taqiq.",
  ],
  homework: "Kunlik hayotingizda uchragan 6 ta belgini (metro, bozor, maktab, yo'l) ingliz tilida yozing (*No smoking, Exit…*) va har biriga \"You must / mustn't…\" gapini tuzing. Keyin 3 ta shart emas gap yozing: **I don't need to… / I needn't… / I don't have to…**",
};

export default lesson;
