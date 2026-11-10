import type { Lesson } from '../../../types';

// Mini lesson (skill): reading and writing. A short article about climate (main idea, paragraph headings, True/False/Not given, vocabulary in context) and a 100-120 word summary.
const lesson: Lesson = {
  id: 'u29-l15',
  title: 'Reading and writing: an article about climate',
  titleUz: "O'qish va yozish: iqlim haqida maqola — asosiy fikr va qisqacha mazmun",
  mini: true,
  kind: 'skill',
  goal: "Iqlim haqidagi maqolani o'qib, **asosiy fikr**ni topasiz, **abzatslarga sarlavha** tanlaysiz, **True / False / Not given** savollariga javob berasiz, so'zlarning ma'nosini **kontekstdan** taxmin qilasiz va 100-120 so'zli **qisqacha mazmun** yozasiz.",
  slides: [
    {
      title: "O'qing: iqlim haqida maqola",
      blocks: [
        { t: 'p', md: "Birinchi o'qishda har bir so'zni tushunish shart emas. Savol bering: **maqola nima haqida? har bir abzats nima deydi?** Maqolada to'rtta abzats bor." },
        { t: 'text', title: 'Living with a warmer world', voice: 'emma', en: "Burning fossil fuels such as coal, oil and gas releases greenhouse gases into the atmosphere. These gases trap heat near the Earth, so the average temperature of the planet is slowly rising. The change is small each year, but over decades it adds up. Scientists agree that human activity is the main cause.\n\nThe effects are already visible. Ice in the polar regions is melting, sea levels are rising, and extreme weather, including heatwaves and floods, is becoming more common. Many farmers report that their harvests are less reliable than before.\n\nGovernments and companies are trying to mitigate the problem by cutting emissions. Wind and solar power are growing quickly, and several cities are investing in public transport. However, experts warn that progress is still far too slow.\n\nBecause some change can no longer be avoided, communities must also invest in adaptation. This means building stronger flood defences, planting trees in cities and designing homes that stay cool in summer. Individuals can help too, by wasting less energy and choosing greener ways to travel. Sustainability is no longer a fashionable word; it is a practical need.", uz: "Ko'mir, neft va gaz kabi qazilma yoqilg'ilarni yoqish atmosferaga issiqxona gazlarini chiqaradi. Bu gazlar Yer yaqinida issiqlikni ushlab qoladi, shuning uchun sayyoraning o'rtacha harorati sekin ko'tarilmoqda. O'zgarish har yili kichik, lekin o'nlab yillar davomida u to'planadi. Olimlar asosiy sabab inson faoliyati ekaniga rozi.\n\nOqibatlar allaqachon ko'rinib turibdi. Qutb mintaqalaridagi muz erimoqda, dengiz sathi ko'tarilmoqda, jazirama issiq va suv toshqini kabi ekstremal ob-havo tez-tez uchramoqda. Ko'p fermerlar hosili avvalgidan kamroq ishonchli bo'lib qolganini aytadi.\n\nHukumatlar va kompaniyalar chiqindilarni kamaytirish orqali muammoni yumshatishga harakat qilmoqda. Shamol va quyosh energiyasi tez o'sayapti va bir necha shahar jamoat transportiga mablag' kiritmoqda. Biroq mutaxassislar taraqqiyot hali ham juda sekin ekanidan ogohlantiradi.\n\nBa'zi o'zgarishlarni endi oldini olib bo'lmagani uchun jamoalar moslashishga ham mablag' kiritishi kerak. Bu kuchliroq toshqindan himoya inshootlari qurish, shaharlarda daraxt ekish va yozda salqin turadigan uylar loyihalashni anglatadi. Alohida odamlar ham energiyani kamroq isrof qilib va ekologik toza yo'llar bilan sayohat qilib yordam bera oladi. Barqarorlik endi modaga aylangan so'z emas, u amaliy ehtiyojdir." },
        { t: 'check', ex: { k: 'choice', q: "What is the writer's main message?", opts: ["Wind power is too expensive for most cities.","Only farmers are affected by climate change.","Climate change is real, so we must both reduce it and prepare for it.","Scientists disagree about what causes warming."], a: 2, why: "Maqola sabab, oqibat, kamaytirish choralari va moslashishni birga ko'rsatadi." } },
        { t: 'check', ex: { k: 'choice', q: "Experts think progress is fast enough. (True / False / Not given)", opts: ['True', 'False', 'Not given'], a: 1, why: "*progress is still far too slow* — maqola aksini aytadi (**False**)." } },
        { t: 'check', ex: { k: 'match', pairs: [['Paragraph 1', 'What causes the warming'], ['Paragraph 2', 'Signs of change'], ['Paragraph 3', 'Cutting emissions'], ['Paragraph 4', 'Preparing for change']] } },
      ],
    },
    {
      title: "Kontekstdan ma'no topish",
      blocks: [
        { t: 'p', md: "Notanish so'zni lug'atsiz tushunish uchun **atrofdagi gapga** qarang. Maqoladan uchta misol:" },
        { t: 'table', head: ["So'z", 'Kontekst', "Ma'no"], speak: [1], rows: [
          ['mitigate', 'mitigate the problem by cutting emissions', "ta'sirini kamaytirmoq, yumshatmoq"],
          ['adaptation', 'communities must also invest in adaptation', "o'zgargan sharoitga moslashish"],
          ['greenhouse gas', 'These gases trap heat', "issiqlikni ushlab qoladigan gaz"],
          ['heatwave', 'extreme weather, including heatwaves and floods', "jazirama issiq davri"],
        ] },
        { t: 'tip', tone: 'info', md: "**Mitigate** muammoni *yo'q qilmaydi*, faqat **kamaytiradi**. U *by cutting emissions* bilan birga kelganiga e'tibor bering: kontekst ma'noni ochib beradi. *Mitigate* va *militate* (to'sqinlik qilmoq) — turli so'zlar!" },
        { t: 'check', ex: { k: 'fill', q: "Building flood defences and planting trees are examples of ___ to a warmer climate.", a: ['adaptation'], uz: "Toshqindan himoya inshootlari qurish va daraxt ekish — isib borayotgan iqlimga moslashish misollari.", why: "O'zgargan sharoitga moslashish → **adaptation**." } },
        { t: 'check', ex: { k: 'choice', q: "In paragraph 3, 'mitigate' is closest in meaning to ___.", opts: ["make worse","make less serious","ignore completely","explain clearly"], a: 1, why: "*Mitigate the problem by cutting emissions* — muammoni **yumshatish**." } },
      ],
    },
    {
      title: "Qisqacha mazmun yozish: 5 qadam",
      blocks: [
        { t: 'p', md: "Qisqacha mazmun (**summary**) — maqolaning asosiy fikrlarini **o'z so'zlaringiz bilan**, **100-120 so'zda** aytish. Shaxsiy fikr va misollar kerak emas." },
        { t: 'table', head: ['Qadam', 'Nima qilasiz'], rows: [
          ['1', "Har bir abzatsning asosiy fikrini bir iborada yozing."],
          ['2', "Birinchi gapda maqola nima haqida ekanini ayting."],
          ['3', "Gaplarni sinonimlar bilan qayta yozing (*cutting → reducing*)."],
          ['4', "Bog'lovchilar ishlating: *as a result, however, for example*."],
          ['5', "So'z soni, zamon (Present Simple) va nusxa ko'chirilmaganini tekshiring."],
        ] },
        { t: 'text', title: 'Model summary (about 105 words)', voice: 'george', en: "The article explains why the climate is changing and what can be done about it. Burning fossil fuels releases greenhouse gases, which trap heat and raise the temperature of the planet. As a result, ice is melting, sea levels are rising and extreme weather is more frequent, which also affects farmers. Governments and companies are trying to mitigate the problem by reducing emissions and investing in clean energy and public transport, but experts think this is happening too slowly. The writer concludes that communities must also invest in adaptation, for example by building flood defences and planting trees, because sustainability has become a practical need.", uz: "Maqola iqlim nima uchun o'zgarayotgani va bu haqda nima qilish mumkinligini tushuntiradi. Qazilma yoqilg'ilarni yoqish issiqlikni ushlab qoladigan issiqxona gazlarini chiqaradi va sayyora haroratini oshiradi. Natijada muz erimoqda, dengiz sathi ko'tarilmoqda va ekstremal ob-havo tez-tez uchramoqda, bu fermerlarga ham ta'sir qiladi. Hukumatlar va kompaniyalar chiqindilarni kamaytirib, toza energiya va jamoat transportiga mablag' kiritib, muammoni yumshatishga harakat qilmoqda, lekin mutaxassislar buning juda sekin ketayotganini aytadi. Muallif jamoalar ham, masalan, toshqindan himoya inshootlari qurib va daraxt ekib, moslashishga mablag' kiritishi kerak degan xulosaga keladi, chunki barqarorlik amaliy ehtiyojga aylangan." },
        { t: 'compare',
          good: { title: "Yaxshi xulosa gapi", items: ['Burning fossil fuels raises the temperature of the planet.', 'The writer concludes that communities must adapt.'] },
          bad: { title: "Yomon xulosa gapi", items: ['I think the Earth is in danger and this is terrible.', 'Burning fossil fuels such as coal, oil and gas releases greenhouse gases into the atmosphere.'] } },
        { t: 'tip', tone: 'warn', md: "Ikki tipik xato: **shaxsiy fikr** (*I think…*) va **nusxa ko'chirish**. Ikkinchi yomon gap maqoladan so'zma-so'z olingan: xulosada uni o'z so'zingiz bilan qisqartiring." },
        { t: 'check', ex: { k: 'tf', q: "A good summary includes your own opinion about the topic.", a: false, why: "Qisqacha mazmunda faqat maqoladagi fikrlar bo'ladi." } },
      ],
    },
    {
      title: "Dialog: xulosani tekshirish",
      blocks: [
        { t: 'dialog', lines: [
          { who: 'Sofia', en: "Adam, I've written my summary of the climate article. It's 150 words. Is that OK?", uz: "Adam, men iqlim maqolasining xulosasini yozdim. U 150 so'z. Bu mosmi?" },
          { who: 'Adam', en: "It's too long. The task says between 100 and 120 words, so you need to cut about thirty.", uz: "U juda uzun. Topshiriqda 100 dan 120 gacha so'z deyilgan, shuning uchun taxminan o'ttizta so'zni qisqartirish kerak." },
          { who: 'Sofia', en: "Which parts should I remove?", uz: "Qaysi qismlarni olib tashlay?" },
          { who: 'Adam', en: "Remove your own opinion and the details about farmers. Keep the causes, the effects and the solutions.", uz: "O'z fikringni va fermerlar haqidagi tafsilotni olib tashla. Sabablar, oqibatlar va yechimlarni qoldir." },
          { who: 'Sofia', en: "Good idea. I'll also replace some words, for example 'cutting' with 'reducing'.", uz: "Yaxshi fikr. Ba'zi so'zlarni ham almashtiraman, masalan, 'cutting' o'rniga 'reducing'." },
        ] },
        { t: 'check', ex: { k: 'choice', q: "What does Adam tell Sofia to keep in the summary?", opts: ["Her own opinion","All the details about farmers","The first sentence of the article","The causes, the effects and the solutions"], a: 3, why: "*Keep the causes, the effects and the solutions.*" } },
      ],
    },
  ],
  words: [
    { en: 'greenhouse gas', uz: 'issiqxona gazi', ipa: 'ˈɡriːn.haʊs ɡæs', pos: 'noun', ex: 'Carbon dioxide is the best-known greenhouse gas.', exUz: "Karbonat angidrid eng mashhur issiqxona gazi." },
    { en: 'fossil fuel', uz: "qazilma yoqilg'i", ipa: 'ˈfɒs.əl ˈfjuː.əl', pos: 'noun', ex: 'The country still depends on fossil fuels for most of its energy.', exUz: "Mamlakat hali ham energiyasining ko'p qismi uchun qazilma yoqilg'iga tayanadi." },
    { en: 'mitigate', uz: "ta'sirini kamaytirmoq, yumshatmoq", ipa: 'ˈmɪt.ɪ.ɡeɪt', pos: 'verb', ex: 'Planting trees can mitigate the effects of heat in cities.', exUz: "Daraxt ekish shaharlardagi issiqlik ta'sirini yumshatishi mumkin." },
    { en: 'adaptation', uz: "moslashish (o'zgargan sharoitga)", ipa: 'ˌæd.æpˈteɪ.ʃən', pos: 'noun', ex: 'Adaptation to hotter summers will cost cities a great deal of money.', exUz: "Issiqroq yozlarga moslashish shaharlarga katta mablag' talab qiladi." },
    { en: 'sustainability', uz: 'barqarorlik', ipa: 'səˌsteɪ.nəˈbɪl.ə.ti', pos: 'noun', ex: 'The company has made sustainability a key part of its strategy.', exUz: "Kompaniya barqarorlikni o'z strategiyasining asosiy qismiga aylantirdi." },
    { en: 'heatwave', uz: 'jazirama issiq davri', ipa: 'ˈhiːt.weɪv', pos: 'noun', ex: 'During the heatwave, schools opened later in the day.', exUz: "Jazirama issiq paytida maktablar kunning kechroq vaqtida ochildi." },
  ],
  practice: [
    { k: 'match', pairs: [['greenhouse gas', 'issiqxona gazi'], ['fossil fuel', "qazilma yoqilg'i"], ['mitigate', 'yumshatmoq'], ['adaptation', 'moslashish'], ['sustainability', 'barqarorlik'], ['heatwave', 'jazirama issiq davri']] },
    { k: 'choice', q: "The writer mentions the price of solar panels. (True / False / Not given)", opts: ['True', 'False', 'Not given'], a: 2, why: "Matnda narx haqida hech narsa yo'q (**Not given**)." },
    { k: 'fill', q: "Burning ___ fuels such as coal and oil releases greenhouse gases.", a: ['fossil'], uz: "Ko'mir va neft kabi qazilma yoqilg'ilarni yoqish issiqxona gazlarini chiqaradi.", why: "**fossil fuels** — qazilma yoqilg'ilar." },
    { k: 'listen', say: 'Communities must invest in adaptation.', opts: ['Communities must invest in adaptation.', 'Communities must invest in adoption.', 'Communities must invest in addition.', 'Communities must invest in education.'], a: 0 },
    { k: 'choice', q: "Which word best completes the sentence? 'Wind power helps to ___ the effects of climate change.'", opts: ["ignore","cause","mitigate","deny"], a: 2, why: "Ta'sirni kamaytirish: **mitigate**." },
    { k: 'order', uz: "Qazilma yoqilg'ini yoqish issiqxona gazlarini chiqaradi.", words: ['Burning', 'fossil', 'fuels', 'releases', 'greenhouse', 'gases.'], extra: ['release', 'burn'], why: "*Burning* — ega, shuning uchun birlik fe'l: **releases**." },
    { k: 'fix', wrong: 'Scientists agree that human activity are the main cause.', a: ['Scientists agree that human activity is the main cause.'], why: "**Activity** — birlik ot: *is the main cause*." },
    { k: 'translate', uz: "Hukumatlar chiqindilarni kamaytirish orqali muammoni yumshatishga harakat qilmoqda.", a: ['Governments are trying to mitigate the problem by cutting emissions.', 'Governments are trying to mitigate the problem by reducing emissions.', 'Governments are trying to mitigate the problem by cutting their emissions.', 'Governments are trying to mitigate the problem by reducing their emissions.'], why: "**mitigate the problem by + -ing**." },
    { k: 'tf', q: "In a summary you should copy the sentences of the article exactly.", a: false, why: "Qisqacha mazmun o'z so'zlaringiz bilan yoziladi." },
    { k: 'fill', q: "The company wants to protect natural resources for the future, so it has made ___ a priority. (the noun for 'barqarorlik')", a: ['sustainability'], uz: "Kompaniya tabiiy resurslarni kelajak uchun asramoqchi, shuning uchun barqarorlikni ustuvor vazifaga aylantirdi.", why: "**sustainability** — barqarorlik." },
    { k: 'dictation', say: 'Sustainability is no longer a fashionable word.', a: ['Sustainability is no longer a fashionable word.'], uz: "Barqarorlik endi modaga aylangan so'z emas." },
    { k: 'choice', q: "Which sentence belongs in a summary of paragraph 2?", opts: ["I believe farmers should complain more.","Melting ice and extreme weather show that the effects are already visible.","Solar power will soon become cheaper than coal.","Wind farms are built near the sea."], a: 1, why: "Faqat 2-abzatdagi fikr: oqibatlar allaqachon ko'rinmoqda." },
    { k: 'translate', uz: "Mutaxassislar taraqqiyot hali ham juda sekin deb ogohlantiradi.", a: ['Experts warn that progress is still far too slow.', 'Experts warn that progress is still much too slow.', 'Experts warn that progress is still too slow.', 'Experts warn that the progress is still far too slow.'], why: "**warn that** + gap; **far too slow**." },
    { k: 'speak', say: 'Experts warn that progress is still far too slow.', uz: "Mutaxassislar taraqqiyot hali ham juda sekin deb ogohlantiradi." },
  ],
  quiz: [
    { k: 'choice', q: "Which heading fits paragraph 4 best?", opts: ["The history of coal","Why farmers are angry","A new type of fuel","Adapting to the changes"], a: 3, why: "4-abzats jamoalarning o'zgarishga moslashishi haqida." },
    { k: 'choice', q: "The long, hot summer was the worst ___ in the region for years.", opts: ["fossil fuel","sustainability","heatwave","greenhouse"], a: 2, why: "Uzoq davom etgan jazirama issiq — **heatwave**." },
    { k: 'fill', q: "Carbon dioxide is a ___ gas because it traps heat in the atmosphere.", a: ['greenhouse'], uz: "Karbonat angidrid issiqxona gazi, chunki atmosferada issiqlikni ushlab qoladi.", why: "**greenhouse gas** — issiqxona gazi." },
    { k: 'order', uz: "Muallif jamoalar moslashishga mablag' kiritishi kerak degan xulosaga keladi.", words: ['The', 'writer', 'concludes', 'that', 'communities', 'must', 'invest', 'in', 'adaptation.'], extra: ['conclude', 'to'], why: "**concludes that** + gap." },
    { k: 'fix', wrong: 'The article explained us why the climate is changing.', a: ['The article explained to us why the climate is changing.', 'The article explains to us why the climate is changing.', 'The article explains why the climate is changing.', 'The article explained why the climate is changing.'], why: "**explain** + **to** + kishi: *explained to us*." },
    { k: 'tf', q: "A summary of 100-120 words may include your own opinion at the end.", a: false, why: "Qisqacha mazmunda shaxsiy fikr bo'lmaydi." },
    { k: 'listen', say: 'Governments are trying to mitigate the problem.', opts: ['Governments are trying to mitigate the problem.', 'Governments are trying to avoid the problem.', 'Governments are trying to create the problem.', 'Governments are not trying to mitigate the problem.'], a: 0 },
    { k: 'choice', q: "Which is the best first sentence of a summary?", opts: ["In my opinion, climate change is a serious problem.","The article explains why the climate is changing and what can be done.","Burning fossil fuels such as coal, oil and gas releases greenhouse gases.","Hello, today I will write about the climate."], a: 1, why: "Birinchi gap maqola nima haqida ekanini o'z so'zingiz bilan aytadi." },
  ],
  summary: [
    "O'qishda avval **asosiy fikr** va har bir abzatsning **sarlavhasi**; *True / False* — matn aksini aytadi, *Not given* — matnda yo'q.",
    "Notanish so'zni **kontekstdan** taxmin qiling: *mitigate the problem by cutting emissions* → muammoni yumshatmoq.",
    "Qisqacha mazmun: **100-120 so'z**, o'z so'zlaringiz bilan, fikrsiz, **Present Simple** va bog'lovchilar (*as a result, however*).",
    "Xatolar: ~~I think…~~ (shaxsiy fikr), nusxa ko'chirish, ~~explained us~~ → **explained to us**, ~~activity are~~ → **activity is**.",
    "Yangi so'zlar: **greenhouse gas, fossil fuel, mitigate, adaptation, sustainability, heatwave**.",
  ],
  homework: "Iqlim yoki atrof-muhit haqida 150-200 so'zli qisqa maqola toping (yoki yozing), uni o'qing va 100-120 so'zli qisqacha mazmun yozing. Kamida 3 ta bu darsdagi so'zni ishlating, shaxsiy fikr yozmang va so'z sonini sanang.",
};

export default lesson;
