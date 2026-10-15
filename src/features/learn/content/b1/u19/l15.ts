import type { Lesson } from '../../../types';

// Mini lesson (skill): reading and writing a short news article (fictional town). Uses reported speech (l3, l4, l13) and linkers (l6).
const lesson: Lesson = {
  id: 'u19-l15',
  title: 'Reading and writing: a news article',
  titleUz: "O'qish va yozish: yangilik maqolasi",
  mini: true,
  kind: 'skill',
  goal: "Qisqa **yangilik maqolasini** o'qib tuzilishini tushunasiz (sarlavha, asosiy gap, tafsilot, iqtibos) va o'zingiz 6–8 gapli maqola yozasiz: **announced that…, said that…, promised to…** va **meanwhile, eventually** bilan.",
  slides: [
    {
      title: "Maqola qanday tuziladi",
      blocks: [
        { t: 'p', md: "Yangilik maqolasi aniq tartibda yoziladi. Eng muhim ma'lumot **boshida** turadi:" },
        { t: 'table', head: ["Qism", "Nima yoziladi"], rows: [
          ["1. Sarlavha", "Qisqa va aniq: *Millbrook to Get a New Library*"],
          ["2. Birinchi gap", "**Kim, nima, qachon, qayerda**: *The council announced yesterday that…*"],
          ["3. Tafsilot", "Sabab, fon, oldingi voqealar (*had been empty*)"],
          ["4. Iqtibos", "Odamning aytgan gapi: *\"We want…\" the spokesperson told reporters.*"],
          ["5. Keyin nima bo'ladi", "*Meanwhile… Eventually…*"],
        ] },
        { t: 'tip', tone: 'info', md: "Maqolada ko'pincha **Past Simple** va **ko'chirma gap** ishlatiladi: *The council announced that…, A spokesperson said that…* Hikoyadagi kabi his-tuyg'ularsiz, faktlar bilan yoziladi." },
        { t: 'check', ex: { k: 'choice', q: "Maqolaning birinchi gapida nima bo'lishi kerak?", opts: ["Eng muhim ma'lumot: kim, nima, qachon", "Mualliflik fikri", "Uzoq tarix", "Savol"], a: 0, why: "Eng muhim ma'lumot boshida turadi." } },
      ],
    },
    {
      title: "O'qing: yangi kutubxona",
      blocks: [
        { t: 'text', title: 'Millbrook to Get a New Library', voice: 'emma',
          en: "Millbrook Town Council announced yesterday that a new library will open next spring. A council spokesperson said that the building had been empty for three years. At first, local people were worried about the cost. However, the council promised that the project would not raise taxes. \"We want a place where every child can read and study,\" the spokesperson told reporters. Meanwhile, volunteers have already started to collect books. Eventually, the library will have more than ten thousand books.",
          uz: "Millbrook shahar kengashi kecha keyingi bahorda yangi kutubxona ochilishini e'lon qildi. Kengash vakili bino uch yildan beri bo'sh turganini aytdi. Dastlab mahalliy aholi xarajatdan xavotirda edi. Biroq kengash loyiha soliqlarni oshirmasligiga va'da berdi. \"Biz har bir bola o'qiy oladigan va o'rgana oladigan joy xohlaymiz\", dedi vakil muxbirlarga. Shu orada ko'ngillilar kitob yig'ishni allaqachon boshlashdi. Oxir-oqibat kutubxonada o'n mingdan ortiq kitob bo'ladi." },
        { t: 'check', ex: { k: 'choice', q: "When will the new library open?", opts: ["Next spring", "Yesterday", "In three years", "This summer"], a: 0, why: "*A new library will open next spring.*" } },
        { t: 'check', ex: { k: 'tf', q: "The council said that the project would raise taxes.", a: false, why: "*The project would not raise taxes.*" } },
        { t: 'check', ex: { k: 'choice', q: "What are the volunteers doing?", opts: ["Collecting books", "Building the library", "Paying taxes", "Writing to reporters"], a: 0, why: "*Volunteers have already started to collect books.*" } },
      ],
    },
    {
      title: "Iqtibos va ko'chirma gap",
      blocks: [
        { t: 'p', md: "Maqolada odamning gapi ikki yo'l bilan beriladi: **aynan** (qo'shtirnoqda) yoki **ko'chirma gap** bilan. Ikkalasini ham aralashtirish maqolani jonli qiladi." },
        { t: 'table', head: ["Aynan (iqtibos)", "Ko'chirma gap"], speak: [0, 1], rows: [
          ["\"We want a place for children,\" the spokesperson said.", "The spokesperson said that they wanted a place for children."],
          ["\"The library will open in spring,\" the council announced.", "The council announced that the library would open in spring."],
          ["\"Please bring your old books,\" the volunteers asked.", "The volunteers asked people to bring their old books."],
        ] },
        { t: 'compare', good: { title: "To'g'ri", items: ["The council announced that the library would open.", "A spokesperson told reporters that the building was empty."], }, bad: { title: "Xato", items: ["The council announced to open a library. (to'liq gap kerak)", "A spokesperson told that the building was empty. (told + kim)"] } },
        { t: 'check', ex: { k: 'fill', q: "The mayor said that the road ___ closed for a week. (will be)", a: ["would be"], why: "*will be* → **would be**." } },
      ],
    },
    {
      title: "Yozing: o'z maqolangiz",
      blocks: [
        { t: 'p', md: "Endi o'zingiz 6–8 gapli qisqa maqola yozing (xayoliy shahar yoki voqea). Reja:" },
        { t: 'table', head: ["Qadam", "Namuna ibora"], speak: [1], rows: [
          ["Birinchi gap", "The council announced yesterday that a new park will open in June."],
          ["Tafsilot", "A spokesperson said that the old park had been closed for a year."],
          ["Iqtibos", "\"Everybody will enjoy it,\" the spokesperson told reporters."],
          ["Bog'lovchi", "Meanwhile, volunteers have started to plant trees."],
          ["Yakun", "Eventually, the park will have a playground and a café."],
        ] },
        { t: 'tip', tone: 'good', md: "Tekshiruv: sarlavha bormi? Birinchi gapda kim, nima, qachon bormi? Kamida bitta **said that…**, bitta **iqtibos** va bitta **meanwhile** yoki **eventually** bormi? Zamonlar mosmi (*will* → *would*)?" },
        { t: 'check', ex: { k: 'order', uz: "Shu orada ko'ngillilar daraxt ekishni boshladi.", words: ["Meanwhile,", "volunteers", "have", "started", "to", "plant", "trees."], extra: ["are", "planting"], why: "**Meanwhile** + Present Perfect." } },
      ],
    },
  ],
  words: [
    { en: 'spokesperson', uz: "vakil, matbuot kotibi", ipa: 'ˈspəʊks.pɜː.sən', pos: 'noun', ex: 'A spokesperson said that the road would reopen soon.', exUz: "Vakil yo'l tez orada ochilishini aytdi." },
    { en: 'announce', uz: "e'lon qilmoq", ipa: 'əˈnaʊns', pos: 'verb', ex: 'The school announced that it would close early.', exUz: "Maktab erta yopilishini e'lon qildi." },
    { en: 'quote', uz: "iqtibos; iqtibos keltirmoq", ipa: 'kwəʊt', pos: 'noun', ex: 'The article ends with a quote from the mayor.', exUz: "Maqola merdan olingan iqtibos bilan tugaydi." },
    { en: 'council', uz: "kengash (shahar)", ipa: 'ˈkaʊn.səl', pos: 'noun', ex: 'The town council meets every month.', exUz: "Shahar kengashi har oy yig'iladi." },
    { en: 'volunteer', uz: "ko'ngilli", ipa: 'ˌvɒl.ənˈtɪə', pos: 'noun', ex: 'Volunteers cleaned the beach on Sunday.', exUz: "Ko'ngillilar yakshanba kuni sohilni tozaladi." },
  ],
  practice: [
    { k: 'match', pairs: [['spokesperson', 'vakil'], ['announce', "e'lon qilmoq"], ['quote', 'iqtibos'], ['council', 'kengash'], ['volunteer', "ko'ngilli"]] },
    { k: 'choice', q: "Maqolaning sarlavhasi qanday bo'ladi?", opts: ["Qisqa va aniq", "Uzun va ko'p savolli", "Faqat ism", "Bo'sh"], a: 0, why: "Sarlavha qisqa va aniq bo'ladi." },
    { k: 'fill', q: "The council ___ yesterday that the park will open in June.", a: ["announced"], why: "Kecha → Past Simple: **announced**." },
    { k: 'fill', q: "A spokesperson ___ reporters that the work had finished. (tell)", a: ["told"], why: "**told + kim**." },
    { k: 'fill', q: "The mayor promised that the road ___ open soon. (will)", a: ["would"], why: "*will* → **would**." },
    { k: 'fix', wrong: "The council announced to open a new library.", a: ["The council announced that it would open a new library.", "The council announced that a new library would open.", "The council announced that they would open a new library.", "The council announced the opening of a new library."], hint: "announced + that + gap", why: "**announce** dan keyin odatda *that + gap* keladi." },
    { k: 'fix', wrong: "The spokesperson told that the building was empty.", a: ["The spokesperson told reporters that the building was empty.", "The spokesperson said that the building was empty.", "The spokesperson told us that the building was empty."], hint: "told + kim yoki said", why: "**told** dan keyin odam kerak, yoki **said** ishlating." },
    { k: 'tf', q: "Yangilik maqolasida eng muhim ma'lumot birinchi gapda aytiladi.", a: true, why: "Kim, nima, qachon — boshida." },
    { k: 'order', uz: "Oxir-oqibat kutubxonada ko'p kitob bo'ladi.", words: ["Eventually,", "the", "library", "will", "have", "many", "books."], extra: ["has", "would"], why: "**Eventually** — oxir-oqibat." },
    { k: 'translate', uz: "Kengash kecha yangi park ochilishini e'lon qildi.", a: ["The council announced yesterday that a new park would open.", "The council announced yesterday that a new park will open.", "The council announced yesterday that it would open a new park.", "The council announced yesterday that they would open a new park."] },
    { k: 'dictation', say: "Millbrook Town Council announced yesterday that a new library will open next spring.", a: ["Millbrook Town Council announced yesterday that a new library will open next spring."] },
    { k: 'speak', say: "A council spokesperson said that the building had been empty for three years.", uz: "Kengash vakili bino uch yildan beri bo'sh turganini aytdi." },
  ],
  quiz: [
    { k: 'choice', q: "\"We will plant trees,\" the volunteers said. → The volunteers said that they ___ plant trees.", opts: ["would", "will", "did", "are"], a: 0, why: "*will* → **would**." },
    { k: 'choice', q: "Qaysi so'z yangilikda manbani bildiradi?", opts: ["spokesperson", "volunteer", "flood", "headline"], a: 0, why: "**spokesperson** — rasmiy vakil, ma'lumot manbai." },
    { k: 'fill', q: "The council said that the building ___ empty for three years. (be)", a: ["had been"], why: "Oldin davom etgan holat → **had been**." },
    { k: 'tf', q: "A news article usually begins with a long personal story.", a: false, why: "Eng muhim ma'lumot boshida turadi." },
    { k: 'order', uz: "Vakil muxbirlarga bino bo'sh ekanini aytdi.", words: ["The", "spokesperson", "told", "reporters", "that", "the", "building", "was", "empty."], extra: ["said", "is"], why: "**told reporters that…**" },
    { k: 'translate', uz: "Shu orada ko'ngillilar kitob yig'ishni boshladi.", a: ["Meanwhile, volunteers have started to collect books.", "Meanwhile, the volunteers have started to collect books.", "Meanwhile, volunteers started to collect books.", "Meanwhile, the volunteers started to collect books.", "Meanwhile, volunteers have started collecting books.", "Meanwhile, the volunteers have started collecting books."] },
  ],
  summary: [
    "Maqola tuzilishi: **sarlavha → birinchi gap (kim, nima, qachon) → tafsilot → iqtibos → keyin nima bo'ladi**.",
    "Fe'llar: **announced that…, said that…, told reporters that…, promised that…** (*will* → *would*).",
    "Iqtibos qo'shtirnoqda aynan beriladi: **\"…,\" the spokesperson said.**",
    "Hikoyani bog'lang: **meanwhile, however, eventually**.",
  ],
  homework: "Xayoliy shahar yoki maktab haqida 6–8 gapli yangilik maqolasi yozing: sarlavha, birinchi gap, bitta *said that…*, bitta iqtibos va *meanwhile* yoki *eventually*. Keyin yuqoridagi tekshiruv ro'yxati bo'yicha tekshiring.",
};

export default lesson;
