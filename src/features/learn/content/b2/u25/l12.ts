import type { Lesson } from '../../../types';

// Mini lesson (grammar): alternatives to "if". Builds on the B1 conditionals and on l1 (mixed conditionals) without repeating them.
const lesson: Lesson = {
  id: 'u25-l12',
  title: 'Alternatives to if',
  titleUz: "If o'rniga: unless, as long as, otherwise, but for, supposing, provided that",
  mini: true,
  kind: 'grammar',
  goal: "**If** o'rniga **unless, as long as, provided that, on condition that, otherwise, but for, supposing** va **in case** ni to'g'ri tanlaysiz, rasmiy va norasmiy uslubni farqlaysiz va *unless you don't* kabi xatolardan qochasiz.",
  slides: [
    {
      title: "Shartni boshqacha aytish",
      blocks: [
        { t: 'p', md: "B1 da **if** bilan shart gap yasadingiz. Ish xatida, shartnomada va IELTS yozuvida **if** ni takrorlayverish zerikarli va ba'zan noto'g'ri eshitiladi. Ko'pchilik bog'lovchilar **if** ning ma'nosini aniqlashtiradi: *faqat shu shart bilan*, *agar ... bo'lmasa*, *aks holda*." },
        { t: 'table', head: ['Bog\'lovchi', "Ma'nosi", 'Misol'], speak: [2], rows: [
          ['unless', "if ... not (agar ... bo'lmasa)", "Unless you hurry, you'll miss the train."],
          ['as long as / so long as', 'faqat shu shart bilan', "You can borrow my car as long as you drive carefully."],
          ['provided / providing (that)', "rasmiyroq: faqat shart bajarilsa", "Staff may work from home provided that they attend the weekly meeting."],
          ['on condition that', 'juda rasmiy: shart bilan', "He agreed to sign on condition that the price was lowered."],
        ] },
        { t: 'tip', tone: 'warn', md: "**Unless** o'zida inkorni tashiydi: *unless you hurry* = *if you don't hurry*. Shuning uchun **unless you don't** deb bo'lmaydi: inkor ikki marta bo'lib qoladi. Shuningdek, bu bog'lovchilardan keyin kelasi zamon uchun **will** ishlatilmaydi: *provided that he pays* (*will pay* emas)." },
        { t: 'check', ex: { k: 'choice', q: "___ you book early, the tickets will sell out.", opts: ['Unless', 'As long as', 'Provided that', 'On condition that'], a: 0, why: "Ma'no: *agar erta band qilmasangiz, chiptalar tugab qoladi*. Bu inkor shart, **unless** = *if you don't*. Boshqalari *faqat shu shart bilan* degan ma'noni beradi." } },
        { t: 'check', ex: { k: 'fill', q: "You can stay in my flat ___ long as you keep it clean.", a: ['as', 'so'], why: "**as long as / so long as** = faqat shu shart bilan." } },
      ],
    },
    {
      title: "Otherwise, but for, supposing, in case",
      blocks: [
        { t: 'examples', items: [
          { en: "Leave now, otherwise you'll miss your flight.", uz: "Hozir chiqing, aks holda reysga kech qolasiz.", note: "**otherwise / or else** = *if not*; gapdan keyin keladi, oldingi gapga bog'lanadi." },
          { en: "But for your advice, I would have made a terrible mistake.", uz: "Sizning maslahatingiz bo'lmaganda, men katta xato qilgan bo'lardim.", note: "**but for + ot** = *if it hadn't been for*; ko'pincha **would have + V3** bilan." },
          { en: "Supposing you lost your job, what would you do?", uz: "Faraz qilaylik, ishingizni yo'qotdingiz, nima qilardingiz?", note: "**supposing / suppose / what if** = tasavvur qilish; zamon *if* dagidek." },
          { en: "Take a sweater in case it gets cold.", uz: "Sovuq bo'lib qolsa deb, sviter oling.", note: "**in case** = *oldindan ehtiyot chorasi*; shart emas." },
        ] },
        { t: 'compare',
          good: { title: "In case: ehtiyot chorasi", items: ["I'll take an umbrella in case it rains. (hozir olaman, yomg'ir yog'masa ham)", "Write it down in case you forget."] },
          bad: { title: "If: shart", items: ["I'll take an umbrella if it rains. (yomg'ir yog'sagina olaman)", "Call me if you need help."] } },
        { t: 'tip', tone: 'info', md: "**Uslub:** *unless, as long as, otherwise* — kundalik nutqda ham, yozuvda ham mumkin. *Provided that, on condition that, but for, in the event of* — rasmiy: shartnoma, qoidalar, ish xatlari. Do'st bilan gaplashganda *as long as* yoki *what if* yaxshiroq." },
        { t: 'check', ex: { k: 'choice', q: "Tuz ko'p solmang, ___ ovqat juda sho'r bo'ladi.", opts: ["otherwise the food will be too salty", "unless the food will be too salty", "in case the food is salty", "provided the food is salty"], a: 0, why: "*Aks holda* ma'nosi: **otherwise**. *Unless* dan keyin yangi gap emas, shart kerak." } },
        { t: 'check', ex: { k: 'tf', q: "*I always carry a charger in case my phone dies* — Telefon o'chsa ham, o'chmasa ham zaryadkani doim olib yuraman.", a: true, why: "**in case** oldindan ehtiyot choralarini bildiradi: telefon o'lishidan oldin tayyorgarlik." } },
      ],
    },
    {
      title: "Tipik xatolar (o'zbek tilidan interferensiya)",
      blocks: [
        { t: 'p', md: "O'zbek tilida **agar ... bo'lmasa** va **agar** o'rniga qo'shimchalar ishlatiladi, shuning uchun bu bog'lovchilar ko'pincha *if* ning sinonimi deb tarjima qilinadi. Natijada quyidagi xatolar tez-tez uchraydi:" },
        { t: 'compare',
          good: { title: "To'g'ri", items: ["Unless you hurry, we'll be late.", "I'll take a coat in case it gets cold.", "Provided that he pays on time, he can stay.", "But for her help, we would have failed."] },
          bad: { title: "Xato", items: ["Unless you don't hurry, we'll be late.", "I'll take a coat in case it will get cold.", "Provided that he will pay on time, he can stay.", "But for her help, we would fail."] } },
        { t: 'check', ex: { k: 'fix', wrong: "Unless you don't call me, I won't know.", a: ["Unless you call me, I won't know.", "If you don't call me, I won't know."], why: "**Unless** o'zi inkor: *unless you call*. Yoki *if you don't call*." } },
        { t: 'check', ex: { k: 'fix', wrong: "Provided that you will arrive early, you can choose your seat.", a: ["Provided that you arrive early, you can choose your seat.", "Provided you arrive early, you can choose your seat."], why: "Shart gapida kelasi zamon uchun **will** kerak emas: oddiy hozirgi zamon." } },
        { t: 'check', ex: { k: 'fix', wrong: "I'll take the map in case I will get lost.", a: ["I'll take the map in case I get lost.", "I will take the map in case I get lost."], why: "**in case** dan keyin ham oddiy hozirgi zamon: *in case I get lost*." } },
      ],
    },
    {
      title: "O'qing va tinglang",
      blocks: [
        { t: 'text', title: 'Working from home: the rules', voice: 'george', en: "Our company has a new policy on working from home. Staff may work from home two days a week, provided that they attend the Monday meeting in the office. Managers will approve the days on condition that the team's work is not affected. If you need to change a day, please tell your manager the week before, otherwise the system will not accept the change. Unless there is an emergency, nobody should work from home on a day when a client visits. Please keep a copy of your files on the shared drive in case your laptop breaks down. In the event of a problem with the network, call the helpdesk. But for the support of the IT team, this change would not have been possible, and we thank them.", uz: "Kompaniyamizda uydan ishlash bo'yicha yangi siyosat bor. Xodimlar haftasiga ikki kun uydan ishlashi mumkin, agar dushanba kungi yig'ilishga ofisga kelsalar. Menejerlar kunlarni jamoa ishiga zarar yetmasligi sharti bilan tasdiqlaydi. Kunni o'zgartirish kerak bo'lsa, menejerga bir hafta oldin ayting, aks holda tizim o'zgarishni qabul qilmaydi. Favqulodda holat bo'lmasa, mijoz keladigan kuni hech kim uydan ishlamasligi kerak. Noutbuk buzilib qolsa deb, fayllaringiz nusxasini umumiy diskda saqlang. Tarmoq bilan muammo bo'lsa, yordam xizmatiga qo'ng'iroq qiling. IT jamoasining yordami bo'lmaganda, bu o'zgarish mumkin bo'lmasdi, ularga rahmat." },
        { t: 'check', ex: { k: 'tf', q: "Staff can work from home without attending any meeting.", a: false, why: "*provided that they attend the Monday meeting* — shart bor." } },
        { t: 'dialog', lines: [
          { who: 'Zarina', en: "Are you taking the car on the mountain trip?", uz: "Tog' safariga mashinani olasizmi?" },
          { who: 'Jack', en: "Only if the weather is good. Supposing it snows, we'd get stuck.", uz: "Faqat ob-havo yaxshi bo'lsa. Faraz qilaylik, qor yog'sa, tiqilib qolamiz." },
          { who: 'Zarina', en: "Let's take chains in case it does. My brother will lend us his, as long as we return them on Sunday.", uz: "Shunday bo'lib qolsa deb zanjirlar olaylik. Akam o'zinikini beradi, faqat yakshanba kuni qaytarsak." },
          { who: 'Jack', en: "Good idea. We should leave early, otherwise we'll arrive after dark.", uz: "Yaxshi fikr. Erta chiqishimiz kerak, aks holda qorong'ida yetib boramiz." },
          { who: 'Zarina', en: "Fine. But for your map, we would have taken the wrong road last time!", uz: "Mayli. O'tgan safar sizning xaritangiz bo'lmaganda, noto'g'ri yo'lga tushib ketgan bo'lardik!" },
        ] },
        { t: 'check', ex: { k: 'choice', q: "Why does Zarina suggest taking chains?", opts: ["Because it may snow", "Because the car is old", "Because her brother asked", "Because the road is closed"], a: 0, why: "*Let's take chains in case it does* (= in case it snows)." } },
      ],
    },
  ],
  words: [
    { en: 'on condition that', uz: "... sharti bilan (rasmiy)", ipa: 'ɒn kənˈdɪʃn ðæt', pos: 'phrase', ex: 'She accepted the job on condition that she could work part-time.', exUz: "U ishni yarim kun ishlashi sharti bilan qabul qildi." },
    { en: 'but for', uz: "... bo'lmaganda", ipa: 'bʌt fɔː', pos: 'phrase', ex: 'But for the rain, we would have walked.', exUz: "Yomg'ir bo'lmaganda, piyoda borardik." },
    { en: 'in the event of', uz: "... yuz bergan taqdirda", ipa: 'ɪn ði ɪˈvent əv', pos: 'phrase', ex: 'In the event of fire, use the stairs.', exUz: "Yong'in yuz bersa, zinadan foydalaning." },
    { en: 'precaution', uz: 'ehtiyot chorasi', ipa: 'prɪˈkɔːʃn', pos: 'noun', ex: 'He took the umbrella as a precaution.', exUz: "U ehtiyot chorasi sifatida soyabonni oldi." },
    { en: 'contingency', uz: "kutilmagan holatga zaxira reja", ipa: 'kənˈtɪndʒənsi', pos: 'noun', ex: 'We have a contingency plan if the speaker cancels.', exUz: "Ma'ruzachi kelmasa, zaxira rejamiz bor." },
    { en: 'proviso', uz: "shart, kelishuvdagi qayd", ipa: 'prəˈvaɪzəʊ', pos: 'noun', ex: 'She accepted the offer with one proviso: she would not work at weekends.', exUz: "U taklifni bitta shart bilan qabul qildi: dam olish kunlari ishlamaydi." },
  ],
  practice: [
    { k: 'match', pairs: [['unless', "agar ... bo'lmasa"], ['as long as', 'faqat shu shart bilan'], ['otherwise', 'aks holda'], ['but for', "... bo'lmaganda"], ['in case', 'ehtiyot chorasi sifatida']] },
    { k: 'choice', q: "We'll cancel the picnic ___ the weather improves.", opts: ['unless', 'in case', 'as long as', 'but for'], a: 0, why: "*Ob-havo yaxshilanmasa* (agar yaxshilanmasa) → **unless**." },
    { k: 'fill', q: "You can use my laptop, ___ that you save your work on the cloud.", a: ['provided', 'providing'], hint: 'rasmiy bog\'lovchi, p...', uz: "Mening noutbukimdan foydalanishingiz mumkin, faqat ishingizni bulutga saqlasangiz.", why: "**provided / providing that** = faqat shart bajarilsa." },
    { k: 'listen', say: 'Take some water in case you get thirsty.', opts: ['Take some water in case you get thirsty.', 'Take some water if you get thirsty.', 'Take some water unless you get thirsty.', 'Take some water so you got thirsty.'], a: 0 },
    { k: 'fill', q: "Book a table now, ___ the restaurant will be full.", a: ['otherwise', 'or else'], uz: "Hoziroq stol band qiling, aks holda restoran to'lib ketadi.", why: "**otherwise / or else** = *if you don't*." },
    { k: 'order', uz: "Siz kech qolmasangiz, biz vaqtida yetib boramiz.", words: ['Unless', 'you', 'are', 'late,', "we'll", 'arrive', 'on', 'time.'], extra: ["aren't", 'if'], why: "**Unless + darak shakl** (inkor emas)." },
    { k: 'fix', wrong: "Unless it doesn't rain, we'll go to the park.", a: ["Unless it rains, we'll go to the park.", "If it doesn't rain, we'll go to the park."], why: "**Unless** o'zi inkor; qo'sh inkor xato." },
    { k: 'choice', q: "I'll take a snack ___ I get hungry on the train. (hungry bo'lmasam ham olaman)", opts: ['in case', 'unless', 'provided that', 'on condition that'], a: 0, why: "Oldindan ehtiyot chorasi → **in case**." },
    { k: 'translate', uz: "Siz mashinani faqat ehtiyotkor haydasangiz olishingiz mumkin.", a: ['You can take the car as long as you drive carefully.', 'You can borrow the car as long as you drive carefully.', 'You can take the car provided that you drive carefully.', 'You can take the car so long as you drive carefully.'], why: "**as long as / provided that + hozirgi zamon**." },
    { k: 'tf', q: "*Provided that he will arrive on time, he'll get the job.* — Gap to'g'ri.", a: false, why: "Shart qismida **will** ishlatilmaydi: *provided that he arrives*." },
    { k: 'fix', wrong: "But for the traffic, we would arrive on time.", a: ["But for the traffic, we would have arrived on time.", "But for the traffic, we'd have arrived on time."], why: "O'tgan zamonga **but for** + **would have + V3**." },
    { k: 'dictation', say: 'Supposing you lost your keys, what would you do?', a: ['Supposing you lost your keys, what would you do?'], uz: "Faraz qilaylik, kalitlaringizni yo'qotdingiz, nima qilardingiz?" },
    { k: 'choice', q: "Qaysi gap eng rasmiy (shartnomada)?", opts: ["The deposit will be refunded on condition that the flat is left clean.", "You'll get your money back if you clean up.", "Clean it or you won't get anything.", "If it's clean, I'll give it back."], a: 0, why: "**On condition that** — eng rasmiy shart bog'lovchisi." },
    { k: 'speak', say: 'I always carry a charger in case my phone dies.', uz: "Telefonim o'chib qolmasin deb, doim zaryadka olib yuraman." },
  ],
  quiz: [
    { k: 'choice', q: "___ you have a valid ticket, you can't enter the hall.", opts: ['Unless', 'Provided that', 'As long as', 'In case'], a: 0, why: "Chiptangiz bo'lmasa kirolmaysiz → **unless**." },
    { k: 'choice', q: "Write down my number ___ you need me.", opts: ['in case', 'unless', 'but for', 'otherwise'], a: 0, why: "Ehtiyot chorasi (kerak bo'lib qolsa deb) → **in case**." },
    { k: 'fill', q: "Call me when you land, ___ I'll worry.", a: ['otherwise', 'or else'], uz: "Qo'nganingizda menga qo'ng'iroq qiling, aks holda xavotir olaman.", why: "**otherwise / or else**." },
    { k: 'fix', wrong: "I won't go unless you don't come.", a: ["I won't go unless you come.", "I won't go if you don't come."], why: "**Unless** + darak." },
    { k: 'fix', wrong: "They can come in case they pay the entrance fee.", a: ["They can come provided that they pay the entrance fee.", "They can come as long as they pay the entrance fee.", "They can come if they pay the entrance fee.", "They can come provided they pay the entrance fee."], why: "Shart ma'nosi uchun **provided / as long as / if**, *in case* emas." },
    { k: 'order', uz: "Sizning yordamingiz bo'lmaganda, men o'tmagan bo'lardim.", words: ['But', 'for', 'your', 'help,', 'I', 'would', 'have', 'failed.'], extra: ['will', 'fail'], why: "**But for + ot, would have + V3**." },
    { k: 'listen', say: 'You can stay as long as you like.', opts: ['You can stay as long as you like.', 'You can stay unless you like.', 'You can stay in case you like.', 'You cannot stay as long as you like.'], a: 0 },
    { k: 'tf', q: "*I'll take a coat in case it gets cold.* — Sovuq bo'lsa-bo'lmasa, palto olaman.", a: true, why: "**in case** — oldindan ehtiyot." },
  ],
  summary: [
    "**Unless** = *if ... not*; unless'dan keyin inkor kerak emas: *unless you hurry*.",
    "**As long as, provided (that), on condition that** = faqat shu shart bilan. Keyin **will** yo'q: hozirgi zamon.",
    "**Otherwise / or else** = aks holda; **but for + ot** = *... bo'lmaganda* (ko'pincha *would have + V3*).",
    "**In case** = ehtiyot chorasi (shart emas): *Take an umbrella in case it rains.*",
    "Yangi iboralar: **on condition that, but for, in the event of, precaution, contingency, proviso**.",
  ],
  homework: "Ish yoki o'qish joyingiz uchun 5 ta qoida yozing, har birida boshqa bog'lovchi ishlating: *unless, as long as, provided that, otherwise, in case*. Keyin *but for* bilan bitta o'tgan zamon gap yozing.",
};

export default lesson;
