import type { Lesson } from '../../../types';

// Mini lesson (situation): a job interview. Uses gerund / infinitive (l1), purpose (l12), future forms (l2-l3), comparing (l4), certainty (l13).
const lesson: Lesson = {
  id: 'u22-l9',
  title: 'A job interview',
  titleUz: "Ish suhbati: o'zingiz va rejalaringiz haqida",
  mini: true,
  kind: 'situation',
  goal: "Ish suhbatida o'zingiz haqingizda aytasiz (*I'm good at solving problems*), kuchli va zaif tomonlaringizni tushuntirasiz, **Where do you see yourself in five years?** savoliga rejangiz bilan javob berasiz va oxirida o'zingiz savol berasiz.",
  slides: [
    {
      title: 'Tell me about yourself',
      blocks: [
        { t: 'p', md: "Suhbat deyarli har doim shu savol bilan boshlanadi. Javobingiz **30-60 soniya** bo'lsin: **hozirgi ish yoki o'qish**, **tajriba**, **nega bu ish**. Tarjimai hol aytib bermang, asosiysini ayting." },
        { t: 'examples', items: [
          { en: 'I\'m a marketing assistant. I\'ve been working in a small company for three years.', uz: "Men marketing yordamchisiman. Uch yildan beri kichik kompaniyada ishlayman.", note: 'Present Perfect Continuous: davomiylik' },
          { en: 'I\'m good at working in a team, and I enjoy solving problems.', uz: "Men jamoada ishlashni yaxshi bilaman va muammolarni yechishni yaxshi ko'raman.", note: 'good at / enjoy + -ing' },
          { en: 'I\'m applying for this job because I want to learn new skills.', uz: "Men bu ishga yangi ko'nikmalarni o'rganish uchun ariza berayapman.", note: 'Maqsad: want to / because' },
        ] },
        { t: 'check', ex: { k: 'fill', q: "I'm good ___ organising events.", a: ['at'], uz: "Men tadbirlarni tashkil qilishni yaxshi bilaman.", why: "**good at** + -ing." } },
      ],
    },
    {
      title: 'Kuchli va zaif tomonlar',
      blocks: [
        { t: 'p', md: "Intervyuchi ko'pincha ikkita savol beradi: **What are your strengths?** va **What is your biggest weakness?** Zaif tomon haqida halol, lekin foydali gapiring: avval kamchilik, so'ng uni qanday yaxshilayotganingiz." },
        { t: 'table', head: ['Maqsad', 'Ibora'], speak: [1], rows: [
          ['Kuchli tomon', 'My biggest strength is that I\'m very reliable.'],
          ['Kuchli tomon', 'I\'m able to stay calm under pressure.'],
          ['Zaif tomon', 'I sometimes spend too much time on details.'],
          ['Yaxshilash', 'I\'m working on it by making a clear plan every day.'],
          ['Yutuq', 'I\'m proud of finishing a big project on time.'],
        ] },
        { t: 'tip', tone: 'good', md: "Zaif tomon haqida *I\'m lazy* yoki *I have no weaknesses* demang. Haqiqiy, kichik kamchilikni ayting va **qanday yaxshilayotganingizni** qo'shing." },
        { t: 'check', ex: { k: 'choice', q: "Which is the best answer to 'What is your weakness?'", opts: ['I sometimes work too slowly, so I\'m learning to plan my time.', 'I have no weaknesses.', 'I don\'t like work.', 'I am always late.'], a: 0, why: "Kamchilik + uni yaxshilash = yaxshi javob." } },
      ],
    },
    {
      title: 'Dialog: suhbat',
      blocks: [
        { t: 'dialog', lines: [
          { who: 'Helen', en: 'Thank you for coming, Aziz. Could you tell me a little about yourself?', uz: "Kelganingiz uchun rahmat, Aziz. O'zingiz haqingizda ozgina aytib bera olasizmi?" },
          { who: 'Aziz', en: 'Of course. I studied computer science, and for two years I\'ve been working as a support engineer. I enjoy helping customers solve technical problems.', uz: "Albatta. Men kompyuter fanlarini o'qiganman va ikki yildan beri qo'llab-quvvatlash muhandisi bo'lib ishlayman. Mijozlarga texnik muammolarni hal qilishda yordam berishni yaxshi ko'raman." },
          { who: 'Helen', en: 'Why do you want to work for us?', uz: "Nega bizda ishlamoqchisiz?" },
          { who: 'Aziz', en: 'Your company is growing fast, so I\'ll probably learn more here than in my current job. The more I learn, the better I work.', uz: "Kompaniyangiz tez o'syapti, shuning uchun bu yerda hozirgi ishimdagidan ehtimol ko'proq o'rganaman. Qancha ko'p o'rgansam, shuncha yaxshi ishlayman." },
          { who: 'Helen', en: 'Where do you see yourself in five years?', uz: "Besh yildan keyin o'zingizni qayerda ko'rasiz?" },
          { who: 'Aziz', en: 'In five years\' time I\'ll be leading a small team, I hope. By then I will have finished a master\'s degree.', uz: "Besh yildan keyin kichik jamoani boshqarayotgan bo'laman, umid qilaman. O'sha vaqtga kelib magistraturani tugatgan bo'laman." },
          { who: 'Helen', en: 'Do you have any questions for us?', uz: "Bizga savollaringiz bormi?" },
          { who: 'Aziz', en: 'Yes. Is there any training for new employees, and when would you like me to start?', uz: "Ha. Yangi xodimlar uchun o'quv bormi va qachon ishni boshlashimni xohlaysiz?" },
        ] },
        { t: 'check', ex: { k: 'choice', q: 'How long has Aziz been working as a support engineer?', opts: ['For two years', 'For five years', 'For ten years', 'For two months'], a: 0, why: "*for two years I've been working*." } },
        { t: 'check', ex: { k: 'tf', q: 'Aziz thinks he will learn more in the new company.', a: true, why: "*I'll probably learn more here than in my current job.*" } },
      ],
    },
    {
      title: 'Rejalar va savollar',
      blocks: [
        { t: 'p', md: "Kelajak rejasini aytganda **Future Continuous** (*I'll be leading*) va **Future Perfect** (*I will have finished*) juda chiroyli eshitiladi. Oxirida albatta o'zingiz ham savol bering, bu qiziqishingizni ko'rsatadi." },
        { t: 'table', head: ['Maqsad', 'Ibora'], speak: [1], rows: [
          ['Reja', 'In five years\' time I\'ll be managing a team.'],
          ['Natija', 'By then I will have gained a lot of experience.'],
          ['Ishonch darajasi', 'I\'ll definitely keep learning.'],
          ['Savol berish', 'What would my typical day be like?'],
          ['Savol berish', 'Is there a chance to work from home?'],
          ['Boshlash vaqti', 'I\'m available to start next month.'],
        ] },
        { t: 'compare',
          good: { title: "To'g'ri", items: ['I am interested in working for your company.', 'I am available to start next month.'] },
          bad: { title: 'Xato', items: ['I am interested to work for your company.', 'I am available for start next month.'] } },
        { t: 'check', ex: { k: 'order', uz: "Besh yildan keyin men jamoani boshqarayotgan bo'laman.", words: ['In', 'five', 'years', 'I', 'will', 'be', 'leading', 'a', 'team.'], extra: ['lead', 'have'], alt: [['I', 'will', 'be', 'leading', 'a', 'team', 'in', 'five', 'years.']], why: "Future Continuous: **will be leading**." } },
      ],
    },
  ],
  words: [
    { en: 'enthusiastic', uz: "ishtiyoqli, g'ayratli", ipa: 'ɪnˌθjuː.ziˈæs.tɪk', pos: 'adj', ex: "He is an enthusiastic young engineer.", exUz: "U ishtiyoqli yosh muhandis." },
    { en: 'awkward', uz: "noqulay", ipa: 'ˈɔː.kwəd', pos: 'adj', ex: "There was an awkward silence after his joke.", exUz: "Uning hazilidan keyin noqulay jimlik cho'kdi." },
    { en: 'teamwork', uz: 'jamoaviy ish, hamkorlik', ipa: 'ˈtiːm.wɜːk', pos: 'noun', ex: 'Good teamwork helped us finish the project early.', exUz: 'Yaxshi hamkorlik loyihani erta tugatishga yordam berdi.' },
    { en: 'motivated', uz: "intiluvchan, o'z ishiga rag'batli", ipa: 'ˈməʊ.tɪ.veɪ.tɪd', pos: 'adj', ex: 'She is a motivated student.', exUz: "U intiluvchan talaba." },
    { en: 'adaptable', uz: 'moslashuvchan', ipa: 'əˈdæp.tə.bəl', pos: 'adj', ex: 'I am adaptable and I learn quickly.', exUz: 'Men moslashuvchanman va tez o\'rganaman.' },
  ],
  practice: [
    { k: 'match', pairs: [['strength', 'kuchli tomon'], ['weakness', 'zaif tomon'], ['achievement', 'yutuq'], ['motivated', 'ishtiyoqli'], ['confident', 'o\'ziga ishongan']] },
    { k: 'choice', q: 'Tell me about ___.', opts: ['yourself', 'you', 'your', 'yours'], a: 0, why: "Qat'iy ibora: **Tell me about yourself.**" },
    { k: 'choice', q: 'I\'m interested ___ working in a large company.', opts: ['in', 'to', 'for', 'at'], a: 0, why: "**interested in** + -ing." },
    { k: 'fill', q: 'I enjoy ___ with people. (work)', a: ['working'], uz: "Odamlar bilan ishlashni yaxshi ko'raman.", why: "**enjoy** + -ing." },
    { k: 'fill', q: 'In five years I ___ be managing a team, I hope.', a: ['will', "'ll"], uz: "Besh yildan keyin jamoani boshqarayotgan bo'laman, umid qilaman.", why: "Future Continuous: **will be managing**." },
    { k: 'fill', q: 'By next year I will ___ finished my course.', a: ['have'], uz: "Kelasi yilga kelib kursni tugatgan bo'laman.", why: "Future Perfect: **will have + V3**." },
    { k: 'order', uz: "Men bu ishga yangi narsalarni o'rganish uchun ariza beryapman.", words: ["I'm", 'applying', 'for', 'this', 'job', 'to', 'learn', 'new', 'things.'], extra: ['for', 'learning'], why: "Maqsad: **to learn**." },
    { k: 'order', uz: "Dushanbadan boshlay olaman.", words: ["I'm", 'available', 'to', 'start', 'on', 'Monday.'], extra: ['for', 'starting'], alt: [['I', 'am', 'available', 'to', 'start', 'on', 'Monday.']], why: "**available to start**." },
    { k: 'fix', wrong: 'I am interested to work in your company.', a: ['I am interested in working in your company.', "I'm interested in working in your company.", 'I am interested in working for your company.', "I'm interested in working for your company."], hint: 'interested + qaysi predlog?', why: "**interested in + -ing**." },
    { k: 'fix', wrong: 'I am good in solve problems.', a: ['I am good at solving problems.', "I'm good at solving problems."], why: "**good at + -ing**." },
    { k: 'translate', uz: "Qancha ko'p mashq qilsam, shuncha yaxshi gapiraman.", a: ['The more I practise, the better I speak.', 'The more I practice, the better I speak.'], why: "**The more…, the better…**" },
    { k: 'listen', say: 'Where do you see yourself in five years?', opts: ['Where do you see yourself in five years?', 'Where did you see yourself five years ago?', 'Where do you live now?', 'When do you start work?'], a: 0, why: "Eng mashhur intervyu savollaridan biri." },
    { k: 'speak', say: 'I am good at working in a team, and I enjoy solving problems.' },
  ],
  quiz: [
    { k: 'choice', q: 'The interviewer asks: "What are your strengths?" Which answer is best?', opts: ['I\'m reliable and I stay calm under pressure.', 'I am the best.', 'I don\'t know.', 'Nothing special.'], a: 0, why: "Aniq va foydali kuchli tomonlarni ayting." },
    { k: 'choice', q: 'I\'m available ___ start next week.', opts: ['to', 'for', 'at', 'in'], a: 0, why: "**available to start**." },
    { k: 'fill', q: 'I\'m proud of ___ the project on time. (finish)', a: ['finishing'], uz: "Loyihani o'z vaqtida tugatganimdan faxrlanaman.", why: "Predlogdan keyin -ing: **proud of finishing**." },
    { k: 'fill', q: 'In three years I will have ___ my degree. (get)', a: ['got', 'gotten'], uz: "Uch yildan keyin darajamni olgan bo'laman.", why: "Future Perfect: **will have + V3**." },
    { k: 'fix', wrong: 'I am interesting in this job.', a: ['I am interested in this job.', "I'm interested in this job."], why: "His-tuyg'u: **interested** (-ed)." },
    { k: 'order', uz: "Men ehtimol ko'proq mas'uliyat olaman.", words: ['I', 'will', 'probably', 'take', 'more', 'responsibility.'], extra: ['definitely', 'to'], why: "will + **probably** + fe'l." },
    { k: 'tf', q: "In an interview it is a good idea to say 'I have no weaknesses'.", a: false, why: "Halol, kichik kamchilik va uni yaxshilash yo'li yaxshiroq." },
    { k: 'translate', uz: "Siz uchun savolim bor.", a: ['I have a question for you.', 'I have got a question for you.', "I've got a question for you."], why: "Oxirida savol berish — yaxshi odat." },
  ],
  summary: [
    "**Tell me about yourself**: hozirgi ishingiz, tajribangiz va nega bu ish haqida 30-60 soniya ayting.",
    "Kuchli tomon: **I'm good at…ing**, **My biggest strength is…**. Zaif tomon: kamchilik + qanday yaxshilayotganingiz.",
    "Kelajak rejasi: **I'll be leading a team**, **By then I will have finished…**; ishonch: **probably / definitely**.",
    "Oxirida o'zingiz savol bering: *What would my typical day be like?* va *I'm available to start…*",
  ],
  homework: "Ovoz chiqarib mashq qiling: o'zingiz haqingizda 5 ta gap, bitta kuchli va bitta zaif tomon, besh yillik reja. Telefonda yozib, tinglab ko'ring.",
};

export default lesson;
