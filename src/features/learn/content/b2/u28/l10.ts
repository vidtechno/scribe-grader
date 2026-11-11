import type { Lesson } from '../../../types';

// Mini lesson (situation): disagreeing politely with a colleague's proposal: softening, partial agreement, alternatives, holding a position, cleft/inversion for emphasis.
const lesson: Lesson = {
  id: 'u28-l10',
  title: 'Disagreeing politely',
  titleUz: "Muloyim qarshi chiqish va o'z fikrida turish",
  mini: true,
  kind: 'situation',
  goal: "Hamkasb yoki do'stingizning taklifiga **ziddiyatsiz** qarshi chiqasiz: fikrni **yumshatasiz** (*I see what you mean, but…*), **qisman rozilik** bildirasiz, **muqobil** taklif qilasiz va o'z pozitsiyangizda **muloyim turib olasiz**. Kerakli joyda *What worries me is…* va *Not only would…* bilan urg'u berasiz.",
  slides: [
    {
      title: "Yumshatish: to'g'ridan-to'g'ri emas",
      blocks: [
        { t: 'p', md: "Ish joyida yoki do'stlar orasida *I disagree* yoki *No, that's wrong* tez-tez **qo'pol** eshitiladi. Ingliz tilida qarshi chiqish odatda 4 qadamdan iborat: **tinglaganingizni ko'rsating → qisman rozi bo'ling → qarshi fikrni yumshoq ayting → muqobil taklif qiling.**" },
        { t: 'table', head: ['Qadam', 'Ibora'], speak: [1], rows: [
          ['Tushunganingizni ko\'rsatish', "I see what you mean. / I understand where you're coming from."],
          ['Qisman rozilik', "You have a point there, but… / That's true up to a point."],
          ['Yumshoq qarshi chiqish', "I'm afraid I can't quite agree. / I'm not entirely convinced."],
          ['Muqobil taklif', "How about…? / What if we…? / Would it be an option to…?"],
          ["Pozitsiyada turish", "I understand, but I'd still prefer… / I'll stick with my view on this."],
        ] },
        { t: 'tip', tone: 'info', md: "**Yumshatuvchilar**: *I'm afraid, to be honest, a bit, not entirely, I'm not sure that…, perhaps*. *I think it's a bad idea* o'rniga *I'm not sure it's the best idea* deyish ancha muloyim, lekin ma'nosi o'zgarmaydi." },
        { t: 'check', ex: { k: 'choice', q: "Hamkasbingiz taklifi sizga yoqmadi. Qaysi javob eng muloyim?", opts: ["No, that's wrong.", "That's a stupid idea.", "I see what you mean, but I'm not sure it would work.", "I don't want to hear this."], a: 2, why: "**I see what you mean, but…** — avval tinglaganingizni ko'rsatadi, keyin yumshoq shubha bildiradi." } },
        { t: 'check', ex: { k: 'fill', q: "I see what you mean, ___ I'm not sure it would save time.", a: ['but', 'though', 'although', 'yet'], hint: "qarama-qarshilik bog'lovchisi", why: "**but / though / yet** — qisman rozilikdan keyin qarama-qarshi fikr." } },
      ],
    },
    {
      title: "Urg'u bilan, lekin muloyim",
      blocks: [
        { t: 'p', md: "Bahsda asosiy g'oyangizni ajratib ko'rsatish kerak bo'lsa, oldingi darslardagi **cleft** va **inversiya**dan foydalaning. Ular ohangni kuchaytiradi, lekin hurmatli qoladi, chunki gap *odam*ga emas, *muammoga* qaratiladi." },
        { t: 'examples', items: [
          { en: "What worries me is the cost, not the idea itself.", uz: "Meni tashvishlantirayotgani g'oyaning o'zi emas, narx.", note: "**wh-cleft**: *What + ega + fe'l + is…* — asosiy tashvishni ajratadi." },
          { en: "It's the timing that I'm not sure about.", uz: "Men shubhalanayotgan narsa — vaqt.", note: "**it-cleft**: shubhani aniq bir narsaga qaratadi." },
          { en: "Not only would it cost more, but it would also take longer.", uz: "U nafaqat qimmatroq turadi, balki ko'proq vaqt ham oladi.", note: "**Not only + would + ega**: inversiya, ikkita kamchilikni bir gapda beradi." },
          { en: "All I'm saying is that we should test it first.", uz: "Men faqat shuni aytyapmanki, avval sinab ko'raylik.", note: "**All I'm saying is…** — pozitsiyani yumshoq qilib bildiradi." },
        ] },
        { t: 'tip', tone: 'good', md: "**Pozitsiyada turish** — keskinlashmaslik degani. *I understand, but I'd still prefer to wait* yoki *Let's agree to differ* — ikkala tomon hurmatini saqlaydi. Rozi bo'lmaslik mumkin; muhimi, **tonni** yaxshi saqlash." },
        { t: 'check', ex: { k: 'fill', q: "___ worries me is the lack of time, not the plan itself.", a: ['What'], hint: "wh-cleft", why: "**What worries me is…** — wh-cleft: *What* + fe'l + *is*." } },
        { t: 'check', ex: { k: 'fill', q: "Not only ___ the plan expensive, but it is also risky.", a: ['is'], hint: "inversiya", why: "**Not only + is + ega**: gap boshida *not only* bo'lsa, yordamchi fe'l ega oldiga o'tadi." } },
      ],
    },
    {
      title: "Tipik xatolar (o'zbek tilidan)",
      blocks: [
        { t: 'p', md: "*Sizga qo'shilmayman*, *boshqa fikrdaman*, *nega bunday qilmaymiz?* — o'zbekchadan so'zma-so'z o'girilganda quyidagi xatolar chiqadi:" },
        { t: 'compare',
          good: { title: "To'g'ri", items: ["I don't agree with you.", "I have a different opinion.", "Why don't we meet earlier?", "I'm not sure I agree."] },
          bad: { title: 'Xato', items: ["I don't agree you.", "I have different opinion.", "Why not we meet earlier?", "I'm not sure to agree."] } },
        { t: 'tip', tone: 'warn', md: "O'zbekchada *sizga* (jo'nalish kelishigi) qo'shimcha bilan ifodalanadi, inglizchada esa **agree WITH** kerak. *Different opinion* oldida **a** unutilmasin (sanaladigan ot). *Why not + fe'l* (*Why not meet earlier?*) yoki *Why don't we + fe'l*, ikkalasini aralashtirmang. *Sure* dan keyin **to** emas, gap: *I'm not sure (that) I agree*." },
        { t: 'check', ex: { k: 'fix', wrong: "I'm afraid I don't agree you on this point.", a: ["I'm afraid I don't agree with you on this point.", "I am afraid I don't agree with you on this point."], why: "**agree with** + odam." } },
        { t: 'check', ex: { k: 'fix', wrong: "Why not we hold the meeting online?", a: ["Why don't we hold the meeting online?", "Why not hold the meeting online?"], why: "**Why don't we + fe'l** yoki **Why not + fe'l**." } },
        { t: 'check', ex: { k: 'fix', wrong: "I'm not sure to agree with that proposal.", a: ["I'm not sure I agree with that proposal.", "I'm not sure that I agree with that proposal.", "I am not sure I agree with that proposal.", "I am not sure that I agree with that proposal."], why: "**sure** dan keyin *to* + fe'l emas, **(that) + gap** keladi." } },
      ],
    },
    {
      title: "O'qing va tinglang",
      blocks: [
        { t: 'text', title: 'Learning to say no nicely', voice: 'emma', en: "I used to find it very hard to disagree with colleagues. I was afraid of sounding rude, so I usually stayed silent and then felt frustrated. Last month my manager suggested that we should cancel our weekly meeting. Instead of saying nothing, I tried a new approach. I began by saying, I see what you mean, and a shorter schedule would help everyone. Then I added, what worries me is that new colleagues might feel left out. Finally, I offered an alternative: how about a fifteen-minute meeting instead? My manager was hesitant at first, but she took my suggestion on board. We didn't agree on everything, yet we found some common ground. I learned that being tactful does not mean giving up your opinion. It simply means choosing your words carefully.", uz: "Men ilgari hamkasblarga qarshi chiqishni juda qiyin deb bilardim. Qo'pol ko'rinishdan qo'rqardim, shuning uchun ko'pincha jim turib, keyin g'ashim kelardi. O'tgan oy rahbarim haftalik yig'ilishimizni bekor qilishni taklif qildi. Jim turmasdan, yangi usulni sinab ko'rdim. Avval, nima demoqchi ekaningizni tushundim, qisqaroq jadval hammaga foyda beradi, dedim. Keyin, meni tashvishlantirayotgani yangi hamkasblar chetda qolishi mumkinligi, deb qo'shdim. Nihoyat, muqobil taklif qildim: o'rniga o'n besh daqiqalik yig'ilish bo'lsa-chi? Rahbarim avval ikkilandi, lekin taklifimni inobatga oldi. Hamma narsada kelishmadik, lekin umumiy til topdik. Shuni angladimki, so'zlarni ehtiyotkor tanlash fikringizdan voz kechish degani emas." },
        { t: 'check', ex: { k: 'tf', q: "The speaker stayed silent when her manager made the suggestion.", a: false, why: "*Instead of saying nothing, I tried a new approach.*" } },
        { t: 'check', ex: { k: 'choice', q: "What alternative did she offer?", opts: ["Cancel all meetings", "A fifteen-minute meeting", "A longer meeting on Fridays", "An email every week"], a: 1, why: "*How about a fifteen-minute meeting instead?*" } },
      ],
    },
    {
      title: "Dialog: Monday meeting",
      blocks: [
        { t: 'dialog', lines: [
          { who: 'Jack', en: "I've got an idea. Why don't we cancel the Monday meeting and send a written update instead?", uz: "Menda bir g'oya bor. Dushanba yig'ilishini bekor qilib, o'rniga yozma hisobot yuborsak-chi?" },
          { who: 'Nora', en: "I see what you mean, and it would save time. But I'm not sure it's the best idea.", uz: "Nima demoqchi ekaningni tushunaman, bu vaqtni tejaydi. Lekin bu eng yaxshi g'oya ekaniga ishonchim komil emas." },
          { who: 'Jack', en: "Really? Why not?", uz: "Rostdanmi? Nega?" },
          { who: 'Nora', en: "What worries me is that quick questions would get lost in emails. Not only would we lose the discussion, but new colleagues would feel left out.", uz: "Meni tashvishlantirayotgani — tezkor savollar xatlarda yo'qolib ketishi. Biz muhokamani yo'qotibgina qolmay, yangi hamkasblar chetda qolgandek his qilishadi." },
          { who: 'Jack', en: "That's a fair objection. But nobody enjoys a one-hour meeting.", uz: "Bu o'rinli e'tiroz. Lekin bir soatlik yig'ilishni hech kim yoqtirmaydi." },
          { who: 'Nora', en: "True, up to a point. How about keeping the meeting but limiting it to fifteen minutes, standing up?", uz: "Ma'lum darajada to'g'ri. Yig'ilishni saqlab, uni o'n besh daqiqa va tik turib o'tkazsak-chi?" },
          { who: 'Jack', en: "Hmm. I'm still a bit hesitant, but I could take that on board. Let's try it for a month.", uz: "Hmm. Hali ham biroz ikkilanyapman, lekin buni inobatga olsam bo'ladi. Bir oyga sinab ko'raylik." },
          { who: 'Nora', en: "Great. I think we've found some common ground.", uz: "Zo'r. Menimcha, umumiy til topdik." },
        ] },
        { t: 'check', ex: { k: 'choice', q: "What is Nora's main worry?", opts: ["The meeting is too expensive.", "Quick questions would get lost in emails.", "Jack is too busy.", "The meeting room is too small."], a: 1, why: "*What worries me is that quick questions would get lost in emails.*" } },
        { t: 'check', ex: { k: 'tf', q: "Jack refuses to consider Nora's alternative.", a: false, why: "*I could take that on board. Let's try it for a month.*" } },
      ],
    },
  ],
  words: [
    { en: 'tactful', uz: "xushmuomala, ehtiyotkor (gapirishda)", ipa: 'ˈtækt.fəl', pos: 'adj', ex: "It was tactful of her not to mention the mistake in public.", exUz: "Xatoni omma oldida tilga olmagani uning xushmuomalaligi edi." },
    { en: 'objection', uz: "e'tiroz", ipa: 'əbˈdʒek.ʃən', pos: 'noun', ex: "Does anyone have an objection to the new schedule?", exUz: "Yangi jadvalga e'tirozi bor odam bormi?" },
    { en: 'common ground', uz: "umumiy til, kelishuv nuqtasi", ipa: 'ˌkɒm.ən ˈɡraʊnd', pos: 'phrase', ex: "After an hour of talks, the two sides found some common ground.", exUz: "Bir soatlik muzokaradan keyin ikki tomon umumiy til topdi." },
    { en: 'take on board', uz: "inobatga olmoq, qabul qilmoq (maslahatni)", ipa: 'teɪk ɒn ˈbɔːd', pos: 'phrase', ex: "I'll take your comments on board when I rewrite the report.", exUz: "Hisobotni qayta yozayotganda izohlaringizni inobatga olaman." },
    { en: 'stand firm', uz: "pozitsiyada qat'iy turmoq", ipa: 'stænd ˈfɜːm', pos: 'phrase', ex: "She stood firm and refused to change the deadline.", exUz: "U qat'iy turib, muddatni o'zgartirishdan bosh tortdi." },
    { en: 'hesitant', uz: "ikkilanayotgan, tortinayotgan", ipa: 'ˈhez.ɪ.tənt', pos: 'adj', ex: "He was hesitant about accepting the new role.", exUz: "U yangi lavozimni qabul qilishda ikkilanardi." },
  ],
  practice: [
    { k: 'match', pairs: [['tactful', "xushmuomala"], ['objection', "e'tiroz"], ['common ground', "umumiy til"], ['take on board', "inobatga olmoq"], ['stand firm', "qat'iy turmoq"], ['hesitant', "ikkilanayotgan"]] },
    { k: 'choice', q: "Your friend suggests going camping in November. You don't like the idea. Which reply is the most tactful?", opts: ["That's a terrible plan.", "I'd rather not, honestly. It's freezing.", "I see what you mean, but I'm not sure November is the best time. How about October?", "You never have good ideas."], a: 2, why: "Tushunish + yumshoq shubha + **muqobil** — muloyim qarshi chiqishning 3 qadami." },
    { k: 'fill', q: "Afsuski, bu masalada sizga to'liq qo'shila olmayman → I'm afraid I can't quite ___ with you on that.", a: ['agree'], hint: "rozi bo'lmoq", why: "**agree with** — *sizga* uchun *with* kerak." },
    { k: 'order', uz: "Meni tashvishlantirayotgani narx.", words: ['What', 'worries', 'me', 'is', 'the', 'cost.'], extra: ['that', 'it'], why: "**What worries me is…** — wh-cleft." },
    { k: 'fix', wrong: "I don't agree you about the budget.", a: ["I don't agree with you about the budget.", "I do not agree with you about the budget."], why: "**agree with** + odam." },
    { k: 'tf', q: "*All I'm saying is that we should test it first.* — bu ibora pozitsiyani yumshoq bildiradi.", a: true, why: "**All I'm saying is…** talabni kichik qilib ko'rsatadi, shuning uchun muloyim eshitiladi." },
    { k: 'choice', q: "Which sentence uses inversion correctly?", opts: ["Not only it would cost more, but it would also take longer.", "Not only would it cost more, but it would also take longer.", "Not only would it costs more, but it would also take longer.", "Not would only it cost more, but it would also take longer."], a: 1, why: "**Not only + would + ega + fe'l**: yordamchi fe'l egadan oldin, fe'l esa V1 shaklida." },
    { k: 'listen', say: "I see what you mean, but I'm not entirely convinced.", opts: ["I see what you mean, but I'm not entirely convinced.", "I see what you mean, so I'm not entirely convinced.", "I saw what you mean, but I'm entirely convinced.", "I see what you mean, but I'm not entirely confused."], a: 0 },
    { k: 'translate', uz: "Nega o'rniga bir daqiqalik yig'ilish o'tkazmaymiz?", a: ["Why don't we have a short meeting instead?", "Why don't we hold a short meeting instead?", "Why don't we have a one-minute meeting instead?", "Why not have a short meeting instead?"], why: "Taklif: **Why don't we + fe'l?** yoki **Why not + fe'l?**." },
    { k: 'fix', wrong: "I have different opinion about this plan.", a: ["I have a different opinion about this plan.", "I have a different opinion about this plan"], why: "Sanaladigan ot oldida **a** kerak: *a different opinion*." },
    { k: 'choice', q: "A colleague gives good advice and you will use it. Which phrase fits?", opts: ["I'll take that on board.", "I'll take that on the board.", "I'll take that in board.", "I'll take on that board."], a: 0, why: "**take something on board** — barqaror ibora: maslahatni inobatga olmoq." },
    { k: 'dictation', say: "It's the timing that I'm not sure about, not the idea itself.", uz: "Men shubhalanayotgan narsa g'oya emas, vaqt." },
    { k: 'order', uz: "Tushunaman, lekin men baribir kutishni afzal ko'raman.", words: ['I', 'understand,', 'but', "I'd", 'still', 'prefer', 'to', 'wait.'], extra: ['am', 'for'], why: "**I'd still prefer to…** — pozitsiyada muloyim turib olish." },
    { k: 'speak', say: "I see what you mean, but what worries me is the cost." },
  ],
  quiz: [
    { k: 'choice', q: "Which is the **least** polite way to disagree?", opts: ["I'm afraid I can't quite agree.", "I'm not entirely convinced.", "You are completely wrong.", "I see it a little differently."], a: 2, why: "**You are completely wrong** — to'g'ridan-to'g'ri hujum, boshqalar yumshatilgan." },
    { k: 'fill', q: "The team ___ some common ground after a long discussion.", a: ['found', 'had found'], hint: "o'tgan zamon: topdi", why: "**find common ground** — umumiy til topmoq; o'tgan zamon *found*." },
    { k: 'fix', wrong: "I'm not sure to agree with this plan.", a: ["I'm not sure I agree with this plan.", "I'm not sure that I agree with this plan.", "I am not sure I agree with this plan.", "I am not sure that I agree with this plan."], why: "**sure** dan keyin gap keladi, *to* emas." },
    { k: 'tf', q: "*Standing firm* means you must be rude to the other person.", a: false, why: "**Stand firm** — pozitsiyani saqlash; ohang esa muloyim qolishi mumkin." },
    { k: 'order', uz: "Menimcha, muqobil: bir oyga sinab ko'ramiz.", words: ['How', 'about', 'trying', 'it', 'for', 'a', 'month?'], extra: ['to', 'try'], why: "**How about + -ing?** — muqobil taklif." },
    { k: 'listen', say: "That's a fair objection, and I'll take it on board.", opts: ["That's a fair objection, and I'll take it on board.", "That's a fair option, and I'll take it on board.", "That's a fair objection, and I'll take it off board.", "That's a fare objection, and I'll take it aboard."], a: 0 },
    { k: 'translate', uz: "Meni tashvishlantirayotgani — vaqt.", a: ["What worries me is the time.", "What worries me is the timing.", "What worries me is time.", "What worries me is the lack of time.", "It's the time that worries me.", "It's the timing that worries me."], why: "**What worries me is…** yoki *It's … that worries me*." },
    { k: 'choice', q: "You partly agree. Which phrase shows it?", opts: ["That's true up to a point, but…", "That's all wrong, and…", "I never agree, and…", "Nobody thinks so, but…"], a: 0, why: "**true up to a point** — qisman rozilik." },
  ],
  summary: [
    "Muloyim qarshi chiqish qadamlari: **tushunish** (*I see what you mean*) → **qisman rozilik** → **yumshoq qarshi fikr** (*I'm afraid I can't quite agree*) → **muqobil** (*How about…?*).",
    "Urg'u uchun: *What worries me is…*, *It's the timing that…*, *Not only would it…, but…*, *All I'm saying is…*",
    "Pozitsiyada turish: *I understand, but I'd still prefer…*, *Let's agree to differ.* Ton yumshoq, fikr o'zgarmaydi.",
    "Xatolar: *agree you* → *agree with you*; *different opinion* → *a different opinion*; *Why not we…?* → *Why don't we…?*; *sure to agree* → *sure I agree*.",
    "Yangi so'zlar: **tactful, objection, common ground, take on board, stand firm, hesitant**.",
  ],
  homework: "O'zingiz rozi bo'lmagan 3 ta taklifni o'ylab toping (ish, o'qish yoki oila). Har biri uchun 3 qadamli javob yozing: *I see what you mean, but…* + *What worries me is…* + *How about…?* Keyin birini ovoz chiqarib ayting va ohangingiz yumshoq bo'lganini tekshiring.",
};

export default lesson;
