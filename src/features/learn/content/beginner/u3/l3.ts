import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: 'u3-l3',
  title: 'Present Simple: he / she / it',
  titleUz: 'Present Simple: he / she / it',
  goal: "Boshqa odamlar haqida gapirasiz: *She works in a bank. He teaches English.* **he / she / it** bilan fe'lga **-s / -es / -ies** qo'shishni, uni **/s/, /z/, /ɪz/** deb to'g'ri talaffuz qilishni va **has, does, goes** shakllarini o'rganasiz.",
  slides: [
    {
      title: "he / she / it — fe'lga -s qo'shiladi",
      blocks: [
        { t: 'p', md: "O'tgan darsda: *I work, you work, we work, they work* — fe'l o'zgarmadi. Endi eng muhim qoida: **he, she, it** bilan fe'l oxiriga **-s** qo'shiladi." },
        {
          t: 'table', head: ['Ega', "Fe'l", "O'zbekcha"], speak: [1],
          rows: [
            ['I / you / we / they', 'work', 'ishlayman / ishlaysiz / ishlaymiz / ishlashadi'],
            ['he', 'he works', 'u (erkak) ishlaydi'],
            ['she', 'she works', 'u (ayol) ishlaydi'],
            ['it', 'it works', 'u (narsa) ishlaydi'],
          ],
        },
        { t: 'tip', tone: 'info', md: "O'zbekchada ham \"u\" uchun alohida qo'shimcha bor: ishla**ydi**. Ingliz tilida uning \"o'rnini\" **-s** egallaydi: work**s**. Eslab qoling: **u → -s**." },
        { t: 'compare', good: { title: "To'g'ri", items: ['She works in a bank.', 'He lives in Fergana.', 'My brother plays tennis.'] }, bad: { title: "Noto'g'ri", items: ['She work in a bank.', 'He live in Fergana.', 'My brother play tennis.'] } },
        { t: 'check', ex: { k: 'fill', q: 'She ___ English.', a: ['speaks'], uz: 'U inglizcha gapiradi.', why: "**she** → fe'l + **-s**: *She **speaks** English.*" } },
      ],
    },
    {
      title: 'Kim bilan -s qo\'shiladi?',
      blocks: [
        { t: 'p', md: "**-s** faqat **bitta** odam yoki narsa haqida gapirganda qo'shiladi (he / she / it o'rnida turadigan har qanday so'z):" },
        { t: 'examples', items: [
          { en: 'Ali works in an office.', uz: 'Ali ofisda ishlaydi.', note: "Ali = **he**" },
          { en: 'My mother speaks English.', uz: 'Onam inglizcha gapiradi.', note: "my mother = **she**" },
          { en: 'The cat drinks water.', uz: 'Mushuk suv ichadi.', note: "the cat = **it**" },
          { en: 'My friends live in Bukhara.', uz: "Do'stlarim Buxoroda yashashadi.", note: "my friends = **they** → -s yo'q!" },
        ] },
        { t: 'tip', tone: 'warn', md: "Chalkashtirmang: otning **ko'plik -s** i (*friend**s***) va fe'lning **-s** i (*work**s***) — har xil narsa. Odatda gapda bittasi bor: *My friend work**s***. / *My friend**s** work.*" },
        { t: 'check', ex: { k: 'choice', q: "To'g'ri gapni tanlang:", opts: ['The students speaks English.', 'The student speak English.', 'The students speak English.', 'The students are speak English.'], a: 2, why: "*The students* = **they** → fe'l o'zgarmaydi: **speak**." } },
      ],
    },
    {
      title: 'Imlo: -s, -es, -ies',
      blocks: [
        {
          t: 'table', head: ['Fe\'l oxiri', 'Qoida', 'Misollar'], speak: [2],
          rows: [
            ['Ko\'pchilik fe\'llar', '+ s', 'works, lives, likes, plays'],
            ['-s, -sh, -ch, -x', '+ es', 'washes, finishes, teaches, watches, catches, fixes'],
            ['-o', '+ es', 'goes, does'],
            ['undosh + y', 'y → ies', 'study → studies, fly → flies, try → tries'],
            ['unli + y', '+ s', 'play → plays (playes emas!)'],
          ],
        },
        { t: 'tip', tone: 'info', md: "Nega **-es**? *wash* + *s* = \"washs\" — aytish qiyin. Shuning uchun orasiga **e** qo'shiladi va yangi bo'g'in paydo bo'ladi: *wash-**es*** (\"woshiz\")." },
        { t: 'tip', tone: 'warn', md: "**y** qoidasi: y dan oldin **undosh** bo'lsa — **ies** (*stud-y → studies*). **Unli** bo'lsa — oddiy **s** (*pl-a-y → plays*)." },
        { t: 'check', ex: { k: 'fill', q: 'He ___ the car every week. (fix)', a: ['fixes'], uz: 'U har hafta mashinani tuzatadi.', why: "**-x** bilan tugaydi → **+es**: *fixes*." } },
        { t: 'check', ex: { k: 'fill', q: 'The bird ___. (fly)', a: ['flies'], uz: 'Qush uchadi.', why: "undosh + y → **ies**: *fly → flies*." } },
      ],
    },
    {
      title: 'Talaffuz: /s/, /z/, /ɪz/',
      blocks: [
        { t: 'p', md: "Yozuvda bir xil **-s**, lekin uch xil o'qiladi. Qoida fe'lning **oxirgi tovushiga** bog'liq:" },
        {
          t: 'sounds', items: [
            { label: '/s/', say: 'works, likes, drinks', uz: "**\"s\"** — jarangsiz tovushlardan keyin (k, p, t, f): *works* \"wə:ks\", *likes* \"layks\".", examples: ['works', 'likes', 'drinks', 'helps'] },
            { label: '/z/', say: 'lives, plays, learns, goes', uz: "**\"z\"** — jarangli tovush va unlilardan keyin (v, n, l, unli): *lives* \"livz\", *plays* \"pleyz\", *goes* \"gouz\".", examples: ['lives', 'plays', 'learns', 'goes'] },
            { label: '/ɪz/', say: 'watches, washes, teaches, fixes', uz: "**\"iz\"** — s, sh, ch, x, j tovushlaridan keyin, yangi bo'g'in qo'shiladi: *watches* \"wochiz\", *washes* \"woshiz\".", examples: ['watches', 'washes', 'teaches', 'fixes'] },
          ],
        },
        { t: 'tip', tone: 'warn', md: "Maxsus talaffuzlar: **does** — \"daz\" (\"duz\" emas!), **says** — \"sez\" (\"seyz\" emas), **has** — \"hæz\"." },
        { t: 'check', ex: { k: 'listen', say: 'She teaches English', opts: ['She teach English', 'She teaches English', 'She speaks English', 'She each English'], a: 1, why: "**teaches** — oxirida **/ɪz/** bo'g'ini eshitiladi: \"ti:-chiz\"." } },
      ],
    },
    {
      title: 'have → has, do → does, go → goes',
      blocks: [
        { t: 'p', md: "Uchta juda kerakli fe'l he / she / it bilan o'zgacha:" },
        {
          t: 'table', head: ['I / you / we / they', 'he / she / it', 'Misol'], speak: [1, 2],
          rows: [
            ['have', 'has', 'She has a car.'],
            ['do', 'does', 'He does his homework.'],
            ['go', 'goes', 'My father goes to work.'],
          ],
        },
        { t: 'compare', good: { title: "To'g'ri", items: ['He has a dog.', 'She goes to school.', 'Aziz does his homework.'] }, bad: { title: "Noto'g'ri", items: ['He have a dog.', 'He haves a dog.', 'She gos to school.', 'Aziz dos his homework.'] } },
        { t: 'tip', tone: 'info', md: "**have** — \"bor bo'lmoq\": *I have a car* — Mening mashinam bor. *She has a car* — Uning mashinasi bor. O'zbekchada \"menda bor\", inglizchada **ega + have/has**." },
        { t: 'check', ex: { k: 'choice', q: "\"Uning (ayol) ikkita farzandi bor.\"", opts: ['She have two children.', 'She is have two children.', 'She has two children.', 'She haves two children.'], a: 2, why: "she → **has**." } },
      ],
    },
    {
      title: "Bugungi fe'llar va dialog",
      blocks: [
        { t: 'examples', items: [
          { en: 'She teaches English at school.', uz: "U maktabda ingliz tilidan dars beradi." },
          { en: 'He washes his car.', uz: 'U mashinasini yuvadi.' },
          { en: 'The lesson finishes at five.', uz: 'Dars beshda tugaydi.' },
          { en: 'My brother tries hard.', uz: "Akam qattiq harakat qiladi." },
          { en: 'He fixes phones.', uz: 'U telefonlarni tuzatadi.' },
          { en: 'The cat catches a fish.', uz: 'Mushuk baliq tutadi.' },
        ] },
        { t: 'dialog', lines: [
          { who: 'Nodira', en: 'This is my sister, Malika. She is a teacher.', uz: "Bu mening singlim, Malika. U o'qituvchi." },
          { who: 'Tom', en: 'Nice to meet you, Malika!', uz: 'Tanishganimdan xursandman, Malika!' },
          { who: 'Nodira', en: 'She teaches English. She speaks English very well.', uz: "U ingliz tilidan dars beradi. Inglizchani juda yaxshi gapiradi." },
          { who: 'Tom', en: 'And your brother?', uz: 'Akangiz-chi?' },
          { who: 'Nodira', en: 'He is an engineer. He fixes cars and he has a big garage.', uz: "U muhandis. Mashinalarni tuzatadi va uning katta garaji bor." },
        ] },
        { t: 'check', ex: { k: 'tf', q: "\"He finishs work at six\" — imlo to'g'ri.", a: false, why: "**-sh** bilan tugagan fe'lga **-es**: *He **finishes** work at six.*" } },
      ],
    },
  ],
  words: [
    { en: 'go – goes', uz: 'bormoq', ipa: 'ɡəʊ – ɡəʊz', pos: 'verb', ex: 'She goes to work.', exUz: 'U ishga boradi.' },
    { en: 'do – does', uz: 'qilmoq', ipa: 'duː – dʌz', pos: 'verb', ex: 'He does his homework.', exUz: 'U uy vazifasini qiladi.' },
    { en: 'have – has', uz: "ega bo'lmoq, bor bo'lmoq", ipa: 'hæv – hæz', pos: 'verb', ex: 'My sister has a cat.', exUz: 'Singlimning mushugi bor.' },
    { en: 'teach – teaches', uz: "o'qitmoq, dars bermoq", ipa: 'tiːtʃ – ˈtiː.tʃɪz', pos: 'verb', ex: 'He teaches English.', exUz: 'U ingliz tilidan dars beradi.' },
    { en: 'wash – washes', uz: 'yuvmoq', ipa: 'wɒʃ – ˈwɒʃ.ɪz', pos: 'verb', ex: 'She washes the cups.', exUz: 'U piyolalarni yuvadi.' },
    { en: 'finish – finishes', uz: 'tugatmoq, tugamoq', ipa: 'ˈfɪn.ɪʃ – ˈfɪn.ɪ.ʃɪz', pos: 'verb', ex: 'The lesson finishes at four.', exUz: "Dars to'rtda tugaydi." },
    { en: 'fly – flies', uz: 'uchmoq', ipa: 'flaɪ – flaɪz', pos: 'verb', ex: 'The bird flies.', exUz: 'Qush uchadi.' },
    { en: 'try – tries', uz: "harakat qilmoq, urinib ko'rmoq", ipa: 'traɪ – traɪz', pos: 'verb', ex: 'He tries hard.', exUz: 'U qattiq harakat qiladi.' },
    { en: 'fix – fixes', uz: "tuzatmoq, ta'mirlamoq", ipa: 'fɪks – ˈfɪk.sɪz', pos: 'verb', ex: 'My father fixes cars.', exUz: 'Otam mashinalarni tuzatadi.' },
    { en: 'catch – catches', uz: 'tutmoq, ushlamoq', ipa: 'kætʃ – ˈkætʃ.ɪz', pos: 'verb', ex: 'The dog catches the ball.', exUz: "It to'pni ushlaydi." },
  ],
  practice: [
    { k: 'choice', q: "To'g'ri gapni tanlang:", opts: ['He work in a hospital.', 'He works in a hospital.', 'He are work in a hospital.', 'He working in a hospital.'], a: 1, why: "**he** → fe'l + s: *works*." },
    { k: 'match', pairs: [['go', 'goes'], ['have', 'has'], ['fly', 'flies'], ['watch', 'watches'], ['play', 'plays']] },
    { k: 'fill', q: 'My father ___ to work. (go)', a: ['goes'], uz: 'Otam ishga boradi.', why: "**-o** → **+es**: *goes*." },
    { k: 'fill', q: 'She ___ a new phone. (have)', a: ['has'], uz: 'Uning yangi telefoni bor.', why: "she → **has** (\"haves\" emas)." },
    { k: 'fill', q: 'He ___ English at university. (study)', a: ['studies'], uz: 'U universitetda ingliz tilini o\'qiydi.', why: "undosh + y → **ies**: *studies*." },
    { k: 'fill', q: 'Malika ___ the cups. (wash)', a: ['washes'], uz: 'Malika piyolalarni yuvadi.', why: "**-sh** → **+es**: *washes*." },
    { k: 'listen', say: 'He fixes phones', opts: ['He fix phones', 'He fixed phones', 'He likes phones', 'He fixes phones'], a: 3, why: "**fixes** — oxiri **/ɪz/**: \"fik-siz\"." },
    { k: 'choice', q: "**plays** so'zining oxiri qanday o'qiladi?", say: 'plays', opts: ['/s/', '/z/', '/ɪz/'], a: 1, why: "Unlidan keyin — **/z/**: \"pleyz\"." },
    { k: 'choice', q: "**watches** so'zining oxiri qanday o'qiladi?", say: 'watches', opts: ['/s/', '/z/', '/ɪz/'], a: 2, why: "**ch** dan keyin — **/ɪz/**, yangi bo'g'in: \"wo-chiz\"." },
    { k: 'tf', q: "\"My friends lives in Tashkent\" — to'g'ri gap.", a: false, why: "*My friends* = **they** → *live* (s'siz): *My friends **live** in Tashkent.*" },
    { k: 'order', uz: 'U (ayol) maktabda dars beradi.', words: ['She', 'teaches', 'at', 'school'], extra: ['teach'], why: "**She teaches at school.**" },
    { k: 'order', uz: 'Ukamning katta iti bor.', words: ['My', 'brother', 'has', 'a', 'big', 'dog'], extra: ['have'], why: "*My brother* = he → **has**." },
    { k: 'translate', uz: 'U (erkak) mashinalarni tuzatadi.', a: ['He fixes cars'], why: "**He fixes cars.** — fix + **es**." },
    { k: 'speak', say: 'He works. She lives here. He watches TV.', uz: "/s/, /z/, /ɪz/ farqiga e'tibor bering" },
    { k: 'translate', uz: 'Dars oltida tugaydi.', a: ['The lesson finishes at six', 'The lesson finishes at 6', 'The class finishes at six'], why: "*the lesson* = it → **finishes**." },
  ],
  quiz: [
    { k: 'listen', say: 'She does her homework', opts: ['She do her homework', 'She dose her homework', 'She does her homework', 'She goes her homework'], a: 2 },
    { k: 'listen', say: 'The bird flies', opts: ['The bird fly', 'The bird flies', 'The bird flew', 'The bird files'], a: 1 },
    { k: 'fill', q: 'He ___ hard. (try)', a: ['tries'], why: "undosh + y → **tries**." },
    { k: 'fill', q: 'The cat ___ the fish. (catch)', a: ['catches'], why: "**-ch** → **catches**." },
    { k: 'fill', q: 'Work ___ at five. (finish)', a: ['finishes'], uz: 'Ish beshda tugaydi.' },
    { k: 'choice', q: "Qaysi gap **to'g'ri**?", opts: ['My sister haves two cats.', 'My sister have two cats.', 'My sisters has two cats.', 'My sister has two cats.'], a: 3, why: "*My sister* = she → **has**." },
    { k: 'choice', q: "Qaysi fe'l oxiri **/ɪz/** bo'lib o'qiladi?", opts: ['likes', 'goes', 'washes', 'plays'], a: 2, why: "**sh** dan keyin → /ɪz/: *washes*." },
    { k: 'order', uz: "Otam ingliz tilidan dars beradi.", words: ['My', 'father', 'teaches', 'English'], extra: ['teach', 'is'] },
    { k: 'translate', uz: 'U (ayol) ishga boradi.', a: ['She goes to work'], why: "**She goes to work.**" },
    { k: 'translate', uz: 'Uning (erkak) mashinasi bor.', a: ['He has a car', "He's got a car", 'He has got a car'], why: "**He has a car.**" },
  ],
  summary: [
    "**he / she / it** (va bitta odam/narsa) bilan fe'l + **-s**: *She works. Ali lives in Fergana.*",
    "Imlo: **-s, -sh, -ch, -x, -o → -es** (washes, teaches, fixes, goes); **undosh + y → -ies** (studies, flies); **unli + y → -s** (plays).",
    "Talaffuz: **/s/** works · **/z/** lives, plays · **/ɪz/** watches, washes.",
    "Maxsus: **have → has**, **do → does** (\"daz\"), **go → goes**.",
    "Ko'plikda -s yo'q: *My friends **live** here.*",
  ],
  homework: "Oilangizdagi 3 kishi haqida 2 tadan gap yozing (*My mother works in a school. She has a car.*). Keyin -s oxirlarini /s/, /z/, /ɪz/ guruhlariga ajrating va har bir gapni ovoz chiqarib o'qing.",
};

export default lesson;
