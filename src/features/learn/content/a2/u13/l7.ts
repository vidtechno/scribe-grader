import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u13-l7",
  title: "Making plans",
  titleUz: "Reja tuzish: taklif, qabul va rad etish",
  goal: "Do'stlaringizga **taklif qilasiz** (*Would you like to come…? Why don't we…?*), taklifni **qabul qilasiz** yoki **xushmuomalalik bilan rad etasiz** (*I'd love to, but…*) hamda vaqt va joyni kelishib olasiz.",
  slides: [
    {
      title: "Taklif qilish",
      blocks: [
        { t: "p", md: "Reja tuzishning birinchi qadami — taklif. Inglizchada bir necha qolip bor va ularning **keyingi shakli** har xil. Shu qismi eng ko'p xato qilinadigan joy:" },
        {
          t: "table", head: ["Qolip", "Keyin nima keladi", "Misol"], speak: [2],
          rows: [
            ["Would you like to…?", "to + V1", "Would you like to come to my party?"],
            ["Do you want to…?", "to + V1 (norasmiyroq)", "Do you want to watch a film?"],
            ["Why don't we…?", "V1", "Why don't we go to the lake?"],
            ["How about…? / What about…?", "V-ing yoki ot", "How about going for a walk?"],
            ["Let's…", "V1", "Let's meet at six."],
            ["Are you free on…?", "vaqt", "Are you free on Saturday?"],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["Would you like to come?", "Why don't we go out?", "How about going to the cinema?"] },
          bad: { title: "Xato", items: ["Would you like come?", "Why don't we to go out?", "How about go to the cinema?"] },
        },
        { t: "check", ex: { k: "choice", q: "\"Biz bilan kinoga borishni xohlaysizmi?\"", opts: ["Would you like to go to the cinema with us?", "Would you like go to the cinema with us?", "Do you would like to go to the cinema with us?", "Would you like going to the cinema with us?"], a: 0, why: "**Would you like to + V1**." } },
      ],
    },
    {
      title: "Qabul qilish",
      blocks: [
        { t: "p", md: "Taklifni qabul qilganda minnatdorchilik va xursandlikni ko'rsating. Qisqa *Yes* yoki *OK* o'rniga quyidagi iboralarni ishlating:" },
        {
          t: "table", head: ["Ibora", "Ma'nosi"], speak: [0],
          rows: [
            ["Yes, I'd love to!", "Albatta, xursand bo'lardim!"],
            ["That sounds great!", "Zo'r bo'larkan!"],
            ["Good idea!", "Yaxshi fikr!"],
            ["Sure, why not?", "Albatta, nega yo'q?"],
            ["Thanks for inviting me.", "Taklif uchun rahmat."],
            ["I'm looking forward to it.", "Intizorlik bilan kutaman."],
          ],
        },
        { t: "tip", tone: "info", md: "**I'd love to** — qisqa javob. Uni *Would you like to…?* savoliga javob qilib ayting: *Would you like to come? — Yes, I'd love to.* Oxiridagi **come** ni takrorlamaysiz — **to** bilan tugatasiz." },
        { t: "check", ex: { k: "choice", q: "**Would you like to come to my party?** — Do'stona qabul qiling:", opts: ["Yes, I'd love to!", "Yes, I'd love.", "Yes, I want come.", "Yes, I'd like come."], a: 0 } },
      ],
    },
    {
      title: "Xushmuomala rad etish",
      blocks: [
        { t: "p", md: "Rad etishda to'g'ridan-to'g'ri *No* deyish qo'pol eshitilishi mumkin. Inglizlar qolipga amal qiladi: **minnatdorchilik → ozgina uzr → sabab → keyingi taklif**." },
        {
          t: "table", head: ["Qadam", "Misol"], speak: [1],
          rows: [
            ["1. Minnatdorchilik", "Thanks for asking!"],
            ["2. Uzr / afsus", "I'm afraid I can't. / I'd love to, but…"],
            ["3. Sabab", "I'm working that day. / I have another plan."],
            ["4. Boshqa taklif", "Maybe another time? / How about next week?"],
          ],
        },
        {
          t: "examples", items: [
            { en: "Thanks for asking, but I'm afraid I can't. I'm working on Saturday.", uz: "So'raganingiz uchun rahmat, lekin kela olmayman. Shanba kuni ishlayman." },
            { en: "I'd love to, but I'm seeing my grandparents. Maybe another time?", uz: "Xursand bo'lardim-u, buvilarimnikiga boraman. Boshqa safar bo'lmasmi?" },
            { en: "Sorry, I'm busy this weekend. How about next Sunday?", uz: "Kechirasiz, bu dam olish kunlari bandman. Kelasi yakshanba-chi?" },
          ],
        },
        { t: "tip", tone: "warn", md: "Rad etish hammaga qiyin, lekin noaniq javob (*Maybe… I'll see…*) do'stingizni kutdirib qo'yadi. Xushmuomala, lekin aniq bo'ling: *I'm afraid I can't.*" },
        { t: "check", ex: { k: "choice", q: "Qaysi javob eng xushmuomala rad etish?", opts: ["No.", "I don't want.", "I'd love to, but I'm busy on Saturday.", "Maybe I will, maybe not."], a: 2 } },
      ],
    },
    {
      title: "Vaqt va joyni kelishish",
      blocks: [
        { t: "p", md: "Taklif qabul qilingach, **qayerda** va **qachon** uchrashishni kelishib olamiz:" },
        {
          t: "table", head: ["Savol / taklif", "Javob"], speak: [0, 1],
          rows: [
            ["What time shall we meet?", "Let's meet at seven."],
            ["Where shall we meet?", "Let's meet outside the metro station."],
            ["Shall I pick you up?", "Yes, please. / No, I'll take the metro."],
            ["Is seven OK for you?", "Seven is fine. / Could we make it half past?"],
          ],
        },
        { t: "examples", items: [
          { en: "I'm meeting Aziz at the chaikhana at one o'clock.", uz: "Soat birda Aziz bilan choyxonada uchrashaman." },
          { en: "Let's meet outside the cinema.", uz: "Kinoteatr oldida uchrashaylik." },
          { en: "Could we make it a bit later?", uz: "Biroz kechroqqa qoldirsak bo'ladimi?" },
        ] },
        { t: "tip", tone: "good", md: "Tasdiqlash uchun gapni qayta ayting: *So, we're meeting at seven outside the metro. See you there!* Bu — ishonchli, aniq kelishuv." },
        { t: "check", ex: { k: "order", uz: "Soat nechada uchrashamiz?", words: ["What", "time", "shall", "we", "meet?"], extra: ["will", "do"] } },
      ],
    },
    {
      title: "Boshqa variant taklif qilish",
      blocks: [
        { t: "p", md: "Agar taklif sizga to'g'ri kelmasa, **o'z variantingizni** taklif qiling:" },
        {
          t: "table", head: ["Ibora", "Misol"], speak: [1],
          rows: [
            ["How about…?", "How about Sunday instead?"],
            ["What about…?", "What about going to the park instead?"],
            ["I'd prefer… if that's OK.", "I'd prefer to meet earlier, if that's OK."],
            ["Could we…?", "Could we meet at seven instead of six?"],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["How about meeting on Sunday?", "Could we meet at seven?"] },
          bad: { title: "Xato", items: ["How about to meet on Sunday?", "Could we to meet at seven?"] },
        },
        { t: "check", ex: { k: "fill", q: "How about ___ to the park? (go)", a: ["going"], why: "**How about + V-ing**." } },
        { t: "check", ex: { k: "tf", q: "**Why don't we to go out?** — to'g'ri.", a: false, why: "**Why don't we + V1**: *Why don't we go out?*" } },
      ],
    },
    {
      title: "Dialog: taklif va javob",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Dilnoza", en: "Hi, Kamol! Are you free on Saturday?", uz: "Salom, Kamol! Shanba kuni bo'shmisan?" },
            { who: "Kamol", en: "I think so. Why?", uz: "Shunday bo'lsa kerak. Nima edi?" },
            { who: "Dilnoza", en: "Would you like to come to the new art museum with me?", uz: "Men bilan yangi san'at muzeyiga borishni xohlaysanmi?" },
            { who: "Kamol", en: "I'd love to, but I'm helping my uncle move in the morning. Maybe in the afternoon?", uz: "Xursand bo'lardim-u, ertalab amakimga ko'chishga yordam beraman. Tushdan keyin bo'lmasmi?" },
            { who: "Dilnoza", en: "Sure! How about two o'clock? Shall I buy the tickets?", uz: "Albatta! Soat ikki-chi? Chiptalarni olaymi?" },
            { who: "Kamol", en: "Thanks! Let's meet outside the museum. See you at two!", uz: "Rahmat! Muzey oldida uchrashaylik. Soat ikkida ko'rishamiz!" },
          ],
        },
        { t: "check", ex: { k: "choice", q: "Why can't Kamol go in the morning?", opts: ["He is working.", "He is helping his uncle move.", "He doesn't like museums.", "He is sleeping."], a: 1 } },
        { t: "check", ex: { k: "tf", q: "They agree to meet outside the museum at two.", a: true } },
      ],
    },
    {
      title: "O'qing: guruh chati",
      blocks: [
        {
          t: "text", title: "Group chat",
          en: "Laylo writes in the group chat: \"Hi everyone! It's Aziz's birthday on Friday. Why don't we have dinner together? Would you like to come?\"\nDilnoza answers first: \"That sounds great! I'd love to. Where shall we go?\" Kamol writes: \"Thanks for asking, but I'm afraid I can't. I'm flying to Moscow on Friday morning. How about Saturday instead?\"\nLaylo thinks for a moment. \"OK, let's make it Saturday at seven at the new chaikhana. Is that fine for everybody?\" Soon all the thumbs go up. \"I'm looking forward to it!\" writes Aziz.",
          uz: "Laylo guruh chatiga yozadi: \"Hammaga salom! Juma kuni Azizning tug'ilgan kuni. Birga kechki ovqat qilsak-chi? Kelishni xohlaysizlarmi?\"\nBirinchi bo'lib Dilnoza javob beradi: \"Zo'r bo'larkan! Xursand bo'lardim. Qayerga boramiz?\" Kamol yozadi: \"So'raganingiz uchun rahmat, lekin kela olmayman. Juma kuni ertalab Moskvaga uchaman. Buning o'rniga shanba-chi?\"\nLaylo bir zum o'ylaydi. \"Mayli, shanba kuni soat yettida yangi choyxonada qilamiz. Hammaga bo'ladimi?\" Tez orada hamma barmoq ko'tarilgan belgisini qo'yadi. \"Intizorlik bilan kutaman!\" deb yozadi Aziz.",
        },
        { t: "check", ex: { k: "choice", q: "When will they have the dinner?", opts: ["On Friday.", "On Saturday at seven.", "On Sunday.", "On Friday at seven."], a: 1 } },
        { t: "check", ex: { k: "tf", q: "Kamol accepts the first invitation.", a: false, why: "*I'm afraid I can't. I'm flying to Moscow on Friday.*" } },
      ],
    },
  ],
  words: [
    { en: "invite", uz: "taklif qilmoq (mehmonga)", ipa: "ɪnˈvaɪt", pos: "verb", ex: "She invited us to her wedding.", exUz: "U bizni to'yiga taklif qildi." },
    { en: "invitation", uz: "taklifnoma; taklif", ipa: "ˌɪnvɪˈteɪʃn", pos: "noun", ex: "Thanks for the invitation.", exUz: "Taklif uchun rahmat." },
    { en: "accept", uz: "qabul qilmoq", ipa: "əkˈsept", pos: "verb", ex: "I'd like to accept your invitation.", exUz: "Taklifingizni qabul qilmoqchiman." },
    { en: "decline", uz: "rad etmoq (xushmuomala)", ipa: "dɪˈklaɪn", pos: "verb", ex: "He politely declined the offer.", exUz: "U taklifni xushmuomala rad etdi." },
    { en: "I'd love to", uz: "Xursand bo'lardim", ipa: "aɪd lʌv tuː", pos: "phrase", ex: "Would you like to come? — I'd love to.", exUz: "Kelasizmi? — Xursand bo'lardim." },
    { en: "I'm afraid", uz: "Afsuski", ipa: "aɪm əˈfreɪd", pos: "phrase", ex: "I'm afraid I can't come.", exUz: "Afsuski, kela olmayman." },
    { en: "another time", uz: "boshqa safar", ipa: "əˈnʌðə taɪm", pos: "phrase", ex: "Maybe another time?", exUz: "Boshqa safar bo'lmasmi?" },
    { en: "look forward to", uz: "intizorlik bilan kutmoq", ipa: "lʊk ˈfɔːwəd tuː", pos: "phrasal verb", ex: "I'm looking forward to the weekend.", exUz: "Dam olish kunlarini intizor kutyapman." },
    { en: "meet up", uz: "uchrashmoq", ipa: "miːt ʌp", pos: "phrasal verb", ex: "Let's meet up on Friday.", exUz: "Juma kuni uchrashaylik." },
    { en: "sounds great", uz: "zo'r bo'larkan", ipa: "saʊndz ɡreɪt", pos: "phrase", ex: "A picnic? That sounds great!", exUz: "Pikinikmi? Zo'r bo'larkan!" },
  ],
  practice: [
    { k: "match", pairs: [["invite", "taklif qilmoq"], ["accept", "qabul qilmoq"], ["decline", "rad etmoq"], ["another time", "boshqa safar"], ["meet up", "uchrashmoq"]] },
    { k: "listen", say: "Would you like to come to my party?", opts: ["Would you like to come to my party?", "Do you like to come to my party?", "Would you like come to my party?"], a: 0 },
    { k: "listen", say: "I'd love to, but I'm busy on Saturday.", opts: ["I'd love to, but I'm busy on Saturday.", "I don't love to, but I'm busy on Saturday.", "I love it, but I'm busy on Saturday."], a: 0 },
    { k: "fill", q: "Would you like ___ come to the cinema with me?", a: ["to"] },
    { k: "fill", q: "How about ___ for a walk? (go)", a: ["going"] },
    { k: "fill", q: "Why don't we ___ to the lake? (go)", a: ["go"], why: "**Why don't we + V1**." },
    { k: "fill", q: "Thanks for asking, but I'm ___ I can't.", a: ["afraid"], uz: "So'raganingiz uchun rahmat, lekin afsuski, kela olmayman." },
    { k: "choice", q: "Qaysi gap **xato**?", opts: ["Would you like to join us?", "Let's go to the park.", "How about to go to the park?", "Why don't we meet at six?"], a: 2, why: "To'g'ri: *How about going…?*" },
    { k: "choice", q: "**Taklifni qabul qiling:** Do you want to have dinner with us?", opts: ["Yes, that sounds great!", "Yes, I'm afraid.", "No, I'd love to.", "Yes, thanks for refusing."], a: 0 },
    { k: "choice", q: "**Xushmuomala rad eting:** Would you like to come on Sunday?", opts: ["No way!", "Sorry, I'm busy. Maybe another time?", "I won't come, never.", "Yes, I don't."], a: 1 },
    { k: "tf", q: "Rad etishda sabab aytish va boshqa vaqt taklif qilish xushmuomalalik hisoblanadi.", a: true },
    { k: "tf", q: "**Would you like going?** — to'g'ri.", a: false, why: "**Would you like to go?**" },
    { k: "order", uz: "Nega biz ertaga uchrashmaymiz?", words: ["Why", "don't", "we", "meet", "tomorrow?"], extra: ["to", "meeting"] },
    { k: "translate", uz: "Shanba kuni tug'ilgan kunimga kelishni xohlaysizmi?", a: ["Would you like to come to my birthday party on Saturday?", "Would you like to come to my birthday on Saturday?", "Would you like to come to my party on Saturday?", "Do you want to come to my birthday party on Saturday?", "Do you want to come to my birthday on Saturday?"] },
    { k: "speak", say: "Thanks for asking, but I'm afraid I can't. Maybe another time?", uz: "So'raganingiz uchun rahmat, lekin afsuski, kela olmayman. Boshqa safar bo'lmasmi?" },
  ],
  quiz: [
    { k: "fill", q: "Would you like ___ have lunch with me?", a: ["to"] },
    { k: "fill", q: "How about ___ the bus? (take)", a: ["taking"] },
    { k: "choice", q: "\"Soat nechada uchrashamiz?\"", opts: ["What time shall we meet?", "What time we shall meet?", "What time do we shall meet?", "What time shall we to meet?"], a: 0 },
    { k: "choice", q: "**Would you like to come to the concert?** — Rad eting:", opts: ["I'd love to, but I'm working.", "I don't like.", "Not come.", "I'm afraid yes."], a: 0 },
    { k: "choice", q: "**Let's ___ at seven outside the metro.**", opts: ["meet", "meeting", "to meet", "meets"], a: 0 },
    { k: "listen", say: "I'm looking forward to it.", opts: ["I'm looking forward to it.", "I'm looking for it.", "I'm looking forward at it."], a: 0 },
    { k: "tf", q: "**Would you like to…?** dan keyin **to + V1** keladi.", a: true },
    { k: "tf", q: "**Why don't we to meet?** to'g'ri.", a: false },
    { k: "order", uz: "Intizorlik bilan kutyapman.", words: ["I'm", "looking", "forward", "to", "it."], extra: ["for", "at"], alt: [["I", "am", "looking", "forward", "to", "it."]] },
    { k: "translate", uz: "Afsuski, men kela olmayman.", a: ["I'm afraid I can't come.", "I'm afraid I can't.", "I am afraid I can't come.", "I am afraid I can't.", "I'm afraid I can't make it.", "I am afraid I cannot come."] },
  ],
  summary: [
    "Taklif: **Would you like to + V1?**, **Why don't we + V1?**, **How about + V-ing?**, **Let's + V1**.",
    "Qabul: **I'd love to! / That sounds great! / Good idea!**",
    "Rad etish: minnatdorchilik + **I'd love to, but… / I'm afraid I can't** + sabab + boshqa taklif.",
    "Kelishuv: **What time / Where shall we meet?** va tasdiqlash: *So we're meeting at seven.*",
  ],
  homework: "Do'stingizga ingliz tilida 3 ta taklif yozing (kino, choyxona, sayr). Keyin o'zingiz uchun 2 ta javob yozing: bittasi qabul, bittasi xushmuomala rad (*I'd love to, but… Maybe another time?*). Bir dialogni ovoz chiqarib 3 marta takrorlang.",
};

export default lesson;
