import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u14-l1",
  title: "Comparatives",
  titleUz: "Qiyosiy daraja: -er va more",
  goal: "Ikki narsani solishtirishni o'rganasiz: qisqa sifatlarga **-er** (*taller, bigger, easier*), uzun sifatlarga **more** (*more expensive*) qo'shasiz, **good → better**, **bad → worse** kabi noto'g'ri shakllarni bilasiz va **than** bilan to'g'ri gap tuzasiz. *more bigger* kabi xatolardan qochasiz.",
  slides: [
    {
      title: "Qiyosiy daraja nima?",
      blocks: [
        { t: "p", md: "Ikki narsa yoki ikki odamni solishtirganda sifatning **qiyosiy darajasi** (comparative) ishlatiladi. O'zbekchada buni **-roq** qo'shimchasi bilan aytamiz: *katta → kattaroq*, *arzon → arzonroq*. Inglizchada ikki yo'l bor:" },
        {
          t: "table", head: ["Sifat", "Qoida", "Qiyosiy daraja"], speak: [2],
          rows: [
            ["Qisqa (1 bo'g'in): tall, old, fast", "+ **-er**", "taller, older, faster"],
            ["Uzun (2+ bo'g'in): expensive, interesting", "**more** + sifat", "more expensive, more interesting"],
          ],
        },
        {
          t: "examples", items: [
            { en: "Laylo is taller than Aziz.", uz: "Laylo Azizdan balandroq." },
            { en: "Kamol is older than Dilnoza.", uz: "Kamol Dilnozadan kattaroq (yoshi bo'yicha)." },
            { en: "This phone is more expensive than that one.", uz: "Bu telefon anavisidan qimmatroq." },
          ],
        },
        { t: "tip", tone: "info", md: "**than** — \"...dan\" (solishtirish uchun). O'zbekchada \"Azizdan\" deymiz, inglizchada esa **than Aziz**. Bu so'zni unutmang!" },
        { t: "check", ex: { k: "choice", q: "\"Palov salatdan arzonroq.\" Qaysi gap to'g'ri?", opts: ["Plov is cheaper than salad.", "Plov is more cheap than salad.", "Plov is cheap than salad.", "Plov is cheaper salad."], a: 0, why: "*cheap* — bir bo'g'inli → **cheaper** + **than**." } },
      ],
    },
    {
      title: "Qisqa sifatlar: imlo qoidalari",
      blocks: [
        { t: "p", md: "Qisqa sifatlarga **-er** qo'shganda imloga e'tibor bering:" },
        {
          t: "table", head: ["Qoida", "Sifat", "Qiyosiy"], speak: [2],
          rows: [
            ["Oddiy: + er", "tall, old, small, fast, cheap", "taller, older, smaller, faster, cheaper"],
            ["-e bilan tugasa: + r", "nice, large, safe", "nicer, larger, safer"],
            ["Undosh + unli + undosh: oxirgi undosh ikkilanadi", "big, hot, thin, sad", "bigger, hotter, thinner, sadder"],
            ["Undosh + y → -ier", "easy, happy, noisy, busy", "easier, happier, noisier, busier"],
          ],
        },
        { t: "tip", tone: "info", md: "Ikki bo'g'inli **-y** bilan tugaydigan sifatlar (*easy, happy, noisy, busy, healthy*) ham **-ier** oladi: *The metro is **busier** than the bus.*" },
        { t: "check", ex: { k: "fill", q: "Summer in Bukhara is ___ than spring. (hot)", a: ["hotter"], why: "*hot* — undosh + unli + undosh → **hotter** (t ikkilanadi)." } },
        { t: "check", ex: { k: "fill", q: "This exercise is ___ than the last one. (easy)", a: ["easier"], why: "*easy* → y tushib, **-ier**: *easier*." } },
      ],
    },
    {
      title: "Uzun sifatlar: more + sifat",
      blocks: [
        { t: "p", md: "Ikki yoki undan ortiq bo'g'inli sifatlar (**-y** bilan tugaydiganlardan tashqari) **more** bilan qiyoslanadi. Sifatning o'zi o'zgarmaydi:" },
        {
          t: "table", head: ["Sifat", "Qiyosiy"], speak: [1],
          rows: [
            ["expensive", "more expensive"],
            ["comfortable", "more comfortable"],
            ["popular", "more popular"],
            ["dangerous", "more dangerous"],
            ["difficult", "more difficult"],
            ["modern", "more modern"],
          ],
        },
        {
          t: "examples", items: [
            { en: "Taxis are more expensive than buses.", uz: "Taksilar avtobusdan qimmatroq." },
            { en: "The new chair is more comfortable than the old one.", uz: "Yangi stul eskisidan qulayroq." },
            { en: "English is more difficult than I thought.", uz: "Ingliz tili men o'ylagandan qiyinroq." },
          ],
        },
        { t: "tip", tone: "info", md: "Ba'zi ikki bo'g'inli sifatlar (*quiet, clever, simple, narrow*) ikkala shaklni ham oladi: *quieter / more quiet*. Shubha qilsangiz, ko'proq ishlatiladigan shaklni tanlang: *quieter*." },
        { t: "check", ex: { k: "choice", q: "The metro is ___ than the bus in Tashkent.", opts: ["more fast", "faster", "more faster", "fastest"], a: 1, why: "*fast* — qisqa sifat → **faster**." } },
      ],
    },
    {
      title: "Noto'g'ri shakllar va tipik xatolar",
      blocks: [
        { t: "p", md: "Bir necha sifatning qiyosiy darajasi qoidaga bo'ysunmaydi. Ularni yod oling:" },
        {
          t: "table", head: ["Sifat", "Qiyosiy", "Misol"], speak: [1, 2],
          rows: [
            ["good", "**better**", "This cafe is better than that one."],
            ["bad", "**worse**", "The weather today is worse than yesterday."],
            ["far", "**farther / further**", "Samarkand is further from here than Tashkent."],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["This bag is bigger than that one.", "Her English is better than mine.", "Today is worse than yesterday.", "Plov is more popular than soup."] },
          bad: { title: "Xato", items: ["This bag is more bigger than that one.", "Her English is more better than mine.", "Today is more bad than yesterday.", "Plov is popularer than soup."] },
        },
        { t: "tip", tone: "warn", md: "**Ikki marta qiyoslamang!** *more bigger*, *more better* — xato. Yoki **-er**, yoki **more** — faqat bittasi." },
        { t: "tip", tone: "warn", md: "**than** (-dan) bilan **then** (keyin) ni adashtirmang. *He is taller **than** me.* — *First wash your hands, **then** eat.*" },
        { t: "check", ex: { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["My Russian is more better than my English.", "My Russian is better than my English.", "My Russian is gooder than my English.", "My Russian is better then my English."], a: 1, why: "*good* → **better**; solishtirishda **than**, *then* emas." } },
      ],
    },
    {
      title: "Solishtirishni kuchaytirish va yumshatish",
      blocks: [
        { t: "p", md: "Farq katta yoki kichik ekanini **much**, **a lot**, **a bit**, **a little**, **slightly** so'zlari bilan ko'rsatamiz. Ular qiyosiy daraja **oldidan** keladi:" },
        {
          t: "examples", items: [
            { en: "Samarkand is much older than my town.", uz: "Samarqand mening shahrimdan ancha qadimiyroq." },
            { en: "This bag is a lot heavier than mine.", uz: "Bu sumka meniknidan ancha og'irroq." },
            { en: "The blue shirt is a bit cheaper.", uz: "Ko'k ko'ylak biroz arzonroq." },
            { en: "I feel a little better today.", uz: "Bugun o'zimni sal yaxshiroq his qilyapman." },
          ],
        },
        { t: "tip", tone: "warn", md: "**very** qiyosiy daraja bilan ishlatilmaydi: *very bigger* — xato. To'g'risi: **much bigger**." },
        { t: "p", md: "Ketma-ket o'sishni ham aytish mumkin: **...-er and ...-er** — *It's getting colder and colder.* (Havo borgan sari sovuq bo'lyapti.)" },
        { t: "check", ex: { k: "choice", q: "\"Bu uy anavisidan ancha kattaroq.\"", opts: ["This house is very bigger than that one.", "This house is much bigger than that one.", "This house is much more bigger than that one.", "This house is much big than that one."], a: 1, why: "**much** + qiyosiy daraja: *much bigger*." } },
      ],
    },
    {
      title: "O'qing: Qaysi telefon yaxshiroq?",
      blocks: [
        {
          t: "text", title: "Which phone is better?",
          en: "Aziz wants a new phone. He is in a shop in Tashkent with his sister Laylo. There are two phones. The black phone is cheaper, but the white phone is newer and faster. The black phone is heavier than the white one, and its camera is worse. Laylo says, \"The white phone is more expensive, but it is a better phone. Its battery is longer, too.\" Aziz thinks for a minute. \"I don't have much money,\" he says. \"The black phone is a bit cheaper, and my old phone was even slower!\" In the end, he buys the white one. \"It is more expensive than I wanted,\" he laughs, \"but it is also much better.\"",
          uz: "Aziz yangi telefon xohlaydi. U opasi Laylo bilan Toshkentdagi do'konda. Ikkita telefon bor. Qora telefon arzonroq, lekin oq telefon yangiroq va tezroq. Qora telefon oqidan og'irroq, kamerasi esa yomonroq. Laylo aytadi: \"Oq telefon qimmatroq, lekin u yaxshiroq telefon. Batareyasi ham uzoqroq ishlaydi.\" Aziz bir daqiqa o'ylaydi. \"Pulim ko'p emas,\" deydi u. \"Qora telefon biroz arzonroq, eski telefonim esa undan ham sekinroq edi!\" Oxirida u oq telefonni sotib oladi. \"U men xohlagandan qimmatroq,\" deydi u kulib, \"lekin ancha yaxshiroq.\"",
        },
        { t: "check", ex: { k: "tf", q: "The black phone is heavier than the white phone.", a: true, why: "*The black phone is heavier than the white one.*" } },
        { t: "check", ex: { k: "choice", q: "Why does Aziz buy the white phone?", opts: ["It is cheaper.", "It is a much better phone.", "Laylo pays for it.", "It is heavier."], a: 1, why: "*It is also much better.*" } },
      ],
    },
    {
      title: "Dialog: do'kon va bozor",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Dilnoza", en: "Which bag do you prefer, the red one or the green one?", uz: "Qaysi sumkani yoqtirasan, qizilnimi yoki yashilnimi?" },
            { who: "Kamol", en: "The green one is bigger, but the red one is more beautiful.", uz: "Yashili kattaroq, lekin qizili chiroyliroq." },
            { who: "Dilnoza", en: "Is the red one more expensive?", uz: "Qizili qimmatroqmi?" },
            { who: "Kamol", en: "Yes, it is a bit more expensive, but the quality is better.", uz: "Ha, biroz qimmatroq, lekin sifati yaxshiroq." },
            { who: "Dilnoza", en: "OK, I'll take the red one. Is the market cheaper than this shop?", uz: "Mayli, qizilini olaman. Bozor bu do'kondan arzonroqmi?" },
            { who: "Kamol", en: "Usually, yes, but the shop is more comfortable. The market is noisier and more crowded.", uz: "Odatda ha, lekin do'kon qulayroq. Bozor shovqinliroq va gavjumroq." },
          ],
        },
        { t: "check", ex: { k: "tf", q: "The red bag is bigger than the green bag.", a: false, why: "*The green one is bigger*; qizili esa chiroyliroq." } },
      ],
    },
  ],
  words: [
    { en: "expensive", uz: "qimmat", ipa: "ɪkˈspensɪv", pos: "adj", ex: "Taxis are more expensive than buses.", exUz: "Taksilar avtobusdan qimmatroq." },
    { en: "cheap", uz: "arzon", ipa: "tʃiːp", pos: "adj", ex: "Bread is cheaper at the market.", exUz: "Non bozorda arzonroq." },
    { en: "comfortable", uz: "qulay", ipa: "ˈkʌmftəbl", pos: "adj", ex: "This sofa is very comfortable.", exUz: "Bu divan juda qulay." },
    { en: "popular", uz: "mashhur, ommabop", ipa: "ˈpɒpjələ", pos: "adj", ex: "Plov is popular in Uzbekistan.", exUz: "Palov O'zbekistonda ommabop." },
    { en: "dangerous", uz: "xavfli", ipa: "ˈdeɪndʒərəs", pos: "adj", ex: "Fast driving is dangerous.", exUz: "Tez haydash xavfli." },
    { en: "noisy", uz: "shovqinli", ipa: "ˈnɔɪzi", pos: "adj", ex: "The market is noisier than the park.", exUz: "Bozor bog'dan shovqinliroq." },
    { en: "modern", uz: "zamonaviy", ipa: "ˈmɒdn", pos: "adj", ex: "Their flat is very modern.", exUz: "Ularning kvartirasi juda zamonaviy." },
    { en: "healthy", uz: "sog'lom; foydali", ipa: "ˈhelθi", pos: "adj", ex: "Fruit is healthier than sweets.", exUz: "Meva shirinlikdan foydaliroq." },
    { en: "difficult", uz: "qiyin", ipa: "ˈdɪfɪkəlt", pos: "adj", ex: "Grammar is difficult for me.", exUz: "Grammatika men uchun qiyin." },
    { en: "heavy", uz: "og'ir", ipa: "ˈhevi", pos: "adj", ex: "My bag is heavier than yours.", exUz: "Mening sumkam seniknidan og'irroq." },
  ],
  practice: [
    { k: "match", pairs: [["tall", "taller"], ["big", "bigger"], ["easy", "easier"], ["good", "better"], ["bad", "worse"]] },
    { k: "match", pairs: [["expensive", "qimmat"], ["cheap", "arzon"], ["dangerous", "xavfli"], ["noisy", "shovqinli"], ["heavy", "og'ir"]] },
    { k: "listen", say: "My brother is taller than me.", opts: ["My brother is taller than me.", "My brother is smaller than me.", "My brother is shorter than me."], a: 0 },
    { k: "listen", say: "This phone is more expensive.", opts: ["This phone is more expensive.", "This phone is less expensive.", "This phone is most expensive."], a: 0 },
    { k: "fill", q: "Samarkand is ___ than my village. (old)", a: ["older"], why: "*old* → **older**." },
    { k: "fill", q: "Tea is ___ than coffee for me. (healthy)", a: ["healthier"], why: "*healthy* → y tushib **-ier**: *healthier*. (*more healthy* ham uchraydi, lekin *healthier* yaxshiroq.)" },
    { k: "fill", q: "My new flat is ___ than my old one. (big)", a: ["bigger"], why: "*big* → **bigger** (g ikkilanadi)." },
    { k: "fill", q: "The metro is ___ than buses in Tashkent. (comfortable)", a: ["more comfortable"], why: "Uzun sifat → **more comfortable**." },
    { k: "choice", q: "Her English is ___ than mine.", opts: ["gooder", "more good", "better", "more better"], a: 2, why: "*good* → **better**." },
    { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["He is more taller than his father.", "He is taller than his father.", "He is taller then his father.", "He is tall than his father."], a: 1, why: "**-er + than**: *taller than*." },
    { k: "tf", q: "**more interesting** — to'g'ri qiyosiy shakl.", a: true, why: "*interesting* — uzun sifat → **more interesting**." },
    { k: "tf", q: "**Today is more bad than yesterday.** — to'g'ri gap.", a: false, why: "*bad* → **worse**: *Today is worse than yesterday.*" },
    { k: "order", uz: "Bu savol anavisidan qiyinroq.", words: ["This", "question", "is", "more", "difficult", "than", "that", "one."], extra: ["most", "difficulter"] },
    { k: "translate", uz: "Laylo Azizdan balandroq.", a: ["Laylo is taller than Aziz.", "Laylo's taller than Aziz."] },
    { k: "speak", say: "The metro is faster and cheaper than the bus.", uz: "Metro avtobusdan tezroq va arzonroq." },
  ],
  quiz: [
    { k: "choice", q: "**safe** ning qiyosiy shakli:", opts: ["safeer", "safer", "more safe", "safier"], a: 1, why: "-e bilan tugasa, faqat **-r**: *safer*." },
    { k: "choice", q: "**thin** ning qiyosiy shakli:", opts: ["thiner", "thinner", "more thin", "thinier"], a: 1, why: "Undosh + unli + undosh → n ikkilanadi: **thinner**." },
    { k: "fill", q: "Today is ___ than yesterday. (bad)", a: ["worse"], why: "*bad* → **worse**." },
    { k: "fill", q: "A taxi is more expensive ___ a bus.", a: ["than"], why: "Solishtirishda doim **than**." },
    { k: "choice", q: "The new bridge is ___ than the old one.", opts: ["more safe", "more safer", "safer", "safest"], a: 2, why: "*safe* → **safer**." },
    { k: "choice", q: "Quyidagilardan qaysi gap xato?", opts: ["Life in a big city is busier.", "Cars are more dangerous than bikes.", "My bag is more heavier than yours.", "She is happier than before."], a: 2, why: "*more heavier* — ikki marta qiyoslash. To'g'risi: **heavier**." },
    { k: "listen", say: "Fruit is healthier than sweets.", opts: ["Fruit is healthier than sweets.", "Fruit is healthy as sweets.", "Fruit is more healthy sweets."], a: 0 },
    { k: "tf", q: "**She is much more beautiful than her sister.** — grammatik jihatdan to'g'ri.", a: true, why: "*much* + **more beautiful** — to'g'ri." },
    { k: "order", uz: "Metro avtobusdan tezroq.", words: ["The", "metro", "is", "faster", "than", "the", "bus."], extra: ["more", "then"] },
    { k: "translate", uz: "Mening inglizcham seniknidan yomonroq.", a: ["My English is worse than yours.", "My English is worse than your English."] },
  ],
  summary: [
    "Qisqa sifat + **-er** (*taller, cheaper*); -e bilan tugasa **-r** (*nicer*); *big* → *bigger*; *easy* → *easier*.",
    "Uzun sifat: **more** + sifat (*more expensive, more comfortable*).",
    "Noto'g'ri shakllar: **good → better, bad → worse, far → further**.",
    "Solishtirishda **than** ishlatiladi: *taller **than** me*. **then** — boshqa so'z (keyin).",
    "Ikki marta qiyoslamang: ❌ *more bigger*. Kuchaytirish uchun: **much / a lot / a bit** + qiyosiy (❌ *very bigger*).",
  ],
  homework: "Oilangizdagi ikki kishi yoki ikki shahar (masalan, Toshkent va Samarqand) haqida 8 ta gap yozing. Kamida 3 tasida **-er**, 3 tasida **more**, 1 tasida **better / worse** bo'lsin va hammasida **than** ishlating. Keyin gaplarni ovoz chiqarib o'qing.",
};

export default lesson;
