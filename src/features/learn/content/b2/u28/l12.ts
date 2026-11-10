import type { Lesson } from '../../../types';

// Mini lesson (grammar): other ways to emphasise: emphatic do, so/such, how/what exclamations, fronting, the more... the more. Complements cleft (l1) and inversion (l2).
const lesson: Lesson = {
  id: 'u28-l12',
  title: 'Fronting and emphasis',
  titleUz: "Urg'u uchun: emphatic do/does/did, so, such, how, rhetorical structures",
  mini: true,
  kind: 'grammar',
  goal: "Gapga **urg'u** berishning kichik vositalarini bilasiz: **emphatic do** (*I did tell you*), **so / such** (*such a pity, so many*), **how / what** undovlari (*What a day!*), **fronting** (*Down came the rain*) va **the more… the more…**. Gapirishda urg'uni **ohang** bilan berasiz.",
  slides: [
    {
      title: "Emphatic do: 'albatta, haqiqatan'",
      blocks: [
        { t: 'p', md: "Cleft va inversiyadan tashqari, inglizlar urg'uni oddiy **do / does / did** bilan ham beradi. Bu **tasdiq** gapda ishlatiladi, odatda **inkor etilgan yoki shubha qilingan** narsani tuzatish uchun. Yordamchi fe'l **kuchli urg'u** bilan aytiladi, asosiy fe'l esa **V1** shaklida qoladi." },
        { t: 'table', head: ['Oddiy gap', 'Emphatic', 'Qachon'], speak: [1], rows: [
          ['I like the new office.', 'I do like the new office.', "Shubhani yo'qotish"],
          ['She looks tired.', 'She does look tired.', "Fikrni tasdiqlash (3-shaxs: *does* + V1)"],
          ['I told you about it.', 'I did tell you about it!', "Ayblovga javob: *Siz aytmagansiz* → *Aytganman!*"],
          ['Be careful!', 'Do be careful!', "Iltimos yoki ogohlantirish kuchaytiriladi"],
        ] },
        { t: 'tip', tone: 'info', md: "**Muhim**: *does / did* dan keyin fe'l **V1** (*She does look*, *does looks* emas; *I did tell*, *did told* emas). Gapirishda **do / does / did** so'zi urg'u oladi: *I DID tell you!* Yozuvda ba'zan *italik* yoki bosh harf bilan ko'rsatiladi. *To be* bilan *do* ishlatilmaydi: *It IS cold* (faqat urg'u bilan aytiladi)." },
        { t: 'check', ex: { k: 'fill', q: "— You never told me about the meeting. — I ___ tell you! You just forgot.", a: ['did'], hint: "o'tgan zamon, urg'u", why: "O'tgan zamon + ayblovga javob: **I did tell you!**" } },
        { t: 'check', ex: { k: 'choice', q: "Qaysi gap to'g'ri?", opts: ["She does look tired today.", "She does looks tired today.", "She do look tired today.", "She does looking tired today."], a: 0, why: "**does + V1**: *does look*." } },
      ],
    },
    {
      title: "So, such, how va what",
      blocks: [
        { t: 'table', head: ['Tuzilma', 'Misol', 'Izoh'], speak: [1], rows: [
          ['so + sifat / ravish', "It was so cold that we left early.", "Faqat sifat yoki ravish"],
          ['so many / much / few / little', "There were so many people!", "Miqdor so'zlari bilan"],
          ['such + (a/an) + (sifat) + ot', "It was such a pity. / Such lovely weather!", "Ot albatta bor"],
          ['How + sifat / ravish', "How kind of you! / How quickly time flies!", "Sifat: ot yo'q"],
          ['What + (a/an) + (sifat) + ot', "What a day! / What awful weather!", "Ot bor"],
        ] },
        { t: 'tip', tone: 'good', md: "**Qoida**: **so** + sifat (ot yo'q), **such** + ot (ot bor). *so beautiful* = *such a beautiful day*. **what** ham ot bilan: *What a view!*; **how** sifat bilan: *How beautiful!*. Sanalmaydigan ot yoki ko'plikda *a* qo'yilmaydi: *What awful weather!*, *Such lovely flowers!*" },
        { t: 'compare',
          good: { title: "To'g'ri", items: ['It was so cold.', 'It was such a cold day.', 'How kind of you!', 'What a kind person!'] },
          bad: { title: 'Xato', items: ['It was such cold.', 'It was so a cold day.', 'What kind of you!', 'How a kind person!'] } },
        { t: 'check', ex: { k: 'fill', q: "It was ___ a pity that you missed the final.", a: ['such'], hint: "so yoki such?", why: "*a pity* — ot, shuning uchun **such a**." } },
        { t: 'check', ex: { k: 'choice', q: "___ beautiful the view is from up here!", opts: ['How', 'What', 'Such', 'So a'], a: 0, why: "Sifat (*beautiful*) bilan, ot yo'q: **How beautiful**." } },
      ],
    },
    {
      title: "Fronting, 'the more… the more…' va ohang",
      blocks: [
        { t: 'p', md: "**Fronting** — odatda gap oxirida keladigan qismni gap boshiga chiqarish. Bunda ko'pincha **ega bilan fe'l o'rni almashadi** (*Down came the rain*). Bu adabiy, kitobiy uslub: hikoyada, esselarda ishlatiladi, kundalik suhbatda kam." },
        { t: 'examples', items: [
          { en: "Over the hill came a tall rider.", uz: "Tepalik ortidan baland bo'yli chavandoz chiqib keldi.", note: "**Joy + fe'l + ega**: hikoyada manzarani jonlantiradi." },
          { en: "In the middle of the room stood a huge old table.", uz: "Xonaning o'rtasida katta eski stol turardi.", note: "Fe'l *stood* egadan oldin. Ega olmosh bo'lsa, inversiya yo'q: *Down it came.*" },
          { en: "Gone are the days when we could leave doors unlocked.", uz: "Eshiklarni ochiq qoldirish mumkin bo'lgan kunlar o'tib ketdi.", note: "Barqaror kitobiy ibora." },
          { en: "The more you practise, the better you become.", uz: "Qanchalik ko'p mashq qilsangiz, shunchalik yaxshi bo'lasiz.", note: "**the + qiyosiy… the + qiyosiy…** — ikki narsa birga o'sadi." },
        ] },
        { t: 'tip', tone: 'info', md: "**Ohang**: gapirishda urg'u berilgan so'z **balandroq va cho'ziqroq** aytiladi: *I DID tell you*, *What a DAY!*, *SUCH a pity!* Siz hech narsani qo'shmay, faqat ohang bilan ham fikrni ta'kidlay olasiz." },
        { t: 'check', ex: { k: 'choice', q: "In the middle of the square ___ a statue of a horse.", opts: ['stood', 'it stood', 'was stood', 'stand'], a: 0, why: "Fronting: joy + fe'l (*stood*) + ega (*a statue*)." } },
        { t: 'tip', tone: 'warn', md: "*the more… the more…* da ikkala qismda ham **the** bor: *The more I study, the more I learn.*" },
      ],
    },
    {
      title: "Tipik xatolar (o'zbek tilidan)",
      blocks: [
        { t: 'p', md: "Urg'u uchun o'zbekchada *juda*, *naqadar* deymiz. Inglizchaga so'zma-so'z o'girsak, 4 ta xato chiqadi:" },
        { t: 'compare',
          good: { title: "To'g'ri", items: ['She does like it.', 'It was such a lovely day.', 'What awful weather!', 'The more I read, the more I understand.'] },
          bad: { title: 'Xato', items: ['She does likes it.', 'It was so lovely day.', 'How awful weather!', 'The more I read, more I understand.'] } },
        { t: 'check', ex: { k: 'fix', wrong: "She does likes the new teacher.", a: ["She does like the new teacher."], why: "**does** dan keyin fe'l V1: *like*." } },
        { t: 'check', ex: { k: 'fix', wrong: "It was so lovely day yesterday.", a: ["It was such a lovely day yesterday.", "It was a lovely day yesterday.", "It was so lovely yesterday."], why: "**so** + sifat; **such a** + sifat + ot." } },
        { t: 'check', ex: { k: 'fix', wrong: "How awful weather we had in March!", a: ["What awful weather we had in March!"], why: "Ot (*weather*) bor, shuning uchun **What**, *How* emas." } },
        { t: 'check', ex: { k: 'fix', wrong: "The more I read, more I understand.", a: ["The more I read, the more I understand.", "The more I study, the more I understand."], why: "Ikkinchi qismda ham **the** kerak." } },
      ],
    },
    {
      title: "O'qing va dialog",
      blocks: [
        { t: 'text', title: 'What a week!', voice: 'george', en: "What a week it has been! I did warn my brother that the mountain trail would be difficult, but he insisted on going. The weather was utterly miserable, and the sheer force of the wind nearly knocked us over. Frankly, it was downright dangerous, and we should have turned back at once. Such a long climb is not for beginners! Yet the view from the top was tremendous. Below us lay a sea of white cloud, and over it rose the sun. The more we climbed, the more we forgot how tired we were. Indeed, by the evening I felt it had been one of the best days of my life. I do regret one thing: I did not take a better camera.", uz: "Qanday hafta bo'ldi! Akamni tog' yo'li qiyin bo'lishi haqida ogohlantirgan edim, lekin u borishda turib oldi. Ob-havo butunlay yomon edi, shamolning sof kuchi bizni deyarli yiqitib yubordi. Ochig'ini aytganda, bu mutlaqo xavfli edi va biz darhol orqaga qaytishimiz kerak edi. Bunday uzun ko'tarilish yangi boshlovchilar uchun emas! Shunday bo'lsa-da, cho'qqidan ko'rinish ajoyib edi. Pastimizda oq bulutlar dengizi yotardi, uning ustidan quyosh ko'tarildi. Qancha ko'p ko'tarilsak, shuncha charchaganimizni unutdik. Haqiqatan ham, kechga kelib, bu hayotimdagi eng yaxshi kunlardan biri bo'lganini his qildim. Bir narsaga pushaymonman: yaxshiroq kamera olmadim." },
        { t: 'check', ex: { k: 'tf', q: "The writer thinks the weather was pleasant.", a: false, why: "*The weather was utterly miserable.*" } },
        { t: 'dialog', lines: [
          { who: 'Lucy', en: "What a concert that was! I can't believe how good the singer was.", uz: "Qanday konsert bo'ldi! Qo'shiqchi qanchalik yaxshi bo'lganiga ishonmayman." },
          { who: 'Max', en: "It was so loud that my ears are still ringing. But she did sound tremendous.", uz: "U shunchalik baland ediki, qulog'im hali ham jiringlayapti. Lekin u haqiqatan ajoyib ijro etdi." },
          { who: 'Lucy', en: "Indeed she did. And not only was her voice incredible, but the whole show was perfect.", uz: "Haqiqatan ham. Uning ovozi ajoyib bo'libgina qolmay, butun shou mukammal edi." },
          { who: 'Max', en: "Frankly, I expected a downright disaster after all those delays.", uz: "Ochig'ini aytsam, shuncha kechikishlardan keyin mutlaqo fojia kutgandim." },
          { who: 'Lucy', en: "I did say it would be fine!", uz: "Men yaxshi bo'ladi, deb aytgan edim-ku!" },
          { who: 'Max', en: "You did, I admit it. And the more she sang, the more I enjoyed it.", uz: "Rost, tan olaman. Va u qancha ko'p kuylasa, men shuncha ko'p zavqlandim." },
        ] },
        { t: 'check', ex: { k: 'choice', q: "What did Max expect before the concert?", opts: ["A perfect evening", "A downright disaster", "A cheap ticket", "A short show"], a: 1, why: "*I expected a downright disaster after all those delays.*" } },
      ],
    },
  ],
  words: [
    { en: 'utterly', uz: "butunlay, mutlaqo", ipa: 'ˈʌt.ə.li', pos: 'adv', ex: "The hotel was utterly unprepared for so many guests.", exUz: "Mehmonxona shuncha mehmonga mutlaqo tayyor emas edi." },
    { en: 'sheer', uz: "sof, butunlay (kuchli ta'kid)", ipa: 'ʃɪə', pos: 'adj', ex: "The sheer size of the stadium surprised everyone.", exUz: "Stadionning ulkan o'lchami hammani hayratga soldi." },
    { en: 'downright', uz: "mutlaqo, shak-shubhasiz (salbiy ma'noda)", ipa: 'ˈdaʊn.raɪt', pos: 'adv', ex: "His behaviour at the meeting was downright rude.", exUz: "Uning yig'ilishdagi xatti-harakati mutlaqo qo'pol edi." },
    { en: 'tremendous', uz: "ulkan, ajoyib", ipa: 'trəˈmen.dəs', pos: 'adj', ex: "She made a tremendous effort to finish on time.", exUz: "U o'z vaqtida tugatish uchun ulkan harakat qildi." },
    { en: 'frankly', uz: "ochig'ini aytganda", ipa: 'ˈfræŋk.li', pos: 'adv', ex: "Frankly, I think the plan needs more work.", exUz: "Ochig'ini aytsam, rejani yana ishlash kerak." },
    { en: 'indeed', uz: "haqiqatan ham, darhaqiqat", ipa: 'ɪnˈdiːd', pos: 'adv', ex: "It was a difficult year, indeed the hardest of my career.", exUz: "Bu qiyin yil edi, darhaqiqat, kareramdagi eng qiyini." },
  ],
  practice: [
    { k: 'match', pairs: [['utterly', 'butunlay'], ['sheer', 'sof, shunchaki'], ['downright', 'mutlaqo (salbiy)'], ['tremendous', 'ulkan, ajoyib'], ['frankly', "ochig'ini aytganda"], ['indeed', 'haqiqatan ham']] },
    { k: 'choice', q: "A: You didn't call me yesterday. B: ___!", opts: ["I did call you", "I called do you", "I do called you", "I did called you"], a: 0, why: "Ayblovga javob: **I did call you** (did + V1) — *did* ga urg'u." },
    { k: 'fill', q: "It was ___ a lovely evening that nobody wanted to go home.", a: ['such'], hint: "so yoki such?", why: "*a lovely evening* — ot bor: **such a**." },
    { k: 'order', uz: "Qanday dahshatli safar bo'ldi!", words: ['What', 'a', 'terrible', 'journey', 'we', 'had!'], extra: ['How', 'such'], why: "**What + a + sifat + ot** — undov." },
    { k: 'fix', wrong: "He did went to the meeting after all.", a: ["He did go to the meeting after all.", "He went to the meeting after all."], why: "**did** dan keyin V1: *go*." },
    { k: 'tf', q: "*The more you practise, more you improve.* — Gap to'g'ri.", a: false, why: "Ikkinchi qismda **the** kerak: *the more you improve*." },
    { k: 'choice', q: "___ noisy this street is at night!", opts: ['What', 'How', 'Such', 'So a'], a: 1, why: "Sifat (*noisy*) bilan, ot yo'q → **How noisy**." },
    { k: 'translate', uz: "Qanchalik ko'p o'qisam, shunchalik ko'p tushunaman.", a: ["The more I read, the more I understand.", "The more I study, the more I understand.", "The more I read, the more I learn.", "The more I study, the more I learn."], why: "**the more…, the more…**" },
    { k: 'listen', say: "I did tell you that it would rain.", opts: ["I did tell you that it would rain.", "I did told you that it would rain.", "I do told you that it will rain.", "I did tell you that it rained."], a: 0 },
    { k: 'fix', wrong: "How awful weather we had on holiday!", a: ["What awful weather we had on holiday!", "What awful weather we had on holiday"], why: "Ot (*weather*) bor: **What**." },
    { k: 'fill', q: "Over the hill ___ a tall rider on a black horse.", a: ['came'], uz: "Tepalik ortidan qora otdagi baland bo'yli chavandoz chiqib keldi.", hint: "fronting: o'tgan zamon", why: "**Over the hill came a tall rider** — joy + fe'l + ega." },
    { k: 'dictation', say: "Frankly, it was a downright dangerous idea.", uz: "Ochig'ini aytganda, bu mutlaqo xavfli g'oya edi." },
    { k: 'choice', q: "Which sentence is correct?", opts: ["It was so a cold day.", "It was such a cold day.", "It was so cold day.", "It was such cold."], a: 1, why: "**such a + sifat + ot**. *so* faqat sifat bilan." },
    { k: 'speak', say: "What a day it has been! I did tell you it would be tiring." },
  ],
  quiz: [
    { k: 'choice', q: "Which sentence is correct?", opts: ["She does looks very tired.", "She does look very tired.", "She do look very tired.", "She is look very tired."], a: 1, why: "**does + V1**." },
    { k: 'fill', q: "The ___ I think about it, the less I like the idea.", a: ['more'], hint: "the more…, the less…", why: "**the more…, the less…** — ikkita o'zgarish birga." },
    { k: 'tf', q: "*What lovely flowers!* — Gap to'g'ri.", a: true, why: "**What + sifat + ko'plik ot**: *a* kerak emas." },
    { k: 'fix', wrong: "It was so a good film.", a: ["It was such a good film.", "It was a good film.", "It was so good."], why: "**such a + sifat + ot**, yoki *so + sifat*." },
    { k: 'order', uz: "Haqiqatan ham, u ajoyib edi.", words: ['Indeed,', 'it', 'was', 'tremendous.'], extra: ['such', 'do'], why: "**Indeed** — gapni kuchaytiradi." },
    { k: 'listen', say: "Gone are the days when we could leave doors unlocked.", opts: ["Gone are the days when we could leave doors unlocked.", "Go on the days when we could leave doors unlocked.", "Gone are the days when we could leave doors unlocking.", "Gone were the days when we could leave doors unlocked."], a: 0 },
    { k: 'translate', uz: "Qanday ajoyib ob-havo!", a: ["What lovely weather!", "What wonderful weather!", "What beautiful weather!", "What great weather!", "What fantastic weather!", "What nice weather!", "What amazing weather!"], why: "**What + (sifat) + sanalmaydigan ot** — *a* kerak emas." },
    { k: 'choice', q: "Which sentence has fronting (inversion for effect)?", opts: ["Down came the rain.", "The rain came down.", "It rained a lot.", "Rain was heavy."], a: 0, why: "**Down came the rain** — yo'nalish so'zi boshda, fe'l ega oldida." },
  ],
  summary: [
    "**Emphatic do**: *I did tell you, She does look tired* — tasdiqni kuchaytiradi; keyin **V1**. Urg'u *do/does/did* ga tushadi.",
    "**so** + sifat/ravish, **such (a)** + (sifat) + ot; undovlarda **How** + sifat, **What (a)** + ot.",
    "**Fronting** (*Down came the rain, Gone are the days…*) kitobiy; **the more…, the more…** ikki jarayonni bog'laydi.",
    "Xatolar: *does likes* → *does like*; *so lovely day* → *such a lovely day*; *How awful weather* → *What awful weather*; *more I read, more…* → *the more I read, the more…*",
    "Yangi so'zlar: **utterly, sheer, downright, tremendous, frankly, indeed**.",
  ],
  homework: "Qiziq kunlaringizdan biri haqida 6-8 gap yozing: 1 ta *What a…!*, 1 ta *such a…*, 1 ta *I did…* (kimningdir gumonini rad etish), 1 ta *the more…, the more…* va kamida 2 ta yangi so'z. Keyin ovoz chiqarib o'qing va urg'u so'zlarini balandroq ayting.",
};

export default lesson;
