import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u21-l3",
  title: "Non-defining relative clauses",
  titleUz: "Qo'shimcha ma'lumot beruvchi nisbiy gaplar (vergul bilan)",
  goal: "Odam yoki joy haqida **qo'shimcha ma'lumot** berasiz: *My brother, who lives in London, is a doctor. Samarkand, which is a very old city, is famous for the Registan.* Vergullarni to'g'ri qo'yasiz, bu yerda **that** ishlatilmasligini va **which** butun gapga ham tegishli bo'la olishini bilasiz.",
  slides: [
    {
      title: "Qo'shimcha ma'lumot: ikki vergul orasida",
      blocks: [
        { t: "p", md: "Oldingi darsda nisbiy gap «**qaysi** odam?» degan savolga javob berardi va usiz gap to'liq bo'lmasdi. Bugun esa nisbiy gap faqat **qo'shimcha, qiziq ma'lumot** beradi. Gap undan **oldin ham to'liq** bo'ladi. Bunday gap **ikki vergul orasida** yoziladi (gapning oxirida bo'lsa, bitta vergul)." },
        {
          t: "table", head: ["Aniqlovchi (vergulsiz)", "Qo'shimcha (vergul bilan)"],
          rows: [
            ["The man who lives next door is a doctor.", "Mr Karimov, who lives next door, is a doctor."],
            ["The city that I like best is Bukhara.", "Bukhara, which is a very old city, is famous for its bazaars."],
            ["The school where I studied is closed.", "My school, where I studied for ten years, is closed."],
          ],
        },
        { t: "p", md: "Ismi bor odam yoki joy (*Mr Karimov, Bukhara, my school*) allaqachon aniq. Shuning uchun nisbiy gap uni aniqlamaydi, faqat **ma'lumot qo'shadi**. Gapirishda bu qismni **past ovoz** va **qisqa pauza** bilan aytamiz." },
        { t: "check", ex: { k: "choice", q: "Qaysi gap to'g'ri yozilgan?", opts: ["Mr Karimov, who is our teacher, is ill.", "Mr Karimov who is our teacher is ill.", "Mr Karimov, who is our teacher is ill.", "Mr Karimov who, is our teacher, is ill."], a: 0, why: "Qo'shimcha qism **ikki vergul** orasida: *Mr Karimov, who is our teacher, is ill.*" } },
      ],
    },
    {
      title: "Qoidalar: who, which, where, whose",
      blocks: [
        { t: "p", md: "Qo'shimcha nisbiy gaplarda ham *who, which, where, whose* ishlatiladi. Lekin ikki muhim farq bor." },
        {
          t: "table", head: ["So'z", "Misol"], speak: [1],
          rows: [
            ["who", "My sister, who is a nurse, works at night."],
            ["which", "The Registan, which is in Samarkand, is world famous."],
            ["where", "We visited Khiva, where my grandparents were born."],
            ["whose", "Dr Aliyev, whose book became a bestseller, will visit us."],
          ],
        },
        { t: "tip", tone: "warn", md: "**1) That ishlatilmaydi.** *My mother, that is a teacher* — xato. To'g'risi: **who**. **2) Nisbiy so'zni tushirib bo'lmaydi**, hatto to'ldiruvchi bo'lsa ham: *Bukhara, which I visited last year, is beautiful.* (*Bukhara, I visited last year* — xato)." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["My mother, who is a teacher, works hard.", "Tashkent, which is the capital, is very big.", "Our boss, whose office is upstairs, is away."] },
          bad: { title: "Xato", items: ["My mother, that is a teacher, works hard.", "Tashkent which is the capital is very big.", "Our boss, his office is upstairs, is away."] },
        },
        { t: "check", ex: { k: "fix", wrong: "My mother, that is a teacher, works hard.", a: ["My mother, who is a teacher, works hard."], hint: "vergul bilan that bo'lmaydi", why: "Qo'shimcha nisbiy gapda **that** yo'q: odam uchun **who**." } },
        { t: "check", ex: { k: "fill", q: "Tashkent, ___ is the capital of Uzbekistan, is a big city.", a: ["which"], why: "Shahar — narsa/joy, vergul bor → **which**." } },
      ],
    },
    {
      title: "Ma'no farqi: vergul bor yoki yo'q",
      blocks: [
        { t: "p", md: "Ba'zan vergul gapning **ma'nosini** o'zgartiradi. Ikki gapni solishtiring:" },
        {
          t: "examples", items: [
            { en: "My brother who lives in London is a doctor.", uz: "Londonda yashaydigan akam shifokor.", note: "Bir nechta akam bor. Aynan **Londonda yashaydigani** shifokor." },
            { en: "My brother, who lives in London, is a doctor.", uz: "Akam, u Londonda yashaydi, shifokor.", note: "Faqat bitta akam bor. Londonda yashashi — qo'shimcha ma'lumot." },
          ],
        },
        { t: "tip", tone: "info", md: "Yagona narsa yoki odam haqida (*my mother, the sun, Tashkent, my phone*) odatda **vergulli** shakl ishlatiladi, chunki ular allaqachon aniq." },
        { t: "check", ex: { k: "tf", q: "*My sister, who is a nurse, works at night.* gapi opam bitta ekanini ko'rsatadi.", a: true, why: "Vergul — ma'lumot qo'shimcha, ya'ni opa allaqachon aniq (bitta)." } },
        { t: "check", ex: { k: "choice", q: "Qaysi gap yagona narsa haqida?", opts: ["The sun, which is a star, gives us light.", "The coat which is on the chair is mine.", "The students who passed got a prize.", "A man who I met was kind."], a: 0, why: "Quyosh yagona, shuning uchun ma'lumot qo'shimcha: vergul + **which**." } },
      ],
    },
    {
      title: "Which = butun gap haqida",
      blocks: [
        { t: "p", md: "**Which** ot haqida emas, **butun oldingi gap** haqida fikr bildirishi mumkin. Bunda faqat vergul + **which** ishlatiladi." },
        {
          t: "examples", items: [
            { en: "He passed his driving test, which surprised everyone.", uz: "U haydovchilik imtihonidan o'tdi, bu hammani hayratga soldi." },
            { en: "The train was late, which made me angry.", uz: "Poyezd kechikdi, bu meni jahlimni chiqardi." },
            { en: "She speaks four languages, which is very useful in her job.", uz: "U to'rt tilda gapiradi, bu ishida juda foydali." },
          ],
        },
        { t: "tip", tone: "warn", md: "Bu o'rinda faqat **which** to'g'ri: *The train was late, ~~that~~ made me angry* — xato. O'zbekchadagi «bu» (*bu meni jahlimni chiqardi*) ga mos keladi." },
        { t: "check", ex: { k: "choice", q: "The shop was closed, ___ was a problem.", opts: ["which", "who", "that", "what"], a: 0, why: "Butun gap haqida → vergul + **which**." } },
        { t: "check", ex: { k: "order", uz: "Men imtihondan o'tdim, bu meni juda xursand qildi.", words: ["I", "passed", "the", "exam,", "which", "made", "me", "very", "happy."], extra: ["that", "what"], why: "Butun gap haqida: **, which**." } },
      ],
    },
    {
      title: "O'qing: Mashhur yozuvchi",
      blocks: [
        {
          t: "text", title: "A talented author",
          en: "Rustam Aliyev, who is a talented young author, grew up in a small village. His first book, which he wrote at the age of twenty-two, became very popular. He now lives in Tashkent, where he teaches writing at a local school. His wife, whose work is with a charity, is a volunteer too. Rustam is a very generous man, which is why many people like him. He often says that the best stories come from ordinary people.",
          uz: "Rustam Aliyev — iqtidorli yosh yozuvchi, kichik qishloqda o'sgan. Uning birinchi kitobi, uni yigirma ikki yoshida yozgan, juda mashhur bo'ldi. Hozir u Toshkentda yashaydi va u yerda mahalliy maktabda yozish san'atidan dars beradi. Uning rafiqasi, xayriya tashkilotida ishlaydi, u ham ko'ngilli. Rustam juda saxiy inson, shuning uchun uni ko'pchilik yaxshi ko'radi. U ko'pincha eng yaxshi hikoyalar oddiy odamlardan chiqadi, deydi.",
        },
        { t: "check", ex: { k: "tf", q: "Rustam teaches writing in Tashkent.", a: true, why: "*He now lives in Tashkent, where he teaches writing.*" } },
        { t: "check", ex: { k: "choice", q: "What is special about Rustam's first book?", opts: ["It became very popular.", "It was written in a village school.", "It is about charity.", "His wife wrote it."], a: 0, why: "*His first book … became very popular.*" } },
      ],
    },
    {
      title: "Dialog: Oilaviy suratlar",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Helen", en: "Who is the man in this photo, Tom?", uz: "Bu suratdagi erkak kim, Tom?" },
            { who: "Tom", en: "That's my uncle Jack, who lives in Canada. He is a scientist.", uz: "Bu amakim Jek, Kanadada yashaydi. U olim." },
            { who: "Helen", en: "And this house? It's lovely.", uz: "Bu uy-chi? Juda chiroyli." },
            { who: "Tom", en: "That's my grandparents' farm, where I spent every summer as a child.", uz: "Bu bobo-buvimning fermasi, bolaligimda har yozni o'sha yerda o'tkazganman." },
            { who: "Helen", en: "Is this your sister, who is a singer?", uz: "Bu singling, qo'shiqchi bo'lgan singlingmi?" },
            { who: "Tom", en: "Yes, that's Anna. She is very talented, which is lucky for our family!", uz: "Ha, bu Anna. U juda iqtidorli, bu oilamiz uchun omad!" },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Tom's uncle is a singer.", a: false, why: "Amakisi — **scientist** (olim). Qo'shiqchi — singlisi Anna." } },
      ],
    },
  ],
  words: [
    { en: "author", uz: "muallif, yozuvchi", ipa: "ˈɔː.θər", pos: "noun", ex: "The author of this book lives in Samarkand.", exUz: "Bu kitobning muallifi Samarqandda yashaydi." },
    { en: "founder", uz: "asoschi", ipa: "ˈfaʊn.dər", pos: "noun", ex: "The founder of the company is only thirty.", exUz: "Kompaniya asoschisi atigi o'ttiz yoshda." },
    { en: "scientist", uz: "olim", ipa: "ˈsaɪ.ən.tɪst", pos: "noun", ex: "My uncle is a scientist at a university.", exUz: "Amakim universitetda olim." },
    { en: "celebrity", uz: "mashhur shaxs, yulduz", ipa: "səˈleb.rə.ti", pos: "noun", ex: "She became a celebrity after the show.", exUz: "U ko'rsatuvdan keyin mashhur bo'lib ketdi." },
    { en: "talented", uz: "iqtidorli, qobiliyatli", ipa: "ˈtæl.ən.tɪd", pos: "adj", ex: "She is a talented young painter.", exUz: "U iqtidorli yosh rassom." },
    { en: "wealthy", uz: "boy, badavlat", ipa: "ˈwel.θi", pos: "adj", ex: "He comes from a wealthy family.", exUz: "U badavlat oiladan." },
    { en: "generous", uz: "saxiy, mehribon", ipa: "ˈdʒen.ər.əs", pos: "adj", ex: "It was very generous of you to help.", exUz: "Yordam berganingiz juda saxiylik edi." },
    { en: "reliable", uz: "ishonchli", ipa: "rɪˈlaɪ.ə.bəl", pos: "adj", ex: "Our driver is polite and reliable.", exUz: "Haydovchimiz xushmuomala va ishonchli." },
    { en: "local", uz: "mahalliy", ipa: "ˈləʊ.kəl", pos: "adj", ex: "I buy my vegetables at the local market.", exUz: "Sabzavotni mahalliy bozordan olaman." },
    { en: "originally", uz: "dastlab, aslida", ipa: "əˈrɪdʒ.ən.əl.i", pos: "adv", ex: "My family is originally from Namangan.", exUz: "Oilam aslida Namanganlik." },
  ],
  practice: [
    { k: "choice", q: "My sister, ___ lives in Dubai, is a nurse.", opts: ["who", "that", "which", "where"], a: 0, why: "Vergul bor, odam → **who**. **That** bu yerda ishlatilmaydi." },
    { k: "choice", q: "Samarkand, ___ is a very old city, is famous for the Registan.", opts: ["which", "who", "that", "whose"], a: 0, why: "Shahar, vergul bor → **which**." },
    { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["Mr Karimov, who is our teacher, is ill.", "Mr Karimov, that is our teacher, is ill.", "Mr Karimov, he is our teacher, is ill.", "Mr Karimov who is our teacher is ill."], a: 0, why: "Vergul + **who** + vergul." },
    { k: "listen", say: "My brother, who lives in London, is a doctor.", opts: ["My brother, who lives in London, is a doctor.", "My brother, who lived in London, is a doctor.", "My brothers, who live in London, are doctors.", "My brother, who works in London, is a doctor."], a: 0, why: "**who lives** — hozirgi zamon, birlik." },
    { k: "fill", q: "Tashkent, ___ is the capital, is a big city.", a: ["which"], uz: "Poytaxt bo'lgan Toshkent katta shahar.", why: "Joy/narsa, qo'shimcha ma'lumot → **which**." },
    { k: "fill", q: "We visited Bukhara, ___ my grandparents were born.", a: ["where"], uz: "Biz Buxoroga bordik, bobo-buvilarim o'sha yerda tug'ilgan.", why: "Joy → **where**." },
    { k: "fill", q: "Dr Aliyev, ___ book became a bestseller, will visit us.", a: ["whose"], uz: "Kitobi eng ko'p sotilgan Aliyev doktor bizni ziyorat qiladi.", why: "Kimning kitobi → **whose**." },
    { k: "order", uz: "Mening o'qituvchim, u Shotlandiyalik, sekin gapiradi.", words: ["My", "teacher,", "who", "is", "from", "Scotland,", "speaks", "slowly."], extra: ["that", "which"], why: "Odam, vergul bilan → **who**." },
    { k: "order", uz: "Biz Grand mehmonxonasida qoldik, u juda qulay edi.", words: ["We", "stayed", "at", "the", "Grand", "Hotel,", "which", "was", "very", "comfortable."], extra: ["who", "that"], why: "Joy/narsa, vergul bilan → **which**." },
    { k: "translate", uz: "Mening yagona akam, Londonda yashaydi, shifokor.", a: ["My only brother, who lives in London, is a doctor.", "My only brother, who is living in London, is a doctor."], why: "Yagona akam — qo'shimcha ma'lumot: vergul + **who**." },
    { k: "translate", uz: "Poyezd kechikdi, bu meni jahlimni chiqardi.", a: ["The train was late, which made me angry.", "The train was late, which annoyed me.", "The train was late, which made me annoyed."], why: "Butun gap haqida → **, which**." },
    { k: "fix", wrong: "My mother, that is a teacher, works hard.", a: ["My mother, who is a teacher, works hard."], hint: "vergul bilan that bo'lmaydi", why: "Qo'shimcha nisbiy gapda **that** ishlatilmaydi." },
    { k: "fix", wrong: "Bukhara, I visited last year, is beautiful.", a: ["Bukhara, which I visited last year, is beautiful."], hint: "nisbiy so'z kerak", why: "Qo'shimcha nisbiy gapda nisbiy so'zni tushirib bo'lmaydi: **which**." },
    { k: "match", pairs: [["author", "muallif, yozuvchi"], ["founder", "asoschi"], ["generous", "saxiy"], ["reliable", "ishonchli"], ["wealthy", "boy, badavlat"]] },
    { k: "tf", q: "Vergulli nisbiy gapni olib tashlasak ham, asosiy gap tushunarli bo'ladi.", a: true, why: "Bu **qo'shimcha** ma'lumot: *Tashkent is a big city.*" },
    { k: "dictation", say: "He passed his driving test, which surprised everyone.", uz: "U haydovchilik imtihonidan o'tdi, bu hammani hayratga soldi.", why: "**, which** butun gap haqida." },
    { k: "speak", say: "Samarkand, which is a very old city, is famous for the Registan.", uz: "Samarqand, juda qadimiy shahar, Registoni bilan mashhur." },
  ],
  quiz: [
    { k: "choice", q: "Our boss, ___ office is upstairs, is away today.", opts: ["whose", "who", "which", "where"], a: 0, why: "Kimning ofisi → **whose**." },
    { k: "choice", q: "Khiva, ___ is in the west of Uzbekistan, has many old walls.", opts: ["which", "who", "whose", "that"], a: 0, why: "Joy, vergul bor → **which**." },
    { k: "choice", q: "She speaks four languages, ___ is very useful in her job.", opts: ["which", "that", "who", "what"], a: 0, why: "Butun gap haqida → **, which**." },
    { k: "choice", q: "Qaysi gapda vergul yetishmayapti?", opts: ["Tashkent which is the capital is very big.", "Tashkent, which is the capital, is very big.", "The city that I like is Bukhara.", "My phone is on the table."], a: 0, why: "Qo'shimcha qism ikki vergul orasida bo'lishi kerak." },
    { k: "fill", q: "My uncle, ___ is a scientist, lives in Canada.", a: ["who"], uz: "Amakim, u olim, Kanadada yashaydi.", why: "Odam, vergul bilan → **who**." },
    { k: "fill", q: "The Registan, ___ is in Samarkand, is world famous.", a: ["which"], uz: "Samarqanddagi Registon butun dunyoga mashhur.", why: "Joy, vergul bilan → **which**." },
    { k: "order", uz: "Men Namanganda tug'ilganman, u yerda oilam hozir ham yashaydi.", words: ["I", "was", "born", "in", "Namangan,", "where", "my", "family", "still", "lives."], extra: ["which", "who"], why: "Joy → **, where**." },
    { k: "translate", uz: "Bu yozuvchi, uning kitoblari mashhur, bizning shaharda yashaydi.", a: ["This author, whose books are famous, lives in our city.", "This author, whose books are popular, lives in our city.", "This author, whose books are famous, lives in our town."], why: "Kimning kitoblari → **whose**." },
    { k: "fix", wrong: "My uncle, he is a scientist, lives in Canada.", a: ["My uncle, who is a scientist, lives in Canada."], hint: "nisbiy so'z kerak", why: "Qo'shimcha ma'lumot **who** bilan beriladi, olmosh (*he*) emas." },
    { k: "tf", q: "*My sister, that is a nurse, works at night.* — bu gap to'g'ri.", a: false, why: "Vergul bilan **that** ishlatilmaydi: **who**." },
  ],
  summary: [
    "**Qo'shimcha nisbiy gap** ma'lumot qo'shadi, usiz ham gap to'liq. U **ikki vergul** orasida yoziladi: *Mr Karimov, who lives next door, is a doctor.*",
    "Odam → **who**, narsa → **which**, joy → **where**, egalik → **whose**. Bu yerda **that ishlatilmaydi**.",
    "Nisbiy so'zni **tushirib bo'lmaydi**: *Bukhara, which I visited last year, is beautiful.*",
    "Vergul ma'noni o'zgartiradi: *my brother who lives in London* (bir nechtasidan biri) va *my brother, who lives in London* (yagona).",
    "**, which** butun oldingi gap haqida fikr bildiradi: *The train was late, which made me angry.*",
  ],
  homework: "Oilangiz yoki do'stlaringiz haqida 5 ta gap yozing, har birida vergulli nisbiy gap bo'lsin (*My sister, who…, Our city, which…, My school, where…*). Bitta gapda **, which** ni butun gap haqida ishlating.",
};

export default lesson;
