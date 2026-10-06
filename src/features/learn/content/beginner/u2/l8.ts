import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: 'u2-l8',
  title: 'Countries, nationalities & jobs',
  titleUz: 'Davlatlar, millatlar va kasblar',
  goal: "Qayerdan ekaningizni (**I'm from Uzbekistan**), millatingizni (**I'm Uzbek**) va kasbingizni (**I'm a doctor**) to'g'ri aytasiz: davlat va millat nomlarini katta harf bilan yozasiz, kasb oldidan **a / an** qo'yasiz va bu bo'limda o'rganganlaringiz bilan o'zingizni to'liq tanishtirasiz.",
  slides: [
    {
      title: 'Davlat va millat — ikki xil so\'z',
      blocks: [
        { t: 'p', md: "O'zbek tilida: *Men O'zbekiston**dan**man. Men o'zbek**man**.* Ingliz tilida ham ikki xil gap bor:\n• **I'm from** + davlat: *I'm from **Uzbekistan**.*\n• **I'm** + millat (sifat): *I'm **Uzbek**.*" },
        {
          t: 'compare',
          good: { title: "To'g'ri", items: ["I'm from Uzbekistan.", "I'm Uzbek.", "She's English."] },
          bad: { title: "Noto'g'ri", items: ["I'm from Uzbek.", "I'm Uzbekistan.", "She's England."] },
        },
        { t: 'tip', tone: 'warn', md: "Ingliz tilida **millat va til nomlari ham katta harf** bilan yoziladi: *Uzbek, English, Russian*. O'zbekchada esa kichik harf (*o'zbek, ingliz*) — shuning uchun bu juda ko'p uchraydigan xato. \"I'm uzbek\" — noto'g'ri!" },
        { t: 'tip', tone: 'info', md: "*Where are you from?* — \"Qayerdansiz?\" savolini tayyor ibora sifatida yodlang. Javob: *I'm from…*" },
        { t: 'check', ex: { k: 'choice', q: "Qaysi gap **to'g'ri**?", opts: ["I'm from uzbekistan.", "I'm from Uzbek.", "I'm Uzbek.", 'I Uzbek.'], a: 2, why: "Millat — **I'm Uzbek** (katta harf, *from* siz)." } },
      ],
    },
    {
      title: 'Davlatlar va millatlar',
      blocks: [
        {
          t: 'table', head: ['Davlat', 'Millat / til', "O'zbekcha"], speak: [0, 1],
          rows: [
            ['Uzbekistan', 'Uzbek', "O'zbekiston — o'zbek"],
            ['Kazakhstan', 'Kazakh', "Qozog'iston — qozoq"],
            ['Russia', 'Russian', 'Rossiya — rus'],
            ['America (the USA)', 'American', 'Amerika — amerikalik'],
            ['England', 'English', 'Angliya — ingliz'],
            ['Turkey', 'Turkish', 'Turkiya — turk'],
            ['China', 'Chinese', 'Xitoy — xitoy'],
            ['Japan', 'Japanese', 'Yaponiya — yapon'],
            ['Korea', 'Korean', 'Koreya — koreys'],
            ['Germany', 'German', 'Germaniya — nemis'],
          ],
        },
        { t: 'p', md: "Qo'shimchalarga e'tibor bering: **-an / -ian** (Russian, American, Korean), **-ish** (English, Turkish), **-ese** (Chinese, Japanese)." },
        { t: 'tip', tone: 'info', md: "**English** — ham \"ingliz\" (millat), ham \"ingliz tili\". **Uzbek** ham shunday: \"o'zbek\" va \"o'zbek tili\"." },
        { t: 'check', ex: { k: 'fill', q: "He's from Japan. He's ___.", a: ['Japanese'], why: "Japan → **Japanese** (-ese)." } },
      ],
    },
    {
      title: "Urg'u: JaPAN — JapaNESE",
      blocks: [
        { t: 'p', md: "Davlat va millat nomlarida **urg'u** (kuchli bo'g'in) ko'pincha o'zgaradi. Noto'g'ri urg'u bilan sizni tushunish qiyinlashadi." },
        {
          t: 'sounds', items: [
            { label: 'UzbekiSTAN', say: 'Uzbekistan', uz: "Urg'u oxirgi bo'g'inda: **uz-be-ki-STAN** (\"stan\" cho'ziqroq: \"sta:n\").", examples: ['Uzbekistan', "I'm from Uzbekistan"] },
            { label: 'UZbek', say: 'Uzbek', uz: "Urg'u birinchi bo'g'inda: **UZ-bek**. Birinchi *U* qisqa \"u\" — \"uzbek\".", examples: ['Uzbek', "I'm Uzbek"] },
            { label: 'ENGlish', say: 'English', uz: "**ING-glish** — birinchi *E* \"i\" bo'lib o'qiladi! \"Englis\" emas.", examples: ['English', 'England'] },
            { label: 'ChiNESE', say: 'China, Chinese', uz: "**CHI-na**, lekin **chai-NI:Z** — *-ese* doim urg'uli: Japa**nese**, Chi**nese**.", examples: ['China', 'Chinese', 'Japanese'] },
          ],
        },
        { t: 'check', ex: { k: 'listen', say: 'Japanese', opts: ['Japan', 'Japanese', 'Chinese', 'German'], a: 1 } },
      ],
    },
    {
      title: 'Kasblar: a / an shart!',
      blocks: [
        { t: 'p', md: "O'zbekchada: *U shifokor.* Ingliz tilida kasb oldidan **a / an** shart (5-darsni eslang): *She's **a** doctor. He's **an** engineer.*" },
        {
          t: 'examples', items: [
            { en: "She's a doctor.", uz: 'U shifokor.' },
            { en: "He's an engineer.", uz: 'U muhandis.', note: "unli tovush → **an**" },
            { en: "I'm a driver.", uz: 'Men haydovchiman.' },
            { en: "My wife is a nurse.", uz: 'Xotinim hamshira.' },
            { en: "Her husband is a lawyer.", uz: 'Uning eri huquqshunos (advokat).' },
            { en: "They're doctors.", uz: 'Ular shifokorlar.', note: "ko'plikda **a** yo'q, ot **-s** oladi" },
          ],
        },
        {
          t: 'compare',
          good: { title: "To'g'ri", items: ["She's a doctor.", "I'm an engineer.", "We're nurses."] },
          bad: { title: "Noto'g'ri", items: ["She's doctor.", "I'm a engineer.", "We're a nurses."] },
        },
        { t: 'check', ex: { k: 'fill', q: "He's ___ engineer.", a: ['an'], why: "*engineer* unli tovush bilan boshlanadi → **an**." } },
      ],
    },
    {
      title: "Kasblar talaffuzi",
      blocks: [
        {
          t: 'sounds', items: [
            { label: 'engiNEER', say: 'engineer', uz: "Urg'u oxirida: **en-ji-NIə**. *g* — \"dj\".", examples: ['engineer', "He's an engineer"] },
            { label: 'DOCtor', say: 'doctor', uz: "**DOK-tə** — oxirgi *-or* kuchsiz \"ə\", \"doktor\" emas.", examples: ['doctor', 'a doctor'] },
            { label: 'LAWyer', say: 'lawyer', uz: "**LOY-ə** — birinchi bo'g'in \"oy\" (*boy* dagi kabi), oxiri kuchsiz \"ə\".", examples: ['lawyer', 'a lawyer'] },
            { label: 'nurse', say: 'nurse', uz: "**\"nə:s\"** — *ur* cho'ziq \"ə:\" (*girl* dagi kabi), *r* eshitilmaydi.", examples: ['nurse', 'a nurse'] },
          ],
        },
        { t: 'tip', tone: 'good', md: "Ko'p kasblar **-er / -or** bilan tugaydi va oxiri kuchsiz \"ə\" aytiladi: teach**er**, driv**er**, doct**or**." },
        { t: 'check', ex: { k: 'tf', q: "*doctor* so'zida urg'u ikkinchi bo'g'inda: doc-TOR.", a: false, why: "Urg'u birinchi bo'g'inda: **DOC**-tor." } },
      ],
    },
    {
      title: "O'zingizni tanishtiring",
      blocks: [
        { t: 'p', md: "Endi butun bo'limni birlashtiramiz: ism, yosh, davlat, millat, kasb — barchasi **to be** bilan!" },
        {
          t: 'dialog', lines: [
            { who: 'Emma', en: "Hello! I'm Emma. I'm from England.", uz: 'Salom! Men Emmaman. Angliyadanman.' },
            { who: 'Aziz', en: "Hi, Emma! My name's Aziz. I'm from Uzbekistan.", uz: "Salom, Emma! Ismim Aziz. O'zbekistondanman." },
            { who: 'Emma', en: 'Are you a student?', uz: 'Siz talabamisiz?' },
            { who: 'Aziz', en: "No, I'm not. I'm an engineer. And you?", uz: "Yo'q. Men muhandisman. Siz-chi?" },
            { who: 'Emma', en: "I'm a nurse. Is your wife Uzbek too?", uz: "Men hamshiraman. Xotiningiz ham o'zbekmi?" },
            { who: 'Aziz', en: "No, she isn't. She's Kazakh. She's a lawyer.", uz: "Yo'q. U qozoq. U huquqshunos." },
          ],
        },
        {
          t: 'examples', items: [
            { en: "My name's Dilnoza. I'm 20.", uz: 'Ismim Dilnoza. 20 yoshdaman.' },
            { en: "I'm from Uzbekistan. I'm Uzbek.", uz: "O'zbekistondanman. O'zbekman." },
            { en: "I'm a student. My friend is a driver.", uz: "Men talabaman. Do'stim haydovchi." },
          ],
        },
        { t: 'check', ex: { k: 'order', uz: 'Uning eri huquqshunos (ayolning).', words: ['Her', 'husband', 'is', 'a', 'lawyer'], extra: ['an'] } },
      ],
    },
  ],
  words: [
    { en: 'country', uz: 'davlat, mamlakat', ipa: 'ˈkʌn.tri', pos: 'noun', ex: 'Uzbekistan is a beautiful country.', exUz: "O'zbekiston — go'zal davlat." },
    { en: 'Uzbekistan', uz: "O'zbekiston", ipa: 'ʊzˌbek.ɪˈstɑːn', pos: 'noun', ex: "I'm from Uzbekistan.", exUz: "Men O'zbekistondanman." },
    { en: 'Uzbek', uz: "o'zbek; o'zbek tili", ipa: 'ˈʊz.bek', pos: 'adj', ex: "We're Uzbek.", exUz: "Biz o'zbekmiz." },
    { en: 'England', uz: 'Angliya', ipa: 'ˈɪŋ.ɡlənd', pos: 'noun', ex: 'Is Emma from England?', exUz: 'Emma Angliyadanmi?' },
    { en: 'English', uz: 'ingliz; ingliz tili', ipa: 'ˈɪŋ.ɡlɪʃ', pos: 'adj', ex: 'My teacher is English.', exUz: "O'qituvchim ingliz." },
    { en: 'doctor', uz: 'shifokor', ipa: 'ˈdɒk.tə', pos: 'noun', ex: "She's a doctor.", exUz: 'U shifokor.' },
    { en: 'engineer', uz: 'muhandis', ipa: 'ˌen.dʒɪˈnɪə', pos: 'noun', ex: "He's an engineer.", exUz: 'U muhandis.' },
    { en: 'driver', uz: 'haydovchi', ipa: 'ˈdraɪ.və', pos: 'noun', ex: "My neighbour is a driver.", exUz: "Qo'shnim haydovchi." },
    { en: 'nurse', uz: 'hamshira', ipa: 'nɜːs', pos: 'noun', ex: "Is she a nurse?", exUz: 'U hamshirami?' },
    { en: 'lawyer', uz: 'huquqshunos, advokat', ipa: 'ˈlɔɪ.ə', pos: 'noun', ex: "They're lawyers.", exUz: 'Ular huquqshunoslar.' },
  ],
  practice: [
    { k: 'match', pairs: [['Uzbekistan', 'Uzbek'], ['England', 'English'], ['China', 'Chinese'], ['Turkey', 'Turkish'], ['Russia', 'Russian'], ['Germany', 'German']] },
    { k: 'match', pairs: [['doctor', 'shifokor'], ['engineer', 'muhandis'], ['driver', 'haydovchi'], ['nurse', 'hamshira'], ['lawyer', 'huquqshunos']] },
    { k: 'listen', say: "I'm from England.", opts: ["I'm from England.", "I'm English.", "I'm from Uzbekistan.", "I'm in England."], a: 0 },
    { k: 'listen', say: "She's a nurse.", opts: ["She's a doctor.", "He's a nurse.", "She's nurses.", "She's a nurse."], a: 3 },
    { k: 'choice', q: "*He's ___ lawyer.*", opts: ['an', '—', 'a'], a: 2, why: "*lawyer* — undosh \"l\" → **a**." },
    { k: 'choice', q: "Qaysi gap **to'g'ri**?", opts: ["I'm from Uzbek.", "I Uzbek.", "I'm Uzbek.", "I'm Uzbekistan."], a: 2, why: "Millat: **I'm Uzbek.** Davlat bilan esa: *I'm from Uzbekistan.*" },
    { k: 'tf', q: "Ingliz tilida millat nomi kichik harf bilan yoziladi: *english*.", a: false, why: "Katta harf bilan: **English, Uzbek**." },
    { k: 'tf', q: "*They're doctors.* — to'g'ri (ko'plikda **a** yo'q).", a: true },
    { k: 'fill', q: "Sara is from America. She's ___.", a: ['American'] },
    { k: 'fill', q: "I'm ___ engineer.", a: ['an'] },
    { k: 'fill', q: "Aziz is ___ Uzbekistan.", a: ['from'], why: "Davlat oldidan **from**: *Aziz is from Uzbekistan.*" },
    { k: 'order', uz: "Men O'zbekistondanman.", words: ["I'm", 'from', 'Uzbekistan'], extra: ['Uzbek'], alt: [['I', 'am', 'from', 'Uzbekistan']] },
    { k: 'order', uz: "Do'stim haydovchi.", words: ['My', 'friend', 'is', 'a', 'driver'], extra: ['an'] },
    { k: 'translate', uz: 'U shifokor (ayol).', a: ["She's a doctor", 'She is a doctor'], why: "**a** shart: *She's a doctor.*" },
    { k: 'translate', uz: 'Biz o\'zbekmiz.', a: ["We're Uzbek", 'We are Uzbek', "We're Uzbeks", 'We are Uzbeks'] },
    { k: 'speak', say: "Hello! My name's Aziz. I'm from Uzbekistan. I'm an engineer.", uz: "O'zingizni shunday tanishtiring" },
  ],
  quiz: [
    { k: 'listen', say: "He's an engineer.", opts: ["He's engineer.", "She's an engineer.", "He's an engineer.", "He's a driver."], a: 2 },
    { k: 'choice', q: "*Emma is from England. She's ___.*", opts: ['England', 'Englander', 'English', 'Englis'], a: 2 },
    { k: 'choice', q: "Qaysi so'zda urg'u **oxirgi** bo'g'inda?", opts: ['doctor', 'lawyer', 'driver', 'engineer'], a: 3, why: "engi**NEER**." },
    { k: 'fill', q: "My wife is ___ nurse.", a: ['a'] },
    { k: 'fill', q: "They're from China. They're ___.", a: ['Chinese'] },
    { k: 'translate', uz: 'U muhandis (erkak).', a: ["He's an engineer", 'He is an engineer'] },
    { k: 'translate', uz: 'Siz Angliyadanmisiz?', a: ['Are you from England'] },
    { k: 'translate', uz: "Ular huquqshunoslar.", a: ["They're lawyers", 'They are lawyers'] },
    { k: 'order', uz: "O'zbekiston — chiroyli davlat.", words: ['Uzbekistan', 'is', 'a', 'beautiful', 'country'], extra: ['an'] },
    { k: 'match', pairs: [['country', 'davlat'], ['Uzbekistan', "O'zbekiston"], ['England', 'Angliya'], ['English', 'ingliz'], ['Uzbek', "o'zbek"]] },
  ],
  summary: [
    "Davlat: **I'm from Uzbekistan.** Millat: **I'm Uzbek.** (\"I'm from Uzbek\" — xato).",
    "Davlat, millat va til nomlari doim **katta harf** bilan: *Uzbek, English, Chinese*.",
    "Kasb oldidan **a / an**: *She's **a** doctor. He's **an** engineer.* Ko'plikda: *They're doctors.*",
    "Urg'u: Uzbeki**STAN**, **UZ**bek, Japa**NESE**, engi**NEER**, **DOC**tor.",
    "Yangi so'zlar: country, Uzbekistan, Uzbek, England, English, doctor, engineer, driver, nurse, lawyer.",
  ],
  homework: "O'zingiz haqida 6 gaplik tanishtiruv yozing va ovoz chiqarib o'qing: ism, yosh, davlat, millat, kasb (yoki *I'm a student*) va bitta oila a'zosi yoki do'stingizning kasbi. Masalan: *My neighbour is a driver.*",
};

export default lesson;
