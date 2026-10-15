import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u19-l6",
  title: "Linking a story: suddenly, meanwhile, in the end",
  titleUz: "Hikoyada bog'lovchilar: suddenly, meanwhile, eventually, in the end",
  goal: "Hikoyani bog'lovchi so'zlar bilan **tartibli va qiziqarli** aytasiz: **at first, then, suddenly, meanwhile, as soon as, eventually, in the end** va **in the end / at the end** farqini bilasiz.",
  slides: [
    {
      title: "Nega bog'lovchilar kerak?",
      blocks: [
        { t: "p", md: "Hikoya aytganda faqat gaplarni ketma-ket qo'yish yetarli emas. Voqealar **qanday tartibda** bo'lganini, qaysi biri **to'satdan**, qaysi biri **bir vaqtda** bo'lganini ko'rsatadigan so'zlar kerak. Ikki variantni solishtiring:" },
        {
          t: "compare",
          good: { title: "Bog'lovchi bilan", items: ["At first, I didn't see anything. Then I heard a noise.", "Suddenly, the lights went out.", "In the end, we walked home."] },
          bad: { title: "Bog'lovchisiz", items: ["I didn't see anything. I heard a noise.", "The lights went out.", "We walked home."] },
        },
        { t: "tip", tone: "info", md: "Bog'lovchi so'z o'quvchiga yo'l ko'rsatadi: **hozir nima bo'ldi, keyin nima bo'ladi**. Ular odatda gap boshida turadi va ortidan **vergul** qo'yiladi: *Suddenly, …*" },
        { t: "check", ex: { k: "choice", q: "Qaysi gap to'g'ri yozilgan?", opts: ["Suddenly, the door opened.", "Suddenly the door, opened.", "Suddenly. the door opened.", "Suddenly; the door opened."], a: 0, why: "Gap boshidagi bog'lovchidan keyin **vergul**: *Suddenly, the door opened.*" } },
      ],
    },
    {
      title: "Tartib: at first, then, finally",
      blocks: [
        { t: "p", md: "Voqealarni vaqt tartibida aytish uchun quyidagi so'zlar bor. Ularning hammasi bilan **Past Simple** (yoki kerak bo'lsa Past Continuous) ishlatiladi:" },
        {
          t: "table", head: ["Qachon", "So'z", "Misol"], speak: [2],
          rows: [
            ["Boshida", "at first", "At first, I felt nervous."],
            ["Keyin", "then, after that, next", "Then I opened the door."],
            ["Biroz keyin", "later, afterwards", "Afterwards, we had a coffee."],
            ["Oxiri", "finally, in the end", "Finally, the bus arrived."],
            ["Uzoq kutgandan keyin", "eventually", "Eventually, he found the right street."],
          ],
        },
        { t: "tip", tone: "warn", md: "**After** va **after that** bir xil emas. *After* keyin ega va fe'l (yoki ot) keladi: *After the film, we went home.* *After that* esa yangi gapni boshlaydi: *We watched the film. After that, we went home.* O'zbekcha «keyin» ni har doim *after* deb tarjima qilmang." },
        { t: "check", ex: { k: "fill", q: "We watched the film. ___ that, we went for a walk.", a: ["After"], why: "Yangi gapni boshlaydigan «keyin» → **After that**." } },
        { t: "check", ex: { k: "choice", q: "\"At first\" odatda nimaga bog'lanadi?", opts: ["Keyingi o'zgarishga: At first… but later…", "Hikoyaning oxiriga", "Savol berishga", "Hech narsaga"], a: 0, why: "**At first** boshlang'ich holatni aytadi; keyin odatda o'zgarish keladi: *At first I was afraid, but then…*" } },
      ],
    },
    {
      title: "To'satdan va bir vaqtda",
      blocks: [
        { t: "p", md: "Hikoyada ko'pincha bir ish davom etayotganda **to'satdan** boshqasi yuz beradi. Fon uchun **Past Continuous**, to'satdan bo'lgan voqea uchun **Past Simple** ishlatamiz:" },
        {
          t: "examples", items: [
            { en: "I was walking home when suddenly it started to rain.", uz: "Uyga piyoda ketayotgan edim, to'satdan yomg'ir yog'a boshladi.", note: "Fon: Past Continuous. Voqea: Past Simple." },
            { en: "We were talking. Just then, the phone rang.", uz: "Biz gaplashib turgan edik. Aynan shu payt telefon jiringladi." },
            { en: "All of a sudden, everyone stopped talking.", uz: "To'satdan hamma gapirishni to'xtatdi.", note: "**All of a sudden** = suddenly." },
            { en: "Tom cooked dinner. Meanwhile, Lily put the children to bed.", uz: "Tom kechki ovqat tayyorladi. Shu orada Lili bolalarni uxlatdi.", note: "**Meanwhile** = shu orada, bir vaqtning o'zida." },
            { en: "While I was waiting, I read the news.", uz: "Kutayotgan paytimda yangiliklarni o'qidim." },
          ],
        },
        { t: "tip", tone: "warn", md: "**Meanwhile** — bog'lovchi emas, yangi gapni boshlaydi: *I cooked. Meanwhile, he cleaned.* Bitta gap ichida ikki ishni bog'lash uchun **while** ishlating: *I cooked while he cleaned.*" },
        { t: "check", ex: { k: "choice", q: "She was reading a book. ___, her brother was cooking in the kitchen.", opts: ["Meanwhile", "Finally", "At first", "In the end"], a: 0, why: "Ikki ish bir vaqtda → **Meanwhile**." } },
        { t: "check", ex: { k: "fill", q: "I was crossing the road when suddenly a bike ___ round the corner. (come)", a: ["came"], why: "To'satdan voqea — Past Simple: **came**." } },
      ],
    },
    {
      title: "In the end, eventually, at the end",
      blocks: [
        { t: "p", md: "Bu uch ibora o'zbek tiliga bir xil tarjima qilinadi («oxirida»), lekin inglizchada ishlatilishi boshqa:" },
        {
          t: "table", head: ["Ibora", "Ma'nosi", "Misol"], speak: [2],
          rows: [
            ["in the end", "oxir-oqibat, hammasidan keyin (natija)", "In the end, we decided to stay at home."],
            ["eventually", "uzoq vaqt yoki qiyinchilikdan keyin", "Eventually, the train arrived."],
            ["finally", "nihoyat; ro'yxatdagi oxirgi", "Finally, he passed his exam."],
            ["at the end of + ot", "biror narsaning oxirida", "At the end of the film, everybody clapped."],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["At the end of the film, everybody clapped.", "In the end, we took a taxi.", "Eventually, she learnt to drive."] },
          bad: { title: "Xato", items: ["In the end of the film, everybody clapped.", "In end, we took a taxi.", "At the end of, she learnt to drive."] },
        },
        { t: "tip", tone: "warn", md: "**Eventually** — «oxir-oqibat, vaqt o'tib». U **mumkin** degani emas! «Mumkin» inglizchada *maybe, possibly*. Bu o'zbek tilidagi mashhur adashuv." },
        { t: "check", ex: { k: "fill", q: "I waited for an hour, and ___ the bus came.", a: ["eventually", "finally", "in the end"], why: "Uzoq kutgandan keyin: **eventually / finally**." } },
        { t: "check", ex: { k: "fix", wrong: "In the end of the lesson, we played a game.", a: ["At the end of the lesson, we played a game."], hint: "Ot oldidan qaysi ibora?", why: "Ot bilan: **at the end of**. *In the end* ot talab qilmaydi." } },
      ],
    },
    {
      title: "Omad va tezlik: fortunately, as soon as",
      blocks: [
        { t: "p", md: "Hikoyaga his-tuyg'u va tezlik qo'shadigan yana bir necha so'z:" },
        {
          t: "table", head: ["So'z", "Ma'nosi", "Misol"], speak: [2],
          rows: [
            ["fortunately", "yaxshiyamki, omadga", "Fortunately, nobody was hurt."],
            ["unfortunately", "afsuski", "Unfortunately, the shop was closed."],
            ["as soon as", "...ishi bilanoq", "As soon as I arrived, it started to rain."],
            ["by the time", "...gacha, ...ga kelib", "By the time we got there, the film had started."],
          ],
        },
        { t: "tip", tone: "info", md: "**As soon as** bilan oddiy o'tgan hikoyada ikkala qismda ham **Past Simple** ishlatiladi: *As soon as she saw him, she smiled.* **By the time** bilan esa avvalgi darslarda o'rgangan **Past Perfect** ko'pincha kerak bo'ladi: *By the time we arrived, the shop had closed.*" },
        { t: "check", ex: { k: "choice", q: "___, the driver stopped in time and nobody was hurt.", opts: ["Fortunately", "Unfortunately", "Meanwhile", "At first"], a: 0, why: "Yaxshi natija → **Fortunately** (yaxshiyamki)." } },
        { t: "check", ex: { k: "fill", q: "___ soon as I got home, I made some tea.", a: ["As"], why: "**As soon as** — ...ishi bilanoq." } },
      ],
    },
    {
      title: "O'qing va tinglang",
      blocks: [
        {
          t: "text", title: "A lost phone",
          en: "At first, it was an ordinary Saturday. I was waiting for the bus when suddenly I noticed that my phone was not in my pocket. I looked in my bag, but it wasn't there. Meanwhile, my bus came and left. Unfortunately, I had no way to call anyone. Eventually, I remembered that I had put it on the table in the café. I ran back, and as soon as I opened the door, the waiter smiled and gave it to me. In the end, I was only twenty minutes late, and I learnt to check my pockets twice.",
          uz: "Avvaliga bu oddiy shanba edi. Men avtobus kutayotgan edim, to'satdan telefonim cho'ntagimda yo'qligini sezdim. Sumkamni qidirdim, lekin u yerda ham yo'q edi. Shu orada avtobusim kelib ketdi. Afsuski, hech kimga qo'ng'iroq qilish imkoni yo'q edi. Oxiri esa telefonni kafedagi stol ustiga qo'yganim esimga tushdi. Orqaga yugurdim va eshikni ochishim bilanoq ofitsiant jilmayib uni menga berdi. Oxir-oqibat atigi yigirma daqiqa kechikdim va cho'ntaklarni ikki marta tekshirishni o'rgandim.",
        },
        { t: "check", ex: { k: "tf", q: "The writer found the phone in the bag.", a: false, why: "Telefon sumkada emas, **kafedagi stol ustida** edi." } },
        {
          t: "dialog", lines: [
            { who: "Nilufar", en: "How was your trip to the mountains?", uz: "Tog'larga sayohating qanday o'tdi?" },
            { who: "Jack", en: "It was great. At first, the weather was awful, but then the sun came out.", uz: "Ajoyib. Avvaliga havo yomon edi, keyin quyosh chiqdi." },
            { who: "Nilufar", en: "Did anything strange happen?", uz: "G'alati hodisa bo'ldimi?" },
            { who: "Jack", en: "Yes! We were walking along a path when suddenly we saw a fox.", uz: "Ha! Yo'lakda ketayotgan edik, to'satdan tulkini ko'rdik." },
            { who: "Nilufar", en: "Wow! What did you do?", uz: "Voy! Nima qildingiz?" },
            { who: "Jack", en: "We stood still. Eventually, it ran away, and we continued our walk.", uz: "Qimirlamay turdik. Oxiri u qochib ketdi va biz yurishni davom ettirdik." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "What happened while they were walking?", opts: ["They saw a fox.", "They lost a phone.", "The weather got worse.", "They missed a bus."], a: 0, why: "Dialogda: *We were walking … when suddenly we saw a fox.*" } },
      ],
    },
  ],
  words: [
    { en: "suddenly", uz: "to'satdan", ipa: "ˈsʌd.ən.li", pos: "adv", ex: "Suddenly, the music stopped.", exUz: "To'satdan musiqa to'xtadi." },
    { en: "meanwhile", uz: "shu orada, bir vaqtda", ipa: "ˈmiːn.waɪl", pos: "adv", ex: "I made lunch. Meanwhile, my sister set the table.", exUz: "Men tushlik tayyorladim. Shu orada opam dasturxon yozdi." },
    { en: "eventually", uz: "oxir-oqibat, vaqt o'tib", ipa: "ɪˈven.tʃu.ə.li", pos: "adv", ex: "Eventually, we found a hotel.", exUz: "Oxiri biz mehmonxona topdik." },
    { en: "in the end", uz: "oxir-oqibat", ipa: "ɪn ði end", pos: "phrase", ex: "In the end, she chose the blue dress.", exUz: "Oxir-oqibat u ko'k ko'ylakni tanladi." },
    { en: "at first", uz: "avvaliga, boshida", ipa: "ət fɜːst", pos: "phrase", ex: "At first, I didn't like the city.", exUz: "Avvaliga shahar menga yoqmadi." },
    { en: "as soon as", uz: "...ishi bilanoq", ipa: "əz suːn əz", pos: "phrase", ex: "As soon as he sat down, the phone rang.", exUz: "U o'tirishi bilanoq telefon jiringladi." },
    { en: "fortunately", uz: "yaxshiyamki", ipa: "ˈfɔː.tʃən.ət.li", pos: "adv", ex: "Fortunately, I had an umbrella.", exUz: "Yaxshiyamki, soyabonim bor edi." },
    { en: "unfortunately", uz: "afsuski", ipa: "ʌnˈfɔː.tʃən.ət.li", pos: "adv", ex: "Unfortunately, the museum was closed.", exUz: "Afsuski, muzey yopiq edi." },
    { en: "afterwards", uz: "keyinroq, undan keyin", ipa: "ˈɑːf.tə.wədz", pos: "adv", ex: "We had dinner, and afterwards we watched a film.", exUz: "Kechki ovqatlandik, undan keyin film ko'rdik." },
    { en: "just then", uz: "aynan shu payt", ipa: "dʒʌst ðen", pos: "phrase", ex: "I was about to leave. Just then, my boss called.", exUz: "Ketmoqchi edim. Aynan shu payt boshlig'im qo'ng'iroq qildi." },
  ],
  practice: [
    { k: "match", pairs: [["suddenly", "to'satdan"], ["meanwhile", "shu orada"], ["eventually", "oxir-oqibat, vaqt o'tib"], ["fortunately", "yaxshiyamki"], ["unfortunately", "afsuski"], ["at first", "avvaliga"]] },
    { k: "choice", q: "It was a quiet evening. ___, we heard a loud bang.", opts: ["Suddenly", "Eventually", "Afterwards", "Fortunately"], a: 0, why: "To'satdan sodir bo'lgan voqea → **Suddenly**." },
    { k: "choice", q: "He cooked dinner. ___, she did the washing-up.", opts: ["Meanwhile", "At first", "In the end", "As soon as"], a: 0, why: "Ikki ish bir vaqtda → **Meanwhile**." },
    { k: "choice", q: "Which sentence is correct?", opts: ["At the end of the book, the hero returns home.", "In the end of the book, the hero returns home.", "At end of the book, the hero returns home.", "On the end of the book, the hero returns home."], a: 0, why: "Ot oldidan: **at the end of**." },
    { k: "listen", say: "As soon as I arrived, it started to rain.", opts: ["As soon as I arrived, it started to rain.", "As soon as I arrive, it starts to rain.", "At first I arrived, it started to rain.", "Just then I arrived, it started to rain."], a: 0, why: "**As soon as** + Past Simple." },
    { k: "fill", q: "I was sleeping when ___ the phone rang. (to'satdan)", a: ["suddenly"], why: "To'satdan → **suddenly**." },
    { k: "fill", q: "___, the weather was terrible, so we stayed in. (afsuski)", a: ["Unfortunately"], why: "Yomon natija → **Unfortunately**." },
    { k: "fill", q: "We waited for two hours, and ___ the doctor called us in.", a: ["eventually", "finally", "in the end"], why: "Uzoq kutishdan keyin: **eventually**." },
    { k: "fill", q: "We saw a film. ___ that, we had pizza.", a: ["After"], why: "Yangi gap boshida: **After that**." },
    { k: "order", uz: "Avvaliga men juda asabiylashdim.", words: ["At", "first,", "I", "felt", "very", "nervous."], extra: ["last", "feeling"], why: "**At first,** + gap." },
    { k: "order", uz: "U kirishi bilanoq hamma jim bo'ldi.", words: ["As", "soon", "as", "she", "came", "in,", "everybody", "went", "quiet."], extra: ["suddenly", "than"], why: "**As soon as** + Past Simple." },
    { k: "translate", uz: "Yaxshiyamki, hech kim jabrlanmadi.", a: ["Fortunately, nobody was hurt.", "Fortunately, no one was hurt.", "Luckily, nobody was hurt."], why: "**Fortunately** + gap." },
    { k: "translate", uz: "Oxir-oqibat biz taksiga o'tirdik.", a: ["In the end, we took a taxi.", "In the end we took a taxi.", "Eventually, we took a taxi.", "In the end, we got a taxi."], why: "**In the end** — natija." },
    { k: "fix", wrong: "In the end of the trip, we were very tired.", a: ["At the end of the trip, we were very tired."], hint: "Ot oldidan qaysi ibora?", why: "Ot bilan: **at the end of**." },
    { k: "speak", say: "At first I was afraid, but in the end everything was fine.", uz: "Avvaliga qo'rqdim, lekin oxir-oqibat hammasi yaxshi bo'ldi." },
  ],
  quiz: [
    { k: "choice", q: "I was reading when ___ the lights went out.", opts: ["suddenly", "eventually", "afterwards", "unfortunately"], a: 0, why: "To'satdan sodir bo'lgan voqea → **suddenly**." },
    { k: "choice", q: "Which word shows a GOOD result?", opts: ["Fortunately", "Unfortunately", "At first", "Meanwhile"], a: 0, why: "**Fortunately** — yaxshiyamki." },
    { k: "choice", q: "\"We watched the news. ___ that, we went to bed.\"", opts: ["After", "Afterwards", "When", "While"], a: 0, why: "Gap boshida «keyin» → **After that**." },
    { k: "fill", q: "___ the film, everybody was silent. (oxirida)", a: ["At the end of"], why: "Ot bilan: **at the end of**." },
    { k: "fill", q: "I was waiting for the bus. ___, my friend was waiting at the café.", a: ["Meanwhile"], why: "Bir vaqtda, boshqa joyda → **Meanwhile**." },
    { k: "fix", wrong: "In the end of the day, I felt tired.", a: ["At the end of the day, I felt tired."], hint: "ot oldidan", why: "Ot oldidan: **at the end of**." },
    { k: "listen", say: "Eventually, the train arrived.", opts: ["Eventually, the train arrived.", "Fortunately, the train arrived.", "Suddenly, the train arrived.", "Maybe the train arrived."], a: 0, why: "Eshitilgan gap: *Eventually, the train arrived.*" },
    { k: "tf", q: "\"Eventually\" means \"maybe\".", a: false, why: "**Eventually** = oxir-oqibat. «Maybe» = mumkin." },
    { k: "order", uz: "Aynan shu payt telefonim jiringladi.", words: ["Just", "then,", "my", "phone", "rang."], extra: ["ringing", "firstly"], why: "**Just then,** + Past Simple." },
    { k: "translate", uz: "Afsuski, dukon yopiq edi.", a: ["Unfortunately, the shop was closed.", "Unfortunately the shop was closed.", "Unfortunately, the shop was shut."], why: "**Unfortunately** + gap." },
  ],
  summary: [
    "Tartib: **at first** (boshida), **then / after that / later / afterwards** (keyin), **finally / in the end / eventually** (oxirida). Gap boshida bog'lovchidan keyin **vergul** qo'yiladi.",
    "To'satdan: **suddenly, all of a sudden, just then** + Past Simple. Fon uchun Past Continuous: *I was walking when suddenly…*",
    "Bir vaqtda: **meanwhile** yangi gapni boshlaydi; bitta gap ichida **while** ishlating.",
    "**In the end** (natija) va **at the end of + ot** (oxirida) boshqa-boshqa. **Eventually** = oxir-oqibat, «mumkin» emas!",
    "**Fortunately / unfortunately** (omad / omadsizlik), **as soon as** + Past Simple (...ishi bilanoq).",
  ],
  homework: "Bugun yoki kecha bo'lgan bitta voqeani 6-8 gapda yozing. Kamida 5 ta bog'lovchidan foydalaning: *at first, then, suddenly, meanwhile, as soon as, in the end.* Keyin hikoyani ovoz chiqarib o'qing.",
};

export default lesson;
