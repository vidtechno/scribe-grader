import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u23-l5",
  title: "Society, environment and health",
  titleUz: "Jamiyat, atrof-muhit va salomatlik: so'zlar va birikmalar",
  goal: "Jamiyat, atrof-muhit va salomatlik haqida gapirish uchun kerakli so'zlarni va **tayyor birikmalarni** (*reduce pollution, lead a healthy lifestyle, raise awareness*) ishlatasiz, so'z oilalarini (*pollute, pollution, polluted*) ajratasiz va *make harm* kabi xatolardan qochasiz.",
  slides: [
    {
      title: "So'z emas, birikma o'rganing",
      blocks: [
        { t: "p", md: "Munozarada va esseda ingliz tili so'zlarni **doim bir-biriga yaqin juftlik** qilib ishlatadi. Bunday juftlikni **collocation** (birikma) deymiz. Masalan, *pollution* so'zi bilan biz **reduce** deymiz (*reduce pollution*), lekin *make pollution smaller* demaymiz." },
        { t: "p", md: "O'zbek tilida ham shunday: «choy ichmoq», «gap sotmoq». Ularni so'zma-so'z tarjima qilib bo'lmaydi. Inglizchada ham **birikmani butunligicha** eslab qoling." },
        {
          t: "table", head: ["Mavzu", "Foydali birikma", "Ma'nosi"], speak: [1],
          rows: [
            ["society", "a growing population", "o'sib borayotgan aholi"],
            ["society", "raise awareness of a problem", "muammo haqida xabardorlikni oshirmoq"],
            ["environment", "protect the environment", "atrof-muhitni himoya qilmoq"],
            ["environment", "reduce pollution", "ifloslanishni kamaytirmoq"],
            ["health", "lead a healthy lifestyle", "sog'lom turmush tarzini yuritmoq"],
            ["health", "follow a balanced diet", "muvozanatli ovqatlanishga amal qilmoq"],
          ],
        },
        { t: "check", ex: { k: "choice", q: "Qaysi birikma to'g'ri?", opts: ["reduce pollution", "do pollution smaller", "make pollution less down", "lower of pollution"], a: 0, why: "**reduce pollution** — tayyor birikma: ifloslanishni kamaytirmoq." } },
      ],
    },
    {
      title: "Jamiyat va atrof-muhit",
      blocks: [
        { t: "p", md: "Quyidagi gaplar gazeta va intervyularda tez-tez uchraydi. Ularni o'qib, **ajratilgan birikmalarga** e'tibor bering." },
        {
          t: "examples", items: [
            { en: "The **population** of big cities is growing fast.", uz: "Katta shaharlar aholisi tez o'sib bormoqda." },
            { en: "Modern **society** depends on technology.", uz: "Zamonaviy jamiyat texnologiyaga bog'liq." },
            { en: "We should **protect the environment** for our children.", uz: "Biz atrof-muhitni bolalarimiz uchun himoya qilishimiz kerak." },
            { en: "Cars cause a lot of **air pollution** in the centre.", uz: "Mashinalar markazda havoni ko'p ifloslantiradi.", note: "**cause pollution** — ifloslanishga sabab bo'lmoq." },
            { en: "Many families **recycle** glass, paper and plastic.", uz: "Ko'p oilalar shisha, qog'oz va plastmassani qayta ishlashga topshiradi." },
            { en: "We produce too much **waste**, so we must **reduce** it.", uz: "Biz juda ko'p chiqindi chiqaramiz, shuning uchun uni kamaytirishimiz kerak." },
          ],
        },
        { t: "tip", tone: "info", md: "**waste** — sanalmaydigan ot: *a lot of waste*, *too much waste* (ko'plik shakli yo'q). **population** ham yakka son bilan ishlatiladi: *The population is growing* (*are growing* emas)." },
        { t: "check", ex: { k: "fill", q: "We produce too much plastic ___. (chiqindi)", a: ["waste"], why: "**waste** — chiqindi; sanalmaydigan ot, shuning uchun *too much waste*." } },
      ],
    },
    {
      title: "Salomatlik va turmush tarzi",
      blocks: [
        { t: "p", md: "Salomatlik haqida gapirganda **lifestyle** (turmush tarzi), **diet** (ovqatlanish tartibi) va **mental health** (ruhiy salomatlik) so'zlari kerak bo'ladi." },
        {
          t: "table", head: ["Inglizcha birikma", "O'zbekcha", "Eslatma"], speak: [0],
          rows: [
            ["lead a healthy lifestyle", "sog'lom hayot kechirmoq", "*have* emas, **lead**"],
            ["take regular exercise", "muntazam mashq qilmoq", "*make exercise* — xato"],
            ["eat a balanced diet", "muvozanatli ovqatlanmoq", "sabzavot, meva, oqsil"],
            ["suffer from stress", "stressdan azob chekmoq", "**suffer from**"],
            ["look after your mental health", "ruhiy salomatligingizga qaramoq", "**look after**"],
            ["do more harm than good", "foydadan ko'ra ko'proq zarar keltirmoq", "*do harm*, *make harm* emas"],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["She leads a healthy lifestyle.", "I take regular exercise.", "Too much sugar does harm to your health."] },
          bad: { title: "Xato", items: ["She has a healthy lifestyle life.", "I make exercise every day.", "Too much sugar makes harm to your health."] },
        },
        { t: "tip", tone: "warn", md: "O'zbekchada «sport qilmoq», «zarar yetkazmoq» deymiz va ko'pincha **make** ni ishlatib yuboramiz. Inglizchada: **take exercise / do sport**, **do harm / cause damage**. **make** bu yerda mos kelmaydi." },
        { t: "check", ex: { k: "choice", q: "Too much fast food can ___ your health.", opts: ["do harm to", "make harm to", "give harm to", "take harm to"], a: 0, why: "**do harm to** — zarar keltirmoq. *make harm* inglizchada ishlatilmaydi." } },
      ],
    },
    {
      title: "So'z oilalari",
      blocks: [
        { t: "p", md: "Bitta so'zdan ko'p so'z yasash mumkin: **fe'l, ot, sifat**. Esseda va nutqda to'g'ri shaklni tanlash muhim: ot kerak joyda fe'l ishlatsangiz, gap xato bo'ladi." },
        {
          t: "table", head: ["Fe'l", "Ot", "Sifat"], speak: [0, 1, 2],
          rows: [
            ["pollute", "pollution", "polluted"],
            ["recycle", "recycling", "recycled"],
            ["protect", "protection", "protective"],
            ["", "health", "healthy / unhealthy"],
            ["reduce", "reduction", "reduced"],
            ["", "society", "social"],
          ],
        },
        {
          t: "examples", items: [
            { en: "Factories **pollute** the river.", uz: "Zavodlar daryoni ifloslantiradi.", note: "Fe'l." },
            { en: "River **pollution** is a serious problem.", uz: "Daryoning ifloslanishi jiddiy muammo.", note: "Ot." },
            { en: "The river is badly **polluted**.", uz: "Daryo qattiq ifloslangan.", note: "Sifat." },
            { en: "We need a **reduction** in plastic bags.", uz: "Bizga plastik paketlarni kamaytirish kerak.", note: "Ot: *reduction*." },
          ],
        },
        { t: "tip", tone: "warn", md: "**Society** — jamiyat (ot), **social** — ijtimoiy (sifat). *social problems* — to'g'ri, *society problems* ham uchraydi, lekin esseda **social problems** yaxshiroq." },
        { t: "check", ex: { k: "fill", q: "Air ___ is a big problem in many cities. (pollute)", a: ["pollution"], why: "*Air ___* — ot kerak: **pollution**." } },
        { t: "check", ex: { k: "fill", q: "Sugar is not very ___ for children. (health)", a: ["healthy"], why: "*be healthy* — sifat kerak: **healthy**." } },
      ],
    },
    {
      title: "O'qing: shahar hayoti",
      blocks: [
        {
          t: "text", title: "Life in a big city",
          en: "Many people move to big cities because there are more jobs and better schools. The population of Tashkent has grown a lot, and this brings both good and bad things. On the one hand, society offers more choice: people can study, work and meet new friends. On the other hand, the traffic causes air pollution, and there is too much waste. The city council is trying to protect the environment. It asks families to recycle paper and glass, and it wants to reduce the number of old cars. Doctors also say that city life can be bad for mental health. People work long hours and often have no time for exercise. A healthy lifestyle and a balanced diet can help.",
          uz: "Ko'p odamlar katta shaharlarga ko'chib keladi, chunki u yerda ish ko'proq va maktablar yaxshiroq. Toshkent aholisi ancha oshdi va bu yaxshi hamda yomon oqibatlar keltiradi. Bir tomondan, jamiyat ko'proq tanlov beradi: odamlar o'qiydi, ishlaydi va yangi do'stlar topadi. Ikkinchi tomondan, tirbandlik havoni ifloslantiradi va chiqindi juda ko'p. Shahar kengashi atrof-muhitni himoya qilishga harakat qilmoqda. U oilalardan qog'oz va shishani qayta ishlashga topshirishni so'raydi va eski mashinalar sonini kamaytirmoqchi. Shifokorlar shahar hayoti ruhiy salomatlikka zarar bo'lishi mumkinligini ham aytadi. Odamlar uzoq ishlaydi va ko'pincha mashq qilishga vaqti bo'lmaydi. Sog'lom turmush tarzi va muvozanatli ovqatlanish yordam berishi mumkin.",
        },
        { t: "check", ex: { k: "tf", q: "The city council wants to reduce the number of old cars.", a: true, why: "Matnda: *it wants to reduce the number of old cars*." } },
        { t: "check", ex: { k: "choice", q: "According to the text, why can city life be bad for mental health?", opts: ["People work long hours and have little time for exercise.", "There are too few schools.", "The population is getting smaller.", "Doctors do not help people."], a: 0, why: "Matnda: *People work long hours and often have no time for exercise.*" } },
      ],
    },
    {
      title: "Dialog: ofisda qayta ishlash",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Madina", en: "Sardor, have you seen the new recycling bins in the office?", uz: "Sardor, ofisdagi yangi chiqindi qutilarini ko'rdingmi?" },
            { who: "Sardor", en: "Yes. I think it's a good idea. We produce so much waste here.", uz: "Ha. Menimcha, yaxshi fikr. Biz bu yerda juda ko'p chiqindi chiqaramiz." },
            { who: "Madina", en: "I agree. We should also reduce the amount of paper we use.", uz: "Roziman. Ishlatadigan qog'ozimizni ham kamaytirishimiz kerak." },
            { who: "Sardor", en: "And the company wants to raise awareness of healthy habits.", uz: "Kompaniya sog'lom odatlar haqida xabardorlikni oshirmoqchi ham." },
            { who: "Madina", en: "Good. Last month I started to take regular exercise, and I feel much better.", uz: "Yaxshi. O'tgan oy muntazam mashq qila boshladim va o'zimni ancha yaxshi his qilyapman." },
            { who: "Sardor", en: "Maybe I should lead a healthier lifestyle too. I'm very stressed at the moment.", uz: "Balki men ham sog'lomroq hayot kechirishim kerak. Hozir juda stressdaman." },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Madina has started to take regular exercise.", a: true, why: "Madina: *I started to take regular exercise.*" } },
      ],
    },
  ],
  words: [
    { en: "society", uz: "jamiyat", ipa: "səˈsaɪ.ə.ti", pos: "noun", ex: "Young people are important for society.", exUz: "Yoshlar jamiyat uchun muhim." },
    { en: "environment", uz: "atrof-muhit", ipa: "ɪnˈvaɪ.rən.mənt", pos: "noun", ex: "Plastic bags are bad for the environment.", exUz: "Plastik paketlar atrof-muhit uchun yomon." },
    { en: "pollution", uz: "ifloslanish", ipa: "pəˈluː.ʃən", pos: "noun", ex: "Pollution makes many cities unhealthy.", exUz: "Ifloslanish ko'p shaharlarni nosog'lom qiladi." },
    { en: "recycle", uz: "qayta ishlashga topshirmoq", ipa: "ˌriːˈsaɪ.kəl", pos: "verb", ex: "We recycle all our paper.", exUz: "Biz barcha qog'ozimizni qayta ishlashga topshiramiz." },
    { en: "population", uz: "aholi", ipa: "ˌpɒp.jəˈleɪ.ʃən", pos: "noun", ex: "The population of the country is about thirty million.", exUz: "Mamlakat aholisi taxminan o'ttiz million." },
    { en: "waste", uz: "chiqindi", ipa: "weɪst", pos: "noun", ex: "Food waste is a big problem.", exUz: "Oziq-ovqat chiqindisi katta muammo." },
    { en: "lifestyle", uz: "turmush tarzi", ipa: "ˈlaɪf.staɪl", pos: "noun", ex: "A busy lifestyle can be tiring.", exUz: "Band turmush tarzi charchatishi mumkin." },
    { en: "reduce", uz: "kamaytirmoq", ipa: "rɪˈdjuːs", pos: "verb", ex: "Walking to work can reduce stress.", exUz: "Ishga piyoda borish stressni kamaytirishi mumkin." },
    { en: "mental health", uz: "ruhiy salomatlik", ipa: "ˌmen.təl ˈhelθ", pos: "noun", ex: "Sleep is important for mental health.", exUz: "Uyqu ruhiy salomatlik uchun muhim." },
    { en: "balanced diet", uz: "muvozanatli ovqatlanish", ipa: "ˌbæl.ənst ˈdaɪ.ət", pos: "noun", ex: "A balanced diet includes fruit and vegetables.", exUz: "Muvozanatli ovqatlanishga meva va sabzavotlar kiradi." },
  ],
  practice: [
    { k: "match", pairs: [["society", "jamiyat"], ["pollution", "ifloslanish"], ["waste", "chiqindi"], ["lifestyle", "turmush tarzi"], ["population", "aholi"]] },
    { k: "choice", q: "We must ___ the environment.", opts: ["protect", "do", "make", "stay"], a: 0, why: "**protect the environment** — atrof-muhitni himoya qilmoq." },
    { k: "choice", q: "She ___ a healthy lifestyle.", opts: ["leads", "does", "makes", "puts"], a: 0, why: "**lead a healthy lifestyle** — tayyor birikma." },
    { k: "fill", q: "I try to take regular ___. (mashq)", a: ["exercise"], uz: "Men muntazam mashq qilishga harakat qilaman.", why: "**take regular exercise** — mashq qilmoq." },
    { k: "fill", q: "Too much noise can do ___ to your health.", a: ["harm"], uz: "Haddan tashqari shovqin salomatligingizga zarar keltirishi mumkin.", why: "**do harm to** — zarar keltirmoq." },
    { k: "fill", q: "Cars cause air ___ in big cities. (pollute)", a: ["pollution"], uz: "Mashinalar katta shaharlarda havoning ifloslanishiga sabab bo'ladi.", why: "Ot kerak: **pollution**." },
    { k: "listen", say: "We should reduce the amount of plastic waste.", opts: ["We should reduce the amount of plastic waste.", "We should recycle the amount of plastic waste.", "We should reduce the number of plastic bags.", "We should produce the amount of plastic waste."], a: 0 },
    { k: "dictation", say: "A balanced diet is good for your health.", uz: "Muvozanatli ovqatlanish salomatligingiz uchun yaxshi." },
    { k: "order", uz: "Biz hamma narsani qayta ishlashga topshirishimiz kerak.", words: ["We", "should", "recycle", "everything."], extra: ["make", "recycling"] },
    { k: "order", uz: "Shifokorlar ruhiy salomatligingizga qarashni maslahat beradi.", words: ["Doctors", "advise", "you", "to", "look", "after", "your", "mental", "health."], extra: ["make", "at"] },
    { k: "fix", wrong: "I make exercise every morning.", a: ["I do exercise every morning.", "I take exercise every morning.", "I take regular exercise every morning.", "I do sport every morning.", "I exercise every morning."], hint: "make bu yerda mos emas", why: "**do / take exercise** deymiz, *make exercise* emas." },
    { k: "fix", wrong: "Smoking makes harm to your health.", a: ["Smoking does harm to your health.", "Smoking does you harm.", "Smoking does damage to your health.", "Smoking causes harm to your health."], hint: "do harm", why: "**do harm to** yoki **cause harm to** — *make harm* xato." },
    { k: "tf", q: "**Waste** is a countable noun, so we say *two wastes*.", a: false, why: "**waste** sanalmaydigan ot: *a lot of waste*." },
    { k: "translate", uz: "Shahar aholisi tez o'smoqda.", a: ["The population of the city is growing fast.", "The city's population is growing fast.", "The population of the city is growing quickly.", "The population is growing fast in the city."], why: "**population** yakka son bilan: *is growing*." },
    { k: "speak", say: "I try to lead a healthy lifestyle and protect the environment.", uz: "Men sog'lom hayot kechirishga va atrof-muhitni himoya qilishga harakat qilaman." },
  ],
  quiz: [
    { k: "choice", q: "Factories ___ the river, so the water is dirty.", opts: ["pollute", "pollution", "polluted", "pollutes"], a: 0, why: "Ko'plik ega (*factories*) bilan fe'l kerak: **pollute**." },
    { k: "choice", q: "The government wants to ___ the amount of waste.", opts: ["reduce", "produce", "recycle", "protect"], a: 0, why: "**reduce the amount of waste** — chiqindi miqdorini kamaytirmoq." },
    { k: "choice", q: "A ___ diet includes fruit, vegetables and protein.", opts: ["balanced", "balance", "balancing", "balances"], a: 0, why: "Sifat kerak: **balanced diet**." },
    { k: "fill", q: "She suffers ___ stress at work.", a: ["from"], uz: "U ishda stressdan azob chekadi.", why: "**suffer from** — birikma." },
    { k: "fill", q: "Young people should look ___ their mental health.", a: ["after"], uz: "Yoshlar ruhiy salomatligiga qarashi kerak.", why: "**look after** — qaramoq, e'tibor bermoq." },
    { k: "fill", q: "Sleep and exercise are part of a healthy ___.", a: ["lifestyle"], uz: "Uyqu va mashq sog'lom turmush tarzining bir qismi.", why: "**healthy lifestyle** — sog'lom turmush tarzi." },
    { k: "listen", say: "The population of the city has grown a lot.", opts: ["The population of the city has grown a lot.", "The pollution of the city has grown a lot.", "The population of the city has gone a lot.", "The population of the country has grown a lot."], a: 0 },
    { k: "tf", q: "**I make regular exercise** — bu gap to'g'ri.", a: false, why: "To'g'risi: *I take regular exercise* yoki *I do regular exercise*." },
    { k: "order", uz: "Bu muammo haqida xabardorlikni oshirishimiz kerak.", words: ["We", "need", "to", "raise", "awareness", "of", "this", "problem."], extra: ["make", "about"] },
    { k: "translate", uz: "Plastik paketlar atrof-muhit uchun yomon.", a: ["Plastic bags are bad for the environment.", "Plastic bags are bad for environment."], why: "**the environment** — atrof-muhit." },
  ],
  summary: [
    "Mavzu bo'yicha gapirish uchun **birikmalarni** o'rganing: *protect the environment, reduce pollution, lead a healthy lifestyle, take regular exercise.*",
    "**do harm / cause damage** deymiz, *make harm* demaymiz. **take / do exercise**, *make exercise* emas.",
    "**waste** va **population** gapda yakka son sifatida ishlatiladi: *The population is growing.*",
    "So'z oilasi: **pollute** (fe'l) — **pollution** (ot) — **polluted** (sifat); **health** — **healthy**; **society** — **social**.",
    "Salomatlik: *suffer from stress, look after your mental health, a balanced diet.*",
  ],
  homework: "Uchta mavzu (jamiyat, atrof-muhit, salomatlik) bo'yicha har biridan 2 ta gap yozing va har birida kamida bitta o'rganilgan birikmani ishlating. Keyin gazeta yoki saytdan bitta maqolani oching va 5 ta yangi birikmani daftaringizga ko'chiring.",
};

export default lesson;
