import type { Lesson } from '../../../types';

// Mini lesson (grammar): Present Continuous — now or plan? Time words tell which.
const lesson: Lesson = {
  id: 'u7-l13',
  title: 'Now or plan? Present Continuous',
  titleUz: "Hozir yoki reja? Present Continuous farqi",
  mini: true,
  kind: 'grammar',
  goal: "**Present Continuous** gapi *hozir* haqidami yoki *reja* haqidami — buni **vaqt so'zlariga qarab** aniqlaysiz: *I'm working now. / I'm meeting Ali tomorrow.*",
  slides: [
    {
      title: 'Bir shakl, ikki ma’no',
      blocks: [
        { t: 'p', md: "Shakl bir xil: **am / is / are + fe'l-ing**. Ma'noni **vaqt so'zi** aytib turadi:" },
        { t: 'table', head: ["Vaqt so'zi", 'Misol', "Ma'nosi"], speak: [1], rows: [
          ['now, right now, at the moment', "I'm working right now.", 'Hozir ishlayapman.'],
          ['tomorrow, tonight', "I'm meeting Ali tomorrow.", 'Ertaga Ali bilan uchrashaman (reja).'],
          ['next week, next month', "We're flying to Rome next week.", "Kelasi hafta Rimga uchamiz (reja)."],
          ['this weekend, later', "She's cooking plov this weekend.", "Bu hafta oxirida palov qiladi (reja)."],
        ] },
        { t: 'dialog', lines: [
          { who: 'Ali', en: "Hi Mia! Are you busy at the moment?", uz: "Salom Mia! Hozir bandmisan?" },
          { who: 'Mia', en: "Yes, I'm cooking dinner right now.", uz: "Ha, hozir kechki ovqat tayyorlayapman." },
          { who: 'Ali', en: "OK. What are you doing later?", uz: "Mayli. Keyinroq nima qilasan?" },
          { who: 'Mia', en: "I'm visiting my aunt this weekend. Call me next week!", uz: "Bu hafta oxirida xolamnikiga boraman. Kelasi hafta qo‘ng‘iroq qil!" },
        ] },
        { t: 'check', ex: { k: 'choice', q: "*I'm studying English right now.* — bu gap nima haqida?", opts: ['hozir', 'reja (kelajak)', 'har kuni (odat)', "o'tgan"], a: 0, why: "**right now** — hozir bo'layotgan ish." } },
      ],
    },
    {
      title: "Qaysi biri: hozir yoki reja?",
      blocks: [
        { t: 'examples', items: [
          { en: "He's talking on the phone at the moment.", uz: 'U hozir telefonda gaplashyapti.', note: 'hozir' },
          { en: "He's talking to the manager tomorrow.", uz: 'U ertaga menejer bilan gaplashadi.', note: 'reja' },
          { en: "They're playing tennis now.", uz: "Ular hozir tennis o'ynashyapti.", note: 'hozir' },
          { en: "They're playing tennis next week.", uz: "Ular kelasi hafta tennis o'ynashadi.", note: 'reja' },
        ] },
        { t: 'tip', tone: 'warn', md: "**Odat** haqida (har kuni, har hafta) *Present Simple* ishlating: *I play tennis every Sunday.* Rejada esa **Present Continuous**: *I'm playing tennis this Sunday.*" },
        { t: 'check', ex: { k: 'fill', q: "We ___ going to the cinema tonight. (are)", a: ['are', "'re"], uz: "Bugun kechqurun kinoga boramiz.", why: "**tonight** — reja: *we are going*." } },
        { t: 'check', ex: { k: 'tf', q: "*She is working tomorrow.* — bu reja.", a: true, why: "**tomorrow** — kelajak vaqti, demak reja." } },
      ],
    },
    {
      title: "Ehtiyot bo'ling: tez-tez uchraydigan xatolar",
      blocks: [
        { t: 'compare', good: { title: "To'g'ri", items: ["I'm meeting Ali tomorrow.", "She's working right now.", "They're flying next week."] }, bad: { title: "Noto'g'ri", items: ["I meet Ali tomorrow (reja).", "She working right now.", "They flying next week."] } },
        { t: 'p', md: "Eslatma: **am / is / are** ni tushirib qoldirmang. *She **is** working.*" },
        { t: 'check', ex: { k: 'fix', wrong: 'She working right now.', a: ['She is working right now.', "She's working right now."], why: "**is** kerak: *She is working.*" } },
      ],
    },
  ],
  words: [
    { en: 'right now', uz: 'aynan hozir', ipa: 'ˌraɪt ˈnaʊ', pos: 'phrase', ex: "I'm talking to my boss right now.", exUz: "Aynan hozir boshliq bilan gaplashyapman." },
    { en: 'at the moment', uz: 'hozir, shu paytda', ipa: 'ət ðə ˈməʊ.mənt', pos: 'phrase', ex: "She's busy at the moment.", exUz: 'U hozir band.' },
    { en: 'next week', uz: 'kelasi hafta', ipa: 'nekst wiːk', pos: 'phrase', ex: "We're moving house next week.", exUz: "Kelasi hafta uy ko'chamiz." },
    { en: 'next month', uz: 'kelasi oy', ipa: 'nekst mʌnθ', pos: 'phrase', ex: "I'm starting a new job next month.", exUz: 'Kelasi oy yangi ishni boshlayman.' },
    { en: 'this weekend', uz: 'bu hafta oxiri', ipa: 'ðɪs ˌwiːkˈend', pos: 'phrase', ex: "Are you doing anything this weekend?", exUz: "Bu hafta oxirida biror ishing bormi?" },
    { en: 'later', uz: 'keyinroq', ipa: 'ˈleɪ.tər', pos: 'adverb', ex: "I'm calling you later.", exUz: "Sizga keyinroq qo'ng'iroq qilaman." },
  ],
  practice: [
    { k: 'choice', q: "I'm cooking dinner ___.", opts: ['right now', 'every day', 'last year', 'always'], a: 0, why: "Hozir: **right now**." },
    { k: 'fill', q: "We ___ flying to Rome next week. (are)", a: ['are', "'re"], uz: "Kelasi hafta Rimga uchamiz.", why: "**next week** — reja." },
    { k: 'order', uz: "Ertaga Ali bilan uchrashaman.", words: ["I'm", 'meeting', 'Ali', 'tomorrow'], extra: ['meet', 'meets'], alt: [['I', 'am', 'meeting', 'Ali', 'tomorrow']] },
    { k: 'translate', uz: "U hozir telefonda gaplashyapti.", a: ["He is talking on the phone at the moment.", "He's talking on the phone at the moment.", "He is talking on the phone right now.", "He's talking on the phone right now.", "She is talking on the phone at the moment.", "She's talking on the phone at the moment.", "She is talking on the phone right now.", "She's talking on the phone right now."], why: "**is + talking**." },
    { k: 'match', pairs: [['right now', 'aynan hozir'], ['next week', 'kelasi hafta'], ['next month', 'kelasi oy'], ['this weekend', 'bu hafta oxiri'], ['later', 'keyinroq']] },
    { k: 'tf', q: "*I'm visiting my aunt this weekend.* — hozir bo'layotgan ish.", a: false, why: "**this weekend** — reja." },
    { k: 'listen', say: "I'm meeting Ali tomorrow.", opts: ["I'm meeting Ali tomorrow.", "I'm meeting Ali today.", "I meet Ali tomorrow.", "He's meeting Ali tomorrow."], a: 0 },
    { k: 'dictation', say: "What are you doing this weekend?", a: ["What are you doing this weekend?"] },
    { k: 'fix', wrong: 'They flying to Dubai next month.', a: ['They are flying to Dubai next month.', "They're flying to Dubai next month."], why: "**are** kerak." },
    { k: 'choice', q: 'Which time word shows a plan?', opts: ['next week', 'right now', 'at the moment', 'now'], a: 0 },
    { k: 'fill', q: "She is busy ___ the moment.", a: ['at'], uz: "U hozir band.", why: "**at the moment** — hozir." },
    { k: 'speak', say: "What are you doing this weekend?", uz: "Bu hafta oxirida nima qilasiz?" },
  ],
  quiz: [
    { k: 'choice', q: "Look! The boss ___ here right now.", opts: ['is coming', 'come', 'comes', 'coming'], a: 0 },
    { k: 'fill', q: "I'm ___ my friend next week. (meet)", a: ['meeting'], why: "**am + meeting**." },
    { k: 'order', uz: "Bu hafta oxirida nima qilyapsan?", words: ['What', 'are', 'you', 'doing', 'this', 'weekend'], extra: ['do', 'is'] },
    { k: 'translate', uz: "Kelasi oy yangi ishni boshlayman.", a: ["I'm starting a new job next month.", "I am starting a new job next month."], why: "**next month** — reja." },
    { k: 'tf', q: "*She's working at the moment.* — hozir.", a: true },
    { k: 'fix', wrong: 'I meet my aunt tomorrow.', hint: 'Reja: Present Continuous.', a: ["I'm meeting my aunt tomorrow.", 'I am meeting my aunt tomorrow.'], why: "Reja — **Present Continuous**." },
    { k: 'match', pairs: [['later', 'keyinroq'], ['next week', 'kelasi hafta'], ['right now', 'aynan hozir'], ['next month', 'kelasi oy']] },
    { k: 'choice', q: '"Are you busy at the moment?" — ...', opts: ["Yes, I'm working.", 'Yes, I work.', 'Yes, I working.', 'Yes, I am work.'], a: 0 },
  ],
  summary: [
    "Shakl bir xil: **am / is / are + fe'l-ing**.",
    "Hozir: **now, right now, at the moment**. Reja: **tomorrow, tonight, next week, this weekend**.",
    "Odat uchun **Present Simple**: *I play tennis every Sunday.*",
    "Yangi so'zlar: **right now, at the moment, next week, next month, this weekend, later**.",
  ],
  homework: "Bugun 3 ta gap yozing: bittasi hozir haqida, ikkitasi rejalaringiz haqida (*I'm … tomorrow / next week*).",
};

export default lesson;
