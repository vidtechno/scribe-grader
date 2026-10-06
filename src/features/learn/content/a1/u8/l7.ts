import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u8-l7",
  title: "Healthy habits: should / shouldn't",
  titleUz: "Sog'lom odatlar: should / shouldn't",
  goal: "Maslahat berasiz va so'raysiz: **You should eat more fruit. You shouldn't skip breakfast. What should I do? — I think you should…** Sog'lom va zararli odatlar haqida gapirasiz.",
  slides: [
    {
      title: "should — maslahat",
      blocks: [
        { t: "p", md: "**should** = \"…ish kerak (deb o'ylayman)\", \"…gani ma'qul\". Bu **maslahat**, qat'iy qoida emas. Formula juda oddiy: **should + fe'lning o'zi**." },
        {
          t: "table", head: ["Ijobiy", "Inkor", "O'zbekcha"],
          rows: [
            ["I should sleep more.", "I shouldn't stay up late.", "Ko'proq uxlashim kerak. / Kech yotmasligim kerak."],
            ["You should drink water.", "You shouldn't drink so much cola.", "Suv ichishingiz kerak. / Bunchalik ko'p kola ichmasligingiz kerak."],
            ["She should see a doctor.", "She shouldn't work so hard.", "U shifokorga borishi kerak. / Bunchalik ko'p ishlamasligi kerak."],
            ["We should walk more.", "We shouldn't eat fast food.", "Ko'proq yurishimiz kerak. / Fast food yemasligimiz kerak."],
          ],
          speak: [0, 1],
        },
        { t: "tip", tone: "good", md: "**should** — *can* kabi: hamma shaxs uchun **bir xil**, -s olmaydi, **to** olmaydi.\n**shouldn't** = should not." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["You should eat more fruit.", "He should go to bed early.", "We shouldn't skip breakfast."] },
          bad: { title: "Xato", items: ["You should to eat more fruit.", "He shoulds go to bed early.", "We don't should skip breakfast."] },
        },
        { t: "check", ex: { k: "choice", q: "You look tired. You should ___ a break.", opts: ["take", "to take", "takes", "taking"], a: 0, why: "**should + fe'lning o'zi**: *should take*." } },
      ],
    },
    {
      title: "Savol: Should I…? What should I…?",
      blocks: [
        { t: "p", md: "Savolda **should** oldinga chiqadi (xuddi *can* kabi). *do / does* kerak emas!" },
        {
          t: "examples", items: [
            { en: "Should I take a jacket? — Yes, you should. It's cold.", uz: "Kurtka olsammikan? — Ha, oling. Sovuq." },
            { en: "Should we take a taxi? — No, we shouldn't. It's very near.", uz: "Taksiga chiqsakmikan? — Yo'q, kerak emas. Juda yaqin." },
            { en: "What should I eat before the exam?", uz: "Imtihondan oldin nima yesam yaxshi?" },
            { en: "How often should I go to the gym?", uz: "Sport zaliga necha marta borishim kerak?" },
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["Should I call him?", "What should I do?", "Yes, you should."] },
          bad: { title: "Xato", items: ["Do I should call him?", "What I should do?", "Yes, you do."] },
        },
        { t: "check", ex: { k: "choice", q: "\"Should I wear a coat?\" — \"___ It's very warm today.\"", opts: ["No, you shouldn't.", "No, you don't.", "Yes, you should.", "No, I shouldn't."], a: 0, why: "Issiq — palto kerak emas: **No, you shouldn't.**" } },
      ],
    },
    {
      title: "Muloyim maslahat: I think you should…",
      blocks: [
        { t: "p", md: "Maslahatni yumshoqroq qilish uchun **I think** qo'shamiz. Inkor maslahatda inglizlar odatda **I don't think you should…** deydi:" },
        {
          t: "examples", items: [
            { en: "I think you should see a doctor.", uz: "Menimcha, shifokorga ko'rinishingiz kerak." },
            { en: "I don't think you should eat that cake.", uz: "Menimcha, o'sha tortni yemaganingiz ma'qul.", note: "*I think you shouldn't…* dan tabiiyroq" },
            { en: "Maybe you should drink less coffee.", uz: "Balki kamroq qahva ichganingiz ma'quldir." },
            { en: "You should try green tea. It's really good.", uz: "Ko'k choyni sinab ko'ring. Juda yaxshi." },
          ],
        },
        { t: "tip", tone: "info", md: "**should** — maslahat (\"…gani yaxshi\"). Qat'iy majburiyat uchun **must / have to** ishlatiladi — ularni 10-bo'limda o'rganamiz. Do'stga maslahat berganda **should** — eng to'g'ri tanlov." },
        { t: "check", ex: { k: "fill", q: "I don't ___ you should eat fried food every day.", a: ["think"], uz: "Menimcha, har kuni qovurilgan ovqat yemaganingiz ma'qul." } },
      ],
    },
    {
      title: "Sog'lom va zararli odatlar",
      blocks: [
        {
          t: "table", head: ["✅ Sog'lom (You should…)", "❌ Zararli (You shouldn't…)"],
          rows: [
            ["eat fresh fruit and vegetables", "eat a lot of junk food"],
            ["drink six to eight glasses of water", "drink too much cola or coffee"],
            ["have breakfast every morning", "skip breakfast"],
            ["walk or do exercise every day", "sit at the computer all day"],
            ["go to bed before midnight", "use your phone in bed"],
            ["eat a little fried food", "eat too many sweets"],
          ],
          speak: [0, 1],
        },
        { t: "tip", tone: "warn", md: "**too much** + sanalmaydigan (*too much sugar*), **too many** + sanaladigan ko'plik (*too many sweets*) — 2-darsdagi qoida bu yerda ham ishlaydi!\n**do exercise** yoki **exercise** (fe'l): *I exercise every morning.* *make exercise* ❌." },
        { t: "check", ex: { k: "choice", q: "\"You shouldn't eat too ___ sweets.\"", opts: ["many", "much", "lot"], a: 0, why: "**sweets** sanaladi → **too many**." } },
      ],
    },
    {
      title: "Talaffuz: should — l o'qilmaydi",
      blocks: [
        {
          t: "sounds", items: [
            { label: "should", say: "should", uz: "**\"shud\"** — *l* o'qilmaydi! Qisqa \"u\". Gapda kuchsiz: \"shəd\".", examples: ["should", "You should rest."] },
            { label: "shouldn't", say: "shouldn't", uz: "**\"shudnt\"** — oxiridagi *t* deyarli eshitilmaydi, lekin **n** aniq.", examples: ["shouldn't", "You shouldn't worry."] },
            { label: "healthy", say: "healthy", uz: "**\"helθi\"** — *th* tilni tishlar orasiga qo'yib. \"helsi\" ❌", examples: ["healthy", "healthy food"] },
            { label: "vegetables", say: "vegetables", uz: "**\"VEJ-tə-bəlz\"** — **3** bo'g'in, \"ve-ge-tab-les\" ❌", examples: ["vegetables", "fresh vegetables"] },
            { label: "habit", say: "habit", uz: "**\"HÆ-bit\"** — urg'u birinchi bo'g'inda.", examples: ["habit", "a good habit"] },
          ],
        },
        { t: "tip", tone: "warn", md: "**should** va **shouldn't** ni farqlash uchun oxiridagi **n** ga quloq soling: *You should go* / *You shouldn't go* — ma'no butunlay teskari!" },
        { t: "check", ex: { k: "listen", say: "You shouldn't eat so much sugar.", opts: ["You shouldn't eat so much sugar.", "You should eat so much sugar.", "You shouldn't eat so many sweets."], a: 0, why: "\"shudnt\" — **shouldn't** (kerak emas)." } },
      ],
    },
    {
      title: "O'qing: shifokorga savol",
      blocks: [
        {
          t: "text", title: "Ask the doctor",
          en: "Dear Dr Karimova,\nI'm a student and I'm always tired. I go to bed at two in the morning because I watch videos on my phone. I usually skip breakfast and eat junk food for lunch. What should I do? — Sanjar, 19\nDear Sanjar,\nYou shouldn't use your phone in bed — put it in another room at night. You should go to bed before midnight and sleep for seven or eight hours. Breakfast is important, so you shouldn't skip it: eat some eggs or porridge and a piece of fruit. And try to walk for thirty minutes every day. I think you'll feel better in two weeks! — Dr Karimova",
          uz: "Hurmatli doktor Karimova,\nMen talabaman va doim charchoq yuraman. Tungi soat ikkida yotaman, chunki telefonimda video ko'raman. Odatda nonushtani tashlab ketaman va tushlikka zararli tez ovqat yeyman. Nima qilishim kerak? — Sanjar, 19 yosh\nHurmatli Sanjar,\nTo'shakda telefondan foydalanmang — kechasi uni boshqa xonaga qo'ying. Yarim tundan oldin yotishingiz va yetti-sakkiz soat uxlashingiz kerak. Nonushta muhim, shuning uchun uni tashlab ketmang: bir nechta tuxum yoki bo'tqa va bitta meva yeng. Va har kuni o'ttiz daqiqa yurishga harakat qiling. Menimcha, ikki haftada o'zingizni yaxshiroq his qilasiz! — Doktor Karimova",
        },
        { t: "check", ex: { k: "tf", q: "Dr Karimova thinks Sanjar should sleep with his phone.", a: false, why: "*You shouldn't use your phone in bed — put it in another room.*" } },
        { t: "check", ex: { k: "choice", q: "What should Sanjar eat for breakfast?", opts: ["junk food", "eggs or porridge and some fruit", "nothing — he should skip it"], a: 1 } },
      ],
    },
    {
      title: "Dialog: \"Doim charchayman\"",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Nilufar", en: "You look tired, Aziza. Are you OK?", uz: "Charchagan ko'rinasan, Aziza. Yaxshimisan?" },
            { who: "Aziza", en: "Not really. I've got exams next week, and I study until three in the morning.", uz: "Unchalik emas. Kelasi hafta imtihonlarim bor, ertalab soat uchgacha o'qiyman." },
            { who: "Nilufar", en: "That's too late! I think you should study in the morning, not at night.", uz: "Bu juda kech! Menimcha, kechasi emas, ertalab o'qiganing ma'qul." },
            { who: "Aziza", en: "Maybe. And I drink five cups of coffee a day.", uz: "Balki. Yana kuniga besh chashka qahva ichaman." },
            { who: "Nilufar", en: "Five? You shouldn't drink so much coffee. You should drink more water.", uz: "Beshta? Bunchalik ko'p qahva ichmasliging kerak. Ko'proq suv ich." },
            { who: "Aziza", en: "What should I do in the evening, then?", uz: "Unda kechqurun nima qilay?" },
            { who: "Nilufar", en: "Go for a walk, have a light dinner and go to bed early. Good luck!", uz: "Sayr qil, yengil kechki ovqat ye va erta yot. Omad!" },
          ],
        },
        { t: "check", ex: { k: "order", uz: "Siz bunchalik ko'p qahva ichmasligingiz kerak.", words: ["You", "shouldn't", "drink", "so", "much", "coffee."], extra: ["many", "to"], why: "**coffee** sanalmaydi → **so much**; **shouldn't + fe'l**." } },
      ],
    },
  ],
  words: [
    { en: "healthy", uz: "sog'lom, foydali", ipa: "ˈhel.θi", pos: "adjective", ex: "Shakarob is a healthy salad.", exUz: "Shakarob — foydali salat." },
    { en: "junk food", uz: "zararli tez ovqat (fast food, chips…)", ipa: "ˈdʒʌŋk ˌfuːd", pos: "noun", ex: "You shouldn't eat junk food every day.", exUz: "Har kuni zararli ovqat yemasligingiz kerak." },
    { en: "habit", uz: "odat", ipa: "ˈhæb.ɪt", pos: "noun", ex: "Walking every day is a good habit.", exUz: "Har kuni yurish — yaxshi odat." },
    { en: "skip", uz: "tashlab ketmoq, o'tkazib yubormoq", ipa: "skɪp", pos: "verb", ex: "Don't skip breakfast.", exUz: "Nonushtani tashlab ketmang." },
    { en: "exercise", uz: "jismoniy mashq; mashq qilmoq", ipa: "ˈek.sə.saɪz", pos: "noun / verb", ex: "You should do some exercise every day.", exUz: "Har kuni biroz mashq qilishingiz kerak." },
    { en: "diet", uz: "ovqatlanish tartibi; parhez", ipa: "ˈdaɪ.ət", pos: "noun", ex: "A good diet has a lot of vegetables.", exUz: "Yaxshi ovqatlanishda sabzavot ko'p bo'ladi." },
    { en: "fresh", uz: "yangi, toza (uzilgan, pishgan)", ipa: "freʃ", pos: "adjective", ex: "Eat fresh fruit, not sweets.", exUz: "Shirinlik emas, yangi meva yeng." },
    { en: "fried", uz: "qovurilgan", ipa: "fraɪd", pos: "adjective", ex: "Fried food isn't very healthy.", exUz: "Qovurilgan ovqat unchalik foydali emas." },
    { en: "sweets", uz: "shirinliklar, konfetlar", ipa: "swiːts", pos: "noun (plural)", ex: "Children love sweets.", exUz: "Bolalar shirinliklarni yaxshi ko'radi." },
    { en: "stay up late", uz: "kechgacha uxlamay o'tirmoq", ipa: "ˌsteɪ ʌp ˈleɪt", pos: "phrase", ex: "You shouldn't stay up late before an exam.", exUz: "Imtihondan oldin kechgacha o'tirmasligingiz kerak." },
  ],
  practice: [
    { k: "listen", say: "I think you should see a doctor.", opts: ["I think you should see a doctor.", "I think you shouldn't see a doctor.", "I think you should see a dentist."], a: 0 },
    { k: "choice", q: "You should ___ more water.", opts: ["drink", "to drink", "drinks", "drinking"], a: 0, why: "**should + fe'lning o'zi**." },
    { k: "choice", q: "Qaysi gap **xato**?", opts: ["She should go to bed earlier.", "He shoulds eat more fruit.", "We shouldn't skip breakfast.", "Should I see a doctor?"], a: 1, why: "**should** -s olmaydi: *He should eat…*" },
    { k: "choice", q: "\"Should I take an umbrella?\" — \"___ It's raining.\"", opts: ["Yes, you should.", "Yes, you do.", "Yes, I should.", "No, you shouldn't."], a: 0 },
    { k: "fill", q: "You ___ eat so much junk food. It's bad for you.", a: ["shouldn't", "should not"], uz: "Bunchalik ko'p zararli ovqat yemasligingiz kerak. Bu sizga zarar." },
    { k: "fill", q: "You look tired. You ___ go to bed early tonight.", a: ["should"], uz: "Charchagan ko'rinasiz. Bugun erta yotishingiz kerak." },
    { k: "fill", q: "What ___ I do? I can't sleep at night.", a: ["should", "can"], uz: "Nima qilsam ekan? Kechasi uxlay olmayapman.", hint: "maslahat so'rang" },
    { k: "fill", q: "Children shouldn't eat too ___ sweets.", a: ["many"], uz: "Bolalar juda ko'p shirinlik yemasligi kerak.", why: "**sweets** sanaladi → **too many**." },
    { k: "tf", q: "Inkor maslahatda *I don't think you should…* odatda *I think you shouldn't…* dan tabiiyroq eshitiladi.", a: true },
    { k: "tf", q: "**should** dan keyin **to** keladi: *You should to sleep more.*", a: false, why: "**to** kerak emas: *You should sleep more.*" },
    { k: "match", pairs: [["junk food", "zararli tez ovqat"], ["skip", "tashlab ketmoq"], ["habit", "odat"], ["sweets", "shirinliklar"], ["stay up late", "kechgacha o'tirmoq"]] },
    { k: "order", uz: "Siz ko'proq sabzavot yeyishingiz kerak.", words: ["You", "should", "eat", "more", "vegetables."], extra: ["to", "eats"] },
    { k: "order", uz: "Nonushtani tashlab ketmasligingiz kerak.", words: ["You", "shouldn't", "skip", "breakfast."], extra: ["don't", "to"] },
    { k: "translate", uz: "Men nima qilishim kerak? (maslahat so'rab)", a: ["What should I do"] },
    { k: "translate", uz: "U (he) ko'proq uxlashi kerak.", a: ["He should sleep more", "He should get more sleep"] },
    { k: "speak", say: "I think you should drink more water and go to bed earlier.", uz: "Menimcha, ko'proq suv ichib, ertaroq yotishingiz kerak." },
  ],
  quiz: [
    { k: "choice", q: "\"I've got toothache.\" — \"You ___ see a dentist.\"", opts: ["should", "shouldn't", "should to"], a: 0 },
    { k: "choice", q: "\"Should we take a taxi?\" — \"No, we ___. The shop is very near.\"", opts: ["shouldn't", "don't", "aren't", "should"], a: 0 },
    { k: "choice", q: "\"Kechasi ko'p shirinlik yemasligingiz kerak.\"", opts: ["You shouldn't eat a lot of sweets at night.", "You don't should eat a lot of sweets at night.", "You shouldn't to eat a lot of sweets at night.", "You should not eating a lot of sweets at night."], a: 0 },
    { k: "fill", q: "She ___ drink so much cola. It's bad for her teeth.", a: ["shouldn't", "should not"], uz: "U bunchalik ko'p kola ichmasligi kerak. Tishlariga zarar." },
    { k: "fill", q: "___ I eat before or after the gym?", a: ["should"], uz: "Sport zalidan oldin ovqatlansammi yoki keyinmi?", hint: "maslahat so'rang" },
    { k: "listen", say: "You shouldn't stay up late.", opts: ["You shouldn't stay up late.", "You should stay up late.", "You shouldn't get up late."], a: 0 },
    { k: "tf", q: "**should** hamma shaxs uchun bir xil: *I should, she should, they should*.", a: true },
    { k: "match", pairs: [["healthy", "sog'lom, foydali"], ["fresh", "yangi"], ["fried", "qovurilgan"], ["exercise", "jismoniy mashq"], ["diet", "ovqatlanish tartibi"]] },
    { k: "translate", uz: "Siz nonushtani tashlab ketmasligingiz kerak.", a: ["You shouldn't skip breakfast", "You should not skip breakfast", "You shouldn't miss breakfast", "You should not miss breakfast"] },
    { k: "order", uz: "Menimcha, siz ko'proq yurishingiz kerak.", words: ["I", "think", "you", "should", "walk", "more."], extra: ["to", "walks"] },
  ],
  summary: [
    "**should + fe'lning o'zi** — maslahat: *You should eat more fruit.* (*to* yo'q, *-s* yo'q).",
    "Inkor: **shouldn't** — *You shouldn't skip breakfast.* Savol: **Should I…? / What should I do?** — *Yes, you should. / No, you shouldn't.*",
    "Yumshoq maslahat: **I think you should… / I don't think you should… / Maybe you should…**",
    "Talaffuz: **should** = \"shud\" (*l* o'qilmaydi); *should* va *shouldn't* ni **n** orqali farqlang.",
  ],
  homework: "O'zingizning 3 ta yaxshi va 3 ta yomon odatingizni yozing (*I skip breakfast. I drink a lot of water…*). Keyin har biriga o'zingizga maslahat yozing: *I should… / I shouldn't…*. Bonus: Sanjar kabi \"doktorga xat\" yozing va javobini ham o'zingiz tuzing.",
};

export default lesson;
