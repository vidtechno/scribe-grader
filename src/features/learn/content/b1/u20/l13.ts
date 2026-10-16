import type { Lesson } from '../../../types';

// Mini lesson (grammar): should have, shouldn't have, could have, needn't have (past modals).
// Uses l3 (third conditional) and l4 (must have been) as known grammar; advice with ought to / had better is taught later (l6).
const lesson: Lesson = {
  id: 'u20-l13',
  title: 'Modals in the past: should have, could have',
  titleUz: "O'tgan zamon modallari: should have, could have, needn't have",
  mini: true,
  kind: 'grammar',
  goal: "**should have, could have, needn't have** bilan o'tgan zamondagi ishlarni baholaysiz (*You should have called me. We could have won. You needn't have waited.*) va ularni **third conditional** bilan bog'laysiz.",
  slides: [
    {
      title: "Should have va shouldn't have",
      blocks: [
        { t: 'p', md: "To'rtinchi darsda **must have been** kabi shaklni ko'rdingiz: **modal + have + V3**. Xuddi shu qolipda **should have** o'tgan zamonga nisbatan **\"qilishing kerak edi (lekin qilmading)\"** degan ma'noni beradi. Bu — pushaymonlik yoki yengil tanqid." },
        { t: 'table', head: ['Qolip', "Ma'nosi", 'Misol'], speak: [2], rows: [
          ['should have + V3', "qilish kerak edi (qilmadi)", "You should have called me."],
          ["shouldn't have + V3", "qilmaslik kerak edi (qildi)", "I shouldn't have shouted at him."],
        ] },
        { t: 'examples', items: [
          { en: 'We should have left earlier. Now we are late.', uz: "Oldinroq chiqishimiz kerak edi. Endi kechikdik.", note: "Aslida kech chiqdik." },
          { en: "She shouldn't have lied to her friend.", uz: "U do'stiga yolg'on gapirmasligi kerak edi.", note: "Aslida yolg'on gapirgan." },
        ] },
        { t: 'tip', tone: 'info', md: "Ona tilida bu **\"…ishi kerak edi\"** va **\"…masligi kerak edi\"**. Gapirganda *should have* odatda qisqartirib *should've* deb aytiladi." },
        { t: 'check', ex: { k: 'choice', q: "Siz kecha imtihonga tayyorlanmadingiz va yomon baho oldingiz:", opts: ['I should have studied.', 'I should study.', 'I should studied.', 'I should has studied.'], a: 0, why: "**should have + V3** — o'tgan zamon pushaymonligi." } },
      ],
    },
    {
      title: "Could have va might have",
      blocks: [
        { t: 'p', md: "**could have + V3** — o'tgan zamonda **imkoniyat bor edi**, lekin ish bo'lmadi (yoki bilmaymiz). **might have** ham o'xshash, lekin ko'proq \"balki shunday bo'lgandir\" degan taxminni bildiradi." },
        { t: 'examples', items: [
          { en: 'You could have asked me for help.', uz: "Mendan yordam so'rashing mumkin edi (so'ramading).", note: "Imkoniyat bor edi." },
          { en: 'We could have won the match, but we missed an easy goal.', uz: "O'yinda g'alaba qozonishimiz mumkin edi, lekin oson golni o'tkazib yubordik.", note: "G'alaba imkoniyati bor edi." },
          { en: "He might have missed the bus.", uz: "U avtobusdan qolgandir.", note: "Taxmin (4-dars: *must / might have*)." },
        ] },
        { t: 'compare',
          good: { title: "To'g'ri", items: ['You could have called me.', 'I should have told you.', 'She might have forgotten.'] },
          bad: { title: 'Xato', items: ['You could have call me.', 'I should have told you yesterday ago.', 'She might has forgotten.'] } },
        { t: 'tip', tone: 'warn', md: "**have** doim o'zgarmaydi (*he should have*, *she could have*), **V3** esa oxirida turadi. *should has* — xato, *could have went* — xato; to'g'risi: *could have gone*." },
        { t: 'check', ex: { k: 'fill', q: "You ___ have told me about the problem. I could have helped. (kerak edi)", a: ['should'], why: "Qilish kerak edi → **should have**." } },
        { t: 'check', ex: { k: 'choice', q: "The shop was open. We ___ bought some bread. (imkoniyat bor edi, olmadik)", opts: ['could have', 'could', 'can have', 'could has'], a: 0, why: "**could have + V3** — bo'lishi mumkin edi." } },
      ],
    },
    {
      title: "Needn't have va uchinchi shart gap",
      blocks: [
        { t: 'p', md: "**needn't have + V3** — siz bu ishni **qildingiz, lekin keraksiz edi**. Masalan, ob-havo yaxshi chiqdi, siz esa soyabon olib yurdingiz." },
        { t: 'examples', items: [
          { en: "You needn't have bought a gift. It's just a small party.", uz: "Sovg'a sotib olishing shart emas edi (olding). Bu kichik ziyofat xolos.", note: "Sovg'a olingan, lekin keraksiz bo'lgan." },
          { en: "I needn't have taken an umbrella. It didn't rain.", uz: "Soyabon olishim shart emas ekan. Yomg'ir yog'madi.", note: "Soyabon olingan." },
        ] },
        { t: 'tip', tone: 'info', md: "**didn't need to + fe'l** — shart bo'lmagan, lekin qildingizmi-yo'qmi, noma'lum. **needn't have + V3** — qilgansiz va keraksiz bo'lgan. *I didn't need to wait* — kutish shart emas edi. *I needn't have waited* — kutdim, bekorga." },
        { t: 'p', md: "Bu modallar **third conditional** bilan bir xil fikrni boshqacha aytadi:" },
        { t: 'table', head: ['Third conditional', 'Modal bilan'], speak: [0, 1], rows: [
          ['If I had left earlier, I would have caught the train.', 'I should have left earlier.'],
          ["If you had asked, I would have helped.", 'You could have asked me.'],
        ] },
        { t: 'check', ex: { k: 'choice', q: "Siz do'konga bordingiz, lekin uyda hamma narsa bor ekan. Siz:", opts: ["I needn't have gone to the shop.", "I shouldn't have go to the shop.", "I needn't went to the shop.", "I don't need have gone."], a: 0, why: "Qilingan, lekin keraksiz → **needn't have + V3**." } },
      ],
    },
    {
      title: "Dialog: kechikkan uchrashuv",
      blocks: [
        { t: 'dialog', lines: [
          { who: 'Karim', en: "Helen, I'm sorry I'm late. The traffic was terrible.", uz: "Helen, kechikkanim uchun uzr. Yo'lda tirbandlik juda yomon edi." },
          { who: 'Helen', en: "You should have called me. I waited for forty minutes.", uz: "Menga qo'ng'iroq qilishing kerak edi. Qirq daqiqa kutdim." },
          { who: 'Karim', en: "I know. My phone died. I should have charged it last night.", uz: "Bilaman. Telefonim o'chib qoldi. Kecha zaryadlashim kerak edi." },
          { who: 'Helen', en: "You could have borrowed a phone from someone, or you could have sent me a message.", uz: "Kimdandir telefon so'rashing yoki menga xabar yuborishing mumkin edi." },
          { who: 'Karim', en: "You're right. I'm really sorry.", uz: "Haqsan. Chindan uzr." },
          { who: 'Helen', en: "It's fine. I needn't have been so angry. Let's order some coffee.", uz: "Hechqisi yo'q. Bunchalik jahlim chiqishi shart emas edi. Keling, kofe buyurtma qilaylik." },
        ] },
        { t: 'check', ex: { k: 'tf', q: "Karim called Helen when he was late.", a: false, why: "Helen: *You should have called me.* — qo'ng'iroq qilmagan." } },
        { t: 'check', ex: { k: 'choice', q: "Why didn't Karim call?", opts: ['His phone died.', 'He forgot her number.', 'He was asleep.', 'He had no money.'], a: 0, why: "*My phone died.*" } },
      ],
    },
  ],
  words: [
    { en: 'waste', uz: "behuda sarflamoq, isrof qilmoq", ipa: 'weɪst', pos: 'verb', ex: "We wasted a lot of time in the queue.", exUz: "Biz navbatda ko'p vaqtni behuda sarfladik." },
    { en: 'oversleep', uz: "uxlab qolmoq", ipa: 'ˌəʊ.vəˈsliːp', pos: 'verb', ex: "I overslept, so I missed the first lesson.", exUz: "Uxlab qoldim, shuning uchun birinchi darsdan qoldim." },
    { en: 'rush', uz: "shoshilmoq", ipa: 'rʌʃ', pos: 'verb', ex: "You shouldn't have rushed the work; there were many mistakes.", exUz: "Ishni shoshib qilmasligingiz kerak edi; xatolar ko'p bo'ldi." },
    { en: 'neglect', uz: "e'tiborsiz qoldirmoq", ipa: 'nɪˈɡlekt', pos: 'verb', ex: "He shouldn't have neglected his health for so long.", exUz: "U sog'lig'iga shuncha vaqt e'tiborsiz qaramasligi kerak edi." },
    { en: 'overlook', uz: "ko'rmay qolmoq, e'tibor bermay o'tib ketmoq", ipa: 'ˌəʊ.vəˈlʊk', pos: 'verb', ex: "We overlooked a small detail in the contract.", exUz: "Shartnomadagi bir mayda tafsilotga e'tibor bermay qoldik." },
  ],
  practice: [
    { k: 'match', pairs: [['waste', 'behuda sarflamoq'], ['oversleep', 'uxlab qolmoq'], ['rush', 'shoshilmoq'], ['neglect', "e'tiborsiz qoldirmoq"], ['overlook', "ko'rmay qolmoq"]] },
    { k: 'choice', q: "We missed the train. We ___ left earlier.", opts: ['should have', 'should', 'had should', 'should had'], a: 0, why: "Pushaymonlik: **should have + V3**." },
    { k: 'choice', q: "I'm full. I ___ eaten the second piece of cake.", opts: ["shouldn't have", "shouldn't", "should have", "couldn't"], a: 0, why: "Qilgan, lekin qilmaslik kerak edi → **shouldn't have**." },
    { k: 'fill', q: "You ___ have asked me. I would have helped. (imkoniyat bor edi)", a: ['could'], uz: "Mendan so'rashing mumkin edi. Men yordam berardim.", why: "**could have + V3**." },
    { k: 'fill', q: "The meeting was cancelled. I needn't have ___ so early. (get up)", a: ['got up', 'gotten up'], uz: "Uchrashuv bekor qilindi. Bunchalik erta turishim shart emas ekan.", why: "**needn't have + V3**: *got up* (UK)." },
    { k: 'listen', say: 'You should have told me the truth.', opts: ['You should have told me the truth.', 'You should tell me the truth.', 'You could have told me the truth.', "You shouldn't have told me the truth."], a: 0 },
    { k: 'fix', wrong: 'You should have call me yesterday.', a: ['You should have called me yesterday.'], why: "**should have** dan keyin **V3** (*called*)." },
    { k: 'fix', wrong: 'She could have went to university.', a: ['She could have gone to university.'], why: "**could have** dan keyin **V3** (*gone*), *went* emas." },
    { k: 'order', uz: "Menga oldinroq aytishing kerak edi.", words: ['You', 'should', 'have', 'told', 'me', 'earlier.'], extra: ['had', 'tell'], why: "**should have + V3**." },
    { k: 'translate', uz: "U sovg'a sotib olmasligi kerak edi.", a: ["He shouldn't have bought a present.", "She shouldn't have bought a present.", "He shouldn't have bought a gift.", "She shouldn't have bought a gift.", "He should not have bought a present.", "She should not have bought a present.", "He should not have bought a gift.", "She should not have bought a gift."], why: "**shouldn't have + V3**." },
    { k: 'translate', uz: "Siz meni ogohlantirishingiz mumkin edi.", a: ['You could have warned me.'], why: "**could have + V3**." },
    { k: 'tf', q: "*I needn't have brought a coat.* — Men palto olib kelgan edim va u kerak bo'lmadi.", a: true, why: "**needn't have + V3** — qilingan va keraksiz bo'lgan." },
    { k: 'dictation', say: "I should have realised it earlier.", a: ['I should have realised it earlier.', 'I should have realized it earlier.'], uz: "Buni oldinroq anglashim kerak edi." },
    { k: 'speak', say: 'I should have called you yesterday.', uz: "Kecha senga qo'ng'iroq qilishim kerak edi." },
    { k: 'speak', say: "You could have told me about the problem.", uz: "Muammo haqida menga aytishing mumkin edi." },
  ],
  quiz: [
    { k: 'choice', q: "Qaysi gap \"qilishing kerak edi\" degani?", opts: ['You should have apologised.', 'You should apologise.', 'You must apologise.', 'You apologised.'], a: 0, why: "**should have + V3**." },
    { k: 'choice', q: "He ___ have driven so fast. It was dangerous.", opts: ["shouldn't", "needn't", "mustn't", "can't"], a: 0, why: "Qilgan, lekin qilmaslik kerak edi → **shouldn't have**." },
    { k: 'choice', q: "We ___ have taken a taxi, but we walked. (imkoniyat bor edi)", opts: ['could', 'should', 'must', 'might to'], a: 0, why: "Imkoniyat bor edi → **could have**." },
    { k: 'fill', q: "I wish I had listened. I ___ have trusted her. (kerak edi)", a: ['should'], why: "Pushaymonlik → **should have**." },
    { k: 'fill', q: "The exam was easy. I needn't ___ studied all night.", a: ['have'], why: "**needn't have + V3**." },
    { k: 'order', uz: "Biz bu qadar ko'p vaqtni behuda sarflamasligimiz kerak edi.", words: ["We", "shouldn't", 'have', 'wasted', 'so', 'much', 'time.'], extra: ['should', 'waste'], why: "**shouldn't have + V3**." },
    { k: 'translate', uz: "U imtihonda yiqildi. Ko'proq o'qishi kerak edi.", a: ['He failed the exam. He should have studied more.', 'She failed the exam. She should have studied more.', 'He failed his exam. He should have studied more.', 'She failed her exam. She should have studied more.'], why: "**should have + V3**." },
    { k: 'tf', q: "*You could have called me.* — Siz qo'ng'iroq qilgansiz.", a: false, why: "**could have** — imkoniyat bor edi, lekin qilinmagan." },
  ],
  summary: [
    "**should have + V3** — qilish kerak edi (qilinmagan); **shouldn't have + V3** — qilmaslik kerak edi (qilingan).",
    "**could have + V3** — o'tgan zamonda imkoniyat bor edi; **needn't have + V3** — qilingan, lekin keraksiz bo'lgan.",
    "**have** o'zgarmaydi, ortidan **V3**: *should have gone*, *could have called*. *should has* va *could have went* — xato.",
    "Third conditional bilan bir fikr: *If I had left earlier, I would have caught it* = *I should have left earlier.*",
    "Yangi so'zlar: **waste, oversleep, rush, neglect, overlook**.",
  ],
  homework: "O'tgan hafta qilgan 3 ta xatongiz haqida gap yozing: ikkitasi *I should have…* / *I shouldn't have…*, bittasi *I could have…* bilan.",
};

export default lesson;
