import type { Lesson } from '../../../types';

// Mini lesson (situation): discussing privacy and social media with a colleague. Opinion, polite disagreement, reasons/examples, passive in general statements.
const lesson: Lesson = {
  id: 'u26-l10',
  title: 'Talking about privacy and social media',
  titleUz: "Ijtimoiy tarmoq va maxfiylik haqida suhbatlashish: fikr bildirish va rozi bo'lmaslik",
  mini: true,
  kind: 'situation',
  goal: "Hamkasb bilan internetda ma'lumot ulashish haqida suhbatlashasiz: fikringizni aytasiz, muloyim rozi bo'lmaysiz, sabab va misol keltirasiz va umumiy fikrlarda majhul nisbatdan foydalanasiz (*data is collected, accounts are hacked*).",
  slides: [
    {
      title: "Fikr aytish va rozi bo'lmaslik",
      blocks: [
        { t: 'p', md: "Ish joyidagi suhbatda **\"Sen noto'g'rising\"** deyish noqulay. Ingliz tilida avval fikrni tan olasiz, keyin o'z fikringizni aytasiz. Bu sizni ham bilimdon, ham muloyim ko'rsatadi." },
        { t: 'table', head: ['Maqsad', 'Ibora'], speak: [1], rows: [
          ["O'z fikrim", "I'd say that people share too much online."],
          ["Rozi bo'lish", "I couldn't agree more."],
          ["Qisman rozi", "I see your point, but I'm not sure that's always true."],
          ["Muloyim rad etish", "I'm afraid I disagree. In my experience, …"],
          ["Sabab so'rash", "What makes you say that?"],
        ] },
        { t: 'tip', tone: 'warn', md: "**agree** — fe'l, sifat emas: *I agree*, *I don't agree with you*. *I am agree* yoki *I agree to you* — o'zbek tilidan kelgan xatolar. Shaxsga ham, g'oyaga ham **with**: *I agree with you*, *I agree with the idea*." },
        { t: 'check', ex: { k: 'choice', q: "Qaysi variant to'g'ri?", opts: ["I don't agree with you about that.", "I am not agree with you about that.", "I don't agree to you about that.", "I'm not agreeing you about that."], a: 0, why: "**agree with + shaxs**; *am/is/are agree* bo'lmaydi." } },
      ],
    },
    {
      title: "Umumiy fikr: majhul nisbat",
      blocks: [
        { t: 'p', md: "Maxfiylik haqida gapirganda ko'pincha **kim** qilgani muhim emas, **nima** bo'layotgani muhim. Shuning uchun **majhul nisbat** juda tabiiy: *Data is collected*, *Accounts are hacked*." },
        { t: 'examples', items: [
          { en: "Our personal data is collected every time we use an app.", uz: "Ilovadan har foydalanganimizda shaxsiy ma'lumotlarimiz yig'iladi.", note: "**is collected** — kim yig'ishi shart emas." },
          { en: "Thousands of accounts are hacked every year.", uz: "Har yili minglab akkauntlar buziladi (xakerlar tomonidan).", note: "**are hacked** — Present Simple majhul." },
          { en: "Passwords should be encrypted, not stored as plain text.", uz: "Parollar oddiy matn sifatida emas, shifrlangan holda saqlanishi kerak.", note: "Modal: **should be + V3**." },
          { en: "Consent must be given before any data is shared.", uz: "Har qanday ma'lumot ulashilishidan oldin rozilik berilishi kerak." },
        ] },
        { t: 'tip', tone: 'info', md: "**data** ko'pincha birlik kabi ishlatiladi: *The data is stored…* (rasmiy yozuvda ba'zan *are*). **Personal data is collected** — oddiy va to'g'ri." },
        { t: 'check', ex: { k: 'fill', q: "Millions of passwords ___ stolen every year.", a: ['are'], uz: "Har yili millionlab parollar o'g'irlanadi.", why: "Ko'plik ega + Present Simple majhul: **are + V3**." } },
      ],
    },
    {
      title: "Sabab, misol va xatolar",
      blocks: [
        { t: 'p', md: "B2 darajada fikr **sabab** va **misol** bilan qo'llab-quvvatlanadi. Shunda gapingiz tinglovchini ishontiradi." },
        { t: 'table', head: ['Vazifa', 'Qolip', 'Misol'], speak: [2], rows: [
          ['Sabab', 'because / since / the reason is that', "Your digital footprint is permanent, because posts are rarely deleted completely."],
          ['Misol', 'for instance / such as', "For instance, photos from holidays can show when a house is empty."],
          ['Natija', 'as a result / so', "As a result, burglars can plan their visit."],
        ] },
        { t: 'compare',
          good: { title: "To'g'ri", items: ["I agree with you.", "My accounts were hacked last year.", "Why do you think so?"] },
          bad: { title: "Xato", items: ["I am agree with you.", "My accounts hacked last year.", "Why you think so?"] } },
        { t: 'check', ex: { k: 'fix', wrong: "My account hacked two weeks ago.", a: ["My account was hacked two weeks ago.", "My account got hacked two weeks ago."], why: "O'zbek tilida *buzildi* bir so'z, inglizchada **be + V3** (yoki **got + V3**) kerak." } },
        { t: 'check', ex: { k: 'fix', wrong: "Why you think that sharing photos is dangerous?", a: ["Why do you think that sharing photos is dangerous?", "Why do you think sharing photos is dangerous?"], why: "Savol so'zi + **do** + ega + fe'l: *Why do you think…?*" } },
      ],
    },
    {
      title: "O'qing va dialog",
      blocks: [
        { t: 'text', title: 'Think before you post', voice: 'emma', en: "Last month my cousin's online banking account was hacked. She had used the same password for years, and it was probably stolen in a data breach at another company. Since then, I have been much more careful about my digital footprint. I don't post my address or my holiday dates, and I check who can see my photos. Some people say that privacy no longer exists, but I'd say that's too pessimistic. Companies must be told what they can and cannot collect, and users should give clear consent before their information is shared. At the same time, we cannot expect laws to do everything. If we use strong passwords and encrypt sensitive files, many problems can be avoided. In my view, a little caution costs nothing, and it can save a lot of trouble.", uz: "O'tgan oy amakivachchamning internet-bank akkaunti buzildi. U yillar davomida bir xil paroldan foydalangan va u, ehtimol, boshqa kompaniyadagi ma'lumotlar sizib chiqishida o'g'irlangan. O'shandan beri raqamli izimga ancha ehtiyotkor bo'ldim. Manzilimni va ta'til sanalarimni e'lon qilmayman, suratlarimni kim ko'rishini tekshiraman. Ba'zilar maxfiylik endi yo'q deydi, lekin menimcha, bu juda pessimistik. Kompaniyalarga nimani yig'ish mumkinligi va mumkin emasligi aytilishi kerak, foydalanuvchilar esa ma'lumotlari ulashilishidan oldin aniq rozilik berishi kerak. Shu bilan birga, qonunlar hamma narsani qiladi deb kutish mumkin emas. Kuchli parollardan foydalansak va muhim fayllarni shifrlasak, ko'p muammolarning oldini olish mumkin. Menimcha, ozgina ehtiyotkorlik hech narsaga tushmaydi va ko'p tashvishdan qutqaradi." },
        { t: 'check', ex: { k: 'choice', q: "Why was the cousin's account probably hacked?", opts: ["She used the same password for years and it was stolen.", "She posted her address online.", "She did not use online banking.", "A friend shared her photos."], a: 0, why: "*She had used the same password for years, and it was probably stolen in a data breach.*" } },
        { t: 'dialog', lines: [
          { who: 'Dilnoza', en: "Ben, did you see the news? Another million accounts were hacked yesterday.", uz: "Ben, yangilikni ko'rdingmi? Kecha yana million akkaunt buzilibdi." },
          { who: 'Ben', en: "I did. Honestly, I'd say people share far too much online.", uz: "Ko'rdim. Rostini aytsam, odamlar internetda haddan ziyod ko'p narsa ulashadi, deb o'ylayman." },
          { who: 'Dilnoza', en: "I see your point, but I'm not sure it's always the users' fault. Data is collected whether we like it or not.", uz: "Fikringni tushunaman, lekin bu doim foydalanuvchilarning aybi ekaniga ishonchim komil emas. Ma'lumotlar xohlasak ham, xohlamasak ham yig'iladi." },
          { who: 'Ben', en: "Fair enough. But we do give our consent when we tick the box, don't we?", uz: "To'g'ri. Lekin katakchani belgilasak, rozilik beramiz-ku, shunday emasmi?" },
          { who: 'Dilnoza', en: "Technically, yes. In practice, nobody reads those long terms. What makes you say it's our own fault?", uz: "Texnik jihatdan ha. Amalda esa hech kim o'sha uzun shartlarni o'qimaydi. Nega bu bizning o'zimizning aybimiz deb o'ylaysan?" },
          { who: 'Ben', en: "For instance, a lot of people use one password everywhere. As a result, one breach is enough to lose everything.", uz: "Masalan, ko'plar hamma joyda bitta paroldan foydalanadi. Natijada bitta sizib chiqish hamma narsani yo'qotish uchun yetarli." },
          { who: 'Dilnoza', en: "That's true, I couldn't agree more on that point.", uz: "To'g'ri, bu jihatga mutlaqo qo'shilaman." },
        ] },
        { t: 'check', ex: { k: 'tf', q: "Dilnoza completely disagrees with Ben at the end of the dialogue.", a: false, why: "Oxirida u: *I couldn't agree more on that point.*" } },
      ],
    },
  ],
  words: [
    { en: 'hack', uz: "buzib kirmoq (kompyuter, akkaunt)", ipa: 'hæk', pos: 'verb', ex: 'Her email account was hacked while she was abroad.', exUz: "U chet elda bo'lganida elektron pochta akkaunti buzildi." },
    { en: 'data breach', uz: "ma'lumotlarning sizib chiqishi", ipa: 'ˈdeɪ.tə briːtʃ', pos: 'noun', ex: 'The company apologised after a data breach affected millions of users.', exUz: "Ma'lumotlar sizib chiqishi millionlab foydalanuvchiga ta'sir qilgach, kompaniya uzr so'radi." },
    { en: 'consent', uz: "rozilik", ipa: 'kənˈsent', pos: 'noun', ex: 'You must give your consent before the app can use your location.', exUz: "Ilova joylashuvingizdan foydalanishidan oldin rozilik berishingiz kerak." },
    { en: 'digital footprint', uz: "raqamli iz (internetdagi izlaringiz)", ipa: 'ˌdɪdʒ.ɪ.təl ˈfʊt.prɪnt', pos: 'noun', ex: 'Employers sometimes check your digital footprint before an interview.', exUz: "Ish beruvchilar ba'zan intervyudan oldin raqamli izingizni tekshiradi." },
    { en: 'encrypt', uz: "shifrlamoq", ipa: 'ɪnˈkrɪpt', pos: 'verb', ex: 'Messages are encrypted so that nobody else can read them.', exUz: "Xabarlar boshqa hech kim o'qiy olmasligi uchun shifrlanadi." },
    { en: 'disclose', uz: "oshkor qilmoq, ma'lum qilmoq", ipa: 'dɪsˈkləʊz', pos: 'verb', ex: 'The firm refused to disclose how the information was lost.', exUz: "Firma ma'lumot qanday yo'qolganini oshkor qilishdan bosh tortdi." },
  ],
  practice: [
    { k: 'match', pairs: [['hack', "buzib kirmoq"], ['consent', 'rozilik'], ['encrypt', 'shifrlamoq'], ['disclose', "oshkor qilmoq"], ['data breach', "ma'lumotlar sizib chiqishi"]] },
    { k: 'choice', q: "Millions of users' details ___ in the breach.", opts: ['were exposed', 'exposed', 'have exposing', 'was expose'], a: 0, why: "Majhul o'tgan zamon, ko'plik: **were exposed**." },
    { k: 'fill', q: "I'm afraid I don't agree ___ you on that point.", a: ['with'], uz: "Afsuski, bu masalada siz bilan kelisha olmayman.", why: "**agree with + shaxs**." },
    { k: 'fix', wrong: "I am agree that people share too much.", a: ["I agree that people share too much."], why: "**agree** — fe'l, *am* kerak emas." },
    { k: 'listen', say: "I see your point, but I'm not sure that's always true.", opts: ["I see your point, but I'm not sure that's always true.", "I see your point, and I'm sure that's always true.", "I saw your point, but I'm not sure that's always true.", "I see your point, but I'm not sure that was always true."], a: 0 },
    { k: 'order', uz: "Parollar shifrlangan holda saqlanishi kerak.", words: ['Passwords', 'should', 'be', 'encrypted.'], extra: ['encrypt', 'are'], why: "Modal majhul: **should be + V3**." },
    { k: 'choice', q: "Which sentence gives a reason, not an example?", opts: ["Your footprint is permanent because posts are rarely deleted completely.", "For instance, holiday photos can show an empty house.", "Such as passwords and bank details.", "A good example is a hacked email account."], a: 0, why: "Birinchi gap **sabab** (*because*); qolganlari **misol** keltiradi." },
    { k: 'translate', uz: "Har yili minglab akkauntlar buziladi.", a: ["Thousands of accounts are hacked every year.", "Thousands of accounts get hacked every year.", "Every year thousands of accounts are hacked.", "Every year, thousands of accounts are hacked."], why: "Umumiy fikr: **are hacked**." },
    { k: 'tf', q: "*My account was hacked last week.* — Gapda akkaunt buzilgani aytilmoqda, kim buzgani emas.", a: true, why: "Majhul nisbat bajaruvchiga e'tiborni qaratmaydi." },
    { k: 'dictation', say: "What makes you say that?", a: ["What makes you say that?"], uz: "Nega bunday deysiz?" },
    { k: 'fix', wrong: "Why you think consent is not enough?", a: ["Why do you think consent is not enough?", "Why do you think consent isn't enough?"], why: "Savol so'zidan keyin **do you**." },
    { k: 'fill', q: "Your digital ___ shows where you have been and what you like.", a: ['footprint'], hint: "raqamli ...", why: "**digital footprint** — internetdagi izlaringiz." },
    { k: 'choice', q: "Hamkasbingiz: *Social media is harmless.* Siz qisman rozisiz. Qaysi javob mos?", opts: ["I see your point, but it isn't harmless for everyone.", "You are completely stupid.", "I am agree, totally.", "Maybe no, I not sure."], a: 0, why: "**I see your point, but…** — qisman rozilik, muloyim rad." },
    { k: 'speak', say: "I couldn't agree more, but I'd like to add one thing.", uz: "Mutlaqo qo'shilaman, lekin bir narsa qo'shmoqchiman." },
  ],
  quiz: [
    { k: 'choice', q: "Personal data ___ every time we accept cookies.", opts: ['is collected', 'collects', 'is collecting', 'are collect'], a: 0, why: "Majhul Present Simple, *data* birlik: **is collected**." },
    { k: 'choice', q: "Qaysi gap to'g'ri?", opts: ["I don't agree with him.", "I don't agree to him.", "I am not agree with him.", "I don't agreeing with him."], a: 0, why: "**agree with** shaxs bilan." },
    { k: 'fill', q: "Users must give their ___ before their data is shared.", a: ['consent'], uz: "Foydalanuvchilar ma'lumotlari ulashilishidan oldin rozilik berishlari kerak.", why: "**consent** — rozilik." },
    { k: 'fix', wrong: "Thousands of accounts hacked every year.", a: ["Thousands of accounts are hacked every year."], why: "Majhul nisbat: **are + V3**." },
    { k: 'order', uz: "Menimcha, odamlar internetda juda ko'p narsa ulashadi.", words: ["I'd", 'say', 'that', 'people', 'share', 'too', 'much', 'online.'], extra: ['am', 'sharing'], alt: [['I', 'would', 'say', 'that', 'people', 'share', 'too', 'much', 'online.'], ["I'd", 'say', 'people', 'share', 'too', 'much', 'online.']], why: "**I'd say that…** — fikr bildirish." },
    { k: 'tf', q: "*I couldn't agree more* — gapiruvchi mutlaqo rozi.", a: true, why: "Bu ibora kuchli rozilikni bildiradi." },
    { k: 'listen', say: "Messages are encrypted so that nobody else can read them.", opts: ["Messages are encrypted so that nobody else can read them.", "Messages are encrypting so that nobody else can read them.", "Messages were encrypted so that nobody else could read them.", "Messages are expected so that nobody else can read them."], a: 0 },
    { k: 'translate', uz: "Fikringizni tushunaman, lekin men rozi emasman.", a: ["I see your point, but I disagree.", "I see your point, but I don't agree.", "I understand your point, but I disagree.", "I understand your point, but I don't agree."], why: "**I see your point, but I disagree.**" },
  ],
  summary: [
    "Fikr: **I'd say that…**, rozilik: **I couldn't agree more**, muloyim rad: **I see your point, but…**",
    "**agree** — fe'l: *I agree with you*. *I am agree* xato.",
    "Umumiy gaplarda majhul nisbat: **data is collected, accounts are hacked, passwords should be encrypted**.",
    "Fikrni sabab (**because, so**) va misol (**for instance**) bilan qo'llab-quvvatlang.",
    "Yangi so'zlar: **hack, data breach, consent, digital footprint, encrypt, disclose**.",
  ],
  homework: "Ijtimoiy tarmoq xavfsizligi haqida 5 ta gap yozing: 2 tasi majhul nisbatda (*Data is collected…*), 1 tasi fikr (*I'd say…*), 1 tasi muloyim rad (*I see your point, but…*), 1 tasi misol (*For instance…*). Keyin do'stingiz bilan shu mavzuda 2 daqiqa suhbatlashing.",
};

export default lesson;
