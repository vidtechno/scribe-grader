import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u27-l5",
  title: "Work, careers and business",
  titleUz: "Ish, karyera va biznes: so'zlar va birikmalar (workforce, promotion, deadline, negotiate)",
  goal: "Ish, karyera va biznes haqida B2 darajada gapirasiz va yozasiz: **workforce, redundant, turnover, entrepreneur, profit, recruit, merger, payroll, lay off, negotiate** so'zlarini, shuningdek **meet a deadline, make a profit, run a business, hand in your notice, apply for a position, be made redundant** kabi birikmalarni to'g'ri ishlatasiz va **make a business, apply to a position** kabi xatolarni tuzatasiz.",
  slides: [
    {
      title: "Kompaniya va uning xodimlari",
      blocks: [
        { t: "p", md: "IELTS, intervyu yoki ish xatlarida **employee** va **boss** so'zlari yetarli emas. Quyidagi so'zlar kompaniya haqida aniq gapirishga yordam beradi:" },
        {
          t: "table", head: ["So'z", "Ma'nosi", "Misol"], speak: [2],
          rows: [
            ["workforce", "kompaniyaning barcha xodimlari", "The company has a workforce of 2,000 people."],
            ["recruit", "yangi xodim izlab topib ishga olmoq", "We plan to recruit ten engineers this spring."],
            ["payroll", "ish haqi ro'yxati; maosh to'lovi", "There are 300 people on the payroll."],
            ["turnover", "1) aylanma, daromad; 2) kadrlar almashinuvi", "The firm's annual turnover rose by 8 per cent. / Staff turnover is high."],
            ["lay off", "ishdan bo'shatmoq (kompaniyaning ehtiyoji tufayli)", "The factory laid off 80 workers."],
            ["redundant", "ish o'rni qisqartirilgan", "Sixty staff were made redundant."],
          ],
        },
        { t: "tip", tone: "warn", md: "**Redundant** — «ortiqcha» emas, balki **ish o'rni qisqartirilgan**: *She was made redundant* = ishdan chiqarildi (uning xatosi emas). Aybi uchun bo'shatish — **be dismissed / be sacked / be fired**. Bu ikki holatni aralashtirmang." },
        { t: "check", ex: { k: "choice", q: "All the people who work for a company are its ___.", opts: ["workforce", "turnover", "payroll", "merger"], a: 0, why: "Kompaniyaning barcha xodimlari — **workforce**." } },
        { t: "check", ex: { k: "choice", q: "When the factory closed, sixty staff were made ___.", opts: ["recruited", "promoted", "redundant", "profitable"], a: 2, why: "**be made redundant** — ish o'rni qisqartirildi." } },
      ],
    },
    {
      title: "Biznes: tadbirkorlik, foyda, kelishuv",
      blocks: [
        { t: "p", md: "Biznes haqidagi gaplarda quyidagi so'zlar eng ko'p uchraydi:" },
        {
          t: "table", head: ["So'z", "Ma'nosi", "Misol"], speak: [2],
          rows: [
            ["entrepreneur", "tadbirkor", "She is a young entrepreneur who started a delivery app."],
            ["profit", "foyda", "The company made a profit of £2 million."],
            ["merger", "ikki kompaniyaning birlashishi", "The merger created the largest bank in the region."],
            ["negotiate", "muzokara olib bormoq", "We negotiated a better price with the supplier."],
          ],
        },
        { t: "p", md: "**Negotiate** ob'ektli fe'l: *negotiate a contract / the price / a deal / with someone*. **Negotiate about** demaymiz. Ot shakli — **negotiation(s)**: *The negotiations lasted two days.* Odam — **negotiator**." },
        {
          t: "examples", items: [
            { en: "Many entrepreneurs fail in the first two years.", uz: "Ko'p tadbirkorlar dastlabki ikki yilda muvaffaqiyatsizlikka uchraydi." },
            { en: "Despite the merger, the workforce remained the same size.", uz: "Birlashishga qaramay, xodimlar soni o'zgarmadi." },
            { en: "After long negotiations the two sides reached an agreement.", uz: "Uzoq muzokaralardan keyin ikki tomon kelishuvga erishdi." },
          ],
        },
        { t: "check", ex: { k: "fill", q: "We made a ___ of £50,000 last year, so the business is doing well.", a: ["profit"], uz: "O'tgan yili 50 000 funt foyda ko'rdik, biznes yaxshi ketyapti.", why: "Daromad minus xarajat = **profit** (*make a profit*)." } },
        { t: "check", ex: { k: "tf", q: "*A merger* — bu ikki kompaniyaning bitta bo'lib birlashishi.", a: true, why: "**merger** = birlashish." } },
      ],
    },
    {
      title: "Karyera so'z oilalari",
      blocks: [
        { t: "p", md: "Bitta so'zdan bir nechta shakl yasash B2 uchun kerak: ot, fe'l, sifat va odam nomini ajrating. Bu yozma ishda xilma-xillik beradi." },
        {
          t: "table", head: ["Fe'l", "Ot", "Odam / sifat"], speak: [0, 1],
          rows: [
            ["employ", "employment, unemployment", "employer, employee, unemployed"],
            ["recruit", "recruitment", "recruiter, recruit (yangi xodim)"],
            ["promote", "promotion", "promoted"],
            ["negotiate", "negotiation", "negotiator"],
            ["qualify", "qualification", "qualified, unqualified"],
            ["manage", "management", "manager, managerial"],
            ["profit", "profit", "profitable, unprofitable"],
          ],
        },
        { t: "p", md: "Karyera ketma-ketligi: **apply for a position → attend an interview → get a job offer → accept it → work your way up → be promoted → retire**." },
        { t: "tip", tone: "info", md: "**Ish** haqida: *job* (aniq ish, sanaladi), *work* (umumiy; sanalmaydi), *career* (uzoq muddatli yo'l), *position / post* (lavozim, rasmiy)." },
        { t: "check", ex: { k: "choice", q: "After ten years in the company she was ___ to head of marketing.", opts: ["recruited", "laid off", "promoted", "negotiated"], a: 2, why: "Yuqori lavozimga ko'tarilish: **be promoted**." } },
      ],
    },
    {
      title: "Muhim birikmalar (collocations)",
      blocks: [
        { t: "p", md: "Fe'l + ot birikmalari o'zbek tilidagi tarjimadan farq qiladi. Ularni **butun holda** yodlash kerak." },
        {
          t: "table", head: ["Birikma", "Ma'nosi", "Misol"], speak: [2],
          rows: [
            ["meet a deadline", "muddatga ulgurmoq", "We worked all night to meet the deadline."],
            ["miss a deadline", "muddatni o'tkazib yubormoq", "He missed the deadline by two days."],
            ["make a profit / a loss", "foyda / zarar ko'rmoq", "The shop made a loss in its first year."],
            ["apply for a position", "lavozimga murojaat qilmoq", "She applied for the position of sales manager."],
            ["hand in your notice", "ishdan ketish haqida ariza bermoq", "He handed in his notice last Friday."],
            ["run a business", "biznesni boshqarmoq", "She runs a small travel agency."],
            ["set up a business", "biznes ochmoq", "They set up a business in 2019."],
            ["win a contract", "shartnomani qo'lga kiritmoq", "The firm won a contract worth £3 million."],
            ["go bankrupt", "bankrot bo'lmoq", "Many small shops went bankrupt."],
          ],
        },
        { t: "check", ex: { k: "choice", q: "Qaysi birikma to'g'ri?", opts: ["hand in your notice", "give out your notice", "pass your notice", "bring out notice"], a: 0, why: "**hand in one's notice** — ishdan ketish haqida rasmiy ariza berish." } },
        { t: "check", ex: { k: "fill", q: "We worked all night to ___ the deadline. (m…)", a: ["meet"], hint: "m…", uz: "Muddatga ulgurish uchun tun bo'yi ishladik.", why: "**meet a deadline** (*make* emas)." } },
      ],
    },
    {
      title: "Tipik xatolar (o'zbek tilidan)",
      blocks: [
        { t: "p", md: "O'zbek tilida **qilmoq, bermoq, olmoq** fe'llari bilan juda ko'p birikma tuziladi: *biznes qilmoq, karyera qilmoq, muddatni qilmoq*. Inglizchada har bir ot **o'z fe'li** bilan keladi." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["She runs a business in textiles.", "We must meet the deadline on Friday.", "Two hundred workers were made redundant.", "He applied for the position of manager."] },
          bad: { title: "Xato", items: ["She makes a business in textiles.", "We must make the deadline on Friday.", "Two hundred workers were redundant by the company.", "He applied to the position of manager."] },
        },
        { t: "p", md: "**1.** *biznes qilmoq* → **run / own / set up a business**. **2.** *muddatga ulgurmoq* → **meet** a deadline. **3.** Ishdan chiqarilish → **be made redundant**. **4.** *murojaat qilmoq* → **apply for** (lavozim), **apply to** (tashkilot): *apply to a company for a job*." },
        { t: "check", ex: { k: "fix", wrong: "She makes a business in textiles.", a: ["She runs a business in textiles.", "She owns a business in textiles.", "She has a business in textiles."], hint: "run / own / have", why: "Biznes **run / own / have** bilan keladi, *make* bilan emas." } },
        { t: "check", ex: { k: "fix", wrong: "We must make the deadline on Friday.", a: ["We must meet the deadline on Friday."], hint: "deadline bilan qaysi fe'l?", why: "**meet a deadline**." } },
        { t: "check", ex: { k: "fix", wrong: "Two hundred workers were redundant by the company.", a: ["Two hundred workers were made redundant by the company."], hint: "be made ...", why: "**be made redundant** (passiv)." } },
        { t: "check", ex: { k: "fix", wrong: "He applied to the position of manager.", a: ["He applied for the position of manager."], hint: "predlog", why: "**apply for** + lavozim / ish." } },
      ],
    },
    {
      title: "O'qing: Mening nonvoyxonam",
      blocks: [
        {
          t: "text", title: "From one oven to fifty employees", voice: "emma",
          en: "Eight years ago I was an accountant with no plans to become an entrepreneur. Then I handed in my notice and set up a small bakery with a loan from my uncle. In the first year we made a loss, and I often missed deadlines for paying suppliers. Gradually, however, the business began to make a profit. Last year our annual turnover doubled, and I was able to recruit twenty new staff. Today the workforce stands at fifty, and the payroll is my biggest cost. We are now negotiating a merger with a bakery in the next town, which would give us a much larger market. Not everyone is happy about it, because some people worry that they might be made redundant. I have promised that no one will be laid off, and I intend to keep that promise.",
          uz: "Sakkiz yil oldin men buxgalter edim va tadbirkor bo'lish rejam yo'q edi. Keyin ishdan ketish arizasini topshirdim va amakimdan olingan qarz hisobiga kichik nonvoyxona ochdim. Birinchi yili zarar ko'rdik va ta'minotchilarga to'lov muddatlarini tez-tez o'tkazib yuborardim. Biroq asta-sekin biznes foyda keltira boshladi. O'tgan yili yillik aylanmamiz ikki barobar oshdi va yigirmata yangi xodim ishga ola oldim. Bugun xodimlar soni ellikta, ish haqi to'lovlari eng katta xarajatim. Hozir yonimizdagi shaharchadagi nonvoyxona bilan birlashish bo'yicha muzokara olib boryapmiz, bu bizga ancha katta bozor beradi. Hamma ham xursand emas, chunki ba'zilar ishdan chiqarilishdan xavotirda. Men hech kim ishdan bo'shatilmasligini va'da qildim va va'damga amal qilmoqchiman.",
        },
        { t: "check", ex: { k: "tf", q: "The bakery made a profit in its first year.", a: false, why: "Matnda: *In the first year we made a loss*." } },
        { t: "check", ex: { k: "choice", q: "Why are some employees worried about the merger?", opts: ["They might be made redundant.", "The salaries will be higher.", "The bakery will move to another country.", "The owner will retire."], a: 0, why: "*Some people worry that they might be made redundant.*" } },
      ],
    },
    {
      title: "Dialog: Shov-shuv gaplar",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Zarina", en: "Rustam, have you heard the rumour about the merger?", uz: "Rustam, qo'shilish haqidagi mish-mishni eshitdingmi?" },
            { who: "Rustam", en: "Yes. Management are negotiating with another company. Nothing has been decided.", uz: "Ha. Rahbariyat boshqa kompaniya bilan muzokara olib boryapti. Hali hech narsa hal qilinmagan." },
            { who: "Zarina", en: "I'm worried about our jobs. Some people think they will lay off part of the workforce.", uz: "Ishlarimizdan xavotirdaman. Ba'zilar xodimlarning bir qismini ishdan bo'shatadi deb o'ylayapti." },
            { who: "Rustam", en: "It's possible, but our turnover has grown this year, so I think we are safe.", uz: "Mumkin, lekin bu yil aylanmamiz oshdi, shuning uchun xavfsizmiz deb o'ylayman." },
            { who: "Zarina", en: "True. Last month they recruited five new engineers. They wouldn't do that if they planned redundancies.", uz: "To'g'ri. O'tgan oy beshta yangi muhandis ishga olishdi. Qisqartirishni rejalashtirishsa, buni qilmasdi." },
            { who: "Rustam", en: "Exactly. Anyway, I have to meet a deadline today. Shall we talk at lunch?", uz: "Aynan. Baribir bugun muddatga ulgurishim kerak. Tushlikda gaplashamizmi?" },
            { who: "Zarina", en: "Sure. And let's not repeat the rumour to anyone else.", uz: "Albatta. Va mish-mishni boshqa hech kimga takrorlamaylik." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "Why does Rustam think the staff are safe?", opts: ["Turnover has grown and new engineers were recruited.", "The company has no payroll.", "The merger is cancelled.", "He is the director."], a: 0, why: "Rustam: aylanma oshgan, Zarina: yangi muhandislar ishga olingan — shuning uchun xavfsiz." } },
      ],
    },
  ],
  words: [
    { en: "workforce", uz: "xodimlar, ishchi kuchi", ipa: "ˈwɜːk.fɔːs", pos: "noun", ex: "The company has a workforce of two thousand people.", exUz: "Kompaniyada ikki ming xodim ishlaydi." },
    { en: "redundant", uz: "ish o'rni qisqartirilgan", ipa: "rɪˈdʌn.dənt", pos: "adj", ex: "Sixty staff were made redundant when the factory closed.", exUz: "Zavod yopilganda oltmish xodimning ish o'rni qisqartirildi." },
    { en: "negotiate", uz: "muzokara olib bormoq", ipa: "nɪˈɡəʊ.ʃi.eɪt", pos: "verb", ex: "We negotiated a better price with the supplier.", exUz: "Ta'minotchi bilan muzokara qilib yaxshiroq narxga erishdik." },
    { en: "turnover", uz: "aylanma; kadrlar almashinuvi", ipa: "ˈtɜːnˌəʊ.və", pos: "noun", ex: "Staff turnover is high in the restaurant industry.", exUz: "Restoran sohasida kadrlar almashinuvi yuqori." },
    { en: "entrepreneur", uz: "tadbirkor", ipa: "ˌɒn.trə.prəˈnɜː", pos: "noun", ex: "She is a young entrepreneur who started a delivery app.", exUz: "U yetkazib berish ilovasini boshlagan yosh tadbirkor." },
    { en: "profit", uz: "foyda", ipa: "ˈprɒf.ɪt", pos: "noun", ex: "The company made a profit of two million pounds.", exUz: "Kompaniya ikki million funt foyda ko'rdi." },
    { en: "recruit", uz: "ishga yollamoq (yangi xodimni)", ipa: "rɪˈkruːt", pos: "verb", ex: "We plan to recruit ten engineers this spring.", exUz: "Bahorda o'nta muhandis yollashni rejalashtiryapmiz." },
    { en: "merger", uz: "kompaniyalarning birlashishi", ipa: "ˈmɜː.dʒə", pos: "noun", ex: "The merger created the largest bank in the region.", exUz: "Birlashish mintaqadagi eng yirik bankni yaratdi." },
    { en: "payroll", uz: "ish haqi ro'yxati", ipa: "ˈpeɪ.rəʊl", pos: "noun", ex: "There are three hundred people on the payroll.", exUz: "Ish haqi ro'yxatida uch yuz kishi bor." },
    { en: "lay off", uz: "ishdan bo'shatmoq (kerak bo'lmagani uchun)", ipa: "ˌleɪ ˈɒf", pos: "phrasal verb", ex: "The factory laid off eighty workers last year.", exUz: "Zavod o'tgan yili sakson ishchini ishdan bo'shatdi." },
  ],
  practice: [
    { k: "choice", q: "Qaysi so'z **kompaniyaning barcha xodimlari** ma'nosini beradi?", opts: ["workforce", "turnover", "payroll", "merger"], a: 0, why: "**workforce** = barcha xodimlar." },
    { k: "choice", q: "A person who starts a new business and takes financial risks is an ___.", opts: ["employee", "supervisor", "entrepreneur", "applicant"], a: 2, why: "**entrepreneur** = tadbirkor." },
    { k: "listen", say: "The two companies announced a merger last week.", opts: ["The two companies announced a merger last week.", "The two companies announced a mortgage last week.", "The two companies announced a manager last week.", "The two companies denied a merger last week."], a: 0, why: "**merger** = birlashish." },
    { k: "fill", q: "We worked all night to meet the ___. (the final date for finishing)", a: ["deadline"], hint: "d…", uz: "Muddatga ulgurish uchun tun bo'yi ishladik.", why: "**meet the deadline**." },
    { k: "fill", q: "We made a ___ of £50,000 last year, so the business is doing well.", a: ["profit"], uz: "Biznes yaxshi ketyapti.", why: "**make a profit** = foyda ko'rmoq." },
    { k: "fill", q: "The firm wants to ___ ten new engineers this spring. (find and employ; r…)", a: ["recruit"], hint: "r…", uz: "Firma bahorda o'nta yangi muhandis yollamoqchi.", why: "Yangi xodim yollash: **recruit**." },
    { k: "order", uz: "Biz mijoz bilan narx haqida muzokara olib borishimiz kerak.", words: ["We", "need", "to", "negotiate", "the", "price", "with", "the", "client."], extra: ["about", "discuss"], why: "**negotiate** + ob'ekt (*about* emas)." },
    { k: "order", uz: "U o'z kompaniyasini yigirma yoshida ochdi.", words: ["She", "set", "up", "her", "own", "company", "at", "twenty."], extra: ["made", "on"], alt: [["She", "set", "her", "own", "company", "up", "at", "twenty."]], why: "**set up a company** — separable phrasal verb." },
    { k: "translate", uz: "Kompaniyaning yillik aylanmasi o'tgan yili oshdi.", a: ["The company's annual turnover increased last year.", "The company's annual turnover rose last year.", "The company's annual turnover grew last year.", "The company's turnover increased last year.", "The company's turnover rose last year.", "The company's turnover grew last year."], why: "**annual turnover** = yillik aylanma." },
    { k: "translate", uz: "U ishdan ketish haqida arizasini topshirdi.", a: ["She handed in her notice.", "She has handed in her notice.", "She handed her notice in.", "He handed in his notice.", "He has handed in his notice.", "He handed his notice in."], why: "**hand in one's notice**." },
    { k: "fix", wrong: "We must make the deadline on Friday.", a: ["We must meet the deadline on Friday."], hint: "deadline bilan qaysi fe'l?", why: "**meet a deadline**." },
    { k: "fix", wrong: "Two hundred workers were redundant by the company.", a: ["Two hundred workers were made redundant by the company."], hint: "be made ...", why: "**be made redundant**." },
    { k: "match", pairs: [["workforce", "ishchi kuchi, xodimlar"], ["payroll", "ish haqi ro'yxati"], ["merger", "kompaniyalarning birlashishi"], ["entrepreneur", "tadbirkor"], ["lay off", "ishdan bo'shatmoq"]] },
    { k: "tf", q: "A company that makes a profit has earned more money than it has spent.", a: true, why: "**profit** = daromad − xarajat." },
    { k: "dictation", say: "Staff turnover is high in this industry.", uz: "Bu sohada kadrlar almashinuvi yuqori.", why: "**staff turnover** = kadrlar almashinuvi." },
    { k: "speak", say: "I would like to apply for the position of project manager.", uz: "Men loyiha menejeri lavozimiga murojaat qilmoqchiman." },
  ],
  quiz: [
    { k: "choice", q: "High **staff turnover** means that ___.", opts: ["many employees leave and are replaced", "the company makes a big profit", "nobody is hired", "all employees are promoted"], a: 0, why: "**staff turnover** = xodimlar almashinuvi darajasi." },
    { k: "choice", q: "Qaysi birikma to'g'ri?", opts: ["give out your notice", "pass your notice", "hand in your notice", "bring out notice"], a: 2, why: "**hand in one's notice**." },
    { k: "choice", q: "Two firms join together to form one bigger company. This is a ___.", opts: ["merger", "payroll", "turnover", "redundancy"], a: 0, why: "**merger** = birlashish." },
    { k: "choice", q: "She ___ a small travel agency in Samarkand.", opts: ["makes", "runs", "does", "takes"], a: 1, why: "**run a business / an agency**." },
    { k: "fill", q: "After ten years in the company she was ___ to head of marketing. (promote)", a: ["promoted"], uz: "O'n yildan keyin u marketing bo'limi boshlig'i lavozimiga ko'tarildi.", why: "**be promoted** = lavozimi ko'tarildi." },
    { k: "fill", q: "They will ___ the contract with the supplier next week. (discuss the terms; n…)", a: ["negotiate"], hint: "n…", uz: "Kelasi hafta ta'minotchi bilan shartnoma bo'yicha muzokara olib borishadi.", why: "**negotiate a contract**." },
    { k: "order", uz: "Kompaniya o'tgan yili sakson kishini ishdan bo'shatdi.", words: ["The", "company", "laid", "off", "eighty", "people", "last", "year."], extra: ["lay", "fired"], alt: [["The", "company", "laid", "eighty", "people", "off", "last", "year."]], why: "**lay off** — separable." },
    { k: "translate", uz: "U o'z biznesini uch yil oldin boshladi.", a: ["She started her business three years ago.", "She set up her business three years ago.", "She started her own business three years ago.", "She set up her own business three years ago.", "She started a business three years ago.", "She set up a business three years ago."], why: "**start / set up a business**." },
    { k: "fix", wrong: "He applied to the position of manager.", a: ["He applied for the position of manager."], hint: "predlog", why: "**apply for** + lavozim." },
    { k: "tf", q: "*She runs a business* va *She makes a business* ikkalasi tabiiy inglizcha.", a: false, why: "**run / own / set up a business**; *make a business* — xato birikma." },
  ],
  summary: [
    "Kompaniya: **workforce** (xodimlar), **recruit** (yollamoq), **payroll** (ish haqi ro'yxati), **turnover** (aylanma / kadrlar almashinuvi), **lay off** va **be made redundant**.",
    "Biznes: **entrepreneur, profit, merger, negotiate**. *Negotiate* ob'ektli fe'l: *negotiate a deal / the price*.",
    "Birikmalar: **meet / miss a deadline, make a profit / loss, run / set up a business, apply for a position, hand in your notice, win a contract**.",
    "So'z oilasi: *employ → employer, employee, employment; promote → promotion; qualify → qualification*.",
    "Xatolar: ~~make a business~~ → **run a business**; ~~make the deadline~~ → **meet the deadline**; ~~apply to a position~~ → **apply for**.",
  ],
  homework: "Karyerangiz yoki orzuingizdagi kasb haqida 120–150 so'zlik matn yozing. Unda kamida **6 ta yangi so'z** (*workforce, recruit, turnover, merger, entrepreneur, profit…*) va **4 ta birikma** (*meet a deadline, apply for a position, hand in your notice, run a business*) ishlating. Keyin birikmalarning fe'llari to'g'riligini tekshiring.",
};

export default lesson;
