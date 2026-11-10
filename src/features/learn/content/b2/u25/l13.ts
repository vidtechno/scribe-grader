import type { Lesson } from '../../../types';

// Mini lesson (grammar): should have / ought to have / shouldn't have / could have, needn't have vs didn't need to. Links to mixed conditionals (l1) and past deduction (l4).
const lesson: Lesson = {
  id: 'u25-l13',
  title: 'Criticism and regret: should have, needn\'t have',
  titleUz: "Tanqid va afsus: should have, shouldn't have, needn't have, didn't need to",
  mini: true,
  kind: 'grammar',
  goal: "O'tgan zamondagi **xato, tanqid va afsusni** ifodalaysiz (*should have, ought to have, shouldn't have, could have*), **needn't have** va **didn't need to** farqini bilasiz va tanqidni muloyim yoki qattiq ohangda ayta olasiz.",
  slides: [
    {
      title: "Should have: o'tgan xato va afsus",
      blocks: [
        { t: 'p', md: "O'tgan zamondagi voqeaga **hozir baho beramiz**: nima qilish kerak edi, nima qilmaslik kerak edi. Buning uchun **modal + have + V3** ishlatiladi. Bu qolip l4 dagi taxmin modallari bilan o'xshash, lekin ma'nosi boshqa: bu yerda **taxmin emas, baho**." },
        { t: 'table', head: ['Qolip', "Ma'nosi", 'Misol'], speak: [2], rows: [
          ['should have + V3', "qilish kerak edi (lekin qilinmadi)", "You should have called me."],
          ['ought to have + V3', "xuddi shu, biroz rasmiyroq", "We ought to have left earlier."],
          ["shouldn't have + V3", "qilmaslik kerak edi (lekin qilindi)", "I shouldn't have said that."],
          ['could have + V3', "imkoniyat bor edi, lekin foydalanilmadi", "You could have asked for help."],
        ] },
        { t: 'tip', tone: 'warn', md: "**Ikki yo'nalish:** *should have done* = qilinmagan. *shouldn't have done* = qilingan. Ikkalasida ham real voqea teskari. Shuningdek: *You must have called* — bu taxmin (*sen qo'ng'iroq qilgan bo'lsang kerak*), tanqid emas." },
        { t: 'check', ex: { k: 'choice', q: "Men ertalab uxlab qoldim va kechikdim. Afsus: ___ the alarm.", opts: ["I should have set", "I must have set", "I can't have set", "I should set"], a: 0, why: "O'tgan zamondagi afsus: **should have + V3**. *must have* — taxmin." } },
        { t: 'check', ex: { k: 'fill', q: "You ___ have told me earlier! (menga oldinroq aytishing kerak edi)", a: ['should', 'ought to', 'could'], hint: 'tanqid', why: "**should / ought to / could have + V3**: o'tgan zamondagi tanqid." } },
      ],
    },
    {
      title: "Needn't have yoki didn't need to?",
      blocks: [
        { t: 'p', md: "Ikkalasi ham *kerak emas edi* degani, lekin **bir narsada farq qiladi: ish bajarilganmi yoki yo'qmi**." },
        { t: 'examples', items: [
          { en: "I needn't have brought an umbrella. It didn't rain.", uz: "Soyabon olib kelishim shart emas ekan. Yomg'ir yog'madi.", note: "**needn't have + V3** — qilindi, lekin keraksiz bo'lib chiqdi." },
          { en: "I didn't need to bring an umbrella, so I left it at home.", uz: "Soyabon olib kelishim shart emas edi, shuning uchun uyda qoldirdim.", note: "**didn't need to + fe'l** — kerak emas edi, odatda qilinmagan." },
          { en: "You didn't need to wait, but you did. Thanks!", uz: "Kutishing shart emas edi, lekin kutding. Rahmat!", note: "**didn't need to** — bajarilgani ham mumkin, kontekstdan bilinadi." },
          { en: "She needn't have worried; the results were excellent.", uz: "Xavotir olishi shart emas ekan, natijalar ajoyib chiqdi.", note: "**needn't have worried** — xavotir oldi, behuda." },
        ] },
        { t: 'tip', tone: 'info', md: "**Oddiy qoida:** *needn't have + V3* = *qildim, behuda ekan*. *didn't need to + fe'l* = *kerak emas edi*, ko'pincha qilmaganman. Ikkalasi ham ba'zan bir xil ma'noda ishlatiladi (*I didn't need to go* ham *bordim* degani bo'lishi mumkin), shuning uchun **needn't have** aniqroq." },
        { t: 'check', ex: { k: 'choice', q: "We ___ rushed to the airport. The flight had been delayed by three hours. (Biz shoshildik.)", opts: ["needn't have", "didn't need to", "mustn't have", "couldn't have"], a: 0, why: "Shoshildik va behuda bo'ldi → **needn't have + V3** (*rushed*). *didn't need to* dan keyin V1 keladi." } },
        { t: 'check', ex: { k: 'choice', q: "The flight was cancelled, so we ___ go to the airport. (Biz bormadik.)", opts: ["didn't need to", "needn't have", "shouldn't have", "mustn't have"], a: 0, why: "Bormadik, kerak ham emas edi → **didn't need to + V1**." } },
      ],
    },
    {
      title: "Tanqid ohangi va tipik xatolar",
      blocks: [
        { t: 'compare',
          good: { title: "Muloyimroq tanqid", items: ["It might have been better to check first.", "I wish you'd told me earlier.", "You could have let me know, you know."] },
          bad: { title: "Qattiq tanqid", items: ["You should have known better!", "You ought to have been more careful!", "How could you have forgotten?"] } },
        { t: 'p', md: "O'z xatongiz haqida **should have** tabiiy (*I should have listened*). Boshqaga aytganda esa ohangga e'tibor bering: qattiq tanqid munosabatlarni buzishi mumkin. Shart gap bilan birlashtirsangiz, afsus yanada aniq bo'ladi: *If I had listened, I wouldn't be in this mess now* (l1, aralash)." },
        { t: 'compare',
          good: { title: "To'g'ri", items: ["You should have told me.", "I needn't have bought it.", "I shouldn't have eaten so much.", "I should have called him."] },
          bad: { title: "Xato (o'zbekchadan so'zma-so'z)", items: ["You should told me.", "I needn't to have bought it.", "I shouldn't ate so much.", "I must have called him. (kerak edi degan ma'noda)"] } },
        { t: 'check', ex: { k: 'fix', wrong: "You should told me the truth.", a: ["You should have told me the truth.", "You should've told me the truth."], why: "**should + have + V3**: *have* unutilmasin." } },
        { t: 'check', ex: { k: 'fix', wrong: "I needn't to have gone there.", a: ["I needn't have gone there.", "I need not have gone there."], why: "**needn't** — modal fe'l, keyin **to** yo'q." } },
        { t: 'check', ex: { k: 'fix', wrong: "I must have called him earlier, but I forgot.", a: ["I should have called him earlier, but I forgot.", "I ought to have called him earlier, but I forgot.", "I should've called him earlier, but I forgot."], why: "*Kerak edi (lekin qilmadim)* → **should have**. *must have* — taxmin." } },
      ],
    },
    {
      title: "O'qing va dialog",
      blocks: [
        { t: 'text', title: 'In hindsight', voice: 'emma', en: "When I started my first business, I made several mistakes. I should have written a plan, but I was too impatient. I spent a lot of money on a shop window that nobody noticed. I needn't have paid so much for it. A friend told me I could have started online first, and she was right. In retrospect, my biggest mistake was not asking for advice. Many people learn the hard way, and I was no different. If I had listened to my accountant, I wouldn't be repaying a loan now. Still, I don't see it as a wasted effort. That missed opportunity taught me to plan carefully, and I would not change what I learnt.", uz: "Birinchi biznesimni boshlaganimda bir necha xato qildim. Reja yozishim kerak edi, lekin sabrsiz edim. Hech kim e'tibor bermagan vitrinaga ko'p pul sarfladim. Buncha pul to'lashim shart emas ekan. Do'stim menga avval onlayn boshlashim mumkin edi, dedi va u haq edi. Orqaga qarab aytsam, eng katta xatom maslahat so'ramaslik edi. Ko'pchilik achchiq tajriba orqali o'rganadi, men ham shunday edim. Buxgalterimni tinglaganimda edi, hozir qarz to'lamasdim. Shunday bo'lsa ham, buni behuda urinish deb hisoblamayman. O'sha boy berilgan imkoniyat menga ehtiyotkorlik bilan rejalashtirishni o'rgatdi va men o'rganganlarimni o'zgartirmasdim." },
        { t: 'check', ex: { k: 'tf', q: "The speaker thinks she paid too much for the shop window.", a: true, why: "*I needn't have paid so much for it.*" } },
        { t: 'dialog', lines: [
          { who: 'Oliver', en: "Mia, you look upset. What happened?", uz: "Mia, xafa ko'rinasan. Nima bo'ldi?" },
          { who: 'Mia', en: "I missed my train. I should have left home earlier.", uz: "Poyezddan kech qoldim. Uydan oldinroq chiqishim kerak edi." },
          { who: 'Oliver', en: "You could have called me. I would have given you a lift.", uz: "Menga qo'ng'iroq qilishing mumkin edi. Men seni olib borgan bo'lardim." },
          { who: 'Mia', en: "I know, I shouldn't have been so proud. And I needn't have rushed to the station, because the train was late anyway.", uz: "Bilaman, bunchalik mag'rur bo'lmasligim kerak edi. Stansiyaga shoshilishim ham shart emas ekan, chunki poyezd baribir kechikdi." },
          { who: 'Oliver', en: "Typical! If you had waited at home, you wouldn't be standing here now.", uz: "Odatdagidek! Uyda kutsang edi, hozir bu yerda turmasding." },
          { who: 'Mia', en: "Thanks, that really helps.", uz: "Rahmat, bu juda yordam beryapti." },
        ] },
        { t: 'check', ex: { k: 'choice', q: "What did Mia do that was unnecessary?", opts: ["She rushed to the station.", "She called Oliver.", "She left home early.", "She waited at home."], a: 0, why: "*I needn't have rushed to the station, because the train was late.*" } },
      ],
    },
  ],
  words: [
    { en: 'hindsight', uz: "o'tgan voqeani keyin tushunish", ipa: 'ˈhaɪndsaɪt', pos: 'noun', ex: 'With hindsight, the decision was clearly wrong.', exUz: "Keyin qarasak, qaror aniq noto'g'ri edi." },
    { en: 'in retrospect', uz: "orqaga qarab, keyin o'ylab", ipa: 'ɪn ˈretrəspekt', pos: 'phrase', ex: 'In retrospect, we should have accepted the first offer.', exUz: "Orqaga qarab, birinchi taklifni qabul qilishimiz kerak edi." },
    { en: 'missed opportunity', uz: "boy berilgan imkoniyat", ipa: 'mɪst ˌɒpəˈtjuːnəti', pos: 'noun', ex: 'Not applying for the scholarship was a missed opportunity.', exUz: "Stipendiyaga ariza topshirmaslik boy berilgan imkoniyat edi." },
    { en: 'needlessly', uz: "keraksiz, behuda", ipa: 'ˈniːdləsli', pos: 'adv', ex: 'She worried needlessly about the exam.', exUz: "U imtihon haqida behuda xavotir oldi." },
    { en: 'learn the hard way', uz: "achchiq tajriba orqali o'rganmoq", ipa: 'lɜːn ðə hɑːd weɪ', pos: 'phrase', ex: 'He learnt the hard way that contracts must be read carefully.', exUz: "U shartnomalarni diqqat bilan o'qish kerakligini achchiq tajribada bildi." },
  ],
  practice: [
    { k: 'match', pairs: [['hindsight', "o'tgan voqeani keyin tushunish"], ['missed opportunity', 'boy berilgan imkoniyat'], ['needlessly', 'behuda'], ['learn the hard way', "achchiq tajriba orqali o'rganmoq"], ['in retrospect', "orqaga qarab"]] },
    { k: 'choice', q: "I took a taxi, but the bus came at once. I ___ a taxi.", opts: ["needn't have taken", "needn't take", "shouldn't take", "mustn't have taken"], a: 0, why: "Taksi olindi, behuda bo'ldi → **needn't have + V3**." },
    { k: 'fill', q: "He drove too fast. He ___ have driven so fast.", a: ["shouldn't", 'should not', "oughtn't to", 'ought not to'], hint: 'qilmaslik kerak edi', uz: "U juda tez haydadi. Bunchalik tez haydamasligi kerak edi.", why: "**shouldn't have + V3**: qilingan, lekin noto'g'ri bo'lgan ish." },
    { k: 'listen', say: "You should have told me earlier.", opts: ["You should have told me earlier.", "You should tell me earlier.", "You must have told me earlier.", "You shouldn't have told me earlier."], a: 0 },
    { k: 'order', uz: "Men bunchalik ko'p yemasligim kerak edi.", words: ['I', "shouldn't", 'have', 'eaten', 'so', 'much.'], extra: ['should', 'ate'], alt: [['I', 'should', 'not', 'have', 'eaten', 'so', 'much.']], why: "**shouldn't have + V3**." },
    { k: 'fix', wrong: "You should told me about the problem.", a: ["You should have told me about the problem.", "You should've told me about the problem."], why: "**should + have + V3**." },
    { k: 'fix', wrong: "I needn't to have paid so much.", a: ["I needn't have paid so much.", "I need not have paid so much."], why: "**needn't have + V3**, *to* yo'q." },
    { k: 'tf', q: "*I needn't have gone* = Men bormadim.", a: false, why: "**needn't have gone** — men bordim, lekin bu keraksiz bo'lib chiqdi." },
    { k: 'choice', q: "Qaysi gap qilinmagan imkoniyat haqida?", opts: ["You could have applied for the job.", "You can apply for the job.", "You couldn't apply for the job.", "You apply for the job."], a: 0, why: "**could have + V3** — imkoniyat bor edi, foydalanilmadi." },
    { k: 'translate', uz: "Uni tinglashim kerak edi.", a: ['I should have listened to him.', 'I ought to have listened to him.', "I should've listened to him.", 'I should have listened to her.', 'I ought to have listened to her.', "I should've listened to her."], why: "**should / ought to have + V3**." },
    { k: 'dictation', say: "I needn't have worried about the exam.", a: ["I needn't have worried about the exam.", 'I need not have worried about the exam.'], uz: "Imtihon haqida xavotir olishim shart emas ekan." },
    { k: 'translate', uz: "Orqaga qarab, men bu imkoniyatni boy bermasligim kerak edi.", a: ["In retrospect, I shouldn't have missed this opportunity.", "In hindsight, I shouldn't have missed this opportunity.", "In retrospect, I should not have missed this opportunity.", "In hindsight, I should not have missed this opportunity."], why: "**In retrospect / hindsight, I shouldn't have + V3**." },
    { k: 'choice', q: "Qaysi gap shart gap bilan afsusni to'g'ri birlashtirgan?", opts: ["If I had saved more, I wouldn't be worried now.", "If I would save more, I wouldn't be worried now.", "If I had saved more, I wouldn't have been worried now.", "If I saved more, I wouldn't have worried now."], a: 0, why: "Aralash: **had + V3** (o'tgan sabab) + **would + fe'l** (hozirgi natija)." },
    { k: 'speak', say: "I should have asked for advice before I started.", uz: "Boshlashdan oldin maslahat so'rashim kerak edi." },
  ],
  quiz: [
    { k: 'choice', q: "She worried about the results, but they were excellent. She ___ worried.", opts: ["needn't have", "didn't need to have", "shouldn't", "can't have"], a: 0, why: "Xavotir oldi va behuda bo'ldi → **needn't have + V3**." },
    { k: 'choice', q: "Boy berilgan imkoniyat haqida: \"You ___ the scholarship. It was so easy!\"", opts: ["could have won", "can win", "must win", "should won"], a: 0, why: "**could have + V3** — imkoniyat bor edi." },
    { k: 'fill', q: "I ___ have shouted at her. I was wrong.", a: ["shouldn't", 'should not', 'oughtn\'t to', 'ought not to'], uz: "Unga baqirmasligim kerak edi. Men noto'g'ri edim.", why: "**shouldn't have + V3**." },
    { k: 'fix', wrong: "We should to have left earlier.", a: ["We should have left earlier.", "We ought to have left earlier.", "We should've left earlier."], why: "**should** dan keyin **to** yo'q; **ought to** da bor." },
    { k: 'order', uz: "Bunchalik pul to'lashim shart emas ekan.", words: ['I', "needn't", 'have', 'paid', 'so', 'much.'], extra: ['paying', 'pay'], alt: [['I', 'need', 'not', 'have', 'paid', 'so', 'much.']], why: "**needn't have + V3**." },
    { k: 'listen', say: "If I had listened, I wouldn't be in this mess now.", opts: ["If I had listened, I wouldn't be in this mess now.", "If I listened, I wouldn't be in this mess now.", "If I had listened, I wouldn't have been in this mess now.", "If I would listen, I wouldn't be in this mess now."], a: 0 },
    { k: 'tf', q: "*You must have called him* — bu tanqid: qo'ng'iroq qilmading.", a: false, why: "**must have called** — taxmin (*qo'ng'iroq qilgan bo'lsang kerak*). Tanqid uchun **should have**." },
    { k: 'translate', uz: "Siz menga oldinroq aytishingiz mumkin edi.", a: ['You could have told me earlier.', 'You could have told me sooner.', "You could've told me earlier.", "You could've told me sooner."], why: "**could have + V3**." },
  ],
  summary: [
    "**Should have / ought to have + V3** — qilinmagan ish (afsus, tanqid); **shouldn't have + V3** — qilingan, lekin noto'g'ri ish.",
    "**Could have + V3** — imkoniyat bor edi, ishlatilmadi. **Must have** esa tanqid emas, taxmin.",
    "**Needn't have + V3** — qildim, behuda ekan; **didn't need to + fe'l** — kerak emas edi (odatda qilinmagan).",
    "Boshqaga qattiq tanqid qilmang: *It might have been better to… / I wish you'd…* muloyimroq. O'z xatongiz uchun *should have* tabiiy.",
    "Yangi so'zlar: **hindsight, in retrospect, missed opportunity, needlessly, learn the hard way**.",
  ],
  homework: "O'z hayotingizdan 3 ta afsus yozing: bitta *I should have…*, bitta *I shouldn't have…*, bitta *I needn't have…*. Keyin bittasini **shart gap** bilan to'ldiring: *If I had…, I wouldn't be… now.*",
};

export default lesson;
