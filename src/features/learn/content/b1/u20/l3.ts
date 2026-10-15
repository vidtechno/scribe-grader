import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u20-l3",
  title: "Third conditional: past regrets",
  titleUz: "Third conditional: o'tgan zamon pushaymonligi",
  goal: "**Third conditional** (*If I had left earlier, I wouldn't have missed the bus*) yordamida o'tmishda bo'lmagan narsa haqida pushaymonlik yoki yengillik bildirasiz va **If I would have known** kabi xatodan qochasiz.",
  slides: [
    {
      title: "O'tmishni o'zgartirib bo'lmaydi, lekin tasavvur qilamiz",
      blocks: [
        { t: "p", md: "Second conditional **hozirgi** va kelajakdagi xayoliy vaziyat haqida edi. **Third conditional** esa **o'tgan zamon** haqida: bo'lib o'tgan voqea boshqacha bo'lganida nima bo'lardi? Bu voqea endi o'zgarmaydi, shuning uchun gap ko'pincha **pushaymonlik** yoki **yengillik** bildiradi." },
        {
          t: "table", head: ["Qism", "Shakl", "Misol"], speak: [2],
          rows: [
            ["If qismi", "had + V3 (Past Perfect)", "If I had studied harder,"],
            ["Asosiy qism", "would have + V3", "I would have passed the exam."],
          ],
        },
        {
          t: "examples", items: [
            { en: "If I had left earlier, I wouldn't have missed the bus.", uz: "Ertaroq chiqqanimda, avtobusga kech qolmagan bo'lardim.", note: "Aslida: ertaroq chiqmadim va avtobusga kech qoldim." },
            { en: "If she had taken the job, she would have moved to Dubai.", uz: "U ishni qabul qilganida, Dubayga ko'chib o'tgan bo'lardi.", note: "Aslida: qabul qilmadi, ko'chmadi." },
          ],
        },
        { t: "tip", tone: "info", md: "O'zbekchada: *«ertaroq chiqqanimda, kech qolmagan bo'lardim»* — **-ganimda** = **had + V3**, **-gan bo'lardim** = **would have + V3**. Tuzilishi o'xshash, shuning uchun tushunish oson." },
        { t: "check", ex: { k: "fill", q: "If I had known about the problem, I ___ have helped you.", a: ["would", "could", "might"], why: "Asosiy qismda **would have + V3** (could / might ham mumkin)." } },
      ],
    },
    {
      title: "Shakl: inkor, qisqartma, could / might",
      blocks: [
        { t: "p", md: "Ikkala qism ham darak yoki inkor bo'lishi mumkin. Og'zaki nutqda **had** → **'d** va **would** → **'d** ga qisqaradi (ikkalasi ham bir xil eshitiladi), **would have** → **would've**." },
        {
          t: "table", head: ["Variant", "Misol"], speak: [1],
          rows: [
            ["+ / +", "If we had booked early, we would have got a cheaper flight."],
            ["+ / −", "If I had known, I wouldn't have said that."],
            ["− / +", "If you hadn't been late, we would have caught the train."],
            ["− / −", "If he hadn't lost his keys, he wouldn't have missed the meeting."],
          ],
        },
        { t: "p", md: "Natija qismida **would** o'rniga **could** (*qila olardim*) va **might** (*ehtimol …*) ham ishlatiladi:" },
        {
          t: "examples", items: [
            { en: "If I had had more money, I could have bought a bigger flat.", uz: "Pulim ko'proq bo'lganida, kattaroq xonadon sotib ola olardim." },
            { en: "If you had called me, I might have helped you.", uz: "Menga qo'ng'iroq qilganingizda, ehtimol yordam bergan bo'lardim." },
          ],
        },
        { t: "tip", tone: "warn", md: "**had** har doim **V3** (o'tgan zamon sifatdoshi) bilan keladi: *had gone, had seen, had taken*. To'g'ri bo'lmagan fe'llarni eslang: **go → gone, see → seen, take → taken, have → had**." },
        { t: "check", ex: { k: "choice", q: "If it ___ so cold, we would have gone to the beach.", opts: ["wasn't", "hadn't been", "wouldn't have been", "isn't"], a: 1, why: "O'tmish haqida: if qismida **Past Perfect**: *hadn't been*." } },
        { t: "check", ex: { k: "fill", q: "If I ___ (not eat) so much, I wouldn't have felt ill.", a: ["hadn't eaten", "had not eaten"], why: "If qismida **hadn't + V3**: *hadn't eaten*." } },
      ],
    },
    {
      title: "Second yoki third? Zamonni farqlang",
      blocks: [
        { t: "p", md: "Bir xil ibora ikki zamonga mos kelishi mumkin. Savol: **qaysi vaqt haqida gapiryapman?**" },
        {
          t: "table", head: ["", "Second conditional", "Third conditional"],
          rows: [
            ["Vaqt", "Hozir yoki kelajak", "O'tgan zamon"],
            ["If qismi", "Past Simple", "Past Perfect (had + V3)"],
            ["Natija", "would + V1", "would have + V3"],
            ["Misol", "If I had a car, I would drive to work.", "If I had had a car, I would have driven to work."],
            ["Aslida", "Hozir mashinam yo'q.", "O'sha paytda mashinam yo'q edi."],
          ],
        },
        { t: "tip", tone: "info", md: "Xayolda vaqtni belgilab oling: *now, today, tomorrow* — second; *yesterday, last year, at that time* — third." },
        { t: "check", ex: { k: "choice", q: "Kecha yomg'ir yog'di, shuning uchun biz sayrga chiqmadik. Qaysi gap mos?", opts: ["If it didn't rain yesterday, we would go for a walk.", "If it hadn't rained yesterday, we would have gone for a walk.", "If it hadn't rained yesterday, we would go for a walk.", "If it doesn't rain yesterday, we would have gone for a walk."], a: 1, why: "**Yesterday** — o'tgan zamon → third conditional." } },
      ],
    },
    {
      title: "Eng katta xato: if dan keyin would have",
      blocks: [
        { t: "p", md: "Second conditional dagi xato bu yerda ham uchraydi: if qismiga **would have** qo'yib yuboriladi. Bu juda keng tarqalgan xato, hatto ona tili egalari ham tez gapirganda shunday deyishi mumkin, lekin to'g'ri ingliz tili imtihon va yozuvda buni qabul qilmaydi." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["If I had known, I would have told you.", "If we had left earlier, we would have arrived on time.", "If she hadn't been ill, she would have come."] },
          bad: { title: "Xato", items: ["If I would have known, I would have told you.", "If we would have left earlier, we would have arrived on time.", "If she wouldn't have been ill, she would have come."] },
        },
        { t: "tip", tone: "warn", md: "**If** dan keyin hech qachon **would** qo'yilmaydi. O'tgan zamonda **had + V3** kerak." },
        { t: "check", ex: { k: "fix", wrong: "If I would have studied more, I would have passed the exam.", a: ["If I had studied more, I would have passed the exam.", "If I had studied more, I'd have passed the exam.", "If I had studied harder, I would have passed the exam."], hint: "If dan keyin had + V3", why: "If qismida **had + V3**: *If I had studied*." } },
        { t: "check", ex: { k: "fix", wrong: "If he had told me, I would helped him.", a: ["If he had told me, I would have helped him.", "If he had told me, I'd have helped him."], hint: "have yetishmayapti", why: "Natija: **would have + V3**: *would have helped*." } },
      ],
    },
    {
      title: "Savol va qisqa javob",
      blocks: [
        {
          t: "table", head: ["Savol", "Javob"], speak: [0, 1],
          rows: [
            ["What would you have done if you had missed the flight?", "I would have called the airline."],
            ["Would you have taken the job if they had offered it?", "Yes, I would. I would have taken it."],
            ["Would you have been angry if he had forgotten your birthday?", "No, I wouldn't. I would have understood."],
          ],
        },
        { t: "tip", tone: "good", md: "Qisqa javobda faqat **would** (yoki **wouldn't**) yetarli: *Yes, I would.* *have* ni takrorlamang." },
        { t: "check", ex: { k: "choice", q: "___ you have gone to the party if you had known Anna was there?", opts: ["Would", "Will", "Did", "Do"], a: 0, why: "Third conditional savoli: **Would you have + V3 … if you had + V3?**" } },
        { t: "check", ex: { k: "order", uz: "Agar bilganimda, senga yordam bergan bo'lardim.", words: ["If", "I", "had", "known,", "I", "would", "have", "helped", "you."], extra: ["knew", "will"], why: "If + had + V3, would have + V3." } },
      ],
    },
    {
      title: "O'qing: Rustamning bir kuni",
      blocks: [
        {
          t: "text", title: "A day to forget",
          en: "Last Monday was a terrible day for Rustam. He overslept because he hadn't set his alarm clock. If he had woken up on time, he wouldn't have missed his bus. He took a taxi, but there was an accident on the road, and he was an hour late for work. His manager was very disappointed. \"If you had called me, I would have understood,\" she said. Rustam realised that he had made a bad decision: he hadn't phoned anyone. Fortunately, the meeting hadn't started yet. Now he sets two alarms every night, and he never ignores his phone in the morning.",
          uz: "O'tgan dushanba Rustam uchun dahshatli kun bo'ldi. U budilnikni qo'ymagani uchun uxlab qoldi. Agar o'z vaqtida uyg'onganida, avtobusga kech qolmagan bo'lardi. U taksi oldi, lekin yo'lda avariya bo'ldi va u ishga bir soat kech qoldi. Rahbari juda xafa bo'ldi. «Menga qo'ng'iroq qilganingizda, tushungan bo'lardim,» dedi u. Rustam yomon qaror qilganini angladi: u hech kimga qo'ng'iroq qilmagan edi. Yaxshiyamki, yig'ilish hali boshlanmagan edi. Endi u har kecha ikkita budilnik qo'yadi va ertalab telefonini hech qachon e'tiborsiz qoldirmaydi.",
        },
        { t: "check", ex: { k: "tf", q: "Rustam called his manager before he arrived.", a: false, why: "Menejer: *If you had called me…* — u qo'ng'iroq **qilmagan**." } },
        { t: "check", ex: { k: "choice", q: "Why did Rustam miss his bus?", opts: ["He overslept.", "There was an accident.", "He lost his phone.", "He called a taxi."], a: 0, why: "U budilnik qo'ymagani uchun uxlab qoldi." } },
      ],
    },
    {
      title: "Dialog: kech qolgan uchrashuv",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Helen", en: "You look upset, Karim. What happened?", uz: "Karim, xafa ko'rinasan. Nima bo'ldi?" },
            { who: "Karim", en: "I missed my train this morning. If I had left home ten minutes earlier, I would have caught it.", uz: "Bugun ertalab poyezdga kech qoldim. Uydan o'n daqiqa ertaroq chiqqanimda, yetib olgan bo'lardim." },
            { who: "Helen", en: "That's a shame. Was it your fault?", uz: "Afsus. Sening aybing edimi?" },
            { who: "Karim", en: "Partly. I didn't check the timetable. If I had checked it, I wouldn't have waited at the wrong station.", uz: "Qisman. Jadvalni tekshirmadim. Tekshirganimda, noto'g'ri bekatda kutmagan bo'lardim." },
            { who: "Helen", en: "Well, next time you will know. Did you get to work in the end?", uz: "Keyingi safar bilib olasan. Oxiri ishga yetib keldingmi?" },
            { who: "Karim", en: "Yes, fortunately. My boss was in a meeting, so she didn't notice.", uz: "Ha, yaxshiyamki. Rahbarim yig'ilishda edi, shuning uchun sezmadi." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "What would have happened if Karim had left ten minutes earlier?", opts: ["He would have caught the train.", "He would have missed the train.", "He would have waited at the wrong station.", "His boss would have noticed."], a: 0, why: "*If I had left … I would have caught it.*" } },
      ],
    },
  ],
  words: [
    { en: "regret", uz: "pushaymon bo'lmoq, afsus", ipa: "rɪˈɡret", pos: "verb", ex: "I regret not learning English earlier.", exUz: "Inglizchani ertaroq o'rganmaganimdan afsusdaman." },
    { en: "realise", uz: "anglamoq, tushunib yetmoq", ipa: "ˈrɪə.laɪz", pos: "verb", ex: "I realised that I had left my bag on the train.", exUz: "Sumkamni poyezdda qoldirganimni angladim." },
    { en: "blame", uz: "ayblamoq", ipa: "bleɪm", pos: "verb", ex: "Don't blame yourself for the mistake.", exUz: "Xato uchun o'zingizni ayblamang." },
    { en: "fault", uz: "ayb, nuqson", ipa: "fɔːlt", pos: "noun", ex: "It wasn't your fault.", exUz: "Bu sizning aybingiz emas edi." },
    { en: "disappointed", uz: "hafsalasi pir bo'lgan", ipa: "ˌdɪs.əˈpɔɪn.tɪd", pos: "adj", ex: "I was disappointed with the result.", exUz: "Natijadan hafsalam pir bo'ldi." },
    { en: "fortunately", uz: "yaxshiyamki", ipa: "ˈfɔː.tʃən.ət.li", pos: "adv", ex: "Fortunately, nobody was hurt.", exUz: "Yaxshiyamki, hech kim jarohat olmadi." },
    { en: "accident", uz: "avariya, baxtsiz hodisa", ipa: "ˈæk.sɪ.dənt", pos: "noun", ex: "There was a bad accident on the motorway.", exUz: "Magistralda og'ir avariya bo'ldi." },
    { en: "consequence", uz: "oqibat", ipa: "ˈkɒn.sɪ.kwəns", pos: "noun", ex: "Bad decisions can have serious consequences.", exUz: "Noto'g'ri qarorlar jiddiy oqibatlarga olib kelishi mumkin." },
    { en: "decision", uz: "qaror", ipa: "dɪˈsɪʒ.ən", pos: "noun", ex: "It was a difficult decision to make.", exUz: "Bu qabul qilish qiyin bo'lgan qaror edi." },
    { en: "ignore", uz: "e'tiborsiz qoldirmoq", ipa: "ɪɡˈnɔːr", pos: "verb", ex: "He ignored the warning and went out.", exUz: "U ogohlantirishga e'tibor bermay, tashqariga chiqdi." },
  ],
  practice: [
    { k: "choice", q: "**If I ___ harder, I would have passed the exam.**", opts: ["studied", "had studied", "would study", "have studied"], a: 1, why: "O'tmishdagi xayoliy: **had + V3**." },
    { k: "choice", q: "**If we had left earlier, we ___ late.**", opts: ["wouldn't be", "wouldn't have been", "won't be", "hadn't been"], a: 1, why: "Natija: **would not have + V3**." },
    { k: "listen", say: "If I had known, I would have told you.", opts: ["If I had known, I would have told you.", "If I knew, I would tell you.", "If I know, I will tell you."], a: 0 },
    { k: "fill", q: "If she ___ the map, she wouldn't have got lost. (take)", a: ["had taken"], why: "If qismida **had + V3**: *had taken*." },
    { k: "fill", q: "If you had called me, I ___ have come. (would)", a: ["would", "could", "might"], why: "Natija: **would have + V3**." },
    { k: "fill", q: "If the weather ___ been better, we would have had a picnic.", a: ["had"], why: "**had been** — Past Perfect." },
    { k: "fill", q: "Yesterday it rained, so we stayed at home. If it ___ rained, we would have gone out.", a: ["hadn't", "had not"], why: "Aslida yomg'ir yog'gan → if qismi inkor: *hadn't rained*." },
    { k: "order", uz: "Ertaroq chiqqanimda, avtobusga kech qolmagan bo'lardim.", words: ["If", "I", "had", "left", "earlier,", "I", "wouldn't", "have", "missed", "the", "bus."], extra: ["would", "leave"], alt: [["If", "I", "had", "left", "earlier,", "I", "would", "not", "have", "missed", "the", "bus."]], why: "If + had + V3, wouldn't have + V3." },
    { k: "order", uz: "Agar bilganingizda, nima qilgan bo'lardingiz?", words: ["What", "would", "you", "have", "done", "if", "you", "had", "known?"], extra: ["did", "do"], why: "What would you have + V3 if you had + V3?" },
    { k: "translate", uz: "Agar u mendan so'raganida, men yordam bergan bo'lardim.", a: ["If he had asked me, I would have helped him.", "If he had asked me, I'd have helped him.", "If she had asked me, I would have helped her.", "If she had asked me, I'd have helped her.", "If he had asked me, I would have helped.", "If she had asked me, I would have helped."], why: "Third conditional." },
    { k: "translate", uz: "Men o'qiganimda, imtihondan o'tgan bo'lardim.", a: ["If I had studied, I would have passed the exam.", "If I had studied, I'd have passed the exam.", "If I had studied, I would have passed.", "If I had studied, I'd have passed."], why: "Third conditional: had studied, would have passed." },
    { k: "match", pairs: [["regret", "pushaymon bo'lmoq"], ["blame", "ayblamoq"], ["fault", "ayb"], ["fortunately", "yaxshiyamki"], ["consequence", "oqibat"]] },
    { k: "tf", q: "**If I would have known, I would have helped.** — bu gap to'g'ri.", a: false, why: "If dan keyin **had known** kerak." },
    { k: "tf", q: "Third conditional o'tmishda bo'lmagan voqea haqida gapiradi.", a: true, why: "Voqea o'tib ketgan, endi o'zgarmaydi." },
    { k: "fix", wrong: "If I had saw the sign, I would have stopped.", a: ["If I had seen the sign, I would have stopped.", "If I had seen the sign, I'd have stopped."], hint: "see ning V3 shakli", why: "**had seen** — *saw* emas, V3 kerak." },
    { k: "speak", say: "If I had left earlier, I wouldn't have missed the bus.", uz: "Ertaroq chiqqanimda, avtobusga kech qolmagan bo'lardim." },
  ],
  quiz: [
    { k: "choice", q: "**If he ___ the alarm, he wouldn't have overslept.**", opts: ["set", "had set", "would set", "has set"], a: 1, why: "**had set** — Past Perfect." },
    { k: "choice", q: "**If they had invited us, we ___ gone.**", opts: ["would", "would have", "had", "will have"], a: 1, why: "**would have + V3**: *would have gone*." },
    { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["If I would have time, I would have called.", "If I had had time, I would have called.", "If I have had time, I would call.", "If I had time, I would have called."], a: 1, why: "Third conditional: **had had** (had + V3), **would have called**." },
    { k: "fill", q: "If you ___ told me, I would have helped. (have)", a: ["had"], why: "**had told** — Past Perfect." },
    { k: "fill", q: "If she hadn't been ill, she ___ have come to the party.", a: ["would", "could", "might"], why: "**would have** + V3." },
    { k: "fill", q: "We ___ have got lost if we had used the map. (not)", a: ["wouldn't", "would not"], why: "Inkor natija: **wouldn't have got lost**." },
    { k: "listen", say: "If I had known, I wouldn't have said that.", opts: ["If I had known, I wouldn't have said that.", "If I knew, I wouldn't say that.", "If I had known, I would have said that."], a: 0 },
    { k: "tf", q: "**If we had booked early, we would have got a cheaper ticket.** — Biz erta band qilmaganmiz.", a: true, why: "Third conditional: aslida bo'lmagan ish." },
    { k: "fix", wrong: "If she had went to bed earlier, she wouldn't be tired yesterday.", a: ["If she had gone to bed earlier, she wouldn't have been tired yesterday.", "If she had gone to bed earlier, she would not have been tired yesterday."], hint: "go ning V3 shakli, va natija", why: "**had gone** va natija **wouldn't have been**." },
    { k: "order", uz: "Agar yomg'ir yog'masa edi, biz sayrga chiqqan bo'lardik.", words: ["If", "it", "hadn't", "rained,", "we", "would", "have", "gone", "out."], extra: ["didn't", "will"], why: "If + hadn't + V3, would have + V3." },
  ],
  summary: [
    "**Third conditional**: *If + had + V3, would have + V3* — o'tmishda **bo'lmagan** narsa haqida (pushaymonlik, yengillik, tanqid).",
    "Inkor: *If I hadn't…, I wouldn't have…*. Natijada **would** o'rniga **could have** (*qila olardim*) va **might have** (*ehtimol*) ham mumkin.",
    "Xato: ~~If I would have known~~. **If** dan keyin **had + V3**: *If I had known…*",
    "Vaqtni farqlang: hozir/kelajak — **second** (*If I had a car, I would drive*); o'tgan zamon — **third** (*If I had had a car, I would have driven*).",
    "Savol: **What would you have done if you had…?** Qisqa javob: *Yes, I would. / No, I wouldn't.*",
  ],
  homework: "O'tgan hafta yoki o'tgan yilgi 5 ta voqeani eslang. Har biri haqida **third conditional** gap yozing: *If I had …, I would have …*. Bittasi pushaymonlik, bittasi yengillik (*If I hadn't …, I would have …*) bo'lsin.",
};

export default lesson;
