import type { Lesson } from '../../../types';

// Mini lesson (situation): changing a meeting or a trip politely. Future forms for arrangements, apologies and alternatives.
const lesson: Lesson = {
  id: 'u24-l10',
  title: 'Rescheduling plans',
  titleUz: "Rejalarni o'zgartirish: uchrashuvni ko'chirish va uzr so'rash",
  mini: true,
  kind: 'situation',
  goal: "Uchrashuv yoki safarni **muloyim** o'zgartirasiz: uzr so'raysiz (*I'm afraid I won't be able to…*), o'zgartirishni so'raysiz (*Would it be possible to…?*), kechikish haqida xabar berasiz (*I'll be arriving a bit later*) va muqobil taklif qilasiz.",
  slides: [
    {
      title: "Vaziyat: reja buzildi",
      blocks: [
        { t: 'p', md: "Ish uchrashuvingiz soat uchda, lekin kutilmagan ish chiqib qoldi. Ingliz ish muhitida bu holatda **uzr + sabab + muqobil** tartibi qo'llanadi. To'g'ridan-to'g'ri *I can't come* deyish qo'pol eshitilishi mumkin." },
        { t: 'table', head: ['Bosqich', 'Ibora'], speak: [1], rows: [
          ['Uzr', "I'm afraid I won't be able to make it tomorrow."],
          ['Sabab', "Something urgent has come up at work."],
          ["So'rov", "Would it be possible to move the meeting to Thursday?"],
          ['Muqobil', "How about Thursday morning instead?"],
          ['Kechikish', "I'll be arriving about fifteen minutes later than planned."],
          ['Tuzatish', "Let me make up for it by buying you lunch."],
        ] },
        { t: 'tip', tone: 'info', md: "*I'm afraid* — «afsuski»: yomon xabarni yumshatadi. *I won't be able to* — **will be able to** (*can* ning kelasi zamoni). *I will can* demang: ikkita modal yonma-yon turmaydi." },
        { t: 'check', ex: { k: 'choice', q: "Qaysi biri eng muloyim rad javobi?", opts: ["I can't come tomorrow.", "I'm afraid I won't be able to make it tomorrow.", "Tomorrow no.", "I don't come tomorrow."], a: 1, why: "**I'm afraid I won't be able to…** — muloyim va rasmiy." } },
        { t: 'check', ex: { k: 'fill', q: "I'm afraid I won't be ___ to come to the call.", a: ['able'], uz: "Afsuski, qo'ng'iroqqa qo'shila olmayman.", why: "**will be able to** — kelajakdagi imkoniyat." } },
      ],
    },
    {
      title: "Kelasi zamon shakllari va so'rov iboralari",
      blocks: [
        { t: 'table', head: ['Maqsad', 'Shakl', 'Misol'], speak: [2], rows: [
          ['Kelishilgan reja', 'Present Continuous', "We're meeting at three tomorrow."],
          ['Jarayon kelajakda', 'will be + V-ing', "I'll be arriving a bit later."],
          ['Jadval', 'Present Simple', "The train leaves at nine."],
          ['Kutilayotgan vaqt', 'be due to + V1', "The report is due to arrive on Friday."],
          ['Yangi qaror', 'will', "I'll call you back this afternoon."],
        ] },
        { t: 'examples', items: [
          { en: "Could we push the meeting back to Friday?", uz: "Uchrashuvni juma kuniga surib qo'ysak bo'ladimi?", note: "**push back** — kechiktirmoq." },
          { en: "Would it be possible to bring the call forward to ten?", uz: "Qo'ng'iroqni soat o'nga olib kelish mumkinmi?", note: "**bring forward** — oldinga surmoq. *Would it be possible* dan keyin **to + V1**." },
          { en: "Sorry to disturb you, but I'll be running late.", uz: "Bezovta qilganim uchun uzr, lekin kechikaman.", note: "**Sorry to + V1** — odatda shunday." },
        ] },
        { t: 'tip', tone: 'warn', md: "**push back** = *kechroqqa surmoq*, **bring forward** = *ertaroqqa surmoq*. O'zbek tilida ikkalasini ham «ko'chirmoq» deymiz, ingliz tilida yo'nalish muhim. Qaysi yo'nalishda ekanini yozing: *to Friday*, *to ten o'clock*." },
        { t: 'check', ex: { k: 'choice', q: "The meeting was on Thursday. Now it is on Wednesday. It has been ___.", opts: ['brought forward', 'pushed back', 'made up for', 'tied up'], a: 0, why: "Chorshanba payshanbadan oldin: **brought forward**." } },
        { t: 'check', ex: { k: 'fill', q: "We ___ (meet) at three tomorrow, so please don't be late.", a: ['are meeting', "'re meeting"], uz: "Ertaga soat uchda uchrashamiz.", hint: 'Present Continuous', why: "Kelishilgan reja: **Present Continuous** (*are meeting*)." } },
      ],
    },
    {
      title: "Tipik xatolar (o'zbek tilidan)",
      blocks: [
        { t: 'compare',
          good: { title: "To'g'ri", items: ["I won't be able to come on Monday.", "Would it be possible to meet at three?", "Sorry to disturb you.", "I'm sorry I'm late."] },
          bad: { title: 'Xato', items: ["I will can't come on Monday.", "Would it be possible meet at three?", "Sorry for disturb you.", "I'm sorry for late."] } },
        { t: 'tip', tone: 'warn', md: "O'zbekcha *kela olmayman* — bitta so'z, shuning uchun inglizchada ham modalni takrorlab *will can* deymiz. To'g'risi: **won't be able to**. *Uzr, kechikdim* — *for late* emas, **I'm sorry I'm late** yoki **Sorry for being late**." },
        { t: 'check', ex: { k: 'fix', wrong: "I will can't come on Monday.", a: ["I won't be able to come on Monday.", "I will not be able to come on Monday.", "I can't come on Monday."], why: "**will + can** bo'lmaydi: *won't be able to* (yoki oddiy *can't*)." } },
        { t: 'check', ex: { k: 'fix', wrong: "Would it be possible meet at three?", a: ["Would it be possible to meet at three?"], why: "*Would it be possible* dan keyin **to + V1**." } },
        { t: 'check', ex: { k: 'fix', wrong: "I'm sorry for late.", a: ["I'm sorry I'm late.", "I'm sorry for being late.", "Sorry for being late.", "Sorry I'm late."], why: "*for* dan keyin ot yoki **-ing** kerak: *for being late*." } },
      ],
    },
    {
      title: "Matn va dialog",
      blocks: [
        { t: 'text', title: 'A short email', voice: 'emma', en: "Dear Mr Hall, I'm afraid I won't be able to attend our meeting on Tuesday. I'm very sorry for the short notice, but a client has asked me to visit their office that day, and I'm completely tied up until the evening. Would it be possible to push the meeting back to Thursday? If that clashes with your other plans, I could also do Wednesday morning. I'll be arriving a little earlier than usual, so we could start at nine. I would like to make up for the inconvenience, so lunch is on me. Kind regards, Laura Evans.", uz: "Hurmatli janob Xoll, afsuski seshanba kungi uchrashuvga qatnasha olmayman. Qisqa ogohlantirish uchun juda uzr so'rayman, lekin mijoz o'sha kuni ofisiga kelishimni so'radi va men kechgacha butunlay bandman. Uchrashuvni payshanbaga surish mumkinmi? Agar bu boshqa rejalaringizga to'g'ri kelmasa, chorshanba kuni ertalab ham bo'ladi. Odatdagidan sal ertaroq kelaman, shuning uchun soat to'qqizda boshlasak bo'ladi. Noqulaylik uchun uzr, tushlik mendan. Hurmat bilan, Laura Evans." },
        { t: 'check', ex: { k: 'tf', q: "Laura suggests two alternative times.", a: true, why: "*Thursday* va *Wednesday morning*." } },
        { t: 'dialog', lines: [
          { who: 'Ben', en: "Hello, Helen. I'm afraid I'm running late. The train has been delayed.", uz: "Salom, Helen. Afsuski, kechikyapman. Poyezd kechikdi." },
          { who: 'Helen', en: "Thanks for letting me know. How late will you be?", uz: "Xabar berganing uchun rahmat. Qancha kechikasan?" },
          { who: 'Ben', en: "I'll be arriving at about half past three, so we'll miss the start.", uz: "Taxminan uchdan yarimda yetib kelaman, shuning uchun boshlanishini o'tkazib yuboramiz." },
          { who: 'Helen', en: "Would it be possible to push the meeting back to four?", uz: "Uchrashuvni to'rtga surish mumkinmi?" },
          { who: 'Ben', en: "That would be perfect. I'll make up for it by taking notes.", uz: "Bu juda yaxshi bo'lardi. Buning evaziga yozuvlarni men yuritaman." },
          { who: 'Helen', en: "No need. I'll tell the others the meeting starts at four.", uz: "Shart emas. Boshqalarga uchrashuv to'rtda boshlanishini aytaman." },
        ] },
        { t: 'check', ex: { k: 'choice', q: "What does Helen suggest?", opts: ["Starting the meeting at four.", "Cancelling the meeting.", "Meeting at half past three.", "Taking notes at home."], a: 0, why: "*Would it be possible to push the meeting back to four?*" } },
      ],
    },
  ],
  words: [
    { en: 'tied up', uz: "band (vaqti yo'q)", ipa: 'taɪd ʌp', pos: 'adj', ex: "I'm tied up in meetings until five, so I'll call you later.", exUz: "Beshgacha yig'ilishlarda bandman, keyin qo'ng'iroq qilaman." },
    { en: 'clash', uz: "to'g'ri kelib qolmoq (vaqt jihatdan)", ipa: 'klæʃ', pos: 'verb', ex: 'The training session clashes with my client call.', exUz: "Trening mijoz bilan qo'ng'iroqqa to'g'ri kelib qoldi." },
    { en: 'bring forward', uz: "oldinga surmoq (ertaroq qilmoq)", ipa: 'brɪŋ ˈfɔː.wəd', pos: 'phrasal verb', ex: 'They brought the deadline forward by two days.', exUz: "Ular muddatni ikki kunga ertaroqqa surdi." },
    { en: 'push back', uz: "orqaga surmoq (kechroq qilmoq)", ipa: 'pʊʃ bæk', pos: 'phrasal verb', ex: 'Can we push the launch back until next month?', exUz: "Ishga tushirishni kelasi oyga surib qo'ysak bo'ladimi?" },
    { en: 'short notice', uz: "qisqa ogohlantirish", ipa: 'ʃɔːt ˈnəʊ.tɪs', pos: 'noun phrase', ex: "I'm sorry to cancel at such short notice.", exUz: "Bunday qisqa ogohlantirish bilan bekor qilganim uchun uzr." },
    { en: 'make up for', uz: "o'rnini qoplamoq", ipa: 'meɪk ʌp fɔː', pos: 'phrasal verb', ex: "Let me make up for the delay by paying for lunch.", exUz: "Kechikishning o'rnini tushlikni to'lab qoplay." },
  ],
  practice: [
    { k: 'match', pairs: [['tied up', "band (vaqti yo'q)"], ['clash', "vaqt jihatdan to'g'ri kelmoq"], ['bring forward', "ertaroqqa surmoq"], ['push back', "kechroqqa surmoq"], ['short notice', "qisqa ogohlantirish"], ['make up for', "o'rnini qoplamoq"]] },
    { k: 'choice', q: "Which is the most polite way to ask to change the time?", opts: ["Move the meeting to Thursday.", "Would it be possible to move the meeting to Thursday?", "I want move the meeting to Thursday.", "You must move the meeting to Thursday."], a: 1, why: "**Would it be possible to + V1?** — muloyim so'rov." },
    { k: 'fill', q: "I'm afraid I won't be ___ to attend the call tomorrow.", a: ['able'], uz: "Afsuski, ertaga qo'ng'iroqda qatnasha olmayman.", why: "**won't be able to**." },
    { k: 'fill', q: "The two meetings ___ : both are at ten o'clock.", a: ['clash', 'clash.'], hint: 'cl…', uz: "Ikkala uchrashuv ham soat o'nda: to'g'ri kelib qoldi.", why: "**clash** — vaqt jihatdan to'qnashmoq." },
    { k: 'listen', say: "I'll be arriving about fifteen minutes later than planned.", opts: ["I'll be arriving about fifteen minutes later than planned.", "I arrived about fifteen minutes later than planned.", "I'll arrive about fifty minutes later than planned.", "I've arrived about fifteen minutes later than planned."], a: 0 },
    { k: 'order', uz: "Uchrashuvni juma kuniga surib qo'ysak bo'ladimi?", words: ['Could', 'we', 'push', 'the', 'meeting', 'back', 'to', 'Friday?'], extra: ['forward', 'for'], alt: [['Could', 'we', 'push', 'back', 'the', 'meeting', 'to', 'Friday?']], why: "**push back** — kechroqqa surmoq." },
    { k: 'fix', wrong: "I will can't come on Monday.", a: ["I won't be able to come on Monday.", "I will not be able to come on Monday.", "I can't come on Monday."], why: "**will can** bo'lmaydi: *won't be able to*." },
    { k: 'tf', q: "*I'm afraid I won't be able to make it* — muloyim rad javobi.", a: true, why: "**I'm afraid** yumshatadi, **make it** — yetib kelmoq." },
    { k: 'choice', q: "The meeting was at ten, but it has been ___ to nine o'clock.", opts: ['pushed back', 'brought forward', 'made up for', 'tied up'], a: 1, why: "To'qqiz — o'ndan ertaroq: **brought forward**." },
    { k: 'translate', uz: "Uzr, men biroz kechikaman.", a: ["Sorry, I'll be a bit late.", "I'm sorry, I'll be a bit late.", "Sorry, I will be a bit late.", "Sorry, I'll be arriving a bit late.", "I'm sorry, I'll be running a bit late.", "Sorry, I'll be running a bit late."], why: "Kechikish haqida xabar: **I'll be (arriving) a bit late**." },
    { k: 'fix', wrong: "Would it be possible meet at three?", a: ["Would it be possible to meet at three?"], why: "*Would it be possible* + **to + V1**." },
    { k: 'dictation', say: "I'm afraid something urgent has come up.", a: ["I'm afraid something urgent has come up.", "I am afraid something urgent has come up."], uz: "Afsuski, shoshilinch ish chiqib qoldi." },
    { k: 'choice', q: "We can't change the plan at such ___ notice.", opts: ['short', 'quick', 'fast', 'early'], a: 0, why: "Tayyor birikma: **at short notice**." },
    { k: 'speak', say: "Would it be possible to move our meeting to Thursday morning?", uz: "Uchrashuvimizni payshanba ertalabga ko'chirish mumkinmi?" },
  ],
  quiz: [
    { k: 'choice', q: "Dear Mr Hall, I'm afraid I ___ to attend Monday's meeting.", opts: ["won't be able", "won't can", "can't able", "not be able"], a: 0, why: "**won't be able to** — kelajakdagi imkoniyat." },
    { k: 'fill', q: "I'm sorry, I'm completely ___ up this afternoon.", a: ['tied'], uz: "Uzr, bugun tushdan keyin butunlay bandman.", why: "**tied up** — band." },
    { k: 'fill', q: "Let me ___ up for the delay with a coffee.", a: ['make'], uz: "Kechikishni bir choy bilan qoplay.", why: "**make up for** — o'rnini qoplamoq." },
    { k: 'fix', wrong: "Sorry for disturb you.", a: ["Sorry to disturb you.", "Sorry for disturbing you."], why: "*for* + **-ing** yoki *sorry to* + V1." },
    { k: 'listen', say: 'Would it be possible to meet on Thursday instead?', opts: ['Would it be possible to meet on Thursday instead?', 'Would it be possible to meet on Tuesday instead?', 'Is it possible to meet on Thursday instead?', 'Would it be possible meeting on Thursday instead?'], a: 0 },
    { k: 'tf', q: "*We are meeting at three tomorrow.* — kelishilgan reja haqida gap.", a: true, why: "**Present Continuous** kelishilgan rejani bildiradi." },
    { k: 'translate', uz: "Uchrashuvni chorshanbaga ko'chirsak bo'ladimi?", a: ['Could we move the meeting to Wednesday?', 'Would it be possible to move the meeting to Wednesday?', 'Could we push the meeting to Wednesday?', 'Could we move our meeting to Wednesday?'], why: "**Could we …?** yoki **Would it be possible to …?**" },
    { k: 'choice', q: "Which sentence offers an alternative?", opts: ["I can't, goodbye.", "Thursday is bad for me.", "How about Thursday morning instead?", "I won't to come."], a: 2, why: "**How about … instead?** — muqobil taklif." },
  ],
  summary: [
    "Muloyim rad: **I'm afraid I won't be able to…** (will + can emas!). So'rov: **Would it be possible to + V1?**",
    "**push back** = kechroqqa, **bring forward** = ertaroqqa surmoq. Kelishilgan reja: **Present Continuous**; kechikish: **I'll be arriving…**",
    "Tartib: **uzr → sabab → muqobil → kechirim**. *Sorry to disturb*, *sorry for being late*.",
    "Yangi so'zlar: **tied up, clash, bring forward, push back, short notice, make up for**.",
  ],
  homework: "Haqiqiy vaziyatni tasavvur qiling va hamkasbingizga 60-80 so'zlik qisqa email yozing: uchrashuvni ko'chirish, uzr, sabab va muqobil vaqt. Kamida *I'm afraid I won't be able to*, *Would it be possible to* va bitta yangi so'z ishlating.",
};

export default lesson;
