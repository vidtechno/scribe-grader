import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: 'u4-l5',
  title: "can / can't",
  titleUz: "can / can't: qobiliyat va iltimos",
  goal: "**can / can't** yordamida nima qila olishingizni va qila olmasligingizni aytasiz, ruxsat va iltimos so'raysiz (*Can I…? Can you…?*) hamda *can* va *can't* ni quloq bilan ajratasiz.",
  slides: [
    {
      title: "can — \"qila olaman\"",
      blocks: [
        { t: 'p', md: "O'zbekchada qobiliyatni fe'lga **-a olmoq** qo'shib aytamiz: *suza olaman, hayday olaman*. Ingliz tilida buning uchun bitta kichik so'z bor: **can**." },
        { t: 'p', md: "**can + fe'lning asosiy shakli**:\n• *I **can swim**.* — Men suza olaman.\n• *She **can drive**.* — U mashina hayday oladi.\n• *I **can't dance**.* — Men raqsga tusha olmayman." },
        { t: 'tip', tone: 'good', md: "Yaxshi xabar: **can** hamma shaxs uchun **bir xil**! *he/she/it* da ham **-s yo'q**, **do/does** ham kerak emas. Present Simple'dan ancha oson." },
        {
          t: 'examples', items: [
            { en: 'I can cook plov.', uz: 'Men palov pishira olaman.' },
            { en: 'My friend can ride a horse.', uz: "Do'stim ot mina oladi." },
            { en: "Cats can climb, but they can't swim well.", uz: "Mushuklar daraxtga chiqa oladi, lekin yaxshi suza olmaydi." },
          ],
        },
      ],
    },
    {
      title: 'Shakllar: +, –, ?',
      blocks: [
        {
          t: 'table', head: ['', 'Shakl', 'Misol'], speak: [2],
          rows: [
            ['Ijobiy (+)', "ega + can + fe'l", 'He can swim.'],
            ['Inkor (–)', "ega + can't / cannot + fe'l", "He can't swim."],
            ['Savol (?)', "Can + ega + fe'l?", 'Can he swim?'],
            ['Qisqa javob', "Yes, … can. / No, … can't.", "Yes, he can. / No, he can't."],
          ],
        },
        { t: 'p', md: "**cannot** — bitta so'z qilib yoziladi. Og'zaki nutqda va yozishmalarda odatda **can't** ishlatiladi." },
        {
          t: 'compare',
          good: { title: "To'g'ri", items: ['She can drive.', 'I can swim.', 'Can you dance?', "I can't ski."] },
          bad: { title: "Noto'g'ri", items: ['She cans drive. / She can drives.', 'I can to swim.', 'Do you can dance?', "I don't can ski."] },
        },
        { t: 'tip', tone: 'warn', md: "**can** dan keyin **to** qo'yilmaydi: *I can **to** swim* ❌. Va *can* o'zi savol hosil qiladi — *Do you can…?* ❌" },
        { t: 'check', ex: { k: 'choice', q: "To'g'ri gapni tanlang:", opts: ['My sister can to draw.', 'My sister cans draw.', 'My sister can draw.', 'My sister can draws.'], a: 2, why: "**can + fe'l** — *to* yo'q, *-s* yo'q." } },
        { t: 'check', ex: { k: 'fill', q: "___ you ride a bike? — Yes, I can.", a: ['can'], uz: 'Velosiped hayday olasizmi?', why: "Savolda **Can** oldinga chiqadi." } },
      ],
    },
    {
      title: "Talaffuz: can yoki can't?",
      blocks: [
        { t: 'p', md: "Inglizlar ko'pincha *can't* dagi **t** ni deyarli aytmaydi. Shuning uchun **unli tovushga** quloq soling — bu eng muhim farq!" },
        {
          t: 'sounds', items: [
            { label: 'can (gapda)', say: 'I can swim.', uz: "Ijobiy gapda **can** juda qisqa va kuchsiz: **\"kən\"** (\"kn\"). Urg'u fe'lga tushadi: *I kn SWIM*.", examples: ['I can swim.', 'She can cook.'] },
            { label: 'can (javobda)', say: 'Yes, I can.', uz: "Qisqa javobda va urg'u bilan — to'liq **\"kæn\"** (a va e orasidagi tovush).", examples: ['Yes, I can.', 'Yes, we can.'] },
            { label: "can't", say: "I can't swim.", uz: "**\"ka:nt\"** — uzun, ochiq **\"a:\"** (o'zbekcha \"a\" ni cho'zib). Urg'u *can't* ga ham tushadi: *I KA:NT SWIM*.", examples: ["I can't swim.", "No, I can't."] },
          ],
        },
        { t: 'tip', tone: 'info', md: "Qoida: qisqa **\"kn\"** eshitsangiz — **can**. Uzun **\"ka:n(t)\"** eshitsangiz — **can't**." },
        { t: 'check', ex: { k: 'listen', say: "He can't drive.", opts: ['He can drive.', "He can't drive.", 'He can dance.', "He can't dance."], a: 1, why: "Uzun **\"ka:nt\"** → *can't*. Fe'l: **drive**." } },
      ],
    },
    {
      title: 'Qanchalik yaxshi? well, a little, at all',
      blocks: [
        { t: 'p', md: "Qobiliyat darajasini gap **oxirida** aytamiz:\n• *I can swim **very well**.* — juda yaxshi\n• *I can swim **well**.* — yaxshi\n• *I can swim **a little**.* — ozgina\n• *I can't swim **at all**.* — umuman" },
        { t: 'p', md: "Wh-savollar bilan ham ishlaydi (1-dars):\n• ***What** can you do?* — Nima qila olasiz?\n• ***Who** can drive?* — Kim hayday oladi?\n• ***How many** languages can you speak?* — Nechta tilda gapira olasiz?" },
        {
          t: 'compare',
          good: { title: "To'g'ri", items: ['I can dance very well.', "She can't cook at all."] },
          bad: { title: "Noto'g'ri", items: ['I can very well dance.', "She can't at all cook."] },
        },
        { t: 'check', ex: { k: 'order', uz: 'Men umuman chang\'ida ucha olmayman.', words: ['I', "can't", 'ski', 'at', 'all'], why: "Daraja so'zi gap oxirida: *I can't ski **at all**.*" } },
      ],
    },
    {
      title: 'Ruxsat va iltimos: Can I…? Can you…?',
      blocks: [
        { t: 'p', md: "**can** faqat qobiliyat emas:\n• **Can I…?** — ruxsat so'rash: *Can I open the window?* (Derazani ochsam bo'ladimi?)\n• **Can you…?** — iltimos qilish: *Can you help me, please?* (Yordam bera olasizmi?)\n• **You can / can't…** — ruxsat berish yoki taqiqlash: *You can't eat here.*" },
        {
          t: 'table', head: ['Savol', 'Ha', "Yo'q"], speak: [0, 1, 2],
          rows: [
            ['Can I sit here?', 'Yes, of course.', "Sorry, you can't."],
            ['Can you open the door, please?', 'Sure.', "Sorry, I can't."],
          ],
        },
        { t: 'tip', tone: 'good', md: "Iltimosga **please** qo'shing — bu ingliz tilida juda muhim: *Can you help me, **please**?*" },
        {
          t: 'dialog', lines: [
            { who: 'Ustoz', en: 'What can you do well, Nodir?', uz: 'Nodir, nimani yaxshi qila olasan?' },
            { who: 'Nodir', en: 'I can draw very well. And I can run fast.', uz: "Juda yaxshi rasm chiza olaman. Va tez yugura olaman." },
            { who: 'Ustoz', en: 'Can you swim?', uz: 'Suza olasanmi?' },
            { who: 'Nodir', en: "No, I can't. But I can ride a horse.", uz: "Yo'q. Lekin ot mina olaman." },
            { who: 'Nodir', en: 'Can I open the window, please?', uz: 'Derazani ochsam maylimi?' },
            { who: 'Ustoz', en: 'Yes, of course.', uz: 'Ha, albatta.' },
          ],
        },
        { t: 'check', ex: { k: 'choice', q: "Ruxsat so'rang: \"Bu yerga o'tirsam bo'ladimi?\"", opts: ['Can you sit here?', 'Can I sit here?', 'Do I can sit here?', 'I can sit here?'], a: 1, why: "Ruxsat → **Can I…?**" } },
      ],
    },
  ],
  words: [
    { en: 'swim', uz: 'suzmoq', ipa: 'swɪm', pos: 'verb', ex: 'Can you swim?', exUz: 'Suza olasizmi?' },
    { en: 'run', uz: 'yugurmoq', ipa: 'rʌn', pos: 'verb', ex: 'He can run very fast.', exUz: 'U juda tez yugura oladi.' },
    { en: 'jump', uz: 'sakramoq', ipa: 'dʒʌmp', pos: 'verb', ex: 'Cats can jump well.', exUz: 'Mushuklar yaxshi sakray oladi.' },
    { en: 'drive', uz: '(mashina) haydamoq', ipa: 'draɪv', pos: 'verb', ex: "My friend can't drive.", exUz: "Do'stim mashina hayday olmaydi." },
    { en: 'ride', uz: '(ot, velosiped) minmoq', ipa: 'raɪd', pos: 'verb', ex: 'I can ride a bike.', exUz: 'Men velosiped hayday olaman.' },
    { en: 'climb', uz: "tirmashib chiqmoq", ipa: 'klaɪm', pos: 'verb', ex: 'Can he climb a tree?', exUz: 'U daraxtga chiqa oladimi?' },
    { en: 'cook', uz: 'ovqat pishirmoq', ipa: 'kʊk', pos: 'verb', ex: 'I can cook plov.', exUz: 'Men palov pishira olaman.' },
    { en: 'dance', uz: 'raqsga tushmoq', ipa: 'dɑːns', pos: 'verb', ex: 'She can dance very well.', exUz: 'U juda yaxshi raqsga tusha oladi.' },
    { en: 'draw', uz: 'rasm chizmoq', ipa: 'drɔː', pos: 'verb', ex: "I can't draw at all.", exUz: 'Men umuman rasm chiza olmayman.' },
    { en: 'ski', uz: "chang'ida uchmoq", ipa: 'skiː', pos: 'verb', ex: 'Can you ski?', exUz: "Chang'ida ucha olasizmi?" },
  ],
  practice: [
    { k: 'match', pairs: [['swim', 'suzmoq'], ['run', 'yugurmoq'], ['jump', 'sakramoq'], ['drive', 'haydamoq'], ['climb', 'tirmashib chiqmoq']] },
    { k: 'match', pairs: [['ride', 'minmoq'], ['cook', 'ovqat pishirmoq'], ['dance', 'raqsga tushmoq'], ['draw', 'rasm chizmoq'], ['ski', "chang'ida uchmoq"]] },
    { k: 'listen', say: 'I can cook.', opts: ['I can cook.', "I can't cook.", 'I can climb.', "I can't climb."], a: 0, why: "Qisqa **\"kn\"** → *can*." },
    { k: 'listen', say: "She can't ski.", opts: ['She can ski.', 'She can swim.', "She can't swim.", "She can't ski."], a: 3, why: "Uzun **\"ka:nt\"** → *can't*; fe'l **ski**." },
    { k: 'choice', q: "To'g'ri savolni tanlang:", opts: ['Does he can drive?', 'Can he drive?', 'Can he drives?', 'He can drive?'], a: 1, why: "**Can + ega + fe'l?**" },
    { k: 'choice', q: "*Can you draw?* — qisqa inkor javob:", opts: ["No, I don't.", "No, I can't.", "No, I can't draw it.", 'No, I not can.'], a: 1, why: "**No, I can't.**" },
    { k: 'fill', q: 'My friend ___ run very fast. (+)', a: ['can'], why: "Ijobiy → **can** (-s yo'q)." },
    { k: 'fill', q: "Penguins ___ fly. (–)", a: ["can't", 'cannot', 'can not'], uz: 'Pingvinlar ucha olmaydi.', why: "Inkor → **can't / cannot**." },
    { k: 'fill', q: '___ I open the window?', a: ['can'], uz: 'Derazani ochsam bo\'ladimi?', why: "Ruxsat so'rash → **Can I…?**" },
    { k: 'tf', q: "*He can swims.* — to'g'ri gap.", a: false, why: "can dan keyin fe'l asosiy shaklda: **He can swim.**" },
    { k: 'tf', q: "Britancha talaffuzda *can't* da uzun **\"a:\"** eshitiladi.", a: true },
    { k: 'order', uz: 'U juda yaxshi raqsga tusha oladi.', words: ['She', 'can', 'dance', 'very', 'well'], extra: ['to'], why: "*to* kerak emas; daraja gap oxirida." },
    { k: 'order', uz: 'Yordam bera olasizmi, iltimos?', words: ['Can', 'you', 'help', 'me', 'please'], why: "Iltimos → **Can you…, please?**" },
    { k: 'translate', uz: 'Men suza olmayman.', a: ["I can't swim", 'I cannot swim', 'I can not swim'] },
    { k: 'translate', uz: 'U mashina hayday oladimi?', a: ['Can he drive', 'Can she drive', 'Can he drive a car', 'Can she drive a car'], why: "**Can he/she drive?**" },
    { k: 'speak', say: "I can swim, but I can't ski.", uz: "can va can't farqini aniq qilib ayting" },
  ],
  quiz: [
    { k: 'listen', say: "We can't dance.", opts: ['We can dance.', "We can't dance.", "We can't draw."], a: 1 },
    { k: 'listen', say: 'Can you ride a horse?', opts: ['Can you ride a horse?', 'Can you drive a car?', 'Can I ride a horse?', 'You can ride a horse.'], a: 0 },
    { k: 'choice', q: "Iltimos qiling: \"Eshikni ocha olasizmi?\"", opts: ['Can I open the door?', 'Can you open the door, please?', 'Do you can open the door?'], a: 1, why: "Iltimos → **Can you…, please?**" },
    { k: 'choice', q: "Qaysi gap noto'g'ri?", opts: ['She can climb.', 'Can they cook?', 'I can to jump.', "He can't drive."], a: 2, why: "*can* dan keyin *to* yo'q: **I can jump.**" },
    { k: 'fill', q: "Can your friend ski? — No, he ___.", a: ["can't", 'cannot', 'can not'] },
    { k: 'fill', q: 'What ___ you do well?', a: ['can'], uz: 'Nimani yaxshi qila olasiz?' },
    { k: 'order', uz: 'Men umuman rasm chiza olmayman.', words: ['I', "can't", 'draw', 'at', 'all'], extra: ["don't"] },
    { k: 'translate', uz: "Do'stim palov pishira oladi.", a: ['My friend can cook plov', 'My friend can make plov'] },
    { k: 'translate', uz: "Bu yerga o'tirsam bo'ladimi?", a: ['Can I sit here', 'Can I sit here, please', 'Can I sit here please'] },
    { k: 'translate', uz: 'U tez yugura oladi.', a: ['He can run fast', 'She can run fast', 'He can run quickly', 'She can run quickly'] },
  ],
  summary: [
    "**can + fe'l** — hamma shaxs uchun bir xil: *He can swim.* (-s yo'q, *to* yo'q).",
    "Inkor: **can't / cannot**; savol: **Can you…?** — *Yes, I can. / No, I can't.*",
    "Talaffuz: gapda qisqa **\"kən\"**, *can't* — uzun **\"ka:nt\"**.",
    "Daraja gap oxirida: **very well, well, a little, not … at all**.",
    "Ruxsat: **Can I…?** · Iltimos: **Can you…, please?**",
  ],
  homework: "O'zingiz haqingizda 5 ta *can* va 5 ta *can't* gap yozing (well / a little / at all bilan). Keyin oila a'zolaringizdan biri haqida 3 ta gap yozing va ularni ovoz chiqarib, can / can't farqini aniq qilib o'qing.",
};

export default lesson;
