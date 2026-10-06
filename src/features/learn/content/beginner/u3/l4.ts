import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: 'u3-l4',
  title: "don't / doesn't",
  titleUz: "Inkor: don't / doesn't",
  goal: "Present Simple'da inkor gap tuzasiz: *I don't drink coffee. She doesn't eat meat.* **doesn't** dan keyin fe'l **-s siz** kelishini mustahkamlaysiz va ovqat-ichimliklar haqida gapira olasiz.",
  slides: [
    {
      title: "Inkor: \"-ma-\" ning inglizcha o'rni",
      blocks: [
        { t: 'p', md: "O'zbekchada inkor fe'l ichida yasaladi: ich**ma**yman, ye**ma**ydi. Inglizchada esa fe'l oldiga alohida yordamchi so'z qo'yiladi: **don't** yoki **doesn't**." },
        { t: 'examples', items: [
          { en: "I don't drink coffee.", uz: 'Men qahva ichmayman.' },
          { en: "We don't eat meat.", uz: "Biz go'sht yemaymiz." },
          { en: "She doesn't like sugar.", uz: 'U shakarni yoqtirmaydi.' },
        ] },
        { t: 'tip', tone: 'info', md: "Yangi fe'l: **eat** — yemoq (\"i:t\"). *I eat bread. She eats rice.* Ichimlik uchun — **drink**, ovqat uchun — **eat**." },
        { t: 'tip', tone: 'warn', md: "**to be** inkori boshqacha edi: *I'm **not** hungry.* Lekin oddiy fe'l bilan **not** yolg'iz ishlamaydi — unga **do / does** yordamchisi kerak." },
      ],
    },
    {
      title: "Shakl: don't va doesn't",
      blocks: [
        {
          t: 'table', head: ['Ega', 'Inkor', "To'liq shakl", "O'zbekcha"], speak: [1],
          rows: [
            ['I', "I don't eat", 'I do not eat', 'men yemayman'],
            ['you', "you don't eat", 'you do not eat', 'siz yemaysiz'],
            ['we', "we don't eat", 'we do not eat', 'biz yemaymiz'],
            ['they', "they don't eat", 'they do not eat', 'ular yemaydi'],
            ['he / she / it', "he doesn't eat", 'he does not eat', 'u yemaydi'],
          ],
        },
        { t: 'p', md: "Formula:\n• **I / you / we / they + don't + fe'l**\n• **he / she / it + doesn't + fe'l**\nGapirishda deyarli doim qisqa shakl (**don't, doesn't**) ishlatiladi." },
        {
          t: 'sounds', items: [
            { label: "don't", say: "don't", uz: "**\"dount\"** — \"o\" emas, \"ou\". *t* yengil aytiladi.", examples: ["I don't", "we don't"] },
            { label: "doesn't", say: "doesn't", uz: "**\"dazənt\"** — boshida *does* (\"daz\"), keyin qisqa \"ənt\".", examples: ["she doesn't", "he doesn't"] },
          ],
        },
        { t: 'check', ex: { k: 'fill', q: 'They ___ eat meat.', a: ["don't", 'do not'], uz: "Ular go'sht yemaydi.", why: "**they** → **don't**." } },
      ],
    },
    {
      title: "Oltin qoida: doesn't + fe'l (-s YO'Q)",
      blocks: [
        { t: 'p', md: "O'tgan darsda: *She drink**s** tea.* Inkorda **-s** fe'ldan **doesn't** ga \"ko'chib o'tadi\" (do**es**n't). Shuning uchun fe'l **lug'at shaklida** qoladi." },
        {
          t: 'table', head: ['Tasdiq', 'Inkor'], speak: [0, 1],
          rows: [
            ['She drinks tea.', "She doesn't drink tea."],
            ['He has a car.', "He doesn't have a car."],
            ['It works.', "It doesn't work."],
            ['My father goes to the market.', "My father doesn't go to the market."],
          ],
        },
        { t: 'compare', good: { title: "To'g'ri", items: ["She doesn't like coffee.", "He doesn't have a car.", "Ali doesn't eat rice."] }, bad: { title: "Noto'g'ri", items: ["She doesn't likes coffee.", "He doesn't has a car.", "Ali don't eat rice."] } },
        { t: 'tip', tone: 'good', md: "Eslab qoling: gapda **-s** faqat **bir marta** bo'ladi. *does**n't** + like* ✅ — *doesn't like**s*** ❌ (ikki marta)." },
        { t: 'check', ex: { k: 'choice', q: "To'g'ri gapni tanlang:", opts: ["He doesn't drinks juice.", "He don't drink juice.", "He doesn't drink juice.", "He not drink juice."], a: 2, why: "**he** → **doesn't** + fe'l **-s siz**: *doesn't drink*." } },
      ],
    },
    {
      title: "Boshqa tipik xatolar",
      blocks: [
        { t: 'compare', good: { title: "To'g'ri", items: ["I don't like soup.", "I'm not hungry.", "My parents don't speak English."] }, bad: { title: "Noto'g'ri", items: ['I not like soup.', "I'm not like soup.", "My parents aren't speak English."] } },
        { t: 'p', md: "Qachon qaysi biri?\n• Gapda **fe'l** bor (like, eat, speak…) → **don't / doesn't**\n• Gapda fe'l yo'q, faqat holat (hungry, a student, at home) → **am not / isn't / aren't**" },
        { t: 'examples', items: [
          { en: "He isn't a cook. He doesn't cook.", uz: "U oshpaz emas. U ovqat pishirmaydi.", note: "*cook* — ham ot (oshpaz), ham fe'l (pishirmoq)" },
          { en: "I'm not thirsty. I don't need water.", uz: 'Chanqamaganman. Menga suv kerak emas.' },
        ] },
        { t: 'check', ex: { k: 'tf', q: "\"I'm not like vegetables\" — to'g'ri gap.", a: false, why: "**like** — fe'l, demak **don't** kerak: *I **don't** like vegetables.*" } },
      ],
    },
    {
      title: 'Ovqat va ichimliklar',
      blocks: [
        {
          t: 'table', head: ['Inglizcha', "O'zbekcha", 'Misol'], speak: [0, 2],
          rows: [
            ['tea', 'choy', 'We drink tea.'],
            ['coffee', 'qahva', "I don't drink coffee."],
            ['juice', 'sharbat', 'The children like juice.'],
            ['bread', 'non', 'We eat bread every day.'],
            ['rice', 'guruch', 'Uzbek people like rice.'],
            ['meat', "go'sht", "She doesn't eat meat."],
            ['soup', "sho'rva", 'My mother cooks soup.'],
            ['sugar', 'shakar', "He doesn't like sugar."],
            ['vegetables', 'sabzavotlar', 'I eat vegetables.'],
            ['fruit', 'meva', 'I like fruit.'],
          ],
        },
        { t: 'tip', tone: 'warn', md: "**tea, coffee, juice, bread, rice, meat, soup, sugar, fruit** — sanalmaydigan otlar: oldiga **a / an qo'yilmaydi** va odatda ko'plik **-s** olmaydi. ❌ *a bread, breads* → ✅ *bread*. **vegetables** esa odatda ko'plikda ishlatiladi." },
        { t: 'tip', tone: 'info', md: "Talaffuz: **bread** — \"bred\" (ea = qisqa e), **meat** — \"mi:t\" (ea = uzun i:), **juice** — \"dju:s\", **vegetables** — \"VEJ-tə-bəlz\" (3 bo'g'in!)." },
        { t: 'check', ex: { k: 'listen', say: "She doesn't eat meat", opts: ["She doesn't eat meat", "She doesn't eat bread", "She doesn't need meat", "She don't eat meat"], a: 0 } },
      ],
    },
    {
      title: 'Dialog: dasturxonda',
      blocks: [
        { t: 'dialog', lines: [
          { who: 'Host', en: 'This is coffee for you.', uz: 'Bu siz uchun qahva.' },
          { who: 'Guest', en: "Oh, thank you, but I don't drink coffee. I drink tea.", uz: 'Oh, rahmat, lekin men qahva ichmayman. Choy ichaman.' },
          { who: 'Host', en: 'OK! And sugar?', uz: 'Xo\'p! Shakar-chi?' },
          { who: 'Guest', en: "No, thank you. I don't like sugar.", uz: 'Yo\'q, rahmat. Shakarni yoqtirmayman.' },
          { who: 'Host', en: "My son doesn't drink tea or coffee. He only drinks juice.", uz: "O'g'lim choy ham, qahva ham ichmaydi. U faqat sharbat ichadi." },
          { who: 'Guest', en: 'And the soup is great! But my wife doesn\'t eat meat.', uz: "Sho'rva esa zo'r! Lekin xotinim go'sht yemaydi." },
        ] },
        { t: 'tip', tone: 'info', md: "E'tibor bering: inkorda **or** ishlatiladi: *He doesn't drink tea **or** coffee* — \"choy ham, qahva ham ichmaydi\"." },
        { t: 'check', ex: { k: 'fill', q: "My son ___ drink coffee.", a: ["doesn't", 'does not'], uz: "O'g'lim qahva ichmaydi.", why: "*my son* = he → **doesn't**." } },
      ],
    },
  ],
  words: [
    { en: 'tea', uz: 'choy', ipa: 'tiː', pos: 'noun', ex: 'We drink green tea.', exUz: "Biz ko'k choy ichamiz." },
    { en: 'coffee', uz: 'qahva', ipa: 'ˈkɒf.i', pos: 'noun', ex: "I don't drink coffee.", exUz: 'Men qahva ichmayman.' },
    { en: 'juice', uz: 'sharbat', ipa: 'dʒuːs', pos: 'noun', ex: 'The children like juice.', exUz: 'Bolalar sharbatni yoqtirishadi.' },
    { en: 'bread', uz: 'non', ipa: 'bred', pos: 'noun', ex: 'We eat bread every day.', exUz: 'Biz har kuni non yeymiz.' },
    { en: 'rice', uz: 'guruch', ipa: 'raɪs', pos: 'noun', ex: "She doesn't eat rice.", exUz: 'U guruch yemaydi.' },
    { en: 'meat', uz: "go'sht", ipa: 'miːt', pos: 'noun', ex: "My sister doesn't eat meat.", exUz: "Singlim go'sht yemaydi." },
    { en: 'soup', uz: "sho'rva", ipa: 'suːp', pos: 'noun', ex: 'My mother cooks soup.', exUz: "Onam sho'rva pishiradi." },
    { en: 'sugar', uz: 'shakar', ipa: 'ˈʃʊɡ.ə', pos: 'noun', ex: "He doesn't like sugar.", exUz: 'U shakarni yoqtirmaydi.' },
    { en: 'vegetables', uz: 'sabzavotlar', ipa: 'ˈvedʒ.tə.bəlz', pos: 'noun', ex: 'I eat vegetables.', exUz: 'Men sabzavot yeyman.' },
    { en: 'fruit', uz: 'meva', ipa: 'fruːt', pos: 'noun', ex: "They don't eat fruit.", exUz: 'Ular meva yemaydi.' },
  ],
  practice: [
    { k: 'match', pairs: [['bread', 'non'], ['meat', "go'sht"], ['sugar', 'shakar'], ['soup', "sho'rva"], ['juice', 'sharbat']] },
    { k: 'listen', say: 'bread', opts: ['bread', 'breed', 'red', 'bed'], a: 0, why: "**bread** — \"bred\", qisqa e." },
    { k: 'fill', q: 'I ___ like coffee.', a: ["don't", 'do not'], uz: 'Men qahvani yoqtirmayman.', why: "**I** → **don't**." },
    { k: 'fill', q: 'She ___ eat rice.', a: ["doesn't", 'does not'], uz: 'U guruch yemaydi.', why: "**she** → **doesn't**." },
    { k: 'choice', q: "To'g'ri gapni tanlang:", opts: ["My brother don't eat meat.", "My brother doesn't eats meat.", "My brother not eat meat.", "My brother doesn't eat meat."], a: 3, why: "he → **doesn't** + **eat** (s'siz)." },
    { k: 'fill', q: "He doesn't ___ sugar. (like)", a: ['like'], why: "**doesn't** dan keyin fe'l **-s siz**: *like*." },
    { k: 'fill', q: "My father doesn't ___ a car. (have)", a: ['have'], why: "**doesn't have** — \"doesn't has\" emas!" },
    { k: 'tf', q: "\"We doesn't drink juice\" — to'g'ri gap.", a: false, why: "**we** → **don't**: *We **don't** drink juice.*" },
    { k: 'choice', q: "Qaysi gapda xato **yo'q**?", opts: ["I'm not like tea.", "I don't hungry.", "I'm not hungry.", "I not hungry."], a: 2, why: "*hungry* — holat, fe'l emas → **I'm not hungry**." },
    { k: 'order', uz: 'Ular sabzavot yemaydi.', words: ['They', "don't", 'eat', 'vegetables'], extra: ["doesn't"], why: "**they** → **don't**." },
    { k: 'order', uz: 'U (ayol) choy ichmaydi.', words: ['She', "doesn't", 'drink', 'tea'], extra: ['drinks'], why: "**doesn't** + **drink** (s'siz)." },
    { k: 'listen', say: "We don't eat fruit", opts: ["We eat fruit", "We don't eat fruit", "We don't need fruit", "We doesn't eat fruit"], a: 1 },
    { k: 'translate', uz: 'Men qahva ichmayman.', a: ["I don't drink coffee", 'I do not drink coffee'], why: "**I don't drink coffee.**" },
    { k: 'translate', uz: "U (erkak) go'sht yemaydi.", a: ["He doesn't eat meat", 'He does not eat meat'], why: "**He doesn't eat meat.** — *eats* emas." },
    { k: 'speak', say: "I don't drink coffee. She doesn't eat meat.", uz: "don't va doesn't ni aniq ayting" },
  ],
  quiz: [
    { k: 'listen', say: "He doesn't like soup", opts: ["He doesn't like soup", "He don't like soup", "He likes soup", "He doesn't like soap"], a: 0 },
    { k: 'fill', q: 'We ___ eat meat.', a: ["don't", 'do not'], uz: "Biz go'sht yemaymiz." },
    { k: 'fill', q: "Aziz doesn't ___ English. (speak)", a: ['speak'], why: "**doesn't** + fe'l s'siz." },
    { k: 'fill', q: 'The phone ___ work.', a: ["doesn't", 'does not'], uz: 'Telefon ishlamaydi.', why: "*the phone* = it → **doesn't**." },
    { k: 'choice', q: "\"Ular shakarni yoqtirmaydi.\"", opts: ["They doesn't like sugar.", "They aren't like sugar.", "They don't like sugar.", "They don't likes sugar."], a: 2 },
    { k: 'order', uz: 'Onam qahva ichmaydi.', words: ['My', 'mother', "doesn't", 'drink', 'coffee'], extra: ["don't", 'drinks'] },
    { k: 'translate', uz: 'Biz guruch yemaymiz.', a: ["We don't eat rice", 'We do not eat rice'] },
    { k: 'translate', uz: 'Singlim (my sister) mevani yoqtirmaydi.', a: ["My sister doesn't like fruit", 'My sister does not like fruit', "My sister doesn't like fruits", 'My sister does not like fruits'], why: "*my sister* = she → **doesn't like**." },
    { k: 'match', pairs: [['tea', 'choy'], ['coffee', 'qahva'], ['rice', 'guruch'], ['fruit', 'meva'], ['vegetables', 'sabzavotlar']] },
    { k: 'tf', q: "\"She doesn't has a car\" — to'g'ri gap.", a: false, why: "**doesn't** dan keyin **have**: *She doesn't have a car.*" },
  ],
  summary: [
    "Inkor: **I / you / we / they + don't + fe'l**; **he / she / it + doesn't + fe'l**.",
    "**doesn't** dan keyin fe'l **-s siz**: *She doesn't **like** coffee*, *He doesn't **have** a car*.",
    "Fe'l bor joyda \"I not…\" yoki \"I'm not like…\" emas — **I don't like…**. Holat uchun esa **I'm not hungry**.",
    "**tea, coffee, bread, rice, meat, sugar, soup, juice, fruit** — a/an siz: *I eat bread*.",
  ],
  homework: "O'zingiz va oilangiz haqida 6 ta gap yozing: 3 tasi **don't** bilan (*I don't drink coffee.*), 3 tasi **doesn't** bilan (*My father doesn't eat sugar.*). doesn't dan keyin fe'lda -s yo'qligini tekshiring.",
};

export default lesson;
