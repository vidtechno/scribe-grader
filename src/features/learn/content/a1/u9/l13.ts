import type { Lesson } from '../../../types';

// Mini lesson (grammar): could / couldn't and was / were able to for the past.
const lesson: Lesson = {
  id: 'u9-l13',
  title: 'could / couldn\'t and was able to',
  titleUz: "could / couldn't: o'tmishdagi qobiliyat",
  mini: true,
  kind: 'grammar',
  goal: "O'tmishda **nimani qila olganingiz / qila olmaganingizni** aytasiz: umumiy qobiliyat uchun **could / couldn't**, bitta aniq voqeada muvaffaqiyat uchun **was / were able to**: *I could swim at six. Yesterday I was able to climb the mountain.*",
  slides: [
    {
      title: 'Ikki yo\'l: could va was able to',
      blocks: [
        { t: 'p', md: "**could** ni o'rgandik: *I could swim when I was six.* Endi ikkinchi shakl: **was / were able to + V1** — \"qila oldim\". Ikkalasi ham o'tmishdagi qobiliyatni bildiradi, lekin ijobiy gapda farq bor." },
        { t: 'table', head: ['Vaziyat', 'Qanday aytiladi', "O'zbekcha"], speak: [1], rows: [
          ["Umumiy qobiliyat (ko'p yillar)", 'I could run fast when I was young.', 'Yoshligimda tez yugura olardim.'],
          ['Bitta aniq voqea (kecha, o\'sha kuni)', 'I was able to find the key yesterday.', 'Kecha kalitni topa oldim.'],
          ['Inkor (ikkalasi ham to\'g\'ri)', "I couldn't / wasn't able to open the door.", 'Eshikni ocha olmadim.'],
          ["Ko'plik", 'We were able to see the mountain.', "Biz tog'ni ko'ra oldik."],
        ] },
        { t: 'tip', tone: 'good', md: "Qoida oddiy: **bir marta qilgan ish** (ijobiy) → **was / were able to**. **Umumiy qobiliyat** → **could**. **Inkorda** → **couldn't** ham, **wasn't / weren't able to** ham to'g'ri." },
        { t: 'check', ex: { k: 'choice', q: "Yesterday the bag was heavy, but I ___ carry it to the top.", opts: ['was able to', 'could to', 'able to', 'were able to'], a: 0, why: "Bitta voqea, ijobiy, **I** → **was able to** + V1." } },
      ],
    },
    {
      title: "Ehtiyot bo'ling: tez-tez uchraydigan xatolar",
      blocks: [
        { t: 'compare', good: { title: "To'g'ri", items: ["I wasn't able to carry it.", 'They were able to climb the mountain.', 'Were you able to lock the door?', "He couldn't open the box."] }, bad: { title: "Noto'g'ri", items: ["I wasn't able carry it.", 'They was able to climb the mountain.', 'Did you able to lock the door?', "He couldn't opened the box."] } },
        { t: 'p', md: "Eslatma: **able** dan oldin **was / were** kerak, undan keyin **to + V1**. *Did* va *V2* bu yerda kerak emas. Savol: **Were you able to…?** yoki **Could you…?**" },
        { t: 'check', ex: { k: 'fix', wrong: 'They was able to open the lock.', a: ['They were able to open the lock.'], why: "**They** → **were** able to." } },
        { t: 'check', ex: { k: 'fill', q: "The box was heavy, so I ___ able to lift it.", a: ["wasn't", 'was not'], uz: "Quti og'ir edi, shuning uchun uni ko'tara olmadim.", why: "Inkor: **wasn't able to**." } },
      ],
    },
    {
      title: 'Dialog: tog\'ga chiqish',
      blocks: [
        { t: 'dialog', lines: [
          { who: 'Kamola', en: 'How was your trip to the mountains?', uz: "Tog'larga sayohating qanday o'tdi?" },
          { who: 'Jasur', en: 'It was great! There was a lot of snow, but we were able to climb to the top.', uz: "Zo'r edi! Qor ko'p edi, lekin cho'qqiga chiqa oldik." },
          { who: 'Kamola', en: 'Could you see the city from there?', uz: "U yerdan shaharni ko'ra oldingmi?" },
          { who: 'Jasur', en: "No, we couldn't. There were clouds, so we weren't able to see anything. But it was a great day.", uz: "Yo'q. Bulutlar bor edi, shuning uchun hech narsa ko'ra olmadik. Lekin kun zo'r o'tdi." },
          { who: 'Kamola', en: 'Was your bag heavy?', uz: "Sumkang og'ir edimi?" },
          { who: 'Jasur', en: "Yes, but I was able to carry it all day.", uz: "Ha, lekin uni kun bo'yi ko'tarib yura oldim." },
        ] },
        { t: 'check', ex: { k: 'tf', q: 'Jasur and his friends **were able to see the city** from the top.', a: false, why: "*No, we couldn't… we weren't able to see anything.*" } },
      ],
    },
  ],
  words: [
    { en: 'be able to', uz: 'qila olmoq', ipa: 'bi ˈeɪ.bəl tuː', pos: 'phrase', ex: 'We were able to finish early.', exUz: 'Biz erta tugata oldik.' },
    { en: 'carry', uz: "ko'tarib yurmoq, olib yurmoq", ipa: 'ˈkær.i', pos: 'verb', ex: 'I carried two bags to the station.', exUz: "Bekatgacha ikkita sumka ko'tarib bordim." },
    { en: 'heavy', uz: "og'ir", ipa: 'ˈhev.i', pos: 'adjective', ex: 'The box was too heavy.', exUz: "Quti juda og'ir edi." },
    { en: 'lift', uz: "ko'tarmoq", ipa: 'lɪft', pos: 'verb', ex: "He couldn't lift the box.", exUz: "U qutini ko'tara olmadi." },
    { en: 'top', uz: "cho'qqi, tepa", ipa: 'tɒp', pos: 'noun', ex: 'We climbed to the top at noon.', exUz: "Tush paytida cho'qqiga chiqdik." },
    { en: 'lock', uz: 'qulflamoq; qulf', ipa: 'lɒk', pos: 'verb', ex: 'I locked the door and left.', exUz: 'Eshikni qulflab, ketdim.' },
  ],
  practice: [
    { k: 'choice', q: "When I was small, I ___ swim.", opts: ["couldn't", 'able to', 'was able', 'did could'], a: 0, why: "Umumiy qobiliyatning inkori → **couldn't** + V1." },
    { k: 'fill', q: 'We ___ able to climb to the top yesterday.', a: ['were'], uz: "Kecha cho'qqiga yeta oldik.", why: "**We** → **were able to**." },
    { k: 'fix', wrong: "I wasn't able carry the bag.", a: ["I wasn't able to carry the bag.", 'I was not able to carry the bag.'], why: "**able** dan keyin **to** kerak." },
    { k: 'order', uz: 'Biz kalitni topa oldik.', words: ['We', 'were', 'able', 'to', 'find', 'the', 'key'], extra: ['was', 'found'] },
    { k: 'translate', uz: "Men sumkani ko'tara olmadim, chunki u og'ir edi.", a: ["I couldn't carry the bag because it was heavy.", "I wasn't able to carry the bag because it was heavy.", "I couldn't lift the bag because it was heavy.", "I wasn't able to lift the bag because it was heavy."], why: "Inkor: **couldn't** yoki **wasn't able to** + V1." },
    { k: 'match', pairs: [['carry', "ko'tarib yurmoq"], ['heavy', "og'ir"], ['lift', "ko'tarmoq"], ['top', "cho'qqi"], ['lock', 'qulflamoq']] },
    { k: 'tf', q: "*They was able to see the mountain.* — gap to'g'ri.", a: false, why: "**They** → *were able to*." },
    { k: 'listen', say: "We weren't able to see anything.", opts: ["We weren't able to see anything.", "We couldn't see anything.", 'We were able to see everything.', "We aren't able to see anything."], a: 0 },
    { k: 'dictation', say: 'I was able to lock the door.', a: ['I was able to lock the door.'] },
    { k: 'choice', q: "Two days ago I was ill, but yesterday I ___ go to work.", opts: ['was able to', 'able to', 'am able to', 'were able to'], a: 0, why: "Bitta voqea, ijobiy → **was able to**." },
    { k: 'fill', q: "There was a lot of snow, so we ___ go out. (negative)", a: ["couldn't", 'could not', "weren't able to", 'were not able to'], uz: "Qor ko'p edi, shuning uchun chiqa olmadik.", why: "Inkor: **couldn't** yoki **weren't able to** + V1." },
    { k: 'speak', say: 'We were able to climb to the top.', uz: "Biz cho'qqiga chiqa oldik." },
  ],
  quiz: [
    { k: 'choice', q: 'They ___ open the door yesterday. It was easy.', opts: ['was able to', 'were able to', 'could to', 'did able to'], a: 1, why: "**They** → **were able to**." },
    { k: 'fill', q: "He ___ lift the box. It was too heavy. (negative)", a: ["couldn't", 'could not', "wasn't able to", 'was not able to'] },
    { k: 'order', uz: "U eshikni qulflay oldi.", words: ['She', 'was', 'able', 'to', 'lock', 'the', 'door'], extra: ['were', 'locked'] },
    { k: 'translate', uz: "Kecha men cho'qqiga chiqa oldim.", a: ['I was able to climb to the top yesterday.', 'Yesterday I was able to climb to the top.', 'I was able to climb to the top yesterday'] },
    { k: 'fix', wrong: "He couldn't opened the box.", a: ["He couldn't open the box.", 'He could not open the box.'], why: "**couldn't** dan keyin V1." },
    { k: 'tf', q: "*Were you able to find the key?* — to'g'ri savol.", a: true, why: "Savol: **Were you able to + V1?**" },
    { k: 'match', pairs: [['carry', "ko'tarib yurmoq"], ['heavy', "og'ir"], ['top', "cho'qqi"], ['lock', 'qulflamoq']] },
    { k: 'choice', q: 'Which sentence is correct?', opts: ["I wasn't able to sleep.", "I wasn't able sleep.", "I didn't able to sleep.", "I weren't able to sleep."], a: 0 },
  ],
  summary: [
    "Umumiy qobiliyat: **could / couldn't + V1** (*I could swim at six*).",
    "Bitta aniq voqeada muvaffaqiyat: **was / were able to + V1** (*I was able to find the key*).",
    "Inkorda ikkalasi ham to'g'ri: **couldn't** = **wasn't / weren't able to**.",
    "Xato: ❌ *They was able to*, ❌ *wasn't able carry*, ❌ *couldn't opened*.",
    "Yangi so'zlar: **carry, heavy, lift, top, lock**, **be able to**.",
  ],
  homework: "O'tgan hafta nimani qila olganingiz va nimani qila olmaganingiz haqida 4 ta gap yozing: ikkitasi *was able to*, ikkitasi *couldn't* bilan.",
};

export default lesson;
