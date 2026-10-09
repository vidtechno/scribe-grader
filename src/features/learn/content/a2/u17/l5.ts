import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u17-l5",
  title: "Travel and hotels",
  titleUz: "Sayohat va mehmonxona",
  goal: "Mehmonxonada **xona bron qilasiz**, **check-in / check-out** qilasiz, kerakli narsalarni muloyim so'raysiz (*Could I have…? Is there…?*), vokzal va aeroportda **chipta olasiz**, perron va reysni so'raysiz hamda *luggage* kabi sanalmaydigan so'zlarni to'g'ri ishlatasiz.",
  slides: [
    {
      title: "Xona bron qilish",
      blocks: [
        { t: "p", md: "Mehmonxonada yoki telefonda xona bron qilishda ishlatiladigan eng foydali iboralar:" },
        {
          t: "table", head: ["Ibora", "Ma'nosi"], speak: [0],
          rows: [
            ["I'd like to book a room.", "Xona bron qilmoqchiman."],
            ["A single / double room, please.", "Bir kishilik / ikki kishilik xona."],
            ["For three nights, from Friday.", "Juma kunidan uch kecha."],
            ["Do you have any rooms available?", "Bo'sh xonalaringiz bormi?"],
            ["How much is it per night?", "Bir kechasi qancha?"],
            ["Is breakfast included?", "Narxga nonushta kiradimi?"],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I'd like to book a room for two nights.", "Is breakfast included?", "How much is it per night?"] },
          bad: { title: "Xato", items: ["I want to book room for two night.", "Breakfast is include?", "How much costs a night?"] },
        },
        { t: "tip", tone: "info", md: "**single room** — bir kishilik, **double room** — ikki kishilik (bitta katta karavot), **twin room** — ikkita alohida karavot. **for + muddat**: *for two nights* (ko'plik!). **per night** = bir kechasiga." },
        { t: "check", ex: { k: "choice", q: "Qaysi gap to'g'ri va muloyim?", opts: ["I want a room.", "I'd like to book a room for three nights.", "Give me room for three night.", "I book a room three nights."], a: 1, why: "**I'd like to book…** + **for three nights**." } },
      ],
    },
    {
      title: "Dialog: check-in",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Receptionist", en: "Good evening. Can I help you?", uz: "Xayrli kech. Sizga yordam bera olamanmi?" },
            { who: "Aziz", en: "Hello. I have a reservation under the name Karimov.", uz: "Salom. Karimov ismiga bron qilingan xonam bor." },
            { who: "Receptionist", en: "Yes, a double room for three nights. Could I see your passport, please?", uz: "Ha, uch kechaga ikki kishilik xona. Pasportingizni ko'rsam bo'ladimi?" },
            { who: "Aziz", en: "Of course. Here you are. What time is breakfast?", uz: "Albatta. Marhamat. Nonushta soat nechada?" },
            { who: "Receptionist", en: "From seven to ten. Check-out is at twelve. Here is your key. Your room is on the third floor.", uz: "Soat yettidan o'ngacha. Check-out soat o'n ikkida. Mana kalitingiz. Xonangiz uchinchi qavatda." },
            { who: "Aziz", en: "Thank you. Is there a lift?", uz: "Rahmat. Lift bormi?" },
            { who: "Receptionist", en: "Yes, it's on your right. Enjoy your stay!", uz: "Ha, o'ng tomoningizda. Dam olishingiz yoqimli bo'lsin!" },
          ],
        },
        { t: "tip", tone: "info", md: "**check in** — ro'yxatdan o'tmoq (mehmonxona, aeroport), **check out** — hisob-kitob qilib chiqib ketmoq. Ot ko'rinishida chiziqcha bilan yoziladi: *the **check-in** desk, **check-out** time*. **under the name…** = shu ism bilan." },
        { t: "check", ex: { k: "tf", q: "Aziz's room is on the first floor.", a: false, why: "*Your room is on the **third** floor.*" } },
        { t: "check", ex: { k: "choice", q: "What time is check-out?", opts: ["At seven.", "At ten.", "At twelve.", "At three."], a: 2, why: "*Check-out is at twelve.*" } },
      ],
    },
    {
      title: "Iltimos va savollar: Could I…? Is there…?",
      blocks: [
        { t: "p", md: "Mehmonxonada nimadir kerak bo'lsa yoki muammo chiqsa, **muloyim savol** beramiz. Quyidagi qoliplarni yodlang:" },
        {
          t: "table", head: ["Maqsad", "Qolip", "Misol"], speak: [2],
          rows: [
            ["Narsa so'rash", "Could I have…?", "Could I have an extra towel, please?"],
            ["Narsa bor-yo'qligini so'rash", "Is there a… / Are there any…?", "Is there a Wi-Fi in the room?"],
            ["Yordam so'rash", "Could you … for me?", "Could you call a taxi for me?"],
            ["Muammo aytish", "There's no… / The … doesn't work.", "There's no hot water. The TV doesn't work."],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["Could I have a towel, please?", "Is there a restaurant in the hotel?", "There isn't any hot water."] },
          bad: { title: "Xato", items: ["Give me towel.", "Is a restaurant in the hotel?", "The TV not work."] },
        },
        { t: "tip", tone: "warn", md: "Inglizchada \"bormi?\" deb so'rash uchun **Is there…?** yoki **Do you have…?** ishlatamiz — shunchaki *Is a restaurant?* deb bo'lmaydi. Muammoni aytganda **I'm sorry, but…** yoki **Excuse me, there's a problem** deb boshlang — shunda xodimlar tezroq yordam beradi." },
        { t: "check", ex: { k: "fill", q: "Excuse me, ___ there a pharmacy near the hotel?", a: ["is"], why: "**Is there a…?** — birlikda." } },
      ],
    },
    {
      title: "Vokzal va chiptalar",
      blocks: [
        { t: "p", md: "Poyezd va avtobus jadvali haqida gapirganda **Present Simple** ishlatamiz (qat'iy jadval): *The train **leaves** at 8.* Foydali savollar va iboralar:" },
        {
          t: "dialog", lines: [
            { who: "Laylo", en: "Hello, I'd like a return ticket to Bukhara, please.", uz: "Salom, Buxoroga borib-kelish chiptasi kerak." },
            { who: "Clerk", en: "For today? The next train leaves at 10.30. A return costs 240,000 so'm.", uz: "Bugunga? Keyingi poyezd 10:30 da jo'naydi. Borib-kelish 240 ming so'm." },
            { who: "Laylo", en: "OK. Which platform does it leave from?", uz: "Mayli. U qaysi perrondan jo'naydi?" },
            { who: "Clerk", en: "Platform 3. It arrives in Bukhara at 12.45. Please be on the platform ten minutes before.", uz: "3-perron. Buxoroga 12:45 da yetib boradi. Iltimos, o'n daqiqa oldin perronda bo'ling." },
          ],
        },
        {
          t: "table", head: ["Ibora", "Ma'nosi"], speak: [0],
          rows: [
            ["a single / a return ticket", "bir tomonga / borib-kelish chiptasi"],
            ["What time does it leave / arrive?", "U soat nechada jo'naydi / yetib boradi?"],
            ["Which platform does it leave from?", "U qaysi perrondan jo'naydi?"],
            ["The train is delayed / on time.", "Poyezd kechikyapti / o'z vaqtida."],
            ["Is this seat taken?", "Bu o'rindiq bandmi?"],
          ],
        },
        { t: "tip", tone: "warn", md: "Savol: *What time **does** the train **leave**?* — **does** bor, shuning uchun *leave* (**-s** yo'q). Javobda: *It **leaves** at 10.30.* Xato: *What time does the train leaves?*" },
        { t: "check", ex: { k: "choice", q: "What time ___ the bus arrive?", opts: ["do", "does", "is", "did to"], a: 1, why: "*the bus* = it → **does**." } },
      ],
    },
    {
      title: "Aeroportda",
      blocks: [
        { t: "p", md: "Aeroportda bir necha bosqich bor. Ularni ketma-ket aytib berish uchun so'zlarni yodlang:" },
        {
          t: "table", head: ["Bosqich", "Ingliz tilida", "Misol"], speak: [1, 2],
          rows: [
            ["1", "check-in desk", "Where is the check-in desk for Seoul?"],
            ["2", "luggage / baggage", "I have one suitcase and a small bag."],
            ["3", "boarding pass", "Here is your boarding pass. Your gate is B4."],
            ["4", "passport control", "Please show your passport."],
            ["5", "gate / boarding", "Boarding starts at 9.15."],
          ],
        },
        { t: "tip", tone: "warn", md: "**luggage** va **baggage** — **sanalmaydigan** ot! *luggages* ❌, *a luggage* ❌. To'g'risi: *My luggage **is** heavy. I have **two pieces of luggage** / **two bags**.* Xuddi shunday: *information, advice, money, news*." },
        {
          t: "examples", items: [
            { en: "Flight HY 123 to Istanbul is delayed by one hour.", uz: "Istanbulga HY 123 reysi bir soatga kechikyapti." },
            { en: "Could you tell me where gate 5 is, please?", uz: "5-darvoza qayerdaligini ayta olasizmi?", note: "Muloyim savol: **Could you tell me where…** + darak gap tartibi." },
            { en: "I'd like a window seat, please.", uz: "Deraza yonidagi o'rindiq bering." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["My luggages are heavy.", "My luggage is heavy.", "My luggage are heavy.", "My luggages is heavy."], a: 1, why: "**luggage** — sanalmaydigan, birlik fe'l: **is**." } },
        { t: "check", ex: { k: "fill", q: "Could you tell me where the gate ___? (be)", a: ["is"], why: "Muloyim savolda darak tartib: *where the gate **is***." } },
      ],
    },
    {
      title: "O'qing: Toshkentdan Seulga",
      blocks: [
        {
          t: "text", title: "A trip to Seoul",
          en: "Dilnoza is flying from Tashkent to Seoul for a conference. She arrives at the airport three hours before the flight. At the check-in desk she shows her passport and gets her boarding pass. Her luggage isn't heavy, so she doesn't pay extra.\nHer flight is delayed by one hour, so she has a coffee and reads a book. Finally the gate opens and she boards the plane.\nIn Seoul, Dilnoza takes a taxi to her hotel. At the reception she says, \"I have a reservation under the name Dilnoza Rahimova.\" The receptionist gives her a key and says, \"Check-out is at eleven. Enjoy your stay!\"",
          uz: "Dilnoza konferensiya uchun Toshkentdan Seulga uchmoqda. U aeroportga reysdan uch soat oldin keladi. Ro'yxatdan o'tish peshtaxtasida pasportini ko'rsatadi va bort talonini oladi. Yuki og'ir emas, shuning uchun qo'shimcha to'lamaydi.\nReysi bir soatga kechikadi, shuning uchun u qahva ichadi va kitob o'qiydi. Nihoyat darvoza ochiladi va u samolyotga chiqadi.\nSeulda Dilnoza mehmonxonaga taksida boradi. Qabulxonada u aytadi: \"Dilnoza Rahimova nomiga bron qilingan xonam bor.\" Qabulxona xodimi unga kalit berib aytadi: \"Check-out soat o'n birda. Dam olishingiz yoqimli bo'lsin!\"",
        },
        { t: "check", ex: { k: "tf", q: "Dilnoza pays extra for her luggage.", a: false, why: "*Her luggage isn't heavy, so she doesn't pay extra.*" } },
        { t: "check", ex: { k: "choice", q: "What does Dilnoza do while her flight is delayed?", opts: ["She goes to the hotel.", "She has a coffee and reads.", "She calls a taxi.", "She buys a ticket."], a: 1, why: "*she has a coffee and reads a book.*" } },
      ],
    },
  ],
  words: [
    { en: "reservation", uz: "bron qilish", ipa: "ˌrezəˈveɪʃn", pos: "noun", ex: "I have a reservation for tonight.", exUz: "Bugun kechaga bron qilganman." },
    { en: "luggage", uz: "yuk, bagaj", ipa: "ˈlʌɡɪdʒ", pos: "noun", ex: "My luggage is very heavy.", exUz: "Yukim juda og'ir." },
    { en: "boarding pass", uz: "bort talonchasi", ipa: "ˈbɔːdɪŋ pɑːs", pos: "noun", ex: "Show your boarding pass at the gate.", exUz: "Bort talonchasini darvozada ko'rsating." },
    { en: "platform", uz: "perron", ipa: "ˈplætfɔːm", pos: "noun", ex: "The train leaves from platform 2.", exUz: "Poyezd 2-perrondan jo'naydi." },
    { en: "delay", uz: "kechikish; kechiktirmoq", ipa: "dɪˈleɪ", pos: "noun / verb", ex: "There is a one-hour delay.", exUz: "Bir soatlik kechikish bor." },
    { en: "return ticket", uz: "borib-kelish chiptasi", ipa: "rɪˈtɜːn ˈtɪkɪt", pos: "noun", ex: "A return ticket to Bukhara, please.", exUz: "Buxoroga borib-kelish chiptasi, iltimos." },
    { en: "check in", uz: "ro'yxatdan o'tmoq", ipa: "tʃek ɪn", pos: "phrasal verb", ex: "You can check in from two o'clock.", exUz: "Soat ikkidan ro'yxatdan o'tishingiz mumkin." },
    { en: "check out", uz: "hisob-kitob qilib chiqib ketmoq", ipa: "tʃek aʊt", pos: "phrasal verb", ex: "We check out at noon.", exUz: "Biz tush paytida chiqib ketamiz." },
    { en: "available", uz: "bo'sh, mavjud", ipa: "əˈveɪləbl", pos: "adjective", ex: "Is a double room available?", exUz: "Ikki kishilik xona bormi?" },
    { en: "included", uz: "narxga kiritilgan", ipa: "ɪnˈkluːdɪd", pos: "adjective", ex: "Breakfast is included.", exUz: "Nonushta narxga kiradi." },
  ],
  practice: [
    { k: "match", pairs: [["reservation", "bron qilish"], ["luggage", "yuk"], ["platform", "perron"], ["delay", "kechikish"], ["boarding pass", "bort talonchasi"]] },
    { k: "listen", say: "I'd like to book a double room for two nights.", opts: ["I'd like to book a double room for two nights.", "I'd like to book a single room for two nights.", "I'd like to book a double room for three nights."], a: 0 },
    { k: "listen", say: "The flight is delayed.", opts: ["The flight is delayed.", "The flight is on time.", "The flight is cancelled."], a: 0 },
    { k: "choice", q: "___ breakfast included in the price?", opts: ["Is", "Are", "Does", "Do"], a: 0, why: "*breakfast* — birlik → **Is**." },
    { k: "choice", q: "My luggage ___ very heavy.", opts: ["is", "are", "were", "have"], a: 0, why: "**luggage** — sanalmaydigan → **is**." },
    { k: "choice", q: "Qaysi gap muloyim?", opts: ["Give me a key.", "I want a key.", "Could I have my key, please?", "Key!"], a: 2, why: "**Could I have… , please?**" },
    { k: "fill", q: "I'd like to ___ a room for two nights. (book)", a: ["book", "reserve"], why: "**book / reserve a room**." },
    { k: "fill", q: "What time does the train ___? (leave)", a: ["leave"], why: "**does** dan keyin V1." },
    { k: "fill", q: "A ___ ticket to Bukhara, please. (borib-kelish)", a: ["return", "round-trip"], why: "**return ticket** (UK), **round-trip** (US)." },
    { k: "fill", q: "Check-out is ___ twelve o'clock.", a: ["at"], why: "Soat bilan → **at**." },
    { k: "tf", q: "**A single room is for two people.**", a: false, why: "**single** = bir kishilik; ikki kishilik — *double / twin*." },
    { k: "tf", q: "**I have two luggages.** — to'g'ri gap.", a: false, why: "**luggage** sanalmaydi: *two bags / two pieces of luggage*." },
    { k: "order", uz: "Sizda bo'sh xona bormi?", words: ["Do", "you", "have", "any", "rooms", "available?"], extra: ["Have", "got", "does"], alt: [["Have", "you", "got", "any", "rooms", "available?"]] },
    { k: "translate", uz: "Xonamizda issiq suv yo'q.", a: ["There is no hot water in our room.", "There's no hot water in our room.", "There isn't any hot water in our room.", "There is not any hot water in our room.", "We have no hot water in our room.", "We haven't got any hot water in our room.", "We don't have any hot water in our room."] },
    { k: "translate", uz: "Nonushta soat nechada?", a: ["What time is breakfast?", "What time is breakfast served?", "What time do you serve breakfast?", "When is breakfast?", "What time does breakfast start?"] },
    { k: "speak", say: "Hello, I have a reservation under the name Karimov.", uz: "Salom, Karimov ismiga bron qilingan xonam bor." },
  ],
  quiz: [
    { k: "choice", q: "What time ___ the plane leave?", opts: ["do", "does", "is", "are"], a: 1, why: "*the plane* = it → **does**." },
    { k: "choice", q: "Qaysi gap **xato**?", opts: ["Could I have a towel, please?", "Is there a lift?", "I have three luggages.", "Is breakfast included?"], a: 2, why: "**luggage** sanalmaydi: *three bags*." },
    { k: "choice", q: "\"Borib-kelish chiptasi\":", opts: ["a single ticket", "a return ticket", "a delayed ticket", "a ticket back only"], a: 1, why: "**return ticket**." },
    { k: "choice", q: "I stayed at the hotel ___ three nights.", opts: ["for", "since", "during", "at"], a: 0, why: "Davomiylik → **for**." },
    { k: "fill", q: "Excuse me, ___ there any rooms available? (be)", a: ["are"], why: "*any rooms* — ko'plik → **Are there any…?**" },
    { k: "fill", q: "Our flight is ___ by two hours. (kechikyapti)", a: ["delayed"], why: "**delayed** — kechikkan." },
    { k: "fill", q: "We have to ___ out of the hotel by noon.", a: ["check"], why: "**check out** — hisob-kitob qilib chiqmoq." },
    { k: "listen", say: "Which platform does the train to Samarkand leave from?", opts: ["Which platform does the train to Samarkand leave from?", "Which platform did the train to Samarkand leave from?", "Which platform does the train from Samarkand leave?"], a: 0 },
    { k: "tf", q: "**Could you tell me where the gate is?** — muloyim savol va tartib to'g'ri.", a: true },
    { k: "order", uz: "Qo'shimcha sochiq olsam bo'ladimi?", words: ["Could", "I", "have", "an", "extra", "towel", "please?"], extra: ["a", "do"] },
  ],
  summary: [
    "Bron: **I'd like to book a… room for… nights.** Savol: **Is breakfast included? Do you have any rooms available?**",
    "Muloyim iltimos: **Could I have…?** / **Could you…?**; borligini so'rash: **Is there… / Are there any…?**",
    "Jadval — Present Simple: **What time does the train leave?** (does + V1).",
    "**luggage, baggage** — sanalmaydigan ot: *My luggage is heavy*, hech qachon *luggages*.",
    "Aeroport ketma-ketligi: **check-in → boarding pass → passport control → gate**.",
  ],
  homework: "Tasavvur qiling, siz Buxoroga 3 kunlik sayohatga ketyapsiz. (1) Mehmonxonaga telefon dialogi yozing (bron qilish: 6 gap). (2) Vokzalda chipta olish dialogi (6 gap). Ikkala dialogda ham **Could I…? Is there…? What time does…?** qoliplarini ishlating. Dialoglarni o'qib, ovoz chiqarib mashq qiling.",
};

export default lesson;
