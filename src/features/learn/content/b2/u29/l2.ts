import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u29-l2",
  title: "Quantifiers and agreement",
  titleUz: "Miqdor so'zlari: a great deal of, a majority of, hardly any, the number of / a number of",
  goal: "Miqdor so'zlarini sanaladigan va sanalmaydigan otlar bilan to'g'ri tanlaysiz (**a great deal of, plenty of, a handful of, hardly any, few / a few**), **the number of / a number of** farqini bilasiz, **the majority of people are** va **each of the students has** kabi gaplarda fe'lni to'g'ri moslashtirasiz va foiz hamda kasrlarni ishlatasiz.",
  slides: [
    {
      title: "Nima uchun kerak? Miqdorni aniq aytish",
      blocks: [
        { t: "p", md: "Hisobot, maqola va suhbatda **qancha** ekanini aytish kerak: *A great deal of energy is wasted. A number of companies have changed.* B2 da faqat *many / much* yetarli emas: so'z **ot turiga** (sanaladigan yoki sanalmaydigan) va **uslubga** (rasmiy yoki oddiy) mos bo'lishi kerak." },
        {
          t: "table", head: ["Sanaladigan ot (ko'plik)", "Sanalmaydigan ot", "Ikkalasi bilan"], speak: [0, 1, 2],
          rows: [
            ["many, a large number of, several", "much, a great deal of, a large amount of", "a lot of, lots of, plenty of"],
            ["a few, few, fewer, a handful of", "a little, little, less", "some, any, no, hardly any"],
            ["a number of, a majority of, a minority of", "a proportion of (ikkalasi ham)", "most, all, the rest of"],
          ],
        },
        { t: "tip", tone: "info", md: "**Many / much** asosan **inkor va savol** gaplarda tabiiy: *We don't have much time. Are there many shops?* Darakda rasmiy bo'lmasa, **a lot of / plenty of** ko'proq ishlatiladi: *We have plenty of time.* Rasmiy yozuvda **a great deal of** (sanalmaydigan) va **a large number of** (sanaladigan) yaxshi." },
        { t: "check", ex: { k: "choice", q: "Qaysi ibora **sanalmaydigan** ot bilan ishlatiladi?", opts: ["a great deal of", "a large number of", "several", "a handful of"], a: 0, why: "**a great deal of** + sanalmaydigan ot (*a great deal of money*). Qolganlari sanaladigan ko'plik bilan." } },
        { t: "check", ex: { k: "fill", q: "There is plenty ___ clean water in this region.", a: ["of"], why: "**plenty of** + ot: *plenty of water*." } },
      ],
    },
    {
      title: "Few / a few, little / a little, hardly any",
      blocks: [
        { t: "p", md: "**A few / a little** — «bir oz, yetarli» (ijobiy). **Few / little** — «deyarli yo'q, yetishmaydi» (salbiy, rasmiyroq). Ma'no farqi katta:" },
        {
          t: "table", head: ["Ibora", "Ma'no", "Misol"], speak: [2],
          rows: [
            ["a few + sanaladigan", "bir nechta (yetarli)", "I have a few ideas for the project."],
            ["few + sanaladigan", "juda kam (yetarli emas)", "Few people visit the village in winter."],
            ["a little + sanalmaydigan", "bir oz (yetarli)", "There is a little milk left."],
            ["little + sanalmaydigan", "juda oz (yetarli emas)", "There is little hope of rain this week."],
            ["hardly any + ikkalasi", "deyarli yo'q (kundalik tilda *few/little* o'rniga)", "There is hardly any traffic at night."],
            ["a handful of + sanaladigan", "bir hovuch, juda oz sondagi", "Only a handful of students came."],
          ],
        },
        {
          t: "examples", items: [
            { en: "Few young people read printed newspapers now.", uz: "Hozir yosh odamlarning kami bosma gazeta o'qiydi." },
            { en: "We have a few minutes before the lecture starts.", uz: "Ma'ruza boshlanishigacha bir necha daqiqamiz bor." },
            { en: "There is hardly any snow in the mountains this year.", uz: "Bu yil tog'larda deyarli qor yo'q." },
          ],
        },
        { t: "tip", tone: "warn", md: "**Hardly any** o'zi inkor ma'noda, shuning uchun uni **not** bilan ishlatmang: ~~There isn't hardly any water.~~ → **There is hardly any water.**" },
        { t: "check", ex: { k: "choice", q: "The shop was almost empty: there were ___ customers.", opts: ["hardly any", "a little", "much", "a great deal of"], a: 0, why: "*Almost empty* — deyarli yo'q: **hardly any customers**. *A little / much* sanalmaydigan ot bilan." } },
        { t: "check", ex: { k: "choice", q: "Which sentence is positive in meaning (there is enough)?", opts: ["We have a little time, so let's start.", "We have little time, so we must hurry.", "We have hardly any time left.", "We have no time at all."], a: 0, why: "**A little** — yetarli, ijobiy. **Little / hardly any / no** — yetishmaydi." } },
      ],
    },
    {
      title: "The number of / a number of va fe'l moslashuvi",
      blocks: [
        { t: "p", md: "Bu ikki ibora shakli o'xshash, lekin **fe'l** turlicha bo'ladi. Bu B2 imtihonlarida eng ko'p uchraydigan nozik joy." },
        {
          t: "table", head: ["Ibora", "Ma'no", "Fe'l", "Misol"], speak: [3],
          rows: [
            ["**the number of** + ko'plik", "…ning soni", "birlik (*is / has*)", "The number of cars is growing."],
            ["**a number of** + ko'plik", "bir necha, bir qancha", "ko'plik (*are / have*)", "A number of cars are parked outside."],
            ["**the majority of** + ko'plik", "ko'pchilik", "ko'plik", "The majority of people are happy."],
            ["**each of / every one of** + ko'plik", "ularning har biri", "birlik", "Each of the students has a laptop."],
            ["**none of** + ko'plik", "hech biri", "birlik (rasmiy) yoki ko'plik (oddiy)", "None of the rooms is / are free."],
          ],
        },
        { t: "p", md: "Qoida oddiy: **the number** — gapning egasi *number* (birlik). **A number of** — «bir necha» ma'nosida *many* ga o'xshaydi, shuning uchun ko'plik fe'l." },
        { t: "compare",
          good: { title: "To'g'ri", items: ["The number of visitors has fallen.", "A number of visitors have complained.", "Each of the tickets costs ten pounds.", "The majority of residents support the plan."] },
          bad: { title: "Xato", items: ["The number of visitors have fallen.", "A number of visitors has complained.", "Each of the tickets cost ten pounds.", "The majority of residents supports the plan."] } },
        { t: "check", ex: { k: "fill", q: "The number of people who cycle to work ___ rising. (be)", a: ["is"], why: "Ega **the number** — birlik: **is rising**." } },
        { t: "check", ex: { k: "choice", q: "A number of employees ___ asked for longer holidays.", opts: ["have", "has", "is", "was"], a: 0, why: "**A number of** = bir necha, ko'plik: **have asked**." } },
        { t: "check", ex: { k: "choice", q: "Each of the rooms ___ a view of the lake.", opts: ["has", "have", "are having", "having"], a: 0, why: "**Each of** + ko'plik ot, lekin fe'l **birlik**: *has*." } },
      ],
    },
    {
      title: "Foiz va kasrlar bilan moslashuv",
      blocks: [
        { t: "p", md: "Foiz yoki kasrdan keyin **of + ot** kelsa, fe'l **otga** moslashadi (birlik yoki ko'plik)." },
        {
          t: "table", head: ["Ibora", "Misol", "Fe'l"], speak: [1],
          rows: [
            ["forty per cent of + ko'plik ot", "Forty per cent of the students are from abroad.", "ko'plik"],
            ["a quarter of + sanalmaydigan ot", "A quarter of the water is lost in old pipes.", "birlik"],
            ["two-thirds of + ko'plik ot", "Two-thirds of the voters were under thirty.", "ko'plik"],
            ["the rest of + ot", "The rest of the money was spent on trees.", "otga qarab"],
            ["a proportion of + ot", "A small proportion of the waste is recycled.", "otga qarab"],
          ],
        },
        {
          t: "examples", items: [
            { en: "Three-quarters of the town was flooded.", uz: "Shaharchaning to'rtdan uch qismini suv bosdi." },
            { en: "Half of the pupils walk to school.", uz: "O'quvchilarning yarmi maktabga piyoda boradi." },
            { en: "Most of the energy comes from gas.", uz: "Energiyaning ko'p qismi gazdan keladi." },
          ],
        },
        { t: "tip", tone: "info", md: "Matnda **per cent** (britaniyacha, ikki so'z) yoziladi; raqam bilan **40%** ham bo'ladi. Ovoz chiqarib: *forty per cent*. **Kasrlar:** ¼ = *a quarter*, ½ = *a half*, ¾ = *three quarters*, ⅔ = *two thirds*." },
        { t: "check", ex: { k: "choice", q: "Sixty per cent of the land ___ used for farming.", opts: ["is", "are", "were", "have been"], a: 0, why: "*Land* — sanalmaydigan, birlik: **is**." } },
        { t: "check", ex: { k: "choice", q: "Sixty per cent of the farmers ___ young.", opts: ["are", "is", "has been", "was"], a: 0, why: "*Farmers* — ko'plik: **are**." } },
      ],
    },
    {
      title: "Tipik xatolar: o'zbek tilidan interferensiya",
      blocks: [
        { t: "p", md: "O'zbek tilida «ko'p odam» desak, «ko'p» hamma otga bir xil mos keladi; sanaladigan va sanalmaydigan ot farqi yo'q. Inglizcha esa farq qiladi. Eng ko'p uchraydigan xatolar:" },
        { t: "compare",
          good: { title: "To'g'ri", items: ["There are many people here.", "She gave me a lot of information.", "The number of students is increasing.", "People are worried about the climate."] },
          bad: { title: "Xato", items: ["There are much people here.", "She gave me a lot of informations.", "The number of students are increasing.", "People is worried about the climate."] } },
        { t: "check", ex: { k: "fix", wrong: "There are much people in the park today.", a: ["There are many people in the park today.", "There are a lot of people in the park today.", "There are lots of people in the park today."], hint: "people sanaladi", why: "*People* — sanaladigan ko'plik ot: **many / a lot of**, **much** emas." } },
        { t: "check", ex: { k: "fix", wrong: "He gave us a lot of informations about the course.", a: ["He gave us a lot of information about the course.", "He gave us lots of information about the course."], hint: "information", why: "**Information** sanalmaydigan ot: -s qo'shilmaydi." } },
        { t: "check", ex: { k: "fix", wrong: "The number of tourists have doubled since 2010.", a: ["The number of tourists has doubled since 2010."], hint: "the number", why: "Ega **the number** — birlik: **has**." } },
        { t: "check", ex: { k: "fix", wrong: "Each of the students have a locker.", a: ["Each of the students has a locker."], hint: "each", why: "**Each of** + ko'plik ot, fe'l birlik: **has**." } },
        { t: "tip", tone: "warn", md: "O'zbekchada «ma'lumotlar», «maslahatlar», «yangiliklar» ko'plikda. Inglizchada **information, advice, news, equipment, furniture, research** sanalmaydi: *some advice, a piece of news*." },
      ],
    },
    {
      title: "O'qing: Suv tanqisligi",
      blocks: [
        {
          t: "text", title: "Saving water in our valley", voice: "george",
          en: "I work as an adviser to farmers in a dry valley, and I see the same problem every summer: there is hardly any rain, and the demand for water exceeds the supply. A great deal of water is wasted because old pipes leak, and nearly a third of it never reaches the fields. The majority of farmers want to change, but only a handful of them can afford modern equipment. A number of villages have started to collect rainwater, and the results are encouraging. The number of households that save water is growing every year. Sufficient water for everyone is possible, but we need plenty of patience and a little help from the government.",
          uz: "Men quruq vodiydagi dehqonlar maslahatchisi bo'lib ishlayman va har yozda bir xil muammoni ko'raman: yomg'ir deyarli yo'q, suvga talab taklifdan ortiq. Eski quvurlar oqqanidan juda ko'p suv isrof bo'ladi va uning deyarli uchdan bir qismi dalalarga yetib bormaydi. Dehqonlarning ko'pchiligi o'zgarishni xohlaydi, lekin ularning faqat bir hovuchi zamonaviy uskunani sotib ola oladi. Bir necha qishloq yomg'ir suvini yig'ishni boshladi va natijalar quvontiradi. Suvni tejaydigan xonadonlar soni har yili o'sib boryapti. Hamma uchun yetarli suv bo'lishi mumkin, lekin buning uchun ko'p sabr va hukumatdan ozgina yordam kerak.",
        },
        { t: "check", ex: { k: "tf", q: "Most farmers in the valley can afford modern equipment.", a: false, why: "Matnda: *only a handful of them can afford* — faqat bir hovuchi sotib ola oladi." } },
        { t: "check", ex: { k: "choice", q: "What does the writer say about the number of households that save water?", opts: ["It is growing every year.", "It is falling.", "It is very small.", "It has not changed."], a: 0, why: "*The number of households that save water is growing every year.*" } },
      ],
    },
    {
      title: "Dialog: So'rovnoma natijalari",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Aziza", en: "I've finished the survey about recycling. Do you want the results?", uz: "Qayta ishlash haqidagi so'rovnomani tugatdim. Natijalarni xohlaysizmi?" },
            { who: "Rustam", en: "Yes, please. Do many people in our street recycle?", uz: "Ha, iltimos. Ko'chamizda ko'p odam qayta ishlaydimi?" },
            { who: "Aziza", en: "The majority do. About seventy per cent of the households are sorting their rubbish.", uz: "Ko'pchilik qiladi. Xonadonlarning taxminan yetmish foizi chiqindini saralaydi." },
            { who: "Rustam", en: "That's better than I expected. And the number of people who compost?", uz: "Bu kutganimdan yaxshi. Kompost qiladiganlar soni-chi?" },
            { who: "Aziza", en: "It's still small. Only a handful of families do it, so there is little interest.", uz: "U hali oz. Faqat bir hovuch oila qiladi, shuning uchun qiziqish kam." },
            { who: "Rustam", en: "Maybe we can give them a few tips. A little advice goes a long way.", uz: "Balki ularga bir necha maslahat berarmiz. Ozgina maslahat katta foyda beradi." },
            { who: "Aziza", en: "Good idea. Each of the neighbours has a bin, so we can leave a leaflet in every one.", uz: "Yaxshi fikr. Har bir qo'shnining chiqindi idishi bor, shuning uchun har biriga varaqa qoldirishimiz mumkin." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "How many households sort their rubbish?", opts: ["About seventy per cent", "Only a handful", "Nearly all", "Less than half"], a: 0, why: "Aziza: *About seventy per cent of the households are sorting their rubbish.*" } },
      ],
    },
  ],
  words: [
    { en: "majority", uz: "ko'pchilik", ipa: "məˈdʒɒr.ə.ti", pos: "noun", ex: "The majority of residents voted for the new park.", exUz: "Aholining ko'pchiligi yangi bog' uchun ovoz berdi." },
    { en: "minority", uz: "ozchilik", ipa: "maɪˈnɒr.ə.ti", pos: "noun", ex: "Only a small minority of drivers break this rule.", exUz: "Haydovchilarning faqat kichik ozchiligi bu qoidani buzadi." },
    { en: "proportion", uz: "ulush, nisbat", ipa: "prəˈpɔː.ʃən", pos: "noun", ex: "A large proportion of the budget goes on health.", exUz: "Byudjetning katta ulushi sog'liqqa ketadi." },
    { en: "a great deal of", uz: "juda ko'p (sanalmaydigan otlar bilan)", ipa: "ə ɡreɪt diːl əv", pos: "phrase", ex: "A great deal of time is lost in traffic.", exUz: "Tirbandlikda juda ko'p vaqt yo'qoladi." },
    { en: "a handful of", uz: "bir hovuch, juda oz sondagi", ipa: "ə ˈhænd.fʊl əv", pos: "phrase", ex: "A handful of volunteers cleaned the whole beach.", exUz: "Bir hovuch ko'ngilli butun sohilni tozaladi." },
    { en: "shortage", uz: "tanqislik, yetishmovchilik", ipa: "ˈʃɔː.tɪdʒ", pos: "noun", ex: "There is a shortage of nurses in rural areas.", exUz: "Qishloq hududlarida hamshiralar yetishmaydi." },
    { en: "surplus", uz: "ortiqcha miqdor, ortiqcha", ipa: "ˈsɜː.pləs", pos: "noun", ex: "The farm sells its surplus vegetables at the market.", exUz: "Xo'jalik ortiqcha sabzavotlarini bozorda sotadi." },
    { en: "sufficient", uz: "yetarli", ipa: "səˈfɪʃ.ənt", pos: "adj", ex: "Is the food sufficient for twenty guests?", exUz: "Ovqat yigirma mehmon uchun yetarlimi?" },
    { en: "scarce", uz: "kamyob, tanqis", ipa: "skeəs", pos: "adj", ex: "Fresh water is scarce in desert regions.", exUz: "Cho'l hududlarida chuchuk suv kamyob." },
    { en: "abundant", uz: "mo'l, serob", ipa: "əˈbʌn.dənt", pos: "adj", ex: "Sunshine is abundant in southern countries.", exUz: "Janubiy mamlakatlarda quyosh nuri mo'l." },
  ],
  practice: [
    { k: "choice", q: "We haven't got ___ time before the train leaves.", opts: ["much", "many", "a number of", "several"], a: 0, why: "*Time* — sanalmaydigan, inkor gap: **much**." },
    { k: "choice", q: "There are ___ buses after midnight, so people take taxis.", opts: ["few", "little", "a little", "much"], a: 0, why: "*Buses* — sanaladigan; salbiy ma'no (yetarli emas): **few**." },
    { k: "listen", say: "A number of students have complained about the noise.", opts: ["A number of students have complained about the noise.", "The number of students has complained about the noise.", "A number of student has complained about the noise.", "The number of students have complained about the noise."], a: 0, why: "**A number of** + ko'plik fe'l (*have complained*)." },
    { k: "fill", q: "The number of electric cars ___ growing fast. (be)", a: ["is"], uz: "Elektr mashinalar soni tez o'syapti.", why: "**The number** — birlik: **is**." },
    { k: "fill", q: "Each of the rooms ___ its own bathroom. (have)", a: ["has"], uz: "Xonalarning har birida alohida hammom bor.", why: "**Each of** + birlik fe'l: **has**." },
    { k: "fill", q: "Only a ___ of people attended the meeting, about five. (a very small number)", a: ["handful"], why: "**a handful of** — juda oz sondagi.", hint: "h______" },
    { k: "order", uz: "Aholining ko'pchiligi yangi qoidani qo'llab-quvvatlaydi.", words: ["The", "majority", "of", "residents", "support", "the", "new", "rule."], extra: ["supports", "much"], why: "**The majority of** + ko'plik ot → ko'plik fe'l." },
    { k: "order", uz: "Bu mintaqada yetarli suv yo'q.", words: ["There", "is", "not", "sufficient", "water", "in", "this", "region."], extra: ["are", "many"], alt: [["There", "isn't", "sufficient", "water", "in", "this", "region."]], why: "*Water* — sanalmaydigan, **is**." },
    { k: "translate", uz: "Talabalarning yigirma foizi chet eldan.", a: ["Twenty per cent of the students are from abroad.", "20 per cent of the students are from abroad.", "Twenty per cent of the students come from abroad.", "Twenty per cent of students are from abroad."], why: "**per cent of** + ko'plik ot → ko'plik fe'l." },
    { k: "translate", uz: "Bizda bir necha yaxshi fikr bor.", a: ["We have a few good ideas.", "We have several good ideas.", "We have a number of good ideas."], why: "Sanaladigan ko'plik: **a few / several / a number of**." },
    { k: "match", pairs: [["shortage", "tanqislik"], ["surplus", "ortiqcha miqdor"], ["scarce", "kamyob"], ["abundant", "mo'l"], ["sufficient", "yetarli"]] },
    { k: "fix", wrong: "The number of tourists are rising every year.", a: ["The number of tourists is rising every year."], hint: "the number", why: "**The number** — birlik: **is**." },
    { k: "fix", wrong: "I need some advices about my diet.", a: ["I need some advice about my diet."], hint: "advice", why: "**Advice** sanalmaydigan ot: -s yo'q." },
    { k: "tf", q: "*There isn't hardly any water in the well.* gapi to'g'ri.", a: false, why: "**Hardly any** o'zi inkor ma'noda, **not** bilan ikkilanadi: *There is hardly any water.*" },
    { k: "dictation", say: "A great deal of energy is wasted in old buildings.", uz: "Eski binolarda juda ko'p energiya isrof bo'ladi.", why: "**A great deal of** + sanalmaydigan ot (*energy*) + birlik fe'l." },
    { k: "choice", q: "Which sentence has a mistake?", opts: ["Much people use the bus.", "Few people use the bus.", "Many people use the bus.", "A lot of people use the bus."], a: 0, why: "*People* sanaladi: **much** o'rniga **many / a lot of**." },
    { k: "speak", say: "The majority of people in my city use public transport.", uz: "Shahrimdagi odamlarning ko'pchiligi jamoat transportidan foydalanadi." },
  ],
  quiz: [
    { k: "choice", q: "There is ___ hope of finding the lost hiker alive.", opts: ["little", "few", "a few", "many"], a: 0, why: "*Hope* — sanalmaydigan, salbiy: **little**." },
    { k: "choice", q: "A number of factories ___ closed this year.", opts: ["have", "has", "is", "was"], a: 0, why: "**A number of** + ko'plik fe'l." },
    { k: "choice", q: "The majority of the water ___ from the river.", opts: ["comes", "come", "are coming", "have come"], a: 0, why: "*Water* — sanalmaydigan, birlik: **comes**." },
    { k: "choice", q: "Which word means 'not enough'?", opts: ["scarce", "abundant", "surplus", "sufficient"], a: 0, why: "**Scarce** — kamyob, yetmaydi. Qolganlari mo'l yoki yetarli." },
    { k: "fill", q: "Two-thirds of the students ___ girls. (be)", a: ["are"], uz: "Talabalarning uchdan ikki qismi qizlar.", why: "**Students** — ko'plik: **are**." },
    { k: "fill", q: "We have only ___ little money left, so let's take the bus. (a very small amount, negative)", a: ["very"], hint: "so'z: very", why: "**Very little** — juda oz, salbiy ma'no." },
    { k: "order", uz: "Mehmonxonaning har bir xonasida televizor bor.", words: ["Each", "of", "the", "rooms", "has", "a", "television."], extra: ["have", "many"], why: "**Each of** + birlik fe'l: **has**." },
    { k: "translate", uz: "Velosipedchilar soni oshmoqda.", a: ["The number of cyclists is rising.", "The number of cyclists is increasing.", "The number of cyclists is growing."], why: "**The number of** + birlik fe'l." },
    { k: "fix", wrong: "There are much cars on the road today.", a: ["There are many cars on the road today.", "There are a lot of cars on the road today.", "There are lots of cars on the road today."], hint: "cars sanaladi", why: "*Cars* — sanaladigan: **many / a lot of**." },
    { k: "tf", q: "*The number of cars have increased* gapida fe'l to'g'ri.", a: false, why: "*The number* — birlik: **has increased**." },
  ],
  summary: [
    "**Sanaladigan:** many, a few / few, fewer, a number of, a handful of. **Sanalmaydigan:** much, a little / little, less, a great deal of. **Ikkalasi:** a lot of, plenty of, hardly any.",
    "**A few / a little** — yetarli (ijobiy); **few / little / hardly any** — kam (salbiy). **Hardly any** bilan **not** ishlatilmaydi.",
    "**The number of** + birlik fe'l (*is*); **a number of** + ko'plik fe'l (*are*). **Each of** → birlik; **the majority of + ko'plik ot** → ko'plik.",
    "Foiz va kasrlarda fe'l **of dan keyingi otga** moslashadi: *a quarter of the water is*, *forty per cent of the students are*.",
    "Xatolar: ~~much people~~, ~~informations~~, ~~the number are~~, ~~each have~~.",
  ],
  homework: "O'zingiz yashaydigan mahalla yoki ish joyi haqida 8 ta gap yozing va ularda **a great deal of, a handful of, hardly any, the number of, a number of, the majority of, each of, a quarter of** ning har birini ishlating. Fe'lning moslashuvini qizil qalamda tekshiring.",
};

export default lesson;
