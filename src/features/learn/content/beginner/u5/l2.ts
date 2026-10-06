import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u5-l2",
  title: "was / were",
  titleUz: "O'tgan zamon: was / were",
  goal: "**to be** fe'lini o'tgan zamonda ishlatasiz: *I was at home. They weren't late. Where were you?* Qachon va qayerda tug'ilganingizni ayta olasiz (*I was born in…*).",
  slides: [
    {
      title: "O'tmish haqida: was / were",
      blocks: [
        { t: "p", md: "Siz **am / is / are** ni yaxshi bilasiz: *I am at home.* Endi o'tmishga qaytamiz. O'tgan zamonda ular faqat **ikki** shaklga aylanadi:\n• **am, is → was**\n• **are → were**" },
        { t: "p", md: "O'zbek tilida bu \"**edi**\" qo'shimchasiga o'xshaydi: *uyda **edim**, charchagan **edik**, yaxshi **edi***." },
        {
          t: "examples", items: [
            { en: "I am at home now. → I was at home yesterday.", uz: "Men hozir uydaman. → Men kecha uyda edim." },
            { en: "She is tired today. → She was tired yesterday.", uz: "U bugun charchagan. → U kecha charchagan edi." },
            { en: "They are at school. → They were at school last week.", uz: "Ular maktabda. → Ular o'tgan hafta maktabda edi." },
            { en: "It was sunny yesterday.", uz: "Kecha quyoshli edi." },
          ],
        },
        { t: "tip", tone: "info", md: "Bu darsda faqat **to be** ning o'tgan zamonini o'rganamiz. *play, go, eat* kabi boshqa fe'llarning o'tgan zamoni — keyingi darslarda." },
        { t: "check", ex: { k: "choice", q: "\"Kecha men charchagan edim.\"", opts: ["I am tired yesterday.", "I was tired yesterday.", "I were tired yesterday.", "I tired yesterday."], a: 1, why: "**I** → **was**. *yesterday* bilan **am** ishlatilmaydi." } },
      ],
    },
    {
      title: "Kim bilan was, kim bilan were?",
      blocks: [
        {
          t: "table", head: ["Kim", "Hozir", "O'tgan"],
          rows: [
            ["I", "am", "was"],
            ["he / she / it", "is", "was"],
            ["you", "are", "were"],
            ["we", "are", "were"],
            ["they", "are", "were"],
          ],
        },
        { t: "tip", tone: "good", md: "Oson qoida: **I, he, she, it** + **was**; **you, we, they** + **were**. Birlikdagi ot → *My father **was**…*; ko'plikdagi ot → *My parents **were**…*" },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["They were at the museum.", "You were late.", "I was hungry.", "My parents were at home."] },
          bad: { title: "Xato", items: ["They was at the museum.", "You was late.", "I were hungry.", "My parents was at home."] },
        },
        { t: "check", ex: { k: "fill", q: "My parents ___ in Bukhara last week.", a: ["were"], uz: "Ota-onam o'tgan hafta Buxoroda edi.", why: "**parents** — ko'plik → **were**." } },
      ],
    },
    {
      title: "Inkor: wasn't / weren't",
      blocks: [
        { t: "p", md: "Inkor uchun **not** qo'shamiz — xuddi *isn't, aren't* kabi:\n• **was not = wasn't**\n• **were not = weren't**" },
        {
          t: "examples", items: [
            { en: "I wasn't at home last night.", uz: "Kecha kechqurun uyda emas edim." },
            { en: "The museum wasn't open. It was closed.", uz: "Muzey ochiq emas edi. U yopiq edi." },
            { en: "We weren't late.", uz: "Biz kechikmagan edik." },
            { en: "The questions weren't difficult.", uz: "Savollar qiyin emas edi." },
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I wasn't tired.", "They weren't at the beach."] },
          bad: { title: "Xato", items: ["I not was tired.", "They not were at the beach."] },
        },
        {
          t: "sounds", items: [
            { label: "was", say: "I was at home.", uz: "Gap ichida kuchsiz: **\"wəz\"** — unli deyarli eshitilmaydi.", examples: ["I was at home."] },
            { label: "wasn't", say: "wasn't", uz: "Har doim kuchli: **\"wozənt\"** (*w* — lablar dumaloq, \"v\" emas).", examples: ["wasn't", "It wasn't sunny."] },
            { label: "were", say: "We were late.", uz: "Gap ichida kuchsiz: **\"wə\"**. Oxiridagi *r* o'qilmaydi.", examples: ["We were late."] },
            { label: "weren't", say: "weren't", uz: "**\"wö:nt\"** — cho'ziq \"ö\" ga o'xshash tovush.", examples: ["weren't", "They weren't here."] },
          ],
        },
        { t: "check", ex: { k: "listen", say: "He wasn't at the concert.", opts: ["He was at the concert.", "He wasn't at the concert.", "We weren't at the concert."], a: 1, why: "**wasn't** — \"wozənt\": u konsertda emas edi." } },
      ],
    },
    {
      title: "Savollar va qisqa javoblar",
      blocks: [
        { t: "p", md: "Savolda **was / were** egadan **oldinga** chiqadi — xuddi *Is he…? Are you…?* kabi:" },
        {
          t: "table", head: ["Savol", "Ha", "Yo'q"],
          rows: [
            ["Was I / he / she / it …?", "Yes, he was.", "No, he wasn't."],
            ["Were you / we / they …?", "Yes, they were.", "No, they weren't."],
          ],
        },
        {
          t: "examples", items: [
            { en: "Were you at home yesterday? — Yes, I was.", uz: "Kecha uyda edingizmi? — Ha." },
            { en: "Was the film good? — No, it wasn't.", uz: "Film yaxshi edimi? — Yo'q." },
            { en: "Where were you last night? — I was at a concert.", uz: "Kecha kechqurun qayerda edingiz? — Konsertda edim." },
            { en: "How was your weekend? — It was great!", uz: "Dam olish kunlaringiz qanday o'tdi? — Ajoyib!" },
          ],
        },
        { t: "tip", tone: "warn", md: "Qisqa javobda **was / were** kuchli aytiladi va qisqartirilmaydi: ✅ *Yes, I **was**.* (\"woz\") — ❌ *Yes, I'm.* ❌ *Yes, I were.*" },
        { t: "check", ex: { k: "order", uz: "Kecha qayerda edingiz?", words: ["Where", "were", "you", "yesterday"], extra: ["was"], why: "Savol so'zi + **were** + **you** + vaqt." } },
      ],
    },
    {
      title: "Vaqt iboralari va born",
      blocks: [
        {
          t: "table", head: ["Inglizcha", "O'zbekcha"],
          rows: [
            ["yesterday", "kecha"],
            ["yesterday morning", "kecha ertalab"],
            ["last night", "kecha kechqurun / kecha tunda"],
            ["last week / last year / last Monday", "o'tgan hafta / o'tgan yil / o'tgan dushanba"],
            ["two days ago", "ikki kun oldin"],
            ["at the weekend", "dam olish kunlarida"],
          ],
          speak: [0],
        },
        { t: "p", md: "**ago** — \"oldin\". Tartib xuddi o'zbekchadagidek: **son + vaqt + ago** → *three days ago* (uch kun oldin), *ten years ago* (o'n yil oldin)." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["last week", "two years ago", "I was born in 2008.", "Where were you born?"] },
          bad: { title: "Xato", items: ["the last week", "before two years / ago two years", "I born in 2008. / I am born in 2008.", "Where you born?"] },
        },
        { t: "p", md: "**born** — tug'ilgan. O'zbekcha \"tug'ilganman\" inglizchada har doim **was / were born**:\n• *I **was born** in a village near Namangan.*\n• *My parents **were born** in 1980.*" },
        { t: "check", ex: { k: "tf", q: "**I born in Tashkent.** — to'g'ri gap.", a: false, why: "**was** kerak: *I **was born** in Tashkent.*" } },
      ],
    },
    {
      title: "Dialog: dushanba ertalab",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Dilnoza", en: "Hi, Sardor! Where were you at the weekend?", uz: "Salom, Sardor! Dam olish kunlari qayerda eding?" },
            { who: "Sardor", en: "I was in my grandmother's village.", uz: "Buvimning qishlog'ida edim." },
            { who: "Dilnoza", en: "Was it nice?", uz: "Yaxshi o'tdimi?" },
            { who: "Sardor", en: "Yes, it was. The weather was warm and sunny. And you?", uz: "Ha. Havo iliq va quyoshli edi. Sen-chi?" },
            { who: "Dilnoza", en: "We were at a concert on Saturday, and on Sunday we were at the museum.", uz: "Shanba kuni konsertda edik, yakshanba kuni esa muzeyda edik." },
            { who: "Sardor", en: "Was the concert good?", uz: "Konsert yaxshi edimi?" },
            { who: "Dilnoza", en: "It was great! But it was very late, and I was tired.", uz: "Ajoyib edi! Lekin juda kech edi va men charchagan edim." },
          ],
        },
        { t: "check", ex: { k: "fill", q: "Sardor ___ in his grandmother's village.", a: ["was"], why: "**Sardor** = he → **was**." } },
      ],
    },
  ],
  words: [
    { en: "yesterday", uz: "kecha", ipa: "ˈjes.tə.deɪ", pos: "adv", ex: "I was at home yesterday.", exUz: "Kecha uyda edim." },
    { en: "last night", uz: "kecha kechqurun", ipa: "ˌlɑːst ˈnaɪt", pos: "phrase", ex: "Where were you last night?", exUz: "Kecha kechqurun qayerda edingiz?" },
    { en: "last week", uz: "o'tgan hafta", ipa: "ˌlɑːst ˈwiːk", pos: "phrase", ex: "We were in Bukhara last week.", exUz: "Biz o'tgan hafta Buxoroda edik." },
    { en: "ago", uz: "oldin", ipa: "əˈɡəʊ", pos: "adv", ex: "He was here two hours ago.", exUz: "U ikki soat oldin shu yerda edi." },
    { en: "born", uz: "tug'ilgan", ipa: "bɔːn", pos: "adj", ex: "I was born in 2006.", exUz: "Men 2006-yilda tug'ilganman." },
    { en: "museum", uz: "muzey", ipa: "mjuˈziː.əm", pos: "noun", ex: "The museum was closed.", exUz: "Muzey yopiq edi." },
    { en: "beach", uz: "plyaj, sohil", ipa: "biːtʃ", pos: "noun", ex: "We were at the beach.", exUz: "Biz plyajda edik." },
    { en: "village", uz: "qishloq", ipa: "ˈvɪl.ɪdʒ", pos: "noun", ex: "My father was born in a village.", exUz: "Otam qishloqda tug'ilgan." },
    { en: "at the weekend", uz: "dam olish kunlarida", ipa: "ət ðə ˌwiːkˈend", pos: "phrase", ex: "Were you busy at the weekend?", exUz: "Dam olish kunlari band edingizmi?" },
    { en: "concert", uz: "konsert", ipa: "ˈkɒn.sət", pos: "noun", ex: "The concert was great.", exUz: "Konsert ajoyib edi." },
  ],
  practice: [
    { k: "listen", say: "They were at the museum.", opts: ["They are at the museum.", "They were at the museum.", "They weren't at the museum."], a: 1, why: "**were** — \"wə\": ular muzeyda edi." },
    { k: "listen", say: "I was born in a village.", opts: ["I wasn't born in a village.", "I was born in a city.", "I was born in a village."], a: 2 },
    { k: "match", pairs: [["yesterday", "kecha"], ["last week", "o'tgan hafta"], ["ago", "oldin"], ["at the weekend", "dam olish kunlarida"], ["village", "qishloq"], ["beach", "plyaj, sohil"]] },
    { k: "choice", q: "We ___ at home last night.", opts: ["was", "were", "are", "wasn't"], a: 1, why: "**we** → **were**; *last night* — o'tgan zamon." },
    { k: "choice", q: "___ your brother at the concert?", opts: ["Were", "Is", "Was", "Did"], a: 2, why: "**brother** = he → **Was** your brother…?" },
    { k: "fill", q: "The museum ___ open on Monday. It was closed.", a: ["wasn't", "was not"], why: "Yopiq edi → ochiq **emas edi**: **wasn't**." },
    { k: "fill", q: "I ___ born in 2008.", a: ["was"], why: "Tug'ilgan → **was born**." },
    { k: "fill", q: "My grandparents ___ born in a small village.", a: ["were"], why: "**grandparents** — ko'plik → **were born**." },
    { k: "tf", q: "**two days ago** = ikki kun oldin", a: true, why: "Son + vaqt + **ago**." },
    { k: "choice", q: "Qaysi to'g'ri?", opts: ["before three years", "ago three years", "three years ago"], a: 2, why: "**ago** har doim oxirida: *three years **ago***." },
    { k: "choice", q: "*Were you tired?* — javobni tanlang.", opts: ["Yes, I were.", "Yes, I was.", "Yes, I am.", "Yes, I'm."], a: 1, why: "**I** → **was**: *Yes, I was.*" },
    { k: "order", uz: "Siz qayerda tug'ilgansiz?", words: ["Where", "were", "you", "born"], extra: ["did"], why: "**Where were you born?** — bu tayyor savol, yodlab oling." },
    { k: "order", uz: "Biz o'tgan hafta plyajda edik.", words: ["We", "were", "at", "the", "beach", "last", "week"], extra: ["was"] },
    { k: "translate", uz: "Kecha havo sovuq edi.", a: ["It was cold yesterday", "Yesterday it was cold", "Yesterday, it was cold", "The weather was cold yesterday"], why: "Ob-havo → **It was cold yesterday.**" },
    { k: "translate", uz: "Ular uyda emas edi.", a: ["They weren't at home", "They were not at home", "They weren't home", "They were not home"] },
    { k: "speak", say: "I was at home last night, but my brother was at a concert.", uz: "Kecha kechqurun men uyda edim, lekin akam konsertda edi." },
  ],
  quiz: [
    { k: "listen", say: "Where were you last night?", opts: ["Where are you tonight?", "Where were you last night?", "Where was he last night?"], a: 1 },
    { k: "listen", say: "It wasn't sunny at the weekend.", opts: ["It was sunny at the weekend.", "It isn't sunny this weekend.", "It wasn't sunny at the weekend."], a: 2 },
    { k: "fill", q: "___ the concert good? — Yes, it was great!", a: ["Was"], why: "**the concert** = it → **Was**." },
    { k: "fill", q: "My friends ___ at school yesterday. They were at home.", a: ["weren't", "were not"] },
    { k: "choice", q: "*Was your mother at work?*", opts: ["No, she wasn't.", "No, she weren't.", "No, she isn't.", "No, she didn't."], a: 0 },
    { k: "choice", q: "\"Kecha kechqurun\" inglizcha:", opts: ["tonight", "the last night", "last night", "night ago"], a: 2 },
    { k: "translate", uz: "Men 2007-yilda tug'ilganman.", a: ["I was born in 2007"], why: "**I was born in** + yil." },
    { k: "translate", uz: "Muzey yopiq edi.", a: ["The museum was closed", "The museum wasn't open", "The museum was not open"] },
    { k: "order", uz: "Bir hafta oldin biz qishloqda edik.", words: ["We", "were", "in", "the", "village", "a", "week", "ago"], extra: ["was", "last"] },
    { k: "tf", q: "**You was late.** — to'g'ri gap.", a: false, why: "**you** bilan doim **were**: *You **were** late.*" },
  ],
  summary: [
    "**am / is → was**, **are → were**: *I was, he was, we were, they were.*",
    "Inkor: **wasn't / weren't**. Savol: **Was he…? Were you…?** — *Yes, I was. / No, they weren't.*",
    "Tug'ilgan joy va yil: **I was born in…** (*I born* ❌).",
    "Vaqt: **yesterday, last night, last week, at the weekend**, son + **ago** (*two days ago*).",
  ],
  homework: "O'zingiz haqingizda 5 ta gap yozing: qachon va qayerda tug'ilgansiz, kecha, o'tgan dushanba va bir yil oldin qayerda edingiz (*I was born in… Yesterday I was…*). Keyin oila a'zolaringiz haqida **were** bilan 2 ta gap qo'shing.",
};

export default lesson;
