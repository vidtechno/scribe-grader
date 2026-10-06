import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u11-l8",
  title: "A1 review: all the tenses",
  titleUz: "A1 yakuniy takrori: barcha zamonlar",
  goal: "A1 darajasidagi barcha zamonlarni bitta tizimga solasiz: **Present Simple, Present Continuous, Past Simple, going to, will, Present Perfect**. Signal so'zlarga qarab zamonni tanlaysiz, yordamchi fe'llarni (**do / does / did / am / is / are / will / have / has**) adashtirmaysiz va o'zingiz haqida o'tmish, hozir va kelajakni qo'shib gapirasiz.",
  slides: [
    {
      title: "A1 zamonlar xaritasi",
      blocks: [
        { t: "p", md: "Tabriklaymiz — siz A1 darajasining oxirgi darsidasiz! Shu vaqtgacha **6 ta asosiy shakl** o'rgandik. Keling, ularni bitta jadvalga yig'amiz:" },
        {
          t: "table", head: ["Zamon", "Shakl", "Qachon ishlatiladi", "Misol"], speak: [3],
          rows: [
            ["Present Simple", "V1 / V1+s", "odat, doimiy fakt", "I work in a bank."],
            ["Present Continuous", "am / is / are + V-ing", "hozir, shu kunlarda; kelishilgan reja", "I'm working now."],
            ["Past Simple", "V2 / did + V1", "tugagan o'tmish, aniq vaqt", "I worked yesterday."],
            ["be going to", "am / is / are going to + V1", "reja, niyat; aniq belgi", "I'm going to work tomorrow."],
            ["will", "will + V1", "shu zahoti qaror, taxmin, va'da", "I'll help you."],
            ["Present Perfect", "have / has + V3", "tajriba, yangilik (vaqtsiz)", "I've worked abroad."],
          ],
        },
        { t: "tip", tone: "good", md: "Har bir zamonni bitta \"kalit savol\" bilan eslang:\n• **Odatda?** → Present Simple\n• **Hozir?** → Present Continuous\n• **Qachon? (o'tgan)** → Past Simple\n• **Niyatim nima?** → going to\n• **Hozir qaror qildim / menimcha** → will\n• **Hayotimda bo'lganmi?** → Present Perfect" },
        { t: "check", ex: { k: "choice", q: "\"Men hozir kitob o'qiyapman.\"", opts: ["I read a book now.", "I'm reading a book now.", "I've read a book now.", "I'm read a book now."], a: 1, why: "**Hozir** → Present Continuous: **am + reading**." } },
      ],
    },
    {
      title: "Signal so'zlar",
      blocks: [
        { t: "p", md: "Gapdagi vaqt so'zi ko'pincha zamonni \"aytib beradi\":" },
        {
          t: "table", head: ["Zamon", "Signal so'zlar"], speak: [1],
          rows: [
            ["Present Simple", "every day, usually, always, often, never, on Mondays"],
            ["Present Continuous", "now, at the moment, today, this week, Look! Listen!"],
            ["Past Simple", "yesterday, last week, two days ago, in 2020, when I was a child"],
            ["going to / will", "tomorrow, next week, soon, in the future, I think…"],
            ["Present Perfect", "ever, never, once, twice, three times"],
          ],
        },
        { t: "tip", tone: "warn", md: "**never** ikki zamonda uchraydi: *I **never** eat meat* (odat — Present Simple) va *I've **never** been to China* (tajriba — Present Perfect). Ma'noga qarang!" },
        { t: "check", ex: { k: "fill", q: "Listen! The baby ___. (cry)", a: ["is crying", "'s crying"], why: "**Listen!** — hozir sodir bo'lyapti → Present Continuous." } },
        { t: "check", ex: { k: "fill", q: "We ___ to the cinema two days ago. (go)", a: ["went"], why: "*ago* → Past Simple." } },
      ],
    },
    {
      title: "Yordamchi fe'llar: bitta tizim",
      blocks: [
        { t: "p", md: "Inkor va savolda har bir zamonning **o'z yordamchi fe'li** bor. Bitta fe'l — **go** — misolida:" },
        {
          t: "table", head: ["Zamon", "+", "−", "?"], speak: [1, 2, 3],
          rows: [
            ["Present Simple", "She goes.", "She doesn't go.", "Does she go?"],
            ["Present Continuous", "She's going.", "She isn't going.", "Is she going?"],
            ["Past Simple", "She went.", "She didn't go.", "Did she go?"],
            ["going to", "She's going to go.", "She isn't going to go.", "Is she going to go?"],
            ["will", "She'll go.", "She won't go.", "Will she go?"],
            ["Present Perfect", "She's been.", "She hasn't been.", "Has she been?"],
          ],
        },
        { t: "tip", tone: "info", md: "Oltin qoida: **yordamchi fe'l + to'g'ri shakl**.\n• **do / does / did / will** → **V1**: *Did she **go**? She won't **go**.*\n• **am / is / are** → **V-ing** (yoki *going to + V1*)\n• **have / has** → **V3**: *Has she **been**?*\nBitta gapda **bitta** yordamchi fe'l — *Did* bor bo'lsa, asosiy fe'l endi o'tgan zamonda emas!" },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["Did you see Ali?", "She doesn't like tea.", "I agree with you.", "Will you come?", "I go to school every day."] },
          bad: { title: "Xato", items: ["Did you saw Ali?", "She doesn't likes tea.", "I am agree with you.", "Will you to come?", "I'm go to school every day."] },
        },
        { t: "check", ex: { k: "choice", q: "Qaysi savol **to'g'ri**?", opts: ["Does he works here?", "Did he worked here?", "Has he worked here?", "Is he work here?"], a: 2, why: "**has + V3 (worked)**. Qolganlari: *Does he **work**? Did he **work**? Is he **working**?*" } },
      ],
    },
    {
      title: "Hozir: Simple yoki Continuous?",
      blocks: [
        {
          t: "examples", items: [
            { en: "Aziz usually drives to work, but today he's taking the bus.", uz: "Aziz odatda ishga mashinada boradi, lekin bugun avtobusda ketyapti." },
            { en: "I live in Tashkent, but this month I'm staying with my aunt in Fergana.", uz: "Toshkentda yashayman, lekin bu oy Farg'onada xolamnikida turibman." },
            { en: "What do you do? — I'm a teacher. / What are you doing? — I'm cooking.", uz: "Kasbingiz nima? — O'qituvchiman. / Nima qilyapsiz? — Ovqat pishiryapman." },
          ],
        },
        { t: "tip", tone: "warn", md: "**Holat fe'llari** — **like, love, want, know, understand, need, believe** — odatda Continuous da ishlatilmaydi: *I **know** him* (✅), *I'm knowing him* ❌. *I **want** a coffee now* (✅), *I'm wanting* ❌." },
        { t: "check", ex: { k: "choice", q: "**What do you do?** savolining ma'nosi:", opts: ["Hozir nima qilyapsiz?", "Kasbingiz nima?", "Kecha nima qildingiz?", "Ertaga nima qilasiz?"], a: 1, why: "**What do you do?** — odatda / kasb haqida savol. Hozir haqida — *What are you doing?*" } },
        { t: "check", ex: { k: "fill", q: "I ___ the answer. It's 42. (know)", a: ["know"], why: "**know** — holat fe'li → Present Simple." } },
      ],
    },
    {
      title: "Kelajak: going to, will, Present Continuous",
      blocks: [
        {
          t: "table", head: ["Vaziyat", "Shakl", "Misol"], speak: [2],
          rows: [
            ["Oldindan o'ylangan reja, niyat", "be going to", "I'm going to learn to drive this year."],
            ["Kelishilgan, vaqti belgilangan reja", "Present Continuous", "I'm meeting Dilnoza at six tomorrow."],
            ["Ko'z oldidagi belgi", "be going to", "Look at those clouds! It's going to rain."],
            ["Shu zahoti qaror", "will", "The phone's ringing. — I'll get it!"],
            ["Taklif, va'da", "will", "I'll help you with your bags. I won't forget."],
            ["Fikr, taxmin", "I think… will", "I think you'll love Samarkand."],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["It's cold. — I'll close the window.", "We're going to visit Grandma on Sunday.", "I think it will be sunny tomorrow."] },
          bad: { title: "Xato", items: ["It's cold. — I'm going to close the window. (shu zahoti qaror!)", "We will to visit Grandma.", "I think it is sunny tomorrow."] },
        },
        { t: "check", ex: { k: "choice", q: "**A: I haven't got any money with me!** **B: Don't worry, I ___ pay.**", opts: ["'ll", "'m going to", "am paying", "pay"], a: 0, why: "Shu zahoti qaror / taklif → **will**: *I'll pay.*" } },
      ],
    },
    {
      title: "O'tmish: Past Simple yoki Present Perfect?",
      blocks: [
        { t: "p", md: "Eslatma: **aniq vaqt bor** → Past Simple; **vaqt yo'q, tajriba yoki yangilik** → Present Perfect. Suhbatda: Present Perfect bilan boshlab, Past Simple bilan davom etamiz." },
        {
          t: "dialog", lines: [
            { who: "A", en: "Have you ever eaten Georgian food?", uz: "Hech gruzin taomini yeganmisan?" },
            { who: "B", en: "Yes, I have. I tried khachapuri in Tbilisi last year.", uz: "Ha. O'tgan yili Tbilisida xachapuri tatib ko'rganman." },
            { who: "A", en: "Did you like it?", uz: "Yoqdimi?" },
            { who: "B", en: "I loved it! I've made it at home three times since then.", uz: "Juda yoqdi! O'shandan beri uyda uch marta qildim." },
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I saw that film last week.", "I've seen that film twice.", "When did you arrive?"] },
          bad: { title: "Xato", items: ["I've seen that film last week.", "I saw that film ever.", "When have you arrived?"] },
        },
        { t: "check", ex: { k: "fill", q: "My parents ___ never been to Europe.", a: ["have", "'ve", "ve"], why: "*never*, tajriba → **have** never been." } },
      ],
    },
    {
      title: "O'qing: Kamolaning xati",
      blocks: [
        {
          t: "text", title: "A letter to my teacher",
          en: "Dear Mr Brown,\nI want to say thank you. A year ago I didn't know any English. When tourists asked me questions, I just smiled.\nNow I work at a hotel in Samarkand and I speak English every day. This week I'm working at reception, so I'm talking to guests from all over the world!\nI have learnt a lot this year. I have read two books in English and I have made many mistakes — but that's OK.\nNext month I'm going to start an A2 course. I think it will be difficult, but I'll do my best. I'll write to you again soon!\nBest wishes,\nKamola",
          uz: "Hurmatli janob Braun,\nSizga rahmat aytmoqchiman. Bir yil oldin men umuman ingliz tilini bilmasdim. Turistlar menga savol berganda, shunchaki jilmayardim.\nHozir Samarqanddagi mehmonxonada ishlayman va har kuni inglizcha gaplashaman. Bu hafta qabulxonada ishlayapman, shuning uchun butun dunyodan kelgan mehmonlar bilan gaplashyapman!\nBu yil ko'p narsa o'rgandim. Ingliz tilida ikkita kitob o'qidim va ko'p xato qildim — lekin bu normal.\nKelasi oy A2 kursini boshlamoqchiman. Menimcha, qiyin bo'ladi, lekin qo'limdan kelganini qilaman. Tez orada yana yozaman!\nEzgu tilaklar bilan,\nKamola",
        },
        { t: "tip", tone: "info", md: "Matnda **6 ta zamon** ham bor: *didn't know, asked* (Past Simple), *work, speak* (Present Simple), *I'm working* (Present Continuous), *have learnt, have read* (Present Perfect), *I'm going to start* (going to), *will be, I'll do* (will). Har birini toping!" },
        { t: "check", ex: { k: "tf", q: "Kamola works at reception every week.", a: false, why: "*This week I'm working at reception* — faqat **shu hafta** (Present Continuous)." } },
        { t: "check", ex: { k: "choice", q: "What is Kamola going to do next month?", opts: ["Visit Mr Brown.", "Start an A2 course.", "Work at a hotel in Tashkent.", "Read two books."], a: 1, why: "*Next month I'm going to start an A2 course.*" } },
      ],
    },
    {
      title: "Dialog: eski sinfdoshlar",
      blocks: [
        { t: "p", md: "Nigora va Bekzod maktabni bitirgandan keyin birinchi marta ko'chada uchrashib qolishdi:" },
        {
          t: "dialog", lines: [
            { who: "Nigora", en: "Bekzod? Is that you? What are you doing here?", uz: "Bekzod? Senmisan? Bu yerda nima qilyapsan?" },
            { who: "Bekzod", en: "Nigora! I'm waiting for my brother. He works in that building. And what do you do now?", uz: "Nigora! Akamni kutyapman. U anavi binoda ishlaydi. Sen hozir nima ish qilasan?" },
            { who: "Nigora", en: "I'm a pilot! I've flown to fifteen countries.", uz: "Men uchuvchiman! O'n beshta davlatga uchganman." },
            { who: "Bekzod", en: "Wow! When did you start?", uz: "Voy! Qachon boshlading?" },
            { who: "Nigora", en: "Three years ago. Last week I flew to Seoul. What about you?", uz: "Uch yil oldin. O'tgan hafta Seulga uchdim. O'zingchi?" },
            { who: "Bekzod", en: "I'm a doctor. I'm going to open my own clinic next year.", uz: "Men shifokorman. Kelasi yil o'z klinikamni ochmoqchiman." },
            { who: "Nigora", en: "That's great! Give me your number — I'll call you, and we'll have coffee.", uz: "Zo'r! Raqamingni ber — qo'ng'iroq qilaman, qahva ichamiz." },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Nigora flew to Seoul three years ago.", a: false, why: "Uch yil oldin u ishni **boshlagan**; Seulga **o'tgan hafta** uchgan." } },
      ],
    },
  ],
  words: [
    { en: "progress", uz: "rivojlanish, o'sish", ipa: "ˈprəʊɡres", pos: "noun", ex: "You've made great progress this year.", exUz: "Bu yil katta yutuqlarga erishdingiz." },
    { en: "goal", uz: "maqsad", ipa: "ɡəʊl", pos: "noun", ex: "My goal is to speak English fluently.", exUz: "Maqsadim — ingliz tilida erkin gapirish." },
    { en: "mistake", uz: "xato", ipa: "mɪˈsteɪk", pos: "noun", ex: "Everybody makes mistakes.", exUz: "Hamma xato qiladi." },
    { en: "improve", uz: "yaxshilamoq, yaxshilanmoq", ipa: "ɪmˈpruːv", pos: "verb", ex: "I want to improve my speaking.", exUz: "Gapirishimni yaxshilamoqchiman." },
    { en: "confident", uz: "o'ziga ishongan", ipa: "ˈkɒnfɪdənt", pos: "adjective", ex: "Now I feel confident when I speak English.", exUz: "Endi inglizcha gapirganda o'zimga ishonaman." },
    { en: "fluent", uz: "erkin, ravon (tilda)", ipa: "ˈfluːənt", pos: "adjective", ex: "She's fluent in three languages.", exUz: "U uch tilda erkin gapiradi." },
    { en: "level", uz: "daraja", ipa: "ˈlevl", pos: "noun", ex: "I've finished the A1 level.", exUz: "A1 darajasini tugatdim." },
    { en: "review", uz: "takrorlamoq; takrorlash", ipa: "rɪˈvjuː", pos: "verb / noun", ex: "Let's review all the tenses.", exUz: "Keling, barcha zamonlarni takrorlaymiz." },
    { en: "achieve", uz: "erishmoq", ipa: "əˈtʃiːv", pos: "verb", ex: "You can achieve your goals.", exUz: "Maqsadlaringizga erisha olasiz." },
    { en: "do your best", uz: "qo'lingizdan kelganini qilmoq", ipa: "duː jɔː best", pos: "phrase", ex: "It's difficult, but I'll do my best.", exUz: "Qiyin, lekin qo'limdan kelganini qilaman." },
  ],
  practice: [
    { k: "match", pairs: [["every day", "Present Simple"], ["at the moment", "Present Continuous"], ["two days ago", "Past Simple"], ["ever / never + V3", "Present Perfect"], ["Look at those clouds!", "going to"]] },
    { k: "match", pairs: [["progress", "rivojlanish"], ["goal", "maqsad"], ["improve", "yaxshilamoq"], ["confident", "o'ziga ishongan"], ["achieve", "erishmoq"]] },
    { k: "choice", q: "My sister usually ___ at night. She's a nurse.", opts: ["works", "is working", "worked", "has worked"], a: 0, why: "*usually* — odat → Present Simple." },
    { k: "choice", q: "\"Sen hozir nima qilyapsan?\"", opts: ["What do you do now?", "What are you doing now?", "What did you do now?", "What have you done now?"], a: 1, why: "Hozir → **What are you doing?**" },
    { k: "choice", q: "**I've lost my keys!** — **Don't worry, I ___ help you look for them.**", opts: ["will", "am going", "help", "have helped"], a: 0, why: "Taklif, shu zahoti qaror → **I'll help**." },
    { k: "choice", q: "Qaysi gap **xato**?", opts: ["I've never been to China.", "Did you go out last night?", "She doesn't speak French.", "I'm knowing your brother."], a: 3, why: "**know** — holat fe'li: *I **know** your brother.*" },
    { k: "fill", q: "Look at those black clouds! It ___ rain.", a: ["is going to", "'s going to"], why: "Ko'z oldidagi belgi → **is going to**." },
    { k: "fill", q: "___ you ever ridden a horse?", a: ["Have"], why: "*ever* + V3 → **Have**." },
    { k: "fill", q: "What ___ you do last weekend?", a: ["did"], why: "*last weekend* → Past Simple: **did**." },
    { k: "fill", q: "She ___ like spicy food.", a: ["doesn't", "does not"], uz: "U achchiq ovqatni yoqtirmaydi.", why: "*she* + Present Simple inkor → **doesn't**." },
    { k: "fill", q: "I'm busy tomorrow. I ___ meeting my friends at six.", a: ["am", "'m", "m"], why: "Kelishilgan reja → Present Continuous: **I'm meeting**." },
    { k: "tf", q: "**Did you went to school yesterday?** — to'g'ri savol.", a: false, why: "**did + V1**: *Did you **go**…?*" },
    { k: "tf", q: "**I've seen this film twice.** — Present Perfect to'g'ri, chunki aniq vaqt yo'q.", a: true },
    { k: "listen", say: "I'm going to start a new course next month.", opts: ["I'm going to start a new course next month.", "I started a new course last month.", "I'll start a new course next month."], a: 0 },
    { k: "order", uz: "Kecha yangi filmni ko'rdingmi?", words: ["Did", "you", "see", "the", "new", "film", "yesterday?"], extra: ["saw", "seen"] },
    { k: "order", uz: "Men ertaga unga qo'ng'iroq qilmoqchiman.", words: ["I'm", "going", "to", "call", "him", "tomorrow."], extra: ["will", "calling"], alt: [["Tomorrow", "I'm", "going", "to", "call", "him."]] },
    { k: "translate", uz: "U (he) hozir ishlayapti.", a: ["He is working now.", "He's working now.", "He is working at the moment.", "He's working at the moment.", "He is working right now.", "He's working right now.", "Now he is working.", "Now he's working."] },
    { k: "speak", say: "I've finished A1, and next month I'm going to start A2!", uz: "A1 ni tugatdim, kelasi oy esa A2 ni boshlayman!" },
  ],
  quiz: [
    { k: "choice", q: "We ___ to Bukhara last summer.", opts: ["have gone", "went", "go", "are going"], a: 1, why: "*last summer* → Past Simple." },
    { k: "choice", q: "**Have you ever been to India?** — **No, I ___.**", opts: ["didn't", "haven't", "don't", "wasn't"], a: 1, why: "**Have…?** → **No, I haven't.**" },
    { k: "choice", q: "I think it ___ sunny tomorrow.", opts: ["is", "will be", "was", "has been"], a: 1, why: "*I think* + kelajak taxmini → **will be**." },
    { k: "choice", q: "Qaysi gap **to'g'ri**?", opts: ["She doesn't likes coffee.", "Will you to help me?", "I am agree with you.", "Has he finished his work?"], a: 3, why: "**has + V3**. Boshqalari: *doesn't **like**, Will you **help**, I **agree***." },
    { k: "fill", q: "Be quiet! The baby ___. (sleep)", a: ["is sleeping", "'s sleeping"], why: "Hozir → **is sleeping**." },
    { k: "fill", q: "Our team ___ won the cup! Let's celebrate!", a: ["has", "'s"], why: "Yangilik, vaqt yo'q → **has won**." },
    { k: "fill", q: "My grandfather never ___ coffee. He only drinks tea. (drink)", a: ["drinks"], why: "Odat → Present Simple; *he* → **drinks**." },
    { k: "fill", q: "When I ___ home, I'll call you. (get)", a: ["get"], why: "**when** + Present Simple (kelajak ma'nosida ham)." },
    { k: "listen", say: "Has she ever driven a bus?", opts: ["Has she ever driven a bus?", "Did she ever drive a bus?", "Does she ever drive a bus?"], a: 0 },
    { k: "tf", q: "**I'm going to visit my aunt on Sunday** — oldindan o'ylangan reja, shuning uchun **going to** to'g'ri.", a: true },
    { k: "order", uz: "U (she) hech qachon samolyotda uchmagan.", words: ["She", "has", "never", "flown."], extra: ["flew", "didn't"] },
    { k: "translate", uz: "Siz kecha nima qildingiz?", a: ["What did you do yesterday?", "Yesterday what did you do?"] },
  ],
  summary: [
    "**Present Simple** — odat (*I work*), **Present Continuous** — hozir va kelishilgan reja (*I'm working*).",
    "**Past Simple** — aniq tugagan vaqt (*I worked yesterday*), **Present Perfect** — vaqtsiz tajriba va yangilik (*I've worked abroad*).",
    "Kelajak: **going to** — niyat va belgi, **will** — shu zahoti qaror, taklif, taxmin.",
    "Yordamchi fe'l qoidasi: **do / does / did / will + V1**, **am / is / are + V-ing**, **have / has + V3**.",
    "A1 tugadi! Keyingi qadam — **A2**: bu zamonlarni yanada erkin va murakkab gaplarda ishlatish.",
  ],
  homework: "\"Mening ingliz tili yo'lim\" mavzusida 10–12 gaplik xat yozing (Kamolaning xati kabi). Har bir zamondan kamida bitta gap bo'lsin: o'tmish (*A year ago I…*), odat (*Every day I…*), hozir (*This week I'm…*), tajriba (*I've learnt…, I've never…*), reja (*I'm going to…*) va va'da (*I'll…*). Yozib bo'lgach, har bir fe'lning tagiga chizib, zamonini yozib chiqing.",
};

export default lesson;
