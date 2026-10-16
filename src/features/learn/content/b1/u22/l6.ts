import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u22-l6",
  title: "Phrasal verbs",
  titleUz: "Phrasal verbs: ajraladigan va ajralmaydigan",
  goal: "Ish, o'qish va texnologiyada eng ko'p ishlatiladigan **phrasal verbs** (*set up, fill in, hand in, back up, look into*) ni bilasiz, ularni **ajraladigan** va **ajralmaydigan** turlarga ajratasiz va olmoshni to'g'ri joyga qo'yasiz: *fill it in*, lekin *look after it*.",
  slides: [
    {
      title: "Phrasal verb nima?",
      blocks: [
        { t: "p", md: "**Phrasal verb** — fe'l + kichik so'z (**particle**: *up, off, in, out, on, down*). Birgalikda ular **yangi ma'no** beradi, ko'pincha fe'lning o'z ma'nosidan butunlay boshqacha." },
        {
          t: "examples", items: [
            { en: "Please fill in this form.", uz: "Iltimos, bu anketani to'ldiring.", note: "fill = to'ldirmoq, **fill in** = anketani to'ldirmoq" },
            { en: "I need to back up my files.", uz: "Fayllarimning zaxira nusxasini olishim kerak.", note: "**back up** = zaxira nusxa olmoq" },
            { en: "The printer has broken down again.", uz: "Printer yana buzildi.", note: "**break down** = buzilmoq (ob'ekt kerak emas)" },
            { en: "We are looking forward to the new project.", uz: "Yangi loyihani intiqlik bilan kutyapmiz.", note: "**look forward to** = intiqlik bilan kutmoq" },
          ],
        },
        { t: "tip", tone: "info", md: "Phrasal verbs'ni **butun birikma** sifatida yodlang, alohida so'z sifatida emas. Ular kundalik gapirishda juda ko'p ishlatiladi; rasmiy yozuvda esa ko'pincha bitta so'z bilan almashtiriladi (keyingi darslarda ko'rasiz)." },
        { t: "check", ex: { k: "choice", q: "Which phrasal verb means *to make a copy of your files in case of a problem*?", opts: ["back up", "break down", "put off", "look after"], a: 0, why: "**back up** — zaxira nusxa olmoq." } },
      ],
    },
    {
      title: "To'rt tur",
      blocks: [
        { t: "p", md: "Phrasal verbs gapda to'rt xil ishlaydi. Turini bilsangiz, so'zlarni qayerga qo'yishni bilasiz." },
        {
          t: "table", head: ["Tur", "Qoida", "Misol"], speak: [2],
          rows: [
            ["Ob'ektsiz", "Keyin hech narsa kerak emas", "The system broke down."],
            ["Ajraladigan", "Ot ikki joyda tura oladi, olmosh faqat o'rtada", "Fill in the form. Fill the form in. Fill it in."],
            ["Ajralmaydigan", "Ob'ekt doim particle dan keyin", "She looks after her grandmother."],
            ["Uch qismli", "Fe'l + particle + predlog, ob'ekt oxirida", "I put up with the noise."],
          ],
        },
        { t: "check", ex: { k: "choice", q: "Which sentence has a phrasal verb **without** an object?", opts: ["My laptop broke down.", "Please fill in the form.", "She looks after her brother.", "I put up with the noise."], a: 0, why: "**broke down** — keyin ob'ekt yo'q." } },
      ],
    },
    {
      title: "Ajraladigan phrasal verbs",
      blocks: [
        { t: "p", md: "Bu turdagi fe'llarda **ot** (the form, the report) fe'l va particle **orasiga** ham, **keyiniga** ham qo'yilishi mumkin. Lekin **olmosh** (*it, them, me, him*) faqat **o'rtada** turadi." },
        {
          t: "table", head: ["Fe'l", "Ma'nosi", "Ot bilan", "Olmosh bilan"], speak: [2, 3],
          rows: [
            ["fill in", "to'ldirmoq (anketa)", "Fill in the form.", "Fill it in."],
            ["hand in", "topshirmoq (ish, hisobot)", "Hand in your report.", "Hand it in."],
            ["set up", "o'rnatmoq, ochmoq", "Set up an account.", "Set it up."],
            ["back up", "zaxira nusxa olmoq", "Back up your files.", "Back them up."],
            ["put off", "kechiktirmoq", "Put off the meeting.", "Put it off."],
            ["turn down", "rad etmoq", "Turn down the offer.", "Turn it down."],
            ["look up", "qidirib topmoq (lug'atda)", "Look up the word.", "Look it up."],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["Please back them up.", "I handed it in yesterday.", "She turned the job down.", "Can you set it up for me?"] },
          bad: { title: "Xato", items: ["Please back up them.", "I handed in it yesterday.", "She turned down it.", "Can you set up it for me?"] },
        },
        { t: "tip", tone: "warn", md: "Uzun ibora bo'lsa, odatda particle dan **keyin** qo'yamiz: *Please fill in all the forms on your desk* (tabiiyroq). Olmosh bo'lsa **doim o'rtada**: *fill them in*." },
        { t: "check", ex: { k: "order", uz: "Iltimos, uni to'ldiring.", words: ["Please", "fill", "it", "in."], extra: ["up"], why: "Olmosh fe'l va particle o'rtasida." } },
        { t: "check", ex: { k: "fix", wrong: "I put off it until Monday.", a: ["I put it off until Monday."], hint: "Olmosh qayerda turadi?", why: "Ajraladigan fe'lda olmosh o'rtada: *put it off*." } },
      ],
    },
    {
      title: "Ajralmaydigan va uch qismli",
      blocks: [
        { t: "p", md: "Bu fe'llarda ob'ekt **doim oxirida** turadi, hatto olmosh bo'lsa ham. Ularni **bo'lib bo'lmaydi**." },
        {
          t: "table", head: ["Fe'l", "Ma'nosi", "Misol"], speak: [2],
          rows: [
            ["look after", "qarab turmoq, g'amxo'rlik qilmoq", "She looks after her little brother."],
            ["look into", "tekshirmoq, o'rganib chiqmoq", "We are looking into the problem."],
            ["come across", "tasodifan uchratmoq", "I came across an old photo."],
            ["run into", "to'satdan uchrashmoq", "I ran into my teacher yesterday."],
            ["get over", "tuzalmoq, yengib o'tmoq", "He is getting over a cold."],
            ["look forward to", "intiqlik bilan kutmoq", "I'm looking forward to the weekend."],
            ["put up with", "chidamoq", "I can't put up with this noise."],
            ["come up with", "o'ylab topmoq", "She came up with a great idea."],
            ["catch up with", "yetib olmoq", "I must catch up with the others."],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I'm looking after them.", "We are looking into it.", "She came up with it."] },
          bad: { title: "Xato", items: ["I'm looking them after.", "We are looking it into.", "She came it up with."] },
        },
        { t: "tip", tone: "warn", md: "**look forward to** da **to** — predlog, shuning uchun undan keyin **-ing** keladi: *I'm looking forward to meeting you.* (*to meet* emas)." },
        { t: "check", ex: { k: "choice", q: "I'm looking forward to ___ you.", opts: ["see", "seeing", "saw", "to see"], a: 1, why: "**look forward to** + -ing (bu yerda to — predlog)." } },
        { t: "check", ex: { k: "fix", wrong: "He looks them after every afternoon.", a: ["He looks after them every afternoon."], hint: "Ajralmaydigan fe'l", why: "**look after** ni bo'lib bo'lmaydi." } },
      ],
    },
    {
      title: "Ish va texnologiyada",
      blocks: [
        { t: "p", md: "Quyidagi phrasal verbs'ni ofisda, universitetda va telefonda tez-tez eshitasiz. Ob'ektsizlari (**log in, sign up, drop out, carry on**) ham ko'p." },
        {
          t: "examples", items: [
            { en: "I signed up for an online course last week.", uz: "O'tgan hafta onlayn kursga yozildim.", note: "**sign up for** — yozilmoq" },
            { en: "You have to log in with your password.", uz: "Parolingiz bilan tizimga kirishingiz kerak.", note: "**log in** — tizimga kirmoq; aksi **log out**" },
            { en: "She dropped out of university after one year.", uz: "U bir yildan keyin universitetni tashlab ketdi.", note: "**drop out of** — o'qishni tashlamoq" },
            { en: "The meeting was put off until Thursday.", uz: "Yig'ilish payshanbaga qoldirildi.", note: "**put off** — kechiktirmoq" },
            { en: "Please carry on working. I'll be back in ten minutes.", uz: "Ishlashda davom eting. O'n daqiqada qaytaman.", note: "**carry on** + -ing — davom etmoq" },
          ],
        },
        { t: "check", ex: { k: "choice", q: "She didn't finish her studies. She ___ of university.", opts: ["dropped out", "set up", "backed up", "came across"], a: 0, why: "**drop out of** — o'qishni tashlab ketmoq." } },
      ],
    },
    {
      title: "O'qing: yangi ish, birinchi kun",
      blocks: [
        {
          t: "text", title: "A first day at work",
          en: "On her first day at a new company, Madina had to set up her work email. She also filled in a long form and handed it in to the manager. Later her computer broke down, so she asked a colleague called Ben for help. \"Always back up your files,\" he told her, \"and never put off important jobs.\" He looked into the problem and fixed it in ten minutes. By the end of the day Madina was tired, but she was looking forward to the second day.",
          uz: "Yangi kompaniyadagi birinchi kuni Madina ish elektron pochtasini sozlashi kerak edi. U uzun anketani ham to'ldirdi va menejerga topshirdi. Keyinroq kompyuteri buzildi, shuning uchun u hamkasbi Bendan yordam so'radi. «Fayllaringizning zaxira nusxasini doim oling, muhim ishlarni esa hech qachon kechiktirmang», dedi u. U muammoni tekshirdi va o'n daqiqada tuzatdi. Kun oxirida Madina charchagan edi, lekin ikkinchi kunni intiqlik bilan kutardi.",
        },
        { t: "check", ex: { k: "tf", q: "Madina handed in the form to Ben.", a: false, why: "U anketani **menejerga** topshirdi. Ben unga kompyuter bilan yordam berdi." } },
      ],
    },
    {
      title: "Dialog: kompyuter buzildi",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Nilufar", en: "Karim, you look worried. What's wrong?", uz: "Karim, xavotirli ko'rinasan. Nima bo'ldi?" },
            { who: "Karim", en: "My laptop has broken down and I haven't backed up my files.", uz: "Noutbukim buzildi, fayllarimning zaxira nusxasini esa olmaganman." },
            { who: "Nilufar", en: "Don't panic. Turn it off, wait a minute and then turn it on again.", uz: "Vahimaga tushma. O'chir, bir daqiqa kut, keyin yana yoq." },
            { who: "Karim", en: "I've already tried that. I'm going to take it to the repair shop.", uz: "Buni allaqachon sinab ko'rdim. Ta'mirlash ustaxonasiga olib boraman." },
            { who: "Nilufar", en: "Good idea. Ask them to look into the problem and tell you the price first.", uz: "Yaxshi fikr. Muammoni tekshirishlarini va avval narxini aytishlarini so'ra." },
            { who: "Karim", en: "I will. I can't put it off any longer, because I have to hand in my project on Friday.", uz: "Shunday qilaman. Buni boshqa kechiktira olmayman, chunki jumada loyihamni topshirishim kerak." },
            { who: "Nilufar", en: "If you run out of time, call me. I'll help you catch up.", uz: "Vaqt yetmasa, menga qo'ng'iroq qil. Yetib olishingga yordam beraman." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "When does Karim have to hand in his project?", opts: ["On Friday", "Tomorrow", "Next month", "This evening"], a: 0, why: "Dialogda: *hand in my project on Friday*." } },
      ],
    },
  ],
  words: [
    { en: "set up", uz: "o'rnatmoq, sozlamoq, ochmoq", ipa: "set ʌp", pos: "phrasal verb", ex: "I need to set up a new email account.", exUz: "Yangi elektron pochta hisobini ochishim kerak." },
    { en: "hand in", uz: "topshirmoq (ish, hujjat)", ipa: "hænd ɪn", pos: "phrasal verb", ex: "Please hand in your essays on Monday.", exUz: "Iltimos, inshoyingizni dushanba kuni topshiring." },
    { en: "figure out", uz: "tushunib yetmoq, yechimini topmoq", ipa: "ˈfɪɡ.ər aʊt", pos: "phrasal verb", ex: "I can't figure out how this machine works.", exUz: "Bu mashina qanday ishlashini tushunolmayapman." },
    { en: "back up", uz: "zaxira nusxasini olmoq", ipa: "bæk ʌp", pos: "phrasal verb", ex: "Back up your photos before you update the phone.", exUz: "Telefonni yangilashdan oldin suratlaringizning zaxira nusxasini oling." },
    { en: "sign up", uz: "ro'yxatdan o'tmoq, yozilmoq", ipa: "saɪn ʌp", pos: "phrasal verb", ex: "I signed up for a cooking class.", exUz: "Pazandalik kursiga yozildim." },
    { en: "look into", uz: "tekshirib ko'rmoq", ipa: "lʊk ˈɪn.tuː", pos: "phrasal verb", ex: "The manager will look into your complaint.", exUz: "Menejer shikoyatingizni tekshirib ko'radi." },
    { en: "put off", uz: "kechiktirmoq, qoldirmoq", ipa: "pʊt ɒf", pos: "phrasal verb", ex: "Don't put off your homework until tomorrow.", exUz: "Uy vazifangni ertaga qoldirma." },
    { en: "come up with", uz: "o'ylab topmoq", ipa: "kʌm ʌp wɪð", pos: "phrasal verb", ex: "We need to come up with a better plan.", exUz: "Yaxshiroq reja o'ylab topishimiz kerak." },
    { en: "drop out", uz: "o'qishni tashlamoq", ipa: "drɒp aʊt", pos: "phrasal verb", ex: "Many students drop out in the first year.", exUz: "Ko'p talabalar birinchi yilda o'qishni tashlaydi." },
    { en: "carry out", uz: "o'tkazmoq, bajarmoq", ipa: "ˈkær.i aʊt", pos: "phrasal verb", ex: "Scientists carried out a survey last month.", exUz: "Olimlar o'tgan oy so'rovnoma o'tkazishdi." },
  ],
  practice: [
    { k: "choice", q: "Please ___ this form before you leave.", opts: ["fill in", "look after", "get over", "run into"], a: 0, why: "Anketa **fill in** qilinadi." },
    { k: "choice", q: "The team needs to ___ a new idea for the advert.", opts: ["come up with", "put up", "drop out", "turn off"], a: 0, why: "G'oya o'ylab topish → **come up with**." },
    { k: "match", pairs: [["set up", "o'rnatmoq, ochmoq"], ["hand in", "topshirmoq"], ["back up", "zaxira nusxa olmoq"], ["put off", "kechiktirmoq"], ["drop out", "o'qishni tashlamoq"], ["look into", "tekshirib ko'rmoq"]] },
    { k: "fill", q: "I forgot to ___ up my files, and now they are gone.", a: ["back"], uz: "Fayllarimning zaxira nusxasini olishni unutdim, endi ular yo'q.", why: "**back up** — zaxira nusxa." },
    { k: "fill", q: "She is ___ for a new job after the summer.", a: ["looking"], uz: "U yozdan keyin yangi ish qidirmoqda.", hint: "look for", why: "**look for** — qidirmoq (A2 dan ma'lum)." },
    { k: "fill", q: "We are looking forward ___ our holiday.", a: ["to"], uz: "Ta'tilimizni intiqlik bilan kutyapmiz.", why: "**look forward to**." },
    { k: "fill", q: "Where is the report? — I handed ___ in this morning.", a: ["it"], uz: "Hisobot qani? — Uni bugun ertalab topshirdim.", why: "Olmosh (it) fe'l va particle o'rtasida: *handed it in*." },
    { k: "order", uz: "Iltimos, ularning zaxira nusxasini oling.", words: ["Please", "back", "them", "up."], extra: ["on", "off"], why: "Olmosh o'rtada: *back them up*." },
    { k: "order", uz: "Men bu shovqinga chidamayman.", words: ["I", "can't", "put", "up", "with", "this", "noise."], extra: ["off", "on"], alt: [["I", "cannot", "put", "up", "with", "this", "noise."]], why: "**put up with** — uch qismli, bo'linmaydi." },
    { k: "translate", uz: "U hamma narsani kechiktiradi.", a: ["She puts everything off.", "He puts everything off.", "She puts off everything.", "He puts off everything."], why: "**put off** — kechiktirmoq." },
    { k: "translate", uz: "Men kursga yozildim.", a: ["I signed up for the course.", "I signed up for a course.", "I have signed up for the course.", "I've signed up for the course.", "I've signed up for a course.", "I have signed up for a course."], why: "**sign up for** — yozilmoq." },
    { k: "fix", wrong: "Please turn off it.", a: ["Please turn it off."], hint: "Olmosh qayerda turadi?", why: "Olmosh o'rtada: *turn it off*." },
    { k: "fix", wrong: "She looks them after on Sundays.", a: ["She looks after them on Sundays."], hint: "Ajralmaydigan fe'l", why: "**look after** bo'linmaydi." },
    { k: "fix", wrong: "I'm looking forward to see you.", a: ["I'm looking forward to seeing you.", "I am looking forward to seeing you."], hint: "to — predlog", why: "**look forward to** + -ing." },
    { k: "tf", q: "*I came across an old photo* — bu gapda **come across** «tasodifan topdim» degani.", a: true, why: "**come across** — tasodifan uchratmoq." },
    { k: "speak", say: "I will hand in the form tomorrow.", uz: "Anketani ertaga topshiraman." },
  ],
  quiz: [
    { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["Fill in it, please.", "Fill it in, please.", "Fill in, it please.", "Fill it, in please."], a: 1, why: "Olmosh o'rtada." },
    { k: "choice", q: "The meeting was ___ until next week because the manager was ill.", opts: ["put off", "set up", "looked after", "handed in"], a: 0, why: "Kechiktirildi → **put off**." },
    { k: "choice", q: "Qaysi fe'l ajralmaydi?", opts: ["back up", "fill in", "look after", "put off"], a: 2, why: "**look after** bo'linmaydi: *look after them*." },
    { k: "fill", q: "I'm going to ___ up for the evening class.", a: ["sign"], why: "**sign up for** — yozilmoq." },
    { k: "fill", q: "Our IT department will ___ into the problem today.", a: ["look"], why: "**look into** — tekshirmoq." },
    { k: "fill", q: "She has to ___ in her essay by Friday.", a: ["hand"], why: "**hand in** — topshirmoq." },
    { k: "order", uz: "Biz yaxshi reja o'ylab topdik.", words: ["We", "came", "up", "with", "a", "good", "plan."], extra: ["on", "off"], why: "**come up with**." },
    { k: "fix", wrong: "Can you set up it for me?", a: ["Can you set it up for me?"], hint: "Olmosh", why: "Olmosh o'rtada: *set it up*." },
    { k: "tf", q: "**Log in** ga ob'ekt shart emas: *You have to log in.*", a: true, why: "Ob'ektsiz phrasal verb." },
    { k: "translate", uz: "Biz yangi hamkasb qidiryapmiz.", a: ["We are looking for a new colleague.", "We're looking for a new colleague."], why: "**look for** — qidirmoq." },
  ],
  summary: [
    "**Phrasal verb** = fe'l + particle, ma'nosi yangi: *back up, fill in, look into*. Butun birikmani yodlang.",
    "**Ajraladigan** (*fill in, hand in, set up, back up, put off, turn down*): ot ikki joyda tura oladi, **olmosh faqat o'rtada**: *fill it in*.",
    "**Ajralmaydigan** (*look after, look into, come across, get over*): ob'ekt doim oxirida: *look after them*.",
    "**Uch qismli** (*look forward to, put up with, come up with, catch up with*) bo'linmaydi; *look forward to* dan keyin **-ing**.",
    "Ob'ektsiz phrasal verbs: *log in, sign up, drop out, break down, carry on*.",
  ],
  homework: "Bu darsdan 6 ta phrasal verb tanlang va har biri bilan o'z hayotingizdan gap yozing (*I need to back up my phone. I signed up for…*). Ikkita gapda olmosh ishlating (*I handed it in…*).",
};

export default lesson;
