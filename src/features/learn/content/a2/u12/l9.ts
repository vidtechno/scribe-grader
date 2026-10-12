import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u12-l9",
  title: "What happened? Telling a story to a friend",
  titleUz: "Nima bo'ldi? Do'stga hikoya aytib berish",
  mini: true,
  kind: 'situation',
  goal: "Do'stingizga kecha yoki o'tgan hafta bo'lgan voqeani qiziqarli aytib berasiz: **Guess what happened!** bilan boshlaysiz, **Past Continuous** (fon) va **Past Simple** (voqea) ni **when / while** bilan bog'laysiz, **so, because, but, then, finally** dan foydalanasiz va do'stingizning hikoyasiga **No way! What happened next?** deb javob berasiz.",
  slides: [
    {
      title: "Hikoyani boshlash",
      blocks: [
        { t: "p", md: "Do'stingizga gap boshlashdan oldin, uning e'tiborini torting. So'ng **fonni** (*was / were + -ing*) va **voqeani** (*Past Simple*) ayting." },
        {
          t: "examples", items: [
            { en: "Guess what happened to me yesterday!", uz: "Kecha menga nima bo'lganini bilasanmi!", note: "Hikoyani boshlash iborasi." },
            { en: "I was waiting for a bus when I saw my old teacher.", uz: "Avtobus kutib turganimda, eski ustozimni ko'rdim.", note: "Fon + voqea: *was waiting* + *saw*." },
            { en: "While we were having lunch, the lights went out.", uz: "Tushlik qilayotganimizda chiroq o'chdi.", note: "**While** + uzun ish." },
            { en: "I was tired, so I went to bed early.", uz: "Charchagan edim, shuning uchun erta yotdim.", note: "**so** — natija." },
          ],
        },
        { t: "check", ex: { k: "fill", q: "I ___ home when I met Laylo. (walk)", a: ["was walking"], why: "Uzun ish (fon) → **was walking**." } },
      ],
    },
    {
      title: "Bog'lovchi so'zlar",
      blocks: [
        { t: "p", md: "Hikoya silliq chiqishi uchun gaplarni bog'lang:" },
        {
          t: "table", head: ["So'z", "Vazifasi", "Misol"], speak: [2],
          rows: [
            ["**when / while**", "bir vaqtda bo'lgan ishlar", "I was cooking when the phone rang."],
            ["**because**", "sabab", "I felt embarrassed because everybody was looking at me."],
            ["**so**", "natija", "The lift stopped, so I called the manager."],
            ["**but**", "qarama-qarshilik", "I wanted to help, but I didn't know what to do."],
            ["**then / finally**", "tartib", "Then we waited. Finally, the door opened."],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I was walking home when it started to rain.", "I got stuck, so I was late.", "While I was waiting, I was reading."] },
          bad: { title: "Xato", items: ["I walked home when it started to rain. (fon uchun *was walking* kerak)", "I got stuck, because I was late.", "While I was wait, I was reading."] },
        },
        { t: "check", ex: { k: "choice", q: "I lost my phone, ___ I couldn't call you.", opts: ["so", "because", "but", "while"], a: 0, why: "Telefonni yo'qotdim → natija: qo'ng'iroq qila olmadim → **so**." } },
      ],
    },
    {
      title: "Dialog: Kechagi voqea",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Dilnoza", en: "Guess what happened to me yesterday!", uz: "Kecha menga nima bo'lganini bilasanmi!" },
            { who: "Sardor", en: "What happened?", uz: "Nima bo'ldi?" },
            { who: "Dilnoza", en: "I was going up to my office in the lift when it suddenly stopped. I got stuck for twenty minutes!", uz: "Ofisimga liftda chiqayotgan edim, u birdan to'xtab qoldi. Yigirma daqiqa qotib qoldim!" },
            { who: "Sardor", en: "No way! Were you alone?", uz: "Yo'q-e! Yolg'iz edingmi?" },
            { who: "Dilnoza", en: "No. A man was talking on the phone when the lift stopped, and he started to scream.", uz: "Yo'q. Lift to'xtaganda bir erkak telefonda gaplashayotgan edi, u baqira boshladi." },
            { who: "Sardor", en: "That's unbelievable! What did you do?", uz: "Ishonib bo'lmaydi! Sen nima qilding?" },
            { who: "Dilnoza", en: "I called the manager and we waited. Finally, they opened the door. I felt embarrassed because everybody was waiting outside.", uz: "Menejerga qo'ng'iroq qildim va kutdik. Nihoyat, eshikni ochishdi. O'zimni noqulay his qildim, chunki hamma tashqarida kutib turgan edi." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "What was the man doing when the lift stopped?", opts: ["He was talking on the phone.", "He was reading a book.", "He was calling the manager.", "He was sleeping."], a: 0, why: "*A man was talking on the phone when the lift stopped.*" } },
        { t: "check", ex: { k: "tf", q: "Dilnoza was alone in the lift.", a: false, why: "Yo'q, liftda yana bir erkak bor edi." } },
      ],
    },
    {
      title: "Do'stning hikoyasiga javob",
      blocks: [
        { t: "p", md: "Yaxshi tinglovchi qiziqish bildiradi. Quyidagi iboralar hikoya aytilayotganda juda foydali:" },
        {
          t: "examples", items: [
            { en: "Really? What happened next?", uz: "Rostdanmi? Keyin nima bo'ldi?" },
            { en: "No way! That's unbelievable!", uz: "Yo'q-e! Ishonib bo'lmaydi!" },
            { en: "Poor you! What did you do?", uz: "Voy bechora! Nima qilding?" },
            { en: "Were you scared?", uz: "Qo'rqdingmi?", note: "Savol: *were you + sifat?*" },
          ],
        },
        { t: "tip", tone: "info", md: "Do'stingiz hikoya qilganda *Did you…?* yoki *Were you…?* deb savol bering. Hikoyani aytuvchi **o'tgan zamonda** gapiradi, tinglovchi ham shunday." },
        { t: "check", ex: { k: "choice", q: "Your friend says: *I got stuck in the lift for an hour!* The best reply is:", opts: ["No way! What did you do?", "I will go to the lift.", "I stuck in the lift.", "Yes, I do."], a: 0, why: "Hayron qolish va savol berish — tabiiy javob." } },
      ],
    },
  ],
  words: [
    { en: "embarrassed", uz: "xijolat bo'lgan, noqulay", ipa: "ɪmˈbærəst", pos: "adj", ex: "I felt embarrassed because I forgot his name.", exUz: "Ismini unutganim uchun o'zimni noqulay his qildim." },
    { en: "unbelievable", uz: "ishonib bo'lmaydigan", ipa: "ˌʌnbɪˈliːvəbl", pos: "adj", ex: "It was an unbelievable story.", exUz: "Bu ishonib bo'lmaydigan hikoya edi." },
    { en: "get stuck – got stuck", uz: "tiqilib qolmoq, qotib qolmoq", ipa: "get stʌk – gɒt stʌk", pos: "phrase", ex: "We got stuck in the lift.", exUz: "Biz liftda qotib qoldik." },
    { en: "lift", uz: "lift", ipa: "lɪft", pos: "noun", ex: "The lift was full of people.", exUz: "Lift odamlarga to'la edi." },
    { en: "scream", uz: "chinqirmoq, qichqirmoq", ipa: "skriːm", pos: "verb", ex: "She screamed when she saw a mouse.", exUz: "U sichqonni ko'rib chinqirdi." },
    { en: "No way!", uz: "Yo'q-e! Mumkin emas!", ipa: "nəʊ weɪ", pos: "phrase", ex: "No way! You met the president?", exUz: "Yo'q-e! Prezident bilan uchrashdingmi?" },
  ],
  practice: [
    { k: "match", pairs: [["embarrassed", "xijolat bo'lgan"], ["unbelievable", "ishonib bo'lmaydigan"], ["scream", "chinqirmoq"], ["lift", "lift"], ["No way!", "Yo'q-e!"]] },
    { k: "listen", say: "Guess what happened to me yesterday!", opts: ["Guess what happened to me yesterday!", "Guess what is happening to me today!", "Guess what I will do tomorrow!"], a: 0 },
    { k: "fill", q: "I was waiting for the bus when it ___ to rain. (start)", a: ["started"], why: "Qisqa voqea → **started**." },
    { k: "fill", q: "___ we were having dinner, the lights went out.", a: ["While", "when"], hint: "Uzun ish oldidan", why: "*While we were having dinner…* (*When we were having dinner…* ham to'g'ri)." },
    { k: "choice", q: "I felt embarrassed ___ everybody was looking at me.", opts: ["because", "so", "but", "then"], a: 0, why: "Sabab → **because**." },
    { k: "choice", q: "My phone was dead, ___ I couldn't call you.", opts: ["so", "because", "although", "while"], a: 0, why: "Natija → **so**." },
    { k: "choice", q: "Qaysi gap **to'g'ri**?", opts: ["I walk in the park when I saw a snake.", "I was walking in the park when I saw a snake.", "I was walking in the park when I was seeing a snake.", "I walking in the park when I saw a snake."], a: 1, why: "Fon — *was walking*, voqea — *saw*." },
    { k: "tf", q: "**While I was running, I met a friend.** — to'g'ri gap.", a: true },
    { k: "fix", wrong: "I got stuck in the lift, because I was late for work.", a: ["I got stuck in the lift, so I was late for work.", "I was late for work because I got stuck in the lift."], hint: "sabab yoki natija?", why: "Liftda qotib qolish — sabab, kechikish — natija: **so**." },
    { k: "fix", wrong: "We were having lunch when the lights were going out.", a: ["We were having lunch when the lights went out."], why: "Qisqa voqea → Past Simple: *went out*." },
    { k: "order", uz: "Menga kecha nima bo'lganini bilasanmi!", words: ["Guess", "what", "happened", "to", "me", "yesterday!"], extra: ["happen", "was"] },
    { k: "translate", uz: "Men uyga ketayotganimda, yomg'ir yog'a boshladi.", a: ["I was walking home when it started to rain.", "I was going home when it started to rain.", "While I was walking home, it started to rain.", "While I was going home, it started to rain.", "When I was walking home, it started to rain.", "When I was going home, it started to rain.", "It started to rain while I was walking home.", "It started to rain while I was going home."] },
    { k: "speak", say: "No way! What happened next?", uz: "Yo'q-e! Keyin nima bo'ldi?" },
  ],
  quiz: [
    { k: "choice", q: "Your friend: *I met Mr Karimov in the bazaar!* Best reply:", opts: ["Really? What happened next?", "I am meeting him.", "Yes, I will.", "Where you went?"], a: 0, why: "Qiziqish bildirish va savol berish." },
    { k: "choice", q: "She ___ on the phone when I came in.", opts: ["talked", "was talking", "were talking", "talks"], a: 1, why: "*She* + **was talking**." },
    { k: "choice", q: "He was tired, ___ he went to bed early.", opts: ["so", "because", "while", "but"], a: 0, why: "Natija → **so**." },
    { k: "fill", q: "While I ___ the dishes, my brother was watching TV. (wash)", a: ["was washing"], why: "Parallel ish → **was washing**." },
    { k: "fill", q: "The lift suddenly ___ and we got stuck. (stop)", a: ["stopped"], why: "Regular fe'l: stop → **stopped**." },
    { k: "tf", q: "**Guess what happened!** iborasi hikoyani boshlash uchun ishlatiladi.", a: true },
    { k: "order", uz: "Tushlik qilayotganimizda chiroq o'chdi.", words: ["The", "lights", "went", "out", "while", "we", "were", "having", "lunch."], extra: ["had", "was"], alt: [["While", "we", "were", "having", "lunch,", "the", "lights", "went", "out."]] },
    { k: "translate", uz: "Men xijolat bo'ldim, chunki hamma menga qarayotgan edi.", a: ["I felt embarrassed because everybody was looking at me.", "I was embarrassed because everybody was looking at me.", "I felt embarrassed because everyone was looking at me.", "I was embarrassed because everyone was looking at me."] },
  ],
  summary: [
    "Hikoyani **Guess what happened…!** bilan boshlang.",
    "Fon — **Past Continuous** (*was waiting*), voqea — **Past Simple** (*saw, rang*). Ularni **when / while** bog'laydi.",
    "**because** — sabab, **so** — natija, **but** — qarama-qarshilik, **then / finally** — tartib.",
    "Tinglovchi sifatida: **Really? No way! What happened next?**",
  ],
  homework: "Kecha yoki o'tgan hafta bo'lgan bir voqeani 5 ta gapda yozing: bitta **Guess what…** gap, bitta **when/while** gap, bitta **so** va bitta **because** gap, oxirida **Finally…** Keyin uni do'stingizga ovoz chiqarib aytib bering.",
};

export default lesson;
