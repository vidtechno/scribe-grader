import type { Lesson } from '../../../types';

// Mini lesson (grammar): reporting verbs (suggest, promise, admit, deny, warn, refuse, offer). Builds on l3 and l4 (reported speech).
const lesson: Lesson = {
  id: 'u19-l13',
  title: 'Reporting verbs: suggest, promise, admit, deny',
  titleUz: "Reporting fe'llari: suggest, promise, admit, deny, warn",
  mini: true,
  kind: 'grammar',
  goal: "Gapni **say** o'rniga aniqroq fe'l bilan ko'chirasiz: **promise to do, offer to do, refuse to do, admit / deny / suggest doing, warn somebody (not) to do** (*He denied breaking the window. She warned us not to touch it.*).",
  slides: [
    {
      title: "Say o'rniga aniqroq fe'l",
      blocks: [
        { t: 'p', md: "Ko'chirma gapda har doim **said** deyish shart emas. Aniqroq fe'l gapning **maqsadini** ko'rsatadi (va'da, tan olish, ogohlantirish) va ko'pincha gapni **qisqartiradi**. Muhimi — fe'ldan keyin qanday shakl kelishini bilish." },
        { t: 'table', head: ["Fe'l", "Keyin nima keladi", "Misol"], speak: [2], rows: [
          ['promise, offer, refuse', 'to + fe\'l', "He promised to call me."],
          ['admit, deny, suggest', 'fe\'l + -ing', "She denied taking the money."],
          ['warn somebody', 'not to + fe\'l', "She warned us not to touch it."],
        ] },
        { t: 'tip', tone: 'info', md: "Bu fe'llardan keyin **that** bilan to'liq gap ham kelishi mumkin: *He admitted that he had made a mistake.* *She promised that she would come.* Lekin *to / -ing* shakli qisqaroq va tabiiyroq." },
        { t: 'check', ex: { k: 'choice', q: "He refused ___ me the answer.", opts: ["to give", "giving", "give", "that give"], a: 0, why: "**refuse** + **to + fe'l**." } },
      ],
    },
    {
      title: "Admit, deny, suggest — fe'l + -ing",
      blocks: [
        { t: 'p', md: "**admit** (tan olmoq) va **deny** (inkor qilmoq) dan keyin ish nomi (**-ing**) keladi. Agar ish ancha oldin bo'lgan bo'lsa, **that + Past Perfect** ham ishlatiladi." },
        { t: 'examples', items: [
          { en: "Jack admitted breaking the printer.", uz: "Jack printerni sindirganini tan oldi." },
          { en: "He admitted that he had broken it.", uz: "U uni sindirganini tan oldi.", note: "*that* + **had broken**: ma'no bir xil." },
          { en: "Lily denied taking my pen.", uz: "Lily qalamimni olganini inkor qildi." },
          { en: "Tom suggested going by train.", uz: "Tom poyezdda borishni taklif qildi.", note: "**suggest** + -ing." },
          { en: "Tom suggested that we should go by train.", uz: "Tom poyezdda borishimizni taklif qildi.", note: "Yoki **suggested that we should + fe'l**." },
        ] },
        { t: 'compare', good: { title: "To'g'ri", items: ["She suggested going by bus.", "She suggested that I should go by bus.", "He denied breaking the window."], }, bad: { title: "Xato", items: ["She suggested me to go by bus. (*suggest* dan keyin *somebody to* kelmaydi)", "She suggested to go by bus.", "He denied to break the window."] } },
        { t: 'tip', tone: 'warn', md: "O'zbekcha *menga ... ni taklif qildi* deb **suggested me to** deb yozmang. **suggest** dan keyin *-ing* yoki *that + gap* keladi." },
        { t: 'check', ex: { k: 'fill', q: "Karim denied ___ the money. (take)", a: ["taking"], why: "**deny** + **-ing**." } },
      ],
    },
    {
      title: "Promise, offer, warn",
      blocks: [
        { t: 'p', md: "**promise, offer, refuse** + **to + fe'l**. **warn** esa odamni talab qiladi: **warn + kim + (not) to + fe'l**." },
        { t: 'table', head: ["To'g'ridan-to'g'ri gap", "Reporting fe'li bilan"], speak: [1], rows: [
          ['"I will call you."', "He promised to call me."],
          ['"Shall I carry your bag?"', "She offered to carry my bag."],
          ['"No, I won\'t help you."', "He refused to help me."],
          ['"Be careful!"', "She warned me to be careful."],
          ['"Don\'t touch it!"', "She warned us not to touch it."],
        ] },
        { t: 'tip', tone: 'info', md: "Ko'chirma gapda **I / you** olmoshlari ma'noga qarab o'zgaradi: *I will call you* gapi: *He promised to call **me**.*" },
        { t: 'check', ex: { k: 'choice', q: "\"Don't open the door!\" → The guard ___ us the door.", opts: ["warned us not to open", "warned us to not opening", "warned not to open", "promised us not open"], a: 0, why: "**warned + kim + not to + fe'l**." } },
      ],
    },
    {
      title: "Dialog: Buzilgan printer",
      blocks: [
        { t: 'dialog', lines: [
          { who: 'Nilufar', en: "Have you spoken to Jack about the printer?", uz: "Printer haqida Jack bilan gaplashdingmi?" },
          { who: 'Tom', en: "Yes. He admitted breaking it yesterday, and he offered to pay for a new one.", uz: "Ha. U uni kecha sindirganini tan oldi va yangisi uchun to'lashni taklif qildi." },
          { who: 'Nilufar', en: "That's kind of him. What did the manager say?", uz: "Bu uning yaxshiligi. Menejer nima dedi?" },
          { who: 'Tom', en: "She suggested buying a cheaper one, and she warned us not to touch the old printer.", uz: "U arzonroq printer olishni taklif qildi va eski printerga tegmaslik haqida bizni ogohlantirdi." },
          { who: 'Nilufar', en: "Good idea. Did Jack say sorry?", uz: "Yaxshi fikr. Jack uzr so'radimi?" },
          { who: 'Tom', en: "Yes, and he promised to be more careful next time.", uz: "Ha, va keyingi safar ehtiyotkorroq bo'lishga va'da berdi." },
        ] },
        { t: 'check', ex: { k: 'choice', q: "What did Jack offer to do?", opts: ["Pay for a new printer", "Repair the old printer", "Buy a cheaper printer", "Leave the office"], a: 0, why: "*He offered to pay for a new one.*" } },
        { t: 'check', ex: { k: 'tf', q: "Jack denied breaking the printer.", a: false, why: "*He admitted breaking it.*" } },
      ],
    },
  ],
  words: [
    { en: 'hint', uz: "ishora qilmoq, shama qilmoq", ipa: 'hɪnt', pos: 'verb', ex: "She hinted that she wanted a lift home.", exUz: "U uyga olib borishlarini istayotganiga shama qildi." },
    { en: 'accuse', uz: "ayblamoq", ipa: 'əˈkjuːz', pos: 'verb', ex: "She accused him of taking her bag.", exUz: "U uni sumkasini olgan deb aybladi." },
    { en: 'admit', uz: "tan olmoq", ipa: 'ədˈmɪt', pos: 'verb', ex: 'She admitted making a mistake.', exUz: "U xato qilganini tan oldi." },
    { en: 'deny', uz: "inkor qilmoq", ipa: 'dɪˈnaɪ', pos: 'verb', ex: 'He denied telling anyone the secret.', exUz: "U sirni hech kimga aytganini inkor qildi." },
    { en: 'own up', uz: "aybini tan olmoq", ipa: 'əʊn ʌp', pos: 'phrasal verb', ex: "He owned up to breaking the vase.", exUz: "U vazani sindirganini tan oldi." },
    { en: 'grumble', uz: "noliy-noliy aytmoq, g'ulduramoq", ipa: 'ˈɡrʌm.bəl', pos: 'verb', ex: "He grumbled that the food was cold.", exUz: "U ovqat sovuq ekanidan noliy-noliy gapirdi." },
    { en: 'swear', uz: "qasam ichmoq", ipa: 'sweər', pos: 'verb', ex: "He swore that he would never be late again.", exUz: "U boshqa hech qachon kechikmaslikka qasam ichdi." },
  ],
  practice: [
    { k: 'match', pairs: [['suggest', 'taklif qilmoq'], ['promise', "va'da bermoq"], ['admit', 'tan olmoq'], ['deny', 'inkor qilmoq'], ['warn', 'ogohlantirmoq'], ['refuse', 'rad etmoq']] },
    { k: 'choice', q: "She ___ to help me with the project.", opts: ["promised", "admitted", "denied", "suggested"], a: 0, why: "**to + fe'l** dan oldin **promise**. Boshqalari -ing talab qiladi." },
    { k: 'choice', q: "He denied ___ the window.", opts: ["breaking", "to break", "break", "that break"], a: 0, why: "**deny** + **-ing**." },
    { k: 'fill', q: "Tom suggested ___ a taxi. (take)", a: ["taking"], why: "**suggest** + **-ing**." },
    { k: 'fill', q: "The guide warned us ___ to touch the paintings.", a: ["not"], why: "**warned + kim + not to + fe'l**." },
    { k: 'fill', q: "He admitted that he ___ my laptop without asking. (use)", a: ["had used", "used"], why: "Oldingi voqea uchun **had used** (oddiy *used* ham bo'ladi)." },
    { k: 'fix', wrong: "She suggested me to go by bus.", a: ["She suggested going by bus.", "She suggested that I go by bus.", "She suggested that I should go by bus.", "She suggested I go by bus.", "She suggested I should go by bus."], hint: "suggest dan keyin me to kelmaydi", why: "**suggest** + -ing yoki *that + gap*." },
    { k: 'fix', wrong: "He promised calling me.", a: ["He promised to call me."], why: "**promise** + **to + fe'l**." },
    { k: 'fix', wrong: "The teacher warned us don't be late.", a: ["The teacher warned us not to be late."], why: "**warned us not to + fe'l**." },
    { k: 'order', uz: "Karim pulni olganini inkor qildi.", words: ["Karim", "denied", "taking", "the", "money."], extra: ["to", "take"], why: "**denied** + -ing." },
    { k: 'translate', uz: "U menga yordam berishdan bosh tortdi.", a: ["He refused to help me.", "She refused to help me."], why: "**refused to help**." },
    { k: 'dictation', say: "She warned us not to touch the old printer.", a: ["She warned us not to touch the old printer."] },
    { k: 'speak', say: "He promised to be more careful next time.", uz: "U keyingi safar ehtiyotkorroq bo'lishga va'da berdi." },
  ],
  quiz: [
    { k: 'choice', q: "\"I'll pay for lunch,\" said Ben. → Ben ___ for lunch.", opts: ["offered to pay", "denied paying", "warned to pay", "admitted pay"], a: 0, why: "Yordam taklifi → **offered to pay**." },
    { k: 'choice', q: "The doctor warned him ___ too much sugar.", opts: ["not to eat", "don't eat", "to not eating", "eat not"], a: 0, why: "**warned + kim + not to eat**." },
    { k: 'choice', q: "He ___ stealing the bike, but the police didn't believe him.", opts: ["denied", "promised", "offered", "refused"], a: 0, why: "**-ing** dan oldin **denied** (inkor qildi)." },
    { k: 'fill', q: "Madina offered ___ my bag. (carry)", a: ["to carry"], why: "**offer** + **to + fe'l**." },
    { k: 'tf', q: "**She suggested me to leave early.** — to'g'ri gap.", a: false, why: "To'g'risi: *She suggested leaving early.*" },
    { k: 'fix', wrong: "He admitted to steal the money.", a: ["He admitted stealing the money.", "He admitted that he had stolen the money.", "He admitted that he stole the money."], why: "**admit** + -ing yoki *that + gap*." },
    { k: 'order', uz: "U menga faylni ochmaslikni aytib ogohlantirdi.", words: ["She", "warned", "me", "not", "to", "open", "the", "file."], extra: ["opening", "don't"], why: "**warned me not to open**." },
    { k: 'translate', uz: "Ular erta kelishga va'da berishdi.", a: ["They promised to come early.", "They promised to arrive early."], why: "**promised to + fe'l**." },
  ],
  summary: [
    "**promise, offer, refuse** + **to + fe'l**: *He promised to call me.*",
    "**admit, deny, suggest** + **-ing**: *She denied taking the money. He suggested going by train.*",
    "**warn** + kim + **(not) to + fe'l**: *She warned us not to touch it.* **suggested me to** — xato.",
    "Hammasidan keyin **that + gap** ham kelishi mumkin: *He admitted that he had lied.*",
  ],
  homework: "Do'stlaringiz yoki hamkasblaringizdan eshitgan 5 ta gapni **promise, offer, refuse, admit, deny, suggest, warn** bilan ko'chirib yozing. Har bir fe'ldan keyin to'g'ri shaklni (*to / -ing*) tekshiring.",
};

export default lesson;
