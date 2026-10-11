import type { Lesson } from '../../../types';

// Mini lesson (situation): university and work week. Recycles work, study, start, finish, watch, play, learn.
const lesson: Lesson = {
  id: 'u3-l10',
  title: 'University and work: my week',
  titleUz: 'Universitet va ish: mening haftam',
  mini: true,
  goal: "Universitet yoki ish kuningiz haqida **Present Simple** bilan gapirasiz: *I study at university. My lesson starts at nine. Do you work on Saturday?*",
  slides: [
    {
      title: 'Vaziyat: yangi tanish bilan suhbat',
      blocks: [
        { t: 'p', md: "Yangi odam bilan tanishganda eng ko'p beriladigan savol: *Nima bilan shug'ullanasiz?* Javob — **Present Simple**, chunki bu doimiy ish/o'qish." },
        { t: 'dialog', lines: [
          { who: 'Dilya', en: 'Do you study or work?', uz: "Siz o'qiysizmi yoki ishlaysizmi?" },
          { who: 'Omar', en: 'I study at university and I work in a shop.', uz: "Men universitetda o'qiyman va do'konda ishlayman." },
          { who: 'Dilya', en: 'When does your lesson start?', uz: 'Darsingiz qachon boshlanadi?' },
          { who: 'Omar', en: 'It starts at nine and finishes at one.', uz: "U to'qqizda boshlanadi va birda tugaydi." },
          { who: 'Dilya', en: 'Do you work on Saturday?', uz: 'Shanba kuni ishlaysizmi?' },
          { who: 'Omar', en: "No, I don't. I play football with my colleagues.", uz: "Yo'q. Men hamkasblarim bilan futbol o'ynayman." },
        ] },
        { t: 'check', ex: { k: 'choice', q: 'Omar: "My lesson ___ at nine."', opts: ['start', 'starts', 'is start', 'starting'], a: 1, why: "*my lesson* = it → **starts**." } },
      ],
    },
    {
      title: "Ish va o'qish: tayyor qoliplar",
      blocks: [
        { t: 'table', head: ['Inglizcha', "O'zbekcha"], speak: [0], rows: [
          ['I study at university.', "Men universitetda o'qiyman."],
          ['She works in an office.', 'U ofisda ishlaydi.'],
          ['When does the lecture start?', 'Ma\'ruza qachon boshlanadi?'],
          ['We have a meeting on Monday.', 'Dushanba kuni uchrashuvimiz bor.'],
          ["My colleague doesn't work on Friday.", 'Hamkasbim juma kuni ishlamaydi.'],
        ] },
        { t: 'tip', tone: 'info', md: "**When / What time / Where** + **do / does** + ega + fe'l: *When **does** the lecture **start**?* Savol so'zi eng boshida, so'ng **do / does**." },
        { t: 'check', ex: { k: 'fill', q: 'When ___ the meeting finish?', a: ['does'], uz: 'Uchrashuv qachon tugaydi?', why: "*the meeting* = it → **does**." } },
      ],
    },
    {
      title: 'Ehtiyot bo\'ling',
      blocks: [
        { t: 'compare', good: { title: "To'g'ri", items: ['She works in an office.', 'When does it start?', "I don't work on Saturday."] }, bad: { title: "Noto'g'ri", items: ['She work in an office.', 'When does it starts?', "I no work on Saturday."] } },
        { t: 'check', ex: { k: 'choice', q: 'To\'g\'ri gapni tanlang:', opts: ['I am study at university.', 'I study at university.', 'I studies at university.', 'I studying at university.'], a: 1, why: "*I am work/study* — xato. Present Simple: **I study**." } },
      ],
    },
  ],
  words: [
    { en: 'lecture', uz: "ma'ruza", ipa: 'ˈlek.tʃər', pos: 'noun', ex: 'The lecture starts at nine.', exUz: "Ma'ruza to'qqizda boshlanadi." },
    { en: 'colleague', uz: 'hamkasb', ipa: 'ˈkɒl.iːɡ', pos: 'noun', ex: 'My colleague works with me.', exUz: 'Hamkasbim men bilan ishlaydi.' },
    { en: 'meeting', uz: 'uchrashuv, yig\'ilish', ipa: 'ˈmiː.tɪŋ', pos: 'noun', ex: 'We have a meeting on Monday.', exUz: 'Dushanba kuni yig\'ilishimiz bor.' },
    { en: 'finish', uz: 'tugamoq, tugatmoq', ipa: 'ˈfɪn.ɪʃ', pos: 'verb', ex: 'The lesson finishes at one.', exUz: 'Dars birda tugaydi.' },
  ],
  practice: [
    { k: 'choice', q: 'My sister ___ at a bank.', opts: ['work', 'works', 'is work', 'working'], a: 1 },
    { k: 'fill', q: 'When ___ your lecture start?', a: ['does'], uz: "Ma'ruzangiz qachon boshlanadi?" },
    { k: 'order', uz: "Biz dushanba kuni uchrashuvga egamiz.", words: ['We', 'have', 'a', 'meeting', 'on', 'Monday'], extra: ['has', 'at'] },
    { k: 'translate', uz: "Men universitetda o'qiyman.", a: ['I study at university.', 'I study at the university.'] },
    { k: 'match', pairs: [['lecture', "ma'ruza"], ['colleague', 'hamkasb'], ['meeting', 'uchrashuv'], ['finish', 'tugamoq'], ['work', 'ishlamoq']] },
    { k: 'tf', q: "*Does your colleague works on Friday?* — gap to'g'ri.", a: false, why: "To'g'risi: *Does your colleague **work** on Friday?*" },
    { k: 'listen', say: 'When does the lecture start?', opts: ['When does the lecture start?', 'When do the lectures start?', 'Where does the lecture start?', 'When does the lesson finish?'], a: 0 },
    { k: 'dictation', say: 'She works in an office.', a: ['She works in an office.'] },
    { k: 'fix', wrong: 'He work in a shop.', a: ['He works in a shop.'], why: "**he** → works." },
    { k: 'fill', q: "My colleagues ___ work on Saturday. (negative)", a: ["don't", 'do not'], why: "*colleagues* = they → **don't**." },
    { k: 'speak', say: 'I study at university and I work in a shop.', uz: "Men universitetda o'qiyman va do'konda ishlayman." },
  ],
  quiz: [
    { k: 'choice', q: 'What time ___ the meeting finish?', opts: ['do', 'does', 'is', 'are'], a: 1 },
    { k: 'fill', q: 'My colleague ___ English. (speak)', a: ['speaks'] },
    { k: 'order', uz: "Dars soat birda tugaydi.", words: ['The', 'lesson', 'finishes', 'at', 'one'], extra: ['finish', 'in'] },
    { k: 'translate', uz: "U shanba kuni ishlamaydi.", a: ["She doesn't work on Saturday.", 'She does not work on Saturday.', "He doesn't work on Saturday.", 'He does not work on Saturday.'] },
    { k: 'tf', q: "*We works in an office.* — gap to'g'ri.", a: false, why: "**we** bilan: *We work*." },
    { k: 'fix', wrong: 'When does the lecture starts?', a: ['When does the lecture start?'] },
    { k: 'match', pairs: [['lecture', "ma'ruza"], ['colleague', 'hamkasb'], ['meeting', 'uchrashuv'], ['finish', 'tugamoq']] },
    { k: 'dictation', say: 'Do you work on Saturday?', a: ['Do you work on Saturday?'] },
  ],
  summary: [
    "Doimiy ish / o'qish haqida **Present Simple**: *I study, she works*.",
    "Savol: **When / What time + do / does + ega + fe'l**: *When does it start?*",
    "Yangi so'zlar: **lecture, colleague, meeting, finish**.",
  ],
  homework: "Kunlik jadvalingizni 4 ta gap bilan yozing: *I study… My lesson starts at… I work…*",
};

export default lesson;
