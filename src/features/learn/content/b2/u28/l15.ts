import type { Lesson } from '../../../types';

// Mini lesson (skill): reading an essay with weaknesses (repetition, weak linking, off-topic, sweeping claims), then rewriting the conclusion and a paragraph.
const lesson: Lesson = {
  id: 'u28-l15',
  title: 'Reading and writing: improving a model essay',
  titleUz: "O'qish va yozish: essay namunasini tahlil qilish va yaxshilash",
  mini: true,
  kind: 'skill',
  goal: "Zaif essayni o'qib, uning kamchiliklarini topasiz (**takror, zaif bog'lanish, mavzudan chetga chiqish, qamrovli da'vo, noaniq so'zlar**), keyin **xulosani (60 so'z)** va **bitta paragrafni** qayta yozasiz.",
  slides: [
    {
      title: "O'qing: zaif essay",
      blocks: [
        { t: 'p', md: "Savol: *Some people think that children should start learning a foreign language at primary school. To what extent do you agree?* Quyidagi essayni o'qing. Unda **fikr to'g'ri**, lekin **yozilishi zaif**. Kamchiliklarni toping." },
        { t: 'text', title: 'A weak essay', voice: 'george', en: "Nowadays many people say that children should start learning a foreign language at primary school. I agree with this idea, and in this essay I will explain my reasons. Firstly, young children learn languages quickly. Children who start early often speak a language very well. For example, my younger cousin started English lessons at the age of six, and now she speaks it better than I do. All children can learn a language without any problems. Also, learning a language is good for the brain. It is good for children's memory and it is good for their concentration. Computer games are very popular with children, and many games are in English. Some games are violent, and parents should check them. Some parents worry about the cost of language lessons. Schools have little money, and schools need money for books. Teachers need training, and training is expensive. In conclusion, I think that children should learn a foreign language at primary school because it is a good idea. In my opinion this is a good thing for children, and it is also a good thing for schools, so I think primary schools should do it.", uz: "Bugungi kunda ko'pchilik bolalar boshlang'ich maktabdan chet tilini o'rganishi kerak, deydi. Men bu fikrga qo'shilaman va bu essayda sabablarimni tushuntiraman. Birinchidan, kichik bolalar tillarni tez o'rganadi. Erta boshlagan bolalar tilni ko'pincha juda yaxshi biladi. Masalan, mening kichik amakivachcham olti yoshida ingliz tili darsini boshlagan va hozir u tilni mendan yaxshiroq biladi. Hamma bolalar tilni hech qanday qiyinchiliksiz o'rgana oladi. Shuningdek, til o'rganish miya uchun yaxshi. Bu bolalarning xotirasi uchun ham yaxshi, diqqati uchun ham yaxshi. Kompyuter o'yinlari bolalar orasida juda mashhur va ko'p o'yinlar inglizcha. Ba'zi o'yinlar zo'ravonlik bilan to'la, ota-onalar ularni tekshirishi kerak. Ba'zi ota-onalar til darslari narxidan xavotirda. Maktablarda pul kam, maktablarga kitoblar uchun pul kerak. O'qituvchilarga tayyorgarlik kerak, tayyorgarlik esa qimmat. Xulosa qilib aytganda, men bolalar boshlang'ich maktabda chet tilini o'rganishi kerak, deb o'ylayman, chunki bu yaxshi g'oya. Mening fikrimcha, bu bolalar uchun yaxshi narsa, maktablar uchun ham yaxshi narsa, shuning uchun boshlang'ich maktablar buni qilishi kerak, deb o'ylayman." },
        { t: 'check', ex: { k: 'choice', q: "What is the writer's position?", opts: ['The writer agrees that primary children should learn a language', 'The writer disagrees completely', 'The writer is undecided', 'The writer thinks only secondary pupils should learn languages'], a: 0, why: "*I agree with this idea.*" } },
        { t: 'check', ex: { k: 'tf', q: 'The paragraph about computer games is directly connected to the essay question.', a: false, why: "Savol til o'rganish haqida, o'yinlar esa mavzudan tashqari (**irrelevant**)." } },
      ],
    },
    {
      title: "Kamchiliklarni topish",
      blocks: [
        { t: 'table', head: ['Muammo', 'Essaydan misol', 'Yechim'], rows: [
          ['**Repetitive** (takror)', 'good for the brain … good for memory … good for concentration', 'Sinonim: *beneficial, strengthens, improves*'],
          ["Zaif bog'lanish", "gaplar bog'lovchisiz ketma-ket keladi", '*Moreover, However, As a result*'],
          ['**Irrelevant** (mavzudan tashqari)', 'Computer games are very popular…', "O'chiring yoki savolga bog'lang"],
          ['**Sweeping** (qamrovli da\'vo)', 'All children can learn without any problems.', 'Yumshating: *Most children tend to…*'],
          ['**Vague** (noaniq)', 'a good thing', 'Aniq ayting: *a sound investment*'],
          ['**Wordy** (ortiqcha so\'z)', 'In my opinion I think', '*I believe* yoki *In my opinion,*'],
        ] },
        { t: 'check', ex: { k: 'choice', q: "Which sentence from the essay is irrelevant to the question?", opts: ['Some games are violent, and parents should check them.', 'Children who start early often speak a language very well.', 'Some parents worry about the cost of language lessons.', 'Teachers need training, and training is expensive.'], a: 0, why: "Zo'ravonlik o'yinlar til o'rganishga aloqasi yo'q; qolganlari til o'rganish va xarajatga tegishli." } },
        { t: 'check', ex: { k: 'choice', q: "Which is the best way to improve 'All children can learn a language without any problems'?", opts: ['Most children tend to learn a language with little difficulty.', 'Every child learns every language perfectly.', 'All kids learn languages really easily.', 'No child has problems with languages.'], a: 0, why: "**Hedging**: *most, tend to, little difficulty* da'voni ehtiyotkor va ishonarli qiladi." } },
        { t: 'dialog', lines: [
          { who: 'Helen', en: "Sardor, I read your essay. The ideas are sensible, but it is rather repetitive. You use the word good many times.", uz: "Sardor, essayingni o'qidim. G'oyalar o'rinli, lekin ancha takroriy. Good so'zini ko'p ishlatgansan." },
          { who: 'Sardor', en: "I see. Is the paragraph about computer games a problem too?", uz: "Tushundim. Kompyuter o'yinlari haqidagi paragraf ham muammomi?" },
          { who: 'Helen', en: "Yes, it is irrelevant. The question is about learning languages, so you should not digress.", uz: "Ha, u mavzuga aloqasiz. Savol til o'rganish haqida, shuning uchun chetga chiqmaslik kerak." },
          { who: 'Sardor', en: "And the sentence about all children learning without problems?", uz: "Hamma bolalar qiyinchiliksiz o'rganishi haqidagi gap-chi?" },
          { who: 'Helen', en: "That is a sweeping statement. Hedge it, for example: most children tend to learn quickly.", uz: "Bu qamrovli da'vo. Uni yumshating, masalan: ko'pchilik bolalar tez o'rganishga moyil." },
          { who: 'Sardor', en: "Thank you. I will rewrite the conclusion as well.", uz: "Rahmat. Xulosani ham qayta yozaman." },
          { who: 'Helen', en: "Good idea. Keep it to about sixty words and add no new arguments.", uz: "Yaxshi fikr. Uni taxminan oltmish so'z qiling va yangi dalil qo'shmang." },
        ] },
        { t: 'check', ex: { k: 'fix', wrong: 'Despite of the cost, many schools offer languages.', a: ['Despite the cost, many schools offer languages.', 'In spite of the cost, many schools offer languages.'], why: "**Despite** dan keyin *of* yo'q; **in spite of** da bor." } },
      ],
    },
    {
      title: "Yaxshilangan variant",
      blocks: [
        { t: 'p', md: "Endi **bitta paragraf** va **xulosa** qanday yaxshilanishini ko'ring. Paragraf bitta fikrni aniq beradi, xulosa esa **yangi dalilsiz** pozitsiyani takrorlaydi." },
        { t: 'text', title: 'Improved paragraph', voice: 'emma', en: "Firstly, young children learn languages more quickly than adults, so an early start gives them a real advantage. It is widely believed that children who begin early tend to speak with a more natural accent. Moreover, learning a language strengthens memory and concentration. Admittedly, not every child learns at the same speed; nevertheless, regular lessons help most pupils to make steady progress.", uz: "Birinchidan, kichik bolalar tillarni kattalarga qaraganda tezroq o'rganadi, shuning uchun erta boshlash ularga haqiqiy ustunlik beradi. Erta boshlagan bolalar tabiiyroq talaffuz bilan gapirishga moyil, deb keng tarqalgan fikr bor. Bundan tashqari, til o'rganish xotira va diqqatni kuchaytiradi. To'g'ri, har bir bola bir xil tezlikda o'rganmaydi; shunga qaramay, muntazam darslar ko'pchilik o'quvchilarga barqaror yutuqqa erishishga yordam beradi." },
        { t: 'text', title: 'Improved conclusion (about 60 words)', voice: 'george', en: "To sum up, I strongly believe that primary schools should introduce a foreign language. Although the cost may be a concern, the benefits, namely faster learning and better concentration, clearly outweigh it. Having weighed both sides, I conclude that an early start is a sound investment, not only for children but also for society as a whole.", uz: "Xulosa qilib aytganda, boshlang'ich maktablar chet tilini joriy qilishi kerak, deb qat'iy ishonaman. Xarajat tashvish bo'lishi mumkin bo'lsa-da, afzalliklar, ya'ni tezroq o'rganish va yaxshiroq diqqat, uni aniq ortda qoldiradi. Ikkala tomonni tortib ko'rib, erta boshlash nafaqat bolalar, balki butun jamiyat uchun to'g'ri sarmoya, degan xulosaga kelaman." },
        { t: 'check', ex: { k: 'tf', q: 'The improved conclusion introduces a completely new argument.', a: false, why: "Xulosa faqat avvalgi dalillarni (*faster learning, better concentration*) umumlashtiradi." } },
        { t: 'check', ex: { k: 'choice', q: "Which word in the improved paragraph hedges a claim?", opts: ['tend', 'begin', 'speak', 'regular'], a: 0, why: "*tend to speak* — da'voni yumshatadi (hedging)." } },
        { t: 'check', ex: { k: 'fill', q: "Having ___ both sides, I conclude that an early start is a sound investment. (weigh)", a: ['weighed', 'considered'], why: "Perfect sifatdosh: **Having + V3**." } },
      ],
    },
    {
      title: "Endi siz yozing",
      blocks: [
        { t: 'p', md: "Vazifa: (1) o'z xulosangizni **taxminan 60 so'zda** qayta yozing; (2) *irrelevant* paragrafni o'chirib, o'rniga **savolga aloqador** paragraf yozing (masalan, xarajat va uning yechimi)." },
        { t: 'tip', tone: 'good', md: "**Tekshiruv:** (1) pozitsiya aniq; (2) har gap savolga javob beradi (*digress* qilmang); (3) *good* kabi umumiy so'zlar o'rniga aniq so'zlar; (4) kamida 2 ta bog'lovchi (*Moreover, Nevertheless, Although*); (5) bitta hedging (*tend to, may, most*); (6) xulosada yangi dalil yo'q." },
        { t: 'check', ex: { k: 'fill', q: "Schools have little money; ___, many of them still offer language lessons.", a: ['nevertheless', 'nonetheless', 'however', 'even so', 'all the same'], why: "Kutilmagan natija → **nevertheless / however**." } },
        { t: 'check', ex: { k: 'order', uz: "Garchi xarajat tashvishli bo'lishi mumkin bo'lsa-da, foyda uni baribir bosib o'tadi.", words: ['Although', 'the', 'cost', 'may', 'be', 'a', 'concern,', 'the', 'benefits', 'outweigh', 'it.'], extra: ['despite', 'but'], why: "**Although** + gap; **but** kerak emas." } },
      ],
    },
  ],
  words: [
    { en: 'repetitive', uz: 'takroriy, bir xil', ipa: 'rɪˈpet.ə.tɪv', pos: 'adj', ex: 'The second paragraph is repetitive because it repeats the first one.', exUz: "Ikkinchi paragraf takroriy, chunki birinchisini takrorlaydi." },
    { en: 'vague', uz: 'noaniq, tumanli', ipa: 'veɪɡ', pos: 'adj', ex: 'Words like "thing" and "stuff" are too vague for an essay.', exUz: "*thing* va *stuff* kabi so'zlar essay uchun juda noaniq." },
    { en: 'irrelevant', uz: "mavzuga aloqasiz", ipa: 'ɪˈrel.ə.vənt', pos: 'adj', ex: 'The examiner will ignore irrelevant details.', exUz: "Imtihon oluvchi mavzuga aloqasiz tafsilotlarga e'tibor bermaydi." },
    { en: 'wordy', uz: "ortiqcha so'zli", ipa: 'ˈwɜː.di', pos: 'adj', ex: 'This sentence is wordy; you can say it in five words.', exUz: "Bu gap ortiqcha so'zli; uni besh so'zda aytish mumkin." },
    { en: 'digress', uz: "mavzudan chetga chiqmoq", ipa: 'daɪˈɡres', pos: 'verb', ex: 'I began to digress, so I returned to the main point.', exUz: "Mavzudan chetga chiqa boshladim va asosiy fikrga qaytdim." },
    { en: 'sweeping', uz: "qamrovli, umumlashtirilgan", ipa: 'ˈswiː.pɪŋ', pos: 'adj', ex: 'It is a sweeping statement to say that all teenagers dislike reading.', exUz: "Hamma o'smirlar o'qishni yoqtirmaydi deyish qamrovli da'vo." },
  ],
  practice: [
    { k: 'match', pairs: [['repetitive', 'takroriy'], ['vague', 'noaniq'], ['irrelevant', 'mavzuga aloqasiz'], ['wordy', "ortiqcha so'zli"], ['digress', 'chetga chiqmoq'], ['sweeping', "qamrovli (da'vo)"]] },
    { k: 'choice', q: "The writer uses the same word again and again, so the essay is ___.", opts: ['repetitive', 'vague', 'irrelevant', 'sweeping'], a: 0, why: "Bir xil so'z va fikrni takrorlash — **repetitive**." },
    { k: 'choice', q: "*All teenagers are lazy* is a ___ statement.", opts: ['vague', 'sweeping', 'wordy', 'repetitive'], a: 1, why: "Hammaga tegishli da'vo — **sweeping generalisation**." },
    { k: 'choice', q: "A sentence about football in an essay on language teaching is ___.", opts: ['wordy', 'repetitive', 'irrelevant', 'sweeping'], a: 2, why: "Mavzuga aloqasiz — **irrelevant**." },
    { k: 'fill', q: "Try not to ___ from the topic; every sentence should answer the question.", a: ['digress'], why: "Mavzudan chetga chiqmoq — **digress**." },
    { k: 'fill', q: "'A good thing' is too ___; say exactly why it is good. (adj)", a: ['vague'], why: "Aniq bo'lmagan ibora — **vague**." },
    { k: 'fix', wrong: 'Despite of the cost, many schools offer languages.', a: ['Despite the cost, many schools offer languages.', 'In spite of the cost, many schools offer languages.'], why: "**Despite** + ot; **in spite of** + ot." },
    { k: 'fix', wrong: 'In my opinion I think primary schools should teach languages.', a: ['In my opinion, primary schools should teach languages.', 'I think primary schools should teach languages.', 'I think that primary schools should teach languages.'], why: "Ikki marta fikr bildirmang: bittasi yetarli." },
    { k: 'order', uz: "Garchi xarajat tashvishli bo'lishi mumkin bo'lsa-da, foyda uni baribir bosib o'tadi.", words: ['Although', 'the', 'cost', 'may', 'be', 'a', 'concern,', 'the', 'benefits', 'outweigh', 'it.'], extra: ['despite', 'but'], why: "**Although** + gap, **but** kerak emas." },
    { k: 'translate', uz: "Bolalar tez o'rganishga moyil.", a: ['Children tend to learn quickly.', 'Children tend to learn fast.', 'Children tend to learn very quickly.'], why: "Hedging: **tend to + V1**." },
    { k: 'tf', q: "A conclusion should introduce a completely new argument.", a: false, why: "Xulosa yangi dalil qo'shmaydi: u pozitsiyani umumlashtiradi." },
    { k: 'tf', q: "Hedging words such as *tend to* and *arguably* make a claim more careful.", a: true, why: "Hedging da'voni yumshatadi va ishonchliroq qiladi." },
    { k: 'listen', say: 'Having weighed both sides, I conclude that an early start is a sound investment.', opts: ['Having weighed both sides, I conclude that an early start is a sound investment.', 'Having weighed both sides, I concluded that an early start is a sound investment.', 'Having weighted both sides, I conclude that an early start is a sound investment.', 'Having weighed both sides, I conclude that a late start is a sound investment.'], a: 0 },
    { k: 'dictation', say: 'It is widely believed that children who begin early tend to speak with a more natural accent.', a: ['It is widely believed that children who begin early tend to speak with a more natural accent.'], uz: "Erta boshlagan bolalar tabiiyroq talaffuz bilan gapirishga moyil, deb keng tarqalgan." },
    { k: 'speak', say: 'To sum up, I strongly believe that primary schools should introduce a foreign language.', uz: "Xulosa qilib aytganda, boshlang'ich maktablar chet tilini joriy qilishi kerak, deb qat'iy ishonaman." },
  ],
  quiz: [
    { k: 'choice', q: "Schools have little money. ___, many of them still offer language lessons.", opts: ['Therefore', 'Moreover', 'Nevertheless', 'Because'], a: 2, why: "Kutilmagan natija: **Nevertheless**." },
    { k: 'choice', q: "Which is a hedged version of 'All children learn languages quickly'?", opts: ['Every child learns languages perfectly.', 'Most children tend to learn languages quickly.', 'No child learns languages slowly.', 'Children always learn languages quickly.'], a: 1, why: "**Most … tend to** — da'voni yumshatadi." },
    { k: 'fill', q: "The essay was so ___ that it repeated the same idea in every paragraph. (adj)", a: ['repetitive'], why: "Bir xil fikrni takrorlash — **repetitive**." },
    { k: 'fill', q: "Having ___ both sides of the argument, I conclude that the plan is sound. (weigh)", a: ['weighed', 'considered'], why: "**Having + V3**." },
    { k: 'fix', wrong: 'Because of this reason, schools need more money.', a: ['For this reason, schools need more money.', 'Because of this, schools need more money.', 'Therefore, schools need more money.'], why: "*Because of this reason* xato; to'g'ri: **For this reason** yoki **Because of this**." },
    { k: 'order', uz: "Xulosa qilib aytganda, men erta boshlashni qo'llab-quvvatlayman.", words: ['To', 'sum', 'up,', 'I', 'support', 'an', 'early', 'start.'], extra: ['in', 'supports'], why: "Xulosa: **To sum up, …**" },
    { k: 'tf', q: "A good conclusion repeats the thesis in new words and adds no new evidence.", a: true, why: "Xulosa pozitsiyani qayta aytadi, yangi dalil keltirmaydi." },
    { k: 'choice', q: "Which sentence is the weakest for a formal essay?", opts: ['Early language learning can strengthen memory.', 'It may reduce differences between pupils.', 'It is widely seen as beneficial.', 'It is a good thing for kids and stuff.'], a: 3, why: "*good thing* va *stuff* — noaniq va norasmiy (**vague**)." },
  ],
  summary: [
    "Essayni tekshirishda kamchiliklar: **repetitive, vague, wordy, irrelevant, sweeping** va bog'lovchilarning yo'qligi.",
    "**Mavzuga aloqasiz** gapni o'chiring (*digress* qilmang); har gap savolga javob bersin.",
    "**Qamrovli da'vo**ni yumshating: *Most children tend to…*, *It is widely believed that…*.",
    "**Xulosa** (taxminan 60 so'z): *To sum up* + pozitsiya + asosiy dalillar (*Although… outweigh*) + yangi dalilsiz.",
    "Yangi so'zlar: **repetitive, vague, irrelevant, wordy, digress, sweeping**.",
  ],
  homework: "O'zingiz oldin yozgan essay yoki paragrafni oling (yo'q bo'lsa, shu darsdagi zaif essayni). Undagi takror, noaniq so'z va qamrovli da'voni topib qizil rang bilan belgilang, so'ng paragraf va 60 so'zli xulosani qayta yozing.",
};

export default lesson;
