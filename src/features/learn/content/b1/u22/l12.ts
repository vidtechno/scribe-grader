import type { Lesson } from '../../../types';

// Mini lesson (grammar): purpose. Builds on l1 (verb + infinitive / -ing) without repeating it.
const lesson: Lesson = {
  id: 'u22-l12',
  title: 'Purpose: to, in order to, so that, for',
  titleUz: 'Maqsad: to, in order to, so that, for',
  mini: true,
  kind: 'grammar',
  goal: "**Nima uchun?** degan savolga to'g'ri javob berasiz: **to / in order to** + fe'l (*I use an app to learn words*), **so that** + gap (*so that I can relax*) va **for** + ot yoki -ing (*a tool for cutting paper*) ni adashtirmaysiz.",
  slides: [
    {
      title: 'Eng oddiy yo\'l: to + fe\'l',
      blocks: [
        { t: 'p', md: "Biror ishni **nima uchun** qilganimizni aytish uchun inglizchada eng ko'p **to + fe'lning asosiy shakli** ishlatiladi. O'zbekchada *-ish uchun / -moq uchun* deymiz, inglizchada **for** emas, **to** kerak." },
        { t: 'examples', items: [
          { en: 'I use a planner to organise my week.', uz: "Haftamni rejalashtirish uchun planner ishlataman." },
          { en: 'She called the office to ask about the job.', uz: "U ish haqida so'rash uchun ofisga qo'ng'iroq qildi." },
          { en: 'We stayed late to finish the project.', uz: "Loyihani tugatish uchun kech qoldik." },
          { en: 'He went to Tashkent to study engineering.', uz: "U muhandislik o'qish uchun Toshkentga bordi." },
        ] },
        { t: 'compare',
          good: { title: "To'g'ri", items: ['I came here to study.', 'He uses his phone to check emails.'] },
          bad: { title: 'Xato', items: ['I came here for study.', 'I came here for to study.', 'He uses his phone for check emails.'] } },
        { t: 'tip', tone: 'warn', md: "**for** dan keyin fe'l (*for study*) kelmaydi. Fe'l bo'lsa — **to**. *for to study* ham xato." },
        { t: 'check', ex: { k: 'choice', q: 'We bought a new laptop ___ work from home.', opts: ['to', 'for', 'for to', 'that'], a: 0, why: "Maqsad + fe'l → **to** work." } },
      ],
    },
    {
      title: 'in order to va so as to',
      blocks: [
        { t: 'p', md: "**in order to** va **so as to** — **to** bilan bir xil ma'no, lekin biroz rasmiyroq. Ish xati, ma'ruza va yozma matnda ko'p uchraydi. Inkor maqsad uchun ayniqsa kerak: **in order not to / so as not to**." },
        { t: 'table', head: ['Shakl', 'Misol'], speak: [1], rows: [
          ['to + fe\'l', 'I got up early to catch the train.'],
          ['in order to + fe\'l', 'I got up early in order to catch the train.'],
          ['so as to + fe\'l', 'I got up early so as to catch the train.'],
          ['in order not to + fe\'l', 'I wrote it down in order not to forget.'],
          ['so as not to + fe\'l', 'She spoke quietly so as not to wake the baby.'],
        ] },
        { t: 'tip', tone: 'info', md: "Inkor maqsadda oddiy **to** ishlatish noqulay: *in order not to forget* yoki *so as not to forget* deymiz. Kundalik gapda esa qisqa **to** yetarli." },
        { t: 'check', ex: { k: 'fill', q: 'I saved the file twice in order ___ to lose my work.', a: ['not'], uz: "Ishimni yo'qotmaslik uchun faylni ikki marta saqladim.", why: "Inkor maqsad: **in order not to** + fe'l." } },
      ],
    },
    {
      title: 'so that + gap',
      blocks: [
        { t: 'p', md: "**so that** dan keyin **to'liq gap** (ega + fe'l) keladi, ko'pincha **can / could / will / would** bilan. Ega ikki xil bo'lsa (*men ishlayman, shunda sen dam olasan*) yoki imkoniyat haqida gapirganda aynan shu kerak. Og'zaki nutqda **that** tushib qolishi mumkin: *so I can relax*." },
        { t: 'examples', items: [
          { en: 'I turn off my phone so that I can concentrate.', uz: "Diqqatimni jamlay olishim uchun telefonni o'chiraman.", note: 'Hozirgi zamon: so that + can / will' },
          { en: 'She left early so that she wouldn\'t miss the bus.', uz: "U avtobusni qoldirib yubormasligi uchun erta chiqdi.", note: "O'tgan zamon: so that + could / would" },
          { en: 'Please send the report today so that I can read it tomorrow.', uz: "Iltimos, hisobotni bugun yuboring, men uni ertaga o'qiy olishim uchun." },
        ] },
        { t: 'compare',
          good: { title: "To'g'ri", items: ['I speak slowly so that everyone can understand.', 'He took notes so that he would remember.'] },
          bad: { title: 'Xato', items: ['I speak slowly so that everyone to understand.', 'He took notes so that he remember.'] } },
        { t: 'check', ex: { k: 'choice', q: 'He wrote the address down ___ he wouldn\'t forget it.', opts: ['so that', 'in order', 'for', 'so as'], a: 0, why: "Keyin to'liq gap (**he wouldn't forget**) → **so that**." } },
        { t: 'check', ex: { k: 'tf', q: "*I study hard so that to pass the exam.* — to'g'ri gap.", a: false, why: "**so that** dan keyin gap kerak: *so that I can pass*. Yoki oddiy: *to pass*." } },
      ],
    },
    {
      title: 'for: ot yoki -ing',
      blocks: [
        { t: 'p', md: "**for** dan keyin **ot** yoki **-ing** shakli keladi. Ikki holatda ishlatamiz: 1) narsa **nima uchun mo'ljallangan** (*a tool for cutting paper*), 2) harakat sababi yoki maqsadi ot bilan (*I went to the shop for bread*)." },
        { t: 'table', head: ['Qolip', 'Misol'], speak: [1], rows: [
          ['for + ot', 'I went to the library for a book.'],
          ['for + -ing (narsa vazifasi)', 'This app is for tracking your spending.'],
          ['What ... for? (so\'roq)', 'What is this button for?'],
          ['to + fe\'l (odamning maqsadi)', 'I went to the library to borrow a book.'],
        ] },
        { t: 'tip', tone: 'good', md: "Oddiy qoida: **odam** biror ish qilsa — **to + fe'l**. **Narsaning** vazifasi haqida bo'lsa — **for + -ing**. *I use this app to learn words* = *This app is for learning words.*" },
        { t: 'check', ex: { k: 'fill', q: 'This cable is ___ charging the camera.', a: ['for'], uz: "Bu kabel kamerani quvvatlash uchun.", why: "Narsaning vazifasi: **for + -ing**." } },
        { t: 'check', ex: { k: 'fix', wrong: 'I use this website for learn English.', a: ['I use this website to learn English.', 'I use this website for learning English.'], hint: "for dan keyin fe'l bo'lmaydi", why: "**to learn** yoki **for learning**." } },
      ],
    },
    {
      title: 'Dialog: kechqurunki kurs',
      blocks: [
        { t: 'dialog', lines: [
          { who: 'Sara', en: 'Why are you carrying two laptops, Ben?', uz: "Nega ikkita noutbuk ko'tarib yuribsan, Ben?" },
          { who: 'Ben', en: 'One is for work. I use the other one to study in the evenings.', uz: "Bittasi ish uchun. Ikkinchisini kechqurun o'qish uchun ishlataman." },
          { who: 'Sara', en: 'What are you studying?', uz: 'Nimani o\'qiyapsan?' },
          { who: 'Ben', en: 'An online course in data analysis. I\'m doing it in order to change my job next year.', uz: "Ma'lumotlar tahlili bo'yicha onlayn kurs. Kelasi yil ishimni o'zgartirish uchun o'qiyapman." },
          { who: 'Sara', en: 'Do you have time for that?', uz: "Bunga vaqting bormi?" },
          { who: 'Ben', en: 'I get up at six so that I can study before work. And I switch off my phone so as not to get distracted.', uz: "Ishdan oldin o'qiy olishim uchun oltida turaman. Chalg'imaslik uchun telefonni o'chirib qo'yaman." },
        ] },
        { t: 'check', ex: { k: 'choice', q: 'Why does Ben get up at six?', opts: ['So that he can study before work.', 'To go to the gym.', 'To call Sara.', 'For a new laptop.'], a: 0, why: "*I get up at six so that I can study before work.*" } },
      ],
    },
  ],
  words: [
    { en: 'purpose', uz: 'maqsad, vazifa', ipa: 'ˈpɜː.pəs', pos: 'noun', ex: 'What is the purpose of this meeting?', exUz: "Bu uchrashuvning maqsadi nima?" },
    { en: 'improve', uz: 'yaxshilamoq', ipa: 'ɪmˈpruːv', pos: 'verb', ex: 'I read every day to improve my English.', exUz: "Inglizchamni yaxshilash uchun har kuni o'qiyman." },
    { en: 'revise', uz: 'takrorlamoq (imtihonga)', ipa: 'rɪˈvaɪz', pos: 'verb', ex: 'I revise for two hours every evening.', exUz: "Men har kecha ikki soat takrorlayman." },
    { en: 'recharge', uz: 'quvvatlamoq', ipa: 'ˌriːˈtʃɑːdʒ', pos: 'verb', ex: 'I recharge my phone every night.', exUz: "Telefonimni har kecha quvvatlayman." },
    { en: 'schedule', uz: 'jadval, reja', ipa: 'ˈʃed.juːl', pos: 'noun', ex: 'I have a busy schedule this week.', exUz: "Bu hafta jadvalim band." },
  ],
  practice: [
    { k: 'match', pairs: [['to learn', "o'rganish uchun"], ['in order to', "...ish uchun (rasmiy)"], ['so that', "shunday qilib..., ... uchun (gap bilan)"], ['in order not to', "...maslik uchun"], ['for', "uchun (ot yoki -ing bilan)"]] },
    { k: 'choice', q: 'She went to the bank ___ open an account.', opts: ['to', 'for', 'so that', 'for to'], a: 0, why: "Maqsad + fe'l → **to open**." },
    { k: 'choice', q: 'I\'m going to the shop ___ some milk.', opts: ['for', 'to', 'so that', 'in order'], a: 0, why: "Ot (**milk**) oldidan **for**." },
    { k: 'fill', q: 'I wear glasses ___ that I can see the board.', a: ['so'], uz: "Doskani ko'rishim uchun ko'zoynak taqaman.", why: "**so that** + gap." },
    { k: 'fill', q: 'He spoke quietly in order ___ to wake anyone.', a: ['not'], uz: "U hech kimni uyg'otmaslik uchun past ovozda gapirdi.", why: "Inkor maqsad: **in order not to**." },
    { k: 'fill', q: 'What is this key ___?', a: ['for'], uz: "Bu kalit nima uchun?", why: "Savol: **What ... for?**" },
    { k: 'order', uz: "Men imtihonga tayyorlanish uchun kechgacha o'qiyman.", words: ['I', 'study', 'late', 'to', 'prepare', 'for', 'the', 'exam.'], extra: ['for', 'so'], alt: [['I', 'study', 'late', 'in', 'order', 'to', 'prepare', 'for', 'the', 'exam.']], why: "Maqsad: **to + prepare**." },
    { k: 'order', uz: "U avtobusni qoldirmaslik uchun erta chiqdi.", words: ['She', 'left', 'early', 'so', 'that', 'she', "wouldn't", 'miss', 'the', 'bus.'], extra: ['to', 'for'], why: "**so that** + she wouldn't miss." },
    { k: 'fix', wrong: 'I use my phone for to check the news.', a: ['I use my phone to check the news.', 'I use my phone for checking the news.'], hint: "for to — xato", why: "**to check** yoki **for checking**." },
    { k: 'fix', wrong: 'We turned the music down so that the neighbours to sleep.', a: ['We turned the music down so that the neighbours could sleep.', 'We turned the music down so the neighbours could sleep.', 'We turned the music down so that the neighbours can sleep.', 'We turned the music down so that the neighbours would be able to sleep.'], hint: "so that dan keyin gap", why: "**so that** dan keyin to'liq gap: *the neighbours could sleep*." },
    { k: 'translate', uz: "Men ish topish uchun inglizcha o'rganyapman.", a: ["I'm learning English to find a job.", 'I am learning English to find a job.', "I'm learning English in order to find a job.", 'I am learning English in order to find a job.', "I'm learning English so that I can find a job.", 'I am learning English so that I can find a job.'], why: "Maqsad: **to find** / **in order to find** / **so that I can find**." },
    { k: 'dictation', say: 'I use this app to learn new words.', a: ['I use this app to learn new words.'], why: "**to + learn**." },
    { k: 'speak', say: 'I get up early so that I can study before work.' },
  ],
  quiz: [
    { k: 'choice', q: 'He took a taxi ___ be late.', opts: ['so as not to', 'for', 'to not', 'so that not'], a: 0, why: "Inkor maqsad: **so as not to** + fe'l." },
    { k: 'choice', q: 'I need a password manager ___ storing all my passwords.', opts: ['for', 'to', 'so that', 'in order'], a: 0, why: "Narsa vazifasi: **for + -ing**." },
    { k: 'choice', q: 'Write the date on the form ___ they can check it later.', opts: ['so that', 'to', 'for', 'in order'], a: 0, why: "Keyin gap (**they can check**) → **so that**." },
    { k: 'fill', q: 'She went abroad ___ improve her English.', a: ['to', 'in order to', 'so as to'], why: "Maqsad + fe'l: **to / in order to**." },
    { k: 'fill', q: 'I called the bank ___ ask about my card.', a: ['to', 'in order to', 'so as to'], why: "Maqsad + fe'l." },
    { k: 'fix', wrong: 'He went to the station for buy a ticket.', a: ['He went to the station to buy a ticket.', 'He went to the station in order to buy a ticket.', 'He went to the station for a ticket.'], why: "**for** dan keyin fe'l emas: **to buy**." },
    { k: 'order', uz: "Esdan chiqarmaslik uchun hammasini yozib oldim.", words: ['I', 'wrote', 'everything', 'down', 'so', 'as', 'not', 'to', 'forget.'], extra: ['for', 'that'], alt: [['I', 'wrote', 'everything', 'down', 'in', 'order', 'not', 'to', 'forget.']], why: "**so as not to / in order not to** + fe'l." },
    { k: 'tf', q: "*I work hard so that I can buy a flat.* — to'g'ri gap.", a: true, why: "**so that** + ega + can + fe'l — to'g'ri." },
  ],
  summary: [
    "Odam biror ish qilsa, maqsadni **to + fe'l** bilan aytamiz: *I use an app to learn words.* **for study** deb bo'lmaydi.",
    "**in order to / so as to** — rasmiyroq. Inkor maqsad: **in order not to / so as not to** + fe'l.",
    "**so that** dan keyin to'liq gap keladi (*can, could, will, would*): *so that I can relax*.",
    "**for** + ot (*for bread*) yoki narsaning vazifasi: **for + -ing** (*a tool for cutting*). *What is it for?*",
  ],
  homework: "Bugun qilgan 5 ta ishingizning maqsadini bitta gapda yozing: *I opened my laptop to…, I left early so that…, I wrote a list in order not to…*",
};

export default lesson;
