import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u7-l8",
  title: "Questions: How often? How long?…",
  titleUz: "Savollar: How often, How long, How far…",
  goal: "**How + sifat/ravish** savollarini tuzasiz va javob berasiz: **How often do you go to the gym? — Three times a week. How long does it take? — It takes 20 minutes. How far is it? — It's 5 kilometres away.**",
  slides: [
    {
      title: "How + so'z = yangi savol",
      blocks: [
        { t: "p", md: "Beginnerda **How old? How much? How many?** ni o'rgandik. Aslida **How** dan keyin deyarli istalgan sifat yoki ravish qo'yib, aniq savol yasash mumkin:" },
        {
          t: "table", head: ["Savol", "Nimani so'raydi", "Misol javob"],
          rows: [
            ["How often…?", "qanchalik tez-tez (necha marta)", "Twice a week."],
            ["How long…?", "qancha vaqt (davomiylik)", "For two hours. / It takes 20 minutes."],
            ["How far…?", "qancha uzoq (masofa)", "About 3 kilometres."],
            ["How tall…?", "bo'yi qancha", "He's 1 metre 80."],
            ["How fast…?", "qanchalik tez", "120 kilometres an hour."],
            ["How well…?", "qanchalik yaxshi", "Quite well, thanks."],
          ],
          speak: [0, 2],
        },
        { t: "tip", tone: "info", md: "Tuzilma doim bir xil: **How + so'z + yordamchi fe'l (do / does / is / are / can) + ega + …?** \n*How often **do you** go…? How far **is** it? How fast **can** you run?*" },
        { t: "check", ex: { k: "choice", q: "Masofani so'rash uchun qaysi savol?", opts: ["How long is it?", "How far is it?", "How often is it?", "How much is it?"], a: 1, why: "Masofa — **How far?** *How much* — narx." } },
      ],
    },
    {
      title: "How often? — necha marta",
      blocks: [
        { t: "p", md: "Takrorlanish haqida so'raymiz. Javobda **always / sometimes / never** yoki aniq **son** ishlatiladi:" },
        {
          t: "table", head: ["Ifoda", "Ma'nosi"],
          rows: [
            ["every day / every week / every Monday", "har kuni / har hafta / har dushanba"],
            ["once a week", "haftada bir marta"],
            ["twice a month", "oyda ikki marta"],
            ["three times a year", "yiliga uch marta"],
            ["every two days / every other day", "har ikki kunda (kunora)"],
            ["(almost) never", "(deyarli) hech qachon"],
          ],
          speak: [0],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["How often do you go to the gym?", "I go to the gym twice a week.", "She visits her parents once a month."] },
          bad: { title: "Xato", items: ["How often you go to the gym?", "I go twice in a week to the gym.", "She visits once in month her parents."] },
        },
        { t: "tip", tone: "warn", md: "**a** = \"har bir\": *twice **a** week* — haftasiga ikki marta. ❌ *twice in a week*, ❌ *two times in week*. Aniq ifoda gap **oxiriga** qo'yiladi: *I go swimming **three times a week**.*" },
        {
          t: "sounds", items: [
            { label: "once", say: "once", uz: "**\"wans\"** — *w* bilan boshlanadi! ❌ \"ons\" emas.", examples: ["once", "once a week"] },
            { label: "twice", say: "twice", uz: "**\"tways\"** — *two* + *ice* gacha o'xshash.", examples: ["twice", "twice a month"] },
          ],
        },
        { t: "check", ex: { k: "fill", q: "I go to the dentist ___ a year — in spring and in autumn.", a: ["twice", "two times"], uz: "Yilda ikki marta — bahor va kuzda tish shifokoriga boraman.", why: "Ikki marta → **twice**." } },
      ],
    },
    {
      title: "How long? — qancha vaqt",
      blocks: [
        { t: "p", md: "**How long** — davomiylik haqida. Uchta juda foydali tuzilma bor:" },
        {
          t: "table", head: ["Savol", "Javob", "O'zbekcha"],
          rows: [
            ["How long does it take to get to work?", "It takes (me) about forty minutes.", "Ishga borish qancha vaqt oladi? — Taxminan 40 daqiqa."],
            ["How long is the film?", "It's two hours long.", "Film qancha davom etadi? — Ikki soat."],
            ["How long are you staying in London?", "For a week.", "Londonda qancha qolasiz? — Bir hafta."],
            ["How long is the lesson?", "An hour and a half.", "Dars qancha davom etadi? — Bir yarim soat."],
          ],
          speak: [0, 1],
        },
        { t: "tip", tone: "good", md: "**It takes + vaqt + to + fe'l** — eng kerakli ibora! *It takes ten minutes to walk to the metro.* Kimga — **me / him / her** bilan: *It takes **me** an hour.* O'tgan zamonda: *It **took** three hours.*" },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["How long does it take?", "It takes twenty minutes.", "I'm staying for two weeks."] },
          bad: { title: "Xato", items: ["How long it takes?", "It need twenty minutes.", "I'm staying during two weeks."] },
        },
        { t: "tip", tone: "info", md: "**hour** — *h* o'qilmaydi: **\"auə\"**. Shuning uchun **an hour** (a emas!): *It takes **an hour**.*" },
        { t: "check", ex: { k: "choice", q: "\"Toshkentdan Samarqandga poyezdda borish ikki soat oladi.\"", opts: ["It takes two hours to go from Tashkent to Samarkand by train.", "It is take two hours to go from Tashkent to Samarkand by train.", "It takes two hours go from Tashkent to Samarkand by train.", "It needs two hours for going from Tashkent to Samarkand by train."], a: 0, why: "**It takes + vaqt + to + fe'l**." } },
        { t: "check", ex: { k: "fill", q: "It takes me ___ hour to get home.", a: ["an"], uz: "Uyga yetib borishim bir soat oladi.", why: "**hour** — *h* o'qilmaydi → **an hour**." } },
      ],
    },
    {
      title: "How far? — qancha uzoq",
      blocks: [
        { t: "p", md: "Masofa haqida so'rash uchun **How far** + **is it** (yoki *is + joy*):" },
        {
          t: "examples", items: [
            { en: "How far is it from Tashkent to Samarkand? — It's about 300 kilometres.", uz: "Toshkentdan Samarqandgacha qancha masofa? — Taxminan 300 kilometr." },
            { en: "How far is the station? — It's two kilometres away.", uz: "Vokzal qancha uzoqlikda? — Ikki kilometr narida." },
            { en: "How far is your office from here? — It's a ten-minute walk.", uz: "Ofisingiz bu yerdan qancha uzoq? — Piyoda o'n daqiqalik yo'l." },
            { en: "Is it far? — No, it's very near. / Yes, it's quite far.", uz: "Uzoqmi? — Yo'q, juda yaqin. / Ha, ancha uzoq." },
          ],
        },
        { t: "tip", tone: "warn", md: "Savolda **it** ni unutmang: ✅ *How far **is it**?* ❌ *How far is?* Ingliz gapida ega bo'lishi shart — hatto \"ma'nosiz\" **it** bo'lsa ham." },
        { t: "tip", tone: "info", md: "**away** = \"narida, uzoqlikda\": *It's 5 km **away**.* **on foot** = piyoda (*I go to work on foot*), **by bus / by car / by metro** — transport bilan (the siz!)." },
        { t: "check", ex: { k: "order", uz: "Aeroport bu yerdan qancha uzoqlikda?", words: ["How", "far", "is", "the", "airport", "from", "here?"], extra: ["long", "does"] } },
      ],
    },
    {
      title: "How long yoki How far? Barchasini aralashtiramiz",
      blocks: [
        { t: "p", md: "Bir mavzu haqida turli savollar berish mumkin — har birining javobi boshqa:" },
        {
          t: "table", head: ["Savol", "Javob"],
          rows: [
            ["How far is your work?", "It's eight kilometres away."],
            ["How long does it take to get there?", "About half an hour by bus."],
            ["How often do you go there?", "Five days a week."],
            ["How do you get there?", "By bus. / On foot."],
            ["How much is the bus ticket?", "It's 2,000 sums."],
          ],
          speak: [0, 1],
        },
        { t: "tip", tone: "warn", md: "**How far** — kilometr, metr (masofa). **How long** — daqiqa, soat (vaqt). O'zbekchada ikkalasi ham *qancha* deb so'ralishi mumkin, shuning uchun adashish oson!" },
        { t: "check", ex: { k: "choice", q: "Javob: **About ten minutes.** Savol qaysi edi?", opts: ["How far is the shop?", "How long does it take to get to the shop?", "How often do you go to the shop?", "How many shops are there?"], a: 1, why: "Daqiqa — vaqt → **How long does it take…?**" } },
        { t: "check", ex: { k: "choice", q: "Javob: **Every Saturday.** Savol qaysi edi?", opts: ["How often do you play football?", "How long do you play football?", "How far do you play football?", "How well do you play football?"], a: 0, why: "Takrorlanish → **How often?**" } },
      ],
    },
    {
      title: "O'qing: Ishga yo'l",
      blocks: [
        {
          t: "text", title: "Getting to work in Tashkent",
          en: "Akmal is a programmer. He lives in Yunusabad, and his office is in the city centre. It's about twelve kilometres away.\nHe goes to work five days a week. Usually he takes the metro. He walks to the station — it takes him ten minutes on foot — and then the journey by metro takes twenty-five minutes. When there's a lot of traffic, the bus takes over an hour, so he never takes the bus in the morning!\nOnce a month Akmal works from home. And how often does he drive? Almost never. \"Parking in the centre is a nightmare,\" he says. \"The metro is fast, cheap and beautiful.\"",
          uz: "Akmal — dasturchi. U Yunusobodda yashaydi, ofisi esa shahar markazida. Taxminan o'n ikki kilometr narida.\nU haftada besh kun ishga boradi. Odatda metroda yuradi. Bekatgacha piyoda boradi — bu unga o'n daqiqa vaqt oladi — keyin metroda yo'l yigirma besh daqiqa davom etadi. Tirbandlik ko'p bo'lsa, avtobusda bir soatdan ko'proq vaqt ketadi, shuning uchun u ertalab hech qachon avtobusga chiqmaydi!\nOyda bir marta Akmal uydan ishlaydi. Mashina haydashi qanchalik tez-tez? Deyarli hech qachon. \"Markazda mashina qo'yish — dahshat,\" deydi u. \"Metro tez, arzon va chiroyli.\"",
        },
        { t: "check", ex: { k: "choice", q: "How long does the metro journey take?", opts: ["ten minutes", "twenty-five minutes", "over an hour", "twelve minutes"], a: 1, why: "*the journey by metro takes **twenty-five minutes**.*" } },
        { t: "check", ex: { k: "tf", q: "Akmal works from home once a week.", a: false, why: "*Once **a month** Akmal works from home.*" } },
      ],
    },
    {
      title: "Dialog: Yangi hamkasb bilan",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Feruza", en: "So, Mark, how long are you staying in Uzbekistan?", uz: "Xo'sh, Mark, O'zbekistonda qancha qolasiz?" },
            { who: "Mark", en: "For six months. I'm working on a project here.", uz: "Olti oy. Bu yerda loyiha ustida ishlayapman." },
            { who: "Feruza", en: "Great! How far is your flat from the office?", uz: "Zo'r! Kvartirangiz ofisdan qancha uzoqlikda?" },
            { who: "Mark", en: "Not far. It's about two kilometres away, so I come on foot.", uz: "Uzoq emas. Taxminan ikki kilometr narida, shuning uchun piyoda kelaman." },
            { who: "Feruza", en: "How long does it take?", uz: "Qancha vaqt oladi?" },
            { who: "Mark", en: "About twenty-five minutes. It's good exercise!", uz: "Taxminan yigirma besh daqiqa. Yaxshi mashq!" },
            { who: "Feruza", en: "And how often do you have Uzbek lessons?", uz: "O'zbek tili darslaringiz qanchalik tez-tez bo'ladi?" },
            { who: "Mark", en: "Twice a week. But how well do I speak? Not very well yet!", uz: "Haftada ikki marta. Lekin qanchalik yaxshi gapiraman? Hali unchalik emas!" },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Mark goes to work by bus.", a: false, why: "*It's about two kilometres away, so I come **on foot**.*" } },
      ],
    },
  ],
  words: [
    { en: "how long", uz: "qancha vaqt", ipa: "haʊ ˈlɒŋ", pos: "phrase", ex: "How long is the film?", exUz: "Film qancha davom etadi?" },
    { en: "how far", uz: "qancha uzoq (masofa)", ipa: "haʊ ˈfɑː", pos: "phrase", ex: "How far is the station?", exUz: "Vokzal qancha uzoqlikda?" },
    { en: "it takes", uz: "(vaqt) oladi, ketadi", ipa: "ɪt ˈteɪks", pos: "phrase", ex: "It takes ten minutes to walk there.", exUz: "U yerga piyoda borish o'n daqiqa oladi." },
    { en: "kilometre", uz: "kilometr", ipa: "ˈkɪl.əˌmiː.tə", pos: "noun", ex: "It's five kilometres from here.", exUz: "Bu yerdan besh kilometr." },
    { en: "hour", uz: "soat (60 daqiqa)", ipa: "ˈaʊ.ə", pos: "noun", ex: "The lesson is an hour long.", exUz: "Dars bir soat davom etadi." },
    { en: "journey", uz: "yo'l, safar (bir joydan boshqasiga)", ipa: "ˈdʒɜː.ni", pos: "noun", ex: "The journey takes two hours.", exUz: "Yo'l ikki soat oladi." },
    { en: "on foot", uz: "piyoda", ipa: "ɒn ˈfʊt", pos: "phrase", ex: "I go to school on foot.", exUz: "Maktabga piyoda boraman." },
    { en: "three times", uz: "uch marta", ipa: "θriː ˈtaɪmz", pos: "phrase", ex: "I go swimming three times a week.", exUz: "Haftada uch marta suzishga boraman." },
    { en: "how tall", uz: "bo'yi qancha", ipa: "haʊ ˈtɔːl", pos: "phrase", ex: "How tall is your brother?", exUz: "Akangizning bo'yi qancha?" },
    { en: "away", uz: "narida, uzoqlikda", ipa: "əˈweɪ", pos: "adverb", ex: "The beach is 2 km away.", exUz: "Plyaj 2 km narida." },
  ],
  practice: [
    { k: "match", pairs: [["How often?", "Twice a week."], ["How long?", "Two hours."], ["How far?", "Ten kilometres."], ["How tall?", "1 metre 75."], ["How much?", "5,000 sums."]] },
    { k: "match", pairs: [["once a week", "haftada bir marta"], ["twice a month", "oyda ikki marta"], ["three times a year", "yiliga uch marta"], ["on foot", "piyoda"], ["away", "narida"]] },
    { k: "listen", say: "It takes an hour.", opts: ["It takes an hour.", "It takes our car.", "It takes a hour."], a: 0, why: "**an hour** — *h* o'qilmaydi: \"ən auə\"." },
    { k: "listen", say: "How far is it?", opts: ["How far is it?", "How fast is it?", "How long is it?"], a: 0 },
    { k: "choice", q: "To'g'ri savolni tanlang:", opts: ["How often you go swimming?", "How often do you go swimming?", "How often are you go swimming?", "How often does you go swimming?"], a: 1, why: "**How often + do + you + fe'l**." },
    { k: "choice", q: "Javob: **It's about 50 kilometres away.** Savol:", opts: ["How long is it?", "How far is it?", "How often is it?", "How much is it?"], a: 1, why: "Kilometr — masofa → **How far?**" },
    { k: "fill", q: "How ___ does it take to get to the airport? — About forty minutes.", a: ["long"], uz: "Aeroportga borish qancha vaqt oladi? — Taxminan qirq daqiqa." },
    { k: "fill", q: "It ___ me twenty minutes to walk to work.", a: ["takes"], uz: "Ishga piyoda borish menga yigirma daqiqa oladi.", why: "**It takes + me + vaqt**." },
    { k: "fill", q: "I visit my grandparents ___ a week, on Sundays.", a: ["once"], uz: "Bobom va buvimnikiga haftada bir marta, yakshanba kunlari boraman.", why: "Bir marta → **once**." },
    { k: "fill", q: "How ___ is your sister? — She's 1 metre 65.", a: ["tall"], uz: "Opangizning bo'yi qancha? — 1 metr 65." },
    { k: "tf", q: "**How far is?** — to'liq va to'g'ri savol.", a: false, why: "Ega kerak: *How far **is it**?*" },
    { k: "tf", q: "**I go to the gym three times a week.** — to'g'ri gap.", a: true, why: "Aniq ifoda gap oxirida: **three times a week**." },
    { k: "order", uz: "Ishga borish sizga qancha vaqt oladi?", words: ["How", "long", "does", "it", "take", "you", "to", "get", "to", "work?"], extra: ["far", "is"] },
    { k: "order", uz: "U (she) oyda ikki marta ota-onasini ko'rgani boradi.", words: ["She", "visits", "her", "parents", "twice", "a", "month"], extra: ["in", "visit"] },
    { k: "translate", uz: "Vokzal qancha uzoqlikda?", a: ["How far is the station?", "How far is the train station?", "How far is the railway station?", "How far away is the station?", "How far away is the train station?"], why: "Masofa → **How far is…?**" },
    { k: "speak", say: "How often do you go to the gym? — Three times a week.", uz: "Sport zalga qanchalik tez-tez borasiz? — Haftada uch marta." },
  ],
  quiz: [
    { k: "choice", q: "\"Film qancha davom etadi?\"", opts: ["How far is the film?", "How long is the film?", "How often is the film?", "How long the film is?"], a: 1, why: "Vaqt → **How long is the film?**" },
    { k: "choice", q: "To'g'ri gapni tanlang:", opts: ["I go to the cinema twice in a month.", "I go to the cinema twice a month.", "I go twice a month to the cinema in.", "I twice a month in go to the cinema."], a: 1, why: "**twice a month**, gap oxirida." },
    { k: "fill", q: "How ___ do you check your email? — Every hour!", a: ["often"], uz: "Pochtangizni qanchalik tez-tez tekshirasiz? — Har soat!" },
    { k: "fill", q: "How ___ is the bus stop? — It's only 200 metres away.", a: ["far"], uz: "Avtobus bekati qancha uzoqlikda? — Atigi 200 metr narida." },
    { k: "fill", q: "The flight to London takes about seven ___. (soat)", a: ["hours"], uz: "Londonga parvoz taxminan yetti soat davom etadi." },
    { k: "listen", say: "I go there three times a week.", opts: ["I go there three times a week.", "I go there three times a year.", "I go there free time a week."], a: 0 },
    { k: "tf", q: "**It takes about 2 kilometres.** — to'g'ri gap.", a: false, why: "**It takes** — vaqt bilan (*It takes 20 minutes*). Masofa: *It's about 2 kilometres.*" },
    { k: "order", uz: "Toshkentdan Buxorogacha qancha masofa?", words: ["How", "far", "is", "it", "from", "Tashkent", "to", "Bukhara?"], extra: ["long", "does"] },
    { k: "translate", uz: "Men ishga piyoda boraman.", a: ["I go to work on foot.", "I walk to work.", "I get to work on foot."], why: "**on foot** — piyoda (yoki *I walk to work*)." },
    { k: "choice", q: "Matnda (Getting to work in Tashkent) Akmal qanchalik tez-tez mashina haydaydi?", opts: ["every day", "once a month", "five days a week", "almost never"], a: 3, why: "*And how often does he drive? **Almost never.***" },
  ],
  summary: [
    "**How + sifat/ravish + do/does/is…?**: *How often, How long, How far, How tall, How fast, How well*.",
    "**How often?** — *once / twice / three times **a** week / month / year*, gap oxirida.",
    "**How long?** — vaqt: **It takes (me) + vaqt + to + fe'l**; *It's two hours long*; *for a week*.",
    "**How far?** — masofa: *It's 5 kilometres **away***. ❌ *How far is?* — **it** shart.",
  ],
  homework: "Ishga yoki o'qishga yo'lingiz haqida Akmalnikidek matn yozing (6–8 gap): qancha uzoq, qancha vaqt oladi, nima bilan borasiz, haftada necha marta. Keyin do'stingizga 6 ta savol tuzing (*How often…? How long…? How far…?*) va javoblarini yozib oling.",
};

export default lesson;
