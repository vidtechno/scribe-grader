import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u30-l2",
  title: "Ellipsis, substitution and avoiding repetition",
  titleUz: "Ellipsis va almashtirish: so do I, neither am I, I think so, to avoid repetition",
  goal: "Gapni takrorlamasdan, **tabiiy** gapirasiz: *So do I. Neither can I. I think so. I hope not. She can swim, but I can't. I'd love to.* Ellipsis (**tushirib qoldirish**) va almashtirish (**so, not, one, do so**) qoidalarini bilasiz va **Neither I can**, **I don't hope so** kabi xatolardan qochasiz.",
  slides: [
    {
      title: "Nega takrorlamaymiz?",
      blocks: [
        { t: "p", md: "Tabiiy ingliz tilida bir xil so'zni qayta-qayta aytmaymiz. Quyidagi ikki suhbatni solishtiring:" },
        {
          t: "compare",
          good: { title: "Tabiiy", items: ["Do you like jazz? — I do. My sister does too.", "Are you coming? — I'd love to.", "Is it going to rain? — I hope not."] },
          bad: { title: "To'g'ri, lekin sun'iy", items: ["Do you like jazz? — I like jazz. My sister likes jazz too.", "Are you coming? — I would love to come.", "Is it going to rain? — I hope that it is not going to rain."] },
        },
        { t: "p", md: "Bunga **ellipsis** (kontekstdan ma'lum so'zlarni tushirish) va **substitution** (so'zni qisqa so'zga almashtirish: *so, not, one, do so*) yordam beradi. B2 da bu — ravon, ona tilida so'zlashuvchiga o'xshash nutqning belgisi." },
        { t: "tip", tone: "info", md: "Qoida oddiy: **tushirilgan qism tinglovchiga allaqachon ma'lum bo'lishi kerak**. Aks holda gap tushunarsiz bo'ladi." },
        { t: "check", ex: { k: "choice", q: "*Would you like to join us? — ___*", opts: ["I'd love to.", "I'd love.", "I'd love to join to.", "I'd love so."], a: 0, why: "Takrorlanadigan fe'l tushiriladi, lekin **to** qoladi: *I'd love to (join you)*." } },
      ],
    },
    {
      title: "So do I / Neither do I",
      blocks: [
        { t: "p", md: "Biror kishining gapiga **«men ham»** deb javob berish uchun **so + yordamchi fe'l + ega** (darak gap) va **neither / nor + yordamchi fe'l + ega** (inkor gap) ishlatiladi. **Yordamchi fe'l** birinchi gapdagi zamonga mos bo'ladi." },
        {
          t: "table", head: ["Birinchi gap", "«Men ham»", "Qoida"], speak: [0, 1],
          rows: [
            ["I like jazz.", "So do I.", "Present Simple → do"],
            ["I'm tired.", "So am I.", "be → am / is / are"],
            ["I've finished.", "So have I.", "have → have / has"],
            ["I went there.", "So did I.", "Past Simple → did"],
            ["I can't swim.", "Neither can I.", "modal → o'sha modal"],
            ["I didn't see it.", "Neither did I.", "inkor → neither"],
          ],
        },
        { t: "p", md: "Tartib doim **yordamchi fe'l oldin, ega keyin**: *So **do I**, Neither **can she**.* Inkor gapda **neither** bilan fe'l **darak** shaklda bo'ladi (qo'sh inkor yo'q): *Neither **can** I*, *Neither **don't** I* emas." },
        { t: "tip", tone: "info", md: "Norasmiy: **Me too** (so do I) va **Me neither** (neither do I). Rasmiyroq: **Nor do I**. Ikkala shakl ham to'g'ri, lekin *Me too* ni inkor gapga javob qilmang." },
        { t: "examples", items: [
          { en: "I've never been to Japan. — Neither have I.", uz: "Men Yaponiyada hech bo'lmaganman. — Men ham bo'lmaganman." },
          { en: "She works in a bank, and so does her husband.", uz: "U bankda ishlaydi, eri ham." },
          { en: "He can't drive, and neither can his sister.", uz: "U mashina haydamaydi, opasi ham haydamaydi." },
        ] },
        { t: "check", ex: { k: "choice", q: "*I can't cook.* — ___", opts: ["Neither can I.", "So can I.", "Neither I can.", "So I can't."], a: 0, why: "Inkor gap + «men ham» = **Neither + can + I**. *So can I* — «men pishira olaman» degani bo'lib qoladi." } },
        { t: "check", ex: { k: "fill", q: "I'll call you tomorrow. — So ___ I.", a: ["will"], uz: "Men ham.", why: "Birinchi gapda **will** bor, shuning uchun: *So **will** I.*" } },
      ],
    },
    {
      title: "Ellipsis: and, but, or va qisqa javoblar",
      blocks: [
        { t: "p", md: "**And / but / or** dan keyin takrorlanadigan qismni tushiramiz. Faqat **yordamchi fe'l yoki modal** qoladi:" },
        {
          t: "examples", items: [
            { en: "She can swim, but I can't.", uz: "U suzishni biladi, men esa bilmayman." },
            { en: "He said he would help, and he did.", uz: "U yordam beraman dedi va yordam berdi." },
            { en: "You can pay now or you can pay later.", uz: "Hozir ham, keyinroq ham to'lashingiz mumkin.", note: "Ikkinchi *you can* ni tushirsa ham bo'ladi: *You can pay now or later.*" },
            { en: "I didn't go, but I wanted to.", uz: "Bormadim, lekin xohlagan edim.", note: "**to** qoladi, *go* tushadi." },
          ],
        },
        { t: "p", md: "**To-infinitive**dan keyin fe'lni tushiramiz, lekin **to** ni **qoldiramiz**: *Do you want to come? — I'd love **to**. I'd like **to**, but I can't.*" },
        { t: "p", md: "**Do so** — rasmiy uslubda: *Anyone who wishes to apply may **do so** online.* («Murojaat qilishni xohlovchi buni onlayn qila oladi»). Og'zaki nutqda: *do it, do that*." },
        { t: "tip", tone: "warn", md: "**Qaysi so'z qoladi?** Birinchi gapda yordamchi fe'l bo'lsa, o'sha qoladi (*can, have, is*). Faqat oddiy fe'l bo'lsa (*like, work*), **do / does / did** keladi: *He likes tea, but I don't.*" },
        { t: "check", ex: { k: "fill", q: "My brother likes spicy food, but I ___.", a: ["don't", "do not"], uz: "Akam achchiq ovqatni yaxshi ko'radi, men esa yo'q.", why: "Birinchi gapda oddiy fe'l (*likes*), demak: **don't**." } },
        { t: "check", ex: { k: "choice", q: "*Did you phone her? — No, I meant ___, but I forgot.*", opts: ["to", "to call her to", "to phone to", "so"], a: 0, why: "Fe'l tushadi, lekin **to** qoladi: *I meant to*." } },
      ],
    },
    {
      title: "I think so, I hope not va one / ones",
      blocks: [
        { t: "p", md: "Savolga qisqa javob berganda **so** butun gapning o'rnini bosadi: *Will it rain? — I think **so**.* Inkor ma'noda **not** ishlatiladi: *I hope **not**.*" },
        {
          t: "table", head: ["Ijobiy", "Inkor", "Izoh"], speak: [0, 1],
          rows: [
            ["I think so.", "I don't think so.", "think, believe, expect, suppose: inkor *don't* bilan"],
            ["I hope so.", "I hope not.", "hope, be afraid: inkor **not** bilan"],
            ["I'm afraid so.", "I'm afraid not.", "yomon xabar yoki kechirim"],
            ["I suppose so.", "I suppose not.", "ikkilanib rozilik"],
          ],
        },
        { t: "tip", tone: "warn", md: "**Hope** va **be afraid** bilan inkor shakl faqat **I hope not / I'm afraid not**. *I don't hope so* — xato. **Think** bilan esa *I don't think so* aytiladi (*I think not* — juda rasmiy)." },
        { t: "p", md: "**One / ones** — takrorlanadigan sanaladigan otning o'rniga: *Which bag is yours? — The red **one**. I prefer these shoes to the black **ones**.* Tipik xato: sifatdan keyin otni ham, **one** ni ham tushirib qoldirish (*the blue*)." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I hope not.", "I don't think so.", "I like the blue one.", "I prefer this coffee to the one we had yesterday."] },
          bad: { title: "Xato", items: ["I don't hope so.", "I think no.", "I like the blue.", "I prefer these shoes to the black."] },
        },
        { t: "check", ex: { k: "choice", q: "*Is the shop open on Sunday? — ___ (yo'q deb o'ylayman)*", opts: ["I don't think so.", "I think no.", "I think not so.", "I don't think."], a: 0, why: "Think bilan: **I don't think so**." } },
        { t: "check", ex: { k: "tf", q: "*Will we be late? — I don't hope so.* gapi to'g'ri.", a: false, why: "Hope bilan: **I hope not**. *Don't hope so* ishlatilmaydi." } },
      ],
    },
    {
      title: "Tipik xatolar (o'zbek tilidan interferensiya)",
      blocks: [
        { t: "p", md: "O'zbek tilida «men ham» = *men ham*, «umid qilmayman» = *umid qilmayman*. Shu sababli inglizchada quyidagi xatolar tez-tez uchraydi:" },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I can't swim. — Neither can I.", "I haven't seen it. — Neither have I.", "Will it rain? — I hope not.", "Will he win? — I don't think so."] },
          bad: { title: "Xato", items: ["I can't swim. — Neither I can.", "I haven't seen it. — So have I.", "Will it rain? — I don't hope so.", "Will he win? — I think no."] },
        },
        { t: "tip", tone: "warn", md: "**1)** *Neither* dan keyin **yordamchi fe'l ega oldidan** keladi. **2)** Inkorga **so** bilan javob bermang, **neither** kerak. **3)** *Hope* + **not**. **4)** *Think no* yo'q: **don't think so**." },
        { t: "check", ex: { k: "fix", wrong: "I can't drive. — Neither I can.", a: ["I can't drive. — Neither can I.", "I can't drive. Neither can I."], hint: "tartib", why: "**Neither + can + I**: yordamchi fe'l ega oldida." } },
        { t: "check", ex: { k: "fix", wrong: "I haven't finished. — So have I.", a: ["I haven't finished. — Neither have I.", "I haven't finished. — Nor have I.", "I haven't finished. Neither have I.", "I haven't finished. Nor have I."], hint: "so yoki neither?", why: "Birinchi gap inkor, demak **neither / nor** kerak." } },
        { t: "check", ex: { k: "fix", wrong: "Will it snow? — I don't hope so.", a: ["Will it snow? — I hope not.", "Will it snow? I hope not."], hint: "hope bilan inkor", why: "Hope bilan inkor: **I hope not**." } },
        { t: "check", ex: { k: "fix", wrong: "Is he at home? — I think no.", a: ["Is he at home? — I don't think so.", "Is he at home? I don't think so."], hint: "think bilan inkor", why: "**I don't think so**: think bilan inkor shu tarzda." } },
      ],
    },
    {
      title: "O'qing: Ikki aka-uka",
      blocks: [
        {
          t: "text", title: "My brother and I", voice: "george",
          en: "My brother and I are very different. He loves hiking, but I don't. He gets up at six, whereas I never do. He likes spicy food, and so does his wife, but my wife and I prefer mild dishes. Last summer he invited us to a mountain camp. I'd have loved to go, but I couldn't, because I had a deadline. My wife wanted to as well, but she had to look after her mother. He asked, 'Will you come next year?' I said, 'I hope so.' To be fair, I think I will. Not because I enjoy sleeping in a tent, which I don't, but because a trip together is a good excuse to see him. He has a lot of tents. The old one is cheap; the new ones cost much more.",
          uz: "Akam bilan men juda boshqachamiz. U tog'ga chiqishni yaxshi ko'radi, men esa yo'q. U oltida turadi, men esa hech turmayman. U achchiq ovqatni yaxshi ko'radi, xotini ham, lekin xotinim bilan men yumshoq taomlarni afzal ko'ramiz. O'tgan yozda u bizni tog' lageriga taklif qildi. Borishni juda xohlardim, lekin bora olmadim, chunki muddatim bor edi. Xotinim ham xohlagan edi, lekin onasiga qarashi kerak edi. U so'radi: «Kelasi yil kelasizlarmi?» Men: «Umid qilaman», dedim. Rostini aytsam, menimcha, boraman. Chodirda uxlashni yoqtirganim uchun emas, uni yoqtirmayman, balki birga sayohat qilish uni ko'rish uchun yaxshi bahona. Uning chodirlari ko'p. Eskisi arzon, yangilari ancha qimmat.",
        },
        { t: "check", ex: { k: "choice", q: "Why couldn't the writer go to the mountain camp?", opts: ["He had a deadline at work.", "He doesn't like his brother.", "His wife was ill.", "The camp was too expensive."], a: 0, why: "*I'd have loved to go, but I couldn't, because I had a deadline.*" } },
        { t: "check", ex: { k: "tf", q: "In the text, *The old one is cheap; the new ones cost much more* uses *one / ones* to avoid repeating *tent / tents*.", a: true, why: "**one** = tent (birlik), **ones** = tents (ko'plik)." } },
      ],
    },
    {
      title: "Dialog: Konsert chiptasi",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Ben", en: "Are you going to the concert on Friday?", uz: "Juma kuni konsertga borasanmi?" },
            { who: "Sara", en: "I'd love to, but I haven't got a ticket yet.", uz: "Juda xohlardim, lekin hali chiptam yo'q." },
            { who: "Ben", en: "Neither have I. Do you think they've sold out?", uz: "Menda ham yo'q. Sotilib bo'lgan deb o'ylaysanmi?" },
            { who: "Sara", en: "I'm afraid so. My sister tried to buy one yesterday and couldn't.", uz: "Afsuski, shunday. Singlim kecha olmoqchi bo'lib, ololmadi." },
            { who: "Ben", en: "What a pity. I really wanted to go. Is there a cheaper concert, then?", uz: "Qanday afsus. Men juda borishni xohlagan edim. Unda arzonroq konsert bormi?" },
            { who: "Sara", en: "There's a small one on Saturday. The seats are better than the ones at the big hall.", uz: "Shanba kuni kichik konsert bor. U yerdagi o'rindiqlar katta zaldagidan yaxshi." },
            { who: "Ben", en: "Sounds good. Shall we go?", uz: "Yaxshi eshitiladi. Boramizmi?" },
            { who: "Sara", en: "Why not? I'll book two tickets, if you like.", uz: "Nega yo'q? Xohlasang, ikkita chipta band qilaman." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "What does Sara mean by *I'm afraid so*?", opts: ["The tickets have probably sold out.", "She is scared of concerts.", "She doesn't want to go.", "The concert is cancelled."], a: 0, why: "*I'm afraid so* = «afsuski, shunday» (**sold out** — yomon xabar)." } },
        { t: "check", ex: { k: "choice", q: "In the dialogue, *the ones at the big hall* means:", opts: ["the seats at the big hall", "the tickets of Friday", "the concerts on Saturday", "the people at the hall"], a: 0, why: "**ones** = *seats* (oldingi gapdagi ko'plik ot)." } },
      ],
    },
  ],
  words: [
    { en: "likewise", uz: "xuddi shunday, sizga ham", ipa: "ˈlaɪk.waɪz", pos: "adv", ex: "Nice to meet you. — Likewise.", exUz: "Tanishganimdan xursandman. — Menga ham." },
    { en: "same here", uz: "menda ham shunday", ipa: "seɪm hɪə", pos: "phrase", ex: "I'm exhausted. — Same here.", exUz: "Juda charchadim. — Menda ham shunday." },
    { en: "fair enough", uz: "to'g'ri aytasiz, mayli", ipa: "feər ɪˈnʌf", pos: "phrase", ex: "You'd rather stay at home? Fair enough.", exUz: "Uyda qolishni afzal ko'rasizmi? Mayli, tushunarli." },
    { en: "by all means", uz: "marhamat, albatta", ipa: "baɪ ɔːl miːnz", pos: "phrase", ex: "May I sit here? — By all means.", exUz: "Shu yerga o'tirsam bo'ladimi? — Marhamat." },
    { en: "not necessarily", uz: "shart emas, har doim ham emas", ipa: "nɒt ˌnes.əˈser.əl.i", pos: "phrase", ex: "Is expensive food always better? — Not necessarily.", exUz: "Qimmat ovqat har doim yaxshimi? — Har doim ham emas." },
    { en: "I'm afraid not", uz: "afsuski, yo'q", ipa: "aɪm əˈfreɪd nɒt", pos: "phrase", ex: "Is the manager free? — I'm afraid not.", exUz: "Menejer bo'shmi? — Afsuski, yo'q." },
    { en: "I suppose so", uz: "menimcha, shunday (ikkilanib)", ipa: "aɪ səˈpəʊz səʊ", pos: "phrase", ex: "Can you help me? — I suppose so.", exUz: "Yordam bera olasizmi? — Mayli, bo'ladi." },
    { en: "I couldn't agree more", uz: "bunga to'liq qo'shilaman", ipa: "aɪ ˈkʊd.ənt əˈɡriː mɔː", pos: "phrase", ex: "Teachers need more support. — I couldn't agree more.", exUz: "O'qituvchilarga ko'proq yordam kerak. — To'liq qo'shilaman." },
    { en: "no wonder", uz: "ajablanarli emas", ipa: "nəʊ ˈwʌn.də", pos: "phrase", ex: "He works twelve hours a day. No wonder he's tired.", exUz: "U kuniga o'n ikki soat ishlaydi. Charchaganiga ajablanmasa ham bo'ladi." },
    { en: "that goes without saying", uz: "bu o'z-o'zidan ma'lum", ipa: "ðæt ɡəʊz wɪðˈaʊt ˈseɪ.ɪŋ", pos: "phrase", ex: "That goes without saying: safety comes first.", exUz: "Bu o'z-o'zidan ma'lum: xavfsizlik birinchi o'rinda." },
  ],
  practice: [
    { k: "choice", q: "*I'm exhausted.* — ___", opts: ["So am I.", "So do I.", "Neither am I.", "So I am."], a: 0, why: "Birinchi gapda **be** (*am*), shuning uchun **So am I**." },
    { k: "fill", q: "I don't eat meat. — Neither ___ I.", a: ["do"], uz: "Men ham go'sht yemayman.", why: "Present Simple inkor, oddiy fe'l: **Neither do I**." },
    { k: "choice", q: "*Will the train be late? — ___ (umid qilamanki, yo'q)*", opts: ["I hope not.", "I don't hope so.", "I hope no.", "I not hope."], a: 0, why: "Hope bilan inkor: **I hope not**." },
    { k: "listen", say: "She can swim, but I can't.", opts: ["She can swim, but I can't.", "She can't swim, but I can.", "She can swim, but I can.", "She can swim, and I can't."], a: 0, why: "Qarama-qarshilik: **but I can't** (ellipsis: *swim* tushirilgan)." },
    { k: "order", uz: "Opam shifokor, akam ham shifokor.", words: ["My", "sister", "is", "a", "doctor,", "and", "so", "is", "my", "brother."], extra: ["does", "are"], why: "Birinchi qismda **be** (*is*), shuning uchun **and so is my brother**." },
    { k: "fix", wrong: "I can't sing. — Neither I can.", a: ["I can't sing. — Neither can I.", "I can't sing. Neither can I."], hint: "tartib", why: "**Neither can I**: yordamchi fe'l oldin, ega keyin." },
    { k: "fill", q: "Do you want to come with us? — I'd love ___, but I'm busy.", a: ["to"], uz: "Siz bilan kelishni juda xohlardim, lekin bandman.", why: "Fe'l tushadi, lekin **to** qoladi." },
    { k: "tf", q: "*I haven't been to London. — So have I.* gapi «men ham bo'lmaganman» degan ma'noni beradi.", a: false, why: "**So have I** = «men bo'lganman». Inkorga **Neither have I** deyiladi." },
    { k: "translate", uz: "Yomg'ir yog'adi deb o'ylamayman.", a: ["I don't think so.", "I don't think it will rain.", "I don't think it'll rain.", "I don't think it's going to rain."], why: "Qisqa javob: **I don't think so**." },
    { k: "match", pairs: [["I'm afraid not", "afsuski, yo'q"], ["no wonder", "ajablanarli emas"], ["by all means", "marhamat, albatta"], ["not necessarily", "har doim ham emas"], ["same here", "menda ham shunday"]] },
    { k: "fix", wrong: "Will you be late? — I don't hope so.", a: ["Will you be late? — I hope not.", "Will you be late? I hope not."], hint: "hope", why: "**I hope not**." },
    { k: "choice", q: "Which sentence avoids repetition correctly?", opts: ["My sister speaks French, and so does my brother.", "My sister speaks French, and so speaks my brother.", "My sister speaks French, and so my brother does speak.", "My sister speaks French, and does my brother so."], a: 0, why: "**so + does + ega**: *and so does my brother*." },
    { k: "fill", q: "Which pen is yours? — The blue ___.", a: ["one"], uz: "Qaysi ruchka seniki? — Ko'k.", why: "Birlikdagi sanaladigan ot o'rnida: **one**." },
    { k: "dictation", say: "I couldn't agree more with what you said.", uz: "Aytganlaringizga to'liq qo'shilaman.", why: "**I couldn't agree more** = to'liq qo'shilaman." },
    { k: "translate", uz: "U borishni xohlagan edi, lekin bora olmadi.", a: ["She wanted to, but she couldn't.", "He wanted to, but he couldn't.", "She wanted to go, but she couldn't.", "He wanted to go, but he couldn't."], why: "Ellipsis: **wanted to**, *go* tushirilgan." },
    { k: "speak", say: "I'd love to, but I'm afraid I can't. Maybe next time.", uz: "Juda xohlardim, lekin afsuski, bora olmayman. Ehtimol, keyingi safar." },
  ],
  quiz: [
    { k: "choice", q: "*I've never tried sushi.* — ___", opts: ["Neither have I.", "So have I.", "So I have.", "Neither I have."], a: 0, why: "Inkor + Present Perfect: **Neither have I**." },
    { k: "choice", q: "*Is the museum open on Mondays? — ___*", opts: ["I'm afraid not.", "I'm afraid no.", "I don't afraid.", "I'm not afraid so."], a: 0, why: "Afsuski, yo'q: **I'm afraid not**." },
    { k: "fill", q: "He enjoys cooking, and so ___ his wife.", a: ["does"], uz: "U pishirishni yaxshi ko'radi, xotini ham.", why: "Third person Present Simple: **so does**." },
    { k: "fill", q: "I don't like horror films, but my sister ___.", a: ["does"], uz: "Men qo'rqinchli filmlarni yoqtirmayman, singlim esa yoqtiradi.", why: "Birinchi gap inkor, ikkinchisi qarama-qarshi darak: **does**." },
    { k: "fix", wrong: "I think no. He isn't coming.", a: ["I don't think so. He isn't coming.", "I don't think so. He's not coming."], hint: "think + so", why: "**I don't think so**." },
    { k: "choice", q: "Which reply fits *Nice to meet you*?", opts: ["Likewise.", "By all means.", "No wonder.", "Not necessarily."], a: 0, why: "Tanishuvda: **Likewise** = «menga ham»." },
    { k: "translate", uz: "Men ham charchadim.", a: ["So am I.", "I'm tired too.", "I am tired too.", "Me too.", "Same here."], why: "Birinchi gap *I'm tired* bo'lsa: **So am I**." },
    { k: "tf", q: "*I like the red dress better than the blue one.* gapida *one* = dress.", a: true, why: "**one** takrorlanayotgan sanaladigan otni (*dress*) almashtiradi." },
    { k: "order", uz: "Men ham buni ko'rmaganman.", words: ["Neither", "have", "I."], extra: ["So", "do"], why: "Inkor + Present Perfect: **Neither have I**." },
    { k: "choice", q: "Anyone who wishes to enter the competition may ___ online. (rasmiy)", opts: ["do so", "do it so", "so do", "do that so"], a: 0, why: "Rasmiy uslubda **do so** = shuni qilmoq." },
  ],
  summary: [
    "«Men ham»: **So + yordamchi fe'l + ega** (*So do I*); inkorga: **Neither / Nor + yordamchi fe'l + ega** (*Neither can I*).",
    "Yordamchi fe'l birinchi gapdagi zamon va fe'lga mos: *I'm… → So am I; I've… → So have I; I went… → So did I.*",
    "Ellipsis: *She can swim, but I can't.* To-infinitivdan keyin **to** qoladi: *I'd love to.*",
    "Qisqa javob: **I think so / I don't think so; I hope so / I hope not; I'm afraid so / not.** *I don't hope so* — xato.",
    "**One / ones** sanaladigan otni almashtiradi: *the red one*, *the cheap ones*.",
  ],
  homework: "Do'stingiz yoki oila a'zongiz bilan 2 daqiqalik suhbatni **ovoz chiqarib** yozing (8–10 qator): har bir «men ham» javobida **so / neither**, kamida bitta **I hope not / I think so** va bitta **one / ones** ishlating. Keyin suhbatni ikki rolda o'qing. Bir kun davomida eshitgan inglizcha gaplaringizda «So do I» yoki «Neither do I» o'rinlarini toping.",
};

export default lesson;
