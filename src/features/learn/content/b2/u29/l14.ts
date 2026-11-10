import type { Lesson } from '../../../types';

// Mini lesson (skill): listening and speaking. A short lecture on urban trees and health (Emma), note-taking, a one-minute spoken summary.
const lesson: Lesson = {
  id: 'u29-l14',
  title: 'Listening and speaking: a science lecture',
  titleUz: "Tinglash va gapirish: ilmiy ma'ruza — konspekt yuritish va qisqacha aytib berish",
  mini: true,
  kind: 'skill',
  goal: "Qisqa **ilmiy ma'ruzani tinglab** asosiy fikrlar va tafsilotlarni **konspektga yozasiz**, ma'ruzachining **signposting** iboralarini (*First…, Another point…, To sum up…*) tanib olasiz va ma'ruzani **1 daqiqada** o'z so'zlaringiz bilan ayta olasiz.",
  slides: [
    {
      title: "Tinglang: shahar daraxtlari haqida ma'ruza",
      blocks: [
        { t: 'p', md: "Ma'ruzani tinglang (▶). Birinchi tinglashda faqat **mavzu** va **nechta asosiy fikr** borligiga e'tibor bering. Har bir so'zni tushunish shart emas. Ma'ruzachi odatda boshida rejani aytadi: *I'll make three main points.*" },
        { t: 'text', title: 'Why cities need trees', voice: 'emma', en: "Good morning, everyone. Today I'd like to talk about something you pass every day without noticing: the trees in our cities. I'll make three main points. First, trees and temperature. A tree gives shade, and it also cools the air around it as water leaves its leaves. On a hot day, a street with a thick canopy of branches can feel several degrees cooler than a street with none. Second, trees and air. Leaves absorb carbon dioxide, and they also catch some of the dust in the air, so urban trees help to keep the air cleaner, although they cannot solve pollution on their own. Third, and perhaps most interesting, trees and wellbeing. Many studies suggest that people who spend time in green spaces feel calmer, and that even a short walk in a park can improve your mood. To sum up, urban trees cool the air, clean it a little, and support our wellbeing. That is why many cities now plant more trees along their streets. Thank you, and now let's take your questions.", uz: "Hammaga xayrli tong. Bugun men siz har kuni sezmay o'tib ketadigan narsa — shaharlarimizdagi daraxtlar haqida gapirmoqchiman. Uchta asosiy fikr aytaman. Birinchisi, daraxtlar va harorat. Daraxt soya beradi va bargidan suv chiqqani uchun atrofdagi havoni ham sovitadi. Issiq kunda qalin shox-barglari bor ko'chada hech narsa yo'q ko'chaga qaraganda bir necha daraja salqinroq bo'lishi mumkin. Ikkinchisi, daraxtlar va havo. Barglar karbonat angidridni yutadi va havodagi changning bir qismini ushlaydi, shuning uchun shahar daraxtlari havoni toza saqlashga yordam beradi, garchi ifloslanishni yolg'iz o'zi hal qila olmasa ham. Uchinchisi, balki eng qiziqi, daraxtlar va farovonlik. Ko'plab tadqiqotlar ko'rsatishicha, yashil joylarda vaqt o'tkazadigan odamlar o'zini xotirjamroq his qiladi va hatto bog'da qisqa sayr ham kayfiyatni yaxshilashi mumkin. Xulosa qilib aytsam, shahar daraxtlari havoni sovitadi, uni ozgina tozalaydi va farovonligimizni qo'llab-quvvatlaydi. Shuning uchun ko'p shaharlar endi ko'chalar bo'ylab ko'proq daraxt ekmoqda. Rahmat, endi savollaringizni eshitaman." },
        { t: 'check', ex: { k: 'choice', q: "What is the main topic of the lecture?", opts: ["Trees in cities and how they help", "How to grow a garden", "Why cities are too hot", "The history of parks"], a: 0, why: "*the trees in our cities*; keyin uchta foydasi aytiladi." } },
        { t: 'check', ex: { k: 'tf', q: 'The lecturer says trees can completely solve air pollution.', a: false, why: "*they cannot solve pollution on their own.*" } },
        { t: 'check', ex: { k: 'listen', say: 'A street with a thick canopy can feel several degrees cooler.', opts: ['A street with a thick canopy can feel several degrees cooler.', 'A street with a thick canopy can feel several degrees warmer.', 'A street with a thin canopy can feel several degrees cooler.', 'A street with a thick canopy cannot feel cooler.'], a: 0 } },
      ],
    },
    {
      title: "Konspekt: qisqa va aniq yozing",
      blocks: [
        { t: 'p', md: "Tinglash vaqtida **to'liq gap yozilmaydi**. Faqat **kalit so'zlar** (ot, raqam, fe'l), **qisqartma** (*→*, *≈*, *e.g.*) va **tuzilma** yoziladi. Shu ma'ruza uchun konspekt shunday ko'rinishi mumkin:" },
        { t: 'table', head: ['Bo\'lim', 'Konspekt'], rows: [
          ['Topic', 'urban trees → 3 points'],
          ['1. Temperature', 'shade + cools air; thick canopy → several degrees cooler'],
          ['2. Air', 'leaves absorb CO2 + catch dust; not a full solution'],
          ['3. Wellbeing', 'green spaces → calmer; short park walk → better mood'],
          ['Conclusion', 'cool air, cleaner air, wellbeing → more trees planted'],
        ] },
        { t: 'tip', tone: 'info', md: "Konspektni **signposting** so'zlariga qarab bo'ling: *First, Second, Third, To sum up*. Raqamlarni, ro'yxatni va sabab-natijani (*so, that is why*) albatta yozing; misol va takrorni tashlab ketishingiz mumkin." },
        { t: 'check', ex: { k: 'fill', q: "Notes, point 2: leaves absorb ___ and catch dust.", a: ['carbon dioxide', 'CO2', 'co2'], uz: "Barglar nimani yutadi?", why: "*Leaves absorb carbon dioxide, and they also catch some of the dust.*" } },
        { t: 'check', ex: { k: 'fill', q: "Notes, point 3: even a short walk in a park can improve your ___.", a: ['mood'], uz: "Qisqa sayr nimani yaxshilaydi?", why: "*even a short walk in a park can improve your mood.*" } },
      ],
    },
    {
      title: "Signposting iboralari",
      blocks: [
        { t: 'table', head: ['Maqsad', 'Ibora'], speak: [1], rows: [
          ['Boshlash', "Today I'd like to talk about…"],
          ['Reja', "I'll make three main points."],
          ['Birinchi fikr', "First, / To begin with, …"],
          ['Keyingi fikr', "Second, … / Another point is that…"],
          ['Eng muhimi', "Third, and perhaps most interesting, …"],
          ['Qarama-qarshi', "Although…, however, …"],
          ['Xulosa', "To sum up, … / In conclusion, …"],
        ] },
        { t: 'tip', tone: 'good', md: "Gapirganda ham shu iboralardan foydalaning. Tinglovchi sizning **rejangizni** kuzatib boradi, siz esa **o'rnini yo'qotmaysiz**. *Firstly / secondly / finally* ham to'g'ri, lekin *first / second / third* tabiiyroq eshitiladi." },
        { t: 'check', ex: { k: 'choice', q: "Which phrase introduces the conclusion?", opts: ["To sum up, urban trees help in three ways.", "Another point is that trees are tall.", "First, trees give shade.", "Today I'd like to talk about trees."], a: 0, why: "**To sum up / In conclusion** — xulosa." } },
        { t: 'check', ex: { k: 'order', uz: "Uchinchi fikr: daraxtlar va farovonlik.", words: ['Third,', 'and', 'perhaps', 'most', 'interesting,', 'trees', 'and', 'wellbeing.'], extra: ['thirdly', 'at'], why: "**Third, and perhaps most interesting, …**." } },
      ],
    },
    {
      title: "Gapiring: 1 daqiqali qisqacha mazmun",
      blocks: [
        { t: 'p', md: "Endi ma'ruzani **o'z so'zlaringiz bilan** 1 daqiqada (taxminan 80–100 so'z) ayting. Reja: **mavzu → 3 asosiy fikr → xulosa**. Quyida namuna (▶ bilan tinglang):" },
        { t: 'text', title: 'Model summary', voice: 'george', en: "The lecture was about trees in cities. The lecturer made three main points. First, trees give shade and cool the air, so a street with a thick canopy feels several degrees cooler. Second, leaves absorb carbon dioxide and catch some dust, which helps to keep the air cleaner, although trees cannot solve pollution alone. Third, studies suggest that spending time in green spaces improves wellbeing and mood. In conclusion, urban trees cool the air, clean it a little and support our wellbeing, which is why more cities are planting them.", uz: "Ma'ruza shaharlardagi daraxtlar haqida edi. Ma'ruzachi uchta asosiy fikr aytdi. Birinchidan, daraxtlar soya beradi va havoni sovitadi, shuning uchun qalin shox-bargli ko'cha bir necha daraja salqin bo'ladi. Ikkinchidan, barglar karbonat angidridni yutadi va ozgina changni ushlaydi, bu havoni toza saqlashga yordam beradi, lekin daraxtlar ifloslanishni yolg'iz o'zi hal qila olmaydi. Uchinchidan, tadqiqotlar ko'rsatishicha, yashil joylarda vaqt o'tkazish farovonlik va kayfiyatni yaxshilaydi. Xulosa qilib, shahar daraxtlari havoni sovitadi, uni ozgina tozalaydi va farovonligimizni qo'llab-quvvatlaydi, shuning uchun ko'proq shaharlar ularni ekmoqda." },
        { t: 'tip', tone: 'warn', md: "Tipik xatolar: **The lecture is talking about…** → *The lecture was about…*; **She told that…** → *She said that…* / *She told us that…*; **explained us** → *explained it to us*; **In the conclusion of…** → *In conclusion, …*." },
        { t: 'check', ex: { k: 'fix', wrong: "The lecturer explained us the three points.", a: ["The lecturer explained the three points to us.", "The lecturer explained the three points."], why: "**explain** + narsa + **to** + kishi; *explained us* — xato." } },
        { t: 'check', ex: { k: 'fix', wrong: "The lecturer told that trees give shade.", a: ["The lecturer said that trees give shade.", "The lecturer told us that trees give shade."], why: "**said that** yoki **told + kishi + that**; *told that* — xato." } },
        { t: 'check', ex: { k: 'fix', wrong: "The lecture is talking about urban trees.", a: ["The lecture is about urban trees.", "The lecture was about urban trees.", "The lecturer talked about urban trees.", "The lecturer is talking about urban trees.", "The lecturer was talking about urban trees."], why: "Ma'ruzaning o'zi gapirmaydi: **the lecture is about…** yoki **the lecturer talked about…**." } },
        { t: 'check', ex: { k: 'fix', wrong: "In the conclusion of, trees help our cities.", a: ["In conclusion, trees help our cities.", "To conclude, trees help our cities."], why: "Qat'iy ibora: **In conclusion,**." } },
      ],
    },
  ],
  words: [
    { en: 'urban', uz: "shahar, shaharga oid", ipa: 'ˈɜːbən', pos: 'adj', ex: 'Urban areas are often warmer than the countryside.', exUz: "Shahar hududlari ko'pincha qishloqdan issiqroq bo'ladi." },
    { en: 'canopy', uz: "daraxt shox-barglari (tepa qismi)", ipa: 'ˈkænəpi', pos: 'noun', ex: 'The forest canopy keeps the ground cool.', exUz: "O'rmon shox-barglari yerni salqin saqlaydi." },
    { en: 'absorb', uz: "yutmoq, o'ziga singdirmoq", ipa: 'əbˈzɔːb', pos: 'verb', ex: 'Plants absorb carbon dioxide from the air.', exUz: "O'simliklar havodan karbonat angidridni yutadi." },
    { en: 'shade', uz: "soya", ipa: 'ʃeɪd', pos: 'noun', ex: 'We sat in the shade of a big tree.', exUz: "Biz katta daraxt soyasida o'tirdik." },
    { en: 'wellbeing', uz: "farovonlik, o'zini yaxshi his qilish", ipa: 'ˈwelbiːɪŋ', pos: 'noun', ex: 'Regular exercise improves mental wellbeing.', exUz: "Muntazam mashq ruhiy farovonlikni yaxshilaydi." },
  ],
  practice: [
    { k: 'match', pairs: [['urban', 'shaharga oid'], ['canopy', 'daraxt shox-barglari'], ['absorb', 'yutmoq'], ['shade', 'soya'], ['wellbeing', 'farovonlik']] },
    { k: 'choice', q: "Plants ___ carbon dioxide from the air.", opts: ['absorb', 'prescribe', 'enforce', 'shade'], a: 0, why: "Gaz yutish → **absorb**." },
    { k: 'listen', say: 'Today I would like to talk about urban trees.', opts: ['Today I would like to talk about urban trees.', 'Today I would like to talk about urban trips.', 'Today I would like to talk about ugly trees.', 'Today we would like to talk about urban trees.'], a: 0 },
    { k: 'fill', q: "On a hot day, we sat in the ___ of a large tree.", a: ['shade'], hint: 'soya', uz: "Issiq kunda katta daraxt soyasida o'tirdik.", why: "**in the shade of** — soyada." },
    { k: 'fill', q: "To ___ up, trees cool and clean the air.", a: ['sum'], uz: "Xulosa qilib aytganda, daraxtlar havoni sovitadi va tozalaydi.", why: "**To sum up** — xulosa." },
    { k: 'choice', q: "Which word best describes cities rather than villages?", opts: ['urban', 'coastal', 'scarce', 'adequate'], a: 0, why: "**urban** — shahar; qishloq uchun *rural*." },
    { k: 'order', uz: "Ikkinchidan, barglar karbonat angidridni yutadi.", words: ['Second,', 'leaves', 'absorb', 'carbon', 'dioxide.'], extra: ['absorbs', 'seconds'], why: "**Second, + gap**." },
    { k: 'order', uz: "Ma'ruza shahar daraxtlari haqida edi.", words: ['The', 'lecture', 'was', 'about', 'urban', 'trees.'], extra: ['talking', 'on'], why: "**The lecture was about …**." },
    { k: 'fix', wrong: "The lecturer said us that trees give shade.", a: ["The lecturer told us that trees give shade.", "The lecturer said that trees give shade."], why: "**told us that** yoki **said that**; *said us* — xato." },
    { k: 'fix', wrong: "Studies suggests that parks improve wellbeing.", a: ["Studies suggest that parks improve wellbeing."], why: "*Studies* — ko'plik: **suggest** (-s yo'q)." },
    { k: 'translate', uz: "Ma'ruzachi uchta asosiy fikr aytdi.", a: ["The lecturer made three main points.", "The speaker made three main points.", "The lecturer made three key points.", "The lecturer gave three main points."], why: "**make a point** — fikr bildirmoq." },
    { k: 'tf', q: "*Wellbeing* so'zi faqat jismoniy sog'liqni anglatadi.", a: false, why: "**wellbeing** — jismoniy va ruhiy farovonlik, o'zini yaxshi his qilish." },
    { k: 'dictation', say: 'Many studies suggest that green spaces improve our mood.', a: ['Many studies suggest that green spaces improve our mood.'], uz: "Ko'plab tadqiqotlar yashil joylar kayfiyatni yaxshilashini ko'rsatadi." },
    { k: 'speak', say: 'First, trees give shade and cool the air around them.', uz: "Birinchidan, daraxtlar soya beradi va atrofdagi havoni sovitadi." },
  ],
  quiz: [
    { k: 'choice', q: "According to the lecture, urban trees ___.", opts: ["help to keep the air cleaner", "remove all pollution", "make streets hotter", "are only decoration"], a: 0, why: "*urban trees help to keep the air cleaner, although they cannot solve pollution on their own.*" },
    { k: 'choice', q: "Which phrase signals a new point?", opts: ["Another point is that…", "To sum up,", "Thank you,", "Good morning,"], a: 0, why: "**Another point is that** — keyingi fikr." },
    { k: 'choice', q: "A thick ___ of branches makes a street cooler.", opts: ['canopy', 'dose', 'litter', 'shortage'], a: 0, why: "**canopy** — daraxt shox-barglari." },
    { k: 'fill', q: "Trees give ___ and cool the air.", a: ['shade'], uz: "Daraxtlar soya beradi va havoni sovitadi.", why: "**give shade**." },
    { k: 'fill', q: "Regular walks in green spaces support our mental ___.", a: ['wellbeing'], uz: "Yashil joylardagi muntazam sayr ruhiy farovonlikni qo'llab-quvvatlaydi.", why: "**mental wellbeing** — barqaror birikma." },
    { k: 'fix', wrong: "Lecturer talked us about trees.", a: ["The lecturer talked to us about trees.", "The lecturer told us about trees.", "The lecturer talked about trees."], why: "**talk to + kishi + about**; *talked us* — xato; ot oldida artikl kerak." },
    { k: 'order', uz: "Xulosa qilib aytganda, shahar daraxtlari farovonlikni qo'llab-quvvatlaydi.", words: ['In', 'conclusion,', 'urban', 'trees', 'support', 'wellbeing.'], extra: ['conclude', 'supports'], why: "**In conclusion, + gap**." },
    { k: 'listen', say: 'The lecturer made three main points.', opts: ['The lecturer made three main points.', 'The lecturer makes three main point.', 'The lecturer made three mane points.', 'The lecture made three main points.'], a: 0 },
    { k: 'tf', q: "Konspektda hamma gap to'liq yoziladi.", a: false, why: "Konspekt — kalit so'zlar, raqamlar va qisqartmalar; to'liq gap yozilmaydi." },
  ],
  summary: [
    "Tinglashdan oldin ma'ruzachining **rejasini** toping (*I'll make three main points*), keyin **kalit so'z** va **raqamlarni** konspektga yozing.",
    "**Signposting**: *First, Second, Third, Another point is that, To sum up, In conclusion*. Ular fikrlar o'rnini ko'rsatadi.",
    "Qisqacha mazmun: **mavzu → 3 asosiy fikr → xulosa**; 80–100 so'z, o'z so'zlaringiz bilan.",
    "Xatolar: *explained us* → *explained to us*; *told that* → *said that / told us that*; *The lecture is talking* → *The lecture is about*.",
    "Yangi so'zlar: **urban, canopy, absorb, shade, wellbeing**.",
  ],
  homework: "Matnni yana ikki marta tinglang va o'z konspektingizni yozing (5-6 qator). Keyin konspektga qarab 1 daqiqali qisqacha mazmunni telefoningizga yozib oling, tinglang va *First, Second, Third, To sum up* ishlatganingizni tekshiring.",
};

export default lesson;
