import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u28-l1",
  title: "Cleft sentences",
  titleUz: "Cleft gaplar: It was John who…, What I need is…, All I want is…",
  goal: "**Cleft gaplar** (*cleft sentences*) bilan gapning bir bo'lagini ajratib ko'rsatasiz: *It was the price that worried me. What I need is a holiday. All I want is some peace.* Qachon **it-cleft**, qachon **wh-cleft** kerakligini bilasiz, gapda yangi yoki to'g'rilanayotgan ma'lumotni urg'u bilan aytasiz va **What I need it is…** kabi xatolardan qochasiz.",
  slides: [
    {
      title: "Cleft gap nima uchun kerak?",
      blocks: [
        { t: "p", md: "Ish suhbatida, munozarada yoki IELTS Speaking'da ko'pincha **bitta fikrni ajratib** aytish kerak bo'ladi: *muammo narx emas, vaqt*. Oddiy gap buni yaxshi qilmaydi, chunki hamma bo'lak bir xil og'irlikda eshitiladi." },
        { t: "p", md: "**Cleft gap** (inglizcha *cleft* = «bo'lingan») bitta gapni **ikki qismga bo'ladi** va muhim bo'lakni **be** fe'lidan keyin, urg'u o'rniga qo'yadi. O'zbek tilida bunga o'xshash tuzilma bor: *Oynani sindirgan — Jon.* *Menga kerak bo'lgani — dam olish.*" },
        {
          t: "table", head: ["Oddiy gap", "Cleft gap"], speak: [0, 1],
          rows: [
            ["The delay annoyed me.", "It was the delay that annoyed me."],
            ["I need a holiday.", "What I need is a holiday."],
            ["Maria suggested the idea.", "It was Maria who suggested the idea."],
            ["I want some peace.", "All I want is some peace."],
          ],
        },
        { t: "tip", tone: "info", md: "Ikki asosiy tur bor: **it-cleft** (*It was … that/who …*) va **wh-cleft** (*What … is …*). Ikkalasida ham muhim ma'lumot **be** dan keyin turadi, shuning uchun u eng ko'p eshitiladi." },
        { t: "check", ex: { k: "choice", q: "Qaysi gap cleft gap?", opts: ["The noise kept me awake.", "It was the noise that kept me awake.", "The noise, which was loud, kept me awake.", "Was the noise keeping me awake?"], a: 1, why: "**It was … that …** — it-cleft. Gapning muhim bo'lagi (*the noise*) **was** dan keyin turibdi." } },
      ],
    },
    {
      title: "It-cleft: It was … that / who …",
      blocks: [
        { t: "p", md: "Tuzilishi: **It + be + ajratilgan bo'lak + that / who + gapning qolgan qismi.** Ajratilgan bo'lak **ega, to'ldiruvchi, vaqt yoki joy** bo'lishi mumkin. Odam bo'lsa **who** ham mumkin, boshqa hollarda **that**." },
        {
          t: "table", head: ["Nimani ajratamiz", "Misol"], speak: [1],
          rows: [
            ["Ega (odam)", "It was Anna who suggested the new plan."],
            ["Ega (narsa)", "It was the traffic that made us late."],
            ["To'ldiruvchi", "It's the price that worries me, not the quality."],
            ["Vaqt", "It was in 2019 that the company moved abroad."],
            ["Joy", "It was in this office that we signed the contract."],
          ],
        },
        {
          t: "examples", items: [
            { en: "It wasn't my manager who made the decision.", uz: "Qarorni men rahbarim qabul qilgan emas." },
            { en: "Was it the weather that spoiled the trip?", uz: "Sayohatni buzgan ob-havo bo'ldimi?", note: "Savolda: *Was it … that …?*" },
            { en: "It was only after the meeting that I understood the problem.", uz: "Muammoni faqat yig'ilishdan keyin tushundim." },
          ],
        },
        { t: "tip", tone: "warn", md: "**It** doim bir xil, ajratilgan bo'lak ko'plik bo'lsa ham: *It **was** my neighbours who complained.* Zamon **be** da ko'rinadi (*is / was*) va asosan gapning zamoniga mos bo'ladi. Joy va vaqtni ajratganda **where / when** emas, **that** ishlating." },
        { t: "check", ex: { k: "fill", q: "It was in this café ___ I first met her.", a: ["that"], why: "Joy ajratilgan bo'lsa, **that** ishlatiladi (*where* emas)." } },
        { t: "check", ex: { k: "choice", q: "It was my brothers ___ repaired the car.", opts: ["whose", "who", "which", "whom"], a: 1, why: "Ajratilgan bo'lak — odamlar va ega: **who** (yoki *that*)." } },
      ],
    },
    {
      title: "Wh-cleft: What I need is … / All I want is …",
      blocks: [
        { t: "p", md: "**Wh-cleft** (*pseudo-cleft*) gapning boshida **What …** bilan boshlanadigan qism turadi, keyin **be**, so'ng ajratilgan muhim bo'lak. U ko'pincha **xohish, muammo, taassurot** haqida gapiradi." },
        {
          t: "table", head: ["Tuzilma", "Misol"], speak: [1],
          rows: [
            ["What + gap + be + ot", "What I need is a long holiday."],
            ["What + gap + be + to + fe'l", "What I'd like to do is to start my own business."],
            ["What + gap + be + wh-/that gap", "What surprised me was how quiet it was."],
            ["What + subject did + be + fe'l", "What she did was call the manager at once."],
            ["All / The thing / The only thing + gap + be", "All I want is some peace. The thing that annoys me is the noise."],
          ],
        },
        { t: "p", md: "**Teskari wh-cleft** (*reverse*) da muhim bo'lak oldinda turadi: *A long holiday is what I need.* *The noise is what annoys me.* Bu variant suhbatda tabiiy, chunki gap shu bilan tugaydi." },
        {
          t: "examples", items: [
            { en: "What worries me most is the lack of time.", uz: "Meni eng ko'p tashvishlantirgani — vaqtning yetishmasligi." },
            { en: "All I did was ask a simple question.", uz: "Men shunchaki oddiy savol berdim, xolos." },
            { en: "A reliable team is what every manager wants.", uz: "Ishonchli jamoa — har bir rahbar istagan narsa." },
          ],
        },
        { t: "tip", tone: "info", md: "**All I want is …** — «men faqat … ni xohlayman». **All** shu yerda *the only thing* ma'nosida. **What she did was** dan keyin fe'l **to'siz** yoki **to** bilan kelishi mumkin: *What she did was call / to call the manager.*" },
        { t: "check", ex: { k: "order", uz: "Menga kerak bo'lgani — yaxshi uyqu.", words: ["What", "I", "need", "is", "a", "good", "sleep."], extra: ["it", "that"], alt: [["What", "I", "need", "is", "a", "good", "night's", "sleep."]], why: "**What + I need + is + ot.**" } },
        { t: "check", ex: { k: "choice", q: "Teskari cleft tuzing: A long rest ___.", opts: ["is what I need", "what I need is", "I need what is", "need is what I"], a: 0, why: "Teskari cleft: ajratilgan bo'lak + **is what I need**." } },
      ],
    },
    {
      title: "Qachon ishlatamiz va qachon yo'q",
      blocks: [
        { t: "p", md: "Cleft gap **bezak emas**, u ma'lum vazifani bajaradi. Quyidagi vaziyatlarda ishlating:" },
        {
          t: "table", head: ["Vazifa", "Misol"],
          rows: [
            ["Yangi yoki muhim ma'lumotni ajratish", "What I really enjoyed was the live music."],
            ["Kimningdir fikrini **to'g'rilash**", "— You blamed Tom. — It wasn't Tom who was late, it was Ben."],
            ["Ikki narsani **taqqoslash**", "It's not the salary that matters, it's the team."],
            ["Tashvish yoki norozilikni yumshoq bildirish", "What concerns me is that nobody has checked the figures."],
          ],
        },
        { t: "p", md: "**Eslab qoling:** it-cleft ko'pincha **to'g'rilash va qarama-qarshi qo'yish** uchun, wh-cleft esa **o'z fikr va xohishingizni** aytish uchun qulay. Yozma ishlarda (essay) ikkalasi ham fikrni ajratadi: *What this shows is that…*" },
        {
          t: "compare",
          good: { title: "Foydali (ajratish kerak)", items: ["It's the cost that stops many people, not the lack of interest.", "What I found hardest was the unfamiliar accent."] },
          bad: { title: "Ortiqcha (hamma gapni cleft qilish)", items: ["It was yesterday that I went to the shop that is near my house.", "What I did was I bought a loaf of bread."] },
        },
        { t: "tip", tone: "warn", md: "Bir paragrafda **ko'pi bilan 1–2 ta** cleft ishlating. Har bir gap cleft bo'lsa, urg'u yo'qoladi va matn og'ir eshitiladi. Rasmiy xatda ham, suhbatda ham bu tuzilma maqbul: farq faqat so'zlarning tanlashida." },
        { t: "check", ex: { k: "tf", q: "Cleft gap faqat yangi ma'lumotni ajratish uchun emas, o'zgalarning xatosini **to'g'rilash** uchun ham ishlatiladi.", a: true, why: "*It wasn't Tom who was late, it was Ben.* kabi gaplar aynan to'g'rilash uchun." } },
      ],
    },
    {
      title: "Tipik xatolar (o'zbek tilidan interferensiya)",
      blocks: [
        { t: "p", md: "O'zbek tilida *Oynani sindirgan — Jon* deymiz va fe'l o'zi bor, hech narsa takrorlanmaydi. Inglizchada esa **cleft qismi gap ichida ega vazifasini bajaradi**, shuning uchun ortiqcha olmosh qo'shilsa gap buziladi. To'rtta mashhur xato:" },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["It was my brother who called the police.", "What I need is a rest.", "It was in this office that I met her.", "What she did was call the manager."] },
          bad: { title: "Xato", items: ["It was my brother who he called the police.", "What I need it is a rest.", "It was in this office who I met her.", "What she did was called the manager."] },
        },
        { t: "p", md: "1) **who** dan keyin ega yana takrorlanmaydi (**who he called**). 2) *What I need* — bu butun qism ega, **it** kerak emas. 3) Joy va vaqt uchun **that**, **who** faqat odam uchun. 4) **What … did was** dan keyin fe'l **asosiy shaklda**." },
        { t: "check", ex: { k: "fix", wrong: "It was Anna who she suggested the plan.", a: ["It was Anna who suggested the plan.", "It was Anna that suggested the plan."], hint: "who dan keyin ega takrorlanmaydi", why: "**who** o'zi ega vazifasida: *who suggested*. **she** ortiqcha." } },
        { t: "check", ex: { k: "fix", wrong: "What surprised me it was the noise.", a: ["What surprised me was the noise."], hint: "it ortiqcha", why: "*What surprised me* — ega, undan keyin to'g'ridan-to'g'ri **was**." } },
        { t: "check", ex: { k: "fix", wrong: "It was in 2019 who the company moved abroad.", a: ["It was in 2019 that the company moved abroad."], hint: "who faqat odam uchun", why: "Vaqt ajratilgan, shuning uchun **that**." } },
        { t: "check", ex: { k: "fix", wrong: "What he did was shouted at the driver.", a: ["What he did was shout at the driver.", "What he did was to shout at the driver."], hint: "What … did was + fe'lning asosiy shakli", why: "**did** dan keyin **was** + fe'lning asosiy shakli (yoki **to** + fe'l)." } },
      ],
    },
    {
      title: "O'qing: Mening birinchi ish haftam",
      blocks: [
        {
          t: "text", title: "What I remember about my first week", voice: "emma",
          en: "People often ask me what was hardest about my first job as a team leader. It wasn't the workload that worried me, and it wasn't the long hours either. What I found hardest was the sense of responsibility. Suddenly it was my decisions that affected everyone else. I was genuinely unaware of how much a quiet team needs from its leader. What helped me most was a simple habit: every Friday, I asked each person what they needed. It was my manager who suggested the idea, and I am grateful to her. All I did was listen, but the resentment in the team slowly disappeared. Looking back, it was that small initiative that built trust. Now, whenever a new colleague joins, it is the first thing I do.",
          uz: "Odamlar mendan ko'pincha jamoa rahbari sifatida birinchi ishimda eng qiyini nima bo'lgani haqida so'raydi. Meni tashvishlantirgani ish hajmi ham, uzoq ish soatlari ham emas edi. Menga eng qiyin tuyulgani — mas'uliyat hissi edi. To'satdan boshqalarga ta'sir qiladigan narsa mening qarorlarim bo'lib qoldi. Jim jamoaga rahbardan qanchalik ko'p narsa kerakligini haqiqatan ham bilmas edim. Menga eng ko'p yordam bergani oddiy odat edi: har juma kuni har bir kishidan unga nima kerakligini so'rardim. Bu g'oyani menga rahbarim taklif qilgan edi, unga minnatdorman. Men faqat quloq solardim, lekin jamoadagi ginaxonlik asta-sekin yo'qoldi. Ortga qarasam, ishonchni qurgan o'sha kichik tashabbus edi. Endi yangi hamkasb qo'shilsa, birinchi qiladigan ishim shu.",
        },
        { t: "check", ex: { k: "tf", q: "According to the text, the long hours were the hardest part of the job.", a: false, why: "*It wasn't the workload … and it wasn't the long hours either. What I found hardest was the sense of responsibility.*" } },
        { t: "check", ex: { k: "choice", q: "Who suggested the Friday habit?", opts: ["The writer's manager", "The writer herself", "A new colleague", "The whole team"], a: 0, why: "*It was my manager who suggested the idea.*" } },
        { t: "check", ex: { k: "choice", q: "Why does the writer say *All I did was listen*?", opts: ["To show that the action was very simple", "To say she did nothing at all", "To complain about her work", "To ask a question"], a: 0, why: "**All I did was …** — «men faqat shuni qildim»; harakat oddiy edi, lekin natijasi katta." } },
      ],
    },
    {
      title: "Dialog: Nega rejani o'zgartirdik?",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "George", en: "Sara, I heard the launch was delayed again. Was it the designers who missed the deadline?", uz: "Sara, ishga tushirish yana kechiktirilganini eshitdim. Muddatni o'tkazib yuborgan dizaynerlar bo'ldimi?" },
            { who: "Sara", en: "No, it wasn't the designers. It was the testing that took longer than we anticipated.", uz: "Yo'q, dizaynerlar emas. Biz kutganimizdan uzoqroq cho'zilgani sinov bo'ldi." },
            { who: "George", en: "So what do we do now?", uz: "Endi nima qilamiz?" },
            { who: "Sara", en: "What I'd suggest is a short delay, not a complete change of plan.", uz: "Men qisqa kechiktirishni taklif qilardim, rejani butunlay o'zgartirishni emas." },
            { who: "George", en: "That sounds fair. What worries me, though, is the client's reaction.", uz: "Bu adolatli eshitiladi. Lekin meni mijozning munosabati tashvishlantiryapti." },
            { who: "Sara", en: "All they want is an honest update. It's the surprises that they hate.", uz: "Ular faqat halol yangilik kutadi. Ular yoqtirmaydigan narsa — kutilmagan holatlar." },
            { who: "George", en: "You're right. I'll write to them this afternoon.", uz: "To'g'ri aytasiz. Bugun tushdan keyin ularga yozaman." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "What caused the delay?", opts: ["The testing took too long", "The designers were late", "The client changed the plan", "George forgot the deadline"], a: 0, why: "*It was the testing that took longer than we anticipated.*" } },
        { t: "check", ex: { k: "choice", q: "What does Sara say clients hate?", opts: ["Surprises", "Honest updates", "Short delays", "Testing"], a: 0, why: "*It's the surprises that they hate.*" } },
      ],
    },
  ],
  words: [
    { en: "genuinely", uz: "chin dildan, haqiqatan", ipa: "ˈdʒen.ju.ɪn.li", pos: "adverb", ex: "I was genuinely surprised by the result.", exUz: "Natijadan chin dildan hayron qoldim." },
    { en: "motivation", uz: "motivatsiya, ishtiyoq", ipa: "ˌməʊ.tɪˈveɪ.ʃən", pos: "noun", ex: "What the team lacks is motivation, not talent.", exUz: "Jamoada yetishmayotgani iste'dod emas, motivatsiya." },
    { en: "flaw", uz: "kamchilik, nuqson", ipa: "flɔː", pos: "noun", ex: "The main flaw in the plan is the budget.", exUz: "Rejadagi asosiy kamchilik — byudjet." },
    { en: "fundamental", uz: "asosiy, tub", ipa: "ˌfʌn.dəˈmen.təl", pos: "adjective", ex: "It was a fundamental mistake to ignore the customers.", exUz: "Mijozlarni e'tiborsiz qoldirish tub xato edi." },
    { en: "initiative", uz: "tashabbus", ipa: "ɪˈnɪʃ.ə.tɪv", pos: "noun", ex: "She took the initiative and organised the meeting.", exUz: "U tashabbus ko'rsatib, yig'ilishni tashkil qildi." },
    { en: "resentment", uz: "ginaxonlik, noroziligi ichida saqlash", ipa: "rɪˈzent.mənt", pos: "noun", ex: "Unfair rules often cause resentment among staff.", exUz: "Adolatsiz qoidalar xodimlarda ko'pincha ginaxonlik uyg'otadi." },
    { en: "emphasis", uz: "urg'u, ahamiyat berish", ipa: "ˈem.fə.sɪs", pos: "noun", ex: "The teacher put great emphasis on accuracy.", exUz: "O'qituvchi aniqlikka katta urg'u berdi." },
    { en: "notion", uz: "tushuncha, g'oya", ipa: "ˈnəʊ.ʃən", pos: "noun", ex: "The notion that money brings happiness is not always true.", exUz: "Pul baxt keltiradi degan tushuncha har doim ham to'g'ri emas." },
    { en: "unaware", uz: "bexabar, ogoh emas", ipa: "ˌʌn.əˈweər", pos: "adjective", ex: "Many drivers are unaware of the new rule.", exUz: "Ko'p haydovchilar yangi qoidadan bexabar." },
    { en: "anticipate", uz: "oldindan kutmoq, taxmin qilmoq", ipa: "ænˈtɪs.ɪ.peɪt", pos: "verb", ex: "We didn't anticipate such a strong reaction.", exUz: "Biz bunday kuchli munosabatni kutmagan edik." },
  ],
  practice: [
    { k: "choice", q: "Which sentence puts the focus on **the price**?", opts: ["The price worried me.", "It was the price that worried me.", "I was worried about prices.", "Prices worried me a lot."], a: 1, why: "**It was … that** gapning markazida *the price* turadi." },
    { k: "choice", q: "___ I enjoyed most was the final presentation.", opts: ["It", "What", "That", "Which"], a: 1, why: "Wh-cleft: **What I enjoyed most was …**" },
    { k: "listen", say: "It was the weather that spoiled our trip.", opts: ["It was the weather that spoiled our trip.", "The weather spoiled our trip.", "What spoiled our trip was it.", "It was the whether that spoiled our trip."], a: 0, why: "Eshitgan gapda **It was … that …** bor." },
    { k: "fill", q: "It wasn't my boss ___ made the mistake, it was a client.", a: ["who", "that"], uz: "Xatoni rahbarim qilgan emas, mijoz qilgan.", why: "Ajratilgan bo'lak odam (ega): **who / that**." },
    { k: "fill", q: "___ I'd like to do is travel for a year.", a: ["What"], uz: "Men qilishni istagan narsa — bir yil sayohat qilish.", why: "**What I'd like to do is …**" },
    { k: "order", uz: "Meni tashvishlantirgani — vaqtning yetishmasligi.", words: ["What", "worries", "me", "is", "the", "lack", "of", "time."], extra: ["it", "that"], alt: [["What", "worries", "me", "most", "is", "the", "lack", "of", "time."]], why: "**What worries me is …** (ega vazifasidagi qism)." },
    { k: "order", uz: "Bu g'oyani taklif qilgan Madina edi.", words: ["It", "was", "Madina", "who", "suggested", "the", "idea."], extra: ["which", "she"], alt: [["It", "was", "Madina", "that", "suggested", "the", "idea."]], why: "**It was + odam + who + fe'l.**" },
    { k: "translate", uz: "Men faqat bir oz tinchlik xohlayman.", a: ["All I want is some peace.", "All I want is a bit of peace.", "All I want is a little peace.", "All I want is peace."], why: "**All I want is …** — «faqat shuni xohlayman»." },
    { k: "translate", uz: "Meni xafa qilgani uning aytgan gapi emas, ohangi edi.", a: ["It wasn't what he said that upset me, it was his tone.", "It wasn't what he said that upset me, it was the way he said it.", "It was not what he said that upset me, it was his tone."], why: "Qarama-qarshi qo'yish uchun it-cleft: **It wasn't … that …, it was …**" },
    { k: "fix", wrong: "What I need it is a long rest.", a: ["What I need is a long rest."], hint: "it ortiqcha", why: "**What I need** — butun qism ega; qo'shimcha **it** kerak emas." },
    { k: "fix", wrong: "It was in 2018 who we opened the shop.", a: ["It was in 2018 that we opened the shop."], hint: "who faqat odam uchun", why: "Vaqt ajratilgan, shuning uchun **that**." },
    { k: "match", pairs: [["flaw", "kamchilik"], ["initiative", "tashabbus"], ["unaware", "bexabar"], ["emphasis", "urg'u"], ["anticipate", "oldindan kutmoq"]] },
    { k: "tf", q: "**The thing that annoys me is the noise.** gapi wh-cleft turiga kiradi (*the thing that* = *what*).", a: true, why: "**The thing that …** *What …* o'rniga ishlatiladi va xuddi shu vazifani bajaradi." },
    { k: "choice", q: "Qaysi gapda cleft noto'g'ri qo'llangan?", opts: ["It was Tom who broke the window.", "What I want is to sleep.", "It was last week who I called him.", "All I need is a quiet room."], a: 2, why: "Vaqt (*last week*) uchun **that**, **who** emas: *It was last week that I called him.*" },
    { k: "dictation", say: "What surprised me was how quiet it was.", uz: "Meni hayron qoldirgani — bu yer qanchalik jim edi.", why: "**What surprised me was how …** — wh-cleft." },
    { k: "speak", say: "What I really enjoy is learning new things, and it is my teacher who inspires me.", uz: "Men chindan yoqtiradigan narsa yangi narsalar o'rganish, va menga ilhom beradigan o'qituvchim." },
  ],
  quiz: [
    { k: "choice", q: "It was the manager ___ cancelled the meeting.", opts: ["who", "whose", "what", "where"], a: 0, why: "Odam ajratilgan: **who** (yoki *that*)." },
    { k: "choice", q: "What she did ___ call the police.", opts: ["was", "is called", "was to called", "did"], a: 0, why: "**What she did was call …** — fe'l asosiy shaklda." },
    { k: "choice", q: "A good night's sleep is ___.", opts: ["what I need", "I need what", "what do I need", "that I need"], a: 0, why: "Teskari cleft: **… is what I need**." },
    { k: "fix", wrong: "It was Anna who she called the manager.", a: ["It was Anna who called the manager.", "It was Anna that called the manager."], hint: "olmosh takrorlanmasin", why: "**who** o'zi ega vazifasini bajaradi, **she** ortiqcha." },
    { k: "fill", q: "___ I want is a quiet evening. (faqat shuni)", a: ["All"], uz: "Men faqat tinch kechani xohlayman.", why: "**All I want is …**" },
    { k: "fill", q: "It was only after the exam ___ I realised my mistake.", a: ["that"], uz: "Xatomni faqat imtihondan keyin tushundim.", why: "Vaqt ajratilgan: **that**." },
    { k: "order", uz: "Menga eng ko'p yordam bergani sizning maslahatingiz edi.", words: ["What", "helped", "me", "most", "was", "your", "advice."], extra: ["it", "that"], why: "**What helped me most was …**" },
    { k: "translate", uz: "Bu xatoni qilgan men emas, u edi.", a: ["It wasn't me who made this mistake, it was him.", "It wasn't I who made this mistake, it was he.", "It was not me who made this mistake, it was him.", "It wasn't me that made this mistake, it was him."], why: "Cleft bilan to'g'rilash: **It wasn't … who …, it was …**" },
    { k: "tf", q: "**It was yesterday what I met her** — bu gap to'g'ri cleft gap.", a: false, why: "**what** emas, vaqt uchun **that** kerak: *It was yesterday that I met her.*" },
    { k: "dictation", say: "It is the price that stops many people.", uz: "Ko'p odamlarni to'xtatadigan narsa — narx.", why: "It-cleft: **It is … that …**" },
  ],
  summary: [
    "**It-cleft:** *It + be + ajratilgan bo'lak + that / who + …*. Odam uchun **who / that**, vaqt, joy va narsa uchun **that**.",
    "**Wh-cleft:** *What I need is …, What surprised me was …, All I want is …, The thing that …*. Teskari: *A holiday is what I need.*",
    "Maqsad: yangi ma'lumotni ajratish, xatoni **to'g'rilash** (*It wasn't Tom who…*), ikki narsani qarama-qarshi qo'yish. Bir paragrafda 1–2 tadan ko'p ishlatmang.",
    "Xatolar: ortiqcha olmosh (~~What I need it is~~, ~~who he called~~), vaqt/joy bilan **who** (~~It was in 2019 who~~), **What … did was** dan keyin zamonli fe'l (~~was shouted~~).",
  ],
  homework: "Kundalik hayotingizdan 5 ta fikrni cleft gapga aylantiring: 2 ta **it-cleft** (biri xatoni to'g'rilasin: *It wasn't … that …, it was …*), 2 ta **wh-cleft** (*What I need / What annoys me is …*), 1 ta **All I want is …**. Keyin ularni ovoz chiqarib ayting va har gapda ortiqcha olmosh yo'qligini tekshiring.",
};

export default lesson;
