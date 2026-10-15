import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u20-l4",
  title: "Modals of deduction: must, might, can't",
  titleUz: "Taxmin modallari: must, might, can't (must have been)",
  goal: "**must, might / may / could, can't** yordamida hozirgi va o'tgan zamon haqida taxmin qilasiz (*He must be at work. She can't have seen it. They might have left*) va **mustn't** bilan **can't** ni adashtirmaysiz.",
  slides: [
    {
      title: "Qanchalik ishonchingiz komil?",
      blocks: [
        { t: "p", md: "Biror narsani aniq bilmaymiz, lekin **dalillar** asosida taxmin qilamiz. Inglizchada taxminning **ishonch darajasi** modal fe'l bilan ko'rsatiladi. Bu A2 darajadagi *may / might* ning davomi." },
        {
          t: "table", head: ["Ishonch", "Modal", "Misol", "Ma'nosi"], speak: [2],
          rows: [
            ["Deyarli 100 foiz, ha", "must be", "He must be at work.", "Albatta ishda bo'lsa kerak."],
            ["Ehtimol, 50 foiz", "might / may / could be", "He might be at work.", "Ehtimol ishda."],
            ["Deyarli 100 foiz, yo'q", "can't be", "He can't be at work.", "Ishda bo'lishi mumkin emas."],
          ],
        },
        { t: "tip", tone: "warn", md: "Taxmin ma'nosida **must** ning inkori **mustn't** emas, **can't**! *Bu to'g'ri bo'lishi mumkin emas* = *That can't be true.* **mustn't** esa «mumkin emas, taqiqlangan» (*You mustn't park here*)." },
        { t: "check", ex: { k: "choice", q: "*The shop is closed. The lights are off. The owner ___ be inside.*", opts: ["must", "can't", "mustn't", "will"], a: 1, why: "Chiroqlar o'chiq — ichkarida bo'lishi mumkin emas: **can't be**." } },
      ],
    },
    {
      title: "Hozirgi zamon: must be, might be, can't be",
      blocks: [
        { t: "p", md: "Hozirgi holat haqida taxmin: **modal + V1**. Hozir davom etayotgan ish haqida: **modal + be + V-ing**." },
        {
          t: "examples", items: [
            { en: "You've been working all day. You must be tired.", uz: "Kun bo'yi ishladingiz. Charchagan bo'lsangiz kerak.", note: "Dalil: kun bo'yi ishlagan." },
            { en: "She might be at the library. I'm not sure.", uz: "U kutubxonada bo'lishi mumkin. Ishonchim komil emas." },
            { en: "That can't be Tom. He is on holiday in Spain.", uz: "Bu Tom bo'lishi mumkin emas. U Ispaniyada dam olyapti." },
            { en: "Listen! Someone must be playing the piano upstairs.", uz: "Tinglang! Tepada kimdir pianino chalayotgan bo'lsa kerak." },
            { en: "He may not know the answer.", uz: "U javobni bilmasligi mumkin.", note: "Ehtimol-inkor uchun **might not / may not**, **can't** emas." },
          ],
        },
        { t: "tip", tone: "info", md: "**can't** juda kuchli ishonchni bildiradi (*aniq emas*). Agar shubha bo'lsa, **might not** ishlating: *She might not be at home* (ehtimol uyda emas)." },
        { t: "check", ex: { k: "fill", q: "Ali has a cold and a high temperature. He ___ be ill.", a: ["must"], why: "Dalillar bor → deyarli aniq: **must be**." } },
        { t: "check", ex: { k: "choice", q: "*I'm not sure, but she ___ at the gym now.*", opts: ["must be", "might be", "can't be", "mustn't be"], a: 1, why: "«Ishonchim komil emas» → **might be**." } },
      ],
    },
    {
      title: "O'tgan zamon: must have been",
      blocks: [
        { t: "p", md: "O'tgan zamon haqida taxmin: **modal + have + V3**. Modal ishonchni bildiradi, **have + V3** esa gap o'tmish haqida ekanini ko'rsatadi." },
        {
          t: "table", head: ["Ishonch", "Shakl", "Misol"], speak: [2],
          rows: [
            ["Ha, deyarli aniq", "must have + V3", "The window is broken. Someone must have broken it."],
            ["Ehtimol", "might / may / could have + V3", "He might have forgotten the meeting."],
            ["Yo'q, deyarli aniq", "can't have + V3", "She can't have seen the message. Her phone was off."],
          ],
        },
        {
          t: "examples", items: [
            { en: "The ground is wet. It must have rained last night.", uz: "Yer ho'l. Kecha kechqurun yomg'ir yog'gan bo'lsa kerak." },
            { en: "They aren't answering. They might have gone out.", uz: "Ular javob bermayapti. Ehtimol, chiqib ketishgan." },
            { en: "He can't have taken my bag. He wasn't here.", uz: "U sumkamni olgan bo'lishi mumkin emas. U bu yerda emas edi." },
          ],
        },
        { t: "tip", tone: "info", md: "**couldn't have + V3** ham **can't have + V3** ga yaqin: *She couldn't have known about it* (u bilgan bo'lishi mumkin emas). Imtihonda ikkalasi ham to'g'ri." },
        { t: "check", ex: { k: "fill", q: "The cake is gone. Somebody must ___ eaten it.", a: ["have"], why: "O'tgan zamon taxmini: **must have + V3**." } },
        { t: "check", ex: { k: "choice", q: "*She was in London all week, so she ___ the party on Friday.*", opts: ["must have attended", "can't have attended", "might attended", "mustn't have attended"], a: 1, why: "Londonda edi → bu yerda bo'lishi mumkin emas: **can't have + V3**." } },
      ],
    },
    {
      title: "Tez-tez uchraydigan xatolar",
      blocks: [
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["That can't be right. The numbers don't match.", "She must have missed the train.", "He might be sleeping now.", "They can't have known about it."], },
          bad: { title: "Xato", items: ["That mustn't be right. The numbers don't match.", "She must missed the train.", "He might to be sleeping now.", "They can't known about it."] },
        },
        { t: "tip", tone: "warn", md: "Uchta xatoga e'tibor bering: 1) taxmin inkorida **mustn't** emas, **can't**; 2) modaldan keyin **to** qo'ymang (*might to* — xato); 3) o'tgan taxmin uchun **have + V3** albatta kerak (*must have missed*)." },
        { t: "check", ex: { k: "fix", wrong: "He mustn't be at home. His car isn't outside.", a: ["He can't be at home. His car isn't outside.", "He might not be at home. His car isn't outside.", "He may not be at home. His car isn't outside."], hint: "Taxmin inkori", why: "Taxminda **mustn't** ishlatilmaydi: **can't be** yoki **might not be**." } },
        { t: "check", ex: { k: "fix", wrong: "She must forgot her keys.", a: ["She must have forgotten her keys.", "She must have forgot her keys."], hint: "O'tgan zamon taxmini", why: "**must have + V3**: *must have forgotten*." } },
      ],
    },
    {
      title: "O'qing: yo'qolgan noutbuk",
      blocks: [
        {
          t: "text", title: "The mystery of the missing laptop",
          en: "On Monday morning, Dilnoza found that her laptop was missing from the office. She didn't know what to think. \"Someone must have taken it,\" she said. Her colleague Jasur looked at the desk. \"It can't have been a stranger,\" he said. \"The door was locked, and there is no evidence that anyone broke in.\" They checked the cameras. The last person in the office on Friday was Aziz. He might have taken it home to work at the weekend. Dilnoza phoned him. \"Of course I have it,\" Aziz said. \"I borrowed it for my presentation. I'm so sorry! I must have forgotten to tell you.\" It was a small mystery with a simple answer.",
          uz: "Dushanba kuni ertalab Dilnoza ofisda noutbuki yo'qolganini ko'rdi. U nima deb o'ylashni bilmadi. «Kimdir olgan bo'lsa kerak,» dedi u. Hamkasbi Jasur stolga qaradi. «Bu begona odam bo'lishi mumkin emas,» dedi u. «Eshik qulflangan edi va kimdir buzib kirgani haqida hech qanday dalil yo'q.» Ular kameralarni tekshirishdi. Juma kuni ofisda oxirgi bo'lib Aziz qolgan edi. U dam olish kunlari ishlash uchun uyiga olib ketgan bo'lishi mumkin. Dilnoza unga qo'ng'iroq qildi. «Albatta menda,» dedi Aziz. «Taqdimotim uchun qarz olgan edim. Kechirasiz! Sizga aytishni unutgan bo'lsam kerak.» Bu oddiy javobi bor kichik sir edi.",
        },
        { t: "check", ex: { k: "tf", q: "Jasur thinks a stranger took the laptop.", a: false, why: "Jasur: *It can't have been a stranger* — begona odam emas." } },
        { t: "check", ex: { k: "choice", q: "Why did Aziz take the laptop?", opts: ["He needed it for his presentation.", "He wanted to sell it.", "He broke into the office.", "He found it in the street."], a: 0, why: "*I borrowed it for my presentation.*" } },
      ],
    },
    {
      title: "Dialog: kim qo'ng'iroq qildi?",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Emma", en: "Someone is knocking at the door. Who could it be?", uz: "Kimdir eshikni taqillatyapti. Kim bo'lishi mumkin?" },
            { who: "Ben", en: "It might be the postman. We are expecting a parcel.", uz: "Pochtachi bo'lishi mumkin. Biz posilka kutyapmiz." },
            { who: "Emma", en: "It can't be him. He always comes in the morning.", uz: "U bo'lishi mumkin emas. U doim ertalab keladi." },
            { who: "Ben", en: "Then it must be our neighbour. She said she would bring back my book.", uz: "Unda bizning qo'shnimiz bo'lsa kerak. U kitobimni qaytarib olib kelaman degan edi." },
            { who: "Emma", en: "You're right! And yesterday she must have forgotten it, because she didn't come.", uz: "To'g'ri! Kecha u unutgan bo'lsa kerak, chunki kelmadi." },
            { who: "Ben", en: "Let's open the door and find out.", uz: "Eshikni ochib ko'raylik." },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Emma is sure that the visitor is the postman.", a: false, why: "Emma: *It can't be him* — pochtachi bo'lishi mumkin emas." } },
      ],
    },
  ],
  words: [
    { en: "obvious", uz: "aniq, ravshan", ipa: "ˈɒb.vi.əs", pos: "adj", ex: "It is obvious that he is lying.", exUz: "Uning yolg'on gapirayotgani ravshan." },
    { en: "evidence", uz: "dalil", ipa: "ˈev.ɪ.dəns", pos: "noun", ex: "There is no evidence that he was there.", exUz: "Uning u yerda bo'lgani haqida dalil yo'q." },
    { en: "certain", uz: "ishonchi komil", ipa: "ˈsɜː.tən", pos: "adj", ex: "I'm certain that I locked the door.", exUz: "Eshikni qulflaganimga ishonchim komil." },
    { en: "suspect", uz: "gumon qilmoq", ipa: "səˈspekt", pos: "verb", ex: "I suspect that he knows the answer.", exUz: "Menimcha, u javobni biladi." },
    { en: "clue", uz: "ishora, iz", ipa: "kluː", pos: "noun", ex: "The footprints were the first clue.", exUz: "Oyoq izlari birinchi ishora bo'ldi." },
    { en: "mystery", uz: "sir, jumboq", ipa: "ˈmɪs.tər.i", pos: "noun", ex: "The disappearance of the ship is still a mystery.", exUz: "Kemaning yo'qolishi hali ham jumboq." },
    { en: "guess", uz: "taxmin qilmoq", ipa: "ɡes", pos: "verb", ex: "Can you guess my age?", exUz: "Yoshimni taxmin qila olasizmi?" },
    { en: "definitely", uz: "albatta, shubhasiz", ipa: "ˈdef.ɪ.nət.li", pos: "adv", ex: "She will definitely win.", exUz: "U albatta g'alaba qozonadi." },
    { en: "possibly", uz: "ehtimol, balki", ipa: "ˈpɒs.ə.bli", pos: "adv", ex: "He is possibly the best player in the team.", exUz: "U jamoadagi eng yaxshi o'yinchi bo'lishi mumkin." },
    { en: "conclusion", uz: "xulosa", ipa: "kənˈkluː.ʒən", pos: "noun", ex: "I came to the conclusion that he was right.", exUz: "U haq degan xulosaga keldim." },
  ],
  practice: [
    { k: "choice", q: "**He has been working for twelve hours. He ___ be exhausted.**", opts: ["must", "can't", "mustn't", "might not"], a: 0, why: "Dalil kuchli → **must be**." },
    { k: "choice", q: "**That ___ be Anna. She is abroad.**", opts: ["must", "can't", "should", "needs"], a: 1, why: "Chet elda → bu u bo'lishi mumkin emas: **can't be**." },
    { k: "listen", say: "She must have forgotten her keys.", opts: ["She must have forgotten her keys.", "She can't have forgotten her keys.", "She might forget her keys."], a: 0 },
    { k: "fill", q: "The lights are on. They ___ be at home.", a: ["must"], why: "Chiroq yoniq → ehtimol uyda: **must be**." },
    { k: "fill", q: "I'm not sure. He ___ be late because of the traffic.", a: ["might", "may", "could"], why: "Ishonch kam → **might / may / could**." },
    { k: "fill", q: "The road is wet. It must ___ rained.", a: ["have"], why: "O'tgan taxmin: **must have + V3**." },
    { k: "fill", q: "She can't ___ seen us. She was looking the other way.", a: ["have"], why: "**can't have + V3**." },
    { k: "order", uz: "U hozir uyda bo'lishi mumkin emas.", words: ["He", "can't", "be", "at", "home", "now."], extra: ["mustn't", "to"], alt: [["He", "cannot", "be", "at", "home", "now."]], why: "Taxmin inkori: can't be." },
    { k: "order", uz: "Kimdir bu derazani sindirgan bo'lsa kerak.", words: ["Someone", "must", "have", "broken", "this", "window."], extra: ["broke", "to"], why: "must have + V3." },
    { k: "translate", uz: "U charchagan bo'lsa kerak.", a: ["He must be tired.", "She must be tired.", "He must be tired.", "They must be tired."], why: "Kuchli taxmin: must be." },
    { k: "translate", uz: "Ular ketib qolgan bo'lishi mumkin.", a: ["They might have left.", "They may have left.", "They could have left."], why: "Ehtimol (o'tgan): might have + V3." },
    { k: "match", pairs: [["evidence", "dalil"], ["clue", "ishora, iz"], ["suspect", "gumon qilmoq"], ["definitely", "shubhasiz"], ["conclusion", "xulosa"]] },
    { k: "tf", q: "Taxmin ma'nosida **must** ning inkori **mustn't**.", a: false, why: "Taxminda inkor — **can't**." },
    { k: "fix", wrong: "She must forgot the appointment.", a: ["She must have forgotten the appointment.", "She must have forgot the appointment."], hint: "O'tgan taxmin", why: "**must have + V3**." },
    { k: "speak", say: "He must be tired. He has been working all day.", uz: "U charchagan bo'lsa kerak. U kun bo'yi ishlagan." },
  ],
  quiz: [
    { k: "choice", q: "**You've just run ten kilometres. You ___ be tired.**", opts: ["must", "can't", "mustn't", "will"], a: 0, why: "Dalil → **must be**." },
    { k: "choice", q: "**She ___ have stolen the money. She was with me all day.**", opts: ["must", "can't", "will", "should"], a: 1, why: "U men bilan edi → **can't have + V3**." },
    { k: "choice", q: "**The streets are empty. Everyone ___ gone home.**", opts: ["must have", "must", "can't", "might"], a: 0, why: "O'tgan: **must have gone**." },
    { k: "fill", q: "I'm not sure where Sardor is. He ___ be at the gym.", a: ["might", "may", "could"], why: "Ishonch kam → **might / may / could**." },
    { k: "fill", q: "That can't ___ the right address. There is no house here.", a: ["be"], why: "Hozirgi taxmin: **can't be**." },
    { k: "fill", q: "They didn't answer. They might ___ gone out.", a: ["have"], why: "**might have + V3**." },
    { k: "listen", say: "That can't be true.", opts: ["That can't be true.", "That must be true.", "That might be true."], a: 0 },
    { k: "tf", q: "**He might not know** ma'nosi: u bilmasligi mumkin (ehtimol).", a: true, why: "Ehtimol-inkor: **might not**." },
    { k: "fix", wrong: "He mustn't have seen me. He didn't wave.", a: ["He can't have seen me. He didn't wave.", "He might not have seen me. He didn't wave.", "He may not have seen me. He didn't wave.", "He couldn't have seen me. He didn't wave."], hint: "Taxmin inkori, o'tgan zamon", why: "Taxmin inkori: **can't have + V3** yoki **might not have + V3**." },
    { k: "order", uz: "U darsni o'tkazib yuborgan bo'lsa kerak.", words: ["She", "must", "have", "missed", "the", "lesson."], extra: ["miss", "to"], why: "must have + V3." },
  ],
  summary: [
    "**Hozirgi taxmin**: *must be* (deyarli aniq, ha), *might / may / could be* (ehtimol), *can't be* (deyarli aniq, yo'q). Davom etayotgan ish: *must be working*.",
    "**O'tgan taxmin**: modal + **have + V3** — *must have gone, might have forgotten, can't have seen*.",
    "Taxmin inkori — **can't**, **mustn't** emas! *Mustn't* — taqiq (*You mustn't park here*).",
    "Ehtimol-inkor uchun **might not / may not**: *She might not be at home.* Modaldan keyin **to** qo'yilmaydi.",
  ],
  homework: "Atrofingizdagi 5 ta vaziyatga qarab taxmin yozing (masalan: qo'shnining chirog'i yonib turibdi, do'stingiz javob bermayapti). Har birida **must, might yoki can't** ishlating, 2 tasi o'tgan zamonda bo'lsin (*must have…*).",
};

export default lesson;
