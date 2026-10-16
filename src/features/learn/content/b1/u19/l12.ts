import type { Lesson } from '../../../types';

// Mini lesson (grammar): Past Perfect or Past Simple? before, after, by the time, as soon as. Builds on l1 (Past Perfect form and first use).
const lesson: Lesson = {
  id: 'u19-l12',
  title: 'Past Perfect or Past Simple? Before, after, by the time',
  titleUz: 'Past Perfect yoki Past Simple? Before, after, by the time',
  mini: true,
  kind: 'grammar',
  goal: "O'tmishdagi ikki voqeadan **qaysi biri oldin bo'lganini** ko'rsatasiz: oldingisiga **Past Perfect**, keyingisiga **Past Simple** ishlatasiz va **before, after, by the time, as soon as** so'zlarini to'g'ri qo'llaysiz (*By the time we arrived, the film had started.*).",
  slides: [
    {
      title: "Qaysi biri oldin bo'ldi?",
      blocks: [
        { t: 'p', md: "O'tmishdagi ikki voqeani aytsangiz, avval **qaysi biri oldin bo'lganini** o'ylang. **Oldin** bo'lgan ish — **Past Perfect** (*had + V3*). **Keyin** bo'lgan ish — **Past Simple**." },
        { t: 'examples', items: [
          { en: "When we got to the cinema, the film had started.", uz: "Kinoga yetib borganimizda, film boshlanib bo'lgan edi.", note: "Avval film boshlandi (*had started*), keyin biz keldik (*got*)." },
          { en: "When we got to the cinema, we bought the tickets.", uz: "Kinoga yetib borgach, chiptalarni sotib oldik.", note: "Ikkalasi ketma-ket ish: ikkalasi ham **Past Simple**." },
          { en: "She was upset because she had lost her phone.", uz: "U xafa edi, chunki telefonini yo'qotgan edi.", note: "Sabab oldin bo'lgan: **had lost**." },
        ] },
        { t: 'tip', tone: 'info', md: "Gapdagi **tartib** emas, **voqealar tartibi** muhim. *The film had started when we arrived* va *When we arrived, the film had started* — ma'no bir xil." },
        { t: 'check', ex: { k: 'choice', q: "When I called Sara, she ___ the house.", opts: ["had already left", "already left", "has already left", "was already leaving"], a: 0, why: "Avval u ketgan, keyin men qo'ng'iroq qildim → **had already left**." } },
      ],
    },
    {
      title: "Before va after",
      blocks: [
        { t: 'p', md: "**before** (oldin) va **after** (keyin) so'zlari tartibni o'zi ko'rsatadi. Shu sababli ko'pincha **ikkalasi ham Past Simple** bo'lishi mumkin. Past Perfect esa oldingi ish **tugab bo'lganini** ta'kidlaydi." },
        { t: 'table', head: ["Gap", "Izoh"], speak: [0], rows: [
          ["After I finished work, I went home.", "Oddiy, tabiiy gap."],
          ["After I had finished work, I went home.", "Ish tugab bo'lganini ta'kidlaydi."],
          ["Before I left, I locked the door.", "Ikkalasi Past Simple: yetarli."],
          ["I had locked the door before I left.", "Eshikni oldin qulflaganim ta'kidlanadi."],
        ] },
        { t: 'tip', tone: 'warn', md: "**after** dan keyingi bo'lakda Past Perfect ishlatsangiz, asosiy gap **Past Simple** bo'ladi: *After he had eaten, he went out.* Ikkala bo'lakni ham Past Perfect qilmang." },
        { t: 'compare', good: { title: "To'g'ri", items: ["After she had read the email, she called him.", "I opened the door and walked in."] }, bad: { title: "Xato", items: ["After she had read the email, she had called him.", "I had opened the door and I had walked in. (ketma-ket ishlar Past Simple bilan)"] } },
        { t: 'check', ex: { k: 'choice', q: "Qaysi gap tabiiy va to'g'ri?", opts: ["After he had eaten, he went out.", "After he had eaten, he had gone out.", "After he eats, he went out.", "After he was eating, he had gone out."], a: 0, why: "Oldingi ish — Past Perfect, keyingisi — Past Simple." } },
      ],
    },
    {
      title: "By the time va as soon as",
      blocks: [
        { t: 'p', md: "**By the time** — \"...ga kelib, ...gacha\". Bu so'z bilan bo'lak **Past Simple**, asosiy gap esa **Past Perfect** bo'ladi: u vaqtga kelib ish **allaqachon tugagan** edi." },
        { t: 'examples', items: [
          { en: "By the time we arrived, the shop had closed.", uz: "Biz yetib borganimizda do'kon yopilib bo'lgan edi.", note: "**By the time** + Past Simple, **Past Perfect**." },
          { en: "By the time he got home, his children had gone to bed.", uz: "U uyga kelganida bolalari allaqachon yotgan edi." },
          { en: "I called at nine, but he had gone to bed by then.", uz: "Soat to'qqizda qo'ng'iroq qildim, lekin u o'sha vaqtga kelib yotib bo'lgan edi.", note: "**by then** — \"o'sha vaqtga kelib\"." },
          { en: "As soon as I had read the message, I called her.", uz: "Xabarni o'qishim bilan unga qo'ng'iroq qildim.", note: "**as soon as** — \"...ishim bilan\"." },
        ] },
        { t: 'tip', tone: 'info', md: "**as soon as** bilan ham Past Simple, ham Past Perfect bo'ladi: *As soon as I arrived, I called her.* Past Perfect ishning tugaganini ta'kidlaydi." },
        { t: 'check', ex: { k: 'fill', q: "By the time the doctor arrived, the patient ___ better. (get)", a: ["had got", "had gotten"], hint: "Ish allaqachon bo'lgan", why: "**By the time** + Past Simple bo'lagidan keyin asosiy gapda Past Perfect keladi: *had got*." } },
      ],
    },
    {
      title: "Dialog: Poyezdga kechikish",
      blocks: [
        { t: 'dialog', lines: [
          { who: 'Madina', en: "Why were you so late yesterday? We waited for an hour.", uz: "Kecha nega bunchalik kech qolding? Biz bir soat kutdik." },
          { who: 'Karim', en: "I'm really sorry. By the time I got to the station, the train had already left.", uz: "Juda uzr. Vokzalga yetib borganimda poyezd allaqachon ketib bo'lgan edi." },
          { who: 'Madina', en: "Oh no. Why didn't you call me?", uz: "Voy, yo'q. Nega menga qo'ng'iroq qilmading?" },
          { who: 'Karim', en: "My phone had died, and I had forgotten my charger.", uz: "Telefonim o'chib qolgan edi, zaryadlagichimni esa unutgan edim." },
          { who: 'Madina', en: "So what did you do after the train had left?", uz: "Poyezd ketganidan keyin nima qilding?" },
          { who: 'Karim', en: "I took a bus. As soon as I arrived, I looked for you, but you had gone home.", uz: "Avtobusga o'tirdim. Yetib kelishim bilan seni qidirdim, lekin sen uyga ketib bo'lgan eding." },
          { who: 'Madina', en: "Yes, we left at nine. It turned out to be a long evening for both of us.", uz: "Ha, biz soat to'qqizda ketdik. Ikkalamiz uchun ham uzoq kech bo'lib chiqdi." },
        ] },
        { t: 'check', ex: { k: 'choice', q: "Why couldn't Karim call Madina?", opts: ["His phone had died.", "He had lost his keys.", "He was on the train.", "He had no time."], a: 0, why: "*My phone had died.*" } },
        { t: 'check', ex: { k: 'tf', q: "Madina had already gone home when Karim arrived.", a: true, why: "*You had gone home.*" } },
      ],
    },
  ],
  words: [
    { en: 'by the time', uz: "...ga kelib, ...gacha (vaqtga kelib)", ipa: 'baɪ ðə taɪm', pos: 'phrase', ex: 'By the time we arrived, the shop had closed.', exUz: "Biz yetib borganimizda do'kon yopilib bo'lgan edi." },
    { en: 'by then', uz: "o'sha vaqtga kelib", ipa: 'baɪ ðen', pos: 'phrase', ex: 'I called at nine, but he had gone to bed by then.', exUz: "Soat to'qqizda qo'ng'iroq qildim, lekin u o'sha vaqtga kelib yotgan edi." },
    { en: 'turn up', uz: "kelib qolmoq, paydo bo'lmoq", ipa: 'tɜːn ʌp', pos: 'phrasal verb', ex: "By the time Tom turned up, the film had started.", exUz: "Tom kelib qolganda film boshlanib bo'lgan edi." },
    { en: 'turn out', uz: "bo'lib chiqmoq", ipa: 'tɜːn aʊt', pos: 'phrasal verb', ex: 'The test turned out to be easy.', exUz: "Test oson bo'lib chiqdi." },
    { en: 'not long after', uz: "...dan ko'p o'tmay", ipa: 'nɒt lɒŋ ˈɑːf.tər', pos: 'phrase', ex: "Not long after we left, the storm began.", exUz: "Biz ketganimizdan ko'p o'tmay bo'ron boshlandi." },
  ],
  practice: [
    { k: 'match', pairs: [['by the time', "...ga kelib"], ['by then', "o'sha vaqtga kelib"], ['as soon as', '...ishi bilan'], ['turn out', "bo'lib chiqmoq"], ['realise', 'payqamoq']] },
    { k: 'choice', q: "When we got to the cinema, the film ___.", opts: ["had started", "was start", "starts", "has started"], a: 0, why: "Film avval boshlangan → **had started**." },
    { k: 'fill', q: "By the time we arrived, the shop ___. (close)", a: ["had closed"], why: "**By the time** + Past Simple, asosiy gap — **had closed**." },
    { k: 'fill', q: "She was angry because she ___ her wallet. (lose)", a: ["had lost"], why: "Sabab oldin bo'lgan → **had lost**." },
    { k: 'fill', q: "After he ___ dinner, he washed the dishes. (cook)", a: ["had cooked", "cooked"], why: "**after** bilan Past Perfect ham, Past Simple ham to'g'ri: *had cooked* yoki *cooked*." },
    { k: 'choice', q: "I called at nine, but she ___ by then.", opts: ["had gone to bed", "went to bed", "goes to bed", "was going bed"], a: 0, why: "**by then** — o'sha vaqtga kelib tugagan ish → Past Perfect." },
    { k: 'fix', wrong: "By the time I got home, my guests already left.", a: ["By the time I got home, my guests had already left."], hint: "Mehmonlar oldin ketgan", why: "Oldingi voqea — **had already left**." },
    { k: 'fix', wrong: "After she had finished the report, she had sent it to her boss.", a: ["After she had finished the report, she sent it to her boss.", "After she finished the report, she sent it to her boss."], hint: "Ikkinchi bo'lak keyingi ish", why: "Keyingi ish — **Past Simple**: *she sent it*." },
    { k: 'order', uz: "Biz yetib borganimizda poyezd ketib bo'lgan edi.", words: ["By", "the", "time", "we", "arrived,", "the", "train", "had", "left."], extra: ["have", "was"], alt: [["The", "train", "had", "left", "by", "the", "time", "we", "arrived."]], why: "**By the time** + Past Simple, Past Perfect." },
    { k: 'translate', uz: "Men uyga kelganimda bolalar uxlab bo'lgan edi.", a: ["When I got home, the children had gone to bed.", "When I got home, the children had fallen asleep.", "When I came home, the children had gone to bed.", "When I came home, the children had fallen asleep.", "By the time I got home, the children had gone to bed.", "By the time I got home, the children had fallen asleep.", "By the time I came home, the children had gone to bed.", "When I got home, the kids had gone to bed.", "By the time I got home, the kids had gone to bed."] },
    { k: 'dictation', say: "By the time I got to the station, the train had already left.", a: ["By the time I got to the station, the train had already left.", "By the time I got to the station the train had already left."] },
    { k: 'speak', say: "By the time we arrived, the shop had closed.", uz: "Biz yetib borganimizda do'kon yopilib bo'lgan edi." },
  ],
  quiz: [
    { k: 'choice', q: "I couldn't open the door because I ___ my keys at the office.", opts: ["had left", "leave", "was leave", "have left"], a: 0, why: "Sabab oldin bo'lgan → **had left**." },
    { k: 'choice', q: "Qaysi gap to'g'ri?", opts: ["I realised that I had forgotten my passport.", "I realised that I forget my passport.", "I had realised that I forget my passport.", "I realise that I had forgotten my passport yesterday."], a: 0, why: "Payqash o'tmishda (*realised*), unutish undan oldin (*had forgotten*)." },
    { k: 'fill', q: "As soon as she ___ the news, she phoned her mother. (hear)", a: ["heard", "had heard"], why: "**as soon as** bilan Past Simple yoki Past Perfect." },
    { k: 'fill', q: "The exam ___ out to be very easy. (turn)", a: ["turned"], why: "**turn out** — o'tgan zamon: *turned out*." },
    { k: 'tf', q: "**When I arrived, the film had started.** Avval film boshlandi, keyin men keldim.", a: true, why: "Past Perfect oldingi ishni ko'rsatadi." },
    { k: 'fix', wrong: "When we arrived at the party, everyone already went home.", a: ["When we arrived at the party, everyone had already gone home.", "When we arrived at the party, everybody had already gone home."], why: "Avval hamma ketgan → **had already gone**." },
    { k: 'order', uz: "U ketishdan oldin eshikni qulfladi.", words: ["She", "locked", "the", "door", "before", "she", "left."], extra: ["has", "locking"], alt: [["Before", "she", "left,", "she", "locked", "the", "door."]], why: "**before** bilan ikkalasi Past Simple." },
    { k: 'translate', uz: "U kelganida men ketib bo'lgan edim.", a: ["When he came, I had already left.", "When he arrived, I had already left.", "When he came, I had left.", "When he arrived, I had left.", "By the time he came, I had left.", "By the time he arrived, I had left.", "By the time he came, I had already left.", "By the time he arrived, I had already left."] },
  ],
  summary: [
    "Oldin bo'lgan ish — **Past Perfect** (*had left*), keyin bo'lgan ish — **Past Simple** (*arrived*).",
    "**before / after** tartibni o'zi ko'rsatadi: ikkalasi **Past Simple** bo'lishi ham mumkin. Ketma-ket ishlarni ikkala bo'lakda ham Past Perfect qilmang.",
    "**By the time** + Past Simple, asosiy gap — **Past Perfect**: *By the time we arrived, the shop had closed.*",
    "**as soon as** (...ishi bilan), **by then** (o'sha vaqtga kelib), **turn out**, **realise** — hikoyada foydali.",
  ],
  homework: "Kechagi kunni 5 ta gapda yozing. Kamida 2 ta gapda **by the time** yoki **after** ishlating va bitta joyda *Past Perfect* bilan sababni ayting (*I was late because I had missed the bus*).",
};

export default lesson;
