import type { Lesson } from '../../../types';

// Mini lesson (skill): listening and writing about a daily routine. Uses time (u3-l6), days/in-on-at (u3-l7), frequency adverbs (u3-l8).
const lesson: Lesson = {
  id: 'u3-l15',
  title: 'My daily routine: listening and writing',
  titleUz: "Mening kunim: tinglash va yozish",
  mini: true,
  goal: "Kun tartibi haqidagi suhbatni tinglab **vaqt va tafsilotlarni** tushunasiz, so'ng o'zingizning kuningiz haqida **qisqa abzats** yozasiz: *I usually get up at half past six. I go to work by bus.*",
  slides: [
    {
      title: 'Tinglang: Emily ning kuni',
      blocks: [
        { t: 'p', md: "Avval dialogni **tinglang** (har bir qatordagi tugmani bosing), keyin o'qing. Vaqtlarga va ravishlarga (*usually, always*) e'tibor bering." },
        { t: 'dialog', lines: [
          { who: 'Karim', en: 'What time do you get up, Emily?', uz: 'Emily, soat nechada turasan?' },
          { who: 'Emily', en: 'I usually get up at half past six. I have a shower, and I have breakfast at seven.', uz: 'Odatda olti yarimda turaman. Dush qabul qilaman va yettida nonushta qilaman.' },
          { who: 'Karim', en: 'When do you leave home?', uz: 'Uydan qachon chiqasan?' },
          { who: 'Emily', en: 'At quarter past eight. I go to work by bus.', uz: 'Sakkizdan chorak o\'tganda. Ishga avtobusda boraman.' },
          { who: 'Karim', en: 'And your husband? Does he get up early?', uz: 'Erching-chi? U erta turadimi?' },
          { who: 'Emily', en: "No, he doesn't. He gets up at eight, but he always has breakfast at work.", uz: "Yo'q. U sakkizda turadi, lekin nonushtani doim ishda qiladi." },
          { who: 'Karim', en: 'When do you get home?', uz: 'Uyga qachon qaytasan?' },
          { who: 'Emily', en: 'At six. After dinner I relax, and I go to bed at eleven.', uz: "Oltida. Kechki ovqatdan keyin dam olaman va o'n birda uxlashga yotaman." },
        ] },
        { t: 'check', ex: { k: 'choice', q: 'Emily soat nechada turadi?', opts: ['At six', 'At half past six', 'At seven', 'At eight'], a: 1, why: "*I usually get up at **half past six**.*" } },
        { t: 'check', ex: { k: 'tf', q: "Emily ning eri (husband) har kuni uyda nonushta qiladi.", a: false, why: "*He always has breakfast **at work**.*" } },
      ],
    },
    {
      title: "Tinglashda nimaga e'tibor beramiz?",
      blocks: [
        { t: 'p', md: "Tinglaganda **kalit so'zlarni** ushlang: **vaqt** (*at half past six*), **ish** (*have breakfast*), **qanchalik tez-tez** (*usually, always, never*), **kim** (*I / he / she*)." },
        {
          t: 'table', head: ['Eshitdingiz', 'Yozing', "Ma'nosi"], speak: [0],
          rows: [
            ['half past six', '6:30', 'olti yarim'],
            ['quarter to eight', '7:45', 'sakkizga chorak qoldi'],
            ['quarter past eight', '8:15', 'sakkizdan chorak o\'tdi'],
            ['He gets up', 'he + -s', 'u turadi'],
            ["He doesn't get up", "doesn't + s'siz fe'l", 'u turmaydi'],
          ],
        },
        { t: 'tip', tone: 'warn', md: "**quarter to eight** (7:45) va **quarter past eight** (8:15) ni adashtirmang. **to** — qolgan, **past** — o'tgan." },
        { t: 'check', ex: { k: 'listen', say: "I get home at quarter to seven", opts: ['6:15', '6:45', '7:15', '7:45'], a: 1, why: "**quarter to seven** = 6:45." } },
        { t: 'check', ex: { k: 'listen', say: 'He never goes to bed early', opts: ['He always goes to bed early', 'He never goes to bed early', 'He usually goes to bed late', 'He never gets up early'], a: 1 } },
      ],
    },
    {
      title: 'Yozamiz: kun tartibi abzatsi',
      blocks: [
        { t: 'p', md: "Yaxshi abzats: kun **ketma-ketligida** (ertalab → kechgacha), har bir ishda **vaqt**, orasida **tez-tez** ravishlari. Namuna:" },
        { t: 'text', title: 'My day', en: "I usually get up at half past six. I have a shower and I have breakfast at seven. I leave home at quarter past eight and go to work by bus. I always have lunch at one o'clock. I get home at six. After dinner, I sometimes watch TV. I never go to bed late. I go to bed at eleven.", uz: "Men odatda olti yarimda turaman. Dush qabul qilaman va yettida nonushta qilaman. Sakkizdan chorak o'tganda uydan chiqaman va ishga avtobusda boraman. Tushlikni doim soat birda qilaman. Uyga oltida qaytaman. Kechki ovqatdan keyin ba'zan televizor ko'raman. Hech qachon kech yotmayman. O'n birda uxlashga yotaman." },
        { t: 'tip', tone: 'good', md: "Foydali so'zlar: **before** (…dan oldin), **after** (…dan keyin), **then** (keyin). *After dinner I relax.* *Before work I have a shower.*" },
        { t: 'check', ex: { k: 'fill', q: 'I have a shower ___ breakfast. (…dan oldin)', a: ['before'], uz: 'Nonushtadan oldin dush qabul qilaman.', why: "…dan oldin — **before**." } },
      ],
    },
    {
      title: 'Yozishda xatolardan saqlaning',
      blocks: [
        { t: 'compare', good: { title: "To'g'ri", items: ['I get up at seven.', 'She always has lunch at one.', 'He goes to work by bus.', "He doesn't get up early."] }, bad: { title: "Noto'g'ri", items: ['I get up in seven.', 'She has always lunch at one.', 'He go to work by bus.', "He doesn't gets up early."] } },
        { t: 'tip', tone: 'info', md: "Tekshiruv ro'yxati:\n1. Soat oldida **at**.\n2. **he / she** → fe'lga **-s** (*gets, has, goes*).\n3. **doesn't** dan keyin fe'l s'siz.\n4. Ravish fe'ldan oldin: *I always have lunch.*" },
        { t: 'check', ex: { k: 'fix', wrong: 'My brother get up at seven.', a: ['My brother gets up at seven.'], why: "*my brother* = he → **gets**." } },
      ],
    },
  ],
  words: [
    { en: 'routine', uz: 'kun tartibi, odat', ipa: 'ruːˈtiːn', pos: 'noun', ex: 'My morning routine is simple.', exUz: 'Mening ertalabki tartibim oddiy.' },
    { en: 'have a shower', uz: 'dush qabul qilmoq', ipa: 'hæv ə ˈʃaʊ.ə', pos: 'phrase', ex: 'I have a shower at seven.', exUz: 'Men yettida dush qabul qilaman.' },
    { en: 'leave home', uz: 'uydan chiqmoq', ipa: 'liːv həʊm', pos: 'phrase', ex: 'She leaves home at eight.', exUz: 'U sakkizda uydan chiqadi.' },
    { en: 'get home', uz: 'uyga qaytmoq', ipa: 'ɡet həʊm', pos: 'phrase', ex: 'We get home at six.', exUz: 'Biz oltida uyga qaytamiz.' },
    { en: 'before', uz: '…dan oldin', ipa: 'bɪˈfɔː', pos: 'preposition', ex: 'I read before bed.', exUz: 'Uxlashdan oldin kitob o\'qiyman.' },
    { en: 'after', uz: '…dan keyin', ipa: 'ˈɑːf.tə', pos: 'preposition', ex: 'After lunch he relaxes.', exUz: 'Tushlikdan keyin u dam oladi.' },
  ],
  practice: [
    { k: 'listen', say: 'I usually get up at half past six', opts: ['6:15', '6:30', '6:45', '7:30'], a: 1 },
    { k: 'listen', say: 'She leaves home at quarter past eight', opts: ['She leaves home at 8:15', 'She leaves home at 7:45', 'She gets home at 8:15', 'He leaves home at 8:45'], a: 0 },
    { k: 'dictation', say: 'I have a shower before breakfast.', a: ['I have a shower before breakfast.', 'I have a shower before breakfast'], uz: 'Eshitganingizni yozing' },
    { k: 'dictation', say: 'He always goes to work by bus.', a: ['He always goes to work by bus.', 'He always goes to work by bus'] },
    { k: 'match', pairs: [['routine', 'kun tartibi'], ['leave home', 'uydan chiqmoq'], ['get home', 'uyga qaytmoq'], ['before', '…dan oldin'], ['after', '…dan keyin']] },
    { k: 'choice', q: 'Dialogga ko\'ra, Emily ishga qanday boradi?', opts: ['By car', 'By bus', 'On foot', 'By train'], a: 1 },
    { k: 'tf', q: 'Emily uyga soat oltida qaytadi.', a: true, why: "*I get home **at six**.*" },
    { k: 'fill', q: 'I get up ___ seven o\'clock.', a: ['at'], uz: 'Men soat yettida turaman.', why: "Soat oldidan — **at**." },
    { k: 'fill', q: 'After dinner she ___ TV. (watch)', a: ['watches'], uz: 'Kechki ovqatdan keyin u televizor ko\'radi.', why: "she + **-ch** → **watches**." },
    { k: 'order', uz: 'Men odatda yettida nonushta qilaman.', words: ['I', 'usually', 'have', 'breakfast', 'at', 'seven'], extra: ['has'], why: "Ega → **usually** → fe'l." },
    { k: 'order', uz: 'U ishga avtobusda boradi.', words: ['He', 'goes', 'to', 'work', 'by', 'bus'], extra: ['go', 'in'], why: "*he* → **goes**; transport — **by bus**." },
    { k: 'fix', wrong: 'She always has lunch in one o\'clock.', a: ["She always has lunch at one o'clock.", 'She always has lunch at one.'], why: "Soat oldidan — **at**." },
    { k: 'translate', uz: 'Men hech qachon kech yotmayman.', a: ['I never go to bed late'], why: "**never** + tasdiq fe'l." },
    { k: 'translate', uz: 'Kechki ovqatdan keyin dam olaman.', a: ['After dinner I relax', 'I relax after dinner', 'After dinner, I relax'] },
  ],
  quiz: [
    { k: 'listen', say: 'We have dinner at quarter to eight', opts: ['7:15', '7:45', '8:15', '8:45'], a: 1 },
    { k: 'listen', say: 'My sister never gets up early', opts: ['My sister always gets up early', 'My sister never gets up early', 'My sister rarely gets up late', 'My sisters never get up early'], a: 1 },
    { k: 'dictation', say: 'I get home at six.', a: ['I get home at six.', 'I get home at six', 'I get home at 6.', 'I get home at 6'] },
    { k: 'fill', q: 'I brush my teeth ___ bed. (…dan oldin)', a: ['before'], uz: 'Uxlashdan oldin tishlarimni tozalayman.' },
    { k: 'choice', q: "To'g'ri gapni tanlang:", opts: ['He always is late.', 'He gets always up.', 'He is always late.', 'He always late is.'], a: 2 },
    { k: 'fix', wrong: "He doesn't gets up early.", a: ["He doesn't get up early.", 'He does not get up early.'] },
    { k: 'order', uz: 'Biz oltida uyga qaytamiz.', words: ['We', 'get', 'home', 'at', 'six'], extra: ['gets', 'in'] },
    { k: 'translate', uz: 'U sakkizdan chorak o\'tganda uydan chiqadi.', a: ['She leaves home at quarter past eight', 'He leaves home at quarter past eight', 'She leaves home at eight fifteen', 'He leaves home at eight fifteen', 'She leaves home at 8:15', 'He leaves home at 8:15'] },
  ],
  summary: [
    "Tinglaganda kalit so'zlarni ushlang: **vaqt, ish, tez-tez ravishi, kim** (I / he / she).",
    "Abzats ketma-ketlikda yoziladi, har bir ishda vaqt: *I get up **at** seven. I go to work **by bus**.*",
    "Foydali so'zlar: **before, after, then**; ravishlar fe'ldan oldin: *I always have lunch.*",
    "Yozgandan keyin tekshiring: **at**, he/she + **-s**, **doesn't** + s'siz fe'l.",
  ],
  homework: "O'z kuningiz haqida 6–8 gapdan iborat abzats yozing (kamida 3 ta vaqt va 2 ta ravish). Keyin uni ovoz chiqarib o'qing va o'zingizni yozib tinglang.",
};

export default lesson;
