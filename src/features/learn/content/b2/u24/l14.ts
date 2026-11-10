import type { Lesson } from '../../../types';

// Mini lesson (skill): listening and speaking about change. A podcast (Emma), a dialogue (Nilufar and Karim) and a two-minute talk.
const lesson: Lesson = {
  id: 'u24-l14',
  title: 'Listening and speaking: a talk about change',
  titleUz: "Tinglash va gapirish: o'zgarish haqida podkast va 2 daqiqalik nutq",
  mini: true,
  kind: 'skill',
  goal: "O'zgarish haqidagi **podkastni tinglab** asosiy fikrni va tafsilotlarni topasiz, **signal so'zlarga** (*used to, these days, as a result*) e'tibor berasiz va «Mening shahrim qanday o'zgargan» mavzusida **1-2 daqiqalik nutqni** reja bilan aytasiz.",
  slides: [
    {
      title: "Tinglang: podkast",
      blocks: [
        { t: 'p', md: "Avval matnni **tinglang** (▶), keyin savollarga javob bering. Birinchi tinglashda faqat **asosiy fikr** (*gist*): *Kim gapiryapti? Nima haqida? O'zgarish yaxshimi yoki yomonmi?* Ikkinchi marta — tafsilotlar." },
        { t: 'text', title: 'How my town has changed', voice: 'emma', en: "Hello and welcome to my podcast. Today I'm talking about my home town, Eastbury, which has changed enormously over the last two decades. When I was a child, about twenty years ago, there was only one main road, and the market used to close at noon. People would walk to work, because nearly everyone lived close to the centre. These days, thousands of residents commute to the capital every morning, and traffic congestion has become a daily problem. The old factory area stood empty for years, but a regeneration project has turned it into a park and a row of small cafés. Some traditions have faded away, such as the Friday cattle fair. Next year, the council will be opening a tram line, so I hope the roads will be calmer by this time next year.", uz: "Salom, mening podkastimga xush kelibsiz. Bugun o'z shahrim Istberi haqida gapiraman, u so'nggi ikki o'n yillikda juda o'zgardi. Men bola bo'lganimda, taxminan yigirma yil oldin, faqat bitta asosiy yo'l bor edi va bozor tushda yopilar edi. Odamlar ishga piyoda borishardi, chunki deyarli hamma markazga yaqin yashardi. Hozir minglab aholi har ertalab poytaxtga qatnaydi va tirbandlik kundalik muammoga aylandi. Eski zavod hududi yillar davomida bo'sh turdi, lekin qayta tiklash loyihasi uni bog'ga va bir qator kichik kafelarga aylantirdi. Ba'zi an'analar, masalan juma kungi mol bozori, yo'qolib ketdi. Kelasi yil kengash tramvay liniyasini ochadi, shuning uchun kelasi yil shu paytda yo'llar tinchroq bo'ladi deb umid qilaman." },
        { t: 'check', ex: { k: 'choice', q: "What is the podcast mainly about?", opts: ["How a town has changed over twenty years", "A holiday in the capital", "How to open a café", "The history of trams"], a: 0, why: "Asosiy fikr: *my home town … has changed enormously over the last two decades.*" } },
        { t: 'check', ex: { k: 'tf', q: "In the past, the town had several main roads.", a: false, why: "*There was only one main road.*" } },
        { t: 'check', ex: { k: 'listen', say: 'Thousands of residents commute to the capital every morning.', opts: ['Thousands of residents commute to the capital every morning.', 'Thousands of residents commuted to the capital every morning.', 'Hundreds of residents commute to the capital every morning.', 'Thousands of residents are commuting to the capital this morning.'], a: 0 } },
      ],
    },
    {
      title: "Signal so'zlar va iboralar",
      blocks: [
        { t: 'p', md: "O'zgarish haqidagi gaplarda **signal so'zlar** zamon va fikr yo'nalishini oldindan aytib beradi. Ularni eshitsangiz, nimani kutish kerakligini bilasiz." },
        { t: 'table', head: ['Signal', "Nimani bildiradi", 'Misol'], speak: [2], rows: [
          ['used to / would', "o'tmishdagi odat", "The market used to close at noon."],
          ['ago / in the past', "o'tmish", "Twenty years ago there was one road."],
          ['these days / now', "hozirgi holat", "These days, thousands commute."],
          ['has become / has turned into', "natija, o'zgarish", "The area has turned into a park."],
          ['as a result / so', "sabab-oqibat", "As a result, traffic has increased."],
          ['by this time next year', "kelajak", "By this time next year the roads will be calmer."],
        ] },
        { t: 'tip', tone: 'info', md: "Tinglashda raqamlarni **to'g'ri yozing**: *fifteen* (15) va *fifty* (50) ni urg'u orqali ajrating: *fifTEEN* va *FIFty*. Imtihonda avval savollarni o'qib, qaysi ma'lumot kerakligini oldindan bilib oling." },
        { t: 'check', ex: { k: 'fill', q: "Some old traditions have slowly ___ away.", a: ['faded'], uz: "Ba'zi eski an'analar asta-sekin yo'qolib ketdi.", hint: 'fade', why: "**fade away** — asta-sekin yo'qolmoq; Present Perfect: *have faded away*." } },
        { t: 'check', ex: { k: 'choice', q: "Which problem does the speaker mention today?", opts: ["Traffic congestion", "A lack of schools", "Too many factories", "No public park"], a: 0, why: "*Traffic congestion has become a daily problem.*" } },
      ],
    },
    {
      title: "Tinglang: do'stlar suhbati",
      blocks: [
        { t: 'dialog', lines: [
          { who: 'Nilufar', en: "Karim, you grew up near the old market, didn't you? Has it changed much?", uz: "Karim, sen eski bozor yonida katta bo'lgansan, shundaymi? U ko'p o'zgardimi?" },
          { who: 'Karim', en: "Enormously. When I was a boy, the street used to be full of small workshops, and we would play football in the road.", uz: "Juda ko'p. Bolaligimda ko'cha kichik ustaxonalarga to'la edi va biz yo'lda futbol o'ynardik." },
          { who: 'Nilufar', en: "And now?", uz: "Hozir-chi?" },
          { who: 'Karim', en: "Now it's all cafés and a car park. The workshops faded away about ten years ago.", uz: "Hozir hammasi kafe va avtoturargoh. Ustaxonalar taxminan o'n yil oldin yo'qolib ketdi." },
          { who: 'Nilufar', en: "Do you miss it?", uz: "Sog'inasanmi?" },
          { who: 'Karim', en: "A bit. But the traffic is better since they closed the street to cars. By this time next year, they'll have finished the new library, too.", uz: "Ozgina. Lekin ko'chani mashinalarga yopganlaridan beri tirbandlik yaxshi. Kelasi yil shu paytga kelib, yangi kutubxonani ham tugatgan bo'lishadi." },
          { who: 'Nilufar', en: "I'm sure it will be busy. I'll be taking my students there every week.", uz: "Ishonamanki, u gavjum bo'ladi. Talabalarimni har hafta o'sha yerga olib boraman." },
        ] },
        { t: 'check', ex: { k: 'choice', q: "What did the boys use to do in the road?", opts: ["Play football", "Repair cars", "Sell bread", "Ride bikes to work"], a: 0, why: "*We would play football in the road.*" } },
        { t: 'check', ex: { k: 'tf', q: "Karim thinks the traffic is worse now.", a: false, why: "*The traffic is better since they closed the street to cars.*" } },
        { t: 'check', ex: { k: 'choice', q: "What will have happened by this time next year?", opts: ["The new library will have been finished.", "The workshops will have reopened.", "The street will have been opened to cars.", "Nilufar will have moved away."], a: 0, why: "*By this time next year, they'll have finished the new library.*" } },
      ],
    },
    {
      title: "Gapiring: 2 daqiqalik nutq",
      blocks: [
        { t: 'p', md: "«My town / my life has changed» mavzusida nutq uchun **6 bosqichli reja** tuzing. Har bosqich — 1-2 gap, jami taxminan 120–150 so'z." },
        { t: 'table', head: ['Bosqich', 'Foydali ibora'], speak: [1], rows: [
          ['1. Boshlash', "I'd like to talk about how my town has changed."],
          ['2. O\'tmish', "Ten years ago the town was much quieter. We used to…"],
          ['3. Asosiy o\'zgarish', "The biggest change is the new park. As a result, …"],
          ['4. Hozir', "These days, it has become much busier."],
          ['5. Kelajak', "By this time next year, they'll have finished…"],
          ['6. Xulosa', "To sum up, I think the change has been mostly positive."],
        ] },
        { t: 'text', title: 'A model talk', voice: 'george', en: "I'd like to talk about how my street has changed. Ten years ago it was quiet, and we used to play outside until dark. These days, there are cafés on every corner, and the pavements are always busy. The biggest change is the new cycle lane, which has made the street much safer. As a result, fewer people drive to work. Some of my old neighbours have moved away, but I have been getting to know the new ones. By this time next year, I think the council will have planted trees along the whole road. To sum up, I miss the quiet, but I believe the change has been mostly positive.", uz: "Men ko'chamiz qanday o'zgargani haqida gapirmoqchiman. O'n yil oldin u tinch edi va biz qorong'ugacha tashqarida o'ynardik. Hozir har burchakda kafe bor va yo'laklar doim gavjum. Eng katta o'zgarish — yangi velosiped yo'li, u ko'chani ancha xavfsizroq qildi. Natijada ishga mashinada boradiganlar kamaydi. Ba'zi eski qo'shnilar ko'chib ketdi, lekin men yangilarini tanishib kelyapman. Kelasi yil shu paytga kelib, kengash butun ko'cha bo'ylab daraxt ekib bo'lgan bo'ladi deb o'ylayman. Xulosa qilsam, tinchlikni sog'inaman, lekin o'zgarish asosan yaxshi bo'ldi deb ishonaman." },
        { t: 'check', ex: { k: 'choice', q: "Which phrase is best to begin a talk about change?", opts: ["I will tell about my town now.", "My town, it is big.", "I'd like to talk about how my town has changed over the last decade.", "Today I am talking in front of you for my town."], a: 2, why: "**I'd like to talk about…** — tabiiy, aniq boshlanish." } },
        { t: 'check', ex: { k: 'tf', q: "In the model talk, the new cycle lane made the street safer.", a: true, why: "*The new cycle lane … has made the street much safer.*" } },
      ],
    },
    {
      title: "Tipik xatolar (o'zbek tilidan)",
      blocks: [
        { t: 'p', md: "O'zbekcha *o'n yil oldin* so'zma-so'z *before ten years* bo'lib qoladi, *so'nggi yillarda* esa *in last years*. Inglizchada **ten years ago** va **in recent years / over the last few years** deyiladi." },
        { t: 'compare',
          good: { title: "To'g'ri", items: ["Ten years ago this street was quiet.", "The city has changed a lot in recent years.", "Over the last decade, congestion has increased."] },
          bad: { title: 'Xato', items: ["Before ten years this street was quiet.", "The city has changed a lot in last years.", "In the last decade, congestion has increase."] } },
        { t: 'check', ex: { k: 'fix', wrong: "Before ten years, this street was quiet.", a: ["Ten years ago, this street was quiet.", "This street was quiet ten years ago."], why: "O'tgan vaqt: **ten years ago** (*before* emas)." } },
        { t: 'check', ex: { k: 'fix', wrong: "The city has changed a lot in last years.", a: ["The city has changed a lot in recent years.", "The city has changed a lot in the last few years.", "The city has changed a lot over the last few years.", "The city has changed a lot over recent years."], why: "To'g'ri birikmalar: **in recent years**, **over the last few years**." } },
      ],
    },
  ],
  words: [
    { en: 'decade', uz: "o'n yillik", ipa: 'ˈdek.eɪd', pos: 'noun', ex: 'The city has changed beyond recognition in the last decade.', exUz: "Shahar so'nggi o'n yilda tanib bo'lmas darajada o'zgardi." },
    { en: 'commute', uz: "ishga qatnamoq", ipa: 'kəˈmjuːt', pos: 'verb', ex: 'She commutes forty kilometres to work every day.', exUz: "U har kuni ishga qirq kilometr qatnaydi." },
    { en: 'congestion', uz: "tirbandlik", ipa: 'kənˈdʒes.tʃən', pos: 'noun', ex: 'Traffic congestion is worst on Monday mornings.', exUz: "Tirbandlik eng ko'p dushanba ertalablari bo'ladi." },
    { en: 'regeneration', uz: "qayta tiklash (hududni)", ipa: 'rɪˌdʒen.əˈreɪ.ʃən', pos: 'noun', ex: 'The regeneration of the old docks brought new jobs.', exUz: "Eski dok hududini qayta tiklash yangi ish o'rinlari keltirdi." },
    { en: 'fade away', uz: "asta-sekin yo'qolmoq", ipa: 'feɪd əˈweɪ', pos: 'phrasal verb', ex: 'Many old crafts are fading away.', exUz: "Ko'p eski hunarlar asta-sekin yo'qolib bormoqda." },
    { en: 'podcast', uz: "podkast (audio dastur)", ipa: 'ˈpɒd.kɑːst', pos: 'noun', ex: 'I listen to a podcast on my way to work.', exUz: "Ishga ketayotib podkast tinglayman." },
  ],
  practice: [
    { k: 'match', pairs: [['decade', "o'n yillik"], ['commute', 'ishga qatnamoq'], ['congestion', 'tirbandlik'], ['regeneration', 'hududni qayta tiklash'], ['fade away', "asta-sekin yo'qolmoq"], ['podcast', 'audio dastur']] },
    { k: 'choice', q: "What is the main topic of the podcast «How my town has changed»?", opts: ["How a town has changed over twenty years", "A holiday in the capital", "How to open a café", "The history of trams"], a: 0, why: "Asosiy fikr: shaharning ikki o'n yillik o'zgarishi." },
    { k: 'tf', q: "The speaker says the town used to have several main roads.", a: false, why: "*There was only one main road.*" },
    { k: 'choice', q: "What problem does the speaker mention today?", opts: ['A lack of schools', 'Traffic congestion', 'Too many factories', 'No public park'], a: 1, why: "*Traffic congestion has become a daily problem.*" },
    { k: 'listen', say: 'Thousands of people commute to the capital every morning.', opts: ['Thousands of people commute to the capital every morning.', 'Thousands of people commuted to the capital every morning.', 'Hundreds of people commute to the capital every morning.', 'Thousands of people are commuting to the capital this morning.'], a: 0 },
    { k: 'fill', q: "Some old traditions have slowly ___ away.", a: ['faded'], hint: 'fade', uz: "Ba'zi eski an'analar asta-sekin yo'qolib ketdi.", why: "**have faded away**." },
    { k: 'order', uz: "O'n yil oldin shahar ancha tinch edi.", words: ['Ten', 'years', 'ago', 'the', 'town', 'was', 'much', 'quieter.'], extra: ['before', 'since'], why: "**ten years ago** — o'tgan vaqt." },
    { k: 'fix', wrong: "Before ten years, this street was quiet.", a: ["Ten years ago, this street was quiet.", "This street was quiet ten years ago."], why: "**ten years ago**." },
    { k: 'fix', wrong: "The city has changed a lot in last years.", a: ["The city has changed a lot in recent years.", "The city has changed a lot in the last few years.", "The city has changed a lot over the last few years.", "The city has changed a lot over recent years."], why: "**in recent years** / **over the last few years**." },
    { k: 'dictation', say: 'The council will be opening a tram line next year.', a: ['The council will be opening a tram line next year.'], uz: "Kengash kelasi yil tramvay liniyasini ochadi." },
    { k: 'translate', uz: "Minglab odam har kuni ishga qatnaydi.", a: ['Thousands of people commute every day.', 'Thousands of people commute to work every day.', 'Thousands of people commute daily.', 'Thousands of people now commute every day.'], why: "**commute** — doimiy odat: Present Simple." },
    { k: 'choice', q: "In the dialogue, what did the boys use to do in the road?", opts: ['Repair cars', 'Play football', 'Sell bread', 'Ride bikes'], a: 1, why: "*We would play football in the road.*" },
    { k: 'tf', q: "Karim thinks the traffic is worse since the street was closed to cars.", a: false, why: "*The traffic is better since they closed the street to cars.*" },
    { k: 'speak', say: 'Ten years ago my town was much quieter, but it has changed a lot.', uz: "O'n yil oldin shahrim ancha tinch edi, lekin juda o'zgarib ketdi." },
  ],
  quiz: [
    { k: 'choice', q: "According to the podcast, the old factory area stood ___ for years.", opts: ['empty', 'busy', 'open', 'noisy'], a: 0, why: "*The old factory area stood empty for years.*" },
    { k: 'fill', q: "Every morning thousands of residents ___ to the capital.", a: ['commute'], hint: 'co…', uz: "Har ertalab minglab aholi poytaxtga qatnaydi.", why: "**commute** — ishga qatnamoq." },
    { k: 'fix', wrong: "Before five years I moved to this city.", a: ["Five years ago I moved to this city.", "I moved to this city five years ago."], why: "O'tgan vaqt: **five years ago**." },
    { k: 'listen', say: 'These days, traffic congestion is a daily problem.', opts: ['These days, traffic congestion is a daily problem.', 'These days, traffic congestion was a daily problem.', 'In those days, traffic congestion is a daily problem.', 'These days, traffic congestion is not a problem.'], a: 0 },
    { k: 'tf', q: "A regeneration project means an area is being improved and brought back to life.", a: true, why: "**regeneration** — hududni qayta tiklash." },
    { k: 'choice', q: "Which sentence is the best opening for a talk about change?", opts: ["I will tell about my town now.", "My town, it is big.", "I'd like to talk about how my town has changed over the last decade.", "Today I am talking in front of you for my town."], a: 2, why: "**I'd like to talk about…** — tabiiy boshlanish." },
    { k: 'order', uz: "Kengash kelasi yil tramvay liniyasini ochadi.", words: ['The', 'council', 'will', 'be', 'opening', 'a', 'tram', 'line', 'next', 'year.'], extra: ['has', 'opened'], alt: [['Next', 'year', 'the', 'council', 'will', 'be', 'opening', 'a', 'tram', 'line.']], why: "**will be + V-ing**." },
    { k: 'translate', uz: "So'nggi o'n yilda shahar juda o'zgardi.", a: ['The town has changed a lot in the last ten years.', 'The city has changed a lot in the last ten years.', 'The town has changed a lot over the last ten years.', 'The city has changed a lot over the last ten years.', 'The town has changed a lot in the last decade.', 'The city has changed a lot in the last decade.', 'The town has changed a lot over the last decade.', 'The city has changed a lot over the last decade.'], why: "**has changed** + *in the last ten years*." },
  ],
  summary: [
    "Tinglashda avval **asosiy fikr** (gist), keyin tafsilotlar; **signal so'zlar** (*used to, these days, as a result, by this time next year*) zamonni oldindan ko'rsatadi.",
    "Nutq rejasi: **boshlash → o'tmish → asosiy o'zgarish → hozir → kelajak → xulosa** (120-150 so'z).",
    "Xatolar: *before ten years* emas → **ten years ago**; *in last years* emas → **in recent years**.",
    "Yangi so'zlar: **decade, commute, congestion, regeneration, fade away, podcast**.",
  ],
  homework: "Telefoningizga 1-2 daqiqalik nutq yozib oling: «How my town (or life) has changed». Rejadagi 6 bosqichdan foydalaning va kamida bitta *used to*, bitta *has become* va bitta *will be -ing* ishlating. Keyin tinglab, xatolarni belgilang.",
};

export default lesson;
