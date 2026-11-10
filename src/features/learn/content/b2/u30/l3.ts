import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u30-l3",
  title: "Relative clauses: advanced",
  titleUz: "Nisbiy gaplar B2: whose, of which, whom, qisqargan nisbiy gaplar, where / when / why",
  goal: "**Nisbiy gaplarni** B2 darajada ishlatasiz: *whose, whom, to whom, some of whom, all of which*, butun gapga qaytuvchi **which**, qisqargan shakllar (*the man standing there, the book written by…*) va **where / when / why**. **The man who I spoke to him** kabi xatodan qochasiz va vergulni to'g'ri qo'yasiz.",
  slides: [
    {
      title: "Nima uchun kerak?",
      blocks: [
        { t: "p", md: "Nisbiy gap (*relative clause*) ikkita gapni bitta murakkab gapga birlashtiradi: *I have a friend. Her brother works abroad.* → *I have a friend **whose brother** works abroad.* IELTS Writing va Speaking da bu aniq va ravon fikr bildirishning belgisi." },
        {
          t: "table", head: ["So'z", "Nimaga qaytadi", "Misol"], speak: [2],
          rows: [
            ["who / that", "odam (ega)", "The woman who lives next door is a nurse."],
            ["which / that", "narsa", "The film which won the prize was short."],
            ["whose", "egalik", "I know a man whose son plays for a club."],
            ["whom", "odam (to'ldiruvchi, rasmiy)", "The colleague whom I met was friendly."],
            ["where / when / why", "joy / vaqt / sabab", "That is the street where I grew up."],
          ],
        },
        { t: "tip", tone: "info", md: "**Defining** (aniqlovchi) nisbiy gap ot haqida **kerakli** ma'lumot beradi, vergul **yo'q**. **Non-defining** (qo'shimcha) gap **qo'shimcha** ma'lumot beradi, vergul **bor**, va unda **that** ishlatilmaydi." },
        { t: "check", ex: { k: "choice", q: "*My brother, ___ lives in Dubai, is an engineer.*", opts: ["who", "that", "whose", "whom"], a: 0, why: "Vergulli (non-defining) gapda **that** bo'lmaydi; ega bo'lgan odam uchun **who**." } },
      ],
    },
    {
      title: "Whose, whom va predlog",
      blocks: [
        { t: "p", md: "**Whose** odam (ba'zan narsa) egaligini bildiradi va **ot** bilan birga keladi: *a teacher **whose lessons** are always interesting*. **Whose** dan keyin **his / her** kelmaydi." },
        { t: "p", md: "**Whom** — to'ldiruvchi vazifasida (rasmiy). Predlog bilan ikki xil tuzish mumkin:" },
        {
          t: "table", head: ["Rasmiy (predlog oldinda)", "Norasmiy (predlog oxirida)"], speak: [0, 1],
          rows: [
            ["The person to whom I spoke was helpful.", "The person I spoke to was helpful."],
            ["The company for which she works is large.", "The company she works for is large."],
            ["The friend with whom I travelled lives abroad.", "The friend (who) I travelled with lives abroad."],
          ],
        },
        { t: "tip", tone: "warn", md: "Predlog oldinda bo'lsa, faqat **whom / which** ishlatiladi: *to **whom***, *in **which***. *To who* va *in that* — xato. **That** bilan predlog doim **oxirda** turadi: *the house that she lives **in***." },
        {
          t: "examples", items: [
            { en: "She is a manager whose team has doubled in size.", uz: "U jamoasi ikki barobar kengaygan menejer." },
            { en: "The man to whom you wrote has retired.", uz: "Siz xat yozgan odam nafaqaga chiqdi." },
            { en: "The film (that) we watched last night was too long.", uz: "Kecha ko'rgan filmimiz juda uzun edi.", note: "To'ldiruvchi bo'lsa, **that / which** ni tushirib qoldirish mumkin (defining gapda)." },
          ],
        },
        { t: "check", ex: { k: "fill", q: "She is a scientist ___ research on bees is famous.", a: ["whose"], uz: "U ilmiy ishi asalarilar haqida bo'lgan mashhur olima.", why: "Egalik: **whose research**." } },
        { t: "check", ex: { k: "choice", q: "Which sentence is correct and formal?", opts: ["The people with whom we worked were kind.", "The people with who we worked were kind.", "The people with that we worked were kind.", "The people whom we worked with them were kind."], a: 0, why: "Predlog oldinda — **whom**: *with whom*." } },
      ],
    },
    {
      title: "Which butun gapga; some of whom, all of which",
      blocks: [
        { t: "p", md: "**Which** nafaqat otga, balki **butun gapga** ham qaytadi. Oldidan **vergul** bo'ladi: *He passed the exam, **which** surprised everyone.* («U imtihondan o'tdi, bu hammani hayratga soldi»)." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["He failed again, which upset his parents.", "She didn't call, which was annoying.", "It rained all day, which spoiled the picnic."] },
          bad: { title: "Xato", items: ["He failed again, what upset his parents.", "She didn't call, that was annoying.", "It rained all day, it spoiled the picnic."] },
        },
        { t: "p", md: "**Miqdor + of whom / of which**: ro'yxatdagi guruhning bir qismi haqida qo'shimcha ma'lumot (asosan rasmiy yozuvda). Odam uchun **whom**, narsa uchun **which**." },
        {
          t: "examples", items: [
            { en: "The company has 200 employees, most of whom work remotely.", uz: "Kompaniyada 200 xodim bor, ularning ko'pchiligi masofadan ishlaydi." },
            { en: "She bought five books, all of which were about travel.", uz: "U beshta kitob sotib oldi, ularning hammasi sayohat haqida edi." },
            { en: "He has two sisters, one of whom is a pilot.", uz: "Uning ikki singlisi bor, ulardan biri uchuvchi." },
            { en: "The town has several museums, some of which are free.", uz: "Shaharda bir nechta muzey bor, ularning ba'zilari bepul." },
          ],
        },
        { t: "tip", tone: "info", md: "**That** quyidagilardan keyin yaxshi ishlaydi: **all, everything, nothing, the only, the first, superlatives**: *Everything that she said was true. It was the best film that I've seen.*" },
        { t: "check", ex: { k: "choice", q: "He didn't say sorry, ___ made her angry.", opts: ["which", "what", "that", "who"], a: 0, why: "Butun gapga qaytuvchi: **which** (vergul bilan). *That* va *what* ishlatilmaydi." } },
        { t: "check", ex: { k: "fill", q: "We invited forty guests, thirty of ___ came.", a: ["whom"], uz: "Biz qirqta mehmon chaqirdik, ularning o'ttizi keldi.", why: "Odamlar + miqdor: **of whom**." } },
      ],
    },
    {
      title: "Qisqargan nisbiy gaplar va where / when / why",
      blocks: [
        { t: "p", md: "**Who / which + be** ni tushirib, nisbiy gapni qisqartirish mumkin:" },
        {
          t: "table", head: ["To'liq", "Qisqa", "Qoida"], speak: [0, 1],
          rows: [
            ["the man who is standing at the door", "the man standing at the door", "faol: **-ing**"],
            ["the photos which were taken in 2019", "the photos taken in 2019", "majhul: **V3 (-ed)**"],
            ["the first person who arrived", "the first person to arrive", "birinchi / oxirgi / yagona: **to-inf**"],
          ],
        },
        { t: "tip", tone: "warn", md: "-ing shakli **hozirgi** ish uchun, yoki **doimiy** holat uchun ishlatiladi: *a road leading to the sea*. Bir martalik o'tgan ish uchun to'liq nisbiy gap kerak: *the man who broke the window* (~~the man breaking the window~~ ma'nosi boshqa)." },
        { t: "p", md: "**Where / when / why** nisbiy qo'shimcha sifatida: *the town **where** I was born* (= in which), *a day **when** everything went wrong*, *the reason **why** he left* (**why** ni tushirsa ham bo'ladi: *the reason he left*)." },
        {
          t: "examples", items: [
            { en: "The woman sitting next to me was reading a map.", uz: "Yonimda o'tirgan ayol xarita o'qiyotgan edi." },
            { en: "The report written by the students was excellent.", uz: "Talabalar yozgan hisobot a'lo darajada edi." },
            { en: "I remember the day when we first met.", uz: "Birinchi marta uchrashgan kunimizni eslayman." },
            { en: "Nobody knows the reason why the shop closed.", uz: "Do'kon nima uchun yopilganini hech kim bilmaydi." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "Which is the reduced form of *the books that were written by Orwell*?", opts: ["the books written by Orwell", "the books writing by Orwell", "the books to write by Orwell", "the books were written by Orwell"], a: 0, why: "Majhul ma'no: **V3** (*written*)." } },
        { t: "check", ex: { k: "choice", q: "*She was the first student ___ the exam hall.*", opts: ["to leave", "leaving", "left", "who leave"], a: 0, why: "*the first* dan keyin **to-infinitive**: *the first student to leave*." } },
      ],
    },
    {
      title: "Tipik xatolar (o'zbek tilidan interferensiya)",
      blocks: [
        { t: "p", md: "O'zbek tilida nisbiy gap **sifatdosh** bilan tuziladi (*men gaplashgan odam*), va hech qanday olmosh takrorlanmaydi. Shuning uchun inglizchada ham keraksiz so'zni qo'shib yuborish yoki *which* o'rniga *what* ishlatish mumkin." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["The man I spoke to was rude.", "This is the hotel where we stayed.", "A woman whose son is a doctor lives here.", "He passed, which surprised everyone."] },
          bad: { title: "Xato", items: ["The man who I spoke to him was rude.", "This is the hotel where we stayed there.", "A woman whose her son is a doctor lives here.", "He passed, what surprised everyone."] },
        },
        { t: "tip", tone: "warn", md: "**1)** Nisbiy olmosh o'zi ob'ektni almashtiradi: **him / it / there** ni qo'shmang. **2)** *whose* dan keyin **her / his** kerak emas. **3)** Butun gapga **which**, *what* emas." },
        { t: "check", ex: { k: "fix", wrong: "The man who I spoke to him was rude.", a: ["The man who I spoke to was rude.", "The man I spoke to was rude.", "The man that I spoke to was rude.", "The man whom I spoke to was rude.", "The man to whom I spoke was rude."], hint: "ortiqcha olmosh", why: "*who* ob'ektni allaqachon almashtiradi: **him** ortiqcha." } },
        { t: "check", ex: { k: "fix", wrong: "This is the hotel where we stayed there.", a: ["This is the hotel where we stayed.", "This is the hotel we stayed at.", "This is the hotel which we stayed at.", "This is the hotel at which we stayed."], hint: "ortiqcha qo'shimcha", why: "**where** o'zi *there* ma'nosini beradi: *there* qo'shilmaydi." } },
        { t: "check", ex: { k: "fix", wrong: "A woman whose her son is a doctor lives here.", a: ["A woman whose son is a doctor lives here."], hint: "ortiqcha so'z", why: "**whose** o'zi egalikni bildiradi: *her* kerak emas." } },
        { t: "check", ex: { k: "fix", wrong: "He passed the exam, what surprised everyone.", a: ["He passed the exam, which surprised everyone."], hint: "which / what", why: "Butun gapga qaytuvchi so'z: **which**." } },
      ],
    },
    {
      title: "O'qing: Buvimning qishlog'i",
      blocks: [
        {
          t: "text", title: "My grandmother's village", voice: "emma",
          en: "Last spring I visited the village where my grandmother was born. It is a quiet place surrounded by hills, and the people living there still follow old traditions. My grandmother, whose memory is remarkable, showed me the house where she grew up. The neighbour whom she had known as a child came to greet us, and the two of them talked for hours about the years when the village had a school. There are about sixty families in the village, most of whom keep chickens or bees. Many of the old houses were built by local builders, which explains why they look so similar. The best thing I tasted was the bread baked in a clay oven, which my grandmother's cousin makes every morning. I left with a full bag and a better understanding of my family.",
          uz: "O'tgan bahorda buvim tug'ilgan qishloqqa bordim. Bu tepaliklar bilan o'ralgan tinch joy va u yerda yashovchi odamlar hamon eski an'analarga amal qiladi. Xotirasi ajoyib bo'lgan buvim menga o'zi o'sgan uyni ko'rsatdi. U bolaligidan tanigan qo'shni bizni kutib olgani keldi va ikkalasi qishloqda maktab bo'lgan yillar haqida soatlab gaplashdi. Qishloqda taxminan oltmishta oila bor, ularning ko'pchiligi tovuq yoki asalari boqadi. Eski uylarning ko'pi mahalliy quruvchilar tomonidan qurilgan, shuning uchun ular bir-biriga juda o'xshash. Eng mazali narsa — buvimning amakivachchasi har kuni ertalab pishiradigan tandir noni edi. Men to'la sumka va oilamni yaxshiroq tushunish bilan qaytdim.",
        },
        { t: "check", ex: { k: "tf", q: "In the text, *most of whom keep chickens or bees* refers to the sixty families.", a: true, why: "**most of whom** = ro'yxatdagi odamlarning (oilalarning) ko'pchiligi." } },
        { t: "check", ex: { k: "choice", q: "In *the people living there*, the reduced clause *living there* replaces:", opts: ["who live there", "who lived there", "which live there", "whom live there"], a: 0, why: "-ing shakli **who live** (faol, hozirgi) ni almashtiradi." } },
      ],
    },
    {
      title: "Dialog: Yangi kvartira",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Nilufar", en: "Did you see the flat that your agent mentioned?", uz: "Agentingiz aytgan kvartirani ko'rdingizmi?" },
            { who: "Sardor", en: "Yes. It's in the building where my cousin lives, which is convenient.", uz: "Ha. U amakivachcham yashaydigan binoda, bu qulay." },
            { who: "Nilufar", en: "What about the owner? Is he the man you were speaking to on Friday?", uz: "Egasi-chi? U siz juma kuni gaplashgan odammi?" },
            { who: "Sardor", en: "No, that was his lawyer. The owner is a woman whose husband works abroad.", uz: "Yo'q, u uning advokati edi. Egasi — eri chet elda ishlaydigan ayol." },
            { who: "Nilufar", en: "And the neighbours? Are they friendly?", uz: "Qo'shnilar-chi? Ular xushmuomalami?" },
            { who: "Sardor", en: "There are ten families, most of whom have lived there for years. One of them, a man who teaches music, even offered to help.", uz: "O'nta oila bor, ularning ko'pchiligi u yerda yillar davomida yashaydi. Ulardan biri, musiqa o'qituvchisi, hatto yordam taklif qildi." },
            { who: "Nilufar", en: "That sounds ideal. The only thing that worries me is the price.", uz: "Bu ideal eshitiladi. Meni faqat narx tashvishlantiryapti." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "Who is the man Sardor spoke to on Friday?", opts: ["The owner's lawyer", "The owner", "A neighbour", "His cousin"], a: 0, why: "*No, that was his lawyer.*" } },
      ],
    },
  ],
  words: [
    { en: "ancestor", uz: "ajdod, ota-bobo", ipa: "ˈæn.ses.tə", pos: "noun", ex: "My ancestors came from a small village in the mountains.", exUz: "Ota-bobolarim tog'dagi kichik qishloqdan kelgan." },
    { en: "descendant", uz: "avlod, nasl", ipa: "dɪˈsen.dənt", pos: "noun", ex: "She is a descendant of a famous poet.", exUz: "U mashhur shoirning avlodi." },
    { en: "mentor", uz: "murabbiy, ustoz", ipa: "ˈmen.tɔː", pos: "noun", ex: "My mentor, whose advice I trust, helped me find my first job.", exUz: "Maslahatiga ishonadigan ustozim birinchi ishimni topishda yordam berdi." },
    { en: "sibling", uz: "aka-uka yoki opa-singil", ipa: "ˈsɪb.lɪŋ", pos: "noun", ex: "I have two siblings, both of whom live abroad.", exUz: "Mening ikki aka-ukam/opa-singlim bor, ikkalasi ham chet elda yashaydi." },
    { en: "spouse", uz: "turmush o'rtog'i", ipa: "spaʊs", pos: "noun", ex: "Please bring your spouse to the company dinner.", exUz: "Kompaniya kechki ovqatiga turmush o'rtog'ingizni olib keling." },
    { en: "neighbouring", uz: "qo'shni (hudud, shahar)", ipa: "ˈneɪ.bər.ɪŋ", pos: "adj", ex: "Many tourists come from the neighbouring countries.", exUz: "Ko'p sayyohlar qo'shni mamlakatlardan keladi." },
    { en: "whereabouts", uz: "turgan joyi, qayerdaligi", ipa: "ˈweə.rə.baʊts", pos: "noun", ex: "The police do not know the whereabouts of the missing man.", exUz: "Politsiya yo'qolgan odamning qayerdaligini bilmaydi." },
    { en: "scholar", uz: "olim, ilmli kishi", ipa: "ˈskɒl.ə", pos: "noun", ex: "He is a scholar whose books are read all over the world.", exUz: "U kitoblari butun dunyoda o'qiladigan olim." },
    { en: "pioneer", uz: "kashshof, yo'l ochuvchi", ipa: "ˌpaɪ.əˈnɪə", pos: "noun", ex: "She was a pioneer in women's education.", exUz: "U ayollar ta'limida kashshof bo'lgan." },
    { en: "inheritance", uz: "meros", ipa: "ɪnˈher.ɪ.təns", pos: "noun", ex: "He used his inheritance to buy a small farm.", exUz: "U merosidan kichik ferma sotib oldi." },
  ],
  practice: [
    { k: "choice", q: "The woman ___ car was stolen called the police.", opts: ["whose", "who", "which", "whom"], a: 0, why: "Egalik: **whose car**." },
    { k: "choice", q: "He lost his keys again, ___ made him late.", opts: ["which", "what", "that", "who"], a: 0, why: "Butun gapga qaytuvchi **which** (vergul bilan)." },
    { k: "fill", q: "She has three brothers, two of ___ live in London.", a: ["whom"], uz: "Uning uchta akasi bor, ikkitasi Londonda yashaydi.", why: "Odamlar + miqdor: **two of whom**." },
    { k: "listen", say: "The man standing at the door is my uncle.", opts: ["The man standing at the door is my uncle.", "The man stands at the door is my uncle.", "The man stood at the door is my uncle.", "The man to stand at the door is my uncle."], a: 0, why: "Qisqargan nisbiy gap: **the man standing** (= who is standing)." },
    { k: "fix", wrong: "The film which I saw it was boring.", a: ["The film which I saw was boring.", "The film I saw was boring.", "The film that I saw was boring."], hint: "ortiqcha olmosh", why: "*which* ob'ektni almashtiradi, **it** ortiqcha." },
    { k: "match", pairs: [["the man waiting outside", "who is waiting outside"], ["the book written in 1990", "which was written in 1990"], ["the last person to leave", "who left last"], ["the hotel where we stayed", "in which we stayed"]] },
    { k: "order", uz: "U yordam berdi, bu bizni xursand qildi.", words: ["She", "helped", "us,", "which", "made", "us", "happy."], extra: ["what", "that"], why: "Butun gapga qaytuvchi: **, which made us happy**." },
    { k: "tf", q: "*My teacher, that lives nearby, is very kind.* — bu gap to'g'ri.", a: false, why: "Vergulli (non-defining) gapda **that** ishlatilmaydi: *who lives nearby*." },
    { k: "fill", q: "That is the reason ___ I decided to leave.", a: ["why", "that"], uz: "Mana shu men ketishga qaror qilgan sabab.", why: "Sabab: **the reason why**." },
    { k: "translate", uz: "Men tug'ilgan shahar juda katta.", a: ["The city where I was born is very big.", "The town where I was born is very big.", "The city I was born in is very big.", "The city in which I was born is very big."], why: "**where** (= in which) yoki **in** oxirda." },
    { k: "fix", wrong: "I know a girl whose her father is a pilot.", a: ["I know a girl whose father is a pilot."], hint: "ortiqcha so'z", why: "**whose** egalikni o'zi bildiradi." },
    { k: "choice", q: "Which sentence is formal and correct?", opts: ["The manager to whom I wrote replied quickly.", "The manager to who I wrote replied quickly.", "The manager to that I wrote replied quickly.", "The manager whom I wrote to him replied quickly."], a: 0, why: "Predlog oldinda: **to whom**." },
    { k: "dictation", say: "She has five colleagues, most of whom work from home.", uz: "Uning beshta hamkasbi bor, ularning ko'pchiligi uydan ishlaydi.", why: "**most of whom** — miqdor + odamlar." },
    { k: "fix", wrong: "The books writing by Orwell are famous.", a: ["The books written by Orwell are famous."], hint: "majhul ma'no", why: "Majhul ma'noda qisqargan nisbiy gap **V3** bilan: *written by Orwell*." },
    { k: "translate", uz: "U aytgan hamma narsa to'g'ri edi.", a: ["Everything that she said was true.", "Everything she said was true.", "Everything that he said was true.", "Everything he said was true."], why: "*Everything* dan keyin **that** (yoki tushirib qoldirish)." },
    { k: "speak", say: "I have a friend whose brother works in a big company, which is quite unusual.", uz: "Akasi katta kompaniyada ishlaydigan do'stim bor, bu ancha g'ayrioddiy." },
  ],
  quiz: [
    { k: "choice", q: "The students ___ passed the test got a certificate.", opts: ["who", "whose", "whom", "where"], a: 0, why: "Ega bo'lgan odam: **who**." },
    { k: "choice", q: "The company ___ she works is in Tashkent.", opts: ["for which", "for that", "which for", "whose for"], a: 0, why: "Predlog oldinda: **for which**." },
    { k: "fill", q: "The town has twelve schools, ten of ___ are state schools.", a: ["which"], uz: "Shaharda o'n ikkita maktab bor, o'ntasi davlat maktabi.", why: "Narsalar + miqdor: **of which**." },
    { k: "fix", wrong: "The woman whom I met her yesterday is a doctor.", a: ["The woman whom I met yesterday is a doctor.", "The woman who I met yesterday is a doctor.", "The woman I met yesterday is a doctor.", "The woman that I met yesterday is a doctor."], hint: "ortiqcha olmosh", why: "*whom* ob'ektni almashtiradi: **her** ortiqcha." },
    { k: "choice", q: "Reduced form of *the cars which were made in Japan*:", opts: ["the cars made in Japan", "the cars making in Japan", "the cars to make in Japan", "the cars were made in Japan"], a: 0, why: "Majhul ma'no: **made**." },
    { k: "tf", q: "*She didn't answer, which worried us.* gapida *which* butun birinchi gapga qaytadi.", a: true, why: "**which** = «uning javob bermagani»." },
    { k: "translate", uz: "Bu men bolaligimda yashagan ko'cha.", a: ["This is the street where I lived as a child.", "This is the street where I lived when I was a child.", "That is the street where I lived as a child.", "That is the street where I lived when I was a child."], why: "Joy: **the street where**." },
    { k: "order", uz: "Bu ilmiy ishi mashhur bo'lgan olim.", words: ["This", "is", "the", "scholar", "whose", "research", "is", "famous."], extra: ["who", "her"], why: "**whose research** — egalik." },
    { k: "fix", wrong: "He said sorry, what was kind of him.", a: ["He said sorry, which was kind of him."], hint: "which / what", why: "Butun gapga qaytuvchi: **which**." },
    { k: "choice", q: "Which sentence is NOT correct?", opts: ["The house where we lived there was old.", "The house where we lived was old.", "The house we lived in was old.", "The house in which we lived was old."], a: 0, why: "**where** + **there** takror: *there* ortiqcha." },
  ],
  summary: [
    "**Whose** + ot egalikni bildiradi (*a man whose son…*), **her / his** qo'shilmaydi. **Whom** to'ldiruvchi: *to whom* (rasmiy), *the person I spoke to* (norasmiy).",
    "**Which** butun gapga qaytadi: *He passed, **which** surprised us.* Vergul majburiy. Vergulli gapda **that** yo'q.",
    "**Miqdor + of whom / of which**: *two of whom, all of which* — guruhning bir qismi haqida.",
    "Qisqargan shakllar: **-ing** (*the man standing there*), **V3** (*the book written by…*), **to-inf** (*the first to arrive*).",
    "Xatolar: ~~The man who I spoke to him~~; ~~the hotel where we stayed there~~; ~~whose her~~; ~~, what~~.",
  ],
  homework: "Oilangiz yoki do'stingiz haqida 8 ta gap yozing: ikkitasida **whose**, ikkitasida **which** (butun gapga), bittasida **of whom / of which**, ikkitasida qisqargan nisbiy gap (*-ing, -ed*) va bittasida **where**. Yozgandan keyin har bir gapda ortiqcha **him / it / there / her** yo'qligini tekshiring.",
};

export default lesson;
