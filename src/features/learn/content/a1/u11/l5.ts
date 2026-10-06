import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u11-l5",
  title: "want to, enjoy -ing",
  titleUz: "Fe'l + to yoki -ing: want to, enjoy -ing",
  goal: "Ikki fe'lni to'g'ri bog'laysiz: **want / need / decide / hope + to** (*I want **to learn***) va **enjoy / finish / practise / don't mind + -ing** (*I enjoy **cooking***). **I want you to come** kabi gaplarni ham tuzasiz va rejalar, orzular haqida gapirasiz.",
  slides: [
    {
      title: "Ikkinchi fe'l: to yoki -ing?",
      blocks: [
        { t: "p", md: "Ko'pincha gapda ikkita fe'l ketma-ket keladi: *Men **o'qishni xohlayman**. U **pishirishni yoqtiradi**.* O'zbekchada ikkinchi fe'l odatda **-ish** shaklida bo'ladi. Ingliz tilida esa birinchi fe'lga qarab ikkinchisi yo **to + V1**, yo **V-ing** bo'ladi:" },
        {
          t: "examples", items: [
            { en: "I want to learn Spanish.", uz: "Ispan tilini o'rganishni xohlayman.", note: "**want** → **to** + V1" },
            { en: "She enjoys cooking.", uz: "U ovqat pishirishni yoqtiradi.", note: "**enjoy** → V**-ing**" },
            { en: "We've decided to buy a car.", uz: "Mashina olishga qaror qildik.", note: "**decide** → **to** + V1" },
            { en: "He finished reading the book.", uz: "U kitobni o'qib tugatdi.", note: "**finish** → V**-ing**" },
          ],
        },
        { t: "tip", tone: "info", md: "Siz bu qoidaning bir qismini allaqachon bilasiz: **would like to** (*I'd like **to order***) va **like / love / hate + -ing** (*I love **swimming***). Bugun ro'yxatni kengaytiramiz. Qaysi fe'l nima olishini **qoida bilan topib bo'lmaydi** — juftlikni butunligicha yodlang: *want to, enjoy -ing*." },
        { t: "check", ex: { k: "choice", q: "\"Men dam olishni xohlayman.\"", opts: ["I want relaxing.", "I want to relax.", "I want relax.", "I want to relaxing."], a: 1, why: "**want + to + V1**: *I want **to relax***." } },
      ],
    },
    {
      title: "Fe'l + to + V1",
      blocks: [
        { t: "p", md: "Bu fe'llar **kelajakka qaragan** — istak, reja, umid, qaror. Ulardan keyin **to + V1**:" },
        {
          t: "table", head: ["Fe'l", "Ma'nosi", "Misol"], speak: [2],
          rows: [
            ["want to", "xohlamoq", "I want to visit Japan."],
            ["would like to", "xohlardim (muloyim)", "I'd like to book a table."],
            ["need to", "kerak", "You need to sleep more."],
            ["hope to", "umid qilmoq", "We hope to see you soon."],
            ["plan to", "rejalashtirmoq", "They plan to open a café."],
            ["decide to", "qaror qilmoq", "She decided to study medicine."],
            ["learn to", "o'rganmoq (ko'nikma)", "My son is learning to swim."],
            ["promise to", "va'da bermoq", "He promised to call me."],
            ["agree to", "rozi bo'lmoq", "Dad agreed to help us."],
            ["offer to", "taklif qilmoq (o'zi qilishni)", "Anvar offered to carry my bag."],
          ],
        },
        { t: "tip", tone: "warn", md: "Inkor: **not** to dan oldin keladi: *I decided **not to go**.* (*I decided to not go* — ko'p uchraydi, lekin o'quv kitoblarida **not to** tavsiya qilinadi.)" },
        { t: "check", ex: { k: "fill", q: "We hope ___ visit London next year.", a: ["to"], why: "**hope + to + V1**." } },
      ],
    },
    {
      title: "Fe'l + V-ing",
      blocks: [
        { t: "p", md: "Bu fe'llardan keyin **-ing** shakl keladi. Ko'pchiligi **zavq** yoki **jarayon** (boshlash, tugatish) haqida:" },
        {
          t: "table", head: ["Fe'l", "Ma'nosi", "Misol"], speak: [2],
          rows: [
            ["enjoy", "zavqlanmoq, yoqtirmoq", "I enjoy walking in the rain."],
            ["finish", "tugatmoq", "Have you finished cleaning your room?"],
            ["stop", "to'xtatmoq, tashlamoq", "My uncle stopped smoking last year."],
            ["practise", "mashq qilmoq", "I practise speaking English every day."],
            ["don't mind", "qarshi emasman", "I don't mind waiting."],
            ["go + -ing", "(faoliyatga) bormoq", "Let's go shopping / swimming / fishing."],
            ["like / love / hate", "yoqtirmoq / sevmoq / yomon ko'rmoq", "She loves dancing."],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I enjoy cooking.", "He finished working at six.", "We went swimming."] },
          bad: { title: "Xato", items: ["I enjoy to cook.", "He finished to work at six.", "I don't mind to wait."] },
        },
        { t: "tip", tone: "info", md: "Imlo eslatma: **swim → swimming, run → running, shop → shopping** (undosh ikkilanadi); **practise → practising, dance → dancing** (*e* tushib qoladi)." },
        { t: "check", ex: { k: "fill", q: "Do you enjoy ___ in the mountains? (walk)", a: ["walking"], why: "**enjoy + -ing**." } },
        { t: "check", ex: { k: "fill", q: "Bobur has finished ___ his homework. (do)", a: ["doing"], why: "**finish + -ing**." } },
      ],
    },
    {
      title: "Ikkalasi ham mumkin va I want you to…",
      blocks: [
        { t: "p", md: "**like, love, hate, start, begin** dan keyin **ikkalasi ham** to'g'ri, ma'no deyarli bir xil:" },
        {
          t: "examples", items: [
            { en: "It started to rain. / It started raining.", uz: "Yomg'ir yog'a boshladi." },
            { en: "I love to dance. / I love dancing.", uz: "Raqs tushishni yaxshi ko'raman." },
          ],
        },
        { t: "tip", tone: "warn", md: "Lekin **would like** — faqat **to**: *I'd like **to** dance* ✅, *I'd like dancing* ❌." },
        { t: "p", md: "Boshqa odam biror ish qilishini xohlasangiz: **want + kishi + to + V1**. O'zbekchadagi *\"kelishingni xohlayman\"* ni so'zma-so'z tarjima qilmang!" },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I want you to come to my party.", "My parents want me to be a doctor.", "She'd like us to help her."] },
          bad: { title: "Xato", items: ["I want that you come to my party.", "My parents want that I be a doctor.", "She'd like that we help her."] },
        },
        { t: "check", ex: { k: "order", uz: "Ustozim menga ko'proq o'qishimni xohlaydi.", words: ["My", "teacher", "wants", "me", "to", "read", "more."], extra: ["that", "I"], why: "**want + me + to + V1**." } },
      ],
    },
    {
      title: "O'qing: Shahzodaning yangi yil rejalari",
      blocks: [
        {
          t: "text", title: "My plans for this year",
          en: "Last year was busy, but this year I've decided to change a few things.\nFirst, I want to learn to drive. My brother has offered to teach me, and he has promised not to shout!\nSecond, I need to stop eating so many sweets. I don't mind cooking, so I'm planning to make healthy food at home.\nThird, I enjoy reading, but last year I only finished reading two books. This year I hope to read twelve — one every month.\nAnd finally, I'd like to go hiking in the Chimgan mountains with my friends. They want me to organise the trip, and I've agreed to do it!",
          uz: "O'tgan yil band o'tdi, lekin bu yil ba'zi narsalarni o'zgartirishga qaror qildim.\nBirinchidan, mashina haydashni o'rganmoqchiman. Akam o'rgatishni taklif qildi va baqirmaslikka va'da berdi!\nIkkinchidan, shirinlikni bunchalik ko'p yeyishni tashlashim kerak. Ovqat pishirishga qarshi emasman, shuning uchun uyda sog'lom ovqat qilishni rejalashtiryapman.\nUchinchidan, kitob o'qishni yoqtiraman, lekin o'tgan yili faqat ikkita kitobni o'qib tugatdim. Bu yil o'n ikkitasini — har oy bittadan o'qishga umid qilaman.\nVa nihoyat, do'stlarim bilan Chimyon tog'lariga sayohatga borishni xohlardim. Ular safarni men tashkil qilishimni xohlashadi va men rozi bo'ldim!",
        },
        { t: "check", ex: { k: "tf", q: "Shahzoda's brother is going to teach her to drive.", a: true, why: "*My brother has offered to teach me.*" } },
        { t: "check", ex: { k: "choice", q: "How many books does Shahzoda hope to read this year?", opts: ["Two.", "Ten.", "Twelve.", "One."], a: 2, why: "*This year I hope to read twelve.*" } },
      ],
    },
    {
      title: "Dialog: dam olish kunlari rejasi",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Zarina", en: "What do you want to do this weekend?", uz: "Bu dam olish kunlari nima qilmoqchisan?" },
            { who: "Otabek", en: "I'd like to go fishing at Charvak. Do you enjoy fishing?", uz: "Chorvoqqa baliq oviga borgim keladi. Senga baliq ovi yoqadimi?" },
            { who: "Zarina", en: "Not really. I hate sitting and waiting for hours!", uz: "Unchalik emas. Soatlab o'tirib kutishni yomon ko'raman!" },
            { who: "Otabek", en: "OK. What about going swimming? You love swimming.", uz: "Mayli. Suzishga borsak-chi? Sen suzishni yaxshi ko'rasan." },
            { who: "Zarina", en: "Good idea! But I need to finish writing my report first.", uz: "Yaxshi fikr! Lekin avval hisobotimni yozib tugatishim kerak." },
            { who: "Otabek", en: "No problem. I don't mind waiting. And I want you to try my mum's samsa — she's promised to make some!", uz: "Muammo yo'q. Kutishga qarshi emasman. Onamning somsasini tatib ko'rishingni xohlayman — u qilib berishga va'da berdi!" },
          ],
        },
        { t: "check", ex: { k: "choice", q: "Why doesn't Zarina want to go fishing?", opts: ["She can't swim.", "She hates sitting and waiting.", "She needs to work all weekend.", "She doesn't like Charvak."], a: 1, why: "*I hate sitting and waiting for hours!*" } },
      ],
    },
  ],
  words: [
    { en: "decide", uz: "qaror qilmoq", ipa: "dɪˈsaɪd", pos: "verb", ex: "We decided to stay at home.", exUz: "Uyda qolishga qaror qildik." },
    { en: "hope", uz: "umid qilmoq", ipa: "həʊp", pos: "verb", ex: "I hope to see you soon.", exUz: "Sizni tez orada ko'rishga umid qilaman." },
    { en: "plan", uz: "rejalashtirmoq; reja", ipa: "plæn", pos: "verb / noun", ex: "They plan to open a shop.", exUz: "Ular do'kon ochishni rejalashtirishyapti." },
    { en: "promise", uz: "va'da bermoq; va'da", ipa: "ˈprɒmɪs", pos: "verb / noun", ex: "He promised to call me.", exUz: "U menga qo'ng'iroq qilishga va'da berdi." },
    { en: "agree", uz: "rozi bo'lmoq", ipa: "əˈɡriː", pos: "verb", ex: "My father agreed to help us.", exUz: "Dadam bizga yordam berishga rozi bo'ldi." },
    { en: "offer", uz: "taklif qilmoq", ipa: "ˈɒfə", pos: "verb", ex: "She offered to carry my bag.", exUz: "U sumkamni ko'tarib berishni taklif qildi." },
    { en: "enjoy", uz: "zavqlanmoq, yoqtirmoq", ipa: "ɪnˈdʒɔɪ", pos: "verb", ex: "I enjoy walking in the park.", exUz: "Parkda sayr qilishni yoqtiraman." },
    { en: "finish", uz: "tugatmoq", ipa: "ˈfɪnɪʃ", pos: "verb", ex: "Have you finished eating?", exUz: "Ovqatlanib bo'ldingmi?" },
    { en: "practise", uz: "mashq qilmoq", ipa: "ˈpræktɪs", pos: "verb", ex: "I practise speaking every day.", exUz: "Har kuni gapirishni mashq qilaman." },
    { en: "I don't mind", uz: "qarshi emasman, menga farqi yo'q", ipa: "aɪ dəʊnt maɪnd", pos: "phrase", ex: "I don't mind waiting.", exUz: "Kutishga qarshi emasman." },
  ],
  practice: [
    { k: "match", pairs: [["decide", "qaror qilmoq"], ["promise", "va'da bermoq"], ["agree", "rozi bo'lmoq"], ["offer", "taklif qilmoq"], ["hope", "umid qilmoq"]] },
    { k: "match", pairs: [["enjoy", "zavqlanmoq"], ["finish", "tugatmoq"], ["practise", "mashq qilmoq"], ["plan", "rejalashtirmoq"], ["I don't mind", "qarshi emasman"]] },
    { k: "choice", q: "I enjoy ___ to music in the car.", opts: ["listen", "to listen", "listening", "listened"], a: 2, why: "**enjoy + -ing**." },
    { k: "choice", q: "She has decided ___ a new job.", opts: ["finding", "to find", "find", "for finding"], a: 1, why: "**decide + to + V1**." },
    { k: "choice", q: "\"Bolalarim ingliz tilini o'rganishini xohlayman.\"", opts: ["I want that my children learn English.", "I want my children to learn English.", "I want my children learning English.", "I want my children learn English."], a: 1, why: "**want + kishi + to + V1**." },
    { k: "choice", q: "Qaysi gap **xato**?", opts: ["It started to rain.", "It started raining.", "I'd like going home.", "I love cooking."], a: 2, why: "**would like** faqat **to** bilan: *I'd like **to go** home.*" },
    { k: "fill", q: "My grandfather stopped ___ ten years ago. (smoke)", a: ["smoking"], uz: "Bobom o'n yil oldin chekishni tashlagan.", why: "**stop + -ing** = tashlamoq." },
    { k: "fill", q: "We need ___ buy some bread.", a: ["to"], why: "**need + to + V1**." },
    { k: "fill", q: "Let's go ___ on Saturday! (swim)", a: ["swimming"], why: "**go + -ing**: *go swimming*. *swim* — **m** ikkilanadi." },
    { k: "fill", q: "Do you mind ___ the window? I'm cold. (close)", a: ["closing"], why: "**mind + -ing**." },
    { k: "listen", say: "I don't mind waiting.", opts: ["I don't mind waiting.", "I don't want waiting.", "I don't mind to wait."], a: 0 },
    { k: "tf", q: "**I promised to help him.** — to'g'ri gap.", a: true, why: "**promise + to + V1**." },
    { k: "tf", q: "**He practises to speak English every day.** — to'g'ri gap.", a: false, why: "**practise + -ing**: *He practises **speaking** English.*" },
    { k: "order", uz: "U (she) kitobni o'qib tugatdi.", words: ["She", "finished", "reading", "the", "book."], extra: ["to", "read"] },
    { k: "translate", uz: "Biz Samarqandga borishga qaror qildik.", a: ["We decided to go to Samarkand.", "We have decided to go to Samarkand.", "We've decided to go to Samarkand.", "We decided to visit Samarkand.", "We've decided to visit Samarkand.", "We have decided to visit Samarkand."] },
    { k: "speak", say: "I'd like to go hiking, but I need to finish working first.", uz: "Tog' sayohatiga borgim keladi, lekin avval ishni tugatishim kerak." },
  ],
  quiz: [
    { k: "choice", q: "They plan ___ a café next year.", opts: ["opening", "to open", "open", "to opening"], a: 1, why: "**plan + to + V1**." },
    { k: "choice", q: "Have you finished ___ the car?", opts: ["to wash", "washing", "wash", "washed"], a: 1, why: "**finish + -ing**." },
    { k: "choice", q: "\"Do'stim menga yordam berishni taklif qildi.\"", opts: ["My friend offered helping me.", "My friend offered to help me.", "My friend offered me help to.", "My friend offered that he help me."], a: 1, why: "**offer + to + V1**." },
    { k: "fill", q: "I'm learning ___ drive.", a: ["to"], why: "**learn + to + V1** (ko'nikma)." },
    { k: "fill", q: "Bekzod doesn't enjoy ___ to parties. (go)", a: ["going"] },
    { k: "fill", q: "My mother wants me ___ home early.", a: ["to come", "to be", "to get", "to go"], uz: "Onam uyga erta kelishimni xohlaydi.", why: "**want + me + to + V1**." },
    { k: "listen", say: "She hopes to study abroad.", opts: ["She hopes to study abroad.", "She hopes studying abroad.", "She helps to study abroad."], a: 0 },
    { k: "tf", q: "**like, love, start** dan keyin **to + V1** ham, **-ing** ham to'g'ri.", a: true, why: "*I like swimming = I like to swim.* (Lekin **would like** — faqat **to**.)" },
    { k: "order", uz: "Men har kuni gapirishni mashq qilaman.", words: ["I", "practise", "speaking", "every", "day."], extra: ["to", "speak"], alt: [["Every", "day", "I", "practise", "speaking."]] },
    { k: "translate", uz: "Men ingliz tilini o'rganishni xohlayman.", a: ["I want to learn English.", "I would like to learn English.", "I'd like to learn English.", "I want to study English.", "I'd like to study English.", "I would like to study English."] },
  ],
  summary: [
    "**want, would like, need, hope, plan, decide, learn, promise, agree, offer + to + V1**: *I've decided **to learn** Chinese.*",
    "**enjoy, finish, stop, practise, (don't) mind, go + V-ing**: *I enjoy **cooking**. Let's go **shopping**.*",
    "**like, love, hate, start, begin** — ikkalasi ham to'g'ri; lekin **would like** — faqat **to**.",
    "Boshqa odam haqida: **want + kishi + to + V1** — *I want **you to come*** (*I want that you come* ❌).",
  ],
  homework: "\"Mening bu yilgi rejalarim\" mavzusida Shahzodaning matniga o'xshash 8 ta gap yozing. Kamida 4 ta **to**-fe'l (*decide, hope, plan, want…*) va 3 ta **-ing**-fe'l (*enjoy, finish, stop, practise…*) ishlating. Bitta gap **want someone to** bilan bo'lsin: *My parents want me to…*",
};

export default lesson;
