import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u15-l8",
  title: "Unit review: modal verbs",
  titleUz: "Bosqich takrori: modal fe'llar",
  goal: "Bosqichning barcha mavzularini takrorlaysiz: **must / have to / mustn't / don't have to**, **should**, **can / could / be able to**, muloyim iltimos va takliflar, yo'l ko'rsatish, shifokorda va belgilar (**need to / needn't**). Modal fe'llarni to'g'ri shaklda ishlatib, 8–10 gaplik mini-hikoya tuza olasiz.",
  slides: [
    {
      title: "Modal fe'llar xaritasi",
      blocks: [
        { t: "p", md: "Bu bosqichda 7 ta mavzuni o'rgandingiz. Hammasini bitta jadvalga yig'amiz. Eslang: **modal fe'ldan keyin fe'lning 1-shakli keladi, to yo'q (have to / need to dan tashqari), -s yo'q**." },
        {
          t: "table", head: ["Ma'no", "Fe'l", "Misol"], speak: [2],
          rows: [
            ["Majburiyat", "must / have to", "I must go. She has to work."],
            ["Taqiq", "mustn't", "You mustn't smoke here."],
            ["Shart emas", "don't have to / don't need to / needn't", "You don't have to pay."],
            ["Maslahat", "should / shouldn't", "You should rest."],
            ["Qobiliyat (hozir / o'tgan / kelasi)", "can / could / will be able to", "I could swim at five. I'll be able to drive next year."],
            ["Iltimos / ruxsat", "Could you…? Can I…?", "Could you help me? Can I sit here?"],
            ["Taklif", "Would you like…? Shall I…?", "Would you like some tea? Shall I carry it?"],
          ],
        },
        { t: "tip", tone: "good", md: "Eng ko'p xatolar: **must to**, **he musts**, **should to**, **will can**, **an advice**, **I have headache**, **How can I go to…?** Bularni hamisha yodda tuting." },
        { t: "check", ex: { k: "choice", q: "Qaysi gap **to'g'ri**?", opts: ["He musts go.", "He must go.", "He must to go.", "He does must go."], a: 1, why: "**must + V1**: -s ham, to ham yo'q." } },
      ],
    },
    {
      title: "Must, have to va shart emas",
      blocks: [
        {
          t: "table", head: ["Gap", "Ma'nosi"], speak: [0],
          rows: [
            ["You must wear a seat belt.", "Shart (qoida)."],
            ["You mustn't use your phone here.", "Taqiq."],
            ["You don't have to come.", "Shart emas (xohlasangiz kelasiz)."],
            ["She had to wait for an hour.", "Majbur bo'ldi (o'tgan)."],
            ["We will have to leave early.", "Ketishimizga to'g'ri keladi (kelasi)."],
            ["Do I need to book a table?", "Stol band qilishim kerakmi?"],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["You mustn't smoke here. (taqiq)", "You don't have to pay. (shart emas)", "She needs to see a doctor.", "You needn't wait."] },
          bad: { title: "Xato", items: ["You don't have to smoke here. (taqiqni aytmoqchi bo'lsangiz)", "You mustn't pay. (shart emas deb aytmoqchi bo'lsangiz)", "She need to see a doctor.", "You needn't to wait."] },
        },
        { t: "check", ex: { k: "choice", q: "Bepul kirish: \"You ___ pay.\"", opts: ["mustn't", "don't have to", "must", "haven't"], a: 1, why: "Shart emas → **don't have to**." } },
        { t: "check", ex: { k: "fill", q: "Yesterday I ___ to get up at five. (kerak bo'ldi)", a: ["had"], why: "**had to**." } },
      ],
    },
    {
      title: "Should va can / could / be able to",
      blocks: [
        {
          t: "table", head: ["Maqsad", "Misol"], speak: [1],
          rows: [
            ["Maslahat", "I think you should see a doctor."],
            ["Salbiy maslahat", "You shouldn't stay up so late."],
            ["Maslahat so'rash", "What should I do?"],
            ["Yumshoq maslahat", "If I were you, I'd take a taxi."],
            ["Hozirgi qobiliyat", "She can speak three languages."],
            ["O'tmishdagi qobiliyat", "I could run fast when I was young."],
            ["Aniq bir voqea", "I was able to catch the last bus."],
            ["Kelajak", "You will be able to speak English well."],
          ],
        },
        { t: "tip", tone: "warn", md: "**will can** ❌ → **will be able to** ✅. **advice** sanalmaydi: *some advice*, *a piece of advice* (an advice ❌)." },
        { t: "check", ex: { k: "fill", q: "Next year I will ___ able to drive.", a: ["be"], why: "**will be able to**." } },
        { t: "check", ex: { k: "choice", q: "\"Menga ozgina maslahat bera olasizmi?\"", opts: ["Can you give me an advice?", "Can you give me some advice?", "Can you give me advices?", "Can you advice me?"], a: 1, why: "**some advice** (advice sanalmaydi)." } },
      ],
    },
    {
      title: "Iltimos, taklif, yo'l ko'rsatish",
      blocks: [
        {
          t: "table", head: ["Vaziyat", "Ibora"], speak: [1],
          rows: [
            ["Muloyim iltimos", "Could you open the window, please?"],
            ["Ruxsat so'rash", "Could I borrow your pen?"],
            ["Kafeda buyurtma", "I'd like a tea, please."],
            ["Ichimlik taklifi", "Would you like some water?"],
            ["Yordam taklifi", "Shall I carry your bag?"],
            ["Yo'l so'rash", "Excuse me, how do I get to the station?"],
            ["Yo'nalish", "Go straight on, then turn left at the traffic lights."],
            ["Joylashuv", "It's opposite the bank, next to the pharmacy."],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["Could I borrow your pen?", "Would you like some tea?", "It's on the right.", "How do I get to the metro?"] },
          bad: { title: "Xato", items: ["Can you borrow me your pen?", "Do you like some tea?", "It's in the right.", "How can I go to the metro?"] },
        },
        { t: "check", ex: { k: "choice", q: "Restoranda:", opts: ["Give me the menu.", "I want the menu.", "Could I see the menu, please?", "Menu!"], a: 2, why: "Eng muloyim: **Could I…, please?**" } },
        { t: "check", ex: { k: "fill", q: "The post office is ___ the bank and the school. (o'rtasida)", a: ["between"], why: "**between … and …**" } },
      ],
    },
    {
      title: "Shifokorda va belgilar",
      blocks: [
        {
          t: "table", head: ["Mavzu", "Misol"], speak: [1],
          rows: [
            ["Savol", "What's the matter? Where does it hurt?"],
            ["Belgi", "I've got a headache and a cough."],
            ["Og'riq", "My back hurts."],
            ["Maslahat", "You should rest and drink plenty of water."],
            ["Qabul", "I'd like to make an appointment."],
            ["Belgi", "No parking. / Out of order. / Keep off the grass."],
          ],
        },
        { t: "tip", tone: "warn", md: "**I've got a headache** — artikl bilan. **I feel ill** (feel myself ❌). Jiddiy belgilar bo'lsa, shifokorga murojaat qiling." },
        { t: "check", ex: { k: "choice", q: "\"No smoking\" belgisi bilan mos gap:", opts: ["You mustn't smoke here.", "You don't have to smoke here.", "You can smoke here.", "You should smoke here."], a: 0, why: "Taqiq → **mustn't**." } },
        { t: "check", ex: { k: "fill", q: "My head ___. (hurt)", a: ["hurts"], why: "head = it → **hurts**." } },
      ],
    },
    {
      title: "O'qing: Buxoroga sayohat",
      blocks: [
        {
          t: "text", title: "A weekend in Bukhara",
          en: "Last weekend Kamol and his English friend Tom visited Bukhara. They had to get up at five to catch the train, but they weren't tired.\nIn the old town they got lost. Tom asked a policeman, \"Excuse me, how do I get to Lyabi Hauz?\" The policeman said, \"Go straight on and take the second turning on the right. It's opposite a big tree.\"\nAt a café, Kamol said, \"Could we have some green tea, please?\" Tom said, \"I'd like to try plov.\" The waiter smiled: \"Certainly. Would you like some bread, too?\"\nOn Sunday Tom had a headache. Kamol said, \"You should rest and drink plenty of water.\" Tom stayed at the hotel, and Kamol didn't go out either. \"We don't have to visit everything,\" Kamol said. \"We can come back next year!\"",
          uz: "O'tgan dam olish kunlari Kamol va uning ingliz do'sti Tom Buxoroga borishdi. Poyezdga ulgurish uchun ular soat beshda turishlari kerak edi, lekin charchamadilar.\nQadimiy shaharda ular yo'lni adashib qolishdi. Tom politsiyachidan so'radi: \"Kechirasiz, Labi Hovuzga qanday boraman?\" Politsiyachi dedi: \"To'g'ri yuring va o'ng tomondagi ikkinchi burilishdan buriling. U katta daraxtning qarshisida.\"\nKafeda Kamol dedi: \"Bizga ko'k choy olib kelsangiz bo'ladimi?\" Tom dedi: \"Men palovni sinab ko'rmoqchiman.\" Ofitsiant jilmaydi: \"Albatta. Non ham olib kelaymi?\"\nYakshanba kuni Tomning boshi og'riyapti. Kamol dedi: \"Dam olishing va ko'p suv ichishing kerak.\" Tom mehmonxonada qoldi, Kamol ham tashqariga chiqmadi. \"Hammasini ko'rishimiz shart emas,\" dedi Kamol. \"Kelasi yil yana kelsak bo'ladi!\"",
        },
        { t: "check", ex: { k: "choice", q: "Where is Lyabi Hauz?", opts: ["Next to the station.", "Opposite a big tree.", "Behind the café.", "Between two hotels."], a: 1, why: "*It's opposite a big tree.*" } },
        { t: "check", ex: { k: "tf", q: "Tom had a headache on Saturday.", a: false, why: "*On Sunday Tom had a headache.*" } },
        { t: "check", ex: { k: "choice", q: "Why did they stay at the hotel on Sunday?", opts: ["Tom felt ill.", "The train was late.", "It was closed.", "They had no money."], a: 0, why: "Tom headache → rest." } },
      ],
    },
    {
      title: "Dialog: mini-hikoya",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Nigora", en: "Excuse me, is there a pharmacy near here? I've got a sore throat.", uz: "Kechirasiz, yaqin atrofda dorixona bormi? Tomog'im og'riyapti." },
            { who: "Bekzod", en: "Yes. Go straight on, cross the bridge, and it's on your left, next to the bank.", uz: "Ha. To'g'ri yuring, ko'prikdan o'ting va u chap tomonda, bank yonida." },
            { who: "Nigora", en: "Thank you. Could you tell me the time, please?", uz: "Rahmat. Soat necha ekanligini ayta olasizmi?" },
            { who: "Bekzod", en: "It's half past five. You should hurry. The pharmacy closes at six.", uz: "Soat besh yarim. Shoshganingiz ma'qul. Dorixona oltida yopiladi." },
            { who: "Nigora", en: "I don't have to hurry. I'll be able to get there in ten minutes.", uz: "Shoshishim shart emas. O'n daqiqada yetib olaman." },
            { who: "Bekzod", en: "And you should see a doctor if you still feel ill tomorrow.", uz: "Agar ertaga ham o'zingizni yomon his qilsangiz, shifokorga ko'rinishingiz kerak." },
          ],
        },
        { t: "check", ex: { k: "tf", q: "The pharmacy is on the right.", a: false, why: "*It's on your left, next to the bank.*" } },
      ],
    },
  ],
  words: [
    { en: "obligation", uz: "majburiyat", ipa: "ˌɒblɪˈɡeɪʃn", pos: "noun", ex: "Voting is not an obligation here.", exUz: "Bu yerda ovoz berish majburiyat emas." },
    { en: "regulation", uz: "qoida, nizom", ipa: "ˌreɡjuˈleɪʃn", pos: "noun", ex: "There are strict safety regulations.", exUz: "Qat'iy xavfsizlik qoidalari bor." },
    { en: "essential", uz: "juda zarur", ipa: "ɪˈsenʃl", pos: "adj", ex: "A passport is essential for travel.", exUz: "Sayohat uchun pasport juda zarur." },
    { en: "instructions", uz: "yo'riqnoma", ipa: "ɪnˈstrʌkʃnz", pos: "noun", ex: "Please read the instructions first.", exUz: "Iltimos, avval yo'riqnomani o'qing." },
    { en: "emergency", uz: "favqulodda holat", ipa: "ɪˈmɜːdʒənsi", pos: "noun", ex: "In an emergency, call 103.", exUz: "Favqulodda holatda 103 ga qo'ng'iroq qiling." },
    { en: "rude", uz: "qo'pol, odobsiz", ipa: "ruːd", pos: "adj", ex: "It's rude to interrupt people.", exUz: "Odamlarning gapini bo'lish — odobsizlik." },
    { en: "careful", uz: "ehtiyotkor", ipa: "ˈkeəfl", pos: "adj", ex: "Be careful on the stairs.", exUz: "Zinada ehtiyot bo'ling." },
    { en: "helpful", uz: "foydali; yordam beradigan", ipa: "ˈhelpfl", pos: "adj", ex: "The staff were very helpful.", exUz: "Xodimlar juda yordamchi edi." },
    { en: "remind", uz: "eslatmoq", ipa: "rɪˈmaɪnd", pos: "verb", ex: "Please remind me to call him.", exUz: "Iltimos, unga qo'ng'iroq qilishni eslatib qo'ying." },
    { en: "ahead", uz: "oldinda; oldinga", ipa: "əˈhed", pos: "adv", ex: "The station is straight ahead.", exUz: "Vokzal to'g'ri oldinda." },
  ],
  practice: [
    { k: "match", pairs: [["mustn't", "taqiq"], ["don't have to", "shart emas"], ["should", "maslahat"], ["could", "o'tmishdagi qobiliyat"], ["Would you like…?", "taklif"]] },
    { k: "match", pairs: [["obligation", "majburiyat"], ["regulation", "qoida"], ["essential", "juda zarur"], ["emergency", "favqulodda holat"], ["remind", "eslatmoq"]] },
    { k: "listen", say: "You don't have to pay.", opts: ["You don't have to pay.", "You mustn't pay.", "You must pay."], a: 0 },
    { k: "listen", say: "Could you tell me the way to the station?", opts: ["Could you tell me the way to the station?", "Could you tell me the time at the station?", "Can I tell you the way to the station?"], a: 0 },
    { k: "choice", q: "You ___ drive fast near a school. It's dangerous.", opts: ["mustn't", "don't have to", "needn't", "should to"], a: 0, why: "Taqiq → **mustn't**." },
    { k: "choice", q: "Next year she ___ speak English fluently.", opts: ["will be able to", "will can", "can will", "is able"], a: 0, why: "**will be able to**." },
    { k: "choice", q: "Qaysi gap **xato**?", opts: ["She should rest.", "He needs to go.", "I have headache.", "Could I borrow your pen?"], a: 2, why: "To'g'ri: *I've got a headache.*" },
    { k: "choice", q: "Kafeda eng muloyim:", opts: ["Give me a coffee.", "I want a coffee.", "I'd like a coffee, please.", "Coffee!"], a: 2, why: "**I'd like … , please.**" },
    { k: "fill", q: "Shall I ___ your bag? (ko'tarib beraymi)", a: ["carry"], why: "**Shall I + V1?**" },
    { k: "fill", q: "Excuse me, how do I ___ to the museum?", a: ["get"], why: "**get to**." },
    { k: "fill", q: "You ___ get some rest. You look tired.", a: ["should"], why: "Maslahat → **should**." },
    { k: "tf", q: "**You needn't to come** — to'g'ri.", a: false, why: "needn't dan keyin to yo'q: *You needn't come.*" },
    { k: "tf", q: "**It's on the left** — yo'l tushuntirishda to'g'ri ibora.", a: true },
    { k: "order", uz: "Menimcha, shifokorga borishingiz kerak.", words: ["I", "think", "you", "should", "see", "a", "doctor."], extra: ["to", "must"] },
    { k: "translate", uz: "Svetoforda o'ngga buriling.", a: ["Turn right at the traffic lights.", "Turn right at the lights."] },
    { k: "speak", say: "Excuse me, could you help me? I'm looking for the station.", uz: "Kechirasiz, yordam bera olasizmi? Men vokzalni qidiryapman." },
  ],
  quiz: [
    { k: "choice", q: "Today is Sunday. I ___ get up early.", opts: ["mustn't", "don't have to", "have to", "should to"], a: 1, why: "Shart emas → **don't have to**." },
    { k: "choice", q: "Last night I ___ finish the report on time.", opts: ["was able to", "will be able to", "can", "will can"], a: 0, why: "Bitta aniq voqea → **was able to**." },
    { k: "choice", q: "\"Doktor: What's the matter?\" Qaysi javob mos?", opts: ["I've got a sore throat.", "I am sore throat.", "I have sore throat.", "Throat me hurts."], a: 0, why: "**I've got a sore throat.**" },
    { k: "choice", q: "Mehmonga choy taklif qilasiz:", opts: ["Would you like some tea?", "Do you like some tea?", "You want tea?", "Shall you tea?"], a: 0, why: "**Would you like some tea?**" },
    { k: "choice", q: "\"Out of order\" belgisi:", opts: ["Ishlamaydi.", "Navbat bilan.", "Kirish.", "Tez yuring."], a: 0, why: "**Out of order** = buzilgan." },
    { k: "fill", q: "The bank is ___ the pharmacy. They are side by side. (yonida)", a: ["next to", "beside"], why: "**next to** = yonida." },
    { k: "fill", q: "If I ___ you, I'd see a doctor.", a: ["were"], why: "**If I were you…**" },
    { k: "tf", q: "**You mustn't pay** = To'lashingiz shart emas.", a: false, why: "mustn't = taqiq; shart emas = *don't have to*." },
    { k: "listen", say: "You should drink plenty of water.", opts: ["You should drink plenty of water.", "You shouldn't drink plenty of water.", "You should drink plenty of wine."], a: 0 },
    { k: "order", uz: "Menga qalamingizni so'rab tursam bo'ladimi?", words: ["Could", "I", "borrow", "your", "pen,", "please?"], extra: ["lend", "to"], alt: [["Can", "I", "borrow", "your", "pen,", "please?"], ["May", "I", "borrow", "your", "pen,", "please?"]] },
    { k: "translate", uz: "Siz bu yerda mashina qo'ymasligingiz kerak.", a: ["You mustn't park here.", "You must not park here.", "You shouldn't park here."] },
  ],
  summary: [
    "**must / have to** — majburiyat, **mustn't** — taqiq, **don't have to / don't need to / needn't** — shart emas.",
    "**should** — maslahat; **can / could / was able to / will be able to** — qobiliyat va ruxsat.",
    "Muloyim iltimos: **Could you…? Can I…?**; taklif: **Would you like…? Shall I…? I'll…**",
    "Yo'l ko'rsatish: **go straight on, turn left, opposite, next to, between**. Shifokorda: **I've got a…, My… hurts, You should…**",
    "Eng ko'p xatolar: must to, he musts, should to, will can, an advice, I have headache.",
  ],
  homework: "\"Mening bir kunim\" mavzusida 10 gaplik matn yozing. Unda bo'lsin: 2 ta majburiyat (**have to / must**), 1 ta taqiq (**mustn't**), 1 ta shart emas (**don't have to**), 2 ta maslahat (**should**), 1 ta qobiliyat (**can / could**), 1 ta muloyim iltimos va 1 ta yo'l ko'rsatish gapi. Keyin xatolarni o'zingiz tekshiring.",
};

export default lesson;
