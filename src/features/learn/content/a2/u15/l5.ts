import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u15-l5",
  title: "Giving directions",
  titleUz: "Yo'l ko'rsatish va tushuntirish",
  goal: "Yo'lni so'raysiz (**How do I get to…? Is there a … near here?**), yo'l ko'rsatasiz (**turn left, go straight on, take the second turning**), joylashuvni aytasiz (**opposite, next to, between**) va xaritadagi yo'nalishni inglizcha tushuntirasiz.",
  slides: [
    {
      title: "Yo'lni so'rash",
      blocks: [
        { t: "p", md: "Notanish shaharda yo'l so'rashdan oldin **Excuse me** deb murojaat qiling. Quyidagi iboralar hammasi tabiiy:" },
        {
          t: "table", head: ["Ibora", "Ma'nosi"], speak: [0],
          rows: [
            ["Excuse me, how do I get to the station?", "Kechirasiz, vokzalga qanday boraman?"],
            ["Excuse me, where is the post office?", "Kechirasiz, pochta qayerda?"],
            ["Is there a pharmacy near here?", "Yaqin atrofda dorixona bormi?"],
            ["Could you tell me the way to the museum?", "Muzeyga yo'lni ayta olasizmi?"],
            ["Is it far from here?", "Bu yerdan uzoqmi?"],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["How do I get to the bank?", "Where is the bank?", "Is it far?"] },
          bad: { title: "Xato", items: ["How can I go to the bank?", "Where located the bank?", "It is far?"] },
        },
        { t: "tip", tone: "info", md: "**get to** = yetib bormoq. *How do I **get to** the metro?* — eng ko'p ishlatiladigan shakl. **How can I go to…?** o'zbekcha \"qanday boraman\" dan tarjima qilingan; tushunishadi, lekin tabiiy emas." },
        { t: "check", ex: { k: "choice", q: "Yo'lni so'rashning eng tabiiy shakli:", opts: ["How I go to the station?", "How do I get to the station?", "How I can to the station?", "Where I get station?"], a: 1, why: "**How do I get to + joy?**" } },
      ],
    },
    {
      title: "Yo'nalish: buyruq shaklida",
      blocks: [
        { t: "p", md: "Yo'l ko'rsatayotganda **buyruq shakli** (imperative) ishlatiladi — bu yerda u qo'pol emas, tabiiy. Asosiy iboralar:" },
        {
          t: "table", head: ["Ibora", "Ma'nosi"], speak: [0],
          rows: [
            ["Go straight on.", "To'g'ri yuring."],
            ["Turn left. / Turn right.", "Chapga / o'ngga buriling."],
            ["Take the first turning on the left.", "Chap tomondagi birinchi burilishdan buriling."],
            ["Cross the road / the bridge.", "Yo'lni / ko'prikni kesib o'ting."],
            ["Go past the bank.", "Bankdan o'tib keting."],
            ["Turn left at the traffic lights.", "Svetoforda chapga buriling."],
            ["Go round the roundabout.", "Aylanadan aylanib o'ting."],
            ["It's on your left / right.", "U chap / o'ng tomoningizda."],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["Go straight on.", "Turn left at the corner.", "It's on the right.", "Take the second turning."] },
          bad: { title: "Xato", items: ["Go to straight.", "Turn at left on the corner.", "It's in the right.", "Take the second turn to left."] },
        },
        { t: "tip", tone: "warn", md: "**on** the left / right (**in** emas!): *It's **on** your left.* Ingliz tilida chap/o'ng tomon bilan **on** ishlatiladi." },
        { t: "check", ex: { k: "fill", q: "Go ___ the bridge and turn right.", a: ["over", "across"], why: "Ko'prikdan o'tish: **go over / across the bridge**; yo'lni kesish: **cross**." } },
        { t: "check", ex: { k: "choice", q: "\"Svetoforda o'ngga buriling.\"", opts: ["Turn right at the traffic lights.", "Turn at right to the traffic lights.", "Go right in the traffic lights.", "Turn on right the traffic lights."], a: 0, why: "**Turn right at the traffic lights.**" } },
      ],
    },
    {
      title: "Joylashuv: opposite, next to, between…",
      blocks: [
        { t: "p", md: "Binoning qayerda ekanini tushuntirish uchun predloglar:" },
        {
          t: "table", head: ["Predlog", "Ma'nosi", "Misol"], speak: [2],
          rows: [
            ["next to", "yonida", "The café is next to the bank."],
            ["opposite", "qarshisida", "The school is opposite the park."],
            ["between … and …", "… va … o'rtasida", "The pharmacy is between the shop and the bank."],
            ["behind", "orqasida", "The car park is behind the hotel."],
            ["in front of", "oldida", "The bus stop is in front of the museum."],
            ["near", "yaqinida", "There's a market near my house."],
            ["on the corner of", "burchagida", "The cinema is on the corner of Navoi Street."],
          ],
        },
        { t: "tip", tone: "info", md: "**opposite** dan keyin **to** kerak emas: *The school is **opposite** the park* (opposite to the park — xato emas, lekin kam). **next to** da esa **to** bor." },
        { t: "check", ex: { k: "fill", q: "The bank is ___ the hotel and the pharmacy. (o'rtasida)", a: ["between"], why: "**between A and B** — ikki narsa o'rtasida." } },
        { t: "check", ex: { k: "choice", q: "\"Maktab bog'ning qarshisida.\"", opts: ["The school is opposite the park.", "The school is in front opposite the park.", "The school is against the park.", "The school is between the park."], a: 0, why: "**opposite** = qarshisida." } },
      ],
    },
    {
      title: "Dialog: Samarqandda yo'l so'rash",
      blocks: [
        { t: "p", md: "Turist Registon maydoniga yo'l so'raydi:" },
        {
          t: "dialog", lines: [
            { who: "Tourist", en: "Excuse me, how do I get to the Registan?", uz: "Kechirasiz, Registonga qanday boraman?" },
            { who: "Kamol", en: "Go straight on this street. Turn left at the traffic lights.", uz: "Shu ko'cha bo'ylab to'g'ri yuring. Svetoforda chapga buriling." },
            { who: "Tourist", en: "Is it far?", uz: "Uzoqmi?" },
            { who: "Kamol", en: "No, it's about ten minutes' walk. Go past the big bank, and the Registan is on your right.", uz: "Yo'q, taxminan o'n daqiqalik yo'l. Katta bankdan o'tib ketasiz, Registon o'ng tomoningizda." },
            { who: "Tourist", en: "Is there a café near there?", uz: "U yerda yaqin atrofda kafe bormi?" },
            { who: "Kamol", en: "Yes, there's a chaikhana opposite the Registan, next to the museum.", uz: "Ha, Registonning qarshisida, muzey yonida choyxona bor." },
            { who: "Tourist", en: "Thank you very much!", uz: "Katta rahmat!" },
            { who: "Kamol", en: "You're welcome. Enjoy your trip!", uz: "Arzimaydi. Safaringiz yaxshi o'tsin!" },
          ],
        },
        { t: "check", ex: { k: "choice", q: "Where is the Registan?", opts: ["On the left, after the bank.", "On the right, after the bank.", "Next to the traffic lights.", "Behind the museum."], a: 1, why: "*Go past the big bank, and the Registan is on your right.*" } },
        { t: "check", ex: { k: "tf", q: "The chaikhana is next to the museum.", a: true, why: "*a chaikhana opposite the Registan, next to the museum.*" } },
      ],
    },
    {
      title: "O'qing: Xarita bo'yicha",
      blocks: [
        {
          t: "text", title: "Dilnoza's directions",
          en: "Dilnoza's friend Anna is visiting Tashkent. She is at the metro station and she wants to get to Dilnoza's flat.\n\"It's easy,\" says Dilnoza on the phone. \"Come out of the metro and go straight on. You'll pass a bank on your left. Then you'll see a small park on the right. Turn right at the traffic lights and take the second turning on the left. My building is opposite a pharmacy, between a bakery and a school. It's about a ten-minute walk.\"\n\"Great! Thanks!\" says Anna. \"I'll text you when I'm there.\"",
          uz: "Dilnozaning do'sti Anna Toshkentga mehmon bo'lib keldi. U metro bekatida va Dilnozaning kvartirasiga borishni xohlaydi.\n\"Oson,\" deydi Dilnoza telefonda. \"Metrodan chiq va to'g'ri yur. Chap tomoningda bankning yonidan o'tasan. Keyin o'ng tomonda kichik bog'ni ko'rasan. Svetoforda o'ngga bur va chap tomondagi ikkinchi burilishdan bur. Mening uyim dorixonaning qarshisida, novvoyxona bilan maktab o'rtasida. Taxminan o'n daqiqalik yo'l.\"\n\"Zo'r! Rahmat!\" deydi Anna. \"Yetib borgach, xabar yozaman.\"",
        },
        { t: "check", ex: { k: "choice", q: "Where is Dilnoza's building?", opts: ["Next to the bank.", "Opposite a pharmacy.", "Behind the park.", "In front of the metro."], a: 1, why: "*My building is opposite a pharmacy.*" } },
        { t: "check", ex: { k: "tf", q: "Anna must turn left at the traffic lights.", a: false, why: "*Turn right at the traffic lights*, keyin chap tomondagi ikkinchi burilish." } },
      ],
    },
    {
      title: "Qanchalik uzoq? Masofa va vaqt",
      blocks: [
        {
          t: "table", head: ["Savol", "Javob"], speak: [0, 1],
          rows: [
            ["How far is it?", "It's about two kilometres."],
            ["How long does it take?", "It takes about ten minutes on foot."],
            ["Is it far from here?", "No, it's quite near. It's five minutes' walk."],
            ["Should I take the bus?", "Yes, take bus number 12."],
          ],
        },
        { t: "tip", tone: "good", md: "Yo'lni tushunmasangiz, so'rashdan uyalmang: **Sorry, could you repeat that, please?** yoki **Could you speak more slowly?** Va oxirida tasdiqlang: *So I go straight and turn left at the lights, right?*" },
        { t: "check", ex: { k: "fill", q: "How ___ is it to the metro? — About 500 metres.", a: ["far"], why: "**How far** — masofa haqida." } },
      ],
    },
  ],
  words: [
    { en: "straight", uz: "to'g'ri (yo'nalish)", ipa: "streɪt", pos: "adv", ex: "Go straight on for two hundred metres.", exUz: "Ikki yuz metr to'g'ri yuring." },
    { en: "corner", uz: "burchak, ko'cha burchagi", ipa: "ˈkɔːnə", pos: "noun", ex: "The shop is on the corner.", exUz: "Do'kon burchakda." },
    { en: "traffic lights", uz: "svetofor", ipa: "ˈtræfɪk laɪts", pos: "noun", ex: "Turn left at the traffic lights.", exUz: "Svetoforda chapga buriling." },
    { en: "roundabout", uz: "aylana (yo'l)", ipa: "ˈraʊndəbaʊt", pos: "noun", ex: "Take the second exit at the roundabout.", exUz: "Aylanadan ikkinchi chiqishga buriling." },
    { en: "cross", uz: "kesib o'tmoq", ipa: "krɒs", pos: "verb", ex: "Cross the road carefully.", exUz: "Yo'lni ehtiyotkorlik bilan kesib o'ting." },
    { en: "bridge", uz: "ko'prik", ipa: "brɪdʒ", pos: "noun", ex: "Go over the bridge and turn left.", exUz: "Ko'prikdan o'tib, chapga buriling." },
    { en: "opposite", uz: "qarshisida", ipa: "ˈɒpəzɪt", pos: "prep", ex: "The hotel is opposite the station.", exUz: "Mehmonxona vokzalning qarshisida." },
    { en: "between", uz: "o'rtasida", ipa: "bɪˈtwiːn", pos: "prep", ex: "The café is between the bank and the shop.", exUz: "Kafe bank bilan do'kon o'rtasida." },
    { en: "go past", uz: "yonidan o'tib ketmoq", ipa: "ɡəʊ pɑːst", pos: "phrasal verb", ex: "Go past the post office.", exUz: "Pochtaning yonidan o'tib keting." },
    { en: "turning", uz: "burilish (ko'cha)", ipa: "ˈtɜːnɪŋ", pos: "noun", ex: "Take the second turning on the right.", exUz: "O'ng tomondagi ikkinchi burilishga buriling." },
  ],
  practice: [
    { k: "match", pairs: [["straight on", "to'g'ri"], ["traffic lights", "svetofor"], ["bridge", "ko'prik"], ["opposite", "qarshisida"], ["between", "o'rtasida"]] },
    { k: "match", pairs: [["Turn left.", "Chapga buriling."], ["Turn right.", "O'ngga buriling."], ["Cross the road.", "Yo'lni kesib o'ting."], ["Go past the bank.", "Bankdan o'tib keting."]] },
    { k: "listen", say: "Turn left at the traffic lights.", opts: ["Turn left at the traffic lights.", "Turn right at the traffic lights.", "Turn left at the roundabout."], a: 0 },
    { k: "listen", say: "The bank is next to the pharmacy.", opts: ["The bank is next to the pharmacy.", "The bank is opposite the pharmacy.", "The bank is behind the pharmacy."], a: 0 },
    { k: "choice", q: "The post office is ___ the bank and the library.", opts: ["between", "opposite", "on", "to"], a: 0, why: "ikki bino o'rtasida → **between … and …**" },
    { k: "choice", q: "\"Dorixona o'ng tomoningizda.\"", opts: ["The pharmacy is in the right.", "The pharmacy is on your right.", "The pharmacy is to right.", "The pharmacy is at right of you."], a: 1, why: "**on your right**." },
    { k: "choice", q: "Qaysi gap **xato**?", opts: ["Go straight on.", "Turn right at the corner.", "How I can go to the station?", "Is there a bank near here?"], a: 2, why: "To'g'ri: *How do I get to the station?*" },
    { k: "fill", q: "Excuse me, how do I ___ to the museum?", a: ["get"], why: "**How do I get to…?**" },
    { k: "fill", q: "Go ___ the bridge and the park is on your left.", a: ["over", "across"], why: "Ko'prik ustidan o'tish → **over / across**." },
    { k: "fill", q: "Take the second ___ on the right.", a: ["turning", "turn", "street", "road"], why: "**the second turning** — ikkinchi burilish." },
    { k: "tf", q: "**Opposite** va **next to** bir xil ma'noni bildiradi.", a: false, why: "opposite = qarshisida, next to = yonida." },
    { k: "tf", q: "**Is there a cafe near here?** — yo'lni so'rovchi savol.", a: true },
    { k: "order", uz: "Svetoforda chapga buriling.", words: ["Turn", "left", "at", "the", "traffic", "lights."], extra: ["in", "to"] },
    { k: "order", uz: "Muzey bank bilan maktab o'rtasida.", words: ["The", "museum", "is", "between", "the", "bank", "and", "the", "school."], extra: ["next", "on"] },
    { k: "translate", uz: "Kechirasiz, metro yaqin atrofdami?", a: ["Excuse me, is there a metro station near here?", "Excuse me, is the metro near here?", "Excuse me, is there a metro near here?", "Excuse me, is the metro station near here?"] },
    { k: "speak", say: "Excuse me, how do I get to the station?", uz: "Kechirasiz, vokzalga qanday boraman?" },
  ],
  quiz: [
    { k: "choice", q: "\"Go ___ on for two hundred metres.\"", opts: ["straight", "right", "opposite", "between"], a: 0, why: "**Go straight on** — to'g'ri yuring." },
    { k: "choice", q: "The hotel is ___ the station. You can see it from the exit.", opts: ["opposite", "between", "on", "at corner"], a: 0, why: "Qarshisida → **opposite**." },
    { k: "choice", q: "Yo'lni kesish uchun qaysi fe'l?", opts: ["cross", "pass", "turn", "get"], a: 0, why: "**cross the road**." },
    { k: "choice", q: "Is it far? — ", opts: ["No, it's about five minutes' walk.", "Yes, I am.", "It is turn left.", "No, it isn't turning."], a: 0, why: "Masofa haqidagi savolga mos javob." },
    { k: "fill", q: "The bus stop is ___ front of the school.", a: ["in"], why: "**in front of** — oldida." },
    { k: "fill", q: "Turn right ___ the corner.", a: ["at"], why: "**at the corner**." },
    { k: "tf", q: "**It's in the left.** — to'g'ri ibora.", a: false, why: "To'g'ri: *It's on the left.*" },
    { k: "listen", say: "Go straight on and take the second turning.", opts: ["Go straight on and take the second turning.", "Go straight on and take the first turning.", "Turn left and take the second turning."], a: 0 },
    { k: "order", uz: "Bank dorixonaning yonida.", words: ["The", "bank", "is", "next", "to", "the", "pharmacy."], extra: ["opposite", "in"] },
    { k: "translate", uz: "To'g'ri yuring va o'ngga buriling.", a: ["Go straight on and turn right.", "Go straight and turn right.", "Go straight on, then turn right.", "Go straight, then turn right.", "Walk straight on and turn right."] },
  ],
  summary: [
    "Yo'lni so'rash: **Excuse me, how do I get to…?**, **Is there a … near here?**, **Is it far?**",
    "Yo'nalish: **Go straight on. Turn left / right. Take the second turning. Cross the road. Go past…**",
    "Joylashuv: **next to, opposite, between … and …, behind, in front of, on the corner.**",
    "**On** the left / right (in emas). Yo'l tushuntirishda buyruq shakli qo'pol emas, tabiiy.",
  ],
  homework: "O'z uyingizdan eng yaqin metro, bozor yoki maktabga yo'lni inglizcha yozing (6–8 gap). Kamida 3 ta **yo'nalish** (*turn left, go straight on…*) va 3 ta **joylashuv** (*opposite, next to, between*) iborasini ishlating. Keyin ovoz chiqarib o'qing.",
};

export default lesson;
