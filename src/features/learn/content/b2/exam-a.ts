import type { Exercise } from '../../types';
import type { ExamItem } from '../beginner/exam';

const g = (topic: string, ex: Exercise): ExamItem => ({ skill: 'grammar', topic, ex });
const v = (topic: string, ex: Exercise): ExamItem => ({ skill: 'vocabulary', topic, ex });

/**
 * Grammar and vocabulary items of the Upper-Intermediate (B2) final exam (reading, listening and writing are in
 * exam-b.ts). Topics are lessons of units u24–u30 that teach the tested point.
 */
export const UPPER_INTERMEDIATE_EXAM_A: ExamItem[] = [
  // ---------- Grammar ----------
  // u24: tenses, habits, future, stative verbs
  g('u24-l12', { k: 'choice', q: "I was exhausted when I got home because I ___ since five o'clock that morning.", opts: ['was working', 'have been working', 'had been working', 'worked'], a: 2, why: "O'tgan paytgacha davom etgan jarayon va uning natijasi (charchoq): **Past Perfect Continuous** — *had been working*. **since** bilan Past Simple / Past Continuous ishlatilmaydi." }),
  g('u24-l2', { k: 'fix', wrong: 'I have seen your sister yesterday at the market.', a: ['I saw your sister yesterday at the market.', 'I saw your sister at the market yesterday.'], hint: 'yesterday', why: "**yesterday** — aniq o'tgan vaqt, shuning uchun **Past Simple** (*saw*). **Present Perfect** aniq o'tgan vaqt bilan ishlatilmaydi." }),
  g('u24-l3', { k: 'fix', wrong: 'When I was little, I would have a red bicycle, and I loved it.', a: ['When I was little, I used to have a red bicycle, and I loved it.', 'When I was little, I had a red bicycle, and I loved it.'], hint: 'have — holat fe\'li', why: "**would** faqat takrorlanuvchi odatlar uchun; **have** (egalik) — holat fe'li, shuning uchun *used to have* yoki oddiy *had* kerak." }),
  g('u24-l4', { k: 'choice', q: "Please don't call me at nine tomorrow. I ___ a presentation to the board then.", opts: ['will have given', 'have given', 'would give', 'will be giving'], a: 3, why: "Kelajakdagi aniq paytda davom etayotgan ish — **Future Continuous**: *will be giving*. **will have given** — shu paytgacha tugagan ish." }),
  g('u24-l13', { k: 'choice', q: 'Be quiet, please! We ___ an important meeting at the moment.', opts: ['are having', 'have', 'have had', 'had'], a: 0, why: "**have** «o'tkazmoq» ma'nosida (have a meeting, have lunch) — harakat fe'li va davomiy zamonda ishlatiladi: *are having*. Egalik ma'nosidagi *have* davomiy bo'lmaydi." }),

  // u25: conditionals, wishes, deduction
  g('u25-l1', { k: 'choice', q: 'If I ___ the job offer in Dubai last year, I would be living there now.', opts: ['had accepted', 'accepted', 'would have accepted', 'have accepted'], a: 0, why: "**Aralash shartli gap**: o'tgan sabab (**if + Past Perfect**) va hozirgi natija (**would + fe'l**). *If I **had accepted**…, I would be living…*" }),
  g('u25-l2', { k: 'fix', wrong: 'I wish you will stop interrupting me when I speak.', a: ['I wish you would stop interrupting me when I speak.', "I wish you'd stop interrupting me when I speak."], hint: 'xafagarchilik', why: "Boshqa odamning odatidan norozilik: **wish + would** (*I wish you would stop*). **wish** dan keyin *will* kelmaydi." }),
  g('u25-l4', { k: 'choice', q: "Karim ___ in the library yesterday afternoon. I was there all day and I never saw him.", opts: ["mustn't have been", "can't have been", 'must have been', "needn't have been"], a: 1, why: "O'tmish haqida aniq inkor xulosa: **can't have been** (yoki *couldn't have been*). **mustn't have been** deduction uchun ishlatilmaydi; **must have been** — aniq shunday bo'lgan, deb xulosa." }),
  g('u25-l3', { k: 'choice', q: "It's high time you ___ looking for a new job. You have been unemployed for months.", opts: ['will start', 'start', 'started', 'are starting'], a: 2, why: "**It's (high) time + Past Simple** — hozirgi vaqt uchun, lekin fe'l o'tgan zamonda keladi: *It's time you **started***." }),

  // u26: passive, reporting, causative
  g('u26-l1', { k: 'choice', q: 'Please use the side entrance. The main door ___ at the moment.', opts: ['is repaired', 'is repairing', 'has been repairing', 'is being repaired'], a: 3, why: "Hozir davom etayotgan ish, bajaruvchi noma'lum: **Present Continuous Passive** — *is being repaired*." }),
  g('u26-l2', { k: 'choice', q: 'Mr Rahimov is believed ___ the country last night.', opts: ['to have left', 'to leave', 'having left', 'that left'], a: 0, why: "**Reporting passive**: o'tgan voqea uchun **is believed + to have + V3** — *to have left*. *to leave* o'tgan voqeani bildirmaydi." }),
  g('u26-l3', { k: 'fix', wrong: 'Yesterday I cut my hair at the new salon.', a: ['Yesterday I had my hair cut at the new salon.', 'Yesterday I got my hair cut at the new salon.', 'I had my hair cut at the new salon yesterday.', 'I got my hair cut at the new salon yesterday.'], hint: 'have something done', why: "Ishni boshqa odam bajargan bo'lsa, **causative**: **have / get + narsa + V3** (*had my hair cut*). *I cut my hair* — o'zim kesdim, degani." }),
  g('u26-l13', { k: 'choice', q: 'The manager accused him ___ the confidential files.', opts: ['for deleting', 'to delete', 'of deleting', 'that he deleted'], a: 2, why: "**accuse someone of** + fe'l-ing: *accused him **of deleting***. Boshqa predlog yoki *to* ishlatilmaydi." }),

  // u27: verb patterns, prepositions, obligation, nominalisation
  g('u27-l1', { k: 'choice', q: "I'm sure I locked the door. I clearly remember ___ it before I left.", opts: ['to lock', 'locking', 'lock', 'to be locking'], a: 1, why: "**remember + -ing** — o'tmishda qilgan ishni eslamoq; **remember + to** — qilish kerak bo'lgan ishni unutmaslik. Bu yerda o'tmishdagi ish: *locking*." }),
  g('u27-l12', { k: 'fix', wrong: 'We discussed about the new budget at the meeting.', a: ['We discussed the new budget at the meeting.', 'We talked about the new budget at the meeting.'], hint: 'discuss + predlog yo\'q', why: "**discuss** o'timli fe'l, predlog kerak emas: *discussed the budget*. (O'zbekchadagi «... haqida muhokama qilmoq» ta'siri; *talk about* esa to'g'ri.)" }),
  g('u27-l4', { k: 'choice', q: 'You ___ park here. It is a private car park, and drivers who do are fined.', opts: ["mustn't", "don't have to", "needn't", "don't need"], a: 0, why: "Taqiq: **mustn't** (mumkin emas). **don't have to / needn't** — shart emas, ya'ni ixtiyoriy." }),
  g('u27-l13', { k: 'choice', q: 'The rapid ___ of the city has created serious housing problems.', opts: ['grew', 'growth', 'grown', 'grow'], a: 1, why: "**Nominalisation**: rasmiy uslubda fe'l o'rniga ot ishlatiladi. *grow* → **growth**; *the growth of the city*. Artikl va sifatdan keyin ot kerak." }),

  // u28: emphasis, inversion, contrast, participles
  g('u28-l1', { k: 'fill', q: 'It was my sister ___ told me the news, not my brother.', a: ['who', 'that'], hint: 'it-cleft', why: "**It-cleft**: *It was + ta'kidlanayotgan qism + who / that + qolgan gap*. Odam uchun **who** yoki **that**." }),
  g('u28-l2', { k: 'choice', q: 'Hardly ___ the house when it began to rain.', opts: ['had we entered', 'we had entered', 'did we enter', 'we entered'], a: 0, why: "**Hardly** gap boshida kelsa, ega va yordamchi fe'l o'rin almashadi: **Hardly had we entered… when…** (*Past Perfect* inversiyasi)." }),
  g('u28-l3', { k: 'fix', wrong: 'Despite of the heavy rain, we went for a walk.', a: ['Despite the heavy rain, we went for a walk.', 'In spite of the heavy rain, we went for a walk.'], hint: 'despite / in spite of', why: "**despite** dan keyin *of* kelmaydi; **in spite of** bo'lsa *of* bilan. Ikkalasidan keyin ot yoki -ing keladi." }),
  g('u28-l13', { k: 'choice', q: '___ in the eighteenth century, the castle is now a museum.', opts: ['Built', 'Building', 'Having building', 'Being build'], a: 0, why: "Majhul ma'noli **past participle** gap: *Built in the eighteenth century* = qasr qurilgan (u qurilgan edi). *Building* — faol ma'no." }),

  // u29: comparison, quantifiers, so/such/enough
  g('u29-l2', { k: 'choice', q: 'A number of students ___ complained about the new timetable.', opts: ['have', 'has', 'is', 'are'], a: 0, why: "**a number of** + ko'plik ot — ko'plik fe'li: *have complained*. (**The number of** esa birlik fe'li talab qiladi.)" }),
  g('u29-l12', { k: 'choice', q: 'Cycling is ___ the cheapest way to get around the city.', opts: ['by far', 'far more', 'very', 'the most'], a: 0, why: "Orttirma darajani kuchaytirish: **by far the + superlative** — *by far the cheapest*. *very* superlative bilan ishlatilmaydi." }),
  g('u29-l13', { k: 'fix', wrong: "She isn't enough experienced for this position.", a: ["She isn't experienced enough for this position.", 'She is not experienced enough for this position.'], hint: 'enough o\'rni', why: "**enough** sifat yoki ravishdan **keyin** keladi: *experienced enough*; ot oldida esa oldin (*enough money*)." }),

  // u30: ellipsis, relative clauses, question tags
  g('u30-l2', { k: 'choice', q: "'Is it going to rain at the weekend?' 'I hope ___. We're planning to go hiking.'", opts: ['so', 'it', 'that', 'not'], a: 3, why: "Qisqa javobda **I hope so** (umid qilaman, shunday bo'ladi) yoki **I hope not** (umid qilamanki, yo'q). Yomg'ir yog'masligini istaymiz — *I hope **not***." }),
  g('u30-l3', { k: 'choice', q: 'The report was finished two days early, ___ surprised everyone.', opts: ['which', 'what', 'that', 'who'], a: 0, why: "Butun gapga ishora qiluvchi (non-defining) **which**: *…early, **which** surprised everyone*. Vergulli gapda *that* va *what* ishlatilmaydi." }),
  g('u30-l13', { k: 'choice', q: 'Nobody called while I was out, ___ ?', opts: ["didn't they", 'did they', 'did he', "didn't it"], a: 1, why: "**Nobody** ma'no jihatdan inkor, shuning uchun tag musbat: **did they**. *Nobody* uchun odatda ko'plik olmosh *they* ishlatiladi." }),
  g('u30-l3', { k: 'fix', wrong: 'The man which I spoke to was the manager.', a: ['The man who I spoke to was the manager.', 'The man that I spoke to was the manager.', 'The man whom I spoke to was the manager.', 'The man I spoke to was the manager.', 'The man to whom I spoke was the manager.'], hint: 'odam uchun', why: "Odam uchun **which** emas, **who / whom / that** (yoki olmoshsiz) ishlatiladi. Rasmiy: *to whom I spoke*." }),

  // ---------- Vocabulary ----------
  // u24
  v('u24-l5', { k: 'match', pairs: [['fluctuate', "tebranib turmoq, o'zgarib turmoq"], ['decline', 'pasaymoq, kamaymoq'], ['setback', "to'siq, orqaga ketish"], ['overtake', "quvib o'tmoq, o'zib ketmoq"]] }),
  v('u24-l5', { k: 'choice', q: 'There was a ___ rise in house prices last year, from £200,000 to £260,000.', opts: ['wide', 'sharp', 'tall', 'heavy'], a: 1, why: "Tez va katta o'sish — **a sharp rise** (kuchli kollokatsiya). *wide, tall, heavy* bu ot bilan kelmaydi." }),
  v('u24-l6', { k: 'choice', q: 'Some people prefer living in cities, ___ others love the quiet of the countryside.', opts: ['however', 'meanwhile', 'whereas', 'therefore'], a: 2, why: "Ikki qarama-qarshi fikrni bitta gapda bog'laydi: **whereas** (…, holbuki / aksincha). *however* alohida gapda vergul bilan keladi." }),

  // u25
  v('u25-l5', { k: 'match', pairs: [['reluctant', 'istamaydigan, ikkilanayotgan'], ['thrilled', 'juda hayajonlangan, xursand'], ['stubborn', "o'jar"], ['easy-going', 'murosasoz, xotirjam']] }),
  v('u25-l5', { k: 'choice', q: 'He was ___ to admit his mistake, so we had to ask him three times.', opts: ['thrilled', 'tolerant', 'ambitious', 'reluctant'], a: 3, why: "Biror ishni qilishni istamaslik — **reluctant to** + fe'l. Uch marta so'rashga to'g'ri kelgani shuni bildiradi." }),
  v('u25-l6', { k: 'choice', q: "I'd say the new plan will work ___ , but we still need to test it.", opts: ['at the extent', 'by some extent', 'to some extent', 'in some extend'], a: 2, why: "Fikrni yumshatish (hedging): **to some extent** — ma'lum darajada. Qolgan variantlar noto'g'ri predlog yoki imlo." }),

  // u26
  v('u26-l5', { k: 'match', pairs: [['bias', 'tarafkashlik'], ['censorship', 'senzura'], ['subscription', 'obuna'], ['breakthrough', "katta yutuq, kashfiyot"]] }),
  v('u26-l5', { k: 'choice', q: 'The video of the dancing dog ___ viral within a day and was watched ten million times.', opts: ['made', 'took', 'did', 'went'], a: 3, why: "Internetda tez tarqalmoq — **go viral**. Bu qat'iy kollokatsiya, boshqa fe'llar bilan ishlatilmaydi." }),
  v('u26-l5', { k: 'fill', q: 'The website blocked the article, and many readers complained about online ___ .', a: ['censorship'], hint: 'senzura', why: "Ma'lumotni cheklash yoki taqiqlash — **censorship**." }),

  // u27
  v('u27-l5', { k: 'match', pairs: [['workforce', 'ishchi kuchi'], ['entrepreneur', 'tadbirkor'], ['negotiate', 'muzokara olib bormoq'], ['supervisor', 'bevosita rahbar, nazoratchi']] }),
  v('u27-l5', { k: 'choice', q: 'We worked all weekend in order to ___ the deadline.', opts: ['win', 'take', 'meet', 'catch'], a: 2, why: "Muddatga ulgurmoq — **meet a deadline** (kollokatsiya)." }),
  v('u27-l3', { k: 'choice', q: "I can't ___ my noisy neighbours any longer. I'm going to move out.", opts: ['turn down', 'put up with', 'look into', 'come up with'], a: 1, why: "Chidamoq, toqat qilmoq — **put up with** (uch qismli frazali fe'l). *turn down* — rad etmoq, *look into* — tekshirmoq, *come up with* — o'ylab topmoq." }),

  // u28
  v('u28-l5', { k: 'match', pairs: [['undermine', 'zaiflashtirmoq, putur yetkazmoq'], ['outweigh', "ustun kelmoq, og'irroq bo'lmoq"], ['controversial', 'bahsli, munozarali'], ['tackle', 'hal qilishga kirishmoq']] }),
  v('u28-l5', { k: 'choice', q: 'The government must ___ the problem of unemployment before it gets worse.', opts: ['undermine', 'outweigh', 'tackle', 'contribute'], a: 2, why: "Muammoni hal qilishga kirishmoq — **tackle a problem**. *undermine* — zaiflashtirmoq, *outweigh* — ustun kelmoq." }),
  v('u28-l5', { k: 'choice', q: 'After a long discussion, the two sides finally ___ a consensus.', opts: ['made', 'took', 'reached', 'gave'], a: 2, why: "Kelishuvga erishmoq — **reach a consensus** (kollokatsiya)." }),

  // u29
  v('u29-l5', { k: 'match', pairs: [['sustainable', 'barqaror, tabiatga zarar qilmaydigan'], ['renewable', 'qayta tiklanadigan'], ['sedentary', "kam harakatli, o'tirib ishlaydigan"], ['obesity', 'semizlik']] }),
  v('u29-l5', { k: 'fill', q: 'To stay healthy, you should eat a ___ diet with plenty of fruit and vegetables.', a: ['balanced'], hint: 'muvozanatli', why: "Barcha oziq moddalarni o'z ichiga olgan ovqatlanish — **a balanced diet**." }),

  // u30
  v('u30-l1', { k: 'match', pairs: [['hit the nail on the head', "aynan to'g'ri aytmoq"], ['a piece of cake', 'juda oson ish'], ['under the weather', "o'zini yomon his qilmoq"], ['once in a blue moon', 'juda kamdan-kam']] }),
  v('u30-l1', { k: 'choice', q: "I'm sorry I missed the party yesterday. I was ___ and stayed in bed all day.", opts: ['a piece of cake', 'once in a blue moon', 'the last straw', 'under the weather'], a: 3, why: "Biroz betob, o'zini yomon his qilmoq — **under the weather**." }),
  v('u30-l5', { k: 'choice', q: 'The old town is ___ in history, and some of its buildings are many centuries old.', opts: ['full', 'steeped', 'filled', 'packed'], a: 1, why: "Tarixga boy joy — **steeped in history** (qat'iy ibora). Boshqa sifatlar bu predlog bilan kelmaydi." }),
];

/** Unscored speaking practice shown after the exam result. */
export const UPPER_INTERMEDIATE_SPEAKING: Exercise[] = [
  { k: 'speak', say: "If I had taken that job abroad, I would be living in a different country now. I sometimes wish I hadn't been so cautious, although, to some extent, I'm happy with the life I have built here.", uz: "Agar chet eldagi o'sha ishni qabul qilganimda, hozir boshqa mamlakatda yashagan bo'lardim. Ba'zan juda ehtiyotkor bo'lmaganimda edi deb o'ylayman, garchi ma'lum darajada bu yerda qurgan hayotimdan mamnunman." },
  { k: 'speak', say: "It is widely believed that social media has changed the way we get our news. What worries me most is the amount of misinformation that is spread online, which is why I have my sources checked carefully.", uz: "Ijtimoiy tarmoqlar yangiliklarni olish usulimizni o'zgartirdi, deb keng e'tirof etiladi. Meni eng ko'p tashvishga soladigan narsa internetda tarqalayotgan noto'g'ri ma'lumotlar, shuning uchun men manbalarni diqqat bilan tekshirtiraman." },
  { k: 'speak', say: "Not only is the city growing rapidly, but it is also becoming more sustainable. Having lived here for ten years, I would say the quality of life has improved significantly, although there is still a lot to tackle.", uz: "Shahar nafaqat tez o'sib bormoqda, balki barqarorroq ham bo'lmoqda. Bu yerda o'n yil yashaganimdan so'ng, hayot sifati sezilarli darajada yaxshilangan, deb ayta olaman, garchi hal qilinishi kerak bo'lgan ishlar hali ko'p." },
];
