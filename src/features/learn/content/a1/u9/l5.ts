import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u9-l5",
  title: "Life stories",
  titleUz: "Hayot yo'li: born, grew up, moved…",
  goal: "O'zingiz yoki boshqa odamning hayot yo'lini gapirib bera olasiz: **was born, grew up, left school, got a job, got married, moved to, became, retired** — sanalar va **at the age of, after that, two years later** kabi iboralar bilan.",
  slides: [
    {
      title: "Hayotdagi asosiy voqealar",
      blocks: [
        { t: "p", md: "Tarjimai hol (biografiya) — Past Simple'ning eng tabiiy joyi. Quyidagi iboralar hayot voqealarini **tartib bilan** aytadi. Ko'pchiligi noto'g'ri fe'l, shuning uchun V2 ga e'tibor bering:" },
        {
          t: "table", head: ["Ibora", "O'tgan zamon", "O'zbekcha"],
          rows: [
            ["be born", "was / were born", "tug'ilmoq"],
            ["grow up", "grew up", "o'smoq, voyaga yetmoq"],
            ["go to school", "went to school", "maktabga bormoq / o'qimoq"],
            ["leave school", "left school", "maktabni tugatmoq"],
            ["go to university", "went to university", "universitetga o'qishga kirmoq"],
            ["get a job", "got a job", "ishga joylashmoq"],
            ["get married", "got married", "turmush qurmoq"],
            ["have a baby / children", "had a baby / children", "farzand ko'rmoq"],
            ["move (to)", "moved (to)", "ko'chib o'tmoq"],
            ["become", "became", "… bo'lmoq (kasb, holat)"],
            ["retire", "retired", "nafaqaga chiqmoq"],
            ["die", "died", "vafot etmoq"],
          ],
          speak: [0, 1],
        },
        { t: "tip", tone: "good", md: "Yangi noto'g'ri fe'llar: **grow – grew** (\"gru:\") va **become – became** (\"bi-KEYM\"). *became* — *come – came* ga o'xshaydi, oldiga **be-** qo'shilgan xolos." },
        { t: "check", ex: { k: "fill", q: "My uncle ___ a doctor in 2010. (become)", a: ["became"], uz: "Amakim 2010-yilda shifokor bo'ldi.", why: "**become – became**." } },
      ],
    },
    {
      title: "was born va grew up",
      blocks: [
        { t: "p", md: "**born** haqida eslatma: inglizchada \"tug'ildim\" — **I was born** (doim **was / were** bilan). Hozirgi zamonda emas, chunki tug'ilish — o'tmishdagi voqea." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I was born in Termez.", "Where were you born?", "She was born on 3 May 2001."] },
          bad: { title: "Xato", items: ["I born in Termez. / I am born in Termez.", "Where did you born?", "She born in 3 May 2001."] },
        },
        { t: "p", md: "**grow up** — \"katta bo'lmoq, bolalik va o'smirlikni o'tkazmoq\". Ko'pincha tug'ilgan joy boshqa, o'sgan joy boshqa bo'ladi:" },
        {
          t: "examples", items: [
            { en: "I was born in Nukus, but I grew up in Tashkent.", uz: "Men Nukusda tug'ilganman, lekin Toshkentda o'sganman." },
            { en: "Where did you grow up?", uz: "Qayerda o'sgansiz?" },
            { en: "We grew up in the same street.", uz: "Biz bir ko'chada o'sganmiz." },
          ],
        },
        { t: "tip", tone: "warn", md: "Savolda **did** + V1: *Where did you **grow** up?* (❌ *grew*). Lekin **born** bilan **did** yo'q: *Where **were** you born?*" },
        { t: "check", ex: { k: "choice", q: "\"Siz qayerda tug'ilgansiz?\"", opts: ["Where did you born?", "Where were you born?", "Where you were born?", "Where are you born?"], a: 1, why: "**be born** → *Where **were** you born?*" } },
      ],
    },
    {
      title: "Predloglar: in, at the age of, to",
      blocks: [
        {
          t: "table", head: ["Tuzilma", "Misol", "O'zbekcha"],
          rows: [
            ["in + yil / shahar", "She was born in 1990 in Bukhara.", "U 1990-yilda Buxoroda tug'ilgan."],
            ["at the age of + son", "He left school at the age of 17.", "U 17 yoshida maktabni tugatdi."],
            ["when + ega + was", "When she was 25, she got married.", "25 yoshida u turmushga chiqdi."],
            ["move to + joy", "They moved to Tashkent in 2005.", "Ular 2005-yilda Toshkentga ko'chib kelishdi."],
            ["get married to + kishi", "He got married to Dilnoza.", "U Dilnozaga uylandi."],
          ],
          speak: [1],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["at the age of 20", "They moved to Samarkand.", "She got married to a teacher.", "He became a pilot."] },
          bad: { title: "Xato", items: ["in the age of 20 / at 20 age", "They moved in Samarkand.", "She got married with a teacher.", "He became pilot."] },
        },
        { t: "tip", tone: "info", md: "Kasb bilan **become a / an**: *became **a** teacher, became **an** engineer*. Sifat bilan artikl yo'q: *became famous, became rich*. O'zbekchada \"uylandi\" va \"turmushga chiqdi\" farq qiladi, inglizchada ikkalasi ham **got married**." },
        { t: "check", ex: { k: "fill", q: "My parents moved ___ Andijan when I was two.", a: ["to"], why: "**move to** + joy." } },
      ],
    },
    {
      title: "Voqealarni bog'lash: then, after that, later",
      blocks: [
        { t: "p", md: "Biografiya ro'yxatga o'xshab qolmasligi uchun voqealarni bog'lovchi so'zlar bilan ulang:" },
        {
          t: "examples", items: [
            { en: "He finished school in 2008. Then he went to university.", uz: "U maktabni 2008-yilda tugatdi. Keyin universitetga o'qishga kirdi." },
            { en: "After that, he got a job in a bank.", uz: "Shundan so'ng u bankka ishga kirdi." },
            { en: "Three years later, he got married.", uz: "Uch yildan keyin u uylandi." },
            { en: "In the end, they moved back to their home town.", uz: "Oxir-oqibat ular o'z shaharlariga qaytib ko'chishdi." },
          ],
        },
        { t: "tip", tone: "info", md: "Eslatma (1-dars): **ago** — hozirdan orqaga (*three years ago*), **later** — hikoyadagi voqeadan keyin (*three years later*). Biografiyada **later** ko'proq ishlatiladi." },
        { t: "check", ex: { k: "choice", q: "She got a job in 2015. Two years ___, she got married.", opts: ["ago", "later", "before", "last"], a: 1, why: "Hikoyadagi voqeadan (2015-yil) keyin → **later**." } },
      ],
    },
    {
      title: "O'qing: Bobomning hayoti",
      blocks: [
        {
          t: "text", title: "My grandfather's life",
          en: "My grandfather, Karim, was born in a small village near Kokand in 1950. He grew up with five brothers and sisters. He left school at the age of sixteen and worked in the cotton fields.\nIn 1970, he moved to Tashkent and got a job at a car factory. There he met my grandmother, Saodat. They got married in 1974 and had four children.\nLater, my grandfather went to evening classes and became an engineer. He retired in 2012. Now he lives in his village again, and he grows tomatoes and grapes in his garden.",
          uz: "Bobom Karim 1950-yilda Qo'qon yaqinidagi kichik qishloqda tug'ilgan. U besh aka-uka va opa-singil bilan birga o'sgan. O'n olti yoshida maktabni tugatib, paxta dalalarida ishlagan.\n1970-yilda u Toshkentga ko'chib kelgan va avtomobil zavodiga ishga kirgan. U yerda buvim Saodat bilan tanishgan. Ular 1974-yilda turmush qurishgan va to'rt farzand ko'rishgan.\nKeyinroq bobom kechki kurslarda o'qib, muhandis bo'lgan. U 2012-yilda nafaqaga chiqdi. Hozir u yana qishlog'ida yashaydi va bog'ida pomidor va uzum yetishtiradi.",
        },
        { t: "tip", tone: "info", md: "E'tibor bering: matnning oxirida hozirgi zamon (**lives, grows**) — chunki bu **hozirgi** holat. Biografiyada o'tmish va hozirni aralashtirish tabiiy." },
        { t: "check", ex: { k: "tf", q: "Karim Toshkentda tug'ilgan.", a: false, why: "*…was born in a small village near Kokand.* Toshkentga 1970-yilda ko'chib kelgan." } },
        { t: "check", ex: { k: "choice", q: "How old was Karim when he left school?", opts: ["Fourteen.", "Sixteen.", "Twenty.", "Twenty-four."], a: 1, why: "*He left school at the age of sixteen.*" } },
      ],
    },
    {
      title: "Dialog: Intervyu",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Journalist", en: "Mrs Yusupova, where were you born?", uz: "Yusupova xonim, qayerda tug'ilgansiz?" },
            { who: "Mrs Yusupova", en: "I was born in Khorezm, but I grew up in Tashkent.", uz: "Xorazmda tug'ilganman, lekin Toshkentda o'sganman." },
            { who: "Journalist", en: "When did you start your restaurant?", uz: "Restoraningizni qachon ochgansiz?" },
            { who: "Mrs Yusupova", en: "In 2003. Before that, I worked as a cook in a hotel for ten years.", uz: "2003-yilda. Undan oldin o'n yil mehmonxonada oshpaz bo'lib ishlaganman." },
            { who: "Journalist", en: "Who taught you to cook?", uz: "Sizga ovqat pishirishni kim o'rgatgan?" },
            { who: "Mrs Yusupova", en: "My mother. I learned to make Khorezm dishes when I was a child.", uz: "Onam. Xorazm taomlarini bolaligimda o'rganganman." },
            { who: "Journalist", en: "And when did your restaurant become famous?", uz: "Restoraningiz qachon mashhur bo'ldi?" },
            { who: "Mrs Yusupova", en: "About five years later. A food blogger wrote about our tukhum barak!", uz: "Taxminan besh yildan keyin. Bir oziq-ovqat blogeri bizning tuxum barakimiz haqida yozdi!" },
          ],
        },
        { t: "check", ex: { k: "order", uz: "Siz qayerda o'sgansiz?", words: ["Where", "did", "you", "grow", "up?"], extra: ["grew", "were"] } },
      ],
    },
  ],
  words: [
    { en: "grow up – grew up", uz: "o'smoq, voyaga yetmoq", ipa: "ɡrəʊ ˈʌp – ɡruː ˈʌp", pos: "phrasal verb", ex: "I grew up in a big family.", exUz: "Men katta oilada o'sganman." },
    { en: "become – became", uz: "… bo'lmoq (kasb, holat)", ipa: "bɪˈkʌm – bɪˈkeɪm", pos: "verb", ex: "She became a teacher at the age of 23.", exUz: "U 23 yoshida o'qituvchi bo'ldi." },
    { en: "move", uz: "ko'chmoq, ko'chib o'tmoq", ipa: "muːv", pos: "verb", ex: "We moved to Samarkand in 2018.", exUz: "Biz 2018-yilda Samarqandga ko'chdik." },
    { en: "get a job", uz: "ishga joylashmoq", ipa: "ˌɡet ə ˈdʒɒb", pos: "phrase", ex: "He got a job in a hotel.", exUz: "U mehmonxonaga ishga kirdi." },
    { en: "get married", uz: "turmush qurmoq (uylanmoq / turmushga chiqmoq)", ipa: "ˌɡet ˈmær.id", pos: "phrase", ex: "My sister got married last year.", exUz: "Opam o'tgan yili turmushga chiqdi." },
    { en: "have a baby", uz: "farzand ko'rmoq", ipa: "ˌhæv ə ˈbeɪ.bi", pos: "phrase", ex: "They had a baby in March.", exUz: "Ular martda farzand ko'rishdi." },
    { en: "retire", uz: "nafaqaga chiqmoq", ipa: "rɪˈtaɪə", pos: "verb", ex: "My grandfather retired in 2012.", exUz: "Bobom 2012-yilda nafaqaga chiqdi." },
    { en: "die", uz: "vafot etmoq, o'lmoq", ipa: "daɪ", pos: "verb", ex: "The famous poet died in 1501.", exUz: "Mashhur shoir 1501-yilda vafot etgan." },
    { en: "childhood", uz: "bolalik", ipa: "ˈtʃaɪld.hʊd", pos: "noun", ex: "I had a happy childhood.", exUz: "Bolaligim baxtli o'tgan." },
    { en: "at the age of", uz: "… yoshida", ipa: "ət ði ˈeɪdʒ əv", pos: "phrase", ex: "He left school at the age of seventeen.", exUz: "U o'n yetti yoshida maktabni tugatdi." },
  ],
  practice: [
    { k: "listen", say: "She grew up in Fergana.", opts: ["She grows up in Fergana.", "She grew up in Fergana.", "She was born in Fergana."], a: 1, why: "\"gru:\" — **grew**." },
    { k: "listen", say: "He became an engineer.", opts: ["He became an engineer.", "He becomes an engineer.", "He came an engineer."], a: 0 },
    { k: "match", pairs: [["get married", "turmush qurmoq"], ["retire", "nafaqaga chiqmoq"], ["grow up", "o'smoq"], ["get a job", "ishga joylashmoq"], ["childhood", "bolalik"], ["move", "ko'chmoq"]] },
    { k: "choice", q: "\"Men 2001-yilda tug'ilganman.\"", opts: ["I born in 2001.", "I am born in 2001.", "I was born in 2001.", "I did born in 2001."], a: 2, why: "**was born**." },
    { k: "choice", q: "She got married ___ a doctor from Tashkent.", opts: ["with", "to", "for", "on"], a: 1, why: "**get married to** somebody." },
    { k: "choice", q: "Qaysi gap **to'g'ri**?", opts: ["He became pilot in 2015.", "He became a pilot in 2015.", "He become a pilot in 2015.", "He became the pilot in 2015 year."], a: 1, why: "**became a** + kasb." },
    { k: "fill", q: "They ___ to London when their son was five. (move)", a: ["moved"] },
    { k: "fill", q: "I left school ___ the age of eighteen.", a: ["at"] },
    { k: "fill", q: "Where did you ___ up? — In Nukus. (grow)", a: ["grow"], why: "**did** + V1: *grow up*." },
    { k: "fill", q: "My grandmother ___ in 2015. She was a teacher for forty years. (retire)", a: ["retired"], uz: "Buvim 2015-yilda nafaqaga chiqdi. U qirq yil o'qituvchi bo'lgan." },
    { k: "tf", q: "*They moved in Tashkent in 2010.* — to'g'ri gap.", a: false, why: "**move to** + joy: *They moved **to** Tashkent.*" },
    { k: "tf", q: "Matnga ko'ra, Karim zavodda Saodat bilan tanishgan.", a: true, why: "*…got a job at a car factory. There he met my grandmother, Saodat.*" },
    { k: "order", uz: "U (he) 1998-yilda Buxoroda tug'ilgan.", words: ["He", "was", "born", "in", "Bukhara", "in", "1998"], extra: ["did", "borned"], alt: [["He", "was", "born", "in", "1998", "in", "Bukhara"]] },
    { k: "order", uz: "Ikki yildan keyin ular farzand ko'rishdi.", words: ["Two", "years", "later,", "they", "had", "a", "baby"], extra: ["ago,", "have"] },
    { k: "translate", uz: "Men katta oilada o'sganman.", a: ["I grew up in a big family", "I grew up in a large family"] },
    { k: "speak", say: "I was born in Nukus, but I grew up in Tashkent.", uz: "Men Nukusda tug'ilganman, lekin Toshkentda o'sganman." },
  ],
  quiz: [
    { k: "choice", q: "Where ___ you born?", opts: ["did", "was", "were", "are"], a: 2 },
    { k: "choice", q: "He left school ___ sixteen.", opts: ["in the age of", "at the age of", "on the age of", "at age of the"], a: 1 },
    { k: "choice", q: "She finished university in 2019. A year ___, she got a job in Dubai.", opts: ["ago", "later", "last", "before"], a: 1, why: "Hikoyadagi voqeadan keyin → **later**." },
    { k: "fill", q: "My cousin ___ a famous singer. (become)", a: ["became"] },
    { k: "fill", q: "We ___ up in the same village. (grow)", a: ["grew"] },
    { k: "fill", q: "When ___ your parents get married?", a: ["did"] },
    { k: "listen", say: "They got married in 1999.", opts: ["They got married in 1999.", "They get married in 1999.", "They got a job in 1999."], a: 0 },
    { k: "tf", q: "Mrs Yusupova Xorazmda tug'ilgan va o'sgan.", a: false, why: "*I was born in Khorezm, but I **grew up in Tashkent**.*" },
    { k: "order", uz: "Bobom 2012-yilda nafaqaga chiqdi.", words: ["My", "grandfather", "retired", "in", "2012"], extra: ["retire", "on"] },
    { k: "translate", uz: "Ular 2020-yilda Samarqandga ko'chib o'tishdi.", a: ["They moved to Samarkand in 2020", "In 2020 they moved to Samarkand", "In 2020, they moved to Samarkand"] },
  ],
  summary: [
    "Hayot voqealari: **was born, grew up, left school, got a job, got married, had a baby, moved to, became, retired, died**.",
    "**I was born** (❌ *I born / I am born*); savolda: *Where **were** you born?* lekin *Where **did** you **grow** up?*",
    "**at the age of 17, in 1990, move to + joy, get married to + kishi, become a + kasb**.",
    "Voqealarni **then, after that, two years later, in the end** bilan bog'lang.",
  ],
  homework: "O'zingizning yoki oila a'zongizning qisqa tarjimai holini yozing (8–10 gap): qayerda tug'ilgan, qayerda o'sgan, maktab, ish, oila, ko'chish. Kamida 3 ta bog'lovchi (*then, after that, … years later*) va **at the age of** ni ishlating.",
};

export default lesson;
