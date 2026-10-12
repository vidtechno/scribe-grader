import type { Lesson } from '../../../types';

// Mini lesson (grammar): spelling and pronunciation of the he/she/it verb ending. One goal only: -s / -es / -ies.
const lesson: Lesson = {
  id: 'u3-l13',
  title: '-s / -es: spelling',
  titleUz: "he / she / it: -s, -es, -ies imlosi",
  mini: true,
  goal: "he / she / it bilan fe'lni **imlo xatosiz** yozasiz va to'g'ri o'qiysiz: *works, watches, studies, goes, has*. Oxiri qaysi harfda tugasa, qaysi qo'shimcha (**-s, -es, -ies**) kerakligini darrov ajratasiz.",
  slides: [
    {
      title: "Fe'lning oxiriga qarang",
      blocks: [
        { t: 'p', md: "Qaysi qo'shimcha kerakligini fe'lning **oxirgi harfi** hal qiladi. Uchta yo'l bor:" },
        {
          t: 'table', head: ["Fe'l oxiri", "Nima qilamiz", 'Misol'], speak: [2],
          rows: [
            ['ko\'pchilik fe\'llar', '+ s', 'work → works, live → lives'],
            ['-s, -sh, -ch, -x, -o', '+ es', 'watch → watches, go → goes'],
            ['undosh + y', 'y → ies', 'study → studies'],
          ],
        },
        { t: 'examples', items: [
          { en: 'My brother works in a bank.', uz: 'Akam bankda ishlaydi.' },
          { en: 'She watches TV in the evening.', uz: 'U kechqurun televizor ko\'radi.' },
          { en: 'Our teacher studies Chinese.', uz: 'Ustozimiz xitoy tilini o\'rganadi.' },
        ] },
        { t: 'check', ex: { k: 'fill', q: 'He ___ a lot of tea. (drink)', a: ['drinks'], uz: 'U ko\'p choy ichadi.', why: "Oddiy oxir (**k**) → faqat **+s**: *drinks*." } },
      ],
    },
    {
      title: '+es: gapirish qiyin bo\'lganda',
      blocks: [
        { t: 'p', md: "**-s, -sh, -ch, -x** bilan tugagan fe'lga **-es** qo'shiladi. Sabab oddiy: *brush* + *s* = \"brushs\" — aytib bo'lmaydi. **e** qo'shilsa, yangi bo'g'in chiqadi: *brush-**es***." },
        {
          t: 'table', head: ["Fe'l", 'he / she / it', "O'zbekcha"], speak: [1],
          rows: [
            ['brush', 'brushes', 'tozalamoq (tish)'],
            ['relax', 'relaxes', 'dam olmoq'],
            ['miss', 'misses', "sog'inmoq; o'tkazib yubormoq"],
            ['go', 'goes', 'bormoq'],
          ],
        },
        { t: 'compare', good: { title: "To'g'ri", items: ['He brushes his teeth.', 'She relaxes at home.', 'My son goes to school.'] }, bad: { title: "Noto'g'ri", items: ['He brushs his teeth.', 'She relaxs at home.', 'My son gos to school.'] } },
        { t: 'check', ex: { k: 'fill', q: 'My mother ___ the bus at eight. (catch)', a: ['catches'], uz: 'Onam avtobusni sakkizda tutadi.', why: "**-ch** → **+es**: *catches*." } },
      ],
    },
    {
      title: 'y bilan tugasa: undosh yoki unli?',
      blocks: [
        { t: 'p', md: "Fe'l **y** bilan tugasa, **y dan oldingi harfga** qarang:\n• **undosh + y** → **y** tushadi, **-ies** keladi: *carry → carries*\n• **unli + y** → oddiy **-s**: *enjoy → enjoys*" },
        {
          t: 'table', head: ["Fe'l", 'y dan oldin', 'he / she / it'], speak: [2],
          rows: [
            ['study', 'd (undosh)', 'studies'],
            ['carry', 'r (undosh)', 'carries'],
            ['worry', 'r (undosh)', 'worries'],
            ['play', 'a (unli)', 'plays'],
            ['enjoy', 'o (unli)', 'enjoys'],
          ],
        },
        { t: 'compare', good: { title: "To'g'ri", items: ['She studies at night.', 'He carries a heavy bag.', 'My son plays chess.'] }, bad: { title: "Noto'g'ri", items: ['She studys at night.', 'He carrys a heavy bag.', 'My son plaies chess.'] } },
        { t: 'tip', tone: 'good', md: "Yodlash: **undosh + y** bo'lsa, *y* \"yo'qoladi\". **Unli + y** bo'lsa, *y* o'z joyida qoladi." },
        { t: 'check', ex: { k: 'choice', q: "To'g'ri imloni tanlang: *She often ___ about her exam.*", opts: ['worrys', 'worries', 'worryes', 'worrees'], a: 1, why: "r (undosh) + y → **ies**: *worries*." } },
        { t: 'check', ex: { k: 'fill', q: 'Ali ___ his job. (enjoy)', a: ['enjoys'], uz: 'Ali ishidan zavqlanadi.', why: "o (unli) + y → oddiy **-s**: *enjoys*." } },
      ],
    },
    {
      title: 'Qanday o\'qiladi? /s/, /z/, /ɪz/',
      blocks: [
        {
          t: 'sounds', items: [
            { label: '/s/', say: 'works, drinks, helps', uz: "**\"s\"** — k, p, t kabi jarangsiz tovushdan keyin.", examples: ['works', 'drinks', 'helps'] },
            { label: '/z/', say: 'carries, enjoys, lives, goes', uz: "**\"z\"** — unli yoki jarangli tovushdan keyin. *-ies* ham shunday.", examples: ['carries', 'enjoys', 'lives', 'goes'] },
            { label: '/ɪz/', say: 'brushes, relaxes, misses, watches', uz: "**\"iz\"** — **-es** (s, sh, ch, x) bilan tugasa: yangi bo'g'in eshitiladi.", examples: ['brushes', 'relaxes', 'misses', 'watches'] },
          ],
        },
        { t: 'tip', tone: 'warn', md: "Maxsus so'zlar: **has** \"hæz\", **does** \"daz\", **says** \"sez\". Ularni yodlab oling." },
        { t: 'check', ex: { k: 'listen', say: 'She relaxes at home', opts: ['She relax at home', 'She relaxes at home', 'She relaxed at home', 'She really is at home'], a: 1, why: "**relaxes** — oxirida **/ɪz/** bo'g'ini eshitiladi." } },
      ],
    },
  ],
  words: [
    { en: 'brush', uz: 'tozalamoq, cho\'tkalamoq', ipa: 'brʌʃ', pos: 'verb', ex: 'He brushes his teeth twice a day.', exUz: 'U kuniga ikki marta tishlarini tozalaydi.' },
    { en: 'carry', uz: 'ko\'tarib yurmoq, olib yurmoq', ipa: 'ˈkær.i', pos: 'verb', ex: 'She carries a big bag.', exUz: 'U katta sumka ko\'tarib yuradi.' },
    { en: 'worry', uz: 'xavotir olmoq', ipa: 'ˈwʌr.i', pos: 'verb', ex: 'My mother worries about me.', exUz: 'Onam men uchun xavotir oladi.' },
    { en: 'enjoy', uz: 'zavqlanmoq, yoqtirmoq', ipa: 'ɪnˈdʒɔɪ', pos: 'verb', ex: 'Ali enjoys his lessons.', exUz: 'Ali darslaridan zavqlanadi.' },
    { en: 'relax', uz: 'dam olmoq', ipa: 'rɪˈlæks', pos: 'verb', ex: 'He relaxes on Sunday.', exUz: 'U yakshanba kuni dam oladi.' },
    { en: 'miss', uz: "sog'inmoq; o'tkazib yubormoq", ipa: 'mɪs', pos: 'verb', ex: 'She misses her family.', exUz: "U oilasini sog'inadi." },
  ],
  practice: [
    { k: 'match', pairs: [['brush', 'brushes'], ['carry', 'carries'], ['enjoy', 'enjoys'], ['miss', 'misses'], ['go', 'goes']] },
    { k: 'choice', q: "Qaysi imlo to'g'ri?", opts: ['She studys.', 'She studies.', 'She studyes.', 'She study.'], a: 1, why: "undosh (d) + y → **studies**." },
    { k: 'choice', q: "Qaysi imlo to'g'ri?", opts: ['He plays tennis.', 'He plaies tennis.', 'He playes tennis.', 'He play tennis.'], a: 0, why: "unli (a) + y → oddiy **-s**: *plays*." },
    { k: 'fill', q: 'My father ___ his teeth at seven. (brush)', a: ['brushes'], uz: 'Otam tishlarini yettida tozalaydi.', why: "**-sh** → **+es**." },
    { k: 'fill', q: 'She ___ a heavy bag every day. (carry)', a: ['carries'], uz: 'U har kuni og\'ir sumka ko\'tarib yuradi.', why: "r + y → **carries**." },
    { k: 'fill', q: 'My sister ___ to the gym on Monday. (go)', a: ['goes'], uz: 'Singlim dushanba kuni sport zaliga boradi.', why: "**-o** → **goes**." },
    { k: 'fill', q: 'He ___ two cars. (have)', a: ['has'], uz: 'Uning ikkita mashinasi bor.', why: "have → **has**." },
    { k: 'listen', say: 'He enjoys his work', opts: ['He enjoy his work', 'He enjoys his work', 'He enjoyed his work', 'He injures his work'], a: 1, why: "**enjoys** — oxiri **/z/**." },
    { k: 'choice', q: "**misses** so'zi oxiri qanday o'qiladi?", say: 'misses', opts: ['/s/', '/z/', '/ɪz/'], a: 2, why: "**-es** — yangi bo'g'in: **/ɪz/**." },
    { k: 'fix', wrong: 'She worrys about her exam.', a: ['She worries about her exam.'], why: "undosh + y → **worries**." },
    { k: 'order', uz: 'Akam yakshanba kuni dam oladi.', words: ['My', 'brother', 'relaxes', 'on', 'Sunday'], extra: ['relax', 'relaxs'], why: "**-x** → **relaxes**." },
    { k: 'translate', uz: 'U oilasini sog\'inadi.', a: ['She misses her family', 'He misses his family'], why: "**misses** — *miss* + **es**." },
    { k: 'speak', say: 'She studies, he watches, it goes.', uz: 'Oxirgi /z/ va /ɪz/ tovushlariga e\'tibor bering' },
  ],
  quiz: [
    { k: 'listen', say: 'She carries a bag', opts: ['She carry a bag', 'She carries a bag', 'She carried a bag', 'She cares a bag'], a: 1 },
    { k: 'fill', q: 'Our teacher ___ English very well. (speak)', a: ['speaks'], why: "Oddiy oxir → **+s**." },
    { k: 'fill', q: 'The baby ___ a lot. (cry)', a: ['cries'], uz: 'Chaqaloq ko\'p yig\'laydi.', why: "r + y → **cries**." },
    { k: 'choice', q: "Qaysi gapda imlo xatosi **bor**?", opts: ['He fixes cars.', 'She plays chess.', 'He washs the car.', 'She studies a lot.'], a: 2, why: "**-sh** → **washes**." },
    { k: 'choice', q: "Qaysi fe'l oxiri **/ɪz/** deb o'qiladi?", opts: ['works', 'enjoys', 'relaxes', 'lives'], a: 2 },
    { k: 'fix', wrong: 'He have a big family.', a: ['He has a big family.'] },
    { k: 'order', uz: 'U maktabga boradi.', words: ['She', 'goes', 'to', 'school'], extra: ['gos', 'go'] },
    { k: 'translate', uz: 'Ali ishidan zavqlanadi.', a: ['Ali enjoys his job', 'Ali enjoys his work'] },
  ],
  summary: [
    "Ko'pchilik fe'llar: **+ s** (*works, lives*). **-s, -sh, -ch, -x, -o**: **+ es** (*watches, brushes, goes*).",
    "**Undosh + y** → **-ies** (*studies, carries*). **Unli + y** → **-s** (*plays, enjoys*).",
    "O'qilishi: **/s/** works · **/z/** carries, enjoys · **/ɪz/** watches, relaxes.",
    "Maxsus: **have → has**, **do → does**, **go → goes**.",
  ],
  homework: "Oilangizdagi 3 kishi haqida har kuni qiladigan ishlarini yozing (*My father brushes… My sister studies…*). Keyin har bir fe'lning oxiri /s/, /z/ yoki /ɪz/ ekanini belgilab, ovoz chiqarib o'qing.",
};

export default lesson;
