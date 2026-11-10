import type { Lesson } from '../../../types';

// Mini lesson (situation): apologising, explaining and putting a mistake right, formally and informally. Uses "should have" (see l13) in simple form.
const lesson: Lesson = {
  id: 'u25-l10',
  title: 'Apologising and making up for a mistake',
  titleUz: "Uzr so'rash va xatoni to'g'rilash: rasmiy va norasmiy",
  mini: true,
  kind: 'situation',
  goal: "Ishda yoki do'stingiz bilan xato qilganingizda **to'g'ri darajada uzr so'raysiz** (rasmiy va norasmiy), qisqa **izoh** berasiz, **xatoni tuzatishni taklif qilasiz** (*I'll put it right*) va boshqalarning uzrini muloyim qabul qilasiz.",
  slides: [
    {
      title: "Uzr so'rash: rasmiy yoki norasmiy?",
      blocks: [
        { t: 'p', md: "B2 darajasida **I'm sorry** yetarli emas. Qanchalik jiddiy xato qildingiz, kimga aytyapsiz (do'st, menejer, mijoz) va yozma yoki og'zaki: shunga qarab ibora tanlanadi. Xato kichik bo'lsa, haddan tashqari uzr so'rash ham g'alati eshitiladi." },
        { t: 'table', head: ['Daraja', 'Ibora', 'Qachon'], speak: [1], rows: [
          ['Norasmiy', "Sorry, I completely forgot.", "do'stga, kichik xato"],
          ['Norasmiy, kuchliroq', "I feel terrible about this.", "do'stga, jiddiyroq xato"],
          ['Neytral', "I'm really sorry for the mistake.", "hamkasbga"],
          ['Rasmiy', "I apologise for the delay.", "mijoz yoki menejerga"],
          ['Juda rasmiy', "I deeply regret any inconvenience caused.", "rasmiy xat, rasmiy e'lon"],
        ] },
        { t: 'tip', tone: 'info', md: "**Apologise for + ot / -ing**: *I apologise for the delay / for being late.* **Apologise to + kishi**: *I apologise to you.* *I apologise you* deb bo'lmaydi." },
        { t: 'check', ex: { k: 'choice', q: "Mijozga yuborilgan rasmiy xatda qaysi ibora mos?", opts: ["I sincerely apologise for the delay.", "Sorry, my bad.", "Oops, forgot!", "Don't be angry."], a: 0, why: "Rasmiy xat → **I sincerely apologise for + ot**. Qolganlari norasmiy yoki nomuloyim." } },
        { t: 'check', ex: { k: 'fill', q: "I apologise ___ the mistake in the invoice.", a: ['for'], why: "**apologise for + ot**." } },
      ],
    },
    {
      title: "Izoh, tuzatish va uzrni qabul qilish",
      blocks: [
        { t: 'p', md: "Yaxshi uzr **to'rt qismdan** iborat: 1) uzr so'rash, 2) **qisqa izoh** (bahona emas), 3) **tuzatishni taklif qilish**, 4) **kelajakda takrorlanmasligiga va'da**." },
        { t: 'examples', items: [
          { en: "I should have told you earlier that the report was late.", uz: "Hisobot kechikishini sizga oldinroq aytishim kerak edi.", note: "**should have + V3** — o'z xatongizni tan olish (l13)." },
          { en: "It was an oversight on my part. I overlooked the deadline.", uz: "Bu mening e'tiborsizligim edi. Muddatni ko'zdan qochirdim.", note: "**oversight** — beixtiyor yo'l qo'yilgan xato." },
          { en: "Let me put it right: I'll send the corrected file this afternoon.", uz: "Tuzatishga ruxsat bering: tuzatilgan faylni tushdan keyin yuboraman.", note: "**put right / make up for** — tuzatish." },
          { en: "It won't happen again. I'll double-check everything in future.", uz: "Bu takrorlanmaydi. Kelajakda hammasini ikki marta tekshiraman.", note: "**It won't happen again** — va'da." },
        ] },
        { t: 'table', head: ['Uzrni qabul qilish', 'Misol'], speak: [1], rows: [
          ['Norasmiy', "Don't worry about it. It happens."],
          ['Neytral', "Thanks for telling me. Let's sort it out."],
          ['Rasmiy', "Your apology is accepted. Thank you for your prompt reply."],
        ] },
        { t: 'tip', tone: 'warn', md: "**Bahona** va **izoh** farqi: *The traffic was terrible* — bahona bo'lib eshitilishi mumkin. *I left too late. I should have checked the traffic* — mas'uliyatni o'z zimmangizga olish (**take responsibility**). Ishda bu ko'proq hurmat qozonadi." },
        { t: 'check', ex: { k: 'choice', q: "Qaysi gap mas'uliyatni o'z zimmasiga olyapti?", opts: ["I should have checked the numbers myself.", "The numbers were wrong because of the system.", "Nobody told me about the numbers.", "It wasn't really my job."], a: 0, why: "**should have + V3** + *myself* — o'z xatosini tan olish. Qolganlari boshqalarni ayblaydi." } },
        { t: 'check', ex: { k: 'fill', q: "Please let me ___ it right by sending the correct file today.", a: ['put'], uz: "Bugun to'g'ri faylni yuborib, tuzatishga ruxsat bering.", why: "**put something right** — xatoni tuzatmoq." } },
      ],
    },
    {
      title: "Tipik xatolar (o'zbek tilidan interferensiya)",
      blocks: [
        { t: 'compare',
          good: { title: "To'g'ri", items: ["I apologise for the delay.", "I'm sorry I was late. / I'm sorry for being late.", "I should have told you yesterday.", "I'll make it up to you."] },
          bad: { title: "Xato", items: ["I apologise you for the delay.", "I'm sorry for I was late.", "I should tell you yesterday.", "I'll do it up to you."] } },
        { t: 'p', md: "O'zbekcha *kechirasiz, kechikdim* va *aytishim kerak edi* iboralari so'zma-so'z tarjima qilinganda quyidagi xatolar chiqadi: **for** dan keyin gap emas, ot yoki **-ing** kerak; o'tgan zamondagi **kerak edi** uchun **should have + V3** kerak." },
        { t: 'check', ex: { k: 'fix', wrong: "I apologise you for being late.", a: ["I apologise for being late.", "I apologise to you for being late."], why: "**apologise for…** yoki **apologise to you for…**." } },
        { t: 'check', ex: { k: 'fix', wrong: "I'm sorry for I forgot the meeting.", a: ["I'm sorry I forgot the meeting.", "I'm sorry for forgetting the meeting."], why: "**for** dan keyin **-ing** (yoki *sorry* dan keyin to'liq gap, **for** siz)." } },
        { t: 'check', ex: { k: 'fix', wrong: "I should tell you about the error yesterday.", a: ["I should have told you about the error yesterday."], why: "O'tgan zamondagi afsus: **should have + V3**." } },
      ],
    },
    {
      title: "O'qing va tinglang",
      blocks: [
        { t: 'text', title: 'An email to a client', voice: 'george', en: "Dear Ms Brown. I am writing to apologise for the mistake in your order. Two of the chairs were delivered in the wrong colour. This was an oversight on our part, and I take full responsibility. I should have checked the order before it left the warehouse. To put this right, we will collect the chairs tomorrow and replace them free of charge. To make up for the inconvenience, we would also like to offer you a discount on your next order. I assure you that it will not happen again, because we now check every delivery twice. Once again, I deeply regret the trouble this has caused. Yours sincerely, David Clarke.", uz: "Hurmatli Braun xonim. Buyurtmangizdagi xato uchun uzr so'rash maqsadida yozyapman. Ikkita stul noto'g'ri rangda yetkazilgan. Bu bizning e'tiborsizligimiz edi va men butun mas'uliyatni o'z zimmamga olaman. Buyurtmani omborxonadan chiqishidan oldin tekshirishim kerak edi. Buni to'g'rilash uchun ertaga stullarni olib ketamiz va bepul almashtiramiz. Noqulaylik uchun kelasi buyurtmangizga chegirma taklif qilamiz. Bu takrorlanmasligiga ishontirib aytaman, chunki endi har bir yetkazib berishni ikki marta tekshiramiz. Yana bir bor yuz bergan muammo uchun chin dildan afsusdaman. Hurmat bilan, Devid Klark." },
        { t: 'check', ex: { k: 'tf', q: "The company will charge the client for replacing the chairs.", a: false, why: "*replace them free of charge* — bepul." } },
        { t: 'dialog', lines: [
          { who: 'Helen', en: "Sardor, the presentation file you sent has last year's figures in it.", uz: "Sardor, yuborgan taqdimot faylingda o'tgan yilgi raqamlar bor." },
          { who: 'Sardor', en: "Oh no, I'm so sorry. That was my slip-up. I should have checked it before sending.", uz: "Voy yo'q, juda uzr. Bu mening xatoim edi. Yuborishdan oldin tekshirishim kerak edi." },
          { who: 'Helen', en: "Don't worry, we haven't shown it to the client yet. Can you fix it?", uz: "Xavotir olma, mijozga hali ko'rsatmadik. Tuzata olasanmi?" },
          { who: 'Sardor', en: "Of course. I'll put it right within the hour, and I'll make up for it by preparing the handouts too.", uz: "Albatta. Bir soat ichida tuzataman va tarqatma materiallarni ham tayyorlab, buning o'rnini to'ldiraman." },
          { who: 'Helen', en: "Thank you. It happens to everyone, but please double-check next time.", uz: "Rahmat. Bu hammaning boshiga tushadi, lekin keyingi safar ikki marta tekshir." },
          { who: 'Sardor', en: "I will. It won't happen again.", uz: "Tekshiraman. Bu takrorlanmaydi." },
        ] },
        { t: 'check', ex: { k: 'choice', q: "How does Sardor offer to make up for his mistake?", opts: ["He will fix the file and prepare the handouts.", "He will cancel the meeting.", "He will tell the client.", "He will ask Helen to fix it."], a: 0, why: "*I'll put it right within the hour, and I'll make up for it by preparing the handouts too.*" } },
      ],
    },
  ],
  words: [
    { en: 'oversight', uz: "e'tiborsizlik, ko'zdan qochirish", ipa: 'ˈəʊvəsaɪt', pos: 'noun', ex: 'The missing signature was an oversight.', exUz: "Imzoning yo'qligi e'tiborsizlik edi." },
    { en: 'slip-up', uz: "kichik xato, yanglishish", ipa: 'ˈslɪp ʌp', pos: 'noun', ex: 'One small slip-up cost the team the contract.', exUz: "Bitta kichik xato jamoaga shartnomaga tushdi." },
    { en: 'make up for', uz: "o'rnini to'ldirmoq, kompensatsiya qilmoq", ipa: 'meɪk ʌp fɔː', pos: 'phrasal verb', ex: 'I will make up for the lost time by working late.', exUz: "Yo'qotilgan vaqtning o'rnini kech ishlab to'ldiraman." },
    { en: 'put right', uz: "tuzatmoq", ipa: 'pʊt raɪt', pos: 'phrasal verb', ex: 'We will put the error right immediately.', exUz: "Xatoni darhol tuzatamiz." },
    { en: 'take responsibility', uz: "mas'uliyatni o'z zimmasiga olmoq", ipa: 'teɪk rɪˌspɒnsəˈbɪləti', pos: 'phrase', ex: 'The manager took responsibility for the failure.', exUz: "Menejer muvaffaqiyatsizlik uchun mas'uliyatni o'z zimmasiga oldi." },
    { en: 'make amends', uz: "xatoni yuvmoq, kechirim olishga harakat qilmoq", ipa: 'meɪk əˈmendz', pos: 'phrase', ex: 'He sent flowers to make amends for his rude comment.', exUz: "U qo'pol gapi uchun kechirim so'rab gul yubordi." },
  ],
  practice: [
    { k: 'match', pairs: [['oversight', "e'tiborsizlik"], ['slip-up', 'kichik xato'], ['put right', 'tuzatmoq'], ['make up for', "o'rnini to'ldirmoq"], ['take responsibility', "mas'uliyatni o'z zimmasiga olmoq"]] },
    { k: 'choice', q: "Do'stingiz bilan kinoga kech qoldingiz. Qaysi ibora mos?", opts: ["Sorry I'm late, I lost track of time.", "I sincerely regret any inconvenience caused.", "Please accept my formal apologies.", "I deeply apologise to your family."], a: 0, why: "Do'stga, kichik xato → **norasmiy uzr**." },
    { k: 'fill', q: "I apologise ___ the delay in replying.", a: ['for'], uz: "Javob berishdagi kechikish uchun uzr so'rayman.", why: "**apologise for + ot**." },
    { k: 'fill', q: "I'm sorry for ___ your call yesterday.", a: ['missing'], hint: 'miss + -ing', uz: "Kechagi qo'ng'irog'ingizni o'tkazib yuborganim uchun uzr.", why: "**sorry for + -ing**." },
    { k: 'listen', say: "It won't happen again. I'll double-check everything.", opts: ["It won't happen again. I'll double-check everything.", "It happened again. I'll double-check everything.", "It won't happen again. I won't check anything.", "It will happen again. I'll check everything."], a: 0 },
    { k: 'order', uz: "Buni tuzatishga ruxsat bering.", words: ['Let', 'me', 'put', 'it', 'right.'], extra: ['makes', 'to'], why: "**Let me + fe'l**: *put it right*." },
    { k: 'fix', wrong: "I apologise you for the delay.", a: ["I apologise for the delay.", "I apologise to you for the delay."], why: "**apologise for** yoki **apologise to you for**." },
    { k: 'fix', wrong: "I should send you the file yesterday.", a: ["I should have sent you the file yesterday."], why: "O'tgan zamonda: **should have + V3**." },
    { k: 'choice', q: "Qaysi gap bahona emas, mas'uliyatni olish?", opts: ["I should have started earlier.", "I didn't have enough time.", "The deadline was too short.", "Everyone else was busy."], a: 0, why: "**should have + V3** bilan o'z xatosini tan oladi." },
    { k: 'translate', uz: "Bu mening e'tiborsizligim edi. Bu takrorlanmaydi.", a: ["It was an oversight on my part. It won't happen again.", "It was an oversight. It won't happen again.", "It was my oversight. It won't happen again.", "It was an oversight on my part. It will not happen again."], why: "**oversight** + **It won't happen again**." },
    { k: 'tf', q: "*I deeply regret any inconvenience* — bu do'stingizga yozadigan oddiy xabar.", a: false, why: "Bu **juda rasmiy** ibora (xat, e'lon). Do'stga *Sorry about that* yetarli." },
    { k: 'dictation', say: 'Thank you for telling me. Let us sort it out.', a: ['Thank you for telling me. Let us sort it out.', "Thank you for telling me. Let's sort it out."], uz: "Aytganingiz uchun rahmat. Keling, buni hal qilamiz." },
    { k: 'translate', uz: "Men bu xato uchun mas'uliyatni o'z zimmamga olaman.", a: ['I take responsibility for this mistake.', 'I take responsibility for the mistake.', 'I take full responsibility for this mistake.', 'I take full responsibility for the mistake.', "I'll take responsibility for this mistake."], why: "**take responsibility for + ot**." },
    { k: 'speak', say: "I apologise for the delay. I'll put it right today.", uz: "Kechikish uchun uzr so'rayman. Bugun tuzataman." },
  ],
  quiz: [
    { k: 'choice', q: "Menejeringizga rasmiy xatda yozing: ___ for the late report.", opts: ['I apologise', 'Sorry, my bad', 'No worries', 'My mistake lol'], a: 0, why: "Rasmiy yozuvda **I apologise for…**." },
    { k: 'choice', q: "He sent a gift to ___ amends for his rude comment.", opts: ['make', 'do', 'take', 'put'], a: 0, why: "**make amends** — qat'iy birikma." },
    { k: 'fill', q: "I'll make ___ for the lost time by staying late.", a: ['up'], uz: "Yo'qotilgan vaqtni kech qolib to'ldiraman.", why: "**make up for**." },
    { k: 'fix', wrong: "I'm sorry for I didn't call you.", a: ["I'm sorry I didn't call you.", "I'm sorry for not calling you."], why: "**for** dan keyin **-ing**, yoki **sorry** + to'liq gap." },
    { k: 'order', uz: "Sizga oldinroq aytishim kerak edi.", words: ['I', 'should', 'have', 'told', 'you', 'earlier.'], extra: ['tell', 'had'], why: "**should have + V3**." },
    { k: 'listen', say: 'I take full responsibility for the error.', opts: ['I take full responsibility for the error.', 'I take no responsibility for the error.', 'I took full responsibility for the error.', 'He takes full responsibility for the error.'], a: 0 },
    { k: 'tf', q: "*It was an oversight* — xato ataylab qilingan.", a: false, why: "**Oversight** — beixtiyor, e'tiborsizlik tufayli yo'l qo'yilgan xato." },
  ],
  summary: [
    "Uzr darajasi vaziyatga mos bo'lsin: *Sorry* (do'st) → *I'm really sorry* → *I apologise for…* → *I deeply regret…* (rasmiy).",
    "**Apologise for + ot / -ing**, **apologise to + kishi**: *I apologise you* xato.",
    "Yaxshi uzr: uzr + qisqa izoh + tuzatish (*put right, make up for*) + va'da (*It won't happen again*).",
    "O'tgan xato uchun: **should have + V3**: *I should have told you*, *should tell* emas.",
    "Yangi so'zlar: **oversight, slip-up, make up for, put right, take responsibility, make amends**.",
  ],
  homework: "Haqiqiy yoki o'ylab topilgan vaziyat tanlang (hujjatni kech topshirdingiz). 1) do'stingizga 2 gaplik norasmiy uzr, 2) menejeringizga 5 gaplik rasmiy uzr xati yozing. Rasmiy xatda *apologise for, should have, put right, It won't happen again* bo'lsin.",
};

export default lesson;
