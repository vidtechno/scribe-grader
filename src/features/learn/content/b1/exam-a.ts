import type { Exercise } from '../../types';
import type { ExamItem } from '../beginner/exam';

const g = (topic: string, ex: Exercise): ExamItem => ({ skill: 'grammar', topic, ex });
const v = (topic: string, ex: Exercise): ExamItem => ({ skill: 'vocabulary', topic, ex });

/**
 * Grammar and vocabulary items of the Intermediate (B1) final exam (reading, listening and writing are in exam-b.ts).
 * Topics are lessons of units u18–u23 that teach the tested point.
 */
export const INTERMEDIATE_EXAM_A: ExamItem[] = [
  // ---------- Grammar ----------
  // u18: Present Perfect family
  g('u18-l12', { k: 'choice', q: "Sara isn't in the office. She ___ to the bank and will be back soon.", opts: ['has gone', 'has been', 'was', 'had been'], a: 0, why: "**have gone** — ketgan va hali qaytmagan; **have been** — borib qaytgan. Sara hozir yo'q, demak *has gone*." }),
  g('u18-l2', { k: 'fix', wrong: 'I am living in this city since 2015.', a: ['I have lived in this city since 2015.', 'I have been living in this city since 2015.', "I've lived in this city since 2015.", "I've been living in this city since 2015."], hint: 'since bilan', why: "**since** (2015 dan beri) — o'tmishdan hozirgacha davom etgan holat: **Present Perfect** (yoki Perfect Continuous), *am living* emas." }),
  g('u18-l3', { k: 'choice', q: "I'm tired because I ___ since six o'clock this morning.", opts: ['have been working', 'worked', 'work', 'am working'], a: 0, why: "Hozirgacha davom etgan jarayon va uning oqibati: **Present Perfect Continuous** — *have been working*." }),
  g('u18-l4', { k: 'choice', q: 'I ___ my keys yesterday, but I found them this morning.', opts: ['lost', 'have lost', 'have been losing', 'am losing'], a: 0, why: "**yesterday** — aniq o'tgan vaqt, shuning uchun **Past Simple**: *lost*. Present Perfect aniq vaqt bilan ishlatilmaydi." }),
  g('u18-l6', { k: 'fill', q: "I grew up in a village, so I am not ___ to living in a big noisy city yet.", a: ['used', 'accustomed'], hint: "o'rganmagan", why: "**be used to** + fe'l-ing — biror narsaga o'rganib qolgan bo'lmoq: *I am not **used** to living…*" }),

  // u19: Past Perfect and reported speech
  g('u19-l1', { k: 'choice', q: 'When we got to the cinema, the film ___ .', opts: ['had already started', 'has already started', 'was already starting', 'would already start'], a: 0, why: "Boshqa o'tgan voqeadan (*we got*) oldin tugagan ish — **Past Perfect**: *had already started*." }),
  g('u19-l2', { k: 'fill', q: 'I was walking home when I realised I ___ my wallet at the office.', a: ['had left', "'d left"], hint: 'Past Perfect', why: "Tushunishdan oldin sodir bo'lgan ish — **had** + V3: *had left*." }),
  g('u19-l3', { k: 'fix', wrong: 'She told that she was busy.', a: ['She told me that she was busy.', 'She said that she was busy.', 'She said she was busy.', 'She told me she was busy.'], hint: 'told yoki said', why: "**tell** dan keyin kimga aytilgani kerak (*told me*); kimga ko'rsatilmasa **said** ishlatiladi." }),
  g('u19-l4', { k: 'fix', wrong: 'She asked me where did I work.', a: ['She asked me where I worked.', 'She asked me where I was working.'], hint: "so'z tartibi", why: "Ko'chirma savolda to'g'ri so'z tartibi (**ega + fe'l**), *did* kerak emas va zamon siljiydi: *where I worked*." }),
  g('u19-l13', { k: 'choice', q: 'He ___ stealing the money, but nobody believed him.', opts: ['denied', 'refused', 'suggested', 'promised'], a: 0, why: "**deny** + fe'l-ing — inkor qilmoq. **refuse / promise** dan keyin *to* + fe'l keladi va ma'nosi boshqa." }),

  // u20: conditionals, wish, deduction
  g('u20-l1', { k: 'choice', q: 'If I ___ more free time, I would learn the piano.', opts: ['had', 'have', 'will have', 'would have'], a: 0, why: "**Second conditional**: if + Past Simple, **would** + fe'l. *If I **had**…*" }),
  g('u20-l12', { k: 'fix', wrong: "I wish I didn't buy this phone.", a: ["I wish I hadn't bought this phone.", 'I wish I had not bought this phone.'], hint: "o'tgan pushaymonlik", why: "O'tgan zamon pushaymonligi: **wish** + **Past Perfect** (*hadn't bought*)." }),
  g('u20-l2', { k: 'choice', q: 'You can borrow my car ___ you drive carefully.', opts: ['as long as', 'unless', 'although', 'in case'], a: 0, why: "Shart bildiruvchi **as long as** (… bo'lsagina). **unless** — «agar … bo'lmasa»." }),
  g('u20-l3', { k: 'fix', wrong: 'If I would have known, I would have helped you.', a: ['If I had known, I would have helped you.', "If I'd known, I would have helped you.", "If I had known, I'd have helped you.", "If I'd known, I'd have helped you."], hint: 'if dan keyin', why: "**Third conditional**: if + **Past Perfect**, would have + V3. *If I **had known**…*; if dan keyin *would have* kelmaydi." }),
  g('u20-l4', { k: 'choice', q: "That ___ be Karim at the door. He is in Samarkand this week.", opts: ["can't", 'must', 'might', 'should'], a: 0, why: "Aniq imkonsiz deb o'ylasak: **can't** (bo'lishi mumkin emas). **must** — aniq shunday, deb o'ylash." }),
  g('u20-l13', { k: 'fill', q: 'You never told me about the meeting. You ___ told me earlier!', a: ['should have', 'ought to have', 'could have'], hint: 'tanqid', why: "O'tgan zamondagi tanqid: **should have / ought to have / could have** + V3." }),

  // u21: passive, relative clauses, articles
  g('u21-l1', { k: 'choice', q: 'This bridge ___ in 1895.', opts: ['was built', 'built', 'is built', 'has built'], a: 0, why: "O'tgan zamon majhul nisbat: **was / were + V3** — *was built*." }),
  g('u21-l2', { k: 'choice', q: 'The woman ___ car was stolen called the police.', opts: ['whose', 'who', 'which', 'that'], a: 0, why: "Egalikni bildiradi: **whose** + ot (*whose car* — mashinasi)." }),
  g('u21-l3', { k: 'choice', q: 'My brother, ___ lives in Dubai, is visiting us next week.', opts: ['who', 'that', 'whose', 'which'], a: 0, why: "Vergulli (non-defining) gapda odam uchun **who**; bunda **that** ishlatilmaydi." }),
  g('u21-l4', { k: 'fix', wrong: 'She gave me an advice about the job.', a: ['She gave me some advice about the job.', 'She gave me advice about the job.', 'She gave me a piece of advice about the job.'], hint: 'advice sanalmaydi', why: "**advice** — sanalmaydigan ot: *an advice* bo'lmaydi; *some advice* yoki *a piece of advice*." }),
  g('u21-l6', { k: 'fix', wrong: 'Could you tell me where is the station?', a: ['Could you tell me where the station is?'], hint: 'xushmuomala savol', why: "Xushmuomala (indirect) savolda to'g'ri tartib: **where + ega + fe'l** — *where the station is*." }),

  // u22: gerund/infinitive, purpose, future, comparing
  g('u22-l1', { k: 'fix', wrong: 'He decided going to university abroad.', a: ['He decided to go to university abroad.'], hint: 'decide dan keyin', why: "**decide** dan keyin **to** + fe'l: *decided to go*." }),
  g('u22-l12', { k: 'choice', q: "I'm saving money ___ I can buy a car next year.", opts: ['so that', 'in order', 'for', 'to'], a: 0, why: "Maqsad + to'liq gap (I can buy): **so that**. *In order* faqat *to* bilan, *to* faqat fe'l bilan keladi." }),
  g('u22-l2', { k: 'choice', q: "'The phone is ringing.' 'I ___ it!'", opts: ["'ll get", 'am getting', 'get', 'got'], a: 0, why: "Gap paytida qabul qilingan qaror: **will** (*I'll get*)." }),
  g('u22-l3', { k: 'fill', q: 'By the end of this year, I ___ in this company for ten years.', a: ['will have worked', "'ll have worked", 'will have been working', "'ll have been working"], hint: 'Future Perfect', why: "Kelajakdagi muayyan vaqtgacha to'plangan davomiylik: **will have** + V3 (*will have worked*)." }),
  g('u22-l4', { k: 'choice', q: 'The ___ you practise, the better you speak.', opts: ['more', 'most', 'much', 'better'], a: 0, why: "**The more … the better …** — ikkita o'zaro bog'liq o'zgarish." }),

  // u23: linking and typical mistakes
  g('u23-l12', { k: 'choice', q: 'The food was cheap and delicious. ___ , the staff were very friendly.', opts: ['In addition', 'However', 'Therefore', 'Instead'], a: 0, why: "Yana bir ijobiy fikrni qo'shish: **In addition**. **However** — qarama-qarshilik, **Therefore** — natija." }),
  g('u23-l13', { k: 'fix', wrong: 'I am agree with you.', a: ['I agree with you.'], hint: "agree — fe'l", why: "**agree** — o'zi fe'l, *am* kerak emas: *I agree*. (O'zbekchadagi «roziman» ta'siri.)" }),

  // ---------- Vocabulary ----------
  // u18
  v('u18-l5', { k: 'match', pairs: [['graduate', 'universitetni bitirmoq'], ['retire', 'nafaqaga chiqmoq'], ['get married', 'turmush qurmoq'], ['move house', "yangi uyga ko'chmoq"]] }),
  v('u18-l5', { k: 'choice', q: 'After forty years as a teacher, my grandfather decided to ___ last year.', opts: ['retire', 'graduate', 'propose', 'divorce'], a: 0, why: "Ishni tark etib nafaqaga chiqmoq — **retire**." }),

  // u19
  v('u19-l5', { k: 'match', pairs: [['headline', 'sarlavha'], ['reporter', 'muxbir'], ['broadcast', 'efirga uzatish'], ['article', 'maqola']] }),
  v('u19-l5', { k: 'choice', q: 'A ___ writes news stories for a newspaper or a website.', opts: ['journalist', 'landmark', 'refund', 'suburb'], a: 0, why: "Yangilik yozuvchi kasb egasi — **journalist**." }),

  v('u19-l6', { k: 'choice', q: "We waited for hours, and ___ the doctor finally called our name.", opts: ['eventually', 'meanwhile', 'suddenly', 'instead'], a: 0, why: "Uzoq kutishdan keyin nihoyat — **eventually**. **meanwhile** — shu orada." }),

  // u20
  v('u20-l5', { k: 'match', pairs: [['ambition', 'katta maqsad'], ['jealous', 'rashkchi, hasadgo\'y'], ['anxious', 'xavotirli'], ['grateful', 'minnatdor']] }),
  v('u20-l5', { k: 'choice', q: "She felt ___ about the exam results, so she couldn't sleep.", opts: ['anxious', 'grateful', 'proud', 'generous'], a: 0, why: "Xavotirli bo'lmoq — **anxious**; uxlay olmaslik shuni bildiradi." }),
  v('u20-l5', { k: 'fill', q: 'My biggest ___ is to start my own company.', a: ['ambition', 'dream', 'goal', 'aim'], hint: 'maqsad', why: "Katta orzu yoki maqsad — **ambition**." }),

  // u21
  v('u21-l5', { k: 'match', pairs: [['landmark', 'mashhur belgi, diqqatga sazovor joy'], ['suburb', 'shahar chekkasi'], ['accommodation', 'turar joy'], ['sightseeing', "diqqatga sazovor joylarni ko'rish"]] }),
  v('u21-l5', { k: 'choice', q: 'The Registan is a famous ___ that attracts thousands of tourists.', opts: ['landmark', 'suburb', 'bill', 'crowd'], a: 0, why: "Shaharning taniqli belgisi — **landmark**." }),
  v('u21-l5', { k: 'fill', q: 'Many people work in the city centre but live in the ___ .', a: ['suburbs', 'suburb'], hint: 'shahar chekkasi', why: "Shahar chekkasidagi turar joy mahallalari — **suburbs**." }),

  // u22
  v('u22-l5', { k: 'match', pairs: [['deadline', 'oxirgi muddat'], ['colleague', 'hamkasb'], ['salary', 'oylik maosh'], ['promotion', "lavozimda ko'tarilish"]] }),
  v('u22-l5', { k: 'choice', q: 'A ___ is a certificate or degree you get after finishing a course.', opts: ['qualification', 'deadline', 'colleague', 'shift'], a: 0, why: "Kurs yoki o'qishni tugatganda olinadigan malaka — **qualification**." }),
  v('u22-l5', { k: 'fill', q: "I'd like to ___ for the position of sales manager.", a: ['apply'], hint: 'ariza topshirmoq', why: "Ish o'rniga ariza bermoq — **apply for**." }),
  v('u22-l6', { k: 'match', pairs: [['look up', "(so'zni) qidirib topmoq"], ['carry on', 'davom ettirmoq'], ['put off', 'kechiktirmoq'], ['figure out', 'tushunib yetmoq']] }),
  v('u22-l6', { k: 'choice', q: 'We had to ___ the meeting because the manager was ill.', opts: ['put off', 'put on', 'take up', 'look after'], a: 0, why: "Kechiktirmoq — **put off**." }),
  v('u22-l6', { k: 'choice', q: 'You should ___ your files regularly in case your computer breaks.', opts: ['back up', 'look up', 'put up', 'break up'], a: 0, why: "Fayllarning zaxira nusxasini saqlamoq — **back up**." }),

  // u23
  v('u23-l5', { k: 'match', pairs: [['pollution', 'ifloslanish'], ['recycle', 'qayta ishlamoq'], ['charity', 'xayriya tashkiloti'], ['lifestyle', 'turmush tarzi']] }),
  v('u23-l5', { k: 'choice', q: 'Doctors say a healthy ___ includes sport and a good diet.', opts: ['lifestyle', 'pollution', 'deadline', 'landmark'], a: 0, why: "Hayot tarzi — **lifestyle**." }),
  v('u23-l5', { k: 'fill', q: 'The government wants to reduce ___ so that more people can find jobs.', a: ['unemployment'], hint: 'ishsizlik', why: "Ishsizlik — **unemployment**." }),
];

/** Unscored speaking practice shown after the exam result. */
export const INTERMEDIATE_SPEAKING: Exercise[] = [
  { k: 'speak', say: "I have been learning English for two years, and I have just started preparing for an exam. If I had more free time, I would study every day.", uz: "Men ikki yildan beri ingliz tilini o'rganyapman va endigina imtihonga tayyorlana boshladim. Bo'sh vaqtim ko'proq bo'lsa, har kuni o'qigan bo'lardim." },
  { k: 'speak', say: "My friend told me that she had missed the last bus, so she had to walk home. She said she would never travel without checking the timetable again.", uz: "Do'stim oxirgi avtobusdan kechikib qolganini va uyga piyoda borishga majbur bo'lganini aytdi. U endi hech qachon jadvalni tekshirmay sayohat qilmasligini aytdi." },
  { k: 'speak', say: "In my opinion, technology has made our lives easier, but it can also be a distraction. On the one hand, we can work from anywhere. However, we should not spend too much time on our phones.", uz: "Fikrimcha, texnologiya hayotimizni yengillashtirdi, lekin chalg'itishi ham mumkin. Bir tomondan, istalgan joydan ishlay olamiz. Biroq telefonda haddan tashqari ko'p vaqt o'tkazmaslik kerak." },
];
