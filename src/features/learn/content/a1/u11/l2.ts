import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u11-l2",
  title: "Past participles; been or gone?",
  titleUz: "3-shakl fe'llar va been / gone",
  goal: "25 dan ortiq noto'g'ri fe'lning **V3** shaklini guruhlab yodlaysiz (*written, spoken, lost, broken…*), **I've lost my keys** kabi \"natija hozir\" gaplarini tuzasiz va **been to** (borib kelgan) bilan **gone to** (ketgan, hali u yerda) farqini bilasiz.",
  slides: [
    {
      title: "Takror va to'rt guruh",
      blocks: [
        { t: "p", md: "O'tgan darsda: **Present Perfect = have / has + V3**. *I've been to Khiva. Have you ever ridden a camel? — No, I haven't.* Endi asosiy muammo — **V3 ni bilish**. To'g'ri fe'llarda oson (*visited, played*). Noto'g'ri fe'llarni esa **guruhlab** yodlash ancha oson:" },
        {
          t: "table", head: ["Guruh", "Qolip", "Misol"], speak: [2],
          rows: [
            ["1", "A – A – A (hech o'zgarmaydi)", "put – put – put, cut – cut – cut"],
            ["2", "A – B – B (V2 = V3)", "buy – bought – bought"],
            ["3", "A – B – C (hammasi har xil)", "write – wrote – written"],
            ["4", "A – B – A (V3 = V1)", "come – came – come"],
          ],
        },
        { t: "tip", tone: "good", md: "Yaxshi xabar: **2-guruh** eng katta va eng oson — bu fe'llarning V2 sini siz allaqachon bilasiz (*bought, made, had, met*), V3 ham **xuddi shu**." },
        { t: "check", ex: { k: "choice", q: "**come** ning V3 shakli:", opts: ["came", "come", "comed", "comen"], a: 1, why: "4-guruh: **come – came – come**. *I've **come** to help you.*" } },
      ],
    },
    {
      title: "2-guruh: V2 = V3",
      blocks: [
        { t: "p", md: "Bu fe'llarning V2 va V3 shakli bir xil. V2 ni bilsangiz — V3 ni ham bilasiz:" },
        {
          t: "table", head: ["V1", "V2 = V3", "Ma'nosi", "Misol"], speak: [0, 1, 3],
          rows: [
            ["have", "had", "ega bo'lmoq; yemoq, ichmoq", "I've had a great idea!"],
            ["make", "made", "qilmoq, yasamoq", "She's made a cake."],
            ["buy", "bought", "sotib olmoq", "We've bought a new car."],
            ["hear", "heard", "eshitmoq", "Have you heard the news?"],
            ["lose", "lost", "yo'qotmoq", "I've lost my keys."],
            ["find", "found", "topmoq", "Have you found your keys?"],
            ["tell", "told", "aytmoq (kimgadir)", "He's told me everything."],
            ["send", "sent", "yubormoq", "I've sent you an email."],
            ["win", "won", "yutmoq, g'olib bo'lmoq", "Our team has won the cup!"],
            ["sleep", "slept", "uxlamoq", "I haven't slept well."],
          ],
        },
        {
          t: "sounds", items: [
            { label: "bought", say: "bought", uz: "**\"bo:t\"** — *gh* o'qilmaydi. *thought, brought* ham shunday.", examples: ["bought", "brought", "thought"] },
            { label: "heard", say: "heard", uz: "**\"hɜ:d\"** — *hear* (\"hiə\") dan farqli tovush! ❌ \"hi:rd\" emas.", examples: ["hear", "heard"] },
            { label: "won", say: "won", uz: "**\"wan\"** — *one* (bir) bilan bir xil eshitiladi.", examples: ["won", "one"] },
          ],
        },
        { t: "check", ex: { k: "fill", q: "Oh no! I've ___ my passport! (lose)", a: ["lost"], why: "**lose – lost – lost**." } },
      ],
    },
    {
      title: "3-guruh: uchta har xil shakl",
      blocks: [
        { t: "p", md: "Bu guruhni alohida yodlash kerak. Ko'pchiligining V3 si **-en** yoki **-n** bilan tugaydi — bu yaxshi belgi:" },
        {
          t: "table", head: ["V1", "V2", "V3", "Ma'nosi"], speak: [0, 1, 2],
          rows: [
            ["write", "wrote", "written", "yozmoq"],
            ["speak", "spoke", "spoken", "gapirmoq"],
            ["take", "took", "taken", "olmoq"],
            ["break", "broke", "broken", "sindirmoq"],
            ["forget", "forgot", "forgotten", "unutmoq"],
            ["drive", "drove", "driven", "(mashina) haydamoq"],
            ["give", "gave", "given", "bermoq"],
            ["wear", "wore", "worn", "kiymoq"],
            ["go", "went", "gone / been", "bormoq"],
            ["swim", "swam", "swum", "suzmoq"],
            ["drink", "drank", "drunk", "ichmoq"],
            ["begin", "began", "begun", "boshlamoq"],
          ],
        },
        { t: "tip", tone: "info", md: "Qofiya bilan yodlang: **swim – swam – swum, drink – drank – drunk, begin – began – begun** — hammasi **i – a – u**. **write – written, drive – driven** — **i – o – i**." },
        {
          t: "sounds", items: [
            { label: "written", say: "written", uz: "**\"ritn\"** — *w* o'qilmaydi, *e* deyarli eshitilmaydi.", examples: ["write", "wrote", "written"] },
            { label: "forgotten", say: "forgotten", uz: "**\"fə'gotn\"** — urg'u o'rtada: for-**GOT**-ten.", examples: ["forget", "forgot", "forgotten"] },
            { label: "worn", say: "worn", uz: "**\"wo:n\"** — *want* emas, *warm* ga o'xshash cho'ziq \"o:\".", examples: ["wear", "wore", "worn"] },
          ],
        },
        { t: "check", ex: { k: "fill", q: "Have you ever ___ a letter in English? (write)", a: ["written"], why: "**write – wrote – written**." } },
      ],
    },
    {
      title: "Natija hozir: I've lost my keys!",
      blocks: [
        { t: "p", md: "Present Perfect yana bir holatda juda ko'p ishlatiladi: o'tmishda bo'lgan ish, lekin **natijasi hozir** muhim. Vaqt aytilmaydi:" },
        {
          t: "examples", items: [
            { en: "I've lost my keys.", uz: "Kalitlarimni yo'qotib qo'ydim.", note: "Hozir kalitim yo'q — uyga kira olmayman." },
            { en: "Somebody has broken the window.", uz: "Kimdir derazani sindiribdi.", note: "Hozir deraza singan." },
            { en: "She's forgotten her phone.", uz: "U telefonini unutib qoldiribdi." },
            { en: "We've bought a new flat!", uz: "Biz yangi kvartira sotib oldik!", note: "Yangilik — hozir bizda kvartira bor." },
          ],
        },
        { t: "tip", tone: "info", md: "O'zbekchada bunday gaplarni ko'pincha **-di / -ib qo'ydi / -ibdi** bilan aytamiz, shuning uchun inglizchada Past Simple ishlatgingiz keladi. Ikkalasi ham ba'zan mumkin, lekin **yangilik** yoki **natija** aytayotganda inglizlar ko'pincha **Present Perfect** ishlatadi: *Look! I've **made** a cake!*" },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I've broken my phone.", "He's written three books.", "Have you taken my pen?"] },
          bad: { title: "Xato", items: ["I've broke my phone.", "He's wrote three books.", "Have you took my pen?"] },
        },
        { t: "check", ex: { k: "choice", q: "\"Kimdir mening velosipedimni olibdi!\"", opts: ["Somebody has took my bike!", "Somebody has taken my bike!", "Somebody have taken my bike!", "Somebody has take my bike!"], a: 1, why: "*somebody* = birlik → **has** + V3 **taken**." } },
      ],
    },
    {
      title: "been yoki gone?",
      blocks: [
        { t: "p", md: "**go** fe'lining Present Perfect da ikki xil V3 shakli bor va ma'nosi farq qiladi:" },
        {
          t: "table", head: ["Gap", "Ma'nosi", "U hozir qayerda?"], speak: [0],
          rows: [
            ["Aziz has been to Bukhara.", "Aziz Buxoroga borib kelgan.", "Uyda — qaytib kelgan."],
            ["Aziz has gone to Bukhara.", "Aziz Buxoroga ketgan.", "Buxoroda yoki yo'lda — hali qaytmagan."],
          ],
        },
        {
          t: "examples", items: [
            { en: "Where's Mum? — She's gone to the market.", uz: "Oyim qayerda? — Bozorga ketgan.", note: "U hozir uyda yo'q." },
            { en: "I've been to the market. Look, I've bought apples.", uz: "Bozorga borib keldim. Qara, olma oldim.", note: "Men qaytib keldim." },
            { en: "Have you ever been to Japan?", uz: "Yaponiyada bo'lganmisiz?", note: "Tajriba haqida doim **been**." },
            { en: "Where have you been? We're late!", uz: "Qayerda eding? Kechikyapmiz!" },
          ],
        },
        { t: "tip", tone: "warn", md: "**I've gone to…** deyarli ishlatilmaydi — agar men \"ketgan\" bo'lsam, bu yerda gapirib turolmayman! O'zingiz haqida tajriba aytsangiz — doim **I've been to…**" },
        { t: "check", ex: { k: "choice", q: "**Is Laylo here?** — **No, she's ___ to the library.** (U hozir kutubxonada.)", opts: ["been", "gone", "go", "went"], a: 1, why: "U hali qaytmagan → **gone**." } },
        { t: "check", ex: { k: "fill", q: "I've ___ to Turkey three times. (go)", a: ["been"], why: "Borib kelganman (tajriba) → **been**." } },
      ],
    },
    {
      title: "O'qing: Bo'sh uy",
      blocks: [
        {
          t: "text", title: "Where is everybody?",
          en: "Kamol comes home from work at seven. The flat is very quiet. Where is everybody?\nHe finds a note on the fridge: \"Dad has gone to the airport. He's driving Grandma to her flight. I've gone to the gym with Nilufar. Akbar has been to the shop and he's bought bread and milk. He's gone to bed — he's got a cold. We've made plov for you, it's in the kitchen! Love, Madina.\"\nKamol smiles. Then he looks for his phone. He can't find it. \"Oh no,\" he thinks. \"I've left it at work again!\"",
          uz: "Kamol soat yettida ishdan uyga keladi. Kvartira juda jim. Hamma qayerda?\nU muzlatgichda xat topadi: \"Dadam aeroportga ketgan. U buvimni reysga olib ketyapti. Men Nilufar bilan sport zaliga ketdim. Akbar do'konga borib keldi va non bilan sut olib keldi. U yotgan — shamollab qolgan. Senga palov qildik, oshxonada! Mehr bilan, Madina.\"\nKamol jilmayadi. Keyin telefonini qidiradi. Topolmaydi. \"Voy,\" deb o'ylaydi u. \"Yana ishda qoldiribman!\"",
        },
        { t: "check", ex: { k: "tf", q: "Akbar is at the shop now.", a: false, why: "*Akbar **has been** to the shop* — borib kelgan, hozir u **yotoqda** (*He's gone to bed*)." } },
        { t: "check", ex: { k: "choice", q: "Where is Kamol's phone?", opts: ["At the airport.", "At work.", "In the kitchen.", "At the gym."], a: 1, why: "*I've left it at work again!*" } },
      ],
    },
    {
      title: "Dialog: telefonda",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Jamshid", en: "Hello, can I speak to Sardor, please?", uz: "Alo, Sardor bilan gaplashsam bo'ladimi?" },
            { who: "Sardor's mum", en: "Sorry, he isn't here. He's gone to Samarkand.", uz: "Kechirasiz, u yo'q. Samarqandga ketgan." },
            { who: "Jamshid", en: "Oh! When is he coming back?", uz: "Voy! Qachon qaytadi?" },
            { who: "Sardor's mum", en: "On Friday. Have you tried his mobile?", uz: "Juma kuni. Uyali telefoniga qo'ng'iroq qilib ko'rdingizmi?" },
            { who: "Jamshid", en: "Yes, but he hasn't answered. I've sent him three messages too.", uz: "Ha, lekin javob bermadi. Uchta xabar ham yubordim." },
            { who: "Sardor's mum", en: "Maybe he's forgotten his charger again! I'll tell him you called.", uz: "Balki yana zaryadlovchisini unutgandir! Qo'ng'iroq qilganingizni aytib qo'yaman." },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Sardor is in Samarkand now.", a: true, why: "*He's **gone** to Samarkand* — hali qaytmagan, juma kuni qaytadi." } },
      ],
    },
  ],
  words: [
    { en: "lose – lost – lost", uz: "yo'qotmoq", ipa: "luːz – lɒst – lɒst", pos: "verb", ex: "I've lost my wallet.", exUz: "Hamyonimni yo'qotib qo'ydim." },
    { en: "find – found – found", uz: "topmoq", ipa: "faɪnd – faʊnd – faʊnd", pos: "verb", ex: "Have you found your keys?", exUz: "Kalitlaringni topdingmi?" },
    { en: "win – won – won", uz: "yutmoq, g'olib bo'lmoq", ipa: "wɪn – wʌn – wʌn", pos: "verb", ex: "Our team has won the cup.", exUz: "Jamoamiz kubokni yutdi." },
    { en: "write – wrote – written", uz: "yozmoq", ipa: "raɪt – rəʊt – ˈrɪtn", pos: "verb", ex: "She has written a book.", exUz: "U kitob yozgan." },
    { en: "speak – spoke – spoken", uz: "gapirmoq", ipa: "spiːk – spəʊk – ˈspəʊkən", pos: "verb", ex: "Have you ever spoken to a native speaker?", exUz: "Hech ona tili ingliz bo'lgan odam bilan gaplashganmisiz?" },
    { en: "break – broke – broken", uz: "sindirmoq", ipa: "breɪk – brəʊk – ˈbrəʊkən", pos: "verb", ex: "Who has broken the window?", exUz: "Derazani kim sindirdi?" },
    { en: "forget – forgot – forgotten", uz: "unutmoq", ipa: "fəˈɡet – fəˈɡɒt – fəˈɡɒtn", pos: "verb", ex: "I've forgotten his name.", exUz: "Uning ismini unutib qo'ydim." },
    { en: "drive – drove – driven", uz: "(mashina) haydamoq", ipa: "draɪv – drəʊv – ˈdrɪvn", pos: "verb", ex: "Have you ever driven a truck?", exUz: "Hech yuk mashinasi haydaganmisiz?" },
    { en: "wear – wore – worn", uz: "kiymoq, taqmoq", ipa: "weə – wɔː – wɔːn", pos: "verb", ex: "I've never worn a suit.", exUz: "Men hech qachon kostyum kiymaganman." },
    { en: "swim – swam – swum", uz: "suzmoq", ipa: "swɪm – swæm – swʌm", pos: "verb", ex: "Have you ever swum in the sea?", exUz: "Hech dengizda suzganmisiz?" },
  ],
  practice: [
    { k: "match", pairs: [["write", "written"], ["speak", "spoken"], ["break", "broken"], ["forget", "forgotten"], ["drive", "driven"]] },
    { k: "match", pairs: [["buy", "bought"], ["lose", "lost"], ["find", "found"], ["tell", "told"], ["win", "won"]] },
    { k: "listen", say: "I've lost my keys.", opts: ["I've left my keys.", "I've lost my keys.", "I've lots of keys."], a: 1 },
    { k: "listen", say: "He's gone to Bukhara.", opts: ["He's been to Bukhara.", "He's gone to Bukhara.", "He goes to Bukhara."], a: 1, why: "**gone** — \"gon\"; **been** — \"bi:n\"." },
    { k: "fill", q: "Have you ever ___ in the sea? (swim)", a: ["swum"], why: "**swim – swam – swum**." },
    { k: "fill", q: "Somebody has ___ my cup! (break)", a: ["broken"], why: "**break – broke – broken**." },
    { k: "fill", q: "I've ___ his name. Sorry! (forget)", a: ["forgotten"], why: "**forget – forgot – forgotten**." },
    { k: "fill", q: "Where's Dad? — He's ___ to work.", a: ["gone"], uz: "Dadam qayerda? — Ishga ketgan.", why: "Hali qaytmagan → **gone**." },
    { k: "choice", q: "Qaysi gap **xato**?", opts: ["She's written two books.", "We've drunk all the tea.", "He's took my phone.", "I've heard this song."], a: 2, why: "**take – took – taken**: *He's **taken** my phone.*" },
    { k: "choice", q: "**My parents have ___ to India twice.** (Ular hozir uyda.)", opts: ["gone", "been", "went", "go"], a: 1, why: "Borib kelishgan (tajriba) → **been**." },
    { k: "tf", q: "**She has gone to London** = U Londonga borib kelgan.", a: false, why: "**gone** = ketgan, hali u yerda. Borib kelgan — **has been**." },
    { k: "tf", q: "**buy, make, lose, find** fe'llarining V2 va V3 shakli bir xil.", a: true, why: "*bought – bought, made – made, lost – lost, found – found*." },
    { k: "order", uz: "Men senga elektron xat yubordim.", words: ["I've", "sent", "you", "an", "email."], extra: ["send", "sended"], alt: [["I've", "sent", "an", "email", "to", "you."]] },
    { k: "translate", uz: "Siz hech mashina haydaganmisiz?", a: ["Have you ever driven a car?", "Have you driven a car?", "Have you ever driven a car before?", "Have you driven a car before?", "Have you ever driven?"] },
    { k: "translate", uz: "Ular (they) kubokni yutishdi!", a: ["They have won the cup!", "They've won the cup!", "They won the cup!"], why: "Yangilik — Present Perfect tabiiy, Past Simple ham xato emas." },
    { k: "speak", say: "Have you seen my phone? I think I've lost it.", uz: "Telefonimni ko'rdingmi? Menimcha, yo'qotib qo'ydim." },
  ],
  quiz: [
    { k: "fill", q: "Have you ever ___ a horse? (ride)", a: ["ridden"], why: "**ride – rode – ridden**." },
    { k: "fill", q: "She has ___ a letter to her grandmother. (write)", a: ["written"] },
    { k: "fill", q: "We've ___ a new TV. (buy)", a: ["bought"] },
    { k: "choice", q: "**wear** ning V3 shakli:", opts: ["weared", "wore", "worn", "wear"], a: 2, why: "**wear – wore – worn**." },
    { k: "choice", q: "\"Akam Amerikaga ketgan. U yerda ishlaydi.\"", opts: ["My brother has been to America.", "My brother has gone to America.", "My brother has went to America.", "My brother is gone to America."], a: 1, why: "U hali o'sha yerda → **has gone**." },
    { k: "choice", q: "**Have you ___ the news?** — **Yes! Our team has won!**", opts: ["hear", "heard", "heared", "hearing"], a: 1, why: "**hear – heard – heard**." },
    { k: "listen", say: "Have you ever spoken to a famous person?", opts: ["Have you ever spoken to a famous person?", "Have you ever spoke to a famous person?", "Did you ever speak to a famous person?"], a: 0 },
    { k: "tf", q: "**I've been to the shop. Look, I've bought some bread.** — mantiqan to'g'ri.", a: true, why: "Men borib keldim (**been**) va natija — non bor." },
    { k: "order", uz: "U (he) yana telefonini unutibdi.", words: ["He's", "forgotten", "his", "phone", "again."], extra: ["forgot", "has"] },
    { k: "translate", uz: "Men pasportimni yo'qotib qo'ydim.", a: ["I have lost my passport.", "I've lost my passport.", "I lost my passport."] },
  ],
  summary: [
    "V3 ni guruhlab yodlang: **A-A-A** (*put*), **A-B-B** (*bought, lost, found*), **A-B-C** (*written, spoken, broken*), **A-B-A** (*come*).",
    "**have + V3**, hech qachon **have + V2** emas: *I've **taken*** (✅), *I've took* (❌).",
    "Present Perfect natija va yangilik uchun ham: *I've lost my keys. We've bought a flat!*",
    "**has been to** = borib kelgan (hozir qaytgan); **has gone to** = ketgan (hali u yerda).",
  ],
  homework: "Bugungi 3-guruh jadvalidagi 12 ta fe'lni kartochkaga yozing (V1 / V2 / V3) va har kuni ovoz chiqarib takrorlang. Keyin oilangiz haqida 6 ta gap yozing: 3 tasi **has gone to** (hozir uyda yo'q odamlar) va 3 tasi **has been to** (borib kelgan joylar).",
};

export default lesson;
