import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u21-l6",
  title: "Question tags and polite questions",
  titleUz: "Question tags va xushmuomala savollar (Could you tell me…?)",
  goal: "**Question tag** (*It's lovely, isn't it?*) tuzasiz va ma'nosini tushunasiz; begona odamdan **Could you tell me where the station is?** kabi xushmuomala savol bilan ma'lumot so'raysiz va so'z tartibi xatosidan qochasiz.",
  slides: [
    {
      title: "Question tag nima?",
      blocks: [
        { t: "p", md: "**Question tag** — gap oxiriga qo'shiladigan qisqa savol: *It's a nice city, **isn't it**?* O'zbekchada «…-a?», «…shunday emasmi?» deymiz. Inglizlar suhbatni davom ettirish yoki fikrni tasdiqlatish uchun uni juda ko'p ishlatadi." },
        {
          t: "table", head: ["Gap", "Tag", "Misol"], speak: [2],
          rows: [
            ["Darak (+)", "inkor tag (−)", "It's a lovely city, isn't it?"],
            ["Inkor (−)", "darak tag (+)", "You haven't been here before, have you?"],
          ],
        },
        { t: "p", md: "Tag **gapdagi yordamchi fe'l** bilan yasaladi. Yordamchi fe'l bo'lmasa, **do / does / did** olinadi:" },
        {
          t: "examples", items: [
            { en: "They live near the centre, don't they?", uz: "Ular markaz yaqinida yashaydi, to'g'rimi?", note: "Present Simple → **don't / doesn't**." },
            { en: "She visited Khiva last year, didn't she?", uz: "U o'tgan yili Xivaga borgan, a?", note: "Past Simple → **didn't**." },
            { en: "You can swim, can't you?", uz: "Suzishni bilasan, shundaymi?", note: "Modal fe'l o'zi takrorlanadi." },
            { en: "The bridge was built in 1920, wasn't it?", uz: "Ko'prik 1920-yilda qurilgan, a?", note: "Passive: **was** takrorlanadi." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "She works in a hotel, ___?", opts: ["doesn't she", "isn't she", "does she", "didn't she"], a: 0, why: "Present Simple, darak gap → inkor tag: **doesn't she**." } },
        { t: "check", ex: { k: "choice", q: "You haven't booked a room yet, ___?", opts: ["have you", "haven't you", "do you", "did you"], a: 0, why: "Inkor gap → darak tag, yordamchi fe'l **have**: **have you**." } },
      ],
    },
    {
      title: "Maxsus holatlar",
      blocks: [
        { t: "p", md: "Bir nechta qolip qoidadan chetga chiqadi. Ularni yodlab oling:" },
        {
          t: "table", head: ["Gap", "Tag", "Misol"], speak: [2],
          rows: [
            ["I am …", "aren't I?", "I'm right, aren't I?"],
            ["Let's …", "shall we?", "Let's take a taxi, shall we?"],
            ["There is / are …", "isn't there? / aren't there?", "There are a lot of tourists here, aren't there?"],
            ["Buyruq", "will you? / could you?", "Close the door, will you?"],
          ],
        },
        { t: "tip", tone: "warn", md: "*I am* uchun *amn't I* deyilmaydi. Doim **aren't I?** deymiz: *I'm late, aren't I?* Ega — doim **olmosh**: *The hotel is cheap, isn't **it**?* (*isn't the hotel* emas)." },
        { t: "compare",
          good: { title: "To'g'ri", items: ["It's a nice view, isn't it?", "I'm right, aren't I?", "Let's go, shall we?"] },
          bad: { title: "Xato", items: ["It's a nice view, is it?", "I'm right, amn't I?", "Let's go, will we?"] } },
        { t: "check", ex: { k: "fill", q: "Let's have lunch here, ___?", a: ["shall we"], why: "**Let's** dan keyin tag — **shall we?**" } },
        { t: "check", ex: { k: "fill", q: "There is a bank near here, ___?", a: ["isn't there"], why: "*There is* → inkor tag **isn't there?**" } },
      ],
    },
    {
      title: "Ohang va javob",
      blocks: [
        { t: "p", md: "Tag ning ma'nosini **ovoz ohangi** belgilaydi:" },
        {
          t: "table", head: ["Ohang", "Ma'nosi", "Misol"],
          rows: [
            ["Pasayuvchi ↘", "Men bilaman, shunchaki tasdiqlatyapman", "It's a beautiful day, isn't it?"],
            ["Ko'tariluvchi ↗", "Haqiqatan ham bilmayman, so'rayapman", "You haven't seen my keys, have you?"],
          ],
        },
        { t: "tip", tone: "info", md: "Javob **faktga** qarab beriladi, tag ga emas. *You don't like coffee, do you?* — Agar rostdan ham yoqtirmasangiz: **No, I don't.** Agar yoqtirsangiz: **Yes, I do.** O'zbekcha «yo'q, yoqtirmayman» bilan bir xil mantiq." },
        { t: "examples", items: [
          { en: "It's very hot today, isn't it? — Yes, it is. I need some water.", uz: "Bugun juda issiq, a? — Ha. Menga suv kerak." },
          { en: "You don't eat meat, do you? — No, I don't. I'm a vegetarian.", uz: "Sen go'sht yemaysan, a? — Yo'q, yemayman. Men vegetarianman." },
        ] },
        { t: "check", ex: { k: "choice", q: "\"You haven't got a pen, have you?\" Sizda qalam yo'q. Qanday javob berasiz?", opts: ["No, I haven't.", "Yes, I haven't.", "No, I have.", "Yes, I don't."], a: 0, why: "Qalam yo'q → **No, I haven't.** Javob fe'l bilan mos." } },
      ],
    },
    {
      title: "Xushmuomala (indirect) savollar",
      blocks: [
        { t: "p", md: "Begonadan yo'l yoki vaqtni so'rasangiz, *Where is the station?* deyish biroz qo'pol eshitiladi. Xushmuomala variant: **Could you tell me where the station is?** Bu savolda **so'z tartibi gapniki** bo'ladi." },
        {
          t: "table", head: ["To'g'ridan-to'g'ri savol", "Xushmuomala savol"], speak: [1],
          rows: [
            ["Where is the station?", "Could you tell me where the station is?"],
            ["What time does the museum open?", "Do you know what time the museum opens?"],
            ["How much does this ticket cost?", "Could you tell me how much this ticket costs?"],
            ["Is there a bank near here?", "Could you tell me if there is a bank near here?"],
          ],
        },
        { t: "tip", tone: "warn", md: "Ikkita qoida: 1) so'roq so'zidan keyin **ega + fe'l** tartibi (*where the station **is***), **do / does / did kerak emas**. 2) Ha/yo'q savolida **if** yoki **whether** qo'shiladi (*if there is…*)." },
        { t: "compare",
          good: { title: "To'g'ri", items: ["Could you tell me where the station is?", "Do you know what time it opens?", "Could you tell me if the bus stops here?"] },
          bad: { title: "Xato", items: ["Could you tell me where is the station?", "Do you know what time does it open?", "Could you tell me does the bus stop here?"] } },
        { t: "check", ex: { k: "choice", q: "Qaysi savol to'g'ri?", opts: ["Do you know where the bank is?", "Do you know where is the bank?", "Do you know where does the bank?", "Do you know where the bank?"], a: 0, why: "So'roq so'zidan keyin gap tartibi: **where the bank is**." } },
        { t: "check", ex: { k: "fix", wrong: "Could you tell me what time does the shop close?", a: ["Could you tell me what time the shop closes?"], why: "Xushmuomala savolda **does** tushadi, fe'l esa **closes** bo'ladi." } },
      ],
    },
    {
      title: "Yana xushmuomala qoliplar",
      blocks: [
        { t: "p", md: "Boshqa foydali qoliplar ham bor. Ularni ham so'z tartibi qoidasi bilan ishlating:" },
        {
          t: "examples", items: [
            { en: "Excuse me, could you tell me how to get to the museum?", uz: "Kechirasiz, muzeyga qanday borishni ayta olasizmi?", note: "**how to + fe'l** ham ishlatiladi." },
            { en: "I was wondering if you could help me with my luggage.", uz: "Yukimga yordam bera olasizmi, deb o'ylagan edim.", note: "Bu gap — savol belgisiz, juda xushmuomala." },
            { en: "Would you mind telling me the time?", uz: "Soat necha ekanini ayta olasizmi?", note: "**Would you mind + -ing**." },
            { en: "I'd like to know whether the hotel has a swimming pool.", uz: "Mehmonxonada suzish havzasi bor-yo'qligini bilmoqchi edim.", note: "**whether** = **if**." },
          ],
        },
        { t: "tip", tone: "good", md: "**Could** — **can** dan xushmuomalaroq. Begonaga: *Could you…?*, do'stga: *Can you…?* Boshida doim **Excuse me** deng — bu inglizlar uchun juda muhim." },
        { t: "check", ex: { k: "fill", q: "Excuse me, could you tell me ___ this train stops at Oxford?", a: ["if", "whether"], why: "Ha/yo'q savol → **if** yoki **whether**." } },
      ],
    },
    {
      title: "Dialog: ko'chada",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Tom", en: "Excuse me, could you tell me where the tourist office is?", uz: "Kechirasiz, turistik ofis qayerda ekanini ayta olasizmi?" },
            { who: "Nilufar", en: "Yes, of course. It's next to the post office, behind the market.", uz: "Ha, albatta. U pochta yonida, bozor orqasida." },
            { who: "Tom", en: "Thank you. Do you know what time it opens?", uz: "Rahmat. U nechada ochilishini bilasizmi?" },
            { who: "Nilufar", en: "I think it opens at nine. It's a lovely old city, isn't it?", uz: "Menimcha, to'qqizda ochiladi. Bu go'zal qadimiy shahar, a?" },
            { who: "Tom", en: "It is. I haven't seen many places yet, but I'm having a great time.", uz: "Ha. Hali ko'p joyni ko'rmadim, lekin vaqtni zo'r o'tkazyapman." },
            { who: "Nilufar", en: "You aren't staying long, are you?", uz: "Uzoq qolmaysiz, a?" },
            { who: "Tom", en: "No, I'm not. Just until Sunday.", uz: "Yo'q. Faqat yakshanbagacha." },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Tom asks the question in a polite way.", a: true, why: "U *Excuse me, could you tell me where…?* deydi — xushmuomala qolip." } },
        { t: "check", ex: { k: "choice", q: "Nilufar says: \"You aren't staying long, are you?\" What does Tom answer?", opts: ["No, I'm not.", "Yes, I'm not.", "No, I am.", "Yes, I aren't."], a: 0, why: "Uzoq qolmaydi → **No, I'm not.**" } },
      ],
    },
  ],
  words: [
    { en: "directions", uz: "yo'l ko'rsatma", ipa: "dɪˈrek.ʃənz", pos: "noun", ex: "Could you give me directions to the station?", exUz: "Bekatga yo'l ko'rsatib bera olasizmi?" },
    { en: "timetable", uz: "qatnov jadvali", ipa: "ˈtaɪmˌteɪ.bəl", pos: "noun", ex: "The bus timetable is on the wall.", exUz: "Avtobus jadvali devorda osilgan." },
    { en: "fare", uz: "yo'l haqi", ipa: "feər", pos: "noun", ex: "The train fare is not expensive.", exUz: "Poyezd yo'l haqi qimmat emas." },
    { en: "reception", uz: "qabulxona", ipa: "rɪˈsep.ʃən", pos: "noun", ex: "Please ask at reception for a map.", exUz: "Xarita uchun qabulxonadan so'rang." },
    { en: "booking", uz: "band qilish, buyurtma", ipa: "ˈbʊk.ɪŋ", pos: "noun", ex: "I'd like to change my booking.", exUz: "Buyurtmamni o'zgartirmoqchi edim." },
    { en: "platform", uz: "perron", ipa: "ˈplæt.fɔːm", pos: "noun", ex: "The train leaves from platform four.", exUz: "Poyezd to'rtinchi perrondan jo'naydi." },
    { en: "queue", uz: "navbat", ipa: "kjuː", pos: "noun", ex: "There was a long queue at the ticket office.", exUz: "Chipta kassasida uzun navbat bor edi." },
    { en: "refund", uz: "pulni qaytarish", ipa: "ˈriː.fʌnd", pos: "noun", ex: "You can ask for a refund if the trip is cancelled.", exUz: "Safar bekor qilinsa, pulni qaytarishni so'rashingiz mumkin." },
    { en: "opening hours", uz: "ish vaqti", ipa: "ˈəʊ.pən.ɪŋ ˌaʊəz", pos: "phrase", ex: "What are the opening hours of the museum?", exUz: "Muzeyning ish vaqti qanday?" },
    { en: "wonder", uz: "qiziqmoq, bilishni xohlamoq", ipa: "ˈwʌn.dər", pos: "verb", ex: "I wonder if there is a cheaper hotel.", exUz: "Arzonroq mehmonxona bor-yo'qligi qiziq." },
  ],
  practice: [
    { k: "choice", q: "**It's a beautiful square, ___?**", opts: ["isn't it", "is it", "doesn't it", "isn't there"], a: 0, why: "Darak gap, **is** → inkor tag: **isn't it**." },
    { k: "choice", q: "**They didn't enjoy the tour, ___?**", opts: ["did they", "didn't they", "do they", "were they"], a: 0, why: "Inkor gap → darak tag, Past Simple: **did they**." },
    { k: "choice", q: "**Let's visit the castle, ___?**", opts: ["shall we", "will we", "don't we", "let us"], a: 0, why: "**Let's** → **shall we?**" },
    { k: "fill", q: "You can speak German, ___?", a: ["can't you"], why: "Modal **can** takrorlanadi: **can't you**." },
    { k: "fill", q: "I'm in the right queue, ___?", a: ["aren't I"], why: "**I am** dan keyin **aren't I?**" },
    { k: "fill", q: "The hotel was built in 1900, ___?", a: ["wasn't it"], why: "Passive, **was** → **wasn't it?**" },
    { k: "fill", q: "Could you tell me ___ the nearest bank is?", a: ["where"], uz: "Eng yaqin bank qayerda ekanini ayta olasizmi?", why: "So'roq so'zi **where**, keyin gap tartibi." },
    { k: "fill", q: "Do you know ___ the shop has a cash machine?", a: ["if", "whether"], why: "Ha/yo'q savolda **if** yoki **whether**." },
    { k: "order", uz: "Muzey nechada ochilishini ayta olasizmi?", words: ["Could", "you", "tell", "me", "what", "time", "the", "museum", "opens?"], extra: ["does", "did"], why: "So'roq so'zidan keyin gap tartibi; **does** kerak emas." },
    { k: "order", uz: "Bekat qayerda ekanini bilasizmi?", words: ["Do", "you", "know", "where", "the", "station", "is?"], extra: ["does", "are"], why: "**where the station is** — ega + fe'l." },
    { k: "translate", uz: "Kechirasiz, bu poyezd Oksfordga borishini ayta olasizmi?", a: ["Excuse me, could you tell me if this train goes to Oxford?", "Excuse me, could you tell me whether this train goes to Oxford?"], why: "Xushmuomala savol: **could you tell me if …**" },
    { k: "tf", q: "**Could you tell me where is the station?** — bu gap to'g'ri.", a: false, why: "To'g'risi: *where the station is*." },
    { k: "listen", say: "Do you know what time the museum closes?", opts: ["Do you know what time the museum closes?", "What time does the museum close?", "Do you know where the museum is?"], a: 0 },
    { k: "dictation", say: "It's a lovely old city, isn't it?", uz: "Bu go'zal qadimiy shahar, a?" },
    { k: "fix", wrong: "Do you know what time does the bus leave?", a: ["Do you know what time the bus leaves?"], hint: "Xushmuomala savolda do/does ishlatilmaydi", why: "So'roq so'zidan keyin gap tartibi: *the bus leaves*." },
    { k: "speak", say: "Excuse me, could you tell me where the nearest bank is?", uz: "Kechirasiz, eng yaqin bank qayerda ekanini ayta olasizmi?" },
  ],
  quiz: [
    { k: "choice", q: "**You haven't been to Bukhara, ___?**", opts: ["have you", "haven't you", "did you", "are you"], a: 0, why: "Inkor gap → darak tag: **have you**." },
    { k: "choice", q: "**She lives near the station, ___?**", opts: ["doesn't she", "isn't she", "does she", "don't she"], a: 0, why: "Present Simple, 3-shaxs → **doesn't she**." },
    { k: "choice", q: "Qaysi savol to'g'ri?", opts: ["Could you tell me how much it costs?", "Could you tell me how much does it cost?", "Could you tell me how much costs it?", "Could you tell me how much it cost does?"], a: 0, why: "Xushmuomala savol: **how much it costs**." },
    { k: "fill", q: "There are no buses on Sundays, ___?", a: ["are there"], why: "Inkor *There are no…* → darak tag **are there?**" },
    { k: "fill", q: "Excuse me, could you tell me ___ I can buy a ticket?", a: ["where"], why: "So'roq so'zi **where** + ega + fe'l." },
    { k: "fill", q: "I was ___ if you could recommend a good restaurant.", a: ["wondering"], why: "Xushmuomala qolip: **I was wondering if…**" },
    { k: "listen", say: "Could you tell me if there is a pharmacy near here?", opts: ["Could you tell me if there is a pharmacy near here?", "Could you tell me where the pharmacy is?", "Is there a pharmacy near here?"], a: 0 },
    { k: "tf", q: "**Let's go, will we?** — bu to'g'ri question tag.", a: false, why: "To'g'risi: *Let's go, shall we?*" },
    { k: "fix", wrong: "Could you tell me where is the post office?", a: ["Could you tell me where the post office is?"], why: "Gap tartibi: **where the post office is**." },
    { k: "order", uz: "Bugun yomg'ir yog'ayapti, a?", words: ["It's", "raining", "today,", "isn't", "it?"], extra: ["doesn't", "is"], alt: [["It", "is", "raining", "today,", "isn't", "it?"]], why: "**It's raining** → tag **isn't it?**" },
  ],
  summary: [
    "**Question tag**: darak gap → inkor tag, inkor gap → darak tag. Tag gapdagi yordamchi fe'l bilan: *It's nice, isn't it? They live here, don't they?*",
    "Maxsus: **I am → aren't I?**, **Let's → shall we?**, **There is → isn't there?**. Ega doim olmosh bo'ladi.",
    "Pasayuvchi ohang — tasdiqlatish, ko'tariluvchi ohang — haqiqiy savol. Javob faktga qarab: *No, I don't* / *Yes, I do*.",
    "Xushmuomala savol: **Could you tell me where the station is?** — so'roq so'zidan keyin **gap tartibi**, **do / does / did yo'q**.",
    "Ha/yo'q savolda **if** yoki **whether**: *Do you know if the museum is open?* Boshida **Excuse me** deng.",
  ],
  homework: "Sayohatda begonadan so'rashingiz mumkin bo'lgan 6 ta xushmuomala savol yozing (yo'l, vaqt, narx, jadval haqida). Keyin do'stingiz haqida 4 ta fikr aytib, oxiriga question tag qo'shing (*You like football, don't you?*).",
};

export default lesson;
