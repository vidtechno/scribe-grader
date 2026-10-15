import type { Lesson } from '../../../types';

// Mini lesson (situation): solving a problem at work or with technology. Uses phrasal verbs (l6), future forms (l2), purpose (l12), certainty (l13).
const lesson: Lesson = {
  id: 'u22-l10',
  title: 'Solving a problem at work or with technology',
  titleUz: 'Ishdagi yoki texnik muammoni hal qilish',
  mini: true,
  kind: 'situation',
  goal: "Texnik yordamga murojaat qilasiz (*My laptop keeps crashing*), muammoni aniq tushuntirasiz, yechim so'raysiz va ishda muddatni o'zgartirish uchun muloyim iltimos qilasiz (*Would it be possible to…?*).",
  slides: [
    {
      title: 'Muammoni tushuntirish',
      blocks: [
        { t: 'p', md: "Texnik yordamga (IT support) murojaat qilganda 3 narsani ayting: **nima ishlamayapti**, **qachon boshlandi**, **nima urinib ko'rdingiz**. Shunda ular tez yordam beradi." },
        { t: 'table', head: ['Maqsad', 'Ibora'], speak: [1], rows: [
          ['Muammoni aytish', 'I\'m having a problem with my laptop.'],
          ['Takrorlanadigan muammo', 'It keeps crashing.'],
          ['Qachon boshlandi', 'It started after the last update.'],
          ['Nima qilgansiz', 'I\'ve already tried restarting it.'],
          ['Xato xabari', 'It says there is an error with the connection.'],
          ['Natija', 'It still doesn\'t work.'],
        ] },
        { t: 'tip', tone: 'info', md: "**keep + -ing** — nimadir qayta-qayta bo'layotganini bildiradi: *It keeps crashing.* (Gerund, 1-darsdagi qolip.) **try + -ing** esa 'sinab ko'rmoq': *I tried restarting it.*" },
        { t: 'check', ex: { k: 'fill', q: 'My screen ___ freezing. (keep)', a: ['keeps'], uz: "Ekranim qotib qolaveradi.", why: "**keep + -ing**: ekran qayta-qayta qotadi." } },
      ],
    },
    {
      title: 'Dialog: texnik yordam',
      blocks: [
        { t: 'dialog', lines: [
          { who: 'Emma', en: 'Technical support, Emma speaking. How can I help?', uz: "Texnik yordam, Emma eshitadi. Sizga qanday yordam bera olaman?" },
          { who: 'Karim', en: 'Hello. I\'m having a problem with my work laptop. It keeps crashing when I open the spreadsheet.', uz: "Salom. Ish noutbukim bilan muammo bor. Jadvalni ochsam, u qayta-qayta o'chib qoladi." },
          { who: 'Emma', en: 'I see. When did it start?', uz: "Tushunarli. Qachon boshlandi?" },
          { who: 'Karim', en: 'Yesterday, after the update. I\'ve already tried restarting it, but it didn\'t help.', uz: "Kecha, yangilanishdan keyin. Uni qayta ishga tushirib ko'rdim, lekin foyda bermadi." },
          { who: 'Emma', en: 'Have you backed up your files?', uz: "Fayllaringizni zaxiralab qo'yganmisiz?" },
          { who: 'Karim', en: 'Yes, everything is on the cloud. Do you think you can fix it?', uz: "Ha, hammasi bulutda. Tuzata olasiz deb o'ylaysizmi?" },
          { who: 'Emma', en: 'I\'ll probably need to log in remotely. Could you send me a screenshot of the error first?', uz: "Ehtimol masofadan kirishim kerak bo'ladi. Avval xatoning skrinshotini yubora olasizmi?" },
          { who: 'Karim', en: 'Sure. I\'ll send it in two minutes. I\'ve got a deadline today, so it\'s quite urgent.', uz: "Albatta. Ikki daqiqada yuboraman. Bugun muddatim bor, shuning uchun juda shoshilinch." },
          { who: 'Emma', en: 'Understood. I\'ll look into it straight away and call you back within an hour.', uz: "Tushundim. Darrov ko'rib chiqaman va bir soat ichida qo'ng'iroq qilaman." },
        ] },
        { t: 'check', ex: { k: 'choice', q: 'When did the problem start?', opts: ['After an update yesterday', 'Last month', 'This morning, in the car', 'Last year'], a: 0, why: "*Yesterday, after the update.*" } },
        { t: 'check', ex: { k: 'tf', q: 'Karim has not saved his files.', a: false, why: "*Yes, everything is on the cloud.*" } },
      ],
    },
    {
      title: 'Ishda: muddatni so\'rash',
      blocks: [
        { t: 'p', md: "Ba'zan muammo texnikadan emas, **vaqtdan**. Muddatni o'zgartirish yoki yordam so'rashda muloyim bo'ling: **Would it be possible to…?** / **I'm afraid…**" },
        { t: 'dialog', lines: [
          { who: 'Lily', en: 'Hi Jack, do you have a minute? I\'m afraid I won\'t finish the report by Friday.', uz: "Salom, Jack, bir daqiqang bormi? Afsuski, hisobotni jumagacha tugatolmayman." },
          { who: 'Jack', en: 'What\'s the problem?', uz: "Muammo nimada?" },
          { who: 'Lily', en: 'The system was down for two days, so I couldn\'t get the data. Would it be possible to have an extra day?', uz: "Tizim ikki kun ishlamadi, shuning uchun ma'lumotlarni ola olmadim. Bir kun qo'shimcha vaqt olsam bo'ladimi?" },
          { who: 'Jack', en: 'Monday is fine. By then you will have finished it, I hope. Let me know if you need any help.', uz: "Dushanba bo'ladi. O'sha vaqtga kelib tugatgan bo'lasiz, umid qilaman. Yordam kerak bo'lsa, ayting." },
          { who: 'Lily', en: 'Thanks. I\'ll definitely send it first thing on Monday morning.', uz: "Rahmat. Dushanba ertalab birinchi ish sifatida albatta yuboraman." },
        ] },
        { t: 'table', head: ['Maqsad', 'Ibora'], speak: [1], rows: [
          ['Iltimos', 'Would it be possible to have an extra day?'],
          ['Muammoni oldindan aytish', 'I\'m afraid I won\'t finish on time.'],
          ['Sabab', 'The system was down, so I couldn\'t get the data.'],
          ['Yordam so\'rash', 'Could you give me a hand with this?'],
          ['Va\'da', 'I\'ll let you know as soon as it\'s done.'],
        ] },
        { t: 'check', ex: { k: 'order', uz: "Yana bir kun olsam bo'ladimi?", words: ['Would', 'it', 'be', 'possible', 'to', 'have', 'an', 'extra', 'day?'], extra: ['can', 'could'], why: "Muloyim iltimos: **Would it be possible to…?**" } },
      ],
    },
  ],
  words: [
    { en: 'crash', uz: 'ishdan chiqmoq, qotib qolmoq', ipa: 'kræʃ', pos: 'verb', ex: 'My computer crashed twice today.', exUz: "Kompyuterim bugun ikki marta ishdan chiqdi." },
    { en: 'password', uz: 'parol', ipa: 'ˈpɑːs.wɜːd', pos: 'noun', ex: 'I forgot my password again.', exUz: "Parolimni yana unutdim." },
    { en: 'backup', uz: 'zaxira nusxa', ipa: 'ˈbæk.ʌp', pos: 'noun', ex: 'Always make a backup of your files.', exUz: "Fayllaringizning zaxira nusxasini doim oling." },
    { en: 'urgent', uz: 'shoshilinch', ipa: 'ˈɜː.dʒənt', pos: 'adj', ex: 'This email is urgent.', exUz: "Bu xat shoshilinch." },
    { en: 'error', uz: 'xato', ipa: 'ˈer.ər', pos: 'noun', ex: 'The screen shows an error message.', exUz: "Ekranda xato xabari ko'rinyapti." },
  ],
  practice: [
    { k: 'match', pairs: [['crash', 'ishdan chiqmoq'], ['password', 'parol'], ['backup', 'zaxira nusxa'], ['urgent', 'shoshilinch'], ['error', 'xato']] },
    { k: 'choice', q: 'My app ___ crashing since the update.', opts: ['keeps', 'keep', 'is keep', 'keeping'], a: 0, why: "**keeps + -ing**." },
    { k: 'choice', q: 'Which is the most polite request?', opts: ['Would it be possible to move the deadline?', 'Move the deadline.', 'You must move the deadline.', 'I want a new deadline now.'], a: 0, why: "**Would it be possible to…?** — eng muloyim." },
    { k: 'fill', q: "I'm ___ a problem with my email. (having)", a: ['having'], uz: "Elektron pochtam bilan muammo bor.", why: "**I'm having a problem with…**" },
    { k: 'fill', q: 'I have already tried ___ it off and on again. (turn)', a: ['turning'], uz: "Uni o'chirib-yoqib ko'rdim.", why: "**try + -ing** — sinab ko'rmoq." },
    { k: 'fill', q: 'Could you send me a ___ of the error?', a: ['screenshot'], uz: "Xatoning skrinshotini yubora olasizmi?", why: "**screenshot** — ekran surati." },
    { k: 'order', uz: "Ehtimol, men tizimga masofadan kirishim kerak bo'ladi.", words: ["I'll", 'probably', 'need', 'to', 'log', 'in', 'remotely.'], extra: ['definitely', 'on'], alt: [['I', 'will', 'probably', 'need', 'to', 'log', 'in', 'remotely.']], why: "will + **probably** + fe'l." },
    { k: 'order', uz: "Afsuski, hisobotni o'z vaqtida tugatolmayman.", words: ["I'm", 'afraid', "I", "won't", 'finish', 'the', 'report', 'on', 'time.'], extra: ['not', 'to'], alt: [['I', 'am', 'afraid', 'I', "won't", 'finish', 'the', 'report', 'on', 'time.']], why: "**I'm afraid…** — yomon xabarni muloyim aytish." },
    { k: 'fix', wrong: 'I am having problem with my printer.', a: ['I am having a problem with my printer.', "I'm having a problem with my printer.", 'I have a problem with my printer.'], hint: 'artikl', why: "Sanaladigan ot oldida **a**: *a problem*." },
    { k: 'fix', wrong: 'My laptop is crash every day.', a: ['My laptop crashes every day.', 'My laptop is crashing every day.'], why: "**is** va fe'lning asosiy shakli birga kelmaydi." },
    { k: 'translate', uz: "Hamma narsani bulutga zaxiralab qo'ydim.", a: ["I've backed everything up to the cloud.", 'I have backed everything up to the cloud.', "I've backed up everything to the cloud.", 'I have backed up everything to the cloud.'], why: "**back up** — zaxiralamoq." },
    { k: 'listen', say: 'I will look into it and call you back within an hour.', opts: ['I will look into it and call you back within an hour.', 'I will look into it and call you back after an hour.', 'I looked into it and called you back.', 'I will look for it and call you tomorrow.'], a: 0, why: "**look into** — ko'rib chiqmoq." },
    { k: 'speak', say: 'I am having a problem with my laptop. It keeps crashing.' },
  ],
  quiz: [
    { k: 'choice', q: 'The system was down, ___ I could not get the data.', opts: ['so', 'because', 'but', 'to'], a: 0, why: "Natija → **so**." },
    { k: 'choice', q: 'I am afraid I ___ finish by Friday.', opts: ["won't", 'don\'t', 'am not', 'haven\'t'], a: 0, why: "Kelajak: **won't finish**." },
    { k: 'fill', q: 'The ___ is tomorrow, so it is urgent.', a: ['deadline'], uz: "Oxirgi muddat ertaga, shuning uchun shoshilinch.", why: "**deadline**." },
    { k: 'fill', q: 'Always make a ___ of important files.', a: ['backup', 'back-up', 'back up'], uz: "Muhim fayllarning doim zaxira nusxasini oling.", why: "**backup** — zaxira." },
    { k: 'fix', wrong: 'It keeps to crash when I open the app.', a: ['It keeps crashing when I open the app.'], why: "**keep + -ing**." },
    { k: 'order', uz: "Shu zahoti ko'rib chiqaman.", words: ["I'll", 'look', 'into', 'it', 'straight', 'away.'], extra: ['for', 'at'], alt: [['I', 'will', 'look', 'into', 'it', 'straight', 'away.']], why: "**look into** — tekshirmoq." },
    { k: 'tf', q: "'Would it be possible to…?' is a polite way to ask.", a: true, why: "Ha, muloyim iltimos." },
    { k: 'translate', uz: "Qo'shimcha bir kun olsam bo'ladimi?", a: ['Would it be possible to have an extra day?', 'Could I have an extra day?', 'Would it be possible to have one more day?', 'Could I have one more day?'], why: "Muloyim iltimos." },
  ],
  summary: [
    "Muammoni tushuntirish: **I'm having a problem with…**, **It keeps crashing**, **It started after…**, **I've already tried…ing**.",
    "**keep + -ing** takrorlanuvchi holat; **try + -ing** sinab ko'rish. **It says there is an error** — xato xabari.",
    "Yordam va vaqt so'rash: **Would it be possible to…?**, **I'm afraid I won't…**, **Could you give me a hand?**",
    "Va'da: **I'll look into it**, **I'll let you know**, **I'll definitely send it on Monday.**",
  ],
  homework: "O'zingiz bilan bo'lgan haqiqiy texnik muammoni (internet, telefon, printer) 5-6 gap bilan inglizcha tasvirlab bering: nima, qachon, nima urindingiz.",
};

export default lesson;
