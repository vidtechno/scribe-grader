import type { Lesson } from '../../../types';

// Mini lesson (skill): listening and speaking, a two-minute long turn on a cue card. Two sample answers (one by a woman, one by a man), then a speaking task.
const lesson: Lesson = {
  id: 'u30-l14',
  title: 'Listening and speaking: a long turn',
  titleUz: 'Tinglash va gapirish: 2 daqiqalik nutq (cue card)',
  mini: true,
  kind: 'skill',
  goal: "Ikkita namunaviy **2 daqiqalik javobni** tinglab, ularning **tuzilishini** (kirish, tafsilot, his-tuyg'u, xulosa) ajratasiz, **vaqt yutish** va **bog'lash** iboralarini bilasiz hamda *Describe a place you would like to visit* kartasi bo'yicha o'zingiz **ovoz chiqarib** javob berasiz.",
  slides: [
    {
      title: "Tinglang: 1-javob (sayohat)",
      blocks: [
        { t: 'p', md: "IELTS Speaking 2-qismida sizga **cue card** beriladi: bitta mavzu va 3-4 yo'naltiruvchi savol. Bir daqiqa tayyorlanasiz, keyin **taxminan ikki daqiqa** to'xtamay gapirasiz. Avval namunani tinglang (▶). Kartada: **Describe a trip you remember well. You should say: where you went, who you went with, what you did, and explain why you remember it.**" },
        { t: 'text', title: 'Sample answer 1: a trip', voice: 'emma', en: "I'd like to talk about a trip to Bukhara that I took with my sister two years ago. We went by train in the spring, and I can still remember the smell of the old bazaar. First of all, the city is full of history, so we spent two days walking through narrow streets and visiting old mosques and madrasas. What I enjoyed most was the evening, when the whole old town became quiet and tranquil. To be honest, I was fascinated by the craftsmen, who make beautiful hats, pots and carpets by hand. One of them even showed me how to paint a small plate. I felt so proud when I took it home. The reason I remember this trip so well is that it was the first time my sister and I travelled alone, and it brought us closer together. If I had the chance, I would go back tomorrow.", uz: "Men ikki yil oldin opam bilan Buxoroga qilgan sayohatim haqida gapirmoqchiman. Biz bahorda poyezdda bordik va eski bozorning hidini hali ham eslayman. Avvalo, shahar tarixga boy, shuning uchun ikki kun tor ko'chalarda yurib, eski masjid va madrasalarni ko'rdik. Menga eng yoqqani kech edi, butun eski shahar jim va sokin bo'lib qolardi. Rostini aytsam, men hunarmandlarga mahliyo bo'ldim: ular qo'lda chiroyli do'ppi, sopol idish va gilam yasaydi. Ulardan biri menga kichik likopchani qanday bo'yashni ko'rsatdi. Uni uyga olib ketganimda juda faxrlandim. Bu sayohatni yaxshi eslashimning sababi, opam bilan birinchi marta yolg'iz sayohat qilganimiz va u bizni yaqinlashtirdi. Imkoniyat bo'lsa, ertaga yana boraman." },
        { t: 'check', ex: { k: 'choice', q: "What did the speaker enjoy most?", opts: ["The quiet evening in the old town", "The train journey", "Shopping for souvenirs", "The hotel"], a: 0, why: "*What I enjoyed most was the evening, when the whole old town became quiet.*" } },
        { t: 'check', ex: { k: 'tf', q: "The speaker travelled to Bukhara alone.", a: false, why: "*with my sister* — opasi bilan." } },
        { t: 'check', ex: { k: 'listen', say: 'I was fascinated by the craftsmen.', opts: ['I was fascinated by the craftsmen.', 'I was fascinated by the craftsman.', 'I was frightened by the craftsmen.', 'I was fascinating the craftsmen.'], a: 0 } },
      ],
    },
    {
      title: "Tinglang: 2-javob (inson) va tuzilma",
      blocks: [
        { t: 'p', md: "Ikkinchi karta: **Describe a person who taught you something important. You should say: who the person is, what they taught you, how you learnt it, and explain why it was important.**" },
        { t: 'text', title: 'Sample answer 2: a person', voice: 'george', en: "The person I want to describe is my grandfather, who taught me how to be patient. He lived in a small village, and every summer I stayed with him for a month. As a matter of fact, he was a gardener, so he spent hours looking after his apple trees. At first, I found this boring, but then he asked me to help him. He showed me how to plant seeds and wait for them to grow. It took weeks before anything happened, yet he never complained. I was immersed in that quiet routine, and slowly I learnt that good things take time. Well, that lesson has been useful at university too, because I no longer panic when my results are slow to improve. To sum up, I yearn for those summers, and I am grateful that he showed me what real patience looks like.", uz: "Men tasvirlamoqchi bo'lgan odam — buvam, u menga sabrli bo'lishni o'rgatdi. U kichik qishloqda yashar edi va men har yozda u bilan bir oy turardim. Aslida u bog'bon edi, shuning uchun soatlab olma daraxtlarini parvarish qilardi. Avvaliga buni zerikarli deb topdim, keyin u menga yordam berishimni so'radi. U menga urug' ekishni va ularning o'sishini kutishni ko'rsatdi. Biror narsa bo'lishi uchun haftalar kerak bo'ldi, lekin u hech qachon shikoyat qilmadi. Men o'sha sokin tartibga sho'ng'ib ketdim va asta-sekin yaxshi narsalar vaqt talab qilishini o'rgandim. Bu saboq universitetda ham foydali bo'ldi, chunki natijalarim sekin yaxshilanayotganda endi vahimaga tushmayman. Xulosa qilsam, men o'sha yozlarni sog'inaman va u menga haqiqiy sabr qanday bo'lishini ko'rsatgani uchun minnatdorman." },
        { t: 'check', ex: { k: 'choice', q: "What did the grandfather teach the speaker?", opts: ["How to cook", "How to be patient", "How to travel", "How to paint"], a: 1, why: "*taught me how to be patient.*" } },
        { t: 'table', head: ['Qism', 'Vazifa', 'Ibora (javobdan)'], speak: [2], rows: [
          ['1. Kirish', 'Nima haqida gapirishni ayting', "The person I want to describe is my grandfather…"],
          ['2. Tafsilot', 'Qachon, qayerda, kim', "He lived in a small village, and every summer…"],
          ['3. His-tuyg\'u', "Nimani his qildingiz", "I was fascinated by… / I felt so proud when…"],
          ['4. Sabab', 'Nega bu muhim', "The reason I remember this is that…"],
          ['5. Yakun', 'Qisqa xulosa', "To sum up, … / If I had the chance, I would…"],
        ] },
        { t: 'check', ex: { k: 'choice', q: "'To sum up, I am grateful that he showed me what patience looks like.' This sentence belongs to:", opts: ['the introduction', 'the conclusion', 'the details', 'a question to the examiner'], a: 1, why: "**To sum up** — yakun va xulosa." } },
      ],
    },
    {
      title: "Vositalar: bog'lash, vaqt yutish, xatolar",
      blocks: [
        { t: 'table', head: ['Maqsad', 'Ibora'], speak: [1], rows: [
          ['Boshlash', "I'd like to talk about…"],
          ['Ketma-ketlik', "First of all, … / Then … / After that… / In the end…"],
          ['Vaqt yutish', "Well, let me think… / That's an interesting question."],
          ["Fikr qo'shish", "As a matter of fact, … / To be honest, …"],
          ['Sabab', "The reason I remember it is that…"],
          ['Yakun', "To sum up, … / If I had the chance, I would…"],
        ] },
        { t: 'compare',
          good: { title: "To'g'ri", items: ["I went there last year.", "I was fascinated by the old streets.", "The reason is that it was quiet."], },
          bad: { title: 'Xato', items: ["I have gone there last year.", "I was fascinated with the old streets by.", "The reason is because it was quiet and peaceful and quiet."] } },
        { t: 'tip', tone: 'warn', md: "Uzbek tilida so'zlovchilarning xatolari: o'tgan zamon aniq vaqt bilan (*last year*) **Past Simple** bo'ladi, *have gone* emas; **fascinated by + ot** (gap oxirida ortiqcha *by* qoldirmang); 2 daqiqa davomida bir xil so'zni takrorlamang; to'xtab qolish o'rniga *Well, let me think…* denting. Oxirigacha **to'xtamang**: kichik xatodan keyin davom eting." },
        { t: 'check', ex: { k: 'fix', wrong: "I have visited Khiva last summer.", a: ["I visited Khiva last summer.", "I went to Khiva last summer."], why: "Aniq o'tgan vaqt (*last summer*) → **Past Simple**." } },
        { t: 'check', ex: { k: 'choice', q: "You need a moment to think during the long turn. You say:", opts: ["Well, let me think for a second.", "I don't know.", "Next question.", "Umm… umm… umm…"], a: 0, why: "**Well, let me think** — vaqt yutish iborasi, ravon ko'rinadi." } },
      ],
    },
    {
      title: "Sizning navbatingiz: Describe a place you would like to visit",
      blocks: [
        { t: 'p', md: "Karta: **Describe a place you would like to visit. You should say: where it is, how you know about it, what you would do there, and explain why you would like to go.** Bir daqiqa o'ylang, qisqa reja yozing, keyin 2 daqiqa gapiring. Avval namunani tinglang:" },
        { t: 'text', title: 'Model answer: a place I would like to visit', voice: 'emma', en: "The place I would love to visit is Iceland, a country in the north of Europe. I first heard about it from a documentary, and ever since I have yearned to see it with my own eyes. First of all, the scenery is awe-inspiring: there are glaciers, waterfalls and hot springs. If I went there, I would spend a week driving around the island and I would try to see the northern lights. Another thing I would like to do is to immerse myself in the local culture by trying traditional food and talking to the people. To be honest, I am not a fan of crowded cities, so a quiet and wild place is ideal for me. The reason I want to go is that I think nature helps us put our worries in perspective. In short, it would be the trip of a lifetime.", uz: "Men borishni juda xohlagan joy — Islandiya, Yevropaning shimolidagi davlat. U haqida birinchi marta hujjatli filmdan eshitganman va shundan beri uni o'z ko'zim bilan ko'rishni orzu qilaman. Avvalo, manzara ajoyib: muzliklar, sharsharalar va issiq buloqlar bor. U yerga borsam, bir hafta orolda mashinada aylanardim va shimoliy yorug'likni ko'rishga harakat qilardim. Yana bir istagim — mahalliy taomlarni tatib, odamlar bilan gaplashib, madaniyatga sho'ng'ish. Rostini aytsam, men gavjum shaharlarni yoqtirmayman, shuning uchun sokin va yovvoyi joy men uchun ideal. Borishni xohlashimning sababi shuki, tabiat bizga tashvishlarimizni to'g'ri baholashga yordam beradi deb o'ylayman. Qisqasi, bu umr sayohati bo'lardi." },
        { t: 'check', ex: { k: 'tf', q: "The speaker likes crowded cities.", a: false, why: "*I am not a fan of crowded cities.*" } },
        { t: 'tip', tone: 'good', md: "**Tekshiruv ro'yxati (checklist):** 1) kirish bor, 2) kamida 3 ta tafsilot, 3) his-tuyg'u, 4) sabab (*The reason is that…*), 5) 2-3 ta bog'lovchi ibora, 6) shart gap (*If I went there, I would…*), 7) xulosa. Telefonda yozib oling va 2 daqiqaga yetganini tekshiring." },
        { t: 'check', ex: { k: 'choice', q: "'If I went there, I would try the local food.' This sentence is a:", opts: ["second conditional", "first conditional", "third conditional", "zero conditional"], a: 0, why: "**If + Past Simple, would + V1** — 2-shart (tasavvur)." } },
      ],
    },
  ],
  words: [
    { en: 'tranquil', uz: "sokin, tinch", ipa: 'ˈtræŋ.kwɪl', pos: 'adj', ex: 'The lake was tranquil early in the morning.', exUz: "Ertalab ko'l sokin edi." },
    { en: 'fascinated', uz: "mahliyo bo'lgan, juda qiziqib qolgan", ipa: 'ˈfæs.ɪ.neɪ.tɪd', pos: 'adj', ex: 'The children were fascinated by the old clock.', exUz: "Bolalar eski soatga mahliyo bo'lib qoldi." },
    { en: 'yearn', uz: "sog'inib orzu qilmoq (for bilan)", ipa: 'jɜːn', pos: 'verb', ex: 'She yearned for the quiet life of her village.', exUz: "U qishlog'idagi sokin hayotni sog'inib orzu qilardi." },
    { en: 'immerse', uz: "sho'ng'itmoq, to'liq berilmoq", ipa: 'ɪˈmɜːs', pos: 'verb', ex: 'To learn quickly, immerse yourself in the language.', exUz: "Tez o'rganish uchun o'zingizni til muhitiga to'liq sho'ng'iting." },
    { en: 'awe-inspiring', uz: "hayratga soladigan, ulug'vor", ipa: 'ˈɔː.ɪn.spaɪə.rɪŋ', pos: 'adj', ex: 'The view from the mountain was awe-inspiring.', exUz: "Tog'dan ochilgan manzara hayratga soladigan edi." },
  ],
  practice: [
    { k: 'match', pairs: [['tranquil', 'sokin'], ['fascinated', "mahliyo bo'lgan"], ['yearn for', "sog'inib orzu qilmoq"], ['immerse', "sho'ng'itmoq"], ['awe-inspiring', 'hayratga soladigan']] },
    { k: 'choice', q: "In the 2-minute talk, the best way to start is:", opts: ["I'd like to talk about a trip I took two years ago.", "I do not know what to say.", "Can you repeat the card?", "Umm… umm… umm…"], a: 0, why: "Aniq kirish: **I'd like to talk about…**" },
    { k: 'fill', q: "The reason I remember this trip ___ that it was the first one I took alone.", a: ['is'], why: "Sabab iborasi: **The reason … is that…**" },
    { k: 'listen', say: 'Well, let me think for a second.', opts: ['Well, let me think for a second.', 'Well, let me thank for a second.', 'Well, let me think for second.', 'Well, let me think for a minute.'], a: 0 },
    { k: 'fix', wrong: "I have visited Samarkand two years ago.", a: ["I visited Samarkand two years ago.", "I went to Samarkand two years ago."], why: "*two years ago* aniq o'tgan vaqt → **Past Simple**." },
    { k: 'order', uz: "Avvalo, manzara hayratga soladigan.", words: ['First', 'of', 'all,', 'the', 'scenery', 'is', 'awe-inspiring.'], extra: ['at', 'are'], why: "**First of all,…** — birinchi nuqtani kiritadi." },
    { k: 'choice', q: "Which sentence is the conclusion of a long turn?", opts: ["To sum up, it would be the trip of a lifetime.", "First of all, the view is lovely.", "I went there with my sister.", "It was in the spring."], a: 0, why: "**To sum up** — yakun." },
    { k: 'tf', q: "In a long turn you should stop speaking after one minute if you make a mistake.", a: false, why: "Davom eting! Kichik xato muhim emas, ravonlik muhim." },
    { k: 'fill', q: "I was ___ by the craftsmen who make carpets by hand. (fascinate)", a: ['fascinated'], uz: "Qo'lda gilam to'quvchi hunarmandlarga mahliyo bo'ldim.", why: "Holat sifati: **fascinated by**." },
    { k: 'translate', uz: "Rostini aytsam, men gavjum shaharlarni yoqtirmayman.", a: ["To be honest, I'm not a fan of crowded cities.", "To be honest, I am not a fan of crowded cities.", "To be honest, I don't like crowded cities.", "To be honest, I do not like crowded cities."], why: "**To be honest,…** + gap." },
    { k: 'dictation', say: 'If I had the chance, I would go back tomorrow.', a: ['If I had the chance, I would go back tomorrow.', "If I had the chance, I'd go back tomorrow."], uz: "Imkoniyat bo'lsa, ertaga yana boraman." },
    { k: 'choice', q: "He felt ___ when he saw the quiet lake at sunrise.", opts: ['tranquil', 'tranquility', 'tranquilly', 'tranquillise'], a: 0, why: "*felt + sifat*: **tranquil** (sokin)." },
    { k: 'speak', say: "The place I would love to visit is Iceland.", uz: "Men borishni juda xohlagan joy — Islandiya." },
  ],
  quiz: [
    { k: 'choice', q: "A cue card gives you:", opts: ["a topic and points to talk about", "a reading text", "a grammar test", "a listening task"], a: 0, why: "**Cue card** — mavzu va 3-4 yo'naltiruvchi savol." },
    { k: 'fill', q: "To sum ___, it was a wonderful experience.", a: ['up'], uz: "Xulosa qilsak, bu ajoyib tajriba bo'ldi.", why: "**To sum up**." },
    { k: 'fix', wrong: "I was fascinated with the old streets by.", a: ["I was fascinated by the old streets."], why: "**fascinated by + ot**." },
    { k: 'choice', q: "Which phrase is best for buying time politely?", opts: ["Well, let me think for a moment.", "No idea.", "Skip it.", "I can't talk."], a: 0, why: "Vaqt yutish va ravonlikni saqlash." },
    { k: 'order', uz: "Menga eng yoqqani kech edi.", words: ['What', 'I', 'enjoyed', 'most', 'was', 'the', 'evening.'], extra: ['that', 'is'], why: "**What I enjoyed most was…** — ta'kid." },
    { k: 'tf', q: "A two-minute talk should have an introduction, details, feelings and a conclusion.", a: true, why: "Bu to'g'ri tuzilma." },
    { k: 'choice', q: "'To immerse yourself in a culture' means:", opts: ["to become deeply involved in it", "to leave it", "to read about it only", "to criticise it"], a: 0, why: "**immerse** — to'liq sho'ng'ish." },
    { k: 'listen', say: 'The reason I want to go is that nature helps us relax.', opts: ['The reason I want to go is that nature helps us relax.', 'The reason I want to go is because nature helps us relax.', 'The reasons I want to go is that nature helps us relax.', 'The reason I want to go it is that nature helps us relax.'], a: 0 },
  ],
  summary: [
    "**Cue card**: bir daqiqa tayyorlanasiz, ikki daqiqa to'xtamay gapirasiz.",
    "Tuzilma: **kirish → tafsilot → his-tuyg'u → sabab → yakun**.",
    "Foydali iboralar: *I'd like to talk about…, First of all…, To be honest…, The reason is that…, To sum up…*",
    "Xatolar: aniq vaqt + **Past Simple** (*I visited…last year*); **fascinated by**; to'xtab qolmang, *Well, let me think…* deng.",
    "Yangi so'zlar: **tranquil, fascinated, yearn, immerse, awe-inspiring**.",
  ],
  homework: "Karta: **Describe a place you would like to visit.** 1 daqiqa reja yozing, keyin telefonda 2 daqiqa gapirib yozib oling. Tinglab, checklist bo'yicha tekshiring: kirish, 3 ta tafsilot, his-tuyg'u, sabab, yakun. Ikkinchi marta yana yozib oling va farqni solishtiring.",
};

export default lesson;
