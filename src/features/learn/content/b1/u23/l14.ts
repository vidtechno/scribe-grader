import type { Lesson } from '../../../types';

// Mini lesson (skill): listening and speaking, a two-minute talk. Uses linkers (l12) and opinion phrases (l1).
const lesson: Lesson = {
  id: 'u23-l14',
  title: 'Listening and speaking: a two-minute talk',
  titleUz: "Tinglash va gapirish: ikki daqiqalik nutq",
  mini: true,
  kind: 'skill',
  goal: "Qisqa nutqni **tinglab tuzilmasini** tushunasiz (kirish, uchta fikr, xulosa) va o'zingiz ikki daqiqalik nutqni **sekin, aniq va pauza bilan** aytasiz.",
  slides: [
    {
      title: "Tinglang: bitta nutq",
      blocks: [
        { t: 'p', md: "Quyidagi nutqni tinglang (▶). Avval umumiy ma'noni tushuning: **mavzu nima? nechta sabab aytildi? xulosa qanday?**" },
        { t: 'text', title: 'Why I read every day', voice: 'emma', en: "Good morning, everyone. Today I would like to talk about a habit that changed my life: reading every day. I have three reasons. Firstly, reading helps me relax after a long day. Secondly, I learn new words without trying, and my English has improved a lot. Finally, books give me ideas for my own work. Of course, it is not always easy to find time. However, even twenty minutes a day is enough. In conclusion, I believe everyone should read a little every day. Thank you for listening.", uz: "Hammaga xayrli tong. Bugun hayotimni o'zgartirgan odat — har kuni o'qish haqida gapirmoqchiman. Menda uchta sabab bor. Birinchidan, o'qish uzoq kundan keyin dam olishimga yordam beradi. Ikkinchidan, men yangi so'zlarni zo'riqmasdan o'rganaman va inglizchamni ancha yaxshiladim. Nihoyat, kitoblar menga o'z ishim uchun g'oyalar beradi. Albatta, vaqt topish har doim ham oson emas. Biroq kuniga yigirma daqiqa ham yetarli. Xulosa qilib aytganda, menimcha, hamma har kuni ozgina o'qishi kerak. Tinglaganingiz uchun rahmat." },
        { t: 'check', ex: { k: 'choice', q: "How many reasons does the speaker give?", opts: ['Three', 'Two', 'Four', 'One'], a: 0, why: "*I have three reasons.*" } },
        { t: 'check', ex: { k: 'choice', q: "How much time is enough, according to the speaker?", opts: ['Twenty minutes a day', 'Two hours a day', 'One hour a week', 'Five minutes a day'], a: 0, why: "*Even twenty minutes a day is enough.*" } },
        { t: 'check', ex: { k: 'tf', q: "The speaker says it is always easy to find time for reading.", a: false, why: "*It is not always easy to find time.*" } },
      ],
    },
    {
      title: "Nutq tuzilmasi",
      blocks: [
        { t: 'p', md: "Yaxshi qisqa nutqning **to'rt qismi** bor. Har qismda foydali iboralar:" },
        { t: 'table', head: ['Qism', 'Ibora'], speak: [1], rows: [
          ['1. Kirish', "Today I would like to talk about…"],
          ['1. Kirish', "I have three reasons."],
          ['2. Asosiy fikrlar', "Firstly, … Secondly, … Finally, …"],
          ['3. Qiyinchilik', "Of course, … However, …"],
          ['4. Xulosa', "In conclusion, I believe…"],
          ['4. Xulosa', "Thank you for listening."],
        ] },
        { t: 'tip', tone: 'info', md: "Ikki daqiqalik nutq uchun **bir necha yuz so'z** yetarli. Ko'p fikr aytishdan ko'ra, **bir-ikki fikrni misol bilan** ochib bering." },
        { t: 'check', ex: { k: 'order', uz: "Bugun men odatlar haqida gapirmoqchiman.", words: ['Today', 'I', 'would', 'like', 'to', 'talk', 'about', 'habits.'], extra: ['say', 'am'], why: "Kirish iborasi." } },
        { t: 'check', ex: { k: 'choice', q: "Nutqni yakunlaysiz:", opts: ["In conclusion, I believe we should start today.", "Firstly, we should start.", "I have three reasons.", "For example, today."], a: 0, why: "Yakun: **In conclusion**." } },
      ],
    },
    {
      title: "Qanday aytish kerak?",
      blocks: [
        { t: 'p', md: "Fikr yaxshi bo'lsa ham, tez va bir tekis gapirsangiz, tinglovchi tushunmaydi. Uchta narsani nazorat qiling:" },
        { t: 'table', head: ['Nima', 'Qanday'], rows: [
          ['Tempo (pace)', "Odatdagidan sekinroq gapiring."],
          ['Pauza (pause)', "Har bir fikrdan keyin bir soniya to'xtang."],
          ['Urg\'u (stress)', "Muhim so'zlarni kuchliroq ayting: sonlar, sabablar, ismlar."],
        ] },
        { t: 'examples', items: [
          { en: "I have three reasons. Firstly, reading helps me relax.", uz: "Menda uchta sabab bor. Birinchidan, o'qish dam olishimga yordam beradi.", note: "\"reasons\" dan keyin pauza qiling, keyin sanashni boshlang." },
          { en: "It is not easy. However, it is possible.", uz: "Bu oson emas. Biroq bu mumkin.", note: "**However** dan keyin ham ozgina to'xtang." },
        ] },
        { t: 'tip', tone: 'good', md: "Nutqdan oldin **ovoz chiqarib mashq qiling** (rehearse) va telefonda yozib oling. Keyin eshiting: tez gapiryapsizmi? **uh, um** ko'pmi?" },
        { t: 'check', ex: { k: 'choice', q: "Nutqda nimani qilish yaxshi?", opts: ["Fikrlar orasida to'xtash", "Eng tez gapirish", "Hech to'xtamaslik", "Pastroq ovozda gapirish"], a: 0, why: "Pauza tinglovchiga fikrni tushunishga yordam beradi." } },
      ],
    },
    {
      title: "Endi siz ayting",
      blocks: [
        { t: 'p', md: "Quyidagi namuna asosida o'zingizning 6–8 jumlalik nutqingizni ovoz chiqarib ayting. Mavzu: **\"A skill I want to learn\"**." },
        { t: 'dialog', lines: [
          { who: 'Madina', en: "Today I would like to talk about a skill I want to learn: cooking.", uz: "Bugun men o'rganmoqchi bo'lgan ko'nikma — pishirish haqida gapirmoqchiman." },
          { who: 'Madina', en: "Firstly, it is useful. Secondly, it saves money. Finally, it is fun.", uz: "Birinchidan, foydali. Ikkinchidan, pul tejaydi. Nihoyat, qiziqarli." },
          { who: 'Sardor', en: "That sounds good. Do you have any experience?", uz: "Yaxshi eshitiladi. Tajribang bormi?" },
          { who: 'Madina', en: "Not much. However, I have started with simple recipes, and I enjoy it.", uz: "Ko'p emas. Biroq oddiy retseptlardan boshladim va menga yoqyapti." },
        ] },
        { t: 'check', ex: { k: 'dictation', say: 'Firstly, it is useful. Secondly, it saves money.', a: ['Firstly, it is useful. Secondly, it saves money.', "Firstly, it's useful. Secondly, it saves money."] } },
      ],
    },
  ],
  words: [
    { en: 'pace', uz: 'tempo, tezlik', ipa: 'peɪs', pos: 'noun', ex: 'Speak at a slower pace.', exUz: 'Sekinroq tempda gapiring.' },
    { en: 'intonation', uz: 'ohang, intonatsiya', ipa: 'ˌɪn.təˈneɪ.ʃən', pos: 'noun', ex: 'Your intonation often goes up at the end of a question.', exUz: "Savol oxirida ohangingiz ko'pincha ko'tariladi." },
    { en: 'stress', uz: "urg'u berib aytmoq", ipa: 'stres', pos: 'verb', ex: 'Stress the important words.', exUz: "Muhim so'zlarga urg'u bering." },
    { en: 'volume', uz: 'ovoz balandligi', ipa: 'ˈvɒl.juːm', pos: 'noun', ex: 'Your volume is too low, so the people at the back cannot hear you.', exUz: 'Ovozingiz juda past, shuning uchun orqadagilar sizni eshitmayapti.' },
    { en: 'pronounce', uz: "talaffuz qilmoq", ipa: 'prəˈnaʊns', pos: 'verb', ex: 'How do you pronounce this word?', exUz: "Bu so'zni qanday talaffuz qilasiz?" },
  ],
  practice: [
    { k: 'listen', say: 'Today I would like to talk about a habit that changed my life.', opts: ['Today I would like to talk about a habit that changed my life.', 'Today I would like to talk about a job that changed my life.', 'Yesterday I talked about a habit that changed my life.', 'Today I like to walk about a habit.'], a: 0 },
    { k: 'listen', say: 'Firstly, reading helps me relax after a long day.', opts: ['Firstly, reading helps me relax after a long day.', 'Firstly, reading helps me work after a long day.', 'Secondly, reading helps me relax after a long day.', 'Firstly, writing helps me relax after a long day.'], a: 0 },
    { k: 'choice', say: 'I have three reasons. Firstly, it is cheap. Secondly, it is quick. Finally, it is safe.', q: "Listen. What is the third reason?", opts: ['It is safe.', 'It is cheap.', 'It is quick.', 'It is fun.'], a: 0, why: "*Finally, it is safe.*" },
    { k: 'choice', say: 'Of course, it is not always easy. However, even ten minutes a day is enough.', q: "Listen. How much time is enough?", opts: ['Ten minutes a day', 'One hour a day', 'Ten hours a week', 'Two minutes a day'], a: 0, why: "*Even ten minutes a day is enough.*" },
    { k: 'fill', q: "Today I would like to ___ about my hobby.", a: ['talk'], uz: "Bugun men hobbim haqida gapirmoqchiman.", why: "**talk about**." },
    { k: 'fill', q: "In ___ , I believe everyone should try it.", a: ['conclusion'], uz: "Xulosa qilib aytganda, menimcha, hamma sinab ko'rishi kerak.", why: "**In conclusion**." },
    { k: 'order', uz: "Menda uchta sabab bor.", words: ['I', 'have', 'three', 'reasons.'], extra: ['has', 'reason'], why: "Kirishdagi ibora." },
    { k: 'dictation', say: 'Thank you for listening.', a: ['Thank you for listening.', 'Thank you for listening'], uz: "Tinglaganingiz uchun rahmat." },
    { k: 'dictation', say: 'However, even twenty minutes a day is enough.', a: ['However, even twenty minutes a day is enough.', 'However even twenty minutes a day is enough.'], uz: "Biroq kuniga yigirma daqiqa ham yetarli." },
    { k: 'translate', uz: "Birinchidan, bu vaqtni tejaydi.", a: ["Firstly, it saves time.", "Firstly, this saves time.", "First of all, it saves time."], why: "Tartib so'zi + fe'l." },
    { k: 'speak', say: 'Today I would like to talk about a skill I want to learn.', uz: "Bugun men o'rganmoqchi bo'lgan ko'nikma haqida gapirmoqchiman." },
    { k: 'speak', say: 'Firstly, it is useful. Secondly, it is fun. Finally, it saves money.', uz: "Birinchidan, foydali. Ikkinchidan, qiziqarli. Nihoyat, pul tejaydi." },
    { k: 'speak', say: 'In conclusion, I believe everyone should try it. Thank you for listening.', uz: "Xulosa qilib aytganda, menimcha, hamma sinab ko'rishi kerak. Tinglaganingiz uchun rahmat." },
  ],
  quiz: [
    { k: 'listen', say: 'I would like to talk about my city.', opts: ['I would like to talk about my city.', 'I would like to walk around my city.', 'I like to talk about the city.', 'I would like to talk about my family.'], a: 0 },
    { k: 'choice', say: 'Firstly, it saves time. Secondly, it is healthy.', q: "Listen. What is the second reason?", opts: ['It is healthy.', 'It saves time.', 'It is cheap.', 'It is easy.'], a: 0, why: "*Secondly, it is healthy.*" },
    { k: 'choice', q: "Nutq qismlari to'g'ri tartibda qaysi?", opts: ["kirish, asosiy fikrlar, xulosa", "xulosa, kirish, fikrlar", "fikrlar, xulosa, kirish", "xulosa, fikrlar, kirish"], a: 0, why: "Kirish, fikrlar, xulosa." },
    { k: 'fill', q: "Speak at a slower ___ so that people understand.", a: ['pace'], why: "**pace** — tempo." },
    { k: 'fill', q: "Make a short ___ after each idea.", a: ['pause'], why: "**pause** — pauza." },
    { k: 'order', uz: "Xulosa qilib aytganda, menimcha, bu yaxshi g'oya.", words: ['In', 'conclusion,', 'I', 'believe', 'it', 'is', 'a', 'good', 'idea.'], extra: ['firstly', 'was'], why: "Xulosa iborasi." },
    { k: 'tf', q: "Nutqda hech to'xtamasdan tez gapirish yaxshi.", a: false, why: "Pauza va sekin tempda gapirish yaxshiroq." },
  ],
  summary: [
    "Nutq tuzilmasi: **kirish** (*Today I would like to talk about…*), **fikrlar** (*Firstly, Secondly, Finally*), **qiyinchilik** (*However*), **xulosa** (*In conclusion*).",
    "Sekin gapiring, fikrlar orasida **to'xtang**, muhim so'zlarga **urg'u bering**.",
    "Oldindan mashq qiling va o'zingizni yozib oling.",
    "Yangi so'zlar: **pace, intonation, stress, volume, pronounce**.",
  ],
  homework: "\"A skill I want to learn\" mavzusida ikki daqiqalik nutqni 3 marta ovoz chiqarib ayting, telefonga yozing va tinglang. Har safar bitta narsani yaxshilang: tempni, pauzani yoki urg'uni.",
};

export default lesson;
