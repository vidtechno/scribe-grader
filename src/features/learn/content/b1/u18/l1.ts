import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u18-l1",
  title: "Present Perfect: experiences and results",
  titleUz: "Present Perfect: tajriba va natija (ever, never, already, yet, just)",
  goal: "**Present Perfect** ni uchta vazifada ishlatasiz: hayotiy **tajriba** (*I've run a marathon*), **hozirgi natija** (*I've lost my passport*) va **yangilik** (*They've just won*). Savol, inkor va qisqa javoblarni to'g'ri tuzasiz hamda **This is the first time I've…** va **the best … I've ever…** qoliplarini bilib olasiz.",
  slides: [
    {
      title: "Shakl: have / has + V3",
      blocks: [
        { t: "p", md: "A2 darajada Present Perfect bilan tanishgansiz. Endi uni chuqurroq o'rganamiz. Shakli oddiy: **have / has + V3** (o'tgan zamon sifatdoshi). Muhimi — **fikr**: biz o'tgan ish haqida gapiramiz, lekin u **hozirgi vaqt bilan bog'liq**: tajriba hozir ham sizda bor, natija hozir ham ko'rinib turibdi." },
        {
          t: "table", head: ["Shakl", "Misol"], speak: [1],
          rows: [
            ["+ : I / you / we / they + **have** + V3", "We have visited five countries."],
            ["+ : he / she / it + **has** + V3", "She has changed her job."],
            ["− : **haven't / hasn't** + V3", "I haven't seen that film."],
            ["? : **Have / Has** + ega + V3?", "Has he called you?"],
            ["Qisqa javob", "Yes, I have. / No, she hasn't."],
          ],
        },
        { t: "tip", tone: "info", md: "Og'zaki nutqda doim qisqartma ishlatamiz: *I've, you've, we've, they've, he's, she's, it's*. Diqqat: **'s** ikki xil bo'lishi mumkin. *She's finished* = she **has** finished (V3 kelyapti). *She's tired* = she **is** tired. Fe'lning shakliga qarab farqlang." },
        { t: "check", ex: { k: "choice", q: "**___ your sister ever lived abroad?**", opts: ["Have", "Has", "Does", "Is"], a: 1, why: "*your sister* = she, shuning uchun **Has** + ega + V3." } },
        { t: "check", ex: { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["He have finished his work.", "He has finish his work.", "He has finished his work.", "He is finished his work."], a: 2, why: "**has + V3**: *has finished*. *have* faqat I / you / we / they bilan." } },
      ],
    },
    {
      title: "Uch vazifa: tajriba, natija, yangilik",
      blocks: [
        { t: "p", md: "Present Perfect inglizchada uch asosiy holatda ishlatiladi. Uchalasida ham **aniq o'tgan vaqt aytilmaydi**:" },
        {
          t: "examples", items: [
            { en: "I've run a marathon, but I've never climbed a mountain.", uz: "Men marafonda yugurganman, lekin hech qachon tog'ga chiqmaganman.", note: "**1. Hayotiy tajriba.** Umrimizda bo'lgan yoki bo'lmagan ish." },
            { en: "I can't get in. I've lost my keys.", uz: "Ichkariga kira olmayman. Kalitlarimni yo'qotib qo'ydim.", note: "**2. Hozirgi natija.** O'tgan ish hozirgi holatni tushuntiradi." },
            { en: "Have you heard? Tom has won a prize!", uz: "Eshitdingmi? Tom mukofot yutibdi!", note: "**3. Yangilik.** Yaqinda bo'lgan, hozir ham dolzarb voqea." },
          ],
        },
        { t: "tip", tone: "info", md: "O'zbek tilida bunday gaplar ko'pincha «-gan, -ib qolgan» shaklida keladi: *yo'qotib qo'ydim, yutibdi, bo'lganman*. Shu shakl sizga Present Perfect ni eslatsin. Lekin ish **aniq vaqtda** bo'lgan bo'lsa (*kecha, 2020-yilda*), inglizchada Past Simple kerak." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I've lost my phone.", "Have you ever tried Korean food?", "She passed her exam yesterday."] },
          bad: { title: "Xato", items: ["I have lost my phone yesterday.", "Did you ever tried Korean food?", "She has just passed her exam yesterday."] },
        },
        { t: "check", ex: { k: "choice", q: "Which sentence gives a **present result**?", opts: ["I went to the bank on Monday.", "I've broken my arm, so I can't write.", "She was born in a small village.", "We lived in Samarkand in 2015."], a: 1, why: "*I've broken my arm* — o'tgan ish (sindirish) hozirgi holatni (yoza olmaslik) tushuntiradi." } },
        { t: "check", ex: { k: "tf", q: "**I've seen that film last week.** — bu gap to'g'ri.", a: false, why: "**last week** — aniq o'tgan vaqt. To'g'risi: *I saw that film last week.*" } },
      ],
    },
    {
      title: "Tajriba: ever, never, before, times",
      blocks: [
        { t: "p", md: "Hayotiy tajriba haqida gapirganda quyidagi so'zlar ko'p uchraydi:" },
        {
          t: "table", head: ["So'z / qolip", "Ma'nosi", "Misol"], speak: [2],
          rows: [
            ["ever", "hech (savolda)", "Have you ever met a famous person?"],
            ["never", "hech qachon", "I've never been on a plane."],
            ["before", "avval, ilgari", "I haven't tried it before."],
            ["once / twice / three times", "bir / ikki / uch marta", "She has won twice."],
            ["How many times…?", "necha marta?", "How many times have you been to London?"],
            ["so far", "hozirgacha", "So far, I have read four books this year."],
          ],
        },
        {
          t: "examples", items: [
            { en: "This is the first time I've flown.", uz: "Men birinchi marta uchayapman.", note: "**This is the first time** + Present Perfect. *This is the first time I flew* deb aytilmaydi." },
            { en: "It's the best coffee I've ever had.", uz: "Bu men ichgan eng yaxshi qahva.", note: "Orttirma daraja + **I've ever** + V3." },
            { en: "That was the worst meal I've ever eaten.", uz: "Bu men yegan eng yomon ovqat edi.", note: "Bosh gap Past bo'lsa ham, tajriba haqida **I've ever eaten** deyiladi." },
          ],
        },
        { t: "tip", tone: "warn", md: "**ever** darak gapda odatda ishlatilmaydi: ~~I've ever been to Paris~~. Darak gapda **never** yoki oddiy gap ishlating: *I've been to Paris* / *I've never been to Paris*. **ever** savolda va orttirma daraja bilan keladi." },
        { t: "check", ex: { k: "fill", q: "This is the first time I ___ in front of a large group. (speak)", a: ["have spoken", "'ve spoken"], why: "**This is the first time** dan keyin Present Perfect: *I have spoken*." } },
        { t: "check", ex: { k: "choice", q: "**It's the most beautiful city I ___ visited.**", opts: ["ever", "have ever", "never have", "did ever"], a: 1, why: "Qolip: orttirma daraja + **I have ever** + V3." } },
      ],
    },
    {
      title: "Tartibsiz fe'llar va vaqt davrlari",
      blocks: [
        { t: "p", md: "Oddiy fe'llarda V3 = V2 (*worked, visited*). Tartibsiz fe'llarda V3 ni alohida yodlash kerak. Eng ko'p ishlatiladiganlari:" },
        {
          t: "table", head: ["V1", "V2", "V3"], speak: [0, 2],
          rows: [
            ["be", "was / were", "been"],
            ["do", "did", "done"],
            ["go", "went", "gone / been"],
            ["see", "saw", "seen"],
            ["write", "wrote", "written"],
            ["eat", "ate", "eaten"],
            ["take", "took", "taken"],
            ["give", "gave", "given"],
            ["break", "broke", "broken"],
            ["buy", "bought", "bought"],
          ],
        },
        { t: "tip", tone: "warn", md: "Odatiy xato: V2 ni V3 o'rniga qo'yish: ~~I have wrote~~, ~~She has ate~~. To'g'risi: *I have written*, *She has eaten*. Bir juft so'z: **gone** va **been** farqini keyingi darsda alohida ko'ramiz." },
        { t: "p", md: "**Tugamagan vaqt davri** haqida ham Present Perfect ishlatiladi: *today, this week, this month, this year*. Davr hali davom etayotgani uchun, ish hali ham o'sha davrga kirishi mumkin:" },
        {
          t: "examples", items: [
            { en: "I've drunk three cups of tea today.", uz: "Bugun uch chashka choy ichdim.", note: "Bugun hali tugamagan." },
            { en: "We haven't had much rain this month.", uz: "Bu oy yomg'ir ko'p yog'madi.", note: "Oy hali tugamagan." },
            { en: "Have you been to the gym this week?", uz: "Bu hafta zalga bordingmi?" },
          ],
        },
        { t: "check", ex: { k: "choice", q: "**She has ___ a lot of emails this morning.** (write)", opts: ["wrote", "written", "writed", "write"], a: 1, why: "write — wrote — **written**. Present Perfect da V3 kerak." } },
      ],
    },
    {
      title: "O'qing: Kamolning yutuqlari",
      blocks: [
        {
          t: "text", title: "Kamol's busy year",
          en: "Kamol has had a busy year. He has started a new job in a software company, and he has already learned a lot. He has made new friends there, too. Last month he took part in his first running competition. It was the hardest thing he has ever done, but he finished! He has never run so far before. He hasn't received his medal yet, but he is very proud. Now he has decided to try something new. He has just signed up for a swimming course, and he has bought new goggles. \"I've never been a good swimmer,\" he says, \"but I'm ready to learn.\"",
          uz: "Kamolning bu yili band o'tdi. U dasturiy ta'minot kompaniyasida yangi ishni boshladi va allaqachon ko'p narsa o'rgandi. U yerda yangi do'stlar ham orttirdi. O'tgan oy u birinchi yugurish musobaqasida qatnashdi. Bu uning hayotida qilgan eng og'ir ishi edi, lekin u marraga yetdi! U ilgari hech qachon bunchalik uzoq yugurmagan. Medalini hali olmadi, lekin juda faxrlanadi. Endi u yangi narsani sinab ko'rmoqchi. U hozirgina suzish kursiga yozildi va yangi suzish ko'zoynagini sotib oldi. «Men hech qachon yaxshi suzuvchi bo'lmaganman,» deydi u, «lekin o'rganishga tayyorman.»",
        },
        { t: "check", ex: { k: "tf", q: "Kamol has already received his medal.", a: false, why: "Matnda: *He hasn't received his medal yet.* — hali olmagan." } },
        { t: "check", ex: { k: "choice", q: "Why does the text say **Last month he took part**?", opts: ["Because last month is a finished, definite time.", "Because he has never run before.", "Because it is a question.", "Because the competition is today."], a: 0, why: "**Last month** — aniq o'tgan vaqt, shuning uchun Past Simple: *took part*." } },
      ],
    },
    {
      title: "Dialog: yangiliklar",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Madina", en: "Sardor, have you heard the news? Nilufar has got a new job!", uz: "Sardor, yangilikni eshitdingmi? Nilufar yangi ishga kiribdi!" },
            { who: "Sardor", en: "Really? Where has she started working?", uz: "Rostdanmi? U qayerda ishlay boshlabdi?" },
            { who: "Madina", en: "At a travel agency. She has always loved travelling.", uz: "Sayohat agentligida. U doim sayohatni yaxshi ko'rgan." },
            { who: "Sardor", en: "That's perfect. Has she been to many countries?", uz: "Zo'r ekan. U ko'p mamlakatlarda bo'lganmi?" },
            { who: "Madina", en: "Yes, about twelve so far. But she has never been to Japan.", uz: "Ha, hozirgacha o'n ikkitacha. Lekin Yaponiyada hech bo'lmagan." },
            { who: "Sardor", en: "Maybe her new job will help. I haven't called her yet. I'll do it now.", uz: "Balki yangi ishi yordam berar. Men unga hali qo'ng'iroq qilmadim. Hozir qilaman." },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Sardor has already called Nilufar.", a: false, why: "U *I haven't called her yet* dedi — hali qo'ng'iroq qilmagan." } },
      ],
    },
  ],
  words: [
    { en: "achieve", uz: "erishmoq, qo'lga kiritmoq", ipa: "əˈtʃiːv", pos: "verb", ex: "She has achieved all her goals this year.", exUz: "U bu yil barcha maqsadlariga erishdi." },
    { en: "succeed", uz: "muvaffaqiyat qozonmoq", ipa: "səkˈsiːd", pos: "verb", ex: "He has finally succeeded in passing his driving test.", exUz: "U nihoyat haydovchilik imtihonidan o'tishga muvaffaq bo'ldi." },
    { en: "fail", uz: "yiqilmoq (imtihonda), muvaffaqiyatsizlikka uchramoq", ipa: "feɪl", pos: "verb", ex: "I have failed this exam twice.", exUz: "Men bu imtihondan ikki marta yiqilganman." },
    { en: "challenge", uz: "qiyin sinov, qiyinchilik", ipa: "ˈtʃæl.ɪndʒ", pos: "noun", ex: "Learning a new language is a big challenge.", exUz: "Yangi til o'rganish katta sinov." },
    { en: "competition", uz: "musobaqa, tanlov", ipa: "ˌkɒm.pəˈtɪʃ.ən", pos: "noun", ex: "She has entered a photography competition.", exUz: "U fotosurat tanloviga qatnashish uchun yozildi." },
    { en: "award", uz: "mukofot, sovrin", ipa: "əˈwɔːd", pos: "noun", ex: "The film has won three awards.", exUz: "Film uchta mukofot yutdi." },
    { en: "volunteer", uz: "ko'ngilli (kishi); ko'ngilli bo'lmoq", ipa: "ˌvɒl.ənˈtɪər", pos: "noun", ex: "I have worked as a volunteer at a hospital.", exUz: "Men kasalxonada ko'ngilli bo'lib ishlaganman." },
    { en: "proud", uz: "faxrlangan, g'ururlangan", ipa: "praʊd", pos: "adj", ex: "My parents are proud of me.", exUz: "Ota-onam men bilan faxrlanishadi." },
    { en: "skill", uz: "malaka, ko'nikma", ipa: "skɪl", pos: "noun", ex: "She has developed many useful skills.", exUz: "U ko'p foydali ko'nikmalarni rivojlantirdi." },
    { en: "take part in", uz: "qatnashmoq", ipa: "teɪk pɑːt ɪn", pos: "phrase", ex: "Have you ever taken part in a race?", exUz: "Hech poygada qatnashganmisiz?" },
  ],
  practice: [
    { k: "choice", q: "**Mum ___ a new car.** (Yangilik: onam mashina sotib oldi.)", opts: ["has bought", "have bought", "buyed", "is bought"], a: 0, why: "*Mum* = she → **has + V3**: *has bought*." },
    { k: "choice", q: "**___ you ever taken part in a competition?**", opts: ["Did", "Have", "Has", "Do"], a: 1, why: "Hayotiy tajriba savoli: **Have you ever…?**" },
    { k: "listen", say: "I've never failed an exam.", opts: ["I've never failed an exam.", "I've ever failed an exam.", "I never fail an exam.", "I've just failed an exam."], a: 0 },
    { k: "fill", q: "She ___ just won an award. (have)", a: ["has", "'s"], why: "she → **has**; *just* has va V3 orasida turadi." },
    { k: "fill", q: "We haven't seen this film ___.", a: ["before", "yet"], why: "Inkorda gap oxirida **before** (ilgari) yoki **yet** (hali) kelishi mumkin." },
    { k: "fill", q: "It's the funniest book I have ___ read.", a: ["ever"], why: "Orttirma daraja + **I have ever** + V3." },
    { k: "fill", q: "Tom has ___ his phone, so he can't call you. (lose)", a: ["lost"], why: "lose — lost — **lost**. Natija: hozir telefon yo'q." },
    { k: "order", uz: "Men bu yil ikki marta chet elga borganman.", words: ["I", "have", "travelled", "abroad", "twice", "this", "year."], extra: ["did", "ever"], alt: [["I've", "travelled", "abroad", "twice", "this", "year."], ["This", "year", "I", "have", "travelled", "abroad", "twice."], ["This", "year", "I've", "travelled", "abroad", "twice."]], why: "*this year* tugamagan davr → Present Perfect." },
    { k: "order", uz: "Sen hech kasalxonada ko'ngilli bo'lib ishlaganmisan?", words: ["Have", "you", "ever", "volunteered", "at", "a", "hospital?"], extra: ["did", "never"], why: "**Have you ever + V3?** tajriba savoli." },
    { k: "translate", uz: "Men hech qachon bunday qiyin sinovga duch kelmaganman.", a: ["I have never had such a difficult challenge.", "I've never had such a difficult challenge.", "I have never faced such a difficult challenge.", "I've never faced such a difficult challenge.", "I have never had such a hard challenge.", "I've never had such a hard challenge."], why: "Tajriba inkori: **have never + V3**." },
    { k: "translate", uz: "Bu mening birinchi marta suzishim.", a: ["This is the first time I have swum.", "This is the first time I've swum.", "This is my first time swimming."], why: "**This is the first time** + Present Perfect: *I've swum*." },
    { k: "fix", wrong: "I have wrote three emails today.", a: ["I have written three emails today.", "I've written three emails today."], hint: "write — wrote — ...?", why: "Present Perfect da V3 kerak: **written**." },
    { k: "fix", wrong: "Have you ever been to Paris last year?", a: ["Did you go to Paris last year?", "Have you ever been to Paris?"], hint: "Aniq vaqt bilan Present Perfect bo'lmaydi.", why: "**last year** — aniq vaqt → Past Simple; yoki vaqtni olib tashlang." },
    { k: "match", pairs: [["achieve", "erishmoq"], ["competition", "musobaqa"], ["award", "mukofot"], ["proud", "faxrlangan"], ["skill", "ko'nikma"]] },
    { k: "speak", say: "It's the best coffee I've ever had.", uz: "Bu men ichgan eng yaxshi qahva." },
  ],
  quiz: [
    { k: "choice", q: "**We ___ our homework, so we can go out now.**", opts: ["have finished", "finished yesterday", "has finished", "are finish"], a: 0, why: "Hozirgi natija: *have finished* (hozir bo'sh)." },
    { k: "choice", q: "**This is the first time she ___ abroad.**", opts: ["travels", "travelled", "has travelled", "is travelling"], a: 2, why: "**This is the first time** + Present Perfect." },
    { k: "choice", q: "Qaysi gap noto'g'ri?", opts: ["I've never eaten snails.", "Have you ever lost your passport?", "I've ever been to Rome.", "She hasn't called yet."], a: 2, why: "**ever** darak gapda ishlatilmaydi; *I've been to Rome* yoki *I've never been to Rome*." },
    { k: "fill", q: "My brother ___ never taken part in a race. (have)", a: ["has"], why: "brother = he → **has never**. (*hasn't never* — ikki inkor bo'lib qoladi.)" },
    { k: "fill", q: "They have just ___ a new house. (buy)", a: ["bought"], why: "buy — bought — **bought**." },
    { k: "fill", q: "How many times ___ you been to London?", a: ["have"], why: "Present Perfect savoli: **have you been**." },
    { k: "listen", say: "Has she won an award yet?", opts: ["Has she won an award yet?", "Did she win an award yesterday?", "Does she win awards?"], a: 0 },
    { k: "tf", q: "**I have lost my keys** gapida hozirgi natija (kalit hozir yo'q) tushuniladi.", a: true, why: "Present Perfect o'tgan ishning hozirgi natijasini ko'rsatadi." },
    { k: "order", uz: "U hali mukofotini olgani yo'q.", words: ["He", "hasn't", "received", "his", "award", "yet."], extra: ["already", "did"], alt: [["He", "has", "not", "received", "his", "award", "yet."]], why: "Inkor + oxirida **yet**." },
    { k: "translate", uz: "Siz hech chet elda yashaganmisiz?", a: ["Have you ever lived abroad?", "Have you ever lived in another country?"], why: "Tajriba savoli: **Have you ever + V3?**" },
  ],
  summary: [
    "**Present Perfect = have / has + V3.** Inkor: *haven't / hasn't + V3*. Savol: *Have / Has + ega + V3?*",
    "Uch vazifa: **hayotiy tajriba** (*I've run a marathon*), **hozirgi natija** (*I've lost my keys*), **yangilik** (*She has just won*). Aniq o'tgan vaqt aytilmaydi.",
    "Tajriba so'zlari: **ever** (savolda), **never**, **before**, **once / twice / three times**, **so far**. Darak gapda *ever* ishlatilmaydi.",
    "Qoliplar: **This is the first time I've…** va **the best … I've ever…**",
    "**today, this week, this year** kabi tugamagan davrlar bilan ham Present Perfect ishlatiladi. Tartibsiz fe'llarda V3 ni yodlang: *written, eaten, seen, been*.",
  ],
  homework: "Hayotingizdagi 6 ta tajriba haqida yozing: 3 ta *I've…* (nima qilganingiz) va 3 ta *I've never…* (hali qilmaganingiz). Keyin *This is the first time I've…* qolipi bilan bitta gap va *It's the best … I've ever…* qolipi bilan bitta gap qo'shing.",
};

export default lesson;
