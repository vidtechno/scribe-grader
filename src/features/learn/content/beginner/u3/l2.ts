import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: 'u3-l2',
  title: 'Present Simple: I / you / we / they',
  titleUz: 'Present Simple: I / you / we / they',
  goal: "O'zingiz va boshqalar haqida **odatlar va doimiy faktlarni** aytasiz: *I live in Tashkent. We study English.* Inglizcha so'z tartibini (**ega + fe'l + to'ldiruvchi**) to'g'ri qo'llaysiz.",
  slides: [
    {
      title: 'Present Simple nima uchun kerak?',
      blocks: [
        { t: 'p', md: "Hozirgacha biz faqat **to be** (am / is / are) bilan gapirdik: *I am a student. She is happy.* Lekin hayotda **harakat** haqida ham gapiramiz: yashayman, ishlayman, o'qiyman, yoqtiraman." },
        { t: 'p', md: "**Present Simple** (oddiy hozirgi zamon) quyidagilar uchun ishlatiladi:\n• **odatlar** — har doim, muntazam qiladigan ishlar\n• **doimiy faktlar** — qayerda yashaysiz, qayerda ishlaysiz, nimani yoqtirasiz" },
        { t: 'examples', items: [
          { en: 'I live in Tashkent.', uz: 'Men Toshkentda yashayman.' },
          { en: 'We study English.', uz: "Biz ingliz tilini o'rganamiz." },
          { en: 'They work in a bank.', uz: 'Ular bankda ishlashadi.' },
        ] },
        { t: 'tip', tone: 'good', md: "Bugungi yaxshi xabar: **I, you, we, they** bilan fe'l **umuman o'zgarmaydi**. O'zbekchada \"ishlayman, ishlaysiz, ishlaymiz\" — har xil qo'shimcha. Inglizchada esa hammasi — **work**." },
      ],
    },
    {
      title: "Shakl: fe'l o'zgarmaydi",
      blocks: [
        {
          t: 'table', head: ['Ega', "Fe'l", "O'zbekcha"], speak: [1],
          rows: [
            ['I', 'I work', 'men ishlayman'],
            ['you', 'you work', 'sen ishlaysan / siz ishlaysiz'],
            ['we', 'we work', 'biz ishlaymiz'],
            ['they', 'they work', 'ular ishlashadi'],
          ],
        },
        { t: 'p', md: "Formula: **ega + fe'lning lug'at shakli**. Hech qanday qo'shimcha yo'q. Ko'plikdagi otlar bilan ham shunday: *My friends **live** in Samarkand. The students **speak** English.*" },
        { t: 'tip', tone: 'info', md: "**he / she / it** bilan fe'l o'zgaradi (**-s** qo'shiladi) — buni keyingi darsda o'rganamiz. Bugun faqat **I, you, we, they**." },
        { t: 'check', ex: { k: 'fill', q: 'We ___ in Bukhara.', a: ['live'], uz: 'Biz Buxoroda yashaymiz.', why: "**we** bilan fe'l o'zgarmaydi: *We **live** in Bukhara.*" } },
      ],
    },
    {
      title: "So'z tartibi: ega + fe'l + to'ldiruvchi",
      blocks: [
        { t: 'p', md: "Bu o'zbek tilidan **eng katta farq**. O'zbekchada fe'l gap **oxirida** keladi. Inglizchada esa fe'l **egadan keyin darhol** keladi." },
        {
          t: 'table', head: ['', "1-o'rin", "2-o'rin", "3-o'rin"],
          rows: [
            ["O'zbekcha", 'Men (ega)', "ingliz tilini (to'ldiruvchi)", "o'rganaman (fe'l)"],
            ['Inglizcha', 'I (ega)', "learn (fe'l)", "English (to'ldiruvchi)"],
            ['Inglizcha', 'They', 'live', 'in Tashkent'],
            ['Inglizcha', 'We', 'need', 'a new phone'],
          ],
        },
        { t: 'compare', good: { title: "To'g'ri (S + V + O)", items: ['I learn English.', 'We drink water.', 'They work in an office.'] }, bad: { title: "Noto'g'ri (o'zbekcha tartib)", items: ['I English learn.', 'We water drink.', 'They in an office work.'] } },
        { t: 'tip', tone: 'good', md: "Usul: gapni o'zbekchada o'ylab, **fe'lni ikkinchi o'ringa \"ko'chiring\"**: *Men / ingliz tilini / o'rganaman* → *I / learn / English*." },
        { t: 'check', ex: { k: 'order', uz: 'Biz ingliz tilini gapiramiz.', words: ['We', 'speak', 'English'], why: "Ega (**We**) → fe'l (**speak**) → to'ldiruvchi (**English**)." } },
      ],
    },
    {
      title: "Katta xato: \"I am work\"",
      blocks: [
        { t: 'p', md: "O'zbek o'quvchilarining eng ko'p qiladigan xatosi — fe'l oldiga **am / are** qo'shish. Present Simple'da **am / is / are kerak emas**, chunki gapda allaqachon fe'l bor!" },
        { t: 'compare', good: { title: "To'g'ri", items: ['I work in a hospital.', 'You live near the park.', 'They like English.'] }, bad: { title: "Noto'g'ri", items: ['I am work in a hospital.', 'You are live near the park.', 'They are like English.'] } },
        { t: 'p', md: "Farqni eslab qoling:\n• **to be** — kim, qanday, qayerda: *I **am** a doctor. We **are** at home.*\n• **fe'l** — nima qilasiz: *I **work** in a hospital. We **live** here.*" },
        { t: 'check', ex: { k: 'choice', q: "To'g'ri gapni tanlang:", opts: ['I am live in Tashkent.', 'I live in Tashkent.', 'I in Tashkent live.', 'I living in Tashkent.'], a: 1, why: "Fe'l bor — **am** kerak emas: *I **live** in Tashkent.*" } },
      ],
    },
    {
      title: "Bugungi fe'llar",
      blocks: [
        { t: 'examples', items: [
          { en: 'I live in Samarkand.', uz: 'Men Samarqandda yashayman.', note: "**live in** + shahar/mamlakat" },
          { en: 'We work in an office.', uz: 'Biz ofisda ishlaymiz.' },
          { en: 'They study at school.', uz: "Ular maktabda o'qishadi." },
          { en: 'I like my job.', uz: 'Men ishimni yoqtiraman.' },
          { en: 'You play tennis.', uz: "Siz tennis o'ynaysiz." },
          { en: 'We speak Uzbek and English.', uz: 'Biz o\'zbek va ingliz tillarida gapiramiz.' },
          { en: 'I drink water.', uz: 'Men suv ichaman.' },
          { en: 'They watch TV.', uz: "Ular televizor ko'rishadi." },
          { en: 'We learn new words.', uz: "Biz yangi so'zlarni o'rganamiz." },
          { en: 'I need a new phone.', uz: 'Menga yangi telefon kerak.', note: "O'zbekchada \"menga kerak\", inglizchada **I need** — \"men\" ega bo'ladi." },
        ] },
        { t: 'tip', tone: 'info', md: "**study** va **learn** — ikkalasi ham \"o'rganmoq\". *study* — o'qish jarayoni (maktab, universitet, kitob bilan); *learn* — bilim olish, yangi narsani bilib olish: *I study English and I learn new words.*" },
      ],
    },
    {
      title: 'Talaffuz: live, work, study',
      blocks: [
        {
          t: 'sounds', items: [
            { label: 'live', say: 'live', uz: "**\"liv\"** — qisqa \"i\". Cho'zsangiz (*leave* \"li:v\") — boshqa so'z bo'ladi (ketmoq).", examples: ['live', 'I live here'] },
            { label: 'work', say: 'work', uz: "**\"wə:k\"** — o'zbekchada yo'q tovush: \"o\" va \"e\" orasidagi uzun, bo'sh tovush. \"vork\" emas! *w* — lablarni yumaloqlab boshlang.", examples: ['work', 'we work'] },
            { label: 'study', say: 'study', uz: "**\"stadi\"** — *u* bu yerda qisqa \"a\" bo'lib o'qiladi.", examples: ['study', 'they study'] },
            { label: 'watch', say: 'watch', uz: "**\"woch\"** — *a* bu yerda qisqa \"o\".", examples: ['watch', 'watch TV'] },
            { label: 'learn', say: 'learn', uz: "**\"lə:n\"** — *work* dagi uzun tovush, \"r\" aytilmaydi.", examples: ['learn', 'we learn'] },
          ],
        },
        { t: 'tip', tone: 'warn', md: "Britancha talaffuzda so'z oxiridagi va undosh oldidagi **r** odatda aytilmaydi: *work* \"wə:k\", *learn* \"lə:n\"." },
        { t: 'check', ex: { k: 'listen', say: 'We work', opts: ['We walk', 'We were', 'We work', 'We want'], a: 2, why: "**work** — \"wə:k\" (uzun, o va e orasida). *walk* esa \"wo:k\"." } },
      ],
    },
    {
      title: 'Dialog: tanishuv',
      blocks: [
        { t: 'dialog', lines: [
          { who: 'Aziz', en: "Hi, I'm Aziz. I'm a student.", uz: 'Salom, men Azizman. Men talabaman.' },
          { who: 'Lola', en: "Nice to meet you. I'm Lola. I'm a nurse.", uz: 'Tanishganimdan xursandman. Men Lolaman. Men hamshiraman.' },
          { who: 'Aziz', en: 'I live in Tashkent. I study English.', uz: "Men Toshkentda yashayman. Ingliz tilini o'qiyman." },
          { who: 'Lola', en: 'I live in Tashkent too. I work in a hospital.', uz: 'Men ham Toshkentda yashayman. Kasalxonada ishlayman.' },
          { who: 'Aziz', en: 'My friends and I play tennis in the park.', uz: "Do'stlarim bilan parkda tennis o'ynaymiz." },
          { who: 'Lola', en: 'Great! I like tennis.', uz: 'Zo\'r! Men tennisni yoqtiraman.' },
        ] },
        { t: 'tip', tone: 'info', md: "E'tibor bering: *I'm a student* (**to be**, kimligi) va *I study English* (**fe'l**, nima qilishi) — bitta suhbatda ikkalasi ham bor, lekin hech qachon birga emas." },
        { t: 'check', ex: { k: 'tf', q: "\"My friends and I play tennis\" gapida **play** to'g'ri shaklda.", a: true, why: "*My friends and I* = **we**, shuning uchun fe'l o'zgarmaydi: **play**." } },
      ],
    },
  ],
  words: [
    { en: 'live', uz: 'yashamoq', ipa: 'lɪv', pos: 'verb', ex: 'I live in Tashkent.', exUz: 'Men Toshkentda yashayman.' },
    { en: 'work', uz: 'ishlamoq', ipa: 'wɜːk', pos: 'verb', ex: 'They work in a bank.', exUz: 'Ular bankda ishlashadi.' },
    { en: 'study', uz: "o'qimoq, o'rganmoq", ipa: 'ˈstʌd.i', pos: 'verb', ex: 'We study at school.', exUz: "Biz maktabda o'qiymiz." },
    { en: 'like', uz: 'yoqtirmoq', ipa: 'laɪk', pos: 'verb', ex: 'I like my school.', exUz: 'Men maktabimni yoqtiraman.' },
    { en: 'play', uz: "o'ynamoq", ipa: 'pleɪ', pos: 'verb', ex: 'The children play in the park.', exUz: "Bolalar parkda o'ynashadi." },
    { en: 'speak', uz: 'gapirmoq', ipa: 'spiːk', pos: 'verb', ex: 'We speak English.', exUz: 'Biz inglizcha gapiramiz.' },
    { en: 'drink', uz: 'ichmoq', ipa: 'drɪŋk', pos: 'verb', ex: 'I drink water.', exUz: 'Men suv ichaman.' },
    { en: 'watch', uz: "tomosha qilmoq, ko'rmoq", ipa: 'wɒtʃ', pos: 'verb', ex: 'They watch TV.', exUz: "Ular televizor ko'rishadi." },
    { en: 'learn', uz: "o'rganmoq, bilib olmoq", ipa: 'lɜːn', pos: 'verb', ex: 'You learn new words.', exUz: "Siz yangi so'zlarni o'rganasiz." },
    { en: 'need', uz: "kerak bo'lmoq, muhtoj bo'lmoq", ipa: 'niːd', pos: 'verb', ex: 'I need a new bag.', exUz: 'Menga yangi sumka kerak.' },
  ],
  practice: [
    { k: 'match', pairs: [['live', 'yashamoq'], ['work', 'ishlamoq'], ['drink', 'ichmoq'], ['speak', 'gapirmoq'], ['need', "kerak bo'lmoq"]] },
    { k: 'listen', say: 'I live in a small city', opts: ['I leave a small city', 'I live in a small city', 'I like a small city', 'I am in a small city'], a: 1, why: "**live** — qisqa \"i\": \"liv\"." },
    { k: 'choice', q: "To'g'ri gapni tanlang:", opts: ['They are work in a shop.', 'They in a shop work.', 'They works in a shop.', 'They work in a shop.'], a: 3, why: "**They work** — am/are kerak emas, fe'l o'zgarmaydi." },
    { k: 'fill', q: 'I ___ water.', a: ['drink'], uz: 'Men suv ichaman.', why: "ichmoq — **drink**." },
    { k: 'fill', q: 'You ___ English very well.', a: ['speak'], uz: 'Siz inglizchani juda yaxshi gapirasiz.', why: "gapirmoq (tilda) — **speak**." },
    { k: 'tf', q: "\"We are study English\" — to'g'ri gap.", a: false, why: "Fe'l bor bo'lsa **are** kerak emas: *We **study** English.*" },
    { k: 'order', uz: 'Ular bankda ishlashadi.', words: ['They', 'work', 'in', 'a', 'bank'], why: "Ega → fe'l → joy: **They work in a bank.**" },
    { k: 'order', uz: 'Biz televizor ko\'ramiz.', words: ['We', 'watch', 'TV'], extra: ['are'], why: "**We watch TV.** — *are* ortiqcha." },
    { k: 'choice', q: "\"Menga yangi telefon kerak.\"", opts: ['Me need a new phone.', 'I need a new phone.', 'I am need a new phone.', 'A new phone I need.'], a: 1, why: "\"Menga kerak\" — inglizchada **I need**. Ega — *I*." },
    { k: 'fill', q: 'My friends ___ in London.', a: ['live'], uz: "Do'stlarim Londonda yashashadi.", why: "*My friends* = they → **live** (o'zgarmaydi)." },
    { k: 'listen', say: 'We learn new words', opts: ['We learn new words', 'We like new words', 'We need new words', 'We want new words'], a: 0 },
    { k: 'translate', uz: "Men ingliz tilini o'rganaman.", a: ['I learn English', 'I study English'], why: "Fe'l ikkinchi o'rinda: **I learn English** (yoki *I study English*)." },
    { k: 'translate', uz: "Ular tennis o'ynashadi.", a: ['They play tennis'], why: "**They play tennis.** — *They are play* emas." },
    { k: 'speak', say: 'I live in Tashkent and I study English.', uz: "O'zingiz haqingizda ayting" },
    { k: 'translate', uz: 'Ular parkda o\'ynashadi.', a: ['They play in the park', 'They play in a park'], why: "**They play in the park.**" },
  ],
  quiz: [
    { k: 'listen', say: 'They watch TV', opts: ['They want TV', 'They wash TV', 'They watch TV', 'They work TV'], a: 2 },
    { k: 'choice', q: "Qaysi gap **noto'g'ri**?", opts: ['I like my job.', 'You speak Uzbek.', 'We are live in Bukhara.', 'They need a car.'], a: 2, why: "*We **live** in Bukhara* — **are** ortiqcha." },
    { k: 'fill', q: 'I ___ in a hospital. I am a nurse.', a: ['work'], uz: 'Men kasalxonada ishlayman. Men hamshiraman.' },
    { k: 'fill', q: 'We ___ a new car.', a: ['need'], uz: 'Bizga yangi mashina kerak.', why: "kerak — **need**: *We need a new car.*" },
    { k: 'order', uz: 'Siz inglizchani yaxshi gapirasiz.', words: ['You', 'speak', 'English', 'well'], extra: ['are'], why: "**You speak English well.** — *are* ortiqcha." },
    { k: 'order', uz: "Biz maktabda ingliz tilini o'qiymiz.", words: ['We', 'study', 'English', 'at', 'school'], why: "**We study English at school.** Fe'l — ikkinchi o'rinda." },
    { k: 'translate', uz: 'Men suv ichaman.', a: ['I drink water'] },
    { k: 'translate', uz: 'Ular Samarqandda yashashadi.', a: ['They live in Samarkand', 'They live in Samarqand'], why: "**They live in Samarkand.**" },
    { k: 'match', pairs: [['study', "o'qimoq"], ['play', "o'ynamoq"], ['watch', "tomosha qilmoq"], ['like', 'yoqtirmoq'], ['learn', 'bilib olmoq']] },
    { k: 'tf', q: "Present Simple'da **I, you, we, they** bilan fe'lga qo'shimcha qo'shilmaydi.", a: true, why: "To'g'ri: *I work, you work, we work, they work*." },
  ],
  summary: [
    "**Present Simple** — odatlar va doimiy faktlar: *I live in Tashkent.*",
    "**I / you / we / they** + fe'lning lug'at shakli: *I work, we work, they work.*",
    "So'z tartibi: **ega + fe'l + to'ldiruvchi** — *I learn English*, \"I English learn\" emas.",
    "Fe'l bor joyda **am / are qo'shilmaydi**: *I work*, \"I am work\" emas.",
    "Yangi fe'llar: live, work, study, like, play, speak, drink, watch, learn, need.",
  ],
  homework: "O'zingiz haqingizda Present Simple'da 5 ta gap yozing (qayerda yashaysiz, ishlaysiz/o'qiysiz, nima ichasiz, nimani yoqtirasiz, nima kerak). Har bir gapda fe'l ikkinchi o'rinda ekanini tekshiring va gaplarni ovoz chiqarib o'qing.",
};

export default lesson;
