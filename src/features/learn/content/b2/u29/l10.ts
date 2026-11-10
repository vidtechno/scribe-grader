import type { Lesson } from '../../../types';

// Mini lesson (situation): a community meeting about a local environmental problem. Comparatives (l1), proposals, priorities, agreeing a plan.
const lesson: Lesson = {
  id: 'u29-l10',
  title: 'Discussing a solution to a problem',
  titleUz: 'Muammoning yechimini muhokama qilish: tavsiya va ustuvorlik',
  mini: true,
  kind: 'situation',
  goal: "Mahalla yig'ilishida **taklif berasiz** (*I'd like to propose… / One option would be to…*), variantlarni **taqqoslaysiz** (*far cheaper than, much more effective than*), **ustuvorlikni** belgilaysiz (*The most important thing is…*) va umumiy rejaga kelishasiz.",
  slides: [
    {
      title: "Muammo va taklif",
      blocks: [
        { t: 'p', md: "Faraz qiling, mahallangiz bog'ida **axlat** (*litter*) ko'payib ketgan yoki maktab oldida **tirbandlik** bor. Yig'ilishda siz muammoni nomlaysiz, **taklif** berasiz va boshqalarning fikrini so'raysiz. Ishchi iboralar:" },
        { t: 'table', head: ['Maqsad', 'Ibora'], speak: [1], rows: [
          ['Muammoni nomlash', "The main problem is that there is too much litter in the park."],
          ['Taklif', "I'd like to propose a new recycling scheme."],
          ['Variant', "One option would be to put more bins near the entrance."],
          ['Yumshoq taklif', "Why don't we organise a clean-up day?"],
          ["Fikr so'rash", "How do the rest of you feel about that?"],
        ] },
        { t: 'tip', tone: 'info', md: "**suggest / propose** dan keyin **-ing** yoki **that + ega + to'siz fe'l** keladi: *I suggest putting up signs* / *I suggest that we put up signs*. **suggest to put** — xato." },
        { t: 'check', ex: { k: 'choice', q: "Qaysi gap to'g'ri?", opts: ["I suggest that we ban cars near the school.", "I suggest to ban cars near the school.", "I suggest we to ban cars near the school.", "I suggest banning of cars near the school."], a: 0, why: "**suggest that we + to'siz fe'l** (yoki *suggest banning*). *suggest to* bo'lmaydi." } },
      ],
    },
    {
      title: "Variantlarni taqqoslash",
      blocks: [
        { t: 'p', md: "Yechimlarni baholaganda taqqoslash kerak. B2 da faqat *more … than* yetmaydi; **daraja** va **ketma-ketlikni** ham aytasiz:" },
        { t: 'table', head: ['Shakl', 'Misol'], speak: [1], rows: [
          ['far / much / a lot + comparative', "Fines would be far more effective than signs."],
          ['slightly / a bit + comparative', "Extra bins are slightly cheaper than a new scheme."],
          ['not as … as', "Signs are not as effective as regular patrols."],
          ['the + comparative … the + comparative', "The more bins we put up, the less litter there will be."],
          ['less … than', "A clean-up day is less expensive than hiring a company."],
        ] },
        { t: 'tip', tone: 'warn', md: "Qisqa sifatlarga **-er** (*cheaper*), uzunlariga **more** (*more effective*). Ikkalasini aralashtirib bo'lmaydi: *more cheaper* — xato. Kuchaytirish uchun **very** emas, **far / much / a lot** ishlatiladi: *far cheaper* (*very cheaper* — xato)." },
        { t: 'check', ex: { k: 'fill', q: "The more people recycle, ___ rubbish goes to landfill.", a: ['the less'], uz: "Odamlar qancha ko'p qayta ishlasa, poligonga shuncha kam chiqindi tushadi.", why: "**the more … the less …** — ikkala qismda ham *the*." } },
        { t: 'check', ex: { k: 'choice', q: "A new car park would be ___ more expensive than extra bus stops.", opts: ['far', 'very', 'so', 'too'], a: 0, why: "Comparative oldida **far / much / a lot** ishlatiladi, *very* emas." } },
      ],
    },
    {
      title: "Ustuvorlik va kelishuv",
      blocks: [
        { t: 'table', head: ['Maqsad', 'Ibora'], speak: [1], rows: [
          ['Ustuvorlik', "The most important thing is to act quickly."],
          ['Ustuvorlik', "First and foremost, we need a plan that people will actually follow."],
          ['Ustuvorlik', "Our top priority should be the area near the school."],
          ['Qo\'llab-quvvatlash', "I'm in favour of that. It makes sense."],
          ['Shubha bildirish', "I see your point, but I'm not sure it would be enough."],
          ['Kelishish', "Shall we agree to try that for three months?"],
        ] },
        { t: 'examples', items: [
          { en: "The most important thing is to make it easy for people to do the right thing.", uz: "Eng muhimi — odamlar uchun to'g'ri ish qilishni oson qilish.", note: "**The most important thing is to + fe'l** — ustuvorlik." },
          { en: "Let's start with the cheapest option and see what happens.", uz: "Eng arzon variantdan boshlaylik va nima bo'lishini ko'raylik.", note: "**Let's** — reja taklifi; superlative (*the cheapest*)." },
        ] },
        { t: 'tip', tone: 'good', md: "Rozi bo'lmasangiz ham muloyim bo'ling: avval **I see your point, but…**, keyin sababni ayting. *You are wrong* kabi to'g'ridan-to'g'ri gap yig'ilishda qo'pol eshitiladi." },
        { t: 'check', ex: { k: 'choice', q: "Which phrase shows priority?", opts: ["Our top priority should be the school area.", "Shall we agree?", "I see your point, but…", "Why don't we organise a clean-up day?"], a: 0, why: "**top priority** — ustuvorlikni bildiradi." } },
      ],
    },
    {
      title: "Tipik xatolar (o'zbek tilidan)",
      blocks: [
        { t: 'p', md: "O'zbek tilida *ancha arzonroq*, *taklif qilaman + fe'l* kabi qurilmalar so'zma-so'z ko'chirilganda quyidagi xatolar chiqadi:" },
        { t: 'compare',
          good: { title: "To'g'ri", items: ["Fines are far cheaper than patrols.", "I suggest putting up more signs.", "The most important thing is to start now.", "It is more effective than I expected."] },
          bad: { title: 'Xato', items: ["Fines are more cheaper than patrols.", "I suggest to put up more signs.", "The most important is to start now.", "It is more effective that I expected."] } },
        { t: 'check', ex: { k: 'fix', wrong: "Bins are more cheaper than cameras.", a: ["Bins are cheaper than cameras.", "Bins are far cheaper than cameras.", "Bins are much cheaper than cameras."], why: "Bitta taqqoslash belgisi yetadi: **cheaper** (*more cheaper* emas)." } },
        { t: 'check', ex: { k: 'fix', wrong: "I suggest to organise a clean-up day.", a: ["I suggest organising a clean-up day.", "I suggest that we organise a clean-up day.", "I suggest we organise a clean-up day."], why: "**suggest** + -ing yoki *that we + to'siz fe'l*." } },
        { t: 'check', ex: { k: 'fix', wrong: "The most important is to reduce the traffic.", a: ["The most important thing is to reduce the traffic."], why: "Superlative ot bilan keladi: **the most important thing**." } },
        { t: 'check', ex: { k: 'fix', wrong: "The new scheme is more effective that the old one.", a: ["The new scheme is more effective than the old one."], why: "Taqqoslashda **than**, *that* emas." } },
      ],
    },
    {
      title: "Dialog: mahalla yig'ilishida",
      blocks: [
        { t: 'dialog', lines: [
          { who: 'Aziza', en: "Thank you all for coming. As you know, litter in Riverside Park has become a serious problem. Jack, you had a proposal?", uz: "Hammangizga kelganingiz uchun rahmat. Bilasizlar, Riverside bog'ida axlat jiddiy muammoga aylandi. Jek, sizda taklif bor edi?" },
          { who: 'Jack', en: "Yes. I'd like to propose that we put twice as many bins near the entrance. The more bins there are, the less litter people will leave.", uz: "Ha. Kirish yaqiniga ikki barobar ko'p axlat qutisi qo'yishni taklif qilaman. Qutilar qancha ko'p bo'lsa, odamlar shuncha kam axlat tashlab ketadi." },
          { who: 'Aziza', en: "That's a sensible idea, and it's far cheaper than hiring extra cleaners. But will it be enough?", uz: "Bu oqilona g'oya, qo'shimcha tozalovchilar yollashdan ancha arzon. Lekin yetarli bo'ladimi?" },
          { who: 'Jack', en: "Probably not on its own. I'd add a monthly clean-up day. It's not as expensive as a new scheme, and it raises awareness.", uz: "Ehtimol, yolg'iz o'zi yetmaydi. Oyiga bir marta tozalash kunini qo'shardim. U yangi dastur kabi qimmat emas va odamlarning xabardorligini oshiradi." },
          { who: 'Aziza', en: "I agree. The most important thing is to start soon. Shall we try both for three months?", uz: "Roziman. Eng muhimi — tezroq boshlash. Ikkalasini uch oyga sinab ko'ramizmi?" },
          { who: 'Jack', en: "Yes, let's do that. First and foremost, we should ask for volunteers.", uz: "Ha, shunday qilaylik. Avvalo, ko'ngillilardan so'rashimiz kerak." },
        ] },
        { t: 'check', ex: { k: 'tf', q: 'Jack thinks extra bins are more expensive than hiring cleaners.', a: false, why: "Aziza: *far cheaper than hiring extra cleaners.*" } },
        { t: 'check', ex: { k: 'choice', q: "What do they agree to do?", opts: ["Try more bins and a clean-up day for three months", "Close the park", "Hire a company at once", "Wait until next year"], a: 0, why: "*Shall we try both for three months? — Yes, let's do that.*" } },
      ],
    },
  ],
  words: [
    { en: 'litter', uz: "axlat (ko'chada tashlab ketilgan)", ipa: 'ˈlɪtə', pos: 'noun', ex: 'Volunteers collected litter from the riverbank.', exUz: "Ko'ngillilar daryo bo'yidagi axlatni yig'ishtirdi." },
    { en: 'congestion', uz: "tirbandlik, gavjumlik", ipa: 'kənˈdʒestʃən', pos: 'noun', ex: 'Traffic congestion is worst outside the school.', exUz: "Tirbandlik maktab oldida eng og'ir." },
    { en: 'proposal', uz: "taklif, loyiha", ipa: 'prəˈpəʊzl', pos: 'noun', ex: 'The council will vote on the proposal next week.', exUz: "Kengash taklif bo'yicha kelasi hafta ovoz beradi." },
    { en: 'enforce', uz: "(qoida, qonunni) amalda qo'llamoq", ipa: 'ɪnˈfɔːs', pos: 'verb', ex: 'The rules are hard to enforce without more staff.', exUz: "Xodimlar ko'proq bo'lmasa, qoidalarni qo'llash qiyin." },
    { en: 'initiative', uz: "tashabbus", ipa: 'ɪˈnɪʃətɪv', pos: 'noun', ex: 'It was a local initiative to plant trees.', exUz: "Bu daraxt o'tkazish bo'yicha mahalliy tashabbus edi." },
    { en: 'landfill', uz: "chiqindi poligoni", ipa: 'ˈlændfɪl', pos: 'noun', ex: 'Less rubbish now goes to landfill.', exUz: "Hozir poligonga chiqindi kamroq tushadi." },
  ],
  practice: [
    { k: 'match', pairs: [['litter', 'ko\'chaga tashlangan axlat'], ['congestion', 'tirbandlik'], ['proposal', 'taklif'], ['enforce', "qoidani amalda qo'llamoq"], ['initiative', 'tashabbus']] },
    { k: 'choice', q: "Fines would be ___ more effective than signs.", opts: ['far', 'very', 'so', 'too'], a: 0, why: "Comparative oldida **far / much / a lot**; *very* bo'lmaydi." },
    { k: 'fill', q: "The ___ bins we install, the less litter we will see.", a: ['more'], uz: "Qancha ko'p quti o'rnatsak, shuncha kam axlat ko'ramiz.", why: "**The more … the less …**." },
    { k: 'choice', q: "Which sentence is correct?", opts: ["I suggest that we start with the cheapest option.", "I suggest to start with the cheapest option.", "I suggest us to start with the cheapest option.", "I suggest starting of the cheapest option."], a: 0, why: "**suggest that we + to'siz fe'l**." },
    { k: 'listen', say: 'The most important thing is to start soon.', opts: ['The most important thing is to start soon.', 'The most important is to start soon.', 'The more important thing is to start soon.', 'Most important thing is starting soon.'], a: 0 },
    { k: 'fill', q: "Rules are only useful if someone is willing to ___ them.", a: ['enforce', 'apply'], hint: "qoidani amalda qo'llamoq", why: "**enforce a rule** — qoidani qo'llash, bajartirish." },
    { k: 'order', uz: "Jarimalar patrullardan ancha arzon.", words: ['Fines', 'are', 'far', 'cheaper', 'than', 'patrols.'], extra: ['more', 'that'], why: "**far cheaper than**." },
    { k: 'order', uz: "Eng muhimi — tezroq boshlash.", words: ['The', 'most', 'important', 'thing', 'is', 'to', 'start', 'soon.'], extra: ['are', 'starting'], why: "**The most important thing is to + fe'l**." },
    { k: 'fix', wrong: "Cycling is more cheaper than driving.", a: ["Cycling is cheaper than driving.", "Cycling is much cheaper than driving.", "Cycling is far cheaper than driving."], why: "**cheaper** — qisqa sifat, *more* kerak emas." },
    { k: 'fix', wrong: "I propose to ban cars outside the school.", a: ["I propose banning cars outside the school.", "I propose that we ban cars outside the school.", "I propose we ban cars outside the school."], why: "**propose** + -ing yoki *that we + to'siz fe'l*." },
    { k: 'translate', uz: "Bu yechim boshqasidan ancha arzonroq.", a: ["This solution is far cheaper than the other one.", "This solution is much cheaper than the other one.", "This solution is a lot cheaper than the other one.", "This solution is far cheaper than the other.", "This solution is much cheaper than the other."], why: "**far / much + comparative + than**." },
    { k: 'translate', uz: "Avvalo, ko'ngillilarni topishimiz kerak.", a: ["First and foremost, we need to find volunteers.", "First and foremost, we should find volunteers.", "First and foremost, we must find volunteers.", "First and foremost, we need volunteers."], why: "**First and foremost** — ustuvorlik belgisi." },
    { k: 'tf', q: "*The more cars there are, the worse the congestion gets.* — Gap to'g'ri.", a: true, why: "**the more … the worse …** — ikkala qismda ham *the* + comparative." },
    { k: 'dictation', say: 'Shall we try it for three months?', a: ['Shall we try it for three months?'], uz: "Buni uch oyga sinab ko'ramizmi?" },
    { k: 'speak', say: "I'd like to propose a monthly clean-up day.", uz: "Oyiga bir marta tozalash kunini taklif qilaman." },
  ],
  quiz: [
    { k: 'choice', q: "A clean-up day is ___ expensive than hiring a company.", opts: ['much less', 'much fewer', 'more less', 'very less'], a: 0, why: "**less** sanalmaydigan/sifat bilan; **much less … than**." },
    { k: 'choice', q: "Qaysi gap to'g'ri?", opts: ["The more we recycle, the better.", "The more we recycle, better.", "More we recycle, the better.", "The more we recycle, the more better."], a: 0, why: "**The + comparative, the + comparative**; *more better* xato." },
    { k: 'choice', q: "The council has approved the ___ to ban parking near the school.", opts: ['proposal', 'litter', 'landfill', 'dose'], a: 0, why: "Kengash tasdiqlaydigan narsa — **proposal** (taklif)." },
    { k: 'fill', q: "Traffic ___ makes the morning journey much longer.", a: ['congestion'], hint: 'tirbandlik', why: "**traffic congestion** — barqaror birikma." },
    { k: 'fill', q: "I suggest ___ a meeting next week.", a: ['holding', 'having', 'organising', 'organizing', 'arranging', 'calling'], uz: "Kelasi hafta yig'ilish o'tkazishni taklif qilaman.", why: "**suggest** dan keyin -ing shakli." },
    { k: 'fix', wrong: "This plan is more effective that the old one.", a: ["This plan is more effective than the old one."], why: "Taqqoslashda **than**." },
    { k: 'order', uz: "Bizning birinchi vazifamiz — bog'ni tozalash.", words: ['Our', 'top', 'priority', 'should', 'be', 'cleaning', 'the', 'park.'], extra: ['to', 'cleaned'], why: "**Our top priority should be + -ing**." },
    { k: 'listen', say: 'I see your point, but I am not sure it would be enough.', opts: ['I see your point, but I am not sure it would be enough.', 'I see your point, and I am sure it would be enough.', 'I see your point, but it is not enough sure.', 'I saw your point, but I am not sure it will enough.'], a: 0 },
    { k: 'tf', q: "*Very cheaper* — taqqoslashni kuchaytirishning to'g'ri usuli.", a: false, why: "Comparative oldida **far / much / a lot** ishlatiladi: *far cheaper*." },
  ],
  summary: [
    "Taklif: **I'd like to propose… / One option would be to… / Why don't we…?**; **suggest / propose** + -ing yoki *that we + to'siz fe'l*.",
    "Taqqoslash: **far / much / slightly + comparative + than**, **not as … as**, **the more …, the less …**; *more cheaper* va *very cheaper* xato.",
    "Ustuvorlik: **The most important thing is to…, First and foremost…, Our top priority should be…**; kelishish: **Shall we agree…? / Let's do that.**",
    "Xatolar: *suggest to put* → *suggest putting*; *more effective that* → *more effective than*; *the most important is* → *the most important thing is*.",
    "Yangi so'zlar: **litter, congestion, proposal, enforce, initiative, landfill**.",
  ],
  homework: "Mahallangizdagi haqiqiy muammoni tanlang (axlat, tirbandlik, shovqin). Yig'ilishda gapirish uchun 6 gapli nutq yozing: muammo, taklif (*I'd like to propose…*), ikki variantni taqqoslash (*far cheaper than*), *the more… the less…* gapi, ustuvorlik (*The most important thing is…*) va kelishuv taklifi.",
};

export default lesson;
