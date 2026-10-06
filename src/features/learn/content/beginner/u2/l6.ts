import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: 'u2-l6',
  title: 'this / that / these / those',
  titleUz: 'this / that / these / those',
  goal: "Yaqin va uzoqdagi narsalarni **this / that / these / those** bilan ko'rsatasiz, ularni **is / are** va birlik/ko'plik bilan to'g'ri moslaysiz, *this* va *these* ni talaffuzda ajratasiz hamda kiyim va buyumlar haqida gapirasiz.",
  slides: [
    {
      title: "\"Bu\" va \"u\" — to'rt xil so'z",
      blocks: [
        { t: 'p', md: "O'zbek tilida ko'rsatish uchun **bu** (yaqin) va **u / ana u** (uzoq) deymiz, ko'plikda esa **bular / ular**. Ingliz tilida ham shunday, faqat har biri uchun **alohida so'z** bor:" },
        {
          t: 'table', head: ['', 'Birlik (bitta)', "Ko'plik (bir nechta)"], speak: [1, 2],
          rows: [
            ['Yaqin (bu)', 'this', 'these'],
            ['Uzoq (u, ana u)', 'that', 'those'],
          ],
        },
        { t: 'p', md: "Ikki savol bering:\n1. Narsa **yaqinmi yoki uzoqmi**? (qo'lim yetadimi?)\n2. **Bittami yoki ko'pmi**?" },
        { t: 'check', ex: { k: 'choice', q: "Qo'lingizdagi **bitta** telefon haqida: *___ is my phone.*", opts: ['That', 'These', 'This', 'Those'], a: 2, why: "Yaqin + bitta → **This**." } },
      ],
    },
    {
      title: 'this va these: talaffuz',
      blocks: [
        { t: 'p', md: "**this** va **these** — o'zbeklar eng ko'p adashtiradigan juftlik. Farq ikkita tovushda:" },
        {
          t: 'sounds', items: [
            { label: 'this', say: 'this', uz: "**th** (tilning uchi tishlar orasida, ovozli) + **qisqa \"i\"** + **\"s\"**: \"ðis\".", examples: ['this', 'this phone', 'this cup'] },
            { label: 'these', say: 'these', uz: "**th** + **cho'ziq \"i:\"** + **\"z\"**: \"ði:z\". Tabassum qilgandek cho'zing!", examples: ['these', 'these shoes', 'these cups'] },
            { label: 'that', say: 'that', uz: "**th** + **\"æ\"** (a va e o'rtasi, *apple* dagi kabi) + **t**: \"ðæt\".", examples: ['that', 'that window'] },
            { label: 'those', say: 'those', uz: "**th** + **\"əu\"** (*home* dagi kabi) + **\"z\"**: \"ðəuz\".", examples: ['those', 'those chairs'] },
          ],
        },
        { t: 'tip', tone: 'warn', md: "**th** ni \"d\" yoki \"z\" deb aytmang: \"dis\", \"zis\" emas! Tilning uchini tishlar orasiga qo'ying va ovoz bilan nafas chiqaring." },
        { t: 'check', ex: { k: 'listen', say: 'these', opts: ['this', 'these', 'those', 'that'], a: 1, why: "Cho'ziq \"i:\" va \"z\" — **these**." } },
      ],
    },
    {
      title: 'Yaqin: this / these',
      blocks: [
        { t: 'p', md: "**this** + birlik + **is**\n**these** + ko'plik + **are**" },
        {
          t: 'examples', items: [
            { en: 'This is my phone.', uz: 'Bu mening telefonim.' },
            { en: 'This is a cup.', uz: 'Bu piyola (chashka).' },
            { en: 'These are my shoes.', uz: 'Bular mening oyoq kiyimlarim (tuflilarim).' },
            { en: 'These are glasses.', uz: 'Bular stakanlar.', note: "glass → glass**es** /ɪz/" },
            { en: 'This shirt is clean.', uz: "Bu ko'ylak toza." },
            { en: 'These bottles are old.', uz: 'Bu shishalar eski.', note: "ot oldida ham ko'plik: *these* + bottle**s**" },
          ],
        },
        { t: 'tip', tone: 'info', md: "**This is** qisqartirilmaydi: *This is* deb to'liq yoziladi va aytiladi (\"this's\" emas)." },
      ],
    },
    {
      title: 'Uzoq: that / those',
      blocks: [
        { t: 'p', md: "**that** + birlik + **is** (qisqasi **that's**)\n**those** + ko'plik + **are**" },
        {
          t: 'examples', items: [
            { en: "That's a window.", uz: 'Ana u — deraza.' },
            { en: 'That is my jacket.', uz: 'Ana u mening kurtkam.' },
            { en: 'Those are chairs.', uz: 'Ana ular — stullar.' },
            { en: 'That dress is beautiful.', uz: "Ana u ko'ylak chiroyli.", note: "**dress** — ayollar ko'ylagi" },
            { en: 'Those shoes are expensive.', uz: 'Ana u tuflilar qimmat.' },
          ],
        },
        { t: 'tip', tone: 'good', md: "**that** odamlar haqida ham ishlatiladi: *That's my teacher.* — Ana u mening o'qituvchim. *This is Malika.* — Bu Malika (tanishtirganda)." },
        { t: 'check', ex: { k: 'fill', q: '___ are my shoes. (uzoqda)', a: ['Those'], why: "Uzoq + ko'plik → **Those**." } },
      ],
    },
    {
      title: 'Moslik: is yoki are, birlik yoki ko\'plik',
      blocks: [
        { t: 'p', md: "Uchta narsa doim mos kelishi kerak: **ko'rsatish so'zi + ot + fe'l**." },
        {
          t: 'compare',
          good: { title: "To'g'ri", items: ['This shoe is old.', 'These shoes are old.', 'That is a chair.', 'Those are chairs.'] },
          bad: { title: "Noto'g'ri", items: ['This shoes are old.', 'These shoe is old.', 'That are a chair.', 'Those is chairs.'] },
        },
        { t: 'tip', tone: 'warn', md: "O'zbekchada \"bu tuflilar\" ham, \"bu tufli\" ham — **bu**. Ingliz tilida ko'plikda **these**: *these shoes*, \"this shoes\" emas!" },
        { t: 'check', ex: { k: 'choice', q: "*___ glasses are clean.* (yaqin)", opts: ['This', 'That', 'These', 'It'], a: 2, why: "*glasses* — ko'plik, yaqin → **These**." } },
      ],
    },
    {
      title: 'Savol va javob: Is this your phone?',
      blocks: [
        { t: 'p', md: "Savolda **is / are** boshiga chiqadi (4-darsni eslang): *This is* → **Is this…?** · *These are* → **Are these…?** Javobda esa **it** yoki **they** ishlatiladi — *this / these* emas!" },
        {
          t: 'table', head: ['Savol', 'Javob'], speak: [0, 1],
          rows: [
            ['Is this your phone?', "Yes, it is. / No, it isn't."],
            ['Is that your jacket?', "Yes, it is. / No, it isn't."],
            ['Are these your shoes?', "Yes, they are. / No, they aren't."],
            ['Are those your cups?', "Yes, they are. / No, they aren't."],
          ],
        },
        {
          t: 'dialog', lines: [
            { who: 'Teacher', en: 'Is this your jacket, Aziz?', uz: 'Bu sening kurtkangmi, Aziz?' },
            { who: 'Aziz', en: "No, it isn't. That's my jacket. It's black.", uz: "Yo'q. Mening kurtkam ana u. U qora." },
            { who: 'Teacher', en: 'OK. And are these your shoes?', uz: 'Xo\'p. Bu tuflilar senikimi?' },
            { who: 'Aziz', en: 'Yes, they are. Thank you!', uz: 'Ha, meniki. Rahmat!' },
            { who: 'Teacher', en: 'And those bottles?', uz: 'Ana u shishalar-chi?' },
            { who: 'Aziz', en: "They aren't my bottles. Sorry!", uz: 'Ular meniki emas. Kechirasiz!' },
          ],
        },
        { t: 'check', ex: { k: 'fill', q: 'Are these your cups? — Yes, ___ are.', a: ['they'], why: "Javobda **they**: *Yes, they are.*" } },
      ],
    },
  ],
  words: [
    { en: 'phone', uz: 'telefon', ipa: 'fəʊn', pos: 'noun', ex: 'This is my phone.', exUz: 'Bu mening telefonim.' },
    { en: 'window', uz: 'deraza', ipa: 'ˈwɪn.dəʊ', pos: 'noun', ex: 'That window is big.', exUz: 'Ana u deraza katta.' },
    { en: 'shoe', uz: 'tufli, oyoq kiyim', ipa: 'ʃuː', pos: 'noun', ex: 'These shoes are new.', exUz: 'Bu tuflilar yangi.' },
    { en: 'shirt', uz: "ko'ylak (erkaklar)", ipa: 'ʃɜːt', pos: 'noun', ex: 'This shirt is white.', exUz: "Bu ko'ylak oq." },
    { en: 'dress', uz: "ko'ylak (ayollar)", ipa: 'dres', pos: 'noun', ex: 'That dress is beautiful.', exUz: "Ana u ko'ylak chiroyli." },
    { en: 'cup', uz: 'piyola, chashka', ipa: 'kʌp', pos: 'noun', ex: 'Is this your cup?', exUz: 'Bu sizning piyolangizmi?' },
    { en: 'glass', uz: 'stakan; shisha (material)', ipa: 'ɡlɑːs', pos: 'noun', ex: 'These glasses are clean.', exUz: 'Bu stakanlar toza.' },
    { en: 'bottle', uz: 'shisha, butilka', ipa: 'ˈbɒt.əl', pos: 'noun', ex: 'Those bottles are green.', exUz: 'Ana u shishalar yashil.' },
    { en: 'chair', uz: 'stul', ipa: 'tʃeə', pos: 'noun', ex: 'That chair is old.', exUz: 'Ana u stul eski.' },
    { en: 'jacket', uz: 'kurtka, jaket', ipa: 'ˈdʒæk.ɪt', pos: 'noun', ex: 'Is that your jacket?', exUz: 'Ana u sizning kurtkangizmi?' },
  ],
  practice: [
    { k: 'listen', say: 'this', opts: ['these', 'this', 'that', 'those'], a: 1, why: "Qisqa \"i\" va \"s\" — **this**." },
    { k: 'listen', say: 'those', opts: ['these', 'this', 'those', 'that'], a: 2, why: "\"ðəuz\" — **those**." },
    { k: 'choice', q: "Yaqindagi **ko'p** narsa: *___ are my cups.*", opts: ['This', 'These', 'That', 'Those'], a: 1 },
    { k: 'choice', q: "Uzoqdagi **bitta** narsa: *___ is a window.*", opts: ['These', 'This', 'Those', 'That'], a: 3 },
    { k: 'match', pairs: [['this', 'bu (bitta, yaqin)'], ['these', 'bular (yaqin)'], ['that', 'ana u (bitta, uzoq)'], ['those', 'ana ular (uzoq)']] },
    { k: 'match', pairs: [['shoe', 'tufli'], ['shirt', "ko'ylak (erkaklar)"], ['chair', 'stul'], ['window', 'deraza'], ['bottle', 'shisha, butilka'], ['jacket', 'kurtka']] },
    { k: 'tf', q: "*This shoes are new.* — to'g'ri gap.", a: false, why: "*shoes* — ko'plik → **These** shoes **are** new." },
    { k: 'tf', q: "*Is this your phone?* savoliga *Yes, it is.* deb javob beriladi.", a: true },
    { k: 'fill', q: 'This ___ my dress.', a: ['is'], why: "**this** → **is**." },
    { k: 'fill', q: 'Those chairs ___ old.', a: ['are'], why: "**those** + ko'plik → **are**." },
    { k: 'fill', q: 'one glass → two ___', a: ['glasses'], why: "**s** bilan tugaydi → **-es** /ɪz/." },
    { k: 'fill', q: 'Is that your jacket? — No, it ___.', a: ["isn't", 'is not'] },
    { k: 'order', uz: 'Bu tuflilar qimmat.', words: ['These', 'shoes', 'are', 'expensive'], extra: ['This', 'is'] },
    { k: 'order', uz: 'Ana u sizning telefoningizmi?', words: ['Is', 'that', 'your', 'phone'], extra: ['those'] },
    { k: 'translate', uz: 'Bu mening piyolam.', a: ['This is my cup'], why: "**This is my cup.**" },
    { k: 'speak', say: 'This is my phone. These are my shoes.', uz: "this va these farqiga e'tibor bering" },
  ],
  quiz: [
    { k: 'listen', say: 'these shirts', opts: ['this shirt', 'these shirts', 'those shirts', 'this shirts'], a: 1 },
    { k: 'choice', q: "Qaysi gap **to'g'ri**?", opts: ['Those is my chair.', 'This are my bottles.', 'That dress is beautiful.', 'These glass are clean.'], a: 2 },
    { k: 'choice', q: "*Are those your shoes?* — Ha javobi:", opts: ['Yes, those are.', 'Yes, it is.', 'Yes, they are.', "Yes, they're."], a: 2, why: "Ko'plik → **they**, ha javobida qisqartirish yo'q." },
    { k: 'fill', q: '___ are my bottles. (yaqin)', a: ['These'] },
    { k: 'fill', q: '___ is a window. (uzoq)', a: ['That'] },
    { k: 'fill', q: 'These glasses ___ clean.', a: ['are'] },
    { k: 'translate', uz: 'Ana u stul yangi.', a: ['That chair is new'] },
    { k: 'translate', uz: "Bu ko'ylak oq. (erkaklar)", a: ['This shirt is white'] },
    { k: 'order', uz: 'Bu sizning kurtkangizmi?', words: ['Is', 'this', 'your', 'jacket'], extra: ['these', 'are'] },
    { k: 'match', pairs: [['dress', "ko'ylak (ayollar)"], ['cup', 'piyola'], ['glass', 'stakan'], ['phone', 'telefon'], ['shoe', 'tufli']] },
  ],
  summary: [
    "Yaqin: **this** (bitta) · **these** (ko'p). Uzoq: **that** (bitta) · **those** (ko'p).",
    "**this / that + is**, **these / those + are** — va ot ham mos: *these shoe**s***.",
    "Talaffuz: **this** — qisqa \"i\" + s; **these** — cho'ziq \"i:\" + z; **th** — til tishlar orasida.",
    "Savolda: **Is this…? / Are these…?** — javobda **it / they**: *Yes, it is. / No, they aren't.*",
    "Yangi so'zlar: phone, window, shoe, shirt, dress, cup, glass, bottle, chair, jacket.",
  ],
  homework: "Uyingizda yurib, 8 ta narsani ko'rsatib ovoz chiqarib ayting: yaqindagilar uchun *This is… / These are…*, uzoqdagilar uchun *That is… / Those are…*. Keyin 4 ta gapni daftarga yozing.",
};

export default lesson;
