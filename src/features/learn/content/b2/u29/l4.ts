import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u29-l4",
  title: "Adjectives, adverbs and modifying",
  titleUz: "Sifat va ravishlar: tartib, kuchaytirish, ravish o'rni",
  goal: "Sifat va ravishlarni B2 darajasida ishlatasiz: **sifatlar tartibi** (*a beautiful old stone bridge*), **gradable / non-gradable** sifatlarni to'g'ri kuchaytirasiz (*very good, absolutely wonderful*), **ravishning o'rni** va ma'nosi o'zgargan ravishlarni (*hard / hardly, late / lately*), **compound adjectives** (*a ten-minute walk*) va **the + sifat** ni bilasiz hamda *speaks English good*, *a ten-minutes walk* kabi xatolardan qochasiz.",
  slides: [
    {
      title: "Nima uchun kerak? Aniq va boy tasvir",
      blocks: [
        { t: "p", md: "*It was a good film* — to'g'ri, lekin juda oddiy. B2 da siz tasvirni **aniq** va **tabiiy** qilishingiz kerak: *a thought-provoking documentary, absolutely brilliant, rather long*. Buning uchun sifat va ravishni **to'g'ri kuchaytirish**, **tartibda** joylash va **to'g'ri joyga** qo'yish kerak." },
        { t: "p", md: "Birinchi qoida: sifatlar ikki turga bo'linadi." },
        {
          t: "table", head: ["Tur", "Misol", "Kuchaytiruvchi"], speak: [1, 2],
          rows: [
            ["**Gradable** (darajasi bor)", "good, cold, tired, important, interesting", "very, extremely, fairly, rather, pretty, quite"],
            ["**Non-gradable** (chegarasi bor)", "wonderful, freezing, exhausted, essential, impossible, perfect", "absolutely, utterly, completely, totally"],
          ],
        },
        { t: "tip", tone: "info", md: "*Good* — «yaxshi, juda yaxshi» daraja bor. *Wonderful* esa allaqachon «juda yaxshi», shuning uchun **very wonderful** noto'g'ri, **absolutely wonderful** to'g'ri. Xuddi shunday: ~~absolutely tired~~ → **very tired** yoki **absolutely exhausted**." },
        { t: "check", ex: { k: "choice", q: "The view from the top was ___ breathtaking.", opts: ["absolutely", "very", "fairly", "rather"], a: 0, why: "*Breathtaking* — non-gradable, shuning uchun **absolutely**. Qolganlari gradable sifatlar bilan." } },
        { t: "check", ex: { k: "fix", wrong: "The soup was absolutely hot.", a: ["The soup was very hot.", "The soup was extremely hot.", "The soup was really hot.", "The soup was pretty hot.", "The soup was boiling hot."], hint: "hot gradable", why: "*Hot* — gradable (issiq-ning darajalari bor): **very / extremely hot**. *Boiling* non-gradable." } },
      ],
    },
    {
      title: "Fairly, pretty, quite, rather: darajani sozlash",
      blocks: [
        { t: "p", md: "Bu to'rtta ravish gradable sifat oldida **o'rtacha darajani** bildiradi, lekin nozik farqi bor:" },
        {
          t: "table", head: ["So'z", "Ma'no", "Misol"], speak: [2],
          rows: [
            ["fairly", "bir oz, ijobiy (yumshoq)", "The food was fairly good, so we went back."],
            ["pretty", "kundalik tilda *fairly / very* o'rtasida", "It's pretty cold today, wear a coat."],
            ["quite", "britaniyacha: *fairly*; non-gradable bilan: *completely*", "It's quite warm. / You're quite right."],
            ["rather", "kutilganidan ko'proq (ko'pincha salbiy yoki kutilmagan)", "The test was rather difficult."],
          ],
        },
        {
          t: "examples", items: [
            { en: "The hotel is fairly cheap, but the rooms are small.", uz: "Mehmonxona ancha arzon, lekin xonalar kichik." },
            { en: "The lecture was rather long, and I nearly fell asleep.", uz: "Ma'ruza ancha uzun edi va men deyarli uxlab qoldim." },
            { en: "You are quite right. I made a mistake.", uz: "Siz mutlaqo haqsiz. Men xato qildim." },
          ],
        },
        { t: "tip", tone: "warn", md: "**Fairly** salbiy sifatlar bilan ham, ijobiy sifatlar bilan ham ishlatiladi, lekin **rather** ko'proq nomaqbul yoki kutilmagan narsani aytadi. *Fairly* odatda *rather* dan yumshoqroq. Non-gradable sifatlar (*perfect, impossible*) bilan ular ishlatilmaydi." },
        { t: "check", ex: { k: "choice", q: "The meal was good, but not wonderful. Which adverb fits best?", opts: ["fairly", "absolutely", "utterly", "completely"], a: 0, why: "*Good, but not wonderful* — o'rtacha daraja: **fairly good**. Qolganlari non-gradable bilan kuchli." } },
        { t: "check", ex: { k: "fill", q: "You are ___ right, I should have called earlier. (British: completely)", a: ["quite"], why: "**Quite right** = mutlaqo haq.", hint: "q____" } },
      ],
    },
    {
      title: "Sifatlar tartibi",
      blocks: [
        { t: "p", md: "Ot oldida bir nechta sifat bo'lsa, ular ma'lum **tartibda** turadi. O'zbekchada tartib erkin, inglizchada esa qattiq." },
        {
          t: "table", head: ["O'rin", "Tur", "Misol"], speak: [2],
          rows: [
            ["1", "fikr (opinion)", "beautiful, lovely, awful"],
            ["2", "o'lcham (size)", "large, small, tall"],
            ["3", "yosh (age)", "old, new, modern"],
            ["4", "shakl (shape)", "round, square"],
            ["5", "rang (colour)", "red, black, green"],
            ["6", "kelib chiqish (origin)", "Italian, Asian"],
            ["7", "material", "wooden, leather, stone"],
            ["8", "maqsad (purpose)", "sleeping (bag), dining (table)"],
          ],
        },
        {
          t: "examples", items: [
            { en: "a beautiful old stone bridge", uz: "chiroyli eski tosh ko'prik" },
            { en: "a small black leather bag", uz: "kichik qora charm sumka" },
            { en: "a large modern glass building", uz: "katta zamonaviy shisha bino" },
            { en: "a cold, wet, windy day", uz: "sovuq, nam, shamolli kun" },
          ],
        },
        { t: "tip", tone: "info", md: "Bir xil turdagi sifatlar orasiga **vergul** qo'yiladi (*cold, wet, windy*). Har xil tur bo'lsa vergul yo'q (*a small black bag*). Amalda bir ot oldida **3 tadan ko'p sifat** kam ishlatiladi." },
        { t: "check", ex: { k: "choice", q: "Qaysi to'g'ri tartib?", opts: ["a lovely small wooden table", "a wooden small lovely table", "a small lovely wooden table", "a wooden lovely small table"], a: 0, why: "Fikr (*lovely*) → o'lcham (*small*) → material (*wooden*)." } },
        { t: "check", ex: { k: "order", uz: "Menda eski qora charm kurtka bor.", words: ["I", "have", "an", "old", "black", "leather", "jacket."], extra: ["leather", "black"], why: "Yosh → rang → material: **old black leather**." } },
      ],
    },
    {
      title: "Ravishning o'rni va ma'nosi o'zgargan ravishlar",
      blocks: [
        { t: "p", md: "Ravish gapda **uch joyda** turishi mumkin. Joy uning turiga bog'liq." },
        {
          t: "table", head: ["O'rin", "Ravish turi", "Misol"], speak: [2],
          rows: [
            ["Boshida", "fikr, munosabat (*fortunately, obviously*)", "Fortunately, nobody was hurt."],
            ["O'rtada (fe'l oldida)", "chastota, ehtimol (*always, rarely, probably*)", "She rarely eats meat."],
            ["O'rtada (be dan keyin)", "chastota (*always*)", "He is usually on time."],
            ["Oxirida", "usul, joy, vaqt (*carefully, here, yesterday*)", "He drove carefully."],
          ],
        },
        { t: "p", md: "Ba'zi ravishlar **-ly bilan** va **-ly siz** shakllarda **boshqa-boshqa ma'no** beradi. Bu juda tez-tez aralashtiriladi." },
        {
          t: "table", head: ["Ravish", "Ma'no", "Ravish (-ly)", "Ma'no"],
          rows: [
            ["hard", "qattiq, jiddiy (*work hard*)", "hardly", "deyarli yo'q (*hardly any time*)"],
            ["late", "kech (*arrived late*)", "lately", "yaqinda, so'nggi paytlarda"],
            ["near", "yaqin (*come near*)", "nearly", "deyarli (*nearly finished*)"],
            ["high", "baland (*jumped high*)", "highly", "juda, yuqori darajada (*highly recommended*)"],
            ["wide", "keng (*open wide*)", "widely", "keng tarqalgan (*widely known*)"],
          ],
        },
        { t: "tip", tone: "warn", md: "Hardly **salbiy** ma'noda («deyarli yo'q»): *I can hardly hear you.* «Qattiq ishlamoq» — **work hard**, ~~work hardly~~ emas. **Fast** ham sifat, ham ravish: *a fast car, drive fast* (~~fastly~~ yo'q). **Good** — sifat, **well** — ravish: *speaks English well*." },
        { t: "check", ex: { k: "choice", q: "I can ___ believe it! We won the competition.", opts: ["hardly", "hard", "hardy", "hardness"], a: 0, why: "**Hardly believe** = deyarli ishonmayman (hayrat)." } },
        { t: "check", ex: { k: "fill", q: "I haven't seen Bobur ___. (recently)", a: ["lately", "recently"], uz: "Boburni so'nggi paytlarda ko'rmadim.", why: "**Lately** = so'nggi paytlarda (*late* — kech)." } },
        { t: "check", ex: { k: "choice", q: "She works ___, so she is always tired.", opts: ["hard", "hardly", "hardy", "hardily"], a: 0, why: "«Qattiq ishlamoq» — **works hard**." } },
      ],
    },
    {
      title: "Compound adjectives va the + sifat",
      blocks: [
        { t: "p", md: "**Compound adjective** — chiziqcha bilan bog'langan sifat. Ot oldida o'lchov bo'lsa, o'lchov **birlikda** turadi (-s siz): *a ten-minute walk*." },
        {
          t: "table", head: ["Tuzilma", "Misol", "Izoh"], speak: [1],
          rows: [
            ["son + o'lchov birligi (birlikda)", "a ten-minute walk, a five-year-old child", "~~a ten-minutes walk~~"],
            ["sifat + ot-ed", "a well-known writer, a part-time job", "chiziqcha bilan"],
            ["ot + sifat", "user-friendly, eco-friendly", "-friendly = qulay, ziyon qilmaydigan"],
            ["ot + -ing", "a time-consuming process, a thought-provoking idea", "ma'no: vaqt oladigan, o'ylantiradigan"],
          ],
        },
        { t: "compare",
          good: { title: "To'g'ri", items: ["a ten-minute walk", "She is five years old. / a five-year-old girl.", "a two-hour meeting", "The meeting lasted two hours."] },
          bad: { title: "Xato", items: ["a ten-minutes walk", "a five-years-old girl", "a two-hours meeting", "The meeting lasted two-hour."] } },
        { t: "tip", tone: "info", md: "Tavsif fe'llaridan keyin (*look, feel, sound, smell, taste, seem*) **sifat** keladi, ravish emas: *The food smells delicious. She looks tired.* Lekin **fe'lni** tavsiflasak ravish: *She sings beautifully.*" },
        { t: "check", ex: { k: "fix", wrong: "We had a three-hours meeting this morning.", a: ["We had a three-hour meeting this morning."], hint: "compound adjective", why: "Ot oldida o'lchov birlikda: **three-hour**." } },
        { t: "check", ex: { k: "fill", q: "The cake smells ___. (delicious)", a: ["delicious"], uz: "Tort mazali hidli.", why: "**Smell** + sifat: *delicious*." } },
      ],
    },
    {
      title: "Tipik xatolar: o'zbek tilidan interferensiya",
      blocks: [
        { t: "p", md: "O'zbek tilida «yaxshi» sifat ham, ravish ham bo'la oladi: *yaxshi gapiradi, yaxshi odam*. Shu sababli sifat va ravishni aralashtiramiz. Quyida eng ko'p uchraydigan xatolar:" },
        { t: "compare",
          good: { title: "To'g'ri", items: ["She speaks English well.", "I worked hard all week.", "a beautiful wooden table", "She felt very tired. / absolutely exhausted."] },
          bad: { title: "Xato", items: ["She speaks English good.", "I worked hardly all week.", "a wooden beautiful table", "She felt absolutely tired."] } },
        { t: "check", ex: { k: "fix", wrong: "He speaks English very good.", a: ["He speaks English very well."], hint: "fe'lni tavsiflaydi", why: "Fe'lni (*speaks*) tavsiflash uchun **ravish — well**." } },
        { t: "check", ex: { k: "fix", wrong: "I studied hardly for the exam.", a: ["I studied hard for the exam."], hint: "qattiq", why: "«Qattiq» = **hard**. *Hardly* — deyarli yo'q." } },
        { t: "check", ex: { k: "fix", wrong: "She bought a wooden beautiful table.", a: ["She bought a beautiful wooden table."], hint: "tartib", why: "Fikr (*beautiful*) → material (*wooden*)." } },
        { t: "check", ex: { k: "fix", wrong: "We were very exhausted after the journey.", a: ["We were absolutely exhausted after the journey.", "We were completely exhausted after the journey.", "We were utterly exhausted after the journey.", "We were totally exhausted after the journey.", "We were really exhausted after the journey."], hint: "exhausted — non-gradable", why: "*Exhausted* non-gradable: **absolutely / completely exhausted**." } },
      ],
    },
    {
      title: "O'qing: Yangi ish joyi",
      blocks: [
        {
          t: "text", title: "Our new green office", voice: "george",
          en: "Last spring our company moved into a fairly small but absolutely wonderful new office. It is an eco-friendly building with a large modern glass front, and the heating is powered by the sun. At first, the move was time-consuming, and we were utterly exhausted, but fortunately the staff worked hard and everything was ready on time. The software we use is user-friendly, so new employees learn it quickly. Our manager believes that short-term costs are worth it if the long-term effects are good. She gave a thought-provoking talk about how a hands-on approach to sustainability can have far-reaching results. Lately, I have noticed that people throw away hardly any paper, which is great.",
          uz: "O'tgan bahorda kompaniyamiz ancha kichik, lekin mutlaqo ajoyib yangi ofisga ko'chdi. Bu katta zamonaviy shisha jabhali, isitish tizimi quyoshdan ishlaydigan ekologik toza bino. Boshida ko'chish ko'p vaqt oldi va biz juda charchadik, lekin xodimlar qattiq ishlagani uchun hammasi o'z vaqtida tayyor bo'ldi. Ishlatadigan dasturimiz qulay, shuning uchun yangi xodimlar uni tez o'rganadi. Rahbarimiz agar uzoq muddatli natija yaxshi bo'lsa, qisqa muddatli xarajatlar o'zini oqlaydi deb hisoblaydi. U barqarorlikka amaliy yondashuv qanday uzoqqa boruvchi natijalar berishi haqida o'ylantiradigan nutq so'zladi. So'nggi paytlarda odamlar deyarli qog'oz tashlamayotganini payqadim, bu juda yaxshi.",
        },
        { t: "check", ex: { k: "tf", q: "The move to the new office was quick and easy.", a: false, why: "Matnda: *time-consuming* va *utterly exhausted* — ko'p vaqt olgan va charchatgan." } },
        { t: "check", ex: { k: "choice", q: "What has the writer noticed lately?", opts: ["Hardly any paper is thrown away.", "The staff work less.", "The heating is broken.", "The software is difficult."], a: 0, why: "*People throw away hardly any paper.*" } },
      ],
    },
    {
      title: "Dialog: Yangi ilova haqida",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Madina", en: "Have you tried the new fitness app, Ali? It's absolutely brilliant.", uz: "Yangi fitnes ilovasini sinab ko'rdingizmi, Ali? U mutlaqo ajoyib." },
            { who: "Ali", en: "I downloaded it last week. It looks fairly easy to use, but I'm not sure.", uz: "O'tgan hafta yukladim. Ishlatishga ancha oson ko'rinadi, lekin ishonchim komil emas." },
            { who: "Madina", en: "It's very user-friendly. I do a twenty-minute workout every morning.", uz: "U juda qulay. Men har ertalab yigirma daqiqalik mashq qilaman." },
            { who: "Ali", en: "Really? I can hardly get out of bed before eight lately.", uz: "Rostdanmi? So'nggi paytlarda sakkizgacha zo'rg'a turaman." },
            { who: "Madina", en: "Try a ten-minute walk first. It's a simple, cheap, healthy habit.", uz: "Avval o'n daqiqalik sayrdan boshlang. Bu oddiy, arzon, foydali odat." },
            { who: "Ali", en: "That sounds sensible. The doctor said I should exercise more, but I work such long hours.", uz: "Aqlli gap. Shifokor ko'proq harakat qilishim kerak dedi, lekin men shunchalik ko'p ishlayman." },
            { who: "Madina", en: "Start small, and the results will be far better than you think.", uz: "Kichikdan boshlang, natijalar o'ylagandan ancha yaxshi bo'ladi." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "What does Madina suggest?", opts: ["A ten-minute walk to begin with", "A twenty-hour workout", "Stopping work", "Buying a new bed"], a: 0, why: "*Try a ten-minute walk first.*" } },
        { t: "check", ex: { k: "match", pairs: [["user-friendly", "foydalanishga qulay"], ["time-consuming", "ko'p vaqt oladigan"], ["thought-provoking", "o'ylantiradigan"], ["eco-friendly", "tabiatga zarar qilmaydigan"]] } },
      ],
    },
  ],
  words: [
    { en: "short-term", uz: "qisqa muddatli", ipa: "ˌʃɔːtˈtɜːm", pos: "adj", ex: "This is only a short-term solution to the problem.", exUz: "Bu muammoning faqat qisqa muddatli yechimi." },
    { en: "eco-friendly", uz: "ekologik toza, tabiatga zarar keltirmaydigan", ipa: "ˌiː.kəʊˈfrend.li", pos: "adj", ex: "We try to buy eco-friendly products.", exUz: "Biz ekologik toza mahsulotlarni sotib olishga harakat qilamiz." },
    { en: "user-friendly", uz: "foydalanishga qulay", ipa: "ˌjuː.zəˈfrend.li", pos: "adj", ex: "The website is clear and user-friendly.", exUz: "Sayt aniq va foydalanishga qulay." },
    { en: "time-consuming", uz: "ko'p vaqt oladigan", ipa: "ˈtaɪm kənˌsjuː.mɪŋ", pos: "adj", ex: "Filling in the forms is time-consuming.", exUz: "Shakllarni to'ldirish ko'p vaqt oladi." },
    { en: "thought-provoking", uz: "o'ylantiradigan", ipa: "ˈθɔːt prəˌvəʊ.kɪŋ", pos: "adj", ex: "It was a thought-provoking film about modern life.", exUz: "Bu zamonaviy hayot haqida o'ylantiradigan film edi." },
    { en: "far-reaching", uz: "uzoqqa boruvchi, keng ko'lamli", ipa: "ˌfɑːˈriː.tʃɪŋ", pos: "adj", ex: "The new law will have far-reaching effects.", exUz: "Yangi qonun keng ko'lamli ta'sir ko'rsatadi." },
    { en: "hands-on", uz: "amaliy, bevosita ishtirokli", ipa: "ˌhændzˈɒn", pos: "adj", ex: "She has hands-on experience of teaching.", exUz: "Uning o'qitishda amaliy tajribasi bor." },
    { en: "utterly", uz: "butunlay, mutlaqo", ipa: "ˈʌt.ə.li", pos: "adv", ex: "The plan was utterly useless.", exUz: "Reja butunlay foydasiz edi." },
    { en: "absolutely", uz: "mutlaqo, butunlay", ipa: "ˈæb.sə.luːt.li", pos: "adv", ex: "I'm absolutely sure that I locked the door.", exUz: "Eshikni qulflaganimga mutlaqo aminman." },
    { en: "fairly", uz: "ancha, ma'lum darajada", ipa: "ˈfeə.li", pos: "adv", ex: "The film was fairly good, but too long.", exUz: "Film ancha yaxshi edi, lekin juda uzun." },
  ],
  practice: [
    { k: "choice", q: "I was ___ delighted with the result, it was perfect.", opts: ["absolutely", "very", "fairly", "rather"], a: 0, why: "*Delighted* — non-gradable: **absolutely**." },
    { k: "choice", q: "Which is the correct order?", opts: ["a lovely old Italian car", "an Italian old lovely car", "an old lovely Italian car", "a lovely Italian old car"], a: 0, why: "Fikr → yosh → kelib chiqish: **lovely old Italian**." },
    { k: "listen", say: "We had a two-hour meeting this morning.", opts: ["We had a two-hour meeting this morning.", "We had a two-hours meeting this morning.", "We had two-hour a meeting this morning.", "We had a two-hour meetings this morning."], a: 0, why: "Compound adjective: **two-hour** (birlikda)." },
    { k: "fill", q: "She speaks German very ___. (good/well)", a: ["well"], uz: "U nemis tilida juda yaxshi gapiradi.", why: "Fe'lni tavsiflaydi: **well**." },
    { k: "fill", q: "It was a ___ walk to the station. (ten minutes)", a: ["ten-minute", "10-minute"], uz: "Bekatgacha o'n daqiqalik yo'l edi.", why: "Compound adjective birlikda: **ten-minute**." },
    { k: "fill", q: "I'm really tired. I ___ slept last night. (almost not at all)", a: ["hardly", "barely", "scarcely"], why: "**Hardly** = deyarli yo'q.", hint: "h______" },
    { k: "order", uz: "U kichkina qora charm sumka sotib oldi.", words: ["She", "bought", "a", "small", "black", "leather", "bag."], extra: ["leather", "black"], why: "O'lcham → rang → material." },
    { k: "order", uz: "Omad kulib, hech kim jarohatlanmadi.", words: ["Fortunately,", "nobody", "was", "hurt."], extra: ["Fortunate", "hurted"], why: "Fikr bildiruvchi ravish gap boshida: **Fortunately,**." },
    { k: "translate", uz: "Bu o'ylantiradigan kitob.", a: ["It is a thought-provoking book.", "It's a thought-provoking book.", "This is a thought-provoking book."], why: "**Thought-provoking** — o'ylantiradigan." },
    { k: "translate", uz: "U doim qattiq ishlaydi.", a: ["He always works hard.", "She always works hard.", "He works hard all the time.", "She works hard all the time."], why: "**Works hard**; chastota ravishi fe'l oldida." },
    { k: "match", pairs: [["user-friendly", "foydalanishga qulay"], ["time-consuming", "ko'p vaqt oladigan"], ["far-reaching", "uzoqqa boruvchi"], ["hands-on", "amaliy"], ["short-term", "qisqa muddatli"]] },
    { k: "fix", wrong: "My sister is a five-years-old girl.", a: ["My sister is a five-year-old girl.", "My sister is five years old."], hint: "compound adjective", why: "Ot oldida **five-year-old** (birlikda)." },
    { k: "fix", wrong: "She sings very good.", a: ["She sings very well."], hint: "ravish", why: "Fe'lni tavsiflash — **well**." },
    { k: "tf", q: "*He worked hardly all week and he was tired.* gapi to'g'ri.", a: false, why: "«Qattiq» — **hard**; *hardly* = deyarli yo'q." },
    { k: "dictation", say: "The new software is surprisingly user-friendly.", uz: "Yangi dastur kutilmaganda qulay.", why: "**User-friendly** — foydalanishga qulay." },
    { k: "speak", say: "It was an absolutely wonderful trip, though a little time-consuming.", uz: "Bu mutlaqo ajoyib sayohat edi, garchi ozgina ko'p vaqt olgan bo'lsa ham." },
  ],
  quiz: [
    { k: "choice", q: "The old building is ___ dangerous, so nobody goes inside.", opts: ["extremely", "absolutely", "utterly", "completely"], a: 0, why: "*Dangerous* — gradable: **extremely**. Qolganlari non-gradable bilan." },
    { k: "choice", q: "Which sentence is correct?", opts: ["She looks tired.", "She looks tiredly.", "She looks tire.", "She looks hardly."], a: 0, why: "**Look** + sifat: *looks tired*." },
    { k: "choice", q: "Which means 'recently'?", opts: ["lately", "late", "hardly", "hard"], a: 0, why: "**Lately** = so'nggi paytlarda." },
    { k: "choice", q: "He gave a ___ speech that made everyone think.", opts: ["thought-provoking", "time-consuming", "user-friendly", "short-term"], a: 0, why: "Hammani o'ylantirgan — **thought-provoking**." },
    { k: "fill", q: "The report is twenty pages long: it is a twenty-___ report.", a: ["page"], uz: "Hisobot yigirma betlik.", why: "Compound adjective birlikda: **twenty-page**." },
    { k: "fill", q: "There was ___ any food left after the party. (almost none)", a: ["hardly", "barely", "scarcely"], uz: "Ziyofatdan keyin deyarli ovqat qolmadi.", why: "**Hardly any** = deyarli yo'q." },
    { k: "order", uz: "Bu ancha uzun, lekin juda yaxshi film.", words: ["It", "is", "a", "fairly", "long", "but", "very", "good", "film."], extra: ["absolutely", "hardly"], why: "**Fairly** + *long* (gradable), **very** + *good* (gradable)." },
    { k: "translate", uz: "U yarim soatlik tanaffus oldi.", a: ["She took a half-hour break.", "She had a half-hour break.", "She took a thirty-minute break.", "She had a thirty-minute break."], why: "Compound adjective birlikda: **half-hour / thirty-minute**." },
    { k: "fix", wrong: "We had a ten-minutes break.", a: ["We had a ten-minute break."], hint: "compound adjective", why: "O'lchov birlikda: **ten-minute**." },
    { k: "tf", q: "*Absolutely tired* — to'g'ri ibora.", a: false, why: "*Tired* gradable: **very tired**. *Absolutely* non-gradable bilan (*exhausted*)." },
  ],
  summary: [
    "**Gradable** (*good, cold, tired*) → very, extremely, fairly, rather. **Non-gradable** (*wonderful, freezing, exhausted*) → absolutely, utterly, completely.",
    "Sifatlar tartibi: **fikr → o'lcham → yosh → shakl → rang → kelib chiqish → material → maqsad** (*a beautiful old stone bridge*).",
    "Ravish o'rni: boshida (*Fortunately,*), o'rtada (*always, rarely*), oxirida (*carefully*). **Hard / hardly**, **late / lately**, **high / highly** — ma'nosi boshqa.",
    "**Compound adjective:** son + birlik (*a ten-minute walk*), *user-friendly, time-consuming*. **Good** — sifat, **well** — ravish.",
  ],
  homework: "Bir xona yoki ofisingizni 5 ta gapda tasvirlang: har gapda kamida 2 ta sifat to'g'ri tartibda, 1 ta **gradable** va 1 ta **non-gradable** kuchaytirish (*very small, absolutely perfect*) bo'lsin. Keyin 3 ta **compound adjective** (*a ten-minute walk*) bilan gap tuzing.",
};

export default lesson;
