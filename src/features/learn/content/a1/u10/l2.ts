import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u10-l2",
  title: "At the station & airport",
  titleUz: "Vokzal va aeroportda",
  goal: "Vokzalda chipta olasiz (**A return ticket to Samarkand, please.**), jadval haqida so'raysiz (**What time does the train leave? Which platform?**) va aeroportda ro'yxatdan o'tish, **gate**, **boarding pass**, **delayed** kabi so'zlarni tushunasiz.",
  slides: [
    {
      title: "Vokzalda: chipta olish",
      blocks: [
        { t: "p", md: "Kassada (**ticket office**) eng kerakli ibora — **A … ticket to …, please.** Chipta ikki xil bo'ladi:" },
        {
          t: "table", head: ["Ingliz tilida", "O'zbekcha"], speak: [0],
          rows: [
            ["a single (ticket)", "bir tomonga chipta"],
            ["a return (ticket)", "borib-kelish chiptasi"],
            ["first class / standard class", "birinchi / oddiy klass"],
            ["a window seat", "deraza yonidagi o'rindiq"],
          ],
        },
        {
          t: "examples", items: [
            { en: "A single to Bukhara, please.", uz: "Buxoroga bir tomonga chipta, iltimos." },
            { en: "Two return tickets to Samarkand, please.", uz: "Samarqandga ikkita borib-kelish chiptasi, iltimos." },
            { en: "How much is a return ticket?", uz: "Borib-kelish chiptasi qancha turadi?" },
            { en: "Can I have a window seat, please?", uz: "Deraza yonidagi o'rindiq bersangiz, iltimos." },
          ],
        },
        { t: "tip", tone: "info", md: "Yo'nalish (\"... ga\") — **to**: *a ticket **to** Khiva, the train **to** Bukhara*. O'zbekcha \"Xivaga\" dagi **-ga** ni ❌ *at* yoki *in* bilan tarjima qilmang." },
        { t: "check", ex: { k: "choice", q: "Siz Samarqandga borib, shu kuni qaytmoqchisiz. Nima deysiz?", opts: ["A single to Samarkand, please.", "A return ticket to Samarkand, please.", "A return ticket at Samarkand, please.", "A ticket return to Samarkand, please."], a: 1, why: "Borib-kelish — **return**, yo'nalish — **to**." } },
      ],
    },
    {
      title: "Jadval: What time does the train leave?",
      blocks: [
        { t: "p", md: "Jadval (timetable) haqida gapirganda — kelajak bo'lsa ham — **Present Simple** ishlatiladi. Chunki jadval doimiy, o'zgarmaydi:" },
        {
          t: "examples", items: [
            { en: "What time does the next train to Samarkand leave?", uz: "Samarqandga keyingi poyezd soat nechada jo'naydi?" },
            { en: "It leaves at 8:15.", uz: "U 8:15 da jo'naydi." },
            { en: "When does it arrive in Samarkand?", uz: "Samarqandga qachon yetib boradi?" },
            { en: "It arrives at 10:25.", uz: "10:25 da yetib boradi." },
            { en: "Which platform does it leave from?", uz: "Qaysi platformadan jo'naydi?" },
            { en: "Platform 3.", uz: "Uchinchi platformadan." },
            { en: "How long does the journey take? — About two hours.", uz: "Yo'l qancha vaqt oladi? — Taxminan ikki soat." },
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["The train leaves at nine.", "What time does it arrive?", "It arrives in Bukhara at noon."] },
          bad: { title: "Xato", items: ["The train leave at nine.", "What time it arrives?", "It arrives to Bukhara at noon."] },
        },
        { t: "tip", tone: "warn", md: "**arrive in** + shahar/davlat (*arrive in Tashkent*), **arrive at** + bino/joy (*arrive at the station, at the airport*). ❌ **arrive to** deyilmaydi!" },
        { t: "check", ex: { k: "fill", q: "What time ___ the train to Khiva leave?", a: ["does"], uz: "Xivaga poyezd soat nechada jo'naydi?", why: "*the train* = **it** → **does**." } },
        { t: "check", ex: { k: "choice", q: "We arrive ___ Samarkand at 10:25.", opts: ["to", "in", "at", "on"], a: 1, why: "Shahar bilan — **arrive in**." } },
      ],
    },
    {
      title: "Dialog: Afrosiyob poyezdi",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Aziz", en: "Good morning. Two return tickets to Samarkand, please.", uz: "Xayrli tong. Samarqandga ikkita borib-kelish chiptasi, iltimos." },
            { who: "Cashier", en: "For today?", uz: "Bugunga-mi?" },
            { who: "Aziz", en: "Yes, on the next train. What time does it leave?", uz: "Ha, keyingi poyezdga. U soat nechada jo'naydi?" },
            { who: "Cashier", en: "At 9:40. It's the Afrosiyob, the fast train.", uz: "9:40 da. Bu Afrosiyob, tezyurar poyezd." },
            { who: "Aziz", en: "Great. When does it arrive in Samarkand?", uz: "Zo'r. Samarqandga qachon yetib boradi?" },
            { who: "Cashier", en: "At 11:50. That's 400,000 sum, please.", uz: "11:50 da. 400 000 so'm bo'ladi." },
            { who: "Aziz", en: "Here you are. Which platform does it leave from?", uz: "Marhamat. Qaysi platformadan jo'naydi?" },
            { who: "Cashier", en: "Platform 2. Have a good journey!", uz: "Ikkinchi platformadan. Oq yo'l!" },
          ],
        },
        { t: "tip", tone: "good", md: "**Have a good journey! / Have a good trip!** — \"Oq yo'l!\" degani. Javob: *Thank you!*" },
        { t: "check", ex: { k: "tf", q: "Poyezd Samarqandga taxminan ikki soatda yetib boradi.", a: true, why: "9:40 da jo'naydi, 11:50 da yetib boradi — 2 soat 10 daqiqa." } },
        { t: "check", ex: { k: "choice", q: "Which platform does the train leave from?", opts: ["Platform 1", "Platform 2", "Platform 4", "Platform 9"], a: 1, why: "*Platform 2. Have a good journey!*" } },
      ],
    },
    {
      title: "Aeroportda: qadam-baqadam",
      blocks: [
        { t: "p", md: "Aeroportda hamma narsa tartib bilan bo'ladi. Har bir bosqich nomini o'rganing:" },
        {
          t: "table", head: ["Ingliz tilida", "O'zbekcha"], speak: [0],
          rows: [
            ["check in", "ro'yxatdan o'tmoq"],
            ["a boarding pass", "bortga chiqish taloni"],
            ["passport control", "pasport nazorati"],
            ["security", "xavfsizlik tekshiruvi"],
            ["the departure lounge", "jo'nash zali"],
            ["gate 12", "12-chiqish (darvoza)"],
            ["board the plane", "samolyotga chiqmoq"],
            ["arrivals / departures", "kelish / jo'nash (tablo)"],
          ],
        },
        {
          t: "examples", items: [
            { en: "Where can I check in for the flight to Istanbul?", uz: "Istanbulga reysga qayerda ro'yxatdan o'tsam bo'ladi?" },
            { en: "Your flight leaves from Gate 12.", uz: "Reysingiz 12-chiqishdan jo'naydi." },
            { en: "The flight is delayed by one hour.", uz: "Reys bir soatga kechikmoqda." },
            { en: "The flight is cancelled.", uz: "Reys bekor qilindi." },
          ],
        },
        {
          t: "sounds", items: [
            { label: "luggage", say: "luggage", uz: "**\"lagij\"** — ikkinchi *g* \"j\" kabi o'qiladi.", examples: ["luggage", "hand luggage"] },
            { label: "delayed", say: "delayed", uz: "**\"di'leyd\"** — urg'u ikkinchi bo'g'inda, oxiri **\"d\"** (\"di-leyed\" emas).", examples: ["delayed", "The flight is delayed."] },
            { label: "gate", say: "gate", uz: "**\"geyt\"** — *get* (\"get\") bilan adashtirmang.", examples: ["gate", "Gate 12"] },
          ],
        },
        { t: "check", ex: { k: "listen", say: "The flight is delayed.", opts: ["The flight is cancelled.", "The flight is delayed.", "The flight is boarding."], a: 1, why: "**delayed** — kechikmoqda." } },
      ],
    },
    {
      title: "luggage — sanalmaydi!",
      blocks: [
        { t: "p", md: "**luggage** (yuk, bagaj) — sanalmaydigan ot. Unga **-s** qo'shilmaydi va **a** qo'yilmaydi. Sanash uchun **bag / suitcase** ishlating:" },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["My luggage is heavy.", "I've got two bags.", "How much luggage have you got?"] },
          bad: { title: "Xato", items: ["My luggages are heavy.", "I've got two luggages.", "How many luggage have you got?"] },
        },
        { t: "tip", tone: "info", md: "**hand luggage** — qo'l yuki (salonga olib chiqiladigan sumka). Aeroportda tez-tez eshitasiz: *Is this your hand luggage?*" },
        { t: "check", ex: { k: "choice", q: "To'g'ri gapni tanlang:", opts: ["Where is my luggage?", "Where are my luggages?", "Where is my luggages?", "Where is a luggage?"], a: 0, why: "**luggage** sanalmaydi: *my luggage **is***." } },
      ],
    },
    {
      title: "O'qing: Nilufarning birinchi parvozi",
      blocks: [
        {
          t: "text", title: "My first flight",
          en: "Last month I flew from Tashkent to Istanbul. It was my first flight, so I was a little nervous.\nI arrived at the airport three hours early. First I checked in and got my boarding pass. My big suitcase went on the belt, and I only took my hand luggage.\nAfter passport control and security, I waited in the departure lounge. Then I heard: \"Flight TK 371 to Istanbul is delayed by forty minutes.\" Oh no!\nFinally we boarded the plane at Gate 5. The flight was easy, and the food was good.",
          uz: "O'tgan oy men Toshkentdan Istanbulga uchdim. Bu mening birinchi parvozim edi, shuning uchun biroz hayajonlandim.\nAeroportga uch soat oldin keldim. Avval ro'yxatdan o'tdim va bortga chiqish talonimni oldim. Katta chamadonim lentaga ketdi, men faqat qo'l yukimni oldim.\nPasport nazorati va xavfsizlik tekshiruvidan keyin jo'nash zalida kutdim. Keyin eshitdim: \"Istanbulga TK 371 reysi qirq daqiqaga kechikmoqda.\" Voy!\nNihoyat 5-chiqishdan samolyotga chiqdik. Parvoz oson o'tdi, ovqat ham yaxshi edi.",
        },
        { t: "check", ex: { k: "tf", q: "Nilufar katta chamadonini salonga olib chiqdi.", a: false, why: "*My big suitcase went on the belt, and I only took my **hand luggage**.*" } },
        { t: "check", ex: { k: "choice", q: "How late was the flight?", opts: ["four minutes", "fourteen minutes", "forty minutes", "three hours"], a: 2, why: "*…is delayed by **forty minutes**.*" } },
      ],
    },
  ],
  words: [
    { en: "platform", uz: "platforma (vokzalda)", ipa: "ˈplæt.fɔːm", pos: "noun", ex: "The train leaves from platform 3.", exUz: "Poyezd 3-platformadan jo'naydi." },
    { en: "return ticket", uz: "borib-kelish chiptasi", ipa: "rɪˈtɜːn ˌtɪk.ɪt", pos: "noun", ex: "A return ticket to Bukhara, please.", exUz: "Buxoroga borib-kelish chiptasi, iltimos." },
    { en: "departure", uz: "jo'nash", ipa: "dɪˈpɑː.tʃə", pos: "noun", ex: "Look at the departure board.", exUz: "Jo'nash tablosiga qarang." },
    { en: "arrival", uz: "yetib kelish", ipa: "əˈraɪ.vəl", pos: "noun", ex: "Our arrival time is 6 p.m.", exUz: "Yetib kelish vaqtimiz kechki 6." },
    { en: "check in", uz: "ro'yxatdan o'tmoq", ipa: "ˌtʃek ˈɪn", pos: "phrasal verb", ex: "We checked in two hours before the flight.", exUz: "Parvozdan ikki soat oldin ro'yxatdan o'tdik." },
    { en: "boarding pass", uz: "bortga chiqish taloni", ipa: "ˈbɔː.dɪŋ pɑːs", pos: "noun", ex: "Show your boarding pass at the gate.", exUz: "Chiqishda bortga chiqish taloningizni ko'rsating." },
    { en: "gate", uz: "chiqish (aeroportda), darvoza", ipa: "ɡeɪt", pos: "noun", ex: "Our flight leaves from Gate 7.", exUz: "Reysimiz 7-chiqishdan jo'naydi." },
    { en: "delayed", uz: "kechikkan, kechikmoqda", ipa: "dɪˈleɪd", pos: "adj", ex: "The train is delayed by twenty minutes.", exUz: "Poyezd yigirma daqiqaga kechikmoqda." },
    { en: "luggage", uz: "yuk, bagaj", ipa: "ˈlʌɡ.ɪdʒ", pos: "noun (uncountable)", ex: "My luggage is very heavy.", exUz: "Yukim juda og'ir." },
    { en: "flight", uz: "reys, parvoz", ipa: "flaɪt", pos: "noun", ex: "The flight to Dubai takes three hours.", exUz: "Dubayga parvoz uch soat davom etadi." },
  ],
  practice: [
    { k: "match", pairs: [["platform", "platforma"], ["gate", "chiqish (aeroportda)"], ["boarding pass", "bortga chiqish taloni"], ["luggage", "yuk, bagaj"], ["flight", "reys"]] },
    { k: "match", pairs: [["a single", "bir tomonga chipta"], ["a return", "borib-kelish chiptasi"], ["delayed", "kechikmoqda"], ["cancelled", "bekor qilindi"], ["check in", "ro'yxatdan o'tmoq"]] },
    { k: "listen", say: "A return ticket to Bukhara, please.", opts: ["A return ticket to Bukhara, please.", "A single ticket to Bukhara, please.", "Two return tickets to Bukhara, please."], a: 0 },
    { k: "listen", say: "Go to Gate 8.", opts: ["Go to Gate 8.", "Get to Gate 8.", "Go to Gate 18."], a: 0, why: "**gate** = \"geyt\", **eight**." },
    { k: "choice", q: "What time ___ the plane land?", opts: ["do", "does", "is", "are"], a: 1, why: "*the plane* = **it** → **does** + V1." },
    { k: "choice", q: "Qaysi gap **xato**?", opts: ["The bus arrives at the station at six.", "We arrive in London at noon.", "They arrive to Tashkent tomorrow.", "When does the train arrive?"], a: 2, why: "**arrive to** ❌ → *arrive **in** Tashkent*." },
    { k: "fill", q: "The train ___ at 7:30 every morning.", a: ["leaves", "departs"], uz: "Poyezd har kuni ertalab 7:30 da jo'naydi.", hint: "leave", why: "Jadval → Present Simple, *the train* = it → **leaves**." },
    { k: "fill", q: "Which platform does the train leave ___?", a: ["from"], uz: "Poyezd qaysi platformadan jo'naydi?", why: "**leave from** + joy: *Which platform does it leave **from**?*" },
    { k: "fill", q: "I've got a lot of ___. Can you help me?", a: ["luggage", "bags"], uz: "Yukim ko'p. Yordam bera olasizmi?", why: "**luggage** sanalmaydi: *a lot of luggage*." },
    { k: "tf", q: "**How many luggages have you got?** — to'g'ri savol.", a: false, why: "**luggage** sanalmaydi: *How **much** luggage have you got?* yoki *How many **bags**…?*" },
    { k: "tf", q: "Nilufar aeroportga uch soat oldin keldi.", a: true, why: "*I arrived at the airport three hours early.*" },
    { k: "order", uz: "Samarqandga keyingi poyezd soat nechada jo'naydi?", words: ["What", "time", "does", "the", "next", "train", "to", "Samarkand", "leave?"], extra: ["leaves", "is"] },
    { k: "order", uz: "Reysimiz bir soatga kechikmoqda.", words: ["Our", "flight", "is", "delayed", "by", "one", "hour."], extra: ["delay", "for"] },
    { k: "translate", uz: "Buxoroga bir tomonga chipta, iltimos.", a: ["A single to Bukhara, please", "A single ticket to Bukhara, please", "One single ticket to Bukhara, please", "A one-way ticket to Bukhara, please", "A single to Bukhara please", "A single ticket to Bukhara please"] },
    { k: "translate", uz: "Poyezd qachon yetib keladi?", a: ["When does the train arrive", "What time does the train arrive", "When does the train get here", "When does the train get in"] },
    { k: "speak", say: "Two return tickets to Samarkand, please. What time does the train leave?", uz: "Samarqandga ikkita borib-kelish chiptasi, iltimos. Poyezd soat nechada jo'naydi?" },
  ],
  quiz: [
    { k: "listen", say: "The train leaves from platform four.", opts: ["The train leaves from platform four.", "The train leaves from platform fourteen.", "The train arrives at platform four."], a: 0 },
    { k: "choice", q: "\"Borib-kelish chiptasi\" inglizcha:", opts: ["a single ticket", "a return ticket", "a back ticket", "a two ticket"], a: 1, why: "**return** = borib-kelish, **single** = bir tomonga." },
    { k: "choice", q: "When ___ the bus arrive in Andijan?", opts: ["do", "is", "does", "will be"], a: 2, why: "Jadval → Present Simple: **When does the bus arrive?**" },
    { k: "choice", q: "To'g'ri gapni tanlang:", opts: ["My luggages are in the car.", "My luggage is in the car.", "My luggage are in the car.", "A luggage is in the car."], a: 1, why: "**luggage** — sanalmaydi, birlikda: *is*." },
    { k: "fill", q: "Please show your boarding ___ at the gate.", a: ["pass"], uz: "Iltimos, chiqishda bortga chiqish taloningizni ko'rsating.", why: "**boarding pass**." },
    { k: "fill", q: "We arrived ___ the airport at five o'clock.", a: ["at"], uz: "Aeroportga soat beshda yetib keldik.", why: "Bino/joy → **arrive at** (*at the airport*)." },
    { k: "tf", q: "**The flight is delayed** — reys bekor qilindi, degani.", a: false, why: "**delayed** — kechikmoqda. Bekor qilindi — **cancelled**." },
    { k: "order", uz: "Qaysi chiqishdan jo'naydi?", words: ["Which", "gate", "does", "it", "leave", "from?"], extra: ["leaves", "at"] },
    { k: "translate", uz: "Reys kechikmoqda.", a: ["The flight is delayed", "The flight's delayed", "The flight is late", "The flight's late"] },
    { k: "match", pairs: [["departures", "jo'nash"], ["arrivals", "kelish"], ["security", "xavfsizlik tekshiruvi"], ["hand luggage", "qo'l yuki"]] },
  ],
  summary: [
    "Chipta: **A single / A return (ticket) to Samarkand, please.** Yo'nalish — **to**.",
    "Jadval — Present Simple: **What time does the train leave? It leaves at 8:15. Which platform does it leave from?**",
    "**arrive in** + shahar, **arrive at** + joy (*arrive to* ❌).",
    "Aeroport: **check in → boarding pass → passport control → security → gate → board**. *The flight is **delayed / cancelled**.*",
    "**luggage** sanalmaydi: *my luggage is*, *two bags* (*luggages* ❌).",
  ],
  homework: "Xayoliy sayohat rejalashtiring: Toshkentdan istalgan shaharga poyezd yoki samolyotda. Kassadagi dialogni yozing (kamida 8 qator: chipta turi, vaqt, platforma/gate, narx). Keyin aeroportdagi tajribangiz (haqiqiy yoki xayoliy) haqida 6 gap yozing: *First I checked in…*",
};

export default lesson;
