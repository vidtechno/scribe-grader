import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u5-l4",
  title: "Irregular verbs 1",
  titleUz: "Noto'g'ri fe'llar 1",
  goal: "Eng ko'p ishlatiladigan 10 ta noto'g'ri fe'lning o'tgan zamon shaklini (**went, came, got, had, did, made, took, saw, said, was/were**) bilasiz va kuningiz haqida o'tgan zamonda gapirasiz.",
  slides: [
    {
      title: "Noto'g'ri fe'llar nima?",
      blocks: [
        { t: "p", md: "O'tgan darsda **-ed** li fe'llarni o'rgandik: *play → played*. Lekin eng ko'p ishlatiladigan fe'llarning ko'pchiligi **-ed** olmaydi — ularning o'tgan zamon shakli butunlay boshqacha. Bular **noto'g'ri (irregular) fe'llar**." },
        {
          t: "examples", items: [
            { en: "I go to school every day. → I went to school yesterday.", uz: "Har kuni maktabga boraman. → Kecha maktabga bordim." },
            { en: "She has lunch at one. → She had lunch at one.", uz: "U birda tushlik qiladi. → U birda tushlik qildi." },
            { en: "We see our friends. → We saw our friends.", uz: "Do'stlarimizni ko'ramiz. → Do'stlarimizni ko'rdik." },
          ],
        },
        { t: "tip", tone: "good", md: "Ikkita xushxabar:\n• Bu shakllar ham **hamma shaxs uchun bir xil**: *I went, she went, they went*. (Yagona istisno — **was / were**.)\n• Ular kam emas, lekin **eng muhimlari** — atigi 20–30 ta. Bugun 10 ta, keyingi darsda yana 10 ta." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I went home.", "She came at six.", "We saw a film."] },
          bad: { title: "Xato", items: ["I goed home.", "She comed at six.", "We seed a film."] },
        },
        { t: "check", ex: { k: "choice", q: "\"Kecha men bozorga bordim.\"", opts: ["I goed to the market yesterday.", "I go to the market yesterday.", "I went to the market yesterday.", "I wented to the market yesterday."], a: 2, why: "**go → went**. *goed* va *wented* degan so'zlar yo'q." } },
      ],
    },
    {
      title: "Bugungi 10 ta fe'l",
      blocks: [
        { t: "p", md: "**V1** — asosiy shakl (lug'atdagi), **V2** — o'tgan zamon shakli. Har bir juftlikni eshiting va **juft holda** takrorlang:" },
        {
          t: "table", head: ["V1", "V2", "Ma'nosi", "V2 talaffuzi"],
          rows: [
            ["be", "was / were", "bo'lmoq", "woz / wö:"],
            ["have", "had", "ega bo'lmoq; yemoq", "hæd"],
            ["do", "did", "qilmoq", "did"],
            ["go", "went", "bormoq", "went"],
            ["come", "came", "kelmoq", "keym"],
            ["get", "got", "olmoq; bo'lmoq", "got"],
            ["make", "made", "yasamoq, tayyorlamoq", "meyd"],
            ["take", "took", "olmoq, olib ketmoq", "tuk"],
            ["see", "saw", "ko'rmoq", "so:"],
            ["say", "said", "aytmoq", "sed"],
          ],
          speak: [0, 1],
        },
        { t: "tip", tone: "good", md: "Yodlash usuli: kichik kartochkalar yasang — old tomonida **V1**, orqasida **V2**. Har kuni 2 daqiqa: *go – went, come – came, see – saw…* Ovoz chiqarib, ritm bilan aytsangiz, qo'shiqday yodda qoladi." },
        { t: "check", ex: { k: "fill", q: "take – ___", a: ["took"], why: "**take – took** (\"tuk\")." } },
      ],
    },
    {
      title: "Guruhlab yodlang va to'g'ri talaffuz qiling",
      blocks: [
        {
          t: "table", head: ["Guruh", "Fe'llar"],
          rows: [
            ["\"ey\" tovushi", "come → came, make → made"],
            ["unli o'zgaradi", "get → got, do → did, have → had"],
            ["butunlay boshqa", "go → went, see → saw, take → took"],
            ["yozilishi ey, o'qilishi e", "say → said"],
          ],
        },
        {
          t: "sounds", items: [
            { label: "said", say: "said", uz: "**\"sed\"** — *bed* bilan qofiyadosh. ❌ \"seyd\" emas!", examples: ["said", "He said hello."] },
            { label: "saw", say: "saw", uz: "**\"so:\"** — cho'ziq \"o\". *w* o'qilmaydi.", examples: ["saw", "I saw him."] },
            { label: "took", say: "took", uz: "**\"tuk\"** — qisqa \"u\". ❌ \"tu:k\" emas.", examples: ["took", "She took a photo."] },
            { label: "went", say: "went", uz: "**\"went\"** — *want* (\"wont\") bilan adashtirmang!", examples: ["went", "want"] },
            { label: "came", say: "came", uz: "**\"keym\"** — oxiridagi *e* o'qilmaydi.", examples: ["came", "made"] },
          ],
        },
        { t: "tip", tone: "warn", md: "**said** — eng ko'p xato talaffuz qilinadigan so'z. Yozilishi *say* ga o'xshaydi, lekin o'qilishi **\"sed\"**." },
        { t: "check", ex: { k: "listen", say: "said", opts: ["saw", "said", "say"], a: 1, why: "\"sed\" — **said**. *saw* = \"so:\", *say* = \"sey\"." } },
      ],
    },
    {
      title: "Kundalik iboralar o'tgan zamonda",
      blocks: [
        { t: "p", md: "Bu fe'llar kundalik iboralarda juda ko'p uchraydi. Iborani **butunligicha** yodlang:" },
        {
          t: "table", head: ["Hozir", "O'tgan zamon", "O'zbekcha"],
          rows: [
            ["get up", "got up", "o'rnimdan turdim"],
            ["have breakfast", "had breakfast", "nonushta qildim"],
            ["go to work / go home", "went to work / went home", "ishga bordim / uyga bordim"],
            ["do my homework", "did my homework", "uy vazifamni qildim"],
            ["make tea / make dinner", "made tea / made dinner", "choy damladim / kechki ovqat qildim"],
            ["take the bus / take a photo", "took the bus / took a photo", "avtobusga chiqdim / suratga oldim"],
            ["come home", "came home", "uyga keldim"],
          ],
          speak: [1],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I went home.", "I did my homework.", "I got up at seven.", "We had lunch."] },
          bad: { title: "Xato", items: ["I went to home.", "I made my homework.", "I get up at seven yesterday.", "We haved lunch."] },
        },
        { t: "tip", tone: "info", md: "**home** oldidan **to** qo'yilmaydi: *go home, come home*. Uy vazifasi — **do** bilan (*do homework*), ovqat va choy — **make** bilan (*make tea*)." },
        { t: "check", ex: { k: "fill", q: "Yesterday I ___ up at seven. (get)", a: ["got"], why: "**get up → got up**." } },
      ],
    },
    {
      title: "Kecham qanday o'tdi",
      blocks: [
        { t: "p", md: "Hikoyani o'qing va eshiting. Har bir noto'g'ri fe'lni toping:" },
        {
          t: "examples", items: [
            { en: "Yesterday I got up at seven.", uz: "Kecha soat yettida turdim." },
            { en: "I had breakfast and went to work.", uz: "Nonushta qildim va ishga bordim." },
            { en: "I saw my friend Bobur at the bus stop.", uz: "Bekatda do'stim Boburni ko'rdim." },
            { en: "He said, \"Good morning!\"", uz: "U \"Xayrli tong!\" dedi." },
            { en: "We took the bus together.", uz: "Birga avtobusga chiqdik." },
            { en: "In the evening I came home and made dinner.", uz: "Kechqurun uyga keldim va kechki ovqat tayyorladim." },
            { en: "I did my homework and went to bed at eleven.", uz: "Uy vazifamni qildim va soat o'n birda yotdim." },
          ],
        },
        { t: "check", ex: { k: "order", uz: "Biz birga avtobusga chiqdik.", words: ["We", "took", "the", "bus", "together"], extra: ["take"] } },
      ],
    },
    {
      title: "Dialog: Samarqanddan qaytib",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Sevara", en: "Hi, Jasur! How was your weekend?", uz: "Salom, Jasur! Dam olish kunlaring qanday o'tdi?" },
            { who: "Jasur", en: "It was great! I went to Samarkand with my family.", uz: "Ajoyib! Oilam bilan Samarqandga bordim." },
            { who: "Sevara", en: "Wow! I want to see Registan.", uz: "Voy! Men Registonni ko'rishni xohlayman." },
            { who: "Jasur", en: "We saw Registan and took a lot of photos.", uz: "Registonni ko'rdik va ko'p suratga oldik." },
            { who: "Jasur", en: "My father said, \"Samarkand is very beautiful!\"", uz: "Otam: \"Samarqand juda go'zal!\" dedi." },
            { who: "Sevara", en: "I had a quiet weekend. I made plov and did my homework.", uz: "Mening dam olishim tinch o'tdi. Palov qildim va uy vazifamni bajardim." },
            { who: "Jasur", en: "We came home late on Sunday, and I got up late today!", uz: "Yakshanba kuni uyga kech keldik, bugun esa kech turdim!" },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Jasur va oilasi Registonni ko'rishdi: **They saw Registan.**", a: true } },
      ],
    },
  ],
  words: [
    { en: "be – was/were", uz: "bo'lmoq", ipa: "biː – wɒz/wɜː", pos: "verb", ex: "We were in Samarkand last week.", exUz: "O'tgan hafta Samarqandda edik." },
    { en: "have – had", uz: "ega bo'lmoq; yemoq", ipa: "hæv – hæd", pos: "verb", ex: "I had breakfast at eight.", exUz: "Soat sakkizda nonushta qildim." },
    { en: "do – did", uz: "qilmoq", ipa: "duː – dɪd", pos: "verb", ex: "She did her homework.", exUz: "U uy vazifasini qildi." },
    { en: "go – went", uz: "bormoq", ipa: "ɡəʊ – went", pos: "verb", ex: "We went to the beach.", exUz: "Biz plyajga bordik." },
    { en: "come – came", uz: "kelmoq", ipa: "kʌm – keɪm", pos: "verb", ex: "He came home at six.", exUz: "U uyga oltida keldi." },
    { en: "get – got", uz: "olmoq; bo'lmoq", ipa: "ɡet – ɡɒt", pos: "verb", ex: "I got up early.", exUz: "Erta turdim." },
    { en: "make – made", uz: "yasamoq, tayyorlamoq", ipa: "meɪk – meɪd", pos: "verb", ex: "My sister made tea.", exUz: "Singlim choy damladi." },
    { en: "take – took", uz: "olmoq, olib ketmoq", ipa: "teɪk – tʊk", pos: "verb", ex: "They took the bus.", exUz: "Ular avtobusga chiqishdi." },
    { en: "see – saw", uz: "ko'rmoq", ipa: "siː – sɔː", pos: "verb", ex: "I saw him yesterday.", exUz: "Uni kecha ko'rdim." },
    { en: "say – said", uz: "aytmoq", ipa: "seɪ – sed", pos: "verb", ex: "She said goodbye.", exUz: "U xayr dedi." },
  ],
  practice: [
    { k: "listen", say: "went", opts: ["want", "went", "when"], a: 1, why: "\"went\" — **went** (bordi). *want* = \"wont\"." },
    { k: "listen", say: "took", opts: ["take", "talk", "took"], a: 2, why: "\"tuk\" — **took**." },
    { k: "listen", say: "We saw a film.", opts: ["We see a film.", "We saw a film.", "We say a film."], a: 1 },
    { k: "match", pairs: [["go", "went"], ["come", "came"], ["take", "took"], ["see", "saw"], ["make", "made"]] },
    { k: "match", pairs: [["have", "had"], ["do", "did"], ["get", "got"], ["say", "said"], ["be", "was / were"]] },
    { k: "choice", q: "**said** qaysi so'z bilan qofiyadosh (oxiri bir xil eshitiladi)?", opts: ["made", "bed", "played"], a: 1, why: "**said** = \"sed\", **bed** = \"bed\"." },
    { k: "fill", q: "I ___ to the museum last Sunday. (go)", a: ["went"] },
    { k: "fill", q: "She ___ eggs for breakfast. (have)", a: ["had"] },
    { k: "fill", q: "We ___ home late last night. (come)", a: ["came"] },
    { k: "fill", q: "My father ___ tea for everybody. (make)", a: ["made"] },
    { k: "tf", q: "**I went to home.** — to'g'ri gap.", a: false, why: "**home** oldidan **to** kerak emas: *I went home.*" },
    { k: "choice", q: "\"Kecha uy vazifamni qildim.\"", opts: ["I made my homework yesterday.", "I do my homework yesterday.", "I did my homework yesterday.", "I doed my homework yesterday."], a: 2, why: "Uy vazifasi — **do** bilan: **did my homework**." },
    { k: "order", uz: "Ular ikki kun oldin Toshkentga kelishdi.", words: ["They", "came", "to", "Tashkent", "two", "days", "ago"], extra: ["come"] },
    { k: "translate", uz: "Men soat yettida turdim.", a: ["I got up at seven", "I got up at seven o'clock", "I got up at 7", "I got up at 7 o'clock", "I woke up at seven", "I woke up at 7"] },
    { k: "translate", uz: "Biz ko'p suratga oldik.", a: ["We took a lot of photos", "We took lots of photos", "We took many photos", "We took a lot of pictures", "We took many pictures", "We took lots of pictures"] },
    { k: "speak", say: "Yesterday I got up at seven, had breakfast and went to work.", uz: "Kecha yettida turdim, nonushta qildim va ishga bordim." },
  ],
  quiz: [
    { k: "listen", say: "She came home at six.", opts: ["She comes home at six.", "She came home at six.", "She come home at six."], a: 1 },
    { k: "listen", say: "I saw him yesterday.", opts: ["I saw him yesterday.", "I see him yesterday.", "I said him yesterday."], a: 0 },
    { k: "fill", q: "We ___ the bus to school. (take)", a: ["took"] },
    { k: "fill", q: "Ali ___ hello to the teacher. (say)", a: ["said"] },
    { k: "fill", q: "They ___ at the concert last night. (be)", a: ["were"], why: "**they** → **were**." },
    { k: "fill", q: "I ___ my homework after dinner. (do)", a: ["did"] },
    { k: "choice", q: "Qaysi juftlik **xato**?", opts: ["get – got", "take – took", "go – goed", "see – saw"], a: 2, why: "**go – went**." },
    { k: "translate", uz: "Ular uyga kech kelishdi.", a: ["They came home late", "They got home late"] },
    { k: "order", uz: "Men kecha yangi telefon oldim.", words: ["I", "got", "a", "new", "phone", "yesterday"], extra: ["get", "to"] },
    { k: "translate", uz: "Biz kecha kechqurun film ko'rdik.", a: ["We saw a film last night", "We watched a film last night", "Last night we saw a film", "Last night we watched a film", "Last night, we saw a film", "Last night, we watched a film", "We saw a movie last night", "We watched a movie last night"] },
  ],
  summary: [
    "Noto'g'ri fe'llar **-ed** olmaydi, V2 ni yodlash kerak; shakl hamma shaxs uchun bir xil.",
    "**be – was/were, have – had, do – did, go – went, come – came**.",
    "**get – got, make – made, take – took, see – saw, say – said** (\"sed\"!).",
    "Iboralar: **got up, had breakfast, went home, did my homework, made tea, took the bus**.",
  ],
  homework: "10 ta kartochka yasang (V1 / V2) va har kuni ikki marta takrorlang. Kechagi kuningiz haqida bugungi fe'llardan kamida 6 tasini ishlatib, 7 ta gap yozing (*Yesterday I got up at…*).",
};

export default lesson;
