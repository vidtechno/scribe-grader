import type { Lesson } from '../../../types';

// Mini lesson (grammar): so, such, too, enough. Builds on l1/l12 (degree) and l4 (adjectives and adverbs).
const lesson: Lesson = {
  id: 'u29-l13',
  title: 'So, such, too and enough',
  titleUz: 'So, such, too, enough, (not) as… as: daraja va yetarlilik',
  mini: true,
  kind: 'grammar',
  goal: "**so / such** (kuchli daraja va natija), **too** (ortiqcha, salbiy) va **enough** (yetarlilik) so'zlarini to'g'ri o'rinda ishlatasiz: *so tired that…, such a long queue, too hot to walk, not big enough, enough water*.",
  slides: [
    {
      title: "So va such: kuchli daraja",
      blocks: [
        { t: 'p', md: "Ikkalasi ham *shunchalik* degani, lekin **so** sifat yoki ravish bilan, **such** esa **ot** bilan keladi. Natija **that** bilan aytiladi (*that* ko'pincha tushib qoladi)." },
        { t: 'table', head: ['Qoida', 'Misol'], speak: [1], rows: [
          ['so + sifat / ravish', "The water was so cold that we couldn't swim."],
          ['so many / so much + ot', "There were so many cars that the road was blocked."],
          ['such + a / an + sifat + birlik ot', "It was such a hot day that nobody went out."],
          ['such + sifat + ko\'plik / sanalmaydigan ot', "These are such serious problems that we must act."],
          ['such + sanalmaydigan ot', "There was such noise that I couldn't think."],
        ] },
        { t: 'tip', tone: 'warn', md: "**so a hot day** — xato; **such a hot day** (ot bor → *such*). Ot yo'q bo'lsa *so*: *The day was so hot*. **so + sifat + a + ot** faqat juda rasmiy: *so hot a day* (kam uchraydi). Sanaladigan ko'plik va sanalmaydigan otdan oldin **many / much** bilan **so**: *so many people, so much rubbish*." },
        { t: 'check', ex: { k: 'choice', q: "It was ___ long queue that we gave up.", opts: ['such a', 'so a', 'so', 'such'], a: 0, why: "**queue** — birlik ot, **a** bor → **such a**." } },
        { t: 'check', ex: { k: 'fill', q: "There is ___ much plastic in the sea that animals are dying.", a: ['so'], uz: "Dengizda shunchalik ko'p plastik borki, hayvonlar o'lmoqda.", why: "**so much** + sanalmaydigan ot." } },
      ],
    },
    {
      title: "Too va enough",
      blocks: [
        { t: 'table', head: ['Qurilma', "Ma'no", 'Misol'], speak: [2], rows: [
          ['too + sifat (+ to + fe\'l)', "ortiqcha, salbiy", "The river is too polluted to swim in."],
          ['too much / too many + ot', "ortiqcha miqdor", "There is too much traffic here."],
          ['sifat + enough (+ to + fe\'l)', "yetarli", "The path is wide enough for two bikes."],
          ['enough + ot', "yetarli miqdor", "We have enough water for the week."],
          ['not + sifat + enough', "yetarli emas", "The wall is not high enough to stop floods."],
        ] },
        { t: 'examples', items: [
          { en: "It's too cold to sit outside.", uz: "Tashqarida o'tirish uchun juda sovuq.", note: "**too** + sifat: ortiqcha, natija salbiy." },
          { en: "It's not warm enough to sit outside.", uz: "Tashqarida o'tirish uchun yetarlicha iliq emas.", note: "Ma'no yaqin; **not … enough** — yumshoqroq." },
          { en: "The hall is big enough for a hundred people.", uz: "Zal yuz kishiga yetarlicha katta.", note: "**sifat + enough** (enough sifatdan keyin)." },
        ] },
        { t: 'tip', tone: 'info', md: "**enough** sifat/ravishdan **keyin** (*big enough*), otdan **oldin** (*enough money*) keladi. **too** doim **sifat oldida**. *Too* salbiy: *too hot* = juda issiq, noqulay. *very hot* esa shunchaki *juda issiq*, hech qanday salbiy natijasiz." },
        { t: 'check', ex: { k: 'choice', q: "Qaysi gap to'g'ri?", opts: ["The bag is big enough for all the books.", "The bag is enough big for all the books.", "The bag has enough big for all the books.", "The bag is too enough big for all the books."], a: 0, why: "**sifat + enough**: *big enough*." } },
        { t: 'check', ex: { k: 'fill', q: "There isn't ___ time to finish the project.", a: ['enough'], uz: "Loyihani tugatishga vaqt yetarli emas.", why: "**enough + ot**: *enough time*." } },
      ],
    },
    {
      title: "Tipik xatolar (o'zbek tilidan)",
      blocks: [
        { t: 'p', md: "O'zbek tilida *juda* va *ortiqcha* ko'pincha bitta so'z (*juda*, *haddan tashqari*), *yetarli* esa ot yoki sifatdan oldin keladi. Shuning uchun quyidagi xatolar chiqadi:" },
        { t: 'compare',
          good: { title: "To'g'ri", items: ["It is too cold to swim.", "The room isn't big enough.", "It was such a nice day.", "We have too much rubbish."] },
          bad: { title: 'Xato', items: ["It is very cold to swim.", "The room isn't enough big.", "It was so a nice day.", "We have too many rubbish."] } },
        { t: 'check', ex: { k: 'fix', wrong: "The room isn't enough big for twenty people.", a: ["The room isn't big enough for twenty people.", "The room is not big enough for twenty people."], why: "**enough** sifatdan **keyin** keladi." } },
        { t: 'check', ex: { k: 'fix', wrong: "It was so a beautiful beach.", a: ["It was such a beautiful beach.", "It was a very beautiful beach.", "It was so beautiful a beach."], why: "Ot (*beach*) bor va **a** bor → **such a**." } },
        { t: 'check', ex: { k: 'fix', wrong: "It is very hot to go out at noon.", a: ["It is too hot to go out at noon.", "It's too hot to go out at noon."], why: "*to + fe'l* natijasi salbiy bo'lsa **too** kerak, *very* emas." } },
        { t: 'check', ex: { k: 'fix', wrong: "There are too much cars in the centre.", a: ["There are too many cars in the centre.", "There are so many cars in the centre."], why: "**cars** sanaladigan → **too many**." } },
      ],
    },
    {
      title: "O'qing va tinglang",
      blocks: [
        { t: 'text', title: 'A dry summer', voice: 'george', en: "Last summer our village had such a serious water shortage that we had to rethink everything. The rain was so scarce that the river became too shallow to use, supplies began to dwindle, and the well was not deep enough to supply every house. At first, people used far too much water for their gardens. Then the village agreed on a simple rule: an ample supply for drinking and cooking comes first, and watering plants comes last. Excessive use was stopped, and adequate storage tanks were built behind the school. It was such a difficult summer that nobody wants a repeat, but we learned that careful planning can make even a small amount of water enough.", uz: "O'tgan yozda qishlog'imizda suv tanqisligi shunchalik jiddiy bo'ldiki, hamma narsani qaytadan o'ylab ko'rishga to'g'ri keldi. Yomg'ir shunchalik kam ediki, daryo foydalanish uchun juda sayoz bo'lib qoldi, zaxiralar kamaya boshladi, quduq esa har bir uyni ta'minlash uchun yetarlicha chuqur emas edi. Avvaliga odamlar bog'lari uchun haddan tashqari ko'p suv sarflashardi. Keyin qishloq oddiy qoidaga kelishdi: avval ichish va ovqat pishirish uchun mo'l zaxira, o'simliklarni sug'orish esa oxirgi o'rinda. Ortiqcha sarflash to'xtatildi va maktab orqasida yetarli suv omborlari qurildi. Bu shunchalik qiyin yoz bo'ldiki, hech kim takrorlanishini xohlamaydi, lekin kichik miqdordagi suv ham rejalashtirish bilan yetarli bo'lishi mumkinligini o'rgandik." },
        { t: 'check', ex: { k: 'tf', q: 'The well was deep enough to supply every house.', a: false, why: "*the well was not deep enough to supply every house.*" } },
        { t: 'check', ex: { k: 'choice', q: "What came first in the village rule?", opts: ["Water for drinking and cooking", "Water for gardens", "Water for cars", "Water for the school"], a: 0, why: "*an ample supply for drinking and cooking comes first.*" } },
      ],
    },
    {
      title: "Dialog: baholash",
      blocks: [
        { t: 'dialog', lines: [
          { who: 'Rachel', en: "Chris, is the new recycling centre big enough for the whole district?", uz: "Kris, yangi qayta ishlash markazi butun tuman uchun yetarlicha katta mi?" },
          { who: 'Chris', en: "Not quite. It's such a popular place that there are far too many cars on Saturdays.", uz: "Unchalik emas. U shunchalik mashhurki, shanba kunlari mashinalar haddan tashqari ko'p." },
          { who: 'Rachel', en: "So there isn't enough parking?", uz: "Demak, to'xtash joyi yetarli emas?" },
          { who: 'Chris', en: "Exactly. And the queue is so long that many people give up.", uz: "Aynan. Navbat shunchalik uzunki, ko'pchilik voz kechadi." },
          { who: 'Rachel', en: "That's a shame. The shortage of space is clearly a problem.", uz: "Afsus. Joy tanqisligi aniq muammo." },
          { who: 'Chris', en: "We've asked the council to extend the car park. It's too small to cope at the moment.", uz: "Kengashdan avtoturargohni kengaytirishni so'radik. Hozir u bardosh berish uchun juda kichik." },
        ] },
        { t: 'check', ex: { k: 'choice', q: "Why do people give up at the centre?", opts: ["The queue is very long", "The centre is closed", "Recycling costs too much", "There is no car park at all"], a: 0, why: "*the queue is so long that many people give up.*" } },
      ],
    },
  ],
  words: [
    { en: 'insufficient', uz: "yetarli emas, yetmaydigan", ipa: 'ˌɪn.səˈfɪʃ.ənt', pos: 'adj', ex: 'There is insufficient evidence to support the claim.', exUz: "Da'voni qo'llab-quvvatlash uchun dalil yetarli emas." },
    { en: 'adequate', uz: "yetarli, qoniqarli", ipa: 'ˈædɪkwət', pos: 'adj', ex: 'The hospital does not have adequate equipment.', exUz: "Kasalxonada yetarli jihoz yo'q." },
    { en: 'excessive', uz: "haddan tashqari", ipa: 'ɪkˈsesɪv', pos: 'adj', ex: 'Excessive noise can damage your hearing.', exUz: "Haddan tashqari shovqin eshitishni buzishi mumkin." },
    { en: 'dwindle', uz: "kamayib bormoq, ozayib bormoq", ipa: 'ˈdwɪn.dəl', pos: 'verb', ex: 'Our savings began to dwindle after he lost his job.', exUz: "U ishdan ayrilgach, jamg'armamiz kamayib bora boshladi." },
    { en: 'ample', uz: "yetarli va mo'l, bemalol yetadigan", ipa: 'ˈæm.pəl', pos: 'adj', ex: 'There is ample room for everyone in the hall.', exUz: "Zalda hamma uchun bemalol joy bor." },
  ],
  practice: [
    { k: 'match', pairs: [['insufficient', 'yetarli emas'], ['excessive', 'haddan tashqari'], ['dwindle', 'kamayib bormoq'], ['ample', 'bemalol yetadigan'], ['adequate', 'qoniqarli darajada yetarli']] },
    { k: 'choice', q: "The soup was ___ salty that I couldn't eat it.", opts: ['so', 'such', 'too', 'enough'], a: 0, why: "Sifat (*salty*) oldida va natija (*that*) bor → **so**." },
    { k: 'choice', q: "It was ___ strong wind that the trees fell.", opts: ['such a', 'so a', 'too', 'so'], a: 0, why: "Birlik ot (*wind*, *a strong wind*) bilan: **such a**." },
    { k: 'fill', q: "The river is ___ polluted to swim in.", a: ['too'], uz: "Daryo suzish uchun juda ifloslangan.", why: "Salbiy natija (*to swim in*) → **too**." },
    { k: 'fill', q: "Is the tank big ___ for the whole village?", a: ['enough'], uz: "Zaxira idish butun qishloq uchun yetarlicha kattami?", why: "**big enough** — enough sifatdan keyin." },
    { k: 'listen', say: 'It was such a hot day that nobody wanted to work.', opts: ['It was such a hot day that nobody wanted to work.', 'It was so a hot day that nobody wanted to work.', 'It was too hot day that nobody wanted to work.', 'It was such hot day that nobody wanted to work.'], a: 0 },
    { k: 'choice', q: "Fresh water supplies began to ___ as the dry summer went on.", opts: ['dwindle', 'dose', 'litter', 'initiative'], a: 0, why: "**dwindle** — kamayib bormoq; boshqa so'zlar ma'noga mos emas." },
    { k: 'order', uz: "Bu xona yetarlicha katta emas.", words: ['This', 'room', 'is', 'not', 'big', 'enough.'], extra: ['very', 'too'], why: "**not big enough**." },
    { k: 'order', uz: "Shunchalik ko'p mashina ediki, yo'l to'sildi.", words: ['There', 'were', 'so', 'many', 'cars', 'that', 'the', 'road', 'was', 'blocked.'], extra: ['much', 'such'], why: "**so many + ko'plik ot + that**." },
    { k: 'fix', wrong: "The bridge isn't enough strong for lorries.", a: ["The bridge isn't strong enough for lorries.", "The bridge is not strong enough for lorries."], why: "**strong enough**: enough sifatdan keyin." },
    { k: 'fix', wrong: "It's very cold to go swimming today.", a: ["It's too cold to go swimming today.", "It is too cold to go swimming today."], why: "Natija salbiy → **too cold to**." },
    { k: 'translate', uz: "Bu shunchalik jiddiy muammoki, biz tezda harakat qilishimiz kerak.", a: ["It is such a serious problem that we must act quickly.", "It's such a serious problem that we must act quickly.", "It is such a serious problem that we have to act quickly.", "It's such a serious problem that we have to act quickly.", "This is such a serious problem that we must act quickly.", "This is such a serious problem that we have to act quickly."], why: "**such a + sifat + birlik ot + that**." },
    { k: 'tf', q: "*There is too many traffic in the centre.* — Gap to'g'ri.", a: false, why: "**traffic** sanalmaydi → *too much traffic*." },
    { k: 'dictation', say: 'The water is not clean enough to drink.', a: ['The water is not clean enough to drink.', "The water isn't clean enough to drink."], uz: "Suv ichish uchun yetarlicha toza emas." },
    { k: 'speak', say: 'It was so hot that we stayed indoors.', uz: "Shunchalik issiq ediki, uyda qoldik." },
  ],
  quiz: [
    { k: 'choice', q: "Qaysi gap to'g'ri?", opts: ["We have enough food for everyone.", "We have enough the food for everyone.", "We have enough of food for everyone.", "We have too enough food for everyone."], a: 0, why: "**enough + ot** (*enough food*); *enough* dan keyin *the* yoki *of* qo'yilmaydi." },
    { k: 'choice', q: "There are ___ many tourists that the beach is crowded.", opts: ['so', 'such', 'too', 'enough'], a: 0, why: "**so many + ot + that**." },
    { k: 'choice', q: "The city has taken ___ steps to cut air pollution.", opts: ['adequate', 'insufficient', 'excessive', 'dizzy'], a: 0, why: "Kerakli darajadagi qadamlar → **adequate**. *insufficient* — yetarli emas, *excessive* — haddan tashqari." },
    { k: 'fill', q: "The room is ___ small for twenty people.", a: ['too'], uz: "Xona yigirma kishi uchun juda kichik.", why: "Salbiy natija: **too small**." },
    { k: 'fill', q: "He drives so ___ that the neighbours complain. (very quickly)", a: ['fast', 'quickly'], uz: "U shunchalik tez haydaydiki, qo'shnilar shikoyat qiladi.", why: "**so + ravish + that**: *so fast / so quickly*." },
    { k: 'fix', wrong: "There was so a long queue.", a: ["There was such a long queue.", "There was a very long queue.", "The queue was so long."], why: "Ot (*queue*) bilan: **such a long queue**." },
    { k: 'order', uz: "Bu masala ko'rib chiqish uchun juda muhim.", words: ['This', 'issue', 'is', 'too', 'important', 'to', 'ignore.'], extra: ['enough', 'very'], why: "**too + sifat + to + fe'l**." },
    { k: 'listen', say: 'There is not enough water for everyone.', opts: ['There is not enough water for everyone.', 'There is not water enough for everyone.', 'There is too enough water for everyone.', 'There are not enough water for everyone.'], a: 0 },
    { k: 'tf', q: "*It is very hot to walk.* — to'g'ri gap, ma'nosi: yurish uchun juda issiq.", a: false, why: "*to + fe'l* natijasi bilan **too hot to walk** kerak; *very* bilan emas." },
  ],
  summary: [
    "**so** + sifat/ravish (*so tired*), **so many / so much** + ot; **such (a)** + sifat + ot (*such a long queue*). Natija: **that**.",
    "**too** + sifat — ortiqcha va salbiy (*too cold to swim*); **enough** sifatdan keyin (*big enough*), otdan oldin (*enough water*).",
    "**not enough** va **too** ma'nosi yaqin, lekin *too* kuchliroq va salbiyroq; *very … to* deb bo'lmaydi.",
    "Xatolar: *enough big* → *big enough*; *so a nice day* → *such a nice day*; *too much cars* → *too many cars*.",
    "Yangi so'zlar: **insufficient, adequate, excessive, dwindle, ample**.",
  ],
  homework: "O'z hayotingiz haqida 6 ta gap yozing: 2 tasi **so … that**, 1 tasi **such a … that**, 1 tasi **too … to**, 1 tasi **not … enough**, 1 tasi **enough + ot**. Mavzu: ish yoki o'qish, shahar transporti yoki ob-havo.",
};

export default lesson;
