import type { Lesson } from '../../../types';

// Mini lesson (situation): making a polite complaint in a shop and at a hotel. Uses Past Simple, Past Perfect (l1) and reported statements (l3).
const lesson: Lesson = {
  id: 'u19-l10',
  title: 'Making a complaint',
  titleUz: "Shikoyat qilish: mahsulot yoki xizmatdan norozilik",
  mini: true,
  kind: 'situation',
  goal: "Do'konda yoki mehmonxonada **muloyim, lekin qat'iy shikoyat** qilasiz: muammoni tushuntirasiz (*I bought it last week, but it doesn't work*), **refund** yoki **replacement** so'raysiz va sizga aytilgan gapni ko'chirasiz (*The assistant told me that I could return it*).",
  slides: [
    {
      title: "Shikoyatni qanday boshlash kerak",
      blocks: [
        { t: 'p', md: "Ingliz tilida shikoyat **muloyim** aytiladi, lekin muammo aniq bo'lishi kerak. Reja: **1) shikoyatni boshlash, 2) nima bo'lganini aytish, 3) nima xohlashingizni aytish**." },
        { t: 'table', head: ["Qadam", "Ibora"], speak: [1], rows: [
          ["1. Boshlash", "Excuse me, I'd like to make a complaint."],
          ["2. Muammo", "I bought these headphones last week, but the left one doesn't work."],
          ["2. Muammo", "I'm afraid the product is faulty."],
          ["3. Talab", "Could I have a refund, please?"],
          ["3. Talab", "I'd like a replacement, please."],
          ["Qat'iy", "I'm sorry, but that's unacceptable."],
        ] },
        { t: 'tip', tone: 'info', md: "**I'm afraid…** — \"afsuski…\": yomon xabarni yumshoq aytish. **Could I have…?** va **I'd like…** talabni muloyim qiladi. **I want my money!** — qo'pol eshitiladi." },
        { t: 'check', ex: { k: 'choice', q: "Do'konda shikoyatni qanday boshlaysiz?", opts: ["Excuse me, I'd like to make a complaint.", "You must give me my money.", "I complain you.", "This is bad shop."], a: 0, why: "Muloyim va aniq boshlanish." } },
      ],
    },
    {
      title: "Dialog: Buzilgan quloqchinlar",
      blocks: [
        { t: 'dialog', lines: [
          { who: 'Lily', en: "Excuse me. I'd like to make a complaint.", uz: "Kechirasiz. Men shikoyat qilmoqchiman." },
          { who: 'Jack', en: "Of course. What seems to be the problem?", uz: "Albatta. Muammo nimada?" },
          { who: 'Lily', en: "I bought these headphones here last week, but the left one doesn't work.", uz: "Men bu quloqchinlarni o'tgan hafta shu yerdan sotib oldim, lekin chap tomoni ishlamayapti." },
          { who: 'Jack', en: "I'm sorry to hear that. Do you have the receipt?", uz: "Bunga afsusdaman. Chekingiz bormi?" },
          { who: 'Lily', en: "Yes, here it is. The assistant told me that I could return them within thirty days.", uz: "Ha, mana. Sotuvchi menga ularni o'ttiz kun ichida qaytarishim mumkinligini aytgan edi." },
          { who: 'Jack', en: "That's right. Would you like a refund or a replacement?", uz: "To'g'ri. Pulni qaytarishni xohlaysizmi yoki almashtirishnimi?" },
          { who: 'Lily', en: "I'd prefer a refund, please. I had already tried to fix them, but nothing helped.", uz: "Pulni qaytarishni afzal ko'raman. Ularni tuzatishga urinib ko'rgan edim, lekin hech narsa yordam bermadi." },
          { who: 'Jack', en: "No problem. The money will go back to your account in a few days.", uz: "Muammo yo'q. Pul bir necha kunda hisobingizga qaytadi." },
        ] },
        { t: 'check', ex: { k: 'choice', q: "What does Lily want?", opts: ["A refund", "A replacement", "A discount", "A new receipt"], a: 0, why: "*I'd prefer a refund, please.*" } },
        { t: 'check', ex: { k: 'tf', q: "Lily had tried to fix the headphones before she came to the shop.", a: true, why: "*I had already tried to fix them.*" } },
      ],
    },
    {
      title: "Dialog: Mehmonxonadagi muammo",
      blocks: [
        { t: 'dialog', lines: [
          { who: 'Madina', en: "Hello, I'm in room twelve. I'm afraid there's a problem with the room.", uz: "Salom, men o'n ikkinchi xonadaman. Afsuski, xonada muammo bor." },
          { who: 'Tom', en: "I'm sorry to hear that. What's wrong?", uz: "Bunga afsusdaman. Nima bo'ldi?" },
          { who: 'Madina', en: "The heating isn't working, and nobody has cleaned the bathroom. I told the receptionist this morning, but nothing has happened.", uz: "Isitish ishlamayapti va hammomni hech kim tozalamagan. Bugun ertalab qabulxonaga aytdim, lekin hech narsa o'zgarmadi." },
          { who: 'Tom', en: "I apologise. I'll send someone straight away.", uz: "Uzr so'rayman. Hozirning o'zida kimnidir yuboraman." },
          { who: 'Madina', en: "Thank you. If it isn't fixed in an hour, I'd like to move to another room.", uz: "Rahmat. Agar bir soatda tuzatilmasa, boshqa xonaga ko'chmoqchiman." },
          { who: 'Tom', en: "Of course. And I promise to find you a better room if necessary.", uz: "Albatta. Va kerak bo'lsa, sizga yaxshiroq xona topishga va'da beraman." },
        ] },
        { t: 'check', ex: { k: 'fill', q: "I'm ___ there's a problem with the room.", a: ["afraid"], why: "**I'm afraid…** — yomon xabarni yumshoq aytish." } },
        { t: 'check', ex: { k: 'choice', q: "What does Madina say about the bathroom?", opts: ["Nobody has cleaned it.", "It has no water.", "It is too small.", "It is very clean."], a: 0, why: "*Nobody has cleaned the bathroom.*" } },
      ],
    },
    {
      title: "Qat'iy, lekin muloyim",
      blocks: [
        { t: 'p', md: "Agar birinchi javob sizni qoniqtirmasa, **ovozni ko'tarmasdan** qat'iy bo'ling. Mana farq:" },
        { t: 'compare', good: { title: "Muloyim va qat'iy", items: ["I'm afraid that's not acceptable. Could I speak to the manager, please?", "I understand, but I'd still like a refund.", "I told your colleague about it yesterday."] }, bad: { title: "Qo'pol", items: ["Your shop is terrible! Give me my money!", "I don't care about your rules!", "You never listen!"] } },
        { t: 'examples', items: [
          { en: "The assistant told me that the shop would send a replacement.", uz: "Sotuvchi menga do'kon almashtirib yuborishini aytgan edi.", note: "*will* → *would* (ko'chirma gap)." },
          { en: "He said he was busy and asked me to come back later.", uz: "U band ekanini aytdi va keyinroq kelishimni so'radi." },
          { en: "She refused to give me my money back.", uz: "U pulimni qaytarishdan bosh tortdi." },
        ] },
        { t: 'check', ex: { k: 'order', uz: "Menejer bilan gaplashsam bo'ladimi?", words: ["Could", "I", "speak", "to", "the", "manager,", "please?"], extra: ["must", "talk"], why: "**Could I…, please?** — muloyim iltimos." } },
      ],
    },
  ],
  words: [
    { en: 'defective', uz: "nuqsonli, yaroqsiz", ipa: 'dɪˈfek.tɪv', pos: 'adj', ex: "The kettle was defective, so I took it back.", exUz: "Choynak nuqsonli edi, shuning uchun uni qaytarib olib bordim." },
    { en: 'compensation', uz: "tovon, kompensatsiya", ipa: 'ˌkɒm.penˈseɪ.ʃən', pos: 'noun', ex: "They offered us compensation for the delay.", exUz: "Ular kechikish uchun bizga tovon taklif qilishdi." },
    { en: 'let down', uz: "umidini oqlamaslik, xafa qilmoq", ipa: 'let daʊn', pos: 'phrasal verb', ex: "The company let me down by sending the wrong item.", exUz: "Kompaniya noto'g'ri mahsulot yuborib, umidimni oqlamadi." },
    { en: 'replacement', uz: "almashtirish; almashtirish uchun narsa", ipa: 'rɪˈpleɪs.mənt', pos: 'noun', ex: 'They sent me a replacement.', exUz: "Ular menga almashtirib yuborishdi." },
    { en: 'unacceptable', uz: "qabul qilib bo'lmaydigan", ipa: 'ˌʌn.əkˈsep.tə.bəl', pos: 'adj', ex: 'Waiting two hours is unacceptable.', exUz: "Ikki soat kutish qabul qilib bo'lmaydi." },
  ],
  practice: [
    { k: 'match', pairs: [['faulty', 'nuqsonli'], ['refund', 'pulni qaytarish'], ['complaint', 'shikoyat'], ['replacement', 'almashtirish'], ['unacceptable', "qabul qilib bo'lmaydigan"]] },
    { k: 'listen', say: "I'd like to make a complaint.", opts: ["I'd like to make a complaint.", "I'd like to make a compliment.", "I'd like to make a call.", "I'd like to make a complaint tomorrow."], a: 0 },
    { k: 'fill', q: "Excuse me, I'd like to make a ___.", a: ["complaint"], why: "**make a complaint** — shikoyat qilmoq." },
    { k: 'fill', q: "The product is ___. It stopped working after two days.", a: ["faulty"], why: "Buzuq mahsulot — **faulty**." },
    { k: 'choice', q: "Pul qaytarilishini muloyim so'rang:", opts: ["Could I have a refund, please?", "Give me refund now.", "I am wanting a refund.", "Refund me."], a: 0, why: "**Could I have…, please?**" },
    { k: 'choice', q: "\"I'm afraid that's unacceptable.\" Bu gapda **I'm afraid** nimani anglatadi?", opts: ["Yumshoq, muloyim rad etish", "Men qo'rqaman", "Men bilmayman", "Men rozi emasman va ketaman"], a: 0, why: "**I'm afraid** — muloyim yumshatish." },
    { k: 'fix', wrong: "I have bought this phone last week, but it doesn't work.", a: ["I bought this phone last week, but it doesn't work."], hint: "last week — aniq vaqt", why: "**last week** bilan Past Simple: *bought*." },
    { k: 'fix', wrong: "The assistant told that I could return it.", a: ["The assistant told me that I could return it.", "The assistant told me I could return it.", "The assistant said that I could return it.", "The assistant said I could return it."], hint: "told + kim", why: "**told** dan keyin odam kerak: *told me*." },
    { k: 'order', uz: "Men oldin uni tuzatishga urinib ko'rgan edim.", words: ["I", "had", "already", "tried", "to", "fix", "it."], extra: ["have", "trying"], alt: [["I", "had", "tried", "to", "fix", "it", "already."]], why: "Oldingi ish → **had tried**." },
    { k: 'translate', uz: "Kechirasiz, men shikoyat qilmoqchiman.", a: ["Excuse me, I'd like to make a complaint.", "Excuse me, I would like to make a complaint.", "Excuse me, I want to make a complaint.", "Sorry, I'd like to make a complaint."] },
    { k: 'dictation', say: "The assistant told me that I could return them within thirty days.", a: ["The assistant told me that I could return them within thirty days.", "The assistant told me I could return them within thirty days.", "The assistant told me that I could return them within 30 days."] },
    { k: 'speak', say: "I'd prefer a refund, please.", uz: "Pulni qaytarishni afzal ko'raman." },
  ],
  quiz: [
    { k: 'choice', q: "Hotel: *Nobody has cleaned the bathroom.* Bu — nima?", opts: ["Shikoyat", "Maqtov", "Taklif", "Savol"], a: 0, why: "Muammo haqida shikoyat." },
    { k: 'choice', q: "\"I'll send a replacement,\" said the shop. → The shop said that it ___ send a replacement.", opts: ["would", "will", "can", "did"], a: 0, why: "*will* → **would**." },
    { k: 'fill', q: "I'd like a ___, please. I don't want another one, I want my money back.", a: ["refund"], why: "Pulni qaytarish — **refund**." },
    { k: 'tf', q: "**You must give me my money!** — shikoyatni boshlashning eng muloyim usuli.", a: false, why: "Muloyimroq: *Could I have a refund, please?*" },
    { k: 'order', uz: "Afsuski, bu qabul qilib bo'lmaydi.", words: ["I'm", "afraid", "that's", "unacceptable."], extra: ["am", "acceptable"], alt: [["I", "am", "afraid", "that's", "unacceptable."], ["I'm", "afraid", "that", "is", "unacceptable."], ["I", "am", "afraid", "that", "is", "unacceptable."]], why: "**I'm afraid…** — muloyim norozilik." },
    { k: 'translate', uz: "Men uni o'tgan hafta sotib oldim, lekin ishlamayapti.", a: ["I bought it last week, but it doesn't work.", "I bought it last week but it doesn't work.", "I bought it last week, but it isn't working.", "I bought it last week but it isn't working."] },
  ],
  summary: [
    "Shikoyat tartibi: **Excuse me, I'd like to make a complaint.** → muammo → **Could I have a refund / replacement, please?**",
    "Muloyim bo'ling: **I'm afraid…, Could I…?, I'd like…**. Qat'iy, lekin qo'pol emas: **I'm afraid that's not acceptable.**",
    "Muammoni **Past Simple** (*I bought it last week*) va **Past Perfect** (*I had tried to fix it*) bilan ayting.",
    "Sizga aytilgan gap: **The assistant told me that I could return it.**",
  ],
  homework: "Haqiqiy yoki xayoliy bir shikoyat uchun 6 qatorli dialog yozing (do'kon yoki mehmonxona). Unda **I'd like to make a complaint**, **I'm afraid**, **Could I have a refund, please?** va bitta *told me that…* gap bo'lsin.",
};

export default lesson;
