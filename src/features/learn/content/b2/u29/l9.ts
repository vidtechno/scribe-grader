import type { Lesson } from '../../../types';

// Mini lesson (situation): at the doctor's. Present perfect + for/since, quantifiers (a few, hardly any, little), advice forms.
const lesson: Lesson = {
  id: 'u29-l9',
  title: "At the doctor's",
  titleUz: 'Shifokorda: simptomlarni tasvirlash va maslahat olish',
  mini: true,
  kind: 'situation',
  goal: "Shifokor qabulida **simptomlarni aniq tasvirlaysiz** (*I've had a sore throat for three days*), **davomiylikni** for / since bilan aytasiz, **hardly any / a few / very little** bilan miqdorni bildirasiz va shifokorning maslahatini (*You should… / I'd recommend… / You'd better…*) tushunib, savol bera olasiz.",
  slides: [
    {
      title: "Qabulda: nima bezovta qilyapti?",
      blocks: [
        { t: 'p', md: "Chet elda shifokorga borganingizda ikkita narsa muhim: **nima bezovta qilayotganini** va **qancha vaqtdan beri** ekanini aniq aytish. Shifokor odatda shunday so'raydi: **What seems to be the problem?** yoki **How long have you had it?**" },
        { t: 'table', head: ['Maqsad', 'Ibora'], speak: [1], rows: [
          ['Asosiy shikoyat', "I've had a sore throat for three days."],
          ['Og\'riq joyi', "It hurts when I swallow."],
          ['Harorat', "I've had a slight temperature since Monday."],
          ['Holsizlik', "I feel dizzy when I stand up."],
          ['Miqdor', "I've had hardly any sleep this week."],
          ['Dori haqida', "I've been taking painkillers, but they haven't helped."],
        ] },
        { t: 'tip', tone: 'info', md: "Simptom hozirgacha davom etayotgani uchun **Present Perfect** (*I've had*) yoki **Present Perfect Continuous** (*I've been coughing*) ishlatiladi. O'zbekcha *uch kundan beri tomog'im og'riyapti* deb o'ylab, **I have a sore throat for three days** deyish xato." },
        { t: 'check', ex: { k: 'choice', q: "Doctor: How long have you had the cough? — Patient: ___", opts: ["I've had it for about a week.", "I have it since a week.", "I had it for about a week now.", "I'm having it about a week."], a: 0, why: "Hozirgacha davom etayotgan holat → **have had + for + muddat**." } },
      ],
    },
    {
      title: "For, since va miqdor so'zlari",
      blocks: [
        { t: 'table', head: ['for + muddat', 'since + boshlanish nuqtasi'], speak: [0, 1], rows: [
          ['for three days', 'since Monday'],
          ['for a couple of weeks', 'since last winter'],
          ['for ages', 'since I got back from Dubai'],
        ] },
        { t: 'examples', items: [
          { en: "I've felt tired since the weekend.", uz: "Dam olish kunlaridan beri o'zimni charchagan his qilyapman.", note: "**since** + boshlanish vaqti." },
          { en: "I've been coughing for a few days.", uz: "Bir necha kundan beri yo'talyapman.", note: "**a few** + sanaladigan ko'plik: *bir nechta (yetarli)*." },
          { en: "I've had hardly any appetite.", uz: "Ishtaham deyarli yo'q.", note: "**hardly any** = deyarli yo'q (sanalmaydigan va ko'plik bilan)." },
          { en: "I've got very little energy.", uz: "Quvvatim juda kam.", note: "**little** (sanalmaydigan) — kam, ijobiy emas." },
          { en: "Few of my colleagues have been ill this winter.", uz: "Hamkasblarimdan juda kamchiligi shu qishda kasal bo'ldi.", note: "**few** — kam (ohang salbiy, *deyarli hech kim*)." },
        ] },
        { t: 'tip', tone: 'warn', md: "**a few / a little** — *bir oz bor* (ijobiy), **few / little** — *deyarli yo'q* (salbiy). *I've got a little energy* = quvvat bor; *I've got little energy* = quvvat yo'q. Sanaladigan otga **few**, sanalmaydiganga **little** ishlatiladi: *few tablets, little sleep*." },
        { t: 'check', ex: { k: 'fill', q: "I've had a headache ___ yesterday morning.", a: ['since'], uz: "Kecha ertalabdan beri boshim og'riyapti.", why: "Boshlanish nuqtasi (*yesterday morning*) → **since**." } },
        { t: 'check', ex: { k: 'choice', q: "I haven't slept well. I've had ___ sleep all week.", opts: ['very little', 'very few', 'a few', 'many'], a: 0, why: "**sleep** sanalmaydi → **little**. *Few* va *a few* faqat sanaladigan otlar bilan." } },
      ],
    },
    {
      title: "Shifokorning maslahati",
      blocks: [
        { t: 'p', md: "Shifokor maslahat berganda bir necha shakl ishlatadi. Hammasidan keyin **to'siz fe'l** (bare infinitive) keladi, *to* yo'q." },
        { t: 'table', head: ['Ibora', "Kuchi", 'Misol'], speak: [2], rows: [
          ["You should…", "oddiy maslahat", "You should drink plenty of water."],
          ["I'd recommend…", "rasmiy, ishonchli tavsiya", "I'd recommend resting for a few days."],
          ["You'd better…", "kuchli, ogohlantiruvchi", "You'd better not go to work tomorrow."],
          ["Try to…", "yumshoq tavsiya", "Try to avoid cold drinks."],
          ["Make sure you…", "muhim eslatma", "Make sure you finish the course of tablets."],
        ] },
        { t: 'examples', items: [
          { en: "I'd recommend that you stay at home until the fever goes.", uz: "Isitmangiz tushguncha uyda qolishni tavsiya qilaman.", note: "**recommend + -ing** yoki **recommend that you + fe'l**." },
          { en: "Put the ointment on twice a day and don't take more than the recommended dose of anything.", uz: "Malhamni kuniga ikki marta suring va hech qanday dorini tavsiya etilgan dozadan ko'p ichmang.", note: "Dori yo'riqnomasi: buyruq shakli." },
          { en: "Is it OK to take this with other medicine?", uz: "Buni boshqa dori bilan birga ichsa bo'ladimi?", note: "Shifokordan so'rash uchun foydali savol." },
        ] },
        { t: 'check', ex: { k: 'choice', q: "Qaysi gap to'g'ri?", opts: ["You'd better rest today.", "You'd better to rest today.", "You'd better resting today.", "You had better rests today."], a: 0, why: "**had better** + to'siz fe'l: *You'd better rest*." } },
      ],
    },
    {
      title: "Tipik xatolar (o'zbek tilidan)",
      blocks: [
        { t: 'p', md: "O'zbek tilida *-dan beri, -dan buyon* so'zlari hozirgi zamon fe'li bilan keladi (*uch kundan beri yo'talaman*). Inglizchada esa shu ma'no uchun **Present Perfect** kerak. Shuningdek *kam* so'zi uch xil ingliz so'zi bo'ladi: few, little, hardly any." },
        { t: 'compare',
          good: { title: "To'g'ri", items: ["I've had a cough since Monday.", "I've been taking these tablets for a week.", "You should stay in bed.", "I've got very little energy."] },
          bad: { title: 'Xato', items: ["I have a cough since Monday.", "I'm taking these tablets since a week.", "You should to stay in bed.", "I've got a few energy."] } },
        { t: 'check', ex: { k: 'fix', wrong: "I have a sore throat since Tuesday.", a: ["I've had a sore throat since Tuesday.", "I have had a sore throat since Tuesday."], why: "**since** bilan hozirgacha davom etgan holat → **Present Perfect**." } },
        { t: 'check', ex: { k: 'fix', wrong: "I'm taking these tablets since a week.", a: ["I've been taking these tablets for a week.", "I have been taking these tablets for a week."], why: "**for** + muddat (*a week*) va Present Perfect Continuous." } },
        { t: 'check', ex: { k: 'fix', wrong: "You should to stay in bed.", a: ["You should stay in bed."], why: "Modal fe'ldan keyin **to** qo'yilmaydi." } },
        { t: 'check', ex: { k: 'fix', wrong: "I've got a few energy.", a: ["I've got very little energy.", "I've got little energy.", "I've got hardly any energy.", "I have very little energy.", "I have hardly any energy."], why: "**energy** sanalmaydi → *little / hardly any*. **a few** faqat sanaladigan ko'plik." } },
      ],
    },
    {
      title: "Dialog: qabulda",
      blocks: [
        { t: 'dialog', lines: [
          { who: 'Nilufar', en: "Good morning, doctor. I've had a sore throat for three days, and it's getting worse.", uz: "Xayrli tong, doktor. Uch kundan beri tomog'im og'riyapti va yomonlashyapti." },
          { who: 'Doctor', en: "I see. Have you had a temperature?", uz: "Tushunarli. Isitmangiz bo'ldimi?" },
          { who: 'Nilufar', en: "A slight one since Sunday. And I've had hardly any appetite, so I feel rather dizzy.", uz: "Yakshanbadan beri biroz. Ishtaham deyarli yo'q, shuning uchun boshim aylanyapti." },
          { who: 'Doctor', en: "Let me have a look. Yes, it looks like a throat infection, but a mild one. I won't prescribe antibiotics, because most of these clear up by themselves.", uz: "Qaraylik-chi. Ha, bu tomoq infeksiyasiga o'xshaydi, lekin yengil. Antibiotik yozmayman, chunki bunaqalarning ko'pi o'zi o'tib ketadi." },
          { who: 'Nilufar', en: "So what should I do?", uz: "Unda nima qilishim kerak?" },
          { who: 'Doctor', en: "I'd recommend resting for a few days and drinking plenty of warm drinks. You'd better not go to work until the temperature goes.", uz: "Bir necha kun dam olishni va ko'p iliq ichimlik ichishni tavsiya qilaman. Isitma tushguncha ishga bormagan ma'qul." },
          { who: 'Nilufar', en: "Is it all right to take painkillers?", uz: "Og'riq qoldiruvchi ichsam bo'ladimi?" },
          { who: 'Doctor', en: "Yes, but don't take more than the dose on the packet. If it hasn't improved in a week, come back and see me.", uz: "Ha, lekin qadoqdagi dozadan ko'p ichmang. Bir haftada yaxshilanmasa, qaytib keling." },
        ] },
        { t: 'check', ex: { k: 'tf', q: 'The doctor prescribes antibiotics.', a: false, why: "Doctor: *I won't prescribe antibiotics.*" } },
        { t: 'check', ex: { k: 'choice', q: "What does the doctor tell her to do?", opts: ["Rest and drink warm drinks", "Go to work as usual", "Stop all medicine", "Come back tomorrow"], a: 0, why: "*I'd recommend resting for a few days and drinking plenty of warm drinks.*" } },
      ],
    },
  ],
  words: [
    { en: 'prescribe', uz: "(dori) yozib bermoq", ipa: 'prɪˈskraɪb', pos: 'verb', ex: 'The doctor prescribed a spray for my throat.', exUz: "Shifokor tomog'im uchun sprey yozib berdi." },
    { en: 'dizzy', uz: "boshi aylangan", ipa: 'ˈdɪzi', pos: 'adj', ex: 'I feel dizzy when I get up too quickly.', exUz: "Tez tursam, boshim aylanadi." },
    { en: 'dose', uz: "doza, bir martalik miqdor", ipa: 'dəʊs', pos: 'noun', ex: 'Never take more than the recommended dose.', exUz: "Hech qachon tavsiya etilgan dozadan ko'p ichmang." },
    { en: 'infection', uz: "infeksiya, yuqumli kasallik", ipa: 'ɪnˈfekʃn', pos: 'noun', ex: 'He has a chest infection and needs rest.', exUz: "Uning ko'krak infeksiyasi bor, dam olishi kerak." },
    { en: 'ointment', uz: "malham", ipa: 'ˈɔɪntmənt', pos: 'noun', ex: 'Put a little ointment on the rash twice a day.', exUz: "Toshmaga kuniga ikki marta bir oz malham suring." },
    { en: 'pharmacist', uz: "dorixonachi, farmatsevt", ipa: 'ˈfɑːməsɪst', pos: 'noun', ex: 'Ask the pharmacist if you can take it with other medicine.', exUz: "Boshqa dori bilan ichsa bo'ladimi, dorixonachidan so'rang." },
  ],
  practice: [
    { k: 'match', pairs: [['prescribe', "dori yozib bermoq"], ['dizzy', 'boshi aylangan'], ['dose', 'bir martalik miqdor'], ['infection', 'yuqumli kasallik'], ['ointment', 'malham']] },
    { k: 'choice', q: "I ___ a runny nose since Friday.", opts: ["'ve had", "have", "had", "'m having"], a: 0, why: "**since Friday** — hozirgacha davom etmoqda → **have had**." },
    { k: 'fill', q: "I've been feeling tired ___ about two weeks.", a: ['for'], uz: "Taxminan ikki haftadan beri o'zimni charchagan his qilyapman.", why: "Muddat (*two weeks*) → **for**." },
    { k: 'fill', q: "I've slept very ___ this week, so I feel dizzy.", a: ['little'], hint: 'kam (sanalmaydigan ot)', uz: "Bu hafta juda oz uxladim, shuning uchun boshim aylanyapti.", why: "*sleep* sanalmaydi; **very little**." },
    { k: 'listen', say: "I'd recommend resting for a few days.", opts: ["I'd recommend resting for a few days.", "I'd recommend to rest for a few days.", "I recommended resting for few days.", "I'd recommend rest for a few day."], a: 0 },
    { k: 'choice', q: "The pharmacist said: \"Don't take more than the ___ on the packet.\"", opts: ['dose', 'ointment', 'infection', 'symptom'], a: 0, why: "Qadoqda yozilgan miqdor — **dose**." },
    { k: 'order', uz: "Isitma tushguncha uyda qolganingiz ma'qul.", words: ["You'd", 'better', 'stay', 'at', 'home', 'until', 'the', 'fever', 'goes.'], extra: ['to', 'staying'], why: "**You'd better** + to'siz fe'l." },
    { k: 'order', uz: "Uch kundan beri tomog'im og'riyapti.", words: ["I've", 'had', 'a', 'sore', 'throat', 'for', 'three', 'days.'], extra: ['since', 'have'], why: "**have had + for + muddat**." },
    { k: 'fix', wrong: "I have a bad cough since Monday.", a: ["I've had a bad cough since Monday.", "I have had a bad cough since Monday."], why: "**since** bilan Present Perfect kerak." },
    { k: 'fix', wrong: "You should to see a pharmacist.", a: ["You should see a pharmacist."], why: "**should** dan keyin **to** yo'q." },
    { k: 'translate', uz: "Bir haftadan beri bu dorini ichyapman.", a: ["I've been taking this medicine for a week.", "I have been taking this medicine for a week.", "I've been taking these tablets for a week.", "I have been taking these tablets for a week."], why: "**have been taking + for a week**." },
    { k: 'translate', uz: "Ishtaham deyarli yo'q.", a: ["I've got hardly any appetite.", "I have hardly any appetite.", "I've had hardly any appetite.", "I have had hardly any appetite."], why: "**hardly any** + sanalmaydigan ot." },
    { k: 'tf', q: "*I've got a few energy.* — Gap to'g'ri.", a: false, why: "**energy** sanalmaydi: *very little energy* yoki *hardly any energy*." },
    { k: 'dictation', say: 'How long have you had the symptoms?', a: ['How long have you had the symptoms?'], uz: "Simptomlar qancha vaqtdan beri bor?" },
    { k: 'speak', say: "I've had a sore throat for three days.", uz: "Uch kundan beri tomog'im og'riyapti." },
  ],
  quiz: [
    { k: 'choice', q: "I've felt dizzy ___ I got up this morning.", opts: ['since', 'for', 'during', 'from'], a: 0, why: "Keyin gap (*I got up*) → boshlanish nuqtasi → **since**." },
    { k: 'choice', q: "Doctor: \"___ drink plenty of water.\" Qaysi biri to'g'ri?", opts: ["You should", "You should to", "You'd better to", "You must to"], a: 0, why: "Modal va **had better** dan keyin to'siz fe'l; *to* qo'yilmaydi." },
    { k: 'choice', q: "Qaysi gap grammatik to'g'ri?", opts: ["Few of my colleagues have been ill.", "A little of my colleagues have been ill.", "Hardly any of my colleagues has be ill.", "Little of my colleagues have been ill."], a: 0, why: "*colleagues* sanaladi → **few**." },
    { k: 'fill', q: "I've been taking the tablets ___ five days.", a: ['for'], uz: "Besh kundan beri tabletka ichyapman.", why: "Muddat → **for**." },
    { k: 'fill', q: "The doctor decided to ___ a spray for her throat.", a: ['prescribe'], hint: 'dori yozib bermoq', why: "**prescribe** — shifokor retsept bilan dori yozadi." },
    { k: 'fix', wrong: "I'm ill since three days.", a: ["I've been ill for three days.", "I have been ill for three days."], why: "**for three days** + Present Perfect." },
    { k: 'order', uz: "Bir hafta ichida yaxshilanmasa, qaytib keling.", words: ['If', 'it', "hasn't", 'improved', 'in', 'a', 'week,', 'come', 'back.'], extra: ['will', 'comes'], why: "**If + Present Perfect, buyruq**." },
    { k: 'listen', say: "You'd better not go to work tomorrow.", opts: ["You'd better not go to work tomorrow.", "You'd better not to go to work tomorrow.", "You'd not better go to work tomorrow.", "You better not went to work tomorrow."], a: 0 },
    { k: 'tf', q: "*I've had little sleep* ma'nosi: uxladim, yetarli bo'ldi.", a: false, why: "**little** salbiy ma'no beradi: deyarli uxlamadim. *A little* esa ijobiy." },
  ],
  summary: [
    "Simptom hozirgacha davom etayotgan bo'lsa: **Present Perfect** + **for** (muddat) yoki **since** (boshlanish): *I've had a cough for a week / since Monday*.",
    "Miqdor: **a few / few** (sanaladigan), **a little / little** (sanalmaydigan), **hardly any** = deyarli yo'q. *A few, a little* ijobiy; *few, little* salbiy.",
    "Maslahat: **You should… / I'd recommend… / You'd better…** + to'siz fe'l; *to* yo'q.",
    "Xatolar: *I have a cough since Monday* → *I've had a cough since Monday*; *should to rest* → *should rest*; *a few energy* → *very little energy*.",
    "Yangi so'zlar: **prescribe, dizzy, dose, infection, ointment, pharmacist**.",
  ],
  homework: "Tasavvur qiling, siz 4 kundan beri shamollagansiz. Shifokorga aytadigan 6 ta gap yozing: 2 tasi *for*, 2 tasi *since*, 1 tasi *hardly any* va 1 tasi savol (*Is it OK to…?*). Keyin ularni ovoz chiqarib ayting.",
};

export default lesson;
