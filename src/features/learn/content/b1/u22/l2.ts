import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u22-l2",
  title: "Future forms: will, going to, present tenses",
  titleUz: "Kelasi zamon shakllari: will, going to, Present Continuous / Simple",
  goal: "Kelajak haqida gapirganda to'rt shakldan birini to'g'ri tanlaysiz: **will** (shu zahoti qaror, taxmin), **going to** (reja, dalilga asoslangan taxmin), **Present Continuous** (kelishilgan uchrashuv) va **Present Simple** (jadval). **when / as soon as** dan keyin **will** ishlatmaysiz.",
  slides: [
    {
      title: "Kelajak uchun to'rt yo'l",
      blocks: [
        { t: "p", md: "O'zbekchada kelajak haqida «ertaga boraman» deymiz, bu ko'p hollarda yetarli. Inglizchada esa **qaysi shaklni tanlaganingiz** gapning ma'nosini o'zgartiradi: bu qaror hozir qabul qilindimi, oldindan rejalashtirilganmi yoki kelishib qo'yilganmi." },
        {
          t: "table", head: ["Shakl", "Qachon?", "Misol"], speak: [2],
          rows: [
            ["**will**", "Shu zahoti qaror, va'da, taklif, fikringizga asoslangan taxmin", "The phone is ringing. I'll answer it."],
            ["**be going to**", "Oldindan qilingan reja; hozirgi dalilga asoslangan taxmin", "I'm going to start a new course."],
            ["**Present Continuous**", "Aniq kelishilgan uchrashuv yoki tadbir", "I'm meeting my tutor at four."],
            ["**Present Simple**", "Jadval, reja, kalendar (poyezd, dars, kino)", "The course starts on Monday."],
          ],
        },
        { t: "tip", tone: "info", md: "Ko'pincha ikkita shakl ham to'g'ri bo'ladi, lekin **nuqtai nazar** boshqacha. Quyida har biri qachon eng tabiiy ekanini ko'rasiz." },
        { t: "check", ex: { k: "choice", q: "The train ___ at half past seven tomorrow morning.", opts: ["leaves", "will be leaving", "is going leave", "leave"], a: 0, why: "Jadval → **Present Simple**: *leaves*." } },
      ],
    },
    {
      title: "will va going to",
      blocks: [
        { t: "p", md: "Bu ikkalasi eng ko'p aralashtiriladi. Asosiy farq: **vaqt**. Qaror gapirayotgan paytda tug'ilsa — **will**. Qaror oldin qabul qilingan bo'lsa — **going to**." },
        {
          t: "examples", items: [
            { en: "Oh, I forgot the milk. I'll go to the shop now.", uz: "Voy, sutni unutibman. Hozir do'konga boraman.", note: "Shu zahoti qaror → **will**." },
            { en: "I've decided. I'm going to learn German this year.", uz: "Qaror qildim. Bu yil nemis tilini o'rganaman.", note: "Oldindan qilingan reja → **going to**." },
            { en: "Look at the sky! It's going to rain.", uz: "Osmonga qarang! Yomg'ir yog'adi.", note: "Hozir ko'rinib turgan dalil → **going to**." },
            { en: "I think technology will change education a lot.", uz: "Menimcha, texnologiya ta'limni ancha o'zgartiradi.", note: "Shaxsiy fikr, taxmin → **will**." },
            { en: "Don't worry. I'll help you with the homework.", uz: "Xavotir olmang. Uy vazifasida yordam beraman.", note: "Taklif yoki va'da → **will**." },
          ],
        },
        { t: "tip", tone: "good", md: "**I think / I hope / I'm sure / probably** bilan odatda **will** keladi: *I think she'll pass the exam.* **Dalil** ko'rinib tursa — **going to**: *He's studying hard. He's going to pass.*" },
        { t: "check", ex: { k: "choice", q: "Nodira is carrying a heavy box. — Wait, I ___ the door for you.", opts: ["will open", "am going to open", "open", "am opening"], a: 0, why: "Shu zahoti taklif → **will**." } },
        { t: "check", ex: { k: "choice", q: "Look at his face! He ___ be sick.", opts: ["is going to", "will to", "is going", "goes to"], a: 0, why: "Dalil ko'rinib turibdi → **is going to be**." } },
      ],
    },
    {
      title: "Present Continuous va Present Simple",
      blocks: [
        { t: "p", md: "Kelajak uchun **Present Continuous** bilan **kelishilgan** ishlarni aytamiz: odatda vaqt va odam ma'lum. **Present Simple** bilan esa **rasmiy jadval** va kalendardagi ishlarni aytamiz." },
        {
          t: "table", head: ["Shakl", "Misol", "Ma'nosi"], speak: [1],
          rows: [
            ["Present Continuous", "I'm having lunch with Dilnoza tomorrow.", "Ertaga Dilnoza bilan tushlik qilamiz (kelishilgan)."],
            ["Present Continuous", "We're flying to Dubai on Friday.", "Juma kuni Dubayga uchamiz (chipta bor)."],
            ["Present Simple", "The film starts at eight.", "Film soat sakkizda boshlanadi (jadval)."],
            ["Present Simple", "Our flight leaves at nine.", "Reysimiz soat 9 da uchadi (jadval)."],
          ],
        },
        { t: "tip", tone: "warn", md: "**Present Continuous** kelajak ma'nosida **vaqt belgisi** (*tomorrow, on Friday, next week*) bilan keladi. Faqat *I'm meeting him* desangiz, hozirgi ish deb tushunishadi." },
        { t: "check", ex: { k: "fill", q: "My exam ___ at nine o'clock on Monday.", a: ["starts", "begins"], hint: "start", why: "Rasmiy jadval → **Present Simple**." } },
        { t: "check", ex: { k: "choice", q: "Which sentence is an arrangement?", opts: ["I'm seeing the dentist at 3.30 tomorrow.", "I'll see the dentist.", "The dentist sees me.", "I see the dentist tomorrow, I think."], a: 0, why: "Aniq vaqt va kelishilgan uchrashuv → **Present Continuous**." } },
      ],
    },
    {
      title: "when, as soon as, before: will yo'q!",
      blocks: [
        { t: "p", md: "Bu o'zbek tilida so'zlovchilar tez-tez qiladigan xato. Vaqt bog'lovchilaridan (**when, as soon as, before, after, until**) keyin kelajak haqida gapirsak ham, **Present Simple** ishlatamiz. **will** faqat bosh gapda bo'ladi." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I'll call you when I arrive.", "As soon as she finishes, we'll leave.", "Wait here until I come back."] },
          bad: { title: "Xato", items: ["I'll call you when I will arrive.", "As soon as she will finish, we'll leave.", "Wait here until I will come back."] },
        },
        { t: "tip", tone: "warn", md: "O'zbekchada «u kelganda» deyilganda zamon aytilmaydi, shuning uchun *when he will come* deb yuborasiz. Inglizchada: **when he comes**." },
        { t: "check", ex: { k: "fix", wrong: "I will tell you when I will know the result.", a: ["I will tell you when I know the result.", "I'll tell you when I know the result."], hint: "when dan keyin zamon", why: "**when** dan keyin Present Simple: *when I know*." } },
        { t: "check", ex: { k: "fill", q: "I'll send the file as soon as I ___ home.", a: ["get", "arrive", "reach"], hint: "get", why: "**as soon as** dan keyin Present Simple." } },
      ],
    },
    {
      title: "Dialog: ish rejalari",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Madina", en: "What are you doing this weekend, Jack?", uz: "Jek, bu dam olish kunlari nima qilasan?" },
            { who: "Jack", en: "I'm going to install the new software on all the office computers.", uz: "Ofisdagi barcha kompyuterlarga yangi dasturni o'rnatmoqchiman." },
            { who: "Madina", en: "Really? On Saturday?", uz: "Rostdanmi? Shanba kunimi?" },
            { who: "Jack", en: "Yes. The IT manager is coming at nine, so we'll start early.", uz: "Ha. IT menejeri soat to'qqizda keladi, shuning uchun erta boshlaymiz." },
            { who: "Madina", en: "It'll take a long time. I think you'll need some help.", uz: "Bu uzoq vaqt oladi. Menimcha, senga yordam kerak bo'ladi." },
            { who: "Jack", en: "You're right. Would you like to come?", uz: "To'g'ri aytasan. Kelmoqchimisan?" },
            { who: "Madina", en: "OK, I'll bring some sandwiches. When does the office open on Monday?", uz: "Bo'ldi, men sendvichlar olib kelaman. Dushanba kuni ofis soat nechada ochiladi?" },
            { who: "Jack", en: "At eight. We'll finish before it opens.", uz: "Sakkizda. Ochilishidan oldin tugatamiz." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "Why does Madina say \"I'll bring some sandwiches\"?", opts: ["It is a decision she makes at that moment.", "It is a timetable.", "It is a plan she made yesterday.", "It is something she can see happening."], a: 0, why: "Shu zahoti qaror yoki taklif → **will**." } },
      ],
    },
    {
      title: "O'qing: keyingi hafta",
      blocks: [
        {
          t: "text", title: "A busy week ahead",
          en: "Next week is going to be very busy for Ben. On Monday he is flying to Manchester for a conference. His plane leaves at seven in the morning, so he is going to get up at four. On Tuesday he is meeting a new client and giving a short presentation. Ben is a little nervous, but he thinks it will go well. As soon as he gets back, he is going to take two days off. He says he will sleep a lot and he won't check his email at all.",
          uz: "Kelasi hafta Ben uchun juda band bo'ladi. Dushanba kuni u konferensiya uchun Manchesterga uchyapti. Samolyoti ertalab soat yettida jo'naydi, shuning uchun u to'rtda turmoqchi. Seshanba kuni u yangi mijoz bilan uchrashadi va qisqa taqdimot qiladi. Ben biroz hayajonda, lekin yaxshi o'tadi deb o'ylaydi. Qaytib kelishi bilan u ikki kun dam oladi. U ko'p uxlashini va elektron pochtasini umuman tekshirmasligini aytadi.",
        },
        { t: "check", ex: { k: "tf", q: "Ben is sure the presentation will be a disaster.", a: false, why: "U *thinks it will go well* — yaxshi o'tadi deb o'ylaydi." } },
        { t: "check", ex: { k: "choice", q: "\"His plane leaves at seven\" uses Present Simple because it is...", opts: ["a timetable", "a promise", "a prediction", "a past event"], a: 0, why: "Reys vaqti — **jadval**, shuning uchun Present Simple." } },
      ],
    },
  ],
  words: [
    { en: "register", uz: "ro'yxatdan o'tmoq", ipa: "ˈredʒ.ɪ.stər", pos: "verb", ex: "I am going to register for the course on Friday.", exUz: "Men juma kuni kursga ro'yxatdan o'taman." },
    { en: "intend", uz: "niyat qilmoq", ipa: "ɪnˈtend", pos: "verb", ex: "I intend to finish the course in June.", exUz: "Kursni iyunda tugatishni niyat qilganman." },
    { en: "reschedule", uz: "boshqa vaqtga ko'chirmoq", ipa: "ˌriːˈʃed.juːl", pos: "verb", ex: "We have to reschedule the meeting to next week.", exUz: "Uchrashuvni kelasi haftaga ko'chirishimiz kerak." },
    { en: "reminder", uz: "eslatma", ipa: "rɪˈmaɪn.dər", pos: "noun", ex: "I set a reminder so I won't forget the call.", exUz: "Qo'ng'iroqni unutmaslik uchun eslatma qo'ydim." },
    { en: "install", uz: "o'rnatmoq", ipa: "ɪnˈstɔːl", pos: "verb", ex: "You need to install the app first.", exUz: "Avval ilovani o'rnatishingiz kerak." },
    { en: 'agenda', uz: "kun tartibi", ipa: 'əˈdʒen.də', pos: 'noun', ex: "What is on the agenda for the meeting?", exUz: "Yig'ilish kun tartibida nima bor?" },
    { en: "launch", uz: "ishga tushirmoq", ipa: "lɔːntʃ", pos: "verb", ex: "The company is going to launch a new product.", exUz: "Kompaniya yangi mahsulotni ishga tushirmoqchi." },
    { en: "venue", uz: "tadbir o'tkaziladigan joy", ipa: "ˈven.juː", pos: "noun", ex: "The venue for the party is a small hotel.", exUz: "Ziyofat o'tkaziladigan joy kichik mehmonxona." },
    { en: 'tolerate', uz: "chidamoq, toqat qilmoq", ipa: 'ˈtɒl.ə.reɪt', pos: 'verb', ex: "I can't tolerate noise when I'm studying.", exUz: "O'qiyotganimda shovqinga toqat qila olmayman." },
    { en: "call off", uz: "bekor qilmoq", ipa: "kɔːl ɒf", pos: "phrasal verb", ex: "They are going to call off the match because of the rain.", exUz: "Yomg'ir tufayli ular o'yinni bekor qilishmoqchi." },
  ],
  practice: [
    { k: "match", pairs: [["arrange", "kelishib olmoq"], ["intend", "niyat qilmoq"], ["install", "o'rnatmoq"], ["delay", "kechikish"], ["attend", "qatnashmoq"], ["confirm", "tasdiqlamoq"]] },
    { k: "choice", q: "It's cold in here. — I ___ the window.", opts: ["'ll close", "'m going to close", "close", "'m closing"], a: 0, why: "Shu zahoti qaror → **will**." },
    { k: "choice", q: "I've bought the tickets. We ___ to Tashkent on Saturday.", opts: ["are flying", "will flying", "fly", "are fly"], a: 0, why: "Kelishilgan reja (chipta bor) → **Present Continuous**." },
    { k: "choice", q: "The shop ___ at ten o'clock every day.", opts: ["opens", "is opening", "will opens", "open"], a: 0, why: "Doimiy jadval → **Present Simple**." },
    { k: "fill", q: "Look at those black clouds! It's ___ to rain.", a: ["going"], uz: "Mana bu qora bulutlarga qarang! Yomg'ir yog'adi.", why: "Dalil bor → **going to**." },
    { k: "fill", q: "I'll text you when I ___ at the station.", a: ["arrive", "get", "am"], uz: "Bekatga yetib borganimda senga yozaman.", hint: "arrive", why: "**when** dan keyin Present Simple." },
    { k: "fill", q: "I ___ my friends at the cinema at seven.", a: ["am meeting", "'m meeting"], uz: "Soat yettida kinoteatrda do'stlarim bilan uchrashaman.", hint: "meet", why: "Kelishilgan uchrashuv → **Present Continuous**." },
    { k: "order", uz: "Qaytib kelishim bilan senga qo'ng'iroq qilaman.", words: ["I'll", "call", "you", "as", "soon", "as", "I", "get", "back."], extra: ["will"], why: "**as soon as** dan keyin Present Simple." },
    { k: "order", uz: "Biz yangi ilovani ertaga ishga tushiramiz.", words: ["We", "are", "going", "to", "launch", "the", "new", "app", "tomorrow."], extra: ["will", "launching"], alt: [["We", "are", "launching", "the", "new", "app", "tomorrow."]], why: "Reja → **going to** yoki Present Continuous." },
    { k: "tf", q: "\"I'll call you when I will get home\" is correct.", a: false, why: "**when** dan keyin Present Simple: *when I get home*." },
    { k: "fix", wrong: "The meeting is starting at nine tomorrow, according to the timetable.", a: ["The meeting starts at nine tomorrow, according to the timetable.", "The meeting starts at nine tomorrow according to the timetable."], hint: "jadval", why: "Jadval → **Present Simple**." },
    { k: "fix", wrong: "I will go to the dentist tomorrow at five. I have already booked it.", a: ["I am going to the dentist tomorrow at five. I have already booked it.", "I'm going to the dentist tomorrow at five. I have already booked it.", "I am going to go to the dentist tomorrow at five. I have already booked it.", "I'm going to go to the dentist tomorrow at five. I have already booked it."], hint: "kelishilgan uchrashuv", why: "Oldindan band qilingan → **Present Continuous** yoki **going to**." },
    { k: "dictation", say: "I'm going to learn a new skill this year.", uz: "Bu yil yangi ko'nikma o'rganmoqchiman.", why: "Reja → **going to**." },
    { k: "listen", say: "Our flight leaves at nine.", opts: ["Our flight leaves at nine.", "Our flight left at nine.", "Our flight is leaving at nine.", "Our flights leave at nine."], a: 0, why: "Jadval → *leaves*." },
    { k: "translate", uz: "Menimcha, u imtihondan o'tadi.", a: ["I think he will pass the exam.", "I think she will pass the exam.", "I think he'll pass the exam.", "I think she'll pass the exam."], why: "Fikr bildirib taxmin qilish → **will**." },
    { k: "speak", say: "I'm meeting my manager tomorrow at ten.", uz: "Ertaga soat o'nda menejerim bilan uchrashaman." },
  ],
  quiz: [
    { k: "choice", q: "Oh, the printer isn't working. — Don't worry. I ___ it.", opts: ["'ll fix", "'m going to fix", "fix", "'m fixing"], a: 0, why: "Shu zahoti taklif → **will**." },
    { k: "choice", q: "Why are you buying paint? — I ___ the kitchen this weekend.", opts: ["am going to paint", "will to paint", "paint", "painting"], a: 0, why: "Oldindan qilingan reja → **going to**." },
    { k: "choice", q: "What time ___ tomorrow's lecture begin?", opts: ["does", "will", "is", "do"], a: 0, why: "Jadval → Present Simple savoli: *What time does … begin?*" },
    { k: "choice", q: "Call me as soon as you ___ the results.", opts: ["get", "will get", "are going get", "got"], a: 0, why: "**as soon as** dan keyin Present Simple." },
    { k: "fill", q: "I think the new phone ___ expensive, but I'm not sure.", a: ["will be", "'ll be"], hint: "be", why: "Shaxsiy fikr → **will**." },
    { k: "fill", q: "We ___ lunch with the clients at one o'clock tomorrow. It's all arranged.", a: ["are having", "'re having"], hint: "have", why: "Kelishilgan tadbir → **Present Continuous**." },
    { k: "fix", wrong: "If you want, I am going to help you right now.", a: ["If you want, I'll help you right now.", "If you want, I will help you right now."], hint: "taklif", why: "Shu zahoti taklif → **will**." },
    { k: "fix", wrong: "I'll wait here until she will come.", a: ["I'll wait here until she comes.", "I will wait here until she comes."], hint: "until dan keyin", why: "**until** dan keyin Present Simple." },
    { k: "order", uz: "Dars ertaga soat to'qqizda boshlanadi.", words: ["The", "class", "starts", "at", "nine", "tomorrow."], extra: ["will", "starting"], alt: [["The", "class", "starts", "tomorrow", "at", "nine."], ["Tomorrow", "the", "class", "starts", "at", "nine."]], why: "Jadval → Present Simple." },
    { k: "tf", q: "We use going to for predictions when we can see evidence now.", a: true, why: "Hozirgi dalil → **going to**: *It's going to rain.*" },
  ],
  summary: [
    "**will** — shu zahoti qaror, taklif, va'da va fikringizga asoslangan taxmin: *I'll help you. I think it will be fine.*",
    "**be going to** — oldindan qilingan reja yoki hozirgi dalilga asoslangan taxmin: *I'm going to apply. It's going to rain.*",
    "**Present Continuous** — kelishilgan uchrashuv va tadbirlar (vaqt belgisi bilan): *I'm meeting Dilnoza at six.*",
    "**Present Simple** — jadval va kalendar: *The train leaves at nine.*",
    "**when, as soon as, before, until** dan keyin **will** yo'q — Present Simple: *I'll call you when I arrive.*",
  ],
  homework: "Kelasi haftangiz haqida 5 ta gap yozing: bittasi reja (**going to**), bittasi kelishilgan uchrashuv (**Present Continuous**), bittasi jadval (**Present Simple**), bittasi taxmin (**I think … will**) va bittasi **when / as soon as** bilan.",
};

export default lesson;
