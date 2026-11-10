import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u24-l2",
  title: "Present Perfect: simple or continuous?",
  titleUz: "Present Perfect Simple yoki Continuous: natija, davomiylik, so'nggi o'zgarishlar",
  goal: "**Present Perfect Simple** (*I've written three emails*) va **Present Perfect Continuous** (*I've been writing emails*) o'rtasidagi farqni ma'noga qarab tanlaysiz: **natija yoki soni** (how many) va **jarayon yoki davomiylik** (how long). *lately, recently, so far, by now, since, for* bilan so'nggi o'zgarishlar haqida gapirasiz va **I am living here since**, **I have seen him yesterday** kabi xatolardan qochasiz. Ish suhbati, hisobot va IELTS Speaking uchun foydali.",
  slides: [
    {
      title: "Ikki shakl, ikki nuqtai nazar",
      blocks: [
        { t: "p", md: "Hozirgi paytga **bog'langan** o'tgan voqea haqida ikki shakldan foydalanamiz. Ikkalasi ham hozirgi payt bilan aloqani ko'rsatadi, lekin **diqqat** turli joyda bo'ladi." },
        {
          t: "table", head: ["Shakl", "Tuzilishi", "Diqqat qaratadi", "Misol"], speak: [3],
          rows: [
            ["Present Perfect Simple", "have / has + V3", "**natija**, **necha marta / nechta**", "I've written three emails this morning."],
            ["Present Perfect Continuous", "have / has been + V-ing", "**jarayon**, **qancha vaqt**", "I've been writing emails all morning."],
          ],
        },
        { t: "p", md: "Ish bilan bog'liq vaziyatni tasavvur qiling: menejer so'raydi, *«Hisobot qanday?»* Siz ikki xil javob berishingiz mumkin:" },
        { t: "examples", items: [
          { en: "I've finished the report.", uz: "Hisobotni tugatdim. (natija tayyor)", note: "Simple: natija muhim" },
          { en: "I've been working on the report since nine.", uz: "Hisobot ustida soat to'qqizdan beri ishlayapman. (jarayon)", note: "Continuous: jarayon va davomiylik muhim" },
        ] },
        { t: "tip", tone: "info", md: "O'zbek tilida ikkalasi ham ko'pincha *«qildim»* yoki *«qilyapman»* bo'ladi. Inglizchada tanlash **ma'noga** bog'liq: natija ko'rinyaptimi yoki jarayonmi?" },
        { t: "check", ex: { k: "choice", q: "Qaysi gap jarayonga (davomiylikka) e'tibor beradi?", opts: ["She has been learning Spanish for a year.", "She has learned Spanish.", "She learned Spanish last year.", "She has finished the course."], a: 0, why: "**has been learning** — jarayon va davomiylik (*for a year*)." } },
      ],
    },
    {
      title: "Natija yoki jarayon? Soni yoki davomiyligi?",
      blocks: [
        { t: "p", md: "**Simple** — tugagan ish, uning **natijasi** yoki **soni**. **Continuous** — ish tugagan yoki tugamagan bo'lishi mumkin, muhimi **jarayon** va **qancha vaqt**." },
        {
          t: "table", head: ["Simple (natija / son)", "Continuous (jarayon / davomiylik)"],
          rows: [
            ["I've painted the kitchen. (tayyor)", "I've been painting the kitchen. (qo'lim bo'yoq)"],
            ["How many pages have you read?", "How long have you been reading?"],
            ["She's called him five times.", "She's been calling him all evening."],
            ["I've read three chapters.", "I've been reading since lunch."],
          ],
        },
        { t: "p", md: "**How many / How much** → *Simple*. **How long** → odatda *Continuous* (holat fe'li bo'lmasa). Son aytilsa, ko'pincha *Simple* ishlatiladi: ~~I've been reading three chapters~~." },
        { t: "tip", tone: "warn", md: "**Holat fe'llari** (*know, like, believe, belong, own*) Continuous bo'lmaydi: *I've **known** him for years* (~~I've been knowing~~). *have* (egalik) ham: *I've **had** this phone since 2022.*" },
        { t: "check", ex: { k: "fill", q: "How many emails ___ today? (you / write)", a: ["have you written"], why: "Son so'ralmoqda → Simple: **have you written**." } },
        { t: "check", ex: { k: "fill", q: "I ___ for him for forty minutes. (wait)", a: ["have been waiting", "'ve been waiting"], why: "Davomiylik (*for forty minutes*), jarayon: **have been waiting**." } },
        { t: "check", ex: { k: "choice", q: "She ___ for this company for ten years.", opts: ["has worked", "is working", "worked", "has been worked"], a: 0, why: "**for ten years** — hozirgacha davom etgan holat: **has worked** (yoki *has been working*). *is working* va *worked* bu ma'noni bermaydi." } },
      ],
    },
    {
      title: "Vaqtinchalik yoki doimiy? So'nggi o'zgarishlar",
      blocks: [
        { t: "p", md: "**Continuous** vaqtinchalik vaziyatni, **Simple** esa doimiy yoki uzoq davom etadigan holatni ko'rsatadi. Ikkalasi ham mumkin bo'lganda ma'no deyarli bir xil, lekin ohang farq qiladi." },
        { t: "examples", items: [
          { en: "I've been staying with my cousin while my flat is repaired.", uz: "Kvartiram ta'mirlanayotgan paytda amakivachcham oldida turib turibman. (vaqtinchalik)" },
          { en: "I've lived in Tashkent all my life.", uz: "Butun umrim Toshkentda o'tgan. (doimiy)" },
          { en: "Prices have been rising lately.", uz: "Narxlar oxirgi paytda ko'tarilmoqda. (jarayon, hozirgacha davom etmoqda)" },
          { en: "Prices have risen by ten per cent.", uz: "Narxlar o'n foizga ko'tarildi. (natija, son)" },
        ] },
        { t: "p", md: "So'nggi o'zgarishlar bilan **vaqt ifodalari** ishlatiladi:" },
        {
          t: "table", head: ["Ifoda", "Ma'nosi", "Misol"], speak: [2],
          rows: [
            ["lately / recently", "so'nggi paytda", "I've been feeling more confident lately."],
            ["so far", "hozirgacha", "We've sold two hundred tickets so far."],
            ["by now", "hozirgacha (allaqachon)", "She must have arrived by now."],
            ["for + muddat", "qancha vaqt", "I've studied English for six years."],
            ["since + nuqta", "qachondan beri", "I've been teaching here since 2019."],
          ],
        },
        { t: "tip", tone: "info", md: "**Superlativ** va **the first time** bilan doim Present Perfect: *It's the best film I've ever seen. This is the first time I've flown alone.* (~~the first time I fly~~)." },
        { t: "check", ex: { k: "choice", q: "It's the first time I ___ a camel.", opts: ["have ridden", "ride", "rode", "am riding"], a: 0, why: "**It's the first time** + Present Perfect: *have ridden*." } },
        { t: "check", ex: { k: "tf", q: "*Lately, I've been going to the gym.* gapi so'nggi paytdagi odatni ko'rsatadi.", a: true, why: "**lately** + Continuous: so'nggi paytdagi takrorlanadigan ish." } },
      ],
    },
    {
      title: "Tipik xatolar (o'zbek tilidan)",
      blocks: [
        { t: "p", md: "O'zbek tilida *«…dan beri yashayman»* deymiz (hozirgi zamon), shuning uchun inglizchada ham hozirgi zamon ishlatamiz. Yana *kecha ko'rdim* ni *have seen* bilan aytish xatosi. Eng ko'p uchraydigan to'rtta xato:" },
        { t: "compare",
          good: { title: "To'g'ri", items: ["I have been living here since 2020.", "I saw him yesterday.", "How long have you been learning English?", "I have known her for years."] },
          bad: { title: "Xato", items: ["I am living here since 2020.", "I have seen him yesterday.", "How long do you learn English?", "I have been knowing her for years."] } },
        { t: "p", md: "**1.** *since/for* bilan **Present Perfect** kerak, Present Continuous emas. **2.** Aniq o'tgan vaqt (*yesterday, last week, in 2019*) bilan **Past Simple**. **3.** *How long* + hozirgacha davom etgan jarayon → **have been learning**. **4.** Holat fe'li (*know*) Continuous bo'lmaydi." },
        { t: "check", ex: { k: "fix", wrong: "I am living here since 2020.", a: ["I have been living here since 2020.", "I have lived here since 2020.", "I've been living here since 2020.", "I've lived here since 2020."], hint: "since bilan", why: "**since 2020** → **have (been) living / lived**." } },
        { t: "check", ex: { k: "fix", wrong: "I have seen him yesterday.", a: ["I saw him yesterday."], hint: "yesterday — aniq o'tgan vaqt", why: "**yesterday** bilan Present Perfect ishlatilmaydi: **saw**." } },
        { t: "check", ex: { k: "fix", wrong: "How long do you learn English?", a: ["How long have you been learning English?", "How long have you learned English?"], hint: "hozirgacha davom etgan", why: "Davomiylik savoli: **How long have you been learning**." } },
        { t: "check", ex: { k: "fix", wrong: "I have been knowing her for years.", a: ["I have known her for years.", "I've known her for years."], hint: "holat fe'li", why: "**know** holat fe'li, Continuous bo'lmaydi: **have known**." } },
      ],
    },
    {
      title: "O'qing: Jamoamizning yangi ilovasi",
      blocks: [
        {
          t: "text", title: "Where are we with the app?", voice: "george",
          en: "Our team has been redesigning the company app since January, and I think we have made real progress. So far we have rebuilt the login page and fixed more than fifty bugs. It has been a demanding few months: we have been juggling the new design with our usual workload, and some of us have been working late almost every evening. Lately, though, things have started to improve. Our designer has just finished the final screens, and the testers have been checking them since Monday. We are slightly behind schedule, but I have never worked with such a motivated group. By now, I know exactly what each person does best. This is the first time I have managed a project of this size, and I have learned more in four months than in the previous two years.",
          uz: "Jamoamiz yanvardan beri kompaniya ilovasini qayta ishlab chiqmoqda va menimcha, biz haqiqiy muvaffaqiyatga erishdik. Hozirgacha kirish sahifasini qayta qurdik va ellikdan ortiq xatoni tuzatdik. Bu og'ir bir necha oy bo'ldi: yangi dizaynni odatiy ish yukimiz bilan birga olib bordik va ba'zilarimiz deyarli har kuni kechgacha ishladik. Biroq oxirgi paytda ahvol yaxshilana boshladi. Dizaynerimiz oxirgi ekranlarni hozirgina tugatdi, testchilar esa dushanbadan beri ularni tekshirmoqda. Biroz jadvaldan orqada qoldik, lekin bunday g'ayratli guruh bilan hech qachon ishlamaganman. Hozirgacha har bir kishi nimani eng yaxshi qilishini aniq bilaman. Bu shunday katta loyihani birinchi marta boshqarishim va to'rt oyda oldingi ikki yildagidan ko'proq narsa o'rgandim.",
        },
        { t: "check", ex: { k: "tf", q: "The team has already finished testing the app.", a: false, why: "*The testers **have been checking** them since Monday* — test hali davom etmoqda." } },
        { t: "check", ex: { k: "choice", q: "Why does the writer say \"I have fixed more than fifty bugs\" with a number?", opts: ["He reports a result and a quantity, so the simple form is used.", "The action is still in progress.", "It is a future plan.", "It happened at a definite time in the past."], a: 0, why: "Son va natija → **Present Perfect Simple**." } },
      ],
    },
    {
      title: "Dialog: Loyiha qanday ketyapti?",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Zarina", en: "Hi, Jack. You look busy. How long have you been working on that presentation?", uz: "Salom, Jack. Band ko'rinasiz. Bu taqdimot ustida qancha vaqtdan beri ishlayapsiz?" },
            { who: "Jack", en: "Since lunchtime. I've done twelve slides, but I still haven't finished the graphs.", uz: "Tushlikdan beri. O'n ikkita slayd qildim, lekin grafiklarni hali tugatmadim." },
            { who: "Zarina", en: "You've been staying late a lot lately, haven't you?", uz: "Oxirgi paytda tez-tez kechgacha qolyapsiz, shunday emasmi?" },
            { who: "Jack", en: "I have. We've been trying to meet the deadline for weeks, and I'm starting to feel burnt out.", uz: "Ha. Bir necha haftadan beri muddatga ulgurishga harakat qilyapmiz va charchab qolayotganimni sezyapman." },
            { who: "Zarina", en: "Have you spoken to our manager about it?", uz: "Bu haqda menejer bilan gaplashdingizmi?" },
            { who: "Jack", en: "Not yet. This is the first time I've felt this tired at work.", uz: "Hali yo'q. Ishda bunchalik charchaganimni birinchi marta his qilyapman." },
            { who: "Zarina", en: "Then talk to her tomorrow. I've known her for years, and she always listens.", uz: "Unda ertaga u bilan gaplashing. Men uni yillardan beri bilaman, u doim tinglaydi." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "How many slides has Jack finished?", opts: ["Twelve", "Since lunchtime", "All of them", "None"], a: 0, why: "*I've done twelve slides* — son va natija." } },
      ],
    },
  ],
  words: [
    { en: "on track", uz: "rejaga muvofiq, yo'lida", ipa: "ɒn træk", pos: "phrase", ex: "The project is on track to finish before the end of June.", exUz: "Loyiha iyun oyi oxirigacha tugash yo'lida." },
    { en: "behind schedule", uz: "jadvaldan orqada", ipa: "bɪˌhaɪnd ˈʃed.juːl", pos: "phrase", ex: "The building work is two weeks behind schedule.", exUz: "Qurilish ishlari jadvaldan ikki hafta orqada." },
    { en: "ahead of schedule", uz: "jadvaldan oldin", ipa: "əˌhed əv ˈʃed.juːl", pos: "phrase", ex: "We finished the first stage ahead of schedule.", exUz: "Birinchi bosqichni jadvaldan oldin tugatdik." },
    { en: "meet a deadline", uz: "muddatga ulgurmoq", ipa: "miːt ə ˈded.laɪn", pos: "phrase", ex: "It was hard to meet the deadline with such a small team.", exUz: "Bunday kichik jamoa bilan muddatga ulgurish qiyin edi." },
    { en: "juggle", uz: "bir nechta ishni birga olib bormoq", ipa: "ˈdʒʌɡ.əl", pos: "verb", ex: "She juggles a full-time job and evening classes.", exUz: "U to'liq kunlik ish va kechki darslarni birga olib boradi." },
    { en: "burnt out", uz: "charchab, kuch-quvvatdan ketgan", ipa: "bɜːnt aʊt", pos: "adj", ex: "After months of overtime, he felt completely burnt out.", exUz: "Oylar davomida qo'shimcha ishlagach, u o'zini butunlay holdan toygan his qildi." },
    { en: "take up", uz: "(hobbi, mashg'ulot) boshlamoq", ipa: "teɪk ʌp", pos: "phrasal verb", ex: "I've taken up cycling to stay fit.", exUz: "Sog'lom bo'lish uchun velosiped haydashni boshladim." },
    { en: "get the hang of", uz: "ko'nikib, uddasidan chiqmoq", ipa: "ɡet ðə hæŋ əv", pos: "phrase", ex: "I'm slowly getting the hang of the new software.", exUz: "Yangi dasturni sekin-asta o'zlashtirib olyapman." },
    { en: "fall behind", uz: "orqada qolmoq", ipa: "fɔːl bɪˈhaɪnd", pos: "phrasal verb", ex: "He fell behind with his coursework after he was ill.", exUz: "U kasal bo'lgach, o'quv topshiriqlaridan orqada qoldi." },
    { en: "overhaul", uz: "tubdan qayta ko'rib chiqmoq", ipa: "ˌəʊ.vəˈhɔːl", pos: "verb", ex: "The company has overhauled its whole training system.", exUz: "Kompaniya butun o'qitish tizimini tubdan qayta ko'rib chiqdi." },
  ],
  practice: [
    { k: "choice", q: "I ___ three coffees this morning. I feel nervous.", opts: ["have drunk", "have been drinking", "am drinking", "drank since"], a: 0, why: "Son (**three**) va natija: **have drunk**." },
    { k: "choice", q: "Why are your eyes red? — I ___ onions.", opts: ["have been cutting", "cut", "am cutting", "have been cut"], a: 0, why: "Ko'rinib turgan natija va jarayon (son yo'q): **have been cutting**." },
    { k: "listen", say: "We have been waiting for the results since Monday.", opts: ["We have been waiting for the results since Monday.", "We waited for the results on Monday.", "We were waiting for the results on Monday.", "We have waited for the results since Monday."], a: 0, why: "**have been waiting ... since Monday** — hozirgacha davom etayotgan jarayon." },
    { k: "fill", q: "How long ___ for this company? (you / work)", a: ["have you worked", "have you been working"], uz: "Siz bu kompaniyada qancha vaqtdan beri ishlaysiz?", why: "**How long** + Present Perfect (Simple yoki Continuous)." },
    { k: "fill", q: "She ___ four marathons so far. (run)", a: ["has run"], uz: "U hozirgacha to'rtta marafon yugurgan.", why: "Son (**four**) → Simple: **has run**." },
    { k: "fill", q: "This is the best meal I ___ ever had.", a: ["have", "'ve"], uz: "Bu men yegan eng yaxshi taom.", why: "Superlativ + ever: Present Perfect **have had**." },
    { k: "order", uz: "Oxirgi paytda u juda charchagan holda ishlayapti.", words: ["She", "has", "been", "working", "very", "hard", "lately."], extra: ["is", "worked"], alt: [["Lately", "she", "has", "been", "working", "very", "hard."]], why: "**lately** + Continuous: **has been working**." },
    { k: "match", pairs: [["on track", "rejaga muvofiq"], ["behind schedule", "jadvaldan orqada"], ["juggle", "bir nechta ishni birga olib bormoq"], ["burnt out", "holdan toygan"], ["get the hang of", "uddasidan chiqmoq"]] },
    { k: "tf", q: "*I've been reading this novel, and I've read 200 pages.* — ikkala shakl bir gapda ham bo'lishi mumkin.", a: true, why: "Birinchisi jarayon, ikkinchisi son va natija: ikkalasi to'g'ri." },
    { k: "fix", wrong: "I have met her last week.", a: ["I met her last week."], hint: "last week", why: "Aniq o'tgan vaqt (**last week**) → Past Simple." },
    { k: "fix", wrong: "They are working here since 2018.", a: ["They have been working here since 2018.", "They have worked here since 2018.", "They've been working here since 2018.", "They've worked here since 2018."], hint: "since 2018", why: "**since** bilan Present Perfect." },
    { k: "translate", uz: "Men uni ikki yildan beri bilaman.", a: ["I have known him for two years.", "I've known him for two years.", "I have known her for two years.", "I've known her for two years."], why: "Holat fe'li **know** → Simple: **have known**." },
    { k: "translate", uz: "Bu mening birinchi marta samolyotda uchishim.", a: ["This is the first time I have flown.", "This is the first time I've flown.", "It's the first time I have flown.", "It's the first time I've flown.", "This is the first time I have flown by plane.", "This is the first time I've flown by plane."], why: "**the first time** + Present Perfect." },
    { k: "dictation", say: "We've been trying to meet the deadline for weeks.", uz: "Bir necha haftadan beri muddatga ulgurishga harakat qilyapmiz.", why: "**for weeks** — davomiylik: **have been trying**." },
    { k: "choice", q: "The project is two weeks ___ . We must work faster.", opts: ["behind schedule", "ahead of schedule", "on track to", "burnt out"], a: 0, why: "Tezroq ishlash kerak, demak jadvaldan **orqada**." },
    { k: "speak", say: "I've been learning English for a long time, and I've made real progress.", uz: "Men ingliz tilini uzoq vaqtdan beri o'rganyapman va haqiqiy yutuqlarga erishdim." },
  ],
  quiz: [
    { k: "choice", q: "How many countries ___ you ___ ?", opts: ["have / visited", "have / been visiting", "did / been visiting", "are / visiting"], a: 0, why: "**How many** — son: Simple, **have you visited**." },
    { k: "choice", q: "I'm tired. I ___ since six o'clock this morning.", opts: ["have been working", "worked", "work", "am worked"], a: 0, why: "**since six o'clock** — davomiylik va natija (charchoq): **have been working**." },
    { k: "choice", q: "She ___ this laptop since 2022. (egalik)", opts: ["has had", "has been having", "is having", "had been"], a: 0, why: "*have* (egalik) holat fe'li: **has had**, Continuous emas." },
    { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["He has lived here since he was a child.", "He is living here since he was a child.", "He lived here since he was a child.", "He has been live here since he was a child."], a: 0, why: "**since** + Present Perfect: **has lived**." },
    { k: "fill", q: "Prices ___ rapidly lately. (rise)", a: ["have been rising"], uz: "Narxlar oxirgi paytda tez ko'tarilmoqda.", why: "**lately** + jarayon: **have been rising**." },
    { k: "fill", q: "This is the first time I ___ sushi. (eat)", a: ["have eaten", "'ve eaten"], uz: "Men sushini birinchi marta yeyapman.", why: "**the first time** + Present Perfect: **have eaten**." },
    { k: "order", uz: "Hozirgacha biz ikki yuzta chipta sotdik.", words: ["So", "far", "we", "have", "sold", "two", "hundred", "tickets."], extra: ["been", "selling"], alt: [["We", "have", "sold", "two", "hundred", "tickets", "so", "far."]], why: "Son va natija: **have sold**." },
    { k: "translate", uz: "Siz ingliz tilini qancha vaqtdan beri o'rganyapsiz?", a: ["How long have you been learning English?", "How long have you been studying English?", "How long have you learned English?", "How long have you studied English?"], why: "**How long** + Present Perfect." },
    { k: "fix", wrong: "I have been knowing him since childhood.", a: ["I have known him since childhood.", "I've known him since childhood."], hint: "holat fe'li", why: "**know** Continuous bo'lmaydi." },
    { k: "tf", q: "*I have seen her yesterday.* — bu gap to'g'ri.", a: false, why: "**yesterday** bilan Past Simple: *I saw her yesterday.*" },
  ],
  summary: [
    "**Simple** (*have + V3*) — natija va son (*how many*); **Continuous** (*have been + V-ing*) — jarayon va davomiylik (*how long*).",
    "Continuous vaqtinchalik vaziyat va so'nggi o'zgarishlar uchun qulay: *I've been staying…, Prices have been rising lately.*",
    "**since** (nuqta) va **for** (muddat) bilan Present Perfect; **aniq o'tgan vaqt** (*yesterday, last week*) bilan Past Simple.",
    "Holat fe'llari (*know, have, like, belong*) Continuous bo'lmaydi: **have known**, **has had**.",
    "**It's the first time … have + V3** va superlativ + *ever* doim Present Perfect bilan keladi.",
  ],
  homework: "O'z kunlik ishingiz yoki o'qishingiz haqida 8 ta gap yozing: 4 tasi **Simple** (natija va son bilan: *I've finished two chapters*), 4 tasi **Continuous** (davomiylik bilan: *I've been studying since lunch*). Har bir gapda *for, since, lately, so far* dan birini ishlating, so'ng ovoz chiqarib o'qing.",
};

export default lesson;
