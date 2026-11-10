import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u28-l3",
  title: "Concession and contrast linkers",
  titleUz: "Qarama-qarshi va to'sqinlik bog'lovchilari: although, even though, despite, whereas, nevertheless, in spite of",
  goal: "**Qarama-qarshi fikrlarni** (*concession* va *contrast*) to'g'ri bog'laysiz: **although / even though / though**, **despite / in spite of**, **however / nevertheless / nonetheless / even so / all the same**, **whereas / while / on the other hand**. Qaysi so'zdan keyin gap, qaysisidan keyin ot yoki **-ing** kelishini, tinish belgilarini bilasiz va **despite of**, **although … but** xatolaridan qochasiz.",
  slides: [
    {
      title: "Nima uchun kerak: «lekin» ning ko'p yuzi",
      blocks: [
        { t: "p", md: "O'zbek tilida *garchi … lekin, shunga qaramay, ammo* deymiz. Inglizchada bu ma'noni **o'nlab** bog'lovchi bilan ifodalaymiz va ularning **grammatikasi har xil**: ba'zisidan keyin to'liq gap, ba'zisidan keyin faqat ot yoki **-ing**, ba'zisi gap boshida vergul bilan keladi. IELTS essay va ish xatlarida aynan shu farqlar baholanadi." },
        { t: "p", md: "Ikki xil ma'no bor: **to'sqinlik** (*concession*): «kutilgan natija chiqmadi»: *Although it rained, we went out.* **Qarama-qarshi qo'yish** (*contrast*): «ikki narsa farq qiladi»: *Tom is tall, whereas Ben is short.*" },
        {
          t: "table", head: ["Bog'lovchi", "Keyin nima keladi", "Misol"], speak: [2],
          rows: [
            ["although / even though / though", "to'liq gap (ega + fe'l)", "Although it was raining, we went out."],
            ["despite / in spite of", "ot, -ing yoki the fact that + gap", "Despite the rain, we went out."],
            ["however / nevertheless / nonetheless", "yangi gap boshida, vergul bilan", "It was raining. Nevertheless, we went out."],
            ["whereas / while", "ikkinchi to'liq gap (farq)", "Anna likes tea, whereas Tom prefers coffee."],
          ],
        },
        { t: "tip", tone: "info", md: "Bitta gapda **ikkita** bog'lovchi bo'lmaydi. O'zbekcha *garchi … lekin …* inglizchada **faqat bittasi**: *Although … , …* yoki *… but …*." },
        { t: "check", ex: { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["Although he was tired, he kept working.", "Although he was tired, but he kept working.", "Despite he was tired, he kept working.", "In spite he was tired, he kept working."], a: 0, why: "**Although + gap**, keyin **but yo'q**. *Despite* dan keyin gap kelmaydi." } },
      ],
    },
    {
      title: "Although, even though, though va Despite, In spite of",
      blocks: [
        { t: "p", md: "**Although / even though / though** dan keyin **ega + fe'l** keladi. **Despite / in spite of** dan keyin esa **ot**, **-ing** shakli yoki **the fact that + gap**. Ma'no bir xil, faqat tuzilma farq qiladi." },
        {
          t: "table", head: ["Gap bilan", "Ot / -ing bilan"], speak: [0, 1],
          rows: [
            ["Although the weather was bad, we went hiking.", "Despite the bad weather, we went hiking."],
            ["Even though she was ill, she came to work.", "In spite of her illness, she came to work."],
            ["Although he had a good salary, he was unhappy.", "Despite having a good salary, he was unhappy."],
            ["Although he was ill, he came.", "Despite the fact that he was ill, he came."],
          ],
        },
        {
          t: "examples", items: [
            { en: "We enjoyed the trip even though it rained every day.", uz: "Har kuni yomg'ir yog'ishiga qaramay, sayohatdan zavqlandik." },
            { en: "In spite of being nervous, she gave an excellent talk.", uz: "Hayajonlanishiga qaramay, u zo'r nutq so'zladi." },
            { en: "He passed the exam, though he hadn't studied much.", uz: "U ko'p o'qimagan bo'lsa-da, imtihondan o'tdi." },
          ],
        },
        { t: "tip", tone: "warn", md: "**Even though** — **although** ning kuchliroq varianti (kutilmagan natija). *Even although* deyilmaydi. **Though** so'zlashuv tilida gap **oxirida** ham keladi: *It's cheap. It isn't very good, though.* Fe'l **-ing** bo'lsa, ega gapning egasi bilan bir xil bo'lishi kerak: *Despite **being** tired, **he** kept working.*" },
        { t: "tip", tone: "warn", md: "**Despite** va **in spite of** — **of** faqat **in spite** bilan: *in spite **of***. ~~Despite of~~ — xato. Ikkalasidan keyin ham **ot** yoki **-ing**, to'g'ridan-to'g'ri gap emas." },
        { t: "check", ex: { k: "fill", q: "___ the heavy traffic, we arrived on time.", a: ["Despite", "In spite of"], why: "Keyin **ot** (*the heavy traffic*): **despite** yoki **in spite of**." } },
        { t: "check", ex: { k: "choice", q: "He kept working ___ he was exhausted.", opts: ["although", "despite", "however", "in spite"], a: 0, why: "Keyin to'liq gap (*he was exhausted*): **although**." } },
      ],
    },
    {
      title: "However, nevertheless, nonetheless, even so, all the same",
      blocks: [
        { t: "p", md: "Bu so'zlar **ikkita gapni** bog'laydi, lekin bitta gap ichiga qo'shilmaydi. Ular **ikkinchi gapni boshlaydi** va undan keyin **vergul** qo'yiladi. Ma'no: «shunga qaramay»." },
        {
          t: "table", head: ["Qanday yozamiz", "Misol"], speak: [1],
          rows: [
            ["Nuqta + Linker, vergul", "The plan is expensive. However, it is the best option."],
            ["Nuqtali vergul + linker, vergul", "The plan is expensive; nevertheless, it is the best option."],
            ["Gap o'rtasida (vergul bilan)", "The plan is, however, still the best option."],
            ["Suhbatda: even so / all the same", "It's expensive. All the same, I'll buy it."],
          ],
        },
        { t: "p", md: "**However** — eng keng tarqalgan, neytral. **Nevertheless / nonetheless** — rasmiyroq, kuchliroq (*shunga qaramay*). **Even so / all the same** — suhbatga yaqinroq. **Albeit** (*garchi … bo'lsa ham*) — juda rasmiy, qisqa: *a useful, **albeit** expensive, tool; He agreed, **albeit** reluctantly.*" },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["The hotel was expensive. However, it was clean.", "The hotel was expensive; nonetheless, it was clean.", "The hotel was expensive but clean."] },
          bad: { title: "Xato", items: ["The hotel was expensive, however it was clean.", "The hotel was expensive however, it was clean.", "Although the hotel was expensive, however it was clean."] },
        },
        { t: "tip", tone: "warn", md: "**Vergul bilan ikki gapni** bog'lash (*… expensive, however it …*) xato (*comma splice*). Yo'l: **nuqta** yoki **nuqtali vergul** qo'ying yoki **but / although** ishlating." },
        { t: "check", ex: { k: "choice", q: "The test was difficult. ___, most students passed.", opts: ["Nevertheless", "Although", "Despite", "Whereas"], a: 0, why: "Yangi gap boshida vergul bilan: **Nevertheless,**." } },
        { t: "check", ex: { k: "fill", q: "She accepted the offer, ___ reluctantly.", a: ["albeit"], why: "**Albeit** + ravish/sifat: «garchi istamay bo'lsa ham»." } },
      ],
    },
    {
      title: "Whereas, while, in contrast, on the other hand",
      blocks: [
        { t: "p", md: "Bu so'zlar **to'sqinlik** emas, **farqni** ko'rsatadi. **Whereas** va **while** ikki gapni bir gapga bog'laydi (ikkala qism ham to'liq gap). **In contrast / on the other hand** yangi gapni boshlaydi." },
        {
          t: "table", head: ["Tuzilma", "Misol"], speak: [1],
          rows: [
            ["A, whereas B", "Tashkent is crowded, whereas small towns are peaceful."],
            ["While A, B", "While some people enjoy cities, others prefer the countryside."],
            ["A. In contrast, B", "Rents in the centre are high. In contrast, they are low in the suburbs."],
            ["On the one hand A. On the other hand, B", "On the one hand, the job pays well. On the other hand, it is very stressful."],
          ],
        },
        { t: "tip", tone: "info", md: "**On the other hand** — bir fikrning **ikkinchi tomoni** (afzallik va kamchilik). **In contrast** — ikki **boshqa-boshqa** narsani qarama-qarshi qo'yish. **However** — ikkalasiga ham mos, neytral." },
        { t: "p", md: "**Trade-off** (almashinuv: bir narsani olish uchun boshqasidan voz kechish) va **downside** (kamchilik) so'zlari bu mavzuda ko'p uchraydi: *The trade-off is a higher salary for longer hours. The downside is the travelling.*" },
        { t: "check", ex: { k: "choice", q: "My brother loves football, ___ I prefer chess.", opts: ["whereas", "despite", "nevertheless", "even so"], a: 0, why: "Ikki farqni bir gapda bog'lash: **whereas** (yoki *while*)." } },
        { t: "check", ex: { k: "tf", q: "**Whereas** va **in spite of** ikkalasidan keyin ham ot kelishi mumkin.", a: false, why: "**Whereas** dan keyin to'liq gap, **in spite of** dan keyin ot yoki -ing." } },
      ],
    },
    {
      title: "Tipik xatolar (o'zbek tilidan interferensiya)",
      blocks: [
        { t: "p", md: "O'zbek tilida *garchi … lekin …*, *bo'lsa ham …* deyish normal, shuning uchun inglizchaga **so'zma-so'z** o'tkazamiz. Mana tipik xatolar:" },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["Although it was raining, we went out.", "Despite the rain, we had a picnic.", "Despite being tired, he kept working.", "Although the hotel was expensive, it was clean."] },
          bad: { title: "Xato", items: ["Although it was raining, but we went out.", "Despite of the rain, we had a picnic.", "Despite he was tired, he kept working.", "Although the hotel was expensive, however it was clean."] },
        },
        { t: "p", md: "1) **although** va **but** bitta gapda emas. 2) **Despite** bilan **of** emas. 3) **Despite** dan keyin gap emas: ot, **-ing** yoki **the fact that**. 4) Ikkita linker emas: *although … however* ham xato." },
        { t: "check", ex: { k: "fix", wrong: "Although it was raining, but we went out.", a: ["Although it was raining, we went out.", "It was raining, but we went out."], hint: "but ortiqcha", why: "*Although* va *but* ma'nosi bir xil, bittasi yetarli." } },
        { t: "check", ex: { k: "fix", wrong: "Despite of the rain, we had a picnic.", a: ["Despite the rain, we had a picnic.", "In spite of the rain, we had a picnic."], hint: "despite + of emas", why: "**Despite** — **of** siz; **in spite of** — **of** bilan." } },
        { t: "check", ex: { k: "fix", wrong: "Despite he was tired, he kept working.", a: ["Despite being tired, he kept working.", "Although he was tired, he kept working.", "Despite the fact that he was tired, he kept working.", "In spite of being tired, he kept working.", "In spite of the fact that he was tired, he kept working."], hint: "Despite dan keyin gap emas", why: "**Despite** dan keyin **-ing** yoki **the fact that + gap**; yoki **although** ishlating." } },
        { t: "check", ex: { k: "fix", wrong: "Although the hotel was expensive, however it was clean.", a: ["Although the hotel was expensive, it was clean."], hint: "ikkita linker", why: "Bitta ma'no uchun bitta bog'lovchi: **although**." } },
      ],
    },
    {
      title: "O'qing: Ish taklifi",
      blocks: [
        {
          t: "text", title: "A tempting offer", voice: "emma",
          en: "Last month I was offered a job in another city. The salary was higher, and the title sounded impressive. Even so, I hesitated. Although the offer was tempting, it meant moving away from my family. Despite being excited about the challenge, I knew there would be a trade-off. On the one hand, I would earn more; on the other hand, I would see my parents far less often. My sister thinks I should go, whereas my father hopes I will stay. The downside is clear, but the opportunity is real. In spite of my doubts, I accepted in the end, albeit with mixed feelings. Nonetheless, I believe it was the right decision, and I will visit home as often as I can.",
          uz: "O'tgan oy menga boshqa shaharda ish taklif qilishdi. Maosh yuqoriroq edi, lavozim ham ta'sirli eshitilardi. Shunga qaramay, ikkilandim. Taklif jozibali bo'lsa-da, oilamdan uzoqlashishni anglatardi. Yangi vazifadan hayajonlanayotgan bo'lsam ham, bu savdo bo'lishini bilardim. Bir tomondan ko'proq topaman; boshqa tomondan ota-onamni ancha kam ko'raman. Opam borishim kerak deydi, otam esa qolishimni umid qiladi. Kamchilik aniq, lekin imkoniyat ham haqiqiy. Ikkilanishlarimga qaramay, oxir-oqibat qabul qildim, garchi aralash his bilan bo'lsa ham. Shunga qaramay, bu to'g'ri qaror deb o'ylayman va uyga imkon qadar tez-tez boraman.",
        },
        { t: "check", ex: { k: "tf", q: "The writer's father wants her to take the job.", a: false, why: "*My sister thinks I should go, whereas my father hopes I will stay.*" } },
        { t: "check", ex: { k: "choice", q: "Why does the writer say she accepted the job *albeit with mixed feelings*?", opts: ["She was not completely happy about it", "She refused the job", "She was very excited", "Her sister told her to"], a: 0, why: "**albeit** = «garchi … bo'lsa ham»: qaror qabul qilindi, lekin his aralash." } },
      ],
    },
    {
      title: "Dialog: Qaysi noutbukni olamiz?",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Ben", en: "Dilnoza, I can't decide between these two laptops. This one is light, whereas that one has a better screen.", uz: "Dilnoza, bu ikki noutbuk orasida tanlay olmayapman. Bu yengil, anavisining ekrani esa yaxshiroq." },
            { who: "Dilnoza", en: "Which one is cheaper?", uz: "Qaysi biri arzonroq?" },
            { who: "Ben", en: "The light one. Although it costs less, it has a smaller battery.", uz: "Yengili. Arzonroq bo'lsa-da, batareyasi kichikroq." },
            { who: "Dilnoza", en: "That's the downside, isn't it? You travel a lot, so the battery matters.", uz: "Bu kamchilik-ku, shunday emasmi? Sen ko'p safar qilasan, batareya muhim." },
            { who: "Ben", en: "True. On the other hand, I hate carrying heavy bags.", uz: "To'g'ri. Boshqa tomondan, og'ir sumkalarni ko'tarishni yomon ko'raman." },
            { who: "Dilnoza", en: "Despite its weight, the second one seems the better choice. All the same, it's your decision.", uz: "Og'irligiga qaramay, ikkinchisi yaxshiroq tanlov ko'rinadi. Baribir, qaror sizniki." },
            { who: "Ben", en: "I'll take the heavier one. Nevertheless, I'll buy a light bag!", uz: "Og'irrog'ini olaman. Shunga qaramay, yengil sumka sotib olaman!" },
          ],
        },
        { t: "check", ex: { k: "choice", q: "What is the downside of the cheaper laptop?", opts: ["It has a smaller battery", "It has a worse screen", "It is heavy", "It is expensive"], a: 0, why: "*Although it costs less, it has a smaller battery.*" } },
        { t: "check", ex: { k: "choice", q: "Which laptop does Ben decide to buy?", opts: ["The heavier one with the better screen", "The lighter, cheaper one", "Neither of them", "Both"], a: 0, why: "*I'll take the heavier one.*" } },
      ],
    },
  ],
  words: [
    { en: "nonetheless", uz: "shunga qaramay, baribir", ipa: "ˌnʌn.ðəˈles", pos: "adverb", ex: "The results were disappointing; nonetheless, we continued the project.", exUz: "Natijalar xafa qildi; shunga qaramay, loyihani davom ettirdik." },
    { en: "albeit", uz: "garchi … bo'lsa ham", ipa: "ɔːlˈbiː.ɪt", pos: "conjunction", ex: "It was a successful, albeit short, visit.", exUz: "Bu qisqa bo'lsa ham, muvaffaqiyatli tashrif edi." },
    { en: "tempting", uz: "jozibali, vasvasaga soladigan", ipa: "ˈtemp.tɪŋ", pos: "adjective", ex: "The offer was tempting, but I turned it down.", exUz: "Taklif jozibali edi, lekin rad etdim." },
    { en: "trade-off", uz: "almashinuv, bir narsani olish uchun boshqasidan voz kechish", ipa: "ˈtreɪd.ɒf", pos: "noun", ex: "There is always a trade-off between speed and quality.", exUz: "Tezlik va sifat o'rtasida doim almashinuv bor." },
    { en: "by contrast", uz: "aksincha, farqli o'laroq", ipa: "baɪ ˈkɒn.trɑːst", pos: "phrase", ex: "Prices rose in the north. By contrast, they fell in the south.", exUz: "Shimolda narxlar oshdi. Aksincha, janubda tushdi." },
    { en: "even so", uz: "shunday bo'lsa ham", ipa: "ˌiː.vən ˈsəʊ", pos: "phrase", ex: "The road was closed. Even so, we found a way through.", exUz: "Yo'l yopiq edi. Shunday bo'lsa ham, o'tish yo'lini topdik." },
    { en: "all the same", uz: "baribir, shunga qaramay", ipa: "ˌɔːl ðə ˈseɪm", pos: "phrase", ex: "I know it's risky. All the same, I want to try.", exUz: "Xavfli ekanini bilaman. Baribir, urinib ko'rmoqchiman." },
    { en: "in spite of", uz: "…ga qaramay", ipa: "ɪn ˈspaɪt ɒv", pos: "phrase", ex: "In spite of the delay, the event was a success.", exUz: "Kechikishga qaramay, tadbir muvaffaqiyatli o'tdi." },
    { en: "conversely", uz: "teskarisi, aksincha", ipa: "ˈkɒn.vɜːs.li", pos: "adverb", ex: "Rich countries often have ageing populations. Conversely, many poorer countries have young ones.", exUz: "Boy mamlakatlarda aholi ko'pincha qarib boradi. Aksincha, ko'p kambag'al mamlakatlarda yoshlar ko'p." },
    { en: "pitfall", uz: "yashirin xavf, tuzoq", ipa: "ˈpɪt.fɔːl", pos: "noun", ex: "One common pitfall of online shopping is hidden delivery costs.", exUz: "Onlayn xaridning keng tarqalgan yashirin xavfi — yetkazib berishning yashirin narxi." },
  ],
  practice: [
    { k: "choice", q: "___ the fact that he was tired, he finished the report.", opts: ["Despite", "Although", "However", "Whereas"], a: 0, why: "Keyin **the fact that + gap**: faqat **despite** (yoki *in spite of*)." },
    { k: "choice", q: "The service was slow. ___, the food was excellent.", opts: ["However", "Although", "Despite", "Even though"], a: 0, why: "Yangi gap boshida vergul bilan: **However,**." },
    { k: "listen", say: "In spite of the rain, we had a lovely day.", opts: ["In spite of the rain, we had a lovely day.", "Despite of the rain, we had a lovely day.", "In spite the rain, we had a lovely day.", "In spite of rain we had lovely day."], a: 0, why: "**in spite of** + ot." },
    { k: "fill", q: "Sam is very sociable, ___ his brother is quite shy.", a: ["whereas", "while"], uz: "Sam juda ochiq, ukasi esa ancha uyatchan.", why: "Ikki farqni bog'lash: **whereas / while**." },
    { k: "fill", q: "In spite ___ the delay, the concert started on time.", a: ["of"], uz: "Kechikishga qaramay, konsert vaqtida boshlandi.", why: "**in spite of** + ot." },
    { k: "fill", q: "___ being very busy, she always finds time to read.", a: ["Despite", "In spite of"], uz: "Juda band bo'lishiga qaramay, u o'qishga doim vaqt topadi.", why: "Keyin **-ing**: **despite / in spite of**." },
    { k: "order", uz: "Kech bo'lsa-da, biz davom etishga qaror qildik.", words: ["Although", "it", "was", "late,", "we", "decided", "to", "go", "on."], extra: ["but", "despite"], alt: [["We", "decided", "to", "go", "on", "although", "it", "was", "late."]], why: "**Although + gap, bosh gap** (but kerak emas)." },
    { k: "order", uz: "Og'irligiga qaramay, bu sumka juda qulay.", words: ["Despite", "its", "weight,", "this", "bag", "is", "very", "comfortable."], extra: ["although", "of"], why: "**Despite + ot, gap**." },
    { k: "translate", uz: "Yomg'irga qaramay, biz pikniksga bordik.", a: ["Despite the rain, we went on a picnic.", "In spite of the rain, we went on a picnic.", "Despite the rain, we had a picnic.", "In spite of the rain, we had a picnic.", "Despite the rain, we went for a picnic."], why: "**Despite / In spite of** + ot (the rain)." },
    { k: "translate", uz: "Garchi u charchagan bo'lsa-da, ishlashda davom etdi.", a: ["Although he was tired, he kept working.", "Although he was tired, he continued working.", "Although he was tired, he carried on working.", "Even though he was tired, he kept working.", "Though he was tired, he kept working."], why: "**Although + gap**, **but siz**." },
    { k: "fix", wrong: "Although he is rich, but he is not happy.", a: ["Although he is rich, he is not happy.", "He is rich, but he is not happy."], hint: "ikkita bog'lovchi", why: "**Although** va **but** birga ishlatilmaydi." },
    { k: "fix", wrong: "The film was long, however I enjoyed it.", a: ["The film was long, but I enjoyed it.", "Although the film was long, I enjoyed it."], hint: "vergul bilan bog'lanmaydi", why: "**however** gapni vergul bilan bog'lamaydi: *but* yoki *although* ishlating." },
    { k: "match", pairs: [["pitfall", "yashirin xavf"], ["tempting", "jozibali"], ["trade-off", "almashinuv"], ["nonetheless", "shunga qaramay"], ["conversely", "aksincha"]] },
    { k: "tf", q: "**Despite he was late, he got the job.** — bu gap to'g'ri.", a: false, why: "**Despite** dan keyin gap emas: *Despite being late* yoki *Despite the fact that he was late*." },
    { k: "dictation", say: "The plan is expensive; nevertheless, it is the best option.", uz: "Reja qimmat; shunga qaramay, eng yaxshi variant.", why: "**nevertheless** — nuqtali vergul + vergul." },
    { k: "speak", say: "On the one hand, the job pays well. On the other hand, it is very stressful.", uz: "Bir tomondan ish yaxshi to'laydi. Boshqa tomondan, juda stressli." },
  ],
  quiz: [
    { k: "choice", q: "___ it was cold, we went swimming.", opts: ["Even though", "Despite", "In spite of", "However"], a: 0, why: "Keyin to'liq gap (*it was cold*): **even though**." },
    { k: "choice", q: "She accepted the job ___ the low salary.", opts: ["despite", "although", "whereas", "nonetheless"], a: 0, why: "Keyin ot (*the low salary*): **despite**." },
    { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["Despite the traffic, we were on time.", "Despite of the traffic, we were on time.", "Despite the traffic was heavy, we were on time.", "In spite the traffic, we were on time."], a: 0, why: "**Despite + ot** (of siz, gap emas)." },
    { k: "choice", q: "Rents are high in the centre. ___, they are low in the suburbs.", opts: ["In contrast", "Despite", "Whereas it", "Albeit"], a: 0, why: "Yangi gap boshida: **In contrast,**." },
    { k: "fill", q: "It was a good, ___ expensive, solution.", a: ["albeit"], uz: "Qimmat bo'lsa ham, yaxshi yechim edi.", why: "**albeit** + sifat." },
    { k: "fill", q: "___ some people love cities, others prefer villages.", a: ["While", "Whereas"], uz: "Ba'zilar shaharni yaxshi ko'rsa, boshqalar qishloqni afzal ko'radi.", why: "Gap boshida farq: **While / Whereas**." },
    { k: "fix", wrong: "Despite of the delay, the train arrived early.", a: ["Despite the delay, the train arrived early.", "In spite of the delay, the train arrived early."], hint: "of ortiqcha", why: "**despite** + of emas." },
    { k: "order", uz: "Qimmat bo'lsa-da, u yaxshi variant.", words: ["It", "is", "expensive;", "nevertheless,", "it", "is", "a", "good", "option."], extra: ["although", "despite"], alt: [["It", "is", "expensive.", "Nevertheless,", "it", "is", "a", "good", "option."]], why: "**nevertheless** — yangi gap boshida, vergul bilan." },
    { k: "translate", uz: "Kamchiligi shundaki, uy shahardan uzoq.", a: ["The downside is that the house is far from the city.", "The downside is that the house is far from the town.", "The downside is that the house is a long way from the city."], why: "**The downside is that …**" },
    { k: "tf", q: "**Although** va **however** bitta gapda birga ishlatilishi mumkin: *Although it was late, however we left.*", a: false, why: "Bitta ma'no uchun bitta bog'lovchi: *Although it was late, we left.*" },
  ],
  summary: [
    "**Although / even though / though + gap**; **despite / in spite of + ot, -ing yoki the fact that + gap**. ~~Despite of~~ va ~~Despite he was~~ xato.",
    "**However, nevertheless, nonetheless, even so, all the same** — yangi gap boshida, vergul bilan (yoki **;** dan keyin). Vergul bilan ikki gapni bog'lash (~~…, however …~~) xato.",
    "**Whereas / while** — ikki farqni bir gapda bog'laydi; **in contrast / on the other hand** yangi gapni boshlaydi.",
    "Bitta gapda ikkita bog'lovchi bo'lmaydi: ~~Although … but~~, ~~Although … however~~. **Albeit** — rasmiy, qisqa: *a good, albeit expensive, option*.",
  ],
  homework: "Bitta qaror haqida (masalan, ish yoki o'qish tanlash) 8 ta gap yozing: **although, even though, despite, in spite of, however, whereas, on the other hand, albeit** bittadan ishlatib. Har bir gapda tinish belgisi va bog'lovchidan keyingi tuzilma (gap yoki ot) to'g'ri ekanini tekshiring.",
};

export default lesson;
