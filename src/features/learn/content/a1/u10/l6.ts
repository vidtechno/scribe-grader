import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u10-l6",
  title: "have to / don't have to",
  titleUz: "Majburiyat: have to / don't have to",
  goal: "Majburiyat haqida gapirasiz: **I have to show my passport. She has to wear a uniform.** **don't have to** — \"shart emas\" ekanini bilasiz va so'raysiz: **Do I have to fill in this form?** O'tgan zamonda: *I **had to** wait for an hour.*",
  slides: [
    {
      title: "have to = majburman, kerak",
      blocks: [
        { t: "p", md: "**have to + V1** — biror narsani qilish **kerak**, **majburiy** (qoida, ish, vaziyat shuni talab qiladi). O'zbekchadagi **\"-ishim kerak\"** ga mos keladi:" },
        {
          t: "table", head: ["Ega", "Shakl", "Misol"], speak: [2],
          rows: [
            ["I / you / we / they", "have to + V1", "I have to get up at six."],
            ["he / she / it", "has to + V1", "She has to wear a uniform."],
          ],
        },
        {
          t: "examples", items: [
            { en: "You have to show your passport at the border.", uz: "Chegarada pasportingizni ko'rsatishingiz kerak." },
            { en: "We have to check in two hours before the flight.", uz: "Parvozdan ikki soat oldin ro'yxatdan o'tishimiz kerak." },
            { en: "My father has to take this medicine every day.", uz: "Otam bu dorini har kuni ichishi kerak." },
            { en: "Sorry, I have to go now.", uz: "Kechirasiz, hozir ketishim kerak." },
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["He has to work on Saturday.", "I have to go.", "She has to wait."] },
          bad: { title: "Xato", items: ["He have to work on Saturday.", "I have go.", "She has to waits."] },
        },
        { t: "tip", tone: "warn", md: "**-s** faqat bir joyda: **has** to. Asosiy fe'l doim **V1**: *She has to **work*** (❌ *has to works*)." },
        { t: "check", ex: { k: "fill", q: "Aziz is a doctor. He ___ to work at night sometimes.", a: ["has", "needs"], uz: "Aziz shifokor. U ba'zan kechasi ishlashi kerak.", why: "**he** → **has to**." } },
      ],
    },
    {
      title: "Talaffuz: \"hafta\" va \"hasta\"",
      blocks: [
        { t: "p", md: "Tez nutqda **have to** va **has to** o'zgarib eshitiladi — *v* \"f\" ga, *s* esa jarangsiz \"s\" ga aylanadi:" },
        {
          t: "sounds", items: [
            { label: "have to", say: "I have to go.", uz: "**\"hafta\"** — ❌ \"hev tu\" emas. *I have to go* = \"ay hafta gou\".", examples: ["I have to go.", "We have to wait."] },
            { label: "has to", say: "She has to work.", uz: "**\"hasta\"** — ❌ \"hez tu\" emas.", examples: ["She has to work.", "He has to study."] },
            { label: "had to", say: "I had to wait.", uz: "**\"hatta\"** — *d* va *t* qo'shilib ketadi.", examples: ["I had to wait.", "We had to pay."] },
          ],
        },
        { t: "tip", tone: "info", md: "Bu shakllarni **tushunish** uchun bilish shart. O'zingiz gapirganda \"hafta / hasta\" desangiz — juda tabiiy eshitiladi." },
        { t: "check", ex: { k: "listen", say: "She has to wear a uniform.", opts: ["She has to wear a uniform.", "She has a uniform.", "She had to wear a uniform."], a: 0, why: "\"hasta\" — **has to**." } },
      ],
    },
    {
      title: "don't have to = shart emas",
      blocks: [
        { t: "p", md: "Diqqat! **don't / doesn't have to** — \"mumkin emas\" **emas**. U **\"shart emas, kerak emas\"** degani: xohlasangiz qilasiz, xohlamasangiz — yo'q." },
        {
          t: "examples", items: [
            { en: "It's Sunday. I don't have to get up early.", uz: "Bugun yakshanba. Erta turishim shart emas." },
            { en: "For some countries, you don't have to get a visa.", uz: "Ba'zi davlatlarga viza olishingiz shart emas." },
            { en: "She doesn't have to pay. It's free for children.", uz: "U pul to'lashi shart emas. Bolalarga bepul." },
            { en: "You don't have to bring a towel. The hotel has towels.", uz: "Sochiq olib kelishingiz shart emas. Mehmonxonada sochiq bor." },
          ],
        },
        {
          t: "table", head: ["Gap", "Ma'nosi"], speak: [0],
          rows: [
            ["You have to wait.", "Kutishingiz kerak (boshqa yo'l yo'q)."],
            ["You don't have to wait.", "Kutishingiz shart emas (ketsangiz ham bo'ladi)."],
          ],
        },
        { t: "tip", tone: "warn", md: "\"Mumkin emas, taqiqlangan\" uchun **mustn't** yoki **can't** ishlatiladi (keyingi dars). Masalan, mehmonxonada:\n• *You **don't have to** pay for breakfast.* — to'lash shart emas (bepul).\n• *You **can't** smoke in the room.* — chekish mumkin emas." },
        { t: "check", ex: { k: "choice", q: "\"Bolalar chipta olishi shart emas.\"", opts: ["Children don't have to buy a ticket.", "Children doesn't have to buy a ticket.", "Children can't buy a ticket.", "Children have to not buy a ticket."], a: 0, why: "Shart emas → **don't have to**. *children* — ko'plik → **don't**." } },
      ],
    },
    {
      title: "Savol: Do I have to…?",
      blocks: [
        { t: "p", md: "Savol va qisqa javob **do / does** bilan yasaladi — xuddi oddiy fe'llardek:" },
        {
          t: "table", head: ["Savol", "Javob"], speak: [0, 1],
          rows: [
            ["Do I have to fill in this form?", "Yes, you do. / No, you don't."],
            ["Does she have to wear a uniform?", "Yes, she does. / No, she doesn't."],
            ["Do we have to book in advance?", "Yes, you do."],
            ["What time do you have to be at the airport?", "At six."],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["Do you have to work today?", "Does he have to go?", "Yes, I do."] },
          bad: { title: "Xato", items: ["Have you to work today?", "Does he has to go?", "Yes, I have."] },
        },
        { t: "check", ex: { k: "choice", q: "___ your brother have to wear a uniform at school?", opts: ["Do", "Does", "Has", "Is"], a: 1, why: "*your brother* = he → **Does … have to**." } },
        { t: "check", ex: { k: "choice", q: "*Do I have to pay now?* — Qisqa javob:", opts: ["Yes, you have.", "Yes, you do.", "Yes, you does.", "Yes, you are."], a: 1, why: "**Do…?** savoliga → **Yes, you do. / No, you don't.**" } },
      ],
    },
    {
      title: "O'tgan zamon: had to / didn't have to",
      blocks: [
        { t: "p", md: "O'tgan zamonda hamma shaxs uchun **had to**, inkori — **didn't have to**, savol — **Did … have to?**" },
        {
          t: "examples", items: [
            { en: "The flight was delayed, so we had to wait for three hours.", uz: "Reys kechikdi, shuning uchun uch soat kutishimizga to'g'ri keldi." },
            { en: "I lost my passport and I had to go to the embassy.", uz: "Pasportimni yo'qotdim va elchixonaga borishimga to'g'ri keldi." },
            { en: "We didn't have to queue. There was nobody there.", uz: "Navbatda turishimiz shart bo'lmadi. U yerda hech kim yo'q edi." },
            { en: "Did you have to pay for the visa?", uz: "Viza uchun pul to'lashingiz kerak bo'ldimi?" },
          ],
        },
        { t: "tip", tone: "warn", md: "❌ *I had to went.* — **had** dan keyin ham **to + V1**: ✅ *I had to **go**.*\n❌ *I didn't had to.* — ✅ *I didn't **have** to.*" },
        { t: "check", ex: { k: "fill", q: "Yesterday I was ill, so I ___ to stay at home.", a: ["had", "needed"], uz: "Kecha kasal edim, shuning uchun uyda qolishimga to'g'ri keldi.", why: "O'tgan zamon → **had to**." } },
      ],
    },
    {
      title: "Dialog: shifokor qabulida",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Receptionist", en: "Good morning. Have you got an appointment?", uz: "Xayrli tong. Qabulga yozilganmisiz?" },
            { who: "Rustam", en: "Yes, at ten o'clock with Dr Karimova. My name's Rustam Aliyev.", uz: "Ha, soat o'nga, doktor Karimovaga. Ismim Rustam Aliyev." },
            { who: "Receptionist", en: "Thank you. It's your first visit, so you have to fill in this form.", uz: "Rahmat. Bu sizning birinchi kelishingiz, shuning uchun bu anketani to'ldirishingiz kerak." },
            { who: "Rustam", en: "Do I have to write my insurance number?", uz: "Sug'urta raqamimni yozishim kerakmi?" },
            { who: "Receptionist", en: "No, you don't have to. Just your name, address and phone number.", uz: "Yo'q, shart emas. Faqat ismingiz, manzilingiz va telefon raqamingiz." },
            { who: "Rustam", en: "OK. Do I have to wait long?", uz: "Xo'p. Uzoq kutishim kerakmi?" },
            { who: "Receptionist", en: "About ten minutes. The doctor is with a patient now.", uz: "Taxminan o'n daqiqa. Shifokor hozir bemor bilan." },
            { who: "Rustam", en: "No problem. I'll wait. And after that, do I have to go to the pharmacy?", uz: "Muammo yo'q. Kutaman. Keyin dorixonaga borishim kerakmi?" },
            { who: "Receptionist", en: "Only if the doctor gives you a prescription.", uz: "Faqat shifokor retsept yozib bersa." },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Rustam anketaga sug'urta raqamini yozishi kerak.", a: false, why: "*Do I have to write my insurance number? — **No, you don't have to.***" } },
        {
          t: "text", title: "Nigora's job",
          en: "Nigora is a nurse at a hospital in Tashkent. Her job is interesting, but it isn't easy. She has to start work at seven, so she has to get up at half past five. She has to wear a white uniform and she has to be very careful with medicine.\nSometimes she has to work at night. But she doesn't have to work every weekend — only one Saturday a month. Last week a lot of people had a cold, and she had to stay at the hospital until ten in the evening. \"I was tired,\" she says, \"but I love my job.\"",
          uz: "Nigora Toshkentdagi kasalxonada hamshira. Uning ishi qiziq, lekin oson emas. U ishni yettida boshlashi kerak, shuning uchun besh yarimda turishi kerak. U oq forma kiyishi va dorilar bilan juda ehtiyot bo'lishi kerak.\nBa'zan kechasi ishlashiga to'g'ri keladi. Lekin har dam olish kuni ishlashi shart emas — oyiga faqat bitta shanba. O'tgan hafta ko'p odam shamollagan edi va u kasalxonada kechqurun soat o'ngacha qolishiga to'g'ri keldi. \"Charchadim,\" deydi u, \"lekin ishimni yaxshi ko'raman.\"",
        },
        { t: "check", ex: { k: "choice", q: "How often does Nigora have to work on Saturday?", opts: ["every Saturday", "one Saturday a month", "never", "two Saturdays a month"], a: 1, why: "*She doesn't have to work every weekend — only **one Saturday a month**.*" } },
      ],
    },
  ],
  words: [
    { en: "visa", uz: "viza", ipa: "ˈviː.zə", pos: "noun", ex: "Do I have to get a visa for the UK?", exUz: "Buyuk Britaniyaga viza olishim kerakmi?" },
    { en: "fill in", uz: "to'ldirmoq (anketa, blanka)", ipa: "ˌfɪl ˈɪn", pos: "phrasal verb", ex: "Please fill in this form.", exUz: "Iltimos, bu anketani to'ldiring." },
    { en: "form", uz: "shakl, anketa, blanka", ipa: "fɔːm", pos: "noun", ex: "I had to fill in a long form.", exUz: "Uzun anketani to'ldirishimga to'g'ri keldi." },
    { en: "waiting room", uz: "kutish xonasi", ipa: "ˈweɪ.tɪŋ ruːm", pos: "noun", ex: "You have to wait in the waiting room.", exUz: "Kutish xonasida kutishingiz kerak." },
    { en: "queue", uz: "navbat; navbatda turmoq", ipa: "kjuː", pos: "noun, verb", ex: "We had to queue for an hour.", exUz: "Bir soat navbatda turishimizga to'g'ri keldi." },
    { en: "on time", uz: "o'z vaqtida", ipa: "ɒn ˈtaɪm", pos: "phrase", ex: "You have to arrive on time.", exUz: "O'z vaqtida kelishingiz kerak." },
    { en: "prescription", uz: "retsept", ipa: "prɪˈskrɪp.ʃən", pos: "noun", ex: "You need a prescription for this medicine.", exUz: "Bu dori uchun retsept kerak." },
    { en: "insurance", uz: "sug'urta", ipa: "ɪnˈʃɔː.rəns", pos: "noun", ex: "You have to buy travel insurance.", exUz: "Sayohat sug'urtasini sotib olishingiz kerak." },
    { en: "document", uz: "hujjat", ipa: "ˈdɒk.jə.mənt", pos: "noun", ex: "Bring all your documents, please.", exUz: "Iltimos, hamma hujjatlaringizni olib keling." },
    { en: "embassy", uz: "elchixona", ipa: "ˈem.bə.si", pos: "noun", ex: "I had to go to the embassy to get a visa.", exUz: "Viza olish uchun elchixonaga borishimga to'g'ri keldi." },
  ],
  practice: [
    { k: "match", pairs: [["visa", "viza"], ["queue", "navbat"], ["prescription", "retsept"], ["insurance", "sug'urta"], ["appointment", "qabul (shifokorga)"]] },
    { k: "match", pairs: [["I have to go.", "Ketishim kerak."], ["I don't have to go.", "Ketishim shart emas."], ["I had to go.", "Ketishimga to'g'ri keldi."], ["Do I have to go?", "Ketishim kerakmi?"]] },
    { k: "listen", say: "We had to wait for two hours.", opts: ["We have to wait for two hours.", "We had to wait for two hours.", "We had to wait for ten hours."], a: 1, why: "\"hatta\" — **had to** (o'tgan zamon)." },
    { k: "listen", say: "You don't have to pay.", opts: ["You don't have to pay.", "You have to pay.", "You didn't have to pay."], a: 0 },
    { k: "choice", q: "My sister ___ to study for her exams this weekend.", opts: ["have", "has", "having", "does"], a: 1, why: "*my sister* = she → **has to**." },
    { k: "choice", q: "It's a holiday tomorrow, so we ___ go to work.", opts: ["have to", "don't have to", "doesn't have to", "has to"], a: 1, why: "Bayram — ishga borish **shart emas**: *we **don't have to***." },
    { k: "choice", q: "Qaysi gap **xato**?", opts: ["Does he have to work today?", "Do you have to wear a uniform?", "Does she has to pay?", "Did you have to wait?"], a: 2, why: "**Does** dan keyin **have**: *Does she **have** to pay?*" },
    { k: "fill", q: "You ___ to show your passport at the airport.", a: ["have", "need"], uz: "Aeroportda pasportingizni ko'rsatishingiz kerak.", why: "**you** → **have to**." },
    { k: "fill", q: "He ___ have to get a visa. It's not necessary for his country.", a: ["doesn't", "does not"], uz: "U viza olishi shart emas. Uning davlati uchun kerak emas.", why: "**he** → **doesn't have to** (shart emas)." },
    { k: "fill", q: "Please ___ in this form and sign here.", a: ["fill"], uz: "Iltimos, bu anketani to'ldiring va shu yerga imzo qo'ying.", why: "**fill in** a form — anketani to'ldirmoq." },
    { k: "tf", q: "**You don't have to smoke here** = \"Bu yerda chekish mumkin emas\".", a: false, why: "**don't have to** — shart emas. Taqiq uchun: *You **mustn't / can't** smoke here.*" },
    { k: "tf", q: "Nigora har kuni kechasi ishlashi kerak.", a: false, why: "*Sometimes she has to work at night.* — faqat **ba'zan**." },
    { k: "order", uz: "Viza olishim kerakmi?", words: ["Do", "I", "have", "to", "get", "a", "visa?"], extra: ["Am", "has"] },
    { k: "order", uz: "U (ayol) forma kiyishi kerak emas.", words: ["She", "doesn't", "have", "to", "wear", "a", "uniform."], extra: ["has", "don't"] },
    { k: "translate", uz: "Biz bir soat kutishimizga to'g'ri keldi.", a: ["We had to wait for an hour", "We had to wait for one hour", "We had to wait an hour", "We had to wait one hour"] },
    { k: "translate", uz: "Hozir ketishim kerak.", a: ["I have to go now", "I've got to go now", "I must go now", "Now I have to go", "I have to leave now", "I must leave now", "I need to go now", "I need to leave now", "I've got to leave now", "I have got to go now", "I've got to go right now", "I have to go right now"] },
    { k: "speak", say: "Do I have to fill in this form?", uz: "Bu anketani to'ldirishim kerakmi?" },
  ],
  quiz: [
    { k: "listen", say: "She has to start work at seven.", opts: ["She has to start work at seven.", "She had to start work at seven.", "She wants to start work at seven."], a: 0 },
    { k: "choice", q: "\"Sochiq olib kelishingiz shart emas.\"", opts: ["You can't bring a towel.", "You don't have to bring a towel.", "You have to bring a towel.", "You mustn't bring a towel."], a: 1, why: "Shart emas → **don't have to**." },
    { k: "choice", q: "___ you have to work last Saturday?", opts: ["Do", "Did", "Had", "Does"], a: 1, why: "*last Saturday* — o'tgan zamon → **Did you have to…?**" },
    { k: "choice", q: "*Does Ali have to wear a uniform?* — *No, ___.*", opts: ["he hasn't", "he doesn't", "he don't", "he isn't"], a: 1, why: "**Does…?** → **No, he doesn't.**" },
    { k: "choice", q: "To'g'ri gapni tanlang:", opts: ["My mum has to takes medicine.", "My mum have to take medicine.", "My mum has to take medicine.", "My mum has take medicine."], a: 2, why: "**has to + V1**." },
    { k: "fill", q: "The train was cancelled, so we ___ to take a taxi.", a: ["had", "needed"], uz: "Poyezd bekor qilindi, shuning uchun taksiga chiqishimizga to'g'ri keldi.", why: "O'tgan zamon → **had to**." },
    { k: "fill", q: "You need a ___ from your doctor for this medicine.", a: ["prescription"], uz: "Bu dori uchun shifokoringizdan retsept kerak.", why: "**prescription** — retsept." },
    { k: "tf", q: "**I don't have to get up early on Sunday** = Yakshanba kuni erta turishim shart emas.", a: true, why: "**don't have to** — shart emas." },
    { k: "translate", uz: "U (erkak) har kuni ishlashi kerak.", a: ["He has to work every day", "Every day he has to work", "He must work every day", "He's got to work every day", "He has got to work every day", "He needs to work every day", "He has to work each day"] },
    { k: "order", uz: "Biz navbatda turishimiz shart bo'lmadi.", words: ["We", "didn't", "have", "to", "queue."], extra: ["had", "don't"] },
  ],
  summary: [
    "**have to / has to + V1** — majburiyat (\"-ishim kerak\"): *She **has to** wear a uniform.* (*has to wears* ❌)",
    "**don't / doesn't have to** — **shart emas** (mumkin emas EMAS!): *You don't have to pay. It's free.*",
    "Savol: **Do I have to…? Does she have to…?** — *Yes, you do. / No, she doesn't.*",
    "O'tgan zamon: **had to / didn't have to / Did you have to…?** (*had to went* ❌).",
    "Talaffuz: **\"hafta\", \"hasta\", \"hatta\"**.",
  ],
  homework: "O'zingiz haqingizda yozing: har kuni nima qilishingiz kerak (4 gap, *have to*), nima shart emas (3 gap, *don't have to*), o'tgan hafta nima qilishingizga to'g'ri keldi (3 gap, *had to*). Keyin oila a'zolaringizdan biri haqida *has to / doesn't have to* bilan 4 gap yozing.",
};

export default lesson;
