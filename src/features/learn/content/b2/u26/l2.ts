import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u26-l2",
  title: "Reporting passives",
  titleUz: "Reporting passive: It is said that…, He is believed to…, She is thought to have…",
  goal: "Yangilik va ilmiy uslubdagi **reporting passive** ni tuzasiz va tushunasiz: *It is said that he is rich. / He is said to be rich. / She is thought to have left.* Aktiv gapni reporting passive'ga aylantirasiz va **is suggested to**, **is expected will** kabi xatolardan qochasiz.",
  slides: [
    {
      title: "Reporting passive nima?",
      blocks: [
        { t: "p", md: "Yangiliklarda ko'pincha «kim aytdi» muhim emas, chunki ma'lumot **keng tarqalgan fikr, taxmin yoki xabar**. Shunda **reporting passive** ishlatiladi: *The minister is said to be ill. It is reported that two people were injured.*" },
        { t: "p", md: "O'zbek tilida buni «aytishlaricha…, ma'lum bo'lishicha…, deb hisoblanadi» bilan beramiz. Inglizchada ikkita qolip bor:" },
        {
          t: "table", head: ["Qolip", "Tuzilishi", "Misol"], speak: [2],
          rows: [
            ["A: It …", "It + be + V3 + **that** + gap", "It is said that the company is losing money."],
            ["B: Ega …", "Ega + be + V3 + **to** + fe'l", "The company is said to be losing money."],
          ],
        },
        { t: "p", md: "Ikkala gap ham bir xil ma'noni beradi. **A** qolipi oddiy, **B** qolipi esa ixchamroq va yangilik uslubida ko'proq uchraydi." },
        {
          t: "table", head: ["Fe'l", "Ma'no", "Misol"], speak: [2],
          rows: [
            ["say, believe, think", "aytiladi, ishoniladi, hisoblanadi", "He is thought to be abroad."],
            ["report, know, understand", "xabar qilinadi, ma'lum", "She is known to have lived here."],
            ["expect, estimate", "kutiladi, taxminan baholanadi", "Prices are expected to rise."],
            ["consider, regard", "deb hisoblanadi", "It is considered to be a safe city."],
            ["claim, allege", "da'vo qilinadi (isbotsiz)", "He is alleged to have lied."],
          ],
        },
        { t: "check", ex: { k: "choice", q: "*It is believed that the painting is worth millions.* gapining ikkinchi qolipi qaysi?", opts: ["The painting is believed to be worth millions.", "The painting believes to be worth millions.", "The painting is believed that it is worth millions.", "The painting is believing worth millions."], a: 0, why: "B qolipi: ega + **is believed to** + fe'l." } },
      ],
    },
    {
      title: "B qolipi: to + fe'l shakllari",
      blocks: [
        { t: "p", md: "**to** dan keyingi shakl ish **qachon** bo'lganini ko'rsatadi: hozir, davom etayotgan yoki oldin." },
        {
          t: "table", head: ["Shakl", "Qachon", "Misol"], speak: [2],
          rows: [
            ["to + V", "doim yoki shu payt, kelajak", "The company is said to employ 500 people."],
            ["to be + V-ing", "hozir davom etyapti", "The minister is reported to be visiting Paris."],
            ["to have + V3", "oldin bo'lgan ish", "The thief is thought to have escaped."],
            ["to have been + V-ing", "oldin davom etgan ish", "He is believed to have been working abroad."],
            ["to be + V3", "passive infinitive", "The report is expected to be published soon."],
            ["to have been + V3", "oldin bo'lgan passive ish", "The painting is believed to have been stolen."],
          ],
        },
        { t: "p", md: "Reporting fe'li o'tgan zamonda bo'lsa ham, qoida o'sha: **to have + V3** — «aytilgan paytdan oldin»." },
        {
          t: "examples", items: [
            { en: "The singer was said to be living in Dubai.", uz: "Qo'shiqchi Dubayda yashayotgan emish (o'sha paytda).", note: "was said + to be + -ing: o'sha paytdagi holat." },
            { en: "The singer was said to have moved to Dubai.", uz: "Qo'shiqchi Dubayga ko'chgan emish.", note: "was said + to have + V3: ko'chish aytilgan paytdan oldin." },
            { en: "Three people are feared to have died in the fire.", uz: "Yong'inda uch kishi halok bo'lgan deb xavotir qilinmoqda." },
          ],
        },
        { t: "tip", tone: "info", md: "**will** reporting passive'da ishlatilmaydi: *Prices are expected to rise* (**will rise** emas). Kelajak ma'nosi **expected / likely / due** so'zlaridan keladi." },
        { t: "check", ex: { k: "choice", q: "The thief is thought ___ through a window last night.", opts: ["to escape", "to have escaped", "to be escaping", "escaping"], a: 1, why: "**last night** — oldin bo'lgan ish: **to have escaped**." } },
        { t: "check", ex: { k: "fill", q: "At the moment, the minister is reported ___ visiting Paris.", a: ["to be"], why: "Hozir davom etyapti: **to be visiting**." } },
      ],
    },
    {
      title: "Aktiv gapni reporting passive'ga aylantirish",
      blocks: [
        { t: "p", md: "Boshlang'ich gap: **People say that the mayor owns three houses.** Uch qadamda o'zgartiramiz:" },
        {
          t: "table", head: ["Qadam", "Natija"],
          rows: [
            ["1. «People say that» ni **It is said that** ga almashtiring", "It is said that the mayor owns three houses."],
            ["2. that-gapdagi egani boshiga chiqaring", "The mayor …"],
            ["3. **is said to** + fe'l (zamonga qarab to / to be -ing / to have V3)", "The mayor is said to own three houses."],
          ],
        },
        {
          t: "examples", items: [
            { en: "They expect that prices will rise. → Prices are expected to rise.", uz: "Narxlar oshishi kutilmoqda." },
            { en: "People believe that she was born in Khiva. → She is believed to have been born in Khiva.", uz: "Uning Xivada tug'ilgani ishoniladi." },
            { en: "Experts think that the dam is leaking. → The dam is thought to be leaking.", uz: "To'g'on oqayotgan deb hisoblanmoqda." },
            { en: "Reports say that the CEO has resigned. → The CEO is reported to have resigned.", uz: "Bosh direktor iste'foga chiqqani xabar qilinmoqda." },
          ],
        },
        { t: "tip", tone: "warn", md: "Agar that-gapdagi fe'l **o'tgan zamonda** bo'lsa (*left, was born, has resigned*), B qolipida **to have + V3** kerak. Agar **hozirgi zamonda** bo'lsa (*owns, is leaking*), **to + V** yoki **to be + V-ing**." },
        { t: "check", ex: { k: "order", uz: "Aytishlaricha, u uch tilda gapiradi.", words: ["He", "is", "said", "to", "speak", "three", "languages."], extra: ["that", "speaks"], why: "**He is said to speak** — hozirgi doimiy fakt." } },
        { t: "check", ex: { k: "choice", q: "People think that the actor lived in Rome as a child. →", opts: ["The actor is thought to live in Rome as a child.", "The actor is thought to have lived in Rome as a child.", "The actor is thought to be lived in Rome as a child.", "The actor is thought that lived in Rome as a child."], a: 1, why: "*lived* — o'tgan zamon, shuning uchun **to have lived**." } },
      ],
    },
    {
      title: "Uslub, cheklovlar va kollokatsiyalar",
      blocks: [
        { t: "p", md: "Reporting passive — **yangilik, akademik va rasmiy** uslub. Gaplashuvda odam *They say…, I heard that…* deydi. Yozma ishda esa *is said to, is believed to, is reported to* ma'lumot manbasi noaniqligini ko'rsatadi: ishonch past, lekin xabar bor." },
        {
          t: "table", head: ["Fe'l", "Ishonch darajasi", "Misol"], speak: [2],
          rows: [
            ["is known to / is understood to", "yuqori", "He is known to have visited the site."],
            ["is believed to / is thought to", "o'rtacha", "The statue is believed to be 2,000 years old."],
            ["is said to / is reported to", "xabar, tasdiqlanmagan", "The deal is reported to be worth £2 billion."],
            ["is alleged to / is claimed to", "da'vo, isbotsiz", "The firm is alleged to have ignored safety rules."],
          ],
        },
        { t: "p", md: "**suggest** fe'li **faqat A qolipida** ishlatiladi (*It is suggested that…*), chunki *suggest* + to-infinitive tuzilmasi yo'q. ~~He is suggested to resign~~ — xato. (*recommend* ikkala qolipda ham keladi: *Visitors are recommended to book.*)" },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["It is suggested that he should resign.", "It has been suggested that the park be closed.", "He is said to be ill."] },
          bad: { title: "Xato", items: ["He is suggested to resign.", "The park is suggested to be closed.", "It is said him to be ill."] },
        },
        { t: "tip", tone: "info", md: "Sarlavhalarda qisqa shakl: **Mayor 'to resign'** = *The mayor is expected to resign.* Bu uslubni tanib olish uchun foydali." },
        { t: "check", ex: { k: "choice", q: "Qaysi fe'l B qolipida (**X is ___ to do**) ishlatilmaydi?", opts: ["thought", "known", "suggested", "expected"], a: 2, why: "**suggest** faqat *It is suggested that …* shaklida." } },
        { t: "check", ex: { k: "tf", q: "*It is known to have rained* gapi — to'g'ri.", a: false, why: "Ega **It** bo'lsa, B qolipi emas A qolipi: *It is known that it rained.*" } },
      ],
    },
    {
      title: "Tipik xatolar: o'zbek tilidan interferensiya",
      blocks: [
        { t: "p", md: "O'zbekcha «aytishlaricha, u boy» bitta ibora. Inglizchada qolipni aralashtirib yuborish oson." },
        {
          t: "compare",
          good: { title: "1. Qolipni aralashtirmang", items: ["The mayor is said to be very rich.", "It is said that the mayor is very rich."] },
          bad: { title: "Xato", items: ["The mayor is said that he is very rich.", "It is said the mayor to be very rich."] },
        },
        { t: "check", ex: { k: "fix", wrong: "The mayor is said that he is very rich.", a: ["The mayor is said to be very rich.", "It is said that the mayor is very rich."], hint: "A yoki B qolipi", why: "**ega + is said + to-inf** yoki **It is said + that**. Ikkalasini aralashtirib bo'lmaydi." } },
        {
          t: "compare",
          good: { title: "2. Oldingi ish: to have + V3", items: ["The thief is thought to have escaped last night.", "She is believed to have been born in Khiva."] },
          bad: { title: "Xato", items: ["The thief is thought to escape last night.", "She is believed to be born in Khiva."] },
        },
        { t: "check", ex: { k: "fix", wrong: "The thief is thought to escape through the window last night.", a: ["The thief is thought to have escaped through the window last night."], hint: "last night = oldin", why: "O'tgan ish: **to have escaped**." } },
        {
          t: "compare",
          good: { title: "3. will kerak emas", items: ["Prices are expected to rise.", "The film is expected to be released in May."] },
          bad: { title: "Xato", items: ["Prices are expected will rise.", "Prices are expected to will rise."] },
        },
        { t: "check", ex: { k: "fix", wrong: "Prices are expected will rise next month.", a: ["Prices are expected to rise next month.", "It is expected that prices will rise next month."], hint: "expected + to", why: "**are expected to rise**. Kelajak ma'nosi *expected* da bor." } },
        {
          t: "compare",
          good: { title: "4. suggest faqat that bilan", items: ["It is suggested that the mayor should resign.", "It has been suggested that the park be closed."] },
          bad: { title: "Xato", items: ["The mayor is suggested to resign.", "The park is suggested to be closed."] },
        },
        { t: "check", ex: { k: "fix", wrong: "The mayor is suggested to resign.", a: ["It is suggested that the mayor should resign.", "It is suggested that the mayor resign.", "It has been suggested that the mayor should resign.", "It has been suggested that the mayor resign."], hint: "suggest + that", why: "**suggest** B qolipida kelmaydi: *It is suggested that he should resign.*" } },
      ],
    },
    {
      title: "O'qing: Yangi minora",
      blocks: [
        {
          t: "text", title: "The Aldermoor Tower", voice: "george",
          en: "The Aldermoor Tower, a new office building in the city of Brenton, is expected to open next spring. The project is said to have cost more than two hundred million pounds, although the exact figure remains undisclosed. It is reported that the architect was dismissed last year after a disagreement with the city council, but this is still unconfirmed. The tower is believed to be the tallest building in the region, and it is thought to have been designed to survive earthquakes. Critics are said to be worried about the cost, and a public meeting is expected to be held in the autumn.",
          uz: "Aldermoor minorasi, Brenton shahridagi yangi ofis binosi, kelasi bahorda ochilishi kutilmoqda. Loyiha ikki yuz million funtdan ortiq turgan deyiladi, lekin aniq raqam oshkor qilinmagan. Me'mor o'tgan yili shahar kengashi bilan kelishmovchilikdan keyin ishdan bo'shatilgani xabar qilinmoqda, lekin bu hali tasdiqlanmagan. Minora mintaqadagi eng baland bino deb hisoblanadi va zilzilaga bardosh beradigan qilib loyihalangan deb o'ylanadi. Tanqidchilar xarajatdan xavotirda deyiladi va kuzda ochiq yig'ilish o'tkazilishi kutilmoqda.",
        },
        { t: "check", ex: { k: "tf", q: "The architect's dismissal has been officially confirmed.", a: false, why: "Matnda: *this is still unconfirmed*." } },
        { t: "check", ex: { k: "choice", q: "What do we know for certain about the cost?", opts: ["It is said to be over £200 million, but the exact figure is not public.", "It is exactly £200 million.", "It is lower than expected.", "Nothing was ever reported."], a: 0, why: "*is said to have cost more than… although the exact figure remains undisclosed*." } },
      ],
    },
    {
      title: "Dialog: Yangi telefon",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Sara", en: "Have you read the news about the new Zenith phone?", uz: "Yangi Zenith telefoni haqidagi xabarni o'qidingizmi?" },
            { who: "Tom", en: "Not yet. What does it say?", uz: "Hali yo'q. Nima deyilgan?" },
            { who: "Sara", en: "It is reported that the company has been working on it for five years.", uz: "Kompaniya uning ustida besh yildan beri ishlayotgani xabar qilinmoqda." },
            { who: "Tom", en: "Is it really going to be released next month?", uz: "U haqiqatan ham kelasi oy chiqarilarmikan?" },
            { who: "Sara", en: "It is said to be launched in October, but that is still unconfirmed.", uz: "Oktyabrda sotuvga chiqishi aytilmoqda, lekin bu hali tasdiqlanmagan." },
            { who: "Tom", en: "I heard it is expected to cost less than the old model.", uz: "Men uning narxi eski modeldan arzon bo'lishi kutilmoqda deb eshitdim." },
            { who: "Sara", en: "That is just speculation. The price is still undisclosed.", uz: "Bu shunchaki taxmin. Narx hali oshkor qilinmagan." },
            { who: "Tom", en: "The camera is said to be much better, though.", uz: "Lekin kamerasi ancha yaxshi deyiladi." },
            { who: "Sara", en: "Let's wait. A lot of these rumours turn out to be hoaxes.", uz: "Kutaylik. Bunday mish-mishlarning ko'pi yolg'on bo'lib chiqadi." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "What does Sara think about the price rumour?", opts: ["It is just speculation.", "It is certainly true.", "It is official.", "It is a hoax from the company."], a: 0, why: "*That is just speculation. The price is still undisclosed.*" } },
      ],
    },
  ],
  words: [
    { en: "allege", uz: "(isbotsiz) da'vo qilmoq", ipa: "əˈledʒ", pos: "verb", ex: "The firm is alleged to have ignored safety rules.", exUz: "Firma xavfsizlik qoidalariga e'tibor bermagan deb da'vo qilinmoqda." },
    { en: "reportedly", uz: "xabarlarga ko'ra", ipa: "rɪˈpɔː.tɪd.li", pos: "adv", ex: "The singer has reportedly signed a new contract.", exUz: "Xabarlarga ko'ra, qo'shiqchi yangi shartnoma imzolagan." },
    { en: "speculate", uz: "taxmin qilmoq, o'ylab topmoq", ipa: "ˈspek.jə.leɪt", pos: "verb", ex: "Journalists speculate that the minister will resign.", exUz: "Jurnalistlar vazir iste'foga chiqadi deb taxmin qilmoqda." },
    { en: "estimate", uz: "taxminan baholamoq", ipa: "ˈes.tɪ.meɪt", pos: "verb", ex: "The damage is estimated to be over a million pounds.", exUz: "Zarar bir million funtdan ortiq deb baholanmoqda." },
    { en: "unconfirmed", uz: "tasdiqlanmagan", ipa: "ˌʌn.kənˈfɜːmd", pos: "adj", ex: "The news is still unconfirmed.", exUz: "Xabar hali tasdiqlanmagan." },
    { en: "credible", uz: "ishonarli, ishonchli", ipa: "ˈkred.ə.bəl", pos: "adj", ex: "A credible source told the newspaper about the plan.", exUz: "Ishonchli manba gazetaga reja haqida aytdi." },
    { en: "hoax", uz: "yolg'on xabar, aldov", ipa: "həʊks", pos: "noun", ex: "The bomb threat turned out to be a hoax.", exUz: "Bomba haqidagi tahdid aldov bo'lib chiqdi." },
    { en: "undisclosed", uz: "oshkor qilinmagan", ipa: "ˌʌn.dɪˈskləʊzd", pos: "adj", ex: "The company was sold for an undisclosed sum.", exUz: "Kompaniya oshkor qilinmagan summaga sotildi." },
    { en: "sceptical", uz: "shubha bilan qaraydigan", ipa: "ˈskep.tɪ.kəl", pos: "adj", ex: "Many experts are sceptical about the new theory.", exUz: "Ko'p mutaxassislar yangi nazariyaga shubha bilan qaraydi." },
    { en: "be regarded as", uz: "deb hisoblanmoq", ipa: "bi rɪˈɡɑː.dɪd æz", pos: "phrase", ex: "She is widely regarded as the best teacher in the school.", exUz: "U maktabdagi eng yaxshi o'qituvchi deb keng e'tirof etiladi." },
  ],
  practice: [
    { k: "choice", q: "It ___ that the company will close two factories.", opts: ["is reported", "reports", "is reporting", "has report"], a: 0, why: "A qolipi: **It is reported that…**" },
    { k: "choice", q: "The minister ___ to be ill, but this is unconfirmed.", opts: ["says", "is said", "is saying", "said that"], a: 1, why: "B qolipi: ega + **is said to** + fe'l." },
    { k: "listen", say: "The thief is thought to have escaped through a window.", opts: ["The thief is thought to escape through a window.", "The thief is thought to have escaped through a window.", "The thief was thought to be escaping through a window.", "It is thought the thief to have escaped."], a: 1, why: "Oldingi ish: **to have escaped**." },
    { k: "fill", q: "Prices are expected ___ rise next year.", a: ["to"], uz: "Narxlar kelasi yil oshishi kutilmoqda.", why: "**are expected to rise**, **will** kerak emas." },
    { k: "fill", q: "The painting is believed ___ stolen in 1990.", a: ["to have been"], uz: "Rasm 1990-yilda o'g'irlangan deb hisoblanadi.", why: "Oldingi passive ish: **to have been stolen**." },
    { k: "fill", q: "At the moment, the company is said ___ losing money.", a: ["to be"], uz: "Aytishlaricha, kompaniya hozir zarar ko'rmoqda.", why: "Davom etayotgan ish: **to be losing**." },
    { k: "order", uz: "Aytishlaricha, u uch tilda gapiradi.", words: ["He", "is", "said", "to", "speak", "three", "languages."], extra: ["that", "speaks"], why: "**He is said to speak**." },
    { k: "order", uz: "Fabrika kelasi yil yopilishi kutilmoqda.", words: ["The", "factory", "is", "expected", "to", "close", "next", "year."], extra: ["will", "that"], why: "**is expected to close**." },
    { k: "translate", uz: "Bu telefon xavfsiz deb hisoblanadi.", a: ["This phone is considered to be safe.", "This phone is considered safe.", "This phone is thought to be safe.", "This phone is believed to be safe.", "This phone is regarded as safe.", "This phone is said to be safe."], why: "**is considered (to be) safe** — reporting passive." },
    { k: "translate", uz: "U o'tgan yili ketgan deb hisoblanadi.", a: ["He is thought to have left last year.", "He is believed to have left last year.", "He is said to have left last year.", "He is reported to have left last year.", "She is thought to have left last year.", "She is believed to have left last year."], why: "O'tgan ish: **to have left**." },
    { k: "fix", wrong: "The mayor is said that he is very rich.", a: ["The mayor is said to be very rich.", "It is said that the mayor is very rich."], hint: "A yoki B qolip", why: "Qoliplarni aralashtirmang." },
    { k: "fix", wrong: "The thief is thought to escape through the window last night.", a: ["The thief is thought to have escaped through the window last night."], hint: "last night", why: "O'tgan ish: **to have escaped**." },
    { k: "match", pairs: [["allege", "da'vo qilmoq (isbotsiz)"], ["speculate", "taxmin qilmoq"], ["unconfirmed", "tasdiqlanmagan"], ["credible", "ishonchli"], ["hoax", "yolg'on xabar, aldov"]] },
    { k: "tf", q: "*It is said that she is a millionaire* va *She is said to be a millionaire* — bir xil ma'no.", a: true, why: "Bu ikki qolip bir xil ma'noni beradi." },
    { k: "dictation", say: "The company is reported to be planning to cut a thousand jobs.", uz: "Kompaniya ming ish o'rnini qisqartirmoqchi ekani xabar qilinmoqda.", why: "**is reported to be planning** — hozir davom etyapti." },
    { k: "speak", say: "The new bridge is expected to open next spring, but the cost is still undisclosed.", uz: "Yangi ko'prik kelasi bahorda ochilishi kutilmoqda, lekin narxi hali oshkor qilinmagan." },
  ],
  quiz: [
    { k: "choice", q: "It is ___ that the museum will reopen in May.", opts: ["expect", "expects", "expected", "expecting"], a: 2, why: "Passive: **is expected**." },
    { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["He is believed to have left the country.", "He is believed to has left the country.", "He is believed that he left the country.", "He believes to have left the country."], a: 0, why: "**is believed to have + V3**." },
    { k: "choice", q: "Qaysi fe'l **X is ___ to do Y** qolipida ishlatilmaydi?", opts: ["thought", "said", "suggested", "known"], a: 2, why: "**suggest** faqat *It is suggested that…* bilan." },
    { k: "choice", q: "The minister is thought to ___ the country last night.", opts: ["leave", "be leaving", "have left", "leaving"], a: 2, why: "**last night** — **to have left**." },
    { k: "fill", q: "Hundreds of homes are estimated ___ been damaged in the storm.", a: ["to have"], uz: "Bo'ronda yuzlab uy zarar ko'rgan deb baholanmoqda.", why: "**to have been damaged**." },
    { k: "fill", q: "At the moment, the company is believed to ___ planning a new app.", a: ["be"], uz: "Hozir kompaniya yangi ilova rejalashtirmoqda deb hisoblanadi.", why: "Hozir davom etyapti: **to be planning**." },
    { k: "order", uz: "Prezident bugun nutq so'zlashi kutilmoqda.", words: ["The", "president", "is", "expected", "to", "give", "a", "speech", "today."], extra: ["will", "that"], why: "**is expected to give**." },
    { k: "translate", uz: "Aytishlaricha, bu aktyor Londonda yashaydi.", a: ["The actor is said to live in London.", "This actor is said to live in London.", "It is said that the actor lives in London.", "It is said that this actor lives in London."], why: "**is said to live**." },
    { k: "fix", wrong: "Prices are expected will rise next month.", a: ["Prices are expected to rise next month.", "It is expected that prices will rise next month."], hint: "expected + to", why: "**are expected to rise**." },
    { k: "tf", q: "*He is said to have won* gapida g'alaba aytilgan paytdan oldin bo'lgan.", a: true, why: "**to have + V3** — oldin bo'lgan ish." },
  ],
  summary: [
    "Reporting passive ikki qolipda: **It is said that + gap** va **Ega + is said to + fe'l**. Ma'no bir xil, ikkinchisi ixchamroq.",
    "**to** dan keyin: **to + V** (hozir/doim), **to be + V-ing** (hozir davom etyapti), **to have + V3** (oldin bo'lgan).",
    "Ko'p ishlatiladigan fe'llar: *say, believe, think, report, know, expect, estimate, consider, claim, allege*. **will** ishlatilmaydi: *are expected to rise*.",
    "**suggest, recommend, propose** faqat **It is suggested that…** bilan keladi.",
    "Xatolar: *is said that he…*, *to escape last night*, *expected will rise*, *is suggested to*.",
  ],
  homework: "Ikkita yangilik saytidan (BBC, Reuters yoki o'zingiz bilgan) 5 ta gapni toping, ularda **is said / believed / reported / expected to** qolipi bormi, qarang. Keyin o'zingiz haqida emas, **mashhur shaxs yoki shahar haqida** 5 ta reporting passive gap yozing (har biri to'g'ri **to / to be -ing / to have V3** shakliga ega bo'lsin).",
};

export default lesson;
