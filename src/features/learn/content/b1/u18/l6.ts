import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u18-l6",
  title: "Changes: used to, be used to, get used to",
  titleUz: "O'zgarishlar: used to, be used to va get used to",
  goal: "**used to + fe'l** (*I used to play chess*), **be used to + -ing** (*I'm used to getting up early*) va **get used to + -ing** (*I'm getting used to the cold*) ni bir-biridan ajratasiz va hayotdagi o'zgarishlar haqida gapira olasiz.",
  slides: [
    {
      title: "Uch xil used: farqini bilib oling",
      blocks: [
        { t: "p", md: "Inglizchada **used** so'zi bilan boshlanadigan uchta qolip bor va ular ko'pincha adashtiriladi. Ma'nolari butunlay boshqa, shuning uchun avval jadvalga qarang." },
        {
          t: "table", head: ["Qolip", "Ma'nosi", "Misol"], speak: [2],
          rows: [
            ["**used to** + fe'l", "ilgari shunday edi, endi emas", "I used to live in a village."],
            ["**be used to** + -ing / ot", "ko'nikkan, o'rganib qolgan", "I'm used to getting up early."],
            ["**get used to** + -ing / ot", "ko'nikmoq, o'rganib bormoq", "I'm getting used to the cold."],
          ],
        },
        { t: "tip", tone: "info", md: "Oddiy qoida: **used to** dan keyin **fe'lning asosiy shakli** (infinitive) keladi. **be used to** va **get used to** dan keyin esa **-ing shakli** yoki **ot** keladi, chunki bu yerda **to** — predlog." },
        { t: "check", ex: { k: "choice", q: "Which sentence is about a past habit that has stopped?", opts: ["I used to walk to school.", "I'm used to walking to school.", "I'm getting used to walking to school.", "I walk to school."], a: 0, why: "**used to** + fe'l — ilgari odat bo'lgan, hozir yo'q." } },
      ],
    },
    {
      title: "used to: ilgarigi odat va holat",
      blocks: [
        { t: "p", md: "**used to** o'tmishdagi **takrorlangan odat** yoki **uzoq davom etgan holat** haqida gapiradi va «hozir bunday emas» degan ma'noni beradi. U faqat o'tgan zamonga tegishli — hozirgi zamon shakli yo'q." },
        {
          t: "examples", items: [
            { en: "We used to live in a small flat near the market.", uz: "Biz ilgari bozor yaqinidagi kichik kvartirada yashardik." },
            { en: "I didn't use to like coffee, but now I love it.", uz: "Ilgari qahvani yoqtirmasdim, hozir esa yaxshi ko'raman.", note: "Inkor va savolda **use to** (d yo'q): *didn't use to*." },
            { en: "Did you use to play football when you were a child?", uz: "Bolaligingizda futbol o'ynaganmidingiz?" },
            { en: "There used to be a cinema on this street.", uz: "Bu ko'chada ilgari kinoteatr bor edi.", note: "Holat uchun ham ishlatiladi." },
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I used to smoke.", "She didn't use to drive.", "Did he use to work here?"] },
          bad: { title: "Xato", items: ["I use to smoke.", "She didn't used to drive.", "Did he used to work here?"] },
        },
        { t: "tip", tone: "warn", md: "**did / didn't** bor joyda fe'l allaqachon o'tgan zamonni ko'rsatadi, shuning uchun **use to** (d siz) yoziladi: *Did you use to…?*, *I didn't use to…*. Darak gapda esa **used to**." },
        { t: "tip", tone: "info", md: "Ilgarigi odatlar haqida **would** ham ishlatiladi: *When I was a child, we would visit my grandparents every Sunday.* Lekin **would** faqat takrorlangan harakatlarda ishlaydi. Holatda faqat **used to**: *I used to have long hair* (to'g'ri), *I would have long hair* (xato)." },
        { t: "check", ex: { k: "choice", q: "___ you use to walk to work?", opts: ["Did", "Do", "Are", "Have"], a: 0, why: "Savolda **Did you use to…?**" } },
        { t: "check", ex: { k: "fix", wrong: "She didn't used to like fish.", a: ["She didn't use to like fish.", "She never used to like fish."], hint: "didn't dan keyin", why: "**didn't** dan keyin **use to** (d siz)." } },
      ],
    },
    {
      title: "be used to va get used to",
      blocks: [
        { t: "p", md: "Bu qoliplar o'tmishdagi odatni emas, **ko'nikishni** bildiradi. **be used to** — allaqachon ko'nikkan holat. **get used to** — ko'nikish jarayoni (hali ko'nikmagan, lekin bora-bora ko'nikyapti)." },
        {
          t: "examples", items: [
            { en: "I'm used to the noise now.", uz: "Men hozir shovqinga ko'nikib qolganman.", note: "Ot bilan." },
            { en: "She isn't used to driving on the left.", uz: "U chap tomonda haydashga ko'nikmagan.", note: "Inkor: **-ing**." },
            { en: "It took me a month to get used to the new job.", uz: "Yangi ishga ko'nikishim uchun bir oy ketdi." },
            { en: "You will soon get used to living abroad.", uz: "Tez orada chet elda yashashga ko'nikasiz." },
            { en: "Are you used to the weather here?", uz: "Bu yerdagi ob-havoga ko'nikdingizmi?" },
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I'm used to getting up early.", "He got used to working at night.", "We aren't used to the heat."] },
          bad: { title: "Xato", items: ["I'm used to get up early.", "He got used to work at night.", "I used to getting up early."] },
        },
        { t: "tip", tone: "warn", md: "O'zbek tilida «o'rganmoq» (ko'nikmoq) va «o'rganmoq» (o'qib bilib olmoq) bir so'z. Inglizchada ko'nikish — **get used to**, yangi narsani o'qib bilish — **learn**. *I learned to swim* (suzishni o'rgandim), lekin *I got used to the cold* (sovuqqa ko'nikdim)." },
        { t: "check", ex: { k: "fill", q: "I'm not used to ___ so late. (work)", a: ["working"], why: "**be used to** dan keyin **-ing**: *working*." } },
        { t: "check", ex: { k: "choice", q: "After a few weeks he finally ___ the cold weather.", opts: ["got used to", "used to", "was use to", "is used"], a: 0, why: "Ko'nikish jarayoni tugadi → **got used to**." } },
      ],
    },
    {
      title: "O'qing: Ko'chib kelgandan keyin",
      blocks: [
        {
          t: "text", title: "A new life in Manchester",
          en: "Dilshod moved from Tashkent to Manchester two years ago. Life there is very different. He used to live with his parents, but now he shares a flat with two students. At first he wasn't used to the rain, and he often forgot his umbrella. He also found it hard to get used to eating dinner at six o'clock. He used to have dinner at nine! Slowly, things changed. Now he is used to cooking for himself, and he has even started to like cold weather. He still misses plov and his family, though, and he phones home every Sunday.",
          uz: "Dilshod ikki yil oldin Toshkentdan Manchesterga ko'chib o'tdi. U yerda hayot juda boshqacha. U ilgari ota-onasi bilan yashar edi, hozir esa ikki talaba bilan kvartirani baham ko'radi. Avvaliga u yomg'irga ko'nikmagan edi va tez-tez soyabonini unutardi. Kechki ovqatni soat oltida yeyishga ko'nikish ham unga qiyin bo'ldi. U ilgari kechki ovqatni soat to'qqizda yeyardi! Sekin-asta hammasi o'zgardi. Hozir u o'zi uchun ovqat pishirishga ko'nikkan, hatto sovuq ob-havoni yoqtira boshlagan. Lekin u hali ham palovni va oilasini sog'inadi va har yakshanba uyiga qo'ng'iroq qiladi.",
        },
        { t: "check", ex: { k: "tf", q: "Dilshod still has dinner at nine o'clock.", a: false, why: "Ilgari (**used to**) kechki ovqatni soat to'qqizda yeyardi, hozir soat oltida." } },
        { t: "check", ex: { k: "choice", q: "\"He is used to cooking for himself\" means:", opts: ["He has become comfortable with cooking.", "He cooked in the past but not now.", "He is learning how to cook.", "He hates cooking."], a: 0, why: "**be used to** + -ing — ko'nikkan, odatiy bo'lib qolgan." } },
      ],
    },
    {
      title: "Dialog: nimalar o'zgardi?",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Helen", en: "You look different, Sardor. Have you changed your job?", uz: "Sardor, siz boshqacha ko'rinasiz. Ishingizni almashtirdingizmi?" },
            { who: "Sardor", en: "Yes, I work from home now. I used to travel two hours every day.", uz: "Ha, hozir uydan ishlayman. Ilgari har kuni ikki soat yo'l yurardim." },
            { who: "Helen", en: "Wow! Is it easy to get used to working at home?", uz: "Voy! Uyda ishlashga ko'nikish oson mi?" },
            { who: "Sardor", en: "At first it was strange, but I'm used to it now. I even go for a walk every lunchtime.", uz: "Avvaliga g'alati edi, lekin hozir ko'nikib qoldim. Hatto har tushlikda sayrga chiqaman." },
            { who: "Helen", en: "I couldn't do it. I'm not used to being alone all day.", uz: "Men qilolmasdim. Kun bo'yi yolg'iz bo'lishga ko'nikmaganman." },
            { who: "Sardor", en: "You get used to it. And I didn't use to cook, but now I make lunch every day!", uz: "Ko'nikib ketasiz. Ilgari ovqat pishirmasdim, hozir esa har kuni tushlik tayyorlayman!" },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Sardor travels two hours to work every day now.", a: false, why: "Hozir uydan ishlaydi; ikki soat yo'l yurish — ilgarigi odat (**used to travel**)." } },
      ],
    },
  ],
  words: [
    { en: "habit", uz: "odat", ipa: "ˈhæb.ɪt", pos: "noun", ex: "Reading before bed is a good habit.", exUz: "Uxlashdan oldin kitob o'qish — yaxshi odat." },
    { en: "routine", uz: "kundalik tartib", ipa: "ruːˈtiːn", pos: "noun", ex: "My morning routine has changed a lot.", exUz: "Ertalabki kun tartibim ancha o'zgardi." },
    { en: "lifestyle", uz: "hayot tarzi", ipa: "ˈlaɪf.staɪl", pos: "noun", ex: "A healthy lifestyle starts with good food.", exUz: "Sog'lom hayot tarzi yaxshi ovqatdan boshlanadi." },
    { en: "adapt", uz: "moslashmoq", ipa: "əˈdæpt", pos: "verb", ex: "Children adapt to new schools quickly.", exUz: "Bolalar yangi maktabga tez moslashadi." },
    { en: "gradually", uz: "asta-sekin", ipa: "ˈɡrædʒ.u.ə.li", pos: "adv", ex: "Gradually, the city became my home.", exUz: "Asta-sekin shahar menga uyday bo'lib qoldi." },
    { en: "at first", uz: "avvaliga", ipa: "æt fɜːst", pos: "phrase", ex: "At first I couldn't understand the accent.", exUz: "Avvaliga talaffuzni tushunmasdim." },
    { en: "nowadays", uz: "hozirgi kunlarda", ipa: "ˈnaʊ.ə.deɪz", pos: "adv", ex: "Nowadays most people shop online.", exUz: "Hozirgi kunlarda ko'pchilik onlayn xarid qiladi." },
    { en: "miss", uz: "sog'inmoq", ipa: "mɪs", pos: "verb", ex: "I miss my friends back home.", exUz: "Uydagi do'stlarimni sog'inaman." },
    { en: "noise", uz: "shovqin", ipa: "nɔɪz", pos: "noun", ex: "I can't sleep because of the noise.", exUz: "Shovqin tufayli uxlay olmayman." },
    { en: "strange", uz: "g'alati", ipa: "streɪndʒ", pos: "adj", ex: "It felt strange to live alone.", exUz: "Yolg'iz yashash g'alati tuyuldi." },
  ],
  practice: [
    { k: "choice", q: "When I was a child, I ___ play outside all day.", opts: ["used to", "am used to", "get used to", "was used to"], a: 0, why: "Ilgarigi odat → **used to** + fe'l." },
    { k: "choice", q: "She ___ living in a big city. She loves it.", opts: ["is used to", "used to", "uses to", "use to"], a: 0, why: "Ko'nikkan holat → **is used to** + -ing." },
    { k: "fill", q: "Did you ___ to wear a uniform at school?", a: ["use"], why: "Savolda **did** bor, shuning uchun **use to**." },
    { k: "fill", q: "It was hard at first, but I'm getting used to ___ in the dark. (walk)", a: ["walking"], why: "**get used to** dan keyin **-ing**." },
    { k: "fill", q: "There ___ to be a small café on the corner.", a: ["used"], uz: "Burchakda ilgari kichik kafe bor edi.", why: "Ilgarigi holat: **used to be**." },
    { k: "fill", q: "My grandfather didn't ___ to have a phone.", a: ["use"], why: "**didn't use to**." },
    { k: "order", uz: "Men uyda ishlashga ko'nikib qoldim.", words: ["I", "am", "used", "to", "working", "from", "home."], extra: ["work", "use"], alt: [["I'm", "used", "to", "working", "from", "home."]], why: "**be used to** + -ing." },
    { k: "order", uz: "Ilgari biz yozda tog'larga borardik.", words: ["We", "used", "to", "go", "to", "the", "mountains", "in", "summer."], extra: ["using", "went"], why: "**used to** + fe'l." },
    { k: "fix", wrong: "I'm used to get up at six.", a: ["I'm used to getting up at six.", "I am used to getting up at six."], hint: "to — predlog", why: "**be used to** dan keyin **-ing**." },
    { k: "fix", wrong: "Did you used to live here?", a: ["Did you use to live here?"], hint: "did bor", why: "**did** dan keyin **use to**." },
    { k: "translate", uz: "Ilgari men sutni yoqtirmasdim.", a: ["I didn't use to like milk.", "I did not use to like milk.", "I never used to like milk."], why: "O'tgan odat/holat, inkor: **didn't use to**." },
    { k: "match", pairs: [["habit", "odat"], ["adapt", "moslashmoq"], ["gradually", "asta-sekin"], ["nowadays", "hozirgi kunlarda"], ["miss", "sog'inmoq"]] },
    { k: "tf", q: "**I'm used to cold weather** means I had cold weather in the past, but not now.", a: false, why: "Bu ko'nikkan holat; ilgarigi odat emas." },
    { k: "speak", say: "I didn't use to like getting up early, but now I'm used to it.", uz: "Ilgari erta turishni yoqtirmasdim, hozir esa ko'nikib qolganman." },
  ],
  quiz: [
    { k: "choice", q: "Sara ___ in London, but now she lives in Leeds.", opts: ["used to live", "is used to live", "got used to live", "uses to live"], a: 0, why: "Ilgari yashagan, endi yo'q → **used to live**." },
    { k: "choice", q: "I can't get used to ___ the bus every day.", opts: ["taking", "take", "took", "taken"], a: 0, why: "**get used to** + -ing." },
    { k: "choice", q: "He ___ spicy food, so he eats it every day.", opts: ["is used to", "used to", "gets use to", "was use to"], a: 0, why: "Hozirgi ko'nikma → **is used to**." },
    { k: "fill", q: "She didn't ___ to like her new school, but now she does.", a: ["use"], why: "**didn't use to**." },
    { k: "fill", q: "We are not used ___ the noise in this street.", a: ["to"], why: "**be used to**." },
    { k: "fill", q: "It took her a long time to get used to ___ on her own. (live)", a: ["living"], why: "**get used to** + -ing." },
    { k: "listen", say: "I used to play the guitar.", opts: ["I used to play the guitar.", "I'm used to playing the guitar.", "I use to play the guitar.", "I got used to the guitar."], a: 0, why: "**used to play**." },
    { k: "fix", wrong: "I'm used to wake up early.", a: ["I'm used to waking up early.", "I am used to waking up early."], hint: "to + -ing", why: "**be used to** + -ing." },
    { k: "order", uz: "Sen ilgari ko'p televizor ko'rarmiding?", words: ["Did", "you", "use", "to", "watch", "a", "lot", "of", "TV?"], extra: ["used", "watching"], why: "**Did you use to…?**" },
    { k: "translate", uz: "Men yangi shaharga ko'nika boshladim.", a: ["I'm getting used to the new city.", "I am getting used to the new city.", "I'm getting used to my new city."], why: "Jarayon: **get used to**." },
  ],
  summary: [
    "**used to + fe'l**: ilgari shunday bo'lgan, hozir yo'q. Inkor/savol: **didn't use to**, **Did you use to…?**",
    "**be used to + -ing / ot**: ko'nikkan holat. *I'm used to getting up early.*",
    "**get used to + -ing / ot**: ko'nikish jarayoni. *I'm getting used to the cold.*",
    "**be used to** va **get used to** dagi **to** — predlog, shuning uchun fe'l **-ing** shaklida: ~~I'm used to get up~~ → *I'm used to getting up*.",
    "**would** ilgarigi takrorlangan harakatlarda ishlatiladi, lekin holatda (*have, be, like*) faqat **used to**.",
  ],
  homework: "Bolaligingiz va hozirgi hayotingizni solishtirib 6 ta gap yozing: 3 ta **used to** (*I used to…*) va 3 ta **be used to / get used to** (*I'm used to…*, *I'm getting used to…*). Yangi narsaga qanday ko'nikkaningiz haqida bitta kichik hikoya ham yozing.",
};

export default lesson;
