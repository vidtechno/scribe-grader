import type { Lesson } from '../../../types';

// Mini lesson (skill): listening and speaking, a job interview. Recycles l2 interview language with a new dialogue.
const lesson: Lesson = {
  id: 'u17-l14',
  title: 'Listening and speaking: a job interview',
  titleUz: 'Tinglash va gapirish: ish suhbati',
  mini: true,
  kind: 'skill',
  goal: "Ish suhbatidagi savollarni **tinglab tushunasiz** va ularga o'zingiz javob berasiz: *Tell me about yourself. What are your strengths? Why do you want this job? Can you start next month?*",
  slides: [
    {
      title: "Tinglang: do'konda ishga suhbat",
      blocks: [
        { t: 'p', md: "Sardor do'konda yarim kunlik ishga murojaat qilyapti. Dialogni tinglang (▶), keyin matnga qarang. Avval **savol nima haqida**, keyin **javobda qanday ma'lumot** borligiga e'tibor bering." },
        { t: 'dialog', lines: [
          { who: 'Helen', en: 'Good morning, Sardor. Please take a seat. Tell me about yourself.', uz: "Xayrli tong, Sardor. O'tiring. O'zingiz haqingizda gapirib bering." },
          { who: 'Sardor', en: "Thank you. I'm 22 and I study business in Tashkent. I worked part-time in a shop last summer.", uz: "Rahmat. Men 22 yoshdaman va Toshkentda biznes bo'yicha o'qiyman. O'tgan yozda do'konda yarim kunlik ishlaganman." },
          { who: 'Helen', en: 'Why do you want this job?', uz: 'Nega bu ishni xohlaysiz?' },
          { who: 'Sardor', en: 'I enjoy talking to people, and I want to get more experience.', uz: "Odamlar bilan gaplashishni yaxshi ko'raman va ko'proq tajriba olmoqchiman." },
          { who: 'Helen', en: 'What are your strengths?', uz: 'Kuchli tomonlaringiz qanday?' },
          { who: 'Sardor', en: "I'm polite and I'm always on time. I'm also good at using computers.", uz: "Men odobliman va doim vaqtida kelaman. Kompyuterdan foydalanishda ham kuchliman." },
          { who: 'Helen', en: 'Do you have any questions?', uz: 'Savollaringiz bormi?' },
          { who: 'Sardor', en: 'Yes. How many hours do I work each week?', uz: "Ha. Haftasiga necha soat ishlayman?" },
          { who: 'Helen', en: 'Twenty hours. Can you start next month?', uz: "Yigirma soat. Kelasi oy boshlay olasizmi?" },
          { who: 'Sardor', en: 'Yes, I can. Thank you for your time.', uz: "Ha, boshlay olaman. Vaqt ajratganingiz uchun rahmat." },
        ] },
        { t: 'check', ex: { k: 'choice', q: 'What did Sardor do last summer?', opts: ['He worked part-time in a shop.', 'He studied business.', 'He worked in a bank.', 'He travelled abroad.'], a: 0, why: "Dialog: *I worked part-time in a shop last summer.*" } },
        { t: 'check', ex: { k: 'listen', say: 'Can you start next month?', opts: ['Can you start next month?', 'Can you start next week?', 'Did you start last month?', 'Can you stay next month?'], a: 0 } },
      ],
    },
    {
      title: "Savollar va javoblar",
      blocks: [
        { t: 'p', md: "Suhbatda savollar deyarli doim bir xil. Har biriga **2–3 gaplik** tayyor javob bo'lsa, o'zingizni bemalol his qilasiz." },
        { t: 'table', head: ['Savol', 'Namuna javob'], speak: [0, 1], rows: [
          ['Tell me about yourself.', "I'm 24 and I live in Samarkand. I work as a driver."],
          ['Why do you want this job?', 'I like working with people and I want to learn new things.'],
          ['What are your strengths?', "I'm reliable and I learn quickly."],
          ["What's your biggest weakness?", "Sometimes I'm too shy, but I'm working on it."],
          ['Do you have any questions?', 'Yes. How much is the salary? / When do I start?'],
          ['Can you start next month?', 'Yes, I can. / I can start on the first of November.'],
        ] },
        { t: 'tip', tone: 'good', md: "**weakness** haqida halol, lekin foydali javob bering: kamchilikni ayting va uni **yaxshilayotganingizni** qo'shing (*I'm working on it*). Hech qachon *I have no weaknesses* demang." },
        { t: 'check', ex: { k: 'fill', q: "I'm always ___ time for work. (vaqtida)", a: ['on'], why: "**on time** — vaqtida." } },
      ],
    },
    {
      title: "Tinglang: Nilufarning suhbati",
      blocks: [
        { t: 'p', md: "Endi qisqa matnni tinglang. Bu safar savollarni siz tasavvur qiling: javobdan savolni topishga harakat qiling." },
        { t: 'text', title: "Nilufar's interview", voice: 'emma', en: "Yesterday I had an interview at a travel agency. I was a little nervous, but the manager was friendly. She asked me about my experience. I said that I worked as a guide for one year, and I enjoy meeting tourists. Then she asked about my strengths. I said that I speak three languages and I'm very organised. At the end she asked, Do you have any questions? I asked about the working hours. They are from nine to six, five days a week. I think the interview went well, and I'm waiting for her answer.", uz: "Kecha sayohat agentligida suhbatim bo'ldi. Biroz hayajonlandim, lekin menejer xushmuomala edi. U tajribam haqida so'radi. Men bir yil gid bo'lib ishlaganimni va turistlar bilan uchrashishni yoqtirishimni aytdim. Keyin kuchli tomonlarim haqida so'radi. Men uch tilda gapirishimni va juda tartibli ekanimni aytdim. Oxirida u so'radi: Savollaringiz bormi? Men ish vaqti haqida so'radim. Ish soat to'qqizdan oltigacha, haftasiga besh kun. Menimcha, suhbat yaxshi o'tdi va uning javobini kutyapman." },
        { t: 'check', ex: { k: 'tf', q: "Nilufar worked as a guide for ten years.", a: false, why: "Matn: *I worked as a guide for one year.*" } },
        { t: 'check', ex: { k: 'choice', q: 'What did Nilufar ask at the end of the interview?', opts: ['About the working hours.', 'About the salary.', 'About the holidays.', 'About the manager.'], a: 0, why: "Matn: *I asked about the working hours.*" } },
      ],
    },
    {
      title: "Tushunmasangiz yoki o'ylash kerak bo'lsa",
      blocks: [
        { t: 'p', md: "Suhbatda hamma narsani birinchi marta tushunish shart emas. Muloyim iboralar sizga vaqt beradi:" },
        { t: 'table', head: ['Ibora', "O'zbekcha"], speak: [0], rows: [
          ['Sorry, could you repeat that, please?', 'Kechirasiz, takrorlay olasizmi?'],
          ['Could you speak more slowly, please?', 'Sekinroq gapira olasizmi?'],
          ['Let me think for a moment.', "Bir lahza o'ylab olay."],
          ["I don't have much experience, but I learn quickly.", "Tajribam ko'p emas, lekin tez o'rganaman."],
          ['Thank you for your time.', 'Vaqt ajratganingiz uchun rahmat.'],
        ] },
        { t: 'dialog', lines: [
          { who: 'Karim', en: 'Hello, I have an interview at ten. My name is Karim Aliyev.', uz: "Salom, soat o'nda suhbatim bor. Ismim Karim Aliyev." },
          { who: 'Lily', en: "Welcome, Mr Aliyev. The manager is ready. What's your biggest strength?", uz: "Xush kelibsiz, janob Aliyev. Menejer tayyor. Eng kuchli tomoningiz qanday?" },
          { who: 'Karim', en: "Sorry, could you repeat that, please?", uz: "Kechirasiz, takrorlay olasizmi?" },
          { who: 'Lily', en: 'Of course. What is your biggest strength?', uz: "Albatta. Eng kuchli tomoningiz nima?" },
          { who: 'Karim', en: "Let me think. I'm hard-working, and I always finish my work on time.", uz: "O'ylab olay. Men tirishqoqman va ishimni doim vaqtida tugataman." },
        ] },
        { t: 'check', ex: { k: 'dictation', say: 'Sorry, could you repeat that, please?', a: ['Sorry, could you repeat that, please?', 'Sorry, could you repeat that please?'] } },
      ],
    },
    {
      title: "Endi siz ayting",
      blocks: [
        { t: 'p', md: "Mashq: o'zingizni nomzod deb tasavvur qiling. Har savolga ovoz chiqarib **2 gap** bilan javob bering, keyin telefonga yozib, qayta tinglang." },
        { t: 'examples', items: [
          { en: "Tell me about yourself. — I'm Madina. I'm 23 and I study English.", uz: "O'zingiz haqingizda gapirib bering. — Men Madinaman. 23 yoshdaman va ingliz tilini o'rganaman." },
          { en: "Why do you want this job? — I enjoy helping people.", uz: "Nega bu ishni xohlaysiz? — Odamlarga yordam berishni yaxshi ko'raman." },
          { en: "What are your strengths? — I'm polite, and I'm good at solving problems.", uz: "Kuchli tomonlaringiz? — Men odobliman va muammolarni yechishda kuchliman." },
        ] },
        { t: 'tip', tone: 'info', md: "Tartib: **qisqa javob + sabab yoki misol**. *I'm reliable. I never miss work.* Sekin va aniq gapiring: tezlik emas, aniqlik muhim." },
        { t: 'check', ex: { k: 'choice', q: "Interviewer: Can you start next month? Best answer:", opts: ['Yes, I can. Thank you.', 'Yes, I start yesterday.', 'No, I am next month.', 'Start I can month.'], a: 0, why: "**Can you…? — Yes, I can.**" } },
      ],
    },
  ],
  words: [
    { en: 'strength', uz: 'kuchli tomon', ipa: 'streŋθ', pos: 'noun', ex: 'My biggest strength is that I learn quickly.', exUz: "Eng kuchli tomonim — tez o'rganishim." },
    { en: 'weakness', uz: 'zaif tomon', ipa: 'ˈwiːk.nəs', pos: 'noun', ex: 'Sometimes I am too shy. That is my weakness.', exUz: "Ba'zan juda uyatchanman. Bu mening zaif tomonim." },
    { en: 'shift', uz: 'smena', ipa: 'ʃɪft', pos: 'noun', ex: 'I work the night shift on Fridays.', exUz: "Juma kunlari tungi smenada ishlayman." },
    { en: 'trainee', uz: 'stajyor', ipa: 'ˌtreɪˈniː', pos: 'noun', ex: 'She is a trainee at the bank.', exUz: "U bankda stajyor." },
    { en: 'on time', uz: 'vaqtida', ipa: 'ɒn ˈtaɪm', pos: 'phrase', ex: 'He is always on time for work.', exUz: "U ishga doim vaqtida keladi." },
    { en: 'career', uz: "kasbiy yo'l, karyera", ipa: 'kəˈrɪə', pos: 'noun', ex: 'I want a career in tourism.', exUz: "Men turizm sohasida karyera qilmoqchiman." },
  ],
  practice: [
    { k: 'listen', say: 'Tell me about yourself.', opts: ['Tell me about yourself.', 'Tell me about your family.', 'Tell me about your job.', 'Tell me about your friend.'], a: 0, why: "Suhbatning birinchi savoli: **Tell me about yourself.**" },
    { k: 'choice', say: "I'm good at talking to customers.", q: "Listen. What is the person good at?", opts: ['Talking to customers', 'Cooking for customers', 'Counting money', 'Using computers'], a: 0, why: "**good at talking to customers**." },
    { k: 'match', pairs: [['strength', 'kuchli tomon'], ['weakness', 'zaif tomon'], ['shift', 'smena'], ['trainee', 'stajyor'], ['career', 'karyera']] },
    { k: 'fill', q: "I'm always ___ time for work. (vaqtida)", a: ['on'], why: "**on time** — vaqtida." },
    { k: 'order', uz: 'Nega bu ishni xohlaysiz?', words: ['Why', 'do', 'you', 'want', 'this', 'job?'], extra: ['does', 'to'], why: "**Why do you want…?**" },
    { k: 'tf', q: "In the dialogue, Sardor worked in a hotel last summer.", a: false, why: "Dialog: *I worked part-time in a shop last summer.*" },
    { k: 'dictation', say: 'I worked part-time in a shop last summer.', a: ['I worked part-time in a shop last summer.'], uz: "O'tgan yozda do'konda yarim kunlik ishlaganman." },
    { k: 'choice', q: 'Interviewer: Do you have any questions? Best reply:', opts: ['Yes. How many hours do I work each week?', 'Yes, I am a question.', 'No, I have not answer.', 'Yes. Me question work?'], a: 0, why: "Savol berish — qiziqish belgisi: **How many hours…?**" },
    { k: 'fix', wrong: 'I am good at talk with customers.', a: ["I'm good at talking to customers.", 'I am good at talking to customers.', "I'm good at talking with customers.", 'I am good at talking with customers.'], hint: 'good at dan keyin', why: "**good at** + -ing." },
    { k: 'translate', uz: 'Kelasi oy boshlay olaman.', a: ['I can start next month.', 'I can start next month'], why: "**I can start** + vaqt." },
    { k: 'speak', say: "I'm reliable, and I learn quickly.", uz: "Men ishonchliman va tez o'rganaman." },
    { k: 'speak', say: 'Sorry, could you repeat that, please?', uz: 'Kechirasiz, takrorlay olasizmi?' },
    { k: 'speak', say: 'Thank you for your time.', uz: 'Vaqt ajratganingiz uchun rahmat.' },
  ],
  quiz: [
    { k: 'listen', say: 'What are your strengths?', opts: ['What are your strengths?', 'What is your name?', 'What are your hobbies?', 'What is your salary?'], a: 0 },
    { k: 'choice', q: "Which question is NOT usual in a job interview?", opts: ['What is your favourite film?', 'Tell me about yourself.', 'Why do you want this job?', 'Can you start next month?'], a: 0, why: "Filmlar haqida so'rash ish suhbati uchun odatiy emas." },
    { k: 'fill', q: "I'm good ___ solving problems.", a: ['at'], why: "**good at** + -ing." },
    { k: 'order', uz: "Menda ko'p tajriba yo'q.", words: ["I", "don't", "have", "much", "experience"], extra: ['many', 'a'], alt: [['I', 'do', 'not', 'have', 'much', 'experience']] },
    { k: 'tf', q: "Nilufar's working hours are from nine to six, five days a week.", a: true, why: "Matn: *from nine to six, five days a week*." },
    { k: 'fix', wrong: 'Why you want this job?', a: ['Why do you want this job?'], hint: "Yordamchi fe'l", why: "Savolda **do** kerak: *Why **do** you want…?*" },
    { k: 'match', pairs: [['on time', 'vaqtida'], ['shift', 'smena'], ['weakness', 'zaif tomon'], ['strength', 'kuchli tomon']] },
    { k: 'translate', uz: "Kechirasiz, takrorlay olasizmi?", a: ['Sorry, could you repeat that, please?', 'Sorry, could you repeat that please?', 'Excuse me, could you repeat that, please?', 'Sorry, can you repeat that, please?', 'Sorry, can you repeat that please?'], why: "**Could you repeat that, please?**" },
  ],
  summary: [
    "Suhbat savollari: **Tell me about yourself. Why do you want this job? What are your strengths? Can you start next month?**",
    "Javob tartibi: **qisqa javob + sabab yoki misol**; kuchli tomon uchun **I'm + sifat**, **I'm good at + -ing**.",
    "Tushunmasangiz: **Sorry, could you repeat that, please?** Oxirida: **Thank you for your time.**",
    "Yangi so'zlar: **strength, weakness, shift, trainee, on time, career**.",
  ],
  homework: "Sevimli ish yoki o'qish joyingiz uchun 4 ta suhbat savoliga 2 gapdan javob tayyorlang va telefonga ovoz yozib oling.",
};

export default lesson;
