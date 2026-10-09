import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u12-l3",
  title: "Past Continuous",
  titleUz: "Past Continuous: was / were + -ing",
  goal: "**Past Continuous** (*was / were + V-ing*) ni tuzasiz va ishlatasiz: o'tmishdagi aniq paytda **davom etayotgan** ish-harakatni (*At eight I was cooking*) aytasiz, **-ing** imlosini bilasiz va Past Simple bilan farqini tushunasiz.",
  slides: [
    {
      title: "Shakl: was / were + V-ing",
      blocks: [
        { t: "p", md: "**Past Continuous** o'tmishdagi biror paytda **davom etayotgan** (jarayondagi) ish-harakatni bildiradi. Shakli oson: **was / were + fe'l + -ing**. Bu Present Continuous (*am / is / are + -ing*) ning o'tgan zamondagi \"oyna nusxasi\"." },
        {
          t: "table", head: ["", "Shakl", "Misol"], speak: [2],
          rows: [
            ["+", "I / he / she / it **was** + V-ing", "She was reading a book."],
            ["+", "you / we / they **were** + V-ing", "They were playing football."],
            ["−", "wasn't / weren't + V-ing", "I wasn't sleeping. We weren't working."],
            ["?", "Was / Were + ega + V-ing?", "Was he watching TV? Were you waiting?"],
            ["Javob", "Yes, I was. / No, they weren't.", "Were you studying? — Yes, I was."],
            ["Wh-", "So'roq so'z + was / were + ega + V-ing?", "What were you doing at nine?"],
          ],
        },
        { t: "tip", tone: "info", md: "O'zbekchada \"-ayotgan edi / -yapti edi\" ga to'g'ri keladi: *Men ovqat pishirayotgan edim* = *I was cooking.*" },
        { t: "check", ex: { k: "fill", q: "At seven o'clock yesterday I ___ dinner. (cook)", a: ["was cooking"], why: "I + **was** + cooking." } },
      ],
    },
    {
      title: "Qachon ishlatiladi?",
      blocks: [
        { t: "p", md: "Past Continuous da asosiy g'oya: **o'sha paytda ish davom etayotgan edi** — hali boshlangan, lekin tugamagan. Odatda aniq vaqt beriladi:" },
        {
          t: "examples", items: [
            { en: "At 8 p.m. last night, I was watching a film.", uz: "Kecha kechqurun soat sakkizda film ko'rayotgan edim.", note: "Aniq paytdagi jarayon." },
            { en: "What were you doing at 10 o'clock?", uz: "Soat o'nda nima qilayotgan eding?" },
            { en: "It was raining and the wind was blowing.", uz: "Yomg'ir yog'ayotgan, shamol esayotgan edi.", note: "Hikoyada fon, manzara." },
            { en: "Dilnoza was talking on the phone all evening.", uz: "Dilnoza kechqurun bo'yi telefonda gaplashib o'tirdi.", note: "Uzoq davom etgan jarayon." },
          ],
        },
        {
          t: "examples", items: [
            { en: "At 9 I was reading a book.", uz: "Soat to'qqizda kitob o'qiyotgan edim.", note: "Past Continuous — o'sha paytda o'qish jarayonda edi." },
            { en: "I read a book last night.", uz: "Kecha kitob o'qidim.", note: "Past Simple — tugagan ish, butun kitob o'qib bo'lingan." },
          ],
        },
        { t: "tip", tone: "good", md: "Savol bering: \"O'sha paytda bu ish **jarayonda** edimi?\" Ha → **Past Continuous**. Ish shunchaki **bo'lib o'tgan va tugagan** bo'lsa → **Past Simple**." },
        { t: "check", ex: { k: "choice", q: "\"Kecha soat 6 da men sport zalida mashq qilayotgan edim.\"", opts: ["I trained in the gym at 6 yesterday.", "I was training in the gym at 6 yesterday.", "I am training in the gym at 6 yesterday.", "I were training in the gym at 6 yesterday."], a: 1, why: "Aniq paytdagi jarayon → **was training**." } },
      ],
    },
    {
      title: "-ing imlosi",
      blocks: [
        { t: "p", md: "-ing qo'shilganda fe'l ba'zan o'zgaradi (Present Continuous dagi qoidalar bilan bir xil):" },
        {
          t: "table", head: ["Qoida", "Fe'l", "V-ing"], speak: [2],
          rows: [
            ["Ko'pchilik: **+ing**", "work, read, play", "working, reading, playing"],
            ["Oxirgi **-e** tushadi", "make, write, take", "making, writing, taking"],
            ["1 unli + 1 undosh (bir bo'g'in): undosh **ikkilanadi**", "run, sit, swim, stop", "running, sitting, swimming, stopping"],
            ["**-ie** → **-ying**", "lie, die", "lying, dying"],
            ["**-y** o'zgarmaydi", "study, try, carry", "studying, trying, carrying"],
          ],
        },
        { t: "check", ex: { k: "choice", q: "**run** fe'lining -ing shakli:", opts: ["runing", "running", "runming", "runnning"], a: 1, why: "Bir bo'g'inli, 1 unli + 1 undosh → undosh ikkilanadi: **running**." } },
        { t: "check", ex: { k: "fill", q: "They were ___ in the park when it started to rain. (sit)", a: ["sitting"], why: "**sit → sitting**." } },
      ],
    },
    {
      title: "Holat fe'llari va odatiy xatolar",
      blocks: [
        { t: "p", md: "Present Continuous kabi, **holat fe'llari** (*know, like, love, want, need, understand, believe*) odatda Continuous da ishlatilmaydi. Ularda Past Simple ishlatamiz:" },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I knew the answer.", "She wanted a coffee.", "We were waiting for the bus.", "He wasn't listening to me."] },
          bad: { title: "Xato", items: ["I was knowing the answer.", "She was wanting a coffee.", "We waiting for the bus.", "He didn't listening to me."] },
        },
        { t: "tip", tone: "warn", md: "Uzbek o'quvchilar ko'pincha **was / were** ni tushirib qoldiradi: *We waiting…* (❌). Past Continuous da **was / were doim kerak**. Inkor va savolda **did ishlatilmaydi**: *He **wasn't** listening* (✅), *He didn't listening* (❌); *Was he listening?* (✅)." },
        { t: "check", ex: { k: "choice", q: "Qaysi gap **to'g'ri**?", opts: ["She was wanting a new phone.", "She wanted a new phone.", "She was want a new phone.", "She were wanting a new phone."], a: 1, why: "**want** — holat fe'li: Past Simple *wanted*." } },
        { t: "check", ex: { k: "fill", q: "A: What ___ you doing at nine? B: I was sleeping.", a: ["were"], why: "*you* + **were** + doing." } },
      ],
    },
    {
      title: "O'qing: Kechasi bilan",
      blocks: [
        {
          t: "text", title: "A noisy night",
          en: "Last night I couldn't sleep. At ten o'clock my neighbours were having a party. Some people were singing, and others were dancing. At midnight a baby was crying in the flat above me. At one o'clock it was raining hard and the wind was blowing, so the windows were shaking. At two I was still lying in bed and looking at the ceiling. Finally, at three, everything was quiet. I was falling asleep when my alarm clock rang. It was six o'clock! What a night!",
          uz: "Kecha tunda uxlay olmadim. Soat o'nda qo'shnilarimda ziyofat bo'layotgan edi. Ba'zilar qo'shiq aytar, boshqalar raqsga tushar edi. Yarim kechada tepamdagi kvartirada chaqaloq yig'lardi. Soat birda kuchli yomg'ir yog'ar, shamol esar, shuning uchun derazalar titrardi. Soat ikkida men hali ham yotoqda yotib, shiftga qarab turardim. Nihoyat soat uchda hammasi jim bo'ldi. Men endi uxlab qolayotganimda budilnik jiringladi. Soat olti edi! Qanday tun bo'ldi!",
        },
        { t: "check", ex: { k: "tf", q: "At one o'clock the weather was nice.", a: false, why: "*It **was raining** hard and the wind **was blowing*** — yomg'ir va shamol." } },
        { t: "check", ex: { k: "choice", q: "What were the neighbours doing at ten o'clock?", opts: ["Sleeping.", "Having a party.", "Watching TV.", "Cooking."], a: 1, why: "*My neighbours **were having** a party.*" } },
      ],
    },
    {
      title: "Dialog: Qayerda eding?",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Kamol", en: "What were you doing at six o'clock yesterday? I knocked on your door.", uz: "Kecha soat oltida nima qilayotgan eding? Eshigingni qoqdim." },
            { who: "Dilnoza", en: "Oh, I was taking a shower. And my brother was listening to loud music, so we didn't hear you.", uz: "Voy, dush qabul qilayotgan edim. Akam baland ovozda musiqa eshitayotgan edi, shuning uchun eshitmadik." },
            { who: "Kamol", en: "I see. I was walking past your house with Aziz.", uz: "Tushunarli. Aziz bilan uyingdan o'tib ketayotgan edim." },
            { who: "Dilnoza", en: "Were you going to the stadium?", uz: "Stadionga ketayotgan edingizmi?" },
            { who: "Kamol", en: "Yes, we were. There was a match at seven.", uz: "Ha. Soat yettida o'yin bor edi." },
            { who: "Dilnoza", en: "Was it good?", uz: "Zo'r bo'ldimi?" },
            { who: "Kamol", en: "Yes! The weather was perfect and everybody was cheering.", uz: "Ha! Ob-havo a'lo edi va hamma qo'llab-quvvatlayotgan edi." },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Dilnoza was taking a shower at six o'clock.", a: true, why: "*I was taking a shower.*" } },
      ],
    },
  ],
  words: [
    { en: "crowded", uz: "gavjum, odam ko'p", ipa: "ˈkraʊdɪd", pos: "adjective", ex: "The metro was crowded this morning.", exUz: "Bugun ertalab metro gavjum edi." },
    { en: "queue", uz: "navbat", ipa: "kjuː", pos: "noun / verb", ex: "People were queuing for tickets.", exUz: "Odamlar chipta uchun navbatda turishardi." },
    { en: "wait for", uz: "kutmoq", ipa: "weɪt fɔː", pos: "phrasal verb", ex: "I was waiting for the bus.", exUz: "Avtobusni kutayotgan edim." },
    { en: "chat", uz: "suhbatlashmoq, gaplashmoq", ipa: "tʃæt", pos: "verb", ex: "They were chatting in the café.", exUz: "Ular kafeda suhbatlashib o'tirishgan edi." },
    { en: "cross", uz: "kesib o'tmoq", ipa: "krɒs", pos: "verb", ex: "She was crossing the road.", exUz: "U yo'lni kesib o'tayotgan edi." },
    { en: "noise", uz: "shovqin", ipa: "nɔɪz", pos: "noun", ex: "I heard a strange noise.", exUz: "G'alati shovqin eshitdim." },
    { en: "pour", uz: "quymoq; (yomg'ir) sharros quymoq", ipa: "pɔː", pos: "verb", ex: "It was pouring with rain.", exUz: "Yomg'ir sharros quyayotgan edi." },
    { en: "asleep", uz: "uxlab yotgan", ipa: "əˈsliːp", pos: "adjective", ex: "The children were fast asleep.", exUz: "Bolalar qattiq uxlab yotgan edi." },
    { en: "at that moment", uz: "o'sha paytda, shu zahoti", ipa: "æt ðæt ˈməʊmənt", pos: "phrase", ex: "At that moment the phone rang.", exUz: "O'sha paytda telefon jiringladi." },
    { en: "all evening", uz: "kechqurun bo'yi", ipa: "ɔːl ˈiːvnɪŋ", pos: "phrase", ex: "He was studying all evening.", exUz: "U kechqurun bo'yi o'qidi." },
  ],
  practice: [
    { k: "match", pairs: [["run", "running"], ["make", "making"], ["sit", "sitting"], ["lie", "lying"], ["study", "studying"]] },
    { k: "match", pairs: [["crowded", "gavjum"], ["queue", "navbat"], ["noise", "shovqin"], ["asleep", "uxlab yotgan"], ["cross", "kesib o'tmoq"]] },
    { k: "listen", say: "They were playing football.", opts: ["They played football.", "They were playing football.", "They are playing football."], a: 1 },
    { k: "listen", say: "What were you doing at nine?", opts: ["What did you do at nine?", "What are you doing at nine?", "What were you doing at nine?"], a: 2 },
    { k: "fill", q: "At eight last night we ___ TV. (watch)", a: ["were watching"], why: "*we* + **were** + watching." },
    { k: "fill", q: "She ___ listening to me. She was looking at her phone. (inkor)", a: ["wasn't", "was not"], why: "Inkor: **wasn't** + listening." },
    { k: "fill", q: "___ it raining when you left home?", a: ["Was"], uz: "Uydan chiqqaningda yomg'ir yog'ayotgan edimi?", why: "*it* + **Was** + raining?" },
    { k: "fill", q: "The children were ___ in the garden. (play)", a: ["playing"], why: "**play → playing**." },
    { k: "choice", q: "At 7 a.m. Aziz ___ breakfast.", opts: ["was have", "was having", "were having", "is having"], a: 1, why: "*Aziz* + **was** + having." },
    { k: "choice", q: "Qaysi gap **xato**?", opts: ["I was reading all evening.", "We were waiting for you.", "He was knowing the answer.", "Was she sleeping?"], a: 2, why: "**know** — holat fe'li: *He **knew** the answer.*" },
    { k: "tf", q: "**They waiting for the bus.** — to'g'ri gap.", a: false, why: "**were** kerak: *They **were waiting** for the bus.*" },
    { k: "tf", q: "**What were you doing at nine?** — Soat to'qqizda nima qilayotgan edingiz?", a: true },
    { k: "order", uz: "Soat oltida men sport zalida mashq qilayotgan edim.", words: ["At", "six", "I", "was", "training", "in", "the", "gym."], extra: ["were", "train"], alt: [["I", "was", "training", "in", "the", "gym", "at", "six."]] },
    { k: "translate", uz: "Ular kafeda suhbatlashib o'tirishgan edi.", a: ["They were chatting in the cafe.", "They were chatting in a cafe.", "They were talking in the cafe.", "They were talking in a cafe.", "They were chatting in the café.", "They were chatting in a café."] },
    { k: "speak", say: "At nine o'clock last night I was cooking dinner.", uz: "Kecha soat to'qqizda kechki ovqat pishirayotgan edim." },
  ],
  quiz: [
    { k: "choice", q: "At that moment she ___ on the phone.", opts: ["talks", "was talking", "were talking", "talk"], a: 1, why: "*she* + **was** + talking." },
    { k: "choice", q: "**Were you sleeping at midnight?** — **Yes, ___.**", opts: ["I did", "I was", "I were", "I slept"], a: 1, why: "Savol **Were you…?** → *Yes, I was.*" },
    { k: "choice", q: "**swim** fe'lining -ing shakli:", opts: ["swiming", "swimming", "swimeing", "swimmming"], a: 1, why: "Undosh ikkilanadi: **swimming**." },
    { k: "choice", q: "Qaysi gap **to'g'ri**?", opts: ["They didn't listening.", "They weren't listening.", "They not were listening.", "They wasn't listening."], a: 1, why: "**weren't + listening**." },
    { k: "fill", q: "It ___ raining at six, so I took an umbrella. (be)", a: ["was"], why: "*it* → **was** raining." },
    { k: "fill", q: "What ___ they doing at the stadium?", a: ["were"], why: "*they* → **were**." },
    { k: "listen", say: "We were having lunch at one.", opts: ["We had lunch at one.", "We were having lunch at one.", "We are having lunch at one."], a: 1 },
    { k: "tf", q: "**I was liking the film.** — to'g'ri gap.", a: false, why: "**like** — holat fe'li: *I **liked** the film.*" },
    { k: "order", uz: "Sen nima qilayotgan eding?", words: ["What", "were", "you", "doing?"], extra: ["did", "was"] },
    { k: "translate", uz: "U televizor ko'rayotgan edi.", a: ["He was watching TV.", "She was watching TV.", "He was watching television.", "She was watching television.", "He was watching the TV.", "She was watching the TV."] },
  ],
  summary: [
    "**Past Continuous** = **was / were + V-ing**: o'tmishdagi aniq paytda davom etayotgan ish (*At nine I was cooking*).",
    "Inkor: **wasn't / weren't + V-ing**; savol: **Was / Were + ega + V-ing?** — *did* ishlatilmaydi.",
    "**-ing** imlosi: *make → making, run → running, lie → lying, study → studying*.",
    "Jarayon (**was cooking**) va tugagan ish (**cooked**) ni farqlang. Holat fe'llari (*know, like, want*) Continuous da ishlatilmaydi.",
  ],
  homework: "Kecha kuningiz haqida 8 ta gap yozing: soat bo'yicha *At seven I was… At nine my brother was… At ten we were…* Keyin oila a'zolaringizdan biriga \"What were you doing at … ?\" deb 3 ta savol bering va javoblarini inglizcha yozing.",
};

export default lesson;
