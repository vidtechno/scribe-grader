import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u10-l5",
  title: "What's the matter?",
  titleUz: "Sog'liq: What's the matter? I've got a headache",
  goal: "Kasalligingizni inglizcha aytasiz (**I've got a headache / a cold / a sore throat. My back hurts.**), boshqalardan **What's the matter?** deb so'raysiz va maslahat berasiz: *You should see a doctor. Why don't you…?* Dorixonada kerakli narsani so'ray olasiz.",
  slides: [
    {
      title: "What's the matter? — Nima bo'ldi?",
      blocks: [
        { t: "p", md: "Kimdir yaxshi ko'rinmasa, shunday so'raymiz:" },
        {
          t: "examples", items: [
            { en: "What's the matter?", uz: "Nima bo'ldi? Nima qildi?" },
            { en: "What's wrong?", uz: "Nima bo'ldi? (xuddi shu ma'no)" },
            { en: "Are you OK? You don't look well.", uz: "Yaxshimisiz? Rangingiz yaxshi emas." },
            { en: "I don't feel well.", uz: "O'zimni yaxshi his qilmayapman." },
            { en: "I'm ill. / I'm sick.", uz: "Men kasalman." },
            { en: "I feel sick.", uz: "Ko'nglim aynayapti.", note: "*feel sick* — qusgisi kelmoqda, ko'ngil aynishi. *I'm ill* ga o'xshamaydi!" },
          ],
        },
        { t: "tip", tone: "warn", md: "**What's the matter?** — \"Nima bo'ldi?\" Bu yerda *matter* — \"muammo\". Ehtiyot bo'ling: *What's the matter with you?* ni qattiq ohangda aytmang — u ba'zan \"Senga nima bo'ldi o'zi?!\" degan jahldor ma'no beradi. Oddiy **What's the matter?** yoki **Are you OK?** xavfsizroq." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I don't feel well.", "I'm ill.", "What's wrong?"] },
          bad: { title: "Xato", items: ["I don't feel myself well.", "I am illness.", "What is wrong you?"] },
        },
        { t: "check", ex: { k: "choice", q: "Do'stingiz rangi o'chgan. Nima deysiz?", opts: ["What's the matter?", "What's matter?", "What the matter is?", "What's the matter is?"], a: 0, why: "**What's the matter?** — *the* shart." } },
      ],
    },
    {
      title: "I've got a headache",
      blocks: [
        { t: "p", md: "Kasalliklar haqida **I've got / I have + a + kasallik** deymiz. Beginnerdagi **have got** shu yerda juda kerak bo'ladi:" },
        {
          t: "table", head: ["Ingliz tilida", "O'zbekcha"], speak: [0],
          rows: [
            ["I've got a headache.", "Boshim og'riyapti."],
            ["I've got (a) toothache.", "Tishim og'riyapti."],
            ["I've got (a) stomachache.", "Qornim og'riyapti."],
            ["I've got (a) backache.", "Belim og'riyapti."],
            ["I've got a cold.", "Shamollaganman."],
            ["I've got a cough.", "Yo'talim bor."],
            ["I've got a sore throat.", "Tomog'im og'riyapti."],
            ["I've got a temperature.", "Isitmam bor."],
            ["I've got flu.", "Grippman."],
          ],
        },
        { t: "tip", tone: "info", md: "**headache, a cold, a cough, a sore throat, a temperature** — doim **a** bilan. *toothache, stomachache, backache* — **a** bilan ham, **a** siz ham to'g'ri (Britaniyada ko'pincha *a* siz)." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I've got a headache.", "She's got a cold.", "He has a temperature."] },
          bad: { title: "Xato", items: ["I've got headache.", "She is cold. (shamollagan ma'nosida)", "He has temperature."] },
        },
        { t: "tip", tone: "warn", md: "**She's cold** = \"Unga sovuq\" (1-darsdagi kabi). **She's got a cold** = \"U shamollagan\". Bitta **a** ma'noni butunlay o'zgartiradi!" },
        { t: "check", ex: { k: "fill", q: "I can't talk much. I've got a sore ___.", a: ["throat"], uz: "Ko'p gapira olmayman. Tomog'im og'riyapti.", why: "**a sore throat** — tomoq og'rig'i." } },
      ],
    },
    {
      title: "Talaffuz: ache, stomach, cough",
      blocks: [
        {
          t: "sounds", items: [
            { label: "ache", say: "headache", uz: "**ache** = **\"eyk\"** — *ch* bu yerda \"k\" o'qiladi! *head-ache* = **\"hedeyk\"**.", examples: ["headache", "toothache", "backache"] },
            { label: "stomach", say: "stomach", uz: "**\"stamək\"** — yana *ch* = \"k\". ❌ \"stomach\" (\"stomaч\") emas.", examples: ["stomach", "stomachache"] },
            { label: "cough", say: "cough", uz: "**\"kof\"** — *gh* bu yerda \"f\" o'qiladi.", examples: ["cough", "a bad cough"] },
            { label: "throat", say: "throat", uz: "**\"θrout\"** — *th* ovozsiz: tilni tishlar orasiga qo'ying. \"srot\" yoki \"trot\" emas.", examples: ["throat", "a sore throat"] },
            { label: "medicine", say: "medicine", uz: "**\"medsn\"** yoki **\"medisn\"** — urg'u boshida: **MED**-i-cine.", examples: ["medicine", "Take this medicine."] },
          ],
        },
        { t: "tip", tone: "good", md: "Qoidani eslab qoling: **ache** va **stomach** da *ch* = **k**. Ba'zi so'zlarda *ch* shunday o'qiladi (*school, Christmas* ham). Bularni yodlab oling." },
        { t: "check", ex: { k: "listen", say: "I've got a bad cough.", opts: ["I've got a bad cough.", "I've got a bad cold.", "I've got a bad cup."], a: 0, why: "**cough** = \"kof\"." } },
      ],
    },
    {
      title: "My leg hurts — og'riyapti",
      blocks: [
        { t: "p", md: "Tananing istalgan qismi uchun **hurt** fe'li ishlatiladi. U **Present Simple** da: bitta a'zo → **hurts**, ko'p a'zo → **hurt**:" },
        {
          t: "examples", items: [
            { en: "My leg hurts.", uz: "Oyog'im og'riyapti." },
            { en: "My eyes hurt.", uz: "Ko'zlarim og'riyapti." },
            { en: "My back hurts when I sit for a long time.", uz: "Uzoq o'tirsam, belim og'riydi." },
            { en: "Where does it hurt? — Here.", uz: "Qayeringiz og'riyapti? — Shu yer." },
            { en: "I hurt my arm yesterday.", uz: "Kecha qo'limni shikastlab oldim (og'ritib oldim).", note: "O'tgan zamon ham **hurt**." },
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["My head hurts.", "My feet hurt.", "Does your knee hurt?"] },
          bad: { title: "Xato", items: ["My head is ill.", "My feet hurts.", "Is your knee hurts?"] },
        },
        { t: "tip", tone: "info", md: "O'zbekchada \"og'riyapti\" — hozirgi davomiy shakl, lekin inglizchada oddiy **My leg hurts** eng tabiiy. (*My leg is hurting* ham uchraydi, lekin boshlang'ich darajada **hurts** ni ishlating.)" },
        { t: "check", ex: { k: "choice", q: "\"Ikkala qulog'im og'riyapti.\"", opts: ["My ears hurts.", "My ears hurt.", "My ears are hurt.", "My ear hurt."], a: 1, why: "**ears** — ko'plik → **hurt** (-s siz)." } },
      ],
    },
    {
      title: "Maslahat berish: You should… / Why don't you…?",
      blocks: [
        { t: "p", md: "**should** ni 8-unitda o'rgandingiz. Kasal odamga maslahat berishda u juda foydali. Yana bir tabiiy shakl — **Why don't you + V1…?** (\"…sangiz-chi?\"):" },
        {
          t: "table", head: ["Muammo", "Maslahat"], speak: [0, 1],
          rows: [
            ["I've got a headache.", "You should take an aspirin."],
            ["I've got a temperature.", "You should go to bed and see a doctor."],
            ["I've got a sore throat.", "Why don't you drink hot tea with lemon?"],
            ["I've got toothache.", "You should go to the dentist."],
            ["I feel tired.", "Why don't you have a rest?"],
          ],
        },
        { t: "tip", tone: "warn", md: "**Why don't you…?** — bu savol emas, **maslahat**! Javob: *That's a good idea.* ❌ *Because…* deb javob bermang." },
        { t: "tip", tone: "good", md: "Kasal do'stga xayrlashayotganda: **Get well soon!** — \"Tezroq tuzalib keting!\" yoki **I hope you feel better soon.**" },
        { t: "check", ex: { k: "choice", q: "*I've got a cold.* — Qaysi maslahat **mantiqsiz**?", opts: ["You should stay at home.", "Why don't you drink some hot tea?", "You should go swimming in cold water.", "You should go to bed early."], a: 2, why: "Shamollaganda sovuq suvda suzish — yomon maslahat." } },
      ],
    },
    {
      title: "Dialog: dorixonada",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Pharmacist", en: "Good morning. Can I help you?", uz: "Xayrli tong. Yordam bera olamanmi?" },
            { who: "Kamol", en: "Yes, please. I don't feel well. I've got a sore throat and a cough.", uz: "Ha, iltimos. O'zimni yaxshi his qilmayapman. Tomog'im og'riyapti va yo'talyapman." },
            { who: "Pharmacist", en: "I'm sorry to hear that. Have you got a temperature?", uz: "Eshitib xafa bo'ldim. Isitmangiz bormi?" },
            { who: "Kamol", en: "No, I haven't. But I've got a headache too.", uz: "Yo'q. Lekin boshim ham og'riyapti." },
            { who: "Pharmacist", en: "OK. Take this medicine three times a day, after meals. And these are for your throat.", uz: "Yaxshi. Bu dorini kuniga uch marta, ovqatdan keyin iching. Bular esa tomog'ingiz uchun." },
            { who: "Kamol", en: "Thank you. Anything else?", uz: "Rahmat. Yana biror narsa?" },
            { who: "Pharmacist", en: "You should drink a lot of water and rest. If you don't feel better in three days, see a doctor.", uz: "Ko'p suv ichib, dam olishingiz kerak. Uch kunda yaxshilanmasangiz, shifokorga boring." },
            { who: "Kamol", en: "OK, I will. Thanks a lot.", uz: "Xo'p, boraman. Katta rahmat." },
            { who: "Pharmacist", en: "You're welcome. Get well soon!", uz: "Arzimaydi. Tezroq tuzaling!" },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Kamolning isitmasi bor.", a: false, why: "*Have you got a temperature? — **No, I haven't.***" } },
        { t: "check", ex: { k: "choice", q: "How often should Kamol take the medicine?", opts: ["once a day", "twice a day", "three times a day", "before meals"], a: 2, why: "*Take this medicine **three times a day**, after meals.*" } },
      ],
    },
    {
      title: "O'qing: Malikadan xabar",
      blocks: [
        {
          t: "text", title: "Sorry, I can't come",
          en: "Hi Anna,\nI'm really sorry, but I can't come to the cinema tonight. I'm ill. Yesterday I walked home in the rain and today I've got a terrible cold. My head hurts, I've got a sore throat and I can't stop coughing. My mum says I've got a temperature, so I'm going to stay in bed all day.\nShe made me hot tea with lemon and honey, and I'm taking some medicine from the pharmacy. I hope I'll feel better by Saturday. Can we go to the cinema next week?\nMalika",
          uz: "Salom, Anna,\nJuda uzr, lekin bugun kechqurun kinoga bora olmayman. Kasalman. Kecha yomg'irda uyga piyoda keldim va bugun qattiq shamollab qoldim. Boshim og'riyapti, tomog'im og'riyapti va yo'talim to'xtamayapti. Oyim isitmam bor deyapti, shuning uchun kun bo'yi yotaman.\nOyim menga limon va asal bilan issiq choy damlab berdi, dorixonadan olingan dorini ham ichyapman. Shanbagacha tuzalib qolaman degan umiddaman. Kinoga kelasi hafta borsak bo'ladimi?\nMalika",
        },
        { t: "check", ex: { k: "tf", q: "Malika yomg'irda uyga piyoda kelgani uchun shamollab qoldi.", a: true, why: "*Yesterday I walked home in the rain and today I've got a terrible cold.*" } },
      ],
    },
  ],
  words: [
    { en: "headache", uz: "bosh og'rig'i", ipa: "ˈhed.eɪk", pos: "noun", ex: "I've got a terrible headache.", exUz: "Boshim qattiq og'riyapti." },
    { en: "toothache", uz: "tish og'rig'i", ipa: "ˈtuːθ.eɪk", pos: "noun", ex: "He's got toothache, so he's going to the dentist.", exUz: "Uning tishi og'riyapti, shuning uchun stomatologga ketyapti." },
    { en: "stomachache", uz: "qorin og'rig'i", ipa: "ˈstʌm.ək.eɪk", pos: "noun", ex: "I ate too much and now I've got stomachache.", exUz: "Juda ko'p yedim, endi qornim og'riyapti." },
    { en: "a cold", uz: "shamollash", ipa: "ə kəʊld", pos: "noun", ex: "She's got a cold, so she's at home.", exUz: "U shamollagan, shuning uchun uyda." },
    { en: "cough", uz: "yo'tal; yo'talmoq", ipa: "kɒf", pos: "noun, verb", ex: "This medicine is good for a cough.", exUz: "Bu dori yo'talga yaxshi." },
    { en: "sore throat", uz: "tomoq og'rig'i", ipa: "ˌsɔː ˈθrəʊt", pos: "noun", ex: "Drink hot tea for your sore throat.", exUz: "Tomog'ing og'riyotgan bo'lsa, issiq choy ich." },
    { en: "have a temperature", uz: "isitmasi bo'lmoq", ipa: "hæv ə ˈtem.prə.tʃə", pos: "phrase", ex: "My son has got a temperature.", exUz: "O'g'limning isitmasi bor." },
    { en: "hurt", uz: "og'rimoq; shikastlamoq", ipa: "hɜːt", pos: "verb", ex: "My back hurts.", exUz: "Belim og'riyapti." },
    { en: "medicine", uz: "dori", ipa: "ˈmed.sən", pos: "noun", ex: "Take this medicine twice a day.", exUz: "Bu dorini kuniga ikki marta iching." },
    { en: "pharmacy", uz: "dorixona", ipa: "ˈfɑː.mə.si", pos: "noun", ex: "Is there a pharmacy near here?", exUz: "Bu yerga yaqin dorixona bormi?" },
  ],
  practice: [
    { k: "match", pairs: [["headache", "bosh og'rig'i"], ["toothache", "tish og'rig'i"], ["stomachache", "qorin og'rig'i"], ["sore throat", "tomoq og'rig'i"], ["cough", "yo'tal"]] },
    { k: "match", pairs: [["I've got a temperature.", "Isitmam bor."], ["I've got a cold.", "Shamollaganman."], ["I'm cold.", "Menga sovuq."], ["I feel sick.", "Ko'nglim aynayapti."]] },
    { k: "listen", say: "My stomach hurts.", opts: ["My stomach hurts.", "My back hurts.", "My head hurts."], a: 0 },
    { k: "listen", say: "You should see a doctor.", opts: ["You should see a doctor.", "You shouldn't see a doctor.", "You should be a doctor."], a: 0 },
    { k: "choice", q: "\"Shamollaganman.\"", opts: ["I'm cold.", "I've got a cold.", "I've got cold.", "I have a cool."], a: 1, why: "**a cold** — shamollash. *I'm cold* — menga sovuq." },
    { k: "choice", q: "A: *I've got a sore throat.* B: *___*", opts: ["Why don't you drink hot tea with lemon?", "Why you don't drink hot tea?", "You should to drink hot tea.", "Because you drink hot tea."], a: 0, why: "Maslahat: **Why don't you + V1…?**" },
    { k: "choice", q: "Qaysi so'zda *ch* \"k\" deb o'qiladi?", opts: ["chair", "stomach", "teacher", "lunch"], a: 1, why: "**stomach** = \"stamək\"." },
    { k: "fill", q: "My feet ___ after the long walk.", a: ["hurt", "ache"], uz: "Uzoq yurishdan keyin oyoqlarim og'riyapti.", why: "**feet** — ko'plik → **hurt** (-s siz)." },
    { k: "fill", q: "What's the ___? You look terrible.", a: ["matter", "problem"], uz: "Nima bo'ldi? Rangingiz juda yomon.", why: "**What's the matter?**" },
    { k: "fill", q: "I'm going to the ___ to buy some medicine.", a: ["pharmacy", "chemist's", "chemists", "chemist", "drugstore"], uz: "Dori olgani dorixonaga ketyapman.", why: "**pharmacy** — dorixona (Britaniyada *chemist's* ham)." },
    { k: "tf", q: "**Why don't you go to bed?** — bu maslahat, javob: *That's a good idea.*", a: true, why: "**Why don't you…?** — maslahat." },
    { k: "tf", q: "Malika shanba kuni kinoga boradi.", a: false, why: "Malika: *Can we go to the cinema **next week**?*" },
    { k: "order", uz: "Boshim og'riyapti va isitmam bor.", words: ["I've", "got", "a", "headache", "and", "a", "temperature."], extra: ["am", "hurts"], alt: [["I've", "got", "a", "temperature", "and", "a", "headache."]] },
    { k: "order", uz: "Shifokorga borishingiz kerak.", words: ["You", "should", "see", "a", "doctor."], extra: ["to", "seeing"], alt: [["You", "should", "see", "a", "doctor"]] },
    { k: "translate", uz: "Belim og'riyapti.", a: ["My back hurts", "My back is hurting", "My back aches", "My back is sore", "I've got backache", "I have backache", "I've got a backache", "I have a backache", "I have got backache", "I have got a backache"] },
    { k: "translate", uz: "Tezroq tuzalib keting!", a: ["Get well soon", "Get better soon", "I hope you feel better soon", "I hope you get better soon", "I hope you get well soon", "Feel better soon", "Hope you feel better soon"] },
    { k: "speak", say: "I don't feel well. I've got a sore throat and a cough.", uz: "O'zimni yaxshi his qilmayapman. Tomog'im og'riyapti va yo'talyapman." },
  ],
  quiz: [
    { k: "listen", say: "I've got a terrible headache.", opts: ["I've got a terrible headache.", "I've got a terrible toothache.", "I've got a terrible backache."], a: 0 },
    { k: "choice", q: "She can't eat. She's got ___ .", opts: ["a stomach", "a toothache", "a tooth", "an ill"], a: 1, why: "**a toothache / toothache** — tish og'rig'i, shuning uchun ovqat yeya olmaydi." },
    { k: "choice", q: "To'g'ri gapni tanlang:", opts: ["My eyes hurts.", "My eye hurt.", "My eyes hurt.", "My eyes is hurt."], a: 2, why: "**eyes** — ko'plik → **hurt**." },
    { k: "choice", q: "A: *I've got a temperature.* B: *___*", opts: ["You should go to bed.", "You should to go to bed.", "You should going to bed.", "You go should to bed."], a: 0, why: "**should + V1** (*to* yo'q)." },
    { k: "choice", q: "\"Ko'nglim aynayapti.\"", opts: ["I feel sick.", "I feel good.", "I'm sick of it.", "I've got sick."], a: 0, why: "**I feel sick** — ko'ngil aynishi." },
    { k: "fill", q: "Why ___ you take an aspirin?", a: ["don't", "do not"], uz: "Aspirin ichsangiz-chi?", why: "Maslahat: **Why don't you…?**" },
    { k: "fill", q: "I can't stop coughing. I've got a bad ___.", a: ["cough", "cold"], uz: "Yo'talim to'xtamayapti. Qattiq yo'talyapman.", why: "**a bad cough** (yoki *a bad cold*)." },
    { k: "tf", q: "**She's got a cold** va **She's cold** — bir xil ma'no.", a: false, why: "*She's got a cold* — shamollagan; *She's cold* — unga sovuq." },
    { k: "translate", uz: "Tomog'im og'riyapti.", a: ["I've got a sore throat", "I have a sore throat", "I have got a sore throat", "My throat hurts", "My throat is sore", "My throat is hurting"] },
    { k: "order", uz: "Yaqin atrofda dorixona bormi?", words: ["Is", "there", "a", "pharmacy", "near", "here?"], extra: ["Are", "it"] },
  ],
  summary: [
    "So'rash: **What's the matter? / What's wrong? / Are you OK?** Javob: *I don't feel well. I'm ill.*",
    "**I've got + a** headache / cold / cough / sore throat / temperature; *(a) toothache, (a) stomachache*.",
    "**My leg hurts. My eyes hurt.** (bitta → hurts, ko'p → hurt). *Where does it hurt?*",
    "Maslahat: **You should + V1**, **Why don't you + V1?** Xayrlashuv: **Get well soon!**",
    "Talaffuz: ache, stomach — *ch* = **k**; cough — **\"kof\"**; **She's got a cold** ≠ *She's cold*.",
  ],
  homework: "Uch xil vaziyat uchun mini-dialog yozing (har biri 4–6 qator): do'st boshi og'riyapti, siz shamolladingiz va dorixonaga bordingiz, ukangizning tishi og'riyapti. Har birida **What's the matter?**, kasallik nomi va **should / Why don't you…?** bo'lsin. Keyin kasal do'stingizga *Get well soon!* bilan tugaydigan qisqa xabar yozing.",
};

export default lesson;
