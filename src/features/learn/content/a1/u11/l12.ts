import type { Lesson } from '../../../types';

// Mini lesson (grammar): Present Perfect short answers and ever / never. One goal: answer Have you ever…? correctly.
const lesson: Lesson = {
  id: "u11-l12",
  title: "Present Perfect: short answers and never / ever",
  titleUz: "Present Perfect: qisqa javoblar, ever va never",
  mini: true,
  kind: 'grammar',
  goal: "**Have you ever…?** savoliga to'g'ri **qisqa javob** berasiz (*Yes, I have. / No, I haven't.*) va **ever** bilan **never** o'rnini bilasiz: *Have you ever seen snow? — No, never. I've never seen snow.*",
  slides: [
    {
      title: "Savol va qisqa javob",
      blocks: [
        { t: "p", md: "Siz **have / has + V3** ni bilasiz. Bugun faqat bitta narsa: tajriba savoliga **qisqa va to'g'ri javob** berish. Javob savoldagi **yordamchi fe'l** bilan beriladi — V3 takrorlanmaydi." },
        { t: "table", head: ["Savol", "Ha", "Yo'q"], speak: [0, 1, 2], rows: [
          ["Have you ever seen an elephant?", "Yes, I have.", "No, I haven't."],
          ["Has she ever been on a boat?", "Yes, she has.", "No, she hasn't."],
          ["Have they ever flown in a helicopter?", "Yes, they have.", "No, they haven't."],
        ] },
        { t: "examples", items: [
          { en: "Have you ever been to a zoo? — Yes, I have.", uz: "Hech hayvonot bog'ida bo'lganmisiz? — Ha, bo'lganman." },
          { en: "Has your brother ever flown in a plane? — No, he hasn't.", uz: "Akangiz hech samolyotda uchganmi? — Yo'q, uchmagan." },
          { en: "Have you ever seen snow? — No, never.", uz: "Hech qor ko'rganmisiz? — Yo'q, hech qachon." },
        ] },
        { t: "tip", tone: "info", md: "Javobda **Yes, I have** deymiz. **Yes, I did** emas (bu Past Simple savoliga javob) va **Yes, I have seen** emas (juda uzun va bu yerda keraksiz)." },
        { t: "check", ex: { k: "choice", q: "**Has he ever been on a boat?** — \"Yo'q\" javobi:", opts: ["No, he hasn't.", "No, he haven't.", "No, he didn't.", "No, he isn't."], a: 0, why: "Savol **Has…?** → **No, he hasn't.**" } },
      ],
    },
    {
      title: "ever yoki never?",
      blocks: [
        { t: "p", md: "**ever** — faqat **savolda** (va ba'zan inkorda): *Have you **ever** …?* **never** — **darak gapda**, \"hech qachon\" ma'nosida. *never* o'zi inkor, shuning uchun *not* qo'shilmaydi." },
        { t: "table", head: ["Savol", "Javob"], speak: [0, 1], rows: [
          ["Have you ever been to an island?", "No, never. I've never been to an island."],
          ["Has he ever seen snow?", "No, he hasn't. He's never seen snow."],
          ["Have you ever tried sushi?", "Yes, I have. I've tried it."],
        ] },
        { t: "compare",
          good: { title: "To'g'ri", items: ["I've never seen an elephant.", "Have you ever seen an elephant?", "Yes, I have."] },
          bad: { title: "Noto'g'ri", items: ["I've ever seen an elephant. (\"hech qachon\" ma'nosida)", "I haven't never seen an elephant.", "Yes, I did."] } },
        { t: "check", ex: { k: "fill", q: "Have you ___ flown in a helicopter?", a: ["ever"], why: "Savolda **ever**: *Have you ever flown…?*" } },
        { t: "check", ex: { k: "fill", q: "I've ___ been to a zoo. (hech qachon)", a: ["never"], why: "Darak gapda \"hech qachon\" = **never**." } },
      ],
    },
    {
      title: "Dialog: Have you ever…?",
      blocks: [
        { t: "dialog", lines: [
          { who: "Anna", en: "Have you ever seen snow, Aziz?", uz: "Aziz, siz hech qor ko'rganmisiz?" },
          { who: "Aziz", en: "Yes, I have. We have snow in Tashkent every winter.", uz: "Ha. Toshkentda har qishda qor yog'adi." },
          { who: "Anna", en: "Have you ever been on a boat?", uz: "Hech kemada bo'lganmisiz?" },
          { who: "Aziz", en: "No, never. And you?", uz: "Yo'q, hech qachon. Siz-chi?" },
          { who: "Anna", en: "Yes, I have. I've been on a boat with my family.", uz: "Ha, bo'lganman. Oilam bilan kemada bo'lganman." },
        ] },
        { t: "check", ex: { k: "tf", q: "Aziz has been on a boat.", a: false, why: "Aziz: *No, never.*" } },
      ],
    },
  ],
  words: [
    { en: "island", uz: "orol", ipa: "ˈaɪlənd", pos: "noun", ex: "Have you ever been to an island?", exUz: "Hech orolda bo'lganmisiz?" },
    { en: "zoo", uz: "hayvonot bog'i", ipa: "zuː", pos: "noun", ex: "We have been to the zoo twice.", exUz: "Biz hayvonot bog'ida ikki marta bo'lganmiz." },
    { en: "elephant", uz: "fil", ipa: "ˈelɪfənt", pos: "noun", ex: "I have never seen an elephant.", exUz: "Men hech qachon fil ko'rmaganman." },
    { en: "snow", uz: "qor", ipa: "snəʊ", pos: "noun", ex: "She has never seen snow.", exUz: "U hech qachon qor ko'rmagan." },
    { en: "boat", uz: "qayiq, kema", ipa: "bəʊt", pos: "noun", ex: "He has never been on a boat.", exUz: "U hech qachon qayiqda bo'lmagan." },
    { en: "helicopter", uz: "vertolyot", ipa: "ˈhelɪkɒptə", pos: "noun", ex: "Have you ever flown in a helicopter?", exUz: "Hech vertolyotda uchganmisiz?" },
  ],
  practice: [
    { k: "listen", say: "Has she ever been on a boat?", opts: ["Has she ever been on a boat?", "Does she ever go on a boat?", "Did she go on a boat?"], a: 0, why: "**Has she ever been…?** — tajriba savoli." },
    { k: "match", pairs: [["island", "orol"], ["zoo", "hayvonot bog'i"], ["elephant", "fil"], ["snow", "qor"], ["boat", "qayiq, kema"]] },
    { k: "choice", q: "**Have you ever seen an elephant?** — \"Ha\" javobi:", opts: ["Yes, I have.", "Yes, I did.", "Yes, I has.", "Yes, I am."], a: 0, why: "**Have you…?** → **Yes, I have.**" },
    { k: "choice", q: "**Has your sister ever been to a zoo?** — \"Yo'q\":", opts: ["No, she haven't.", "No, she hasn't.", "No, she didn't.", "No, she doesn't."], a: 1, why: "**Has…?** → **No, she hasn't.**" },
    { k: "fill", q: "Have you ever ___ to an island? (be)", a: ["been"], why: "have + V3: **been**." },
    { k: "fill", q: "Has he ever ___ in a helicopter? (fly)", a: ["flown"], why: "**fly – flew – flown**." },
    { k: "fill", q: "A: Have you ever seen snow? B: No, I ___.", a: ["haven't", "have not"], why: "Qisqa javob: **No, I haven't.**" },
    { k: "tf", q: "**I haven't never seen snow.** — to'g'ri gap.", a: false, why: "Ikki inkor bo'lmaydi: *I've never seen snow* yoki *I haven't seen snow*." },
    { k: "fix", wrong: "Have you ever saw an elephant?", a: ["Have you ever seen an elephant?"], why: "**have** dan keyin V3: **seen**." },
    { k: "fix", wrong: "I've ever been on a boat.", a: ["I've never been on a boat.", "I have never been on a boat."], hint: "Gap \"hech qachon bo'lmaganman\" degan ma'noda.", why: "Darak gapda \"hech qachon\" = **never**." },
    { k: "order", uz: "Siz hech vertolyotda uchganmisiz?", words: ["Have", "you", "ever", "flown", "in", "a", "helicopter?"], extra: ["did", "flew"], why: "**Have + you + ever + V3**." },
    { k: "translate", uz: "Men hech qachon fil ko'rmaganman.", a: ["I have never seen an elephant.", "I've never seen an elephant.", "I haven't seen an elephant.", "I have not seen an elephant.", "I haven't ever seen an elephant."] },
    { k: "speak", say: "No, I haven't. I've never seen snow.", uz: "Yo'q. Men hech qachon qor ko'rmaganman." },
  ],
  quiz: [
    { k: "listen", say: "Have you ever been to a zoo?", opts: ["Have you ever been to a zoo?", "Did you go to a zoo?", "Are you at the zoo?"], a: 0 },
    { k: "choice", q: "**Have they ever flown in a helicopter?** — \"Ha\":", opts: ["Yes, they have.", "Yes, they did.", "Yes, they has.", "Yes, they do."], a: 0, why: "**Have they…?** → **Yes, they have.**" },
    { k: "fill", q: "She has ___ been on a boat. (hech qachon)", a: ["never"], why: "**never** — hech qachon." },
    { k: "fill", q: "Have you ___ seen snow?", a: ["ever"], why: "Savolda — **ever**." },
    { k: "fix", wrong: "Yes, I did. I've seen an elephant.", a: ["Yes, I have. I've seen an elephant.", "Yes, I have."], hint: "Savol: Have you ever seen an elephant?", why: "**Have…?** savoliga: **Yes, I have.**" },
    { k: "order", uz: "U hech qachon orolda bo'lmagan.", words: ["He", "has", "never", "been", "to", "an", "island."], extra: ["ever", "was"] },
    { k: "translate", uz: "Siz hech qachon qor ko'rganmisiz?", a: ["Have you ever seen snow?"] },
    { k: "tf", q: "**Has he ever been to a zoo? — No, he hasn't.** — to'g'ri qisqa javob.", a: true, why: "**Has…?** → **No, he hasn't.**" },
  ],
  summary: [
    "Qisqa javob savoldagi yordamchi fe'l bilan: **Have you…? → Yes, I have. / No, I haven't.**",
    "**he / she / it** bilan: **Has she…? → Yes, she has. / No, she hasn't.**",
    "**ever** — savolda: *Have you ever…?* **never** — darak gapda: *I've never…* (*not* kerak emas).",
    "Yangi so'zlar: **island, zoo, elephant, snow, boat, helicopter**.",
  ],
  homework: "O'zingiz haqingizda 3 ta javob yozing: *Yes, I have. I've…* va *No, I haven't. I've never…* Keyin do'stingizga *Have you ever…?* deb 3 ta savol bering.",
};

export default lesson;
