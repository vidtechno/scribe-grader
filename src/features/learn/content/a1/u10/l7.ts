import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u10-l7",
  title: "must / mustn't: rules & signs",
  titleUz: "Qoidalar: must / mustn't",
  goal: "Qoidalar va belgilarni (**signs**) tushuntirasiz: **You must fasten your seat belt. You mustn't smoke here.** **mustn't** (mumkin emas) va **don't have to** (shart emas) ni adashtirmaysiz, **mustn't** ni to'g'ri talaffuz qilasiz.",
  slides: [
    {
      title: "must + V1 — albatta kerak",
      blocks: [
        { t: "p", md: "**must** — kuchli majburiyat: qoida, qonun, belgi yoki gapiruvchining o'zi juda muhim deb hisoblagan narsa. Shakli **hamma shaxs uchun bir xil**, keyin **V1** (*to* yo'q!):" },
        {
          t: "table", head: ["Ega", "Misol", "O'zbekcha"], speak: [1],
          rows: [
            ["I", "I must call my mum.", "Oyimga albatta qo'ng'iroq qilishim kerak."],
            ["you", "You must wear a helmet.", "Shlem kiyishingiz shart."],
            ["he / she", "She must be at the airport at six.", "U oltida aeroportda bo'lishi shart."],
            ["we / they", "Passengers must show their tickets.", "Yo'lovchilar chiptalarini ko'rsatishi shart."],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["You must stop here.", "He must wear a uniform.", "We must go now."] },
          bad: { title: "Xato", items: ["You must to stop here.", "He musts wear a uniform.", "We must going now."] },
        },
        { t: "tip", tone: "info", md: "**must** — **can, could, should, will** oilasidan: ular **-s** olmaydi, keyin **to** qo'yilmaydi va **do** bilan inkor yasalmaydi." },
        { t: "check", ex: { k: "choice", q: "To'g'ri gapni tanlang:", opts: ["Drivers must to stop at a red light.", "Drivers must stop at a red light.", "Drivers musts stop at a red light.", "Drivers must stopping at a red light."], a: 1, why: "**must + V1**: *must **stop***." } },
      ],
    },
    {
      title: "mustn't — mumkin emas, taqiqlangan",
      blocks: [
        { t: "p", md: "**mustn't (must not) + V1** — biror narsani qilish **taqiqlangan, mumkin emas**:" },
        {
          t: "examples", items: [
            { en: "You mustn't smoke on the plane.", uz: "Samolyotda chekish mumkin emas." },
            { en: "You mustn't use your phone while you're driving.", uz: "Mashina haydayotganda telefondan foydalanish mumkin emas." },
            { en: "Children mustn't swim here without an adult.", uz: "Bolalar bu yerda kattalarsiz suzishi mumkin emas." },
            { en: "We mustn't be late for the flight.", uz: "Reysga kechikmasligimiz kerak." },
          ],
        },
        {
          t: "sounds", items: [
            { label: "mustn't", say: "mustn't", uz: "**\"masnt\"** — birinchi *t* **o'qilmaydi**! ❌ \"mast-nt\" emas.", examples: ["mustn't", "You mustn't smoke."] },
            { label: "must", say: "You must stop.", uz: "Gap ichida qisqa **\"məst\"**, ba'zan oxiridagi *t* deyarli eshitilmaydi: *You must stop* = \"yu məs stop\".", examples: ["must", "You must stop."] },
          ],
        },
        { t: "tip", tone: "warn", md: "❌ *You don't must smoke.* — **must** bilan **do** ishlatilmaydi. ✅ *You **mustn't** smoke.*" },
        { t: "check", ex: { k: "listen", say: "You mustn't park here.", opts: ["You must park here.", "You mustn't park here.", "You must pack here."], a: 1, why: "\"masnt\" — **mustn't** (mumkin emas)." } },
      ],
    },
    {
      title: "Belgilar (signs) → gaplar",
      blocks: [
        { t: "p", md: "Belgilardagi qisqa yozuvlarni **must / mustn't** bilan to'liq gapga aylantirib tushuntirish mumkin:" },
        {
          t: "table", head: ["Belgi (sign)", "Gap", "O'zbekcha"], speak: [1],
          rows: [
            ["NO SMOKING", "You mustn't smoke.", "Chekish mumkin emas."],
            ["FASTEN YOUR SEAT BELT", "You must fasten your seat belt.", "Xavfsizlik kamarini taqing."],
            ["SWITCH OFF MOBILE PHONES", "You must switch off your phone.", "Telefonni o'chiring."],
            ["NO PARKING", "You mustn't park here.", "Bu yerda mashina qo'yish mumkin emas."],
            ["KEEP OFF THE GRASS", "You mustn't walk on the grass.", "Maysa ustida yurish mumkin emas."],
            ["DO NOT FEED THE ANIMALS", "You mustn't feed the animals.", "Hayvonlarga ovqat bermang."],
            ["SILENCE", "You must be quiet.", "Jim bo'ling."],
            ["DANGER! DEEP WATER", "You mustn't swim here.", "Xavfli! Bu yerda suzish mumkin emas."],
          ],
        },
        { t: "tip", tone: "info", md: "Kundalik nutqda taqiq uchun **can't** ham juda ko'p ishlatiladi: *You **can't** park here.* Belgi va rasmiy qoidalar uchun **mustn't** — kuchliroq." },
        { t: "check", ex: { k: "choice", q: "Belgi: **NO FOOD OR DRINK**. Bu nimani bildiradi?", opts: ["You must eat here.", "You mustn't eat or drink here.", "You don't have to eat here.", "You must bring food."], a: 1, why: "**NO …** → taqiq: **mustn't**." } },
        { t: "check", ex: { k: "fill", q: "Sign: FASTEN YOUR SEAT BELT. — You ___ fasten your seat belt.", a: ["must", "have to"], uz: "Xavfsizlik kamaringizni taqishingiz shart.", why: "Majburiy qoida → **must**." } },
      ],
    },
    {
      title: "mustn't ≠ don't have to",
      blocks: [
        { t: "p", md: "Bu ikkisi o'zbekchaga ba'zan bir xil tarjima qilinadi, lekin ma'nosi **butunlay boshqa**:" },
        {
          t: "table", head: ["", "Ma'nosi", "Misol"], speak: [2],
          rows: [
            ["mustn't", "mumkin emas, taqiq", "You mustn't take photos in the museum."],
            ["don't have to", "shart emas, majbur emas", "You don't have to buy a ticket. It's free."],
          ],
        },
        {
          t: "compare",
          good: { title: "Muzeyda (to'g'ri)", items: ["You mustn't touch the paintings. (taqiq)", "You don't have to pay on Sundays. (bepul)"] },
          bad: { title: "Xato ma'no", items: ["You don't have to touch the paintings.", "You mustn't pay on Sundays."] },
        },
        { t: "tip", tone: "warn", md: "Tekshirish usuli: gap \"**qilsangiz ham, qilmasangiz ham bo'ladi**\" degan ma'noni bersa — **don't have to**. \"**Qilmang, ruxsat yo'q**\" bo'lsa — **mustn't**." },
        { t: "check", ex: { k: "choice", q: "*The museum is free for students.* Students ___ pay.", opts: ["mustn't", "don't have to", "must", "has to"], a: 1, why: "Bepul → to'lash **shart emas**: *don't have to*." } },
        { t: "check", ex: { k: "choice", q: "*It's dangerous.* You ___ swim in this river.", opts: ["don't have to", "mustn't", "must", "doesn't have to"], a: 1, why: "Xavfli → **taqiq**: *mustn't*." } },
      ],
    },
    {
      title: "must yoki have to?",
      blocks: [
        { t: "p", md: "Bo'lishli gapda **must** va **have to** ma'nosi juda yaqin. Kichik farq bor:" },
        {
          t: "table", head: ["must", "have to"], speak: [0, 1],
          rows: [
            ["Yozma qoidalar, belgilar: Passengers must wear seat belts.", "Kundalik nutqda ko'proq: I have to work on Saturday."],
            ["O'zimning fikrim, his-tuyg'um: I must call Grandma. I miss her.", "Tashqi talab (ish, qonun): I have to wear a uniform at work."],
            ["Kuchli maslahat: You must try plov in Samarkand!", "Savolda odatda: Do I have to…?"],
          ],
        },
        { t: "tip", tone: "warn", md: "**must** ning o'tgan zamon shakli yo'q! ❌ *I musted*. O'tgan zamon uchun **had to**: *Yesterday I **had to** work late.*" },
        { t: "check", ex: { k: "choice", q: "\"Kecha shifokorga borishimga to'g'ri keldi.\"", opts: ["Yesterday I must go to the doctor.", "Yesterday I musted go to the doctor.", "Yesterday I had to go to the doctor.", "Yesterday I must went to the doctor."], a: 2, why: "O'tgan zamon → **had to** (*must* ning o'tgan shakli yo'q)." } },
      ],
    },
    {
      title: "O'qing: tog'dagi lager qoidalari",
      blocks: [
        {
          t: "text", title: "Welcome to Chimgan Mountain Camp!",
          en: "Welcome to Chimgan Mountain Camp! Please read our rules.\nYou must be back at the camp before 9 p.m. It gets dark and cold in the mountains very quickly.\nYou mustn't make fires in the forest, and you mustn't leave rubbish anywhere. Please take it with you.\nYou must walk on the paths. Some places are dangerous, especially when it's wet.\nYou don't have to bring towels or bedding — we have them. Dinner is at seven, but you don't have to eat at the camp.\nIf you break the rules, you will have to pay a fine. Have a great time!",
          uz: "Chimyon tog' lageriga xush kelibsiz! Iltimos, qoidalarimizni o'qing.\nLagerga kechki 9 dan oldin qaytishingiz shart. Tog'da juda tez qorong'i va sovuq bo'ladi.\nO'rmonda gulxan yoqish mumkin emas va hech qayerda axlat qoldirmang. Iltimos, uni o'zingiz bilan olib keting.\nFaqat so'qmoqlardan yurishingiz kerak. Ba'zi joylar xavfli, ayniqsa nam bo'lganda.\nSochiq yoki choyshab olib kelishingiz shart emas — bizda bor. Kechki ovqat soat yettida, lekin lagerda ovqatlanishingiz shart emas.\nQoidalarni buzsangiz, jarima to'lashingizga to'g'ri keladi. Vaqtingiz ajoyib o'tsin!",
        },
        { t: "check", ex: { k: "tf", q: "Lagerga kelganlar o'z sochig'ini olib kelishi shart.", a: false, why: "*You **don't have to** bring towels or bedding — we have them.*" } },
        { t: "check", ex: { k: "choice", q: "What time must people be back at the camp?", opts: ["before 7 p.m.", "before 9 p.m.", "after 9 p.m.", "at midnight"], a: 1, why: "*You must be back at the camp **before 9 p.m.***" } },
        {
          t: "dialog", lines: [
            { who: "Guide", en: "OK, everyone, we're going into the mosque now. You must take off your shoes.", uz: "Xo'sh, hammaga, hozir masjidga kiramiz. Oyoq kiyimlaringizni yechishingiz kerak." },
            { who: "Tourist", en: "Can I take photos inside?", uz: "Ichkarida suratga olsam bo'ladimi?" },
            { who: "Guide", en: "Yes, you can, but you mustn't use the flash. And you mustn't be loud.", uz: "Ha, bo'ladi, lekin chaqnoqdan foydalanish mumkin emas. Shovqin qilish ham mumkin emas." },
            { who: "Tourist", en: "Do I have to cover my head?", uz: "Boshimni yopishim kerakmi?" },
            { who: "Guide", en: "Women have to cover their heads. Men don't have to.", uz: "Ayollar boshini yopishi kerak. Erkaklar shart emas." },
          ],
        },
      ],
    },
  ],
  words: [
    { en: "sign", uz: "belgi, yozuv (ko'rsatkich)", ipa: "saɪn", pos: "noun", ex: "The sign says \"No smoking\".", exUz: "Belgida \"Chekish mumkin emas\" deb yozilgan." },
    { en: "smoke", uz: "chekmoq; tutun", ipa: "sməʊk", pos: "verb, noun", ex: "You mustn't smoke in the hotel.", exUz: "Mehmonxonada chekish mumkin emas." },
    { en: "fasten", uz: "taqmoq, mahkamlamoq", ipa: "ˈfɑː.sən", pos: "verb", ex: "Please fasten your seat belt.", exUz: "Iltimos, xavfsizlik kamaringizni taqing." },
    { en: "seat belt", uz: "xavfsizlik kamari", ipa: "ˈsiːt belt", pos: "noun", ex: "You must wear a seat belt in a taxi too.", exUz: "Taksida ham xavfsizlik kamarini taqish shart." },
    { en: "switch off", uz: "o'chirmoq (telefon, chiroq)", ipa: "ˌswɪtʃ ˈɒf", pos: "phrasal verb", ex: "Please switch off your phones.", exUz: "Iltimos, telefonlaringizni o'chiring." },
    { en: "park", uz: "(mashinani) to'xtatib qo'ymoq", ipa: "pɑːk", pos: "verb", ex: "You mustn't park in front of the gate.", exUz: "Darvoza oldida mashina qo'yish mumkin emas." },
    { en: "rubbish", uz: "axlat, chiqindi", ipa: "ˈrʌb.ɪʃ", pos: "noun (uncountable)", ex: "Don't leave your rubbish in the park.", exUz: "Axlatingizni bog'da qoldirmang." },
    { en: "fine", uz: "jarima", ipa: "faɪn", pos: "noun", ex: "He had to pay a fine for parking there.", exUz: "U o'sha yerga mashina qo'ygani uchun jarima to'lashga majbur bo'ldi." },
    { en: "be allowed to", uz: "ruxsat berilgan bo'lmoq", ipa: "bi əˈlaʊd tə", pos: "phrase", ex: "You aren't allowed to take photos here.", exUz: "Bu yerda suratga olishga ruxsat yo'q." },
    { en: "danger", uz: "xavf", ipa: "ˈdeɪn.dʒə", pos: "noun", ex: "Danger! Keep out!", exUz: "Xavfli! Kirmang!" },
  ],
  practice: [
    { k: "match", pairs: [["NO SMOKING", "You mustn't smoke."], ["FASTEN SEAT BELTS", "You must fasten your seat belt."], ["NO PARKING", "You mustn't park here."], ["SILENCE", "You must be quiet."], ["SWITCH OFF PHONES", "You must switch off your phone."]] },
    { k: "match", pairs: [["sign", "belgi"], ["rubbish", "axlat"], ["fine", "jarima"], ["danger", "xavf"], ["seat belt", "xavfsizlik kamari"]] },
    { k: "listen", say: "You mustn't swim here.", opts: ["You must swim here.", "You mustn't swim here.", "You don't swim here."], a: 1, why: "\"masnt\" — **mustn't**." },
    { k: "listen", say: "Passengers must fasten their seat belts.", opts: ["Passengers must fasten their seat belts.", "Passengers mustn't fasten their seat belts.", "Passengers must find their seats."], a: 0 },
    { k: "choice", q: "You ___ use your phone in the exam. It's against the rules.", opts: ["don't have to", "mustn't", "must", "have to"], a: 1, why: "Qoidaga zid → taqiq: **mustn't**." },
    { k: "choice", q: "It's a free concert. You ___ buy a ticket.", opts: ["mustn't", "don't have to", "must", "can't"], a: 1, why: "Bepul → **shart emas**: *don't have to*." },
    { k: "choice", q: "Qaysi gap **xato**?", opts: ["You mustn't touch it.", "She must leave now.", "You don't must smoke here.", "We must be careful."], a: 2, why: "**must** bilan *do* ishlatilmaydi: *You **mustn't** smoke here.*" },
    { k: "fill", q: "DANGER! You ___ go near the edge.", a: ["mustn't", "must not", "can't", "cannot"], uz: "Xavfli! Chetiga yaqinlashish mumkin emas.", why: "Xavf → taqiq: **mustn't**." },
    { k: "fill", q: "Please ___ off your mobile phones before the film.", a: ["switch", "turn"], uz: "Iltimos, filmdan oldin telefonlaringizni o'chiring.", why: "**switch off** (yoki *turn off*)." },
    { k: "fill", q: "Last year I ___ to pay a fine for parking in the wrong place.", a: ["had"], uz: "O'tgan yili noto'g'ri joyga mashina qo'ygani uchun jarima to'lashimga to'g'ri keldi.", why: "*must* ning o'tgan shakli yo'q → **had to**." },
    { k: "tf", q: "**You mustn't** va **You don't have to** — bir xil ma'no.", a: false, why: "**mustn't** — taqiq; **don't have to** — shart emas." },
    { k: "tf", q: "Chimyon lagerida kechki ovqatni faqat lagerda yeyish shart.", a: false, why: "*Dinner is at seven, but you **don't have to** eat at the camp.*" },
    { k: "order", uz: "Bu yerda chekish mumkin emas.", words: ["You", "mustn't", "smoke", "here."], extra: ["to", "don't"] },
    { k: "order", uz: "Siz xavfsizlik kamaringizni taqishingiz shart.", words: ["You", "must", "fasten", "your", "seat", "belt."], extra: ["to", "musts"] },
    { k: "translate", uz: "Muzeyda suratga olish mumkin emas.", a: ["You mustn't take photos in the museum", "You must not take photos in the museum", "You can't take photos in the museum", "You cannot take photos in the museum", "You aren't allowed to take photos in the museum", "You are not allowed to take photos in the museum", "You mustn't take pictures in the museum", "You can't take pictures in the museum", "You must not take pictures in the museum", "You cannot take pictures in the museum"] },
    { k: "speak", say: "You mustn't park here. It's a no parking zone.", uz: "Bu yerga mashina qo'yish mumkin emas. Bu to'xtash taqiqlangan hudud." },
  ],
  quiz: [
    { k: "listen", say: "You mustn't feed the animals.", opts: ["You must feed the animals.", "You mustn't feed the animals.", "You needn't feed the animals."], a: 1 },
    { k: "choice", q: "Sign: **KEEP OFF THE GRASS**", opts: ["You must walk on the grass.", "You mustn't walk on the grass.", "You don't have to walk on the grass.", "You must cut the grass."], a: 1, why: "**KEEP OFF** → taqiq: *mustn't walk on the grass*." },
    { k: "choice", q: "Children under six ___ pay on the bus. It's free for them.", opts: ["mustn't", "don't have to", "must", "doesn't have to"], a: 1, why: "Bepul → **don't have to** (*children* — ko'plik)." },
    { k: "choice", q: "To'g'ri gapni tanlang:", opts: ["He must to wear a helmet.", "He musts wear a helmet.", "He must wear a helmet.", "He must wears a helmet."], a: 2, why: "**must + V1**, -s yo'q." },
    { k: "choice", q: "\"Kecha kech ishlashimga to'g'ri keldi.\"", opts: ["Yesterday I must work late.", "Yesterday I had to work late.", "Yesterday I musted work late.", "Yesterday I have to work late."], a: 1, why: "O'tgan zamon → **had to**." },
    { k: "fill", q: "You ___ leave rubbish on the beach. Take it home.", a: ["mustn't", "must not", "can't", "cannot", "shouldn't", "should not"], uz: "Plyajda axlat qoldirish mumkin emas. Uyga olib keting.", why: "Taqiq → **mustn't**." },
    { k: "fill", q: "Please ___ your seat belts. We're going to land.", a: ["fasten"], uz: "Iltimos, kamarlaringizni taqing. Qo'nmoqchimiz.", why: "**fasten** your seat belt." },
    { k: "tf", q: "*mustn't* so'zida birinchi **t** o'qilmaydi: \"masnt\".", a: true, why: "**mustn't** = \"masnt\"." },
    { k: "translate", uz: "Bu yerda mashina qo'yish mumkin emas.", a: ["You mustn't park here", "You must not park here", "You can't park here", "You cannot park here", "You aren't allowed to park here", "You are not allowed to park here", "No parking here"] },
    { k: "order", uz: "Masjidda oyoq kiyimingizni yechishingiz kerak.", words: ["You", "must", "take", "off", "your", "shoes", "in", "the", "mosque."], extra: ["to", "mustn't"], alt: [["In", "the", "mosque", "you", "must", "take", "off", "your", "shoes."], ["You", "must", "take", "your", "shoes", "off", "in", "the", "mosque."]] },
  ],
  summary: [
    "**must + V1** — kuchli majburiyat, qoida: *You must fasten your seat belt.* (*must to*, *musts* ❌)",
    "**mustn't + V1** — taqiq: *You mustn't smoke.* Talaffuz: **\"masnt\"**. (*don't must* ❌)",
    "**mustn't** (mumkin emas) ≠ **don't have to** (shart emas): *You mustn't touch. / You don't have to pay.*",
    "Belgilar: NO SMOKING → *mustn't smoke*; SWITCH OFF PHONES → *must switch off*.",
    "**must** ning o'tgan zamoni yo'q → **had to**. Savolda odatda **Do I have to…?**",
  ],
  homework: "Uyingiz, maktabingiz yoki ishxonangiz uchun 8 ta qoida yozing: 4 ta **must**, 4 ta **mustn't**. Keyin 3 ta **don't have to** gap qo'shing. Ko'chada yoki internetda 5 ta inglizcha belgi (sign) toping va ularni *must / mustn't* bilan to'liq gapga aylantiring.",
};

export default lesson;
