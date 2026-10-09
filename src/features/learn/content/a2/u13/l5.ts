import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u13-l5",
  title: "May and might",
  titleUz: "May / might: ehtimol",
  goal: "Kelajak haqida **ishonchingiz komil bo'lmaganda** **may / might + fe'l** bilan ehtimolni ifodalaysiz (*It might rain. I may go to Samarkand*), *will* bilan farqini bilasiz va **maybe / may be** ni adashtirmaysiz.",
  slides: [
    {
      title: "Ishonch darajasi",
      blocks: [
        { t: "p", md: "Kelajak haqida ba'zan **aniq** bilamiz, ba'zan **aniq emas** — ehtimol bor, lekin kafolat yo'q. Inglizchada ishonch darajasi so'z bilan beriladi:" },
        {
          t: "table", head: ["Ishonch", "Misol"], speak: [1],
          rows: [
            ["100% — aniq", "I will pass the exam. / I won't be late."],
            ["Deyarli aniq", "I'll probably pass. / I probably won't go."],
            ["Ehtimol (50% yoki kamroq)", "I may pass. / I might go."],
            ["Ehtimoldan yiroq", "I probably won't. / I definitely won't."],
          ],
        },
        { t: "tip", tone: "info", md: "**may** va **might** — ikkalasi ham \"ehtimol, bo'lishi mumkin\". Kundalik nutqda **might** ko'proq ishlatiladi, ehtimol biroz **kamroq** bo'lsa. Ma'noda katta farq yo'q." },
        { t: "check", ex: { k: "choice", q: "Siz ishonchsizsiz: \"Balki Samarqandga boraman.\"", opts: ["I go to Samarkand.", "I might go to Samarkand.", "I might to go to Samarkand.", "I mights go to Samarkand."], a: 1, why: "**might + V1**." } },
      ],
    },
    {
      title: "Shakli: may / might + V1",
      blocks: [
        { t: "p", md: "**may** va **might** — modal fe'llar (**will, can** kabi). Barcha egalar bilan bir xil, undan keyin **V1**:" },
        {
          t: "table", head: ["Shakl", "Qolip", "Misol"], speak: [2],
          rows: [
            ["Darak", "ega + may / might + V1", "It might rain this afternoon."],
            ["Inkor", "ega + may not / might not + V1", "She may not come. / We might not have time."],
            ["Savol", "odatda Do you think…? bilan", "Do you think it will rain?"],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["He might come tomorrow.", "She may not be at home.", "I might call you later."] },
          bad: { title: "Xato", items: ["He mights come tomorrow.", "She may to not be at home.", "I might to call you later."] },
        },
        { t: "tip", tone: "warn", md: "Inkor qisqartmasi **yo'q**: *mayn't* deyilmaydi, *mightn't* kamdan-kam. Doim ikkita so'z yozing: **may not**, **might not**. Savol berish uchun *Might it rain?* emas, **Do you think it will rain?** deng." },
        { t: "check", ex: { k: "fill", q: "Aziz is not sure. He ___ not come to the party. (might)", a: ["might", "may"], why: "Ikkalasi ham mumkin: **might not / may not**." } },
      ],
    },
    {
      title: "May / might yoki will?",
      blocks: [
        { t: "p", md: "Bir gap ichida ishonch darajasi o'zgaradi. Tinglovchi sizning ishonchingizni shu orqali tushunadi:" },
        {
          t: "table", head: ["Aniq (will)", "Aniq emas (may / might)"], speak: [0, 1],
          rows: [
            ["I'll call you tonight.", "I might call you tonight."],
            ["The shop will be closed on Sunday.", "The shop might be closed on Sunday."],
            ["She won't come.", "She may not come."],
          ],
        },
        {
          t: "examples", items: [
            { en: "I'm not sure about tomorrow. I might stay at home.", uz: "Ertaga haqida ishonchim yo'q. Uyda qolishim mumkin." },
            { en: "Take an umbrella. It might rain.", uz: "Soyabon ol. Yomg'ir yog'ishi mumkin." },
            { en: "My brother may visit us in summer.", uz: "Akam yozda bizni ko'rgani kelishi mumkin." },
            { en: "We might not go on holiday this year.", uz: "Biz bu yil ta'tilga bormasligimiz mumkin." },
          ],
        },
        { t: "tip", tone: "good", md: "Xato qilmaslik uchun: aniq bo'lmagan narsani **will** bilan aytmang. *I will be rich* (ishonch bilan) o'rniga *I might be rich one day* — haqiqatga yaqinroq va xushmuomalaroq." },
        { t: "check", ex: { k: "choice", q: "**Men aniq bilmayman, ehtimol kechikaman.**", opts: ["I will be late.", "I might be late.", "I won't be late.", "I am late."], a: 1 } },
      ],
    },
    {
      title: "Maybe yoki may be?",
      blocks: [
        { t: "p", md: "Bu ikkisi o'xshash, lekin gapdagi **o'rni** boshqa:" },
        {
          t: "table", head: ["", "Qolip", "Misol"], speak: [2],
          rows: [
            ["maybe", "gap boshida, keyin ega + fe'l", "Maybe she is at home. / Maybe I'll go."],
            ["may be", "ega + may be (be fe'li)", "She may be at home."],
            ["might + V1", "ega + might + fe'l", "She might be at home."],
          ],
        },
        { t: "examples", items: [
          { en: "Maybe it will snow tonight.", uz: "Balki bugun kechqurun qor yog'ar." },
          { en: "It may snow tonight.", uz: "Bugun kechqurun qor yog'ishi mumkin." },
          { en: "Perhaps we'll stay home.", uz: "Balki uyda qolarmiz." },
        ] },
        { t: "tip", tone: "warn", md: "**maybe** — bir so'z, gap boshida (yoki oxirida). **may be** — ikki so'z, fe'l. *Maybe he is late* ✅ = *He may be late* ✅. Lekin *He maybe late* ❌." },
        { t: "check", ex: { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["Maybe he is late.", "He maybe is late.", "Might he is late.", "Maybe he might to be late."], a: 0 } },
      ],
    },
    {
      title: "May: ruxsat so'rash",
      blocks: [
        { t: "p", md: "**May** yana bir muhim vazifada: **xushmuomala ruxsat so'rash** (*May I…?*). Bu rasmiyroq, ish va xizmat ko'rsatish sohasida ko'p uchraydi. Bu yerda ehtimol emas, ruxsat." },
        {
          t: "table", head: ["Qolip", "Misol", "Javob"], speak: [1, 2],
          rows: [
            ["May I + V1?", "May I come in?", "Yes, of course. / Sure, come in."],
            ["May I + V1?", "May I sit here?", "Sorry, it's taken."],
            ["May I + V1?", "May I use your phone, please?", "Of course."],
          ],
        },
        { t: "tip", tone: "info", md: "Ruxsat so'rashda *Can I…?* (norasmiy) va *May I…?* (rasmiy) ishlatiladi. Do'stlar orasida **Can I borrow your pen?** yetarli. **Might** bu vazifada deyarli ishlatilmaydi." },
        { t: "check", ex: { k: "tf", q: "**May I come in?** — ehtimol emas, ruxsat so'rash.", a: true } },
      ],
    },
    {
      title: "O'qing: Ertangi pikinik",
      blocks: [
        {
          t: "text", title: "A picnic in the mountains",
          en: "Laylo and her friends are planning a picnic in the Chimgan mountains this Saturday. But the weather forecast says it might rain in the afternoon, so nobody is sure.\n\"Maybe we should go in the morning,\" says Aziz. \"It may be cloudy, but it probably won't rain before one o'clock.\"\nKamol isn't sure he can come. \"I might have to work,\" he says. \"I'll tell you tomorrow.\" Laylo has an idea: \"If it rains, we may go to a café instead.\" Everybody agrees. They don't know what will happen, but they will bring umbrellas and plenty of food!",
          uz: "Laylo va uning do'stlari shu shanba kuni Chimyon tog'larida pikinik qilishni rejalashtirishyapti. Lekin ob-havo ma'lumotiga ko'ra, tushdan keyin yomg'ir yog'ishi mumkin, shuning uchun hech kim aniq emas.\n\"Balki ertalab borarmiz,\" deydi Aziz. \"Havo bulutli bo'lishi mumkin, lekin soat birgacha yomg'ir yog'masa kerak.\"\nKamol kela olishiga ishonchi komil emas. \"Ishlashimga to'g'ri kelishi mumkin,\" deydi u. \"Ertaga aytaman.\" Laylo'da fikr bor: \"Agar yomg'ir yog'sa, o'rniga kafega borishimiz mumkin.\" Hamma rozi. Nima bo'lishini bilishmaydi, lekin soyabon va ko'p ovqat olib kelishadi!",
        },
        { t: "check", ex: { k: "choice", q: "Why isn't Kamol sure he can come?", opts: ["He doesn't like picnics.", "He might have to work.", "It will rain all day.", "He is ill."], a: 1 } },
        { t: "check", ex: { k: "tf", q: "The forecast says it will definitely rain on Saturday afternoon.", a: false, why: "*It **might** rain* — aniq emas." } },
      ],
    },
    {
      title: "Dialog: hali qaror qilmadim",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Dilnoza", en: "What are you doing this summer, Aziz?", uz: "Aziz, bu yozda nima qilasan?" },
            { who: "Aziz", en: "I'm not sure yet. I might go to Khiva, or I may stay in Tashkent.", uz: "Hali aniq emas. Xivaga borishim mumkin yoki Toshkentda qolarman." },
            { who: "Dilnoza", en: "Why don't you come with us to Bukhara? We're going in July.", uz: "Nega biz bilan Buxoroga bormaysan? Iyulda boramiz." },
            { who: "Aziz", en: "Maybe! I may not have enough money, but I'll check my bank account.", uz: "Balki! Pulim yetmasligi mumkin, lekin hisobimni tekshirib ko'raman." },
            { who: "Dilnoza", en: "OK, tell me next week. The tickets might get expensive.", uz: "Mayli, kelasi hafta ayt. Chiptalar qimmatlashib ketishi mumkin." },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Aziz has decided to go to Bukhara.", a: false, why: "*Maybe! I may not have enough money…* — hali qaror qilmagan." } },
      ],
    },
  ],
  words: [
    { en: "maybe", uz: "balki", ipa: "ˈmeɪbi", pos: "adv", ex: "Maybe we'll go to the lake.", exUz: "Balki ko'lga boramiz." },
    { en: "chance", uz: "imkoniyat, ehtimol", ipa: "tʃɑːns", pos: "noun", ex: "There's a chance of rain.", exUz: "Yomg'ir yog'ish ehtimoli bor." },
    { en: "hope", uz: "umid qilmoq", ipa: "həʊp", pos: "verb", ex: "I hope it doesn't rain.", exUz: "Yomg'ir yog'masa edi." },
    { en: "forecast", uz: "(ob-havo) bashorati", ipa: "ˈfɔːkɑːst", pos: "noun", ex: "The forecast is good for Sunday.", exUz: "Yakshanba uchun bashorat yaxshi." },
    { en: "storm", uz: "bo'ron", ipa: "stɔːm", pos: "noun", ex: "There might be a storm tonight.", exUz: "Bugun kechqurun bo'ron bo'lishi mumkin." },
    { en: "cancel", uz: "bekor qilmoq", ipa: "ˈkænsl", pos: "verb", ex: "They may cancel the match.", exUz: "Ular o'yinni bekor qilishi mumkin." },
    { en: "delay", uz: "kechikish; kechiktirmoq", ipa: "dɪˈleɪ", pos: "noun/verb", ex: "The flight might have a delay.", exUz: "Reys kechikishi mumkin." },
    { en: "traffic jam", uz: "tirbandlik", ipa: "ˈtræfɪk dʒæm", pos: "noun", ex: "I might be late because of a traffic jam.", exUz: "Tirbandlik tufayli kechikishim mumkin." },
    { en: "not sure", uz: "ishonchi komil emas", ipa: "nɒt ʃɔː", pos: "phrase", ex: "I'm not sure about Friday.", exUz: "Juma haqida ishonchim yo'q." },
    { en: "enough", uz: "yetarli", ipa: "ɪˈnʌf", pos: "adj/adv", ex: "I may not have enough time.", exUz: "Vaqtim yetmasligi mumkin." },
  ],
  practice: [
    { k: "match", pairs: [["maybe", "balki"], ["forecast", "bashorat"], ["cancel", "bekor qilmoq"], ["traffic jam", "tirbandlik"], ["enough", "yetarli"]] },
    { k: "listen", say: "It might rain this afternoon.", opts: ["It might rain this afternoon.", "It will rain this afternoon.", "It rained this afternoon."], a: 0 },
    { k: "listen", say: "She may not come to the party.", opts: ["She may come to the party.", "She may not come to the party.", "She does not come to the party."], a: 1 },
    { k: "fill", q: "I'm not sure. I ___ go to the cinema tonight.", a: ["might", "may"], why: "Ishonch past → **may / might**." },
    { k: "fill", q: "He ___ not be at home. Try his mobile.", a: ["may", "might"] },
    { k: "fill", q: "___ she is late. Let's wait.", a: ["Maybe", "Perhaps"], uz: "Balki u kechikkandir. Kutaylik." },
    { k: "fill", q: "Do you think it ___ snow tomorrow?", a: ["will"], why: "Savol: **Do you think it will…?**" },
    { k: "choice", q: "Qaysi gap **xato**?", opts: ["He might come.", "She may not know.", "I might to go.", "They may stay home."], a: 2, why: "**might** dan keyin **to** yo'q." },
    { k: "choice", q: "**Men 100% ishonaman:** \"Men kechikmayman.\"", opts: ["I might not be late.", "I won't be late.", "I may not be late.", "Maybe I'm late."], a: 1 },
    { k: "choice", q: "**___ I use your phone, please?**", opts: ["May", "Must", "Will", "Am"], a: 0, why: "Xushmuomala ruxsat so'rash: **May I…?**" },
    { k: "tf", q: "**mayn't** — **may not** ning keng tarqalgan qisqartmasi.", a: false, why: "**mayn't** ishlatilmaydi; **may not** deb yoziladi." },
    { k: "tf", q: "**She maybe late** — to'g'ri gap.", a: false, why: "To'g'ri: **She may be late** yoki **Maybe she is late**." },
    { k: "order", uz: "Balki biz ertaga Buxoroga boramiz.", words: ["We", "might", "go", "to", "Bukhara", "tomorrow."], extra: ["mights", "going"], alt: [["We", "may", "go", "to", "Bukhara", "tomorrow."], ["Tomorrow", "we", "might", "go", "to", "Bukhara."], ["Tomorrow", "we", "may", "go", "to", "Bukhara."]] },
    { k: "translate", uz: "Bugun kechqurun yomg'ir yog'ishi mumkin.", a: ["It might rain tonight.", "It may rain tonight.", "It might rain this evening.", "It may rain this evening."] },
    { k: "speak", say: "I'm not sure yet. I might go to Samarkand.", uz: "Hali aniq emas. Samarqandga borishim mumkin." },
  ],
  quiz: [
    { k: "fill", q: "It's cloudy. It ___ rain later. (might)", a: ["might", "may"] },
    { k: "fill", q: "We ___ not have time for lunch.", a: ["might", "may"] },
    { k: "choice", q: "\"Kamol kelishi mumkin.\"", opts: ["Kamol mights come.", "Kamol might to come.", "Kamol might come.", "Kamol maybe come."], a: 2 },
    { k: "choice", q: "**___ it will be sunny on Sunday.**", opts: ["May be", "Maybe", "Might", "Mayn't"], a: 1 },
    { k: "choice", q: "**Ishonchli va'da:** \"Men albatta qo'ng'iroq qilaman.\"", opts: ["I might call.", "I may call.", "I'll definitely call.", "Maybe I call."], a: 2 },
    { k: "listen", say: "He might not know the answer.", opts: ["He might not know the answer.", "He does not know the answer.", "He might know the answer."], a: 0 },
    { k: "tf", q: "**Might** ni *did*, *does* kabi yordamchi fe'l bilan ishlatamiz.", a: false, why: "**might** — modal fe'l, yordamchi kerak emas: *He might not come.*" },
    { k: "tf", q: "**May I sit here?** — ruxsat so'rash.", a: true },
    { k: "order", uz: "U kelmasligi mumkin.", words: ["He", "might", "not", "come."], extra: ["to", "mights"], alt: [["He", "may", "not", "come."]] },
    { k: "translate", uz: "Balki biz ertaga uyda qolarmiz.", a: ["Maybe we'll stay at home tomorrow.", "Maybe we will stay at home tomorrow.", "We might stay at home tomorrow.", "We may stay at home tomorrow.", "Maybe we'll stay home tomorrow.", "We might stay home tomorrow.", "We may stay home tomorrow.", "Maybe we'll stay at home.", "Maybe we will stay at home.", "Maybe we'll stay home."] },
  ],
  summary: [
    "**may / might + V1** = ehtimol, ishonch past: *It might rain. I may go.* Hamma egalar bilan bir xil, **to** va **-s** yo'q.",
    "Inkor: **may not / might not** (*mayn't* yo'q). Savol uchun: *Do you think it will…?*",
    "Aniq narsa — **will / won't**, noaniq — **may / might**.",
    "**Maybe** gap boshida (*Maybe he is late*), **may be** fe'l sifatida (*He may be late*). **May I…?** — xushmuomala ruxsat so'rash.",
  ],
  homework: "Haftalik rejangizdagi 5 ta aniq bo'lmagan ish haqida gap yozing (*I might go to… / I may not…*). Ob-havo bashoratini ingliz tilida o'qing va 3 ta gapni *It might… / There may be…* bilan qayta ayting.",
};

export default lesson;
