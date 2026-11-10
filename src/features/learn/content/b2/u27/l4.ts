import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u27-l4",
  title: "Obligation, permission and necessity",
  titleUz: "Majburiyat, ruxsat va zaruriyat: must, have to, be allowed to, be supposed to, need",
  goal: "Ish joyi qoidalari va siyosatini (*policy*) aniq ifodalaysiz: **must / have to / need to** farqini, **mustn't / don't have to / needn't** ning butunlay boshqa ma'nolarini, **be allowed to, be supposed to, be required to** ni, shuningdek o'tgan zamon shakllarini (**had to, was allowed to, needn't have done**) ishlatasiz va **You don't have to smoke here** (taqiq o'rniga) kabi xavfli xatolardan qochasiz.",
  slides: [
    {
      title: "Qoidalar, ruxsat va zarurat",
      blocks: [
        { t: "p", md: "Ish joyida har kuni shunday gaplar eshitamiz: *Visitors must sign in. You don't have to stay late. We're supposed to start at nine.* Bu gaplar **majburiyat** (*obligation*), **taqiq** (*prohibition*), **ruxsat** (*permission*) va **zarurat yo'qligi** (*no necessity*) haqida. Xato qilsangiz, ma'no **butunlay teskari** bo'lishi mumkin: *You mustn't come* = kelish taqiqlangan; *You don't have to come* = kelish shart emas." },
        {
          t: "table", head: ["Ma'no", "Ifoda", "Misol"], speak: [2],
          rows: [
            ["Majburiyat", "must, have to, need to, be required to", "All staff must wear a badge."],
            ["Taqiq", "mustn't, can't, aren't allowed to", "You mustn't share the password."],
            ["Shart emas", "don't have to, don't need to, needn't", "You don't have to come on Friday."],
            ["Ruxsat", "can, may, be allowed to", "We are allowed to work from home."],
            ["Kutilgan / reja", "be supposed to", "The meeting is supposed to start at nine."],
          ],
        },
        { t: "tip", tone: "warn", md: "O'zbek tilida **kerak emas** va **mumkin emas** ikki xil ma'no, lekin o'quvchilar ko'pincha **don't have to** ni *mumkin emas* ma'nosida ishlatadi. Bu yerda ehtiyot bo'ling: **mustn't** = taqiq, **don't have to** = shart emas." },
        { t: "check", ex: { k: "choice", q: "Visitors ___ smoke anywhere in the building. It is against the law.", opts: ["don't have to", "needn't", "mustn't", "are allowed to"], a: 2, why: "Qonun bilan taqiqlangan: **mustn't**. *Don't have to* = shart emas, *allowed to* = ruxsat." } },
      ],
    },
    {
      title: "must, have to va need to",
      blocks: [
        { t: "p", md: "Ijobiy gapda **must**, **have to** va **need to** bir-biriga yaqin, lekin nozik farq bor:" },
        {
          t: "table", head: ["Fe'l", "Manba", "Misol"], speak: [2],
          rows: [
            ["**must**", "so'zlovchining fikri yoki yozma rasmiy qoida", "I must call the client today. / Passengers must show a ticket."],
            ["**have to**", "tashqi qoida, vaziyat, boshqa odam", "I have to wear a uniform. (kompaniya talabi)"],
            ["**need to**", "zarurat, maqsadga erishish uchun", "You need to submit the form by Friday."],
          ],
        },
        { t: "p", md: "**Inkor**da farq katta. **Must** inkori — taqiq, qolgan ikkitasi — **shart emas**:" },
        {
          t: "table", head: ["Shakl", "Ma'nosi", "Misol"], speak: [2],
          rows: [
            ["mustn't", "taqiqlangan", "You mustn't enter without a badge."],
            ["don't have to / don't need to", "majburiy emas (ixtiyoriy)", "You don't have to wear a tie."],
            ["needn't + fe'l", "keragi yo'q (ko'pincha britaniya)", "You needn't wait; I'll call you."],
          ],
        },
        { t: "p", md: "**Savol**da: *Do I have to…? Do we need to…?* Rasmiy yoki eskirgan: *Must I…?* **Kelasi zamon**: *will have to* (*You will have to resubmit it*)." },
        { t: "tip", tone: "info", md: "**Must** da faqat hozirgi zamon bor. O'tgan va kelasi zamon uchun **have to** ishlatiladi: *had to, will have to, have had to*. **Must** dan keyin **to yo'q**: *must go*, ~~must to go~~." },
        { t: "check", ex: { k: "choice", q: "You ___ come to the meeting on Friday, but you can if you want. It is optional.", opts: ["don't have to", "mustn't", "can't", "must"], a: 0, why: "Ixtiyoriy: **don't have to**. *Mustn't* — taqiq." } },
        { t: "check", ex: { k: "tf", q: "*You don't have to wear a tie* va *You mustn't wear a tie* bir xil ma'noni bildiradi.", a: false, why: "Birinchisi — shart emas; ikkinchisi — taqiqlangan." } },
      ],
    },
    {
      title: "Ruxsat va kutilgan xulq",
      blocks: [
        { t: "p", md: "**Ruxsat**ni **can** (norasmiy), **may** (rasmiy) va **be allowed to / be permitted to** bildiradi. **Be allowed to** har zamonda ishlaydi va qoida kimdan kelayotganini ko'rsatadi:" },
        {
          t: "examples", items: [
            { en: "Staff are allowed to take a long lunch on Fridays.", uz: "Xodimlar juma kunlari uzoqroq tushlik qilishi mumkin." },
            { en: "Customers are not permitted to enter the warehouse.", uz: "Mijozlarga omborxonaga kirish taqiqlangan." },
            { en: "We weren't allowed to take photos during the tour.", uz: "Ekskursiya paytida surat olishga ruxsat berilmagan edi." },
            { en: "The contract stipulates that staff must give a month's notice.", uz: "Shartnomada xodimlar bir oy oldin ogohlantirishi shart qilib qo'yilgan." },
          ],
        },
        { t: "p", md: "**Be supposed to** — qoida bo'yicha **kutilgan** ish, ko'pincha amalda bajarilmaydigan: *You're supposed to wear a helmet* (qoida shunday, lekin hamma kiymaydi). Reja haqida ham: *The train is supposed to arrive at six.* **Be required to** — rasmiy talab: *Applicants are required to provide two references.*" },
        {
          t: "table", head: ["Ifoda", "Uslub", "Misol"], speak: [2],
          rows: [
            ["can / can't", "norasmiy", "You can park here after six."],
            ["be allowed to", "neytral", "Are we allowed to use our phones?"],
            ["be permitted to", "rasmiy", "Visitors are not permitted to take photographs."],
            ["be required to", "rasmiy, majburiy", "All drivers are required to carry a licence."],
            ["be supposed to", "kutilgan / reja", "I'm supposed to be in Leeds by noon."],
          ],
        },
        { t: "check", ex: { k: "choice", q: "Which sentence expresses a plan that may not be followed in practice?", opts: ["The train is supposed to arrive at six.", "The train must arrive at six.", "The train can arrive at six.", "The train has arrived at six."], a: 0, why: "**be supposed to** — kutilgan reja, amalda o'zgarishi mumkin." } },
        { t: "check", ex: { k: "fill", q: "Staff ___ allowed to work from home two days a week.", a: ["are"], uz: "Xodimlar haftada ikki kun uydan ishlashi mumkin.", why: "Ko'plik + hozirgi zamon: **are allowed to**." } },
      ],
    },
    {
      title: "O'tgan zamon va keraksiz ishlar",
      blocks: [
        { t: "p", md: "**Must** va **mustn't** ning o'tgan zamoni yo'q. O'tgan zamon uchun:" },
        {
          t: "table", head: ["Hozirgi", "O'tgan", "Misol"], speak: [2],
          rows: [
            ["must / have to", "had to", "Last year we had to wear a uniform."],
            ["can / be allowed to", "could / was (were) allowed to", "We weren't allowed to leave early."],
            ["don't have to / don't need to", "didn't have to / didn't need to", "I didn't have to work on Saturday."],
            ["needn't", "needn't have + V3", "You needn't have brought copies."],
          ],
        },
        { t: "p", md: "**didn't need to do** va **needn't have done** farqli: *I **didn't need to take** a taxi* (kerak emas edi; olganmi, yo'qmi — noma'lum). *I **needn't have taken** a taxi* (oldim, lekin keragi yo'q edi — ortiqcha ish)." },
        {
          t: "examples", items: [
            { en: "We had to submit the form before noon.", uz: "Formani tushlikkacha topshirishimiz kerak edi." },
            { en: "She didn't need to apply; she was already on the list.", uz: "U murojaat qilishi shart emas edi; u allaqachon ro'yxatda edi." },
            { en: "You needn't have come so early. The doors don't open until ten.", uz: "Bunchalik erta kelmasangiz ham bo'lardi. Eshiklar o'nda ochiladi." },
          ],
        },
        { t: "check", ex: { k: "fill", q: "Last year we ___ wear a uniform, but now we can choose.", a: ["had to"], uz: "O'tgan yili forma kiyishimiz kerak edi, hozir esa tanlashimiz mumkin.", why: "**must** ning o'tgan zamoni yo'q: **had to**." } },
        { t: "check", ex: { k: "fill", q: "You ___ have brought so many copies; we only needed three. (n…)", a: ["needn't", "need not"], hint: "n…", uz: "Bunchalik ko'p nusxa olib kelmasangiz ham bo'lardi.", why: "Ortiqcha bajarilgan ish: **needn't have + V3**." } },
      ],
    },
    {
      title: "Tipik xatolar (o'zbek tilidan)",
      blocks: [
        { t: "p", md: "O'zbekchada **kerak, shart, mumkin emas** bilan gaplar tuziladi va fe'l oldidan alohida yordamchi so'z kerak emas. Shu sabab inglizchada quyidagi xatolar tez-tez uchraydi:" },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["You mustn't use your phone in the lab.", "Yesterday I had to work until nine.", "Employees must wear ID badges.", "Do I have to fill in this form?"] },
          bad: { title: "Xato", items: ["You don't have to use your phone in the lab. (taqiq o'rniga)", "Yesterday I must work until nine.", "Employees must to wear ID badges.", "Do I must fill in this form?"] },
        },
        { t: "p", md: "**1.** Taqiq uchun **mustn't**, *don't have to* emas. **2.** O'tgan zamonda **had to**. **3.** **must** dan keyin **to yo'q**. **4.** **must** savolda *do* bilan ishlatilmaydi: *Must I…?* yoki *Do I have to…?*" },
        { t: "check", ex: { k: "fix", wrong: "You don't have to use your phone in the lab; it is dangerous.", a: ["You mustn't use your phone in the lab; it is dangerous.", "You must not use your phone in the lab; it is dangerous."], hint: "taqiq", why: "Xavfli bo'lgani uchun taqiqlangan: **mustn't**." } },
        { t: "check", ex: { k: "fix", wrong: "Yesterday I must work until nine o'clock.", a: ["Yesterday I had to work until nine o'clock."], hint: "o'tgan zamon", why: "**must** ning o'tgan zamoni — **had to**." } },
        { t: "check", ex: { k: "fix", wrong: "Employees must to wear ID badges.", a: ["Employees must wear ID badges."], hint: "must + fe'l", why: "**must** dan keyin **to siz** fe'l." } },
        { t: "check", ex: { k: "fix", wrong: "Do I must fill in this form?", a: ["Must I fill in this form?", "Do I have to fill in this form?"], hint: "savol shakli", why: "**must** modal fe'l: *Must I…?* yoki *Do I have to…?*" } },
      ],
    },
    {
      title: "O'qing: Yangi qoidalar",
      blocks: [
        {
          t: "text", title: "Our new office policy", voice: "george",
          en: "Last month our company introduced a new policy, and the staff meeting was longer than usual. From now on we are allowed to work from home on Wednesdays and Fridays, but we are required to be online between ten and four. Employees must wear a badge in the building, although the old dress code has been dropped, so we don't have to wear a suit any more. Visitors are not permitted to enter the offices without an escort. Last year we had to book a desk a week in advance, but this year we are supposed to arrive and choose any free desk. Personally, I think the changes are sensible. The only thing that annoys me is that we are not allowed to eat at our desks, and I have been told that anyone who breaks this rule may face a disciplinary meeting.",
          uz: "O'tgan oy kompaniyamiz yangi siyosat joriy qildi va xodimlar yig'ilishi odatdagidan uzoqroq bo'ldi. Endi biz chorshanba va juma kunlari uydan ishlashimiz mumkin, lekin soat o'ndan to'rtgacha onlayn bo'lishimiz shart. Xodimlar binoda nishon taqishi kerak, lekin eski kiyinish qoidasi bekor qilingan, shuning uchun endi kostyum kiyishimiz shart emas. Mehmonlarga hamrohsiz ofislarga kirish taqiqlangan. O'tgan yili stolni bir hafta oldin band qilishimiz kerak edi, bu yil esa kelib, istalgan bo'sh stolni tanlashimiz kutiladi. Menimcha, o'zgarishlar oqilona. Meni faqat stol oldida ovqat yeyish taqiqlangani bezovta qiladi va bu qoidani buzgan har kim intizomiy yig'ilishga duch kelishi mumkinligini aytishdi.",
        },
        { t: "check", ex: { k: "tf", q: "Employees still have to wear a suit.", a: false, why: "Matnda: *we don't have to wear a suit any more*." } },
        { t: "check", ex: { k: "choice", q: "When must staff be online if they work from home?", opts: ["Between ten and four", "All day", "Only in the morning", "They need not be online"], a: 0, why: "*We are required to be online between ten and four.*" } },
      ],
    },
    {
      title: "Dialog: Birinchi kun",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Chris", en: "Rachel, am I allowed to park in the visitors' car park today?", uz: "Rachel, bugun mehmonlar avtoturargohiga qo'yishim mumkinmi?" },
            { who: "Rachel", en: "Only for today. After that you'll have to get a staff permit from reception.", uz: "Faqat bugun uchun. Undan keyin qabulxonadan xodim ruxsatnomasini olishingiz kerak bo'ladi." },
            { who: "Chris", en: "Do I have to wear a suit, or are jeans fine?", uz: "Kostyum kiyishim shartmi yoki jinsi bo'laveradimi?" },
            { who: "Rachel", en: "You don't have to wear a suit, but you're supposed to look smart when you meet clients.", uz: "Kostyum kiyishingiz shart emas, lekin mijozlar bilan uchrashganda toza-ozoda ko'rinishingiz kutiladi." },
            { who: "Chris", en: "Understood. And what about the safety training?", uz: "Tushundim. Xavfsizlik bo'yicha o'qish-chi?" },
            { who: "Rachel", en: "That's mandatory. Everyone must complete it in the first week.", uz: "U majburiy. Hamma birinchi haftada tugatishi shart." },
            { who: "Chris", en: "Can I use my own laptop?", uz: "O'z noutbukimdan foydalansam bo'ladimi?" },
            { who: "Rachel", en: "I'm afraid not. You mustn't connect personal devices to our network.", uz: "Afsuski, yo'q. Shaxsiy qurilmalarni tarmog'imizga ulash mumkin emas." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "What is Chris NOT allowed to do?", opts: ["Connect a personal laptop to the network", "Park in the visitors' car park today", "Wear a suit", "Meet clients"], a: 0, why: "Rachel: *You mustn't connect personal devices to our network.*" } },
      ],
    },
  ],
  words: [
    { en: "prohibit", uz: "taqiqlamoq", ipa: "prəˈhɪb.ɪt", pos: "verb", ex: "The law prohibits smoking in public buildings.", exUz: "Qonun jamoat binolarida chekishni taqiqlaydi." },
    { en: "abide by", uz: "(qoidaga) rioya qilmoq, bo'ysunmoq", ipa: "əˈbaɪd baɪ", pos: "phrasal verb", ex: "All staff must abide by the safety rules.", exUz: "Barcha xodimlar xavfsizlik qoidalariga rioya qilishi kerak." },
    { en: "entitled", uz: "huquqi bor", ipa: "ɪnˈtaɪ.təld", pos: "adj", ex: "Employees are entitled to four weeks' paid holiday.", exUz: "Xodimlar to'rt haftalik haq to'lanadigan ta'tilga haqli." },
    { en: "mandatory", uz: "majburiy", ipa: "ˈmæn.də.tər.i", pos: "adj", ex: "Safety training is mandatory for all new staff.", exUz: "Xavfsizlik bo'yicha o'qish barcha yangi xodimlar uchun majburiy." },
    { en: "dress code", uz: "kiyinish qoidasi", ipa: "ˈdres kəʊd", pos: "noun", ex: "The company has a strict dress code for client meetings.", exUz: "Kompaniyada mijozlar bilan uchrashuvlar uchun qat'iy kiyinish qoidasi bor." },
    { en: "exempt", uz: "ozod qilingan, majburiyatdan xoli", ipa: "ɪɡˈzempt", pos: "adj", ex: "Part-time staff are exempt from the training.", exUz: "Qisman bandlikdagi xodimlar o'qishdan ozod." },
    { en: "enforce", uz: "joriy qilmoq, bajarishga majburlamoq", ipa: "ɪnˈfɔːs", pos: "verb", ex: "It is difficult to enforce the no-phones rule.", exUz: "Telefon taqiqi qoidasini amalda ta'minlash qiyin." },
    { en: "restriction", uz: "cheklov", ipa: "rɪˈstrɪk.ʃən", pos: "noun", ex: "There are no restrictions on working hours.", exUz: "Ish soatlariga cheklovlar yo'q." },
    { en: "stipulate", uz: "shart qilib qo'ymoq, qat'iy belgilamoq", ipa: "ˈstɪp.jə.leɪt", pos: "verb", ex: "The contract stipulates that staff must give a month's notice.", exUz: "Shartnomada xodimlar bir oy oldin ogohlantirishi shart qilib qo'yilgan." },
    { en: "disciplinary", uz: "intizomiy", ipa: "ˌdɪs.əˈplɪn.ər.i", pos: "adj", ex: "He faced a disciplinary meeting after repeated lateness.", exUz: "Qayta-qayta kechikkani uchun u intizomiy yig'ilishga duch keldi." },
  ],
  practice: [
    { k: "choice", q: "Visitors ___ enter the laboratory without protective clothing. It is dangerous.", opts: ["mustn't", "don't have to", "needn't", "are supposed"], a: 0, why: "Xavfsizlik taqiqi: **mustn't**." },
    { k: "choice", q: "You ___ bring a laptop to the training. We will provide one, but you can use your own if you prefer.", opts: ["mustn't", "don't have to", "can't", "must"], a: 1, why: "Shart emas: **don't have to**." },
    { k: "listen", say: "Employees are not allowed to use personal phones at the front desk.", opts: ["Employees are allowed to use personal phones at the front desk.", "Employees are not supposed to use personal phones at the front desk.", "Employees are not allowed to use personal phones at the front desk.", "Employees don't have to use personal phones at the front desk."], a: 2, why: "**not allowed to** = taqiqlangan." },
    { k: "fill", q: "Last year we ___ wear a uniform, but now we can choose.", a: ["had to"], uz: "O'tgan yili forma kiyishimiz kerak edi.", why: "**must** → **had to**." },
    { k: "fill", q: "Staff ___ allowed to work from home on Fridays.", a: ["are"], uz: "Xodimlar juma kunlari uydan ishlashi mumkin.", why: "**are allowed to**." },
    { k: "fill", q: "You ___ have brought so many copies; we only needed three. (n…)", a: ["needn't", "need not"], hint: "n…", uz: "Bunchalik ko'p nusxa olib kelmasangiz ham bo'lardi.", why: "**needn't have + V3**: keraksiz bajarilgan ish." },
    { k: "order", uz: "Ish vaqtida shaxsiy telefondan foydalanishga ruxsat yo'q.", words: ["You", "are", "not", "allowed", "to", "use", "personal", "phones", "during", "working", "hours."], extra: ["must", "aren't"], alt: [["You", "aren't", "allowed", "to", "use", "personal", "phones", "during", "working", "hours."]], why: "**be not allowed to** = taqiqlangan." },
    { k: "order", uz: "Ertaga soat sakkizda ishni boshlashimiz kerak.", words: ["We", "have", "to", "start", "work", "at", "eight", "tomorrow."], extra: ["has", "must"], alt: [["Tomorrow", "we", "have", "to", "start", "work", "at", "eight."]], why: "**have to** + fe'l." },
    { k: "translate", uz: "Siz bu hujjatni imzolashingiz shart.", a: ["You have to sign this document.", "You must sign this document.", "You are required to sign this document.", "You need to sign this document.", "You are obliged to sign this document."], why: "Majburiyat: **must / have to / be required to**." },
    { k: "translate", uz: "Kecha men kechgacha ishlashga majbur bo'ldim.", a: ["Yesterday I had to work until late.", "I had to work until late yesterday.", "Yesterday I had to work late.", "I had to work late yesterday."], why: "O'tgan zamon: **had to**." },
    { k: "fix", wrong: "Employees must to wear ID badges.", a: ["Employees must wear ID badges."], hint: "must + fe'l", why: "**must** dan keyin **to yo'q**." },
    { k: "fix", wrong: "Yesterday I must work until nine o'clock.", a: ["Yesterday I had to work until nine o'clock."], hint: "o'tgan zamon", why: "**had to**." },
    { k: "match", pairs: [["mustn't", "taqiqlangan"], ["don't have to", "majburiy emas"], ["be allowed to", "ruxsat berilgan"], ["be supposed to", "kutiladi, bo'lishi kerak"], ["be required to", "talab qilinadi"]] },
    { k: "tf", q: "*You don't have to wear a tie* va *You mustn't wear a tie* bir xil ma'noni bildiradi.", a: false, why: "**don't have to** = shart emas; **mustn't** = taqiq." },
    { k: "dictation", say: "Visitors must report to reception before entering the building.", uz: "Mehmonlar binoga kirishdan oldin qabulxonaga murojaat qilishi shart.", why: "**must** + fe'l: majburiyat." },
    { k: "speak", say: "At my company we are allowed to work from home, but we are supposed to be online at nine.", uz: "Kompaniyamizda uydan ishlashimiz mumkin, lekin soat to'qqizda onlayn bo'lishimiz kerak." },
  ],
  quiz: [
    { k: "choice", q: "Qaysi gap **taqiqni** bildiradi?", opts: ["You don't have to leave.", "You mustn't leave.", "You needn't leave.", "You don't need to leave."], a: 1, why: "Faqat **mustn't** taqiq." },
    { k: "choice", q: "We ___ finish the report today. The deadline is next week.", opts: ["don't have to", "mustn't", "must", "are not allowed to"], a: 0, why: "Muddat keyingi haftada, shuning uchun bugun shart emas." },
    { k: "choice", q: "I ___ to work last Saturday, so I missed the party.", opts: ["must", "had", "have", "would"], a: 1, why: "O'tgan zamon: **had to**." },
    { k: "choice", q: "Which sentence expresses that something is expected but may not happen?", opts: ["The delivery is supposed to arrive on Monday.", "The delivery must arrive on Monday.", "The delivery can arrive on Monday.", "The delivery has arrived on Monday."], a: 0, why: "**be supposed to** — kutilgan, lekin kafolatlanmagan." },
    { k: "fill", q: "Are we ___ to take photos in the museum?", a: ["allowed", "permitted"], uz: "Muzeyda suratga olishga ruxsat bormi?", why: "Ruxsat so'rash: **be allowed / permitted to**." },
    { k: "fill", q: "Employees are ___ to wear safety helmets on site. (r…)", a: ["required"], hint: "r…", uz: "Xodimlar maydonda dubulg'a kiyishi talab qilinadi.", why: "Rasmiy talab: **be required to**." },
    { k: "order", uz: "Siz hisobotni bugun yuborishingiz shart emas.", words: ["You", "don't", "have", "to", "send", "the", "report", "today."], extra: ["mustn't", "needn't"], alt: [["You", "needn't", "send", "the", "report", "today."]], why: "Shart emas: **don't have to** yoki **needn't**." },
    { k: "translate", uz: "Biz bu yerda ovqat yeyishimiz mumkin emas.", a: ["We are not allowed to eat here.", "We aren't allowed to eat here.", "We mustn't eat here.", "We must not eat here.", "We can't eat here.", "We cannot eat here."], why: "Taqiq: **not allowed to / mustn't**." },
    { k: "fix", wrong: "Do I must fill in this form?", a: ["Must I fill in this form?", "Do I have to fill in this form?"], hint: "savol shakli", why: "**must** + savol: *Must I…?*; yoki **Do I have to…?**" },
    { k: "tf", q: "*You needn't have come* gapi: siz keldingiz, lekin kelishning keragi yo'q edi.", a: true, why: "**needn't have + V3** = bajarilgan, lekin keraksiz ish." },
  ],
  summary: [
    "**Majburiyat**: *must* (so'zlovchining fikri yoki yozma qoida), *have to* (tashqi qoida), *need to* (zarurat), *be required to* (rasmiy talab).",
    "**Inkor**: **mustn't** = taqiq; **don't have to / don't need to / needn't** = shart emas. Bu ikkisini adashtirmang!",
    "**Ruxsat**: *can* (norasmiy), *be allowed to* (neytral), *be permitted to* (rasmiy). **be supposed to** = kutilgan yoki rejalangan, amalda bajarilmasligi mumkin.",
    "**O'tgan zamon**: *had to, was allowed to, didn't have to*; **needn't have + V3** = qilingan, lekin keraksiz ish. **Must** ning o'tgan zamoni yo'q.",
    "Xatolar: ~~must to go~~ → **must go**; ~~I must work yesterday~~ → **had to**; ~~Do I must…?~~ → **Must I…? / Do I have to…?**",
  ],
  homework: "Ish yoki o'qish joyingiz (yoki xayoliy kompaniya) uchun **10 ta qoida** yozing: 3 ta majburiyat (*must / have to*), 2 ta taqiq (*mustn't / not allowed to*), 2 ta shart emas (*don't have to / needn't*), 2 ta ruxsat (*can / be allowed to*), 1 ta kutilgan ish (*be supposed to*). Keyin ikkitasini o'tgan zamonga o'tkazing (*had to, weren't allowed to*).",
};

export default lesson;
