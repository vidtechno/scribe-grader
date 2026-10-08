import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u11-l6",
  title: "when, before, after, or",
  titleUz: "Gaplarni bog'lash: when, before, after, or",
  goal: "Ikki gapni vaqt bo'yicha bog'laysiz: **When I was a child, I lived in Andijan. After I finished school, I went to university.** Kelasi zamonda **When I get home, I'll call you** (*will get* emas!) qoidasini bilasiz va **or** ni savol va inkorda to'g'ri ishlatasiz.",
  slides: [
    {
      title: "when — qachonki, …ganda",
      blocks: [
        { t: "p", md: "Siz **and, but, so, because** bilan gaplarni bog'lashni bilasiz. Bugun **vaqt** bog'lovchilari: **when** (…ganda), **before** (…dan oldin), **after** (…dan keyin). Ular bitta gapni ikkinchisiga \"vaqt\" sifatida ulaydi:" },
        {
          t: "examples", items: [
            { en: "When I was a child, I lived in Andijan.", uz: "Bolaligimda Andijonda yashadim." },
            { en: "I lived in Andijan when I was a child.", uz: "Andijonda bolaligimda yashadim. (xuddi shu ma'no)" },
            { en: "When it rains, we stay at home.", uz: "Yomg'ir yoqqanda uyda qolamiz." },
            { en: "My phone rang when I was in the shower.", uz: "Dush qabul qilayotganimda telefonim jiringladi." },
          ],
        },
        { t: "tip", tone: "info", md: "**Vergul qoidasi**: *when*-qism **boshida** bo'lsa — keyin vergul qo'yiladi: *When I was a child**,** I lived…* **Oxirida** bo'lsa — vergul shart emas: *I lived in Andijan when I was a child.*" },
        { t: "tip", tone: "warn", md: "O'zbekchada **-ganda** fe'lning oxirida keladi. Ingliz tilida **when** o'z qismining **boshida** turadi, ega va fe'l undan keyin keladi: *uyga kel**ganimda*** → ***when** I came home*. ❌ *I home came when*" },
        { t: "check", ex: { k: "order", uz: "Talaba bo'lganimda Toshkentda yashadim.", words: ["When", "I", "was", "a", "student,", "I", "lived", "in", "Tashkent."], extra: ["were", "live"], alt: [["I", "lived", "in", "Tashkent", "when", "I", "was", "a", "student."]] } },
      ],
    },
    {
      title: "before va after",
      blocks: [
        { t: "p", md: "**before** va **after** dan keyin **to'liq gap** (ega + fe'l) yoki **ot** kelishi mumkin:" },
        {
          t: "table", head: ["", "+ gap", "+ ot"], speak: [1, 2],
          rows: [
            ["before", "Have a shower before you go to bed.", "Have a shower before bed."],
            ["after", "After I finished school, I joined the army.", "After school, I joined the army."],
            ["before", "Call me before you leave.", "Call me before nine."],
            ["after", "We watched TV after we had dinner.", "We watched TV after dinner."],
          ],
        },
        { t: "p", md: "Ketma-ketlikka e'tibor bering: ikki gap — ikki voqea. **before** dan keyingi voqea **ikkinchi**, **after** dan keyingi voqea **birinchi** bo'lgan:" },
        {
          t: "examples", items: [
            { en: "Before I went to work, I had breakfast.", uz: "Ishga borishdan oldin nonushta qildim.", note: "1) nonushta → 2) ish" },
            { en: "After I had breakfast, I went to work.", uz: "Nonushta qilganimdan keyin ishga bordim.", note: "1) nonushta → 2) ish (xuddi shu!)" },
          ],
        },
        { t: "tip", tone: "warn", md: "**before / after** dan keyin **to** yoki **of** kerak emas: *after **dinner*** (✅), *after of dinner* ❌. O'zbekchadagi \"**-dan** keyin\" ni tarjima qilmang." },
        { t: "check", ex: { k: "choice", q: "Put on your shoes ___ you go out.", opts: ["before", "after", "when of", "before to"], a: 0, why: "Avval poyabzal, keyin tashqariga → **before**." } },
      ],
    },
    {
      title: "Kelajak: When I get home, I'll call you",
      blocks: [
        { t: "p", md: "Juda muhim qoida! **when, before, after** dan keyin kelajak haqida gapirsangiz ham **Present Simple** ishlatiladi. **will** faqat gapning ikkinchi qismida:" },
        {
          t: "table", head: ["when / before / after + Present Simple", "asosiy gap: will / going to / imperative"], speak: [0, 1],
          rows: [
            ["When I get home,", "I'll call you."],
            ["After I finish university,", "I'm going to travel."],
            ["Before you leave,", "close the window."],
            ["When you see Aziz,", "say hello from me."],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["When I get home, I'll call you.", "I'll tell him when he arrives.", "After I finish work, I'll go shopping."] },
          bad: { title: "Xato", items: ["When I will get home, I'll call you.", "I'll tell him when he will arrive.", "After I will finish work, I'll go shopping."] },
        },
        { t: "tip", tone: "info", md: "O'zbekchada ham shunga o'xshash: *uyga **kelganimda** qo'ng'iroq **qilaman*** — birinchi fe'lda \"kelasi zamon\" qo'shimchasi yo'q. Ingliz tilida ham: ***when I get** home, I**'ll call***." },
        { t: "check", ex: { k: "fill", q: "I'll send you a message when I ___ in Tashkent. (arrive)", a: ["arrive"], why: "**when** dan keyin Present Simple: **arrive** (*will arrive* emas)." } },
        { t: "check", ex: { k: "choice", q: "Qaysi gap **to'g'ri**?", opts: ["After I will finish school, I'll study medicine.", "After I finish school, I'll study medicine.", "After I finish school, I study medicine tomorrow.", "After I finished school, I'll study medicine."], a: 1, why: "**after + Present Simple**, asosiy gapda **will**." } },
      ],
    },
    {
      title: "or — yoki",
      blocks: [
        { t: "p", md: "**or** = yoki. Savolda tanlov berish uchun:" },
        {
          t: "examples", items: [
            { en: "Would you like tea or coffee?", uz: "Choy ichasizmi yoki qahva?" },
            { en: "Are you from Samarkand or Bukhara?", uz: "Samarqandliksizmi yoki buxorolik?" },
            { en: "Shall we go out or stay at home?", uz: "Tashqariga chiqamizmi yoki uyda qolamizmi?" },
          ],
        },
        { t: "p", md: "**Inkor gapda** ikki narsani sanaganda **and** emas, **or** ishlatiladi:" },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I don't eat meat or fish.", "She can't swim or ride a bike.", "We didn't have bread or milk."] },
          bad: { title: "Noto'g'ri / g'alati", items: ["I don't eat meat and fish.", "She can't swim and ride a bike.", "We didn't have bread and milk."] },
        },
        {
          t: "sounds", items: [
            { label: "tea or coffee?", say: "Would you like tea or coffee?", uz: "Tanlov savolida ohang **birinchi** variantda ko'tariladi, **oxirgisida** pasayadi: *tea↗ or coffee↘?* **or** kuchsiz aytiladi: **\"ə\"**.", examples: ["Would you like tea or coffee?", "Red or blue?"] },
          ],
        },
        { t: "check", ex: { k: "fill", q: "My grandmother doesn't drink tea ___ coffee. She only drinks water.", a: ["or"], why: "Inkor gapda → **or**." } },
      ],
    },
    {
      title: "O'qing: Bobomning hayoti",
      blocks: [
        {
          t: "text", title: "My grandfather",
          en: "My grandfather, Tohir, was born in a small village near Termez in 1950. When he was a child, he helped his father in the fields every day. After he finished school, he joined the army for two years.\nWhen he came back, he went to university in Tashkent and got a degree in engineering. He met my grandmother there. They got married after they graduated.\nHe worked at a big factory for thirty-five years. Before he retired, he trained many young engineers. Now he lives with us and enjoys spending time with his six grandchildren. When I visit him, he always tells me stories about his childhood. He doesn't watch TV or use the internet — he prefers books!",
          uz: "Bobom Tohir 1950-yilda Termiz yaqinidagi kichik qishloqda tug'ilgan. Bolaligida u har kuni dalada otasiga yordam bergan. Maktabni tugatgandan keyin ikki yil armiyada xizmat qilgan.\nQaytib kelgach, Toshkentdagi universitetga o'qishga kirgan va muhandislik bo'yicha diplom olgan. Buvim bilan o'sha yerda tanishgan. Ular o'qishni bitirgandan keyin turmush qurishgan.\nU katta zavodda o'ttiz besh yil ishlagan. Nafaqaga chiqishdan oldin ko'plab yosh muhandislarga ta'lim bergan. Hozir u biz bilan yashaydi va olti nevarasi bilan vaqt o'tkazishni yoqtiradi. Uning oldiga borganimda, u menga doim bolaligi haqida hikoyalar aytib beradi. U televizor ko'rmaydi va internetdan foydalanmaydi — kitobni afzal ko'radi!",
        },
        { t: "check", ex: { k: "tf", q: "Tohir joined the army before he finished school.", a: false, why: "*After he finished school, he joined the army.*" } },
        { t: "check", ex: { k: "choice", q: "When did Tohir and his wife get married?", opts: ["Before they went to university.", "After they graduated.", "When he was in the army.", "After he retired."], a: 1, why: "*They got married after they graduated.*" } },
      ],
    },
    {
      title: "Dialog: kelajak rejalari",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Lola", en: "What are you going to do when you finish university?", uz: "Universitetni tugatganingdan keyin nima qilmoqchisan?" },
            { who: "Sherzod", en: "I'm not sure. I'd like to work abroad or start my own business.", uz: "Aniq emas. Chet elda ishlashni yoki o'z biznesimni boshlashni xohlardim." },
            { who: "Lola", en: "Really? Before you go abroad, you need a good level of English!", uz: "Rostdanmi? Chet elga ketishdan oldin yaxshi darajadagi ingliz tili kerak!" },
            { who: "Sherzod", en: "I know. After I graduate, I'll take an English course in the summer.", uz: "Bilaman. Bitirganimdan keyin yozda ingliz tili kursiga boraman." },
            { who: "Lola", en: "Good idea. And when you get a job abroad, will you come back?", uz: "Yaxshi fikr. Chet elda ish topsang, qaytib kelasanmi?" },
            { who: "Sherzod", en: "Of course! When I have enough money, I'll come back and open a café in Tashkent.", uz: "Albatta! Yetarli pulim bo'lganda qaytib kelib, Toshkentda kafe ochaman." },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Sherzod is going to take an English course after he graduates.", a: true, why: "*After I graduate, I'll take an English course in the summer.*" } },
      ],
    },
  ],
  words: [
    { en: "army", uz: "armiya", ipa: "ˈɑːmi", pos: "noun", ex: "He joined the army at nineteen.", exUz: "U o'n to'qqiz yoshida armiyaga bordi." },
    { en: "graduate", uz: "(oliy o'quv yurtini) bitirmoq", ipa: "ˈɡrædʒueɪt", pos: "verb", ex: "She graduated from university in 2020.", exUz: "U universitetni 2020-yilda bitirgan." },
    { en: "university", uz: "universitet", ipa: "ˌjuːnɪˈvɜːsəti", pos: "noun", ex: "My brother goes to university in Samarkand.", exUz: "Akam Samarqanddagi universitetda o'qiydi." },
    { en: "business", uz: "biznes, ish", ipa: "ˈbɪznəs", pos: "noun", ex: "She wants to start her own business.", exUz: "U o'z biznesini boshlamoqchi." },
    { en: "story", uz: "hikoya, voqea", ipa: "ˈstɔːri", pos: "noun", ex: "My grandfather tells great stories.", exUz: "Bobom ajoyib hikoyalar aytib beradi." },
    { en: "grandparents", uz: "bobo va buvi", ipa: "ˈɡrænpeərənts", pos: "noun", ex: "My grandparents live in a village.", exUz: "Bobom va buvim qishloqda yashaydi." },
    { en: "course", uz: "kurs", ipa: "kɔːs", pos: "noun", ex: "I'm taking an English course.", exUz: "Men ingliz tili kursida o'qiyapman." },
    { en: "career", uz: "martaba, kasb yo'li", ipa: "kəˈrɪə", pos: "noun", ex: "She has a great career in medicine.", exUz: "Uning tibbiyotda ajoyib martabasi bor." },
    { en: "grandchildren", uz: "nevaralar", ipa: "ˈɡræntʃɪldrən", pos: "noun", ex: "My grandmother has ten grandchildren.", exUz: "Buvimning o'nta nevarasi bor." },
    { en: "join", uz: "qo'shilmoq, a'zo bo'lmoq", ipa: "dʒɔɪn", pos: "verb", ex: "I joined a football club.", exUz: "Futbol klubiga a'zo bo'ldim." },
  ],
  practice: [
    { k: "match", pairs: [["childhood", "bolalik"], ["graduate", "bitirmoq"], ["retire", "nafaqaga chiqmoq"], ["get married", "turmush qurmoq"], ["grandchildren", "nevaralar"]] },
    { k: "match", pairs: [["when", "…ganda"], ["before", "…dan oldin"], ["after", "…dan keyin"], ["or", "yoki"]] },
    { k: "choice", q: "I always read a little ___ I go to sleep.", opts: ["before", "after", "or", "when of"], a: 0, why: "Uxlab qolgandan keyin o'qib bo'lmaydi → **before**." },
    { k: "choice", q: "___ I finished school, I went to college.", opts: ["Before", "After", "Or", "Because of"], a: 1, why: "Avval maktab, keyin kollej → **After**." },
    { k: "choice", q: "\"U kelganda unga aytaman.\"", opts: ["I'll tell him when he will come.", "I'll tell him when he comes.", "I tell him when he will come.", "I'll tell him when he came."], a: 1, why: "**when + Present Simple**: *when he **comes***." },
    { k: "fill", q: "When I ___ home, I'll call you. (get)", a: ["get"], why: "**when** + Present Simple." },
    { k: "fill", q: "Would you like juice ___ water?", a: ["or"] },
    { k: "fill", q: "We don't have a car ___ a bike.", a: ["or"], uz: "Bizda na mashina, na velosiped bor.", why: "Inkor gapda → **or**." },
    { k: "fill", q: "After he ___ university, he'll look for a job. (finish)", a: ["finishes", "has finished", "'s finished"], why: "**after** + Present Simple; *he* → **finishes** (*will finish* emas)." },
    { k: "tf", q: "**Before you will leave, turn off the lights.** — to'g'ri gap.", a: false, why: "**before** + Present Simple: *Before you **leave**, turn off the lights.*" },
    { k: "tf", q: "**When I was a child, I lived in a village.** — vergul to'g'ri qo'yilgan.", a: true, why: "*when*-qism boshida → vergul." },
    { k: "listen", say: "When I get home, I'll call you.", opts: ["When I get home, I'll call you.", "When I got home, I called you.", "When I'm home, I call you."], a: 0 },
    { k: "order", uz: "Kechki ovqatdan keyin televizor ko'rdik.", words: ["We", "watched", "TV", "after", "dinner."], extra: ["of", "before"], alt: [["After", "dinner", "we", "watched", "TV."], ["After", "dinner,", "we", "watched", "TV."]] },
    { k: "translate", uz: "Bolaligimda men qishloqda yashadim.", a: ["When I was a child, I lived in a village.", "I lived in a village when I was a child.", "In my childhood I lived in a village.", "When I was a child I lived in a village.", "I lived in a village in my childhood.", "As a child, I lived in a village.", "As a child I lived in a village."] },
    { k: "translate", uz: "Choy ichasizmi yoki qahva?", a: ["Would you like tea or coffee?", "Do you want tea or coffee?", "Tea or coffee?", "Do you drink tea or coffee?", "Will you have tea or coffee?"] },
    { k: "speak", say: "After I graduate, I'm going to work abroad.", uz: "Bitirganimdan keyin chet elda ishlamoqchiman." },
  ],
  quiz: [
    { k: "choice", q: "___ I was ten, my family moved to Tashkent.", opts: ["When", "Or", "Before of", "After of"], a: 0, why: "**When** I was ten — o'n yoshligimda." },
    { k: "choice", q: "I'll phone you after the film ___.", opts: ["will finish", "finishes", "finish", "finishing"], a: 1, why: "**after** + Present Simple; *the film* → **finishes**." },
    { k: "choice", q: "Which is **correct**?", opts: ["I don't like tea or coffee.", "I don't like tea and or coffee.", "I like not tea or coffee.", "I don't like tea, coffee or."], a: 0, why: "Inkorda **or**." },
    { k: "fill", q: "Wash your hands before you ___ cooking. (start)", a: ["start"], why: "**before** + Present Simple." },
    { k: "fill", q: "They got married ___ they graduated.", a: ["after"], uz: "Ular o'qishni bitirgandan keyin turmush qurishdi." },
    { k: "listen", say: "Before he retired, he worked in a bank.", opts: ["Before he retired, he worked in a bank.", "After he retired, he worked in a bank.", "Before he retired, he walked to the bank."], a: 0 },
    { k: "tf", q: "**When I will finish work, I'll go to the gym.** — to'g'ri gap.", a: false, why: "*When I **finish** work, I'll go to the gym.*" },
    { k: "order", uz: "Universitetni bitirganimdan keyin chet elda ishlayman.", words: ["After", "I", "graduate", "I'll", "work", "abroad"], extra: ["will", "graduated"], alt: [["I'll", "work", "abroad", "after", "I", "graduate"]] },
    { k: "translate", uz: "Uyga kelganimda senga qo'ng'iroq qilaman.", a: ["When I get home, I'll call you.", "When I get home, I will call you.", "I'll call you when I get home.", "I will call you when I get home.", "When I come home, I'll call you.", "When I come home, I will call you.", "I'll call you when I come home.", "I will call you when I come home.", "When I get home, I'll phone you.", "I'll phone you when I get home."] },
    { k: "match", pairs: [["degree", "diplom"], ["wedding", "to'y"], ["career", "martaba"], ["join", "a'zo bo'lmoq"]] },
  ],
  summary: [
    "**when, before, after** ikki gapni vaqt bo'yicha bog'laydi; bu qism boshida bo'lsa — **vergul**: *When I was a child**,** I…*",
    "**before / after** + gap yoki ot: *after **I finished school*** / *after **school*** (*after of* ❌).",
    "Kelajak haqida: **when / before / after + Present Simple**, asosiy gapda **will**: *When I **get** home, I**'ll call** you.*",
    "**or** — savolda tanlov (*tea or coffee?*) va inkorda: *I don't eat meat **or** fish.*",
  ],
  homework: "Oilangizdagi katta yoshli bir odamning (bobo, buvi, ota-ona) hayoti haqida 8 ta gaplik matn yozing — Tohirning hikoyasi kabi. **when, before, after** ni kamida 2 martadan ishlating. Keyin o'zingizning kelajak rejalaringiz haqida 3 ta gap qo'shing: *When I finish…, I'll…*",
};

export default lesson;
