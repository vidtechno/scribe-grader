import type { Lesson } from '../../../types';

// Mini lesson (grammar): Past Perfect Continuous and time clauses. Builds on l1 (narrative tenses) without repeating its story.
const lesson: Lesson = {
  id: 'u24-l12',
  title: 'Past Perfect Continuous and time clauses',
  titleUz: "Past Perfect Continuous va vaqt gaplari: by the time, no sooner… than, hardly… when",
  mini: true,
  kind: 'grammar',
  goal: "O'tgan paytdan **oldin** davom etgan jarayonni **Past Perfect Continuous** bilan aytasiz (*had been waiting for two hours*), **by the time, as soon as, after/before + -ing** bilan vaqt gaplari tuzasiz va *no sooner… than*, *hardly… when* ni o'qiganda taniysiz.",
  slides: [
    {
      title: "Past Perfect Continuous: shakl va ma'no",
      blocks: [
        { t: 'p', md: "Hikoyada ikkita o'tgan paytni solishtiramiz: **keyingi** payt (*Past Simple*) va undan **oldin** davom etgan jarayon. Shu jarayon uchun **had been + V-ing** ishlatiladi. Davomiylik (*for two hours, since morning*) yoki ko'rinib turgan natija (*her eyes were red*) asosiy belgi." },
        { t: 'table', head: ['Shakl', 'Formula', 'Misol'], speak: [2], rows: [
          ['Darak', 'had been + V-ing', "I had been waiting for two hours."],
          ['Inkor', "hadn't been + V-ing", "She hadn't been sleeping well."],
          ['Savol', 'Had + ega + been + V-ing?', "How long had you been waiting?"],
          ['Qisqa', "'d been + V-ing", "They'd been arguing all morning."],
        ] },
        { t: 'examples', items: [
          { en: "When the bus finally came, we had been standing in the rain for an hour.", uz: "Avtobus nihoyat kelganda, biz bir soatdan beri yomg'irda turgan edik.", note: "Davomiylik: **for an hour** — jarayon avtobus kelguncha davom etgan." },
          { en: "He was soaked because he had been walking in the downpour.", uz: "U ho'l bo'lgan edi, chunki jala ostida yurgan edi.", note: "Ko'rinib turgan natija (ho'l kiyim) + sabab." },
          { en: "She had written three emails by noon.", uz: "U tushgacha uchta email yozib bo'lgan edi.", note: "Natija yoki son — **Past Perfect Simple**, chunki yakuniy son bor." },
        ] },
        { t: 'tip', tone: 'warn', md: "Holat fe'llari (*know, want, belong, understand*) **Continuous** shaklda ishlatilmaydi: *They had known each other for years* (*had been knowing* emas)." },
        { t: 'check', ex: { k: 'choice', q: "When Tom finally arrived, we ___ for him for two hours, so we were annoyed.", opts: ['had been waiting', 'were wait', 'have been waiting', 'had been waited'], a: 0, why: "Kelishdan oldin davom etgan jarayon + muddat: **had been waiting**." } },
        { t: 'check', ex: { k: 'fill', q: "Her eyes were red because she ___ crying.", a: ['had been', "'d been"], uz: "Uning ko'zlari qizargan edi, chunki u yig'lagan edi.", why: "Ko'rinib turgan natija: **had been + V-ing**." } },
      ],
    },
    {
      title: "Vaqt gaplari: by the time, as soon as, after -ing",
      blocks: [
        { t: 'table', head: ['Bog\'lovchi', 'Ma\'no va tuzilma', 'Misol'], speak: [2], rows: [
          ['by the time', "…ga kelib; asosiy gap Past Perfect", "By the time we got there, the film had started."],
          ['as soon as', "…bilanoq", "As soon as I sat down, the phone rang."],
          ['after / before + -ing', "ega bir xil bo'lsa", "After finishing the report, she went home."],
          ['no sooner … than', "…ishi bilan (rasmiy, inversiya)", "No sooner had he left than it started to rain."],
          ['hardly … when', "…ishi bilan (rasmiy, inversiya)", "Hardly had we started when the lights went out."],
        ] },
        { t: 'tip', tone: 'info', md: "*No sooner* va *hardly* gap boshida kelsa, yordamchi fe'l **ega oldiga** o'tadi: *No sooner **had he** left…* *no sooner* dan keyin **than**, *hardly / scarcely* dan keyin **when**. Bu shakllarni asosan **o'qib taniysiz**; gapirishda *As soon as…* qulay." },
        { t: 'compare',
          good: { title: "To'g'ri", items: ["By the time I arrived, they had left.", "After finishing work, I went home.", "No sooner had she sat down than he left.", "Hardly had we arrived when it rained."] },
          bad: { title: 'Xato', items: ["By the time I arrived, they left.", "After to finish work, I went home.", "No sooner she had sat down than he left.", "Hardly had we arrived than it rained."] } },
        { t: 'check', ex: { k: 'choice', q: "By the time the ambulance ___, the crowd had gone.", opts: ['arrived', 'would arrive', 'was arriving', 'arrive'], a: 0, why: "*by the time* gapida odatda **Past Simple**, asosiy gapda **Past Perfect**." } },
        { t: 'check', ex: { k: 'fill', q: "After ___ the email, he closed his laptop. (send)", a: ['sending'], why: "*after* dan keyin ega bir xil bo'lsa **-ing**." } },
      ],
    },
    {
      title: "Tipik xatolar (o'zbek tilidan)",
      blocks: [
        { t: 'p', md: "O'zbek tilida *ikki soat kutgan edik* deymiz — fe'l shakli o'sha, inglizchada esa oldingi jarayonni **had been + V-ing** bilan ajratish kerak. Shuningdek *-ib* qo'shimchali ravishdosh (*tugatib*) inglizchada **after + V-ing** ga to'g'ri keladi." },
        { t: 'compare',
          good: { title: "To'g'ri", items: ["She had been waiting for hours.", "They had known each other for years.", "After finishing the report, she left.", "No sooner had he left than it rained."] },
          bad: { title: 'Xato', items: ["She had been wait for hours.", "They had been knowing each other for years.", "After to finish the report, she left.", "No sooner he left than it rained."] } },
        { t: 'check', ex: { k: 'fix', wrong: "She had been wait for hours.", a: ["She had been waiting for hours.", "She'd been waiting for hours."], why: "**had been + V-ing**: *waiting*." } },
        { t: 'check', ex: { k: 'fix', wrong: "They had been knowing each other for years.", a: ["They had known each other for years.", "They'd known each other for years."], why: "*know* — holat fe'li: **had known**." } },
      ],
    },
    {
      title: "Matn va dialog",
      blocks: [
        { t: 'text', title: 'A long afternoon', voice: 'george', en: "Last Saturday I was stranded at a small station for most of the afternoon. By the time the replacement bus finally arrived, I had been hanging around on the platform for three hours, and I was completely soaked from the downpour. The delay had dragged on because a tree had fallen across the line. No sooner had I sat down on the bus than my phone rang. It was my sister, who had been trying to reach me all afternoon and was frantic with worry. I told her I was fine, and as soon as I got home, I made a hot cup of tea.", uz: "O'tgan shanba kuni tushdan keyin ko'p vaqt kichik bekatda qolib ketdim. Almashtiruvchi avtobus nihoyat kelganda, men platformada uch soatdan beri aylanib yurgan edim va jaladan butunlay ho'l bo'lgan edim. Kechikish cho'zildi, chunki yo'lga daraxt qulab tushgan edi. Avtobusga o'tirishim bilan telefonim jiringladi. Bu opam edi, u butun tushdan keyin menga qo'ng'iroq qilishga urinib, xavotirdan o'zini yo'qotgan edi. Men yaxshi ekanimni aytdim va uyga kelishim bilan issiq choy damladim." },
        { t: 'check', ex: { k: 'tf', q: "The narrator had waited for three hours when the bus arrived.", a: true, why: "*I had been hanging around on the platform for three hours.*" } },
        { t: 'check', ex: { k: 'choice', q: "Why was the narrator's sister frantic?", opts: ["She hadn't been able to reach him.", "She had been stranded too.", "A tree had fallen on her car.", "She had missed the bus."], a: 0, why: "*My sister … had been trying to reach me all afternoon.*" } },
        { t: 'dialog', lines: [
          { who: 'Zarina', en: "You look exhausted, Max. What happened?", uz: "Juda charchagan ko'rinasan, Maks. Nima bo'ldi?" },
          { who: 'Max', en: "I'd been queuing at the visa office since seven, and by the time they opened, my feet were frozen.", uz: "Yettidan beri viza idorasida navbatda turgan edim va ular ochguncha oyoqlarim muzlab ketdi." },
          { who: 'Zarina', en: "How long had you been standing there?", uz: "U yerda qancha vaqtdan beri turgan eding?" },
          { who: 'Max', en: "Almost three hours. And hardly had I reached the desk when they said I'd brought the wrong form.", uz: "Deyarli uch soat. Va peshtaxtaga yetib borishim bilan noto'g'ri blank olib kelganimni aytishdi." },
          { who: 'Zarina', en: "That's terrible! Did you go back?", uz: "Bu dahshat! Qaytib bordingmi?" },
          { who: 'Max', en: "Yes, the next morning. This time I had checked the list twice before I left home.", uz: "Ha, ertasi kuni. Bu safar uydan chiqishdan oldin ro'yxatni ikki marta tekshirgan edim." },
        ] },
        { t: 'check', ex: { k: 'tf', q: "Max had brought the correct form.", a: false, why: "*They said I'd brought the wrong form.*" } },
      ],
    },
  ],
  words: [
    { en: 'soaked', uz: "ho'l bo'lib ketgan", ipa: 'səʊkt', pos: 'adj', ex: "We were soaked to the skin after the storm.", exUz: "Bo'rondan keyin butunlay ho'l bo'lib ketdik." },
    { en: 'stranded', uz: "qolib ketgan (chiqib ketolmay)", ipa: 'ˈstræn.dɪd', pos: 'adj', ex: 'Hundreds of passengers were stranded at the airport.', exUz: "Yuzlab yo'lovchi aeroportda qolib ketdi." },
    { en: 'drag on', uz: "cho'zilib ketmoq", ipa: 'dræɡ ɒn', pos: 'phrasal verb', ex: 'The meeting dragged on for hours.', exUz: "Yig'ilish soatlab cho'zilib ketdi." },
    { en: 'hang around', uz: "bekor aylanib yurmoq, kutib turmoq", ipa: 'hæŋ əˈraʊnd', pos: 'phrasal verb', ex: "I hung around outside the office, waiting for her.", exUz: "Uni kutib, ofis oldida aylanib yurdim." },
    { en: 'frantic', uz: "xavotirdan o'zini yo'qotgan", ipa: 'ˈfræn.tɪk', pos: 'adj', ex: 'He made a frantic search for his passport.', exUz: "U pasportini alahsirab qidirdi." },
    { en: 'downpour', uz: "jala", ipa: 'ˈdaʊn.pɔː', pos: 'noun', ex: "The match was stopped because of a sudden downpour.", exUz: "To'satdan jala quyib, o'yin to'xtatildi." },
  ],
  practice: [
    { k: 'match', pairs: [['soaked', "ho'l bo'lib ketgan"], ['stranded', "chiqib ketolmay qolgan"], ['drag on', "cho'zilib ketmoq"], ['hang around', "kutib aylanib yurmoq"], ['frantic', "xavotirdan o'zini yo'qotgan"], ['downpour', 'jala']] },
    { k: 'choice', q: "It ___ heavily for hours, so the streets were flooded.", opts: ['had been raining', 'had been rained', 'was been raining', 'has been raining'], a: 0, why: "Oldingi jarayon + natija: **had been raining**." },
    { k: 'fill', q: "By the time we got there, the meeting ___ already started.", a: ['had'], uz: "Biz yetib borguncha yig'ilish allaqachon boshlangan edi.", why: "*by the time* + Past Simple → asosiy gapda **had + V3**." },
    { k: 'listen', say: 'By the time we got to the station, the train had already left.', opts: ['By the time we got to the station, the train had already left.', 'By the time we got to the station, the train has already left.', 'By the time we get to the station, the train had already left.', 'By the time we got to the station, the train already left.'], a: 0 },
    { k: 'fill', q: "He was soaked because he ___ walking in the downpour.", a: ['had been', "'d been"], uz: "U ho'l bo'lgan edi, chunki jala ostida yurgan edi.", why: "**had been walking** — oldingi jarayon." },
    { k: 'order', uz: "Hisobotni tugatgach, u uyga ketdi.", words: ['After', 'finishing', 'the', 'report,', 'she', 'went', 'home.'], extra: ['finished', 'finish'], alt: [['She', 'went', 'home', 'after', 'finishing', 'the', 'report.']], why: "**After + V-ing**: ega bir xil." },
    { k: 'fix', wrong: "She had been wait for hours.", a: ["She had been waiting for hours.", "She'd been waiting for hours."], why: "**had been + V-ing**." },
    { k: 'tf', q: "*No sooner had she sat down than the phone rang.* — telefon u o'tirishi bilanoq jiringladi.", a: true, why: "**No sooner … than** — ketma-ket ikki ish deyarli bir vaqtda." },
    { k: 'choice', q: "Which sentence means the same as «Hardly had we started when it began to rain»?", opts: ["It began to rain just after we started.", "It began to rain before we started.", "We started after it stopped raining.", "It never rained while we were there."], a: 0, why: "**Hardly … when** — birinchisi tugashi bilan ikkinchisi boshlandi." },
    { k: 'translate', uz: "Biz ikki soatdan beri kutayotgan edik.", a: ['We had been waiting for two hours.', "We'd been waiting for two hours."], why: "**had been + V-ing + for** muddat." },
    { k: 'fix', wrong: "After to finish the report, she went home.", a: ["After finishing the report, she went home."], why: "*after* dan keyin **-ing**." },
    { k: 'dictation', say: 'By the time we arrived, they had been waiting for an hour.', a: ['By the time we arrived, they had been waiting for an hour.', "By the time we arrived, they'd been waiting for an hour."], uz: "Biz yetib borganimizda ular bir soatdan beri kutayotgan edi." },
    { k: 'choice', q: "Qaysi gap to'g'ri?", opts: ['No sooner had he left than it started to rain.', 'No sooner he had left than it started to rain.', 'No sooner had he left when it started to rain.', 'No sooner he left than had it started to rain.'], a: 0, why: "**No sooner + had + ega … than**." },
    { k: 'speak', say: 'As soon as I got home, I made a cup of tea.', uz: "Uyga kelishim bilan choy damladim." },
  ],
  quiz: [
    { k: 'choice', q: "I was exhausted because I ___ all day.", opts: ['had been working', 'had been worked', 'have been working', 'was been working'], a: 0, why: "Oldingi uzoq jarayon: **had been working**." },
    { k: 'fill', q: "After ___ the email, he closed his laptop. (send)", a: ['sending'], why: "**After + V-ing**." },
    { k: 'fix', wrong: "They had been knowing each other for years.", a: ["They had known each other for years.", "They'd known each other for years."], why: "Holat fe'li: **had known**." },
    { k: 'listen', say: 'We had been hanging around for an hour when it started to pour.', opts: ['We had been hanging around for an hour when it started to pour.', 'We were hanging around for an hour when it started to pour.', 'We have been hanging around for an hour when it started to pour.', 'We had hung around for an hour when it started to pour.'], a: 0 },
    { k: 'choice', q: "By the time the rescue team ___, the hikers had been stranded for two days.", opts: ['arrived', 'would arrive', 'arrives', 'has arrived'], a: 0, why: "*by the time* gapida **Past Simple**." },
    { k: 'tf', q: "*had been knowing* — to'g'ri shakl, chunki muddat bor.", a: false, why: "*know* holat fe'li, Continuous bo'lmaydi: **had known**." },
    { k: 'order', uz: "Biz ketishimiz bilan yomg'ir boshlandi.", words: ['Hardly', 'had', 'we', 'left', 'when', 'the', 'rain', 'started.'], extra: ['than', 'did'], why: "**Hardly + had + ega … when**." },
    { k: 'choice', q: "Qaysi gap to'g'ri?", opts: ['As soon as I got home, I called her.', 'As soon as I will get home, I called her.', 'As soon as I had been getting home, I called her.', 'As soon as to get home, I called her.'], a: 0, why: "O'tgan zamonda: *As soon as* + **Past Simple**." },
  ],
  summary: [
    "**Past Perfect Continuous**: *had been + V-ing*: o'tgan paytdan oldin davom etgan jarayon (**for / since**) yoki ko'rinib turgan natija.",
    "Holat fe'llari bilan Continuous bo'lmaydi: *had known*, *had wanted*.",
    "**by the time** + Past Simple → asosiy gapda Past Perfect; **as soon as** + Past Simple; **after / before + V-ing**.",
    "**No sooner … than** va **hardly … when** (inversiya: *had he*) — rasmiy shakllar, asosan o'qishda uchraydi. Yangi so'zlar: **soaked, stranded, drag on, hang around, frantic, downpour**.",
  ],
  homework: "O'tgan hafta kutib qolgan yoki cho'zilib ketgan voqea haqida 5 gap yozing. Kamida 2 ta *had been + V-ing*, bitta *by the time* va bitta *as soon as* ishlating.",
};

export default lesson;
