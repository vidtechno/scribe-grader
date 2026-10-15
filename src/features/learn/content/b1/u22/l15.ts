import type { Lesson } from '../../../types';

// Mini lesson (skill): reading a job advert and writing a cover email. Builds on l7 (formal email), l1, l12, l2-l3.
const lesson: Lesson = {
  id: 'u22-l15',
  title: 'Reading and writing: a job advert and cover email',
  titleUz: "O'qish va yozish: e'lon va qo'shimcha xat",
  mini: true,
  kind: 'skill',
  goal: "Ish e'lonini o'qib, **talablar va shartlarni** topasiz, so'ng e'longa mos **qo'shimcha xat** (cover email) yozasiz: nega nomzod ekaningizni, tajribangizni va qachon boshlay olishingizni aytasiz.",
  slides: [
    {
      title: "O'qing: ish e'loni",
      blocks: [
        { t: 'p', md: "E'lonni o'qiyotganda **3 narsani toping**: 1) **lavozim** (qaysi ish), 2) **talablar** (nima kerak), 3) **ariza topshirish usuli va muddati**. Har so'zni tarjima qilish shart emas." },
        { t: 'text', title: 'Vacancy: Customer Support Assistant', en: "We are looking for a friendly Customer Support Assistant to join our small online team. You will answer customers' questions by email and chat, and you will help us to improve our service. Requirements: good written English, a basic knowledge of computers, and the ability to work in a team. Experience in a similar job is an advantage, but we will give full training. The job is full-time, and you will be able to work from home two days a week. To apply, please send your CV and a short cover email to the address below by 30 November.", uz: "Biz kichik onlayn jamoamizga qo'shiladigan xushmuomala mijozlarni qo'llab-quvvatlash yordamchisini qidiryapmiz. Siz mijozlarning savollariga elektron pochta va chat orqali javob berasiz va xizmatimizni yaxshilashga yordam berasiz. Talablar: yaxshi yozma ingliz tili, kompyuterlar bo'yicha oddiy bilim va jamoada ishlash qobiliyati. Shunga o'xshash ishdagi tajriba afzallik hisoblanadi, lekin biz to'liq o'qitamiz. Ish to'liq stavka, haftasiga ikki kun uydan ishlashingiz mumkin. Ariza berish uchun, iltimos, rezyume va qisqa qo'shimcha xatni quyidagi manzilga 30-noyabrgacha yuboring." },
        { t: 'check', ex: { k: 'choice', q: 'How can the employee work from home?', opts: ['Two days a week', 'Every day', 'Never', 'Only at weekends'], a: 0, why: "*work from home two days a week*." } },
        { t: 'check', ex: { k: 'tf', q: 'Previous experience in a similar job is required.', a: false, why: "Tajriba afzallik (*an advantage*), majburiy emas." } },
      ],
    },
    {
      title: "Qo'shimcha xat tuzilishi",
      blocks: [
        { t: 'p', md: "**Cover email** — qisqa (taxminan 120-180 so'z) rasmiy xat. Rezyumeni takrorlamang, balki nega aynan siz mos ekaningizni ko'rsating. Tuzilish:" },
        { t: 'table', head: ['Qism', 'Nima yoziladi', 'Ibora'], speak: [2], rows: [
          ['1. Salomlashish', 'Ismi ma\'lum bo\'lsa — Dear Ms Clark', 'Dear Ms Clark,'],
          ['2. Sabab', 'Qaysi ish uchun yozyapsiz', 'I am writing to apply for the position of Customer Support Assistant.'],
          ['3. Nega siz', 'Tajriba va ko\'nikma', 'I have two years\' experience of working with customers.'],
          ['4. Nega bu kompaniya', 'Qiziqish', 'I am interested in working for your company because I want to learn more about online services.'],
          ['5. Mavjudlik', 'Qachon boshlay olasiz', 'I am available to start in January.'],
          ['6. Tugatish', 'Minnatdorchilik va umid', 'I look forward to hearing from you.'],
          ['7. Imzo', 'Rasmiy tugatish', 'Yours sincerely, Dilnoza Karimova'],
        ] },
        { t: 'tip', tone: 'info', md: "Ism ma'lum bo'lsa — **Dear Ms Clark** ... **Yours sincerely**. Ism noma'lum bo'lsa — **Dear Sir or Madam** ... **Yours faithfully**." },
        { t: 'check', ex: { k: 'choice', q: 'You start with "Dear Sir or Madam". How do you end?', opts: ['Yours faithfully', 'Yours sincerely', 'See you', 'Bye bye'], a: 0, why: "**Dear Sir or Madam** → **Yours faithfully**." } },
      ],
    },
    {
      title: 'Namuna xat',
      blocks: [
        { t: 'text', title: 'A cover email', en: "Dear Ms Clark, I am writing to apply for the position of Customer Support Assistant, which I saw on your website. I have worked for two years as a shop assistant, where I enjoyed helping customers and solving problems. I am good at writing clear emails, and I use computers every day. I am interested in working for your company because it is growing fast, and I would like to learn new skills. I am available to start in January. I have attached my CV. I look forward to hearing from you. Yours sincerely, Dilnoza Karimova", uz: "Hurmatli Klark xonim, saytingizda ko'rgan mijozlarni qo'llab-quvvatlash yordamchisi lavozimiga ariza bilan yozyapman. Men ikki yil do'konda sotuvchi bo'lib ishlaganman, u yerda mijozlarga yordam berishni va muammolarni yechishni yaxshi ko'rardim. Men aniq xatlar yozishni yaxshi bilaman va har kuni kompyuterdan foydalanaman. Sizning kompaniyangizda ishlashga qiziqaman, chunki u tez o'syapti va men yangi ko'nikmalarni o'rganmoqchiman. Men yanvardan boshlay olaman. Rezyumemni biriktirdim. Javobingizni kutaman. Hurmat bilan, Dilnoza Karimova." },
        { t: 'check', ex: { k: 'fill', q: 'I look forward ___ hearing from you.', a: ['to'], uz: "Javobingizni intizorlik bilan kutaman.", why: "**look forward to** + -ing." } },
        { t: 'check', ex: { k: 'choice', q: 'What did Dilnoza do before?', opts: ['She worked as a shop assistant.', 'She was a teacher.', 'She was a student only.', 'She worked in a bank.'], a: 0, why: "*worked for two years as a shop assistant*." } },
      ],
    },
    {
      title: 'Endi yozing',
      blocks: [
        { t: 'p', md: "E'lon: **Library Assistant** (kutubxona yordamchisi). Talablar: sabr-toqatli, tartibli, kitoblarni yaxshi ko'radigan. Quyidagi rejaga ko'ra 6-8 gap yozing:" },
        { t: 'table', head: ['Gap', 'Qolip'], speak: [1], rows: [
          ['1', 'I am writing to apply for the position of…'],
          ['2', 'I have (experience / a degree) in…'],
          ['3', 'I am good at… and I enjoy…'],
          ['4', 'I am interested in this job because…'],
          ['5', 'I am available to start…'],
          ['6', 'I look forward to hearing from you.'],
        ] },
        { t: 'tip', tone: 'good', md: "Tekshiring: **rasmiy so'zlar** (*I would like to…*, ikki so'zni qisqartirmang: *I am*, *I would*), **-ing** (*good at working, interested in learning*), **maqsad** (*to improve*), imlo va **Yours sincerely / faithfully**." },
        { t: 'check', ex: { k: 'order', uz: "Men kutubxonachi lavozimiga ariza bilan yozyapman.", words: ['I', 'am', 'writing', 'to', 'apply', 'for', 'the', 'position', 'of', 'librarian.'], extra: ['of', 'applying'], why: "**I am writing to apply for…**" } },
        { t: 'check', ex: { k: 'fix', wrong: 'I am interesting in work in your library.', a: ['I am interested in working in your library.', 'I am interested in working at your library.'], hint: 'interested + in + ?', why: "**interested in working**." } },
      ],
    },
  ],
  words: [
    { en: 'vacancy', uz: "bo'sh ish o'rni", ipa: 'ˈveɪ.kən.si', pos: 'noun', ex: 'There is a vacancy in our marketing team.', exUz: "Marketing jamoamizda bo'sh ish o'rni bor." },
    { en: 'requirement', uz: 'talab', ipa: 'rɪˈkwaɪə.mənt', pos: 'noun', ex: 'Good English is a requirement for this job.', exUz: "Bu ish uchun yaxshi ingliz tili talab qilinadi." },
    { en: 'applicant', uz: 'nomzod, ariza beruvchi', ipa: 'ˈæp.lɪ.kənt', pos: 'noun', ex: 'There were fifty applicants for the job.', exUz: "Ish uchun ellik nomzod bor edi." },
    { en: 'relevant', uz: "tegishli, mos", ipa: 'ˈrel.ə.vənt', pos: 'adj', ex: 'Do you have any relevant experience?', exUz: "Sizda mos tajriba bormi?" },
    { en: 'qualified', uz: 'malakali, layoqatli', ipa: 'ˈkwɒl.ɪ.faɪd', pos: 'adj', ex: 'She is qualified to teach English.', exUz: 'U ingliz tilini o\'qitishga malakali.' },
  ],
  practice: [
    { k: 'match', pairs: [['vacancy', "bo'sh ish o'rni"], ['requirement', 'talab'], ['applicant', 'nomzod'], ['relevant', 'tegishli, mos'], ['suitable', 'munosib']] },
    { k: 'choice', q: 'I am writing ___ apply for the job.', opts: ['to', 'for', 'that', 'in order'], a: 0, why: "Maqsad: **to apply**." },
    { k: 'choice', q: 'I look forward to ___ from you.', opts: ['hearing', 'hear', 'heard', 'be hearing'], a: 0, why: "**look forward to** + -ing." },
    { k: 'fill', q: 'I am interested ___ working for your company.', a: ['in'], uz: "Kompaniyangizda ishlashga qiziqaman.", why: "**interested in** + -ing." },
    { k: 'fill', q: 'I am available ___ start in January.', a: ['to'], uz: "Men yanvardan boshlay olaman.", why: "**available to start**." },
    { k: 'fill', q: 'Dear Sir or Madam ... Yours ___', a: ['faithfully'], uz: "Hurmat bilan (ism noma'lum bo'lsa).", why: "Dear Sir or Madam → **Yours faithfully**." },
    { k: 'order', uz: "Men bu lavozim uchun mos tajribaga egaman.", words: ['I', 'have', 'relevant', 'experience', 'for', 'this', 'position.'], extra: ['relevance', 'at'], why: "**relevant experience**." },
    { k: 'order', uz: "Rezyumemni biriktirdim.", words: ['I', 'have', 'attached', 'my', 'CV.'], extra: ['attach', 'is'], alt: [["I've", 'attached', 'my', 'CV.']], why: "Present Perfect: **have attached**." },
    { k: 'fix', wrong: "I'm writing for apply to the position of assistant.", a: ['I am writing to apply for the position of assistant.', "I'm writing to apply for the position of assistant."], hint: 'maqsad va predlog', why: "**to apply for** the position." },
    { k: 'fix', wrong: 'I am good in write emails.', a: ['I am good at writing emails.', "I'm good at writing emails."], why: "**good at** + -ing." },
    { k: 'translate', uz: "Javobingizni kutaman.", a: ['I look forward to hearing from you.'], why: "Qat'iy ibora." },
    { k: 'dictation', say: 'I am writing to apply for the position of Customer Support Assistant.', a: ['I am writing to apply for the position of Customer Support Assistant.', "I'm writing to apply for the position of Customer Support Assistant."], why: "Tinglab yozing." },
  ],
  quiz: [
    { k: 'choice', q: 'Which opening is best for a cover email?', opts: ['I am writing to apply for the position of assistant.', 'Hi! I want a job.', 'Hello, give me the job.', 'Yo, job please.'], a: 0, why: "Rasmiy kirish." },
    { k: 'choice', q: 'You know the manager\'s name is Mr Hill. How do you end the email?', opts: ['Yours sincerely', 'Yours faithfully', 'Love', 'Cheers'], a: 0, why: "Ism ma'lum → **Yours sincerely**." },
    { k: 'fill', q: 'There is a ___ for a receptionist at our office.', a: ['vacancy'], uz: "Ofisimizda qabulxona xodimi uchun bo'sh ish o'rni bor.", why: "**vacancy**." },
    { k: 'fill', q: 'Good communication is a ___ for this job.', a: ['requirement'], uz: "Yaxshi muloqot bu ish uchun talab.", why: "**requirement**." },
    { k: 'fix', wrong: "I'm interested to work in your company.", a: ["I'm interested in working in your company.", 'I am interested in working in your company.', "I'm interested in working for your company.", 'I am interested in working for your company.'], why: "**interested in working**." },
    { k: 'order', uz: "Men ikki yillik tajribaga egaman.", words: ['I', 'have', 'two', "years'", 'experience.'], extra: ['years', 'for'], alt: [['I', 'have', 'two', 'years', 'of', 'experience.']], why: "**two years' experience**." },
    { k: 'tf', q: 'In a formal cover email you should write "Hi mate".', a: false, why: "Rasmiy xatda norasmiy salomlashmang." },
    { k: 'translate', uz: "Men yanvardan boshlay olaman.", a: ['I am available to start in January.', "I'm available to start in January.", 'I can start in January.'], why: "**available to start**." },
  ],
  summary: [
    "E'longa qarab **lavozim, talablar va muddatni** toping. Tajriba *an advantage* bo'lsa, bu majburiy emas.",
    "Cover email: **Dear…**, **I am writing to apply for…**, tajriba, qiziqish, **I am available to start…**, **I look forward to hearing from you**.",
    "Ism ma'lum: **Yours sincerely**; ism noma'lum (*Dear Sir or Madam*): **Yours faithfully**.",
    "To'g'ri qoliplar: **good at + -ing**, **interested in + -ing**, **look forward to + -ing**, **to apply for**.",
  ],
  homework: "Haqiqiy ish e'lonini toping va qo'shimcha xat yozing (120-150 so'z). Yozib bo'lgach, rasmiy ohangni, -ing shakllarini va imloni tekshiring.",
};

export default lesson;
