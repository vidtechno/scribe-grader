import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u26-l4",
  title: "Reported speech: advanced",
  titleUz: "Ko'chirma gap B2: zamon siljishi istisnolari, savollar va modallar",
  goal: "Ko'chirma gapni B2 darajasida ishlatasiz: **zamon siljishi** (*backshift*) qachon kerak va qachon kerak emasligini bilasiz, **savol** (*She asked if…*) va **buyruq / iltimos** (*He told me to…*) ni to'g'ri ko'chirasiz, vaqt va joy so'zlarini almashtirasiz hamda *He said me*, *asked where did I live* kabi xatolardan qochasiz.",
  slides: [
    {
      title: "Nega kerak? Zamon siljishi",
      blocks: [
        { t: "p", md: "Yig'ilishda rahbar nima degani, yangilikda vazir nima deb va'da bergani, do'stingiz sizga nima so'ragani: bularning hammasini boshqa odamga **keyinroq** aytib berasiz. Buning uchun **ko'chirma gap** (*reported speech*) kerak. B1 da asosiy qoidani o'rgandingiz, endi uning **istisnolari**, **savollar** va **buyruqlar** bilan ishlaymiz." },
        { t: "p", md: "Asosiy qoida: gapni o'tgan zamonda ko'chirsak, fe'l odatda **bir pog'ona orqaga** siljiydi (*backshift*)." },
        {
          t: "table", head: ["To'g'ridan-to'g'ri gap", "Ko'chirma gap"], speak: [1],
          rows: [
            ["\"I work in a bank.\" (Present Simple)", "She said she worked in a bank. (Past Simple)"],
            ["\"I'm waiting for a call.\" (Present Continuous)", "He said he was waiting for a call. (Past Continuous)"],
            ["\"We lost the files.\" (Past Simple)", "They said they had lost the files. (Past Perfect)"],
            ["\"I've sent the report.\" (Present Perfect)", "She said she had sent the report. (Past Perfect)"],
            ["\"I will call you.\" (will)", "He said he would call me. (would)"],
            ["\"I can help.\" / \"I may be late.\"", "She said she could help. / He said he might be late."],
            ["\"We had already left.\" (Past Perfect)", "They said they had already left. (o'zgarmaydi)"],
          ],
        },
        { t: "tip", tone: "info", md: "**said (that)** va **told + kim + (that)** ikkalasida *that* tushib qolishi mumkin: *She said she was tired*. Lekin **told** dan keyin doim **kim** kerak: *told me*, *told the team*." },
        { t: "check", ex: { k: "choice", q: "\"I will send you the link,\" Ali said. → Ali said that he ___ send me the link.", opts: ["would", "will", "shall", "did"], a: 0, why: "**will → would**: ko'chirma gapda zamon bir pog'ona orqaga siljiydi." } },
        { t: "check", ex: { k: "fill", q: "\"I've finished the slides,\" Dana said. → Dana said she ___ the slides.", a: ["had finished"], uz: "Dana slaydlarni tugatganini aytdi.", why: "Present Perfect → **Past Perfect**: *had finished*." } },
      ],
    },
    {
      title: "Istisnolar: zamon siljimaganda",
      blocks: [
        { t: "p", md: "Hamma vaqt ham orqaga siljish shart emas. B2 darajada **qachon siljitmaslik** mumkinligini bilish muhim." },
        {
          t: "table", head: ["Holat", "Misol"], speak: [1],
          rows: [
            ["**Gap hali ham to'g'ri** va yaqinda aytilgan", "The guide said the museum opens at nine. (hozir ham shunday)"],
            ["**Umumiy haqiqat**", "My teacher said that water boils at a hundred degrees."],
            ["**Ko'chiruvchi fe'l hozirgi zamonda**", "She says she is tired. / The report says sales are falling."],
            ["**Past Perfect** o'zgarmaydi", "He said he had never used the app before."],
            ["**would, could, should, might, ought to**", "\"You should update it,\" he said. → He said I should update it."],
          ],
        },
        { t: "p", md: "**must** haqida: majburiyat bo'lsa *must* o'zgarmasligi yoki *had to* bo'lishi mumkin (*He said I must / had to leave*). Taxmin (*deduction*) bo'lsa odatda o'zgarmaydi: *She said he must be at home*." },
        { t: "tip", tone: "warn", md: "Agar gap endi **to'g'ri bo'lmasa** yoki ko'chirgan odam gapga **ishonmasa**, orqaga siljish yaxshiroq: *The minister said the new bridge **was** safe* (lekin keyin buzildi). Siljitmasangiz, «bu hozir ham to'g'ri» degan ma'no chiqadi." },
        {
          t: "examples", items: [
            { en: "The airline says that all flights are delayed.", uz: "Aviakompaniya barcha reyslar kechikayotganini aytmoqda.", note: "Ko'chiruvchi fe'l **says** (hozirgi zamon), shuning uchun siljish yo'q." },
            { en: "She told me that the Earth goes round the Sun.", uz: "U menga Yer Quyosh atrofida aylanishini aytdi.", note: "Umumiy haqiqat: siljish shart emas." },
            { en: "He said he would have helped if he had known.", uz: "U bilganida yordam berar edi, dedi.", note: "**would have + V3** va **had + V3** o'zgarmaydi." },
          ],
        },
        { t: "check", ex: { k: "tf", q: "\"I had never seen it before,\" she said. → She said she had never seen it before. Bu yerda fe'l o'zgarmagan, bu to'g'ri.", a: true, why: "**Past Perfect** ko'chirma gapda o'zgarmaydi." } },
        { t: "check", ex: { k: "choice", q: "On the phone, my sister says that she ___ a new job at the moment.", opts: ["is looking for", "was looking for", "had been looking for", "would look for"], a: 0, why: "Ko'chiruvchi fe'l **says** hozirgi zamonda, shuning uchun siljish kerak emas." } },
      ],
    },
    {
      title: "Vaqt va joy so'zlari",
      blocks: [
        { t: "p", md: "Gapni **boshqa vaqtda yoki boshqa joyda** takrorlasak, vaqt va joy so'zlari ham o'zgaradi. Sababi oddiy: «ertaga» siz uchun «ertaga», lekin kelasi hafta aytib berayotganda u allaqachon «o'tib ketgan kun»." },
        {
          t: "table", head: ["To'g'ridan-to'g'ri", "Ko'chirma gapda"], speak: [1],
          rows: [
            ["now", "then / at that moment"],
            ["today / tonight", "that day / that night"],
            ["yesterday", "the day before / the previous day"],
            ["tomorrow", "the next day / the following day"],
            ["next week", "the following week"],
            ["last month", "the month before / the previous month"],
            ["two days ago", "two days before"],
            ["here / this / these", "there / that / those"],
          ],
        },
        { t: "p", md: "Misol: *\"I'll finish it **tomorrow**,\" she said.* → *She said she would finish it **the next day**.*" },
        { t: "tip", tone: "good", md: "Agar gapni **o'sha kuni va o'sha joyda** takrorlasangiz, so'zlar o'zgarmaydi: *She said she would call tomorrow* (bugun aytyapman, «ertaga» hali ham ertaga)." },
        { t: "check", ex: { k: "match", pairs: [["now", "then"], ["tomorrow", "the next day"], ["yesterday", "the day before"], ["here", "there"], ["next week", "the following week"]] } },
        { t: "check", ex: { k: "fill", q: "\"I'll see you here tomorrow,\" he said. → He said he would see me ___ the next day.", a: ["there"], uz: "U ertasi kuni meni o'sha yerda ko'rishini aytdi.", why: "**here → there**, **tomorrow → the next day**." } },
      ],
    },
    {
      title: "Savollar va buyruqlar",
      blocks: [
        { t: "p", md: "**Ko'chirma savol** — gap, shuning uchun **so'roq tartibi yo'qoladi**: *do/does/did* ishlatilmaydi, ega fe'ldan oldin turadi va oxirida so'roq belgisi qo'yilmaydi." },
        {
          t: "table", head: ["Tur", "To'g'ridan-to'g'ri", "Ko'chirma gap"], speak: [2],
          rows: [
            ["Wh-savol", "\"Where do you live?\"", "She asked me where I lived."],
            ["Wh-savol", "\"What time does the shop open?\"", "He asked what time the shop opened."],
            ["Yes / no savol", "\"Are you ready?\"", "She asked if / whether I was ready."],
            ["Yes / no savol", "\"Can you help me?\"", "He asked if I could help him."],
            ["Buyruq", "\"Close the door.\"", "She told me to close the door."],
            ["Iltimos", "\"Please don't tell anyone.\"", "He asked me not to tell anyone."],
          ],
        },
        { t: "p", md: "Yes / no savolda **if** yoki **whether** kerak. **whether** rasmiyroq va *or not* bilan yoki infinitiv bilan ishlatiladi: *I didn't know whether to accept or not*. Buyruq va iltimosda **told / asked / ordered / warned + kim + (not) to + V**." },
        {
          t: "examples", items: [
            { en: "The reporter asked the minister whether the rules would change.", uz: "Muxbir vazirdan qoidalar o'zgaradimi, deb so'radi.", note: "**whether** + ega + fe'l, so'roq tartibi yo'q." },
            { en: "My manager asked me why I hadn't answered the email.", uz: "Menejerim nega xatga javob bermaganimni so'radi.", note: "Past Simple/Present Perfect savol → **Past Perfect**." },
            { en: "The officer told everyone not to leave the building.", uz: "Xodim hammaga binoni tark etmaslikni aytdi.", note: "Inkor buyruq: **not to + V**." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "\"Where do you work?\" she asked me. → She asked me ___.", opts: ["where I worked", "where did I work", "where I did work", "that where I worked"], a: 0, why: "Ko'chirma savolda **so'roq tartibi yo'q**: *where I worked*." } },
        { t: "check", ex: { k: "fill", q: "\"Have you backed up your files?\" he asked. → He asked me ___ I had backed up my files.", a: ["if", "whether"], uz: "U fayllarimni zaxiralaganimni so'radi.", why: "Yes / no savol: **if / whether**." } },
      ],
    },
    {
      title: "Tipik xatolar: o'zbek tilidan interferensiya",
      blocks: [
        { t: "p", md: "O'zbek tilida «dedi, so'radi, aytdi» fe'llaridan keyin ko'pincha **to'g'ridan-to'g'ri gap tartibi** saqlanadi va *aytdi* bitta so'z. Natijada quyidagi xatolar tez-tez uchraydi." },
        {
          t: "compare",
          good: { title: "1. said / told", items: ["He told me that the server was down.", "He said that the server was down."] },
          bad: { title: "Xato", items: ["He said me that the server was down.", "He told that the server was down."] },
        },
        { t: "check", ex: { k: "fix", wrong: "She said me that she was busy.", a: ["She told me that she was busy.", "She said that she was busy.", "She said she was busy."], hint: "said + kim bo'lmaydi", why: "**said** dan keyin kim kelmaydi; kim bo'lsa **told me**." } },
        {
          t: "compare",
          good: { title: "2. So'roq tartibi yo'q", items: ["She asked me where I lived.", "He asked what I was doing."] },
          bad: { title: "Xato", items: ["She asked me where did I live.", "He asked what was I doing."] },
        },
        { t: "check", ex: { k: "fix", wrong: "He asked me where did I buy my phone.", a: ["He asked me where I bought my phone."], hint: "so'roq tartibi yo'q, zamon siljigan", why: "Ko'chirma savolda **did** yo'q va fe'l **bought**." } },
        {
          t: "compare",
          good: { title: "3. Inkor buyruq: not to", items: ["The teacher told us not to use phones.", "She asked me not to be late."] },
          bad: { title: "Xato", items: ["The teacher told us don't use phones.", "She asked me to don't be late."] },
        },
        { t: "check", ex: { k: "fix", wrong: "The teacher told us don't use phones in the exam.", a: ["The teacher told us not to use phones in the exam."], hint: "told + kim + not to + V", why: "Inkor buyruq: **not to + V**; *don't* ishlatilmaydi." } },
        {
          t: "compare",
          good: { title: "4. will → would", items: ["He said he would call me the next day.", "She asked if I could help."] },
          bad: { title: "Xato", items: ["He said he will call me the next day.", "She asked if I can help."] },
        },
        { t: "check", ex: { k: "fix", wrong: "She said she will join us the following week.", a: ["She said she would join us the following week."], hint: "o'tgan zamon + will", why: "Gap o'tmishda aytilgan va vaqt so'zi *the following week*: **would**." } },
      ],
    },
    {
      title: "O'qing: Brentonda yangi qoida",
      blocks: [
        {
          t: "text", title: "A new rule for Brenton", voice: "george",
          en: "On Monday the mayor of Brenton stated that private cars would be banned from the old centre from the following spring. He went on to say that air quality had been getting worse for years. A reporter asked whether shops would lose customers, and the mayor responded that deliveries would still be allowed early in the morning. He made it clear that the plan was not meant to hurt local business. Some drivers muttered that the idea was unfair, and one shop owner told us she reckoned sales would fall. One analyst observed that similar schemes in other cities had been unpopular at first. The mayor reaffirmed that the decision was final, but he assured residents that the council would review it after a year.",
          uz: "Dushanba kuni Brenton meri shaharning eski markaziga kelasi bahordan boshlab shaxsiy avtomobillar kirishi taqiqlanishini bildirdi. U yillardan beri havo sifati yomonlashib borayotganini ham qo'shimcha qildi. Muxbir do'konlar mijozlarini yo'qotadimi, deb so'radi, mer esa yuk yetkazib berishga hali ham ertalab ruxsat berilishini aytdi. U reja mahalliy biznesga zarar yetkazish uchun emasligini aniq ta'kidladi. Ba'zi haydovchilar bu g'oya adolatsiz, deb g'o'ldirashdi, bir do'kon egasi esa savdo kamayadi deb o'ylashini aytdi. Bir tahlilchi boshqa shaharlardagi shunga o'xshash rejalar dastlab mashhur bo'lmaganini ta'kidladi. Mer qaror yakuniy ekanini yana bir bor tasdiqladi, lekin aholiga kengash uni bir yildan keyin qayta ko'rib chiqishiga ishontirdi.",
        },
        { t: "check", ex: { k: "tf", q: "The mayor said that private cars would be banned from the old centre from the following spring.", a: true, why: "Matnda: *private cars would be banned … from the following spring.*" } },
        { t: "check", ex: { k: "choice", q: "What did the reporter ask?", opts: ["Whether shops would lose customers.", "Why air quality was getting worse.", "When the council would review the plan.", "Who had suggested the idea."], a: 0, why: "Matnda: *A reporter asked whether shops would lose customers.*" } },
        { t: "check", ex: { k: "choice", q: "How does the mayor feel about the decision?", opts: ["It is final, but it will be reviewed after a year.", "It may change next week.", "It will only apply to deliveries.", "It was proposed by the drivers."], a: 0, why: "*reaffirmed that the decision was final … would review it after a year.*" } },
      ],
    },
    {
      title: "Dialog: Yig'ilishdan keyin",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Nilufar", en: "Were you at the meeting yesterday? What did the director say about the new software?", uz: "Kecha yig'ilishda bo'ldingizmi? Direktor yangi dastur haqida nima dedi?" },
            { who: "Alex", en: "She said that the company would introduce it the following month.", uz: "U kompaniya uni keyingi oy joriy qilishini aytdi." },
            { who: "Nilufar", en: "Did she say whether we would get any training?", uz: "U bizga trening berilishini aytdimi?" },
            { who: "Alex", en: "Yes. She told us to attend a short course, and she asked everybody to bring a laptop.", uz: "Ha. U bizga qisqa kursga qatnashishni aytdi va hammadan noutbuk olib kelishni so'radi." },
            { who: "Nilufar", en: "Did anybody ask how much it would cost?", uz: "Kimdir bu qancha turishini so'radimi?" },
            { who: "Alex", en: "Tom asked if it was expensive. She replied that she couldn't give the exact figure, but she assured us that the budget had been approved.", uz: "Tom qimmatmi, deb so'radi. U aniq summani ayta olmasligini, lekin byudjet tasdiqlanganiga ishontirdi." },
            { who: "Nilufar", en: "Did she mention the old system?", uz: "U eski tizim haqida gapirdimi?" },
            { who: "Alex", en: "Yes, she said it was getting slower every year. She also reminded us not to share our passwords.", uz: "Ha, u eski tizim har yili sekinlashib borayotganini aytdi. Shuningdek, bizga parollarni ulashmaslikni eslatdi." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "What did the director ask everybody to do?", opts: ["Bring a laptop.", "Pay for the course.", "Delete the old system.", "Change their passwords."], a: 0, why: "Dialogda: *she asked everybody to bring a laptop.*" } },
        { t: "check", ex: { k: "tf", q: "The director gave the exact cost of the software.", a: false, why: "U *couldn't give the exact figure* dedi, lekin byudjet tasdiqlanganini aytdi." } },
      ],
    },
  ],
  words: [
    { en: "state", uz: "(rasmiy) bildirmoq, bayon qilmoq", ipa: "steɪt", pos: "verb", ex: "The report states that the system was not secure.", exUz: "Hisobotda tizim xavfsiz bo'lmagani bayon qilingan." },
    { en: "respond", uz: "javob bermoq, munosabat bildirmoq", ipa: "rɪˈspɒnd", pos: "verb", ex: "The company has not responded to our questions yet.", exUz: "Kompaniya savollarimizga hali javob bergani yo'q." },
    { en: "observe", uz: "payqab aytmoq, kuzatmoq", ipa: "əbˈzɜːv", pos: "verb", ex: "One expert observed that fewer people were buying printed books.", exUz: "Bir mutaxassis bosma kitob sotib oluvchilar kamayganini ta'kidladi.", },
    { en: "imply", uz: "ishora qilmoq, bilvosita anglatmoq", ipa: "ɪmˈplaɪ", pos: "verb", ex: "Her answer seemed to imply that she was not satisfied.", exUz: "Uning javobi qoniqmaganini bildirib turgandek edi." },
    { en: "reckon", uz: "o'ylamoq, hisoblamoq (norasmiy)", ipa: "ˈrek.ən", pos: "verb", ex: "I reckon the meeting will finish before noon.", exUz: "Menimcha, yig'ilish tushgacha tugaydi." },
    { en: "mutter", uz: "g'o'ldiramoq, past ovozda aytmoq", ipa: "ˈmʌt.ə", pos: "verb", ex: "He muttered that the instructions were confusing.", exUz: "U ko'rsatmalar chalkash ekanini g'o'ldirab aytdi." },
    { en: "reaffirm", uz: "qayta tasdiqlamoq", ipa: "ˌriː.əˈfɜːm", pos: "verb", ex: "The minister reaffirmed that the law would not change.", exUz: "Vazir qonun o'zgarmasligini yana bir bor tasdiqladi." },
    { en: "specify", uz: "aniq ko'rsatmoq, belgilab bermoq", ipa: "ˈspes.ɪ.faɪ", pos: "verb", ex: "The manager did not specify when the new rules would start.", exUz: "Menejer yangi qoidalar qachon boshlanishini aniq aytmadi." },
    { en: "go on to say", uz: "so'ngra shunday deb qo'shimcha qilmoq", ipa: "ɡəʊ ɒn tə seɪ", pos: "phrase", ex: "She went on to say that prices would rise again.", exUz: "U so'ngra narxlar yana oshishini qo'shimcha qildi." },
    { en: "make it clear", uz: "aniq aytib qo'ymoq, ravshan qilmoq", ipa: "meɪk ɪt klɪə", pos: "phrase", ex: "The director made it clear that late reports would not be accepted.", exUz: "Direktor kech topshirilgan hisobotlar qabul qilinmasligini aniq aytib qo'ydi." },
  ],
  practice: [
    { k: "match", pairs: [["now", "then"], ["today", "that day"], ["yesterday", "the day before"], ["tomorrow", "the next day"], ["here", "there"]] },
    { k: "choice", q: "\"I will call you tomorrow,\" he said. → He said he ___ call me the next day.", opts: ["would", "will", "did", "had"], a: 0, why: "**will → would**; *tomorrow → the next day*." },
    { k: "tf", q: "\"I've lost my keys,\" he said. → He said he had lost his keys. Bu ko'chirma gap to'g'ri.", a: true, why: "Present Perfect → **Past Perfect**: *had lost*." },
    { k: "choice", q: "\"Where do you work?\" she asked me. → She asked me ___.", opts: ["where I worked", "where did I work", "where was I working", "where I did work"], a: 0, why: "Ko'chirma savolda so'roq tartibi yo'q va zamon bir pog'ona orqaga: **where I worked**." },
    { k: "fill", q: "\"Do you like the new phone?\" she asked. → She asked me ___ I liked the new phone.", a: ["if", "whether"], uz: "U menga yangi telefon yoqadimi, deb so'radi.", why: "Yes / no savol: **if / whether**." },
    { k: "order", uz: "U mendan nega kechikkanimni so'radi.", words: ["She", "asked", "me", "why", "I", "was", "late."], extra: ["did", "am"], why: "**why I was late** — so'roq tartibi yo'q." },
    { k: "translate", uz: "Menejer menga hisobotni darhol yuborishni aytdi.", a: ["The manager told me to send the report immediately.", "The manager told me to send the report at once.", "The manager told me to send the report right away.", "The manager told me to send the report straight away.", "The manager told me to send the report as soon as possible."], why: "Buyruq: **told + kim + to + V**." },
    { k: "fix", wrong: "She asked me where did I buy my phone.", a: ["She asked me where I bought my phone."], hint: "so'roq tartibi yo'q", why: "Ko'chirma savolda **did** ishlatilmaydi: *where I bought*." },
    { k: "fix", wrong: "He said me that the server was down.", a: ["He told me that the server was down.", "He said that the server was down.", "He said the server was down."], hint: "said / told", why: "**said** dan keyin kim kelmaydi; kim bilan **told me**." },
    { k: "listen", say: "She asked whether the update would be free.", opts: ["She asked whether the update would be free.", "She asked whether the update will be free.", "She asked whether would the update be free.", "She asked that the update would be free."], a: 0, why: "Eshitilgan gap: **whether + ega + would be**." },
    { k: "choice", q: "\"Can you help me?\" she asked. → She asked ___.", opts: ["if I could help her", "if could I help her", "if can I help her", "that I could help her"], a: 0, why: "Yes / no savol: **if + ega + could**; so'roq tartibi yo'q." },
    { k: "tf", q: "\"You must wear a helmet,\" the instructor said. → The instructor said I must (yoki had to) wear a helmet. Ikkala variant ham mumkin.", a: true, why: "Majburiyatda **must** o'zgarmasligi yoki **had to** bo'lishi mumkin." },
    { k: "dictation", say: "The technician told me not to switch the laptop off.", uz: "Texnik menga noutbukni o'chirmaslikni aytdi.", why: "Inkor buyruq: **told me not to switch**." },
    { k: "match", pairs: [["state", "rasmiy bildirmoq"], ["reaffirm", "qayta tasdiqlamoq"], ["specify", "aniq ko'rsatmoq, belgilab bermoq"], ["mutter", "g'o'ldiramoq"], ["imply", "bilvosita anglatmoq"]] },
    { k: "fill", q: "Her silence seemed to ___ that she disagreed. (bilvosita anglatmoq)", a: ["imply"], uz: "Uning sukuti u rozi emasligini bildirayotgandek edi.", why: "**imply** — to'g'ridan-to'g'ri aytmasdan anglatmoq." },
    { k: "speak", say: "She asked me if I had backed up my files, and I said that I would do it the next day.", uz: "U fayllarimni zaxiralaganimni so'radi, men esa buni ertasi kuni qilishimni aytdim." },
  ],
  quiz: [
    { k: "choice", q: "\"We are leaving now,\" they said. → They said they ___ leaving then.", opts: ["were", "are", "had", "would be"], a: 0, why: "Present Continuous → **Past Continuous**: *were leaving*." },
    { k: "choice", q: "The teacher said that water ___ at a hundred degrees. (umumiy haqiqat, siljish shart emas)", opts: ["boils", "is boiled", "has boiled", "will boil"], a: 0, why: "Umumiy haqiqat o'zgarmaydi: **boils** (*boiled* ham mumkin, lekin bu variant yo'q)." },
    { k: "choice", q: "He asked me ___.", opts: ["whether I had finished", "had I finished", "that had I finished", "did I finish"], a: 0, why: "Yes / no savol: **whether + ega + had finished**." },
    { k: "choice", q: "\"Don't touch the screen,\" she said. → She told me ___ the screen.", opts: ["not to touch", "don't touch", "to not touching", "not touch"], a: 0, why: "Inkor buyruq: **told + kim + not to + V**." },
    { k: "fill", q: "\"I can't open the file,\" he said. → He said he ___ open the file.", a: ["couldn't", "could not"], uz: "U faylni ocha olmasligini aytdi.", why: "**can't → couldn't**." },
    { k: "fill", q: "\"I'll send it tomorrow,\" she said. → She said she would send it ___.", a: ["the next day", "the following day"], uz: "U buni ertasi kuni yuborishini aytdi.", why: "**tomorrow → the next day / the following day**." },
    { k: "order", uz: "U mendan qayerda yashashimni so'radi.", words: ["He", "asked", "me", "where", "I", "lived."], extra: ["did", "live"], why: "**where I lived** — so'roq tartibi yo'q." },
    { k: "translate", uz: "U menga yig'ilish soat ikkida boshlanishini aytdi.", a: ["She told me that the meeting started at two.", "She told me the meeting started at two.", "He told me that the meeting started at two.", "He told me the meeting started at two.", "She told me that the meeting would start at two.", "He told me that the meeting would start at two.", "She told me the meeting would start at two.", "He told me the meeting would start at two.", "She told me that the meeting was starting at two.", "He told me that the meeting was starting at two."], why: "**told me (that)** + o'tgan zamon." },
    { k: "fix", wrong: "The manager asked if will we get a bonus.", a: ["The manager asked if we would get a bonus.", "The manager asked whether we would get a bonus."], hint: "so'roq tartibi va would", why: "Ko'chirma savol: **if we would get**." },
    { k: "tf", q: "*She said me that she was tired.* — bu gap to'g'ri.", a: false, why: "**said** dan keyin kim kelmaydi; to'g'risi *She told me* yoki *She said that*." },
  ],
  summary: [
    "**Backshift:** Present → Past, Present Perfect / Past Simple → Past Perfect, *will → would, can → could, may → might*; Past Perfect va *would, could, should, might* o'zgarmaydi.",
    "**Istisnolar:** gap hali ham to'g'ri bo'lsa, umumiy haqiqat bo'lsa yoki ko'chiruvchi fe'l hozirgi zamonda bo'lsa (*She says…*), zamon siljimasligi mumkin.",
    "**Vaqt va joy:** *now → then, today → that day, yesterday → the day before, tomorrow → the next day, here → there*.",
    "**Savol:** so'roq tartibi yo'q, *do/did* yo'q: *She asked where I lived. He asked if / whether I was ready.*",
    "**Buyruq:** *told / asked + kim + (not) to + V*. Xatolar: *said me, where did I live, told us don't*, *said she will*.",
  ],
  homework: "Bu hafta uchta yangilikni o'qing yoki tinglang va har biridan **ikki ko'chirma gap** yozing (bittasi *said that…*, ikkinchisi *asked if…* yoki *told … to…*). Keyin do'stingiz bilan bo'lgan suhbatdan beshta gapni vaqt va joy so'zlarini almashtirib ko'chiring va xatolarni o'zingiz tekshiring.",
};

export default lesson;
