import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u11-l7",
  title: "Everyday phrasal verbs",
  titleUz: "Kundalik phrasal verbs: get up, put on…",
  goal: "Kundalik hayotdagi eng kerakli **phrasal verbs** ni ishlatasiz: **wake up, put on, take off, turn on / off, look for, look after, try on, pick up, throw away**. **Put it on** (*put on it* emas) qoidasini bilasiz va *open the light* ❌ kabi xatolardan qutulasiz.",
  slides: [
    {
      title: "Phrasal verb nima?",
      blocks: [
        { t: "p", md: "**Phrasal verb** = fe'l + kichik so'z (**up, down, on, off, out, away, after, for…**). Birgalikda ular **yangi ma'no** beradi. Siz ba'zilarini allaqachon bilasiz: *get **up**, sit **down**, stand **up***." },
        {
          t: "examples", items: [
            { en: "look → look for", uz: "qaramoq → qidirmoq", note: "*I'm looking for my keys.*" },
            { en: "turn → turn on", uz: "burmoq → yoqmoq", note: "*Turn on the light, please.*" },
            { en: "put → put on", uz: "qo'ymoq → kiymoq", note: "*Put on your coat.*" },
            { en: "throw → throw away", uz: "otmoq → tashlab yubormoq", note: "*Don't throw away that box!*" },
          ],
        },
        { t: "tip", tone: "info", md: "Ingliz tilida so'zlashuvchilar kundalik nutqda phrasal verbs ni juda ko'p ishlatadi. Rasmiy so'z ham bor (*remove* = *take off*, *search* = *look for*), lekin uyda, do'konda, ishda ko'pincha phrasal verb aytiladi. Ularni **bitta so'z** sifatida yodlang." },
        { t: "check", ex: { k: "choice", q: "**I'm looking for my phone.** — ma'nosi:", opts: ["Telefonimga qarab turibman.", "Telefonimni qidiryapman.", "Telefonimni ko'ryapman.", "Telefonimga qarayman."], a: 1, why: "**look for** = qidirmoq." } },
      ],
    },
    {
      title: "Ertalab va kechqurun",
      blocks: [
        {
          t: "table", head: ["Phrasal verb", "Ma'nosi", "Misol"], speak: [0, 2],
          rows: [
            ["wake up", "uyg'onmoq", "I wake up at 6:30."],
            ["get up", "o'rnidan turmoq", "I get up at 6:45."],
            ["put on", "kiymoq (harakat)", "She put on her coat and left."],
            ["take off", "yechmoq", "Please take off your shoes."],
            ["turn on", "yoqmoq", "Can you turn on the light?"],
            ["turn off", "o'chirmoq", "Turn off your phone in the cinema."],
            ["go out", "(ko'chaga) chiqmoq, sayrga chiqmoq", "We go out on Friday evenings."],
            ["come back", "qaytib kelmoq", "I came back home at ten."],
          ],
        },
        { t: "tip", tone: "good", md: "**wake up** ≠ **get up**: avval ko'zingizni ochasiz (*wake up*), keyin to'shakdan turasiz (*get up*). *I woke up at six, but I got up at seven* — bir soat yotdim!\n**turn on / off** o'rniga **switch on / off** ham deyiladi." },
        {
          t: "sounds", items: [
            { label: "turn on", say: "turn on", uz: "**\"tɜ:non\"** — so'zlar bir-biriga ulanib ketadi. Urg'u kichik so'zda: turn **ON**.", examples: ["turn on", "Turn it on.", "turn off"] },
            { label: "put on", say: "put on", uz: "**\"puton\"** — amerikacha talaffuzda *t* yumshoq, deyarli \"d\": **\"pudon\"**.", examples: ["put on", "Put it on.", "put on your coat"] },
            { label: "pick up", say: "pick up", uz: "**\"pikap\"** — ikki so'z bitta bo'lib eshitiladi.", examples: ["pick up", "Pick it up."] },
          ],
        },
        { t: "check", ex: { k: "fill", q: "It's dark. Can you ___ the light, please?", a: ["turn on", "switch on"], why: "Chiroqni yoqmoq → **turn on** / **switch on**." } },
      ],
    },
    {
      title: "Uyda, do'konda, ko'chada",
      blocks: [
        {
          t: "table", head: ["Phrasal verb", "Ma'nosi", "Misol"], speak: [0, 2],
          rows: [
            ["look for", "qidirmoq", "I'm looking for a cheap hotel."],
            ["look after", "qaramoq, g'amxo'rlik qilmoq", "Grandma looks after my little brother."],
            ["try on", "kiyib ko'rmoq", "Can I try on these jeans?"],
            ["pick up", "yerdan olmoq; olib ketmoq", "Pick up your toys! / I'll pick you up at six."],
            ["throw away", "tashlab yubormoq", "Don't throw away old bread."],
            ["give back", "qaytarib bermoq", "Can you give back my book tomorrow?"],
            ["fill in", "(anketa) to'ldirmoq", "Please fill in this form."],
          ],
        },
        { t: "tip", tone: "info", md: "**pick up** ning ikki ma'nosi: 1) yerdan ko'tarmoq — *pick up the rubbish*; 2) mashinada olib ketmoq — *Dad will **pick me up** from school.*" },
        { t: "check", ex: { k: "choice", q: "\"Bu ko'ylakni kiyib ko'rsam bo'ladimi?\"", opts: ["Can I put on this shirt?", "Can I try on this shirt?", "Can I wear on this shirt?", "Can I take off this shirt?"], a: 1, why: "Do'konda kiyib ko'rish → **try on**." } },
      ],
    },
    {
      title: "Put it on — olmosh qayerda?",
      blocks: [
        { t: "p", md: "Ko'p phrasal verbs (*put on, take off, turn on/off, try on, pick up, throw away, give back*) da ot **ikki joyda** turishi mumkin:" },
        {
          t: "table", head: ["Ot bilan (ikkalasi to'g'ri)", "Olmosh bilan (faqat o'rtada!)"], speak: [0, 1],
          rows: [
            ["Put on your coat. / Put your coat on.", "Put it on."],
            ["Turn off the TV. / Turn the TV off.", "Turn it off."],
            ["Pick up the papers. / Pick the papers up.", "Pick them up."],
            ["Try on the shoes. / Try the shoes on.", "Try them on."],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["Turn it off.", "Put them on.", "Throw it away.", "I'm looking for it."] },
          bad: { title: "Xato", items: ["Turn off it.", "Put on them.", "Throw away it.", "I'm looking it for."] },
        },
        { t: "tip", tone: "warn", md: "**it, them, him, her, me** — phrasal verbning **o'rtasiga** kiradi: *turn **it** off*. Lekin **look for, look after** bo'linmaydi: *look for **it***, *look after **her***." },
        { t: "check", ex: { k: "order", uz: "Bu poyabzal sizga yoqdimi? Kiyib ko'ring!", words: ["Do", "you", "like", "these", "shoes?", "Try", "them", "on!"], extra: ["it", "off"] } },
        { t: "check", ex: { k: "choice", q: "**Where's my bag? I'm looking ___.**", opts: ["it for", "for it", "for", "it"], a: 1, why: "**look for** bo'linmaydi: *look for **it***." } },
      ],
    },
    {
      title: "Ehtiyot bo'ling: open the light ❌",
      blocks: [
        { t: "p", md: "O'zbek va rus tillaridan so'zma-so'z tarjima ko'p xatoga olib keladi:" },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["Turn on the light.", "Turn off the TV.", "Turn on the computer.", "Turn off the radio."] },
          bad: { title: "Xato", items: ["Open the light.", "Close the TV.", "Open the computer.", "Close the radio."] },
        },
        { t: "tip", tone: "warn", md: "• Chiroq, televizor, kompyuter — **turn on / turn off** (*open / close* emas!). *open / close* — eshik, deraza, kitob uchun.\n• **put on** — kiyish **harakati** (bir lahza): *I put on my coat and went out.*\n• **wear** — kiyib **yurish** (holat): *She **wears** glasses. He's **wearing** a suit today.*" },
        { t: "check", ex: { k: "choice", q: "\"Televizorni o'chir, iltimos.\"", opts: ["Close the TV, please.", "Turn off the TV, please.", "Turn on the TV, please.", "Take off the TV, please."], a: 1, why: "Elektr asboblari → **turn off**." } },
      ],
    },
    {
      title: "O'qing: Notinch tong",
      blocks: [
        {
          t: "text", title: "A terrible morning",
          en: "Yesterday was a terrible morning for Aziza. She woke up at 8:15 — her alarm didn't ring! She got up quickly, put on her clothes and ran to the kitchen. There was no time for breakfast.\nThen she looked for her keys. She looked everywhere, but she couldn't find them. Finally her little brother found them in the bin. \"Who threw them away?\" she shouted. Nobody answered.\nShe ran out of the flat — and came back two minutes later. She forgot to turn off the iron! When she finally got to the office, her boss smiled and said, \"Aziza, it's Saturday. Go home!\"",
          uz: "Kecha Aziza uchun dahshatli tong bo'ldi. U 8:15 da uyg'ondi — uyg'otkich soati jiringlamabdi! U tezda turdi, kiyimlarini kiydi va oshxonaga yugurdi. Nonushtaga vaqt yo'q edi.\nKeyin kalitlarini qidirdi. Hamma joyni qidirdi, lekin topolmadi. Nihoyat kichik ukasi ularni chelakdan topdi. \"Kim ularni tashlab yubordi?\" deb baqirdi u. Hech kim javob bermadi.\nU kvartiradan yugurib chiqdi — va ikki daqiqadan keyin qaytib keldi. Dazmolni o'chirishni unutibdi! Nihoyat ofisga yetib borganida, boshlig'i jilmayib dedi: \"Aziza, bugun shanba. Uyga boring!\"",
        },
        { t: "check", ex: { k: "tf", q: "Aziza came back because she forgot to turn off the iron.", a: true, why: "*She forgot to turn off the iron!*" } },
        { t: "check", ex: { k: "choice", q: "Where were Aziza's keys?", opts: ["In her bag.", "In the kitchen.", "In the bin.", "At the office."], a: 2, why: "*Her little brother found them in the bin.*" } },
      ],
    },
    {
      title: "Dialog: kiyim do'konida",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Assistant", en: "Hello! Can I help you?", uz: "Salom! Yordam bera olamanmi?" },
            { who: "Feruza", en: "Yes, I'm looking for a warm jacket for my son.", uz: "Ha, o'g'limga issiq kurtka qidiryapman." },
            { who: "Assistant", en: "How about this blue one? He can try it on over there.", uz: "Mana bu ko'k rangdagisi qalay? U yerda kiyib ko'rishi mumkin." },
            { who: "Feruza", en: "Timur, take off your coat and put this on, please.", uz: "Timur, paltongni yech va buni kiyib ko'r, iltimos." },
            { who: "Timur", en: "Mum, it's too big! Look at the sleeves!", uz: "Oyi, bu juda katta! Yenglariga qarang!" },
            { who: "Feruza", en: "That's fine. You'll grow. Pick up your coat — we're taking this one.", uz: "Hechqisi yo'q. O'sasan. Paltongni ol — shunisini olamiz." },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Timur tried on the jacket.", a: true, why: "*take off your coat and put this on* — u kiyib ko'rdi va juda katta ekan." } },
      ],
    },
  ],
  words: [
    { en: "wake up", uz: "uyg'onmoq", ipa: "weɪk ʌp", pos: "phrasal verb", ex: "I woke up at six this morning.", exUz: "Bugun ertalab oltida uyg'ondim." },
    { en: "put on", uz: "kiymoq", ipa: "pʊt ɒn", pos: "phrasal verb", ex: "Put on your coat. It's cold.", exUz: "Paltongni kiy. Sovuq." },
    { en: "take off", uz: "yechmoq", ipa: "teɪk ɒf", pos: "phrasal verb", ex: "Please take off your shoes.", exUz: "Iltimos, poyabzalingizni yeching." },
    { en: "turn on", uz: "yoqmoq", ipa: "tɜːn ɒn", pos: "phrasal verb", ex: "Turn on the TV, please.", exUz: "Televizorni yoq, iltimos." },
    { en: "turn off", uz: "o'chirmoq", ipa: "tɜːn ɒf", pos: "phrasal verb", ex: "Don't forget to turn off the lights.", exUz: "Chiroqlarni o'chirishni unutma." },
    { en: "look for", uz: "qidirmoq", ipa: "lʊk fɔː", pos: "phrasal verb", ex: "What are you looking for?", exUz: "Nimani qidiryapsan?" },
    { en: "look after", uz: "qaramoq, g'amxo'rlik qilmoq", ipa: "lʊk ˈɑːftə", pos: "phrasal verb", ex: "She looks after her grandmother.", exUz: "U buvisiga qaraydi." },
    { en: "try on", uz: "kiyib ko'rmoq", ipa: "traɪ ɒn", pos: "phrasal verb", ex: "Can I try on this dress?", exUz: "Bu ko'ylakni kiyib ko'rsam bo'ladimi?" },
    { en: "pick up", uz: "yerdan olmoq; olib ketmoq", ipa: "pɪk ʌp", pos: "phrasal verb", ex: "I'll pick you up at seven.", exUz: "Seni yettida olib ketaman." },
    { en: "throw away", uz: "tashlab yubormoq", ipa: "θrəʊ əˈweɪ", pos: "phrasal verb", ex: "Don't throw away the box.", exUz: "Qutini tashlab yuborma." },
  ],
  practice: [
    { k: "match", pairs: [["wake up", "uyg'onmoq"], ["take off", "yechmoq"], ["look for", "qidirmoq"], ["look after", "g'amxo'rlik qilmoq"], ["throw away", "tashlab yubormoq"]] },
    { k: "match", pairs: [["turn on", "yoqmoq"], ["turn off", "o'chirmoq"], ["try on", "kiyib ko'rmoq"], ["give back", "qaytarib bermoq"], ["fill in", "to'ldirmoq"]] },
    { k: "listen", say: "Turn it off, please.", opts: ["Turn it off, please.", "Turn it on, please.", "Turn off it, please."], a: 0 },
    { k: "listen", say: "I'm looking for my keys.", opts: ["I'm looking at my keys.", "I'm looking for my keys.", "I'm looking after my keys."], a: 1 },
    { k: "choice", q: "\"Chiroqni yoqing, iltimos.\"", opts: ["Open the light, please.", "Turn on the light, please.", "Put on the light, please.", "Take on the light, please."], a: 1, why: "**turn on** the light. *open the light* — so'zma-so'z tarjima xatosi." },
    { k: "choice", q: "These jeans look nice. Can I ___?", opts: ["try on them", "try them on", "try on it", "on try them"], a: 1, why: "Olmosh o'rtada: **try them on**." },
    { k: "choice", q: "Who ___ your little sister when your parents are at work?", opts: ["looks after", "looks for", "looks at", "looks up"], a: 0, why: "G'amxo'rlik qilmoq → **look after**." },
    { k: "fill", q: "It's cold outside. ___ your hat!", a: ["put on"], uz: "Tashqari sovuq. Shapkangni kiy!", why: "Kiyish harakati → **put on**." },
    { k: "fill", q: "Please take ___ your shoes before you come in.", a: ["off"], why: "**take off** — yechmoq." },
    { k: "fill", q: "Can you ___ me up from the station at six?", a: ["pick"], uz: "Meni oltida vokzaldan olib keta olasanmi?", why: "**pick (someone) up** — mashinada olib ketmoq." },
    { k: "fill", q: "This milk is old. Throw it ___.", a: ["away"], why: "**throw away** — tashlab yubormoq." },
    { k: "tf", q: "**Turn off it.** — to'g'ri gap.", a: false, why: "Olmosh o'rtada: **Turn it off.**" },
    { k: "tf", q: "**wake up** va **get up** bir xil narsa emas.", a: true, why: "*wake up* — uyg'onmoq, *get up* — o'rnidan turmoq." },
    { k: "order", uz: "U (she) har kuni ertalab soat yettida uyg'onadi.", words: ["She", "wakes", "up", "at", "seven", "every", "morning."], extra: ["wake", "on"], alt: [["Every", "morning", "she", "wakes", "up", "at", "seven."]] },
    { k: "translate", uz: "Televizorni o'chir!", a: ["Turn off the TV!", "Turn the TV off!", "Switch off the TV!", "Switch the TV off!", "Turn it off!", "Turn off the television!", "Turn the television off!"] },
    { k: "speak", say: "Please take off your shoes and put them by the door.", uz: "Iltimos, poyabzalingizni yechib, eshik yoniga qo'ying." },
  ],
  quiz: [
    { k: "choice", q: "\"Kecha soat oltida uyg'ondim.\"", opts: ["I woke up at six yesterday.", "I waked up at six yesterday.", "I woke on at six yesterday.", "I wake up at six yesterday."], a: 0, why: "**wake – woke**: *I **woke up***." },
    { k: "choice", q: "Where's my phone? I can't find ___.", opts: ["it", "for it", "it for", "them"], a: 0, why: "**find** oddiy fe'l: *find **it***." },
    { k: "choice", q: "Qaysi gap **xato**?", opts: ["Put your coat on.", "Put on your coat.", "Put it on.", "Put on it."], a: 3, why: "Olmosh o'rtada: *Put **it** on.*" },
    { k: "fill", q: "Don't forget to ___ off the lights when you go out.", a: ["turn", "switch"], why: "**turn off / switch off** the lights." },
    { k: "fill", q: "My mother works, so my grandmother looks ___ my baby brother.", a: ["after"], why: "**look after** — g'amxo'rlik qilmoq." },
    { k: "fill", q: "Can I try this jacket ___?", a: ["on"], why: "**try on** — kiyib ko'rmoq." },
    { k: "listen", say: "Pick them up, please.", opts: ["Pick them up, please.", "Pick up them, please.", "Pick them out, please."], a: 0 },
    { k: "tf", q: "**She's wearing a blue dress today.** — kiyib yurish (holat) uchun **wear** to'g'ri tanlangan.", a: true, why: "Holat → **wear**; kiyish harakati → **put on**." },
    { k: "order", uz: "Men eski gazetalarni tashlab yubordim.", words: ["I", "threw", "away", "the", "old", "newspapers."], extra: ["throwed", "it"], alt: [["I", "threw", "the", "old", "newspapers", "away."]] },
    { k: "translate", uz: "Nimani qidiryapsan?", a: ["What are you looking for?", "What're you looking for?"] },
  ],
  summary: [
    "**Phrasal verb** = fe'l + kichik so'z, yangi ma'no: **look for** — qidirmoq, **look after** — qaramoq.",
    "Har kungi: **wake up, get up, put on, take off, turn on / off, go out, come back**.",
    "Uy va do'kon: **try on, pick up, throw away, give back, fill in**.",
    "Olmosh o'rtada: **turn it off, put them on** (*turn off it* ❌); lekin **look for it**.",
    "Chiroq va texnika — **turn on / off** (*open / close the light* ❌); **put on** — harakat, **wear** — holat.",
  ],
  homework: "Bugungi kuningizni 8 ta gap bilan yozing, kamida 7 ta phrasal verb ishlating: *I woke up at…, I turned off the alarm, I put on…* Keyin uyingizdagi 5 ta narsaga yopishqoq qog'oz yopishtiring: chiroqqa — *turn on / turn off*, eshik oldiga — *take off your shoes*, kiyim shkafiga — *put on / try on*.",
};

export default lesson;
