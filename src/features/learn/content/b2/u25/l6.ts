import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u25-l6",
  title: "Speculating and hedging",
  titleUz: "Taxmin qilish va ehtiyotkor gapirish: perhaps, presumably, it seems that, tend to",
  goal: "Fikringizni **ehtiyotkor va ishonchli** bildirasiz: **presumably, apparently, seemingly, supposedly** kabi ravishlar, **it seems that, tend to, is likely to, there's a chance** kabi qoliplar va **to some extent, by and large** kabi yumshatuvchi iboralar. IELTS Speaking Part 3 va ish suhbatida **mutlaq gaplar** (*All people…*, *Everyone…*) o'rniga **aniq, adolatli** javob berasiz va *tend to being*, *It is seemed that* kabi xatolardan qochasiz.",
  slides: [
    {
      title: "Nega hamma narsani «aniq» aytmaslik kerak",
      blocks: [
        { t: "p", md: "IELTS Speaking Part 3 savoli: *«Do young people read less than they used to?»* Zaif javob: *«Yes. All young people only use phones.»* Bu gap **mutlaq** va tekshirib bo'lmaydi. Kuchli javob: *«To some extent, yes. Young people tend to read less, and it's likely that screens are the main reason.»* Bunday ehtiyotkor til — **hedging** — ikki narsani ko'rsatadi: siz **bilimingizning chegarasini** bilasiz va **fikrni adolatli** bildirasiz." },
        {
          t: "table", head: ["Mutlaq (zaif)", "Ehtiyotkor (kuchli)"], speak: [1],
          rows: [
            ["Everyone uses social media.", "Most people tend to use social media."],
            ["The economy will improve.", "The economy is likely to improve."],
            ["It is the best solution.", "It seems to be the best solution."],
            ["Nobody wants to work at night.", "Few people would choose to work at night."],
          ],
        },
        { t: "tip", tone: "info", md: "Hedging — **ikkilanish** emas. Siz fikringizni yo'qotmaysiz: *Apparently…*, *It appears that…* kabi so'zlar sizga **dalil asosida** gapirishga yordam beradi. Aniq ma'lumot bor bo'lsa, ishonch bilan ayting (*The report shows…*)." },
        { t: "check", ex: { k: "choice", q: "Qaysi javob ehtiyotkor va adolatli?", opts: ["Young people tend to read less than before.", "All young people never read books.", "Nobody reads books anymore.", "Young people will read less."], a: 0, why: "**tend to** — umumiy tendentsiya, istisnolarga yo'l qoldiradi. Boshqalar mutlaq yoki asossiz." } },
      ],
    },
    {
      title: "Taxmin ravishlari: presumably, apparently, seemingly, supposedly, undoubtedly",
      blocks: [
        { t: "p", md: "Bu so'zlar gap boshida yoki fe'ldan oldin turadi va **ma'lumot manbai** yoki **ishonch darajasini** ko'rsatadi. Ularni **farqlash** muhim:" },
        {
          t: "table", head: ["Ravish", "Ma'nosi", "Misol"], speak: [2],
          rows: [
            ["undoubtedly", "shubhasiz (ishonch yuqori)", "This is undoubtedly the best option."],
            ["presumably", "taxmin qilamanki (mantiqan shunday)", "Presumably, he has already left."],
            ["apparently", "eshitishimcha / ko'rinishidan", "Apparently, the shop is closing."],
            ["seemingly", "ko'rinishidan (lekin aslida boshqacha bo'lishi mumkin)", "A seemingly simple task turned out to be hard."],
            ["supposedly", "ular aytishicha (ishonmaymiz)", "He is supposedly an expert, but I doubt it."],
            ["conceivably", "aqlga sig'adi, bo'lishi mumkin", "Conceivably, prices could fall next year."],
          ],
        },
        { t: "p", md: "**Presumably** — siz **o'zingiz mantiqan** xulosa qilasiz (*Presumably, she is at work: it's Tuesday.*). **Apparently** — ma'lumot **boshqadan** keldi yoki ko'rinish bor (*Apparently, the train is late.*). **Supposedly** esa gapiruvchi shu ma'lumotga **ishonmayotganini** sezdiradi." },
        { t: "tip", tone: "warn", md: "**Apparently** — «*aniq*» emas. «Hamma ko'rib turibdi» ma'nosida *obviously* ishlatiladi. *Apparently he is ill* — «eshitdim, u kasal»." },
        { t: "check", ex: { k: "choice", q: "A friend told you the cinema will close next month. You say: ___, the cinema is closing next month.", opts: ["Apparently", "Undoubtedly", "Conceivably", "Obviously"], a: 0, why: "Ma'lumot boshqadan keldi: **apparently**." } },
        { t: "check", ex: { k: "choice", q: "Which adverb shows that the speaker doubts the claim?", opts: ["supposedly", "undoubtedly", "presumably", "conceivably"], a: 0, why: "**supposedly** — «aytishicha», gapiruvchi ishonmaydi." } },
      ],
    },
    {
      title: "It seems that, tend to, is likely to, there's a chance",
      blocks: [
        { t: "p", md: "Ravishlardan tashqari, taxmin va umumlashtirish uchun **qoliplar** bor:" },
        {
          t: "table", head: ["Qolip", "Misol", "Eslatma"], speak: [1],
          rows: [
            ["It seems / appears that + gap", "It seems that prices are rising.", "that dan keyin to'liq gap"],
            ["seem / appear to + V1", "Prices seem to be rising.", "ega + seem + to"],
            ["tend to + V1", "Students tend to study more before exams.", "tendentsiya, odat"],
            ["is likely / unlikely to + V1", "Inflation is likely to fall.", "ehtimol / ehtimol emas"],
            ["There's a (good) chance that…", "There's a good chance that it will rain.", "ehtimol bor"],
            ["may / could well + V1", "She may well be right.", "juda ehtimol"],
          ],
        },
        { t: "p", md: "**Tend to** — **odat yoki tendentsiya**: *Teenagers tend to sleep late.* Bu har bir yosh uchun emas, **ko'pchilik** uchun to'g'ri. **Likely** — **kelajak ehtimoli**: *The match is likely to be cancelled.* Ikkalasidan keyin **to + V1**." },
        { t: "examples", items: [
          { en: "It appears that the company is losing customers.", uz: "Kompaniya mijozlarini yo'qotayotganga o'xshaydi." },
          { en: "Younger drivers are more likely to have accidents.", uz: "Yosh haydovchilar avariyaga tushishga moyilroq." },
          { en: "There's a small chance that the flight will be delayed.", uz: "Parvoz kechikish ehtimoli kichik." },
        ] },
        { t: "check", ex: { k: "fill", q: "Many people ___ to spend more when they pay by card. (odat)", a: ["tend"], hint: "tendentsiya", why: "**tend to + V1**: umumiy tendentsiya." } },
        { t: "check", ex: { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["It seems that the project is behind schedule.", "It is seemed that the project is behind schedule.", "It seems the project to be behind schedule.", "It seems that the project to be behind schedule."], a: 0, why: "**It seems that + to'liq gap**; *seem* majhul shaklda ishlatilmaydi." } },
      ],
    },
    {
      title: "Fikrni yumshatish: to some extent, by and large, up to a point",
      blocks: [
        { t: "p", md: "Ba'zan siz fikringizga **qisman** qo'shilasiz. Bunday vaqtda quyidagi iboralar yordam beradi:" },
        {
          t: "table", head: ["Ibora", "Ma'nosi", "Misol"], speak: [2],
          rows: [
            ["to some extent / up to a point", "qisman, ma'lum darajada", "To some extent, I agree with you."],
            ["by and large", "umuman olganda", "By and large, the course was successful."],
            ["more often than not", "ko'pincha", "More often than not, delays are caused by weather."],
            ["in all probability", "katta ehtimol bilan", "In all probability, the exam will be easier this year."],
            ["as far as I can tell", "men tushunganimcha", "As far as I can tell, the plan is realistic."],
            ["tentative", "sinov tariqasidagi, aniq emas", "We have a tentative date for the meeting."],
          ],
        },
        { t: "tip", tone: "good", md: "**Ikkalasi bir gapda:** *By and large, people tend to trust local news, but it seems that younger readers are more sceptical.* Bu — B2 darajadagi, tabiiy va **aniq** javob. Uzun so'zlarni **ko'p** ishlatmang: gapga **bittadan ikkitagacha** hedging vositasi yetarli." },
        { t: "check", ex: { k: "choice", q: "You mostly agree with an opinion, but not completely. Which phrase fits?", opts: ["To some extent, I agree.", "I totally disagree.", "Without any doubt, I agree.", "Everybody agrees."], a: 0, why: "Qisman rozilik: **to some extent / up to a point**." } },
        { t: "check", ex: { k: "tf", q: "*In all probability* iborasi gapiruvchi ishonchi juda past ekanini bildiradi.", a: false, why: "**in all probability** — katta ehtimol bilan (ishonch yuqori, lekin 100% emas)." } },
      ],
    },
    {
      title: "Tipik xatolar (o'zbek tilidan interferensiya)",
      blocks: [
        { t: "p", md: "O'zbek tilida «odatda», «ko'pincha», «shekilli» kabi so'zlar erkin ishlatiladi va fe'l shaklini o'zgartirmaydi. Inglizchada esa qolipdan keyin **to + V1** yoki **that + gap** keladi va **seem** majhul shaklda ishlatilmaydi." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["He tends to arrive late.", "It seems that she is right.", "Inflation is likely to rise."] },
          bad: { title: "Xato", items: ["He tends arriving late.", "It is seemed that she is right.", "Inflation is likely to rises."] },
        },
        { t: "tip", tone: "warn", md: "**1.** *tend* + **to + V1** (*to arrive*), *-ing* emas. **2.** *seem / appear* hech qachon *is seemed* bo'lmaydi: **it seems**. **3.** *likely to* dan keyin **V1** (*to rise*), V-s emas. **4.** Mutlaq so'zlar (*all, everyone, nobody, always, never*) o'rniga **most, many, tend to, often, rarely**." },
        { t: "check", ex: { k: "fix", wrong: "He tends arriving late for meetings.", a: ["He tends to arrive late for meetings."], hint: "tend + to + V1", why: "**tend to + V1**." } },
        { t: "check", ex: { k: "fix", wrong: "It is seemed that the shop is closed.", a: ["It seems that the shop is closed."], hint: "seem majhul emas", why: "**It seems that + gap**." } },
        { t: "check", ex: { k: "fix", wrong: "Inflation is likely to rises next year.", a: ["Inflation is likely to rise next year."], hint: "likely to + V1", why: "**is likely to + V1**." } },
      ],
    },
    {
      title: "O'qing: Ish haqida javob",
      blocks: [
        {
          t: "text", title: "Working from home: a speaking answer", voice: "george",
          en: "The examiner asked me whether working from home is better than working in an office. I answered like this. To some extent, I think it is. People tend to save time and money when they don't commute, and it seems that many employees feel more relaxed at home. Apparently, some companies have even reported higher productivity, although I'm not sure how reliable those figures are. On the other hand, working alone is likely to feel lonely, and young employees in particular may miss the chance to learn from colleagues. Presumably, the best solution is a mix of both. By and large, I would say that flexible work suits most people, but there's a good chance that managers will prefer to see their teams face to face. As far as I can tell, the future will bring a compromise, though I can't say for certain.",
          uz: "Imtihon oluvchi mendan uydan ishlash ofisda ishlashdan yaxshimi, deb so'radi. Men shunday javob berdim. Ma'lum darajada, menimcha, ha. Odamlar qatnamasa, vaqt va pul tejashga moyil bo'ladi va ko'p xodimlar uyda o'zini bemalol his qilishga o'xshaydi. Eshitishimcha, ba'zi kompaniyalar hatto samaradorlik oshganini xabar qilgan, lekin bu raqamlar qanchalik ishonchli ekaniga ishonchim komil emas. Boshqa tomondan, yolg'iz ishlash yolg'izlik hissi uyg'otishi mumkin va ayniqsa yosh xodimlar hamkasblardan o'rganish imkoniyatini yo'qotishi mumkin. Taxmin qilamanki, eng yaxshi yechim ikkalasining aralashmasi. Umuman olganda, moslashuvchan ish ko'pchilikka mos keladi, lekin rahbarlar jamoani yuzma-yuz ko'rishni afzal ko'rish ehtimoli bor. Men tushunganimcha, kelajak murosa olib keladi, ammo aniq ayta olmayman.",
        },
        { t: "check", ex: { k: "tf", q: "The speaker says that every company has higher productivity at home.", a: false, why: "U faqat *some companies* haqida *apparently* bilan gapiradi va raqamlarga ishonmasligini bildiradi." } },
        { t: "check", ex: { k: "choice", q: "What does the speaker think is the best solution?", opts: ["A mix of home and office work", "Working only from home", "Working only in an office", "Working at night"], a: 0, why: "Matnda: *Presumably, the best solution is a mix of both.*" } },
      ],
    },
    {
      title: "Dialog: Imtihon mashqi",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Nina", en: "Chris, let's practise Part 3. Do you think people read fewer books these days?", uz: "Chris, Part 3 ni mashq qilamiz. Sizningcha, odamlar hozir kamroq kitob o'qiydimi?" },
            { who: "Chris", en: "Well, to some extent. People tend to read shorter texts now, and apparently many young people prefer audiobooks.", uz: "Ma'lum darajada, ha. Odamlar hozir qisqaroq matnlarni o'qishga moyil va eshitishimcha, ko'p yoshlar audiokitoblarni afzal ko'radi." },
            { who: "Nina", en: "Good. Can you give a reason?", uz: "Yaxshi. Sabab ayta olasizmi?" },
            { who: "Chris", en: "Presumably, it's because of smartphones. It seems that people check their phones more often than they open a book.", uz: "Taxmin qilamanki, smartfonlar sababli. Odamlar kitob ochgandan ko'ra telefonini tez-tez tekshirishga o'xshaydi." },
            { who: "Nina", en: "And will libraries disappear in the future?", uz: "Kelajakda kutubxonalar yo'q bo'lib ketadimi?" },
            { who: "Chris", en: "I doubt it. By and large, libraries are changing, and they are likely to become community centres. More often than not, people still come for a quiet place to study.", uz: "Shubhalanaman. Umuman olganda, kutubxonalar o'zgaryapti va jamoat markazlariga aylanishi ehtimoli bor. Ko'pincha odamlar hali ham jim joyda o'qish uchun kelishadi." },
            { who: "Nina", en: "That was a strong answer. You didn't sound too certain, but you gave reasons.", uz: "Bu kuchli javob edi. Siz juda qat'iy gapirmadingiz, lekin sabablar keltirdingiz." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "What does Chris think will happen to libraries?", opts: ["They are likely to become community centres.", "They will disappear soon.", "They will become expensive.", "They will only have audiobooks."], a: 0, why: "Dialogda: *they are likely to become community centres.*" } },
      ],
    },
  ],
  words: [
    { en: "seemingly", uz: "ko'rinishidan, go'yo", ipa: "ˈsiː.mɪŋ.li", pos: "adv", ex: "The seemingly easy task took us all day.", exUz: "Ko'rinishidan oson vazifa butun kunimizni oldi." },
    { en: "supposedly", uz: "ular aytishicha (ishonmay)", ipa: "səˈpəʊ.zɪd.li", pos: "adv", ex: "The restaurant is supposedly the best in town, but I was disappointed.", exUz: "Restoran, aytishlaricha, shaharda eng yaxshisi, lekin men xafa bo'ldim." },
    { en: "undoubtedly", uz: "shubhasiz", ipa: "ʌnˈdaʊ.tɪd.li", pos: "adv", ex: "She is undoubtedly the strongest candidate.", exUz: "U shubhasiz eng kuchli nomzod." },
    { en: "conceivably", uz: "aqlga sig'adigan darajada, ehtimol", ipa: "kənˈsiː.və.bli", pos: "adv", ex: "Conceivably, the project could be finished by May.", exUz: "Loyiha mayga borib tugashi aqlga sig'adi." },
    { en: "tentative", uz: "dastlabki, aniq bo'lmagan", ipa: "ˈten.tə.tɪv", pos: "adj", ex: "We have only a tentative agreement for now.", exUz: "Hozircha bizda faqat dastlabki kelishuv bor." },
    { en: "by and large", uz: "umuman olganda", ipa: "baɪ ənd lɑːdʒ", pos: "phrase", ex: "By and large, the new system works well.", exUz: "Umuman olganda, yangi tizim yaxshi ishlaydi." },
    { en: "in all probability", uz: "katta ehtimol bilan", ipa: "ɪn ɔːl ˌprɒb.əˈbɪl.ə.ti", pos: "phrase", ex: "In all probability, the train will arrive on time.", exUz: "Katta ehtimol bilan poyezd o'z vaqtida keladi." },
    { en: "more often than not", uz: "ko'pincha", ipa: "mɔːr ˈɒf.ən ðən nɒt", pos: "phrase", ex: "More often than not, he forgets his keys.", exUz: "Ko'pincha u kalitlarini unutadi." },
    { en: "up to a point", uz: "ma'lum darajaga qadar", ipa: "ʌp tə ə pɔɪnt", pos: "phrase", ex: "I agree with you up to a point.", exUz: "Men sizga ma'lum darajada qo'shilaman." },
    { en: "as far as I can tell", uz: "men tushunganimcha", ipa: "æz fɑːr æz aɪ kæn tel", pos: "phrase", ex: "As far as I can tell, everything is in order.", exUz: "Men tushunganimcha, hammasi joyida." },
  ],
  practice: [
    { k: "choice", q: "Teenagers ___ to sleep late at weekends.", opts: ["tend", "tends", "are tend", "tending"], a: 0, why: "**tend to + V1**; ko'plik ega — *tend*." },
    { k: "choice", q: "Which sentence is the most cautious?", opts: ["It seems that prices will rise.", "Prices will rise.", "Prices always rise.", "Everybody knows prices will rise."], a: 0, why: "**It seems that** ehtiyotkor; qolganlari mutlaq." },
    { k: "listen", say: "Apparently, the shop is closing next month.", opts: ["Apparently, the shop is closing next month.", "Undoubtedly, the shop is closing next month.", "Presumably, the shop is closing next month.", "Supposedly, the shop is closing next month."], a: 0, why: "Audioda: **apparently**." },
    { k: "fill", q: "It ___ that the meeting has been moved to Friday. (appears yoki seems)", a: ["seems", "appears"], uz: "Yig'ilish juma kuniga ko'chirilganga o'xshaydi.", hint: "It ___ that", why: "**It seems / appears that + gap**." },
    { k: "fill", q: "Prices are ___ to fall next year. (ehtimol)", a: ["likely"], uz: "Narxlar kelasi yili tushishi ehtimoli bor.", hint: "likely", why: "**is likely to + V1**." },
    { k: "fill", q: "More often ___ not, he is late for work.", a: ["than"], uz: "Ko'pincha u ishga kechikadi.", hint: "more often ... not", why: "Qat'iy ibora: **more often than not**." },
    { k: "order", uz: "Taxmin qilamanki, u allaqachon ketgan.", words: ["Presumably,", "he", "has", "already", "left."], extra: ["seemingly", "leaving"], alt: [["He", "has", "presumably", "already", "left."]], why: "**Presumably** — mantiqiy xulosa." },
    { k: "order", uz: "Bu yaxshi yechimga o'xshaydi.", words: ["It", "seems", "to", "be", "a", "good", "solution."], extra: ["seemed", "being"], why: "**seem to be**." },
    { k: "translate", uz: "Ma'lum darajada, men sizga qo'shilaman.", a: ["To some extent, I agree with you.", "Up to a point, I agree with you.", "To some extent I agree with you.", "Up to a point I agree with you.", "I agree with you up to a point.", "I agree with you to some extent."], why: "**to some extent / up to a point**." },
    { k: "translate", uz: "Yosh haydovchilar tez haydashga moyil.", a: ["Young drivers tend to drive fast.", "Young drivers tend to drive too fast.", "Young drivers tend to speed.", "Young drivers are likely to drive fast."], why: "**tend to + V1** yoki **are likely to + V1**." },
    { k: "fix", wrong: "He tends being late for work.", a: ["He tends to be late for work."], hint: "tend + to + V1", why: "**tend to + V1**." },
    { k: "fix", wrong: "It is seemed that the shop is closed.", a: ["It seems that the shop is closed.", "It appears that the shop is closed."], hint: "seem majhul emas", why: "**It seems that + gap**." },
    { k: "match", pairs: [["undoubtedly", "shubhasiz"], ["supposedly", "ular aytishicha"], ["tentative", "dastlabki"], ["by and large", "umuman olganda"], ["up to a point", "ma'lum darajada"]] },
    { k: "tf", q: "*Supposedly* so'zi gapiruvchi ma'lumotga ishonayotganini bildiradi.", a: false, why: "**supposedly** — «ular aytishicha», ko'pincha gapiruvchi ishonmaydi." },
    { k: "choice", q: "Which sentence is NOT a good hedge?", opts: ["Everyone hates exams.", "Many students tend to dislike exams.", "It seems that exams cause stress.", "Exams are likely to cause stress."], a: 0, why: "**Everyone** — mutlaq gap. Boshqalari ehtiyotkor." },
    { k: "dictation", say: "As far as I can tell, the plan is realistic.", uz: "Men tushunganimcha, reja real.", why: "**as far as I can tell** — ehtiyotkor fikr." },
    { k: "speak", say: "By and large, people tend to trust local news.", uz: "Umuman olganda, odamlar mahalliy yangiliklarga ishonishga moyil." },
  ],
  quiz: [
    { k: "choice", q: "He is ___ the best player in the team; nobody doubts it.", opts: ["undoubtedly", "supposedly", "seemingly", "conceivably"], a: 0, why: "Shubhasiz: **undoubtedly**." },
    { k: "choice", q: "He is ___ an expert, or so people claim, but he made a basic mistake today.", opts: ["supposedly", "undoubtedly", "tentatively", "conceivably"], a: 0, why: "Ishonmaslik ohangi: **supposedly**." },
    { k: "choice", q: "She is ___ to win the competition; she has trained for years.", opts: ["likely", "tend", "seem", "probably"], a: 0, why: "**is likely to + V1**." },
    { k: "fill", q: "It ___ that nobody has seen the report. (ko'rinishidan)", a: ["seems", "appears"], uz: "Hisobotni hech kim ko'rmaganga o'xshaydi.", hint: "It ___ that", why: "**It seems / appears that + gap**." },
    { k: "fill", q: "In all ___, the exam will be held in June.", a: ["probability", "likelihood"], uz: "Katta ehtimol bilan imtihon iyunda o'tkaziladi.", hint: "in all ...", why: "**in all probability / likelihood**." },
    { k: "order", uz: "Umuman olganda, kurs yaxshi o'tdi.", words: ["By", "and", "large,", "the", "course", "went", "well."], extra: ["up", "extent"], why: "**by and large** — umuman olganda." },
    { k: "translate", uz: "Ko'pincha u ishga kech keladi.", a: ["More often than not, he arrives late for work.", "More often than not, he is late for work.", "More often than not, he comes to work late.", "More often than not he arrives late for work.", "More often than not he is late for work."], why: "**more often than not**." },
    { k: "fix", wrong: "Inflation is likely to rises next year.", a: ["Inflation is likely to rise next year."], hint: "likely to + V1", why: "**is likely to + V1**." },
    { k: "tf", q: "*Tend to* qolipidan keyin V-ing keladi: *He tends arriving late.*", a: false, why: "**tend to + V1**: *He tends to arrive late.*" },
    { k: "listen", say: "Presumably, he has already left the office.", opts: ["Presumably, he has already left the office.", "Supposedly, he has already left the office.", "Undoubtedly, he has already left the office.", "Seemingly, he has already left the office."], a: 0, why: "Audioda: **presumably**." },
  ],
  summary: [
    "**Hedging** — mutlaq gaplar o'rniga ehtiyotkor, adolatli til: *tend to, it seems that, is likely to, to some extent.*",
    "**Ravishlar:** *undoubtedly* (shubhasiz), *presumably* (mantiqiy taxmin), *apparently* (eshitishimcha), *seemingly* (ko'rinishidan), *supposedly* (aytishicha, ishonmay).",
    "**Qoliplar:** *It seems / appears that + gap*; *seem to + V1*; *tend to + V1*; *is likely to + V1*; *There's a chance that…*",
    "**Yumshatuvchilar:** *to some extent, up to a point, by and large, more often than not, in all probability, as far as I can tell.*",
    "Xatolar: ~~tends arriving~~ → **tends to arrive**; ~~It is seemed~~ → **It seems**; ~~likely to rises~~ → **likely to rise**.",
  ],
  homework: "IELTS Part 3 uslubidagi 3 ta savolga (*Do people spend too much time online? Is it better to live in a city or in a village? Will cash disappear?*) 40-60 soniya ovoz chiqarib javob bering va yozib oling. Har javobda kamida **bitta ravish** (*presumably, apparently…*) va **ikkita qolip** (*tend to, is likely to, to some extent…*) ishlating. Mutlaq so'zlar (*all, nobody, always*) uchrasa, ularni **most, few, tend to** bilan almashtiring.",
};

export default lesson;
