import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u16-l10",
  title: "Explaining what something is",
  titleUz: "Narsa nima ekanini tushuntirish",
  mini: true,
  kind: 'situation',
  goal: "Inglizcha so'zni bilmasangiz ham, uni **who / which / that / where** bilan ta'riflab tushuntira olasiz (*It's a thing that…, It's a place where…*) va **majhul nisbat** bilan qayerda, nimadan yasalganini aytasiz (*It is made of…*).",
  slides: [
    {
      title: "Suhbat: so'zni bilmasangiz",
      blocks: [
        { t: "p", md: "Chet elda biror narsaning nomini unutdingizmi? Cho'chimang: uni **tushuntirib** bering. Bu ko'nikma har bir tilni o'rganuvchi uchun juda foydali." },
        {
          t: "dialog", lines: [
            { who: "Dilshod", en: "Excuse me, I'm looking for a thing that you use to boil water.", uz: "Kechirasiz, men suv qaynatish uchun ishlatiladigan narsani qidiryapman." },
            { who: "Seller", en: "Do you mean a kettle?", uz: "Choynak (kettle) nazarda tutyapsizmi?" },
            { who: "Dilshod", en: "Yes, that's the word! And I also need a device which keeps food cold.", uz: "Ha, aynan shu so'z! Yana menga ovqatni sovuq saqlaydigan qurilma kerak." },
            { who: "Seller", en: "That's a fridge. It is made in Turkey and it's very popular.", uz: "Bu muzlatgich (fridge). U Turkiyada ishlab chiqarilgan va juda mashhur." },
            { who: "Dilshod", en: "Great. Is there a shop nearby where I can buy a container for lunch?", uz: "Ajoyib. Yaqin atrofda tushlik uchun idish sotib oladigan do'kon bormi?" },
            { who: "Seller", en: "Yes, it's the shop next door, where everything is cheap.", uz: "Ha, yonidagi do'kon, u yerda hamma narsa arzon." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "What does Dilshod want to buy first?", opts: ["A kettle", "A fridge", "A phone", "A bag"], a: 0, why: "*a thing that you use to boil water* = **kettle**." } },
        { t: "check", ex: { k: "tf", q: "The fridge is made in Uzbekistan.", a: false, why: "*It is made in Turkey.*" } },
      ],
    },
    {
      title: "Tushuntirish formulasi",
      blocks: [
        {
          t: "table", head: ["Nimani tushuntiramiz", "Formula", "Misol"], speak: [2],
          rows: [
            ["Odam", "He / She is a person who …", "A dentist is a person who looks after your teeth."],
            ["Narsa", "It is a thing that / which …", "A kettle is a thing that boils water."],
            ["Joy", "It is a place where …", "A bakery is a place where people buy bread."],
            ["Material, ishlab chiqarish", "It is made of / in / by …", "This table is made of wood."],
          ],
        },
        { t: "tip", tone: "info", md: "Ismni bilmasangiz ham ishlaydigan ikki oson so'z: **a thing** (narsa) va **a person** (odam). *It's a thing that you use to…* — deyish yetarli." },
        { t: "compare", good: { title: "To'g'ri", items: ["A tourist is a person who visits other places.", "It's a thing that you use to cook.", "A bakery is a place where people buy bread."], }, bad: { title: "Xato", items: ["A tourist is a person which visits other places.", "It's a thing what you use to cook.", "A bakery is a place who people buy bread."] } },
        { t: "check", ex: { k: "choice", q: "**A pharmacy is a place ___ you buy medicine.**", opts: ["who", "which", "where", "what"], a: 2, why: "Joy → **where**." } },
        { t: "check", ex: { k: "fill", q: "A guide is a person ___ shows tourists around.", a: ["who", "that"], why: "Odam → **who** (yoki **that**)." } },
      ],
    },
    {
      title: "Nimadan va qayerda yasalgan?",
      blocks: [
        { t: "p", md: "Narsani tushuntirganda uning nimadan yasalganini ham aytish mumkin. Buning uchun **majhul nisbat**: **is / are / was / were + V3**. Kim yasagani muhim bo'lmasa, uni aytmaymiz." },
        {
          t: "examples", items: [
            { en: "This bag is made of leather.", uz: "Bu sumka teridan yasalgan." },
            { en: "These cups are made in China.", uz: "Bu chashkalar Xitoyda ishlab chiqarilgan." },
            { en: "The bridge was built in 1990.", uz: "Ko'prik 1990-yilda qurilgan." },
            { en: "My phone was made by a famous company.", uz: "Mening telefonim mashhur kompaniya tomonidan ishlab chiqarilgan." },
          ],
        },
        { t: "check", ex: { k: "fill", q: "These tools ___ made of metal. (be)", a: ["are"], why: "Ko'plik, hozirgi zamon → **are made**." } },
        { t: "check", ex: { k: "choice", q: "**The old mosque ___ in the 15th century.**", opts: ["built", "was built", "is built", "was build"], a: 1, why: "O'tgan zamon passive: **was built**." } },
      ],
    },
  ],
  words: [
    { en: "describe", uz: "ta'riflamoq", ipa: "dɪˈskraɪb", pos: "verb", ex: "Can you describe your bag?", exUz: "Sumkangizni ta'riflab bera olasizmi?" },
    { en: "device", uz: "qurilma, asbob", ipa: "dɪˈvaɪs", pos: "noun", ex: "A phone is a useful device.", exUz: "Telefon foydali qurilma." },
    { en: "container", uz: "idish, quti", ipa: "kənˈteɪnə", pos: "noun", ex: "I keep my lunch in a plastic container.", exUz: "Men tushlikni plastik idishda saqlayman." },
    { en: "machine", uz: "mashina, apparat", ipa: "məˈʃiːn", pos: "noun", ex: "A washing machine washes clothes.", exUz: "Kir yuvish mashinasi kiyimlarni yuvadi." },
    { en: "material", uz: "material, xomashyo", ipa: "məˈtɪəriəl", pos: "noun", ex: "Wood is a popular material for tables.", exUz: "Yog'och stollar uchun mashhur material." },
    { en: "useful", uz: "foydali", ipa: "ˈjuːsfl", pos: "adj", ex: "A map is useful when you travel.", exUz: "Sayohat qilganda xarita foydali." },
  ],
  practice: [
    { k: "match", pairs: [["describe", "ta'riflamoq"], ["device", "qurilma"], ["container", "idish, quti"], ["machine", "apparat"], ["material", "xomashyo"], ["useful", "foydali"]] },
    { k: "choice", q: "**A mechanic is a person ___ repairs cars.**", opts: ["who", "where", "what", "whose"], a: 0 },
    { k: "choice", q: "**A stadium is a place ___ people watch football.**", opts: ["who", "which", "where", "that"], a: 2 },
    { k: "choice", q: "**A kettle is a thing ___ boils water.**", opts: ["who", "where", "what", "that"], a: 3, why: "Narsa → **that** yoki **which**; bu yerda variantlar orasida faqat **that** to'g'ri." },
    { k: "choice", q: "**These phones ___ made in China now.**", opts: ["is", "are", "was", "be"], a: 0 },
    { k: "choice", q: "**The hotel ___ built in 2010.**", opts: ["is", "was", "were", "has"], a: 1 },
    { k: "listen", say: "A bakery is a place where people buy bread.", opts: ["A bakery is a place where people buy bread.", "A bakery is a person who makes bread.", "A bakery is a thing that sells bread."], a: 0 },
    { k: "fill", q: "A tourist is a person ___ visits other countries.", a: ["who", "that"] },
    { k: "fill", q: "A fridge is a device ___ keeps food cold.", a: ["that", "which"] },
    { k: "fix", wrong: "A dentist is a person what looks after your teeth.", a: ["A dentist is a person who looks after your teeth.", "A dentist is a person that looks after your teeth."], why: "**what** bunday ishlatilmaydi; odam uchun **who / that**." },
    { k: "order", uz: "Bu sumka teridan yasalgan.", words: ["This", "bag", "is", "made", "of", "leather."], extra: ["make", "was"] },
    { k: "translate", uz: "Choynak — suvni qaynatadigan narsa.", a: ["A kettle is a thing that boils water.", "A kettle is a thing which boils water.", "A kettle is a device that boils water.", "A kettle is a device which boils water."] },
    { k: "translate", uz: "Dorixona — odamlar dori sotib oladigan joy.", a: ["A pharmacy is a place where people buy medicine.", "A pharmacy is a place where people buy medicines."] },
    { k: "speak", say: "It's a thing that you use to boil water.", uz: "Bu suv qaynatish uchun ishlatiladigan narsa." },
  ],
  quiz: [
    { k: "choice", q: "**A guest is a person ___ stays at your house.**", opts: ["who", "where", "which", "what"], a: 0 },
    { k: "choice", q: "**A library is a place ___ you can borrow books.**", opts: ["who", "where", "what", "whose"], a: 1 },
    { k: "choice", q: "**These cups ___ made of glass.**", opts: ["is", "are", "was", "be"], a: 1 },
    { k: "choice", q: "**The bridge ___ built two years ago.**", opts: ["is", "are", "was", "has"], a: 2 },
    { k: "fill", q: "A washing machine is a machine ___ washes clothes.", a: ["that", "which"] },
    { k: "fix", wrong: "A bakery is a place who people buy bread.", a: ["A bakery is a place where people buy bread."], why: "Joy uchun **where**." },
    { k: "translate", uz: "Bu stol yog'ochdan yasalgan.", a: ["This table is made of wood.", "The table is made of wood.", "This table is made from wood."] },
    { k: "tf", q: "**A tourist is a place where people stay.** — to'g'ri ta'rif.", a: false, why: "Tourist — odam: *a person who visits other places*." },
  ],
  summary: [
    "Odam → **who** (yoki that); narsa → **that / which**; joy → **where**. **what** bunday ishlatilmaydi.",
    "So'zni bilmasangiz tushuntiring: **It's a thing that…**, **It's a person who…**, **It's a place where…**",
    "Majhul nisbat: **is / are / was / were + V3** (*is made of wood, was built in 1990*).",
  ],
  homework: "Uyingizdagi 5 ta narsani (masalan, choynak, muzlatgich, soat) inglizcha **It's a thing that…** yoki **It's a device which…** bilan tushuntiring. Keyin ikkitasi nimadan yasalganini ham yozing (*It is made of…*).",
};

export default lesson;
