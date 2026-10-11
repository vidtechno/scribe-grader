import type { Lesson } from '../../../types';

// Mini lesson (review): whole unit u5. Recycles weather, work, school, football, bank, tall, old, friend, home, tea.
const lesson: Lesson = {
  id: 'u5-l12',
  title: 'Past and future: final review',
  titleUz: "O'tgan va kelasi zamon: yakuniy takror",
  mini: true,
  goal: "5-bo'lim bo'yicha **yakuniy takror**: Present Simple va Continuous, **was / were**, Past Simple, **be going to**, **will** va qiyoslash darajalarini bitta suhbatda aralashtirib ishlatasiz.",
  slides: [
    {
      title: 'Takror: bir suhbatda hammasi',
      blocks: [
        { t: 'p', md: "Bu suhbatda butun bo'lim qoidalari uchraydi: **hozir** (*is raining*), **odat** (*usually*), **o'tgan** (*was, went*), **reja** (*going to*), **qaror** (*'ll*) va **solishtirish** (*bigger*)." },
        { t: 'dialog', lines: [
          { who: 'Karim', en: "Hi, Lola! What are you doing? It's raining, so I'm at home.", uz: "Salom, Lola! Nima qilyapsan? Yomg'ir yog'yapti, men uydaman." },
          { who: 'Lola', en: "I'm cooking dinner. I usually cook on Sundays.", uz: "Kechki ovqat tayyorlayapman. Odatda yakshanba kunlari pishiraman." },
          { who: 'Karim', en: 'Yesterday was sunny and warm. I went to the park with my cousin.', uz: "Kecha ob-havo quyoshli va iliq edi. Amakivachcham bilan bog'ga bordim." },
          { who: 'Lola', en: "I didn't go out. I was tired. Tomorrow I'm going to visit my grandmother.", uz: "Men chiqmadim. Charchagan edim. Ertaga buvimnikiga bormoqchiman." },
          { who: 'Karim', en: "It's far from here. I'll drive you! My car is bigger than the bus.", uz: "U bu yerdan uzoq. Men olib boraman! Mashinam avtobusdan kattaroq." },
          { who: 'Lola', en: "Thanks! You're the kindest friend.", uz: "Rahmat! Sen eng mehribon do'stsan." },
        ] },
        { t: 'check', ex: { k: 'choice', q: 'Lola: "I ___ go out yesterday."', opts: ["didn't", "don't", "wasn't", "isn't"], a: 0, why: "O'tgan zamon, inkor: **didn't** + go." } },
      ],
    },
    {
      title: 'Qaysi shaklni tanlash kerak?',
      blocks: [
        { t: 'table', head: ['Belgi / holat', 'Shakl', 'Misol'], rows: [
          ['usually, every day', 'Present Simple', 'I cook on Sundays.'],
          ['now, at the moment', 'Present Continuous', "I'm cooking now."],
          ['yesterday, last week, ago', 'was / were; Past Simple', 'It was warm. We went home.'],
          ['reja, tomorrow, next week', 'be going to', "I'm going to visit her."],
          ["joyida qaror, va'da", 'will', "I'll help you."],
          ['than / the -est', 'comparative / superlative', 'bigger than; the best'],
        ] },
        { t: 'tip', tone: 'info', md: "Avval **vaqt belgisiga** qarang: *now* → Continuous, *yesterday* → Past, *tomorrow* → going to / will. Keyin shakl tanlang." },
        { t: 'check', ex: { k: 'fill', q: 'Look! The children ___ in the park now. (play)', a: ['are playing'], uz: "Qarang! Bolalar hozir bog'da o'ynayapti.", why: "*now / Look!* → **are playing**." } },
      ],
    },
    {
      title: "Ehtiyot bo'ling: tez-tez uchraydigan xatolar",
      blocks: [
        { t: 'compare', good: { title: "To'g'ri", items: ["I didn't go to work.", 'We were at home.', "I'm going to travel.", 'It is bigger than that.'] }, bad: { title: "Noto'g'ri", items: ["I didn't went to work.", 'We was at home.', "I going to travel.", 'It is more bigger than that.'] } },
        { t: 'p', md: "Eslatma: **didn't / did** + oddiy fe'l; **will** + oddiy fe'l; **going to** oldidan **am / is / are**; **-er** bilan **more** birga emas." },
        { t: 'check', ex: { k: 'choice', q: 'Choose the correct sentence:', opts: ['She was at school yesterday.', 'She were at school yesterday.', 'She is at school yesterday.', 'She did at school yesterday.'], a: 0, why: "**she** + yesterday → **was**." } },
      ],
    },
  ],
  words: [
    { en: 'grandmother', uz: 'buvi', ipa: 'ˈɡræn.mʌð.ər', pos: 'noun', ex: 'I visited my grandmother last week.', exUz: "O'tgan hafta buvimnikiga bordim." },
    { en: 'kind', uz: 'mehribon', ipa: 'kaɪnd', pos: 'adjective', ex: 'My teacher is very kind.', exUz: 'Ustozim juda mehribon.' },
    { en: 'drive', uz: 'mashina haydamoq', ipa: 'draɪv', pos: 'verb', ex: 'My father drives to work.', exUz: 'Otam ishga mashinada boradi.' },
    { en: 'dinner', uz: 'kechki ovqat', ipa: 'ˈdɪn.ər', pos: 'noun', ex: 'We had dinner at eight.', exUz: 'Soat sakkizda kechki ovqat qildik.' },
  ],
  practice: [
    { k: 'choice', q: 'She usually ___ tea in the morning.', opts: ['drinks', 'is drinking', 'drank', 'will drink'], a: 0, why: "*usually* → Present Simple." },
    { k: 'fill', q: 'They ___ at home last night. (be)', a: ['were'], uz: 'Ular kecha kechqurun uyda edi.', why: "**they** → **were**." },
    { k: 'order', uz: 'Kecha biz kinoga bordik.', words: ['We', 'went', 'to', 'the', 'cinema', 'yesterday'], extra: ['go', 'were'] },
    { k: 'translate', uz: "Ertaga do'stimnikiga boraman.", a: ["I'm going to visit my friend tomorrow.", "I'll visit my friend tomorrow.", 'I am going to visit my friend tomorrow.', "I'm going to see my friend tomorrow."] },
    { k: 'match', pairs: [['kind', 'mehribon'], ['drive', 'mashina haydamoq'], ['dinner', 'kechki ovqat'], ['grandmother', 'buvi'], ['weather', 'ob-havo']] },
    { k: 'tf', q: "*Did you went to school?* — gap to'g'ri.", a: false, why: "To'g'risi: *Did you **go** to school?*" },
    { k: 'listen', say: "I'm going to visit my grandmother.", opts: ["I'm going to visit my grandmother.", 'I visited my grandmother.', "I'll visit my grandmother.", "I'm visiting my grandmother."], a: 0 },
    { k: 'dictation', say: 'It was sunny yesterday.', a: ['It was sunny yesterday.'] },
    { k: 'fix', wrong: 'My car is more bigger than yours.', a: ['My car is bigger than yours.'], why: "**more** va **-er** birga ishlatilmaydi." },
    { k: 'fill', q: "It's cold. I ___ close the window.", a: ["'ll", 'will', 'll'], uz: 'Sovuq. Derazani yopaman.', why: "Joyida qaror — **will**." },
    { k: 'speak', say: 'Yesterday I went to the park with my friend.', uz: "Kecha do'stim bilan bog'ga bordim." },
  ],
  quiz: [
    { k: 'choice', q: 'Look at the clouds! It ___ rain.', opts: ["is going to", 'did', 'was', 'goes'], a: 0 },
    { k: 'fill', q: 'I ___ my homework yesterday. (do)', a: ['did'], why: "do – **did**." },
    { k: 'order', uz: "Men hozir kechki ovqat tayyorlayapman.", words: ["I'm", 'cooking', 'dinner', 'now'], extra: ['cook', 'cooked'], alt: [['I', 'am', 'cooking', 'dinner', 'now']] },
    { k: 'translate', uz: "U mendan baland.", a: ['He is taller than me.', 'She is taller than me.', 'He is taller than I am.', 'She is taller than I am.'] },
    { k: 'tf', q: "*I'll help you* — va'da yoki joyida qaror.", a: true },
    { k: 'fix', wrong: 'He was go to work yesterday.', a: ['He went to work yesterday.'], why: "go – **went**; *was* kerak emas." },
    { k: 'match', pairs: [['go', 'went'], ['see', 'saw'], ['buy', 'bought'], ['good', 'best']] },
    { k: 'choice', q: 'This is ___ film of the year.', opts: ['the best', 'better', 'the goodest', 'more good'], a: 0 },
  ],
  summary: [
    "Vaqt belgisiga qarang: **now** → Continuous, **usually** → Simple, **yesterday** → Past, **tomorrow** → going to / will.",
    "**was / were**, **didn't / Did…?** + oddiy fe'l; **will** + oddiy fe'l; **going to** oldidan **am / is / are**.",
    "Qiyoslash: **-er … than**, **the -est**, **more / the most**; istisno: **good – better – best**.",
  ],
  homework: "Bugun, kecha va ertaga haqida 3 tadan gap yozing (Present, Past, going to / will).",
};

export default lesson;
