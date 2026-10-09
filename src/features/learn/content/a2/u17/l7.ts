import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u17-l7",
  title: "Writing: CV and short messages",
  titleUz: "Rezyume va qisqa xat yozish",
  goal: "Inglizcha **CV (rezyume)** tuzasiz, ish uchun qisqa **cover message** yozasiz (*I am writing to apply for…*), shuningdek **qisqa xabar, eslatma va taklifnomalar** yozib, ularga muloyim javob berasiz (*I'd love to come. Sorry, I can't.*). Rasmiy va norasmiy uslubni farqlaysiz.",
  slides: [
    {
      title: "CV tuzilishi",
      blocks: [
        { t: "p", md: "**CV** (curriculum vitae; AQShda *résumé*) — sizning qisqa \"hayotiy tavsifingiz\". U 1–2 betdan oshmasligi va tartibli bo'lishi kerak. Odatiy bo'limlar:" },
        {
          t: "table", head: ["Bo'lim", "Nima yoziladi"], speak: [0],
          rows: [
            ["Personal details", "ism, shahar, telefon, e-mail"],
            ["Profile", "2–3 gapli qisqa o'zingiz haqingizda"],
            ["Work experience", "ish joylari — eng yangisidan boshlab"],
            ["Education", "o'qigan joylaringiz va yillar"],
            ["Skills and languages", "ko'nikmalar, tillar, kompyuter"],
            ["References", "tavsiya beruvchilar (\"so'ralganda taqdim etiladi\")"],
          ],
        },
        { t: "tip", tone: "good", md: "CV da **\"I\" ni yozmaymiz** va to'liq gaplar o'rniga qisqa iboralar ishlatamiz: *Welcome guests and answer calls* (✅), *I welcome guests and I answer calls* (kam uchraydi). **Hozirgi** ish uchun hozirgi zamon, **tugagan** ish uchun Past Simple: *Organised events*, *Managed a team*." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["Organised events for 100 guests.", "Responsible for managing the reception.", "Five years of experience in sales."] },
          bad: { title: "Xato", items: ["I organised events for hundred guests.", "Responsible of manage the reception.", "I have 5 years experience of sales."] },
        },
        { t: "check", ex: { k: "choice", q: "CV da qaysi yozuv to'g'ri?", opts: ["Responsible for organising events.", "Responsible of organise events.", "Responsible to organising events.", "Responsible for organise events."], a: 0, why: "**responsible for** + -ing." } },
      ],
    },
    {
      title: "Namuna CV",
      blocks: [
        { t: "p", md: "Quyida o'ylab topilgan nomzod — **Laylo Rahimova** — ning qisqa CV si. Tuzilishiga va fe'llarga e'tibor bering." },
        {
          t: "text", title: "Sample CV",
          en: "LAYLO RAHIMOVA\nSamarkand, Uzbekistan · laylo.rahimova@example.com · +998 90 000 00 00\nPROFILE\nFriendly and reliable receptionist with three years of experience in hotels. Good at solving problems and talking to guests from all over the world.\nWORK EXPERIENCE\n2022 – present: Receptionist, a hotel in Samarkand. Welcome guests, answer calls and organise check-in for about 50 guests a day.\n2020 – 2022: Waitress, a chaikhana in Bukhara. Served customers and worked in a team of eight.\nEDUCATION\n2016 – 2020: Bachelor's degree in Tourism, Samarkand.\nSKILLS AND LANGUAGES\nUzbek (native), Russian (fluent), English (intermediate), computer skills.\nREFERENCES\nAvailable on request.",
          uz: "LAYLO RAHIMOVA\nSamarqand, O'zbekiston · laylo.rahimova@example.com · +998 90 000 00 00\nPROFIL\nMehmonxonalarda uch yillik tajribaga ega xushmuomala va ishonchli resepshnist. Muammolarni yechishda va butun dunyodan kelgan mehmonlar bilan muloqotda kuchli.\nISH TAJRIBASI\n2022 – hozirgacha: Resepshnist, Samarqanddagi mehmonxona. Mehmonlarni kutib oladi, qo'ng'iroqlarga javob beradi va kuniga taxminan 50 mehmonni ro'yxatdan o'tkazadi.\n2020 – 2022: Ofitsiantka, Buxorodagi choyxona. Mijozlarga xizmat ko'rsatgan va sakkiz kishilik jamoada ishlagan.\nTA'LIM\n2016 – 2020: Turizm bo'yicha bakalavr darajasi, Samarqand.\nKO'NIKMA VA TILLAR\nO'zbek (ona tili), rus (erkin), ingliz (o'rta), kompyuter ko'nikmalari.\nTAVSIYALAR\nSo'ralganda taqdim etiladi.",
        },
        { t: "tip", tone: "info", md: "Sanalarni **2022 – present** (yoki *2022 – now*) shaklida yozing. Eng yangi ish joyi — **birinchi** (teskari xronologik tartib). Ish joyini yozishda: **lavozim, kompaniya, joy, yillar, 2–3 ta asosiy vazifa**." },
        { t: "check", ex: { k: "tf", q: "Laylo's most recent job is at a chaikhana in Bukhara.", a: false, why: "Eng yangi ish (2022 – present) — Samarqanddagi mehmonxonada." } },
        { t: "check", ex: { k: "choice", q: "Which language is Laylo's native language?", opts: ["Russian", "English", "Uzbek", "Turkish"], a: 2, why: "*Uzbek (native)*." } },
      ],
    },
    {
      title: "Cover message",
      blocks: [
        { t: "p", md: "CV bilan birga **qisqa xat** (cover letter yoki cover message) yuboriladi. Uning vazifasi — sizni tanishtirish va nega aynan bu ishga mosligingizni qisqa aytish. Tuzilishi:" },
        {
          t: "table", head: ["Qism", "Ibora"], speak: [1],
          rows: [
            ["1. Salomlashish", "Dear Ms Aliyeva, / Dear Sir or Madam,"],
            ["2. Nega yozyapsiz", "I am writing to apply for the position of…"],
            ["3. Tajribangiz", "I have three years of experience in…"],
            ["4. Qo'shimcha", "I have attached my CV."],
            ["5. Yakun", "I look forward to hearing from you."],
            ["6. Xayrlashuv", "Yours sincerely, / Best regards,"],
          ],
        },
        {
          t: "text", title: "Cover message",
          en: "Dear Ms Aliyeva,\nI am writing to apply for the position of receptionist at your hotel, which I saw on your website. I have three years of experience in a hotel in Samarkand, where I welcome guests and organise check-in. I speak Uzbek, Russian and English, and I am good at solving problems.\nI have attached my CV. I am available for an interview on any weekday and I can start next month.\nI look forward to hearing from you.\nYours sincerely,\nLaylo Rahimova",
          uz: "Hurmatli Aliyeva xonim,\nSizning veb-saytingizda ko'rgan mehmonxonangizdagi resepshnist lavozimiga murojaat qilish uchun yozyapman. Samarqanddagi mehmonxonada uch yillik tajribam bor, u yerda mehmonlarni kutib olaman va ro'yxatdan o'tkazishni tashkil qilaman. O'zbek, rus va ingliz tillarida gapiraman va muammolarni yechishda kuchliman.\nCV imni biriktirdim. Har qanday ish kuni suhbatga kela olaman va kelasi oydan ishni boshlay olaman.\nSizdan javob kutaman.\nHurmat bilan,\nLaylo Rahimova",
        },
        { t: "tip", tone: "warn", md: "**I look forward to hearing from you** — bu yerda **to** predlog, shuning uchun keyin **-ing** keladi: *hearing* (✅), *hear* ❌. Xuddi shunday: *I'm looking forward to seeing you.* Ismni bilsangiz — **Yours sincerely**; bilmasangiz (*Dear Sir or Madam*) — **Yours faithfully**. Do'stlarga yoki norasmiy ish xatida — **Best regards**." },
        { t: "check", ex: { k: "fill", q: "I look forward to ___ from you. (hear)", a: ["hearing"], why: "**look forward to** + -ing." } },
      ],
    },
    {
      title: "Qisqa xabarlar va eslatmalar",
      blocks: [
        { t: "p", md: "Kundalik hayotda qisqa xat, eslatma va SMS yozamiz. Ularda gapning bir qismi tushib qolishi mumkin, lekin muloyimlik va aniqlik muhim." },
        {
          t: "examples", items: [
            { en: "Gone to the shop. Back at five. Dinner is in the fridge.", uz: "Do'konga ketdim. Beshda qaytaman. Kechki ovqat muzlatgichda.", note: "Eslatma: *I've* va *I'll* tushib qolgan." },
            { en: "Dad, please call Grandma tonight. Don't forget!", uz: "Dada, kechqurun buvimga qo'ng'iroq qiling. Esdan chiqarmang!" },
            { en: "Hi Aziz! I'm running late. See you at 7.", uz: "Salom Aziz! Kechikyapman. Soat 7 da ko'rishamiz." },
            { en: "Thanks for your help yesterday! You're great.", uz: "Kechagi yordaming uchun rahmat! Zo'rsan." },
          ],
        },
        {
          t: "table", head: ["Maqsad", "Ibora"], speak: [1],
          rows: [
            ["Kechikish", "Sorry, I'm running late."],
            ["Eslatish", "Don't forget to bring your passport."],
            ["Rahmat", "Thanks a lot for…, / Thank you for your help."],
            ["Kechirim", "Sorry, I can't come. I have to work."],
            ["Uchrashuv", "Shall we meet at 6 outside the metro?"],
          ],
        },
        { t: "tip", tone: "info", md: "Do'stlarga: **Hi / Hello**, **See you**, **Bye**. Rasmiy yozuvda: **Dear…**, **Best regards**. Bir xabarda ikkalasini aralashtirmang." },
        { t: "check", ex: { k: "choice", q: "Siz kechikyapsiz. Do'stingizga yozasiz:", opts: ["Sorry, I'm running late.", "Sorry, I late.", "Sorry, I'm lated.", "Sorry, I running late."], a: 0, why: "**be running late** — kechikmoqda." } },
      ],
    },
    {
      title: "Taklifnoma va javob",
      blocks: [
        { t: "p", md: "Taklifnomada: **nima**, **qachon**, **qayerda** va **javob berish muddati** bo'lishi kerak. Javobda taklifni qabul qilamiz yoki muloyim rad etamiz." },
        {
          t: "text", title: "An invitation and two replies",
          en: "Hi Kamol! I'm having a birthday party on Saturday, 14 June, at 6 p.m. at my house. We're going to have plov and play games. Would you like to come? Please reply by Thursday. Dilnoza\n\nHi Dilnoza! Thanks for the invitation. I'd love to come! Can I bring something? Kamol\n\nHi Dilnoza, thank you for inviting me, but I'm sorry, I can't come. I have to work that evening. Have a great party! Kamol",
          uz: "Salom Kamol! Shanba kuni, 14-iyun kuni soat 18:00 da uyimda tug'ilgan kun bayrami bo'ladi. Palov qilamiz va o'yinlar o'ynaymiz. Kelasanmi? Iltimos, payshanbagacha javob ber. Dilnoza\n\nSalom Dilnoza! Taklif uchun rahmat. Bajonidil kelaman! Biror narsa olib kelsam bo'ladimi? Kamol\n\nSalom Dilnoza, meni taklif qilganing uchun rahmat, lekin kechirasan, kela olmayman. O'sha kechqurun ishlashim kerak. Bayramingiz zo'r o'tsin! Kamol",
        },
        {
          t: "table", head: ["Maqsad", "Ibora"], speak: [1],
          rows: [
            ["Taklif qilish", "Would you like to come to…? / Can you come?"],
            ["Qabul qilish", "I'd love to (come)! / Yes, I can."],
            ["Rad etish", "Sorry, I can't. I have to… / I'm busy that day."],
            ["Javob muddati", "Please reply by Thursday."],
          ],
        },
        { t: "tip", tone: "warn", md: "Rad etayotganda sababni qisqa ayting va **Sorry, but I can't** deng — qisqa \"No\" qo'pol eshitiladi. Muddat uchun **by** (gacha, oxirgi muddat): *reply **by** Thursday*; **until** esa \"shu vaqtgacha davom etib\" ma'nosida: *I'll wait **until** Thursday*." },
        { t: "check", ex: { k: "tf", q: "Kamol accepts the invitation in his second message.", a: false, why: "Ikkinchi javobida (Dilnozaga yozgan) u **rad etadi**: *I'm sorry, I can't come.* Birinchisida qabul qiladi." } },
        { t: "check", ex: { k: "choice", q: "\"Iltimos, payshanbagacha javob bering.\"", opts: ["Please reply by Thursday.", "Please reply until Thursday.", "Please reply at Thursday.", "Please replying Thursday."], a: 0, why: "Oxirgi muddat → **by**." } },
      ],
    },
  ],
  words: [
    { en: "qualification", uz: "malaka, diplom", ipa: "ˌkwɒlɪfɪˈkeɪʃn", pos: "noun", ex: "She has a qualification in tourism.", exUz: "Uning turizm bo'yicha diplomi bor." },
    { en: "reference", uz: "tavsiyanoma", ipa: "ˈrefrəns", pos: "noun", ex: "My old manager wrote me a reference.", exUz: "Avvalgi boshlig'im menga tavsiyanoma yozdi." },
    { en: "responsible", uz: "mas'ul", ipa: "rɪˈspɒnsəbl", pos: "adjective", ex: "I'm responsible for the reception.", exUz: "Men qabulxona uchun mas'ulman." },
    { en: "manage", uz: "boshqarmoq", ipa: "ˈmænɪdʒ", pos: "verb", ex: "She manages a team of ten people.", exUz: "U o'n kishilik jamoani boshqaradi." },
    { en: "organise", uz: "tashkil qilmoq", ipa: "ˈɔːɡənaɪz", pos: "verb", ex: "We organised a big party.", exUz: "Biz katta ziyofat tashkil qildik." },
    { en: "attach", uz: "biriktirmoq", ipa: "əˈtætʃ", pos: "verb", ex: "I have attached my CV.", exUz: "CV imni biriktirdim." },
    { en: "invitation", uz: "taklifnoma", ipa: "ˌɪnvɪˈteɪʃn", pos: "noun", ex: "Thank you for the invitation.", exUz: "Taklifnoma uchun rahmat." },
    { en: "reply", uz: "javob bermoq; javob", ipa: "rɪˈplaɪ", pos: "verb / noun", ex: "Please reply by Friday.", exUz: "Iltimos, juma kunigacha javob bering." },
    { en: "regards", uz: "hurmat bilan (xat oxirida)", ipa: "rɪˈɡɑːdz", pos: "noun", ex: "Best regards, Laylo", exUz: "Hurmat bilan, Laylo" },
    { en: "deadline", uz: "oxirgi muddat", ipa: "ˈdedlaɪn", pos: "noun", ex: "The deadline is next Monday.", exUz: "Oxirgi muddat — kelasi dushanba." },
  ],
  practice: [
    { k: "match", pairs: [["qualification", "malaka, diplom"], ["reference", "tavsiyanoma"], ["attach", "biriktirmoq"], ["deadline", "oxirgi muddat"], ["invitation", "taklifnoma"]] },
    { k: "listen", say: "I am writing to apply for the job of receptionist.", opts: ["I am writing to apply for the job of receptionist.", "I am waiting to apply for the job of receptionist.", "I am writing to reply for the job of receptionist."], a: 0 },
    { k: "listen", say: "Would you like to come to my party on Saturday?", opts: ["Would you like to come to my party on Saturday?", "Would you like to come to my party on Sunday?", "Did you come to my party on Saturday?"], a: 0 },
    { k: "choice", q: "Kimga yozayotganingizni bilmaysiz. Xatni qanday boshlaysiz?", opts: ["Dear Sir or Madam,", "Hi guys,", "Hello my friend,", "Dear Name,"], a: 0, why: "Rasmiy xat, ism noma'lum → **Dear Sir or Madam**." },
    { k: "choice", q: "Taklifni muloyim rad eting:", opts: ["Sorry, I can't. I have to work.", "No.", "I don't come.", "I'm not wanting."], a: 0, why: "**Sorry, I can't. I have to…**" },
    { k: "choice", q: "CV da qaysi gap tabiiy?", opts: ["Managed a team of five people.", "I am managing a team of five people since 2020.", "I manage the team five people.", "Managing a team five people."], a: 0, why: "CV da qisqa Past Simple iboralar." },
    { k: "fill", q: "I'm writing ___ apply for the position of cook.", a: ["to"], why: "**I'm writing to apply**." },
    { k: "fill", q: "I look forward ___ hearing from you.", a: ["to"], why: "**look forward to** + -ing." },
    { k: "fill", q: "I have five years of ___ in sales.", a: ["experience"], why: "**years of experience**." },
    { k: "fill", q: "Please find my CV ___. (biriktirilgan)", a: ["attached"], why: "**attached** — biriktirilgan." },
    { k: "tf", q: "**CV da har bir qatorni \"I am…, I have…\" bilan boshlash kerak.**", a: false, why: "CV da odatda qisqa iboralar yoziladi, \"I\" ishlatilmaydi." },
    { k: "tf", q: "**I look forward to hear from you.** — to'g'ri.", a: false, why: "To'g'risi: *I look forward to **hearing** from you.*" },
    { k: "order", uz: "Sizni tug'ilgan kunimga taklif qilmoqchiman.", words: ["Would", "you", "like", "to", "come", "to", "my", "birthday", "party?"], extra: ["coming", "will"] },
    { k: "translate", uz: "Taklifingiz uchun rahmat! Bajonidil kelaman.", a: ["Thank you for the invitation! I'd love to come.", "Thanks for the invitation! I'd love to come.", "Thank you for the invitation! I would love to come.", "Thanks for the invitation! I would love to come.", "Thanks for inviting me! I'd love to come.", "Thank you for inviting me! I'd love to come."] },
    { k: "translate", uz: "Iltimos, payshanbagacha javob bering.", a: ["Please reply by Thursday.", "Please reply me by Thursday.", "Please answer by Thursday.", "Please reply to me by Thursday."] },
    { k: "speak", say: "I am writing to apply for the position of receptionist. I look forward to hearing from you.", uz: "Resepshnist lavozimiga murojaat qilish uchun yozyapman. Sizdan javob kutaman." },
  ],
  quiz: [
    { k: "choice", q: "Qaysi gap **to'g'ri**?", opts: ["I look forward to see you.", "I look forward to seeing you.", "I look forward seeing you.", "I look forward to saw you."], a: 1, why: "**look forward to** + -ing." },
    { k: "choice", q: "CV da eng yangi ish joyi qayerda yoziladi?", opts: ["Birinchi", "Oxirida", "O'rtada", "Umuman yozilmaydi"], a: 0, why: "Teskari xronologik tartib: eng yangisi birinchi." },
    { k: "choice", q: "Do'stingiz sizni kechga taklif qildi, lekin siz bandsiz. Javob:", opts: ["Sorry, I can't. I'm busy that day.", "Never!", "I'm not.", "Why you ask?"], a: 0, why: "Muloyim rad etish." },
    { k: "choice", q: "Quyidagilardan qaysi biri rasmiy xat yakuni?", opts: ["Best regards,", "Bye bye!", "See you!", "Cheers mate"], a: 0, why: "Rasmiy: **Best regards / Yours sincerely**." },
    { k: "fill", q: "Dear Ms Aliyeva, I am writing ___ apply for the position.", a: ["to"], why: "**writing to apply**." },
    { k: "fill", q: "I have ___ my CV to this message. (biriktirdim)", a: ["attached"], why: "**have attached**." },
    { k: "fill", q: "Please reply ___ Friday. (gacha)", a: ["by"], why: "Oxirgi muddat → **by**." },
    { k: "listen", say: "Sorry, I'm running late. See you at seven.", opts: ["Sorry, I'm running late. See you at seven.", "Sorry, I ran late. See you at eleven.", "Sorry, I'm running. See you at seven."], a: 0 },
    { k: "tf", q: "**Yours faithfully** odatda ism noma'lum bo'lganda ishlatiladi (*Dear Sir or Madam*).", a: true },
    { k: "order", uz: "Dushanba kuni suhbatga kela olaman.", words: ["I", "am", "available", "for", "an", "interview", "on", "Monday."], extra: ["can", "to"], alt: [["I", "am", "available", "on", "Monday", "for", "an", "interview."]] },
  ],
  summary: [
    "CV bo'limlari: **Personal details, Profile, Work experience, Education, Skills, References** — eng yangi ish birinchi.",
    "CV da qisqa iboralar: *Organised events. Responsible for managing…* ; \"I\" siz.",
    "Cover message: **Dear… / I am writing to apply for… / I have attached my CV. / I look forward to hearing from you. / Yours sincerely.**",
    "Taklifnoma: **Would you like to come to…? Please reply by…** Javob: **I'd love to! / Sorry, I can't. I have to…**",
    "Norasmiy va rasmiy uslubni aralashtirmang: **Hi… See you!** va **Dear… Best regards.**",
  ],
  homework: "O'zingiz uchun inglizcha CV yozing (1 bet): personal details, 2 gapli profile, ish yoki o'qish tajribasi, ta'lim, tillar. Keyin tasavvurdagi bir ish uchun 5–6 gaplik cover message yozing (*I am writing to apply for… / I have attached… / I look forward to hearing from you*). Oxirida do'stingizni ziyofatga taklif qilib 3 gaplik SMS yozing.",
};

export default lesson;
