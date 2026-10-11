import type { Lesson } from '../../../types';

// Mini lesson (consolidation): the whole Present Simple topic. Mixes affirmative, he/she/it -s, don't/doesn't, Do/Does,
// the café and work situations, and recycles words from u3-l2…l10.
const lesson: Lesson = {
  id: 'u3-l11',
  title: 'Present Simple: final review',
  titleUz: 'Present Simple: yakuniy takror',
  mini: true,
  goal: "Present Simple mavzusini yakunlaysiz: **darak, -s, inkor va savol** — hammasi bitta joyda. Kafe va ish vaziyatlarida erkin foydalanasiz.",
  slides: [
    {
      title: 'Bir qarashda: Present Simple',
      blocks: [
        { t: 'table', head: ['Turi', 'I / you / we / they', 'he / she / it'], speak: [1, 2], rows: [
          ['Darak', 'I work.', 'She works.'],
          ['Inkor', "I don't work.", "She doesn't work."],
          ['Savol', 'Do you work?', 'Does she work?'],
          ['Qisqa javob', "Yes, I do. / No, I don't.", "Yes, she does. / No, she doesn't."],
        ] },
        { t: 'tip', tone: 'info', md: "**Bitta qoida:** faqat **darak** gapda **he / she / it** fe'liga **-s** qo'shiladi. **Does / doesn't** bor joyda fe'l oddiy shaklda: *She doesn't work. Does she work?*" },
        { t: 'check', ex: { k: 'choice', q: 'Qaysi gap to\'g\'ri?', opts: ["She doesn't works.", "She doesn't work.", "She don't work.", "She not work."], a: 1 } },
      ],
    },
    {
      title: 'Hayotda: kafe va ish',
      blocks: [
        { t: 'dialog', lines: [
          { who: 'Sara', en: 'Do you work near here?', uz: 'Shu yaqinda ishlaysizmi?' },
          { who: 'Tom', en: 'Yes, I do. My colleague and I eat lunch at this café every day.', uz: "Ha. Hamkasbim va men har kuni shu kafeda tushlik qilamiz." },
          { who: 'Sara', en: "Does he drink coffee?", uz: 'U kofe ichadimi?' },
          { who: 'Tom', en: "No, he doesn't. He drinks tea, but I don't like tea.", uz: "Yo'q. U choy ichadi, men esa choyni yoqtirmayman." },
        ] },
        { t: 'check', ex: { k: 'fill', q: "Tom doesn't ___ tea.", a: ['like'], uz: 'Tom choyni yoqtirmaydi.', why: "**doesn't** dan keyin oddiy fe'l." } },
      ],
    },
    {
      title: 'Eng ko\'p uchraydigan xatolar',
      blocks: [
        { t: 'compare', good: { title: "To'g'ri", items: ['He works at a bank.', "She doesn't like tea.", 'Does he have a car?', 'I study at university.'] }, bad: { title: "Noto'g'ri", items: ['He work at a bank.', "She doesn't likes tea.", 'Does he has a car?', 'I am study at university.'] } },
        { t: 'check', ex: { k: 'choice', q: '___ your friends play football?', opts: ['Do', 'Does', 'Are', 'Is'], a: 0, why: "*friends* = they → **Do**." } },
      ],
    },
  ],
  words: [
    { en: 'weekend', uz: 'dam olish kunlari', ipa: 'ˌwiːkˈend', pos: 'noun', ex: 'I play football at the weekend.', exUz: 'Dam olish kunlari futbol o\'ynayman.' },
    { en: 'busy', uz: 'band', ipa: 'ˈbɪz.i', pos: 'adj', ex: 'My colleague is busy on Monday.', exUz: 'Hamkasbim dushanba kuni band.' },
    { en: 'early', uz: 'erta', ipa: 'ˈɜː.li', pos: 'adv', ex: 'I get up early.', exUz: 'Men erta turaman.' },
  ],
  practice: [
    { k: 'choice', q: 'My brother ___ English.', opts: ['speak', 'speaks', 'speaking', 'is speak'], a: 1 },
    { k: 'fill', q: "I ___ drink coffee. (negative)", a: ["don't", 'do not'] },
    { k: 'order', uz: "U ofisda ishlaydimi?", words: ['Does', 'she', 'work', 'in', 'an', 'office'], extra: ['works', 'Do'] },
    { k: 'translate', uz: "Do'stim kofe ichmaydi.", a: ["My friend doesn't drink coffee.", 'My friend does not drink coffee.'] },
    { k: 'match', pairs: [['weekend', 'dam olish kunlari'], ['busy', 'band'], ['early', 'erta'], ['live', 'yashamoq'], ['need', 'kerak bo\'lmoq']] },
    { k: 'tf', q: "*Does she likes tea?* — gap to'g'ri.", a: false, why: "To'g'risi: *Does she **like** tea?*" },
    { k: 'listen', say: "She doesn't work on Sunday.", opts: ["She doesn't work on Sunday.", 'She works on Sunday.', "He doesn't work on Sunday.", 'Does she work on Sunday?'], a: 0 },
    { k: 'dictation', say: 'Do you play football at the weekend?', a: ['Do you play football at the weekend?'] },
    { k: 'fix', wrong: 'He have a busy week.', a: ['He has a busy week.'], why: "**he** + have → **has**." },
    { k: 'fix', wrong: "She doesn't works on Friday.", a: ["She doesn't work on Friday."] },
    { k: 'speak', say: "I don't work at the weekend.", uz: "Men dam olish kunlari ishlamayman." },
  ],
  quiz: [
    { k: 'choice', q: 'They ___ in Samarkand.', opts: ['lives', 'live', 'is live', 'living'], a: 1 },
    { k: 'fill', q: 'Ali ___ early. (get up)', a: ['gets up'] },
    { k: 'order', uz: "Siz dam olish kunlari ishlaysizmi?", words: ['Do', 'you', 'work', 'at', 'the', 'weekend'], extra: ['Does', 'works'] },
    { k: 'translate', uz: "U kofeni yoqtirmaydi.", a: ["She doesn't like coffee.", 'She does not like coffee.', "He doesn't like coffee.", 'He does not like coffee.'] },
    { k: 'tf', q: "*Yes, she do.* — qisqa javob to'g'ri.", a: false, why: "To'g'risi: *Yes, she does.*" },
    { k: 'fix', wrong: 'Do your sister like tea?', a: ['Does your sister like tea?'] },
    { k: 'match', pairs: [['weekend', 'dam olish kunlari'], ['busy', 'band'], ['early', 'erta']] },
    { k: 'dictation', say: "He doesn't like tea.", a: ["He doesn't like tea.", 'He does not like tea.'] },
  ],
  summary: [
    "Darak: **-s faqat he / she / it** bilan. Inkor: **don't / doesn't**. Savol: **Do / Does**.",
    "**Does / doesn't** dan keyin fe'l har doim oddiy shaklda.",
    "Kafe va ish vaziyatlarida shu qoliplar ishlaydi: *Do you want…? / When does it start?*",
  ],
  homework: "Bugungi kuningiz haqida 5 ta gap yozing: 2 ta darak, 2 ta inkor, 1 ta savol.",
};

export default lesson;
