import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u18-l3",
  title: "Present Perfect Continuous",
  titleUz: "Present Perfect Continuous: davom etayotgan jarayon",
  goal: "**Present Perfect Continuous** (*I've been working*) ni to'g'ri tuzasiz, uni **Present Perfect Simple** (*I've finished*) dan ajratasiz — **jarayon** yoki **natija** — hamda **How long…?**, **What have you been doing?** savollariga javob berasiz.",
  slides: [
    {
      title: "Shakl: have / has been + V-ing",
      blocks: [
        { t: "p", md: "Present Perfect Continuous **jarayonga** e'tibor beradi: ish qancha vaqtdan beri davom etayotgani yoki yaqinda tugagan uzoq harakat. Shakli: **have / has + been + V-ing**." },
        {
          t: "table", head: ["Shakl", "Misol"], speak: [1],
          rows: [
            ["+ : have / has + **been** + V-ing", "I have been learning English for a year."],
            ["− : haven't / hasn't + **been** + V-ing", "She hasn't been feeling well."],
            ["? : Have / Has + ega + **been** + V-ing?", "Have you been waiting long?"],
            ["Qisqa javob", "Yes, I have. / No, he hasn't."],
            ["Savol so'zi bilan", "What have you been doing?"],
          ],
        },
        { t: "tip", tone: "info", md: "Gapda **ikkita** fe'l qismi bor: **been** (o'tgan zamon sifatdoshi, doim o'zgarmaydi) va **V-ing**. Odatiy xato — **been** ni tashlab yuborish: ~~I have working~~ → **I have been working**." },
        { t: "check", ex: { k: "choice", q: "**She ___ for the bus for twenty minutes.**", opts: ["has waiting", "has been waiting", "is been waiting", "have been waiting"], a: 1, why: "she → **has been waiting**." } },
        { t: "check", ex: { k: "fix", wrong: "We have studying for two hours.", a: ["We have been studying for two hours.", "We've been studying for two hours."], hint: "been", why: "Present Perfect Continuous: **have been + V-ing**." } },
      ],
    },
    {
      title: "Ikki asosiy ishlatilishi",
      blocks: [
        { t: "p", md: "Present Perfect Continuous ikki holatda kerak bo'ladi:" },
        {
          t: "examples", items: [
            { en: "I've been learning to drive since January.", uz: "Men yanvardan beri mashina haydashni o'rganyapman.", note: "**1.** O'tgan paytda boshlangan, **hozir ham davom etayotgan** jarayon. Ko'pincha for / since / how long bilan." },
            { en: "Your hands are dirty. — I've been cleaning the garage.", uz: "Qo'llaring kir. — Garajni tozalayotgan edim.", note: "**2.** Hozirgina tugagan (yoki endi to'xtagan) harakat; **natijasi hozir ko'rinib turibdi**." },
            { en: "You look tired. Have you been working all night?", uz: "Charchagan ko'rinasan. Tun bo'yi ishlaganmisan?" },
            { en: "It's been raining all day.", uz: "Kun bo'yi yomg'ir yog'ayapti.", note: "Yomg'ir hali yog'ayotgan bo'lishi ham mumkin, endi to'xtagan bo'lishi ham." },
          ],
        },
        { t: "tip", tone: "info", md: "O'zbekchada: «**-ib kelyapman**, **-ayotgan edim**, **-moqdaman**» — shu ma'noni beradi: *ikki soatdan beri o'qib kelyapman* = **I've been reading for two hours.**" },
        {
          t: "table", head: ["So'z", "Ma'nosi", "Misol"], speak: [2],
          rows: [
            ["How long…?", "qancha vaqtdan beri?", "How long have you been living here?"],
            ["for / since", "...dan beri", "She has been working since 8 o'clock."],
            ["all day / all morning", "kun bo'yi / ertalab bo'yi", "We've been walking all morning."],
            ["lately / recently", "so'nggi paytlarda", "I've been sleeping badly lately."],
          ],
        },
        { t: "check", ex: { k: "choice", q: "**Why are your shoes wet? — I ___ in the rain.**", opts: ["have been walking", "walk", "am been walking", "was been walking"], a: 0, why: "Natija hozir ko'rinib turibdi (nam poyabzal), sabab — oldingi jarayon." } },
      ],
    },
    {
      title: "Jarayon yoki natija?",
      blocks: [
        { t: "p", md: "Asosiy farq: **Continuous** — jarayon va davomiylik (**how long?**), **Simple** — natija va son (**how many? how much? how many times?**)." },
        {
          t: "table", head: ["Continuous (jarayon)", "Simple (natija)"],
          rows: [
            ["I've been reading this book all week.", "I've read three books this week."],
            ["She's been writing emails all morning.", "She's written ten emails."],
            ["They've been painting the kitchen.", "They've painted the kitchen. It looks great!"],
            ["How long have you been cooking?", "How many dishes have you cooked?"],
          ],
        },
        { t: "tip", tone: "good", md: "Qisqa qoida: **tugallangan, son bor** → Simple (*I've written three letters*). **Davomiylik yoki to'xtamagan ish** → Continuous (*I've been writing letters all day*)." },
        { t: "p", md: "Ba'zan ikkalasi ham to'g'ri, ma'no deyarli bir xil. Ayniqsa **live, work, study, teach** fe'llari bilan: *I've lived here for ten years* = *I've been living here for ten years*." },
        { t: "check", ex: { k: "choice", q: "**I ___ four emails since breakfast.**", opts: ["have been writing", "have written", "am writing", "wrote"], a: 1, why: "**four emails** — son, natija → Present Perfect Simple." } },
        { t: "check", ex: { k: "choice", q: "**He ___ the same song for an hour. I'm tired of it!**", opts: ["has played", "has been playing", "is play", "has been played"], a: 1, why: "Davomiylik (for an hour), jarayon → Continuous." } },
      ],
    },
    {
      title: "Holat fe'llari Continuous bo'lmaydi",
      blocks: [
        { t: "p", md: "Ba'zi fe'llar **holat**ni bildiradi, harakatni emas. Ularni odatda Continuous qilmaymiz: *know, like, love, want, need, believe, understand, have (egalik), be*. Bunday fe'llar bilan **Present Perfect Simple** ishlatiladi:" },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I have known him for years.", "She has had a cold since Monday.", "We have been friends since school."] },
          bad: { title: "Xato", items: ["I have been knowing him for years.", "She has been having a cold since Monday.", "We have been being friends since school."] },
        },
        { t: "tip", tone: "warn", md: "**have** egalik ma'nosida (*have a cold, have a car*) Continuous bo'lmaydi. Ammo **have** harakat ma'nosida (*have dinner, have a shower*) bo'ladi: *We've been having dinner for an hour.*" },
        { t: "p", md: "**Qisqa harakatlar** (*find, break, start, stop, arrive*) bilan ham odatda Continuous ishlatilmaydi — ular bir lahzada bo'ladi. Masalan: *I've found my keys*, ~~I've been finding my keys~~ emas." },
        { t: "check", ex: { k: "fix", wrong: "I have been knowing Sara for ten years.", a: ["I have known Sara for ten years.", "I've known Sara for ten years."], hint: "know — holat fe'li", why: "**know** holat fe'li, Continuous bo'lmaydi: **have known**." } },
        { t: "check", ex: { k: "choice", q: "Which sentence is correct?", opts: ["She has been wanting a new phone for months.", "She has wanted a new phone for months.", "She has been want a new phone for months.", "She wants a new phone for months."], a: 1, why: "**want** — holat fe'li → *has wanted*." } },
      ],
    },
    {
      title: "O'qing: Nilufarning ta'miri",
      blocks: [
        {
          t: "text", title: "A very busy month", voice: "emma",
          en: "Nilufar has been decorating her flat for a month, and she is exhausted. She has been painting the walls every weekend, and she has been searching online for the right furniture. So far she has painted three rooms and bought a new sofa. She has also been repairing an old table. Her friend Jack asked, \"What have you been doing lately? I haven't heard from you!\" Nilufar laughed. \"I've been working very hard. I haven't been going out much, but the flat is almost ready.\" Jack has promised to come and help next Saturday.",
          uz: "Nilufar bir oydan beri kvartirasini ta'mirlayapti va juda charchagan. U har dam olish kunida devorlarni bo'yayapti va to'g'ri mebelni internetdan qidiryapti. Hozirgacha u uchta xonani bo'yadi va yangi divan sotib oldi. U eski stolni ham ta'mirlayapti. Do'sti Jek so'radi: «Oxirgi paytda nima qilyapsan? Sendan darak yo'q!» Nilufar kuldi: «Juda qattiq ishlayapman. Ko'p tashqariga chiqmayapman, lekin kvartira deyarli tayyor.» Jek kelasi shanba kuni kelib yordam berishga va'da berdi.",
        },
        { t: "check", ex: { k: "tf", q: "Nilufar has painted three rooms so far.", a: true, why: "Matnda: *So far she has painted three rooms* — natija va son (Simple)." } },
        { t: "check", ex: { k: "choice", q: "Why does the text say **has painted three rooms**, not **has been painting three rooms**?", opts: ["Because the number three shows the result.", "Because painting is a state.", "Because it is a question.", "Because it happened yesterday."], a: 0, why: "Son (**three rooms**) — natija, shuning uchun Simple." } },
      ],
    },
    {
      title: "Dialog: charchagan ko'rinasan",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Ben", en: "You look exhausted, Lily. What have you been doing?", uz: "Charchagan ko'rinasan, Lili. Nima bilan band bo'lib yuribsan?" },
            { who: "Lily", en: "I've been preparing for my driving test. I've been practising every evening.", uz: "Haydovchilik imtihoniga tayyorlanyapman. Har kech mashq qilyapman." },
            { who: "Ben", en: "How long have you been learning to drive?", uz: "Qancha vaqtdan beri haydashni o'rganyapsan?" },
            { who: "Lily", en: "For about three months. I've had ten lessons so far, and I've passed the theory test.", uz: "Taxminan uch oydan beri. Hozirgacha o'nta dars oldim va nazariy imtihondan o'tdim." },
            { who: "Ben", en: "That's great! I've been trying to find a driving instructor for weeks.", uz: "Zo'r! Men bir necha haftadan beri haydash o'qituvchisi topishga urinyapman." },
            { who: "Lily", en: "Mine is very good. I can give you her number.", uz: "Meniki juda yaxshi. Telefon raqamini bera olaman." },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Lily has passed the theory test.", a: true, why: "U aytdi: *I've passed the theory test.*" } },
      ],
    },
  ],
  words: [
    { en: "fed up", uz: "bezor bo'lgan, toliqqan", ipa: "fed ʌp", pos: "adj", ex: "I've been feeling fed up with this rain all week.", exUz: "Men butun hafta shu yomg'irdan bezor bo'lib yuribman." },
    { en: "sort out", uz: "tartibga solmoq, hal qilmoq", ipa: "sɔːt aʊt", pos: "phrasal verb", ex: "I've been sorting out my old photos all morning.", exUz: "Men butun ertalab eski suratlarimni saralab o'tirdim." },
    { en: "tidy up", uz: "tartibga keltirmoq, yig'ishtirmoq", ipa: "ˈtaɪ.di ʌp", pos: "phrasal verb", ex: "They have been tidying up the flat since lunchtime.", exUz: "Ular tushlikdan beri kvartirani yig'ishtirishyapti." },
    { en: "clear out", uz: "tozalab tashlamoq (keraksiz narsalardan)", ipa: "klɪər aʊt", pos: "phrasal verb", ex: "We have been clearing out the garage all weekend.", exUz: "Biz butun dam olish kunlari garajni keraksiz narsalardan tozalab yuribmiz." },
    { en: "wait around", uz: "bekor kutib turmoq", ipa: "weɪt əˈraʊnd", pos: "phrasal verb", ex: "I've been waiting around for the plumber for two hours.", exUz: "Men ikki soatdan beri chilangarni bekor kutib turibman." },
    { en: "search", uz: "qidirmoq (diqqat bilan)", ipa: "sɜːtʃ", pos: "verb", ex: "I have been searching for a flat online.", exUz: "Men internetda kvartira qidiryapman." },
    { en: "lately", uz: "so'nggi paytlarda", ipa: "ˈleɪt.li", pos: "adv", ex: "Have you been feeling well lately?", exUz: "So'nggi paytlarda o'zingizni yaxshi his qilyapsizmi?" },
    { en: "keep up", uz: "davom ettirmoq, ortda qolmaslik", ipa: "kiːp ʌp", pos: "phrasal verb", ex: "She has been keeping up her French by watching films.", exUz: "U film ko'rib, frantsuz tilini unutmay kelyapti." },
    { en: "decorate", uz: "bezamoq; ta'mirlab bo'yamoq", ipa: "ˈdek.ə.reɪt", pos: "verb", ex: "We have been decorating the living room.", exUz: "Biz mehmonxonani ta'mirlayapmiz." },
    { en: "work out", uz: "sport bilan shug'ullanmoq; yechim topmoq", ipa: "wɜːk aʊt", pos: "phrasal verb", ex: "She has been working out at the gym since March.", exUz: "U martdan beri sport zalida shug'ullanadi." },
  ],
  practice: [
    { k: "choice", q: "**We ___ for you for an hour!**", opts: ["have waited been", "have been waiting", "are been waiting", "has been waiting"], a: 1, why: "we → **have been waiting**." },
    { k: "choice", q: "**How long ___ English?**", opts: ["are you learning", "have you been learning", "you have been learning", "do you learn"], a: 1, why: "Savol: **How long have you been learning?**" },
    { k: "listen", say: "She has been working here since June.", opts: ["She has been working here since June.", "She has worked here for June.", "She was working here in June.", "She is working here this June."], a: 0 },
    { k: "choice", q: "**I ___ three chapters today.** (natija)", opts: ["have been reading", "have read", "am reading", "has read"], a: 1, why: "**three chapters** — son, natija → Simple." },
    { k: "fill", q: "It ___ been raining all morning. (have)", a: ["has", "'s"], why: "it → **has been raining**." },
    { k: "fill", q: "They have been practising ___ eight o'clock.", a: ["since"], why: "*eight o'clock* — payt → **since**." },
    { k: "fill", q: "I've been trying to call you ___ days.", a: ["for"], why: "*days* — muddat → **for**." },
    { k: "fill", q: "My sister has ___ working out since March. (be)", a: ["been"], why: "**has been** + V-ing." },
    { k: "order", uz: "Qancha vaqtdan beri kutyapsiz?", words: ["How", "long", "have", "you", "been", "waiting?"], extra: ["are", "wait"], why: "**How long have you been + V-ing?**" },
    { k: "order", uz: "U butun ertalab yig'lab keldi.", words: ["He", "has", "been", "crying", "all", "morning."], extra: ["is", "cried"], alt: [["He's", "been", "crying", "all", "morning."]], why: "Davomiylik: *has been crying*." },
    { k: "translate", uz: "Men so'nggi paytlarda yomon uxlayapman.", a: ["I have been sleeping badly lately.", "I've been sleeping badly lately.", "I have been sleeping badly recently.", "I've been sleeping badly recently.", "I haven't been sleeping well lately.", "I haven't been sleeping well recently."], why: "Jarayon + lately: **have been sleeping**." },
    { k: "translate", uz: "U uch oydan beri ingliz tilini o'rganyapti.", a: ["She has been learning English for three months.", "She's been learning English for three months.", "He has been learning English for three months.", "He's been learning English for three months.", "She has been studying English for three months.", "He has been studying English for three months."], why: "**has been learning … for three months**." },
    { k: "fix", wrong: "I have been knowing him for years.", a: ["I have known him for years.", "I've known him for years."], hint: "holat fe'li", why: "**know** Continuous bo'lmaydi." },
    { k: "fix", wrong: "She has been wait for ages.", a: ["She has been waiting for ages.", "She's been waiting for ages."], hint: "V-ing", why: "**been** dan keyin V-ing: *waiting*." },
    { k: "match", pairs: [["exhausted", "juda charchagan"], ["repair", "ta'mirlamoq"], ["queue", "navbat"], ["lately", "so'nggi paytlarda"], ["practise", "mashq qilmoq"]] },
    { k: "speak", say: "What have you been doing lately?", uz: "So'nggi paytlarda nima qilyapsiz?" },
  ],
  quiz: [
    { k: "choice", q: "**You look hot. — Yes, I ___ in the sun.**", opts: ["have been running", "have run", "run", "am been running"], a: 0, why: "Hozirgina tugagan harakat, natijasi ko'rinib turibdi → Continuous." },
    { k: "choice", q: "**She ___ two cakes this afternoon.**", opts: ["has been baking", "has baked", "is bake", "bakes"], a: 1, why: "**two cakes** — son → Simple." },
    { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["We have been owning this house for years.", "We have owned this house for years.", "We have been own this house for years.", "We own this house for years."], a: 1, why: "**own** — holat fe'li → Simple." },
    { k: "choice", q: "**___ you been feeling better lately?**", opts: ["Have", "Has", "Are", "Did"], a: 0, why: "you → **Have you been feeling…?**" },
    { k: "fill", q: "He hasn't ___ sleeping well. (be)", a: ["been"], why: "**hasn't been** + V-ing." },
    { k: "fill", q: "I have been decorating my room ___ a week.", a: ["for"], why: "*a week* — muddat → **for**." },
    { k: "listen", say: "What have you been doing all day?", opts: ["What have you been doing all day?", "What are you doing all day?", "What did you do all day?"], a: 0 },
    { k: "tf", q: "**I've been finding my keys** — bu gap to'g'ri.", a: false, why: "**find** — bir lahzali ish. To'g'risi: *I've found my keys.*" },
    { k: "order", uz: "Biz ikki soatdan beri yuryapmiz.", words: ["We", "have", "been", "walking", "for", "two", "hours."], extra: ["since", "are"], alt: [["We've", "been", "walking", "for", "two", "hours."]], why: "**have been walking** + muddat." },
    { k: "translate", uz: "U kun bo'yi mashq qilyapti.", a: ["She has been practising all day.", "He has been practising all day.", "She's been practising all day.", "He's been practising all day.", "She has been practicing all day.", "He has been practicing all day."], why: "**all day** + Continuous." },
  ],
  summary: [
    "**Present Perfect Continuous = have / has + been + V-ing.** Savol: *Have you been waiting long?* Inkor: *I haven't been sleeping well.*",
    "Ikki vazifa: **hozir ham davom etayotgan jarayon** (*I've been learning English for a year*) va **hozirgina tugagan harakat, natijasi ko'rinib turibdi** (*I've been running*).",
    "**Continuous** — jarayon va davomiylik (*how long?*); **Simple** — natija va son (*how many?*): *I've been reading all day* / *I've read three chapters*.",
    "**know, like, want, need, have (egalik), be** kabi holat fe'llari Continuous bo'lmaydi: ~~I have been knowing~~ → **I have known**.",
    "Foydali so'zlar: *how long, for, since, all day, lately, recently*. Savol: **What have you been doing?**",
  ],
  homework: "Kunlik hayotingizdan 5 ta jarayonni yozing: *I've been studying… for…, I've been working out since…*. Keyin 3 ta natijani yozing: *I've read… I've cooked…*. Gaplarda Continuous va Simple farqini tekshiring.",
};

export default lesson;
