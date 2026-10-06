import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: 'u3-l1',
  title: 'Numbers 20–100, age & prices',
  titleUz: 'Sonlar 20–100, yosh va narx',
  goal: "20 dan 100 gacha sonlarni aytasiz va yozasiz, **thirteen / thirty** kabi juftliklarni quloq bilan ajratasiz, yoshingizni (**I'm 25**), narxni (**How much is it?**) va telefon raqamingizni inglizcha to'g'ri aytasiz.",
  slides: [
    {
      title: "Katta sonlar — o'nliklar oson",
      blocks: [
        { t: 'p', md: "1-bo'limda 0 dan 20 gacha sonlarni o'rgandingiz. Endi undan kattalarini o'rganamiz. Yaxshi xabar: 20 dan keyin ingliz sonlari **o'zbekchadagi kabi tartibda** yasaladi — avval o'nlik, keyin birlik." },
        { t: 'examples', items: [
          { en: 'twenty-one', uz: 'yigirma bir', note: "twenty (yigirma) + one (bir)" },
          { en: 'thirty-five', uz: "o'ttiz besh" },
          { en: 'ninety-nine', uz: "to'qson to'qqiz" },
        ] },
        { t: 'p', md: "Bugun sonlarni hayotda ishlatamiz: **yosh** (necha yoshdasiz?), **narx** (bu qancha turadi?) va **telefon raqam**. Bular har kuni kerak bo'ladigan gaplar." },
        { t: 'tip', tone: 'info', md: "O'nliklarning deyarli hammasi **-ty** bilan tugaydi: twen**ty**, thir**ty**, for**ty**… \"-ty\" ni \"o'nlik\" belgisi deb eslab qoling: *six* (6) → **sixty** (60)." },
      ],
    },
    {
      title: "O'nliklar: 20, 30 … 100",
      blocks: [
        {
          t: 'table', head: ['Son', 'Inglizcha', "O'zbekcha"], speak: [1],
          rows: [
            ['20', 'twenty', 'yigirma'],
            ['30', 'thirty', "o'ttiz"],
            ['40', 'forty', 'qirq'],
            ['50', 'fifty', 'ellik'],
            ['60', 'sixty', 'oltmish'],
            ['70', 'seventy', 'yetmish'],
            ['80', 'eighty', 'sakson'],
            ['90', 'ninety', "to'qson"],
            ['100', 'a hundred / one hundred', 'yuz'],
          ],
        },
        { t: 'tip', tone: 'warn', md: "Imlo tuzoqlari:\n• **forty** — \"u\" harfisiz! (four — 4, lekin forty — 40)\n• **fifty** — \"fivety\" emas\n• **thirty** — \"threety\" emas\n• **eighty** — faqat bitta **t**\n• **ninety** — \"e\" saqlanib qoladi (nine → ninety)" },
        { t: 'tip', tone: 'info', md: "**100** — *a hundred* yoki *one hundred*. Ikkalasi ham to'g'ri. Faqat \"hundred\" deb yolg'iz aytilmaydi." },
        { t: 'check', ex: { k: 'choice', q: "**40** qanday yoziladi?", opts: ['fourty', 'forty', 'fourteen', 'foorty'], a: 1, why: "40 — **forty**. \"u\" harfi yo'q. *fourteen* esa 14." } },
      ],
    },
    {
      title: '21, 35, 99: murakkab sonlar',
      blocks: [
        { t: 'p', md: "O'nlik va birlik orasiga **chiziqcha (-)** qo'yiladi: *twenty**-**one*. Tartib o'zbekchadagi bilan bir xil." },
        {
          t: 'table', head: ['Son', 'Inglizcha'], speak: [1],
          rows: [
            ['23', 'twenty-three'],
            ['37', 'thirty-seven'],
            ['44', 'forty-four'],
            ['58', 'fifty-eight'],
            ['62', 'sixty-two'],
            ['71', 'seventy-one'],
            ['86', 'eighty-six'],
            ['99', 'ninety-nine'],
          ],
        },
        { t: 'tip', tone: 'good', md: "Usul: avval o'nlikni ayting, keyin 1–9 ni qo'shing. Agar siz 1–9 va o'nliklarni bilsangiz, **barcha** sonlarni 99 gacha ayta olasiz." },
        { t: 'check', ex: { k: 'fill', q: '58 = ___', a: ['fifty-eight', 'fifty eight'], hint: "50 + 8", why: "50 = fifty, 8 = eight → **fifty-eight**." } },
      ],
    },
    {
      title: 'thirTEEN yoki THIRty? Urg\'u muhim!',
      blocks: [
        { t: 'p', md: "13–19 va 30–90 sonlari bir-biriga juda o'xshaydi. Ularni **urg'u** (qaysi bo'g'in kuchli aytilishi) ajratadi:\n• **-teen** sonlarida urg'u **oxirida**, \"ti:n\" cho'ziq: thir**TEEN**\n• **-ty** sonlarida urg'u **boshida**, \"ti\" qisqa: **THIR**ty" },
        {
          t: 'sounds', items: [
            { label: '13 / 30', say: 'thirteen, thirty', uz: "thir**TI:N** — **THIR**ti. \"th\" — tilni tishlar orasiga qo'yib aytiladi.", examples: ['thirteen', 'thirty'] },
            { label: '14 / 40', say: 'fourteen, forty', uz: "fo:**TI:N** — **FO:**ti", examples: ['fourteen', 'forty'] },
            { label: '15 / 50', say: 'fifteen, fifty', uz: "fif**TI:N** — **FIF**ti", examples: ['fifteen', 'fifty'] },
            { label: '16 / 60', say: 'sixteen, sixty', uz: "siks**TI:N** — **SIKS**ti", examples: ['sixteen', 'sixty'] },
            { label: '18 / 80', say: 'eighteen, eighty', uz: "ey**TI:N** — **EY**ti", examples: ['eighteen', 'eighty'] },
          ],
        },
        { t: 'tip', tone: 'warn', md: "Do'konda yoki telefonda bu xato qimmatga tushadi: *fifteen dollars* (15) va *fifty dollars* (50)! Shubha bo'lsa, so'rang: **\"One five or five zero?\"**" },
        { t: 'check', ex: { k: 'listen', say: 'forty', opts: ['14', '4', '40', '44'], a: 2, why: "Urg'u **boshida** — **FOR**ty = 40. fourteen (14) da urg'u oxirida bo'ladi." } },
      ],
    },
    {
      title: "Yosh: I'm 25",
      blocks: [
        { t: 'p', md: "Yosh haqida savol: **How old are you?** — Necha yoshdasiz?\nJavob **to be** (am / is / are) bilan beriladi. Ikki to'g'ri variant bor:\n• **I'm 25.**\n• **I'm 25 years old.**" },
        { t: 'compare', good: { title: "To'g'ri", items: ["I'm 25.", "I'm 25 years old.", 'She is 40.', 'My son is 3 years old.'] }, bad: { title: "Noto'g'ri", items: ['I have 25.', 'I have 25 years.', "I'm 25 years.", 'I am have 25.'] } },
        { t: 'tip', tone: 'warn', md: "Rus tilida \"мне 25 лет\" deyiladi, ba'zi tillarda \"25 yilim bor\" deyiladi. Ingliz tilida esa yosh — bu **holat**, shuning uchun **to be**: *I **am** 25.* \"years\" so'zi faqat **old** bilan birga keladi: *25 years **old***." },
        { t: 'dialog', lines: [
          { who: 'A', en: 'How old are you?', uz: 'Necha yoshdasiz?' },
          { who: 'B', en: "I'm twenty-four. And you?", uz: "Yigirma to'rt yoshdaman. Siz-chi?" },
          { who: 'A', en: "I'm thirty-one years old.", uz: "Men o'ttiz bir yoshdaman." },
          { who: 'B', en: 'How old is your brother?', uz: 'Akangiz necha yoshda?' },
          { who: 'A', en: "He's forty.", uz: 'U qirq yoshda.' },
        ] },
        { t: 'check', ex: { k: 'tf', q: "\"I have 30 years\" — yoshni aytishning to'g'ri usuli.", a: false, why: "Yosh **to be** bilan aytiladi: **I'm 30** yoki **I'm 30 years old**." } },
      ],
    },
    {
      title: 'Narx: How much is it?',
      blocks: [
        { t: 'p', md: "Narxni so'rash: **How much is it?** — Bu qancha turadi?\nBir nechta narsa uchun: **How much are they?**\nJavob: **It's 30 dollars.** / **They're 20 dollars.**" },
        { t: 'examples', items: [
          { en: 'How much is this bag?', uz: 'Bu sumka qancha turadi?' },
          { en: "It's forty-five dollars.", uz: "U qirq besh dollar.", note: "Yozuvda: **$45** — belgi oldinda, lekin o'qilganda **dollars** oxirida." },
          { en: 'How much are the apples?', uz: 'Olmalar qancha turadi?' },
          { en: "The price is sixty dollars.", uz: 'Narxi oltmish dollar.' },
          { en: 'This phone is cheap. It\'s ninety dollars.', uz: "Bu telefon arzon. U to'qson dollar." },
        ] },
        { t: 'tip', tone: 'info', md: "1 dan ko'p bo'lsa — **dollars** (ko'plik): *one dollar, two dollars*. O'zbek puli **sum** esa o'zgarmaydi: *one hundred sum*. Bonus: 1 000 — **thousand**: *50 000 sum = fifty thousand sum*." },
        { t: 'dialog', lines: [
          { who: 'Customer', en: 'Excuse me, how much is this shirt?', uz: "Kechirasiz, bu ko'ylak qancha turadi?" },
          { who: 'Seller', en: "It's thirty-five dollars.", uz: "O'ttiz besh dollar." },
          { who: 'Customer', en: 'Thirty-five or twenty-five?', uz: "O'ttiz beshmi yoki yigirma beshmi?" },
          { who: 'Seller', en: 'Thirty-five.', uz: "O'ttiz besh." },
          { who: 'Customer', en: "Hmm, it's expensive. Thank you!", uz: 'Hmm, qimmat ekan. Rahmat!' },
        ] },
        { t: 'check', ex: { k: 'choice', q: "Ikki sumkaning narxini so'rang:", opts: ['How much is the bags?', 'How much are the bags?', 'How many are the bags?', 'How much the bags are?'], a: 1, why: "Ko'plik (*bags*) — **are**: *How much **are** the bags?* \"How much\" — narx uchun." } },
      ],
    },
    {
      title: 'Telefon raqam',
      blocks: [
        { t: 'p', md: "Telefon raqam **raqamma-raqam** aytiladi, katta son sifatida emas:\n**90 123 45 67** → *nine oh, one two three, four five, six seven*" },
        {
          t: 'table', head: ['Qoida', 'Misol', 'Aytilishi'], speak: [2],
          rows: [
            ['Har bir raqam alohida', '123', 'one two three'],
            ['0 — "oh" yoki "zero"', '90', 'nine oh'],
            ['Ikki bir xil raqam — double', '55', 'double five'],
          ],
        },
        { t: 'dialog', lines: [
          { who: 'A', en: "What's your phone number?", uz: 'Telefon raqamingiz qanday?' },
          { who: 'B', en: "It's nine oh, double five, three two one, eight seven.", uz: '90 55 321 87.' },
          { who: 'A', en: 'Sorry, can you repeat, please?', uz: "Kechirasiz, takrorlay olasizmi?" },
        ] },
        { t: 'tip', tone: 'good', md: "Raqamni guruhlarga bo'lib, har guruhdan keyin qisqa pauza qiling — tinglovchiga yozib olish oson bo'ladi." },
        { t: 'check', ex: { k: 'choice', q: "**77** telefon raqamda odatda qanday aytiladi?", opts: ['seventy-seven', 'seven seventy', 'two seven', 'double seven'], a: 3, why: "Ikki bir xil raqam — **double seven**. *seven seven* ham tushunarli, lekin \"seventy-seven\" deyilmaydi." } },
      ],
    },
  ],
  words: [
    { en: 'thirty', uz: "o'ttiz (30)", ipa: 'ˈθɜː.ti', pos: 'number', ex: 'My teacher is thirty.', exUz: "O'qituvchim o'ttiz yoshda." },
    { en: 'forty', uz: 'qirq (40)', ipa: 'ˈfɔː.ti', pos: 'number', ex: "It's forty dollars.", exUz: 'Bu qirq dollar.' },
    { en: 'fifty', uz: 'ellik (50)', ipa: 'ˈfɪf.ti', pos: 'number', ex: 'My father is fifty years old.', exUz: 'Otam ellik yoshda.' },
    { en: 'sixty', uz: 'oltmish (60)', ipa: 'ˈsɪk.sti', pos: 'number', ex: 'The jacket is sixty dollars.', exUz: 'Kurtka oltmish dollar.' },
    { en: 'hundred', uz: 'yuz (100)', ipa: 'ˈhʌn.drəd', pos: 'number', ex: "It's a hundred dollars.", exUz: 'Bu yuz dollar.' },
    { en: 'price', uz: 'narx', ipa: 'praɪs', pos: 'noun', ex: 'The price is twenty dollars.', exUz: 'Narxi yigirma dollar.' },
    { en: 'money', uz: 'pul', ipa: 'ˈmʌn.i', pos: 'noun', ex: 'Where is my money?', exUz: 'Pulim qayerda?' },
    { en: 'dollar', uz: 'dollar', ipa: 'ˈdɒl.ə', pos: 'noun', ex: 'This cup is five dollars.', exUz: 'Bu piyola besh dollar.' },
    { en: 'sum', uz: "so'm (O'zbekiston puli)", ipa: 'sʌm', pos: 'noun', ex: 'The bread is five thousand sum.', exUz: "Non besh ming so'm." },
    { en: 'how much', uz: 'qancha (narx)', ipa: 'haʊ ˈmʌtʃ', pos: 'phrase', ex: 'How much is this phone?', exUz: 'Bu telefon qancha turadi?' },
  ],
  practice: [
    { k: 'listen', say: 'thirty', opts: ['13', '30', '33', '3'], a: 1, why: "Urg'u boshida: **THIR**ty = 30." },
    { k: 'listen', say: 'fifteen', opts: ['50', '5', '15', '55'], a: 2, why: "Urg'u oxirida, cho'ziq \"ti:n\": fif**TEEN** = 15." },
    { k: 'match', pairs: [['twenty', '20'], ['forty', '40'], ['fifty', '50'], ['seventy', '70'], ['ninety', '90']] },
    { k: 'choice', q: "**80** qanday yoziladi?", opts: ['eightty', 'eighteen', 'eighty', 'aighty'], a: 2, why: "80 — **eighty**, bitta **t** bilan." },
    { k: 'fill', q: '36 = ___', a: ['thirty-six', 'thirty six'], why: "30 = thirty, 6 = six → **thirty-six**." },
    { k: 'fill', q: '74 = ___', a: ['seventy-four', 'seventy four'], why: "**seventy-four** — chiziqcha bilan." },
    { k: 'listen', say: 'sixty-two', opts: ['62', '26', '16', '72'], a: 0, why: "**sixty-two** = 62." },
    { k: 'tf', q: "\"I'm 25 years\" — to'g'ri gap.", a: false, why: "\"years\" faqat **old** bilan keladi: *I'm 25 **years old*** yoki qisqa: *I'm 25*." },
    { k: 'fill', q: 'My mother ___ fifty years old.', a: ['is', "'s"], uz: 'Onam ellik yoshda.', why: "Yosh **to be** bilan: *My mother **is** fifty.*" },
    { k: 'order', uz: "Men o'ttiz yoshdaman.", words: ["I'm", 'thirty', 'years', 'old'], why: "Yosh: **I'm** + son + **years old**." },
    { k: 'choice', q: "Narxni so'rang: \"Bu kurtka qancha turadi?\"", opts: ['How many is this jacket?', 'How much this jacket?', 'How much is this jacket?', 'How old is this jacket?'], a: 2, why: "Narx — **How much is** + narsa?" },
    { k: 'fill', q: "It's twenty ___.", a: ['dollars'], uz: 'Bu yigirma dollar.', why: "1 dan ko'p — **dollars** (ko'plik -s)." },
    { k: 'choice', q: "Telefon raqamdagi **0** inglizlar ko'pincha qanday aytadi?", opts: ['"oh"', '"o\'n"', '"nol"', '"null"'], a: 0, why: "0 — **\"oh\"** (yoki *zero*)." },
    { k: 'translate', uz: 'Men yigirma besh yoshdaman.', a: ["I'm twenty-five", 'I am twenty-five', "I'm twenty five", 'I am twenty five', "I'm 25", 'I am 25', "I'm twenty-five years old", 'I am twenty-five years old', "I'm twenty five years old", 'I am twenty five years old', "I'm 25 years old", 'I am 25 years old'], why: "**I'm 25** yoki **I'm 25 years old**. \"I have 25\" — xato!" },
    { k: 'speak', say: 'thirteen, thirty, fourteen, forty', uz: "Urg'uga e'tibor berib takrorlang" },
    { k: 'translate', uz: 'Narxi qirq dollar.', a: ['The price is forty dollars', 'The price is 40 dollars', "It's forty dollars", 'It is forty dollars', 'The price is $40'], why: "narx — **price**: *The price is forty dollars.*" },
  ],
  quiz: [
    { k: 'listen', say: 'eighteen', opts: ['80', '8', '18', '88'], a: 2 },
    { k: 'listen', say: 'forty-nine', opts: ['94', '49', '19', '45'], a: 1 },
    { k: 'listen', say: 'seventy', opts: ['17', '7', '77', '70'], a: 3 },
    { k: 'fill', q: '43 = ___', a: ['forty-three', 'forty three'], why: "**forty-three** — \"fourty\" emas!" },
    { k: 'fill', q: '100 = a ___', a: ['hundred'] },
    { k: 'choice', q: "To'g'ri gapni tanlang:", opts: ['I have 30 years.', "I'm 30 years.", "I'm 30 years old.", 'I am have 30.'], a: 2, why: "**I'm 30 years old** (yoki *I'm 30*)." },
    { k: 'order', uz: 'Bu telefon qancha turadi?', words: ['How', 'much', 'is', 'this', 'phone'], extra: ['many', 'are'], why: "Narx: **How much is** + birlik narsa." },
    { k: 'translate', uz: 'Pulim qayerda?', a: ['Where is my money', "Where's my money"], why: "pul — **money**." },
    { k: 'match', pairs: [['price', 'narx'], ['money', 'pul'], ['sum', "so'm"], ['how much', 'qancha'], ['hundred', 'yuz']] },
    { k: 'translate', uz: "O'qituvchim qirq yoshda.", a: ['My teacher is forty', 'My teacher is 40', "My teacher's forty", 'My teacher is forty years old', 'My teacher is 40 years old', "My teacher's forty years old", "My teacher's 40"], why: "Yosh — **is** + son: *My teacher is forty.*" },
  ],
  summary: [
    "O'nliklar **-ty** bilan tugaydi: twenty, thirty, **forty** (u'siz!), fifty, sixty, seventy, eighty, ninety, **a hundred**.",
    "Murakkab son — chiziqcha bilan: **twenty-one, fifty-eight**.",
    "**-teen** (13–19) urg'u oxirida, **-ty** (30–90) urg'u boshida: thir**TEEN** / **THIR**ty.",
    "Yosh: **I'm 25** yoki **I'm 25 years old** — hech qachon \"I have 25\".",
    "Narx: **How much is it? — It's 30 dollars.** Telefon raqam — raqamma-raqam, 0 = **oh**, 55 = **double five**.",
  ],
  homework: "Oilangizdagi 5 kishining yoshini inglizcha yozing (*My father is fifty-two.*). Keyin uyingizdagi 3 ta narsaning taxminiy narxini ayting (*The phone is ninety dollars.*) va o'z telefon raqamingizni ovoz chiqarib 3 marta ayting.",
};

export default lesson;
