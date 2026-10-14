import type { Lesson } from '../../../types';

// Mini lesson (skill): listening and speaking about childhood. Recycles used to (l5), was / were and Past Simple (l1-l2), because / so / but / although (l6).
const lesson: Lesson = {
  id: 'u12-l14',
  title: 'Listening and speaking: my childhood',
  titleUz: 'Tinglash va gapirish: mening bolaligim',
  mini: true,
  kind: 'skill',
  goal: "Bolalik haqidagi suhbatni **tinglab tushunasiz** va o'z bolaligingiz haqida 5 gap ayta olasiz: *When I was little, I lived in a village. I used to climb trees. My parents were strict, but they were kind.*",
  slides: [
    {
      title: "Tinglang: Sardor bolaligi haqida",
      blocks: [
        { t: 'p', md: "Dialogni tinglang (▶), keyin matnga qarang. Avval umumiy ma'noni tushuning: **qayerda o'sgan? nima qilar edi? ota-onasi qanday edi?**" },
        { t: 'dialog', lines: [
          { who: 'Madina', en: 'Sardor, where did you grow up?', uz: "Sardor, sen qayerda o'sgansan?" },
          { who: 'Sardor', en: 'In a small village near Samarkand. I lived there until I was ten.', uz: "Samarqand yaqinidagi kichik qishloqda. O'n yoshgacha o'sha yerda yashadim." },
          { who: 'Madina', en: 'What did you use to do after school?', uz: 'Maktabdan keyin nima qilar eding?' },
          { who: 'Sardor', en: 'We used to play football in the street, and I used to climb the big tree behind our house.', uz: "Ko'chada futbol o'ynar edik, men esa uyimiz orqasidagi katta daraxtga chiqar edim." },
          { who: 'Madina', en: 'Was it fun?', uz: "Qiziq bo'lganmi?" },
          { who: 'Sardor', en: 'Yes, it was! But I was a bit naughty. My parents were strict, so I always came home early.', uz: "Ha, juda! Lekin men biroz shumtaka edim. Ota-onam qattiqqo'l edi, shuning uchun doim erta uyga kelardim." },
          { who: 'Madina', en: 'I grew up in Tashkent. I used to watch cartoons every afternoon.', uz: "Men Toshkentda o'sganman. Har kuni tushdan keyin multfilm ko'rar edim." },
        ] },
        { t: 'check', ex: { k: 'choice', q: 'Where did Sardor grow up?', opts: ['In a village near Samarkand.', 'In Tashkent.', 'In a big city.', 'In Bukhara.'], a: 0, why: "Dialog: *a small village near Samarkand*." } },
        { t: 'check', ex: { k: 'listen', say: 'We used to play football in the street.', opts: ['We used to play football in the street.', 'We used to play football in the park.', 'We play football in the street.', 'We used to watch football in the street.'], a: 0 } },
      ],
    },
    {
      title: "Bolalik haqida gapirish iboralari",
      blocks: [
        { t: 'table', head: ['Inglizcha', "O'zbekcha"], speak: [0], rows: [
          ['When I was little, …', 'Kichkina paytimda, …'],
          ['I grew up in …', "Men … da o'sganman"],
          ['I used to play outside.', "Tashqarida o'ynar edim."],
          ["I didn't use to like vegetables.", "Sabzavotni yoqtirmas edim."],
          ['My parents were strict.', 'Ota-onam qattiqqo\'l edi.'],
          ['I was a bit naughty.', 'Men biroz shumtaka edim.'],
          ['In those days, …', "O'sha kunlarda, …"],
        ] },
        { t: 'compare',
          good: { title: "To'g'ri", items: ['I used to play outside.', "I didn't use to like fish.", 'When I was a child, I lived in a village.'] },
          bad: { title: "Xato", items: ['I used to played outside.', "I didn't used to like fish.", 'When I am a child, I lived in a village.'] } },
        { t: 'tip', tone: 'info', md: "Savol berganda: **Did you use to…?** (*Did you use to climb trees?*). Javob: *Yes, I did. / No, I didn't.* Sabab aytish uchun **because** va **so** dan foydalaning." },
        { t: 'check', ex: { k: 'fill', q: "I didn't ___ to like carrots when I was little.", a: ['use'], why: "Inkorda **didn't use to**: *use* (used emas)." } },
      ],
    },
    {
      title: "Tinglang: Dilnozaning bolaligi",
      blocks: [
        { t: 'text', title: 'When I was little', voice: 'emma',
          en: "When I was little, we lived in a village. We didn't have a computer, so I used to play outside with my cousins. We climbed trees and played games with old toys. In the evening, we watched cartoons on a small TV. My parents were strict, but they were very kind. Although I live in a big city now, I miss those days.",
          uz: "Kichkina paytimda biz qishloqda yashar edik. Bizda kompyuter yo'q edi, shuning uchun amakivachchalarim bilan tashqarida o'ynar edim. Daraxtlarga chiqar va eski o'yinchoqlar bilan o'ynar edik. Kechqurun kichkina televizorda multfilm ko'rar edik. Ota-onam qattiqqo'l edi, lekin juda mehribon edi. Hozir katta shaharda yashasam ham, o'sha kunlarni sog'inaman." },
        { t: 'check', ex: { k: 'tf', q: 'The speaker had a computer when she was little.', a: false, why: "Matn: *We didn't have a computer*." } },
        { t: 'check', ex: { k: 'choice', q: 'Why did she play outside?', opts: ["They didn't have a computer.", 'Her parents were strict.', 'She lived in a big city.', 'She loved cartoons.'], a: 0, why: "Matn: *We didn't have a computer, so I used to play outside*." } },
      ],
    },
    {
      title: "Endi siz ayting",
      blocks: [
        { t: 'p', md: "Bolaligingiz haqida **5 gap** ayting. Reja: **1) qayerda yashadingiz → 2) nima qilar edingiz → 3) nima qilmas edingiz → 4) ota-onangiz qanday edi → 5) hozir sog'inasizmi?**" },
        { t: 'text', title: 'Model answer', voice: 'george',
          en: "When I was little, I lived in a village near Bukhara. I used to climb trees with my friends. I didn't use to watch TV because we were always outside. My parents were strict, but they were kind. I like my life now, but I miss those days.",
          uz: "Kichkina paytimda men Buxoro yaqinidagi qishloqda yashadim. Do'stlarim bilan daraxtlarga chiqar edim. Televizor ko'rmas edim, chunki doim tashqarida bo'lar edik. Ota-onam qattiqqo'l, lekin mehribon edi. Hozirgi hayotim menga yoqadi, lekin o'sha kunlarni sog'inaman." },
        { t: 'tip', tone: 'good', md: "Sekin va aniq gapiring. **used to** da *to* tez va kuchsiz aytiladi: \"yuust-tu\". Avval modelni tinglang, keyin o'zingizniki bilan takrorlang va telefoningizga yozib oling." },
        { t: 'check', ex: { k: 'dictation', say: 'I used to climb trees with my friends.', a: ['I used to climb trees with my friends.'] } },
      ],
    },
  ],
  words: [
    { en: 'toy', uz: "o'yinchoq", ipa: 'tɔɪ', pos: 'noun', ex: 'I had a lot of old toys.', exUz: "Menda ko'p eski o'yinchoqlar bor edi." },
    { en: 'strict', uz: "qattiqqo'l", ipa: 'strɪkt', pos: 'adjective', ex: 'My teacher was very strict.', exUz: "Ustozim juda qattiqqo'l edi." },
    { en: 'naughty', uz: 'shumtaka, yaramas', ipa: 'ˈnɔːti', pos: 'adjective', ex: 'He was a naughty boy.', exUz: "U shumtaka bola edi." },
    { en: 'climb', uz: 'chiqmoq, ko\'tarilmoq', ipa: 'klaɪm', pos: 'verb', ex: 'We climbed the old tree.', exUz: "Biz eski daraxtga chiqdik." },
    { en: 'cartoon', uz: 'multfilm', ipa: 'kɑːˈtuːn', pos: 'noun', ex: 'She watched cartoons every day.', exUz: "U har kuni multfilm ko'rar edi." },
  ],
  practice: [
    { k: 'listen', say: 'I used to climb the big tree behind our house.', opts: ['I used to climb the big tree behind our house.', 'I used to climb the big tree in front of our house.', 'I use to climb the big tree behind our house.', 'I used to cut the big tree behind our house.'], a: 0 },
    { k: 'choice', q: 'Why did Sardor come home early?', opts: ['His parents were strict.', 'He was ill.', 'He had a lot of homework.', 'He was afraid of the dark.'], a: 0, why: "Dialog: *My parents were strict, so I always came home early*." },
    { k: 'fill', q: 'We ___ to play football in the street.', a: ['used'], uz: "Biz ko'chada futbol o'ynar edik.", why: "Darak gapda **used to**." },
    { k: 'order', uz: "Ota-onam qattiqqo'l edi, lekin mehribon.", words: ['My', 'parents', 'were', 'strict,', 'but', 'they', 'were', 'kind'], extra: ['was', 'so'], why: "*parents* — ko'plik: **were**." },
    { k: 'match', pairs: [['toy', "o'yinchoq"], ['strict', "qattiqqo'l"], ['naughty', 'shumtaka, yaramas'], ['climb', 'chiqmoq'], ['cartoon', 'multfilm']] },
    { k: 'fix', wrong: 'I used to played outside every day.', a: ['I used to play outside every day.'], why: "**used to** dan keyin fe'l asl shaklda: *play*." },
    { k: 'choice', q: "Qaysi gap to'g'ri?", opts: ["I didn't use to like vegetables.", "I didn't used to like vegetables.", "I not use to like vegetables.", "I didn't use like vegetables."], a: 0, why: "Inkor: **didn't use to + V1**." },
    { k: 'dictation', say: 'When I was little, I used to watch cartoons.', a: ['When I was little, I used to watch cartoons.'], uz: "Kichkina paytimda multfilm ko'rar edim." },
    { k: 'tf', q: "In the text, the speaker's parents were strict and unkind.", a: false, why: "Matn: *My parents were strict, but they were very kind*." },
    { k: 'translate', uz: "Kichkina paytimda men qishloqda yashardim.", a: ['When I was little, I lived in a village.', 'I lived in a village when I was little.', 'When I was a child, I lived in a village.', 'I lived in a village when I was a child.', 'When I was young, I lived in a village.', 'I lived in a village when I was young.', 'When I was little, I used to live in a village.', 'When I was a child, I used to live in a village.'], why: "**When I was little, I lived…**" },
    { k: 'speak', say: 'When I was little, I lived in a small village.', uz: "Kichkina paytimda kichik qishloqda yashardim." },
    { k: 'speak', say: 'I used to play football with my friends.', uz: "Do'stlarim bilan futbol o'ynar edim." },
    { k: 'speak', say: 'My parents were strict, but they were kind.', uz: "Ota-onam qattiqqo'l, lekin mehribon edi." },
  ],
  quiz: [
    { k: 'choice', q: 'We ___ a computer, so we played outside.', opts: ["didn't have", "don't have", "weren't have", "didn't had"], a: 0, why: "Inkor: **didn't + V1**." },
    { k: 'fill', q: 'I ___ to watch cartoons every afternoon.', a: ['used'], uz: "Har kuni tushdan keyin multfilm ko'rar edim.", why: "**used to** — o'tmishdagi odat." },
    { k: 'order', uz: "Biz eski o'yinchoqlar bilan o'ynar edik.", words: ['We', 'used', 'to', 'play', 'with', 'old', 'toys'], extra: ['use', 'played'], why: "**used to + V1**." },
    { k: 'translate', uz: "Ota-onam qattiqqo'l edi.", a: ['My parents were strict.'], why: "*parents* — ko'plik: **were**." },
    { k: 'fix', wrong: "He didn't used to like vegetables.", a: ["He didn't use to like vegetables."], why: "**didn't use to** (used emas)." },
    { k: 'tf', q: "*I grew up in a village* — Men qishloqda o'sganman.", a: true, why: "**grow up – grew up**." },
    { k: 'match', pairs: [['naughty', 'shumtaka, yaramas'], ['climb', 'chiqmoq'], ['toy', "o'yinchoq"], ['strict', "qattiqqo'l"]] },
    { k: 'listen', say: 'Although I live in a big city now, I miss those days.', opts: ['Although I live in a big city now, I miss those days.', 'Because I live in a big city now, I miss those days.', 'Although I lived in a big city, I missed those days.', 'I live in a big city now, so I miss those days.'], a: 0 },
  ],
  summary: [
    "Bolalik haqida: **When I was little, I lived…**, **I used to + V1**, **I didn't use to + V1**, **My parents were strict**.",
    "Savol: **Where did you grow up? Did you use to…?** Javob: *Yes, I did. / No, I didn't.*",
    "Yangi so'zlar: **toy, strict, naughty, climb, cartoon**.",
    "Gapirishda 5 gap rejasi: qayerda yashadingiz → nima qilardingiz → nima qilmasdingiz → ota-ona → hozir.",
  ],
  homework: "Bolaligingiz haqida 5 gap tayyorlang, 3 marta ovoz chiqarib ayting va telefonga yozib oling.",
};

export default lesson;
