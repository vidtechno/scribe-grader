import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u27-l2",
  title: "Formal and informal register",
  titleUz: "Rasmiy va norasmiy uslub: so'z tanlash, qisqartmalar, passive",
  goal: "Gapning **uslubini** (*register*) auditoriyaga moslaysiz: do'stingizga norasmiy, mijoz yoki rahbarga rasmiy yozasiz. **find out → discover, get → obtain, buy → purchase** kabi almashtirishlarni, **passive**, **yumshatuvchi iboralar** (*I would be grateful if…*) va rasmiy ochilish/yakunlash formulalarini ishlatasiz hamda **I want, gonna, mate** kabi rasmiy matnga to'g'ri kelmaydigan so'zlarni topib to'g'rilaysiz.",
  slides: [
    {
      title: "Uslub nima va nega muhim?",
      blocks: [
        { t: "p", md: "Bitta fikrni turlicha aytish mumkin. O'zbek tilida *sen* va *siz* farqi bor; inglizchada *you* bitta, lekin **uslub** so'z tanlovi, gap tuzilishi va ohang orqali ko'rinadi. Noto'g'ri uslub ma'noni o'zgartirmaydi, lekin **taassurotni** buzadi: mijozga *Hey, send me the invoice* deb yozsangiz, bu qo'pol eshitiladi; do'stingizga *I would be most grateful…* deb yozsangiz, kulgili." },
        {
          t: "table", head: ["Norasmiy (do'st, hamkasb)", "Neytral (ish yozishmasi)", "Rasmiy (mijoz, rasmiy idora)"], speak: [0, 1, 2],
          rows: [
            ["Can you send it over?", "Could you send it to me?", "I would be grateful if you could send it to me."],
            ["I'll check it out.", "I'll look into it.", "We shall investigate the matter."],
            ["Thanks a lot!", "Thank you very much.", "Thank you for your prompt reply."],
          ],
        },
        { t: "tip", tone: "info", md: "**Qoida:** o'zingizdan **yuqori** yoki **tanish bo'lmagan** odamga (mijoz, direktor, universitet, davlat idorasi) **rasmiy**; hamkasb va do'stlarga **neytral yoki norasmiy**. Shubhada — **bir pog'ona rasmiyroq** yozing." },
        { t: "check", ex: { k: "choice", q: "Qaysi gap eng **rasmiy**?", opts: ["We'll get back to you ASAP.", "We shall respond at the earliest opportunity.", "We'll sort it out soon.", "We'll let you know."], a: 1, why: "**shall respond at the earliest opportunity** — rasmiy; qolganlarida qisqartma va og'zaki iboralar bor." } },
      ],
    },
    {
      title: "So'z tanlash: phrasal verb yoki bitta fe'l",
      blocks: [
        { t: "p", md: "Rasmiy matnda ko'pincha **phrasal verb** o'rniga **lotin yoki fransuz ildizli bitta fe'l** ishlatiladi. Norasmiy tilda esa aksincha: qisqa va oddiy so'zlar tabiiy." },
        {
          t: "table", head: ["Norasmiy", "Rasmiy", "Misol (rasmiy)"], speak: [1, 2],
          rows: [
            ["get", "obtain", "You must obtain permission first."],
            ["buy", "purchase", "We purchased fifty laptops."],
            ["start / begin", "commence", "The course will commence on Monday."],
            ["end / stop", "terminate", "The company terminated the contract."],
            ["about", "approximately", "It costs approximately £50."],
            ["enough", "sufficient", "We have sufficient evidence."],
            ["good enough", "adequate", "The facilities are adequate."],
            ["later", "subsequently", "He was subsequently promoted."],
            ["and also / plus", "furthermore", "It is cheaper; furthermore, it is faster."],
            ["live", "reside", "Applicants must reside in the city."],
            ["try", "endeavour", "We endeavour to reply within a day."],
          ],
        },
        {
          t: "table", head: ["Phrasal verb", "Rasmiy fe'l"],
          rows: [
            ["find out", "discover, establish, ascertain"],
            ["look into", "investigate"],
            ["put off", "postpone"],
            ["ask for", "request"],
            ["set up", "establish"],
            ["go up", "increase"],
          ],
        },
        { t: "tip", tone: "warn", md: "Rasmiy so'z har doim yaxshi emas. Og'zaki suhbatda *I shall commence my breakfast* kulgili eshitiladi. Rasmiy so'zni **yozma** rasmiy matnda va rasmiy nutqda ishlating." },
        { t: "check", ex: { k: "choice", q: "*We bought new software* gapining rasmiy varianti qaysi?", opts: ["We purchased new software.", "We commenced new software.", "We terminated new software.", "We resided new software."], a: 0, why: "**buy** = **purchase**. Boshqa fe'llar ma'noga mos emas." } },
        { t: "check", ex: { k: "fill", q: "We do not have ___ evidence to reach a decision. (formal: enough)", a: ["sufficient"], hint: "s…", why: "**enough** ning rasmiy shakli: **sufficient**." } },
      ],
    },
    {
      title: "Grammatika va ohang: qisqartma, passive, yumshatish",
      blocks: [
        { t: "p", md: "Uslub faqat so'zdan iborat emas. Gap **tuzilishi** ham rasmiylikni belgilaydi:" },
        {
          t: "table", head: ["Belgi", "Norasmiy", "Rasmiy"],
          rows: [
            ["Qisqartma", "we're, don't, I'll", "we are, do not, I shall"],
            ["Ega", "We cancelled the order.", "The order has been cancelled. (passive)"],
            ["Bog'lovchi", "but, so, and also", "however, therefore, furthermore"],
            ["So'rov", "Can you…? Send me…", "Would you be able to…? I would be grateful if you could…"],
            ["Istak", "I want / I need", "I would like / I require"],
            ["Xabar", "We gonna / wanna", "We are going to / would like to"],
          ],
        },
        { t: "p", md: "**Passive** ish bajaruvchini yashiradi va gapni **shaxssiz, rasmiy** qiladi: *Your complaint has been forwarded to our manager.* **Yumshatish** (*softening*) so'rovni muloyim qiladi: *would, could, I was wondering if, it seems that, I'm afraid*." },
        {
          t: "examples", items: [
            { en: "I was wondering if you could extend the deadline.", uz: "Muddatni uzaytira olasizmi, deb o'ylagandim. (juda muloyim)" },
            { en: "I'm afraid we are unable to offer a refund.", uz: "Afsuski, pulni qaytarib bera olmaymiz. (rad etish yumshatilgan)" },
            { en: "It seems that there has been a misunderstanding.", uz: "Ko'rinishidan, tushunmovchilik yuz bergan. (aybni boshqaga yuklamaydi)" },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Rasmiy xatda **don't**, **we'll**, **can't** kabi qisqartmalar yaxshi uslub hisoblanadi.", a: false, why: "Rasmiy yozmada odatda **to'liq shakl**: *do not, we shall, cannot*." } },
        { t: "check", ex: { k: "choice", q: "Qaysi gap eng muloyim so'rov?", opts: ["Send me the invoice today.", "I want the invoice today.", "I was wondering if you could send me the invoice today.", "You must send the invoice today."], a: 2, why: "**I was wondering if you could…** — eng yumshoq, muloyim shakl." } },
      ],
    },
    {
      title: "Auditoriyaga moslash",
      blocks: [
        { t: "p", md: "Bir xabar, uch xil o'quvchi. Har birida **boshlanish, ohang va yakun** o'zgaradi:" },
        {
          t: "table", head: ["O'quvchi", "Boshlanish", "Asosiy gap", "Yakun"],
          rows: [
            ["Do'st", "Hi Tom,", "Sorry, I can't make it tomorrow.", "Cheers, Ali"],
            ["Hamkasb", "Hi Helen,", "Unfortunately I won't be able to attend tomorrow's meeting.", "Best wishes, Ali"],
            ["Direktor / mijoz", "Dear Mr Brown,", "I regret to inform you that I shall be unable to attend tomorrow's meeting.", "Kind regards, Ali Karimov"],
          ],
        },
        {
          t: "examples", items: [
            { en: "Dear Ms Collins, I am writing to enquire about your Marketing course.", uz: "Hurmatli Collins xonim, Marketing kursingiz haqida so'rash uchun yozyapman." },
            { en: "Thanks for the update. Let's talk on Friday.", uz: "Yangilik uchun rahmat. Juma kuni gaplashamiz. (hamkasbga)" },
            { en: "Please find attached the information you requested.", uz: "Iltimos, so'ragan ma'lumotingizni ilova qilingan holda oling." },
          ],
        },
        { t: "tip", tone: "good", md: "**Tekshirish ro'yxati:** (1) Kim o'qiydi? (2) Ularni qanchalik yaxshi bilaman? (3) Matnda qisqartma, jargon, undov belgilari bormi? (4) Ochilish va yakun mos keladimi? Bitta ham «noto'g'ri» so'z butun xatning ohangini buzishi mumkin." },
        { t: "check", ex: { k: "choice", q: "Siz tanish bo'lmagan mijozga yozyapsiz. Qaysi ochilish to'g'ri?", opts: ["Hey there,", "Dear Mr Hughes,", "Yo Mr Hughes,", "Hi mate,"], a: 1, why: "Tanish bo'lmagan mijozga: **Dear Mr / Ms + familiya**." } },
      ],
    },
    {
      title: "Tipik xatolar (o'zbek tilidan)",
      blocks: [
        { t: "p", md: "O'zbek tilida *men … xohlayman*, *menga … yuboring*, *…ni bilmoqchiman* rasmiy ham, odiy ham ishlatiladi. Inglizchaga so'zma-so'z o'tkazsangiz, gap **qo'pol** yoki **norasmiy** chiqadi." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I would like to know the price.", "Could you tell me when the meeting is?", "We are going to send the goods on Monday.", "Thank you for your prompt reply."] },
          bad: { title: "Xato / noo'rin", items: ["I want to know the price.", "Could you tell me when is the meeting?", "We gonna send the goods on Monday.", "Thank you for your prompt reply, mate."] },
        },
        { t: "p", md: "**1.** Mijozga *I want* — buyruq kabi eshitiladi; **I would like** ishlating. **2.** Muloyim savolda **to'g'ri so'z tartibi**: *when the meeting is*. **3.** *gonna, wanna* — faqat og'zaki tilda. **4.** *mate, buddy, guys* — rasmiy xatda o'rinsiz." },
        { t: "check", ex: { k: "fix", wrong: "I want to know the price.", a: ["I would like to know the price.", "I'd like to know the price."], hint: "muloyimroq", why: "Rasmiy so'rovda **I would like to…**." } },
        { t: "check", ex: { k: "fix", wrong: "Could you tell me when is the meeting?", a: ["Could you tell me when the meeting is?"], hint: "so'z tartibi", why: "Muloyim savol ichida **to'g'ri tartib**: *when the meeting is*." } },
        { t: "check", ex: { k: "fix", wrong: "We gonna send the goods on Monday.", a: ["We are going to send the goods on Monday.", "We will send the goods on Monday.", "We shall send the goods on Monday."], hint: "gonna — og'zaki", why: "**gonna** yozma rasmiy matnda ishlatilmaydi; *are going to* yoki *will*." } },
        { t: "check", ex: { k: "fix", wrong: "Thank you for your prompt reply, mate.", a: ["Thank you for your prompt reply."], hint: "ortiqcha so'zni olib tashlang", why: "**mate** — norasmiy murojaat, rasmiy xatda o'rinsiz." } },
      ],
    },
    {
      title: "O'qing: Ikki xat",
      blocks: [
        {
          t: "text", title: "Two emails in one morning", voice: "george",
          en: "Last Monday I wrote two emails, and I was careful with the style of both. The first was to my colleague Ben. I wrote, \"Hi Ben, can you send me the figures? I'll look at them after lunch. Thanks!\" The second was to a customer who had complained about a late delivery. I began with \"Dear Ms Taylor\" and wrote, \"I am sorry to learn that your order did not arrive on time. We are investigating the matter, and we shall contact you as soon as we obtain further information. Furthermore, a refund will be issued within five working days. We endeavour to provide an excellent service, and we apologise for any inconvenience.\" I ended with \"Yours sincerely\". My manager later said the second email was exactly what the situation required. A friend of mine told me that a formal letter should never sound like a chat, and a message to a friend should never sound like a legal document.",
          uz: "O'tgan dushanba kuni men ikkita xat yozdim va ikkalasining uslubiga e'tibor berdim. Birinchisi hamkasbim Benga edi. Men «Salom Ben, raqamlarni yubora olasanmi? Tushlikdan keyin qarab chiqaman. Rahmat!» deb yozdim. Ikkinchisi yetkazib berish kechikkanidan shikoyat qilgan mijozga edi. Men «Dear Ms Taylor» bilan boshladim va «Buyurtmangiz o'z vaqtida yetib bormaganidan afsusdamiz. Biz masalani tekshiryapmiz va qo'shimcha ma'lumot olishimiz bilan siz bilan bog'lanamiz. Bundan tashqari, pul besh ish kuni ichida qaytariladi. Biz a'lo xizmat ko'rsatishga intilamiz va noqulaylik uchun uzr so'raymiz» deb yozdim. «Yours sincerely» bilan tugatdim. Keyinroq menejerim ikkinchi xat vaziyat talab qilgan narsa bo'lganini aytdi. Do'stim rasmiy xat suhbatga o'xshamasligi, do'stga xabar esa huquqiy hujjatga o'xshamasligi kerakligini aytdi.",
        },
        { t: "check", ex: { k: "tf", q: "The writer used contractions such as \"I'll\" in the email to the customer.", a: false, why: "Mijozga yozilgan xatda qisqartma yo'q: *I am sorry, we shall contact*. **I'll** faqat Benga yozilgan xatda." } },
        { t: "check", ex: { k: "choice", q: "Which word in the customer email means \"also, in addition\"?", opts: ["Furthermore", "Subsequently", "Approximately", "Obtain"], a: 0, why: "**Furthermore** = bundan tashqari." } },
      ],
    },
    {
      title: "Dialog: Xatni tekshirish",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Alex", en: "Maria, could you read my draft before I send it to the director?", uz: "Maria, direktorga yuborishdan oldin qoralamamni o'qib chiqa olasizmi?" },
            { who: "Maria", en: "Of course. Hmm, \"Hey Mr Wood, I wanna ask about the new budget.\" That's too casual.", uz: "Albatta. Hmm, «Hey Mr Wood, yangi byudjet haqida so'ramoqchiman». Bu juda norasmiy." },
            { who: "Alex", en: "What should I write instead?", uz: "Uning o'rniga nima yozay?" },
            { who: "Maria", en: "\"Dear Mr Wood, I would like to enquire about the new budget.\" And avoid exclamation marks.", uz: "«Dear Mr Wood, yangi byudjet haqida so'rashni istardim». Va undov belgilaridan qoching." },
            { who: "Alex", en: "I see. Should I say \"find out\" or \"establish\" in the next sentence?", uz: "Tushundim. Keyingi gapda «find out» deymi yoki «establish»mi?" },
            { who: "Maria", en: "\"Establish\" is better here, and write \"we shall\" instead of \"we'll\".", uz: "Bu yerda «establish» yaxshiroq, va «we'll» o'rniga «we shall» deb yozing." },
            { who: "Alex", en: "And how do I end the email?", uz: "Xatni qanday tugataman?" },
            { who: "Maria", en: "\"I look forward to hearing from you. Kind regards.\" Then your full name.", uz: "«Javobingizni kutaman. Hurmat bilan.» Keyin to'liq ismingiz." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "What does Maria say about the exclamation marks?", opts: ["Avoid them in a formal email", "Use more of them", "They are necessary", "Only use them at the end"], a: 0, why: "Maria: *avoid exclamation marks* — rasmiy xatda ishlatilmaydi." } },
      ],
    },
  ],
  words: [
    { en: "obtain", uz: "olmoq, qo'lga kiritmoq (rasmiy)", ipa: "əbˈteɪn", pos: "verb", ex: "You must obtain permission before you publish the data.", exUz: "Ma'lumotni e'lon qilishdan oldin ruxsat olishingiz kerak." },
    { en: "commence", uz: "boshlanmoq, boshlamoq (rasmiy)", ipa: "kəˈmens", pos: "verb", ex: "The training will commence at nine o'clock.", exUz: "Trening soat to'qqizda boshlanadi." },
    { en: "purchase", uz: "sotib olmoq (rasmiy)", ipa: "ˈpɜː.tʃəs", pos: "verb", ex: "We purchased fifty laptops for the new office.", exUz: "Yangi ofis uchun ellikta noutbuk sotib oldik." },
    { en: "ascertain", uz: "aniqlamoq, aniq bilib olmoq (rasmiy)", ipa: "ˌæs.əˈteɪn", pos: "verb", ex: "We are trying to ascertain the cause of the delay.", exUz: "Kechikish sababini aniqlashga harakat qilyapmiz." },
    { en: "adequate", uz: "yetarli, qoniqarli", ipa: "ˈæd.ɪ.kwət", pos: "adj", ex: "The facilities in the new office are adequate.", exUz: "Yangi ofisdagi sharoitlar qoniqarli." },
    { en: "terminate", uz: "tugatmoq, bekor qilmoq (shartnomani)", ipa: "ˈtɜː.mɪ.neɪt", pos: "verb", ex: "The company terminated the contract in May.", exUz: "Kompaniya shartnomani may oyida bekor qildi." },
    { en: "subsequently", uz: "keyinroq, undan keyin", ipa: "ˈsʌb.sɪ.kwənt.li", pos: "adv", ex: "He was subsequently promoted to director.", exUz: "U keyinroq direktor lavozimiga ko'tarildi." },
    { en: "furthermore", uz: "bundan tashqari", ipa: "ˌfɜː.ðəˈmɔː", pos: "adv", ex: "The offer is generous; furthermore, it includes training.", exUz: "Taklif saxiy; bundan tashqari, unga o'qitish ham kiradi." },
    { en: "endeavour", uz: "intilmoq, harakat qilmoq (rasmiy)", ipa: "ɪnˈdev.ə", pos: "verb", ex: "We endeavour to reply to every message within a day.", exUz: "Biz har bir xabarga bir kun ichida javob berishga intilamiz." },
    { en: "reside", uz: "yashamoq, istiqomat qilmoq", ipa: "rɪˈzaɪd", pos: "verb", ex: "Candidates must reside in the city.", exUz: "Nomzodlar shaharda istiqomat qilishi kerak." },
  ],
  practice: [
    { k: "choice", q: "Qaysi fe'l **buy** ning rasmiy shakli?", opts: ["purchase", "commence", "terminate", "reside"], a: 0, why: "**buy** = **purchase**." },
    { k: "choice", q: "Qaysi gap norasmiy suhbatga mos, rasmiy xatga emas?", opts: ["I would be grateful for your reply.", "We shall contact you shortly.", "Thanks a lot, mate!", "Please find the document attached."], a: 2, why: "**Thanks a lot, mate!** — norasmiy: undov, *mate*." },
    { k: "listen", say: "We would be grateful if you could confirm the date.", opts: ["We would be grateful if you can confirm the date.", "We would be grateful if you could confirm the date.", "We were grateful if you could confirm the date.", "We would grateful if you could confirm the date."], a: 1, why: "**would be grateful if you could** — rasmiy so'rov." },
    { k: "fill", q: "The meeting will ___ at ten o'clock. (formal for *start*)", a: ["commence"], hint: "c…", why: "**start / begin** ning rasmiy shakli — **commence**." },
    { k: "fill", q: "The company decided to ___ the agreement. (formal for *end*)", a: ["terminate"], hint: "t…", why: "Shartnomani tugatish: **terminate**." },
    { k: "fill", q: "We do not have ___ funds to continue the project. (formal for *enough*)", a: ["sufficient"], hint: "s…", why: "**enough** → **sufficient**." },
    { k: "order", uz: "Buyurtmangiz taxminan uch kunda yetkaziladi.", words: ["Your", "order", "will", "be", "delivered", "in", "approximately", "three", "days."], extra: ["about", "deliver"], why: "Rasmiy: passive va **approximately**." },
    { k: "order", uz: "Biz so'rovingizga tezda javob berishga intilamiz.", words: ["We", "endeavour", "to", "respond", "to", "your", "enquiry", "promptly."], extra: ["responding", "quickly"], why: "**endeavour to + fe'l**." },
    { k: "translate", uz: "Men ushbu lavozimga murojaat qilmoqchiman. (rasmiy)", a: ["I would like to apply for this position.", "I would like to apply for the position.", "I'd like to apply for this position.", "I'd like to apply for the position."], why: "Rasmiy istak: **I would like to…**." },
    { k: "translate", uz: "Yig'ilish soat o'nda boshlanadi. (rasmiy)", a: ["The meeting will commence at ten o'clock.", "The meeting will commence at ten.", "The meeting will commence at 10 o'clock.", "The meeting will begin at ten o'clock.", "The meeting will begin at ten."], why: "Rasmiy: **will commence**." },
    { k: "fix", wrong: "We gonna send the goods on Monday.", a: ["We are going to send the goods on Monday.", "We will send the goods on Monday.", "We shall send the goods on Monday."], hint: "gonna — og'zaki", why: "**gonna** yozma rasmiy matnda ishlatilmaydi." },
    { k: "fix", wrong: "Thank you for your prompt reply, mate.", a: ["Thank you for your prompt reply."], hint: "ortiqcha so'z", why: "**mate** rasmiy xatga mos emas." },
    { k: "match", pairs: [["purchase", "buy"], ["obtain", "get"], ["commence", "start"], ["terminate", "end"], ["approximately", "about"]] },
    { k: "tf", q: "Rasmiy xatda **don't, we'll, can't** kabi qisqartmalar yaxshi uslub hisoblanadi.", a: false, why: "Rasmiy yozmada **to'liq shakllar** ishlatiladi." },
    { k: "dictation", say: "The report was subsequently approved by the board.", uz: "Hisobot keyinroq kengash tomonidan tasdiqlandi.", why: "**subsequently** + passive: rasmiy uslub." },
    { k: "speak", say: "I would be grateful if you could send me further information.", uz: "Menga qo'shimcha ma'lumot yuborsangiz, minnatdor bo'lardim." },
  ],
  quiz: [
    { k: "choice", q: "Tanish bo'lmagan mijozga yozilgan xat uchun qaysi ochilish yaxshi?", opts: ["Hey there,", "Dear Mr Hughes,", "Yo Mr Hughes,", "Hi mate,"], a: 1, why: "**Dear Mr + familiya** — rasmiy." },
    { k: "choice", q: "Shikoyat xati uchun qaysi gap **juda norasmiy**?", opts: ["I am writing to complain about a late delivery.", "Your service was rubbish and I want my money back now.", "I would be grateful for a refund.", "I look forward to your reply."], a: 1, why: "**rubbish**, *I want … now* — qo'pol, norasmiy ohang." },
    { k: "choice", q: "Qaysi gap passive bilan rasmiyroq yozilgan?", opts: ["We have cancelled the order.", "The order has been cancelled.", "We cancelled the order.", "We've cancelled the order."], a: 1, why: "**has been cancelled** — passive, ish bajaruvchi yo'q, shaxssiz va rasmiy." },
    { k: "choice", q: "*The cost is approximately fifty pounds.* Norasmiy tilda **approximately** o'rniga nima deyiladi?", opts: ["about", "exactly", "sufficient", "subsequently"], a: 0, why: "**approximately** = **about**." },
    { k: "fill", q: "We would be ___ if you could reply by Friday. (g…)", a: ["grateful"], hint: "g…", why: "**We would be grateful if you could…** — rasmiy so'rov." },
    { k: "fill", q: "He worked in sales and was ___ promoted to manager. (formal for *later*)", a: ["subsequently"], hint: "s…", why: "**later** → **subsequently**." },
    { k: "order", uz: "Biz Sizdan eshitishni intiqlik bilan kutamiz.", words: ["We", "look", "forward", "to", "hearing", "from", "you."], extra: ["hear", "with"], why: "**look forward to + -ing**." },
    { k: "translate", uz: "Shartnoma may oyida bekor qilindi. (rasmiy)", a: ["The contract was terminated in May.", "The agreement was terminated in May."], why: "Rasmiy: **terminate**, passive." },
    { k: "fix", wrong: "I want to ask for some information about the course.", a: ["I would like to ask for some information about the course.", "I'd like to ask for some information about the course."], hint: "muloyimroq", why: "Rasmiy: **I would like to…**." },
    { k: "tf", q: "Rasmiy xatlarda **find out** va **put off** kabi phrasal verb'lar ko'pincha **discover / establish** va **postpone** ga almashtiriladi.", a: true, why: "Rasmiy yozmada bitta fe'l ko'proq ishlatiladi." },
  ],
  summary: [
    "Uslubni **o'quvchiga** moslang: tanish bo'lmagan yoki yuqori odamga **rasmiy**, hamkasbga **neytral**, do'stga **norasmiy**. Shubhada bir pog'ona rasmiyroq yozing.",
    "Rasmiy so'zlar: **obtain, purchase, commence, terminate, approximately, sufficient, subsequently, furthermore**; phrasal verb o'rniga: *find out → discover, put off → postpone*.",
    "Rasmiy gap: **qisqartma yo'q**, **passive**, *however / therefore / furthermore*, *I would like*, *I would be grateful if you could…*.",
    "Yumshatish: *I was wondering if…, I'm afraid…, It seems that…*. Ochilish: *Dear Mr / Ms*; yakun: *Kind regards, Yours sincerely*.",
    "Xatolar: ~~I want to know~~ → **I would like to know**; ~~gonna / wanna~~ rasmiy matnda yo'q; ~~mate~~ rasmiy xatda o'rinsiz.",
  ],
  homework: "Bitta xabarni (masalan, **ertangi yig'ilishga kela olmasligingiz**) uch xil yozing: do'stga, hamkasbga va direktorga. Har birida qisqartma, bog'lovchi, ochilish va yakunni o'zgartiring. Keyin rasmiy variantdagi barcha norasmiy so'zlarni (*get, buy, start, enough*) rasmiy sinonim bilan almashtiring.",
};

export default lesson;
