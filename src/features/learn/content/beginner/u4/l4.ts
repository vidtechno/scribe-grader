import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: 'u4-l4',
  title: 'Countable & uncountable',
  titleUz: "Sanaladigan / sanalmaydigan, much / many",
  goal: "Sanaladigan va sanalmaydigan otlarni ajratasiz, **much / many / a lot of** va **How much / How many** ni to'g'ri ishlatasiz hamda do'konda *a bottle of, a kilo of, a piece of, a packet of* bilan miqdorni aytasiz.",
  slides: [
    {
      title: 'Sanaladigan va sanalmaydigan otlar',
      blocks: [
        { t: 'p', md: "Ingliz tilida otlar ikki guruhga bo'linadi:\n• **Sanaladigan** (countable) — bitta, ikkita, uchta deb sanash mumkin: *a banana, two bananas, an egg, three eggs*.\n• **Sanalmaydigan** (uncountable) — massa, suyuqlik, kukun: *water, rice, sugar, salt, cheese, butter, oil, flour*." },
        { t: 'p', md: "Sanalmaydigan otlarda:\n• **a / an** ishlatilmaydi (*a rice* ❌)\n• **-s qo'shilmaydi** (*rices* ❌)\n• fe'l **birlikda**: *The cheese **is** good.*" },
        { t: 'tip', tone: 'warn', md: "O'zbek tilida biz *ikkita non* deymiz, lekin ingliz tilida **bread** — sanalmaydi! *two breads* ❌ → **two pieces of bread** ✅ (yoki *two loaves*). Xuddi shunday **meat, fruit, money** ham odatda sanalmaydi." },
        {
          t: 'compare',
          good: { title: "To'g'ri", items: ['I need some bread.', 'The rice is in the kitchen.', 'I have two bananas.'] },
          bad: { title: "Noto'g'ri", items: ['I need a bread.', 'The rices are in the kitchen.', 'I have two banana.'] },
        },
        { t: 'check', ex: { k: 'choice', q: "Qaysi ot **sanalmaydi**?", opts: ['banana', 'egg', 'cheese', 'apple'], a: 2, why: "**cheese** — massa, sanalmaydi. Qolganlari: *a banana, an egg, an apple*." } },
      ],
    },
    {
      title: 'Jadval: qanday ishlatiladi?',
      blocks: [
        {
          t: 'table', head: ['', 'Sanaladigan', 'Sanalmaydigan'], speak: [1, 2],
          rows: [
            ['a / an', 'a banana', '— (a salt ❌)'],
            ["Ko'plik", 'bananas', '— (salts ❌)'],
            ['some (+)', 'some bananas', 'some salt'],
            ['any (– ?)', "There aren't any bananas.", "Is there any salt?"],
            ["Fe'l", 'The bananas are cheap.', 'The salt is on the table.'],
          ],
        },
        { t: 'p', md: "2-darsdagi **some / any** sanalmaydigan otlar bilan ham ishlaydi:\n• *There is **some** butter in the fridge.*\n• *There isn't **any** flour.*\n• *Is there **any** oil?*" },
        { t: 'check', ex: { k: 'fill', q: 'There ___ some cheese in the fridge.', a: ['is', "'s"], uz: 'Muzlatkichda biroz pishloq bor.', why: "*cheese* — sanalmaydi → fe'l birlikda: **is**." } },
      ],
    },
    {
      title: 'much, many, a lot of',
      blocks: [
        { t: 'p', md: "\"Ko'p\" so'zi ingliz tilida uch xil:\n• **many** + sanaladigan ko'plik: *many bananas*\n• **much** + sanalmaydigan: *much sugar*\n• **a lot of** + ikkalasi ham: *a lot of bananas, a lot of sugar*" },
        {
          t: 'table', head: ['', 'Sanaladigan', 'Sanalmaydigan'], speak: [1, 2],
          rows: [
            ['Ijobiy (+)', 'I have a lot of friends.', 'We drink a lot of tea.'],
            ['Inkor (–)', "I don't have many friends.", "We don't drink much tea."],
            ['Savol (?)', 'Do you have many friends?', 'Do you drink much tea?'],
          ],
        },
        { t: 'tip', tone: 'info', md: "**much** va **many** odatda **inkor va savolda** ishlatiladi. Ijobiy gapda tabiiyroq: **a lot of**. *I drink much coffee* — g'alati eshitiladi → **I drink a lot of coffee.**" },
        {
          t: 'compare',
          good: { title: "To'g'ri", items: ["There isn't much salt.", 'How many eggs do we need?', 'I eat a lot of fruit.'] },
          bad: { title: "Noto'g'ri", items: ["There isn't many salt.", 'How much eggs do we need?', 'I eat a lot fruit.'] },
        },
        { t: 'check', ex: { k: 'choice', q: "We don't have ___ butter.", opts: ['many', 'much', 'a', 'a lot'], a: 1, why: "*butter* — sanalmaydi, inkor gap → **much**." } },
      ],
    },
    {
      title: 'How much? How many?',
      blocks: [
        { t: 'p', md: "Miqdorni so'rash:\n• **How many + ko'plik**: *How many bananas do you need?*\n• **How much + sanalmaydigan**: *How much flour do you need?*" },
        { t: 'p', md: "3-bo'limdan eslang: narxni so'rashda ham **How much** ishlatiladi: *How much is the cheese?* — *It's five dollars.*" },
        {
          t: 'examples', items: [
            { en: 'How many eggs are there?', uz: 'Nechta tuxum bor?' },
            { en: 'How much oil is there?', uz: "Qancha yog' bor?" },
            { en: 'How much salt do you need?', uz: 'Sizga qancha tuz kerak?' },
            { en: 'How many cups of tea do you drink?', uz: 'Necha piyola choy ichasiz?' },
          ],
        },
        { t: 'check', ex: { k: 'fill', q: 'How ___ rice do we need?', a: ['much'], uz: 'Bizga qancha guruch kerak?', why: "*rice* — sanalmaydi → **How much**." } },
      ],
    },
    {
      title: 'Idishlar va o\'lchovlar: a bottle of…',
      blocks: [
        { t: 'p', md: "Sanalmaydigan narsani **sanash** uchun idish yoki o'lchov so'zini qo'shamiz. Bunda sanaladigan so'z — **idish so'zi** bo'ladi:" },
        {
          t: 'table', head: ['Idish / o\'lchov', "Ma'nosi", 'Nimalar bilan'], speak: [0, 2],
          rows: [
            ['a bottle of', 'bir shisha', 'water, oil, milk'],
            ['a kilo of', 'bir kilo', 'rice, meat, flour, bananas'],
            ['a piece of', 'bir bo\'lak', 'cheese, bread, cake'],
            ['a packet of', 'bir paket / quti', 'butter, salt, sugar, tea'],
            ['a cup of / a glass of', 'bir piyola / stakan', 'tea, coffee / water, juice'],
          ],
        },
        { t: 'p', md: "Ko'plikda **-s faqat idish so'ziga** qo'shiladi:\n*two bottle**s** of water* ✅ — *two bottle of waters* ❌\n*three kilo**s** of rice* ✅" },
        {
          t: 'sounds', items: [
            { label: 'of = əv', say: 'a bottle of oil', uz: "**of** gap ichida juda kuchsiz: **\"əv\"**, ba'zan faqat **\"ə\"**. *a bottle of oil* — \"ə-BOTL-əv-oyl\".", examples: ['a bottle of water', 'a piece of cheese', 'a lot of salt'] },
            { label: 'a lot of', say: 'a lot of', uz: "Uch so'z bir so'zday qo'shilib aytiladi: **\"ə-LOT-əv\"**.", examples: ['a lot of bananas', 'a lot of money'] },
          ],
        },
        { t: 'check', ex: { k: 'choice', q: "\"Ikki shisha yog'\"", opts: ['two bottle of oils', 'two bottles of oil', 'two bottles of oils', 'two oil bottle'], a: 1, why: "-s **idishga**: *two **bottles** of oil*." } },
      ],
    },
    {
      title: "Bozorda: dialog",
      blocks: [
        {
          t: 'dialog', lines: [
            { who: 'Sotuvchi', en: 'Good morning! What do you need?', uz: 'Xayrli tong! Sizga nima kerak?' },
            { who: 'Malika', en: 'A kilo of bananas, please. How much is it?', uz: 'Bir kilo banan, iltimos. Qancha turadi?' },
            { who: 'Sotuvchi', en: "It's two dollars. Anything else?", uz: "Ikki dollar. Yana nimadir?" },
            { who: 'Malika', en: 'Yes. A piece of cheese and a bottle of oil.', uz: "Ha. Bir bo'lak pishloq va bir shisha yog'." },
            { who: 'Sotuvchi', en: 'How much flour do you need?', uz: 'Qancha un kerak?' },
            { who: 'Malika', en: "Two kilos. And a packet of salt. We don't have much salt at home.", uz: "Ikki kilo. Va bir paket tuz. Uyda tuzimiz kam qolgan." },
          ],
        },
        { t: 'tip', tone: 'good', md: "Xarid ro'yxati tuzganda o'zingizga savol bering: *How much…? How many…?* — va idish so'zi bilan javob bering: *two bottles of water, a kilo of meat, a packet of tea*." },
      ],
    },
  ],
  words: [
    { en: 'banana', uz: 'banan', ipa: 'bəˈnɑː.nə', pos: 'noun (countable)', ex: 'How many bananas do you need?', exUz: 'Sizga nechta banan kerak?' },
    { en: 'cheese', uz: 'pishloq', ipa: 'tʃiːz', pos: 'noun (uncountable)', ex: 'There is some cheese in the fridge.', exUz: 'Muzlatkichda biroz pishloq bor.' },
    { en: 'butter', uz: "sariyog'", ipa: 'ˈbʌt.ə', pos: 'noun (uncountable)', ex: "We don't have much butter.", exUz: "Bizda sariyog' ko'p emas." },
    { en: 'salt', uz: 'tuz', ipa: 'sɔːlt', pos: 'noun (uncountable)', ex: 'Is there any salt?', exUz: 'Tuz bormi?' },
    { en: 'oil', uz: "yog' (o'simlik yog'i)", ipa: 'ɔɪl', pos: 'noun (uncountable)', ex: 'How much oil is there?', exUz: "Qancha yog' bor?" },
    { en: 'flour', uz: 'un', ipa: 'ˈflaʊ.ə', pos: 'noun (uncountable)', ex: 'We need a kilo of flour.', exUz: 'Bizga bir kilo un kerak.' },
    { en: 'a bottle of', uz: 'bir shisha …', ipa: 'ə ˈbɒt.əl əv', pos: 'phrase', ex: 'I drink a bottle of water every day.', exUz: 'Har kuni bir shisha suv ichaman.' },
    { en: 'a kilo of', uz: 'bir kilo …', ipa: 'ə ˈkiː.ləʊ əv', pos: 'phrase', ex: 'A kilo of rice, please.', exUz: 'Bir kilo guruch, iltimos.' },
    { en: 'a piece of', uz: "bir bo'lak …", ipa: 'ə ˈpiːs əv', pos: 'phrase', ex: 'She eats a piece of cheese for breakfast.', exUz: "U nonushtaga bir bo'lak pishloq yeydi." },
    { en: 'a packet of', uz: 'bir paket …', ipa: 'ə ˈpæk.ɪt əv', pos: 'phrase', ex: 'There is a packet of tea on the shelf.', exUz: 'Javonda bir paket choy bor.' },
  ],
  practice: [
    { k: 'match', pairs: [['banana', 'banan'], ['cheese', 'pishloq'], ['butter', "sariyog'"], ['salt', 'tuz'], ['flour', 'un'], ['oil', "yog'"]] },
    { k: 'match', pairs: [['a bottle of', 'bir shisha'], ['a kilo of', 'bir kilo'], ['a piece of', "bir bo'lak"], ['a packet of', 'bir paket']] },
    { k: 'listen', say: 'flour', opts: ['floor', 'flour', 'four', 'flat'], a: 1, why: "**flour** — \"flauə\" (un). *floor* esa \"flo:\" (pol)." },
    { k: 'listen', say: 'How much butter do we need?', opts: ['How many butters do we need?', 'How much butter do we need?', 'How much better do we need?'], a: 1 },
    { k: 'choice', q: "Qaysi gap to'g'ri?", opts: ['I need a salt.', 'I need some salts.', 'I need some salt.', 'I need many salt.'], a: 2, why: "*salt* — sanalmaydi: **some salt**." },
    { k: 'choice', q: "How ___ eggs are there in the fridge?", opts: ['much', 'many', 'lot', 'any'], a: 1, why: "*eggs* — sanaladigan ko'plik → **How many**." },
    { k: 'tf', q: "*bread* ingliz tilida sanalmaydigan ot.", a: true, why: "*a bread* ❌ → **a piece of bread** ✅." },
    { k: 'tf', q: "*two bottle of waters* — to'g'ri.", a: false, why: "-s idishga: **two bottles of water**." },
    { k: 'fill', q: 'How ___ sugar do you want?', a: ['much'], why: "*sugar* — sanalmaydi → **much**." },
    { k: 'fill', q: "There aren't ___ bananas.", a: ['many', 'any'], why: "Ko'plik, inkor → **many** yoki **any**." },
    { k: 'fill', q: 'I drink a ___ of tea every day.', a: ['lot'], uz: "Men har kuni ko'p choy ichaman.", why: "Ijobiy gapda \"ko'p\" → **a lot of**." },
    { k: 'order', uz: "Bizda un ko'p emas.", words: ['We', "don't", 'have', 'much', 'flour'], extra: ['many'], why: "Sanalmaydigan, inkor → **much**." },
    { k: 'order', uz: 'Ikki shisha yog\', iltimos.', words: ['Two', 'bottles', 'of', 'oil', 'please'], extra: ['oils'], why: "-s idishga: *two **bottles** of oil*." },
    { k: 'translate', uz: "Bir bo'lak pishloq, iltimos.", a: ['A piece of cheese, please', 'A piece of cheese please', 'Please, a piece of cheese', 'A piece of cheese'] },
    { k: 'translate', uz: 'Sizga nechta banan kerak?', a: ['How many bananas do you need', 'How many bananas do you want'], why: "**How many** + ko'plik: *bananas*." },
    { k: 'speak', say: 'A kilo of rice and a bottle of oil, please.', uz: "Bozorda so'raganday ayting" },
  ],
  quiz: [
    { k: 'listen', say: 'a packet of salt', opts: ['a piece of salt', 'a packet of salt', 'a bottle of salt', 'a lot of salt'], a: 1 },
    { k: 'listen', say: "There isn't much cheese.", opts: ["There isn't much cheese.", "There aren't many cheeses.", 'There is a lot of cheese.'], a: 0 },
    { k: 'choice', q: "Ijobiy gapda eng tabiiy variant: *We have ___ rice.*", opts: ['many', 'much', 'a lot of', 'a'], a: 2, why: "Ijobiy gap → **a lot of**." },
    { k: 'choice', q: "Qaysi ot sanalmaydi?", opts: ['lamp', 'banana', 'shelf', 'flour'], a: 3 },
    { k: 'fill', q: 'How ___ bottles of water do we need?', a: ['many'], why: "*bottles* — sanaladigan → **many**." },
    { k: 'fill', q: 'Is there ___ butter in the fridge?', a: ['any'], why: "Savol → **any**." },
    { k: 'fill', q: 'Three ___ of meat, please.', a: ['kilos', 'kilograms'], uz: 'Uch kilo go\'sht, iltimos.', why: "-s idish/o'lchovga: **kilos**." },
    { k: 'order', uz: 'Sizga qancha tuz kerak?', words: ['How', 'much', 'salt', 'do', 'you', 'need'], extra: ['many'] },
    { k: 'translate', uz: 'Muzlatkichda biroz pishloq bor.', a: ['There is some cheese in the fridge', "There's some cheese in the fridge"] },
    { k: 'translate', uz: "Bizda ko'p banan yo'q.", a: ["We don't have many bananas", 'We do not have many bananas', "We haven't got many bananas", "We don't have a lot of bananas", 'We do not have a lot of bananas'] },
  ],
  summary: [
    "**Sanaladigan**: a banana, two bananas. **Sanalmaydigan** (water, rice, salt, cheese, bread): a/an yo'q, -s yo'q, fe'l birlikda.",
    "**many** + ko'plik, **much** + sanalmaydigan (asosan inkor/savolda); ijobiy gapda — **a lot of**.",
    "**How many** bananas? · **How much** flour? · narx: *How much is it?*",
    "Idishlar: **a bottle of** oil, **a kilo of** rice, **a piece of** cheese, **a packet of** salt; ko'plikda -s idishga: *two bottles of water*.",
  ],
  homework: "Oilangiz uchun 8 ta mahsulotdan iborat xarid ro'yxatini inglizcha yozing, har biriga idish yoki o'lchov qo'shing (*two kilos of rice, a bottle of oil…*). Keyin 3 ta savol tuzing: *How much…? How many…?*",
};

export default lesson;
