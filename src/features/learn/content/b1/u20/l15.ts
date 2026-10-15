import type { Lesson } from '../../../types';

// Mini lesson (skill): reading and writing, a problem page (a reader's letter and the adviser's reply).
// Uses conditionals, wish, past modals and the advice phrases of l9; the writing task is a short reply of 6-8 sentences.
const lesson: Lesson = {
  id: 'u20-l15',
  title: 'Reading and writing: a problem page',
  titleUz: "O'qish va yozish: maslahat ustuni",
  mini: true,
  kind: 'skill',
  goal: "Gazeta yoki saytdagi **maslahat ustuni** (problem page) maktubini o'qib tushunasiz va o'zingiz **6–8 gapdan iborat maslahat javobi** yozasiz (hamdardlik, maslahat, dalda).",
  slides: [
    {
      title: "O'qing: o'quvchining maktubi",
      blocks: [
        { t: 'p', md: "Ko'p jurnal va saytlarda **problem page** (maslahat ustuni) bor: o'quvchi muammosini yozadi, mutaxassis javob beradi. Avval maktubni o'qing va asosiy muammoni toping." },
        { t: 'text', title: "A reader's letter", en: "Dear Alex, I am twenty-three and I have just finished university. I have a good job offer in a bank, but my real dream is to open a small bakery. My parents say I would be crazy to give up a safe job. I feel a lot of pressure from my family. If I took the job, I would be safe, but I think I would be unhappy. If I opened a bakery, I might fail. I wish I could stop worrying about what other people think. What should I do? Kind regards, Dilnoza", uz: "Hurmatli Aleks, men yigirma uch yoshdaman va universitetni endigina tugatdim. Bankda yaxshi ish taklifim bor, lekin haqiqiy orzum — kichik novvoyxona ochish. Ota-onam xavfsiz ishni tashlab ketsam, aqldan ozgan bo'laman, deyishadi. Oilamdan katta bosim sezyapman. Ishni qabul qilsam, xavfsiz bo'lardim, lekin baxtsiz bo'lardim deb o'ylayman. Novvoyxona ochsam, muvaffaqiyatsiz bo'lishim mumkin. Kaskiydi, boshqalar nima deb o'ylashi haqida tashvishlanishni to'xtata olsam. Nima qilishim kerak? Hurmat bilan, Dilnoza" },
        { t: 'check', ex: { k: 'choice', q: "What is Dilnoza's dream?", opts: ['To open a small bakery.', 'To work in a bank.', 'To study abroad.', 'To become a teacher.'], a: 0, why: "*My real dream is to open a small bakery.*" } },
        { t: 'check', ex: { k: 'tf', q: "Dilnoza's parents want her to take the bank job.", a: true, why: "Ular xavfsiz ishni tashlash aqldan ozish deb hisoblaydi." } },
      ],
    },
    {
      title: "O'qing: maslahat javobi",
      blocks: [
        { t: 'text', title: "Alex's reply", voice: 'george', en: "Dear Dilnoza, Thank you for your honest letter. I understand that it is a difficult choice, and I am sorry that you feel so much pressure. If I were you, I would not decide in a hurry. First, you could work in the bank for a year and save some money. At the same time, you could start baking at weekends and sell cakes to friends. In that way, you would find out if people like your cakes before you took a big risk. Also, why don't you talk to your parents calmly and explain your plan? They may support you when they see that you have thought about it carefully. Remember, it is your life. Good luck! Alex", uz: "Hurmatli Dilnoza, samimiy maktubingiz uchun rahmat. Bu qiyin tanlov ekanini tushunaman va shuncha bosim sezayotganingizdan afsusdaman. Sizning o'rningizda bo'lsam, shoshilib qaror qilmasdim. Avvalo, bir yil bankda ishlab, biroz pul yig'ishingiz mumkin. Shu bilan birga, dam olish kunlari non-pirog pishirib, do'stlarga sotishni boshlashingiz mumkin. Shunda katta tavakkal qilishdan oldin odamlarga pishiriqlaringiz yoqishini bilib olardingiz. Yana, ota-onangiz bilan xotirjam gaplashib, rejangizni tushuntirsangiz-chi? Ular rejangizni sinchiklab o'ylab chiqqaningizni ko'rsa, sizni qo'llab-quvvatlashi mumkin. Esda tuting, bu sizning hayotingiz. Omad! Aleks" },
        { t: 'check', ex: { k: 'choice', q: "What does Alex suggest first?", opts: ['Work in the bank for a year and save money.', 'Open the bakery immediately.', 'Move to another city.', 'Stop talking to her parents.'], a: 0, why: "*First, you could work in the bank for a year and save some money.*" } },
        { t: 'check', ex: { k: 'choice', q: "Why does Alex suggest selling cakes at weekends?", opts: ['To find out if people like her cakes.', 'To pay for university.', 'To make her parents angry.', 'To learn a new language.'], a: 0, why: "*You would find out if people like your cakes.*" } },
      ],
    },
    {
      title: "Javob tuzilmasi",
      blocks: [
        { t: 'p', md: "Yaxshi maslahat javobi besh qismdan iborat. Alex'ning javobida hammasi bor:" },
        { t: 'table', head: ['Qism', 'Nima yoziladi', 'Misol'], speak: [2], rows: [
          ['1. Salomlashish', "Ismni yozing va rahmat ayting", "Dear Dilnoza, Thank you for your letter."],
          ['2. Hamdardlik', "Tushunganingizni bildiring", "I understand that it is a difficult choice."],
          ['3. Maslahat', "2–3 aniq maslahat", "If I were you, I would not decide in a hurry."],
          ['4. Sabab', "Nega bu yaxshi ekanini ayting", "In that way, you would find out if people like your cakes."],
          ['5. Dalda', "Umid va xayrlashuv", "Good luck!"],
        ] },
        { t: 'tip', tone: 'info', md: "Maslahatni bog'lash uchun: **First, … Also, … At the same time, … Finally, …** va **In that way, …** (shunda, bu usulda)." },
        { t: 'check', ex: { k: 'choice', q: "Maslahat javobini qaysi gap bilan boshlash yaxshi?", opts: ["Thank you for your honest letter.", "You are wrong.", "I have no time.", "Do what I say."], a: 0, why: "Avval rahmat va hamdardlik." } },
        { t: 'check', ex: { k: 'order', uz: "Shu bilan birga, dam olish kunlari pishirishni boshlashingiz mumkin.", words: ['At', 'the', 'same', 'time,', 'you', 'could', 'start', 'baking', 'at', 'weekends.'], extra: ['should', 'to'], why: "**You could…** — variant ko'rsatish." } },
      ],
    },
    {
      title: "Yozing: o'z javobingiz",
      blocks: [
        { t: 'p', md: "Endi o'zingiz yozing. Quyidagi maktubga **6–8 gapdan** iborat javob yozing:" },
        { t: 'text', title: 'Letter to the problem page', en: "Dear Alex, I have a problem. My best friend borrowed some money from me six months ago and she has not paid it back. I do not want to lose our friendship, but I need the money. I wish I had not lent it to her. What should I do? Thanks, Sara", uz: "Hurmatli Aleks, menda muammo bor. Eng yaqin do'stim olti oy oldin mendan pul qarz oldi va hali qaytarmadi. Do'stligimizni yo'qotishni xohlamayman, lekin menga pul kerak. Kaskiydi, unga qarz bermasam edi. Nima qilishim kerak? Rahmat, Sara" },
        { t: 'p', md: "**Namuna javob:**" },
        { t: 'text', title: 'Model answer', voice: 'george', en: "Dear Sara, Thank you for your letter. I am sorry to hear about your problem. It is hard to talk about money with a friend. If I were you, I would speak to her in private and stay calm. You could say that you need the money soon, and ask when she can pay it back. Also, why don't you suggest small monthly payments? In that way, it would be easier for her. Next time, you shouldn't lend money if you cannot afford to lose it. I hope everything works out. Best wishes, Alex", uz: "Hurmatli Sara, maktubingiz uchun rahmat. Muammongiz haqida eshitib afsusdaman. Do'st bilan pul haqida gaplashish qiyin. Sizning o'rningizda bo'lsam, u bilan yakkama-yakka va xotirjam gaplashardim. Pulga tez orada ehtiyojingiz borligini aytib, qachon qaytara olishini so'rashingiz mumkin. Yana, har oy kichik to'lovlarni taklif qilsangiz-chi? Shunda unga osonroq bo'lardi. Keyingi safar, yo'qotishga qodir bo'lmasangiz, qarz bermasligingiz kerak. Hammasi yaxshi bo'lishiga umid qilaman. Eng yaxshi tilaklar bilan, Aleks" },
        { t: 'tip', tone: 'good', md: "Yozgandan keyin tekshiring: **If I were you, I would…** (was emas), **You could…**, **why don't you…?**, **no ‘will’ after if**. Har bir gap oxirida nuqta bo'lsin va javob **Dear …** bilan boshlansin." },
        { t: 'check', ex: { k: 'fix', wrong: 'If I will be you, I would speak to her.', a: ['If I were you, I would speak to her.', "If I were you, I'd speak to her.", 'If I was you, I would speak to her.', "If I was you, I'd speak to her."], why: "**If I were you**." } },
      ],
    },
  ],
  words: [
    { en: 'reader', uz: "o'quvchi, kitobxon", ipa: 'ˈriː.də', pos: 'noun', ex: "A reader wrote to the magazine.", exUz: "Bir o'quvchi jurnalga yozdi." },
    { en: 'cope with', uz: "uddalamoq, bardosh bermoq", ipa: 'kəʊp wɪð', pos: 'phrase', ex: "How do you cope with stress?", exUz: "Stressga qanday bardosh berasiz?" },
    { en: 'support', uz: "qo'llab-quvvatlamoq; qo'llab-quvvatlash", ipa: 'səˈpɔːt', pos: 'verb', ex: "My family always supports me.", exUz: "Oilam meni doim qo'llab-quvvatlaydi." },
    { en: 'pressure', uz: "bosim", ipa: 'ˈpreʃ.ə', pos: 'noun', ex: "There is a lot of pressure at work.", exUz: "Ishda bosim juda katta." },
    { en: 'reply', uz: "javob; javob bermoq", ipa: 'rɪˈplaɪ', pos: 'noun', ex: "I'm waiting for your reply.", exUz: "Javobingizni kutyapman." },
  ],
  practice: [
    { k: 'match', pairs: [['reader', "o'quvchi"], ['cope with', 'uddalamoq'], ['support', "qo'llab-quvvatlamoq"], ['pressure', 'bosim'], ['reply', 'javob']] },
    { k: 'choice', q: "A problem page is a place where ...", opts: ['readers ask for advice', 'people sell things', 'people read the weather', 'people book tickets'], a: 0, why: "**problem page** — maslahat ustuni." },
    { k: 'choice', q: "Which sentence gives gentle advice?", opts: ["If I were you, I would talk to her.", "You must talk to her.", "You are stupid.", "I know everything."], a: 0, why: "**If I were you, I would…**" },
    { k: 'fill', q: "Dear Alex, thank you for your ___ letter.", a: ['honest', 'kind', 'long', 'interesting', 'helpful'], hint: 'one adjective', why: "Maktubni maqtaydigan sifat kerak." },
    { k: 'fill', q: "In that ___, you would save more money.", a: ['way'], uz: "Shunda ko'proq pul tejagan bo'lardingiz.", why: "**In that way** — shunda, bu usulda." },
    { k: 'fill', q: "Why ___ you speak to your parents calmly?", a: ["don't"], uz: "Ota-onangiz bilan xotirjam gaplashsangiz-chi?", why: "**Why don't you…?**" },
    { k: 'listen', say: 'I am sorry to hear about your problem.', opts: ['I am sorry to hear about your problem.', 'I am sorry to hear about your party.', 'I am happy to hear about your problem.', 'I am sorry to see your problem.'], a: 0 },
    { k: 'order', uz: "Sizning o'rningizda bo'lsam, shoshilmasdim.", words: ['If', 'I', 'were', 'you,', 'I', 'would', 'not', 'hurry.'], extra: ['was', 'will'], why: "**If I were you, I would not…**" },
    { k: 'fix', wrong: 'If I was you, I will wait.', a: ['If I were you, I would wait.', "If I were you, I'd wait.", 'If I was you, I would wait.', "If I was you, I'd wait."], why: "Second conditional: **would**, *will* emas." },
    { k: 'translate', uz: "Kaskiydi, unga qarz bermasam edi.", a: ["I wish I hadn't lent it to him.", "I wish I hadn't lent it to her.", "I wish I hadn't lent him the money.", "I wish I hadn't lent her the money.", "I wish I had not lent it to him.", "I wish I had not lent it to her.", "I wish I had not lent him the money.", "I wish I had not lent her the money."], why: "O'tgan zamon pushaymonligi: **wish + hadn't + V3**." },
    { k: 'tf', q: "A good reply to a problem page starts with understanding the reader's feelings.", a: true, why: "Avval hamdardlik, keyin maslahat." },
    { k: 'dictation', say: 'It is hard to talk about money with a friend.', a: ['It is hard to talk about money with a friend.', "It's hard to talk about money with a friend."], uz: "Do'st bilan pul haqida gaplashish qiyin." },
    { k: 'translate', uz: "Omad tilayman!", a: ['Good luck!', 'I wish you good luck!', 'Best of luck!'] },
  ],
  quiz: [
    { k: 'choice', q: "Which part comes at the end of a reply?", opts: ['Good luck!', 'Dear Sara,', 'Thank you for your letter.', 'I understand your problem.'], a: 0, why: "Dalda va xayrlashuv oxirida keladi." },
    { k: 'choice', q: "\"I feel a lot of pressure.\" Pressure means ...", opts: ['stress from other people', 'a nice present', 'a long holiday', 'a new job'], a: 0, why: "**pressure** — bosim." },
    { k: 'fill', q: "You ___ talk to your teacher about it. (variant)", a: ['could'], why: "**You could…** — variant ko'rsatish." },
    { k: 'fill', q: "I understand that it is a ___ choice. (qiyin)", a: ['difficult', 'hard', 'tough'], why: "Qiyin tanlov: *difficult / hard*." },
    { k: 'order', uz: "Hamma narsa yaxshi bo'lishiga umid qilaman.", words: ['I', 'hope', 'everything', 'works', 'out.'], extra: ['wish', 'worked'], why: "**hope** — bo'lishi mumkin ish." },
    { k: 'translate', uz: "Sizning o'rningizda bo'lsam, men do'stim bilan gaplashardim.", a: ["If I were you, I would talk to my friend.", "If I were you, I'd talk to my friend.", "If I was you, I would talk to my friend.", "If I was you, I'd talk to my friend.", "If I were you, I would talk to a friend.", "If I were you, I'd talk to a friend."], why: "**If I were you, I would…**" },
    { k: 'listen', say: "Why don't you talk to your parents?", opts: ["Why don't you talk to your parents?", "Why didn't you talk to your parents?", "Why don't you talk to your teacher?", 'Why do you talk to your parents?'], a: 0 },
    { k: 'tf', q: "In a reply, you can write: \"Do what I say, or you are stupid.\"", a: false, why: "Maslahat muloyim bo'lishi kerak." },
  ],
  summary: [
    "**Problem page** — o'quvchi muammosini yozadi, mutaxassis maslahat beradi. Avval asosiy muammoni toping.",
    "Javob tuzilmasi: **salom, hamdardlik, maslahat, sabab, dalda**.",
    "Foydali iboralar: **If I were you, I would… / You could… / Why don't you…? / In that way, … / Good luck!**",
    "Yangi so'zlar: **reader, cope with, support, pressure, reply**.",
  ],
  homework: "Do'stingiz ishdan charchagan va ishini o'zgartirmoqchi. Unga 6–8 gapdan iborat maslahat javobi yozing: salom, hamdardlik, ikkita maslahat, sabab va dalda.",
};

export default lesson;
