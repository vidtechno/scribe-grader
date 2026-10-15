import type { Lesson } from '../../../types';

// Mini lesson (review): the whole unit with new examples.
const lesson: Lesson = {
  id: 'u22-l11',
  title: 'Work, study and technology: final review',
  titleUz: "Ish, o'qish va texnologiya: yakuniy takror",
  mini: true,
  kind: 'review',
  goal: "Butun bosqichni takrorlaysiz: **gerund / infinitive**, maqsad, **kelasi zamon shakllari**, **Future Continuous / Perfect**, taqqoslash, bashorat, **phrasal verbs** va rasmiy xat iboralari. Yangi misollarda bilimingizni tekshirasiz.",
  slides: [
    {
      title: 'Gerund, infinitive va maqsad',
      blocks: [
        { t: 'table', head: ['Qoida', 'Misol'], speak: [1], rows: [
          ['enjoy, avoid, suggest, finish + -ing', 'She suggested taking a break.'],
          ['want, decide, hope, plan + to', 'We decided to hire a tutor.'],
          ['predlog + -ing', 'He is good at fixing computers.'],
          ['stop + -ing / stop + to', 'He stopped checking his phone. He stopped to check his phone.'],
          ['maqsad: to / in order to / so that', 'I installed the software so that I can work offline.'],
        ] },
        { t: 'tip', tone: 'warn', md: "Eslang: **for study** emas, **to study**. **interested in** + -ing. **look forward to** + -ing. **so that** dan keyin to'liq gap." },
        { t: 'check', ex: { k: 'choice', q: 'My supervisor suggested ___ the project earlier.', opts: ['starting', 'to start', 'start', 'for start'], a: 0, why: "**suggest** + -ing." } },
        { t: 'check', ex: { k: 'fill', q: 'I took an online course ___ improve my skills.', a: ['to', 'in order to', 'so as to'], why: "Maqsad: **to** + fe'l." } },
      ],
    },
    {
      title: 'Kelasi zamon va taqqoslash',
      blocks: [
        { t: 'table', head: ['Shakl', 'Misol'], speak: [1], rows: [
          ['will: shu zahoti qaror, va\'da', 'The printer is empty? I\'ll bring some paper.'],
          ['be going to: reja, dalil', 'I\'m going to ask for more flexible hours.'],
          ['Present Continuous: kelishilgan', 'I\'m seeing my tutor at four.'],
          ['Future Continuous: jarayon', 'This time next week I\'ll be sitting my exam.'],
          ['Future Perfect: natija', 'By June I will have saved enough for a new laptop.'],
          ['the more…, the more…', 'The more overtime I do, the more tired I feel.'],
          ['as…as / not as…as', 'Remote work is not as tiring as travelling every day.'],
          ['much / far + qiyosiy', 'This software is far better than the old one.'],
        ] },
        { t: 'tip', tone: 'info', md: "Ishonch: **will definitely**, **will probably**, **might**, **probably won't**, **I doubt…**, **be likely / unlikely to**. **when / before / by the time** dan keyin **will** yo'q." },
        { t: 'check', ex: { k: 'choice', q: 'By the time you arrive, I ___ the report.', opts: ['will have finished', 'will finish', 'will be finishing', 'finished'], a: 0, why: "**by the time** + natija: Future Perfect." } },
        { t: 'check', ex: { k: 'fix', wrong: 'The more I practise, the more better I speak.', a: ['The more I practise, the better I speak.', 'The more I practice, the better I speak.'], why: "**the better**; *more better* xato." } },
      ],
    },
    {
      title: 'Dialog: yangi ish',
      blocks: [
        { t: 'dialog', lines: [
          { who: 'Sardor', en: 'Are you still thinking of changing your job, Lily?', uz: "Hali ham ishingni almashtirishni o'ylayapsanmi, Lily?" },
          { who: 'Lily', en: 'Yes. My supervisor keeps giving me overtime, and I doubt that will change. I am going to apply for a remote job next week.', uz: "Ha. Rahbarim doim qo'shimcha ish beryapti va bu o'zgaradi deb o'ylamayman. Kelasi hafta masofaviy ishga ariza bermoqchiman." },
          { who: 'Sardor', en: 'Good idea. You will probably have more free time. What will you be doing in a year?', uz: "Yaxshi fikr. Ehtimol bo'sh vaqting ko'proq bo'ladi. Bir yildan keyin nima qilyapsan?" },
          { who: 'Lily', en: 'I hope I will be working for a big software company. By then I will have finished my English course, too.', uz: "Umid qilamanki, katta dasturiy ta'minot kompaniyasida ishlayotgan bo'laman. O'sha vaqtga kelib ingliz tili kursini ham tugatgan bo'laman." },
          { who: 'Sardor', en: 'Please let me know how it goes. I look forward to hearing your news!', uz: "Qanday bo'lganini bildirib qo'y. Yangiliklaringni intizor bilan kutaman!" },
        ] },
        { t: 'check', ex: { k: 'tf', q: 'Lily is happy with her overtime.', a: false, why: "*I doubt that will change* — rozi emas." } },
      ],
    },
    {
      title: 'Phrasal verbs va rasmiy xat',
      blocks: [
        { t: 'table', head: ['Qoida', 'Misol'], speak: [1], rows: [
          ['Ajraladigan: olmosh o\'rtada', 'I filled the form in. I filled it in.'],
          ['Ajralmaydigan', 'The technician is looking into the problem.'],
          ['Uch qismli', 'I can\'t put up with this noise.'],
          ['Rasmiy xat boshlash', 'Dear Mr Hill, I am writing to enquire about the course.'],
          ['Rasmiy so\'rov', 'I would be grateful if you could send me more details.'],
          ['Tugatish', 'I look forward to hearing from you. Yours sincerely,'],
        ] },
        { t: 'compare',
          good: { title: "To'g'ri", items: ['Please hand it in on Friday.', 'I would like to attend the course.'] },
          bad: { title: 'Xato', items: ['Please hand in it on Friday.', "I'd like to attend, thanks, bye."] } },
        { t: 'check', ex: { k: 'order', uz: "Iltimos, uni o'chirib qo'ying.", words: ['Please', 'turn', 'it', 'off.'], extra: ['on', 'up'], why: "Olmosh o'rtada: **turn it off**." } },
        { t: 'check', ex: { k: 'choice', q: 'You know the name: Ms Clark. How do you finish the email?', opts: ['Yours sincerely', 'Yours faithfully', 'Cheers', 'Love'], a: 0, why: "Ism ma'lum → **Yours sincerely**." } },
      ],
    },
  ],
  words: [
    { en: 'seminar', uz: 'seminar, amaliy mashg\'ulot', ipa: 'ˈsem.ɪ.nɑː', pos: 'noun', ex: 'I have a seminar on Thursday afternoon.', exUz: 'Payshanba kuni tushdan keyin seminarim bor.' },
    { en: 'tutor', uz: 'repetitor, mentor', ipa: 'ˈtjuː.tər', pos: 'noun', ex: 'My tutor corrects my essays.', exUz: "Repetitorim inshollarimni tuzatadi." },
    { en: 'overtime', uz: "qo'shimcha ish vaqti", ipa: 'ˈəʊ.və.taɪm', pos: 'noun', ex: 'He did two hours of overtime.', exUz: "U ikki soat qo'shimcha ishladi." },
    { en: 'supervisor', uz: 'rahbar, nazoratchi', ipa: 'ˈsuː.pə.vaɪ.zər', pos: 'noun', ex: 'Ask your supervisor for advice.', exUz: "Rahbaringizdan maslahat so'rang." },
    { en: 'lecturer', uz: 'universitet o\'qituvchisi', ipa: 'ˈlek.tʃər.ər', pos: 'noun', ex: 'Our lecturer gives very clear explanations.', exUz: 'Bizning o\'qituvchimiz juda tushunarli tushuntiradi.' },
  ],
  practice: [
    { k: 'match', pairs: [['software', 'dastur'], ['tutor', 'repetitor'], ['overtime', "qo'shimcha ish vaqti"], ['supervisor', 'rahbar'], ['remote', 'masofaviy']] },
    { k: 'choice', q: 'She avoids ___ late at night.', opts: ['working', 'to work', 'work', 'for work'], a: 0, why: "**avoid** + -ing." },
    { k: 'choice', q: 'He promised ___ the report today.', opts: ['to send', 'sending', 'send', 'for send'], a: 0, why: "**promise** + to." },
    { k: 'fill', q: 'This time tomorrow I ___ be sitting my exam.', a: ['will', "'ll"], uz: "Ertaga shu vaqtda imtihon topshirayotgan bo'laman.", why: "Future Continuous." },
    { k: 'fill', q: 'By Friday we will ___ finished the project.', a: ['have'], uz: "Jumagacha loyihani tugatgan bo'lamiz.", why: "Future Perfect." },
    { k: 'fill', q: 'This phone is ___ cheaper than that one. (much)', a: ['much'], uz: "Bu telefon anavidan ancha arzon.", why: "**much + qiyosiy daraja**." },
    { k: 'order', uz: "Qancha ko'p o'qisam, shuncha ko'p o'rganaman.", words: ['The', 'more', 'I', 'read,', 'the', 'more', 'I', 'learn.'], extra: ['most', 'than'], why: "**The more…, the more…**" },
    { k: 'order', uz: "Men ehtimol uydan ishlayman.", words: ['I', 'will', 'probably', 'work', 'from', 'home.'], extra: ['definite', 'to'], alt: [["I'll", 'probably', 'work', 'from', 'home.']], why: "will + probably + fe'l." },
    { k: 'fix', wrong: 'I went to the library for borrow a book.', a: ['I went to the library to borrow a book.', 'I went to the library in order to borrow a book.', 'I went to the library for a book.'], why: "Maqsad: **to** + fe'l." },
    { k: 'fix', wrong: 'Please fill in it today.', a: ['Please fill it in today.'], why: "Olmosh o'rtada." },
    { k: 'translate', uz: "Javobingizni kutaman.", a: ['I look forward to hearing from you.'], why: "**look forward to** + -ing." },
    { k: 'listen', say: 'The more overtime I do, the more tired I feel.', opts: ['The more overtime I do, the more tired I feel.', 'The less overtime I do, the more tired I feel.', 'The more overtime I do, the less tired I feel.', 'I do more overtime than before.'], a: 0, why: "**The more…, the more…**" },
    { k: 'speak', say: 'I am going to apply for a remote job next week.' },
  ],
  quiz: [
    { k: 'choice', q: 'I ___ the meeting will finish on time. It always runs late.', opts: ['doubt', 'am certain', 'will definitely', 'am sure'], a: 0, why: "**I doubt** — shubha." },
    { k: 'choice', q: 'Remote work is not as tiring ___ travelling every day.', opts: ['as', 'than', 'that', 'like'], a: 0, why: "**not as…as**." },
    { k: 'choice', q: 'I am meeting my tutor at four. This is a ___.', opts: ['fixed arrangement', 'spontaneous decision', 'past habit', 'general fact'], a: 0, why: "Present Continuous — kelishilgan uchrashuv." },
    { k: 'fill', q: 'I am interested ___ learning data analysis.', a: ['in'], why: "**interested in** + -ing." },
    { k: 'fill', q: 'She turned the music down so that her neighbours ___ sleep.', a: ['could'], why: "**so that** + could." },
    { k: 'fix', wrong: 'He will probably not to come.', a: ["He probably won't come.", 'He will probably not come.'], why: "will dan keyin **to** yo'q." },
    { k: 'order', uz: "Iltimos, uni topshiring.", words: ['Please', 'hand', 'it', 'in.'], extra: ['on', 'up'], why: "Olmosh o'rtada." },
    { k: 'translate', uz: "Besh yildan keyin men jamoani boshqarayotgan bo'laman.", a: ['In five years I will be leading a team.', "In five years I'll be leading a team.", 'In five years I will be managing a team.', "In five years I'll be managing a team.", "I'll be leading a team in five years.", 'I will be leading a team in five years.'], why: "Future Continuous." },
  ],
  summary: [
    "**enjoy / avoid / suggest + -ing**, **want / decide / hope + to**, predlogdan keyin -ing; maqsad: **to / in order to / so that**.",
    "Kelasi zamon: **will** (qaror, taxmin), **going to** (reja), **Present Continuous** (kelishilgan); **will be -ing** (jarayon), **will have V3** (natija).",
    "Taqqoslash: **the more…, the more…**, **much / far**, **as…as**. Ishonch: **definitely, probably, I doubt, likely**.",
    "**Phrasal verbs**: olmosh o'rtada (*fill it in*); rasmiy xat: **Dear…, I am writing to…, Yours sincerely / faithfully**.",
  ],
  homework: "Bosqichdagi eng qiyin mavzuni toping va unga 5 ta yangi gap yozing. Keyin ishlarni qiyoslab, o'zingiz haqingizda bir qisqa paragraf yozing.",
};

export default lesson;
