import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u15-l1",
  title: "Must and have to",
  titleUz: "Must, have to, mustn't, don't have to",
  goal: "Majburiyatni **must** va **have to** bilan ifodalaysiz, ularning farqini bilasiz, eng muhimi — **mustn't** (\"mumkin emas\") bilan **don't have to** (\"shart emas\") ni adashtirmaysiz va *I must to go*, *he musts* kabi xatolardan qochasiz.",
  slides: [
    {
      title: "Must: kuchli majburiyat",
      blocks: [
        { t: "p", md: "**must** — modal fe'l. U \"kerak, shart, lozim\" degan kuchli ma'no beradi. Modal fe'llarning uchta oltin qoidasi bor:" },
        {
          t: "table", head: ["Qoida", "Misol"], speak: [1],
          rows: [
            ["Hamma shaxsda bir xil — **-s yo'q**", "I must go. He must go. They must go."],
            ["Keyin **to yo'q**, fe'l 1-shaklda", "You must study. (You must to study ❌)"],
            ["Inkor va savol uchun **do/does yo'q**", "You mustn't be late. Must I come?"],
          ],
        },
        {
          t: "examples", items: [
            { en: "I must call my mother today.", uz: "Bugun onamga qo'ng'iroq qilishim kerak.", note: "Shaxsiy fikr: \"men shuni zarur deb hisoblayman\"." },
            { en: "You must wear a seat belt.", uz: "Xavfsizlik kamarini taqishingiz shart.", note: "Qoida yoki qat'iy maslahat." },
            { en: "Aziz must be tired. He works too much.", uz: "Aziz charchagan bo'lsa kerak. U juda ko'p ishlaydi.", note: "must ning ikkinchi ma'nosi — taxmin (\"bo'lsa kerak\")." },
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I must go now.", "She must study more.", "We must not forget."] },
          bad: { title: "Xato", items: ["I must to go now.", "She musts study more.", "We don't must forget."] },
        },
        { t: "tip", tone: "warn", md: "O'zbekchada \"borishim kerak\" deymiz, shuning uchun inglizchada ham **to** qo'shgingiz keladi. Yodda tuting: **must + fe'l** (to yo'q!), lekin **have to** da **to bor**." },
        { t: "check", ex: { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["She must to go.", "She musts go.", "She must go.", "She does must go."], a: 2, why: "**must + V1**: to ham, -s ham, do/does ham kerak emas." } },
      ],
    },
    {
      title: "Have to: tashqi majburiyat",
      blocks: [
        { t: "p", md: "**have to** ham \"kerak, majbur\" degan ma'noni beradi. U oddiy fe'l kabi o'zgaradi — shuning uchun hamma zamonlarda ishlatish mumkin:" },
        {
          t: "table", head: ["Shakl", "Misol"], speak: [1],
          rows: [
            ["I / you / we / they **have to**", "We have to wear a uniform."],
            ["he / she / it **has to**", "Dilnoza has to get up at six."],
            ["Inkor: **don't / doesn't have to**", "He doesn't have to pay."],
            ["Savol: **Do / Does … have to …?**", "Do I have to come on Monday?"],
            ["O'tgan zamon: **had to**", "I had to wait for an hour."],
            ["Kelasi zamon: **will have to**", "You will have to show your passport."],
          ],
        },
        { t: "tip", tone: "info", md: "**has to** — faqat he/she/it bilan. Savolda **has** emas, **does**: *Does she **have** to go?* (Does she has to go? ❌)" },
        { t: "check", ex: { k: "fill", q: "Laylo ___ to work on Sundays. (U ishlashi kerak.)", a: ["has"], why: "she → **has to**." } },
        { t: "check", ex: { k: "fill", q: "Yesterday I ___ to stay at home. (kerak edi)", a: ["had"], why: "must ning o'tgan zamoni yo'q — **had to** ishlatamiz." } },
      ],
    },
    {
      title: "Mustn't va don't have to: katta farq!",
      blocks: [
        { t: "p", md: "Bu mavzuning eng muhim joyi. Ikkalasi ham inkor, lekin ma'nolari **butunlay boshqa**:" },
        {
          t: "table", head: ["Shakl", "Ma'nosi", "Misol"], speak: [2],
          rows: [
            ["**mustn't** + V1", "Mumkin emas, taqiqlangan", "You mustn't smoke here."],
            ["**don't / doesn't have to** + V1", "Shart emas, majbur emassiz (xohlasangiz mumkin)", "You don't have to come, but you can."],
          ],
        },
        {
          t: "examples", items: [
            { en: "You mustn't touch the paintings.", uz: "Rasmlarga tegish mumkin emas.", note: "Taqiq — qilsangiz, muammo bo'ladi." },
            { en: "It's Sunday. I don't have to get up early.", uz: "Yakshanba. Erta turishim shart emas.", note: "Erta tursam ham bo'ladi, turmasam ham." },
            { en: "Children mustn't cross the road alone.", uz: "Bolalar yo'lni yolg'iz kesib o'tmasligi kerak." },
            { en: "Tickets are free. You don't have to pay.", uz: "Chiptalar bepul. To'lashingiz shart emas." },
          ],
        },
        { t: "tip", tone: "warn", md: "Xatoga yo'l qo'ymang: *You **don't have to** park here* = \"Bu yerga qo'yishingiz shart emas\" (boshqa joyga ham bo'ladi). *You **mustn't** park here* = \"Bu yerga qo'yish taqiqlangan\"." },
        { t: "check", ex: { k: "choice", q: "**Tashrif buyuruvchilar o'tlarga bosmasligi kerak (taqiq).**", opts: ["Visitors don't have to walk on the grass.", "Visitors mustn't walk on the grass.", "Visitors must walk on the grass.", "Visitors haven't to walk on the grass."], a: 1, why: "Taqiq = **mustn't**." } },
        { t: "check", ex: { k: "choice", q: "**Bugun dars yo'q. Maktabga borishimiz ___.**", opts: ["mustn't", "don't have to", "haven't to", "must not to"], a: 1, why: "Majbur emas = **don't have to**." } },
      ],
    },
    {
      title: "Must yoki have to?",
      blocks: [
        { t: "p", md: "Ko'pincha ikkalasini ham ishlatsa bo'ladi. Aniq farq esa shunday:" },
        {
          t: "table", head: ["", "must", "have to"], speak: [],
          rows: [
            ["Kimdan?", "Gapiruvchining o'z fikri", "Qoida, qonun, boshqa odam"],
            ["Misol", "I must lose weight. (Men shunday deb o'ylayman.)", "I have to wear a tie at work. (Kompaniya talabi.)"],
            ["O'tgan zamon", "yo'q — had to", "had to"],
            ["Kelasi zamon", "yo'q — will have to", "will have to"],
            ["Savol", "Must I…? (rasmiy, kam)", "Do I have to…? (oddiy)"],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["Do I have to wear a uniform?", "We had to wait for the bus.", "I will have to study harder."], },
          bad: { title: "Xato", items: ["Do I must wear a uniform?", "We musted wait for the bus.", "I will must study harder."] },
        },
        { t: "tip", tone: "good", md: "Shubhangiz bo'lsa — **have to** ni tanlang. U xavfsiz: hamma zamonlarda ishlaydi va savol/inkori oddiy. Muhimi: **mustn't** (taqiq) ni boshqa ma'noda ishlatmang." },
        { t: "check", ex: { k: "fill", q: "Did you ___ to wait long at the bank?", a: ["have"], why: "did + V1: Did you **have to** wait…?" } },
      ],
    },
    {
      title: "O'qing: Yangi ish",
      blocks: [
        {
          t: "text", title: "Kamol's first day",
          en: "Kamol has a new job at a bank in Tashkent. On Monday his manager explains the rules.\n\"You must be at work at nine,\" she says. \"You have to wear a suit, and you mustn't use your phone with customers.\"\nKamol asks, \"Do I have to work on Saturdays?\"\n\"No, you don't have to work on Saturdays. But you have to finish your reports by Friday.\"\nKamol is a little nervous, but he likes the bank. Yesterday he had to learn a lot of new things. Next week he will have to speak to customers alone!",
          uz: "Kamol Toshkentdagi bankda yangi ishga kirdi. Dushanba kuni menejeri unga qoidalarni tushuntiradi.\n\"Soat to'qqizda ishda bo'lishingiz shart,\" deydi u. \"Kostyum kiyishingiz kerak va mijozlar bilan gaplashganda telefondan foydalanmasligingiz kerak.\"\nKamol so'raydi: \"Shanba kunlari ishlashim kerakmi?\"\n\"Yo'q, shanba kunlari ishlashingiz shart emas. Lekin hisobotlarni juma kuniga tugatishingiz kerak.\"\nKamol biroz hayajonda, lekin bank unga yoqadi. Kecha u ko'p yangi narsalarni o'rganishga majbur bo'ldi. Kelasi hafta mijozlar bilan yolg'iz gaplashishi kerak bo'ladi!",
        },
        { t: "check", ex: { k: "tf", q: "Kamol has to work on Saturdays.", a: false, why: "*No, you don't have to work on Saturdays.*" } },
        { t: "check", ex: { k: "choice", q: "What mustn't Kamol do with customers?", opts: ["Wear a suit.", "Use his phone.", "Finish reports.", "Be at work at nine."], a: 1, why: "*You mustn't use your phone with customers.*" } },
      ],
    },
    {
      title: "Dialog: uyda qoidalar",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Aziz", en: "Can I go to the park, Mum?", uz: "Onajon, bog'ga borsam bo'ladimi?" },
            { who: "Mum", en: "Yes, but you must finish your homework first.", uz: "Ha, lekin avval uy vazifangni tugatishing kerak." },
            { who: "Aziz", en: "I've done it. Do I have to take my little brother?", uz: "Qildim. Ukamni olib borishim kerakmi?" },
            { who: "Mum", en: "You don't have to, but he wants to come.", uz: "Shart emas, lekin u bormoqchi." },
            { who: "Aziz", en: "OK. We'll be back at six.", uz: "Mayli. Soat oltida qaytamiz." },
            { who: "Mum", en: "Good. And you mustn't go near the river!", uz: "Yaxshi. Daryo yoniga bormanglar!" },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Aziz must take his brother to the park.", a: false, why: "*You don't have to, but he wants to come* — majburiyat yo'q." } },
      ],
    },
  ],
  words: [
    { en: "rule", uz: "qoida", ipa: "ruːl", pos: "noun", ex: "There is one important rule in our house.", exUz: "Bizning uyda bitta muhim qoida bor." },
    { en: "obey", uz: "bo'ysunmoq, rioya qilmoq", ipa: "əˈbeɪ", pos: "verb", ex: "Drivers must obey the traffic rules.", exUz: "Haydovchilar yo'l harakati qoidalariga rioya qilishi kerak." },
    { en: "necessary", uz: "zarur, kerakli", ipa: "ˈnesəsəri", pos: "adj", ex: "Is it necessary to book a table?", exUz: "Stol band qilish zarurmi?" },
    { en: "forbidden", uz: "taqiqlangan", ipa: "fəˈbɪdn", pos: "adj", ex: "Smoking is forbidden in the hospital.", exUz: "Kasalxonada chekish taqiqlangan." },
    { en: "compulsory", uz: "majburiy", ipa: "kəmˈpʌlsəri", pos: "adj", ex: "School is compulsory until sixteen.", exUz: "Maktab o'n olti yoshgacha majburiy." },
    { en: "deadline", uz: "oxirgi muddat", ipa: "ˈdedlaɪn", pos: "noun", ex: "The deadline is Friday at noon.", exUz: "Oxirgi muddat — juma kuni tushgacha." },
    { en: "uniform", uz: "forma (kiyim)", ipa: "ˈjuːnɪfɔːm", pos: "noun", ex: "Do you have to wear a uniform?", exUz: "Forma kiyishingiz kerakmi?" },
    { en: "fine", uz: "jarima", ipa: "faɪn", pos: "noun", ex: "You'll get a fine if you park here.", exUz: "Bu yerga qo'ysangiz, jarima olasiz." },
    { en: "seat belt", uz: "xavfsizlik kamari", ipa: "ˈsiːt belt", pos: "noun", ex: "You must wear a seat belt in the car.", exUz: "Mashinada xavfsizlik kamarini taqishingiz shart." },
    { en: "on time", uz: "o'z vaqtida", ipa: "ɒn taɪm", pos: "phrase", ex: "The train arrived on time.", exUz: "Poyezd o'z vaqtida keldi." },
  ],
  practice: [
    { k: "match", pairs: [["rule", "qoida"], ["obey", "rioya qilmoq"], ["forbidden", "taqiqlangan"], ["compulsory", "majburiy"], ["fine", "jarima"]] },
    { k: "listen", say: "You mustn't be late.", opts: ["You mustn't be late.", "You don't have to be late.", "You must be late."], a: 0 },
    { k: "listen", say: "She has to get up early.", opts: ["She has to get up early.", "She has to get up late.", "She has to give up early."], a: 0 },
    { k: "choice", q: "You ___ park here. It's forbidden.", opts: ["don't have to", "mustn't", "doesn't have to", "have"], a: 1, why: "Taqiq → **mustn't**." },
    { k: "choice", q: "It's a holiday. We ___ go to school.", opts: ["mustn't", "must", "don't have to", "haven't"], a: 2, why: "Shart emas → **don't have to**." },
    { k: "choice", q: "Qaysi gap **xato**?", opts: ["He has to work today.", "I must to leave now.", "Do I have to pay?", "We had to wait."], a: 1, why: "**must** dan keyin **to** kerak emas: *I must leave now.*" },
    { k: "fill", q: "My brother ___ to wear glasses. (has/have)", a: ["has"], why: "my brother = he → **has to**." },
    { k: "fill", q: "___ I have to bring my passport?", a: ["Do"], why: "I bilan savol: **Do** I have to…?" },
    { k: "fill", q: "Last week we ___ to work on Saturday. (kerak bo'ldi)", a: ["had"], why: "O'tgan zamon → **had to**." },
    { k: "fill", q: "You ___ be quiet in the library.", a: ["must"], uz: "Kutubxonada jim bo'lishingiz kerak.", why: "Qoida → **must**." },
    { k: "tf", q: "**You mustn't come** va **You don't have to come** bir xil ma'noni beradi.", a: false, why: "Birinchisi — taqiq, ikkinchisi — shart emas." },
    { k: "tf", q: "**He musts go home** — to'g'ri gap.", a: false, why: "must ga -s qo'shilmaydi: *He must go home.*" },
    { k: "order", uz: "Men to'lashim kerakmi?", words: ["Do", "I", "have", "to", "pay?"], extra: ["must", "has"] },
    { k: "order", uz: "Siz bu yerda telefondan foydalanmasligingiz kerak.", words: ["You", "mustn't", "use", "your", "phone", "here."], extra: ["don't", "to"] },
    { k: "translate", uz: "U ertaga erta turishi kerak.", a: ["He has to get up early tomorrow.", "He must get up early tomorrow.", "Tomorrow he has to get up early.", "Tomorrow he must get up early."] },
    { k: "speak", say: "I have to be at work at nine, but I don't have to work on Sundays.", uz: "Soat to'qqizda ishda bo'lishim kerak, lekin yakshanba kunlari ishlashim shart emas." },
  ],
  quiz: [
    { k: "choice", q: "You ___ drive fast in the city. It's dangerous and forbidden.", opts: ["mustn't", "don't have to", "have to", "doesn't have to"], a: 0, why: "Taqiq → **mustn't**." },
    { k: "choice", q: "Dilnoza ___ to take a taxi. Her brother can drive her.", opts: ["doesn't have", "don't have", "mustn't", "hasn't"], a: 0, why: "she + shart emas → **doesn't have to**." },
    { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["Does she has to go?", "Does she have to go?", "Has she to go?", "Does she must go?"], a: 1, why: "**Does + she + have to + V1**." },
    { k: "choice", q: "Yesterday I ___ finish the report before noon.", opts: ["must", "had to", "have to", "musted"], a: 1, why: "must ning o'tgan zamoni yo'q → **had to**." },
    { k: "fill", q: "Next month he ___ have to pay a fine.", a: ["will"], why: "Kelasi zamon → **will have to**." },
    { k: "fill", q: "We ___ obey the rules. They are for everyone.", a: ["must", "have to"], why: "Majburiyat → **must** yoki **have to**." },
    { k: "tf", q: "**Tickets are free, so you mustn't pay.** — gap ma'nosi to'g'ri.", a: false, why: "To'g'ri variant: *you **don't have to** pay.*" },
    { k: "listen", say: "Do I have to wear a uniform?", opts: ["Do I have to wear a uniform?", "Must I wear a uniform?", "Did I have to wear a uniform?"], a: 0 },
    { k: "order", uz: "Biz shanba kunlari ishlashimiz shart emas.", words: ["We", "don't", "have", "to", "work", "on", "Saturdays."], extra: ["mustn't", "has"] },
    { k: "translate", uz: "Siz bu yerda chekmasligingiz kerak.", a: ["You mustn't smoke here.", "You must not smoke here."] },
  ],
  summary: [
    "**must** va **have to** — majburiyat. **must** dan keyin **to** yo'q, **-s** yo'q: *He must go.* **have to**: *He has to go.*",
    "**mustn't** = taqiq (*You mustn't smoke here*). **don't have to** = shart emas (*You don't have to come*).",
    "must ning o'tgan va kelasi zamoni yo'q: **had to**, **will have to**.",
    "**have to** da savol va inkor **do / does / did** bilan: *Do I have to…? She doesn't have to…*",
  ],
  homework: "Uyingizdagi yoki ishingizdagi 6 ta qoidani inglizcha yozing: 2 tasi **must**, 2 tasi **mustn't**, 2 tasi **don't have to** bilan. Keyin kecha **had to** bilan nima qilishga majbur bo'lganingiz haqida 2 ta gap qo'shing.",
};

export default lesson;
