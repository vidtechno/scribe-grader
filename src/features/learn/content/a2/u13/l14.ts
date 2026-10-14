import type { Lesson } from '../../../types';

// Mini lesson (skill): listening and speaking, making and answering an invitation. Recycles l7 phrases, l4 and l12 time expressions.
const lesson: Lesson = {
  id: 'u13-l14',
  title: "Listening and speaking: making and answering an invitation",
  titleUz: "Tinglash va gapirish: taklif qilish va javob berish",
  mini: true,
  kind: 'skill',
  goal: "Taklifni **tinglab tushunasiz**, o'zingiz **taklif qilasiz**, **qabul qilasiz** yoki **xushmuomalalik bilan rad etasiz** va vaqt hamda joyni kelishib olasiz: *Would you like to come over on Saturday? — I'd love to!*",
  slides: [
    {
      title: "Tinglang: tug'ilgan kunga taklif",
      blocks: [
        { t: 'p', md: "Dialogni tinglang (▶), keyin matnga qarang. Avval umumiy ma'noni tushuning: **kim taklif qiladi? qachon? qayerda? javob nima?**" },
        { t: 'dialog', lines: [
          { who: 'Malika', en: "Hi Sardor! I'm having a birthday party on Saturday. Would you like to come over?", uz: "Salom Sardor! Shanba kuni tug'ilgan kun ziyofati qilaman. Biznikiga kelmaysanmi?" },
          { who: 'Sardor', en: "I'd love to! What time does it start?", uz: "Xursand bo'lardim! Soat nechada boshlanadi?" },
          { who: 'Malika', en: "At six. We're going to have dinner and play some games.", uz: "Oltida. Kechki ovqat qilamiz va o'yin o'ynaymiz." },
          { who: 'Sardor', en: "Sounds great! Shall I bring something?", uz: "Zo'r bo'larkan! Biror narsa olib kelaymi?" },
          { who: 'Malika', en: "Just a cake, please. Can you make it by six?", uz: "Faqat tort, iltimos. Soat oltigacha ulgurasanmi?" },
          { who: 'Sardor', en: "Yes, I can. I'll text you when I leave home. See you on Saturday!", uz: "Ha, ulguraman. Uydan chiqqanimda senga yozaman. Shanba kuni ko'rishamiz!" },
        ] },
        { t: 'check', ex: { k: 'choice', q: 'What does Sardor bring to the party?', opts: ['A cake.', 'Some games.', 'Dinner.', 'Nothing.'], a: 0, why: "Dialog: *Just a cake, please.*" } },
        { t: 'check', ex: { k: 'listen', say: 'What time does the party start?', opts: ['What time does the party start?', 'What time is the party over?', 'Where does the party start?', 'Who is coming to the party?'], a: 0 } },
      ],
    },
    {
      title: "Tinglang: rad etish",
      blocks: [
        { t: 'dialog', lines: [
          { who: 'Jack', en: "Hi Nilufar! A few of us are going to hang out at the lake on Sunday. Would you like to join us?", uz: "Salom Nilufar! Yakshanba kuni bir necha kishi ko'l bo'yida vaqt o'tkazmoqchimiz. Qo'shilmaysanmi?" },
          { who: 'Nilufar', en: "Thanks for asking, Jack. I'd love to, but I'm afraid I can't. I'm visiting my grandparents.", uz: "So'raganing uchun rahmat, Jack. Xursand bo'lardim-u, afsuski, kela olmayman. Buvilarimnikiga boraman." },
          { who: 'Jack', en: "That's OK. How about Saturday? We can have lunch in town.", uz: "Hechqisi yo'q. Shanba-chi? Shaharda tushlik qilsak bo'ladi." },
          { who: 'Nilufar', en: "Saturday is fine! Let's meet outside the metro at one.", uz: "Shanba bo'ladi! Soat birda metro oldida uchrashaylik." },
          { who: 'Jack', en: "Perfect. Count me in for Saturday too. See you then!", uz: "Zo'r. Men ham shanbaga tayyorman. Ko'rishguncha!" },
        ] },
        { t: 'check', ex: { k: 'tf', q: "Nilufar can come to the lake on Sunday.", a: false, why: "Nilufar: *I'm afraid I can't. I'm visiting my grandparents.*" } },
        { t: 'check', ex: { k: 'choice', q: 'Where are they going to meet on Saturday?', opts: ['Outside the metro.', 'At the lake.', 'At Nilufar\'s house.', 'In town, at a cafe.'], a: 0, why: "Dialog: *Let's meet outside the metro at one.*" } },
      ],
    },
    {
      title: "Foydali iboralar",
      blocks: [
        { t: 'table', head: ['Vazifa', 'Ibora'], speak: [1], rows: [
          ['Taklif qilish', 'Would you like to come over on Saturday?'],
          ['Taklif qilish', 'Why don\'t we get together on Friday?'],
          ['Qabul qilish', "I'd love to! / Sounds great! / Count me in!"],
          ['Rad etish', "Thanks for asking, but I can't make it. I'm busy."],
          ['Vaqt / joy', 'What time shall we meet? / Where shall we meet?'],
          ['Tasdiqlash', "So, we're meeting at six outside the metro. I'll text you."],
        ] },
        { t: 'compare', good: { title: "To'g'ri", items: ["I'd love to, but I can't make it.", "Count me in!", "I'll text you when I arrive."] }, bad: { title: "Xato", items: ["I'd love, but I can't make.", "Count me in it!", "I'll text you when I will arrive."] } },
        { t: 'tip', tone: 'good', md: "**Rad etishning 4 qadami:** minnatdorchilik → uzr → sabab → boshqa vaqt taklifi. *Thanks for asking! I'm afraid I can't. I'm working. How about next week?*" },
        { t: 'check', ex: { k: 'fill', q: "Sorry, I can't ___ it on Friday. (kela olmayman)", a: ['make'], why: "**make it** — kelib ulgurmoq, kela olmoq." } },
      ],
    },
    {
      title: "Endi siz ayting",
      blocks: [
        { t: 'p', md: "Tinglagan va o'qigan iboralaringizni ishlatib, ovoz chiqarib ayting. Avval taklifni **eshiting**, keyin o'zingiz **takrorlang**:" },
        { t: 'check', ex: { k: 'dictation', say: 'Would you like to come over on Saturday?', a: ['Would you like to come over on Saturday?'], uz: "Shanba kuni biznikiga kelmaysanmi?" } },
        { t: 'tip', tone: 'info', md: "**Speaking vazifasi (2 daqiqa):** do'stingizni kelasi dam olish kuniga taklif qiling (nima, qachon, qayerda). Keyin o'zingiz uchun ikki xil javob ayting: avval **qabul qiling**, keyin **xushmuomala rad eting** va boshqa vaqt taklif qiling." },
        { t: 'check', ex: { k: 'order', uz: "Kelasi shanba biz bilan uchrashishni xohlaysizmi?", words: ['Would', 'you', 'like', 'to', 'get', 'together', 'next', 'Saturday?'], extra: ['going', 'in'] } },
      ],
    },
  ],
  words: [
    { en: 'come over', uz: 'mehmonga kelmoq', ipa: 'kʌm ˈəʊ.vər', pos: 'phrasal verb', ex: 'Would you like to come over on Saturday?', exUz: "Shanba kuni mehmonga kelmaysizmi?" },
    { en: 'make it', uz: 'kelib ulgurmoq, kela olmoq', ipa: 'meɪk ɪt', pos: 'phrase', ex: "I'm sorry, I can't make it on Friday.", exUz: "Kechirasiz, juma kuni kela olmayman." },
    { en: 'get together', uz: "yig'ilmoq, uchrashmoq", ipa: 'ɡet təˈɡeð.ər', pos: 'phrasal verb', ex: 'Let us get together next weekend.', exUz: "Kelasi dam olish kunlari uchrashaylik." },
    { en: 'count me in', uz: 'men ham borman', ipa: 'kaʊnt miː ɪn', pos: 'phrase', ex: 'A barbecue on Sunday? Count me in!', exUz: "Yakshanba kuni barbekyu? Men ham borman!" },
    { en: 'text', uz: 'SMS yozmoq, xabar yozmoq', ipa: 'tekst', pos: 'verb', ex: "I'll text you when I arrive.", exUz: "Yetib borganimda sizga xabar yozaman." },
  ],
  practice: [
    { k: 'listen', say: "I'd love to, but I can't make it on Saturday.", opts: ["I'd love to, but I can't make it on Saturday.", "I'd love to, and I can make it on Saturday.", "I'd love to, but I can't make it on Sunday.", "I don't want to make it on Saturday."], a: 0 },
    { k: 'choice', q: 'Malika: *Would you like to come over on Saturday?* Qaysi javob qabul qilishdir?', opts: ["I'd love to! What time?", "I'm afraid I can't.", 'Maybe another time.', 'I come over Saturday.'], a: 0, why: "Qabul qilish: **I'd love to!**" },
    { k: 'choice', q: "Do'stingiz kelasi hafta tadbirga taklif qildi, lekin siz bandsiz. Eng yaxshi javob qaysi?", opts: ["Thanks for asking, but I'm afraid I can't make it. How about next week?", 'No.', "I don't want to.", 'I make it next week.'], a: 0, why: "Minnatdorchilik, sabab va boshqa vaqt taklifi — xushmuomala rad etish." },
    { k: 'match', pairs: [['come over', 'mehmonga kelmoq'], ['make it', 'kelib ulgurmoq'], ['get together', "yig'ilmoq"], ['count me in', 'men ham borman'], ['text', 'xabar yozmoq']] },
    { k: 'order', uz: "Soat nechada uchrashamiz?", words: ['What', 'time', 'shall', 'we', 'meet?'], extra: ['will', 'do'] },
    { k: 'fill', q: "Count me ___! I love barbecues.", a: ['in'], uz: "Men ham borman! Barbekyuni yaxshi ko'raman.", why: "Ibora: **count me in**." },
    { k: 'dictation', say: "I'll text you when I leave home.", a: ["I'll text you when I leave home.", 'I will text you when I leave home.'] },
    { k: 'fix', wrong: "I'd love, but I can't make it.", a: ["I'd love to, but I can't make it."], why: "**I'd love to** — oxirida **to** kerak." },
    { k: 'translate', uz: "Shanba kuni biznikiga kelmaysizmi?", a: ['Would you like to come over on Saturday?', 'Would you like to come over on Saturday', 'Do you want to come over on Saturday?'], why: "**Would you like to come over…?**" },
    { k: 'tf', q: "*Count me in!* — \"Men bormayman\" degani.", a: false, why: "**Count me in!** — \"Men ham borman!\"" },
    { k: 'speak', say: 'Would you like to come over on Saturday?', uz: "Shanba kuni biznikiga kelmaysizmi?" },
    { k: 'speak', say: "I'd love to, but I'm afraid I can't make it.", uz: "Xursand bo'lardim-u, afsuski kela olmayman." },
    { k: 'speak', say: "Let's meet outside the metro at six. I'll text you.", uz: "Soat oltida metro oldida uchrashaylik. Sizga yozaman." },
  ],
  quiz: [
    { k: 'listen', say: "Why don't we get together on Friday?", opts: ["Why don't we get together on Friday?", "Why don't we go together on Friday?", "Why didn't we get together on Friday?", "Where shall we get together on Friday?"], a: 0 },
    { k: 'choice', q: 'Which is a polite way to say no?', opts: ["I'd love to, but I'm busy. Maybe another time?", 'No, thanks.', "I don't like parties.", 'Maybe, maybe not.'], a: 0, why: "Sabab va boshqa vaqt bilan." },
    { k: 'fill', q: "Thanks for asking, but I can't ___ it on Sunday.", a: ['make'], why: "**make it**." },
    { k: 'order', uz: "Uydan chiqqanimda sizga yozaman.", words: ["I'll", 'text', 'you', 'when', 'I', 'leave', 'home'], extra: ['will', 'left'], alt: [['I', 'will', 'text', 'you', 'when', 'I', 'leave', 'home'], ['When', 'I', 'leave', 'home', "I'll", 'text', 'you']] },
    { k: 'fix', wrong: "I'll text you when I will arrive.", a: ["I'll text you when I arrive.", 'I will text you when I arrive.'], why: "**when** dan keyin Present Simple." },
    { k: 'translate', uz: "Men ham borman! Soat nechada boshlanadi?", a: ['Count me in! What time does it start?', 'Count me in. What time does it start?', "I'm in! What time does it start?"], why: "**Count me in!** + savol." },
    { k: 'tf', q: "Nilufar yakshanba kuni ko'lga boradi.", a: false, why: "U yakshanba kuni buvilarinikiga boradi." },
    { k: 'choice', q: 'Sardor: *Shall I bring something?* Malika\'s best answer:', opts: ['Just a cake, please.', 'I am going to a cake.', 'Yes, I shall.', 'No, I will bring.'], a: 0 },
  ],
  summary: [
    "Taklif: **Would you like to come over…? / Why don't we get together…?**",
    "Qabul: **I'd love to! / Sounds great! / Count me in!** Rad etish: **Thanks for asking, but I can't make it. How about…?**",
    "Vaqt va joy: **What time shall we meet? Where shall we meet?** Tasdiq: **I'll text you when I leave.**",
    "Yangi iboralar: **come over, make it, get together, count me in, text**.",
  ],
  homework: "Do'stingizga ovozli xabar yuboring: kelasi dam olish kuni uchun taklif qiling (nima, qachon, qayerda). Keyin shu xabarga qabul va rad etish javoblarini ovoz chiqarib ayting.",
};

export default lesson;
