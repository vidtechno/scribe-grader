import type { Lesson } from '../../../types';

// Mini lesson (grammar): Can I...? for requests and permission, and how to answer.
const lesson: Lesson = {
  id: 'u4-l14',
  title: 'Can I…? Requests and permission',
  titleUz: "Can I…? Iltimos va ruxsat so'rash",
  mini: true,
  goal: "**Can I…?** bilan muloyim iltimos qilasiz (*Can I have a glass of water?*) va ruxsat so'raysiz (*Can I open the window?*), javobni ham tushunasiz va o'zingiz berasiz: *Yes, of course. / Sorry, you can't.*",
  slides: [
    {
      title: 'Can I…? — ikki vazifa',
      blocks: [
        { t: 'p', md: "**Can I + fe'l…?** gapni ikki maqsadda ishlatamiz:\n• **iltimos**: biror narsani so'rash — *Can I have a pen, please?* (Ruchka bersangiz.)\n• **ruxsat**: biror ishni qilish mumkinligini so'rash — *Can I open the window?* (Derazani ochsam bo'ladimi?)" },
        { t: 'examples', items: [
          { en: 'Can I have a glass of water, please?', uz: 'Bir stakan suv bersangiz, iltimos?' },
          { en: 'Can I sit here?', uz: "Shu yerga o'tirsam bo'ladimi?" },
          { en: 'Can I use your phone?', uz: 'Telefoningizdan foydalansam bo‘ladimi?' },
          { en: 'Can I borrow your pen?', uz: 'Ruchkangizni olib tursam bo‘ladimi?' },
        ] },
        { t: 'tip', tone: 'info', md: "Farqi: **Can I…?** — *men* nima qilsam bo'ladi? **Can you…?** — *siz* qila olasizmi? (o'tgan darsdagi qobiliyat/iltimos). Bu darsda faqat **Can I…?**." },
        { t: 'check', ex: { k: 'choice', q: 'Siz kafedasiz. Choy so‘raysiz:', opts: ['Can I have a cup of tea, please?', 'Can I to have a cup of tea?', 'I can have tea, please?', 'Can have I tea?'], a: 0, why: "**Can I + have** + narsa." } },
      ],
    },
    {
      title: 'Javob berish',
      blocks: [
        { t: 'p', md: "Ruxsat bersangiz — qisqa va iliq javob. Rad etsangiz — avval **Sorry** deng, sababini ayting." },
        { t: 'table', head: ['Ha', "Yo'q"], speak: [0, 1], rows: [
          ['Yes, of course.', "Sorry, you can't."],
          ['Sure. / Yes, sure.', "Sorry, you can't. It's closed."],
          ['Yes, you can.', "Sorry, I need it now."],
          ['Yes, here you are.', "No, sorry. It's broken."],
        ] },
        { t: 'dialog', lines: [
          { who: 'Aziz', en: 'Excuse me. Can I open the window? It is hot.', uz: "Kechirasiz. Derazani ochsam bo'ladimi? Issiq." },
          { who: 'Lola', en: 'Yes, of course.', uz: "Ha, albatta." },
          { who: 'Aziz', en: 'Thanks! Can I use your phone? Mine is dead.', uz: "Rahmat! Telefoningizdan foydalansam bo'ladimi? Meniki o'chib qoldi." },
          { who: 'Lola', en: "Sorry, you can't. I need it for work.", uz: "Kechirasiz, bo'lmaydi. Menga ish uchun kerak." },
        ] },
        { t: 'check', ex: { k: 'fill', q: "— Can I sit here?  — Sorry, you ___. It's my seat.", a: ["can't", 'cannot', "can not"], uz: "Bu yerga o'tirsam bo'ladimi? — Kechirasiz, bo'lmaydi. Bu mening joyim.", why: "Rad etish: *Sorry, you **can't**.*" } },
      ],
    },
    {
      title: 'Tez-tez uchraydigan xatolar',
      blocks: [
        { t: 'compare',
          good: { title: "To'g'ri", items: ['Can I open the window?', 'Can I have some water?', 'Yes, you can.', "Sorry, you can't."] },
          bad: { title: "Noto'g'ri", items: ['Can I to open the window?', 'Can I opens the window?', 'Do I can open the window?', 'Yes, I can. (ruxsat berayotganda)'] } },
        { t: 'p', md: "Eslatma: ruxsat so'ragan odamga **you** deb javob beramiz: *Can I sit here? — Yes, **you** can.* Chunki ruxsat beruvchi siz, ruxsat oluvchi u." },
        { t: 'tip', tone: 'warn', md: "**Can I** dan keyin **to** yo'q va fe'lga **-s** qo'shilmaydi. Savolda **Do** kerak emas: *Can I go?* — *Do I can go?* ❌" },
        { t: 'check', ex: { k: 'fix', wrong: 'Can I to use your pen?', a: ['Can I use your pen?'], why: "**Can I** dan keyin *to* qo'yilmaydi." } },
      ],
    },
  ],
  words: [
    { en: 'borrow', uz: 'vaqtincha olmoq', ipa: 'ˈbɒr.əʊ', pos: 'verb', ex: 'Can I borrow your pen?', exUz: 'Ruchkangizni olib tursam bo‘ladimi?' },
    { en: 'lend', uz: 'vaqtincha bermoq', ipa: 'lend', pos: 'verb', ex: 'Can you lend me a pencil?', exUz: 'Menga qalam bera olasizmi?' },
    { en: 'use', uz: 'ishlatmoq, foydalanmoq', ipa: 'juːz', pos: 'verb', ex: 'Can I use your phone?', exUz: 'Telefoningizdan foydalansam bo‘ladimi?' },
    { en: 'close', uz: 'yopmoq', ipa: 'kləʊz', pos: 'verb', ex: 'Can I close the door?', exUz: 'Eshikni yopsam bo‘ladimi?' },
    { en: 'toilet', uz: 'hojatxona', ipa: 'ˈtɔɪ.lət', pos: 'noun', ex: 'Can I go to the toilet?', exUz: 'Hojatxonaga chiqsam bo‘ladimi?' },
    { en: 'of course', uz: 'albatta', ipa: 'əv ˈkɔːs', pos: 'phrase', ex: 'Yes, of course.', exUz: 'Ha, albatta.' },
  ],
  practice: [
    { k: 'choice', q: 'Ruxsat so‘rang: ___ open the window?', opts: ['Can I', 'Do I can', 'I can', 'Can I to'], a: 0, why: "**Can I + fe'l**." },
    { k: 'choice', q: '— Can I borrow your book?  — ___', opts: ['Yes, of course. Here you are.', 'Yes, I borrow.', 'I can borrow.', 'Borrow you.'], a: 0 },
    { k: 'choice', q: '— Can I sit here?  — ___', opts: ["Sorry, you can't. It's Ali's seat.", "Sorry, I can't sit.", 'Yes, I do.', 'Sit I.'], a: 0, why: "Ruxsat savoliga **you** bilan javob." },
    { k: 'fill', q: 'Can I ___ a glass of water, please?', a: ['have', 'get'], uz: 'Bir stakan suv bersangiz.', why: "Iltimos: *Can I **have**…?*" },
    { k: 'fill', q: 'Can I ___ your phone? Mine is dead.', a: ['use', 'borrow'], uz: 'Telefoningizdan foydalansam bo‘ladimi?' },
    { k: 'order', uz: 'Derazani ochsam bo‘ladimi?', words: ['Can', 'I', 'open', 'the', 'window'], extra: ['to', 'opens'] },
    { k: 'order', uz: 'Shu yerga o‘tirsam bo‘ladimi?', words: ['Can', 'I', 'sit', 'here'], extra: ['do', 'to'] },
    { k: 'translate', uz: 'Menga ruchka bersangiz, iltimos?', a: ['Can I have a pen, please?', 'Can I have a pen?', 'Please, can I have a pen?'], why: "**Can I have…, please?**" },
    { k: 'translate', uz: 'Kechirasiz, bo‘lmaydi.', a: ["Sorry, you can't.", 'Sorry, you cannot.', "Sorry, you can't."], why: "**Sorry, you can't.**" },
    { k: 'fix', wrong: 'Can I opens the door?', a: ['Can I open the door?'], why: "**Can I** dan keyin fe'l o'zgarmaydi." },
    { k: 'fix', wrong: 'Do I can close the window?', a: ['Can I close the window?'], why: "Savolda **Can** oldinga chiqadi, **Do** kerak emas." },
    { k: 'listen', say: 'Can I borrow your pen?', opts: ['Can I borrow your pen?', 'Can you borrow my pen?', 'Can I lend your pen?', 'Can I have your pen?'], a: 0 },
    { k: 'speak', say: 'Can I have a glass of water, please?', uz: 'Muloyim iltimos qiling' },
  ],
  quiz: [
    { k: 'choice', q: 'Choose the correct request:', opts: ['Can I use your pencil?', 'Can I to use your pencil?', 'Do I can use your pencil?', 'I can use your pencil?'], a: 0 },
    { k: 'choice', q: '— Can I close the door?  — ___', opts: ['Yes, of course.', 'Yes, I can close.', 'Close I can.', 'I closes.'], a: 0 },
    { k: 'fill', q: '— Can I go to the toilet?  — Yes, you ___.', a: ['can'], uz: 'Hojatxonaga chiqsam bo‘ladimi? — Ha, bo‘ladi.' },
    { k: 'order', uz: 'Qalamingizni olib tursam bo‘ladimi?', words: ['Can', 'I', 'borrow', 'your', 'pencil'], extra: ['to', 'borrows'] },
    { k: 'translate', uz: 'Telefoningizdan foydalansam bo‘ladimi?', a: ['Can I use your phone?'] },
    { k: 'fix', wrong: 'Can I to have some tea?', a: ['Can I have some tea?'], why: "*to* kerak emas." },
    { k: 'tf', q: "*Can I sit here?* — Rad etishda *Sorry, you can't.* deymiz.", a: true },
    { k: 'tf', q: "*Can I open the window? — Yes, I can.* (ruxsat berish uchun)", a: false, why: "Ruxsat berayotganda: *Yes, **you** can.*" },
  ],
  summary: [
    "**Can I + fe'l (to'siz)…?** — iltimos (*Can I have…?*) va ruxsat (*Can I open…?*).",
    "Ha: **Yes, of course. / Sure. / Yes, you can.** Yo'q: **Sorry, you can't.** + sabab.",
    "*Can I to…*, *Can I opens…*, *Do I can…* — xato.",
    "Yangi so'zlar: **borrow, lend, use, close, toilet, of course**.",
  ],
  homework: "Sinfda yoki uyda 4 marta inglizcha ruxsat so'rang (ichingizda): *Can I open the window? Can I have some water?* Har biriga ham javob toping.",
};

export default lesson;
