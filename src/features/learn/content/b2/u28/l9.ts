import type { Lesson } from '../../../types';

// Mini lesson (situation): taking part in a classroom/club debate. Chunks for taking the floor, stating a position, countering, rhetorical questions and concluding.
const lesson: Lesson = {
  id: 'u28-l9',
  title: 'Taking part in a debate',
  titleUz: "Munozarada qatnashish: fikr bildirish, qarshi chiqish, so'zni olish",
  mini: true,
  kind: 'situation',
  goal: "Sinf yoki klub **munozarasida** so'zni muloyim olasiz (*May I come in here?*), o'z **pozitsiyangizni** aytasiz, raqibning dalilini **rad etasiz** (*I take your point, but…*), **ritorik savol** berasiz va nutqni qisqa **xulosa** bilan tugatasiz.",
  slides: [
    {
      title: "Munozara qanday o'tadi",
      blocks: [
        { t: 'p', md: "Universitet, til kursi yoki klubda **debate** (munozara) bir xil sxema bilan o'tadi. Mavzu **motion** deb ataladi, masalan: *This house believes that homework should be banned.* Ikki tomon bor: **proposition** (mavzuni qo'llab-quvvatlaydi) va **opposition** (qarshi). Munozarani **moderator** (chair) boshqaradi: navbat beradi va vaqtni nazorat qiladi." },
        { t: 'table', head: ['Bosqich', 'Nima qilasiz', 'Ibora'], speak: [2], rows: [
          ["So'zni olish", "Navbatni muloyim so'raysiz", "May I come in here? / If I may, I'd like to make a point."],
          ['Pozitsiya', "Qaysi tomonda ekaningizni aytasiz", "I'm firmly in favour of the motion."],
          ['Dalil', "Fikringizni raqamlab beraysiz", "My first point is that homework increases stress."],
          ['Qarshi chiqish', "Raqibning gapiga javob berasiz", "My opponent claims…, but the figures suggest otherwise."],
          ['Xulosa', "Bir gapda yakunlaysiz", "To sum up, homework should be reformed, not banned."],
        ] },
        { t: 'tip', tone: 'info', md: "Munozarada **agressiv** bo'lmang: tanqid g'oyaga qaratiladi, odamga emas. *You are wrong* o'rniga *I'm afraid I can't agree with that* yoki *I see it differently* deng." },
        { t: 'check', ex: { k: 'choice', q: "Qaysi ibora so'zni olishning eng muloyim usuli?", opts: ["Be quiet, it's my turn.", "May I come in here for a moment?", "I speak now.", "Stop and listen to me."], a: 1, why: "**May I come in here?** muloyim va rasmiy. Boshqalari buyruq yoki noto'g'ri tuzilma." } },
      ],
    },
    {
      title: "Pozitsiya, rad etish va ritorik savol",
      blocks: [
        { t: 'examples', items: [
          { en: "Thank you, Chair. I'm firmly in favour of banning homework, and here's why.", uz: "Rahmat, rais. Men uy vazifasini taqiqlashni qat'iy qo'llab-quvvatlayman, mana nima uchun.", note: "**Pozitsiya** boshida aytiladi: *I'm in favour of… / I'm against…*" },
          { en: "I take your point, but I'd argue that the real problem is the amount of homework.", uz: "Fikringizni tushunaman, lekin asl muammo uy vazifasining hajmi, deb o'ylayman.", note: "**Qisman rozilik + qarshi dalil**: avval tan olasiz, keyin *but* bilan davom etasiz." },
          { en: "My opponent claims that homework builds discipline. Does it? Or does it simply build resentment?", uz: "Raqibim uy vazifasi intizom beradi, deydi. Shundaymi? Yoki u faqat norozilik tug'diradimi?", note: "**Rhetorical question** javob kutmaydi: tinglovchini o'ylashga majbur qiladi." },
          { en: "I concede that some tasks are useful; nevertheless, two hours a night is too much.", uz: "Ayrim topshiriqlar foydali ekanini tan olaman; shunga qaramay, har kecha ikki soat juda ko'p.", note: "**concede** — kuchli dalilni tan olish. Bu sizni ishonchli ko'rsatadi, zaif emas." },
        ] },
        { t: 'tip', tone: 'good', md: "**Ritorik savol** 3 narsa uchun yaxshi: nutqni boshlash (*Have you ever…?*), raqibning dalilini shubha ostiga qo'yish (*Can we really say that…?*) va xulosa (*Isn't it time we…?*). Bir nutqda **ikkitadan ko'p** ishlatmang." },
        { t: 'check', ex: { k: 'fill', q: "Thank you. I'd like to ___ the floor and respond to my opponent.", a: ['take', 'have'], hint: "so'zni olmoq", why: "**take the floor** / **have the floor** — so'zni olmoq." } },
        { t: 'check', ex: { k: 'choice', q: "Qaysi gap **ritorik savol**?", opts: ["Is the moderator ready to begin?", "Who wants to spend every evening on worksheets?", "What time does the debate finish?", "Could you pass me the microphone?"], a: 1, why: "Ritorik savolga haqiqiy javob kutilmaydi: hamma *hech kim* deb o'ylaydi. Boshqalari oddiy savol." } },
      ],
    },
    {
      title: "Tipik xatolar (o'zbek tilidan)",
      blocks: [
        { t: 'p', md: "O'zbek tilida *men rozi*, *menimcha*, *… ga qarshi*, *… haqida munozara* deymiz. So'zma-so'z tarjima bu yerda 4 ta xatoga olib keladi:" },
        { t: 'compare',
          good: { title: "To'g'ri", items: ['I agree with her.', 'In my opinion, / As I see it,', "I'm against homework.", 'We discussed the motion.'] },
          bad: { title: 'Xato', items: ['I am agree with her.', 'According to me,', "I'm against of homework.", 'We discussed about the motion.'] } },
        { t: 'tip', tone: 'warn', md: "**agree** — fe'l, *am* kerak emas (*men rozi* ≠ *I am agree*). **According to** faqat *boshqa odamning* fikriga ishora qiladi: *According to the report…*. O'z fikringiz uchun: *In my opinion / As I see it / I believe*. **against** dan keyin *of* yo'q. **discuss** o'timli fe'l: *about* kerak emas." },
        { t: 'check', ex: { k: 'fix', wrong: 'I am agree with the previous speaker.', a: ['I agree with the previous speaker.'], why: "**agree** — fe'l: *I agree*, *I am agree* emas." } },
        { t: 'check', ex: { k: 'fix', wrong: "According to me, homework should stay.", a: ["In my opinion, homework should stay.", "As I see it, homework should stay.", "I believe homework should stay.", "I think homework should stay."], why: "*According to* boshqa odamning fikri uchun. O'zingiz uchun: **In my opinion / As I see it**." } },
        { t: 'check', ex: { k: 'fix', wrong: "We discussed about the motion for an hour.", a: ["We discussed the motion for an hour.", "We talked about the motion for an hour."], why: "**discuss** + to'g'ridan-to'g'ri to'ldiruvchi. *About* faqat *talk about* bilan." } },
      ],
    },
    {
      title: "O'qing: qisqa nutq",
      blocks: [
        { t: 'text', title: 'A speech for the motion', voice: 'george', en: "Thank you, Madam Chair. I'm speaking in favour of the motion that homework should be banned in primary schools. Let me explain my stance. First, children spend six or seven hours in class every day. Is it fair to ask them to work for another two hours at home? Second, homework increases inequality. Some pupils have a quiet room and helpful parents, while others have neither. My opponents will say that homework teaches discipline. I concede that it can, but discipline can also be taught in lessons. Finally, some studies suggest that the link between homework and results is weak for younger children. For these reasons, I urge you to support the motion. Thank you.", uz: "Rahmat, hurmatli rais. Men boshlang'ich maktablarda uy vazifasini taqiqlash haqidagi mavzuni qo'llab-quvvatlab gapiryapman. Pozitsiyamni tushuntiraman. Birinchidan, bolalar har kuni sinfda olti-etti soat o'tkazadi. Ularni uyda yana ikki soat ishlashga majburlash adolatlimi? Ikkinchidan, uy vazifasi tengsizlikni oshiradi. Ayrim o'quvchilarda tinch xona va yordam beradigan ota-ona bor, boshqalarda esa ikkalasi ham yo'q. Raqiblarim uy vazifasi intizom o'rgatadi, deydi. Bu mumkinligini tan olaman, lekin intizomni darsda ham o'rgatish mumkin. Nihoyat, ayrim tadqiqotlar kichik bolalarda uy vazifasi bilan natija o'rtasidagi bog'liqlik zaif ekanini ko'rsatadi. Shu sabablarga ko'ra, sizni mavzuni qo'llab-quvvatlashga chaqiraman. Rahmat." },
        { t: 'check', ex: { k: 'tf', q: "The speaker thinks homework is the only way to teach discipline.", a: false, why: "*Discipline can also be taught in lessons.*" } },
        { t: 'check', ex: { k: 'choice', q: "Which is the speaker's second argument?", opts: ["Homework is too difficult.", "Homework makes inequality worse.", "Teachers are not paid enough.", "Children dislike their teachers."], a: 1, why: "*Second, homework increases inequality.*" } },
      ],
    },
    {
      title: "Dialog: moderator va raqib",
      blocks: [
        { t: 'dialog', lines: [
          { who: 'Sara', en: "Thank you. Tom, you have the floor for one minute.", uz: "Rahmat. Tom, sizga bir daqiqa so'z beriladi." },
          { who: 'Tom', en: "Thank you, Sara. I take the previous speaker's point about inequality, but I'd argue that the answer is better support, not a ban.", uz: "Rahmat, Sara. Avvalgi nutqchining tengsizlik haqidagi fikrini tushunaman, lekin yechim taqiq emas, yaxshiroq yordam deb o'ylayman." },
          { who: 'Sara', en: "Can you give us an example?", uz: "Misol keltira olasizmi?" },
          { who: 'Tom', en: "Certainly. Many schools run homework clubs where pupils work quietly with a teacher. Wouldn't that be fairer than removing homework altogether?", uz: "Albatta. Ko'p maktablarda o'quvchilar o'qituvchi bilan tinch ishlaydigan uy vazifasi klublari bor. Bu vazifani butunlay olib tashlashdan adolatliroq emasmi?" },
          { who: 'Sara', en: "Do you concede that very long homework is a problem?", uz: "Juda uzun uy vazifasi muammo ekanini tan olasizmi?" },
          { who: 'Tom', en: "I do concede that, yes. Two hours is too much for a ten-year-old. But I advocate shorter, better tasks, not none.", uz: "Ha, buni tan olaman. O'n yoshli bola uchun ikki soat juda ko'p. Lekin men umuman bo'lmasligini emas, qisqaroq va yaxshiroq topshiriqlarni qo'llab-quvvatlayman." },
          { who: 'Sara', en: "Please conclude in one sentence.", uz: "Iltimos, bitta gapda yakunlang." },
          { who: 'Tom', en: "To sum up: reform homework, don't ban it.", uz: "Xulosa qilib aytganda: uy vazifasini isloh qiling, taqiqlamang." },
        ] },
        { t: 'check', ex: { k: 'tf', q: "Tom completely rejects the previous speaker's point about inequality.", a: false, why: "*I take the previous speaker's point…* — u qisman rozi, faqat yechimga qarshi." } },
        { t: 'check', ex: { k: 'choice', q: "What does Tom suggest instead of a ban?", opts: ["No homework for anyone", "Homework clubs and shorter tasks", "More homework at weekends", "Private lessons at home"], a: 1, why: "*Homework clubs… shorter, better tasks.*" } },
      ],
    },
  ],
  words: [
    { en: 'stance', uz: "pozitsiya, munosabat (biror masalada)", ipa: 'stɑːns', pos: 'noun', ex: "The minister has taken a firm stance on school uniforms.", exUz: "Vazir maktab formasi masalasida qat'iy pozitsiya egalladi." },
    { en: 'rebuttal', uz: "rad javobi, e'tiroz", ipa: 'rɪˈbʌt.əl', pos: 'noun', ex: "Her rebuttal was short, calm and very convincing.", exUz: "Uning rad javobi qisqa, xotirjam va juda ishonarli edi." },
    { en: 'concede', uz: "tan olmoq, rozi bo'lmoq (dalilni)", ipa: 'kənˈsiːd', pos: 'verb', ex: "I concede that the evidence is not completely clear.", exUz: "Dalillar to'liq aniq emasligini tan olaman." },
    { en: 'advocate', uz: "qo'llab-quvvatlab chiqmoq, targ'ib qilmoq", ipa: 'ˈæd.və.keɪt', pos: 'verb', ex: "Several speakers advocated a shorter school day.", exUz: "Bir nechta nutqchi qisqaroq maktab kunini qo'llab-quvvatladi." },
    { en: 'rhetorical', uz: "ritorik (javob talab qilmaydigan)", ipa: 'rɪˈtɒr.ɪ.kəl', pos: 'adj', ex: "That was a rhetorical question, so nobody answered.", exUz: "Bu ritorik savol edi, shuning uchun hech kim javob bermadi." },
    { en: 'moderator', uz: "munozara boshqaruvchisi", ipa: 'ˈmɒd.ə.reɪ.tə', pos: 'noun', ex: "The moderator reminded us that each speaker had two minutes.", exUz: "Boshqaruvchi har bir nutqchiga ikki daqiqa berilganini eslatdi." },
  ],
  practice: [
    { k: 'match', pairs: [['stance', "pozitsiya, munosabat"], ['rebuttal', "rad javobi"], ['concede', "dalilni tan olmoq"], ['advocate', "qo'llab-quvvatlab chiqmoq"], ['moderator', "munozara boshqaruvchisi"], ['rhetorical', "javob talab qilmaydigan"]] },
    { k: 'choice', q: "Which sentence is a **rhetorical question**?", opts: ["Who wants to spend every evening doing worksheets?", "What time does the debate start?", "Could you pass the microphone?", "Is the moderator ready?"], a: 0, why: "Ritorik savolga javob kutilmaydi, fikrni kuchaytirish uchun beriladi." },
    { k: 'fill', q: "Thank you, Chair. May I take the ___ for a moment?", a: ['floor'], uz: "Rahmat, rais. So'zni olsam maylimi?", hint: "so'z navbati", why: "**take the floor** — so'zni olmoq." },
    { k: 'order', uz: "Avvalgi nutqchining fikrini tushunaman, lekin men rozi emasman.", words: ['I', 'take', 'the', "speaker's", 'point,', 'but', 'I', 'disagree.'], extra: ['agree', 'am'], why: "**I take your point, but…** — qisman rozilik, keyin qarshi chiqish." },
    { k: 'translate', uz: "Men uy vazifasini taqiqlashga qat'iy qarshiman.", a: ["I am firmly against banning homework.", "I'm firmly against banning homework.", "I am strongly against banning homework.", "I'm strongly against banning homework.", "I am firmly opposed to banning homework.", "I'm firmly opposed to banning homework.", "I am strongly opposed to banning homework.", "I'm strongly opposed to banning homework."], why: "**against** + ot/gerund, *of* yo'q. Muqobil: *opposed to*." },
    { k: 'fix', wrong: "I am agree with the previous speaker.", a: ["I agree with the previous speaker."], why: "**agree** — fe'l: *I agree*." },
    { k: 'tf', q: "A **moderator** must argue for one side of the motion.", a: false, why: "Moderator betaraf: navbat beradi, vaqtni nazorat qiladi." },
    { k: 'dictation', say: "I concede that some homework is useful, but not two hours of it.", uz: "Ayrim uy vazifasi foydali ekanini tan olaman, lekin ikki soatligi emas." },
    { k: 'choice', q: "Which is the most natural way to introduce **your own** view?", opts: ["According to me, homework does more harm than good.", "As I see it, homework does more harm than good.", "By my opinion, homework does more harm than good.", "From my opinion side, homework does more harm than good."], a: 1, why: "**As I see it / In my opinion**. *According to me* va boshqalar inglizcha emas." },
    { k: 'fill', q: "Is it really fair to expect a tired child to work until midnight? That is a ___ question: the answer is obvious.", a: ['rhetorical'], hint: "javob kutilmaydigan savol", why: "Javobi hammaga ayon savol — **rhetorical question**." },
    { k: 'fix', wrong: "I am against of homework in primary school.", a: ["I am against homework in primary school.", "I'm against homework in primary school.", "I am opposed to homework in primary school.", "I'm opposed to homework in primary school."], why: "**against** dan keyin predlog *of* kerak emas." },
    { k: 'listen', say: "I take your point, but I would argue that the problem is not homework itself.", opts: ["I take your point, but I would argue that the problem is not homework itself.", "I took your point, but I would argue that the problem is homework itself.", "I take your point, so I would argue that the problem is not homework itself.", "I take your part, but I would argue that the problem is not homework itself."], a: 0 },
    { k: 'order', uz: "Xulosa qilib aytganda, uy vazifasini isloh qilish kerak, taqiqlash emas.", words: ['To', 'sum', 'up,', 'homework', 'should', 'be', 'reformed,', 'not', 'banned.'], extra: ['reform', 'is'], why: "**To sum up / In conclusion** — xulosa belgisi; majhul: *should be reformed*." },
    { k: 'speak', say: "Thank you, Chair. I'm firmly in favour of the motion, and here's why." },
  ],
  quiz: [
    { k: 'choice', q: "Your opponent made a strong point and you want to accept it partly. Which phrase fits best?", opts: ["That's nonsense.", "I concede that, but I'd argue the opposite overall.", "Nobody asked you.", "I don't listen to this."], a: 1, why: "**I concede… but** — kuchli dalilni tan olib, keyin o'z pozitsiyangizni himoya qilasiz." },
    { k: 'fill', q: "The ___ asked both teams to keep to two minutes.", a: ['moderator', 'chair'], hint: "munozarani boshqaradi", why: "Vaqtni nazorat qiluvchi — **moderator** (yoki *chair*)." },
    { k: 'tf', q: "*According to me, the motion is unfair.* — Bu gap o'z fikringizni aytishning to'g'ri usuli.", a: false, why: "O'z fikringiz uchun **In my opinion / As I see it**; *According to* boshqa manbaga ishora qiladi." },
    { k: 'fix', wrong: "We discussed about the motion for an hour.", a: ["We discussed the motion for an hour.", "We talked about the motion for an hour."], why: "**discuss** + to'ldiruvchi, *about* kerak emas." },
    { k: 'order', uz: "Men bu mavzuni qat'iy qo'llab-quvvatlayman.", words: ["I'm", 'firmly', 'in', 'favour', 'of', 'the', 'motion.'], extra: ['for', 'at'], alt: [['I', 'am', 'firmly', 'in', 'favour', 'of', 'the', 'motion.']], why: "**in favour of** — qo'llab-quvvatlamoq." },
    { k: 'listen', say: "To sum up, we should reform homework, not ban it.", opts: ["To sum up, we should reform homework, not ban it.", "To sum up, we should reform homework, now ban it.", "To sum up, we should reject homework, not ban it.", "To sum up, we should reform homework, not band it."], a: 0 },
    { k: 'translate', uz: "Ayrim topshiriqlar foydali ekanini tan olaman.", a: ["I concede that some tasks are useful.", "I concede that some assignments are useful.", "I concede that some tasks are helpful.", "I concede that some of the tasks are useful."], why: "**concede that** + gap." },
    { k: 'choice', q: "Which sentence takes the floor politely?", opts: ["Wait, I will speak.", "If I may, I'd like to make a point.", "You, stop talking.", "Now it's me."], a: 1, why: "**If I may…** — muloyim, rasmiy." },
  ],
  summary: [
    "Munozara bosqichlari: **so'zni olish** (*May I come in here?*), **pozitsiya** (*I'm firmly in favour of…*), **dalil**, **rad etish**, **xulosa** (*To sum up…*).",
    "Qarshi chiqishda avval qisman rozilik: *I take your point, but…*, *I concede that…; nevertheless…*",
    "**Ritorik savol** javob kutmaydi va fikrni kuchaytiradi: *Wouldn't that be fairer…?* Nutqda 1-2 tadan oshirmang.",
    "Xatolar: *I am agree* → *I agree*; *According to me* → *In my opinion*; *against of* → *against*; *discuss about* → *discuss*.",
    "Yangi so'zlar: **stance, rebuttal, concede, advocate, rhetorical, moderator**.",
  ],
  homework: "Bir mavzu tanlang (masalan, *Students should wear school uniform*). Telefonga 1 daqiqalik nutq yozib oling: pozitsiya, 2 dalil, 1 ritorik savol, 1 *I concede that…* va *To sum up…* bilan xulosa. Keyin tinglab, *I am agree* kabi xatolar yo'qligini tekshiring.",
};

export default lesson;
