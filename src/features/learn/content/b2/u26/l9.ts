import type { Lesson } from '../../../types';

// Mini lesson (situation): reporting a faulty device to support, by phone or chat. Uses causative (get it repaired) and polite firmness.
const lesson: Lesson = {
  id: 'u26-l9',
  title: 'Reporting a problem with technology',
  titleUz: "Texnik muammo haqida xabar berish: servis markazi va online yordam",
  mini: true,
  kind: 'situation',
  goal: "Noutbuk yoki telefon buzilganda servis markaziga qo'ng'iroq qilasiz yoki chatda yozasiz: muammoni aniq tasvirlaysiz (*it keeps freezing, it won't turn on*), nima qilib ko'rganingizni aytasiz va muloyim, lekin qat'iy ravishda ta'mirlash yoki pulni qaytarishni so'raysiz.",
  slides: [
    {
      title: "Muammoni aniq tasvirlang",
      blocks: [
        { t: 'p', md: "Siz ikki hafta oldin noutbuk sotib oldingiz va u ishlamay qoldi. Servis xodimi sizga ko'rinmaydi, faqat so'zingizga tayanadi. Shuning uchun gap **aniq** bo'lishi kerak: *nima* bo'ldi, *qachon* boshlandi, *qanchalik tez-tez* takrorlanadi." },
        { t: 'table', head: ['Muammo', 'Inglizcha ibora'], speak: [1], rows: [
          ['Qayta-qayta qotib qoladi', "It keeps freezing."],
          ['Yoqilmaydi', "It won't turn on."],
          ['Juda qizib ketadi', "It overheats after ten minutes."],
          ['Buyruqlarga javob bermaydi', "The screen is completely unresponsive."],
          ['Nosozlik, ishdan chiqish', "There seems to be a malfunction in the battery."],
        ] },
        { t: 'tip', tone: 'info', md: "**keep + -ing** takroriy, bezovta qiluvchi holatni bildiradi: *It keeps crashing* — u qayta-qayta ishdan chiqadi. **won't + fe'l** esa narsa \"qaysarlik qilayotganini\" bildiradi: *It won't charge* — zaryadlanmayapti." },
        { t: 'check', ex: { k: 'choice', q: "Telefon bir kunda o'n marta o'zi o'chib qolmoqda. Servisga qanday aytasiz?", opts: ["My phone keeps switching itself off.", "My phone switch itself off.", "My phone is keep switching off.", "My phone keeps to switch itself off."], a: 0, why: "**keep + -ing**: *keeps switching*. *keep* dan keyin infinitive ishlatilmaydi." } },
      ],
    },
    {
      title: "Nima bo'ldi va nima qildingiz?",
      blocks: [
        { t: 'p', md: "Yaxshi xabar uch qismdan iborat: **1) muammo**, **2) u qachon boshlandi**, **3) nimalar urinib ko'rildi**. Shunda xodim bir xil narsani qayta so'ramaydi." },
        { t: 'examples', items: [
          { en: "The problem started after the last software update.", uz: "Muammo oxirgi dastur yangilanishidan keyin boshlandi.", note: "O'tgan zamon (**started**) + vaqt: *after, since, when*." },
          { en: "I've already restarted it twice, but nothing has changed.", uz: "Uni allaqachon ikki marta qayta yoqdim, lekin hech narsa o'zgarmadi.", note: "**Present Perfect** — natija hozir ham muhim." },
          { en: "I've tried to reset it to factory settings, but it won't let me.", uz: "Uni zavod sozlamalariga qaytarishga urindim, lekin ruxsat bermayapti." },
          { en: "I followed the troubleshooting guide on your website, but it didn't help.", uz: "Saytingizdagi nosozliklarni bartaraf etish yo'riqnomasiga amal qildim, lekin foyda bermadi.", note: "**troubleshoot** — sababini topib, tuzatishga urinmoq." },
        ] },
        { t: 'tip', tone: 'good', md: "Muloyim, lekin aniq: *I'm calling about…*, *I'd like to report…*, *I bought it on 3 March* (sana aytilsa, kafolat masalasi tez hal bo'ladi). Hissiyotsiz, faktlar bilan gapirish — eng kuchli usul." },
        { t: 'check', ex: { k: 'fill', q: "I've ___ restarted it three times, but it still freezes.", a: ['already'], uz: "Uni allaqachon uch marta qayta yoqdim.", why: "Present Perfect bilan **already** — \"allaqachon\" (tasdiq gapda)." } },
      ],
    },
    {
      title: "Talab qilish: causative va muloyim qat'iylik",
      blocks: [
        { t: 'p', md: "Biror narsani kimdir **sizning o'rningizga** tuzatsa, **have / get + narsa + V3** ishlatiladi (3-darsda to'liq o'rganasiz). Servisda bu juda ko'p uchraydi." },
        { t: 'examples', items: [
          { en: "I'd like to get it repaired under warranty.", uz: "Uni kafolat asosida ta'mirlatmoqchiman.", note: "**get it repaired** — o'zim ta'mirlamayman, ustaga ta'mirlatiladi." },
          { en: "Could I have the battery replaced free of charge?", uz: "Batareyani bepul almashtirib berishlarini so'rasam bo'ladimi?" },
          { en: "I'm afraid that isn't acceptable. I'd like a full refund.", uz: "Afsuski, bu qabul qilib bo'lmaydi. To'liq pulni qaytarishni so'rayman.", note: "**I'm afraid…** — rad etishni yumshatadi, lekin talab o'zgarmaydi." },
        ] },
        { t: 'compare',
          good: { title: "Muloyim va qat'iy", items: ["I'd like to have it repaired, please.", "I'm afraid I can't wait three weeks.", "Could you tell me what the next step is?"] },
          bad: { title: "Qo'pol yoki noaniq", items: ["Repair it now!", "Your product is rubbish, I want money.", "I don't know, it just doesn't work."] } },
        { t: 'check', ex: { k: 'choice', q: "Ustalar ekranni sizning o'rningizga almashtirib berishini so'ramoqchisiz.", opts: ["I'd like to have the screen replaced.", "I'd like to replace the screen.", "I'd like to have replaced the screen by me.", "I'd like the screen to replace."], a: 0, why: "**have + narsa + V3** — ishni boshqa odam bajaradi. *replace the screen* — o'zingiz almashtirasiz." } },
      ],
    },
    {
      title: "Tipik xatolar va dialog",
      blocks: [
        { t: 'p', md: "O'zbek tilida *noutbukim buzildi* deymiz va inglizchaga so'zma-so'z o'giramiz. Bu yerda uchta tipik xato:" },
        { t: 'compare',
          good: { title: "To'g'ri", items: ["My laptop has stopped working.", "I bought it two weeks ago.", "I'd like to get it repaired."] },
          bad: { title: "Xato", items: ["My laptop has broke.", "I bought it since two weeks.", "I'd like to repair it in your shop."] } },
        { t: 'check', ex: { k: 'fix', wrong: "I bought it since two weeks and it already doesn't work.", a: ["I bought it two weeks ago and it already doesn't work.", "I bought it two weeks ago and it already does not work.", "I bought it two weeks ago and it doesn't work already."], why: "*since* — boshlang'ich nuqta; \"ikki hafta avval\" = **two weeks ago** (o'tgan zamon bilan)." } },
        { t: 'dialog', lines: [
          { who: 'Tom', en: "Technical support, Tom speaking. How can I help?", uz: "Texnik yordam, Tom eshitadi. Qanday yordam bera olaman?" },
          { who: 'Nilufar', en: "Hello. I bought a laptop from you two weeks ago and it keeps freezing.", uz: "Salom. Ikki hafta oldin sizdan noutbuk sotib oldim va u qayta-qayta qotib qolyapti." },
          { who: 'Tom', en: "I'm sorry to hear that. Has it been doing this since you bought it?", uz: "Eshitib afsusdaman. Sotib olganingizdan beri shunday bo'lyaptimi?" },
          { who: 'Nilufar', en: "No, it started after the last update. I've already restarted it several times, and I followed your troubleshooting guide.", uz: "Yo'q, oxirgi yangilanishdan keyin boshlandi. Uni bir necha marta qayta yoqdim va yo'riqnomangizga amal qildim." },
          { who: 'Tom', en: "Thank you. It may be a malfunction in the hard drive. We can have it checked by a technician.", uz: "Rahmat. Qattiq diskda nosozlik bo'lishi mumkin. Uni texnik ko'rikdan o'tkazib berishimiz mumkin." },
          { who: 'Nilufar', en: "How long will that take? I need it for work, so I'm afraid I can't be without it for weeks.", uz: "Bu qancha vaqt oladi? Menga ish uchun kerak, afsuski, uni haftalab qoldirib bo'lmaydi." },
          { who: 'Tom', en: "Usually five working days. If they can't fix it, you'll get a replacement or a refund.", uz: "Odatda besh ish kuni. Tuzata olmasalar, almashtirib beriladi yoki pul qaytariladi." },
          { who: 'Nilufar', en: "Fine. Could you send me a confirmation by email, please?", uz: "Yaxshi. Iltimos, menga email orqali tasdiq yubora olasizmi?" },
        ] },
        { t: 'check', ex: { k: 'tf', q: "Nilufar's problem started when she bought the laptop.", a: false, why: "*No, it started after the last update.*" } },
        { t: 'check', ex: { k: 'choice', q: "What does Tom promise if the laptop cannot be fixed?", opts: ["A replacement or a refund", "A free phone", "A visit from a technician at home", "Nothing"], a: 0, why: "*you'll get a replacement or a refund.*" } },
      ],
    },
  ],
  words: [
    { en: 'malfunction', uz: "nosozlik, ishdan chiqish", ipa: 'mælˈfʌŋk.ʃən', pos: 'noun', ex: 'The technician found a malfunction in the power supply.', exUz: "Texnik quvvat blokidagi nosozlikni topdi." },
    { en: 'overheat', uz: "haddan tashqari qizib ketmoq", ipa: 'ˌəʊ.vəˈhiːt', pos: 'verb', ex: 'My phone overheats whenever I charge it.', exUz: "Telefonim zaryadlanganda doim qizib ketadi." },
    { en: 'troubleshoot', uz: "nosozlik sababini topib tuzatmoq", ipa: 'ˈtrʌb.əl.ʃuːt', pos: 'verb', ex: 'We spent an hour trying to troubleshoot the Wi-Fi problem.', exUz: "Wi-Fi muammosining sababini topishga bir soat sarfladik." },
    { en: 'unresponsive', uz: "javob bermaydigan (qurilma, ekran)", ipa: 'ˌʌn.rɪˈspɒn.sɪv', pos: 'adj', ex: 'The touchscreen became completely unresponsive.', exUz: "Sensorli ekran butunlay javob bermay qoldi." },
    { en: 'reset', uz: "boshlang'ich holatga qaytarmoq", ipa: 'ˌriːˈset', pos: 'verb', ex: 'You can reset the router by holding the button for ten seconds.', exUz: "Routerni tugmani o'n soniya bosib turib, boshlang'ich holatga qaytarsa bo'ladi." },
    { en: 'technician', uz: "texnik mutaxassis, usta", ipa: 'tekˈnɪʃ.ən', pos: 'noun', ex: 'A technician will visit you on Thursday.', exUz: "Payshanba kuni sizga texnik mutaxassis keladi." },
  ],
  practice: [
    { k: 'match', pairs: [['It keeps freezing.', "U qayta-qayta qotib qoladi."], ["It won't turn on.", "U yonmayapti."], ['It overheats.', "U haddan ziyod qizib ketadi."], ['The screen is unresponsive.', "Ekran javob bermaydi."], ['I want a refund.', "Pulni qaytarib berishlarini xohlayman."]] },
    { k: 'choice', q: "My laptop ___ crashing every time I open the browser.", opts: ['keeps', 'keep', 'is keep', 'keeps to'], a: 0, why: "Ega birlik (*my laptop*): **keeps + -ing**." },
    { k: 'fill', q: "I'd like to get the screen ___ under warranty.", a: ['repaired', 'replaced', 'fixed'], uz: "Ekranni kafolat asosida ta'mirlatmoqchiman.", hint: "Ta'mirlangan holat (V3)", why: "**get + narsa + V3**: ish boshqa odam tomonidan bajariladi." },
    { k: 'listen', say: "I've already tried to reset it, but it won't turn on.", opts: ["I've already tried to reset it, but it won't turn on.", "I've already tried to reset it, but it didn't turn on.", "I already try to reset it, but it won't turn on.", "I've already reset it, and it will turn on."], a: 0 },
    { k: 'tf', q: "*I bought it since last Monday.* — Gap to'g'ri.", a: false, why: "Aniq o'tgan vaqt uchun **last Monday** (yoki *ago*) bilan oddiy o'tgan zamon: *I bought it last Monday.*" },
    { k: 'order', uz: "Muammo oxirgi yangilanishdan keyin boshlandi.", words: ['The', 'problem', 'started', 'after', 'the', 'last', 'update.'], extra: ['since', 'has'], why: "Aniq o'tgan vaqt: **started after**." },
    { k: 'fix', wrong: "My phone has broke yesterday.", a: ["My phone broke yesterday.", "My phone stopped working yesterday."], why: "*yesterday* bilan **Past Simple** (*broke*), Present Perfect emas." },
    { k: 'choice', q: "Qaysi gap muloyim, lekin qat'iy?", opts: ["I'm afraid that isn't acceptable. I'd like a full refund.", "That's not my problem. Give me money.", "Maybe a refund, I don't know.", "You must be joking, this is stupid."], a: 0, why: "**I'm afraid… I'd like…** — tinch, aniq talab." },
    { k: 'translate', uz: "Telefonim zaryadlanayotganda haddan tashqari qizib ketadi.", a: ["My phone overheats when I charge it.", "My phone overheats when it's charging.", "My phone overheats while it is charging.", "My phone overheats while charging.", "My phone overheats when it is charging.", "My phone overheats while it's charging."], why: "**overheat** — fe'l; *when I charge it / when it's charging*." },
    { k: 'dictation', say: "Could I have the battery replaced free of charge?", a: ["Could I have the battery replaced free of charge?"], uz: "Batareyani bepul almashtirib berishlarini so'rasam bo'ladimi?" },
    { k: 'order', uz: "Men uni texnik ko'rikdan o'tkazib olmoqchiman.", words: ["I'd", 'like', 'to', 'have', 'it', 'checked', 'by', 'a', 'technician.'], extra: ['check', 'having'], alt: [['I', 'would', 'like', 'to', 'have', 'it', 'checked', 'by', 'a', 'technician.']], why: "**have + it + V3**." },
    { k: 'fix', wrong: "I'd like to repair it in your service centre.", a: ["I'd like to have it repaired in your service centre.", "I'd like to get it repaired in your service centre.", "I would like to have it repaired in your service centre.", "I would like to get it repaired in your service centre."], why: "Siz ta'mirlamaysiz, ustalar ta'mirlaydi: **have / get it repaired**." },
    { k: 'tf', q: "*The screen is unresponsive* degani ekran bosishlarga javob bermaydi.", a: true, why: "**unresponsive** = javob bermaydigan." },
    { k: 'speak', say: "I'm afraid I can't be without my laptop for weeks.", uz: "Afsuski, noutbuksiz haftalab qola olmayman." },
  ],
  quiz: [
    { k: 'choice', q: "The phone ___ whenever I use the camera for more than five minutes.", opts: ['overheats', 'overheat', 'is overheat', 'overheating'], a: 0, why: "Odat/takror: Present Simple, ega birlik → **overheats**." },
    { k: 'choice', q: "I'd like ___ replaced under warranty.", opts: ['to have the battery', 'to have replaced the battery', 'the battery to have', 'to replace the battery by you'], a: 0, why: "**to have + narsa + V3**: *to have the battery replaced*." },
    { k: 'fill', q: "It started ___ the last software update.", a: ['after'], uz: "U oxirgi dastur yangilanishidan keyin boshlandi.", hint: "oldin emas, keyin", why: "Voqeadan keyingi vaqt: **after**." },
    { k: 'fix', wrong: "My laptop doesn't turn on since Monday.", a: ["My laptop hasn't turned on since Monday.", "My laptop has not turned on since Monday.", "My laptop hasn't worked since Monday.", "My laptop has not worked since Monday."], why: "**since** bilan **Present Perfect**: *hasn't turned on since Monday*." },
    { k: 'listen', say: "The screen is completely unresponsive.", opts: ["The screen is completely unresponsive.", "The screen is completely unreasonable.", "The screen is completely unresolved.", "The screen is completely unattractive."], a: 0 },
    { k: 'order', uz: "Men uni allaqachon ikki marta qayta yoqdim.", words: ["I've", 'already', 'restarted', 'it', 'twice.'], extra: ['restart', 'did'], alt: [['I', 'have', 'already', 'restarted', 'it', 'twice.']], why: "**Present Perfect + already**." },
    { k: 'tf', q: "*Could I have the screen replaced?* — Gapda foydalanuvchi ekranni o'zi almashtirmoqchi.", a: false, why: "**have + narsa + V3** — kimdir boshqa odam almashtiradi." },
    { k: 'translate', uz: "Qurilma yoqilmayapti.", a: ["It won't turn on.", "It will not turn on.", "It won't switch on.", "The device won't turn on.", "The device won't switch on.", "It won't start.", "It isn't turning on."], why: "**won't + fe'l** — qurilma \"yoqilishdan bosh tortyapti\"." },
    { k: 'choice', q: "Which word is a person, not a problem?", opts: ['technician', 'malfunction', 'overheat', 'reset'], a: 0, why: "**technician** — mutaxassis; qolganlari nosozlik yoki harakat." },
  ],
  summary: [
    "Muammo: **it keeps freezing** (takror), **it won't turn on** (yoqilmayapti), **it overheats**, **unresponsive**.",
    "Xabarda uch narsa bo'lsin: muammo, qachon boshlangan (*after the update*), nimalar urinib ko'rilgan (*I've already restarted it*).",
    "Ta'mirlatish: **have / get + narsa + V3** (*get it repaired*, *have the battery replaced*).",
    "Muloyim, lekin qat'iy: **I'm afraid that isn't acceptable. I'd like…**",
    "Xato: *I bought it since two weeks* → *two weeks ago*; *has broke* → *broke / has broken*.",
  ],
  homework: "O'z qurilmangiz (yoki o'ylab topilgan holat) uchun servis markaziga 5-6 gaplik chat xabari yozing: muammo, qachon boshlandi, nima urinib ko'rdingiz va nimani so'rayapsiz (*get it repaired / a refund*). Keyin uni ovoz chiqarib o'qing.",
};

export default lesson;
