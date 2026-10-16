import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u22-l4",
  title: "Comparing in depth",
  titleUz: "Taqqoslash chuqurroq: the more… the more, much / far, as… as",
  goal: "Taqqoslashni aniqroq qilasiz: **the more you practise, the better you get**, **much / far / slightly** bilan farqni kuchaytirasiz yoki kamaytirasiz, **as … as**, **not as … as**, **twice as … as**, **the same as**, **different from** va **less / fewer** ni to'g'ri ishlatasiz.",
  slides: [
    {
      title: "The more … the more",
      blocks: [
        { t: "p", md: "Bir narsa o'zgarsa, ikkinchisi ham unga qarab o'zgarishini ko'rsatish uchun ikki **the + qiyosiy daraja** ishlatamiz. O'zbekchada «**qancha ko'p** mashq qilsangiz, **shuncha yaxshi** bo'lasiz» — inglizchada shunday:" },
        {
          t: "examples", items: [
            { en: "The more you practise, the better you speak.", uz: "Qancha ko'p mashq qilsangiz, shuncha yaxshi gapirasiz." },
            { en: "The earlier we start, the sooner we finish.", uz: "Qancha erta boshlasak, shuncha tez tugatamiz." },
            { en: "The harder the exam is, the more I study.", uz: "Imtihon qancha qiyin bo'lsa, shuncha ko'p o'qiyman." },
            { en: "The more expensive the phone, the better the camera.", uz: "Telefon qancha qimmat bo'lsa, kamera shuncha yaxshi.", note: "Qisqa shaklda fe'l tushib qoladi." },
          ],
        },
        { t: "tip", tone: "info", md: "Har ikki qismning boshida **the** bo'ladi va undan keyin **qiyosiy daraja** (*better, more, harder, earlier*) keladi. Ikkala qism orasida **vergul** qo'yiladi. Keyingi so'z tartibi oddiy: ega + fe'l." },
        { t: "check", ex: { k: "order", uz: "Qancha ko'p o'qisang, shuncha ko'p bilasan.", words: ["The", "more", "you", "study,", "the", "more", "you", "know."], extra: ["most", "than"], why: "**The more …, the more …**" } },
        { t: "check", ex: { k: "fix", wrong: "More you practise, better you speak.", a: ["The more you practise, the better you speak."], hint: "ikkala qismda ham the kerak", why: "Ikkala qismda ham **the** bo'lishi shart." } },
      ],
    },
    {
      title: "Farqni kuchaytirish va kamaytirish",
      blocks: [
        { t: "p", md: "Qiyosiy darajadan oldin farq **qanchalik katta** yoki **kichik** ekanini ko'rsatish mumkin:" },
        {
          t: "table", head: ["Katta farq", "Kichik farq"],
          rows: [
            ["much, a lot, far, significantly", "a bit, a little, slightly"],
            ["This laptop is **much** faster.", "This laptop is **a bit** faster."],
            ["Trains are **far** cheaper than taxis.", "Trains are **slightly** cheaper than buses."],
            ["He works **a lot** harder now.", "He works **a little** harder now."],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["It is much bigger than my old flat.", "She speaks far better than me.", "My new job is a bit more stressful."] },
          bad: { title: "Xato", items: ["It is very bigger than my old flat.", "She speaks more better than me.", "My new job is a bit stressful than before."] },
        },
        { t: "tip", tone: "warn", md: "Qiyosiy daraja oldidan **very** va **more** (ikki karra) **ishlatilmaydi**: *very bigger*, *more better* — xato. Faqat **much, far, a lot, a bit, slightly** ishlatiladi. Bu o'zbekchadagi «ancha kattaroq» ga to'g'ri keladi." },
        { t: "check", ex: { k: "choice", q: "The new software is ___ easier to use than the old one.", opts: ["much", "very", "more", "most"], a: 0, why: "Qiyosiy daraja oldidan **much**, *very* emas." } },
        { t: "check", ex: { k: "choice", q: "Which sentence means a small difference?", opts: ["My bag is slightly heavier than yours.", "My bag is far heavier than yours.", "My bag is much heavier than yours.", "My bag is a lot heavier than yours."], a: 0, why: "**slightly** — ozgina farq." } },
      ],
    },
    {
      title: "as … as, not as … as",
      blocks: [
        { t: "p", md: "Ikki narsa **teng** bo'lsa **as + sifat + as** deymiz. Teng bo'lmasa **not as … as** deymiz." },
        {
          t: "table", head: ["Qolip", "Misol", "Ma'nosi"], speak: [1],
          rows: [
            ["as + sifat + as", "My phone is as fast as yours.", "Telefonim seniki kabi tez."],
            ["not as + sifat + as", "English isn't as hard as I thought.", "Ingliz tili men o'ylagandek qiyin emas."],
            ["twice as + sifat + as", "This room is twice as big as that one.", "Bu xona u xonadan ikki baravar katta."],
            ["as much / many as", "I have as many books as you.", "Menda sizdagichalik ko'p kitob bor."],
            ["just as + sifat + as", "She is just as clever as her brother.", "U akasi kabi aqlli."],
          ],
        },
        { t: "tip", tone: "info", md: "Birinchi **as** — «shunchalik», ikkinchi **as** — «...dek». Ikkinchi **as** dan keyin **than** emas, doim **as** keladi: *as tall **as** me*, *as tall **than** me* emas." },
        { t: "check", ex: { k: "fill", q: "This course is not ___ difficult as I expected.", a: ["as", "so"], why: "**not as … as** yoki **not so … as**." } },
        { t: "check", ex: { k: "fix", wrong: "My brother is as tall than me.", a: ["My brother is as tall as me.", "My brother is as tall as I am."], hint: "ikkinchi bo'lak", why: "**as … as**, *than* emas." } },
      ],
    },
    {
      title: "the same as, different from, less va fewer",
      blocks: [
        {
          t: "table", head: ["Ibora", "Misol", "Eslatma"], speak: [1],
          rows: [
            ["the same as", "My phone is the same as yours.", "*same like* emas"],
            ["different from", "Life here is different from life in my country.", "Britaniyada *different to* ham aytiladi"],
            ["similar to", "This job is similar to my last one.", "O'xshash"],
            ["less + sanalmaydigan ot", "I drink less coffee now.", "*less coffee, less time, less money*"],
            ["fewer + sanaladigan ko'plik", "There are fewer students this year.", "*fewer people, fewer books*"],
          ],
        },
        { t: "tip", tone: "warn", md: "O'zbekchada «**xuddi** sening telefoningdek» deymiz — inglizchada **the same as** yoki **just like**: *This is the same as mine.* **same like** xato!" },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["Her idea is the same as mine.", "I have less free time than before.", "We have fewer meetings this month."] },
          bad: { title: "Xato", items: ["Her idea is same like mine.", "I have fewer free time than before.", "We have less meetings this month."] },
        },
        { t: "check", ex: { k: "choice", q: "There are ___ cars on the road at night.", opts: ["fewer", "less", "little", "much"], a: 0, why: "*cars* — sanaladigan ot → **fewer**." } },
        { t: "check", ex: { k: "choice", q: "Studying online is different ___ studying in a classroom.", opts: ["from", "than", "like", "as"], a: 0, why: "**different from**." } },
      ],
    },
    {
      title: "Eng yuqori daraja va ko'p ishlatiladigan qoliplar",
      blocks: [
        { t: "p", md: "Superlative (eng yuqori daraja) ni A2 da o'rgangansiz. Endi uni yanada tabiiy qiladigan qoliplar:" },
        {
          t: "examples", items: [
            { en: "This is by far the best course I've ever taken.", uz: "Bu men o'qigan kurslarning ichida ancha farq bilan eng yaxshisi.", note: "**by far the** + superlative — «ancha ustun»." },
            { en: "She is one of the most successful designers in the city.", uz: "U shahardagi eng muvaffaqiyatli dizaynerlardan biri.", note: "**one of the** + superlative + ko'plik ot." },
            { en: "It's the most interesting film I've ever seen.", uz: "Bu men ko'rgan eng qiziq film.", note: "Superlative + **I've ever** + V3." },
            { en: "Computers are getting faster and faster.", uz: "Kompyuterlar tobora tezlashib bormoqda.", note: "**-er and -er** yoki **more and more** — tobora." },
            { en: "Jobs are becoming more and more flexible.", uz: "Ish tobora moslashuvchan bo'lib bormoqda." },
          ],
        },
        { t: "tip", tone: "good", md: "O'zgarish haqida gapirayotganda **comparative and comparative** qolipi o'zbekchadagi «tobora ... bo'lib bormoqda» ga to'g'ri keladi: *It's getting harder and harder.*" },
        { t: "check", ex: { k: "fill", q: "Phones are getting cheaper and ___.", a: ["cheaper"], why: "**cheaper and cheaper** — tobora arzonlashmoqda." } },
        { t: "check", ex: { k: "choice", q: "It is one of the ___ places to study in the city.", opts: ["quietest", "quieter", "most quiet than", "quietly"], a: 0, why: "**one of the** + superlative: *the quietest*." } },
      ],
    },
    {
      title: "Dialog: noutbuk tanlash",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Nilufar", en: "I'm trying to choose a new laptop. This one is much cheaper than that one.", uz: "Yangi noutbuk tanlamoqchiman. Bu ikkinchisidan ancha arzon." },
            { who: "Tom", en: "Yes, but it isn't as fast. The more you pay, the faster it is.", uz: "Ha, lekin u unchalik tez emas. Qancha ko'p to'lasangiz, u shuncha tez." },
            { who: "Nilufar", en: "True. And the battery life is slightly shorter, too.", uz: "To'g'ri. Batareyasi ham biroz kamroq ishlaydi." },
            { who: "Tom", en: "What do you need it for?", uz: "U senga nima uchun kerak?" },
            { who: "Nilufar", en: "Mainly for studying. I use fewer programs than you, so I don't need the most powerful one.", uz: "Asosan o'qish uchun. Men sendan kamroq dastur ishlataman, shuning uchun eng kuchlisi kerak emas." },
            { who: "Tom", en: "Then this cheaper one is the best choice. It's by far the most sensible.", uz: "Unda bu arzonrog'i eng yaxshi tanlov. Bu eng oqilona tanlov." },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Nilufar needs the most powerful laptop.", a: false, why: "U *I don't need the most powerful one* dedi — eng kuchlisi kerak emas." } },
      ],
    },
    {
      title: "O'qing: ishlash usullari",
      blocks: [
        {
          t: "text", title: "Office or home?", voice: "emma",
          en: "More and more people are working from home these days. Working at home is often more convenient than going to an office, and it is much cheaper because you spend less on transport. However, many people say that it is not as easy to stay motivated at home. The more you are alone, the harder it can be to feel part of a team. Some companies are now trying a mixed model. Employees work from the office two days a week and from home for the rest of the time. Most people say it is a little more tiring than working in one place, but they agree that it is far more flexible.",
          uz: "Bu kunlarda tobora ko'proq odam uydan ishlamoqda. Uyda ishlash ko'pincha ofisga borishdan qulayroq va ancha arzonroq, chunki transportga kamroq pul sarflaysiz. Biroq ko'pchilik uyda o'zini ishga undab turish unchalik oson emasligini aytadi. Qancha ko'p yolg'iz qolsangiz, jamoaning bir qismi ekanligingizni his qilish shuncha qiyin bo'lishi mumkin. Ba'zi kompaniyalar endi aralash modelni sinab ko'rmoqda. Xodimlar haftada ikki kun ofisdan, qolgan vaqt uydan ishlaydi. Ko'pchilik bu usul bir joyda ishlashdan biroz ko'proq charchatishini, lekin ancha moslashuvchan ekanini aytadi.",
        },
        { t: "check", ex: { k: "tf", q: "The text says working at home is more expensive than going to an office.", a: false, why: "Matnda uyda ishlash **much cheaper** (ancha arzonroq) deyilgan." } },
        { t: "check", ex: { k: "choice", q: "What does \"far more flexible\" mean?", opts: ["a lot more flexible", "slightly more flexible", "not flexible", "less flexible"], a: 0, why: "**far** + qiyosiy daraja — katta farq." } },
      ],
    },
  ],
  words: [
    { en: "efficient", uz: "samarali", ipa: "ɪˈfɪʃ.ənt", pos: "adj", ex: "Online banking is more efficient than visiting a branch.", exUz: "Onlayn bank filialga borishdan samaraliroq." },
    { en: "durable", uz: "chidamli, uzoq xizmat qiladigan", ipa: "ˈdjʊə.rə.bəl", pos: "adj", ex: "This bag is more durable than my old one.", exUz: "Bu sumka eskisiga qaraganda ancha chidamli." },
    { en: "affordable", uz: "hamyonbop, arzon", ipa: "əˈfɔː.də.bəl", pos: "adj", ex: "Public transport is far more affordable than a taxi.", exUz: "Jamoat transporti taksiga qaraganda ancha arzon." },
    { en: "demanding", uz: "ko'p kuch talab qiladigan", ipa: "dɪˈmɑːn.dɪŋ", pos: "adj", ex: "Teaching is a demanding job.", exUz: "O'qituvchilik ko'p kuch talab qiladigan kasb." },
    { en: "flexible", uz: "moslashuvchan", ipa: "ˈflek.sə.bəl", pos: "adj", ex: "I prefer flexible working hours.", exUz: "Moslashuvchan ish soatlarini afzal ko'raman." },
    { en: "noticeably", uz: "sezilarli darajada, ko'zga tashlanib", ipa: "ˈnəʊ.tɪ.sə.bli", pos: "adv", ex: "The city is noticeably quieter on Sundays.", exUz: "Yakshanba kunlari shahar ko'zga tashlanib tinchroq bo'ladi." },
    { en: "considerably", uz: "sezilarli darajada", ipa: "kənˈsɪd.ər.ə.bli", pos: "adv", ex: "The new system is considerably faster.", exUz: "Yangi tizim sezilarli darajada tezroq." },
    { en: "increasingly", uz: "tobora, borgan sari", ipa: "ɪnˈkriː.sɪŋ.li", pos: "adv", ex: "Increasingly, people shop online.", exUz: "Tobora ko'proq odam onlayn xarid qilmoqda." },
    { en: "steadily", uz: "izchil, bir maromda", ipa: "ˈsted.ɪ.li", pos: "adv", ex: "Sales have grown steadily over the last year.", exUz: "So'nggi yil davomida savdo izchil o'sdi." },
    { en: "compared with", uz: "...ga nisbatan", ipa: "kəmˈpeəd wɪð", pos: "phrase", ex: "Compared with last year, sales are up.", exUz: "O'tgan yilga nisbatan savdo oshgan." },
  ],
  practice: [
    { k: "match", pairs: [["efficient", "samarali"], ["reliable", "ishonchli"], ["convenient", "qulay"], ["slightly", "biroz"], ["gradually", "asta-sekin"], ["flexible", "moslashuvchan"]] },
    { k: "choice", q: "The ___ you practise, the better you get.", opts: ["more", "most", "much", "many"], a: 0, why: "**The more …, the better …**" },
    { k: "choice", q: "This tablet is ___ lighter than my old one. I can barely feel it.", opts: ["much", "very", "more", "most"], a: 0, why: "Qiyosiy daraja oldidan **much**." },
    { k: "choice", q: "My new flat is ___ big as my old one.", opts: ["not as", "not than", "no more", "less than"], a: 0, why: "**not as … as**." },
    { k: "fill", q: "The earlier you leave, ___ sooner you will arrive.", a: ["the"], uz: "Qancha erta ketsangiz, shuncha tez yetib borasiz.", why: "**The …, the …**" },
    { k: "fill", q: "Our new office is twice ___ big as the old one.", a: ["as"], uz: "Yangi ofisimiz eskisidan ikki baravar katta.", why: "**twice as … as**." },
    { k: "fill", q: "There is ___ traffic in the city on Sundays.", a: ["less"], uz: "Yakshanba kunlari shaharda transport kamroq.", why: "*traffic* — sanalmaydi → **less**." },
    { k: "fill", q: "We have ___ students in the class this term.", a: ["fewer"], uz: "Bu semestrda sinfimizda talabalar kamroq.", why: "*students* — sanaladi → **fewer**." },
    { k: "order", uz: "Qancha ko'p ishlasam, shuncha charchayman.", words: ["The", "more", "I", "work,", "the", "more", "tired", "I", "feel."], extra: ["most", "than"], alt: [["The", "more", "I", "work,", "the", "more", "tired", "I", "get."], ["The", "more", "I", "work,", "the", "more", "tired", "I", "am."]], why: "**The more …, the more …**" },
    { k: "order", uz: "Bu dastur eskisiga qaraganda ancha tez.", words: ["This", "program", "is", "much", "faster", "than", "the", "old", "one."], extra: ["very", "more"], why: "**much** + qiyosiy daraja + than." },
    { k: "tf", q: "\"This is more better than that\" is a correct sentence.", a: false, why: "Ikki karra qiyosiy daraja bo'lmaydi: *much better*." },
    { k: "tf", q: "\"My bag is the same as yours\" is correct.", a: true, why: "**the same as** — to'g'ri." },
    { k: "fix", wrong: "Her phone is same like mine.", a: ["Her phone is the same as mine."], hint: "the same ... ", why: "**the same as**, *same like* emas." },
    { k: "fix", wrong: "He is very taller than his brother.", a: ["He is much taller than his brother.", "He is a lot taller than his brother.", "He is far taller than his brother."], hint: "very + qiyosiy daraja bo'lmaydi", why: "Qiyosiy darajadan oldin **much / a lot / far**." },
    { k: "dictation", say: "The more I learn, the more I enjoy it.", uz: "Qancha ko'p o'rgansam, shuncha ko'p yoqadi.", why: "**The more …, the more …**" },
    { k: "translate", uz: "Bu dars men o'ylagandek qiyin emas.", a: ["This lesson isn't as difficult as I thought.", "This lesson is not as difficult as I thought.", "This lesson isn't as hard as I thought.", "This lesson is not as hard as I thought."], why: "**not as … as**." },
    { k: "speak", say: "It's getting harder and harder to find a good job.", uz: "Yaxshi ish topish tobora qiyinlashib bormoqda." },
  ],
  quiz: [
    { k: "choice", q: "The harder you work, ___ you get.", opts: ["the more tired", "more tired", "the most tired", "tired than"], a: 0, why: "**The harder …, the more tired …**" },
    { k: "choice", q: "Trains are ___ cheaper than planes.", opts: ["far", "very", "most", "more"], a: 0, why: "**far** + qiyosiy daraja." },
    { k: "choice", q: "Is this phone the same ___ yours?", opts: ["as", "like", "than", "with"], a: 0, why: "**the same as**." },
    { k: "choice", q: "She spends ___ time on social media than before.", opts: ["less", "fewer", "little", "fewest"], a: 0, why: "*time* — sanalmaydi → **less**." },
    { k: "fill", q: "Life in a big city is very different ___ life in a village.", a: ["from", "to"], why: "**different from** (Britaniyada *different to* ham)." },
    { k: "fill", q: "Phones are becoming more and ___ powerful.", a: ["more"], why: "**more and more** — tobora." },
    { k: "fix", wrong: "This is the more interesting book I have ever read.", a: ["This is the most interesting book I have ever read.", "This is the most interesting book I've ever read."], hint: "eng yuqori daraja", why: "Uch va undan ortiq narsa orasida **the most interesting**." },
    { k: "fix", wrong: "I have fewer free time than before.", a: ["I have less free time than before."], hint: "free time sanalmaydi", why: "*time* sanalmaydi → **less**." },
    { k: "order", uz: "Bu kompyuter menikidek tez emas.", words: ["This", "computer", "isn't", "as", "fast", "as", "mine."], extra: ["than", "so"], alt: [["This", "computer", "is", "not", "as", "fast", "as", "mine."], ["This", "computer", "isn't", "so", "fast", "as", "mine."], ["This", "computer", "is", "not", "so", "fast", "as", "mine."]], why: "**not as … as**." },
    { k: "tf", q: "In \"as tall as me\" the second word as is correct (not than).", a: true, why: "**as … as** qolipida ikkinchi bo'lak **as**." },
  ],
  summary: [
    "**The + qiyosiy daraja, the + qiyosiy daraja**: *The more you practise, the better you get.* Ikkala qismda ham **the** bor.",
    "Farqni kuchaytirish: **much, a lot, far** + qiyosiy daraja; kamaytirish: **a bit, a little, slightly**. *very bigger* va *more better* — xato.",
    "**as … as** (teng), **not as … as** (teng emas), **twice as … as**, **the same as**, **different from**, **similar to**.",
    "**less** + sanalmaydigan ot, **fewer** + sanaladigan ko'plik: *less time, fewer meetings*.",
    "**by far the best**, **one of the most …**, **I've ever …**, **harder and harder** — tabiiy qoliplar.",
  ],
  homework: "O'zingiz tanigan ikki narsani (ikki telefon, ikki shahar, ikki kasb) taqqoslab 6 ta gap yozing: ikkita **The more … the more …**, ikkita **much / slightly + qiyosiy daraja**, ikkita **as … as** yoki **not as … as**.",
};

export default lesson;
