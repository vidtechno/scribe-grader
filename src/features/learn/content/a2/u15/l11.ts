import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u15-l11",
  title: "Rules, advice and requests: final review",
  titleUz: "Qoidalar, maslahat va iltimoslar: yakuniy takror",
  mini: true,
  kind: 'review',
  goal: "Bosqichdagi hamma narsani takrorlaysiz: **must / have to**, **should**, **can / could / be able to**, muloyim iltimos va takliflar, yo'l ko'rsatish, shifokorda va belgilar. Bir kunlik vaziyatda to'g'ri ibora tanlay olasiz.",
  slides: [
    {
      title: "Dialog: bir kun shaharda",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Jasur", en: "Excuse me, could you tell me how to get to the pharmacy? I've got a headache.", uz: "Kechirasiz, dorixonaga qanday borishni ayta olasizmi? Boshim og'riyapti." },
            { who: "Nilufar", en: "Go straight on and turn left. It's next to the bank. You should see a doctor, too.", uz: "To'g'ri yuring va chapga buriling. U bank yonida. Shifokorga ham ko'rinishingiz kerak." },
            { who: "Jasur", en: "I will. Do I have to make an appointment?", uz: "Ko'rinaman. Oldindan yozilishim kerakmi?" },
            { who: "Nilufar", en: "No, you needn't. Just go to reception. But you mustn't park on the pavement!", uz: "Yo'q, shart emas. Registraturaga boravering. Lekin trotuarga mashina qo'ymang!" },
            { who: "Jasur", en: "Don't worry, I'm on foot. Would you like me to carry your bag?", uz: "Xavotir olmang, men piyodaman. Sumkangizni ko'tarib beraymi?" },
            { who: "Nilufar", en: "That's kind, but I can manage. Thank you!", uz: "Rahmat, lekin o'zim eplayman. Rahmat!" },
          ],
        },
        { t: "check", ex: { k: "choice", q: "Why does Jasur need the pharmacy?", opts: ["He has a headache.", "He lost his bag.", "He wants a bank.", "He is lost."], a: 0, why: "*I've got a headache.*" } },
        { t: "check", ex: { k: "tf", q: "Jasur has to make an appointment.", a: false, why: "*No, you needn't.*" } },
      ],
    },
    {
      title: "Qaysi ibora qachon?",
      blocks: [
        {
          t: "table", head: ["Vaziyat", "Ibora"], speak: [1],
          rows: [
            ["Majburiyat", "You must / have to show your ticket."],
            ["Taqiq", "You mustn't park here."],
            ["Shart emas", "You don't have to / needn't pay."],
            ["Maslahat", "You should take some medicine."],
            ["Qobiliyat / ruxsat", "I can swim. Can I sit here?"],
            ["Iltimos / taklif", "Could you help me? Shall I carry it?"],
            ["Yo'l", "Turn right. It's opposite the bank."],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["She must go. / He has to go.", "You should rest.", "You needn't wait.", "I've got a cough."] },
          bad: { title: "Xato", items: ["She musts go. / He have to go.", "You should to rest.", "You needn't to wait.", "I have cough."] },
        },
        { t: "check", ex: { k: "choice", q: "At the sign \"No parking\":", opts: ["You mustn't park here.", "You don't have to park here.", "You should park here.", "You needn't park here."], a: 0, why: "Taqiq → **mustn't**." } },
        { t: "check", ex: { k: "fill", q: "You look pale. You ___ rest. (maslahat)", a: ["should"], why: "Maslahat → **should**." } },
        { t: "check", ex: { k: "order", uz: "Sumkangizni ko'tarib beraymi?", words: ["Shall", "I", "carry", "your", "bag?"], extra: ["to", "Do"] } },
      ],
    },
    {
      title: "Yo'l, shifokor, belgilar",
      blocks: [
        {
          t: "examples", items: [
            { en: "Excuse me, how do I get to the reception?", uz: "Kechirasiz, qabulxonaga qanday boraman?" },
            { en: "Turn right at the traffic lights. It's between the bank and the school.", uz: "Svetoforda o'ngga buriling. U bank bilan maktab o'rtasida." },
            { en: "I've got a cough and a sore throat.", uz: "Yo'talim va tomog'im og'riyapti." },
            { en: "You should drink plenty of water and rest.", uz: "Ko'p suv ichib, dam olishingiz kerak." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "Yo'l so'rash:", opts: ["How do I get to the station?", "How can I go to the station?", "Where located the station?", "How I get to the station?"], a: 0, why: "**How do I get to…?**" } },
        { t: "check", ex: { k: "fill", q: "The school is ___ the bank and the park. (o'rtasida)", a: ["between"], why: "**between … and …**" } },
      ],
    },
  ],
  words: [
    { en: "reception", uz: "qabulxona, registratura", ipa: "rɪˈsep.ʃn", pos: "noun", ex: "Please wait at reception.", exUz: "Iltimos, qabulxonada kuting." },
    { en: "prescription", uz: "retsept", ipa: "prɪˈskrɪp.ʃn", pos: "noun", ex: "You need a prescription for this medicine.", exUz: "Bu dori uchun retsept kerak." },
    { en: "pavement", uz: "trotuar", ipa: "ˈpeɪv.mənt", pos: "noun", ex: "Don't ride a bike on the pavement.", exUz: "Trotuarda velosiped haydamang." },
    { en: "switch off", uz: "o'chirmoq", ipa: "swɪtʃ ɒf", pos: "verb", ex: "Please switch off your phone.", exUz: "Iltimos, telefoningizni o'chiring." },
    { en: "quiet", uz: "tinch, jim", ipa: "ˈkwaɪ.ət", pos: "adj", ex: "You must be quiet in the library.", exUz: "Kutubxonada jim bo'lishingiz kerak." },
    { en: "receipt", uz: "chek", ipa: "rɪˈsiːt", pos: "noun", ex: "Could I have a receipt, please?", exUz: "Chek bera olasizmi?" },
  ],
  practice: [
    { k: "match", pairs: [["reception", "qabulxona"], ["prescription", "retsept"], ["pavement", "trotuar"], ["switch off", "o'chirmoq"], ["receipt", "chek"]] },
    { k: "listen", say: "Could you tell me the way to the station?", opts: ["Could you tell me the way to the station?", "Could you tell me the time of the station?", "Can I tell you the way to the station?"], a: 0 },
    { k: "choice", q: "Free entry. You ___ pay.", opts: ["don't have to", "mustn't", "must", "should to"], a: 0, why: "Shart emas." },
    { k: "choice", q: "\"Please switch off your phone.\" Bu qayerda bo'lishi mumkin?", opts: ["In a cinema.", "In a shop.", "In a taxi.", "In a park."], a: 0, why: "Kinoteatrda telefon o'chiriladi." },
    { k: "choice", q: "Restoranda eng muloyim:", opts: ["Could I have the receipt, please?", "Give me the receipt.", "I want the receipt.", "Receipt!"], a: 0, why: "**Could I…, please?**" },
    { k: "choice", q: "Next month he ___ drive.", opts: ["will be able to", "will can", "can will", "is can"], a: 0, why: "**will be able to**." },
    { k: "choice", q: "\"The bank is ___ the pharmacy.\" (yonida)", opts: ["next to", "in", "at the", "on the"], a: 0, why: "**next to** = yonida." },
    { k: "fill", q: "My back ___. (hurt)", a: ["hurts"], why: "back = it → **hurts**." },
    { k: "fill", q: "You ___ be quiet in the library. (jim bo'lish shart)", a: ["must"], why: "Majburiyat: jim bo'lish kerak → **must**." },
    { k: "fix", wrong: "I have headache.", a: ["I've got a headache.", "I have a headache.", "I have got a headache."], why: "Artikl kerak: **a headache**." },
    { k: "fix", wrong: "How can I go to the station?", a: ["How do I get to the station?", "How can I get to the station?"], why: "**How do I get to…?**" },
    { k: "tf", q: "**He musts wear a uniform** — to'g'ri gap.", a: false, why: "*He must wear* yoki *He has to wear*." },
    { k: "order", uz: "Menimcha, shifokorga ko'rinishingiz kerak.", words: ["I", "think", "you", "should", "see", "a", "doctor."], extra: ["to", "must"] },
    { k: "translate", uz: "Svetoforda chapga buriling.", a: ["Turn left at the traffic lights.", "Turn left at the lights."] },
    { k: "speak", say: "Excuse me, could you tell me how to get to the pharmacy?", uz: "Kechirasiz, dorixonaga qanday borishni ayta olasizmi?" },
  ],
  quiz: [
    { k: "choice", q: "Which is a polite request?", opts: ["Could you open the window, please?", "Open the window.", "You open the window.", "I want the window open."], a: 0, why: "**Could you…, please?**" },
    { k: "choice", q: "\"Would you like some tea?\" — Qaysi javob mos?", opts: ["Yes, please.", "Yes, I would like.", "I do.", "Tea is."], a: 0, why: "**Yes, please.**" },
    { k: "choice", q: "Sign: \"Out of order\". It means:", opts: ["It doesn't work.", "It is free.", "It is open.", "It is new."], a: 0, why: "**Out of order** = ishlamaydi." },
    { k: "choice", q: "You ___ shout. People are sleeping.", opts: ["mustn't", "don't have to", "needn't", "can to"], a: 0, why: "Taqiq → **mustn't**." },
    { k: "fill", q: "Last year I ___ to work on Saturdays. (kerak edi)", a: ["had"], why: "**had to**." },
    { k: "fill", q: "Can you give me some ___? (maslahat)", a: ["advice"], why: "**some advice**." },
    { k: "tf", q: "**I could swim when I was six** — o'tmishdagi qobiliyat.", a: true },
    { k: "order", uz: "Telefoningizni o'chirishingiz kerak.", words: ["You", "must", "switch", "off", "your", "phone."], extra: ["to", "musts"], alt: [["You", "have", "to", "switch", "off", "your", "phone."]] },
    { k: "translate", uz: "Pul to'lashingiz shart emas.", a: ["You don't have to pay.", "You needn't pay.", "You don't need to pay.", "You do not have to pay."] },
  ],
  summary: [
    "**must / have to** — majburiyat, **mustn't** — taqiq, **don't have to / needn't** — shart emas.",
    "**should** — maslahat; **can / could / be able to** — qobiliyat va ruxsat.",
    "Muloyim iltimos: **Could you…? Can I…?**; taklif: **Would you like…? Shall I…?**",
    "Yo'l: **How do I get to…? Turn left. It's next to…** Shifokorda: **I've got a…, My… hurts.**",
    "Modal fe'ldan keyin 1-shakl: **must go, should rest, needn't wait**.",
  ],
  homework: "Bir kunlik mini-hikoya yozing (8 ta gap): qoida, maslahat, iltimos, yo'l so'rash va shifokorda gapirish. Har bir mavzudan kamida bitta ibora ishlating.",
};

export default lesson;
