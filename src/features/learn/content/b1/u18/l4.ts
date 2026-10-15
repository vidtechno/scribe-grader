import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u18-l4",
  title: "Present Perfect or Past Simple?",
  titleUz: "Present Perfect yoki Past Simple? Simple yoki Continuous?",
  goal: "O'tgan voqea haqida gapirganda to'rt shakldan birini ongli tanlaysiz: **Past Simple**, **Present Perfect**, **Present Perfect Continuous** yoki **Past Continuous**. Bir hikoyada ularni bir-biriga bog'lay olasiz va **I have seen him yesterday** kabi xatolardan qochasiz.",
  slides: [
    {
      title: "Asosiy farq: tugagan vaqt yoki hozirga aloqa",
      blocks: [
        { t: "p", md: "Ikkala zamon ham o'tgan ishni bildiradi. Tanlov **ish haqida qanday fikr** bildirishingizga bog'liq:" },
        {
          t: "table", head: ["", "Past Simple", "Present Perfect"],
          rows: [
            ["Fikr", "Tugagan voqea, vaqti ma'lum", "O'tgan ish, hozirga aloqasi bor"],
            ["Vaqt", "Aniq payt aytiladi yoki tushuniladi", "Aniq payt aytilmaydi"],
            ["Misol", "I visited Bukhara in 2019.", "I have visited Bukhara."],
            ["Savol", "When did you visit it?", "Have you ever visited it?"],
            ["Hikoya", "Voqealar ketma-ketligi: avval ..., keyin ...", "Yangilik, tajriba, natija"],
          ],
        },
        { t: "tip", tone: "info", md: "O'zingizga savol bering: **«Qachon?»** deb so'rasa, javob bera olamanmi (kecha, 2019-yilda, ikki hafta oldin)? Ha → **Past Simple**. «Qachon» muhim emas, muhimi ish **bo'lgani** yoki **natijasi** → **Present Perfect**." },
        { t: "check", ex: { k: "choice", q: "**I ___ the report an hour ago.**", opts: ["have finished", "finished", "have been finishing", "finish"], a: 1, why: "**an hour ago** — aniq o'tgan payt → Past Simple." } },
        { t: "check", ex: { k: "choice", q: "**I ___ the report, so we can send it now.**", opts: ["finished yesterday", "have finished", "was finishing", "finishes"], a: 1, why: "Hozirgi natija (jo'natish mumkin) → Present Perfect." } },
      ],
    },
    {
      title: "Signal so'zlar",
      blocks: [
        { t: "p", md: "Ba'zi so'zlar va iboralar zamonni o'zi ko'rsatadi:" },
        {
          t: "table", head: ["Past Simple", "Present Perfect"], speak: [0, 1],
          rows: [
            ["yesterday", "ever / never"],
            ["last night / week / year", "already / just / yet"],
            ["two days ago", "so far / until now"],
            ["in 2019 / on Monday", "this week / this year / today"],
            ["When did you…?", "How long have you…? / How many times…?"],
            ["then / after that", "for / since (davom etayotgan)"],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I saw him yesterday.", "When did she move here?", "They have lived here since 2015."] },
          bad: { title: "Xato", items: ["I have seen him yesterday.", "When has she moved here?", "They lived here since 2015."] },
        },
        { t: "tip", tone: "warn", md: "O'zbek tilida «kecha ko'rganman» deyish mumkin, shuning uchun *I have seen him yesterday* xatosi juda tez-tez uchraydi. Inglizchada **kecha, o'tgan yili, ... oldin, 2019-yilda** bilan faqat **Past Simple**." },
        { t: "p", md: "**recently** va **lately** ikkala zamon bilan ham kelishi mumkin; ma'no hozirgi holatga aloqa qilsa, Present Perfect: *I've recently moved house.* Aniq payt bilan esa Past Simple: *I moved house last month.*" },
        { t: "check", ex: { k: "fix", wrong: "When have you bought this laptop?", a: ["When did you buy this laptop?"], hint: "When bilan savol", why: "**When** bilan so'ralgan savol — Past Simple: *did you buy*." } },
        { t: "check", ex: { k: "choice", q: "**We ___ here since 2018.**", opts: ["lived", "have lived", "are living", "live"], a: 1, why: "**since** + davom etayotgan holat → Present Perfect." } },
      ],
    },
    {
      title: "Bir hikoyada ikkalasi",
      blocks: [
        { t: "p", md: "Suhbat ko'pincha **Present Perfect** bilan boshlanadi (yangilik yoki tajriba), keyin **Past Simple** bilan tafsilot beriladi: **qachon, qayerda, kim bilan, nima bo'ldi**:" },
        {
          t: "examples", items: [
            { en: "I've lost my wallet. I left it on the bus this morning.", uz: "Hamyonimni yo'qotdim. Uni bugun ertalab avtobusda qoldirdim.", note: "Yangilik (PP) + tafsilot (PS)." },
            { en: "Have you ever been to Samarkand? — Yes, I went there with my class in 2018. We stayed for three days.", uz: "Samarqandda bo'lganmisan? — Ha, 2018-yilda sinfim bilan bordim. Uch kun qoldik." },
            { en: "She has written several novels. Her first one came out in 2012.", uz: "U bir necha roman yozgan. Birinchisi 2012-yilda chiqqan." },
          ],
        },
        { t: "tip", tone: "good", md: "Formula: **Present Perfect** (umumiy gap) → **Past Simple** (aniq tafsilot). Hikoyani boshlash uchun: *Have you heard…? I've just…* Davom ettirish uchun: *It happened when… I went… We saw…*" },
        { t: "check", ex: { k: "fill", q: "I've seen that film. I ___ it with my brother last weekend. (watch)", a: ["watched"], why: "**last weekend** — aniq payt → Past Simple." } },
        { t: "check", ex: { k: "choice", q: "**She has travelled a lot. Last year she ___ to Japan.**", opts: ["has gone", "went", "has been", "goes"], a: 1, why: "**Last year** → Past Simple: *went*." } },
      ],
    },
    {
      title: "To'rt shakl: qaysi birini tanlaymiz?",
      blocks: [
        { t: "p", md: "Endi uchta tanlovni birga ko'ramiz: **Past Simple**, **Present Perfect (Simple yoki Continuous)** va **Past Continuous**:" },
        {
          t: "table", head: ["Shakl", "Qachon", "Misol"], speak: [2],
          rows: [
            ["Past Simple", "Tugagan voqea, aniq payt", "I read that book last year."],
            ["Past Continuous", "O'tgan paytda davom etayotgan, boshqa voqea bilan kesishgan jarayon", "I was reading when you called."],
            ["Present Perfect Simple", "Natija, tajriba, son", "I've read five books this year."],
            ["Present Perfect Continuous", "Hozirgacha davom etgan jarayon", "I've been reading all evening."],
          ],
        },
        {
          t: "examples", items: [
            { en: "I broke my arm when I was skiing.", uz: "Chang'i uchayotganimda qo'limni sindirib oldim.", note: "Past Simple (qisqa voqea) + Past Continuous (jarayon)." },
            { en: "I've been skiing since I was six, and I've broken my arm only once.", uz: "Men olti yoshimdan beri chang'i uchaman va qo'limni faqat bir marta sindirganman.", note: "Davomiylik (PPC) + son (PP)." },
            { en: "Where have you been? I've been waiting for you for an hour!", uz: "Qayerda eding? Sizni bir soatdan beri kutyapman!" },
          ],
        },
        { t: "tip", tone: "info", md: "Savol-testi: (1) Vaqt aniq va tugaganmi? → **Past Simple**. (2) Boshqa voqea paytida davom etayotgan edimi? → **Past Continuous**. (3) Hozirgacha davom etmoqdami yoki jarayon muhimmi? → **Present Perfect Continuous**. (4) Natija, son, tajriba muhimmi? → **Present Perfect Simple**." },
        { t: "check", ex: { k: "choice", q: "**I ___ dinner when the phone rang.**", opts: ["was cooking", "have cooked", "have been cooking", "cook"], a: 0, why: "Telefon jiringlaganda jarayon davom etayotgan edi → Past Continuous." } },
        { t: "check", ex: { k: "choice", q: "**She ___ English for five years, and she speaks it very well.**", opts: ["learned", "was learning", "has been learning", "learns"], a: 2, why: "Hozirgacha davom etgan jarayon (for five years) → Present Perfect Continuous." } },
      ],
    },
    {
      title: "O'qing: bir kechaning hikoyasi",
      blocks: [
        {
          t: "text", title: "A strange discovery",
          en: "Last Saturday I was cleaning my grandmother's attic when I discovered an old box. Inside there were letters and photographs. I have been reading them all week, and I have learned a lot about my family. Luckily, my grandmother remembers everything. She told me that her father moved to this city in 1950. Since then, our family has lived in the same street. I haven't finished all the letters yet, but I've already found a photo of my grandfather as a young man. I realise now how important these memories are.",
          uz: "O'tgan shanba kuni buvimning cherdagini tozalayotganimda eski qutini topib oldim. Ichida xatlar va suratlar bor edi. Men ularni butun hafta o'qiyapman va oilam haqida ko'p narsa bildim. Yaxshiyamki, buvim hamma narsani eslaydi. U menga otasi 1950-yilda shu shaharga ko'chib kelganini aytdi. O'shandan beri oilamiz bir xil ko'chada yashaydi. Men hamma xatlarni hali o'qib bitirmadim, lekin allaqachon bobomning yoshlikdagi suratini topdim. Endi bu xotiralar qanchalik muhimligini tushunaman.",
        },
        { t: "check", ex: { k: "choice", q: "Why does the writer say **I was cleaning … when I discovered**?", opts: ["A long action was in progress when a short event happened.", "The cleaning is still going on.", "The writer has never cleaned the attic.", "It is a question."], a: 0, why: "Uzoq jarayon (**was cleaning**) + qisqa voqea (**discovered**)." } },
        { t: "check", ex: { k: "tf", q: "The writer has finished reading all the letters.", a: false, why: "Matnda: *I haven't finished all the letters yet.*" } },
      ],
    },
    {
      title: "Dialog: tajriba va tafsilot",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Emma", en: "Have you ever lived in another country, Karim?", uz: "Karim, boshqa mamlakatda yashaganmisan?" },
            { who: "Karim", en: "Yes, I have. I lived in Germany for two years.", uz: "Ha. Germaniyada ikki yil yashaganman." },
            { who: "Emma", en: "That's interesting! When did you go there?", uz: "Qiziq! U yerga qachon borgansan?" },
            { who: "Karim", en: "I went in 2017 to study engineering. I came back in 2019.", uz: "2017-yilda muhandislikni o'qish uchun bordim. 2019-yilda qaytdim." },
            { who: "Emma", en: "Have you kept in touch with your friends there?", uz: "U yerdagi do'stlaringiz bilan aloqada bo'lib kelayapsizmi?" },
            { who: "Karim", en: "Yes. I've been writing to my best friend, Jonas, every month since I left. He visited me here last summer.", uz: "Ha. Ketganimdan beri eng yaqin do'stim Yonasga har oy yozaman. U o'tgan yozda meni ko'rgani keldi." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "Why does Karim say **I lived in Germany**, not **I have lived**?", opts: ["He doesn't live there now; it is a finished period.", "Germany is far away.", "He has never lived there.", "It is a question."], a: 0, why: "Davr tugagan (2017-2019) → Past Simple." } },
      ],
    },
  ],
  words: [
    { en: "memory", uz: "xotira, esdalik", ipa: "ˈmem.ər.i", pos: "noun", ex: "I have happy memories of my childhood.", exUz: "Bolaligimdan yoqimli xotiralarim bor." },
    { en: "discover", uz: "kashf etmoq, topib olmoq", ipa: "dɪˈskʌv.ər", pos: "verb", ex: "We discovered a lovely café yesterday.", exUz: "Kecha chiroyli kafeni topib oldik." },
    { en: "realise", uz: "anglab yetmoq", ipa: "ˈrɪə.laɪz", pos: "verb", ex: "I realised I had left my phone at home.", exUz: "Telefonimni uyda qoldirganimni angladim." },
    { en: "notice", uz: "payqamoq", ipa: "ˈnəʊ.tɪs", pos: "verb", ex: "Did you notice the new sign?", exUz: "Yangi yozuvni payqadingizmi?" },
    { en: "luckily", uz: "yaxshiyamki, omadga", ipa: "ˈlʌk.ɪ.li", pos: "adv", ex: "Luckily, nobody was hurt in the accident.", exUz: "Yaxshiyamki, voqeada hech kim jarohat olmadi." },
    { en: "unfortunately", uz: "afsuski", ipa: "ʌnˈfɔː.tʃən.ət.li", pos: "adv", ex: "Unfortunately, I missed the last train.", exUz: "Afsuski, oxirgi poyezdga kechikdim." },
    { en: "gradually", uz: "asta-sekin", ipa: "ˈɡrædʒ.u.ə.li", pos: "adv", ex: "My English has gradually improved.", exUz: "Inglizchamni asta-sekin yaxshilandi." },
    { en: "recent", uz: "yaqindagi, so'nggi", ipa: "ˈriː.sənt", pos: "adj", ex: "Have you seen any recent films?", exUz: "Yaqinda biror film ko'rdingizmi?" },
    { en: "remind", uz: "eslatmoq", ipa: "rɪˈmaɪnd", pos: "verb", ex: "This song reminds me of my school days.", exUz: "Bu qo'shiq menga maktab kunlarimni eslatadi." },
    { en: "mention", uz: "tilga olmoq, eslatib o'tmoq", ipa: "ˈmen.ʃən", pos: "verb", ex: "She didn't mention her new job.", exUz: "U yangi ishi haqida gapirmadi." },
  ],
  practice: [
    { k: "choice", q: "**We ___ to Dubai in 2022.**", opts: ["have been", "went", "have gone", "go"], a: 1, why: "**in 2022** — aniq payt → Past Simple." },
    { k: "choice", q: "**___ you ever tried Georgian food?**", opts: ["Did", "Have", "Do", "Were"], a: 1, why: "Tajriba savoli → Present Perfect." },
    { k: "listen", say: "When did you notice the problem?", opts: ["When did you notice the problem?", "When have you noticed the problem?", "Where did you notice the problem?", "When do you notice the problem?"], a: 0 },
    { k: "choice", q: "**She ___ in the park when she met her old teacher.**", opts: ["walked", "was walking", "has walked", "has been walking"], a: 1, why: "Jarayon davom etayotgan paytda voqea bo'ldi → Past Continuous." },
    { k: "fill", q: "I ___ my keys. Can you help me look for them? (lose)", a: ["have lost", "'ve lost"], why: "Hozirgi natija (kalitlar yo'q) → Present Perfect." },
    { k: "fill", q: "He ___ his leg three years ago. (break)", a: ["broke"], why: "**ago** → Past Simple: *broke*." },
    { k: "fill", q: "I've ___ studying since seven o'clock. (be)", a: ["been"], why: "**have been + V-ing**: jarayon, since bilan." },
    { k: "fill", q: "Luckily, I ___ my passport before the flight. (find)", a: ["found"], why: "Voqea tugagan va hikoya qilinayapti → Past Simple." },
    { k: "order", uz: "Qachon bu shaharga ko'chib keldingiz?", words: ["When", "did", "you", "move", "to", "this", "city?"], extra: ["have", "moved"], why: "**When did you + V1?**" },
    { k: "order", uz: "Men o'tgan hafta yangi kafeni topib oldim.", words: ["I", "discovered", "a", "new", "café", "last", "week."], extra: ["have", "discover"], alt: [["Last", "week", "I", "discovered", "a", "new", "café."]], why: "**last week** → Past Simple." },
    { k: "translate", uz: "Biz o'tgan yili Buxoroga borganmiz.", a: ["We went to Bukhara last year.", "Last year we went to Bukhara."], why: "**last year** → Past Simple." },
    { k: "translate", uz: "U ikki soatdan beri ishlayapti.", a: ["She has been working for two hours.", "He has been working for two hours.", "She's been working for two hours.", "He's been working for two hours."], why: "for + jarayon → Present Perfect Continuous." },
    { k: "fix", wrong: "I have seen him yesterday.", a: ["I saw him yesterday."], hint: "yesterday", why: "**yesterday** bilan Past Simple." },
    { k: "fix", wrong: "She lived here since 2010.", a: ["She has lived here since 2010.", "She's lived here since 2010.", "She has been living here since 2010.", "She's been living here since 2010."], hint: "since", why: "**since** + davom etayotgan holat → Present Perfect." },
    { k: "match", pairs: [["memory", "xotira"], ["discover", "topib olmoq"], ["notice", "payqamoq"], ["gradually", "asta-sekin"], ["remind", "eslatmoq"]] },
    { k: "speak", say: "I've lost my wallet. I left it on the bus.", uz: "Hamyonimni yo'qotdim. Uni avtobusda qoldirdim." },
  ],
  quiz: [
    { k: "choice", q: "**I ___ him since last year.**", opts: ["didn't see", "haven't seen", "wasn't seeing", "don't see"], a: 1, why: "**since** + inkor → Present Perfect." },
    { k: "choice", q: "**We ___ lunch when the fire alarm started.**", opts: ["were having", "have had", "have been having", "had been"], a: 0, why: "Jarayon + qisqa voqea → Past Continuous." },
    { k: "choice", q: "**My sister ___ three novels so far this year.**", opts: ["read", "has read", "has been reading", "was reading"], a: 1, why: "**three novels** + so far → natija, son → Present Perfect Simple." },
    { k: "choice", q: "**Where ___ you born?**", opts: ["did", "have", "were", "are"], a: 2, why: "*be born* — o'tgan zamonda: **Where were you born?**" },
    { k: "fill", q: "Have you been to the new mall yet? — Yes, I ___ there on Sunday. (go)", a: ["went"], why: "**on Sunday** — aniq payt → Past Simple." },
    { k: "fill", q: "They've been repairing the road ___ three weeks.", a: ["for"], why: "*three weeks* — muddat → **for**." },
    { k: "listen", say: "How long have you been waiting?", opts: ["How long have you been waiting?", "How long did you wait?", "How long are you waiting?"], a: 0 },
    { k: "fix", wrong: "When have you arrived at the hotel?", a: ["When did you arrive at the hotel?"], hint: "When", why: "**When** bilan savol — Past Simple." },
    { k: "tf", q: "**I've been to Paris in 2019** — bu gap to'g'ri.", a: false, why: "**in 2019** — aniq payt: *I went to Paris in 2019.* yoki *I've been to Paris.*" },
    { k: "translate", uz: "U hech qachon bunday ovqatni yemagan.", a: ["She has never eaten food like this.", "He has never eaten food like this.", "She's never eaten food like this.", "He's never eaten food like this.", "She has never eaten this kind of food.", "He has never eaten this kind of food."], why: "Tajriba: **has never eaten**." },
  ],
  summary: [
    "**Past Simple** — tugagan voqea, aniq payt: *yesterday, last year, two days ago, in 2019, when…?*",
    "**Present Perfect** — hozirga aloqasi bor: tajriba, natija, yangilik; *ever, never, already, yet, just, so far, for, since*.",
    "Suhbatda: **Present Perfect** (yangilik) → **Past Simple** (tafsilot). Xato: ~~I have seen him yesterday~~ → **I saw him yesterday.**",
    "**Continuous** — jarayon (*I've been reading all day*, *I was reading when…*); **Simple** — natija va son (*I've read three chapters*).",
    "Savol-testi: aniq tugagan vaqt? → Past Simple. Hozirgacha davom etadimi? → Present Perfect (Continuous). Natija / son / tajriba? → Present Perfect Simple.",
  ],
  homework: "O'zingiz haqingizda kichik hikoya yozing (8 ta gap): 2 ta *I've…* (tajriba), keyin ularning har biri haqida 2 ta Past Simple tafsilot (*I went… in…*), oxirida 2 ta *I've been… for / since…* gap. Zamonlarni rangli qalam bilan belgilab chiqing.",
};

export default lesson;
