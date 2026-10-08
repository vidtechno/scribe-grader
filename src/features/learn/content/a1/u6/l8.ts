import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u6-l8",
  title: "a / an / the / no article",
  titleUz: "Artikllar: a / an / the yoki artiklsiz",
  goal: "Qachon **a / an**, qachon **the**, qachon **artiklsiz** gapirishni bilasiz: *I saw **a** cat. **The** cat was black. I like cats.* *She's **a** doctor. **The** sun is hot. I go to work by bus.* O'zbek tilida artikl yo'qligi sababli qilinadigan eng ko'p xatolardan qutulasiz.",
  slides: [
    {
      title: "Nega artikl qiyin?",
      blocks: [
        { t: "p", md: "O'zbek tilida artikl **yo'q**: *Men kitob o'qiyapman. Kitob qiziq.* Ingliz tilida esa deyarli har bir birlikdagi sanaladigan ot oldida nimadir turishi kerak: **a / an**, **the**, yoki **my, this…**. Artikl tinglovchiga muhim xabar beradi:" },
        {
          t: "table", head: ["Artikl", "Ma'nosi", "Misol"],
          rows: [
            ["a / an", "bitta, qandaydir (tinglovchi bilmaydi)", "I'm reading a book."],
            ["the", "aniq o'sha (ikkalamiz bilamiz)", "The book is interesting."],
            ["— (artiklsiz)", "umuman, hammasi", "I love books."],
          ],
          speak: [2],
        },
        {
          t: "examples", items: [
            { en: "I've got a cat and a dog. The cat is black and the dog is white.", uz: "Mening mushugim va itim bor. Mushuk qora, it esa oq.", note: "1-marta — **a**, keyin — **the** (endi qaysi ekanini bilasiz)." },
            { en: "There's a café near my house. The café is very popular.", uz: "Uyim yonida kafe bor. U kafe juda mashhur." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "I bought a shirt and a jacket. ___ jacket is blue.", opts: ["A", "The", "—"], a: 1, why: "Ikkinchi marta tilga olindi — endi aniq: **The** jacket." } },
      ],
    },
    {
      title: "a / an: qachon?",
      blocks: [
        { t: "p", md: "**a / an** — faqat **birlikdagi sanaladigan** otlar bilan. **an** — unli **tovush** oldidan (harf emas!): *an apple, an hour*, lekin *a university*." },
        {
          t: "table", head: ["Qachon", "Misol"],
          rows: [
            ["birinchi marta tilga olganda", "I met a nice girl yesterday."],
            ["kasb (birlik)", "She's a doctor. He's an engineer."],
            ["\"bitta\", \"qandaydir\"", "Can I have a glass of water?"],
            ["tasvir: a + sifat + ot", "It's a big city. He's a kind man."],
            ["miqdor: har…", "twice a week, 50 km an hour"],
          ],
          speak: [1],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I'm a student.", "My father is an engineer.", "Tashkent is a big city.", "an hour, a university"] },
          bad: { title: "Xato", items: ["I'm student.", "My father is engineer.", "Tashkent is big city.", "a hour, an university"] },
        },
        { t: "tip", tone: "warn", md: "**I am student** — o'zbek tilida so'zlashuvchilar orasida juda ko'p uchraydigan xato! Kasb birlikda bo'lsa, **a / an** majburiy: *I'm **a** student. She's **a** teacher.* Ko'plikda esa artiklsiz: *We're students.*" },
        { t: "check", ex: { k: "fill", q: "My sister is ___ architect.", a: ["an"], why: "Kasb + unli tovush: **an architect**." } },
      ],
    },
    {
      title: "the: qachon?",
      blocks: [
        {
          t: "table", head: ["Qachon", "Misol"],
          rows: [
            ["ikkinchi marta, ma'lum narsa", "I saw a film. The film was boring."],
            ["yagona narsa", "the sun, the moon, the sky, the world, the internet"],
            ["ikkalamiz bilgan joy/narsa", "Close the door, please. Where's the bathroom?"],
            ["shahardagi umumiy joylar", "the station, the bank, the post office, the city centre"],
            ["eng…, tartib son, yagona", "the biggest, the first, the same, the only"],
            ["cholg'u asboblari", "She plays the piano. He plays the dutar."],
            ["ba'zi davlatlar va daryolar", "the UK, the USA, the Amu Darya, the Aral Sea"],
          ],
          speak: [1],
        },
        {
          t: "examples", items: [
            { en: "The sun is very hot in Termez in July.", uz: "Iyulda Termizda quyosh juda issiq." },
            { en: "Can you open the window, please?", uz: "Derazani ochib yuborasizmi?", note: "Xonadagi aniq deraza — ikkalamiz bilamiz." },
            { en: "Samarkand is one of the oldest cities in the world.", uz: "Samarqand dunyodagi eng qadimiy shaharlardan biri." },
            { en: "We live on the same street.", uz: "Biz bitta ko'chada yashaymiz." },
          ],
        },
        { t: "tip", tone: "info", md: "**the** talaffuzi: undosh oldidan **\"ðə\"** (*the book*), unli tovush oldidan **\"ði:\"** (*the apple, the end*)." },
        { t: "check", ex: { k: "choice", q: "\"Oy bugun juda chiroyli.\"", opts: ["Moon is very beautiful tonight.", "A moon is very beautiful tonight.", "The moon is very beautiful tonight."], a: 2, why: "Yagona narsa — **the moon**." } },
      ],
    },
    {
      title: "Artiklsiz: umumiy gap, ismlar, iboralar",
      blocks: [
        { t: "p", md: "Artikl **qo'yilmaydigan** holatlar ham juda muhim. Ko'pchilik xato aynan shu yerda — ortiqcha **the** qo'yishadi:" },
        {
          t: "table", head: ["Qachon", "To'g'ri ✅", "Xato ❌"],
          rows: [
            ["ko'plik/sanalmaydigan — umuman", "I like cats. Water is important.", "I like the cats. The water is important."],
            ["ismlar, shaharlar, ko'p davlatlar", "Aziz lives in Tashkent, Uzbekistan.", "The Aziz lives in the Tashkent."],
            ["tillar, fanlar, sport", "I study English. We play football.", "I study the English. We play the football."],
            ["ovqatlar", "We have breakfast at 7.", "We have the breakfast at 7."],
            ["kunlar, oylar, bayramlar", "on Monday, in May, at Navruz", "on the Monday, in the May"],
            ["transport: by + ...", "I go to work by bus.", "I go to work by the bus."],
          ],
          speak: [1],
        },
        { t: "p", md: "Yod olinadigan iboralar (artiklsiz): **go to school / work / bed**, **at home / at work / at school**, **go home**." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["Life is beautiful.", "Children love sweets.", "I go to bed at eleven.", "She's at work."] },
          bad: { title: "Xato", items: ["The life is beautiful.", "The children love the sweets.", "I go to the bed at eleven.", "She's at the work."] },
        },
        { t: "tip", tone: "warn", md: "Umuman gapirganda — **artiklsiz**: *I love **music**.* Aniq narsa haqida — **the**: *I love **the music** in this film.* Farqini sezing!" },
        { t: "check", ex: { k: "choice", q: "\"Men futbol o'ynashni yaxshi ko'raman.\"", opts: ["I love playing the football.", "I love playing football.", "I love playing a football.", "I love the playing football."], a: 1, why: "Sport — **artiklsiz**." } },
      ],
    },
    {
      title: "Dialog: Toshkentdagi birinchi kun",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Anna", en: "Excuse me, is there a good restaurant near the hotel?", uz: "Kechirasiz, mehmonxona yonida yaxshi restoran bormi?" },
            { who: "Receptionist", en: "Yes, there's a restaurant opposite the hotel and a café on the corner.", uz: "Ha, mehmonxona qarshisida restoran, burchakda esa kafe bor." },
            { who: "Anna", en: "What's the restaurant like?", uz: "Restoran qanaqa?" },
            { who: "Receptionist", en: "It's very good. The plov is the best in the city!", uz: "Juda yaxshi. U yerdagi palov shahardagi eng zo'ri!" },
            { who: "Anna", en: "Great! I love Uzbek food. And how do I get to the city centre?", uz: "Zo'r! Men o'zbek taomlarini yaxshi ko'raman. Shahar markaziga qanday boraman?" },
            { who: "Receptionist", en: "You can go by metro. The station is five minutes from here.", uz: "Metroda borishingiz mumkin. Bekat bu yerdan besh daqiqada." },
          ],
        },
        { t: "tip", tone: "info", md: "Dialogdagi artikllarga qarang: **a restaurant** (birinchi marta) → **the restaurant** (endi ma'lum). **the hotel, the city centre, the station** — ikkala odam ham biladigan joylar. **Uzbek food** — umumiy (artiklsiz). **by metro** — transport (artiklsiz)." },
        { t: "check", ex: { k: "tf", q: "Dialogda **I love Uzbek food** — artiklsiz, chunki umumiy ma'noda gapirilyapti.", a: true } },
        { t: "check", ex: { k: "fill", q: "There's a café on the corner. ___ café is very cosy.", a: ["the", "that", "this"], why: "Ikkinchi marta — **The** café." } },
      ],
    },
    {
      title: "Matn: Mening shahrim",
      blocks: [
        {
          t: "text", title: "My city",
          en: "My name is Jahongir and I'm a student. I live in Bukhara, a beautiful old city in the west of Uzbekistan. I live in a small house with my parents and my grandmother. The house is near the Lyabi-Hauz, a famous square with an old pool in the middle. In the evening, tourists sit by the water and drink tea.\nI study English and history at university. I go to university by bus, but on Saturdays I walk to the city centre with my friends. We usually have lunch in a café. The café is very small, but the food is amazing. I think Bukhara is the best city in the world!",
          uz: "Mening ismim Jahongir, men talabaman. Men O'zbekistonning g'arbidagi go'zal qadimiy shahar — Buxoroda yashayman. Ota-onam va buvim bilan kichkina uyda yashayman. Uy Labi Hovuz yaqinida — o'rtasida qadimiy hovuzi bor mashhur maydon. Kechqurun sayyohlar suv bo'yida o'tirib, choy ichishadi.\nMen universitetda ingliz tili va tarixni o'qiyman. Universitetga avtobusda boraman, lekin shanba kunlari do'stlarim bilan shahar markaziga piyoda boraman. Odatda kafeda tushlik qilamiz. Kafe juda kichkina, lekin ovqati ajoyib. Menimcha, Buxoro — dunyodagi eng yaxshi shahar!",
        },
        { t: "check", ex: { k: "choice", q: "Matnda nega **a café**, keyin **the café**?", opts: ["Kafe katta bo'lgani uchun.", "Birinchi marta *a*, keyin aniq bo'lgani uchun *the*.", "Kafe Buxoroda bo'lgani uchun.", "Xato yozilgan."], a: 1 } },
        { t: "check", ex: { k: "tf", q: "Matnda **I study English and history** — artiklsiz, chunki fanlar artiklsiz ishlatiladi.", a: true } },
      ],
    },
  ],
  words: [
    { en: "the sun", uz: "quyosh", ipa: "ðə ˈsʌn", pos: "noun", ex: "The sun is very hot today.", exUz: "Bugun quyosh juda issiq." },
    { en: "the moon", uz: "oy (osmondagi)", ipa: "ðə ˈmuːn", pos: "noun", ex: "Look at the moon!", exUz: "Oyga qara!" },
    { en: "the sky", uz: "osmon", ipa: "ðə ˈskaɪ", pos: "noun", ex: "The sky is clear tonight.", exUz: "Bugun kechqurun osmon ochiq." },
    { en: "the world", uz: "dunyo", ipa: "ðə ˈwɜːld", pos: "noun", ex: "I want to travel around the world.", exUz: "Dunyo bo'ylab sayohat qilmoqchiman." },
    { en: "the internet", uz: "internet", ipa: "ði ˈɪn.tə.net", pos: "noun", ex: "I found the recipe on the internet.", exUz: "Retseptni internetdan topdim." },
    { en: "the city centre", uz: "shahar markazi", ipa: "ðə ˌsɪt.i ˈsen.tə", pos: "noun", ex: "Let's meet in the city centre.", exUz: "Shahar markazida uchrashaylik." },
    { en: "the same", uz: "bir xil, o'sha", ipa: "ðə ˈseɪm", pos: "phrase", ex: "We have the same phone.", exUz: "Bizda bir xil telefon bor." },
    { en: "the only", uz: "yagona", ipa: "ði ˈəʊn.li", pos: "phrase", ex: "She's the only doctor in the village.", exUz: "U qishloqdagi yagona shifokor." },
    { en: "by bus", uz: "avtobusda", ipa: "baɪ ˈbʌs", pos: "phrase", ex: "I go to work by bus.", exUz: "Ishga avtobusda boraman." },
    { en: "at work", uz: "ishda", ipa: "ət ˈwɜːk", pos: "phrase", ex: "My dad is at work now.", exUz: "Dadam hozir ishda." },
  ],
  practice: [
    { k: "choice", q: "He is ___ engineer.", opts: ["a", "an", "some", "—"], a: 1, why: "Kasb + unli tovush: **an engineer**." },
    { k: "choice", q: "I go to school ___ bus.", opts: ["by the", "by", "with a", "on"], a: 1, why: "Transport: **by bus** — artiklsiz." },
    { k: "choice", q: "Qaysi gap **to'g'ri**?", opts: ["The life is short.", "Life is short.", "A life is short is.", "The lifes are short."], a: 1, why: "Umumiy ma'no — artiklsiz: **Life is short.**" },
    { k: "choice", q: "Qaysi gap **xato**?", opts: ["She plays the piano.", "He plays football.", "I am teacher.", "They live in the UK."], a: 2, why: "**I am a teacher.** — kasb oldida **a**." },
    { k: "fill", q: "We have ___ dog and two cats. The dog is very old.", a: ["a", "one"], why: "Birinchi marta — **a**." },
    { k: "fill", q: "___ sky is grey today.", a: ["the"], why: "Yagona narsa — **the sky**." },
    { k: "fill", q: "It takes ___ hour to get to Samarkand by train.", a: ["an", "one"], hint: "h o'qilmaydi", why: "**hour** — \"auə\", unli tovush: **an hour**." },
    { k: "fill", q: "It's hot in here. This room has only one window. Can you open ___ window, please?", a: ["the"], why: "Xonadagi aniq deraza — ikkalamiz bilamiz: **the window**." },
    { k: "tf", q: "**I like the music** (umuman musiqani yoqtiraman) — to'g'ri.", a: false, why: "Umuman — **I like music.** *the music* — aniq bir musiqa." },
    { k: "tf", q: "**a university** — to'g'ri, chunki *university* \"yu\" tovushi bilan boshlanadi.", a: true, why: "Harf emas, **tovush** muhim: \"yu\" — undosh tovush." },
    { k: "match", pairs: [["the sun", "quyosh"], ["the sky", "osmon"], ["the world", "dunyo"], ["at work", "ishda"], ["by bus", "avtobusda"]] },
    { k: "listen", say: "She's an English teacher.", opts: ["She's an English teacher.", "She's the English teacher.", "She's English teacher."], a: 0 },
    { k: "order", uz: "Mening otam — shifokor, onam — o'qituvchi.", words: ["My", "father", "is", "a", "doctor", "and", "my", "mother", "is", "a", "teacher."], extra: ["the", "an"] },
    { k: "order", uz: "Biz yakshanba kunlari soat to'qqizda nonushta qilamiz.", words: ["We", "have", "breakfast", "at", "nine", "on", "Sundays."], extra: ["the", "a"], alt: [["on", "Sundays.", "We", "have", "breakfast", "at", "nine"], ["We", "have", "breakfast", "on", "Sundays.", "at", "nine"]] },
    { k: "translate", uz: "Men bolalarni yaxshi ko'raman.", a: ["I love children", "I like children", "I love kids", "I like kids", "I really like children", "I really love children"] },
    { k: "translate", uz: "Dadam hozir ishda.", a: ["My dad is at work now", "My father is at work now", "My dad's at work now", "My father's at work now", "My dad is at work", "My father is at work", "My dad is at work right now", "My father is at work right now", "My dad's at work right now", "My father's at work right now"] },
    { k: "speak", say: "I've got a cat. The cat is black.", uz: "Mening mushugim bor. Mushuk qora." },
  ],
  quiz: [
    { k: "choice", q: "My brother is ___ university student.", opts: ["an", "a", "one", "—"], a: 1, why: "**university** — \"yu\" bilan boshlanadi → **a**." },
    { k: "choice", q: "Which is correct?", opts: ["Uzbekistan is a beautiful country.", "The Uzbekistan is a beautiful country.", "Uzbekistan is beautiful country.", "The Uzbekistan is the beautiful country."], a: 0 },
    { k: "choice", q: "Qaysi gap **xato**?", opts: ["Can you close the door?", "I usually go to bed at ten.", "We play the basketball on Fridays.", "The moon is bright tonight."], a: 2, why: "Sport — artiklsiz: *We play basketball.*" },
    { k: "fill", q: "Tashkent is ___ biggest city in Central Asia.", a: ["the"], why: "**the** + eng…: *the biggest*." },
    { k: "fill", q: "I saw a good film last night. ___ film was about Amir Temur.", a: ["the", "that", "this"] },
    { k: "fill", q: "My uncle is ___ actor.", a: ["an"], why: "Kasb + unli tovush: **an actor**." },
    { k: "tf", q: "**I go to work by the car** — to'g'ri gap.", a: false, why: "**by car** — artiklsiz." },
    { k: "match", pairs: [["the same", "bir xil"], ["the only", "yagona"], ["the city centre", "shahar markazi"], ["the internet", "internet"]] },
    { k: "order", uz: "Dorixona bankning qarshisida.", words: ["The", "pharmacy", "is", "opposite", "the", "bank."], extra: ["a", "of"] },
    { k: "translate", uz: "Men talabaman.", a: ["I'm a student", "I am a student"] },
  ],
  summary: [
    "**a / an** — birinchi marta, \"bitta, qandaydir\"; kasb oldidan majburiy: *I'm **a** student, She's **an** engineer.*",
    "**the** — ma'lum narsa (2-marta), yagona (*the sun, the world*), *the biggest, the first, the same*, shahardagi joylar (*the station*), cholg'ular.",
    "Artiklsiz — umumiy ma'no (*I like cats. Life is beautiful.*), ismlar va ko'p davlatlar, tillar, sport, ovqatlar, **by bus**.",
    "Iboralar: **go to school / work / bed, at home, at work, go home** — artiklsiz.",
    "**an** — unli **tovush** oldidan: *an hour*, lekin *a university*.",
  ],
  homework: "O'zingiz va shahringiz haqida 10 gaplik matn yozing (Jahongirning matni kabi): kasbingiz (*I'm a…*), shahringizdagi joylar (*the city centre, the station*), birinchi va ikkinchi marta tilga olingan narsa (*a café… the café*), umumiy fikr (*I love music*). Keyin har bir artiklning tagiga chizib, nima uchun aynan o'sha artikl ekanini o'zbekcha izohlang.",
};

export default lesson;
