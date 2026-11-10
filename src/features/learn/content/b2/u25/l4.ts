import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u25-l4",
  title: "Modals of deduction in the past",
  titleUz: "Taxmin modallari: must have, can't have, might have, could have",
  goal: "O'tgan voqea haqida **qanchalik ishonchingizga qarab** taxmin qilasiz: **must have + V3** (deyarli aniq), **can't / couldn't have + V3** (deyarli mumkin emas), **might / may / could have + V3** (ehtimol). **Continuous** shakllarini (*must have been working*) ishlatasiz, hozirgi taxmin (*must be*) bilan farqlaysiz va **mustn't have** kabi xatolardan qochasiz.",
  slides: [
    {
      title: "Dalil bor, lekin guvoh yo'q: ishonch shkalasi",
      blocks: [
        { t: "p", md: "Ishga kelsangiz, hamkasbingizning stoli bo'sh, kompyuteri o'chiq. Hech kim sizga nima bo'lganini aytmadi, lekin siz **dalillarga qarab** o'ylaysiz: *U kasal bo'lgan bo'lsa kerak. U ishdan ketgan bo'lishi mumkin emas, kecha rejalar tuzgan edi. U ta'tilga chiqqan bo'lishi ham mumkin.* Ingliz tilida o'tgan voqea haqidagi bunday taxmin **modal fe'l + have + V3** bilan aytiladi. Modal fe'lni tanlash — gapiruvchining **qanchalik ishonchini** ko'rsatadi." },
        {
          t: "table", head: ["Ishonch", "Qolip", "Misol"], speak: [2],
          rows: [
            ["Deyarli aniq (ha)", "must have + V3", "He must have missed the bus."],
            ["Ehtimol (balki)", "might / may / could have + V3", "He might have missed the bus."],
            ["Ehtimol emas (balki yo'q)", "might not / may not have + V3", "He might not have heard the alarm."],
            ["Deyarli aniq (yo'q)", "can't / couldn't have + V3", "He can't have missed it. He left home early."],
          ],
        },
        { t: "tip", tone: "info", md: "Bu **taxmin** (deduction): voqea o'tgan, lekin siz uni **ko'rmagansiz** va dalillardan xulosa chiqarasiz. Taxmin **kelajak** haqida emas va **majburiyat** haqida emas: *must have* — «bo'lishi shart edi» degani emas, «bo'lgan bo'lsa kerak» degani." },
        { t: "check", ex: { k: "choice", q: "Kecha u bilan gaplashdim, u baxtli edi. U ishdan bo'shatilgan bo'lishi mumkin emas. Qaysi gap kerak? *He ___ fired.*", opts: ["can't have been", "must have been", "might have been", "should have been"], a: 0, why: "Deyarli aniq «yo'q» ma'nosi: **can't have + V3**. *Must have been* esa «bo'lgan bo'lsa kerak»." } },
      ],
    },
    {
      title: "Must have va can't have: deyarli aniq xulosa",
      blocks: [
        { t: "p", md: "**Must have + V3** — kuchli dalil bor va siz deyarli ishonasiz: *The ground is wet. It must have rained during the night.* **Can't have + V3** (yoki **couldn't have + V3**) — dalil aksini ko'rsatadi: *The ground is dry. It can't have rained.* Ular bir-biriga **qarama-qarshi**: *must have* ↔ *can't have*." },
        {
          t: "examples", items: [
            { en: "The window is broken. Someone must have broken in.", uz: "Deraza singan. Kimdir bosib kirgan bo'lsa kerak." },
            { en: "She can't have forgotten the meeting. She wrote it in her diary.", uz: "U uchrashuvni unutgan bo'lishi mumkin emas. Uni kundaligiga yozgan." },
            { en: "They couldn't have arrived yet. Their flight was delayed.", uz: "Ular hali yetib kelgan bo'lishi mumkin emas. Parvozlari kechikkan edi." },
          ],
        },
        { t: "tip", tone: "warn", md: "**Inkor taxmin uchun *mustn't have* ishlatilmaydi** (Britaniya ingliz tilida u deyarli uchramaydi va imtihonda xato hisoblanadi). O'zbekcha «bo'lmagan bo'lsa kerak» deb o'ylab **He mustn't have known** deyish xato. To'g'risi: **He can't have known** (mumkin emas) yoki **He probably didn't know** (ehtimol bilmagan)." },
        { t: "p", md: "**Can't have** va **couldn't have** deyarli bir xil. Gaplashuvda **can't have** ko'proq eshitiladi; **couldn't have** — biroz rasmiyroq va ba'zan o'tgan voqea uchun kuchliroq: *He couldn't have seen us; the lights were off.*" },
        { t: "check", ex: { k: "fill", q: "The shop is closed and the lights are off. The owner ___ gone home. (deyarli aniq)", a: ["must have", "has probably", "must have already"], uz: "Do'kon yopiq, chiroqlar o'chiq. Egasi uyga ketgan bo'lsa kerak.", hint: "must have + V3", why: "Kuchli dalil, deyarli aniq xulosa: **must have + V3**." } },
        { t: "check", ex: { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["She mustn't have heard the phone ring.", "She can't have heard the phone ring; she was asleep.", "She must have heard not the phone ring.", "She can't have hear the phone ring."], a: 1, why: "Deyarli aniq «yo'q»: **can't have + V3**. *Mustn't have* ma'nosi aniq emas va *hear* o'rniga *heard* kerak." } },
      ],
    },
    {
      title: "Might, may, could have: ehtimollar",
      blocks: [
        { t: "p", md: "Agar dalil yetarli bo'lmasa, siz **bir nechta ehtimol** aytasiz: **might / may / could have + V3** («...gan bo'lishi mumkin»). Ularning ma'nosi deyarli bir xil; **might** va **could** ko'proq ishonchsizlik, **may** — rasmiyroq." },
        {
          t: "examples", items: [
            { en: "He's late. He might have got stuck in traffic.", uz: "U kechikdi. U tirbandlikda qolgan bo'lishi mumkin." },
            { en: "The email may have gone to your spam folder.", uz: "Xat spam papkasiga tushgan bo'lishi mumkin." },
            { en: "She could have taken the earlier train, or she could have missed it.", uz: "U ertaroq poyezdga o'tirgan bo'lishi mumkin yoki undan kechikkan bo'lishi mumkin." },
          ],
        },
        { t: "p", md: "Inkor: **might not have** va **may not have** — «...magan bo'lishi mumkin» (**ehtimol emas**, lekin imkon bor). Bu **can't have**dan farq qiladi: *He might not have seen the sign* (balki ko'rmagan) ≠ *He can't have seen the sign* (ko'rgan bo'lishi mumkin emas)." },
        {
          t: "table", head: ["Gap", "Ma'nosi"], speak: [0],
          rows: [
            ["She might not have received the invitation.", "Balki, olmagan (imkon bor)"],
            ["She can't have received the invitation.", "Olgan bo'lishi mumkin emas (deyarli aniq)"],
            ["She must have received the invitation.", "Olgan bo'lsa kerak (deyarli aniq)"],
          ],
        },
        { t: "tip", tone: "warn", md: "**Could have** boshqa ma'noda ham keladi: *I could have won* — «g'alaba qozonishim mumkin edi (lekin qozonmadim)». Bu **o'tmishdagi imkon** (keyingi darsda). Taxmin ma'nosi gap kontekstidan aniq: *I don't know where he is. He could have gone out.*" },
        { t: "check", ex: { k: "choice", q: "Where's Karim? He ___ gone to the bank, or he ___ gone to lunch. I'm not sure.", opts: ["might have / might have", "must have / must have", "can't have / can't have", "should have / should have"], a: 0, why: "Aniq emas, ikki ehtimol: **might have + V3**." } },
        { t: "check", ex: { k: "tf", q: "*She might not have received the email* gapi uning emailni olmagani deyarli aniq ekanini bildiradi.", a: false, why: "**might not have** — faqat ehtimol. Deyarli aniq inkor uchun **can't have received** ishlatiladi." } },
      ],
    },
    {
      title: "Continuous shakllar va hozirgi taxmin bilan farq",
      blocks: [
        { t: "p", md: "Taxmin qilayotgan voqea **davom etayotgan** jarayon bo'lsa, **modal + have been + V-ing** ishlatamiz: *The phone was off. He must have been sleeping.* («U uxlayotgan bo'lsa kerak edi.») Bu **o'sha paytdagi jarayon**ni ko'rsatadi; oddiy shakl (*must have slept*) esa **tugagan ish**ni." },
        {
          t: "table", head: ["Shakl", "Misol", "Ma'nosi"], speak: [1],
          rows: [
            ["must have + V3", "He must have fallen asleep.", "uxlab qolgan (voqea)"],
            ["must have been + V-ing", "He must have been sleeping.", "uxlayotgan edi (jarayon)"],
            ["might have been + V-ing", "She might have been working late.", "kech ishlayotgan bo'lishi mumkin"],
            ["can't have been + V-ing", "They can't have been waiting long.", "uzoq kutgan bo'lishi mumkin emas"],
          ],
        },
        { t: "p", md: "**Hozirgi** taxmin bilan solishtiring: **modal + V1** hozirgi holat haqida (*He must be tired*), **modal + have + V3** esa o'tgan haqida (*He must have been tired*)." },
        {
          t: "table", head: ["Vaqt", "Deyarli aniq (ha)", "Deyarli aniq (yo'q)", "Ehtimol"], speak: [],
          rows: [
            ["Hozir", "He must be at home.", "He can't be at home.", "He might be at home."],
            ["Hozir (davomiy)", "He must be working.", "He can't be working.", "He might be working."],
            ["O'tgan", "He must have been at home.", "He can't have been at home.", "He might have been at home."],
            ["O'tgan (davomiy)", "He must have been working.", "He can't have been working.", "He might have been working."],
          ],
        },
        { t: "check", ex: { k: "choice", q: "I rang at 8 p.m. but nobody answered. They ___ having dinner. (jarayon)", opts: ["must have been", "must be", "must have", "can't be"], a: 0, why: "O'tgan paytdagi jarayon haqida taxmin: **must have been + V-ing**." } },
        { t: "check", ex: { k: "fill", q: "Karim is in the office right now and the light is on in his room. He ___ working. (hozir, deyarli aniq)", a: ["must be"], hint: "hozirgi holat: modal + V1", why: "Hozirgi holat haqida taxmin: **must be + V-ing**; *have* kerak emas." } },
      ],
    },
    {
      title: "Tipik xatolar (o'zbek tilidan interferensiya)",
      blocks: [
        { t: "p", md: "O'zbek tilida «-gan bo'lsa kerak» va «-gan bo'lishi mumkin emas» qoliplari bitta fe'l shakli bilan aytiladi. Inglizchada esa har bir ishonch darajasi **alohida modal** bilan ifodalanadi va fe'l har doim **have + V3** bo'ladi." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["He can't have known about it.", "She must have been waiting for hours.", "They might have taken the wrong road."] },
          bad: { title: "Xato", items: ["He mustn't have known about it.", "She must have wait for hours.", "They might have take the wrong road."] },
        },
        { t: "tip", tone: "warn", md: "**1.** Inkor taxmin: *can't / couldn't have*, **mustn't have emas**. **2.** *have*dan keyin **V3** (*taken*), V1 emas. **3.** Hozirgi (*must be*) bilan o'tgan (*must have been*) ni aralashtirmang: *He must be asleep now. He must have been asleep when I called.*" },
        { t: "check", ex: { k: "fix", wrong: "He mustn't have known about it.", a: ["He can't have known about it.", "He couldn't have known about it."], hint: "deyarli aniq inkor", why: "Inkor taxmin: **can't / couldn't have + V3**." } },
        { t: "check", ex: { k: "fix", wrong: "They might have take the wrong road.", a: ["They might have taken the wrong road."], hint: "have dan keyin V3", why: "**modal + have + V3**: *taken*." } },
        { t: "check", ex: { k: "fix", wrong: "She must have wait for hours.", a: ["She must have been waiting for hours.", "She must have waited for hours."], hint: "have dan keyin V3 yoki been + V-ing", why: "**must have waited** yoki jarayon uchun **must have been waiting**." } },
      ],
    },
    {
      title: "O'qing: Yo'qolgan noutbuk",
      blocks: [
        {
          t: "text", title: "The missing laptop", voice: "george",
          en: "Last Friday something puzzling happened at our office. A laptop went missing from the meeting room, and everyone was baffled. The cleaner said the door had been open all afternoon, so almost anyone could have walked in. Our manager did not jump to conclusions. First, he checked the security log. The guard had not seen anybody strange, so a stranger can't have taken it. Then he looked at the calendar. Two colleagues had a meeting in that room at four o'clock, so one of them must have left it there by mistake. In the end, a hunch turned out to be right. The laptop was in Rustam's bag. He had been working in the room, packed up in a hurry, and taken two laptops instead of one. It was a funny mistake, but also a good reminder: without evidence, the first explanation is often wrong.",
          uz: "O'tgan juma kuni ofisimizda g'alati voqea yuz berdi. Majlislar xonasidan noutbuk yo'qoldi va hamma hayron qoldi. Farrosh kun bo'yi eshik ochiq turganini aytdi, shuning uchun deyarli har kim kirib olib ketishi mumkin edi. Boshliqimiz shoshilib xulosa chiqarmadi. Avval u xavfsizlik jurnalini tekshirdi. Qorovul g'alati odam ko'rmagan edi, demak begona odam olib ketgan bo'lishi mumkin emas. Keyin u kalendarga qaradi. Soat to'rtda ikki hamkasb o'sha xonada yig'ilish o'tkazgan, ya'ni ulardan biri noutbukni adashib qoldirgan bo'lsa kerak. Oxirida taxmin to'g'ri chiqdi. Noutbuk Rustamning sumkasida edi. U xonada ishlayotgan edi, shoshib yig'ishtirdi va bitta emas, ikkita noutbuk oldi. Bu kulgili xato edi, lekin yaxshi eslatma ham: dalilsiz birinchi tushuntirish ko'pincha noto'g'ri bo'ladi.",
        },
        { t: "check", ex: { k: "choice", q: "Why does the manager say a stranger can't have taken the laptop?", opts: ["The guard had not seen any strange person.", "The cleaner closed the door.", "The laptop was in Rustam's bag.", "The meeting room was locked."], a: 0, why: "Matnda: qorovul g'alati odam ko'rmagan edi. Bu dalil asosida **can't have taken**." } },
        { t: "check", ex: { k: "tf", q: "The manager decided who took the laptop before he checked any evidence.", a: false, why: "U *did not jump to conclusions*: avval jurnalni va kalendarni tekshirdi." } },
      ],
    },
    {
      title: "Dialog: Kechikkan hamkasb",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Dilnoza", en: "Jasur still isn't here, and the meeting starts in five minutes.", uz: "Jasur hali ham yo'q, yig'ilish esa besh daqiqadan keyin boshlanadi." },
            { who: "Jasur", en: "Maybe he overslept. He might have been working late last night.", uz: "Balki uxlab qolgandir. U kecha kech ishlagan bo'lishi mumkin." },
            { who: "Dilnoza", en: "He can't have overslept. He posted a message at six this morning.", uz: "U uxlab qolgan bo'lishi mumkin emas. Ertalab soat oltida xabar yozgan edi." },
            { who: "Jasur", en: "Then he must have been stuck on the metro. The Green Line was closed today.", uz: "Unda u metroda qolib ketgan bo'lsa kerak. Bugun yashil liniya yopiq edi." },
            { who: "Dilnoza", en: "That would explain it. Or his phone could have run out of battery.", uz: "Bu tushuntirib beradi. Yoki telefonining batareyasi tugagan bo'lishi mumkin." },
            { who: "Jasur", en: "Let's not jump to conclusions. I'll send him a message.", uz: "Shoshilib xulosa chiqarmaylik. Men unga xabar yuboraman." },
            { who: "Dilnoza", en: "Good idea. It's puzzling, though. He has never been late before.", uz: "Yaxshi fikr. Lekin g'alati. U hech qachon kechikmagan edi." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "Why does Dilnoza say Jasur can't have overslept?", opts: ["He wrote a message early in the morning.", "He was on holiday.", "The Green Line was closed.", "His phone had no battery."], a: 0, why: "Soat oltida xabar yozgan: uxlab qolgan bo'lishi mumkin emas." } },
      ],
    },
  ],
  words: [
    { en: "culprit", uz: "aybdor, aybdor shaxs yoki sabab", ipa: "ˈkʌl.prɪt", pos: "noun", ex: "The police are still searching for the real culprit.", exUz: "Politsiya hali ham haqiqiy aybdorni qidirmoqda." },
    { en: "baffled", uz: "boshi qotgan, hayron", ipa: "ˈbæf.əld", pos: "adj", ex: "The engineers were baffled by the strange noise.", exUz: "Muhandislar g'alati shovqindan hayron qolishdi." },
    { en: "jump to conclusions", uz: "shoshilib xulosa chiqarmoq", ipa: "dʒʌmp tə kənˈkluː.ʒənz", pos: "idiom", ex: "Don't jump to conclusions until you have all the facts.", exUz: "Hamma faktlarni bilmaguningizcha shoshilib xulosa chiqarmang." },
    { en: "alibi", uz: "alibi (voqea joyida bo'lmaganlik isboti)", ipa: "ˈæl.ɪ.baɪ", pos: "noun", ex: "He had a perfect alibi: he was on a flight at the time.", exUz: "Uning mukammal alibisi bor edi: o'sha paytda reysda edi." },
    { en: "puzzling", uz: "boshni qotiradigan, tushunib bo'lmas", ipa: "ˈpʌz.lɪŋ", pos: "adj", ex: "It is puzzling that nobody saw him leave.", exUz: "Hech kim uning ketganini ko'rmagani tushunib bo'lmas holat." },
    { en: "tamper with", uz: "ruxsatsiz aralashmoq, buzmoq", ipa: "ˈtæm.pə wɪð", pos: "phrasal verb", ex: "Someone must have tampered with the lock.", exUz: "Kimdir qulfga ruxsatsiz tegib, buzgan bo'lsa kerak." },
    { en: "misleading", uz: "chalg'ituvchi, adashtiradigan", ipa: "ˌmɪsˈliː.dɪŋ", pos: "adj", ex: "The headline was misleading, so many people got the story wrong.", exUz: "Sarlavha chalg'ituvchi edi, shuning uchun ko'pchilik voqeani noto'g'ri tushundi." },
    { en: "hunch", uz: "ichki sezgi, taxmin", ipa: "hʌntʃ", pos: "noun", ex: "I had a hunch that the meeting would be cancelled.", exUz: "Yig'ilish bekor qilinadi, degan ichki sezgim bor edi." },
    { en: "deduce", uz: "xulosa chiqarmoq (dalillardan)", ipa: "dɪˈdjuːs", pos: "verb", ex: "From the muddy boots, she deduced that he had walked across the field.", exUz: "Loy bo'lgan etikdan u uning dalani kesib o'tganini xulosa qildi." },
    { en: "go missing", uz: "yo'qolmoq, bedarak ketmoq", ipa: "ɡəʊ ˈmɪs.ɪŋ", pos: "phrase", ex: "Several files went missing from the archive last month.", exUz: "O'tgan oy arxivdan bir nechta fayl yo'qoldi." },
  ],
  practice: [
    { k: "choice", q: "The streets are white this morning. It ___ snowed during the night.", opts: ["must have", "can't have", "mustn't have", "should have"], a: 0, why: "Kuchli dalil, deyarli aniq xulosa: **must have + V3**." },
    { k: "choice", q: "Her phone is switched off. She ___ forgotten to charge it, or she ___ lost it. I don't know.", opts: ["might have / might have", "must have / must have", "can't have / can't have", "should have / should have"], a: 0, why: "Ikkita ehtimol, ishonch yo'q: **might have + V3**." },
    { k: "listen", say: "He can't have seen us, because the lights were off.", opts: ["He must have seen us.", "He can't have seen us.", "He might have seen us.", "He should have seen us."], a: 1, why: "Audioda: *He **can't have** seen us* — deyarli aniq inkor." },
    { k: "fill", q: "The cake has gone. Somebody ___ eaten it. (deyarli aniq)", a: ["must have", "has probably", "must have already"], uz: "Tort yo'q bo'lib qolibdi. Kimdir yegan bo'lsa kerak.", hint: "must + have + V3", why: "Dalil kuchli: **must have + V3**." },
    { k: "fill", q: "She ___ stolen the money. She was in another city. (deyarli aniq, inkor)", a: ["can't have", "couldn't have"], uz: "U pulni o'g'irlagan bo'lishi mumkin emas. U boshqa shaharda edi.", hint: "inkor taxmin", why: "Alibi bor, deyarli aniq inkor: **can't / couldn't have + V3**." },
    { k: "fill", q: "When I called, he didn't answer. He ___ having a shower. (jarayon, ehtimol)", a: ["might have been", "may have been", "could have been"], uz: "Qo'ng'iroq qilganimda u javob bermadi. U dush qabul qilayotgan bo'lishi mumkin edi.", hint: "ehtimol + jarayon", why: "O'tgan paytdagi ehtimoliy jarayon: **might / may / could have been + V-ing**." },
    { k: "order", uz: "U bu xatni ko'rgan bo'lishi mumkin emas.", words: ["She", "can't", "have", "seen", "this", "email."], extra: ["mustn't", "see"], alt: [["She", "couldn't", "have", "seen", "this", "email."]], why: "**can't / couldn't have + V3**." },
    { k: "order", uz: "Ular yo'ldan adashgan bo'lsa kerak.", words: ["They", "must", "have", "got", "lost."], extra: ["can't", "get"], alt: [["They", "must", "have", "lost", "their", "way."]], why: "**must have + V3**." },
    { k: "translate", uz: "U kech ishlayotgan bo'lsa kerak edi.", a: ["He must have been working late.", "She must have been working late.", "He must have been working late last night.", "She must have been working late last night."], why: "O'tgan paytdagi jarayon: **must have been + V-ing**." },
    { k: "translate", uz: "Ular tirbandlikda qolgan bo'lishi mumkin.", a: ["They might have got stuck in traffic.", "They may have got stuck in traffic.", "They could have got stuck in traffic.", "They might have been stuck in traffic.", "They may have been stuck in traffic.", "They could have been stuck in traffic.", "They might have got stuck in a traffic jam."], why: "Ehtimol: **might / may / could have + V3**." },
    { k: "fix", wrong: "He mustn't have known about the problem.", a: ["He can't have known about the problem.", "He couldn't have known about the problem."], hint: "deyarli aniq inkor", why: "Inkor taxmin: **can't / couldn't have + V3**." },
    { k: "fix", wrong: "She must have wait for hours at the station.", a: ["She must have waited for hours at the station.", "She must have been waiting for hours at the station."], hint: "have dan keyin V3", why: "**must have + V3** yoki **must have been + V-ing**." },
    { k: "match", pairs: [["culprit", "aybdor shaxs"], ["baffled", "boshi qotgan"], ["alibi", "voqea joyida bo'lmaganlik isboti"], ["hunch", "ichki sezgi"], ["go missing", "yo'qolmoq"]] },
    { k: "tf", q: "*The keys might have been in the car* gapi kalitlar mashinada bo'lgani deyarli aniq ekanini bildiradi.", a: false, why: "**might have been** — faqat ehtimol. Deyarli aniq bo'lsa **must have been**." },
    { k: "choice", q: "Which sentence is about a PRESENT situation?", opts: ["He must be very tired.", "He must have been very tired.", "He can't have been tired.", "He might have been tired."], a: 0, why: "**must be** — hozirgi holat; *have been* — o'tgan." },
    { k: "dictation", say: "She can't have forgotten, because she wrote it down.", uz: "U unutgan bo'lishi mumkin emas, chunki yozib qo'ygan.", why: "**can't have + V3** — deyarli aniq inkor." },
    { k: "speak", say: "It must have rained, because the ground is wet.", uz: "Yomg'ir yog'gan bo'lsa kerak, chunki yer ho'l." },
  ],
  quiz: [
    { k: "choice", q: "The meeting room is empty and the projector is still warm. They ___ left a minute ago.", opts: ["must have", "can't have", "mustn't have", "should have"], a: 0, why: "Dalil: proyektor hali issiq. **must have + V3**." },
    { k: "choice", q: "He ___ taken my umbrella. I never lend it to anyone and it's still here.", opts: ["can't have", "must have", "might have", "should have"], a: 0, why: "Dalil aksini ko'rsatadi: **can't have + V3**." },
    { k: "choice", q: "I don't know why she is late. She ___ missed her bus, or perhaps she is ill.", opts: ["may have", "must have", "can't have", "had to have"], a: 0, why: "Aniq emas, ehtimol: **may have + V3**." },
    { k: "fill", q: "The lights were on at midnight. They ___ working all night. (jarayon, deyarli aniq)", a: ["must have been"], uz: "Chiroqlar yarim tunda yoniq edi. Ular tun bo'yi ishlagan bo'lsa kerak.", hint: "jarayon", why: "**must have been + V-ing**." },
    { k: "fill", q: "Nobody answered the door. They ___ at home. (ehtimol, ishonch yo'q)", a: ["might not have been", "may not have been"], uz: "Eshikni hech kim ochmadi. Ular uyda bo'lmagan bo'lishi mumkin.", hint: "ehtimol bo'lmagan", why: "**might not / may not have been** — ehtimoliy inkor." },
    { k: "order", uz: "U kalitlarni xonada qoldirgan bo'lsa kerak.", words: ["He", "must", "have", "left", "the", "keys", "in", "the", "room."], extra: ["can't", "leave"], alt: [["He", "must", "have", "left", "his", "keys", "in", "the", "room."]], why: "**must have + V3**." },
    { k: "translate", uz: "Ular bu haqda bilgan bo'lishi mumkin emas.", a: ["They can't have known about it.", "They couldn't have known about it.", "They can't have known about this.", "They couldn't have known about this."], why: "Deyarli aniq inkor: **can't / couldn't have + V3**." },
    { k: "fix", wrong: "She mustn't have heard the news.", a: ["She can't have heard the news.", "She couldn't have heard the news."], hint: "deyarli aniq inkor", why: "Inkor taxmin: **can't / couldn't have + V3**." },
    { k: "tf", q: "*He must have been sleeping* — bu gap davom etayotgan jarayon haqida o'tgan zamon taxmini.", a: true, why: "**must have been + V-ing** o'tgan paytdagi jarayon haqida deyarli aniq xulosa." },
    { k: "listen", say: "They might have taken the wrong road.", opts: ["They must have taken the wrong road.", "They can't have taken the wrong road.", "They might have taken the wrong road.", "They should have taken the wrong road."], a: 2, why: "Audioda: **might have taken** — ehtimol." },
  ],
  summary: [
    "**Must have + V3** — o'tgan voqea haqida deyarli aniq «ha» xulosasi (*It must have rained*); **can't / couldn't have + V3** — deyarli aniq «yo'q» (*He can't have known*).",
    "**Might / may / could have + V3** — ehtimol; **might not / may not have + V3** — «balki bo'lmagan» (can't have emas, u kuchliroq).",
    "Jarayon uchun **modal + have been + V-ing** (*must have been sleeping*); hozirgi taxmin **modal + V1** (*must be tired*).",
    "Inkor taxmin uchun **mustn't have** ishlatilmaydi: **can't have**.",
    "Xatolar: ~~mustn't have known~~ → **can't have known**; ~~must have wait~~ → **must have waited**; ~~might have take~~ → **might have taken**.",
  ],
  homework: "Bugun yoki ertaga 5 ta vaziyatni kuzating (masalan, kech qolgan odam, yopiq do'kon, yo'qolgan narsa, ho'l ko'cha). Har biri uchun **dalil** va **taxmin** yozing: *The street is wet. It must have rained. He didn't call. He might have forgotten.* Kamida bitta **can't have** va bitta **must have been + V-ing** ishlating. Yangi so'zlardan **baffled, hunch, jump to conclusions, go missing** ni qo'shib, 4 gapdan iborat kichik «sirli voqea» yozing va ovoz chiqarib o'qing.",
};

export default lesson;
