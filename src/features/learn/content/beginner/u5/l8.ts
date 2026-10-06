import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u5-l8",
  title: "Comparatives & superlatives",
  titleUz: "Qiyoslash: bigger, the biggest",
  goal: "Narsalar va odamlarni solishtirasiz: *Tashkent is bigger than Samarkand. This is the most interesting book.* **-er / -est**, **more / most** va **good – better – best** kabi istisnolarni to'g'ri ishlatasiz.",
  slides: [
    {
      title: "Solishtirish: -roq va eng",
      blocks: [
        { t: "p", md: "O'zbekchada solishtirish uchun **-roq** (*kattaroq*) va **eng** (*eng katta*) ishlatamiz. Ingliz tilida ham ikki daraja bor:\n• **qiyosiy daraja** (comparative): *bigger* — kattaroq\n• **orttirma daraja** (superlative): *the biggest* — eng katta" },
        {
          t: "examples", items: [
            { en: "Tashkent is big.", uz: "Toshkent katta." },
            { en: "Tashkent is bigger than Samarkand.", uz: "Toshkent Samarqanddan kattaroq." },
            { en: "Tashkent is the biggest city in Uzbekistan.", uz: "Toshkent O'zbekistondagi eng katta shahar." },
          ],
        },
        { t: "tip", tone: "info", md: "O'zbekchadagi **\"-dan\"** → inglizchada **than**: *Samarqand**dan** kattaroq* → *bigger **than** Samarkand*. **eng** → **the … -est**." },
        { t: "check", ex: { k: "choice", q: "\"Akam mendan baland.\"", opts: ["My brother is tall than me.", "My brother is taller than me.", "My brother is the tallest than me.", "My brother is taller that me."], a: 1, why: "**taller than** — \"-roq\" + \"-dan\"." } },
      ],
    },
    {
      title: "Qisqa sifatlar: -er / -est",
      blocks: [
        { t: "p", md: "**Bir bo'g'inli** sifatlarga **-er** va **-est** qo'shiladi. Imlo qoidalari -ed dagiga o'xshaydi:" },
        {
          t: "table", head: ["Qoida", "Sifat", "-roq", "eng"],
          rows: [
            ["+ er / est", "tall, fast, strong", "taller, faster", "the tallest, the fastest"],
            ["-e bilan: + r / st", "nice, large", "nicer, larger", "the nicest, the largest"],
            ["qisqa unli + undosh: ikkilanadi", "big, hot, thin", "bigger, hotter", "the biggest, the hottest"],
            ["undosh + y: y → ier / iest", "easy, happy, busy", "easier, happier", "the easiest, the happiest"],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["bigger", "easier", "nicer", "the hottest"] },
          bad: { title: "Xato", items: ["biger", "easyer", "niceer", "the hotest"] },
        },
        { t: "check", ex: { k: "fill", q: "My sister is ___ than me. (tall)", a: ["taller"] } },
        { t: "check", ex: { k: "fill", q: "Today is ___ than yesterday. (hot)", a: ["hotter"], why: "**hot** — qisqa unli + undosh → **t** ikkilanadi: *hotter*." } },
      ],
    },
    {
      title: "Uzun sifatlar: more / most",
      blocks: [
        { t: "p", md: "**Ikki va undan ko'p bo'g'inli** sifatlar (y bilan tugaganlaridan tashqari) o'zgarmaydi — oldidan **more** (-roq) va **the most** (eng) qo'yiladi:" },
        {
          t: "table", head: ["Sifat", "-roq", "eng"],
          rows: [
            ["difficult", "more difficult", "the most difficult"],
            ["interesting", "more interesting", "the most interesting"],
            ["important", "more important", "the most important"],
            ["expensive", "more expensive", "the most expensive"],
            ["beautiful", "more beautiful", "the most beautiful"],
          ],
          speak: [1, 2],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["more expensive", "the most difficult", "cheaper", "the easiest"] },
          bad: { title: "Xato", items: ["expensiver", "the difficultest", "more cheaper", "the most easy"] },
        },
        { t: "tip", tone: "warn", md: "**more** va **-er** ni **hech qachon** birga ishlatmang: ❌ *more bigger*, ❌ *more cheaper*. Yo biri, yo boshqasi!" },
        { t: "check", ex: { k: "choice", q: "This book is ___ than that one.", opts: ["interestinger", "more interesting", "most interesting", "more interestinger"], a: 1, why: "Uzun sifat → **more interesting**." } },
      ],
    },
    {
      title: "than va the",
      blocks: [
        {
          t: "examples", items: [
            { en: "A train is faster than a bus.", uz: "Poyezd avtobusdan tezroq." },
            { en: "English is easier than Chinese for me.", uz: "Men uchun ingliz tili xitoy tilidan osonroq." },
            { en: "My father is the strongest person in our family.", uz: "Otam oilamizdagi eng kuchli odam." },
            { en: "July is the hottest month of the year.", uz: "Iyul — yilning eng issiq oyi." },
            { en: "This is the most important lesson.", uz: "Bu eng muhim dars." },
          ],
        },
        { t: "p", md: "Orttirma darajadan keyin ko'pincha **in** (joy/guruh) yoki **of** keladi: *the tallest **in** the class, the best **in** the world, the hottest month **of** the year*." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["She is older than me.", "He is the tallest boy in the class.", "It's the best day of my life."] },
          bad: { title: "Xato", items: ["She is older that me. / more old than me.", "He is tallest boy in the class.", "It's the most best day of my life."] },
        },
        {
          t: "sounds", items: [
            { label: "than", say: "faster than a bus", uz: "Gap ichida kuchsiz: **\"dhən\"**. *th* — jarangli, tilning uchi tishlar orasida.", examples: ["faster than a bus", "older than me"] },
            { label: "-er", say: "taller", uz: "Oxiridagi **-er** — qisqa, kuchsiz **\"ə\"**; *r* o'qilmaydi: \"to:-lə\".", examples: ["taller", "faster", "easier"] },
          ],
        },
        { t: "check", ex: { k: "order", uz: "Toshkent Samarqanddan kattaroq.", words: ["Tashkent", "is", "bigger", "than", "Samarkand"], extra: ["more", "that"] } },
      ],
    },
    {
      title: "Noto'g'ri sifatlar: good, bad, far",
      blocks: [
        { t: "p", md: "Uchta muhim sifat qoidaga bo'ysunmaydi — xuddi noto'g'ri fe'llar kabi, ularni yodlash kerak:" },
        {
          t: "table", head: ["Sifat", "-roq", "eng"],
          rows: [
            ["good (yaxshi)", "better", "the best"],
            ["bad (yomon)", "worse", "the worst"],
            ["far (uzoq)", "further / farther", "the furthest / the farthest"],
          ],
          speak: [0, 1, 2],
        },
        {
          t: "examples", items: [
            { en: "My English is better now.", uz: "Ingliz tilim endi yaxshiroq." },
            { en: "She is the best student in our class.", uz: "U sinfimizdagi eng yaxshi o'quvchi." },
            { en: "The weather was worse yesterday.", uz: "Kecha ob-havo yomonroq edi." },
            { en: "That was the worst film of the year.", uz: "Bu yilning eng yomon filmi edi." },
            { en: "Khiva is further from Tashkent than Bukhara.", uz: "Xiva Toshkentdan Buxoroga qaraganda uzoqroq." },
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["better", "the best", "worse", "the worst"] },
          bad: { title: "Xato", items: ["gooder / more good", "the goodest", "badder / more bad", "the baddest"] },
        },
        {
          t: "sounds", items: [
            { label: "worse / worst", say: "worse, worst", uz: "**\"wö:s\", \"wö:st\"** — *weren't* dagi kabi cho'ziq \"ö\" tovushi. *or* bu yerda \"o:\" emas!", examples: ["worse", "worst"] },
          ],
        },
        { t: "check", ex: { k: "fill", q: "This is the ___ day of my life! (good)", a: ["best"] } },
      ],
    },
    {
      title: "Dialog va tabrik!",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Madina", en: "Which phone is better, this one or that one?", uz: "Qaysi telefon yaxshiroq, bumi yoki u?" },
            { who: "Sotuvchi", en: "This one is more expensive, but it's faster and stronger.", uz: "Bu qimmatroq, lekin tezroq va mustahkamroq." },
            { who: "Madina", en: "And that one?", uz: "U-chi?" },
            { who: "Sotuvchi", en: "That one is cheaper and easier to use. It's the most popular phone in our shop.", uz: "U arzonroq va ishlatish osonroq. Bu do'konimizdagi eng mashhur telefon." },
            { who: "Madina", en: "I think price is more important for me. I'll take the cheaper one.", uz: "Menimcha, men uchun narx muhimroq. Arzonrog'ini olaman." },
          ],
        },
        { t: "tip", tone: "good", md: "🎉 **Tabriklaymiz!** Bu — **Beginner** kursining so'nggi darsi. Siz noldan boshlab alifbo, *to be*, ikki hozirgi zamon, o'tgan zamon, kelajak va qiyoslashni o'rgandingiz. Endi o'zingiz, kuningiz, o'tmishingiz va rejalaringiz haqida inglizcha gapira olasiz!" },
        { t: "check", ex: { k: "tf", q: "Madina arzonroq telefonni tanladi.", a: true, why: "*I'll take the **cheaper** one.*" } },
      ],
    },
  ],
  words: [
    { en: "fast", uz: "tez", ipa: "fɑːst", pos: "adj", ex: "A train is faster than a bus.", exUz: "Poyezd avtobusdan tezroq." },
    { en: "slow", uz: "sekin", ipa: "sləʊ", pos: "adj", ex: "My old phone is very slow.", exUz: "Eski telefonim juda sekin." },
    { en: "strong", uz: "kuchli", ipa: "strɒŋ", pos: "adj", ex: "He is the strongest boy in the class.", exUz: "U sinfdagi eng kuchli bola." },
    { en: "easy", uz: "oson", ipa: "ˈiː.zi", pos: "adj", ex: "This exercise is easier.", exUz: "Bu mashq osonroq." },
    { en: "difficult", uz: "qiyin", ipa: "ˈdɪf.ɪ.kəlt", pos: "adj", ex: "Maths is more difficult than English for me.", exUz: "Men uchun matematika ingliz tilidan qiyinroq." },
    { en: "important", uz: "muhim", ipa: "ɪmˈpɔː.tənt", pos: "adj", ex: "Family is the most important thing.", exUz: "Oila — eng muhim narsa." },
    { en: "interesting", uz: "qiziqarli", ipa: "ˈɪn.trə.stɪŋ", pos: "adj", ex: "This book is more interesting than the film.", exUz: "Bu kitob filmdan qiziqarliroq." },
    { en: "good – better – best", uz: "yaxshi – yaxshiroq – eng yaxshi", ipa: "ɡʊd – ˈbet.ə – best", pos: "adj", ex: "She is my best friend.", exUz: "U mening eng yaqin do'stim." },
    { en: "bad – worse – worst", uz: "yomon – yomonroq – eng yomon", ipa: "bæd – wɜːs – wɜːst", pos: "adj", ex: "Yesterday was the worst day of the week.", exUz: "Kecha haftaning eng yomon kuni edi." },
    { en: "far – further – furthest", uz: "uzoq – uzoqroq – eng uzoq", ipa: "fɑː – ˈfɜː.ðə – ˈfɜː.ðɪst", pos: "adj", ex: "The bank is far, but the hospital is further.", exUz: "Bank uzoq, lekin kasalxona undan ham uzoqroq." },
  ],
  practice: [
    { k: "listen", say: "faster", opts: ["fast", "faster", "fastest"], a: 1 },
    { k: "listen", say: "the most important", opts: ["more important", "the important", "the most important"], a: 2 },
    { k: "match", pairs: [["fast", "tez"], ["slow", "sekin"], ["strong", "kuchli"], ["easy", "oson"], ["difficult", "qiyin"], ["important", "muhim"]] },
    { k: "match", pairs: [["good", "better"], ["bad", "worse"], ["far", "further"], ["big", "bigger"], ["easy", "easier"]] },
    { k: "choice", q: "My car is ___ than your car.", opts: ["slow", "slower", "slowest", "more slow"], a: 1 },
    { k: "choice", q: "This is ___ exercise in the book.", opts: ["the most difficult", "the difficultest", "more difficult", "most difficult"], a: 0, why: "Uzun sifat + **the most**; **the** ni unutmang." },
    { k: "fill", q: "Bukhara is ___ from Tashkent than Samarkand. (far)", a: ["further", "farther"] },
    { k: "fill", q: "English is ___ than Chinese for me. (easy)", a: ["easier"], why: "undosh + **y** → **ier**." },
    { k: "fill", q: "It was the ___ film of the year. (bad)", a: ["worst"] },
    { k: "tf", q: "**more bigger** — to'g'ri shakl.", a: false, why: "Faqat **bigger**. *more* va *-er* birga kelmaydi." },
    { k: "tf", q: "**the best** — *good* sifatining orttirma darajasi (eng yaxshi).", a: true },
    { k: "order", uz: "Bu kitob o'sha kitobdan qiziqarliroq.", words: ["This", "book", "is", "more", "interesting", "than", "that", "book"], extra: ["most"] },
    { k: "order", uz: "U oilamizdagi eng kuchli odam.", words: ["He", "is", "the", "strongest", "person", "in", "our", "family"], extra: ["most", "than"] },
    { k: "translate", uz: "Mening akam mendan baland.", a: ["My brother is taller than me", "My brother's taller than me", "My brother is taller than I am", "My older brother is taller than me", "My elder brother is taller than me", "My big brother is taller than me"] },
    { k: "translate", uz: "Bu juda muhim.", a: ["This is very important", "It's very important", "It is very important", "That is very important", "That's very important"] },
    { k: "speak", say: "Summer is hotter than spring, but winter is the coldest season.", uz: "Yoz bahordan issiqroq, qish esa eng sovuq fasl." },
  ],
  quiz: [
    { k: "listen", say: "Who is the fastest in your class?", opts: ["Who is faster in your class?", "Who is the fastest in your class?", "Who is fast in your class?"], a: 1 },
    { k: "listen", say: "This exercise is more difficult.", opts: ["This exercise is more difficult.", "This exercise is most difficult.", "This exercise isn't difficult."], a: 0 },
    { k: "fill", q: "My father is ___ than my uncle. (strong)", a: ["stronger"] },
    { k: "fill", q: "This is the ___ room in our house. (big)", a: ["biggest"] },
    { k: "fill", q: "Family is ___ than money. (important)", a: ["more important"] },
    { k: "fill", q: "My English is ___ now than last year. (good)", a: ["better"] },
    { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["She is more taller than me.", "She is taller that me.", "She is taller than me.", "She is the taller than me."], a: 2 },
    { k: "choice", q: "It rained all day. It was the ___ day of my holiday.", opts: ["worse", "baddest", "most bad", "worst"], a: 3 },
    { k: "translate", uz: "Bu eng qiziqarli film.", a: ["This is the most interesting film", "It's the most interesting film", "It is the most interesting film", "This is the most interesting movie", "That is the most interesting film", "That's the most interesting film", "It's the most interesting movie", "It is the most interesting movie"] },
    { k: "translate", uz: "Poyezd avtobusdan tezroq.", a: ["The train is faster than the bus", "A train is faster than a bus", "Trains are faster than buses", "The train is faster than a bus"] },
    { k: "order", uz: "Iyul yilning eng issiq oyi.", words: ["July", "is", "the", "hottest", "month", "of", "the", "year"], extra: ["most", "hoter"] },
    { k: "tf", q: "**easy → easier → the easiest**", a: true },
  ],
  summary: [
    "Qisqa sifatlar: **-er than** / **the -est** — *bigger than, the biggest; easier, the easiest*.",
    "Uzun sifatlar: **more … than** / **the most …** — *more difficult, the most interesting*.",
    "Istisnolar: **good – better – best, bad – worse – worst, far – further – furthest**.",
    "**more** va **-er** birga kelmaydi (*more bigger* ❌); orttirma darajada **the** shart.",
    "🎉 Tabriklaymiz — **Beginner** kursini tugatdingiz! Endi siz o'tmish, hozir va kelajak haqida inglizcha gapira olasiz.",
  ],
  homework: "Oilangiz a'zolarini solishtiring: 6 ta gap yozing (*My father is taller than… The youngest is…*), kamida bittasida *better* yoki *the best* bo'lsin. Beginner kursini tugatdingiz — barakalla! Endi har kuni 10 daqiqa inglizcha gapirishni odat qiling va keyingi bosqichga (A1) o'ting.",
};

export default lesson;
