import type { Lesson } from '../../../types';

// Mini lesson (skill): reading a newspaper column about regret (gist, detail, attitude) and writing a 120-word comment.
const lesson: Lesson = {
  id: 'u25-l15',
  title: 'Reading and writing: an opinion column',
  titleUz: "O'qish va yozish: gazeta ustuni — 'Agar qaytadan boshlasam…'",
  mini: true,
  kind: 'skill',
  goal: "Pushaymonlik haqidagi **gazeta ustunini** o'qib, uning **asosiy g'oyasi, tafsilotlari va muallifning munosabatini** topasiz, keyin ustunga **120 so'zlik izoh** yozasiz: qisman rozilik, shaxsiy misol va yumshatilgan fikr bilan.",
  slides: [
    {
      title: "Ustunni qanday o'qiladi?",
      blocks: [
        { t: 'p', md: "**Ustun** (*column*) — gazeta yoki saytdagi muallifning shaxsiy fikri. Uni yozgan odam **columnist** deyiladi. Ustun faktlarni emas, **fikr va munosabatni** beradi, shuning uchun savollar ham uch xil bo'ladi:" },
        { t: 'table', head: ['Savol turi', 'Nimani so\'raydi', 'Strategiya'], rows: [
          ['Gist (asosiy g\'oya)', 'Matn nima haqida va muallif nima demoqchi', "Birinchi va oxirgi abzatsni o'qing"],
          ['Detail (tafsilot)', 'Aniq ma\'lumot: kim, nima, qachon', "Kalit so'zni toping va uning atrofini o'qing"],
          ["Attitude (munosabat)", "Muallif qanday his qiladi va nima deb o'ylaydi", "Baholovchi so'zlarga e'tibor bering (*easy, scary, useless*)"],
        ] },
        { t: 'tip', tone: 'info', md: "Munosabat savolida **matndagi so'zni aynan** emas, **ma'nosini** qidiring. *Regret is useless* — matnda yo'q, lekin *I do not claim that regret is useless* — muallif buni **rad etadi**." },
        { t: 'check', ex: { k: 'choice', q: "Which question type asks how the writer feels about a topic?", opts: ["Attitude", "Detail", "Date", "Spelling"], a: 0, why: "Muallifning his-tuyg'usi va fikri → **attitude** savoli." } },
      ],
    },
    {
      title: "O'qing: ustun",
      blocks: [
        {
          t: 'text', title: 'If I could start again', voice: 'emma',
          en: "Every New Year, someone asks me the same question: 'If you could start again, what would you change?' For years I answered with a long list. I would have studied abroad, saved more money and spoken up in meetings. Lately I have changed my mind. It is easy to reminisce about the past through rose-tinted glasses and imagine a perfect version of ourselves who made no mistakes. But that person would not be me. If I had taken the safe path, I wouldn't have learnt to trust my own judgement. I do not claim that regret is useless; it can show us what we truly value. Yet living in a world of what-ifs prevents us from acting today. Perhaps the healthiest goal is not to erase the past but to make peace with it. Once we find that kind of closure, we can spend our energy on what comes next. So my answer now is short: I would change almost nothing, and I would start sooner on the things that scare me.",
          uz: "Har Yangi yilda kimdir menga bir xil savol beradi: 'Agar qaytadan boshlay olsangiz, nimani o'zgartirardingiz?' Yillar davomida uzun ro'yxat bilan javob berardim. Chet elda o'qigan bo'lardim, ko'proq pul jamg'argan bo'lardim va yig'ilishlarda ochiq gapirgan bo'lardim. Yaqinda fikrim o'zgardi. O'tmishni atirgul rangli ko'zoynak orqali eslash va hech qanday xato qilmagan mukammal o'zimizni tasavvur qilish oson. Lekin u odam men bo'lmasdim. Agar xavfsiz yo'lni tanlaganimda, o'z mulohazamga ishonishni o'rganmagan bo'lardim. Pushaymon foydasiz demayman; u bizga nimani chindan qadrlashimizni ko'rsatishi mumkin. Ammo 'agar shunday bo'lganida' dunyosida yashash bugun harakat qilishimizga xalaqit beradi. Balki eng sog'lom maqsad o'tmishni o'chirish emas, u bilan yarashishdir. Shunday xotirjamlikka erishgach, kuchimizni keyingi ishlarga sarflay olamiz. Shuning uchun hozirgi javobim qisqa: deyarli hech narsani o'zgartirmasdim va meni qo'rqitadigan ishlarni oldinroq boshlardim.",
        },
        { t: 'check', ex: { k: 'choice', q: "What is the main message of the column?", opts: ["Making peace with the past is healthier than imagining a perfect one.", "Everyone should start their life again.", "Regret is always harmful.", "Safe choices are the best choices."], a: 0, why: "Gist: muallif o'tmish bilan yarashishni, mukammal o'tmishni xayol qilishdan ustun qo'yadi." } },
        { t: 'check', ex: { k: 'tf', q: "The writer thinks that regret is completely useless.", a: false, why: "Matnda: *I do not claim that regret is useless; it can show us what we truly value.*" } },
        { t: 'check', ex: { k: 'choice', q: "The writer's attitude to the past can best be described as ___.", opts: ["accepting but practical", "bitter and angry", "indifferent", "sad and nostalgic"], a: 0, why: "U xatolarni qabul qiladi (*make peace*), lekin amaliy bo'ladi (*start sooner on the things that scare me*)." } },
      ],
    },
    {
      title: "Ustunning tili",
      blocks: [
        { t: 'p', md: "Ustun muallifi o'z fikrini bu bosqichning qoliplari bilan quradi. Matndan misollar:" },
        { t: 'examples', items: [
          { en: "If I had taken the safe path, I wouldn't have learnt to trust my own judgement.", uz: "Agar xavfsiz yo'lni tanlaganimda, o'z mulohazamga ishonishni o'rganmagan bo'lardim.", note: "Uchinchi shart: o'tgan sabab va o'tgan natija." },
          { en: "I would have studied abroad, saved more money and spoken up in meetings.", uz: "Chet elda o'qigan, ko'proq pul jamg'argan va yig'ilishlarda gapirgan bo'lardim.", note: "**would have + V3** — o'tgan haqida xayol." },
          { en: "Perhaps the healthiest goal is not to erase the past but to make peace with it.", uz: "Balki eng sog'lom maqsad o'tmishni o'chirish emas, u bilan yarashishdir.", note: "**Perhaps** — fikrni yumshatadi; **make peace with** — yarashmoq." },
          { en: "It is easy to reminisce about the past through rose-tinted glasses.", uz: "O'tmishni atirgul rangli ko'zoynak orqali eslash oson.", note: "**reminisce** — xotiralarni yoqimli eslamoq; **rose-tinted** — go'zallashtirilgan." },
        ] },
        { t: 'tip', tone: 'good', md: "Yangi so'zlar: **columnist** (ustun muallifi), **reminisce** (xotiralarga berilmoq), **rose-tinted** (go'zallashtirilgan), **closure** (og'riqli voqeaning tugagani haqidagi xotirjamlik), **make peace with** (yarashmoq), **what-if** (*«agar shunday bo'lganida»* kabi xayol)." },
        { t: 'check', ex: { k: 'fill', q: "Looking at the past through ___ glasses means remembering it as better than it really was.", a: ['rose-tinted', 'rose tinted'], why: "Ibora: **rose-tinted glasses**." } },
      ],
    },
    {
      title: "Yozing: 120 so'zlik izoh",
      blocks: [
        { t: 'p', md: "Ustunga javob yozishda **to'rt qadam** bajaring. Har biri 1–2 gap:" },
        { t: 'table', head: ['Qadam', 'Nima yoziladi', 'Foydali ibora'], speak: [2], rows: [
          ['1. Fikringiz', "Qisman rozi yoki rozi emasligingiz", "I only partly agree with the writer."],
          ['2. Misol', "Shaxsiy tajriba (aralash shart yoki *wish*)", "I wish I had continued my course."],
          ['3. Qarama-qarshi fikr', "Rozi bo'lgan tomoningiz", "To some extent, the columnist is right."],
          ['4. Xulosa', "Bir gapda yakun", "A lesson is only useful if we act on it."],
        ] },
        {
          t: 'text', title: 'A model comment', voice: 'george',
          en: "I enjoyed this column, but I only partly agree. The writer says she would change almost nothing, yet I think a little regret is healthy. When I was twenty, I dropped a language course because it was hard, and I wish I had continued. If I hadn't quit, I might be working abroad now. That regret did not paralyse me; it pushed me to enrol again last year. On the other hand, I agree that dwelling on what-ifs is pointless. Presumably the best approach is to learn from the past without living in it. To some extent, the columnist is right: our mistakes shape who we are. However, I would add that a hard-won lesson is only useful if we act on it.",
          uz: "Bu ustun menga yoqdi, lekin men qisman rozi bo'laman. Muallif deyarli hech narsani o'zgartirmasligini aytadi, ammo menimcha, ozgina pushaymon foydali. Yigirma yoshimda qiyin bo'lgani uchun til kursini tashlab qo'ydim va davom ettirganimda edi, deb o'ylayman. Agar tashlamaganimda, hozir chet elda ishlayotgan bo'lishim mumkin edi. Bu pushaymon meni falaj qilmadi; o'tgan yili yana yozilishga undadi. Boshqa tomondan, 'agar shunday bo'lganida' haqida o'ylayverish befoyda ekaniga roziman. Taxminimcha, eng yaxshi yo'l — o'tmishdan o'rganish, lekin unda yashamaslik. Ma'lum darajada ustun muallifi haq: xatolarimiz bizni shakllantiradi. Biroq qiyinchilik bilan olingan saboq faqat unga amal qilsak foydali, deb qo'shgan bo'lardim.",
        },
        { t: 'check', ex: { k: 'choice', q: "Which phrase softens an opinion in a comment?", opts: ["To some extent, I agree.", "You are completely wrong.", "That is nonsense.", "Everybody knows that."], a: 0, why: "**To some extent** fikrni yumshatadi; qolganlari qat'iy yoki qo'pol." } },
      ],
    },
    {
      title: "Tekshiruv ro'yxati",
      blocks: [
        { t: 'p', md: "Izohni yuborishdan oldin shu ro'yxatni tekshiring:" },
        { t: 'table', head: ['Tekshirish', 'Savol'], rows: [
          ['Hajm', "Taxminan 120 so'zmi (100–140)?"],
          ['Fikr', "Qisman rozilik yoki rozi emaslikni aniq yozdimmi?"],
          ['Misol', "Bitta shaxsiy misol va bitta aralash shart yoki *wish* bormi?"],
          ['Yumshatish', "Kamida bitta *perhaps / presumably / to some extent* ishlatdimmi?"],
          ['Xatolar', "*If I would have* yoki *I wish I didn't go* kabi xatolar yo'qmi?"],
        ] },
        { t: 'check', ex: { k: 'order', uz: "Ma'lum darajada ustun muallifi haq.", words: ['To', 'some', 'extent,', 'the', 'columnist', 'is', 'right.'], extra: ['much', 'are'], why: "**To some extent,** + gap — yumshatilgan rozilik." } },
      ],
    },
  ],
  words: [
    { en: 'columnist', uz: 'ustun muallifi, kolumnist', ipa: 'ˈkɒl.əm.nɪst', pos: 'noun', ex: 'The columnist writes about family life every Sunday.', exUz: "Kolumnist har yakshanba oilaviy hayot haqida yozadi." },
    { en: 'reminisce', uz: "xotiralarga berilmoq, o'tmishni eslamoq", ipa: 'ˌrem.ɪˈnɪs', pos: 'verb', ex: 'We sat up late and reminisced about our school days.', exUz: "Biz kechgacha o'tirib, maktab kunlarimizni esladik." },
    { en: 'rose-tinted', uz: "go'zallashtirilgan, optimistik", ipa: 'ˌrəʊz ˈtɪn.tɪd', pos: 'adj', ex: 'He looks at his first job through rose-tinted glasses.', exUz: "U birinchi ishiga go'zallashtirib qaraydi." },
    { en: 'closure', uz: "(og'riqli voqeadan keyingi) xotirjamlik, yakun", ipa: 'ˈkləʊ.ʒər', pos: 'noun', ex: 'The apology gave her a sense of closure.', exUz: "Uzr unga voqea tugaganini his qildirdi." },
    { en: 'make peace with', uz: "yarashmoq, qabul qilmoq", ipa: 'meɪk piːs wɪð', pos: 'phrase', ex: 'It took him years to make peace with his decision.', exUz: "Qarori bilan yarashishi unga yillar oldi." },
    { en: 'what-if', uz: "'agar shunday bo'lganida' degan xayol", ipa: 'ˈwɒt.ɪf', pos: 'noun', ex: 'Endless what-ifs kept her awake at night.', exUz: "Cheksiz 'agar shunday bo'lganida'lar uni tunda uxlatmasdi." },
  ],
  practice: [
    { k: 'match', pairs: [['columnist', 'ustun muallifi'], ['reminisce', 'xotiralarga berilmoq'], ['rose-tinted', "go'zallashtirilgan"], ['closure', 'xotirjam yakun'], ['make peace with', 'yarashmoq'], ['what-if', "'agar shunday bo'lganida' xayoli"]] },
    { k: 'choice', q: "In the column, what did the writer **used to** do when asked about starting again?", opts: ["Give a long list of changes", "Refuse to answer", "Change the subject", "Write a short answer"], a: 0, why: "Matnda: *For years I answered with a long list.*" },
    { k: 'tf', q: "The writer wants to start sooner on the things that scare her.", a: true, why: "Oxirgi gap: *I would start sooner on the things that scare me.*" },
    { k: 'choice', q: "The writer's attitude to living in a world of what-ifs is ___.", opts: ["critical", "enthusiastic", "indifferent", "nostalgic"], a: 0, why: "U buni *prevents us from acting today* deb tanqid qiladi." },
    { k: 'fill', q: "It took her years to make ___ with her failure.", a: ['peace'], why: "Ibora: **make peace with**." },
    { k: 'choice', q: "**Closure** means ___.", opts: ["the feeling that something painful has finally ended", "closing a shop for the night", "a type of contract", "a long holiday"], a: 0, why: "**closure** — og'riqli voqeadan keyingi xotirjamlik." },
    { k: 'order', uz: "Agar tashlamaganimda, hozir chet elda ishlayotgan bo'lishim mumkin edi.", words: ["If", "I", "hadn't", "quit,", "I", "might", "be", "working", "abroad", "now."], extra: ['quitting', 'will'], why: "Aralash shart: **If + Past Perfect**, **might + V1**." },
    { k: 'translate', uz: "Men o'tmish bilan yarashishni o'rganishim kerak.", a: ["I need to learn to make peace with the past.", "I have to learn to make peace with the past.", "I should learn to make peace with the past.", "I must learn to make peace with the past."], why: "**make peace with** + ot." },
    { k: 'fix', wrong: "If I would have stayed, I would be happier now.", a: ["If I had stayed, I would be happier now."], why: "**If** dan keyin **Past Perfect**." },
    { k: 'listen', say: "Living in a world of what-ifs prevents us from acting today.", opts: ["Living in a world of what-ifs prevents us from acting today.", "Living in a world of what-ifs helps us to act today.", "Living in a world of dreams prevents us from acting today.", "Living in the past prevents us from sleeping today."], a: 0 },
    { k: 'dictation', say: "My failures taught me more than my successes ever did.", a: ["My failures taught me more than my successes ever did."], uz: "Muvaffaqiyatsizliklarim menga yutuqlarimdan ko'ra ko'proq o'rgatdi." },
    { k: 'choice', q: "Which phrase softens an opinion in a comment?", opts: ["To some extent, I agree.", "You are completely wrong.", "That's nonsense.", "Everybody knows that."], a: 0, why: "**To some extent** — yumshatuvchi ibora." },
    { k: 'speak', say: "I only partly agree with the writer.", uz: "Men muallif bilan faqat qisman roziman." },
  ],
  quiz: [
    { k: 'choice', q: "A ___ writes a regular opinion piece for a newspaper.", opts: ['columnist', 'cashier', 'courier', 'coach'], a: 0, why: "Gazetada muntazam fikr maqolasi yozuvchi → **columnist**." },
    { k: 'choice', q: "He remembers his school days through rose-tinted glasses. This means he ___.", opts: ["remembers them as better than they were", "hated them", "has forgotten them", "needs glasses to read"], a: 0, why: "**rose-tinted** — go'zallashtirilgan, haqiqatdan yaxshiroq." },
    { k: 'choice', q: "In a reading task, an 'attitude' question asks you to find ___.", opts: ["the writer's feelings or opinion", "the date of publication", "a missing word", "the number of paragraphs"], a: 0, why: "Attitude savoli muallifning **fikri va munosabatini** so'raydi." },
    { k: 'choice', q: "Which sentence is a good way to start a comment?", opts: ["I partly agree, but I would add that…", "I agree. The end.", "No.", "Read my blog."], a: 0, why: "Qisman rozilik va qo'shimcha fikr yaxshi izoh boshlanishi." },
    { k: 'fill', q: "I wish I ___ the chance when I was young.", hint: "take", a: ['had taken'], why: "O'tgan pushaymon → **wish + Past Perfect**." },
    { k: 'fill', q: "To some ___, the columnist is right.", a: ['extent'], why: "Ibora: **to some extent**." },
    { k: 'tf', q: "A 120-word comment should include both your opinion and a personal example.", a: true, why: "Topshiriq: fikr, shaxsiy misol, qarama-qarshi fikr va xulosa." },
    { k: 'fix', wrong: "I wish I didn't give up my course when I was twenty.", a: ["I wish I hadn't given up my course when I was twenty.", "I wish I had not given up my course when I was twenty."], why: "O'tgan pushaymon → **wish + Past Perfect**." },
    { k: 'order', uz: "O'tgan 'agar shunday bo'lganida'lar haqida o'ylayverish bugun harakat qilishimizga xalaqit beradi.", words: ['Dwelling', 'on', 'what-ifs', 'stops', 'us', 'from', 'acting', 'today.'], extra: ['to', 'act'], why: "**stop someone from + -ing**." },
  ],
  summary: [
    "Ustun — muallifning shaxsiy fikri; savollar: **gist** (asosiy g'oya), **detail** (tafsilot), **attitude** (munosabat).",
    "Munosabat savolida so'zni emas, **ma'noni** qidiring; baholovchi so'zlarga e'tibor bering.",
    "Ustun tili: **aralash va uchinchi shart**, **would have + V3**, **Perhaps / Presumably / To some extent** bilan yumshatish.",
    "Yangi so'zlar: **columnist, reminisce, rose-tinted, closure, make peace with, what-if**.",
    "120 so'zlik izoh: fikr, shaxsiy misol, qarama-qarshi fikr, xulosa.",
  ],
  homework: "Ustunga 120 so'zlik izoh yozing (yoki o'zingiz tanlagan bitta pushaymon haqida). 4 qadamga rioya qiling, kamida 1 ta aralash shart yoki *wish*, 1 ta yumshatuvchi ibora va 2 ta yangi so'z ishlating. So'zlarni sanab, tekshiruv ro'yxati bilan solishtiring.",
};

export default lesson;
