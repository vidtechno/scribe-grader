import type { Lesson } from '../../../types';

// Mini lesson (grammar): word order with just / already / yet / still, and been or gone. Builds on l1 only.
const lesson: Lesson = {
  id: 'u18-l12',
  title: 'Been or gone? Just, already, yet',
  titleUz: "Been yoki gone? Just, already va yet bilan ishlash",
  mini: true,
  kind: 'grammar',
  goal: "**just, already, yet** va **still** so'zlarini gapda to'g'ri joyga qo'yasiz, **have been** bilan **have gone** farqini ajratasiz va o'z hayotingiz haqida aniq gaplar tuzasiz.",
  slides: [
    {
      title: "Just, already, yet: o'rni va ma'nosi",
      blocks: [
        { t: 'p', md: "Birinchi darsda Present Perfect ni **ever, never, already, yet, just** bilan ko'rdingiz. Endi shu so'zlarni **aniq va ishonchli** ishlatamiz. Qoida bir xil: **just** va **already** — *have / has* bilan V3 orasida; **yet** — gap oxirida." },
        { t: 'examples', items: [
          { en: "I've just spoken to the manager.", uz: "Men hozirgina menejer bilan gaplashdim.", note: "**just** — bir necha daqiqa oldin bo'lgan ish." },
          { en: "She's already sent the report.", uz: "U hisobotni allaqachon yuborib bo'lgan.", note: "**already** — ish bajarilgan." },
          { en: "Have you finished already?", uz: "Allaqachon tugatib bo'ldingizmi?", note: "Savolda **already** — hayratlanish: kutganimizdan tez!" },
          { en: "We haven't decided yet.", uz: "Biz hali qaror qilganimiz yo'q.", note: "**yet** — inkorda, gap oxirida." },
          { en: "I still haven't received an answer.", uz: "Men hali ham javob olganim yo'q.", note: "**still** — kutish uzoq cho'zilgani uchun norozilik. U *haven't* dan oldin turadi." },
        ] },
        { t: 'tip', tone: 'warn', md: "**still haven't** deyiladi, **haven't still** emas. *I haven't finished yet* va *I still haven't finished* ma'nosi yaqin, lekin ikkinchisida sabrsizlik bor." },
        { t: 'check', ex: { k: 'choice', q: "Qaysi gap to'g'ri?", opts: ["I still haven't found my keys.", "I haven't still found my keys.", "I haven't found still my keys.", "Still I haven't found my keys yet."], a: 0, why: "**still** — *haven't* dan oldin." } },
      ],
    },
    {
      title: "Been yoki gone?",
      blocks: [
        { t: 'p', md: "**go** fe'lining V3 shakli ikkita: **been** va **gone**. Farq — odam **hozir qayerda**ligida:" },
        { t: 'table', head: ['Gap', "Ma'nosi", 'Hozir qayerda?'], speak: [0], rows: [
          ['She has been to Samarkand.', "Samarqandda bo'lgan va qaytib kelgan.", 'Bu yerda.'],
          ['She has gone to Samarkand.', 'Samarqandga ketgan.', "U yerda yoki yo'lda."],
          ['Has the postman been?', 'Pochtachi kelib ketdimi?', "Kelib bo'ldi, ketdi."],
        ] },
        { t: 'tip', tone: 'info', md: "Tajriba haqida (*ever, never, twice*) har doim **been**: *I've never been to London.* Biror kishi hozir yo'q bo'lsa (*Where's Dad?*) — **gone**: *He's gone to the shop.* Inglizlar *The plumber has been* desa, santexnik kelib bo'lib ketgan." },
        { t: 'compare',
          good: { title: "To'g'ri", items: ["I've been to Italy twice.", "Where's Anna? She's gone home.", "Have you ever been to a concert?"] },
          bad: { title: 'Xato', items: ["I've gone to Italy twice.", "Where's Anna? She's been home.", "Have you ever gone to a concert?"] } },
        { t: 'check', ex: { k: 'choice', q: "Karim hozir ofisda emas. U bankka ketgan va hali qaytmagan.", opts: ["Karim has gone to the bank.", "Karim has been to the bank.", "Karim is gone to the bank.", "Karim has went to the bank."], a: 0, why: "Hozir yo'q → **has gone**." } },
        { t: 'check', ex: { k: 'fill', q: "I've never ___ to Scotland, but I'd love to go.", a: ['been'], why: "Tajriba (**never**) → **been**." } },
      ],
    },
    {
      title: "Dialog: telefon orqali",
      blocks: [
        { t: 'dialog', lines: [
          { who: 'Emma', en: "Hello, Tom. Is Ben there? I need to ask him something.", uz: "Salom, Tom. Ben shu yerdami? Undan bir narsa so'rashim kerak." },
          { who: 'Tom', en: "No, he's gone to the airport. His sister has just arrived from Canada.", uz: "Yo'q, u aeroportga ketgan. Singlisi hozirgina Kanadadan keldi." },
          { who: 'Emma', en: "Oh, lovely! Has she ever been to England before?", uz: "Voy, zo'r! U Angliyada ilgari bo'lganmi?" },
          { who: 'Tom', en: "No, she's never been here. We've already planned a few trips for her.", uz: "Yo'q, u bu yerda hech bo'lmagan. Biz unga bir necha sayohatni allaqachon rejalashtirib qo'yganmiz." },
          { who: 'Emma', en: "Have you booked the train tickets yet?", uz: "Poyezd chiptalarini hali band qildingizmi?" },
          { who: 'Tom', en: "Not yet. I still haven't had time. I'll do it tonight.", uz: "Hali yo'q. Hali ham vaqt topolmadim. Bugun kechqurun qilaman." },
        ] },
        { t: 'check', ex: { k: 'tf', q: "Ben is at home now.", a: false, why: "*He's gone to the airport.*" } },
        { t: 'check', ex: { k: 'choice', q: "Has Ben's sister been to England before?", opts: ["No, she hasn't.", "Yes, she has.", "Yes, twice.", "We don't know."], a: 0, why: "*She's never been here.*" } },
      ],
    },
  ],
  words: [
    { en: 'look around', uz: 'aylanib ko\'rmoq', ipa: 'lʊk əˈraʊnd', pos: 'phrasal verb', ex: 'We\'ve just looked around the new flat.', exUz: 'Biz hozirgina yangi kvartirani aylanib ko\'rdik.' },
    { en: 'get back', uz: 'qaytib kelmoq', ipa: 'ɡet bæk', pos: 'phrasal verb', ex: 'Tom has just got back from Paris.', exUz: 'Tom hozirgina Parijdan qaytib keldi.' },
    { en: 'save up', uz: 'jamg\'arib bormoq', ipa: 'seɪv ʌp', pos: 'phrasal verb', ex: 'I\'ve just saved up enough money for a laptop.', exUz: 'Men noutbuk uchun yetarli pulni hozirgina jamg\'ardim.' },
    { en: 'take over', uz: 'o\'z zimmasiga olmoq', ipa: 'teɪk ˈəʊ.və', pos: 'phrasal verb', ex: 'Has Helen taken over the project yet?', exUz: 'Helen loyihani hali o\'z zimmasiga oldimi?' },
    { en: 'work on', uz: 'ustida ishlamoq', ipa: 'wɜːk ɒn', pos: 'phrasal verb', ex: 'She has already worked on the report this morning.', exUz: 'U bugun ertalab hisobot ustida allaqachon ishladi.' },
  ],
  practice: [
    { k: 'match', pairs: [['just', 'hozirgina'], ['already', 'allaqachon'], ['yet', 'hali (inkor, savol)'], ['still', 'hali ham'], ['recently', 'yaqinda']] },
    { k: 'choice', q: "Qaysi gap to'g'ri?", opts: ["She has just left.", "She just has left.", "She has left just.", "Just she has left."], a: 0, why: "**just** — *has* va V3 orasida." },
    { k: 'fill', q: "Have you invited Jack ___?", a: ['yet', 'already'], uz: "Jekni hali taklif qildingizmi?", why: "Savolda gap oxirida **yet**." },
    { k: 'fill', q: "We've ___ cancelled the trip, so please don't book anything.", a: ['already', 'just'], uz: "Biz sayohatni allaqachon bekor qildik.", why: "Bajarilgan ish → **already** (yoki **just**)." },
    { k: 'choice', q: "Where's Lily? — She ___ out. She'll be back at five.", opts: ['has gone', 'has been', 'is been', 'went been'], a: 0, why: "Hozir yo'q → **has gone**." },
    { k: 'choice', q: "Have you ever ___ to a music festival?", opts: ['been', 'gone', 'went', 'being'], a: 0, why: "Tajriba → **been**." },
    { k: 'listen', say: "I still haven't realised what happened.", opts: ["I still haven't realised what happened.", "I have just realised what happened.", "I haven't realised what happened yet.", "I realised what happened."], a: 0 },
    { k: 'order', uz: "Men undan hali ham xabar olganim yo'q.", words: ['I', 'still', "haven't", 'heard', 'from', 'her.'], extra: ['yet', 'already'], why: "**still** — *haven't* dan oldin." },
    { k: 'fix', wrong: "I haven't still lost my keys.", a: ["I still haven't lost my keys."], why: "**still** — *haven't* dan oldin turadi." },
    { k: 'fix', wrong: "My brother has gone to Spain three times.", a: ["My brother has been to Spain three times."], why: "Tajriba (borib qaytgan) → **been**." },
    { k: 'translate', uz: "Siz allaqachon tugatdingizmi?", a: ['Have you finished already?', 'Have you already finished?'], why: "Savolda **already** hayratni bildiradi." },
    { k: 'translate', uz: "Pochtachi hali kelmadi.", a: ["The postman hasn't been yet.", 'The postman has not been yet.', "The postman hasn't come yet.", 'The postman has not come yet.'], why: "**hasn't been yet** — hali kelmagan." },
    { k: 'dictation', say: "I've just realised that I've lost my keys.", a: ["I've just realised that I've lost my keys.", 'I have just realised that I have lost my keys.', "I've just realized that I've lost my keys."] },
    { k: 'speak', say: "I've never been to Scotland, but I'd love to go.", uz: "Men Shotlandiyada hech bo'lmaganman, lekin borishni juda xohlayman." },
    { k: 'speak', say: "We haven't decided yet.", uz: "Biz hali qaror qilganimiz yo'q." },
  ],
  quiz: [
    { k: 'choice', q: "Her phone is off. She ___ a meeting.", opts: ["has just gone into", "has just been into", "just has gone into", "has gone just into"], a: 0, why: "Hozir u yerda → **has gone**; **just** oraliqda." },
    { k: 'choice', q: "I ___ from the bank. It's been a week!", opts: ["still haven't heard", "haven't still heard", "don't still heard", "still not have heard"], a: 0, why: "**still haven't** — norozilik." },
    { k: 'fill', q: "She hasn't answered my email ___.", a: ['yet'], why: "Inkorda gap oxirida **yet**." },
    { k: 'fill', q: "Have you ever ___ to Turkey?", a: ['been'], why: "Tajriba → **been**." },
    { k: 'order', uz: "Biz hozirgina yangi uyga ko'chib keldik.", words: ["We've", 'just', 'moved', 'into', 'a', 'new', 'house.'], extra: ['yet', 'gone'], why: "**just** — *have* va V3 orasida." },
    { k: 'fix', wrong: "Have you finished your homework already yet?", a: ["Have you finished your homework yet?", "Have you finished your homework already?", "Have you already finished your homework?"], why: "Bir gapda **already** va **yet** birga kelmaydi." },
    { k: 'tf', q: "*Anna has been to Paris.* — Anna hozir Parijda.", a: false, why: "**been** — borib qaytgan." },
    { k: 'translate', uz: "U hozirgina hamyonini yo'qotdi.", a: ["She has just lost her wallet.", "She's just lost her wallet."], why: "**has just lost**." },
  ],
  summary: [
    "**just** va **already** — *have / has* bilan V3 orasida; **yet** — gap oxirida (inkor va savol).",
    "**still** — *haven't* dan oldin: *I still haven't finished.* (sabrsizlik). Savolda **already** — hayrat.",
    "**have been** — borib qaytgan (tajriba); **have gone** — ketgan, hozir yo'q.",
    "Yangi so'zlar: **look around, get back, save up, take over, work on**.",
  ],
  homework: "O'zingiz haqingizda 5 ta gap yozing: 2 ta *I've never been to…*, 1 ta *I've just…*, 1 ta *I still haven't…* va 1 ta *I've already…*.",
};

export default lesson;
