import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u7-l2",
  title: "like, love, hate + -ing",
  titleUz: "Yoqtirish: like, love, hate + -ing",
  goal: "Nimani yoqtirishingiz va yoqtirmasligingizni aniq darajada aytasiz: **I love cooking. I don't mind ironing. I can't stand getting up early.** Fe'lga **-ing** qo'shish imlosini va bo'sh vaqt haqidagi savollarni o'rganasiz.",
  slides: [
    {
      title: "like / love / hate + fe'l-ing",
      blocks: [
        { t: "p", md: "Beginnerda *I like tea. I like music.* — **like + ot** ni o'rgandik. Endi **harakatni** yoqtirish haqida gapiramiz. Buning uchun fe'lga **-ing** qo'shiladi:" },
        {
          t: "examples", items: [
            { en: "I like reading.", uz: "Kitob o'qishni yoqtiraman." },
            { en: "My mum loves cooking.", uz: "Onam ovqat pishirishni juda yaxshi ko'radi." },
            { en: "We enjoy travelling.", uz: "Sayohat qilishni yoqtiramiz (zavq olamiz)." },
            { en: "He hates getting up early.", uz: "U erta turishni yomon ko'radi." },
            { en: "I don't like doing the washing-up.", uz: "Idish yuvishni yoqtirmayman." },
          ],
        },
        { t: "tip", tone: "info", md: "O'zbekchada ham shunday: *o'qi**sh**ni yoqtiraman*. **-sh** (o'qish, yozish) ≈ inglizcha **-ing** (reading, writing). Shunday qilib: **yoqtirish fe'li + fe'l-ing**." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I like swimming.", "She loves dancing.", "They enjoy playing chess."] },
          bad: { title: "Xato", items: ["I like swim.", "She loves dance.", "They enjoy play chess."] },
        },
        { t: "check", ex: { k: "choice", q: "\"Men rasm chizishni yoqtiraman.\"", opts: ["I like draw.", "I like drawing.", "I am like drawing.", "I likes drawing."], a: 1, why: "**like + fe'l-ing**: *I like drawing.* *I am like* — xato: Present Simple da **am** kerak emas." } },
      ],
    },
    {
      title: "Daraja: ❤❤ dan ✖✖ gacha",
      blocks: [
        { t: "p", md: "Faqat *like* va *don't like* — juda zerikarli. Mana his-tuyg'uning butun shkalasi, eng kuchlidan eng yomonigacha:" },
        {
          t: "table", head: ["Ibora", "Ma'nosi", "Misol"],
          rows: [
            ["love", "juda yaxshi ko'raman ❤❤", "I love dancing."],
            ["really like / enjoy", "juda yoqtiraman ❤", "I really like cooking. / I enjoy cooking."],
            ["like", "yoqtiraman 🙂", "I like walking in the park."],
            ["don't mind", "qarshi emasman, mayli 😐", "I don't mind ironing."],
            ["don't like", "yoqtirmayman 🙁", "I don't like shopping."],
            ["hate", "yomon ko'raman ✖", "I hate waiting."],
            ["can't stand", "umuman chiday olmayman ✖✖", "I can't stand getting up at six."],
          ],
          speak: [0, 2],
        },
        { t: "tip", tone: "warn", md: "**enjoy, don't mind, can't stand** dan keyin **faqat -ing**! \n✅ *I enjoy swimming.* ❌ *I enjoy to swim.* \n**like, love, hate** dan keyin **to + fe'l** ham uchraydi (*I like to swim*), lekin hobbi haqida gapirganda **-ing** eng tabiiy va xavfsiz tanlov." },
        { t: "tip", tone: "info", md: "**don't mind** = \"menga farqi yo'q, qilsam ham bo'ladi\". *Do you mind?* ham shu fe'ldan. **can't stand** so'zma-so'z — \"turolmayman\", ma'nosi — **chiday olmayman**." },
        { t: "check", ex: { k: "choice", q: "Qaysi gap **xato**?", opts: ["I enjoy reading.", "I don't mind cooking.", "I enjoy to read.", "I can't stand waiting."], a: 2, why: "**enjoy** dan keyin faqat **-ing**: *I enjoy reading.*" } },
      ],
    },
    {
      title: "Imlo: fe'l + -ing",
      blocks: [
        { t: "p", md: "Ko'pchilik fe'llarga shunchaki **-ing** qo'shiladi. Lekin uchta qoida bor — ular yozuvda ko'p xatoga sabab bo'ladi:" },
        {
          t: "table", head: ["Qoida", "Fe'l", "-ing shakli"],
          rows: [
            ["oddiy: + ing", "read, cook, play, fish", "reading, cooking, playing, fishing"],
            ["oxiridagi -e tushadi", "dance, ride, write, make", "dancing, riding, writing, making"],
            ["qisqa: undosh-unli-undosh → undosh ikkilanadi", "swim, run, shop, sit, get", "swimming, running, shopping, sitting, getting"],
            ["-ie → -ying", "lie, die", "lying, dying"],
            ["Britaniya: -l ikkilanadi", "travel", "travelling"],
          ],
          speak: [2],
        },
        { t: "tip", tone: "warn", md: "Ikkilanish faqat **bir bo'g'inli** (yoki urg'u oxirida bo'lgan) fe'llarda: *swim → swi**mm**ing*. Lekin *listen → listening*, *visit → visiting* (urg'u boshida). **w, x, y** hech qachon ikkilanmaydi: *playing, fixing, snowing*." },
        {
          t: "sounds", items: [
            { label: "-ing", say: "swimming", uz: "**-ing** = **\"ing\"**, lekin oxiridagi **g** deyarli eshitilmaydi — burun orqali **ŋ** (o'zbekcha *ming*, *tong* dagi \"ng\"). ❌ \"swimmin-g-g\" deb **g** ni urib aytmang.", examples: ["swimming", "reading", "shopping"] },
            { label: "-ing urg'usi", say: "travelling", uz: "**-ing** hech qachon urg'u olmaydi: **TRA**-vel-ling, **DAN**-cing, **COOK**-ing.", examples: ["travelling", "dancing", "cooking"] },
          ],
        },
        { t: "check", ex: { k: "fill", q: "My brother loves ___. He goes to the pool every day. (swim)", a: ["swimming"], uz: "Akam suzishni juda yaxshi ko'radi. Har kuni basseynga boradi.", why: "**swim** → *m* ikkilanadi: **swimming**." } },
        { t: "check", ex: { k: "fill", q: "I don't mind ___ dinner. (make)", a: ["making"], uz: "Kechki ovqat tayyorlashga qarshi emasman.", why: "**-e** tushadi: *make → making*. **don't mind** → faqat -ing." } },
      ],
    },
    {
      title: "he / she, inkor va savollar",
      blocks: [
        { t: "p", md: "Yoqtirish fe'li — oddiy Present Simple fe'li. Demak, barcha Present Simple qoidalari ishlaydi:" },
        {
          t: "table", head: ["Gap turi", "Misol", "O'zbekcha"],
          rows: [
            ["he / she (+s)", "She likes cooking. He enjoys fishing.", "U ovqat pishirishni yoqtiradi. U baliq ovini yoqtiradi."],
            ["inkor", "I don't like ironing. He doesn't like waiting.", "Dazmollashni yoqtirmayman. U kutishni yoqtirmaydi."],
            ["savol", "Do you like dancing? — Yes, I do. / No, I don't.", "Raqsga tushishni yoqtirasizmi? — Ha. / Yo'q."],
            ["Wh-savol", "What do you like doing in your free time?", "Bo'sh vaqtingizda nima qilishni yoqtirasiz?"],
          ],
          speak: [1],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["She likes shopping.", "He doesn't like cooking.", "Does she enjoy travelling?", "I don't like running."] },
          bad: { title: "Xato", items: ["She like shopping.", "He doesn't likes cooking.", "Does she enjoys travelling?", "I am not like running."] },
        },
        { t: "tip", tone: "warn", md: "O'zbek o'quvchilarining eng ko'p xatosi: ❌ *I am like…* / ❌ *I'm not like…*. Bu \"yoqtiraman\" emas! **like** — fe'l, **am** kerak emas: ✅ *I like…* / ✅ *I don't like…*." },
        { t: "tip", tone: "info", md: "**like** ning yonidagi **ot** va **olmosh** ham bo'lishi mumkin: *I like football. I love it! She hates them.* Lekin **harakat** bo'lsa — **-ing**." },
        { t: "check", ex: { k: "choice", q: "\"Akangiz baliq ovini yoqtiradimi?\"", opts: ["Does your brother like fishing?", "Does your brother likes fishing?", "Is your brother like fishing?", "Do your brother like fishing?"], a: 0, why: "**Does** + ega + fe'l (**-s** siz) + **-ing**." } },
      ],
    },
    {
      title: "like va would like — farqi",
      blocks: [
        { t: "p", md: "Bir harfdan iborat farq — lekin ma'no butunlay boshqa! (would like ni 6-darsda batafsil o'rganamiz.)" },
        {
          t: "examples", items: [
            { en: "I like dancing.", uz: "Raqsga tushishni yoqtiraman. (umuman, doim)" },
            { en: "I'd like to dance.", uz: "Raqsga tushgim kelyapti / tushmoqchiman. (hozir, istak)" },
            { en: "Do you like coffee?", uz: "Qahvani yoqtirasizmi? (umuman)" },
            { en: "Would you like a coffee?", uz: "Qahva ichasizmi? (taklif, hozir)" },
          ],
        },
        { t: "tip", tone: "good", md: "Qoidaga e'tibor bering: **like + -ing** (umumiy did), **would like + to + fe'l** (hozirgi istak). ❌ *I'd like dancing now.* ✅ *I'd like to dance now.*" },
        { t: "check", ex: { k: "choice", q: "Kafeda ofitsiant so'raydi: \"Choy ichasizmi?\"", opts: ["Do you like tea?", "Would you like some tea?", "Are you like tea?", "Do you like drinking tea?"], a: 1, why: "Taklif — **Would you like…?** *Do you like tea?* — choyni umuman yoqtirasizmi, degan savol." } },
      ],
    },
    {
      title: "O'qing: Mening bo'sh vaqtim",
      blocks: [
        {
          t: "text", title: "Kamola's blog: My free time",
          en: "Hi! I'm Kamola from Namangan. I'm a nurse, so I work long hours. But I love my free time!\nAt weekends I enjoy sleeping late and having a big breakfast with my family. I really like gardening — my grandfather has a beautiful garden with roses and apricot trees. I also love taking photos of flowers.\nMy husband likes fishing, but I can't stand it. Sitting by the river for five hours? No, thank you!\nWhat about housework? I don't mind cooking, but I hate ironing. And my son? He loves chatting with his friends online and he hates tidying his room!",
          uz: "Salom! Men Namanganlik Kamolaman. Hamshiraman, shuning uchun uzoq soat ishlayman. Lekin bo'sh vaqtimni juda yaxshi ko'raman!\nDam olish kunlari kech uxlashni va oilam bilan katta nonushta qilishni yoqtiraman. Bog'dorchilikni juda yoqtiraman — bobomning atirgul va o'rik daraxtlari bor chiroyli bog'i bor. Gullarni suratga olishni ham yaxshi ko'raman.\nErim baliq ovini yoqtiradi, lekin men unga chiday olmayman. Daryo bo'yida besh soat o'tirish? Yo'q, rahmat!\nUy ishlarichi? Ovqat pishirishga qarshi emasman, lekin dazmollashni yomon ko'raman. O'g'limchi? U do'stlari bilan internetda suhbatlashishni yaxshi ko'radi, xonasini yig'ishtirishni esa yomon ko'radi!",
        },
        { t: "check", ex: { k: "tf", q: "Kamola enjoys fishing.", a: false, why: "*My husband likes fishing, but **I can't stand it**.*" } },
        { t: "check", ex: { k: "choice", q: "What does Kamola think about cooking?", opts: ["She loves it.", "She doesn't mind it.", "She hates it.", "She can't stand it."], a: 1, why: "*I **don't mind** cooking, but I hate ironing.*" } },
      ],
    },
    {
      title: "Dialog: Yangi hamkasb bilan",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Lola", en: "So, Timur, what do you like doing in your free time?", uz: "Xo'sh, Temur, bo'sh vaqtingda nima qilishni yoqtirasan?" },
            { who: "Timur", en: "I love playing football. And I enjoy cooking too.", uz: "Futbol o'ynashni juda yaxshi ko'raman. Ovqat pishirishni ham yoqtiraman." },
            { who: "Lola", en: "Really? What do you like cooking?", uz: "Rostdanmi? Nima pishirishni yoqtirasan?" },
            { who: "Timur", en: "Plov, of course! But I hate washing the dishes after it.", uz: "Albatta palov! Lekin keyin idish yuvishni yomon ko'raman." },
            { who: "Lola", en: "Ha-ha, me too! I don't mind cooking, but I can't stand washing up.", uz: "Ha-ha, men ham! Ovqat pishirishga qarshi emasman, lekin idish yuvishga chiday olmayman." },
            { who: "Timur", en: "And you? Do you like sport?", uz: "Senchi? Sportni yoqtirasanmi?" },
            { who: "Lola", en: "Not really. I prefer reading and going for long walks.", uz: "Unchalik emas. Kitob o'qish va uzoq sayr qilishni afzal ko'raman." },
          ],
        },
        { t: "tip", tone: "good", md: "Javobni yumshatish uchun: **Not really.** (Unchalik emas.) **Me too!** (Men ham!) — inkor gapga qo'shilish uchun: **Me neither.** (Men ham yo'q.)" },
        { t: "check", ex: { k: "tf", q: "Timur loves washing the dishes.", a: false, why: "*I **hate** washing the dishes.*" } },
      ],
    },
  ],
  words: [
    { en: "enjoy", uz: "zavq olmoq, yoqtirmoq", ipa: "ɪnˈdʒɔɪ", pos: "verb", ex: "I enjoy reading in the evening.", exUz: "Kechqurun kitob o'qishni yoqtiraman." },
    { en: "don't mind", uz: "qarshi emasman, mayli", ipa: "dəʊnt ˈmaɪnd", pos: "phrase", ex: "I don't mind washing the car.", exUz: "Mashina yuvishga qarshi emasman." },
    { en: "can't stand", uz: "chiday olmaslik, umuman yoqtirmaslik", ipa: "kɑːnt ˈstænd", pos: "phrase", ex: "She can't stand waiting.", exUz: "U kutishga chiday olmaydi." },
    { en: "free time", uz: "bo'sh vaqt", ipa: "ˌfriː ˈtaɪm", pos: "noun", ex: "What do you do in your free time?", exUz: "Bo'sh vaqtingizda nima qilasiz?" },
    { en: "shopping", uz: "xarid qilish", ipa: "ˈʃɒp.ɪŋ", pos: "noun", ex: "My sister loves shopping.", exUz: "Singlim xarid qilishni juda yaxshi ko'radi." },
    { en: "gardening", uz: "bog'dorchilik", ipa: "ˈɡɑː.dən.ɪŋ", pos: "noun", ex: "My grandfather enjoys gardening.", exUz: "Bobom bog'dorchilikni yoqtiradi." },
    { en: "fishing", uz: "baliq ovi", ipa: "ˈfɪʃ.ɪŋ", pos: "noun", ex: "They go fishing on Sundays.", exUz: "Ular yakshanba kunlari baliq oviga borishadi." },
    { en: "chat", uz: "suhbatlashmoq, gaplashmoq", ipa: "tʃæt", pos: "verb", ex: "I like chatting with my friends.", exUz: "Do'stlarim bilan suhbatlashishni yoqtiraman." },
    { en: "relax", uz: "dam olmoq, hordiq chiqarmoq", ipa: "rɪˈlæks", pos: "verb", ex: "I relax at home on Sundays.", exUz: "Yakshanba kunlari uyda dam olaman." },
    { en: "take photos", uz: "suratga olmoq", ipa: "teɪk ˈfəʊ.təʊz", pos: "phrase", ex: "He loves taking photos of the mountains.", exUz: "U tog'larni suratga olishni juda yaxshi ko'radi." },
  ],
  practice: [
    { k: "match", pairs: [["love", "juda yaxshi ko'rmoq"], ["enjoy", "zavq olmoq"], ["don't mind", "qarshi emasman"], ["hate", "yomon ko'rmoq"], ["can't stand", "chiday olmaslik"]] },
    { k: "match", pairs: [["swim", "swimming"], ["dance", "dancing"], ["shop", "shopping"], ["play", "playing"], ["lie", "lying"]] },
    { k: "listen", say: "I can't stand waiting.", opts: ["I can stand waiting.", "I can't stand waiting.", "I can't stand washing."], a: 1, why: "**can't** — \"kant\", cho'ziq **a:**. *can* — qisqa \"kən\"." },
    { k: "listen", say: "She enjoys gardening.", opts: ["She enjoys gardening.", "She enjoyed gardening.", "She enjoys guarding."], a: 0 },
    { k: "fill", q: "We enjoy ___ in the mountains. (walk)", a: ["walking"], uz: "Tog'larda sayr qilishni yoqtiramiz.", why: "**enjoy + -ing**." },
    { k: "fill", q: "My dad can't stand ___ in traffic. (sit)", a: ["sitting"], uz: "Dadam tirbandlikda o'tirishga chiday olmaydi.", why: "*sit* — qisqa fe'l, **t** ikkilanadi: **sitting**." },
    { k: "fill", q: "She ___ cooking, but she hates washing up. (like)", a: ["likes"], uz: "U ovqat pishirishni yoqtiradi, lekin idish yuvishni yomon ko'radi.", why: "**she** → **likes**." },
    { k: "fill", q: "My son ___ like getting up early.", a: ["doesn't", "does not"], uz: "O'g'lim erta turishni yoqtirmaydi.", why: "**he** inkori → **doesn't like**." },
    { k: "choice", q: "To'g'ri gapni tanlang:", opts: ["I'm not like ironing.", "I don't like ironing.", "I don't like iron.", "I doesn't like ironing."], a: 1, why: "**like** — fe'l: inkori **don't like**, keyin **-ing**." },
    { k: "choice", q: "Qaysi so'zning imlosi to'g'ri?", opts: ["runing", "writting", "danceing", "travelling"], a: 3, why: "*running* (n ikkilanadi), *writing* (e tushadi), *dancing* (e tushadi). **travelling** — Britaniya imlosi." },
    { k: "tf", q: "**I don't mind cooking** = Ovqat pishirish menga yoqmaydi.", a: false, why: "**don't mind** = qarshi emasman, mayli — neytral, yomon emas." },
    { k: "order", uz: "Bo'sh vaqtingizda nima qilishni yoqtirasiz?", words: ["What", "do", "you", "like", "doing", "in", "your", "free", "time?"], extra: ["are", "do?"] },
    { k: "order", uz: "U (she) do'stlari bilan suhbatlashishni yaxshi ko'radi.", words: ["She", "loves", "chatting", "with", "her", "friends"], extra: ["love", "chat"] },
    { k: "translate", uz: "Men kitob o'qishni yoqtiraman.", a: ["I like reading books.", "I like reading.", "I like to read books.", "I like to read.", "I enjoy reading books.", "I enjoy reading."], why: "**like + -ing** (yoki *like to read*)." },
    { k: "translate", uz: "U (he) kutishni yomon ko'radi.", a: ["He hates waiting.", "He hates to wait.", "He can't stand waiting.", "He cannot stand waiting."], why: "**he** → **hates**." },
    { k: "speak", say: "I love taking photos, but I can't stand shopping.", uz: "Suratga olishni juda yaxshi ko'raman, lekin xarid qilishga chiday olmayman." },
  ],
  quiz: [
    { k: "choice", q: "\"Biz sayohat qilishni yoqtiramiz.\"", opts: ["We enjoy to travel.", "We enjoy travelling.", "We are enjoy travelling.", "We enjoy travel."], a: 1, why: "**enjoy + -ing**. *enjoy to* — xato." },
    { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["He doesn't likes fishing.", "He don't like fishing.", "He doesn't like fishing.", "He not like fishing."], a: 2, why: "**doesn't + like** (s siz)." },
    { k: "fill", q: "I really enjoy ___ with my grandmother. (talk)", a: ["talking"], uz: "Buvim bilan gaplashishni juda yoqtiraman." },
    { k: "fill", q: "Do you like ___? — Yes, I go to the pool twice a week. (swim)", a: ["swimming"], uz: "Suzishni yoqtirasizmi? — Ha, haftada ikki marta basseynga boraman.", why: "**swimming** — *m* ikkilanadi." },
    { k: "listen", say: "Do you like dancing?", opts: ["Would you like dancing?", "Do you like dancing?", "Do you like dance?"], a: 1 },
    { k: "choice", q: "Darajasi bo'yicha eng **yomon** munosabat qaysi?", opts: ["I don't mind it.", "I don't like it.", "I can't stand it.", "I like it."], a: 2, why: "**can't stand** — umuman chiday olmayman (eng kuchli)." },
    { k: "tf", q: "**I'm like playing chess.** — to'g'ri gap.", a: false, why: "**am** ortiqcha: *I **like** playing chess.*" },
    { k: "order", uz: "Onam bog'dorchilikni juda yaxshi ko'radi.", words: ["My", "mother", "loves", "gardening"], extra: ["love", "is"] },
    { k: "translate", uz: "Men dazmollashga qarshi emasman.", a: ["I don't mind ironing.", "I do not mind ironing."], why: "**don't mind + -ing**." },
    { k: "choice", q: "Matnda Kamola nimani **yomon ko'radi**?", opts: ["gardening", "cooking", "ironing", "taking photos"], a: 2, why: "*I don't mind cooking, but I **hate ironing**.*" },
  ],
  summary: [
    "Harakatni yoqtirish: **like / love / enjoy / hate + fe'l-ing** — *I love cooking.*",
    "Shkala: **love > really like / enjoy > like > don't mind > don't like > hate > can't stand**.",
    "**enjoy, don't mind, can't stand** dan keyin faqat **-ing** (❌ *enjoy to*).",
    "Imlo: *dance → dancing* (e tushadi), *swim → swimming* (ikkilanadi), *lie → lying*.",
    "❌ *I am like…* — **like** fe'l: *I like…, She likes…, I don't like…, Does he like…?*",
  ],
  homework: "Har bir darajaga (love, enjoy, like, don't mind, don't like, hate, can't stand) bittadan, o'zingiz haqingizda 7 ta gap yozing. Keyin oilangizdan bir kishi haqida *he / she* bilan 4 ta gap yozing (*My dad loves fishing. He can't stand…*). -ing imlosini tekshiring!",
};

export default lesson;
