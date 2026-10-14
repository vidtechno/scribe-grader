import type { Lesson } from '../../../types';

// Mini lesson (grammar): stop, remember, forget, try + -ing or to. Builds on l1 (-ing / to patterns) without repeating the basics.
const lesson: Lesson = {
  id: 'u17-l12',
  title: 'Verb patterns: stop, remember, try',
  titleUz: "Fe'l qoliplari: stop, remember, try + -ing yoki to",
  mini: true,
  kind: 'grammar',
  goal: "**stop, remember, forget, try** dan keyin **-ing** va **to + V1** ning ma'no farqini bilasiz (*stop smoking* ≠ *stop to smoke*) va **like / love / hate / enjoy / finish / mind + -ing**, **want / hope / plan / decide / need + to** qoliplarini aralashtirmaysiz.",
  slides: [
    {
      title: "Takror: -ing yoki to?",
      blocks: [
        { t: 'p', md: "1-darsda ko'rdik: ko'p fe'ldan keyin ikkinchi fe'l **faqat bitta** shaklda keladi. Avval shularni mustahkamlaymiz, keyin ikki shaklni ham qabul qiladigan, lekin **ma'nosi o'zgaradigan** fe'llarga o'tamiz." },
        { t: 'table', head: ['Qolip', "Fe'llar", 'Misol'], speak: [2], rows: [
          ["fe'l + **-ing**", 'like, love, hate, enjoy, finish, mind', 'I enjoy cooking. I hate waiting.'],
          ["fe'l + **to + V1**", 'want, hope, plan, decide, need', 'I want to cook. We plan to travel.'],
        ] },
        { t: 'examples', items: [
          { en: 'Do you mind waiting a minute?', uz: "Bir daqiqa kutsangiz, qarshi emasmisiz?", note: "**mind** + -ing. Javob: *No, not at all.* = \"Yo'q, hech qisi yo'q\"." },
          { en: 'She finished cleaning at six.', uz: "U soat oltida tozalashni tugatdi." },
          { en: 'We decided to stay at home.', uz: "Biz uyda qolishga qaror qildik." },
        ] },
        { t: 'tip', tone: 'info', md: "**Do you mind…?** ga javob **No** bo'lsa, demak \"qarshi emasman, mayli\". *Do you mind opening the window? — No, not at all.*" },
        { t: 'check', ex: { k: 'choice', q: "She hopes ___ a new flat next year.", opts: ['to buy', 'buying', 'buy', 'to buying'], a: 0, why: "**hope** + **to + V1**." } },
      ],
    },
    {
      title: "stop doing yoki stop to do?",
      blocks: [
        { t: 'p', md: "**stop** dan keyin ikkala shakl ham bo'ladi, lekin ma'no butunlay boshqa:" },
        { t: 'table', head: ['Qolip', "Ma'nosi", 'Misol'], speak: [2], rows: [
          ['stop + **-ing**', "ishni to'xtatmoq, tashlamoq", 'He stopped smoking.'],
          ['stop + **to + V1**', "boshqa ish uchun to'xtamoq", 'He stopped to buy bread.'],
        ] },
        { t: 'examples', items: [
          { en: 'It stopped raining, so we went out.', uz: "Yomg'ir to'xtadi, shuning uchun tashqariga chiqdik." },
          { en: 'We stopped to have a rest.', uz: "Dam olish uchun to'xtadik.", note: "Yo'lda ketayotib to'xtadik, maqsad — dam olish." },
          { en: 'Please stop talking. I am trying to study.', uz: "Iltimos, gapirishni to'xtating. Men o'qishga harakat qilyapman." },
        ] },
        { t: 'tip', tone: 'good', md: "Oddiy yo'l: **stop + -ing** = \"endi qilmayman\". **stop + to** = \"to'xtadim, **chunki** boshqa narsa qilmoqchiman\" (to = *uchun*)." },
        { t: 'check', ex: { k: 'choice', q: "Ali was tired, so he stopped ___ a rest. (dam olish uchun to'xtadi)", opts: ['to have', 'having', 'have', 'to having'], a: 0, why: "Maqsad (dam olish uchun) → **stop to have**." } },
        { t: 'check', ex: { k: 'choice', q: "My father stopped ___ coffee last year. (kofeni tashladi)", opts: ['drinking', 'to drink', 'drink', 'to drinking'], a: 0, why: "Odatni tashladi → **stop drinking**." } },
      ],
    },
    {
      title: "remember va forget",
      blocks: [
        { t: 'p', md: "Bu yerda ma'noni **vaqt** belgilaydi: **to + V1** — hali **qilinishi kerak** bo'lgan ish; **-ing** — **allaqachon bo'lgan** voqea." },
        { t: 'table', head: ['Qolip', "Ma'nosi", 'Misol'], speak: [2], rows: [
          ['remember + **to + V1**', "qilishni esdan chiqarmaslik", 'Remember to lock the door.'],
          ['remember + **-ing**', "qilganini eslamoq", 'I remember meeting Ali in 2020.'],
          ['forget + **to + V1**', "qilishni unutib qo'ymoq", 'I forgot to call my mother.'],
          ['forget + **-ing**', "qilganini unutmoq (asosan *never forget*)", "I'll never forget seeing the Registan."],
        ] },
        { t: 'compare', good: { title: "To'g'ri", items: ["Don't forget to bring your passport.", 'I remember visiting Bukhara as a child.', 'She forgot to turn off the light.'] }, bad: { title: "Noto'g'ri", items: ["Don't forget bringing your passport.", 'I remember to visit Bukhara as a child.', 'She forgot turning off the light.'] } },
        { t: 'tip', tone: 'warn', md: "*Don't forget **to** …* — eslatma. *I forgot **to** call* — qo'ng'iroq **qilinmadi**. O'zbekchada ikkalasi ham \"unutdim\" bo'lgani uchun adashish oson." },
        { t: 'check', ex: { k: 'choice', q: "Please remember ___ the milk. (sotib olish kerak)", opts: ['to buy', 'buying', 'buy', 'bought'], a: 0, why: "Hali qilinishi kerak ish → **remember to buy**." } },
        { t: 'check', ex: { k: 'choice', q: "I remember ___ this song when I was little. (bolaligimda eshitganimni eslayman)", opts: ['hearing', 'to hear', 'hear', 'to hearing'], a: 0, why: "O'tgan voqeani eslash → **remember hearing**." } },
      ],
    },
    {
      title: "try doing yoki try to do?",
      blocks: [
        { t: 'p', md: "**try + -ing** — yechim bo'lishi mumkin bo'lgan narsani **sinab ko'rmoq**. **try + to + V1** — qiyin ishni **uddalashga urinmoq** (ko'pincha uddalay olmagan holda)." },
        { t: 'dialog', lines: [
          { who: 'Dilnoza', en: 'You look tired, Ali.', uz: "Charchaganga o'xshaysan, Ali." },
          { who: 'Ali', en: "I can't sleep at night. I try to go to bed early, but I can't.", uz: "Kechasi uxlay olmayman. Erta yotishga harakat qilaman, lekin bo'lmayapti." },
          { who: 'Dilnoza', en: 'Try drinking warm milk before bed.', uz: "Yotishdan oldin iliq sut ichib ko'r." },
          { who: 'Ali', en: 'I tried drinking tea with honey. It did not help.', uz: "Asalli choy ichib ko'rdim. Foydasi bo'lmadi." },
          { who: 'Dilnoza', en: 'Then stop drinking coffee in the evening!', uz: "Unda kechqurun kofe ichishni to'xtat!" },
          { who: 'Ali', en: "Good idea. And I must remember to switch off my phone.", uz: "Yaxshi fikr. Telefonni o'chirishni ham esdan chiqarmasligim kerak." },
        ] },
        { t: 'table', head: ['Qolip', "Ma'nosi", 'Misol'], speak: [2], rows: [
          ['try + **-ing**', "sinab ko'rmoq", 'Try restarting your phone.'],
          ['try + **to + V1**', 'urinmoq, harakat qilmoq', 'I tried to open the box, but it was stuck.'],
        ] },
        { t: 'check', ex: { k: 'tf', q: "In the dialogue, Ali drank tea with honey and it helped him sleep.", a: false, why: "Dialog: *It did not help.* — foyda bermadi." } },
        { t: 'check', ex: { k: 'choice', q: "The soup is too salty. ___ adding some water. (qo'shib ko'ring)", opts: ['Try', 'Stop to', 'Forget', 'Remember to'], a: 0, why: "Yechimni sinab ko'rish → **Try adding**." } },
      ],
    },
    {
      title: "Qaysi biri? Aralash mashq",
      blocks: [
        { t: 'p', md: "Qoida qisqa: avval fe'lni, keyin **ma'noni** o'ylang. Hozircha eng ko'p uchraydigan xatolar:" },
        { t: 'compare', good: { title: "To'g'ri", items: ['I enjoy reading.', 'We hope to see you soon.', 'He stopped smoking.', 'Try turning it off and on.'] }, bad: { title: "Noto'g'ri", items: ['I enjoy to read.', 'We hope seeing you soon.', 'He stopped to smoking.', 'Try turn it off and on.'] } },
        { t: 'tip', tone: 'info', md: "Esda tuting: **to + V1** — \"maqsad / kelajak\", **-ing** — \"jarayon / o'tgan voqea\". *give up* + -ing ham shunday: *Don't give up learning!*" },
        { t: 'check', ex: { k: 'fill', q: "I finished ___ my homework at nine. (do)", a: ['doing'], why: "**finish** + -ing." } },
        { t: 'check', ex: { k: 'fill', q: "Don't forget ___ me when you arrive. (call)", a: ['to call'], why: "Eslatma → **forget to + V1**." } },
      ],
    },
  ],
  words: [
    { en: 'remember', uz: 'eslamoq, esda tutmoq', ipa: 'rɪˈmem.bə', pos: 'verb', ex: 'Remember to lock the door.', exUz: "Eshikni qulflashni unutmang." },
    { en: 'forget', uz: 'unutmoq', ipa: 'fəˈɡet', pos: 'verb', ex: 'I forgot to call my mother.', exUz: "Onamga qo'ng'iroq qilishni unutibman." },
    { en: 'try', uz: "urinmoq; sinab ko'rmoq", ipa: 'traɪ', pos: 'verb', ex: 'Try restarting your phone.', exUz: "Telefoningizni qayta yoqib ko'ring." },
    { en: 'stop', uz: "to'xtamoq; to'xtatmoq", ipa: 'stɒp', pos: 'verb', ex: 'He stopped smoking last year.', exUz: "U o'tgan yili chekishni tashladi." },
    { en: 'mind', uz: "qarshi bo'lmoq, ko'ngliga olmoq", ipa: 'maɪnd', pos: 'verb', ex: 'Do you mind waiting a minute?', exUz: "Bir daqiqa kutsangiz bo'ladimi?" },
    { en: 'give up', uz: 'taslim bo\'lmoq, tashlamoq', ipa: 'ɡɪv ˈʌp', pos: 'phrasal verb', ex: "Don't give up learning English.", exUz: "Ingliz tilini o'rganishni tashlamang." },
  ],
  practice: [
    { k: 'choice', q: 'I enjoy ___ English songs.', opts: ['listening to', 'to listen to', 'listen to', 'listens to'], a: 0, why: "**enjoy** + -ing." },
    { k: 'fill', q: 'She wants ___ a new job. (find)', a: ['to find'], uz: "U yangi ish topmoqchi.", why: "**want** + **to + V1**." },
    { k: 'match', pairs: [['stop doing', 'qilishni tashlamoq'], ['stop to do', "... uchun to'xtamoq"], ['remember to do', 'qilishni esdan chiqarmaslik'], ['remember doing', 'qilganini eslamoq'], ['try doing', "sinab ko'rmoq"]] },
    { k: 'choice', q: "Don't forget ___ the door when you leave. (qulflash kerak)", opts: ['to lock', 'locking', 'lock', 'locked'], a: 0, why: "Eslatma, hali qilinadigan ish → **forget to lock**." },
    { k: 'tf', q: "*I stopped to talk to my friend.* — Men do'stim bilan gaplashish uchun to'xtadim.", a: true, why: "**stop to + V1** = \"... uchun to'xtamoq\"." },
    { k: 'fix', wrong: 'Remember lock the door.', a: ['Remember to lock the door.'], hint: "Bitta so'z yetishmayapti", why: "**remember** + **to + V1**." },
    { k: 'order', uz: "Ali non sotib olish uchun to'xtadi.", words: ['Ali', 'stopped', 'to', 'buy', 'some', 'bread'], extra: ['buying'], why: "**stop to + V1** — maqsad." },
    { k: 'translate', uz: "Men Buxoroga birinchi marta borganimni eslayman.", a: ['I remember going to Bukhara for the first time.', 'I remember visiting Bukhara for the first time.', 'I remember going to Bukhara the first time.'], why: "O'tgan voqeani eslash — **remember + -ing**." },
    { k: 'listen', say: 'Try restarting your computer.', opts: ['Try restarting your computer.', 'Try to restart your computer.', 'Stop restarting your computer.', 'Remember restarting your computer.'], a: 0, why: "Eshitilgani: **Try restarting…** — sinab ko'ring." },
    { k: 'dictation', say: 'Please remember to call me tomorrow.', a: ['Please remember to call me tomorrow.'], uz: "Iltimos, ertaga menga qo'ng'iroq qilishni unutmang." },
    { k: 'speak', say: "I'll never forget seeing the Registan.", uz: "Registonni ko'rganimni hech qachon unutmayman." },
    { k: 'speak', say: 'Remember to take your keys.', uz: "Kalitlaringizni olishni unutmang." },
  ],
  quiz: [
    { k: 'choice', q: "We stopped ___ some photos of the mountains. (rasmga olish uchun)", opts: ['to take', 'taking', 'take', 'took'], a: 0, why: "Maqsad → **stop to take**." },
    { k: 'fill', q: 'I forgot ___ my homework, so the teacher was angry. (bring)', a: ['to bring'], why: "Qilmadim → **forget to + V1**." },
    { k: 'choice', q: "I remember ___ this film when I was a child. (bolaligimda ko'rganimni eslayman)", opts: ['seeing', 'to see', 'see', 'saw'], a: 0, why: "O'tgan voqea → **remember seeing**." },
    { k: 'fix', wrong: 'She stopped to eat sweets last year, so now she feels better.', a: ['She stopped eating sweets last year, so now she feels better.'], hint: "U shirinlikni tashlagan", why: "Tashlamoq → **stop + -ing**." },
    { k: 'order', uz: "Iliq suv ichib ko'ring.", words: ['Try', 'drinking', 'some', 'warm', 'water'], extra: ['to', 'drink'], why: "Sinab ko'rish → **try + -ing**." },
    { k: 'tf', q: "*I tried to open the window, but it was too heavy.* — Oyna ochildi.", a: false, why: "**try to** — urinib ko'rdim, lekin uddalay olmadim." },
    { k: 'translate', uz: "Eshikni qulflashni unutmang.", a: ["Don't forget to lock the door.", 'Do not forget to lock the door.', 'Remember to lock the door.'], why: "**Don't forget to + V1**." },
    { k: 'match', pairs: [['remember', 'eslamoq'], ['forget', 'unutmoq'], ['try', "urinmoq, sinab ko'rmoq"], ['stop', "to'xtamoq"], ['mind', "qarshi bo'lmoq"]] },
  ],
  summary: [
    "**like, love, hate, enjoy, finish, mind** + **-ing**; **want, hope, plan, decide, need** + **to + V1**.",
    "**stop + -ing** = tashlamoq; **stop + to + V1** = boshqa ish uchun to'xtamoq.",
    "**remember / forget + to + V1** = kerakli ishni esda tutmoq / unutmoq; **remember + -ing** = o'tgan voqeani eslamoq.",
    "**try + -ing** = sinab ko'rmoq; **try + to + V1** = urinmoq.",
    "Yangi so'zlar: **remember, forget, try, stop, mind, give up**.",
  ],
  homework: "Har bir qolip uchun o'zingizdan bittadan gap yozing: *stop smoking / stop to rest, remember to…, I remember…ing, try…ing*. Keyin ularni ovoz chiqarib ayting.",
};

export default lesson;
