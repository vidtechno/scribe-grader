import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u23-l8",
  title: "B1 final review",
  titleUz: "B1 yakuniy takrori: barcha mavzular",
  goal: "Bu birlikning barcha mavzularini yangi misollarda takrorlaysiz: **fikr bildirish, bog'lovchi so'zlar, afzallik va kamchiliklar, shart gaplar, majhul nisbat, barcha zamonlar**, taqdimot va esse iboralari — va B1 darajasining 10 ta eng foydali so'zini o'rganasiz.",
  slides: [
    {
      title: "Fikr bildirish, rozi bo'lish, e'tiroz",
      blocks: [
        { t: "p", md: "Munozarada avval **fikringizni** aytasiz, keyin **asoslaysiz**. Boshqalarning fikriga rozi bo'lish yoki xushmuomala e'tiroz bildirish ham kerak." },
        {
          t: "table", head: ["Vazifa", "Ibora"], speak: [1],
          rows: [
            ["Fikr bildirish", "In my view, … / As far as I'm concerned, … / I'm convinced that …"],
            ["Yumshoq fikr", "I tend to think that … / It seems to me that …"],
            ["Rozi bo'lish", "I completely agree. / That's a fair point."],
            ["Qisman rozi", "I see what you mean, but …"],
            ["E'tiroz", "I'm afraid I disagree. / I don't quite agree because …"],
          ],
        },
        {
          t: "examples", items: [
            { en: "As far as I'm concerned, cities need more cycle lanes.", uz: "Menimcha, shaharlarga ko'proq velosiped yo'laklari kerak." },
            { en: "I see what you mean, but I don't think it is realistic.", uz: "Nima demoqchi ekaningizni tushundim, lekin bu real emas deb o'ylayman." },
          ],
        },
        { t: "tip", tone: "warn", md: "«Menimcha» deyishda *by my opinion* yoki *according to me* demang. To'g'ri: **In my opinion**, **In my view**, **I think**. «Siz bilan roziman» — **I agree with you** (*I am agree* xato)." },
        { t: "check", ex: { k: "choice", q: "Which sentence is correct?", opts: ["I agree with you.", "I am agree with you.", "I agree to you.", "I am agreeing you."], a: 0, why: "**agree** — fe'l: *I agree with you*. *am* kerak emas." } },
        { t: "check", ex: { k: "fill", q: "I see what you mean, ___ I still think it is too expensive.", a: ["but"], why: "Qisman rozilikdan keyin e'tiroz **but** bilan boshlanadi." } },
      ],
    },
    {
      title: "Bog'lovchi so'zlar, afzallik va kamchilik",
      blocks: [
        { t: "p", md: "Fikrlarni **bog'lovchi so'zlar** bilan bog'laymiz. Afzallik va kamchiliklarni aytganda ham ular yordam beradi." },
        {
          t: "table", head: ["Vazifa", "So'z yoki ibora", "Misol"], speak: [2],
          rows: [
            ["Qo'shish", "In addition, Moreover", "Online banking is quick. In addition, it is safe."],
            ["Qarama-qarshilik", "However, On the other hand", "Trains are fast. However, they are expensive."],
            ["Natija", "Therefore, As a result", "It rained all day. Therefore, we stayed at home."],
            ["Zidlik (bir gapda)", "whereas, although", "Cars are fast, whereas bikes are cheap."],
            ["Afzallik", "One advantage of … is …", "One advantage of remote work is flexibility."],
            ["Kamchilik", "A major drawback is …", "A major drawback is the lack of contact."],
          ],
        },
        { t: "tip", tone: "info", md: "**However** va **Therefore** gap boshida keladi va keyin vergul qo'yiladi. Bir gap ichida ikkita qismni **but**, **although**, **whereas** bilan bog'laymiz: *Although it was cold, we went out.* (*Although … but …* birga ishlatilmaydi!)" },
        { t: "check", ex: { k: "fix", wrong: "Although it was late, but we kept working.", a: ["Although it was late, we kept working.", "It was late, but we kept working."], hint: "Although va but birga kelmaydi", why: "Bitta gapda **although** yoki **but** ishlatiladi, ikkalasi emas." } },
        { t: "check", ex: { k: "choice", q: "Public transport is cheap. ___, it can be crowded.", opts: ["However", "Therefore", "In addition", "For example"], a: 0, why: "Arzon (yaxshi) va gavjum (yomon) — qarama-qarshilik: **However**." } },
      ],
    },
    {
      title: "Shart gaplar va majhul nisbat",
      blocks: [
        { t: "p", md: "B1 da to'rt turdagi shart gap va majhul nisbat kerak bo'ladi. Qisqa takror:" },
        {
          t: "table", head: ["Tur", "Shakl", "Misol"], speak: [2],
          rows: [
            ["Zero (umumiy haqiqat)", "if + Present, Present", "If you heat ice, it melts."],
            ["First (real kelajak)", "if + Present, will + V1", "If it rains, we will stay in."],
            ["Second (xayoliy hozir)", "if + Past, would + V1", "If I had more time, I would learn Spanish."],
            ["Third (o'tmishdagi xayol)", "if + Past Perfect, would have + V3", "If I had left earlier, I would have caught the train."],
          ],
        },
        {
          t: "table", head: ["Zamon", "Majhul nisbat", "Misol"], speak: [2],
          rows: [
            ["Present Simple", "am / is / are + V3", "English is spoken in many countries."],
            ["Past Simple", "was / were + V3", "The bridge was built in 2010."],
            ["Present Perfect", "has / have been + V3", "The problem has been solved."],
            ["Modal", "can / must / should be + V3", "This form must be signed by Friday."],
            ["will", "will be + V3", "The results will be announced on Friday."],
          ],
        },
        { t: "tip", tone: "warn", md: "Shart gapning **if** qismida **will** ishlatilmaydi: *If it will rain* — xato, **If it rains**. Third conditional'da **if** qismida *had + V3*, natija qismida *would have + V3*: *If I had known, I would have told you.*" },
        { t: "check", ex: { k: "choice", q: "If I ___ you, I would take the job.", opts: ["were", "am", "will be", "would be"], a: 0, why: "Second conditional: *if + Past*; maslahat berishda **If I were you** deymiz." } },
        { t: "check", ex: { k: "fill", q: "The new stadium ___ opened last year. (be)", a: ["was"], uz: "Yangi stadion o'tgan yili ochilgan.", why: "Passive Past Simple: **was opened**." } },
      ],
    },
    {
      title: "Barcha zamonlar bir joyda",
      blocks: [
        { t: "p", md: "B1 ning asosiy maqsadi — zamonlarni **vaziyatga qarab** to'g'ri tanlash. Quyidagi jadvalda har bir zamon uchun bitta yangi misol bor." },
        {
          t: "table", head: ["Zamon", "Qachon ishlatiladi", "Misol"], speak: [2],
          rows: [
            ["Present Simple", "odat, haqiqat", "She teaches English at a school."],
            ["Present Continuous", "hozir yoki yaqin reja", "We are meeting the client at five."],
            ["Past Simple", "tugagan o'tgan voqea", "I lost my phone on Monday."],
            ["Past Continuous", "o'tmishda davom etayotgan ish", "I was cooking when he called."],
            ["Present Perfect", "tajriba, natija", "I have read three books this month."],
            ["Present Perfect Continuous", "hozirgacha davom etayotgan ish", "He has been working here since March."],
            ["Past Perfect", "o'tmishdagi voqeadan oldin", "When we arrived, the film had started."],
            ["be going to / will", "reja / qaror", "I'm going to apply. I'll call you later."],
          ],
        },
        { t: "tip", tone: "info", md: "Tezkor qoida: **aniq o'tgan vaqt** bor (*yesterday, in 2019*) → Past Simple. **Hozirgacha** (*since, for, so far*) → Present Perfect. **Ikki o'tgan ish**dan oldingisi → Past Perfect." },
        { t: "check", ex: { k: "choice", q: "I ___ here for three years now.", opts: ["have worked", "worked", "am working since", "work since"], a: 0, why: "**for three years now** — hozirgacha davom etgan muddat: Present Perfect." } },
        { t: "check", ex: { k: "choice", q: "When I got to the station, the train ___.", opts: ["had already left", "already left", "has already left", "was already leave"], a: 0, why: "Poyezd men kelishimdan **oldin** ketgan: Past Perfect." } },
      ],
    },
    {
      title: "O'qing: B1 darajasiga xulosa",
      blocks: [
        {
          t: "text", title: "Is learning English worth the effort?",
          en: "Many people ask whether learning English is worth the effort. In my view, it is. Firstly, English is used in business, science and travel. For example, many research papers are written in English. Moreover, if you speak English well, you will have more job choices. However, learning a language is a challenge. It takes time, and you must practise every day. If I had started earlier, I would have reached a higher level by now. Overall, the benefits are greater than the difficulties. Therefore, I recommend that everybody should learn English, and keep going even when it feels hard.",
          uz: "Ko'pchilik ingliz tilini o'rganish mehnatga arziydimi, deb so'raydi. Mening fikrimcha, arziydi. Birinchidan, ingliz tili biznes, fan va sayohatda ishlatiladi. Masalan, ko'pchilik ilmiy maqolalar ingliz tilida yoziladi. Bundan tashqari, ingliz tilini yaxshi bilsangiz, ish tanlovingiz ko'proq bo'ladi. Biroq, til o'rganish qiyin sinov. Bu vaqt oladi va har kuni mashq qilish kerak. Agar ertaroq boshlaganimda, hozir yuqoriroq darajaga yetgan bo'lardim. Umuman olganda, foydalari qiyinchiliklardan ko'proq. Shuning uchun hamma ingliz tilini o'rganishi va qiyin tuyulganda ham davom etishi kerak, deb maslahat beraman.",
        },
        { t: "check", ex: { k: "tf", q: "The writer thinks that learning English is not worth the effort.", a: false, why: "Muallif: *In my view, it is* (arziydi)." } },
        { t: "check", ex: { k: "choice", q: "What does the writer regret?", opts: ["He or she did not start learning earlier.", "He or she studied too much.", "He or she never used English.", "English is too easy."], a: 0, why: "Third conditional: *If I had started earlier, I would have reached a higher level.*" } },
      ],
    },
    {
      title: "Dialog: kichik munozara",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Emma", en: "Do you think we should ban cars from the city centre?", uz: "Sizningcha, shahar markazida mashinalarni taqiqlash kerakmi?" },
            { who: "Karim", en: "As far as I'm concerned, yes. Air pollution has become a serious issue.", uz: "Menimcha, ha. Havoning ifloslanishi jiddiy muammoga aylandi." },
            { who: "Emma", en: "I see what you mean, but many people need their cars for work.", uz: "Nima demoqchi ekaningizni tushundim, lekin ko'p odamlarga ishga borish uchun mashina kerak." },
            { who: "Karim", en: "That's a fair point. However, if public transport were better, they would not need them.", uz: "To'g'ri fikr. Biroq jamoat transporti yaxshiroq bo'lsa, ularga mashina kerak bo'lmasdi." },
            { who: "Emma", en: "True. Perhaps we can start with one street, and then see what happens.", uz: "To'g'ri. Balki bitta ko'chadan boshlarmiz, keyin nima bo'lishini ko'ramiz." },
            { who: "Karim", en: "That sounds like a sensible compromise.", uz: "Bu mantiqli kelishuvga o'xshaydi." },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Emma completely agrees with Karim at the beginning.", a: false, why: "Emma: *I see what you mean, but…* — qisman rozi, lekin e'tiroz bildiradi." } },
        { t: "check", ex: { k: "choice", q: "Which conditional does Karim use?", opts: ["Second conditional", "First conditional", "Third conditional", "Zero conditional"], a: 0, why: "*If public transport were better, they would not need them* — xayoliy hozirgi vaziyat: second conditional." } },
      ],
    },
  ],
  words: [
    { en: "approach", uz: "yondashuv, usul", ipa: "əˈprəʊtʃ", pos: "noun", ex: "We need a new approach to this problem.", exUz: "Bu muammoga yangi yondashuv kerak." },
    { en: "factor", uz: "omil", ipa: "ˈfæk.tər", pos: "noun", ex: "Price is an important factor when we choose a phone.", exUz: "Telefon tanlaganda narx muhim omil hisoblanadi." },
    { en: "tackle", uz: "hal qilishga kirishmoq", ipa: "ˈtæk.əl", pos: "verb", ex: "The government wants to tackle unemployment.", exUz: "Hukumat ishsizlikni hal qilmoqchi." },
    { en: "effect", uz: "ta'sir, natija", ipa: "ɪˈfekt", pos: "noun", ex: "Sleep has a big effect on your mood.", exUz: "Uyqu kayfiyatingizga katta ta'sir qiladi." },
    { en: "overcome", uz: "yengib o'tmoq", ipa: "ˌəʊ.vəˈkʌm", pos: "verb", ex: "She overcame her fear of speaking in public.", exUz: "U omma oldida gapirish qo'rquvini yengib o'tdi." },
    { en: "issue", uz: "masala, muammo", ipa: "ˈɪʃ.uː", pos: "noun", ex: "Housing is an important issue for young people.", exUz: "Uy-joy yoshlar uchun muhim masala." },
    { en: "impact", uz: "ta'sir", ipa: "ˈɪm.pækt", pos: "noun", ex: "The new rule had a big impact on small shops.", exUz: "Yangi qoida kichik do'konlarga katta ta'sir qildi." },
    { en: "attitude", uz: "munosabat, qarash", ipa: "ˈæt.ɪ.tjuːd", pos: "noun", ex: "A positive attitude helps you learn.", exUz: "Ijobiy munosabat o'rganishga yordam beradi." },
    { en: "influence", uz: "ta'sir qilmoq; ta'sir", ipa: "ˈɪn.flu.əns", pos: "verb", ex: "Friends can influence your decisions.", exUz: "Do'stlar qarorlaringizga ta'sir qilishi mumkin." },
    { en: "major", uz: "katta, jiddiy", ipa: "ˈmeɪ.dʒər", pos: "adj", ex: "Traffic is a major problem in big cities.", exUz: "Tirbandlik katta shaharlarda jiddiy muammo." },
  ],
  practice: [
    { k: "match", pairs: [["argument", "dalil, bahs"], ["benefit", "foyda"], ["concern", "xavotir"], ["solution", "yechim"], ["challenge", "qiyin sinov"], ["attitude", "munosabat"]] },
    { k: "choice", q: "Which sentence is correct?", opts: ["I agree with you.", "I am agree with you.", "I agree you.", "I am agreeing to you."], a: 0, why: "**agree with** — *am* kerak emas." },
    { k: "choice", q: "She was tired. ___, she went to bed early.", opts: ["Therefore", "However", "Although", "Whereas"], a: 0, why: "Sabab va natija: **Therefore**." },
    { k: "choice", q: "If it ___ tomorrow, we will cancel the picnic.", opts: ["rains", "will rain", "rained", "would rain"], a: 0, why: "First conditional: *if + Present*, **will** if qismida emas." },
    { k: "choice", q: "If I had known about the problem, I ___ you.", opts: ["would have told", "would tell", "will tell", "had told"], a: 0, why: "Third conditional: *would have + V3*." },
    { k: "fill", q: "Our new office ___ built in 2021. (be)", a: ["was"], uz: "Yangi ofisimiz 2021-yilda qurilgan.", why: "Passive Past Simple: **was built**." },
    { k: "fill", q: "I have ___ working here since January. (be)", a: ["been"], uz: "Men bu yerda yanvardan beri ishlayapman.", why: "Present Perfect Continuous: **have been working**." },
    { k: "fill", q: "Cars are fast, ___ bicycles are cheap and healthy.", a: ["whereas", "while"], uz: "Mashinalar tez, velosipedlar esa arzon va foydali.", why: "Zidlik: **whereas / while**." },
    { k: "fill", q: "To sum ___, the benefits are greater than the problems.", a: ["up"], uz: "Xulosa qilib aytganda, foydalari muammolardan ko'proq.", why: "**To sum up** — xulosa." },
    { k: "listen", say: "If I had more time, I would learn another language.", opts: ["If I had more time, I would learn another language.", "If I have more time, I will learn another language.", "If I had had more time, I would have learned another language.", "If I had more time, I learn another language."], a: 0 },
    { k: "dictation", say: "As far as I'm concerned, this is a serious issue.", uz: "Menimcha, bu jiddiy masala." },
    { k: "order", uz: "Bir afzalligi shundaki, u vaqtni tejaydi.", words: ["One", "advantage", "is", "that", "it", "saves", "time."], extra: ["advantages", "save"] },
    { k: "order", uz: "Hisobot juma kuni e'lon qilinadi.", words: ["The", "report", "will", "be", "announced", "on", "Friday."], extra: ["is", "announce"] },
    { k: "fix", wrong: "If I will have time, I will help you.", a: ["If I have time, I will help you.", "If I have time, I'll help you."], hint: "if dan keyin will bo'lmaydi", why: "**if** qismida Present Simple: *If I have time*." },
    { k: "fix", wrong: "When we arrived, the lesson already started.", a: ["When we arrived, the lesson had already started.", "When we arrived, the lesson had started."], hint: "Past Perfect", why: "Dars biz kelishimizdan oldin boshlangan: **had started**." },
    { k: "translate", uz: "Mening fikrimcha, bu yechim juda yaxshi.", a: ["In my opinion, this solution is very good.", "In my view, this solution is very good.", "I think this solution is very good.", "As far as I'm concerned, this solution is very good."], why: "Fikr bildirish iborasi." },
    { k: "speak", say: "However, there is one major drawback, so I am not completely convinced.", uz: "Biroq bitta katta kamchilik bor, shuning uchun to'liq ishonchim komil emas." },
  ],
  quiz: [
    { k: "choice", q: "She ___ the report when I called her.", opts: ["was writing", "writes", "has written", "wrote"], a: 0, why: "Qo'ng'iroq paytida davom etayotgan ish: Past Continuous." },
    { k: "choice", q: "Which linking word shows contrast?", opts: ["However", "Therefore", "Moreover", "For example"], a: 0, why: "**However** — qarama-qarshilik." },
    { k: "choice", q: "My bike ___ yet, so I can't ride it.", opts: ["hasn't been repaired", "hasn't repaired", "wasn't being repair", "didn't be repaired"], a: 0, why: "**yet** → Present Perfect passive: **hasn't been + V3**." },
    { k: "choice", q: "I haven't seen him ___ last summer.", opts: ["since", "for", "ago", "during"], a: 0, why: "Boshlanish nuqtasi (*last summer*) → **since**." },
    { k: "choice", q: "If she ___ harder, she would pass the exam.", opts: ["studied", "studies", "will study", "would study"], a: 0, why: "Second conditional: *if + Past Simple*." },
    { k: "fill", q: "There is no ___ that this method works. (dalil)", a: ["evidence"], uz: "Bu usul ishlashiga hech qanday dalil yo'q.", why: "**evidence** — dalil, isbot." },
    { k: "fill", q: "Modern technology has a big ___ on our lives. (ta'sir)", a: ["effect", "influence", "impact"], uz: "Zamonaviy texnologiya hayotimizga katta ta'sir qiladi.", why: "**effect on** — ta'sir." },
    { k: "listen", say: "I'd like to emphasise that this issue is important.", opts: ["I'd like to emphasise that this issue is important.", "I'd like to explain that this issue is important.", "I'd like to emphasise that this issue is difficult.", "I'd like to emphasise this issue is not important."], a: 0 },
    { k: "tf", q: "In a first conditional sentence we use **will** after **if**.", a: false, why: "*If it rains* — if qismida Present Simple, will esa asosiy qismda." },
    { k: "order", uz: "Birinchidan, til o'rganish dunyoni ochadi.", words: ["Firstly,", "learning", "a", "language", "opens", "up", "the", "world."], extra: ["open", "an"] },
    { k: "translate", uz: "Agar vaqtim bo'lganida, men siz bilan kelgan bo'lardim.", a: ["If I had had time, I would have come with you.", "If I'd had time, I would have come with you.", "If I had had time, I'd have come with you.", "If I'd had time, I'd have come with you."], why: "Third conditional: *had had … would have come*." },
  ],
  summary: [
    "Fikr: *In my view… As far as I'm concerned… I'm convinced that…* Rozilik: *I agree with you* (*am agree* emas). E'tiroz: *I see what you mean, but…*",
    "Bog'lovchilar: **In addition, However, Therefore, whereas, although**. *Although … but …* birga ishlatilmaydi.",
    "Shart gaplar: zero, first (*if + Present, will*), second (*if + Past, would*), third (*if + Past Perfect, would have + V3*). **if** dan keyin *will* yo'q.",
    "Majhul nisbat: *am / is / are + V3, was / were + V3, has been + V3, will be + V3, must be + V3*.",
    "Zamonlar: aniq vaqt → Past Simple; *since / for* → Present Perfect; oldingi o'tgan ish → Past Perfect. Taqdimot: *To sum up…*; esse: *introduction, body, conclusion*.",
  ],
  homework: "Biror munozarali mavzu tanlang (masalan, «uyda ishlash yaxshimi?»). 150 so'zlik qisqa esse yozing: fikringiz, ikkita sabab, bitta qarama-qarshi fikr (*However…*), bitta shart gap va xulosa. Keyin 2 daqiqa davomida xuddi shu mavzuda ovoz chiqarib gapiring.",
};

export default lesson;
