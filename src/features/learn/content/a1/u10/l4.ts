import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u10-l4",
  title: "will or going to?",
  titleUz: "will yoki going to?",
  goal: "Kelajak haqida to'g'ri shaklni tanlaysiz: oldindan reja — **I'm going to visit Khiva**, shu zahoti qaror va taklif — **I'll carry your bag**, va'da — **I'll call you**, dalilga asoslangan bashorat — **It's going to rain**. **Shall I…?** bilan yordam taklif qilasiz.",
  slides: [
    {
      title: "Takror: ikkala shakl",
      blocks: [
        { t: "p", md: "Beginner darsida ikkala kelasi zamonni alohida o'rgandik. Endi ularni **yonma-yon** qo'yib, qaysi birini qachon tanlashni o'rganamiz." },
        {
          t: "table", head: ["", "will", "be going to"], speak: [1, 2],
          rows: [
            ["+", "I'll help you.", "I'm going to visit Khiva."],
            ["–", "She won't come.", "She isn't going to fly."],
            ["?", "Will you call me?", "Are you going to stay?"],
            ["shakl", "will + V1 (hamma shaxsga)", "am / is / are + going to + V1"],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I'll call you tonight.", "We're going to travel to Turkey.", "He's going to book a hotel."] },
          bad: { title: "Xato", items: ["I'll to call you tonight.", "We going to travel to Turkey.", "He's going to booked a hotel."] },
        },
        {
          t: "sounds", items: [
            { label: "I'll", say: "I'll", uz: "**\"ayl\"** — bitta bo'g'in. *All* (\"o:l\") emas.", examples: ["I'll", "I'll help you."] },
            { label: "won't", say: "won't", uz: "**\"wount\"** — *want* (\"wont\") bilan adashtirmang.", examples: ["won't", "want"] },
            { label: "going to", say: "I'm going to pack.", uz: "Tez nutqda **\"gona\"** (*gonna*) eshitiladi. Tushunish uchun bilib qo'ying, lekin yozmang.", examples: ["I'm going to pack.", "It's going to rain."] },
          ],
        },
        { t: "check", ex: { k: "choice", q: "To'g'ri gapni tanlang:", opts: ["They're going to rent a car.", "They going to rent a car.", "They're going rent a car.", "They will to rent a car."], a: 0, why: "**are + going to + V1**." } },
      ],
    },
    {
      title: "going to — oldindan reja, will — shu zahoti qaror",
      blocks: [
        { t: "p", md: "Eng muhim farq: **qaror qachon qilingan?**\n• Gapirishdan **oldin** qaror qilingan (reja, niyat) → **going to**.\n• Qaror **ayni gapirayotgan paytda** tug'ildi → **will**." },
        {
          t: "examples", items: [
            { en: "I'm going to visit my aunt in Fergana next week. I bought the tickets yesterday.", uz: "Kelasi hafta Farg'onaga xolamnikiga bormoqchiman. Chiptalarni kecha oldim.", note: "Reja oldindan → **going to**" },
            { en: "Oh, the bus is late. I'll take a taxi.", uz: "Voy, avtobus kechikyapti. Taksi olaman.", note: "Hozir qaror qildi → **will**" },
            { en: "A: Tea or coffee? — B: I'll have tea, please.", uz: "Choymi yoki qahva? — Choy olaman, iltimos.", note: "Hozir tanladi → **will**" },
            { en: "We're going to stay in a hotel near the Registan.", uz: "Registon yaqinidagi mehmonxonada qolmoqchimiz.", note: "Reja → **going to**" },
          ],
        },
        { t: "tip", tone: "warn", md: "O'zbekcha \"olaman, qilaman\" kelasi zamonni ham bildiradi. Shuning uchun xato qilinadi:\n❌ *The bus is late. I take a taxi.*\n✅ *The bus is late. **I'll** take a taxi.*" },
        { t: "check", ex: { k: "choice", q: "A: *Oh no, I haven't got any money!* B: *Don't worry, I ___ pay.*", opts: ["'m going", "'ll", "pay", "going to"], a: 1, why: "B hozir qaror qildi va yordam taklif qilyapti → **I'll pay**." } },
        { t: "check", ex: { k: "choice", q: "*Bilasizmi, men o'tgan oy rejalashtirdim:* ___ learn to drive this summer.", opts: ["I'll", "I'm going to", "I", "I'm will"], a: 1, why: "Oldindan qilingan reja → **I'm going to**." } },
      ],
    },
    {
      title: "Taklif va va'da: I'll… / Shall I…?",
      blocks: [
        { t: "p", md: "**will** yordam taklif qilganda va va'da berganda ham ishlatiladi:" },
        {
          t: "examples", items: [
            { en: "Your bag looks heavy. I'll carry it for you.", uz: "Sumkangiz og'irga o'xshaydi. Men ko'tarib beraman." },
            { en: "I promise I'll send you a postcard.", uz: "Va'da beraman, senga ochiq xat yuboraman." },
            { en: "Don't worry, I won't forget your souvenir.", uz: "Xavotir olma, sovg'angni unutmayman." },
            { en: "Shall I open the window?", uz: "Derazani ochaymi?" },
            { en: "Shall we go sightseeing tomorrow?", uz: "Ertaga shaharni aylanamizmi?" },
          ],
        },
        { t: "tip", tone: "info", md: "**Shall I…?** = \"…aymi?\" (yordam taklifi). **Shall we…?** = \"…aylikmi?\" (birga biror narsa qilishni taklif qilish). Boshlang'ich darajada uni faqat savolda va faqat **I** / **we** bilan ishlating." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I'll help you with your luggage.", "Shall I call a taxi?", "I promise I'll write."] },
          bad: { title: "Xato", items: ["I help you with your luggage.", "Will I call a taxi?", "I promise I write."] },
        },
        { t: "check", ex: { k: "fill", q: "It's cold in here. ___ I close the window?", a: ["Shall", "Should", "Can", "Could"], uz: "Bu yer sovuq. Derazani yopaymi?", why: "Yordam taklifi savolda → **Shall I…?**" } },
      ],
    },
    {
      title: "Bashorat: dalil bor yoki shunchaki fikr?",
      blocks: [
        { t: "p", md: "Kelajakni taxmin qilganda ham ikkala shakl bor:\n• Ko'z oldingizda **dalil** bor → **going to**.\n• Shunchaki **fikr, ishonch** (*I think, I'm sure, probably*) → **will**." },
        {
          t: "table", head: ["Dalil → going to", "Fikr → will"], speak: [0, 1],
          rows: [
            ["Look at those black clouds! It's going to rain.", "I think it will be sunny tomorrow."],
            ["Hurry up! We're going to miss the train.", "I'm sure you'll love Samarkand."],
            ["Be careful! You're going to fall!", "Maybe the hotel will be expensive."],
          ],
        },
        { t: "tip", tone: "good", md: "Signal so'zlar: **Look! / Be careful! / Hurry up!** → odatda **going to**. **I think / I'm sure / I hope / probably / maybe** → odatda **will**." },
        { t: "check", ex: { k: "choice", q: "*It's 8:55. The train leaves at 9:00 and we're still at home!* We ___ miss the train!", opts: ["will to", "are going to", "go to", "do"], a: 1, why: "Dalil ko'z oldida (vaqt yo'q) → **We're going to miss** the train." } },
        { t: "check", ex: { k: "choice", q: "I think you ___ like Khiva. It's beautiful.", opts: ["'ll", "are", "going to", "will to"], a: 0, why: "**I think** + shaxsiy fikr → **you'll like**." } },
      ],
    },
    {
      title: "Dialog: sayohatga tayyorgarlik",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Lola", en: "So, what are you going to do in the holidays?", uz: "Xo'sh, ta'tilda nima qilmoqchisan?" },
            { who: "Sardor", en: "I'm going to travel around Uzbekistan with my cousin. We booked the train tickets last week.", uz: "Amakivachcham bilan O'zbekiston bo'ylab sayohat qilmoqchiman. Poyezd chiptalarini o'tgan hafta band qildik." },
            { who: "Lola", en: "Lucky you! Where are you going to go?", uz: "Omading bor! Qayerlarga bormoqchisizlar?" },
            { who: "Sardor", en: "Samarkand, Bukhara and Khiva. We're going to go sightseeing and buy souvenirs.", uz: "Samarqand, Buxoro va Xiva. Shaharlarni aylanib, esdalik sovg'alar olmoqchimiz." },
            { who: "Lola", en: "Khiva is very hot in summer. I think you'll need a hat!", uz: "Xiva yozda juda issiq. Menimcha, senga shlyapa kerak bo'ladi!" },
            { who: "Sardor", en: "Good idea. Oh, I haven't got a big suitcase.", uz: "Yaxshi fikr. E, menda katta chamadon yo'q-ku." },
            { who: "Lola", en: "No problem — I'll lend you mine. Shall I bring it tomorrow?", uz: "Muammo yo'q — o'zimnikini berib turaman. Ertaga olib kelaymi?" },
            { who: "Sardor", en: "Yes, please! Thanks. I promise I'll bring you a souvenir.", uz: "Ha, iltimos! Rahmat. Va'da beraman, senga sovg'a olib kelaman." },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Sardor sayohat haqida dialog paytida qaror qildi.", a: false, why: "*We **booked** the train tickets last week* — reja oldindan, shuning uchun **going to**." } },
        { t: "check", ex: { k: "choice", q: "Why does Lola say \"**I'll** lend you mine\"?", opts: ["It's an old plan.", "She decides and offers help now.", "There is evidence.", "It's a timetable."], a: 1, why: "Hozir qaror qilib, yordam taklif qilyapti → **will**." } },
      ],
    },
    {
      title: "O'qing: Dilshodning rejalari",
      blocks: [
        {
          t: "text", title: "A trip to Istanbul",
          en: "Next month Dilshod is going to fly to Istanbul for five days. He booked his flight and hotel last week. On the first day he's going to relax, and the next day he's going to go sightseeing with a tour guide.\nHe doesn't know much about Turkish food, but he thinks he'll love it. His mother is worried. \"Don't worry, Mum,\" he says. \"I'll call you every evening, and I won't forget your souvenir!\"\nNow he's looking at the sky. There are big grey clouds. \"Oh no, it's going to rain,\" he thinks. \"I'll pack my umbrella.\"",
          uz: "Kelasi oy Dilshod besh kunga Istanbulga uchmoqchi. U reysi va mehmonxonani o'tgan hafta band qildi. Birinchi kuni dam olmoqchi, ertasiga esa gid bilan shahar aylanmoqchi.\nU turk taomlari haqida ko'p narsa bilmaydi, lekin ularni juda yoqtirib qoladi deb o'ylaydi. Onasi xavotirda. \"Xavotir olmang, oyi,\" deydi u. \"Har kuni kechqurun sizga qo'ng'iroq qilaman va sovg'angizni unutmayman!\"\nHozir u osmonga qarayapti. Katta kulrang bulutlar bor. \"Voy, yomg'ir yog'adi,\" deb o'ylaydi u. \"Soyabonimni sumkaga solaman.\"",
        },
        {
          t: "table", head: ["Gap", "Nega?"], speak: [0],
          rows: [
            ["He's going to fly to Istanbul.", "oldindan reja (band qilgan)"],
            ["He thinks he'll love it.", "fikr (I think)"],
            ["I'll call you every evening.", "va'da"],
            ["It's going to rain.", "dalil (bulutlar)"],
            ["I'll pack my umbrella.", "shu zahoti qaror"],
          ],
        },
        { t: "check", ex: { k: "tf", q: "Dilshod sayohatning birinchi kuni gid bilan shahar aylanadi.", a: false, why: "*On the first day he's going to **relax**, and the next day…* go sightseeing." } },
      ],
    },
  ],
  words: [
    { en: "pack", uz: "(sumka/chamadonga) narsalarni joylamoq", ipa: "pæk", pos: "verb", ex: "I'm going to pack my suitcase tonight.", exUz: "Bugun kechqurun chamadonimni yig'aman." },
    { en: "hat", uz: "shlyapa, bosh kiyim", ipa: "hæt", pos: "noun", ex: "Take a hat. Khiva is going to be hot.", exUz: "Shlyapa oling. Xivada issiq bo'ladi." },
    { en: "postcard", uz: "ochiq xat (otkritka)", ipa: "ˈpəʊst.kɑːd", pos: "noun", ex: "I'm going to send you a postcard from Bukhara.", exUz: "Buxorodan senga ochiq xat yuboraman." },
    { en: "cloud", uz: "bulut", ipa: "klaʊd", pos: "noun", ex: "Look at that dark cloud. It's going to rain.", exUz: "Anavi qora bulutga qara. Yomg'ir yog'adi." },
    { en: "tour guide", uz: "gid, ekskursovod", ipa: "ˈtʊə ɡaɪd", pos: "noun", ex: "Our tour guide speaks English very well.", exUz: "Gidimiz inglizchani juda yaxshi gapiradi." },
    { en: "hurry up", uz: "shoshilmoq, tezroq bo'lmoq", ipa: "ˌhʌr.i ˈʌp", pos: "phrasal verb", ex: "Hurry up! The taxi is waiting.", exUz: "Tezroq bo'ling! Taksi kutyapti." },
    { en: "grey", uz: "kulrang", ipa: "ɡreɪ", pos: "adj", ex: "The sky is grey. It's going to rain.", exUz: "Osmon kulrang. Yomg'ir yog'adi." },
    { en: "map", uz: "xarita", ipa: "mæp", pos: "noun", ex: "I'll show you the way on the map.", exUz: "Yo'lni xaritadan ko'rsataman." },
    { en: "rent", uz: "ijaraga olmoq", ipa: "rent", pos: "verb", ex: "They're going to rent a car in Turkey.", exUz: "Ular Turkiyada mashina ijaraga olishmoqchi." },
    { en: "answer", uz: "javob bermoq; javob", ipa: "ˈɑːn.sə", pos: "verb, noun", ex: "Don't worry, I'll answer the phone.", exUz: "Xavotir olmang, telefonga javob beraman." },
  ],
  practice: [
    { k: "match", pairs: [["pack", "narsalarni joylamoq"], ["book", "band qilmoq"], ["carry", "ko'tarib bormoq"], ["miss", "qolib ketmoq"], ["rent", "ijaraga olmoq"]] },
    { k: "match", pairs: [["oldindan reja", "going to"], ["shu zahoti qaror", "will"], ["yordam taklifi (savol)", "Shall I…?"], ["dalilga asoslangan bashorat", "It's going to…"]] },
    { k: "listen", say: "I'll carry your bag.", opts: ["I'll carry your bag.", "I carry your bag.", "I'm carrying your bag."], a: 0, why: "**I'll** = \"ayl\"." },
    { k: "listen", say: "We won't miss the train.", opts: ["We want to miss the train.", "We won't miss the train.", "We will miss the train."], a: 1, why: "**won't** \"wount\" ≠ **want** \"wont\"." },
    { k: "choice", q: "A: *The phone's ringing.* B: *OK, I ___ answer it.*", opts: ["'m going", "'ll", "answer", "will to"], a: 1, why: "Shu zahoti qaror → **I'll answer it**." },
    { k: "choice", q: "Look at that man! He's running too fast. He ___ fall!", opts: ["'s going to", "'ll to", "falls", "shall"], a: 0, why: "Dalil ko'z oldida → **He's going to fall**." },
    { k: "choice", q: "A: *Why have you got a map?* B: *Because I ___ go sightseeing.*", opts: ["'ll", "'m going to", "shall", "going to"], a: 1, why: "Xarita oldindan olingan — reja → **I'm going to**." },
    { k: "fill", q: "I promise I ___ forget your birthday.", a: ["won't", "will not"], uz: "Va'da beraman, tug'ilgan kuningni unutmayman.", why: "Va'da (inkor) → **won't**." },
    { k: "fill", q: "We've got the tickets. We ___ going to fly to Dubai on Friday.", a: ["are", "'re"], uz: "Chiptalarimiz bor. Juma kuni Dubayga uchmoqchimiz.", why: "**we + are + going to**." },
    { k: "fill", q: "___ we go to the museum the day after tomorrow?", a: ["Shall", "Should", "Can", "Could"], uz: "Indinga muzeyga boraylikmi?", why: "Taklif **we** bilan → **Shall we…?**" },
    { k: "tf", q: "*The bus is late. I take a taxi.* — to'g'ri gap.", a: false, why: "Shu zahoti qaror → ***I'll** take a taxi.*" },
    { k: "tf", q: "**Shall I carry your suitcase?** = \"Chamadoningizni ko'tarib beraymi?\"", a: true, why: "**Shall I…?** — yordam taklifi." },
    { k: "order", uz: "Menimcha, sizga Buxoro yoqadi.", words: ["I", "think", "you'll", "like", "Bukhara."], extra: ["will", "to"] },
    { k: "order", uz: "Ular mashina ijaraga olmoqchi.", words: ["They're", "going", "to", "rent", "a", "car."], extra: ["will", "renting"] },
    { k: "translate", uz: "Tezroq! Biz poyezddan qolib ketamiz.", a: ["Hurry up! We're going to miss the train", "Hurry up! We are going to miss the train", "Hurry! We're going to miss the train", "Hurry! We are going to miss the train", "Hurry up! We'll miss the train", "Hurry up! We will miss the train", "Hurry! We'll miss the train", "Hurry! We will miss the train", "We're going to miss the train. Hurry up!"], why: "Dalil (vaqt yo'q) → odatda **going to**." },
    { k: "speak", say: "Don't worry, I'll call you every evening.", uz: "Xavotir olmang, har kuni kechqurun qo'ng'iroq qilaman." },
  ],
  quiz: [
    { k: "listen", say: "It's going to rain.", opts: ["It's going to snow.", "It's going to rain.", "It isn't going to rain."], a: 1 },
    { k: "choice", q: "A: *I'm thirsty.* B: *Wait, I ___ get you some water.*", opts: ["'m going", "'ll", "get", "will to"], a: 1, why: "Hozir qaror + taklif → **I'll get** you some water." },
    { k: "choice", q: "*I booked a room last month.* I ___ stay at the Grand Hotel.", opts: ["'ll", "'m going to", "shall", "stay"], a: 1, why: "Oldindan reja → **I'm going to stay**." },
    { k: "choice", q: "Siz yordam taklif qilyapsiz. Qaysi gap **xato**?", opts: ["I'll help you.", "Shall I help you?", "Will I help you?"], a: 2, why: "Yordam taklifi savolda — **Shall I…?**, *Will I…?* emas." },
    { k: "choice", q: "*Look at the sky! It's black.* ___", opts: ["It's going to snow.", "It snows.", "It will to snow.", "It's snow."], a: 0, why: "Dalil bor → **It's going to snow.**" },
    { k: "fill", q: "Maybe the museum ___ be closed on Monday.", a: ["will", "'ll"], uz: "Balki muzey dushanba kuni yopiq bo'lar.", why: "**Maybe** + fikr → **will**." },
    { k: "fill", q: "She's going ___ visit her grandparents next week.", a: ["to"], uz: "U kelasi hafta buvasi va buvisinikiga bormoqchi.", why: "**going to + V1**." },
    { k: "tf", q: "*I'm sure you'll love the food in Istanbul.* — to'g'ri: fikr bildirilmoqda.", a: true, why: "**I'm sure** + **will** — shaxsiy fikr/ishonch." },
    { k: "translate", uz: "Sumkangizni men ko'taraman.", a: ["I'll carry your bag", "I will carry your bag", "I'll carry your bag for you", "I will carry your bag for you"], why: "Yordam taklifi → **I'll**." },
    { k: "order", uz: "Indinga diqqatga sazovor joylarni aylanamizmi?", words: ["Shall", "we", "go", "sightseeing", "the", "day", "after", "tomorrow?"], extra: ["going", "to"] },
  ],
  summary: [
    "**going to** — oldindan reja: *I'm going to visit Khiva. (Chiptalarni oldim.)*",
    "**will** — shu zahoti qaror, taklif, va'da: *The bus is late. I'll take a taxi. I promise I'll call.*",
    "Bashorat: dalil bor → **going to** (*Look! It's going to rain.*); fikr → **will** (*I think you'll like it.*).",
    "Taklif savolda: **Shall I…?** (…aymi?), **Shall we…?** (…aylikmi?).",
    "O'zbekcha \"olaman\" ni ❌ *I take* deb tarjima qilmang — kelajak uchun **I'll take** / **I'm going to take**.",
  ],
  homework: "Kelgusi sayohatingiz (haqiqiy yoki xayoliy) haqida yozing: 4 ta reja (*I'm going to…*), 2 ta fikr (*I think … will…*), 2 ta va'da (*I promise I'll…*). Keyin oilangizga 3 ta yordam taklif qiling — inglizcha: *Shall I…? I'll…*",
};

export default lesson;
