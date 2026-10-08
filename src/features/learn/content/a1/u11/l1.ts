import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u11-l1",
  title: "Have you ever…?",
  titleUz: "Present Perfect: Have you ever…?",
  goal: "Hayotingizdagi tajribalar haqida gapirasiz va so'raysiz: **Have you ever been to…? — Yes, I have. / No, I haven't. I've never…** Yangi zamon — **Present Perfect (have / has + V3)** bilan tanishasiz.",
  slides: [
    {
      title: "Yangi zamon: hayotimdagi tajriba",
      blocks: [
        { t: "p", md: "Siz allaqachon ikki zamonni yaxshi bilasiz: **Present Simple** (*I live in Tashkent*) va **Past Simple** (*I went to Bukhara last year*). Past Simple har doim **aniq o'tgan vaqt** haqida: *kecha, o'tgan yili, 2019-yilda*." },
        { t: "p", md: "Lekin ba'zan **qachon** bo'lgani muhim emas — muhimi, hayotingizda bu **bo'lganmi yoki yo'qmi**. O'zbekchada biz buni **-gan** bilan aytamiz: *Men Samarqandda **bo'lganman**. Siz tuya **minganmisiz**?* Ingliz tilida buning uchun **Present Perfect** ishlatiladi." },
        {
          t: "examples", items: [
            { en: "I have been to Samarkand.", uz: "Men Samarqandda bo'lganman.", note: "Qachon? Muhim emas — hayotimda bo'lgan." },
            { en: "She has seen the sea.", uz: "U (ayol) dengizni ko'rgan." },
            { en: "We have tried Korean food.", uz: "Biz koreys taomini tatib ko'rganmiz." },
            { en: "Have you ever ridden a camel?", uz: "Siz hech qachon tuya minganmisiz?" },
          ],
        },
        {
          t: "table", head: ["Ega", "have / has", "V3", "Qisqa shakl"], speak: [3],
          rows: [
            ["I / you / we / they", "have", "been, seen, tried…", "I've been, you've seen, they've tried"],
            ["he / she / it", "has", "been, seen, tried…", "he's been, she's seen, it's rained"],
          ],
        },
        { t: "tip", tone: "info", md: "Formula juda oddiy: **have / has + V3** (fe'lning uchinchi shakli). **he / she / it** bilan — **has**, qolganlari bilan — **have**. Xuddi Present Simple dagi *-s* qoidasi kabi: *she work**s*** → *she **has*** worked." },
        { t: "check", ex: { k: "choice", q: "\"U (he) Londonda bo'lgan.\"", opts: ["He have been to London.", "He has been to London.", "He is been to London.", "He has be to London."], a: 1, why: "**he → has** + V3 **been**. *is been* degan shakl yo'q." } },
      ],
    },
    {
      title: "V3 — uchinchi shakl",
      blocks: [
        { t: "p", md: "Har bir fe'lning uchta asosiy shakli bor: **V1** (lug'atdagi), **V2** (Past Simple), **V3** (past participle). **To'g'ri fe'llarda** V2 va V3 bir xil — **-ed**:" },
        {
          t: "table", head: ["V1", "V2", "V3", "Misol"], speak: [0, 2],
          rows: [
            ["visit", "visited", "visited", "I've visited Khiva."],
            ["try", "tried", "tried", "She's tried horse meat."],
            ["play", "played", "played", "We've played golf."],
            ["travel", "travelled", "travelled", "They've travelled abroad."],
          ],
        },
        { t: "p", md: "**Noto'g'ri fe'llarda** V3 ni alohida yodlash kerak. Bugun eng kerakli 8 tasi (keyingi darsda yana ko'p):" },
        {
          t: "table", head: ["V1", "V2", "V3", "Ma'nosi"], speak: [0, 1, 2],
          rows: [
            ["be", "was / were", "been", "bo'lmoq"],
            ["see", "saw", "seen", "ko'rmoq"],
            ["eat", "ate", "eaten", "yemoq"],
            ["do", "did", "done", "qilmoq"],
            ["meet", "met", "met", "uchrashmoq, tanishmoq"],
            ["read", "read", "read", "o'qimoq"],
            ["ride", "rode", "ridden", "minmoq (ot, velosiped)"],
            ["fly", "flew", "flown", "uchmoq"],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I've seen this film.", "She's eaten sushi.", "We've met him."] },
          bad: { title: "Xato", items: ["I've saw this film.", "She's ate sushi.", "We've meet him."] },
        },
        { t: "tip", tone: "warn", md: "Eng ko'p xato: **have + V2**. *I have saw* ❌, *I have went* ❌. **have** dan keyin doim **V3**: *I have **seen***, *I have **been***." },
        { t: "check", ex: { k: "fill", q: "Have you ever ___ a horse? (ride)", a: ["ridden"], why: "**ride – rode – ridden**. have dan keyin V3: **ridden**." } },
      ],
    },
    {
      title: "Have you ever…? — savol va qisqa javob",
      blocks: [
        { t: "p", md: "Savolda **have / has** egadan oldinga chiqadi. **ever** (hech, qachondir) V3 dan oldin turadi va \"hayotingizda biror marta\" degan ma'noni beradi:" },
        {
          t: "table", head: ["Savol", "Ha", "Yo'q"], speak: [0, 1, 2],
          rows: [
            ["Have you ever been to Japan?", "Yes, I have.", "No, I haven't."],
            ["Has she ever flown?", "Yes, she has.", "No, she hasn't."],
            ["Have they ever met a famous person?", "Yes, they have.", "No, they haven't."],
          ],
        },
        { t: "tip", tone: "warn", md: "Qisqa javob savoldagi yordamchi fe'l bilan beriladi: savol **Have…?** → javob **Yes, I have**. *Yes, I did* ❌ (bu Past Simple savoliga javob). *Yes, I've* ❌ — qisqa javob oxirida qisqartma ishlatilmaydi." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["Have you ever been to Khiva? — Yes, I have.", "Has he ever eaten plov? — Of course he has!", "Have you ever flown? — No, never."] },
          bad: { title: "Xato", items: ["Did you ever been to Khiva?", "Have you ever went to Khiva?", "— Yes, I've."] },
        },
        { t: "check", ex: { k: "choice", q: "**Has your brother ever been abroad?** — \"Ha\" javobi:", opts: ["Yes, he did.", "Yes, he has.", "Yes, he have.", "Yes, he's."], a: 1, why: "Savol **Has…?** → **Yes, he has.**" } },
      ],
    },
    {
      title: "never, once, twice…",
      blocks: [
        { t: "p", md: "**Inkor** ikki xil: **haven't / hasn't + V3** yoki **have / has + never + V3** (hech qachon). *never* o'zi inkor so'z, shuning uchun unga yana *not* qo'shilmaydi." },
        {
          t: "examples", items: [
            { en: "I've never been abroad.", uz: "Men hech qachon chet elda bo'lmaganman." },
            { en: "My grandmother has never flown.", uz: "Buvim hech qachon samolyotda uchmagan." },
            { en: "We haven't seen the new film.", uz: "Biz yangi filmni ko'rmaganmiz." },
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I've never eaten sushi.", "I haven't eaten sushi."] },
          bad: { title: "Xato (ikki inkor)", items: ["I haven't never eaten sushi.", "I don't never eaten sushi."] },
        },
        { t: "p", md: "**Necha marta?** Gap oxirida: **once** (bir marta), **twice** (ikki marta), **three times**, **many times**." },
        {
          t: "table", head: ["Inglizcha", "O'zbekcha"], speak: [0],
          rows: [
            ["I've been to Bukhara once.", "Buxoroda bir marta bo'lganman."],
            ["She's flown to Istanbul twice.", "U Istanbulga ikki marta uchgan."],
            ["We've seen this film three times.", "Bu filmni uch marta ko'rganmiz."],
            ["He's eaten here many times.", "U bu yerda ko'p marta ovqatlangan."],
          ],
        },
        { t: "tip", tone: "info", md: "**been to** = borib kelgan: *I've **been to** Paris* — Parijda bo'lganman. Joy oldidan **to** ishlating. (**been** va **gone** farqini keyingi darsda o'rganamiz.)" },
        { t: "check", ex: { k: "order", uz: "U (she) hech qachon tuya minmagan.", words: ["She", "has", "never", "ridden", "a", "camel."], extra: ["ever", "rode"], why: "has + **never** + V3. *never* bilan *not* ishlatilmaydi." } },
      ],
    },
    {
      title: "Talaffuz: I've, she's, haven't",
      blocks: [
        { t: "p", md: "Og'zaki nutqda deyarli doim **qisqa shakllar** ishlatiladi. Ularni eshitib tanib olish muhim:" },
        {
          t: "sounds", items: [
            { label: "I've", say: "I've been there.", uz: "**\"ayv\"** — *v* juda yengil, lekin eshitiladi. *I been* ❌ demang.", examples: ["I've", "I've been there.", "We've", "They've"] },
            { label: "she's", say: "She's seen it.", uz: "**\"shi:z\"** — *she has* ning qisqasi. Diqqat: *she's* = *she is* ham bo'lishi mumkin! Keyingi so'zga qarang: **she's + V3** = has.", examples: ["She's seen it.", "She's tired."] },
            { label: "haven't", say: "haven't", uz: "**\"hevnt\"** — o'rtadagi *e* deyarli eshitilmaydi.", examples: ["haven't", "hasn't", "No, I haven't."] },
            { label: "been", say: "been", uz: "**\"bi:n\"**, tez nutqda **\"bin\"** ga yaqin. *bean* (loviya) bilan bir xil yoki juda yaqin eshitiladi.", examples: ["been", "I've been to Paris."] },
            { label: "ever", say: "Have you ever…?", uz: "**\"evə\"** — oxiridagi *r* o'qilmaydi (British). *Have you* tez aytilganda **\"həv yu\"**.", examples: ["ever", "Have you ever been to Japan?"] },
          ],
        },
        { t: "check", ex: { k: "tf", q: "**She's eaten plov.** gapidagi **she's** = **she is**.", a: false, why: "**'s + V3 (eaten)** = **she has**. *She's tired* da esa 's = is." } },
      ],
    },
    {
      title: "O'qing: Dilnozaning ro'yxati",
      blocks: [
        {
          t: "text", title: "Dilnoza's list",
          en: "Dilnoza is twenty-four and she works in a bank in Tashkent. She loves travelling. She has been to Samarkand, Bukhara and Khiva, and she has flown to Istanbul twice.\nBut Dilnoza has a list of things she has never done. She has never seen the ocean. She has never ridden a camel. She has never eaten Japanese food, and she has never met a famous person.\nThis year she is going to change that. In June she is going to fly to Dubai with her sister. \"I've never been so excited,\" she says.",
          uz: "Dilnoza yigirma to'rt yoshda, Toshkentdagi bankda ishlaydi. U sayohat qilishni yaxshi ko'radi. U Samarqand, Buxoro va Xivada bo'lgan, Istanbulga esa ikki marta uchgan.\nLekin Dilnozaning hech qachon qilmagan narsalari ro'yxati bor. U hech qachon okeanni ko'rmagan. Hech qachon tuya minmagan. Hech qachon yapon taomini yemagan va hech qachon mashhur odam bilan tanishmagan.\nBu yil u buni o'zgartirmoqchi. Iyunda singlisi bilan Dubayga uchmoqchi. \"Hech qachon bunchalik hayajonlanmaganman\", deydi u.",
        },
        { t: "check", ex: { k: "tf", q: "Dilnoza has been to Istanbul once.", a: false, why: "Matnda: *she has flown to Istanbul **twice*** — ikki marta." } },
        { t: "check", ex: { k: "choice", q: "Which is true about Dilnoza?", opts: ["She has ridden a camel.", "She has never seen the ocean.", "She has met a famous person.", "She has never been to Khiva."], a: 1, why: "*She has never seen the ocean.*" } },
      ],
    },
    {
      title: "Dialog: Have you ever tried…?",
      blocks: [
        { t: "p", md: "Tom — Londondan kelgan o'qituvchi. U Bobur bilan Toshkentdagi choyxonada o'tiribdi:" },
        {
          t: "dialog", lines: [
            { who: "Bobur", en: "Have you ever tried somsa, Tom?", uz: "Tom, siz hech somsa tatib ko'rganmisiz?" },
            { who: "Tom", en: "No, I haven't. Is it good?", uz: "Yo'q. Mazalimi?" },
            { who: "Bobur", en: "It's delicious! Here, try one. Have you ever been to Uzbekistan before?", uz: "Juda mazali! Mana, bittasini tatib ko'ring. Avval O'zbekistonda bo'lganmisiz?" },
            { who: "Tom", en: "No, never. It's my first time. But I've been to Kazakhstan once.", uz: "Yo'q, hech qachon. Bu birinchi marta. Lekin Qozog'istonda bir marta bo'lganman." },
            { who: "Bobur", en: "And have you ever been to a real Uzbek wedding?", uz: "Haqiqiy o'zbek to'yida bo'lganmisiz?" },
            { who: "Tom", en: "No, I haven't. My friends have been to many, and they say it's amazing!", uz: "Yo'q. Do'stlarim ko'p bo'lishgan, ular ajoyib deyishadi!" },
            { who: "Bobur", en: "My cousin is getting married on Saturday. Come with me!", uz: "Amakivachcham shanba kuni uylanyapti. Men bilan boring!" },
          ],
        },
        { t: "tip", tone: "good", md: "Suhbatni boshlash uchun **Have you ever…?** — eng tabiiy savol. Javob bergandan keyin suhbatni davom ettiring: *Is it good? Did you like it?*" },
        { t: "check", ex: { k: "tf", q: "Tom has been to Kazakhstan.", a: true, why: "*I've been to Kazakhstan once.*" } },
      ],
    },
  ],
  words: [
    { en: "ever", uz: "hech, qachondir (savolda)", ipa: "ˈevə", pos: "adverb", ex: "Have you ever been to Khiva?", exUz: "Siz hech Xivada bo'lganmisiz?" },
    { en: "many times", uz: "ko'p marta", ipa: "ˈmeni taɪmz", pos: "phrase", ex: "He has eaten here many times.", exUz: "U bu yerda ko'p marta ovqatlangan." },
    { en: "camel", uz: "tuya", ipa: "ˈkæml", pos: "noun", ex: "I've never ridden a camel.", exUz: "Men hech qachon tuya minmaganman." },
    { en: "ocean", uz: "okean", ipa: "ˈəʊʃn", pos: "noun", ex: "She has never seen the ocean.", exUz: "U hech qachon okeanni ko'rmagan." },
    { en: "try", uz: "tatib ko'rmoq, sinab ko'rmoq", ipa: "traɪ", pos: "verb", ex: "Have you ever tried Korean food?", exUz: "Koreys taomini tatib ko'rganmisiz?" },
    { en: "ride – rode – ridden", uz: "minmoq (ot, tuya, velosiped)", ipa: "raɪd – rəʊd – ˈrɪdn", pos: "verb", ex: "I've never ridden a camel.", exUz: "Men hech qachon tuya minmaganman." },
    { en: "foreign", uz: "xorijiy, chet ellik", ipa: "ˈfɒrən", pos: "adjective", ex: "He has visited five foreign countries.", exUz: "U beshta xorijiy davlatga borgan." },
    { en: "famous", uz: "mashhur", ipa: "ˈfeɪməs", pos: "adjective", ex: "Have you ever met a famous person?", exUz: "Siz hech mashhur odam bilan tanishganmisiz?" },
    { en: "experience", uz: "tajriba, hodisa", ipa: "ɪkˈspɪəriəns", pos: "noun", ex: "It was a great experience.", exUz: "Bu ajoyib tajriba bo'ldi." },
    { en: "in my life", uz: "hayotimda", ipa: "ɪn maɪ laɪf", pos: "phrase", ex: "I've never seen snow in my life.", exUz: "Hayotimda hech qachon qor ko'rmaganman." },
  ],
  practice: [
    { k: "listen", say: "Have you ever been to Japan?", opts: ["Have you ever been to Japan?", "Did you ever go to Japan?", "Are you ever in Japan?"], a: 0, why: "**Have you ever been to…?** — tajriba haqida savol." },
    { k: "listen", say: "She's never ridden a horse.", opts: ["She never rides a horse.", "She's never ridden a horse.", "She didn't ride a horse."], a: 1 },
    { k: "match", pairs: [["be", "been"], ["see", "seen"], ["eat", "eaten"], ["meet", "met"], ["fly", "flown"]] },
    { k: "match", pairs: [["once", "bir marta"], ["twice", "ikki marta"], ["abroad", "chet elda"], ["famous", "mashhur"], ["foreign", "xorijiy"]] },
    { k: "fill", q: "Have you ever ___ to Paris? (be)", a: ["been"], why: "have + V3: **been**." },
    { k: "fill", q: "My father ___ never flown.", a: ["has"], uz: "Otam hech qachon samolyotda uchmagan.", why: "*my father* = **he** → **has**." },
    { k: "fill", q: "We have ___ this film three times. (see)", a: ["seen"], why: "**see – saw – seen**." },
    { k: "choice", q: "**Have you ever met a famous person?** — \"Yo'q\" javobi:", opts: ["No, I haven't.", "No, I didn't.", "No, I don't.", "No, I have not been."], a: 0, why: "**Have…?** → **No, I haven't.** Qisqa javobda V3 takrorlanmaydi." },
    { k: "choice", q: "Qaysi gap **to'g'ri**?", opts: ["I have saw this film.", "I have seen this film.", "I has seen this film.", "I seen this film."], a: 1, why: "**I + have + V3 (seen)**. *saw* — V2." },
    { k: "tf", q: "**I haven't never been abroad.** — to'g'ri gap.", a: false, why: "Ikki inkor bo'lmaydi: **I've never been abroad** yoki **I haven't been abroad**." },
    { k: "tf", q: "Present Perfect da **qachon** bo'lgani aytilmaydi — muhimi, hayotda bo'lganmi yoki yo'qmi.", a: true, why: "Tajriba haqida: *I've been to Khiva.* Aniq vaqt kerak bo'lsa — Past Simple." },
    { k: "order", uz: "Siz hech qachon tuya minganmisiz?", words: ["Have", "you", "ever", "ridden", "a", "camel?"], extra: ["did", "rode"], why: "**Have + you + ever + V3**." },
    { k: "order", uz: "U (she) Turkiyada ikki marta bo'lgan.", words: ["She", "has", "been", "to", "Turkey", "twice."], extra: ["have", "was"] },
    { k: "translate", uz: "Siz hech qachon chet elda bo'lganmisiz?", a: ["Have you ever been abroad?", "Have you been abroad?", "Have you ever travelled abroad?", "Have you ever traveled abroad?", "Have you ever been to another country?", "Have you ever been to a foreign country?"] },
    { k: "translate", uz: "Men hech qachon sushi yemaganman.", a: ["I have never eaten sushi.", "I've never eaten sushi.", "I have never tried sushi.", "I've never tried sushi.", "I haven't eaten sushi.", "I have not eaten sushi.", "I haven't ever eaten sushi.", "I haven't tried sushi.", "I have not tried sushi.", "I have never had sushi.", "I've never had sushi.", "I haven't had sushi.", "I have not had sushi.", "I've not eaten sushi."] },
    { k: "speak", say: "I've been to Samarkand three times.", uz: "Men Samarqandda uch marta bo'lganman." },
  ],
  quiz: [
    { k: "listen", say: "Has he ever eaten plov?", opts: ["Has he ever eaten plov?", "Does he ever eat plov?", "Did he ever eat plov?"], a: 0 },
    { k: "fill", q: "She has never ___ Japanese food. (eat)", a: ["eaten"], why: "**eat – ate – eaten**." },
    { k: "fill", q: "___ your parents ever been to Khiva?", a: ["Have"], why: "*your parents* = **they** → **Have**." },
    { k: "fill", q: "I've been to Bukhara ___. (bir marta)", a: ["once", "one time"], why: "**once** = bir marta." },
    { k: "choice", q: "\"U (he) hech qachon samolyotda uchmagan.\"", opts: ["He has never flew.", "He hasn't never flown.", "He has never flown.", "He have never flown."], a: 2, why: "**has + never + V3 (flown)**." },
    { k: "choice", q: "**Have you ever been to London?** — **Yes, …**", opts: ["I did.", "I have.", "I've.", "I was."], a: 1, why: "Qisqa javob: **Yes, I have.** (*I've* qisqa javob oxirida ishlatilmaydi.)" },
    { k: "tf", q: "**Has she ever tried horse meat?** — to'g'ri savol.", a: true, why: "**Has + she + ever + V3 (tried)**." },
    { k: "order", uz: "Siz hech mashhur odam bilan tanishganmisiz?", words: ["Have", "you", "ever", "met", "a", "famous", "person?"], extra: ["meet", "did"] },
    { k: "translate", uz: "Ular (they) hech qachon dengizni ko'rmagan.", a: ["They have never seen the sea.", "They've never seen the sea.", "They haven't seen the sea.", "They have not seen the sea.", "They haven't ever seen the sea.", "They have never seen the ocean.", "They've never seen the ocean."] },
    { k: "match", pairs: [["ride", "ridden"], ["do", "done"], ["read", "read"], ["try", "tried"]] },
  ],
  summary: [
    "**Present Perfect = have / has + V3** — hayotdagi tajriba, qachon bo'lgani muhim emas: *I've been to Samarkand.*",
    "Savol: **Have you ever + V3?** → **Yes, I have. / No, I haven't.** (*Yes, I did* emas!)",
    "Inkor: **I've never + V3** yoki **I haven't + V3** — *never* bilan *not* birga ishlatilmaydi.",
    "V3: **been, seen, eaten, done, met, read, ridden, flown**; to'g'ri fe'llarda V3 = **-ed**.",
    "Necha marta: **once, twice, three times, many times** — gap oxirida.",
  ],
  homework: "\"Have you ever…?\" bilan 8 ta savol yozing (masalan: *Have you ever ridden a horse?*) va oila a'zosi yoki do'stingizga bering. Javoblarini inglizcha yozib chiqing: *My brother has ridden a horse twice. My mother has never flown.* O'zingiz haqida 5 ta gap: 3 tasi **I've…**, 2 tasi **I've never…**",
};

export default lesson;
