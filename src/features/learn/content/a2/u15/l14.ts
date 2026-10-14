import type { Lesson } from '../../../types';

// Mini lesson (skill): listening and speaking, at the doctor's. New details (stomach ache, fever, medicine) beyond the l6 dialogue.
const lesson: Lesson = {
  id: 'u15-l14',
  title: "Listening and speaking: at the doctor's",
  titleUz: "Tinglash va gapirish: shifokorda",
  mini: true,
  kind: 'skill',
  goal: "Shifokorning savollari va maslahatini **tinglab tushunasiz**, o'z shikoyatingizni aytasiz (*I've got a stomach ache*) va **Could you repeat that, please?** deb so'raysiz.",
  slides: [
    {
      title: "Tinglang: qorin og'rig'i",
      blocks: [
        { t: 'p', md: "Dialogni tinglang (▶). Avval umumiy ma'noni tushuning: **nima og'riydi? nima bo'lgan? shifokor qanday maslahat beradi?**" },
        { t: 'dialog', lines: [
          { who: 'Dr Karim', en: "Good afternoon, Nilufar. What's the problem?", uz: "Xayrli kun, Nilufar. Nima bezovta qilyapti?" },
          { who: 'Nilufar', en: "I've got a terrible stomach ache, and I feel sick.", uz: "Qornim qattiq og'riyapti va ko'nglim aynayapti." },
          { who: 'Dr Karim', en: "Did you eat anything strange yesterday?", uz: "Kecha g'alati biror narsa yedingizmi?" },
          { who: 'Nilufar', en: "Yes, I had fish in a new restaurant. I was ill all night.", uz: "Ha, yangi restoranda baliq yedim. Tun bo'yi kasal bo'ldim." },
          { who: 'Dr Karim', en: "Do you have a fever?", uz: "Isitmangiz bormi?" },
          { who: 'Nilufar', en: "A little. My temperature was thirty-eight this morning.", uz: "Ozgina. Ertalab haroratim o'ttiz sakkiz edi." },
          { who: 'Dr Karim', en: "OK. You should drink plenty of water and you shouldn't eat heavy food for two days. Take this medicine twice a day.", uz: "Mayli. Ko'p suv ichishingiz kerak va ikki kun og'ir ovqat yemasligingiz kerak. Bu dorini kuniga ikki marta iching." },
          { who: 'Nilufar', en: "Could you write the name down, please?", uz: "Nomini yozib bera olasizmi?" },
          { who: 'Dr Karim', en: "Of course. And if you don't feel better by Friday, come back.", uz: "Albatta. Agar juma kuniga qadar yaxshi bo'lmasangiz, qaytib keling." },
        ] },
        { t: 'check', ex: { k: 'choice', q: "What did Nilufar eat yesterday?", opts: ['Fish', 'Chicken', 'Rice', 'Salad'], a: 0, why: "*I had fish in a new restaurant.*" } },
        { t: 'check', ex: { k: 'listen', say: 'Take this medicine twice a day.', opts: ['Take this medicine twice a day.', 'Take this medicine once a day.', 'Take this medicine three times a day.', 'Take this medicine every day.'], a: 0 } },
      ],
    },
    {
      title: "Foydali iboralar",
      blocks: [
        { t: 'table', head: ['Maqsad', 'Ibora'], speak: [1], rows: [
          ["Shikoyat aytish", "I've got a stomach ache."],
          ["Shikoyat aytish", "My back hurts."],
          ["Shifokor so'raydi", "Where does it hurt?"],
          ["Shifokor so'raydi", "Do you have a fever?"],
          ["Shifokor maslahat beradi", "You should stay in bed."],
          ["Dori haqida", "Take this tablet twice a day."],
          ["Tushunmadingiz", "Could you repeat that, please?"],
          ["Tushunmadingiz", "Could you speak more slowly, please?"],
        ] },
        { t: 'tip', tone: 'info', md: "Dori haqida: **once a day** (kuniga bir marta), **twice a day** (kuniga ikki marta), **three times a day** (kuniga uch marta)." },
        { t: 'compare', good: { title: "To'g'ri", items: ["I've got a stomach ache.", "Where does it hurt?", "Could you repeat that, please?"] }, bad: { title: "Xato", items: ["I have stomach ache pain.", "Where it hurts?", "Repeat that, please!"] } },
        { t: 'check', ex: { k: 'fill', q: "Take this tablet three ___ a day.", a: ['times'], uz: "Bu tabletkani kuniga uch marta iching.", why: "**three times a day**." } },
        { t: 'check', ex: { k: 'choice', q: "Shifokorning gapini tushunmadingiz. Siz:", opts: ["Could you repeat that, please?", "Repeat!", "What?", "You repeat me."], a: 0, why: "Muloyim iltimos — **Could you …, please?**" } },
      ],
    },
    {
      title: "Tinglang: qabulni o'zgartirish",
      blocks: [
        { t: 'p', md: "Ba'zan shifokorga qo'ng'iroq qilib, qabul vaqtini o'zgartirish kerak bo'ladi. Dialogni tinglang." },
        { t: 'dialog', lines: [
          { who: 'Helen', en: "Good morning, Green Street Clinic. Can I help you?", uz: "Xayrli tong, Green Street klinikasi. Sizga yordam bera olamanmi?" },
          { who: 'Sam', en: "Hello. I have an appointment on Thursday, but I can't come. Could I change it, please?", uz: "Salom. Payshanba kuni qabulim bor, lekin kela olmayman. O'zgartirsam bo'ladimi?" },
          { who: 'Helen', en: "Of course. Would Friday at ten o'clock be OK?", uz: "Albatta. Juma kuni soat o'nda bo'ladimi?" },
          { who: 'Sam', en: "Yes, that's fine. Do I have to bring anything?", uz: "Ha, yaxshi. Biror narsa olib kelishim kerakmi?" },
          { who: 'Helen', en: "Just your card. And you should arrive ten minutes early.", uz: "Faqat kartangizni. Va o'n daqiqa erta kelishingiz kerak." },
        ] },
        { t: 'check', ex: { k: 'tf', q: "Sam can come on Thursday.", a: false, why: "*I can't come.*" } },
        { t: 'check', ex: { k: 'dictation', say: "I have an appointment on Thursday, but I can't come.", a: ["I have an appointment on Thursday, but I can't come.", 'I have an appointment on Thursday, but I cannot come.', 'I have an appointment on Thursday, but I can not come.'] } },
      ],
    },
    {
      title: "Endi siz ayting",
      blocks: [
        { t: 'p', md: "Siz bemorsiz. Quyidagi savollarga o'zingiz javob bering (ovoz chiqarib). Shifokor sizdan shularni so'raydi:" },
        { t: 'table', head: ['Shifokor', 'Sizning javobingiz (namuna)'], speak: [0, 1], rows: [
          ["What's the problem?", "I've got a headache and I feel tired."],
          ["When did it start?", "Two days ago."],
          ["Do you have a fever?", "No, I don't. / Yes, a little."],
        ] },
        { t: 'tip', tone: 'good', md: "Gapirish rejasi: **1) muammo** (*I've got…*), **2) qachon boshlandi** (*It started two days ago*), **3) iltimos** (*Could you tell me what to do?*). Sekin va aniq gapiring." },
        { t: 'check', ex: { k: 'order', uz: "Qorin og'rig'i bor.", words: ["I've", 'got', 'a', 'stomach', 'ache.'], extra: ['have', 'an'], alt: [['I', 'have', 'got', 'a', 'stomach', 'ache.']] } },
      ],
    },
  ],
  words: [
    { en: 'stomach ache', uz: "qorin og'rig'i", ipa: 'ˈstʌm.ək eɪk', pos: 'noun', ex: 'I have a stomach ache.', exUz: "Qornim og'riyapti." },
    { en: 'fever', uz: 'isitma', ipa: 'ˈfiː.və', pos: 'noun', ex: 'The child has a high fever.', exUz: "Bolada yuqori isitma bor." },
    { en: 'medicine', uz: 'dori', ipa: 'ˈmed.sən', pos: 'noun', ex: 'Take this medicine after lunch.', exUz: "Bu dorini tushlikdan keyin iching." },
    { en: 'tablet', uz: 'tabletka', ipa: 'ˈtæb.lət', pos: 'noun', ex: 'Take one tablet in the morning.', exUz: "Ertalab bitta tabletka iching." },
    { en: 'twice a day', uz: 'kuniga ikki marta', ipa: 'twaɪs ə deɪ', pos: 'phrase', ex: 'Brush your teeth twice a day.', exUz: "Tishingizni kuniga ikki marta yuving." },
  ],
  practice: [
    { k: 'listen', say: "I've got a stomach ache.", opts: ["I've got a stomach ache.", "I've got a headache.", "I've got a sore throat.", "I've got a fever."], a: 0 },
    { k: 'listen', say: 'Take this medicine twice a day.', opts: ['Take this medicine twice a day.', 'Take this medicine three times a day.', 'Take this tablet once a day.'], a: 0 },
    { k: 'choice', q: "Where does it hurt?", opts: ["My stomach hurts.", "Yes, it does.", "Two days ago.", "Twice a day."], a: 0, why: "**Where does it hurt?** — qayeri og'riydi." },
    { k: 'choice', q: "Shifokor: \"You should stay in bed for two days.\" Bu — nima?", opts: ["Maslahat", "Taqiq", "Savol", "Rad etish"], a: 0, why: "**should** — maslahat." },
    { k: 'fill', q: "Do you have a ___? Your head is very hot.", a: ['fever', 'temperature'], uz: "Isitmangiz bormi? Boshingiz juda issiq.", why: "Isitma — **fever** yoki **temperature**." },
    { k: 'fill', q: "You ___ drink plenty of water. (maslahat)", a: ['should'], uz: "Ko'p suv ichishingiz kerak.", why: "Maslahat — **should**." },
    { k: 'dictation', say: 'Could you repeat that, please?', a: ['Could you repeat that, please?', 'Could you repeat that please?'] },
    { k: 'dictation', say: 'You shouldn\'t eat heavy food.', a: ["You shouldn't eat heavy food.", 'You should not eat heavy food.'], uz: "Og'ir ovqat yemasligingiz kerak." },
    { k: 'order', uz: "Bu dorini kuniga ikki marta iching.", words: ['Take', 'this', 'medicine', 'twice', 'a', 'day.'], extra: ['two', 'times'] },
    { k: 'fix', wrong: "Where it hurts?", a: ["Where does it hurt?"], why: "Savolda **does** kerak: *Where does it hurt?*" },
    { k: 'translate', uz: "Qornim og'riyapti va ko'nglim aynayapti.", a: ["I've got a stomach ache and I feel sick.", "I have a stomach ache and I feel sick.", "I have got a stomach ache and I feel sick.", "My stomach hurts and I feel sick."] },
    { k: 'speak', say: "I've got a headache and I feel tired.", uz: "Boshim og'riyapti va o'zimni charchagan his qilyapman." },
    { k: 'speak', say: 'Could you speak more slowly, please?', uz: "Sekinroq gapira olasizmi?" },
    { k: 'speak', say: 'I should stay in bed and drink plenty of water.', uz: "Men yotib dam olishim va ko'p suv ichishim kerak." },
  ],
  quiz: [
    { k: 'choice', q: "Shifokor: \"Do you have a fever?\" Javob:", opts: ["Yes, a little.", "Yes, I should.", "At ten o'clock.", "Twice a day."], a: 0, why: "Savolga mos javob: **Yes, a little.**" },
    { k: 'choice', q: "Qaysi gap kuniga bir marta degani?", opts: ['once a day', 'twice a day', 'two a day', 'one time day'], a: 0, why: "**once a day**." },
    { k: 'fill', q: "Could you ___ that, please? I didn't understand.", a: ['repeat'], why: "**Could you repeat that?**" },
    { k: 'fill', q: "You ___ go to work today. Stay at home. (maslahat: bormasligingiz kerak)", a: ["shouldn't", 'should not'], why: "Inkor maslahat — **shouldn't**." },
    { k: 'tf', q: "**Where does it hurt?** — shifokor kasallik qachon boshlanganini so'rayapti.", a: false, why: "Bu savol qayeri og'rishini so'raydi." },
    { k: 'order', uz: "Qayeringiz og'riyapti?", words: ['Where', 'does', 'it', 'hurt?'], extra: ['do', 'hurts'] },
    { k: 'translate', uz: "Menda isitma bor.", a: ['I have a fever.', "I've got a fever.", 'I have got a fever.'] },
    { k: 'listen', say: 'You should drink plenty of water.', opts: ['You should drink plenty of water.', "You shouldn't drink plenty of water.", 'You should drink a little water.'], a: 0 },
  ],
  summary: [
    "Shikoyat: **I've got a stomach ache. / My back hurts. / I feel sick.** Shifokor: **Where does it hurt? Do you have a fever?**",
    "Maslahat: **You should… / You shouldn't…**. Dori: **once / twice / three times a day**.",
    "Tushunmasangiz: **Could you repeat that, please? Could you speak more slowly?**",
    "Yangi so'zlar: **stomach ache, fever, medicine, tablet, twice a day**.",
  ],
  homework: "Shifokor bilan 6 qatorli dialogni yozing va ovoz chiqarib ikkala rolni o'qing: shikoyat, shifokorning savoli, maslahat (**should**) va bitta iltimos (**Could you…?**).",
};

export default lesson;
