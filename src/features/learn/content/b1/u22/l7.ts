import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u22-l7",
  title: "Writing a formal email",
  titleUz: "Yozish: rasmiy elektron xat",
  goal: "Rasmiy elektron xatning tuzilishini (sarlavha, murojaat, maqsad, so'rov, xulosa, xayrlashuv) bilasiz, **Dear Mr Brown… Yours sincerely** va **Dear Sir or Madam… Yours faithfully** ni adashtirmaysiz va **I am writing to enquire about… I would be grateful if you could…** kabi tayyor iboralar bilan o'zingiz xat yoza olasiz.",
  slides: [
    {
      title: "Rasmiy yoki norasmiy?",
      blocks: [
        { t: "p", md: "Do'stingizga xat yozganda **norasmiy** (*Hi Tom, thanks!*), lekin ish beruvchiga, universitetga, kompaniyaga, notanish odamga yoki shikoyat xatida **rasmiy** uslub kerak. Rasmiy xat **hurmatli, aniq va muloyim** bo'lishi kerak." },
        {
          t: "table", head: ["Norasmiy", "Rasmiy"], speak: [0, 1],
          rows: [
            ["Hi Tom,", "Dear Mr Brown,"],
            ["I'm writing to ask about the course.", "I am writing to enquire about the course."],
            ["Can you send me the price list?", "Could you please send me the price list?"],
            ["Thanks for your help.", "Thank you for your assistance."],
            ["Bye for now, Aziz", "Kind regards, Aziz Karimov"],
          ],
        },
        { t: "tip", tone: "warn", md: "Rasmiy xatda **qisqartmalar** (*I'm, can't, I'd*) ishlatilmaydi: *I am, cannot, I would*. Undov belgisi va emoji ham kerak emas." },
        { t: "check", ex: { k: "choice", q: "Which sentence is formal?", opts: ["Can you tell me the price?", "Tell me the price.", "Could you please tell me the price?", "What's the price?"], a: 2, why: "**Could you please…?** — eng muloyim va rasmiy shakl." } },
      ],
    },
    {
      title: "Xat tuzilishi",
      blocks: [
        { t: "p", md: "Yaxshi rasmiy xat har doim bir xil tartibda yoziladi. Shunda o'quvchi nima kerakligini darrov tushunadi." },
        {
          t: "table", head: ["Qism", "Nima yoziladi", "Misol"],
          rows: [
            ["Subject", "Xat mavzusi, qisqa", "Enquiry about the evening course"],
            ["Murojaat", "Dear + ism yoki Sir or Madam", "Dear Mr Brown,"],
            ["Maqsad", "Nima uchun yozyapsiz", "I am writing to enquire about…"],
            ["Asosiy qism", "Tafsilot va so'rov", "Could you please tell me…?"],
            ["Yakun", "Minnatdorchilik va umid", "I look forward to hearing from you."],
            ["Xayrlashuv", "Yours sincerely / faithfully", "Yours sincerely, Aziz Karimov"],
          ],
        },
        { t: "tip", tone: "info", md: "Har bir qism — **alohida qisqa abzats**. Birinchi gapdayoq xat sababini yozing. Uzun kirish kerak emas." },
        { t: "check", ex: { k: "choice", q: "Where do you write why you are writing?", opts: ["In the first paragraph", "At the end only", "In the subject line only", "After your name"], a: 0, why: "Maqsad birinchi abzatsda yoziladi." } },
      ],
    },
    {
      title: "Murojaat va xayrlashuv",
      blocks: [
        { t: "p", md: "Britaniya inglizchasida murojaat va xayrlashuv **juft** bo'ladi. Ularni adashtirmang." },
        {
          t: "table", head: ["Murojaat", "Qachon", "Xayrlashuv"], speak: [0, 2],
          rows: [
            ["Dear Mr Brown,", "Ismini bilasiz", "Yours sincerely,"],
            ["Dear Sir or Madam,", "Ismini bilmaysiz", "Yours faithfully,"],
            ["Dear Mr Brown,", "Yaxshi tanishsiz, yarim rasmiy", "Kind regards,"],
          ],
        },
        { t: "tip", tone: "warn", md: "Qoida: **ism bor → sincerely**, **ism yo'q → faithfully**. Ayol uchun odatda **Ms** ishlatiladi (turmush holati ko'rsatilmaydi). Jinsini bilmasangiz, ism va familiya bilan yozish mumkin: *Dear Aziz Karimov*. *Dear friend* rasmiy xatga to'g'ri kelmaydi." },
        { t: "check", ex: { k: "choice", q: "Dear Sir or Madam, ... ___", opts: ["Yours sincerely,", "Yours faithfully,", "Bye,", "See you,"], a: 1, why: "Ism noma'lum → **Yours faithfully**." } },
        { t: "check", ex: { k: "choice", q: "Dear Mr Brown, ... ___", opts: ["Yours faithfully,", "Yours sincerely,", "Cheers,", "Love,"], a: 1, why: "Ism ma'lum → **Yours sincerely**." } },
      ],
    },
    {
      title: "Foydali iboralar",
      blocks: [
        { t: "p", md: "Quyidagi iboralar ingliz rasmiy xatlarida har kuni uchraydi. Ularni butun ibora sifatida yodlang." },
        {
          t: "table", head: ["Maqsad", "Ibora"], speak: [1],
          rows: [
            ["Maqsad bildirish", "I am writing to enquire about the course."],
            ["Maqsad bildirish", "I am writing to apply for the position."],
            ["Mavzuga murojaat", "I am writing regarding your advert."],
            ["So'rash", "Could you please send me more information?"],
            ["Muloyim so'rov", "I would be grateful if you could confirm the date."],
            ["Imkoniyat so'rash", "Would it be possible to change the time?"],
            ["Ilova", "Please find attached a copy of my CV."],
            ["Uzr", "I apologise for any inconvenience."],
            ["Yakun", "I look forward to hearing from you."],
            ["Aloqa", "Please do not hesitate to contact me."],
          ],
        },
        { t: "tip", tone: "info", md: "**I am writing to + fe'l** — maqsad (maqsad haqidagi darsda o'rgangansiz). **I would be grateful if you could + fe'l** — juda muloyim so'rov. **I look forward to + -ing** — *to* predlog, shuning uchun *hearing*." },
        { t: "check", ex: { k: "fill", q: "I would be grateful if you ___ send me the timetable.", a: ["could"], why: "**I would be grateful if you could** + fe'l." } },
        { t: "check", ex: { k: "fix", wrong: "I look forward to hear from you.", a: ["I look forward to hearing from you."], hint: "to — predlog", why: "**look forward to** + -ing." } },
      ],
    },
    {
      title: "Rasmiy so'zlar",
      blocks: [
        { t: "p", md: "Rasmiy xatda kundalik so'zlar o'rniga ko'proq **bitta, tantanaliroq** so'z tanlanadi. Phrasal verbs ham kamroq qo'llaniladi." },
        {
          t: "table", head: ["Norasmiy", "Rasmiy"], speak: [0, 1],
          rows: [
            ["get", "receive"],
            ["need", "require"],
            ["help", "assist"],
            ["tell", "inform"],
            ["start", "begin"],
            ["ask about", "enquire about"],
            ["I want", "I would like"],
          ],
        },
        {
          t: "compare",
          good: { title: "Rasmiy", items: ["I would like to enquire about your courses.", "I have not received a reply.", "Please inform me of the date."] },
          bad: { title: "Haddan tashqari norasmiy", items: ["I want to ask about your courses.", "I haven't got a reply yet.", "Tell me the date, please."] },
        },
        { t: "check", ex: { k: "choice", q: "Rasmiy variantni tanlang: \"We need your passport number.\"", opts: ["We require your passport number.", "We want your passport number.", "We get your passport number.", "We ask your passport number."], a: 0, why: "**need → require**." } },
      ],
    },
    {
      title: "Namuna xat",
      blocks: [
        {
          t: "text", title: "An enquiry about a course",
          en: "Subject: Enquiry about the evening English course\n\nDear Mr Brown,\n\nI am writing to enquire about the evening English course that begins in October. I work full-time, so I would like to know whether classes are available after six o'clock.\n\nCould you please tell me the price of the course and whether I need to take a placement test? I would also be grateful if you could send me the timetable.\n\nI have attached a copy of my certificate. Thank you for your time. I look forward to hearing from you.\n\nYours sincerely,\nAziz Karimov",
          uz: "Mavzu: Kechki ingliz tili kursi haqida so'rov\n\nHurmatli janob Braun,\n\nOktabrda boshlanadigan kechki ingliz tili kursi haqida so'rash uchun yozyapman. Men to'liq kun ishlayman, shuning uchun soat oltidan keyin darslar bormi, bilmoqchiman.\n\nIltimos, kurs narxini va saralash testini topshirish kerakligini ayta olasizmi? Shuningdek, dars jadvalini yuborsangiz, minnatdor bo'lardim.\n\nSertifikatimning nusxasini ilova qildim. Vaqtingiz uchun rahmat. Javobingizni kutaman.\n\nHurmat bilan,\nAziz Karimov",
        },
        { t: "check", ex: { k: "tf", q: "Aziz works in the evenings.", a: false, why: "U *full-time* ishlaydi va **soat oltidan keyin** dars bormi, deb so'rayapti. Kechqurun o'qimoqchi." } },
        { t: "check", ex: { k: "choice", q: "Why does Aziz write \"Yours sincerely\"?", opts: ["He knows the name of the person.", "He does not know the name.", "It is a short email.", "He is a friend of Mr Brown."], a: 0, why: "Ism ma'lum (Mr Brown) → **Yours sincerely**." } },
      ],
    },
  ],
  words: [
    { en: "enclose", uz: "ilova qilmoq (xat bilan birga)", ipa: "ɪnˈkləʊz", pos: "verb", ex: "I enclose a copy of my certificate.", exUz: "Sertifikatimning nusxasini ilova qilyapman." },
    { en: 'regarding', uz: "...ga oid, ...ga taalluqli", ipa: 'rɪˈɡɑː.dɪŋ', pos: 'prep', ex: "I am writing regarding your advertisement.", exUz: "Men sizning e'loningizga oid yozyapman." },
    { en: 'reluctant', uz: "istaksiz, ikkilangan", ipa: 'rɪˈlʌk.tənt', pos: 'adj', ex: "She was reluctant to speak in public.", exUz: "U ommaviy joyda gapirishga istaksiz edi." },
    { en: "inconvenience", uz: "noqulaylik", ipa: "ˌɪn.kənˈviː.ni.əns", pos: "noun", ex: "We apologise for the inconvenience.", exUz: "Noqulaylik uchun uzr so'raymiz." },
    { en: "forward", uz: "jo'natmoq (olingan xatni)", ipa: "ˈfɔː.wəd", pos: "verb", ex: "Could you forward the message to the manager?", exUz: "Xabarni menejerga jo'nata olasizmi?" },
    { en: "appreciate", uz: "qadrlamoq, minnatdor bo'lmoq", ipa: "əˈpriː.ʃi.eɪt", pos: "verb", ex: "I really appreciate your help.", exUz: "Yordamingizni juda qadrlayman." },
    { en: "proceed", uz: "davom etmoq, o'tmoq", ipa: "prəˈsiːd", pos: "verb", ex: "Please proceed to the second floor.", exUz: "Iltimos, ikkinchi qavatga o'ting." },
    { en: "assist", uz: "yordam bermoq (rasmiy)", ipa: "əˈsɪst", pos: "verb", ex: "Our staff will be happy to assist you.", exUz: "Xodimlarimiz sizga yordam berishdan xursand bo'ladi." },
    { en: "accommodate", uz: "joylashtirmoq; moslashmoq", ipa: "əˈkɒm.ə.deɪt", pos: "verb", ex: "The hotel can accommodate up to fifty guests.", exUz: "Mehmonxona ellikkacha mehmonni joylashtira oladi." },
    { en: "response", uz: "javob", ipa: "rɪˈspɒns", pos: "noun", ex: "I am waiting for your response.", exUz: "Javobingizni kutyapman." },
  ],
  practice: [
    { k: "choice", q: "Dear Sir or Madam, ... ___", opts: ["Yours faithfully,", "Yours sincerely,", "Best wishes,", "Bye,"], a: 0, why: "Ism noma'lum → **faithfully**." },
    { k: "choice", q: "Dear Mr Brown, ... ___", opts: ["Yours sincerely,", "Yours faithfully,", "See you,", "Thanks,"], a: 0, why: "Ism ma'lum → **sincerely**." },
    { k: "match", pairs: [["need", "require"], ["help", "assist"], ["tell", "inform"], ["get", "receive"], ["start", "begin"]] },
    { k: "fill", q: "I am writing ___ enquire about the course.", a: ["to"], uz: "Kurs haqida so'rash uchun yozyapman.", why: "Maqsad: **to** + fe'l." },
    { k: "fill", q: "I would be grateful if you ___ send me the details.", a: ["could"], uz: "Tafsilotlarni yuborsangiz, minnatdor bo'lardim.", why: "**I would be grateful if you could**." },
    { k: "fill", q: "I look forward to ___ from you.", a: ["hearing"], uz: "Javobingizni kutaman.", why: "**look forward to** + -ing." },
    { k: "fill", q: "Please find ___ a copy of my CV.", a: ["attached"], uz: "Rezyumemning nusxasi ilova qilingan.", why: "**Please find attached**." },
    { k: "choice", q: "Which request is the most polite?", opts: ["Send me the price.", "Can you tell me the price?", "Could you please tell me the price?", "Tell me the price, please."], a: 2, why: "**Could you please…?** — eng muloyim." },
    { k: "order", uz: "Kurs haqida so'rash uchun yozyapman.", words: ["I", "am", "writing", "to", "enquire", "about", "the", "course."], extra: ["enquiring", "of"], why: "**I am writing to enquire about**." },
    { k: "order", uz: "Javobingizni kutaman.", words: ["I", "look", "forward", "to", "hearing", "from", "you."], extra: ["hear", "see"], why: "**look forward to** + -ing." },
    { k: "translate", uz: "Hujjatlarimni ilova qildim.", a: ["I have attached my documents.", "I've attached my documents.", "I attach my documents.", "Please find my documents attached.", "Please find attached my documents."], why: "**attach** — ilova qilmoq." },
    { k: "fix", wrong: "I'm writing to enquire about the course.", a: ["I am writing to enquire about the course."], hint: "Rasmiy xatda qisqartma yo'q", why: "Rasmiy xatda **I am**, *I'm* emas." },
    { k: "fix", wrong: "I look forward to hear from you.", a: ["I look forward to hearing from you."], hint: "to — predlog", why: "**look forward to** + -ing." },
    { k: "tf", q: "**Dear Sir or Madam** bilan boshlangan xat **Yours sincerely** bilan tugaydi.", a: false, why: "Ism noma'lum bo'lsa — **Yours faithfully**." },
    { k: "listen", say: "I would be grateful if you could confirm the date.", opts: ["I would be grateful if you could confirm the date.", "I would be grateful if you could change the date.", "I would be happy if you could confirm the date.", "I would be grateful if you can confirm the date."], a: 0 },
    { k: "speak", say: "I am writing to enquire about the course.", uz: "Kurs haqida so'rash uchun yozyapman." },
  ],
  quiz: [
    { k: "choice", q: "Which closing sentence is formal?", opts: ["I look forward to hearing from you.", "Write back soon!", "Tell me what you think.", "Bye for now."], a: 0, why: "Rasmiy yakun: **I look forward to hearing from you**." },
    { k: "choice", q: "Rasmiy variantni tanlang: \"Can you help me?\"", opts: ["Could you please assist me?", "Can you help me please?", "Help me.", "Do you help me?"], a: 0, why: "**help → assist**, **Could you please…?**" },
    { k: "choice", q: "Which is correct?", opts: ["Dear Mr Brown, ... Yours faithfully,", "Dear Mr Brown, ... Yours sincerely,", "Dear Sir or Madam, ... Yours sincerely,", "Dear Mr Brown, ... Yours, bye,"], a: 1, why: "Ism ma'lum → **sincerely**." },
    { k: "fill", q: "I am writing ___ your advert for a sales assistant.", a: ["regarding", "concerning", "about"], why: "**regarding** — ... haqida." },
    { k: "fill", q: "Please do not ___ to contact me.", a: ["hesitate"], why: "**Please do not hesitate to contact me**." },
    { k: "fill", q: "We apologise for any ___.", a: ["inconvenience"], why: "**apologise for the inconvenience**." },
    { k: "order", uz: "Iltimos, ma'lumotni yuborsangiz bo'ladimi?", words: ["Could", "you", "please", "send", "me", "the", "information?"], extra: ["sent", "sending"], why: "**Could you please send me…?**" },
    { k: "fix", wrong: "I want to ask about the price of the course.", a: ["I would like to enquire about the price of the course.", "I would like to ask about the price of the course.", "I am writing to enquire about the price of the course."], hint: "Rasmiyroq qiling", why: "**I want → I would like**." },
    { k: "tf", q: "Rasmiy xatda qisqartmalar (*I'd, can't*) ishlatilmaydi.", a: true, why: "**I would, cannot** deb yoziladi." },
    { k: "listen", say: "Please find attached a copy of my certificate.", opts: ["Please find attached a copy of my certificate.", "Please find attached a copy of my CV.", "I have attached a copy of my certificate.", "Please send a copy of my certificate."], a: 0 },
  ],
  summary: [
    "Rasmiy xat: **Subject → Dear… → maqsad → asosiy qism → yakun → Yours… → ism**. Har qism qisqa abzats.",
    "**Dear Mr Brown… Yours sincerely** (ism ma'lum); **Dear Sir or Madam… Yours faithfully** (ism noma'lum).",
    "Tayyor iboralar: *I am writing to enquire about… Could you please…? I would be grateful if you could… Please find attached… I look forward to hearing from you.*",
    "Rasmiy so'zlar: *get → receive, need → require, help → assist, tell → inform, start → begin, I want → I would like*.",
    "Qisqartmalarsiz yozing: *I am, I would, cannot*. **look forward to** dan keyin **-ing**.",
  ],
  homework: "Bir kursga yoki ishga so'rov xatini yozing (7-9 gap): sarlavha, *Dear…*, maqsad (*I am writing to…*), ikkita muloyim so'rov, *I look forward to hearing from you* va to'g'ri xayrlashuv. Keyin qisqartmalar qolmaganini tekshiring.",
};

export default lesson;
