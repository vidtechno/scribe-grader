import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u10-l3",
  title: "At the hotel: Could I…?",
  titleUz: "Mehmonxonada: Can I / Could I…?",
  goal: "Mehmonxonada xona band qilasiz, ruxsat so'raysiz va xushmuomala iltimos qilasiz: **Could I have a room for two nights? Could you call a taxi, please?** Iltimosga to'g'ri javob berasiz: *Yes, of course. / I'm afraid not.*",
  slides: [
    {
      title: "Can I…? va Could I…? — ruxsat so'rash",
      blocks: [
        { t: "p", md: "Beginner darsida **Can I…?** ni o'rgandik. Endi uning **xushmuomalaroq** shakli — **Could I…?**. Ikkalasidan keyin ham fe'lning **V1** shakli keladi (*to* yo'q!):" },
        {
          t: "table", head: ["Shakl", "Misol", "Qachon"], speak: [1],
          rows: [
            ["Can I + V1?", "Can I leave my bag here?", "do'stlar, oddiy vaziyat"],
            ["Could I + V1?", "Could I leave my bag here?", "mehmonxona, notanish odam, xushmuomala"],
            ["Could I have…?", "Could I have the key, please?", "biror narsa so'rash"],
          ],
        },
        { t: "tip", tone: "info", md: "Bu yerda **could** — o'tgan zamon emas! U shunchaki **\"…sam bo'ladimi?\"** degan muloyim so'rov. *Could I sit here?* = \"Shu yerga o'tirsam maylimi?\"" },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["Could I have a towel, please?", "Can I pay by card?", "Could I see the room?"] },
          bad: { title: "Xato", items: ["Could I to have a towel?", "Can I paying by card?", "Could I saw the room?"] },
        },
        { t: "check", ex: { k: "choice", q: "Mehmonxona xodimidan muloyim so'rang: \"Kalitni bersangiz.\"", opts: ["Could I have the key, please?", "Could I to have the key, please?", "Could I had the key, please?", "I could have the key, please?"], a: 0, why: "**Could I + V1**: *Could I **have**…?*" } },
      ],
    },
    {
      title: "Could you…? — boshqadan iltimos qilish",
      blocks: [
        { t: "p", md: "**Could I…?** — men biror narsa qilsam maylimi. **Could you…?** — siz men uchun biror narsa qilib bera olasizmi:" },
        {
          t: "examples", items: [
            { en: "Could you call a taxi for me, please?", uz: "Menga taksi chaqirib bera olasizmi, iltimos?" },
            { en: "Could you wake me up at six, please?", uz: "Meni soat oltida uyg'otib qo'ya olasizmi?" },
            { en: "Could you repeat that, please?", uz: "Takrorlab yuborasizmi, iltimos?" },
            { en: "Could you speak more slowly, please?", uz: "Sekinroq gapira olasizmi, iltimos?" },
          ],
        },
        { t: "tip", tone: "warn", md: "Adashtirmang:\n• ***Could I** open the window?* — Men ochsam maylimi?\n• ***Could you** open the window?* — Siz ochib bera olasizmi?" },
        { t: "tip", tone: "good", md: "**please** — inglizlar uchun juda muhim. Usiz iltimos qo'pol eshitilishi mumkin. Odatda gap oxirida: *Could you help me, **please**?*" },
        { t: "check", ex: { k: "choice", q: "Siz xodimdan sumkangizni xonaga olib chiqib berishini so'ramoqchisiz:", opts: ["Could I take my bag to my room?", "Could you take my bag to my room, please?", "You could take my bag to my room.", "Could you to take my bag to my room?"], a: 1, why: "Boshqadan iltimos → **Could you + V1…, please?**" } },
      ],
    },
    {
      title: "Javob berish: Yes, of course / I'm afraid not",
      blocks: [
        {
          t: "table", head: ["Ha", "Yo'q (muloyim)"], speak: [0, 1],
          rows: [
            ["Yes, of course.", "I'm afraid not."],
            ["Sure.", "Sorry, you can't."],
            ["Yes, you can.", "I'm sorry, it isn't possible."],
            ["No problem.", "Sorry, we haven't got any."],
          ],
        },
        { t: "tip", tone: "warn", md: "**Could I…?** ga ruxsat berganda odatda **can** yoki oddiy *of course* aytiladi; *Yes, you could.* tabiiy emas:\n❌ *Yes, you could.*\n✅ *Yes, you **can**.* / *Yes, of course.*" },
        { t: "tip", tone: "info", md: "**I'm afraid not** — \"Afsuski, yo'q\". Bu yerda *afraid* \"qo'rqaman\" emas, balki **\"afsuski\"** ma'nosida. Juda muloyim rad javobi." },
        {
          t: "examples", items: [
            { en: "Could I check out late? — I'm afraid not. Check-out is at twelve.", uz: "Kechroq chiqsam bo'ladimi? — Afsuski, yo'q. Chiqish soat o'n ikkida." },
            { en: "Could I have another towel? — Yes, of course.", uz: "Yana bitta sochiq bersangiz? — Ha, albatta." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "*Could I use the phone?* — Qaysi javob **xato**?", opts: ["Yes, of course.", "Sure.", "Yes, you could.", "Yes, you can."], a: 2, why: "Ruxsat berishda **can** aytiladi: *Yes, you can.* *Yes, you could* — tabiiy emas." } },
      ],
    },
    {
      title: "Mehmonxona so'zlari",
      blocks: [
        {
          t: "table", head: ["Ingliz tilida", "O'zbekcha"], speak: [0],
          rows: [
            ["reception", "qabulxona (resepshn)"],
            ["a reservation / book a room", "bron / xona band qilmoq"],
            ["a single room", "bir kishilik xona"],
            ["a double room", "ikki kishilik xona (bitta katta karavot)"],
            ["a key card", "kalit-karta"],
            ["the lift", "lift"],
            ["breakfast is included", "nonushta narxga kiradi"],
            ["check in / check out", "joylashmoq / xonani topshirib ketmoq"],
            ["a room with a view", "manzarali xona"],
          ],
        },
        {
          t: "sounds", items: [
            { label: "could", say: "could", uz: "**\"kud\"** — *l* o'qilmaydi! *good* bilan qofiyadosh.", examples: ["could", "Could I…?", "Could you…?"] },
            { label: "reception", say: "reception", uz: "**\"ri'sepshn\"** — urg'u o'rtada: re-**CEP**-tion.", examples: ["reception", "at reception"] },
            { label: "towel", say: "towel", uz: "**\"tauel\"** — \"to-vel\" emas.", examples: ["towel", "a clean towel"] },
          ],
        },
        { t: "tip", tone: "info", md: "Amerikada **lift** — *elevator*, **reception** — *front desk* deyiladi. Ikkalasini ham tushunish foydali." },
        { t: "check", ex: { k: "listen", say: "Could I have a double room?", opts: ["Could I have a double room?", "Can I have a double room?", "Could I have a single room?"], a: 0, why: "**could** = \"kud\", **double** = ikki kishilik." } },
      ],
    },
    {
      title: "Dialog: Buxorodagi mehmonxonada",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Receptionist", en: "Good evening. Welcome to the Silk Road Hotel. How can I help you?", uz: "Xayrli kech. Silk Road mehmonxonasiga xush kelibsiz. Qanday yordam bera olaman?" },
            { who: "Emma", en: "Hello. I've got a reservation. My name's Emma Clark.", uz: "Salom. Menda bron bor. Ismim Emma Klark." },
            { who: "Receptionist", en: "Yes, Ms Clark. A single room for three nights. Could I see your passport, please?", uz: "Ha, Klark xonim. Uch kechaga bir kishilik xona. Pasportingizni ko'rsam bo'ladimi?" },
            { who: "Emma", en: "Here you are. Is breakfast included?", uz: "Marhamat. Nonushta narxga kiradimi?" },
            { who: "Receptionist", en: "Yes, it is. Breakfast is from seven to ten. Here's your key card. Room 204, on the second floor.", uz: "Ha. Nonushta yettidan o'ngacha. Mana kalit-kartangiz. 204-xona, ikkinchi qavatda." },
            { who: "Emma", en: "Thank you. Could I have the Wi-Fi password, please?", uz: "Rahmat. Wi-Fi parolini bersangiz, iltimos." },
            { who: "Receptionist", en: "Of course. It's on the card. Anything else?", uz: "Albatta. U kartada yozilgan. Yana biror narsa?" },
            { who: "Emma", en: "Yes. Could you call a taxi for me tomorrow at nine?", uz: "Ha. Ertaga soat to'qqizda menga taksi chaqirib bera olasizmi?" },
            { who: "Receptionist", en: "No problem. Enjoy your stay!", uz: "Muammo yo'q. Yaxshi dam oling!" },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Emmaning xonasi ikki kishilik va ikki kechaga band qilingan.", a: false, why: "*A **single** room for **three** nights.*" } },
        { t: "check", ex: { k: "choice", q: "Is breakfast included?", opts: ["Yes, it is.", "No, it isn't.", "Only on Sunday.", "Only for two nights."], a: 0, why: "*Is breakfast included? — **Yes, it is.***" } },
      ],
    },
    {
      title: "Muammo bo'lsa: shikoyat va iltimos",
      blocks: [
        { t: "p", md: "Xonada biror narsa ishlamasa, muloyim aytib, keyin **Could you…?** bilan iltimos qiling:" },
        {
          t: "examples", items: [
            { en: "The shower doesn't work. Could you send someone, please?", uz: "Dush ishlamayapti. Kimnidir yubora olasizmi, iltimos?" },
            { en: "There aren't any towels in my room. Could I have two, please?", uz: "Xonamda sochiq yo'q. Ikkita bersangiz, iltimos." },
            { en: "My room is very noisy. Could I change rooms?", uz: "Xonam juda shovqinli. Xonani almashtirsam bo'ladimi?" },
            { en: "The air conditioning isn't working.", uz: "Konditsioner ishlamayapti." },
          ],
        },
        {
          t: "text", title: "A message from Room 315",
          en: "Hi! I'm in Room 315. I arrived an hour ago and I've got two problems. First, the air conditioning isn't working, and it's very hot in the room. Second, there's only one towel, but we are two people. Could you send someone to look at the air conditioning, please? And could I have another towel? Thank you very much! Also, could you tell me what time the restaurant opens? — Mr Lee",
          uz: "Salom! Men 315-xonadaman. Bir soat oldin keldim va ikkita muammom bor. Birinchidan, konditsioner ishlamayapti va xonada juda issiq. Ikkinchidan, faqat bitta sochiq bor, biz esa ikki kishimiz. Konditsionerni ko'rish uchun kimnidir yubora olasizmi, iltimos? Yana bitta sochiq bersangiz? Katta rahmat! Yana, restoran soat nechada ochilishini ayta olasizmi? — Janob Li",
        },
        { t: "check", ex: { k: "tf", q: "Janob Lining xonasida konditsioner ishlamayapti va bitta sochiq yetishmaydi.", a: true, why: "*The air conditioning isn't working… there's only one towel, but we are two people.*" } },
      ],
    },
  ],
  words: [
    { en: "reception", uz: "qabulxona, resepshn", ipa: "rɪˈsep.ʃən", pos: "noun", ex: "Please leave your key at reception.", exUz: "Iltimos, kalitingizni qabulxonada qoldiring." },
    { en: "reservation", uz: "bron, oldindan band qilish", ipa: "ˌrez.əˈveɪ.ʃən", pos: "noun", ex: "I've got a reservation for two nights.", exUz: "Menda ikki kechaga bron bor." },
    { en: "single room", uz: "bir kishilik xona", ipa: "ˌsɪŋ.ɡəl ˈruːm", pos: "noun", ex: "A single room costs fifty dollars.", exUz: "Bir kishilik xona ellik dollar turadi." },
    { en: "double room", uz: "ikki kishilik xona", ipa: "ˌdʌb.əl ˈruːm", pos: "noun", ex: "Could we have a double room, please?", exUz: "Bizga ikki kishilik xona bersangiz, iltimos." },
    { en: "key card", uz: "kalit-karta", ipa: "ˈkiː kɑːd", pos: "noun", ex: "My key card doesn't work.", exUz: "Kalit-kartam ishlamayapti." },
    { en: "towel", uz: "sochiq", ipa: "ˈtaʊ.əl", pos: "noun", ex: "Could I have a clean towel, please?", exUz: "Toza sochiq bersangiz, iltimos." },
    { en: "lift", uz: "lift", ipa: "lɪft", pos: "noun", ex: "The lift is next to reception.", exUz: "Lift qabulxona yonida." },
    { en: "check out", uz: "mehmonxonadan chiqib ketmoq (xonani topshirmoq)", ipa: "ˌtʃek ˈaʊt", pos: "phrasal verb", ex: "We check out at twelve.", exUz: "Biz soat o'n ikkida xonani topshiramiz." },
    { en: "included", uz: "narxga kirgan, qo'shilgan", ipa: "ɪnˈkluː.dɪd", pos: "adj", ex: "Breakfast is included.", exUz: "Nonushta narxga kiradi." },
    { en: "view", uz: "manzara, ko'rinish", ipa: "vjuː", pos: "noun", ex: "Our room has a view of the mountains.", exUz: "Xonamizdan tog'lar manzarasi ko'rinadi." },
  ],
  practice: [
    { k: "match", pairs: [["reception", "qabulxona"], ["towel", "sochiq"], ["lift", "lift"], ["view", "manzara"], ["reservation", "bron"]] },
    { k: "match", pairs: [["Could I…?", "…sam maylimi?"], ["Could you…?", "…ib bera olasizmi?"], ["I'm afraid not.", "Afsuski, yo'q."], ["Of course.", "Albatta."]] },
    { k: "listen", say: "Could you call a taxi, please?", opts: ["Could you call a taxi, please?", "Could I call a taxi, please?", "Can you call a taxi, please?"], a: 0 },
    { k: "listen", say: "Is breakfast included?", opts: ["Is breakfast included?", "Is breakfast at eight?", "Is lunch included?"], a: 0 },
    { k: "choice", q: "Could I ___ the room, please?", opts: ["to see", "seeing", "see", "saw"], a: 2, why: "**Could I + V1**: *Could I **see** the room?*" },
    { k: "choice", q: "Resepshndagi xodimning gapini tushunmadingiz. Nima deysiz?", opts: ["Could I repeat that, please?", "Could you repeat that, please?", "You repeat, please.", "Could you to repeat that?"], a: 1, why: "Xodim takrorlashi kerak → **Could you** repeat that, please?" },
    { k: "choice", q: "*Could I check out at two?* — Muloyim rad javobini tanlang:", opts: ["No, you couldn't.", "I'm afraid not.", "No, I couldn't.", "Yes, you could."], a: 1, why: "**I'm afraid not** — muloyim \"yo'q\"." },
    { k: "fill", q: "___ I have a room with a view, please?", a: ["Could", "Can", "May"], uz: "Manzarali xona bersangiz, iltimos.", why: "Ruxsat/so'rov → **Could I…?** (yoki *Can I…?*)." },
    { k: "fill", q: "Breakfast is ___ in the price.", a: ["included"], uz: "Nonushta narxga kiradi.", why: "**included** — narxga kirgan." },
    { k: "fill", q: "Could you ___ me up at seven, please?", a: ["wake"], uz: "Meni yettida uyg'otib qo'ya olasizmi?", why: "**wake up** — uyg'otmoq: *Could you **wake** me up…?*" },
    { k: "tf", q: "**Could I…?** bu yerda o'tgan zamonni bildiradi.", a: false, why: "Iltimosda **could** — o'tgan zamon emas, muloyim so'rov." },
    { k: "tf", q: "Emmaning xonasi 204-xona, ikkinchi qavatda.", a: true, why: "*Room 204, on the second floor.*" },
    { k: "order", uz: "Menga yana bitta sochiq bersangiz, iltimos.", words: ["Could", "I", "have", "another", "towel,", "please?"], extra: ["to", "had"] },
    { k: "order", uz: "Menga taksi chaqirib bera olasizmi?", words: ["Could", "you", "call", "a", "taxi", "for", "me?"], extra: ["I", "calling"], alt: [["Could", "you", "call", "me", "a", "taxi?"]] },
    { k: "translate", uz: "Pasportingizni ko'rsam bo'ladimi?", a: ["Could I see your passport", "Can I see your passport", "Could I see your passport, please", "Can I see your passport, please", "May I see your passport", "May I see your passport, please", "Could I have your passport", "Can I have your passport"] },
    { k: "speak", say: "Could I have a double room for two nights, please?", uz: "Ikki kechaga ikki kishilik xona bersangiz, iltimos." },
  ],
  quiz: [
    { k: "listen", say: "I've got a reservation.", opts: ["I've got a reservation.", "I haven't got a reservation.", "Have you got a reservation?"], a: 0 },
    { k: "choice", q: "Could you ___ me the way to the lift?", opts: ["showing", "to show", "show", "showed"], a: 2, why: "**Could you + V1**: *Could you **show** me…?*" },
    { k: "choice", q: "*Could I leave my luggage here?* — Qaysi javob to'g'ri?", opts: ["Yes, you do.", "Yes, of course.", "Yes, I could.", "Yes, you leave."], a: 1, why: "**Yes, of course** / *Yes, you can.* (*Yes, you do* ❌)" },
    { k: "choice", q: "Ikki kishi, bitta katta karavot — bu…", opts: ["a single room", "a double room", "a twin room"], a: 1, why: "**double room** — bitta katta karavot. *twin room* — ikkita alohida karavot, *single room* — bir kishilik." },
    { k: "fill", q: "I'm ___ not. The restaurant is closed now.", a: ["afraid"], uz: "Afsuski, yo'q. Restoran hozir yopiq.", why: "**I'm afraid not** — afsuski, yo'q." },
    { k: "fill", q: "What time do we check ___ tomorrow?", a: ["out"], uz: "Ertaga xonani soat nechada topshiramiz?", why: "Mehmonxonadan ketish — **check out**." },
    { k: "tf", q: "**Could you speak more slowly, please?** — muloyim va to'g'ri iltimos.", a: true, why: "**Could you + V1…, please?**" },
    { k: "order", uz: "Xonani almashtirsam bo'ladimi?", words: ["Could", "I", "change", "rooms?"], extra: ["to", "changing"], alt: [["Could", "I", "change", "rooms"]] },
    { k: "translate", uz: "Nonushta narxga kiradimi?", a: ["Is breakfast included", "Is breakfast included in the price", "Is the breakfast included", "Is breakfast included in the room price", "Does the price include breakfast", "Does the room price include breakfast"] },
    { k: "match", pairs: [["key card", "kalit-karta"], ["single room", "bir kishilik xona"], ["check out", "xonani topshirib ketmoq"], ["included", "narxga kirgan"]] },
  ],
  summary: [
    "Ruxsat: **Can I…? / Could I + V1…?** (*Could* — muloyimroq): *Could I have the key, please?*",
    "Iltimos: **Could you + V1…, please?** — *Could you call a taxi?* (*to* va *-ing* yo'q).",
    "Javob: **Yes, of course. / Sure. / No problem.** Rad: **I'm afraid not.** (*Yes, you could* tabiiy emas → *Yes, you can*).",
    "**could** \"kud\" o'qiladi (*l* jim). Bu yerda u o'tgan zamon emas.",
    "Mehmonxona: **reception, reservation, single / double room, key card, towel, lift, check out, included, view**.",
  ],
  homework: "Xayolan chet eldagi mehmonxonaga keldingiz. Resepshn bilan 10 qatorli dialog yozing: bron, pasport, nonushta, Wi-Fi, taksi. Keyin xonadagi 2 ta muammo haqida qisqa xabar yozing (*The… doesn't work. Could you…?*) va kamida 4 ta **Could I / Could you** gapini ovoz chiqarib o'qing.",
};

export default lesson;
