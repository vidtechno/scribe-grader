import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u20-l2",
  title: "First or second conditional? Unless, as long as",
  titleUz: "First yoki second conditional? Unless, as long as, provided",
  goal: "**First** va **second conditional** ni to'g'ri tanlaysiz (real yoki xayoliy), **unless**, **as long as**, **provided (that)** so'zlarini ishlatasiz va *unless* bilan qo'shimcha inkor qo'yish xatosidan qochasiz.",
  slides: [
    {
      title: "Real yoki xayoliy: siz qanday ko'rasiz?",
      blocks: [
        { t: "p", md: "Ikkala conditional ham kelajak haqida gapiradi. Farq **vaziyat qanchalik real ekanida**: gapiruvchi uni mumkin deb o'ylasa, **first conditional**; ehtimoli kam yoki xayoliy deb o'ylasa, **second conditional**." },
        {
          t: "table", head: ["", "First conditional", "Second conditional"],
          rows: [
            ["Fikr", "Bo'lishi mumkin, real", "Ehtimoli kam, xayoliy"],
            ["Shakl", "If + Present Simple, will + V1", "If + Past Simple, would + V1"],
            ["Misol 1", "If I get the job, I'll move to Leeds.", "If I got the job, I'd move to Leeds."],
            ["Ma'no", "Intervyu endi bo'ladi, imkon bor.", "Ishga olinishim juda ehtimoldan yiroq (yoki xayol)."],
          ],
        },
        { t: "tip", tone: "info", md: "Bir xil vaziyatni ikki xil aytish mumkin: tanlov sizning **fikringizga** bog'liq. Ish topish imkoni bor deb o'ylasangiz — *get … will*. Imkon kam deb o'ylasangiz — *got … would*." },
        { t: "check", ex: { k: "choice", q: "Mehmon: *I have an interview tomorrow and I think it will go well.* Qaysi gap mos?", opts: ["If I get the job, I will celebrate.", "If I got the job, I would celebrate.", "If I would get the job, I will celebrate.", "If I get the job, I would celebrate."], a: 0, why: "Imkon real → **first conditional**: *If I get … will*." } },
        { t: "check", ex: { k: "choice", q: "*I'm only fifteen, but if I ___ eighteen, I would learn to drive.*", opts: ["am", "was", "were", "will be"], a: 2, why: "Hozir 15 yoshda: xayoliy → **second conditional**, *were*." } },
      ],
    },
    {
      title: "unless = if … not",
      blocks: [
        { t: "p", md: "**Unless** «agar … bo'lmasa» degan ma'noni beradi, ya'ni **if … not** ga teng. Uning o'zi **inkor** ma'noli, shuning uchun uning ketidan **darak** (musbat) fe'l keladi." },
        {
          t: "examples", items: [
            { en: "Unless you hurry, you will miss the train.", uz: "Shoshilmasangiz, poyezdga kech qolasiz.", note: "= If you don't hurry, you will miss the train." },
            { en: "I'll go for a walk unless it rains.", uz: "Yomg'ir yog'masa, sayrga chiqaman.", note: "= if it doesn't rain." },
            { en: "We won't start unless everybody is here.", uz: "Hamma kelmaguncha boshlamaymiz." },
            { en: "I wouldn't tell her unless she asked me.", uz: "U o'zi so'ramasa, unga aytmagan bo'lardim.", note: "Unless second conditional bilan ham keladi." },
          ],
        },
        { t: "tip", tone: "warn", md: "**Unless** dan keyin yana *not* yoki *don't* qo'ymang! *Unless you don't hurry* — xato (ikki marta inkor). To'g'risi: *Unless you hurry* yoki *If you don't hurry*." },
        { t: "check", ex: { k: "fill", q: "___ you study harder, you won't pass the exam.", a: ["Unless"], why: "*Agar ko'proq o'qimasangiz* → **Unless** you study." } },
        { t: "check", ex: { k: "choice", q: "*Unless it ___ tomorrow, we'll have a picnic.*", opts: ["rains", "doesn't rain", "will rain", "rained"], a: 0, why: "**Unless** + darak fe'l, Present Simple: *rains*." } },
      ],
    },
    {
      title: "as long as, provided (that), providing",
      blocks: [
        { t: "p", md: "Bu iboralar **faqat shu shart bajarilsa** degan ma'noni beradi. Ular **if** ning kuchliroq variantlari (*if and only if*). Hammasidan keyin **Present Simple** (kelajak uchun ham) ishlatiladi." },
        {
          t: "table", head: ["Ibora", "Ma'nosi", "Misol"], speak: [2],
          rows: [
            ["as long as", "faqat … bo'lsa", "You can borrow my car as long as you drive carefully."],
            ["provided (that)", "faqat … sharti bilan", "I'll lend you money provided that you pay me back."],
            ["providing (that)", "faqat … sharti bilan", "We'll go camping providing the weather is good."],
            ["unless", "agar … bo'lmasa", "I won't go unless you come with me."],
          ],
        },
        { t: "tip", tone: "info", md: "**Provided** va **providing** biroz rasmiyroq, *as long as* kundalik suhbatda ko'proq uchraydi. Ma'no bir xil. **that** ni tushirib qoldirish mumkin." },
        { t: "check", ex: { k: "choice", q: "*You can use my laptop ___ you don't delete my files.*", opts: ["as long as", "unless", "in case", "although"], a: 0, why: "**as long as** = faqat shart bajarilsa (*fayllarimni o'chirmasangiz*)." } },
        { t: "check", ex: { k: "fill", q: "We'll have the party in the garden, ___ that it doesn't rain.", a: ["provided", "providing"], why: "**provided that** / **providing that** = faqat yomg'ir yog'masa." } },
      ],
    },
    {
      title: "Tez-tez uchraydigan xatolar",
      blocks: [
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["Unless you leave now, you will be late.", "If it rains, we'll stay at home.", "I'll help you as long as I have time.", "Take an umbrella in case it rains."] },
          bad: { title: "Xato", items: ["Unless you don't leave now, you will be late.", "If it will rain, we'll stay at home.", "I'll help you as long as I will have time."] },
        },
        { t: "tip", tone: "warn", md: "Ikkita xato odatiy: 1) **unless** + inkor; 2) **if / unless / as long as** dan keyin **will**. Kelajak haqida gapirsak ham, bu so'zlardan keyin **Present Simple** ishlatamiz." },
        { t: "p", md: "Yana bir tuzoq: **in case**. *In case it rains* — «yomg'ir yog'ib qolishi **mumkinligi uchun** (oldindan tayyorgarlik)». *If it rains* esa «yomg'ir **yog'sa** (shundagina)». Ma'no farqli:" },
        {
          t: "examples", items: [
            { en: "I'll take an umbrella in case it rains.", uz: "Yomg'ir yog'ib qolishi mumkinligi uchun soyabon olaman.", note: "Hozir olaman, yog'ishi aniq emas." },
            { en: "If it rains, I'll take an umbrella.", uz: "Yomg'ir yog'sa, soyabon olaman.", note: "Faqat yog'gandan keyin olaman." },
          ],
        },
        { t: "check", ex: { k: "fix", wrong: "Unless you don't hurry, we'll miss the bus.", a: ["Unless you hurry, we'll miss the bus.", "Unless you hurry, we will miss the bus.", "If you don't hurry, we'll miss the bus.", "If you don't hurry, we will miss the bus."], hint: "Unless o'zi inkor", why: "**Unless** = if … not, qo'shimcha inkor kerak emas." } },
        { t: "check", ex: { k: "fix", wrong: "I'll call you as long as I will arrive.", a: ["I'll call you as long as I arrive.", "I will call you as long as I arrive."], hint: "as long as dan keyin zamon", why: "**as long as** dan keyin Present Simple: *arrive*." } },
      ],
    },
    {
      title: "O'qing: yangi sport zal",
      blocks: [
        {
          t: "text", title: "The gym rules",
          en: "Welcome to our gym! You can use all the equipment as long as you wipe it clean afterwards. Children under sixteen are allowed provided that an adult is with them. If you forget your card, we will let you in, but unless you bring it next time, you will have to pay a small fee. If you book a class and can't come, please tell us. Otherwise, we will charge you for the place. Our guarantee: if you are not happy after one month, you will get a full refund. The gym would be even better if we had a swimming pool, but we hope to build one in the future!",
          uz: "Sport zalimizga xush kelibsiz! Barcha jihozlardan foydalanishingiz mumkin, faqat keyin ularni artib qo'ysangiz. O'n oltidan kichik bolalarga, agar ular bilan kattalar bo'lsa, ruxsat beriladi. Kartangizni unutsangiz, sizni kiritamiz, ammo keyingi safar olib kelmasangiz, kichik to'lov to'laysiz. Mashg'ulotga yozilib, kela olmasangiz, bizga ayting. Aks holda, joy uchun pul olamiz. Bizning kafolatimiz: bir oydan keyin mamnun bo'lmasangiz, pulingiz to'liq qaytariladi. Agar basseynimiz bo'lsa, zal yanada yaxshi bo'lardi, lekin kelajakda quramiz degan umiddamiz!",
        },
        { t: "check", ex: { k: "tf", q: "A child of twelve can use the gym alone.", a: false, why: "Bolalar faqat **kattalar bilan** kira oladi (*provided that an adult is with them*)." } },
        { t: "check", ex: { k: "choice", q: "What happens if you are not happy after one month?", opts: ["You get your money back.", "You pay a small fee.", "You must bring your card.", "You can use the pool."], a: 0, why: "*full refund* — pul to'liq qaytariladi." } },
      ],
    },
    {
      title: "Dialog: ishga taklif",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Madina", en: "Did you hear about the job in Samarkand, Jack?", uz: "Jack, Samarqanddagi ish haqida eshitdingmi?" },
            { who: "Jack", en: "Yes. If they offer it to me, I'll take it, as long as the salary is good.", uz: "Ha. Menga taklif qilishsa, olaman, faqat maosh yaxshi bo'lsa." },
            { who: "Madina", en: "And if they offered you a job in London?", uz: "Agar senga Londondagi ishni taklif qilishsa-chi?" },
            { who: "Jack", en: "I would think about it, but it's unlikely. They don't have an office there.", uz: "O'ylab ko'rardim, lekin bu ehtimoldan yiroq. Ularning u yerda ofisi yo'q." },
            { who: "Madina", en: "Unless they open one next year!", uz: "Kelasi yil ochishmasa!" },
            { who: "Jack", en: "True. Well, I'll ask about it at the interview, provided that I get one.", uz: "To'g'ri. Intervyuga chaqirilsam, shu haqda so'rayman." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "Why does Jack say \"I would think about it\"?", opts: ["A job in London is unlikely.", "He has already got the job.", "He does not like London.", "He has an interview tomorrow."], a: 0, why: "Londondagi ish ehtimoldan yiroq → **second conditional**." } },
      ],
    },
  ],
  words: [
    { en: "condition", uz: "shart, holat", ipa: "kənˈdɪʃ.ən", pos: "noun", ex: "The only condition is that you arrive on time.", exUz: "Yagona shart: o'z vaqtida kelishingiz." },
    { en: "likely", uz: "ehtimol, mumkin", ipa: "ˈlaɪk.li", pos: "adj", ex: "It is likely to snow tonight.", exUz: "Bugun kechqurun qor yog'ishi ehtimoli bor." },
    { en: "risk", uz: "xavf, tavakkal", ipa: "rɪsk", pos: "noun", ex: "Starting a business always has some risk.", exUz: "Biznes boshlashda doim biroz xavf bor." },
    { en: "deadline", uz: "oxirgi muddat", ipa: "ˈded.laɪn", pos: "noun", ex: "The deadline for the project is Friday.", exUz: "Loyiha uchun oxirgi muddat juma kuni." },
    { en: "permission", uz: "ruxsat", ipa: "pəˈmɪʃ.ən", pos: "noun", ex: "You need permission to park here.", exUz: "Bu yerda to'xtash uchun ruxsat kerak." },
    { en: "guarantee", uz: "kafolat", ipa: "ˌɡær.ənˈtiː", pos: "noun", ex: "This phone has a two-year guarantee.", exUz: "Bu telefonga ikki yillik kafolat berilgan." },
    { en: "refund", uz: "pulni qaytarish", ipa: "ˈriː.fʌnd", pos: "noun", ex: "I asked the shop for a refund.", exUz: "Do'kondan pulni qaytarishni so'radim." },
    { en: "opportunity", uz: "imkoniyat", ipa: "ˌɒp.əˈtjuː.nə.ti", pos: "noun", ex: "This course is a great opportunity to improve your English.", exUz: "Bu kurs inglizchangizni yaxshilash uchun ajoyib imkoniyat." },
    { en: "otherwise", uz: "aks holda", ipa: "ˈʌð.ə.waɪz", pos: "adv", ex: "Leave now, otherwise you will be late.", exUz: "Hozir chiqing, aks holda kech qolasiz." },
    { en: "depend on", uz: "…ga bog'liq bo'lmoq", ipa: "dɪˈpend ɒn", pos: "phrase", ex: "It depends on the weather.", exUz: "Bu ob-havoga bog'liq." },
  ],
  practice: [
    { k: "choice", q: "**If I ___ the lottery, I would buy a house.** (juda ehtimoldan yiroq)", opts: ["win", "won", "will win", "would win"], a: 1, why: "Ehtimoli kam → second conditional: **won**." },
    { k: "choice", q: "**If the weather ___ good tomorrow, we'll go hiking.** (mumkin)", opts: ["is", "were", "will be", "would be"], a: 0, why: "Real vaziyat → first conditional: **is**." },
    { k: "listen", say: "Unless you hurry, you will miss the train.", opts: ["Unless you hurry, you will miss the train.", "If you hurry, you will miss the train.", "Unless you hurry, you missed the train."], a: 0 },
    { k: "fill", q: "I won't go to the party ___ you come with me.", a: ["unless"], why: "*Sen bormasang* → **unless**." },
    { k: "fill", q: "You can stay here ___ long as you are quiet.", a: ["as"], hint: "as ___ long as", why: "**as long as** = faqat shart bajarilsa." },
    { k: "fill", q: "We'll go to the beach, ___ that the sun is shining.", a: ["provided", "providing"], hint: "provided / providing", why: "**provided that** = faqat shu shart bilan." },
    { k: "fill", q: "Leave early, ___ you will miss the bus.", a: ["otherwise"], why: "**otherwise** = aks holda." },
    { k: "order", uz: "Shoshilmasangiz, poyezdga kech qolasiz.", words: ["Unless", "you", "hurry,", "you", "will", "miss", "the", "train."], extra: ["don't"], why: "Unless + darak fe'l." },
    { k: "order", uz: "Agar yomg'ir yog'masa, biz sayrga chiqamiz.", words: ["We", "will", "go", "for", "a", "walk", "unless", "it", "rains."], extra: ["doesn't"], why: "Unless + Present Simple (darak)." },
    { k: "translate", uz: "Ob-havo yaxshi bo'lsa, tashqarida tushlik qilamiz.", a: ["If the weather is good, we will have lunch outside.", "If the weather is good, we'll have lunch outside.", "We will have lunch outside if the weather is good.", "We'll have lunch outside if the weather is good."], why: "Real vaziyat: if + Present Simple, will + V1." },
    { k: "translate", uz: "Agar yuz kishi kelsa, nima qilardik?", a: ["What would we do if a hundred people came?", "What would we do if one hundred people came?", "What would we do if 100 people came?"], why: "Ehtimoli kam → what would we do if + Past Simple." },
    { k: "match", pairs: [["deadline", "oxirgi muddat"], ["guarantee", "kafolat"], ["refund", "pulni qaytarish"], ["permission", "ruxsat"], ["otherwise", "aks holda"]] },
    { k: "tf", q: "**Unless you don't call me, I'll be angry.** — bu gap to'g'ri.", a: false, why: "**Unless** dan keyin inkor kerak emas: *Unless you call me…*" },
    { k: "tf", q: "**as long as** va **provided that** deyarli bir xil ma'noni bildiradi.", a: true, why: "Ikkalasi ham «faqat shu shart bajarilsa»." },
    { k: "fix", wrong: "If it will rain tomorrow, we will stay at home.", a: ["If it rains tomorrow, we will stay at home.", "If it rains tomorrow, we'll stay at home."], hint: "if dan keyin will yo'q", why: "**If** dan keyin Present Simple: *rains*." },
  ],
  quiz: [
    { k: "choice", q: "**Unless you ___ now, you'll be late.**", opts: ["leave", "don't leave", "will leave", "left"], a: 0, why: "**Unless** + darak Present Simple." },
    { k: "choice", q: "**I'll lend you the book ___ you return it next week.**", opts: ["as long as", "unless", "although", "in case"], a: 0, why: "Faqat shart bilan → **as long as**." },
    { k: "choice", q: "**If she ___ more money, she would buy a bigger flat.** (xayoliy)", opts: ["has", "had", "will have", "would have"], a: 1, why: "Xayoliy → **had**." },
    { k: "choice", q: "**Take a coat ___ it gets cold later.**", opts: ["in case", "unless", "as long as", "provided"], a: 0, why: "**in case** = sovuq bo'lishi mumkinligi uchun, oldindan tayyorgarlik." },
    { k: "fill", q: "We won't start the meeting ___ everyone is here.", a: ["unless"], why: "**unless** = hamma kelmasa." },
    { k: "fill", q: "If Ali ___ the exam, he will get a certificate. (pass)", a: ["passes"], why: "First conditional: if + Present Simple (he → *passes*)." },
    { k: "fill", q: "What would you do if you ___ your wallet? (lose)", a: ["lost"], why: "Second conditional: if + Past Simple." },
    { k: "listen", say: "I'll call you as long as I have time.", opts: ["I'll call you as long as I have time.", "I'll call you unless I have time.", "I called you as long as I had time."], a: 0 },
    { k: "tf", q: "**as long as** dan keyin **will** ishlatamiz: *as long as I will have time*.", a: false, why: "**as long as** dan keyin Present Simple: *as long as I have time*." },
    { k: "fix", wrong: "Unless you don't study, you will fail.", a: ["Unless you study, you will fail.", "If you don't study, you will fail."], hint: "Unless bilan inkor yo'q", why: "**Unless** o'zi inkor ma'noli." },
  ],
  summary: [
    "**First conditional** (*If I get…, I will…*) — real, mumkin. **Second conditional** (*If I got…, I would…*) — ehtimoli kam yoki xayoliy. Tanlov sizning fikringizga bog'liq.",
    "**Unless** = *if … not*. Undan keyin **darak** fe'l keladi: *Unless you hurry…* (~~Unless you don't hurry~~ — xato).",
    "**as long as, provided (that), providing (that)** = faqat shu shart bajarilsa. Ulardan keyin Present Simple: *as long as I have time*.",
    "**if, unless, as long as** dan keyin **will** qo'yilmaydi. *In case* esa «oldindan tayyorgarlik» ma'nosini beradi, *if* ga teng emas.",
  ],
  homework: "O'zingiz haqingizda 3 ta real (*If … will …*) va 3 ta xayoliy (*If … would …*) gap yozing. Keyin har biriga mos **unless**, **as long as** yoki **provided that** bilan bittadan yangi gap qo'shing.",
};

export default lesson;
