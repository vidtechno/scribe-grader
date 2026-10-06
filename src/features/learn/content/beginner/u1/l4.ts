import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: 'u1-l4',
  title: 'Letter teams: sh, ch, th…',
  titleUz: 'Harf birikmalari: sh, ch, th…',
  goal: "**sh, ch, th, ph, wh, ck, ng, ee, oo** harf birikmalarini ko'rganda to'g'ri o'qiysiz, ayniqsa o'zbek tilida yo'q **th** tovushini talaffuz qila olasiz va 10 ta yangi so'zni bilib olasiz.",
  slides: [
    {
      title: 'Ikki harf — bitta tovush',
      blocks: [
        { t: 'p', md: "O'zbek tilida ham bunday birikmalar bor: **sh** (*shahar*), **ch** (*choy*), **ng** (*tong*). Ikki harf yoziladi, lekin **bitta tovush** eshitiladi. Ingliz tilida bunday \"jamoalar\" ko'proq." },
        {
          t: 'table', head: ['Birikma', 'Tovush', 'Misol'],
          rows: [
            ['sh', '"sh"', 'ship'],
            ['ch', '"ch"', 'chicken'],
            ['th', '"θ" yoki "ð"', 'think, this'],
            ['ph', '"f"', 'photo'],
            ['wh', '"w" (lablar dumaloq)', 'whale'],
            ['ck', '"k"', 'duck'],
            ['ng', '"ŋ" (tong)', 'sing'],
            ['ee', 'uzun "i:"', 'sheep'],
            ['oo', 'uzun "u:" / qisqa "u"', 'food, book'],
          ],
          speak: [2],
        },
        { t: 'tip', tone: 'info', md: "Qoida: birikmani **harfma-harf o'qimang**. *ship* — \"s-h-i-p\" emas, **\"ship\"**; *photo* — \"p-h\" emas, **\"fouto\"**." },
      ],
    },
    {
      title: 'Tanish tovushlar: sh, ch, ng, ph, ck',
      blocks: [
        {
          t: 'sounds', items: [
            { label: 'sh', say: 'ship', uz: "O'zbekcha **\"sh\"** bilan bir xil (*shahar*). Lablarni oldinga cho'zing.", examples: ['ship', 'fish', 'shop', 'she'] },
            { label: 'ch', say: 'chicken', uz: "O'zbekcha **\"ch\"** bilan bir xil (*choy*).", examples: ['chicken', 'chair', 'lunch', 'teacher'] },
            { label: 'ng', say: 'sing', uz: "O'zbekcha *tong, ming* so'zlaridagi **\"ng\"**. Oxirida alohida \"g\" eshitilmaydi: *sing* = \"siŋ\", \"sing-g\" emas.", examples: ['sing', 'long', 'king', 'morning'] },
            { label: 'ph', say: 'photo', uz: "Oddiy **\"f\"**. Asosan yunoncha so'zlarda uchraydi.", examples: ['photo', 'phone', 'elephant'] },
            { label: 'ck', say: 'duck', uz: "Oddiy **\"k\"**. Faqat **qisqa unlidan keyin** keladi, ko'pincha so'z oxirida (*duck*), ba'zan o'rtasida (*chicken*).", examples: ['duck', 'back', 'kick', 'clock'] },
          ],
        },
        { t: 'tip', tone: 'good', md: "Bu beshtasi siz uchun oson — o'zbek tilida ham shunday tovushlar bor. Faqat **yozilishini** eslab qoling: \"f\" tovushi **ph** bilan, \"k\" tovushi **ck** bilan ham yozilishi mumkin." },
        { t: 'check', ex: { k: 'choice', q: "*photo* so'zi qaysi tovush bilan boshlanadi?", say: 'photo', opts: ['"p"', '"f"', '"h"', '"v"'], a: 1, why: "**ph** = \"f\": *photo* — \"fouto\"." } },
      ],
    },
    {
      title: "th — o'zbek tilida yo'q tovush",
      blocks: [
        { t: 'p', md: "**th** — o'zbek o'quvchilari uchun eng qiyin tovush. Uning **ikki** xil o'qilishi bor, ikkalasida ham til uchi **tishlar orasiga** chiqadi:" },
        {
          t: 'sounds', items: [
            { label: 'th  /θ/', say: 'think', uz: "**Jarangsiz.** Til uchini old tishlar orasiga qo'ying va **\"s\"** aytayotgandek havo puflang. Ovoz yo'q, faqat havo.", examples: ['think', 'three', 'thank you', 'bath'] },
            { label: 'th  /ð/', say: 'this', uz: "**Jarangli.** Til xuddi o'sha joyda, lekin **\"z\"** aytayotgandek tomoq titraydi.", examples: ['this', 'the', 'that', 'mother'] },
          ],
        },
        { t: 'tip', tone: 'good', md: "Oyna oldida mashq qiling: *think* deganingizda **til uchi ko'rinishi** kerak. Ko'rinmasa — tovush noto'g'ri." },
        {
          t: 'compare',
          good: { title: "To'g'ri (til tishlar orasida)", items: ['think', 'three', 'this', 'the'] },
          bad: { title: "Noto'g'ri", items: ['"sink" yoki "tink"', '"tri:" (bu — tree!)', '"zis" yoki "dis"', '"ze" yoki "de"'] },
        },
        { t: 'tip', tone: 'warn', md: "Xato talaffuz ma'noni o'zgartiradi: *think* (o'ylamoq) ≠ *sink* (rakovina), *three* (uch) ≠ *tree* (daraxt)." },
        { t: 'check', ex: { k: 'listen', say: 'three', opts: ['tree', 'three', 'free', 'see'], a: 1, why: "**three** — th bilan, til tishlar orasida. *tree* (daraxt) — oddiy \"t\"." } },
      ],
    },
    {
      title: 'wh va w',
      blocks: [
        { t: 'p', md: "**wh** odatda oddiy **w** kabi o'qiladi (h eshitilmaydi). **w** tovushi o'zbekcha \"v\" emas: lablarni \"u\" deyotgandek **dumaloq** qiling, tishlar labga tegmasin, keyin tez oching." },
        {
          t: 'sounds', items: [
            { label: 'wh', say: 'whale', uz: "**\"w\"** — lablar dumaloq: *whale* = \"ueyl\".", examples: ['whale', 'what', 'white', 'where'] },
            { label: 'w', say: 'water', uz: "Xuddi shu tovush: *water* = \"uo:ta\".", examples: ['water', 'window', 'we'] },
          ],
        },
        { t: 'tip', tone: 'warn', md: "Istisno: **who** (kim) — \"hu:\". Bu yerda **w** eshitilmaydi, **h** eshitiladi." },
        {
          t: 'compare',
          good: { title: "To'g'ri", items: ['whale — "ueyl"', 'white — "uayt"'] },
          bad: { title: "Noto'g'ri", items: ['whale — "veyl"', 'white — "vhayt"'] },
        },
      ],
    },
    {
      title: 'ee va oo',
      blocks: [
        { t: 'p', md: "Ikki bir xil unli yonma-yon kelsa, odatda **uzun** tovush bo'ladi:" },
        {
          t: 'sounds', items: [
            { label: 'ee  /iː/', say: 'sheep', uz: "Uzun **\"i:\"** — lablarni tabassum qilgandek cho'zing.", examples: ['sheep', 'tree', 'see', 'green'] },
            { label: 'oo  /uː/', say: 'food', uz: "Uzun **\"u:\"** — lablar dumaloq, cho'ziq.", examples: ['food', 'zoo', 'moon', 'school'] },
            { label: 'oo  /ʊ/', say: 'book', uz: "Qisqa **\"u\"** — o'zbekcha *bu, kun* dagi \"u\" kabi, cho'zilmaydi. Ko'pincha **k** dan oldin: *book, look, cook*.", examples: ['book', 'look', 'good', 'foot'] },
          ],
        },
        { t: 'p', md: "Diqqat: qisqa **i** va uzun **ee** so'z ma'nosini o'zgartiradi. Tinglang:" },
        { t: 'table', head: ['Qisqa i', 'Uzun ee'], rows: [['ship (kema)', "sheep (qo'y)"], ['fit', 'feet'], ['fill', 'feel']], speak: [0, 1] },
        { t: 'check', ex: { k: 'listen', say: 'sheep', opts: ['ship', 'sheep', 'shop', 'chip'], a: 1, why: "Uzun \"i:\" — **sheep** (qo'y). *ship* (kema) da qisqa \"i\"." } },
      ],
    },
    {
      title: "Yangi so'zlar",
      blocks: [
        { t: 'p', md: "Har bir so'zda bitta harf birikmasi bor. Tinglang, takrorlang va birikmani toping." },
        {
          t: 'examples', items: [
            { en: 'a ship', uz: 'kema', note: '**sh**' },
            { en: 'a chicken', uz: 'tovuq', note: '**ch** + **ck**' },
            { en: 'think', uz: "o'ylamoq", note: "**th** jarangsiz — til tishlar orasida" },
            { en: 'a photo', uz: 'surat, foto', note: '**ph** = "f"' },
            { en: 'a whale', uz: 'kit (dengiz hayvoni)', note: '**wh** = "w"' },
            { en: 'a duck', uz: "o'rdak", note: '**ck** = "k"' },
            { en: 'sing', uz: 'kuylamoq', note: '**ng** — "tong"dagi kabi' },
            { en: 'a sheep', uz: "qo'y", note: '**ee** uzun' },
            { en: 'a book', uz: 'kitob', note: '**oo** qisqa' },
            { en: 'food', uz: 'ovqat', note: '**oo** uzun' },
          ],
        },
        { t: 'tip', tone: 'info', md: "*sheep* so'zining ko'pligi ham **sheep**: *one sheep, two sheep*. Ko'plikni 2-bo'limda o'rganamiz." },
        { t: 'check', ex: { k: 'choice', q: "Qaysi so'zda **oo** qisqa \"u\" bo'lib o'qiladi?", opts: ['food', 'zoo', 'book', 'moon'], a: 2, why: "*book* — qisqa \"u\". *food, zoo, moon* — uzun \"u:\"." } },
      ],
    },
  ],
  words: [
    { en: 'ship', uz: 'kema', ipa: 'ʃɪp', pos: 'noun', ex: 'This is a big ship.', exUz: 'Bu katta kema.' },
    { en: 'chicken', uz: 'tovuq', ipa: 'ˈtʃɪk.ɪn', pos: 'noun', ex: 'I eat chicken.', exUz: "Men tovuq go'shti yeyman." },
    { en: 'think', uz: "o'ylamoq", ipa: 'θɪŋk', pos: 'verb', ex: 'Let me think.', exUz: "O'ylab ko'ray." },
    { en: 'photo', uz: 'surat, foto', ipa: 'ˈfəʊ.təʊ', pos: 'noun', ex: 'This is my photo.', exUz: 'Bu mening suratim.' },
    { en: 'whale', uz: 'kit', ipa: 'weɪl', pos: 'noun', ex: 'The whale is big.', exUz: 'Kit katta.' },
    { en: 'duck', uz: "o'rdak", ipa: 'dʌk', pos: 'noun', ex: 'This is a duck.', exUz: "Bu o'rdak." },
    { en: 'sing', uz: 'kuylamoq', ipa: 'sɪŋ', pos: 'verb', ex: 'I sing.', exUz: 'Men kuylayman.' },
    { en: 'sheep', uz: "qo'y", ipa: 'ʃiːp', pos: 'noun', ex: 'This is a sheep.', exUz: "Bu qo'y." },
    { en: 'book', uz: 'kitob', ipa: 'bʊk', pos: 'noun', ex: 'This is my book.', exUz: 'Bu mening kitobim.' },
    { en: 'food', uz: 'ovqat', ipa: 'fuːd', pos: 'noun', ex: 'The food is hot.', exUz: 'Ovqat issiq.' },
  ],
  practice: [
    { k: 'listen', say: 'ship', opts: ['sheep', 'ship', 'chip', 'shop'], a: 1, why: "Qisqa \"i\" — **ship** (kema)." },
    { k: 'listen', say: 'think', opts: ['sink', 'tink', 'think', 'thing'], a: 2, why: "**think** — th jarangsiz, oxirida \"ŋk\"." },
    { k: 'choice', q: "**ph** qanday o'qiladi?", opts: ['"p"', '"ph"', '"f"', '"v"'], a: 2, why: "ph = **\"f\"**: *photo, phone*." },
    { k: 'choice', q: "*duck* so'zidagi **ck** qanday o'qiladi?", say: 'duck', opts: ['"ts"', '"k"', '"ch"', '"sk"'], a: 1, why: "ck = **\"k\"**: \"dak\"." },
    { k: 'choice', q: "**th** to'g'ri aytilganda til qayerda bo'ladi?", opts: ["Tishlar orqasida, tanglayda", 'Old tishlar orasida', "Pastki labda", "Og'iz ichida, pastda"], a: 1, why: "Til uchi **old tishlar orasiga** chiqadi." },
    { k: 'match', pairs: [['ship', 'kema'], ['sheep', "qo'y"], ['duck', "o'rdak"], ['whale', 'kit'], ['book', 'kitob']] },
    { k: 'match', pairs: [['ph', '"f"'], ['ck', '"k"'], ['ee', '"i:"'], ['wh', '"w"'], ['ng', '"ŋ"']] },
    { k: 'listen', say: 'food', opts: ['foot', 'food', 'book', 'phone'], a: 1 },
    { k: 'tf', q: "*who* so'zida **wh** \"w\" bo'lib o'qiladi.", a: false, why: "*who* — istisno: **\"hu:\"**." },
    { k: 'tf', q: "*three* (uch) va *tree* (daraxt) bir xil talaffuz qilinadi.", a: false, why: "*three* — **th** bilan, *tree* — oddiy **t** bilan." },
    { k: 'fill', q: "du___ (o'rdak)", a: ['ck'], hint: '"k" tovushi, qisqa unlidan keyin', why: "**duck** — qisqa unlidan keyin \"k\" **ck** bilan yoziladi." },
    { k: 'fill', q: '___oto (surat)', a: ['ph'], why: "**photo** — \"f\" tovushi **ph** bilan yoziladi." },
    { k: 'translate', uz: 'ovqat', a: ['food', 'the food'], why: "ovqat — **food** (uzun oo)." },
    { k: 'order', uz: 'Bu mening kitobim.', words: ['This', 'is', 'my', 'book'], why: "*This is my book.* — \"bu\" = **this** (jarangli th)." },
    { k: 'speak', say: 'think, three, thank you', uz: "Til uchini tishlar orasiga qo'yib ayting" },
    { k: 'speak', say: 'ship, sheep', uz: "Qisqa va uzun i ni farqlab ayting" },
  ],
  quiz: [
    { k: 'listen', say: 'sheep', opts: ['ship', 'cheap', 'sheep', 'shop'], a: 2 },
    { k: 'listen', say: 'whale', opts: ['whale', 'veil', 'well', 'wheel'], a: 0 },
    { k: 'listen', say: 'this', opts: ['dis', 'this', 'miss', 'sit'], a: 1 },
    { k: 'choice', q: "Qaysi so'zda **oo** uzun \"u:\" bo'lib o'qiladi?", opts: ['book', 'look', 'good', 'food'], a: 3 },
    { k: 'choice', q: "Qaysi so'z **\"f\"** tovushi bilan boshlanadi?", opts: ['photo', 'think', 'sheep', 'whale'], a: 0 },
    { k: 'fill', q: "___eep (qo'y)", a: ['sh'] },
    { k: 'fill', q: 'si___ (kuylamoq)', a: ['ng'] },
    { k: 'translate', uz: 'kema', a: ['ship', 'a ship', 'the ship'] },
    { k: 'translate', uz: "o'ylamoq", a: ['think', 'to think'] },
    { k: 'order', uz: 'Bu mening suratim.', words: ['This', 'is', 'my', 'photo'], extra: ['me'] },
    { k: 'tf', q: "*sing* so'zi oxirida alohida \"g\" aniq eshitiladi: \"sing-g\".", a: false, why: "**ng** — bitta tovush, xuddi *tong* dagi kabi: \"siŋ\"." },
  ],
  summary: [
    "Harf birikmasi = **bitta tovush**: **sh** (ship), **ch** (chicken), **ng** (sing), **ph** = \"f\" (photo), **ck** = \"k\" (duck).",
    "**th** — til uchi tishlar orasida: jarangsiz (*think, three*) va jarangli (*this, the*).",
    "**wh / w** — lablar dumaloq, \"v\" emas: *whale, water*. Istisno: *who* = \"hu:\".",
    "**ee** = uzun \"i:\" (*sheep*); **oo** = uzun \"u:\" (*food*) yoki qisqa \"u\" (*book*).",
    "Yangi so'zlar: ship, chicken, think, photo, whale, duck, sing, sheep, book, food.",
  ],
  homework: "Oyna oldida *think, three, this, the* so'zlarini 10 martadan ayting — til uchi ko'rinib tursin. *ship–sheep* juftligini ham 5 marta takrorlang. 10 ta so'zni yozib, har biridagi harf birikmasining tagiga chizing.",
};

export default lesson;
