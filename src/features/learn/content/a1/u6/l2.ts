import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u6-l2",
  title: "What does she look like?",
  titleUz: "Tashqi ko'rinishni tasvirlash",
  goal: "**What does he/she look like?** savoliga javob berib, odamning bo'yi, qaddi-qomati, sochi, ko'zlari va yoshini tasvirlaysiz: *She's tall and slim. She has long curly black hair.* Sifatlar tartibini va **look like** ning ikki ma'nosini bilasiz.",
  slides: [
    {
      title: "Savol: What does she look like?",
      blocks: [
        { t: "p", md: "Odamning **tashqi ko'rinishi** haqida so'rash uchun maxsus savol bor: **What does he / she look like?** — \"U qanaqa ko'rinishda? (Ko'rinishi qanaqa?)\". Javobda ikki fe'l ishlatiladi: **be** va **have (got)**." },
        {
          t: "table", head: ["Fe'l", "Nima uchun", "Misol"],
          rows: [
            ["be (is / are)", "bo'y, qomat, yosh, umumiy ko'rinish", "She is tall. He is young."],
            ["have / have got", "soch, ko'z, soqol, mo'ylov", "She has long hair. He's got a beard."],
            ["wear", "ko'zoynak, kiyim", "He wears glasses."],
          ],
          speak: [2],
        },
        {
          t: "dialog", lines: [
            { who: "Lola", en: "My cousin Zarina is coming to the airport. Can you meet her?", uz: "Xolavachcham Zarina aeroportga keladi. Uni kutib olasanmi?" },
            { who: "Akmal", en: "Sure. What does she look like?", uz: "Albatta. Ko'rinishi qanaqa?" },
            { who: "Lola", en: "She's quite tall and slim. She has long dark hair.", uz: "U ancha baland bo'yli va ozg'in. Sochi uzun, qora." },
            { who: "Akmal", en: "Does she wear glasses?", uz: "Ko'zoynak taqadimi?" },
            { who: "Lola", en: "Yes, she does. And she usually wears a red jacket.", uz: "Ha. Va odatda qizil kurtka kiyadi." },
          ],
        },
        { t: "tip", tone: "warn", md: "Savolda **does** va **look like** birga: *What **does** she **look like**?* ❌ *What is she look like?* ❌ *How does she look like?*\n*What is she like?* — bu boshqa savol: xarakter haqida (keyingi darsda)." },
        { t: "check", ex: { k: "choice", q: "Tashqi ko'rinish haqidagi to'g'ri savol:", opts: ["What is he look like?", "How does he look like?", "What does he look like?", "What he looks like?"], a: 2, why: "**What does he look like?** — *does* + *look like*." } },
      ],
    },
    {
      title: "Bo'y, qomat va yosh",
      blocks: [
        {
          t: "table", head: ["English", "O'zbekcha", "Izoh"],
          rows: [
            ["tall", "baland bo'yli", "odam uchun *high* emas!"],
            ["short", "past bo'yli", "*short hair* — kalta soch"],
            ["medium height", "o'rta bo'yli", "He's medium height."],
            ["slim", "qaddi-qomati kelishgan, ozg'in", "maqtov ma'nosida"],
            ["thin", "oriq", "ba'zan salbiy"],
            ["a bit overweight", "biroz to'la", "*fat* — qo'pol, ishlatmang"],
            ["young / middle-aged / elderly", "yosh / o'rta yoshli / keksa", "*elderly* — *old* dan muloyimroq"],
            ["in his twenties / in her forties", "20 yoshlarda / 40 yoshlarda", "20–29 / 40–49 yosh"],
          ],
          speak: [0],
        },
        { t: "tip", tone: "warn", md: "Odam haqida **tall**, bino yoki tog' haqida **high / tall**: *a tall man*, *a high mountain*. ❌ *He is high.*\nOdamni tasvirlaganda muloyim bo'ling: **fat** va **old** o'rniga **a bit overweight** va **elderly** deyish yaxshiroq." },
        {
          t: "examples", items: [
            { en: "My grandfather is elderly, but he's very active.", uz: "Bobom keksa, lekin juda faol." },
            { en: "Our teacher is in her thirties.", uz: "O'qituvchimiz o'ttiz yoshlarda." },
            { en: "He's medium height and a bit overweight.", uz: "U o'rta bo'yli va biroz to'la." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "\"Akam juda baland bo'yli.\"", opts: ["My brother is very high.", "My brother is very tall.", "My brother is very long.", "My brother has very tall."], a: 1, why: "Odamning bo'yi — **tall**." } },
      ],
    },
    {
      title: "Soch va yuz",
      blocks: [
        {
          t: "table", head: ["Uzunlik", "Shakl", "Rang"],
          rows: [
            ["long — uzun", "straight — tekis, to'g'ri", "dark / black — qora"],
            ["short — kalta", "curly — jingalak", "fair / blonde — sariq, och"],
            ["medium-length — o'rtacha", "wavy — to'lqinsimon", "brown — jigarrang"],
            ["bald — kal (sochi yo'q)", "", "grey — oq (oqargan), red — malla"],
          ],
        },
        { t: "p", md: "Bir nechta sifat bo'lsa, eng tabiiy tartib: **uzunlik → shakl → rang → hair**." },
        {
          t: "examples", items: [
            { en: "She has long curly black hair.", uz: "Uning uzun, jingalak, qora sochi bor." },
            { en: "He has short straight fair hair.", uz: "Uning kalta, tekis, och rang sochi bor." },
            { en: "He's got a beard and a moustache.", uz: "Uning soqoli va mo'ylovi bor." },
            { en: "She has big brown eyes.", uz: "Uning katta jigarrang ko'zlari bor." },
            { en: "My uncle is bald.", uz: "Amakim kal.", note: "**bald** — *be* bilan: *He **is** bald.*" },
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["She has long hair.", "Her hair is long.", "He has blue eyes.", "She has curly black hair."] },
          bad: { title: "Xato", items: ["She has long hairs.", "Her hairs are long.", "He has eyes blue.", "She has hair black."] },
        },
        { t: "tip", tone: "warn", md: "**hair** — boshdagi soch **sanalmaydi** (birlikda): *Her hair **is** long.* ❌ *hairs*. (*hairs* — faqat alohida tolalar: *There are two hairs in my soup!*)\nSifat otdan **oldin** keladi: *blue eyes* ✅, ❌ *eyes blue*." },
        { t: "check", ex: { k: "order", uz: "Uning (ayol) uzun to'lqinsimon sariq sochi bor.", words: ["She", "has", "long", "wavy", "blonde", "hair."], extra: ["hairs.", "is"] } },
      ],
    },
    {
      title: "look like va look: ikki xil ma'no",
      blocks: [
        { t: "p", md: "**look** fe'li savolda ham, javobda ham uchraydi, ma'nolari esa har xil — chalkashtirmang:" },
        {
          t: "table", head: ["Tuzilma", "Ma'nosi", "Misol"],
          rows: [
            ["What does she look like?", "Ko'rinishi qanaqa?", "She's tall and slim."],
            ["look like + odam/narsa", "…ga o'xshamoq", "She looks like her mother."],
            ["look + sifat", "…ko'rinmoq", "You look tired. He looks happy."],
          ],
          speak: [0, 2],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["You look tired.", "He looks like his father.", "She looks young for her age."] },
          bad: { title: "Xato", items: ["You look like tired.", "He looks his father.", "She looks like young."] },
        },
        { t: "tip", tone: "info", md: "Qoida oddiy: **sifatdan** oldin faqat **look** (*look tired*), **otdan** oldin **look like** (*look like a film star*)." },
        { t: "check", ex: { k: "fill", q: "Sardor really looks ___ his grandfather.", a: ["like"], uz: "Sardor haqiqatan bobosiga o'xshaydi.", why: "Odamga o'xshash — **look like** + ot." } },
        { t: "check", ex: { k: "choice", q: "\"Siz charchagan ko'rinasiz.\"", opts: ["You look like tired.", "You look tired.", "You are look tired.", "You looks tired."], a: 1, why: "Sifat oldidan **like** kerak emas: **You look tired.**" } },
      ],
    },
    {
      title: "Talaffuz: qiyin so'zlar",
      blocks: [
        {
          t: "sounds", items: [
            { label: "moustache", say: "moustache", uz: "**\"mə-sta:sh\"** — oxiri \"sh\": *-che* \"che\" o'qilmaydi.", examples: ["moustache", "He has a moustache."] },
            { label: "beard", say: "beard", uz: "**\"biəd\"** — *bird* (\"bö:d\", qush) bilan adashtirmang!", examples: ["beard", "bird"] },
            { label: "curly", say: "curly", uz: "**\"kö:-li\"** — \"ö\" ga yaqin cho'ziq unli.", examples: ["curly", "curly hair"] },
            { label: "height", say: "height", uz: "**\"hayt\"** — *eigh* bu yerda \"ay\". Oxiri **t**, *th* emas.", examples: ["height", "medium height"] },
            { label: "eyes", say: "eyes", uz: "**\"ayz\"** — *ice* (\"ays\", muz) bilan solishtiring: oxiri **z**.", examples: ["eyes", "ice"] },
          ],
        },
        { t: "check", ex: { k: "listen", say: "He has a beard.", opts: ["He has a bird.", "He has a beard.", "He has a bed."], a: 1, why: "\"biəd\" — **beard**, soqol." } },
      ],
    },
    {
      title: "Matn: Yo'qolgan bola",
      blocks: [
        {
          t: "text", title: "At the shopping centre",
          en: "It's Saturday afternoon at a big shopping centre in Tashkent. A woman runs to the security officer. \"Please help me! I can't find my son!\"\n\"Don't worry. What's his name, and what does he look like?\"\n\"His name is Timur. He's seven. He's quite short and thin. He has short curly brown hair and big dark eyes. He's wearing a yellow T-shirt and blue jeans.\"\n\"Does he wear glasses?\"\n\"No, he doesn't.\"\nTen minutes later, the officer comes back with a little boy. He has curly hair, he is wearing a yellow T-shirt, and he is eating an ice cream. He looks very happy. \"Mum! Look, a man gave me an ice cream!\"",
          uz: "Shanba kuni tushdan keyin, Toshkentdagi katta savdo markazi. Bir ayol qo'riqchi xodim oldiga yugurib keladi. \"Iltimos, yordam bering! O'g'limni topa olmayapman!\"\n\"Xavotir olmang. Ismi nima va ko'rinishi qanaqa?\"\n\"Ismi Temur. Yetti yoshda. Ancha past bo'yli va oriq. Sochi kalta, jingalak, jigarrang, ko'zlari katta va qora. Egnida sariq futbolka va ko'k jinsi shim bor.\"\n\"Ko'zoynak taqadimi?\"\n\"Yo'q, taqmaydi.\"\nO'n daqiqadan keyin xodim kichkina bola bilan qaytib keladi. Uning sochi jingalak, egnida sariq futbolka va u muzqaymoq yeyapti. U juda xursand ko'rinadi. \"Oyi! Qarang, bir amaki menga muzqaymoq berdi!\"",
        },
        { t: "check", ex: { k: "tf", q: "Matnga ko'ra, **Timur has long straight hair.**", a: false, why: "Temurning sochi **short curly brown** — kalta va jingalak." } },
        { t: "check", ex: { k: "choice", q: "Matn oxirida Temur qanday ko'rinadi?", opts: ["He looks tired.", "He looks like his mother.", "He looks very happy.", "He looks sad."], a: 2, why: "*He looks very happy.*" } },
      ],
    },
  ],
  words: [
    { en: "look like", uz: "…ga o'xshamoq", ipa: "ˈlʊk laɪk", pos: "phrase", ex: "Dilnoza looks like her father.", exUz: "Dilnoza otasiga o'xshaydi." },
    { en: "slim", uz: "qaddi-qomati kelishgan, ozg'in", ipa: "slɪm", pos: "adjective", ex: "My sister is tall and slim.", exUz: "Opam baland bo'yli va qaddi-qomati kelishgan." },
    { en: "curly", uz: "jingalak", ipa: "ˈkɜː.li", pos: "adjective", ex: "The baby has curly hair.", exUz: "Chaqaloqning sochi jingalak." },
    { en: "straight", uz: "tekis, to'g'ri (soch)", ipa: "streɪt", pos: "adjective", ex: "She has long straight hair.", exUz: "Uning sochi uzun va tekis." },
    { en: "fair", uz: "och rang, sariq (soch, teri)", ipa: "feə", pos: "adjective", ex: "He has fair hair and blue eyes.", exUz: "Uning sochi och rang, ko'zlari ko'k." },
    { en: "beard", uz: "soqol", ipa: "bɪəd", pos: "noun", ex: "My grandfather has a white beard.", exUz: "Bobomning oq soqoli bor." },
    { en: "moustache", uz: "mo'ylov", ipa: "məˈstɑːʃ", pos: "noun", ex: "The man with the moustache is our teacher.", exUz: "Mo'ylovli kishi — bizning o'qituvchimiz." },
    { en: "glasses", uz: "ko'zoynak", ipa: "ˈɡlɑː.sɪz", pos: "noun", ex: "She wears glasses for reading.", exUz: "U o'qish uchun ko'zoynak taqadi." },
    { en: "middle-aged", uz: "o'rta yoshli", ipa: "ˌmɪd.əlˈeɪdʒd", pos: "adjective", ex: "A middle-aged man opened the door.", exUz: "Eshikni o'rta yoshli bir kishi ochdi." },
    { en: "good-looking", uz: "chiroyli, kelishgan", ipa: "ˌɡʊdˈlʊk.ɪŋ", pos: "adjective", ex: "Her husband is very good-looking.", exUz: "Uning eri juda kelishgan." },
  ],
  practice: [
    { k: "match", pairs: [["beard", "soqol"], ["moustache", "mo'ylov"], ["glasses", "ko'zoynak"], ["curly", "jingalak"], ["bald", "kal"]] },
    { k: "match", pairs: [["tall", "baland bo'yli"], ["slim", "qaddi-qomati kelishgan"], ["middle-aged", "o'rta yoshli"], ["elderly", "keksa"], ["fair", "och rang (soch)"]] },
    { k: "listen", say: "She has long straight hair.", opts: ["She has long straight hair.", "She has long curly hair.", "She has short straight hair."], a: 0 },
    { k: "listen", say: "What does he look like?", opts: ["What does he like?", "What does he look like?", "What is he like?"], a: 1, why: "**look like** — tashqi ko'rinish haqida." },
    { k: "choice", q: "Qaysi gap **to'g'ri**?", opts: ["Her hairs are very long.", "She has very long hair.", "She has hair very long.", "She is very long hair."], a: 1, why: "**hair** birlikda, sifat otdan oldin: *She has very long hair.*" },
    { k: "choice", q: "Sifatlar tartibi eng tabiiy bo'lgan gap:", opts: ["He has black short straight hair.", "He has straight black short hair.", "He has short straight black hair.", "He has hair short straight black."], a: 2, why: "Tartib: **uzunlik → shakl → rang**: *short straight black hair*." },
    { k: "choice", q: "— What does your brother look like? — …", opts: ["He's very friendly.", "He likes football.", "He's tall and has a beard.", "He's a doctor."], a: 2, why: "Savol tashqi ko'rinish haqida — bo'y, soch, soqol." },
    { k: "fill", q: "My grandmother ___ glasses.", a: ["wears", "has"], uz: "Buvim ko'zoynak taqadi.", why: "Ko'zoynak — **wear** (yoki *have*): *She wears glasses.*" },
    { k: "fill", q: "You ___ tired. Go to bed!", a: ["look"], uz: "Charchagan ko'rinasan. Uxlagani bor!", why: "**look** + sifat: *You look tired.*" },
    { k: "fill", q: "What does your sister look ___?", a: ["like"] },
    { k: "tf", q: "**He is high** — \"U baland bo'yli\" degani uchun to'g'ri gap.", a: false, why: "Odam haqida **tall**: *He is tall.*" },
    { k: "tf", q: "**She looks like her mother** — \"U onasiga o'xshaydi\" degani.", a: true },
    { k: "order", uz: "Uning (erkak) kalta qora sochi va soqoli bor.", words: ["He", "has", "short", "black", "hair", "and", "a", "beard."], extra: ["hairs", "is"] },
    { k: "translate", uz: "U (she) o'rta bo'yli va ozg'in.", a: ["She is medium height and slim", "She's medium height and slim", "She is medium height and thin", "She's medium height and thin", "She is of medium height and slim", "She's of medium height and slim", "She is of medium height and thin", "She's of medium height and thin", "She is average height and slim", "She's average height and slim", "She is average height and thin", "She's average height and thin", "She is medium-height and slim", "She's medium-height and slim"] },
    { k: "translate", uz: "Uning (he) ko'k ko'zlari bor.", a: ["He has blue eyes", "He's got blue eyes", "He has got blue eyes", "His eyes are blue"] },
    { k: "speak", say: "She's tall and slim, and she has long dark hair.", uz: "U baland bo'yli va qaddi-qomati kelishgan, sochi uzun va qora." },
  ],
  quiz: [
    { k: "choice", q: "\"Ko'rinishi qanaqa?\" (u — ayol)", opts: ["What is she like?", "What does she look like?", "How does she look like?", "What she looks like?"], a: 1 },
    { k: "choice", q: "\"Dadam 50 yoshlarda.\"", opts: ["My dad is in his fifties.", "My dad is in fifty.", "My dad has fifties.", "My dad is fifties years."], a: 0, why: "**in his fifties** — 50–59 yosh." },
    { k: "fill", q: "Her hair ___ very long and curly.", a: ["is"], why: "**hair** sanalmaydi → **is**." },
    { k: "fill", q: "Bobur looks ___ a film star!", a: ["like"], why: "Ot oldidan **look like**." },
    { k: "listen", say: "He has a moustache.", opts: ["He has a moustache.", "He has a mistake.", "He has a message."], a: 0 },
    { k: "tf", q: "Odamni tasvirlaganda **fat** o'rniga **a bit overweight** deyish muloyimroq.", a: true },
    { k: "match", pairs: [["bald", "kal"], ["wavy", "to'lqinsimon"], ["beard", "soqol"], ["good-looking", "kelishgan"]] },
    { k: "order", uz: "U (ayol) chiroyli jigarrang ko'zlarga ega va ko'zoynak taqadi.", words: ["She", "has", "beautiful", "brown", "eyes", "and", "wears", "glasses."], extra: ["eyes brown", "wear"] },
    { k: "translate", uz: "Siz otangizga o'xshaysiz.", a: ["You look like your father", "You look like your dad"] },
    { k: "choice", q: "Qaysi gap **xato**?", opts: ["He is bald.", "He looks happy.", "He has fair hair.", "He looks like happy."], a: 3, why: "Sifat oldidan **like** yo'q: *He looks happy.*" },
  ],
  summary: [
    "Savol: **What does he/she look like?** — tashqi ko'rinish.",
    "**be** — bo'y, qomat, yosh (*She's tall / slim / in her twenties*); **have (got)** — soch, ko'z, soqol; **wear** — ko'zoynak.",
    "**hair** sanalmaydi: *Her hair **is** long.* Sifatlar tartibi: **long curly black hair**.",
    "**look + sifat** (*You look tired*), **look like + ot** (*She looks like her mum*).",
    "Muloyim so'zlar: **slim, a bit overweight, elderly**; odam — **tall**, ❌ *high*.",
  ],
  homework: "Oilangizdagi uch kishini tasvirlab, har biri haqida 4–5 gap yozing (bo'yi, qomati, sochi, ko'zlari, yoshi; ko'zoynak/soqol bormi). Kim kimga o'xshashini ham yozing: *My sister looks like my mother.* Keyin bitta mashhur odamni tasvirlab, do'stingizga topishmoq qilib bering.",
};

export default lesson;
