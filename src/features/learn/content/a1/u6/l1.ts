import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u6-l1",
  title: "Nice to meet you!",
  titleUz: "Tanishuv va qisqa suhbat",
  goal: "Yangi odam bilan tanishib, **boshqalarni tanishtirasiz** (*This is my colleague, Kamola.*), **What do you do? / Where are you from exactly?** kabi savollar bilan suhbatni davom ettirasiz va uni muloyim yakunlaysiz (*It was nice to meet you.*).",
  slides: [
    {
      title: "Tanishuvning uch bosqichi",
      blocks: [
        { t: "p", md: "Beginner darajasida *Hello, I'm Ali* deyishni o'rgandik. Haqiqiy hayotda tanishuv odatda **uch bosqichdan** iborat: **1) salom va ism → 2) 2–3 ta savol (qisqa suhbat, *small talk*) → 3) muloyim xayrlashuv**. Bugun har bir bosqichni tabiiy iboralar bilan to'ldiramiz." },
        {
          t: "dialog", lines: [
            { who: "Aziz", en: "Hi, I'm Aziz.", uz: "Salom, men Azizman." },
            { who: "Emma", en: "Hello, Aziz. I'm Emma. Nice to meet you.", uz: "Salom, Aziz. Men Emmaman. Tanishganimdan xursandman." },
            { who: "Aziz", en: "Nice to meet you too. Where are you from, Emma?", uz: "Men ham xursandman. Qayerdansiz, Emma?" },
            { who: "Emma", en: "I'm from Manchester, in England. And you?", uz: "Men Manchesterdanman, Angliyada. Siz-chi?" },
            { who: "Aziz", en: "I'm from Uzbekistan, from Namangan.", uz: "Men O'zbekistondanman, Namangandan." },
          ],
        },
        { t: "tip", tone: "info", md: "**Nice to meet you** — faqat **birinchi** uchrashuvda. Javob: **Nice to meet you too** (*too* = ham). Tanish odamni ko'rsangiz: **Nice to see you!**" },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["Nice to meet you.", "Nice to meet you too.", "(eski tanish) Nice to see you again!"] },
          bad: { title: "Xato", items: ["Nice to meet you also me.", "Me too nice.", "(eski tanish) Nice to meet you!"] },
        },
        { t: "check", ex: { k: "choice", q: "Kimdir sizga *Nice to meet you* dedi. Eng tabiiy javob:", opts: ["Nice to meet you too.", "Me too nice.", "Yes, nice.", "Thank you, me too meet."], a: 0, why: "Standart javob: **Nice to meet you too.**" } },
      ],
    },
    {
      title: "Boshqa odamni tanishtirish: This is…",
      blocks: [
        { t: "p", md: "Do'stingiz yoki hamkasbingizni tanishtirganda ingliz tilida **This is…** deyiladi — odam yoningizda tursa ham odatda **He is…** demaymiz! Ism oldidan odatda kimligini aytamiz:" },
        {
          t: "examples", items: [
            { en: "This is my friend, Dilshod.", uz: "Bu do'stim Dilshod." },
            { en: "This is my colleague, Kamola. We work together.", uz: "Bu hamkasbim Kamola. Biz birga ishlaymiz." },
            { en: "This is Mr Brown, our new teacher.", uz: "Bu janob Braun, bizning yangi o'qituvchimiz." },
            { en: "Dilshod, this is Emma. Emma, this is Dilshod.", uz: "Dilshod, bu Emma. Emma, bu Dilshod.", note: "Ikki tomonni ham tanishtirish — juda muloyim." },
            { en: "Let me introduce my sister, Malika.", uz: "Opamni tanishtirishga ruxsat bering — Malika.", note: "Rasmiyroq shakl." },
          ],
        },
        {
          t: "compare",
          good: { title: "Tanishtirganda", items: ["This is my brother, Sardor.", "These are my parents.", "Emma, this is Aziz."] },
          bad: { title: "Xato", items: ["He is my brother, Sardor.", "This my brother.", "Emma, he is Aziz."] },
        },
        { t: "tip", tone: "warn", md: "Bir nechta odamni tanishtirsangiz — **These are…**: *These are my classmates, Ali and Nodir.* \n**Mr** (erkak), **Mrs** (turmushga chiqqan ayol), **Ms** (\"miz\", har qanday ayol) — **familiya** bilan ishlatiladi: *Mr Karimov*, ❌ *Mr Bobur* emas." },
        { t: "check", ex: { k: "fill", q: "Ali, ___ is my cousin, Laylo.", a: ["this"], uz: "Ali, bu mening xolavachcham Laylo.", why: "Odamni tanishtirganda **This is…** deymiz." } },
      ],
    },
    {
      title: "Suhbatni davom ettirish: savollar",
      blocks: [
        { t: "p", md: "Ismni bilib oldingiz — endi nima? Ingliz tilida suhbatni uzmaslik uchun **qisqa savollar** beriladi. Eng ko'p ishlatiladiganlari:" },
        {
          t: "table", head: ["Savol", "Javob namunasi", "Ma'nosi"],
          rows: [
            ["Where are you from?", "I'm from Uzbekistan.", "Qayerdansiz?"],
            ["Where exactly?", "From Bukhara, in the west.", "Aniq qayerdan?"],
            ["What do you do?", "I'm a nurse. / I'm a student.", "Kim bo'lib ishlaysiz?"],
            ["Where do you live?", "I live in Yunusabad.", "Qayerda yashaysiz?"],
            ["Are you here on holiday?", "No, I'm here for work.", "Bu yerga dam olishga keldingizmi?"],
            ["What's your surname?", "It's Rakhimova.", "Familiyangiz nima?"],
          ],
          speak: [0, 1],
        },
        { t: "tip", tone: "warn", md: "**What do you do?** — \"Nima ish qilasiz? (kasbingiz nima?)\". **What are you doing?** — \"Hozir nima qilyapsiz?\". Ular butunlay boshqa savollar!\n*What do you do?* — *I'm an engineer.* ✅\n*What are you doing?* — *I'm reading.* ✅" },
        { t: "p", md: "Javob berganingizdan keyin savolni **qaytaring**: **And you?** yoki **What about you?** — shunda suhbat ikki tomonlama bo'ladi." },
        { t: "check", ex: { k: "choice", q: "Siz kishining **kasbini** bilmoqchisiz. Qaysi savol?", opts: ["What are you doing?", "What do you do?", "What do you doing?", "What you do?"], a: 1, why: "Kasb haqida: **What do you do?** *What are you doing?* — hozirgi harakat haqida." } },
      ],
    },
    {
      title: "Reaksiya bildirish va xayrlashish",
      blocks: [
        { t: "p", md: "Yaxshi suhbatdosh faqat savol bermaydi — **eshitganiga munosabat bildiradi**. Bu qisqa iboralar sizni ancha tabiiy qilib ko'rsatadi:" },
        {
          t: "examples", items: [
            { en: "Really? That's interesting!", uz: "Rostdanmi? Qiziq ekan!" },
            { en: "Oh, I know Bukhara. It's beautiful.", uz: "O, Buxoroni bilaman. Go'zal shahar." },
            { en: "Me too! I'm a student too.", uz: "Men ham! Men ham talabaman." },
            { en: "Actually, I'm from Termez, not Tashkent.", uz: "Aslida men Toshkentdan emas, Termizdanman.", note: "**actually** — \"aslida\", fikrni to'g'rilaganda." },
            { en: "By the way, what's your surname?", uz: "Aytgancha, familiyangiz nima?", note: "**by the way** — mavzuni o'zgartirganda." },
          ],
        },
        { t: "p", md: "Suhbat tugaganda xayrlashuv — tanishuvdagi iborani **o'tgan zamonda** takrorlaymiz:" },
        {
          t: "table", head: ["Xayrlashuv", "Javob"],
          rows: [
            ["It was nice to meet you.", "You too. / Nice to meet you too."],
            ["It was nice talking to you.", "Yes, you too!"],
            ["See you later. / See you tomorrow.", "See you! / Bye!"],
            ["Have a nice day!", "Thanks, you too!"],
          ],
          speak: [0, 1],
        },
        { t: "tip", tone: "info", md: "**actually** — \"rostdan\" ma'nosida emas! U **\"aslida, haqiqatda\"** degani: *Actually, I don't like tea.* — Aslida men choyni yoqtirmayman. \"Rostdanmi?\" — **Really?**" },
        { t: "check", ex: { k: "tf", q: "Suhbat oxirida **It was nice to meet you** desa bo'ladi.", a: true, why: "Ha — birinchi uchrashuvni yakunlaganda: *It was nice to meet you.*" } },
      ],
    },
    {
      title: "Talaffuz: bog'lanib aytish",
      blocks: [
        { t: "p", md: "Ingliz tilida qisqa iboralar **bitta so'zday**, bog'lanib aytiladi. Alohida-alohida aytsangiz, robotga o'xshaysiz:" },
        {
          t: "sounds", items: [
            { label: "Nice to meet you", say: "Nice to meet you.", uz: "**\"nays-tə-mi:-chu\"** — *to* qisqa \"tə\", *meet you* qo'shilib \"mi:chu\"ga o'xshaydi.", examples: ["Nice to meet you.", "Nice to meet you too."] },
            { label: "What do you do?", say: "What do you do?", uz: "**\"wot-də-yə-du:\"** — urg'u oxirgi **do** da. *do you* juda qisqa.", examples: ["What do you do?"] },
            { label: "Where are you from?", say: "Where are you from?", uz: "**\"weə-rə-yu-from\"** — *where* va *are* \"r\" bilan qo'shiladi.", examples: ["Where are you from?"] },
            { label: "colleague", say: "colleague", uz: "**\"ko-li:g\"** — urg'u **birinchi** bo'g'inda: **COL**-league.", examples: ["colleague", "my colleague"] },
          ],
        },
        { t: "tip", tone: "good", md: "Savolning **ohangi**: *Where are you from?* — oxirida ovoz **pasayadi** (Wh-savol). *Are you a student?* — oxirida ovoz **ko'tariladi** (Yes/No savol)." },
        { t: "check", ex: { k: "listen", say: "What do you do?", opts: ["What do you do?", "What are you doing?", "Where do you go?"], a: 0, why: "Bu kasb haqidagi savol: **What do you do?**" } },
      ],
    },
    {
      title: "Matn: konferensiyadagi tanishuv",
      blocks: [
        {
          t: "text", title: "Coffee break",
          en: "Nodira is an English teacher from Samarkand. Today she is at a conference in Tashkent. In the coffee break, a young man comes to her table.\n\"Hi, I'm Tom. Can I sit here?\" \"Of course. I'm Nodira. Nice to meet you.\" Tom is from Canada. He's a journalist, and he is in Uzbekistan for two weeks. \"Are you from Tashkent?\" he asks. \"No, actually I'm from Samarkand. I teach English at a school there.\" \"Really? I'm going to Samarkand on Friday!\" Nodira tells him about the Registan and her favourite café. Then her colleague, Bekzod, arrives. \"Tom, this is Bekzod. We work together.\" After ten minutes the break ends. \"It was nice to meet you both,\" says Tom.",
          uz: "Nodira — Samarqandlik ingliz tili o'qituvchisi. Bugun u Toshkentdagi konferensiyada. Kofe tanaffusida uning stoliga bir yigit keladi.\n\"Salom, men Tomman. Shu yerga o'tirsam bo'ladimi?\" \"Albatta. Men Nodiraman. Tanishganimdan xursandman.\" Tom Kanadadan. U jurnalist va O'zbekistonda ikki haftaga kelgan. \"Toshkentdanmisiz?\" — so'raydi u. \"Yo'q, aslida men Samarqanddanman. U yerdagi maktabda ingliz tilidan dars beraman.\" \"Rostdanmi? Men juma kuni Samarqandga boryapman!\" Nodira unga Registon va sevimli kafesi haqida aytib beradi. Keyin uning hamkasbi Bekzod keladi. \"Tom, bu Bekzod. Biz birga ishlaymiz.\" O'n daqiqadan keyin tanaffus tugaydi. \"Ikkalangiz bilan tanishganimdan xursand bo'ldim\", — deydi Tom.",
        },
        { t: "check", ex: { k: "tf", q: "Matnga ko'ra, **Tom is a teacher from Canada.**", a: false, why: "Tom — **jurnalist** (*He's a journalist*). O'qituvchi — Nodira." } },
        { t: "check", ex: { k: "choice", q: "Nodira Bekzodni qanday tanishtiradi?", opts: ["He is Bekzod.", "Tom, this is Bekzod.", "Tom, it is Bekzod.", "Tom, here Bekzod."], a: 1, why: "Tanishtirishda: **This is…**" } },
      ],
    },
  ],
  words: [
    { en: "introduce", uz: "tanishtirmoq", ipa: "ˌɪn.trəˈdjuːs", pos: "verb", ex: "Let me introduce my friend, Ali.", exUz: "Do'stim Alini tanishtirishga ijozat bering." },
    { en: "journalist", uz: "jurnalist", ipa: "ˈdʒɜː.nə.lɪst", pos: "noun", ex: "Tom is a journalist from Canada.", exUz: "Tom Kanadadan kelgan jurnalist." },
    { en: "conference", uz: "konferensiya", ipa: "ˈkɒn.fər.əns", pos: "noun", ex: "Nodira is at a conference in Tashkent.", exUz: "Nodira Toshkentdagi konferensiyada." },
    { en: "small talk", uz: "qisqa suhbat (kundalik gap-so'z)", ipa: "ˈsmɔːl tɔːk", pos: "noun", ex: "We make small talk in the coffee break.", exUz: "Kofe tanaffusida biz qisqa suhbatlashamiz." },
    { en: "exactly", uz: "aniq, aynan", ipa: "ɪɡˈzækt.li", pos: "adverb", ex: "Where exactly do you live?", exUz: "Aniq qayerda yashaysiz?" },
    { en: "first name", uz: "ism", ipa: "ˈfɜːst neɪm", pos: "noun", ex: "Her first name is Laylo.", exUz: "Uning ismi Laylo." },
    { en: "hometown", uz: "tug'ilgan shahar, ona shahar", ipa: "ˈhəʊm.taʊn", pos: "noun", ex: "My hometown is Andijan.", exUz: "Mening ona shahrim — Andijon." },
    { en: "actually", uz: "aslida, haqiqatda", ipa: "ˈæk.tʃu.ə.li", pos: "adverb", ex: "Actually, I'm from Termez.", exUz: "Aslida men Termizdanman." },
    { en: "by the way", uz: "aytgancha", ipa: "baɪ ðə ˈweɪ", pos: "phrase", ex: "By the way, where do you live?", exUz: "Aytgancha, qayerda yashaysiz?" },
    { en: "pleased", uz: "xursand", ipa: "pliːzd", pos: "adjective", ex: "I'm pleased to meet you.", exUz: "Siz bilan tanishganimdan xursandman." },
  ],
  practice: [
    { k: "match", pairs: [["colleague", "hamkasb"], ["neighbour", "qo'shni"], ["surname", "familiya"], ["hometown", "ona shahar"], ["classmate", "sinfdosh"]] },
    { k: "match", pairs: [["Nice to meet you.", "Nice to meet you too."], ["What do you do?", "I'm a doctor."], ["Where exactly?", "From Khiva."], ["Have a nice day!", "Thanks, you too!"]] },
    { k: "listen", say: "This is my colleague.", opts: ["This is my colleague.", "This is my college.", "These are my colleagues."], a: 0, why: "**colleague** — \"ko-li:g\", hamkasb. *college* — \"ko-lij\", kollej." },
    { k: "listen", say: "Nice to meet you too.", opts: ["Nice to meet you.", "Nice to see you too.", "Nice to meet you too."], a: 2 },
    { k: "choice", q: "Uzoq vaqtdan keyin eski do'stingizni ko'rdingiz. Nima deysiz?", opts: ["Nice to meet you!", "Nice to see you again!", "Nice to meet you too!"], a: 1, why: "Tanish odamga: **Nice to see you (again)!** *meet* — faqat birinchi tanishuvda." },
    { k: "choice", q: "Qaysi gap **xato**?", opts: ["This is my friend, Aziz.", "These are my parents.", "He is my brother, let me introduce.", "Emma, this is Jasur."], a: 2, why: "Tanishtirishda **This is my brother** yoki **Let me introduce my brother** deymiz." },
    { k: "fill", q: "What do you ___? — I'm a pharmacist.", a: ["do"], why: "Kasb so'raladi: **What do you do?**" },
    { k: "fill", q: "I'm from Uzbekistan. What ___ you?", a: ["about", "how"], why: "**What about you?** (yoki *How about you?*) = Siz-chi?" },
    { k: "fill", q: "It was nice ___ meet you.", a: ["to"], why: "**It was nice to meet you.**" },
    { k: "tf", q: "**What are you doing?** — bu odamning kasbini so'raydigan savol.", a: false, why: "Kasb — **What do you do?** *What are you doing?* — hozir nima qilayotganini so'raydi." },
    { k: "tf", q: "**Actually** o'zbekchaga \"aslida\" deb tarjima qilinadi.", a: true, why: "*Actually, I'm a student.* — Aslida men talabaman." },
    { k: "order", uz: "Bu mening qo'shnim, Rustam.", words: ["This", "is", "my", "neighbour,", "Rustam."], extra: ["these", "it"] },
    { k: "order", uz: "Aytgancha, familiyangiz nima?", words: ["By", "the", "way,", "what's", "your", "surname?"], extra: ["name's", "you"] },
    { k: "translate", uz: "Tanishganimdan xursandman.", a: ["Nice to meet you", "Pleased to meet you", "It's nice to meet you", "It is nice to meet you", "Glad to meet you", "I'm glad to meet you", "I'm pleased to meet you", "Good to meet you", "Lovely to meet you", "Nice to meet you!"] },
    { k: "translate", uz: "Siz kim bo'lib ishlaysiz?", a: ["What do you do", "What's your job", "What is your job", "What do you do for a living", "What do you do for work", "What is your profession", "What's your profession"] },
    { k: "speak", say: "Hi, I'm Aziz. This is my colleague, Kamola.", uz: "Salom, men Azizman. Bu hamkasbim Kamola." },
  ],
  quiz: [
    { k: "choice", q: "Do'stingizni tanishtiring: \"Bu do'stim Sherzod.\"", opts: ["He is my friend Sherzod.", "This is my friend, Sherzod.", "It my friend Sherzod.", "This my friend is Sherzod."], a: 1, why: "**This is my friend, Sherzod.**" },
    { k: "choice", q: "— What do you do? — …", opts: ["I'm reading a book.", "I'm fine, thanks.", "I'm a dentist.", "I'm from Samarkand."], a: 2, why: "Savol kasb haqida: **I'm a dentist.**" },
    { k: "listen", say: "Where are you from exactly?", opts: ["Where are you from exactly?", "Where do you live exactly?", "Where are you going?"], a: 0 },
    { k: "fill", q: "Nice to meet you. — Nice to meet you ___.", a: ["too", "also"], why: "Javob: **Nice to meet you too.**" },
    { k: "fill", q: "Malika and Sevara, ___ are my parents.", a: ["these"], uz: "Malika va Sevara, bular mening ota-onam.", why: "Ko'plik — **These are…**" },
    { k: "tf", q: "Ismi Bobur bo'lgan yangi tanishga **Mr Bobur** deb murojaat qilish to'g'ri.", a: false, why: "**Mr / Mrs / Ms** familiya bilan: *Mr Karimov*." },
    { k: "match", pairs: [["actually", "aslida"], ["by the way", "aytgancha"], ["introduce", "tanishtirmoq"], ["first name", "ism"]] },
    { k: "order", uz: "Siz bilan tanishganimdan xursand bo'ldim.", words: ["It", "was", "nice", "to", "meet", "you."], extra: ["met", "are"] },
    { k: "translate", uz: "Mening ona shahrim — Xiva.", a: ["My hometown is Khiva", "My hometown is Xiva", "My home town is Khiva", "My hometown's Khiva", "Khiva is my hometown"] },
    { k: "choice", q: "Mavzuni o'zgartirmoqchisiz. Qaysi ibora mos?", opts: ["Actually,", "By the way,", "Me too,", "You too,"], a: 1, why: "**By the way** — aytgancha, yangi mavzu boshlanadi." },
  ],
  summary: [
    "Tanishuv: **Nice to meet you. — Nice to meet you too.** Eski tanishga: **Nice to see you!**",
    "Boshqani tanishtirish: **This is my colleague, Kamola.** / **These are my parents.** (❌ *He is…*)",
    "**What do you do?** — kasb; **What are you doing?** — hozirgi harakat. Savolni qaytaring: **And you? / What about you?**",
    "Reaksiya: **Really? That's interesting!**; **actually** = aslida, **by the way** = aytgancha.",
    "Xayrlashuv: **It was nice to meet you. / Have a nice day!**",
  ],
  homework: "O'zingiz haqida tanishuv dialogini yozing (8–10 qator): salom, ism, qayerdansiz (*Where exactly?*), kasbingiz, bitta reaksiya (*Really?*), bitta *by the way* va xayrlashuv. Keyin bir do'stingizni yoki oila a'zoingizni inglizcha **This is…** bilan tanishtirib, ovozingizni yozib oling.",
};

export default lesson;
