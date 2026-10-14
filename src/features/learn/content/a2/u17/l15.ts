import type { Lesson } from '../../../types';

// Mini lesson (skill): reading and writing, an email to a hotel. Recycles l5 (hotels, polite requests) and l7 (formal email).
const lesson: Lesson = {
  id: 'u17-l15',
  title: 'Reading and writing: an email to a hotel',
  titleUz: "O'qish va yozish: mehmonxonaga xat",
  mini: true,
  kind: 'skill',
  goal: "Mehmonxonaga yozilgan qisqa xatni **o'qib tushunasiz** va o'zingiz 5–7 gapli xat **yozasiz**: sanalarni ayting, narxni so'rang va muloyim iltimos qiling (*I would like to book… Could you tell me…?*).",
  slides: [
    {
      title: "O'qing: mehmonxonaga xat",
      blocks: [
        { t: 'p', md: "Nilufar Buxoroga bormoqchi va mehmonxonaga xat yozdi. Avval umumiy ma'noni tushuning: **kim yozyapti, nima uchun, qaysi sanalarga, nimani so'rayapti?**" },
        { t: 'text', title: 'An email to a hotel', voice: 'emma', en: "Dear Sir or Madam,\nI am writing to ask about a room at your hotel. My sister and I would like to stay from the 12th to the 15th of May. Could you tell me if you have a twin room available? How much is the room per night, and is breakfast included? Also, is there Wi-Fi in the room?\nPlease let me know as soon as possible. I look forward to hearing from you.\nYours faithfully,\nNilufar Karimova", uz: "Hurmatli janob yoki xonim,\nMehmonxonangizdagi xona haqida so'rash uchun yozyapman. Singlim va men 12-maydan 15-maygacha qolmoqchimiz. Ikkita alohida karavotli xona bormi, ayta olasizmi? Xona bir kechasiga qancha turadi va nonushta narxga kiradimi? Yana, xonada Wi-Fi bormi?\nIloji boricha tezroq xabar bersangiz. Sizdan javob kutaman.\nHurmat bilan,\nNilufar Karimova" },
        { t: 'check', ex: { k: 'choice', q: 'Why is Nilufar writing to the hotel?', opts: ['To ask about a room.', 'To cancel a room.', 'To complain about a room.', 'To say thank you.'], a: 0, why: "Xat: *I am writing to ask about a room at your hotel.*" } },
        { t: 'check', ex: { k: 'tf', q: "Nilufar would like to stay from the 12th to the 15th of May.", a: true, why: "Xat: *from the 12th to the 15th of May*." } },
      ],
    },
    {
      title: "O'qing: mehmonxonaning javobi",
      blocks: [
        { t: 'text', title: 'The hotel reply', voice: 'george', en: "Dear Ms Karimova,\nThank you for your email. We have a twin room available from the 12th to the 15th of May. The price is 450,000 so'm per night, and breakfast is included. There is free Wi-Fi in all our rooms. If you would like to book the room, please reply to this email.\nBest regards,\nBen Harris, Reception", uz: "Hurmatli Karimova xonim,\nXatingiz uchun rahmat. 12-maydan 15-maygacha ikkita karavotli bo'sh xonamiz bor. Narxi bir kechasiga 450 ming so'm, nonushta narxga kiradi. Barcha xonalarimizda bepul Wi-Fi bor. Xonani bron qilmoqchi bo'lsangiz, shu xatga javob yozing.\nHurmat bilan,\nBen Harris, qabulxona" },
        { t: 'check', ex: { k: 'choice', q: 'How much is the room?', opts: ["450,000 so'm per night.", "450,000 so'm for three nights.", "45,000 so'm per night.", 'The price is not in the email.'], a: 0, why: "Javob: *450,000 so'm per night*." } },
        { t: 'check', ex: { k: 'tf', q: "The hotel has no Wi-Fi in the rooms.", a: false, why: "Javob: *There is free Wi-Fi in all our rooms.*" } },
        { t: 'tip', tone: 'info', md: "Mehmonxona javobida odatda **uchta narsa** bor: xona **bormi**, **narxi** qancha, va bron qilish uchun **nima qilish kerak**. Shularni xatdan toping." },
      ],
    },
    {
      title: "Xat qismlari va foydali iboralar",
      blocks: [
        { t: 'p', md: "Rasmiy xat har doim bir xil tartibda yoziladi. Ismni bilmasangiz — **Dear Sir or Madam** va **Yours faithfully**." },
        { t: 'table', head: ['Qism', 'Ibora'], speak: [1], rows: [
          ['1. Salomlashish', 'Dear Sir or Madam,'],
          ['2. Maqsad', 'I am writing to ask about a room. / I would like to book a room.'],
          ['3. Sanalar', 'from the 12th to the 15th of May / for three nights'],
          ['4. Savollar', 'Could you tell me the price per night? Is breakfast included?'],
          ['5. Tezkor javob', 'Please let me know as soon as possible.'],
          ['6. Yakun', 'I look forward to hearing from you. Yours faithfully,'],
        ] },
        { t: 'compare', good: { title: "Muloyim", items: ['I would like to book a room.', 'Could you tell me the price?', 'Is breakfast included?'] }, bad: { title: "Qo'pol yoki xato", items: ['I want room.', 'Tell me the price!', 'Breakfast included?'] } },
        { t: 'tip', tone: 'warn', md: "**to** dan keyin ikki xil: *I am writing **to ask*** (maqsad, V1) va *I look forward **to hearing*** (**to** — predlog, -ing). Muloyim savolda darak tartib: *Could you tell me how much the room **is**?*" },
        { t: 'check', ex: { k: 'fill', q: 'I look forward to ___ from you. (hear)', a: ['hearing'], why: "**look forward to** + -ing." } },
      ],
    },
    {
      title: "Namuna xat va yozish rejasi",
      blocks: [
        { t: 'p', md: "Quyida bir kishilik xona uchun namuna xat. U taqlid qilish uchun yaxshi: har gap bitta vazifani bajaradi." },
        { t: 'text', title: 'Model email', voice: 'george', en: "Dear Sir or Madam,\nI would like to book a single room for three nights, from the 3rd to the 6th of October. Could you tell me the price per night? Is breakfast included? I will arrive at about six in the evening, so could you keep the room for me? Please confirm the booking by email. I look forward to hearing from you.\nYours faithfully,\nJasur Aliyev", uz: "Hurmatli janob yoki xonim,\n3-oktabrdan 6-oktabrgacha uch kechaga bir kishilik xona bron qilmoqchiman. Bir kechasining narxini ayta olasizmi? Nonushta narxga kiradimi? Kechqurun soat oltilarda yetib boraman, shuning uchun xonani men uchun saqlab tura olasizmi? Iltimos, bronni elektron pochta orqali tasdiqlang. Sizdan javob kutaman.\nHurmat bilan,\nJasur Aliyev" },
        { t: 'tip', tone: 'good', md: "**Reja (5–7 gap):** 1) nima uchun yozyapsiz → 2) qaysi sanalar, necha kecha → 3) xona turi → 4) narx va nonushta → 5) qachon yetib borasiz → 6) javob so'rash va xayrlashuv." },
        { t: 'check', ex: { k: 'choice', q: 'Which sentence is the best opening for a booking email?', opts: ['I would like to book a single room for three nights.', 'Give me a room.', 'Hi, room?', 'I am a single room.'], a: 0, why: "Muloyim va aniq: **I would like to book…**" } },
        { t: 'check', ex: { k: 'choice', q: 'Jasur ends his email with…', opts: ['Yours faithfully, Jasur Aliyev', 'See you, Jasur', 'Bye bye, Jasur', 'Thanks, hotel'], a: 0, why: "Ism noma'lum bo'lsa (*Dear Sir or Madam*) → **Yours faithfully**." } },
      ],
    },
  ],
  words: [
    { en: 'stay', uz: "qolmoq, turmoq (mehmonxonada)", ipa: 'steɪ', pos: 'verb', ex: 'We would like to stay for two nights.', exUz: "Biz ikki kecha qolmoqchimiz." },
    { en: 'arrive', uz: 'yetib kelmoq', ipa: 'əˈraɪv', pos: 'verb', ex: 'I will arrive at six in the evening.', exUz: "Kechqurun soat oltida yetib boraman." },
    { en: 'view', uz: 'manzara', ipa: 'vjuː', pos: 'noun', ex: 'Is there a room with a view of the park?', exUz: "Park manzarali xona bormi?" },
    { en: 'dates', uz: 'sanalar', ipa: 'deɪts', pos: 'noun', ex: 'What dates would you like?', exUz: "Qaysi sanalarni xohlaysiz?" },
    { en: 'facilities', uz: 'qulayliklar, xizmatlar', ipa: 'fəˈsɪl.ə.tiz', pos: 'noun', ex: 'What facilities does the hotel have?', exUz: "Mehmonxonada qanday qulayliklar bor?" },
    { en: 'car park', uz: 'avtoturargoh', ipa: 'ˈkɑː pɑːk', pos: 'noun', ex: 'Is there a car park near the hotel?', exUz: "Mehmonxona yaqinida avtoturargoh bormi?" },
  ],
  practice: [
    { k: 'choice', q: "Which question is NOT in Nilufar's email?", opts: ['Is there a car park?', 'Is breakfast included?', 'Is there Wi-Fi in the room?', 'How much is the room per night?'], a: 0, why: "Xatda avtoturargoh haqida savol yo'q." },
    { k: 'tf', q: "The hotel says it has no twin room available.", a: false, why: "Javob: *We have a twin room available…*" },
    { k: 'match', pairs: [['stay', 'qolmoq'], ['arrive', 'yetib kelmoq'], ['view', 'manzara'], ['dates', 'sanalar'], ['facilities', 'qulayliklar']] },
    { k: 'order', uz: "Ikki kechaga bir kishilik xona bron qilmoqchiman.", words: ['I', 'would', 'like', 'to', 'book', 'a', 'single', 'room', 'for', 'two', 'nights.'], extra: ['night'], alt: [["I'd", 'like', 'to', 'book', 'a', 'single', 'room', 'for', 'two', 'nights.']], why: "**I would like to book** + xona + **for two nights**." },
    { k: 'order', uz: "Bir kechasining narxini ayta olasizmi?", words: ['Could', 'you', 'tell', 'me', 'the', 'price', 'per', 'night?'], extra: ['is', 'much'], why: "**Could you tell me…?** — muloyim iltimos." },
    { k: 'translate', uz: "Iltimos, imkon qadar tezroq xabar bering.", a: ['Please let me know as soon as possible.', 'Please reply as soon as possible.', 'Please let me know as soon as you can.', 'Please reply as soon as you can.'], why: "**as soon as possible** — imkon qadar tezroq." },
    { k: 'translate', uz: "Nonushta narxga kiradimi?", a: ['Is breakfast included?', 'Is breakfast included in the price?'], why: "**Is breakfast included?**" },
    { k: 'fix', wrong: 'I look forward to hear from you.', a: ['I look forward to hearing from you.'], hint: "to — predlog", why: "**look forward to** + -ing." },
    { k: 'fix', wrong: 'Could you tell me how much is the room?', a: ['Could you tell me how much the room is?'], hint: "Muloyim savolda tartib", why: "Muloyim savolda darak tartib: *how much the room **is***." },
    { k: 'fill', q: 'Dear Sir or Madam, … Yours ___,', a: ['faithfully'], uz: "Ismni bilmasangiz, xat oxirida.", why: "*Dear Sir or Madam* → **Yours faithfully**." },
    { k: 'dictation', say: 'We would like to stay from the 12th to the 15th of May.', a: ['We would like to stay from the 12th to the 15th of May.', "We'd like to stay from the 12th to the 15th of May."], uz: "Biz 12-maydan 15-maygacha qolmoqchimiz." },
    { k: 'listen', say: 'I will arrive at about six in the evening.', opts: ['I will arrive at about six in the evening.', 'I will arrive at about seven in the evening.', 'I arrived at about six in the morning.', 'I will leave at about six in the evening.'], a: 0, why: "Eshitilgani: **arrive at about six in the evening**." },
  ],
  quiz: [
    { k: 'choice', q: 'Which opening is best when you do not know the name?', opts: ['Dear Sir or Madam,', 'Hi guys!', 'Hey hotel,', 'Dear friend,'], a: 0, why: "Ismni bilmasangiz — **Dear Sir or Madam**." },
    { k: 'order', uz: "Mehmonxona yaqinida avtoturargoh bormi?", words: ['Is', 'there', 'a', 'car', 'park', 'near', 'the', 'hotel?'], extra: ['are', 'in'], why: "Birlik — **Is there a…?**" },
    { k: 'translate', uz: "Men 12-iyundan 15-iyungacha qolmoqchiman.", a: ['I would like to stay from the 12th to the 15th of June.', "I'd like to stay from the 12th to the 15th of June.", 'I would like to stay from 12 to 15 June.', "I'd like to stay from 12 to 15 June.", 'I want to stay from the 12th to the 15th of June.'], why: "**from … to …** — dan ... gacha." },
    { k: 'fix', wrong: 'I am writing for ask about a room.', a: ['I am writing to ask about a room.', "I'm writing to ask about a room."], hint: 'Maqsad', why: "Maqsad: **to + V1**." },
    { k: 'fill', q: 'Please let me know as ___ as possible.', a: ['soon'], why: "**as soon as possible**." },
    { k: 'tf', q: "In an email to a hotel, *Hi guys!* is a good way to start.", a: false, why: "Rasmiy xatda **Dear Sir or Madam** deyiladi." },
    { k: 'match', pairs: [['stay', 'qolmoq'], ['arrive', 'yetib kelmoq'], ['view', 'manzara'], ['facilities', 'qulayliklar']] },
    { k: 'choice', q: 'In the model email, why does Jasur write: I will arrive at about six?', opts: ['So the hotel can keep the room for him.', 'To ask about breakfast.', 'To cancel the room.', 'To say thank you.'], a: 0, why: "Xat: *…so could you keep the room for me?*" },
  ],
  summary: [
    "Xat tartibi: **salomlashish → maqsad → sanalar → savollar → javob so'rash → xayrlashuv**.",
    "Muloyim: **I would like to book… / Could you tell me…? / Is breakfast included?**",
    "**Dear Sir or Madam** → **Yours faithfully**; ism ma'lum bo'lsa — **Best regards**.",
    "**I am writing to ask…** (maqsad) va **I look forward to hearing…** (to + -ing).",
    "Yangi so'zlar: **stay, arrive, view, dates, facilities, car park**.",
  ],
  homework: "Haqiqiy yoki xayoliy mehmonxona uchun 5–7 gapli xat yozing: sanalar, xona turi, narx, nonushta. Namuna xatning tuzilishiga amal qiling.",
};

export default lesson;
