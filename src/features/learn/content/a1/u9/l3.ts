import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u9-l3",
  title: "Where did you go? What did you do?",
  titleUz: "O'tgan zamonda Wh-savollar",
  goal: "O'tgan voqea haqida batafsil so'ray olasiz: **Where did you go? What did you do? Who did you meet? How long did you stay? How was it? What happened?** — va bunday savollarga qisqa, tabiiy javob berasiz.",
  slides: [
    {
      title: "Savol so'zi + did + ega + V1",
      blocks: [
        { t: "p", md: "Beginner'da **Did you…?** savolini o'rgandik (*Did you see him? — Yes, I did.*). Endi uning oldiga **savol so'zi** qo'yamiz va \"ha/yo'q\" emas, **ma'lumot** so'raymiz." },
        {
          t: "table", head: ["Savol so'zi", "did", "Ega", "V1 …?"],
          rows: [
            ["Where", "did", "you", "go?"],
            ["What", "did", "she", "buy?"],
            ["When", "did", "they", "arrive?"],
            ["Who", "did", "you", "meet?"],
            ["Why", "did", "he", "leave?"],
            ["How", "did", "you", "get there?"],
          ],
        },
        { t: "tip", tone: "good", md: "Formula hamma shaxs uchun bir xil: **did** o'tgan zamonni o'zi ko'rsatadi, shuning uchun asosiy fe'l **V1** bo'lib qoladi — *go, buy, arrive*. Hech qachon *went, bought* emas!" },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["Where did you go?", "What did she buy?", "When did they arrive?"] },
          bad: { title: "Xato", items: ["Where did you went?", "What she bought?", "When they arrived?"] },
        },
        { t: "check", ex: { k: "choice", q: "\"Kecha qayerga bording?\"", opts: ["Where you went yesterday?", "Where did you went yesterday?", "Where did you go yesterday?", "Where do you go yesterday?"], a: 2, why: "**Where + did + you + V1 (go)**." } },
      ],
    },
    {
      title: "Ko'proq savol so'zlari",
      blocks: [
        { t: "p", md: "Ikki so'zli savol boshlanmalari ham xuddi shu tartibda ishlaydi:" },
        {
          t: "examples", items: [
            { en: "What time did you get up?", uz: "Soat nechada turding?" },
            { en: "How long did you stay in Bukhara?", uz: "Buxoroda qancha vaqt qolding?" },
            { en: "How much did your phone cost?", uz: "Telefoning qancha turdi?" },
            { en: "Which hotel did you choose?", uz: "Qaysi mehmonxonani tanlading?" },
            { en: "What did you do at the weekend?", uz: "Dam olish kunlari nima qilding?" },
            { en: "Who did you go with?", uz: "Kim bilan bording?" },
          ],
        },
        { t: "tip", tone: "info", md: "**cost** — noto'g'ri fe'l, uchala shakli ham bir xil: *cost – cost*. *It cost 50 dollars* (50 dollar turdi). Savolda: *How much **did** it **cost**?*" },
        { t: "tip", tone: "info", md: "O'zbekchada \"kim bilan\" deymiz, inglizchada predlog ko'pincha **oxirga** ketadi: *Who did you go **with**?* *Where are you **from**?* — bu juda tabiiy." },
        { t: "check", ex: { k: "order", uz: "Toshkentda qancha vaqt qoldingiz?", words: ["How", "long", "did", "you", "stay", "in", "Tashkent?"], extra: ["stayed", "were"], why: "**How long + did + you + V1**." } },
      ],
    },
    {
      title: "to be bilan: Where were you? How was it?",
      blocks: [
        { t: "p", md: "Agar gapda asosiy fe'l **be** bo'lsa, **did** ishlatilmaydi. **was / were** o'zi ega oldiga chiqadi:" },
        {
          t: "table", head: ["Savol", "Javob"],
          rows: [
            ["Where were you last night?", "I was at my aunt's house."],
            ["How was your weekend?", "It was great, thanks!"],
            ["How was the film?", "It was boring."],
            ["Who was at the party?", "All my cousins were there."],
            ["Why were you late?", "Because the bus was late."],
          ],
          speak: [0, 1],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["Where were you?", "How was your trip?", "Why was she sad?"] },
          bad: { title: "Xato", items: ["Where did you be?", "How did your trip was?", "Why did she was sad?"] },
        },
        { t: "tip", tone: "good", md: "**How was…?** — eng foydali savollardan biri: *How was your weekend / your trip / the wedding / the exam?* Javob: *It was great / OK / terrible.*" },
        { t: "check", ex: { k: "fill", q: "Where ___ you yesterday afternoon?", a: ["were"], uz: "Kecha tushdan keyin qayerda eding?", why: "Asosiy fe'l — **be**: *Where **were** you?*" } },
      ],
    },
    {
      title: "Who called? va Who did you call?",
      blocks: [
        { t: "p", md: "Diqqat! Agar **who** yoki **what** gapning **egasi** bo'lsa (ish-harakatni kim/nima qilgani so'ralsa), **did** kerak emas va fe'l **V2** bo'ladi:" },
        {
          t: "table", head: ["Savol", "Ma'nosi", "Javob"],
          rows: [
            ["Who called you?", "Senga kim qo'ng'iroq qildi?", "Aziz called me."],
            ["Who did you call?", "Sen kimga qo'ng'iroq qilding?", "I called Aziz."],
            ["What happened?", "Nima bo'ldi?", "I lost my phone."],
          ],
          speak: [0, 2],
        },
        { t: "tip", tone: "warn", md: "**What happened?** — \"Nima bo'ldi?\" — doim shunday! ❌ *What did happen?* ❌ *What happen?* Bu savolni har kuni eshitasiz." },
        { t: "check", ex: { k: "choice", q: "Do'stingiz xafa ko'rinyapti. Nima deysiz?", opts: ["What did happen?", "What happened?", "What happen?", "What was happen?"], a: 1, why: "**What** bu yerda ega → *did* kerak emas: **What happened?**" } },
      ],
    },
    {
      title: "Talaffuz: did you = \"didʒu\"",
      blocks: [
        { t: "p", md: "Tez nutqda **did you** birikib ketadi va **\"didʒu\"** yoki hatto **\"dʒu\"** bo'lib eshitiladi. Wh-savolning ohangi oxirida **pastga** tushadi ↘." },
        {
          t: "sounds", items: [
            { label: "did you", say: "did you", uz: "**\"didʒu\"** — *d* va *y* qo'shilib \"dʒ\" bo'ladi.", examples: ["What did you do?", "Where did you go?"] },
            { label: "Where did you go? ↘", say: "Where did you go?", uz: "Urg'u **Where** va **go** da. *did you* qisqa va kuchsiz: **\"WEƏ-didʒu-GOU ↘\"**.", examples: ["Where did you go?"] },
            { label: "How was it? ↘", say: "How was it?", uz: "*was* kuchsiz: **\"HAU-wəz-it ↘\"**.", examples: ["How was it?", "How was your trip?"] },
          ],
        },
        { t: "check", ex: { k: "listen", say: "What did you do?", opts: ["What do you do?", "What did you do?", "What did you say?"], a: 1, why: "\"WOT-didʒu-DU:\" — **What did you do?**" } },
      ],
    },
    {
      title: "O'qing: To'ydan keyin",
      blocks: [
        {
          t: "text", title: "Javlon's weekend",
          en: "Last Saturday Javlon went to his cousin's wedding in Namangan. He went by car with his parents, and the journey took four hours.\nThere were more than three hundred guests at the wedding. Javlon met a lot of relatives, and some of them came from Russia and Kazakhstan. The musicians played Uzbek songs, and everybody danced until midnight.\nOn Sunday morning, the family had plov with the guests. Then they drove back to Tashkent. Javlon was tired on Monday, but he really enjoyed the weekend.",
          uz: "O'tgan shanba Javlon Namanganga amakisining o'g'lining to'yiga bordi. U ota-onasi bilan mashinada bordi, yo'l to'rt soat davom etdi.\nTo'yda uch yuzdan ortiq mehmon bor edi. Javlon ko'p qarindoshlari bilan ko'rishdi, ularning ba'zilari Rossiya va Qozog'istondan kelishgan edi. Sozandalar o'zbek qo'shiqlarini chalishdi va hamma yarim tungacha raqs tushdi.\nYakshanba kuni ertalab oila mehmonlar bilan palov yedi. Keyin ular Toshkentga mashinada qaytishdi. Dushanba kuni Javlon charchagan edi, lekin dam olish kunlari unga juda yoqdi.",
        },
        { t: "check", ex: { k: "choice", q: "**How long did the journey take?**", opts: ["Three hours.", "Four hours.", "Until midnight.", "Two days."], a: 1, why: "*…the journey took four hours.*" } },
        { t: "check", ex: { k: "choice", q: "**Who did Javlon go with?**", opts: ["With his cousin.", "With his friends.", "With his parents.", "Alone."], a: 2, why: "*He went by car with his parents.*" } },
      ],
    },
    {
      title: "Dialog: Dam olish kunlari qanday o'tdi?",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Shahzoda", en: "Hi, Javlon! How was your weekend?", uz: "Salom, Javlon! Dam olish kunlaring qanday o'tdi?" },
            { who: "Javlon", en: "It was fantastic! I went to a wedding in Namangan.", uz: "Ajoyib! Namanganda to'yga bordim." },
            { who: "Shahzoda", en: "Oh, nice! Whose wedding was it?", uz: "Voy, zo'r! Kimning to'yi edi?" },
            { who: "Javlon", en: "My cousin's. He married a girl from Fergana.", uz: "Amakimning o'g'linikiga. U farg'onalik qizga uylandi." },
            { who: "Shahzoda", en: "How many guests did they invite?", uz: "Ular qancha mehmon chaqirishdi?" },
            { who: "Javlon", en: "About three hundred! We danced all night.", uz: "Uch yuzga yaqin! Tun bo'yi raqsga tushdik." },
            { who: "Shahzoda", en: "And what did you do on Sunday?", uz: "Yakshanba kuni-chi, nima qildingiz?" },
            { who: "Javlon", en: "We had plov with the guests and then drove home.", uz: "Mehmonlar bilan palov yedik, keyin uyga qaytdik." },
          ],
        },
        { t: "tip", tone: "info", md: "E'tibor bering: real suhbatda javob ko'pincha **qisqa**: *Where did you go? — **To Namangan.*** *When? — **Last Saturday.*** To'liq gap shart emas." },
        { t: "check", ex: { k: "fill", q: "How many guests ___ they invite?", a: ["did"], uz: "Ular qancha mehmon chaqirishdi?", why: "**How many + did + they + V1**." } },
      ],
    },
  ],
  words: [
    { en: "happen", uz: "sodir bo'lmoq, bo'lmoq", ipa: "ˈhæp.ən", pos: "verb", ex: "What happened at school today?", exUz: "Bugun maktabda nima bo'ldi?" },
    { en: "trip", uz: "sayohat, safar (qisqa)", ipa: "trɪp", pos: "noun", ex: "How was your trip to Samarkand?", exUz: "Samarqandga safaring qanday o'tdi?" },
    { en: "journey", uz: "yo'l, yo'lda o'tgan vaqt", ipa: "ˈdʒɜː.ni", pos: "noun", ex: "The journey took four hours.", exUz: "Yo'l to'rt soat davom etdi." },
    { en: "wedding", uz: "to'y (nikoh to'yi)", ipa: "ˈwed.ɪŋ", pos: "noun", ex: "We went to a wedding last Saturday.", exUz: "O'tgan shanba to'yga bordik." },
    { en: "guest", uz: "mehmon", ipa: "ɡest", pos: "noun", ex: "There were two hundred guests at the party.", exUz: "Bazmda ikki yuz mehmon bor edi." },
    { en: "relatives", uz: "qarindoshlar", ipa: "ˈrel.ə.tɪvz", pos: "noun", ex: "I met a lot of relatives at the wedding.", exUz: "To'yda ko'p qarindoshlarni ko'rdim." },
    { en: "invite", uz: "taklif qilmoq, chaqirmoq", ipa: "ɪnˈvaɪt", pos: "verb", ex: "Who did you invite to your birthday?", exUz: "Tug'ilgan kuningga kimlarni chaqirding?" },
    { en: "celebrate", uz: "nishonlamoq", ipa: "ˈsel.ə.breɪt", pos: "verb", ex: "How did you celebrate Navruz?", exUz: "Navro'zni qanday nishonladingiz?" },
    { en: "enjoy", uz: "zavqlanmoq, yoqmoq", ipa: "ɪnˈdʒɔɪ", pos: "verb", ex: "Did you enjoy the concert?", exUz: "Konsert sizga yoqdimi?" },
    { en: "dance", uz: "raqs tushmoq", ipa: "dɑːns", pos: "verb", ex: "Everybody danced until midnight.", exUz: "Hamma yarim tungacha raqs tushdi." },
  ],
  practice: [
    { k: "listen", say: "Where did you go?", opts: ["Where do you go?", "Where did you go?", "Where were you?"], a: 1 },
    { k: "listen", say: "How was your trip?", opts: ["How was your trip?", "How is your trip?", "How was your train?"], a: 0 },
    { k: "match", pairs: [["Where did you go?", "To Bukhara."], ["When did you arrive?", "Last Friday."], ["Who did you meet?", "My cousins."], ["How long did you stay?", "For a week."], ["How was it?", "It was great!"]] },
    { k: "choice", q: "Qaysi savol **to'g'ri**?", opts: ["What did you bought?", "What you bought?", "What did you buy?", "What bought you?"], a: 2, why: "**did** + V1 → *buy*." },
    { k: "choice", q: "___ was the concert? — It was great!", opts: ["What", "How", "Where", "Who"], a: 1, why: "Taassurot so'raladi → **How was…?**" },
    { k: "choice", q: "Nima deyish **to'g'ri**: \"Senga kim xabar yubordi?\"", opts: ["Who did send you a message?", "Who sent you a message?", "Who did you send a message?", "Who you sent a message?"], a: 1, why: "**Who** — ega (yuborgan odam) → *did* yo'q, V2: **Who sent you…?**" },
    { k: "fill", q: "What time ___ you get up this morning?", a: ["did"] },
    { k: "fill", q: "Why ___ you late yesterday?", a: ["were"], why: "*late* — sifat, fe'l **be** → **were**." },
    { k: "fill", q: "How much did your new shoes ___?", a: ["cost"], why: "**did** + V1 → *cost*." },
    { k: "tf", q: "*Where did you went last summer?* — to'g'ri savol.", a: false, why: "**did** bor → V1: *Where did you **go**…?*" },
    { k: "tf", q: "*How was the wedding?* — to'g'ri savol.", a: true, why: "**be** bilan **did** kerak emas: *How was…?*" },
    { k: "order", uz: "Siz kim bilan bordingiz?", words: ["Who", "did", "you", "go", "with?"], extra: ["went", "was"] },
    { k: "order", uz: "Navro'zni qanday nishonladingiz?", words: ["How", "did", "you", "celebrate", "Navruz?"], extra: ["celebrated", "were"] },
    { k: "translate", uz: "Nima bo'ldi?", a: ["What happened", "What's happened", "What has happened"] },
    { k: "translate", uz: "Kecha nima qildingiz?", a: ["What did you do yesterday", "Yesterday what did you do", "Yesterday, what did you do"] },
    { k: "speak", say: "What did you do at the weekend?", uz: "Dam olish kunlari nima qildingiz?" },
  ],
  quiz: [
    { k: "choice", q: "\"U qachon keldi?\" (he)", opts: ["When did he came?", "When he came?", "When did he come?", "When was he come?"], a: 2 },
    { k: "choice", q: "___ you at home last night?", opts: ["Did", "Was", "Were", "Do"], a: 2, why: "*at home* — **be**: *Were you…?*" },
    { k: "choice", q: "Javob: *\"My sister told me.\"* Savol qaysi?", opts: ["Who did tell you?", "Who told you?", "Who did you tell?", "Who you told?"], a: 1, why: "Ega so'raladi (kim aytdi?) → **Who told you?**" },
    { k: "fill", q: "How long ___ you stay in London?", a: ["did"] },
    { k: "fill", q: "Who did you ___ to your party? (invite)", a: ["invite"], why: "**did** + V1." },
    { k: "fill", q: "Did you ___ the wedding? — Yes, it was great! (enjoy)", a: ["enjoy"] },
    { k: "listen", say: "Who did you meet?", opts: ["Who did you meet?", "Who met you?", "Who do you meet?"], a: 0 },
    { k: "tf", q: "Matnga ko'ra, to'yda uch yuzdan ortiq mehmon bor edi.", a: true, why: "*There were more than three hundred guests…*" },
    { k: "order", uz: "Telefoningiz qancha turdi?", words: ["How", "much", "did", "your", "phone", "cost?"], extra: ["costed", "was"] },
    { k: "translate", uz: "Dam olish kunlaringiz qanday o'tdi?", a: ["How was your weekend", "How was the weekend", "How did you spend your weekend", "How did you spend the weekend"] },
  ],
  summary: [
    "**Savol so'zi + did + ega + V1**: *Where did you go? What did she buy? How long did you stay?*",
    "**be** bilan **did** yo'q: *Where were you? How was your trip? Why was she late?*",
    "Ega so'ralsa — **did** yo'q, fe'l V2: *Who called you? **What happened?***",
    "Tez nutqda **did you** = \"didʒu\"; Wh-savol ohangi oxirida pasayadi ↘.",
  ],
  homework: "Do'stingiz yoki oila a'zongizdan o'tgan dam olish kunlari haqida 8 ta savol bilan \"intervyu\" oling (*Where did you go? Who did you meet? How was it? What happened?…*). Savollar va qisqa javoblarni yozib qo'ying.",
};

export default lesson;
