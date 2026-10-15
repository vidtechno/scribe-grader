import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u22-l8",
  title: "Unit review: work and technology",
  titleUz: "Bosqich takrori: ish va texnologiya",
  goal: "Bosqichdagi asosiy qoidalarni yangi misollar bilan takrorlaysiz: **gerund / infinitive**, **maqsad iboralari**, **kelasi zamon shakllari**, **Future Continuous / Perfect**, **taqqoslash**, **phrasal verbs** va **rasmiy xat** iboralari. Texnologiya va ish mavzusidagi 10 ta eng foydali so'zni o'rganasiz.",
  slides: [
    {
      title: "Gerund yoki infinitive?",
      blocks: [
        { t: "p", md: "Ba'zi fe'llardan keyin **-ing**, ba'zilaridan keyin **to + fe'l** keladi. Ba'zilarida esa ikkalasi ham bor, lekin **ma'no o'zgaradi**." },
        {
          t: "table", head: ["Qolip", "Fe'llar", "Misol"], speak: [2],
          rows: [
            ["fe'l + -ing", "enjoy, avoid, finish, keep, suggest, mind", "I enjoy learning new software."],
            ["fe'l + to + fe'l", "want, hope, decide, plan, manage, agree, promise", "She decided to change her job."],
            ["predlog + -ing", "interested in, good at, look forward to", "He is good at fixing computers."],
            ["stop + -ing", "to'xtatmoq (harakatni)", "I stopped checking my phone."],
            ["stop + to + fe'l", "to'xtab, boshqa ish qilmoq", "I stopped to check my phone."],
          ],
        },
        { t: "tip", tone: "warn", md: "**remember / try** ham ma'noni o'zgartiradi: *I remembered to lock the door* (qildim, unutmadim). *I remember locking the door* (qilganim esimda). *Try restarting it* (sinab ko'ring, yechim sifatida)." },
        { t: "check", ex: { k: "choice", q: "She avoided ___ the manager about the mistake.", opts: ["to tell", "telling", "tell", "told"], a: 1, why: "**avoid** + -ing." } },
        { t: "check", ex: { k: "choice", q: "We managed ___ the problem before lunch.", opts: ["solving", "to solve", "solve", "solved"], a: 1, why: "**manage** + to + fe'l." } },
      ],
    },
    {
      title: "Maqsad va kelasi zamon",
      blocks: [
        { t: "p", md: "**Maqsad** (nima uchun?) ni to'rt xil aytamiz. **Kelasi zamon** uchun esa har bir shaklning o'z vazifasi bor." },
        {
          t: "table", head: ["Qolip", "Misol"], speak: [1],
          rows: [
            ["to + fe'l", "I use a calendar to plan my week."],
            ["in order to + fe'l", "He works late in order to finish on time."],
            ["so that + gap", "Save the file so that you can open it later."],
            ["for + ot / -ing", "This app is for sending large files."],
          ],
        },
        {
          t: "table", head: ["Shakl", "Qachon", "Misol"], speak: [2],
          rows: [
            ["will", "hozir qaror, bashorat, va'da", "I'll call you back in ten minutes."],
            ["going to", "oldindan reja, belgi asosida bashorat", "We are going to open a new office."],
            ["Present Continuous", "aniq kelishilgan reja", "I'm meeting the client at three."],
            ["Present Simple", "jadval, dastur", "The train leaves at nine."],
          ],
        },
        { t: "check", ex: { k: "choice", q: "Look at those clouds! It ___ rain.", opts: ["will", "is going to", "rains", "is raining"], a: 1, why: "Ko'z oldidagi belgi → **going to**." } },
        { t: "check", ex: { k: "choice", q: "He is learning Excel ___ get a better job.", opts: ["for", "in order to", "so that", "in order"], a: 1, why: "**in order to** + fe'l." } },
      ],
    },
    {
      title: "Future Continuous, Perfect va taqqoslash",
      blocks: [
        {
          t: "table", head: ["Shakl", "Ma'nosi", "Misol"], speak: [2],
          rows: [
            ["will be + -ing", "kelajakda o'sha payt davom etayotgan ish", "This time tomorrow I will be flying to Dubai."],
            ["will have + V3", "o'sha paytgacha tugagan ish (by bilan)", "By June I will have finished my course."],
          ],
        },
        {
          t: "table", head: ["Taqqoslash", "Misol"], speak: [1],
          rows: [
            ["the more… the more", "The more you practise, the better you speak."],
            ["much / far / a lot + comparative", "This laptop is much cheaper than that one."],
            ["a bit / slightly + comparative", "The new model is slightly faster."],
            ["as… as", "My phone is as expensive as yours."],
            ["not as… as", "Working from home is not as tiring as travelling."],
            ["twice as… as", "This screen is twice as big as the old one."],
          ],
        },
        { t: "tip", tone: "info", md: "**Taqqoslash kuchaytirgichi** (*much, far, a lot*) faqat **comparative** bilan keladi: *much better*, *far more expensive*. *Much good* emas." },
        { t: "check", ex: { k: "fill", q: "By next Friday I ___ finished the report.", a: ["will have", "'ll have"], why: "Muddatgacha tugaydi → **will have + V3**." } },
        { t: "check", ex: { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["The more I read, the more I learn.", "The more I read, more I learn.", "More I read, the more I learn.", "The most I read, the most I learn."], a: 0, why: "**the + comparative, the + comparative**." } },
      ],
    },
    {
      title: "Phrasal verbs va rasmiy xat",
      blocks: [
        { t: "p", md: "**Ajraladigan** phrasal verbs'da olmosh o'rtada turadi (*fill it in*). **Ajralmaydigan** va **uch qismli**larda ob'ekt oxirida (*look after them*, *put up with it*)." },
        {
          t: "examples", items: [
            { en: "I'll hand it in tomorrow.", uz: "Uni ertaga topshiraman.", note: "ajraladigan: olmosh o'rtada" },
            { en: "The helpdesk is looking into the problem.", uz: "Yordam xizmati muammoni tekshiryapti.", note: "ajralmaydigan" },
            { en: "Did you back up your photos?", uz: "Suratlaringizning zaxira nusxasini oldingizmi?", note: "ajraladigan" },
            { en: "I am looking forward to starting my new job.", uz: "Yangi ishimni boshlashni intiqlik bilan kutyapman.", note: "uch qismli + -ing" },
          ],
        },
        {
          t: "table", head: ["Rasmiy xat qismi", "Ibora"], speak: [1],
          rows: [
            ["Maqsad", "I am writing to apply for the post."],
            ["So'rov", "I would be grateful if you could send me the details."],
            ["Yakun", "I look forward to hearing from you."],
          ],
        },
        { t: "tip", tone: "warn", md: "Ism noma'lum: *Dear Sir or Madam… Yours faithfully*. Ism ma'lum: *Dear Mr Brown… Yours sincerely*. Rasmiy xatda qisqartmalar yo'q." },
        { t: "check", ex: { k: "fix", wrong: "Please switch off it before you leave.", a: ["Please switch it off before you leave."], hint: "Olmosh qayerda?", why: "Olmosh o'rtada: *switch it off*." } },
        { t: "check", ex: { k: "choice", q: "Dear Sir or Madam, ... ___", opts: ["Yours faithfully,", "Yours sincerely,", "Cheers,", "Bye,"], a: 0, why: "Ism noma'lum → **faithfully**." } },
      ],
    },
    {
      title: "O'qing: ishda yangi dastur",
      blocks: [
        {
          t: "text", title: "A new system at work", voice: "emma",
          en: "Our company is going to install a new software system next month. At the moment we are using three different programs, so the new system should be much easier. By the end of June, everyone will have completed the training. In the meantime, the IT team is working hard to make sure that all our files are safe. They have asked us to back up our documents every Friday. I am a little worried because I am not very good at learning new technology, but my colleague has promised to help me. The more I practise, the more confident I feel. I am looking forward to using it, because it will save us a lot of time.",
          uz: "Kompaniyamiz kelasi oy yangi dastur tizimini o'rnatmoqchi. Hozir biz uchta turli dasturdan foydalanyapmiz, shuning uchun yangi tizim ancha osonroq bo'lishi kerak. Iyun oxirigacha hamma o'qishni tugatgan bo'ladi. Shu orada IT jamoasi barcha fayllarimiz xavfsiz bo'lishi uchun qattiq ishlayapti. Ular bizdan har juma hujjatlarimizning zaxira nusxasini olishni so'rashdi. Yangi texnologiyani o'rganishda unchalik kuchli bo'lmaganim uchun biroz xavotirdaman, lekin hamkasbim yordam berishga va'da berdi. Qancha ko'p mashq qilsam, shuncha o'zimga ishonchim ortadi. Undan foydalanishni intiqlik bilan kutyapman, chunki u bizga ko'p vaqtni tejaydi.",
        },
        { t: "check", ex: { k: "tf", q: "The company already uses the new system.", a: false, why: "Kompaniya uni **kelasi oy o'rnatadi** (*is going to install*)." } },
        { t: "check", ex: { k: "choice", q: "What have the IT team asked the staff to do every Friday?", opts: ["Back up their documents", "Hand in their reports", "Log out of the system", "Buy new laptops"], a: 0, why: "Matnda: *back up our documents every Friday*." } },
      ],
    },
    {
      title: "Dialog: texnik yordam",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Emma", en: "Hello, IT support. How can I help you?", uz: "Salom, IT yordam xizmati. Qanday yordam bera olaman?" },
            { who: "Tom", en: "Hi, I can't log in to my account. I've tried typing my password three times.", uz: "Salom, hisobimga kira olmayapman. Parolni uch marta kiritib ko'rdim." },
            { who: "Emma", en: "Stop trying for a moment, otherwise the system will lock you out. I'll reset your password.", uz: "Bir ozga urinishni to'xtating, aks holda tizim sizni bloklaydi. Parolni tiklab beraman." },
            { who: "Tom", en: "Thank you. I have a presentation at two, so I need to get into the system quickly.", uz: "Rahmat. Soat ikkida taqdimotim bor, shuning uchun tizimga tezroq kirishim kerak." },
            { who: "Emma", en: "Don't worry. By ten past one you will have a new password, and I'll be sitting at my desk all afternoon if you need more help.", uz: "Xavotir olmang. Soat birdan o'n daqiqa o'tganda yangi parolingiz bo'ladi, qo'shimcha yordam kerak bo'lsa, tushdan keyin ish joyimda o'tiraman." },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Tom has a presentation at two.", a: true, why: "Dialogda: *I have a presentation at two*." } },
      ],
    },
  ],
  words: [
    { en: "device", uz: "qurilma", ipa: "dɪˈvaɪs", pos: "noun", ex: "I charge all my devices at night.", exUz: "Barcha qurilmalarimni kechasi zaryadlayman." },
    { en: "software", uz: "dasturiy ta'minot", ipa: "ˈsɒft.weər", pos: "noun", ex: "The software is easy to install.", exUz: "Dastur o'rnatish oson." },
    { en: "update", uz: "yangilamoq; yangilanish", ipa: "ˈʌp.deɪt", pos: "verb", ex: "Please update the app before you start.", exUz: "Boshlashdan oldin ilovani yangilang." },
    { en: "password", uz: "parol", ipa: "ˈpɑːs.wɜːd", pos: "noun", ex: "Choose a password that is hard to guess.", exUz: "Topish qiyin bo'lgan parol tanlang." },
    { en: "access", uz: "kirish huquqi; kirmoq", ipa: "ˈæk.ses", pos: "noun", ex: "Only managers have access to this folder.", exUz: "Bu papkaga faqat menejerlar kira oladi." },
    { en: "skill", uz: "ko'nikma, mahorat", ipa: "skɪl", pos: "noun", ex: "Communication is an important skill at work.", exUz: "Muloqot ishda muhim ko'nikmadir." },
    { en: "remote", uz: "masofaviy", ipa: "rɪˈməʊt", pos: "adj", ex: "Many people prefer remote work.", exUz: "Ko'p odamlar masofaviy ishni afzal ko'radi." },
    { en: "research", uz: "tadqiqot; tadqiq qilmoq", ipa: "rɪˈsɜːtʃ", pos: "noun", ex: "I did some research before I bought the laptop.", exUz: "Noutbuk sotib olishdan oldin biroz ma'lumot o'rgandim." },
    { en: "knowledge", uz: "bilim", ipa: "ˈnɒl.ɪdʒ", pos: "noun", ex: "She has a good knowledge of computers.", exUz: "Uning kompyuterlar bo'yicha yaxshi bilimi bor." },
    { en: "challenge", uz: "qiyin vazifa, sinov", ipa: "ˈtʃæl.ɪndʒ", pos: "noun", ex: "Learning a new language is a big challenge.", exUz: "Yangi til o'rganish katta sinovdir." },
  ],
  practice: [
    { k: "choice", q: "He enjoys ___ with new technology.", opts: ["to work", "working", "work", "worked"], a: 1, why: "**enjoy** + -ing." },
    { k: "choice", q: "I'm tired. I ___ a coffee break now. (stop, to rest)", opts: ["stopped having", "stopped to have", "stop have", "stopping to have"], a: 1, why: "Boshqa ish qilish uchun to'xtadi → **stop to have**." },
    { k: "match", pairs: [["device", "qurilma"], ["password", "parol"], ["remote", "masofaviy"], ["knowledge", "bilim"], ["challenge", "qiyin vazifa"], ["access", "kirish huquqi"]] },
    { k: "fill", q: "We save our files in the cloud ___ that we can open them anywhere.", a: ["so"], uz: "Fayllarni bulutda saqlaymiz, shunda ularni istalgan joyda ochamiz.", why: "**so that** + gap." },
    { k: "fill", q: "Tomorrow at ten I ___ be giving a presentation.", a: ["will", "'ll"], uz: "Ertaga soat o'nda taqdimot qilib turgan bo'laman.", why: "**will be + -ing**." },
    { k: "fill", q: "By 2030 she ___ have worked here for twenty years.", a: ["will", "'ll"], uz: "2030-yilga borib u bu yerda yigirma yil ishlagan bo'ladi.", why: "**will have + V3**." },
    { k: "fill", q: "This printer is far ___ than the old one.", a: ["better", "faster", "cheaper", "quieter", "newer"], uz: "Bu printer eskisidan ancha yaxshi.", why: "**far** + comparative." },
    { k: "fill", q: "I'm meeting my supervisor at four. We ___ the plan.", a: ["are discussing", "'re discussing", "will discuss", "are going to discuss", "'ll discuss"], uz: "Soat to'rtda rahbarim bilan uchrashaman. Rejani muhokama qilamiz.", why: "Reja → Present Continuous yoki going to / will." },
    { k: "order", uz: "Qancha ko'p mashq qilsangiz, shuncha yaxshi gapirasiz.", words: ["The", "more", "you", "practise,", "the", "better", "you", "speak."], extra: ["most", "good"], alt: [["The", "more", "you", "practice,", "the", "better", "you", "speak."]], why: "**the more… the better**." },
    { k: "order", uz: "Iltimos, uni to'ldiring.", words: ["Please", "fill", "it", "in."], extra: ["on"], why: "Olmosh o'rtada." },
    { k: "translate", uz: "Men sizdan javob kutaman.", a: ["I look forward to hearing from you."], why: "**look forward to** + -ing." },
    { k: "translate", uz: "Bu telefon boshqasidek qimmat emas.", a: ["This phone is not as expensive as the other one.", "This phone isn't as expensive as the other one.", "This phone is not as expensive as the other.", "This phone isn't as expensive as the other."], why: "**not as… as**." },
    { k: "fix", wrong: "She suggested to take a taxi.", a: ["She suggested taking a taxi."], hint: "suggest dan keyin", why: "**suggest** + -ing." },
    { k: "fix", wrong: "I'm writing for ask about the job.", a: ["I'm writing to ask about the job.", "I am writing to ask about the job.", "I'm writing to enquire about the job.", "I am writing to enquire about the job."], hint: "Maqsad", why: "Maqsad: **to** + fe'l." },
    { k: "tf", q: "**Dear Sir or Madam** dan keyin **Yours faithfully** yoziladi.", a: true, why: "Ism noma'lum → faithfully." },
    { k: "speak", say: "By the end of the year I will have finished my course.", uz: "Yil oxirigacha kursimni tugatgan bo'laman." },
  ],
  quiz: [
    { k: "choice", q: "I'm looking forward ___ you next week.", opts: ["to seeing", "to see", "seeing", "see"], a: 0, why: "**look forward to** + -ing." },
    { k: "choice", q: "He is saving money ___ buy a new laptop.", opts: ["for", "to", "so that", "that"], a: 1, why: "Maqsad: **to** + fe'l." },
    { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["She turned down it.", "She turned it down.", "She turned it to down.", "She down turned it."], a: 1, why: "Olmosh o'rtada." },
    { k: "choice", q: "This phone is ___ more expensive than mine.", opts: ["very", "far", "most", "so"], a: 1, why: "**far / much** + comparative." },
    { k: "fill", q: "The train ___ at half past nine tomorrow.", a: ["leaves"], uz: "Poyezd ertaga to'qqiz yarimda jo'naydi.", why: "Jadval → Present Simple." },
    { k: "fill", q: "I haven't decided yet, but I ___ probably take the job.", a: ["will", "'ll"], why: "Hozir qaror/ehtimol → **will**." },
    { k: "fill", q: "My colleague promised ___ me with the new system.", a: ["to help"], why: "**promise** + to + fe'l." },
    { k: "order", uz: "Bu ilova rasm yuborish uchun.", words: ["This", "app", "is", "for", "sending", "photos."], extra: ["send", "to"], why: "**for + -ing** — vazifa." },
    { k: "fix", wrong: "The more I read, more I learn.", a: ["The more I read, the more I learn."], hint: "ikkinchi qism", why: "Ikkalasida ham **the**." },
    { k: "listen", say: "By Friday they will have installed the software.", opts: ["By Friday they will have installed the software.", "By Friday they will be installing the software.", "On Friday they installed the software.", "By Friday they have installed the software."], a: 0 },
  ],
  summary: [
    "**-ing**: enjoy, avoid, finish, suggest, predloglardan keyin. **to + fe'l**: want, decide, plan, manage, promise. *stop doing* / *stop to do* ma'nosi farq qiladi.",
    "Maqsad: **to**, **in order to**, **so that + gap**, **for + ot / -ing**. Kelasi zamon: **will**, **going to**, Present Continuous (reja), Present Simple (jadval).",
    "**will be + -ing** (o'sha payt jarayonda), **will have + V3** (o'sha paytgacha tugagan).",
    "Taqqoslash: **the more… the more**, **much / far + comparative**, **as… as**, **not as… as**, **twice as… as**.",
    "Phrasal verbs'da olmosh o'rtada (*fill it in*); ajralmaydiganlarda oxirida (*look after them*). Rasmiy xat: *Yours sincerely / faithfully*, qisqartmasiz.",
  ],
  homework: "Texnologiyadan foydalanishingiz haqida 8 gap yozing: ikkita gerund / infinitive qolipi, bitta maqsad iborasi, bitta *will have*, bitta *the more… the more*, bitta phrasal verb olmosh bilan va yangi 10 so'zdan kamida 4 tasi.",
};

export default lesson;
