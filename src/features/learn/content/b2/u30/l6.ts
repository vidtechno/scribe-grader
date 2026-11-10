import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u30-l6",
  title: "Telling a story and giving a long answer",
  titleUz: "Hikoya qilish va uzun javob berish: IELTS Part 2 uslubi (2 daqiqa)",
  goal: "**2 daqiqalik uzun javobni** (*IELTS Speaking Part 2*, ish suhbati, tanishuv) tuzasiz: kirish, voqea, tafsilot, his-tuyg'u va xulosa. To'g'ri **hikoya zamonlari** (*Past Simple, Past Continuous, Past Perfect*), bog'lovchilar, nutq belgilari va 1–2 ta idiomadan foydalanasiz. Pauzada vaqt olasiz va **I have visited … last year**, **I was very exciting** kabi xatolardan qochasiz.",
  slides: [
    {
      title: "2 daqiqalik javob: nima uchun qiyin?",
      blocks: [
        { t: "p", md: "IELTS Speaking **Part 2** da sizga **cue card** (mavzu kartochkasi) beriladi: *Describe a memorable journey…* Sizda **1 daqiqa** tayyorlanish bor, keyin **1–2 daqiqa** to'xtovsiz gapirasiz. Xuddi shunday ko'nikma ish suhbatida («Tell me about a challenge») va oddiy suhbatda ham kerak." },
        { t: "p", md: "Ko'pchilik 30 soniyadan keyin to'xtab qoladi, chunki **tuzilma** yo'q. Yechim: har qanday mavzuga **5 qadamli reja** qo'llash." },
        {
          t: "table", head: ["Qadam", "Nima aytiladi", "Namuna ibora", "~Vaqt"], speak: [2],
          rows: [
            ["1. Kirish", "nima haqida gapirasiz", "I'd like to talk about…", "10–15 s"],
            ["2. Asosiy ma'lumot", "nima, qachon, qayerda, kim bilan", "It happened two years ago, when…", "30 s"],
            ["3. Tafsilot", "nima bo'ldi (hikoya)", "At first… then… after a while…", "40 s"],
            ["4. His-tuyg'u", "nima his qildingiz", "I felt overwhelmed by…", "15 s"],
            ["5. Nega muhim", "xulosa, ta'siri", "Looking back, it was important because…", "15–20 s"],
          ],
        },
        { t: "tip", tone: "info", md: "2 daqiqa taxminan **250–300 so'z** (12–15 gap). Har bir qadamda 2–3 gap aytsangiz, vaqt o'zi to'ladi." },
        { t: "check", ex: { k: "choice", q: "Which step comes last in a good long answer?", opts: ["Why it matters to you", "What happened first", "When it happened", "What the topic is"], a: 0, why: "Oxirgi qadam: **nega muhim** (xulosa)." } },
      ],
    },
    {
      title: "Namuna javob: «Describe a memorable journey»",
      blocks: [
        { t: "p", md: "Mana shu reja bo'yicha tuzilgan namuna. Avval tinglang yoki o'qing, keyin qadamlarni toping." },
        {
          t: "text", title: "A journey I will never forget", voice: "george",
          en: "I'd like to talk about a train journey that I took two years ago, when I travelled to the mountains with my brother. It was early spring, and we had planned the trip for months. We were going to a small village where our grandfather had grown up. At first everything went smoothly, but halfway there the train stopped because of heavy snow. We waited for three hours, and it suddenly dawned on me that nobody knew where we were. To cut a long story short, a local farmer appeared out of the blue and offered to take us the rest of the way on his tractor. It sounds funny now, but at the time I was cold and a little worried. When we finally arrived, the whole village welcomed us with hot tea and fresh bread. I felt overwhelmed by their kindness. Looking back on that day, it was the most memorable journey of my life, because it taught me that plans can change and strangers can be generous. I still think about that evening whenever it snows.",
          uz: "Men ikki yil oldin akam bilan tog'larga qilgan poezd sayohatim haqida gapirmoqchiman. Bu erta bahor edi va biz sayohatni bir necha oy oldin rejalashtirgan edik. Biz bobomiz o'sgan kichik qishloqqa ketayotgan edik. Avval hammasi silliq ketdi, lekin yo'lning yarmida kuchli qor tufayli poezd to'xtadi. Biz uch soat kutdik va birdan xayolimga keldiki, bizning qayerda ekanimizni hech kim bilmaydi. Uzoq cho'zmay aytganda, kutilmaganda mahalliy dehqon paydo bo'ldi va yo'lning qolgan qismida traktorida olib borishni taklif qildi. Hozir bu kulgili eshitiladi, lekin o'sha paytda sovuq qotgan va biroz xavotirda edim. Nihoyat yetib borganimizda, butun qishloq bizni issiq choy va yangi non bilan kutib oldi. Ularning mehribonligidan ta'sirlanib ketdim. O'sha kunga qaytib qarasam, bu hayotimdagi eng esda qolarli sayohat edi, chunki u menga rejalar o'zgarishi va begonalar saxiy bo'lishi mumkinligini o'rgatdi. Qor yoqqanda hamon o'sha kechani eslayman.",
        },
        { t: "check", ex: { k: "choice", q: "Which sentence in the model is the *feelings* step?", opts: ["I felt overwhelmed by their kindness.", "We waited for three hours.", "It was early spring.", "I'd like to talk about a train journey."], a: 0, why: "His-tuyg'u qadami: **I felt overwhelmed**." } },
        { t: "check", ex: { k: "tf", q: "The speaker says the train stopped because of a technical problem.", a: false, why: "Sabab: **heavy snow** (kuchli qor)." } },
      ],
    },
    {
      title: "Zamonlar va bog'lovchilar",
      blocks: [
        { t: "p", md: "Hikoya **o'tgan zamonda** aytiladi. Namunadan zamonlarni ko'ring:" },
        {
          t: "table", head: ["Zamon", "Vazifa", "Namunadan misol"], speak: [2],
          rows: [
            ["Past Simple", "voqealar ketma-ketligi", "The train stopped. We waited for three hours."],
            ["Past Continuous", "fon, jarayon", "We were going to a small village."],
            ["Past Perfect", "oldin bo'lgan narsa", "We had planned the trip for months."],
            ["Present Simple / Perfect", "xulosa, hozirgi ta'sir", "I still think about that evening."],
          ],
        },
        { t: "p", md: "Voqealarni bog'lash uchun: **At first, then, after a while, at that point, by the time, in the end, finally**. Fikr uchun: **Looking back (on), what struck me was…**" },
        {
          t: "examples", items: [
            { en: "By the time we reached the village, it was already dark.", uz: "Qishloqqa yetib borganimizda, allaqachon qorong'i edi." },
            { en: "At that point, I realised we had taken the wrong road.", uz: "O'sha paytda noto'g'ri yo'lga kirib qolganimizni tushundim." },
            { en: "In the end, everything turned out well.", uz: "Oxir-oqibat hammasi yaxshi tugadi." },
          ],
        },
        { t: "tip", tone: "info", md: "**Ko'proq ta'sir:** 1–2 idioma va nutq belgisini (*to cut a long story short, as a matter of fact, out of the blue*) ishlating, lekin **ko'p emas**. Oldingi darslarda o'rganilgan iboralar shu yerda kerak." },
        { t: "check", ex: { k: "choice", q: "We ___ for months, so everything was ready on the day.", opts: ["had planned", "planned", "were planning", "plan"], a: 0, why: "Oldin tugallangan tayyorgarlik: **Past Perfect** (*had planned*)." } },
        { t: "check", ex: { k: "fill", q: "By the ___ we arrived, the shops had closed.", a: ["time"], uz: "Biz yetib borganimizda, do'konlar yopilgan edi.", why: "**By the time** + Past Simple, Past Perfect." } },
      ],
    },
    {
      title: "Vaqt olish va chalg'ib ketmaslik",
      blocks: [
        { t: "p", md: "Gapirayotganda so'z yoki tafsilot esdan chiqishi tabiiy. Pauzada jim turmang, **tayyor iboralar** ishlating:" },
        {
          t: "table", head: ["Vaziyat", "Ibora"], speak: [1],
          rows: [
            ["Esingizga olish", "Let me see… / If I remember rightly…"],
            ["So'zni topa olmaysiz", "It's a kind of… / something like… / what I mean is…"],
            ["Yo'ldan chiqib ketdingiz", "Anyway, where was I? / To get back to the story…"],
            ["Fikrni to'ldirish", "What's more… / On top of that…"],
          ],
        },
        { t: "tip", tone: "warn", md: "**Xato:** gapni «and… and… and…» bilan cho'zish yoki bir xil so'zni (*very, nice*) qaytarish. Alternativa: *very tired → exhausted; nice → lovely, memorable*." },
        { t: "p", md: "Agar vaqt ortib qolsa, **his-tuyg'u** yoki **tasvir** qo'shing: *I can still picture the snow falling slowly, and I can still smell the bread.* Bu — **vividly** (ravshan, jonli) hikoya qilishning yo'li." },
        { t: "check", ex: { k: "choice", q: "You cannot remember a word in the middle of your answer. What do you say?", opts: ["It's a kind of… what I mean is…", "I don't know. Stop.", "Next question, please.", "(stay silent for twenty seconds)"], a: 0, why: "So'zni tasvirlab, davom eting: **It's a kind of… what I mean is…**" } },
      ],
    },
    {
      title: "Tipik xatolar (o'zbek tilidan interferensiya)",
      blocks: [
        { t: "p", md: "Hikoya qilganda o'zbek tilida so'zlovchilar ko'pincha **zamonni almashtirib yuboradi** («Men bordim» o'rniga *I go*), **Present Perfect** ni o'tgan vaqt bilan ishlatadi va **-ing / -ed** sifatlarni aralashtiradi." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["Last summer I went to the mountains.", "I visited the museum last year.", "I was very excited about the trip.", "I want to tell you about my friend."] },
          bad: { title: "Xato", items: ["Last summer I go to the mountains.", "I have visited the museum last year.", "I was very exciting about the trip.", "I want to tell about my friend."] },
        },
        { t: "tip", tone: "warn", md: "**1)** Hikoya — o'tgan zamonda (*went*). **2)** *last year, yesterday, in 2022* bilan **Past Simple**, Present Perfect emas. **3)** O'zingizning hissiyotingiz — **-ed** (*excited, bored*), narsaning xususiyati — **-ing** (*exciting*). **4)** *Tell* dan keyin **kimga** kerak: *tell **you** about*." },
        { t: "check", ex: { k: "fix", wrong: "Last summer I go to the mountains with my family.", a: ["Last summer I went to the mountains with my family."], hint: "zamon", why: "O'tgan voqea: **went** (Past Simple)." } },
        { t: "check", ex: { k: "fix", wrong: "I have visited the old town last year.", a: ["I visited the old town last year."], hint: "vaqt belgisi", why: "**last year** — Past Simple: *visited*." } },
        { t: "check", ex: { k: "fix", wrong: "I was very exciting because it was my first flight.", a: ["I was very excited because it was my first flight."], hint: "-ing / -ed", why: "Hissiyot — **excited**." } },
        { t: "check", ex: { k: "fix", wrong: "Firstly, I want to tell about my friend.", a: ["Firstly, I want to tell you about my friend.", "Firstly, I want to talk about my friend.", "First, I want to tell you about my friend.", "First, I want to talk about my friend."], hint: "tell + kim?", why: "**tell you about** yoki **talk about**." } },
      ],
    },
    {
      title: "Taymer bilan mashq: javob yaxshiroq bo'ladi",
      blocks: [
        { t: "p", md: "Reja tayyor, endi mashq. **Taymer** yoqing va quyidagi cue card ga javob bering:" },
        { t: "tip", tone: "good", md: "**Cue card:** *Describe a time when you helped someone.*\nYou should say: who you helped, how you helped, why they needed help, and explain how you felt afterwards." },
        {
          t: "examples", items: [
            { en: "I'd like to talk about the day I helped my neighbour carry her shopping.", uz: "Qo'shnimga xaridlarini ko'tarishda yordam bergan kun haqida gapirmoqchiman.", note: "1-qadam: kirish." },
            { en: "It was last winter, and she had slipped on the ice outside our building.", uz: "Bu o'tgan qishda edi va u uyimiz oldida muzda sirpanib ketgan edi.", note: "2-qadam: ma'lumot (**Past Perfect**)." },
            { en: "I felt a real sense of achievement, even though it was a small thing.", uz: "Bu kichik ish bo'lsa ham, haqiqiy qoniqish his qildim.", note: "4-qadam: his-tuyg'u." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "Which opening sounds best for this cue card?", opts: ["I'd like to talk about the day I helped my neighbour.", "Helped. My neighbour. Yes.", "I don't know what to say about helping.", "Hello, examiner, today is Monday."], a: 0, why: "Aniq kirish: **I'd like to talk about…**" } },
      ],
    },
    {
      title: "Dialog: Mashq va fikr-mulohaza",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Max", en: "Nina, how did your practice go? You spoke for almost two minutes.", uz: "Nina, mashq qanday o'tdi? Deyarli ikki daqiqa gapirding." },
            { who: "Nina", en: "Honestly, I ran out of ideas after one minute. I kept saying 'very nice, very nice'.", uz: "Rostini aytsam, bir daqiqadan keyin g'oyalarim tugadi. Takror-takror «very nice, very nice» dedim." },
            { who: "Max", en: "Next time, add a detail. What did you see? What did you smell?", uz: "Keyingi safar tafsilot qo'sh. Nimani ko'rding? Nimani hidladi?" },
            { who: "Nina", en: "Good idea. And I said 'I have visited Bukhara last summer'. Was that right?", uz: "Yaxshi fikr. Yana «I have visited Bukhara last summer» dedim. To'g'rimi?" },
            { who: "Max", en: "Not quite. With 'last summer', use the Past Simple: 'I visited Bukhara'.", uz: "Unchalik emas. «last summer» bilan Past Simple kerak: «I visited Bukhara»." },
            { who: "Nina", en: "Right. I also want to use one idiom, but only one.", uz: "To'g'ri. Yana bitta idioma ishlatmoqchiman, lekin faqat bitta." },
            { who: "Max", en: "Wise choice. Then finish with why it mattered to you. That's the strongest ending.", uz: "To'g'ri qaror. Keyin nega bu siz uchun muhimligi bilan tugating. Bu eng kuchli yakun." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "What advice does Max give about the ending?", opts: ["Finish with why it mattered to you.", "Finish with a question to the examiner.", "Stop after the story.", "Add three idioms."], a: 0, why: "*Then finish with why it mattered to you.*" } },
      ],
    },
  ],
  words: [
    { en: "overwhelmed", uz: "ta'sirlanib ketgan, hayajondan ezilgan", ipa: "ˌəʊ.vəˈwelmd", pos: "adj", ex: "I felt overwhelmed by the warm welcome.", exUz: "Iliq kutib olinishdan ta'sirlanib ketdim." },
    { en: "vividly", uz: "jonli, ravshan", ipa: "ˈvɪv.ɪd.li", pos: "adv", ex: "I remember that evening vividly.", exUz: "O'sha kechani aniq eslayman." },
    { en: "stick in my mind", uz: "esimda qolmoq", ipa: "stɪk ɪn maɪ maɪnd", pos: "phrase", ex: "Her words stuck in my mind for weeks.", exUz: "Uning so'zlari haftalar davomida esimda qoldi." },
    { en: "look back on", uz: "o'tmishga nazar tashlamoq", ipa: "lʊk bæk ɒn", pos: "phrasal verb", ex: "When I look back on my school years, I smile.", exUz: "Maktab yillarimga qaytib qarasam, jilmayaman." },
    { en: "it dawned on me", uz: "birdan xayolimga keldi", ipa: "ɪt dɔːnd ɒn miː", pos: "phrase", ex: "Then it dawned on me that I had left my passport at home.", exUz: "Shunda pasportimni uyda qoldirganim birdan esimga tushdi." },
    { en: "out of the blue", uz: "kutilmaganda", ipa: "aʊt əv ðə bluː", pos: "phrase", ex: "An old friend called me out of the blue.", exUz: "Eski do'stim kutilmaganda qo'ng'iroq qildi." },
    { en: "dramatic", uz: "keskin, kuchli o'zgargan", ipa: "drəˈmæt.ɪk", pos: "adj", ex: "The weather changed dramatically in an hour.", exUz: "Ob-havo bir soat ichida keskin o'zgardi." },
    { en: "stumble upon", uz: "tasodifan topib olmoq", ipa: "ˈstʌm.bəl əˌpɒn", pos: "phrasal verb", ex: "I stumbled upon an old photo of my grandfather in a book.", exUz: "Kitob ichidan bobomning eski suratini tasodifan topib oldim." },
    { en: "a sense of achievement", uz: "erishgan narsadan qoniqish", ipa: "ə sens əv əˈtʃiːv.mənt", pos: "phrase", ex: "Finishing the marathon gave me a great sense of achievement.", exUz: "Marafonni tugatish menga katta qoniqish berdi." },
    { en: "literally", uz: "so'zma-so'z, haqiqatan", ipa: "ˈlɪt.ər.əl.i", pos: "adv", ex: "The streets were literally empty: nobody was outside.", exUz: "Ko'chalar rostdan ham bo'm-bo'sh edi: tashqarida hech kim yo'q edi." },
  ],
  practice: [
    { k: "choice", q: "In a 2-minute answer, which part answers *Why was it important?*", opts: ["The final step", "The introduction", "The details step", "The timer"], a: 0, why: "**Nega muhim** — oxirgi qadam." },
    { k: "match", pairs: [["out of the blue", "kutilmaganda"], ["look back on", "o'tmishga nazar tashlamoq"], ["stumble upon", "tasodifan topib olmoq"], ["overwhelmed", "ta'sirlanib ketgan"], ["stick in my mind", "esimda qolmoq"]] },
    { k: "fill", q: "When I look ___ on that summer, I realise how lucky I was.", a: ["back"], uz: "O'sha yozga qaytib qarasam, qanchalik omadli ekanimni tushunaman.", why: "**look back on** = o'tmishga nazar tashlamoq." },
    { k: "listen", say: "An old friend called me out of the blue.", opts: ["An old friend called me out of the blue.", "An old friend called me out of the blues.", "An old friend called me out of blue.", "An old friend called me in the blue."], a: 0, why: "Ibora: **out of the blue**." },
    { k: "fix", wrong: "Last summer I go to the mountains.", a: ["Last summer I went to the mountains."], hint: "zamon", why: "O'tgan voqea: **went**." },
    { k: "choice", q: "We ___ the dinner two weeks before, so everything was ready.", opts: ["had booked", "book", "were booking", "booking"], a: 0, why: "Oldin tugallangan ish: **had booked** (Past Perfect)." },
    { k: "order", uz: "Birdan xayolimga keldiki, men pasportimni unutibman.", words: ["It", "dawned", "on", "me", "that", "I", "had", "forgotten", "my", "passport."], extra: ["have", "dawn"], why: "**it dawned on me that** + Past Perfect." },
    { k: "tf", q: "*I have visited the museum last year.* gapi grammatik jihatdan to'g'ri.", a: false, why: "**last year** — aniq o'tgan vaqt, **Past Simple** kerak." },
    { k: "fix", wrong: "I was very exciting before my first flight.", a: ["I was very excited before my first flight."], hint: "-ing / -ed", why: "Hissiyot: **excited**." },
    { k: "translate", uz: "Kecha kitob ichidan eski suratni tasodifan topib oldim.", a: ["Yesterday I stumbled upon an old photo in a book.", "I stumbled upon an old photo in a book yesterday.", "Yesterday I stumbled upon an old photograph in a book.", "I stumbled upon an old photograph in a book yesterday."], why: "**stumbled upon** — tasodifan topib olmoq (Past Simple)." },
    { k: "choice", q: "Which pair of linkers best shows the order of events?", opts: ["At first… then… in the end", "Because… although… however", "On the one hand… on the other", "In addition… moreover… furthermore"], a: 0, why: "Voqea ketma-ketligi: **at first, then, in the end**." },
    { k: "choice", q: "The weather changed ___ in an hour: it went from bright sunshine to a storm.", opts: ["dramatically", "dramatic", "drama", "dramatise"], a: 0, why: "Fe'lni (*changed*) ravish aniqlaydi: **dramatically**." },
    { k: "dictation", say: "I remember that evening vividly, even after two years.", uz: "O'sha kechani ikki yildan keyin ham ravshan eslayman.", why: "**vividly** = ravshan, jonli." },
    { k: "fix", wrong: "I want to tell about my trip to Samarkand.", a: ["I want to tell you about my trip to Samarkand.", "I want to talk about my trip to Samarkand."], hint: "tell + kim?", why: "**tell you about** yoki **talk about**." },
    { k: "fill", q: "Winning the competition gave me a great sense of ___.", a: ["achievement"], uz: "Musobaqada g'alaba qozonish menga katta qoniqish berdi.", why: "**a sense of achievement**." },
    { k: "translate", uz: "Rostini aytsam, bu hayotimdagi eng esda qolarli sayohat edi.", a: ["To be honest, it was the most memorable trip of my life.", "To be honest, it was the most memorable journey of my life.", "To tell the truth, it was the most memorable trip of my life.", "To tell the truth, it was the most memorable journey of my life."], why: "**the most memorable** + **of my life**." },
    { k: "speak", say: "I'd like to talk about a trip that I took two years ago. Looking back, it was the best week of my life.", uz: "Ikki yil oldingi sayohat haqida gapirmoqchiman. Qaytib qarasam, bu hayotimdagi eng yaxshi hafta edi." },
  ],
  quiz: [
    { k: "choice", q: "A phone call that comes unexpectedly is a call ___.", opts: ["out of the blue", "in the end", "on the same line", "at first"], a: 0, why: "Kutilmaganda: **out of the blue**." },
    { k: "choice", q: "She ___ her keys on the bus, so she couldn't open the door.", opts: ["had left", "leaves", "has left", "was leaving"], a: 0, why: "Eshikni ochishdan oldin bo'lgan: **had left**." },
    { k: "fill", q: "Then it ___ on me that I was on the wrong train.", a: ["dawned"], uz: "Shunda noto'g'ri poyezdda ekanligim birdan xayolimga keldi.", why: "**it dawned on me**." },
    { k: "fix", wrong: "I have seen her yesterday at the station.", a: ["I saw her yesterday at the station."], hint: "vaqt belgisi", why: "**yesterday** — Past Simple." },
    { k: "choice", q: "I felt completely ___ by the generous welcome. I almost cried.", opts: ["overwhelmed", "overrated", "vibrant", "steeped"], a: 0, why: "Hissiyotga to'lib ketish: **overwhelmed**." },
    { k: "tf", q: "In a 2-minute answer it is a good idea to finish with why the experience mattered to you.", a: true, why: "Xulosa qadami: **nega muhim**." },
    { k: "order", uz: "Qaytib qarasam, bu eng yaxshi qaror edi.", words: ["Looking", "back,", "it", "was", "the", "best", "decision."], extra: ["on", "have"], why: "**Looking back** — xulosa ibora." },
    { k: "translate", uz: "U menga yordam berdi, shuning uchun men qoniqish his qildim.", a: ["She helped me, so I felt a sense of achievement.", "He helped me, so I felt a sense of achievement.", "She helped me, so I felt satisfied.", "He helped me, so I felt satisfied."], why: "**a sense of achievement** yoki **satisfied**." },
    { k: "fix", wrong: "The film was very bored, so I left early.", a: ["The film was very boring, so I left early."], hint: "-ing / -ed", why: "Film xususiyati: **boring**." },
    { k: "choice", q: "What is a good way to fill a pause when you cannot find a word?", opts: ["It's a kind of… what I mean is…", "Stop and say nothing.", "Repeat 'very nice' five times.", "Ask the examiner to answer."], a: 0, why: "Tasvirlab davom eting: **It's a kind of… what I mean is…**" },
  ],
  summary: [
    "Uzun javob **5 qadam**: kirish, nima/qachon/kim, tafsilot, his-tuyg'u, nega muhim. 2 daqiqa taxminan 250–300 so'z.",
    "Hikoya zamonlari: **Past Simple** (voqea), **Past Continuous** (fon), **Past Perfect** (oldin bo'lgan); xulosa — Present.",
    "Bog'lovchilar: *at first, then, after a while, by the time, in the end*; fikr: *looking back, what struck me…*",
    "Pauza uchun: *Let me see… It's a kind of… Anyway, where was I?*; 1–2 ta idioma yetarli (*out of the blue*).",
    "Xatolar: ~~I go~~ → **went**; ~~have visited last year~~ → **visited**; ~~very exciting~~ → **excited**; ~~tell about~~ → **tell you about**.",
  ],
  homework: "Taymer yoqing va «Describe an unexpected event» mavzusida **2 daqiqa** gapiring va ovozingizni yozib oling. Reja: kirish → qachon/qayerda → tafsilot → his-tuyg'u → nega muhim. Tinglab, tekshiring: zamonlar to'g'rimi, kamida 3 ta bog'lovchi va 1 ta idioma ishlatdingizmi, «very nice» necha marta takrorlandi? Keyin yana bir marta yozib oling.",
};

export default lesson;
