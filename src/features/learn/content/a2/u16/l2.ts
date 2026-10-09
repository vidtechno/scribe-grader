import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u16-l2",
  title: "For and since",
  titleUz: "For va since: how long?",
  goal: "**How long have you lived here?** savoliga **for** (*for ten years*) va **since** (*since 2015*) bilan javob berasiz va **I live here since 2020** degan mashhur xatoni qilmaysiz.",
  slides: [
    {
      title: "How long ...? — qancha vaqtdan beri?",
      blocks: [
        { t: "p", md: "O'zbekchada «Qancha vaqtdan beri shu yerda yashaysiz?» deymiz va fe'l **hozirgi** zamonda turadi. Inglizchada esa ish **o'tmishda boshlangan va hozirgacha davom etayotgan** bo'lsa, **Present Perfect** ishlatiladi:" },
        {
          t: "examples", items: [
            { en: "How long have you lived here?", uz: "Qancha vaqtdan beri shu yerda yashaysiz?" },
            { en: "I've lived here for ten years.", uz: "Men o'n yildan beri shu yerda yashayman." },
            { en: "How long has she worked at the bank?", uz: "U qancha vaqtdan beri bankda ishlaydi?" },
            { en: "How long have you known Aziz?", uz: "Azizni qancha vaqtdan beri bilasiz?" },
          ],
        },
        { t: "tip", tone: "warn", md: "*How long do you live here?* — xato. Davom etayotgan holat uchun inglizchada hozirgi zamon emas, **have / has + V3** kerak." },
        { t: "check", ex: { k: "choice", q: "**How long ___ in Tashkent?**", opts: ["do you live", "have you lived", "are you live", "did you lived"], a: 1, why: "Davom etayotgan holat → **have you lived**." } },
      ],
    },
    {
      title: "for yoki since?",
      blocks: [
        { t: "p", md: "Javobda ikkita so'z kerak bo'ladi. Farqi juda oddiy: **for** — *qancha davom etdi* (muddat), **since** — *qachondan boshlandi* (boshlanish nuqtasi)." },
        {
          t: "table", head: ["", "for + muddat", "since + boshlanish vaqti"], speak: [1, 2],
          rows: [
            ["Ma'nosi", "necha vaqt davomida", "qaysi paytdan beri"],
            ["Misollar", "for two years", "since 2019"],
            ["", "for ten minutes", "since Monday"],
            ["", "for a long time", "since 8 o'clock"],
            ["", "for ages (juda uzoq)", "since last summer"],
            ["", "for three weeks", "since I was a child"],
          ],
        },
        { t: "tip", tone: "good", md: "Savol bering: javob **raqam + vaqt birligi** (*two years, ten minutes*) bo'lsa — **for**. Javob **sana, kun yoki voqea** (*2019, Monday, last summer*) bo'lsa — **since**." },
        { t: "check", ex: { k: "fill", q: "I've known Kamol ___ 2015.", a: ["since"], why: "**2015** — boshlanish nuqtasi → **since**." } },
        { t: "check", ex: { k: "choice", q: "**She has been ill ___ three days.**", opts: ["since", "for", "from", "ago"], a: 1, why: "**three days** — muddat → **for**." } },
      ],
    },
    {
      title: "Uch asosiy xato",
      blocks: [
        { t: "p", md: "O'zbek tilida «2020-yildan beri yashayman» deymiz, shuning uchun o'quvchilar ko'pincha ikki xatoni qilishadi: **hozirgi zamon** ishlatishadi va **since / for** ni aralashtirishadi." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I have lived here since 2020.", "She has worked here for two years.", "We have been friends for ages.", "I haven't seen him since Friday."] },
          bad: { title: "Xato", items: ["I live here since 2020.", "She works here for two years.", "We are friends for ages.", "I don't see him since Friday."] },
        },
        { t: "tip", tone: "warn", md: "**since two years** — xato, **since** dan keyin muddat emas, vaqt nuqtasi keladi. To'g'ri: **for two years** yoki **since 2023**." },
        { t: "tip", tone: "info", md: "**ago** bilan Present Perfect ishlatilmaydi. *I have lived here two years ago* — xato. Yo *I moved here two years ago* (Past Simple), yo *I've lived here for two years*." },
        { t: "check", ex: { k: "choice", q: "Qaysi gap **to'g'ri**?", opts: ["I am a teacher since 2018.", "I have been a teacher since 2018.", "I was a teacher since 2018.", "I have been a teacher for 2018."], a: 1, why: "**since 2018** + Present Perfect: *have been*." } },
      ],
    },
    {
      title: "since + gap va for + Past Simple",
      blocks: [
        { t: "p", md: "**since** dan keyin nafaqat sana, balki **kichik gap** ham kelishi mumkin. Bu gapdagi fe'l **Past Simple** da turadi:" },
        {
          t: "examples", items: [
            { en: "I've lived here since I was ten.", uz: "Men o'n yoshimdan beri shu yerda yashayman." },
            { en: "We've been friends since we met at school.", uz: "Biz maktabda tanishganimizdan beri do'stmiz." },
            { en: "She has studied English since September.", uz: "U sentabrdan beri ingliz tilini o'rganadi." },
          ],
        },
        { t: "p", md: "Endi eng muhim farq. **for** Past Simple bilan ham kelishi mumkin — lekin ma'no butunlay boshqacha:" },
        {
          t: "table", head: ["Gap", "Ma'nosi", "Hozir?"], speak: [0],
          rows: [
            ["I have lived in Samarkand for two years.", "Samarqandda ikki yildan beri yashayman.", "Hozir ham yashayman."],
            ["I lived in Bukhara for two years.", "Buxoroda ikki yil yashaganman.", "Endi yashamayman — tugagan."],
          ],
        },
        { t: "tip", tone: "info", md: "Present Perfect + for/since = **hozir ham davom etadi**. Past Simple + for = **tugagan davr**." },
        { t: "check", ex: { k: "order", uz: "Biz o'n yildan beri qo'shnimiz.", words: ["We", "have", "been", "neighbours", "for", "ten", "years."], extra: ["since", "are"] } },
        { t: "check", ex: { k: "tf", q: "**He worked here for five years.** = U hali ham shu yerda ishlaydi.", a: false, why: "Past Simple + for = ish tugagan. Hali ishlasa: *He has worked here for five years.*" } },
      ],
    },
    {
      title: "O'qing: Dilnozaning hikoyasi",
      blocks: [
        {
          t: "text", title: "Dilnoza's story",
          en: "Dilnoza lives in Tashkent now, but she was born in a small village near Bukhara. She lived there until she was eighteen. She has lived in Tashkent since 2018, and she has worked at a travel agency for four years. She has known her best friend, Madina, since they were at university. They have shared a flat for two years, but they haven't had a holiday together since last summer. \"We have wanted to visit Samarkand for ages,\" says Dilnoza. \"Now we have finally saved enough money, and we are buying tickets this week!\"",
          uz: "Dilnoza hozir Toshkentda yashaydi, lekin u Buxoro yaqinidagi kichik qishloqda tug'ilgan. U o'sha yerda o'n sakkiz yoshigacha yashagan. U 2018-yildan beri Toshkentda yashaydi va to'rt yildan beri sayohat agentligida ishlaydi. Eng yaqin do'sti Madinani universitetda o'qiyotgan paytlaridan beri taniydi. Ular ikki yildan beri bir kvartirani ijaraga olishgan, lekin o'tgan yozdan beri birga dam olmagan. \"Samarqandga borishni anchadan beri xohlab yuribmiz,\" deydi Dilnoza. \"Endi nihoyat yetarli pul yig'dik va shu hafta chipta olyapmiz!\"",
        },
        { t: "check", ex: { k: "choice", q: "How long has Dilnoza worked at the travel agency?", opts: ["Since 2018.", "For four years.", "For two years.", "Since last summer."], a: 1, why: "*she has worked at a travel agency **for four years***." } },
        { t: "check", ex: { k: "tf", q: "Dilnoza lives in Bukhara now.", a: false, why: "U Buxoro yaqinida tug'ilgan, lekin hozir **Toshkentda** yashaydi." } },
      ],
    },
    {
      title: "Dialog: choyxonada uchrashuv",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Aziz", en: "Kamol! I haven't seen you for ages!", uz: "Kamol! Seni ko'rmaganimga ancha bo'ldi!" },
            { who: "Kamol", en: "Hi, Aziz! Where have you been?", uz: "Salom, Aziz! Qayerda eding?" },
            { who: "Aziz", en: "I've been in Samarkand. I moved there last year.", uz: "Samarqandda edim. O'tgan yili u yerga ko'chib o'tdim." },
            { who: "Kamol", en: "Really? How long have you worked there?", uz: "Rostdanmi? U yerda qancha vaqtdan beri ishlaysan?" },
            { who: "Aziz", en: "For nine months. I've worked in a hotel since January.", uz: "To'qqiz oydan beri. Yanvardan beri mehmonxonada ishlayman." },
            { who: "Kamol", en: "Do you like it?", uz: "Yoqadimi?" },
            { who: "Aziz", en: "Very much. And you? Are you still in the same flat?", uz: "Juda. O'zing-chi? Hali ham o'sha kvartirada turasanmi?" },
            { who: "Kamol", en: "Yes, I've lived here all my life!", uz: "Ha, butun umrim shu yerda o'tgan!" },
          ],
        },
        { t: "check", ex: { k: "choice", q: "How long has Aziz worked in the hotel?", opts: ["Since last year.", "Since January.", "For ten years.", "For two weeks."], a: 1, why: "*I've worked in a hotel **since January**.* (Shuningdek *for nine months*.)" } },
      ],
    },
  ],
  words: [
    { en: "move house", uz: "ko'chib o'tmoq", ipa: "muːv haʊs", pos: "phrase", ex: "We moved house last year.", exUz: "Biz o'tgan yili boshqa uyga ko'chib o'tdik." },
    { en: "neighbour", uz: "qo'shni", ipa: "ˈneɪ.bər", pos: "noun", ex: "My neighbour has lived here for thirty years.", exUz: "Qo'shnim o'ttiz yildan beri shu yerda yashaydi." },
    { en: "colleague", uz: "hamkasb", ipa: "ˈkɒl.iːɡ", pos: "noun", ex: "I've known my colleague since 2017.", exUz: "Hamkasbimni 2017-yildan beri bilaman." },
    { en: "member", uz: "a'zo", ipa: "ˈmem.bər", pos: "noun", ex: "She has been a member of the club for two years.", exUz: "U ikki yildan beri klub a'zosi." },
    { en: "grow up", uz: "katta bo'lmoq, ulg'ayib voyaga yetmoq", ipa: "ɡrəʊ ʌp", pos: "phrase", ex: "I grew up in a small village.", exUz: "Men kichik qishloqda ulg'aydim." },
    { en: "own", uz: "egalik qilmoq", ipa: "əʊn", pos: "verb", ex: "He has owned this shop since 2010.", exUz: "U bu do'konga 2010-yildan beri egalik qiladi." },
    { en: "friendship", uz: "do'stlik", ipa: "ˈfrend.ʃɪp", pos: "noun", ex: "Our friendship has lasted for years.", exUz: "Bizning do'stligimiz yillar davom etdi." },
    { en: "for ages", uz: "juda uzoq vaqt, anchadan beri", ipa: "fɔːr ˈeɪ.dʒɪz", pos: "phrase", ex: "I haven't seen you for ages!", exUz: "Seni ko'rmaganimga ancha bo'ldi!" },
    { en: "club", uz: "klub", ipa: "klʌb", pos: "noun", ex: "I've been in the chess club since September.", exUz: "Men sentabrdan beri shaxmat klubidaman." },
    { en: "since then", uz: "o'shandan beri", ipa: "sɪns ðen", pos: "phrase", ex: "We met in 2016 and have been friends since then.", exUz: "Biz 2016-yilda tanishganmiz va o'shandan beri do'stmiz." },
  ],
  practice: [
    { k: "choice", q: "**How long ___ in this city?**", opts: ["do you live", "have you lived", "did you lived", "you have lived"], a: 1, why: "**How long have you lived…?**" },
    { k: "choice", q: "**I've known her ___ five years.**", opts: ["since", "for", "ago", "from"], a: 1, why: "**five years** — muddat → **for**." },
    { k: "fill", q: "We've been friends ___ 2016.", a: ["since"], why: "**2016** — sana → **since**." },
    { k: "fill", q: "He hasn't called me ___ Monday.", a: ["since"] },
    { k: "fill", q: "They have lived here ___ ten years.", a: ["for"] },
    { k: "listen", say: "I have lived here for three years.", opts: ["I have lived here for three years.", "I lived here three years ago.", "I have lived here since three years."], a: 0 },
    { k: "tf", q: "**I live here since 2020.** — bu gap to'g'ri.", a: false, why: "To'g'risi: *I have lived here since 2020.*" },
    { k: "tf", q: "**for** + muddat (*two years*), **since** + boshlanish nuqtasi (*2019*).", a: true },
    { k: "order", uz: "U yanvardan beri shu yerda ishlaydi.", words: ["She", "has", "worked", "here", "since", "January."], extra: ["for", "works"] },
    { k: "order", uz: "Qancha vaqtdan beri ingliz tilini o'rganasiz?", words: ["How", "long", "have", "you", "studied", "English?"], extra: ["do", "did"] },
    { k: "translate", uz: "Men Aziz bilan ikki yildan beri do'stman.", a: ["I have been friends with Aziz for two years.", "I've been friends with Aziz for two years.", "Aziz and I have been friends for two years."] },
    { k: "translate", uz: "Siz qancha vaqtdan beri bu yerda ishlaysiz?", a: ["How long have you worked here?", "How long have you been working here?"] },
    { k: "match", pairs: [["for two weeks", "ikki hafta davomida"], ["since Monday", "dushanbadan beri"], ["for ages", "juda uzoq vaqt"], ["since 2019", "2019-yildan beri"], ["since I was ten", "o'n yoshimdan beri"]] },
    { k: "choice", q: "**I lived in Bukhara for two years.** Bu gap nimani anglatadi?", opts: ["Hozir ham Buxoroda yashayman.", "Endi Buxoroda yashamayman.", "Buxoroga ikki yildan keyin boraman.", "Buxoroda ikki yil yashayman (hali davom etadi)."], a: 1, why: "Past Simple + for = tugagan davr." },
    { k: "speak", say: "I have lived in Tashkent for ten years.", uz: "Men o'n yildan beri Toshkentda yashayman." },
  ],
  quiz: [
    { k: "choice", q: "**Laylo has had this phone ___ last year.**", opts: ["for", "since", "ago", "from"], a: 1, why: "**last year** — vaqt nuqtasi → **since**." },
    { k: "choice", q: "**How long ___ English?**", opts: ["do you study", "have you studied", "did you studied", "you have studied"], a: 1 },
    { k: "choice", q: "Qaysi gap **xato**?", opts: ["I've worked here for a year.", "She has lived here since May.", "We have known him since three years.", "They have been married for ages."], a: 2, why: "**since** dan keyin muddat emas, vaqt nuqtasi keladi: *for three years*." },
    { k: "fill", q: "We haven't had a holiday ___ two years.", a: ["for"] },
    { k: "fill", q: "She has been a teacher ___ 2015.", a: ["since"] },
    { k: "fill", q: "My grandfather moved here thirty years ago. = He has lived here ___ thirty years.", a: ["for"] },
    { k: "listen", say: "How long has he lived here?", opts: ["How long has he lived here?", "How long did he live here?", "How long does he live here?"], a: 0 },
    { k: "order", uz: "Biz o'n yildan beri qo'shnimiz.", words: ["We", "have", "been", "neighbours", "for", "ten", "years."], extra: ["since", "are"] },
    { k: "translate", uz: "U 2020-yildan beri Toshkentda yashaydi.", a: ["He has lived in Tashkent since 2020.", "He's lived in Tashkent since 2020.", "She has lived in Tashkent since 2020.", "She's lived in Tashkent since 2020."] },
    { k: "tf", q: "**She worked here for five years.** = U hali ham shu yerda ishlaydi.", a: false, why: "Past Simple + for = tugagan." },
  ],
  summary: [
    "Davom etayotgan holat uchun: **How long have you lived here?** (Present Perfect), hozirgi zamon emas.",
    "**for** + muddat (*two years, ten minutes, ages*); **since** + boshlanish nuqtasi (*2019, Monday, I was ten*).",
    "Xatolar: *I live here since 2020* ❌ → **I have lived here since 2020** ✅. *since two years* ❌ → **for two years**.",
    "**ago** Present Perfect bilan ishlatilmaydi: *I moved here two years ago* yoki *I've lived here for two years*.",
    "Past Simple + for = tugagan davr: *I lived in Bukhara for two years* (endi yashamayman).",
  ],
  homework: "O'zingiz haqingizda 6 ta gap yozing: 3 tasi **for** bilan, 3 tasi **since** bilan (*I have lived in … for…, I have known … since…, I have had my phone for…*). Keyin oila a'zongizdan *How long have you…?* deb 3 ta savol so'rab, javoblarini yozing.",
};

export default lesson;
