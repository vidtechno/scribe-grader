import type { Lesson } from '../../../types';

// Mini lesson (skill): reading and writing. A magazine article about moving abroad (tenses mixed), question types, and a 120-word reply.
const lesson: Lesson = {
  id: 'u24-l15',
  title: 'Reading and writing: a magazine article',
  titleUz: "O'qish va yozish: jurnal maqolasi — chet elga ko'chib borish",
  mini: true,
  kind: 'skill',
  goal: "Jurnal maqolasini o'qib, **asosiy fikr**, **tafsilot** va **olmosh (reference)** savollariga javob berasiz, *True / False / Not given* ni farqlaysiz va maqolaga **120 so'zli izoh** yozasiz: kamida **uch xil** zamon va shakl bilan.",
  slides: [
    {
      title: "O'qing: maqola",
      blocks: [
        { t: 'p', md: "Avval matnni **tez o'qing** (*skimming*): kim haqida? nima o'zgardi? Keyin savollarga qarab **kerakli joyni** toping." },
        { t: 'text', title: 'Starting again in Edinburgh', voice: 'george', en: "When Zarina Karimova moved from Tashkent to Edinburgh three years ago, she thought the hardest part would be the weather. She was wrong. Before she left, she had been working as an accountant for eight years, and she had never lived abroad. At first, the bureaucracy exhausted her: she spent weeks queuing for documents and filling in forms. Meanwhile, she was struggling to fit in, because her colleagues spoke so quickly that she could not follow the jokes. \"I used to be confident,\" she says. \"Suddenly I felt like a newcomer in my own life.\" Little by little, things improved. She joined a walking club, and she has been volunteering at a language café since last spring. These days she is fluent enough to chat for hours, and she has started to put down roots: she has bought a small flat. Next year she will be applying for a new job, and by 2030 she hopes to have helped a hundred other expats settle in. \"It was the most difficult decision I have ever made,\" she says, \"but it was worth it.\"", uz: "Zarina Karimova uch yil oldin Toshkentdan Edinburgga ko'chib borganda, eng qiyini ob-havo bo'ladi deb o'ylagan edi. U adashgan edi. Ketishdan oldin u sakkiz yil hisobchi bo'lib ishlagan va hech qachon chet elda yashamagan edi. Boshida byurokratiya uni charchatdi: haftalab hujjatlar uchun navbatda turdi va anketalar to'ldirdi. Shu orada hamkasblari shunchalik tez gapirardiki, u hazillarni tushunmasdi va moslashishga qiynalardi. «Men ishonchli edim, — deydi u. — To'satdan o'z hayotimda yangi kelgandek his qildim.» Asta-sekin ahvol yaxshilandi. U sayr klubiga qo'shildi va o'tgan bahordan beri til kafesida ko'ngilli bo'lib ishlayapti. Hozir u soatlab suhbatlasha oladigan darajada ravon va ildiz otishni boshladi: kichik kvartira sotib oldi. Kelasi yil u yangi ishga topshiradi va 2030-yilga kelib yuzta boshqa ekspatga ko'nikishga yordam bergan bo'lishni umid qiladi. «Bu men qabul qilgan eng qiyin qaror edi, — deydi u, — lekin bunga arziydi.»" },
        { t: 'check', ex: { k: 'choice', q: "What is the best title for the article?", opts: ["A woman's difficult but rewarding move abroad", "The best jobs for accountants", "Why the weather in Scotland is bad", "How to buy a flat quickly"], a: 0, why: "Asosiy fikr: ko'chish qiyin bo'ldi, lekin *it was worth it*." } },
        { t: 'check', ex: { k: 'tf', q: "Before moving, Zarina had already lived in another country.", a: false, why: "*She had never lived abroad.*" } },
        { t: 'check', ex: { k: 'choice', q: "In the sentence «…but it was worth it», the word «it» (second) refers to:", opts: ['the decision to move abroad', 'the weather in Edinburgh', 'the language café', 'her accountancy job'], a: 0, why: "**Reference**: *the most difficult decision… but it was worth it* — gap qarori haqida." } },
      ],
    },
    {
      title: "Savol turlari va strategiyalar",
      blocks: [
        { t: 'table', head: ['Savol turi', 'Nima qilish kerak', 'Misol'], speak: [], rows: [
          ['Gist (asosiy fikr)', "Birinchi va oxirgi gaplarni o'qing", "What is the text mainly about?"],
          ['Detail (tafsilot)', "Kalit so'zni toping, shu joyni sinchiklab o'qing", "How long has she been volunteering?"],
          ['Reference (olmosh)', "Olmoshdan **oldingi** gapga qayting", "What does «it» refer to?"],
          ['True / False / Not given', "Matnda aytilmagan narsa — Not given", "She has a university degree."],
          ['Vocabulary in context', "Atrofdagi gaplardan ma'nosini taxmin qiling", "«put down roots» means…"],
        ] },
        { t: 'tip', tone: 'warn', md: "**False** — matn *aksini* aytadi. **Not given** — matnda bu haqida *umuman* hech narsa yo'q. Hisobchi bo'lib ishlagan, demak universitet diplomi bor deb **taxmin qilmang**: matnda aytilmagan." },
        { t: 'check', ex: { k: 'choice', q: "Zarina has a university degree.", opts: ['True', 'False', 'Not given'], a: 2, why: "Matnda diplom haqida hech narsa aytilmagan → **Not given**." } },
        { t: 'check', ex: { k: 'choice', q: "She has been volunteering at a language café since last spring.", opts: ['True', 'False', 'Not given'], a: 0, why: "*she has been volunteering … since last spring* → **True**." } },
        { t: 'check', ex: { k: 'choice', q: "In the text, «put down roots» means…", opts: ['to start to feel settled in a place', 'to plant trees in a garden', 'to return to your home town', 'to buy a lot of furniture'], a: 0, why: "Kontekst: *she has bought a small flat* — yangi joyda o'rnashmoqda." } },
      ],
    },
    {
      title: "Yozing: 120 so'zli izoh",
      blocks: [
        { t: 'p', md: "Maqola ostiga **izoh** yozasiz (taxminan **120 so'z**). Tuzilma: *1) maqolaga munosabat → 2) o'z tajribangiz (o'tgan zamon, used to) → 3) hozirgi holat (Present Perfect) → 4) kelajak → 5) savol bilan yakun*." },
        { t: 'table', head: ['Qism', 'Foydali ibora / shakl'], speak: [1], rows: [
          ['1. Munosabat', "Thank you for sharing this story. I can really relate to it."],
          ['2. O\'tmish', "When I moved…, I had never… and I used to feel…"],
          ['3. Hozir', "I've been attending… since…, and I have made…"],
          ['4. Kelajak', "By next summer I'll have… / Next year I'll be…"],
          ['5. Yakun', "Have you ever thought about…?"],
        ] },
        { t: 'text', title: 'A model comment', voice: 'emma', en: "Thank you for sharing this story. I can really relate to it. When I moved to Manchester two years ago, I had never lived away from my family, and I used to feel lonely every evening. The paperwork took months, but I eventually got used to it. I've been attending a conversation club since October, and I have made several close friends there. These days I'm happy enough to call this city home. Next summer I'll be visiting my parents, and by then I'll have saved enough to bring them to see where I live. Have you ever thought about writing a follow-up article about families who stay behind?", uz: "Bu hikoyani bo'lishganingiz uchun rahmat. Men uni juda yaxshi tushunaman. Ikki yil oldin Manchesterga ko'chganimda, oilamdan uzoqda hech yashamagan edim va har kech o'zimni yolg'iz his qilardim. Hujjatlar bir necha oy cho'zildi, lekin oxiri unga ko'nikdim. Oktabrdan beri suhbat klubiga qatnayapman va u yerda bir nechta yaqin do'st orttirdim. Hozir bu shaharni uy deb ataydigan darajada xursandman. Kelasi yozda ota-onamnikiga boraman va o'sha paytga kelib ularni yashaydigan joyimni ko'rsatish uchun olib kelishga yetarli pul yig'gan bo'laman. Oilasi ortda qolgan insonlar haqida davomiy maqola yozishni o'ylab ko'rganmisiz?" },
        { t: 'check', ex: { k: 'choice', q: "Which sentence in the model comment shows a result that continues up to now?", opts: ["I've been attending a conversation club since October.", "When I moved to Manchester two years ago…", "The paperwork took months.", "Next summer I'll be visiting my parents."], a: 0, why: "**since October** + hozirgacha davom etmoqda → **Present Perfect Continuous**." } },
        { t: 'check', ex: { k: 'fill', q: "By then I ___ enough to bring them here.", a: ["will have saved", "'ll have saved", "I'll have saved"], hint: 'save', why: "Kelajakdagi paytgacha tugagan ish → **will have + V3**." } },
      ],
    },
    {
      title: "Tipik xatolar (o'zbek tilidan)",
      blocks: [
        { t: 'p', md: "O'zbekcha *uch yildan beri yashayman* so'zma-so'z **I live three years** yoki **since three years** bo'lib qoladi. Aniq o'tgan vaqt (*last year*) bilan esa **Present Perfect** ishlatilmaydi." },
        { t: 'compare',
          good: { title: "To'g'ri", items: ["I have been living here for three years.", "Last year she bought a flat.", "I'm getting used to living alone."] },
          bad: { title: 'Xato', items: ["I am living here since three years.", "Last year she has bought a flat.", "I'm getting used to live alone."] } },
        { t: 'check', ex: { k: 'fix', wrong: "I am living in Edinburgh since three years.", a: ["I have been living in Edinburgh for three years.", "I've been living in Edinburgh for three years.", "I have lived in Edinburgh for three years.", "I've lived in Edinburgh for three years."], why: "Davomiylik: **for three years** + **Present Perfect**." } },
        { t: 'check', ex: { k: 'fix', wrong: "Last year she has bought a small flat.", a: ["Last year she bought a small flat."], why: "Aniq o'tgan vaqt (*last year*) → **Past Simple**." } },
      ],
    },
  ],
  words: [
    { en: 'expat', uz: "chet elda yashovchi (ish uchun ko'chgan) kishi", ipa: 'ˈeks.pæt', pos: 'noun', ex: 'Many expats in the city meet every Friday to share advice.', exUz: "Shahardagi ko'p ekspatlar har juma maslahat almashish uchun uchrashadi." },
    { en: 'bureaucracy', uz: "byurokratiya, rasmiy hujjatbozlik", ipa: 'bjʊəˈrɒk.rə.si', pos: 'noun', ex: 'The bureaucracy of getting a visa took three months.', exUz: "Viza olishdagi hujjatbozlik uch oy davom etdi." },
    { en: 'integrate', uz: "singishib ketmoq, moslashmoq", ipa: 'ˈɪn.tɪ.ɡreɪt', pos: 'verb', ex: 'It takes time to integrate into a new community.', exUz: "Yangi jamoaga singishib ketish vaqt oladi." },
    { en: 'put down roots', uz: "ildiz otmoq, o'rnashib olmoq", ipa: 'pʊt daʊn ruːts', pos: 'idiom', ex: 'After years of moving, they finally put down roots in Leeds.', exUz: "Yillar davomida ko'chib yurgach, ular nihoyat Lidsda o'rnashib oldi." },
    { en: 'newcomer', uz: "yangi kelgan odam", ipa: 'ˈnjuːˌkʌm.ə', pos: 'noun', ex: 'As a newcomer, she found the office rules confusing.', exUz: "Yangi kelgan sifatida u ofis qoidalarini chalkash deb topdi." },
    { en: 'fit in', uz: "jamoaga moslashmoq, o'ziniki bo'lmoq", ipa: 'fɪt ɪn', pos: 'phrasal verb', ex: 'It is hard to fit in when you do not know the local customs.', exUz: "Mahalliy urf-odatlarni bilmasangiz, jamoaga moslashish qiyin." },
  ],
  practice: [
    { k: 'match', pairs: [['expat', 'chet elda yashovchi kishi'], ['bureaucracy', 'rasmiy hujjatbozlik'], ['integrate', 'singishib ketmoq'], ['put down roots', "ildiz otmoq"], ['newcomer', 'yangi kelgan odam'], ['fit in', "jamoaga moslashmoq"]] },
    { k: 'choice', q: "What is the article mainly about?", opts: ["A woman's difficult but rewarding move abroad", "The best jobs for accountants", "Why Edinburgh is cold", "How to buy a flat quickly"], a: 0, why: "Asosiy fikr: ko'chish qiyin, lekin *it was worth it*." },
    { k: 'tf', q: "At first, Zarina found the paperwork easy.", a: false, why: "*The bureaucracy exhausted her.*" },
    { k: 'choice', q: "Why did Zarina struggle to fit in at work?", opts: ['Her colleagues spoke too fast for her to follow the jokes.', 'She disliked her new job.', 'She had no colleagues.', 'She could not find a flat.'], a: 0, why: "*her colleagues spoke so quickly that she could not follow the jokes.*" },
    { k: 'choice', q: "Zarina has a sister who lives in Edinburgh.", opts: ['True', 'False', 'Not given'], a: 2, why: "Matnda Zarinaning opa-singillari haqida hech narsa aytilmagan → **Not given**." },
    { k: 'fill', q: "At first, the ___ exhausted her: she spent weeks filling in forms.", a: ['bureaucracy'], hint: 'bu…', uz: "Boshida byurokratiya uni charchatdi.", why: "**bureaucracy** — rasmiy hujjatbozlik." },
    { k: 'fill', q: "It can be hard to ___ in when you don't speak the language.", a: ['fit'], hint: 'moslashmoq', uz: "Tilni bilmasangiz, jamoaga moslashish qiyin bo'lishi mumkin.", why: "**fit in** — jamoaga moslashmoq." },
    { k: 'listen', say: 'She has started to put down roots in her new city.', opts: ['She has started to put down roots in her new city.', 'She had started to put down roots in her new city.', 'She started to put down roots in her old city.', 'She has stopped putting down roots in her new city.'], a: 0 },
    { k: 'order', uz: "U ko'chib borguncha hech qachon chet elda yashamagan edi.", words: ['She', 'had', 'never', 'lived', 'abroad', 'before', 'she', 'moved.'], extra: ['has', 'ago'], why: "Ko'chishdan oldin → **Past Perfect**: *had never lived*." },
    { k: 'order', uz: "2030-yilga kelib u ko'plab ekspatlarga yordam bergan bo'lishni umid qiladi.", words: ['By', '2030', 'she', 'hopes', 'to', 'have', 'helped', 'many', 'expats.'], extra: ['helping', 'will'], why: "**hope to have + V3** — kelajakdagi paytgacha tugagan ish." },
    { k: 'fix', wrong: "I am living in Edinburgh since three years.", a: ["I have been living in Edinburgh for three years.", "I've been living in Edinburgh for three years.", "I have lived in Edinburgh for three years.", "I've lived in Edinburgh for three years."], why: "**for three years** + **Present Perfect**." },
    { k: 'fix', wrong: "I'm getting used to live alone.", a: ["I'm getting used to living alone.", "I am getting used to living alone."], why: "**get used to** + **V-ing**." },
    { k: 'translate', uz: "U uch yildan beri chet elda yashayapti.", a: ["She has been living abroad for three years.", "She's been living abroad for three years.", "She has lived abroad for three years.", "She's lived abroad for three years.", "He has been living abroad for three years.", "He's been living abroad for three years.", "He has lived abroad for three years.", "He's lived abroad for three years."], why: "**for three years** → **has been living** / **has lived**." },
    { k: 'speak', say: 'Thank you for sharing this story. I can really relate to it.', uz: "Bu hikoyani bo'lishganingiz uchun rahmat. Men uni juda yaxshi tushunaman." },
  ],
  quiz: [
    { k: 'choice', q: "According to the article, what did Zarina do before she moved?", opts: ['She worked as an accountant for eight years.', 'She studied English in Scotland.', 'She volunteered at a language café.', 'She bought a flat.'], a: 0, why: "*she had been working as an accountant for eight years.*" },
    { k: 'choice', q: "In the quotation «I used to be confident», who is «I»?", opts: ['Zarina', 'one of her colleagues', 'the magazine writer', 'an expat from the café'], a: 0, why: "Tirnoq ichidagi gapni aytgan odam: *she says* — **Zarina**." },
    { k: 'choice', q: "Zarina will apply for a new job next year.", opts: ['True', 'False', 'Not given'], a: 0, why: "*Next year she will be applying for a new job.*" },
    { k: 'fill', q: "As a ___, she found the office rules confusing.", a: ['newcomer'], hint: 'new…', uz: "Yangi kelgan sifatida u ofis qoidalarini chalkash deb topdi.", why: "**newcomer** — yangi kelgan odam." },
    { k: 'fill', q: "It takes time to ___ into a new community.", a: ['integrate'], hint: 'in…', uz: "Yangi jamoaga singishib ketish vaqt oladi.", why: "**integrate into** — singishib ketmoq." },
    { k: 'order', uz: "U o'tgan bahordan beri ko'ngilli bo'lib ishlayapti.", words: ['She', 'has', 'been', 'volunteering', 'since', 'last', 'spring.'], extra: ['for', 'is'], alt: [["She's", 'been', 'volunteering', 'since', 'last', 'spring.']], why: "**since** + vaqt nuqtasi → **has been + V-ing**." },
    { k: 'fix', wrong: "Last year she has moved to Scotland.", a: ["Last year she moved to Scotland."], why: "**last year** — aniq o'tgan vaqt → **Past Simple**." },
    { k: 'listen', say: 'Little by little, things improved.', opts: ['Little by little, things improved.', 'Little by little, things improve.', 'A little, by little, things improved.', 'Little by little, things have improved.'], a: 0 },
    { k: 'tf', q: "*By next summer I'll have saved enough money* means the saving will be finished before next summer.", a: true, why: "**by** + **will have + V3** — o'sha paytgacha tugagan." },
  ],
  summary: [
    "O'qishda avval **skimming** (gist), keyin kalit so'z bo'yicha **scanning** (tafsilot); olmosh savolida **oldingi** gapga qayting.",
    "**False** — matn aksini aytadi; **Not given** — matnda bu haqida umuman yo'q. Taxmin qilmang.",
    "Izoh tuzilmasi: **munosabat → o'tmish (Past Perfect, used to) → hozir (Present Perfect) → kelajak (will have / will be) → savol**.",
    "Xatolar: *since three years* emas → **for three years**; *last year has moved* emas → **moved**; *used to live* ≠ *used to living*.",
    "Yangi so'zlar: **expat, bureaucracy, integrate, put down roots, newcomer, fit in**.",
  ],
  homework: "Maqolaga o'z izohingizni yozing (120 so'z): kamida **uchta** shakl ishlating (masalan Past Perfect, Present Perfect Continuous, Future Perfect yoki *used to*). Yozib bo'lgach, har bir shaklning tagiga chizing va *for / since / ago* ni tekshiring.",
};

export default lesson;
