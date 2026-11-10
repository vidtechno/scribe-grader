import type { Lesson } from '../../../types';

// Mini lesson (review): the whole unit with new examples (passive, reporting passive, causative, reported speech and verbs, media words, opinions).
const lesson: Lesson = {
  id: "u26-l11",
  title: "Media and technology: final review",
  titleUz: "Ommaviy axborot va texnologiya: yakuniy takror",
  mini: true,
  kind: "review",
  goal: "Bosqichdagi hamma mavzuni yana bir bor takrorlaysiz: **passive** va **reporting passive**, **causative**, **ko'chirma gap** va reporting fe'llari, media-texnologiya so'zlari hamda **fikr bildirish** iboralari. Hammasi yangi misollarda.",
  slides: [
    {
      title: "Passive va reporting passive",
      blocks: [
        { t: "p", md: "**be + V3** formulasi barcha shakllarda ishlaydi. Reporting passive'da esa **to** dan keyingi shakl vaqtni bildiradi." },
        {
          t: "table", head: ["Shakl", "Misol"], speak: [1],
          rows: [
            ["Present Continuous", "The network is being upgraded this month."],
            ["Past Perfect", "Hundreds of videos had been removed before the ban was announced."],
            ["Future Perfect", "All the files will have been saved by Friday."],
            ["Modal", "Passwords must be changed every year."],
            ["to be + V3", "She hopes to be given more responsibility."],
            ["is said to be + -ing", "The app is said to be losing users."],
            ["is believed to have + V3", "The site is believed to have been hacked last night."],
          ],
        },
        { t: "check", ex: { k: "choice", q: "**The video ___ by millions of people since last night.**", opts: ["is watching", "was being watched", "has been watched", "has watched"], a: 2, why: "**since last night** → Present Perfect passive: **has been watched**." } },
        { t: "check", ex: { k: "fix", wrong: "The network is believed to have attacked last night.", a: ["The network is believed to have been attacked last night.", "It is believed that the network was attacked last night."], hint: "tarmoqqa hujum qilingan", why: "Tarmoq hujum qilinadi: **to have been + V3** (*to have been attacked*)." } },
      ],
    },
    {
      title: "Causative, ko'chirma gap va reporting fe'llari",
      blocks: [
        {
          t: "examples", items: [
            { en: "We are having the Wi-Fi installed next week.", uz: "Kelasi hafta Wi-Fi'ni o'rnatdirmoqchimiz.", note: "**have + object + V3**: ishni boshqa odam bajaradi." },
            { en: "She got her brother to set up the router.", uz: "U akasini routerni sozlashga ko'ndirdi.", note: "**get + kim + to V**." },
            { en: "The teacher made the pupils switch off their phones.", uz: "Ustoz o'quvchilarni telefonlarini o'chirishga majbur qildi.", note: "**make + kim + V** (to'siz)." },
            { en: "He said that the file had been deleted.", uz: "U fayl o'chirib tashlanganini aytdi.", note: "Backshift: **had been + V3**." },
            { en: "The director warned staff not to click on unknown links.", uz: "Direktor xodimlarni noma'lum havolalarni bosmaslikka ogohlantirdi.", note: "**warn + kim + (not) to V**." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "**We ___ next week.**", opts: ["are having installed the Wi-Fi", "are having the Wi-Fi installed", "have the Wi-Fi to install", "are installing the Wi-Fi by someone"], a: 1, why: "Qolip: **have + object + V3** → *are having the Wi-Fi installed*." } },
        { t: "check", ex: { k: "fill", q: "'Are you using a firewall?' she asked. → She asked ___ I was using a firewall.", a: ["if", "whether"], why: "Ha/yo'q savol ko'chirma gapda **if / whether** bilan beriladi." } },
        { t: "check", ex: { k: "choice", q: "**The company denied ___ users' data.**", opts: ["to sell", "that sell", "selling", "for selling"], a: 2, why: "**deny + -ing**." } },
      ],
    },
    {
      title: "Media-texnologiya so'zlari va fikr bildirish",
      blocks: [
        { t: "p", md: "Yangi so'zlar fikr ifodalash iboralari bilan birga ishlatiladi: **In my view…**, **I'd say that…**, **I see your point, but…**, **To a certain extent…**, **up to a point**, **I couldn't agree more**." },
        {
          t: "examples", items: [
            { en: "Cyberbullying is said to be getting worse among teenagers.", uz: "O'smirlar orasida internetdagi ta'qib kuchayib bormoqda, deyiladi.", note: "**cyberbullying** + reporting passive." },
            { en: "Slow internet widens the digital divide between cities and villages.", uz: "Sekin internet shahar va qishloq o'rtasidagi raqamli tengsizlikni kengaytiradi.", note: "**digital divide**." },
            { en: "To a certain extent, a digital detox is a good idea.", uz: "Ma'lum darajada raqamli dam olish yaxshi fikr.", note: "**digital detox** + qisman rozilik." },
          ],
        },
        { t: "check", ex: { k: "fill", q: "Slow internet widens the digital ___ between cities and villages.", a: ["divide"], why: "Mustahkam ibora: **digital divide** — raqamli tengsizlik." } },
        { t: "check", ex: { k: "choice", q: "Do'stingiz: *Phones should be banned in schools.* Siz qisman rozisiz. Qaysi javob eng yaxshi?", opts: ["I am agree.", "I'm not agree with.", "I agree up to a point, but they can also help in lessons.", "You are wrong."], a: 2, why: "**up to a point** — qisman rozilik. *I am agree* xato: **I agree**." } },
      ],
    },
    {
      title: "Tipik xatolar",
      blocks: [
        { t: "compare",
          good: { title: "To'g'ri", items: ["The Wi-Fi is being installed now.", "She asked me what my password was.", "I made my brother fix the laptop."] },
          bad: { title: "Xato", items: ["The Wi-Fi is being installing now.", "She asked me what was my password.", "I made my brother to fix the laptop."] } },
        { t: "check", ex: { k: "fix", wrong: "The Wi-Fi is being installing now.", a: ["The Wi-Fi is being installed now."], hint: "being dan keyin V3", why: "Passive: **being + V3** (*being installed*)." } },
        { t: "check", ex: { k: "fix", wrong: "She asked me what was my password.", a: ["She asked me what my password was."], hint: "ko'chirma savol", why: "Ko'chirma savolda so'roq tartibi yo'q: **what my password was**." } },
        { t: "check", ex: { k: "fix", wrong: "I made my brother to fix the laptop.", a: ["I made my brother fix the laptop."], hint: "make dan keyin", why: "**make + kim + V** (**to** siz)." } },
      ],
    },
    {
      title: "O'qing va dialog",
      blocks: [
        {
          t: "text", title: "A digital detox day", voice: "george",
          en: "Last week, a secondary school in the town of Eastfield announced that it would hold a digital detox day. According to the head teacher, pupils had been spending too much time on streaming services and social media, and cyberbullying had been reported more often. It is thought that the day will be repeated every term if it is successful. Phones will be collected in the morning and returned at the end of the day, and no lessons will be taught with tablets. Some pupils admitted feeling nervous about being cut off from their friends. The head teacher said she was not trying to ban technology, because it had become impossible to ignore, but she wanted pupils to see how much of their time is spent online.",
          uz: "O'tgan hafta Eastfield shahridagi bir maktab raqamli dam olish kuni o'tkazishini e'lon qildi. Direktorning aytishicha, o'quvchilar striming xizmatlari va ijtimoiy tarmoqlarda juda ko'p vaqt o'tkazgan va internetdagi ta'qib holatlari tez-tez xabar qilingan. Agar kun muvaffaqiyatli o'tsa, u har chorakda takrorlanadi, deb hisoblanadi. Telefonlar ertalab yig'ib olinadi va kun oxirida qaytariladi, darslar planshetlarsiz o'tkaziladi. Ba'zi o'quvchilar do'stlaridan uzilib qolishdan xavotirda ekanini tan oldi. Direktor texnologiyani taqiqlamoqchi emasligini, chunki uni e'tiborsiz qoldirib bo'lmay qolganini, lekin o'quvchilar vaqtlarining qancha qismi onlaynda o'tishini ko'rishini istashini aytdi.",
        },
        { t: "check", ex: { k: "tf", q: "The head teacher wants to ban technology completely.", a: false, why: "Direktor: *she was not trying to ban technology*." } },
        {
          t: "dialog", lines: [
            { who: "Zarina", en: "Tom, did you hear that Eastfield School is holding a digital detox day?", uz: "Tom, Eastfield maktabi raqamli dam olish kunini o'tkazishini eshitdingmi?" },
            { who: "Tom", en: "I did. The head teacher said that phones would be collected in the morning.", uz: "Eshitdim. Direktor telefonlar ertalab yig'ib olinishini aytdi." },
            { who: "Zarina", en: "To a certain extent, I like the idea. My brother had his phone taken away for a week and he survived.", uz: "Ma'lum darajada g'oya menga yoqadi. Akamning telefoni bir haftaga olib qo'yilgan edi va u chidadi." },
            { who: "Tom", en: "Ha! I'd say the real problem is cyberbullying. It is said to be getting worse every year.", uz: "Ha! Menimcha, haqiqiy muammo internetdagi ta'qib. U yildan yilga yomonlashmoqda, deyiladi." },
            { who: "Zarina", en: "I couldn't agree more. Teachers should be trained to spot it earlier.", uz: "To'liq roziman. O'qituvchilar buni erta payqashga o'rgatilishi kerak." },
            { who: "Tom", en: "Meanwhile, our own classroom computers are obsolete, and the bandwidth is so low that streaming a lesson is impossible.", uz: "Bu orada bizning sinfdagi kompyuterlarimiz eskirgan, tarmoq o'tkazuvchanligi shunchalik past ekanki, darsni onlayn ko'rib bo'lmaydi." },
            { who: "Zarina", en: "Then let's ask the school to have the network upgraded.", uz: "Unda maktabdan tarmoqni yangilatishni so'raymiz." },
            { who: "Tom", en: "Good idea. I'll write to the head teacher tonight.", uz: "Yaxshi fikr. Bugun kechqurun direktorga yozaman." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "What do Zarina and Tom decide to ask the school to do?", opts: ["Have the network upgraded", "Ban all phones", "Close the computer room", "Hold a detox day every week"], a: 0, why: "Zarina: *let's ask the school to have the network upgraded*." } },
      ],
    },
  ],
  words: [
    { en: "cyberbullying", uz: "internetdagi ta'qib va tahqirlash", ipa: "ˈsaɪ.bəˌbʊl.i.ɪŋ", pos: "noun", ex: "The school has a clear policy against cyberbullying.", exUz: "Maktabda internetdagi ta'qibga qarshi aniq siyosat bor." },
    { en: "obsolete", uz: "eskirgan, kerak bo'lmay qolgan", ipa: "ˈɒb.sə.liːt", pos: "adj", ex: "Fax machines are almost obsolete in most offices.", exUz: "Aksariyat ofislarda faks apparatlari deyarli eskirgan." },
    { en: "streaming", uz: "onlayn video/audio ko'rish yoki tinglash", ipa: "ˈstriː.mɪŋ", pos: "noun", ex: "Streaming has changed the way we watch films.", exUz: "Striming filmlarni ko'rish usulimizni o'zgartirdi." },
    { en: "bandwidth", uz: "internet o'tkazuvchanligi", ipa: "ˈbænd.wɪtθ", pos: "noun", ex: "The village has too little bandwidth for video calls.", exUz: "Qishloqda video qo'ng'iroqlar uchun internet o'tkazuvchanligi juda kam." },
    { en: "digital detox", uz: "raqamli qurilmalardan dam olish davri", ipa: "ˌdɪdʒ.ɪ.təl ˈdiː.tɒks", pos: "phrase", ex: "She did a digital detox at her grandmother's village.", exUz: "U buvisining qishlog'ida raqamli qurilmalardan dam oldi." },
    { en: "digital divide", uz: "raqamli tengsizlik", ipa: "ˌdɪdʒ.ɪ.təl dɪˈvaɪd", pos: "phrase", ex: "Free public Wi-Fi can help to reduce the digital divide.", exUz: "Bepul jamoat Wi-Fi'si raqamli tengsizlikni kamaytirishga yordam beradi." },
  ],
  practice: [
    { k: "match", pairs: [["cyberbullying", "internetdagi ta'qib"], ["obsolete", "eskirgan"], ["streaming", "onlayn video ko'rish"], ["bandwidth", "internet o'tkazuvchanligi"], ["digital detox", "qurilmalardan dam olish"], ["digital divide", "raqamli tengsizlik"]] },
    { k: "choice", q: "**Hundreds of videos ___ before the ban was announced.**", opts: ["have been removed", "were removing", "had removed", "had been removed"], a: 3, why: "Ikki o'tgan voqeadan oldingisi, passive: **had been removed**." },
    { k: "fill", q: "Passwords must ___ changed every year. (be)", a: ["be"], why: "Modal passive: **must be + V3**." },
    { k: "choice", q: "**The site is believed ___ hacked last night.**", opts: ["to have been", "to be", "to have", "that it"], a: 0, why: "O'tgan voqea, passive: **to have been + V3**." },
    { k: "order", uz: "Kelasi hafta Wi-Fi'ni o'rnatdirmoqchimiz.", words: ["We", "are", "having", "the", "Wi-Fi", "installed", "next", "week."], extra: ["install", "to"], why: "Causative: **have + object + V3**." },
    { k: "translate", uz: "Direktor xodimlarni noma'lum havolalarni bosmaslikka ogohlantirdi.", a: ["The director warned the staff not to click on unknown links.", "The director warned staff not to click on unknown links.", "The director warned the staff not to click unknown links.", "The director warned staff not to click unknown links."], why: "**warn + kim + not to V**." },
    { k: "tf", q: "**The company denied to sell users' data** — bu gap to'g'ri.", a: false, why: "**deny + -ing**: *denied selling*." },
    { k: "fix", wrong: "The Wi-Fi is being installing now.", a: ["The Wi-Fi is being installed now."], hint: "being dan keyin V3", why: "**being + V3**." },
    { k: "choice", q: "**She asked me what ___.**", opts: ["was my password", "my password was", "did my password was", "that my password was"], a: 1, why: "Ko'chirma savol: so'roq tartibi yo'q, zamon orqaga: **what my password was**." },
    { k: "listen", say: "The old system had become obsolete, so it was replaced.", opts: ["The old system had become obsolete, so it was replaced.", "The old system has become obsolete, so it was replaced.", "The old system had become obsolete, so it is replaced."], a: 0 },
    { k: "fix", wrong: "I made my brother to fix the laptop.", a: ["I made my brother fix the laptop."], hint: "make dan keyin", why: "**make + kim + V** (**to** siz)." },
    { k: "dictation", say: "Schools should be given more money to close the digital divide.", uz: "Raqamli tengsizlikni kamaytirish uchun maktablarga ko'proq pul berilishi kerak." },
    { k: "fill", q: "Our connection is so slow that ___ a film is almost impossible. (use a new word from this lesson)", a: ["streaming"], why: "Onlayn film ko'rish → **streaming**." },
    { k: "speak", say: "I see your point, but cyberbullying is said to be getting worse.", uz: "Fikringizni tushunaman, lekin internetdagi ta'qib kuchayib bormoqda, deyiladi." },
  ],
  quiz: [
    { k: "choice", q: "**The message ___ by someone else before I opened it.**", opts: ["was being read", "had been read", "has been read", "had read"], a: 1, why: "Men ochishdan oldin, passive: **had been read**." },
    { k: "choice", q: "**This laptop is ___. Nobody makes batteries for it any more.**", opts: ["ubiquitous", "wearable", "obsolete", "streaming"], a: 2, why: "Endi ishlab chiqarilmaydi → **obsolete**." },
    { k: "fill", q: "He is thought ___ the country in May. (leave)", a: ["to have left"], why: "Oldingi ish: **to have + V3**." },
    { k: "fill", q: "'I'm checking my email,' he said. → He said that he ___ his email.", a: ["was checking"], why: "Backshift: **am checking → was checking**." },
    { k: "choice", q: "**My phone is damaged, so I'm going to ___.**", opts: ["have repaired it", "make it repaired", "get it to repair", "have it repaired"], a: 3, why: "**have + object + V3**." },
    { k: "tf", q: "**She suggested going to the service centre** — bu gap to'g'ri.", a: true, why: "**suggest + -ing** to'g'ri qolip." },
    { k: "fix", wrong: "The teacher let us to use phones.", a: ["The teacher let us use phones."], hint: "let dan keyin", why: "**let + kim + V** (**to** siz)." },
    { k: "listen", say: "Many users are said to have deleted the app.", opts: ["Many users are said to have deleted the app.", "Many users are said to delete the app.", "Many users said they have deleted the app."], a: 0 },
    { k: "order", uz: "Qoidalar kelasi yil o'zgartirilishi kutilmoqda.", words: ["The", "rules", "are", "expected", "to", "be", "changed", "next", "year."], extra: ["will", "been"], why: "**are expected to be + V3**." },
  ],
  summary: [
    "**Passive**: **be + V3** barcha zamonlarda (*is being upgraded, had been removed, will have been saved*), modal va **to be / being + V3**.",
    "**Reporting passive**: *is said to be losing, is believed to have been hacked*; **to** dan keyin vaqtga qarab shakl tanlanadi.",
    "**Causative**: **have / get + object + V3**; **make / let + kim + V** (to'siz); **get + kim + to V**.",
    "**Ko'chirma gap**: zamon orqaga, savolda so'roq tartibi yo'q; **deny / admit -ing**, **warn + kim + to V**.",
    "Yangi so'zlar: **cyberbullying, obsolete, streaming, bandwidth, digital detox, digital divide**; fikr bildirish: **up to a point, I'd say that…**",
  ],
  homework: "Bugungi yangiliklardan bitta mavzuni tanlang va shu haqida 6 ta gap yozing: 1 passive (*is being…* yoki *has been…*), 1 reporting passive (*is said to…*), 1 causative, 1 ko'chirma gap (*said that…*), 1 reporting fe'li (*denied / warned…*) va 1 fikr (*In my view…*). Keyin ularni ovoz chiqarib o'qing.",
};

export default lesson;
