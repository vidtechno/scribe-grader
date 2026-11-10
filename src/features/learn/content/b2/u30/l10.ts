import type { Lesson } from '../../../types';

// Mini lesson (situation): a 3-minute presentation and the question session. Signposting, concluding, handling a difficult question.
const lesson: Lesson = {
  id: 'u30-l10',
  title: 'Giving and responding to a presentation',
  titleUz: 'Taqdimot qilish va savollarga javob berish',
  mini: true,
  kind: 'situation',
  goal: "3 daqiqalik taqdimotni **ochasiz**, **signposting** iboralari bilan (*I'll start by…, Moving on to…*) tartibli olib borasiz, **xulosa qilasiz** va tinglovchilarning savollariga, jumladan qiyin savolga ham, xotirjam javob berasiz.",
  slides: [
    {
      title: "Taqdimotning tuzilishi",
      blocks: [
        { t: 'p', md: "Ish yoki o'qishda qisqa taqdimot berish kerak bo'ladi: loyiha, hisobot, mavzu bo'yicha ma'ruza. Tinglovchi **nima kelayotganini oldindan bilsa**, tushunish osonlashadi. Shuning uchun taqdimot to'rt qismga bo'linadi va har biri aniq iboralar bilan **signpost** qilinadi (yo'l ko'rsatkichi kabi)." },
        { t: 'table', head: ['Qism', 'Ibora'], speak: [1], rows: [
          ['Ochish', "Good morning, everyone. Today I'd like to give you an overview of our new project."],
          ['Reja', "I'll start by describing the problem, then I'll move on to our solution."],
          ["Keyingi qism", "Moving on to the results, as you can see on this slide…"],
          ['Misol', "To give you an example, last month we saved two hours a day."],
          ['Xulosa', "To sum up, the main point is that the new system is faster."],
          ['Yakun', "Thank you for listening. I'd be happy to take any questions."],
        ] },
        { t: 'tip', tone: 'info', md: "**overview** — umumiy ko'rinish, qisqa tavsif. **recap** — oldin aytilganni qisqa takrorlash: *Let me quickly recap.* Slaydni ko'rsatganda: *As you can see on this slide…*, *This graph shows…*." },
        { t: 'check', ex: { k: 'choice', q: "Which phrase moves the audience to the next part?", opts: ["Good morning, everyone.", "Moving on to the results…", "Thank you for listening.", "I have no idea."], a: 1, why: "**Moving on to…** — keyingi qismga o'tish (signposting)." } },
      ],
    },
    {
      title: "Aniq va qisqa gapirish",
      blocks: [
        { t: 'examples', items: [
          { en: "I'll keep this concise: three points, three minutes.", uz: "Qisqa gapiraman: uchta fikr, uch daqiqa.", note: "**concise** — qisqa va aniq." },
          { en: "Let me elaborate on the second point.", uz: "Ikkinchi fikrni batafsilroq tushuntiray.", note: "**elaborate on** + ot." },
          { en: "Could I clarify what I mean by 'user-friendly'?", uz: "'Qulay' deganda nimani nazarda tutayotganimni aniqlashtirsam bo'ladimi?", note: "**clarify** — aniqlashtirmoq." },
          { en: "That brings me to my final point.", uz: "Bu meni oxirgi fikrimga olib keladi.", note: "Keyingi qismga yumshoq o'tish." },
        ] },
        { t: 'compare',
          good: { title: "To'g'ri", items: ["I'd like to talk about our results.", "Let me elaborate on this point.", "Thank you for your attention."], },
          bad: { title: 'Xato', items: ["I want to speak about on our results.", "Let me elaborate this point.", "Thanks for your attentions."] } },
        { t: 'tip', tone: 'warn', md: "Tipik xatolar: *talk about* dan keyin ortiqcha *on* qo'shish, **elaborate** dan keyin **on** ni tushirib qoldirish va *attention* ni ko'plikda ishlatish. Slaydga qarab o'qimang: tinglovchiga qarab gapiring, qog'ozga emas." },
        { t: 'check', ex: { k: 'fix', wrong: "Let me elaborate this point in more detail.", a: ["Let me elaborate on this point in more detail."], why: "**elaborate on** + ot. *on* kerak." } },
        { t: 'check', ex: { k: 'fill', q: "To ___ up, our main finding is that customers prefer shorter forms.", a: ['sum'], why: "Xulosa iborasi: **To sum up,…**" } },
      ],
    },
    {
      title: "Savollarga javob berish",
      blocks: [
        { t: 'p', md: "Taqdimotdan keyin savol-javob qismi bo'ladi. Qiyin savolda **vaqt ola olasiz**: tinglovchiga bu yoqadi, chunki o'ylab javob berayotganingiz ko'rinadi." },
        { t: 'table', head: ['Holat', 'Ibora'], speak: [1], rows: [
          ["Savolni yaxshi deb qabul qilish", "That's a good point."],
          ["O'ylash uchun vaqt olish", "Let me think about that for a moment."],
          ["Savolni aniqlashtirish", "If I understand you correctly, you are asking about the cost?"],
          ["Bilmasangiz", "I'm afraid I don't have the exact figure, but I can find out and email you."],
          ["Boshqa mavzuga o'tish", "I'd be happy to discuss that after the session."],
        ] },
        { t: 'tip', tone: 'good', md: "Bilmagan narsani **to'qimang**. *I'm afraid I don't have that information with me* — halol va professional javob. Keyin yechim taklif qiling: *I'll check and get back to you.*" },
        { t: 'check', ex: { k: 'choice', q: "You do not know the exact number. The best answer is:", opts: ["I made it up, sorry.", "I'm afraid I don't have the figure with me, but I'll check and get back to you.", "Nobody knows that.", "Next question, please."], a: 1, why: "Halol, muloyim va yechim taklif qiladi: **I'll get back to you**." } },
      ],
    },
    {
      title: "O'qing va tinglang",
      blocks: [
        { t: 'text', title: 'The opening of a short presentation', voice: 'emma', en: "Good morning, everyone, and thank you for coming. Today I'd like to give you a short overview of our plan to open a small language club in the local library. I'll start by explaining why we need it. Then I'll move on to the costs, and finally I'll outline the next steps. First, the problem. Many people in our town want to practise speaking, but there are few places where they can do it for free. As you can see on this slide, more than half of the people we asked said they would join a weekly club. Moving on to the costs, the main expense is the room, which the library has offered at a low price. To sum up, the club is cheap, useful and popular. Thank you for listening. I'd be happy to take any questions.", uz: "Hammaga xayrli tong, kelganingiz uchun rahmat. Bugun men sizga mahalliy kutubxonada kichik til klubi ochish rejamiz haqida qisqa umumiy ma'lumot bermoqchiman. Avval nega bu kerakligini tushuntiraman. Keyin xarajatlarga o'taman va oxirida keyingi qadamlarni aytaman. Birinchi, muammo. Shaharimizdagi ko'p odam gapirishni mashq qilmoqchi, lekin buni bepul qiladigan joy kam. Slaydda ko'rib turganingizdek, so'ralganlarning yarmidan ko'pi haftalik klubga qo'shilishini aytgan. Xarajatlarga o'tsak, asosiy xarajat xona, uni kutubxona arzon narxda taklif qildi. Xulosa qilsak, klub arzon, foydali va mashhur. Tinglaganingiz uchun rahmat. Savollarga mamnuniyat bilan javob beraman." },
        { t: 'check', ex: { k: 'tf', q: "According to the text, the main cost is the room.", a: true, why: "*the main expense is the room, which the library has offered at a low price.*" } },
        { t: 'check', ex: { k: 'choice', q: "Which phrase does the speaker use to close the talk?", opts: ["I'll start by explaining why we need it.", "Moving on to the costs…", "I'd be happy to take any questions.", "As you can see on this slide…"], a: 2, why: "Yakunlash va savollarni taklif qilish: **I'd be happy to take any questions.**" } },
        { t: 'dialog', lines: [
          { who: 'Sardor', en: "Thank you for listening. I'd be happy to take any questions.", uz: "Tinglaganingiz uchun rahmat. Savollarga mamnuniyat bilan javob beraman." },
          { who: 'Laura', en: "Thank you, Sardor. How will you pay for the teachers?", uz: "Rahmat, Sardor. O'qituvchilarga qanday to'laysiz?" },
          { who: 'Sardor', en: "That's a good point. Let me think about that for a moment.", uz: "Yaxshi savol. Bir lahza o'ylab olay." },
          { who: 'Sardor', en: "At the moment, volunteers will lead the sessions, so there is no cost. If we grow, we may ask for a small fee.", uz: "Hozircha ko'ngillilar mashg'ulot olib boradi, shuning uchun xarajat yo'q. Agar kengaysak, kichik to'lov so'rashimiz mumkin." },
          { who: 'Laura', en: "And if the volunteers leave?", uz: "Ko'ngillilar ketib qolsa-chi?" },
          { who: 'Sardor', en: "I'm afraid I don't have a full answer yet, but I'll check with the library and get back to you by Friday.", uz: "Afsuski, hozircha to'liq javobim yo'q, lekin kutubxona bilan gaplashib, juma kuniga qadar sizga xabar beraman." },
        ] },
        { t: 'check', ex: { k: 'choice', q: "What does Sardor say when he does not have a full answer?", opts: ["He changes the subject.", "He promises to check and get back to her.", "He says the question is stupid.", "He asks Laura to leave."], a: 1, why: "*I'll check with the library and get back to you by Friday.*" } },
      ],
    },
  ],
  words: [
    { en: 'overview', uz: "umumiy ko'rinish, qisqacha tavsif", ipa: 'ˈəʊ.və.vjuː', pos: 'noun', ex: 'She gave the board an overview of the sales figures.', exUz: "U kengashga sotuv ko'rsatkichlari haqida umumiy tavsif berdi." },
    { en: 'signpost', uz: "(nutqda) yo'l ko'rsatmoq, rejani oldindan aytmoq", ipa: 'ˈsaɪn.pəʊst', pos: 'verb', ex: 'Good speakers signpost each part of the talk.', exUz: "Yaxshi notiqlar nutqning har bir qismini oldindan ko'rsatib boradi." },
    { en: 'elaborate', uz: "batafsil tushuntirmoq (on bilan)", ipa: 'ɪˈlæb.ə.reɪt', pos: 'verb', ex: 'Could you elaborate on your second point?', exUz: "Ikkinchi fikringizni batafsilroq tushuntirib bera olasizmi?" },
    { en: 'recap', uz: "qisqacha takrorlamoq", ipa: 'ˈriː.kæp', pos: 'verb', ex: 'Let me recap the main points before we finish.', exUz: "Tugatishdan oldin asosiy fikrlarni qisqacha takrorlay." },
    { en: 'concise', uz: "qisqa va aniq", ipa: 'kənˈsaɪs', pos: 'adj', ex: 'Your summary was clear and concise.', exUz: "Sizning xulosangiz aniq va qisqa edi." },
    { en: 'clarify', uz: "aniqlashtirmoq", ipa: 'ˈklær.ɪ.faɪ', pos: 'verb', ex: 'Could you clarify what you mean by "soon"?', exUz: "'Tez orada' deganda nimani nazarda tutayotganingizni aniqlashtira olasizmi?" },
  ],
  practice: [
    { k: 'match', pairs: [['overview', "umumiy ko'rinish"], ['recap', 'qisqacha takrorlash'], ['concise', 'qisqa va aniq'], ['clarify', 'aniqlashtirmoq'], ['elaborate on', 'batafsil tushuntirmoq']] },
    { k: 'choice', q: "'I'll start by describing the problem, then I'll move on to the solution.' This sentence is:", opts: ['a closing remark', 'signposting the structure', 'answering a question', 'a polite refusal'], a: 1, why: "Reja oldindan aytilyapti — bu **signposting**." },
    { k: 'fill', q: "To ___ up, the new schedule will save us time.", a: ['sum'], uz: "Xulosa qilsak, yangi jadval vaqtimizni tejaydi.", why: "**To sum up** — xulosa iborasi." },
    { k: 'listen', say: 'Moving on to the results, as you can see on this slide.', opts: ['Moving on to the results, as you can see on this slide.', 'Moving on the results, as you see in this slide.', 'Moving on to the result, as you can see on that slide.', 'Moving off to the results, as you can see on this slide.'], a: 0 },
    { k: 'order', uz: "Savollarga mamnuniyat bilan javob beraman.", words: ["I'd", 'be', 'happy', 'to', 'take', 'any', 'questions.'], extra: ['taking', 'are'], alt: [['I', 'would', 'be', 'happy', 'to', 'take', 'any', 'questions.']], why: "**be happy to + fe'l**." },
    { k: 'fix', wrong: "Could you elaborate your last point?", a: ["Could you elaborate on your last point?"], why: "**elaborate on** + ot." },
    { k: 'choice', q: "A listener asks a hard question. Which reply buys you time politely?", opts: ["Let me think about that for a moment.", "I do not care.", "Why do you ask?", "That is not my problem."], a: 0, why: "**Let me think about that for a moment** — professional va muloyim." },
    { k: 'translate', uz: "Qisqa gapiraman: uchta fikr, uch daqiqa.", a: ["I'll keep this concise: three points, three minutes.", "I will keep this concise: three points, three minutes.", "I'll keep it concise: three points, three minutes."], why: "**keep this concise** — qisqa tutmoq." },
    { k: 'tf', q: "If you do not know a figure, it is better to guess and say it confidently.", a: false, why: "Halol bo'ling: *I don't have it with me, but I'll check and get back to you.*" },
    { k: 'fill', q: "Let me ___ the main points before we finish.", a: ['recap'], uz: "Tugatishdan oldin asosiy fikrlarni takrorlab o'tay.", why: "**recap** — qisqa takrorlash." },
    { k: 'dictation', say: "That's a good point. Let me think about that.", a: ["That's a good point. Let me think about that.", "That is a good point. Let me think about that."], uz: "Yaxshi savol. O'ylab ko'ray." },
    { k: 'order', uz: "Slaydda ko'rib turganingizdek, sotuvlar oshdi.", words: ['As', 'you', 'can', 'see', 'on', 'this', 'slide,', 'sales', 'have', 'risen.'], extra: ['in', 'rise'], alt: [['As', 'you', 'can', 'see', 'on', 'this', 'slide,', 'sales', 'have', 'increased.']], why: "**As you can see on this slide,…**" },
    { k: 'choice', q: "'Thanks for your attentions.' What is wrong?", opts: ["attention is uncountable", "there should be no thanks", "it must be 'attend'", "nothing is wrong"], a: 0, why: "**attention** sanalmaydigan ot: *Thank you for your attention.*" },
    { k: 'speak', say: "Today I'd like to give you an overview of our plan.", uz: "Bugun sizga rejamiz haqida umumiy ma'lumot bermoqchiman." },
  ],
  quiz: [
    { k: 'choice', q: "You finish your talk. The best last sentence is:", opts: ["That's all, bye.", "Thank you for listening. I'd be happy to take any questions.", "I am tired now.", "Who has an answer?"], a: 1, why: "Rahmat + savollarni taklif qilish — standart yakun." },
    { k: 'fill', q: "I'll start ___ explaining the problem.", a: ['by'], uz: "Muammoni tushuntirishdan boshlayman.", why: "**start by + -ing**." },
    { k: 'choice', q: "Which word means 'short and clear'?", opts: ['concise', 'elaborate', 'ritual', 'recap'], a: 0, why: "**concise** — qisqa va aniq." },
    { k: 'fix', wrong: "Let me clarify you what I mean.", a: ["Let me clarify what I mean."], why: "**clarify** dan keyin odam emas, narsa (nima ekanligi) keladi." },
    { k: 'order', uz: "Bu meni oxirgi fikrimga olib keladi.", words: ['That', 'brings', 'me', 'to', 'my', 'final', 'point.'], extra: ['bring', 'at'], why: "**That brings me to…**" },
    { k: 'tf', q: "*Signpost* in a talk means telling listeners which part is coming next.", a: true, why: "**signpost** — rejani oldindan ko'rsatish." },
    { k: 'choice', q: "Which is NOT a good way to handle a difficult question?", opts: ["Let me think about that.", "I'll check and get back to you.", "I'm afraid I don't have the figure.", "That's a stupid question."], a: 3, why: "Hurmatsiz javob tinglovchini xafa qiladi, qolganlari esa professional." },
    { k: 'listen', say: 'To give you an example, last month we saved two hours a day.', opts: ['To give you an example, last month we saved two hours a day.', 'To give you examples, last month we saved two hours a day.', 'To give you an example, last month we spent two hours a day.', 'To give you an example, next month we will save two hours a day.'], a: 0 },
  ],
  summary: [
    "Taqdimot tuzilishi: **ochish → reja → qismlar → xulosa → savollar**.",
    "Signposting: *I'll start by…, Moving on to…, That brings me to…, To sum up…*",
    "**elaborate on**, **clarify what…**, **recap** — aniq va professional so'zlar. *attention* sanalmaydi.",
    "Qiyin savolda: *That's a good point. Let me think… I'll check and get back to you.* Hech qachon to'qimang.",
    "Yangi so'zlar: **overview, signpost, elaborate, recap, concise, clarify**.",
  ],
  homework: "3 daqiqalik qisqa taqdimot (masalan, o'z kasbingiz yoki sevimli mavzuingiz) rejasini yozing: ochish, 3 ta qism (har biri signposting iborasi bilan), xulosa va savol taklifi. Telefonda yozib oling va **concise** bo'lganini tekshiring.",
};

export default lesson;
