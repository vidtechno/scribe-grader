import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u25-l3",
  title: "Would rather, it's time and as if",
  titleUz: "Would rather, had better, it's time, as if / as though",
  goal: "**Would rather**, **had better**, **it's (high) time** va **as if / as though** qoliplarini ishlatasiz: o'z va birovning tanlovi haqida (*I'd rather you came tomorrow*), kuchli maslahat va ogohlantirish (*You'd better hurry*), «vaqt bo'ldi» (*It's time we left*) va haqiqatga o'xshamaydigan taqqoslash (*He talks as if he knew everything*) aytasiz. **I'd rather to stay** va **It's time we go** kabi xatolardan qochasiz.",
  slides: [
    {
      title: "To'rt qolip, bitta g'oya: o'tgan zamon shakli, hozirgi ma'no",
      blocks: [
        { t: "p", md: "Ishda, oilada va suhbatda biz doim tanlaymiz, maslahat beramiz va shikoyat qilamiz: *Men uyda qolganim ma'qul. Siz shifokorga borganingiz ma'qul. Ketadigan vaqt bo'ldi. U xuddi hamma narsani biladigandek gapiradi.* Bu to'rt qolipning umumiy tomoni: ba'zilarida fe'l **Past Simple** shaklida turadi, lekin ma'no **hozirgi yoki kelasi** zamonga tegishli bo'ladi." },
        {
          t: "table", head: ["Qolip", "Ma'nosi", "Misol"], speak: [2],
          rows: [
            ["would rather + V1", "o'z tanlovim", "I'd rather stay at home tonight."],
            ["would rather + ega + Past Simple", "boshqa odamdan istak", "I'd rather you called me tomorrow."],
            ["had better + V1", "kuchli maslahat, ogohlantirish", "You'd better hurry, or you'll miss the train."],
            ["it's (high) time + ega + Past Simple", "vaqt bo'ldi (kechikdi)", "It's high time we left."],
            ["as if / as though + Past Simple", "haqiqatga o'xshamaydigan taqqoslash", "He talks as if he knew everything."],
          ],
        },
        { t: "tip", tone: "info", md: "**Past Simple shakli ≠ o'tgan zamon.** *I'd rather you called tomorrow* gapida **called** — kelasi kun haqida. Bu ham xuddi **wish** va **second conditional**dagi *unreal past*." },
        { t: "check", ex: { k: "choice", q: "*It's time we went home.* Gap qaysi vaqt haqida?", opts: ["Hozir: uyga ketish vaqti bo'ldi", "O'tgan zamonda uyga borganimiz haqida", "Kecha haqida", "Hech qachon bo'lmaydigan ish"], a: 0, why: "**went** — Past Simple shakli, lekin ma'no hozirgi: ketish vaqti keldi (ehtimol, kechikdik)." } },
      ],
    },
    {
      title: "Would rather va prefer",
      blocks: [
        { t: "p", md: "**Would rather** («...ni afzal ko'raman, ...gan ma'qul») dan keyin **to'liq to'g'ri infinitive** (*to*siz) keladi. Gapning egasi bir odam bo'lsa — **would rather + V1**. Boshqa odamdan biror narsa xohlasak — **ega + Past Simple** (hozirgi/kelasi) yoki **Past Perfect** (o'tgan)." },
        {
          t: "table", head: ["Holat", "Qolip", "Misol"], speak: [2],
          rows: [
            ["O'z tanlovim", "would rather + V1", "I'd rather walk than take the bus."],
            ["Inkor", "would rather not + V1", "I'd rather not talk about it."],
            ["Boshqa odam: hozir / kelasi", "would rather + ega + Past Simple", "I'd rather you didn't smoke in here."],
            ["Boshqa odam: o'tgan", "would rather + ega + Past Perfect", "I'd rather you hadn't told her."],
          ],
        },
        { t: "p", md: "**Prefer** bilan solishtiring: *I prefer tea **to** coffee. I prefer walking **to** driving.* (ot yoki **-ing** + **to**). *I'd prefer to stay.* (**would prefer + to + V1**). Farq: **would rather** dan keyin **to** kelmaydi." },
        { t: "tip", tone: "warn", md: "Inkor gap: **I'd rather you didn't…** (*don't* emas). Bu **xushmuomala rad etish**: *Would you mind if I opened the window? — I'd rather you didn't.* («Yaxshisi, ochmang.»)" },
        { t: "check", ex: { k: "fill", q: "I'd rather you ___ smoke in the flat. (not)", a: ["didn't", "did not"], why: "Boshqa ega + hozirgi istak: **would rather + ega + Past Simple** — inkori *didn't*." } },
        { t: "check", ex: { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["I'd rather to stay at home.", "I'd rather staying at home.", "I'd rather stay at home.", "I'd rather I stay at home."], a: 2, why: "**would rather + V1** (*to*siz, *-ing*siz)." } },
      ],
    },
    {
      title: "Had better va it's time",
      blocks: [
        { t: "p", md: "**Had better** («...gan ma'qul, ...sangiz yaxshi bo'ladi») — **kuchli maslahat yoki ogohlantirish**; ko'pincha tuzatmasak yomon oqibat bo'lishini ham bildiradi. **Had** o'tgan zamon emas: gap hozirgi yoki kelasi haqida. **Had better** dan keyin **V1** (*to*siz); inkori — **had better not**." },
        {
          t: "examples", items: [
            { en: "You'd better see a doctor before it gets worse.", uz: "Ahvol yomonlashmasidan oldin shifokorga borganingiz ma'qul." },
            { en: "We'd better leave now, or we'll miss the train.", uz: "Hozir chiqqanimiz ma'qul, aks holda poyezdga kechikamiz." },
            { en: "You'd better not be late again.", uz: "Yana kechikmaganingiz ma'qul (ogohlantirish)." },
          ],
        },
        { t: "p", md: "**It's time** — «...vaqti keldi». Ikki qolip bor: **It's time + to + V1** (umumiy fikr: *It's time to go.*) va **It's time + ega + Past Simple** (haqiqatga o'xshamaydigan: vaqt allaqachon bo'lgan yoki o'tib ketayapti: *It's time we left.*). **High / about** qo'shilsa, norozilik kuchayadi." },
        {
          t: "examples", items: [
            { en: "It's time to start the meeting.", uz: "Yig'ilishni boshlash vaqti bo'ldi." },
            { en: "It's time you found a proper job.", uz: "Sizning rasmiy ish topadigan vaqtingiz bo'ldi (allaqachon kerak edi)." },
            { en: "It's high time the council repaired this road.", uz: "Hokimiyat bu yo'lni ta'mirlaydigan vaqt allaqachon bo'ldi." },
          ],
        },
        { t: "tip", tone: "warn", md: "**Had better** ohangi qat'iy: do'stga ayting, lekin xo'jayinga yoki notanish odamga **I think you should…** yumshoqroq. **Had better to** (*to* bilan) — xato." },
        { t: "check", ex: { k: "fill", q: "It's high time the council ___ this road. (repair)", a: ["repaired"], why: "**It's (high) time + ega + Past Simple** — norozilik: *repaired*." } },
        { t: "check", ex: { k: "choice", q: "You ___ apologise to her before she gets angrier.", opts: ["had better", "would better", "had better to", "did better"], a: 0, why: "Kuchli maslahat: **had better + V1** (*to*siz)." } },
      ],
    },
    {
      title: "As if / as though: haqiqatmi yoki yo'qmi?",
      blocks: [
        { t: "p", md: "**As if** va **as though** («xuddi ...dek») bir xil ma'noda. Ularga ergashgan fe'l zamoni **haqiqatga qanchalik mos kelishini** ko'rsatadi:" },
        {
          t: "table", head: ["Qachon", "As if +", "Misol"], speak: [2],
          rows: [
            ["Haqiqatga mos yoki mumkin", "Present", "He looks as if he is tired. (ehtimol, charchagan)"],
            ["Haqiqatga mos emas (hozir)", "Past Simple (were)", "She spends money as if she were a millionaire. (u boy emas)"],
            ["Haqiqatga mos emas (o'tgan)", "Past Perfect", "He looked as though he had seen a ghost. (aslida ko'rmagan)"],
          ],
        },
        { t: "p", md: "**Ko'rinish va hislar** haqida (*look, sound, seem, feel*) odatda Present: *It looks as if it's going to rain.* Xatti-harakat va taqqoslash (*talk, behave, act, spend*) haqida ko'pincha Past: *He behaves as though he owned the place.* Norasmiy ingliz tilida **like** ham ishlatiladi: *It looks like it's going to rain.* Rasmiy yozuvda **as if** yaxshiroq." },
        { t: "tip", tone: "good", md: "**Were** barcha shaxslarda: *as if he were a child.* Gaplashuvda *was* ham eshitiladi. **Childish** (bolalarcha, salbiy) va **grown-up** (kattalarcha) so'zlari bilan tez-tez uchraydi: *She behaves as if she were still a child.*" },
        { t: "check", ex: { k: "choice", q: "He's only the sales assistant, but he talks as if he ___ the company.", opts: ["owned", "own", "will own", "has owned"], a: 0, why: "U egasi emas, ya'ni haqiqatga mos emas: **as if + Past Simple**." } },
        { t: "check", ex: { k: "tf", q: "*She looked as though she had seen a ghost* gapi uning haqiqatan ham arvohni ko'rganini bildiradi.", a: false, why: "**as though + Past Perfect** — o'xshatish: u shunday ko'rinardi, lekin aslida ko'rmagan." } },
      ],
    },
    {
      title: "Tipik xatolar (o'zbek tilidan interferensiya)",
      blocks: [
        { t: "p", md: "O'zbek tilida «-gani ma'qul / -ishingiz kerak / vaqti bo'ldi» qoliplari fe'lning bir xil shakli bilan keladi, shuning uchun inglizchada *to* qo'shib yuborish yoki hozirgi zamon qoldirish xatolari tez-tez uchraydi." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I'd rather stay at home tonight.", "It's time we went home.", "You'd better apologise to her."] },
          bad: { title: "Xato", items: ["I'd rather to stay at home tonight.", "It's time we go home.", "You'd better to apologise to her."] },
        },
        { t: "tip", tone: "warn", md: "**1.** *would rather* va *had better* dan keyin **to yo'q**. **2.** *It's time + ega* dan keyin **Past Simple** (*went*), *go* emas; yoki **It's time to go**. **3.** *I'd rather you don't…* emas: **I'd rather you didn't…**" },
        { t: "check", ex: { k: "fix", wrong: "I'd rather to stay at home tonight.", a: ["I'd rather stay at home tonight.", "I would rather stay at home tonight."], hint: "would rather dan keyin to yo'q", why: "**would rather + V1** (*to*siz)." } },
        { t: "check", ex: { k: "fix", wrong: "It's time we go home.", a: ["It's time we went home.", "It's time to go home.", "It's high time we went home.", "It is time we went home."], hint: "unreal: Past Simple", why: "**It's time + ega + Past Simple** yoki **It's time to + V1**." } },
        { t: "check", ex: { k: "fix", wrong: "You had better to apologise to her.", a: ["You had better apologise to her.", "You'd better apologise to her."], hint: "had better dan keyin to yo'q", why: "**had better + V1** (*to*siz)." } },
      ],
    },
    {
      title: "O'qing: Ukam hali ham bola",
      blocks: [
        {
          t: "text", title: "My little brother", voice: "emma",
          en: "My younger brother is twenty-six, but he often behaves as if he were still a teenager. He sleeps until noon, leaves dirty plates in the sink, and keeps procrastinating about looking for a job. Last night my mother told him, \"It's time you started acting like a grown-up.\" He just shrugged. I would rather he were more independent, but I also remember that I wasn't very different at his age. Yesterday I told him he had better send some applications this week, or he would miss the best opportunities in the autumn. He looked at me as though I had asked him to climb a mountain. Still, I would rather talk to him calmly than argue. Perhaps it is simply time we all gave him a small push, and, ideally, one that doesn't end in a row.",
          uz: "Mening ukam yigirma olti yoshda, lekin ko'pincha hali o'smirdek o'zini tutadi. U tushgacha uxlaydi, kosalarni lavaboda iflos qoldiradi va ish qidirishni doim keyinga suradi. Kecha kechqurun onam unga: «Kattalardek yurishni boshlaydigan vaqting bo'ldi», dedi. U shunchaki yelka qisdi. Qani edi, u mustaqilroq bo'lsa, lekin men ham o'sha yoshda juda boshqacha emasligimni eslayman. Kecha unga shu hafta bir nechta ariza yuborgani ma'qul, aks holda kuzda eng yaxshi imkoniyatlarni qo'ldan boy beradi, dedim. U menga xuddi uni tog'ga chiqishga undagandek qaradi. Baribir, men u bilan janjallashgandan ko'ra, xotirjam gaplashishni afzal ko'raman. Ehtimol, hammamiz unga kichik bir turtki beradigan vaqt bo'lgandir, va, albatta, janjal bilan tugamaydigan turtki.",
        },
        { t: "check", ex: { k: "tf", q: "The writer says her brother is a teenager.", a: false, why: "U yigirma olti yoshda; *as if he were still a teenager* — faqat o'xshatish." } },
        { t: "check", ex: { k: "choice", q: "What does \"I would rather talk to him calmly than argue\" mean?", opts: ["She prefers calm talking to arguing.", "She has already argued with him.", "She must argue with him.", "She never talks to him."], a: 0, why: "**would rather V1 than V1** — tanlov: janjal emas, xotirjam suhbat." } },
      ],
    },
    {
      title: "Dialog: Kechikib qolmaylik",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Alice", en: "Max, it's half past seven. It's high time we left, or we'll be late.", uz: "Max, soat yetti yarim. Ketadigan vaqtimiz allaqachon bo'ldi, aks holda kechikamiz." },
            { who: "Max", en: "I'd rather we stayed at home, honestly. I'm exhausted.", uz: "Rostini aytsam, uyda qolganimiz ma'qul edi. Juda charchadim." },
            { who: "Alice", en: "You'd better not say that to Rachel. She's been planning this party for weeks.", uz: "Rachelga buni aytmaganingiz ma'qul. U bu ziyofatni haftalab rejalashtirgan." },
            { who: "Max", en: "Fair enough. I'd rather you drove, though. I've had a long day.", uz: "To'g'ri. Lekin siz haydasangiz yaxshi bo'lardi. Kunim uzoq o'tdi." },
            { who: "Alice", en: "Fine. By the way, did you see Rachel's boss yesterday? He acts as though he owned the company.", uz: "Mayli. Aytgancha, kecha Rachelning xo'jayinini ko'rdingizmi? U xuddi kompaniyaning egasidek o'zini tutadi." },
            { who: "Max", en: "He's only the sales manager. Anyway, get a move on, or we really will be late.", uz: "U shunchaki savdo bo'limi menejeri. Baribir, tezroq bo'ling, aks holda rostdan kechikamiz." },
            { who: "Alice", en: "I'm ready. And please behave yourself tonight!", uz: "Men tayyorman. Va iltimos, bugun kechqurun o'zingizni yaxshi tuting!" },
          ],
        },
        { t: "check", ex: { k: "choice", q: "What does Max prefer at the beginning?", opts: ["Staying at home", "Driving to the party", "Leaving early", "Talking to Rachel's boss"], a: 0, why: "*I'd rather we stayed at home.*" } },
      ],
    },
  ],
  words: [
    { en: "preferably", uz: "iloji bo'lsa, afzal tarzda", ipa: "ˈpref.ər.ə.bli", pos: "adv", ex: "Send me the report by Friday, preferably before noon.", exUz: "Hisobotni juma kuniga qadar, iloji bo'lsa tushgacha yuboring." },
    { en: "procrastinate", uz: "ishni keyinga surib yurmoq", ipa: "prəʊˈkræs.tɪ.neɪt", pos: "verb", ex: "I always procrastinate when I have to write essays.", exUz: "Insho yozishim kerak bo'lsa, doim ishni keyinga suraman." },
    { en: "overdue", uz: "muddati o'tgan, kechikkan", ipa: "ˌəʊ.vəˈdjuː", pos: "adj", ex: "The changes to the law are long overdue.", exUz: "Qonundagi o'zgarishlar allaqachon kutilgan edi." },
    { en: "get a move on", uz: "tezroq harakat qilmoq", ipa: "ɡet ə muːv ɒn", pos: "idiom", ex: "Get a move on, or we'll miss the bus.", exUz: "Tezroq bo'ling, aks holda avtobusdan kechikamiz." },
    { en: "childish", uz: "bolalarcha (salbiy ma'noda)", ipa: "ˈtʃaɪl.dɪʃ", pos: "adj", ex: "It was childish of him to refuse to speak to her.", exUz: "Uning bilan gaplashishdan bosh tortishi bolalarcha edi." },
    { en: "immature", uz: "pishmagan, yetilmagan", ipa: "ˌɪm.əˈtʃʊər", pos: "adj", ex: "His immature behaviour annoyed the whole team.", exUz: "Uning yetilmagan xatti-harakati butun jamoani bezovta qildi." },
    { en: "grown-up", uz: "katta odam, voyaga yetgan", ipa: "ˈɡrəʊn.ʌp", pos: "noun / adj", ex: "Try to act like a grown-up and apologise.", exUz: "Kattadek bo'lib, kechirim so'rashga harakat qiling." },
    { en: "behave", uz: "o'zini tutmoq, xulq-atvor qilmoq", ipa: "bɪˈheɪv", pos: "verb", ex: "The children behaved very well during the long flight.", exUz: "Bolalar uzoq parvoz davomida o'zlarini juda yaxshi tutishdi." },
    { en: "snap out of it", uz: "(yomon kayfiyatdan) o'ziga kelmoq", ipa: "snæp aʊt əv ɪt", pos: "idiom", ex: "You've been sad for weeks. It's time to snap out of it.", exUz: "Haftalardan beri xafasiz. O'zingizga kelish vaqti bo'ldi." },
    { en: "stay put", uz: "joyida qolmoq, qimirlamaslik", ipa: "steɪ pʊt", pos: "phrase", ex: "The guide told us to stay put until the storm passed.", exUz: "Yo'lboshchi bo'ron o'tguncha joyimizdan qimirlamaslikni aytdi." },
  ],
  practice: [
    { k: "choice", q: "It's late. It's time we ___ home.", opts: ["went", "go", "going", "will go"], a: 0, why: "**It's time + ega + Past Simple** (ma'no hozirgi)." },
    { k: "choice", q: "I'd rather you ___ smoke in the flat.", opts: ["didn't", "don't", "won't", "not to"], a: 0, why: "Boshqa ega: **would rather + ega + Past Simple** — inkori *didn't*." },
    { k: "listen", say: "He talks as if he knew everything.", opts: ["He talks as if he knows everything.", "He talked as if he knew everything.", "He talks as if he had known everything.", "He talks as if he knew everything."], a: 3, why: "**as if + Past Simple** — haqiqatga mos emas: u hamma narsani bilmaydi." },
    { k: "fill", q: "I'd rather ___ at home than go to the party. (stay)", a: ["stay"], uz: "Ziyofatga borgandan ko'ra uyda qolganim ma'qul.", why: "**would rather + V1** (*to*siz)." },
    { k: "fill", q: "You had better ___ the doctor before it gets worse. (see)", a: ["see"], uz: "Ahvol yomonlashmasidan oldin shifokorga ko'ringaningiz ma'qul.", why: "**had better + V1**." },
    { k: "fill", q: "She looked as though she ___ a ghost. (see)", a: ["had seen"], uz: "U xuddi arvohni ko'rgandek ko'rinardi.", why: "O'tgan zamon, haqiqatga mos emas: **as though + Past Perfect**." },
    { k: "order", uz: "Men sizning ertaga kelishingizni afzal ko'raman.", words: ["I'd", "rather", "you", "came", "tomorrow."], extra: ["come", "to"], alt: [["I", "would", "rather", "you", "came", "tomorrow."]], why: "**would rather + ega + Past Simple** (kelasi vaqt)." },
    { k: "order", uz: "Ketadigan vaqtimiz allaqachon bo'ldi.", words: ["It's", "high", "time", "we", "left."], extra: ["leave", "to"], alt: [["It", "is", "high", "time", "we", "left."]], why: "**It's high time + ega + Past Simple**." },
    { k: "translate", uz: "Siz shifokorga borganingiz ma'qul.", a: ["You had better see a doctor.", "You'd better see a doctor.", "You had better go to the doctor.", "You'd better go to the doctor.", "You had better see the doctor.", "You'd better see the doctor."], why: "Kuchli maslahat: **had better + V1**." },
    { k: "translate", uz: "U o'zini xuddi hamma narsani biladigandek tutadi.", a: ["He behaves as if he knew everything.", "He acts as if he knew everything.", "He behaves as though he knew everything.", "He acts as though he knew everything."], why: "Haqiqatga mos emas: **as if + Past Simple**." },
    { k: "fix", wrong: "I'd rather to stay at home tonight.", a: ["I'd rather stay at home tonight.", "I would rather stay at home tonight."], hint: "would rather dan keyin to yo'q", why: "**would rather + V1**." },
    { k: "fix", wrong: "It's time we go home.", a: ["It's time we went home.", "It's time to go home.", "It's high time we went home.", "It is time we went home."], hint: "unreal: Past Simple", why: "**It's time + ega + Past Simple** yoki **It's time to + V1**." },
    { k: "fix", wrong: "You had better to apologise to her.", a: ["You had better apologise to her.", "You'd better apologise to her."], hint: "had better dan keyin to yo'q", why: "**had better + V1**." },
    { k: "match", pairs: [["preferably", "iloji bo'lsa, afzal"], ["procrastinate", "ishni keyinga surmoq"], ["overdue", "muddati o'tgan"], ["get a move on", "tezroq harakat qilmoq"], ["childish", "bolalarcha"]] },
    { k: "tf", q: "*I'd rather you called me tomorrow* gapida **called** o'tgan zamonni bildiradi.", a: false, why: "**called** — Past Simple shakli, lekin ma'no kelasi zamon (ertaga)." },
    { k: "dictation", say: "It's high time you stopped behaving like a child.", uz: "Bola kabi o'zingizni tutishni to'xtatadigan vaqt allaqachon bo'ldi.", why: "**It's high time + ega + Past Simple**." },
    { k: "speak", say: "I'd rather stay at home tonight, but I had better go to the meeting.", uz: "Bugun kechqurun uyda qolganim ma'qul edi, lekin yig'ilishga borganim ma'qul." },
  ],
  quiz: [
    { k: "choice", q: "I'd rather you ___ the window. It's cold in here.", opts: ["closed", "close", "will close", "to close"], a: 0, why: "**would rather + ega + Past Simple**." },
    { k: "choice", q: "She isn't rich, but she spends money as if she ___ a millionaire.", opts: ["were", "be", "will be", "has been"], a: 0, why: "Haqiqatga mos emas: **as if + were**." },
    { k: "choice", q: "You ___ hurry, or you'll miss your flight.", opts: ["had better", "would better", "had better to", "did better"], a: 0, why: "Ogohlantirish: **had better + V1**." },
    { k: "fill", q: "I'd rather ___ by train than fly. (travel)", a: ["travel"], uz: "Uchgandan ko'ra poyezdda borganim ma'qul.", why: "**would rather + V1 + than + V1**." },
    { k: "fill", q: "It's time the government ___ something about the traffic. (do)", a: ["did"], uz: "Hukumat transport tirbandligi haqida biror ish qiladigan vaqt bo'ldi.", why: "**It's time + ega + Past Simple**." },
    { k: "order", uz: "Shoshilganingiz ma'qul (tezroq harakat qiling).", words: ["You", "had", "better", "get", "a", "move", "on."], extra: ["to", "would"], alt: [["You'd", "better", "get", "a", "move", "on."]], why: "**had better + V1**, *get a move on* — tezroq harakat qilmoq." },
    { k: "translate", uz: "Men bugun kechqurun uyda qolganimni afzal ko'raman.", a: ["I'd rather stay at home this evening.", "I would rather stay at home this evening.", "I'd rather stay at home tonight.", "I would rather stay at home tonight."], why: "**would rather + V1**." },
    { k: "fix", wrong: "I'd rather you don't smoke here.", a: ["I'd rather you didn't smoke here.", "I would rather you didn't smoke here.", "I'd rather you did not smoke here."], hint: "boshqa ega: Past Simple", why: "**would rather + ega + Past Simple** — inkori *didn't*." },
    { k: "tf", q: "*It's time we leave* — bu gap to'g'ri.", a: false, why: "**It's time we left** yoki **It's time to leave** bo'lishi kerak." },
    { k: "listen", say: "She looked as though she had seen a ghost.", opts: ["She looks as though she has seen a ghost.", "She looked as though she had seen a ghost.", "She looked as though she saw a ghost.", "She looked as though she would see a ghost."], a: 1, why: "**as though + Past Perfect** — o'tgan zamondagi o'xshatish." },
  ],
  summary: [
    "**Would rather + V1** — o'z tanlovim (*I'd rather stay*); boshqa odamdan istak: **would rather + ega + Past Simple** (*I'd rather you called tomorrow*), o'tgan uchun **Past Perfect**.",
    "**Had better + V1** — kuchli maslahat va ogohlantirish (*You'd better hurry*); inkori **had better not**; *to* kerak emas.",
    "**It's (high) time + ega + Past Simple** — vaqt bo'ldi, kechikdi (*It's time we left*); umumiy: **It's time to + V1**.",
    "**As if / as though**: haqiqatga mos emas bo'lsa **Past Simple (were)** yoki **Past Perfect**, mos yoki mumkin bo'lsa Present.",
    "Xatolar: ~~I'd rather to stay~~ → **I'd rather stay**; ~~It's time we go~~ → **It's time we went**; ~~You had better to go~~ → **You'd better go**.",
  ],
  homework: "Uyingizdagi yoki ishxonangizdagi 5 ta vaziyat haqida bittadan gap yozing: 1) *I'd rather …*, 2) *I'd rather my … didn't …*, 3) *You'd better …*, 4) *It's time we …*, 5) *He/She talks as if …*. Gaplarni ovoz chiqarib ayting. Keyin 4 ta gapdan iborat qisqa suhbat tuzing va yangi so'zlardan kamida uchtasini ishlating: **procrastinate, overdue, childish, get a move on**.",
};

export default lesson;
