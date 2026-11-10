import type { Lesson } from '../../../types';

// Mini lesson (skill): listening to a radio news item and a studio discussion, then summarising aloud with reporting language.
const lesson: Lesson = {
  id: 'u26-l14',
  title: 'Listening and speaking: a news discussion',
  titleUz: "Tinglash va gapirish: yangiliklar muhokamasi",
  mini: true,
  kind: 'skill',
  goal: "Radio yangiliklarini va studiyadagi muhokamani tinglab, asosiy fikr, tafsilot va ekspert fikrini ajratib olasiz; so'ng 1 daqiqada yangilikni reporting tili (*according to…, it was reported that…, she said that…*) bilan ovoz chiqarib qayta aytasiz.",
  slides: [
    {
      title: "Tinglang: radio yangilik",
      blocks: [
        { t: 'p', md: "Bu bo'lim **tinglash** uchun. Avval matnni **yopib** audioni tinglang (matn tugmasini bosmay), keyin savollarga javob bering. Yangilik radiosi tez gapiradi, shuning uchun **asosiy fikr** (kim, nima, qayerda) va **raqam/sana**ga e'tibor bering." },
        { t: 'text', title: 'Radio news: phones in schools', voice: 'george', en: "Good morning, and welcome to the news at nine. The council of the northern town of Riverton has announced that smartphones will be banned in all of its primary schools from next September. According to the council, the decision was made after a survey in which more than two thousand parents were asked about their children's screen time. Teachers say that pupils are easily distracted, and that arguments about online posts are often brought into the classroom. A council spokeswoman said that the ban would be reviewed after one year. However, some parents have criticised the plan, arguing that children need phones for safety on the way to school. Our education correspondent reports that similar rules are already in place in several other towns. And now, the weather.", uz: "Xayrli tong va soat to'qqizdagi yangiliklarga xush kelibsiz. Shimoldagi Riverton shahri kengashi kelasi sentabrdan boshlab barcha boshlang'ich maktablarda smartfonlar taqiqlanishini e'lon qildi. Kengash ma'lumotiga ko'ra, qaror ikki mingdan ortiq ota-onadan bolalarning ekran vaqti haqida so'ralgan so'rovnomadan keyin qabul qilingan. O'qituvchilarning aytishicha, o'quvchilar tezda chalg'iydi va internetdagi postlar haqidagi tortishuvlar ko'pincha sinfga olib kelinadi. Kengash matbuot kotibasi taqiq bir yildan keyin ko'rib chiqilishini aytdi. Biroq ba'zi ota-onalar rejani tanqid qilib, bolalarga maktabga borishda xavfsizlik uchun telefon kerak, deb bahslashmoqda. Ta'lim bo'yicha muxbirimiz xabar berishicha, shunga o'xshash qoidalar boshqa bir necha shaharda allaqachon bor. Endi esa ob-havo." },
        { t: 'check', ex: { k: 'choice', q: "What is the main news?", opts: ["Smartphones will be banned in primary schools in Riverton.", "Teachers will get new phones.", "Parents will be asked to pay for phones.", "A new school will open in Riverton."], a: 0, why: "*smartphones will be banned in all of its primary schools.*" } },
        { t: 'check', ex: { k: 'tf', q: "The ban will start next September and will never be reviewed.", a: false, why: "*the ban would be reviewed after one year.*" } },
        { t: 'check', ex: { k: 'choice', q: "Why do some parents object?", opts: ["They think children need phones for safety.", "They think phones are too cheap.", "They were not asked at all.", "They want more homework."], a: 0, why: "*children need phones for safety on the way to school.*" } },
      ],
    },
    {
      title: "Yangilikni qayta aytish iboralari",
      blocks: [
        { t: 'p', md: "Yangilikni o'z so'zingiz bilan aytganda **manba**ni ko'rsatish kerak: sizning fikringiz emas, boshqalarning gapi. Buning uchun reporting tili ishlaydi." },
        { t: 'table', head: ['Maqsad', 'Ibora'], speak: [1], rows: [
          ['Manba', "According to the council, the ban starts in September."],
          ['Reporting passive', "It was reported that over two thousand parents were asked."],
          ['Aytilgan gap', "A spokeswoman said that the ban would be reviewed."],
          ['Tanqid', "Some parents have criticised the plan, arguing that…"],
          ['Qo\'shimcha ma\'lumot', "Reportedly, similar rules are already in place elsewhere."],
        ] },
        { t: 'tip', tone: 'info', md: "Yangilik odatda **o'tgan zamonda** aytiladi va ko'chirma gapda zamon **bir pog'ona orqaga** suriladi: *said that the ban would be reviewed* (*will* → *would*). Bu haqda 4-darsda batafsil o'rgandingiz." },
        { t: 'check', ex: { k: 'fill', q: "___ to the council, the decision was made after a survey.", a: ['According'], uz: "Kengashga ko'ra, qaror so'rovnomadan keyin qabul qilindi.", why: "**According to + manba** — qaysi manbaga tayanayotganingizni ko'rsatadi." } },
      ],
    },
    {
      title: "Tinglang: studiyadagi muhokama",
      blocks: [
        { t: 'p', md: "Endi studiyada ekspert qo'shildi. Bu yerda **fikr** (opinion) ajratish muhim: kim *rozi*, kim *qarshi*, qaysi *sabab* bilan." },
        { t: 'dialog', lines: [
          { who: 'Tom', en: "With me in the studio is Dr Helen Brooks, a researcher on children and technology. Helen, is this ban a good idea?", uz: "Studiyada men bilan bolalar va texnologiya bo'yicha tadqiqotchi doktor Helen Brooks. Helen, bu taqiq yaxshi g'oyami?" },
          { who: 'Helen', en: "To a certain extent, yes. Research suggests that children concentrate better without phones in class.", uz: "Ma'lum darajada ha. Tadqiqotlar bolalarning telefonsiz sinfda yaxshiroq e'tibor qaratishini ko'rsatadi." },
          { who: 'Tom', en: "But some parents say that a total ban goes too far.", uz: "Lekin ba'zi ota-onalar to'liq taqiq haddan oshib ketadi deydi." },
          { who: 'Helen', en: "I see their point. I'd say the ban should allow phones to be kept in bags and used only in emergencies.", uz: "Ularning fikrini tushunaman. Menimcha, taqiq telefonlarni sumkada saqlashga va faqat favqulodda holatda ishlatishga ruxsat berishi kerak." },
          { who: 'Tom', en: "Do you think the same rules should be introduced everywhere?", uz: "Sizningcha, bir xil qoidalar hamma joyda joriy qilinishi kerakmi?" },
          { who: 'Helen', en: "Not necessarily. Each school knows its pupils best, so decisions ought to be taken locally. Still, it is encouraging that the problem is being discussed at all.", uz: "Shart emas. Har bir maktab o'z o'quvchilarini eng yaxshi biladi, shuning uchun qarorlar joyida qabul qilinishi kerak. Baribir, muammoning umuman muhokama qilinayotgani dalda beradi." },
        ] },
        { t: 'check', ex: { k: 'choice', q: "What is Helen's opinion of the ban?", opts: ["She partly supports it but wants exceptions.", "She completely opposes it.", "She thinks it is a perfect plan.", "She has no opinion."], a: 0, why: "*To a certain extent, yes* va *phones… used only in emergencies*." } },
        { t: 'check', ex: { k: 'choice', q: "According to Helen, who should decide the rules?", opts: ["Each school", "The government only", "Parents only", "The students"], a: 0, why: "*decisions ought to be taken locally.*" } },
        { t: 'check', ex: { k: 'tf', q: "Helen is a radio presenter.", a: false, why: "Helen — *a researcher on children and technology*; Tom — boshlovchi." } },
      ],
    },
    {
      title: "Endi siz ayting: 1 daqiqalik xulosa",
      blocks: [
        { t: 'p', md: "Yangilikni xulosa qilish: **1) nima bo'ldi, 2) nima uchun, 3) kim nima dedi, 4) sizning fikringiz**. Quyida namuna (taxminan bir daqiqa):" },
        { t: 'text', title: 'Model summary', voice: 'emma', en: "I heard a news item about a town called Riverton. According to the council, smartphones will be banned in all primary schools from next September. It was reported that the decision was based on a survey of more than two thousand parents. Teachers say that pupils are easily distracted. However, some parents have criticised the plan, saying that children need phones for safety. A researcher told the programme that the ban was a good idea to a certain extent, but she suggested allowing phones to be kept in bags. In my view, schools should be given some freedom, because every community is different.", uz: "Men Riverton shahri haqidagi yangilikni eshitdim. Kengash ma'lumotiga ko'ra, kelasi sentabrdan barcha boshlang'ich maktablarda smartfonlar taqiqlanadi. Qaror ikki mingdan ortiq ota-onadan o'tkazilgan so'rovnomaga asoslangani aytilgan. O'qituvchilarning aytishicha, o'quvchilar tez chalg'iydi. Biroq ba'zi ota-onalar rejani tanqid qilib, bolalarga xavfsizlik uchun telefon kerak deyishdi. Tadqiqotchi dasturga taqiq ma'lum darajada yaxshi g'oya ekanini aytdi, lekin telefonlarni sumkada saqlashga ruxsat berishni taklif qildi. Menimcha, maktablarga ozgina erkinlik berilishi kerak, chunki har bir jamoa boshqacha." },
        { t: 'check', ex: { k: 'order', uz: "Kengashning aytishicha, taqiq bir yildan keyin ko'rib chiqiladi.", words: ['The', 'council', 'said', 'that', 'the', 'ban', 'would', 'be', 'reviewed.'], extra: ['will', 'says'], alt: [['The', 'council', 'said', 'the', 'ban', 'would', 'be', 'reviewed.']], why: "Reporting fe'li o'tgan zamonda → **would be reviewed**." } },
        { t: 'check', ex: { k: 'speak', say: "According to the council, smartphones will be banned in all primary schools.", uz: "Kengashga ko'ra, barcha boshlang'ich maktablarda smartfonlar taqiqlanadi." } },
        { t: 'tip', tone: 'good', md: "O'zingiz yozib tayyorlab, **taymer** qo'ying (60 soniya) va ovoz yozing. Qayta tinglab, *said/according to* ishlatganingizni va zamonni tekshiring." },
      ],
    },
  ],
  words: [
    { en: 'anchor', uz: "yangiliklar boshlovchisi, studiya boshlovchisi", ipa: 'ˈæŋ.kər', pos: 'noun', ex: 'The news anchor thanked the guest and moved on to the weather.', exUz: "Yangiliklar boshlovchisi mehmonga rahmat aytdi va ob-havoga o'tdi." },
    { en: 'correspondent', uz: "muxbir (joyidan xabar beruvchi)", ipa: 'ˌkɒr.ɪˈspɒn.dənt', pos: 'noun', ex: 'Our education correspondent is outside the school.', exUz: "Ta'lim bo'yicha muxbirimiz maktab oldida turibdi." },
    { en: 'commentator', uz: "sharhlovchi", ipa: 'ˈkɒm.ən.teɪ.tər', pos: 'noun', ex: 'A political commentator said the result was a surprise.', exUz: "Siyosiy sharhlovchi natija kutilmagan bo'ldi dedi." },
    { en: 'viewership', uz: "tomoshabinlar soni, auditoriya", ipa: 'ˈvjuː.ə.ʃɪp', pos: 'noun', ex: 'Viewership of the evening news has fallen over the years.', exUz: "Kechki yangiliklarning auditoriyasi yillar davomida kamaydi." },
    { en: 'panel', uz: "ekspertlar guruhi, muhokama paneli", ipa: 'ˈpæn.əl', pos: 'noun', ex: 'A panel of experts discussed the new law.', exUz: "Ekspertlar guruhi yangi qonunni muhokama qildi." },
  ],
  practice: [
    { k: 'listen', say: "The council has announced that smartphones will be banned in all primary schools.", opts: ["The council has announced that smartphones will be banned in all primary schools.", "The council has announced that smartphones were banned in all primary schools.", "The council announced that smartphones would ban all primary schools.", "The council has announced smartphones to ban in primary schools."], a: 0 },
    { k: 'dictation', say: "According to the council, the ban will be reviewed after one year.", a: ["According to the council, the ban will be reviewed after one year."], uz: "Kengashga ko'ra, taqiq bir yildan keyin ko'rib chiqiladi." },
    { k: 'choice', q: "Which word describes a person who reports from a place on location?", opts: ['correspondent', 'viewership', 'panel', 'headline'], a: 0, why: "**correspondent** — joyidan xabar beruvchi muxbir." },
    { k: 'tf', q: "A news *anchor* is the person who presents the programme in the studio.", a: true, why: "**anchor** — studiya boshlovchisi." },
    { k: 'match', pairs: [['anchor', 'studiya boshlovchisi'], ['correspondent', 'joyidan xabar beruvchi muxbir'], ['commentator', 'sharhlovchi'], ['panel', 'ekspertlar guruhi'], ['viewership', 'tomoshabinlar soni']] },
    { k: 'fill', q: "The spokeswoman said that the ban ___ be reviewed in a year.", a: ['would'], uz: "Matbuot kotibasi taqiq bir yildan keyin ko'rib chiqilishini aytdi.", why: "Reporting fe'li o'tgan zamonda → *will* → **would**." },
    { k: 'order', uz: "Kengashga ko'ra, qaror so'rovnomadan keyin qabul qilindi.", words: ['According', 'to', 'the', 'council,', 'the', 'decision', 'was', 'made', 'after', 'a', 'survey.'], extra: ['says', 'is'], why: "**According to + manba**, keyin majhul o'tgan zamon." },
    { k: 'choice', q: "Helen says the ban is good 'to a certain extent'. What does it mean?", opts: ["She agrees partly, not completely.", "She completely agrees.", "She completely disagrees.", "She doesn't know."], a: 0, why: "**to a certain extent** = ma'lum darajada, qisman." },
    { k: 'fix', wrong: "The council said that the ban will be reviewed after a year.", a: ["The council said that the ban would be reviewed after a year.", "The council said the ban would be reviewed after a year."], why: "Reporting fe'li **said** (o'tgan) → *will* → **would**." },
    { k: 'translate', uz: "Ba'zi ota-onalar rejani tanqid qildi.", a: ["Some parents criticised the plan.", "Some parents criticized the plan.", "Some parents have criticised the plan.", "Some parents have criticized the plan."], why: "**criticise** — tanqid qilmoq (britancha -ise)." },
    { k: 'tf', q: "In the discussion, the expert thinks decisions should be taken at national level only.", a: false, why: "*decisions ought to be taken locally.*" },
    { k: 'dictation', say: "Reportedly, similar rules are already in place in several other towns.", a: ["Reportedly, similar rules are already in place in several other towns."], uz: "Xabarlarga ko'ra, shunga o'xshash qoidalar boshqa bir necha shaharda allaqachon bor." },
    { k: 'choice', q: "Which is the best way to start a one-minute news summary?", opts: ["I heard a news item about a town called Riverton.", "Riverton, ban, phones, school, September.", "I think phones are bad.", "Hello hello, sorry, what was the question?"], a: 0, why: "Yaxshi xulosa mavzuni aniq e'lon qilib boshlanadi." },
    { k: 'speak', say: "It was reported that the decision was based on a survey of parents.", uz: "Qaror ota-onalar so'rovnomasiga asoslangani aytilgan." },
  ],
  quiz: [
    { k: 'listen', say: "Teachers say that pupils are easily distracted.", opts: ["Teachers say that pupils are easily distracted.", "Teachers said that pupils are easily distracted.", "Teachers say that pupils were easily distracted.", "Teachers say that pupils are easy to distract."], a: 0 },
    { k: 'choice', q: "A panel of experts is:", opts: ['a group of people who discuss a topic', 'a type of television', 'a news headline', 'a survey of parents'], a: 0, why: "**panel** — muhokama qiluvchi ekspertlar guruhi." },
    { k: 'fill', q: "Our education ___ is reporting from outside the school.", a: ['correspondent'], uz: "Ta'lim bo'yicha muxbirimiz maktab oldidan xabar bermoqda.", hint: "muxbir", why: "**correspondent** — joyidan xabar beruvchi." },
    { k: 'tf', q: "Dr Brooks completely rejects the ban.", a: false, why: "*To a certain extent, yes* — u qisman qo'llab-quvvatlaydi." },
    { k: 'fix', wrong: "The spokeswoman said that the ban will start in September.", a: ["The spokeswoman said that the ban would start in September.", "The spokeswoman said the ban would start in September."], why: "Said → **would**." },
    { k: 'order', uz: "Bir ota-ona rejani tanqid qildi.", words: ['One', 'parent', 'criticised', 'the', 'plan.'], extra: ['criticise', 'criticising'], alt: [['One', 'parent', 'criticized', 'the', 'plan.']], why: "Past Simple: **criticised**." },
    { k: 'choice', q: "Which phrase shows the source of information?", opts: ['According to the council', 'In my opinion', 'To be honest', 'As a matter of fact'], a: 0, why: "**According to + manba** manbani ko'rsatadi." },
    { k: 'translate', uz: "Ekspertlar qoidalar joyida qabul qilinishi kerak deb hisoblaydi.", a: ["Experts believe that rules should be decided locally.", "Experts believe that decisions should be taken locally.", "Experts think that rules should be decided locally.", "Experts think that decisions should be taken locally.", "The experts believe that rules should be decided locally.", "The experts think that decisions should be taken locally.", "Experts say that decisions should be made locally.", "Experts say that rules should be decided locally."], why: "**believe / think that + should be + V3**." },
  ],
  summary: [
    "Tinglashda avval **asosiy fikr** (kim, nima, qayerda), keyin tafsilot va raqamlarni ushlang.",
    "Ekspertning **fikri** (*to a certain extent, I'd say, ought to*) ni yangilik faktlaridan ajrating.",
    "Xulosada manba: **According to…, It was reported that…, … said that…**; zamon bir pog'ona orqaga: *will* → *would*.",
    "1 daqiqalik xulosa: nima bo'ldi, nima uchun, kim nima dedi, sizning fikringiz.",
    "Yangi so'zlar: **anchor, correspondent, commentator, viewership, panel**.",
  ],
  homework: "Ingliz tilidagi qisqa yangilik (radio yoki video, 1-2 daqiqa) toping. Ikki marta tinglang, keyin 60 soniyalik xulosani ovozli yozib oling: kamida bitta *According to…*, bitta *said that…* va bitta o'z fikringiz (*In my view…*).",
};

export default lesson;
