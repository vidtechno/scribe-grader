import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: 'u1-l5',
  title: 'Hello! Greetings',
  titleUz: 'Salomlashish va xayrlashish',
  goal: "Kunning vaqtiga mos salomlashasiz, o'zingizni tanishtirasiz (**Hello, I'm… / My name is…**), hol-ahvol so'raysiz va xayrlashasiz. **please, thank you, sorry** kabi odob so'zlarini to'g'ri ishlatasiz.",
  slides: [
    {
      title: "Birinchi so'zlar: Hello va Hi",
      blocks: [
        { t: 'p', md: "Har qanday suhbat salomdan boshlanadi. O'zbek tilida *\"Assalomu alaykum\"* (rasmiy) va *\"Salom\"* (do'stona) deymiz. Ingliz tilida ham shunday:" },
        {
          t: 'sounds', items: [
            { label: 'Hello', say: 'Hello', uz: "**\"həlou\"** — hamma joyda, har kimga aytsa bo'ladi. Urg'u ikkinchi bo'g'inda: he-**LLO**.", examples: ['Hello!', 'Hello, Ali!'] },
            { label: 'Hi', say: 'Hi', uz: "**\"hay\"** — do'stona, tanishlar va tengdoshlar bilan. O'zbekcha \"Salom\"ga o'xshaydi.", examples: ['Hi!', 'Hi, Anna!'] },
          ],
        },
        { t: 'tip', tone: 'info', md: "**H** tovushi o'zbekcha **\"h\"** (*hamma*) kabi yengil — tomoqdan \"x\" qilib aytmang. *Hello* — \"xello\" emas, **\"həlou\"**." },
        { t: 'check', ex: { k: 'choice', q: "Do'stingizga qaysi so'z bilan salom berish **eng tabiiy**?", opts: ['Good night', 'Hi', 'Goodbye', 'Sorry'], a: 1, why: "**Hi** — do'stona salom. *Good night* va *Goodbye* — xayrlashish." } },
      ],
    },
    {
      title: 'Kun vaqtiga qarab salomlashish',
      blocks: [
        {
          t: 'table', head: ['Ibora', "Ma'nosi", 'Qachon'],
          rows: [
            ['Good morning', 'Xayrli tong', 'ertalab, soat 12:00 gacha'],
            ['Good afternoon', 'Xayrli kun', 'tushdan keyin, 12:00 dan 18:00 gacha'],
            ['Good evening', 'Xayrli kech', 'kechqurun, 18:00 dan keyin'],
            ['Good night', 'Xayrli tun', 'faqat xayrlashganda yoki uxlashdan oldin'],
          ],
          speak: [0],
        },
        {
          t: 'compare',
          good: { title: "To'g'ri", items: ['(kechqurun kelganda) Good evening!', '(uxlashga ketayotib) Good night!'] },
          bad: { title: "Noto'g'ri", items: ['(kechqurun kelganda) Good night!', '(ertalab soat 9 da) Good afternoon!'] },
        },
        { t: 'tip', tone: 'warn', md: "**Good night** — salom emas, **xayrlashuv**! Kechqurun birov bilan uchrashganda **Good evening** deng." },
        { t: 'tip', tone: 'info', md: "Talaffuz: *good* — qisqa \"u\" (*book* kabi), *morning* oxirida **ng** (*tong* kabi), *afternoon* — urg'u oxirida: after**NOON**." },
        { t: 'check', ex: { k: 'choice', q: "Soat **15:00**. Do'koningizga mijoz kirdi. Nima deysiz?", opts: ['Good morning!', 'Good night!', 'Good afternoon!', 'Goodbye!'], a: 2, why: "12:00 dan 18:00 gacha — **Good afternoon**." } },
      ],
    },
    {
      title: "O'zingizni tanishtirish",
      blocks: [
        { t: 'p', md: "Ismingizni aytishning ikki usuli bor. Ularni **tayyor ibora** sifatida yodlang:" },
        {
          t: 'examples', items: [
            { en: "Hello, I'm Ali.", uz: 'Salom, men Aliman.', note: "**I'm** = I am, \"aym\" deb aytiladi" },
            { en: 'My name is Malika.', uz: 'Mening ismim Malika.' },
            { en: "What's your name?", uz: 'Ismingiz nima?' },
            { en: 'Nice to meet you.', uz: 'Tanishganimdan xursandman.' },
            { en: 'Nice to meet you, too.', uz: 'Men ham tanishganimdan xursandman.', note: "javobda oxiriga **too** (ham) qo'shiladi" },
          ],
        },
        {
          t: 'compare',
          good: { title: "To'g'ri", items: ["I'm Ali. / I am Ali.", 'My name is Ali.', 'Nice to meet you.'] },
          bad: { title: "Noto'g'ri (o'zbekcha tartib)", items: ['I Ali.', 'My name Ali.', 'Me name is Ali.'] },
        },
        { t: 'tip', tone: 'warn', md: "O'zbekchada \"Men Ali**man**\" deymiz — \"-man\" qo'shimchasi bor. Inglizchada uning o'rnida alohida so'z bor: **am** (*I am* → **I'm**). Uni tushirib qoldirmang!" },
        { t: 'check', ex: { k: 'fill', q: 'My ___ is Aziz.', a: ['name'], uz: 'Mening ismim Aziz.', why: "**My name is** Aziz. — \"Mening ismim Aziz.\"" } },
      ],
    },
    {
      title: 'Qalaysiz? — How are you?',
      blocks: [
        { t: 'p', md: "Tanishgandan keyin yoki tanish odamni ko'rganda hol-ahvol so'raladi:" },
        {
          t: 'examples', items: [
            { en: 'How are you?', uz: 'Qalaysiz? / Ishlaringiz yaxshimi?' },
            { en: "I'm fine, thanks.", uz: 'Yaxshi, rahmat.' },
            { en: "I'm fine, thank you. And you?", uz: "Yaxshi, rahmat. O'zingiz-chi?" },
            { en: "I'm OK.", uz: 'Yomon emas. / Normal.' },
          ],
        },
        { t: 'sounds', items: [
          { label: 'How are you?', say: 'How are you?', uz: "**\"hau a: yu:\"** — tez va bir nafasda, oxirida ovoz pasayadi.", examples: ['How are you?'] },
          { label: 'thank you', say: 'thank you', uz: "**th** — jarangsiz, til tishlar orasida (4-dars)! \"sank yu\" yoki \"tank yu\" emas.", examples: ['thank you', 'thanks'] },
        ] },
        {
          t: 'compare',
          good: { title: "To'g'ri", items: ["I'm fine, thanks.", 'I am fine, thank you.'] },
          bad: { title: "Noto'g'ri", items: ['I fine, thanks.', 'Fine, thank.'] },
        },
        { t: 'tip', tone: 'good', md: "**How are you?** — ko'pincha shunchaki odob uchun so'raladi. Uzoq javob kutilmaydi: *I'm fine, thanks. And you?* — eng to'g'ri javob." },
        { t: 'check', ex: { k: 'order', uz: 'Yaxshi, rahmat.', words: ["I'm", 'fine', 'thanks'], why: "*I'm fine, thanks.* — **I'm** ni tushirmang." } },
      ],
    },
    {
      title: "Xayrlashish va odob so'zlari",
      blocks: [
        {
          t: 'table', head: ['Ibora', "Ma'nosi", 'Izoh'],
          rows: [
            ['Goodbye', 'Xayr', 'har qanday vaziyatda'],
            ['Bye', 'Xayr', "do'stona, qisqa"],
            ['Good night', 'Xayrli tun', 'kechasi xayrlashganda'],
            ['Please', 'Iltimos', "so'rov oxirida: Water, please."],
            ['Thank you / Thanks', 'Rahmat', "thanks — qisqaroq, do'stona"],
            ['Sorry', 'Kechirasiz / Uzr', 'xato qilganda'],
          ],
          speak: [0],
        },
        { t: 'tip', tone: 'info', md: "Inglizlar **please** va **thank you** ni juda ko'p ishlatadi. *\"Water!\"* deyish qo'pol eshitiladi — **\"Water, please.\"** deng." },
        { t: 'check', ex: { k: 'choice', q: "Birovning oyog'ini bosib oldingiz. Nima deysiz?", opts: ['Please!', 'Thank you!', 'Hello!', 'Sorry!'], a: 3, why: "Xato qilganda — **Sorry!** (Kechirasiz!)." } },
      ],
    },
    {
      title: "Suhbat: hammasi birga",
      blocks: [
        {
          t: 'dialog', lines: [
            { who: 'Aziz', en: 'Good morning!', uz: 'Xayrli tong!' },
            { who: 'Malika', en: 'Good morning!', uz: 'Xayrli tong!' },
            { who: 'Aziz', en: "Hello, I'm Aziz. What's your name?", uz: 'Salom, men Azizman. Ismingiz nima?' },
            { who: 'Malika', en: 'My name is Malika.', uz: 'Mening ismim Malika.' },
            { who: 'Aziz', en: 'Nice to meet you, Malika.', uz: 'Tanishganimdan xursandman, Malika.' },
            { who: 'Malika', en: 'Nice to meet you, too. How are you?', uz: 'Men ham. Qalaysiz?' },
            { who: 'Aziz', en: "I'm fine, thanks. And you?", uz: "Yaxshi, rahmat. O'zingiz-chi?" },
            { who: 'Malika', en: "I'm fine, thank you. Goodbye!", uz: 'Yaxshi, rahmat. Xayr!' },
            { who: 'Aziz', en: 'Bye!', uz: 'Xayr!' },
          ],
        },
        { t: 'tip', tone: 'good', md: "Har bir qatorni tinglang va **ovoz chiqarib takrorlang**. Keyin Aziz o'rniga o'z ismingizni qo'yib, suhbatni o'zingiz o'ynab ko'ring." },
      ],
    },
  ],
  words: [
    { en: 'hello', uz: 'salom', ipa: 'həˈləʊ', pos: 'phrase', ex: "Hello, I'm Ali.", exUz: 'Salom, men Aliman.' },
    { en: 'hi', uz: "salom (do'stona)", ipa: 'haɪ', pos: 'phrase', ex: 'Hi, Anna!', exUz: 'Salom, Anna!' },
    { en: 'good morning', uz: 'xayrli tong', ipa: 'ɡʊd ˈmɔː.nɪŋ', pos: 'phrase', ex: 'Good morning! How are you?', exUz: 'Xayrli tong! Qalaysiz?' },
    { en: 'good afternoon', uz: 'xayrli kun (tushdan keyin)', ipa: 'ɡʊd ˌɑːf.təˈnuːn', pos: 'phrase', ex: 'Good afternoon, Malika.', exUz: 'Xayrli kun, Malika.' },
    { en: 'good evening', uz: 'xayrli kech', ipa: 'ɡʊd ˈiːv.nɪŋ', pos: 'phrase', ex: 'Good evening! My name is Aziz.', exUz: 'Xayrli kech! Mening ismim Aziz.' },
    { en: 'good night', uz: 'xayrli tun', ipa: 'ɡʊd ˈnaɪt', pos: 'phrase', ex: 'Good night, Mum!', exUz: 'Xayrli tun, onajon!' },
    { en: 'goodbye', uz: 'xayr', ipa: 'ɡʊdˈbaɪ', pos: 'phrase', ex: 'Goodbye, Ali!', exUz: 'Xayr, Ali!' },
    { en: 'please', uz: 'iltimos', ipa: 'pliːz', pos: 'phrase', ex: 'Water, please.', exUz: 'Suv bering, iltimos.' },
    { en: 'thank you', uz: 'rahmat', ipa: 'ˈθæŋk juː', pos: 'phrase', ex: "I'm fine, thank you.", exUz: 'Yaxshi, rahmat.' },
    { en: 'sorry', uz: 'kechirasiz, uzr', ipa: 'ˈsɒr.i', pos: 'phrase', ex: "I'm sorry!", exUz: 'Kechirasiz!' },
  ],
  practice: [
    { k: 'listen', say: 'Good afternoon', opts: ['Good morning', 'Good evening', 'Good afternoon', 'Good night'], a: 2 },
    { k: 'listen', say: "I'm fine, thanks.", opts: ["I'm fine, thanks.", "I'm nine, thanks.", 'My name is Fine.'], a: 0 },
    { k: 'match', pairs: [['Good morning', 'Xayrli tong'], ['Good evening', 'Xayrli kech'], ['Good night', 'Xayrli tun'], ['Goodbye', 'Xayr'], ['Please', 'Iltimos']] },
    { k: 'choice', q: "Soat **8:00**, sinfga kirdingiz. Nima deysiz?", opts: ['Good evening!', 'Good morning!', 'Good night!', 'Goodbye!'], a: 1, why: "Ertalab, 12:00 gacha — **Good morning**." },
    { k: 'choice', q: "*Nice to meet you.* ga to'g'ri javob:", opts: ['Nice to meet you, too.', "I'm fine, thanks.", 'Goodbye.', 'Sorry.'], a: 0, why: "Javobda **too** (ham) qo'shiladi: *Nice to meet you, too.*" },
    { k: 'tf', q: "Kechqurun do'stingiz bilan uchrashganda **Good night!** deb salom berasiz.", a: false, why: "Good night — faqat xayrlashganda. Uchrashganda — **Good evening**." },
    { k: 'tf', q: "*Hi* — *Hello* ga qaraganda do'stonaroq salom.", a: true },
    { k: 'fill', q: 'Nice to ___ you.', a: ['meet'], uz: 'Tanishganimdan xursandman.', why: "**Nice to meet you.** — tayyor ibora." },
    { k: 'fill', q: 'How ___ you?', a: ['are'], uz: 'Qalaysiz?', why: "**How are you?** — \"are\"ni tushirmang." },
    { k: 'fill', q: "Hello, ___ Ali.", a: ["I'm", 'I am'], uz: 'Salom, men Aliman.', why: "**I'm** (= I am) — \"men ...man\"." },
    { k: 'order', uz: 'Mening ismim Malika.', words: ['My', 'name', 'is', 'Malika'], why: "*My name is Malika.* — **is** albatta kerak." },
    { k: 'order', uz: 'Men ham tanishganimdan xursandman.', words: ['Nice', 'to', 'meet', 'you', 'too'], extra: ['me'], why: "*Nice to meet you, too.*" },
    { k: 'translate', uz: 'Rahmat.', a: ['thank you', 'thanks', 'thank you very much', 'thanks a lot'], why: "**Thank you.** yoki qisqa **Thanks.**" },
    { k: 'translate', uz: 'Mening ismim Ali.', a: ['my name is ali', "i'm ali", 'i am ali', "my name's ali"], why: "**My name is Ali.** yoki **I'm Ali.**" },
    { k: 'speak', say: "Hello, my name is Ali. Nice to meet you.", uz: "O'zingizni tanishtiring (Ali o'rniga o'z ismingizni ham ayting)" },
    { k: 'speak', say: "How are you? I'm fine, thank you.", uz: "th ga e'tibor bering: thank you" },
  ],
  quiz: [
    { k: 'listen', say: 'Good evening', opts: ['Good morning', 'Good evening', 'Good night', 'Goodbye'], a: 1 },
    { k: 'listen', say: 'Nice to meet you, too.', opts: ['Nice to meet you.', 'Nice to meet you, too.', 'How are you?', 'Thank you, too.'], a: 1 },
    { k: 'choice', q: "Soat **22:00**, uxlashga ketyapsiz. Oilangizga nima deysiz?", opts: ['Good evening!', 'Good afternoon!', 'Good night!', 'Hello!'], a: 2 },
    { k: 'choice', q: "Qaysi gap **to'g'ri**?", opts: ['I fine, thanks.', 'My name Ali.', "I'm fine, thanks.", 'Me name is Ali.'], a: 2, why: "**I'm** fine — \"am\" tushib qolmasligi kerak." },
    { k: 'fill', q: "I'm fine, thanks. And ___?", a: ['you'], uz: "Yaxshi, rahmat. O'zingiz-chi?" },
    { k: 'fill', q: 'My name ___ Aziz.', a: ['is'], uz: 'Mening ismim Aziz.' },
    { k: 'translate', uz: 'Qalaysiz?', a: ['how are you'] },
    { k: 'translate', uz: 'Kechirasiz!', a: ['sorry', "i'm sorry", 'i am sorry', 'excuse me'] },
    { k: 'translate', uz: 'Xayrli tong!', a: ['good morning'] },
    { k: 'order', uz: 'Salom, men Malikaman.', words: ['Hello', "I'm", 'Malika'], extra: ['My'] },
    { k: 'match', pairs: [['please', 'iltimos'], ['thank you', 'rahmat'], ['sorry', 'kechirasiz'], ['goodbye', 'xayr']] },
  ],
  summary: [
    "Salom: **Hello** (hamma uchun), **Hi** (do'stona). Vaqtga qarab: **Good morning / afternoon / evening**.",
    "**Good night** — faqat xayrlashganda! Xayr: **Goodbye**, **Bye**.",
    "Tanishish: **I'm Ali. / My name is Ali.** — **Nice to meet you.** — **Nice to meet you, too.**",
    "**How are you?** — **I'm fine, thanks. And you?** (\"am\" ni tushirmang: *I'm*).",
    "Odob so'zlari: **please**, **thank you** (th!), **sorry**.",
  ],
  homework: "Dialogni o'z ismingiz bilan 3 marta ovoz chiqarib o'qing. Ertaga ertalab, tushdan keyin va kechqurun oilangizga mos inglizcha salom bering (*Good morning / Good afternoon / Good evening*), yotishdan oldin esa *Good night!* deng.",
};

export default lesson;
