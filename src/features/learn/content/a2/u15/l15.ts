import type { Lesson } from '../../../types';

// Mini lesson (skill): reading and writing. Reads a library notice and a message of advice, then writes a short advice note.
const lesson: Lesson = {
  id: 'u15-l15',
  title: "Reading and writing: signs, notices and advice",
  titleUz: "O'qish va yozish: belgilar, e'lonlar va maslahat xati",
  mini: true,
  kind: 'skill',
  goal: "Belgilar va e'lonlarni o'qib tushunasiz, do'stning maslahat xatini o'qiysiz va o'zingiz **should / must / could** bilan 4–6 gapli qisqa maslahat xati yozasiz.",
  slides: [
    {
      title: "Belgilar va e'lonlar",
      blocks: [
        { t: 'p', md: "Belgilar va e'lonlar qisqa bo'ladi, ko'pincha to'liq gap emas. Ularni to'liq gapga aylantirib tushunish kerak:" },
        { t: 'table', head: ['Belgi', "Ma'nosi", "To'liq gap"], speak: [0, 2], rows: [
          ['No entry', "Kirish taqiqlangan", "You mustn't go in."],
          ['Wet floor', "Pol ho'l (ehtiyot bo'ling)", "You should be careful."],
          ['Staff only', "Faqat xodimlar uchun", "Only staff can go in."],
          ['Queue here', "Navbat shu yerda", "You have to wait here."],
          ['Free entry', "Kirish bepul", "You don't have to pay."],
        ] },
        { t: 'tip', tone: 'info', md: "E'lonlarda ko'pincha **please** ishlatiladi: *Please keep quiet.* Bu buyruq, lekin muloyim. Yozma e'londa buyruq shakli normal." },
        { t: 'check', ex: { k: 'choice', q: "Eshik ustida: **Staff only**. Siz nima qilasiz?", opts: ["Xodim bo'lmasangiz, kirmaysiz.", "Hamma kiradi.", "Navbatda turasiz.", "To'laysiz."], a: 0, why: "**Staff only** — faqat xodimlar uchun." } },
      ],
    },
    {
      title: "O'qing: kutubxona e'loni",
      blocks: [
        {
          t: 'text', title: 'Green Park Library',
          en: "Welcome to Green Park Library. We are open from nine to six, Monday to Saturday. You must show your card when you borrow books. You can borrow five books for three weeks. You mustn't eat or drink in the reading room, and you must keep your phone quiet. You don't have to pay to join. It is free. You should return your books on time, or you will have to pay a fine. If you need advice, please ask a member of staff. Thank you for being polite to other readers.",
          uz: "Green Park kutubxonasiga xush kelibsiz. Biz dushanbadan shanbagacha soat to'qqizdan oltigacha ochiqmiz. Kitob olganingizda kartangizni ko'rsatishingiz shart. Beshta kitobni uch haftaga olishingiz mumkin. O'qish zalida ovqatlanish va ichish mumkin emas, telefoningizni ovozsiz qo'ying. Kutubxonaga a'zo bo'lish uchun to'lashingiz shart emas. U bepul. Kitoblarni o'z vaqtida qaytarishingiz kerak, aks holda jarima to'laysiz. Maslahat kerak bo'lsa, xodimlardan so'rang. Boshqa kitobxonlarga hurmat ko'rsatganingiz uchun rahmat.",
        },
        { t: 'check', ex: { k: 'tf', q: "You have to pay to join the library.", a: false, why: "*You don't have to pay to join. It is free.*" } },
        { t: 'check', ex: { k: 'choice', q: "What mustn't you do in the reading room?", opts: ['Eat or drink', 'Read books', 'Show your card', 'Ask for advice'], a: 0, why: "*You mustn't eat or drink in the reading room.*" } },
        { t: 'check', ex: { k: 'choice', q: "What happens if you return a book late?", opts: ['You pay a fine.', 'You can borrow more.', 'You must leave.', 'Nothing happens.'], a: 0, why: "*Or you will have to pay a fine.*" } },
      ],
    },
    {
      title: "O'qing: do'stning maslahat xati",
      blocks: [
        {
          t: 'text', title: 'A message from Sara', voice: 'emma',
          en: "Hi Ali, thanks for your message. I'm sorry you feel tired and stressed. I think you should go to bed earlier, and you shouldn't drink coffee after six o'clock. You could also go for a walk after work. It helps me a lot! If I were you, I'd talk to your manager about the extra hours. You don't have to answer emails at night. Take care of yourself, and call me if you want to talk. Sara",
          uz: "Salom Ali, xabaring uchun rahmat. Charchaganing va stressda ekaningdan afsusdaman. Menimcha, erta yotishing kerak va soat oltidan keyin kofe ichmasliging kerak. Ishdan keyin sayr qilib kelishing ham mumkin. Bu menga juda yordam beradi! Sening o'rningda bo'lsam, qo'shimcha soatlar haqida menejer bilan gaplashardim. Kechasi xatlarga javob berishing shart emas. O'zingni asra va gaplashging kelsa, menga qo'ng'iroq qil. Sara",
        },
        { t: 'check', ex: { k: 'tf', q: "Sara thinks Ali should drink coffee in the evening.", a: false, why: "*You shouldn't drink coffee after six o'clock.*" } },
        { t: 'check', ex: { k: 'choice', q: "What does Sara say about emails?", opts: ["Ali doesn't have to answer them at night.", "Ali must answer them at night.", "Ali mustn't read them.", "Ali should delete them."], a: 0, why: "*You don't have to answer emails at night.*" } },
      ],
    },
    {
      title: "Yozish: maslahat xati qanday tuziladi",
      blocks: [
        { t: 'p', md: "Maslahat xati to'rt qismdan iborat. Saranikidek namuna qilib oling:" },
        { t: 'table', head: ['Qism', 'Ibora'], speak: [1], rows: [
          ["1. Salom va hamdardlik", "Hi Ali, I'm sorry you feel tired."],
          ["2. Asosiy maslahat", "I think you should go to bed earlier."],
          ["3. Yana bir maslahat", "You could also go for a walk. / You shouldn't drink coffee late."],
          ["4. Yakun", "Take care of yourself. Call me if you want to talk."],
        ] },
        { t: 'compare', good: { title: "To'g'ri", items: ["You should rest.", "You could ask your teacher.", "You mustn't give up."], }, bad: { title: "Xato", items: ["You should to rest.", "You could to ask your teacher.", "You mustn't giving up."] } },
        { t: 'tip', tone: 'good', md: "**should** — oddiy maslahat, **could** — yumshoq variant (\"qilsang ham bo'ladi\"), **must** — juda muhim narsa. 4–6 gapda 2–3 xil shaklni ishlating." },
        { t: 'check', ex: { k: 'order', uz: "Menimcha, ko'proq dam olishing kerak.", words: ['I', 'think', 'you', 'should', 'rest', 'more.'], extra: ['to', 'must'] } },
        { t: 'check', ex: { k: 'fix', wrong: "You could to ask your teacher.", a: ["You could ask your teacher."], why: "**could** dan keyin **to** yo'q." } },
      ],
    },
    {
      title: "Endi siz yozing",
      blocks: [
        { t: 'p', md: "Do'stingiz Bobur: \"I can't sleep and I feel nervous before my exam.\" deb yozdi. Unga 4–6 gapli maslahat xati yozing. Namuna:" },
        {
          t: 'text', title: 'Model reply',
          en: "Hi Bobur, I'm sorry you feel nervous. I think you should study for one hour each day, and you shouldn't study all night. You could ask your teacher for some advice. You must sleep at least seven hours before the exam. Good luck! Dilnoza",
          uz: "Salom Bobur, asabiylashayotganingdan afsusdaman. Menimcha, har kuni bir soatdan o'qishing kerak, tun bo'yi o'qimasliging kerak. O'qituvchingdan maslahat so'rashing ham mumkin. Imtihondan oldin kamida yetti soat uxlashing shart. Omad! Dilnoza",
        },
        { t: 'tip', tone: 'info', md: "Tekshirib chiqing: salom bormi? hamdardlik bormi? **should**, **shouldn't**, **could** yoki **must** ishlatdingizmi? Hamma modal fe'ldan keyin **to yo'q**mi?" },
        { t: 'check', ex: { k: 'translate', uz: "Menimcha, erta yotishing kerak.", a: ["I think you should go to bed early.", "I think you should go to bed earlier.", "I think you should go to sleep early.", "I think you should go to sleep earlier."], why: "**I think you should + V1**." } },
      ],
    },
  ],
  words: [
    { en: 'notice', uz: "e'lon", ipa: 'ˈnəʊ.tɪs', pos: 'noun', ex: 'There is a notice on the door.', exUz: "Eshikda e'lon bor." },
    { en: 'no entry', uz: 'kirish mumkin emas', ipa: 'nəʊ ˈen.tri', pos: 'phrase', ex: 'The sign says no entry.', exUz: "Belgida kirish mumkin emas deb yozilgan." },
    { en: 'wet floor', uz: "ho'l pol", ipa: 'wet flɔː', pos: 'phrase', ex: 'Be careful. The sign says wet floor.', exUz: "Ehtiyot bo'ling. Belgida ho'l pol deb yozilgan." },
    { en: 'staff only', uz: 'faqat xodimlar uchun', ipa: 'stɑːf ˈəʊn.li', pos: 'phrase', ex: 'This room is staff only.', exUz: "Bu xona faqat xodimlar uchun." },
    { en: 'reply', uz: 'javob bermoq; javob', ipa: 'rɪˈplaɪ', pos: 'verb / noun', ex: 'Please reply to my message.', exUz: "Iltimos, xabarimga javob bering." },
  ],
  practice: [
    { k: 'match', pairs: [['notice', "e'lon"], ['no entry', 'kirish mumkin emas'], ['wet floor', "ho'l pol"], ['staff only', 'faqat xodimlar uchun']] },
    { k: 'tf', q: "*Free entry* belgisi: kirish uchun to'lash shart emas.", a: true, why: "**Free entry** — kirish bepul." },
    { k: 'choice', q: "A sign says **No entry**. What does it mean?", opts: ["You mustn't go in.", "You don't have to go in.", "You should go in.", "You can go in."], a: 0, why: "**No entry** — taqiq." },
    { k: 'choice', q: "Qaysi gap kutubxona qoidasi?", opts: ["You must show your card.", "You can show your friend.", "You should show your tickets.", "You are able to show it."], a: 0, why: "Matnda: *You must show your card when you borrow books.*" },
    { k: 'fill', q: "You ___ eat in the reading room. It is forbidden.", a: ["mustn't", 'must not'], uz: "O'qish zalida ovqatlanish taqiqlangan.", why: "Taqiq — **mustn't**." },
    { k: 'fill', q: "It's free. You don't ___ to pay.", a: ['have'], uz: "Bepul. To'lashingiz shart emas.", why: "**don't have to**." },
    { k: 'order', uz: "Kitoblarni o'z vaqtida qaytarishingiz kerak.", words: ['You', 'should', 'return', 'your', 'books', 'on', 'time.'], extra: ['to', 'must to'] },
    { k: 'order', uz: "Soat oltidan keyin kofe ichmasliging kerak.", words: ["You", "shouldn't", 'drink', 'coffee', 'after', 'six', "o'clock."], extra: ["don't", 'to'] },
    { k: 'fix', wrong: "You should to go to bed earlier.", a: ["You should go to bed earlier."], why: "**should** dan keyin **to** yo'q." },
    { k: 'fix', wrong: "I think you must to talk to your manager.", a: ["I think you should talk to your manager.", "I think you must talk to your manager."], why: "Modal fe'ldan keyin **to** yo'q." },
    { k: 'dictation', say: "You don't have to answer emails at night.", a: ["You don't have to answer emails at night.", 'You do not have to answer emails at night.'], uz: "Kechasi xatlarga javob berishingiz shart emas." },
    { k: 'translate', uz: "Telefoningizni ovozsiz qo'yishingiz kerak.", a: ['You must keep your phone quiet.', 'You have to keep your phone quiet.', 'You should keep your phone quiet.', 'You must put your phone on silent.'], why: "Qoida: **must / have to**." },
    { k: 'translate', uz: "Sening o'rningda bo'lsam, men menejer bilan gaplashardim.", a: ["If I were you, I'd talk to the manager.", "If I were you, I would talk to the manager.", "If I were you, I'd talk to your manager.", "If I were you, I would talk to your manager.", "If I were you, I'd speak to the manager.", "If I were you, I would speak to the manager."] },
  ],
  quiz: [
    { k: 'choice', q: "Belgi: **Wet floor**. Siz nima qilasiz?", opts: ["Ehtiyot bo'laman.", "Navbatga turaman.", "To'layman.", "Kirmayman."], a: 0, why: "**Wet floor** — pol ho'l, ehtiyot bo'ling." },
    { k: 'choice', q: "Do'stingiz charchagan. Qaysi maslahat to'g'ri?", opts: ["You should rest.", "You should to rest.", "You shoulds rest.", "You rest should."], a: 0, why: "**should + V1**." },
    { k: 'fill', q: "You ___ go for a walk after work. (yumshoq maslahat)", a: ['could', 'should'], uz: "Ishdan keyin sayr qilishingiz mumkin.", why: "Yumshoq maslahat — **could**." },
    { k: 'tf', q: "**Staff only** belgisi hamma kirishi mumkin degani.", a: false, why: "Faqat xodimlar uchun." },
    { k: 'fix', wrong: "You mustn't to eat here.", a: ["You mustn't eat here."], why: "**mustn't** dan keyin **to** yo'q." },
    { k: 'order', uz: "Kechasi xatlarga javob berishingiz shart emas.", words: ['You', "don't", 'have', 'to', 'reply', 'at', 'night.'], extra: ["mustn't", 'must'], alt: [['You', "don't", 'have', 'to', 'reply', 'to', 'emails', 'at', 'night.']] },
    { k: 'translate', uz: "Boshqa kitobxonlarga hurmatli bo'ling.", a: ['Please be polite to other readers.', 'Be polite to other readers.', 'Please be polite to the other readers.', 'Be polite to the other readers.'] },
    { k: 'listen', say: "I think you should talk to your teacher.", opts: ["I think you should talk to your teacher.", "I think you shouldn't talk to your teacher.", "I think you must talk to your teacher."], a: 0 },
  ],
  summary: [
    "Belgilar qisqa: **No entry** = *You mustn't go in.* **Free entry** = *You don't have to pay.* **Staff only** = faqat xodimlar.",
    "Maslahat xati: salom va hamdardlik, **I think you should…**, **You could also…**, **You shouldn't…**, yakun.",
    "Hamma modal fe'ldan keyin **to yo'q**: *You should rest, You could ask, You mustn't give up.*",
    "Yangi so'zlar: **notice, no entry, wet floor, staff only, reply**.",
  ],
  homework: "Do'stingiz \"I can't wake up early\" deb yozdi. Unga 4–6 gapli maslahat xati yozing (**should**, **shouldn't**, **could** ishlating). Keyin ovoz chiqarib o'qing.",
};

export default lesson;
