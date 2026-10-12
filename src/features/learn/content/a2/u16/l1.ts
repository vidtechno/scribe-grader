import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u16-l1",
  title: "Present Perfect or Past Simple?",
  titleUz: "Present Perfect yoki Past Simple?",
  goal: "**Present Perfect** (*I've been to Khiva*) va **Past Simple** (*I went to Khiva last year*) farqini tushunasiz, **ever, never, just, already, yet** so'zlarini to'g'ri joyga qo'yasiz va **I have seen him yesterday** kabi mashhur xatodan qochasiz.",
  slides: [
    {
      title: "Ikki zamon, ikki fikr",
      blocks: [
        { t: "p", md: "Elementary darajada ikkala zamonni ham o'rgandingiz. Endi asosiy savol: **qaysi birini qachon ishlatamiz?** Javob oddiy: o'tgan ish haqida gapirganda **vaqt aniqmi yoki yo'qmi** — shunga qarang." },
        {
          t: "table", head: ["", "Present Perfect", "Past Simple"],
          rows: [
            ["Shakl", "have / has + V3", "V2 (*visited, went*)"],
            ["Vaqt", "Vaqt aytilmaydi yoki hozirgacha bo'lgan davr", "Tugagan, aniq vaqt"],
            ["Asosiy fikr", "Tajriba, yangilik, hozirga aloqasi bor ish", "Tugagan voqea haqida hikoya"],
            ["Misol", "I've been to Khiva.", "I went to Khiva in 2022."],
            ["Savol", "Have you ever been to Khiva?", "When did you go to Khiva?"],
          ],
        },
        { t: "tip", tone: "info", md: "Oddiy qoida: agar gapda **aniq o'tgan vaqt** (*yesterday, last year, in 2022, two days ago*) bo'lsa — faqat **Past Simple**. Aniq vaqt yo'q va gap tajriba yoki natija haqida bo'lsa — **Present Perfect**." },
        { t: "check", ex: { k: "choice", q: "Qaysi gapda **Present Perfect** kerak?", opts: ["I ___ to Khiva in 2022.", "I ___ to Khiva three times.", "We ___ there last summer.", "She ___ there two years ago."], a: 1, why: "*three times* — aniq vaqt emas, tajriba. Qolgan uchtasida aniq o'tgan vaqt bor → Past Simple." } },
      ],
    },
    {
      title: "ever, never, just, already, yet",
      blocks: [
        { t: "p", md: "Bu beshta so'z **Present Perfect** ning doimiy hamrohlari. Ular aniq vaqt emas, shuning uchun Past Simple bilan kam ishlatiladi." },
        {
          t: "table", head: ["So'z", "Ma'nosi", "Qayerda turadi", "Misol"], speak: [3],
          rows: [
            ["ever", "hech (savolda)", "have + ega + ever + V3", "Have you ever eaten sushi?"],
            ["never", "hech qachon", "have + never + V3", "I've never eaten sushi."],
            ["just", "hozirgina", "have + just + V3", "She has just left."],
            ["already", "allaqachon", "have + already + V3", "We've already finished."],
            ["yet", "hali (so'roq va inkorda)", "gap oxirida", "Have you finished yet? / I haven't finished yet."],
          ],
        },
        { t: "tip", tone: "warn", md: "**yet** darak gapda ishlatilmaydi. *I've finished yet* — xato. Darakda **already** deymiz: *I've already finished.* Inkorda **yet** (*hali emas*), savolda ham **yet** (*endi tugatdingmi?*)." },
        { t: "check", ex: { k: "fill", q: "I haven't done my homework ___.", a: ["yet"], why: "Inkor gapda gap oxirida **yet** — *hali qilmadim*." } },
        { t: "check", ex: { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["I have yet seen that film.", "I've never seen that film.", "I've ever seen that film.", "I have already not seen that film."], a: 1, why: "**never** = hech qachon; *I've never seen it* — to'g'ri. *ever* faqat savolda yoki *the best … ever* kabi qolipda keladi." } },
      ],
    },
    {
      title: "Aniq vaqt bo'lsa — Past Simple",
      blocks: [
        { t: "p", md: "Quyidagi so'zlar ish **tugagan va aniq vaqtda bo'lganini** bildiradi. Ular bilan **faqat Past Simple** ishlatiladi:" },
        {
          t: "examples", items: [
            { en: "I met Dilnoza yesterday.", uz: "Men Dilnoza bilan kecha uchrashdim." },
            { en: "We went to Bukhara last month.", uz: "Biz o'tgan oy Buxoroga bordik." },
            { en: "He left two hours ago.", uz: "U ikki soat oldin ketdi.", note: "**ago** doim Past Simple bilan." },
            { en: "She was born in 1998.", uz: "U 1998-yilda tug'ilgan." },
            { en: "When did you arrive?", uz: "Qachon yetib keldingiz?", note: "**When** bilan so'ralgan savol — doim Past Simple." },
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I saw him yesterday.", "When did you buy this phone?", "We moved here three years ago."] },
          bad: { title: "Xato", items: ["I have seen him yesterday.", "When have you bought this phone?", "We have moved here three years ago."] },
        },
        { t: "tip", tone: "warn", md: "O'zbekchada «kecha ko'rganman» desak bo'ladi, shuning uchun *I have seen him yesterday* deb yuborasiz. Inglizchada **yesterday, last…, ago, in 2020, when** bor joyda **have** ni olib tashlang." },
        { t: "check", ex: { k: "choice", q: "Kamol o'tgan yili Samarqandga bordi.", opts: ["Kamol has gone to Samarkand last year.", "Kamol went to Samarkand last year.", "Kamol has been to Samarkand last year.", "Kamol goes to Samarkand last year."], a: 1, why: "**last year** — aniq o'tgan vaqt → Past Simple: **went**." } },
      ],
    },
    {
      title: "Ikkalasini birga ishlatish",
      blocks: [
        { t: "p", md: "Odatda suhbat **Present Perfect** bilan boshlanadi (tajriba bor-yo'qligini so'raymiz), keyin tafsilotlarni so'raganda yoki aytganda **Past Simple** ga o'tamiz:" },
        {
          t: "examples", items: [
            { en: "Have you ever been to Samarkand? — Yes, I have. I went there last spring.", uz: "Samarqandda bo'lganmisiz? — Ha. O'tgan bahorda bordim.", note: "Birinchi gap — tajriba. Ikkinchisi — aniq vaqt." },
            { en: "I've lost my keys. I left them on the bus.", uz: "Kalitlarimni yo'qotdim. Avtobusda qoldirib ketdim.", note: "Yangilik + sababi." },
            { en: "Have you seen the new film? — Yes, I saw it on Saturday.", uz: "Yangi filmni ko'rdingmi? — Ha, shanba kuni ko'rdim." },
          ],
        },
        { t: "tip", tone: "good", md: "Formula: **Have you ever…?** (tajriba) → **Yes, I have.** → **When / Where / Who with … did you…?** (tafsilot, Past Simple)." },
        { t: "check", ex: { k: "fill", q: "Have you ever been to Turkey? — Yes, I have. I ___ there in 2021. (go)", a: ["went"], why: "*in 2021* — aniq vaqt → Past Simple." } },
        { t: "check", ex: { k: "choice", q: "**Has she finished her work?** — **Yes, she ___ it an hour ago.**", opts: ["has finished", "finished", "finishes", "has been finished"], a: 1, why: "**an hour ago** → Past Simple." } },
      ],
    },
    {
      title: "O'qing: Laylo sayohatchi",
      blocks: [
        {
          t: "text", title: "Laylo loves to travel",
          en: "Laylo has travelled a lot. She has been to Turkey, Georgia and Kazakhstan, but she has never been to Japan. Last summer she went to Istanbul with her sister. They stayed in a small hotel near the sea and visited the Blue Mosque. Laylo has also tried many new foods. She has eaten fish soup, but she hasn't tried sushi yet. Yesterday she booked a ticket to Seoul! She has just paid for it, and she has already started to learn Korean words. \"I haven't packed my bag yet,\" she says, \"but I'm very excited!\"",
          uz: "Laylo ko'p sayohat qilgan. U Turkiya, Gruziya va Qozog'istonda bo'lgan, lekin hech qachon Yaponiyada bo'lmagan. O'tgan yozda u opasi bilan Istanbulga bordi. Ular dengiz yaqinidagi kichik mehmonxonada qolishdi va Ko'k masjidni ko'rishdi. Laylo ko'p yangi taomlarni ham tatib ko'rgan. U baliq sho'rvasini yegan, lekin sushini hali tatimagan. Kecha u Seulga chipta band qildi! Hozirgina pulini to'ladi va allaqachon koreys so'zlarini o'rgana boshladi. \"Sumkamni hali yig'maganman,\" deydi u, \"lekin juda xursandman!\"",
        },
        { t: "check", ex: { k: "tf", q: "Laylo has visited Seoul.", a: false, why: "U Seulga faqat **chipta band qildi** (*booked a ticket*). Hali bormagan." } },
        { t: "check", ex: { k: "choice", q: "Why does the text say **went** in \"Last summer she went to Istanbul\"?", opts: ["Because it is a finished time (last summer).", "Because Istanbul is far away.", "Because she has never been there.", "Because it is a question."], a: 0, why: "**Last summer** — aniq o'tgan vaqt, shuning uchun Past Simple." } },
      ],
    },
    {
      title: "Dialog: Samarqand rejasi",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Aziz", en: "Have you ever been to Samarkand, Kamol?", uz: "Kamol, Samarqandda bo'lganmisan?" },
            { who: "Kamol", en: "Yes, I have. I went there with my family last spring.", uz: "Ha. O'tgan bahorda oilam bilan borganman." },
            { who: "Aziz", en: "Did you like it?", uz: "Yoqdimi?" },
            { who: "Kamol", en: "Very much! We visited the Registan and ate delicious plov.", uz: "Juda! Registonni ko'rdik va mazali palov yedik." },
            { who: "Aziz", en: "I haven't been there yet. I want to go in May.", uz: "Men hali u yerda bo'lmaganman. Mayda bormoqchiman." },
            { who: "Kamol", en: "Have you bought tickets yet?", uz: "Chiptalarni oldingmi hali?" },
            { who: "Aziz", en: "Not yet, but I've just checked the train times.", uz: "Hali yo'q, lekin hozirgina poyezd vaqtlarini ko'rdim." },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Aziz has already bought the tickets.", a: false, why: "U *Not yet* dedi — chiptalarni hali olmagan." } },
      ],
    },
  ],
  words: [
    { en: "experience", uz: "tajriba", ipa: "ɪkˈspɪə.ri.əns", pos: "noun", ex: "Travelling is a great experience.", exUz: "Sayohat qilish ajoyib tajribadir." },
    { en: "adventure", uz: "sarguzasht", ipa: "ədˈven.tʃər", pos: "noun", ex: "Our trip to the mountains was a real adventure.", exUz: "Tog'larga safarimiz haqiqiy sarguzasht bo'ldi." },
    { en: "abroad", uz: "chet elda, chet elga", ipa: "əˈbrɔːd", pos: "adv", ex: "Have you ever lived abroad?", exUz: "Hech chet elda yashaganmisiz?" },
    { en: "recently", uz: "yaqinda, so'nggi paytlarda", ipa: "ˈriː.sənt.li", pos: "adv", ex: "I've recently started a new course.", exUz: "Yaqinda yangi kursni boshladim." },
    { en: "so far", uz: "hozirgacha, shu paytgacha", ipa: "səʊ fɑː", pos: "phrase", ex: "So far I've visited five countries.", exUz: "Hozirgacha beshta mamlakatda bo'lganman." },
    { en: "once", uz: "bir marta", ipa: "wʌns", pos: "adv", ex: "I've been to Moscow once.", exUz: "Moskvada bir marta bo'lganman." },
    { en: "twice", uz: "ikki marta", ipa: "twaɪs", pos: "adv", ex: "She has seen this film twice.", exUz: "U bu filmni ikki marta ko'rgan." },
    { en: "journey", uz: "yo'l, safar", ipa: "ˈdʒɜː.ni", pos: "noun", ex: "The journey to Tashkent takes three hours.", exUz: "Toshkentgacha yo'l uch soat oladi." },
    { en: "souvenir", uz: "esdalik sovg'a", ipa: "ˌsuː.vəˈnɪər", pos: "noun", ex: "I bought a small souvenir in Bukhara.", exUz: "Buxoroda kichik esdalik sovg'a sotib oldim." },
    { en: "lucky", uz: "omadli", ipa: "ˈlʌk.i", pos: "adj", ex: "You are lucky to have such a friend.", exUz: "Shunday do'sting borligi sening omading." },
  ],
  practice: [
    { k: "choice", q: "**I ___ my keys yesterday.**", opts: ["have lost", "lost", "have losed", "was lost"], a: 1, why: "**yesterday** → Past Simple: **lost**." },
    { k: "choice", q: "**When ___ your brother start university?**", opts: ["has", "did", "have", "does"], a: 1, why: "**When** bilan savol → Past Simple: *did … start*." },
    { k: "listen", say: "I haven't finished my homework yet.", opts: ["I haven't finished my homework yet.", "I've just finished my homework.", "I didn't finish my homework yesterday."], a: 0 },
    { k: "fill", q: "Have you finished your homework ___?", a: ["yet"], why: "Savolda gap oxirida **yet**." },
    { k: "fill", q: "We're not hungry. We've ___ eaten.", a: ["already", "just"], why: "**already** (allaqachon) yoki **just** (hozirgina) — ikkalasi ham mantiqan to'g'ri." },
    { k: "fill", q: "She ___ to Dubai in 2022. (go)", a: ["went"], why: "**in 2022** — aniq vaqt → Past Simple." },
    { k: "order", uz: "Men hech qachon suši yemaganman.", words: ["I", "have", "never", "eaten", "sushi."], extra: ["ate", "ever"], alt: [["I've", "never", "eaten", "sushi."]] },
    { k: "order", uz: "Kecha kechqurun filmni ko'rdingmi?", words: ["Did", "you", "see", "the", "film", "last", "night?"], extra: ["have", "saw"] },
    { k: "translate", uz: "Men hech qachon Yaponiyada bo'lmaganman.", a: ["I have never been to Japan.", "I've never been to Japan."] },
    { k: "translate", uz: "Biz o'tgan yili Buxoroga bordik.", a: ["We went to Bukhara last year.", "Last year we went to Bukhara."] },
    { k: "match", pairs: [["ever", "hech (savolda)"], ["never", "hech qachon"], ["already", "allaqachon"], ["yet", "hali (inkor/savolda)"], ["just", "hozirgina"]] },
    { k: "tf", q: "**I have seen him yesterday.** — bu gap to'g'ri.", a: false, why: "**yesterday** bilan Past Simple: *I saw him yesterday.*" },
    { k: "tf", q: "**yet** odatda inkor va so'roq gaplarda, gap oxirida keladi.", a: true, why: "*I haven't finished yet. Have you finished yet?*" },
    { k: "speak", say: "I've never been to London, but I went to Istanbul last summer.", uz: "Men hech Londonda bo'lmaganman, lekin o'tgan yozda Istanbulga borganman." },
  ],
  quiz: [
    { k: "choice", q: "**She ___ to Paris in 2019.**", opts: ["has been", "went", "has gone", "goes"], a: 1, why: "**in 2019** — aniq vaqt → Past Simple." },
    { k: "choice", q: "**___ you ever ridden a camel?**", opts: ["Did", "Have", "Do", "Are"], a: 1, why: "Tajriba haqida savol: **Have you ever…?**" },
    { k: "choice", q: "\"Kecha men Dilnoza bilan gaplashdim.\"", opts: ["I have spoken to Dilnoza yesterday.", "I spoke to Dilnoza yesterday.", "I speak to Dilnoza yesterday.", "I have speak to Dilnoza yesterday."], a: 1, why: "**yesterday** → Past Simple." },
    { k: "fill", q: "I haven't seen that film ___.", a: ["yet"] },
    { k: "fill", q: "We ___ Bukhara two years ago. (visit)", a: ["visited"], why: "**ago** → Past Simple." },
    { k: "fill", q: "Be quiet! The baby has ___ fallen asleep.", a: ["just", "already"], why: "**just** (hozirgina) yoki **already** — ikkalasi ham mumkin." },
    { k: "listen", say: "When did you arrive?", opts: ["When did you arrive?", "When have you arrived?", "Where did you arrive?"], a: 0 },
    { k: "tf", q: "**I've never been to London** — bu gap hech qachon Londonda bo'lmaganimni bildiradi.", a: true },
    { k: "order", uz: "U chiptalarni allaqachon band qilgan.", words: ["She", "has", "already", "booked", "the", "tickets."], extra: ["did", "book"], alt: [["She's", "already", "booked", "the", "tickets."]] },
    { k: "translate", uz: "Siz hech Samarqandda bo'lganmisiz?", a: ["Have you ever been to Samarkand?", "Have you ever been to Samarqand?"] },
  ],
  summary: [
    "**Present Perfect** (*have / has + V3*): tajriba, yangilik, hozirga aloqasi bor ish — **vaqt aytilmaydi**.",
    "**Past Simple**: aniq tugagan vaqt — *yesterday, last week, in 2020, two days ago*. **When** bilan savol ham Past Simple.",
    "**ever, never, just, already, yet** — Present Perfect so'zlari: *Have you ever…? I've never… She's just… We've already… Not yet.*",
    "Xato: ~~I have seen him yesterday~~. To'g'risi: **I saw him yesterday.**",
    "Suhbat: *Have you ever been to…? — Yes, I have. I went there last…*",
  ],
  homework: "O'zingiz haqingizda 5 ta tajriba gapini yozing (*I've been to…, I've never…, I've just…*). Har biriga Past Simple bilan bitta tafsilot qo'shing (*I went there in…, I saw…*). Keyin do'stingizga 3 ta *Have you ever…?* savolini bering.",
};

export default lesson;
