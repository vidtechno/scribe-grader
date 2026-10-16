import type { Lesson } from '../../../types';

// Mini lesson (grammar): linking words for adding, contrast, result and order of ideas.
// Comes right after l1 (giving opinions); it does not use conditionals or the passive.
const lesson: Lesson = {
  id: 'u23-l12',
  title: 'Linking ideas: however, therefore, in addition',
  titleUz: "Fikrlarni bog'lash: however, therefore, in addition, on the other hand",
  mini: true,
  kind: 'grammar',
  goal: "Fikrlaringizni bog'lovchi so'zlar bilan tartibli aytasiz: **qo'shish** (*in addition, moreover*), **qarama-qarshilik** (*however, on the other hand, although*), **natija** (*therefore, as a result*) va **tartib** (*firstly, finally*). Tinish belgilarini ham to'g'ri qo'yasiz.",
  slides: [
    {
      title: "Nega bog'lovchi so'zlar kerak?",
      blocks: [
        { t: 'p', md: "Fikr bildirganda faqat *I think…* deyish yetarli emas. Gaplar bir-biri bilan **bog'langan** bo'lsa, nutqingiz va yozuvingiz tartibli, ishonchli chiqadi. Bog'lovchi so'zlar tinglovchiga **keyingi gap nima haqida bo'lishini** oldindan aytadi." },
        { t: 'table', head: ['Maqsad', "So'zlar", 'Misol'], speak: [2], rows: [
          ["Qo'shish", 'in addition, moreover, also', "The course is cheap. In addition, it is online."],
          ['Qarama-qarshilik', 'however, on the other hand', 'The flat is big. However, it is far from the centre.'],
          ['Natija', 'therefore, as a result, so', "Prices went up. Therefore, fewer people bought tickets."],
          ['Misol', 'for example, for instance', 'Many cities have problems. For example, traffic is a big one.'],
          ['Tartib', 'firstly, secondly, finally', 'Firstly, it saves time.'],
          ['Xulosa', 'in conclusion, to sum up', 'In conclusion, I agree with the idea.'],
        ] },
        { t: 'tip', tone: 'info', md: "**however, therefore, in addition, moreover** — odatda gap boshida turadi va **vergul** bilan ajratiladi: *However, …*, *Therefore, …*." },
        { t: 'check', ex: { k: 'choice', q: "Qaysi so'z qarama-qarshilikni bildiradi?", opts: ['however', 'moreover', 'therefore', 'firstly'], a: 0, why: "**however** — lekin, biroq (qarama-qarshilik)." } },
      ],
    },
    {
      title: "However, on the other hand, whereas",
      blocks: [
        { t: 'p', md: "Bir gapda yaxshi, keyingisida yomon tomonni aytmoqchi bo'lsangiz, quyidagilar yordam beradi:" },
        { t: 'examples', items: [
          { en: "Online lessons are flexible. However, some students miss their classmates.", uz: "Onlayn darslar qulay. Biroq ba'zi talabalar sinfdoshlarini sog'inadi.", note: "**However,** — yangi gap boshida, keyin vergul." },
          { en: "Living in a city is exciting. On the other hand, it can be very expensive.", uz: "Shaharda yashash qiziqarli. Boshqa tomondan, bu juda qimmat bo'lishi mumkin.", note: "**On the other hand,** — ikkinchi tomonni ko'rsatadi." },
          { en: "My brother likes football, whereas I prefer swimming.", uz: "Akam futbolni yaxshi ko'radi, men esa suzishni afzal ko'raman.", note: "**whereas** — ikki narsani solishtiradi, gap o'rtasida keladi." },
          { en: "Although it was raining, we went for a walk.", uz: "Yomg'ir yog'ayotgan bo'lsa ham, biz sayrga chiqdik.", note: "**Although** + to'liq gap." },
        ] },
        { t: 'compare',
          good: { title: "To'g'ri", items: ["Although it was late, we kept working.", "It was late. However, we kept working.", "I like tea, whereas my wife likes coffee."] },
          bad: { title: 'Xato', items: ["Although it was late, but we kept working.", "It was late, however we kept working.", "Despite of the rain, we went out."] } },
        { t: 'tip', tone: 'warn', md: "O'zbek tilida «garchi … lekin …» deyiladi, shuning uchun inglizchada ham ikkalasini qo'yib yuboramiz. Bu **xato**: **Although** yoki **but** — faqat bittasi kerak. *Although it was late, we kept working.* yoki *It was late, but we kept working.*" },
        { t: 'check', ex: { k: 'fix', wrong: "Although I was tired, but I finished the report.", a: ["Although I was tired, I finished the report.", "I was tired, but I finished the report."], why: "**Although** va **but** birga ishlatilmaydi." } },
      ],
    },
    {
      title: "Qo'shish va natija",
      blocks: [
        { t: 'p', md: "Fikringizga yana bir dalil qo'shmoqchi bo'lsangiz — **in addition / moreover**. Sabab-natijani ko'rsatmoqchi bo'lsangiz — **therefore / as a result**." },
        { t: 'examples', items: [
          { en: "Cycling is cheap. Moreover, it keeps you healthy.", uz: "Velosipedda yurish arzon. Bundan tashqari, u sizni sog'lom saqlaydi.", note: "**Moreover** — rasmiyroq, esse va nutqda yaxshi." },
          { en: "The company lost many customers. As a result, it closed two shops.", uz: "Kompaniya ko'p mijozlarini yo'qotdi. Natijada ikkita do'konini yopdi.", note: "**As a result** — nima bo'ldi, shu natija." },
          { en: "He didn't prepare for the exam. Therefore, he failed it.", uz: "U imtihonga tayyorlanmadi. Shuning uchun u o'ta olmadi.", note: "**Therefore** — rasmiy; oddiy gapda **so** deymiz." },
          { en: "I was ill, so I stayed at home.", uz: "Men kasal edim, shuning uchun uyda qoldim.", note: "**so** — norasmiy, gap o'rtasida." },
        ] },
        { t: 'tip', tone: 'good', md: "Qisqa qoida: **so** — og'zaki nutq; **therefore** — esse, ish xati, rasmiy nutq. **because** sababni (nega?), **so / therefore** natijani (nima bo'ldi?) aytadi." },
        { t: 'check', ex: { k: 'fill', q: "There was heavy snow. ___ , the school was closed.", a: ['As a result', 'Therefore', 'as a result', 'therefore'], why: "Natijani bildiradi: **As a result** yoki **Therefore**." } },
        { t: 'check', ex: { k: 'choice', q: "The app is free. ___ , it has no adverts.", opts: ['In addition', 'However', 'Whereas', 'Although'], a: 0, why: "Yana bitta yaxshi tomonni qo'shyapmiz: **In addition**." } },
      ],
    },
    {
      title: "Matn: kichik fikr-mulohaza",
      blocks: [
        { t: 'text', title: 'Working from home', voice: 'emma', en: "Many people now work from home, and I think it has clear advantages. Firstly, you save time because you do not travel to the office. In addition, you can organise your day in your own way. However, there are some problems. For example, it is easy to feel lonely, whereas in an office you always meet colleagues. Although some people work better at home, others lose their focus. As a result, many companies now ask their staff to come to the office two or three days a week. In conclusion, I believe a mix of both is the best choice.", uz: "Hozir ko'p odamlar uydan ishlaydi va menimcha, bunda aniq afzalliklar bor. Birinchidan, ofisga bormaganingiz uchun vaqtni tejaysiz. Bundan tashqari, kuningizni o'zingizcha tashkil qila olasiz. Biroq ba'zi muammolar ham bor. Masalan, o'zingizni yolg'iz his qilish oson, ofisda esa doim hamkasblar bilan uchrashasiz. Ba'zi odamlar uyda yaxshiroq ishlasa ham, boshqalar e'tiborini yo'qotadi. Natijada ko'p kompaniyalar xodimlardan haftasiga ikki-uch kun ofisga kelishni so'raydi. Xulosa qilib aytganda, menimcha, ikkalasining aralashmasi eng yaxshi tanlov." },
        { t: 'check', ex: { k: 'tf', q: "The writer thinks working from home has no problems.", a: false, why: "*However, there are some problems.*" } },
        { t: 'check', ex: { k: 'choice', q: "Which word shows the writer's final opinion?", opts: ['In conclusion', 'Firstly', 'For example', 'Whereas'], a: 0, why: "**In conclusion** — xulosa." } },
      ],
    },
  ],
  words: [
    { en: 'in contrast', uz: "aksincha, farqli o'laroq", ipa: 'ɪn ˈkɒn.trɑːst', pos: 'phrase', ex: 'Summers are hot here. In contrast, winters are very mild.', exUz: 'Bu yerda yozlar issiq. Aksincha, qishlar juda yumshoq.' },
    { en: 'therefore', uz: 'shuning uchun', ipa: 'ˈðeə.fɔːr', pos: 'adv', ex: 'It was raining. Therefore, we stayed inside.', exUz: "Yomg'ir yog'ayotgan edi. Shuning uchun uyda qoldik." },
    { en: 'moreover', uz: 'bundan tashqari', ipa: 'mɔːrˈəʊ.vər', pos: 'adv', ex: 'The hotel is clean. Moreover, the staff are friendly.', exUz: 'Mehmonxona toza. Bundan tashqari, xodimlar xushmuomala.' },
    { en: 'as a result', uz: 'natijada', ipa: 'æz ə rɪˈzʌlt', pos: 'phrase', ex: 'He trained hard. As a result, he won the race.', exUz: "U qattiq shug'ullandi. Natijada u poygada g'alaba qozondi." },
    { en: 'nevertheless', uz: "shunga qaramay", ipa: 'ˌnev.ə.ðəˈles', pos: 'adv', ex: 'The test was hard. Nevertheless, she passed it.', exUz: "Test qiyin edi. Shunga qaramay, u o'tdi." },
  ],
  practice: [
    { k: 'match', pairs: [['however', 'biroq'], ['therefore', 'shuning uchun'], ['moreover', 'bundan tashqari'], ['whereas', 'esa (solishtirish)'], ['for example', 'masalan']] },
    { k: 'choice', q: "The bus is cheap. ___ , it is often late.", opts: ['However', 'Therefore', 'Moreover', 'For example'], a: 0, why: "Yaxshi tomondan keyin yomon tomon: **However**." },
    { k: 'choice', q: "I love my job. ___ , the salary is good.", opts: ['In addition', 'However', 'Although', 'Whereas'], a: 0, why: "Yana bitta yaxshi narsa qo'shamiz: **In addition**." },
    { k: 'fill', q: "___ it was expensive, we bought the tickets.", a: ['Although', 'Even though'], uz: "Qimmat bo'lsa ham, biz chiptalarni sotib oldik.", why: "**Although** + to'liq gap, keyin **but** kerak emas." },
    { k: 'fill', q: "Ali likes jazz, ___ his wife prefers classical music.", a: ['whereas', 'while'], uz: "Ali jazzni yaxshi ko'radi, xotini esa klassik musiqani afzal ko'radi.", why: "Solishtirish: **whereas**." },
    { k: 'fill', q: "He studied hard. ___ , he got an excellent mark.", a: ['As a result', 'Therefore', 'as a result', 'therefore'], uz: "U qattiq o'qidi. Natijada a'lo baho oldi.", why: "Natija: **As a result** yoki **Therefore**." },
    { k: 'order', uz: "Biroq, bu juda qimmat.", words: ['However,', 'it', 'is', 'very', 'expensive.'], extra: ['Although', 'but'], why: "**However,** gap boshida, vergul bilan." },
    { k: 'order', uz: "Shuning uchun biz erta ketdik.", words: ['Therefore,', 'we', 'left', 'early.'], extra: ['whereas', 'however'], alt: [['We', 'therefore', 'left', 'early.']], why: "**Therefore** natijani bildiradi." },
    { k: 'fix', wrong: "Although the film was long, but I enjoyed it.", a: ["Although the film was long, I enjoyed it.", "The film was long, but I enjoyed it."], why: "**Although** bilan **but** ishlatilmaydi." },
    { k: 'fix', wrong: "The hotel was nice, however it was noisy.", a: ["The hotel was nice, but it was noisy.", "The hotel was nice, although it was noisy.", "The hotel was nice, but it was very noisy."], why: "**however** ikki gapni vergul bilan bog'lamaydi (yozuvda uni nuqtadan keyin ishlating); shu yerda **but** qulay." },
    { k: 'translate', uz: "Bundan tashqari, bu ish qiziqarli.", a: ["Moreover, this job is interesting.", "In addition, this job is interesting.", "Moreover, the job is interesting.", "In addition, the job is interesting."], why: "Qo'shish: **Moreover / In addition**." },
    { k: 'dictation', say: 'On the other hand, it is very expensive.', a: ['On the other hand, it is very expensive.', "On the other hand, it's very expensive."], uz: "Boshqa tomondan, bu juda qimmat." },
    { k: 'speak', say: 'Firstly, it saves time. In addition, it is cheap.', uz: "Birinchidan, vaqtni tejaydi. Bundan tashqari, arzon." },
    { k: 'speak', say: 'I like the idea. However, I have one concern.', uz: "Menga g'oya yoqadi. Biroq bitta xavotirim bor." },
  ],
  quiz: [
    { k: 'choice', q: "Qaysi gap to'g'ri?", opts: ["Although it was cold, we went swimming.", "Although it was cold, but we went swimming.", "Although it was cold however we went swimming.", "Although of the cold, we went swimming."], a: 0, why: "**Although** + gap, **but** yo'q." },
    { k: 'choice', q: "Prices are high. ___ , many people still shop here.", opts: ['Nevertheless', 'Therefore', 'In addition', 'For instance'], a: 0, why: "Kutilmagan qarama-qarshilik: **Nevertheless** (shunga qaramay)." },
    { k: 'fill', q: "The service was slow. ___ , the food was excellent.", a: ['However', 'On the other hand', 'however', 'on the other hand'], why: "Qarama-qarshilik: **However / On the other hand**." },
    { k: 'fill', q: "Many cities are crowded. ___ example, Tokyo has millions of people.", a: ['For', 'for'], why: "Misol: **For example**." },
    { k: 'order', uz: "Natijada u ishini yo'qotdi.", words: ['As', 'a', 'result,', 'he', 'lost', 'his', 'job.'], extra: ['whereas', 'but'], why: "**As a result,** gap boshida." },
    { k: 'fix', wrong: "Despite of the rain, we played football.", a: ["Despite the rain, we played football.", "In spite of the rain, we played football."], why: "**Despite** dan keyin **of** kerak emas; **of** faqat **in spite of** ichida bor." },
    { k: 'tf', q: "*Therefore* natijani bildiradi.", a: true, why: "**Therefore** — shuning uchun (natija)." },
    { k: 'translate', uz: "Birinchidan, bu arzon.", a: ["Firstly, it is cheap.", "Firstly, it's cheap.", "Firstly, this is cheap.", "First of all, it is cheap.", "First of all, it's cheap."], why: "Tartib: **Firstly,**." },
  ],
  summary: [
    "**Qo'shish:** in addition, moreover. **Qarama-qarshilik:** however, on the other hand, whereas, although. **Natija:** therefore, as a result, so.",
    "**However, Therefore, In addition** gap boshida turadi va vergul bilan ajratiladi. Ikki gapni faqat vergul bilan **however** orqali bog'lamang.",
    "**Although** bilan **but** birga ishlatilmaydi: *Although it was late, we stayed.*",
    "Tartib va xulosa: **firstly, secondly, finally, in conclusion**. Yangi so'zlar: **however, therefore, moreover, whereas, nevertheless**.",
  ],
  homework: "Bitta mavzu tanlang (masalan, uydan ishlash yoki onlayn o'qish) va 6 gap yozing. Ularda **firstly, in addition, however, therefore** va **in conclusion** so'zlarini ishlating.",
};

export default lesson;
