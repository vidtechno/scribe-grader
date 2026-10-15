import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u18-l5",
  title: "Life events and milestones",
  titleUz: "Hayot voqealari: get married, move house, graduate, retire",
  goal: "Hayotdagi asosiy voqealarni (**graduate, get engaged, get married, move house, get a promotion, retire**) to'g'ri fe'l va predlog bilan aytasiz hamda ularni **Past Simple** (*I graduated in 2018*) va **Present Perfect** (*I've been married for five years*) bilan to'g'ri bog'laysiz.",
  slides: [
    {
      title: "Hayotning katta voqealari",
      blocks: [
        { t: "p", md: "Odamlar bir-biri bilan tanishganda ko'pincha hayot yo'li haqida gaplashadi: qayerda o'sgan, qayerda o'qigan, qayerda ishlaydi. Buning uchun **hayot voqealari** (*life events*) ni ingliz tilida aytishni bilish kerak. Bunday muhim voqea **milestone** deyiladi — hayotdagi *bosqich, burilish nuqtasi*." },
        {
          t: "table", head: ["Voqea", "Ma'nosi", "Misol"], speak: [2],
          rows: [
            ["grow up", "o'smoq, voyaga yetmoq", "I grew up in a small village."],
            ["graduate (from)", "o'qishni bitirmoq", "She graduated from university in 2019."],
            ["get engaged (to)", "unashtirilmoq", "He got engaged to Madina last spring."],
            ["get married (to)", "turmush qurmoq, uylanmoq", "They got married in June."],
            ["move house", "boshqa uyga ko'chmoq", "We moved house two years ago."],
            ["get a promotion", "lavozimi ko'tarilmoq", "My brother got a promotion last month."],
            ["retire", "nafaqaga chiqmoq", "My father retired at the age of sixty."],
          ],
        },
        { t: "tip", tone: "info", md: "**get** bu yerda «bo'lmoq» ma'nosida: *get married* = turmush qurmoq (jarayon, bir lahza). **be married** = turmush qurgan holatda bo'lmoq (holat). Bu farq pastda juda muhim." },
        { t: "check", ex: { k: "choice", q: "Which word means **o'qishni bitirmoq**?", opts: ["retire", "graduate", "move house", "grow up"], a: 1, why: "**graduate** — o'qishni tugatib diplom olmoq." } },
      ],
    },
    {
      title: "To'g'ri fe'l va predlog",
      blocks: [
        { t: "p", md: "O'zbek tilida bu voqealarni bitta fe'l bilan aytamiz, inglizchada esa ko'pincha **fe'l + predlog** kerak. O'zbek tilida predlog yo'q, shuning uchun uni tez-tez tushirib qoldiramiz." },
        {
          t: "table", head: ["Iborani eslang", "Misol"], speak: [1],
          rows: [
            ["graduate **from** a university", "He graduated from Westminster University."],
            ["move **to** a city / country", "They moved to Samarkand in 2020."],
            ["get engaged / married **to** someone", "Aziz got married to Nilufar."],
            ["apply **for** a job", "I've applied for a job in a bank."],
            ["retire **at** the age of …", "She will retire at the age of sixty."],
            ["be **born** in a place / year", "I was born in Fergana in 1995."],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["She graduated from university.", "We moved to Tashkent.", "He got married last year.", "I was born in 1998."] },
          bad: { title: "Xato", items: ["She graduated university.", "We moved in Tashkent.", "He is married last year.", "I born in 1998."] },
        },
        { t: "tip", tone: "warn", md: "**be born** — doim Past Simple va passive: **I was born**, **she was born**. *I born* yoki *I am born* deb bo'lmaydi. Hozirgi zamonda odatda *I'm from…* deymiz." },
        { t: "check", ex: { k: "fill", q: "My sister graduated ___ university last summer.", a: ["from"], why: "**graduate from** — predlog tushirilmaydi." } },
        { t: "check", ex: { k: "fill", q: "They moved ___ London two years ago.", a: ["to"], why: "Yo'nalish: **move to** + shahar." } },
      ],
    },
    {
      title: "Voqea yoki holat? Zamonni tanlang",
      blocks: [
        { t: "p", md: "Voqea aniq vaqtda bo'lgan bo'lsa — **Past Simple**. Uning natijasi hozir ham davom etsa va **qancha vaqt** deb so'ralsa — **be + holat** shakli bilan **Present Perfect** ishlatamiz." },
        {
          t: "table", head: ["Voqea (Past Simple)", "Holat (Present Perfect)"], speak: [0, 1],
          rows: [
            ["We got married in 2019.", "We've been married for six years."],
            ["He started work here in 2020.", "He's worked here since 2020."],
            ["I moved to this flat last year.", "I've lived in this flat for a year."],
            ["My father retired in March.", "He's been retired since March."],
          ],
        },
        { t: "tip", tone: "warn", md: "*I have got married for five years* — xato! **get married** — bir lahzalik voqea, shuning uchun u *for five years* bilan ishlatilmaydi. To'g'risi: **I've been married for five years** yoki **I got married five years ago**." },
        { t: "check", ex: { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["They have got married for ten years.", "They have been married for ten years.", "They are married since ten years.", "They married for ten years."], a: 1, why: "Muddat (**for**) bilan holat kerak: **have been married**." } },
        { t: "check", ex: { k: "choice", q: "He ___ a promotion in January.", opts: ["has got", "got", "has been getting", "is getting"], a: 1, why: "**in January** — aniq vaqt, shuning uchun Past Simple: **got**." } },
      ],
    },
    {
      title: "O'qing: Rustamning hayot yo'li",
      blocks: [
        {
          t: "text", title: "Rustam's story",
          en: "Rustam was born in Bukhara in 1990 and grew up with his two sisters. He graduated from university in 2012 and moved to Tashkent to look for work. At first it was difficult, but he soon found a job in a software company. He got engaged to Zarina in 2016, and they got married the following summer. They have been married for eight years now. Last year Rustam got a promotion, and he has been leading a small team since then. He has not decided where he wants to retire, but he often says, \"I would like to live near the mountains one day.\"",
          uz: "Rustam 1990-yilda Buxoroda tug'ilgan va ikki opasi bilan birga o'sgan. U 2012-yilda universitetni bitirib, ish izlab Toshkentga ko'chib keldi. Avvaliga qiyin bo'ldi, lekin tez orada dasturiy ta'minot kompaniyasida ish topdi. 2016-yilda u Zarinaga unashtirildi va keyingi yozda ular turmush qurishdi. Hozir ular sakkiz yildan beri turmush qurgan. O'tgan yili Rustamning lavozimi ko'tarildi va o'shandan beri u kichik jamoaga rahbarlik qilyapti. U qayerda nafaqaga chiqishni hali hal qilmagan, lekin ko'pincha: «Bir kun tog'lar yaqinida yashagim keladi», — deydi.",
        },
        { t: "check", ex: { k: "tf", q: "Rustam and Zarina got married in 2016.", a: false, why: "2016-yilda ular **unashtirildi** (*got engaged*). Turmush qurish keyingi yozda bo'ldi." } },
        { t: "check", ex: { k: "choice", q: "Why does the text say \"has been leading a small team **since then**\"?", opts: ["The work started in the past and still continues.", "The work finished last year.", "He will lead the team soon.", "He never led a team."], a: 0, why: "**since then** + Present Perfect Continuous: o'tmishda boshlangan va hozir ham davom etayotgan ish." } },
      ],
    },
    {
      title: "Dialog: kimligingiz haqida",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Madina", en: "So, Karim, where did you grow up?", uz: "Xo'sh, Karim, qayerda o'sgansiz?" },
            { who: "Karim", en: "In Namangan. I moved to Tashkent when I was eighteen.", uz: "Namanganda. O'n sakkiz yoshimda Toshkentga ko'chib keldim." },
            { who: "Madina", en: "And did you graduate from a university here?", uz: "Bu yerda universitetni bitirdingizmi?" },
            { who: "Karim", en: "Yes, I did. I graduated four years ago, and I've worked in a bank ever since.", uz: "Ha. To'rt yil oldin bitirdim va o'shandan beri bankda ishlayman." },
            { who: "Madina", en: "Are you married?", uz: "Turmush qurganmisiz?" },
            { who: "Karim", en: "I got engaged last month, so the wedding is next spring. What about you?", uz: "O'tgan oy unashtirildim, to'y kelasi bahorda. O'zingiz-chi?" },
            { who: "Madina", en: "I got a promotion this year, so I've been very busy.", uz: "Bu yil lavozimim ko'tarildi, shuning uchun juda bandman." },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Karim is married now.", a: false, why: "U faqat **unashtirilgan** (*got engaged*). To'y kelasi bahorda." } },
      ],
    },
  ],
  words: [
    { en: "milestone", uz: "hayotdagi muhim bosqich", ipa: "ˈmaɪl.stəʊn", pos: "noun", ex: "Getting your first job is an important milestone.", exUz: "Birinchi ishga kirish — muhim bosqich." },
    { en: "grow up", uz: "o'smoq, voyaga yetmoq", ipa: "ɡrəʊ ʌp", pos: "verb", ex: "I grew up in a big family.", exUz: "Men katta oilada o'sganman." },
    { en: "graduate", uz: "o'qishni bitirmoq", ipa: "ˈɡrædʒ.u.eɪt", pos: "verb", ex: "She graduated from university in 2019.", exUz: "U 2019-yilda universitetni bitirgan." },
    { en: "get engaged", uz: "unashtirilmoq", ipa: "ɡet ɪnˈɡeɪdʒd", pos: "phrase", ex: "They got engaged on holiday.", exUz: "Ular ta'tilda unashtirildi." },
    { en: "get married", uz: "turmush qurmoq, uylanmoq", ipa: "ɡet ˈmær.id", pos: "phrase", ex: "We got married in the autumn.", exUz: "Biz kuzda turmush qurdik." },
    { en: "move house", uz: "boshqa uyga ko'chmoq", ipa: "muːv haʊs", pos: "phrase", ex: "We are going to move house next month.", exUz: "Kelasi oy boshqa uyga ko'chamiz." },
    { en: "get a promotion", uz: "lavozimi ko'tarilmoq", ipa: "ɡet ə prəˈməʊ.ʃən", pos: "phrase", ex: "He got a promotion after two years.", exUz: "U ikki yildan keyin lavozimga ko'tarildi." },
    { en: "retire", uz: "nafaqaga chiqmoq", ipa: "rɪˈtaɪər", pos: "verb", ex: "My grandfather retired when he was sixty-five.", exUz: "Bobom oltmish besh yoshda nafaqaga chiqqan." },
    { en: "settle down", uz: "joylashib, osoyishta hayot kechirmoq", ipa: "ˈset.əl daʊn", pos: "phrase", ex: "He wants to settle down and have a family.", exUz: "U oila qurib, osoyishta yashashni xohlaydi." },
    { en: "achieve", uz: "erishmoq", ipa: "əˈtʃiːv", pos: "verb", ex: "She has achieved all her goals.", exUz: "U barcha maqsadlariga erishgan." },
  ],
  practice: [
    { k: "match", pairs: [["graduate", "o'qishni bitirmoq"], ["get engaged", "unashtirilmoq"], ["move house", "boshqa uyga ko'chmoq"], ["retire", "nafaqaga chiqmoq"], ["get a promotion", "lavozimi ko'tarilmoq"]] },
    { k: "choice", q: "She graduated ___ the University of Samarkand.", opts: ["from", "at", "in", "of"], a: 0, why: "**graduate from** — doim *from*." },
    { k: "choice", q: "I ___ in Andijan in 1996.", opts: ["was born", "am born", "born", "have born"], a: 0, why: "**be born** — Past Simple passive: *I was born*." },
    { k: "fill", q: "Her grandmother retired ___ the age of sixty.", a: ["at"], why: "Yosh bilan: **at the age of**." },
    { k: "fill", q: "We moved ___ a bigger flat last year.", a: ["to"], why: "Yo'nalish: **move to**." },
    { k: "fill", q: "They have ___ married for twelve years. (be)", a: ["been"], why: "Muddat (**for**) bilan holat: *have been married*." },
    { k: "choice", q: "He ___ married in 2018.", opts: ["got", "has got", "has been", "is"], a: 0, why: "**in 2018** — aniq vaqt → Past Simple: *got married*." },
    { k: "order", uz: "U o'tgan yili lavozimga ko'tarildi.", words: ["She", "got", "a", "promotion", "last", "year."], extra: ["has", "gets"], why: "**last year** — aniq vaqt, Past Simple." },
    { k: "order", uz: "Biz sakkiz yildan beri turmush qurganmiz.", words: ["We", "have", "been", "married", "for", "eight", "years."], extra: ["got", "since"], alt: [["We've", "been", "married", "for", "eight", "years."]], why: "Muddat + holat: **have been married for**." },
    { k: "fix", wrong: "She graduated university in 2020.", a: ["She graduated from university in 2020.", "She graduated from the university in 2020."], hint: "Predlog yetishmayapti", why: "**graduate from** — predlog kerak." },
    { k: "fix", wrong: "I have got married for five years.", a: ["I have been married for five years.", "I've been married for five years.", "I got married five years ago."], hint: "get married bir lahzalik voqea", why: "Muddat bilan **be married** ishlatiladi." },
    { k: "translate", uz: "Men Farg'onada tug'ilganman va o'sha yerda o'sganman.", a: ["I was born in Fergana and I grew up there.", "I was born in Fergana and grew up there.", "I was born in Ferghana and I grew up there.", "I was born in Ferghana and grew up there."], why: "**was born** + **grew up** (Past Simple)." },
    { k: "tf", q: "**She got married for three years.** — bu gap to'g'ri.", a: false, why: "Muddat bilan: *She has been married for three years.*" },
    { k: "speak", say: "I grew up in a small town, and I moved to the city after university.", uz: "Men kichik shaharda o'sganman va universitetdan keyin katta shaharga ko'chganman." },
  ],
  quiz: [
    { k: "choice", q: "My parents ___ in 1990.", opts: ["got married", "have got married", "are married", "have been married"], a: 0, why: "**in 1990** — aniq vaqt → Past Simple." },
    { k: "choice", q: "My parents ___ for thirty years.", opts: ["have been married", "got married", "are getting married", "married"], a: 0, why: "**for thirty years** — muddat → Present Perfect, holat." },
    { k: "choice", q: "He graduated ___ medical school.", opts: ["from", "to", "on", "for"], a: 0, why: "**graduate from**." },
    { k: "fill", q: "I was ___ in Khiva, but I grew up in Tashkent. (bear)", a: ["born"], why: "**was born** — passive." },
    { k: "fill", q: "When do you plan to ___? I think sixty is a good age to stop working.", a: ["retire"], why: "Ishdan to'xtab dam olish → **retire**." },
    { k: "fill", q: "She works hard, so she ___ a promotion last month.", a: ["got"], why: "**last month** — aniq vaqt → Past Simple." },
    { k: "listen", say: "They moved to a new flat in March.", opts: ["They moved to a new flat in March.", "They moved to a new job in March.", "They are moving to a new flat in March.", "They have moved to a new flat for March."], a: 0, why: "**moved to a new flat in March**." },
    { k: "order", uz: "U 2015-yilda universitetni bitirgan.", words: ["He", "graduated", "from", "university", "in", "2015."], extra: ["has", "at"], why: "Aniq vaqt → Past Simple; **graduate from**." },
    { k: "tf", q: "**Get engaged** and **get married** have the same meaning.", a: false, why: "*get engaged* = unashtirilmoq; *get married* = turmush qurmoq." },
    { k: "translate", uz: "Ular o'tgan yozda turmush qurishdi.", a: ["They got married last summer.", "They got married last summer"], why: "**last summer** — Past Simple." },
  ],
  summary: [
    "**Hayot voqealari**: *grow up, graduate, get engaged, get married, move house, get a promotion, retire, settle down*.",
    "Predloglarni unutmang: **graduate from**, **move to**, **retire at the age of**, **married to**, **apply for**.",
    "**be born** — doim passive Past Simple: *I was born in 1995.*",
    "Voqea aniq vaqtda bo'lsa — Past Simple (*We got married in 2019*). Qancha vaqtdan beri deyilsa — holat: **We've been married for six years.**",
    "*I have got married for five years* — xato. **get married** muddat (*for*) bilan ishlatilmaydi.",
  ],
  homework: "O'z hayotingizdagi 5 ta muhim voqeani yozing (qayerda tug'ilgansiz, qachon o'qishni bitirgansiz va hokazo). Har bir voqeaga Past Simple gap yozing, keyin muddat haqida Present Perfect gap qo'shing (*I've lived here for…*).",
};

export default lesson;
