import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u16-l5",
  title: "Phrasal verbs",
  titleUz: "Frazali fe'llar: get up, look for, turn on",
  goal: "10 ta eng ko'p ishlatiladigan frazali fe'lni (*get up, turn on/off, look for, put on, take off, give up, find out, come back, wake up, sit down*) o'rganasiz va ulardan **ajraladiganlari** (*turn it on*) bilan **ajralmaydiganlarini** (*look for it*) farqlaysiz.",
  slides: [
    {
      title: "Frazali fe'l nima?",
      blocks: [
        { t: "p", md: "**Phrasal verb** = fe'l + kichik so'z (*up, on, off, down, back, out, for…*). Muhim joyi: kichik so'z fe'lning **ma'nosini o'zgartiradi**. O'zbek tilida ham shunday: *qarash — qidirish*, *chiqish — chiqib ketish*." },
        {
          t: "table", head: ["Oddiy fe'l", "Frazali fe'l"], speak: [0, 1],
          rows: [
            ["look (qaramoq)", "look for (qidirmoq)"],
            ["get (olmoq)", "get up (o'rnidan turmoq)"],
            ["give (bermoq)", "give up (taslim bo'lmoq)"],
            ["turn (burilmoq)", "turn on (yoqmoq)"],
          ],
        },
        { t: "tip", tone: "info", md: "Frazali fe'lni **so'zma-so'z** tarjima qilmang. *give up* — «berib yubormoq» emas, **taslim bo'lmoq**. Har birini butun iborasi bilan yodlang." },
        { t: "check", ex: { k: "choice", q: "**look for** nimani anglatadi?", opts: ["qaramoq", "qidirmoq", "ko'rsatmoq", "e'tibor bermoq"], a: 1 } },
      ],
    },
    {
      title: "1-guruh: to'ldiruvchisiz fe'llar",
      blocks: [
        { t: "p", md: "Bu fe'llardan keyin **ot yoki olmosh kelmaydi**. Ular o'zi harakatni bildiradi:" },
        {
          t: "table", head: ["Ibora", "Ma'nosi", "Misol"], speak: [0, 2],
          rows: [
            ["wake up", "uyg'onmoq", "I wake up at six."],
            ["get up", "o'rnidan turmoq (to'shakdan)", "She gets up at seven."],
            ["sit down", "o'tirmoq (o'tirish harakati)", "Please sit down."],
            ["come back", "qaytib kelmoq", "I'll come back at nine."],
          ],
        },
        { t: "tip", tone: "warn", md: "**wake up** va **get up** bir narsa emas: *I **woke up** at 6, but I **got up** at 6:30.* — Birinchisi ko'zni ochish, ikkinchisi to'shakdan tushish. **sit down** (o'tirish harakati) va **sit** (o'tirgan holat) ham farq qiladi: *Sit down, please. He is sitting on the sofa.*" },
        { t: "check", ex: { k: "fill", q: "I usually ___ up at seven, but I stay in bed until half past.", a: ["wake"], why: "Uyg'onish — **wake up**. O'rnidan turish — *get up*." } },
      ],
    },
    {
      title: "2-guruh: to'ldiruvchili fe'llar",
      blocks: [
        { t: "p", md: "Bu fe'llar bilan **nima?** degan savolga javob beradigan so'z (to'ldiruvchi) keladi:" },
        {
          t: "table", head: ["Ibora", "Ma'nosi", "Misol"], speak: [0, 2],
          rows: [
            ["turn on", "yoqmoq (chiroq, TV)", "Turn on the light, please."],
            ["turn off", "o'chirmoq", "Turn off your phone."],
            ["put on", "kiymoq (kiyish harakati)", "Put on your coat."],
            ["take off", "yechmoq", "Take off your shoes."],
            ["look for", "qidirmoq", "I'm looking for my keys."],
            ["give up", "taslim bo'lmoq; tashlamoq", "Don't give up! / He gave up smoking."],
            ["find out", "bilib olmoq, aniqlamoq", "Let's find out the truth."],
          ],
        },
        { t: "tip", tone: "info", md: "**put on** — kiyish harakati, **wear** — kiyib yurgan holat: *Put on your jacket. He is wearing a blue jacket.* **take off** samolyotga ham ishlatiladi: *The plane takes off at 9* (uchib ketadi)." },
        { t: "check", ex: { k: "choice", q: "**It's cold outside. ___ your coat.**", opts: ["Take off", "Put on", "Turn off", "Give up"], a: 1 } },
        { t: "check", ex: { k: "fill", q: "Take ___ your shoes before you come in.", a: ["off"] } },
      ],
    },
    {
      title: "Ajraladimi yoki yo'qmi?",
      blocks: [
        { t: "p", md: "To'ldiruvchisi bor frazali fe'llarning ba'zilarida to'ldiruvchi fe'l bilan kichik so'z **o'rtasiga** tushishi mumkin (**ajraladigan**), ba'zilarida esa **mumkin emas** (**ajralmaydigan**)." },
        {
          t: "table", head: ["Tur", "Ibora", "Ot bilan", "Olmosh bilan"], speak: [2, 3],
          rows: [
            ["Ajraladigan", "turn on / off, put on, take off, give up", "Turn the TV on. = Turn on the TV.", "Turn it on."],
            ["Ajralmaydigan", "look for, find out", "I'm looking for my keys.", "I'm looking for them."],
          ],
        },
        { t: "tip", tone: "good", md: "Oltin qoida: **olmosh (it, them, me, him…) doim fe'l bilan kichik so'z o'rtasida** (ajraladiganlarda): *turn **it** on, put **them** on, take **it** off.* Ajralmaydiganlarda esa olmosh oxirida: *look for **it**.*" },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["Please turn it on.", "Put your coat on. / Put on your coat.", "I'm looking for it.", "Take them off."] },
          bad: { title: "Xato", items: ["Please turn on it.", "Put on it.", "I'm looking it for.", "Take off them."] },
        },
        { t: "tip", tone: "info", md: "**find out** ni odatda ajratmaymiz: *Let's find out the answer. I want to find out where he lives.* Uni ajralmaydiganlar qatorida yodlang. Hammasini yodlash shart emas — **olmosh** qoidasini bilsangiz yetarli." },
        { t: "check", ex: { k: "choice", q: "\"Televizorni o'chir!\" — olmosh bilan:", opts: ["Turn off it!", "Turn it off!", "Off turn it!", "Turn off him!"], a: 1, why: "Olmosh **o'rtada**: *turn it off*." } },
        { t: "check", ex: { k: "order", uz: "Men uni qidiryapman.", words: ["I'm", "looking", "for", "it."], extra: ["at", "up"] } },
      ],
    },
    {
      title: "O'qing: Azizning ertalabi",
      blocks: [
        {
          t: "text", title: "Aziz's morning",
          en: "Aziz wakes up at six every morning. First he turns off his alarm, then he gets up and puts on his sports clothes. He runs in the park for half an hour. When he comes back, he takes off his wet shoes and turns on the radio. Yesterday he looked for his keys for ten minutes. He wanted to give up, but his sister said, \"Look in your jacket!\" The keys were there. Now Aziz always leaves them on the same table. After a run he sits down, drinks tea and checks the news.",
          uz: "Aziz har kuni ertalab soat oltida uyg'onadi. Avval budilnikni o'chiradi, keyin o'rnidan turib, sport kiyimini kiyadi. U yarim soat bog'da yuguradi. Qaytib kelganda ho'l poyabzalini yechadi va radioni yoqadi. Kecha u kalitlarini o'n daqiqa qidirdi. U taslim bo'lmoqchi edi, lekin singlisi: \"Kurtkangdan qara!\" dedi. Kalitlar o'sha yerda edi. Endi Aziz kalitlarni doim bitta stolga qo'yadi. Yugurgandan keyin o'tirib, choy ichadi va yangiliklarni ko'radi.",
        },
        { t: "check", ex: { k: "tf", q: "Aziz found his keys in the park.", a: false, why: "Kalitlar uning **kurtkasida** edi." } },
        { t: "check", ex: { k: "choice", q: "What does Aziz do when he comes back from his run?", opts: ["He gives up.", "He takes off his shoes and turns on the radio.", "He wakes up.", "He looks for his keys."], a: 1 } },
      ],
    },
    {
      title: "Dialog: ko'zoynak qayerda?",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Laylo", en: "Hi Kamol! What's the matter?", uz: "Salom, Kamol! Nima gap?" },
            { who: "Kamol", en: "I'm looking for my glasses. I can't see anything!", uz: "Ko'zoynagimni qidiryapman. Hech narsani ko'rmayapman!" },
            { who: "Laylo", en: "Are they on your head?", uz: "Ular boshingda emasmi?" },
            { who: "Kamol", en: "Oh! Yes, here they are. Thanks. Did you find out when the film starts?", uz: "Voy! Ha, mana. Rahmat. Film qachon boshlanishini bilib oldingmi?" },
            { who: "Laylo", en: "Yes, at eight. Hurry up! Put on your coat. It's cold outside.", uz: "Ha, soat sakkizda. Tezroq! Paltongni kiy. Tashqarida sovuq." },
            { who: "Kamol", en: "OK. Please turn the TV off. I'll come back in a minute.", uz: "Xo'p. Televizorni o'chirib qo'y. Bir daqiqada qaytaman." },
            { who: "Laylo", en: "Don't be long. I'll sit down here and wait.", uz: "Kech qolma. Men shu yerda o'tirib kutaman." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "Where were Kamol's glasses?", opts: ["On the table.", "On his head.", "In his coat.", "In the car."], a: 1 } },
      ],
    },
  ],
  words: [
    { en: "get up", uz: "o'rnidan turmoq", ipa: "ɡet ʌp", pos: "phrasal verb", ex: "I get up at seven every day.", exUz: "Men har kuni soat yettida o'rnimdan turaman." },
    { en: "turn on / turn off", uz: "yoqmoq / o'chirmoq", ipa: "tɜːn ɒn / tɜːn ɒf", pos: "phrasal verb", ex: "Please turn off the light.", exUz: "Iltimos, chiroqni o'chiring." },
    { en: "look for", uz: "qidirmoq", ipa: "lʊk fɔː", pos: "phrasal verb", ex: "I'm looking for my phone.", exUz: "Telefonimni qidiryapman." },
    { en: "put on", uz: "kiymoq", ipa: "pʊt ɒn", pos: "phrasal verb", ex: "Put on your jacket, it's cold.", exUz: "Kurtkangni kiy, sovuq." },
    { en: "take off", uz: "yechmoq", ipa: "teɪk ɒf", pos: "phrasal verb", ex: "Take off your shoes, please.", exUz: "Iltimos, poyabzalingizni yeching." },
    { en: "give up", uz: "taslim bo'lmoq, tashlamoq", ipa: "ɡɪv ʌp", pos: "phrasal verb", ex: "Don't give up! You can do it.", exUz: "Taslim bo'lma! Sen qila olasan." },
    { en: "find out", uz: "bilib olmoq, aniqlamoq", ipa: "faɪnd aʊt", pos: "phrasal verb", ex: "I want to find out the truth.", exUz: "Haqiqatni bilib olmoqchiman." },
    { en: "come back", uz: "qaytib kelmoq", ipa: "kʌm bæk", pos: "phrasal verb", ex: "I'll come back in ten minutes.", exUz: "O'n daqiqada qaytib kelaman." },
    { en: "wake up", uz: "uyg'onmoq", ipa: "weɪk ʌp", pos: "phrasal verb", ex: "I wake up at six.", exUz: "Men oltida uyg'onaman." },
    { en: "sit down", uz: "o'tirmoq", ipa: "sɪt daʊn", pos: "phrasal verb", ex: "Please sit down.", exUz: "Iltimos, o'tiring." },
  ],
  practice: [
    { k: "match", pairs: [["get up", "o'rnidan turmoq"], ["wake up", "uyg'onmoq"], ["turn off", "o'chirmoq"], ["take off", "yechmoq"], ["give up", "taslim bo'lmoq"]] },
    { k: "choice", q: "**It's dark. Please turn the light ___.**", opts: ["on", "off", "up", "for"], a: 0 },
    { k: "choice", q: "Qaysi gap **to'g'ri**?", opts: ["Please turn on it.", "Please turn it on.", "Please on turn it.", "Please it turn on."], a: 1, why: "Olmosh **o'rtada**: *turn it on*." },
    { k: "choice", q: "**I'm ___ my keys. I can't find them.**", opts: ["looking for", "looking at", "looking up", "looking after"], a: 0, why: "Qidirmoq = **look for**." },
    { k: "fill", q: "It's cold outside. Put ___ your coat.", a: ["on"] },
    { k: "fill", q: "It is cold. Put ___ your jacket.", a: ["on"] },
    { k: "fill", q: "Don't ___ up! You can do it.", a: ["give"] },
    { k: "fill", q: "I'll ___ down here and wait for you.", a: ["sit"] },
    { k: "listen", say: "Please turn the light off.", opts: ["Please turn the light off.", "Please turn the light on.", "Please turn the light up."], a: 0 },
    { k: "order", uz: "Men telefonimni qidiryapman.", words: ["I'm", "looking", "for", "my", "phone."], extra: ["look", "at"] },
    { k: "order", uz: "Uni o'chiring, iltimos.", words: ["Turn", "it", "off,", "please."], extra: ["on", "up"], alt: [["Please", "turn", "it", "off."]] },
    { k: "translate", uz: "Ertalab men soat oltida uyg'onaman.", a: ["I wake up at six in the morning.", "I wake up at six o'clock in the morning.", "In the morning I wake up at six.", "I wake up at six."] },
    { k: "translate", uz: "Men kechqurun qaytib kelaman.", a: ["I will come back in the evening.", "I'll come back in the evening.", "I'm coming back in the evening.", "I will come back this evening.", "I'll come back this evening."] },
    { k: "tf", q: "**look for** = qidirmoq; **look at** = qaramoq.", a: true },
    { k: "tf", q: "**Turn on it** — to'g'ri gap.", a: false, why: "Olmosh o'rtada: *Turn it on.*" },
    { k: "speak", say: "Please sit down and turn off your phone.", uz: "Iltimos, o'tiring va telefoningizni o'chiring." },
  ],
  quiz: [
    { k: "choice", q: "Qaysi gap **xato**?", opts: ["Turn the radio off.", "Turn off the radio.", "Turn off it.", "Turn it off."], a: 2 },
    { k: "choice", q: "**I ___ at 7, but I stay in bed until 7:30.**", opts: ["get up", "wake up", "sit down", "come back"], a: 1, why: "Ko'zni ochish — **wake up**." },
    { k: "choice", q: "**It's hot in here. Take ___ your jacket.**", opts: ["off", "on", "for", "out"], a: 0 },
    { k: "fill", q: "She's ___ for her passport.", a: ["looking"] },
    { k: "fill", q: "I tried to learn chess, but I gave ___.", a: ["up"] },
    { k: "fill", q: "Can you ___ out what time the shop opens?", a: ["find"] },
    { k: "listen", say: "I'll come back at nine.", opts: ["I'll come back at nine.", "I'll come back at five.", "I'll go back at nine."], a: 0 },
    { k: "order", uz: "Paltongizni kiying, iltimos.", words: ["Put", "your", "coat", "on,", "please."], extra: ["in", "off"], alt: [["Put", "on", "your", "coat,", "please."]] },
    { k: "translate", uz: "Iltimos, o'tiring.", a: ["Please sit down.", "Sit down, please."] },
    { k: "tf", q: "**give up** = tashlamoq, taslim bo'lmoq.", a: true },
  ],
  summary: [
    "Frazali fe'l = fe'l + kichik so'z; ma'nosi o'zgaradi: *look → look for*, *give → give up*.",
    "To'ldiruvchisiz: **wake up, get up, sit down, come back**. To'ldiruvchili: **turn on/off, put on, take off, look for, give up, find out**.",
    "Ajraladigan fe'llarda olmosh **o'rtada**: *turn **it** on, put **them** on, take **it** off*. ❌ *turn on it*.",
    "Ajralmaydigan: *look **for** it*, *find out the answer*.",
    "**wake up** (uyg'onmoq) ≠ **get up** (o'rnidan turmoq); **put on** (kiymoq) ≠ **wear** (kiyib yurmoq).",
  ],
  homework: "Bugungi 10 ta iborani har biri bilan o'zingizga tegishli bitta gap yozing (*I wake up at…, I turn off my phone at…*). Kuningizni ertalabdan kechgacha 6–8 gap bilan frazali fe'llar yordamida tasvirlang.",
};

export default lesson;
