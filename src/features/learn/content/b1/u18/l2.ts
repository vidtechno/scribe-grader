import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u18-l2",
  title: "Present Perfect with for and since",
  titleUz: "For va since: How long…? savollari",
  goal: "**How long…?** savoliga **Present Perfect** + **for** (muddat) yoki **since** (boshlanish nuqtasi) bilan javob berasiz, **I live here since 2015** kabi o'zbekcha xatodan qochasiz va **since** dan keyin gap (*since I was a child*) ishlatasiz.",
  slides: [
    {
      title: "How long…? for yoki since",
      blocks: [
        { t: "p", md: "Hozir ham davom etayotgan holat haqida «**qancha vaqtdan beri?**» deb so'rashimiz mumkin. Inglizchada bunday savol **How long have you…?** bilan boshlanadi va javobda **Present Perfect** ishlatiladi. Davomiylikni ikki so'z bilan aytamiz:" },
        {
          t: "table", head: ["", "for", "since"], speak: [],
          rows: [
            ["Nimani bildiradi", "**muddat** (qancha davom etgan)", "**boshlanish nuqtasi** (qachondan)"],
            ["Keyin nima keladi", "for two years, for a week, for ages", "since 2019, since Monday, since June"],
            ["O'zbekcha", "...dan beri (muddat): ikki yildan beri", "...dan beri (sana): 2019-yildan beri"],
            ["Misol", "I've lived here for six years.", "I've lived here since 2019."],
          ],
        },
        {
          t: "examples", items: [
            { en: "How long have you known Dilnoza? — For about ten years.", uz: "Dilnozani qancha vaqtdan beri bilasan? — Taxminan o'n yildan beri." },
            { en: "How long has your sister worked there? — Since last September.", uz: "Opang qancha vaqtdan beri o'sha yerda ishlaydi? — O'tgan sentabrdan beri." },
            { en: "We've been friends since primary school.", uz: "Biz boshlang'ich maktabdan beri do'stmiz." },
          ],
        },
        { t: "tip", tone: "info", md: "Oddiy qoida: javobni o'zingizdan so'rang. Raqam bilan **muddat** aytsangiz (*three weeks, an hour, a long time*) — **for**. **Sana yoki payt** aytsangiz (*2020, Friday, 9 o'clock, yesterday*) — **since**." },
        { t: "check", ex: { k: "choice", q: "**I've had this phone ___ two years.**", opts: ["for", "since", "from", "during"], a: 0, why: "*two years* — muddat → **for**." } },
        { t: "check", ex: { k: "choice", q: "**She has lived in Bukhara ___ 2018.**", opts: ["for", "since", "in", "at"], a: 1, why: "*2018* — boshlanish nuqtasi → **since**." } },
      ],
    },
    {
      title: "Hozirgi zamon emas, Present Perfect",
      blocks: [
        { t: "p", md: "O'zbek tilida «**ikki yildan beri bu yerda yashayman**» deymiz, ya'ni hozirgi zamon fe'li bilan. Inglizchada bunday qilib bo'lmaydi: **for / since** bilan davom etayotgan holatni **Present Perfect** orqali aytamiz." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I have lived here for two years.", "I have known him since 2015.", "How long have you been a member?"] },
          bad: { title: "Xato", items: ["I live here for two years.", "I know him since 2015.", "How long are you a member?"] },
        },
        { t: "p", md: "Bu qoida ayniqsa **holat fe'llari** (stative verbs) bilan ishlaydi: ular harakat emas, holatni bildiradi:" },
        {
          t: "table", head: ["Fe'l", "Misol"], speak: [1],
          rows: [
            ["be", "We have been in this class since September."],
            ["know", "I have known her for years."],
            ["have (egalik)", "He has had this bike since he was twelve."],
            ["live", "They have lived in this neighbourhood for a long time."],
            ["own", "She has owned the shop since 2020."],
            ["like", "I have liked jazz since I was a teenager."],
          ],
        },
        { t: "tip", tone: "warn", md: "Savol so'zi **How long** bo'lsa, hozirgi zamonni ishlatmang: ~~How long do you live here?~~ → **How long have you lived here?** Javobda ham zamon o'sha-o'sha qoladi: *I've lived here for a year.*" },
        { t: "check", ex: { k: "fix", wrong: "I know my best friend since 2010.", a: ["I have known my best friend since 2010.", "I've known my best friend since 2010."], hint: "Zamon", why: "Davom etayotgan holat + since → Present Perfect: **have known**." } },
        { t: "check", ex: { k: "choice", q: "**How long ___ married?**", opts: ["are you", "have you been", "do you be", "you have been"], a: 1, why: "**How long have you been** — to'g'ri tartib: savol so'zi + have + ega + V3." } },
      ],
    },
    {
      title: "Since dan keyin gap, for ages",
      blocks: [
        { t: "p", md: "**since** dan keyin faqat sana emas, **to'liq gap** ham kelishi mumkin. Bunday gapda tugagan boshlanish voqeasi **Past Simple** da aytiladi, asosiy qismi esa **Present Perfect** da:" },
        {
          t: "examples", items: [
            { en: "I've lived in Tashkent since I was a child.", uz: "Men bolaligimdan beri Toshkentda yashayman.", note: "since + **Past Simple** (*I was*), bosh gap — Present Perfect." },
            { en: "She has felt much better since she started running.", uz: "U yugura boshlaganidan beri o'zini ancha yaxshi his qilyapti." },
            { en: "We haven't spoken since we left school.", uz: "Maktabni bitirganimizdan beri gaplashmadik." },
            { en: "It has rained all week.", uz: "Butun hafta yomg'ir yog'di.", note: "**all** + vaqt davri: *all day, all week, all my life*." },
          ],
        },
        { t: "p", md: "Yana foydali iboralar:" },
        {
          t: "table", head: ["Ibora", "Ma'nosi", "Misol"], speak: [2],
          rows: [
            ["for ages", "juda uzoq vaqt (so'zlashuvda)", "I haven't seen you for ages!"],
            ["all my life", "butun umrim", "He has lived here all his life."],
            ["for a long time", "uzoq vaqtdan beri", "We have known each other for a long time."],
            ["since then", "o'shandan beri", "She moved abroad. Since then, we have written often."],
          ],
        },
        { t: "tip", tone: "warn", md: "**since** dan keyingi gapda ham odatda Present Perfect qo'ymang: ~~since I have moved here~~ emas, **since I moved here**. Boshlanish payti — tugagan voqea, shuning uchun Past Simple." },
        { t: "check", ex: { k: "fill", q: "I have loved football since I ___ a boy. (be)", a: ["was"], why: "**since** + Past Simple: *since I was a boy*." } },
        { t: "check", ex: { k: "choice", q: "**We haven't met ___ ages.**", opts: ["for", "since", "from", "at"], a: 0, why: "*ages* — muddat → **for ages**." } },
      ],
    },
    {
      title: "Tugagan muddat yoki davom etayotgan?",
      blocks: [
        { t: "p", md: "**for** ni Past Simple bilan ham ishlatish mumkin. Farq katta: Past Simple holat **tugaganini**, Present Perfect esa **hozir ham davom etayotganini** bildiradi." },
        {
          t: "table", head: ["", "Past Simple", "Present Perfect"],
          rows: [
            ["Gap", "I lived in Samarkand for five years.", "I've lived in Samarkand for five years."],
            ["Ma'no", "Endi u yerda yashamayman.", "Hali ham u yerda yashayman."],
            ["Gap", "She worked at the bank for ten years.", "She has worked at the bank for ten years."],
            ["Ma'no", "Endi u bankda ishlamaydi.", "Hali ham bankda ishlaydi."],
          ],
        },
        { t: "p", md: "**Inkor gapda** ham ikkala so'z ishlatiladi. Bunda «oxirgi marta ... dan beri bo'lmadi» degan ma'no chiqadi:" },
        {
          t: "examples", items: [
            { en: "I haven't seen him since Tuesday.", uz: "Men uni seshanbadan beri ko'rmadim." },
            { en: "We haven't had a holiday for two years.", uz: "Biz ikki yildan beri ta'tilga chiqmadik." },
            { en: "It's been two years since I last saw her.", uz: "Uni oxirgi marta ko'rganimga ikki yil bo'ldi.", note: "Bu gap *I haven't seen her for two years* bilan bir xil." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "**He has taught here for ten years.** — Hozir u...", opts: ["still teaches here.", "doesn't teach here now.", "will teach here.", "is a student here."], a: 0, why: "Present Perfect + for → hali ham davom etmoqda." } },
        { t: "check", ex: { k: "tf", q: "**I worked there for two years** gapida endi u yerda ishlamasligim tushuniladi.", a: true, why: "Past Simple — tugagan davr." } },
      ],
    },
    {
      title: "O'qing: eski mahalla",
      blocks: [
        {
          t: "text", title: "Our neighbourhood", voice: "emma",
          en: "My family has lived in the same neighbourhood for more than twenty years. I have known most of my neighbours since I was a child. Mrs Karimova has lived next door for ages, and she has collected old coins since her youth. The community centre opened in 2010, and I have been a member since then. Last year I started a small club for young people. We have met every Friday since February, and now we have twenty members. I haven't missed a single meeting. A few friends from school have moved away, but we stay in touch. I really value this sense of community.",
          uz: "Mening oilam yigirma yildan ko'proq vaqtdan beri bir xil mahallada yashaydi. Men qo'shnilarning ko'pchiligini bolaligimdan beri taniyman. Karimova xonim juda uzoq vaqtdan beri yonimizda yashaydi va yoshligidan beri eski tangalar yig'adi. Jamoat markazi 2010-yilda ochilgan va men o'shandan beri uning a'zosiman. O'tgan yili men yoshlar uchun kichik klub boshladim. Fevraldan beri har juma uchrashamiz, endi yigirma a'zomiz bor. Men bitta uchrashuvni ham o'tkazib yubormadim. Maktabdagi do'stlarimdan ba'zilari boshqa joyga ko'chib ketdi, lekin biz aloqada bo'lamiz. Men bu jamoa hissini juda qadrlayman.",
        },
        { t: "check", ex: { k: "tf", q: "The writer has been a member of the community centre since 2010.", a: true, why: "Matnda: *I have been a member since then* (2010 dan beri)." } },
        { t: "check", ex: { k: "choice", q: "Which sentence in the text is about a **finished** time?", opts: ["The community centre opened in 2010.", "I have known most of my neighbours.", "We have met every Friday.", "I haven't missed a meeting."], a: 0, why: "*opened in 2010* — aniq o'tgan vaqt, Past Simple." } },
      ],
    },
    {
      title: "Dialog: eski do'st",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Helen", en: "Aziz! I haven't seen you for ages. How are you?", uz: "Aziz! Seni ko'rmaganimga ancha bo'ldi. Qalaysan?" },
            { who: "Aziz", en: "I'm fine, Helen. I've worked in Manchester since last year.", uz: "Yaxshiman, Helen. O'tgan yildan beri Manchesterda ishlayman." },
            { who: "Helen", en: "Really? How long have you lived there?", uz: "Rostdanmi? U yerda qancha vaqtdan beri yashaysan?" },
            { who: "Aziz", en: "For about eight months. It's a friendly city, and I've made a few good friends.", uz: "Taxminan sakkiz oydan beri. Do'stona shahar, bir nechta yaxshi do'st orttirdim." },
            { who: "Helen", en: "That's great. I've known Tom since university, and we still stay in touch.", uz: "Zo'r. Men Tomni universitetdan beri bilaman va hali ham aloqadamiz." },
            { who: "Aziz", en: "Friendship is important. Let's meet more often.", uz: "Do'stlik muhim. Tez-tez uchrashaylik." },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Aziz has lived in Manchester for about eight months.", a: true, why: "U *For about eight months* dedi." } },
      ],
    },
  ],
  words: [
    { en: "relative", uz: "qarindosh", ipa: "ˈrel.ə.tɪv", pos: "noun", ex: "I have lived near my relatives since I was born.", exUz: "Men tug'ilganimdan beri qarindoshlarimning yonida yashayman." },
    { en: "acquaintance", uz: "tanish (yaqin do'st emas)", ipa: "əˈkweɪn.təns", pos: "noun", ex: "He is just an acquaintance; we have only met twice.", exUz: "U shunchaki tanish; biz atigi ikki marta uchrashganmiz." },
    { en: "get along", uz: "chiqishmoq, til topishmoq", ipa: "ɡet əˈlɒŋ", pos: "phrasal verb", ex: "We have got along well since the first day we met.", exUz: "Biz tanishgan birinchi kundan beri bir-birimiz bilan yaxshi chiqishamiz." },
    { en: "supportive", uz: "qo'llab-quvvatlovchi", ipa: "səˈpɔː.tɪv", pos: "adj", ex: "My friends have been very supportive for years.", exUz: "Do'stlarim yillar davomida meni juda qo'llab-quvvatlab kelishdi." },
    { en: "community", uz: "jamoa, mahalla (jamiyat)", ipa: "kəˈmjuː.nə.ti", pos: "noun", ex: "The local community has raised money for a new park.", exUz: "Mahalliy jamoa yangi bog' uchun pul yig'di." },
    { en: "take after", uz: "o'xshamoq (oila a'zosiga)", ipa: "teɪk ˈɑːf.tə", pos: "phrasal verb", ex: "She takes after her mother in many ways.", exUz: "U ko'p jihatdan onasiga o'xshaydi." },
    { en: "collect", uz: "yig'moq, to'plamoq", ipa: "kəˈlekt", pos: "verb", ex: "He has collected stamps since he was ten.", exUz: "U o'n yoshidan beri markalar yig'adi." },
    { en: "get to know", uz: "tanishib bormoq, yaxshi bilib olmoq", ipa: "ɡet tə nəʊ", pos: "phrase", ex: "I have got to know my colleagues better since January.", exUz: "Men yanvardan beri hamkasblarimni yaxshiroq bilib oldim." },
    { en: "stay in touch", uz: "aloqada bo'lmoq", ipa: "steɪ ɪn tʌtʃ", pos: "phrase", ex: "We have stayed in touch for many years.", exUz: "Biz ko'p yillardan beri aloqada bo'lamiz." },
    { en: "lose touch", uz: "aloqani yo'qotmoq", ipa: "luːz tʌtʃ", pos: "phrase", ex: "We lost touch after he moved abroad.", exUz: "U chet elga ko'chganidan keyin aloqamiz uzildi." },
  ],
  practice: [
    { k: "choice", q: "**I've known her ___ 2012.**", opts: ["for", "since", "ago", "during"], a: 1, why: "*2012* — sana → **since**." },
    { k: "choice", q: "**They have been married ___ twenty years.**", opts: ["since", "for", "from", "in"], a: 1, why: "*twenty years* — muddat → **for**." },
    { k: "choice", q: "**How long ___ in this city?**", opts: ["do you live", "are you living", "have you lived", "did you lived"], a: 2, why: "**How long** + davom etayotgan holat → Present Perfect." },
    { k: "listen", say: "I haven't seen him since Friday.", opts: ["I haven't seen him since Friday.", "I haven't seen him for Friday.", "I didn't see him on Friday.", "I haven't seen him for five days."], a: 0 },
    { k: "fill", q: "We have been friends ___ we were children.", a: ["since"], why: "Gap keladi (*we were children*) → **since**." },
    { k: "fill", q: "My uncle has had this shop ___ fifteen years.", a: ["for"], why: "*fifteen years* → **for**." },
    { k: "fill", q: "She ___ in this company since 2019. (work)", a: ["has worked", "'s worked", "has been working", "'s been working"], why: "since + davom etayotgan holat → Present Perfect." },
    { k: "fill", q: "I haven't been to the cinema ___ ages.", a: ["for"], why: "*for ages* — uzoq vaqtdan beri." },
    { k: "order", uz: "Qancha vaqtdan beri bu klubning a'zosisiz?", words: ["How", "long", "have", "you", "been", "a", "member", "of", "this", "club?"], extra: ["are", "since"], why: "**How long have you been …?**" },
    { k: "order", uz: "Biz ikki yildan beri bir-birimizni bilamiz.", words: ["We", "have", "known", "each", "other", "for", "two", "years."], extra: ["since", "know"], alt: [["We've", "known", "each", "other", "for", "two", "years."]], why: "Muddat → **for**; holat fe'li → Present Perfect." },
    { k: "translate", uz: "U bolaligidan beri tangalar yig'adi.", a: ["He has collected coins since he was a child.", "He's collected coins since he was a child.", "She has collected coins since she was a child.", "She's collected coins since she was a child.", "He has collected coins since his childhood.", "She has collected coins since her childhood."], why: "since + Past Simple: *since he was a child*." },
    { k: "translate", uz: "Men uni bir necha oydan beri ko'rmadim.", a: ["I haven't seen him for months.", "I haven't seen her for months.", "I haven't seen him for a few months.", "I haven't seen her for a few months.", "I have not seen him for months.", "I have not seen her for months."], why: "Inkor + muddat: **haven't seen … for months**." },
    { k: "fix", wrong: "I live in this house since 2010.", a: ["I have lived in this house since 2010.", "I've lived in this house since 2010."], hint: "Zamonni almashtiring", why: "since bilan davom etayotgan holat → **have lived**." },
    { k: "fix", wrong: "She has been a nurse since ten years.", a: ["She has been a nurse for ten years.", "She's been a nurse for ten years."], hint: "for yoki since?", why: "*ten years* — muddat → **for**." },
    { k: "tf", q: "**I have lived in Navoi for three years** — hozir ham Navoiyda yashayman.", a: true, why: "Present Perfect + for → davom etmoqda." },
    { k: "speak", say: "How long have you lived in this city?", uz: "Bu shaharda qancha vaqtdan beri yashaysiz?" },
  ],
  quiz: [
    { k: "choice", q: "**He has been ill ___ Monday.**", opts: ["for", "since", "during", "from"], a: 1, why: "*Monday* — payt → **since**." },
    { k: "choice", q: "**I've worked here ___ six months.**", opts: ["since", "for", "ago", "at"], a: 1, why: "*six months* — muddat → **for**." },
    { k: "choice", q: "**How long ___ English?**", opts: ["do you study", "have you studied", "you have studied", "are you studied"], a: 1, why: "**How long have you studied** — Present Perfect." },
    { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["I have known him since I was a student.", "I have known him since I have been a student.", "I know him since I was a student.", "I knew him since I was a student."], a: 0, why: "Davom etayotgan holat → Present Perfect; **since** dan keyin Past Simple." },
    { k: "fill", q: "They haven't spoken to each other ___ last summer.", a: ["since"], why: "*last summer* — payt → **since**." },
    { k: "fill", q: "We have lived in this community ___ twenty years.", a: ["for"], why: "*twenty years* — muddat → **for**." },
    { k: "listen", say: "How long has she been a member?", opts: ["How long has she been a member?", "How long was she a member?", "When did she become a member?"], a: 0 },
    { k: "tf", q: "**I lived in London for three years** — hozir ham Londonda yashayman.", a: false, why: "Past Simple — davr tugagan. Hozir u yerda yashamaydi." },
    { k: "order", uz: "Qo'shnimiz bolalikdan beri shu yerda yashaydi.", words: ["Our", "neighbour", "has", "lived", "here", "since", "childhood."], extra: ["for", "lives"], alt: [["Our", "neighbour", "has", "lived", "here", "since", "his", "childhood."], ["Our", "neighbour", "has", "lived", "here", "since", "her", "childhood."]], why: "Davom etayotgan holat: **has lived … since**." },
    { k: "translate", uz: "Biz uch yildan beri do'stmiz.", a: ["We have been friends for three years.", "We've been friends for three years."], why: "**have been … for three years**." },
  ],
  summary: [
    "**How long have you…?** — davom etayotgan holat haqida savol. Javobda ham **Present Perfect** ishlatamiz.",
    "**for** + muddat (*for two years, for ages*); **since** + boshlanish nuqtasi (*since 2019, since Monday*).",
    "O'zbekchadagi «yashayman, bilaman» ni inglizchaga o'tkazmang: ~~I live here since 2015~~ → **I have lived here since 2015.**",
    "**since** + gap bo'lsa, gap **Past Simple** da: *since I was a child, since I moved here*.",
    "**Past Simple + for** — tugagan davr (*I lived there for five years*); **Present Perfect + for** — hozir ham davom etmoqda.",
  ],
  homework: "O'zingiz haqingizda 6 ta gap yozing: 3 ta *for* bilan (*I've lived in… for…, I've known my best friend for…*) va 3 ta *since* bilan (*I've studied English since…*). Bitta gapda *since* dan keyin to'liq gap ishlating (*since I was…, since I started…*).",
};

export default lesson;
