import type { Lesson } from '../../../types';

// Mini lesson (skill): reading a passive-heavy news report (gist, detail, true/false/not given) and writing a 100-120 word summary with reporting verbs.
const lesson: Lesson = {
  id: 'u26-l15',
  title: 'Reading and writing: a news report',
  titleUz: "O'qish va yozish: yangilik hisoboti va uning xulosasi",
  mini: true,
  kind: 'skill',
  goal: "Yangilik hisobotini o'qib, asosiy fikr va tafsilotlarni topasiz, *True / False / Not given* savollariga javob berasiz va 100-120 so'zli xulosani o'z so'zlaringiz bilan, reporting fe'llari va majhul nisbat bilan yozasiz.",
  slides: [
    {
      title: "O'qing: yangilik hisoboti",
      blocks: [
        { t: 'p', md: "Yangilik hisoboti yuqoridan pastga **muhimlik tartibida** yoziladi: avval *nima bo'ldi*, keyin *tafsilot*, oxirida *fon va kelajak*. Matnda **majhul nisbat** va **reporting passive** ko'p uchraydi, chunki ish bajaruvchi noma'lum yoki manba muhim." },
        { t: 'text', title: 'Hospital systems restored after cyberattack', voice: 'emma', en: "Computer systems at Westbridge General Hospital have been restored after a cyberattack that caused a major outage on Monday, the authorities said. The attack is believed to have been carried out by a criminal group, and an investigation has been launched. It is thought that no patient records were stolen, but the hospital has asked people to be careful with unexpected emails. About forty operations are reported to have been postponed, and ambulances were sent to other hospitals during the worst hours. The hospital's director said that staff had worked through the night to restore the systems. She added that backup files had been kept safely, which prevented a longer disruption. Allegedly, the attackers demanded money, but the director refused to confirm this. The hospital is expected to publish a full report by the end of the month, and new security measures will be introduced next week.", uz: "Westbridge umumiy kasalxonasidagi kompyuter tizimlari dushanba kuni katta uzilishga sabab bo'lgan kiberhujumdan keyin tiklandi, dedi rasmiylar. Hujum jinoiy guruh tomonidan uyushtirilgan deb hisoblanmoqda va tergov boshlandi. Bemorlarning yozuvlari o'g'irlanmagan deb o'ylanmoqda, lekin kasalxona odamlardan kutilmagan elektron xatlarga ehtiyot bo'lishni so'radi. Taxminan qirqta operatsiya qoldirilgani xabar qilinmoqda va eng og'ir soatlarda tez yordam mashinalari boshqa kasalxonalarga yuborildi. Kasalxona direktori xodimlar tizimlarni tiklash uchun tun bo'yi ishlaganini aytdi. U zaxira fayllar xavfsiz saqlangani uzoqroq uzilishning oldini olganini qo'shimcha qildi. Aytilishicha, hujumchilar pul talab qilgan, lekin direktor buni tasdiqlashdan bosh tortdi. Kasalxona oy oxirigacha to'liq hisobot e'lon qilishi kutilmoqda, yangi xavfsizlik choralari esa kelasi hafta joriy etiladi." },
        { t: 'check', ex: { k: 'choice', q: "What is the main point of the report?", opts: ["A hospital's systems were restored after a cyberattack.", "A hospital will close next week.", "Patients' records were sold online.", "A new hospital will be built."], a: 0, why: "Sarlavha va birinchi gap: *systems… have been restored after a cyberattack.*" } },
        { t: 'check', ex: { k: 'choice', q: "Patient records were stolen during the attack. (True / False / Not given)", opts: ['True', 'False', 'Not given'], a: 1, why: "*It is thought that no patient records were stolen* — noto'g'ri (**False**)." } },
        { t: 'check', ex: { k: 'choice', q: "The hospital paid the attackers. (True / False / Not given)", opts: ['True', 'False', 'Not given'], a: 2, why: "Faqat *the attackers demanded money* deyilgan; to'langani haqida ma'lumot yo'q (**Not given**)." } },
      ],
    },
    {
      title: "Hisobotdagi tuzilmalar",
      blocks: [
        { t: 'p', md: "Matndan uch turdagi tuzilmani ajrating. Xulosa yozganda ularni **o'zgartirib** ishlatasiz." },
        { t: 'table', head: ['Tuzilma', 'Matndan misol', 'Ma\'no'], speak: [1], rows: [
          ['Oddiy majhul', "An investigation has been launched.", "Kim boshlagani muhim emas"],
          ['Reporting passive', "The attack is believed to have been carried out by a criminal group.", "Hammaning fikri, manba noma'lum"],
          ['Reporting passive', "About forty operations are reported to have been postponed.", "Xabar qilinmoqda"],
          ['Reporting fe\'l', "The director said that staff had worked through the night.", "Aniq odamning gapi (*had worked* — oldingi voqea)"],
        ] },
        { t: 'tip', tone: 'info', md: "**is believed to have been + V3** — o'tgan voqea haqida taxmin. **is expected to + fe'l** — kelajak haqida kutish. Ikkalasi ham yangilikda doim uchraydi." },
        { t: 'check', ex: { k: 'fill', q: "The hospital is ___ to publish a full report next month.", a: ['expected', 'due', 'set'], uz: "Kasalxona kelasi oy to'liq hisobot e'lon qilishi kutilmoqda.", why: "**is expected to + fe'l** — kelajakdagi kutish." } },
        { t: 'check', ex: { k: 'fix', wrong: "It is believed that the attack carried out by a criminal group.", a: ["It is believed that the attack was carried out by a criminal group.", "It is believed that the attack had been carried out by a criminal group."], why: "That-gapda ham majhul nisbat kerak: **was carried out**." } },
      ],
    },
    {
      title: "Xulosa yozish: 5 qadam",
      blocks: [
        { t: 'p', md: "Xulosa (summary) — asl matnning **qisqa, o'z so'zlaringiz bilan** qayta aytilishi. Hajm: **100-120 so'z**. Nusxa ko'chirmang, o'z fikringizni qo'shmang." },
        { t: 'table', head: ['Qadam', 'Nima qilasiz'], rows: [
          ['1', "Asosiy fikrni 1 gapda yozing (kim, nima, qachon)."],
          ['2', "2-3 eng muhim tafsilotni tanlang, ikkinchi darajalilarini tashlang."],
          ['3', "Reporting fe'llaridan foydalaning (*said, added, refused, expected*)."],
          ['4', "Gaplarni sinonimlar bilan qayta yozing (*outage → disruption*)."],
          ['5', "Zamon, majhul nisbat va so'z sonini tekshiring."],
        ] },
        { t: 'text', title: 'Model summary (about 110 words)', voice: 'george', en: "Westbridge General Hospital has restored its computer systems after a cyberattack on Monday, according to the authorities. The attack, which is believed to have been organised by a criminal group, caused a serious outage, and about forty operations are reported to have been postponed. The director said that staff had worked all night and added that backup files had prevented a longer disruption. Although it is thought that no patient records were stolen, people have been advised to be careful with unexpected emails. The attackers allegedly asked for money, but the director refused to comment. A full report is expected by the end of the month, and stronger security measures will be introduced.", uz: "Westbridge umumiy kasalxonasi dushanba kungi kiberhujumdan keyin kompyuter tizimlarini tikladi, deyiladi rasmiylar ma'lumotida. Jinoiy guruh uyushtirgan deb hisoblanayotgan hujum jiddiy uzilishga sabab bo'ldi va qirqtacha operatsiya qoldirilgani xabar qilinmoqda. Direktor xodimlar tun bo'yi ishlaganini aytdi va zaxira fayllar uzoqroq uzilishning oldini olganini qo'shimcha qildi. Bemorlar yozuvlari o'g'irlanmagan deb o'ylansa-da, odamlarga kutilmagan elektron xatlarga ehtiyot bo'lish tavsiya qilindi. Aytilishicha, hujumchilar pul so'ragan, lekin direktor izoh berishdan bosh tortdi. Oy oxirigacha to'liq hisobot kutilmoqda va xavfsizlik choralari kuchaytiriladi." },
        { t: 'check', ex: { k: 'choice', q: "Which sentence is a better summary sentence (own words, one idea)?", opts: ["The hospital restored its systems after a cyberattack on Monday.", "Computer systems at Westbridge General Hospital have been restored after a cyberattack that caused a major outage on Monday, the authorities said.", "I think hackers are terrible people.", "The director's name is not known."], a: 0, why: "Qisqa, o'z so'zingiz bilan, bitta aniq fikr; ikkinchisi — nusxa; uchinchisi — shaxsiy fikr." } },
        { t: 'tip', tone: 'warn', md: "Typik xatolar: **1)** asl gaplarni so'zma-so'z ko'chirish; **2)** *It is thought that no patient records were stolen* ni *I think*… deb o'zgartirish — manba yo'qoladi; **3)** *said* dan keyin zamonni siljitmaslik (*said that staff worked* o'rniga *had worked* aniqroq)." },
        { t: 'dialog', lines: [
          { who: 'Sophie', en: "Adam, could you check my summary? I'm not sure about the tenses.", uz: "Adam, xulosamni tekshirib bera olasanmi? Zamonlarga ishonchim komil emas." },
          { who: 'Adam', en: "Sure. You wrote, 'The director said that staff worked all night.' It's clearer as 'had worked'.", uz: "Albatta. Sen \"direktor xodimlar tun bo'yi ishladi dedi\" deb yozibsan. 'had worked' aniqroq bo'ladi." },
          { who: 'Sophie', en: "Right, because it happened before she spoke. What else?", uz: "To'g'ri, chunki bu u gapirishdan oldin bo'lgan. Yana nima?" },
          { who: 'Adam', en: "You copied the first sentence from the article. Try to use your own words, for example 'disruption' instead of 'outage'.", uz: "Birinchi gapni maqoladan ko'chirib olibsan. O'z so'zlaringni ishlat, masalan, 'outage' o'rniga 'disruption'." },
          { who: 'Sophie', en: "Good point. I'll also add that the attackers allegedly asked for money.", uz: "To'g'ri aytasan. Hujumchilar pul so'ragani aytilishini ham qo'shaman." },
        ] },
        { t: 'check', ex: { k: 'tf', q: "Adam thinks Sophie should copy sentences from the article.", a: false, why: "Adam: *Try to use your own words.*" } },
      ],
    },
  ],
  words: [
    { en: 'authorities', uz: "rasmiy idoralar, hokimiyat", ipa: 'ɔːˈθɒr.ɪ.tiz', pos: 'noun', ex: 'The authorities have not released the names of those involved.', exUz: "Rasmiy idoralar ishtirokchilarning ismlarini e'lon qilmadi." },
    { en: 'investigate', uz: "tergov qilmoq, o'rganmoq", ipa: 'ɪnˈves.tɪ.geɪt', pos: 'verb', ex: 'Police are investigating how the data was stolen.', exUz: "Politsiya ma'lumotlar qanday o'g'irlanganini tergov qilmoqda." },
    { en: 'outage', uz: "uzilish (elektr, tarmoq)", ipa: 'ˈaʊ.tɪdʒ', pos: 'noun', ex: 'A network outage left thousands of customers without internet.', exUz: "Tarmoq uzilishi minglab mijozni internetsiz qoldirdi." },
    { en: 'allegedly', uz: "aytilishicha (isbotlanmagan)", ipa: 'əˈledʒ.ɪd.li', pos: 'adv', ex: 'The company allegedly ignored several security warnings.', exUz: "Aytilishicha, kompaniya bir necha xavfsizlik ogohlantirishini e'tiborsiz qoldirgan." },
    { en: 'cyberattack', uz: "kiberhujum", ipa: 'ˈsaɪ.bər.ə.tæk', pos: 'noun', ex: 'The bank was hit by a cyberattack last night.', exUz: "Bank kecha kechasi kiberhujumga uchradi." },
    { en: 'restore', uz: "tiklamoq, qayta ishga tushirmoq", ipa: 'rɪˈstɔː', pos: 'verb', ex: 'Power was restored to the city after six hours.', exUz: "Shaharga elektr olti soatdan keyin tiklandi." },
  ],
  practice: [
    { k: 'match', pairs: [['outage', 'uzilish'], ['investigate', 'tergov qilmoq'], ['cyberattack', 'kiberhujum'], ['restore', 'tiklamoq'], ['authorities', 'rasmiy idoralar']] },
    { k: 'choice', q: "The attack ___ to have been carried out by a criminal group.", opts: ['is believed', 'believes', 'is believing', 'believed it'], a: 0, why: "Reporting passive: **is believed to have been + V3**." },
    { k: 'fill', q: "Around forty operations are ___ to have been postponed.", a: ['reported'], uz: "Qirqtacha operatsiya qoldirilgani xabar qilinmoqda.", hint: "xabar qilinmoqda", why: "**are reported to have been + V3**." },
    { k: 'tf', q: "*It is thought that no records were stolen* degani: hamma aniq biladi, hech narsa o'g'irlanmagan.", a: false, why: "**is thought** — taxmin, aniq tasdiqlangan fakt emas." },
    { k: 'order', uz: "Tergov boshlandi.", words: ['An', 'investigation', 'has', 'been', 'launched.'], extra: ['was', 'launch'], alt: [['An', 'investigation', 'has', 'been', 'started.']], why: "**has been + V3**." },
    { k: 'listen', say: "The hospital is expected to publish a full report by the end of the month.", opts: ["The hospital is expected to publish a full report by the end of the month.", "The hospital expected to publish a full report by the end of the month.", "The hospital is expecting to be published a full report by the end of the month.", "The hospital was expected to publish a full report by the beginning of the month."], a: 0 },
    { k: 'fix', wrong: "The director said that staff worked all night before she spoke.", a: ["The director said that staff had worked all night before she spoke.", "The director said staff had worked all night before she spoke."], why: "Said + oldingi voqea → **had worked**." },
    { k: 'translate', uz: "Aytilishicha, hujumchilar pul talab qilgan.", a: ["The attackers allegedly demanded money.", "Allegedly, the attackers demanded money.", "The attackers allegedly asked for money.", "Allegedly, the attackers asked for money.", "The attackers have allegedly demanded money.", "The attackers allegedly demanded some money."], why: "**allegedly** — isbotlanmagan da'vo." },
    { k: 'choice', q: "Which sentence is NOT suitable in a summary?", opts: ["I think the hospital was very careless.", "The director refused to comment.", "Systems were restored on Tuesday.", "A report is expected by the end of the month."], a: 0, why: "Xulosada shaxsiy fikr bo'lmaydi, faqat asl matndagi ma'lumot." },
    { k: 'dictation', say: "Power was restored to the whole area after six hours.", a: ["Power was restored to the whole area after six hours."], uz: "Elektr butun hududga olti soatdan keyin tiklandi." },
    { k: 'fix', wrong: "It is expected that the hospital to publish a report soon.", a: ["It is expected that the hospital will publish a report soon.", "The hospital is expected to publish a report soon."], why: "Ikki qolip: **It is expected that + gap** yoki **ega + is expected to + fe'l**; ularni aralashtirmang." },
    { k: 'fill', q: "The attackers ___ asked for money, but this has not been confirmed.", a: ['allegedly', 'reportedly'], uz: "Hujumchilar pul so'ragan, lekin bu hali tasdiqlanmagan.", why: "Tasdiqlanmagan ma'lumot: **allegedly / reportedly**." },
    { k: 'speak', say: "The attack is believed to have been carried out by a criminal group.", uz: "Hujum jinoiy guruh tomonidan uyushtirilgan deb hisoblanmoqda." },
  ],
  quiz: [
    { k: 'choice', q: "Police ___ the cause of the fire.", opts: ['are investigating', 'are investigated', 'investigates', 'is investigating'], a: 0, why: "Ega *police* ko'plik, faol nisbat: **are investigating**." },
    { k: 'choice', q: "The outage is expected ___ for two more days.", opts: ['to last', 'lasting', 'to be last', 'that it lasts'], a: 0, why: "**is expected to + fe'l**." },
    { k: 'fill', q: "Systems at the hospital have been ___ after the attack.", a: ['restored'], uz: "Kasalxonadagi tizimlar hujumdan keyin tiklandi.", hint: "V3", why: "**have been restored**." },
    { k: 'fix', wrong: "The company is said to be lost millions last year.", a: ["The company is said to have lost millions last year.", "The company is said to have lost millions of pounds last year."], why: "O'tgan voqea: **is said to have lost**." },
    { k: 'tf', q: "In a summary you should copy the sentences of the original text.", a: false, why: "Xulosa o'z so'zlaringiz bilan yoziladi." },
    { k: 'order', uz: "Rasmiylar hujum tergov qilinayotganini aytdi.", words: ['The', 'authorities', 'said', 'that', 'the', 'attack', 'was', 'being', 'investigated.'], extra: ['is', 'investigating'], alt: [['The', 'authorities', 'said', 'the', 'attack', 'was', 'being', 'investigated.']], why: "Said + o'tgan zamon continuous majhul: **was being investigated**." },
    { k: 'listen', say: "Allegedly, the company ignored several warnings.", opts: ["Allegedly, the company ignored several warnings.", "Apparently, the company ignored several warnings.", "Allegedly, the company ignores several warnings.", "Allegedly, the company was ignored by several warnings."], a: 0 },
    { k: 'translate', uz: "Ushbu hujum jinoiy guruh tomonidan uyushtirilgan deb hisoblanadi.", a: ["The attack is believed to have been carried out by a criminal group.", "This attack is believed to have been carried out by a criminal group.", "The attack is thought to have been carried out by a criminal group.", "This attack is thought to have been carried out by a criminal group.", "The attack is believed to have been organised by a criminal group.", "This attack is believed to have been organised by a criminal group.", "The attack is believed to have been organized by a criminal group.", "This attack is believed to have been organized by a criminal group."], why: "**is believed to have been + V3**." },
  ],
  summary: [
    "Yangilik hisoboti: avval asosiy voqea, keyin tafsilot, oxirida fon va kelajak.",
    "Hisobotda ko'p: **has been launched, is believed to have been…, is expected to…, are reported to have been…**",
    "True / False / Not given: *False* — matn aksini aytadi; *Not given* — matnda umuman yo'q.",
    "Xulosa (100-120 so'z): o'z so'zlaringiz bilan, reporting fe'llari bilan, shaxsiy fikrsiz.",
    "Yangi so'zlar: **authorities, investigate, outage, allegedly, cyberattack, restore**.",
  ],
  homework: "Ingliz tilidagi qisqa yangilik maqolasini toping (120-200 so'z) va 100-120 so'zli xulosa yozing. Kamida bitta *said that…*, bitta *is believed / expected to…* va bitta *allegedly / reportedly* ishlating. So'z sonini sanang.",
};

export default lesson;
