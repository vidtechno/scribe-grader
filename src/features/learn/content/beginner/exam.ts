import type { Exercise } from '../../types';

export type ExamSkill = 'grammar' | 'vocabulary' | 'reading' | 'listening' | 'writing';

export interface ExamItem {
  skill: ExamSkill;
  /** The lesson to revisit when the learner misses this item, e.g. 'u3-l4'. */
  topic: string;
  ex: Exercise;
}

const g = (topic: string, ex: Exercise): ExamItem => ({ skill: 'grammar', topic, ex });
const v = (topic: string, ex: Exercise): ExamItem => ({ skill: 'vocabulary', topic, ex });
const r = (topic: string, ex: Exercise): ExamItem => ({ skill: 'reading', topic, ex });
const l = (topic: string, ex: Exercise): ExamItem => ({ skill: 'listening', topic, ex });
const w = (topic: string, ex: Exercise): ExamItem => ({ skill: 'writing', topic, ex });

/**
 * Question bank of the Beginner final exam. Each attempt draws 4 random items per skill (20 questions, 70% to pass),
 * so every item is independent and of similar difficulty.
 */
export const BEGINNER_EXAM: ExamItem[] = [
  // ---------- Grammar (16) ----------
  g('u2-l2', { k: 'choice', q: 'My sister ___ a nurse.', opts: ['am', 'is', 'are', 'be'], a: 1, why: "**My sister** = she, shuning uchun **is**: *My sister is a nurse.*" }),
  g('u2-l3', { k: 'fill', q: 'They ___ students. They are teachers.', a: ["aren't", 'are not'], hint: 'inkor shakl', why: "Inkor: **are not / aren't**. *They aren't students.*" }),
  g('u2-l5', { k: 'choice', q: 'Which sentence is correct?', opts: ['I have three babys.', 'I have three babies.', 'I have three baby.', 'I have three babyes.'], a: 1, why: "Undosh + **y** → **-ies**: baby → **babies**." }),
  g('u2-l7', { k: 'fix', wrong: 'This is Anna car.', a: ["This is Anna's car."], hint: 'egalik', why: "Kimningdir ekanini **'s** bildiradi: **Anna's car**." }),
  g('u3-l13', { k: 'fill', q: 'My mother ___ TV in the evening. (watch)', a: ['watches'], why: "**-ch** bilan tugagan fe'lga **-es** qo'shiladi: watch → **watches**." }),
  g('u4-l7', { k: 'fill', q: 'My uncle ___ got three children.', a: ['has'], why: "**he / she / it** bilan **has got**: *He has got three children.*" }),
  g('u3-l5', { k: 'fix', wrong: 'Does she works here?', a: ['Does she work here?'], hint: 'Does dan keyin fe\'l', why: "**Does** dan keyin fe'l asosiy shaklda keladi: **Does she work here?**" }),
  g('u3-l8', { k: 'choice', q: 'Which sentence is correct?', opts: ['She eats never meat.', 'She never eats meat.', 'She eats meat never.', 'Never she eats meat.'], a: 1, why: "**never, always, usually** asosiy fe'ldan **oldin** turadi: *She never eats meat.*" }),
  g('u4-l2', { k: 'fill', q: 'There ___ two books on the table.', a: ['are'], why: "Ko'plik ot oldidan **There are**: *There are two books…*" }),
  g('u4-l4', { k: 'choice', q: 'How ___ money do you have?', opts: ['many', 'much', 'a', 'any'], a: 1, why: "**money** sanalmaydigan ot, shuning uchun **How much**." }),
  g('u4-l5', { k: 'fill', q: "She ___ drive a car. She is only ten.", a: ["can't", 'cannot', 'can not'], why: "Qila olmaslik: **can't / cannot**. *She can't drive.*" }),
  g('u4-l6', { k: 'fix', wrong: "Don't to run in the classroom.", a: ["Don't run in the classroom."], hint: 'to kerak emas', why: "Buyruqda **Don't** dan keyin **to** qo'yilmaydi: **Don't run.**" }),
  g('u4-l8', { k: 'choice', q: 'Be quiet! The baby ___ .', opts: ['sleeps', 'is sleeping', 'sleeping', 'are sleeping'], a: 1, why: "Hozir bo'layotgan ish → **is sleeping** (Present Continuous)." }),
  g('u5-l8', { k: 'fill', q: 'A train is ___ than a bus. (fast)', a: ['faster'], why: "Qisqa sifatga **-er** qo'shiladi: fast → **faster**." }),
  g('u5-l5', { k: 'fix', wrong: "I didn't went to school yesterday.", a: ["I didn't go to school yesterday.", 'I did not go to school yesterday.'], hint: "didn't dan keyin", why: "**didn't** dan keyin fe'l asosiy shaklda: **didn't go**." }),
  g('u5-l4', { k: 'choice', q: 'Yesterday we ___ to the park.', opts: ['go', 'goed', 'went', 'gone'], a: 2, why: "**go** — noto'g'ri fe'l: go → **went**." }),

  // ---------- Vocabulary (12) ----------
  v('u1-l8', { k: 'choice', q: 'Snow is ___ .', opts: ['white', 'black', 'red', 'green'], a: 0, why: "Qor — **white** (oq)." }),
  v('u2-l8', { k: 'choice', q: 'Who works in a hospital and helps sick people?', opts: ['A driver', 'A teacher', 'A doctor', 'A cook'], a: 2, why: "Kasalxonada kasallarga yordam beradi — **doctor** (shifokor)." }),
  v('u3-l6', { k: 'choice', q: "It's half past seven. What time is it?", opts: ['7:15', '7:30', '6:30', '8:30'], a: 1, why: "**half past seven** = 7:30." }),
  v('u3-l7', { k: 'choice', q: 'Which month comes after March?', opts: ['February', 'April', 'May', 'June'], a: 1, why: "Mart (March) dan keyin **April**." }),
  v('u4-l3', { k: 'choice', q: 'The lamp is next to the bed. Where is the lamp?', opts: ['Under the bed', 'On the bed', 'At the side of the bed', 'In the bed'], a: 2, why: "**next to** = yonida." }),
  v('u4-l7', { k: 'choice', q: "My mother's brother is my ___ .", opts: ['aunt', 'cousin', 'grandfather', 'uncle'], a: 3, why: "Onaning akasi/ukasi — **uncle** (tog'a)." }),
  v('u3-l1', { k: 'match', pairs: [['fifteen', "o'n besh"], ['forty', 'qirq'], ['sixty', "oltmish"], ['ninety', "to'qson"]] }),
  v('u2-l8', { k: 'match', pairs: [['teacher', "o'qituvchi"], ['driver', 'haydovchi'], ['nurse', 'hamshira'], ['engineer', 'muhandis']] }),
  v('u3-l2', { k: 'match', pairs: [['live', 'yashamoq'], ['work', 'ishlamoq'], ['drink', 'ichmoq'], ['watch', 'tomosha qilmoq'], ['speak', 'gapirmoq']] }),
  v('u3-l7', { k: 'fill', q: 'My birthday is in ___ . It is the first month of the year.', a: ['January'], hint: 'yilning birinchi oyi', why: "Yilning birinchi oyi — **January**." }),
  v('u4-l7', { k: 'fill', q: "My father's father is my ___ .", a: ['grandfather', 'grandpa'], hint: 'bobo', why: "Otaning otasi — **grandfather** (bobo)." }),
  v('u5-l8', { k: 'fill', q: "The opposite of 'cheap' is ___ .", a: ['expensive'], hint: 'qimmat', why: "**cheap** (arzon) ning teskarisi — **expensive** (qimmat)." }),

  // ---------- Reading (10) ----------
  r('u2-l9', { k: 'tf', q: "My name is Aziza. I am from Samarkand. I am a student. My brother is a doctor. He is 28.\n\nAziza's brother is a student.", a: false, why: "Matnda: *My brother is a doctor.* Akasi — shifokor." }),
  r('u2-l7', { k: 'choice', q: "This is my family photo. My father is tall. My mother's name is Dilnoza. She is a teacher. Her sister is a nurse.\n\nWhat is Dilnoza's job?", opts: ['She is a teacher.', 'She is a nurse.', 'She is a doctor.', 'She is a student.'], a: 0, why: "*My mother's name is Dilnoza. She is a teacher.*" }),
  r('u3-l10', { k: 'choice', q: "Tom gets up at six. He has breakfast at seven and goes to work by bus. He starts work at eight. He never drinks coffee in the evening.\n\nWhat time does Tom start work?", opts: ['At six', 'At seven', 'At eight', 'At nine'], a: 2, why: "*He starts work at eight.*" }),
  r('u3-l8', { k: 'tf', q: "Kamola usually walks to school. She sometimes goes by bus when it rains. She never goes by car, because her school is near.\n\nKamola often goes to school by car.", a: false, why: "Matnda: *She never goes by car.* — hech qachon mashinada bormaydi." }),
  r('u4-l9', { k: 'choice', q: "My room is small. There is a bed and a desk. There are three books on the desk. There isn't a TV. A cat is under the bed.\n\nWhat is under the bed?", opts: ['A cat', 'Three books', 'A desk', 'A TV'], a: 0, why: "*A cat is under the bed.*" }),
  r('u4-l8', { k: 'tf', q: "It is Sunday morning. Dad is cooking in the kitchen. Mum is reading a book. My brothers are playing football in the garden.\n\nThe brothers are playing football.", a: true, why: "*My brothers are playing football in the garden.*" }),
  r('u4-l5', { k: 'choice', q: "Ali can play the guitar and he can sing, but he can't dance. His sister can't play the guitar, but she can dance very well.\n\nWho can dance?", opts: ['Only Ali', 'Only his sister', 'Both of them', 'Nobody'], a: 1, why: "Ali *can't dance*, opasi esa *can dance very well*." }),
  r('u5-l16', { k: 'choice', q: "Last Saturday Nilufar visited her grandmother. She took a bus at ten o'clock. They cooked lunch and watched TV. Nilufar came home at six.\n\nHow did Nilufar go to her grandmother's house?", opts: ['By bus', 'By car', 'On foot', 'By train'], a: 0, why: "*She took a bus at ten o'clock.*" }),
  r('u5-l6', { k: 'tf', q: "Next week is Jasur's birthday. He is going to have a party at home. He is going to invite ten friends. His mother will make a big cake.\n\nJasur is going to have a party at a café.", a: false, why: "Matnda: *a party at home* — uyda." }),
  r('u5-l8', { k: 'choice', q: "I have two phones. The red phone is cheap, but it is old. The black phone is more expensive and it is newer. I like the black phone.\n\nWhich phone is cheaper?", opts: ['The black phone', 'The red phone', 'Both are the same', 'The text does not say'], a: 1, why: "Qizil telefon **cheap** (arzon), qora telefon esa **more expensive**." }),

  // ---------- Listening (12) ----------
  l('u1-l5', { k: 'listen', say: 'Good morning, Anna.', opts: ['Good morning, Anna.', 'Good evening, Anna.', 'Good morning, Tom.', 'Good night, Anna.'], a: 0, why: "Eshitilgani: **Good morning, Anna.**" }),
  l('u3-l1', { k: 'listen', say: 'It costs fifty dollars.', opts: ['It costs fifteen dollars.', 'It costs fifty dollars.', 'It costs forty dollars.', 'It costs sixty dollars.'], a: 1, why: "**fifty** (50) va **fifteen** (15) ni farqlang: urg'u boshqa bo'g'inda." }),
  l('u2-l4', { k: 'listen', say: 'Are they from England?', opts: ['Is he from England?', 'Are you from England?', 'Are they from England?', 'Are they from Uzbekistan?'], a: 2, why: "Eshitilgani: **Are they from England?**" }),
  l('u3-l5', { k: 'listen', say: 'Does your brother work here?', opts: ['Do your brothers work here?', 'Does your brother work here?', 'Does your sister work here?', 'Does your brother walk here?'], a: 1, why: "Eshitilgani: **Does your brother work here?**" }),
  l('u4-l2', { k: 'listen', say: 'There are two chairs in the kitchen.', opts: ['There is a chair in the kitchen.', 'There are two chairs in the kitchen.', 'There are two chairs in the garden.', 'There are three chairs in the kitchen.'], a: 1, why: "Eshitilgani: **There are two chairs in the kitchen.**" }),
  l('u4-l8', { k: 'listen', say: 'She is reading a book now.', opts: ['She is eating a banana now.', 'She is reading a book now.', 'She reads a book every day.', 'He is reading a book now.'], a: 1, why: "Eshitilgani: **She is reading a book now.**" }),
  l('u5-l5', { k: 'listen', say: "We didn't go to school on Friday.", opts: ["We don't go to school on Friday.", "We didn't go to school on Monday.", "We didn't go to school on Friday.", 'We went to school on Friday.'], a: 2, why: "Eshitilgani: **We didn't go to school on Friday.**" }),
  l('u3-l6', { k: 'dictation', say: 'I get up at seven.', uz: "Men soat yettida turaman.", why: "**I get up at seven.**" }),
  l('u4-l5', { k: 'dictation', say: 'Can you help me, please?', uz: "Menga yordam bera olasizmi?", why: "**Can you help me, please?**" }),
  l('u5-l2', { k: 'dictation', say: 'They were at home last night.', uz: "Ular kecha kechqurun uyda edi.", why: "**They were at home last night.**" }),
  l('u5-l3', { k: 'dictation', say: 'My mother cooked dinner yesterday.', uz: "Onam kecha kechki ovqat pishirdi.", why: "**My mother cooked dinner yesterday.**" }),
  l('u3-l3', { k: 'dictation', say: 'He drinks tea every morning.', uz: "U har ertalab choy ichadi.", why: "**He drinks tea every morning.**" }),

  // ---------- Writing (12) ----------
  w('u2-l2', { k: 'order', uz: "Mening akam o'qituvchi.", words: ['My', 'brother', 'is', 'a', 'teacher'], extra: ['are'], why: "**My brother is a teacher.**" }),
  w('u3-l4', { k: 'order', uz: 'U kofe ichmaydi.', words: ['She', "doesn't", 'drink', 'coffee'], extra: ["don't"], why: "**She doesn't drink coffee.** — he/she/it bilan *doesn't*." }),
  w('u4-l3', { k: 'order', uz: 'Mushuk divan tagida.', words: ['The', 'cat', 'is', 'under', 'the', 'sofa'], extra: ['on'], why: "**The cat is under the sofa.**" }),
  w('u5-l5', { k: 'order', uz: 'Siz kecha maktabga bordingizmi?', words: ['Did', 'you', 'go', 'to', 'school', 'yesterday'], extra: ['went'], why: "**Did you go to school yesterday?** — *Did* dan keyin asosiy shakl." }),
  w('u2-l7', { k: 'translate', uz: "Bu mening do'stimning uyi.", a: ["This is my friend's house.", "That is my friend's house.", "This is my friend's home."], why: "Egalik: **my friend's house**." }),
  w('u3-l7', { k: 'translate', uz: 'Men dushanba kuni ishlayman.', a: ['I work on Monday.', 'I work on Mondays.', 'On Monday I work.', 'On Mondays I work.'], why: "Kunlar bilan **on**: *on Monday*." }),
  w('u4-l5', { k: 'translate', uz: 'Men inglizcha gapira olaman.', a: ['I can speak English.', 'I can speak English'], why: "**can** + asosiy fe'l: *I can speak English.*" }),
  w('u5-l3', { k: 'translate', uz: "Biz kecha futbol o'ynadik.", a: ['We played football yesterday.', 'Yesterday we played football.', 'We played soccer yesterday.'], why: "To'g'ri fe'l + **-ed**: play → **played**." }),
  w('u5-l6', { k: 'translate', uz: "Men ertaga do'stimga qo'ng'iroq qilmoqchiman.", a: ["I'm going to call my friend tomorrow.", 'I am going to call my friend tomorrow.', "I'm going to phone my friend tomorrow.", 'I am going to phone my friend tomorrow.', 'Tomorrow I am going to call my friend.', "Tomorrow I'm going to call my friend.", 'I will call my friend tomorrow.', "I'll call my friend tomorrow."], why: "Reja: **be going to** + fe'l." }),
  w('u3-l3', { k: 'fix', wrong: 'My father work in a bank.', a: ['My father works in a bank.'], hint: 'he/she/it', why: "**My father** = he, fe'lga **-s**: **works**." }),
  w('u5-l2', { k: 'fix', wrong: 'We was happy yesterday.', a: ['We were happy yesterday.'], hint: 'was yoki were', why: "**We** bilan **were**: *We were happy.*" }),
  w('u4-l8', { k: 'fix', wrong: 'They playing football now.', a: ['They are playing football now.', "They're playing football now."], hint: 'to be kerak', why: "Present Continuous: **are** + fe'l-ing." }),
];

/** Unscored speaking practice shown after the exam result. */
export const BEGINNER_SPEAKING: Exercise[] = [
  { k: 'speak', say: 'My name is Anna. I live in Tashkent.', uz: "Ismim Anna. Men Toshkentda yashayman." },
  { k: 'speak', say: 'I get up at seven and I go to work.', uz: 'Men yettida turaman va ishga boraman.' },
  { k: 'speak', say: 'Yesterday I played football with my friends.', uz: "Kecha men do'stlarim bilan futbol o'ynadim." },
];
