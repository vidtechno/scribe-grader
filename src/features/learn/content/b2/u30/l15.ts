import type { Lesson } from '../../../types';

// Mini lesson (skill): reading and writing. A short travel article with idioms and linking words (gist, detail, writer's opinion) and a 100-120 word recommendation for a visitor.
const lesson: Lesson = {
  id: 'u30-l15',
  title: 'Reading and writing: an article about travel',
  titleUz: "O'qish va yozish: sayohat maqolasi",
  mini: true,
  kind: 'skill',
  goal: "Sayohat maqolasini o'qib, **umumiy ma'no**, **tafsilot** va **muallifning fikri** savollariga javob berasiz, **idioma va bog'lovchilarni** (*however, admittedly, provided that*) tanib olasiz va mehmonga 100-120 so'zli **tavsiya** yozasiz.",
  slides: [
    {
      title: "O'qing: Lindenmoor haqida maqola",
      blocks: [
        { t: 'p', md: "Maqolani tinglab o'qing (▶). Savollar uch turda bo'ladi: **gist** (asosiy fikr), **detail** (tafsilot) va **writer's opinion** (muallif nimani yaxshi ko'radi, nimani yoqtirmaydi)." },
        { t: 'text', title: 'Beyond the guidebook', voice: 'george', en: "Most visitors to Lindenmoor head straight for the castle, which is undoubtedly a must-see. It is, however, also a tourist trap: the queues are long, the souvenirs are overpriced and the view is no better than the one from the hill behind it. If you really want to get to know the town, wander through the cobbled streets of the old quarter instead.\n\nAdmittedly, the old quarter is not easy to find, because it is off the beaten track and there are hardly any signs. Even so, it is worth the effort. Early in the morning the bakeries open, and the smell of fresh bread fills the air. By midday the little square is bustling with local people, and you may well be invited to join someone for tea.\n\nThe best places are hidden gems that nobody advertises. I only discovered the family-run café on Mill Lane by word of mouth. Whatever you do, do not rush. A weekend is plenty of time, provided that you leave the guidebook in your bag. Lindenmoor is still unspoilt, and in my opinion that is exactly why you should visit it now, before it becomes famous.", uz: "Lindenmoorga kelgan sayyohlarning ko'pchiligi to'g'ri qal'aga boradi, u shubhasiz albatta ko'rish kerak bo'lgan joy. Biroq u sayyohlar tuzog'i ham: navbatlar uzun, esdalik sovg'alari haddan ziyod qimmat va manzara uning orqasidagi tepalikdan ko'rinadigandan yaxshi emas. Shaharni haqiqatan tanishni istasangiz, buning o'rniga eski mahallaning toshyo'l ko'chalarida sayr qiling.\n\nTan olish kerak, eski mahallani topish oson emas, chunki u sayyohlar yo'lidan chetda va deyarli hech qanday ko'rsatkich yo'q. Shunga qaramay, bunga arziydi. Ertalab novvoyxonalar ochiladi va yangi non hidi havoni to'ldiradi. Tush paytida kichik maydon mahalliy odamlar bilan gavjum bo'ladi va sizni choyga taklif qilishlari mumkin.\n\nEng yaxshi joylar hech kim reklama qilmaydigan yashirin durdonalar. Men Mill Lane'dagi oilaviy kafeni faqat og'izdan-og'izga o'tgan gap orqali topdim. Nima qilsangiz ham, shoshilmang. Hafta oxiri yetarlicha vaqt, agar yo'l-yo'riq kitobini sumkangizda qoldirsangiz. Lindenmoor hali buzilmagan va menimcha, aynan shuning uchun uni hozir, mashhur bo'lmasdan oldin ko'rish kerak." },
        { t: 'check', ex: { k: 'choice', q: "Which sentence gives the main idea of the article?", opts: ["Lindenmoor is too expensive for most tourists.","The castle is the best place to buy souvenirs.","Visitors should explore the quiet old quarter, not only the famous castle.","Visitors need a guidebook to find anything."], a: 2, why: "Muallif qal'a o'rniga eski mahallani tavsiya qiladi." } },
        { t: 'check', ex: { k: 'choice', q: "How did the writer find the café on Mill Lane?", opts: ["From an advertisement","By word of mouth","In a guidebook","By following signs"], a: 1, why: "*I only discovered the family-run café on Mill Lane by word of mouth.*" } },
        { t: 'check', ex: { k: 'tf', q: "The writer thinks Lindenmoor should be visited before it becomes famous.", a: true, why: "*that is exactly why you should visit it now, before it becomes famous.*" } },
      ],
    },
    {
      title: "Iboralar va bog'lovchilar",
      blocks: [
        { t: 'p', md: "Maqoladagi **idiomalar va bog'lovchilar** matnni tabiiy qiladi. Ularni o'z yozuvingizda ishlating, lekin **me'yorda**." },
        { t: 'table', head: ['Ibora', "Ma'no", 'Misol'], speak: [2], rows: [
          ['off the beaten track', "sayyohlar yo'lidan chetda", 'The village is off the beaten track.'],
          ['by word of mouth', "og'izdan-og'izga, tanishlar orqali", 'We heard about the hotel by word of mouth.'],
          ['however / even so', 'biroq / shunga qaramay', 'The hotel is old. Even so, it is very comfortable.'],
          ['admittedly', "tan olish kerakki", 'Admittedly, the food is simple.'],
          ['provided that', "agar … sharti bilan", 'You can go, provided that you come back early.'],
          ['whatever you do', 'nima qilsangiz ham', 'Whatever you do, book early.'],
        ] },
        { t: 'tip', tone: 'warn', md: "**Despite** dan keyin **of** kelmaydi: ~~despite of the rain~~ → **despite the rain** (*in spite of* — **of** bilan). **Recommend** dan keyin **-ing** yoki **that + gap**: ~~recommend to go~~ → *I recommend going / that you go*." },
        { t: 'check', ex: { k: 'choice', q: "___, the museum is small, but it is well worth a visit.", opts: ["Provided that","Whatever","Unless","Admittedly"], a: 3, why: "Kamchilikni tan olib, keyin ijobiy fikr: **Admittedly,…, but…**" } },
        { t: 'check', ex: { k: 'fix', wrong: 'Despite of the long queues, we enjoyed the castle.', a: ['Despite the long queues, we enjoyed the castle.', 'Despite the long queues we enjoyed the castle.', 'In spite of the long queues, we enjoyed the castle.', 'In spite of the long queues we enjoyed the castle.'], why: "**Despite** + ot (*of* yo'q); *in spite **of***." } },
      ],
    },
    {
      title: "Yozing: mehmonga tavsiya",
      blocks: [
        { t: 'p', md: "Tavsiya (**recommendation**) — o'quvchiga **aniq maslahat** beradi. Hajm: **100-120 so'z**. Reja:" },
        { t: 'table', head: ['Qadam', 'Nima yozasiz', 'Namuna'], speak: [2], rows: [
          ['1', 'Asosiy maslahat', 'Skip the crowds and start in the old quarter.'],
          ['2', 'Nima qilish / ko\'rish', 'Try the bread in the small bakeries.'],
          ['3', 'Amaliy maslahat', 'Bring comfortable shoes.'],
          ['4', 'Sabab va yakun', 'I highly recommend going soon.'],
        ] },
        { t: 'text', title: 'Model recommendation (about 100 words)', voice: 'emma', en: "Visitors to Lindenmoor should skip the castle crowds and spend their first morning in the old quarter. Admittedly, it is hard to find, but the cobbled streets are full of small bakeries and cafés where you can try the local bread and tea. For lunch, ask a local for advice, because the best places are hidden gems that are only known by word of mouth. Whatever the weather, bring comfortable shoes, provided that you plan to walk everywhere. Two days is enough time to enjoy the town without rushing. I would highly recommend going soon, while the town is still unspoilt.", uz: "Lindenmoorga kelgan mehmonlar qal'adagi olomondan qochib, birinchi ertalabni eski mahallada o'tkazishi kerak. Tan olish kerak, uni topish qiyin, lekin toshyo'l ko'chalar mahalliy non va choy tatib ko'rish mumkin bo'lgan kichik novvoyxonalar va kafelarga to'la. Tushlik uchun mahalliy odamdan maslahat so'rang, chunki eng yaxshi joylar faqat og'izdan-og'izga ma'lum bo'lgan yashirin durdonalardir. Ob-havo qanday bo'lmasin, hamma joyga piyoda yurmoqchi bo'lsangiz, qulay poyabzal olib keling. Shaharni shoshilmay tomosha qilish uchun ikki kun yetarli. Shahar hali buzilmagan paytda tezroq borishni qattiq tavsiya qilaman." },
        { t: 'compare',
          good: { title: "Yaxshi tavsiya", items: ['I recommend visiting the old quarter in the morning.', 'It is worth going, provided that you have two days.'] },
          bad: { title: 'Xato', items: ['I recommend to visit the old quarter.', 'It is worth to go, despite of the crowds.'] } },
        { t: 'check', ex: { k: 'tf', q: "A good recommendation gives practical advice and a reason.", a: true, why: "Tavsiya: aniq maslahat + nega ekani + amaliy ma'lumot." } },
      ],
    },
    {
      title: "Dialog: sayohatni rejalashtirish",
      blocks: [
        { t: 'dialog', lines: [
          { who: 'Rustam', en: "Lily, I'm planning a weekend in Lindenmoor. Is the castle worth seeing?", uz: "Lily, men Lindenmoorda hafta oxirini o'tkazmoqchiman. Qal'ani ko'rishga arzimi?" },
          { who: 'Lily', en: "Admittedly, it's impressive, but it's a bit of a tourist trap. I'd spend more time in the old quarter.", uz: "Tan olish kerak, u ta'sirli, lekin biroz sayyohlar tuzog'iga o'xshaydi. Men eski mahallada ko'proq vaqt o'tkazardim." },
          { who: 'Rustam', en: "Is it easy to find?", uz: "Uni topish osonmi?" },
          { who: 'Lily', en: "Not really, it's off the beaten track. Even so, it's worth it. I'd recommend going early, before the square gets busy.", uz: "Unchalik emas, u sayyohlar yo'lidan chetda. Shunga qaramay, bunga arziydi. Maydon gavjum bo'lmasdan oldin erta borishni tavsiya qilaman." },
          { who: 'Rustam', en: "Thanks. Do you know a good café there?", uz: "Rahmat. U yerda yaxshi kafeni bilasanmi?" },
          { who: 'Lily', en: "Ask the locals. The best ones are hidden gems that you only hear about by word of mouth.", uz: "Mahalliy odamlardan so'ra. Eng yaxshilari faqat og'izdan-og'izga eshitiladigan yashirin durdonalar." },
        ] },
        { t: 'check', ex: { k: 'choice', q: "What does Lily recommend?", opts: ["Spending the whole weekend at the castle","Avoiding the old quarter","Spending more time in the old quarter","Buying souvenirs at the castle"], a: 2, why: "*I'd spend more time in the old quarter.*" } },
      ],
    },
  ],
  words: [
    { en: 'must-see', uz: "albatta ko'rish kerak bo'lgan", ipa: 'ˈmʌst.siː', pos: 'adj', ex: 'The old bridge is a must-see for every visitor.', exUz: "Eski ko'prik har bir mehmon uchun albatta ko'rish kerak bo'lgan joy." },
    { en: 'tourist trap', uz: "sayyohlar tuzog'i (qimmat, olomon joy)", ipa: 'ˈtʊə.rɪst træp', pos: 'noun', ex: 'The restaurant by the station is a tourist trap, so we ate elsewhere.', exUz: "Bekat yonidagi restoran sayyohlar tuzog'i, shuning uchun biz boshqa joyda ovqatlandik." },
    { en: 'cobbled', uz: 'toshyo\'l bilan qoplangan', ipa: 'ˈkɒb.əld', pos: 'adj', ex: 'We walked along a narrow cobbled street.', exUz: "Biz tor toshyo'l ko'chadan yurdik." },
    { en: 'hidden gem', uz: 'yashirin durdona (kam tanilgan yaxshi joy)', ipa: 'ˌhɪd.ən ˈdʒem', pos: 'noun', ex: 'The tiny museum is a real hidden gem.', exUz: "Kichik muzey haqiqiy yashirin durdona." },
    { en: 'word of mouth', uz: "og'izdan-og'izga o'tgan gap", ipa: 'ˌwɜːd əv ˈmaʊθ', pos: 'noun', ex: 'The guesthouse became popular by word of mouth.', exUz: "Mehmon uyi og'izdan-og'izga o'tgan gaplar orqali mashhur bo'ldi." },
    { en: 'unspoilt', uz: 'buzilmagan, tabiiy holida qolgan', ipa: 'ʌnˈspɔɪlt', pos: 'adj', ex: 'The island has miles of unspoilt beaches.', exUz: "Orolda bir necha mil buzilmagan sohil bor." },
  ],
  practice: [
    { k: 'match', pairs: [['must-see', "albatta ko'rish kerak"], ['tourist trap', "sayyohlar tuzog'i"], ['cobbled', "toshyo'l bilan qoplangan"], ['hidden gem', 'yashirin durdona'], ['word of mouth', "og'izdan-og'izga o'tgan gap"], ['unspoilt', 'buzilmagan']] },
    { k: 'choice', q: "Which sentence best gives the main idea of the article?", opts: ["The castle is the only interesting place in town.","The quiet old quarter is more rewarding than the famous castle.","Lindenmoor is too crowded to visit.","A guidebook is the best way to explore."], a: 1, why: "Muallif eski mahallani tavsiya qiladi." },
    { k: 'fill', q: "I only found the café by word of ___.", a: ['mouth'], uz: "Men kafeni faqat og'izdan-og'izga o'tgan gap orqali topdim.", why: "**by word of mouth**." },
    { k: 'listen', say: 'The old quarter is off the beaten track.', opts: ['The old quarter is off the beaten track.', 'The old quarter is on the beaten track.', 'The old quarter is off the busy track.', 'The old quarter is near the beaten track.'], a: 0 },
    { k: 'choice', q: "___, the area is hard to find, but it is worth the effort.", opts: ['Provided that', 'Whatever', 'Unless', 'Admittedly'], a: 3, why: "Kamchilikni tan olib, keyin ijobiy fikr: **Admittedly**." },
    { k: 'order', uz: "Sayyohlarning ko'pchiligi to'g'ri qal'aga boradi.", words: ['Most', 'visitors', 'head', 'straight', 'for', 'the', 'castle.'], extra: ['heads', 'to'], why: "**Most visitors** — ko'plik: *head*." },
    { k: 'fix', wrong: 'Despite of the long queues, we enjoyed the castle.', a: ['Despite the long queues, we enjoyed the castle.', 'Despite the long queues we enjoyed the castle.', 'In spite of the long queues, we enjoyed the castle.', 'In spite of the long queues we enjoyed the castle.'], why: "**Despite** dan keyin **of** yo'q." },
    { k: 'choice', q: "The castle tickets are very expensive. (True / False / Not given)", opts: ['True', 'False', 'Not given'], a: 2, why: "Faqat esdalik sovg'alari qimmat deyilgan; chiptalar haqida ma'lumot yo'q (**Not given**)." },
    { k: 'translate', uz: "Yo'l-yo'riq kitobini sumkangizda qoldirsangiz, ikki kun yetarli.", a: ['Two days is enough, provided that you leave the guidebook in your bag.', 'Two days are enough, provided that you leave the guidebook in your bag.', 'Two days is enough, providing that you leave the guidebook in your bag.', 'Two days are enough, providing that you leave the guidebook in your bag.', 'Two days is enough, as long as you leave the guidebook in your bag.', 'Two days are enough, as long as you leave the guidebook in your bag.'], why: "Shart: **provided that / as long as**." },
    { k: 'fill', q: "The castle is a ___ trap: the queues are long and the souvenirs are overpriced.", a: ['tourist'], uz: "Qal'a sayyohlar tuzog'i: navbatlar uzun, esdalik sovg'alari qimmat.", why: "**tourist trap**." },
    { k: 'tf', q: "In a recommendation you should write *I recommend to visit the old quarter.*", a: false, why: "To'g'ri: *I recommend visiting* yoki *I recommend that you visit*." },
    { k: 'dictation', say: 'The little square is bustling with local people.', a: ['The little square is bustling with local people.'], uz: "Kichik maydon mahalliy odamlar bilan gavjum." },
    { k: 'translate', uz: "Lindenmoor hali buzilmagan, shuning uchun uni hoziroq ko'ring.", a: ['Lindenmoor is still unspoilt, so visit it now.', 'Lindenmoor is still unspoilt, so go there now.', 'Lindenmoor is still unspoilt, so you should visit it now.', 'Lindenmoor is still unspoilt, so you should go there now.', "Lindenmoor is still unspoilt, so visit it right now."], why: "**still unspoilt**; maslahat: **visit / you should visit**." },
    { k: 'speak', say: 'It is off the beaten track, but it is well worth the effort.', uz: "U sayyohlar yo'lidan chetda, lekin bunga arziydi." },
  ],
  quiz: [
    { k: 'choice', q: "What is the writer's opinion of the castle?", opts: ["It is the best place in the town.","It is not worth a visit at all.","It is closed to visitors.","It is worth seeing, but crowded and overpriced."], a: 3, why: "*undoubtedly a must-see… also a tourist trap.*" },
    { k: 'choice', q: "A place that is still in its natural, original state is ___.", opts: ["overpriced","cobbled","unspoilt","must-see"], a: 2, why: "Buzilmagan, tabiiy holida → **unspoilt**." },
    { k: 'fill', q: "The best cafés are hidden ___ that nobody advertises.", a: ['gems'], uz: "Eng yaxshi kafelar hech kim reklama qilmaydigan yashirin durdonalar.", why: "**hidden gems** — ko'plik." },
    { k: 'order', uz: "Tan olish kerak, eski mahallani topish oson emas.", words: ['Admittedly,', 'the', 'old', 'quarter', 'is', 'not', 'easy', 'to', 'find.'], extra: ['finding', 'despite'], why: "**easy to find**." },
    { k: 'fix', wrong: 'I recommend to visit the old quarter.', a: ['I recommend visiting the old quarter.', 'I recommend that you visit the old quarter.', 'I would recommend visiting the old quarter.', 'I would recommend that you visit the old quarter.'], why: "**recommend** + -ing yoki **that + gap**." },
    { k: 'tf', q: "A recommendation of 100-120 words should include a practical tip and a reason.", a: true, why: "Aniq maslahat va sabab tavsiyani foydali qiladi." },
    { k: 'listen', say: 'We heard about the guesthouse by word of mouth.', opts: ['We heard about the guesthouse by word of mouth.', 'We heard about the guesthouse by the word of mouth.', 'We heard about the guesthouse in word of mouth.', 'We read about the guesthouse by word of mouth.'], a: 0 },
    { k: 'choice', q: "Which is the best closing sentence for a recommendation?", opts: ["That is all I know about the town.","I highly recommend going soon, while the town is still unspoilt.","Hello, I hope you like my text.","Thank you for reading the guidebook."], a: 1, why: "Yakun: tavsiya + sabab." },
  ],
  summary: [
    "Maqolada uch turdagi savol: **gist** (asosiy fikr), **detail** (tafsilot), **writer's opinion** (muallifning fikri: *in my opinion…*).",
    "Iboralar: **off the beaten track, by word of mouth, a hidden gem, a tourist trap**; bog'lovchilar: **admittedly, even so, however, provided that, whatever**.",
    "Tavsiya (100-120 so'z): **asosiy maslahat → nima qilish → amaliy maslahat → sabab va yakun**.",
    "Xatolar: ~~despite of~~ → **despite**; ~~recommend to go~~ → **recommend going / that you go**.",
    "Yangi so'zlar: **must-see, tourist trap, cobbled, hidden gem, word of mouth, unspoilt**.",
  ],
  homework: "O'zingiz yaxshi biladigan joy (shahar, qishloq yoki mahalla) uchun mehmonga 100-120 so'zli tavsiya yozing. Kamida 3 ta yangi so'z, bitta *admittedly* va bitta *provided that* ishlating. So'z sonini sanang.",
};

export default lesson;
