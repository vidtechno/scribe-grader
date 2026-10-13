import type { Exercise } from '../../types';
import type { ExamItem } from '../beginner/exam';

const g = (topic: string, ex: Exercise): ExamItem => ({ skill: 'grammar', topic, ex });
const v = (topic: string, ex: Exercise): ExamItem => ({ skill: 'vocabulary', topic, ex });
const r = (topic: string, ex: Exercise): ExamItem => ({ skill: 'reading', topic, ex });
const l = (topic: string, ex: Exercise): ExamItem => ({ skill: 'listening', topic, ex });
const w = (topic: string, ex: Exercise): ExamItem => ({ skill: 'writing', topic, ex });

/**
 * Question bank of the Elementary (A1) final exam. Each attempt draws random items per skill, so every item is
 * independent and of similar difficulty. Topics are lessons of units u6–u11.
 */
export const ELEMENTARY_EXAM: ExamItem[] = [
  // ---------- Grammar (16) ----------
  g('u6-l2', { k: 'choice', q: '___ does your brother look like? — He is tall, with short dark hair.', opts: ['What', 'How', 'Who', 'Where'], a: 0, why: "Tashqi ko'rinish haqida: **What does he look like?**" }),
  g('u6-l4', { k: 'choice', q: "Whose pen is this? — It's ___ . I bought it yesterday.", opts: ['my', 'mine', 'me', 'I'], a: 1, why: "Ot yo'q joyda **mine** (meniki) ishlatiladi: *It's mine.*" }),
  g('u6-l5', { k: 'fix', wrong: 'My birthday is on the three of May.', a: ['My birthday is on the third of May.'], hint: 'tartib son', why: "Sana tartib son bilan aytiladi: three → **third**." }),
  g('u7-l2', { k: 'fill', q: 'My sister loves ___ in the sea. (swim)', a: ['swimming'], why: "**love / like / hate** dan keyin fe'l-**ing**: swim → **swimming**." }),
  g('u7-l3', { k: 'choice', q: 'My grandmother speaks English very ___ .', opts: ['good', 'well', 'goodly', 'best'], a: 1, why: "Fe'lni tasvirlash uchun ravish kerak: good → **well**." }),
  g('u7-l6', { k: 'fix', wrong: 'I would like go to the cinema tonight.', a: ['I would like to go to the cinema tonight.', "I'd like to go to the cinema tonight."], hint: 'would like dan keyin', why: "**would like** + **to** + fe'l: *I would like to go.*" }),
  g('u8-l2', { k: 'choice', q: 'There is only ___ milk in the fridge, just half a glass.', opts: ['a little', 'a few', 'many', 'a lot of'], a: 0, why: "Sanalmaydigan ot (milk) + oz miqdor → **a little**." }),
  g('u8-l7', { k: 'fill', q: 'You have a headache. You ___ drink more water.', a: ['should'], why: "Maslahat: **should** + fe'l. *You should drink more water.*" }),
  g('u8-l13', { k: 'choice', q: 'My phone is the same ___ yours.', opts: ['as', 'like', 'than', 'that'], a: 0, why: "**the same … as**: *the same as yours.*" }),
  g('u9-l3', { k: 'fix', wrong: 'Where you went yesterday?', a: ['Where did you go yesterday?'], hint: 'did kerak', why: "Savol: so'roq so'zi + **did** + ega + asosiy fe'l: **Where did you go?**" }),
  g('u9-l4', { k: 'fill', q: 'There ___ a big tree in our garden last year.', a: ['was'], why: "O'tgan zamonda birlik: **there was**." }),
  g('u9-l6', { k: 'choice', q: 'I was tired, ___ I went to bed early.', opts: ['so', 'because', 'but', 'or'], a: 0, why: "Natija uchun **so** (shuning uchun): *I was tired, so I went to bed.*" }),
  g('u10-l6', { k: 'fill', q: "Tomorrow is Sunday. I ___ get up early.", a: ["don't have to", 'do not have to'], hint: 'majbur emasman', why: "Majburiyat yo'q: **don't have to** + fe'l." }),
  g('u10-l7', { k: 'choice', q: "The sign says 'No parking'. You ___ park here.", opts: ["mustn't", "don't have to", 'can', 'should'], a: 0, why: "Taqiq: **mustn't** (mumkin emas)." }),
  g('u11-l3', { k: 'choice', q: 'I ___ to Paris last year.', opts: ['have been', 'went', 'have gone', 'go'], a: 1, why: "**last year** — aniq o'tgan vaqt, shuning uchun Past Simple: **went**." }),
  g('u11-l12', { k: 'fill', q: 'Have you ___ eaten sushi?', a: ['ever'], hint: 'hech', why: "Tajriba haqida savol: **Have you ever…?**" }),

  // ---------- Vocabulary (12) ----------
  v('u6-l7', { k: 'choice', q: 'You are ill. Where do you buy medicine?', opts: ['At a bakery', 'At a pharmacy', 'At a bank', 'At a post office'], a: 1, why: "Dori sotiladigan joy — **pharmacy** (dorixona)." }),
  v('u6-l6', { k: 'match', pairs: [['flat', 'kvartira'], ['garden', "bog'"], ['bedroom', 'yotoqxona'], ['kitchen', 'oshxona']] }),
  v('u7-l1', { k: 'match', pairs: [['chef', 'oshpaz'], ['mechanic', 'mexanik'], ['receptionist', 'resepshn xodimi'], ['engineer', 'muhandis']] }),
  v('u7-l4', { k: 'choice', q: 'Which verb goes with "yoga"?', opts: ['do', 'play', 'go', 'make'], a: 0, why: "**do yoga** — yoga bilan **do** ishlatiladi." }),
  v('u8-l1', { k: 'choice', q: 'We bought a ___ of water at the shop.', opts: ['bottle', 'loaf', 'slice', 'packet'], a: 0, why: "Suv — **a bottle of water** (bir shisha suv)." }),
  v('u8-l5', { k: 'choice', q: 'What do you wear on your feet?', opts: ['A hat', 'Shoes', 'Gloves', 'A scarf'], a: 1, why: "Oyoqqa **shoes** (poyabzal) kiyiladi." }),
  v('u9-l7', { k: 'choice', q: 'Which one is NOT "by + transport"?', opts: ['by bus', 'by train', 'on foot', 'by plane'], a: 2, why: "Piyoda — **on foot**, **by** ishlatilmaydi." }),
  v('u9-l5', { k: 'fill', q: 'They got ___ in June. It was a big wedding.', a: ['married'], hint: "uylanmoq / turmushga chiqmoq", why: "**get married** = turmush qurmoq." }),
  v('u10-l1', { k: 'choice', q: 'People take an umbrella. What is the weather like?', opts: ['Sunny', 'Rainy', 'Hot', 'Snowy'], a: 1, why: "Soyabon yomg'irda kerak — **rainy**." }),
  v('u10-l10', { k: 'match', pairs: [['headache', "bosh og'rig'i"], ['cough', "yo'tal"], ['fever', 'isitma'], ['sore throat', "tomoq og'rig'i"]] }),
  v('u11-l7', { k: 'match', pairs: [['put on', 'kiymoq'], ['turn off', "o'chirmoq"], ['look for', 'izlamoq'], ['pick up', "ko'tarmoq"]] }),
  v('u11-l4', { k: 'choice', q: 'You walk from one side of the street to the other side. You walk ___ the street.', opts: ['across', 'through', 'into', 'past'], a: 0, why: "Bir tomondan ikkinchi tomonga — **across**." }),

  // ---------- Reading (10) ----------
  r('u6-l15', { k: 'choice', q: "I live in a small flat in Samarkand. There is a park near my house and a pharmacy on the corner. The bank is next to the pharmacy. My neighbour is very friendly. His name is Rustam.\n\nWhere is the bank?", opts: ['Next to the pharmacy', 'Next to the park', 'Near the school', 'In my flat'], a: 0, why: "*The bank is next to the pharmacy.*" }),
  r('u6-l3', { k: 'tf', q: "My friend Aziza is tall and she has long dark hair. She is quite shy, but she is really kind and funny. She likes reading books and she plays the piano very well.\n\nAziza has short hair.", a: false, why: "Matnda: *she has long dark hair* — sochi uzun." }),
  r('u7-l15', { k: 'choice', q: "Hi, I'm Sam. I'm a chef in a small restaurant. I work hard from Tuesday to Saturday. I like cooking, and I love playing football at the weekend. I don't like getting up early.\n\nWhat does Sam love doing at the weekend?", opts: ['Cooking', 'Playing football', 'Getting up early', 'Working hard'], a: 1, why: "*I love playing football at the weekend.*" }),
  r('u7-l12', { k: 'tf', q: "Hi Nina! Would you like to come to the cinema with me on Saturday? The film starts at seven o'clock.\n\nThanks, Ali, but I can't. I'm visiting my grandmother on Saturday. How about Sunday?\n\nNina says yes to the cinema on Saturday.", a: false, why: "Nina *I can't* deb rad etdi va yakshanbani taklif qildi." }),
  r('u8-l15', { k: 'choice', q: "Welcome to Blue Café. Tea is one dollar. Coffee is two dollars. A cheese sandwich is three dollars and a salad is four dollars. Cake is two dollars.\n\nHow much are a coffee and a cake?", opts: ['Three dollars', 'Four dollars', 'Five dollars', 'Six dollars'], a: 1, why: "Kofe 2 + tort 2 = **4 dollar**." }),
  r('u10-l12', { k: 'tf', q: "Doctor's advice for Bek: You should eat fruit every day. You shouldn't drink too much cola. You should go to bed early, and you should walk to work.\n\nBek should drink a lot of cola.", a: false, why: "Shifokor: *You shouldn't drink too much cola.*" }),
  r('u9-l15', { k: 'choice', q: "Last Sunday I lost my phone. I looked in my bag, but it wasn't there. Then I called my friend Jamila. She was at the park, and she found it on a bench. I was very happy, so I bought her a cake.\n\nWhere was the phone?", opts: ['In my bag', 'At home', 'On a bench in the park', 'In a café'], a: 2, why: "Jamila *found it on a bench* (skameykada) parkda." }),
  r('u9-l7', { k: 'tf', q: "We went to Turkey last summer. We travelled by plane, and then we took a bus to the hotel. The weather was hot and we swam in the sea every day. We didn't visit the museum because it was closed.\n\nThey travelled to Turkey by train.", a: false, why: "Matnda: *We travelled by plane.* — samolyotda." }),
  r('u10-l15', { k: 'choice', q: "Dear Mum, we are in Bukhara. The weather is great. It's sunny and hot, so I'm wearing a hat. Tomorrow we are going to visit the old market. I will buy a present for you! Love, Zara\n\nWhat is Zara going to do tomorrow?", opts: ['Visit the old market', 'Swim in the sea', 'Buy a hat', 'Go home'], a: 0, why: "*Tomorrow we are going to visit the old market.*" }),
  r('u11-l15', { k: 'choice', q: "Have you ever been to the mountains? I have. Last year I went to Chimgan with my cousin. We walked for four hours, and we saw a beautiful lake. I have never seen snow in summer before!\n\nWhat has the writer never seen before?", opts: ['A lake', 'Snow in summer', 'A mountain', 'A cousin'], a: 1, why: "*I have never seen snow in summer before.*" }),

  // ---------- Listening (12) ----------
  l('u6-l10', { k: 'listen', say: 'Turn left at the bank.', opts: ['Turn right at the bank.', 'Turn left at the bank.', 'Turn left at the park.', 'Go straight at the bank.'], a: 1, why: "Eshitilgani: **Turn left at the bank.**" }),
  l('u7-l7', { k: 'listen', say: 'The train leaves at a quarter past nine.', opts: ['The train leaves at a quarter to nine.', 'The train leaves at half past nine.', 'The train leaves at a quarter past nine.', 'The train leaves at a quarter past ten.'], a: 2, why: "**a quarter past nine** = 9:15." }),
  l('u7-l8', { k: 'listen', say: 'How often do you go to the gym?', opts: ['How long do you go to the gym?', 'How often do you go to the gym?', 'How often do you go to the park?', 'How many times do you go to the gym?'], a: 1, why: "Eshitilgani: **How often do you go to the gym?**" }),
  l('u8-l3', { k: 'listen', say: 'How much are these shoes?', opts: ['How much is this shoe?', 'How many shoes are there?', 'How much are these shoes?', 'How much are those shoes?'], a: 2, why: "Eshitilgani: **How much are these shoes?**" }),
  l('u9-l3', { k: 'listen', say: 'What did you do last weekend?', opts: ['What do you do at the weekend?', 'What did you do last weekend?', 'Where did you go last weekend?', 'What did you do last week?'], a: 1, why: "Eshitilgani: **What did you do last weekend?**" }),
  l('u10-l3', { k: 'listen', say: 'Could I have a single room, please?', opts: ['Could I have a double room, please?', 'Could I have a single room, please?', 'Can I have a single room, please?', 'Could you have a single room, please?'], a: 1, why: "Eshitilgani: **Could I have a single room, please?**" }),
  l('u11-l1', { k: 'listen', say: 'Have you ever been to Japan?', opts: ['Have you ever been to Japan?', 'Did you ever go to Japan?', 'Have you ever been to China?', 'Has she ever been to Japan?'], a: 0, why: "Eshitilgani: **Have you ever been to Japan?**" }),
  l('u6-l6', { k: 'dictation', say: 'There is a sofa in the living room.', uz: 'Mehmonxonada divan bor.', why: "**There is a sofa in the living room.**" }),
  l('u8-l4', { k: 'dictation', say: 'Can I have a cup of tea, please?', uz: 'Menga bir piyola choy bera olasizmi?', why: "**Can I have a cup of tea, please?**" }),
  l('u9-l4', { k: 'dictation', say: 'There was a big park near our house.', uz: "Uyimiz yonida katta bir bog' bor edi.", why: "**There was a big park near our house.**" }),
  l('u10-l2', { k: 'dictation', say: 'Which platform does the train leave from?', uz: "Poyezd qaysi platformadan jo'naydi?", why: "**Which platform does the train leave from?**" }),
  l('u11-l12', { k: 'dictation', say: 'I have never played tennis.', uz: "Men hech qachon tennis o'ynamaganman.", why: "**I have never played tennis.**" }),

  // ---------- Writing (12) ----------
  w('u6-l4', { k: 'order', uz: 'Bu qalam meniki.', words: ['This', 'pen', 'is', 'mine'], extra: ['my'], why: "**This pen is mine.** — ot yo'q joyda *mine*." }),
  w('u7-l5', { k: 'order', uz: 'Men ertaga akam bilan uchrashaman.', words: ['I', 'am', 'meeting', 'my', 'brother', 'tomorrow'], alt: [['Tomorrow', 'I', 'am', 'meeting', 'my', 'brother']], extra: ['meet'], why: "Reja: **am meeting** (Present Continuous)." }),
  w('u8-l7', { k: 'order', uz: 'Siz erta yotishingiz kerak.', words: ['You', 'should', 'go', 'to', 'bed', 'early'], extra: ["shouldn't"], why: "**You should go to bed early.** — *should* + fe'l." }),
  w('u10-l6', { k: 'order', uz: 'Men ertaga ishlashim kerak.', words: ['I', 'have', 'to', 'work', 'tomorrow'], alt: [['Tomorrow', 'I', 'have', 'to', 'work']], extra: ['has'], why: "**I have to work tomorrow.** — majburiyat." }),
  w('u6-l5', { k: 'translate', uz: "Mening tug'ilgan kunim ikkinchi iyunda.", a: ['My birthday is on the second of June.', 'My birthday is on June the second.', 'My birthday is on June 2nd.', 'My birthday is on the 2nd of June.'], why: "Sana: **the second of June** (tartib son)." }),
  w('u7-l2', { k: 'translate', uz: 'Men musiqa tinglashni yaxshi ko\'raman.', a: ['I like listening to music.', 'I love listening to music.', 'I enjoy listening to music.'], why: "**like / love** + fe'l-**ing**: *listening*." }),
  w('u9-l3', { k: 'translate', uz: 'Siz tushlikda nima yedingiz?', a: ['What did you eat for lunch?', 'What did you have for lunch?', 'What did you eat at lunch?'], why: "**What did you eat?** — *did* dan keyin asosiy shakl (eat)." }),
  w('u10-l4', { k: 'translate', uz: 'Men sizga yordam beraman.', a: ["I'll help you.", 'I will help you.'], why: "Joyida qaror/va'da: **I will help you.**" }),
  w('u11-l1', { k: 'translate', uz: "Siz hech Londonda bo'lganmisiz?", a: ['Have you ever been to London?', 'Have you ever been in London?'], why: "Tajriba: **Have you ever been to…?**" }),
  w('u8-l12', { k: 'fix', wrong: 'How much apples do you want?', a: ['How many apples do you want?'], hint: 'sanaladigan ot', why: "**apples** sanaladi, shuning uchun **How many**." }),
  w('u9-l1', { k: 'fix', wrong: 'I met her three days before.', a: ['I met her three days ago.'], hint: 'ago', why: "Hozirdan oldin — **ago**: *three days ago*." }),
  w('u11-l3', { k: 'fix', wrong: 'I have seen that film yesterday.', a: ['I saw that film yesterday.'], hint: 'yesterday bilan', why: "**yesterday** — aniq vaqt, Past Simple: **saw**." }),
];

/** Unscored speaking practice shown after the exam result. */
export const ELEMENTARY_SPEAKING: Exercise[] = [
  { k: 'speak', say: 'My name is Anna. I live in a small flat near the park. I work in a bank.', uz: "Ismim Anna. Men park yonidagi kichik kvartirada yashayman. Men bankda ishlayman." },
  { k: 'speak', say: 'Last weekend I visited my grandmother. We cooked lunch and we watched a film.', uz: "O'tgan dam olish kuni buvimnikiga bordim. Biz tushlik pishirdik va film ko'rdik." },
  { k: 'speak', say: "Tomorrow I'm going to meet my friend. I have never been to Japan, but I would like to go.", uz: "Ertaga do'stim bilan uchrashaman. Men hech qachon Yaponiyada bo'lmaganman, lekin borishni xohlayman." },
];
