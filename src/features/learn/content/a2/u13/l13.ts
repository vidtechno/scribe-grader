import type { Lesson } from '../../../types';

// Mini lesson (grammar): unless, when, as soon as, before, after, until + Present Simple. Builds on l6 (first conditional).
const lesson: Lesson = {
  id: 'u13-l13',
  title: "Unless, as soon as, when",
  titleUz: "Unless, when va as soon as: shart gapning davomi",
  mini: true,
  kind: 'grammar',
  goal: "**unless** (*agar … bo'lmasa*) ni ishlatasiz va **when, as soon as, before, after, until** dan keyin kelajak uchun ham **Present Simple** qo'yasiz: *I'll call you when I arrive* — *when I will arrive* emas.",
  slides: [
    {
      title: "Unless = if ... not",
      blocks: [
        { t: 'p', md: "**Unless** — \"agar … bo'lmasa\". U **if … not** bilan bir xil ma'noda, lekin gap qisqaroq chiqadi. **Unless** dan keyin **darak shakl** keladi (*don't* kerak emas), natija qismida esa **will** turadi." },
        { t: 'table', head: ['if … not', 'unless'], speak: [0, 1], rows: [
          ["I'll stay home if it doesn't stop raining.", "I'll stay home unless it stops raining."],
          ["We'll be late if we don't hurry.", "We'll be late unless we hurry."],
          ["She won't come if you don't invite her.", "She won't come unless you invite her."],
        ] },
        { t: 'compare', good: { title: "To'g'ri", items: ["Unless you hurry, you'll miss the bus.", "I won't go unless you come with me."] }, bad: { title: "Xato", items: ["Unless you don't hurry, you'll miss the bus.", "I won't go unless you will come with me."] } },
        { t: 'check', ex: { k: 'choice', q: "*We'll miss the train ___ we hurry.*", opts: ['unless', 'if not', 'when', "unless don't"], a: 0, why: "**unless we hurry** = *if we don't hurry*." } },
      ],
    },
    {
      title: "When, as soon as, before, after, until",
      blocks: [
        { t: 'p', md: "**if** — \"bo'lishi ham, bo'lmasligi ham mumkin\". **when** va **as soon as** (*bilanoq*) — \"bo'lishi aniq, faqat vaqtini kutamiz\". Ularning hammasidan keyin, **if** kabi, kelajak uchun **Present Simple** qo'yiladi. **will** faqat boshqa qismda turadi:" },
        { t: 'table', head: ['Bog\'lovchi', "Ma'nosi", 'Misol'], speak: [2], rows: [
          ['when', 'qachon, … da', "I'll call you when I arrive."],
          ['as soon as', '… bilanoq', "I'll text you as soon as I get home."],
          ['before', '… dan oldin', "Wash your hands before you eat."],
          ['after', '… dan keyin', "We'll have lunch after we finish the lesson."],
          ['until', '… gacha', "Wait here until I come back."],
        ] },
        { t: 'compare', good: { title: "To'g'ri", items: ["I'll call you when I arrive.", "As soon as she comes, we'll start."], }, bad: { title: "Xato", items: ["I'll call you when I will arrive.", "As soon as she will come, we'll start."] } },
        { t: 'tip', tone: 'warn', md: "O'zbekchada \"kelganimda\" deymiz, shuning uchun inglizchada ham **will** qo'shgingiz kelishi mumkin. Esda tuting: **when / as soon as / before / after / until** dan keyin **will yo'q**." },
        { t: 'check', ex: { k: 'fill', q: "I'll call you as soon as I ___ there. (get)", a: ['get'], why: "**as soon as** dan keyin Present Simple: *I get*." } },
        { t: 'check', ex: { k: 'fix', wrong: "When I will see Laylo, I'll tell her.", a: ["When I see Laylo, I'll tell her.", "When I see Laylo, I will tell her."], why: "**when** dan keyin Present Simple: *I see*." } },
      ],
    },
    {
      title: "If, unless yoki when?",
      blocks: [
        { t: 'p', md: "Qaysi so'zni tanlashni ma'no hal qiladi:" },
        { t: 'examples', items: [
          { en: "If it rains, we'll stay in.", uz: "Yomg'ir yog'sa, uyda qolamiz.", note: "Yog'ishi ham, yog'maslig ham mumkin." },
          { en: "Unless it rains, we'll go to the lake.", uz: "Yomg'ir yog'masa, ko'lga boramiz.", note: "Yog'masa — boramiz." },
          { en: "When I finish work, I'll go to the lake.", uz: "Ishni tugatgach, ko'lga boraman.", note: "Tugatishim aniq." },
          { en: "I'll stay at home until the rain stops.", uz: "Yomg'ir to'xtamaguncha uyda qolaman." },
        ] },
        { t: 'dialog', lines: [
          { who: 'Sara', en: "Are you coming to the party tonight, Tom?", uz: "Tom, bugun kechqurun ziyofatga kelasanmi?" },
          { who: 'Tom', en: "I'll come after I finish my homework.", uz: "Uy vazifamni tugatgach kelaman." },
          { who: 'Sara', en: "OK. Text me as soon as you leave home.", uz: "Yaxshi. Uydan chiqishing bilanoq menga yoz." },
          { who: 'Tom', en: "I will. But I won't come unless my mother says yes!", uz: "Yozaman. Lekin onam ruxsat bermasa, kelmayman!" },
        ] },
        { t: 'check', ex: { k: 'choice', q: 'When does Tom come to the party?', opts: ['After he finishes his homework.', 'Before he finishes his homework.', 'Only if Sara calls him.', 'Until his mother comes home.'], a: 0, why: "Dialog: *I'll come after I finish my homework.*" } },
      ],
    },
  ],
  words: [
    { en: 'unless', uz: "agar … bo'lmasa", ipa: 'ənˈles', pos: 'conj', ex: "I won't go unless you come.", exUz: "Siz kelmasangiz, men bormayman." },
    { en: 'as soon as', uz: '… bilanoq', ipa: 'æz suːn æz', pos: 'conj', ex: "I'll call you as soon as I arrive.", exUz: "Yetib borishim bilanoq qo'ng'iroq qilaman." },
    { en: 'until', uz: '… gacha', ipa: 'ənˈtɪl', pos: 'conj', ex: 'Wait here until I come back.', exUz: "Men qaytib kelgunimcha shu yerda kuting." },
    { en: 'arrive', uz: 'yetib kelmoq', ipa: 'əˈraɪv', pos: 'verb', ex: 'The train arrives at six.', exUz: "Poyezd soat oltida yetib keladi." },
    { en: 'forget', uz: 'unutmoq', ipa: 'fəˈɡet', pos: 'verb', ex: "Don't forget your keys.", exUz: "Kalitlaringizni unutmang." },
    { en: 'finish', uz: 'tugatmoq', ipa: 'ˈfɪn.ɪʃ', pos: 'verb', ex: 'I will go out after I finish my work.', exUz: "Ishimni tugatgach, tashqariga chiqaman." },
  ],
  practice: [
    { k: 'match', pairs: [['unless', "agar … bo'lmasa"], ['as soon as', '… bilanoq'], ['until', '… gacha'], ['arrive', 'yetib kelmoq'], ['forget', 'unutmoq']] },
    { k: 'choice', q: "I'll call you when I ___ home.", opts: ['get', 'will get', 'am getting to', 'got'], a: 0, why: "**when** dan keyin Present Simple." },
    { k: 'choice', q: "*She won't pass the exam ___ she studies.*", opts: ['unless', 'when', 'while', 'because'], a: 0, why: "O'qimasa, o'tmaydi — **unless she studies**." },
    { k: 'fill', q: "We'll start the lesson as soon as the teacher ___. (arrive)", a: ['arrives'], uz: "O'qituvchi yetib kelishi bilanoq darsni boshlaymiz.", why: "*the teacher* = he/she → **arrives**." },
    { k: 'fill', q: "Wait here ___ I come back.", a: ['until'], uz: "Men qaytib kelgunimcha shu yerda kuting.", why: "\"Gacha\" — **until**." },
    { k: 'order', uz: "Uyga kelishim bilanoq senga yozaman.", words: ["I'll", 'text', 'you', 'as', 'soon', 'as', 'I', 'get', 'home'], extra: ['will', 'got'], alt: [['I', 'will', 'text', 'you', 'as', 'soon', 'as', 'I', 'get', 'home'], ['As', 'soon', 'as', 'I', 'get', 'home', "I'll", 'text', 'you'], ['As', 'soon', 'as', 'I', 'get', 'home', 'I', 'will', 'text', 'you']] },
    { k: 'fix', wrong: "I'll phone you when I will arrive.", a: ["I'll phone you when I arrive.", 'I will phone you when I arrive.'], why: "**when** dan keyin **will** yo'q." },
    { k: 'fix', wrong: "Unless you don't hurry, you'll be late.", a: ["Unless you hurry, you'll be late.", 'Unless you hurry, you will be late.'], why: "**unless** o'zi inkor: *Unless you hurry*." },
    { k: 'listen', say: "I won't go unless you come with me.", opts: ["I won't go unless you come with me.", "I won't go when you come with me.", "I didn't go unless you came with me.", "I won't go if you come with me."], a: 0 },
    { k: 'dictation', say: 'We will have lunch after we finish the lesson.', a: ['We will have lunch after we finish the lesson.', "We'll have lunch after we finish the lesson."], uz: "Darsni tugatgach, tushlik qilamiz." },
    { k: 'translate', uz: "Yomg'ir to'xtamaguncha uyda qolamiz.", a: ["We'll stay at home until the rain stops.", 'We will stay at home until the rain stops.', "We'll stay in until the rain stops.", 'We will stay in until the rain stops.', "We'll stay at home until it stops raining.", 'We will stay at home until it stops raining.'], why: "**until** dan keyin Present Simple." },
    { k: 'tf', q: "*I'll go to bed after I will finish my work.* — to'g'ri gap.", a: false, why: "**after** dan keyin Present Simple: *after I finish*." },
    { k: 'choice', q: "*He won't call you unless you ___ him.*", opts: ['ask', "don't ask", 'will ask', 'asked'], a: 0, why: "**unless** dan keyin inkor yo'q: *unless you ask*." },
  ],
  quiz: [
    { k: 'choice', q: "*I'll tell you the news ___ I see you.*", opts: ['when', 'when will', 'if will', 'unless not'], a: 0 },
    { k: 'fill', q: "Don't forget to lock the door before you ___. (leave)", a: ['leave'], why: "**before** dan keyin Present Simple." },
    { k: 'fill', q: "We won't go to the beach ___ it's sunny.", a: ['unless'], uz: "Quyoshli bo'lmasa, plyajga bormaymiz.", why: "Quyoshli bo'lmasa — **unless**." },
    { k: 'order', uz: "Ovqatlanishdan oldin qo'lingni yuv.", words: ['Wash', 'your', 'hands', 'before', 'you', 'eat'], extra: ['will', 'ate'] },
    { k: 'fix', wrong: 'As soon as she will arrive, we will start.', a: ['As soon as she arrives, we will start.', "As soon as she arrives, we'll start."], why: "**as soon as** dan keyin Present Simple." },
    { k: 'translate', uz: "Imtihonni tugatishim bilanoq senga qo'ng'iroq qilaman.", a: ["I'll call you as soon as I finish the exam.", 'I will call you as soon as I finish the exam.', "As soon as I finish the exam, I'll call you.", 'As soon as I finish the exam, I will call you.'], why: "**as soon as I finish**." },
    { k: 'tf', q: "*We'll be late unless we hurry* ma'nosi: *We'll be late if we don't hurry.*", a: true, why: "**unless** = **if … not**." },
    { k: 'listen', say: 'I will wait here until you come back.', opts: ['I will wait here until you come back.', 'I will wait here when you come back.', 'I waited here until you came back.', 'I will wait here unless you come back.'], a: 0 },
  ],
  summary: [
    "**unless** = *if … not*. Undan keyin darak shakl: *Unless you hurry, you'll be late.*",
    "**when, as soon as, before, after, until** dan keyin kelajak uchun ham **Present Simple**: *I'll call you when I arrive.*",
    "**if** — ehtimol; **when** — aniq bo'ladigan voqea.",
    "Yangi so'zlar: **unless, as soon as, until, arrive, forget, finish**.",
  ],
  homework: "5 ta gap yozing: bittasi *unless*, bittasi *when*, bittasi *as soon as*, bittasi *before*, bittasi *until* bilan (masalan: *I'll relax when I finish my work*).",
};

export default lesson;
