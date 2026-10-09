import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u17-l4",
  title: "Technology",
  titleUz: "Texnologiya va internet",
  goal: "Telefon, kompyuter va internet haqidagi kundalik so'zlarni bilasiz (**battery, screen, password, download, log in**), texnik muammoni tushuntirasiz, **qadam-baqadam ko'rsatma** berasiz (*First… Then… Don't forget to…*), qisqa onlayn xabarlar yozasiz va **telefon suhbatini** olib borasiz (*Who's calling? Hold on. I'll call you back.*).",
  slides: [
    {
      title: "Qurilmalar va internet",
      blocks: [
        { t: "p", md: "Texnologiya so'zlarining ko'pi o'zbek tilida ham ishlatiladi, lekin tovushi boshqacha. Asosiylarini yodlaymiz:" },
        {
          t: "table", head: ["So'z", "O'zbekcha", "Misol"], speak: [0, 2],
          rows: [
            ["laptop / computer", "noutbuk / kompyuter", "I work on my laptop."],
            ["screen", "ekran", "The screen is broken."],
            ["battery", "batareya", "My battery is low."],
            ["charger", "zaryadlovchi", "Have you got a charger?"],
            ["Wi-Fi", "Wi-Fi, simsiz internet", "What's the Wi-Fi password?"],
            ["website / app", "veb-sayt / ilova", "I use an app to learn English."],
            ["password", "parol", "Don't share your password."],
            ["link", "havola", "Click on the link."],
          ],
        },
        { t: "tip", tone: "info", md: "Talaffuz: **password** — \"PAAS-wərd\" (urg'u birinchi bo'g'inda), **website** — \"WEB-sait\", **battery** — \"BAT-ə-ri\" (3 bo'g'in)." },
        { t: "check", ex: { k: "choice", q: "Telefon ishlamayapti, chunki quvvati tugadi. Nimani qidirasiz?", opts: ["a charger", "a password", "a link", "a screen"], a: 0, why: "**charger** — zaryadlovchi." } },
      ],
    },
    {
      title: "Texnologiya fe'llari",
      blocks: [
        { t: "p", md: "Texnologiya haqida gapirganda ko'p **frazali fe'llar** (phrasal verbs) ishlatiladi. Esingizdami, ular 16-bosqichda bor edi:" },
        {
          t: "table", head: ["Fe'l", "Ma'nosi", "Misol"], speak: [0, 2],
          rows: [
            ["turn on / off", "yoqmoq / o'chirmoq", "Turn off your phone in the cinema."],
            ["plug in", "rozetkaga ulamoq", "Plug in the charger."],
            ["log in / log out", "tizimga kirmoq / chiqmoq", "Log in with your password."],
            ["sign up", "ro'yxatdan o'tmoq", "Sign up for a free account."],
            ["download / upload", "yuklab olmoq / yuklamoq", "Download the app first."],
            ["look for / search for", "qidirmoq", "I'm searching for a cheap flight."],
          ],
        },
        { t: "tip", tone: "warn", md: "Ot (laptop, phone) bilan **ikkala** tartib mumkin: *turn off **the laptop*** = *turn **the laptop** off*. Lekin **olmosh** (it, them) har doim **o'rtada** turadi: *turn **it** off* ✅, *turn off **it*** ❌." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["Turn it off.", "Turn off the TV.", "Plug it in."] },
          bad: { title: "Xato", items: ["Turn off it.", "Turn the off TV.", "Plug in it."] },
        },
        { t: "check", ex: { k: "choice", q: "\"Uni yoqing.\" (computer haqida)", opts: ["Turn on it.", "Turn it on.", "On turn it.", "Turn on him."], a: 1, why: "**it** frazali fe'lning o'rtasida: *turn **it** on*." } },
      ],
    },
    {
      title: "Muammo va yechim",
      blocks: [
        { t: "p", md: "Texnika buzilsa, avval muammoni tushuntiramiz (hozirgi zamon), keyin maslahat beramiz yoki so'raymiz. Foydali iboralar:" },
        {
          t: "table", head: ["Muammo", "Maslahat"], speak: [0, 1],
          rows: [
            ["My phone has run out of battery.", "Plug it in. / Use my charger."],
            ["The Wi-Fi is very slow.", "Have you tried restarting the router?"],
            ["I forgot my password.", "Click on \"Forgot password\"."],
            ["The laptop doesn't turn on.", "You should take it to a repair shop."],
            ["The app isn't working.", "Try updating it."],
          ],
        },
        { t: "tip", tone: "info", md: "Bu yerda 1-darsdagi qolip yordam beradi: **try + -ing** = \"sinab ko'rmoq\" (tajriba qilib): *Try **restarting** it.* **try + to** = \"harakat qilmoq\": *I tried **to call** you but you didn't answer.* Texnik maslahatlarda ko'pincha *try + -ing* ishlatiladi." },
        { t: "check", ex: { k: "choice", q: "The app is slow. ___ updating it.", opts: ["Try", "Tries", "Trying to", "To try"], a: 0, why: "Buyruq → **Try updating it.**" } },
      ],
    },
    {
      title: "Ko'rsatma berish",
      blocks: [
        { t: "p", md: "Biror narsani qanday qilishni tushuntirishda **buyruq shakli** (V1) ishlatamiz va ketma-ketlikni so'zlar bilan bog'laymiz: **first, then, next, after that, finally**." },
        {
          t: "examples", items: [
            { en: "First, open the app. Then click on \"Sign up\".", uz: "Avval ilovani oching. Keyin \"Sign up\" ni bosing." },
            { en: "Next, type your name and email address.", uz: "Keyin ismingiz va elektron pochtangizni yozing." },
            { en: "After that, choose a password. Don't use your birthday!", uz: "So'ngra parol tanlang. Tug'ilgan kuningizni ishlatmang!" },
            { en: "Finally, check your email and click on the link.", uz: "Oxirida pochtangizni tekshiring va havolani bosing." },
            { en: "Make sure you save the file.", uz: "Faylni saqlaganingizga ishonch hosil qiling." },
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["Press the green button.", "Don't press the red button.", "Please wait."] },
          bad: { title: "Xato", items: ["You press the green button.", "Not press the red button.", "Please to wait."] },
        },
        { t: "tip", tone: "info", md: "Inkor buyruq: **Don't + V1** (*Don't forget, Don't touch*). Muloyim qilish uchun **please** qo'shing yoki **You need to…** / **You should…** ishlating: *You should restart your phone.*" },
        { t: "check", ex: { k: "fill", q: "First, ___ the app. Then log in. (download)", a: ["download"], why: "Ko'rsatma → V1." } },
        { t: "check", ex: { k: "fill", q: "___ forget to save your work!", a: ["Don't", "Do not"], why: "Inkor buyruq: **Don't + V1**." } },
      ],
    },
    {
      title: "Onlayn xabarlar",
      blocks: [
        { t: "p", md: "Telegram, SMS yoki chatda xabarlar qisqa va norasmiy bo'ladi. Ingliz tilida ham ko'p qisqartmalar ishlatiladi:" },
        {
          t: "table", head: ["Qisqartma", "Ochilishi", "Ma'nosi"],
          rows: [
            ["BTW", "by the way", "aytganday"],
            ["ASAP", "as soon as possible", "iloji boricha tezroq"],
            ["FYI", "for your information", "ma'lumot uchun"],
            ["pls / thx", "please / thanks", "iltimos / rahmat"],
            ["LOL", "laugh out loud", "kulgili (kuldim)"],
            ["OMG", "oh my God", "voy-bo'y!"],
          ],
        },
        {
          t: "examples", items: [
            { en: "Hi! Are you free tonight? Let's meet at 7.", uz: "Salom! Bugun kechqurun bo'shmisan? Soat 7 da uchrashamiz." },
            { en: "Thx for your help! I'll call you ASAP.", uz: "Yordaming uchun rahmat! Iloji boricha tezroq qo'ng'iroq qilaman." },
            { en: "Sorry, my battery died. I'll text you later.", uz: "Kechir, batareyam o'chib qoldi. Keyinroq yozaman." },
          ],
        },
        { t: "tip", tone: "warn", md: "Qisqartmalarni faqat **do'stlar bilan** yozishda ishlating. Ish uchun yoki rasmiy xabarda to'liq yozing: *Dear Mr Karimov, thank you for your help.* Qo'ng'iroq uchun ikki fe'l bor: **call** (qo'ng'iroq qilmoq) va **text** (SMS / chatga yozmoq)." },
        { t: "check", ex: { k: "choice", q: "**BTW, the meeting is at 10.** Bu yerda BTW nima degani?", opts: ["by the way", "back to work", "be there with", "before the week"], a: 0, why: "**BTW** = by the way (aytganday)." } },
      ],
    },
    {
      title: "Telefon suhbati",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Kamol", en: "Hello, can I speak to Dilnoza, please?", uz: "Alo, Dilnoza bilan gaplashsam bo'ladimi?" },
            { who: "Dilnoza", en: "Speaking. Who's calling?", uz: "Eshitaman. Kim qo'ng'iroq qilyapti?" },
            { who: "Kamol", en: "It's Kamol. Sorry, the line is bad. Can you hear me?", uz: "Men Kamolman. Kechir, aloqa yomon. Eshityapsanmi?" },
            { who: "Dilnoza", en: "Not really. Can you repeat that, please?", uz: "Unchalik emas. Takrorlay olasanmi?" },
            { who: "Kamol", en: "I said, are you coming to the party on Saturday?", uz: "Shanba kuni ziyofatga kelasanmi, dedim." },
            { who: "Dilnoza", en: "Yes, I am! Hold on, my battery is low. I'll call you back from my laptop.", uz: "Ha, kelaman! Bir daqiqa, batareyam tugayapti. Noutbukdan qaytib qo'ng'iroq qilaman." },
          ],
        },
        {
          t: "table", head: ["Ibora", "Ma'nosi"], speak: [0],
          rows: [
            ["Can I speak to…, please?", "…bilan gaplashsam bo'ladimi?"],
            ["Speaking. / This is Aziz.", "Eshitaman. / Bu Aziz."],
            ["Who's calling?", "Kim qo'ng'iroq qilyapti?"],
            ["Hold on. / Just a moment.", "Bir daqiqa kuting."],
            ["Can I leave a message?", "Xabar qoldirsam bo'ladimi?"],
            ["I'll call you back.", "Sizga qayta qo'ng'iroq qilaman."],
          ],
        },
        { t: "tip", tone: "info", md: "Telefonda o'zingizni tanishtirishda **I am…** emas, **This is…** yoki **It's…** deyiladi: *Hello, **this is** Kamol.*" },
        { t: "check", ex: { k: "tf", q: "Dilnoza will call Kamol back from her laptop.", a: true, why: "*I'll call you back from my laptop.*" } },
      ],
    },
    {
      title: "O'qing: Onlayn dars",
      blocks: [
        {
          t: "text", title: "An online lesson",
          en: "Aziz has an English lesson online at six o'clock. At 5.55 he turns on his laptop and opens the app. But the Wi-Fi is very slow and the video doesn't start. Aziz turns the router off and on again. Then he logs in again with his password. This time it works!\nDuring the lesson his teacher says, \"Can you hear me? The sound isn't very clear.\" Aziz checks his headphones. He forgot to plug them in! After that, the sound is fine.\nAfter the lesson, Aziz texts his friend Kamol: \"BTW, the app works well. Try it!\"",
          uz: "Aziz soat oltida onlayn ingliz tili darsiga ega. 5:55 da u noutbukni yoqadi va ilovani ochadi. Lekin Wi-Fi juda sekin va video boshlanmaydi. Aziz routerni o'chirib-yoqadi. Keyin parol bilan yana tizimga kiradi. Bu safar ishladi!\nDars paytida o'qituvchi aytadi: \"Meni eshityapsizmi? Tovush unchalik aniq emas.\" Aziz quloqchinlarini tekshiradi. U ularni ulashni unutgan ekan! Shundan keyin tovush yaxshi.\nDarsdan keyin Aziz do'sti Kamolga yozadi: \"Aytganday, ilova yaxshi ishlaydi. Sen ham sinab ko'r!\"",
        },
        { t: "check", ex: { k: "tf", q: "The video started the first time Aziz logged in.", a: false, why: "Wi-Fi sekin edi; routerni o'chirib-yoqib, yana kirgandan keyin ishladi." } },
        { t: "check", ex: { k: "choice", q: "Why wasn't the sound clear?", opts: ["The router was off.", "Aziz forgot to plug in his headphones.", "The teacher's phone was broken.", "His battery was dead."], a: 1, why: "*He forgot to plug them in!*" } },
      ],
    },
  ],
  words: [
    { en: "battery", uz: "batareya", ipa: "ˈbætəri", pos: "noun", ex: "My phone battery is almost empty.", exUz: "Telefonimning batareyasi deyarli tugadi." },
    { en: "screen", uz: "ekran", ipa: "skriːn", pos: "noun", ex: "I broke the screen of my phone.", exUz: "Telefonimning ekranini sindirib oldim." },
    { en: "password", uz: "parol", ipa: "ˈpɑːswɜːd", pos: "noun", ex: "Never share your password.", exUz: "Parolingizni hech kimga bermang." },
    { en: "charger", uz: "zaryadlovchi", ipa: "ˈtʃɑːdʒə", pos: "noun", ex: "Can I borrow your charger?", exUz: "Zaryadlovchingizni olib tursam bo'ladimi?" },
    { en: "download", uz: "yuklab olmoq", ipa: "ˌdaʊnˈləʊd", pos: "verb", ex: "Download the app for free.", exUz: "Ilovani bepul yuklab oling." },
    { en: "website", uz: "veb-sayt", ipa: "ˈwebsaɪt", pos: "noun", ex: "Visit our website for more information.", exUz: "Ko'proq ma'lumot uchun saytimizga kiring." },
    { en: "online", uz: "onlayn, internetda", ipa: "ˌɒnˈlaɪn", pos: "adjective / adverb", ex: "I study English online.", exUz: "Ingliz tilini onlayn o'rganaman." },
    { en: "update", uz: "yangilamoq", ipa: "ˌʌpˈdeɪt", pos: "verb", ex: "You should update your phone.", exUz: "Telefoningizni yangilashingiz kerak." },
    { en: "log in", uz: "tizimga kirmoq", ipa: "lɒɡ ɪn", pos: "phrasal verb", ex: "I can't log in to my account.", exUz: "Hisobimga kira olmayapman." },
    { en: "delete", uz: "o'chirib tashlamoq", ipa: "dɪˈliːt", pos: "verb", ex: "Please delete the old photos.", exUz: "Iltimos, eski rasmlarni o'chiring." },
  ],
  practice: [
    { k: "match", pairs: [["battery", "batareya"], ["screen", "ekran"], ["password", "parol"], ["charger", "zaryadlovchi"], ["download", "yuklab olmoq"]] },
    { k: "listen", say: "My phone has run out of battery.", opts: ["My phone has run out of battery.", "My phone has a new battery.", "My phone is on the table."], a: 0 },
    { k: "listen", say: "Can I speak to Aziz, please?", opts: ["Can I speak to Aziz, please?", "Can I talk to Laylo, please?", "Can you speak to Aziz, please?"], a: 0 },
    { k: "choice", q: "\"Uni o'chiring.\" (telefon haqida)", opts: ["Turn off it.", "Turn it off.", "Off turn it.", "Turn off him."], a: 1, why: "**it** o'rtada: *turn it off*." },
    { k: "choice", q: "Don't ___ your password with anyone.", opts: ["share", "to share", "sharing", "shares"], a: 0, why: "**Don't + V1**." },
    { k: "choice", q: "Hello, who's ___?", opts: ["calling", "calls", "call", "called"], a: 0, why: "**Who's calling?** — telefonda kimligini so'rash." },
    { k: "fill", q: "First, ___ on the laptop. Then press the button. (turn / switch)", a: ["turn", "switch"], why: "Buyruq shakli: **turn on** yoki **switch on**." },
    { k: "fill", q: "Have you tried ___ it off and on again? (turn)", a: ["turning"], why: "**try + -ing** — sinab ko'rmoq." },
    { k: "fill", q: "Sorry, I didn't hear you. Can you ___ that, please?", a: ["repeat", "say"], hint: "takrorlamoq", why: "*Can you repeat that?* / *Can you say that again?*" },
    { k: "tf", q: "**ASAP** = as soon as possible.", a: true },
    { k: "tf", q: "**Don't to press this button.** — to'g'ri gap.", a: false, why: "**Don't + V1**: *Don't press this button.*" },
    { k: "order", uz: "Avval parolingizni kiriting.", words: ["First", "enter", "your", "password."], extra: ["you", "to"] },
    { k: "order", uz: "Keyinroq qayta qo'ng'iroq qilaman.", words: ["I'll", "call", "you", "back", "later."], extra: ["calling", "to"], alt: [["Later", "I'll", "call", "you", "back."]] },
    { k: "translate", uz: "Telefonimning batareyasi tugadi.", a: ["My phone has run out of battery.", "My phone has run out of power.", "My phone's battery is dead.", "My phone battery is dead.", "My phone's battery has died.", "My phone is out of battery."] },
    { k: "speak", say: "Sorry, the line is bad. Can you repeat that, please?", uz: "Kechirasiz, aloqa yomon. Takrorlay olasizmi?" },
  ],
  quiz: [
    { k: "choice", q: "Qaysi gap **to'g'ri**?", opts: ["Turn off it, please.", "Turn it off, please.", "Turn the off it, please.", "Off turn it, please."], a: 1, why: "Olmosh (it) o'rtada." },
    { k: "choice", q: "The Wi-Fi is slow. Try ___ the router.", opts: ["restart", "to restarting", "restarting", "restarted"], a: 2, why: "**try + -ing**: sinab ko'rish." },
    { k: "choice", q: "\"Aytganday\" ning qisqartmasi:", opts: ["ASAP", "BTW", "FYI", "LOL"], a: 1, why: "**BTW** = by the way." },
    { k: "choice", q: "Telefonda o'zingizni tanishtirasiz. Qaysi to'g'ri?", opts: ["I am Kamol.", "This is Kamol.", "My name Kamol.", "Here Kamol."], a: 1, why: "Telefonda: **This is…**" },
    { k: "fill", q: "___ forget your password! (inkor buyruq)", a: ["Don't", "Do not"], why: "**Don't + V1**." },
    { k: "fill", q: "First, open the app. ___, click on \"Sign up\". (keyin)", a: ["Then", "Next"], why: "Ketma-ketlik: *then / next*." },
    { k: "fill", q: "I can't ___ in to my account. (kirmoq)", a: ["log"], why: "**log in** — tizimga kirmoq." },
    { k: "listen", say: "Hold on. I'll call you back.", opts: ["Hold on. I'll call you back.", "Hold on. I called you back.", "Hurry up. I'll call you back."], a: 0 },
    { k: "tf", q: "**Turn off the TV** va **Turn the TV off** — ikkalasi ham to'g'ri.", a: true, why: "Ot (the TV) bilan ikkala tartib mumkin." },
    { k: "order", uz: "Faylni saqlashni unutmang.", words: ["Don't", "forget", "to", "save", "the", "file."], extra: ["saving", "do"] },
  ],
  summary: [
    "Asosiy so'zlar: **battery, screen, charger, password, download, log in, update, delete.**",
    "Frazali fe'llarda olmosh o'rtada: **turn it off**, **plug it in**; ot bilan ikkala tartib mumkin.",
    "Ko'rsatma: **buyruq (V1)** + **first, then, next, finally**; inkorda **Don't + V1**.",
    "**try + -ing** — sinab ko'rmoq (*Try restarting it*); qisqartmalar (**BTW, ASAP, thx**) faqat norasmiy yozuvda.",
    "Telefonda: **Can I speak to…? Who's calling? This is… Hold on. I'll call you back.**",
  ],
  homework: "Do'stingizga telefonida yangi ilovani o'rnatishni tushuntiring: 6 ta ko'rsatma yozing (*First, …; Then, …; Don't forget to…*). Keyin ovozli xabar yozib oling (har bir buyruqni inglizcha ayting). Qo'shimcha: telefoningiz sozlamalarini inglizchaga o'tkazing va 10 ta yangi so'zni daftaringizga yozing.",
};

export default lesson;
