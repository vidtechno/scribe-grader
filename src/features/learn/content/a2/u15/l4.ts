import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u15-l4",
  title: "Polite requests and offers",
  titleUz: "Muloyim iltimos va taklif: Could you…? Would you like…?",
  goal: "Iltimosni muloyim aytasiz (**Could you…? Can I…? Would you…?**), takliflar berasiz (**Would you like…? Shall I…? I'll…**), ularga to'g'ri javob qaytarasiz va *Give me water!* kabi qo'pol eshitiladigan gaplardan qochasiz.",
  slides: [
    {
      title: "Nega \"Give me water\" qo'pol eshitiladi?",
      blocks: [
        { t: "p", md: "O'zbek tilida \"Menga suv bering\" muloyim eshitiladi, chunki ohang va so'zlar uni yumshatadi. Inglizchada esa **buyruq shakli** (*Give me water. Open the door.*) ko'pincha **qo'pol** eshitiladi. Inglizlar iltimosni **savol shaklida** aytadi:" },
        {
          t: "compare",
          good: { title: "Muloyim", items: ["Could you give me some water, please?", "Can you open the door, please?", "I'd like a glass of water, please."] },
          bad: { title: "Juda to'g'ridan-to'g'ri", items: ["Give me water.", "Open the door.", "I want water."] },
        },
        { t: "tip", tone: "warn", md: "**I want…** kafe yoki do'konda qo'pol eshitiladi (bola kabi). Buning o'rniga: **I'd like…** (*I'd like a tea, please.*). **please** ni unutmang, lekin faqat **please** ning o'zi buyruqni yumshata olmaydi." },
        { t: "check", ex: { k: "choice", q: "Kafeda ofitsiantga nima deysiz?", opts: ["Give me a tea.", "I want a tea.", "I'd like a tea, please.", "Bring tea!"], a: 2, why: "**I'd like … , please** — eng tabiiy va muloyim." } },
      ],
    },
    {
      title: "Iltimos: Can / Could / Would you…?",
      blocks: [
        { t: "p", md: "Boshqa odamdan biror ish qilishni so'rashda **Can / Could / Would you + V1 …?** ishlatamiz:" },
        {
          t: "table", head: ["Ibora", "Daraja", "Misol"], speak: [2],
          rows: [
            ["**Can you…?**", "Oddiy, do'stlar bilan", "Can you pass me the salt?"],
            ["**Could you…?**", "Muloyim, ko'pchilik holatda", "Could you help me with this bag?"],
            ["**Would you…?**", "Juda muloyim", "Would you close the window, please?"],
          ],
        },
        {
          t: "table", head: ["Javob", "Ma'nosi"], speak: [0],
          rows: [
            ["Sure. / Of course. / Certainly.", "Albatta (ha)"],
            ["No problem.", "Muammo yo'q"],
            ["Sorry, I can't. I'm busy.", "Kechirasiz, bo'lmaydi (sababi bilan)"],
          ],
        },
        { t: "tip", tone: "info", md: "Rad qilsangiz ham muloyim bo'ling: **Sorry, I can't** + sababi. Faqat \"No\" deyish qo'pol eshitiladi." },
        { t: "check", ex: { k: "fill", q: "___ you pass me the sugar, please?", a: ["Could", "Can", "Would"], why: "Iltimos: **Could / Can / Would you…?**" } },
      ],
    },
    {
      title: "Ruxsat so'rash: Can / Could / May I…?",
      blocks: [
        { t: "p", md: "O'zingiz biror ish qilmoqchi bo'lsangiz va ruxsat so'rasangiz — **Can / Could / May I + V1…?**" },
        {
          t: "examples", items: [
            { en: "Can I try this jacket on?", uz: "Bu kurtkani kiyib ko'rsam bo'ladimi?", note: "Do'konda." },
            { en: "Could I borrow your pen, please?", uz: "Qalamingizni so'rab tursam bo'ladimi?" },
            { en: "May I sit here?", uz: "Bu yerga o'tirsam maylimi?", note: "Rasmiy." },
            { en: "Can I have the bill, please?", uz: "Hisobni olib kelsangiz.", note: "Restoranda." },
          ],
        },
        { t: "p", md: "**borrow** va **lend** ni adashtirmang. Ikkalasi ham \"qarz berish/olish\"ga bog'liq, lekin yo'nalishi boshqa:" },
        {
          t: "table", head: ["Fe'l", "Ma'nosi", "Misol"], speak: [2],
          rows: [
            ["**borrow**", "so'rab olmoq (siz olasiz)", "Can I borrow your phone?"],
            ["**lend**", "so'rab bermoq (siz berasiz)", "Can you lend me your phone?"],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["Can I borrow your pen?", "Could you lend me your pen?"] },
          bad: { title: "Xato", items: ["Can you borrow me your pen?", "Can I lend your pen?"] },
        },
        { t: "check", ex: { k: "choice", q: "\"Sizning velosipedingizni so'rab tursam bo'ladimi?\"", opts: ["Can I lend your bike?", "Can I borrow your bike?", "Can you borrow me your bike?", "Can I borrowing your bike?"], a: 1, why: "Men olaman → **borrow**." } },
      ],
    },
    {
      title: "Takliflar: Would you like…? Shall I…? I'll…",
      blocks: [
        { t: "p", md: "Boshqa odamga biror narsa taklif qilish yoki yordam berish uchun uchta asosiy usul bor:" },
        {
          t: "table", head: ["Ibora", "Ma'nosi", "Misol"], speak: [2],
          rows: [
            ["**Would you like + ot?**", "Ichimlik, ovqat, narsa taklifi", "Would you like some tea?"],
            ["**Would you like to + fe'l?**", "Biror ishni taklif", "Would you like to come with us?"],
            ["**Shall I + V1?**", "Yordam taklifi (\"qilib beraymi?\")", "Shall I carry your bag?"],
            ["**I'll + V1**", "Shu zahoti yordam va'dasi", "I'll open the door for you."],
            ["**Can I help you?**", "Do'konda, ofisda", "Can I help you?"],
          ],
        },
        {
          t: "table", head: ["Javob", "Ma'nosi"], speak: [0],
          rows: [
            ["Yes, please. / Yes, that would be great.", "Ha, marhamat"],
            ["No, thanks. I'm fine.", "Yo'q, rahmat, kerak emas"],
            ["That's very kind of you.", "Siz juda mehribonsiz"],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["Would you like some plov?", "Would you like to sit down?", "Shall I help you?"] },
          bad: { title: "Xato", items: ["Do you like some plov?", "Would you like sit down?", "Shall I to help you?"] },
        },
        { t: "tip", tone: "warn", md: "**Do you like…?** va **Would you like…?** — bir xil emas! *Do you like tea?* = choy sizga umuman yoqadimi? *Would you like some tea?* = hozir choy ichmoqchimisiz? (taklif)." },
        { t: "check", ex: { k: "choice", q: "Mehmonga choy taklif qilasiz:", opts: ["Do you like tea?", "Would you like some tea?", "Shall you tea?", "You want tea?"], a: 1, why: "Taklif → **Would you like…?**" } },
        { t: "check", ex: { k: "fill", q: "It's heavy! ___ I carry that for you?", a: ["Shall", "Can", "Could"], why: "Yordam taklifi → **Shall I…?** (yoki Can I…?)" } },
      ],
    },
    {
      title: "Dialog: kafeda",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Waiter", en: "Good evening. Can I help you?", uz: "Xayrli kech. Sizga yordam bera olamanmi?" },
            { who: "Laylo", en: "Yes, please. I'd like a pot of green tea, please.", uz: "Ha, marhamat. Bir choynak ko'k choy olib keling." },
            { who: "Waiter", en: "Certainly. Would you like anything to eat?", uz: "Albatta. Biror yeguvchi narsa xohlaysizmi?" },
            { who: "Laylo", en: "Yes. Could I see the menu, please?", uz: "Ha. Menyuni ko'rsam bo'ladimi?" },
            { who: "Waiter", en: "Of course. Here you are.", uz: "Albatta. Mana." },
            { who: "Laylo", en: "Thank you. And could you open the window? It's a bit hot in here.", uz: "Rahmat. Derazani ochib bera olasizmi? Bu yerda biroz issiq." },
            { who: "Waiter", en: "No problem. I'll do it now.", uz: "Muammo yo'q. Hozir ochaman." },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Laylo wants to eat something immediately.", a: false, why: "Avval **menyuni** so'raydi — hali tanlamagan." } },
      ],
    },
    {
      title: "O'qing: Xonadondagi yordam",
      blocks: [
        {
          t: "text", title: "A helpful neighbour",
          en: "Dilnoza lives on the fifth floor, and the lift is broken today. She is carrying two heavy bags up the stairs. Her neighbour, Mr Rustam, sees her.\n\"Shall I help you with those bags?\" he asks.\n\"Oh, that's very kind of you. Yes, please!\"\n\"No problem. Would you like to have some tea with us later? My wife has made a cake.\"\n\"I'd love to! Could I bring something?\"\n\"No, thanks. Just come at six.\"\nDilnoza smiles. \"Thank you again. I'll see you at six!\"",
          uz: "Dilnoza beshinchi qavatda yashaydi, bugun lift buzilgan. U ikkita og'ir sumkani zinadan ko'tarib chiqmoqda. Qo'shnisi janob Rustam uni ko'radi.\n\"Bu sumkalarni ko'tarishga yordam beraymi?\" deb so'raydi u.\n\"Voy, bu juda yaxshi taklif. Ha, marhamat!\"\n\"Muammo yo'q. Keyinroq biznikida choy ichmaysizmi? Xotinim tort pishirdi.\"\n\"Mamnuniyat bilan! Biror narsa olib kelsam bo'ladimi?\"\n\"Yo'q, rahmat. Faqat soat oltida keling.\"\nDilnoza jilmayadi. \"Yana bir bor rahmat. Soat oltida ko'rishamiz!\"",
        },
        { t: "check", ex: { k: "choice", q: "What does Mr Rustam offer first?", opts: ["Some cake.", "To help with the bags.", "To fix the lift.", "To drive her home."], a: 1, why: "*Shall I help you with those bags?*" } },
        { t: "check", ex: { k: "tf", q: "Dilnoza has to bring a cake.", a: false, why: "*No, thanks. Just come at six.*" } },
      ],
    },
  ],
  words: [
    { en: "request", uz: "iltimos, so'rov", ipa: "rɪˈkwest", pos: "noun", ex: "I have a small request.", exUz: "Mening kichik iltimosim bor." },
    { en: "offer", uz: "taklif qilmoq; taklif", ipa: "ˈɒfə", pos: "verb / noun", ex: "He offered me a seat.", exUz: "U menga joy taklif qildi." },
    { en: "polite", uz: "muloyim, odobli", ipa: "pəˈlaɪt", pos: "adj", ex: "It's polite to say please.", exUz: "Iltimos deyish odobdan." },
    { en: "favour", uz: "yaxshilik, xizmat", ipa: "ˈfeɪvə", pos: "noun", ex: "Can you do me a favour?", exUz: "Menga bitta yaxshilik qila olasizmi?" },
    { en: "borrow", uz: "so'rab olmoq", ipa: "ˈbɒrəʊ", pos: "verb", ex: "Can I borrow your umbrella?", exUz: "Soyabonni so'rab tursam bo'ladimi?" },
    { en: "lend", uz: "so'rab bermoq, qarzga bermoq", ipa: "lend", pos: "verb", ex: "Could you lend me some money?", exUz: "Menga ozgina pul qarz bera olasizmi?" },
    { en: "pass", uz: "uzatmoq", ipa: "pɑːs", pos: "verb", ex: "Could you pass me the salt?", exUz: "Tuzni uzatib yuborasizmi?" },
    { en: "accept", uz: "qabul qilmoq", ipa: "əkˈsept", pos: "verb", ex: "She accepted the invitation.", exUz: "U taklifni qabul qildi." },
    { en: "decline", uz: "(muloyimlik bilan) rad etmoq", ipa: "dɪˈklaɪn", pos: "verb", ex: "He declined the offer politely.", exUz: "U taklifni muloyimlik bilan rad etdi." },
    { en: "certainly", uz: "albatta", ipa: "ˈsɜːtnli", pos: "adv", ex: "Certainly, I'll bring the menu.", exUz: "Albatta, menyuni olib kelaman." },
  ],
  practice: [
    { k: "match", pairs: [["request", "iltimos"], ["borrow", "so'rab olmoq"], ["lend", "so'rab bermoq"], ["polite", "muloyim"], ["certainly", "albatta"]] },
    { k: "listen", say: "Could you open the window, please?", opts: ["Could you open the window, please?", "Could I open the window, please?", "Should you open the window, please?"], a: 0 },
    { k: "listen", say: "Would you like some tea?", opts: ["Would you like some tea?", "Do you like some tea?", "Would you like to tea?"], a: 0 },
    { k: "choice", q: "Do'konda sotuvchiga: ___ a kilo of apples, please.", opts: ["I want", "Give me", "I'd like", "Me"], a: 2, why: "**I'd like** — eng muloyim." },
    { k: "choice", q: "Rustam: \"Would you like some cake?\" Laylo (xohlamaydi): ", opts: ["No, thanks. I'm fine.", "No.", "I don't want.", "Not like."], a: 0, why: "Muloyim rad etish: **No, thanks. I'm fine.**" },
    { k: "choice", q: "Qaysi gap **taklif** emas, **iltimos**?", opts: ["Shall I help you?", "Would you like some water?", "Could you help me?", "I'll carry it."], a: 2, why: "**Could you…?** — iltimos (men sizdan so'rayman)." },
    { k: "choice", q: "Can I ___ your dictionary for a minute?", opts: ["lend", "borrow", "give", "loan to"], a: 1, why: "Men olaman → **borrow**." },
    { k: "fill", q: "Would you like ___ come to dinner with us?", a: ["to"], why: "**Would you like to** + V1." },
    { k: "fill", q: "It's cold in here. ___ I close the window?", a: ["Shall", "Can", "Could", "Should"], why: "Taklif: **Shall I…?**" },
    { k: "fill", q: "Could you ___ me your pen? (qarz bering)", a: ["lend"], why: "Siz berasiz → **lend**." },
    { k: "tf", q: "**Give me a glass of water** — kafeda eng muloyim shakl.", a: false, why: "Buyruq shakli qo'pol. Yaxshisi: *Could I have a glass of water, please?*" },
    { k: "tf", q: "**Would you like some coffee?** — bu taklif.", a: true, why: "Would you like… = taklif." },
    { k: "order", uz: "Bu sumkani ko'tarishga yordam beraymi?", words: ["Shall", "I", "carry", "this", "bag?"], extra: ["to", "do"] },
    { k: "order", uz: "Menga hisobni bera olasizmi?", words: ["Could", "you", "give", "me", "the", "bill,", "please?"], extra: ["to", "gave"], alt: [["Could", "I", "have", "the", "bill,", "please?"]] },
    { k: "translate", uz: "Choy ichmoqchimisiz?", a: ["Would you like some tea?", "Would you like tea?", "Would you like a cup of tea?", "Would you like to have some tea?"] },
    { k: "speak", say: "Excuse me, could you tell me the time, please?", uz: "Kechirasiz, soat necha ekanligini ayta olasizmi?" },
  ],
  quiz: [
    { k: "choice", q: "Muloyim iltimos: ___ you help me with my homework?", opts: ["Could", "Do", "Are", "Should"], a: 0, why: "**Could you…?**" },
    { k: "choice", q: "Qaysi taklif **to'g'ri**?", opts: ["Would you like sit down?", "Would you like to sit down?", "Do you like to sit down?", "You would like sit down?"], a: 1, why: "**Would you like to** + V1." },
    { k: "choice", q: "Mehmonxonada: \"___ a room for two nights, please.\"", opts: ["I'd like", "Give me", "I want", "Me need"], a: 0, why: "**I'd like** muloyim." },
    { k: "choice", q: "**Could you open the door?** — Qaysi javob muloyim va to'g'ri?", opts: ["No.", "Sure, no problem.", "I don't can.", "Why you ask me?"], a: 1, why: "**Sure, no problem.**" },
    { k: "fill", q: "Can I ___ your phone? Mine is dead. (so'rab olmoq)", a: ["borrow"], why: "Men olaman → **borrow**." },
    { k: "fill", q: "Would you like ___ more coffee?", a: ["some"], why: "Taklifda odatda **some**." },
    { k: "tf", q: "**Do you like some tea?** = **Would you like some tea?**", a: false, why: "Birinchisi noto'g'ri; taklif uchun faqat *Would you like…?*" },
    { k: "listen", say: "Shall I help you with your bags?", opts: ["Shall I help you with your bags?", "Should I help you with your bags?", "Shall you help me with your bags?"], a: 0 },
    { k: "order", uz: "Menga yordam bera olasizmi?", words: ["Could", "you", "help", "me,", "please?"], extra: ["to", "do"], alt: [["Can", "you", "help", "me,", "please?"], ["Would", "you", "help", "me,", "please?"]] },
    { k: "translate", uz: "Qalamingizni so'rab tursam bo'ladimi?", a: ["Can I borrow your pen?", "Could I borrow your pen?", "May I borrow your pen?", "Can I borrow your pen, please?", "Could I borrow your pen, please?", "May I borrow your pen, please?"] },
  ],
  summary: [
    "Buyruq (*Give me…*) qo'pol eshitiladi. Muloyim: **Could you…?** va **I'd like…**; **I want…** ishlatmang.",
    "Iltimos: **Can / Could / Would you + V1?** Ruxsat: **Can / Could / May I + V1?**",
    "Taklif: **Would you like + ot / to + fe'l?**, **Shall I + V1?**, **I'll + V1.** (*Do you like…?* taklif emas!)",
    "**borrow** = men olaman; **lend** = men beraman. Rad etganda ham muloyim bo'ling: *Sorry, I can't…* / *No, thanks.*",
  ],
  homework: "Uch vaziyat uchun inglizcha mini-dialog yozing: (1) kafeda buyurtma berish, (2) do'stdan kitob so'rab turish, (3) mehmonga choy va yordam taklif qilish. Har birida kamida bitta **Could you…?**, bitta **Would you like…?** va bitta **I'll…** bo'lsin.",
};

export default lesson;
