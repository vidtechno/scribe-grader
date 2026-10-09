import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u16-l3",
  title: "Relative clauses",
  titleUz: "Who, which, that, where: ta'riflash",
  goal: "**who, which, that, where** yordamida gapni bog'laysiz (*The man who lives next door is a doctor*), narsa va odamlarni ta'riflaysiz va **A dentist is a person who…** kabi ta'rif berasiz. **The book what I read** xatosidan qochasiz.",
  slides: [
    {
      title: "Who, which, that, where",
      blocks: [
        { t: "p", md: "Relative clause (nisbiy gap) — **qaysi** odam, narsa yoki joy haqida gapirayotganimizni aniqlaydigan qo'shimcha gap. O'zbekchada buni **-gan, -adigan** shakllari bilan aytamiz: *yonimizda yashaydigan odam, men o'qigan kitob*. Inglizchada esa bu qism **otdan keyin** keladi va **bog'lovchi so'z** bilan boshlanadi:" },
        {
          t: "table", head: ["So'z", "Kim / nima uchun", "Misol"], speak: [2],
          rows: [
            ["who", "odamlar", "The man who lives next door is a doctor."],
            ["which", "narsalar, hayvonlar", "The book which I read was great."],
            ["that", "odam yoki narsa", "The woman that I met is my teacher."],
            ["where", "joylar", "That's the café where we met."],
          ],
        },
        { t: "tip", tone: "info", md: "Tartibni solishtiring: o'zbekcha **[yonimizda yashaydigan] odam** — sifatdosh ot **oldidan**. Inglizcha **the man [who lives next door]** — ot **avval**, tushuntirish **keyin**." },
        { t: "check", ex: { k: "choice", q: "**The girl ___ sits next to me is Laylo.**", opts: ["who", "which", "where", "what"], a: 0, why: "*girl* — odam → **who**." } },
      ],
    },
    {
      title: "Defining clause: qaysi biri?",
      blocks: [
        { t: "p", md: "**Defining** (aniqlovchi) gap qaysi odam yoki narsa haqida gap ketayotganini aytadi. Usiz gap to'liq ma'no bermaydi, shuning uchun **vergul qo'yilmaydi**." },
        {
          t: "examples", items: [
            { en: "The man who lives next door is a dentist.", uz: "Qo'shni xonadonda yashaydigan erkak — tish shifokori.", note: "Qaysi erkak? — qo'shni xonadondagisi." },
            { en: "The bag that I bought is very light.", uz: "Men sotib olgan sumka juda yengil.", note: "Qaysi sumka? — men olgani." },
          ],
        },
        { t: "p", md: "**who / which / that** gapda *ega* bo'lsa (*who lives*), uni tushirib bo'lmaydi. Agar *to'ldiruvchi* bo'lsa (*the book **that** I read* — kitobni **men** o'qiganman), **that / which** ni tushirib qoldirish mumkin: *the book I read*." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["The book (that) I read was great.", "The man who lives here is kind.", "The film which we saw was long."] },
          bad: { title: "Xato", items: ["The book what I read was great.", "The man who he lives here is kind.", "The film which we saw it was long."] },
        },
        { t: "tip", tone: "warn", md: "Ikki mashhur xato: **what** ishlatish (*the book what…*) va ot o'rniga yana olmosh qo'yish (*who **he** lives*, *which we saw **it***). O'zbek tilida bunday gaplar bo'lmaydi — bog'lovchi so'z olmosh vazifasini o'zi bajaradi." },
        { t: "check", ex: { k: "fill", q: "The film ___ we watched yesterday was boring.", a: ["that", "which"], why: "Narsa → **that** yoki **which**. (Tushirib ham bo'ladi: *The film we watched…*)" } },
      ],
    },
    {
      title: "Where — joylar uchun",
      blocks: [
        { t: "p", md: "Joy haqida gapirsak va gap ichida **o'sha joyda sodir bo'lgan ish** aytilsa, **where** ishlatamiz:" },
        {
          t: "examples", items: [
            { en: "This is the village where my grandfather was born.", uz: "Bu — bobom tug'ilgan qishloq." },
            { en: "Do you know a shop where I can buy a cheap phone?", uz: "Arzon telefon sotib oladigan do'kon bilasizmi?" },
            { en: "That's the restaurant where we had dinner.", uz: "Bu — biz kechki ovqat yegan restoran." },
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["That's the café where we met.", "That's the café which I like."], },
          bad: { title: "Xato", items: ["That's the café which we met.", "That's the café where I like."] },
        },
        { t: "tip", tone: "info", md: "Qanday tanlaymiz? Gapdagi ikkinchi qismga qarang. *We met **in** the café* — joyda ish bo'ldi → **where**. *I like **the café*** — joy bevosita ob'ekt → **which**." },
        { t: "check", ex: { k: "fill", q: "This is the village ___ my grandfather was born.", a: ["where"], why: "Joy + u yerda sodir bo'lgan ish → **where**." } },
      ],
    },
    {
      title: "Ta'rif berish",
      blocks: [
        { t: "p", md: "Bilmagan so'zni inglizcha tushuntirish — til o'rganuvchi uchun eng foydali ko'nikma. Qolip juda oddiy:" },
        {
          t: "table", head: ["Qolip", "Misol"], speak: [1],
          rows: [
            ["A … is a person who …", "A dentist is a person who looks after your teeth."],
            ["A … is a thing that / which …", "A kettle is a thing that boils water."],
            ["A … is a place where …", "A pharmacy is a place where you buy medicine."],
            ["It's something that / which …", "It's something that you use to cut paper."],
            ["He's someone who …", "He's someone who fixes cars."],
          ],
        },
        { t: "tip", tone: "good", md: "Agar inglizcha so'zni bilmasangiz, jim qolmang — **ta'rif bering**: *It's a thing which you use to…* Bu sizni suhbatda qutqaradi." },
        { t: "check", ex: { k: "choice", q: "**A bakery is a place ___ bread is made.**", opts: ["who", "which", "where", "what"], a: 2, why: "Joy → **where**." } },
        { t: "check", ex: { k: "choice", q: "**A tourist is a person ___ visits a place for a holiday.**", opts: ["where", "who", "which", "what"], a: 1 } },
      ],
    },
    {
      title: "Who, which, that: aralashtirmang",
      blocks: [
        {
          t: "table", head: ["Qoida", "Misol"],
          rows: [
            ["Odam → **who** (norasmiy: that)", "The people who live here are friendly."],
            ["Narsa → **which** yoki **that**", "The tool that I need is in the garage."],
            ["Joy → **where**", "The hotel where we stayed was clean."],
            ["**what** — bog'lovchi emas!", "I don't know what he wants. (savol so'zi)"],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["A teacher is a person who teaches.", "The people who live here are friendly.", "Everything that he said was true."] },
          bad: { title: "Xato", items: ["A teacher is a person which teaches.", "The people which live here are friendly.", "Everything what he said was true."] },
        },
        { t: "tip", tone: "info", md: "**everything, something, nothing, all** dan keyin odatda **that** ishlatiladi: *Everything that he said was true.* **what** emas." },
        { t: "check", ex: { k: "choice", q: "Qaysi gap **to'g'ri**?", opts: ["The woman which works here is kind.", "The woman who works here is kind.", "The woman where works here is kind.", "The woman what works here is kind."], a: 1, why: "Odam → **who**." } },
      ],
    },
    {
      title: "O'qing: Mening mahallam",
      blocks: [
        {
          t: "text", title: "My neighbourhood",
          en: "I live in a quiet neighbourhood in Tashkent. The street where I live has a lot of trees. The old man who lives next door has a garden that is full of roses. At the end of the street there is a bakery which sells the best bread in the area. The woman who works there knows everybody. My favourite place is the park where I go running every morning. I also like the small shop where we buy fruit. In the evenings, the people who live on our street often sit outside and talk. It's the kind of place that makes you feel at home.",
          uz: "Men Toshkentdagi sokin mahallada yashayman. Men yashaydigan ko'chada daraxtlar ko'p. Qo'shni xonadonda yashaydigan chol atirgullarga to'la bog'ga ega. Ko'cha oxirida atrofdagi eng yaxshi nonni sotadigan novvoyxona bor. U yerda ishlaydigan ayol hammani taniydi. Mening sevimli joyim — har ertalab yuguradigan bog'im. Yana meva sotib oladigan kichik do'konni ham yaxshi ko'raman. Kechqurunlari ko'chamizda yashaydigan odamlar ko'pincha tashqarida o'tirib gaplashishadi. Bu o'zingizni uyingizdagidek his qildiradigan joy.",
        },
        { t: "check", ex: { k: "choice", q: "Where does the writer go running?", opts: ["In the street.", "In the park.", "In the garden.", "In the bakery."], a: 1, why: "*the park **where** I go running every morning*." } },
        { t: "check", ex: { k: "tf", q: "The woman who works in the bakery doesn't know anybody.", a: false, why: "*The woman who works there **knows everybody**.*" } },
      ],
    },
    {
      title: "Dialog: Bu nima?",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Laylo", en: "Let's play a game. I describe something and you guess it.", uz: "Keling, o'yin o'ynaymiz. Men biror narsani ta'riflayman, sen topasan." },
            { who: "Aziz", en: "OK. Go on!", uz: "Yaxshi. Boshla!" },
            { who: "Laylo", en: "It's a thing that you use to cut paper.", uz: "Bu qog'ozni kesish uchun ishlatiladigan narsa." },
            { who: "Aziz", en: "Scissors! Now me. It's a place where you borrow books.", uz: "Qaychi! Endi men. Bu kitob olib o'qiladigan joy." },
            { who: "Laylo", en: "A library! Easy. It's a person who looks after your teeth.", uz: "Kutubxona! Oson. Bu tishlaringni davolaydigan odam." },
            { who: "Aziz", en: "A dentist. What about this one? It's an animal which lives in the desert and carries people.", uz: "Tish shifokori. Buni-chi? Bu cho'lda yashaydigan va odamlarni ko'taradigan hayvon." },
            { who: "Laylo", en: "A camel! You win!", uz: "Tuya! Sen yutding!" },
          ],
        },
        { t: "check", ex: { k: "choice", q: "\"It's a place where you borrow books.\" — What is it?", opts: ["A bakery", "A library", "A stadium", "A pharmacy"], a: 1 } },
      ],
    },
  ],
  words: [
    { en: "dentist", uz: "tish shifokori", ipa: "ˈden.tɪst", pos: "noun", ex: "A dentist is a person who looks after your teeth.", exUz: "Tish shifokori tishlaringizni davolaydigan odam." },
    { en: "tourist", uz: "sayyoh", ipa: "ˈtʊə.rɪst", pos: "noun", ex: "The tourists who visit Bukhara love the old streets.", exUz: "Buxoroga keladigan sayyohlar eski ko'chalarni yaxshi ko'rishadi." },
    { en: "mechanic", uz: "avtomexanik, mexanik", ipa: "məˈkæn.ɪk", pos: "noun", ex: "My brother is a mechanic who fixes old cars.", exUz: "Akam eski mashinalarni ta'mirlaydigan mexanik." },
    { en: "bakery", uz: "novvoyxona, non do'koni", ipa: "ˈbeɪ.kər.i", pos: "noun", ex: "There is a bakery where they make fresh bread.", exUz: "Yangi non yopadigan novvoyxona bor." },
    { en: "pharmacy", uz: "dorixona", ipa: "ˈfɑː.mə.si", pos: "noun", ex: "A pharmacy is a place where you buy medicine.", exUz: "Dorixona — dori sotib olinadigan joy." },
    { en: "stadium", uz: "stadion", ipa: "ˈsteɪ.di.əm", pos: "noun", ex: "That's the stadium where we watched the match.", exUz: "Bu — biz o'yinni tomosha qilgan stadion." },
    { en: "tool", uz: "asbob, qurol", ipa: "tuːl", pos: "noun", ex: "A hammer is a tool that you use to hit nails.", exUz: "Bolg'a — mix qoqish uchun ishlatiladigan asbob." },
    { en: "kettle", uz: "choynak (elektr)", ipa: "ˈket.əl", pos: "noun", ex: "A kettle is a thing that boils water.", exUz: "Choynak suvni qaynatadigan narsa." },
    { en: "cousin", uz: "amakivachcha, xolavachcha", ipa: "ˈkʌz.ən", pos: "noun", ex: "The boy who is wearing a blue shirt is my cousin.", exUz: "Ko'k ko'ylak kiygan bola — mening amakivachcham." },
    { en: "guest", uz: "mehmon", ipa: "ɡest", pos: "noun", ex: "The guests who arrived early are having tea.", exUz: "Erta kelgan mehmonlar choy ichishyapti." },
  ],
  practice: [
    { k: "choice", q: "**A dentist is a person ___ looks after your teeth.**", opts: ["who", "which", "where", "what"], a: 0 },
    { k: "choice", q: "**A kettle is a thing ___ boils water.**", opts: ["who", "which", "where", "what"], a: 1 },
    { k: "choice", q: "Qaysi gap **xato**?", opts: ["The book that I read was great.", "The man who lives here is a dentist.", "The cake what she made was delicious.", "The shop where I work is small."], a: 2, why: "**what** bog'lovchi emas: *The cake **that / which** she made…*" },
    { k: "fill", q: "A pharmacy is a place ___ you can buy medicine.", a: ["where"] },
    { k: "fill", q: "The woman ___ works in the bakery is very kind.", a: ["who", "that"], why: "Odam → **who** (yoki norasmiy **that**)." },
    { k: "fill", q: "This is the tool ___ my father uses.", a: ["which", "that"] },
    { k: "listen", say: "A tourist is a person who visits a place.", opts: ["A tourist is a person who visits a place.", "A tourist is a place where people visit.", "A tourist is a thing that visits people."], a: 0 },
    { k: "order", uz: "Qo'shni xonadonda yashaydigan erkak — mexanik.", words: ["The", "man", "who", "lives", "next", "door", "is", "a", "mechanic."], extra: ["which", "he"] },
    { k: "order", uz: "Mana biz o'yinni tomosha qilgan stadion.", words: ["That", "is", "the", "stadium", "where", "we", "watched", "the", "match."], extra: ["which", "what"] },
    { k: "translate", uz: "Men kecha uchrashgan ayol mening ustozim.", a: ["The woman I met yesterday is my teacher.", "The woman that I met yesterday is my teacher.", "The woman who I met yesterday is my teacher.", "The woman whom I met yesterday is my teacher."] },
    { k: "translate", uz: "Bu men ishlaydigan kafe.", a: ["This is the café where I work.", "This is the cafe where I work.", "That is the café where I work.", "That is the cafe where I work.", "That's the café where I work.", "That's the cafe where I work.", "This is the café I work in.", "This is the cafe I work in.", "This is the café that I work in.", "This is the cafe that I work in."] },
    { k: "match", pairs: [["dentist", "tish shifokori"], ["mechanic", "avtomexanik"], ["tourist", "sayyoh"], ["guest", "mehmon"], ["cousin", "amakivachcha, xolavachcha"]] },
    { k: "tf", q: "**The book what I read** — to'g'ri gap.", a: false, why: "To'g'risi: *The book **that / which** I read* yoki *The book I read*." },
    { k: "tf", q: "**The book (that) I bought** gapida **that** ni tushirib qoldirish mumkin.", a: true, why: "**that** to'ldiruvchi vazifasida — tushirsa bo'ladi." },
    { k: "speak", say: "A bakery is a place where they bake bread.", uz: "Novvoyxona — non yopiladigan joy." },
  ],
  quiz: [
    { k: "choice", q: "**The boy ___ won the race is my cousin.**", opts: ["who", "which", "where", "what"], a: 0 },
    { k: "choice", q: "**The cake ___ my mother baked was delicious.**", opts: ["who", "where", "which", "what"], a: 2 },
    { k: "choice", q: "**That's the hotel ___ we stayed last year.**", opts: ["who", "which", "what", "where"], a: 3 },
    { k: "fill", q: "A stadium is a place ___ people watch football.", a: ["where"] },
    { k: "fill", q: "A tool is something ___ you use to fix things.", a: ["that", "which"] },
    { k: "choice", q: "Qaysi gap **to'g'ri**?", opts: ["The man who he lives here is kind.", "The man who lives here is kind.", "The man what lives here is kind.", "The man where lives here is kind."], a: 1, why: "**who** o'zi ega vazifasini bajaradi — *he* kerak emas." },
    { k: "listen", say: "The guest who arrived late was my cousin.", opts: ["The guest who arrived late was my cousin.", "The guest which arrived late was my cousin.", "The guest where arrived late was my cousin."], a: 0 },
    { k: "order", uz: "Men non sotib oladigan novvoyxona uyimning yonida.", words: ["The", "bakery", "where", "I", "buy", "bread", "is", "near", "my", "house."], extra: ["which", "what"] },
    { k: "translate", uz: "Men sevgan kitob juda qiziq edi.", a: ["The book I liked was very interesting.", "The book that I liked was very interesting.", "The book which I liked was very interesting.", "The book I loved was very interesting.", "The book that I loved was very interesting.", "The book which I loved was very interesting."] },
    { k: "tf", q: "**The man that lives next door** — to'g'ri ibora.", a: true, why: "Odam uchun **that** ham ishlatiladi (norasmiyroq)." },
  ],
  summary: [
    "**who** — odamlar, **which** — narsalar, **that** — odam yoki narsa, **where** — joylar.",
    "Defining gapda vergul yo'q: *The man who lives next door is a dentist.* Ot **oldin**, tushuntirish **keyin** keladi.",
    "Xatolar: ~~the book what I read~~ → **the book (that) I read**; ~~the man who he lives~~ → **the man who lives**.",
    "To'ldiruvchi bo'lsa **that / which** ni tushirish mumkin: *The film (that) we saw was long.*",
    "Ta'rif: **A … is a person who / a thing that / a place where …**",
  ],
  homework: "Uyingizdagi 8 ta narsa yoki qarindosh haqida ta'rif yozing (*A kettle is a thing that…, My cousin is a person who…, A pharmacy is a place where…*). Keyin oilangiz bilan «Bu nima?» o'yinini inglizcha o'ynang.",
};

export default lesson;
