import type { Lesson } from '../../../types';

// Mini lesson (grammar): mustn't or don't have to? Builds on l1 (must, have to, mustn't, don't have to) with past forms and needn't.
const lesson: Lesson = {
  id: 'u15-l12',
  title: "Must not or do not have to?",
  titleUz: "Mustn't yoki don't have to? Farqini bilish",
  mini: true,
  kind: 'grammar',
  goal: "**Mustn't** (taqiq) bilan **don't have to** (shart emas) ni adashtirmaysiz, o'tgan zamonda **had to / didn't have to** dan foydalanasiz, **needn't** ni bilasiz va qoidalar hamda belgilarni to'g'ri tushuntirasiz.",
  slides: [
    {
      title: "Ikkita inkor, ikkita butunlay boshqa ma'no",
      blocks: [
        { t: 'p', md: "O'zbek tilida ikkalasini ham \"bo'lmaydi\" deb tarjima qilish mumkin, shuning uchun adashish oson. Inglizchada esa farq juda katta:" },
        { t: 'table', head: ['Shakl', "Ma'nosi", 'Misol'], speak: [2], rows: [
          ["**mustn't** + V1", "Taqiqlangan, **qilib bo'lmaydi**", "You mustn't park here."],
          ["**don't / doesn't have to** + V1", "**Shart emas**, xohlasangiz qilasiz", "You don't have to park here."],
        ] },
        { t: 'table', head: ["Taqiq (mustn't)", "Shart emas (don't have to)"], speak: [0, 1], rows: [
          ["You mustn't smoke in the hospital.", "You don't have to wear a tie."],
          ["Children mustn't touch the machine.", "She doesn't have to cook today."],
          ["We mustn't be late for the exam.", "We don't have to pay for parking."],
        ] },
        { t: 'tip', tone: 'info', md: "Tez sinov: o'zingizdan so'rang — **\"Qilsam, muammo bo'ladimi?\"** Ha bo'lsa — **mustn't**. Yo'q, qilsam ham, qilmasam ham mayli bo'lsa — **don't have to**." },
        { t: 'check', ex: { k: 'choice', q: "Belgi: **No entry**. Bu yerga kirish taqiqlangan.", opts: ["You don't have to enter.", "You mustn't enter.", "You doesn't have to enter.", "You haven't to enter."], a: 1, why: "Taqiq — **mustn't**." } },
      ],
    },
    {
      title: "Qoidalar va belgilar: qaysi biri?",
      blocks: [
        { t: 'p', md: "Belgilar va e'lonlarda ikkala shakl ham uchraydi. Ma'noga qarab tanlang:" },
        { t: 'examples', items: [
          { en: 'You mustn\'t use your phone during the exam.', uz: "Imtihon paytida telefondan foydalanish mumkin emas.", note: "Taqiq: qilsangiz, jazo bor." },
          { en: "You don't have to bring a pen. We have pens.", uz: "Ruchka olib kelishingiz shart emas. Bizda ruchka bor.", note: "Xohlasangiz olib kelasiz." },
          { en: "Dogs mustn't enter the shop.", uz: "Do'konga itlar kirishi mumkin emas." },
          { en: "Entry is free. You don't have to buy a ticket.", uz: "Kirish bepul. Chipta olishingiz shart emas." },
          { en: "Students mustn't leave bags in the corridor.", uz: "Talabalar yo'lakda sumka qoldirmasligi kerak." },
        ] },
        { t: 'table', head: ['Belgi', "Gap"], speak: [1], rows: [
          ['No smoking', "You mustn't smoke here."],
          ['Free entry', "You don't have to pay."],
          ['Wear a seat belt', "You have to wear a seat belt."],
          ['Open until midnight', "You don't have to hurry."],
        ] },
        { t: 'check', ex: { k: 'fill', q: "It's free! You ___ have to pay.", a: ["don't", "do not"], uz: "Bepul! To'lashingiz shart emas.", why: "Shart emas — **don't have to**." } },
        { t: 'check', ex: { k: 'fill', q: "You ___ talk loudly in the library.", a: ["mustn't", "must not"], uz: "Kutubxonada baland ovozda gapirish mumkin emas.", why: "Taqiq — **mustn't**." } },
      ],
    },
    {
      title: "O'tgan zamon: had to va didn't have to",
      blocks: [
        { t: 'p', md: "**must** ning o'tgan zamoni yo'q, shuning uchun o'tmishda majburiyat uchun **had to**, \"shart emas edi\" uchun **didn't have to** ishlatamiz. Savol va inkorda **did** bor, shuning uchun keyin **have to** (had emas!)." },
        { t: 'table', head: ['Shakl', 'Misol'], speak: [1], rows: [
          ["+ **had to** + V1", "I had to get up at five yesterday."],
          ["− **didn't have to** + V1", "We didn't have to pay for the tickets."],
          ["? **Did** … **have to** + V1?", "Did you have to wait long?"],
          ["Qisqa javob", "Yes, I did. / No, I didn't."],
        ] },
        { t: 'compare', good: { title: "To'g'ri", items: ["Did you have to work on Sunday?", "She didn't have to come.", "I had to wait for a bus."] }, bad: { title: "Xato", items: ["Did you had to work on Sunday?", "She didn't had to come.", "I musted wait for a bus."] } },
        { t: 'tip', tone: 'warn', md: "**Didn't have to** — \"shart emas edi (lekin xohlasa, qilishi mumkin edi)\". U **mustn't** ning o'tgan zamoni emas. Taqiq haqida o'tmishda: *We weren't allowed to take photos.*" },
        { t: 'check', ex: { k: 'choice', q: "Kecha dars bekor bo'ldi. Biz maktabga ___.", opts: ["didn't have to go", "didn't had to go", "mustn't went", "don't have to go"], a: 0, why: "O'tgan zamon, shart emas — **didn't have to** + V1." } },
      ],
    },
    {
      title: "Needn't: yana bir \"shart emas\"",
      blocks: [
        { t: 'p', md: "**needn't** (= need not) ham \"shart emas\" ma'nosini beradi, ayniqsa Britaniya ingliz tilida. U modal fe'l: **to yo'q**, **-s yo'q**, keyin fe'lning 1-shakli. Bu mavzuni 7-darsda batafsil ko'rasiz, hozir faqat ma'nosini biling." },
        { t: 'table', head: ['Gap', 'Ma\'nosi'], speak: [0], rows: [
          ["You needn't come.", "Kelishingiz shart emas."],
          ["She needn't worry.", "U xavotir olishi shart emas."],
          ["You don't have to come.", "Kelishingiz shart emas. (bir xil ma'no)"],
        ] },
        { t: 'compare', good: { title: "To'g'ri", items: ["You needn't wait.", "He needn't pay.", "We needn't hurry."] }, bad: { title: "Xato", items: ["You needn't to wait.", "He needn't pays.", "We needn't to hurry."] } },
        { t: 'tip', tone: 'warn', md: "**Needn't** va **mustn't** ni ham adashtirmang: *You needn't wait* (kutishingiz shart emas) va *You mustn't wait* (kutish mumkin emas)." },
        { t: 'check', ex: { k: 'choice', q: "\"Kutishingiz shart emas.\" — qaysi gap to'g'ri?", opts: ["You needn't to wait.", "You needn't wait.", "You needn't waiting.", "You not need wait."], a: 1, why: "**needn't + V1**, to yo'q." } },
      ],
    },
    {
      title: "Dialog: muzeyda",
      blocks: [
        { t: 'dialog', lines: [
          { who: 'Kate', en: "Excuse me, can I take photos in the museum?", uz: "Kechirasiz, muzeyda rasmga olsam bo'ladimi?" },
          { who: 'Ali', en: "Yes, you can, but you mustn't use a flash.", uz: "Ha, mumkin, lekin blits ishlatish mumkin emas." },
          { who: 'Kate', en: "OK. Do I have to buy a ticket?", uz: "Mayli. Chipta olishim kerakmi?" },
          { who: 'Ali', en: "Not today. Entry is free on Sundays, so you don't have to pay.", uz: "Bugun yo'q. Yakshanba kunlari kirish bepul, shuning uchun to'lashingiz shart emas." },
          { who: 'Kate', en: "Great! Last week I had to pay ten pounds at another museum.", uz: "Zo'r! O'tgan hafta boshqa muzeyda o'n funt to'lashimga to'g'ri keldi." },
          { who: 'Ali', en: "Here you needn't. But you have to leave your big bag at the door.", uz: "Bu yerda shart emas. Lekin katta sumkangizni eshik oldida qoldirishingiz kerak." },
        ] },
        { t: 'check', ex: { k: 'tf', q: "Kate must pay today.", a: false, why: "*Entry is free on Sundays, so you don't have to pay.*" } },
        { t: 'check', ex: { k: 'choice', q: "What mustn't Kate use in the museum?", opts: ['A camera', 'A flash', 'A ticket', 'A bag'], a: 1, why: "*You mustn't use a flash.*" } },
      ],
    },
  ],
  words: [
    { en: 'optional', uz: 'ixtiyoriy', ipa: 'ˈɒp.ʃən.əl', pos: 'adj', ex: 'The trip is optional. You don\'t have to come.', exUz: "Sayohat ixtiyoriy. Kelishingiz shart emas." },
    { en: 'ban', uz: 'taqiqlamoq; taqiq', ipa: 'bæn', pos: 'verb / noun', ex: 'There is a ban on smoking here.', exUz: "Bu yerda chekishga taqiq bor." },
    { en: 'enter', uz: 'kirmoq', ipa: 'ˈen.tə', pos: 'verb', ex: 'You mustn\'t enter this room.', exUz: "Bu xonaga kirish mumkin emas." },
    { en: 'in advance', uz: 'oldindan', ipa: 'ɪn ədˈvɑːns', pos: 'phrase', ex: 'You have to book a table in advance.', exUz: "Stolni oldindan band qilishingiz kerak." },
    { en: 'unnecessary', uz: 'keraksiz', ipa: 'ʌnˈnes.ə.ser.i', pos: 'adj', ex: 'It is unnecessary to bring food.', exUz: "Ovqat olib kelish keraksiz." },
  ],
  practice: [
    { k: 'choice', q: "You ___ park here. It's forbidden.", opts: ["mustn't", "don't have to", "doesn't have to", "needn't to"], a: 0, why: "Taqiq — **mustn't**." },
    { k: 'choice', q: "It's Sunday. I ___ get up early.", opts: ["mustn't", "don't have to", "must", "have"], a: 1, why: "Shart emas — **don't have to**." },
    { k: 'fill', q: "Tickets are free. You ___ have to buy one.", a: ["don't", "do not"], uz: "Chiptalar bepul. Sotib olishingiz shart emas.", why: "**don't have to** — shart emas." },
    { k: 'fill', q: "Visitors ___ touch the pictures. (taqiq)", a: ["mustn't", "must not"], uz: "Tashrif buyuruvchilar rasmlarga tegmasligi kerak.", why: "Taqiq — **mustn't**." },
    { k: 'tf', q: "**You don't have to enter** va **You mustn't enter** bir xil ma'noni beradi.", a: false, why: "Birinchisi — shart emas, ikkinchisi — taqiq." },
    { k: 'order', uz: "Biz kecha kutishimizga to'g'ri keldi.", words: ['We', 'had', 'to', 'wait', 'yesterday.'], extra: ['must', 'have'], alt: [['Yesterday', 'we', 'had', 'to', 'wait.']] },
    { k: 'order', uz: "U pul to'lashi shart emas edi.", words: ["She", "didn't", "have", "to", "pay."], extra: ["hadn't", "mustn't"] },
    { k: 'fix', wrong: "Did you had to wait for a long time?", a: ["Did you have to wait for a long time?"], why: "**Did** dan keyin **have to**." },
    { k: 'fix', wrong: "You needn't to come early.", a: ["You needn't come early."], why: "**needn't** dan keyin **to** yo'q." },
    { k: 'listen', say: "You mustn't use a flash.", opts: ["You mustn't use a flash.", "You don't have to use a flash.", "You must use a flash."], a: 0 },
    { k: 'dictation', say: "You don't have to pay today.", a: ["You don't have to pay today.", "You do not have to pay today."], uz: "Bugun to'lashingiz shart emas." },
    { k: 'translate', uz: "Bu yerda chekish mumkin emas.", a: ["You mustn't smoke here.", "You must not smoke here."], why: "Taqiq — **mustn't**." },
    { k: 'speak', say: "You mustn't park here, but you don't have to pay.", uz: "Bu yerga mashina qo'yish mumkin emas, lekin to'lashingiz shart emas." },
  ],
  quiz: [
    { k: 'choice', q: "Passengers ___ cross the track. It is dangerous.", opts: ["mustn't", "don't have to", "needn't", "didn't have to"], a: 0, why: "Xavfli — taqiq, **mustn't**." },
    { k: 'choice', q: "The meeting is optional. We ___ come.", opts: ["mustn't", "don't have to", "must", "has to"], a: 1, why: "Ixtiyoriy, demak shart emas — **don't have to**." },
    { k: 'fill', q: "Last year I ___ to wear a uniform. (kerak edi)", a: ["had"], why: "O'tgan zamon — **had to**." },
    { k: 'fill', q: "Did she ___ to wait for the doctor?", a: ["have"], why: "**Did** + ... + **have to**." },
    { k: 'tf', q: "**She didn't have to come** — u kelishi shart emas edi.", a: true, why: "**didn't have to** — shart emas edi." },
    { k: 'fix', wrong: "Children mustn't to run here.", a: ["Children mustn't run here."], why: "**mustn't** dan keyin **to** yo'q." },
    { k: 'order', uz: "Bizga oldindan to'lashimiz shart emas.", words: ['We', "don't", 'have', 'to', 'pay', 'in', 'advance.'], extra: ["mustn't", 'has'] },
    { k: 'translate', uz: "Kelishingiz shart emas.", a: ["You don't have to come.", "You needn't come.", "You do not have to come.", "You need not come."], why: "**don't have to** yoki **needn't**." },
  ],
  summary: [
    "**mustn't** = taqiq (qilib bo'lmaydi). **don't have to / needn't** = shart emas (xohlasangiz qilasiz).",
    "Tez sinov: qilsam muammo bo'ladimi? Ha — **mustn't**. Yo'q — **don't have to**.",
    "O'tgan zamon: **had to** (kerak edi), **didn't have to** (shart emas edi), **Did … have to …?**",
    "**needn't** + V1 (to yo'q): *You needn't wait.* Yangi so'zlar: **optional, ban, enter, in advance, unnecessary**.",
  ],
  homework: "Uyingizdagi yoki ishingizdagi 3 ta taqiqni (**mustn't**) va 3 ta \"shart emas\"ni (**don't have to**) inglizcha yozing. Keyin kecha nimaga **had to** va nimaga **didn't have to** ekaningizni yozing.",
};

export default lesson;
