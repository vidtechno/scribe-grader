import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u21-l5",
  title: "Cities, buildings and tourism",
  titleUz: "Shahar, binolar va turizm: so'zlar va so'z yasalishi",
  goal: "Shahar, bino va turizm haqidagi B1 so'zlarini (*suburb, landmark, sightseeing, accommodation…*) ishlatasiz va suffikslar yordamida yangi so'z yasaysiz (*attract → attraction, tour → tourist, tradition → traditional*).",
  slides: [
    {
      title: "Shahar va uning qismlari",
      blocks: [
        { t: "p", md: "Shahar haqida gapirganda faqat *city* va *building* deyish yetarli emas. B1 darajada shahar qismlari va binolarni aniqroq ayta olishingiz kerak." },
        {
          t: "table", head: ["So'z", "Ma'nosi", "Misol"], speak: [2],
          rows: [
            ["suburb", "shahar chekkasidagi yashash hududi", "We live in a quiet suburb of the city."],
            ["district", "tuman, mavze", "The old district is full of narrow streets."],
            ["skyscraper", "osmono'par bino", "There are many tall skyscrapers in Dubai."],
            ["landmark", "shaharning mashhur belgisi", "The Eiffel Tower is a famous landmark."],
            ["city centre", "shahar markazi", "The city centre is busy on Saturdays."],
            ["bridge", "ko'prik", "We walked across the old bridge."],
          ],
        },
        { t: "tip", tone: "info", md: "**City centre** — Britaniya ingliz tilida. Amerikada **downtown** deyiladi. Ikkalasi ham to'g'ri, lekin bir gapda aralashtirmang." },
        { t: "check", ex: { k: "choice", q: "We don't live in the centre. We live in a quiet ___ outside the city.", opts: ["suburb", "landmark", "skyscraper", "bridge"], a: 0, why: "Shahar tashqarisidagi tinch yashash hududi — **suburb**." } },
        { t: "check", ex: { k: "choice", q: "Which word means a famous building or place that everyone knows?", opts: ["landmark", "district", "suburb", "bridge"], a: 0, why: "**landmark** — shaharni tanitadigan mashhur bino yoki joy." } },
      ],
    },
    {
      title: "Turizm so'zlari",
      blocks: [
        { t: "p", md: "Sayohat haqida gapirganda quyidagi so'zlar eng ko'p uchraydi. Ularni jumla ichida eslab qoling:" },
        {
          t: "examples", items: [
            { en: "The old fortress is a popular tourist attraction.", uz: "Qadimiy qal'a mashhur turistik diqqatga sazovor joy.", note: "**attraction** — turistlar ko'rishga boradigan joy." },
            { en: "Bukhara is a famous tourist destination.", uz: "Buxoro mashhur turistik yo'nalish.", note: "**destination** — sayohat qilib boriladigan joy." },
            { en: "We went sightseeing on our first day.", uz: "Birinchi kuni biz shaharni aylanib ko'rdik.", note: "**go sightseeing** — *go to sightseeing* emas." },
            { en: "Accommodation is expensive in summer.", uz: "Yozda turar joy qimmat.", note: "**accommodation** sanalmaydi: *an accommodation* demaymiz." },
            { en: "Our guide spoke excellent English.", uz: "Gidimiz ajoyib ingliz tilida gapirdi." },
          ],
        },
        { t: "tip", tone: "warn", md: "O'zbek tilida «yotish joyi» deymiz va sanaymiz. Inglizchada **accommodation** sanalmaydigan ot: *good accommodation*, *some accommodation*. ~~a good accommodation~~, ~~two accommodations~~ — odatiy emas." },
        { t: "check", ex: { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["We went sightseeing on Sunday.", "We went to sightseeing on Sunday.", "We went sightseeings on Sunday.", "We were sightseeing to Sunday."], a: 0, why: "**go sightseeing** — qo'shimcha predlog yo'q va ko'plik shakli yo'q." } },
        { t: "check", ex: { k: "fill", q: "___ near the station is cheap, so we booked a room there.", a: ["Accommodation"], why: "**Accommodation** — sanalmaydigan ot, gap boshida bosh harf bilan." } },
      ],
    },
    {
      title: "So'z yasalishi: suffikslar",
      blocks: [
        { t: "p", md: "Bir so'zni bilsangiz, undan bir necha so'z yasash mumkin. Suffiks (so'z oxiriga qo'shiladigan qism) so'zning turini o'zgartiradi: fe'ldan ot, otdan sifat." },
        {
          t: "table", head: ["Suffiks", "Asosiy so'z", "Yangi so'z", "Turi"], speak: [2],
          rows: [
            ["-ion / -ation", "attract, decorate", "attraction, decoration", "ot"],
            ["-ist", "tour, art", "tourist, artist", "ot (odam)"],
            ["-or / -er", "visit, travel", "visitor, traveller", "ot (odam)"],
            ["-ment", "entertain, develop", "entertainment, development", "ot"],
            ["-ous", "fame, danger", "famous, dangerous", "sifat"],
            ["-ful", "beauty, peace", "beautiful, peaceful", "sifat"],
            ["-al", "culture, tradition", "cultural, traditional", "sifat"],
            ["-able", "comfort, enjoy", "comfortable, enjoyable", "sifat"],
          ],
        },
        { t: "tip", tone: "info", md: "Imlo o'zgarishiga e'tibor bering: *fame → famous* (**e** tushadi), *travel → traveller* (Britaniyada **ll**). Yangi so'zni o'rganganda uning oilasini ham yozib oling." },
        { t: "check", ex: { k: "fill", q: "Thousands of ___ visit the old town every year. (tour)", a: ["tourists"], why: "Odamlar: **tour + ist = tourist**, ko'plikda **tourists**." } },
        { t: "check", ex: { k: "fill", q: "We ate some ___ food in a small local restaurant. (tradition)", a: ["traditional"], why: "Sifat kerak: **tradition + al = traditional**." } },
      ],
    },
    {
      title: "Historic yoki historical?",
      blocks: [
        { t: "p", md: "Ikkita o'xshash sifatni adashtirmang. Ular bir xil emas:" },
        {
          t: "table", head: ["Sifat", "Ma'nosi", "Misol"], speak: [2],
          rows: [
            ["historic", "tarixda muhim (o'zi tarixiy ahamiyatli)", "We visited a historic building in the old town."],
            ["historical", "tarixga oid, tarix haqida", "She loves reading historical novels."],
            ["crowded", "gavjum, odam ko'p", "The market is crowded at the weekend."],
            ["spacious", "keng, joyi ko'p", "The room was clean and spacious."],
          ],
        },
        { t: "compare",
          good: { title: "To'g'ri", items: ["It is a historic city.", "He wrote a historical book.", "The square is crowded in summer."] },
          bad: { title: "Xato", items: ["The square is crowd in summer.", "She loves reading historic novels.", "We went to sightseeing."] } },
        { t: "tip", tone: "warn", md: "**crowded** — sifat (*odam ko'p*), **crowd** — ot (*olomon*). *The street is crowd* — xato, to'g'risi *The street is crowded.*" },
        { t: "check", ex: { k: "choice", q: "The old fortress is a ___ building. It is hundreds of years old and very important.", opts: ["historic", "crowded", "spacious", "historically"], a: 0, why: "Tarixda muhim bino → **historic**." } },
      ],
    },
    {
      title: "O'qing: Buxoroda dam olish kunlari",
      blocks: [
        {
          t: "text", title: "A weekend in Bukhara", voice: "emma",
          en: "Last month I spent a weekend in Bukhara. It is a popular tourist destination, and the old district is full of historic buildings. Finding accommodation was easy because I booked a small hotel near the main square a month earlier. On Saturday I went sightseeing with a local guide. She showed us a famous landmark, some old markets and a beautiful traditional teahouse. The city centre was very crowded at lunchtime, so we had lunch in a quiet side street. In the evening I walked around the lake and watched the lights. It was an enjoyable and relaxing trip, and I would like to go back in spring.",
          uz: "O'tgan oy men Buxoroda dam olish kunlarini o'tkazdim. Bu mashhur turistik yo'nalish, eski mavzesi esa tarixiy binolarga to'la. Turar joy topish oson bo'ldi, chunki bir oy oldin bosh maydon yaqinidagi kichik mehmonxonani band qilgan edim. Shanba kuni men mahalliy gid bilan shaharni aylanib ko'rdim. U bizga mashhur diqqatga sazovor bino, bir nechta qadimiy bozor va chiroyli an'anaviy choyxonani ko'rsatdi. Tushlik paytida shahar markazi juda gavjum edi, shuning uchun biz tinch ko'chada tushlik qildik. Kechqurun ko'l atrofida sayr qildim va chiroqlarni tomosha qildim. Bu yoqimli va maroqli safar bo'ldi, bahorda yana borgim keladi.",
        },
        { t: "check", ex: { k: "tf", q: "The writer found accommodation easily because she booked early.", a: true, why: "U bir oy oldin mehmonxona band qilgan." } },
        { t: "check", ex: { k: "choice", q: "Why did they have lunch in a quiet side street?", opts: ["The city centre was crowded.", "The hotel was far away.", "It was a historic day.", "The guide was ill."], a: 0, why: "Matnda: *The city centre was very crowded at lunchtime.*" } },
      ],
    },
    {
      title: "Dialog: shahar sayohati rejasi",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Helen", en: "I'm planning a city break next month. Have you been to Samarkand?", uz: "Men kelasi oy shaharga qisqa sayohat rejalashtiryapman. Samarqandda bo'lganmisan?" },
            { who: "Sardor", en: "Yes, twice. It's a wonderful destination, especially in autumn.", uz: "Ha, ikki marta. Ayniqsa kuzda ajoyib joy." },
            { who: "Helen", en: "Where should I stay? I need good accommodation near the centre.", uz: "Qayerda qolishim kerak? Markazga yaqin yaxshi turar joy kerak." },
            { who: "Sardor", en: "Try a small guesthouse in the old district. It's cheap and very comfortable.", uz: "Eski mavzedagi kichik mehmon uyini ko'r. Arzon va juda qulay." },
            { who: "Helen", en: "What should I see besides the Registan?", uz: "Registondan tashqari nimani ko'rishim kerak?" },
            { who: "Sardor", en: "Go sightseeing on foot. The streets are lovely, but the main square is crowded after lunch.", uz: "Shaharni piyoda aylan. Ko'chalar go'zal, lekin bosh maydon tushlikdan keyin gavjum bo'ladi." },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Sardor says the main square is quiet after lunch.", a: false, why: "U aksincha, maydon tushlikdan keyin **crowded** (gavjum) deydi." } },
      ],
    },
  ],
  words: [
    { en: "skyline", uz: "shahar silueti", ipa: "ˈskaɪ.laɪn", pos: "noun", ex: "The skyline of the city looks amazing at night.", exUz: "Shahar silueti kechasi ajoyib ko'rinadi." },
    { en: "district", uz: "tuman, mavze", ipa: "ˈdɪs.trɪkt", pos: "noun", ex: "The old district has narrow streets and small shops.", exUz: "Eski mavzeda tor ko'chalar va kichik do'konlar bor." },
    { en: "skyscraper", uz: "osmono'par bino", ipa: "ˈskaɪˌskreɪ.pər", pos: "noun", ex: "The city has more than twenty skyscrapers.", exUz: "Shaharda yigirmadan ortiq osmono'par bino bor." },
    { en: "landmark", uz: "mashhur belgi, diqqatga sazovor bino", ipa: "ˈlænd.mɑːk", pos: "noun", ex: "The tower is the best-known landmark in town.", exUz: "Minora shahardagi eng mashhur belgi." },
    { en: "outskirts", uz: "shahar chekkasi", ipa: "ˈaʊt.skɜːts", pos: "noun", ex: "They live on the outskirts of the city.", exUz: "Ular shahar chekkasida yashaydi." },
    { en: "accommodation", uz: "turar joy", ipa: "əˌkɒm.əˈdeɪ.ʃən", pos: "noun", ex: "Cheap accommodation is hard to find in July.", exUz: "Iyulda arzon turar joy topish qiyin." },
    { en: "residential", uz: "turar-joy", ipa: "ˌrez.ɪˈden.ʃəl", pos: "adj", ex: "This is a quiet residential area with many parks.", exUz: "Bu ko'plab bog'lari bor tinch turar-joy tumani." },
    { en: "destination", uz: "borilgan manzil, yo'nalish", ipa: "ˌdes.tɪˈneɪ.ʃən", pos: "noun", ex: "Turkey is a popular holiday destination.", exUz: "Turkiya mashhur ta'til yo'nalishi." },
    { en: "bustling", uz: "gavjum, qaynoq", ipa: "ˈbʌs.lɪŋ", pos: "adj", ex: "The market is a bustling place on Saturdays.", exUz: "Bozor shanba kunlari qaynoq joy bo'ladi." },
    { en: "guided tour", uz: "gid hamrohligidagi sayohat", ipa: "ˈɡaɪ.dɪd tʊər", pos: "noun", ex: "We went on a guided tour of the old town.", exUz: "Biz eski shahar bo'ylab gid hamrohligida sayohat qildik." },
  ],
  practice: [
    { k: "match", pairs: [["suburb", "shahar chekkasi"], ["skyscraper", "osmono'par bino"], ["landmark", "mashhur belgi"], ["sightseeing", "joylarni aylanib ko'rish"], ["accommodation", "turar joy"]] },
    { k: "choice", q: "**Dubai is famous for its tall ___.**", opts: ["skyscrapers", "suburbs", "accommodations", "sightseeings"], a: 0, why: "Baland binolar → **skyscrapers**." },
    { k: "choice", q: "**We went ___ in the old town on Saturday.**", opts: ["sightseeing", "to sightseeing", "sightseeings", "for sightseeing tour"], a: 0, why: "**go sightseeing** — qo'shimcha predlogsiz." },
    { k: "fill", q: "The castle is a popular tourist ___. Over a million people visit it every year.", a: ["attraction", "destination"], why: "Turistlar boradigan joy → **attraction** (yoki **destination**)." },
    { k: "fill", q: "___ in the city centre is very expensive, so we stayed in the suburbs.", a: ["Accommodation"], why: "**Accommodation** — sanalmaydigan ot." },
    { k: "fill", q: "Bukhara has many ___ buildings, some of them over five hundred years old. (history)", a: ["historic"], why: "Tarixda muhim binolar → **historic**." },
    { k: "fill", q: "The hotel was clean and very ___. (comfort)", a: ["comfortable"], uz: "Mehmonxona toza va juda qulay edi.", why: "**comfort + able = comfortable**." },
    { k: "order", uz: "Dam olish kunlari biz shaharni aylanib ko'rdik.", words: ["We", "went", "sightseeing", "at", "the", "weekend."], extra: ["to", "visit"], alt: [["At", "the", "weekend", "we", "went", "sightseeing."]], why: "**went sightseeing** — predlogsiz." },
    { k: "translate", uz: "Bu shahar mashhur turistik yo'nalish.", a: ["This city is a famous tourist destination.", "This city is a popular tourist destination.", "This is a famous tourist destination.", "This is a popular tourist destination."], why: "**tourist destination** — turistik yo'nalish." },
    { k: "tf", q: "**We need two accommodations for the trip** — bu odatiy gap.", a: false, why: "**Accommodation** sanalmaydi: *We need some accommodation.*" },
    { k: "tf", q: "**Crowded** va **crowd** bir xil turdagi so'z.", a: false, why: "**crowd** — ot (olomon), **crowded** — sifat (gavjum)." },
    { k: "listen", say: "The hotel is in a quiet district near the old town.", opts: ["The hotel is in a quiet district near the old town.", "The hotel is in a quiet suburb near the old town.", "The hotel is in a crowded district near the old town."], a: 0, why: "Eshitilgan so'zlar: **quiet district**." },
    { k: "dictation", say: "The city centre is crowded in summer.", uz: "Yozda shahar markazi gavjum bo'ladi." },
    { k: "fix", wrong: "We stayed in a good accommodation near the station.", a: ["We stayed in good accommodation near the station.", "We stayed in some good accommodation near the station."], hint: "Accommodation sanalmaydi", why: "**a** ishlatilmaydi: *good accommodation*." },
    { k: "speak", say: "Many tourists go sightseeing in the old district.", uz: "Ko'p turistlar eski mavzeda shaharni aylanib ko'radi." },
  ],
  quiz: [
    { k: "choice", q: "**A person who visits a place on holiday is a ___.**", opts: ["tourist", "tourism", "touring", "tour"], a: 0, why: "Odam: **tour + ist = tourist**." },
    { k: "choice", q: "**The city was too ___ at lunchtime, so we couldn't find a table.**", opts: ["crowded", "crowd", "historic", "spacious"], a: 0, why: "Odam ko'p degan ma'no → sifat **crowded**." },
    { k: "choice", q: "**The Eiffel Tower is a famous ___ in Paris.**", opts: ["landmark", "suburb", "accommodation", "district"], a: 0, why: "Shaharning mashhur belgisi → **landmark**." },
    { k: "fill", q: "Our guide was very friendly and made the tour really ___. (enjoy)", a: ["enjoyable"], why: "**enjoy + able = enjoyable**." },
    { k: "fill", q: "Samarkand is a popular holiday ___ for visitors from all over the world.", a: ["destination"], why: "Sayohat yo'nalishi → **destination**." },
    { k: "fill", q: "The old fortress is one of the main tourist ___ in the region.", a: ["attractions"], why: "Ko'plik: **attractions**." },
    { k: "listen", say: "We booked accommodation near the main square.", opts: ["We booked accommodation near the main square.", "We booked a destination near the main square.", "We booked accommodations near the main square."], a: 0 },
    { k: "tf", q: "**We went to sightseeing yesterday** — bu gap to'g'ri.", a: false, why: "To'g'risi: *We went sightseeing yesterday.*" },
    { k: "order", uz: "Eski mavzeda ko'p tarixiy binolar bor.", words: ["There", "are", "many", "historic", "buildings", "in", "the", "old", "district."], extra: ["a", "crowd"], why: "**historic** — tarixda muhim." },
    { k: "translate", uz: "Yozda turar joy qimmat.", a: ["Accommodation is expensive in summer.", "Accommodation is expensive in the summer.", "In summer accommodation is expensive.", "In the summer accommodation is expensive."], why: "**Accommodation is** — sanalmaydigan ot, birlik fe'l." },
  ],
  summary: [
    "Shahar so'zlari: **suburb** (chekka hudud), **district** (mavze), **skyscraper** (osmono'par bino), **landmark** (mashhur belgi).",
    "Turizm: **attraction**, **destination**, **go sightseeing** (predlogsiz!), **accommodation** (sanalmaydi: *good accommodation*).",
    "Suffikslar: **-ion** (attraction), **-ist** (tourist), **-or/-er** (visitor), **-ous** (famous), **-ful** (beautiful), **-al** (traditional), **-able** (comfortable).",
    "**historic** — tarixda muhim; **historical** — tarixga oid. **crowded** — sifat (gavjum), **crowd** — ot (olomon).",
  ],
  homework: "O'z shahringiz yoki sevimli sayohat joyingiz haqida 6 ta gap yozing. Kamida 5 ta yangi so'zni ishlating (*suburb, landmark, attraction, accommodation, crowded…*). Keyin 4 ta so'z oilasini yozing (masalan, *tradition → traditional*).",
};

export default lesson;
