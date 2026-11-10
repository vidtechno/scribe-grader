import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u30-l4",
  title: "Discourse markers in speaking",
  titleUz: "Nutq belgilari: well, actually, as a matter of fact, to be honest, by the way",
  goal: "Gapirganda **nutq belgilari** (*discourse markers*) bilan fikrni boshlaysiz, o'ylash uchun vaqt olasiz, mavzuni o'zgartirasiz va gapni qisqartirasiz: *well, I mean, to be honest, as a matter of fact, by the way, speaking of which, to cut a long story short*. Pauzadagi «eee…» o'rniga tayyor iboralarni aytasiz va **actually** ni noto'g'ri ishlatmaysiz.",
  slides: [
    {
      title: "Nutq belgilari nima uchun kerak?",
      blocks: [
        { t: "p", md: "Tirik suhbatda biz gapni darrov tayyor holda aytmaymiz: o'ylaymiz, fikrni to'g'rilaymiz, mavzuni o'zgartiramiz. Ingliz tilida buning uchun **nutq belgilari** (*discourse markers*) bor: *well, I mean, you know, actually, anyway*. Ular **grammatik ma'no** bermaydi, lekin suhbatni **ravon va tabiiy** qiladi." },
        { t: "p", md: "IELTS Speaking da ravonlik va izchillik (*fluency and coherence*) alohida baholanadi. Uzoq pauza yoki «ummm» o'rniga *Well, let me think…* desangiz, ravonlik ballingiz oshadi. Lekin ularni **me'yorida** ishlatish kerak." },
        {
          t: "table", head: ["Vazifa", "Iboralar", "Misol"], speak: [2],
          rows: [
            ["O'ylash uchun vaqt olish", "well, let me think, I mean", "Well, let me think. I'd say it was last spring."],
            ["Rostini aytish", "to be honest, to be fair", "To be honest, I didn't enjoy it."],
            ["Ma'lumot qo'shish yoki to'g'rilash", "actually, as a matter of fact", "As a matter of fact, I live next door."],
            ["Mavzuni o'zgartirish", "by the way, speaking of which, anyway", "By the way, have you seen Tom?"],
            ["Qisqartirish", "to cut a long story short", "To cut a long story short, we missed the train."],
          ],
        },
        { t: "tip", tone: "info", md: "Maqsad: **5–6 ta** belgini o'zlashtirish va har birini to'g'ri **vazifada** ishlatish." },
        { t: "check", ex: { k: "choice", q: "Which phrase helps you gain time to think in a speaking test?", opts: ["Well, let me think…", "To cut a long story short", "Speaking of which", "By all means"], a: 0, why: "**Well, let me think** — o'ylash uchun vaqt olish iborasi." } },
      ],
    },
    {
      title: "Rostini aytish va fikrni aniqlashtirish",
      blocks: [
        { t: "p", md: "**To be honest / to be fair** — fikringizni ochiq aytish yoki muvozanat berish. **What I mean is / to put it another way** — fikrni boshqacha, aniqroq aytish. **I mean** — o'zini to'g'rilash yoki izoh berish." },
        {
          t: "examples", items: [
            { en: "To be honest, I'm not a big fan of fast food.", uz: "Rostini aytsam, men tez ovqatning katta muxlisi emasman." },
            { en: "The service was slow. To be fair, the restaurant was full.", uz: "Xizmat sekin edi. Adolat uchun aytsam, restoran to'la edi." },
            { en: "I'm not against the plan. What I mean is, it needs more time.", uz: "Men rejaga qarshi emasman. Aytmoqchi bo'lganim, unga ko'proq vaqt kerak." },
            { en: "It's quite expensive. To put it another way, we can't afford it.", uz: "Bu ancha qimmat. Boshqacha aytganda, bu bizga to'g'ri kelmaydi." },
            { en: "He's late again. I mean, it's the third time this week.", uz: "U yana kechikdi. Ya'ni, bu bu hafta uchinchi marta." },
          ],
        },
        { t: "tip", tone: "warn", md: "**To say the truth** — inglizchada yo'q (o'zbekcha *rostini aytsam* dan olingan). To'g'ri: **to tell the truth** yoki **to be honest**." },
        { t: "check", ex: { k: "fill", q: "The film was too long. To be ___, the acting was excellent.", a: ["fair"], uz: "Film juda uzun edi. Adolat uchun aytsam, aktyorlik a'lo edi.", why: "Muvozanat berish: **to be fair**." } },
        { t: "check", ex: { k: "choice", q: "*I don't dislike the idea. ___, it needs more thought.*", opts: ["What I mean is", "To cut a long story short", "Speaking of which", "On second thoughts"], a: 0, why: "Fikrni aniqlashtirish: **What I mean is**." } },
      ],
    },
    {
      title: "Actually, as a matter of fact, mind you",
      blocks: [
        { t: "p", md: "**Actually** va **as a matter of fact** — «aslida, to'g'risi» ma'nosida: kutilmagan ma'lumot qo'shish yoki yanglish fikrni to'g'rilash uchun." },
        {
          t: "compare",
          good: { title: "To'g'ri: «aslida»", items: ["I thought it was cheap, but actually it was quite expensive.", "Do you know Sam? — As a matter of fact, he's my cousin.", "You're not disturbing me. Actually, I wanted to talk to you."] },
          bad: { title: "Xato: «hozir» ma'nosida", items: ["Actually, I live in Tashkent. (hozir yashayman demoqchi)", "Actually, the prices are rising. (hozirgi vaqtda)", "Actually, many people use phones. (bugungi kunda)"] },
        },
        { t: "tip", tone: "warn", md: "**Actually** ≠ «hozirgi, dolzarb» (ruscha *актуально* yoki o'zbekcha *aktual* ga o'xshab ketadi). «Hozir» deyish uchun: **currently, at the moment, nowadays**. *Actually* faqat **«aslida»** degan ma'noni beradi." },
        { t: "p", md: "**Mind you** — fikrga **kichik qarama-qarshilik** qo'shadi: *The hotel was lovely. Mind you, it was a bit noisy.* («Mehmonxona yaxshi edi. Biroq biroz shovqinli edi»). **Come to think of it** — biror narsa esingizga tushganda: *Come to think of it, I haven't seen her since May.*" },
        { t: "check", ex: { k: "choice", q: "Which word means «hozirgi vaqtda» (at this time)?", opts: ["currently", "actually", "as a matter of fact", "mind you"], a: 0, why: "**Currently** = hozirgi vaqtda. *Actually* = aslida." } },
        { t: "check", ex: { k: "choice", q: "*The hotel was lovely. ___, it was a bit noisy.*", opts: ["Mind you", "Speaking of which", "To cut a long story short", "As a matter of fact"], a: 0, why: "Kichik qarama-qarshilik: **mind you**." } },
      ],
    },
    {
      title: "By the way, anyway, speaking of which",
      blocks: [
        { t: "p", md: "Mavzuni boshqaruvchi iboralar:" },
        {
          t: "table", head: ["Ibora", "Vazifa", "Misol"], speak: [2],
          rows: [
            ["by the way", "mavzudan tashqari qo'shimcha", "By the way, I've got your book."],
            ["speaking of which", "aytilgan narsa bilan bog'liq yangi mavzu", "We talked about holidays. Speaking of which, have you booked yours?"],
            ["anyway", "mavzuga qaytish yoki suhbatni yopish", "Anyway, I'd better go."],
            ["on second thoughts", "fikrni o'zgartirish", "Let's meet at six. On second thoughts, make it seven."],
            ["to cut a long story short", "uzun voqeani qisqa aytish", "To cut a long story short, we missed the train."],
          ],
        },
        { t: "tip", tone: "info", md: "**Speaking of which** ni faqat oldingi gapdagi mavzuga bog'liq bo'lsa ishlating. Bog'liq bo'lmasa — **by the way**." },
        { t: "check", ex: { k: "choice", q: "*We were talking about holidays. ___, have you booked your tickets yet?*", opts: ["Speaking of which", "By all means", "To be fair", "Mind you"], a: 0, why: "Aytilgan mavzuga bog'liq yangi savol: **speaking of which**." } },
        { t: "check", ex: { k: "fill", q: "To cut a long story ___, we got home at midnight.", a: ["short"], uz: "Uzoq cho'zmay aytganda, uyga yarim tunda yetib keldik.", why: "Ibora: **to cut a long story short**." } },
      ],
    },
    {
      title: "Tipik xatolar (o'zbek tilidan interferensiya)",
      blocks: [
        { t: "p", md: "Nutq belgilari **tayyor iboralar**. Ularni so'zma-so'z tarjima qilsangiz yoki artiklni tashlab ketsangiz, xato chiqadi." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["To tell the truth, I didn't like it.", "As a matter of fact, I live next door.", "To cut a long story short, we lost.", "Speaking of which, have you seen Tom?"] },
          bad: { title: "Xato", items: ["To say the truth, I didn't like it.", "As matter of fact, I live next door.", "To cut long story short, we lost.", "Speaking about which, have you seen Tom?"] },
        },
        { t: "tip", tone: "warn", md: "**1)** *Rostini aytsam* → **to tell the truth / to be honest**, *to say the truth* emas. **2)** *as **a** matter of fact*: artikl tushirilmaydi. **3)** *to cut **a** long story short*. **4)** *Speaking **of** which*, *about* emas." },
        { t: "check", ex: { k: "fix", wrong: "To say the truth, I didn't like the film.", a: ["To tell the truth, I didn't like the film.", "To be honest, I didn't like the film."], hint: "ibora", why: "To'g'ri: **to tell the truth** yoki **to be honest**." } },
        { t: "check", ex: { k: "fix", wrong: "As matter of fact, I live next door.", a: ["As a matter of fact, I live next door."], hint: "artikl", why: "Ibora artikl bilan: **as a matter of fact**." } },
        { t: "check", ex: { k: "fix", wrong: "To cut long story short, we missed the train.", a: ["To cut a long story short, we missed the train."], hint: "artikl", why: "**to cut a long story short**." } },
        { t: "check", ex: { k: "fix", wrong: "Speaking about which, have you seen Tom?", a: ["Speaking of which, have you seen Tom?"], hint: "predlog", why: "Ibora: **speaking of which**." } },
      ],
    },
    {
      title: "O'qing: Ish suhbatidan keyin",
      blocks: [
        {
          t: "text", title: "After the interview", voice: "george",
          en: "Last Thursday I had a job interview, and, to be honest, I was more nervous than I expected. Well, the first question was about my experience, and I had to stop and think. I said, 'Well, let me think. I would say my best project was a mobile app for a local shop.' It worked, because the interviewer smiled. Mind you, my second answer was not so good. I mean, I spoke too fast, and I forgot a key detail. Anyway, at the end she asked whether I had questions. As a matter of fact, I had three. By the way, the office is very close to my flat, which is a big advantage. To cut a long story short, they called me the next day, and I got the job.",
          uz: "O'tgan payshanba ish suhbatim bo'ldi va rostini aytsam, kutganimdan ko'ra ko'proq hayajonlandim. Birinchi savol tajribam haqida edi va to'xtab o'ylashga to'g'ri keldi. Men: «Keling, o'ylab ko'ray. Eng yaxshi loyiham mahalliy do'kon uchun mobil ilova edi», dedim. Bu ish berdi, chunki suhbatdosh jilmaydi. Biroq ikkinchi javobim unchalik yaxshi bo'lmadi. Ya'ni, juda tez gapirdim va muhim tafsilotni unutdim. Baribir, oxirida u savollarim bormi deb so'radi. To'g'risi, uchta savolim bor edi. Aytgancha, ofis mening uyimga juda yaqin, bu katta afzallik. Uzoq cho'zmay aytganda, ular ertasi kuni qo'ng'iroq qilishdi va men ishni oldim.",
        },
        { t: "check", ex: { k: "choice", q: "What did the speaker do to gain time to think at the first question?", opts: ["He said, 'Well, let me think.'", "He stayed silent for a minute.", "He asked to leave.", "He changed the topic."], a: 0, why: "Matnda: *Well, let me think.* — vaqt olish iborasi." } },
        { t: "check", ex: { k: "tf", q: "The speaker thinks that he answered the second question very well.", a: false, why: "*Mind you, my second answer was not so good.*" } },
      ],
    },
    {
      title: "Dialog: Uyga qaytish yo'lida",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Jasur", en: "So, how was the conference, Lucy?", uz: "Xo'sh, konferensiya qanday o'tdi, Lucy?" },
            { who: "Lucy", en: "Well, to be honest, it was a bit boring. Mind you, the last talk was excellent.", uz: "Rostini aytsam, biroz zerikarli edi. Biroq oxirgi ma'ruza a'lo edi." },
            { who: "Jasur", en: "What was it about?", uz: "U nima haqida edi?" },
            { who: "Lucy", en: "Healthy habits at work. Speaking of which, are you still going to the gym?", uz: "Ish joyidagi sog'lom odatlar haqida. Gap shu haqda ketayotgan ekan, hali ham zalga borasanmi?" },
            { who: "Jasur", en: "Actually, I stopped last month. I mean, I was too busy. Come to think of it, I haven't run since June.", uz: "Aslida, o'tgan oy to'xtatdim. Ya'ni, juda band edim. Eslasam, iyundan beri yugurmaganman." },
            { who: "Lucy", en: "Then join me on Sunday. On second thoughts, let's make it Saturday, because it will rain.", uz: "Unda yakshanba kuni men bilan bor. Yo'q, qayta o'ylasam, shanba bo'lsin, chunki yomg'ir yog'adi." },
            { who: "Jasur", en: "Fine. Anyway, I'd better go now. See you Saturday.", uz: "Mayli. Baribir, men ketishim kerak. Shanba kuni ko'rishamiz." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "Why does Lucy change the day with *On second thoughts*?", opts: ["Because she thinks it will rain on Sunday.", "Because she is busy on Saturday.", "Because Jasur asked her.", "Because the gym is closed."], a: 0, why: "*Let's make it Saturday, because it will rain.*" } },
      ],
    },
  ],
  words: [
    { en: "as a matter of fact", uz: "aslida, to'g'risi", ipa: "æz ə ˈmæt.ər əv fækt", pos: "phrase", ex: "As a matter of fact, I used to work there.", exUz: "To'g'risi, men ilgari u yerda ishlaganman." },
    { en: "come to think of it", uz: "eslasam, o'ylab ko'rsam", ipa: "kʌm tə θɪŋk əv ɪt", pos: "phrase", ex: "Come to think of it, I haven't called my aunt for weeks.", exUz: "Eslasam, xolamga haftalardan beri qo'ng'iroq qilmaganman." },
    { en: "mind you", uz: "biroq, shunga qaramay", ipa: "maɪnd juː", pos: "phrase", ex: "The food was cold. Mind you, we arrived late.", exUz: "Ovqat sovuq edi. Biroq biz kech kelgan edik." },
    { en: "speaking of which", uz: "gap shu haqda ketganda", ipa: "ˈspiː.kɪŋ əv wɪtʃ", pos: "phrase", ex: "We were talking about music. Speaking of which, are you going to the concert?", exUz: "Musiqa haqida gaplashayotgan edik. Gap shu haqda ketganda, konsertga borasizmi?" },
    { en: "to cut a long story short", uz: "uzoq cho'zmay aytganda", ipa: "tə kʌt ə lɒŋ ˈstɔː.ri ʃɔːt", pos: "phrase", ex: "To cut a long story short, he left the company.", exUz: "Uzoq cho'zmay aytganda, u kompaniyadan ketdi." },
    { en: "filler", uz: "to'ldiruvchi so'z («eee», «ya'ni»)", ipa: "ˈfɪl.ə", pos: "noun", ex: "Words like 'um' and 'you know' are fillers.", exUz: "«Um» va «you know» kabi so'zlar to'ldiruvchi so'zlardir." },
    { en: "on second thoughts", uz: "qayta o'ylab ko'rsam", ipa: "ɒn ˈsek.ənd θɔːts", pos: "phrase", ex: "I'll take the bus. On second thoughts, I'll walk.", exUz: "Avtobusda boraman. Qayta o'ylasam, piyoda boraman." },
    { en: "to be fair", uz: "adolat uchun aytsam", ipa: "tə bi feə", pos: "phrase", ex: "He's slow. To be fair, it's his first day.", exUz: "U sekin. Adolat uchun aytsam, bugun uning birinchi kuni." },
    { en: "what I mean is", uz: "aytmoqchi bo'lganim", ipa: "wɒt aɪ miːn ɪz", pos: "phrase", ex: "I like the idea. What I mean is, it's worth trying.", exUz: "G'oya menga yoqadi. Aytmoqchi bo'lganim, uni sinab ko'rishga arziydi." },
    { en: "to put it another way", uz: "boshqacha aytganda", ipa: "tə pʊt ɪt əˈnʌð.ə weɪ", pos: "phrase", ex: "We need more time. To put it another way, we aren't ready.", exUz: "Bizga ko'proq vaqt kerak. Boshqacha aytganda, biz tayyor emasmiz." },
  ],
  practice: [
    { k: "choice", q: "Which marker introduces a small contrast? *The food was good. ___, the service was slow.*", opts: ["Mind you", "As a matter of fact", "Speaking of which", "On second thoughts"], a: 0, why: "Kichik qarama-qarshilik: **mind you**." },
    { k: "match", pairs: [["to be honest", "rostini aytsam"], ["on second thoughts", "qayta o'ylab ko'rsam"], ["to put it another way", "boshqacha aytganda"], ["to cut a long story short", "uzoq cho'zmay aytganda"], ["come to think of it", "eslasam"]] },
    { k: "fill", q: "I'll have tea. On second ___, I'll have coffee.", a: ["thoughts"], uz: "Choy ichaman. Qayta o'ylasam, qahva ichaman.", why: "Ibora: **on second thoughts**." },
    { k: "listen", say: "As a matter of fact, I live next door.", opts: ["As a matter of fact, I live next door.", "As a matter of fact, I lived next door.", "As a matter of fact, I'll live next door.", "As a matter of fact, I left next door."], a: 0, why: "**As a matter of fact** + hozirgi zamon: *I live next door*." },
    { k: "fix", wrong: "To say the truth, I don't like coffee.", a: ["To tell the truth, I don't like coffee.", "To be honest, I don't like coffee."], hint: "ibora", why: "**To tell the truth / to be honest**." },
    { k: "choice", q: "A friend asks *Do you know Anna?* You know her very well. Best reply:", opts: ["As a matter of fact, she's my sister.", "To cut a long story short, she's my sister.", "On second thoughts, she's my sister.", "Mind you, she's my sister."], a: 0, why: "Kutilmagan ma'lumot qo'shish: **As a matter of fact**." },
    { k: "tf", q: "*Actually* ni «hozir, bugungi kunda» ma'nosida ishlatish mumkin.", a: false, why: "**Actually** = aslida. «Hozir» uchun **currently / nowadays / at the moment**." },
    { k: "order", uz: "Gap shu haqda ketganda, bayramni qayerda o'tkazasan?", words: ["Speaking", "of", "which,", "where", "are", "you", "spending", "the", "holiday?"], extra: ["about", "do"], why: "**Speaking of which** — oldingi mavzuga bog'liq." },
    { k: "fill", q: "To be ___, the exam was harder than last year's, but most students passed.", a: ["fair"], uz: "Adolat uchun aytsam, imtihon o'tgan yilgidan qiyinroq edi, lekin ko'pchilik o'tdi.", why: "Muvozanat: **to be fair**." },
    { k: "fix", wrong: "To cut long story short, we won.", a: ["To cut a long story short, we won."], hint: "artikl", why: "**a** kerak." },
    { k: "translate", uz: "Rostini aytsam, men bu rejaga unchalik ishonmayman.", a: ["To be honest, I'm not very sure about this plan.", "To be honest, I'm not sure about this plan.", "To be honest, I don't really believe in this plan.", "To be honest, I don't trust this plan very much.", "To tell the truth, I'm not very sure about this plan."], why: "**To be honest / to tell the truth** + gap." },
    { k: "dictation", say: "By the way, have you seen my keys?", uz: "Aytgancha, kalitlarimni ko'rdingmi?", why: "**By the way** — qo'shimcha savol." },
    { k: "choice", q: "You want to give yourself a moment to think in an interview. Which is best?", opts: ["Well, let me think about that.", "Speaking of which, let me think.", "To cut a long story short, let me think.", "As a matter of fact, I don't know."], a: 0, why: "Vaqt olish uchun: **Well, let me think**." },
    { k: "fix", wrong: "Speaking about which, are you free tomorrow?", a: ["Speaking of which, are you free tomorrow?"], hint: "predlog", why: "**speaking of which**." },
    { k: "translate", uz: "Hozirgi vaqtda men Toshkentda yashayman.", a: ["Currently I live in Tashkent.", "Currently, I live in Tashkent.", "At the moment I live in Tashkent.", "At the moment, I live in Tashkent.", "I currently live in Tashkent.", "I live in Tashkent at the moment."], why: "«Hozirgi vaqtda» = **currently / at the moment**, *actually* emas." },
    { k: "speak", say: "Well, let me think. To be honest, I'd say my best trip was to the mountains.", uz: "Keling, o'ylab ko'ray. Rostini aytsam, eng yaxshi sayohatim tog'larga bo'lgan." },
  ],
  quiz: [
    { k: "choice", q: "Which phrase means «aytmoqchi bo'lganim»?", opts: ["what I mean is", "by the way", "speaking of which", "on second thoughts"], a: 0, why: "**What I mean is** fikrni aniqlashtiradi." },
    { k: "choice", q: "*I thought he was shy, but ___ he's very talkative.*", opts: ["actually", "currently", "nowadays", "at the moment"], a: 0, why: "Kutilganga zid ma'lumot: **actually** = aslida." },
    { k: "fill", q: "Let's meet at five. On second ___, make it six.", a: ["thoughts"], uz: "Beshda uchrashaylik. Qayta o'ylasam, oltida bo'lsin.", why: "**on second thoughts**." },
    { k: "fix", wrong: "As matter of fact, he is my uncle.", a: ["As a matter of fact, he is my uncle.", "As a matter of fact, he's my uncle."], hint: "artikl", why: "**as a matter of fact**." },
    { k: "choice", q: "We were discussing travel. ___, I've found a cheap flight to Rome.", opts: ["Speaking of which", "To cut a long story short", "Mind you", "What I mean is"], a: 0, why: "Mavzuga bog'liq yangilik: **speaking of which**." },
    { k: "tf", q: "Too many fillers like *you know* and *I mean* can make your speech sound unclear.", a: true, why: "Ular me'yorida foydali, **ortiqcha** ishlatilsa — nutq tushunarsiz bo'ladi." },
    { k: "order", uz: "Uzoq cho'zmay aytganda, biz poezdga ulgurmadik.", words: ["To", "cut", "a", "long", "story", "short,", "we", "missed", "the", "train."], extra: ["say", "the"], why: "**to cut a long story short**." },
    { k: "translate", uz: "Rostini aytsam, men filmni yoqtirmadim.", a: ["To be honest, I didn't like the film.", "To tell the truth, I didn't like the film.", "To be honest, I didn't like the movie.", "To tell the truth, I didn't like the movie.", "To be honest, I didn't enjoy the film."], why: "**To be honest / to tell the truth**." },
    { k: "fix", wrong: "Speaking about which, I must go.", a: ["Speaking of which, I must go."], hint: "predlog", why: "**speaking of which**." },
    { k: "choice", q: "*It was a lovely trip. ___, the weather could have been better.*", opts: ["Mind you", "On second thoughts", "Speaking of which", "To put it another way"], a: 0, why: "Kichik qarama-qarshilik: **Mind you**." },
  ],
  summary: [
    "**Nutq belgilari** suhbatni ravon qiladi: o'ylash uchun *well, let me think*; rostini aytish uchun *to be honest, to be fair*; aniqlashtirish uchun *what I mean is*.",
    "**Actually / as a matter of fact** = aslida. «Hozir» ma'nosida emas: u uchun **currently / at the moment / nowadays**.",
    "Mavzuni boshqarish: **by the way**, **speaking of which** (bog'liq mavzu), **anyway**, **on second thoughts**, **to cut a long story short**.",
    "Tayyor iboralarda artikl va predlog o'zgarmaydi: ~~as matter of fact~~, ~~to cut long story short~~, ~~speaking about which~~, ~~to say the truth~~.",
    "Ortiqcha ishlatmang: har gapda **you know** yoki **I mean** nutqni sun'iy qiladi.",
  ],
  homework: "IELTS Speaking uslubida o'zingiz haqingizda 1 daqiqalik javob tayyorlang («Describe your best day»). Unda kamida **5 ta** nutq belgisi ishlating (*well, to be honest, as a matter of fact, by the way, to cut a long story short*). Telefonda ovoz yozib oling, tinglang va «ummm / eee» necha marta aytganingizni sanang. Ikkinchi urinishda ularni iboralar bilan almashtiring.",
};

export default lesson;
