import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u14-l2",
  title: "Superlatives",
  titleUz: "Orttirma daraja: the -est, the most",
  goal: "Uch va undan ortiq narsa ichidan **eng** ... ekanini aytishni o'rganasiz: **the tallest, the biggest, the most beautiful**. **the best, the worst** kabi noto'g'ri shakllarni, **one of the + -est + ko'plik** qolipini va **in / of** ning farqini bilib olasiz. *the* ni tushirib qoldirish xatosidan qochasiz.",
  slides: [
    {
      title: "Orttirma daraja: \"eng ...\"",
      blocks: [
        { t: "p", md: "Qiyosiy daraja **ikki** narsani solishtiradi (*taller than*). Orttirma daraja (**superlative**) esa **uch va undan ortiq** narsa ichidan eng yuqori darajani ko'rsatadi: *eng baland, eng arzon, eng qiziqarli*. O'zbekchada **eng** so'zi bor, inglizchada esa shakl o'zgaradi:" },
        {
          t: "table", head: ["Sifat", "Qoida", "Orttirma"], speak: [2],
          rows: [
            ["Qisqa: tall, old, cheap", "**the** + sifat + **-est**", "the tallest, the oldest, the cheapest"],
            ["Uzun: expensive, interesting", "**the most** + sifat", "the most expensive, the most interesting"],
          ],
        },
        {
          t: "examples", items: [
            { en: "Aziz is the tallest boy in the class.", uz: "Aziz sinfdagi eng baland bo'yli bola." },
            { en: "This is the cheapest cafe in the street.", uz: "Bu ko'chadagi eng arzon kafe." },
            { en: "It's the most interesting film of the year.", uz: "Bu yilning eng qiziqarli filmi." },
          ],
        },
        { t: "tip", tone: "warn", md: "Orttirma darajadan oldin doim **the** keladi: *the tallest*. **the** siz — xato: ❌ *He is tallest boy.*" },
        { t: "check", ex: { k: "choice", q: "\"Laylo guruhdagi eng yosh qiz.\"", opts: ["Laylo is youngest girl in the group.", "Laylo is the youngest girl in the group.", "Laylo is the most young girl in the group.", "Laylo is the younger girl in the group."], a: 1, why: "*young* — qisqa sifat → **the youngest**." } },
      ],
    },
    {
      title: "Imlo qoidalari va uzun sifatlar",
      blocks: [
        { t: "p", md: "Qoidalar qiyosiy darajadagi kabi, faqat **-er** o'rniga **-est** bo'ladi:" },
        {
          t: "table", head: ["Qoida", "Sifat", "Orttirma"], speak: [2],
          rows: [
            ["Oddiy: + est", "long, small, fast", "the longest, the smallest, the fastest"],
            ["-e bilan tugasa: + st", "nice, large, safe", "the nicest, the largest, the safest"],
            ["Undosh + unli + undosh: ikkilanadi", "big, hot, thin", "the biggest, the hottest, the thinnest"],
            ["Undosh + y → -iest", "easy, happy, busy", "the easiest, the happiest, the busiest"],
            ["Uzun sifatlar: the most", "famous, delicious, comfortable", "the most famous, the most delicious, the most comfortable"],
          ],
        },
        { t: "tip", tone: "warn", md: "Uzun sifatga **-est** qo'shmang: ❌ *the expensivest*. Qisqa sifatga **most** qo'shmang: ❌ *the most big*, ✅ *the biggest*." },
        { t: "check", ex: { k: "fill", q: "July is ___ month in Tashkent. (hot)", a: ["the hottest"], why: "*hot* → **the hottest** (t ikkilanadi)." } },
        { t: "check", ex: { k: "fill", q: "This is ___ bag in the shop. (expensive)", a: ["the most expensive"], why: "Uzun sifat → **the most expensive**." } },
      ],
    },
    {
      title: "Noto'g'ri shakllar",
      blocks: [
        { t: "p", md: "Qiyosiy darajadagi kabi, ba'zi sifatlar o'zgacha shakl oladi:" },
        {
          t: "table", head: ["Sifat", "Qiyosiy", "Orttirma"], speak: [0, 1, 2],
          rows: [
            ["good", "better", "**the best**"],
            ["bad", "worse", "**the worst**"],
            ["far", "farther / further", "**the farthest / the furthest**"],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["He is the best player in our team.", "That was the worst day of my life.", "This is the most delicious plov."], },
          bad: { title: "Xato", items: ["He is the goodest player in our team.", "That was the baddest day of my life.", "This is the deliciousest plov."] },
        },
        { t: "tip", tone: "info", md: "**the best** — eng yaxshi. **the worst** — eng yomon. Bu ikkalasi kundalik nutqda juda ko'p ishlatiladi: *the best friend*, *the best way*, *the worst thing*." },
        { t: "check", ex: { k: "choice", q: "\"Bu mening hayotimdagi eng yomon film edi.\"", opts: ["It was the baddest film of my life.", "It was the worst film of my life.", "It was the most bad film of my life.", "It was worst film of my life."], a: 1, why: "*bad* → *worse* → **the worst**; oldida **the**." } },
      ],
    },
    {
      title: "in yoki of? One of the ...",
      blocks: [
        { t: "p", md: "Orttirma darajadan keyin guruh yoki joy nomi **in** bilan, ko'plik so'z yoki vaqt **of** bilan keladi:" },
        {
          t: "table", head: ["Qo'shimcha", "Qachon", "Misol"], speak: [2],
          rows: [
            ["**in** + joy / guruh", "city, country, class, team, world", "the biggest city **in** Uzbekistan"],
            ["**of** + ko'plik / vaqt", "all, the three, the year, my life", "the best day **of** my life"],
          ],
        },
        { t: "p", md: "**one of the + orttirma + ko'plik ot** — \"eng ... lardan biri\". Ot **ko'plikda** bo'ladi, fe'l esa **birlikda** (*one* ga moslashadi):" },
        {
          t: "examples", items: [
            { en: "Samarkand is one of the oldest cities in Central Asia.", uz: "Samarqand Markaziy Osiyodagi eng qadimiy shaharlardan biri." },
            { en: "Messi is one of the best players in the world.", uz: "Messi dunyodagi eng yaxshi futbolchilardan biri." },
            { en: "This is one of the most beautiful parks I know.", uz: "Bu men bilgan eng chiroyli bog'lardan biri." },
          ],
        },
        { t: "tip", tone: "warn", md: "❌ *one of the oldest city* — ot ko'plikda bo'lishi shart: ✅ *one of the oldest **cities***." },
        { t: "check", ex: { k: "choice", q: "Bukhara is one of the most beautiful ___ in Uzbekistan.", opts: ["city", "cities", "citys", "the city"], a: 1, why: "*one of the ...* dan keyin ot **ko'plikda**: *cities*." } },
        { t: "check", ex: { k: "choice", q: "She is the best student ___ our class.", opts: ["of", "in", "at", "from"], a: 1, why: "Guruh (class) bilan **in**." } },
      ],
    },
    {
      title: "Orttirma daraja va Present Perfect",
      blocks: [
        { t: "p", md: "Orttirma daraja ko'pincha **tajriba** haqida gapirganda **Present Perfect** bilan birga keladi: *It's the best ... I've ever ...*" },
        {
          t: "examples", items: [
            { en: "This is the best plov I've ever eaten.", uz: "Bu men hech yegan eng mazali palov." },
            { en: "It's the most interesting book I've ever read.", uz: "Bu men o'qigan eng qiziqarli kitob." },
            { en: "That was the worst trip I've ever had.", uz: "Bu men boshdan kechirgan eng yomon sayohat edi." },
          ],
        },
        { t: "tip", tone: "info", md: "Gap oxirida **ever** (hech) ishlatiladi. Bu o'zbekcha \"hayotimda yeb ko'rgan eng mazali ...\" ma'nosiga mos keladi." },
        { t: "check", ex: { k: "fill", q: "This is the most beautiful place I've ___ seen.", a: ["ever"], why: "*the + orttirma + ... I've **ever** + V3*." } },
      ],
    },
    {
      title: "O'qing: Chaixona tanlovi",
      blocks: [
        {
          t: "text", title: "The best chaikhana in town",
          en: "Dilnoza and her friends are looking for a chaikhana in Samarkand. There are three places on the same street. The first one is the cheapest, but it is also the noisiest. The second one is the most famous. People say it has the best plov in the city, but it is the most crowded, too. The third one is the quietest and it has the most comfortable chairs. \"This is the nicest place I've ever seen,\" says Dilnoza. They sit under a big tree and order tea and samsa. The waiter is one of the friendliest people they have met. \"This is the best afternoon of the week!\" says Dilnoza.",
          uz: "Dilnoza va uning do'stlari Samarqandda choyxona qidirishyapti. Bir ko'chada uchta joy bor. Birinchisi eng arzon, lekin eng shovqinli ham. Ikkinchisi eng mashhuri. Odamlar aytishicha, shaharning eng yaxshi palovi o'sha yerda, lekin u eng gavjum ham. Uchinchisi eng sokin va unda eng qulay stullar bor. \"Bu men ko'rgan eng yoqimli joy,\" deydi Dilnoza. Ular katta daraxt tagiga o'tirib, choy va somsa buyurtma qilishadi. Ofitsiant ular uchrashgan eng xushmuomala odamlardan biri. \"Bu haftaning eng yaxshi tushdan keyingi vaqti!\" deydi Dilnoza.",
        },
        { t: "check", ex: { k: "choice", q: "Which chaikhana is the quietest?", opts: ["The first one.", "The second one.", "The third one.", "All of them."], a: 2, why: "*The third one is the quietest.*" } },
        { t: "check", ex: { k: "tf", q: "The cheapest chaikhana is also the noisiest.", a: true, why: "*The first one is the cheapest, but it is also the noisiest.*" } },
      ],
    },
    {
      title: "Dialog: viktorina",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Kamol", en: "Which is the biggest animal in the world?", uz: "Dunyodagi eng katta hayvon qaysi?" },
            { who: "Laylo", en: "I'm not sure. Is it the blue whale?", uz: "Ishonchim komil emas. Ko'k kit bo'lsa kerak?" },
            { who: "Kamol", en: "Good guess! Now an easy one. What's the biggest city in Uzbekistan?", uz: "Yaxshi taxmin! Endi oson savol. O'zbekistondagi eng katta shahar qaysi?" },
            { who: "Laylo", en: "That's easy. It's Tashkent! And Samarkand is one of the oldest cities in Central Asia.", uz: "Bu oson. Toshkent! Samarqand esa Markaziy Osiyodagi eng qadimiy shaharlardan biri." },
            { who: "Kamol", en: "Correct again! You're the best player in our group.", uz: "Yana to'g'ri! Siz guruhimizdagi eng yaxshi ishtirokchisiz." },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Laylo thinks the blue whale is the biggest animal.", a: true, why: "*Is it the blue whale?* — u shunday taxmin qiladi." } },
      ],
    },
  ],
  words: [
    { en: "delicious", uz: "mazali", ipa: "dɪˈlɪʃəs", pos: "adj", ex: "This is the most delicious cake.", exUz: "Bu eng mazali tort." },
    { en: "wonderful", uz: "ajoyib", ipa: "ˈwʌndəfl", pos: "adj", ex: "We had a wonderful holiday.", exUz: "Bizda ajoyib dam olish bo'ldi." },
    { en: "terrible", uz: "dahshatli, juda yomon", ipa: "ˈterəbl", pos: "adj", ex: "The weather was terrible.", exUz: "Ob-havo juda yomon edi." },
    { en: "ancient", uz: "qadimiy", ipa: "ˈeɪnʃənt", pos: "adj", ex: "Samarkand is an ancient city.", exUz: "Samarqand qadimiy shahar." },
    { en: "famous", uz: "mashhur", ipa: "ˈfeɪməs", pos: "adj", ex: "Bukhara is famous for its old buildings.", exUz: "Buxoro qadimiy binolari bilan mashhur." },
    { en: "huge", uz: "ulkan", ipa: "hjuːdʒ", pos: "adj", ex: "They have a huge garden.", exUz: "Ularning ulkan bog'i bor." },
    { en: "tiny", uz: "juda kichkina", ipa: "ˈtaɪni", pos: "adj", ex: "My room is tiny.", exUz: "Xonam juda kichkina." },
    { en: "exciting", uz: "hayajonli, qiziqarli", ipa: "ɪkˈsaɪtɪŋ", pos: "adj", ex: "It was an exciting match.", exUz: "Bu hayajonli o'yin edi." },
    { en: "boring", uz: "zerikarli", ipa: "ˈbɔːrɪŋ", pos: "adj", ex: "The lesson was boring.", exUz: "Dars zerikarli edi." },
    { en: "useful", uz: "foydali", ipa: "ˈjuːsfl", pos: "adj", ex: "This app is very useful.", exUz: "Bu ilova juda foydali." },
  ],
  practice: [
    { k: "match", pairs: [["tall", "the tallest"], ["big", "the biggest"], ["easy", "the easiest"], ["good", "the best"], ["bad", "the worst"]] },
    { k: "match", pairs: [["delicious", "mazali"], ["ancient", "qadimiy"], ["huge", "ulkan"], ["tiny", "juda kichkina"], ["boring", "zerikarli"]] },
    { k: "listen", say: "She is the best student in the class.", opts: ["She is the best student in the class.", "She is a better student in the class.", "She is the worst student in the class."], a: 0 },
    { k: "listen", say: "It is the most famous street in Bukhara.", opts: ["It is the most famous street in Bukhara.", "It is more famous street in Bukhara.", "It is the famous street in Bukhara."], a: 0 },
    { k: "fill", q: "Tashkent is the ___ city in Uzbekistan. (big)", a: ["biggest"], why: "*big* → **biggest**." },
    { k: "fill", q: "This is the ___ exercise in the book. (easy)", a: ["easiest"], why: "*easy* → **easiest**." },
    { k: "fill", q: "It was the ___ day of my life! (bad)", a: ["worst"], why: "*bad → worse → **worst***." },
    { k: "fill", q: "This is the ___ interesting film I've ever seen.", a: ["most"], why: "Uzun sifat → *the **most** interesting*." },
    { k: "choice", q: "Samarkand is one of the ___ cities in Central Asia.", opts: ["oldest", "most old", "older", "oldest city"], a: 0, why: "*one of the oldest cities* — oldin **-est**, keyin ko'plik ot." },
    { k: "choice", q: "He is the fastest runner ___ our school.", opts: ["of", "in", "than", "at"], a: 1, why: "Guruh / joy bilan **in**." },
    { k: "tf", q: "**the most big** — to'g'ri shakl.", a: false, why: "*big* — qisqa sifat → **the biggest**." },
    { k: "tf", q: "**She is the youngest in the family.** — to'g'ri gap.", a: true, why: "*young* → **the youngest** + *in the family*." },
    { k: "order", uz: "Bu men yegan eng mazali palov.", words: ["This", "is", "the", "most", "delicious", "plov", "I've", "ever", "eaten."], extra: ["more", "best"] },
    { k: "translate", uz: "Aziz sinfdagi eng baland bo'yli bola.", a: ["Aziz is the tallest boy in the class.", "Aziz is the tallest boy in our class.", "Aziz is the tallest in the class."] },
    { k: "speak", say: "Samarkand is one of the oldest cities in Central Asia.", uz: "Samarqand Markaziy Osiyodagi eng qadimiy shaharlardan biri." },
  ],
  quiz: [
    { k: "choice", q: "**nice** ning orttirma shakli:", opts: ["the nicest", "the most nice", "the niceest", "the nicer"], a: 0, why: "-e bilan tugasa: **+ st** → *the nicest*." },
    { k: "choice", q: "**good** ning orttirma shakli:", opts: ["the goodest", "the most good", "the best", "the better"], a: 2 },
    { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["Aziz is tallest boy in the class.", "Aziz is the taller boy in the class.", "Aziz is the tallest boy in the class.", "Aziz is the most tall boy in the class."], a: 2, why: "**the** + **-est**." },
    { k: "fill", q: "August is the ___ month of the year. (hot)", a: ["hottest"], why: "*hot* → **hottest**." },
    { k: "fill", q: "It's one of the most beautiful ___ in the world. (park)", a: ["parks"], why: "*one of the ...* dan keyin ko'plik ot." },
    { k: "listen", say: "That was the worst film I've ever seen.", opts: ["That was the worst film I've ever seen.", "That was the best film I've ever seen.", "That was the first film I've ever seen."], a: 0 },
    { k: "tf", q: "**Samarkand is one of the oldest city in Central Asia.** — to'g'ri gap.", a: false, why: "*cities* bo'lishi kerak: one of the oldest **cities**." },
    { k: "order", uz: "Bu mening hayotimdagi eng yaxshi kun.", words: ["This", "is", "the", "best", "day", "of", "my", "life."], extra: ["better", "in"] },
    { k: "translate", uz: "Bu ko'chadagi eng arzon kafe.", a: ["This is the cheapest cafe in the street.", "It is the cheapest cafe in the street.", "It's the cheapest cafe in the street.", "This is the cheapest cafe on the street.", "It's the cheapest cafe on the street.", "This is the cheapest cafe in this street."] },
    { k: "translate", uz: "U eng mashhur futbolchilardan biri.", a: ["He is one of the most famous football players.", "He's one of the most famous football players.", "He is one of the most famous footballers.", "He's one of the most famous footballers."] },
  ],
  summary: [
    "Orttirma daraja uch va undan ortiq narsa ichidan \"eng ...\" ni bildiradi va doim **the** bilan keladi: *the tallest, the most famous*.",
    "Qisqa sifat: **the + -est** (*the biggest, the easiest*). Uzun sifat: **the most + sifat**. ❌ *the most big*, ❌ *the expensivest*.",
    "Noto'g'ri shakllar: **good → the best, bad → the worst, far → the furthest**.",
    "Joy / guruh bilan **in** (*in the world, in my class*), ko'plik / vaqt bilan **of** (*of the year, of my life*).",
    "**one of the + orttirma + ko'plik ot**: *one of the oldest **cities***. **...the best ... I've ever ...** — tajriba haqida.",
  ],
  homework: "O'zingiz haqingizda 8 ta orttirma gap yozing: *The best food I've ever eaten is ... / The most interesting place in my city is ... / One of the nicest people I know is ...* Keyin do'stingizga 5 ta viktorina savoli tuzing (*Which is the longest ...?*) va javob bering.",
};

export default lesson;
