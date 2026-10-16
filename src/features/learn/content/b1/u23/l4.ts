import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u23-l4",
  title: "Grammar bridge: all tenses",
  titleUz: "Grammatika ko'prigi: barcha zamonlar takrori",
  goal: "Ingliz tilining asosiy zamonlarini (**Present, Past, Perfect, Continuous, kelasi zamon shakllari**) bir tizimga solasiz, vaqt so'zlariga qarab to'g'ri zamonni tanlaysiz va **I live here since 2020**, **I am knowing**, **when I will come** kabi xatolardan qochasiz.",
  slides: [
    {
      title: "Zamonlar xaritasi",
      blocks: [
        { t: "p", md: "Zamonlarni yodlab olish shart emas: ularning **ma'nosini** bilish yetarli. Har bir zamon savolga javob beradi: **qachon** va **qanday** ish?" },
        {
          t: "table", head: ["Zamon", "Shakl", "Asosiy ma'no", "Misol"], speak: [3],
          rows: [
            ["Present Simple", "work / works", "odat, doimiy haqiqat", "She works in a bank."],
            ["Present Continuous", "am / is / are working", "hozir yoki hozirgi davrda", "I'm working at home this week."],
            ["Present Perfect", "have / has worked", "tajriba, natija, hozirga aloqasi", "I've worked there for two years."],
            ["Present Perfect Continuous", "have / has been working", "davom etayotgan jarayon", "I've been working since eight."],
            ["Past Simple", "worked", "tugagan voqea", "He worked there in 2019."],
            ["Past Continuous", "was / were working", "o'tgan paytdagi jarayon", "I was working when you called."],
            ["Past Perfect", "had worked", "o'tgandan oldingi ish", "She had left before I arrived."],
            ["Future", "will / going to / Present Continuous", "reja, bashorat, qaror", "We're meeting at six."],
          ],
        },
        { t: "check", ex: { k: "choice", q: "**I ___ English for three years.**", opts: ["study", "am studying", "have been studying", "studied"], a: 2, why: "Davom etayotgan ish + **for three years** → **have been studying** (yoki *have studied*)." } },
      ],
    },
    {
      title: "Hozirgi zamon shakllari",
      blocks: [
        { t: "p", md: "Hozirgi zamon shakllarini farqlash uchun vaqt so'zlariga qarang:" },
        {
          t: "table", head: ["Vaqt so'zi", "Zamon", "Misol"], speak: [2],
          rows: [
            ["always, usually, every day", "Present Simple", "I usually get up at seven."],
            ["now, at the moment, this week", "Present Continuous", "He is studying at the moment."],
            ["ever, never, just, already, yet", "Present Perfect", "Have you ever been to London?"],
            ["for, since, how long", "Present Perfect (Continuous)", "How long have you lived here?"],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I have lived here since 2020.", "I have known him for five years.", "I know the answer."] },
          bad: { title: "Xato", items: ["I live here since 2020.", "I am knowing him for five years.", "I am knowing the answer."] },
        },
        { t: "tip", tone: "warn", md: "O'zbek tilida «2020-yildan beri yashayman» deymiz, shuning uchun *I live here since 2020* xatosi kelib chiqadi. Inglizchada **for / since** bilan Present Perfect kerak. **know, like, want, need, understand, believe** kabi holat fe'llari odatda Continuous bo'lmaydi: ~~I am knowing~~." },
        { t: "check", ex: { k: "fix", wrong: "I live in Tashkent since 2018.", a: ["I have lived in Tashkent since 2018.", "I've lived in Tashkent since 2018.", "I have been living in Tashkent since 2018.", "I've been living in Tashkent since 2018."], hint: "since bilan qaysi zamon?", why: "**since** bilan Present Perfect (Continuous)." } },
      ],
    },
    {
      title: "Present Perfect Continuous",
      blocks: [
        { t: "p", md: "**have / has been + -ing** jarayonning o'zi va davomiyligi muhim bo'lganda yoki natija ko'rinib turganda ishlatiladi:" },
        {
          t: "examples", items: [
            { en: "I've been waiting for an hour.", uz: "Bir soatdan beri kutyapman.", note: "Jarayon hali davom etmoqda." },
            { en: "Why are your hands dirty? — I've been fixing my bike.", uz: "Nega qo'llaring kir? — Velosipedimni tuzatyapman edim.", note: "Natija ko'rinib turibdi." },
            { en: "She has been learning Italian since January.", uz: "U yanvardan beri italyan tilini o'rganyapti." },
          ],
        },
        { t: "tip", tone: "info", md: "Farq: **I've read this book** (kitob tugagan, natija) / **I've been reading this book** (jarayon, ehtimol hali tugamagan). *How many…?* sonni so'rasa, odatda **Present Perfect**: *How many pages have you read?* *How long…?* esa jarayonni so'raydi." },
        { t: "check", ex: { k: "choice", q: "**How many emails ___ today?**", opts: ["have you written", "have you been writing", "do you write", "did you been writing"], a: 0, why: "Sonni so'raganda odatda **Present Perfect**." } },
        { t: "check", ex: { k: "fill", q: "We ___ been waiting for the bus since six o'clock.", a: ["have", "'ve"], why: "**have been waiting** — Present Perfect Continuous." } },
      ],
    },
    {
      title: "O'tgan zamon shakllari",
      blocks: [
        { t: "p", md: "Hikoya qilganda uchta o'tgan zamon birga ishlaydi: **Past Simple** — voqealar ketma-ketligi, **Past Continuous** — fon va jarayon, **Past Perfect** — undan ham oldin bo'lgan ish." },
        {
          t: "examples", items: [
            { en: "I opened the door and saw a letter on the floor.", uz: "Eshikni ochdim va polda xatni ko'rdim.", note: "Past Simple: ketma-ket voqealar." },
            { en: "I was cooking when the phone rang.", uz: "Ovqat pishirayotganimda telefon jiringladi.", note: "Past Continuous: uzoq jarayon, Past Simple: uni to'xtatgan qisqa voqea." },
            { en: "When we got to the cinema, the film had already started.", uz: "Kinoteatrga yetib kelganimizda film allaqachon boshlangan edi.", note: "Past Perfect: oldin bo'lgan ish." },
            { en: "She was tired because she hadn't slept well.", uz: "U charchagan edi, chunki yaxshi uxlamagan edi." },
          ],
        },
        { t: "tip", tone: "warn", md: "**when** bilan tartib muhim: *When I arrived, he left* (men kelgach, u ketdi) va *When I arrived, he had left* (men kelganimda u allaqachon ketgan edi) — ma'nolari boshqa." },
        { t: "check", ex: { k: "choice", q: "**When I got home, my brother ___ dinner.**", opts: ["already cooked", "had already cooked", "was already cook", "has already cooked"], a: 1, why: "Uyga kelishdan oldin bo'lgan ish → **had cooked**." } },
        { t: "check", ex: { k: "choice", q: "**I ___ a shower when the lights went out.**", opts: ["took", "was taking", "had taken", "have taken"], a: 1, why: "Uzoq jarayon, uni qisqa voqea to'xtatdi → **was taking**." } },
      ],
    },
    {
      title: "Kelasi zamon shakllari",
      blocks: [
        { t: "p", md: "Inglizchada kelajak uchun bitta shakl yo'q. Uchta asosiy yo'l bor:" },
        {
          t: "table", head: ["Shakl", "Qachon", "Misol"], speak: [2],
          rows: [
            ["will + fe'l", "joyida qaror, bashorat, va'da", "I'll have the soup, please."],
            ["going to + fe'l", "oldindan reja, dalilga asoslangan bashorat", "We're going to buy a flat. Look at those clouds, it's going to rain."],
            ["Present Continuous", "aniq kelishilgan reja", "I'm meeting Sara at six."],
            ["Present Simple", "jadval, dastur", "The train leaves at nine."],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["When I get home, I will call you.", "As soon as she arrives, we will start.", "I'll tell him if I see him."] },
          bad: { title: "Xato", items: ["When I will get home, I will call you.", "As soon as she will arrive, we will start.", "I'll tell him if I will see him."] },
        },
        { t: "tip", tone: "warn", md: "**when, as soon as, before, after, until, if** dan keyin kelajak ma'nosida ham **Present** ishlatiladi. O'zbekchada «qaytib kelsam» kabi, shunga o'xshab ~~when I will come~~ deymiz; inglizchada *when I come*." },
        { t: "check", ex: { k: "fix", wrong: "When I will arrive, I will text you.", a: ["When I arrive, I will text you.", "When I arrive, I'll text you."], hint: "when dan keyin zamon", why: "**when** dan keyin Present Simple." } },
      ],
    },
    {
      title: "Dialog: ish suhbati",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Emma", en: "So, how long have you been working as a designer?", uz: "Xo'sh, dizayner bo'lib qancha vaqtdan beri ishlayapsiz?" },
            { who: "Karim", en: "I've been working for five years. Before that, I studied art in Tashkent.", uz: "Besh yildan beri ishlayapman. Bundan oldin Toshkentda san'at bo'yicha o'qiganman." },
            { who: "Emma", en: "What are you doing at the moment?", uz: "Hozir nima ustida ishlayapsiz?" },
            { who: "Karim", en: "I'm designing a website for a travel company. I started it last month, and I've almost finished it.", uz: "Sayohat kompaniyasi uchun veb-sayt dizayn qilyapman. O'tgan oy boshlaganman va deyarli tugatdim." },
            { who: "Emma", en: "Great. Where do you see yourself in five years?", uz: "Ajoyib. Besh yildan keyin o'zingizni qayerda ko'rasiz?" },
            { who: "Karim", en: "I'm going to open my own studio. When I have enough money, I'll rent an office.", uz: "O'z studiyamni ochmoqchiman. Yetarli pulim bo'lganda, ofis ijaraga olaman." },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Karim has not finished the website yet, but he has almost finished it.", a: true, why: "U *I've almost finished it* dedi." } },
      ],
    },
    {
      title: "O'qing: Bir hafta voqealari",
      blocks: [
        {
          t: "text", title: "Dilnoza's busy week",
          en: "Dilnoza is a student, and she is very busy at the moment. She has been preparing for her exams since Monday. Yesterday she was studying in the library when her friend called. The friend had just arrived in the city, so Dilnoza went to meet her at the station. They talked for hours. Dilnoza had not seen her for two years. Today she is tired, but she is going to finish her last essay tonight. As soon as she hands it in, she will have a long rest. Next week she is travelling to Samarkand with her family.",
          uz: "Dilnoza talaba va hozir juda band. U dushanbadan beri imtihonlarga tayyorlanyapti. Kecha u kutubxonada o'qiyotgan edi, do'sti qo'ng'iroq qildi. Do'sti shaharga hozirgina yetib kelgan edi, shuning uchun Dilnoza uni vokzalda kutib olgani bordi. Ular soatlab gaplashdi. Dilnoza uni ikki yildan beri ko'rmagan edi. Bugun u charchagan, lekin bu kecha oxirgi inshosini tugatmoqchi. Uni topshirishi bilan uzoq dam oladi. Kelasi hafta oilasi bilan Samarqandga sayohat qilyapti.",
        },
        { t: "check", ex: { k: "choice", q: "Why did Dilnoza go to the station?", opts: ["Her friend had just arrived.", "She was going to Samarkand.", "She had an exam there.", "She wanted to buy a ticket."], a: 0, why: "Matnda: *The friend had just arrived in the city.*" } },
      ],
    },
  ],
  words: [
    { en: "temporary", uz: "vaqtinchalik", ipa: "ˈtem.pər.ər.i", pos: "adj", ex: "This is only a temporary job.", exUz: "Bu faqat vaqtinchalik ish." },
    { en: "permanent", uz: "doimiy", ipa: "ˈpɜː.mə.nənt", pos: "adj", ex: "She is looking for a permanent position.", exUz: "U doimiy lavozim qidiryapti." },
    { en: "currently", uz: "hozirgi vaqtda", ipa: "ˈkʌr.ənt.li", pos: "adv", ex: "He is currently living abroad.", exUz: "U hozir chet elda yashayapti." },
    { en: "at present", uz: "hozirda, hozircha", ipa: "æt ˈprez.ənt", pos: "phrase", ex: "At present, the shop is closed for repairs.", exUz: "Hozirda do'kon ta'mirlash uchun yopiq." },
    { en: 'for the time being', uz: "hozircha", ipa: 'fə ðə taɪm ˈbiː.ɪŋ', pos: 'phrase', ex: "Use this laptop for the time being.", exUz: "Hozircha shu noutbukdan foydalaning." },
    { en: "ever since", uz: "o'sha vaqtdan beri", ipa: "ˌev.ə ˈsɪns", pos: "phrase", ex: "I have lived here ever since I was a child.", exUz: "Bolaligimdan beri shu yerda yashayman." },
    { en: 'rapidly', uz: "tez, jadal", ipa: 'ˈræp.ɪd.li', pos: 'adv', ex: "The city is growing rapidly.", exUz: "Shahar jadal o'smoqda." },
    { en: "previously", uz: "ilgari, avval", ipa: "ˈpriː.vi.əs.li", pos: "adv", ex: "Previously, he worked in a bank.", exUz: "Ilgari u bankda ishlagan." },
    { en: "straight away", uz: "darhol", ipa: "ˌstreɪt əˈweɪ", pos: "adv", ex: "Call me straight away if there is a problem.", exUz: "Muammo bo'lsa, menga darhol qo'ng'iroq qiling." },
    { en: "from time to time", uz: "vaqti-vaqti bilan", ipa: "frəm ˌtaɪm tə ˈtaɪm", pos: "phrase", ex: "We eat out from time to time.", exUz: "Biz vaqti-vaqti bilan tashqarida ovqatlanamiz." },
  ],
  practice: [
    { k: "choice", q: "**She ___ in a bank. It's her job.**", opts: ["works", "is working", "has worked", "worked"], a: 0, why: "Doimiy ish, odat → **Present Simple**." },
    { k: "choice", q: "**Look! It ___.**", opts: ["rains", "is raining", "has rained", "rained"], a: 1, why: "Hozir sodir bo'layotgan ish → **Present Continuous**." },
    { k: "choice", q: "**We ___ here since 2019.**", opts: ["live", "are living", "have lived", "lived"], a: 2, why: "**since 2019** → Present Perfect." },
    { k: "choice", q: "**When she called, I ___ dinner.**", opts: ["cooked", "was cooking", "have cooked", "cook"], a: 1, why: "Jarayon + to'xtatuvchi voqea → **was cooking**." },
    { k: "listen", say: "I've been studying English for two years.", opts: ["I've been studying English for two years.", "I studied English two years ago.", "I'm studying English for two years.", "I had studied English for two years."], a: 0, why: "**have been studying … for** — davom etayotgan jarayon." },
    { k: "fill", q: "By the time we arrived, the film ___ already started. (have)", a: ["had"], uz: "Biz yetib kelganimizda, film allaqachon boshlangan edi.", why: "O'tgandan oldingi ish → **Past Perfect**." },
    { k: "fill", q: "As soon as I ___ home, I'll call you. (get)", a: ["get"], uz: "Uyga yetib borishim bilan qo'ng'iroq qilaman.", why: "**as soon as** dan keyin Present Simple." },
    { k: "fill", q: "Look at those clouds. It ___ going to rain.", a: ["is", "'s"], uz: "Anavi bulutlarga qara. Yomg'ir yog'adi.", why: "Dalilga asoslangan bashorat → **going to**." },
    { k: "order", uz: "Ikki soatdan beri kutyapman.", words: ["I've", "been", "waiting", "for", "two", "hours."], extra: ["since", "wait"], alt: [["I", "have", "been", "waiting", "for", "two", "hours."]], why: "**have been waiting for**" },
    { k: "order", uz: "U menga qo'ng'iroq qilganida men uxlayotgan edim.", words: ["I", "was", "sleeping", "when", "he", "called", "me."], extra: ["slept", "am"], alt: [["When", "he", "called", "me,", "I", "was", "sleeping."]], why: "Jarayon + qisqa voqea." },
    { k: "translate", uz: "U 2018-yildan beri bu yerda ishlaydi.", a: ["He has worked here since 2018.", "He has been working here since 2018.", "She has worked here since 2018.", "She has been working here since 2018.", "He's worked here since 2018.", "She's worked here since 2018.", "He's been working here since 2018.", "She's been working here since 2018."], why: "**since** + Present Perfect." },
    { k: "translate", uz: "Ertaga soat beshda Sara bilan uchrashaman.", a: ["I'm meeting Sara at five tomorrow.", "I am meeting Sara at five tomorrow.", "Tomorrow I'm meeting Sara at five.", "Tomorrow I am meeting Sara at five.", "I'm meeting Sara tomorrow at five.", "I am meeting Sara tomorrow at five."], why: "Kelishilgan reja → **Present Continuous**." },
    { k: "match", pairs: [["currently", "hozirgi vaqtda"], ["eventually", "oxir-oqibat"], ["gradually", "asta-sekin"], ["meanwhile", "shu orada"], ["permanent", "doimiy"]] },
    { k: "tf", q: "**I am knowing the answer** — bu gap to'g'ri.", a: false, why: "**know** holat fe'li, Continuous bo'lmaydi: *I know the answer.*" },
    { k: "fix", wrong: "When it will stop raining, we will go out.", a: ["When it stops raining, we will go out.", "When it stops raining, we'll go out."], hint: "when dan keyin", why: "**when** dan keyin Present Simple." },
    { k: "speak", say: "I've been learning English since January, and I'm going to take an exam next year.", uz: "Men yanvardan beri ingliz tilini o'rganyapman va kelasi yil imtihon topshirmoqchiman." },
  ],
  quiz: [
    { k: "choice", q: "**How long ___ in this city?**", opts: ["do you live", "are you living", "have you lived", "did you lived"], a: 2, why: "**How long** + hozirgacha → Present Perfect." },
    { k: "choice", q: "**I ___ Tom yesterday, and he told me the news.**", opts: ["met", "have met", "was meeting", "meet"], a: 0, why: "**yesterday** → Past Simple." },
    { k: "choice", q: "**She ___ her keys, so she couldn't open the door.**", opts: ["lost", "had lost", "has lost", "was losing"], a: 1, why: "Kalitni oldin yo'qotgan → **Past Perfect**." },
    { k: "choice", q: "**We ___ to Bukhara next month. We have already bought the tickets.**", opts: ["are going", "go", "went", "have gone"], a: 0, why: "Kelishilgan reja → **Present Continuous** (yoki *going to*)." },
    { k: "fill", q: "I ___ to the gym three times a week.", a: ["go"], uz: "Men haftasiga uch marta sport zaliga boraman.", why: "Odat → **Present Simple**." },
    { k: "fill", q: "We ___ watching a film when the power went off. (be)", a: ["were"], uz: "Film ko'rayotganimizda elektr o'chdi.", why: "**were watching** — Past Continuous." },
    { k: "dictation", say: "I'll text you as soon as I arrive.", uz: "Yetib borishim bilan sizga xabar yozaman.", why: "**as soon as** + Present." },
    { k: "fix", wrong: "I am knowing him very well.", a: ["I know him very well."], hint: "know — holat fe'li", why: "Holat fe'llari Continuous bo'lmaydi." },
    { k: "order", uz: "Biz bu haqida hali o'ylab ko'rmadik.", words: ["We", "haven't", "thought", "about", "it", "yet."], extra: ["didn't", "already"], alt: [["We", "have", "not", "thought", "about", "it", "yet."]], why: "**yet** + Present Perfect." },
    { k: "translate", uz: "Qaytib kelganimda, sizga qo'ng'iroq qilaman.", a: ["When I get back, I will call you.", "When I get back, I'll call you.", "When I come back, I will call you.", "When I come back, I'll call you.", "When I return, I will call you.", "When I return, I'll call you."], why: "**when** dan keyin Present Simple." },
  ],
  summary: [
    "Zamonni **vaqt so'zi va ma'no** bo'yicha tanlang: *every day* (Simple), *now* (Continuous), *since / for / ever / yet* (Perfect), *yesterday / ago* (Past Simple).",
    "**Present Perfect Continuous** jarayon va davomiylikni bildiradi: *I've been waiting for an hour.* **know, like, want** kabi holat fe'llari Continuous bo'lmaydi.",
    "O'tgan zamon: **Past Simple** (voqealar), **Past Continuous** (fon va jarayon), **Past Perfect** (undan oldingi ish).",
    "Kelajak: **will** (qaror, bashorat), **going to** (reja), **Present Continuous** (kelishilgan reja). **when / as soon as / if** dan keyin Present: ~~when I will come~~ emas.",
  ],
  homework: "O'tgan haftadagi kuningiz haqida 8 ta gap yozing: Past Simple, Past Continuous va Past Perfect ishlating. Keyin kelasi haftaga rejalaringiz haqida 4 ta gap yozing (*will, going to, Present Continuous*) va bittasini **when** yoki **as soon as** bilan boshlang.",
};

export default lesson;
