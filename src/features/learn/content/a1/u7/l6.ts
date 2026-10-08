import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u7-l6",
  title: "would like & invitations",
  titleUz: "would like, taklif qilish va javob berish",
  goal: "Odobli istak bildirasiz va taklif qilasiz: **I'd like a coffee. Would you like to come to my party?** Turli taklif iboralarini (**How about…? Why don't we…? Let's…**) ishlatasiz, taklifni qabul qilasiz (**I'd love to!**) yoki odobli rad etasiz (**I'm afraid I can't.**).",
  slides: [
    {
      title: "would like = xohlayman (odobli)",
      blocks: [
        { t: "p", md: "**would like** — *want* ning **odobli** shakli. Kafeda, do'konda, ishda, notanish odam bilan doim shuni ishlating. Qisqa shakli: **I'd, you'd, she'd, we'd, they'd**." },
        {
          t: "table", head: ["Tuzilma", "Misol", "O'zbekcha"],
          rows: [
            ["would like + ot", "I'd like a cup of tea, please.", "Bir piyola choy olsam bo'ladimi."],
            ["would like + to + fe'l", "I'd like to book a table.", "Stol band qilmoqchi edim."],
            ["Would you like + ot?", "Would you like some cake?", "Tort olasizmi?"],
            ["Would you like + to + fe'l?", "Would you like to sit down?", "O'tirasizmi?"],
          ],
          speak: [1],
        },
        { t: "tip", tone: "warn", md: "**would like** dan keyin fe'l **to** bilan keladi: ✅ *I'd like **to** go.* ❌ *I'd like go.* ❌ *I'd like going.* \n**he / she** bilan ham **-s yo'q**: ✅ *She'd like a coffee.* ❌ *She'd likes…*" },
        { t: "tip", tone: "info", md: "Ofitsiantga *I want a coffee* deyish ko'pincha qo'pol eshitiladi (\"Menga qahva kerak!\"). Odobli variant: **I'd like a coffee, please.** yoki **Can I have a coffee, please?**" },
        { t: "check", ex: { k: "choice", q: "\"Men xona band qilmoqchi edim.\" (mehmonxonada)", opts: ["I'd like book a room.", "I'd like to book a room.", "I'd like booking a room.", "I like to book a room now."], a: 1, why: "**would like + to + fe'l**: *I'd like **to** book a room.*" } },
      ],
    },
    {
      title: "Do you like…? yoki Would you like…?",
      blocks: [
        { t: "p", md: "Bu ikki savol bir-biriga juda o'xshaydi, lekin ma'nosi va **javobi** har xil:" },
        {
          t: "table", head: ["Savol", "Ma'nosi", "Javob"],
          rows: [
            ["Do you like tea?", "Choyni (umuman) yoqtirasizmi?", "Yes, I do. / No, I don't."],
            ["Would you like some tea?", "Choy ichasizmi? (hozir, taklif)", "Yes, please. / No, thank you."],
            ["Do you like dancing?", "Raqsga tushishni yoqtirasizmi?", "Yes, I love it!"],
            ["Would you like to dance?", "Raqsga tushamizmi? (taklif)", "Yes, I'd love to!"],
          ],
          speak: [0, 2],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["Would you like a sandwich? — Yes, please.", "Do you like sandwiches? — Yes, I do.", "Would you like to come? — I'd love to."] },
          bad: { title: "Xato", items: ["Would you like a sandwich? — Yes, I like.", "Do you like sandwiches? — Yes, please.", "Would you like to come? — Yes, I'd love."] },
        },
        { t: "check", ex: { k: "choice", q: "Mezbon so'radi: **Would you like some more plov?** Siz xohlaysiz. Javob:", opts: ["Yes, I do.", "Yes, please.", "Yes, I like.", "Yes, I would like it plov."], a: 1, why: "Taklifga javob — **Yes, please.** *Yes, I do* — *Do you like…?* ga javob." } },
      ],
    },
    {
      title: "Taklif qilish: 5 ta usul",
      blocks: [
        { t: "p", md: "Kimnidir biror joyga taklif qilish yoki birga biror narsa qilishni taklif etish uchun quyidagi iboralar ishlatiladi. Har birining **grammatikasi** boshqacha — e'tibor bering!" },
        {
          t: "table", head: ["Ibora", "Keyin nima keladi", "Misol"],
          rows: [
            ["Would you like to…?", "fe'l (to bilan)", "Would you like to come to dinner on Friday?"],
            ["Do you want to…?", "fe'l (to bilan) — norasmiy", "Do you want to watch a film tonight?"],
            ["How about…?", "fe'l-ing yoki ot", "How about going to the cinema? / How about pizza?"],
            ["Why don't we…?", "fe'l (to siz)", "Why don't we go for a walk?"],
            ["Let's…", "fe'l (to siz)", "Let's have lunch together."],
          ],
          speak: [2],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["How about playing tennis?", "Let's go to the park.", "Why don't we invite Aziz?"] },
          bad: { title: "Xato", items: ["How about play tennis?", "Let's to go to the park.", "Why don't we inviting Aziz?"] },
        },
        { t: "tip", tone: "info", md: "**Would you like to…?** — eng odobli (ishda, kattalar bilan). **Do you want to…? / Let's…** — do'stlar orasida. **Let's** = *Let us* — \"keling, …-aylik\": *Let's go!* — Ketdik!" },
        { t: "check", ex: { k: "fill", q: "How about ___ to the new café on Navoi Street? (go)", a: ["going"], uz: "Navoiy ko'chasidagi yangi kafega borsak-chi?", why: "**How about + -ing**." } },
        { t: "check", ex: { k: "choice", q: "Qaysi gap **xato**?", opts: ["Let's have a picnic.", "Why don't we have a picnic?", "How about having a picnic?", "Let's having a picnic."], a: 3, why: "**Let's + fe'l** (to siz, -ing siz): *Let's have…*" } },
      ],
    },
    {
      title: "Javob berish: ha yoki yo'q",
      blocks: [
        {
          t: "table", head: ["Qabul qilish ✅", "Odobli rad etish ❌"],
          rows: [
            ["I'd love to!", "I'm sorry, I can't. I'm working on Friday."],
            ["That sounds great!", "I'm afraid I can't. I'm busy that day."],
            ["Good idea!", "I'd love to, but I'm visiting my parents."],
            ["Yes, why not?", "Thanks, but maybe another time."],
          ],
          speak: [0, 1],
        },
        { t: "tip", tone: "warn", md: "**I'd love to.** — oxirida **to** qoladi! ❌ *I'd love.* Bu yerda *to* — *I'd love to (come)* ning qisqargani." },
        { t: "tip", tone: "info", md: "Madaniy farq: o'zbek mehmondo'stligida taklifni birinchi marta rad etib, keyin qabul qilish ko'pincha odatiy. Ingliz tilida **No, thank you** ko'pincha **haqiqiy rad** hisoblanadi. Ikkinchi marta taklif qilishmasligi mumkin! Xohlasangiz — darhol **Yes, please** deng." },
        { t: "tip", tone: "good", md: "Rad etganda **sabab** ayting — bu odobli. Sabab uchun 5-darsdagi Present Continuous juda mos: *I'm sorry, I can't. **I'm meeting** my uncle.*" },
        { t: "check", ex: { k: "choice", q: "**Would you like to come to my birthday party on Saturday?** — Siz bora olmaysiz. Eng yaxshi javob:", opts: ["No.", "I'd love to, but I'm going to a wedding on Saturday.", "No, I don't like.", "I'd love, but I can't."], a: 1, why: "Odobli rad: **I'd love to, but…** + sabab." } },
      ],
    },
    {
      title: "O'qing: Taklifnoma",
      blocks: [
        {
          t: "text", title: "A message from Malika",
          en: "Hi everyone!\nIt's my birthday next Saturday, and I'd like to invite you to a small party at my flat. We're starting at seven. My mum is making her famous manti, and my brother is bringing his guitar.\nAfter dinner, why don't we go to Magic City? It's beautiful at night.\nWould you like to come? Please reply by Thursday, because I need to know how much food to make!\nYou don't need to bring a present — just bring a smile.\nMalika",
          uz: "Hammaga salom!\nKeyingi shanba tug'ilgan kunim, sizlarni kvartiramdagi kichik ziyofatga taklif qilmoqchiman. Soat yettida boshlaymiz. Onam mashhur mantisini tayyorlayapti, akam esa gitarasini olib keladi.\nKechki ovqatdan keyin Magic City ga borsak-chi? U kechasi juda chiroyli.\nKelasizlarmi? Iltimos, payshanbagacha javob beringlar, chunki qancha ovqat qilishni bilishim kerak!\nSovg'a olib kelish shart emas — shunchaki tabassum olib keling.\nMalika",
        },
        {
          t: "examples", items: [
            { en: "Jasur: Happy birthday in advance! I'd love to come. See you on Saturday!", uz: "Jasur: Tug'ilgan kuning oldindan muborak! Albatta kelaman. Shanba kuni ko'rishamiz!" },
            { en: "Nigora: Thanks, Malika! I'm afraid I can't come — I'm flying to Moscow on Friday. Have a great party!", uz: "Nigora: Rahmat, Malika! Afsuski kela olmayman — juma kuni Moskvaga uchaman. Ziyofating zo'r o'tsin!" },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Malika's guests need to bring presents.", a: false, why: "*You **don't need** to bring a present — just bring a smile.*" } },
        { t: "check", ex: { k: "choice", q: "Why can't Nigora come?", opts: ["She's working.", "She's flying to Moscow.", "She doesn't like parties.", "She's going to a wedding."], a: 1, why: "*I'm flying to Moscow on Friday.*" } },
      ],
    },
    {
      title: "Dialog: Ishdan keyin",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Diyora", en: "Shohruh, would you like to have dinner with us on Friday? We're going to a new Korean restaurant.", uz: "Shohruh, juma kuni biz bilan kechki ovqat qilasizmi? Yangi koreys restoraniga boryapmiz." },
            { who: "Shohruh", en: "Oh, I'd love to, but I'm afraid I can't. I'm working late on Friday.", uz: "Voy, juda xohlardim, lekin afsuski qila olmayman. Juma kuni kechgacha ishlayman." },
            { who: "Diyora", en: "That's a pity. How about Saturday?", uz: "Attang. Shanba-chi?" },
            { who: "Shohruh", en: "Saturday sounds great! What time?", uz: "Shanba zo'r! Soat nechada?" },
            { who: "Diyora", en: "Let's meet at the restaurant at half past seven.", uz: "Restoranda yetti yarimda uchrashaylik." },
            { who: "Shohruh", en: "Perfect. Would you like me to pick you up?", uz: "Ajoyib. Sizni olib ketaymi?" },
            { who: "Diyora", en: "No, thank you. My office is very near. See you on Saturday!", uz: "Yo'q, rahmat. Ofisim juda yaqin. Shanba kuni ko'rishamiz!" },
          ],
        },
        { t: "tip", tone: "good", md: "Rad javobidan keyin: **That's a pity.** (Attang.) / **Never mind.** (Hechqisi yo'q.) / **Maybe another time.** (Boshqa safar.)" },
        { t: "check", ex: { k: "tf", q: "Shohruh and Diyora are having dinner on Friday.", a: false, why: "Juma kuni Shohruh ishlaydi. Ular **shanba** kuni uchrashishadi." } },
      ],
    },
  ],
  words: [
    { en: "would like", uz: "xohlamoq (odobli)", ipa: "wʊd ˈlaɪk", pos: "phrase", ex: "I'd like a glass of water, please.", exUz: "Bir stakan suv bersangiz." },
    { en: "invite", uz: "taklif qilmoq", ipa: "ɪnˈvaɪt", pos: "verb", ex: "I'd like to invite you to my wedding.", exUz: "Sizni to'yimga taklif qilmoqchiman." },
    { en: "invitation", uz: "taklif, taklifnoma", ipa: "ˌɪn.vɪˈteɪ.ʃən", pos: "noun", ex: "Thank you for the invitation!", exUz: "Taklif uchun rahmat!" },
    { en: "I'd love to", uz: "jon deb, juda xohlardim", ipa: "aɪd ˈlʌv tuː", pos: "phrase", ex: "Dinner on Friday? I'd love to!", exUz: "Juma kuni kechki ovqatmi? Jon deb!" },
    { en: "sounds great", uz: "zo'r, ajoyib eshitiladi", ipa: "saʊndz ˈɡreɪt", pos: "phrase", ex: "A picnic? That sounds great!", exUz: "Piknikmi? Zo'r!" },
    { en: "How about…?", uz: "… -sak-chi?", ipa: "haʊ əˈbaʊt", pos: "phrase", ex: "How about going for a walk?", exUz: "Sayrga chiqsak-chi?" },
    { en: "Why don't we…?", uz: "Nega … -maylik? (taklif)", ipa: "waɪ dəʊnt wiː", pos: "phrase", ex: "Why don't we eat out tonight?", exUz: "Bugun kechqurun tashqarida ovqatlansak-chi?" },
    { en: "Let's…", uz: "Keling, … -aylik", ipa: "lets", pos: "phrase", ex: "Let's meet at six.", exUz: "Oltida uchrashaylik." },
    { en: "another time", uz: "boshqa safar", ipa: "əˈnʌð.ə taɪm", pos: "phrase", ex: "Sorry, I'm busy. Maybe another time.", exUz: "Kechirasiz, bandman. Balki boshqa safar." },
    { en: "I'm afraid…", uz: "afsuski…", ipa: "aɪm əˈfreɪd", pos: "phrase", ex: "I'm afraid I can't come.", exUz: "Afsuski kela olmayman." },
  ],
  practice: [
    { k: "match", pairs: [["I'd love to!", "Jon deb!"], ["That's a pity.", "Attang."], ["Maybe another time.", "Balki boshqa safar."], ["I'm afraid I can't.", "Afsuski, qila olmayman."], ["Never mind.", "Hechqisi yo'q."]] },
    { k: "match", pairs: [["How about", "+ fe'l-ing"], ["Let's", "+ fe'l (to siz)"], ["Would you like", "+ to + fe'l"], ["I'm afraid", "afsuski"]] },
    { k: "listen", say: "I'd like to invite you.", opts: ["I'd like to invite you.", "I like to invite you.", "I'd like to visit you."], a: 0, why: "**I'd** — \"ayd\": qisqa **d** eshitiladi." },
    { k: "listen", say: "I'm afraid I can't.", opts: ["I'm afraid I can't.", "I'm afraid I'm late.", "I'm free, I can."], a: 0 },
    { k: "choice", q: "Kafeda: \"Menga apelsin sharbati bering.\" (odobli)", opts: ["I want orange juice.", "I'd like an orange juice, please.", "I like orange juice, please.", "I'd like to an orange juice."], a: 1, why: "Odobli buyurtma: **I'd like + ot, please**." },
    { k: "choice", q: "**Would you like to go to the cinema?** — qabul qilish:", opts: ["I'd love.", "I'd love to!", "Yes, I like.", "Yes, I do."], a: 1, why: "**I'd love to!** — *to* bilan." },
    { k: "fill", q: "Why don't we ___ a taxi? It's late. (take)", a: ["take"], uz: "Taksi olsak-chi? Kech bo'ldi.", why: "**Why don't we + fe'l** (o'zgarishsiz)." },
    { k: "fill", q: "I'd like ___ speak to the manager, please.", a: ["to"], uz: "Menejer bilan gaplashmoqchi edim.", why: "**would like + to + fe'l**." },
    { k: "fill", q: "Let's ___ at the metro station at five. (meet)", a: ["meet"], uz: "Soat beshda metro bekatida uchrashaylik.", why: "**Let's + fe'l**: *Let's meet*." },
    { k: "fill", q: "Thank you for the ___! I'd love to come to your wedding.", a: ["invitation"], uz: "Taklif uchun rahmat! To'yingizga albatta kelaman.", why: "Ot kerak: **invitation** (invite — fe'l)." },
    { k: "tf", q: "**She'd likes a coffee.** — to'g'ri gap.", a: false, why: "**would like** bilan **-s** qo'shilmaydi: *She'd like a coffee.*" },
    { k: "tf", q: "Ingliz tilida **No, thank you** deb javob bersangiz, taklif odatda yana takrorlanmaydi.", a: true, why: "Inglizlar **No, thank you** ni haqiqiy rad deb tushunishadi." },
    { k: "order", uz: "Juma kuni biz bilan kechki ovqat qilasizmi?", words: ["Would", "you", "like", "to", "have", "dinner", "with", "us", "on", "Friday?"], extra: ["liking", "having"] },
    { k: "order", uz: "Afsuski, kela olmayman. Juma kuni ishlayman.", words: ["I'm", "afraid", "I", "can't", "come.", "I'm", "working", "on", "Friday."], extra: ["work", "can"] },
    { k: "translate", uz: "Parkka borsak-chi?", a: ["How about going to the park?", "Why don't we go to the park?", "Let's go to the park.", "Shall we go to the park?", "What about going to the park?"], why: "**How about going…? / Why don't we go…? / Let's go…**" },
    { k: "speak", say: "Would you like to come to my party on Saturday?", uz: "Shanba kuni ziyofatimga kelasizmi?" },
  ],
  quiz: [
    { k: "choice", q: "\"U (he) choy ichmoqchi.\" (odobli)", opts: ["He'd likes some tea.", "He'd like some tea.", "He would likes some tea.", "He'd like to some tea."], a: 1, why: "**would like** — **-s** siz, ot bilan **to** siz." },
    { k: "choice", q: "To'g'ri taklifni tanlang:", opts: ["How about to go for a walk?", "How about go for a walk?", "How about going for a walk?", "How about went for a walk?"], a: 2, why: "**How about + -ing**." },
    { k: "choice", q: "**Do you like football?** — to'g'ri javob:", opts: ["Yes, please.", "I'd love to!", "Yes, I do.", "Yes, I'd like."], a: 2, why: "*Do you like…?* — umumiy savol → **Yes, I do.**" },
    { k: "fill", q: "Would you like ___ come to the cinema with us?", a: ["to"], uz: "Biz bilan kinoga borasizmi?", why: "**Would you like + to + fe'l**." },
    { k: "fill", q: "Why don't we ___ Grandma this weekend? (visit)", a: ["visit"], uz: "Bu dam olish kunlari buvimni ko'rgani borsak-chi?" },
    { k: "listen", say: "That sounds great!", opts: ["That sounds great!", "That sounds good!", "That's a great song!"], a: 0 },
    { k: "tf", q: "**Let's to go home.** — to'g'ri gap.", a: false, why: "**Let's + fe'l** (to siz): *Let's go home.*" },
    { k: "order", uz: "Sizni to'yimga taklif qilmoqchiman.", words: ["I'd", "like", "to", "invite", "you", "to", "my", "wedding"], extra: ["invitation", "inviting"] },
    { k: "translate", uz: "Rahmat, lekin balki boshqa safar.", a: ["Thanks, but maybe another time.", "Thank you, but maybe another time.", "Thanks but maybe another time", "Thanks, maybe another time.", "Thank you, maybe another time."], why: "**maybe another time** — boshqa safar." },
    { k: "choice", q: "Matnda (A message from Malika) Malika ziyofatdan keyin nima qilishni taklif qiladi?", opts: ["to go to Magic City", "to watch a film", "to play the guitar", "to go to a restaurant"], a: 0, why: "*After dinner, why don't we go to Magic City?*" },
  ],
  summary: [
    "**would like** = odobli *want*: **I'd like + ot** (*a coffee*), **I'd like + to + fe'l** (*to book a table*); **-s** yo'q.",
    "**Do you like…?** — umuman (*Yes, I do.*); **Would you like…?** — taklif (*Yes, please. / I'd love to!*).",
    "Taklif: **Would you like to…? / Do you want to…? / How about + -ing? / Why don't we + fe'l? / Let's + fe'l**.",
    "Qabul: **I'd love to! That sounds great!** Rad: **I'm afraid I can't. I'm working…** / **Maybe another time.**",
  ],
  homework: "Do'stingizga ziyofat, sayr yoki kinoga taklifnoma yozing (Malikanikidek, 5–6 gap: qachon, qayerda, nima qilamiz). Keyin ikkita javob yozing: biri — qabul qilish, biri — sabab bilan odobli rad etish. Kafeda **I'd like…** bilan uchta buyurtma ovoz chiqarib ayting.",
};

export default lesson;
