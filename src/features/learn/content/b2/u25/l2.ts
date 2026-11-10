import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u25-l2",
  title: "Wish, if only and regrets",
  titleUz: "Wish va if only: hozirgi, o'tgan va kelasi zamon pushaymonligi",
  goal: "**I wish** va **If only** bilan hozirgi holatdan norozilik (*I wish I lived by the sea*), o'tgan zamon pushaymonligi (*I wish I had studied harder*) va birovning xatti-harakatidan noroziligingizni (*I wish you would stop*) aytasiz. **I wish I have** va **I wish you will** kabi xatolardan qochasiz.",
  slides: [
    {
      title: "Wish nima uchun kerak?",
      blocks: [
        { t: "p", md: "Hayotda hammamiz «qani edi…» deymiz: *Qani edi, vaqtim ko'proq bo'lsa. Qani edi, o'shanda jim turmaganimda. Qani edi, u meni tinglasa.* Inglizchada bu ma'noni **wish** va **if only** beradi. Muhim: **zamon bir qadam orqaga suriladi** — xuddi shart gaplardagi kabi, chunki gap **haqiqatga to'g'ri kelmaydigan** narsa haqida." },
        {
          t: "table", head: ["Nima haqida", "Qolip", "Misol"], speak: [2],
          rows: [
            ["Hozirgi holat (o'zgarmaydi)", "wish + Past Simple", "I wish I lived by the sea."],
            ["O'tgan pushaymonlik", "wish + Past Perfect", "I wish I had studied harder."],
            ["Birovning odati / vaziyat o'zgarishi", "wish + would + V1", "I wish you would stop interrupting."],
            ["Qobiliyat, imkoniyat", "wish + could", "I wish I could play the piano."],
          ],
        },
        { t: "tip", tone: "info", md: "**If only** = *wish*, lekin his-tuyg'u kuchliroq: *If only I knew the answer! If only she hadn't said that!* Ko'pincha undov bilan aytiladi." },
        { t: "check", ex: { k: "choice", q: "*I wish I lived by the sea.* — Men hozir…", opts: ["dengiz bo'yida yashamayman", "dengiz bo'yida yashayman", "dengiz bo'yida yashaganman", "dengiz bo'yiga ko'chaman"], a: 0, why: "**wish + Past Simple** — hozirgi haqiqatga teskari: aslida dengiz bo'yida yashamayman." } },
      ],
    },
    {
      title: "Hozirgi holat: wish + Past Simple (were)",
      blocks: [
        { t: "p", md: "Hozir yoqmaydigan holatni o'zgartirishni xohlasak, fe'lni **Past Simple**'da ishlatamiz, garchi gap hozirgi zamon haqida bo'lsa ham. **Be** fe'li barcha shaxslarda **were**: *I wish I were taller. I wish he were here.* (Gaplashuvda *was* ham eshitiladi.)" },
        {
          t: "examples", items: [
            { en: "I wish I had more free time.", uz: "Qani edi, bo'sh vaqtim ko'proq bo'lsa." },
            { en: "I wish I were on holiday right now.", uz: "Qani edi, hozir ta'tilda bo'lsam." },
            { en: "She wishes she lived closer to her family.", uz: "U oilasiga yaqinroq yashashni istardi (lekin yashamaydi)." },
            { en: "I wish I could speak Spanish fluently.", uz: "Qani edi, ispan tilida ravon gapira olsam." },
            { en: "If only I knew what to say!", uz: "Nima deyishni bilsam edi!" },
          ],
        },
        { t: "tip", tone: "good", md: "**Wish** va **hope**ni farqlang. **Hope** — haqiqatan bo'lishi mumkin bo'lgan narsa: *I hope you pass the exam.* **Wish** — haqiqatga teskari yoki amalga oshishi qiyin narsa: *I wish I could pass without studying.* *I wish you luck* (= omad tilayman) — alohida, qat'iy ibora." },
        { t: "check", ex: { k: "fill", q: "I'm so tired. I wish I ___ on holiday right now. (be)", a: ["were", "was"], why: "Hozirgi unreal holat: **Past Simple**. *Be* uchun **were** (yoki norasmiy *was*)." } },
        { t: "check", ex: { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["I wish I have a bigger flat.", "I wish I had a bigger flat.", "I wish I would have a bigger flat.", "I wish I will have a bigger flat."], a: 1, why: "**wish + Past Simple** (*had*). *have, would have, will have* — xato." } },
      ],
    },
    {
      title: "O'tgan zamon pushaymonligi: wish + Past Perfect",
      blocks: [
        { t: "p", md: "O'tgan zamonda bo'lib o'tgan narsani o'zgartirib bo'lmaydi. Shuning uchun pushaymonlikda zamonni **yana bir qadam orqaga** suramiz: **wish + Past Perfect** (*had + V3*)." },
        {
          t: "examples", items: [
            { en: "I wish I had studied harder at school.", uz: "Qani edi, maktabda yaxshiroq o'qiganimda." },
            { en: "I wish I hadn't spent so much money on clothes.", uz: "Qani edi, kiyimga bunchalik ko'p pul sarflamaganimda." },
            { en: "She wishes she had told him the truth.", uz: "U unga haqiqatni aytmaganidan afsuslanadi." },
            { en: "If only we had left ten minutes earlier!", uz: "Qani edi, o'n daqiqa oldinroq chiqqanimizda!" },
            { en: "I wish I could have gone to the concert.", uz: "Qani edi, konsertga bora olganimda (borolmadim)." },
          ],
        },
        {
          t: "table", head: ["Qaysi vaqt haqida", "wish +", "Ma'nosi"], speak: [0],
          rows: [
            ["I wish I had a car.", "Past Simple", "Hozir mashinam yo'q."],
            ["I wish I had had a car.", "Past Perfect", "O'sha paytda mashinam yo'q edi."],
            ["I wish I could drive.", "could + V1", "Hozir haydashni bilmayman."],
            ["I wish I could have driven.", "could have + V3", "O'sha paytda haydash imkoni bo'lmadi."],
          ],
        },
        { t: "tip", tone: "info", md: "**Wish + Past Perfect** gapini **third conditional** bilan bog'lash mumkin: *I wish I had left earlier. If I had left earlier, I wouldn't have missed the train.* Ikkalasi ham bir xil pushaymonlik." },
        { t: "check", ex: { k: "fill", q: "I wish I ___ so much money on clothes last month. (not spend)", a: ["hadn't spent", "had not spent"], why: "O'tgan pushaymonlik: **had(n't) + V3** — *hadn't spent*." } },
        { t: "check", ex: { k: "choice", q: "I missed the last train. I wish I ___ the station ten minutes earlier.", opts: ["had left", "left", "would leave", "leave"], a: 0, why: "O'tgan voqea haqida pushaymonlik: **had + V3**." } },
      ],
    },
    {
      title: "Wish + would: norozilik va o'zgarish istagi",
      blocks: [
        { t: "p", md: "**Wish + would** — boshqa odamning yoqmaydigan odati yoki bizga bog'liq bo'lmagan vaziyat haqida norozilik. Biz o'zgarishni xohlaymiz, lekin uni o'zimiz qila olmaymiz." },
        {
          t: "examples", items: [
            { en: "I wish you would stop interrupting me.", uz: "Qani edi, gapimni bo'lishni to'xtatsangiz." },
            { en: "I wish my neighbours wouldn't play loud music at night.", uz: "Qani edi, qo'shnilarim kechasi baland musiqa qo'ymasa." },
            { en: "I wish it would stop raining.", uz: "Qani edi, yomg'ir tinsa." },
            { en: "I wish the bus would hurry up.", uz: "Qani edi, avtobus tezroq kelsa." },
          ],
        },
        { t: "tip", tone: "warn", md: "**Wish + would** faqat **boshqa ega** bilan ishlatiladi. O'zimiz haqimizda bo'lsa **could** yoki Past Simple ishlatamiz: ~~I wish I would stop smoking~~ → **I wish I could stop smoking.** Kelajak rejasi uchun **wish** emas, **hope** kerak: ~~I wish you will come~~ → **I hope you will come.**" },
        { t: "check", ex: { k: "fill", q: "My flatmate never washes up. I wish he ___ his plates sometimes. (would + wash)", a: ["would wash", "'d wash"], why: "Boshqa odamning odati haqida norozilik: **wish + would + V1**." } },
        { t: "check", ex: { k: "choice", q: "Qaysi gap noto'g'ri?", opts: ["I wish it would stop snowing.", "I wish they wouldn't shout.", "I wish I would speak better English.", "I wish you would listen."], a: 2, why: "O'zimiz haqimizda **would** ishlatilmaydi: *I wish I spoke / could speak better English.*" } },
      ],
    },
    {
      title: "Tipik xatolar (o'zbek tilidan interferensiya)",
      blocks: [
        { t: "p", md: "O'zbekchada «qani edi, …-sam» iborasi barcha zamonlarda bir xil: *qani edi, ko'proq pulim bo'lsa / qani edi, kecha borsam.* Inglizchada esa har bir vaqt uchun alohida shakl bor. Shuning uchun quyidagi xatolar tez-tez uchraydi." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I wish I had more free time.", "I wish you would stop making that noise.", "If only I hadn't said that yesterday!"] },
          bad: { title: "Xato", items: ["I wish I have more free time.", "I wish you will stop making that noise.", "If only I didn't say that yesterday!"] },
        },
        { t: "tip", tone: "warn", md: "**1.** *wish* dan keyin hozirgi zamon (*have, will*) kelmaydi: zamon **bir qadam orqaga** suriladi. **2.** O'tgan zamon pushaymonligida **Past Perfect** kerak, oddiy Past Simple emas. **3.** *wish you will* emas: **wish you would** (norozilik) yoki **hope you will** (umid)." },
        { t: "check", ex: { k: "fix", wrong: "I wish I have more free time.", a: ["I wish I had more free time."], hint: "wish dan keyin zamon bir qadam orqaga", why: "**wish + Past Simple**: *I wish I had…*" } },
        { t: "check", ex: { k: "fix", wrong: "I wish you will stop making that noise.", a: ["I wish you would stop making that noise.", "I wish you'd stop making that noise."], hint: "norozilik: wish + would", why: "Birovning xatti-harakatidan norozilik: **wish + would**." } },
        { t: "check", ex: { k: "fix", wrong: "If only I didn't say that yesterday!", a: ["If only I hadn't said that yesterday!", "If only I had not said that yesterday!"], hint: "yesterday — o'tgan pushaymonlik", why: "O'tgan voqea: **If only + Past Perfect** (*hadn't said*)." } },
      ],
    },
    {
      title: "O'qing: Yoshlikdagi o'zimga xat",
      blocks: [
        {
          t: "text", title: "A note to my younger self", voice: "george",
          en: "I am thirty-five now, and sometimes I feel a pang of regret about the things I did, and the things I didn't do. I wish I had stayed in touch with my school friends. Most of them live abroad now, and we hardly ever talk. I wish I had spent more time with my grandfather before he died, instead of always being too busy. And I wish I didn't worry so much about what other people think. If only I could tell the twenty-year-old me all this! Of course, I can't change the past. I have come to terms with that, and I try not to dwell on missed opportunities. But I do wish people would tell young men earlier that time passes quickly. So if you are reading this: call your friends, visit your family, and stop waiting for the perfect moment.",
          uz: "Men hozir o'ttiz besh yoshdaman va ba'zan qilgan va qilmagan ishlarimdan afsuslanib og'rinaman. Qani edi, maktab do'stlarim bilan aloqani saqlab qolganimda. Ularning ko'pchiligi hozir chet elda yashaydi va biz deyarli gaplashmaymiz. Qani edi, bobom vafot etishidan oldin u bilan ko'proq vaqt o'tkazganimda, doim bandman, deb o'tirmasdan. Va qani edi, boshqalar nima deyishidan bunchalik tashvishlanmasam. Yigirma yoshli o'zimga bularning hammasini ayta olsam edi! Albatta, o'tmishni o'zgartira olmayman. Buni qabul qildim va qo'ldan boy berilgan imkoniyatlar haqida o'ylayvermaslikka harakat qilaman. Lekin odamlar yosh yigitlarga vaqt tez o'tishini ertaroq aytsa edi. Shuning uchun buni o'qiyotgan bo'lsangiz: do'stlaringizga qo'ng'iroq qiling, oilangizni ko'ring va mukammal lahzani kutishni to'xtating.",
        },
        { t: "check", ex: { k: "tf", q: "The writer still talks to his school friends every week.", a: false, why: "*we hardly ever talk* — deyarli gaplashmaydi." } },
        { t: "check", ex: { k: "choice", q: "\"I wish I didn't worry so much about what other people think\" — the writer…", opts: ["worries about it now and would like to change", "doesn't worry about it", "worried about it only in the past", "will stop worrying tomorrow"], a: 0, why: "**wish + Past Simple** — hozirgi holat (tashvishlanaman) va o'zgartirish istagi." } },
      ],
    },
    {
      title: "Dialog: Imtihondan keyin",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Tom", en: "How did the exam go, Emily?", uz: "Imtihon qanday o'tdi, Emily?" },
            { who: "Emily", en: "Badly. I wish I had started revising earlier. I left everything until the last night.", uz: "Yomon. Qani edi, takrorlashni ertaroq boshlaganimda. Hamma narsani oxirgi kechaga qoldirdim." },
            { who: "Tom", en: "Don't be too hard on yourself. I wish I knew the answers to half of those questions!", uz: "O'zingizga bunchalik qattiq bo'lmang. Qani edi, o'sha savollarning yarmiga javobni bilsam!" },
            { who: "Emily", en: "If only the exam hadn't been so long! I ran out of time.", uz: "Qani edi, imtihon bunchalik uzun bo'lmasa! Vaqtim yetmadi." },
            { who: "Tom", en: "I wish they would let us use dictionaries, honestly.", uz: "Rostini aytsam, qani edi, lug'atdan foydalanishga ruxsat berishsa." },
            { who: "Emily", en: "That would help a lot. Anyway, I wish I could stop worrying about the result.", uz: "Bu juda yordam berardi. Baribir, qani edi, natija haqida tashvishlanmasam." },
            { who: "Tom", en: "Why don't we go for a walk? Dwelling on it won't change anything.", uz: "Sayr qilib kelsak-chi? Buni o'ylayvermaslik bilan hech narsa o'zgarmaydi." },
            { who: "Emily", en: "You're right. Let's go. And next time I'll start a month earlier!", uz: "To'g'ri aytasiz. Ketdik. Keyingi safar bir oy oldin boshlayman!" },
          ],
        },
        { t: "check", ex: { k: "choice", q: "What does Emily regret?", opts: ["Not starting to revise earlier", "Choosing the wrong exam", "Missing the exam", "Not asking Tom for help"], a: 0, why: "*I wish I had started revising earlier* — o'tgan pushaymonlik." } },
      ],
    },
  ],
  words: [
    { en: "remorse", uz: "vijdon azobi, chuqur pushaymonlik", ipa: "rɪˈmɔːs", pos: "noun", ex: "He felt deep remorse for lying to his friend.", exUz: "U do'stiga yolg'on gapirgani uchun chuqur pushaymon bo'ldi." },
    { en: "wistful", uz: "sog'inch bilan o'ylaydigan, mahzun", ipa: "ˈwɪst.fəl", pos: "adj", ex: "She gave a wistful smile as she looked at the old photos.", exUz: "U eski suratlarga qarab mahzun jilmaydi." },
    { en: "yearn", uz: "intiqlik bilan orzu qilmoq", ipa: "jɜːn", pos: "verb", ex: "He yearned for the quiet life he had left behind.", exUz: "U ortda qoldirgan sokin hayotini sog'inardi." },
    { en: "dwell on", uz: "(bir narsani) tinmay o'ylayvermoq", ipa: "dwel ɒn", pos: "phrasal verb", ex: "There is no point dwelling on mistakes you can't change.", exUz: "O'zgartirib bo'lmaydigan xatolarni o'ylayverishdan foyda yo'q." },
    { en: "come to terms with", uz: "(og'ir voqeani) qabul qilmoq, ko'nikmoq", ipa: "kʌm tə tɜːmz wɪð", pos: "phrase", ex: "It took her a year to come to terms with the loss.", exUz: "Yo'qotishni qabul qilish unga bir yil vaqt oldi." },
    { en: "second thoughts", uz: "ikkilanish, qarorga shubha", ipa: "ˈsek.ənd θɔːts", pos: "noun", ex: "I'm having second thoughts about moving abroad.", exUz: "Chet elga ko'chish haqida ikkilanayapman." },
    { en: "irreversible", uz: "qaytarib bo'lmaydigan", ipa: "ˌɪr.ɪˈvɜː.sə.bəl", pos: "adj", ex: "Quitting without a plan can be an irreversible mistake.", exUz: "Rejasiz ishdan ketish qaytarib bo'lmaydigan xato bo'lishi mumkin." },
    { en: "make amends", uz: "xatoni to'g'rilamoq, kechirim olish uchun harakat qilmoq", ipa: "meɪk əˈmendz", pos: "phrase", ex: "He sent flowers to make amends for forgetting her birthday.", exUz: "U tug'ilgan kunini unutgani uchun xatosini to'g'rilash maqsadida gul yubordi." },
    { en: "pang", uz: "o'tkir og'riq, ichki sanchiq (his-tuyg'u)", ipa: "pæŋ", pos: "noun", ex: "She felt a pang of guilt when she saw his face.", exUz: "Uning yuzini ko'rib, ichida aybdorlik sanchig'ini his qildi." },
    { en: "missed opportunity", uz: "qo'ldan boy berilgan imkoniyat", ipa: "mɪst ˌɒp.əˈtʃuː.nə.ti", pos: "noun", ex: "Not applying for the course was a missed opportunity.", exUz: "Kursga hujjat topshirmaslik boy berilgan imkoniyat edi." },
  ],
  practice: [
    { k: "choice", q: "I don't live near the sea. I wish I ___ near the sea.", opts: ["lived", "live", "would live", "had lived"], a: 0, why: "Hozirgi holatga norozilik: **wish + Past Simple**." },
    { k: "choice", q: "I failed the driving test last week. I wish I ___ more.", opts: ["had practised", "practised", "would practise", "have practised"], a: 0, why: "O'tgan voqea haqida pushaymonlik: **wish + Past Perfect**." },
    { k: "listen", say: "I wish I had listened to your advice.", opts: ["I wish I listened to your advice.", "I wish I would listen to your advice.", "I wish I had listened to your advice.", "I wish I have listened to your advice."], a: 2, why: "**had listened** — o'tgan zamon pushaymonligi." },
    { k: "fill", q: "It's been raining for a week. I wish it ___ raining. (stop)", a: ["would stop", "'d stop"], uz: "Qani edi, yomg'ir tinsa.", why: "Vaziyatdan norozilik: **wish + would + V1**." },
    { k: "fill", q: "I wish I ___ so much money on clothes last month. (not spend)", a: ["hadn't spent", "had not spent"], uz: "Qani edi, o'tgan oy kiyimga bunchalik ko'p pul sarflamaganimda.", why: "O'tgan pushaymonlik: **hadn't spent**." },
    { k: "fill", q: "If only he ___ here now! He would know what to do. (be)", a: ["were", "was"], uz: "Qani edi, u hozir shu yerda bo'lsa!", why: "Hozirgi holat: Past Simple **were**." },
    { k: "order", uz: "Qani edi, inglizchani yaxshiroq gapira olsam.", words: ["I", "wish", "I", "could", "speak", "English", "better."], extra: ["can", "would"], why: "Qobiliyat: **wish + could + V1**." },
    { k: "order", uz: "Qani edi, kecha imtihonga yaxshiroq tayyorlanganimda.", words: ["I", "wish", "I", "had", "prepared", "better", "for", "the", "exam", "yesterday."], extra: ["have", "would"], why: "O'tgan pushaymonlik: **wish + had + V3**." },
    { k: "translate", uz: "Qani edi, u meni tinglasa.", a: ["I wish he would listen to me.", "I wish he'd listen to me.", "If only he would listen to me.", "If only he'd listen to me."], why: "Birovning xatti-harakatidan norozilik: **wish + would**." },
    { k: "translate", uz: "Qani edi, hozir ta'tilda bo'lsam.", a: ["I wish I were on holiday now.", "I wish I was on holiday now.", "I wish I were on holiday.", "I wish I was on holiday.", "If only I were on holiday now.", "If only I was on holiday now.", "I wish I were on holiday right now.", "I wish I was on holiday right now."], why: "Hozirgi unreal holat: **wish + were**." },
    { k: "fix", wrong: "I wish I have more free time.", a: ["I wish I had more free time."], hint: "wish dan keyin zamon orqaga suriladi", why: "**wish + Past Simple**." },
    { k: "fix", wrong: "I wish you will stop making that noise.", a: ["I wish you would stop making that noise.", "I wish you'd stop making that noise."], hint: "norozilik: wish + would", why: "Norozilik: **wish + would**; *will* ishlatilmaydi." },
    { k: "fix", wrong: "If only I didn't say that yesterday!", a: ["If only I hadn't said that yesterday!", "If only I had not said that yesterday!"], hint: "yesterday — o'tgan pushaymonlik", why: "O'tgan voqea uchun **Past Perfect**." },
    { k: "match", pairs: [["remorse", "vijdon azobi"], ["wistful", "sog'inch bilan mahzun"], ["yearn", "intiqlik bilan orzu qilmoq"], ["dwell on", "tinmay o'ylayvermoq"], ["come to terms with", "qabul qilmoq, ko'nikmoq"]] },
    { k: "tf", q: "*I wish I lived in Rome* gapi men hozir Rimda yashamasligimni bildiradi.", a: true, why: "**wish + Past Simple** hozirgi haqiqatga teskari narsani ifodalaydi." },
    { k: "dictation", say: "I wish I had spent more time with my grandparents.", uz: "Qani edi, bobo-buvilarim bilan ko'proq vaqt o'tkazganimda.", why: "**had spent** — o'tgan pushaymonlik." },
    { k: "speak", say: "If only I had listened to my teacher, I would have passed the exam.", uz: "Qani edi, ustozimni tinglaganimda, imtihondan o'tgan bo'lardim." },
  ],
  quiz: [
    { k: "choice", q: "The neighbours are playing loud music again. I wish they ___ it down.", opts: ["would turn", "will turn", "turning", "to turn"], a: 0, why: "Birovning odatidan norozilik: **wish + would + V1**." },
    { k: "choice", q: "It's freezing today. I wish it ___ warmer.", opts: ["were", "would be", "is", "had been"], a: 0, why: "Hozirgi holat haqida: **wish + Past Simple (were)**." },
    { k: "choice", q: "I sent that email to the wrong person last night. I wish I ___ it.", opts: ["hadn't sent", "didn't send", "wouldn't send", "haven't sent"], a: 0, why: "O'tgan voqea: **wish + hadn't + V3**." },
    { k: "fill", q: "I'm afraid of deep water. I wish I ___ swim. (ability)", a: ["could"], uz: "Qani edi, suza olsam.", why: "Qobiliyat: **wish + could**." },
    { k: "fill", q: "If only I ___ the job offer in Berlin last year! (accept)", a: ["had accepted"], uz: "Qani edi, o'tgan yili Berlindagi ish taklifini qabul qilganimda!", why: "O'tgan zamon: **If only + Past Perfect**." },
    { k: "order", uz: "Qani edi, u bunchalik baland ovozda gapirmasa.", words: ["I", "wish", "he", "wouldn't", "talk", "so", "loudly."], extra: ["didn't", "won't"], why: "Boshqa odamning odatidan norozilik: **wish + wouldn't**." },
    { k: "translate", uz: "Qani edi, o'tgan yili chet elda o'qiganimda.", a: ["I wish I had studied abroad last year.", "I wish I'd studied abroad last year.", "If only I had studied abroad last year.", "If only I'd studied abroad last year."], why: "O'tgan pushaymonlik: **wish + had + V3**." },
    { k: "fix", wrong: "I wish I would have more patience.", a: ["I wish I had more patience.", "I wish I were more patient.", "I wish I was more patient."], hint: "o'zimiz haqimizda would yo'q", why: "O'zimiz haqimizda **wish + would** ishlatilmaydi: **wish + Past Simple**." },
    { k: "tf", q: "Kelasi yilgi rejamiz haqida shunday aytish to'g'ri: *I wish I would go to Paris next year.*", a: false, why: "O'zimiz haqimizda **wish + would** ishlatilmaydi. Reja uchun: *I hope to go to Paris next year.*" },
    { k: "listen", say: "I wish I had known the truth earlier.", opts: ["I wish I knew the truth earlier.", "I wish I had known the truth earlier.", "I wish I would know the truth earlier.", "I wish I have known the truth earlier."], a: 1, why: "**had known** — o'tgan zamon pushaymonligi." },
  ],
  summary: [
    "**Wish + Past Simple** — hozirgi holatdan norozilik: *I wish I had more time.* **Be** uchun **were**: *I wish I were taller.*",
    "**Wish + Past Perfect** — o'tgan pushaymonlik: *I wish I had studied harder.* **If only** — xuddi shu, lekin kuchliroq: *If only I hadn't said that!*",
    "**Wish + would** — boshqa odam yoki vaziyatdan norozilik: *I wish you would stop.* O'zimiz haqimizda **would** ishlatilmaydi: *I wish I could…*",
    "**Wish** — haqiqatga teskari narsa, **hope** — mumkin bo'lgan narsa: *I hope you pass.*",
    "Xatolar: ~~I wish I have~~ → **I wish I had**; ~~I wish you will~~ → **I wish you would**; ~~If only I didn't say~~ → **If only I hadn't said**.",
  ],
  homework: "Ovoz chiqarib yoki yozma tarzda 6 ta gap tuzing: 2 ta hozirgi holat (*I wish I lived…*), 2 ta o'tgan pushaymonlik (*I wish I had…*), 2 ta norozilik (*I wish people would…*). Keyin har bir gapda *wish* dan keyingi zamonni tekshiring: hozirgi zamon (*have, will*) qolib ketmadimi? Bitta pushaymonlik haqida 40 so'zli qisqa matn yozing va **pang, dwell on, come to terms with** iboralaridan kamida ikkitasini ishlating.",
};

export default lesson;
