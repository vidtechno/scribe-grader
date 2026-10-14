import type { Lesson } from '../../../types';

// Mini lesson (grammar): irregular past forms grouped by pattern. Uses only the language of l1 (affirmative Past Simple).
const lesson: Lesson = {
  id: 'u12-l12',
  title: 'Irregular past forms: patterns',
  titleUz: "Noto'g'ri fe'llar: shakllar va qoliplar (buy – bought, think – thought)",
  mini: true,
  kind: 'grammar',
  goal: "Noto'g'ri fe'llarni **qoliplarga bo'lib** yodlaysiz (*buy – bought, think – thought; know – knew, fly – flew; sit – sat, win – won*), eslab qolish usullarini bilasiz va *goed, buyed, thinked* kabi xatolardan qochasiz.",
  slides: [
    {
      title: "Yodlash o'rniga qoliplar",
      blocks: [
        { t: 'p', md: "Noto'g'ri fe'llar ko'p, lekin ular **tasodifiy emas**: ko'pchiligi bir-biriga o'xshash **qoliplarga** bo'linadi. Qolipni bilsangiz, bitta fe'lni emas, butun guruhni eslab qolasiz." },
        { t: 'p', md: "Eng oson guruh: o'tgan shakli **o'zgarmaydigan** fe'llar. V1 va V2 bir xil yoziladi." },
        { t: 'table', head: ['V1', 'V2 (Past Simple)', 'Misol'], speak: [2], rows: [
          ['put', 'put', 'I put my keys on the table.'],
          ['cut', 'cut', 'She cut the bread.'],
          ['hit', 'hit', 'The ball hit the window.'],
          ['set', 'set', 'He set the alarm for six.'],
        ] },
        { t: 'tip', tone: 'info', md: "**read** ham shu guruhda: yozilishi bir xil (*read – read*), lekin o'qilishi o'zgaradi: V1 \"riid\", V2 \"red\"." },
        { t: 'check', ex: { k: 'fill', q: 'Yesterday I ___ my bag on the chair. (put)', a: ['put'], why: "**put – put**: shakli o'zgarmaydi." } },
      ],
    },
    {
      title: "-ought / -aught guruhi",
      blocks: [
        { t: 'p', md: "Bu guruhda V2 **-ought** yoki **-aught** bilan tugaydi. Hammasi bir xil tovush bilan o'qiladi: **\"oot\"** (*bought, thought, brought, taught, caught*)." },
        { t: 'table', head: ['V1', 'V2 (Past Simple)', "Ma'nosi", 'Misol'], speak: [3], rows: [
          ['buy', 'bought', 'sotib olmoq', 'I bought a new phone.'],
          ['bring', 'brought', 'olib kelmoq', 'She brought some tea.'],
          ['think', 'thought', "o'ylamoq", 'We thought it was a good idea.'],
          ['teach', 'taught', "o'rgatmoq", 'My uncle taught me chess.'],
          ['catch', 'caught', 'ushlamoq; ulgurmoq', 'He caught the last bus.'],
        ] },
        { t: 'tip', tone: 'good', md: "Eslab qoling: **-augh** faqat ikkita fe'lda — **t**each va **c**atch. Qolgan uchtasida (*buy, bring, think*) — **-ought**." },
        { t: 'check', ex: { k: 'choice', q: "**think** ning Past Simple shakli:", opts: ['thinked', 'thought', 'thaught', 'thinkt'], a: 1, why: "**think – thought** (-ought guruhi)." } },
        { t: 'check', ex: { k: 'fill', q: 'My teacher ___ us a new song. (teach)', a: ['taught'], why: "**teach – taught**." } },
      ],
    },
    {
      title: "-ew guruhi",
      blocks: [
        { t: 'p', md: "Ikkinchi guruh: V1 dagi unli **-ew** ga almashadi. Hammasi **\"uu\"** deb o'qiladi (*knew, grew, threw, flew*)." },
        { t: 'table', head: ['V1', 'V2 (Past Simple)', "Ma'nosi", 'Misol'], speak: [3], rows: [
          ['know', 'knew', 'bilmoq', 'I knew the answer.'],
          ['grow', 'grew', "o'smoq; o'stirmoq", 'The children grew fast.'],
          ['throw', 'threw', 'otmoq', 'He threw the ball to me.'],
          ['fly', 'flew', "uchmoq; samolyotda bormoq", 'We flew to Istanbul.'],
          ['draw', 'drew', 'chizmoq', 'She drew a small house.'],
        ] },
        { t: 'tip', tone: 'warn', md: "**knew** (bilardi) va **new** (yangi) bir xil o'qiladi. Yozilishiga e'tibor bering: **kn**ew — oldida jim **k**." },
        { t: 'check', ex: { k: 'choice', q: "We ___ from Tashkent to Moscow last year.", opts: ['flied', 'flew', 'fly', 'flown'], a: 1, why: "**fly – flew**." } },
        { t: 'check', ex: { k: 'fill', q: 'She ___ the ball to her brother. (throw)', a: ['threw'], why: "**throw – threw**." } },
      ],
    },
    {
      title: "Unli o'zgaradigan fe'llar",
      blocks: [
        { t: 'p', md: "Bu guruhlarda faqat **unli tovush** almashadi. Ularni juft-juft yodlash qulay:" },
        { t: 'table', head: ['Qolip', 'V1 – V2'], speak: [1], rows: [
          ['i → a', 'sit – sat, swim – swam, begin – began, sing – sang, drink – drank'],
          ['i → o / u', 'win – won, run – ran'],
          ['ea / ake → o', 'speak – spoke, break – broke, wake – woke'],
          ['-d → -t', 'spend – spent, send – sent, build – built'],
          ['-eep / -eel → -ept / -elt', 'sleep – slept, keep – kept, feel – felt'],
        ] },
        { t: 'examples', items: [
          { en: 'I sat next to Dilnoza.', uz: 'Men Dilnoza yonida o\'tirdim.' },
          { en: 'Our team won the match.', uz: 'Jamoamiz o\'yinda g\'olib bo\'ldi.' },
          { en: 'He slept for ten hours.', uz: "U o'n soat uxladi." },
          { en: 'She spoke very quickly.', uz: 'U juda tez gapirdi.' },
        ] },
        { t: 'check', ex: { k: 'choice', q: "**win** ning Past Simple shakli:", opts: ['winned', 'wan', 'won', 'wined'], a: 2, why: "**win – won**." } },
        { t: 'check', ex: { k: 'fill', q: 'I ___ for eight hours last night. (sleep)', a: ['slept'], why: "**sleep – slept**." } },
      ],
    },
    {
      title: "Odatiy xatolar",
      blocks: [
        { t: 'p', md: "O'zbek tilida o'tgan zamon hamma fe'lda bir xil (**-di**), shuning uchun ko'pchilik ingliz fe'liga ham **-ed** qo'shib yuboradi. Noto'g'ri fe'lga **-ed** qo'shilmaydi!" },
        { t: 'compare',
          good: { title: "To'g'ri", items: ['I went to the market.', 'We bought some fruit.', 'She thought about it.', 'He knew the answer.', 'They flew to Dubai.'] },
          bad: { title: "Xato", items: ['I goed to the market.', 'We buyed some fruit.', 'She thinked about it.', 'He knowed the answer.', 'They flyed to Dubai.'] } },
        { t: 'tip', tone: 'warn', md: "Yana bir xato: **V3** shaklini ishlatish. *I seen him* ❌ → *I saw him* ✅. Hozircha o'tgan voqea haqida gapirganda faqat **V2** kerak." },
        { t: 'check', ex: { k: 'choice', q: 'Qaysi gap to\'g\'ri?', opts: ['Last week I buyed a bag.', 'Last week I bought a bag.', 'Last week I buy a bag.', 'Last week I boughted a bag.'], a: 1, why: "**buy – bought**." } },
        { t: 'check', ex: { k: 'fix', wrong: 'We swimmed in the river.', a: ['We swam in the river.'], why: "**swim – swam**, *swimmed* emas." } },
      ],
    },
    {
      title: "O'qing va tinglang",
      blocks: [
        { t: 'text', title: 'A busy summer', voice: 'emma',
          en: "Last summer I flew to Istanbul with my sister. We sat next to the window and I slept for an hour. In the city we bought souvenirs and spoke English with a lot of people. My sister thought the food was great, and I knew a good cafe near the sea. On the last day we won a small prize in a game and brought home a big box of sweets.",
          uz: "O'tgan yozda men opam bilan Istanbulga uchib bordim. Biz deraza yonida o'tirdik va men bir soat uxladim. Shaharda esdalik sovg'alar sotib oldik va ko'p odamlar bilan inglizcha gaplashdik. Opam ovqat zo'r deb o'yladi, men esa dengiz yaqinidagi yaxshi kafeni bilardim. Oxirgi kuni o'yinda kichik sovrin yutdik va uyga katta quti shirinlik olib keldik." },
        { t: 'check', ex: { k: 'tf', q: 'The sisters flew to Istanbul.', a: true, why: "Matn: *I flew to Istanbul with my sister*." } },
        { t: 'dialog', lines: [
          { who: 'Sara', en: 'Did you have a good weekend?', uz: 'Hafta oxiring yaxshi o\'tdimi?' },
          { who: 'Tom', en: 'Yes! I went to the lake and I swam for an hour.', uz: "Ha! Ko'lga bordim va bir soat suzdim." },
          { who: 'Sara', en: 'Lucky you! I stayed at home and I slept a lot.', uz: "Omading bor ekan! Men uyda qoldim va ko'p uxladim." },
          { who: 'Tom', en: 'I brought you some fruit from the market.', uz: "Senga bozordan meva olib keldim." },
        ] },
        { t: 'check', ex: { k: 'choice', q: 'What did Tom bring for Sara?', opts: ['Some fruit.', 'A book.', 'Some tea.', 'A prize.'], a: 0, why: "Dialog: *I brought you some fruit*." } },
      ],
    },
  ],
  words: [
    { en: 'think – thought', uz: "o'ylamoq", ipa: 'θɪŋk – θɔːt', pos: 'verb', ex: 'I thought about you yesterday.', exUz: "Kecha sen haqingda o'yladim." },
    { en: 'bring – brought', uz: 'olib kelmoq', ipa: 'brɪŋ – brɔːt', pos: 'verb', ex: 'She brought a cake to the party.', exUz: "U ziyofatga tort olib keldi." },
    { en: 'teach – taught', uz: "o'rgatmoq", ipa: 'tiːtʃ – tɔːt', pos: 'verb', ex: 'My father taught me to drive.', exUz: "Dadam menga mashina haydashni o'rgatdi." },
    { en: 'know – knew', uz: 'bilmoq', ipa: 'nəʊ – njuː', pos: 'verb', ex: 'I knew her at school.', exUz: "Men uni maktabdan bilardim." },
    { en: 'fly – flew', uz: 'uchmoq', ipa: 'flaɪ – fluː', pos: 'verb', ex: 'We flew to Samarkand.', exUz: "Biz Samarqandga uchib bordik." },
    { en: 'win – won', uz: 'yutmoq, g\'olib bo\'lmoq', ipa: 'wɪn – wʌn', pos: 'verb', ex: 'Our team won the game.', exUz: "Jamoamiz o'yinda yutdi." },
    { en: 'sit – sat', uz: "o'tirmoq", ipa: 'sɪt – sæt', pos: 'verb', ex: 'He sat next to me.', exUz: "U yonimga o'tirdi." },
  ],
  practice: [
    { k: 'match', pairs: [['buy', 'bought'], ['think', 'thought'], ['teach', 'taught'], ['bring', 'brought'], ['catch', 'caught']] },
    { k: 'match', pairs: [['know', 'knew'], ['grow', 'grew'], ['throw', 'threw'], ['fly', 'flew'], ['draw', 'drew']] },
    { k: 'choice', q: "Qaysi fe'l o'tgan shaklini **o'zgartirmaydi**?", opts: ['put', 'buy', 'know', 'sit'], a: 0, why: "**put – put**. Qolganlarida shakl o'zgaradi." },
    { k: 'fill', q: 'My grandmother ___ me to cook plov. (teach)', a: ['taught'], uz: "Buvim menga palov pishirishni o'rgatdi.", why: "**teach – taught**." },
    { k: 'fill', q: 'Last year we ___ to Antalya. (fly)', a: ['flew'], uz: "O'tgan yili Antalyaga uchib bordik.", why: "**fly – flew**." },
    { k: 'listen', say: 'She thought about it for a long time.', opts: ['She thought about it for a long time.', 'She taught about it for a long time.', 'She bought about it for a long time.', 'She caught about it for a long time.'], a: 0, why: "**thought** — \"thoot\", **taught** — \"toot\"; ma'nosi boshqa." },
    { k: 'order', uz: 'Men yangi telefon sotib oldim.', words: ['I', 'bought', 'a', 'new', 'phone'], extra: ['buyed', 'buy'], why: "**buy – bought**." },
    { k: 'order', uz: 'Jamoamiz o\'yinda g\'olib bo\'ldi.', words: ['Our', 'team', 'won', 'the', 'game'], extra: ['winned', 'win'], why: "**win – won**." },
    { k: 'fix', wrong: 'He knowed the answer.', a: ['He knew the answer.'], why: "**know – knew**." },
    { k: 'fix', wrong: 'We goed to the lake yesterday.', a: ['We went to the lake yesterday.'], why: "**go – went**." },
    { k: 'dictation', say: 'She brought some tea and we sat in the garden.', a: ['She brought some tea and we sat in the garden.'], uz: "U choy olib keldi va biz bog'da o'tirdik." },
    { k: 'translate', uz: 'Kecha men sakkiz soat uxladim.', a: ['I slept for eight hours yesterday.', 'Yesterday I slept for eight hours.', 'I slept eight hours yesterday.', 'Yesterday I slept eight hours.'], why: "**sleep – slept**." },
    { k: 'tf', q: "*Last week I seen my friend.* — to'g'ri gap.", a: false, why: "To'g'risi: *I saw my friend*. **seen** — V3, o'tgan voqeaga mos emas." },
  ],
  quiz: [
    { k: 'choice', q: "**bring** ning Past Simple shakli:", opts: ['brang', 'brought', 'bringed', 'braught'], a: 1, why: "**bring – brought**." },
    { k: 'fill', q: 'They ___ the football match. (win)', a: ['won'], uz: "Ular futbol o'yinida yutdi.", why: "**win – won**." },
    { k: 'order', uz: "U deraza yonida o'tirdi.", words: ['She', 'sat', 'next', 'to', 'the', 'window'], extra: ['sitted', 'sit'], why: "**sit – sat**." },
    { k: 'translate', uz: 'Biz Dubayga uchib bordik.', a: ['We flew to Dubai.'], why: "**fly – flew**." },
    { k: 'fix', wrong: 'I buyed a bag at the market.', a: ['I bought a bag at the market.'], why: "**buy – bought**." },
    { k: 'tf', q: "*threw* — bu **throw** fe'lining o'tgan shakli.", a: true, why: "**throw – threw**." },
    { k: 'match', pairs: [['sit', 'sat'], ['win', 'won'], ['sleep', 'slept'], ['speak', 'spoke']] },
    { k: 'listen', say: 'He knew the way to the station.', opts: ['He knew the way to the station.', 'He new the way to the station.', 'He know the way to the station.', 'He known the way to the station.'], a: 0, why: "**know – knew**." },
  ],
  summary: [
    "Noto'g'ri fe'llar **qoliplarga** bo'linadi: **-ought/-aught** (*buy, bring, think, teach, catch*), **-ew** (*know, grow, throw, fly*), unli o'zgarishi (*sit – sat, win – won*).",
    "Ba'zi fe'llar o'zgarmaydi: **put, cut, hit, set, read**.",
    "Noto'g'ri fe'lga **-ed** qo'shmang: *goed, buyed, thinked, knowed* — xato.",
    "Yangi fe'llar: **think, bring, teach, know, fly, win, sit**.",
  ],
  homework: "Har kuni 3 ta noto'g'ri fe'lni tanlang va ular bilan o'tgan kun haqida gap yozing: *Yesterday I bought… / I thought…*.",
};

export default lesson;
