import type { Lesson } from '../../../types';

// Mini lesson (review): the whole unit with new examples (mixed conditionals, if alternatives, wish, would rather, modal perfect, advice, apology, hedging).
const lesson: Lesson = {
  id: 'u25-l11',
  title: 'Imagination and regret: final review',
  titleUz: 'Tasavvur va pushaymonlik: yakuniy takror',
  mini: true,
  kind: 'review',
  goal: "Bosqichdagi hamma mavzuni takrorlaysiz: **aralash shartlar**, **if o'rniga** ishlatiladigan so'zlar, **wish / would rather / it's time**, **o'tgan zamon modallari**, maslahat berish, uzr so'rash va ehtiyotkor gapirish iboralari.",
  slides: [
    {
      title: "Shart gaplar",
      blocks: [
        { t: 'p', md: "Sabab va natijaning **vaqtini** alohida o'ylang. Keyin to'g'ri qolipni tanlang:" },
        { t: 'table', head: ['Maqsad', 'Qolip', 'Misol'], speak: [2], rows: [
          ["O'tgan sabab → hozirgi natija", 'If + Past Perfect, would + V1', "If my parents hadn't moved here, I wouldn't be at this school."],
          ["Hozirgi holat → o'tgan natija", 'If + Past Simple, would have + V3', "If I weren't so shy, I would have joined the choir."],
          ['Faqat shu shart bilan', 'as long as / provided that', 'You can stay provided that you keep quiet.'],
          ['Aks holda', 'otherwise / or else', 'Leave now, otherwise you will miss the bus.'],
          ["…ning bo'lmasligi", 'but for + ot', 'But for the traffic, we would have arrived on time.'],
          ['Ehtiyot chorasi', 'in case', "Take a charger in case your battery dies."],
        ] },
        { t: 'tip', tone: 'warn', md: "**If** dan keyin **would** yo'q. **unless** o'zi inkor: *Unless you hurry* (*unless you don't* emas). **in case** — «bo'lib qolsa tayyor bo'lish uchun», **if** emas." },
        { t: 'check', ex: { k: 'choice', q: "If my parents hadn't moved to Samarkand, I ___ here today.", opts: ["wouldn't have been", "wouldn't be", "hadn't been", "won't be"], a: 1, why: "Sabab o'tgan, natija **hozirgi** (*today*) → **would + V1**: *wouldn't be*." } },
        { t: 'check', ex: { k: 'fix', wrong: "Supposing you would lose your job, what would you do?", a: ["Supposing you lost your job, what would you do?"], why: "**Supposing** + **Past Simple** (xayoliy vaziyat), **would** emas." } },
      ],
    },
    {
      title: "Wish, would rather va modallar",
      blocks: [
        { t: 'table', head: ['Qolip', "Ma'nosi", 'Misol'], speak: [2], rows: [
          ['wish + Past Simple', 'hozirgi pushaymon', 'I wish I had more free evenings.'],
          ['wish / if only + Past Perfect', "o'tgan pushaymon", 'If only I had taken your advice last winter!'],
          ['wish + would', 'boshqalardan norozilik', 'I wish he would stop interrupting me.'],
          ['would rather + gap', 'boshqa odamning ishi', "I'd rather you waited a week."],
          ["it's time + Past Simple", 'vaqti keldi', "It's high time he found a job."],
          ['must / might / can\'t have + V3', "o'tgan haqida taxmin", "She can't have forgotten; she wrote it down."],
          ["should have / needn't have", 'tanqid / keraksiz ish', "We needn't have hurried; the train was late."],
        ] },
        { t: 'tip', tone: 'info', md: "Inkor taxmin uchun standart shakl **can't have / couldn't have** (*mustn't have* standart Britaniya ingliz tilida ishlatilmaydi). **needn't have** — ish bajarildi, lekin kerak emas edi. **should have** — «kerak edi, lekin qilinmadi»." },
        { t: 'check', ex: { k: 'choice', q: "Her coat is still here, so she ___ left the building.", opts: ["can't have", "must have", "needn't have", "should have"], a: 0, why: "Dalil teskarisini ko'rsatadi → inkor taxmin **can't have**." } },
        { t: 'check', ex: { k: 'fill', q: "I wish I ___ more time. I'm always in a hurry.", hint: "have", a: ['had'], why: "Hozirgi pushaymon → **wish + Past Simple**." } },
      ],
    },
    {
      title: "Maslahat, uzr va ehtiyotkor fikr",
      blocks: [
        { t: 'examples', items: [
          { en: "If I were you, I'd think twice before saying no.", uz: "Sizning o'rningizda bo'lsam, yo'q demasdan oldin yaxshilab o'ylardim.", note: "Maslahat: **If I were you, I'd…**" },
          { en: "I should have told you earlier. It won't happen again.", uz: "Sizga oldinroq aytishim kerak edi. Bu qaytarilmaydi.", note: "Uzr: **should have** + va'da." },
          { en: "Presumably the meeting has been moved; people tend to forget the room number.", uz: "Taxminimcha, yig'ilish ko'chirilgan; odamlar xona raqamini unutishga moyil.", note: "Ehtiyotkor gap: **presumably, tend to**." },
          { en: "She was thrilled about the offer, but reluctant to leave her team.", uz: "U taklifdan hayajonda edi, lekin jamoasini tark etishni xohlamasdi.", note: "His-tuyg'u sifatlari." },
        ] },
        { t: 'tip', tone: 'good', md: "Yangi so'zlar: **second-guess** (o'z qaroringdan shubhalanmoq), **take stock** (vaziyatni baholab olmoq), **life lesson**, **stand by** (qarorida qat'iy turmoq), **come to a decision**, **hard-won** (qiyinchilik bilan qo'lga kiritilgan)." },
        { t: 'check', ex: { k: 'choice', q: "Which is the most supportive way to advise a friend?", opts: ["If I were you, I'd think twice before saying no.", "You must accept it.", "You are crazy to refuse.", "Do what you want."], a: 0, why: "Qo'llab-quvvatlovchi maslahat: **If I were you, I'd…**; qolganlari qo'pol yoki befarq." } },
      ],
    },
    {
      title: "Dialog: pushaymonmi yoki saboqmi?",
      blocks: [
        { t: 'dialog', lines: [
          { who: 'Nora', en: "Leo, you've been quiet since the results came out. Are you second-guessing your choice?", uz: "Leo, natijalar chiqqandan beri jimsan. O'z tanlovingdan shubhalanyapsanmi?" },
          { who: 'Leo', en: "A bit. I turned down the Dubai job, and now I wish I had gone.", uz: "Biroz. Dubaydagi ishni rad etdim va endi borganimda edi deb o'ylayman." },
          { who: 'Nora', en: "Take stock before you judge yourself. If you had gone, you wouldn't be near your parents now.", uz: "O'zingni hukm qilishdan oldin vaziyatni baholab ol. Agar borganingda, hozir ota-onang yonida bo'lmasding." },
          { who: 'Leo', en: "True. I must have been tired when I came to a decision, but I stand by it.", uz: "To'g'ri. Qaror qilganimda charchagan bo'lsam kerak, lekin qarorimda turaman." },
          { who: 'Nora', en: "Then it's a life lesson. As long as you learn from it, it wasn't a waste.", uz: "Unda bu hayotiy saboq. Undan xulosa chiqarsang, bu bekor ketmaydi." },
          { who: 'Leo', en: "Hard-won, but useful. I should have asked you earlier, though.", uz: "Qiyin bo'lsa-da, foydali. Faqat senga oldinroq maslahat solishim kerak edi." },
        ] },
        { t: 'check', ex: { k: 'tf', q: "Leo regrets turning down the Dubai job completely and stands by nothing.", a: false, why: "U *wish I had gone* deydi, lekin *I stand by it* — qarorida turadi." } },
        { t: 'check', ex: { k: 'choice', q: "Which sentence in the dialogue shows an assumption about the past?", opts: ["I must have been tired.", "Take stock before you judge yourself.", "As long as you learn from it.", "I turned down the job."], a: 0, why: "**must have + V3** — o'tgan haqida taxmin." } },
      ],
    },
  ],
  words: [
    { en: 'second-guess', uz: "o'z qaroridan shubhalanmoq", ipa: 'ˌsek.əndˈɡes', pos: 'verb', ex: "Stop second-guessing every decision you make.", exUz: "Har bir qaroringdan shubhalanishni bas qil." },
    { en: 'take stock', uz: "vaziyatni baholab olmoq", ipa: 'teɪk stɒk', pos: 'phrase', ex: "At the end of the year, we take stock of our results.", exUz: "Yil oxirida natijalarimizni baholab olamiz." },
    { en: 'life lesson', uz: "hayotiy saboq", ipa: 'laɪf ˈles.ən', pos: 'noun', ex: "Failing that exam was a valuable life lesson.", exUz: "O'sha imtihondan yiqilish qimmatli hayotiy saboq bo'ldi." },
    { en: 'stand by', uz: "(qarorida) qat'iy turmoq, yoniga tushmoq", ipa: 'stænd baɪ', pos: 'phrasal verb', ex: "I stand by what I said in the meeting.", exUz: "Yig'ilishda aytganimda qat'iy turaman." },
    { en: 'come to a decision', uz: "qarorga kelmoq", ipa: 'kʌm tuː ə dɪˈsɪʒ.ən', pos: 'phrase', ex: "After a long debate, we came to a decision.", exUz: "Uzoq bahsdan keyin qarorga keldik." },
    { en: 'hard-won', uz: "qiyinchilik bilan qo'lga kiritilgan", ipa: 'ˌhɑːdˈwʌn', pos: 'adj', ex: "Their hard-won victory made the team proud.", exUz: "Qiyinchilik bilan qozonilgan g'alaba jamoani faxrlantirdi." },
  ],
  practice: [
    { k: 'match', pairs: [['second-guess', "qarordan shubhalanmoq"], ['take stock', "vaziyatni baholab olmoq"], ['life lesson', 'hayotiy saboq'], ['stand by', "qarorida qat'iy turmoq"], ['come to a decision', 'qarorga kelmoq'], ['hard-won', "qiyinchilik bilan qo'lga kiritilgan"]] },
    { k: 'choice', q: "You can stay ___ you keep the noise down.", opts: ['unless', 'provided that', 'in case', 'but for'], a: 1, why: "Faqat shu shart bilan → **provided that** (**unless** — «agar … bo'lmasa»)." },
    { k: 'choice', q: "But for the traffic, we ___ on time.", opts: ['would have arrived', 'would arrive', 'had arrived', 'arrive'], a: 0, why: "**But for** o'tgan voqea haqida → **would have + V3**." },
    { k: 'fill', q: "I wish he ___ stop interrupting me.", hint: "norozilik", a: ['would'], why: "Boshqa odamning odatidan norozilik → **wish + would**." },
    { k: 'fill', q: "If only I ___ taken your advice last winter!", a: ['had'], why: "O'tgan pushaymon → **if only + Past Perfect**." },
    { k: 'order', uz: "Siz uni oldinroq ogohlantirishingiz kerak edi.", words: ['You', 'should', 'have', 'warned', 'him', 'earlier.'], extra: ['must', 'warn'], why: "**should have + V3** — o'tgan haqida tanqid." },
    { k: 'translate', uz: "Biz bekorga shoshildik; poyezd kech qoldi.", a: ["We needn't have hurried; the train was late.", "We needn't have hurried. The train was late.", "We needn't have rushed; the train was late.", "We needn't have rushed. The train was late.", "We need not have hurried; the train was late."], why: "Ish bajarilgan, lekin keraksiz → **needn't have + V3**." },
    { k: 'tf', q: "**as long as** va **provided that** deyarli bir xil ma'noda ishlatiladi.", a: true, why: "Ikkalasi ham «faqat shu shart bilan» ma'nosini beradi." },
    { k: 'listen', say: "She can't have forgotten; she wrote it down.", opts: ["She can't have forgotten; she wrote it down.", "She mustn't have forgotten; she wrote it down.", "She needn't have forgotten; she wrote it down.", "She can't forget; she wrote it down."], a: 0 },
    { k: 'fix', wrong: "I wish I would have more time.", a: ["I wish I had more time."], why: "O'z holatingiz haqida hozirgi pushaymon → **wish + Past Simple**." },
    { k: 'fix', wrong: "Supposing you would lose your job, what would you do?", a: ["Supposing you lost your job, what would you do?"], why: "**Supposing** + Past Simple." },
    { k: 'choice', q: "Which is the most supportive way to advise a friend?", opts: ["If I were you, I'd think twice before saying no.", "You must accept it.", "You are crazy to refuse.", "Do what you want, I don't care."], a: 0, why: "Qo'llab-quvvatlovchi maslahat — **If I were you, I'd…**." },
    { k: 'dictation', say: "I should have told you earlier. It won't happen again.", a: ["I should have told you earlier. It won't happen again.", "I should have told you earlier. It will not happen again."], uz: "Sizga oldinroq aytishim kerak edi. Bu qaytarilmaydi." },
    { k: 'speak', say: "I stand by my decision, and it was a hard-won lesson.", uz: "Men qarorimda turaman va bu qiyinchilik bilan olingan saboq bo'ldi." },
  ],
  quiz: [
    { k: 'choice', q: "It's high time he ___ a job.", opts: ['found', 'finds', 'will find', 'find'], a: 0, why: "**It's high time** + **Past Simple**." },
    { k: 'choice', q: "I'd rather you ___ me the truth.", opts: ['told', 'telling', 'to tell', 'would told'], a: 0, why: "**would rather** + boshqa odam → **Past Simple**." },
    { k: 'choice', q: "She was ___ about her new job.", opts: ['thrilled', 'thrilling', 'thrill', 'thrills'], a: 0, why: "Odamning his-tuyg'usi → **-ed** sifat." },
    { k: 'fill', q: "Study harder, ___ you will fail the exam.", a: ['otherwise', 'or else'], why: "Aks holda → **otherwise / or else**." },
    { k: 'fill', q: "I ___ have spent so much on a phone. It was a waste.", hint: "tanqid", a: ["shouldn't", "should not", "ought not to", "oughtn't to", "needn't", "need not"], why: "O'tgan haqida afsus → **shouldn't have + V3**." },
    { k: 'tf', q: "**as if** dan keyin hozirgi haqiqiy bo'lmagan voqea uchun **were** ishlatiladi.", a: true, why: "Misol: *She talks as if she were the manager.*" },
    { k: 'fix', wrong: "If I would have studied medicine, I would be a doctor now.", a: ["If I had studied medicine, I would be a doctor now."], why: "**If** dan keyin **Past Perfect**." },
    { k: 'order', uz: "Bir hafta kutganingizni afzal ko'raman.", words: ['I', 'would', 'rather', 'you', 'waited', 'a', 'week.'], extra: ['wait', 'will'], why: "**would rather** + gap → **Past Simple**." },
    { k: 'choice', q: "Her light is on, but nobody answers. She ___ asleep.", opts: ['might have fallen', "can't have fallen", "needn't have fallen", "shouldn't fall"], a: 0, why: "Ehtimol → **might have + V3**." },
  ],
  summary: [
    "**Aralash shart**: sabab va natija vaqtini alohida o'ylang; **If** dan keyin **would** yo'q.",
    "**If o'rniga**: unless (inkor ma'noli!), as long as / provided that, otherwise, but for, supposing, in case.",
    "**wish, if only, would rather, it's time, as if** — o'tgan zamon shakli haqiqiy bo'lmagan hozirgi uchun; Past Perfect — o'tgan uchun.",
    "**must / might / can't have + V3** — taxmin; **should have / needn't have** — tanqid va keraksiz ish.",
    "Maslahat: **If I were you, I'd…**; uzr: **I should have…, It won't happen again**; ehtiyotkor fikr: **presumably, tend to, it seems that**.",
  ],
  homework: "Do'stingiz qiyin qaror oldida turibdi deb faraz qiling va unga 8 gaplik xabar yozing: 2 ta aralash shart, 1 ta *wish*, 1 ta *would rather*, 1 ta *should have / might have*, 1 ta *as long as / unless* va 2 ta yangi so'z (*second-guess, stand by...*).",
};

export default lesson;
