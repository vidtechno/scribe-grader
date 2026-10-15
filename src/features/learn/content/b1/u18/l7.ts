import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u18-l7",
  title: "Writing a short biography",
  titleUz: "Yozish: qisqa tarjimai hol",
  goal: "Odam hayoti haqida 8-10 gapli **qisqa tarjimai hol** (biography) yozasiz: **Past Simple** bilan o'tmishni, **Present Perfect** bilan hozirgacha davom etayotgan narsalarni aytasiz va gaplarni **later, afterwards, at the age of, since then** kabi so'zlar bilan bog'laysiz.",
  slides: [
    {
      title: "Tarjimai hol qanday tuziladi",
      blocks: [
        { t: "p", md: "**Biography** (tarjimai hol) — kimdir hayotining qisqa hikoyasi. Yaxshi biografiya tartibli bo'ladi: avval kimligi, keyin bolaligi, o'qishi, ishi va nihoyat hozirgi holati. Xuddi shu tartibda yozsangiz, o'quvchi hammasini oson tushunadi." },
        {
          t: "table", head: ["Qism", "Nimani yozasiz", "Misol"], speak: [2],
          rows: [
            ["1. Kirish", "ism, qachon va qayerda tug'ilgan", "Aziza Karimova was born in Samarkand in 1988."],
            ["2. Bolalik", "oilasi, o'sgan joyi", "She grew up in a family of teachers."],
            ["3. O'qish", "maktab, universitet", "She graduated from university in 2010."],
            ["4. Ish va yutuqlar", "ishi, mukofotlar", "She won an award for her first book."],
            ["5. Hozir", "hozirgi hayoti va rejalari", "She has lived in Tashkent since 2015."],
          ],
        },
        { t: "tip", tone: "info", md: "Kirish gapida odatda **was / were born** ishlatiladi. Bu qolipni biografiyaning boshiga qo'ying: *Name + was born in + joy + in + yil.*" },
        { t: "check", ex: { k: "choice", q: "Which sentence is the best opening for a biography?", opts: ["Tom Brown was born in Leeds in 1985.", "Tom Brown is born in Leeds in 1985.", "Tom Brown has born in Leeds in 1985.", "Tom Brown born in Leeds in 1985."], a: 0, why: "**was born** — Past Simple passive." } },
      ],
    },
    {
      title: "Zamonlar: o'tmish va hozirgacha",
      blocks: [
        { t: "p", md: "Tarjimai holda ikkita asosiy zamon ishlatiladi. Tugagan va aniq vaqtli voqealar uchun **Past Simple**. Hozirgacha davom etayotgan narsalar yoki hozir ham muhim bo'lgan natijalar uchun **Present Perfect**." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["He studied law in London from 2005 to 2009.", "He has worked for the same company since 2012.", "She has written five books so far."] },
          bad: { title: "Xato", items: ["He has studied law in London in 2007.", "He works for the same company since 2012.", "She wrote five books so far."] },
        },
        { t: "tip", tone: "warn", md: "Hayoti tugagan odam haqida (masalan, tarixiy shaxs) faqat **Past Simple** ishlatiladi: *Navoi wrote many poems.* Present Perfect faqat odam hali tirik va hikoya hozirgacha davom etayotganda kerak: *She has won three awards.*" },
        { t: "check", ex: { k: "fill", q: "He ___ in this hospital since 2014. (work)", a: ["has worked", "has been working"], why: "**since 2014** — hozirgacha davom etayotgan ish → Present Perfect (yoki Continuous)." } },
        { t: "check", ex: { k: "fill", q: "She ___ to Berlin in 2016. (move)", a: ["moved"], why: "**in 2016** — aniq vaqt → Past Simple." } },
      ],
    },
    {
      title: "Bog'lovchi so'zlar",
      blocks: [
        { t: "p", md: "Faqat «She did this. She did that.» deb yozish zerikarli. Gaplarni vaqt so'zlari bilan bog'lang — shunda matn bir butun hikoya bo'ladi." },
        {
          t: "table", head: ["So'z yoki ibora", "Ma'nosi", "Misol"], speak: [2],
          rows: [
            ["at the age of …", "… yoshida", "He started school at the age of six."],
            ["when he was ten", "o'n yoshida bo'lganda", "When she was ten, her family moved."],
            ["after that / afterwards", "undan keyin", "He studied medicine. Afterwards, he became a doctor."],
            ["later", "keyinroq", "Later, she opened her own shop."],
            ["eventually", "oxir-oqibat", "Eventually, he found a job he loved."],
            ["since then", "o'shandan beri", "She joined the team in 2018 and has played for it since then."],
          ],
        },
        { t: "tip", tone: "good", md: "**since then** doim **Present Perfect** bilan keladi (chunki hozirgacha). **later, afterwards, eventually** esa o'tgan voqealarni bog'laydi, ya'ni **Past Simple** bilan." },
        { t: "check", ex: { k: "choice", q: "She won the prize in 2015. ___, she has written two more novels.", opts: ["Since then", "Eventually", "Two years ago", "When she was ten"], a: 0, why: "Hozirgacha davom etayotgan voqea → **Since then** + Present Perfect." } },
        { t: "check", ex: { k: "fill", q: "He began to play the piano ___ the age of five.", a: ["at"], why: "**at the age of** + yosh." } },
      ],
    },
    {
      title: "Namuna: Aziza Karimova",
      blocks: [
        {
          t: "text", title: "A short biography", voice: "emma",
          en: "Aziza Karimova was born in Samarkand in 1988. She grew up in a family of teachers, and she loved books from an early age. At the age of eighteen, she moved to Tashkent to study journalism. She graduated in 2010 and soon found a job at a local newspaper. Later, she began to write stories about ordinary people. In 2014 her first book won a national award. Since then she has written four more books and has travelled to more than twenty countries to meet readers. Today she lives in Tashkent with her husband and their two children. She says that she is still learning something new every day.",
          uz: "Aziza Karimova 1988-yilda Samarqandda tug'ilgan. U o'qituvchilar oilasida o'sgan va bolaligidan kitoblarni yaxshi ko'rgan. O'n sakkiz yoshida jurnalistika o'qish uchun Toshkentga ko'chgan. U 2010-yilda bitirgan va tez orada mahalliy gazetada ish topgan. Keyinroq oddiy odamlar haqida hikoyalar yoza boshlagan. 2014-yilda uning birinchi kitobi milliy mukofot olgan. O'shandan beri u yana to'rtta kitob yozgan va o'quvchilar bilan uchrashish uchun yigirmadan ortiq mamlakatga sayohat qilgan. Bugun u eri va ikki farzandi bilan Toshkentda yashaydi. U har kuni yangi narsa o'rganayotganini aytadi.",
        },
        { t: "check", ex: { k: "tf", q: "Aziza has written one book.", a: false, why: "Birinchi kitobdan keyin **yana to'rtta kitob** yozgan (*four more books*), demak jami beshta." } },
        { t: "check", ex: { k: "choice", q: "Which tense does the writer use for \"has written four more books\"?", opts: ["Present Perfect, because it is true up to now.", "Past Simple, because it is finished.", "Future, because it is a plan.", "Present Simple, because it is a habit."], a: 0, why: "**since then** + Present Perfect — hozirgacha davom etgan natija." } },
      ],
    },
    {
      title: "Yozishdan oldin: reja va tekshiruv",
      blocks: [
        { t: "p", md: "O'zingiz yoki oila a'zongiz haqida biografiya yozmoqchi bo'lsangiz, quyidagi 5 qadamni bajaring:" },
        {
          t: "examples", items: [
            { en: "Make notes: dates, places, jobs, achievements.", uz: "Qaydlar tuzing: sanalar, joylar, ishlar, yutuqlar." },
            { en: "Put the events in time order.", uz: "Voqealarni vaqt tartibida joylang." },
            { en: "Use Past Simple for finished events and Present Perfect for the present.", uz: "Tugagan voqealar uchun Past Simple, hozirgi holat uchun Present Perfect ishlating." },
            { en: "Join your sentences with linking words.", uz: "Gaplarni bog'lovchi so'zlar bilan ulang." },
            { en: "Read it again and check the verbs and dates.", uz: "Qayta o'qib, fe'llar va sanalarni tekshiring." },
          ],
        },
        { t: "tip", tone: "info", md: "Har bir gapni boshqa so'z bilan boshlashga harakat qiling. Agar ketma-ket 3 ta gap **He** yoki **She** bilan boshlansa, biri o'rniga *Later, …* yoki *In 2014, …* deb yozing." },
        { t: "check", ex: { k: "fix", wrong: "She has moved to Tashkent in 2010.", a: ["She moved to Tashkent in 2010."], hint: "Aniq yil bor", why: "**in 2010** — aniq vaqt, shuning uchun Past Simple." } },
      ],
    },
  ],
  words: [
    { en: "biography", uz: "tarjimai hol", ipa: "baɪˈɒɡ.rə.fi", pos: "noun", ex: "I read a short biography of a famous scientist.", exUz: "Mashhur olim haqida qisqa tarjimai holni o'qidim." },
    { en: "childhood", uz: "bolalik", ipa: "ˈtʃaɪld.hʊd", pos: "noun", ex: "He had a happy childhood in the countryside.", exUz: "U qishloqda baxtli bolalik o'tkazgan." },
    { en: "career", uz: "kasbiy yo'l, martaba", ipa: "kəˈrɪər", pos: "noun", ex: "She began her career as a teacher.", exUz: "U o'z faoliyatini o'qituvchilikdan boshlagan." },
    { en: "award", uz: "mukofot", ipa: "əˈwɔːd", pos: "noun", ex: "The film won an international award.", exUz: "Film xalqaro mukofot oldi." },
    { en: "inspire", uz: "ilhomlantirmoq", ipa: "ɪnˈspaɪər", pos: "verb", ex: "Her story inspired many young people.", exUz: "Uning hikoyasi ko'plab yoshlarni ilhomlantirdi." },
    { en: "eventually", uz: "oxir-oqibat", ipa: "ɪˈven.tʃu.ə.li", pos: "adv", ex: "Eventually, she became the manager of the company.", exUz: "Oxir-oqibat u kompaniya rahbari bo'ldi." },
    { en: "afterwards", uz: "keyin, undan so'ng", ipa: "ˈɑːf.tə.wədz", pos: "adv", ex: "He studied law and worked as a lawyer afterwards.", exUz: "U huquqshunoslik o'qidi va keyin yurist bo'lib ishladi." },
    { en: "at the age of", uz: "… yoshida", ipa: "æt ðə eɪdʒ əv", pos: "phrase", ex: "She learned to swim at the age of four.", exUz: "U to'rt yoshida suzishni o'rgandi." },
    { en: "since then", uz: "o'shandan beri", ipa: "sɪns ðen", pos: "phrase", ex: "I met him in 2019 and we have been friends since then.", exUz: "Uni 2019-yilda uchratdim va o'shandan beri do'stmiz." },
    { en: "well-known", uz: "taniqli", ipa: "wel nəʊn", pos: "adj", ex: "He is a well-known doctor in our city.", exUz: "U shaharimizdagi taniqli shifokor." },
  ],
  practice: [
    { k: "match", pairs: [["biography", "tarjimai hol"], ["childhood", "bolalik"], ["career", "kasbiy yo'l"], ["award", "mukofot"], ["well-known", "taniqli"]] },
    { k: "choice", q: "He was born ___ 1975.", opts: ["in", "at", "on", "since"], a: 0, why: "Yil bilan: **in 1975**." },
    { k: "choice", q: "She learned to read ___ the age of five.", opts: ["at", "in", "on", "by"], a: 0, why: "**at the age of**." },
    { k: "fill", q: "He has lived in Almaty ___ then. (since / for)", a: ["since"], why: "**since then** — o'shandan beri." },
    { k: "fill", q: "She studied medicine and, ___, she worked in a small hospital.", a: ["afterwards", "later"], why: "Voqealarni bog'laydigan so'z: **afterwards / later**." },
    { k: "fill", q: "In 2012 he ___ a prize for his first film. (win)", a: ["won"], why: "**in 2012** — Past Simple." },
    { k: "order", uz: "U 1990-yilda Buxoroda tug'ilgan.", words: ["He", "was", "born", "in", "Bukhara", "in", "1990."], extra: ["is", "has"], why: "**was born in … in …**" },
    { k: "order", uz: "O'shandan beri u uchta kitob yozgan.", words: ["Since", "then,", "she", "has", "written", "three", "books."], extra: ["wrote", "ago"], alt: [["Since", "then", "she", "has", "written", "three", "books."], ["She", "has", "written", "three", "books", "since", "then."]], why: "**since then** + Present Perfect." },
    { k: "fix", wrong: "She has finished university in 2018.", a: ["She finished university in 2018.", "She graduated from university in 2018."], hint: "aniq yil", why: "**in 2018** bilan Past Simple." },
    { k: "fix", wrong: "He is working here since 2015.", a: ["He has worked here since 2015.", "He has been working here since 2015."], hint: "since", why: "**since** bilan Present Perfect." },
    { k: "translate", uz: "U o'n sakkiz yoshida Toshkentga ko'chib o'tdi.", a: ["He moved to Tashkent at the age of eighteen.", "She moved to Tashkent at the age of eighteen.", "He moved to Tashkent at the age of 18.", "She moved to Tashkent at the age of 18.", "At the age of eighteen, he moved to Tashkent.", "At the age of eighteen, she moved to Tashkent.", "At the age of 18, he moved to Tashkent.", "At the age of 18, she moved to Tashkent."], why: "**at the age of** + Past Simple." },
    { k: "tf", q: "In a biography of a person who died long ago, we use Past Simple.", a: true, why: "Hayoti tugagan odam haqida Past Simple ishlatiladi." },
    { k: "speak", say: "She was born in a small town and moved to the capital at the age of twenty.", uz: "U kichik shaharda tug'ilgan va yigirma yoshida poytaxtga ko'chgan." },
  ],
  quiz: [
    { k: "choice", q: "Alisher Navoi ___ many beautiful poems.", opts: ["wrote", "has written", "writes", "is writing"], a: 0, why: "Hayoti tugagan shaxs → Past Simple." },
    { k: "choice", q: "She ___ five novels so far.", opts: ["has written", "wrote", "writes", "was writing"], a: 0, why: "**so far** → Present Perfect." },
    { k: "choice", q: "He moved to Seoul in 2015, and he ___ there since then.", opts: ["has lived", "lived", "lives", "was living"], a: 0, why: "**since then** → Present Perfect." },
    { k: "fill", q: "He went to university and, ___, became a lawyer.", a: ["later", "afterwards", "eventually"], why: "Voqealarni bog'laydigan so'z." },
    { k: "fill", q: "She was ___ in Tashkent in 1993.", a: ["born"], why: "**was born**." },
    { k: "fill", q: "When he was ten, his family ___ to a new town. (move)", a: ["moved"], why: "Tugagan voqea → Past Simple." },
    { k: "listen", say: "Since then, she has written three books.", opts: ["Since then, she has written three books.", "Since then, she wrote three books.", "Three years ago, she has written books.", "Since then, she writes three books."], a: 0, why: "**Since then** + Present Perfect." },
    { k: "fix", wrong: "He has won the prize last year.", a: ["He won the prize last year."], hint: "last year", why: "**last year** bilan Past Simple." },
    { k: "order", uz: "U yigirma yoshida o'qishni bitirgan.", words: ["She", "graduated", "at", "the", "age", "of", "twenty."], extra: ["in", "has"], alt: [["She", "graduated", "at", "the", "age", "of", "20."]], why: "**at the age of**." },
    { k: "translate", uz: "Oxir-oqibat u o'z kompaniyasini ochdi.", a: ["Eventually, he opened his own company.", "Eventually, she opened her own company.", "Eventually he opened his own company.", "Eventually she opened her own company."], why: "**eventually** + Past Simple." },
  ],
  summary: [
    "Biografiya tartibi: **tug'ilish, bolalik, o'qish, ish va yutuqlar, hozir**.",
    "Boshlanishi: **Name was born in (joy) in (yil).** Tugagan voqealar — **Past Simple**.",
    "Hozirgacha davom etgan narsalar — **Present Perfect**: *has lived … since 2015*, *has written five books so far*.",
    "Bog'lash: **at the age of, when he was ten, later, afterwards, eventually, since then**.",
    "Yozgandan keyin tekshiring: aniq yil bo'lsa Past Simple, *since / for* bo'lsa Present Perfect.",
  ],
  homework: "8-10 gapdan iborat o'zingiz yoki yaqin odamingiz haqida tarjimai hol yozing. Tartib: tug'ilish, bolalik, o'qish, ish, hozir. Kamida 3 ta bog'lovchi so'z (*later, at the age of, since then*) va kamida 1 ta Present Perfect gap ishlating.",
};

export default lesson;
