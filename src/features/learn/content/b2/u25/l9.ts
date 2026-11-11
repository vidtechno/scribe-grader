import type { Lesson } from '../../../types';

// Mini lesson (situation): advising a friend on a big decision. Uses second and mixed conditionals (l1) in a supportive, natural way.
const lesson: Lesson = {
  id: 'u25-l9',
  title: 'Giving advice on a difficult decision',
  titleUz: 'Qiyin qaror haqida maslahat berish',
  mini: true,
  kind: 'situation',
  goal: "Do'stingiz qiyin qaror oldida turganda (masalan, chet eldagi ish taklifi) **muloyim va qo'llab-quvvatlovchi maslahat** berasiz: *If I were you, I'd…*, *Have you thought about…?*, *You might want to…*, va **shart gaplar** bilan oqibatlarni tasavvur qildirasiz.",
  slides: [
    {
      title: "Maslahat: qattiq yoki yumshoq?",
      blocks: [
        { t: 'p', md: "Do'stingizga ish taklifi keldi: **chet elga ketish** yoki **shu yerda qolish**? U sizdan maslahat so'raydi. Yaxshi maslahatchi **buyruq bermaydi**: variantlarni ko'rsatadi, xavotirni tinglaydi va qarorni do'stiga qoldiradi. Buning uchun inglizchada maxsus iboralar bor:" },
        { t: 'table', head: ['Ohang', 'Ibora', 'Eslatma'], speak: [1], rows: [
          ['Yumshoq', "You might want to talk to your family first.", "**might want to** — juda muloyim taklif"],
          ['Savol bilan', "Have you thought about asking for a trial period?", "**Have you thought about + -ing?** — fikr berib, bosim qilmaydi"],
          ['Shaxsiy fikr', "If I were you, I'd take the offer.", "**If I were you, I'd + fe'l** — eng ko'p ishlatiladi"],
          ['Ehtiyot', "I'd think twice before selling my flat.", "**think twice** — ikki marta o'ylab ko'rish"],
          ['Kuchli', "You really should speak to the manager.", "**should** — aniq maslahat, lekin buyruq emas"],
        ] },
        { t: 'tip', tone: 'info', md: "**If I were you** da **were** hamma shaxs uchun ishlatiladi (rasmiy uslubda). Kundalik gapda *If I was you* ham eshitiladi, lekin yozuvda va imtihonda **were** ni ishlating." },
        { t: 'check', ex: { k: 'choice', q: "Qaysi gap eng yumshoq va muloyim maslahat?", opts: ["You might want to sleep on it.", "You must sleep on it.", "Sleep on it now!", "You have to sleep on it."], a: 0, why: "**might want to** — bosimsiz taklif. *must / have to / buyruq* qattiq eshitiladi." } },
        { t: 'check', ex: { k: 'fill', q: "If I ___ you, I'd ask for more time.", a: ['were'], uz: "Sizning o'rningizda bo'lsam, ko'proq vaqt so'rardim.", why: "Tasavvur: **If I were you, I'd + fe'l**." } },
      ],
    },
    {
      title: "Oqibatlarni tasavvur qildirish",
      blocks: [
        { t: 'p', md: "Yaxshi maslahat faqat *nima qil* demaydi, **nima bo'lishi mumkinligini** ham ko'rsatadi. Buning uchun l1 dagi shart gaplar kerak:" },
        { t: 'examples', items: [
          { en: "If you took the job, you'd gain a lot of experience.", uz: "Ishni olsangiz, ko'p tajriba orttirardingiz.", note: "**Second conditional**: kelajakdagi tasavvur." },
          { en: "If you stayed, you might feel safe but a little bored.", uz: "Qolsangiz, o'zingizni xavfsiz, lekin biroz zerikkan his qilishingiz mumkin.", note: "**might** — ehtimoliy oqibat." },
          { en: "If you hadn't learnt German, you wouldn't have this offer now.", uz: "Nemis tilini o'rganmaganingizda, hozir bu taklif bo'lmasdi.", note: "**Mixed**: o'tgan sabab, hozirgi natija." },
          { en: "If you turned it down, would you regret it in ten years?", uz: "Rad etsangiz, o'n yildan keyin afsuslanarmidingiz?", note: "Savol bilan qarorni do'stiga qaytarish." },
        ] },
        { t: 'tip', tone: 'good', md: "**Qo'llab-quvvatlash:** avval his-tuyg'uni tan oling (*That's a tough choice.*), keyin variantlarni aytib bering, oxirida qarorni do'stingizga qoldiring (*In the end, it's your decision.*)." },
        { t: 'check', ex: { k: 'choice', q: "If you hadn't saved so much last year, you ___ afford the move now.", opts: ["couldn't", "couldn't have", "wouldn't have", "can't"], a: 0, why: "O'tgan sabab (*hadn't saved*) + hozirgi natija → **would / could + fe'l**: *couldn't afford*." } },
        { t: 'check', ex: { k: 'tf', q: "*If I were you, I'd take the job* — gapiruvchi do'stiga buyruq berayapti.", a: false, why: "Bu **shaxsiy fikr**: o'zini do'stining o'rniga qo'yadi. Qaror do'stiniki bo'lib qoladi." } },
      ],
    },
    {
      title: "Tipik xatolar (o'zbek tilidan interferensiya)",
      blocks: [
        { t: 'compare',
          good: { title: "To'g'ri", items: ["If I were you, I'd accept.", "You should think twice.", "I'd advise you to wait.", "Have you thought about moving?"] },
          bad: { title: "Xato", items: ["If I would be you, I would accept.", "You should to think twice.", "I advise you wait.", "Have you thought about to move?"] } },
        { t: 'p', md: "O'zbek tilida *agar men sening o'rningda bo'lsam, qabul qilardim* deyiladi. Inglizchada **if** dan keyin **would** qo'yilmaydi. Modal fe'ldan keyin **to** kerak emas, *advise* dan keyin esa **to** kerak." },
        { t: 'check', ex: { k: 'fix', wrong: "If I would be you, I would ask for a week.", a: ["If I were you, I would ask for a week.", "If I were you, I'd ask for a week."], why: "**if** qismida **would** yo'q: **If I were you**." } },
        { t: 'check', ex: { k: 'fix', wrong: "You should to talk to your manager.", a: ["You should talk to your manager."], why: "Modal fe'ldan keyin **to** qo'yilmaydi." } },
        { t: 'check', ex: { k: 'fix', wrong: "I advise you accept the offer.", a: ["I advise you to accept the offer.", "I'd advise you to accept the offer."], why: "**advise + kim + to + fe'l**." } },
      ],
    },
    {
      title: "Dialog va o'qish",
      blocks: [
        { t: 'dialog', lines: [
          { who: 'Karim', en: "Nina, I've been offered a job in Hamburg. I can't decide whether to go.", uz: "Nina, menga Gamburgda ish taklif qilishdi. Borish-bormaslikni hal qila olmayapman." },
          { who: 'Nina', en: "Wow, congratulations! That sounds like a tough choice, though. What worries you most?", uz: "Voy, tabriklayman! Lekin qiyin tanlov. Seni nima ko'proq xavotirga solyapti?" },
          { who: 'Karim', en: "Leaving my family. And I'm afraid the job might be a gamble.", uz: "Oilamni tashlab ketish. Va bu ish tavakkal bo'lib chiqishidan qo'rqaman." },
          { who: 'Nina', en: "Have you thought about asking for a six-month contract first? You might want to see how it feels before you sell anything.", uz: "Avval olti oylik shartnoma so'rash haqida o'ylab ko'rdingmi? Biror narsani sotishdan oldin qanday bo'lishini ko'rishni xohlashing mumkin." },
          { who: 'Karim', en: "That's a good idea. But what if I regret staying?", uz: "Yaxshi fikr. Lekin qolsam, afsuslansam-chi?" },
          { who: 'Nina', en: "If I were you, I'd list the pros and cons. If you stayed, you'd have stability, but you might always wonder what could have happened.", uz: "Sening o'rningda bo'lsam, afzallik va kamchiliklarni yozib chiqardim. Qolsang, barqarorlik bo'ladi, lekin nima bo'lishi mumkin edi deb doim o'ylab yurishing mumkin." },
          { who: 'Karim', en: "You're right. I'd think twice before refusing a chance like this.", uz: "To'g'ri aytasan. Bunday imkoniyatni rad etishdan oldin ikki marta o'ylab ko'rardim." },
          { who: 'Nina', en: "In the end, it's your decision, and I'll support you either way.", uz: "Oxir-oqibat, qaror seniki, men har qanday holatda seni qo'llab-quvvatlayman." },
        ] },
        { t: 'check', ex: { k: 'choice', q: "What does Nina suggest first?", opts: ["Asking for a six-month contract", "Selling his flat", "Refusing the offer", "Moving to Hamburg at once"], a: 0, why: "*Have you thought about asking for a six-month contract first?*" } },
        { t: 'text', title: 'A decision I almost rushed', voice: 'emma', en: "Last year I was offered a manager's post in another city. My first reaction was to say yes immediately, because I was thrilled. My brother, who is a very calm person, told me to sleep on it. He said I might want to visit the city first and talk to my future team. At first I felt irritated, but later I was grateful. When I visited, I realised the office was far from any good schools, which mattered to me. In the end I accepted the job, but only after negotiating a better location. If I had rushed into the decision, I would be unhappy now. Good advice does not tell you what to do; it helps you to think more clearly.", uz: "O'tgan yili menga boshqa shaharda menejer lavozimi taklif qilindi. Birinchi reaksiyam darhol rozi bo'lish edi, chunki juda xursand edim. Akam, juda xotirjam odam, o'ylab ko'rishimni aytdi. U avval shaharni borib ko'rishim va bo'lajak jamoa bilan gaplashishim mumkinligini aytdi. Avval jahlim chiqdi, keyin esa minnatdor bo'ldim. Borganimda ofis yaxshi maktablardan uzoqda ekanini angladim, bu men uchun muhim edi. Oxir-oqibat taklifni qabul qildim, lekin avval yaxshiroq joylashuvni kelishib oldim. Qarorga shoshilganimda edi, hozir baxtsiz bo'lardim. Yaxshi maslahat nima qilishni aytmaydi; u aniqroq o'ylashga yordam beradi." },
        { t: 'check', ex: { k: 'tf', q: "The speaker accepted the job without any changes.", a: false, why: "*only after negotiating a better location* — joylashuvni kelishib oldi." } },
      ],
    },
  ],
  words: [
    { en: 'sleep on it', uz: "bir kecha o'ylab ko'rmoq (qarorni keyinga qoldirib)", ipa: 'sliːp ɒn ɪt', pos: 'idiom', ex: "It's a big decision, so I'll sleep on it and tell you tomorrow.", exUz: "Bu katta qaror, shuning uchun bir kecha o'ylab ko'rib, ertaga aytaman." },
    { en: 'think it over', uz: "puxta o'ylab ko'rmoq", ipa: 'θɪŋk ɪt ˈəʊvə', pos: 'phrasal verb', ex: 'Take a few days to think it over before you sign.', exUz: "Imzo qo'yishdan oldin bir necha kun puxta o'ylab ko'ring." },
    { en: 'leap of faith', uz: "ishonib qilingan tavakkal", ipa: 'liːp əv feɪθ', pos: 'phrase', ex: 'Starting a business in a new country is a leap of faith.', exUz: "Yangi mamlakatda biznes boshlash ishonib qilinadigan tavakkaldir." },
    { en: 'risky', uz: "xavfli, tavakkal talab qiladigan", ipa: 'ˈrɪski', pos: 'adj', ex: 'Leaving a stable job is risky, but it can pay off.', exUz: "Barqaror ishni tashlash xavfli, lekin o'zini oqlashi mumkin." },
    { en: 'stability', uz: "barqarorlik", ipa: 'stəˈbɪləti', pos: 'noun', ex: 'Many people value stability more than a high salary.', exUz: "Ko'pchilik barqarorlikni yuqori maoshdan ko'proq qadrlaydi." },
    { en: 'rush into', uz: "shoshilib qaror qilmoq", ipa: 'rʌʃ ˈɪntuː', pos: 'phrasal verb', ex: "Don't rush into buying a flat before you compare prices.", exUz: "Narxlarni solishtirmay turib, kvartira sotib olishga shoshilmang." },
  ],
  practice: [
    { k: 'match', pairs: [['sleep on it', "bir kecha o'ylab ko'rmoq"], ['think it over', "puxta o'ylab ko'rmoq"], ['stability', 'barqarorlik'], ['risky', 'xavfli'], ['rush into', 'shoshilib qaror qilmoq']] },
    { k: 'choice', q: "Do'stingiz juda charchagan va qaror qila olmayapti. Qaysi javob eng qo'llab-quvvatlovchi?", opts: ["That sounds tough. Have you thought about sleeping on it?", "Just decide. It's easy.", "You always make bad decisions.", "I don't care what you do."], a: 0, why: "Avval his-tuyg'uni tan olish, keyin yumshoq taklif: **That sounds tough… Have you thought about…?**" },
    { k: 'fill', q: "If I ___ you, I'd talk to the manager before deciding.", a: ['were'], uz: "Sizning o'rningizda bo'lsam, qaror qilishdan oldin menejer bilan gaplashardim.", why: "**If I were you**." },
    { k: 'fill', q: "Have you thought about ___ for a longer contract?", a: ['asking'], hint: 'ask + -ing', uz: "Uzoqroq shartnoma so'rash haqida o'ylab ko'rdingizmi?", why: "**think about + -ing**." },
    { k: 'listen', say: "I'd think twice before leaving a stable job.", opts: ["I'd think twice before leaving a stable job.", "I'd think twice before getting a stable job.", "I think twice before leaving a stable job.", "I'd think twice after leaving a stable job."], a: 0 },
    { k: 'order', uz: "Sening o'rningda bo'lsam, avval ko'rib kelardim.", words: ['If', 'I', 'were', 'you,', "I'd", 'visit', 'it', 'first.'], extra: ['would', 'was'], alt: [['If', 'I', 'were', 'you,', 'I', 'would', 'visit', 'it', 'first.']], why: "**If I were you, I'd + fe'l**." },
    { k: 'fix', wrong: "If I would be you, I would take the offer.", a: ["If I were you, I would take the offer.", "If I were you, I'd take the offer."], why: "**if** dan keyin **would** qo'yilmaydi." },
    { k: 'fix', wrong: "You might want to to talk to your family.", a: ["You might want to talk to your family."], why: "**want to** dan keyin fe'l, qo'shimcha **to** emas." },
    { k: 'choice', q: "If you hadn't taken that course, you ___ this offer now.", opts: ["wouldn't have", "wouldn't have had", "hadn't", "won't have"], a: 0, why: "O'tgan sabab + hozirgi natija: **would(n't) + fe'l**: *wouldn't have* (hozir taklif yo'q bo'lardi). *Wouldn't have had* o'tgan zamonga tegishli bo'lib qolardi." },
    { k: 'translate', uz: "Shoshilib qaror qilmang, ikki marta o'ylab ko'ring.", a: ["Don't rush into a decision, think twice.", "Don't rush into the decision, think twice.", "Don't rush into it, think twice.", "Don't rush into a decision; think twice."], why: "**rush into** + ot; **think twice**." },
    { k: 'tf', q: "*I advise you accept it.* — Gap to'g'ri.", a: false, why: "**advise + kim + to + fe'l**: *I advise you to accept it*." },
    { k: 'dictation', say: 'In the end, it is your decision.', a: ['In the end, it is your decision.', "In the end, it's your decision."], uz: "Oxir-oqibat, qaror seniki." },
    { k: 'translate', uz: "Bu tavakkal, lekin bunga arziydi.", a: ["It's a leap of faith, but it's worth it.", "It is a leap of faith, but it is worth it.", "It's risky, but it's worth it.", "It is risky, but it is worth it.", "It's a risk, but it's worth it."], why: "**a leap of faith / risky** + **worth it**." },
    { k: 'speak', say: "Have you thought about asking for a trial period?", uz: "Sinov muddati so'rash haqida o'ylab ko'rdingizmi?" },
  ],
  quiz: [
    { k: 'choice', q: "Qaysi biri ohang jihatidan eng qattiq?", opts: ["You must accept the offer.", "You might want to accept the offer.", "Have you thought about accepting it?", "If I were you, I'd accept it."], a: 0, why: "**must** — buyruqqa yaqin. Qolganlari yumshoq." },
    { k: 'choice', q: "I can't answer now. Let me ___ it over and call you tomorrow.", opts: ['think', 'say', 'speak', 'hear'], a: 0, why: "**think it over** — puxta o'ylab ko'rmoq (qat'iy birikma)." },
    { k: 'fill', q: "Don't rush ___ a decision this big.", a: ['into'], uz: "Bunday katta qarorga shoshilmang.", why: "**rush into**." },
    { k: 'fix', wrong: "You should to think about it carefully.", a: ["You should think about it carefully."], why: "Modal + fe'l (to yo'q)." },
    { k: 'order', uz: "Qolsangiz, barqarorlikka ega bo'lardingiz.", words: ['If', 'you', 'stayed,', "you'd", 'have', 'stability.'], extra: ['would', 'stay'], alt: [['If', 'you', 'stayed,', 'you', 'would', 'have', 'stability.']], why: "**Second conditional**: *stayed … would have*." },
    { k: 'listen', say: "That sounds like a tough choice.", opts: ["That sounds like a tough choice.", "That sounds like a rough voice.", "That sound like a tough choice.", "That looks like a tough choice."], a: 0 },
    { k: 'tf', q: "*In the end, it's your decision* — maslahatchi qarorni do'stiga qoldiryapti.", a: true, why: "Bu qo'llab-quvvatlovchi tugatish: maslahat beradi, majburlamaydi." },
    { k: 'translate', uz: "Sening o'rningda bo'lsam, ikki marta o'ylardim.", a: ["If I were you, I'd think twice.", "If I were you, I would think twice."], why: "**If I were you, I'd think twice**." },
  ],
  summary: [
    "Yumshoq maslahat: **If I were you, I'd…**, **Have you thought about + -ing?**, **You might want to…**, **I'd think twice before…**",
    "**If I were you** da *would* yo'q: *If I would be you* xato. Modaldan keyin **to** yo'q, *advise* dan keyin **to** bor.",
    "Oqibatlarni tasavvur qildiring: *If you stayed, you'd have…* (second), *If you hadn't…, you wouldn't have…* (aralash).",
    "Avval his-tuyg'uni tan oling, keyin variantlarni ayting, qarorni do'stingizga qoldiring: *In the end, it's your decision.*",
    "Yangi so'zlar: **sleep on it, think it over, leap of faith, risky, stability, rush into**.",
  ],
  homework: "Do'stingiz chet elga o'qishga ketish-ketmaslikni hal qilyapti, deb tasavvur qiling. Unga 6 gaplik maslahat yozing: tasalli, 2 ta yumshoq maslahat, 2 ta shart gap (second yoki aralash) va qarorni unga qoldiradigan tugatish.",
};

export default lesson;
