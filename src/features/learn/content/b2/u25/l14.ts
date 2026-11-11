import type { Lesson } from '../../../types';

// Mini lesson (skill): listening to a dilemma and answering "What would you do?" questions aloud. Uses second, third and mixed conditionals from l1.
const lesson: Lesson = {
  id: 'u25-l14',
  title: 'Listening and speaking: what would you do?',
  titleUz: "Tinglash va gapirish: 'Nima qilgan bo'lardingiz?' suhbati",
  mini: true,
  kind: 'skill',
  goal: "Ikki do'stning **dilemma** haqidagi suhbatini tinglab, **fikr va sababni** ushlaysiz; IELTS Speaking 3 uslubidagi **What would you do if…?** va **What would you have done…?** savollariga 1-2 daqiqada tuzilgan javob berasiz.",
  slides: [
    {
      title: "Tinglang: bir dilemma",
      blocks: [
        { t: 'p', md: "Dilnoza do'sti uni qiyin vaziyatga qo'ydi. Suhbatni tinglang (▶) va **uchta narsaga** e'tibor bering: **muammo nima? Timur nima maslahat beradi? Nima uchun?** Tushunmagan joyingizni ikkinchi marta tinglang, matn pastda yashirin." },
        { t: 'dialog', lines: [
          { who: 'Dilnoza', en: "Timur, my friend Bobur wants me to put my savings into his new cafe. I don't know what to do.", uz: "Timur, do'stim Bobur jamg'armamni uning yangi kafesiga solishimni xohlayapti. Nima qilishni bilmayapman." },
          { who: 'Timur', en: "How much is he asking for?", uz: "U qancha so'rayapti?" },
          { who: 'Dilnoza', en: "Almost all of it. It's tempting, because the place is in a great location, but it's a big commitment.", uz: "Deyarli hammasini. Vasvasa bor, chunki joy juda yaxshi, lekin bu katta majburiyat." },
          { who: 'Timur', en: "If it were me, I wouldn't put all my savings in one place. What would you do if the cafe failed?", uz: "Men bo'lganimda, hamma jamg'armamni bir joyga solmasdim. Kafe ishlamay qolsa, nima qilardingiz?" },
          { who: 'Dilnoza', en: "I'd be devastated. I'd probably lose my flat deposit too.", uz: "Juda xafa bo'lardim. Ehtimol, kvartira uchun to'lovimni ham yo'qotardim." },
          { who: 'Timur', en: "Exactly. Maybe you could invest a smaller amount, and ask for a written agreement. I wish I had done that when my cousin asked me for money.", uz: "Aynan. Balki kichikroq miqdor sarflarsiz va yozma shartnoma so'rarsiz. Qaniydi, amakivachcham pul so'raganda men shunday qilganimda." },
          { who: 'Dilnoza', en: "Why? What happened?", uz: "Nega? Nima bo'ldi?" },
          { who: 'Timur', en: "I lent him the money without a contract, and I regret it. If I had asked for a contract, I would still have my money today.", uz: "Men unga pulni shartnomasiz berdim va afsuslanaman. Shartnoma so'raganimda edi, pulim hozir ham o'zimda bo'lardi." },
          { who: 'Dilnoza', en: "That helps a lot. I'll tell Bobur I can invest only a part, and only with a contract.", uz: "Bu juda yordam berdi. Boburga faqat bir qismini va faqat shartnoma bilan sarflay olishimni aytaman." },
        ] },
        { t: 'check', ex: { k: 'choice', q: "What is Dilnoza's problem?", opts: ["A friend wants her to invest her savings in a cafe.", "She wants to open a cafe alone.", "She lost her flat deposit.", "Timur wants to borrow money."], a: 0, why: "*Bobur wants me to put my savings into his new cafe.*" } },
        { t: 'check', ex: { k: 'tf', q: "Timur thinks Dilnoza should put all her savings into the cafe.", a: false, why: "*I wouldn't put all my savings in one place.*" } },
        { t: 'check', ex: { k: 'choice', q: "Why does Timur regret something?", opts: ["He lent money to his cousin without a contract.", "He opened a cafe.", "He sold his flat.", "He refused to help a friend."], a: 0, why: "*I lent him the money without a contract, and I regret it.* Pulini amakivachchasiga bergan." } },
      ],
    },
    {
      title: "Taxminiy savollarga javob iboralari",
      blocks: [
        { t: 'p', md: "IELTS Speaking 3 va suhbatlarda **What would you do if…?** kabi savollar tez-tez beriladi. Ularga **taxminiy ohangda** javob beriladi: haqiqatni emas, tasavvurni aytasiz. Quyidagi iboralar sizga vaqt beradi va javobni tabiiy qiladi:" },
        { t: 'table', head: ['Maqsad', 'Ibora', 'Eslatma'], speak: [1], rows: [
          ['Vaqt olish', "That's a tough one. Let me think.", "o'ylash vaqti"],
          ['Pozitsiya', "I think I'd probably…", "**probably** ishonchni yumshatadi"],
          ['Kuchli rad', "I'd never put all my eggs in one basket.", "**never** — qat'iy"],
          ['Shart', "It depends on how much money is involved.", "**It depends on…** — real fikr"],
          ["Boshqa o'rinda", "If it were me, I'd ask for a contract.", "**If it were me** = *If I were in your place*"],
          ["O'tgan zamon", "If I'd been in his place, I'd have said no.", "**I'd have + V3** — o'tgan zamon gipotezasi"],
        ] },
        { t: 'tip', tone: 'warn', md: "**'d** ikki xil: *I'd go* = *I would go*; *I'd gone* = *I had gone*. Fe'lning shakliga qarab ajrating: **'d + V1** = would; **'d + V3** = had. Tinglaganda bu muhim." },
        { t: 'check', ex: { k: 'choice', q: "\"I'd been there before\" da 'd nimani anglatadi?", opts: ["had", "would", "did", "should"], a: 0, why: "**'d + been (V3)** = *had been*." } },
        { t: 'check', ex: { k: 'fill', q: "If it ___ me, I'd think twice. (Men bo'lganimda)", a: ['were', 'was'], why: "**If it were me** — tasavvur." } },
      ],
    },
    {
      title: "Gapirish: model javob va reja",
      blocks: [
        { t: 'p', md: "Savol: **What would you do if a close friend asked you to lend them a large amount of money?** 1-2 daqiqada javob berish rejasi: **1) pozitsiya, 2) sabab, 3) shartlar yoki muqobil, 4) xulosa**." },
        { t: 'text', title: 'Model answer', voice: 'george', en: "That's a tough one. I think I'd probably help, but it would depend on the amount. If it were a small sum, I'd lend it without a second thought. However, if it were a large amount, I'd want to know why my friend needs it. I'd also suggest writing down the agreement, because it protects the friendship as well as the money. I wouldn't say no immediately, because a good friend deserves to be heard. On the other hand, if I couldn't afford to lose that money, I'd say so honestly. Actually, I once lent money without a contract, and if I had been more careful, I wouldn't have lost it. So now I'd definitely put everything on paper.", uz: "Bu qiyin savol. Menimcha, ehtimol yordam berardim, lekin miqdorga bog'liq. Kichik summa bo'lsa, ikkilanmay berardim. Katta miqdor bo'lsa, do'stimga nima uchun kerakligini bilishni xohlardim. Shartnomani yozib qo'yishni ham taklif qilardim, chunki u pulni ham, do'stlikni ham himoya qiladi. Darhol rad etmasdim, chunki yaxshi do'st tinglanishga loyiq. Boshqa tomondan, bu pulni yo'qotishga qurbim yetmasa, buni halol aytardim. Aslida bir marta shartnomasiz qarz bergandim va ehtiyotkorroq bo'lganimda, uni yo'qotmasdim. Shuning uchun endi hamma narsani qog'ozga tushirardim." },
        { t: 'table', head: ['Qadam', 'Namuna'], speak: [1], rows: [
          ['1 Pozitsiya', "I think I'd probably help, but it would depend on the amount."],
          ['2 Sabab', "A good friend deserves to be heard."],
          ['3 Muqobil', "On the other hand, if I couldn't afford to lose it, I'd say so honestly."],
          ['4 Shaxsiy misol', "If I had been more careful, I wouldn't have lost it."],
        ] },
        { t: 'check', ex: { k: 'order', uz: "Bu miqdorga bog'liq.", words: ['It', 'would', 'depend', 'on', 'the', 'amount.'], extra: ['depends', 'of'], alt: [['It', 'depends', 'on', 'the', 'amount.']], why: "**depend on** + ot; *would depend* yoki *depends* ikkalasi mumkin." } },
        { t: 'check', ex: { k: 'tf', q: "In the model answer, the speaker has never lent money without a contract.", a: false, why: "*I once lent money without a contract.*" } },
      ],
    },
    {
      title: "Talaffuz va endi siz",
      blocks: [
        { t: 'p', md: "Tez gapirganda **would have** va **had** juda **zaif** talaffuz qilinadi: *I'd have* /aɪd əv/, *wouldn't have* /ˈwʊdntəv/. Qo'shiq kabi ritm: kuchli so'zlar (*never, regret, contract*) aniq, yordamchi so'zlar tez." },
        { t: 'table', head: ['Yozilishi', 'Talaffuzda eshitiladi', 'Misol'], speak: [2], rows: [
          ['would have', "woodəv", "I would have said no."],
          ["wouldn't have", "wudntəv", "I wouldn't have lost it."],
          ['should have', "shudəv", "You should have asked."],
          ['If I had been', "if aid been", "If I had been there, I'd have helped."],
        ] },
        { t: 'tip', tone: 'good', md: "**Endi siz ayting.** Telefoningizga yozing va 1-2 daqiqa gapiring: *What would you do if you found a wallet with a lot of money?* Reja: pozitsiya, sabab, muqobil, shaxsiy misol. Kamida bitta *If I were…, I'd…* va bitta *If I had…, I would have…* ishlating." },
        { t: 'check', ex: { k: 'dictation', say: "If I had been more careful, I wouldn't have lost it.", a: ["If I had been more careful, I wouldn't have lost it.", "If I had been more careful, I would not have lost it.", "If I'd been more careful, I wouldn't have lost it.", "If I'd been more careful, I would not have lost it."], uz: "Ehtiyotkorroq bo'lganimda, uni yo'qotmasdim." } },
        { t: 'check', ex: { k: 'choice', q: "Qaysi ibora javobingizga vaqt beradi?", opts: ["That's a tough one. Let me think.", "I don't know. Next.", "No comment.", "Why do you ask?"], a: 0, why: "Savolga tayyor bo'lish uchun **That's a tough one. Let me think.** — tabiiy va muloyim." } },
      ],
    },
  ],
  words: [
    { en: 'tempting', uz: "vasvasa soladigan, jozibali", ipa: 'ˈtemptɪŋ', pos: 'adj', ex: 'The offer was tempting, but I turned it down.', exUz: "Taklif jozibali edi, lekin rad etdim." },
    { en: 'commitment', uz: "majburiyat, sadoqat", ipa: 'kəˈmɪtmənt', pos: 'noun', ex: 'Opening a business is a big commitment.', exUz: "Biznes ochish katta majburiyatdir." },
    { en: 'trade-off', uz: "yutuq va yo'qotish almashinuvi", ipa: 'ˈtreɪd ɒf', pos: 'noun', ex: 'A higher salary often means a trade-off with free time.', exUz: "Yuqori maosh ko'pincha bo'sh vaqtdan voz kechishni anglatadi." },
    { en: 'indecisive', uz: "qaror qilolmaydigan, ikkilanuvchan", ipa: 'ˌɪndɪˈsaɪsɪv', pos: 'adj', ex: 'I am indecisive when the choices are equally good.', exUz: "Tanlovlar teng yaxshi bo'lsa, men qaror qila olmayman." },
    { en: 'fresh start', uz: "yangi boshlanish", ipa: 'freʃ stɑːt', pos: 'noun', ex: 'Moving to a new city gave her a fresh start.', exUz: "Yangi shaharga ko'chish unga yangi boshlanish berdi." },
    { en: "put yourself in someone's shoes", uz: "o'zini birovning o'rniga qo'ymoq", ipa: 'pʊt jɔːˈself ɪn ˈsʌmwʌnz ʃuːz', pos: 'idiom', ex: "Try to put yourself in her shoes before you criticise.", exUz: "Tanqid qilishdan oldin o'zingizni uning o'rniga qo'yib ko'ring." },
  ],
  practice: [
    { k: 'match', pairs: [['tempting', 'jozibali'], ['commitment', 'majburiyat'], ['trade-off', "yutuq va yo'qotish almashinuvi"], ['indecisive', 'ikkilanuvchan'], ['fresh start', 'yangi boshlanish']] },
    { k: 'listen', say: "If it were me, I wouldn't put all my savings in one place.", opts: ["If it were me, I wouldn't put all my savings in one place.", "If it was me, I wouldn't put all my savings in one place.", "If it were me, I would put all my savings in one place.", "If it were me, I wouldn't put my savings in two places."], a: 0 },
    { k: 'choice', q: "Timur's cousin asked for money. What happened? (Suhbatga ko'ra)", opts: ["Timur lent it without a contract and lost it.", "Timur refused.", "Timur gave him a contract.", "Timur invested in a cafe."], a: 0, why: "*I lent him the money without a contract, and I regret it.*" },
    { k: 'fill', q: "What ___ you do if you lost your passport abroad?", a: ['would'], uz: "Chet elda pasportingizni yo'qotsangiz, nima qilardingiz?", why: "**What would you do if + Past Simple?**" },
    { k: 'fill', q: "If I ___ been in his place, I'd have said no.", a: ['had', "'d"], hint: 'o\'tgan zamon', uz: "Uning o'rnida bo'lganimda, yo'q degan bo'lardim.", why: "**If I had been…, I'd have + V3** (o'tgan zamon gipotezasi)." },
    { k: 'order', uz: "Bu pul miqdoriga bog'liq.", words: ['It', 'depends', 'on', 'how', 'much', 'money', 'is', 'involved.'], extra: ['of', 'does'], why: "**It depends on + so'roq so'z + darak tartib**." },
    { k: 'fix', wrong: "If I would be you, I wouldn't sign it.", a: ["If I were you, I wouldn't sign it.", "If I were you, I would not sign it."], why: "**if** dan keyin **would** yo'q." },
    { k: 'fix', wrong: "If I would have a contract, I would still have my money.", a: ["If I had had a contract, I would still have my money.", "If I'd had a contract, I'd still have my money."], why: "Aralash shart: **if + had + V3** (*had had*), keyin **would + fe'l**." },
    { k: 'tf', q: "*I'd gone home early* — bu yerda 'd = would.", a: false, why: "**'d + gone (V3)** = *had gone*." },
    { k: 'translate', uz: "Bu qiyin savol. Bu miqdorga bog'liq.", a: ["That's a tough one. It depends on the amount.", "That is a tough one. It depends on the amount.", "That's a tough question. It depends on the amount.", "That is a tough question. It depends on the amount."], why: "**That's a tough one. It depends on…**" },
    { k: 'dictation', say: "I'd never put all my eggs in one basket.", a: ["I'd never put all my eggs in one basket.", 'I would never put all my eggs in one basket.'], uz: "Hamma tuxumni bir savatga solmasdim." },
    { k: 'translate', uz: "Boshqaning o'rniga o'zingizni qo'yib ko'ring.", a: ["Put yourself in someone else's shoes.", "Try to put yourself in someone else's shoes.", "Put yourself in his shoes.", "Put yourself in her shoes.", "Put yourself in their shoes.", "Try to put yourself in his shoes.", "Try to put yourself in her shoes.", "Try to put yourself in their shoes."], why: "**put yourself in someone's shoes**." },
    { k: 'speak', say: "That's a tough one. I think I'd probably help, but it would depend on the amount.", uz: "Bu qiyin savol. Menimcha, ehtimol yordam berardim, lekin miqdorga bog'liq." },
    { k: 'speak', say: "If I had been more careful, I wouldn't have lost it.", uz: "Ehtiyotkorroq bo'lganimda, uni yo'qotmasdim." },
  ],
  quiz: [
    { k: 'choice', q: "Why is Dilnoza's offer 'tempting'?", opts: ["The cafe is in a great location.", "She has no savings.", "Bobur is her brother.", "The cafe is already successful."], a: 0, why: "*It's tempting, because the place is in a great location.*" },
    { k: 'choice', q: "\"What would you do if the cafe failed?\" — Qaysi javob to'g'ri qolipda?", opts: ["I'd look for another job.", "I will look for another job.", "I would looked for another job.", "I looked for another job."], a: 0, why: "Taxminiy savol → **would + V1**." },
    { k: 'fill', q: "If it ___ me, I would ask for a contract.", a: ['were', 'was'], uz: "Men bo'lganimda, shartnoma so'rardim.", why: "**If it were me**." },
    { k: 'fix', wrong: "If I would have asked, I wouldn't have lost it.", a: ["If I had asked, I wouldn't have lost it.", "If I had asked, I would not have lost it."], why: "**if** qismida **would have** emas, **had + V3**." },
    { k: 'order', uz: "Hamma jamg'armamni bir joyga solmasdim.", words: ['I', "wouldn't", 'put', 'all', 'my', 'savings', 'in', 'one', 'place.'], extra: ["won't", 'puts'], why: "**wouldn't + V1**." },
    { k: 'listen', say: "I'd have said no if I had known.", opts: ["I'd have said no if I had known.", "I'd say no if I knew.", "I said no if I had known.", "I'd have said yes if I had known."], a: 0 },
    { k: 'tf', q: "*Put yourself in her shoes* — o'zingizni uning o'rniga qo'yib ko'ring.", a: true, why: "Bu idiom: ***put yourself in someone's shoes***." },
    { k: 'translate', uz: "Bu qiyin savol. Bu ko'p narsaga bog'liq.", a: ["That's a tough one. It depends on a lot of things.", "That is a tough one. It depends on a lot of things.", "That's a tough question. It depends on a lot of things.", "That is a tough question. It depends on a lot of things.", "That's a tough one. It depends on many things.", "That's a tough question. It depends on many things."], why: "**That's a tough one. It depends on…**" },
  ],
  summary: [
    "Tinglashda **muammo, maslahat va sabab**ni toping; *'d* ni fe'l shakliga qarab ajrating: **'d + V1 = would**, **'d + V3 = had**.",
    "Taxminiy javob iboralari: **That's a tough one, I'd probably…, It depends on…, If it were me, I'd…, If I'd been in his place, I'd have…**",
    "Javob rejasi: **pozitsiya → sabab → muqobil → shaxsiy misol**, 1-2 daqiqa.",
    "Tez nutqda *would have* /woodəv/ zaif aytiladi; ritm uchun kuchli so'zlarni ajrating.",
    "Yangi so'zlar: **tempting, commitment, trade-off, indecisive, fresh start, put yourself in someone's shoes**.",
  ],
  homework: "Telefoningizga 2 daqiqalik javob yozing: *What would you do if you were offered a job in another country? What would you have done differently in your education?* Keyin tinglang: kamida 2 ta shart gap, 1 ta *It depends on…* va 1 ta *If I had…, I would have…* bo'lsin.",
};

export default lesson;
