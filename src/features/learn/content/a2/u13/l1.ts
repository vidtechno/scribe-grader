import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u13-l1",
  title: "Going to",
  titleUz: "Going to: rejalar va aniq belgilar",
  goal: "**be going to + fe'l** yordamida kelajak rejalaringiz (*I'm going to study medicine*) va hozirgi **belgilarga** asoslangan taxminlarni (*Look at the clouds! It's going to rain*) ayta olasiz, inkor va savol gaplar tuzasiz.",
  slides: [
    {
      title: "Rejalar: be going to",
      blocks: [
        { t: "p", md: "Kelajak haqida gapirishning bir necha yo'li bor. Birinchisi — **be going to**. Uni **oldindan qilingan reja yoki niyat** haqida ishlatamiz: qaror **allaqachon** qabul qilingan." },
        {
          t: "table", head: ["Shakl", "Qolip", "Misol"], speak: [2],
          rows: [
            ["Darak", "am / is / are + going to + V1", "I'm going to visit Samarkand."],
            ["Inkor", "am / is / are + not + going to + V1", "She isn't going to come."],
            ["Savol", "Am / Is / Are + ega + going to + V1?", "Are you going to study tonight?"],
            ["Qisqa javob", "Yes, I am. / No, he isn't.", "Is he going to call? — Yes, he is."],
          ],
        },
        { t: "tip", tone: "info", md: "**be** fe'li ega bilan moslashadi: **I am**, **he / she / it is**, **we / you / they are**. *going to* dan keyin doim **oddiy shakldagi fe'l (V1)**: *going to **eat***, *going to **buy***." },
        { t: "check", ex: { k: "fill", q: "My sister ___ going to study law. (be)", a: ["is"], why: "*my sister* = she → **is**." } },
      ],
    },
    {
      title: "Qaror allaqachon bor",
      blocks: [
        { t: "p", md: "Gapirayotgan paytdan **oldin** rejalashtirgan ishlar haqida **going to** deymiz. Odatda vaqt iborasi ham bo'ladi:" },
        {
          t: "examples", items: [
            { en: "I'm going to study English every day this year.", uz: "Bu yil har kuni ingliz tili o'rganmoqchiman.", note: "Niyat — qaror qabul qilingan." },
            { en: "We're going to have plov on Sunday.", uz: "Yakshanba kuni palov qilamiz.", note: "Reja bor." },
            { en: "Kamol is going to buy a car next year.", uz: "Kamol kelasi yil mashina sotib olmoqchi." },
            { en: "They aren't going to stay in a hotel.", uz: "Ular mehmonxonada qolmoqchi emas." },
            { en: "What are you going to do after school?", uz: "Maktabdan keyin nima qilmoqchisiz?" },
          ],
        },
        {
          t: "table", head: ["Vaqt iborasi", "Ma'nosi"], speak: [0],
          rows: [
            ["tonight", "bugun kechqurun"],
            ["tomorrow", "ertaga"],
            ["next week / month / year", "kelasi hafta / oy / yil"],
            ["this weekend", "shu dam olish kunlari"],
            ["in two days", "ikki kundan keyin"],
            ["one day", "bir kun (aniq emas)"],
          ],
        },
        { t: "check", ex: { k: "choice", q: "\"Men kelasi yil Turkiyaga bormoqchiman.\"", opts: ["I going to go to Turkey next year.", "I'm going to go to Turkey next year.", "I'm going to went to Turkey next year.", "I'm go to Turkey next year."], a: 1, why: "**am + going to + V1**. *am* tushib qolmasin!" } },
      ],
    },
    {
      title: "Inkor va savol",
      blocks: [
        { t: "p", md: "Inkor uchun **not** ni **be** dan keyin qo'yamiz. Savol uchun **be** ni ega oldiga chiqaramiz — **do / does** kerak emas!" },
        {
          t: "table", head: ["Darak", "Inkor", "Savol"], speak: [0, 1, 2],
          rows: [
            ["He's going to cook.", "He isn't going to cook.", "Is he going to cook?"],
            ["They're going to win.", "They aren't going to win.", "Are they going to win?"],
            ["I'm going to wait.", "I'm not going to wait.", "Am I going to wait?"],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["Are you going to travel?", "She isn't going to stay.", "Where are you going to live?"] },
          bad: { title: "Xato", items: ["Do you going to travel?", "She doesn't going to stay.", "Where you are going to live?"] },
        },
        { t: "tip", tone: "warn", md: "**Do / does / did** ni **going to** bilan ishlatmang. Gapda allaqachon **be** bor — savolda uni oldinga chiqaring, inkorda **not** qo'shing." },
        { t: "check", ex: { k: "order", uz: "Siz kechqurun nima qilmoqchisiz?", words: ["What", "are", "you", "going", "to", "do", "tonight?"], extra: ["do you", "doing"] } },
      ],
    },
    {
      title: "Hozirgi belgi bo'yicha taxmin",
      blocks: [
        { t: "p", md: "**going to** ning ikkinchi ishlatilishi: hozir **ko'zimiz bilan ko'rayotgan** narsaga qarab, yaqin kelajakda nima bo'lishini aytamiz. Bu yerda reja yo'q — **dalil** bor:" },
        {
          t: "examples", items: [
            { en: "Look at those clouds! It's going to rain.", uz: "Anavi bulutlarga qara! Yomg'ir yog'adi.", note: "Dalil: qora bulutlar." },
            { en: "Careful! You're going to fall.", uz: "Ehtiyot bo'l! Yiqilasan.", note: "Dalil: u muvozanatini yo'qotyapti." },
            { en: "She's very pale. I think she's going to be sick.", uz: "U juda rangi oqargan. Kasal bo'lib qolsa kerak.", note: "Dalil: rangi." },
            { en: "The bus is full. We aren't going to get a seat.", uz: "Avtobus liq to'la. Biz joy topa olmaymiz." },
          ],
        },
        { t: "tip", tone: "good", md: "Savol bering: **hozir nimani ko'ryapman?** Agar ko'rinib turgan dalil bo'lsa (bulut, oqargan yuz, to'la avtobus) — **going to** ishlating." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I'm going to visit my aunt on Friday.", "It's going to snow tonight."], },
          bad: { title: "Xato", items: ["I'm going to visiting my aunt on Friday.", "It's going to snowing tonight."] },
        },
        { t: "check", ex: { k: "choice", q: "Qora bulutlar osmonni qopladi. Nima deysiz?", opts: ["It rains.", "It's going to rain.", "It's going to raining.", "It does going to rain."], a: 1, why: "Hozir dalil bor (qora bulutlar) → **is going to + V1**." } },
      ],
    },
    {
      title: "Talaffuz: gonna",
      blocks: [
        { t: "p", md: "Og'zaki nutqda **going to** ko'pincha **\"gonna\"** (\"genə\") deb eshitiladi. Siz filmlarda va qo'shiqlarda ko'p uchratasiz:" },
        {
          t: "sounds", items: [
            { label: "going to", say: "I'm going to be late.", uz: "Yozuvda **going to**, tez gapirganda **\"gonna\"**.", examples: ["I'm going to call you.", "What are you going to do?"] },
            { label: "I'm", say: "I'm going to study.", uz: "**\"aim\"** — *I am* ning qisqartmasi. Gapni shu bilan boshlang.", examples: ["I'm going to sleep.", "I'm going to cook."] },
          ],
        },
        { t: "tip", tone: "warn", md: "**gonna** ni faqat gapirganda va do'stona yozishmada ishlating. Imtihonda, rasmiy xatda va kitobda — **going to**." },
        { t: "check", ex: { k: "tf", q: "Rasmiy xatda **I'm gonna write** deb yozish to'g'ri.", a: false, why: "**gonna** — og'zaki shakl. Rasmiy yozuvda **going to**." } },
      ],
    },
    {
      title: "O'qing: Dilnozaning rejalari",
      blocks: [
        {
          t: "text", title: "Dilnoza's big plans",
          en: "Dilnoza is 19 and she lives in Tashkent. This year is important for her. She is going to take an English exam in June, so she is going to study every evening. Next summer she is going to travel to Istanbul with her cousin. They are going to stay with friends, so they aren't going to pay for a hotel.\nTonight she is going to cook plov for her family. She has bought the rice and the carrots. Look! Her little brother is holding a full glass of tea and he is running. He is going to spill it!",
          uz: "Dilnoza 19 yoshda va Toshkentda yashaydi. Bu yil u uchun muhim. U iyun oyida ingliz tili imtihonini topshirmoqchi, shuning uchun har kuni kechqurun o'qimoqchi. Kelasi yozda amakivachchasi bilan Istanbulga sayohat qilmoqchi. Ular do'stlarinikida qolishadi, shuning uchun mehmonxonaga pul to'lamaydilar.\nBugun kechqurun u oilasi uchun palov pishirmoqchi. U guruch va sabzini sotib olgan. Qarang! Ukasi to'la stakan choy ushlab yugurib ketyapti. U to'kib yuboradi!",
        },
        { t: "check", ex: { k: "choice", q: "Why aren't Dilnoza and her cousin going to pay for a hotel?", opts: ["It is too expensive.", "They are going to stay with friends.", "They aren't going to Istanbul.", "They will stay at home."], a: 1, why: "*They are going to stay with friends.*" } },
        { t: "check", ex: { k: "tf", q: "Dilnoza is going to take an exam in July.", a: false, why: "Imtihon **iyun** oyida: *in June*." } },
      ],
    },
    {
      title: "Dialog: dam olish kunlari",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Aziz", en: "What are you going to do this weekend, Laylo?", uz: "Laylo, dam olish kunlari nima qilmoqchisan?" },
            { who: "Laylo", en: "I'm going to visit my grandparents in Samarkand.", uz: "Samarqanddagi bobo-buvimnikiga bormoqchiman." },
            { who: "Aziz", en: "Nice! Are you going to take the train?", uz: "Zo'r! Poyezdda borasanmi?" },
            { who: "Laylo", en: "Yes, I am. I've already bought the ticket. What about you?", uz: "Ha. Chiptani allaqachon olganman. Sen-chi?" },
            { who: "Aziz", en: "I'm not going to do much. I'm going to rest and watch football.", uz: "Men ko'p narsa qilmayman. Dam olaman va futbol ko'raman." },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Laylo is going to travel by plane.", a: false, why: "*Are you going to take the train? — Yes, I am.*" } },
      ],
    },
  ],
  words: [
    { en: "plan", uz: "reja; rejalashtirmoq", ipa: "plæn", pos: "noun/verb", ex: "What's your plan for tomorrow?", exUz: "Ertangi rejang qanday?" },
    { en: "decide", uz: "qaror qilmoq", ipa: "dɪˈsaɪd", pos: "verb", ex: "I've decided to learn French.", exUz: "Fransuz tilini o'rganishga qaror qildim." },
    { en: "book", uz: "oldindan band qilmoq", ipa: "bʊk", pos: "verb", ex: "We're going to book a hotel.", exUz: "Mehmonxona band qilmoqchimiz." },
    { en: "pack", uz: "(yukni) joylamoq", ipa: "pæk", pos: "verb", ex: "I'm going to pack my bag tonight.", exUz: "Bugun kechqurun sumkamni joylayman." },
    { en: "save money", uz: "pul yig'moq", ipa: "seɪv ˈmʌni", pos: "phrase", ex: "She's going to save money for a laptop.", exUz: "U noutbuk uchun pul yig'moqchi." },
    { en: "take an exam", uz: "imtihon topshirmoq", ipa: "teɪk ən ɪɡˈzæm", pos: "phrase", ex: "He's going to take an exam in May.", exUz: "U may oyida imtihon topshiradi." },
    { en: "move", uz: "ko'chib o'tmoq", ipa: "muːv", pos: "verb", ex: "They are going to move to a new flat.", exUz: "Ular yangi kvartiraga ko'chib o'tmoqchi." },
    { en: "get married", uz: "turmush qurmoq; uylanmoq", ipa: "ɡet ˈmærid", pos: "phrase", ex: "My cousin is going to get married in spring.", exUz: "Amakivachcham bahorda to'y qiladi." },
    { en: "next year", uz: "kelasi yil", ipa: "nekst jɪə", pos: "phrase", ex: "I'm going to start a course next year.", exUz: "Kelasi yil kursni boshlayman." },
    { en: "careful", uz: "ehtiyotkor", ipa: "ˈkeəfl", pos: "adj", ex: "Be careful! You're going to fall.", exUz: "Ehtiyot bo'l! Yiqilasan." },
  ],
  practice: [
    { k: "match", pairs: [["tonight", "bugun kechqurun"], ["tomorrow", "ertaga"], ["next year", "kelasi yil"], ["this weekend", "shu dam olish kunlari"], ["in two days", "ikki kundan keyin"]] },
    { k: "listen", say: "What are you going to do tonight?", opts: ["What are you going to do tonight?", "What are you doing tonight?", "What do you do tonight?"], a: 0 },
    { k: "listen", say: "She isn't going to come.", opts: ["She isn't coming.", "She isn't going to come.", "She doesn't come."], a: 1 },
    { k: "fill", q: "We ___ going to visit Bukhara in May.", a: ["are", "'re"], why: "*we* → **are**." },
    { k: "fill", q: "He is going to ___ a new phone. (buy)", a: ["buy"], why: "*going to* dan keyin **V1**." },
    { k: "fill", q: "I'm not ___ to tell anyone.", a: ["going"], why: "**am not going to** + V1." },
    { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["Do you going to cook?", "Are you going to cook?", "Are you go to cook?", "You are going cook?"], a: 1 },
    { k: "choice", q: "**Look! The baby ___ fall!**", opts: ["is going to", "goes to", "is go to", "does going to"], a: 0, why: "Hozirgi dalil → **is going to**." },
    { k: "choice", q: "\"Ular kelasi yil ko'chib o'tishmoqchi.\"", opts: ["They move next year.", "They are going to move next year.", "They are going move next year.", "They going to move next year."], a: 1 },
    { k: "tf", q: "**going to** dan keyin fe'lning V1 shakli keladi.", a: true, why: "*going to **eat***, *going to **go***." },
    { k: "tf", q: "**Does she going to come?** — to'g'ri savol.", a: false, why: "To'g'ri: **Is she going to come?**" },
    { k: "order", uz: "Biz mehmonxona band qilmoqchi emasmiz.", words: ["We", "aren't", "going", "to", "book", "a", "hotel."], extra: ["don't", "booking"], alt: [["We're", "not", "going", "to", "book", "a", "hotel."]] },
    { k: "translate", uz: "Men bugun kechqurun palov pishirmoqchiman.", a: ["I'm going to cook plov tonight.", "I am going to cook plov tonight.", "Tonight I'm going to cook plov.", "I'm going to make plov tonight.", "I am going to make plov tonight."] },
    { k: "translate", uz: "Siz imtihon topshirmoqchimisiz?", a: ["Are you going to take an exam?", "Are you going to take the exam?"] },
    { k: "speak", say: "I'm going to study English every day this year.", uz: "Bu yil har kuni ingliz tili o'rganmoqchiman." },
  ],
  quiz: [
    { k: "fill", q: "Aziz ___ going to learn to drive. (be)", a: ["is", "'s"] },
    { k: "fill", q: "Are they going ___ stay here?", a: ["to"] },
    { k: "choice", q: "Qaysi gap **xato**?", opts: ["I'm going to sleep.", "She's going to work late.", "He doesn't going to help.", "We're not going to wait."], a: 2, why: "To'g'ri: *He **isn't** going to help.*" },
    { k: "choice", q: "**The sky is black. It ___ rain soon.**", opts: ["is going to", "going to", "does going to", "will to"], a: 0 },
    { k: "choice", q: "\"Sen nima qilmoqchisan?\"", opts: ["What you are going to do?", "What are you going to do?", "What do you going to do?", "What are you going do?"], a: 1 },
    { k: "listen", say: "Is he going to call you?", opts: ["Is he going to call you?", "Does he call you?", "Is he calling you?"], a: 0 },
    { k: "tf", q: "**She's going to be a doctor** — bu niyat haqida gap.", a: true },
    { k: "tf", q: "Kelajak rejasi uchun **I'm going to going** deyiladi.", a: false, why: "**going to + V1**: *I'm going to go.*" },
    { k: "order", uz: "U kelasi yil ko'chib o'tmoqchi.", words: ["He", "is", "going", "to", "move", "next", "year."], extra: ["moving", "does"], alt: [["He's", "going", "to", "move", "next", "year."], ["Next", "year", "he", "is", "going", "to", "move."]] },
    { k: "translate", uz: "Biz ertaga sayohat qilmoqchimiz.", a: ["We're going to travel tomorrow.", "We are going to travel tomorrow.", "Tomorrow we're going to travel.", "Tomorrow we are going to travel."] },
  ],
  summary: [
    "**am / is / are + going to + V1** — oldindan qilingan reja yoki niyat: *I'm going to study.*",
    "Inkor: **isn't / aren't / 'm not going to**. Savol: **Are you going to…?** — **do / does** kerak emas.",
    "Hozir ko'rinib turgan dalil bo'lsa ham **going to**: *Look at the clouds! It's going to rain.*",
    "**gonna** — faqat og'zaki shakl; yozuvda **going to**.",
  ],
  homework: "O'z hayotingiz haqida 8 ta gap yozing: 4 ta reja (*I'm going to… next year*), 2 ta inkor (*I'm not going to…*) va 2 ta dalilga asoslangan taxmin (*Look! … is going to…*). Keyin do'stingizga 3 ta savol bering: *What are you going to do…?*",
};

export default lesson;
