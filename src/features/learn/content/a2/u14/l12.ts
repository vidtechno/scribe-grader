import type { Lesson } from '../../../types';

// Mini lesson (grammar): spelling of comparatives and superlatives, one/two-syllable rule, irregular forms.
// Builds on l1 (comparatives) and l2 (superlatives); no as ... as, too/enough or adverbs yet.
const lesson: Lesson = {
  id: 'u14-l12',
  title: "Comparatives: spelling and irregular forms",
  titleUz: "Qiyosiy daraja: imlo va noto'g'ri shakllar (good – better – best)",
  mini: true,
  kind: 'grammar',
  goal: "Qiyosiy va orttirma darajaning **imlosini** (*big → bigger, happy → happier, nice → nicer*), ikki bo'g'inli sifatlarda **-er yoki more** tanlashni va noto'g'ri shakllarni (**good – better – best**, **bad – worse – worst**, **far – further – furthest**) xatosiz yozasiz.",
  slides: [
    {
      title: "Avval bo'g'inni sanang",
      blocks: [
        { t: 'p', md: "Qiyosiy darajani yasash uchun sifatda **nechta bo'g'in** borligini sanang. Bo'g'in — bitta unli tovushli bo'lak: *tall* (1), *hap-py* (2), *ex-pen-sive* (3)." },
        { t: 'table', head: ["Sifat", 'Qiyosiy', 'Orttirma'], speak: [1, 2], rows: [
          ["1 bo'g'in: tall, cold", 'taller, colder', 'the tallest, the coldest'],
          ["2 bo'g'in, -y bilan: happy, tidy", 'happier, tidier', 'the happiest, the tidiest'],
          ["2 bo'g'in, boshqa: modern, famous", 'more modern, more famous', 'the most modern, the most famous'],
          ["3+ bo'g'in: comfortable", 'more comfortable', 'the most comfortable'],
        ] },
        { t: 'compare', good: { title: "To'g'ri", items: ['My street is longer than yours.', 'This café is more modern.', 'She is happier today.'] }, bad: { title: "Xato", items: ['My street is more long than yours.', 'This café is moderner.', 'She is more happy today.'] } },
        { t: 'check', ex: { k: 'choice', q: 'My street is ___ than yours. (long)', opts: ['longer', 'more long', 'more longer', 'longest'], a: 0, why: "*long* — 1 bo'g'in → **longer**." } },
      ],
    },
    {
      title: "Imlo qoidalari",
      blocks: [
        { t: 'p', md: "**-er** (qiyosiy) yoki **-est** (orttirma) qo'shganda so'zning oxiri ba'zan o'zgaradi:" },
        { t: 'table', head: ['Qoida', 'Sifat', 'Qiyosiy → orttirma'], speak: [2], rows: [
          ["Oddiy: + er / + est", 'cold, long', 'colder → the coldest'],
          ["-e bilan tugasa: + r / + st", 'wide, nice, simple', 'wider → the widest, nicer → the nicest'],
          ["Undosh + unli + undosh: oxirgi undosh ikkilanadi", 'big, sad, thin, hot', 'bigger → the biggest, sadder → the saddest'],
          ["Undosh + y → i", 'tidy, easy, busy', 'tidier → the tidiest'],
          ["-w, -x, -y ikkilanmaydi", 'new, slow', 'newer → the newest, slower → the slowest'],
        ] },
        { t: 'tip', tone: 'info', md: "Ikkita undosh yoki ikkita unlidan keyin harf **ikkilanmaydi**: *cold → colder*, *cheap → cheaper*, *fast → faster*." },
        { t: 'check', ex: { k: 'fill', q: 'My brother is ___ than me. (thin)', a: ['thinner'], why: "Undosh + unli + undosh → **n ikkilanadi**: *thinner*." } },
        { t: 'check', ex: { k: 'fill', q: 'That was the ___ day of my life. (sad)', a: ['saddest'], why: "*sad* → **d ikkilanadi**: *the saddest*." } },
      ],
    },
    {
      title: "Ikki bo'g'inli sifatlar",
      blocks: [
        { t: 'p', md: "Ikki bo'g'inli sifatlar eng ko'p adashtiradi. **-er** oladiganlar:" },
        { t: 'table', head: ['Tugallanishi', 'Qiyosiy', 'Misol'], speak: [2], rows: [
          ['-y', '-ier', 'The room is tidier now.'],
          ['-le', '-r', 'This task is simpler than the last one.'],
          ['-ow', '-er', 'The old street is narrower than the new one.'],
          ['-er', '-er', 'My sister is cleverer than me.'],
          ['quiet', 'quieter', 'The park is quieter than the market.'],
        ] },
        { t: 'p', md: "Qolgan ikki bo'g'inli sifatlar (**-ed, -ing, -ful, -ous** va boshqalar) doim **more** bilan: *more tired, more boring, more careful, more famous*." },
        { t: 'tip', tone: 'warn', md: "❌ *boringer*, ❌ *tireder*. Ishonchingiz komil bo'lmasa, sifat -y, -le, -ow yoki -er bilan tugamasa — **more** ishlating." },
        { t: 'check', ex: { k: 'choice', q: 'The film was ___ than the book. (boring)', opts: ['more boring', 'boringer', 'boringier', 'most boring'], a: 0, why: "*boring* — -ing bilan tugaydi → **more boring**." } },
        { t: 'check', ex: { k: 'tf', q: "*tidy → tidyer* — to'g'ri shakl.", a: false, why: "-y → **-ier**: *tidier*." } },
      ],
    },
    {
      title: "Noto'g'ri shakllar",
      blocks: [
        { t: 'p', md: "Uchta sifatning shakli qoidaga bo'ysunmaydi. Ularni yod oling:" },
        { t: 'table', head: ['Sifat', 'Qiyosiy', 'Orttirma'], speak: [0, 1, 2], rows: [
          ['good', 'better', 'the best'],
          ['bad', 'worse', 'the worst'],
          ['far', 'further (farther)', 'the furthest (the farthest)'],
        ] },
        { t: 'examples', items: [
          { en: 'Your English is better than mine.', uz: "Sening ingliz tiling meniknidan yaxshiroq." },
          { en: 'The weather today is worse than yesterday.', uz: "Bugungi ob-havo kechagidan yomonroq." },
          { en: 'Bukhara is further from Tashkent than Samarkand.', uz: "Buxoro Toshkentdan Samarqanddan ko'ra uzoqroq." },
          { en: 'This is the best cake in the shop.', uz: "Bu do'kondagi eng yaxshi tort." },
        ] },
        { t: 'compare', good: { title: "To'g'ri", items: ['better', 'the worst', 'the best'] }, bad: { title: "Xato", items: ['gooder, more good', 'badder, the baddest', 'the goodest'] } },
        { t: 'tip', tone: 'info', md: "**further** va **farther** masofa haqida bir xil ma'noda ishlatiladi. Kundalik nutqda **further** ko'proq uchraydi." },
        { t: 'check', ex: { k: 'choice', q: 'This is the ___ pizza in town. (good)', opts: ['best', 'goodest', 'most good', 'better'], a: 0, why: "*good* → *better* → **the best**." } },
      ],
    },
    {
      title: "Dialog: yangi ko'cha, yangi uy",
      blocks: [
        { t: 'dialog', lines: [
          { who: 'Mia', en: 'Is your new street quieter than the old one?', uz: "Yangi ko'changiz eskisidan sokinroqmi?" },
          { who: 'Tom', en: "Yes, it's much quieter, but it's narrower. My old street was wider.", uz: "Ha, ancha sokinroq, lekin torroq. Eski ko'cham kengroq edi." },
          { who: 'Mia', en: 'And is your flat bigger?', uz: 'Kvartirang kattaroqmi?' },
          { who: 'Tom', en: "No, it's smaller, but it's tidier! And the building is newer and safer.", uz: "Yo'q, kichikroq, lekin ozodaroq! Bino ham yangiroq va xavfsizroq." },
          { who: 'Mia', en: 'Which is better, the old flat or the new one?', uz: 'Qaysi biri yaxshiroq, eski uymi yoki yangimi?' },
          { who: 'Tom', en: 'The new one is better, but my old neighbours were the best!', uz: "Yangisi yaxshiroq, lekin eski qo'shnilarim eng yaxshisi edi!" },
        ] },
        { t: 'check', ex: { k: 'choice', q: "Tom's new street is ...", opts: ['quieter and narrower', 'noisier and wider', 'quieter and wider', 'bigger and tidier'], a: 0, why: "Dialog: *much quieter, but narrower*." } },
        { t: 'check', ex: { k: 'tf', q: "Tom's new flat is bigger than his old one.", a: false, why: "Dialog: *No, it's smaller, but it's tidier*." } },
      ],
    },
  ],
  words: [
    { en: 'narrow', uz: 'tor (yo\'l, ko\'cha)', ipa: 'ˈnær.əʊ', pos: 'adj', ex: 'The old street is narrower than the new one.', exUz: "Eski ko'cha yangisidan torroq." },
    { en: 'wide', uz: 'keng, enli', ipa: 'waɪd', pos: 'adj', ex: 'The river is wider here.', exUz: "Daryo bu yerda kengroq." },
    { en: 'simple', uz: 'oddiy, sodda', ipa: 'ˈsɪm.pəl', pos: 'adj', ex: 'This task is simpler than the last one.', exUz: "Bu topshiriq oxirgisidan soddaroq." },
    { en: 'tidy', uz: 'ozoda, tartibli', ipa: 'ˈtaɪ.di', pos: 'adj', ex: 'My room is tidier now.', exUz: "Xonam endi tartibliroq." },
    { en: 'sad', uz: 'xafa, g\'amgin', ipa: 'sæd', pos: 'adj', ex: 'The film was very sad.', exUz: "Film juda g'amgin edi." },
    { en: 'thin', uz: 'ingichka, yupqa, ozg\'in', ipa: 'θɪn', pos: 'adj', ex: 'A thin book is easier to carry.', exUz: "Yupqa kitobni ko'tarish osonroq." },
  ],
  practice: [
    { k: 'match', pairs: [['big', 'bigger'], ['nice', 'nicer'], ['happy', 'happier'], ['sad', 'sadder'], ['simple', 'simpler']] },
    { k: 'choice', q: '**wide** ning qiyosiy shakli:', opts: ['wider', 'widder', 'more wide', 'wideer'], a: 0, why: "-e bilan tugasa, faqat **-r**: *wider*." },
    { k: 'fill', q: 'My room is ___ than yours. (tidy)', a: ['tidier'], why: "-y → **-ier**: *tidier*." },
    { k: 'listen', say: 'Today is worse than yesterday.', opts: ['Today is worse than yesterday.', 'Today is better than yesterday.', 'Today is the worst day.', 'Yesterday was worse than today.'], a: 0 },
    { k: 'choice', q: 'The lesson was ___ than the film. (boring)', opts: ['more boring', 'boringer', 'most boring', 'more boringer'], a: 0, why: "-ing bilan tugaydigan sifat → **more boring**." },
    { k: 'fix', wrong: 'She is more happier than before.', a: ['She is happier than before.'], hint: "Ikki marta qiyoslangan", why: "**happier** o'zi qiyosiy; oldiga *more* kerak emas." },
    { k: 'fix', wrong: 'This is the goodest cake in the shop.', a: ['This is the best cake in the shop.'], hint: "good ning orttirma shakli", why: "*good* → *better* → **the best**." },
    { k: 'tf', q: "*thin → thiner* — to'g'ri imlo.", a: false, why: "Undosh + unli + undosh: **thinner** (n ikkilanadi)." },
    { k: 'order', uz: "Bu ko'cha anavisidan kengroq.", words: ['This', 'street', 'is', 'wider', 'than', 'that', 'one'], extra: ['more', 'widder'] },
    { k: 'translate', uz: "Bugungi ob-havo kechagidan yomonroq.", a: ['The weather today is worse than yesterday.', 'Today the weather is worse than yesterday.', 'The weather is worse today than yesterday.', "Today's weather is worse than yesterday's."], why: "*bad* → **worse**." },
    { k: 'choice', q: 'Bukhara is ___ from Tashkent than Samarkand.', opts: ['further', 'more far', 'farer', 'farrer'], a: 0, why: "*far* → **further** (yoki *farther*)." },
    { k: 'dictation', say: 'Your new flat is bigger and tidier than my old one.', a: ['Your new flat is bigger and tidier than my old one.'] },
    { k: 'speak', say: 'This street is wider and quieter than that one.', uz: "Bu ko'cha anavisidan kengroq va sokinroq." },
    { k: 'speak', say: 'That was the saddest day of my life.', uz: "Bu hayotimdagi eng g'amgin kun edi." },
  ],
  quiz: [
    { k: 'choice', q: 'She was ___ yesterday than today. (sad)', opts: ['sadder', 'more sad', 'sader', 'saddest'], a: 0, why: "*sad* → **sadder** (d ikkilanadi)." },
    { k: 'fill', q: 'This is the ___ road in the town. (wide)', a: ['widest'], why: "-e bilan tugasa: + **st**: *the widest*." },
    { k: 'fix', wrong: 'My bag is more heavier than yours.', a: ['My bag is heavier than yours.'], hint: "Ikki marta qiyoslangan", why: "*heavy* → **heavier**; *more* kerak emas." },
    { k: 'choice', q: 'That was the ___ trip of my life. (bad)', opts: ['worst', 'baddest', 'most bad', 'worse'], a: 0, why: "*bad* → *worse* → **the worst**." },
    { k: 'order', uz: 'Bu eng sodda savol.', words: ['This', 'is', 'the', 'simplest', 'question'], extra: ['most', 'simplier'] },
    { k: 'translate', uz: "Mening xonam seniknidan tartibliroq.", a: ['My room is tidier than yours.', "My room's tidier than yours."], why: "*tidy* → **tidier**." },
    { k: 'listen', say: 'That was the worst day of my life.', opts: ['That was the worst day of my life.', 'That was the best day of my life.', 'That was a bad day for me.', 'That was the worse day of my life.'], a: 0 },
    { k: 'tf', q: "*the most big* — to'g'ri shakl.", a: false, why: "Qisqa sifat: **the biggest**." },
    { k: 'match', pairs: [['narrow', 'tor'], ['wide', 'keng'], ['simple', 'oddiy'], ['tidy', 'ozoda']] },
  ],
  summary: [
    "1 bo'g'inli sifat: **-er / -est**. -y bilan tugaydigan 2 bo'g'inli: **-ier / -iest**. Boshqa uzun sifatlar: **more / the most**.",
    "Imlo: *nice → nicer*, *big → bigger*, *happy → happier*, *new → newer* (w, x, y ikkilanmaydi).",
    "-ed, -ing, -ful, -ous bilan tugaydigan sifatlar doim **more** oladi: *more boring, more tired*.",
    "Noto'g'ri shakllar: **good – better – best**, **bad – worse – worst**, **far – further – furthest**.",
    "Yangi so'zlar: **narrow, wide, simple, tidy, sad, thin**.",
  ],
  homework: "Xonangiz, uyingiz va ko'changizni boshqa joyga solishtirib, 6 ta gap yozing. Kamida 2 tasida imlo qoidasi (*bigger, tidier, nicer*), 1 tasida **better / worse** ishlating.",
};

export default lesson;
