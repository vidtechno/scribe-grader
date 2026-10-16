import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u22-l5",
  title: "Work, careers and education",
  titleUz: "Ish, kasb va ta'lim: lug'at va birikmalar",
  goal: "**job, work, career** so'zlarini farqlaysiz, ish va o'qishga oid tayyor birikmalarni (*meet a deadline, sit an exam, apply for a job*) to'g'ri fe'l bilan aytasiz, **work as / for / at** kabi predloglarni adashtirmaysiz va o'z kasbiy yo'lingiz haqida gapira olasiz.",
  slides: [
    {
      title: "Job, work yoki career?",
      blocks: [
        { t: "p", md: "O'zbek tilida hammasi «ish». Inglizchada esa bir nechta so'z bor va ularning ma'nosi, ayniqsa **sanaladimi yoki yo'qmi**, har xil. Bu eng ko'p uchraydigan xatolardan biri." },
        {
          t: "table", head: ["So'z", "Ma'nosi", "Sanaladimi?", "Misol"], speak: [3],
          rows: [
            ["job", "aniq ish joyi, lavozim", "ha (a job, two jobs)", "She has a new job in a bank."],
            ["work", "mehnat, bajariladigan ish", "yo'q (work, not works)", "I have a lot of work today."],
            ["career", "uzoq yillik kasbiy yo'l", "ha (a career)", "He wants a career in medicine."],
            ["profession", "maxsus o'qish talab qiladigan kasb", "ha", "Teaching is a difficult profession."],
          ],
        },
        { t: "tip", tone: "warn", md: "**work** — sanalmaydigan ot: *a work, works, many works* demaymiz. «Menda ko'p ish bor» = *I have a lot of work.* «Menda yangi ish bor» = *I have a new job.*" },
        { t: "check", ex: { k: "choice", q: "She has a lot of ___ to do before Friday.", opts: ["works", "work", "a work", "jobs work"], a: 1, why: "**work** sanalmaydi: *a lot of work*." } },
        { t: "check", ex: { k: "choice", q: "Anvar is looking for a new ___ in a hotel.", opts: ["job", "work of", "works", "much work"], a: 0, why: "Aniq ish joyi, sanaladi: *a new job*." } },
      ],
    },
    {
      title: "Bir oila: employ",
      blocks: [
        { t: "p", md: "Bitta o'zakdan bir nechta so'z yasaladi. Bu lug'atni tez kengaytiradi. **-er** ishni beruvchi, **-ee** ishni oluvchi odamni bildiradi." },
        {
          t: "table", head: ["So'z", "Ma'nosi", "Misol"], speak: [2],
          rows: [
            ["employ", "ishga olmoq", "The factory employs three hundred people."],
            ["employer", "ish beruvchi", "My employer is a small software company."],
            ["employee", "xodim", "Every employee gets a free lunch."],
            ["employment", "ish bilan bandlik", "She found employment in a hospital."],
            ["unemployed", "ishsiz", "He has been unemployed for six months."],
          ],
        },
        { t: "tip", tone: "info", md: "Xuddi shunday: *train → trainer / trainee*, *interview → interviewer / interviewee*. **-ee** — ishni qabul qiluvchi (o'qitiluvchi, intervyu beruvchi)." },
        { t: "check", ex: { k: "fill", q: "The factory ___ more than two hundred workers.", a: ["employs"], uz: "Zavodda ikki yuzdan ortiq ishchi ishlaydi (zavod ularni ish bilan ta'minlaydi).", why: "Birlikdagi ega (the factory) + Present Simple: **employs**." } },
      ],
    },
    {
      title: "Ishga oid birikmalar",
      blocks: [
        { t: "p", md: "Ingliz tilida ko'p so'zlar faqat **ma'lum fe'l bilan** birga keladi. Ularni birga yodlang, o'zbekchadan so'zma-so'z tarjima qilmang." },
        {
          t: "examples", items: [
            { en: "I'm going to apply for a job at the airport.", uz: "Aeroportdagi ishga ariza topshirmoqchiman.", note: "**apply for** a job / a course" },
            { en: "She always meets her deadlines.", uz: "U doim muddatga ulguradi.", note: "**meet** a deadline; aksi: **miss** a deadline" },
            { en: "He earns a good salary and a good living.", uz: "U yaxshi maosh topadi va yaxshi yashaydi.", note: "**earn** a salary / money / a living" },
            { en: "I want to gain more experience before I change jobs.", uz: "Ishni almashtirishdan oldin ko'proq tajriba orttirmoqchiman.", note: "**gain** experience" },
            { en: "My sister works part-time and my brother works full-time.", uz: "Opam yarim kunlik, akam to'liq kunlik ishlaydi.", note: "**part-time** / **full-time**" },
            { en: "After three years she got a promotion.", uz: "Uch yildan keyin u lavozimga ko'tarildi.", note: "**get** a promotion" },
          ],
        },
        { t: "check", ex: { k: "choice", q: "I always ___ my deadlines, so my manager trusts me.", opts: ["meet", "hold", "take", "do"], a: 0, why: "**meet a deadline** — qat'iy birikma." } },
        { t: "check", ex: { k: "choice", q: "He wants to ___ experience in a big company.", opts: ["gain", "earn", "win", "apply"], a: 0, why: "Tajriba **gain** qilinadi. *Earn* — pul, *win* — musobaqa." } },
      ],
    },
    {
      title: "O'qishga oid birikmalar",
      blocks: [
        { t: "p", md: "O'qish haqida gapirganda ham tayyor fe'llar bor. Britaniya inglizchasida ayniqsa **sit an exam**, **revise for an exam** va **do a degree** keng tarqalgan." },
        {
          t: "table", head: ["Birikma", "Ma'nosi", "Misol"], speak: [2],
          rows: [
            ["take / sit an exam", "imtihon topshirmoq", "I sat my last exam on Friday."],
            ["pass / fail an exam", "imtihondan o'tmoq / yiqilmoq", "She passed the exam with a high mark."],
            ["revise for an exam", "imtihonga tayyorlanmoq (takrorlamoq)", "I'm revising for my English test."],
            ["submit an essay", "insho / topshiriqni topshirmoq", "We must submit the essay by Monday."],
            ["attend a lecture", "ma'ruzaga qatnashmoq", "He attends lectures every morning."],
            ["do a degree", "diplom uchun o'qimoq", "She is doing a degree in law."],
            ["graduate from university", "universitetni tugatmoq", "Dilshod graduated from university in 2021."],
          ],
        },
        { t: "tip", tone: "warn", md: "«Imtihon topshirdim» ni *I gave an exam* deb aytmang. To'g'risi: **I took / sat an exam.** *pass* — o'tdim, *fail* — yiqildim. Britaniya inglizchasida *revise* — takrorlamoq, tuzatmoq emas." },
        { t: "check", ex: { k: "choice", q: "Qaysi gap tabiiy? (Men kecha imtihon topshirdim.)", opts: ["I gave an exam yesterday.", "I made an exam yesterday.", "I took an exam yesterday.", "I put an exam yesterday."], a: 2, why: "Imtihon **take** yoki **sit** qilinadi." } },
      ],
    },
    {
      title: "Predloglar: as, for, at, in, of",
      blocks: [
        { t: "p", md: "Ish haqida gapirganda predlog ma'noni o'zgartiradi. O'zbek tilida predlog yo'q, shuning uchun bu yerda xato ko'p bo'ladi." },
        {
          t: "table", head: ["Qolip", "Ma'nosi", "Misol"], speak: [2],
          rows: [
            ["work as", "kasb, lavozim", "She works as a nurse."],
            ["work for", "kompaniya, ish beruvchi", "He works for a Korean company."],
            ["work at", "aniq joy", "I work at the airport."],
            ["work in", "soha yoki xona", "My father works in construction."],
            ["be in charge of", "mas'ul bo'lmoq (boshqarmoq)", "She is in charge of the sales team."],
            ["be responsible for", "uchun javob bermoq", "I'm responsible for the budget."],
            ["be good at", "biror narsada kuchli", "He is good at solving problems."],
            ["graduate from", "tugatmoq", "She graduated from a London university."],
          ],
        },
        { t: "tip", tone: "warn", md: "**as** kasbni bildiradi, **like** esa «kabi, o'xshash» degani. *I work like a teacher* — «o'qituvchiga o'xshab ishlayman» (aslida o'qituvchi emassiz). Kasb uchun doim **as**." },
        { t: "check", ex: { k: "fill", q: "She works ___ a nurse in a children's hospital.", a: ["as"], why: "Kasb → **work as**." } },
        { t: "check", ex: { k: "fill", q: "He is in charge ___ the whole project.", a: ["of"], why: "**in charge of** — mas'ul." } },
      ],
    },
    {
      title: "O'qing: Dilshodning yo'li",
      blocks: [
        {
          t: "text", title: "Dilshod's career",
          en: "Dilshod graduated from a technical university two years ago. During his degree he did a three-month internship in a large factory, and that gave him useful experience. In the end the manager offered him a full-time job. Now he works as a junior engineer. He is in charge of a small team and he often has to meet tight deadlines. His workload is heavy, but his colleagues are friendly. His salary is not very high yet, but he hopes to get a promotion next year. In the evenings he is taking an online course, because he wants a better qualification and a long career in the company.",
          uz: "Dilshod ikki yil oldin texnik universitetni tugatdi. O'qish davomida u katta zavodda uch oylik amaliyotni o'tadi va bu unga foydali tajriba berdi. Oxirida menejer unga to'liq kunlik ish taklif qildi. Hozir u kichik muhandis bo'lib ishlaydi. U kichik jamoaga mas'ul va tez-tez qisqa muddatlarga ulgurishi kerak. Ish yuki og'ir, lekin hamkasblari mehribon. Maoshi hali unchalik baland emas, lekin u kelasi yil lavozimga ko'tarilishga umid qiladi. Kechqurunlari u onlayn kursda o'qiyapti, chunki u yaxshiroq malaka va kompaniyada uzoq kasbiy yo'lni xohlaydi.",
        },
        { t: "check", ex: { k: "tf", q: "Dilshod works as a senior manager now.", a: false, why: "U **junior engineer** (kichik muhandis) bo'lib ishlaydi." } },
        { t: "check", ex: { k: "choice", q: "Why is Dilshod taking an online course?", opts: ["He wants a better qualification.", "He has lost his job.", "He wants to leave the company.", "He failed his exam."], a: 0, why: "Matnda: *he wants a better qualification and a long career*." } },
      ],
    },
    {
      title: "Dialog: ishlash va o'qish",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Sara", en: "Hi Jack, are you still working at the café?", uz: "Salom Jack, hali ham kafeda ishlayapsanmi?" },
            { who: "Jack", en: "Yes, but only part-time. I'm doing a degree in business, so I can't work full-time.", uz: "Ha, lekin faqat yarim kunlik. Men biznes bo'yicha diplom uchun o'qiyapman, shuning uchun to'liq ishlay olmayman." },
            { who: "Sara", en: "How do you manage your workload?", uz: "Ish yukini qanday uddalayapsan?" },
            { who: "Jack", en: "It isn't easy. Last week I had to submit an essay and I also had two shifts on the same day.", uz: "Oson emas. O'tgan hafta insho topshirishim kerak edi va bir kunda ikkita smenam ham bor edi." },
            { who: "Sara", en: "Did you meet the deadline?", uz: "Muddatga ulgurdingmi?" },
            { who: "Jack", en: "Yes, but I only slept four hours. Next term I'm going to ask my manager for fewer shifts.", uz: "Ha, lekin atigi to'rt soat uxladim. Kelasi semestrda menejerimdan smenalarni kamaytirishni so'rayman." },
            { who: "Sara", en: "Have you thought about an internship next summer? It would be good for your career.", uz: "Kelasi yozda amaliyot haqida o'yladingmi? Bu kasbiy yo'ling uchun yaxshi bo'ladi." },
            { who: "Jack", en: "Good idea. I'll look for one this month.", uz: "Yaxshi fikr. Shu oy qidiraman." },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Jack works full-time at the café.", a: false, why: "U *only part-time* ishlaydi, chunki o'qiyapti." } },
      ],
    },
  ],
  words: [
    { en: 'supervisor', uz: "bevosita rahbar, nazoratchi", ipa: 'ˈsuː.pə.vaɪ.zə', pos: 'noun', ex: "My supervisor checks my work every Friday.", exUz: "Rahbarim ishimni har juma tekshiradi." },
    { en: "employee", uz: "xodim, ishchi", ipa: "ɪmˈplɔɪ.iː", pos: "noun", ex: "The company has about two hundred employees.", exUz: "Kompaniyada taxminan ikki yuz xodim bor." },
    { en: "promotion", uz: "lavozimga ko'tarilish", ipa: "prəˈməʊ.ʃən", pos: "noun", ex: "He worked hard and got a promotion.", exUz: "U qattiq ishladi va lavozimga ko'tarildi." },
    { en: "wage", uz: "ish haqi (soatbay yoki haftalik)", ipa: "weɪdʒ", pos: "noun", ex: "The minimum wage went up this year.", exUz: "Eng kam ish haqi bu yil oshdi." },
    { en: "training", uz: "o'qitish, kasbiy tayyorgarlik", ipa: "ˈtreɪ.nɪŋ", pos: "noun", ex: "All new staff receive two weeks of training.", exUz: "Barcha yangi xodimlar ikki haftalik tayyorgarlikdan o'tadi." },
    { en: "internship", uz: "amaliyot", ipa: "ˈɪn.tɜːn.ʃɪp", pos: "noun", ex: "She did an internship at a TV company.", exUz: "U televideniye kompaniyasida amaliyot o'tadi." },
    { en: "freelance", uz: "frilanser; frilanser sifatida", ipa: "ˈfriː.lɑːns", pos: "adj", ex: "She works as a freelance designer.", exUz: "U frilanser dizayner bo'lib ishlaydi." },
    { en: "scholarship", uz: "stipendiya (grant)", ipa: "ˈskɒl.ə.ʃɪp", pos: "noun", ex: "He won a scholarship to study in London.", exUz: "U Londonda o'qish uchun stipendiya yutib oldi." },
    { en: "workload", uz: "ish yuki", ipa: "ˈwɜːk.ləʊd", pos: "noun", ex: "My workload is much heavier in December.", exUz: "Dekabrda ish yukim ancha og'irroq." },
    { en: "resign", uz: "ishdan o'z xohishi bilan ketmoq", ipa: "rɪˈzaɪn", pos: "verb", ex: "He resigned because he wanted a different job.", exUz: "U boshqa ish xohlagani uchun ishdan ketdi." },
  ],
  practice: [
    { k: "choice", q: "I can't go out tonight. I have too much ___.", opts: ["works", "work", "a work", "jobs"], a: 1, why: "**work** sanalmaydi: *too much work*." },
    { k: "choice", q: "Ish beradigan odam yoki kompaniya inglizchada qanday?", opts: ["employee", "employer", "employment", "unemployed"], a: 1, why: "**employer** — ish beruvchi; **employee** — xodim." },
    { k: "match", pairs: [["career", "kasbiy yo'l"], ["salary", "oylik maosh"], ["deadline", "so'nggi muddat"], ["colleague", "hamkasb"], ["internship", "amaliyot"], ["promotion", "lavozimga ko'tarilish"]] },
    { k: "fill", q: "The company ___ more than two hundred people.", a: ["employs"], uz: "Kompaniyada ikki yuzdan ortiq odam ishlaydi.", why: "Birlik ega + Present Simple: **employs**." },
    { k: "fill", q: "She wants to ___ for a job at the airport.", a: ["apply"], uz: "U aeroportdagi ishga ariza bermoqchi.", why: "**apply for** a job." },
    { k: "fill", q: "I work ___ a driver for a taxi company.", a: ["as"], uz: "Men taksi kompaniyasida haydovchi bo'lib ishlayman.", why: "Kasb → **work as**." },
    { k: "fill", q: "He is responsible ___ the whole budget.", a: ["for"], uz: "U butun byudjet uchun javob beradi.", why: "**responsible for**." },
    { k: "order", uz: "Men muddatga ulgurish uchun qattiq ishlayapman.", words: ["I", "am", "working", "hard", "to", "meet", "the", "deadline."], extra: ["do", "for"], alt: [["I'm", "working", "hard", "to", "meet", "the", "deadline."]], why: "**meet the deadline**." },
    { k: "order", uz: "U o'tgan yili universitetni tugatdi.", words: ["She", "graduated", "from", "university", "last", "year."], extra: ["at"], alt: [["Last", "year", "she", "graduated", "from", "university."]], why: "**graduate from**." },
    { k: "translate", uz: "U yarim kunlik ishlaydi.", a: ["She works part-time.", "He works part-time."], why: "**work part-time**." },
    { k: "translate", uz: "Men kecha imtihon topshirdim.", a: ["I took an exam yesterday.", "I sat an exam yesterday.", "I had an exam yesterday.", "Yesterday I took an exam.", "Yesterday I sat an exam."], why: "Imtihon **take / sit** qilinadi." },
    { k: "fix", wrong: "I gave an exam yesterday.", a: ["I took an exam yesterday.", "I sat an exam yesterday."], hint: "Imtihon topshirmoq", why: "*give an exam* — imtihon qabul qilish. Topshirish: **take / sit**." },
    { k: "fix", wrong: "She has a very good works in a bank.", a: ["She has a very good job in a bank."], hint: "Aniq ish joyi", why: "Aniq ish joyi → **a job**; *work* sanalmaydi." },
    { k: "tf", q: "**Career** — bu ma'lum bir paytdagi aniq ish joyi.", a: false, why: "**Career** — uzoq yillik kasbiy yo'l; aniq ish joyi — *job*." },
    { k: "listen", say: "I am applying for a job at a big hospital.", opts: ["I am applying for a job at a big hospital.", "I am applying for a course at a big hospital.", "I am looking for a job at a big hospital.", "I am applying for a job at a big school."], a: 0 },
    { k: "speak", say: "I work as a teacher and I enjoy my job.", uz: "Men o'qituvchi bo'lib ishlayman va ishimdan zavqlanaman." },
  ],
  quiz: [
    { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["I have a lot of works today.", "I have a lot of work today.", "I have lot of a work today.", "I have many work today."], a: 1, why: "**work** sanalmaydi." },
    { k: "choice", q: "She studied hard and ___ the exam with a high mark.", opts: ["passed", "gave", "entered", "made"], a: 0, why: "Imtihondan o'tish → **pass**." },
    { k: "choice", q: "After two years in the company, Tom got a ___ and now he manages the team.", opts: ["promotion", "qualification", "internship", "deadline"], a: 0, why: "Lavozimga ko'tarilish → **promotion**." },
    { k: "fill", q: "I'm not very good ___ working under pressure.", a: ["at"], why: "**good at**." },
    { k: "fill", q: "She works ___ a software developer.", a: ["as"], why: "Kasb → **work as**." },
    { k: "fill", q: "People who have no job are ___.", a: ["unemployed"], why: "Ishsiz → **unemployed**." },
    { k: "order", uz: "Sardor yarim kunlik ish topmoqchi.", words: ["Sardor", "wants", "to", "find", "a", "part-time", "job."], extra: ["finding", "work"], why: "**want to** + fe'l; **a job** sanaladi." },
    { k: "translate", uz: "Mening ish yukim juda og'ir.", a: ["My workload is very heavy.", "My workload is heavy.", "I have a very heavy workload.", "I have a heavy workload."], why: "**workload** — ish yuki." },
    { k: "tf", q: "An **internship** is a short period of work experience.", a: true, why: "**Internship** — qisqa amaliyot davri." },
    { k: "listen", say: "He resigned because he wanted a new career.", opts: ["He resigned because he wanted a new career.", "He retired because he wanted a new career.", "He resigned because he wanted a new salary.", "He was promoted because he wanted a new career."], a: 0 },
  ],
  summary: [
    "**job** — aniq ish joyi (sanaladi); **work** — mehnat (sanalmaydi: *a lot of work*); **career** — uzoq kasbiy yo'l.",
    "**employ → employer, employee, employment, unemployed**: bitta o'zakdan bir oila.",
    "Tayyor birikmalar: *meet a deadline, earn a salary, gain experience, apply for a job, get a promotion, sit / take an exam, pass / fail, submit an essay*.",
    "Predloglar: **work as** (kasb), **work for** (kompaniya), **work at** (joy), **in charge of**, **responsible for**, **good at**, **graduate from**.",
    "Xato: ~~I gave an exam~~, ~~many works~~, ~~I work like a teacher~~. To'g'risi: *I took an exam, a lot of work, I work as a teacher.*",
  ],
  homework: "O'z ishingiz yoki o'qishingiz haqida 6 ta gap yozing: kim uchun ishlaysiz (*work for / as*), ish yukingiz, muddatlaringiz (*meet a deadline*) va kelajakdagi kasbiy rejangiz (*I'd like to get a promotion / gain experience*).",
};

export default lesson;
