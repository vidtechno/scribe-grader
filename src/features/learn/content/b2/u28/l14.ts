import type { Lesson } from '../../../types';

// Mini lesson (skill): listening to a short lecture (note-taking) and speaking a one to two minute argument with signposting.
const lesson: Lesson = {
  id: 'u28-l14',
  title: 'Listening and speaking: a lecture and a long turn',
  titleUz: "Tinglash va gapirish: ma'ruza va 2 daqiqalik nutq",
  mini: true,
  kind: 'skill',
  goal: "Qisqa **ma'ruzani tinglab** qaydlar yozasiz (sabablar, muammolar, misollar), ma'ruzachining **signposting** iboralarini ajratasiz va *Is it better to live in a city or in the countryside?* mavzusida **1-2 daqiqalik nutqni** aniq tuzilma bilan aytasiz.",
  slides: [
    {
      title: "Tinglang: shaharlashuv haqida ma'ruza",
      blocks: [
        { t: 'p', md: "Ma'ruzani tinglang (▶). Birinchi marta **asosiy g'oyani** tushuning: **mavzu nima? nechta sabab aytildi? qanday muammolar bor?** Keyin qayta tinglab, qaydlar jadvalini to'ldiring." },
        { t: 'text', title: 'A lecture on urbanisation', voice: 'george', en: "Good morning, everyone. Today I want to look at urbanisation, which is one of the biggest changes of the last two centuries. Let me begin with the numbers: more than half of the world's population now lives in cities. There are three main reasons for this. First, migration: young people leave rural areas because they hope to find better jobs and schools. Second, cities offer services that small villages cannot, such as hospitals and universities. Third, companies prefer to be where the workers are. However, rapid growth brings problems. Cities often spread outwards, a process we call sprawl, which means long journeys and more traffic. Many residents also report a certain anonymity: you can live next to someone for years and never speak to them. Meanwhile, rural areas risk isolation, as shops and bus services disappear. Next week we will look at possible solutions.", uz: "Hammaga xayrli tong. Bugun men shaharlashuv haqida gapirmoqchiman, bu so'nggi ikki asrdagi eng katta o'zgarishlardan biri. Raqamlardan boshlayman: dunyo aholisining yarmidan ko'pi hozir shaharlarda yashaydi. Buning uchta asosiy sababi bor. Birinchisi, ko'chish: yoshlar yaxshiroq ish va maktab topishga umid qilib, qishloq joylarni tark etadi. Ikkinchisi, shaharlar kichik qishloqlar bera olmaydigan xizmatlarni, masalan, kasalxona va universitetlarni taklif qiladi. Uchinchisi, kompaniyalar ishchilar bor joyda bo'lishni afzal ko'radi. Biroq tez o'sish muammolar keltiradi. Shaharlar ko'pincha tashqariga yoyiladi, buni biz sprawl deymiz, bu uzun yo'llar va ko'proq tirbandlikni anglatadi. Ko'p aholi ma'lum bir anonimlik haqida ham aytadi: yillab yonma-yon yashab, hech gaplashmasligingiz mumkin. Shu orada qishloq joylar ajralib qolish xavfiga duch keladi, chunki do'konlar va avtobus qatnovi yo'qoladi. Kelasi hafta mumkin bo'lgan yechimlarni ko'rib chiqamiz." },
        { t: 'check', ex: { k: 'choice', q: "Which is NOT one of the three reasons the lecturer gives for the growth of cities?", opts: ['Young people migrate to find work and schools', 'Cities offer services such as hospitals and universities', 'Companies prefer to be near the workers', 'Shops in cities are cheaper'], a: 3, why: "Matnda do'konlar arzonligi aytilmagan; uchta sabab: migration, services, companies." } },
        { t: 'check', ex: { k: 'tf', q: 'According to the lecturer, rural areas risk isolation when shops and bus services disappear.', a: true, why: "*rural areas risk isolation, as shops and bus services disappear.*" } },
        { t: 'check', ex: { k: 'fill', q: "The lecturer says that when cities spread outwards, the process is called ___. (one word)", a: ['sprawl'], why: "*a process we call sprawl*." } },
        { t: 'check', ex: { k: 'listen', say: "More than half of the world's population now lives in cities.", opts: ["More than half of the world's population now lives in cities.", "Less than half of the world's population now lives in cities.", "More than half of the world's population lived in villages.", "Half of the world's cities now have a population problem."], a: 0 } },
      ],
    },
    {
      title: "Qaydlar jadvali va signposting",
      blocks: [
        { t: 'p', md: "Ma'ruzani tinglaganda **hamma so'zni** yozmang. Faqat **kalit so'zlar** va **tuzilma belgilari** (*first, second, however, meanwhile*) ni yozing. Quyida ushbu ma'ruzaning qaydlari:" },
        { t: 'table', head: ['Sarlavha', 'Qaydlar'], rows: [
          ['Topic', 'urbanisation: over half of the world in cities'],
          ['Causes', '1 migration (jobs, schools) · 2 services · 3 companies near workers'],
          ['Problems in cities', 'sprawl (traffic) · anonymity'],
          ['Problem in the countryside', 'isolation (shops, buses disappear)'],
          ['Next', 'solutions (next week)'],
        ] },
        { t: 'table', head: ['Maqsad', 'Ma\'ruzachi iborasi'], speak: [1], rows: [
          ['Boshlash', 'Let me begin with the numbers.'],
          ['Sabablarni sanash', 'There are three main reasons for this.'],
          ["Ketma-ketlik", 'First, … Second, … Third, …'],
          ['Qarama-qarshilik', 'However, rapid growth brings problems.'],
          ['Parallel fikr', 'Meanwhile, rural areas risk isolation.'],
          ['Tugatish', 'Next week we will look at possible solutions.'],
        ] },
        { t: 'tip', tone: 'info', md: "**However** va **meanwhile** — burilish belgilari: ulardan keyin fikr o'zgaradi. Bularni eshitsangiz, yangi qaydni yangi qatordan boshlang." },
        { t: 'check', ex: { k: 'choice', q: "'Meanwhile, rural areas risk isolation.' — What does *meanwhile* show?", opts: ['A second, parallel situation', 'The end of the lecture', 'A reason', 'A final conclusion'], a: 0, why: "**Meanwhile** — shu vaqtning o'zida boshqa joyda nima bo'layotganini ko'rsatadi." } },
      ],
    },
    {
      title: "Gapiring: 2 daqiqalik nutq",
      blocks: [
        { t: 'p', md: "Mavzu: **Is it better to live in a city or in the countryside?** Tuzilma: **pozitsiya → 2 ta dalil → qarshi fikr va rad etish → xulosa**. Namuna nutqni tinglang:" },
        { t: 'text', title: 'Model long turn', voice: 'emma', en: "In my opinion, it is better to live in a city, although I admit that the countryside has real advantages. Firstly, a city offers far more opportunities. What matters most to young people is a good education and a decent job, and both are easier to find in a city. Secondly, public transport is usually better, so you do not need a car. Admittedly, the countryside is quieter and cleaner. Nevertheless, I would argue that these benefits do not outweigh the disadvantages, such as isolation and fewer services. Not only is it easier to find work in a city, but it is also easier to meet people. To sum up, I believe that cities are the better choice for most people.", uz: "Mening fikrimcha, shaharda yashash yaxshiroq, garchi qishloqning haqiqiy afzalliklari borligini tan olaman. Birinchidan, shahar ancha ko'proq imkoniyat beradi. Yoshlar uchun eng muhimi — yaxshi ta'lim va munosib ish, ikkalasini ham shaharda topish osonroq. Ikkinchidan, jamoat transporti odatda yaxshiroq, shuning uchun mashina kerak emas. To'g'ri, qishloq tinchroq va tozaroq. Shunga qaramay, bu afzalliklar isolation va xizmatlar kamligi kabi kamchiliklardan ustun kelmaydi, deb bahslashaman. Shaharda nafaqat ish topish osonroq, balki odamlar bilan tanishish ham osonroq. Xulosa qilib aytganda, shaharlar ko'pchilik uchun yaxshiroq tanlov, deb hisoblayman." },
        { t: 'table', head: ['Qadam', 'Ibora'], speak: [1], rows: [
          ['Pozitsiya', 'In my opinion, it is better to live in a city.'],
          ['Birinchi dalil', 'Firstly, a city offers far more opportunities.'],
          ['Ikkinchi dalil', 'Secondly, public transport is usually better.'],
          ['Qarshi fikr', 'Admittedly, the countryside is quieter and cleaner.'],
          ['Rad etish', 'Nevertheless, these benefits do not outweigh the disadvantages.'],
          ['Urg\'u', 'Not only is it easier to find work, but it is also easier to meet people.'],
          ['Xulosa', 'To sum up, I believe that cities are the better choice.'],
        ] },
        { t: 'check', ex: { k: 'fix', wrong: 'In my opinion I think that cities are better.', a: ['In my opinion, cities are better.', 'I think that cities are better.', 'I think cities are better.', 'In my opinion, I believe that cities are better.'], why: "**In my opinion** va **I think** ni birga ishlatmang: bittasi yetarli." } },
        { t: 'check', ex: { k: 'fill', q: "To ___ up, I believe that cities are the better choice.", a: ['sum'], why: "Xulosa iborasi: **To sum up**." } },
        { t: 'check', ex: { k: 'choice', q: "Which sentence is the best opening of a long turn?", opts: ['I do not know what to say.', 'In my opinion, it is better to live in a city, although the countryside has real advantages.', 'Cities. Countryside. Both are good.', 'My opinion is I like very much city.'], a: 1, why: "Ochiq pozitsiya va qarshi tomonni tan olish — kuchli ochilish." } },
      ],
    },
    {
      title: "Endi siz ayting",
      blocks: [
        { t: 'p', md: "Telefonda taymerni **1 daqiqa 30 soniya** ga qo'ying va xuddi shu mavzuda gapiring. Avval 1 daqiqa rejalashtiring (**4 ta qaydni yozing**), keyin to'xtamasdan gapiring." },
        { t: 'tip', tone: 'good', md: "**Tekshiruv:** (1) pozitsiya aniq; (2) kamida 2 ta dalil; (3) *Admittedly… Nevertheless…*; (4) kamida bitta *Not only … but also* yoki cleft (*What matters most is…*); (5) *To sum up…* bilan tugadi. To'xtab qolsangiz, *Let me put it another way…* deng." },
        { t: 'check', ex: { k: 'order', uz: "Bu nafaqat arzonroq, balki tezroq ham.", words: ['Not', 'only', 'is', 'it', 'cheaper,', 'but', 'it', 'is', 'also', 'quicker.'], extra: ['does', 'quick'], why: "**Not only** + yordamchi + ega: *is it*." } },
      ],
    },
  ],
  words: [
    { en: 'urbanisation', uz: 'shaharlashuv', ipa: 'ˌɜː.bən.aɪˈzeɪ.ʃən', pos: 'noun', ex: 'Rapid urbanisation has changed the way people live.', exUz: "Tez shaharlashuv odamlarning yashash tarzini o'zgartirdi." },
    { en: 'rural', uz: "qishloq (joyga oid)", ipa: 'ˈrʊə.rəl', pos: 'adj', ex: 'Many rural schools have closed in recent years.', exUz: "Ko'p qishloq maktablari so'nggi yillarda yopildi." },
    { en: 'sprawl', uz: "shaharning tartibsiz yoyilishi", ipa: 'sprɔːl', pos: 'noun', ex: 'Urban sprawl has turned farmland into housing estates.', exUz: "Shaharning yoyilishi ekin maydonlarini turar-joy massivlariga aylantirdi." },
    { en: 'migration', uz: "ko'chish, migratsiya", ipa: 'maɪˈɡreɪ.ʃən', pos: 'noun', ex: 'Migration from the countryside has slowed down.', exUz: "Qishloqdan ko'chish sekinlashdi." },
    { en: 'anonymity', uz: "noma'lumlik, anonimlik", ipa: 'ˌæn.əˈnɪm.ə.ti', pos: 'noun', ex: 'Some people enjoy the anonymity of a big city.', exUz: "Ba'zi odamlar katta shaharning anonimligidan zavqlanadi." },
    { en: 'isolation', uz: "yakkalanib qolish", ipa: 'ˌaɪ.səˈleɪ.ʃən', pos: 'noun', ex: 'Elderly people in remote villages often suffer from isolation.', exUz: "Olis qishloqlardagi keksalar ko'pincha yakkalanib qolishdan aziyat chekadi." },
  ],
  practice: [
    { k: 'match', pairs: [['urbanisation', 'shaharlashuv'], ['rural', 'qishloqqa oid'], ['sprawl', 'shaharning yoyilishi'], ['migration', "ko'chish"], ['anonymity', 'anonimlik'], ['isolation', 'yakkalanib qolish']] },
    { k: 'listen', say: 'Young people leave rural areas because they hope to find better jobs.', opts: ['Young people leave rural areas because they hope to find better jobs.', 'Young people leave cities because they hope to find better jobs.', 'Young people leave rural areas because they have found better jobs.', 'Old people leave rural areas because they hope to find better jobs.'], a: 0 },
    { k: 'listen', say: 'Cities often spread outwards, which means long journeys and more traffic.', opts: ['Cities often spread outwards, which means long journeys and more traffic.', 'Cities rarely spread outwards, which means short journeys and less traffic.', 'Cities often spread upwards, which means long journeys and more traffic.', 'Cities often spread outwards, which means long journeys and more shops.'], a: 0 },
    { k: 'choice', q: "The spread of a city into the countryside, with houses built far from the centre, is called ___.", opts: ['sprawl', 'migration', 'anonymity', 'isolation'], a: 0, why: "Shaharning tartibsiz yoyilishi — **sprawl**." },
    { k: 'choice', q: "In a big city many people enjoy ___: nobody knows who they are or what they do.", opts: ['isolation', 'sprawl', 'anonymity', 'urbanisation'], a: 2, why: "Hech kim tanimasligi — **anonymity**." },
    { k: 'choice', q: "The village is in a quiet ___ area.", opts: ['sprawl', 'urbanisation', 'migration', 'rural'], a: 3, why: "Sifat kerak: **rural area** (qishloq joy)." },
    { k: 'fill', q: "The movement of people from villages to cities is called internal ___. (ot: ko'chish)", a: ['migration'], why: "**migration** — aholining ko'chishi." },
    { k: 'fill', q: "Not only ___ it easier to find work in a city, but it is also easier to meet people.", a: ['is'], why: "**Not only** + yordamchi + ega: *is it*." },
    { k: 'fix', wrong: 'In my opinion I think that cities are better.', a: ['In my opinion, cities are better.', 'I think that cities are better.', 'I think cities are better.'], why: "**In my opinion** va **I think** — bittasi yetarli." },
    { k: 'order', uz: "Birinchidan, shahar ancha ko'proq imkoniyat beradi.", words: ['Firstly,', 'a', 'city', 'offers', 'far', 'more', 'opportunities.'], extra: ['much', 'offer'], why: "**far more** + sanaladigan ko'plik ot." },
    { k: 'translate', uz: "Xulosa qilib aytganda, men shaharlar yaxshiroq tanlov, deb hisoblayman.", a: ['To sum up, I believe that cities are the better choice.', 'To sum up, I believe cities are the better choice.', 'In conclusion, I believe that cities are the better choice.', 'In conclusion, I believe cities are the better choice.', 'To sum up, I think that cities are the better choice.', 'To sum up, I think cities are the better choice.'], why: "Xulosa: **To sum up / In conclusion**." },
    { k: 'tf', q: "In a long turn it is a good idea to use signposting words such as *firstly*, *however* and *to sum up*.", a: true, why: "Signposting tinglovchiga nutq tuzilmasini ko'rsatadi." },
    { k: 'dictation', say: 'Many residents report a certain anonymity in large cities.', a: ['Many residents report a certain anonymity in large cities.'], uz: "Ko'p aholi katta shaharlarda ma'lum bir anonimlik borligini aytadi." },
    { k: 'speak', say: 'In my opinion, it is better to live in a city.', uz: "Mening fikrimcha, shaharda yashash yaxshiroq." },
  ],
  quiz: [
    { k: 'choice', q: "According to the lecturer, why do companies prefer cities?", opts: ['Because the workers are there', 'Because rents are low', 'Because there are fewer taxes', 'Because cities are quiet'], a: 0, why: "*companies prefer to be where the workers are.*" },
    { k: 'choice', q: "Which problem do rural areas risk, according to the lecture?", opts: ['Sprawl', 'Isolation', 'Anonymity', 'Overcrowding'], a: 1, why: "*rural areas risk isolation.* Sprawl va anonymity — shahar muammolari." },
    { k: 'listen', say: 'Next week we will look at possible solutions.', opts: ['Next week we will look at possible solutions.', 'Last week we looked at possible solutions.', 'Next week we will look at possible problems.', 'Next week they will look at possible solutions.'], a: 0 },
    { k: 'fill', q: "Let me ___ with the numbers. (boshlamoq)", a: ['begin', 'start'], why: "Ma'ruzani boshlash: **Let me begin / start with…**" },
    { k: 'fix', wrong: 'Firstly of all, a city offers more opportunities.', a: ['Firstly, a city offers more opportunities.', 'First of all, a city offers more opportunities.'], why: "**Firstly** yoki **First of all**, ikkalasini aralashtirmang." },
    { k: 'order', uz: "Bu nafaqat arzonroq, balki tezroq ham.", words: ['Not', 'only', 'is', 'it', 'cheaper,', 'but', 'it', 'is', 'also', 'quicker.'], extra: ['does', 'quick'], why: "**Not only** + yordamchi + ega." },
    { k: 'tf', q: "*Sprawl* means that a city becomes smaller.", a: false, why: "**Sprawl** — shahar tartibsiz ravishda **kengayishi**." },
    { k: 'choice', q: "Which is the best way to end a long turn?", opts: ['That is all, bye.', 'And also another thing.', 'Because I think.', 'To sum up, I believe that cities are the better choice for most people.'], a: 3, why: "Xulosa **To sum up** bilan, pozitsiyani takrorlab beriladi." },
  ],
  summary: [
    "Ma'ruzada **hamma so'zni** emas, **kalit so'z va tuzilma belgilari**ni yozing (*first, second, however, meanwhile, next week*).",
    "Qaydlar jadvali: **Topic, Causes, Problems, Next**. Sabablarni sonini eshiting (*three main reasons*).",
    "Uzoq nutq: **pozitsiya → dalil 1 → dalil 2 → qarshi fikr + rad etish → xulosa** (*Admittedly… Nevertheless… To sum up…*).",
    "Urg'u uchun bitta **Not only … but also** yoki **What matters most is…** yetarli. *In my opinion I think* demang.",
    "Yangi so'zlar: **urbanisation, rural, sprawl, migration, anonymity, isolation**.",
  ],
  homework: "*Is it better to live in a city or in the countryside?* mavzusida o'z pozitsiyangizni tanlang, 4 qayd yozing va 1 daqiqa 30 soniyalik nutqni telefonga yozib oling. Tinglab ko'ring: signposting so'zlari (*firstly, admittedly, to sum up*) bormi? To'xtab qolgan joylaringizni belgilang va qayta yozing.",
};

export default lesson;
