import type { Lesson } from '../../../types';

// Mini lesson (situation): taking part in a group discussion. Uses opinion phrases (l1), linking words (l12) and comparison (l2).
const lesson: Lesson = {
  id: 'u23-l9',
  title: 'Taking part in a group discussion',
  titleUz: "Guruh munozarasida qatnashish",
  mini: true,
  kind: 'situation',
  goal: "Guruh munozarasida muloyim qatnashasiz: **gapni boshlaysiz** (*Can I add something?*), **to'xtatasiz** (*Sorry to interrupt, but…*), **boshqalarni taklif qilasiz** (*What do you think, Sara?*) va **muhokamani yakunlaysiz** (*So, to sum up…*).",
  slides: [
    {
      title: "Dialog: shahar markazi va mashinalar",
      blocks: [
        { t: 'p', md: "Uch kishi guruh ishida shahar markazini mashinalardan ozod qilish haqida munozara qilyapti. Dialogni tinglang va ularning **gapni qanday boshlashi, to'xtatishi va boshqalarni taklif qilishiga** e'tibor bering." },
        { t: 'dialog', lines: [
          { who: 'Emma', en: "Let's start. The question is: should the city centre be closed to cars? Tom, what do you think?", uz: "Boshlaymiz. Savol: shahar markazi mashinalar uchun yopilsinmi? Tom, sen nima deb o'ylaysan?" },
          { who: 'Tom', en: "In my view, yes. There is too much traffic, and the air is dirty. Moreover, it is dangerous for children.", uz: "Mening fikrimcha, ha. Tirbandlik juda ko'p, havo ham iflos. Bundan tashqari, bolalar uchun xavfli." },
          { who: 'Sardor', en: "Sorry to interrupt, but can I add something? Many shops depend on drivers.", uz: "Gapingizni bo'lganim uchun uzr, lekin bir narsa qo'shsam bo'ladimi? Ko'p do'konlar haydovchilarga bog'liq." },
          { who: 'Tom', en: "That's a good point, Sardor. However, people can still come by bus or on foot.", uz: "Yaxshi fikr, Sardor. Biroq odamlar avtobusda yoki piyoda ham kela oladi." },
          { who: 'Emma', en: "Let's hear Sardor's full idea first. Sardor, please go on.", uz: "Avval Sardorning fikrini to'liq eshitaylik. Sardor, davom eting." },
          { who: 'Sardor', en: "Thank you. My concern is the old people. They cannot walk far.", uz: "Rahmat. Mening xavotirim — keksalar. Ular uzoq yura olmaydi." },
          { who: 'Emma', en: "That's true. So, to sum up: we agree the traffic is a problem, but we need a plan for shops and older people.", uz: "To'g'ri. Xulosa qilsak: tirbandlik muammo ekaniga rozimiz, lekin do'konlar va keksalar uchun reja kerak." },
        ] },
        { t: 'check', ex: { k: 'tf', q: "Emma asks Sardor to continue his idea.", a: true, why: "*Sardor, please go on.*" } },
        { t: 'check', ex: { k: 'choice', q: "Why does Sardor worry about old people?", opts: ['They cannot walk far.', 'They drive too fast.', 'They do not like shops.', 'They live in the centre.'], a: 0, why: "*They cannot walk far.*" } },
      ],
    },
    {
      title: "Foydali iboralar",
      blocks: [
        { t: 'table', head: ['Maqsad', 'Ibora'], speak: [1], rows: [
          ["Gapni boshlash", "Can I add something?"],
          ["Gapni boshlash", "If I could just say something here…"],
          ["Muloyim to'xtatish", "Sorry to interrupt, but…"],
          ["Gapni tugatish", "Can I just finish my point?"],
          ["Boshqani taklif qilish", "What do you think, Sara?"],
          ["Boshqani taklif qilish", "Would you like to say something?"],
          ["Qo'shilish", "That's a good point."],
          ["Mavzuga qaytish", "Going back to what Tom said…"],
          ["Yakunlash", "So, to sum up…"],
        ] },
        { t: 'tip', tone: 'good', md: "Munozarada **qo'pol** bo'lmaslik uchun gapni to'xtatishdan oldin uzr so'rang: *Sorry to interrupt, but…* Odatda gap tinglovchi bilan chiqadi: avval **qo'shiling**, keyin **fikringizni** aytib boring." },
        { t: 'compare',
          good: { title: "Muloyim", items: ["Sorry to interrupt, but I have a question.", "That's a good point. May I add something?", "What do you think, Sara?"] },
          bad: { title: "Qo'pol", items: ["Stop! Listen to me!", "You are wrong.", "Hey you, say something!"] } },
        { t: 'check', ex: { k: 'choice', q: "Boshqa kishining gapini muloyim to'xtatasiz:", opts: ["Sorry to interrupt, but…", "Be quiet, please.", "That's wrong.", "I don't care."], a: 0, why: "Muloyim: **Sorry to interrupt, but…**" } },
        { t: 'check', ex: { k: 'fill', q: "Can I just ___ my point?", a: ['finish'], why: "**Can I just finish my point?** — fikrimni tugatsam bo'ladimi." } },
      ],
    },
    {
      title: "Birovni tinglang, so'ng javob bering",
      blocks: [
        { t: 'p', md: "Yaxshi qatnashuvchi faqat gapirmaydi — **tinglaydi** va boshqalarning fikriga javob beradi. Foydali qolip: **qo'shilish + qarama-qarshilik + o'z fikringiz**." },
        { t: 'examples', items: [
          { en: "I see what you mean, but I think the plan is too expensive.", uz: "Nima demoqchi ekaningizni tushundim, lekin menimcha, reja juda qimmat.", note: "Avval tushunganingizni ko'rsating." },
          { en: "I agree with Tom about the air. However, I am not sure about the shops.", uz: "Havo haqida Tom bilan roziman. Biroq do'konlar haqida ishonchim komil emas.", note: "Qisman rozilik." },
          { en: "Could you give an example, Sardor?", uz: "Misol keltira olasizmi, Sardor?", note: "Savol berish ham qatnashish." },
          { en: "Sara, we haven't heard from you yet. What's your opinion?", uz: "Sara, sizdan hali eshitmadik. Fikringiz qanday?", note: "Jim turgan odamni taklif qilish." },
        ] },
        { t: 'tip', tone: 'info', md: "Agar nimanidir tushunmasangiz: *Sorry, could you say that again?* yoki *What do you mean by …?* Bu zaiflik emas — yaxshi muloqotning belgisi." },
        { t: 'check', ex: { k: 'order', uz: "Misol keltira olasizmi?", words: ['Could', 'you', 'give', 'an', 'example?'], extra: ['gives', 'a'], why: "Muloyim iltimos: **Could you…?**" } },
      ],
    },
  ],
  words: [
    { en: 'contribute', uz: "hissa qo'shmoq, qatnashmoq", ipa: 'kənˈtrɪb.juːt', pos: 'verb', ex: 'Everyone should contribute to the discussion.', exUz: "Hamma munozarada qatnashishi kerak." },
    { en: 'interrupt', uz: "gapini bo'lmoq", ipa: 'ˌɪn.təˈrʌpt', pos: 'verb', ex: 'Please do not interrupt me.', exUz: "Iltimos, gapimni bo'lmang." },
    { en: 'suggest', uz: 'taklif qilmoq', ipa: 'səˈdʒest', pos: 'verb', ex: 'I suggest that we vote now.', exUz: "Hozir ovoz berishni taklif qilaman." },
    { en: 'concern', uz: 'xavotir, tashvish', ipa: 'kənˈsɜːn', pos: 'noun', ex: 'My main concern is the cost.', exUz: "Mening asosiy xavotirim — narx." },
    { en: 'point', uz: 'fikr, dalil', ipa: 'pɔɪnt', pos: 'noun', ex: 'That is a good point.', exUz: "Bu yaxshi fikr." },
  ],
  practice: [
    { k: 'match', pairs: [['Can I add something?', "Qo'shsam bo'ladimi?"], ['Sorry to interrupt, but…', "Gapingizni bo'lganim uchun uzr, lekin…"], ["That's a good point.", 'Yaxshi fikr.'], ['So, to sum up…', 'Xulosa qilsak…'], ['What do you think?', "Siz nima deb o'ylaysiz?"]] },
    { k: 'listen', say: 'Sorry to interrupt, but can I add something?', opts: ['Sorry to interrupt, but can I add something?', 'Sorry to be late, but can I ask something?', 'Sorry to hear that, but I agree.', 'Please do not interrupt me.'], a: 0 },
    { k: 'choice', q: "Kimdir uzoq gapirdi, siz fikringizni qo'shmoqchisiz:", opts: ["Can I add something?", "Stop talking.", "I am the best.", "You are wrong."], a: 0, why: "Muloyim: **Can I add something?**" },
    { k: 'choice', q: "Sara jim o'tiribdi. Siz:", opts: ["Sara, what do you think?", "Sara, say something now!", "Sara, you don't know.", "Sara, be quiet."], a: 0, why: "Muloyim taklif: **What do you think, Sara?**" },
    { k: 'fill', q: "I see what you mean, ___ I think it is too expensive.", a: ['but'], uz: "Nima demoqchiligingizni tushundim, lekin menimcha, bu juda qimmat.", why: "Qarama-qarshilik: **but**." },
    { k: 'fill', q: "Going ___ to what Tom said, I agree with his idea.", a: ['back'], uz: "Tom aytgan gapga qaytsak, men uning g'oyasiga qo'shilaman.", why: "**Going back to…** — mavzuga qaytish." },
    { k: 'order', uz: "Fikrimni tugatsam bo'ladimi?", words: ['Can', 'I', 'just', 'finish', 'my', 'point?'], extra: ['ends', 'idea'], why: "**Can I just finish my point?**" },
    { k: 'fix', wrong: "Stop! You are speaking wrong!", a: ["Sorry to interrupt, but I don't think that is right.", "Sorry to interrupt, but I think that is wrong."], why: "Munozarada muloyim bo'ling: *Sorry to interrupt, but…*" },
    { k: 'translate', uz: "Xulosa qilsak, biz rozimiz.", a: ["So, to sum up, we agree.", "To sum up, we agree.", "So to sum up, we agree."], why: "Yakunlash: **to sum up**." },
    { k: 'dictation', say: 'What do you think, Sara?', a: ['What do you think, Sara?', 'What do you think Sara?'], uz: "Sara, nima deb o'ylaysan?" },
    { k: 'speak', say: "That's a good point, but I have one concern.", uz: "Bu yaxshi fikr, lekin bitta xavotirim bor." },
    { k: 'speak', say: 'Can I just finish my point?', uz: "Fikrimni tugatsam bo'ladimi?" },
  ],
  quiz: [
    { k: 'choice', q: "Munozarani yakunlaysiz:", opts: ["So, to sum up, we need more time.", "Now be quiet.", "I am going home.", "That is all wrong."], a: 0, why: "Yakun: **to sum up**." },
    { k: 'choice', q: "Do'stingiz gapirayotganda uning gapini bo'lish kerak. Qaysi variant muloyim?", opts: ["Sorry to interrupt, but I have a question.", "Wait! Listen!", "Shh!", "Hey!"], a: 0, why: "**Sorry to interrupt, but…**" },
    { k: 'fill', q: "Could you give an ___ , please?", a: ['example'], why: "**Could you give an example?**" },
    { k: 'fill', q: "Sara, we haven't ___ from you yet.", a: ['heard'], why: "**hear from** — kimdir fikrini eshitmoq: *haven't heard from you*." },
    { k: 'order', uz: "Bu yaxshi fikr, Tom.", words: ["That's", 'a', 'good', 'point,', 'Tom.'], extra: ['goods', 'an'], alt: [['That', 'is', 'a', 'good', 'point,', 'Tom.']], why: "**That's a good point.**" },
    { k: 'tf', q: "Munozarada jim odamdan *What do you think?* deb so'rash — qo'pollik.", a: false, why: "Bu — muloyim va yaxshi odat." },
    { k: 'translate', uz: "Men sizni tushundim, lekin rozi emasman.", a: ["I see what you mean, but I don't agree.", "I see what you mean, but I do not agree.", "I understand you, but I don't agree.", "I understand you, but I do not agree."], why: "Qo'shilish + qarama-qarshilik." },
  ],
  summary: [
    "Gapni boshlash: **Can I add something?** To'xtatish: **Sorry to interrupt, but…**. Tugatish: **Can I just finish my point?**",
    "Boshqalarni taklif qilish: **What do you think, Sara? Would you like to say something?**",
    "Javob qolipi: **I see what you mean, but…** va **That's a good point. However, …**",
    "Yakunlash: **So, to sum up…**. Yangi so'zlar: **contribute, interrupt, suggest, concern, point**.",
  ],
  homework: "Do'stlaringiz bilan (yoki yolg'iz o'zingiz) bitta mavzu bo'yicha 3 daqiqalik munozara qiling. Kamida 3 ta iboradan foydalaning: **Can I add something?**, **That's a good point**, **So, to sum up**.",
};

export default lesson;
