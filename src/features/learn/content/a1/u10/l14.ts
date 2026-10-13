import type { Lesson } from '../../../types';

// Mini lesson (skill): listening and speaking with station/airport announcements and voicemail messages.
const lesson: Lesson = {
  id: 'u10-l14',
  title: 'Listening and speaking: announcements and messages',
  titleUz: "Tinglash va gapirish: e'lonlar va xabarlar",
  mini: true,
  kind: 'skill',
  goal: "Vokzal va aeroport **e'lonlarini** tushunasiz (platforma, vaqt, kechikish) va **ovozli xabar** qoldirasiz: *Hello, this is Anna. Please call me back.*",
  slides: [
    {
      title: "E'lonlarni tinglash",
      blocks: [
        { t: 'p', md: "E'lonlar tez va shovqinda aytiladi. Hamma so'zni tushunish shart emas — faqat **kalit ma'lumotlarni** tuting: **qaysi poyezd/reys**, **vaqt**, **platforma/gate**, **kechikish**." },
        { t: 'dialog', lines: [
          { who: 'Announcer', en: 'Attention, please. The train to Samarkand leaves from platform 5 at half past ten.', uz: "Diqqat, iltimos. Samarqand poyezdi soat o'n yarimda 5-platformadan jo'naydi." },
          { who: 'Announcer', en: 'Passengers for Bukhara, the train is delayed by fifteen minutes. We are sorry.', uz: "Buxoro yo'lovchilari, poyezd o'n besh daqiqaga kechikyapti. Uzr so'raymiz." },
          { who: 'Announcer', en: 'Flight KC 301 to Istanbul is now boarding at Gate 12. Please have your boarding pass ready.', uz: "Istanbulga KC 301 reysi uchun hozir 12-gate'da bortga chiqish boshlandi. Bortga chiqish talonini tayyor qiling." },
        ] },
        { t: 'check', ex: { k: 'choice', q: 'Which platform does the train to Samarkand leave from?', opts: ['Platform 5', 'Platform 12', 'Gate 12', 'Platform 3'], a: 0, why: "*...leaves from **platform 5** at half past ten.*" } },
        { t: 'check', ex: { k: 'choice', q: 'The train to Bukhara is ...', opts: ['delayed', 'on time', 'cancelled', 'early'], a: 0, why: "*delayed by fifteen minutes* — kechikyapti." } },
      ],
    },
    {
      title: 'Ovozli xabar (voicemail)',
      blocks: [
        { t: 'p', md: "Ovozli xabarda qisqa va aniq gapiring: **kim**, **nima uchun**, **nima qilish kerak**. Oxirida *Thank you* yoki *Bye*." },
        { t: 'dialog', lines: [
          { who: 'Voicemail', en: "Hello, this is Anna. I can't answer the phone now. Please leave a message after the beep.", uz: "Salom, men Annaman. Hozir telefonga javob bera olmayman. Signaldan keyin xabar qoldiring." },
          { who: 'Caller', en: "Hi Anna, it's Tom. My train is delayed, so I'll arrive at seven, not six.", uz: "Salom Anna, men Tom. Poyezdim kechikyapti, shuning uchun oltida emas, yettida yetib boraman." },
          { who: 'Caller', en: 'Please call me back. My number is 90 123 45 67. Thank you. Bye!', uz: "Menga qo'ng'iroq qiling. Raqamim 90 123 45 67. Rahmat. Xayr!" },
        ] },
        { t: 'check', ex: { k: 'fill', q: "Tom's train is ___, so he will arrive at seven.", a: ['delayed'], uz: "Tomning poyezdi kechikyapti.", why: "Xabarda: *My train is **delayed**.*" } },
        { t: 'tip', tone: 'info', md: "Xabar shabloni: **Hello, this is… / It's… → sabab → Please call me back. → Thank you. Bye!**" },
      ],
    },
    {
      title: "Ehtiyot bo'ling: tez-tez uchraydigan xatolar",
      blocks: [
        { t: 'compare', good: { title: "To'g'ri", items: ["Hello, this is Tom.", 'Please call me back.', 'The train leaves at half past ten.'] }, bad: { title: "Noto'g'ri", items: ['Hello, I am Tom (telefonda).', 'Please call back me.', 'The train leave at half past ten.'] } },
        { t: 'p', md: "Telefonda o'zingizni tanishtirish: **This is Tom.** / **It's Tom.** (*I am Tom* emas). **call me back** — so'z tartibi: *me* o'rtada." },
        { t: 'check', ex: { k: 'choice', q: "Telefonda o'zingizni qanday tanishtirasiz?", opts: ["Hello, this is Tom.", 'Hello, I am Tom here.', 'Hello, Tom is me.', 'Hello, my name Tom.'], a: 0, why: "Telefonda: **This is…** / **It's…**" } },
      ],
    },
  ],
  words: [
    { en: 'announcement', uz: "e'lon (ovozli)", ipa: 'əˈnaʊns.mənt', pos: 'noun', ex: 'Listen to the announcement carefully.', exUz: "E'lonni diqqat bilan tinglang." },
    { en: 'passenger', uz: "yo'lovchi", ipa: 'ˈpæs.ɪn.dʒər', pos: 'noun', ex: 'All passengers must wait here.', exUz: "Barcha yo'lovchilar shu yerda kutishi kerak." },
    { en: 'attention', uz: 'diqqat', ipa: 'əˈten.ʃən', pos: 'noun', ex: 'Attention, please! The gate is closing.', exUz: "Diqqat, iltimos! Gate yopilyapti." },
    { en: 'voicemail', uz: 'ovozli xabar', ipa: 'ˈvɔɪs.meɪl', pos: 'noun', ex: 'I left a voicemail for you.', exUz: 'Sizga ovozli xabar qoldirdim.' },
    { en: 'leave a message', uz: 'xabar qoldirmoq', ipa: 'liːv ə ˈmes.ɪdʒ', pos: 'phrase', ex: 'Please leave a message after the beep.', exUz: 'Signaldan keyin xabar qoldiring.' },
    { en: 'call back', uz: "qayta qo'ng'iroq qilmoq", ipa: 'kɔːl bæk', pos: 'phrasal verb', ex: 'Please call me back at six.', exUz: "Soat oltida menga qayta qo'ng'iroq qiling." },
  ],
  practice: [
    { k: 'listen', say: 'The train leaves from platform four at nine fifteen.', opts: ['The train leaves from platform four at nine fifteen.', 'The train leaves from platform five at nine fifteen.', 'The train leaves from platform four at nine fifty.', 'The train arrives at platform four at nine fifteen.'], a: 0 },
    { k: 'listen', say: 'Your flight is delayed by one hour.', opts: ['Your flight is delayed by one hour.', 'Your flight is on time.', 'Your flight is delayed by two hours.', 'Your flight leaves at one.'], a: 0 },
    { k: 'dictation', say: 'Please call me back.', a: ['Please call me back.', 'Please call me back'] },
    { k: 'dictation', say: 'Attention, please. The flight is boarding.', a: ['Attention, please. The flight is boarding.', 'Attention please. The flight is boarding.'] },
    { k: 'choice', q: 'Announcement: "The train to Khiva is delayed." What should you do?', opts: ['Wait and listen for news', 'Run to the platform now', 'Buy a new ticket', 'Go home'], a: 0, why: "Poyezd kechikyapti — yangi e'lonni kuting." },
    { k: 'match', pairs: [['announcement', "e'lon"], ['passenger', "yo'lovchi"], ['voicemail', 'ovozli xabar'], ['attention', 'diqqat'], ['call back', "qayta qo'ng'iroq qilmoq"]] },
    { k: 'order', uz: "Iltimos, menga qayta qo'ng'iroq qiling.", words: ['Please', 'call', 'me', 'back'], extra: ['I', 'calls'] },
    { k: 'translate', uz: "Salom, men Tomman. Iltimos, qayta qo'ng'iroq qiling.", a: ["Hello, this is Tom. Please call me back.", "Hello, it's Tom. Please call me back.", "Hi, this is Tom. Please call me back."], why: "Telefonda: **This is…** / **It's…**" },
    { k: 'fix', wrong: 'Please call back me.', a: ['Please call me back.'], why: "**call me back** — *me* o'rtada." },
    { k: 'fill', q: 'Please ___ a message after the beep.', a: ['leave'], uz: "Signaldan keyin xabar qoldiring.", why: "**leave a message**." },
    { k: 'speak', say: 'Hello, this is Anna. Please call me back.', uz: "Salom, men Annaman. Iltimos, qayta qo'ng'iroq qiling." },
    { k: 'speak', say: "My train is delayed. I'll arrive at seven.", uz: "Poyezdim kechikyapti. Yettida yetib boraman." },
    { k: 'speak', say: 'Attention, please. The train leaves from platform three.', uz: "Diqqat, iltimos. Poyezd 3-platformadan jo'naydi." },
  ],
  quiz: [
    { k: 'listen', say: 'Passengers for Samarkand, please go to platform two.', opts: ['Passengers for Samarkand, please go to platform two.', 'Passengers for Bukhara, please go to platform two.', 'Passengers for Samarkand, please go to platform three.', 'Passengers for Samarkand, please wait at the gate.'], a: 0 },
    { k: 'dictation', say: 'Please leave a message.', a: ['Please leave a message.'] },
    { k: 'choice', q: 'Which sentence is correct?', opts: ['Please leave a message after the beep.', 'Please a message leave after the beep.', 'Please left message after the beep.', 'Please leaves a message after the beep.'], a: 0 },
    { k: 'fill', q: 'Hello, ___ is Tom.', a: ['this'], why: "Telefonda: **this is** Tom." },
    { k: 'translate', uz: "Poyezdim kechikyapti.", a: ['My train is delayed.', 'My train is late.'] },
    { k: 'tf', q: "*Attention, please* — e'lon boshlanishida aytiladi.", a: true },
    { k: 'match', pairs: [['passenger', "yo'lovchi"], ['announcement', "e'lon"], ['voicemail', 'ovozli xabar'], ['leave a message', 'xabar qoldirmoq']] },
    { k: 'fix', wrong: 'The train leave from platform 4.', a: ['The train leaves from platform 4.'], why: "*The train* = it → **leaves**." },
  ],
  summary: [
    "E'londa kalit ma'lumotlarni tuting: **reys/poyezd, vaqt, platforma yoki gate, kechikish**.",
    "Telefonda: **Hello, this is Anna.** Xabar: sabab + **Please call me back.** + **Thank you. Bye!**",
    "**call me back** — *me* o'rtada. **Please leave a message** — signaldan keyin.",
    "Yangi so'zlar: **announcement, passenger, attention, voicemail, leave a message, call back**.",
  ],
  homework: "Telefoningizda 20 soniyalik ovozli xabar yozing: kimligingiz, kechikish sababi (*My train is delayed*) va *Please call me back*. Keyin qayta eshiting.",
};

export default lesson;
