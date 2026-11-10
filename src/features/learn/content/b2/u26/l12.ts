import type { Lesson } from '../../../types';

// Mini lesson (grammar): passive with gerunds (being + V3) and infinitives (to be / to have been + V3), get-passive, two-object verbs.
const lesson: Lesson = {
  id: 'u26-l12',
  title: 'Passive with gerunds and infinitives',
  titleUz: "Majhul nisbat: being asked, to be told, get + V3",
  mini: true,
  kind: 'grammar',
  goal: "Majhul nisbatni **gerund** (*I hate being interrupted*) va **infinitive** (*She wants to be promoted*) bilan ishlatasiz, so'zlashuvdagi **get-passive** (*get fired*) ni bilasiz va ikki to'ldiruvchili fe'llarda majhul gap tuzasiz (*I was given a book*).",
  slides: [
    {
      title: "being + V3: gerund majhul",
      blocks: [
        { t: 'p', md: "Fe'ldan keyin **-ing** shakli kerak bo'lsa (*enjoy, avoid, hate, without, after, insist on*) va ega ishni **o'zi qilmay, unga qilinsa**, **being + V3** ishlatiladi." },
        { t: 'table', head: ['Faol (men qilaman)', "Majhul (menga qilinadi)"], speak: [1], rows: [
          ['I hate interrupting people.', "I hate being interrupted."],
          ['She avoids meeting journalists.', "She avoids being photographed by journalists."],
          ['He left without telling us.', "He left without being told."],
          ['They insist on paying him.', "He insists on being paid on time."],
        ] },
        { t: 'tip', tone: 'info', md: "Formula: **being + V3**. Tugallangan ish uchun: **having been + V3** — *Having been warned twice, he finally deleted the app.* (Ikki marta ogohlantirilgach, u nihoyat ilovani o'chirdi.)" },
        { t: 'check', ex: { k: 'choice', q: "Nobody likes ___ while they are speaking.", opts: ['being interrupted', 'interrupted', 'to interrupted', 'be interrupted'], a: 0, why: "*like* dan keyin gerund, ega ishni o'zi qilmaydi → **being + V3**." } },
      ],
    },
    {
      title: "to be + V3 va to have been + V3",
      blocks: [
        { t: 'p', md: "*want, hope, expect, need, seem, be likely* kabi so'zlardan keyin **to-infinitive** keladi. Majhul shakl: **to be + V3**. O'tgan voqea haqida: **to have been + V3**." },
        { t: 'examples', items: [
          { en: "She wants to be promoted to manager next year.", uz: "U kelasi yil menejerlikka ko'tarilishni xohlaydi.", note: "**to be + V3** — kelajakka, hozirga." },
          { en: "I expect to be told the results by Friday.", uz: "Natijalar juma kunigacha menga aytilishini kutyapman." },
          { en: "The report needs to be finished today.", uz: "Hisobot bugun tugatilishi kerak.", note: "*need to be + V3* — buyum haqida." },
          { en: "He seems to have been offered a better job.", uz: "Unga yaxshiroq ish taklif qilingan ko'rinadi.", note: "**to have been + V3** — o'tgan voqea." },
          { en: "I'm delighted to have been chosen for the team.", uz: "Jamoaga tanlanganimdan xursandman." },
        ] },
        { t: 'tip', tone: 'good', md: "Ikkala shakl farqi: *I don't want to be interrupted* (aniq vaziyat) va *I hate being interrupted* (umuman). Ma'no deyarli bir xil, lekin fe'lning o'zi qaysi shaklni talab qilishini yodlash kerak." },
        { t: 'check', ex: { k: 'fill', q: "She hopes to ___ promoted this year.", a: ['be'], uz: "U shu yil ko'tarilishga umid qiladi.", why: "Infinitive majhul: **to be + V3**." } },
        { t: 'check', ex: { k: 'choice', q: "They say the files seem ___ deleted by mistake last night.", opts: ['to have been', 'to be', 'being', 'to have'], a: 0, why: "O'tgan voqea (kecha) → **to have been + V3**." } },
      ],
    },
    {
      title: "get-passive va ikki to'ldiruvchi",
      blocks: [
        { t: 'p', md: "So'zlashuvda **be** o'rniga **get** ishlatiladi: *get fired, get married, get lost, get stolen*. Odatda **kutilmagan** yoki **ta'sirli** voqealar uchun." },
        { t: 'examples', items: [
          { en: "Two people got fired after the data leak.", uz: "Ma'lumot sizib chiqqandan keyin ikki kishi ishdan haydaldi.", note: "**get fired** — norasmiyroq, hissiyotli." },
          { en: "My bag got stolen on the train.", uz: "Sumkam poyezdda o'g'irlandi." },
          { en: "They are getting married in June.", uz: "Ular iyunda turmush qurishadi." },
        ] },
        { t: 'p', md: "**Ikki to'ldiruvchi** (*give, offer, tell, send, show*): majhul gapni **shaxsdan** boshlash tabiiyroq. *Someone gave me a book* → **I was given a book** (kamroq: *A book was given to me*)." },
        { t: 'compare',
          good: { title: "To'g'ri", items: ["She was offered a new contract.", "I was told to wait.", "The staff were shown the new system."] },
          bad: { title: "Xato", items: ["She was offered to a new contract.", "I was told wait.", "It was shown the staff the new system."] } },
        { t: 'check', ex: { k: 'choice', q: "Rektor sizga mukofot berdi. Majhul gap:", opts: ["I was given an award by the director.", "I was given to an award by the director.", "An award gave me by the director.", "I gave an award by the director."], a: 0, why: "Ikki to'ldiruvchili fe'l: **I was given + narsa**; *to* qo'shilmaydi." } },
        { t: 'tip', tone: 'warn', md: "**get-passive** rasmiy yozuvda (hisobot, ilmiy matn) kam ishlatiladi: *The company was fined* (rasmiy) / *The company got fined* (so'zlashuv). Ilmiy matnda **be + V3** ni tanlang." },
      ],
    },
    {
      title: "Tipik xatolar, matn va dialog",
      blocks: [
        { t: 'compare',
          good: { title: "To'g'ri", items: ["I hate being interrupted.", "She wants to be promoted.", "He got fired last week."] },
          bad: { title: "Xato", items: ["I hate interrupted.", "She wants promoted.", "He fired last week."] } },
        { t: 'check', ex: { k: 'fix', wrong: "She wants promoted to manager.", a: ["She wants to be promoted to manager."], why: "Infinitiv majhul: **to be + V3**. O'zbek tilida *ko'tarilmoq* bitta so'z, inglizchada ikkita qism kerak." } },
        { t: 'text', title: 'A difficult week at work', voice: 'george', en: "I have never enjoyed being criticised in front of colleagues, but last week it happened to me. My manager said the report had been delivered late, and that I seemed to have been careless. In fact, I had been told to wait for the figures, which were sent to me only on Thursday. Two people in our department got dismissed last month, so everybody is nervous. I don't want to be blamed for something that wasn't my fault, so I asked to be given a meeting with her. She listened, and she admitted that the figures had been delayed by another team. I was offered an apology, and I was promised more support. Being listened to made me feel much better.", uz: "Hamkasblar oldida tanqid qilinishni hech qachon yoqtirmaganman, lekin o'tgan hafta bu men bilan sodir bo'ldi. Menejerim hisobot kech topshirilgan va men beparvo bo'lgan ko'rinaman dedi. Aslida, menga raqamlarni kutish aytilgan edi va ular menga faqat payshanba kuni yuborildi. O'tgan oy bo'limimizda ikki kishi ishdan bo'shatildi, shuning uchun hamma xavotirda. Men o'zimning aybim bo'lmagan narsa uchun ayblanishni xohlamadim va u bilan uchrashuv so'radim. U tingladi va raqamlar boshqa jamoa tomonidan kechiktirilganini tan oldi. Menga uzr aytildi va ko'proq yordam va'da qilindi. Tinglanganim o'zimni ancha yaxshi his qilishimga yordam berdi." },
        { t: 'check', ex: { k: 'tf', q: "The writer was told to wait for the figures.", a: true, why: "*I had been told to wait for the figures.*" } },
        { t: 'dialog', lines: [
          { who: 'Jasur', en: "Emily, I heard you're being considered for the new team leader position.", uz: "Emily, yangi guruh rahbari lavozimiga seni ko'rib chiqishayotganini eshitdim." },
          { who: 'Emily', en: "Yes, I was told yesterday. I'm hoping to be appointed before the summer.", uz: "Ha, kecha menga aytishdi. Yozgacha tayinlanishga umid qilyapman." },
          { who: 'Jasur', en: "Congratulations! Were you given a date for the decision?", uz: "Tabriklayman! Qaror uchun sana aytildimi?" },
          { who: 'Emily', en: "Not yet. I don't mind being asked more questions, but I hate being kept waiting.", uz: "Hali yo'q. Menga ko'proq savol berilishi qarshi emasman, lekin kutib turilishni yomon ko'raman." },
          { who: 'Jasur', en: "Don't worry. Last year Karim got promoted after only two interviews.", uz: "Xavotir olma. O'tgan yil Karim atigi ikki intervyudan keyin ko'tarildi." },
          { who: 'Emily', en: "That's encouraging. I really want to be given a chance.", uz: "Bu dalda beradi. Men chindan ham imkoniyat berilishini xohlayman." },
        ] },
        { t: 'check', ex: { k: 'choice', q: "What does Emily dislike?", opts: ["Being kept waiting", "Being asked questions", "Being promoted", "Being congratulated"], a: 0, why: "*I hate being kept waiting.*" } },
      ],
    },
  ],
  words: [
    { en: 'promote', uz: "lavozimda ko'tarmoq; targ'ib qilmoq", ipa: 'prəˈməʊt', pos: 'verb', ex: 'She was promoted after only two years with the company.', exUz: "U kompaniyada atigi ikki yil ishlagach, lavozimi ko'tarildi." },
    { en: 'dismiss', uz: "ishdan bo'shatmoq; rad etmoq", ipa: 'dɪsˈmɪs', pos: 'verb', ex: 'Three employees were dismissed for sharing confidential data.', exUz: "Uch xodim maxfiy ma'lumotlarni ulashgani uchun ishdan bo'shatildi." },
    { en: 'appoint', uz: "tayinlamoq", ipa: 'əˈpɔɪnt', pos: 'verb', ex: 'He was appointed head of the IT department.', exUz: "U AT bo'limi boshlig'i etib tayinlandi." },
    { en: 'nominate', uz: "nomzod qilib ko'rsatmoq", ipa: 'ˈnɒm.ɪ.neɪt', pos: 'verb', ex: 'Her documentary was nominated for an award.', exUz: "Uning hujjatli filmi mukofotga nomzod qilib ko'rsatildi." },
    { en: 'recruit', uz: "ishga yollamoq, jalb qilmoq", ipa: 'rɪˈkruːt', pos: 'verb', ex: 'The company is recruiting engineers from abroad.', exUz: "Kompaniya chet eldan muhandislar yollayapti." },
  ],
  practice: [
    { k: 'match', pairs: [['promote', "lavozimda ko'tarmoq"], ['dismiss', "ishdan bo'shatmoq"], ['appoint', 'tayinlamoq'], ['nominate', "nomzod qilib ko'rsatmoq"], ['recruit', 'ishga yollamoq']] },
    { k: 'choice', q: "He left the meeting without ___ anything.", opts: ['being told', 'tell', 'to be told', 'been told'], a: 0, why: "*without* dan keyin gerund; ega unga aytilmagan → **being told**." },
    { k: 'fill', q: "I don't like ___ interrupted when I'm working.", a: ['being'], uz: "Ishlayotganimda to'xtatilishni yoqtirmayman.", why: "Gerund majhul: **being + V3**." },
    { k: 'choice', q: "She was ___ a new laptop by the company.", opts: ['given', 'given to', 'gave', 'giving'], a: 0, why: "**was given + narsa**." },
    { k: 'fix', wrong: "He wants to appointed head of the department.", a: ["He wants to be appointed head of the department."], why: "Infinitiv majhul: **to be + V3**." },
    { k: 'order', uz: "Menga bir hafta kutish aytildi.", words: ['I', 'was', 'told', 'to', 'wait', 'a', 'week.'], extra: ['tell', 'being'], alt: [['I', 'was', 'told', 'to', 'wait', 'for', 'a', 'week.']], why: "**was told + to-infinitive**." },
    { k: 'listen', say: "She is delighted to have been nominated for the award.", opts: ["She is delighted to have been nominated for the award.", "She is delighted to be nominated for the award.", "She is delighted having nominated for the award.", "She was delighted to nominate for the award."], a: 0 },
    { k: 'tf', q: "*Two people got dismissed last week.* — Gap so'zlashuv uslubidagi majhul nisbat.", a: true, why: "**got dismissed** — get-passive." },
    { k: 'translate', uz: "U hammaning oldida tanqid qilinishni yomon ko'radi.", a: ["He hates being criticised in front of everyone.", "He hates being criticized in front of everyone.", "He hates being criticised in front of everybody.", "He hates being criticized in front of everybody.", "She hates being criticised in front of everyone.", "She hates being criticized in front of everyone.", "She hates being criticised in front of everybody.", "She hates being criticized in front of everybody."], why: "**hate being + V3**." },
    { k: 'dictation', say: "I'm hoping to be appointed before the summer.", a: ["I'm hoping to be appointed before the summer.", "I am hoping to be appointed before the summer."], uz: "Yozgacha tayinlanishga umid qilyapman." },
    { k: 'fix', wrong: "I was given to a ticket for the concert.", a: ["I was given a ticket for the concert."], why: "*give* dan keyin majhul gapda **to** kerak emas: *was given a ticket*." },
    { k: 'choice', q: "He seems ___ promoted last year, but nobody told me.", opts: ['to have been', 'being', 'to be', 'have been'], a: 0, why: "O'tgan voqea → **to have been + V3**." },
    { k: 'fill', q: "My phone ___ stolen on the bus yesterday. (so'zlashuv)", a: ['got'], hint: "be emas, get shakli", why: "So'zlashuv majhul nisbat: **got + V3**." },
    { k: 'speak', say: "I hate being kept waiting.", uz: "Kutdirib qo'yilishni yoqtirmayman." },
  ],
  quiz: [
    { k: 'choice', q: "She avoids ___ by journalists.", opts: ['being photographed', 'photographed', 'to be photographed', 'photographing'], a: 0, why: "*avoid* + gerund; ega suratga olinadi → **being photographed**." },
    { k: 'choice', q: "The files need ___ before Friday.", opts: ['to be sent', 'to send', 'being sent', 'sent'], a: 0, why: "*need to be + V3*." },
    { k: 'fix', wrong: "I hate interrupted in meetings.", a: ["I hate being interrupted in meetings."], why: "Gerund majhul: **being interrupted**." },
    { k: 'fill', q: "He was ___ a job in the capital, but he refused.", a: ['offered', 'given'], uz: "Unga poytaxtda ish taklif qilindi, lekin u rad etdi.", hint: "taklif qilingan", why: "**was offered + narsa**." },
    { k: 'order', uz: "Men tanlanganimdan xursandman.", words: ["I'm", 'happy', 'to', 'have', 'been', 'chosen.'], extra: ['being', 'choose'], alt: [['I', 'am', 'happy', 'to', 'have', 'been', 'chosen.']], why: "**to have been + V3**." },
    { k: 'tf', q: "Rasmiy hisobotda *got fired* o'rniga *was dismissed* tabiiyroq.", a: true, why: "Rasmiy uslubda **be + V3**, so'zlashuvda **get + V3**." },
    { k: 'listen', say: "Having been warned twice, he deleted the app.", opts: ["Having been warned twice, he deleted the app.", "Having warned twice, he deleted the app.", "Being warned twice, he deletes the app.", "Having been warning twice, he deleted the app."], a: 0 },
    { k: 'translate', uz: "Menga hisobotni juma kuniga topshirish aytildi.", a: ["I was told to submit the report by Friday.", "I was told to hand in the report by Friday.", "I was told to submit the report on Friday.", "I was told to hand in the report on Friday."], why: "**was told + to-infinitive**." },
  ],
  summary: [
    "**being + V3** — gerund majhul: *I hate being interrupted, without being told*.",
    "**to be + V3** — infinitiv majhul: *She wants to be promoted*; o'tgan voqea: **to have been + V3**.",
    "**get + V3** — so'zlashuv: *get fired, get stolen, get married*; rasmiy yozuvda **be + V3**.",
    "Ikki to'ldiruvchi: *I was given a book* (**to** kerak emas), *I was told to wait*.",
    "Yangi so'zlar: **promote, dismiss, appoint, nominate, recruit**.",
  ],
  homework: "O'zingiz haqingizda 5 ta gap yozing: 2 tasida **being + V3** (*I don't like being…*), 1 tasida **to be + V3** (*I hope to be…*), 1 tasida **get + V3** va 1 tasida **I was given/told…**. Ularni ovoz chiqarib ayting.",
};

export default lesson;
