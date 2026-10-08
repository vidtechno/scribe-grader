import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u7-l5",
  title: "Plans: Present Continuous for future",
  titleUz: "Rejalar: Present Continuous kelasi zamon uchun",
  goal: "Aniq kelishilgan rejalaringiz haqida gapirasiz: **I'm meeting Aziz tomorrow. We're flying to Istanbul on Friday.** Savol bera olasiz: **What are you doing tonight? Are you working on Saturday?** va kundaligingizdagi haftani aytib berasiz.",
  slides: [
    {
      title: "Present Continuous — kelajak uchun ham!",
      blocks: [
        { t: "p", md: "Beginnerda Present Continuous ni **hozir** bo'layotgan ish uchun o'rgandik: *I'm talking to my friend.* Endi yangi ma'no: **kelajakdagi aniq kelishilgan reja**. Shakl o'sha: **am / is / are + fe'l-ing**, faqat gapda **kelajak vaqti** bor:" },
        {
          t: "examples", items: [
            { en: "I'm meeting Aziz tomorrow.", uz: "Ertaga Aziz bilan uchrashaman. (kelishib qo'yganmiz)" },
            { en: "We're flying to Istanbul on Friday.", uz: "Juma kuni Istanbulga uchamiz. (chiptalar olingan)" },
            { en: "My sister is getting married in June.", uz: "Opam iyunda turmushga chiqyapti. (to'y belgilangan)" },
            { en: "I'm seeing the dentist at ten.", uz: "Soat o'nda tish shifokorida qabuldaman." },
          ],
        },
        { t: "tip", tone: "info", md: "O'zbekchada ham shunday qilamiz! *Ertaga Samarqandga **ketyapman**.* — hozirgi zamon shakli, lekin ma'nosi — kelajak. Ingliz tilida ham: *I'm **going** to Samarkand tomorrow.*" },
        {
          t: "table", head: ["Gap", "Ma'nosi", "Qanday bilamiz?"],
          rows: [
            ["I'm working now.", "hozir ishlayapman", "now — hozir"],
            ["I'm working on Saturday.", "shanba kuni ishlayman (reja)", "on Saturday — kelajak"],
            ["She's cooking plov.", "u hozir palov qilyapti", "vaqt yo'q → odatda hozir"],
            ["She's cooking plov tonight.", "bugun kechqurun palov qiladi", "tonight — kelajak"],
          ],
          speak: [0],
        },
        { t: "check", ex: { k: "choice", q: "Qaysi gap **kelajak** haqida?", opts: ["I'm reading a book.", "Look! It's raining.", "We're having dinner with my parents on Sunday.", "Shh! The baby is sleeping."], a: 2, why: "**on Sunday** — kelajak vaqti. Qolganlari — hozir bo'layotgan ishlar." } },
      ],
    },
    {
      title: "Qachon ishlatiladi: kelishilgan reja",
      blocks: [
        { t: "p", md: "Present Continuous kelajak uchun — **kalendar yoki kundalikka yozib qo'ygan** rejalaringiz uchun: boshqa odam bilan kelishilgan, joy va vaqt aniq, chipta olingan, qabulga yozilgan." },
        {
          t: "examples", items: [
            { en: "I'm having lunch with a client at one.", uz: "Soat birda mijoz bilan tushlik qilaman." },
            { en: "We're going to a wedding on Saturday.", uz: "Shanba kuni to'yga boramiz." },
            { en: "Dad is picking up Grandma from the station tonight.", uz: "Dadam bugun kechqurun buvimni vokzaldan olib keladi." },
            { en: "I'm not working tomorrow. It's my day off.", uz: "Ertaga ishlamayman. Dam olish kunim." },
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I'm visiting my grandma tomorrow.", "We're meeting at six.", "Are you working on Friday?"] },
          bad: { title: "Xato", items: ["I visit my grandma tomorrow.", "We meeting at six.", "Do you working on Friday?"] },
        },
        { t: "tip", tone: "warn", md: "O'zbek o'quvchilari ko'pincha **Present Simple** ishlatadi: ❌ *I go to Samarkand tomorrow.* Shaxsiy rejalar uchun Present Simple odatda **ishlatilmaydi** (u jadvallar uchun — 7-darsda)! ✅ *I'm going to Samarkand tomorrow.* Va **am / is / are** ni tashlab ketmang: ❌ *I going…*" },
        { t: "tip", tone: "info", md: "**be going to** (Beginner, 5-unit) ham reja uchun. Ko'p hollarda ikkalasi ham to'g'ri: *I'm going to visit / I'm visiting my grandma on Sunday.* Present Continuous esa **aniqroq, kelishilgan** rejani bildiradi — vaqt va joy belgilangan." },
        { t: "check", ex: { k: "fill", q: "We ___ a party on Saturday. Can you come? (have)", a: ["are having", "'re having", "are going to have", "'re going to have"], hint: "am / is / are + -ing", uz: "Shanba kuni ziyofat qilyapmiz. Kela olasizmi?", why: "Kelishilgan reja → **are having**." } },
      ],
    },
    {
      title: "Kelajak vaqtini bildiruvchi so'zlar",
      blocks: [
        {
          t: "table", head: ["Ibora", "Ma'nosi", "Predlog"],
          rows: [
            ["tonight / this evening", "bugun kechqurun", "predlogsiz"],
            ["tomorrow morning", "ertaga ertalab", "predlogsiz"],
            ["the day after tomorrow", "indinga", "predlogsiz"],
            ["next week / next Monday", "keyingi hafta / keyingi dushanba", "predlogsiz"],
            ["this weekend / this Friday", "shu dam olish kunlari / shu juma", "predlogsiz"],
            ["on Friday / on 15th May", "juma kuni / 15-may kuni", "on"],
            ["at six / at the weekend", "soat oltida / dam olish kunlari", "at"],
            ["in July / in the evening", "iyulda / kechqurun", "in"],
          ],
          speak: [0],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I'm flying next Monday.", "We're meeting this evening.", "She's coming tonight."] },
          bad: { title: "Xato", items: ["I'm flying on next Monday.", "We're meeting in this evening.", "She's coming at tonight."] },
        },
        { t: "tip", tone: "warn", md: "**next, this, tomorrow, tonight** oldida predlog **qo'yilmaydi**: ❌ *on next Monday*, ❌ *in this evening*." },
        {
          t: "sounds", items: [
            { label: "tonight", say: "tonight", uz: "**\"tə-NAYT\"** — urg'u ikkinchi bo'g'inda, *gh* o'qilmaydi.", examples: ["tonight", "What are you doing tonight?"] },
            { label: "the day after tomorrow", say: "the day after tomorrow", uz: "**\"ðə dey AAF-tə tə-MO-rou\"** — bir nafasda, *the* kuchsiz.", examples: ["the day after tomorrow"] },
          ],
        },
        { t: "check", ex: { k: "choice", q: "To'g'ri gapni tanlang:", opts: ["I'm seeing Bobur on next Tuesday.", "I'm seeing Bobur next Tuesday.", "I see Bobur next Tuesday.", "I seeing Bobur next Tuesday."], a: 1, why: "**next** oldida predlog yo'q, reja → **I'm seeing**." } },
      ],
    },
    {
      title: "Savollar va javoblar",
      blocks: [
        { t: "p", md: "Kimnidir biror joyga taklif qilishdan **oldin** odatda uning rejasini so'raymiz:" },
        {
          t: "table", head: ["Savol", "Javob"],
          rows: [
            ["What are you doing tonight?", "I'm meeting some friends."],
            ["Are you doing anything on Saturday?", "No, I'm not. I'm free."],
            ["Are you working tomorrow?", "Yes, I am. I'm working until six."],
            ["Where are you going on holiday?", "We're going to Khiva."],
            ["When is your brother coming?", "He's coming next week."],
            ["Who are you having lunch with?", "With my boss."],
          ],
          speak: [0, 1],
        },
        { t: "tip", tone: "good", md: "**Are you doing anything on Saturday?** — juda foydali savol: shunday so'ragandan keyin taklif qilsangiz, odobli eshitiladi. Javob: **I'm free** (bo'shman) yoki **I'm busy** (bandman)." },
        { t: "check", ex: { k: "order", uz: "Bugun kechqurun nima qilyapsan?", words: ["What", "are", "you", "doing", "tonight?"], extra: ["do", "does"] } },
        { t: "check", ex: { k: "choice", q: "**Are you working on Sunday?** — qisqa javob (yo'q):", opts: ["No, I don't.", "No, I'm not.", "No, I amn't.", "No, I not working."], a: 1, why: "Savol **are** bilan → javob **No, I'm not.**" } },
      ],
    },
    {
      title: "Kundalik: Shahzodaning haftasi",
      blocks: [
        { t: "p", md: "Shahzoda — menejer. Mana uning kundaligi (diary). Har bir yozuvni Present Continuous bilan gapga aylantiring:" },
        {
          t: "table", head: ["Kun", "Kundalikda", "Gap"],
          rows: [
            ["Monday", "10:00 — dentist", "She's seeing the dentist at ten on Monday."],
            ["Tuesday", "meeting with clients, 2 pm", "She's having a meeting with clients on Tuesday afternoon."],
            ["Wednesday", "fly to Moscow", "She's flying to Moscow on Wednesday."],
            ["Friday", "back home, dinner with Mum", "She's coming back on Friday and having dinner with her mum."],
            ["Saturday", "Lola's wedding!", "She's going to Lola's wedding on Saturday."],
          ],
          speak: [2],
        },
        { t: "check", ex: { k: "tf", q: "Shahzoda is flying to Moscow on Tuesday.", a: false, why: "Kundalikda: **Wednesday — fly to Moscow**. Seshanba kuni — mijozlar bilan uchrashuv." } },
      ],
    },
    {
      title: "O'qing: Dam olish kunlari rejasi",
      blocks: [
        {
          t: "text", title: "An email from Dilfuza",
          en: "Hi Sarah,\nThanks for your email! This weekend is really busy for me.\nOn Friday evening my cousin is arriving from Moscow, so I'm picking her up from the airport at nine. On Saturday we're going to my friend Lola's wedding. There are 400 guests! I'm wearing my new blue dress.\nOn Sunday morning I'm not doing anything special — I'm sleeping late! In the afternoon my family is having a big lunch at my grandma's house.\nAnd next week? I'm starting my new job on Monday! I'm a bit nervous.\nWhat are you doing this weekend? Write soon!\nLove,\nDilfuza",
          uz: "Salom, Sara!\nXating uchun rahmat! Bu dam olish kunlari men uchun juda band.\nJuma kuni kechqurun amakimning qizi Moskvadan keladi, shuning uchun soat to'qqizda uni aeroportdan kutib olaman. Shanba kuni dugonam Lolaning to'yiga boramiz. 400 ta mehmon bor! Yangi ko'k ko'ylagimni kiyaman.\nYakshanba ertalab hech qanday maxsus ish qilmayman — kech uxlayman! Tushdan keyin oilam buvimning uyida katta tushlik qiladi.\nKeyingi hafta-chi? Dushanba kuni yangi ishimni boshlayman! Biroz hayajondaman.\nSen bu dam olish kunlari nima qilyapsan? Tezroq yoz!\nMehr bilan,\nDilfuza",
        },
        { t: "check", ex: { k: "choice", q: "When is Dilfuza picking up her cousin?", opts: ["on Friday evening", "on Saturday morning", "on Sunday afternoon", "on Monday"], a: 0, why: "*On Friday evening … I'm picking her up from the airport at nine.*" } },
        { t: "check", ex: { k: "tf", q: "Dilfuza is starting a new job next week.", a: true, why: "*I'm starting my new job on Monday!*" } },
      ],
    },
    {
      title: "Dialog: Telefonda kelishish",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Otabek", en: "Hi, Kamron! Are you doing anything on Friday evening?", uz: "Salom, Kamron! Juma kuni kechqurun biror ishing bormi?" },
            { who: "Kamron", en: "Friday? Hmm, I'm working until seven. Why?", uz: "Juma? Hmm, yettigacha ishlayman. Nimaga?" },
            { who: "Otabek", en: "Some of us are watching the match at a café in Chilonzor.", uz: "Ba'zilarimiz Chilonzordagi kafeda o'yinni tomosha qilyapmiz." },
            { who: "Kamron", en: "Sounds good! What time is it starting?", uz: "Zo'r! Soat nechada boshlanyapti?" },
            { who: "Otabek", en: "At eight. Akmal is coming too.", uz: "Sakkizda. Akmal ham kelyapti." },
            { who: "Kamron", en: "Great, I'm coming! But I'm flying to Bukhara on Saturday morning, so I'm not staying late.", uz: "Zo'r, kelaman! Lekin shanba ertalab Buxoroga uchaman, shuning uchun kechgacha qolmayman." },
            { who: "Otabek", en: "No problem. See you on Friday!", uz: "Muammo yo'q. Juma kuni ko'rishamiz!" },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Kamron is flying to Bukhara on Friday evening.", a: false, why: "*I'm flying to Bukhara on **Saturday morning**.*" } },
      ],
    },
  ],
  words: [
    { en: "tonight", uz: "bugun kechqurun", ipa: "təˈnaɪt", pos: "adverb", ex: "What are you doing tonight?", exUz: "Bugun kechqurun nima qilyapsiz?" },
    { en: "this evening", uz: "bugun kechqurun (shu oqshom)", ipa: "ðɪs ˈiːv.nɪŋ", pos: "phrase", ex: "We're meeting this evening.", exUz: "Bugun kechqurun uchrashamiz." },
    { en: "available", uz: "bo'sh, vaqti bor", ipa: "əˈveɪ.lə.bəl", pos: "adj", ex: "Are you available on Friday?", exUz: "Juma kuni bo'shmisiz?" },
    { en: "day off", uz: "dam olish kuni (ishdan ozod kun)", ipa: "ˌdeɪ ˈɒf", pos: "noun", ex: "Tomorrow is my day off.", exUz: "Ertaga dam olish kunim." },
    { en: "meeting", uz: "majlis, uchrashuv (ishda)", ipa: "ˈmiː.tɪŋ", pos: "noun", ex: "We're having a meeting on Monday.", exUz: "Dushanba kuni majlis o'tkazamiz." },
    { en: "dentist", uz: "tish shifokori", ipa: "ˈden.tɪst", pos: "noun", ex: "I'm seeing the dentist tomorrow.", exUz: "Ertaga tish shifokoriga boraman." },
    { en: "diary", uz: "kundalik, rejalar daftari", ipa: "ˈdaɪə.ri", pos: "noun", ex: "Let me look in my diary.", exUz: "Kundaligimga qaray-chi." },
    { en: "free", uz: "bo'sh (band emas)", ipa: "friː", pos: "adj", ex: "Are you free on Saturday?", exUz: "Shanba kuni bo'shmisiz?" },
    { en: "nervous", uz: "hayajonlangan, xavotirli", ipa: "ˈnɜː.vəs", pos: "adj", ex: "I'm a bit nervous about my new job.", exUz: "Yangi ishim haqida biroz hayajondaman." },
    { en: "pick up", uz: "(mashinada) olib ketmoq, kutib olmoq", ipa: "ˌpɪk ˈʌp", pos: "phrasal verb", ex: "I'm picking you up at six.", exUz: "Soat oltida seni olib ketaman." },
  ],
  practice: [
    { k: "match", pairs: [["tonight", "bugun kechqurun"], ["next Monday", "keyingi dushanba"], ["next week", "keyingi hafta"], ["tomorrow morning", "ertaga ertalab"], ["this weekend", "shu dam olish kunlari"]] },
    { k: "match", pairs: [["busy", "band"], ["meeting", "majlis"], ["day off", "dam olish kuni"], ["diary", "kundalik"], ["free", "bo'sh"]] },
    { k: "listen", say: "I'm meeting him tomorrow.", opts: ["I'm meeting him tomorrow.", "I met him tomorrow.", "I'm meeting him today."], a: 0 },
    { k: "listen", say: "Are you free tonight?", opts: ["Are you free tonight?", "Are you three tonight?", "Are you free tomorrow?"], a: 0, why: "**free** (bo'sh) va **tonight** (bugun kechqurun)." },
    { k: "choice", q: "\"Ertaga Samarqandga ketyapman.\"", opts: ["I'm go to Samarkand tomorrow.", "I'm going to Samarkand tomorrow.", "I going to Samarkand tomorrow.", "I went to Samarkand tomorrow."], a: 1, why: "Shaxsiy reja → Present Continuous: **I'm going**." },
    { k: "choice", q: "To'g'ri savolni tanlang:", opts: ["What do you doing on Saturday?", "What are you do on Saturday?", "What are you doing on Saturday?", "What you are doing on Saturday?"], a: 2, why: "**What + are + you + doing**." },
    { k: "fill", q: "My parents ___ to Tashkent next Monday. (come)", a: ["are coming", "'re coming", "are going to come", "'re going to come"], uz: "Ota-onam keyingi dushanba Toshkentga kelishyapti.", why: "*my parents* = they → **are coming**." },
    { k: "fill", q: "I ___ working tomorrow. It's my day off.", a: ["'m not", "am not"], uz: "Ertaga ishlamayman. Dam olish kunim.", why: "Inkor: **I'm not / I am not + -ing**." },
    { k: "fill", q: "We're having a party ___ Friday.", a: ["on"], uz: "Juma kuni ziyofat qilyapmiz.", why: "Hafta kuni bilan **on**." },
    { k: "fill", q: "Sorry, I can't. I ___ the dentist at four. (see)", a: ["'m seeing", "am seeing", "'m going to see", "am going to see"], uz: "Kechirasiz, qila olmayman. Soat to'rtda tish shifokoriga boraman.", why: "Belgilangan qabul → **I'm seeing**." },
    { k: "tf", q: "**I'm working on next Saturday.** — to'g'ri gap.", a: false, why: "**next** oldida predlog yo'q: *I'm working next Saturday.*" },
    { k: "tf", q: "**She's cooking plov tonight.** — bu gap kelajak haqida.", a: true, why: "**tonight** — kelajak vaqti; Present Continuous kelishilgan reja." },
    { k: "order", uz: "Soat oltida seni olib ketaman.", words: ["I'm", "picking", "you", "up", "at", "six"], extra: ["pick", "on"] },
    { k: "order", uz: "Shanba kuni biror ishingiz bormi?", words: ["Are", "you", "doing", "anything", "on", "Saturday?"], extra: ["Do", "something"] },
    { k: "translate", uz: "Biz shanba kuni to'yga boramiz.", a: ["We're going to a wedding on Saturday.", "We are going to a wedding on Saturday.", "On Saturday we're going to a wedding.", "On Saturday we are going to a wedding.", "We're going to the wedding on Saturday.", "We are going to the wedding on Saturday."], why: "Kelishilgan reja → **We're going**." },
    { k: "speak", say: "I'm not doing anything on Sunday. I'm free.", uz: "Yakshanba kuni hech narsa qilmayman. Bo'shman." },
  ],
  quiz: [
    { k: "choice", q: "\"Indinga Dubayga uchamiz.\"", opts: ["We're fly to Dubai the day after tomorrow.", "We're flying to Dubai the day after tomorrow.", "We flying to Dubai the day after tomorrow.", "We're flying to Dubai on the day after tomorrow."], a: 1, why: "Reja → **We're flying**; *the day after tomorrow* oldida predlog yo'q." },
    { k: "choice", q: "**Are you doing anything tonight?** — eng yaxshi javob:", opts: ["Yes, I do.", "No, I'm free.", "No, I don't free.", "Yes, I'm free tonight anything."], a: 1, why: "**No, I'm free.** — hech ish yo'q, bo'shman." },
    { k: "fill", q: "My brother ___ married in August. (get)", a: ["is getting", "'s getting", "is going to get", "'s going to get"], uz: "Akam avgustda uylanyapti.", why: "*my brother* = he → **is getting**." },
    { k: "fill", q: "Where ___ you going on holiday this summer?", a: ["are"], uz: "Bu yoz ta'tilga qayerga ketyapsiz?" },
    { k: "fill", q: "I'm meeting Lola ___ six o'clock.", a: ["at"], uz: "Soat oltida Lola bilan uchrashaman.", why: "Soat bilan **at**." },
    { k: "listen", say: "We're having a meeting on Monday.", opts: ["We're having a meeting on Monday.", "We had a meeting on Monday.", "We're having a meeting on Sunday."], a: 0 },
    { k: "tf", q: "**I visit my grandmother tomorrow.** — shaxsiy reja uchun eng tabiiy shakl.", a: false, why: "Shaxsiy kelishilgan reja uchun odatda *I'm visiting my grandmother tomorrow.* deyiladi." },
    { k: "order", uz: "U (she) dushanba kuni yangi ishini boshlayapti.", words: ["She's", "starting", "her", "new", "job", "on", "Monday"], extra: ["starts", "in"], alt: [["On", "Monday", "she's", "starting", "her", "new", "job"]] },
    { k: "translate", uz: "Ertaga ishlayapsizmi?", a: ["Are you working tomorrow?", "Are you working tomorrow"], why: "Savol: **Are you + -ing**?" },
    { k: "choice", q: "Matnda (An email from Dilfuza) Dilfuza yakshanba ertalab nima qiladi?", opts: ["She's going to a wedding.", "She's sleeping late.", "She's picking up her cousin.", "She's starting her new job."], a: 1, why: "*On Sunday morning … I'm sleeping late!*" },
  ],
  summary: [
    "Present Continuous (**am / is / are + -ing**) + kelajak vaqti = **kelishilgan reja**: *I'm meeting Aziz tomorrow.*",
    "Shaxsiy rejalar uchun odatda Present Simple emas: ❌ *I go to Samarkand tomorrow.* ✅ *I'm going…*",
    "**tonight, this evening, tomorrow, next week, the day after tomorrow** — predlogsiz; **on** Friday, **at** six, **in** July.",
    "Savollar: **What are you doing tonight? Are you doing anything on Saturday?** — *No, I'm free. / Yes, I'm working.*",
  ],
  homework: "Kelgusi haftangiz uchun kundalik (diary) tuzing: har kunga kamida bitta reja. Keyin ularni Present Continuous bilan 7 ta gapga aylantiring (*On Monday I'm having a meeting at ten…*). Do'stingizga xuddi Dilfuzadek dam olish kunlari rejangiz haqida qisqa xat yozing.",
};

export default lesson;
