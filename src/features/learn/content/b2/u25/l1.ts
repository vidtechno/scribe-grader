import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u25-l1",
  title: "Mixed conditionals",
  titleUz: "Aralash shart gaplar: If I had studied harder, I would be a doctor now",
  goal: "**Aralash shart gaplarni** (*mixed conditionals*) to'g'ri tuzasiz: o'tgan sabab → hozirgi natija (*If I had studied harder, I would be a doctor now*) va hozirgi holat → o'tgan natija (*If I weren't so shy, I would have asked her*). Suhbat, intervyu va IELTS speaking'da hayotingiz haqida pishiq gapirasiz va **If I would have known** kabi xatodan qochasiz.",
  slides: [
    {
      title: "Nima uchun kerak? Uchta shart gapdan tashqari",
      blocks: [
        { t: "p", md: "Intervyuda: *«Nega bu kasbni tanlamadingiz?»* Suhbatda: *«Agar o'sha paytda ko'chib ketganimda, hozir boshqacha yashardim.»* Bunday gaplarda **o'tgan voqea** bugungi hayotga ta'sir qiladi, shuning uchun B1'dagi oddiy second yoki third conditional yetmaydi. Bunga **aralash shart gap** (*mixed conditional*) kerak: if-qism va asosiy qism **turli vaqtga** tegishli bo'ladi." },
        {
          t: "table", head: ["Tur", "If-qism", "Asosiy qism", "Misol"], speak: [3],
          rows: [
            ["Second", "If + Past Simple", "would + V1", "If I had more time, I would learn Chinese."],
            ["Third", "If + Past Perfect", "would have + V3", "If I had left earlier, I would have caught the train."],
            ["Mixed A: o'tgan sabab → hozirgi natija", "If + Past Perfect", "would + V1", "If I had studied law, I would be a lawyer now."],
            ["Mixed B: hozirgi holat → o'tgan natija", "If + Past Simple", "would have + V3", "If I weren't so shy, I would have asked her."],
          ],
        },
        { t: "tip", tone: "info", md: "Qoida oddiy: **if-qismdagi zamon** sababning vaqtini, **asosiy qismdagi shakl** natijaning vaqtini ko'rsatadi. Ikkalasini alohida o'ylang." },
        { t: "check", ex: { k: "choice", q: "Qaysi gapda sabab **o'tgan**, natija esa **hozirgi**?", opts: ["If I had taken that job, I would have moved abroad.", "If I had taken that job, I would be living abroad now.", "If I took that job, I would move abroad.", "If I take that job, I will move abroad."], a: 1, why: "**had taken** (o'tgan sabab) + **would be living … now** (hozirgi natija) — Mixed A. Birinchisi third conditional (natija ham o'tgan)." } },
      ],
    },
    {
      title: "Mixed A: o'tgan sabab, hozirgi natija",
      blocks: [
        { t: "p", md: "**If + Past Perfect, … would + V1.** O'tgan zamonda bo'lmagan (yoki bo'lgan) voqea hozirgi vaziyatni o'zgartirgan bo'lardi. Hozirgi natijani odatda *now, today, these days, still, at the moment* ko'rsatadi." },
        {
          t: "examples", items: [
            { en: "If I had saved more money, I would have my own flat now.", uz: "Agar ko'proq pul tejaganimda, hozir o'z uyim bo'lardi." },
            { en: "If she hadn't missed the bus, she would be here now.", uz: "Agar u avtobusga kechikmaganida, hozir shu yerda bo'lardi." },
            { en: "We wouldn't be in this mess if you had listened to me.", uz: "Agar meni tinglaganingizda, biz hozir bu ahvolda bo'lmasdik." },
            { en: "If he had taken the medicine, he wouldn't still be ill today.", uz: "Agar u dorini ichganida, bugun hali ham kasal bo'lmasdi." },
          ],
        },
        { t: "p", md: "Asosiy qismda **would** o'rniga **could** (imkoniyat) yoki **might** (ehtimol) ham ishlatiladi: *If I had learnt French, I could work in Geneva now.*" },
        { t: "check", ex: { k: "fill", q: "If Anna hadn't missed the bus, she ___ here now. (would + be)", a: ["would be", "'d be"], why: "Natija hozirgi (*now*), shuning uchun **would + V1**: *would be*, **would have been** emas." } },
        { t: "check", ex: { k: "choice", q: "If I hadn't taken that job, I ___ unemployed now.", opts: ["would be", "would have been", "would being", "had been"], a: 0, why: "**now** — hozirgi natija: **would + V1**. *would have been* — o'tgan natija bo'lardi." } },
      ],
    },
    {
      title: "Mixed B: hozirgi holat, o'tgan natija",
      blocks: [
        { t: "p", md: "**If + Past Simple (were), … would have + V3.** Bu yerda sabab — **doimiy xususiyat yoki hozirgi holat** (*I'm shy, he is stubborn, she doesn't speak French*), natija esa **o'tgan zamonda** edi. Ya'ni: «Agar men boshqacha odam bo'lsam, o'sha paytda boshqacha qilgan bo'lardim»." },
        {
          t: "examples", items: [
            { en: "If I were more organised, I would have finished the report yesterday.", uz: "Agar men tartibliroq bo'lsam, hisobotni kecha tugatgan bo'lardim." },
            { en: "If he weren't so stubborn, he would have apologised long ago.", uz: "Agar u o'jar bo'lmasa, allaqachon kechirim so'ragan bo'lardi." },
            { en: "If she didn't speak French, she wouldn't have got the job in Lyon.", uz: "Agar u fransuzcha bilmasa, Lyondagi ishni olmagan bo'lardi." },
            { en: "I'd have gone to the concert if I liked jazz.", uz: "Agar jazzni yoqtirsam, konsertga borgan bo'lardim." },
          ],
        },
        { t: "tip", tone: "good", md: "**were** barcha shaxslar bilan ishlatiladi: *If I were, if he were*. Gaplashuvda *If he was* ham uchraydi, lekin yozma va rasmiy ingliz tilida **were** to'g'ri." },
        { t: "check", ex: { k: "choice", q: "If I weren't so shy, I ___ him to the party last night.", opts: ["would have invited", "would invite", "had invited", "will invite"], a: 0, why: "Natija o'tgan (*last night*): **would have + V3**. Sabab — hozirgi xususiyat (*shy*): Past Simple *weren't*." } },
        { t: "check", ex: { k: "fill", q: "If he ___ so stubborn, he would have listened to our advice. (not be)", a: ["weren't", "were not", "wasn't", "was not"], why: "Doimiy xususiyat — **Past Simple**: *If he weren't stubborn…* Rasmiy yozuvda **weren't**." } },
      ],
    },
    {
      title: "Qaysi shakl? Ma'no, tinish belgisi, nutq",
      blocks: [
        { t: "p", md: "Bir xil if-qismni uchta usulda davom ettirish mumkin. Farq **natija qachon bo'lgani**da:" },
        {
          t: "table", head: ["Gap", "Natija qachon?"], speak: [0],
          rows: [
            ["If I had studied medicine, I would have become a doctor.", "O'tgan (third): hikoya tugagan, hozir haqida gap yo'q."],
            ["If I had studied medicine, I would be a doctor now.", "Hozir (mixed): o'sha tanlov hozirgi hayotimni belgilaydi."],
            ["If I studied medicine, I would become a doctor.", "Kelasi/hozir (second): hali tanlash mumkin, lekin real emas."],
          ],
        },
        { t: "p", md: "**Tinish belgisi:** if-qism boshda bo'lsa, **vergul** qo'yiladi; asosiy qism birinchi kelsa, vergul kerak emas. **Nutqda** qisqartmalar: *If I'd known, I'd be happier.* Diqqat: **if-qismda 'd = had**, asosiy qismda **'d = would**." },
        { t: "p", md: "**Rasmiy uslub:** *if* tushib qoladi va **had** gap boshiga chiqadi: *Had I accepted the offer, I would be earning more now.* Bu IELTS writing va rasmiy xatlarda yaxshi taassurot qoldiradi." },
        { t: "check", ex: { k: "tf", q: "*If I'd studied medicine, I'd be a doctor now.* gapi men hozir shifokor emasligimni bildiradi.", a: true, why: "Mixed A: o'tgan tanlov (*studied medicine*) amalga oshmagan, shuning uchun hozir shifokor emasman." } },
        { t: "check", ex: { k: "choice", q: "Rasmiy shaklni tanlang: «Agar taklifni qabul qilganimda, hozir ko'proq topgan bo'lardim.»", opts: ["Had I accepted the offer, I would be earning more now.", "If had I accepted the offer, I would be earning more now.", "Had I would accept the offer, I would be earning more now.", "Did I accept the offer, I would be earning more now."], a: 0, why: "Rasmiy inversiya: **Had + ega + V3, …** (*if* ishlatilmaydi)." } },
      ],
    },
    {
      title: "Tipik xatolar (o'zbek tilidan interferensiya)",
      blocks: [
        { t: "p", md: "O'zbek tilida **-sa / -ganimda** qo'shimchasi har xil zamonda bir xil ishlaydi, shuning uchun if-qismdagi zamonni tez-tez adashtiramiz. Mana eng ko'p uchraydigan xatolar." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["If I had known, I would have told you.", "If I hadn't missed the train, I wouldn't be late now.", "If she had taken the job, she would be living in Paris now."] },
          bad: { title: "Xato", items: ["If I would have known, I would have told you.", "If I didn't miss the train, I wouldn't be late now.", "If she had taken the job, she would have lived in Paris now."] },
        },
        { t: "tip", tone: "warn", md: "**1.** If-qismda **would have** ishlatmang: **had + V3** kerak (*would* faqat asosiy qismda). **2.** O'tgan sabab uchun Past Simple emas, **Past Perfect**. **3.** Natija hozirgi bo'lsa (*now*), asosiy qismda **would have + V3** emas, **would + V1**." },
        { t: "check", ex: { k: "fix", wrong: "If I would have known about the delay, I would have called you.", a: ["If I had known about the delay, I would have called you.", "If I'd known about the delay, I would have called you.", "If I'd known about the delay, I'd have called you.", "If I had known about the delay, I'd have called you."], hint: "if-qismda would ishlatilmaydi", why: "If-qismda **had + V3**: *If I had known…*. **would have** faqat asosiy qismda." } },
        { t: "check", ex: { k: "fix", wrong: "If I didn't miss the train, I wouldn't be late now.", a: ["If I hadn't missed the train, I wouldn't be late now.", "If I had not missed the train, I wouldn't be late now.", "If I hadn't missed the train, I would not be late now."], hint: "o'tgan sabab", why: "Poyezdni o'tkazib yuborish — o'tgan voqea: **hadn't missed** (Past Perfect)." } },
        { t: "check", ex: { k: "fix", wrong: "If she had taken that job, she would have lived in Paris now.", a: ["If she had taken that job, she would be living in Paris now.", "If she had taken that job, she would live in Paris now.", "If she'd taken that job, she'd be living in Paris now.", "If she'd taken that job, she'd live in Paris now."], hint: "now — hozirgi natija", why: "**now** hozirgi natijani bildiradi: **would be living / would live**, *would have lived* emas." } },
      ],
    },
    {
      title: "O'qing: Rad etilgan stipendiya",
      blocks: [
        {
          t: "text", title: "The scholarship I turned down", voice: "emma",
          en: "Ten years ago I was offered a place on a master's course in Edinburgh, but I turned it down. I was only twenty-three, and the idea of living alone in another country frightened me. My parents said the decision was mine, and I decided to stay. Today I work as a project assistant in Tashkent, and I am quite happy, but I often wonder about that choice. If I had gone to Edinburgh, I would probably have a different career now. If I weren't so cautious by nature, I would have accepted the place without a second thought. Of course, hindsight is easy. If I had left, I might never have met my husband, and I wouldn't be living in the house I love today. So I try not to blame myself. I simply remind myself that every path has a price.",
          uz: "O'n yil oldin menga Edinburgdagi magistratura kursida o'rin taklif qilindi, lekin men rad etdim. Men atigi yigirma uch yoshda edim va boshqa mamlakatda yolg'iz yashash fikri meni qo'rqitardi. Ota-onam qaror o'zimniki, dedi va men qolishga qaror qildim. Bugun men Toshkentda loyiha yordamchisi bo'lib ishlayman va ancha xursandman, lekin o'sha tanlov haqida tez-tez o'ylayman. Agar Edinburgga borganimda, hozir ehtimol boshqa kasbda bo'lardim. Agar tabiatan bunchalik ehtiyotkor bo'lmasam, o'rinni ikkilanmasdan qabul qilgan bo'lardim. Albatta, o'tmishga qarab baho berish oson. Agar ketganimda, ehtimol erimni uchratmagan bo'lardim va bugun yaxshi ko'rgan uyda yashamasdim. Shuning uchun o'zimni ayblamaslikka harakat qilaman. Shunchaki har bir yo'lning o'z narxi borligini eslayman.",
        },
        { t: "check", ex: { k: "tf", q: "The writer thinks she might not have met her husband if she had gone to Edinburgh.", a: true, why: "*If I had left, I might never have met my husband* — ehtimol uchratmagan bo'lardi." } },
        { t: "check", ex: { k: "choice", q: "Why does the writer say \"If I weren't so cautious by nature, I would have accepted the place\"?", opts: ["Because her character (now) explains what she did then.", "Because she did accept the place.", "Because she is not cautious.", "Because she wants to go next year."], a: 0, why: "Mixed B: hozirgi xususiyat (*cautious by nature*) → o'tgan natija (*didn't accept*)." } },
      ],
    },
    {
      title: "Dialog: Ehtimol, boshqacha bo'lardi",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Sara", en: "You look thoughtful, Ben. What's on your mind?", uz: "Chuqur o'yga tolgandek ko'rinasiz, Ben. Nima haqida o'ylayapsiz?" },
            { who: "Ben", en: "An old classmate has just opened her own company. If I had taken the risk years ago, I might have my own business now.", uz: "Sobiq sinfdoshim o'z kompaniyasini ochibdi. Agar yillar oldin tavakkal qilganimda, hozir o'z biznesim bo'lishi mumkin edi." },
            { who: "Sara", en: "But you passed up that offer because you had a baby on the way.", uz: "Lekin siz bu taklifni farzandingiz tug'ilishi arafasida rad etgan edingiz." },
            { who: "Ben", en: "True. If we hadn't been expecting Lily, I would have said yes.", uz: "To'g'ri. Agar Lilini kutmaganimizda, rozi bo'lgan bo'lardim." },
            { who: "Sara", en: "And if you'd said yes, you would be travelling every week now. Would you really want that?", uz: "Agar rozi bo'lganingizda, hozir har hafta safarda bo'lardingiz. Buni chindan xohlarmidingiz?" },
            { who: "Ben", en: "Probably not. I'm too much of a homebody. If I weren't, I would have moved abroad long ago.", uz: "Ehtimol yo'q. Men uyni yaxshi ko'raman. Agar bunday bo'lmasam, allaqachon chet elga ko'chib ketgan bo'lardim." },
            { who: "Sara", en: "Exactly. It was a gamble either way, and you chose your family.", uz: "Aynan. Ikkala yo'l ham tavakkal edi, siz oilangizni tanladingiz." },
            { who: "Ben", en: "You're right. With hindsight, I made a choice I can live with.", uz: "To'g'ri aytasiz. Hozir o'ylab ko'rsam, men o'zim bilan yashay oladigan tanlovni qilgan ekanman." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "Why did Ben pass up the offer?", opts: ["His family was growing and he had a baby on the way.", "He disliked his classmate.", "He had no experience.", "The company was too far away."], a: 0, why: "*you had a baby on the way* — oilaviy sabab." } },
      ],
    },
  ],
  words: [
    { en: "hindsight", uz: "keyin anglash, o'tgan voqeaga hozirgi nazar", ipa: "ˈhaɪnd.saɪt", pos: "noun", ex: "With hindsight, I should have asked for advice.", exUz: "Hozir o'ylab ko'rsam, maslahat so'rashim kerak edi." },
    { en: "gamble", uz: "tavakkal, xavfli qaror", ipa: "ˈɡæm.bəl", pos: "noun / verb", ex: "Moving abroad was a gamble, but it paid off.", exUz: "Chet elga ko'chish tavakkal edi, lekin o'zini oqladi." },
    { en: "seize", uz: "(imkoniyatdan) darhol foydalanmoq", ipa: "siːz", pos: "verb", ex: "She seized the chance to work in Berlin.", exUz: "U Berlinda ishlash imkoniyatidan foydalanib qoldi." },
    { en: "pass up", uz: "(imkoniyatni) qo'ldan chiqarmoq, rad etmoq", ipa: "pɑːs ʌp", pos: "phrasal verb", ex: "I passed up the offer, and I still regret it.", exUz: "Men taklifni rad etdim va hali ham afsuslanaman." },
    { en: "take the plunge", uz: "jur'at etib qaror qilmoq", ipa: "teɪk ðə plʌndʒ", pos: "idiom", ex: "After years of doubt, they took the plunge and opened a café.", exUz: "Yillar davomidagi ikkilanishdan keyin ular jur'at etib kafe ochishdi." },
    { en: "career path", uz: "kasbiy yo'l", ipa: "kəˈrɪə pɑːθ", pos: "noun", ex: "A different career path would have suited her better.", exUz: "Boshqa kasbiy yo'l unga ko'proq mos kelardi." },
    { en: "impulsive", uz: "o'ylamay, bir lahzada qaror qiladigan", ipa: "ɪmˈpʌl.sɪv", pos: "adj", ex: "It was an impulsive decision, and she paid for it.", exUz: "Bu o'ylamay qilingan qaror edi va u buning evaziga to'ladi." },
    { en: "foresee", uz: "oldindan ko'rmoq, bashorat qilmoq", ipa: "fɔːˈsiː", pos: "verb", ex: "Nobody could have foreseen the problems.", exUz: "Hech kim muammolarni oldindan ko'ra olmasdi." },
    { en: "setback", uz: "to'siq, muvaffaqiyatsizlik, orqaga tortuvchi hodisa", ipa: "ˈset.bæk", pos: "noun", ex: "The injury was a serious setback for the team.", exUz: "Jarohat jamoa uchun jiddiy zarba bo'ldi." },
    { en: "stroke of luck", uz: "kutilmagan omad", ipa: "strəʊk əv lʌk", pos: "idiom", ex: "Meeting my manager on the train was a stroke of luck.", exUz: "Poyezdda menejerimni uchratish kutilmagan omad edi." },
  ],
  practice: [
    { k: "choice", q: "If I had taken that job in Dubai, I ___ in London now.", opts: ["wouldn't be living", "wouldn't have lived", "won't live", "didn't live"], a: 0, why: "Sabab o'tgan (*had taken*), natija hozirgi (*now*): **would(n't) be living**." },
    { k: "choice", q: "Qaysi gap **mixed conditional** (o'tgan sabab → hozirgi natija)?", opts: ["If she studied art, she would be a designer.", "If she had studied art, she would have been a designer.", "If she had studied art, she would be a designer now.", "If she studies art, she will be a designer."], a: 2, why: "**had studied** + **would be … now** = Mixed A. Birinchi gap — second, ikkinchisi — third, to'rtinchisi — first conditional." },
    { k: "listen", say: "If I hadn't met him, I wouldn't be here today.", opts: ["If I didn't meet him, I wouldn't be here today.", "If I hadn't met him, I wouldn't be here today.", "If I hadn't met him, I wouldn't have been here today.", "If I haven't met him, I won't be here today."], a: 1, why: "**hadn't met** + **wouldn't be … today** — o'tgan sabab, hozirgi natija." },
    { k: "fill", q: "If Anna hadn't missed the bus, she ___ here now. (would + be)", a: ["would be", "'d be"], uz: "Agar Anna avtobusga kechikmaganida, hozir shu yerda bo'lardi.", why: "Natija hozirgi: **would + be**." },
    { k: "fill", q: "If he ___ so careless, he wouldn't have lost the contract. (not be)", a: ["weren't", "were not", "wasn't", "was not"], uz: "Agar u bunchalik beparvo bo'lmasa, shartnomani yo'qotmagan bo'lardi.", why: "Hozirgi xususiyat: **Past Simple** (*weren't*)." },
    { k: "order", uz: "Agar ko'proq o'qiganimda, hozir yaxshiroq ishim bo'lardi.", words: ["If", "I", "had", "studied", "harder,", "I", "would", "have", "a", "better", "job", "now."], extra: ["will", "was"], alt: [["I", "would", "have", "a", "better", "job", "now", "if", "I", "had", "studied", "harder."]], why: "**If + had + V3, … would + V1**." },
    { k: "order", uz: "Agar u bunchalik beparvo bo'lmasa, shartnomani yo'qotmagan bo'lardi.", words: ["If", "he", "weren't", "so", "careless,", "he", "wouldn't", "have", "lost", "the", "contract."], extra: ["hadn't", "lose"], why: "**If + Past Simple, … would have + V3**." },
    { k: "translate", uz: "Agar o'sha paytda ko'proq pul tejaganimda, hozir o'z uyim bo'lardi.", a: ["If I had saved more money then, I would have my own house now.", "If I had saved more money then, I would have my own home now.", "If I had saved more money at that time, I would have my own house now.", "If I'd saved more money then, I'd have my own house now.", "If I had saved more money then, I would have a house of my own now.", "If I had saved more money then, I would own a house now."], why: "O'tgan sabab → hozirgi natija: **had saved … would have … now**." },
    { k: "translate", uz: "Agar men inglizcha gapirmasam, o'sha ishni olmagan bo'lardim.", a: ["If I didn't speak English, I wouldn't have got that job.", "If I didn't speak English, I wouldn't have got the job.", "If I couldn't speak English, I wouldn't have got that job.", "If I didn't speak English, I wouldn't have gotten that job.", "If I couldn't speak English, I wouldn't have got the job."], why: "Hozirgi holat → o'tgan natija: **didn't speak … wouldn't have got**." },
    { k: "fix", wrong: "If I would have known about the delay, I would have called you.", a: ["If I had known about the delay, I would have called you.", "If I'd known about the delay, I would have called you.", "If I'd known about the delay, I'd have called you.", "If I had known about the delay, I'd have called you."], hint: "if-qismda would yo'q", why: "If-qismda **had + V3**; *would* faqat asosiy qismda." },
    { k: "fix", wrong: "If I didn't miss the train, I wouldn't be late now.", a: ["If I hadn't missed the train, I wouldn't be late now.", "If I had not missed the train, I wouldn't be late now.", "If I hadn't missed the train, I would not be late now."], hint: "o'tgan sabab", why: "Voqea o'tgan, shuning uchun **Past Perfect**: *hadn't missed*." },
    { k: "match", pairs: [["hindsight", "keyin anglash"], ["gamble", "xavfli tavakkal"], ["seize", "imkoniyatdan foydalanib qolmoq"], ["pass up", "imkoniyatni qo'ldan chiqarmoq"], ["setback", "to'siq, muvaffaqiyatsizlik"]] },
    { k: "tf", q: "*If I had left earlier, I would be at home now.* gapida if-qism o'tgan zamonga, natija esa hozirgi zamonga tegishli.", a: true, why: "**had left** — o'tgan sabab; **would be at home now** — hozirgi natija." },
    { k: "choice", q: "If she weren't so impulsive, she ___ that flat without seeing it.", opts: ["wouldn't have bought", "wouldn't buy", "won't have bought", "hadn't bought"], a: 0, why: "Hozirgi xususiyat (*impulsive*) → o'tgan natija: **wouldn't have bought**." },
    { k: "dictation", say: "If I hadn't taken the risk, I wouldn't be running my own company now.", uz: "Agar tavakkal qilmaganimda, hozir o'z kompaniyamni boshqarmasdim.", why: "**hadn't taken** + **wouldn't be running … now**." },
    { k: "speak", say: "If I had accepted the offer, I would be living abroad now.", uz: "Agar taklifni qabul qilganimda, hozir chet elda yashagan bo'lardim." },
  ],
  quiz: [
    { k: "choice", q: "If I ___ harder at school, I would be a doctor now.", opts: ["had studied", "studied", "would have studied", "have studied"], a: 0, why: "O'tgan sabab: **had + V3**. *would have* if-qismda ishlatilmaydi." },
    { k: "choice", q: "If Tom weren't so lazy, he ___ the exam last month.", opts: ["would have passed", "would pass", "will have passed", "passed"], a: 0, why: "**last month** — o'tgan natija: **would have + V3**." },
    { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["If I'd known, I would have told you.", "If I would have known, I would have told you.", "If I have known, I would tell you.", "If I knew, I had told you."], a: 0, why: "If-qismda **had known** (*I'd known*), asosiy qismda **would have told**." },
    { k: "fill", q: "If we hadn't moved to Samarkand, we ___ in Tashkent now. (would + be)", a: ["would be", "'d be"], uz: "Agar Samarqandga ko'chmaganimizda, hozir Toshkentda bo'lardik.", why: "Hozirgi natija: **would + be**." },
    { k: "fill", q: "If she ___ a bit more careful, she wouldn't have broken the laptop. (be)", a: ["were", "was"], uz: "Agar u biroz ehtiyotkorroq bo'lsa, noutbukni sindirmagan bo'lardi.", why: "Hozirgi xususiyat: Past Simple **were**." },
    { k: "order", uz: "Agar sizni uchratmaganimda, hozir bunchalik baxtli bo'lmasdim.", words: ["If", "I", "hadn't", "met", "you,", "I", "wouldn't", "be", "so", "happy", "now."], extra: ["didn't", "been"], why: "**hadn't met** + **wouldn't be … now**." },
    { k: "translate", uz: "Agar ular bu shaharga ko'chib kelmaganida, hozir boshqa mamlakatda yashagan bo'lardilar.", a: ["If they hadn't moved to this city, they would be living in another country now.", "If they hadn't moved to this city, they would live in another country now.", "If they hadn't moved here, they would be living in another country now.", "If they hadn't moved to this city, they would be living in a different country now."], why: "O'tgan sabab → hozirgi natija: **hadn't moved … would be living**." },
    { k: "fix", wrong: "If she had taken that job, she would have lived in Paris now.", a: ["If she had taken that job, she would be living in Paris now.", "If she had taken that job, she would live in Paris now.", "If she'd taken that job, she'd be living in Paris now.", "If she'd taken that job, she'd live in Paris now."], hint: "now — hozirgi natija", why: "**now** bilan **would be living / would live**; *would have lived* o'tgan natija." },
    { k: "tf", q: "*If I would have studied harder, I would be a doctor now* — bu to'g'ri aralash shart gap.", a: false, why: "If-qismda **would have** emas, **had studied** bo'lishi kerak." },
    { k: "listen", say: "If I had listened to my parents, I would be a lawyer today.", opts: ["If I had listened to my parents, I would have been a lawyer.", "If I listened to my parents, I would be a lawyer today.", "If I had listened to my parents, I would be a lawyer today.", "If I would listen to my parents, I was a lawyer today."], a: 2, why: "**had listened** + **would be … today**." },
  ],
  summary: [
    "Aralash shart gap: if-qism va asosiy qism **turli vaqtga** tegishli. **Mixed A**: If + Past Perfect, … would + V1 (o'tgan sabab → hozirgi natija).",
    "**Mixed B**: If + Past Simple (*were*), … would have + V3 (hozirgi holat yoki xarakter → o'tgan natija): *If I weren't so shy, I would have asked her.*",
    "Natijaning vaqtini **now / yesterday / last year** so'zlari va asosiy qismning shakli aniqlaydi. *would* o'rniga *could, might* ham mumkin.",
    "Nutqda **'d** ikki xil: if-qismda *had*, asosiy qismda *would*. Rasmiy: **Had I known, …**",
    "Xato: ~~If I would have known~~ → **If I had known**; ~~If I didn't miss the train~~ → **If I hadn't missed the train**.",
  ],
  homework: "Hayotingizdagi uchta muhim tanlov haqida (o'qish, ish, ko'chish) 3 ta aralash shart gap yozing: ikkitasi **Mixed A** (*If I had …, I would … now*), bittasi **Mixed B** (*If I weren't …, I would have …*). Keyin har bir gapda tekshiring: if-qismda **would** yo'qmi? Yozganlaringizdan birini ovoz chiqarib ayting va yozib oling.",
};

export default lesson;
