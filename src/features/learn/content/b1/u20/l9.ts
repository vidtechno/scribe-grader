import type { Lesson } from '../../../types';

// Mini lesson (situation): giving advice to a friend who has a problem.
// Uses only grammar taught earlier in the unit (second conditional, wish, could have) and A2 "should"; ought to / had better come in l6.
const lesson: Lesson = {
  id: 'u20-l9',
  title: 'Giving advice to a friend',
  titleUz: "Do'stga maslahat berish: muammoli vaziyat",
  mini: true,
  kind: 'situation',
  goal: "Do'stingiz muammo haqida gapirganda **muloyim va aniq maslahat berasiz** (*If I were you, I'd talk to her. Why don't you…?*) va maslahatga javob berasiz (*That's a good idea. I'll think about it.*).",
  slides: [
    {
      title: "Vaziyat: do'stingiz xafa",
      blocks: [
        { t: 'p', md: "Do'stingiz kayfiyati yomon va muammosini aytmoqda. Siz uni tinglaysiz, tushunganingizni bildirasiz, keyin maslahat berasiz. Dialogni tinglang (▶)." },
        { t: 'dialog', lines: [
          { who: 'Sardor', en: "Madina, you look upset. What's the matter?", uz: "Madina, xafa ko'rinasan. Nima gap?" },
          { who: 'Madina', en: "I had an argument with my flatmate yesterday. We haven't spoken since then.", uz: "Kecha xonadoshim bilan janjallashdim. O'shandan beri gaplashmadik." },
          { who: 'Sardor', en: "That sounds difficult. What was it about?", uz: "Bu qiyin eshitiladi. Nima haqida edi?" },
          { who: 'Madina', en: "She borrowed my laptop without asking and broke it.", uz: "U mendan so'ramasdan noutbukni oldi va sindirib qo'ydi." },
          { who: 'Sardor', en: "Oh no! If I were you, I'd wait until I felt calmer, and then I'd talk to her.", uz: "Voy! Sening o'rningda bo'lsam, xotirjamroq bo'lishimni kutardim, keyin u bilan gaplashardim." },
          { who: 'Madina', en: "I wish it were that easy. I'm still really angry.", uz: "Kaskiydi, shunchalik oson bo'lsa. Men hali ham juda jahldorman." },
          { who: 'Sardor', en: "Why don't you go for a walk first? It might help you calm down.", uz: "Avval sayr qilib kelsang-chi? Bu tinchlanishingga yordam berishi mumkin." },
          { who: 'Madina', en: "That's a good idea. I'll think about it. Thanks for listening.", uz: "Yaxshi fikr. O'ylab ko'raman. Tinglaganing uchun rahmat." },
        ] },
        { t: 'check', ex: { k: 'choice', q: "What happened to Madina's laptop?", opts: ['Her flatmate broke it.', 'She lost it.', 'It was stolen.', 'She sold it.'], a: 0, why: "*She borrowed my laptop without asking and broke it.*" } },
        { t: 'check', ex: { k: 'tf', q: "Sardor tells Madina to shout at her flatmate.", a: false, why: "U avval tinchlanishni, keyin gaplashishni maslahat beradi." } },
      ],
    },
    {
      title: "Maslahat iboralari",
      blocks: [
        { t: 'table', head: ['Maqsad', 'Ibora'], speak: [1], rows: [
          ["Muammoni tinglash", "That sounds difficult. / I'm sorry to hear that."],
          ["Maslahat so'rash", "What do you think I should do?"],
          ["Kuchli maslahat", "If I were you, I'd talk to her."],
          ["Yumshoq taklif", "Why don't you go for a walk first?"],
          ["Variant ko'rsatish", "You could try writing her a message."],
          ["Muloyim fikr", "I think you should be honest with her."],
          ["Javob (qabul)", "That's a good idea. I'll think about it."],
          ["Javob (shubha)", "I'm not sure that would work."],
        ] },
        { t: 'tip', tone: 'info', md: "**If I were you, I'd…** — eng tabiiy maslahat qolipi (second conditional, birinchi dars). **Why don't you…?** va **You could…** esa yumshoqroq: buyruq emas, taklif." },
        { t: 'compare',
          good: { title: "Muloyim", items: ["If I were you, I'd talk to her.", "Why don't you call him?", "You could ask your teacher."] },
          bad: { title: "Qo'pol eshitiladi", items: ["You must call him now!", "Do what I say.", "You are wrong, so apologise."] } },
        { t: 'check', ex: { k: 'choice', q: "Do'stingiz: \"I don't know how to start.\" Siz yumshoq taklif qilasiz:", opts: ["Why don't you start with a short message?", "You must start now!", "Start, I said.", "You are slow."], a: 0, why: "**Why don't you…?** — yumshoq taklif." } },
        { t: 'check', ex: { k: 'fill', q: "If I ___ you, I'd tell the truth.", a: ['were', 'was'], uz: "Sening o'rningda bo'lsam, haqiqatni aytardim.", why: "**If I were you** — maslahat qolipi." } },
      ],
    },
    {
      title: "Ishdagi muammo",
      blocks: [
        { t: 'p', md: "Yana bir vaziyat: ishda qiyinchilik. Bu yerda ham ayni iboralar ishlaydi." },
        { t: 'dialog', lines: [
          { who: 'Jack', en: "Helen, I have a problem. My boss keeps asking me to work late.", uz: "Helen, muammom bor. Boshliqim meni doim kech qolib ishlashni so'rayapti." },
          { who: 'Helen', en: "That sounds stressful. Have you told him how you feel?", uz: "Bu juda charchatadigan eshitiladi. Unga his-tuyg'ularingni aytdingmi?" },
          { who: 'Jack', en: "Not yet. I'm afraid he will be angry.", uz: "Hali yo'q. U jahli chiqishidan qo'rqaman." },
          { who: 'Helen', en: "I think you should be honest. You could ask for a short meeting and explain the problem calmly.", uz: "Menimcha, ochiq bo'lishing kerak. Qisqa uchrashuv so'rab, muammoni xotirjam tushuntirishing mumkin." },
          { who: 'Jack', en: "I'm not sure that would work.", uz: "Bu ish beradimi, bilmayman." },
          { who: 'Helen', en: "If I were you, I'd at least try. Talking it over can't make things worse.", uz: "Sening o'ringda bo'lsam, hech bo'lmasa urinib ko'rardim. Gaplashib olish ahvolni yomonlashtira olmaydi." },
        ] },
        { t: 'check', ex: { k: 'choice', q: "What is Jack's problem?", opts: ['He often has to work late.', 'He lost his job.', 'He cannot find a flat.', 'He argued with Helen.'], a: 0, why: "*My boss keeps asking me to work late.*" } },
        { t: 'check', ex: { k: 'order', uz: "Sening o'rningda bo'lsam, u bilan gaplashardim.", words: ['If', 'I', 'were', 'you,', "I'd", 'talk', 'to', 'him.'], extra: ['was', 'will'], alt: [['If', 'I', 'was', 'you,', "I'd", 'talk', 'to', 'him.']], why: "**If I were you, I'd…**" } },
      ],
    },
    {
      title: "Qanday gapirish kerak",
      blocks: [
        { t: 'p', md: "Maslahat berishdan oldin tinglang. Yaxshi maslahat beruvchi uch qadamni bajaradi:" },
        { t: 'table', head: ['Qadam', 'Nima qilasiz', 'Misol'], speak: [2], rows: [
          ['1', "Tushunganingizni bildirasiz", "That sounds really hard."],
          ['2', "Savol berasiz", "What do you want to happen?"],
          ['3', "Yumshoq maslahat berasiz", "If I were you, I'd talk to her."],
        ] },
        { t: 'tip', tone: 'good', md: "O'zbek tilida ba'zan to'g'ridan-to'g'ri maslahat berish odatiy, inglizchada esa ko'pincha yumshoq shakl tanlanadi: *I think you should…, You could…, Why don't you…?* Bu hurmat belgisi." },
        { t: 'check', ex: { k: 'choice', q: "Do'stingiz maslahatingizni rad qildi: \"I'm not sure that would work.\" Siz:", opts: ["Well, you could try something else. What about talking to a teacher?", "Then do nothing!", "You never listen.", "I don't care."], a: 0, why: "Muloyim muqobil taklif qilamiz." } },
      ],
    },
  ],
  words: [
    { en: 'upset', uz: "xafa, ranjigan", ipa: 'ʌpˈset', pos: 'adj', ex: "She was upset about the news.", exUz: "U yangilikdan xafa bo'ldi." },
    { en: 'argue', uz: "bahslashmoq, janjallashmoq", ipa: 'ˈɑːɡ.juː', pos: 'verb', ex: "My brother and I argue about football.", exUz: "Akam bilan futbol haqida bahslashamiz." },
    { en: 'calm down', uz: "tinchlanmoq", ipa: 'kɑːm daʊn', pos: 'phrase', ex: "Take a deep breath and calm down.", exUz: "Chuqur nafas oling va tinchlaning." },
    { en: 'honest', uz: "halol, ochiq", ipa: 'ˈɒn.ɪst', pos: 'adj', ex: "Be honest with your friends.", exUz: "Do'stlaringiz bilan ochiq bo'ling." },
    { en: 'talk it over', uz: "(masalani) muhokama qilib olmoq", ipa: 'tɔːk ɪt ˈəʊ.və', pos: 'phrase', ex: "Let's talk it over before we decide.", exUz: "Qaror qilishdan oldin muhokama qilib olaylik." },
  ],
  practice: [
    { k: 'match', pairs: [['upset', 'xafa'], ['argue', 'janjallashmoq'], ['calm down', 'tinchlanmoq'], ['honest', 'halol, ochiq'], ['talk it over', 'muhokama qilib olmoq']] },
    { k: 'choice', q: "Do'stingiz: \"My brother and I had an argument.\" Siz birinchi nima deysiz?", opts: ["That sounds difficult. What happened?", "You must apologise now.", "I don't care.", "Your brother is wrong."], a: 0, why: "Avval tinglash va hamdardlik bildirish." },
    { k: 'choice', q: "Qaysi ibora yumshoq taklif?", opts: ['Why don\'t you ask her?', 'Ask her now!', 'You have to ask her.', 'Asking her is your duty.'], a: 0, why: "**Why don't you…?** — yumshoq taklif." },
    { k: 'fill', q: "If I ___ you, I'd talk to my teacher.", a: ['were', 'was'], uz: "Sening o'rningda bo'lsam, ustozim bilan gaplashardim.", why: "**If I were you, I'd…**" },
    { k: 'fill', q: "Why don't you ___ a walk to calm down?", a: ['go for', 'take'], hint: 'go for / take', uz: "Tinchlanish uchun sayr qilsang-chi?", why: "**go for a walk** yoki **take a walk**." },
    { k: 'fill', q: "You ___ try writing her a short message.", a: ['could'], uz: "Unga qisqa xabar yozib ko'rishing mumkin.", why: "**You could…** — variant ko'rsatish." },
    { k: 'order', uz: "Menimcha, u bilan ochiq bo'lishing kerak.", words: ['I', 'think', 'you', 'should', 'be', 'honest', 'with', 'her.'], extra: ['must', 'to'], why: "**I think you should…**" },
    { k: 'listen', say: "Why don't you call him tonight?", opts: ["Why don't you call him tonight?", "Why don't you call him tomorrow?", "Why didn't you call him tonight?", "Why don't you call her tonight?"], a: 0 },
    { k: 'fix', wrong: 'If I am you, I would talk to him.', a: ['If I were you, I would talk to him.', "If I were you, I'd talk to him.", 'If I was you, I would talk to him.', "If I was you, I'd talk to him."], why: "Maslahat qolipi: **If I were you**." },
    { k: 'translate', uz: "Sening o'rningda bo'lsam, men uzr so'rardim.", a: ["If I were you, I'd apologise.", "If I were you, I would apologise.", "If I was you, I'd apologise.", "If I was you, I would apologise.", "If I were you, I'd say sorry.", "If I were you, I would say sorry."], why: "**If I were you, I'd…**" },
    { k: 'tf', q: "*You must call him now!* — bu do'stga yumshoq maslahat berish usuli.", a: false, why: "Bu qat'iy buyruq; yumshoq usul: *Why don't you…?*" },
    { k: 'dictation', say: "I'm not sure that would work.", a: ["I'm not sure that would work.", 'I am not sure that would work.'], uz: "Bu ish beradimi, bilmayman." },
    { k: 'speak', say: "If I were you, I'd talk to her.", uz: "Sening o'rningda bo'lsam, u bilan gaplashardim." },
    { k: 'speak', say: "That's a good idea. I'll think about it.", uz: "Yaxshi fikr. O'ylab ko'raman." },
  ],
  quiz: [
    { k: 'choice', q: "Maslahatga rozi bo'lib javob bering:", opts: ["That's a good idea. I'll think about it.", "No, never.", "Why should I?", "You are wrong."], a: 0, why: "Muloyim qabul: **That's a good idea.**" },
    { k: 'choice', q: "Do'stingiz xafa. Siz hamdardlik bildirasiz:", opts: ["I'm sorry to hear that.", "That's your problem.", "Don't talk to me.", "I'm busy."], a: 0, why: "**I'm sorry to hear that.**" },
    { k: 'fill', q: "Why ___ you talk it over with her?", a: ["don't"], why: "**Why don't you…?**" },
    { k: 'fill', q: "If I ___ you, I wouldn't shout at him.", a: ['were', 'was'], why: "**If I were you…**" },
    { k: 'order', uz: "U bilan gaplashib ko'rsang-chi?", words: ['Why', "don't", 'you', 'talk', 'to', 'her?'], extra: ['didn\'t', 'must'], why: "**Why don't you…?**" },
    { k: 'translate', uz: "Menimcha, siz ochiq bo'lishingiz kerak.", a: ['I think you should be honest.'], why: "**I think you should…**" },
    { k: 'listen', say: 'You could ask your teacher for help.', opts: ['You could ask your teacher for help.', 'You must ask your teacher for help.', 'You asked your teacher for help.', 'You could ask your friend for help.'], a: 0 },
    { k: 'tf', q: "*Why don't you go for a walk?* — bu taklif.", a: true, why: "**Why don't you…?** — taklif, savol emas." },
  ],
  summary: [
    "Avval tinglang va hamdardlik bildiring: **That sounds difficult. I'm sorry to hear that.**",
    "Maslahat: **If I were you, I'd…**, **Why don't you…?**, **You could…**, **I think you should…**",
    "Maslahatga javob: **That's a good idea. I'll think about it.** yoki **I'm not sure that would work.**",
    "Yangi so'zlar: **upset, argue, calm down, honest, talk it over**.",
  ],
  homework: "Do'stingizga yozing: u ishda muammo haqida gapirdi. 5 ta gapdan iborat javob tuzing: hamdardlik, bitta savol va ikkita maslahat (*If I were you… / Why don't you…?*).",
};

export default lesson;
