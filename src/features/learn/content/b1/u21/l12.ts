import type { Lesson } from '../../../types';

// Mini lesson (grammar): the passive with have/has been, will be and modals. Builds on l1 (is made, was built) without repeating it.
const lesson: Lesson = {
  id: 'u21-l12',
  title: 'The passive: perfect, future and modals',
  titleUz: "Majhul nisbat: has been built, will be done, can be seen",
  mini: true,
  kind: 'grammar',
  goal: "Majhul nisbatni **Present Perfect** (*has been repaired*), **kelasi zamon** (*will be opened*) va **modal fe'llar** (*can be seen, must be finished*) bilan yasaysiz, inkor va savol shaklini bilasiz.",
  slides: [
    {
      title: "Uch yangi shakl",
      blocks: [
        { t: 'p', md: "Birinchi darsda **is / was + V3** ni o'rgandingiz. Majhul nisbatning formulasi doim bir xil: **to be + V3**. Faqat **to be** zamonni yoki modalni o'zgartiradi:" },
        { t: 'table', head: ['Shakl', 'Formula', 'Misol'], speak: [2], rows: [
          ['Present Perfect', 'has / have been + V3', 'The bridge has been repaired.'],
          ['Kelasi zamon', 'will be + V3', 'The museum will be opened in May.'],
          ['Modal fe\'l', 'can / must / should / might be + V3', 'The castle can be seen from the road.'],
        ] },
        { t: 'tip', tone: 'info', md: "Fe'l o'zgarmaydi: har doim **V3** (*repaired, built, done, seen*). O'zgaradigan faqat **be** qismi: *has been*, *will be*, *can be*. Modaldan keyin **be** unutilmasin: *can be seen*, *can seen* emas." },
        { t: 'check', ex: { k: 'choice', q: "The old market ___ for a new shopping centre.", opts: ['has been replaced', 'has replaced', 'is been replaced', 'have been replaced'], a: 0, why: "Bozor almashtirilgan (majhul) + natija hozir ko'rinib turibdi → **has been replaced**." } },
      ],
    },
    {
      title: "Qachon ishlatamiz?",
      blocks: [
        { t: 'examples', items: [
          { en: "The roof has been damaged by the storm.", uz: "Tom bo'ron tufayli shikastlangan.", note: "**has been + V3** — natija hozir ko'rinib turibdi." },
          { en: "The new station will be opened next spring.", uz: "Yangi bekat kelasi bahorda ochiladi.", note: "**will be + V3** — reja yoki bashorat." },
          { en: "Tickets can be bought online.", uz: "Chiptalarni internetda sotib olish mumkin.", note: "**can be + V3** — imkoniyat." },
          { en: "Shoes must be taken off at the door.", uz: "Oyoq kiyimni eshik oldida yechish kerak.", note: "**must be + V3** — majburiyat." },
          { en: "The old walls should be protected.", uz: "Qadimiy devorlarni himoya qilish kerak.", note: "**should be + V3** — maslahat." },
        ] },
        { t: 'tip', tone: 'good', md: "Ish bajaruvchi noma'lum yoki muhim bo'lmasa, **by …** yozilmaydi. *The streets have been cleaned.* — kim tozalagani muhim emas. Muhim bo'lsa: *The streets have been cleaned by volunteers.*" },
        { t: 'check', ex: { k: 'fill', q: "The new hospital will ___ opened by the mayor.", a: ['be'], why: "Kelasi zamon majhul: **will be + V3**." } },
      ],
    },
    {
      title: "Inkor va savol",
      blocks: [
        { t: 'p', md: "Inkor va savolda faqat **birinchi yordamchi fe'l** o'rnini o'zgartiradi, **be + V3** o'zgarishsiz qoladi." },
        { t: 'table', head: ['Gap turi', 'Misol'], speak: [1], rows: [
          ['Inkor', "The work hasn't been finished yet."],
          ['Inkor', "The museum won't be opened until June."],
          ['Inkor', "Photos can't be taken inside."],
          ['Savol', 'Has the road been closed?'],
          ['Savol', 'When will the hotel be finished?'],
          ['Savol', 'Can the castle be visited at night?'],
        ] },
        { t: 'compare',
          good: { title: "To'g'ri", items: ['The room has been cleaned.', 'It will be finished soon.', 'Pets must be kept on a lead.', 'Has the shop been closed?'] },
          bad: { title: 'Xato', items: ['The room has cleaned.', 'It will finished soon.', 'Pets must keep on a lead.', 'Has been the shop closed?'] } },
        { t: 'check', ex: { k: 'choice', q: "Qaysi gap to'g'ri?", opts: ['Has the bridge been repaired yet?', 'Has been the bridge repaired yet?', 'Has the bridge repaired yet?', 'Is the bridge been repaired yet?'], a: 0, why: "Savol: **Has + ega + been + V3?**" } },
        { t: 'check', ex: { k: 'tf', q: "*The project will be finish next year.* — Gap to'g'ri.", a: false, why: "**will be finished** — V3 kerak." } },
      ],
    },
    {
      title: "Dialog: shahar markazida",
      blocks: [
        { t: 'dialog', lines: [
          { who: 'Helen', en: "Have you seen the old theatre? It has been repaired at last.", uz: "Eski teatrni ko'rdingmi? Nihoyat ta'mirlandi." },
          { who: 'Tom', en: "Yes, I walked past it yesterday. When will it be opened?", uz: "Ha, kecha yonidan o'tdim. U qachon ochiladi?" },
          { who: 'Helen', en: "Next month. A lot of old photos will be shown in the hall.", uz: "Kelasi oy. Zalda ko'plab eski suratlar ko'rsatiladi." },
          { who: 'Tom', en: "Great. Can tickets be booked online?", uz: "Zo'r. Chiptalarni internetda band qilsa bo'ladimi?" },
          { who: 'Helen', en: "Yes, they can. But the cheap seats must be booked early.", uz: "Ha, bo'ladi. Lekin arzon o'rindiqlarni oldindan band qilish kerak." },
          { who: 'Tom', en: "Then I'll do it tonight. The old building should be seen by everyone!", uz: "Unda bugun kechqurun qilaman. Bu eski binoni hamma ko'rishi kerak!" },
        ] },
        { t: 'check', ex: { k: 'tf', q: 'The theatre has not been repaired yet.', a: false, why: "Helen: *It has been repaired at last.*" } },
        { t: 'check', ex: { k: 'choice', q: 'How can people get tickets?', opts: ['They can book them online.', 'They must call the mayor.', 'They can buy them next year.', 'They cannot get tickets.'], a: 0, why: "*Can tickets be booked online? — Yes, they can.*" } },
      ],
    },
  ],
  words: [
    { en: 'repair', uz: "ta'mirlamoq", ipa: 'rɪˈpeə', pos: 'verb', ex: 'The road has been repaired.', exUz: "Yo'l ta'mirlandi." },
    { en: 'replace', uz: 'almashtirmoq', ipa: 'rɪˈpleɪs', pos: 'verb', ex: 'The old windows will be replaced.', exUz: 'Eski derazalar almashtiriladi.' },
    { en: 'damage', uz: 'shikastlamoq, zarar yetkazmoq', ipa: 'ˈdæmɪdʒ', pos: 'verb', ex: 'The roof was damaged in the storm.', exUz: "Tom bo'ronda shikastlandi." },
    { en: 'protect', uz: 'himoya qilmoq', ipa: 'prəˈtekt', pos: 'verb', ex: 'Old buildings should be protected.', exUz: 'Eski binolarni himoya qilish kerak.' },
    { en: 'announce', uz: "e'lon qilmoq", ipa: 'əˈnaʊns', pos: 'verb', ex: 'The news has been announced.', exUz: "Yangilik e'lon qilindi." },
  ],
  practice: [
    { k: 'match', pairs: [['has been repaired', "ta'mirlangan"], ['will be opened', 'ochiladi'], ['can be seen', "ko'rish mumkin"], ['must be finished', 'tugatilishi kerak'], ['should be protected', 'himoya qilinishi kerak']] },
    { k: 'choice', q: "The streets ___ already ___ by the city workers.", opts: ['have been cleaned', 'are been cleaned', 'has cleaned', 'have cleaned'], a: 0, why: "Ega ko'plik (*streets*): **have been + V3**." },
    { k: 'fill', q: "The museum has ___ closed for repairs.", a: ['been'], uz: "Muzey ta'mir uchun yopilgan.", why: "Present Perfect majhul: **has been + V3**." },
    { k: 'fill', q: "The new library will ___ opened in September.", a: ['be'], uz: "Yangi kutubxona sentabrda ochiladi.", why: "**will be + V3**." },
    { k: 'listen', say: 'The old castle can be visited every day.', opts: ['The old castle can be visited every day.', 'The old castle can visit every day.', 'The old castle was visited every day.', 'The old castle will be visited every day.'], a: 0 },
    { k: 'choice', q: "Passports ___ at the border.", opts: ['must be shown', 'must show', 'must be show', 'must are shown'], a: 0, why: "Modal + **be + V3**: *must be shown*." },
    { k: 'order', uz: "Mehmonxona kelasi oy ochiladi.", words: ['The', 'hotel', 'will', 'be', 'opened', 'next', 'month.'], extra: ['has', 'open'], why: "**will be + V3**." },
    { k: 'order', uz: "Bu ishni hali tugatishmagan.", words: ["The", 'work', "hasn't", 'been', 'finished', 'yet.'], extra: ['was', 'finish'], alt: [['The', 'work', 'has', 'not', 'been', 'finished', 'yet.']], why: "Inkor: **hasn't been + V3**." },
    { k: 'fix', wrong: 'The bridge has repaired.', a: ['The bridge has been repaired.', "The bridge's been repaired."], why: "Majhul nisbat: **has been + V3**." },
    { k: 'fix', wrong: 'Tickets can booked online.', a: ['Tickets can be booked online.'], why: "Modaldan keyin **be** kerak: *can be booked*." },
    { k: 'translate', uz: "Bu bino kelasi yili buzib tashlanadi.", a: ['This building will be pulled down next year.', 'This building will be demolished next year.', 'This building will be knocked down next year.', 'The building will be pulled down next year.', 'The building will be demolished next year.', 'The building will be knocked down next year.'], why: "**will be + V3**." },
    { k: 'translate', uz: "Chiptalarni bu yerda sotib olish mumkin.", a: ['Tickets can be bought here.', 'The tickets can be bought here.'], why: "**can be + V3**." },
    { k: 'tf', q: "*The photos have been taken by Ben.* — Suratlarni Ben olgan (majhul).", a: true, why: "**have been taken by …** — majhul nisbat, ishni bajaruvchi *by* bilan." },
    { k: 'dictation', say: 'Has the road been closed?', a: ['Has the road been closed?'], uz: "Yo'l yopilganmi?" },
    { k: 'speak', say: 'The new station will be opened next spring.', uz: 'Yangi bekat kelasi bahorda ochiladi.' },
  ],
  quiz: [
    { k: 'choice', q: "The roof ___ by the storm last night.", opts: ['was damaged', 'has damaged', 'will be damaged', 'is damage'], a: 0, why: "O'tgan zamon majhul (l1): **was damaged**." },
    { k: 'choice', q: "The news ___ yet.", opts: ["hasn't been announced", "wasn't announce", "hasn't announced", "won't announced"], a: 0, why: "Inkor Present Perfect majhul: **hasn't been + V3**." },
    { k: 'choice', q: "Qaysi gap to'g'ri?", opts: ['The old walls should be protected.', 'The old walls should protected.', 'The old walls should be protect.', 'The old walls should been protected.'], a: 0, why: "**should be + V3**." },
    { k: 'fill', q: "The town hall will ___ replaced next year.", a: ['be'], uz: 'Shahar hokimiyati binosi kelasi yili almashtiriladi.', why: "**will be + V3**." },
    { k: 'fill', q: "Have all the windows ___ repaired?", a: ['been'], uz: "Hamma derazalar ta'mirlandimi?", why: "Savol: **Have + ega + been + V3?**" },
    { k: 'order', uz: "Bu yerda suratga olish mumkin emas.", words: ['Photos', "can't", 'be', 'taken', 'here.'], extra: ['take', 'are'], alt: [['Photos', 'cannot', 'be', 'taken', 'here.'], ['Pictures', "can't", 'be', 'taken', 'here.'], ['Pictures', 'cannot', 'be', 'taken', 'here.']], why: "**can't be + V3**." },
    { k: 'fix', wrong: 'The museum will opened in May.', a: ['The museum will be opened in May.', 'The museum will open in May.'], why: "Majhul: **will be opened**. Yoki oddiy: *will open*." },
    { k: 'listen', say: 'Shoes must be taken off at the door.', opts: ['Shoes must be taken off at the door.', 'Shoes must take off at the door.', 'Shoes were taken off at the door.', 'Shoes can be taken off at the door.'], a: 0 },
    { k: 'tf', q: "*The bridge has been repaired.* — Ko'prik hozir ta'mirlangan, ishlatsa bo'ladi.", a: true, why: "**has been repaired** — natija hozir ham amal qiladi." },
  ],
  summary: [
    "Majhul nisbat formulasi: **to be + V3**. **Present Perfect**: *has / have been + V3*.",
    "**Kelasi zamon**: *will be + V3*. **Modallar**: *can / must / should be + V3*.",
    "Inkor va savolda yordamchi fe'l o'rni o'zgaradi: *hasn't been done*, *Has it been done?*, *can't be seen*.",
    "Xatolar: *has repaired* ❌ → *has been repaired* ✅; *can booked* ❌ → *can be booked* ✅.",
    "Yangi so'zlar: **repair, replace, damage, protect, announce**.",
  ],
  homework: "Shahringiz haqida 5 ta majhul gap yozing: 1 ta *has been …*, 1 ta *will be …*, 1 ta *can be …*, 1 ta *must be …* va 1 ta *hasn't been … yet*.",
};

export default lesson;
