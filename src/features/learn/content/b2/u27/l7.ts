import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u27-l7",
  title: "Writing: a formal email and a cover letter",
  titleUz: "Yozish: rasmiy email va qo'shimcha xat (cover letter)",
  goal: "Ikki turdagi rasmiy matn yozasiz: **shikoyat yoki so'rov emaili** (taxminan 150 so'z) va **cover letter** (taxminan 200 so'z). Mavzu qatori, murojaat (*Dear Mr / Ms, Dear Sir or Madam*), maqsad jumlasi, muloyim so'rov (*I would be grateful if you could…*) va yakun (*Yours sincerely / faithfully*) ni to'g'ri tuzasiz hamda **I am writing for apply**, **I will be grateful if you will** kabi xatolardan qochasiz.",
  slides: [
    {
      title: "Rasmiy emailning tuzilishi",
      blocks: [
        { t: "p", md: "Rasmiy email ish beruvchiga, kompaniyaga, universitetga yoki mijozga yoziladi. O'quvchi sizni tanimaydi va vaqti kam, shuning uchun email **aniq, tuzilgan va muloyim** bo'lishi kerak. Ish joyi, IELTS General Writing Task 1 va intervyuga tayyorgarlik uchun bir xil tuzilish ishlaydi." },
        {
          t: "table", head: ["Qism", "Vazifasi", "Misol"], speak: [2],
          rows: [
            ["Subject (mavzu)", "qisqa, aniq (3–8 so'z)", "Complaint about a late delivery"],
            ["Murojaat", "kimga yozilgani", "Dear Ms Hughes, / Dear Sir or Madam,"],
            ["Maqsad", "nima uchun yozayotganingiz", "I am writing to complain about…"],
            ["Tafsilot", "faktlar, sana, muammo", "The desk arrived two weeks late."],
            ["So'rov", "nima qilishlarini so'rash", "I would be grateful if you could…"],
            ["Yakun", "minnatdorchilik, kutish", "I look forward to hearing from you."],
            ["Imzo", "rasmiy sign-off + to'liq ism", "Yours faithfully, Aziza Karimova"],
          ],
        },
        { t: "tip", tone: "info", md: "**Murojaat va imzo mos bo'lishi kerak (Britaniya qoidasi):** ism noma'lum — *Dear Sir or Madam … Yours **faithfully***; ism ma'lum — *Dear Mr Brown … Yours **sincerely***. *Kind regards* — ish elektron pochtalarida keng ishlatiladigan, har ikki holatga mos neytral yakun." },
        { t: "check", ex: { k: "choice", q: "You begin an email with *Dear Sir or Madam*. How should you end it?", opts: ["Yours faithfully", "Yours sincerely", "Cheers", "Love"], a: 0, why: "Ism noma'lum bo'lsa: **Dear Sir or Madam … Yours faithfully**." } },
        { t: "check", ex: { k: "choice", q: "Which subject line is best for an enquiry about courses?", opts: ["Hi", "Enquiry about evening English courses", "HELP!!!", "Question for you"], a: 1, why: "Mavzu qatori **aniq va qisqa** bo'lishi kerak." } },
      ],
    },
    {
      title: "Shikoyat va so'rov: iboralar",
      blocks: [
        { t: "p", md: "Shikoyat emailida **qat'iy, lekin qo'pol bo'lmagan** ohang kerak. Fakt va sana keltiring, his-tuyg'uni emas, **muammo** va **istagan natijangizni** ayting." },
        {
          t: "table", head: ["Maqsad", "Ifoda"], speak: [1],
          rows: [
            ["Maqsad", "I am writing to complain about… / to enquire about… / to request…"],
            ["Muammo", "Unfortunately, the item arrived damaged. / I find the service unsatisfactory."],
            ["Hissiyot (yumshoq)", "I was disappointed to find that… / I am dissatisfied with…"],
            ["Talab", "I would be grateful if you could send a replacement. / I would like to request a full refund."],
            ["Muddat", "I would appreciate a prompt reply."],
            ["Ogohlantirish", "If the matter is not resolved, I shall have to contact my bank."],
            ["Yakun", "I look forward to hearing from you."],
          ],
        },
        { t: "p", md: "**Qoidalar:** (1) qisqartma yo'q (*I am, I would*); (2) passiv yoki shaxssiz iboralar muloyimlik beradi; (3) **bitta paragraf — bitta fikr**; (4) so'rovni **would / could** bilan yumshating." },
        { t: "check", ex: { k: "choice", q: "Which opening sentence is best for a formal complaint?", opts: ["I'm writing 'cause your service is terrible.", "I am writing to complain about a faulty product I bought from your shop.", "Hello, you sent me a broken thing.", "Listen, I need to talk to you about my order."], a: 1, why: "**I am writing to complain about…** — rasmiy, aniq, qisqartmasiz." } },
        { t: "check", ex: { k: "choice", q: "Which sentence is firm but polite?", opts: ["I am disappointed that the delivery was late, and I would like a refund.", "You are terrible at your job.", "Give me my money back now.", "I demand an apology immediately, or else."], a: 0, why: "Faktni aytadi, aniq natija so'raydi va qo'pollik yo'q." } },
      ],
    },
    {
      title: "Cover letter: tuzilishi",
      blocks: [
        { t: "p", md: "**Cover letter** (qo'shimcha xat) CV bilan birga yuboriladi va ish beruvchiga **nima uchun aynan siz** ekaningizni tushuntiradi. CV faktlarni sanaydi, xat esa ularni **bog'laydi va ishontiradi**. Hajmi: 200–250 so'z, 3–4 abzats." },
        {
          t: "table", head: ["Abzats", "Mazmuni", "Ifoda"], speak: [2],
          rows: [
            ["1. Ochish", "lavozim va e'londan qayerdan bilganingiz", "I am writing to apply for the position of Marketing Assistant, which I saw advertised on your website."],
            ["2. Tajriba", "2–3 dalil bilan (raqam, natija)", "In my current role I am responsible for… I increased followers by forty per cent."],
            ["3. Nega bu kompaniya", "o'z ishtiyoqingiz va mosligingiz", "I am particularly attracted to your company because…"],
            ["4. Yakun", "imkoniyat so'rash, minnatdorlik", "I would welcome the opportunity to discuss my application at an interview."],
          ],
        },
        {
          t: "examples", items: [
            { en: "I have attached my CV, and my referees are available on request.", uz: "CV'mni ilova qildim, tavsiya beruvchilarim so'rov bo'yicha mavjud." },
            { en: "I am confident that my enthusiasm would make me a valuable member of your team.", uz: "Ishtiyoqim meni jamoangiz uchun qimmatli a'zo qilishiga ishonchim komil." },
            { en: "Thank you for considering my application.", uz: "Arizamni ko'rib chiqqaningiz uchun rahmat." },
          ],
        },
        { t: "tip", tone: "good", md: "**Dalil bering:** *I am hard-working* — bo'sh gap. *I organised a campaign which attracted over two hundred new customers* — dalil. Har bir xususiyatni **natija bilan** tasdiqlang." },
        { t: "check", ex: { k: "tf", q: "Cover letter CV ning aynan nusxasi bo'lishi kerak, ya'ni ro'yxatni takrorlaydi.", a: false, why: "Cover letter tajribani **bog'laydi** va nega mosligingizni tushuntiradi; CV ni takrorlamaydi." } },
        { t: "check", ex: { k: "fill", q: "Please find ___ my CV and a copy of my certificate.", a: ["attached", "enclosed"], uz: "CV'm va sertifikat nusxasi ilova qilingan.", why: "Email'da **attached**, qog'oz xatda **enclosed**." } },
      ],
    },
    {
      title: "Muloyim so'rov va bog'lovchilar",
      blocks: [
        { t: "p", md: "Rasmiy xatning ohangi **so'rov shakllari** va **bog'lovchilar** orqali yaratiladi. Quyidagi jadvalni yodlang:" },
        {
          t: "table", head: ["Ma'no", "Norasmiy", "Rasmiy"], speak: [2],
          rows: [
            ["So'rov", "Can you send me a refund?", "I would be grateful if you could send me a refund."],
            ["Kutish", "Write back soon!", "I look forward to hearing from you."],
            ["Ilova", "I'm sending my CV.", "I have attached my CV. / Please find my CV attached."],
            ["Zid", "but", "however, nevertheless"],
            ["Qo'shimcha", "also, plus", "furthermore, in addition"],
            ["Natija", "so", "therefore, as a result"],
          ],
        },
        { t: "p", md: "**I would be grateful if you could…** (**you could / would**, *you will* emas). *I would appreciate it if you could…* — xuddi shunday. Shuningdek, ish beruvchiga **shaxssiz** gaplar yarashadi: *I would be grateful for a prompt reply* (ot bilan)." },
        { t: "tip", tone: "good", md: "**Yozishdan keyingi tekshirish ro'yxati:** (1) subject qatori bormi? (2) *Dear…* va yakun mos kelyaptimi? (3) birinchi jumlada maqsad aytilganmi? (4) qisqartma va so'zlashuv so'zlari yo'qmi? (5) so'rov *would / could* bilan yumshatilganmi? (6) imzo to'liq ism bilanmi? (7) imlo va punktuatsiya tekshirildimi?" },
        { t: "check", ex: { k: "choice", q: "Which sentence is too informal for a cover letter?", opts: ["I would welcome the opportunity to discuss my application.", "I have attached my CV for your consideration.", "I'm dead keen on this job, so give me a shout.", "I am confident that I would be a valuable member of your team."], a: 2, why: "*dead keen, give me a shout* — so'zlashuv uslubi." } },
      ],
    },
    {
      title: "Tipik xatolar (o'zbek tilidan)",
      blocks: [
        { t: "p", md: "Rasmiy xatda ko'p xatolar **maqsad ifodasidan**, **so'rov shaklidan** va **so'zma-so'z tarjimadan** kelib chiqadi: *ariza berish uchun yozyapman, kutib qolaman, ilovada yuboraman.*" },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I am writing to apply for the position of designer.", "I would be grateful if you could send me a refund.", "I am looking forward to hearing from you.", "I have attached my CV."] },
          bad: { title: "Xato", items: ["I am writing for apply for the position of designer.", "I will be grateful if you will send me a refund.", "I am looking forward to hear from you.", "I send you my CV in attachment."] },
        },
        { t: "p", md: "**1.** Maqsad: **to + fe'l** (*I am writing to apply*), *for apply* emas. **2.** So'rov: **would be grateful if you could**. **3.** *look forward to* da **to** — predlog: **-ing**. **4.** *In attachment* — ruscha/o'zbekcha ta'sir; **attach** fe'li yoki *Please find attached…*." },
        { t: "check", ex: { k: "fix", wrong: "I am writing for apply for the position of designer.", a: ["I am writing to apply for the position of designer."], hint: "maqsad ifodasi", why: "Maqsad: **to + fe'l**." } },
        { t: "check", ex: { k: "fix", wrong: "I will be grateful if you will send me a refund.", a: ["I would be grateful if you could send me a refund.", "I would be grateful if you would send me a refund."], hint: "muloyim shakl", why: "**would be grateful if you could / would**." } },
        { t: "check", ex: { k: "fix", wrong: "I am looking forward to hear from you.", a: ["I am looking forward to hearing from you.", "I look forward to hearing from you."], hint: "look forward to + ?", why: "**look forward to + -ing**." } },
        { t: "check", ex: { k: "fix", wrong: "I send you my CV in attachment.", a: ["I attach my CV.", "I am attaching my CV.", "I have attached my CV.", "Please find my CV attached.", "Please find attached my CV."], hint: "attach fe'li", why: "**attach** fe'li yoki **Please find … attached**." } },
      ],
    },
    {
      title: "Namunalar: email va cover letter",
      blocks: [
        { t: "p", md: "Quyida ikki namuna bor. Ularni **tuzilma** nuqtai nazaridan o'qing: paragraflar nima vazifa bajaradi, qaysi iboralar muloyimlik beradi?" },
        {
          t: "text", title: "Model complaint email", voice: "emma",
          en: "Subject: Complaint about a late delivery. Dear Sir or Madam, I am writing to complain about the delivery of the desk I ordered from your website last month. According to your confirmation email, the desk would be dispatched within five working days. However, it arrived two weeks late, and one of the legs was damaged. I contacted your customer service team twice, but I have not received a reply. I find this service unsatisfactory, particularly as I paid extra for express delivery. I would be grateful if you could send a replacement desk or reimburse the full price, including the delivery charge. I would also appreciate a prompt reply, as I need the furniture for my new office. I look forward to hearing from you. Yours faithfully, Aziza Karimova.",
          uz: "Mavzu: Kechikkan yetkazib berish haqida shikoyat. Hurmatli janob yoki xonim, o'tgan oy sizning veb-saytingizdan buyurtma qilgan stolning yetkazib berilishi haqida shikoyat qilish uchun yozyapman. Tasdiqlash xatingizga ko'ra, stol besh ish kuni ichida jo'natilishi kerak edi. Biroq u ikki hafta kech keldi va oyoqlaridan biri shikastlangan edi. Mijozlarga xizmat ko'rsatish jamoangizga ikki marta murojaat qildim, lekin javob olmadim. Ayniqsa tezkor yetkazib berish uchun qo'shimcha to'laganimni hisobga olsak, bu xizmatni qoniqarsiz deb hisoblayman. Almashtirish uchun yangi stol jo'natsangiz yoki yetkazib berish haqini ham qo'shib, butun narxni qaytarsangiz, minnatdor bo'lardim. Yangi ofisim uchun mebel kerakligi sababli tezkor javobni ham qadrlayman. Javobingizni kutaman. Hurmat bilan, Aziza Karimova.",
        },
        {
          t: "text", title: "Model cover letter", voice: "george",
          en: "Dear Ms Hughes, I am writing to apply for the position of Marketing Assistant, which I saw advertised on your company website last week. I recently graduated in Business Studies, and for the past year I have worked part-time as a social media assistant for a local travel agency. In this role I was responsible for planning the weekly posts, and I increased the number of followers by about forty per cent. I also organised a small campaign which attracted over two hundred new customers. These experiences have taught me to work to deadlines and to communicate clearly with clients. I am particularly attracted to your company because of its creative approach to advertising and its commitment to training young staff. I am confident that my enthusiasm and my ability to learn quickly would make me a valuable member of your team. I have attached my CV, and my referees are available on request. I would welcome the opportunity to discuss my application at an interview. Thank you for considering my application. I look forward to hearing from you. Yours sincerely, Bobur Rahimov.",
          uz: "Hurmatli Hughes xonim, o'tgan hafta kompaniyangiz veb-saytida e'lon qilingan Marketing yordamchisi lavozimiga murojaat qilish uchun yozyapman. Men yaqinda Biznes ta'limi bo'yicha bitirdim va o'tgan bir yil davomida mahalliy turistik agentlikda ijtimoiy tarmoqlar bo'yicha yordamchi sifatida yarim kunlik ishladim. Bu lavozimda haftalik postlarni rejalashtirishga javobgar edim va kuzatuvchilar sonini taxminan qirq foizga oshirdim. Shuningdek, ikki yuzdan ortiq yangi mijozni jalb qilgan kichik kampaniya tashkil etdim. Bu tajriba menga muddatlarga rioya qilishni va mijozlar bilan aniq muloqot qilishni o'rgatdi. Kompaniyangizning reklamadagi ijodiy yondashuvi va yosh xodimlarni o'qitishga e'tibori meni ayniqsa jalb qiladi. Ishtiyoqim va tez o'rganish qobiliyatim meni jamoangiz uchun qimmatli a'zo qilishiga ishonchim komil. CV'mni ilova qildim, tavsiya beruvchilarim so'rov bo'yicha mavjud. Arizamni intervyuda muhokama qilish imkoniyatidan xursand bo'lardim. Arizamni ko'rib chiqqaningiz uchun rahmat. Javobingizni kutaman. Hurmat bilan, Bobur Rahimov.",
        },
        { t: "check", ex: { k: "tf", q: "In the complaint email, the customer asks for either a replacement or a refund.", a: true, why: "*send a replacement desk or reimburse the full price*." } },
        { t: "check", ex: { k: "choice", q: "How did the writer of the cover letter prove that he is capable?", opts: ["By giving examples with results", "By saying he is the best", "By listing hobbies", "By asking for a high salary"], a: 0, why: "U natijalarni keltirdi: *increased followers by forty per cent*, *attracted over two hundred new customers*." } },
      ],
    },
    {
      title: "Dialog: Xatni tekshirish",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Olivia", en: "Adam, could you read my cover letter before I send it?", uz: "Adam, yuborishdan oldin cover letter'imni o'qib chiqa olasizmi?" },
            { who: "Adam", en: "Sure. The structure is clear, but your first sentence says, \"I want job in your company.\"", uz: "Albatta. Tuzilishi aniq, lekin birinchi gapingizda «Kompaniyangizda ish xohlayman» deyilgan." },
            { who: "Olivia", en: "Is that too direct?", uz: "Bu juda to'g'ridan-to'g'rimi?" },
            { who: "Adam", en: "Yes. Try, \"I am writing to apply for the position of accountant, which I saw advertised on your website.\"", uz: "Ha. «Buxgalter lavozimiga murojaat qilish uchun yozyapman, e'lonni veb-saytingizda ko'rdim» deb ko'ring." },
            { who: "Olivia", en: "That sounds much more professional. What about the ending?", uz: "Bu ancha professional eshitiladi. Yakuni-chi?" },
            { who: "Adam", en: "I would write, \"I would welcome the opportunity to discuss my application. I look forward to hearing from you.\" Then \"Yours sincerely\", because you know the name of the manager.", uz: "«Arizamni muhokama qilish imkoniyatidan xursand bo'lardim. Javobingizni kutaman» deb yozardim. Keyin «Yours sincerely», chunki rahbarning ismini bilasiz." },
            { who: "Olivia", en: "Right. And should I mention my weakest subject?", uz: "To'g'ri. Eng zaif fanimni aytishim kerakmi?" },
            { who: "Adam", en: "No. Focus on your strengths and give evidence, such as results and numbers.", uz: "Yo'q. Kuchli tomonlaringizga e'tibor bering va dalil keltiring, masalan natija va raqamlar." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "Why does Adam suggest \"Yours sincerely\"?", opts: ["Olivia knows the manager's name", "It is shorter", "Olivia is writing to a friend", "The letter is a complaint"], a: 0, why: "Ism ma'lum bo'lsa: **Dear Ms… Yours sincerely**." } },
      ],
    },
  ],
  words: [
    { en: "reimburse", uz: "xarajatni qaytarmoq", ipa: "ˌriː.ɪmˈbɜːs", pos: "verb", ex: "The company will reimburse you for the travel costs.", exUz: "Kompaniya sizga yo'l xarajatlarini qaytaradi." },
    { en: "unsatisfactory", uz: "qoniqarsiz", ipa: "ˌʌn.sæt.ɪsˈfæk.tər.i", pos: "adj", ex: "The quality of the repair was unsatisfactory.", exUz: "Ta'mirlash sifati qoniqarsiz edi." },
    { en: "dissatisfied", uz: "norozi, qoniqmagan", ipa: "dɪˈsæt.ɪs.faɪd", pos: "adj", ex: "Many customers were dissatisfied with the new system.", exUz: "Ko'p mijozlar yangi tizimdan norozi edi." },
    { en: "prompt", uz: "tezkor, o'z vaqtidagi", ipa: "prɒmpt", pos: "adj", ex: "Thank you for your prompt reply.", exUz: "Tezkor javobingiz uchun rahmat." },
    { en: "enthusiasm", uz: "ishtiyoq, g'ayrat", ipa: "ɪnˈθjuː.zi.æz.əm", pos: "noun", ex: "She showed great enthusiasm during the interview.", exUz: "U intervyu paytida katta ishtiyoq ko'rsatdi." },
    { en: "referee", uz: "tavsiya beruvchi shaxs", ipa: "ˌref.əˈriː", pos: "noun", ex: "My former manager has agreed to be my referee.", exUz: "Sobiq rahbarim mening tavsiya beruvchim bo'lishga rozi bo'ldi." },
    { en: "accomplishment", uz: "yutuq, erishilgan natija", ipa: "əˈkʌm.plɪʃ.mənt", pos: "noun", ex: "Winning the contract was a major accomplishment for the team.", exUz: "Shartnomani yutib olish jamoa uchun katta yutuq bo'ldi." },
    { en: "inquire", uz: "so'ramoq, ma'lumot olmoq (rasmiy)", ipa: "ɪnˈkwaɪə", pos: "verb", ex: "I am writing to inquire about your evening courses.", exUz: "Kechki kurslaringiz haqida so'rash uchun yozyapman." },
    { en: "dispatch", uz: "jo'natmoq", ipa: "dɪˈspætʃ", pos: "verb", ex: "Your order will be dispatched within two days.", exUz: "Buyurtmangiz ikki kun ichida jo'natiladi." },
    { en: "remedy", uz: "chora; muammoni hal qilish", ipa: "ˈrem.ə.di", pos: "noun", ex: "We will do everything possible to find a remedy.", exUz: "Yechim topish uchun barcha imkoniyatdan foydalanamiz." },
  ],
  practice: [
    { k: "choice", q: "*Dear Sir or Madam* bilan boshlangan xat qanday tugatiladi?", opts: ["Yours faithfully", "Yours sincerely", "Cheers", "Best mates"], a: 0, why: "Ism noma'lum: **Yours faithfully**." },
    { k: "choice", q: "Rasmiy shikoyat uchun eng yaxshi birinchi gap:", opts: ["Hello, you sent me a broken thing.", "I am writing to complain about a faulty product I bought from your shop.", "I'm writing 'cause your service is bad.", "Listen, I need to talk about my order."], a: 1, why: "**I am writing to complain about…** — rasmiy va aniq." },
    { k: "listen", say: "I would be grateful if you could send me a refund.", opts: ["I will be grateful if you can send me a refund.", "I would grateful if you could send me a refund.", "I would be grateful if you could send me a refund.", "I was grateful if you could send me a refund."], a: 2, why: "**would be grateful if you could…**" },
    { k: "fill", q: "I am writing ___ apply for the position of sales assistant.", a: ["to"], uz: "Sotuv yordamchisi lavozimiga murojaat qilish uchun yozyapman.", why: "Maqsad: **to + fe'l**." },
    { k: "fill", q: "Please find ___ my CV and a copy of my certificate.", a: ["attached", "enclosed"], uz: "CV va sertifikat nusxasi ilova qilingan.", why: "**Please find attached**." },
    { k: "fill", q: "I find your service ___, as I have waited three weeks for a reply. (u…)", a: ["unsatisfactory", "unacceptable"], hint: "u…", uz: "Xizmatingizni qoniqarsiz deb hisoblayman.", why: "**unsatisfactory** = qoniqarsiz." },
    { k: "order", uz: "Menga to'liq pulni qaytarib bersangiz, minnatdor bo'lardim.", words: ["I", "would", "be", "grateful", "if", "you", "could", "reimburse", "me", "in", "full."], extra: ["reimbursing", "has"], why: "**would be grateful if you could…**" },
    { k: "order", uz: "Tezroq javob bersangiz, minnatdor bo'lardim.", words: ["I", "would", "appreciate", "a", "prompt", "reply."], extra: ["promptly", "appreciates"], why: "**appreciate** + ot." },
    { k: "translate", uz: "Hozirgi ishimda men mijozlar bilan ishlash uchun javobgarman.", a: ["In my current job I am responsible for dealing with customers.", "In my current role I am responsible for dealing with customers.", "In my current job I am responsible for working with customers.", "In my current role I am responsible for working with customers.", "In my current job, I am responsible for dealing with customers.", "In my current role, I am responsible for dealing with customers.", "In my present job I am responsible for dealing with customers.", "In my present role I am responsible for dealing with customers.", "In my current job I am responsible for customer service."], why: "**be responsible for + -ing**." },
    { k: "translate", uz: "CV'mni ilova qildim.", a: ["I have attached my CV.", "I've attached my CV.", "I attach my CV.", "I am attaching my CV.", "Please find my CV attached.", "Please find attached my CV."], why: "**I have attached…** — email'dagi standart ibora." },
    { k: "fix", wrong: "I am writing for apply for the position of designer.", a: ["I am writing to apply for the position of designer."], hint: "maqsad ifodasi", why: "**to + fe'l**." },
    { k: "fix", wrong: "I will be grateful if you will send me a refund.", a: ["I would be grateful if you could send me a refund.", "I would be grateful if you would send me a refund."], hint: "muloyim shakl", why: "**would … if you could**." },
    { k: "match", pairs: [["reimburse", "xarajatni qaytarmoq"], ["referee", "tavsiya beruvchi shaxs"], ["enthusiasm", "ishtiyoq"], ["dispatch", "jo'natmoq"], ["remedy", "chora, yechim"]] },
    { k: "tf", q: "*Dear Mr Brown* bilan boshlangan xat **Yours sincerely** bilan tugatiladi (Britaniya qoidasi).", a: true, why: "Ism ma'lum bo'lsa: **Yours sincerely**." },
    { k: "dictation", say: "I have attached my CV, and my referees are available on request.", uz: "CV'mni ilova qildim, tavsiya beruvchilarim so'rov bo'yicha mavjud.", why: "Cover letter yakunidagi standart gap." },
    { k: "speak", say: "I am writing to apply for the position of marketing assistant.", uz: "Marketing yordamchisi lavozimiga murojaat qilish uchun yozyapman." },
  ],
  quiz: [
    { k: "choice", q: "*Dear Ms Hughes,* ga qaysi yakun mos?", opts: ["Yours faithfully", "Yours sincerely", "Best mates", "See you!"], a: 1, why: "Ism ma'lum: **Yours sincerely**." },
    { k: "choice", q: "Cover letter uchun qaysi gap **juda norasmiy**?", opts: ["I would welcome the opportunity to discuss my application.", "I have attached my CV for your consideration.", "I'm dead keen on this job, so give me a shout.", "I am confident that I would be a valuable member of your team."], a: 2, why: "*dead keen, give me a shout* — so'zlashuv uslubi." },
    { k: "choice", q: "Qaysi gap qat'iy, lekin muloyim?", opts: ["Give me my money back now.", "You are terrible at your job.", "I am disappointed that the delivery was late, and I would like a refund.", "I demand an apology, or else."], a: 2, why: "Faktni aytadi va natija so'raydi; ohang muloyim." },
    { k: "choice", q: "Which subject line is the clearest?", opts: ["Hi", "Question", "HELP!!!", "Enquiry about evening English courses"], a: 3, why: "Aniq mavzu: qisqa va mazmunli." },
    { k: "fill", q: "I would be ___ if you could confirm the date by Friday. (g…)", a: ["grateful"], hint: "g…", uz: "Sanani juma kunigacha tasdiqlasangiz, minnatdor bo'lardim.", why: "**would be grateful if you could…**" },
    { k: "fill", q: "The company promised to ___ the goods within five working days. (send out; d…)", a: ["dispatch", "despatch"], hint: "d…", uz: "Kompaniya tovarni besh ish kuni ichida jo'natishga va'da berdi.", why: "**dispatch** = jo'natmoq." },
    { k: "order", uz: "Arizamni intervyuda muhokama qilish imkoniyatidan xursand bo'lardim.", words: ["I", "would", "welcome", "the", "opportunity", "to", "discuss", "my", "application", "at", "an", "interview."], extra: ["welcomes", "discussing"], why: "**welcome the opportunity to + fe'l**." },
    { k: "translate", uz: "Menga qo'shimcha ma'lumot yuborsangiz, minnatdor bo'lardim.", a: ["I would be grateful if you could send me further information.", "I would be grateful if you could send me more information.", "I would appreciate it if you could send me further information.", "I would appreciate it if you could send me more information.", "I would be grateful if you would send me further information.", "I would be grateful if you would send me more information.", "I would be grateful if you could send me additional information.", "I would be grateful if you could send me some further information."], why: "Rasmiy so'rov: **would be grateful / appreciate it if you could**." },
    { k: "fix", wrong: "I am looking forward to hear from you.", a: ["I am looking forward to hearing from you.", "I look forward to hearing from you."], hint: "look forward to + ?", why: "**look forward to + -ing**." },
    { k: "tf", q: "Rasmiy emailda **I'm, don't, can't** kabi qisqartmalar ishlatiladi.", a: false, why: "Rasmiy yozmada qisqartma ishlatilmaydi." },
  ],
  summary: [
    "Rasmiy email: **subject → Dear… → maqsad → tafsilot → so'rov → yakun → imzo**. Ism noma'lum: *Dear Sir or Madam … Yours faithfully*; ism ma'lum: *Dear Mr / Ms … Yours sincerely*.",
    "Maqsad: **I am writing to + fe'l** (*to apply, to complain, to enquire*). So'rov: **I would be grateful if you could…**. Kutish: **I look forward to hearing from you**.",
    "**Cover letter**: 1) lavozim va manba, 2) dalilli tajriba, 3) nega bu kompaniya, 4) intervyu so'rash va minnatdorchilik.",
    "Rasmiy ohang: **qisqartma yo'q**, *however / furthermore / therefore*, dalillar (raqam, natija), qat'iy, lekin qo'pol emas.",
    "Xatolar: ~~I am writing for apply~~ → **to apply**; ~~I will be grateful if you will~~ → **would … could**; ~~look forward to hear~~ → **hearing**.",
  ],
  homework: "Ikki matn yozing: (1) bitta **shikoyat emaili** (150 so'z; kechikkan buyurtma yoki sifatsiz xizmat haqida) va (2) bitta **cover letter** (200 so'z; xayoliy lavozimga). Har birida subject, to'g'ri murojaat va yakun, kamida 5 ta yangi so'z (*reimburse, dissatisfied, prompt, enthusiasm, referee…*) bo'lsin. Yozib bo'lgach, darsdagi tekshirish ro'yxati bo'yicha tekshiring.",
};

export default lesson;
