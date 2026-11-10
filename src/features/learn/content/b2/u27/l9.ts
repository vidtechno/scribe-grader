import type { Lesson } from '../../../types';

// Mini lesson (situation): a job interview. Present perfect for experience, STAR answers, gerund/infinitive in answers, questions at the end.
const lesson: Lesson = {
  id: 'u27-l9',
  title: 'A job interview',
  titleUz: 'Ishga intervyu: tajriba va kuchli tomonlaringiz haqida gapirish',
  mini: true,
  kind: 'situation',
  goal: "Ishga intervyuda **Tell me about yourself**, **strengths / weaknesses**, **Why this job?** kabi savollarga **STAR** tuzilmasi bilan javob berasiz, tajribani **Present Perfect** bilan aytasiz, gerund va infinitiv qoliplarini to'g'ri ishlatasiz va oxirida o'zingiz savol berasiz.",
  slides: [
    {
      title: "Intervyuda nima so'raladi?",
      blocks: [
        { t: 'p', md: "Ingliz tilidagi intervyuda ish beruvchi sizning **tajribangiz, xarakteringiz va rejalaringiz** haqida bir xil savollarni so'raydi. Tayyor javob boshlanishi bo'lsa, ishonchli gapirasiz." },
        { t: 'table', head: ['Savol', 'Javob boshlanishi'], speak: [0, 1], rows: [
          ['Tell me about yourself.', "I'm a marketing assistant with three years of experience in retail."],
          ['What are your strengths?', "I'm self-motivated, and I take the initiative when something goes wrong."],
          ['What is your main weakness?', "I used to find it hard to delegate, but I've been working on it."],
          ['Why do you want this job?', "I'd like to develop my skills in a larger team."],
          ['Where do you see yourself in five years?', "I hope to be leading a small team by then."],
        ] },
        { t: 'tip', tone: 'info', md: "**Weakness** haqida gapirganda haqiqiy, lekin jiddiy bo'lmagan kamchilikni ayting va **uni qanday tuzatayotganingizni** qo'shing: *I've been working on it.* Faqat *I have no weaknesses* demang, bu ishonchsiz eshitiladi." },
        { t: 'check', ex: { k: 'choice', q: "Which is the best answer to *What is your main weakness?*", opts: ["I sometimes spend too long on details, so I now set a time limit for each task.", "I have no weaknesses at all.", "I am always late and I do not care.", "I do not want to answer this question."], a: 0, why: "Yaxshi javob: kichik kamchilik + uni tuzatish usuli. Boshqa javoblar ishonchsiz yoki beparvo eshitiladi." } },
      ],
    },
    {
      title: "STAR va Present Perfect",
      blocks: [
        { t: 'p', md: "Tajriba haqidagi savollarda (*Tell me about a time when…*) **STAR** usuli yordam beradi: voqeani to'rt qadamda aytasiz." },
        { t: 'table', head: ['Qadam', 'Nimani aytasiz', 'Misol'], speak: [2], rows: [
          ['Situation', 'Vaziyat', 'Last year our main supplier closed without warning.'],
          ['Task', 'Sizning vazifangiz', 'I had to find a new supplier within two weeks.'],
          ['Action', 'Siz nima qildingiz', 'I contacted six companies and negotiated a better price.'],
          ['Result', 'Natija', 'We saved ten per cent and never missed a delivery.'],
        ] },
        { t: 'examples', items: [
          { en: "I've worked in logistics for four years.", uz: "Men to'rt yildan beri logistikada ishlayman.", note: "**Present Perfect** (*have worked*) + **for / since**: tajriba hozirgacha davom etadi." },
          { en: "I've managed a team of six people.", uz: "Men olti kishilik jamoani boshqarganman.", note: "Aniq vaqt aytilmagan tajriba: **Present Perfect**." },
          { en: "In 2022 I introduced a new filing system.", uz: "2022-yilda yangi hujjat tizimini joriy qildim.", note: "Aniq vaqt (*in 2022*) bor: **Past Simple**. STAR ning *Action* va *Result* qismi ham odatda Past Simple." },
        ] },
        { t: 'tip', tone: 'warn', md: "Aniq vaqt bilan **Present Perfect** ishlatilmaydi: *I have graduated in 2021* xato → *I graduated in 2021*." },
        { t: 'check', ex: { k: 'fill', q: "I ___ for this company since 2019. (work)", a: ['have worked', "'ve worked", 'have been working', "'ve been working"], why: "**since 2019** — hozirgacha davom etadi: **have worked / have been working**." } },
      ],
    },
    {
      title: "Gerund va infinitiv javoblarda",
      blocks: [
        { t: 'table', head: ['Qolip', 'Misol'], speak: [1], rows: [
          ['good at + -ing', "I'm good at explaining complex ideas simply."],
          ['enjoy + -ing', 'I enjoy solving problems with other people.'],
          ['be responsible for + -ing', 'I was responsible for training new staff.'],
          ["would like + to + V1", "I'd like to develop my management skills."],
          ['manage + to + V1', 'I managed to reduce complaints by a third.'],
          ['look forward to + -ing', 'I look forward to working with your team.'],
        ] },
        { t: 'tip', tone: 'info', md: "Predlogdan keyin har doim **-ing**. *look forward to* dagi **to** — predlog, shuning uchun *look forward to meeting you*, *to meet* emas." },
        { t: 'check', ex: { k: 'choice', q: "I'm looking forward ___ you again next week.", opts: ['to seeing', 'to see', 'seeing', 'for seeing'], a: 0, why: "*look forward to* dagi **to** predlog → **-ing**." } },
        { t: 'p', md: "Intervyu oxirida deyarli har doim **savol beriladi**. Bu qiziqish ko'rsatadi:" },
        { t: 'examples', items: [
          { en: "What would a typical day in this role look like?", uz: "Bu lavozimda odatiy kun qanday o'tadi?" },
          { en: "Could you tell me more about the team I would be working with?", uz: "Men ishlaydigan jamoa haqida batafsilroq aytib bera olasizmi?" },
          { en: "What are the next steps in the process?", uz: "Jarayonning keyingi bosqichlari qanday?" },
        ] },
      ],
    },
    {
      title: "Tipik xatolar (o'zbek tilidan)",
      blocks: [
        { t: 'p', md: "O'zbek tilida *2020-yildan beri ishlayman* deymiz, shuning uchun inglizchada ham oddiy hozirgi zamonni ishlatamiz. Yana *-da yaxshi* ni *good in* deb tarjima qilamiz." },
        { t: 'compare',
          good: { title: "To'g'ri", items: ["I've worked here since 2020.", 'I graduated in 2021.', "I'm good at working with people.", 'I look forward to meeting you.'] },
          bad: { title: 'Xato', items: ['I work here since 2020.', 'I have graduated in 2021.', "I'm good in work with people.", 'I look forward to meet you.'] } },
        { t: 'check', ex: { k: 'fix', wrong: 'I work in this company since 2020.', a: ["I've worked in this company since 2020.", 'I have worked in this company since 2020.', "I've been working in this company since 2020.", 'I have been working in this company since 2020.', "I've worked for this company since 2020.", 'I have worked for this company since 2020.'], why: "**since** bilan hozirgacha davom etgan holat: **Present Perfect**." } },
        { t: 'check', ex: { k: 'fix', wrong: "I'm good in work with people.", a: ["I'm good at working with people.", 'I am good at working with people.'], why: "**good at** + **-ing**." } },
        { t: 'check', ex: { k: 'tf', q: "*I have finished my degree in 2021.* — Gap to'g'ri.", a: false, why: "Aniq vaqt (*in 2021*) → **Past Simple**: *I finished my degree in 2021.*" } },
      ],
    },
    {
      title: "O'qing va tinglang",
      blocks: [
        { t: 'text', title: 'How I prepared for my interview', voice: 'george', en: "Last month I was shortlisted for a project coordinator job, and I wanted to be ready. First, I wrote down three stories about my track record, using the STAR method. For example, I described a time when our team was short of staff and I took the initiative to reorganise the schedule. Then I practised answering questions out loud, because I am not very good at speaking about myself. I also prepared two questions for the end. In the interview, I stayed calm, and I managed to give clear examples. I haven't heard the result yet, but I'm glad I prepared.", uz: "O'tgan oy meni loyiha koordinatori lavozimiga qisqa ro'yxatga kiritishdi va men tayyor bo'lishni xohladim. Avval STAR usulidan foydalanib, o'z yutuqlarim haqida uchta hikoya yozdim. Masalan, jamoamizda xodim yetishmagan vaqtni tasvirladim, o'shanda men jadvalni qayta tuzishda tashabbus ko'rsatgandim. Keyin savollarga ovoz chiqarib javob berishni mashq qildim, chunki o'zim haqimda gapirishga unchalik usta emasman. Oxiri uchun ikkita savol ham tayyorladim. Intervyuda xotirjam turdim va aniq misollar keltirishga erishdim. Hali natijani eshitmadim, lekin tayyorlanganimdan xursandman." },
        { t: 'check', ex: { k: 'tf', q: 'The speaker has already got the job.', a: false, why: "*I haven't heard the result yet.*" } },
        { t: 'dialog', lines: [
          { who: 'Helen', en: "Thank you for coming, Karim. Could you tell me about yourself?", uz: "Kelganingiz uchun rahmat, Karim. O'zingiz haqingizda aytib bera olasizmi?" },
          { who: 'Karim', en: "Of course. I'm a sales assistant, and I've worked in retail for three years.", uz: "Albatta. Men savdo yordamchisiman va uch yildan beri chakana savdoda ishlayman." },
          { who: 'Helen', en: "What would you say is your biggest strength?", uz: "Eng katta kuchli tomoningiz nima deb o'ylaysiz?" },
          { who: 'Karim', en: "I'm self-motivated. Last year our manager left, and I took the initiative to train the new staff.", uz: "Men o'zimni o'zim rag'batlantiraman. O'tgan yili menejerimiz ketdi va men yangi xodimlarni o'rgatishda tashabbus ko'rsatdim." },
          { who: 'Helen', en: "And where do you see yourself in five years?", uz: "Besh yildan keyin o'zingizni qayerda ko'rasiz?" },
          { who: 'Karim', en: "I hope to be managing a small team. Could I ask what the next steps are?", uz: "Kichik jamoani boshqarayotgan bo'lishga umid qilaman. Keyingi bosqichlar qanday ekanini so'rasam bo'ladimi?" },
        ] },
        { t: 'check', ex: { k: 'choice', q: 'What did Karim do when the manager left?', opts: ['He trained the new staff.', 'He left the company.', 'He asked for a promotion.', 'He closed the shop.'], a: 0, why: "*I took the initiative to train the new staff.*" } },
      ],
    },
  ],
  words: [
    { en: 'track record', uz: "o'tgan yutuqlar, natijalar tarixi", ipa: 'ˈtræk ˌrekɔːd', pos: 'noun', ex: 'She has a strong track record in sales.', exUz: "Uning savdoda kuchli natijalar tarixi bor." },
    { en: 'take the initiative', uz: "tashabbus ko'rsatmoq", ipa: 'teɪk ði ɪˈnɪʃ.ə.tɪv', pos: 'phrase', ex: 'When the system failed, he took the initiative and called the supplier.', exUz: "Tizim ishdan chiqqanda, u tashabbus ko'rsatib yetkazib beruvchiga qo'ng'iroq qildi." },
    { en: 'work under pressure', uz: 'bosim ostida ishlamoq', ipa: 'wɜːk ˈʌn.də ˈpreʃ.ə', pos: 'phrase', ex: 'The job requires someone who can work under pressure.', exUz: "Bu ish bosim ostida ishlay oladigan odamni talab qiladi." },
    { en: 'self-motivated', uz: "o'zini o'zi rag'batlantiradigan", ipa: 'ˌself ˈməʊ.tɪ.veɪ.tɪd', pos: 'adj', ex: 'We need a self-motivated person who does not need constant supervision.', exUz: "Bizga doimiy nazoratga muhtoj bo'lmagan, o'zini o'zi rag'batlantiradigan odam kerak." },
    { en: 'be shortlisted', uz: "qisqa ro'yxatga kiritilmoq", ipa: 'bi ˈʃɔːt.lɪs.tɪd', pos: 'phrase', ex: 'Five applicants were shortlisted for the final interview.', exUz: "Besh nafar nomzod yakuniy intervyu uchun qisqa ro'yxatga kiritildi." },
    { en: 'team player', uz: "jamoada yaxshi ishlaydigan odam", ipa: 'tiːm ˈpleɪ.ə', pos: 'noun', ex: 'I am a good team player and I listen to other people.', exUz: "Men jamoada yaxshi ishlayman va boshqalarni tinglayman." },
  ],
  practice: [
    { k: 'match', pairs: [['track record', "o'tgan yutuqlar tarixi"], ['take the initiative', "tashabbus ko'rsatmoq"], ['work under pressure', 'bosim ostida ishlamoq'], ['self-motivated', "o'zini o'zi rag'batlantiradigan"], ['be shortlisted', "qisqa ro'yxatga kiritilmoq"]] },
    { k: 'choice', q: "I ___ in sales since 2019.", opts: ['have worked', 'worked', 'work', 'am worked'], a: 0, why: "**since 2019** — hozirgacha davom etadi: **have worked**." },
    { k: 'fill', q: "Last year I ___ a new system that saved the team two hours a day. (introduce)", a: ['introduced'], why: "**Last year** — aniq o'tgan vaqt: **Past Simple**." },
    { k: 'listen', say: "I'm good at working under pressure.", opts: ["I'm good at working under pressure.", "I'm good in working under pressure.", "I'm good at work under pressure.", "I was good at working under pressure."], a: 0 },
    { k: 'tf', q: "*I look forward to work with your team.* — Gap to'g'ri.", a: false, why: "*look forward to* dagi **to** predlog: **look forward to working**." },
    { k: 'order', uz: "Men boshqaruv ko'nikmalarimni rivojlantirmoqchiman.", words: ['I', 'would', 'like', 'to', 'develop', 'my', 'management', 'skills.'], extra: ['developing', 'for'], alt: [["I'd", 'like', 'to', 'develop', 'my', 'management', 'skills.']], why: "**would like + to + V1**." },
    { k: 'fix', wrong: 'I am working here since 2020.', a: ["I've worked here since 2020.", 'I have worked here since 2020.', "I've been working here since 2020.", 'I have been working here since 2020.'], why: "**since** + hozirgacha davom etgan holat: **Present Perfect**." },
    { k: 'choice', q: "Which is the best answer to *Where do you see yourself in five years?*", opts: ["I hope to be managing a small team.", "I see myself to be a manager.", "I am manager since five years.", "I don't know, maybe nothing."], a: 0, why: "**hope to be + -ing / hope to + V1** to'g'ri; *see myself to be* xato (**see myself as / doing**)." },
    { k: 'translate', uz: "Men sizning jamoangiz bilan ishlashni intiqlik bilan kutaman.", a: ['I look forward to working with your team.', "I'm looking forward to working with your team.", 'I am looking forward to working with your team.'], why: "**look forward to + -ing**." },
    { k: 'dictation', say: 'I have managed a team of six people for two years.', a: ['I have managed a team of six people for two years.', "I've managed a team of six people for two years."], uz: "Men ikki yildan beri olti kishilik jamoani boshqaraman." },
    { k: 'choice', q: "When the printer broke, Anna ___ the initiative and ordered a new one.", opts: ['took', 'made', 'did', 'got'], a: 0, why: "Qat'iy birikma: **take the initiative**." },
    { k: 'fix', wrong: "I'm good in work with people.", a: ["I'm good at working with people.", 'I am good at working with people.'], why: "**good at** + **-ing**." },
    { k: 'tf', q: "*I have graduated in 2021.* — Gap to'g'ri.", a: false, why: "Aniq vaqt (*in 2021*) bilan **Past Simple**: *I graduated in 2021.*" },
    { k: 'choice', q: "Which is a good question to ask at the end of an interview?", opts: ["What would a typical day in this role look like?", "So, do I have the job already?", "Why did you ask me so many questions?", "Can I leave early on Fridays?"], a: 0, why: "Yaxshi savol roli va ishga qiziqish ko'rsatadi; boshqalari befarq yoki noo'rin eshitiladi." },
    { k: 'speak', say: "I'm a marketing assistant with three years of experience, and I'd like to take the next step in my career.", uz: "Men marketing yordamchisiman, uch yillik tajribam bor va karyeramda keyingi qadamni qo'ymoqchiman." },
  ],
  quiz: [
    { k: 'choice', q: "I ___ my first manager job in 2020.", opts: ['got', 'have got', 'have been getting', 'am getting'], a: 0, why: "Aniq vaqt (*in 2020*) → **Past Simple**." },
    { k: 'choice', q: "She has a strong track ___ in customer service.", opts: ['record', 'result', 'line', 'story'], a: 0, why: "**track record** — qat'iy birikma." },
    { k: 'fill', q: "He's very good ___ negotiating with suppliers.", a: ['at'], why: "**good at** + **-ing**." },
    { k: 'choice', q: "I look forward ___ from you soon.", opts: ['to hearing', 'to hear', 'for hearing', 'hear'], a: 0, why: "*look forward to* + **-ing**." },
    { k: 'order', uz: "Men uch yildan beri bu kompaniyada ishlayman.", words: ['I', 'have', 'worked', 'for', 'this', 'company', 'for', 'three', 'years.'], extra: ['work', 'since'], alt: [["I've", 'worked', 'for', 'this', 'company', 'for', 'three', 'years.']], why: "**for + muddat** bilan **Present Perfect**." },
    { k: 'fix', wrong: 'Yesterday I have met the manager.', a: ['Yesterday I met the manager.'], why: "**Yesterday** — aniq o'tgan vaqt: **Past Simple**." },
    { k: 'listen', say: 'What are the next steps in the process?', opts: ['What are the next steps in the process?', 'What was the next step in the process?', 'What are the last steps in the process?', 'Where are the next steps in the process?'], a: 0 },
    { k: 'tf', q: "In a STAR answer, the *Result* part tells what happened after your action.", a: true, why: "**Result** — harakatingiz natijasi (raqam yoki aniq foyda bo'lsa yaxshi)." },
    { k: 'translate', uz: "Men bosim ostida yaxshi ishlayman.", a: ['I work well under pressure.', "I'm good at working under pressure.", 'I am good at working under pressure.', 'I can work well under pressure.', 'I can work under pressure.'], why: "**work (well) under pressure** — bosim ostida ishlamoq." },
  ],
  summary: [
    "Intervyu savollariga **STAR** bilan javob bering: *Situation, Task, Action, Result*.",
    "Tajriba va davomiylik: **Present Perfect** (*I've worked here for three years*); aniq vaqt bo'lsa **Past Simple** (*in 2021 I introduced…*).",
    "Predlogdan keyin **-ing**: *good at working*, *responsible for training*, *look forward to meeting*. **would like / manage** dan keyin **to + V1**.",
    "Oxirida savol bering: *What would a typical day look like?*, *What are the next steps?*",
    "Yangi so'zlar: **track record, take the initiative, work under pressure, self-motivated, be shortlisted, team player**.",
  ],
  homework: "STAR usulida bitta o'z tajribangiz haqida 4 gaplik javob yozing (Situation, Task, Action, Result), keyin uni ovoz chiqarib yozib oling va eshiting. Intervyu oxiri uchun 2 ta savol tayyorlang.",
};

export default lesson;
