import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u21-l2",
  title: "Defining relative clauses",
  titleUz: "Aniqlovchi nisbiy gaplar: who, which, that, where, whose",
  goal: "Odam, narsa va joyni **aniqlab** gapirasiz: *The man who lives next door is a doctor. This is the café where we met.* **Who, which, that, where, whose** ni to'g'ri tanlaysiz, **that** ni tushirib qoldirishni bilasiz va **The man who he lives** kabi xatodan qochasiz.",
  slides: [
    {
      title: "Nisbiy gap nima?",
      blocks: [
        { t: "p", md: "Elementary darajada *who, which, where* bilan oddiy ta'riflar o'rgandingiz. Endi bu qoliplarni chuqurroq ishlatamiz. **Nisbiy gap** — ot haqida **qaysi** odam yoki narsa ekanini aniqlaydigan qo'shimcha qism. O'zbekchada buni «-gan, -adigan» shakllari bilan aytamiz: *men ishlaydigan kompaniya, kecha uchrashgan ayol*." },
        {
          t: "table", head: ["So'z", "Nima uchun", "Misol"], speak: [2],
          rows: [
            ["who", "odam", "A colleague is a person who works with you."],
            ["which", "narsa", "A tool is something which you use to do a job."],
            ["that", "odam yoki narsa (who / which o'rniga)", "The phone that I bought is very fast."],
            ["where", "joy", "This is the café where we first met."],
            ["whose", "kimning (egalik)", "I know a girl whose brother is a pilot."],
          ],
        },
        { t: "p", md: "Bu gaplar **aniqlovchi** (*defining*) deyiladi, chunki ular «qaysi?» degan savolga javob beradi va **usiz gap to'liq bo'lmaydi**. Shuning uchun ular **vergulsiz** yoziladi." },
        {
          t: "examples", items: [
            { en: "The woman who called you is my aunt.", uz: "Sizga qo'ng'iroq qilgan ayol mening xolam." },
            { en: "I lost the umbrella that you gave me.", uz: "Siz bergan soyabonni yo'qotib qo'ydim." },
            { en: "That's the hospital where my mother works.", uz: "Mana, onam ishlaydigan kasalxona." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "A stranger is a person ___ you don't know.", opts: ["who", "which", "where", "whose"], a: 0, why: "Odam haqida → **who** (yoki **that**)." } },
        { t: "check", ex: { k: "choice", q: "A device is a machine ___ does a special job.", opts: ["which", "who", "where", "whose"], a: 0, why: "Narsa haqida → **which** (yoki **that**)." } },
      ],
    },
    {
      title: "Ega yoki to'ldiruvchi? That ni tushirish",
      blocks: [
        { t: "p", md: "Nisbiy so'z nisbiy gapda **ega** (kim qildi?) bo'lishi mumkin yoki **to'ldiruvchi** (kimni, nimani?) bo'lishi mumkin. Buni ko'rish oson: nisbiy so'zdan keyin **fe'l** kelsa — u ega; **ega** (olmosh yoki ot) kelsa — u to'ldiruvchi." },
        {
          t: "table", head: ["Turi", "Misol", "who / which / that tushadimi?"],
          rows: [
            ["Ega (keyin fe'l)", "The man **who lives** next door is a doctor.", "Yo'q, tushirib bo'lmaydi"],
            ["To'ldiruvchi (keyin ega)", "The book **(that) I bought** was cheap.", "Ha, tushirsa bo'ladi"],
            ["To'ldiruvchi (keyin ega)", "The woman **(who) we met** is a teacher.", "Ha, tushirsa bo'ladi"],
          ],
        },
        { t: "tip", tone: "good", md: "Kundalik gapirishda to'ldiruvchi bo'lgan **that / who / which** odatda **tushiriladi**: *The film we saw was great.* Bu juda tabiiy inglizcha." },
        { t: "tip", tone: "info", md: "**That** ni **everything, something, nothing, all, only** va oliy daraja (*the best*) dan keyin ishlatish yaxshi: *Everything that he said was true. It's the best film that I've seen.*" },
        { t: "check", ex: { k: "choice", q: "Qaysi gapda nisbiy so'zni tushirib qoldirsa bo'ladi?", opts: ["The man who helped me was kind.", "The man I helped was kind.", "The girl who sits here is Lola.", "The tool which cuts wood is new."], a: 1, why: "Faqat **to'ldiruvchi** bo'lganda tushadi (*the man (who) I helped*). Qolganlarida nisbiy so'z ega — tushirib bo'lmaydi." } },
        { t: "check", ex: { k: "fill", q: "The phone ___ costs 200 pounds is too expensive for me.", a: ["that", "which"], why: "**costs** — fe'l, demak nisbiy so'z ega. Tushirib bo'lmaydi: **that / which**." } },
      ],
    },
    {
      title: "where, whose va old kelgan predlog",
      blocks: [
        { t: "p", md: "**Where** joydan keyin keladi (*the city where I was born*). **Whose** esa *his / her / their* o'rnini bosadi va odam, ba'zan narsa nomidan keyin turadi. Uning ketidan **ot** keladi." },
        {
          t: "examples", items: [
            { en: "That is the school where my sister teaches.", uz: "Mana, opam dars beradigan maktab." },
            { en: "I met a man whose car was stolen.", uz: "Mashinasi o'g'irlangan odam bilan uchrashdim." },
            { en: "She is a singer whose songs everybody knows.", uz: "U qo'shiqlarini hamma biladigan xonanda." },
          ],
        },
        { t: "p", md: "Nisbiy gapda predlog ham bo'lishi mumkin. Kundalik inglizchada predlog odatda **gap oxirida** turadi. Bu o'zbekchaga o'xshamaydi, shuning uchun alohida yodda tuting." },
        {
          t: "table", head: ["Sizning tilingizda", "Inglizcha (tabiiy)"],
          rows: [
            ["Men gaplashgan qiz", "The girl (that) I talked **to**"],
            ["Biz yashaydigan uy", "The house (that) we live **in**"],
            ["U kutgan odam", "The man (who) she was waiting **for**"],
          ],
        },
        { t: "tip", tone: "warn", md: "**Whose** dan keyin **a / the** kelmaydi: *a man whose the car* — xato. To'g'risi: **a man whose car**." },
        { t: "check", ex: { k: "fill", q: "That's the woman ___ husband is a famous chef.", a: ["whose"], why: "**Kimning** eri haqida gapiryapmiz → **whose** + ot." } },
        { t: "check", ex: { k: "order", uz: "Biz yashaydigan uy juda eski.", words: ["The", "house", "we", "live", "in", "is", "very", "old."], extra: ["where", "on"], why: "Predlog nisbiy gap oxirida: **we live in**." } },
      ],
    },
    {
      title: "Uzbek tilidan keladigan xatolar",
      blocks: [
        { t: "p", md: "O'zbek tilida nisbiy gap ot **oldidan** keladi (*kecha ko'rgan film*). Inglizchada u ot **keyin** turadi va o'z egasi bilan keladi. Shuning uchun uch xil xato tez-tez uchraydi." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["The man who lives next door is a doctor.", "The film that we saw was great.", "This is the café where we met."] },
          bad: { title: "Xato", items: ["The man who he lives next door is a doctor.", "The film what we saw was great.", "This is the café where we met there."] },
        },
        { t: "tip", tone: "warn", md: "1) **Olmoshni takrorlamang**: *who he lives* emas, *who lives*. 2) **What** nisbiy so'z emas: *the film what* — xato; **that / which** ishlating. 3) **Where** o'zi «u yerda» ma'nosini beradi, **there** qo'shmang." },
        { t: "check", ex: { k: "fix", wrong: "The film what we saw was great.", a: ["The film that we saw was great.", "The film which we saw was great.", "The film we saw was great."], hint: "what nisbiy so'z emas", why: "Nisbiy gapda **that / which** yoki umuman so'z kerak emas." } },
        { t: "check", ex: { k: "fix", wrong: "The girl who she works here is my cousin.", a: ["The girl who works here is my cousin.", "The girl that works here is my cousin."], hint: "olmosh ortiqcha", why: "**who** o'zi egani bildiradi, **she** ortiqcha." } },
      ],
    },
    {
      title: "O'qing: Yaxshi qo'shni",
      blocks: [
        {
          t: "text", title: "A good neighbour",
          en: "I live in a building where everybody knows each other. My neighbour, Mrs Rahimova, is a woman who is always ready to help. Last winter, when I had a cold, she brought me soup that she had made herself. The man who lives above us is a musician whose concert I went to last month. Some neighbours I talk to every day, and others I only meet in the lift. A neighbour is not just a person who lives near you. It is somebody you can ask for help.",
          uz: "Men hamma bir-birini taniydigan binoda yashayman. Qo'shnim, Rahimova xola, doim yordamga tayyor ayol. O'tgan qishda shamollaganimda, u o'zi pishirgan sho'rva olib keldi. Tepamizda turadigan erkak musiqachi, uning konsertiga o'tgan oy bordim. Ba'zi qo'shnilar bilan har kuni gaplashaman, boshqalarni esa faqat liftda uchrataman. Qo'shni — shunchaki yaqin yashaydigan odam emas. U yordam so'rash mumkin bo'lgan odam.",
        },
        { t: "check", ex: { k: "tf", q: "Mrs Rahimova made the soup herself.", a: true, why: "*soup that she had made herself* — sho'rvani o'zi pishirgan." } },
        { t: "check", ex: { k: "choice", q: "Who is the man who lives above the writer?", opts: ["A musician", "A doctor", "A teacher", "A pilot"], a: 0, why: "*The man who lives above us is a musician.*" } },
      ],
    },
    {
      title: "Dialog: Ko'ngilli bo'lish",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Nilufar", en: "Sardor, do you know the woman who is giving that talk?", uz: "Sardor, ma'ruza qilayotgan ayolni taniysanmi?" },
            { who: "Sardor", en: "Yes, she is the manager of the charity where I volunteer.", uz: "Ha, u men ko'ngilli bo'lib ishlaydigan xayriya tashkilotining rahbari." },
            { who: "Nilufar", en: "I'd love to help too. What kind of people do they need?", uz: "Men ham yordam berishni xohlardim. Ularga qanday odamlar kerak?" },
            { who: "Sardor", en: "People who like children and don't mind early mornings.", uz: "Bolalarni yaxshi ko'radigan va erta turishdan qochmaydigan odamlar." },
            { who: "Nilufar", en: "That's me! Is there a form that I need to fill in?", uz: "Bu menman! To'ldirishim kerak bo'lgan anketa bormi?" },
            { who: "Sardor", en: "Yes. I'll introduce you to the man whose job is to organise the volunteers.", uz: "Ha. Seni ko'ngillilarni tashkil qilish vazifasi bo'lgan odam bilan tanishtiraman." },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Sardor is the manager of the charity.", a: false, why: "Manager — ayol. Sardor u yerda faqat **volunteer** (ko'ngilli)." } },
      ],
    },
  ],
  words: [
    { en: "employer", uz: "ish beruvchi", ipa: "ɪmˈplɔɪ.ər", pos: "noun", ex: "An employer is a person who gives people jobs.", exUz: "Ish beruvchi odamlarga ish beradigan kishidir." },
    { en: "tenant", uz: "ijarachi", ipa: "ˈten.ənt", pos: "noun", ex: "The tenant who lives upstairs is very quiet.", exUz: "Tepada yashaydigan ijarachi juda tinch." },
    { en: "stranger", uz: "notanish odam", ipa: "ˈstreɪn.dʒər", pos: "noun", ex: "Don't open the door to a stranger.", exUz: "Notanish odamga eshikni ochmang." },
    { en: "supplier", uz: "yetkazib beruvchi", ipa: "səˈplaɪ.ər", pos: "noun", ex: "The supplier that we use delivers every Monday.", exUz: "Biz foydalanadigan yetkazib beruvchi har dushanba olib keladi." },
    { en: "owner", uz: "egasi", ipa: "ˈəʊ.nər", pos: "noun", ex: "Who is the owner of this car?", exUz: "Bu mashinaning egasi kim?" },
    { en: "gadget", uz: "qurilma, asbob-uskuna", ipa: "ˈɡædʒ.ɪt", pos: "noun", ex: "A gadget is a small machine that does a useful job.", exUz: "Gadjet foydali ish bajaradigan kichik qurilmadir." },
    { en: "appliance", uz: "maishiy texnika", ipa: "əˈplaɪ.əns", pos: "noun", ex: "A washing machine is an appliance that saves a lot of time.", exUz: "Kir yuvish mashinasi ko'p vaqtni tejaydigan maishiy texnikadir." },
    { en: "inhabitant", uz: "aholi, yashovchi", ipa: "ɪnˈhæb.ɪ.tənt", pos: "noun", ex: "The inhabitants who live near the river were moved to safety.", exUz: "Daryo yaqinida yashovchi aholi xavfsiz joyga ko'chirildi." },
    { en: "instrument", uz: "cholg'u asbobi", ipa: "ˈɪn.strə.mənt", pos: "noun", ex: "The instrument that she plays is called a cello.", exUz: "U chaladigan cholg'u asbobi violonchel deb ataladi." },
    { en: "shareholder", uz: "aksiyador", ipa: "ˈʃeəˌhəʊl.dər", pos: "noun", ex: "A shareholder is a person who owns a part of a company.", exUz: "Aksiyador kompaniyaning bir qismiga egalik qiladigan shaxsdir." },
  ],
  practice: [
    { k: "choice", q: "A colleague is a person ___ works with you.", opts: ["who", "which", "where", "whose"], a: 0, why: "Odam → **who**." },
    { k: "choice", q: "A tool is something ___ you use to do a job.", opts: ["which", "who", "where", "whose"], a: 0, why: "Narsa → **which** (yoki that)." },
    { k: "choice", q: "That's the girl ___ brother is a pilot.", opts: ["whose", "who", "which", "where"], a: 0, why: "Kimning ukasi → **whose**." },
    { k: "choice", q: "This is the shop ___ I bought my laptop.", opts: ["where", "who", "whose", "what"], a: 0, why: "Joy → **where**." },
    { k: "listen", say: "The man who lives next door is a doctor.", opts: ["The man who lives next door is a doctor.", "The man who lived next door is a doctor.", "The men who live next door are doctors.", "The man who works next door is a doctor."], a: 0, why: "**who lives** — hozirgi zamon, birlik." },
    { k: "fill", q: "The customer ___ called yesterday wants a refund.", a: ["who", "that"], uz: "Kecha qo'ng'iroq qilgan mijoz pulini qaytarishni xohlaydi.", why: "Odam, ega → **who / that**." },
    { k: "fill", q: "Is this the bag ___ you lost on the train?", a: ["that", "which"], uz: "Poyezdda yo'qotgan sumkang shumi?", why: "Narsa → **that / which**." },
    { k: "order", uz: "Bu men kecha sotib olgan kitob.", words: ["This", "is", "the", "book", "that", "I", "bought", "yesterday."], extra: ["who", "what"], why: "Narsa → **that**." },
    { k: "order", uz: "Men ishlaydigan kompaniya katta.", words: ["The", "company", "where", "I", "work", "is", "big."], extra: ["who", "which"], why: "Joy → **where**." },
    { k: "translate", uz: "Sumkasi o'g'irlangan ayol politsiyaga qo'ng'iroq qildi.", a: ["The woman whose bag was stolen called the police.", "The woman whose bag was stolen phoned the police.", "The woman whose bag was stolen rang the police."], why: "**whose** + ot: kimning sumkasi." },
    { k: "translate", uz: "Menga yordam bergan odam mening qo'shnim.", a: ["The man who helped me is my neighbour.", "The man that helped me is my neighbour."], why: "Odam, ega → **who / that**." },
    { k: "fix", wrong: "The man who he lives next door is a doctor.", a: ["The man who lives next door is a doctor.", "The man that lives next door is a doctor."], hint: "olmosh ortiqcha", why: "**who** egani bildiradi, **he** ni qo'shmang." },
    { k: "fix", wrong: "I like the film what we saw yesterday.", a: ["I like the film that we saw yesterday.", "I like the film which we saw yesterday.", "I like the film we saw yesterday."], hint: "what emas", why: "**What** nisbiy so'z emas." },
    { k: "match", pairs: [["neighbour", "qo'shni"], ["colleague", "hamkasb"], ["stranger", "notanish odam"], ["customer", "mijoz"], ["owner", "egasi"]] },
    { k: "tf", q: "*The book that I read was good.* gapida **that** ni tushirib qoldirsa bo'ladi.", a: true, why: "**that** to'ldiruvchi: *The book I read was good.*" },
    { k: "dictation", say: "This is the café where we first met.", uz: "Mana, biz birinchi marta uchrashgan kafe.", why: "Joy → **where**." },
    { k: "speak", say: "A volunteer is a person who helps others without being paid.", uz: "Ko'ngilli — pul olmasdan boshqalarga yordam beradigan odam." },
  ],
  quiz: [
    { k: "choice", q: "A stranger is a person ___ you have never met.", opts: ["who", "which", "where", "whose"], a: 0, why: "Odam → **who**." },
    { k: "choice", q: "I have a friend ___ father is a famous doctor.", opts: ["whose", "who", "which", "that"], a: 0, why: "Kimning otasi → **whose**." },
    { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["The house we live in is old.", "The house we live is old.", "The house where we live in is old.", "The house in we live is old."], a: 0, why: "Predlog nisbiy gap oxirida: **live in**. *Where* bilan predlog kerak emas." },
    { k: "choice", q: "Everything ___ he told me was true.", opts: ["that", "what", "who", "whose"], a: 0, why: "**Everything** dan keyin **that**; *what* nisbiy so'z emas." },
    { k: "fill", q: "Is that the man ___ car was stolen?", a: ["whose"], uz: "Mashinasi o'g'irlangan odam shumi?", why: "**whose** + ot." },
    { k: "fill", q: "The device ___ I use every day is very old.", a: ["that", "which"], uz: "Men har kuni ishlatadigan qurilma juda eski.", why: "Narsa → **that / which**." },
    { k: "order", uz: "Men gaplashgan qiz mening hamkasbim.", words: ["The", "girl", "I", "talked", "to", "is", "my", "colleague."], extra: ["who", "where"], why: "Predlog oxirida: **talked to**." },
    { k: "translate", uz: "Bu men ishlaydigan joy.", a: ["This is the place where I work.", "This is the place I work at.", "This is where I work."], why: "Joy → **where**." },
    { k: "fix", wrong: "The girl who she works here is my cousin.", a: ["The girl who works here is my cousin.", "The girl that works here is my cousin."], hint: "olmosh ortiqcha", why: "**she** ortiqcha." },
    { k: "tf", q: "*a man whose the car* — bu to'g'ri qolip.", a: false, why: "**whose** dan keyin artikl kelmaydi: *a man whose car*." },
  ],
  summary: [
    "**Aniqlovchi nisbiy gap** «qaysi?» savoliga javob beradi va **vergulsiz** yoziladi: *The man who lives next door is a doctor.*",
    "**who** — odam; **which** — narsa; **that** — ikkalasi; **where** — joy; **whose** — kimning (*whose* + ot, artiklsiz).",
    "Nisbiy so'z **to'ldiruvchi** bo'lsa tushirsa bo'ladi: *The film (that) we saw*. **Ega** bo'lsa (keyin fe'l) tushirib bo'lmaydi.",
    "Predlog odatda oxirda turadi: *the house we live in, the girl I talked to*.",
    "Xatolar: ~~who he lives~~, ~~the film what~~, ~~where ... there~~. Olmoshni takrorlamang, *what* ishlatmang.",
  ],
  homework: "Atrofingizdagi 6 ta odam yoki narsani ta'riflang: *My friend Ali is a person who…, My phone is a device which…, My street is the place where…*. Ikkita gapda **whose**, ikkitasida to'ldiruvchi nisbiy so'zni tushirib yozing.",
};

export default lesson;
