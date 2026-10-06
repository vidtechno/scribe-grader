import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: 'u2-l2',
  title: 'To be: am / is / are',
  titleUz: 'To be: am / is / are',
  goal: "**am / is / are** ni har bir olmosh va ism bilan to'g'ri tanlaysiz, qisqa shakllarni (**I'm, he's, they're**…) aytasiz va o'zingiz hamda boshqalar haqida *I'm tired, She's a teacher* kabi gaplar tuzasiz.",
  slides: [
    {
      title: "O'zbek tilida yo'q, ingliz tilida shart",
      blocks: [
        { t: 'p', md: "O'zbek tilida \"kim/nima/qanday\" gaplarida fe'l kerak emas — qo'shimcha yetarli: *Men talaba**man**. U charchagan. Biz tayyor**miz**.*" },
        { t: 'p', md: "Ingliz tilida bunday gapda **alohida so'z** shart: **am**, **is** yoki **are**. Bu uchta so'z bitta fe'lning shakllari — **to be** (bo'lmoq). Ular gapda ega va so'z o'rtasida \"ko'prik\" vazifasini bajaradi." },
        {
          t: 'compare',
          good: { title: "To'g'ri", items: ['I am a student.', 'She is tired.', 'We are ready.'] },
          bad: { title: "Noto'g'ri", items: ['I student.', 'She tired.', 'We ready.'] },
        },
        { t: 'tip', tone: 'warn', md: "**\"I student\"** — o'zbek o'quvchilarining **1-raqamli xatosi**. Inglizcha gapda deyarli doim fe'l bo'ladi. Fe'l yo'q bo'lsa, **am / is / are** kerakmi — tekshiring!" },
      ],
    },
    {
      title: 'Qaysi biri: am, is yoki are?',
      blocks: [
        {
          t: 'table', head: ['Olmosh', 'To be', 'Misol', "O'zbekcha"], speak: [2],
          rows: [
            ['I', 'am', 'I am happy.', 'Men xursandman.'],
            ['you', 'are', 'You are late.', 'Siz kechikdingiz.'],
            ['he', 'is', 'He is busy.', 'U band.'],
            ['she', 'is', 'She is tired.', 'U charchagan.'],
            ['it', 'is', 'It is ready.', 'U tayyor.'],
            ['we', 'are', 'We are hungry.', 'Biz ochmiz.'],
            ['they', 'are', 'They are fine.', 'Ular yaxshi.'],
          ],
        },
        { t: 'p', md: "Oddiy qoida:\n• **I** → faqat **am**\n• **he / she / it** (bitta odam yoki narsa) → **is**\n• **you / we / they** (va ko'plik) → **are**" },
        { t: 'tip', tone: 'good', md: "Yodlash usuli: **\"I am — yolg'iz, is — bitta, are — ko'p\"**. *you* bitta odam bo'lsa ham doim **are** bilan: *You **are** my friend.*" },
        { t: 'check', ex: { k: 'fill', q: 'We ___ hungry.', a: ['are'], uz: 'Biz ochmiz.', why: "**we** → **are**." } },
      ],
    },
    {
      title: "Qisqa shakllar: I'm, he's, they're",
      blocks: [
        { t: 'p', md: "Og'zaki nutqda va oddiy yozishmalarda inglizlar deyarli doim **qisqa shakl** ishlatadi. **am / is / are** ning birinchi harfi tushib, o'rniga apostrof **'** qo'yiladi." },
        {
          t: 'table', head: ["To'liq", 'Qisqa', 'Talaffuz'], speak: [1],
          rows: [
            ['I am', "I'm", '"aym"'],
            ['you are', "you're", '"yo:"'],
            ['he is', "he's", '"hi:z"'],
            ['she is', "she's", '"shi:z"'],
            ['it is', "it's", '"its"'],
            ['we are', "we're", '"uiə"'],
            ['they are', "they're", '"ðeə" (th jarangli)'],
          ],
        },
        {
          t: 'sounds', items: [
            { label: "he's / she's", say: "he's, she's", uz: "Oxirida **\"z\"** eshitiladi, \"s\" emas: **\"hi:z\"**, **\"shi:z\"**.", examples: ["he's busy", "she's happy"] },
            { label: "it's", say: "it's", uz: "Bu yerda **\"ts\"** — xuddi o'zbekcha \"ts\" kabi qisqa: **\"its\"**.", examples: ["it's ready", "it's fine"] },
            { label: "you're / they're", say: "you're, they're", uz: "**r** deyarli eshitilmaydi (britancha talaffuz): **\"yo:\"**, **\"ðeə\"**.", examples: ["you're late", "they're tired"] },
          ],
        },
        { t: 'tip', tone: 'info', md: "Rasmiy hujjat va insholarda **to'liq shakl** (*I am, it is*), suhbatda esa **qisqa shakl** (*I'm, it's*) tabiiy eshitiladi. Ikkalasi ham to'g'ri." },
        { t: 'check', ex: { k: 'listen', say: "They're tired.", opts: ["They're tired.", "She's tired.", "He's tired.", "We're tired."], a: 0, why: "**they're** = they are — \"ðeə\"." } },
      ],
    },
    {
      title: 'Ismlar va otlar bilan',
      blocks: [
        { t: 'p', md: "Olmosh o'rnida ism yoki ot bo'lishi mumkin. Shunda o'ylang: bu **bitta** (he/she/it) mi yoki **ko'p** (they) mi?" },
        {
          t: 'examples', items: [
            { en: 'Ali is hungry.', uz: 'Ali och.', note: "Ali = he → **is**" },
            { en: 'My teacher is busy.', uz: "O'qituvchim band.", note: "bitta odam → **is**" },
            { en: 'The cat is angry.', uz: "Mushukning jahli chiqqan.", note: "it → **is**" },
            { en: 'Ali and Vali are late.', uz: 'Ali va Vali kechikishdi.', note: "they → **are**" },
            { en: 'My friends are thirsty.', uz: "Do'stlarim chanqagan.", note: "ko'plik → **are**" },
          ],
        },
        {
          t: 'compare',
          good: { title: "To'g'ri", items: ['Ali is tired.', 'Ali and Malika are ready.', "Malika's busy."] },
          bad: { title: "Noto'g'ri", items: ['Ali are tired.', 'Ali and Malika is ready.', 'Malika busy.'] },
        },
        { t: 'check', ex: { k: 'choice', q: "*Aziz and Laylo ___ happy.*", opts: ['am', 'is', 'are', '—'], a: 2, why: "Ikki kishi = they → **are**." } },
      ],
    },
    {
      title: "Holat va his-tuyg'ular",
      blocks: [
        { t: 'p', md: "Ingliz tilida ko'p holatlar **to be + sifat** bilan aytiladi. O'zbekchada bu gaplar boshqacha tuzilgan bo'lishi mumkin — shuning uchun ularni butun ibora sifatida yodlang." },
        {
          t: 'examples', items: [
            { en: "I'm hungry.", uz: 'Qornim och.', note: "\"My stomach is hungry\" emas!" },
            { en: "I'm thirsty.", uz: 'Chanqadim.' },
            { en: "I'm tired.", uz: 'Charchadim.' },
            { en: "I'm late.", uz: 'Kechikdim.', note: "\"I late\" emas — **am** shart." },
            { en: "I'm ready.", uz: 'Men tayyorman.' },
            { en: "She's busy.", uz: 'U band.' },
            { en: "He's angry.", uz: 'Uning jahli chiqqan.' },
            { en: "We're happy.", uz: 'Biz xursandmiz.' },
            { en: "They're sad.", uz: "Ular xafa (g'amgin)." },
            { en: "I'm fine.", uz: 'Men yaxshiman.' },
          ],
        },
        { t: 'tip', tone: 'info', md: "Yosh ham **to be** bilan aytiladi: *I'm 18.* = Men 18 yoshdaman. (*I have 18* — noto'g'ri!)" },
        { t: 'check', ex: { k: 'translate', uz: 'Charchadim.', a: ["I'm tired", 'I am tired'], why: "Ingliz tilida: **I am tired** (Men charchaganman)." } },
      ],
    },
    {
      title: 'Suhbat: How are you?',
      blocks: [
        { t: 'p', md: "*How are you?* (Qalaysiz?) savolida ham **are** bor. Javobda **I'm** ishlatamiz." },
        {
          t: 'dialog', lines: [
            { who: 'Malika', en: 'Hi, Aziz! How are you?', uz: 'Salom, Aziz! Qalaysan?' },
            { who: 'Aziz', en: "I'm fine, thanks. And you?", uz: 'Yaxshi, rahmat. Sen-chi?' },
            { who: 'Malika', en: "I'm tired and hungry.", uz: 'Charchadim va qornim och.' },
            { who: 'Aziz', en: 'Oh! Lunch is ready. Tom and Sara are here.', uz: "O! Tushlik (lunch) tayyor. Tom va Sara shu yerda (here)." },
            { who: 'Malika', en: "Great! I'm happy now.", uz: "Zo'r! Endi xursandman." },
          ],
        },
        { t: 'tip', tone: 'good', md: "Javobni eslab qoling: **\"I'm fine, thanks. And you?\"** — eng ko'p ishlatiladigan javob." },
        { t: 'check', ex: { k: 'order', uz: "Tom va Sara band.", words: ['Tom', 'and', 'Sara', 'are', 'busy'], extra: ['is'], why: "Ikki kishi — **are**." } },
      ],
    },
  ],
  words: [
    { en: 'happy', uz: 'xursand, baxtli', ipa: 'ˈhæp.i', pos: 'adj', ex: "I'm happy.", exUz: 'Men xursandman.' },
    { en: 'sad', uz: "xafa, g'amgin", ipa: 'sæd', pos: 'adj', ex: 'She is sad.', exUz: 'U xafa.' },
    { en: 'tired', uz: 'charchagan', ipa: 'ˈtaɪəd', pos: 'adj', ex: "We're tired.", exUz: 'Biz charchadik.' },
    { en: 'hungry', uz: 'och (qorni och)', ipa: 'ˈhʌŋ.ɡri', pos: 'adj', ex: 'The boy is hungry.', exUz: "O'g'il bolaning qorni och." },
    { en: 'thirsty', uz: 'chanqagan', ipa: 'ˈθɜː.sti', pos: 'adj', ex: "I'm thirsty.", exUz: 'Chanqadim.' },
    { en: 'busy', uz: 'band', ipa: 'ˈbɪz.i', pos: 'adj', ex: 'My teacher is busy.', exUz: "O'qituvchim band." },
    { en: 'ready', uz: 'tayyor', ipa: 'ˈred.i', pos: 'adj', ex: 'Are you ready?', exUz: 'Tayyormisiz?' },
    { en: 'late', uz: 'kechikkan, kech', ipa: 'leɪt', pos: 'adj', ex: "You're late!", exUz: 'Kechikdingiz!' },
    { en: 'angry', uz: "jahli chiqqan, g'azablangan", ipa: 'ˈæŋ.ɡri', pos: 'adj', ex: 'He is angry.', exUz: 'Uning jahli chiqqan.' },
    { en: 'fine', uz: 'yaxshi (sog\')', ipa: 'faɪn', pos: 'adj', ex: "I'm fine, thanks.", exUz: 'Yaxshiman, rahmat.' },
  ],
  practice: [
    { k: 'choice', q: "*I ___ a student.*", opts: ['is', 'are', 'am', 'be'], a: 2, why: "**I** bilan faqat **am**." },
    { k: 'choice', q: "*She ___ busy.*", opts: ['is', 'am', 'are', '—'], a: 0, why: "**she** → **is**. Bo'sh qoldirib bo'lmaydi!" },
    { k: 'match', pairs: [["I'm", 'I am'], ["he's", 'he is'], ["we're", 'we are'], ["it's", 'it is'], ["they're", 'they are']] },
    { k: 'listen', say: "She's hungry.", opts: ["He's hungry.", "She's hungry.", "She's angry.", "She hungry."], a: 1, why: "**she's** — \"shi:z\", **hungry** — \"hangri\"." },
    { k: 'listen', say: "We're late.", opts: ["We're late.", "We're ready.", "They're late.", "You're late."], a: 0 },
    { k: 'match', pairs: [['tired', 'charchagan'], ['hungry', 'qorni och'], ['thirsty', 'chanqagan'], ['busy', 'band'], ['angry', "jahli chiqqan"]] },
    { k: 'tf', q: "**you** bitta odam bo'lsa, *you is* deyiladi.", a: false, why: "**you** har doim **are** bilan: *You are…*" },
    { k: 'fill', q: 'Ali ___ thirsty.', a: ['is'], uz: 'Ali chanqagan.', why: "Ali = he → **is**." },
    { k: 'fill', q: 'My friends ___ ready.', a: ['are'], uz: "Do'stlarim tayyor.", why: "Ko'plik (they) → **are**." },
    { k: 'fill', q: '___ happy. (I am)', a: ["I'm"], hint: "Qisqa shaklda yozing", why: "**I am** → **I'm**." },
    { k: 'choice', q: "Qaysi gap **to'g'ri**?", opts: ['I tired.', 'I am tired.', 'I is tired.', 'Me tired.'], a: 1, why: "**am** shart: *I am tired.*" },
    { k: 'order', uz: "O'qituvchim kechikdi.", words: ['My', 'teacher', 'is', 'late'], extra: ['are'], why: "Bitta odam — **is**." },
    { k: 'order', uz: 'Biz xursandmiz.', words: ["We're", 'happy'], extra: ['is'], alt: [['We', 'are', 'happy']] },
    { k: 'translate', uz: 'Qornim och.', a: ["I'm hungry", 'I am hungry'], why: "Inglizcha: **I'm hungry.**" },
    { k: 'translate', uz: 'Ular xafa.', a: ["They're sad", 'They are sad'], why: "**They are sad.**" },
    { k: 'speak', say: "I'm fine, thanks. And you?", uz: "Javobni ovoz chiqarib ayting" },
  ],
  quiz: [
    { k: 'listen', say: "He's busy.", opts: ["He's busy.", "She's busy.", "He's happy.", "He busy."], a: 0 },
    { k: 'choice', q: "*Aziz and I ___ classmates.*", opts: ['am', 'is', 'are', 'be'], a: 2, why: "Aziz va men = we → **are**." },
    { k: 'choice', q: "*The cat ___ hungry.*", opts: ['are', 'am', '—', 'is'], a: 3, why: "it → **is**." },
    { k: 'fill', q: 'You ___ late!', a: ['are'], uz: 'Kechikdingiz!' },
    { k: 'fill', q: 'Malika ___ angry.', a: ['is'], uz: 'Malikaning jahli chiqqan.' },
    { k: 'fill', q: '___ ready. (they are)', a: ["They're"], hint: 'Qisqa shakl' },
    { k: 'translate', uz: 'U charchagan (ayol).', a: ["She's tired", 'She is tired'] },
    { k: 'translate', uz: 'Biz yaxshimiz, rahmat.', a: ["We're fine, thanks", 'We are fine, thanks', "We're fine, thank you", 'We are fine, thank you', "We're fine thanks", 'We are fine thanks'], why: "**We're fine, thanks.** — *we* bilan **are**." },
    { k: 'order', uz: "Mehmonlar chanqagan.", words: ['The', 'guests', 'are', 'thirsty'], extra: ['is'] },
    { k: 'match', pairs: [['happy', 'xursand'], ['sad', 'xafa'], ['ready', 'tayyor'], ['late', 'kechikkan'], ['fine', 'yaxshi']] },
  ],
  summary: [
    "Ingliz tilida \"kim/qanday\" gaplarida **to be** shart: *I am a student*, \"I student\" emas.",
    "**I → am**, **he / she / it → is**, **you / we / they → are**.",
    "Qisqa shakllar: **I'm, you're, he's, she's, it's, we're, they're**.",
    "Holatlar to be bilan: **I'm hungry, I'm tired, I'm late, I'm 18**.",
    "Yangi so'zlar: happy, sad, tired, hungry, thirsty, busy, ready, late, angry, fine.",
  ],
  homework: "O'zingiz, oilangiz va do'stlaringiz haqida bugungi holatni yozing: 6 ta gap, har birida boshqa olmosh (*I'm tired. My friend is busy. We're happy…*). Keyin har birini qisqa shaklda ovoz chiqarib o'qing.",
};

export default lesson;
