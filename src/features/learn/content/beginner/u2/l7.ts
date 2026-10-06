import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: 'u2-l7',
  title: "my, your, his… and 's",
  titleUz: "Egalik: my, your, his… va 's",
  goal: "Egalikni **my, your, his, her, its, our, their** va **'s** (*Ali's car*) bilan ifodalaysiz, **his / her** ni egasiga qarab tanlaysiz, **it's** va **its** ni ajratasiz hamda o'zingiz haqidagi shaxsiy ma'lumotni (familiya, manzil, telefon raqami, email) aytasiz.",
  slides: [
    {
      title: "Qo'shimcha emas — alohida so'z",
      blocks: [
        { t: 'p', md: "O'zbek tilida egalik **qo'shimcha** bilan bildiriladi: *kitob**im**, kitob**ing**, kitob**i**, kitob**imiz***. Ingliz tilida esa **otdan oldin alohida so'z** qo'yiladi, ot esa o'zgarmaydi:" },
        {
          t: 'table', head: ['Olmosh', 'Egalik', 'Misol', "O'zbekcha"], speak: [2],
          rows: [
            ['I', 'my', 'my car', 'mashina**m**'],
            ['you', 'your', 'your house', 'uy**ingiz**'],
            ['he', 'his', 'his room', 'uning xona**si** (erkak)'],
            ['she', 'her', 'her email', 'uning email**i** (ayol)'],
            ['it', 'its', 'its name', 'uning nomi (narsa)'],
            ['we', 'our', 'our address', 'manzil**imiz**'],
            ['they', 'their', 'their car', 'ularning mashina**si**'],
          ],
        },
        {
          t: 'compare',
          good: { title: "To'g'ri", items: ['my car', 'This is our house.', 'Their room is clean.'] },
          bad: { title: "Noto'g'ri", items: ['car my', 'This is we house.', 'They room is clean.'] },
        },
        { t: 'check', ex: { k: 'fill', q: 'We are at ___ house.', a: ['our'], uz: 'Biz uyimizdamiz.', why: "we → **our**." } },
      ],
    },
    {
      title: 'Talaffuz: your, our, their, his',
      blocks: [
        {
          t: 'sounds', items: [
            { label: 'your', say: 'your', uz: "**\"yo:\"** — *you're* (you are) bilan bir xil eshitiladi.", examples: ['your car', 'your room'] },
            { label: 'our', say: 'our', uz: "**\"auə\"** — *hour* (soat) bilan bir xil! \"our\" deb harflab o'qimang.", examples: ['our house', 'our address'] },
            { label: 'their', say: 'their', uz: "**\"ðeə\"** — *they're* bilan bir xil. **th** — til tishlar orasida.", examples: ['their car', 'their room'] },
            { label: 'his / he\'s', say: "his, he's", uz: "**his** — qisqa \"hiz\"; **he's** — cho'ziq \"hi:z\". Ma'nosi boshqa: *his car* (uning mashinasi), *he's tired* (u charchagan).", examples: ['his car', "he's busy"] },
          ],
        },
        { t: 'tip', tone: 'warn', md: "Bir xil eshitiladigan, lekin boshqa yoziladigan juftlar: **your / you're**, **their / they're**, **its / it's**. Yozganda ma'nosiga qarang!" },
        { t: 'check', ex: { k: 'listen', say: 'our house', opts: ['our house', 'her house', 'your house', 'their house'], a: 0, why: "**our** \"auə\" deb aytiladi — *our house* (bizning uyimiz)." } },
      ],
    },
    {
      title: 'his yoki her? — egasiga qarang',
      blocks: [
        { t: 'p', md: "O'zbekchada **uning** — bitta so'z. Ingliz tilida **egasi erkak bo'lsa — his**, **ayol bo'lsa — her**. Narsaning o'zi muhim emas!" },
        {
          t: 'examples', items: [
            { en: 'Aziz and his wife', uz: 'Aziz va uning xotini', note: "egasi Aziz (erkak) → **his**" },
            { en: 'Malika and her husband', uz: 'Malika va uning eri', note: "egasi Malika (ayol) → **her**" },
            { en: 'This is Tom. His surname is Smith.', uz: 'Bu Tom. Uning familiyasi Smit.' },
            { en: 'This is Sara. Her birthday is today.', uz: "Bu Sara. Uning tug'ilgan kuni bugun." },
          ],
        },
        {
          t: 'compare',
          good: { title: "To'g'ri", items: ['Aziz is with his wife.', 'Malika and her car', 'Tom is in his room.'] },
          bad: { title: "Noto'g'ri", items: ['Aziz is with her wife.', 'Malika and his car', 'Tom is in her room.'] },
        },
        { t: 'tip', tone: 'warn', md: "Xatoning sababi: \"wife\" ayol bo'lgani uchun *her* deyish. Yo'q — **kimning** xotini? Azizning → **his** wife." },
        { t: 'check', ex: { k: 'choice', q: "*Laylo is at home with ___ husband.*", opts: ['his', 'her', 'their', 'its'], a: 1, why: "Ega — Laylo (ayol) → **her** husband." } },
      ],
    },
    {
      title: "'s — Alining mashinasi",
      blocks: [
        { t: 'p', md: "Ism yoki ot bilan egalik **'s** bilan yasaladi. O'zbekchadagi **-ning** ga o'xshaydi: *Ali**ning** mashinasi* → **Ali's car**." },
        {
          t: 'examples', items: [
            { en: "Ali's car", uz: 'Alining mashinasi' },
            { en: "my friend's house", uz: "do'stimning uyi" },
            { en: "the teacher's email", uz: "o'qituvchining emaili" },
            { en: "Malika's phone number", uz: 'Malikaning telefon raqami' },
            { en: "the students' room", uz: "talabalarning xonasi", note: "ko'plikdagi **-s** dan keyin faqat **'** qo'yiladi" },
          ],
        },
        {
          t: 'compare',
          good: { title: "To'g'ri", items: ["Ali's car", "my friend's room"] },
          bad: { title: "Noto'g'ri", items: ['car of Ali', "Ali car", "car Ali's"] },
        },
        { t: 'tip', tone: 'info', md: "**'s** ikki xil bo'lishi mumkin: *Ali**'s** tired* = Ali **is** tired; *Ali**'s** car* = Alining mashinasi. Keyingi so'zga qarang: ot bo'lsa — egalik." },
        { t: 'check', ex: { k: 'translate', uz: 'Azizning uyi', a: ["Aziz's house", "Aziz's home"], why: "**Aziz's house** — *'s* bilan." } },
      ],
    },
    {
      title: "it's yoki its?",
      blocks: [
        { t: 'p', md: "Hatto inglizlar ham adashtiradigan juftlik:\n• **it's** = **it is** (u … dir): *It's a big house.*\n• **its** = uning (narsa yoki hayvonning): *The cat is in **its** box.*" },
        {
          t: 'examples', items: [
            { en: "It's my car.", uz: 'Bu mening mashinam.', note: "it's = it is" },
            { en: 'The car is old, but its colour is beautiful.', uz: 'Mashina eski, lekin uning rangi chiroyli.', note: "its = uning" },
            { en: "It's a cat. Its name is Tom.", uz: 'Bu mushuk. Uning ismi Tom.' },
          ],
        },
        { t: 'tip', tone: 'good', md: "Tekshirish usuli: **it is** deb o'qib ko'ring. Ma'no saqlansa — **it's**, buzilsa — **its**." },
        { t: 'check', ex: { k: 'choice', q: "*The house is big. ___ rooms are clean.*", opts: ["It's", 'Its', 'It', 'His'], a: 1, why: "\"It is rooms\" — ma'nosiz. Uyning xonalari → **Its**." } },
      ],
    },
    {
      title: "Shaxsiy ma'lumotlar",
      blocks: [
        { t: 'p', md: "Anketa to'ldirish yoki tanishishda kerak bo'ladigan iboralar. *What's…?* — \"… qanday?\" (tayyor ibora sifatida yodlang)." },
        {
          t: 'examples', items: [
            { en: "What's your surname? — It's Karimov.", uz: 'Familiyangiz nima? — Karimov.' },
            { en: "What's your address? — It's 12 Navoi Street.", uz: "Manzilingiz qanday? — Navoiy ko'chasi, 12." },
            { en: "What's your phone number? — It's nine oh, one two three, four five, six seven.", uz: 'Telefon raqamingiz qanday? — 90 123 45 67.' },
            { en: "What's your email? — It's aziz@mail.uz.", uz: 'Emailingiz qanday? — aziz@mail.uz.', note: "**@** — \"at\", **.** — \"dot\" deb o'qiladi" },
          ],
        },
        {
          t: 'dialog', lines: [
            { who: 'Receptionist', en: "Hello. What's your name, please?", uz: 'Salom. Ismingiz nima?' },
            { who: 'Lola', en: "My name's Lola. My surname is Rashidova.", uz: 'Ismim Lola. Familiyam Rashidova.' },
            { who: 'Receptionist', en: 'How do you spell your surname?', uz: 'Familiyangiz qanday yoziladi?' },
            { who: 'Lola', en: 'R-A-S-H-I-D-O-V-A.', uz: 'R-A-S-H-I-D-O-V-A.' },
            { who: 'Receptionist', en: "Thank you. And what's your phone number?", uz: 'Rahmat. Telefon raqamingiz-chi?' },
            { who: 'Lola', en: "It's nine oh, one two three, four five, six seven. And my husband's number is nine three, seven six five, four three, two one.", uz: 'Raqamim 90 123 45 67. Erimning raqami esa 93 765 43 21.' },
          ],
        },
        { t: 'check', ex: { k: 'order', uz: 'Uning manzili Navoiy ko\'chasi, 12 (ayol).', words: ['Her', 'address', 'is', '12', 'Navoi', 'Street'], extra: ['His'] } },
      ],
    },
  ],
  words: [
    { en: 'surname', uz: 'familiya', ipa: 'ˈsɜː.neɪm', pos: 'noun', ex: 'My surname is Karimov.', exUz: 'Familiyam Karimov.' },
    { en: 'address', uz: 'manzil', ipa: 'əˈdres', pos: 'noun', ex: "What's your address?", exUz: 'Manzilingiz qanday?' },
    { en: 'phone number', uz: 'telefon raqami', ipa: 'ˈfəʊn ˌnʌm.bə', pos: 'phrase', ex: "What's her phone number?", exUz: 'Uning telefon raqami qanday?' },
    { en: 'email', uz: 'elektron pochta, email', ipa: 'ˈiː.meɪl', pos: 'noun', ex: "What's your email?", exUz: 'Emailingiz qanday?' },
    { en: 'birthday', uz: "tug'ilgan kun", ipa: 'ˈbɜːθ.deɪ', pos: 'noun', ex: "It's my birthday today!", exUz: "Bugun mening tug'ilgan kunim!" },
    { en: 'car', uz: 'mashina, avtomobil', ipa: 'kɑː', pos: 'noun', ex: "Ali's car is red.", exUz: 'Alining mashinasi qizil.' },
    { en: 'house', uz: 'uy (bino)', ipa: 'haʊs', pos: 'noun', ex: 'Our house is big.', exUz: 'Bizning uyimiz katta.' },
    { en: 'room', uz: 'xona', ipa: 'ruːm', pos: 'noun', ex: 'His room is clean.', exUz: 'Uning xonasi toza.' },
    { en: 'wife', uz: 'xotin, rafiqa', ipa: 'waɪf', pos: 'noun', ex: 'This is my wife, Lola.', exUz: 'Bu mening rafiqam Lola.' },
    { en: 'husband', uz: 'er, turmush o\'rtoq', ipa: 'ˈhʌz.bənd', pos: 'noun', ex: 'Her husband is a teacher.', exUz: "Uning eri o'qituvchi." },
  ],
  practice: [
    { k: 'match', pairs: [['I', 'my'], ['you', 'your'], ['he', 'his'], ['she', 'her'], ['we', 'our'], ['they', 'their']] },
    { k: 'listen', say: 'their car', opts: ['our car', 'their car', 'her car', 'they car'], a: 1 },
    { k: 'choice', q: "*Tom is with ___ wife.*", opts: ['her', 'its', 'his', 'their'], a: 2, why: "Ega — Tom (erkak) → **his** wife." },
    { k: 'choice', q: "*Sara and Ali are at ___ house.*", opts: ['their', 'they', "they're", 'there'], a: 0, why: "Ular → **their** (ularning)." },
    { k: 'choice', q: "Qaysi to'g'ri? *Alining xonasi*", opts: ['room of Ali', "Ali's room", "room Ali's", 'Ali room'], a: 1 },
    { k: 'match', pairs: [['surname', 'familiya'], ['address', 'manzil'], ['birthday', "tug'ilgan kun"], ['wife', 'xotin'], ['husband', 'er'], ['room', 'xona']] },
    { k: 'tf', q: "*its* = *it is*.", a: false, why: "**it's** = it is. **its** — uning (narsa)." },
    { k: 'tf', q: "*our* so'zi *hour* bilan bir xil talaffuz qilinadi.", a: true, why: "Ha, ikkalasi ham \"auə\"." },
    { k: 'fill', q: 'I am Lola. ___ surname is Rashidova.', a: ['My'], why: "I → **My**." },
    { k: 'fill', q: 'Malika is at home. ___ car is at work.', a: ['Her'], uz: 'Malika uyda. Uning mashinasi ishda.', why: "Malika → **Her**." },
    { k: 'fill', q: 'The cat is hungry. ___ name is Tom.', a: ['Its'], why: "Mushukning → **Its** (it's emas!)." },
    { k: 'fill', q: "This is my friend___ house.", a: ["'s"], hint: "do'stimning", why: "**friend's** house — do'stimning uyi." },
    { k: 'order', uz: "Uning eri o'qituvchi (ayolning eri).", words: ['Her', 'husband', 'is', 'a', 'teacher'], extra: ['His'], why: "Ayolning eri → **Her** husband." },
    { k: 'translate', uz: 'Bizning uyimiz katta.', a: ['Our house is big', 'Our home is big'] },
    { k: 'translate', uz: 'Emailingiz qanday?', a: ["What's your email", 'What is your email', "What's your email address", 'What is your email address', "What's your e-mail", 'What is your e-mail'] },
    { k: 'speak', say: "My surname is Karimov. What's your phone number?", uz: "O'zingiz haqida shunday ayting va savol bering" },
  ],
  quiz: [
    { k: 'listen', say: "It's his room.", opts: ["It's his room.", "It's he's room.", "It's her room.", "It's his house."], a: 0 },
    { k: 'choice', q: "*Aziz and ___ wife are at home.*", opts: ['her', 'his', 'its', 'he'], a: 1 },
    { k: 'choice', q: "*___ a beautiful house.*", opts: ['Its', "It's", 'His', 'Our'], a: 1, why: "It is a beautiful house → **It's**." },
    { k: 'fill', q: 'They are at ___ house.', a: ['their'] },
    { k: 'fill', q: "Is this Sara___ phone?", a: ["'s"], hint: 'Saraning' },
    { k: 'fill', q: 'You and I are students. ___ teacher is young.', a: ['Our'] },
    { k: 'translate', uz: 'Alining mashinasi', a: ["Ali's car"] },
    { k: 'translate', uz: "Uning tug'ilgan kuni bugun (erkak).", a: ['His birthday is today', "It's his birthday today", 'It is his birthday today', "Today is his birthday"] },
    { k: 'order', uz: 'Familiyangiz qanday?', words: ["What's", 'your', 'surname'], extra: ['you'], alt: [['What', 'is', 'your', 'surname']] },
    { k: 'match', pairs: [['phone number', 'telefon raqami'], ['email', 'email'], ['car', 'mashina'], ['house', 'uy (bino)'], ['address', 'manzil']] },
  ],
  summary: [
    "Egalik so'zlari otdan oldin: **my, your, his, her, its, our, their** + ot.",
    "**his** — egasi erkak, **her** — egasi ayol: *Aziz and **his** wife*, *Malika and **her** husband*.",
    "Ismlar bilan **'s**: *Ali's car*, *my friend's house* (\"car of Ali\" emas).",
    "**it's** = it is; **its** = uning (narsa). **your / you're**, **their / they're** — bir xil eshitiladi.",
    "Yangi so'zlar: surname, address, phone number, email, birthday, car, house, room, wife, husband.",
  ],
  homework: "O'zingiz uchun kichik anketa yozing: *My name is… My surname is… My address is… My phone number is… My email is…* Keyin bitta do'stingiz haqida xuddi shunday yozing, **his** yoki **her** bilan.",
};

export default lesson;
