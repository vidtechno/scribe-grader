import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u28-l2",
  title: "Inversion after negative adverbs",
  titleUz: "Inversiya: Never have I…, Not only… but also, Hardly… when, Only when…",
  goal: "**Inversiya** (*inversion*) ni bilasiz: gap **never, rarely, seldom, hardly, no sooner, not only, only after, under no circumstances, little** bilan boshlansa, yordamchi fe'l egadan oldin keladi: *Never have I seen…, Not only did he…, Hardly had she…*. Shu bilan birga **so do I / neither have I** va **Had I known…, Should you need…, Were I you…** tuzilmalarini to'g'ri ishlatasiz va **Never I have seen** kabi xatolardan qochasiz.",
  slides: [
    {
      title: "Inversiya nima uchun kerak?",
      blocks: [
        { t: "p", md: "Odatda inglizcha gapda tartib: **ega + fe'l**. Lekin gapni **salbiy yoki cheklovchi** so'z bilan boshlasak (*never, rarely, hardly…*), tartib o'zgaradi: **yordamchi fe'l + ega**. Buni **inversiya** deymiz. U savol gapdagi tartibga o'xshaydi, lekin ma'nosi **savol emas, urg'u**." },
        { t: "p", md: "Inversiya **rasmiy va adabiy** uslubga xos: nutqlar, maqolalar, essay (IELTS Writing), rasmiy xatlar. Oddiy suhbatda *I've never seen…* deyish tabiiyroq. Lekin B2 da siz uni **tushunishingiz** ham, **kerak joyda ishlata olishingiz** ham kerak." },
        {
          t: "table", head: ["Oddiy tartib", "Inversiya (urg'uli)"], speak: [0, 1],
          rows: [
            ["I have never seen such a view.", "Never have I seen such a view."],
            ["She rarely complains about work.", "Rarely does she complain about work."],
            ["He not only lied, but also left.", "Not only did he lie, but he also left."],
          ],
        },
        { t: "tip", tone: "info", md: "O'zbek tilida gap boshiga **hech qachon** qo'ysak ham fe'l tartibi o'zgarmaydi. Inglizchada esa o'zgaradi. Shuning uchun *Never I have seen* — eng ko'p uchraydigan xato." },
        { t: "check", ex: { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["Never I have visited Paris.", "Never have I visited Paris.", "Never I visited Paris.", "Never visited I Paris."], a: 1, why: "Salbiy so'zdan keyin: **yordamchi fe'l (have) + ega (I)**." } },
      ],
    },
    {
      title: "Qoida: qaysi so'zlardan keyin va qaysi yordamchi fe'l",
      blocks: [
        { t: "p", md: "Inversiya **yordamchi fe'l** (*auxiliary*) ni ega oldiga olib chiqadi. Qoida oddiy:" },
        {
          t: "table", head: ["Asl gapda", "Inversiyada", "Misol"], speak: [2],
          rows: [
            ["Yordamchi bor (*have, has, had, will, can, be*)", "u egadan oldin keladi", "Never have I felt so tired."],
            ["Faqat be (*am, is, was*)", "be egadan oldin keladi", "Not only was he late, but …"],
            ["Present Simple (yordamchi yo'q)", "**do / does** qo'shiladi", "Rarely does she call us."],
            ["Past Simple (yordamchi yo'q)", "**did** qo'shiladi", "Seldom did they travel abroad."],
          ],
        },
        { t: "p", md: "**Asosiy so'zlar:** *never, rarely, seldom, hardly (ever), scarcely, little, no sooner, not only, not until, only after / when / then / by, under no circumstances, at no time, on no account, in no way*." },
        {
          t: "examples", items: [
            { en: "Seldom have I met a more generous person.", uz: "Bundan saxiyroq odamni kamdan-kam uchratganman." },
            { en: "Under no circumstances should you share your password.", uz: "Hech qanday sharoitda parolingizni boshqaga bermang." },
            { en: "Little did I know that the meeting would change my career.", uz: "Bu uchrashuv karyeramni o'zgartirishini bilmas edim." },
          ],
        },
        { t: "tip", tone: "warn", md: "**do / does / did** dan keyin fe'l **asosiy shaklda** bo'ladi: *Rarely does she **call**.* (~~Rarely does she calls~~). Yordamchi fe'l bitta, **-s** va **-ed** shu yordamchida ko'rinadi." },
        { t: "check", ex: { k: "fill", q: "Rarely ___ he arrive on time.", a: ["does"], hint: "Present Simple, yordamchi yo'q", why: "Asl gap: *He rarely arrives*. Inversiyada **does** + asosiy fe'l." } },
        { t: "check", ex: { k: "fill", q: "Never ___ I seen such an amazing sunset.", a: ["have"], hint: "Present Perfect", why: "Asl gap: *I have never seen …*. **have** egadan oldin chiqadi." } },
      ],
    },
    {
      title: "Hardly … when, No sooner … than, Not only … but also, Only when",
      blocks: [
        { t: "p", md: "Bu to'rtta tuzilma tez-tez uchraydi. Har birida **birinchi qismda inversiya** bor, ikkinchi qism odatdagi tartibda." },
        {
          t: "table", head: ["Tuzilma", "Qoida", "Misol"], speak: [2],
          rows: [
            ["Hardly / Scarcely … when", "had + ega + V3 … when + Past Simple", "Hardly had I sat down when the phone rang."],
            ["No sooner … than", "had + ega + V3 … than + Past Simple", "No sooner had she left than it began to rain."],
            ["Not only … but (also)", "Not only + yordamchi + ega … but (… also)", "Not only did he forget the tickets, but he also lost his passport."],
            ["Only when / after / if / then", "Only … + yordamchi + ega", "Only after the meeting did I understand the plan."],
            ["Not until", "Not until … + yordamchi + ega", "Not until midnight did the noise stop."],
          ],
        },
        { t: "p", md: "**Muhim:** *Only when / after / by* dan keyin kelgan **qo'shimcha gap** inversiya bo'lmaydi, inversiya **bosh gapda** bo'ladi: *Only when the lights went out **did** we notice the time.* (*when* gapi: *the lights went out*, odatiy tartib)." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["Only after the exam did I relax.", "No sooner had we arrived than it started to snow.", "Hardly had he spoken when everybody laughed."] },
          bad: { title: "Xato", items: ["Only after the exam I relaxed.", "No sooner we had arrived than it started to snow.", "Hardly he had spoken when everybody laughed."] },
        },
        { t: "tip", tone: "info", md: "**Hardly … when** va **No sooner … than** ma'nosi bir xil: «…ganda shu zahoti…». Ikkalasida ham **Past Perfect** birinchi, **Past Simple** ikkinchi. Ularni aralashtirmang: *hardly … than* emas, *hardly … **when***; *no sooner … **than***." },
        { t: "check", ex: { k: "choice", q: "No sooner had the film begun ___ the power went off.", opts: ["when", "than", "then", "that"], a: 1, why: "**No sooner … than** (*hardly … when* bilan almashmaydi)." } },
        { t: "check", ex: { k: "choice", q: "Only after the results were published ___ the real problem.", opts: ["did we notice", "we noticed", "we did notice", "noticed we"], a: 0, why: "**Only after …** dan keyin bosh gapda inversiya: **did we notice**." } },
      ],
    },
    {
      title: "So do I, Neither have I va if siz shart gaplari",
      blocks: [
        { t: "p", md: "Inversiya yana ikkita muhim joyda uchraydi. **Birinchisi:** «men ham» deganda. **Ikkinchisi:** rasmiy shart gaplarda **if** ni tushirib qoldirganda." },
        {
          t: "table", head: ["Ma'no", "Tuzilma", "Misol"], speak: [2],
          rows: [
            ["«Men ham» (darak)", "So + yordamchi + ega", "I love travelling. — So do I."],
            ["«Men ham» (inkor)", "Neither / Nor + yordamchi + ega", "I haven't been to Rome. — Neither have I."],
            ["1-shart (rasmiy)", "Should + ega + fe'l", "Should you need help, please call us."],
            ["3-shart (o'tgan, haqiqatga zid)", "Had + ega + V3", "Had I known, I would have told you."],
            ["Haqiqatga zid (2-shart)", "Were + ega + to / ot", "Were I you, I would accept the offer."],
          ],
        },
        { t: "tip", tone: "warn", md: "Yordamchi fe'l **oldingi gapga mos** bo'ladi: *I can swim. — So can I.* / *She likes tea. — So do I.* / *We went there. — So did we.* Agar yordamchi yo'q bo'lsa — **do / does / did**." },
        {
          t: "examples", items: [
            { en: "Had I realised the risk, I would never have signed.", uz: "Xavfni anglaganimda, hech qachon imzolamas edim." },
            { en: "Should there be any problems, contact the manager.", uz: "Muammo bo'lsa, rahbarga murojaat qiling." },
            { en: "I can't stand queues. — Nor can I.", uz: "Men navbatga chiday olmayman. — Men ham." },
          ],
        },
        { t: "check", ex: { k: "fill", q: "I've never tried sushi. — Neither ___ I.", a: ["have"], why: "Oldingi gapda **have** bor: **Neither have I**." } },
        { t: "check", ex: { k: "choice", q: "___ I known about the delay, I would have left earlier.", opts: ["Had", "Have", "If had", "Would"], a: 0, why: "3-shart, **if** siz: **Had I known …**" } },
      ],
    },
    {
      title: "Tipik xatolar (o'zbek tilidan interferensiya)",
      blocks: [
        { t: "p", md: "O'zbek tilida gap boshida **hech qachon, kamdan-kam, shu zahoti** deyilsa ham, fe'l tartibi **o'zgarmaydi**. Shuning uchun o'zbek tilida so'zlashuvchilar inversiyani tushirib qoldirishadi. Mana to'rtta tipik xato:" },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["Never have I seen such a beautiful city.", "Rarely does he call us.", "Not only was he late, but he also forgot the documents.", "Hardly had I sat down when the phone rang."] },
          bad: { title: "Xato", items: ["Never I have seen such a beautiful city.", "Rarely he calls us.", "Not only he was late, but he also forgot the documents.", "Hardly I had sat down when the phone rang."] },
        },
        { t: "p", md: "**Qoida eslatmasi:** salbiy so'z + **yordamchi fe'l** + ega. Yordamchi yo'q bo'lsa, **do / does / did** qo'shing va asosiy fe'lni **asl shaklda** qoldiring. Ikkinchi qism (*but he also…, when the phone rang*) odatdagi tartibda qoladi." },
        { t: "check", ex: { k: "fix", wrong: "Never I have seen such a beautiful city.", a: ["Never have I seen such a beautiful city."], hint: "have egadan oldin", why: "Salbiy so'zdan keyin yordamchi fe'l oldinga: **have I seen**." } },
        { t: "check", ex: { k: "fix", wrong: "Rarely he calls us.", a: ["Rarely does he call us."], hint: "do/does kerak", why: "Present Simple: **does** + ega + **asosiy fe'l** (call)." } },
        { t: "check", ex: { k: "fix", wrong: "Not only he was late, but he also forgot the documents.", a: ["Not only was he late, but he also forgot the documents."], hint: "be fe'li egadan oldin", why: "**Not only** dan keyin **was** egadan oldin chiqadi." } },
        { t: "check", ex: { k: "fix", wrong: "Hardly I had sat down when the phone rang.", a: ["Hardly had I sat down when the phone rang."], hint: "had egadan oldin", why: "**Hardly + had + ega + V3 … when**." } },
      ],
    },
    {
      title: "O'qing: Cho'qqidagi saboq",
      blocks: [
        {
          t: "text", title: "A lesson from the mountains", voice: "george",
          en: "I have been climbing for twenty years, and seldom have I felt as frightened as on my last expedition. Hardly had we left the camp when the weather began to change. Little did we know that the storm would last three days. No sooner had we reached the ridge than the wind became so strong that we could hardly stand. Not only did we lose a whole day, but we also lost most of our food. Only then did I understand how important careful planning is. Never again will I ignore a weather warning. Mishaps like this are part of the sport, but the commitment of the team saved us. Had we turned back earlier, we would have avoided the danger. The storm was completely unforeseen, but we should have been better prepared.",
          uz: "Men yigirma yildan beri tog'ga chiqaman va oxirgi ekspeditsiyadagidek qo'rqqanimni kamdan-kam eslayman. Lagerdan chiqishimiz bilan ob-havo o'zgara boshladi. Bo'ron uch kun davom etishini bilmas edik. Tizmaga yetishimiz bilan shamol shunchalik kuchaydiki, zo'rg'a tura oldik. Biz nafaqat bir kunni yo'qotdik, balki ovqatimizning ko'p qismini ham yo'qotdik. Faqat shundagina puxta rejalashtirish naqadar muhimligini tushundim. Boshqa hech qachon ob-havo ogohlantirishini e'tiborsiz qoldirmayman. Bunday baxtsiz hodisalar sportning bir qismi, lekin jamoaning sadoqati bizni qutqardi. Ertaroq qaytganimizda, xavfdan qochgan bo'lardik. Bo'ron butunlay kutilmagan edi, lekin biz yaxshiroq tayyorlanishimiz kerak edi.",
        },
        { t: "check", ex: { k: "tf", q: "The writer knew in advance that the storm would last three days.", a: false, why: "*Little did we know that the storm would last three days* — ular bilmagan." } },
        { t: "check", ex: { k: "choice", q: "What does the writer say saved the team?", opts: ["The commitment of the team", "A weather warning", "More food", "A new camp"], a: 0, why: "*the commitment of the team saved us*." } },
        { t: "check", ex: { k: "choice", q: "Which sentence in the text means *We would have avoided the danger if we had turned back earlier*?", opts: ["Had we turned back earlier, we would have avoided the danger.", "Little did we know about the danger.", "Never again will I ignore a weather warning.", "Only then did I understand."], a: 0, why: "**Had we turned back …** — **if** siz 3-shart." } },
      ],
    },
    {
      title: "Dialog: Nutqni tayyorlash",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Nora", en: "Jasur, can you check my speech for the award ceremony? Is it too formal?", uz: "Jasur, mukofotlash marosimi uchun nutqimni tekshirib bera olasanmi? U juda rasmiy emasmi?" },
            { who: "Jasur", en: "Let me see. \"Never have we had so many volunteers.\" That sounds strong and natural for a speech.", uz: "Ko'rib chiqay. «Hech qachon bunchalik ko'p ko'ngilli bo'lmagan.» Nutq uchun kuchli va tabiiy eshitiladi." },
            { who: "Nora", en: "Thanks. I also wrote \"Not only did they give their time, but they also raised money.\"", uz: "Rahmat. Yana «Ular nafaqat vaqtini berdi, balki pul ham yig'di» deb yozdim." },
            { who: "Jasur", en: "Good. But don't use inversion in every sentence. Rarely does a speaker need more than three.", uz: "Yaxshi. Lekin har gapda inversiya ishlatma. Notiqqa kamdan-kam uchtadan ko'p kerak bo'ladi." },
            { who: "Nora", en: "I see. What about the ending? \"Only when we work together can we succeed.\"", uz: "Tushundim. Yakuni-chi? «Faqat birgalikda ishlaganimizdagina muvaffaqiyatga erisha olamiz.»" },
            { who: "Jasur", en: "Perfect. Should you feel nervous, just pause after that line.", uz: "Zo'r. Hayajonlansang, shu jumladan keyin to'xtab tur." },
            { who: "Nora", en: "I will. I'm always nervous before I speak in public.", uz: "Shunday qilaman. Men ommaviy gapirishdan oldin doim hayajonlanaman." },
            { who: "Jasur", en: "So am I, honestly. Everybody is.", uz: "Rostini aytsam, men ham. Hamma hayajonlanadi." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "What advice does Jasur give about inversion?", opts: ["Use it only a few times in a speech", "Use it in every sentence", "Never use it", "Use it only in questions"], a: 0, why: "*Rarely does a speaker need more than three.*" } },
        { t: "check", ex: { k: "tf", q: "In the last line, \"So am I\" means that Jasur is also nervous when speaking in public.", a: true, why: "**So am I** = *I am also nervous*." } },
      ],
    },
  ],
  words: [
    { en: "seldom", uz: "kamdan-kam", ipa: "ˈsel.dəm", pos: "adverb", ex: "Seldom do we receive such honest feedback.", exUz: "Biz bunday halol fikrni kamdan-kam olamiz." },
    { en: "scarcely", uz: "zo'rg'a, deyarli ... emas", ipa: "ˈskeəs.li", pos: "adverb", ex: "Scarcely had the lecture begun when the lights went out.", exUz: "Ma'ruza boshlanishi bilan chiroqlar o'chdi." },
    { en: "mishap", uz: "kichik baxtsiz hodisa, noqulaylik", ipa: "ˈmɪs.hæp", pos: "noun", ex: "After a few small mishaps, the trip went smoothly.", exUz: "Bir necha kichik noqulayliklardan keyin sayohat silliq o'tdi." },
    { en: "commitment", uz: "majburiyat, sadoqat", ipa: "kəˈmɪt.mənt", pos: "noun", ex: "Her commitment to the team impressed everyone.", exUz: "Uning jamoaga sadoqati hammani hayratga soldi." },
    { en: "unforeseen", uz: "oldindan ko'rilmagan, kutilmagan", ipa: "ˌʌn.fɔːˈsiːn", pos: "adjective", ex: "The meeting was cancelled because of unforeseen problems.", exUz: "Yig'ilish kutilmagan muammolar tufayli bekor qilindi." },
    { en: "under no circumstances", uz: "hech qanday sharoitda", ipa: "ˌʌn.də nəʊ ˈsɜː.kəm.stɑːn.sɪz", pos: "phrase", ex: "Under no circumstances should you open the file.", exUz: "Hech qanday sharoitda faylni ochmang." },
    { en: "no sooner … than", uz: "…ishi bilan (shu zahoti)", ipa: "nəʊ ˈsuː.nə ðæn", pos: "phrase", ex: "No sooner had I arrived than the meeting started.", exUz: "Yetib kelishim bilan yig'ilish boshlandi." },
    { en: "hardly … when", uz: "…ganda (shu zahoti)", ipa: "ˈhɑːd.li wen", pos: "phrase", ex: "Hardly had we started when it began to rain.", exUz: "Boshlashimiz bilan yomg'ir yog'a boshladi." },
    { en: "little did I know", uz: "bilmas edim", ipa: "ˈlɪt.əl dɪd aɪ nəʊ", pos: "phrase", ex: "Little did I know that she was already waiting outside.", exUz: "Uning allaqachon tashqarida kutayotganini bilmas edim." },
    { en: "only then", uz: "faqat o'shanda", ipa: "ˈəʊn.li ðen", pos: "phrase", ex: "Only then did he realise how late it was.", exUz: "Faqat o'shanda u vaqt qanchalik kech bo'lganini tushundi." },
  ],
  practice: [
    { k: "choice", q: "Which sentence has the correct word order?", opts: ["Rarely we eat out on weekdays.", "Rarely do we eat out on weekdays.", "Rarely we do eat out on weekdays.", "Rarely eat we out on weekdays."], a: 1, why: "**Rarely + do + ega + asosiy fe'l**." },
    { k: "choice", q: "Hardly ___ the door when the alarm went off.", opts: ["had I opened", "I had opened", "I opened", "did I opened"], a: 0, why: "**Hardly + had + ega + V3 … when**." },
    { k: "listen", say: "Never have I felt so proud.", opts: ["Never have I felt so proud.", "I have never felt so proud.", "Never I have felt so proud.", "Never did I felt so proud."], a: 0, why: "Eshitilgan gap: **Never have I felt …**" },
    { k: "fill", q: "Not only ___ she write the report, but she also presented it.", a: ["did"], uz: "U hisobotni yozibgina qolmay, taqdim ham qildi.", why: "Past Simple: **Not only did + ega + asosiy fe'l**." },
    { k: "fill", q: "Little ___ they know that the shop was closing.", a: ["did"], uz: "Ular do'kon yopilayotganini bilmas edilar.", why: "**Little did + ega + fe'l**." },
    { k: "fill", q: "Only after the match ___ I realise how tired I was.", a: ["did"], uz: "Faqat o'yindan keyin qanchalik charchaganimni tushundim.", why: "**Only after …** + **did** + ega + asosiy fe'l." },
    { k: "order", uz: "Biz bunday yaxshi xabarni kamdan-kam olamiz.", words: ["Rarely", "do", "we", "get", "such", "good", "news."], extra: ["does", "are"], why: "**Rarely do we get …**" },
    { k: "order", uz: "U o'tirishi bilan telefon jiringladi.", words: ["No", "sooner", "had", "she", "sat", "down", "than", "the", "phone", "rang."], extra: ["when", "did"], why: "**No sooner had + ega + V3 … than**." },
    { k: "translate", uz: "Men hech qachon bunday go'zal shaharni ko'rmaganman.", a: ["Never have I seen such a beautiful city.", "Never have I seen such a beautiful town.", "Never have I seen a city so beautiful."], why: "**Never have I seen …** — inversiya." },
    { k: "translate", uz: "Hech qanday sharoitda siz bu eshikni ochmasligingiz kerak.", a: ["Under no circumstances should you open this door.", "Under no circumstances must you open this door.", "Under no circumstances should you open that door."], why: "**Under no circumstances + should + you**." },
    { k: "fix", wrong: "Never I have seen such an honest politician.", a: ["Never have I seen such an honest politician."], hint: "have egadan oldin", why: "Salbiy so'zdan keyin yordamchi fe'l oldinga chiqadi." },
    { k: "fix", wrong: "Seldom does he comes to the office on Fridays.", a: ["Seldom does he come to the office on Fridays."], hint: "does dan keyin asosiy fe'l", why: "**does** dan keyin fe'l **come**, **-s** shu yordamchida ko'rinadi." },
    { k: "match", pairs: [["mishap", "kichik baxtsiz hodisa"], ["commitment", "majburiyat"], ["unforeseen", "kutilmagan"], ["seldom", "kamdan-kam"], ["scarcely", "zo'rg'a"]] },
    { k: "tf", q: "**Only when the manager arrived did the meeting start.** Bu gapda inversiya bosh gapda (*did the meeting start*).", a: true, why: "**Only when …** dan keyin bosh gapda inversiya: **did + ega + fe'l**." },
    { k: "dictation", say: "Had I known, I would have called you.", uz: "Bilganimda, sizga qo'ng'iroq qilgan bo'lardim.", why: "3-shart, **if** siz: **Had I known …**" },
    { k: "speak", say: "Not only did I miss the train, but I also forgot my wallet.", uz: "Poyezdga kechikibgina qolmay, hamyonimni ham unutdim." },
  ],
  quiz: [
    { k: "choice", q: "___ she left the room than everyone started talking.", opts: ["No sooner had", "Hardly had", "Not only had", "Little had"], a: 0, why: "**than** bilan faqat **no sooner had** mos keladi (*hardly … when*)." },
    { k: "choice", q: "Under no circumstances ___ leave the building.", opts: ["should you", "you should", "you must", "you do"], a: 0, why: "**Under no circumstances + should + you**." },
    { k: "choice", q: "___ you need any assistance, please ask at reception.", opts: ["Should", "Would", "Do", "Might"], a: 0, why: "Rasmiy 1-shart, **if** siz: **Should you need …**" },
    { k: "choice", q: "I can't drive. — ___.", opts: ["Neither can I", "Neither I can", "So can I", "Nor I can"], a: 0, why: "Inkor + «men ham»: **Neither can I**." },
    { k: "fill", q: "Hardly ___ the meeting started when the fire alarm rang.", a: ["had"], uz: "Yig'ilish boshlanishi bilan yong'in signali jiringladi.", why: "**Hardly had + ega + V3 … when**." },
    { k: "fill", q: "___ I you, I would accept their offer.", a: ["Were"], uz: "Sizning o'rningizda bo'lsam, ularning taklifini qabul qilardim.", why: "2-shart, **if** siz: **Were I you …**" },
    { k: "fix", wrong: "Not only he was rude, but he also refused to apologise.", a: ["Not only was he rude, but he also refused to apologise."], hint: "was egadan oldin", why: "**Not only** dan keyin yordamchi (be) egadan oldin." },
    { k: "order", uz: "Faqat o'shandagina u haqiqatni tushundi.", words: ["Only", "then", "did", "he", "understand", "the", "truth."], extra: ["is", "does"], why: "**Only then + did + ega + asosiy fe'l**." },
    { k: "translate", uz: "Rejaning bunchalik yomon chiqishini bilmas edik.", a: ["Little did we know that the plan would go so wrong.", "Little did we know the plan would go so wrong.", "Little did we know that the plan would turn out so badly.", "Little did we know the plan would turn out so badly."], why: "**Little did we know …** — «bilmas edik»." },
    { k: "tf", q: "**Rarely he visits us.** — bu gap to'g'ri.", a: false, why: "**Rarely does he visit us.** — **does** kerak." },
  ],
  summary: [
    "Salbiy/cheklovchi so'z gap boshida bo'lsa (**never, rarely, seldom, hardly, no sooner, not only, only after, under no circumstances, little**), **yordamchi fe'l egadan oldin** keladi: *Never have I seen…*",
    "Yordamchi yo'q bo'lsa — **do / does / did** qo'shing, asosiy fe'l asl shaklda: *Rarely **does** she **call**.* **Hardly … when**, **No sooner … than** — Past Perfect + Past Simple.",
    "**Only when / after / then** dan keyin inversiya bosh gapda: *Only then did I understand.* **So / Neither / Nor + yordamchi + ega**: *So do I, Neither have I.*",
    "Rasmiy shart gaplar: **Had I known…, Should you need…, Were I you…** (*if* siz). Xato: ~~Never I have seen~~, ~~Rarely he calls~~, ~~Not only he was late~~.",
    "Inversiya rasmiy va adabiy uslubda. Bir matnda 1–3 tadan ortiq ishlatmang.",
  ],
  homework: "Bugungi kuningiz haqida 6 ta gap yozing va har birini inversiyali shaklga aylantiring: *Never…, Rarely…, Hardly… when, No sooner… than, Not only… but also, Only after…* Har gapda yordamchi fe'l egadan oldin turganini tekshiring. Keyin 2 daqiqalik qisqa nutq (ovozli xabar) yozib oling va 2 ta inversiyani ishlating.",
};

export default lesson;
