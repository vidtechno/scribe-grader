import type { Lesson } from '../../../types';

// Mini lesson (situation): reporting an incident to the police (road accident, theft). Uses Past Perfect (l1) and reported statements (l3).
const lesson: Lesson = {
  id: 'u19-l9',
  title: 'Reporting an incident',
  titleUz: "Voqea haqida xabar berish: yo'l hodisasi, o'g'rilik",
  mini: true,
  kind: 'situation',
  goal: "Politsiyaga **yo'l hodisasi yoki o'g'rilik** haqida xabar berasiz: nima, qachon va qayerda bo'lganini aytasiz, odam va narsani tasvirlaysiz va **boshqalar sizga nima degani**ni ko'chirasiz (*He told me he had lost control.*).",
  slides: [
    {
      title: "Xabar berishni boshlash",
      blocks: [
        { t: 'p', md: "Politsiyaga yoki xizmatga voqea haqida xabar berganda avval **nima uchun kelganingizni** ayting, so'ng savollarga javob bering. O'tgan voqealar uchun **Past Simple** va **Past Continuous**, undan oldingi ishlar uchun **Past Perfect** ishlating." },
        { t: 'table', head: ["Maqsad", "Ibora"], speak: [1], rows: [
          ["Boshlash", "I'd like to report a road accident."],
          ["Boshlash", "I'd like to report a theft."],
          ["Nima bo'ldi", "A white van crashed into a bus stop."],
          ["Qachon va qayerda", "It happened at about eight fifteen outside the station."],
          ["Kim jarohatlandi", "Nobody was badly injured."],
          ["Nima yo'qoldi", "Someone has stolen my bike."],
        ] },
        { t: 'tip', tone: 'info', md: "**report a theft** — o'g'rilik haqida xabar bermoq. **at about eight** — taxminan soat sakkizda. **Nobody was injured** — hech kim jarohatlanmadi." },
        { t: 'check', ex: { k: 'choice', q: "Politsiyaga kirib, avval nima deysiz?", opts: ["I'd like to report a theft.", "I report you a theft.", "I want that you help me.", "Theft is happen."], a: 0, why: "Muloyim va to'g'ri boshlanish: **I'd like to report…**" } },
      ],
    },
    {
      title: "Dialog: Yo'l hodisasi",
      blocks: [
        { t: 'dialog', lines: [
          { who: 'Ben', en: "Good afternoon. How can I help you?", uz: "Xayrli kun. Sizga qanday yordam bera olaman?" },
          { who: 'Madina', en: "I'd like to report a road accident. I saw it this morning.", uz: "Yo'l hodisasi haqida xabar bermoqchiman. Uni bugun ertalab ko'rdim." },
          { who: 'Ben', en: "Thank you. What exactly happened?", uz: "Rahmat. Aynan nima bo'ldi?" },
          { who: 'Madina', en: "A white van was driving too fast, and it crashed into a bus stop.", uz: "Oq furgon juda tez ketayotgan edi va avtobus bekatiga borib urildi." },
          { who: 'Ben', en: "Was anyone injured?", uz: "Kimdir jarohatlandimi?" },
          { who: 'Madina', en: "One woman was slightly injured. The driver told me that he had lost control because the road was wet.", uz: "Bir ayol yengil jarohat oldi. Haydovchi menga yo'l ho'l bo'lgani uchun boshqaruvni yo'qotganini aytdi." },
          { who: 'Ben', en: "What time did it happen?", uz: "Soat nechada bo'ldi?" },
          { who: 'Madina', en: "At about eight fifteen. I was waiting for a bus when I heard a loud noise.", uz: "Taxminan sakkiz o'n beshda. Men avtobus kutayotgan edim, kuchli shovqinni eshitdim." },
          { who: 'Ben', en: "Could you make a statement, please? I'll need your name and phone number.", uz: "Ko'rsatma bera olasizmi? Ismingiz va telefon raqamingiz kerak bo'ladi." },
        ] },
        { t: 'check', ex: { k: 'tf', q: "Nobody was injured in the accident.", a: false, why: "*One woman was slightly injured.*" } },
        { t: 'check', ex: { k: 'choice', q: "Why did the driver lose control?", opts: ["The road was wet.", "He was asleep.", "The bus stopped suddenly.", "His phone rang."], a: 0, why: "*He had lost control because the road was wet.*" } },
      ],
    },
    {
      title: "Tasvirlash va ko'chirish",
      blocks: [
        { t: 'p', md: "Politsiya ko'pincha shuni so'raydi: **Can you describe him?** Tasvirlash uchun **was / wearing / in his twenties** kabi iboralar kerak. Boshqa odam sizga aytgan gapni esa **ko'chirma gap** bilan aytasiz." },
        { t: 'examples', items: [
          { en: "He was tall and thin, in his twenties, and he was wearing a black jacket.", uz: "U novcha va ozg'in, yigirma yoshlarda edi va qora kurtka kiygan edi." },
          { en: "It's a blue bike with a black seat.", uz: "Bu qora o'rindiqli ko'k velosiped." },
          { en: "A neighbour told me that she had seen a young man near the bikes.", uz: "Bir qo'shnim yoshgina yigitni velosipedlar yonida ko'rganini aytdi.", note: "*told me that she had seen* — ko'chirma gap + Past Perfect." },
          { en: "The driver said he couldn't stop in time.", uz: "Haydovchi o'z vaqtida to'xtay olmaganini aytdi.", note: "*can't* → *couldn't*." },
        ] },
        { t: 'tip', tone: 'good', md: "Ko'chirma gap tartibi: **told + kim + (that) + gap** yoki **said + (that) + gap**. *The driver told me that he had lost control.* To'g'ri; *The driver said me* — xato." },
        { t: 'check', ex: { k: 'choice', q: "\"I saw a young man near the bikes.\" → My neighbour said she ___ a young man near the bikes.", opts: ["had seen", "sees", "will see", "has seen"], a: 0, why: "Past Simple → **Past Perfect** (*had seen*)." } },
      ],
    },
    {
      title: "Dialog: Yo'qolgan velosiped",
      blocks: [
        { t: 'dialog', lines: [
          { who: 'Helen', en: "Good morning. Can I help you?", uz: "Xayrli tong. Sizga yordam bera olamanmi?" },
          { who: 'Karim', en: "Yes. Someone has stolen my bike. I'd like to report it.", uz: "Ha. Kimdir velosipedimni o'g'irlabdi. Xabar bermoqchiman." },
          { who: 'Helen', en: "When did you last see it?", uz: "Uni oxirgi marta qachon ko'rdingiz?" },
          { who: 'Karim', en: "Last night at about ten. I had locked it outside my flat. This morning it wasn't there.", uz: "Kecha kechqurun soat o'nlarda. Uni kvartiram oldida qulflab qo'ygan edim. Bugun ertalab u yo'q edi." },
          { who: 'Helen', en: "Can you describe it?", uz: "Uni tasvirlab bera olasizmi?" },
          { who: 'Karim', en: "It's a blue mountain bike with a black seat. My neighbour said she had seen a young man near it at midnight.", uz: "Bu qora o'rindiqli ko'k tog' velosipedi. Qo'shnim yarim tunda uning yonida yosh yigitni ko'rganini aytdi." },
          { who: 'Helen', en: "Thank you. Please fill in this form and make a statement.", uz: "Rahmat. Iltimos, shu anketani to'ldiring va ko'rsatma bering." },
        ] },
        { t: 'check', ex: { k: 'fill', q: "Karim ___ the bike outside his flat the night before. (lock)", a: ["had locked"], why: "Oldingi ish → **had locked**." } },
        { t: 'check', ex: { k: 'choice', q: "What does Helen ask Karim to do at the end?", opts: ["Fill in a form", "Buy a new bike", "Call his neighbour", "Come back tomorrow"], a: 0, why: "*Please fill in this form and make a statement.*" } },
      ],
    },
  ],
  words: [
    { en: 'witness', uz: "guvoh", ipa: 'ˈwɪt.nəs', pos: 'noun', ex: 'The witness saw the whole accident.', exUz: "Guvoh butun hodisani ko'rdi." },
    { en: 'injured', uz: "jarohatlangan", ipa: 'ˈɪn.dʒəd', pos: 'adj', ex: 'Two people were slightly injured.', exUz: "Ikki kishi yengil jarohat oldi." },
    { en: 'crash', uz: "to'qnashmoq; to'qnashuv", ipa: 'kræʃ', pos: 'verb', ex: 'The van crashed into a wall.', exUz: "Furgon devorga borib urildi." },
    { en: 'theft', uz: "o'g'irlik", ipa: 'θeft', pos: 'noun', ex: "The theft happened while we were on holiday.", exUz: "O'g'irlik biz dam olayotganimizda sodir bo'ldi." },
    { en: 'break in', uz: "bostirib kirmoq", ipa: 'breɪk ɪn', pos: 'phrasal verb', ex: "Someone broke in through the back window.", exUz: "Kimdir orqa deraza orqali bostirib kirdi." },
    { en: 'make a statement', uz: "ko'rsatma bermoq", ipa: 'meɪk ə ˈsteɪt.mənt', pos: 'phrase', ex: 'The police asked him to make a statement.', exUz: "Politsiya undan ko'rsatma berishni so'radi." },
  ],
  practice: [
    { k: 'match', pairs: [['witness', 'guvoh'], ['injured', 'jarohatlangan'], ['crash', "to'qnashmoq"], ['damage', 'zarar'], ['make a statement', "ko'rsatma bermoq"]] },
    { k: 'listen', say: "I'd like to report a theft.", opts: ["I'd like to report a theft.", "I'd like to report an accident.", "I'd like to buy a bike.", "I'd like to report a fire."], a: 0 },
    { k: 'choice', q: "Someone ___ my wallet on the bus yesterday.", opts: ["stole", "stolen", "steals", "stealed"], a: 0, why: "Past Simple: **stole**. (*stolen* — V3)." },
    { k: 'choice', q: "Politsiyachi: *Can you describe him?* Siz:", opts: ["He was tall, in his thirties, and he was wearing a grey coat.", "Yes, he describes.", "He is a thief since yesterday.", "I have described him tomorrow."], a: 0, why: "Tasvir: **was tall, was wearing…**" },
    { k: 'fill', q: "The driver told me that he ___ control of the car. (lose)", a: ["had lost"], why: "Ko'chirma gap: *lost* → **had lost**." },
    { k: 'fill', q: "A neighbour ___ me that she had seen a man near the bikes.", a: ["told"], why: "**told + kim**." },
    { k: 'fix', wrong: "The witness said me that he saw the accident.", a: ["The witness told me that he had seen the accident.", "The witness told me he had seen the accident.", "The witness said that he had seen the accident.", "The witness said he had seen the accident.", "The witness told me that he saw the accident.", "The witness told me he saw the accident."], hint: "said yoki told?", why: "**said** dan keyin *me* kelmaydi: *told me* yoki *said (that)*." },
    { k: 'fix', wrong: "Someone stealed my phone yesterday.", a: ["Someone stole my phone yesterday.", "Somebody stole my phone yesterday."], hint: "steal — tartibsiz fe'l", why: "**steal – stole – stolen**: o'tgan zamon **stole**." },
    { k: 'order', uz: "Men guvoh sifatida ko'rsatma bermoqchiman.", words: ["I'd", "like", "to", "make", "a", "statement."], extra: ["making", "do"], alt: [["I", "would", "like", "to", "make", "a", "statement."]], why: "**make a statement** — ko'rsatma bermoq." },
    { k: 'translate', uz: "Kimdir velosipedimni o'g'irladi.", a: ["Someone has stolen my bike.", "Someone stole my bike.", "Somebody has stolen my bike.", "Somebody stole my bike.", "My bike has been stolen.", "My bike was stolen."] },
    { k: 'dictation', say: "I was waiting for a bus when I heard a loud noise.", a: ["I was waiting for a bus when I heard a loud noise."] },
    { k: 'speak', say: "I'd like to report a road accident.", uz: "Yo'l hodisasi haqida xabar bermoqchiman." },
  ],
  quiz: [
    { k: 'choice', q: "A white van ___ into a bus stop this morning.", opts: ["crashed", "crash", "has crash", "is crashed"], a: 0, why: "Aniq vaqt (*this morning* o'tgan) → Past Simple **crashed**." },
    { k: 'choice', q: "\"I can't stop in time,\" said the driver. → The driver said that he ___ stop in time.", opts: ["couldn't", "can't", "wouldn't be", "doesn't"], a: 0, why: "*can't* → **couldn't**." },
    { k: 'fill', q: "I ___ my bike outside the flat, but this morning it wasn't there. (lock)", a: ["had locked"], why: "Oldin qulflagan → **had locked**." },
    { k: 'tf', q: "**Witness** — voqeani o'z ko'zi bilan ko'rgan odam.", a: true, why: "Witness — guvoh." },
    { k: 'order', uz: "Haydovchi menga boshqaruvni yo'qotganini aytdi.", words: ["The", "driver", "told", "me", "he", "had", "lost", "control."], extra: ["said", "has"], alt: [["The", "driver", "told", "me", "that", "he", "had", "lost", "control."]], why: "**told me** + gap." },
    { k: 'translate', uz: "Bir ayol yengil jarohat oldi.", a: ["A woman was slightly injured.", "One woman was slightly injured.", "A woman was slightly hurt.", "One woman was slightly hurt."] },
  ],
  summary: [
    "Xabar berish: **I'd like to report a theft / a road accident.** So'ng: **what, when, where**.",
    "Nima bo'lgani — **Past Simple**, fon — **Past Continuous**, undan oldingi ish — **Past Perfect** (*I had locked it*).",
    "Boshqalarning gapi: **told me that he had lost control**; **said (that)…** bilan *me* ishlatilmaydi.",
    "Foydali so'zlar: **witness, injured, crash, steal – stole – stolen, damage, make a statement**.",
  ],
  homework: "Haqiqiy yoki xayoliy bir voqea haqida 6 ta gap yozing: nima bo'ldi, qachon, qayerda, kim jarohatlandi va bitta guvohning gapini **told me that…** bilan ko'chiring. Keyin uni politsiyachiga aytayotgandek ovoz chiqarib o'qing.",
};

export default lesson;
