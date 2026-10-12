import type { Lesson } from '../../../types';

// Mini lesson (grammar): Present Continuous negatives. Light contrast with Present Simple negatives.
const lesson: Lesson = {
  id: 'u4-l15',
  title: 'Present Continuous: negatives',
  titleUz: "Present Continuous: inkor gaplar",
  mini: true,
  goal: "Hozir **bo'lmayotgan** ishni aytasiz: *I'm not working. He isn't sleeping. They aren't playing.* To'g'ri qisqartmalarni tanlaysiz va *don't/doesn't* bilan chalkashtirmaysiz.",
  slides: [
    {
      title: 'Inkor: be + not + -ing',
      blocks: [
        { t: 'p', md: "Ijobiy gapda: **be + fe'l-ing** (*She is sleeping*). Inkor uchun **be** dan keyin **not** qo'yamiz:\n**ega + am/is/are + not + fe'l-ing**" },
        { t: 'table', head: ['Ega', 'Inkor', "Qisqa shakl"], speak: [1], rows: [
          ['I', 'I am not working.', "I'm not working."],
          ['he / she / it', 'He is not sleeping.', "He isn't sleeping. / He's not sleeping."],
          ['you / we / they', 'They are not playing.', "They aren't playing. / They're not playing."],
        ] },
        { t: 'tip', tone: 'info', md: "**I** bilan faqat *I'm not* (*I amn't* deyilmaydi). Boshqalarda ikki xil qisqartma bor: *isn't = 's not*, *aren't = 're not*. Ikkalasi ham to'g'ri." },
        { t: 'examples', items: [
          { en: "I'm not watching TV now.", uz: "Hozir televizor ko'rmayapman." },
          { en: "My brother isn't sleeping. He is reading.", uz: "Akam uxlamayapti. U o'qiyapti." },
          { en: "The children aren't playing in the garden.", uz: "Bolalar bog'da o'ynamayapti." },
          { en: "It isn't raining today.", uz: "Bugun yomg'ir yog'mayapti." },
        ] },
        { t: 'check', ex: { k: 'fill', q: "We ___ working. It is a holiday.", a: ["aren't", 'are not', "'re not", "re not"], uz: "Biz ishlamayapmiz. Bayram.", why: "we + inkor → **aren't**." } },
      ],
    },
    {
      title: "Hozir yoki odatda?",
      blocks: [
        { t: 'p', md: "Present Simple inkori (*don't / doesn't*) — **odat**: *She doesn't work on Sunday.* Present Continuous inkori — **hozirgi payt**: *She isn't working now.*" },
        { t: 'table', head: ['Odat (Present Simple)', 'Hozir (Present Continuous)'], speak: [0, 1], rows: [
          ["I don't watch TV in the morning.", "I'm not watching TV now."],
          ["He doesn't sleep in the day.", "He isn't sleeping now."],
          ["They don't play football on Monday.", "They aren't playing football now."],
        ] },
        { t: 'compare',
          good: { title: "To'g'ri", items: ["He isn't sleeping.", "They aren't playing.", "I'm not working."] },
          bad: { title: "Noto'g'ri", items: ["He doesn't sleeping.", "They not playing.", "I amn't working.", "She isn't sleep."] } },
        { t: 'tip', tone: 'warn', md: "**don't/doesn't** bilan **-ing** ishlatilmaydi: *He doesn't sleeping* ❌. Va **be** ni tushirib bo'lmaydi: *They not playing* ❌." },
        { t: 'check', ex: { k: 'choice', q: "Qaysi gap to'g'ri?", opts: ["She isn't cooking now.", "She doesn't cooking now.", "She not cooking now.", "She isn't cook now."], a: 0, why: "**isn't + fe'l-ing**." } },
      ],
    },
    {
      title: 'Rasmga qarab ayting',
      blocks: [
        { t: 'p', md: "Inkor gap ko'pincha ijobiy bilan birga keladi: avval **nima emas**, keyin **nima**." },
        { t: 'dialog', lines: [
          { who: 'Mum', en: 'Where are the children? Are they in the garden?', uz: "Bolalar qayerda? Ular bog'dami?" },
          { who: 'Dad', en: "No, they aren't playing in the garden. They are watching TV.", uz: "Yo'q, ular bog'da o'ynamayapti. Televizor ko'rishyapti." },
          { who: 'Mum', en: "And the dog? It isn't barking.", uz: "Itimiz-chi? U akillamayapti." },
          { who: 'Dad', en: "It's sleeping next to Anna. She isn't listening to music now.", uz: "U Annaning yonida uxlayapti. Anna hozir musiqa tinglamayapti." },
        ] },
        { t: 'check', ex: { k: 'order', uz: "Ular bog'da o'ynamayapti.", words: ['They', "aren't", 'playing', 'in', 'the', 'garden'], extra: ["don't", 'play'], alt: [['They', 'are', 'not', 'playing', 'in', 'the', 'garden']], why: "**aren't + playing**." } },
      ],
    },
  ],
  words: [
    { en: 'listen to', uz: 'tinglamoq', ipa: 'ˈlɪs.ən tə', pos: 'verb', ex: "I'm not listening to music.", exUz: 'Men musiqa tinglamayapman.' },
    { en: 'shout', uz: 'baqirmoq', ipa: 'ʃaʊt', pos: 'verb', ex: "Don't shout. The baby is sleeping.", exUz: 'Baqirmang. Chaqaloq uxlayapti.' },
    { en: 'cry', uz: 'yig‘lamoq', ipa: 'kraɪ', pos: 'verb', ex: "The baby isn't crying now.", exUz: 'Chaqaloq hozir yig‘lamayapti.' },
    { en: 'bark', uz: 'akillamoq', ipa: 'bɑːk', pos: 'verb', ex: "The dog isn't barking.", exUz: 'It akillamayapti.' },
    { en: 'snow', uz: 'qor yog‘moq', ipa: 'snəʊ', pos: 'verb', ex: "It isn't snowing today.", exUz: 'Bugun qor yog‘mayapti.' },
    { en: 'stand', uz: 'turmoq', ipa: 'stænd', pos: 'verb', ex: "He isn't standing. He is sitting.", exUz: 'U turmayapti. U o‘tiribdi.' },
  ],
  practice: [
    { k: 'choice', q: 'My father ___ working now. He is at home.', opts: ["isn't", "aren't", "doesn't", "don't"], a: 0, why: "he + hozir → **isn't working**." },
    { k: 'choice', q: 'They ___ playing football. It is raining.', opts: ["aren't", "isn't", "doesn't", "amn't"], a: 0 },
    { k: 'fill', q: "I ___ watching TV now. I'm reading.", a: ["'m not", "am not", "m not"], uz: "Hozir televizor ko'rmayapman. O'qiyapman.", why: "I + inkor → **am not / 'm not**." },
    { k: 'fill', q: "The dog ___ barking. It is sleeping.", a: ["isn't", 'is not', "'s not", "s not"], uz: 'It akillamayapti. U uxlayapti.' },
    { k: 'fill', q: "It ___ snowing today. It is sunny.", a: ["isn't", 'is not', "'s not", "s not"] },
    { k: 'order', uz: 'Akam uxlamayapti.', words: ['My', 'brother', "isn't", 'sleeping'], extra: ["doesn't", 'sleep'], alt: [['My', 'brother', 'is', 'not', 'sleeping']] },
    { k: 'order', uz: "Men hozir ishlamayapman.", words: ['I', "am", 'not', 'working', 'now'], extra: ["don't", 'amn\'t'], alt: [['I', "'m", 'not', 'working', 'now']] },
    { k: 'translate', uz: "Ular hozir o'ynamayapti.", a: ["They aren't playing now.", "They are not playing now.", "They're not playing now.", "They aren't playing."], why: "**aren't + playing**." },
    { k: 'translate', uz: "U hozir musiqa tinglamayapti.", a: ["She isn't listening to music now.", "She is not listening to music now.", "She's not listening to music now.", "He isn't listening to music now.", "He is not listening to music now.", "He's not listening to music now."] },
    { k: 'fix', wrong: "He doesn't sleeping now.", a: ["He isn't sleeping now.", "He is not sleeping now.", "He's not sleeping now."], why: "Hozirgi payt → **isn't sleeping**." },
    { k: 'fix', wrong: "They not playing in the garden.", a: ["They aren't playing in the garden.", "They are not playing in the garden.", "They're not playing in the garden."], why: "**be** ni tushirmang." },
    { k: 'listen', say: "The children aren't playing.", opts: ["The children aren't playing.", "The children don't play.", "The children are playing.", "The child isn't playing."], a: 0 },
    { k: 'speak', say: "I'm not working now. I'm studying English.", uz: 'Hozir nima qilmayotganingizni ayting' },
  ],
  quiz: [
    { k: 'choice', q: 'Sarah ___ cooking now. She is cleaning.', opts: ["isn't", "aren't", "doesn't", "not"], a: 0 },
    { k: 'choice', q: 'Which sentence is about NOW?', opts: ["He isn't sleeping.", "He doesn't sleep.", "He never sleeps.", "He doesn't work."], a: 0 },
    { k: 'fill', q: "We ___ shouting. We are talking quietly.", a: ["aren't", 'are not', "'re not", "re not"] },
    { k: 'order', uz: "Chaqaloq yig'lamayapti.", words: ['The', 'baby', "isn't", 'crying'], extra: ["doesn't", 'cry'], alt: [['The', 'baby', 'is', 'not', 'crying']] },
    { k: 'translate', uz: "Men hozir uxlamayapman.", a: ["I'm not sleeping now.", "I am not sleeping now.", "I'm not sleeping."] },
    { k: 'fix', wrong: "I amn't working today.", a: ["I'm not working today.", "I am not working today."], why: "*amn't* yo'q: **I'm not**." },
    { k: 'tf', q: "*They aren't playing* — bu hozir bo'layotgan ishga tegishli.", a: true },
    { k: 'tf', q: "*He doesn't sleeping* — gap to'g'ri.", a: false, why: "To'g'risi: *He **isn't** sleeping.*" },
  ],
  summary: [
    "Inkor: **am/is/are + not + fe'l-ing**: *I'm not working. He isn't sleeping. They aren't playing.*",
    "**I** bilan faqat *I'm not*; **isn't = 's not**, **aren't = 're not**.",
    "Hozir uchun *isn't/aren't + -ing*, odat uchun *don't/doesn't + fe'l*.",
    "*don't/doesn't* bilan -ing, va *be*siz inkor — xato.",
  ],
  homework: "Atrofingizga qarang va 4 ta inkor gap ayting: *I'm not sleeping. My phone isn't ringing. The window isn't open.*",
};

export default lesson;
