import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u24-l4",
  title: "Talking about the future",
  titleUz: "Kelasi zamon: will, going to, Future Continuous va Future Perfect",
  goal: "Kelajak haqida gapirishda **will, going to, Present Continuous va Present Simple**ni ma'noga qarab tanlaysiz (qaror, reja, kelishuv, jadval). **Future Continuous** (*this time tomorrow I'll be flying*) va **Future Perfect** (*by 2030 I will have saved…*)ni ishlatasiz, vaqt gaplarida **will** dan qochasiz va **be about to, be due to, be likely to** shakllarini bilasiz. Ish uchrashuvlari, rejalar va IELTS Speaking Part 2 uchun kerak.",
  slides: [
    {
      title: "Kelajak uchun to'rtta oddiy shakl",
      blocks: [
        { t: "p", md: "Inglizchada kelasi zamon **bitta emas**. Qaysi shaklni tanlash — gap **qachon qabul qilingan qaror**, **dalil bormi**, **kelishuv yoki jadval** bormi, shunga bog'liq." },
        {
          t: "table", head: ["Shakl", "Qachon", "Misol"], speak: [2],
          rows: [
            ["will + V1", "gapirayotgan paytda qabul qilingan qaror; fikr, va'da, taklif", "There's no milk. I'll get some."],
            ["going to + V1", "oldindan rejalashtirilgan ish; dalilga asoslangan bashorat", "I'm going to study law next year."],
            ["Present Continuous", "aniq kelishuv (vaqt va odam bor)", "I'm meeting my tutor at four."],
            ["Present Simple", "jadval, dastur, kalendar", "The train leaves at 7.15 tomorrow."],
          ],
        },
        { t: "examples", items: [
          { en: "Look at those clouds. It's going to rain.", uz: "Anavi bulutlarga qarang. Yomg'ir yog'adi. (dalil bor)" },
          { en: "I think prices will keep rising.", uz: "Menimcha, narxlar ko'tarilishda davom etadi. (fikr)" },
          { en: "We're flying to Istanbul on Friday. The tickets are booked.", uz: "Juma kuni Istanbulga uchamiz. Chiptalar buyurtma qilingan. (kelishuv)" },
        ] },
        { t: "tip", tone: "info", md: "**I think / I expect / probably** dan keyin odatda **will**: *I think it will be a hard exam.* **Dalil** ko'z oldimizda bo'lsa (*bulutlar, qorong'i osmon*), **going to**." },
        { t: "check", ex: { k: "choice", q: "\"We're out of coffee.\" — \"Oh, I ___ some from the shop.\"", opts: ["'ll get", "am going to get", "get", "am getting"], a: 0, why: "Gapirayotgan paytda qabul qilingan qaror: **I'll get**." } },
        { t: "check", ex: { k: "choice", q: "I've bought the paint, so this weekend I ___ the kitchen.", opts: ["am going to paint", "paint", "will painting", "painted"], a: 0, why: "Oldindan rejalashtirilgan ish: **am going to paint**." } },
      ],
    },
    {
      title: "Future Continuous va Future Perfect",
      blocks: [
        { t: "p", md: "**Future Continuous** (*will be + V-ing*) — kelajakdagi **ma'lum paytda davom etayotgan** ish. **Future Perfect** (*will have + V3*) — kelajakdagi ma'lum paytgacha **tugagan** ish." },
        {
          t: "table", head: ["Shakl", "Tuzilishi", "Misol"], speak: [2],
          rows: [
            ["Future Continuous", "will be + V-ing", "This time tomorrow I'll be flying to Dubai."],
            ["Future Perfect", "will have + V3", "By 2030 I will have saved enough for a flat."],
            ["Inkor", "won't be / won't have", "She won't have finished by Friday."],
            ["Savol", "Will + ega + be V-ing / have V3?", "Will you be using the car tonight?"],
          ],
        },
        { t: "examples", items: [
          { en: "Don't call me at eight. I'll be driving home.", uz: "Soat sakkizda qo'ng'iroq qilmang. Uyga mashinada ketayotgan bo'laman." },
          { en: "By the time you arrive, we'll have finished dinner.", uz: "Siz yetib kelguncha, biz kechki ovqatni tugatgan bo'lamiz." },
          { en: "Will you be needing the projector this afternoon?", uz: "Bugun tushdan keyin proyektor kerak bo'ladimi? (xushmuomala savol)" },
        ] },
        { t: "tip", tone: "info", md: "**Future Continuous** xushmuomala savol uchun ham qulay: *Will you be using the car?* (*Will you use…?* ga qaraganda yumshoqroq, sizning rejangiz haqida so'rayapti). **By** va **by the time** — Future Perfect belgisi." },
        { t: "check", ex: { k: "fill", q: "This time next week I ___ on a beach. (lie)", a: ["will be lying", "'ll be lying"], why: "Kelajakdagi ma'lum paytda davom etadigan ish: **will be lying**." } },
        { t: "check", ex: { k: "fill", q: "By the end of the year, she ___ her degree. (finish)", a: ["will have finished", "'ll have finished"], why: "**By the end of the year** — Future Perfect: **will have finished**." } },
      ],
    },
    {
      title: "Vaqt gaplari va boshqa shakllar",
      blocks: [
        { t: "p", md: "**when, as soon as, before, after, until, once, by the time, if** dan keyin kelasi zamon ma'nosida **Present Simple** keladi, **will** emas (o'zbekchada *«yetib kelganimda»* ham hozirgi shaklga o'xshaydi)." },
        { t: "compare",
          good: { title: "To'g'ri", items: ["I'll call you when I arrive.", "As soon as she finishes, we'll leave.", "Wait here until the doctor comes.", "By the time you get home, I'll have cooked."] },
          bad: { title: "Xato", items: ["I'll call you when I will arrive.", "As soon as she will finish, we'll leave.", "Wait here until the doctor will come.", "By the time you will get home, I'll have cooked."] } },
        { t: "p", md: "Yaqin kelajak va ehtimol uchun maxsus qoliplar ham bor:" },
        {
          t: "table", head: ["Qolip", "Ma'nosi", "Misol"], speak: [2],
          rows: [
            ["be about to + V1", "bir lahzadan keyin, hozir boshlanadi", "The film is about to start."],
            ["be due to + V1", "rejaga ko'ra (jadvalda)", "The new library is due to open in May."],
            ["be likely to + V1", "ehtimol", "She is likely to get the job."],
            ["be on the verge of + -ing", "juda yaqin, bir qadam qoldi", "The company is on the verge of closing."],
          ],
        },
        { t: "check", ex: { k: "choice", q: "I'll text you as soon as I ___ home.", opts: ["get", "will get", "am getting", "would get"], a: 0, why: "**as soon as** dan keyin Present Simple: **get**." } },
        { t: "check", ex: { k: "tf", q: "*The conference is due to start at nine* gapi konferensiya jadvalga ko'ra soat to'qqizda boshlanishini bildiradi.", a: true, why: "**be due to** — rejaga/jadvalga ko'ra bo'lishi kutilayotgan voqea." } },
      ],
    },
    {
      title: "Tipik xatolar (o'zbek tilidan)",
      blocks: [
        { t: "p", md: "O'zbek tilida kelasi zamon shakli bitta (*-ajak, -adi*), vaqt gapida esa hozirgi zamon ham ishlatiladi. Shuning uchun inglizchada shu xatolar ko'p uchraydi:" },
        { t: "compare",
          good: { title: "To'g'ri", items: ["When I arrive, I'll call you.", "I think I'll go to the party tonight.", "The meeting is about to start.", "By next summer I will have finished my course."] },
          bad: { title: "Xato", items: ["When I will arrive, I will call you.", "I think I go to the party tonight.", "The meeting is about to starting.", "By next summer I will be finished my course."] } },
        { t: "p", md: "**1.** *when* dan keyin **will** yo'q. **2.** Gapirayotgan paytdagi qaror — **will** (Present Simple emas). **3.** *be about to* dan keyin **V1**. **4.** *By + vaqt* → **will have + V3**." },
        { t: "check", ex: { k: "fix", wrong: "When I will arrive, I will call you.", a: ["When I arrive, I will call you.", "When I arrive, I'll call you."], hint: "vaqt gapi", why: "**when** dan keyin Present Simple: *arrive*." } },
        { t: "check", ex: { k: "fix", wrong: "I think I go to the party tonight.", a: ["I think I'll go to the party tonight.", "I think I will go to the party tonight.", "I think I'm going to the party tonight.", "I think I'm going to go to the party tonight."], hint: "qaror yoki reja", why: "**I think** + **will**: *I'll go*; reja bo'lsa *I'm going*." } },
        { t: "check", ex: { k: "fix", wrong: "The meeting is about to starting.", a: ["The meeting is about to start."], hint: "be about to + V1", why: "**about to** dan keyin V1." } },
        { t: "check", ex: { k: "fix", wrong: "By next summer I will be finished my course.", a: ["By next summer I will have finished my course.", "By next summer I'll have finished my course."], hint: "By + vaqt", why: "**By next summer** → **will have finished**." } },
      ],
    },
    {
      title: "O'qing: Kelasi yil rejalarim",
      blocks: [
        {
          t: "text", title: "Where I'll be in five years", voice: "george",
          en: "This year is going to be a big one for me. In September I'm starting a master's degree in engineering, and the first lecture is on the fourth. I'm moving to a new flat on the first of the month, so right now I am packing boxes. I'm sure the course will be demanding, but I think I'll enjoy it. This time next year I'll be preparing for my first exams, and I'll probably be living on coffee. By the time I'm thirty, I hope I will have found a good job and saved enough to buy a small flat. A new bus line is due to open near the university in the autumn, so I'm likely to save time every morning. Of course, nobody can foresee everything, but I am about to begin something exciting and I feel ready.",
          uz: "Bu yil men uchun katta yil bo'ladi. Sentyabrda muhandislik bo'yicha magistraturani boshlayapman, birinchi ma'ruza to'rtinchi kuni. Oyning birinchi kuni yangi kvartiraga ko'chyapman, shuning uchun hozir qutilarni joylayapman. Kurs qiyin bo'lishiga ishonchim komil, lekin menimcha, u menga yoqadi. Kelasi yil shu paytda birinchi imtihonlarga tayyorlanayotgan bo'laman va, ehtimol, faqat qahva bilan kun ko'raman. O'ttiz yoshga yetganimda, yaxshi ish topgan va kichik kvartira sotib olishga yetarlicha pul yig'gan bo'laman, deb umid qilaman. Kuzda universitet yaqinida yangi avtobus yo'nalishi ochilishi rejalashtirilgan, shuning uchun har ertalab vaqt tejashim mumkin. Albatta, hech kim hamma narsani oldindan ko'ra olmaydi, lekin men qiziqarli yangi davrni boshlashga tayyorman.",
        },
        { t: "check", ex: { k: "tf", q: "The writer is already packing boxes for the move.", a: true, why: "*So right now I **am packing** boxes* — hozir davom etayotgan tayyorgarlik." } },
        { t: "check", ex: { k: "choice", q: "Why does the writer say \"By the time I'm thirty, I hope I will have found a good job\"?", opts: ["He thinks about something finished before a future point in time.", "He describes an action in progress at that moment.", "He describes a timetable.", "He makes a decision at the moment of speaking."], a: 0, why: "**By the time … will have found** — kelajakdagi paytgacha tugagan ish." } },
      ],
    },
    {
      title: "Dialog: Safar oldidan",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Helen", en: "Rustam, are you ready for your trip to Dubai?", uz: "Rustam, Dubayga safaringizga tayyormisiz?" },
            { who: "Rustam", en: "Nearly. My flight is at six tomorrow morning, so I'm going to sleep early.", uz: "Deyarli. Reysim ertaga ertalab soat oltida, shuning uchun erta uxlayman." },
            { who: "Helen", en: "At eight tomorrow morning you'll be sitting on a plane. Will you be working during the flight?", uz: "Ertaga ertalab soat sakkizda samolyotda o'tirgan bo'lasiz. Parvozda ishlaysizmi?" },
            { who: "Rustam", en: "I'll try to, but I'm likely to fall asleep. The meeting starts at two, so I'll have landed by then.", uz: "Harakat qilaman, lekin uxlab qolishim ehtimoli katta. Yig'ilish ikkida boshlanadi, shunga qadar qo'nib bo'lgan bo'laman." },
            { who: "Helen", en: "Good. Send me a message when you arrive.", uz: "Yaxshi. Yetib borganingizda xabar yuboring." },
            { who: "Rustam", en: "I will. By the way, the new project is due to start next month. We'll talk about it when I get back.", uz: "Albatta. Aytgancha, yangi loyiha kelasi oy boshlanishi kerak. Qaytganimda gaplashamiz." },
            { who: "Helen", en: "Perfect. Have a safe trip. I'll be thinking of you!", uz: "Zo'r. Yo'lingiz bexatar bo'lsin. Sizni o'ylab turaman!" },
          ],
        },
        { t: "check", ex: { k: "choice", q: "Why does Rustam say \"I'll have landed by then\"?", opts: ["The landing will be finished before the meeting at two.", "He is landing at the moment.", "He has already landed.", "He makes a promise."], a: 0, why: "**will have landed** — yig'ilishdan oldin tugaydigan ish." } },
      ],
    },
  ],
  words: [
    { en: "anticipate", uz: "oldindan ko'ra bilmoq, kutmoq", ipa: "ænˈtɪs.ɪ.peɪt", pos: "verb", ex: "We anticipate a rise in demand next spring.", exUz: "Kelasi bahorda talab oshishini kutyapmiz." },
    { en: "foresee", uz: "oldindan ko'rmoq, bashorat qilmoq", ipa: "fɔːˈsiː", pos: "verb", ex: "Nobody could have foreseen such a quick change.", exUz: "Hech kim bunday tez o'zgarishni oldindan ko'ra olmasdi." },
    { en: "on the horizon", uz: "yaqin kelajakda kutilayotgan", ipa: "ɒn ðə həˈraɪ.zən", pos: "phrase", ex: "Big changes are on the horizon for our department.", exUz: "Bizning bo'limimizni katta o'zgarishlar kutmoqda." },
    { en: "in the pipeline", uz: "tayyorlanayotgan, rejada", ipa: "ɪn ðə ˈpaɪp.laɪn", pos: "phrase", ex: "There are several new products in the pipeline.", exUz: "Tayyorlanayotgan bir nechta yangi mahsulot bor." },
    { en: "likelihood", uz: "ehtimollik", ipa: "ˈlaɪk.li.hʊd", pos: "noun", ex: "There is a strong likelihood of rain this weekend.", exUz: "Shu hafta oxirida yomg'ir yog'ish ehtimoli yuqori." },
    { en: "be due to", uz: "rejaga ko'ra ... kerak", ipa: "biː djuː tuː", pos: "phrase", ex: "The new bridge is due to open next month.", exUz: "Yangi ko'prik kelasi oy ochilishi kerak." },
    { en: "on the verge of", uz: "... arafasida", ipa: "ɒn ðə vɜːdʒ əv", pos: "phrase", ex: "The team is on the verge of winning the league.", exUz: "Jamoa chempionlikni qo'lga kiritish arafasida." },
    { en: "look ahead", uz: "kelajakka nazar tashlamoq", ipa: "lʊk əˈhed", pos: "phrasal verb", ex: "It is time to look ahead and plan the next stage.", exUz: "Kelajakka nazar tashlab, keyingi bosqichni rejalashtirish vaqti keldi." },
    { en: "set a goal", uz: "maqsad qo'ymoq", ipa: "set ə ɡəʊl", pos: "phrase", ex: "She set herself a goal of running ten kilometres by June.", exUz: "U iyungacha o'n kilometr yugurishni o'ziga maqsad qilib qo'ydi." },
    { en: "aim to", uz: "... ni maqsad qilmoq", ipa: "eɪm tuː", pos: "phrase", ex: "We aim to double our sales within two years.", exUz: "Ikki yil ichida sotuvni ikki baravar oshirishni maqsad qilganmiz." },
  ],
  practice: [
    { k: "choice", q: "The train ___ at 7.15 tomorrow morning. (jadval)", opts: ["leaves", "will leaves", "is going to leaving", "has left"], a: 0, why: "Jadval uchun **Present Simple**: *leaves*." },
    { k: "choice", q: "\"The phone is ringing.\" — \"I ___ it!\"", opts: ["'ll answer", "am going to answer", "answer", "am answering"], a: 0, why: "Shu zahoti qabul qilingan qaror: **I'll answer**." },
    { k: "listen", say: "This time tomorrow I'll be flying to Dubai.", opts: ["This time tomorrow I'll be flying to Dubai.", "This time tomorrow I'll fly to Dubai.", "This time tomorrow I've flown to Dubai.", "This time tomorrow I'm flying from Dubai."], a: 0, why: "Kelajakdagi ma'lum paytda davom etadigan ish: **will be flying**." },
    { k: "fill", q: "Don't phone me at nine. I ___ a meeting. (have)", a: ["will be having", "'ll be having"], uz: "Soat to'qqizda qo'ng'iroq qilmang. Yig'ilishda bo'laman.", why: "O'sha paytda davom etadigan ish: **will be having**." },
    { k: "fill", q: "By Friday, they ___ the whole building. (paint)", a: ["will have painted", "'ll have painted"], uz: "Jumagacha ular butun binoni bo'yab bo'lishadi.", why: "**By Friday** → **will have painted**." },
    { k: "fill", q: "I'll send you the file as soon as I ___ the report. (finish)", a: ["finish"], uz: "Hisobotni tugatishim bilan faylni yuboraman.", why: "**as soon as** dan keyin Present Simple: **finish**." },
    { k: "order", uz: "Film hozir boshlanadi.", words: ["The", "film", "is", "about", "to", "start."], extra: ["will", "starting"], why: "**be about to + V1**." },
    { k: "match", pairs: [["anticipate", "oldindan kutmoq"], ["on the horizon", "yaqin kelajakda kutilayotgan"], ["in the pipeline", "tayyorlanayotgan"], ["likelihood", "ehtimollik"], ["on the verge of", "arafasida"]] },
    { k: "tf", q: "*I'm seeing my dentist on Monday at ten.* gapida kelishilgan uchrashuv haqida gap ketyapti.", a: true, why: "**Present Continuous** + aniq vaqt = kelishuv." },
    { k: "fix", wrong: "If it will rain tomorrow, we will stay at home.", a: ["If it rains tomorrow, we will stay at home.", "If it rains tomorrow, we'll stay at home."], hint: "if-gap", why: "**if** dan keyin Present Simple: **rains**." },
    { k: "fix", wrong: "By 2030 I will save enough money for a flat.", a: ["By 2030 I will have saved enough money for a flat.", "By 2030 I'll have saved enough money for a flat."], hint: "By + yil", why: "**By 2030** → **will have saved**." },
    { k: "translate", uz: "Yangi kutubxona may oyida ochilishi kerak.", a: ["The new library is due to open in May.", "The new library is due to be opened in May.", "The new library is due to open in May."], why: "**be due to + V1** — rejaga ko'ra." },
    { k: "translate", uz: "Qaytganimda sizga qo'ng'iroq qilaman.", a: ["I'll call you when I get back.", "I will call you when I get back.", "I'll phone you when I get back.", "I will phone you when I get back.", "I'll call you when I come back.", "I will call you when I come back."], why: "**when** dan keyin Present Simple." },
    { k: "dictation", say: "By the time you arrive, we'll have finished dinner.", uz: "Siz yetib kelguncha, biz kechki ovqatni tugatgan bo'lamiz.", why: "**By the time** + Present Simple, bosh gapda **will have finished**." },
    { k: "choice", q: "Look at the sky! It ___ rain soon.", opts: ["is going to", "does", "was", "has"], a: 0, why: "Dalilga asoslangan bashorat: **is going to rain**." },
    { k: "speak", say: "By the time I'm thirty, I hope I will have found a good job.", uz: "O'ttiz yoshga yetganimda yaxshi ish topgan bo'lishimga umid qilaman." },
  ],
  quiz: [
    { k: "choice", q: "\"I've left my wallet at home.\" — \"Don't worry, I ___ you some money.\"", opts: ["'ll lend", "am going to lend", "lend", "have lent"], a: 0, why: "Taklif va tezkor qaror: **I'll lend**." },
    { k: "choice", q: "Wait here until the doctor ___ .", opts: ["comes", "will come", "is coming to", "would come"], a: 0, why: "**until** dan keyin Present Simple." },
    { k: "choice", q: "Next Friday at ten I ___ an exam, so I can't meet you.", opts: ["will be taking", "will have taken", "would take", "have taken"], a: 0, why: "Kelajakdagi ma'lum paytda davom etadigan ish: **will be taking**." },
    { k: "choice", q: "Qaysi gap noto'g'ri?", opts: ["The match is about to starting.", "The match is about to start.", "The match is due to start at six.", "The match is likely to start late."], a: 0, why: "**about to** + V1." },
    { k: "fill", q: "By next June, he ___ here for ten years. (work)", a: ["will have worked", "will have been working", "'ll have worked", "'ll have been working"], uz: "Kelasi iyunga kelib, u bu yerda o'n yil ishlagan bo'ladi.", why: "**By next June** + davomiylik: **will have worked / been working**." },
    { k: "fill", q: "We'll go for a walk when it ___ raining. (stop)", a: ["stops", "has stopped"], uz: "Yomg'ir to'xtaganda sayrga chiqamiz.", why: "**when** dan keyin Present Simple: **stops**." },
    { k: "order", uz: "Menimcha, bu juda qiziqarli bo'ladi.", words: ["I", "think", "it", "will", "be", "very", "interesting."], extra: ["is", "going"], alt: [["I", "think", "it'll", "be", "very", "interesting."]], why: "Fikr: **I think + will**." },
    { k: "translate", uz: "Ertaga shu paytda men samolyotda bo'laman.", a: ["This time tomorrow I'll be on a plane.", "This time tomorrow I will be on a plane.", "This time tomorrow I'll be flying.", "This time tomorrow I will be flying.", "At this time tomorrow I'll be flying.", "At this time tomorrow I will be flying."], why: "Kelajakdagi ma'lum paytda: **will be**." },
    { k: "fix", wrong: "I will call you when I will have time.", a: ["I will call you when I have time.", "I'll call you when I have time."], hint: "when-gap", why: "**when** dan keyin Present Simple." },
    { k: "tf", q: "*The company is on the verge of closing* gapi kompaniya yaqinda yopilib qolishi mumkinligini bildiradi.", a: true, why: "**on the verge of** — biror narsa arafasida." },
  ],
  summary: [
    "**will** — shu zahoti qaror, fikr, va'da; **going to** — oldindan reja va dalilga asoslangan bashorat; **Present Continuous** — kelishuv; **Present Simple** — jadval.",
    "**Future Continuous** (*will be + V-ing*) — kelajakdagi paytda davom etayotgan ish; **Future Perfect** (*will have + V3*) — shu paytgacha tugagan ish (*by, by the time*).",
    "**when, as soon as, until, before, if, by the time** dan keyin **Present Simple**, will emas: ~~When I will arrive~~.",
    "**be about to, be due to, be likely to, be on the verge of** — yaqin kelajak va ehtimol qoliplari; keyin V1 (yoki -ing).",
    "Tipik xatolar: ~~I think I go~~, ~~about to starting~~, ~~By 2030 I will save~~ (→ **will have saved**).",
  ],
  homework: "Kelasi besh yildagi rejalaringiz haqida 8 ta gap yozing: 2 ta **will** (fikr), 2 ta **going to** (reja), 1 ta **Future Continuous** (*this time next year…*), 2 ta **Future Perfect** (*by 2030…*) va 1 ta **be likely to / be about to**. Keyin vaqt gaplarida (*when, as soon as*) **will** ishlatmaganingizni tekshiring.",
};

export default lesson;
