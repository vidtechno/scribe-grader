import type { Exercise } from '../../types';
import type { ExamItem } from '../beginner/exam';

const g = (topic: string, ex: Exercise): ExamItem => ({ skill: 'grammar', topic, ex });
const v = (topic: string, ex: Exercise): ExamItem => ({ skill: 'vocabulary', topic, ex });

/**
 * Grammar and vocabulary items of the Pre-Intermediate (A2) final exam (reading, listening and writing are in exam-b.ts).
 * Topics are lessons of units u12–u17 that teach the tested point.
 */
export const PREINT_EXAM_A: ExamItem[] = [
  // ---------- Grammar ----------
  // u12: the past
  g('u12-l4', { k: 'choice', q: 'While I ___ the news, the lights went out.', opts: ['watched', 'was watching', 'am watching', 'have watched'], a: 1, why: "Uzoq davom etgan voqea (**while** bilan) — **Past Continuous**: *was watching*. Qisqa voqea (the lights went out) — Past Simple." }),
  g('u12-l5', { k: 'fill', q: 'When I was a child, we ___ live in a small village. Now we live in Tashkent.', a: ['used to'], hint: 'avval shunday edi', why: "O'tgan odat yoki holat: **used to** + fe'l." }),
  g('u12-l6', { k: 'choice', q: '___ it was raining, we played football in the park.', opts: ['Although', 'Because', 'So', 'Or'], a: 0, why: "Kutilmagan qarama-qarshilik: **Although** (garchi … bo'lsa ham) + gap." }),
  g('u12-l2', { k: 'fix', wrong: 'Did she went to the party last night?', a: ['Did she go to the party last night?'], hint: 'did dan keyin', why: "**Did** dan keyin fe'lning asosiy shakli keladi: *Did she **go**…?*" }),
  g('u12-l12', { k: 'choice', q: 'My father ___ me a new bike for my birthday last year.', opts: ['buyed', 'bought', 'boughted', 'buy'], a: 1, why: "**buy** — noto'g'ri fe'l: buy – **bought** – bought." }),

  // u13: the future
  g('u13-l1', { k: 'choice', q: 'Look at that car! It ___ crash into the tree.', opts: ['is going to', 'used to', 'was', 'did'], a: 0, why: "Hozir ko'rinib turgan belgi asosida: **be going to** + fe'l." }),
  g('u13-l5', { k: 'fill', q: 'Take an umbrella. It ___ rain later, I am not sure.', a: ['might', 'may', 'could'], hint: 'ehtimol', why: "Ishonchsiz ehtimol: **might / may** + fe'l." }),
  g('u13-l6', { k: 'fix', wrong: 'If it will rain tomorrow, we will stay at home.', a: ['If it rains tomorrow, we will stay at home.', "If it rains tomorrow, we'll stay at home."], hint: 'if dan keyin', why: "Birinchi shart gap: **if** + Present Simple, **will** + fe'l. *If it **rains**…*" }),
  g('u13-l12', { k: 'choice', q: 'The bus will arrive ___ ten minutes.', opts: ['in', 'ago', 'for', 'since'], a: 0, why: "Hozirdan keyin: **in** + vaqt (*in ten minutes* — o'n daqiqadan keyin). **ago** — o'tgan zamon uchun." }),

  // u14: comparing
  g('u14-l13', { k: 'choice', q: 'My new phone is ___ better than my old one.', opts: ['much', 'very', 'more', 'most'], a: 0, why: "Qiyosiy darajani kuchaytirish: **much / a lot / far** + better. **very better** deb bo'lmaydi." }),
  g('u14-l2', { k: 'choice', q: 'This is ___ film I have ever seen.', opts: ['the most boring', 'more boring', 'most boring', 'the boringest'], a: 0, why: "Uzun sifat orttirma darajasi: **the most** + sifat." }),
  g('u14-l3', { k: 'fix', wrong: 'My bag is not so heavy than yours.', a: ['My bag is not as heavy as yours.', 'My bag is not so heavy as yours.'], hint: 'as … as', why: "Tenglik: **(not) as … as**. **than** faqat qiyosiy daraja bilan keladi." }),
  g('u14-l4', { k: 'fill', q: 'He is not old ___ to drive a car.', a: ['enough'], hint: 'yetarlicha', why: "Sifatdan **keyin** **enough**: *old enough* (yetarlicha katta)." }),
  g('u14-l5', { k: 'choice', q: 'He drove ___ because the road was icy.', opts: ['careful', 'carefully', 'care', 'more care'], a: 1, why: "Fe'l (drove) ravish bilan aniqlanadi: careful → **carefully**." }),

  // u15: modals
  g('u15-l12', { k: 'choice', q: 'You ___ wear a uniform at our school, but many students do.', opts: ["don't have to", "mustn't", 'must', 'should'], a: 0, why: "Majburiy emas, lekin mumkin: **don't have to**. **mustn't** — taqiq." }),
  g('u15-l2', { k: 'fix', wrong: 'You should to drink more water.', a: ['You should drink more water.'], hint: 'should dan keyin', why: "**should** dan keyin **to** kelmaydi: *should see*." }),
  g('u15-l13', { k: 'choice', q: "It's hot in here. ___ I open the window?", opts: ['Shall', 'Would', 'Do', 'Must'], a: 0, why: "Taklif qilish: **Shall I…?** (…ymi?)" }),
  g('u15-l3', { k: 'fill', q: 'I ___ swim when I was five, but I could not ride a bike.', a: ['could', 'was able to'], hint: "o'tgan zamon qobiliyat", why: "O'tgan zamondagi umumiy qobiliyat: **could** (yoki *was able to*)." }),
  g('u15-l7', { k: 'choice', q: 'You ___ pay now. You can pay when you leave.', opts: ["needn't", "mustn't", "can't", "shouldn't"], a: 0, why: "Shart emas: **needn't** (= *don't need to*). Taqiq uchun **mustn't**." }),

  // u16: experiences
  g('u16-l12', { k: 'choice', q: 'I have ___ cleaned my room, so I can go out now.', opts: ['already', 'yet', 'ever', 'ago'], a: 0, why: "Tasdiq gapda \"allaqachon\" — **already**. **yet** savol va inkorda keladi." }),
  g('u16-l2', { k: 'choice', q: 'I have lived in this flat ___ 2019.', opts: ['since', 'for', 'ago', 'during'], a: 0, why: "Boshlanish nuqtasi (2019) bilan **since**; muddat bilan (*five years*) **for**." }),
  g('u16-l3', { k: 'fill', q: 'The teacher ___ taught us last year is now a director.', a: ['who', 'that'], hint: 'odam haqida', why: "Odamni ta'riflovchi bog'lovchi so'z: **who** (yoki *that*)." }),
  g('u16-l4', { k: 'fix', wrong: 'The bridge was build in 1990.', a: ['The bridge was built in 1990.'], hint: 'majhul nisbat', why: "Majhul nisbat: **was / were** + **V3**. build – built – **built**." }),
  g('u16-l6', { k: 'choice', q: "You don't like coffee, ___ ?", opts: ['do you', "don't you", 'are you', 'did you'], a: 0, why: "Inkor gapdan keyin tasdiq tag: *You don't like…, **do you**?*" }),

  // u17: patterns
  g('u17-l1', { k: 'choice', q: 'I enjoy ___ new languages.', opts: ['learning', 'to learn', 'learn', 'learned'], a: 0, why: "**enjoy** dan keyin fe'l-**ing**: *enjoy learning*." }),
  g('u17-l12', { k: 'choice', q: 'Remember ___ some bread on your way home, please.', opts: ['to buy', 'buying', 'buy', 'bought'], a: 0, why: "Qilinishi kerak bo'lgan ishni eslash: **remember to** + fe'l." }),
  g('u17-l13', { k: 'choice', q: "We don't have ___ time. Hurry up!", opts: ['much', 'many', 'a few', 'several'], a: 0, why: "Sanalmaydigan ot (time) inkor gapda — **much**. **many / a few** sanaladigan otlar bilan." }),

  // ---------- Vocabulary ----------
  // u12
  v('u12-l7', { k: 'match', pairs: [['First', 'Avval'], ['Then', 'Keyin'], ['After that', 'Undan keyin'], ['Finally', 'Nihoyat']] }),
  v('u12-l10', { k: 'choice', q: 'You lost your bag at the station. Where do you report it?', opts: ['At the lost property office', 'At the bakery', 'At the cinema', 'At the gym'], a: 0, why: "Yo'qolgan narsalar bo'limi — **lost property office**." }),
  v('u12-l5', { k: 'choice', q: 'Your ___ is the time when you were a child.', opts: ['childhood', 'village', 'habit', 'neighbour'], a: 0, why: "Bolalik davri — **childhood**." }),

  // u13
  v('u13-l10', { k: 'match', pairs: [['passport', 'pasport'], ['luggage', 'yuk, bagaj'], ['souvenir', "esdalik sovg'a"], ['sunscreen', 'quyoshdan himoya kremi']] }),
  v('u13-l7', { k: 'choice', q: "Ali invited me to his party, but I can't come. I will ___ the invitation politely.", opts: ['decline', 'accept', 'invite', 'celebrate'], a: 0, why: "Taklifni rad etmoq — **decline** (qabul qilmoq — *accept*)." }),
  v('u13-l9', { k: 'fill', q: "I'm tired, so on Sunday I'm going to ___ in and watch films.", a: ['stay'], hint: 'uyda qolmoq', why: "**stay in** = uyda qolmoq." }),

  // u14
  v('u14-l6', { k: 'match', pairs: [['shy', 'uyatchan'], ['generous', 'saxovatli'], ['polite', 'odobli'], ['honest', 'halol']] }),
  v('u14-l7', { k: 'choice', q: 'There is a lot of ___ in the city centre, so it takes an hour to drive across it.', opts: ['traffic', 'climate', 'nightlife', 'sights'], a: 0, why: "Ko'chadagi mashinalar oqimi — **traffic** (tirbandlik)." }),
  v('u14-l5', { k: 'match', pairs: [['quickly', 'tez'], ['slowly', 'sekin'], ['loudly', 'baland ovozda'], ['badly', 'yomon']] }),

  // u15
  v('u15-l5', { k: 'match', pairs: [['straight on', "to'g'ri"], ['traffic lights', 'svetofor'], ['bridge', "ko'prik"], ['opposite', 'qarshisida']] }),
  v('u15-l6', { k: 'choice', q: 'The doctor writes a ___ so you can get medicine at the pharmacy.', opts: ['prescription', 'receipt', 'reception', 'password'], a: 0, why: "Shifokor yozgan dori qog'ozi — **prescription** (retsept)." }),
  v('u15-l7', { k: 'choice', q: "A sign on a machine says 'Out of order'. It means the machine ___ .", opts: ["doesn't work", 'is free', 'is new', 'is very fast'], a: 0, why: "**Out of order** = ishlamaydi." }),

  // u16
  v('u16-l5', { k: 'match', pairs: [['wake up', "uyg'onmoq"], ['turn off', "o'chirmoq"], ['take off', 'yechmoq'], ['give up', "taslim bo'lmoq"]] }),
  v('u16-l10', { k: 'choice', q: 'A thing that you use for a job, like a phone or a camera, is a ___ .', opts: ['device', 'festival', 'tradition', 'guest'], a: 0, why: "Qurilma, asbob — **device**." }),
  v('u16-l11', { k: 'choice', q: 'Navruz and Eid are famous ___ in Uzbekistan.', opts: ['festivals', 'factories', 'devices', 'passports'], a: 0, why: "Bayramlar — **festivals**." }),

  // u17
  v('u17-l2', { k: 'match', pairs: [['accountant', 'buxgalter'], ['nurse', 'hamshira'], ['waiter', 'ofitsiant'], ['driver', 'haydovchi']] }),
  v('u17-l9', { k: 'choice', q: 'The shirt was damaged, so I asked the shop for a ___ .', opts: ['refund', 'menu', 'password', 'platform'], a: 0, why: "Pulni qaytarib olish — **refund**." }),
  v('u17-l6', { k: 'fill', q: 'Excuse me, can we have the ___ , please? We would like to pay.', a: ['bill', 'check'], hint: 'restoranda hisob', why: "Restoranda hisob — **the bill**." }),
  v('u17-l4', { k: 'choice', q: 'You need a ___ to log in to your account.', opts: ['password', 'charger', 'screen', 'battery'], a: 0, why: "Hisobga kirish uchun — **password** (parol)." }),
];

/** Unscored speaking practice shown after the exam result. */
export const PREINTERMEDIATE_SPEAKING: Exercise[] = [
  { k: 'speak', say: 'Last summer I went to Samarkand with my family. We were walking in the old town when it started to rain, so we ran into a café.', uz: "O'tgan yozda oilam bilan Samarqandga bordim. Eski shaharda sayr qilayotganimizda yomg'ir yog'a boshladi, shuning uchun kafega yugurib kirdik." },
  { k: 'speak', say: "Next weekend I'm going to visit my cousin in Bukhara. If the weather is good, we might go to the old market. I will buy a present for my mother.", uz: "Kelasi dam olish kunlari amakivachcham huzuriga Buxoroga boraman. Ob-havo yaxshi bo'lsa, eski bozorga borishimiz mumkin. Onamga sovg'a olaman." },
  { k: 'speak', say: "I have been to Istanbul twice, but I have never been to London. I think Istanbul is more interesting than my city, although it is much more crowded.", uz: "Men Istanbulda ikki marta bo'lganman, lekin Londonda hech qachon bo'lmaganman. Istanbul mening shahrimdan qiziqarliroq, garchi ancha gavjumroq bo'lsa ham." },
];
