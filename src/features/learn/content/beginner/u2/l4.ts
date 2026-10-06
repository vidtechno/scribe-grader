import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: 'u2-l4',
  title: 'To be: questions',
  titleUz: 'To be: savollar va qisqa javoblar',
  goal: "**Are you…? Is she…?** kabi savollar berasiz, ularga **Yes, I am / No, I'm not** shaklida to'g'ri qisqa javob qaytarasiz va odamlar qayerdaligini (*at home, at work, at school*) so'raysiz.",
  slides: [
    {
      title: "Savol: so'zlar o'rni almashadi",
      blocks: [
        { t: 'p', md: "O'zbek tilida savol uchun **-mi** qo'shimchasini qo'shamiz: *Siz talaba**mi**siz?* So'zlar tartibi o'zgarmaydi." },
        { t: 'p', md: "Ingliz tilida **-mi** yo'q. Uning o'rniga **am / is / are gapning boshiga chiqadi**:\n• You **are** a student. → **Are** you a student?\n• She **is** at home. → **Is** she at home?" },
        {
          t: 'compare',
          good: { title: "To'g'ri", items: ['Are you a student?', 'Is he at work?', 'Is Ali tired?'] },
          bad: { title: "Noto'g'ri", items: ['You are a student?', 'He at work?', 'Ali is tired?'] },
        },
        { t: 'tip', tone: 'info', md: "Og'zaki nutqda \"You are a student?\" ba'zan hayratni bildiradi, lekin **oddiy savol** uchun har doim **Are you…?** tartibidan foydalaning." },
        { t: 'check', ex: { k: 'order', uz: 'U charchaganmi? (ayol)', words: ['Is', 'she', 'tired'], extra: ['are'], why: "**Is** boshiga chiqadi: *Is she tired?*" } },
      ],
    },
    {
      title: 'Savol shakllari',
      blocks: [
        {
          t: 'table', head: ['Darak gap', 'Savol', "O'zbekcha"], speak: [1],
          rows: [
            ['I am late.', 'Am I late?', 'Kechikdimmi?'],
            ['You are ready.', 'Are you ready?', 'Tayyormisiz?'],
            ['He is at work.', 'Is he at work?', 'U ishdami?'],
            ['She is at school.', 'Is she at school?', 'U maktabdami?'],
            ['It is a bank.', 'Is it a bank?', 'Bu bankmi?'],
            ['We are at home.', 'Are we at home?', 'Biz uydamizmi?'],
            ['They are hungry.', 'Are they hungry?', 'Ularning qorni ochmi?'],
          ],
        },
        { t: 'p', md: "Ism bilan ham xuddi shunday: *Ali is busy.* → *Is Ali busy?* · *Tom and Sara are here.* → *Are Tom and Sara here?*" },
        { t: 'check', ex: { k: 'fill', q: '___ your teacher at school?', a: ['Is'], uz: "O'qituvchingiz maktabdami?", why: "Bitta odam — **Is**." } },
      ],
    },
    {
      title: 'Qisqa javoblar: Yes, I am / No, I\'m not',
      blocks: [
        { t: 'p', md: "Inglizlar savolga faqat \"Yes\" yoki \"No\" deb qo'ya qolmaydi — **qisqa javob** beradi: **Yes / No + olmosh + am/is/are (+ not)**." },
        {
          t: 'table', head: ['Savol', 'Ha', "Yo'q"], speak: [1, 2],
          rows: [
            ['Am I late?', 'Yes, you are.', "No, you aren't."],
            ['Are you ready?', 'Yes, I am.', "No, I'm not."],
            ['Is he at home?', 'Yes, he is.', "No, he isn't."],
            ['Is she busy?', 'Yes, she is.', "No, she isn't."],
            ['Is it a shop?', 'Yes, it is.', "No, it isn't."],
            ['Are you students?', 'Yes, we are.', "No, we aren't."],
            ['Are they at work?', 'Yes, they are.', "No, they aren't."],
          ],
        },
        { t: 'tip', tone: 'warn', md: "**\"Yes\" javobida qisqa shakl ishlatilmaydi!** Gap oxirida **am / is / are** to'liq turishi kerak: **Yes, I am.** — \"Yes, I'm\" emas. **Yes, he is.** — \"Yes, he's\" emas." },
        {
          t: 'compare',
          good: { title: "To'g'ri", items: ['Yes, I am.', 'Yes, she is.', "No, I'm not.", "No, it isn't."] },
          bad: { title: "Noto'g'ri", items: ["Yes, I'm.", "Yes, she's.", 'No, I amn\'t.', 'Yes, I is.'] },
        },
        { t: 'check', ex: { k: 'choice', q: "*Are you tired?* — ijobiy qisqa javob:", opts: ["Yes, I'm.", 'Yes, I am.', 'Yes, you are.', 'Yes, I is.'], a: 1, why: "**Yes, I am.** — ha javobida qisqartirish yo'q." } },
      ],
    },
    {
      title: 'Javobda olmosh, ism emas',
      blocks: [
        { t: 'p', md: "Savolda ism bo'lsa ham, qisqa javobda **olmosh** ishlatiladi. Savolga **you** bilan berilsa, javob **I** yoki **we** bilan boshlanadi." },
        {
          t: 'examples', items: [
            { en: 'Is Ali at work? — Yes, he is.', uz: 'Ali ishdami? — Ha.' },
            { en: 'Is Malika at home? — No, she isn\'t.', uz: "Malika uydami? — Yo'q." },
            { en: 'Is the bank open? — Yes, it is.', uz: 'Bank ochiqmi? — Ha.' },
            { en: 'Are Tom and Sara at school? — No, they aren\'t.', uz: "Tom va Sara maktabdami? — Yo'q." },
            { en: 'Are you and Ali friends? — Yes, we are.', uz: "Sen va Ali do'stmisizlar? — Ha." },
          ],
        },
        { t: 'tip', tone: 'warn', md: "Tabiiy emas: *Is Ali at work? — Yes, Ali is.* Bu grammatik jihatdan xato emas, lekin g'alati eshitiladi. To'g'risi: **Yes, he is.**" },
        { t: 'check', ex: { k: 'fill', q: 'Is the shop open? — Yes, ___ is.', a: ['it'], why: "Do'kon — narsa: **it**." } },
      ],
    },
    {
      title: 'Ohang va talaffuz',
      blocks: [
        { t: 'p', md: "**Ha/yo'q** savollarida ovoz oxirida **ko'tariladi** ↗. O'zbekchada ham shunday, shuning uchun bu sizga qiyin bo'lmaydi." },
        {
          t: 'sounds', items: [
            { label: 'Are you…? ↗', say: 'Are you ready?', uz: "Savolda **are** kuchsiz aytiladi — **\"ə\"**: \"ə yu: redi ↗\". Oxirgi so'zda ovoz ko'tariladi.", examples: ['Are you ready?', 'Are you at home?'] },
            { label: 'Yes, I am. ↘', say: 'Yes, I am.', uz: "Qisqa javobda **am** kuchli va to'liq aytiladi: **\"æm\"**. Ovoz pastga tushadi.", examples: ['Yes, I am.', 'Yes, we are.'] },
            { label: 'Is he…? ↗', say: 'Is he at work?', uz: "**Is he** qo'shilib aytiladi: \"izi:\" — *h* deyarli eshitilmaydi.", examples: ['Is he at work?', 'Is she at school?'] },
          ],
        },
        { t: 'tip', tone: 'good', md: "Qoida: savolda **am/is/are** kuchsiz va tez, qisqa javob oxirida esa — kuchli va aniq. Shuning uchun *Yes, I'm* deb bo'lmaydi: oxirgi so'z kuchli aytilishi kerak." },
        { t: 'check', ex: { k: 'listen', say: 'Is she at work?', opts: ['Is he at work?', 'Is she at work?', 'She is at work.', 'Is she at school?'], a: 1 } },
      ],
    },
    {
      title: 'Joylar: at home, at work, at school',
      blocks: [
        { t: 'p', md: "Odam qayerdaligini aytish uchun **at** ishlatamiz. Ba'zi iboralarda **the** yo'q — ularni tayyor ibora sifatida yodlang:\n• **at home** — uyda\n• **at work** — ishda\n• **at school** — maktabda (o'qishda)" },
        {
          t: 'examples', items: [
            { en: "I'm at home.", uz: 'Men uydaman.' },
            { en: 'Is he at work?', uz: 'U ishdami?' },
            { en: 'She is at the office.', uz: 'U ofisda.' },
            { en: 'Are they at the shop?', uz: "Ular do'kondami?" },
            { en: 'We are in the park.', uz: 'Biz bog\'damiz.', note: "park uchun **in the park**" },
            { en: 'Is the library open?', uz: 'Kutubxona ochiqmi?' },
            { en: 'Is it a hospital?', uz: 'Bu kasalxonami?' },
            { en: 'The bank is big.', uz: 'Bank katta.' },
            { en: 'The market is cheap.', uz: 'Bozor arzon.' },
          ],
        },
        { t: 'tip', tone: 'info', md: "\"at home\" — **the** siz! *at the home* deyilmaydi. Joy predloglarini (in, on, under…) 4-bo'limda batafsil o'rganamiz." },
        {
          t: 'dialog', lines: [
            { who: 'Lola', en: 'Hi, Aziz! Are you at home?', uz: 'Salom, Aziz! Uydamisan?' },
            { who: 'Aziz', en: "No, I'm not. I'm at the library.", uz: "Yo'q. Kutubxonadaman." },
            { who: 'Lola', en: 'Is Tom at the library too?', uz: 'Tom ham kutubxonadami?' },
            { who: 'Aziz', en: "No, he isn't. He's at work.", uz: "Yo'q. U ishda." },
            { who: 'Lola', en: 'Is the market open?', uz: 'Bozor ochiqmi?' },
            { who: 'Aziz', en: "Yes, it is. Are you hungry?", uz: "Ha, ochiq. Qorning ochmi?" },
            { who: 'Lola', en: 'Yes, I am!', uz: 'Ha!' },
          ],
        },
        { t: 'check', ex: { k: 'translate', uz: 'U ishdami? (erkak)', a: ['Is he at work'], why: "**Is he at work?** — *at work*, *the* siz." } },
      ],
    },
  ],
  words: [
    { en: 'home', uz: 'uy (o\'z uyi)', ipa: 'həʊm', pos: 'noun', ex: "I'm at home.", exUz: 'Men uydaman.' },
    { en: 'school', uz: 'maktab', ipa: 'skuːl', pos: 'noun', ex: 'Is she at school?', exUz: 'U maktabdami?' },
    { en: 'work', uz: 'ish', ipa: 'wɜːk', pos: 'noun', ex: "He's at work.", exUz: 'U ishda.' },
    { en: 'office', uz: 'ofis, idora', ipa: 'ˈɒf.ɪs', pos: 'noun', ex: 'Is Ali at the office?', exUz: 'Ali ofisdami?' },
    { en: 'shop', uz: "do'kon", ipa: 'ʃɒp', pos: 'noun', ex: 'Is the shop open?', exUz: "Do'kon ochiqmi?" },
    { en: 'park', uz: "bog', park", ipa: 'pɑːk', pos: 'noun', ex: 'We are in the park.', exUz: "Biz bog'damiz." },
    { en: 'hospital', uz: 'kasalxona', ipa: 'ˈhɒs.pɪ.təl', pos: 'noun', ex: 'Is it a hospital?', exUz: 'Bu kasalxonami?' },
    { en: 'bank', uz: 'bank', ipa: 'bæŋk', pos: 'noun', ex: 'The bank is open.', exUz: 'Bank ochiq.' },
    { en: 'library', uz: 'kutubxona', ipa: 'ˈlaɪ.brər.i', pos: 'noun', ex: "I'm at the library.", exUz: 'Men kutubxonadaman.' },
    { en: 'market', uz: 'bozor', ipa: 'ˈmɑː.kɪt', pos: 'noun', ex: 'Is the market big?', exUz: 'Bozor kattami?' },
  ],
  practice: [
    { k: 'choice', q: "To'g'ri savolni tanlang: *Siz tayyormisiz?*", opts: ['You are ready?', 'Are you ready?', 'Ready are you?', 'Is you ready?'], a: 1, why: "**Are** boshiga chiqadi: *Are you ready?*" },
    { k: 'choice', q: "*Is Malika at home?* — Yo'q javobi:", opts: ["No, she isn't.", "No, he isn't.", "No, Malika not.", "No, she aren't."], a: 0, why: "Malika — **she**: *No, she isn't.*" },
    { k: 'listen', say: 'Are they at the market?', opts: ['Are they at the park?', 'They are at the market.', 'Are they at the market?', 'Is he at the market?'], a: 2 },
    { k: 'listen', say: 'Yes, I am.', opts: ["Yes, I'm.", 'Yes, I am.', 'Yes, you are.', "No, I'm not."], a: 1 },
    { k: 'match', pairs: [['school', 'maktab'], ['shop', "do'kon"], ['hospital', 'kasalxona'], ['library', 'kutubxona'], ['market', 'bozor'], ['office', 'ofis']] },
    { k: 'match', pairs: [['Are you ready?', 'Yes, I am.'], ['Is he at work?', 'Yes, he is.'], ['Is it a bank?', "No, it isn't."], ['Are they hungry?', 'Yes, they are.']] },
    { k: 'tf', q: "*Are you a student? — Yes, I'm.* — to'g'ri javob.", a: false, why: "Ha javobida qisqartirish yo'q: **Yes, I am.**" },
    { k: 'tf', q: "\"Uydaman\" — inglizcha *I'm at home* (the siz).", a: true },
    { k: 'fill', q: '___ you at school?', a: ['Are'], uz: 'Maktabdamisiz?' },
    { k: 'fill', q: 'Is Aziz at the park? — No, he ___.', a: ["isn't", 'is not'], why: "Aziz — he: **No, he isn't.**" },
    { k: 'fill', q: 'Are you tired? — Yes, I ___.', a: ['am'], why: "**Yes, I am.**" },
    { k: 'order', uz: 'Kutubxona ochiqmi?', words: ['Is', 'the', 'library', 'open'], extra: ['Are'] },
    { k: 'order', uz: 'Ular bankdami?', words: ['Are', 'they', 'at', 'the', 'bank'], extra: ['is'] },
    { k: 'translate', uz: 'Siz uydamisiz?', a: ['Are you at home'], why: "**Are you at home?**" },
    { k: 'translate', uz: "Yo'q, men ishdaman.", a: ["No, I'm at work", 'No, I am at work', "No I'm at work", 'No I am at work'], why: "**No, I'm at work.**" },
    { k: 'speak', say: 'Are you at home? Yes, I am.', uz: "Savolni ko'tarilgan ohang bilan, javobni aniq ayting" },
  ],
  quiz: [
    { k: 'listen', say: 'Is she at the hospital?', opts: ['Is she at the hospital?', 'She is at the hospital.', 'Is he at the hospital?', 'Is she at the office?'], a: 0 },
    { k: 'choice', q: "*Are you and Ali at school?* — Ha javobi:", opts: ['Yes, they are.', 'Yes, I am.', 'Yes, you are.', 'Yes, we are.'], a: 3, why: "Sen + Ali = **we**: *Yes, we are.*" },
    { k: 'choice', q: "Qaysi gap **noto'g'ri**?", opts: ['Is the shop open?', "Yes, he's.", "No, I'm not.", 'Are they at work?'], a: 1, why: "\"Yes, he's\" — xato. To'g'ri: **Yes, he is.**" },
    { k: 'fill', q: '___ the market big?', a: ['Is'], uz: 'Bozor kattami?' },
    { k: 'fill', q: 'Are Tom and Sara at work? — No, ___ aren\'t.', a: ['they'] },
    { k: 'fill', q: 'Is your teacher at the office? — Yes, she ___.', a: ['is'] },
    { k: 'translate', uz: 'U maktabdami? (ayol)', a: ['Is she at school'] },
    { k: 'translate', uz: "Do'kon ochiqmi?", a: ['Is the shop open'] },
    { k: 'order', uz: "Yo'q, u kasalxonada emas (erkak).", words: ['No', "he", "isn't", 'at', 'the', 'hospital'], extra: ['not'], alt: [['No', "he's", 'not', 'at', 'the', 'hospital']] },
    { k: 'match', pairs: [['home', 'uy'], ['work', 'ish'], ['park', "bog'"], ['bank', 'bank'], ['school', 'maktab']] },
  ],
  summary: [
    "Savolda **am / is / are** boshiga chiqadi: *You are* → **Are you…?**",
    "Qisqa javob: **Yes, I am. / No, I'm not.** · **Yes, she is. / No, she isn't.**",
    "\"Yes, I'm\", \"Yes, he's\" — **xato**: ha javobida qisqartirilmaydi.",
    "Javobda ism emas, **olmosh**: *Is Ali at work? — Yes, **he** is.*",
    "Joylar: **at home, at work, at school**; at the office / shop / bank / library / market / hospital; in the park.",
  ],
  homework: "Do'stingizga 5 ta savol yozing (*Are you at home? Is your friend at work?…*) va har biriga ikki xil qisqa javob yozing: ha va yo'q. Savollarni ko'tarilgan ohang bilan ovoz chiqarib o'qing.",
};

export default lesson;
