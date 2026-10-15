import type { Lesson } from '../../../types';

// Mini lesson (grammar): I wish + Past Simple / could / were (present), I wish + Past Perfect (past regret); wish or hope.
// Builds on l1 (second conditional: the past form for an unreal present) and does not use later grammar of the unit.
const lesson: Lesson = {
  id: 'u20-l12',
  title: 'I wish… (present and past)',
  titleUz: "I wish…: hozirgi va o'tgan zamon orzu-pushaymonligi",
  mini: true,
  kind: 'grammar',
  goal: "**I wish** bilan hozirgi hayotingizdan norozilikni (*I wish I had more time.*) va o'tgan zamon pushaymonligini (*I wish I had studied harder.*) aytasiz, hamda **wish** bilan **hope** ni adashtirmaysiz.",
  slides: [
    {
      title: "I wish + Past Simple: hozirgi orzu",
      blocks: [
        { t: 'p', md: "Birinchi darsda xayoliy vaziyat uchun **if + Past Simple** ishlatdik. **I wish** ham xuddi shunday ishlaydi: hozirgi **haqiqat sizga yoqmaydi**, siz esa boshqacha bo'lishini istaysiz. Fe'l **Past Simple** shaklida turadi, lekin ma'nosi **hozirgi zamon**." },
        { t: 'table', head: ['Haqiqat (hozir)', 'Orzu'], speak: [1], rows: [
          ["I don't have a car.", 'I wish I had a car.'],
          ["I live in a small flat.", 'I wish I lived in a bigger flat.'],
          ["She works too much.", 'I wish she worked less.'],
          ["I can't play the guitar.", 'I wish I could play the guitar.'],
        ] },
        { t: 'examples', items: [
          { en: 'I wish I had more free time.', uz: "Kaskiydi, bo'sh vaqtim ko'proq bo'lsa.", note: "Hozir vaqt kam — **had** (Past Simple), ma'no esa hozirgi." },
          { en: 'I wish I could speak French.', uz: "Kaskiydi, fransuzcha gapira olsam.", note: "**can** o'rniga **could**." },
        ] },
        { t: 'tip', tone: 'info', md: "O'zbekchada bu **\"…edi\"** shakliga o'xshaydi: *Kaskiydi, mashinam bo'lsa.* Inglizchada esa fe'lni o'tgan zamon shaklida qo'yish kerak: *I wish I **had** a car.* (*I wish I have a car* ❌)." },
        { t: 'check', ex: { k: 'choice', q: "Menda mashina yo'q, lekin kaskiydi, bo'lsa.", opts: ['I wish I had a car.', 'I wish I have a car.', 'I wish I will have a car.', 'I wish I having a car.'], a: 0, why: "Hozirgi orzu: **wish + Past Simple** (*had*)." } },
      ],
    },
    {
      title: "Were va could",
      blocks: [
        { t: 'p', md: "**to be** fe'li bilan hamma shaxsda **were** ishlatish mumkin (rasmiy va to'g'ri shakl). Kundalik nutqda **I wish I was** ham eshitiladi, lekin **were** xavfsizroq." },
        { t: 'compare',
          good: { title: "To'g'ri", items: ['I wish I were taller.', 'I wish it were summer now.', 'I wish I could drive.', 'I wish we lived closer.'] },
          bad: { title: 'Xato', items: ['I wish I am taller.', 'I wish it is summer now.', 'I wish I can drive.', 'I wish we live closer.'] } },
        { t: 'tip', tone: 'warn', md: "**I wish** dan keyin hozirgi zamon (*am, is, can, live*) ishlatilmaydi. Doim bir qadam \"orqaga\": *am → were, can → could, live → lived, have → had*." },
        { t: 'check', ex: { k: 'fill', q: "I wish I ___ speak better English. (hozir qila olmayman)", a: ['could'], why: "**can** → **could**: *I wish I could…*" } },
        { t: 'check', ex: { k: 'fill', q: "I wish it ___ warmer today.", a: ['were', 'was'], uz: "Kaskiydi, bugun issiqroq bo'lsa.", why: "**to be** → **were** (yoki norasmiy *was*)." } },
      ],
    },
    {
      title: "I wish + Past Perfect: o'tgan zamon pushaymonligi",
      blocks: [
        { t: 'p', md: "O'tib ketgan ishdan pushaymon bo'lsangiz, **I wish + had + V3** deb aytasiz. Bu — o'tgan zamonga **bir qadam orqaga** yana bir qadam: Past Perfect." },
        { t: 'table', head: ["Nima bo'lgan", 'Pushaymonlik'], speak: [1], rows: [
          ["I didn't study enough.", 'I wish I had studied more.'],
          ["We missed the train.", 'I wish we had left earlier.'],
          ["He told her the secret.", "I wish he hadn't told her."],
          ["I spent all my money.", "I wish I hadn't spent it all."],
        ] },
        { t: 'examples', items: [
          { en: "I wish I had listened to my teacher.", uz: "Kaskiydi, ustozimning gapiga quloq solsam edi.", note: "Pushaymonlik o'tgan zamon ish haqida." },
          { en: "I wish I hadn't eaten so much.", uz: "Kaskiydi, shuncha ko'p yemasam edi.", note: "Inkor shakl: **hadn't + V3**." },
        ] },
        { t: 'tip', tone: 'warn', md: "*I wish I would have studied* ❌ — bunday deyilmaydi. To'g'ri: *I wish I **had** studied.* Yodda tuting: **wish** dan keyin **would have** yo'q." },
        { t: 'check', ex: { k: 'choice', q: "Kecha imtihonga tayyorlanmadim. Hozir pushaymonman.", opts: ['I wish I had studied.', 'I wish I studied.', 'I wish I would study.', 'I wish I have studied.'], a: 0, why: "O'tgan zamon pushaymonligi: **wish + had + V3**." } },
        { t: 'check', ex: { k: 'tf', q: "*I wish I lived in London.* — Men hozir Londonda yashayman.", a: false, why: "Bu hozirgi orzu: aslida Londonda yashamayman." } },
      ],
    },
    {
      title: "Wish yoki hope?",
      blocks: [
        { t: 'p', md: "Ikkalasi ham \"umid qilaman\" deb tarjima bo'lishi mumkin, lekin farqi katta:" },
        { t: 'table', head: ['', "Ma'nosi", 'Misol'], speak: [2], rows: [
          ['hope', "Haqiqatan bo'lishi mumkin bo'lgan narsa", "I hope you enjoy the trip."],
          ['wish', "Haqiqat emas yoki o'zgartirib bo'lmaydi", "I wish I could go with you."],
        ] },
        { t: 'tip', tone: 'info', md: "**hope** dan keyin oddiy zamon: *I hope it doesn't rain.* (yog'maydi deb umid qilaman — bu hali mumkin). **wish** dan keyin \"orqaga\" zamon: *I wish it weren't so cold.* (sovuq bor, o'zgartira olmayman)." },
        { t: 'check', ex: { k: 'choice', q: "Do'stingiz ertaga imtihon topshiradi. Siz:", opts: ["I hope you pass.", "I wish you passed.", "I hope you passed.", "I wish you will pass."], a: 0, why: "Hali bo'lishi mumkin bo'lgan ish → **hope**." } },
      ],
    },
    {
      title: "Dialog: Kaskiydi…",
      blocks: [
        { t: 'dialog', lines: [
          { who: 'Emma', en: "Tom, you look tired. What's wrong?", uz: "Tom, charchagan ko'rinasan. Nima bo'ldi?" },
          { who: 'Tom', en: "I wish I had more free time. I work every weekend.", uz: "Kaskiydi, bo'sh vaqtim ko'proq bo'lsa. Har dam olish kuni ishlayman." },
          { who: 'Emma', en: "I wish I could help. Why don't we have lunch together tomorrow?", uz: "Kaskiydi, yordam bera olsam. Ertaga birga tushlik qilsak-chi?" },
          { who: 'Tom', en: "Good idea. I wish I had called you earlier. We haven't talked for weeks.", uz: "Yaxshi fikr. Kaskiydi, senga oldinroq qo'ng'iroq qilsam edi. Bir necha haftadan beri gaplashmadik." },
          { who: 'Emma', en: "Don't worry. I hope you feel better soon.", uz: "Xavotir olma. Tezroq o'zingni yaxshi his qilishingni umid qilaman." },
        ] },
        { t: 'check', ex: { k: 'tf', q: "Tom has a lot of free time.", a: false, why: "*I wish I had more free time.* — vaqti kam." } },
        { t: 'check', ex: { k: 'choice', q: "Why does Tom wish he had called Emma earlier?", opts: ["They haven't talked for weeks.", 'He lost her number.', 'She was angry.', 'He was on holiday.'], a: 0, why: "*We haven't talked for weeks.*" } },
      ],
    },
  ],
  words: [
    { en: 'afford', uz: "(pul jihatidan) imkoni bo'lmoq", ipa: 'əˈfɔːd', pos: 'verb', ex: "I wish I could afford a bigger flat.", exUz: "Kaskiydi, kattaroq kvartiraga pulim yetsa." },
    { en: 'pity', uz: "afsus, achinarli hol", ipa: 'ˈpɪt.i', pos: 'noun', ex: "It's a pity you can't come.", exUz: "Kela olmasligingiz achinarli." },
    { en: 'lonely', uz: "yolg'iz, yolg'izlik his qilgan", ipa: 'ˈləʊn.li', pos: 'adj', ex: "She feels lonely in the new city.", exUz: "U yangi shaharda o'zini yolg'iz his qiladi." },
    { en: 'lucky', uz: "omadli", ipa: 'ˈlʌk.i', pos: 'adj', ex: "You are lucky to have such good friends.", exUz: "Shunday yaxshi do'stlaringiz borligi sizning omadingiz." },
    { en: 'abroad', uz: "chet elda, chet elga", ipa: 'əˈbrɔːd', pos: 'adv', ex: "I wish I could study abroad.", exUz: "Kaskiydi, chet elda o'qiy olsam." },
  ],
  practice: [
    { k: 'match', pairs: [['afford', "pul jihatidan imkoni bo'lmoq"], ['pity', 'afsus, achinarli hol'], ['lonely', "yolg'iz"], ['lucky', 'omadli'], ['abroad', 'chet elda']] },
    { k: 'choice', q: "I don't have enough money. I wish I ___ more.", opts: ['had', 'have', 'would have', 'having'], a: 0, why: "Hozirgi orzu: **wish + Past Simple**." },
    { k: 'choice', q: "I wish I ___ swim. The water looks lovely.", opts: ['could', 'can', 'will', 'am able'], a: 0, why: "**can** → **could** (wish dan keyin)." },
    { k: 'fill', q: "I wish I ___ taller. (to be)", a: ['were', 'was'], uz: "Kaskiydi, bo'yim balandroq bo'lsa.", why: "**to be** → **were** (yoki norasmiy *was*)." },
    { k: 'fill', q: "I wish I ___ studied harder at school.", a: ['had'], uz: "Kaskiydi, maktabda ko'proq o'qisam edi.", why: "O'tgan zamon pushaymonligi: **had + V3**." },
    { k: 'fill', q: "I wish I ___ eaten so much cake. I feel ill.", a: ["hadn't", 'had not'], uz: "Kaskiydi, shuncha tort yemasam edi. O'zimni yomon his qilyapman.", why: "Inkor pushaymonlik: **hadn't + V3**." },
    { k: 'order', uz: "Kaskiydi, ko'proq bo'sh vaqtim bo'lsa.", words: ['I', 'wish', 'I', 'had', 'more', 'free', 'time.'], extra: ['have', 'would'], why: "**wish + Past Simple**." },
    { k: 'fix', wrong: 'I wish I have a bigger house.', a: ['I wish I had a bigger house.'], why: "**wish** dan keyin **Past Simple**: *had*." },
    { k: 'fix', wrong: 'I wish I would have studied medicine.', a: ['I wish I had studied medicine.'], why: "**wish** dan keyin **had + V3**, *would have* emas." },
    { k: 'listen', say: "I wish I hadn't said that.", opts: ["I wish I hadn't said that.", "I wish I had said that.", "I wish I didn't say that.", "I hope I haven't said that."], a: 0 },
    { k: 'translate', uz: "Kaskiydi, chet elda yashasam.", a: ['I wish I lived abroad.', 'I wish I could live abroad.'], why: "Hozirgi orzu: **wish + Past Simple**." },
    { k: 'translate', uz: "Kaskiydi, uni oldinroq chaqirsam edi.", a: ['I wish I had called him earlier.', 'I wish I had called him sooner.', 'I wish I had phoned him earlier.', 'I wish I had phoned him sooner.', 'I wish I had called her earlier.', 'I wish I had called her sooner.', 'I wish I had phoned her earlier.', 'I wish I had phoned her sooner.'], why: "O'tgan zamon pushaymonligi: **wish + had + V3**." },
    { k: 'tf', q: "*I wish I had studied more.* — Men yaxshi o'qigan edim.", a: false, why: "Bu pushaymonlik: aslida kam o'qigan." },
    { k: 'dictation', say: 'I wish I could afford a new laptop.', a: ['I wish I could afford a new laptop.'], uz: "Kaskiydi, yangi noutbukka pulim yetsa." },
    { k: 'speak', say: 'I wish I had more free time.', uz: "Kaskiydi, bo'sh vaqtim ko'proq bo'lsa." },
    { k: 'speak', say: "I wish I hadn't spent all my money.", uz: "Kaskiydi, hamma pulimni sarflamasam edi." },
  ],
  quiz: [
    { k: 'choice', q: "Men hozir juda charchaganman. Kaskiydi, yotsam:", opts: ['I wish I could go to bed.', 'I wish I can go to bed.', 'I wish I will go to bed.', 'I wish I go to bed.'], a: 0, why: "**wish + could**." },
    { k: 'choice', q: "I wish it ___ raining. We could go out.", opts: ["weren't", "isn't", "won't be", "not"], a: 0, why: "**wish** dan keyin: *weren't* (hozirgi, istamagan holat)." },
    { k: 'choice', q: "Qaysi gap o'tgan zamon pushaymonligi?", opts: ['I wish I had told the truth.', 'I wish I told the truth.', 'I hope I tell the truth.', 'I wish I could tell the truth.'], a: 0, why: "**had + V3** — o'tgan zamon." },
    { k: 'fill', q: "I wish my brother ___ closer to us. (live)", a: ['lived'], why: "Hozirgi orzu: **lived** (Past Simple)." },
    { k: 'fill', q: "It's raining. I ___ it would stop soon. (haqiqatan to'xtashi mumkin)", a: ['hope'], why: "Bo'lishi mumkin bo'lgan ish → **hope**." },
    { k: 'order', uz: "Kaskiydi, o'sha uyni sotib olmasam edi.", words: ['I', 'wish', 'I', "hadn't", 'bought', 'that', 'house.'], extra: ["didn't", 'would'], why: "**wish + hadn't + V3**." },
    { k: 'translate', uz: "Kaskiydi, ingliz tilida yaxshiroq gapira olsam.", a: ['I wish I could speak English better.', 'I wish I could speak better English.'], why: "**wish + could**." },
    { k: 'fix', wrong: 'I wish I am younger.', a: ['I wish I were younger.', 'I wish I was younger.'], why: "**am** → **were** (wish dan keyin)." },
    { k: 'tf', q: "*I hope you like the gift.* — bu gapda orzu haqiqatga mos kelmaydi.", a: false, why: "**hope** — bo'lishi mumkin bo'lgan narsa uchun." },
  ],
  summary: [
    "**I wish + Past Simple / could / were** — hozirgi vaziyat yoqmaydi: *I wish I had a car. I wish I could swim. I wish I were taller.*",
    "**I wish + had + V3** — o'tgan zamon pushaymonligi: *I wish I had studied harder. I wish I hadn't said that.*",
    "**wish** dan keyin *am, can, have* emas, \"orqaga\" shakl keladi; *I wish I would have…* ❌.",
    "**hope** — bo'lishi mumkin ish (*I hope you pass*), **wish** — o'zgartirib bo'lmaydigan narsa.",
    "Yangi so'zlar: **afford, pity, lonely, lucky, abroad**.",
  ],
  homework: "O'z hayotingiz haqida 3 ta hozirgi orzu (*I wish I had… / I wish I could…*) va 2 ta o'tgan zamon pushaymonligi (*I wish I had… / I wish I hadn't…*) yozing.",
};

export default lesson;
