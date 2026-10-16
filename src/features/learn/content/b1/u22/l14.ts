import type { Lesson } from '../../../types';

// Mini lesson (skill): listening and speaking about technology. Uses phrasal verbs (l6), comparing (l4), certainty (l13), future forms (l2-l3).
const lesson: Lesson = {
  id: 'u22-l14',
  title: 'Listening and speaking: technology in our lives',
  titleUz: 'Tinglash va gapirish: hayotimizdagi texnologiya',
  mini: true,
  kind: 'skill',
  goal: "Texnologiya haqidagi suhbatni **tinglab tushunasiz** (asosiy fikr va tafsilotlar), o'z fikringizni ayta olasiz (*I rely on my phone for almost everything*) va **I'm not sure I agree** deb muloyim e'tiroz bildirasiz.",
  slides: [
    {
      title: 'Tinglang: telefon va biz',
      blocks: [
        { t: 'p', md: "Dialogni tinglang (▶). Avval umumiy fikrni tushuning: **kim telefonni ko'p ishlatadi? Nega? Ular nima qilmoqchi?** Keyin tafsilotlarni toping." },
        { t: 'dialog', lines: [
          { who: 'Nilufar', en: 'Did you see this? My phone says I spent five hours on it yesterday.', uz: "Buni ko'rdingmi? Telefonim kecha unda besh soat o'tkazganimni aytyapti." },
          { who: 'Tom', en: 'Five hours! That is a lot. What were you doing?', uz: "Besh soat! Bu juda ko'p. Nima qilding?" },
          { who: 'Nilufar', en: 'Mostly messages and videos. But I also use it for work, so it is hard to say no to it.', uz: "Asosan xabarlar va videolar. Lekin ishim uchun ham ishlataman, shuning uchun undan voz kechish qiyin." },
          { who: 'Tom', en: 'I know. I used to check mine every ten minutes, so I turned off most notifications.', uz: "Bilaman. Men har o'n daqiqada tekshirardim, shuning uchun ko'p xabarnomalarni o'chirib qo'ydim." },
          { who: 'Nilufar', en: 'Did it help?', uz: "Yordam berdimi?" },
          { who: 'Tom', en: 'Definitely. I sleep better, and I get more done at work. The less I look at the screen, the calmer I feel.', uz: "Albatta. Yaxshiroq uxlayman va ishda ko'proq ish bitiraman. Ekranga qancha kam qarasam, shuncha xotirjam bo'laman." },
          { who: 'Nilufar', en: 'Maybe I should try that. I will probably start tomorrow.', uz: "Balki men ham urinib ko'rarman. Ehtimol ertadan boshlayman." },
        ] },
        { t: 'check', ex: { k: 'choice', q: 'What did Tom do to use his phone less?', opts: ['He turned off most notifications.', 'He sold his phone.', 'He deleted all apps.', 'He bought a new phone.'], a: 0, why: "*I turned off most notifications.*" } },
        { t: 'check', ex: { k: 'listen', say: 'The less I look at the screen, the calmer I feel.', opts: ['The less I look at the screen, the calmer I feel.', 'The more I look at the screen, the calmer I feel.', 'The less I look at the screen, the busier I feel.', 'I look at the screen less than before.'], a: 0, why: "**The less…, the calmer…**" } },
      ],
    },
    {
      title: 'Fikr bildirish iboralari',
      blocks: [
        { t: 'table', head: ['Maqsad', 'Ibora'], speak: [1], rows: [
          ['Fikr aytish', 'In my opinion, technology makes life easier.'],
          ['Fikr aytish', 'I rely on my phone for almost everything.'],
          ['Rozilik', 'I completely agree with you.'],
          ['Qisman rozilik', 'You have a point, but I think it depends.'],
          ['Muloyim e\'tiroz', 'I\'m not sure I agree. Many people find it useful.'],
          ['Aniqlashtirish', 'Sorry, could you say that again, please?'],
        ] },
        { t: 'tip', tone: 'good', md: "Ingliz tilida to'g'ridan-to'g'ri **No, you're wrong** demaslik yaxshi. **I'm not sure I agree** yoki **You have a point, but…** muloyimroq eshitiladi." },
        { t: 'check', ex: { k: 'choice', q: 'You do not fully agree. What do you say?', opts: ["I'm not sure I agree.", "You are wrong.", "That's stupid.", "No."], a: 0, why: "Muloyim e'tiroz: **I'm not sure I agree.**" } },
        { t: 'check', ex: { k: 'fill', q: 'You have a ___, but I still prefer paper books.', a: ['point'], uz: "Haqsiz emassiz, lekin men baribir qog'oz kitoblarni afzal ko'raman.", why: "**You have a point.**" } },
      ],
    },
    {
      title: 'Tinglang: kelajak texnologiyalari',
      blocks: [
        { t: 'p', md: "Endi qisqa monologni tinglang. Tinglayotganda javob bering: **qaysi uchta texnologiya aytilgan?**" },
        { t: 'text', title: 'Technology in ten years', voice: 'emma', en: "In ten years' time, technology will probably have changed our daily life even more. I think we will be using voice assistants at home and at work, and we will definitely be doing much more shopping online. Many people will be working from home at least two days a week. I doubt that robots will have replaced teachers, though. Learning from a real person is still the best way, in my opinion. Of course, it is difficult to be certain about the future, but new devices are likely to make our lives more convenient.", uz: "O'n yildan keyin texnologiya kundalik hayotimizni yana ham o'zgartirgan bo'ladi. O'ylaymanki, biz uyda va ishda ovozli yordamchilardan foydalanamiz va albatta onlayn xaridni ancha ko'proq qilamiz. Ko'p odamlar haftasiga kamida ikki kun uydan ishlaydi. Lekin robotlar o'qituvchilarni almashtirgan bo'ladi deb o'ylamayman. Mening fikrimcha, haqiqiy odamdan o'rganish hali ham eng yaxshi yo'l. Albatta, kelajak haqida aniq aytish qiyin, lekin yangi qurilmalar hayotimizni qulayroq qilishi mumkin." },
        { t: 'check', ex: { k: 'tf', q: 'The speaker thinks robots will replace teachers.', a: false, why: "*I doubt that robots will have replaced teachers.*" } },
        { t: 'check', ex: { k: 'choice', q: 'How many days a week will many people work from home?', opts: ['At least two', 'Every day', 'Never', 'Once a month'], a: 0, why: "*at least two days a week*." } },
      ],
    },
    {
      title: 'Endi siz ayting',
      blocks: [
        { t: 'p', md: "Savollarga ovoz chiqarib javob bering. Har javobda kamida **ikki gap** ayting: fikr + sabab. Namunadan foydalaning." },
        { t: 'table', head: ['Savol', 'Namuna javob'], speak: [0, 1], rows: [
          ['How often do you use your phone for work or study?', 'I use it every day to check messages and learn new words.'],
          ['What device could you not live without?', 'I couldn\'t live without my phone because I use it for almost everything.'],
          ['Will technology be more useful or more dangerous in the future?', 'It will probably be more useful, but we must protect our privacy.'],
        ] },
        { t: 'tip', tone: 'info', md: "Fikrni **sabab** bilan yoqlang: *because…*, *so that…*, *to…*. Javobingizni *I think / in my opinion* bilan boshlang. Avval yozmang, ovoz chiqarib ayting." },
        { t: 'check', ex: { k: 'order', uz: "Men telefonimga deyarli hamma narsa uchun tayanaman.", words: ['I', 'rely', 'on', 'my', 'phone', 'for', 'almost', 'everything.'], extra: ['at', 'to'], why: "**rely on** + ot." } },
      ],
    },
  ],
  words: [
    { en: 'browse', uz: 'internetda ko\'zdan kechirmoq', ipa: 'braʊz', pos: 'verb', ex: 'I often browse the internet before I go to sleep.', exUz: 'Uxlashdan oldin tez-tez internetni ko\'zdan kechiraman.' },
    { en: 'privacy', uz: 'shaxsiy hayot, maxfiylik', ipa: 'ˈprɪv.ə.si', pos: 'noun', ex: 'Online privacy is important.', exUz: "Onlayn maxfiylik muhim." },
    { en: 'addicted', uz: 'qaram, o\'rganib qolgan', ipa: 'əˈdɪk.tɪd', pos: 'adj', ex: 'Many teenagers are addicted to games.', exUz: "Ko'p o'smirlar o'yinlarga qaram." },
    { en: 'stream', uz: 'onlayn tomosha qilmoq yoki tinglamoq', ipa: 'striːm', pos: 'verb', ex: 'We usually stream films at the weekend.', exUz: 'Dam olish kunlari odatda filmlarni onlayn tomosha qilamiz.' },
    { en: 'notification', uz: 'xabarnoma', ipa: 'ˌnəʊ.tɪ.fɪˈkeɪ.ʃən', pos: 'noun', ex: 'I turn off notifications at night.', exUz: "Kechasi xabarnomalarni o'chiraman." },
  ],
  practice: [
    { k: 'match', pairs: [['device', 'qurilma'], ['privacy', 'maxfiylik'], ['addicted', 'qaram'], ['download', 'yuklab olmoq'], ['notification', 'xabarnoma']] },
    { k: 'choice', q: 'I ___ my phone for almost everything.', opts: ['rely on', 'rely', 'rely at', 'depend'], a: 0, why: "**rely on** + ot." },
    { k: 'choice', q: 'Many people are addicted ___ their phones.', opts: ['to', 'of', 'at', 'for'], a: 0, why: "**addicted to**." },
    { k: 'fill', q: 'The ___ I use my phone, the worse I sleep.', a: ['more'], uz: "Telefonni qancha ko'p ishlatsam, shuncha yomon uxlayman.", why: "**The more…, the worse…**" },
    { k: 'fill', q: 'I turned off my notifications ___ I could concentrate.', a: ['so that'], uz: "Diqqatimni jamlay olishim uchun xabarnomalarni o'chirdim.", why: "**so that** + could." },
    { k: 'fill', q: 'I doubt that robots ___ replace good teachers.', a: ['will'], uz: "Robotlar yaxshi o'qituvchilarni almashtiradi deb o'ylamayman.", why: "**I doubt** + darak gap." },
    { k: 'order', uz: "Menimcha, texnologiya hayotni osonlashtiradi.", words: ['In', 'my', 'opinion,', 'technology', 'makes', 'life', 'easier.'], extra: ['more', 'easy'], why: "**In my opinion** + gap." },
    { k: 'order', uz: "Rozi bo'lishimga ishonchim komil emas.", words: ["I'm", 'not', 'sure', 'I', 'agree.'], extra: ['am', 'to'], alt: [['I', 'am', 'not', 'sure', 'I', 'agree.']], why: "Muloyim e'tiroz." },
    { k: 'fix', wrong: 'I am addicted of my phone.', a: ['I am addicted to my phone.', "I'm addicted to my phone."], why: "**addicted to**." },
    { k: 'fix', wrong: 'The more I sleep, the more better I feel.', a: ['The more I sleep, the better I feel.'], hint: 'better — allaqachon qiyosiy daraja', why: "**the better**, **more better** emas." },
    { k: 'dictation', say: 'I turned off most notifications and I sleep better now.', a: ['I turned off most notifications and I sleep better now.', 'I turned off most notifications, and I sleep better now.'], why: "Tinglab yozing." },
    { k: 'speak', say: 'I rely on my phone for almost everything.' },
    { k: 'speak', say: 'Learning from a real person is still the best way.' },
  ],
  quiz: [
    { k: 'listen', say: 'New devices are likely to make our lives more convenient.', opts: ['New devices are likely to make our lives more convenient.', 'New devices are unlikely to make our lives more convenient.', 'Old devices are likely to make our lives easier.', 'New devices will make our lives more expensive.'], a: 0, why: "**likely to**." },
    { k: 'choice', q: 'What does "I have a point" mean? You say: "You have a point."', opts: ['You partly agree.', 'You are angry.', 'You do not understand.', 'You want to leave.'], a: 0, why: "**You have a point** — qisman rozilik." },
    { k: 'fill', q: 'Online banking is very ___. I can pay from my sofa.', a: ['convenient'], uz: "Onlayn bank juda qulay. Divanimdan turib to'lay olaman.", why: "**convenient** — qulay." },
    { k: 'fill', q: 'I turn off ___ at night so that my phone does not wake me up.', a: ['notifications'], uz: "Telefon meni uyg'otmasligi uchun kechasi xabarnomalarni o'chiraman.", why: "Ko'plik: **notifications**." },
    { k: 'fix', wrong: 'The less I use my phone, the more calmer I feel.', a: ['The less I use my phone, the calmer I feel.'], why: "**the calmer**, **more calmer** emas." },
    { k: 'order', uz: "Yangi qurilmalar hayotimizni qulayroq qilishi mumkin.", words: ['New', 'devices', 'are', 'likely', 'to', 'make', 'life', 'more', 'convenient.'], extra: ['unlikely', 'will'], why: "**be likely to**." },
    { k: 'tf', q: "To disagree politely you can say 'I'm not sure I agree.'", a: true, why: "Muloyim e'tiroz." },
    { k: 'translate', uz: "Menimcha, bu juda foydali.", a: ['In my opinion, it is very useful.', "In my opinion, it's very useful.", 'I think it is very useful.', "I think it's very useful."], why: "**In my opinion / I think** + gap." },
  ],
  summary: [
    "Tinglashda avval **asosiy fikrni** (kim, nima haqida), keyin **tafsilotlarni** (raqam, sabab) toping.",
    "Fikr bildirish: **In my opinion…**, **I rely on… for…**; rozilik: **I completely agree**; qisman: **You have a point, but…**",
    "Muloyim e'tiroz: **I'm not sure I agree.** To'g'ridan-to'g'ri *You're wrong* demang.",
    "Gapirganda fikrni **sabab** bilan yoqlang (*because, so that, to*) va **the more…, the better…** ni ishlating.",
  ],
  homework: "Telefoningizdagi ekran vaqtini (screen time) ko'ring va 5 gap bilan ovoz chiqarib ayting: nima ko'p ishlatasiz, nega, va kamaytirmoqchi bo'lsangiz, qanday.",
};

export default lesson;
