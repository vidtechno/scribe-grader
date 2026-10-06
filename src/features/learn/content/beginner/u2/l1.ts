import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: 'u2-l1',
  title: 'Personal pronouns',
  titleUz: 'Kishilik olmoshlari',
  goal: "Ingliz tilidagi 7 ta kishilik olmoshini (**I, you, he, she, it, we, they**) to'g'ri aytasiz va ishlatasiz: odam va narsalar o'rniga mos olmoshni tanlaysiz, ayniqsa o'zbekcha **\"u\"** ni **he / she / it** ga to'g'ri ajratasiz.",
  slides: [
    {
      title: 'Olmosh nima va nega kerak?',
      blocks: [
        { t: 'p', md: "**Olmosh** — ism o'rniga ishlatiladigan qisqa so'z. Har safar \"Ali, Ali, Ali\" deyish o'rniga **\"u\"** deymiz. Ingliz tilida bunday so'zlar 7 ta: **I, you, he, she, it, we, they**." },
        { t: 'p', md: "O'zbek tilida ko'pincha olmoshni tushirib qoldiramiz, chunki qo'shimcha hammasini aytib turadi: *Talaba**man**.* — \"men\" so'zi aytilmasa ham tushunarli. Ingliz tilida esa **olmosh deyarli hech qachon tushib qolmaydi**: *I'm a student.* — **I** shart!" },
        { t: 'tip', tone: 'warn', md: "Eng katta farq: o'zbekcha **\"u\"** bitta so'z, inglizchada esa uchta: **he** (erkak), **she** (ayol), **it** (narsa yoki hayvon). Bu darsning asosiy mavzusi shu." },
        { t: 'tip', tone: 'info', md: "Bu darsda *He is…, She is…, I'm…* kabi gaplarni **tayyor ibora** sifatida ishlatamiz. **am / is / are** qoidasini esa keyingi darsda batafsil o'rganamiz." },
      ],
    },
    {
      title: '7 ta olmosh va ularning talaffuzi',
      blocks: [
        {
          t: 'table', head: ['English', "O'zbekcha", 'Talaffuz'], speak: [0],
          rows: [
            ['I', 'men', '"ay"'],
            ['you', 'sen / siz / sizlar', '"yu:"'],
            ['he', 'u (erkak)', '"hi:"'],
            ['she', 'u (ayol)', '"shi:"'],
            ['it', 'u (narsa, hayvon)', '"it"'],
            ['we', 'biz', '"ui:"'],
            ['they', 'ular', '"ðey" (th jarangli)'],
          ],
        },
        {
          t: 'sounds', items: [
            { label: 'I', say: 'I', uz: "**\"ay\"** — xuddi **I** harfining nomi kabi. Har doim **katta harf** bilan yoziladi.", examples: ['I', "I'm a student"] },
            { label: 'he / she', say: 'he, she', uz: "**\"hi:\"** va **\"shi:\"** — ikkalasida ham \"i\" cho'ziq. Farqi faqat birinchi tovushda: **h** (yengil nafas) va **sh**.", examples: ['he', 'she'] },
            { label: 'we', say: 'we', uz: "**\"ui:\"** — lablarni dumaloq qilib \"u\" dan boshlang, keyin cho'ziq \"i:\". O'zbekcha \"v\" emas!", examples: ['we', 'we are friends'] },
            { label: 'they', say: 'they', uz: "**th** — tilning uchini tishlar orasiga qo'yib, ovoz bilan \"z\" ga o'xshash tovush chiqaring, keyin **\"ey\"**. \"Dey\" yoki \"zey\" emas, ikkalasining o'rtasi.", examples: ['they', 'the'] },
          ],
        },
        { t: 'check', ex: { k: 'listen', say: 'she', opts: ['he', 'see', 'she', 'we'], a: 2, why: "\"shi:\" — bu **she** (u, ayol). **he** esa \"hi:\" deb aytiladi." } },
      ],
    },
    {
      title: "\"U\" — he, she yoki it?",
      blocks: [
        { t: 'p', md: "Ingliz tilida **\"u\"** deyishdan oldin o'ylang: bu kim yoki nima?\n• **erkak yoki o'g'il bola** → **he**\n• **ayol yoki qiz bola** → **she**\n• **narsa, hayvon, joy** → **it**" },
        {
          t: 'examples', items: [
            { en: 'Aziz → he', uz: 'Aziz → u (erkak)' },
            { en: 'Malika → she', uz: 'Malika → u (ayol)' },
            { en: 'the teacher (a woman) → she', uz: "o'qituvchi (ayol) → u" },
            { en: 'the boy → he', uz: "o'g'il bola → u" },
            { en: 'the bag → it', uz: 'sumka → u' },
            { en: 'the cat → it', uz: 'mushuk → u', note: "Hayvonlar uchun ham odatda **it** ishlatiladi." },
          ],
        },
        {
          t: 'compare',
          good: { title: "To'g'ri", items: ['Malika is my friend. She is a student.', 'Aziz is my neighbour. He is a teacher.', 'This is my bag. It is green.'] },
          bad: { title: "Noto'g'ri", items: ['Malika is my friend. He is a student.', 'Aziz is my neighbour. She is a teacher.', 'This is my bag. He is green.'] },
        },
        { t: 'tip', tone: 'warn', md: "O'zbek tilida jins yo'q, shuning uchun **he** va **she** ni adashtirish — o'zbeklarning eng ko'p qiladigan xatosi. Gapirishdan oldin bir soniya to'xtab, \"erkakmi yoki ayolmi?\" deb o'ylang." },
        { t: 'check', ex: { k: 'choice', q: "**Laylo** — qiz. Uning o'rniga qaysi olmosh?", opts: ['he', 'it', 'they', 'she'], a: 3, why: "Laylo — ayol kishi, demak **she**." } },
      ],
    },
    {
      title: 'you, we, they',
      blocks: [
        { t: 'p', md: "**you** — juda qulay so'z: u **sen**, **siz** va **sizlar** degani. Ingliz tilida hurmat uchun alohida so'z yo'q: o'qituvchiga ham, do'stga ham, butun sinfga ham **you** deysiz. Hurmat ohang va *please, thank you* bilan bildiriladi." },
        { t: 'p', md: "**we** — biz (men + boshqalar).\n**they** — ular. **they** ham odamlar, ham narsalar uchun ishlatiladi: *Ali and Vali → they*, *the bags → they*." },
        {
          t: 'examples', items: [
            { en: 'You are my friend.', uz: "Sen mening do'stimsan." },
            { en: 'You are my teacher.', uz: "Siz mening o'qituvchimsiz." },
            { en: 'You are students.', uz: 'Sizlar talabasizlar.' },
            { en: 'We are classmates.', uz: 'Biz sinfdoshmiz.' },
            { en: 'They are my neighbours.', uz: "Ular mening qo'shnilarim." },
          ],
        },
        { t: 'check', ex: { k: 'tf', q: "O'qituvchiga hurmat bilan murojaat qilish uchun ingliz tilida **you** emas, boshqa maxsus so'z ishlatiladi.", a: false, why: "Yo'q — **you** hammaga: sen, siz, sizlar. Hurmat *please, thank you* va ohang bilan bildiriladi." } },
      ],
    },
    {
      title: "Bir nechta odam: qaysi olmosh?",
      blocks: [
        { t: 'p', md: "Ikki yoki undan ko'p odam haqida gapirganda, **siz** ham ichida bo'lsangiz — **we**, suhbatdosh ichida bo'lsa — **you**, boshqa holatda — **they**." },
        {
          t: 'table', head: ['Kimlar', 'Olmosh', "O'zbekcha"],
          rows: [
            ['Ali and I', 'we', 'Ali va men → biz'],
            ['you and Ali', 'you', 'sen/siz va Ali → sizlar'],
            ['Ali and Vali', 'they', 'Ali va Vali → ular'],
            ['the boy and the woman', 'they', "o'g'il bola va ayol → ular"],
            ['my family', 'we / they', "oilam → biz (agar o'zingiz ham ichida bo'lsangiz)"],
          ],
        },
        { t: 'tip', tone: 'good', md: "Odob qoidasi: ingliz tilida **I** ni oxiriga qo'yish odat: *Ali **and I** are friends.* (\"Men va Ali\" emas, \"Ali va men\")." },
        { t: 'check', ex: { k: 'choice', q: "**You and Ali** → qaysi olmosh?", opts: ['we', 'they', 'you', 'he'], a: 2, why: "Suhbatdosh (you) ichida bo'lgani uchun — **you** (sizlar)." } },
      ],
    },
    {
      title: "Odamlar: yangi so'zlar",
      blocks: [
        { t: 'p', md: "Olmoshlar bilan birga ishlatish uchun odamlarni bildiruvchi 10 ta so'z. Har birini eshiting va mos olmoshni o'ylang." },
        {
          t: 'examples', items: [
            { en: 'a friend', uz: "do'st", note: "*ie* bu yerda qisqa \"e\": \"frend\"" },
            { en: 'a teacher', uz: "o'qituvchi" },
            { en: 'a student', uz: 'talaba, o\'quvchi', note: "\"styu:dent\" — *u* \"yu:\" bo'lib o'qiladi" },
            { en: 'a boy', uz: "o'g'il bola → he" },
            { en: 'a woman', uz: 'ayol → she', note: "\"vumen\" emas, **\"wumən\"** — lab dumaloq" },
            { en: 'a neighbour', uz: "qo'shni", note: "*gh* o'qilmaydi: \"neybə\"" },
            { en: 'a classmate', uz: 'sinfdosh' },
            { en: 'a guest', uz: 'mehmon', note: "*u* o'qilmaydi: \"gest\"" },
            { en: 'a colleague', uz: 'hamkasb', note: "\"koli:g\" — oxiridagi *ue* o'qilmaydi" },
            { en: 'a team', uz: 'jamoa → it / we / they' },
          ],
        },
        {
          t: 'dialog', lines: [
            { who: 'Aziz', en: 'Hello! This is Malika. She is my classmate.', uz: 'Salom! Bu Malika. U mening sinfdoshim.' },
            { who: 'Tom', en: 'Hi, Malika!', uz: 'Salom, Malika!' },
            { who: 'Malika', en: 'Hi, Tom! Aziz and I are a team.', uz: 'Salom, Tom! Aziz va men — jamoamiz.' },
            { who: 'Tom', en: 'Great! You are a good team.', uz: "Zo'r! Sizlar yaxshi jamoasizlar." },
          ],
        },
        { t: 'check', ex: { k: 'fill', q: 'Tom is my neighbour. ___ is a student.', a: ['He'], uz: "Tom mening qo'shnim. U talaba.", why: "Tom — erkak, demak **He**." } },
      ],
    },
    {
      title: "Olmoshsiz gap bo'lmaydi",
      blocks: [
        { t: 'p', md: "Ingliz tilidagi gapda **ega (kim? nima?) doim aytiladi**. Agar ism bo'lmasa, uning o'rnida olmosh turadi. Ism va olmoshni birga ishlatmang." },
        {
          t: 'compare',
          good: { title: "To'g'ri", items: ["I'm a student.", 'Ali is my friend.', 'He is my friend.', 'I am Aziz.'] },
          bad: { title: "Noto'g'ri", items: ['Am a student.', 'Ali he is my friend.', 'Is my friend.', 'i am Aziz.'] },
        },
        { t: 'tip', tone: 'warn', md: "**I** (men) — har doim **katta harf**, hatto gap o'rtasida ham: *Ali and **I** are friends.*" },
        { t: 'check', ex: { k: 'order', uz: "U mening do'stim (ayol).", words: ['She', 'is', 'my', 'friend'], extra: ['He'], why: "Ayol kishi — **She**. Gap egadan boshlanadi: *She is my friend.*" } },
      ],
    },
  ],
  words: [
    { en: 'friend', uz: "do'st", ipa: 'frend', pos: 'noun', ex: 'He is my friend.', exUz: "U mening do'stim." },
    { en: 'teacher', uz: "o'qituvchi", ipa: 'ˈtiː.tʃə', pos: 'noun', ex: 'She is a teacher.', exUz: "U o'qituvchi." },
    { en: 'student', uz: "talaba, o'quvchi", ipa: 'ˈstjuː.dənt', pos: 'noun', ex: "I'm a student.", exUz: 'Men talabaman.' },
    { en: 'boy', uz: "o'g'il bola", ipa: 'bɔɪ', pos: 'noun', ex: 'He is a boy.', exUz: "U o'g'il bola." },
    { en: 'woman', uz: 'ayol', ipa: 'ˈwʊm.ən', pos: 'noun', ex: 'She is a woman.', exUz: 'U ayol kishi.' },
    { en: 'neighbour', uz: "qo'shni", ipa: 'ˈneɪ.bə', pos: 'noun', ex: 'Aziz is my neighbour.', exUz: "Aziz mening qo'shnim." },
    { en: 'classmate', uz: 'sinfdosh', ipa: 'ˈklɑːs.meɪt', pos: 'noun', ex: 'We are classmates.', exUz: 'Biz sinfdoshmiz.' },
    { en: 'guest', uz: 'mehmon', ipa: 'ɡest', pos: 'noun', ex: 'You are my guest.', exUz: 'Siz mening mehmonimsiz.' },
    { en: 'colleague', uz: 'hamkasb', ipa: 'ˈkɒl.iːɡ', pos: 'noun', ex: 'She is my colleague.', exUz: 'U mening hamkasbim.' },
    { en: 'team', uz: 'jamoa', ipa: 'tiːm', pos: 'noun', ex: 'We are a team.', exUz: 'Biz jamoamiz.' },
  ],
  practice: [
    { k: 'listen', say: 'they', opts: ['day', 'we', 'they', 'he'], a: 2, why: "**they** — \"th\" tilni tishlar orasiga qo'yib aytiladi. *day* esa \"d\" bilan." },
    { k: 'listen', say: 'we', opts: ['we', 'he', 'she', 'you'], a: 0, why: "\"ui:\" — bu **we** (biz)." },
    { k: 'match', pairs: [['I', 'men'], ['we', 'biz'], ['they', 'ular'], ['he', 'u (erkak)'], ['she', 'u (ayol)'], ['it', 'u (narsa)']] },
    { k: 'choice', q: "**the bag** (sumka) o'rniga qaysi olmosh?", opts: ['he', 'she', 'it', 'they'], a: 2, why: "Narsa — **it**." },
    { k: 'choice', q: "**Ali and Vali** o'rniga qaysi olmosh?", opts: ['we', 'you', 'he', 'they'], a: 3, why: "Ikki boshqa odam — **they** (ular)." },
    { k: 'choice', q: "**Ali and I** o'rniga qaysi olmosh?", opts: ['we', 'they', 'I', 'you'], a: 0, why: "Siz ham ichidasiz — **we** (biz)." },
    { k: 'tf', q: "**you** so'zi faqat bitta odamga aytiladi.", a: false, why: "**you** — sen, siz va sizlar. Bir kishiga ham, ko'p kishiga ham." },
    { k: 'match', pairs: [['friend', "do'st"], ['teacher', "o'qituvchi"], ['neighbour', "qo'shni"], ['guest', 'mehmon'], ['colleague', 'hamkasb']] },
    { k: 'fill', q: 'Aziz is my classmate. ___ is a student.', a: ['He'], uz: 'Aziz mening sinfdoshim. U talaba.', why: "Aziz — erkak: **He**." },
    { k: 'fill', q: 'My teacher is a woman. ___ is my neighbour.', a: ['She'], uz: "O'qituvchim ayol kishi. U mening qo'shnim.", why: "Ayol — **She**." },
    { k: 'fill', q: 'Ali and I are classmates. ___ are a team.', a: ['We'], uz: 'Ali va men sinfdoshmiz. Biz jamoamiz.', why: "Ali + men = **We**." },
    { k: 'tf', q: "*Ali and **i** are friends.* — bu gap to'g'ri yozilgan.", a: false, why: "**I** (men) doim katta harf bilan: *Ali and **I** are friends.*" },
    { k: 'order', uz: "U mening do'stim (erkak).", words: ['He', 'is', 'my', 'friend'], extra: ['She'], why: "Erkak — **He**: *He is my friend.*" },
    { k: 'translate', uz: 'Biz jamoamiz.', a: ['We are a team', "We're a team"], why: "biz — **we**, jamoa — **team**: *We are a team.*" },
    { k: 'translate', uz: 'U mening qo\'shnim (ayol).', a: ['She is my neighbour', "She's my neighbour", 'She is my neighbor', "She's my neighbor"], why: "Ayol — **She**: *She is my neighbour.*" },
    { k: 'speak', say: 'I, you, he, she, it, we, they', uz: "Yettita olmoshni ketma-ket ovoz chiqarib ayting" },
  ],
  quiz: [
    { k: 'listen', say: 'he', opts: ['she', 'he', 'we', 'it'], a: 1 },
    { k: 'choice', q: "**the book** (kitob) o'rniga qaysi olmosh?", opts: ['he', 'she', 'they', 'it'], a: 3, why: "Narsa — **it**." },
    { k: 'choice', q: "**You and Ali** o'rniga qaysi olmosh?", opts: ['we', 'they', 'you', 'he'], a: 2, why: "Suhbatdosh ichida — **you** (sizlar)." },
    { k: 'fill', q: 'Laylo is a girl. ___ is my classmate.', a: ['She'], why: "Laylo — qiz: **She**." },
    { k: 'fill', q: 'Tom and Sara are my friends. ___ are students.', a: ['They'], why: "Ikki boshqa odam — **They**." },
    { k: 'translate', uz: 'U mening hamkasbim (erkak).', a: ['He is my colleague', "He's my colleague"], why: "*He is my colleague.*" },
    { k: 'translate', uz: 'Siz mening mehmonimsiz.', a: ['You are my guest', "You're my guest"], why: "*You are my guest.*" },
    { k: 'order', uz: 'Biz sinfdoshmiz.', words: ['We', 'are', 'classmates'], extra: ['They'], why: "*We are classmates.*" },
    { k: 'match', pairs: [['boy', "o'g'il bola"], ['woman', 'ayol'], ['classmate', 'sinfdosh'], ['team', 'jamoa'], ['student', 'talaba']] },
    { k: 'tf', q: "*Ali and I* o'rniga **they** ishlatiladi.", a: false, why: "Men (I) ham ichida bo'lsam — **we**." },
  ],
  summary: [
    "7 ta olmosh: **I** (men), **you** (sen/siz/sizlar), **he**, **she**, **it** (u), **we** (biz), **they** (ular).",
    "O'zbekcha \"u\" = **he** (erkak), **she** (ayol), **it** (narsa, hayvon).",
    "**you** — sen ham, siz ham, sizlar ham; **they** — odamlar ham, narsalar ham.",
    "Ingliz gapida ega doim aytiladi: *I'm a student*, \"Am a student\" emas. **I** doim katta harf.",
    "Yangi so'zlar: friend, teacher, student, boy, woman, neighbour, classmate, guest, colleague, team.",
  ],
  homework: "Oilangiz va do'stlaringizdan 5 kishini o'ylang va har biri uchun bitta gap yozing: *Aziz — he. He is my friend.* Gaplarni ovoz chiqarib o'qing, **he** va **she** ni adashtirmaslikka harakat qiling.",
};

export default lesson;
