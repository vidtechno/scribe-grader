import type { Lesson } from '../../../types';

// Mini lesson (grammar): spelling of regular Past Simple verbs. Regular verbs only (irregular verbs come in l4).
const lesson: Lesson = {
  id: 'u5-l13',
  title: '-ed: spelling',
  titleUz: "-ed qo'shish imlosi: stop → stopped",
  mini: true,
  goal: "Fe'lga **-ed** ni xatosiz qo'shasiz: *play → played, like → liked, study → studied, stop → stopped*. To'rt xil imlo qoidasini bilib olasiz.",
  slides: [
    {
      title: "Oddiy qoida va -e, -y bilan tugaydigan fe'llar",
      blocks: [
        { t: 'p', md: "O'tgan zamon shakli deyarli doim **-ed** bilan tugaydi. Lekin ba'zan fe'lning oxiri o'zgaradi. Bu yerda uchta oddiy qoida bor." },
        { t: 'table', head: ["Fe'l oxiri", 'Nima qilamiz', 'Misol'], speak: [2], rows: [
          ['Oddiy undosh yoki unli', '+ ed', 'work → worked, play → played'],
          ['-e', '+ d (faqat d)', 'like → liked, arrive → arrived'],
          ['undosh + y', 'y → i + ed', 'study → studied, carry → carried, try → tried'],
        ] },
        { t: 'tip', tone: 'warn', md: "**play, stay** kabi fe'llarda **y** dan oldin **unli** (a) turibdi, shuning uchun **y** o'zgarmaydi: *played, stayed*. **playied** deb yozilmaydi!" },
        { t: 'check', ex: { k: 'choice', q: 'She ___ English at school last year.', opts: ['studyed', 'studied', 'studdied', 'studys'], a: 1, why: "**study** — undosh (**d**) + **y**. **y** o'rniga **i**: *studied*." } },
      ],
    },
    {
      title: 'Undoshni ikkilantirish',
      blocks: [
        { t: 'p', md: "Qisqa, bir bo'g'inli fe'l **undosh + unli + undosh** bilan tugasa, oxirgi undosh **ikki marta** yoziladi. Aks holda so'z noto'g'ri o'qiladi (*stoped* — \"stoup-id\" bo'lib qoladi)." },
        { t: 'examples', items: [
          { en: 'We stopped at the shop.', uz: "Biz do'konda to'xtadik.", note: 'stop → stopped' },
          { en: 'They planned a trip.', uz: 'Ular sayohatni rejalashtirishdi.', note: 'plan → planned' },
          { en: 'He dropped his phone.', uz: 'U telefonini tushirib yubordi.', note: 'drop → dropped' },
          { en: 'I tried again.', uz: 'Men yana urindim.', note: 'try → tried (undosh + y)' },
        ] },
        { t: 'tip', tone: 'info', md: "Ikkilantirmaymiz: **w, x, y** bilan tugasa (*snowed, fixed, played*) va ko'p bo'g'inli fe'llarda odatda ham (*visited, opened*). Undosh ikkita bo'lsa ham ikkilanmaydi (*worked, helped*)." },
        { t: 'check', ex: { k: 'fill', q: 'We ___ for a minute and looked at the map. (stop)', a: ['stopped'], why: "**stop** = undosh-unli-undosh → **p** ikkilanadi: *stopped*." } },
      ],
    },
    {
      title: 'travel: ikki xil yozilish va xatolar',
      blocks: [
        { t: 'p', md: "**travel** — istisno: Britaniya inglizchasida **travelled** (ikki **l**), Amerikada **traveled** (bitta **l**). Ikkalasi ham to'g'ri." },
        { t: 'compare',
          good: { title: "To'g'ri", items: ['stopped', 'studied', 'liked', 'played', 'planned'] },
          bad: { title: "Noto'g'ri", items: ['stoped', 'studyed', 'likeed', 'playied', 'planed'] } },
        { t: 'check', ex: { k: 'choice', q: "Qaysi yozilish to'g'ri?", opts: ['I hurryed home.', 'I hurried home.', 'I hurrid home.', 'I hurrieed home.'], a: 1, why: "**hurry** — undosh (**r**) + **y** → **hurried**." } },
        { t: 'check', ex: { k: 'tf', q: "*We travelled to Bukhara last year.* — bu yozilish ham, *traveled* ham to'g'ri.", a: true, why: "Britaniya: **travelled**, Amerika: **traveled**." } },
      ],
    },
  ],
  words: [
    { en: 'carry', uz: "ko'tarib yurmoq", ipa: 'ˈkær.i', pos: 'verb', ex: 'She carried a heavy bag.', exUz: "U og'ir sumka ko'tarib yurdi." },
    { en: 'plan', uz: 'rejalashtirmoq', ipa: 'plæn', pos: 'verb', ex: 'We planned a trip to Khiva.', exUz: 'Biz Xivaga sayohat rejalashtirdik.' },
    { en: 'drop', uz: 'tushirib yubormoq', ipa: 'drɒp', pos: 'verb', ex: 'He dropped his keys.', exUz: 'U kalitlarini tushirib yubordi.' },
    { en: 'try', uz: "urinib ko'rmoq", ipa: 'traɪ', pos: 'verb', ex: 'I tried the soup.', exUz: "Men sho'rvani tatib ko'rdim." },
    { en: 'hurry', uz: 'shoshilmoq', ipa: 'ˈhʌr.i', pos: 'verb', ex: 'We hurried to the bus stop.', exUz: 'Biz bekatga shoshildik.' },
    { en: 'travel', uz: 'sayohat qilmoq', ipa: 'ˈtræv.əl', pos: 'verb', ex: 'They travelled by train.', exUz: 'Ular poyezdda sayohat qilishdi.' },
  ],
  practice: [
    { k: 'choice', q: 'Yesterday I ___ my room.', opts: ['cleaned', 'cleanned', 'cleaed', 'cleanied'], a: 0, why: "**clean** — oxirida ikki undosh (**ea-n**), ikkilanmaydi: *cleaned*." },
    { k: 'fill', q: 'She ___ the bus at the corner. (stop)', a: ['stopped'], uz: "U burchakda avtobusni to'xtatdi.", why: "undosh-unli-undosh → *stopped*." },
    { k: 'fill', q: 'My brother ___ football yesterday. (play)', a: ['played'], uz: "Akam kecha futbol o'ynadi.", why: "**y** dan oldin unli → *played*." },
    { k: 'match', pairs: [['like', 'liked'], ['study', 'studied'], ['stop', 'stopped'], ['play', 'played'], ['arrive', 'arrived']] },
    { k: 'fix', wrong: 'We studyed at the library.', a: ['We studied at the library.'], hint: '-ed imlosi', why: "undosh + **y** → **ied**: *studied*." },
    { k: 'fix', wrong: 'He planed a party for Saturday.', a: ['He planned a party for Saturday.'], hint: 'n ni ikkilantiring', why: "*plan* → **planned**." },
    { k: 'order', uz: 'Men uyga shoshildim.', words: ['I', 'hurried', 'home'], extra: ['hurryed', 'hurry'], why: "**hurry → hurried**." },
    { k: 'translate', uz: "U kecha menga yordam berdi.", a: ['He helped me yesterday.', 'He helped me yesterday'], why: "**help** → *helped* (ikkilanmaydi)." },
    { k: 'tf', q: '*She liked the film.* — **like** + **d** (likeed emas).', a: true, why: "**-e** bilan tugasa, faqat **d**: *liked*." },
    { k: 'choice', q: 'We ___ to Samarkand last summer. (UK)', opts: ['travelled', 'travelyed', 'traveld', 'travelling'], a: 0, why: "Britaniya: *travelled*; Amerika: *traveled*." },
    { k: 'fill', q: 'He ___ his cup on the floor. (drop)', a: ['dropped'], uz: 'U finjonini polga tushirib yubordi.', why: "*drop* → **dropped**." },
    { k: 'translate', uz: "Biz kecha poyezdda sayohat qildik.", a: ['We travelled by train yesterday.', 'We traveled by train yesterday.', 'We travelled by train yesterday', 'We traveled by train yesterday'], why: "*travelled* yoki *traveled* — ikkalasi ham to'g'ri." },
  ],
  quiz: [
    { k: 'choice', q: 'Last week they ___ in Tashkent.', opts: ['stayed', 'stayyed', 'staied', 'stayd'], a: 0, why: "**y** dan oldin unli → *stayed*." },
    { k: 'fill', q: 'She ___ a lot of bags. (carry)', a: ['carried'], uz: "U ko'p sumka ko'tarib yurdi.", why: "undosh + y → *carried*." },
    { k: 'fix', wrong: 'We stoped at the bank.', a: ['We stopped at the bank.'], hint: 'p ni ikkilantiring', why: "*stop* → **stopped**." },
    { k: 'match', pairs: [['try', 'tried'], ['plan', 'planned'], ['hurry', 'hurried'], ['drop', 'dropped'], ['visit', 'visited']] },
    { k: 'tf', q: "*He playied chess.* — gap to'g'ri.", a: false, why: "To'g'risi: *played* (y o'zgarmaydi)." },
    { k: 'order', uz: 'Ular kecha sayohatni rejalashtirishdi.', words: ['They', 'planned', 'the', 'trip', 'yesterday'], extra: ['planed', 'plan'] },
    { k: 'translate', uz: "Men javobni urinib ko'rdim.", a: ['I tried the answer.', 'I tried the answer', 'I tried an answer.'], why: "*try* → **tried**." },
    { k: 'choice', q: '**like** ning o\'tgan zamoni:', opts: ['liked', 'likeed', 'liking', 'liken'], a: 0, why: "**-e** bilan tugasa → faqat **-d**." },
  ],
  summary: [
    "Oddiy qoida: fe'l + **-ed** (*worked, played, stayed*).",
    "**-e** bilan tugasa, faqat **-d**: *like → liked, arrive → arrived*.",
    "Undosh + **y** → **ied**: *study → studied, try → tried*. Unli + y o'zgarmaydi: *played*.",
    "Qisqa undosh-unli-undosh fe'l ikkilanadi: *stop → stopped, plan → planned*.",
    "**travel** → *travelled* (Britaniya) yoki *traveled* (Amerika).",
  ],
  homework: "Kunlik 5 ta fe'lni o'tgan zamonda yozing: *I walked, I studied, I stopped...* Yozgandan keyin qoidani tekshiring.",
};

export default lesson;
