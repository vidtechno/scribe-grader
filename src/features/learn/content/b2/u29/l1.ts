import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u29-l1",
  title: "Comparison at B2",
  titleUz: "Taqqoslash B2: the more… the more, twice as… as, far / considerably + comparative",
  goal: "Taqqoslashni B2 darajasida ishlatasiz: **far / considerably / slightly + comparative** bilan farq kattaligini aytasiz, **the more… the more** bilan o'zaro bog'liqlikni ifodalaysiz, **twice as… as, half as many as** bilan miqdorni solishtirasiz va **more better**, **than me am**, **very bigger** kabi xatolardan qochasiz. Bu ish hisobotlari, suhbat va IELTS Writing uchun juda kerak.",
  slides: [
    {
      title: "Nima uchun kerak? B1 dan B2 ga",
      blocks: [
        { t: "p", md: "Tasavvur qiling: ish joyida ikkita taklifni solishtirib, hisobot yozishingiz kerak yoki IELTS da ikki shahar haqida yozasiz. *A is bigger than B* deyish yetarli emas. B2 da **farq qanchalik katta ekanini**, **ikki narsa birga qanday o'zgarishini** va **necha baravar** ekanini aniq aytish kerak." },
        { t: "p", md: "B1 da siz **-er / more + than** va **as… as** ni o'rgandingiz. Endi uchta yangi vosita qo'shamiz:" },
        {
          t: "table", head: ["B1", "B2"], speak: [1],
          rows: [
            ["Trains are faster than buses.", "Trains are **far** faster than buses."],
            ["The weather is getting hotter.", "The weather is getting **hotter and hotter**."],
            ["If you read more, you learn more.", "**The more** you read, **the more** you learn."],
            ["My flat is as big as yours.", "My flat is **twice as big as** yours."],
          ],
        },
        { t: "tip", tone: "info", md: "Bu bosqich oxirigacha taqqoslash tilini grafik va ma'lumotlar tavsifida (l6, l7) ishlatamiz. Shu sababli bu darsdagi qoidalar mustahkam bo'lishi kerak." },
        { t: "check", ex: { k: "choice", q: "Qaysi gap farq **katta** ekanini bildiradi?", opts: ["The new model is slightly cheaper.", "The new model is far cheaper.", "The new model is as cheap.", "The new model is cheap than the old one."], a: 1, why: "**far** + comparative katta farqni bildiradi. *slightly* — kichik farq; oxirgi gap esa grammatik xato (*cheaper than*)." } },
      ],
    },
    {
      title: "Taqqoslash darajasini kuchaytirish va susaytirish",
      blocks: [
        { t: "p", md: "Comparative (*bigger, more expensive*) oldidan **farq qanchalik katta** ekanini ko'rsatuvchi so'z qo'yamiz. Bu so'zlar *modifier* deyiladi." },
        {
          t: "table", head: ["Farq katta", "Farq kichik"], speak: [0, 1],
          rows: [
            ["far / much / a lot / a great deal", "a bit / a little / slightly"],
            ["considerably / significantly / substantially", "marginally / not much / only a little"],
            ["even / still (yanada)", "no / any (*no better*, *any cheaper*)"],
          ],
        },
        {
          t: "examples", items: [
            { en: "Living in the city is far more expensive than living in a village.", uz: "Shaharda yashash qishloqda yashashdan ancha qimmat." },
            { en: "Her second essay was considerably better than her first.", uz: "Uning ikkinchi inshosi birinchisidan sezilarli darajada yaxshiroq edi." },
            { en: "Prices are marginally higher than last year.", uz: "Narxlar o'tgan yilgidan ozgina baland." },
            { en: "The new bus is no faster than the old one.", uz: "Yangi avtobus eskisidan tezroq emas." },
          ],
        },
        { t: "tip", tone: "warn", md: "**Very** comparative bilan ishlatilmaydi: ~~very bigger~~ → **much / far bigger**. *Very* faqat oddiy sifat bilan: *very big*. O'zbekchada «juda kattaroq» desak ham bo'ladi, inglizchada esa yo'q." },
        { t: "check", ex: { k: "fix", wrong: "Cycling is very cheaper than driving.", a: ["Cycling is much cheaper than driving.", "Cycling is far cheaper than driving.", "Cycling is a lot cheaper than driving.", "Cycling is considerably cheaper than driving."], hint: "very ni almashtiring", why: "Comparative oldida **very** emas, **much / far / a lot / considerably** keladi." } },
        { t: "check", ex: { k: "choice", q: "The gap between the two cities is ___ larger than ten years ago — it has hardly changed.", opts: ["considerably", "far", "marginally", "a great deal"], a: 2, why: "*It has hardly changed* — farq juda kichik, shuning uchun **marginally**. Qolganlari katta farqni bildiradi." } },
        { t: "check", ex: { k: "fill", q: "My new laptop is no ___ than my old one. (fast)", a: ["faster"], why: "**no + comparative**: *no faster* = «tezroq emas, xuddi shunday».", hint: "fast" } },
      ],
    },
    {
      title: "The more… the more: ikki o'zgarish birga",
      blocks: [
        { t: "p", md: "Ikki narsa bir-biriga bog'liq holda o'zgarsa, **the + comparative, the + comparative** tuzilmasi ishlatiladi. O'zbekchada: «qancha ko'p… shuncha ko'p…»." },
        {
          t: "table", head: ["Tuzilma", "Misol"], speak: [1],
          rows: [
            ["The + comparative, the + comparative", "The more you practise, the better you speak."],
            ["The + comparative + ega + fe'l …", "The older he gets, the wiser he becomes."],
            ["Qisqa shakl (fe'lsiz)", "The sooner, the better. / The more, the merrier."],
            ["comparative and comparative (davomli o'zgarish)", "Air pollution is getting worse and worse. / Fuel is becoming more and more expensive."],
          ],
        },
        { t: "p", md: "**-er and -er** qisqa sifatlarda (*colder and colder*), **more and more** uzun sifatlarda (*more and more crowded*) ishlatiladi. Bu bitta narsa **vaqt o'tishi bilan** o'zgarayotganini bildiradi." },
        {
          t: "examples", items: [
            { en: "The more carbon we produce, the faster the planet warms.", uz: "Qancha ko'p uglerod chiqarsak, sayyora shuncha tez isiydi." },
            { en: "The fewer cars there are, the cleaner the air is.", uz: "Mashinalar qancha kam bo'lsa, havo shuncha toza bo'ladi." },
            { en: "The harder the exam was, the more nervous I felt.", uz: "Imtihon qancha qiyin bo'lsa, men shuncha asabiylashdim." },
          ],
        },
        { t: "tip", tone: "warn", md: "Har ikki qismda ham **the** bo'lishi shart. ~~More you eat, more you want.~~ → **The more you eat, the more you want.**" },
        { t: "check", ex: { k: "fix", wrong: "More you exercise, better you feel.", a: ["The more you exercise, the better you feel."], hint: "Ikkala qismga ham the kerak", why: "**The + comparative, the + comparative**: ikkala oldida ham **the**." } },
        { t: "check", ex: { k: "choice", q: "Life in big cities is becoming ___.", opts: ["more and more stressful", "the more stressful", "stressful and stressful", "very more stressful"], a: 0, why: "Davomli o'zgarish: uzun sifat bilan **more and more + sifat**." } },
      ],
    },
    {
      title: "Necha baravar? Twice as… as, half as many",
      blocks: [
        { t: "p", md: "**As… as** B1 dan sizga tanish. B2 da uning oldiga **ko'paytiruvchi** qo'shamiz: **twice, three times, half, a third** va hokazo. Bu ma'lumotlarni aniq solishtirishning eng yaxshi usuli." },
        {
          t: "table", head: ["Shakl", "Misol"], speak: [1],
          rows: [
            ["twice as + sifat + as", "Petrol is twice as expensive as it was."],
            ["three times as + sifat + as", "The new stadium is three times as big as the old one."],
            ["half as many / much as", "She earns half as much as her brother. / We have half as many staff as before."],
            ["just as … as / nowhere near as … as", "This park is just as clean as that one. / Our town is nowhere near as polluted as the capital."],
            ["not nearly as … as", "Walking is not nearly as fast as cycling."],
          ],
        },
        { t: "p", md: "**Less / fewer** haqida: sanaladigan ot bilan **fewer** (*fewer cars*), sanalmaydigan ot bilan **less** (*less traffic*). Ular **much / far** bilan ham ishlatiladi: *far fewer accidents, much less noise*." },
        {
          t: "examples", items: [
            { en: "There are half as many bus passengers as last year.", uz: "Avtobus yo'lovchilari o'tgan yilgidan ikki marta kam." },
            { en: "Cycling produces far less pollution than driving.", uz: "Velosiped haydash mashina haydashdan ancha kam ifloslanish beradi." },
            { en: "Our city has fewer parks than we need.", uz: "Shahrimizda kerakli miqdordan kam bog'lar bor." },
          ],
        },
        { t: "tip", tone: "info", md: "**Twice as much as** ≈ **two times more than** ma'noda. Lekin ma'lumotlar tavsifida **twice as … as** xavfsizroq va aniqroq. *Three times more than* ba'zan noaniq tushuniladi (3 baravarmi yoki 4 baravarmi?)." },
        { t: "check", ex: { k: "fill", q: "A cinema ticket costs 10 pounds. A theatre ticket costs 20 pounds. A theatre ticket is ___ as expensive as a cinema ticket.", a: ["twice", "two times"], why: "20 = 10 × 2, demak **twice as expensive as**." } },
        { t: "check", ex: { k: "choice", q: "There are ___ cars in the city centre than ten years ago, so the air is cleaner.", opts: ["fewer", "less", "littler", "lesser"], a: 0, why: "*cars* — sanaladigan ot, shuning uchun **fewer**. *Less* sanalmaydigan ot bilan (*less traffic*)." } },
      ],
    },
    {
      title: "Than + gap va tipik xatolar",
      blocks: [
        { t: "p", md: "**Than** dan keyin ega + fe'l (to'liq gap) yoki faqat olmosh kelishi mumkin. Rasmiy yozuvda **than** dan keyin to'liq gap yoki **than I am** shakli yaxshiroq; suhbatda **than me** keng tarqalgan." },
        {
          t: "table", head: ["Shakl", "Misol", "Uslub"], speak: [1],
          rows: [
            ["than + olmosh (ega shakli)", "She is taller than I am.", "rasmiy"],
            ["than + olmosh (to'ldiruvchi shakli)", "She is taller than me.", "oddiy so'zlashuv"],
            ["than + gap", "The exam was harder than we had expected.", "hamma joyda"],
            ["than + to'liq gap (kutilgan, o'ylagan)", "The hotel was cheaper than I thought.", "hamma joyda"],
          ],
        },
        { t: "p", md: "Endi o'zbek tilidan o'tadigan **to'rtta xato** ni ko'ramiz. O'zbekchada «**-dan** kattaroq» deymiz, shu sabab **from** yoki ikkita comparative qo'yish xavfi bor." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["This phone is better than that one.", "She is taller than me. / She is taller than I am.", "The book was much more interesting than the film.", "Fewer people use buses than before."] },
          bad: { title: "Xato", items: ["This phone is more better than that one.", "She is taller than me am. / taller from me.", "The book was very more interesting than the film.", "Less people use buses than before."] },
        },
        { t: "check", ex: { k: "fix", wrong: "This flat is more bigger than my old one.", a: ["This flat is bigger than my old one."], hint: "more yoki -er, ikkalasi emas", why: "Qisqa sifat: faqat **-er** (*bigger*). **more** va **-er** birga ishlatilmaydi." } },
        { t: "check", ex: { k: "fix", wrong: "My brother is taller from me.", a: ["My brother is taller than me.", "My brother is taller than I am."], hint: "dan ko'ra", why: "O'zbekchadagi «-dan» inglizchada **than** bo'ladi, **from** emas." } },
        { t: "check", ex: { k: "fix", wrong: "Less people use buses than before.", a: ["Fewer people use buses than before."], hint: "sanaladigan ot", why: "*people* — sanaladigan (ko'plik), shuning uchun **fewer**." } },
        { t: "check", ex: { k: "fix", wrong: "The film was more boring that I expected.", a: ["The film was more boring than I expected."], hint: "that emas", why: "Taqqoslashda **than**, **that** emas. «Kutganimdan ko'ra» = **than I expected**." } },
      ],
    },
    {
      title: "O'qing: Shahar qanday qatnaydi?",
      blocks: [
        {
          t: "text", title: "How we travel to work", voice: "emma",
          en: "Last year our city council published a report on how people travel to work. In comparison with ten years ago, the picture has changed significantly. Cycling is now substantially more popular, and in the city centre cyclists outnumber bus passengers by roughly two to one. The more cycle lanes the council builds, the more people choose a bike. Car use has fallen only marginally, but traffic is no worse than before, which is good news. Many workers say that cycling is far cheaper than driving and often quicker, too. The ratio of men to women who cycle is still uneven, however, and the council wants to narrow the gap. Planners hope that within five years the number of bike trips will be twice as high as it is today.",
          uz: "O'tgan yili shahar kengashi odamlar ishga qanday borishi haqida hisobot e'lon qildi. O'n yil oldin bilan solishtirganda, manzara sezilarli o'zgargan. Velosipedda yurish endi ancha mashhur, shahar markazida velosipedchilar avtobus yo'lovchilaridan taxminan ikki baravar ko'p. Kengash qancha ko'p velosiped yo'lagi qursa, shuncha ko'p odam velosiped tanlaydi. Mashinadan foydalanish faqat ozgina kamaydi, lekin tirbandlik avvalgidan yomon emas, bu yaxshi xabar. Ko'p ishchilar velosiped mashina haydashdan ancha arzon va ko'pincha tezroq ekanini aytadi. Biroq velosiped haydaydigan erkaklar va ayollar nisbati hali ham teng emas va kengash bu farqni qisqartirmoqchi. Rejalashtiruvchilar besh yil ichida velosiped safarlari soni hozirgidan ikki baravar ko'p bo'ladi deb umid qilishadi.",
        },
        { t: "check", ex: { k: "tf", q: "According to the text, car use has fallen a great deal.", a: false, why: "Matnda *fallen only marginally* — ya'ni faqat ozgina kamaygan." } },
        { t: "check", ex: { k: "choice", q: "What do planners hope for in the next five years?", opts: ["Twice as many bike trips as today", "Half as many cars as today", "No more cycle lanes", "Fewer women cycling"], a: 0, why: "Matnda: *twice as high as it is today* — hozirgidan ikki baravar ko'p." } },
      ],
    },
    {
      title: "Dialog: Poyezdmi yoki velosipedmi?",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Sara", en: "Are you still taking the train to the office, Tom?", uz: "Hali ham ofisga poyezdda borayapsizmi, Tom?" },
            { who: "Tom", en: "Not any more. I've started cycling. It takes about the same time, and it's far cheaper.", uz: "Endi yo'q. Velosiped hayday boshladim. Vaqt taxminan bir xil, lekin ancha arzon." },
            { who: "Sara", en: "Really? I thought it would be much more tiring than the train.", uz: "Rostdanmi? Men u poyezddan ancha charchatadi deb o'ylagan edim." },
            { who: "Tom", en: "At first, yes. But the more I ride, the fitter I get. Now it's no harder than walking to the station.", uz: "Boshida ha. Lekin qancha ko'p haydasam, shuncha chiniqaman. Hozir bekatga piyoda borishdan qiyin emas." },
            { who: "Sara", en: "And the weather? It's getting colder and colder.", uz: "Ob-havo-chi? U sovuqlashib bormoqda." },
            { who: "Tom", en: "True, but I spend half as much on travel now, so I bought a good jacket.", uz: "To'g'ri, lekin endi yo'lga ikki baravar kam sarflayman, shuning uchun yaxshi kurtka sotib oldim." },
            { who: "Sara", en: "Maybe I should try it. The sooner I start, the better.", uz: "Balki men ham sinab ko'rishim kerak. Qancha erta boshlasam, shuncha yaxshi." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "Why did Tom buy a good jacket?", opts: ["He saves money on travel.", "The train is cheaper.", "He walks to the station.", "Sara gave him one."], a: 0, why: "Tom: *I spend half as much on travel now, so I bought a good jacket.*" } },
        { t: "check", ex: { k: "match", pairs: [["far cheaper", "ancha arzon"], ["half as much", "ikki baravar kam"], ["colder and colder", "borgan sari sovuq"], ["the sooner, the better", "qancha erta, shuncha yaxshi"]] } },
      ],
    },
  ],
  words: [
    { en: "substantially", uz: "sezilarli darajada, anchagina", ipa: "səbˈstæn.ʃəl.i", pos: "adv", ex: "Rents have risen substantially in the last five years.", exUz: "Ijara haqi so'nggi besh yilda sezilarli oshdi." },
    { en: "marginally", uz: "ozgina, arzimas darajada", ipa: "ˈmɑː.dʒɪ.nəl.i", pos: "adv", ex: "The second hotel is marginally cheaper than the first.", exUz: "Ikkinchi mehmonxona birinchisidan ozgina arzon." },
    { en: "significantly", uz: "muhim darajada, ancha", ipa: "sɪɡˈnɪf.ɪ.kənt.li", pos: "adv", ex: "Waste has fallen significantly since the new rules began.", exUz: "Yangi qoidalar boshlanganidan beri chiqindi ancha kamaydi." },
    { en: "roughly", uz: "taxminan", ipa: "ˈrʌf.li", pos: "adv", ex: "The journey takes roughly three hours.", exUz: "Yo'l taxminan uch soat davom etadi." },
    { en: "outnumber", uz: "sonda oshib ketmoq", ipa: "ˌaʊtˈnʌm.bə", pos: "verb", ex: "Women now outnumber men in many universities.", exUz: "Hozir ko'p universitetlarda ayollar erkaklardan ko'p." },
    { en: "exceed", uz: "oshib ketmoq, chegaradan o'tmoq", ipa: "ɪkˈsiːd", pos: "verb", ex: "Demand for electricity will exceed supply this winter.", exUz: "Bu qishda elektr energiyasiga talab taklifdan oshib ketadi." },
    { en: "surpass", uz: "ustun kelmoq, o'tib ketmoq", ipa: "səˈpɑːs", pos: "verb", ex: "Online sales have surpassed shop sales for the first time.", exUz: "Onlayn savdo birinchi marta do'kon savdosidan o'tib ketdi." },
    { en: "ratio", uz: "nisbat", ipa: "ˈreɪ.ʃi.əʊ", pos: "noun", ex: "The ratio of teachers to students is one to twenty.", exUz: "O'qituvchilar va o'quvchilar nisbati birga yigirma." },
    { en: "gap", uz: "farq, tafovut", ipa: "ɡæp", pos: "noun", ex: "The gap between rich and poor areas is getting wider.", exUz: "Boy va kam ta'minlangan hududlar orasidagi tafovut kengayib bormoqda." },
    { en: "in comparison with", uz: "…ga nisbatan, …bilan solishtirganda", ipa: "ɪn kəmˈpær.ɪ.sən wɪð", pos: "phrase", ex: "In comparison with last year, sales are up.", exUz: "O'tgan yilga nisbatan sotuv oshgan." },
  ],
  practice: [
    { k: "choice", q: "Flying is ___ more expensive than going by train on this route.", opts: ["very", "far", "so", "too"], a: 1, why: "**far / much** comparative oldidan keladi; *very* comparative bilan ishlatilmaydi." },
    { k: "choice", q: "The two prices are almost the same: the blue one is ___ cheaper.", opts: ["considerably", "far", "a great deal", "marginally"], a: 3, why: "*Almost the same* — farq juda kichik → **marginally**." },
    { k: "listen", say: "The more you read, the better your vocabulary gets.", opts: ["The more you read, the better your vocabulary gets.", "More you read, better your vocabulary gets.", "The more you read, your vocabulary gets better.", "The most you read, the best your vocabulary gets."], a: 0, why: "**The more…, the better…** — ikkala qismda ham **the**." },
    { k: "fill", q: "The ___ you leave, the less traffic you will meet. (early)", a: ["earlier"], why: "**The + comparative, the + comparative**: *the earlier*.", hint: "early" },
    { k: "fill", q: "A bus pass costs 30 pounds and a taxi costs 15. A taxi costs ___ as much as a bus pass.", a: ["half"], why: "15 = 30 : 2, demak **half as much as**." },
    { k: "order", uz: "Havo borgan sari ifloslanib bormoqda.", words: ["The", "air", "is", "getting", "more", "and", "more", "polluted."], extra: ["most", "very"], why: "Davomli o'zgarish: **more and more + sifat**." },
    { k: "order", uz: "Qancha ko'p yursak, o'zimizni shuncha sog'lom his qilamiz.", words: ["The", "more", "we", "walk,", "the", "healthier", "we", "feel."], extra: ["most", "than"], why: "**The more…, the + comparative**." },
    { k: "translate", uz: "Velosiped haydash mashina haydashdan ancha arzon.", a: ["Cycling is much cheaper than driving.", "Cycling is far cheaper than driving.", "Cycling is a lot cheaper than driving.", "Cycling is considerably cheaper than driving.", "Cycling is a great deal cheaper than driving."], why: "Farq katta: **much / far / a lot / considerably** + **cheaper than**." },
    { k: "translate", uz: "Bu yil o'tgan yildan ikki baravar kam yomg'ir yog'di.", a: ["There was half as much rain this year as last year.", "It rained half as much this year as last year.", "We had half as much rain this year as last year.", "There has been half as much rain this year as last year."], why: "Yomg'ir sanalmaydi → **half as much as**." },
    { k: "match", pairs: [["slightly", "sal, ozgina"], ["substantially", "sezilarli darajada"], ["roughly", "taxminan"], ["outnumber", "sonda oshib ketmoq"], ["ratio", "nisbat"]] },
    { k: "fix", wrong: "This road is more safer than the old one.", a: ["This road is safer than the old one."], hint: "more va -er birga emas", why: "**Safe** qisqa sifat: faqat **safer**." },
    { k: "fix", wrong: "Her results are better from mine.", a: ["Her results are better than mine."], hint: "dan ko'ra", why: "Taqqoslashda **than**, **from** emas." },
    { k: "tf", q: "*The ticket is three times more expensive than before* va *three times as expensive as before* ma'nosi har doim aniq bir xil tushuniladi.", a: false, why: "*Three times more* ba'zan «4 baravar» deb tushuniladi. Aniq ma'lumot uchun **three times as … as** xavfsizroq." },
    { k: "dictation", say: "Cycling produces far less pollution than driving.", uz: "Velosiped haydash mashina haydashdan ancha kam ifloslanish beradi.", why: "**far less** + sanalmaydigan ot (*pollution*)." },
    { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["Fewer people read newspapers than ten years ago.", "Less people read newspapers than ten years ago.", "Fewer people read newspapers that ten years ago.", "Few people read newspapers than ten years ago."], a: 0, why: "*People* — sanaladigan, **fewer**; taqqoslashda **than**." },
    { k: "speak", say: "The more I practise, the more confident I feel.", uz: "Qancha ko'p mashq qilsam, shuncha ishonchli bo'laman." },
  ],
  quiz: [
    { k: "choice", q: "The new tunnel is ___ faster than the old road: it saves forty minutes.", opts: ["much", "very", "more", "too"], a: 0, why: "**much / far** + comparative: *much faster*." },
    { k: "choice", q: "Prices rose only ___ last month, from 4.20 to 4.25.", opts: ["marginally", "substantially", "considerably", "dramatically"], a: 0, why: "4.20 dan 4.25 gacha — arzimas o'sish: **marginally**." },
    { k: "choice", q: "The ___ the screen is, the more expensive the phone is.", opts: ["bigger", "more big", "biggest", "big"], a: 0, why: "**The + comparative**: *the bigger*." },
    { k: "choice", q: "A new bike costs 400 pounds. A used one costs 200. A used bike costs ___ a new one.", opts: ["half as much as", "half as many as", "twice as much as", "as half much as"], a: 0, why: "200 = 400 : 2, narx sanalmaydi: **half as much as**." },
    { k: "fill", q: "There are ___ students in this class than last year. (few)", a: ["fewer"], uz: "Bu sinfda o'tgan yilgidan kamroq o'quvchi bor.", why: "Sanaladigan ot → **fewer**." },
    { k: "fill", q: "The cheaper hotel is ___ as comfortable as the expensive one, so I booked it. (same level)", a: ["just", "exactly"], uz: "Arzon mehmonxona qimmatiday qulay, shuning uchun uni band qildim.", hint: "xuddi shunday", why: "**just as … as** = «xuddi shunday … ». Bu yerda ikkalasi teng darajada qulay." },
    { k: "order", uz: "Bu yilgi hosil o'tgan yilgidan ancha yaxshi.", words: ["This", "year's", "harvest", "is", "far", "better", "than", "last", "year's."], extra: ["very", "more"], why: "**far better than**." },
    { k: "translate", uz: "Qancha ko'p o'qisam, shuncha ko'p bilaman.", a: ["The more I read, the more I know.", "The more I study, the more I know."], why: "**The more…, the more…**." },
    { k: "fix", wrong: "The film was very longer than I expected.", a: ["The film was much longer than I expected.", "The film was far longer than I expected.", "The film was a lot longer than I expected.", "The film was considerably longer than I expected."], hint: "very ni almashtiring", why: "**very** comparative bilan ishlatilmaydi." },
    { k: "tf", q: "*Women outnumber men in this course* gapi ayollar ko'pligini bildiradi.", a: true, why: "**outnumber** = sonda oshib ketmoq." },
  ],
  summary: [
    "Farq darajasi: **far / much / considerably / substantially** (katta), **slightly / marginally / a bit** (kichik) + comparative. **Very** ishlatilmaydi.",
    "**The + comparative, the + comparative** (*The more you read, the better you write*). Davomli o'zgarish: **more and more**, **colder and colder**.",
    "Ko'paytiruvchi: **twice / three times / half as … as** (*half as much, half as many*). **Fewer** + sanaladigan, **less** + sanalmaydigan.",
    "Xatolar: ~~more better~~, ~~very bigger~~, ~~taller from me~~, ~~Less people~~ → **better**, **much bigger**, **taller than me**, **Fewer people**.",
  ],
  homework: "Shahringiz yoki ish joyingiz haqida 6 ta taqqoslash gapi yozing: ikkitasida **far / slightly**, ikkitasida **the more… the more**, ikkitasida **twice / half as … as**. Gaplarni baland ovozda o'qing va har birida **than / as** borligini tekshiring.",
};

export default lesson;
