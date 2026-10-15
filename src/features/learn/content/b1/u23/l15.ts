import type { Lesson } from '../../../types';

// Mini lesson (skill): reading and writing, summarising an article. Uses linking words (l12) and the passive and tenses (l3, l4) as revision.
const lesson: Lesson = {
  id: 'u23-l15',
  title: 'Reading and writing: summarising an article',
  titleUz: "O'qish va yozish: maqolani qisqacha bayon qilish",
  mini: true,
  kind: 'skill',
  goal: "Qisqa maqolani o'qib **asosiy g'oyani** topasiz va uni **o'z so'zlaringiz bilan** 3–4 gapda yozasiz (*The article says that…*, *The writer explains…*), fikringizni aralashtirmasdan.",
  slides: [
    {
      title: "O'qing: maqola",
      blocks: [
        { t: 'p', md: "Maqolani o'qing. Avval **sarlavhaga** qarang, so'ng butun matnni bir marta o'qing va savol bering: **Bu maqola nima haqida?**" },
        { t: 'text', title: 'Shorter weeks, happier workers?', en: "Some companies have tried a four-day working week. Workers still do their jobs, but they have one more day off. Supporters say that people feel less tired and more motivated, so they often work better. In addition, companies save money on energy, because the offices are closed for an extra day. However, not every job can be done in four days. For example, hospitals and shops must stay open every day, so they need different solutions. The writer concludes that a shorter week can work well, but each company should test it carefully before it makes a final decision.", uz: "Ba'zi kompaniyalar to'rt kunlik ish haftasini sinab ko'rdi. Xodimlar o'z ishlarini baribir bajaradi, lekin bitta qo'shimcha dam olish kuniga ega bo'ladi. Tarafdorlar odamlar kamroq charchaydi va ko'proq rag'batlanadi, shuning uchun ular ko'pincha yaxshiroq ishlaydi, deydi. Bundan tashqari, kompaniyalar energiyada pul tejaydi, chunki ofislar qo'shimcha bir kun yopiq turadi. Biroq har bir ishni to'rt kunda qilib bo'lmaydi. Masalan, kasalxonalar va do'konlar har kuni ochiq bo'lishi kerak, shuning uchun ularga boshqa yechimlar kerak. Muallif xulosa qiladiki, qisqa hafta yaxshi ishlashi mumkin, lekin har bir kompaniya oxirgi qarordan oldin uni ehtiyotkorlik bilan sinab ko'rishi kerak." },
        { t: 'check', ex: { k: 'choice', q: "What is the main idea of the article?", opts: ['A four-day week can work, but companies should test it.', 'Everyone must work five days.', 'Hospitals should close on Fridays.', 'Energy is very expensive.'], a: 0, why: "Muallifning xulosasi: *a shorter week can work well, but each company should test it.*" } },
        { t: 'check', ex: { k: 'tf', q: "The article says every job can be done in four days.", a: false, why: "*Not every job can be done in four days.*" } },
      ],
    },
    {
      title: "Qisqacha bayon qanday yoziladi?",
      blocks: [
        { t: 'p', md: "**Summary** — maqolaning eng muhim fikrlarini **o'z so'zlaringiz bilan** qisqa aytib berish. Uzunligi maqolaning taxminan **uchdan bir** qismi. Qoidalar:" },
        { t: 'table', head: ['Qoida', 'Izoh'], rows: [
          ['1. Asosiy g\'oya', "Birinchi gapda maqola nima haqida ekanini ayting."],
          ['2. Muhim fikrlar', "2–3 ta eng muhim fikrni yozing; mayda tafsilotlarni tashlang."],
          ["3. O'z so'zlaringiz", "Maqoladagi gaplarni ko'chirmang — paraphrase qiling."],
          ["4. Fikringiz yo'q", "O'zingizning fikringizni qo'shmang. Faqat muallif aytganini yozing."],
          ['5. Zamon', "Odatda Present Simple: *The writer says that…*"],
        ] },
        { t: 'tip', tone: 'info', md: "**Reporting** fe'llar: *says, explains, argues, points out, concludes*. Ularni qolip qilib ishlating: **The article is about…**, **The writer explains that…**, **The writer concludes that…**" },
        { t: 'check', ex: { k: 'choice', q: "Summary ga nima kirmaydi?", opts: ["Sizning shaxsiy fikringiz", "Asosiy g'oya", "Muhim dalillar", "Muallifning xulosasi"], a: 0, why: "Summary da faqat muallifning fikri yoziladi." } },
      ],
    },
    {
      title: "Paraphrase: o'z so'zlar bilan",
      blocks: [
        { t: 'p', md: "Paraphrase — fikrni **boshqa so'zlar va boshqa gap tuzilishi** bilan aytish. Maqoladagi gapni aynan ko'chirish — xato." },
        { t: 'examples', items: [
          { en: "Original: Workers feel less tired and more motivated.", uz: "Asl nusxa: Xodimlar kamroq charchaydi va ko'proq rag'batlanadi.", note: "Asl gap." },
          { en: "Paraphrase: Employees have more energy and enjoy their work more.", uz: "Paraphrase: Xodimlarning quvvati ko'proq va ishdan ko'proq zavq oladi.", note: "**workers -> employees**, boshqa ifoda." },
          { en: "Original: Hospitals and shops must stay open every day.", uz: "Asl nusxa: Kasalxona va do'konlar har kuni ochiq turishi kerak.", note: "Asl gap." },
          { en: "Paraphrase: Some businesses cannot close, even for one extra day.", uz: "Paraphrase: Ba'zi korxonalar bir qo'shimcha kunga ham yopila olmaydi.", note: "Umumiyroq so'zlar." },
        ] },
        { t: 'tip', tone: 'good', md: "Paraphrase usullari: **sinonim** (*workers -> employees*), **tuzilmani o'zgartirish** (*must stay open -> cannot close*), **umumiy so'z** (*hospitals and shops -> some businesses*)." },
        { t: 'check', ex: { k: 'choice', q: "\"Many people feel tired.\" Eng yaxshi paraphrase:", opts: ["A lot of people do not have much energy.", "Many people feel tired.", "Many people feel tired a lot.", "Tired many people feel."], a: 0, why: "Boshqa so'zlar bilan, ma'no bir xil." } },
      ],
    },
    {
      title: "Namuna summary",
      blocks: [
        { t: 'text', title: 'Summary of the article', voice: 'emma', en: "The article is about companies that have tried a four-day working week. The writer explains that employees feel less tired and work with more energy, and that companies also save money. However, the article points out that some businesses, such as hospitals and shops, cannot close for an extra day. The writer concludes that the idea can work, but every company should test it first.", uz: "Maqola to'rt kunlik ish haftasini sinab ko'rgan kompaniyalar haqida. Muallif xodimlar kamroq charchashi va ko'proq quvvat bilan ishlashini, kompaniyalar esa pul tejashini tushuntiradi. Biroq maqolada ba'zi korxonalar, masalan kasalxonalar va do'konlar qo'shimcha kunga yopila olmasligi ta'kidlanadi. Muallif xulosasiga ko'ra, g'oya ishlashi mumkin, lekin har bir kompaniya avval uni sinab ko'rishi kerak." },
        { t: 'check', ex: { k: 'fill', q: "The article is ___ companies that have tried a four-day week.", a: ['about'], why: "**The article is about…**" } },
        { t: 'check', ex: { k: 'fill', q: "The writer ___ that the idea can work.", a: ['concludes', 'says', 'explains', 'argues'], why: "Reporting fe'l: *concludes / says / explains*." } },
      ],
    },
  ],
  words: [
    { en: 'summarise', uz: "qisqacha bayon qilmoq", ipa: 'ˈsʌm.ə.raɪz', pos: 'verb', ex: 'Can you summarise the article in three sentences?', exUz: "Maqolani uchta gapda qisqacha aytib bera olasizmi?" },
    { en: 'paraphrase', uz: "o'z so'zlar bilan qayta aytmoq", ipa: 'ˈpær.ə.freɪz', pos: 'verb', ex: 'Do not copy the text. Paraphrase it.', exUz: "Matnni ko'chirmang. Uni o'z so'zlaringiz bilan ayting." },
    { en: 'main idea', uz: "asosiy g'oya", ipa: 'meɪn aɪˈdɪə', pos: 'noun', ex: 'What is the main idea of this text?', exUz: "Bu matnning asosiy g'oyasi nima?" },
    { en: 'detail', uz: 'tafsilot', ipa: 'ˈdiː.teɪl', pos: 'noun', ex: 'You do not need every detail in a summary.', exUz: "Qisqacha bayonda har bir tafsilot kerak emas." },
    { en: 'headline', uz: 'sarlavha (gazeta)', ipa: 'ˈhed.laɪn', pos: 'noun', ex: 'The headline made me curious.', exUz: "Sarlavha meni qiziqtirib qo'ydi." },
  ],
  practice: [
    { k: 'match', pairs: [['summarise', 'qisqacha bayon qilmoq'], ['paraphrase', "o'z so'zlar bilan aytmoq"], ['main idea', "asosiy g'oya"], ['detail', 'tafsilot'], ['headline', 'sarlavha']] },
    { k: 'choice', q: "What should be in the first sentence of a summary?", opts: ['The main idea', 'Your own opinion', 'A small detail', 'A copy of the title only'], a: 0, why: "Birinchi gap — asosiy g'oya." },
    { k: 'choice', q: "Qaysi gap summary uchun mos?", opts: ["The writer explains that cities need more parks.", "I think cities need more parks.", "I love parks, and I go every day.", "Parks are green."], a: 0, why: "Summary da muallifning fikri: **The writer explains that…**" },
    { k: 'fill', q: "The article is ___ the benefits of sleep.", a: ['about'], uz: "Maqola uyquning foydalari haqida.", why: "**The article is about…**" },
    { k: 'fill', q: "The writer ___ out that not everyone agrees.", a: ['points'], uz: "Muallif hamma ham rozi emasligini ta'kidlaydi.", why: "**points out** — ta'kidlamoq." },
    { k: 'fix', wrong: "In my opinion, the article is boring and the writer is wrong.", a: ["The article is about the benefits of exercise.", "The article is about exercise."], why: "Summary da shaxsiy fikr yozilmaydi." },
    { k: 'fix', wrong: "The writer say that sleep is important.", a: ["The writer says that sleep is important."], why: "Present Simple: **he/she/the writer + says**." },
    { k: 'order', uz: "Muallif xulosa qiladiki, bu g'oya ishlashi mumkin.", words: ['The', 'writer', 'concludes', 'that', 'the', 'idea', 'can', 'work.'], extra: ['conclude', 'is'], why: "**The writer concludes that…**" },
    { k: 'translate', uz: "Maqola velosipedlar haqida.", a: ["The article is about bicycles.", "The article is about bikes."], why: "**The article is about…**" },
    { k: 'dictation', say: 'The writer explains that people sleep less than before.', a: ['The writer explains that people sleep less than before.'], uz: "Muallif odamlar avvalgidan kam uxlashini tushuntiradi." },
    { k: 'speak', say: 'The article is about a new way of learning languages.', uz: "Maqola tillarni o'rganishning yangi usuli haqida." },
    { k: 'speak', say: 'The writer concludes that students need more sleep.', uz: "Muallif talabalarga ko'proq uyqu kerak degan xulosaga keladi." },
  ],
  quiz: [
    { k: 'choice', q: "Summary qancha bo'ladi?", opts: ["Maqolaning taxminan uchdan bir qismi", "Maqola bilan bir xil", "Bitta so'z", "Maqoladan uzunroq"], a: 0, why: "Summary qisqa bo'ladi." },
    { k: 'choice', q: "\"The writer ___ that exercise is good for the heart.\"", opts: ['explains', 'explain', 'explaining', 'to explain'], a: 0, why: "Present Simple: the writer + **explains**." },
    { k: 'fill', q: "Do not copy the text. ___ it in your own words.", a: ['Paraphrase', 'paraphrase'], why: "**paraphrase** — o'z so'zlar bilan aytmoq." },
    { k: 'fill', q: "What is the main ___ of the article?", a: ['idea'], why: "**main idea**." },
    { k: 'order', uz: "Maqola kompaniyalar haqida.", words: ['The', 'article', 'is', 'about', 'companies.'], extra: ['of', 'are'], why: "**The article is about…**" },
    { k: 'tf', q: "Summary ga o'z fikringizni qo'shish kerak.", a: false, why: "Summary da faqat muallifning fikri yoziladi." },
    { k: 'translate', uz: "Muallif tushuntiradiki, xodimlar kamroq charchaydi.", a: ["The writer explains that employees feel less tired.", "The writer explains that workers feel less tired.", "The writer explains that employees get less tired.", "The writer explains that workers get less tired."], why: "**The writer explains that…**" },
  ],
  summary: [
    "Summary: birinchi gapda **asosiy g'oya** (*The article is about…*), keyin 2–3 muhim fikr, oxirida muallifning xulosasi.",
    "O'z so'zlaringiz bilan yozing (**paraphrase**): sinonim, boshqa tuzilma, umumiy so'z.",
    "Shaxsiy fikr yo'q. Reporting fe'llar: **says, explains, argues, points out, concludes** (the writer + **-s**).",
    "Yangi so'zlar: **summarise, paraphrase, main idea, detail, headline**.",
  ],
  homework: "Bitta qisqa inglizcha maqola (yangilik yoki blog) tanlang. Uni o'qing, kitobga qaramasdan asosiy g'oyani topib, 4 gapdan iborat summary yozing. Keyin maqola bilan solishtiring.",
};

export default lesson;
