import type { Lesson } from '../../../types';

// Mini lesson (skill): reading a job advert and a CV, matching requirements to experience, writing a 100-120 word application summary.
const lesson: Lesson = {
  id: 'u27-l15',
  title: 'Reading and writing: a job advert and CV',
  titleUz: "O'qish va yozish: ish e'loni va CV",
  mini: true,
  kind: 'skill',
  goal: "**Ish e'loni** va **CV** ni o'qib, talablarni tajriba bilan **solishtirasiz**, CV ga xos iboralarni (*proficient in, in charge of, hands-on experience of*) bilasiz va **100-120 so'zli ariza xulosasi** yozasiz.",
  slides: [
    {
      title: "O'qing: ish e'loni",
      blocks: [
        { t: 'p', md: "Ish e'lonini o'qiganda uch narsani toping: **ish nima? (responsibilities)**, **nima talab qilinadi? (requirements)**, **qachongacha topshirish kerak? (closing date)**." },
        { t: 'text', title: 'Job advert', voice: 'george', en: "Brightway Logistics is looking for a competent and well-organised candidate to join our Manchester office as Customer Operations Coordinator. You will be in charge of a team of four, and your responsibilities will include handling customer queries and reporting to the operations manager. We require a degree or equivalent, at least two years of relevant experience, hands-on experience of delivery tracking, and proficiency in Excel and English. The closing date is the thirtieth of November. Successful candidates will receive regular feedback from their manager. Please send your CV and a short cover letter.", uz: "Brightway Logistics Manchester ofisiga Mijozlar bilan ishlash koordinatori lavozimiga malakali va tartibli nomzodni qidirmoqda. Siz to'rt kishilik jamoaga rahbarlik qilasiz va majburiyatlaringiz mijozlar so'rovlarini hal qilish hamda operatsiyalar menejeriga hisobot berishni o'z ichiga oladi. Bizga diplom yoki unga teng ma'lumot, kamida ikki yillik tegishli tajriba, yetkazib berishni kuzatishda amaliy tajriba hamda Excel va ingliz tilini yaxshi bilish kerak. Topshirish muddati — o'ttizinchi noyabr. Muvaffaqiyatli nomzodlar menejerdan muntazam fikr-mulohaza oladi. Iltimos, CV va qisqa qo'shimcha xat yuboring." },
        { t: 'check', ex: { k: 'choice', q: 'How many people will the new coordinator lead?', opts: ['Four', 'Two', 'Three', 'Six'], a: 0, why: "*in charge of a team of four*." } },
        { t: 'check', ex: { k: 'tf', q: 'The company asks for at least five years of experience.', a: false, why: "*at least two years of relevant experience*." } },
        { t: 'check', ex: { k: 'choice', q: 'What should applicants send?', opts: ['A CV and a short cover letter', 'Only a CV', 'A reference from a friend', 'A photo and a video'], a: 0, why: "*Please send your CV and a short cover letter.*" } },
      ],
    },
    {
      title: "O'qing: CV",
      blocks: [
        { t: 'text', title: 'CV: Dilnoza Rahimova', voice: 'emma', en: "Dilnoza Rahimova. Profile: operations assistant with four years of experience in transport and customer service. Experience: since 2021, operations assistant at Silkway Trading, Tashkent. I have managed a team of three people, tracked deliveries for forty clients, and introduced a spreadsheet system which cut delivery errors by a third. From 2019 to 2021, customer service adviser at a call centre, handling about sixty calls a day. Education: bachelor's degree in business administration. Skills: advanced Excel; English, IELTS score of six point five; Uzbek and Russian. References available on request.", uz: "Dilnoza Rahimova. Profil: transport va mijozlarga xizmat ko'rsatish sohasida to'rt yillik tajribaga ega operatsiyalar yordamchisi. Tajriba: 2021-yildan beri Silkway Trading kompaniyasida (Toshkent) operatsiyalar yordamchisi. Uch kishilik jamoani boshqarganman, qirq mijoz uchun yetkazib berishni kuzatganman va yetkazib berishdagi xatolarni uchdan biriga kamaytirgan jadval tizimini joriy qilganman. 2019-2021 yillarda call-markazda mijozlar maslahatchisi, kuniga taxminan oltmish qo'ng'iroqni qabul qilganman. Ta'lim: biznesni boshqarish bo'yicha bakalavr. Ko'nikmalar: ilg'or Excel; ingliz tili, IELTS bahosi 6,5; o'zbek va rus tillari. Tavsiyanomalar so'rov bo'yicha taqdim etiladi." },
        { t: 'check', ex: { k: 'match', pairs: [['a degree or equivalent', 'bachelor\'s degree in business administration'], ['two years of relevant experience', 'four years in transport and customer service'], ['hands-on experience of delivery tracking', 'tracked deliveries for forty clients'], ['proficiency in Excel and English', 'advanced Excel and IELTS six point five']] } },
        { t: 'check', ex: { k: 'choice', q: "Which requirement does Dilnoza only partly meet?", opts: ['Being in charge of a team of four', 'Having a degree', 'Proficiency in Excel', 'Two years of experience'], a: 0, why: "E'londa **team of four**, CV da esa **team of three** — qisman mos." } },
        { t: 'tip', tone: 'info', md: "**Moslashtirish**: arizada talabni tajribangiz bilan bog'lang va **raqamlar** keltiring (*a team of three*, *by a third*). Kamchilikni yashirmang: *I have managed a team of three and I am ready to lead a larger one.*" },
      ],
    },
    {
      title: "CV tili va tipik xatolar",
      blocks: [
        { t: 'table', head: ['Ibora', 'Misol'], speak: [1], rows: [
          ['be in charge of + -ing / ot', 'I was in charge of training new staff.'],
          ['hands-on experience of / in', 'I have hands-on experience of managing deliveries.'],
          ['proficient in', 'I am proficient in Excel and English.'],
          ["Past Simple harakat fe'li", 'introduced, managed, handled, reduced, organised'],
          ['be responsible for + -ing', 'I am responsible for checking every order.'],
        ] },
        { t: 'compare',
          good: { title: "To'g'ri", items: ['I graduated from university in 2019.', 'I have four years\' experience.', 'I am writing to apply for the position.', 'I am proficient in Excel.'] },
          bad: { title: 'Xato', items: ['I am graduated university in 2019.', 'I have 4 years experience.', 'I am writing for apply for the position.', 'I am proficient at in Excel.'] } },
        { t: 'check', ex: { k: 'fix', wrong: 'I am writing for apply for the position of coordinator.', a: ['I am writing to apply for the position of coordinator.'], why: "Maqsad — **to + V1**: *I am writing to apply for…*" } },
        { t: 'check', ex: { k: 'fix', wrong: 'I am graduated from Tashkent University in 2019.', a: ['I graduated from Tashkent University in 2019.'], why: "**graduate** o'timli emas va *am graduated* shakli yo'q: **I graduated from…**" } },
        { t: 'check', ex: { k: 'fill', q: "I have hands-on experience ___ managing a small team.", a: ['of', 'in'], why: "**hands-on experience of / in + -ing**." } },
      ],
    },
    {
      title: "Yozing: ariza xulosasi",
      blocks: [
        { t: 'p', md: "Endi talablarni tajriba bilan bog'lab, **100-120 so'zli ariza xulosasi** yozing. Shu tuzilmadan foydalaning: **1) maqsad (I am writing to apply for…) → 2) tajriba (Present Perfect) → 3) bitta natija (Past Simple + raqam) → 4) til va ko'nikma → 5) yakun (I look forward to…)**." },
        { t: 'text', title: 'Model application summary', voice: 'emma', en: "I am writing to apply for the position of Customer Operations Coordinator. I have worked as an operations assistant for four years, and I have managed a team of three people. In my current role, I introduced a spreadsheet system which reduced delivery errors by a third, so I have hands-on experience of tracking deliveries. I am proficient in Excel, and my IELTS score of six point five shows that I can communicate clearly in English. I am particularly interested in leading a larger team, and I would welcome the opportunity to develop my skills with your company. I look forward to hearing from you.", uz: "Men Mijozlar bilan ishlash koordinatori lavozimiga ariza topshirish uchun yozyapman. To'rt yildan beri operatsiyalar yordamchisi bo'lib ishlayman va uch kishilik jamoani boshqarganman. Hozirgi lavozimimda yetkazib berishdagi xatolarni uchdan biriga kamaytirgan jadval tizimini joriy qildim, shuning uchun yetkazib berishni kuzatishda amaliy tajribam bor. Excelni yaxshi bilaman va IELTS bahom 6,5 ingliz tilida aniq muloqot qila olishimni ko'rsatadi. Ayniqsa kattaroq jamoani boshqarishga qiziqaman va kompaniyangizda ko'nikmalarimni rivojlantirish imkoniyatidan xursand bo'lardim. Javobingizni kutaman." },
        { t: 'check', ex: { k: 'tf', q: "In the model, the writer says exactly when she introduced the spreadsheet system (the year).", a: false, why: "Aniq yil aytilmagan; *In my current role, I introduced…* — natija esa Past Simple bilan." } },
        { t: 'tip', tone: 'good', md: "**Tekshiruv ro'yxati:** (1) 100-120 so'z; (2) kamida bitta *Present Perfect* (*I have managed*); (3) bitta raqamli natija; (4) *proficient in / in charge of / hands-on experience*dan kamida ikkitasi; (5) *I look forward to hearing…* bilan tugadi; (6) *I am graduated*, *writing for apply* xatolari yo'q." },
      ],
    },
  ],
  words: [
    { en: 'in charge of', uz: "rahbarlik qiladigan, mas'ul", ipa: 'ɪn ˈtʃɑːdʒ ɒv', pos: 'phrase', ex: 'Who is in charge of the new project?', exUz: "Yangi loyihaga kim mas'ul?" },
    { en: 'closing date', uz: 'topshirish muddati', ipa: 'ˈkləʊ.zɪŋ deɪt', pos: 'noun', ex: 'The closing date for applications is Friday.', exUz: "Arizalarni topshirish muddati — juma." },
    { en: 'responsibilities', uz: 'majburiyatlar, vazifalar', ipa: 'rɪˌspɒn.sɪˈbɪl.ə.tiz', pos: 'noun', ex: 'Your main responsibilities will include managing orders.', exUz: "Asosiy vazifalaringiz buyurtmalarni boshqarishni o'z ichiga oladi." },
    { en: 'candidate', uz: 'nomzod', ipa: 'ˈkæn.dɪ.dət', pos: 'noun', ex: 'Each candidate will be interviewed by two managers.', exUz: "Har bir nomzod bilan ikki menejer suhbatlashadi." },
    { en: 'competent', uz: 'malakali, o\'z ishini biladigan', ipa: 'ˈkɒm.pɪ.tənt', pos: 'adj', ex: 'She is a competent engineer who rarely makes mistakes.', exUz: "U kamdan-kam xato qiladigan malakali muhandis." },
    { en: 'feedback', uz: 'fikr-mulohaza, baho', ipa: 'ˈfiːd.bæk', pos: 'noun', ex: 'I always ask my manager for feedback after a project.', exUz: "Loyihadan keyin doim menejerimdan fikr-mulohaza so'rayman." },
  ],
  practice: [
    { k: 'match', pairs: [['candidate', 'nomzod'], ['in charge of', "rahbarlik qiladigan"], ['closing date', 'topshirish muddati'], ['feedback', 'fikr-mulohaza'], ['responsibilities', 'vazifalar']] },
    { k: 'choice', q: "The ___ for applications is the thirtieth of November, so we must hurry.", opts: ['closing date', 'opening hand', 'finish day', 'end line'], a: 0, why: "**closing date** — topshirish muddati." },
    { k: 'fill', q: "I am proficient ___ Excel and English. (preposition)", a: ['in'], why: "**proficient in**." },
    { k: 'listen', say: 'She is in charge of a team of four people.', opts: ['She is in charge of a team of four people.', 'She is in charge of a team of five people.', 'She was in charge of a team of four people.', 'She is in charge for a team of four people.'], a: 0 },
    { k: 'tf', q: "*I am graduated from Tashkent University.* — Gap to'g'ri.", a: false, why: "To'g'ri: **I graduated from Tashkent University.**" },
    { k: 'fix', wrong: 'I am writing for apply for the job.', a: ['I am writing to apply for the job.', "I'm writing to apply for the job."], why: "**to apply** — maqsad infinitivi." },
    { k: 'order', uz: "Mening to'rt yillik tajribam bor.", words: ['I', 'have', 'four', "years'", 'experience.'], extra: ['years', 'had'], why: "**four years' experience** yoki **four years of experience**." },
    { k: 'translate', uz: "Men yetkazib berishni kuzatishda amaliy tajribaga egaman.", a: ['I have hands-on experience of tracking deliveries.', 'I have hands-on experience in tracking deliveries.', 'I have hands-on experience of delivery tracking.', 'I have hands-on experience in delivery tracking.'], why: "**hands-on experience of / in**." },
    { k: 'choice', q: "Which sentence is most suitable for a CV or application?", opts: ["I introduced a new system which reduced errors by a third.", "I did some stuff with a system and it was good.", "I was the one who did everything.", "Errors got less because of me, I think."], a: 0, why: "Aniq harakat fe'li, natija va raqam — kuchli CV uslubi." },
    { k: 'dictation', say: 'I look forward to hearing from you.', a: ['I look forward to hearing from you.', "I'm looking forward to hearing from you.", 'I am looking forward to hearing from you.'], uz: "Javobingizni kutaman." },
    { k: 'fill', q: "Your main ___ will include handling customer queries. (noun: vazifalar)", a: ['responsibilities'], why: "**responsibilities** — ko'plik ot." },
    { k: 'choice', q: "After the project, my manager gave me useful ___ on my report.", opts: ['feedback', 'feedbacks', 'a feedback', 'feeding'], a: 0, why: "**feedback** sanalmaydi: *useful feedback*, ~~a feedback~~ / ~~feedbacks~~." },
    { k: 'fix', wrong: 'I have 4 years experience in sales.', a: ["I have four years' experience in sales.", 'I have four years of experience in sales.', "I have 4 years' experience in sales.", 'I have 4 years of experience in sales.'], why: "Egalik belgisi yoki **of**: *four years' experience / four years of experience*." },
    { k: 'tf', q: "A candidate is a person who applies for a job and may be interviewed.", a: true, why: "**candidate** — ishga ariza bergan va suhbatga chaqirilishi mumkin bo'lgan nomzod." },
    { k: 'choice', q: "Dilnoza has managed a team of three. The advert wants someone ___ a team of four.", opts: ['in charge of', 'in charge', 'charged of', 'at charge of'], a: 0, why: "**in charge of + ot**." },
    { k: 'speak', say: 'I am writing to apply for the position of Customer Operations Coordinator.', uz: "Mijozlar bilan ishlash koordinatori lavozimiga ariza topshirish uchun yozyapman." },
  ],
  quiz: [
    { k: 'choice', q: "I am writing ___ apply for the position of assistant.", opts: ['to', 'for', 'in order for', 'that'], a: 0, why: "**I am writing to apply for…**" },
    { k: 'choice', q: "She has ___ in the logistics industry.", opts: ["five years' experience", 'five years experiences', 'a five years experience', 'five year experience'], a: 0, why: "**experience** sanalmaydi: *five years' experience*." },
    { k: 'fill', q: "He is responsible ___ checking every invoice. (preposition)", a: ['for'], why: "**responsible for + -ing**." },
    { k: 'order', uz: "Men Excelni yaxshi bilaman.", words: ['I', 'am', 'proficient', 'in', 'Excel.'], extra: ['at', 'proficiency'], why: "**proficient in**." },
    { k: 'fix', wrong: 'I am graduated from the university in 2020.', a: ['I graduated from the university in 2020.', 'I graduated from university in 2020.'], why: "**I graduated from…**" },
    { k: 'listen', say: 'Please send your CV and a short cover letter.', opts: ['Please send your CV and a short cover letter.', 'Please send your CV and a long cover letter.', 'Please send my CV and a short cover letter.', 'Please sent your CV and a short cover letter.'], a: 0 },
    { k: 'tf', q: "The closing date is the last day when you can send your application.", a: true, why: "**closing date** — topshirish muddati." },
    { k: 'translate', uz: "Men to'rt kishilik jamoaga rahbarlik qilganman.", a: ['I have been in charge of a team of four.', 'I was in charge of a team of four.', 'I have managed a team of four.', 'I managed a team of four.', 'I have led a team of four.', 'I led a team of four.'], why: "**in charge of / managed / led** — rahbarlik qilmoq." },
  ],
  summary: [
    "Ish e'lonida uch narsani toping: **responsibilities, requirements, closing date**; keyin CV dagi tajriba bilan solishtiring.",
    "CV iboralari: **in charge of, hands-on experience of, proficient in, be responsible for + -ing**; harakat fe'llari Past Simple da (*introduced, managed*).",
    "Xatolar: *I am graduated* → **I graduated**; *writing for apply* → **writing to apply**; *4 years experience* → **four years' experience**.",
    "Ariza xulosasi (100-120 so'z): maqsad → tajriba (Present Perfect) → raqamli natija → ko'nikma → **I look forward to hearing from you**.",
    "Yangi so'zlar: **in charge of, closing date, responsibilities, candidate, competent, feedback**.",
  ],
  homework: "Haqiqiy yoki o'ylab topilgan ish e'lonini tanlang va o'zingiz uchun 100-120 so'zli ariza xulosasi yozing. Kamida ikkita talabni raqamli natija bilan bog'lang, so'ng so'zlarni sanab chiqing.",
};

export default lesson;
