import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u14-l6",
  title: "Describing people",
  titleUz: "Odamlarni tasvirlash: tashqi ko'rinish va xarakter",
  goal: "Odamning **tashqi ko'rinishi** (*tall, slim, curly hair, blue eyes*) va **xarakteri** (*friendly, shy, generous*) ni tasvirlaysiz. **is / has / looks like**, **What does he look like?** va **What is he like?** farqini bilasiz va sifatlarni to'g'ri tartibda qo'yasiz (*a nice young man*).",
  slides: [
    {
      title: "Tashqi ko'rinish: is yoki has?",
      blocks: [
        { t: "p", md: "Odamning tashqi ko'rinishini aytishda ikki xil fe'l ishlatamiz: **be** (bo'y, yosh, tana) va **have** (soch, ko'z, soqol). Bu o'zbekchada **-li** (*sochi uzun*, *ko'zlari ko'k*) ga to'g'ri keladi:" },
        {
          t: "table", head: ["be + sifat", "have / has + (sifat) + ot"], speak: [0, 1],
          rows: [
            ["He is tall.", "He has short dark hair."],
            ["She is slim.", "She has long curly hair."],
            ["My dad is middle-aged.", "He has a beard and a moustache."],
            ["The girl is young.", "She has big brown eyes."],
          ],
        },
        { t: "tip", tone: "info", md: "**have got** ham ishlatiladi (ayniqsa Britaniya inglizchasida): *She's got blue eyes.* Ma'nosi **has** bilan bir xil." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["She has long hair.", "He is tall and thin.", "They have blue eyes."] },
          bad: { title: "Xato", items: ["She is long hair.", "He has tall and thin.", "They are blue eyes."] },
        },
        { t: "check", ex: { k: "choice", q: "\"Uning sochi uzun va jingalak.\"", opts: ["She is long curly hair.", "She has long curly hair.", "She has a long curly hair.", "She have long curly hair."], a: 1, why: "Soch — **have**; *hair* sanalmaydi, *a* kerak emas." } },
      ],
    },
    {
      title: "Tashqi ko'rinish so'zlari",
      blocks: [
        { t: "p", md: "Eng foydali so'zlar:" },
        {
          t: "table", head: ["Mavzu", "So'zlar"], speak: [1],
          rows: [
            ["Bo'y", "tall, short, of medium height"],
            ["Tana", "slim, thin, well-built, overweight"],
            ["Yosh", "young, middle-aged, elderly"],
            ["Soch", "long / short, straight, wavy, curly, dark, fair, grey, bald"],
            ["Ko'z", "blue, brown, green, dark, big, small"],
            ["Umumiy", "good-looking, pretty, handsome, attractive"],
          ],
        },
        { t: "tip", tone: "warn", md: "**fat** (semiz) so'zi qo'pol eshitilishi mumkin. Odobli aytish: **overweight** yoki **a bit heavy**. **thin** (ozg'in) o'rniga ko'pincha **slim** (ko'rkam, nozik) deyiladi." },
        { t: "tip", tone: "info", md: "**pretty** ko'proq ayollar va qizlar uchun, **handsome** erkaklar uchun. **good-looking** — ikkalasi uchun." },
        { t: "check", ex: { k: "fill", q: "He has no hair on his head. He is ___.", a: ["bald"], why: "Sochi yo'q → **bald**." } },
        { t: "check", ex: { k: "choice", q: "Qaysi biri soch haqida **emas**?", opts: ["curly", "straight", "slim", "wavy"], a: 2, why: "*slim* — tana haqida (nozik, ko'rkam)." } },
      ],
    },
    {
      title: "Xarakter: What is he like?",
      blocks: [
        { t: "p", md: "Xarakterni tasvirlashda **be + sifat** ishlatiladi:" },
        {
          t: "table", head: ["Sifat", "Ma'nosi", "Misol"], speak: [2],
          rows: [
            ["friendly", "xushmuomala", "Our neighbour is very friendly."],
            ["shy", "uyatchan", "Madina is shy with strangers."],
            ["generous", "saxovatli", "My uncle is generous."],
            ["lazy", "dangasa", "My cat is lazy."],
            ["hard-working", "mehnatkash", "Laylo is hard-working."],
            ["honest", "halol, rostgo'y", "He is an honest man."],
            ["polite", "odobli", "Children should be polite."],
            ["funny", "kulgili", "Aziz is really funny."],
          ],
        },
        { t: "p", md: "Ikki savolni adashtirmang:" },
        {
          t: "table", head: ["Savol", "Nima so'raydi?", "Javob"], speak: [0, 2],
          rows: [
            ["What does she **look like**?", "Tashqi ko'rinishi qanday?", "She's tall with long dark hair."],
            ["What is she **like**?", "Xarakteri qanday?", "She's kind and funny."],
            ["What does she **like**?", "Nimani yaxshi ko'radi?", "She likes tennis."],
          ],
        },
        { t: "tip", tone: "warn", md: "❌ *How is he?* — \"U qalay?\" (sog'lig'i, kayfiyati). Xarakter uchun: ✅ *What is he like?*" },
        { t: "check", ex: { k: "choice", q: "\"Sizning yangi o'qituvchingiz qanday odam?\" (xarakteri)", opts: ["What does your new teacher look like?", "What is your new teacher like?", "What does your new teacher like?", "How is your new teacher?"], a: 1, why: "Xarakter → **What is ... like?**" } },
      ],
    },
    {
      title: "looks like va looks + sifat",
      blocks: [
        { t: "p", md: "**look** fe'li \"ko'rinmoq\" ma'nosida:" },
        {
          t: "table", head: ["Qolip", "Misol", "Ma'nosi"], speak: [1],
          rows: [
            ["look + sifat", "You look tired.", "Charchagan ko'rinasan."],
            ["look + sifat", "She looks happy today.", "U bugun xursand ko'rinadi."],
            ["look **like** + ot", "He looks like his father.", "U otasiga o'xshaydi."],
            ["look **like** + gap", "It looks like it's going to rain.", "Yomg'ir yog'adiganga o'xshaydi."],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["You look tired.", "She looks like her mother.", "He looks very young."] },
          bad: { title: "Xato", items: ["You look like tired.", "She looks her mother.", "He looks like very young."] },
        },
        { t: "tip", tone: "info", md: "Qoida: **look + sifat**, **look like + ot**. *like* dan keyin sifat kelmaydi, sifatdan oldin *like* kelmaydi." },
        { t: "check", ex: { k: "choice", q: "\"Sen onangga o'xshaysan.\"", opts: ["You look your mother.", "You look like your mother.", "You look as your mother.", "You are like look your mother."], a: 1, why: "**look like** + ot." } },
        { t: "check", ex: { k: "fill", q: "Aziz looks very ___. He didn't sleep. (tired)", a: ["tired"], why: "**look + sifat**: *tired*." } },
      ],
    },
    {
      title: "Sifatlar tartibi",
      blocks: [
        { t: "p", md: "Bir otdan oldin bir nechta sifat kelsa, ular **ma'lum tartibda** turadi. Soddalashtirilgan tartib:" },
        {
          t: "table", head: ["1. Fikr", "2. O'lcham", "3. Yosh", "4. Rang", "5. Kelib chiqish", "Ot"],
          rows: [
            ["lovely", "tall", "young", "—", "Uzbek", "woman"],
            ["nice", "big", "old", "brown", "wooden", "table"],
            ["clever", "little", "—", "—", "Russian", "boy"],
          ],
        },
        {
          t: "examples", items: [
            { en: "She is a lovely young woman.", uz: "U yoqimli yosh ayol." },
            { en: "He's a tall dark-haired man.", uz: "U baland bo'yli qora sochli yigit." },
            { en: "My grandmother has a beautiful old blue scarf.", uz: "Buvimning chiroyli eski ko'k ro'moli bor." },
          ],
        },
        { t: "tip", tone: "info", md: "Amalda 2–3 tadan ortiq sifat ishlatmaymiz. Xarakter sifatlari ko'pincha oldin keladi: *a kind old man*." },
        { t: "p", md: "Odamni tasvirlashda **with** ham foydali: *a tall man **with** a beard* (soqolli baland bo'yli erkak), *a girl **with** long hair* (sochi uzun qiz)." },
        { t: "check", ex: { k: "choice", q: "Qaysi tartib to'g'ri?", opts: ["a young nice woman", "a nice young woman", "a woman nice young", "a young woman nice"], a: 1, why: "Fikr (nice) → yosh (young) → ot." } },
        { t: "check", ex: { k: "fill", q: "Look at that girl ___ long curly hair.", a: ["with"], why: "Tavsif uchun **with**." } },
      ],
    },
    {
      title: "O'qing: Mening oilam",
      blocks: [
        {
          t: "text", title: "My family",
          en: "I'd like to tell you about my family. My father is tall and slim. He is middle-aged and he has short grey hair and a small moustache. He is a very generous and honest man. My mother is shorter than my father. She has long dark wavy hair and kind brown eyes. She is hard-working and very friendly. My younger brother, Sardor, looks like my mother, but he is funnier! He is a clever boy and a bit lazy, too. I look like my father, and I'm a bit shy. People say I am quieter than my brother. What does your family look like?",
          uz: "Sizga oilam haqida aytib bermoqchiman. Otam baland bo'yli va ozg'in. U o'rta yoshda, sochi kalta va oqargan, kichik mo'ylovi bor. U juda saxovatli va halol inson. Onam otamdan pastroq. Uning sochi uzun, qora, to'lqinsimon va ko'zlari mehribon qo'ng'ir. U mehnatkash va juda xushmuomala. Ukam Sardor onamga o'xshaydi, lekin u kulgilirog'! U aqlli bola va biroz dangasa ham. Men otamga o'xshayman va biroz uyatchanman. Odamlar mening ukamdan jimroq ekanimni aytishadi. Sizning oilangiz qanday ko'rinishda?",
        },
        { t: "check", ex: { k: "tf", q: "The writer's father has long dark hair.", a: false, why: "*He has short grey hair and a small moustache.*" } },
        { t: "check", ex: { k: "choice", q: "Who does Sardor look like?", opts: ["His father.", "His mother.", "His grandmother.", "His uncle."], a: 1, why: "*Sardor looks like my mother.*" } },
      ],
    },
    {
      title: "Dialog: bekatda uchrashuv",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Laylo", en: "I'm meeting your cousin at the station. What does he look like?", uz: "Amakivachchangni bekatda kutib olaman. U qanday ko'rinishda?" },
            { who: "Kamol", en: "He's tall and slim, with short dark hair and glasses.", uz: "U baland bo'yli, ozg'in, sochi kalta qora va ko'zoynakli." },
            { who: "Laylo", en: "OK. And what is he like?", uz: "Mayli. U o'zi qanday odam?" },
            { who: "Kamol", en: "He's very friendly and funny, but a bit shy at first.", uz: "U juda xushmuomala va kulgili, lekin dastlab biroz uyatchan." },
            { who: "Laylo", en: "Great! Does he look like you?", uz: "Zo'r! U senga o'xshaydimi?" },
            { who: "Kamol", en: "Not really. He's taller than me and he's got curly hair!", uz: "Unchalik emas. U mendan baland va sochi jingalak!" },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Kamol's cousin is shy at first.", a: true, why: "*He's ... a bit shy at first.*" } },
      ],
    },
  ],
  words: [
    { en: "slim", uz: "ozg'in, nozik tanli", ipa: "slɪm", pos: "adj", ex: "My sister is tall and slim.", exUz: "Singlim baland bo'yli va nozik tanli." },
    { en: "curly", uz: "jingalak", ipa: "ˈkɜːli", pos: "adj", ex: "She has curly hair.", exUz: "Uning sochi jingalak." },
    { en: "bald", uz: "kal", ipa: "bɔːld", pos: "adj", ex: "My grandfather is bald.", exUz: "Bobom kal." },
    { en: "middle-aged", uz: "o'rta yoshli", ipa: "ˌmɪdl ˈeɪdʒd", pos: "adj", ex: "He is a middle-aged teacher.", exUz: "U o'rta yoshli o'qituvchi." },
    { en: "good-looking", uz: "chiroyli, xushsurat", ipa: "ˌɡʊd ˈlʊkɪŋ", pos: "adj", ex: "He is a good-looking young man.", exUz: "U xushsurat yosh yigit." },
    { en: "generous", uz: "saxovatli", ipa: "ˈdʒenərəs", pos: "adj", ex: "My uncle is very generous.", exUz: "Amakim juda saxovatli." },
    { en: "shy", uz: "uyatchan", ipa: "ʃaɪ", pos: "adj", ex: "Madina is shy with strangers.", exUz: "Madina notanish odamlar bilan uyatchan." },
    { en: "lazy", uz: "dangasa", ipa: "ˈleɪzi", pos: "adj", ex: "Don't be lazy, do your homework!", exUz: "Dangasa bo'lma, uy vazifangni qil!" },
    { en: "polite", uz: "odobli, xushmuomala", ipa: "pəˈlaɪt", pos: "adj", ex: "The waiter was very polite.", exUz: "Ofitsiant juda odobli edi." },
    { en: "honest", uz: "halol, rostgo'y", ipa: "ˈɒnɪst", pos: "adj", ex: "He is an honest man.", exUz: "U halol inson." },
  ],
  practice: [
    { k: "match", pairs: [["slim", "ozg'in, nozik"], ["curly", "jingalak"], ["bald", "kal"], ["shy", "uyatchan"], ["generous", "saxovatli"]] },
    { k: "match", pairs: [["lazy", "dangasa"], ["polite", "odobli"], ["honest", "halol"], ["friendly", "xushmuomala"], ["funny", "kulgili"]] },
    { k: "listen", say: "She has long curly hair and brown eyes.", opts: ["She has long curly hair and brown eyes.", "She is long curly hair and brown eyes.", "She has short curly hair and green eyes."], a: 0 },
    { k: "listen", say: "What does your brother look like?", opts: ["What does your brother look like?", "What is your brother like?", "What does your brother like?"], a: 0 },
    { k: "fill", q: "My father ___ a beard and a moustache.", a: ["has", "has got", "'s got"], why: "Soqol — **has** / **has got**." },
    { k: "fill", q: "Laylo is tall. She ___ tall.", a: ["is", "'s"], why: "Bo'y — **be**: *is tall*." },
    { k: "fill", uz: "Sen bugun onangga o'xshaysan!", q: "You look ___ your mother today!", a: ["like"], why: "**look like** + ot." },
    { k: "fill", q: "He's a tall man ___ glasses.", a: ["with"], why: "Tavsif uchun **with**." },
    { k: "choice", q: "\"U qanday odam?\" (xarakter)", opts: ["What does he look like?", "What is he like?", "What does he like?", "How does he like?"], a: 1, why: "Xarakter → **What is he like?**" },
    { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["She is a young nice woman.", "She is a nice young woman.", "She is a woman nice young.", "She is a nice woman young."], a: 1, why: "Fikr → yosh → ot." },
    { k: "tf", q: "**She is long hair.** — to'g'ri gap.", a: false, why: "To'g'risi: *She **has** long hair.*" },
    { k: "tf", q: "**What does he like?** = U nimani yaxshi ko'radi?", a: true, why: "Bu qiziqishlar haqida savol." },
    { k: "order", uz: "U baland bo'yli, sochi qora.", words: ["He", "is", "tall", "and", "he", "has", "dark", "hair."], extra: ["have", "got"] },
    { k: "translate", uz: "Singlim onamga o'xshaydi.", a: ["My sister looks like my mother.", "My sister looks like my mum.", "My sister looks like Mum.", "My little sister looks like my mother.", "My younger sister looks like my mother."] },
    { k: "speak", say: "She is tall and slim, with long curly hair, and she is very friendly.", uz: "U baland bo'yli va nozik, sochi uzun jingalak va juda xushmuomala." },
  ],
  quiz: [
    { k: "choice", q: "\"U yoshi katta, sochi oq.\" Qaysi biri to'g'ri?", opts: ["She is elderly and has white hair.", "She has elderly and is white hair.", "She is elderly and is white hair.", "She has elderly and white hair."], a: 0, why: "Yosh — **be**, soch — **have**." },
    { k: "choice", q: "He is very ___. He always tells the truth.", opts: ["lazy", "shy", "honest", "curly"], a: 2 },
    { k: "choice", q: "You look ___. Are you OK?", opts: ["like tired", "tired", "as tired", "tiredly"], a: 1, why: "**look + sifat**." },
    { k: "fill", q: "My cousin ___ like my uncle. They have the same nose.", a: ["looks"], why: "*My cousin* — birlik → **looks like**." },
    { k: "fill", q: "What ___ she like? — She's kind and clever.", a: ["is"], why: "**What is she like?** — xarakter." },
    { k: "fill", q: "My grandfather ___ bald.", a: ["is", "'s"], why: "Soch yo'qligi — tana belgisi, **be**: *is bald*." },
    { k: "listen", say: "He is tall, with short dark hair.", opts: ["He is tall, with short dark hair.", "He has tall, with short dark hair.", "He is short, with tall dark hair."], a: 0 },
    { k: "tf", q: "**What is she like?** — tashqi ko'rinish haqida savol.", a: false, why: "Bu **xarakter** haqida. Ko'rinish: *What does she look like?*" },
    { k: "order", uz: "U menga o'xshamaydi.", words: ["He", "doesn't", "look", "like", "me."], extra: ["is", "looks"] },
    { k: "translate", uz: "Singlim uyatchan, lekin juda xushmuomala.", a: ["My sister is shy, but very friendly.", "My sister is shy but very friendly.", "My sister is shy, but she is very friendly.", "My little sister is shy, but very friendly.", "My younger sister is shy, but very friendly."] },
  ],
  summary: [
    "Bo'y, tana, yosh uchun **be**: *He is tall and slim.* Soch, ko'z, soqol uchun **have**: *She has long curly hair.* ❌ *She is long hair.*",
    "**What does he look like?** — tashqi ko'rinish. **What is he like?** — xarakter. **What does he like?** — qiziqishlari.",
    "**look + sifat** (*You look tired*), **look like + ot** (*He looks like his father*).",
    "Sifatlar tartibi: fikr → o'lcham → yosh → rang → kelib chiqish → ot: *a lovely young woman*. Tavsif uchun **with**: *a man with a beard*.",
    "Xarakter sifatlari: *friendly, shy, generous, lazy, honest, polite, funny*.",
  ],
  homework: "Oila a'zongiz yoki yaqin do'stingiz haqida 8–10 gap yozing: 4 ta tashqi ko'rinish (*is / has*), 3 ta xarakter (*is friendly...*) va 1 ta *looks like*. Keyin ikki kishini (masalan, aka-ukangiz) bir-biri bilan **-er than** va **as ... as** yordamida solishtiring.",
};

export default lesson;
