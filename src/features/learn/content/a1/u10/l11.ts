import type { Lesson } from '../../../types';

// Mini lesson (review): whole unit u10. Recycles weather, travel, hotel, health, will/going to, have to, must, messages + older words (bag, money, tea, friend).
const lesson: Lesson = {
  id: 'u10-l11',
  title: 'Travel and health: final review',
  titleUz: "Sayohat va sog'liq: yakuniy takror",
  mini: true,
  goal: "Birlikdagi hamma narsani takrorlaysiz: **ob-havo, vokzal va aeroport, mehmonxona, will / going to, salomatlik maslahati, have to, must / mustn't** va qisqa xabar yozish.",
  slides: [
    {
      title: 'Bir sayohat hikoyasi',
      blocks: [
        { t: 'p', md: "Anna va Tom **ertaga** sayohatga ketishmoqda. Dialogda birlikdagi deyarli barcha mavzu uchraydi. Qaysilarini topa olasiz?" },
        { t: 'dialog', lines: [
          { who: 'Tom', en: "What's the weather forecast for tomorrow?", uz: 'Ertaga ob-havo qanday bo\'lar ekan?' },
          { who: 'Anna', en: "It's going to rain in the morning, so I'll take my umbrella.", uz: "Ertalab yomg'ir yog'adi, shuning uchun soyabonimni olaman." },
          { who: 'Tom', en: 'Our flight leaves at nine. We have to check in at seven.', uz: "Reysimiz to'qqizda uchadi. Yettida ro'yxatdan o'tishimiz shart." },
          { who: 'Anna', en: "You must have your boarding pass and passport. And you mustn't forget your bag!", uz: "Bortga chiqish talonin va pasportingiz bo'lishi shart. Sumkangizni unutmang!" },
          { who: 'Tom', en: "I've got a sore throat. I think I should drink hot tea.", uz: "Tomog'im og'riyapti. Issiq choy ichsam yaxshi bo'ladi." },
          { who: 'Anna', en: 'Yes, and you shouldn\'t talk too much. I\'ll call the hotel: Could we have a double room?', uz: "Ha, ko'p gapirmang. Men mehmonxonaga qo'ng'iroq qilaman: ikki kishilik xona bo'ladimi?" },
          { who: 'Tom', en: "Good idea. I'll send a message to our friend, too.", uz: "Yaxshi fikr. Men do'stimizga ham xabar yozaman." },
        ] },
        { t: 'check', ex: { k: 'choice', q: 'Plan bor, bulutlar ko\'rinyapti: "It ___ rain."', opts: ['is going to', 'will to', 'going', 'is will'], a: 0, why: "Hozirgi belgi asosida bashorat — **be going to**." } },
      ],
    },
    {
      title: 'Tez takror: asosiy qoidalar',
      blocks: [
        { t: 'table', head: ['Mavzu', 'Misol'], speak: [1], rows: [
          ['will (qaror, va\'da)', "I'll carry your bag."],
          ['going to (reja, belgi)', 'We are going to visit Samarkand.'],
          ['should / shouldn\'t (maslahat)', "You should rest. You shouldn't work."],
          ['have to / don\'t have to', "I have to check in. You don't have to wait."],
          ['must / mustn\'t', "You must wear a seat belt. You mustn't smoke."],
          ['Could I…? (muloyim so\'rov)', 'Could I have the key, please?'],
        ] },
        { t: 'tip', tone: 'warn', md: "**don't have to** = shart emas (ixtiyoriy). **mustn't** = taqiqlangan! *You don't have to come.* ≠ *You mustn't come.*" },
        { t: 'check', ex: { k: 'choice', q: 'Sign: "Smoking!" — "You ___ smoke here."', opts: ["mustn't", "don't have to", "shouldn't to", 'not must'], a: 0, why: "Taqiq belgisi — **mustn't**." } },
      ],
    },
    {
      title: 'Xabar yozish',
      blocks: [
        { t: 'p', md: "Qisqa xabarni **Dear…** bilan boshlab, **Best wishes** bilan tugatasiz. Quyida namuna:" },
        { t: 'examples', items: [
          { en: 'Dear Sara, I am going to arrive on Friday. Could you meet me at the station? Best wishes, Anna', uz: "Aziz Sara, men juma kuni yetib kelaman. Meni vokzalda kutib olasizmi? Eng yaxshi tilaklar bilan, Anna" },
          { en: 'Dear Mr Green, I have a fever. I can\'t come today. Kind regards, Tom', uz: "Hurmatli janob Grin, haroratim bor. Bugun kela olmayman. Hurmat bilan, Tom" },
        ] },
        { t: 'tip', tone: 'good', md: "Xabarda: **sabab** (*I have a fever*), **reja** (*I'm going to…*) va **iltimos** (*Could you…?*) aytish yetarli." },
        { t: 'check', ex: { k: 'fill', q: 'Dear Sara, ___ forward to seeing you.', a: ['I look', 'I am looking', "I'm looking"], uz: "Aziz Sara, sizni ko'rishni intiqlik bilan kutaman.", why: "**look forward to** — intiqlik bilan kutmoq." } },
      ],
    },
  ],
  words: [
    { en: 'journey', uz: 'safar, yo\'l', ipa: 'ˈdʒɜː.ni', pos: 'noun', ex: 'The journey takes three hours.', exUz: "Safar uch soat davom etadi." },
    { en: 'souvenir', uz: 'esdalik sovg\'a', ipa: 'ˌsuː.vəˈnɪər', pos: 'noun', ex: 'I buy a souvenir for my friend.', exUz: "Men do'stimga esdalik sovg'a olaman." },
    { en: 'safe', uz: 'xavfsiz', ipa: 'seɪf', pos: 'adjective', ex: 'The hotel is safe and quiet.', exUz: 'Mehmonxona xavfsiz va tinch.' },
    { en: 'hope', uz: 'umid qilmoq', ipa: 'həʊp', pos: 'verb', ex: 'I hope it is sunny tomorrow.', exUz: 'Ertaga quyoshli bo\'ladi deb umid qilaman.' },
  ],
  practice: [
    { k: 'choice', q: "It's cold and I have no gloves. — \"I ___ buy some.\" (hozir qaror)", opts: ["'ll", 'am going', 'going to', 'to'], a: 0, why: "Shu zahoti qaror — **will**." },
    { k: 'fill', q: 'We ___ to visit Bukhara next week. (reja)', a: ['are going'], uz: "Biz kelasi hafta Buxoroga borishni rejalashtirganmiz.", why: "Reja — **are going to**." },
    { k: 'order', uz: "Siz bu yerda chekmasligingiz kerak.", words: ['You', "mustn't", 'smoke', 'here'], extra: ["don't", 'smokes'] },
    { k: 'translate', uz: "Men soat yettida ro'yxatdan o'tishim shart.", a: ['I have to check in at seven.', "I have to check in at 7."], why: "Majburiyat — **have to**." },
    { k: 'match', pairs: [['forecast', 'ob-havo prognozi'], ['gate', 'chiqish eshigi'], ['reservation', 'bron'], ['fever', 'isitma'], ['journey', 'safar']] },
    { k: 'tf', q: "*You don't have to come* va *You mustn't come* — ma'nosi bir xil.", a: false, why: "**don't have to** — shart emas; **mustn't** — taqiqlangan." },
    { k: 'listen', say: 'You should rest at home.', opts: ['You should rest at home.', 'You must rest at home.', 'You should stay at home.', 'You shouldn\'t rest at home.'], a: 0 },
    { k: 'dictation', say: 'Could I have a double room?', a: ['Could I have a double room?'] },
    { k: 'fix', wrong: 'You must to wear a seat belt.', a: ['You must wear a seat belt.'], why: "**must** dan keyin *to* yo'q." },
    { k: 'fill', q: 'It is Sunday. I ___ have to work. (shart emas)', a: ["don't", 'do not'], uz: "Yakshanba. Ishlashim shart emas.", why: "**don't have to** = shart emas." },
    { k: 'speak', say: 'Could you call a taxi, please?', uz: 'Taksi chaqirib bera olasizmi, iltimos?' },
  ],
  quiz: [
    { k: 'choice', q: 'Look at the sky! It ___ snow.', opts: ['is going to', 'will to', 'mustn\'t', 'have to'], a: 0 },
    { k: 'fill', q: 'You have a cough. You ___ drink hot tea. (maslahat)', a: ['should'] },
    { k: 'order', uz: "Bir kechasi qancha turadi?", words: ['How', 'much', 'is', 'it', 'per', 'night'], extra: ['many', 'are'] },
    { k: 'translate', uz: "Men sizga yordam beraman. (va'da)", a: ["I'll help you.", 'I will help you.'] },
    { k: 'tf', q: "*Dear Anna, … Best wishes* — norasmiy xatning tuzilishi.", a: true },
    { k: 'fix', wrong: 'She have to go to the doctor.', a: ['She has to go to the doctor.'], why: "**she** bilan — **has to**." },
    { k: 'match', pairs: [['flight', 'reys'], ['luggage', 'yuk'], ['medicine', 'dori'], ['safe', 'xavfsiz']] },
    { k: 'choice', q: 'Could I pay by card? — ...', opts: ['Yes, of course.', 'Yes, I could pay.', 'I must card.', 'Yes, you going.'], a: 0 },
  ],
  summary: [
    "**will** — shu zahotiy qaror va va'da; **going to** — reja va belgi asosidagi bashorat.",
    "**should / shouldn't** — maslahat; **have to / don't have to** — majburiyat / shart emas.",
    "**must** — shart, **mustn't** — taqiqlangan; ularidan keyin *to* qo'yilmaydi.",
    "Mehmonxona va xabar: **Could I…? Could you…?**, **Dear… / Best wishes**.",
  ],
  homework: "Kelasi hafta rejangiz haqida 5 ta gap yozing: ob-havo, safar, maslahat va qoida (*I'm going to…, I have to…, You mustn't…*).",
};

export default lesson;
