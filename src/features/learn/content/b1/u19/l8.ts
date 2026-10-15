import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u19-l8",
  title: "Unit review: stories and reporting",
  titleUz: "Bosqich takrori: hikoya va ko'chirma gap",
  goal: "Bosqichni takrorlaysiz: **Past Perfect** va hikoya zamonlari, **reported speech** (darak, savol, iltimos), hikoya bog'lovchilari va yangilik tili. Hammasini yangi misollarda ishlatib ko'rasiz.",
  slides: [
    {
      title: "Takror 1: hikoya zamonlari",
      blocks: [
        { t: "p", md: "Hikoyada uch zamon birga ishlaydi. Har birining vazifasi alohida:" },
        {
          t: "table", head: ["Zamon", "Vazifasi", "Misol"], speak: [2],
          rows: [
            ["Past Simple", "Asosiy voqealar ketma-ketligi", "The climber called for help."],
            ["Past Continuous", "Fon, davom etayotgan harakat", "It was snowing when he fell."],
            ["Past Perfect (had + V3)", "Boshqa o'tgan voqeadan OLDIN bo'lgan ish", "He had lost his way before the fog came."],
          ],
        },
        { t: "tip", tone: "info", md: "Oddiy tekshiruv: ikkita o'tgan voqea bo'lsa, **oldin bo'lganini** Past Perfect bilan, **keyin bo'lganini** Past Simple bilan ayting: *When I arrived, the concert had started.* Voqealar ketma-ket aytilsa (avval bu, keyin bu), Past Simple yetarli: *I arrived and the concert started.*" },
        { t: "check", ex: { k: "fill", q: "When we reached the station, the train ___ already left. (have)", a: ["had"], why: "Poyezd biz yetib kelishimizdan **oldin** ketgan → **had left**." } },
        { t: "check", ex: { k: "choice", q: "She was cooking when the lights ___ out.", opts: ["went", "had gone", "were going", "go"], a: 0, why: "To'satdan voqea → Past Simple: **went**; fon → *was cooking*." } },
      ],
    },
    {
      title: "Takror 2: reported statements",
      blocks: [
        { t: "p", md: "Birovning gapini ko'chirganda zamon **bir pog'ona orqaga** siljiydi. Bu o'zgarishlarni eslang:" },
        {
          t: "table", head: ["To'g'ridan-to'g'ri gap", "Ko'chirma gap"], speak: [0, 1],
          rows: [
            ["\"I am tired.\"", "She said she was tired."],
            ["\"I live in Samarkand.\"", "He said he lived in Samarkand."],
            ["\"We went to Bukhara.\"", "They said they had gone to Bukhara."],
            ["\"I have finished.\"", "She said she had finished."],
            ["\"I will call you.\"", "He said he would call me."],
            ["\"I can swim.\"", "She said she could swim."],
          ],
        },
        { t: "tip", tone: "warn", md: "**say** bilan qabul qiluvchi aytilmaydi (*He said that…*), **tell** bilan doim kimga aytilgani bor: *He told me that…* Xato: ~~He said me~~. Vaqt so'zlari ham o'zgaradi: *tomorrow → the next day, yesterday → the day before, now → then, here → there.*" },
        { t: "check", ex: { k: "choice", q: "\"I will help you,\" said Ben. → Ben said that he ___ help me.", opts: ["would", "will", "can", "had"], a: 0, why: "**will → would** (zamon siljishi)." } },
        { t: "check", ex: { k: "fix", wrong: "She said me that she was late.", a: ["She told me that she was late.", "She told me she was late.", "She said that she was late.", "She said she was late."], hint: "say yoki tell", why: "**say** + ob'ektsiz, **tell** + kimga: *told me*." } },
      ],
    },
    {
      title: "Takror 3: savol va iltimoslar",
      blocks: [
        { t: "p", md: "Ko'chirma savolda **gap tartibi darak gapdagidek** bo'ladi: yordamchi fe'l (do/does/did) tushadi va savol belgisi qo'yilmaydi. Yes/no savollarda **if** yoki **whether** qo'shiladi. Iltimos va buyruqlarda **ask / tell + kimga + to + fe'l**." },
        {
          t: "table", head: ["To'g'ridan-to'g'ri", "Ko'chirma"], speak: [0, 1],
          rows: [
            ["\"Where do you live?\"", "He asked me where I lived."],
            ["\"Are you ready?\"", "She asked if I was ready."],
            ["\"Did you see the film?\"", "He asked whether I had seen the film."],
            ["\"Please open the window.\"", "She asked me to open the window."],
            ["\"Don't be late.\"", "He told us not to be late."],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["She asked where I worked.", "He asked if I was hungry.", "They told me not to worry."] },
          bad: { title: "Xato", items: ["She asked where did I work.", "He asked if was I hungry.", "They told me don't worry."] },
        },
        { t: "check", ex: { k: "fix", wrong: "He asked me where did I park.", a: ["He asked me where I parked.", "He asked me where I had parked."], hint: "Gap tartibi", why: "Ko'chirma savolda **did** tushadi, tartib: ega + fe'l." } },
        { t: "check", ex: { k: "choice", q: "\"Don't touch it!\" → She told him ___ it.", opts: ["not to touch", "don't touch", "to not touching", "not touch"], a: 0, why: "Taqiq: **tell + kimga + not to + fe'l**." } },
      ],
    },
    {
      title: "Takror 4: bog'lovchilar va yangilik tili",
      blocks: [
        { t: "p", md: "Hikoya va yangilik yozganda bog'lovchilar tartibni ko'rsatadi, yangilik so'zlari esa xabarni aniq qiladi:" },
        {
          t: "table", head: ["Maqsad", "So'zlar"], speak: [1],
          rows: [
            ["Boshlash", "At first, …"],
            ["To'satdan", "Suddenly, … / Just then, …"],
            ["Bir vaqtda", "Meanwhile, … / while"],
            ["Natija", "Fortunately, … / Unfortunately, … / In the end, …"],
            ["Yangilik", "headline, source, reliable, rumour, according to"],
          ],
        },
        { t: "tip", tone: "warn", md: "Eslatma: **in the end** (natija) va **at the end of + ot**. **Eventually** — «oxir-oqibat», «mumkin» emas. **News** — sanalmaydigan ot: *some news, a piece of news*." },
        { t: "check", ex: { k: "choice", q: "We were having dinner. ___, the phone rang.", opts: ["Just then", "In the end", "At first", "Afterwards"], a: 0, why: "Davom etayotgan ish paytida to'satdan voqea → **Just then / suddenly**." } },
        { t: "check", ex: { k: "fix", wrong: "At the end of, we took a taxi home.", a: ["In the end, we took a taxi home.", "Eventually, we took a taxi home."], hint: "Natija bildirsin", why: "Natija: **in the end**. *At the end of* dan keyin ot kerak." } },
      ],
    },
    {
      title: "O'qing: bir tunlik sarguzasht",
      blocks: [
        {
          t: "text", title: "A night on the mountain", voice: "emma",
          en: "Yesterday a young climber survived a night alone on a mountain. According to the rescue team, he had lost his way in thick fog. He told reporters that he had been very frightened. \"I didn't have any food,\" he said. The rescuers asked him whether he could walk, and he answered that his leg hurt. Meanwhile, his family was waiting anxiously at the bottom. Eventually, a helicopter found him and took him to hospital. The doctors announced that he was fine. His mother said that she would never forget the night.",
          uz: "Kecha yosh alpinist tog'da yolg'iz bir tunni o'tkazib, omon qoldi. Qutqaruv guruhining aytishicha, u quyuq tumanda yo'ldan adashgan edi. U muxbirlarga juda qo'rqqanini aytdi. «Menda ovqat yo'q edi», dedi u. Qutqaruvchilar undan yura oladimi, deb so'rashdi, u esa oyog'i og'riyotganini javob berdi. Shu orada oilasi pastda xavotir bilan kutib turardi. Oxiri vertolyot uni topib, kasalxonaga olib bordi. Shifokorlar uning sog'ligi yaxshiligini e'lon qilishdi. Onasi bu tunni hech qachon unutmasligini aytdi.",
        },
        { t: "check", ex: { k: "tf", q: "The climber had plenty of food.", a: false, why: "U: *I didn't have any food* — ovqati yo'q edi." } },
        { t: "check", ex: { k: "choice", q: "Why did the climber lose his way?", opts: ["There was thick fog.", "His phone was broken.", "He had no shoes.", "The helicopter was late."], a: 0, why: "Matnda: *he had lost his way in thick fog*." } },
      ],
    },
    {
      title: "Dialog: bu rostdan bo'lganmi?",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Helen", en: "Did you hear about the incident on the high street?", uz: "Bosh ko'chadagi hodisani eshitdingmi?" },
            { who: "Aziz", en: "Yes. A neighbour told me that a car had hit a lamp post.", uz: "Ha. Qo'shnim mashina chiroq ustuniga urilganini aytdi." },
            { who: "Helen", en: "Was anyone hurt?", uz: "Kimdir jarohat oldimi?" },
            { who: "Aziz", en: "No, fortunately. The driver said that he had braked too late.", uz: "Yo'q, yaxshiyamki. Haydovchi juda kech tormoz berganini aytdi." },
            { who: "Helen", en: "What did the police ask him?", uz: "Politsiya undan nima so'radi?" },
            { who: "Aziz", en: "They asked him whether he had been driving fast. He said he hadn't.", uz: "Ular tez haydagan-haydamaganini so'rashdi. U yo'q dedi." },
            { who: "Helen", en: "Well, I'll wait for the official news before I believe the rumours.", uz: "Mayli, mish-mishlarga ishonishdan oldin rasmiy xabarni kutaman." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "What did the police ask the driver?", opts: ["Whether he had been driving fast", "Where he lived", "If he had a phone", "Why he was late"], a: 0, why: "Dialogda: *They asked him whether he had been driving fast.*" } },
      ],
    },
  ],
  words: [
    { en: "announce", uz: "e'lon qilmoq", ipa: "əˈnaʊns", pos: "verb", ex: "The school announced that classes would start on Monday.", exUz: "Maktab darslar dushanba kuni boshlanishini e'lon qildi." },
    { en: "claim", uz: "da'vo qilmoq, ta'kidlamoq", ipa: "kleɪm", pos: "verb", ex: "He claimed that he had never seen the man.", exUz: "U bu odamni hech qachon ko'rmaganini ta'kidladi." },
    { en: "mention", uz: "tilga olmoq", ipa: "ˈmen.ʃən", pos: "verb", ex: "She didn't mention the problem in her message.", exUz: "U xabarida muammoni tilga olmadi." },
    { en: "incident", uz: "hodisa, voqea", ipa: "ˈɪn.sɪ.dənt", pos: "noun", ex: "The police are looking into the incident.", exUz: "Politsiya hodisani o'rganmoqda." },
    { en: "rescue", uz: "qutqarmoq; qutqaruv", ipa: "ˈres.kjuː", pos: "verb", ex: "Firefighters rescued two children from the building.", exUz: "O't o'chiruvchilar binodan ikki bolani qutqardi." },
    { en: "survive", uz: "omon qolmoq", ipa: "səˈvaɪv", pos: "verb", ex: "Everyone survived the accident.", exUz: "Hamma hodisadan omon qoldi." },
    { en: "escape", uz: "qochib qutulmoq", ipa: "ɪˈskeɪp", pos: "verb", ex: "The bird escaped from its cage.", exUz: "Qush qafasidan qochib chiqdi." },
    { en: "memorable", uz: "esda qolarli", ipa: "ˈmem.ər.ə.bəl", pos: "adj", ex: "It was a memorable evening for all of us.", exUz: "Bu hammamiz uchun esda qolarli kech edi." },
    { en: "recall", uz: "eslamoq, yodga olmoq", ipa: "rɪˈkɔːl", pos: "verb", ex: "I can't recall his name.", exUz: "Uning ismini eslay olmayapman." },
    { en: "unexpected", uz: "kutilmagan", ipa: "ˌʌn.ɪkˈspek.tɪd", pos: "adj", ex: "We had an unexpected visitor last night.", exUz: "Kecha bizga kutilmagan mehmon keldi." },
  ],
  practice: [
    { k: "match", pairs: [["announce", "e'lon qilmoq"], ["claim", "ta'kidlamoq"], ["rescue", "qutqarmoq"], ["survive", "omon qolmoq"], ["escape", "qochib qutulmoq"], ["unexpected", "kutilmagan"]] },
    { k: "choice", q: "When I got home, my sister ___ dinner.", opts: ["had already cooked", "was already cook", "has already cooked", "already cooks"], a: 0, why: "Uyga kelishimdan **oldin** pishirgan → Past Perfect: **had cooked**." },
    { k: "choice", q: "\"I'm leaving tomorrow,\" she said. → She said she was leaving ___.", opts: ["the next day", "tomorrow", "yesterday", "next day ago"], a: 0, why: "Ko'chirma gapda *tomorrow → the next day*." },
    { k: "choice", q: "\"Do you like it?\" → He asked me ___ it.", opts: ["if I liked", "did I like", "do I like", "that I liked"], a: 0, why: "Yes/no savol: **if** + darak tartib, zamon siljishi." },
    { k: "listen", say: "She told me that she had lost her bag.", opts: ["She told me that she had lost her bag.", "She told me that she lost her bag.", "She said me that she had lost her bag.", "She told me that she has lost her bag."], a: 0, why: "**told me** + **had lost** (Past Perfect)." },
    { k: "fill", q: "\"I can swim,\" said Tom. → Tom said he ___ swim.", a: ["could"], why: "**can → could**." },
    { k: "fill", q: "\"Please sit down,\" the nurse said. → The nurse asked me ___ sit down.", a: ["to"], why: "Iltimos: **ask + kimga + to + fe'l**." },
    { k: "fill", q: "Everyone ___ the accident, but one man needed hospital care. (omon qolmoq, past)", a: ["survived"], why: "**survived** — omon qoldi." },
    { k: "order", uz: "U menga nima uchun kechikkanimni so'radi.", words: ["She", "asked", "me", "why", "I", "was", "late."], extra: ["did", "is"], why: "Ko'chirma savolda ega + fe'l tartibi." },
    { k: "order", uz: "Uning aytishicha, u ilgari hech qachon bu yerda bo'lmagan.", words: ["He", "said", "he", "had", "never", "been", "here", "before."], extra: ["has", "ever"], why: "Present Perfect → Past Perfect: *had never been*." },
    { k: "translate", uz: "U menga kech qolmaslikni aytdi.", a: ["He told me not to be late.", "She told me not to be late."], why: "**tell + kimga + not to + fe'l**." },
    { k: "translate", uz: "Avvaliga hech kim unga ishonmadi.", a: ["At first, nobody believed him.", "At first nobody believed him.", "At first, no one believed him.", "At first no one believed him."], why: "**At first** + Past Simple." },
    { k: "fix", wrong: "She asked me what was my name.", a: ["She asked me what my name was.", "She asked what my name was."], hint: "Ko'chirma savol tartibi", why: "Ko'chirma savolda ega fe'ldan oldin: *what my name was*." },
    { k: "tf", q: "\"Unfortunately\" is used for good news.", a: false, why: "**Unfortunately** — afsuski; yomon xabar uchun." },
    { k: "speak", say: "The police announced that nobody had been hurt.", uz: "Politsiya hech kim jabrlanmaganini e'lon qildi." },
  ],
  quiz: [
    { k: "choice", q: "By the time we arrived, the match ___.", opts: ["had started", "started", "was start", "has started"], a: 0, why: "Biz yetib kelishimizdan oldin boshlangan → **had started**." },
    { k: "choice", q: "He said that he ___ a new job.", opts: ["had found", "has found", "finds", "find"], a: 0, why: "\"I found / have found\" → **had found**." },
    { k: "choice", q: "She asked me ___ I wanted tea or coffee.", opts: ["whether", "that", "what", "do"], a: 0, why: "Ikki variantli savol: **whether** (yoki *if*)." },
    { k: "choice", q: "The paper ___ the story on Monday.", opts: ["published", "witnessed", "claimed", "escaped"], a: 0, why: "Gazeta nashr qildi: **published**." },
    { k: "fill", q: "The driver ___ that he had not seen the sign. (claim, past)", a: ["claimed"], why: "**claimed** — ta'kidladi." },
    { k: "fill", q: "I was waiting. ___, my friend was getting ready at home.", a: ["Meanwhile"], why: "Bir vaqtda → **Meanwhile**." },
    { k: "fix", wrong: "He told that he was tired.", a: ["He told me that he was tired.", "He said that he was tired.", "He said he was tired.", "He told me he was tired."], hint: "tell yoki say", why: "**tell** + kimga kerak; yoki **said** ishlating." },
    { k: "listen", say: "They asked him to wait outside.", opts: ["They asked him to wait outside.", "They asked him if he waited outside.", "They told him not to wait outside.", "They asked him where he waited."], a: 0, why: "**ask + kimga + to + fe'l**." },
    { k: "order", uz: "U menga qayerda yashashimni so'radi.", words: ["He", "asked", "me", "where", "I", "lived."], extra: ["do", "live"], why: "Ko'chirma savolda do/did tushadi." },
    { k: "translate", uz: "Oxir-oqibat, hamma omon qoldi.", a: ["In the end, everyone survived.", "In the end everyone survived.", "Eventually, everyone survived.", "In the end, everybody survived.", "Eventually everyone survived.", "In the end everybody survived."], why: "**In the end** — natija." },
  ],
  summary: [
    "**Past Perfect** (*had + V3*) boshqa o'tgan voqeadan oldingi ishni bildiradi; asosiy voqealar Past Simple, fon Past Continuous.",
    "**Reported statements**: zamon bir pog'ona orqaga (*am → was, will → would, can → could, went → had gone*); **say** + ob'ektsiz, **tell** + kimga.",
    "**Reported questions**: darak tartib, do/did tushadi, savol belgisi yo'q; yes/no savolda **if / whether**. Iltimos: **ask / tell + kimga + (not) to + fe'l**.",
    "Hikoya bog'lovchilari: *at first, suddenly, meanwhile, as soon as, in the end*. Yangilik tili: *headline, source, reliable, rumour, according to.*",
    "Yozishdan keyin tekshiring: zamonlar, nutq tinish belgilari va bog'lovchilar.",
  ],
  homework: "Yaqinda eshitgan yangiligingizni yoki do'stingizning hikoyasini yozing (8 gap). Unda kamida bitta Past Perfect gapi, bitta ko'chirma darak gap (*He told me that…*), bitta ko'chirma savol (*She asked me if…*) va ikkita bog'lovchi bo'lsin.",
};

export default lesson;
