import type { Lesson } from '../../../types';

// Mini lesson (skill): listening and speaking about a dilemma (a difficult choice). Uses the conditionals, wish and advice phrases of the unit.
const lesson: Lesson = {
  id: 'u20-l14',
  title: 'Listening and speaking: a dilemma',
  titleUz: "Tinglash va gapirish: qiyin tanlov",
  mini: true,
  kind: 'skill',
  goal: "Qiyin tanlov haqidagi suhbatni **tinglab tushunasiz**, ikkala variantning yaxshi va yomon tomonlarini aytasiz (*If I took the job, I would…*) va **o'z qaroringizni** sabab bilan bayon qilasiz.",
  slides: [
    {
      title: "Tinglang: ish yoki o'qish?",
      blocks: [
        { t: 'p', md: "Sardor uchun qiyin tanlov: yaxshi ish taklifi bor, lekin u o'qishni davom ettirishni ham xohlaydi. Dialogni tinglang. Avval umumiy ma'noni tushuning: **muammo nima? ikkala variant qanday?**" },
        { t: 'dialog', lines: [
          { who: 'Sardor', en: "Nilufar, I have a real dilemma. A company has offered me a job, but I also want to finish my master's degree.", uz: "Nilufar, menda qiyin tanlov bor. Bir kompaniya menga ish taklif qildi, lekin men magistraturani ham tugatmoqchiman." },
          { who: 'Nilufar', en: "That's a big decision. What would happen if you took the job?", uz: "Bu katta qaror. Ishni qabul qilsang nima bo'ladi?" },
          { who: 'Sardor', en: "I would earn good money, but I wouldn't have time to study. I'd probably have to stop my course.", uz: "Yaxshi pul topardim, lekin o'qishga vaqtim bo'lmasdi. Ehtimol, kursimni to'xtatishimga to'g'ri kelardi." },
          { who: 'Nilufar', en: "And if you stayed at university?", uz: "Universitetda qolsang-chi?" },
          { who: 'Sardor', en: "I would finish my degree next year, but I might lose this job offer.", uz: "Kelasi yil diplomimni tugatardim, lekin bu ish taklifini yo'qotishim mumkin." },
          { who: 'Nilufar', en: "Have you asked the company if you can start later?", uz: "Kompaniyadan keyinroq boshlasam bo'ladimi, deb so'radingmi?" },
          { who: 'Sardor', en: "Not yet. I think I'll call them tomorrow. It depends on their answer.", uz: "Hali yo'q. Ertaga qo'ng'iroq qilaman deb o'ylayman. Bu ularning javobiga bog'liq." },
          { who: 'Nilufar', en: "Good idea. If I were you, I'd try that first.", uz: "Yaxshi fikr. Sening o'rningda bo'lsam, avval shuni sinab ko'rardim." },
        ] },
        { t: 'check', ex: { k: 'choice', q: "What is Sardor's problem?", opts: ['He must choose between a job and his studies.', 'He cannot find a job.', 'He wants to move abroad.', 'He failed an exam.'], a: 0, why: "Ish taklifi va magistratura o'rtasida tanlov." } },
        { t: 'check', ex: { k: 'listen', say: 'I would earn good money, but I would not have time to study.', opts: ['I would earn good money, but I would not have time to study.', 'I earn good money, but I do not have time to study.', 'I would earn good money, and I would have time to study.', 'I earned good money, but I had no time to study.'], a: 0 } },
      ],
    },
    {
      title: "Variantlarni solishtirish",
      blocks: [
        { t: 'table', head: ['Maqsad', 'Ibora'], speak: [1], rows: [
          ["Muammoni aytish", "I have a real dilemma."],
          ["Birinchi variant", "If I took the job, I would earn more money."],
          ["Ikkinchi variant", "On the other hand, if I stayed, I'd finish my degree."],
          ["Yaxshi tomoni", "The good thing about it is that…"],
          ["Yomon tomoni", "The problem is that…"],
          ["Bog'liqlik", "It depends on…"],
          ["Qaror", "In the end, I've decided to…"],
        ] },
        { t: 'tip', tone: 'info', md: "Ikkala variantni bildirish uchun **second conditional** (*If I took…, I would…*) ishlating. **On the other hand** — \"boshqa tomondan\", **It depends on** — \"…ga bog'liq\" (*on* shart!)." },
        { t: 'compare',
          good: { title: "To'g'ri", items: ["It depends on the salary.", "If I moved, I would miss my family.", "On the other hand, it is a great chance."] },
          bad: { title: 'Xato', items: ["It depends of the salary.", "If I will move, I would miss my family.", "In other hand, it is a great chance."] } },
        { t: 'check', ex: { k: 'fill', q: "It depends ___ the answer of the company.", a: ['on'], why: "**depend on** — doim **on** bilan." } },
        { t: 'check', ex: { k: 'choice', q: "Ikkinchi variantga o'tish uchun:", opts: ["On the other hand, …", "In other hand, …", "At the other hand, …", "On other hand, …"], a: 0, why: "To'g'ri ibora: **On the other hand**." } },
      ],
    },
    {
      title: "Tinglang: qaror",
      blocks: [
        { t: 'p', md: "Endi bir ayol o'z qarorini aytib beradi. Matnni tinglang va savollarga javob bering." },
        { t: 'text', title: 'My decision', voice: 'emma', en: "Last year I had a difficult decision to make. My company offered me a job in another city, with a higher salary. If I had accepted it, I would have left my family and my friends. On the other hand, it was a great chance for my career. I talked it over with my sister for a long time. In the end, I decided to stay, because family is more important to me than money. Now I sometimes wonder what would have happened if I had gone. But I don't regret my choice.", uz: "O'tgan yili menga qiyin qaror qabul qilish kerak bo'ldi. Kompaniyam menga boshqa shaharda ko'proq maosh bilan ish taklif qildi. Uni qabul qilganimda, oilam va do'stlarimni tark etgan bo'lardim. Boshqa tomondan, bu karyeram uchun ajoyib imkoniyat edi. Opam bilan uzoq gaplashib oldim. Oxir-oqibat qolishga qaror qildim, chunki men uchun oila puldan muhimroq. Hozir ba'zan, agar ketganimda nima bo'lardi, deb o'ylab qolaman. Lekin tanlovimdan pushaymon emasman." },
        { t: 'check', ex: { k: 'tf', q: "The woman accepted the job in the other city.", a: false, why: "*I decided to stay.*" } },
        { t: 'check', ex: { k: 'choice', q: "Why did she stay?", opts: ['Family is more important to her than money.', 'The salary was too low.', 'She did not like the city.', 'Her boss told her to stay.'], a: 0, why: "*Family is more important to me than money.*" } },
        { t: 'check', ex: { k: 'dictation', say: "I don't regret my choice.", a: ["I don't regret my choice.", 'I do not regret my choice.'] } },
      ],
    },
    {
      title: "Endi siz ayting",
      blocks: [
        { t: 'p', md: "Quyidagi savollarga ovoz chiqarib javob bering (har biriga 2–3 gap). O'zingizning haqiqiy tanlovingizni tasavvur qiling." },
        { t: 'table', head: ['Savol', 'Namuna javob'], speak: [0, 1], rows: [
          ["What would you do if you got a job abroad?", "If I got a job abroad, I would take it, because I'd like to see the world."],
          ["What is the good thing about studying and working at the same time?", "The good thing is that you learn and earn money."],
          ["Is it hard to make big decisions?", "Yes, it depends on the situation, but I usually talk it over with my family."],
        ] },
        { t: 'tip', tone: 'good', md: "Gapirish rejasi: **1) muammo** (*I have a dilemma*), **2) birinchi variant** (*If I…, I would…*), **3) ikkinchi variant** (*On the other hand…*), **4) qaror** (*In the end, I'd…*). To'xtamasdan, sekin va aniq gapiring." },
        { t: 'check', ex: { k: 'order', uz: "Bu vaziyatga bog'liq.", words: ['It', 'depends', 'on', 'the', 'situation.'], extra: ['of', 'from'], why: "**depend on**." } },
      ],
    },
  ],
  words: [
    { en: 'dilemma', uz: "qiyin tanlov, ikkilanish", ipa: 'dɪˈlem.ə', pos: 'noun', ex: "I'm in a real dilemma.", exUz: "Men haqiqiy ikkilanishdaman." },
    { en: 'consult', uz: "maslahatlashmoq", ipa: 'kənˈsʌlt', pos: 'verb', ex: "You should consult a lawyer before you sign anything.", exUz: "Biror narsaga imzo chekishdan oldin advokat bilan maslahatlashing." },
    { en: 'reasonable', uz: "o'rinli, mantiqli", ipa: 'ˈriː.zən.ə.bəl', pos: 'adj', ex: "It sounds like a reasonable offer to me.", exUz: "Menga bu o'rinli taklifdek tuyuladi." },
    { en: 'option', uz: "variant, imkoniyat", ipa: 'ˈɒp.ʃən', pos: 'noun', ex: "We have two options.", exUz: "Bizda ikkita variant bor." },
    { en: 'cautious', uz: "ehtiyotkor, hushyor", ipa: 'ˈkɔː.ʃəs', pos: 'adj', ex: "She is cautious about spending money on new gadgets.", exUz: "U yangi gadjetlarga pul sarflashda ehtiyotkor." },
  ],
  practice: [
    { k: 'listen', say: 'I have a real dilemma.', opts: ['I have a real dilemma.', 'I have a real problem.', 'I had a real dilemma.', 'I have a real decision.'], a: 0 },
    { k: 'listen', say: 'If I took the job, I would earn more money.', opts: ['If I took the job, I would earn more money.', 'If I take the job, I will earn more money.', 'If I had taken the job, I would have earned more money.', 'If I took the job, I would earn less money.'], a: 0 },
    { k: 'match', pairs: [['dilemma', 'qiyin tanlov'], ['consult', 'maslahatlashmoq'], ['reasonable', "o'rinli, mantiqli"], ['option', 'variant'], ['cautious', 'ehtiyotkor']] },
    { k: 'choice', q: "Qaysi ibora \"boshqa tomondan\" degani?", opts: ['On the other hand', 'In other hand', 'On other side', 'At the other hand'], a: 0, why: "**On the other hand**." },
    { k: 'fill', q: "It ___ on the price. (depend)", a: ['depends'], uz: "Bu narxga bog'liq.", why: "**It depends on…**" },
    { k: 'fill', q: "If I moved to a bigger city, I ___ miss my family.", a: ['would'], uz: "Kattaroq shaharga ko'chsam, oilamni sog'inardim.", why: "Second conditional: **would + fe'l**." },
    { k: 'dictation', say: 'On the other hand, it is a great chance.', a: ['On the other hand, it is a great chance.', "On the other hand, it's a great chance."], uz: "Boshqa tomondan, bu ajoyib imkoniyat." },
    { k: 'order', uz: "Oxir-oqibat men qolishga qaror qildim.", words: ['In', 'the', 'end,', 'I', 'decided', 'to', 'stay.'], extra: ['at', 'staying'], why: "**decide to + fe'l**." },
    { k: 'fix', wrong: 'It depends of the weather.', a: ['It depends on the weather.'], why: "**depend on**, *of* emas." },
    { k: 'fix', wrong: 'If I will take the job, I would be happy.', a: ['If I took the job, I would be happy.'], why: "Second conditional: **if + Past Simple**, *will* yo'q." },
    { k: 'translate', uz: "Menda ikkita variant bor.", a: ['I have two options.', "I've got two options.", 'I have got two options.'], why: "**option** — variant." },
    { k: 'tf', q: "*If I took the job, I would earn more money.* — Men ishni qabul qildim va ko'proq pul topyapman.", a: false, why: "Bu xayoliy vaziyat: ishni hali qabul qilmagan." },
    { k: 'speak', say: 'I have a real dilemma.', uz: "Menda qiyin tanlov bor." },
    { k: 'speak', say: 'If I took the job, I would earn more money. On the other hand, I would miss my family.', uz: "Ishni qabul qilsam, ko'proq pul topardim. Boshqa tomondan, oilamni sog'inardim." },
    { k: 'speak', say: 'In the end, I decided to stay.', uz: "Oxir-oqibat qolishga qaror qildim." },
  ],
  quiz: [
    { k: 'choice', q: "Qaysi gap ikkinchi variantni to'g'ri bildiradi?", opts: ['On the other hand, I would finish my degree.', 'In the other hand, I would finish my degree.', 'On the other hand, I will finished my degree.', 'On other hand, I would finishing my degree.'], a: 0, why: "**On the other hand** + second conditional." },
    { k: 'choice', q: "Do'stingiz: \"I can't decide.\" Siz:", opts: ["What are your options?", "That is easy!", "Don't ask me.", "I decided for you."], a: 0, why: "Yaxshi savol: **What are your options?**" },
    { k: 'fill', q: "It depends ___ my boss.", a: ['on'], why: "**depend on**." },
    { k: 'fill', q: "I'm not sure. Taking this job is a big ___.", a: ['risk', 'decision'], hint: 'risk / decision', why: "**a big risk** yoki **a big decision**." },
    { k: 'order', uz: "Agar men qolsam, diplomimni tugatardim.", words: ['If', 'I', 'stayed,', 'I', 'would', 'finish', 'my', 'degree.'], extra: ['will', 'stay'], why: "Second conditional." },
    { k: 'translate', uz: "Bu qiyin qaror edi.", a: ['It was a difficult decision.', 'It was a hard decision.', 'It was a tough decision.'], why: "**decision** — qaror." },
    { k: 'listen', say: 'It depends on the answer of the company.', opts: ['It depends on the answer of the company.', 'It depends of the answer of the company.', 'It depended on the company.', 'It is the answer of the company.'], a: 0 },
    { k: 'tf', q: "*Dilemma* — oson va tez qabul qilinadigan qaror.", a: false, why: "**dilemma** — qiyin tanlov." },
  ],
  summary: [
    "Muammoni ayting: **I have a real dilemma.** Variantlar: **If I took…, I would… On the other hand, …**",
    "**depend on** — doim *on*: *It depends on the situation.* Qaror: **In the end, I've decided to…**",
    "Tinglashda avval umumiy ma'noni tushuning: muammo nima, ikkita variant qanday, qaror qanday.",
    "Yangi so'zlar: **dilemma, consult, reasonable, option, cautious**.",
  ],
  homework: "O'zingizning haqiqiy yoki o'ylab topilgan qiyin tanlovingiz haqida 1 daqiqalik nutq tayyorlang: muammo, ikkita variant (second conditional), qaror. Telefoningizga yozib tinglang.",
};

export default lesson;
