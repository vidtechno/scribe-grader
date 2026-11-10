import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u29-l8",
  title: "Unit review: comparison, quantity and data",
  titleUz: "Bosqich takrori: taqqoslash, miqdor va ma'lumotlar tavsifi",
  goal: "Bosqichni takrorlaysiz: **taqqoslash** (*far better, the more… the more, twice as… as*), **miqdor so'zlari va moslashuv** (*a great deal of, the number of / a number of*), **artikl** (*the elderly, such a, in hospital*), **sifat va ravish** (*absolutely wonderful, hard / hardly*) va **ma'lumotlar tavsifi** (*rose from… to…, peaked at, account for*) ni yangi misollarda tekshirasiz va tipik xatolarni tuzatasiz.",
  slides: [
    {
      title: "Takror: taqqoslash",
      blocks: [
        { t: "p", md: "Taqqoslashda **farq kattaligi** (*far, much, considerably / slightly, marginally*), **bog'liq o'zgarish** (*the more…, the more…*) va **ko'paytiruvchi** (*twice as… as, half as many as*) ishlatiladi. **Very** comparative oldida emas." },
        {
          t: "table", head: ["Tuzilma", "Misol"], speak: [1],
          rows: [
            ["far / much / considerably + comparative", "Rents in the capital are far higher than in small towns."],
            ["slightly / marginally + comparative", "The new bus is marginally quicker than the old one."],
            ["The + comparative, the + comparative", "The longer the drought lasts, the worse the harvest becomes."],
            ["twice / half as … as", "Petrol is twice as expensive as it was."],
            ["fewer + countable, less + uncountable", "There are fewer cars and less noise."],
          ],
        },
        { t: "check", ex: { k: "choice", q: "The two flats are almost identical: one is ___ larger than the other.", opts: ["marginally", "far", "considerably", "a great deal"], a: 0, why: "*Almost identical* — kichik farq: **marginally**." } },
        { t: "check", ex: { k: "fix", wrong: "The film was more longer than I expected.", a: ["The film was longer than I expected."], hint: "more yoki -er", why: "**Long** qisqa sifat: faqat *longer*." } },
      ],
    },
    {
      title: "Takror: miqdor so'zlari va moslashuv",
      blocks: [
        { t: "p", md: "Miqdor so'zini ot turiga qarab tanlaymiz. Fe'l esa **gapning egasiga**, ko'pincha **of dan keyingi otga** moslashadi." },
        {
          t: "table", head: ["Qoida", "Misol"], speak: [1],
          rows: [
            ["a great deal of + sanalmaydigan", "A great deal of energy is wasted."],
            ["hardly any / a handful of", "There is hardly any rain. / A handful of farmers came."],
            ["few / a few · little / a little", "Few people stayed (kam). / A few people stayed (bir nechta)."],
            ["the number of → birlik fe'l", "The number of visitors has risen."],
            ["a number of → ko'plik fe'l", "A number of visitors have complained."],
            ["each of → birlik; the majority of + ko'plik → ko'plik", "Each of the rooms has a balcony. The majority of guests are happy."],
          ],
        },
        { t: "check", ex: { k: "choice", q: "The number of tourists ___ increased this year.", opts: ["has", "have", "are", "were"], a: 0, why: "**The number** — birlik: **has**." } },
        { t: "check", ex: { k: "fix", wrong: "There are much people in the square.", a: ["There are many people in the square.", "There are a lot of people in the square.", "There are lots of people in the square."], hint: "people sanaladi", why: "*People* sanaladigan: **many / a lot of**." } },
      ],
    },
    {
      title: "Takror: artikl va aniqlovchilar",
      blocks: [
        { t: "p", md: "Umumiy fikrda artikl yo'q (*Life is hard*) yoki **the + sifat** (*the elderly*). **Joy nomlari**da daryo, dengiz, tog' tizmasi **the** bilan. **Such a / what a / quite a** — artikl sifatdan oldin." },
        {
          t: "table", head: ["Mavzu", "Misol"], speak: [1],
          rows: [
            ["generic", "Tigers are endangered. / The tiger is endangered."],
            ["geografik nom", "the Alps, the Aral Sea, Lake Baikal, Uzbekistan"],
            ["muassasa", "My aunt is in hospital. / I went to the hospital to see her."],
            ["so'z tartibi", "such a lovely day, what a surprise, quite a challenge, half an hour"],
            ["another / other / others", "another cup, other people, some… others…, one… the other…"],
          ],
        },
        { t: "check", ex: { k: "choice", q: "___ are often the most vulnerable during heatwaves.", opts: ["The elderly", "Elderly", "An elderly", "Elderlies"], a: 0, why: "Odamlar guruhi: **the + sifat** (ko'plik fe'l)." } },
        { t: "check", ex: { k: "fix", wrong: "It was a such terrible storm.", a: ["It was such a terrible storm."], hint: "such a", why: "**such a + sifat + ot**." } },
      ],
    },
    {
      title: "Takror: sifat va ravish",
      blocks: [
        { t: "p", md: "**Gradable** sifatlar (*good, cold*) uchun very, extremely, fairly; **non-gradable** (*wonderful, exhausted*) uchun absolutely, utterly. Sifatlar tartibi: **fikr → o'lcham → yosh → rang → material**. Ravish fe'lni tavsiflaydi (*well, hard*)." },
        {
          t: "table", head: ["Mavzu", "Misol"], speak: [1],
          rows: [
            ["gradable / non-gradable", "very tired, absolutely exhausted"],
            ["sifat tartibi", "a lovely old wooden house"],
            ["hard / hardly, late / lately", "He works hard. / He hardly works. / I haven't seen her lately."],
            ["compound adjective", "a ten-minute walk, a user-friendly app"],
            ["so'zma-so'z xato", "speaks English well (✗ good), eat healthily (✗ eat healthy)"],
          ],
        },
        { t: "check", ex: { k: "choice", q: "After the long hike, we were ___ exhausted.", opts: ["absolutely", "very", "fairly", "rather"], a: 0, why: "*Exhausted* — non-gradable: **absolutely**." } },
        { t: "check", ex: { k: "fix", wrong: "She speaks Spanish very good.", a: ["She speaks Spanish very well."], hint: "ravish", why: "Fe'lni tavsiflash — **well**." } },
      ],
    },
    {
      title: "Takror: ma'lumotlarni tavsiflash",
      blocks: [
        { t: "p", md: "Yana bitta **o'ylab topilgan** jadval: ikki shaharchada bir kishining kunlik suv iste'moli (litr)." },
        {
          t: "table", head: ["Year", "Dunmore (litres)", "Eastfield (litres)"],
          rows: [
            ["2000", "110", "95"],
            ["2010", "135", "100"],
            ["2020", "150", "98"],
          ],
        },
        {
          t: "table", head: ["Vazifa", "Til", "Misol"], speak: [2],
          rows: [
            ["trend", "rose, climbed, soared / fell, dipped / levelled off, fluctuated", "Dunmore's use climbed steadily."],
            ["raqam predloglari", "from … to, by, at, between … and", "It rose by 40 litres, from 110 to 150."],
            ["ulush", "account for, a quarter, the majority", "Showers account for a third of use."],
            ["tuzilma", "kirish → overview → 2 bo'lim", "Overall, Dunmore's use rose, whereas Eastfield's stayed stable."],
          ],
        },
        { t: "check", ex: { k: "choice", q: "Which sentence about the table is correct?", opts: ["Dunmore's consumption rose from 110 to 150 litres.", "Eastfield's consumption doubled.", "Dunmore's consumption fell after 2010.", "Eastfield used more water than Dunmore in 2020."], a: 0, why: "Dunmore: 110 → 135 → 150. Qolgan gaplar ma'lumotga zid." } },
        { t: "check", ex: { k: "fix", wrong: "Water use in Dunmore was risen by 40 litres.", a: ["Water use in Dunmore rose by 40 litres."], hint: "o'timsiz fe'l", why: "**Rise** passive bo'lmaydi." } },
        { t: "check", ex: { k: "tf", q: "Eastfield's water use remained fairly stable between 2000 and 2020.", a: true, why: "95 → 100 → 98: o'zgarish juda kichik." } },
      ],
    },
    {
      title: "O'qing: Qurg'oqchilik",
      blocks: [
        {
          t: "text", title: "A region under pressure", voice: "george",
          en: "For the last ten years our region has suffered from a series of droughts, and the situation continues to deteriorate. The longer the dry seasons last, the more the lake shrinks, and it is now roughly half as big as it was in 2000. Water consumption per capita is considerably higher than in neighbouring areas, and a great deal of water is still wasted. The number of households with water meters has risen by twenty per cent, which is encouraging, but a number of villages have hardly any reserves. The elderly and the poor are especially vulnerable, and the threat to farming is alarming. Experts say the local council should curb waste at once and, most importantly, raise awareness of what each household can do.",
          uz: "So'nggi o'n yil davomida mintaqamiz bir qator qurg'oqchilikdan azob chekdi va vaziyat yomonlashishda davom etmoqda. Quruq mavsumlar qancha uzoq davom etsa, ko'l shuncha kichrayadi va hozir u 2000-yildagidan taxminan ikki baravar kichik. Jon boshiga suv iste'moli qo'shni hududlarnikidan ancha yuqori va hali ham juda ko'p suv isrof bo'ladi. Suv hisoblagichi bor xonadonlar soni yigirma foizga oshdi, bu quvontiradi, lekin bir necha qishloqda deyarli zaxira yo'q. Keksalar va kambag'allar ayniqsa himoyasiz, dehqonchilikka tahdid esa xavotirli. Mutaxassislarning aytishicha, mahalliy kengash isrofgarchilikni darhol jilovlashi va eng muhimi, har bir xonadon nima qila olishi haqida xabardorlikni oshirishi kerak.",
        },
        { t: "check", ex: { k: "tf", q: "The lake is now about twice as big as it was in 2000.", a: false, why: "Matnda: *roughly half as big as it was in 2000* — ikki baravar kichik." } },
        { t: "check", ex: { k: "choice", q: "Who are especially vulnerable, according to the text?", opts: ["The elderly and the poor", "Farmers only", "Tourists", "Council members"], a: 0, why: "*The elderly and the poor are especially vulnerable.*" } },
      ],
    },
    {
      title: "Dialog: Hisobot muhokamasi",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Sophie", en: "James, have you read the report on water use? The situation is alarming.", uz: "Jeyms, suv iste'moli haqidagi hisobotni o'qidingizmi? Vaziyat xavotirli." },
            { who: "James", en: "I have. Consumption per capita rose from 110 to 150 litres, which is far more than I expected.", uz: "O'qidim. Jon boshiga iste'mol 110 dan 150 litrgacha oshibdi, bu men kutganimdan ancha ko'p." },
            { who: "Sophie", en: "And the number of households with meters has grown by twenty per cent.", uz: "Hisoblagichi bor xonadonlar soni esa yigirma foizga oshibdi." },
            { who: "James", en: "That's good news. But a great deal of water is still lost in old pipes.", uz: "Bu yaxshi xabar. Lekin eski quvurlarda hali ham juda ko'p suv yo'qoladi." },
            { who: "Sophie", en: "The more we repair, the less we waste. We should curb the losses first.", uz: "Qancha ko'p ta'mirlasak, shuncha kam isrof qilamiz. Avval yo'qotishlarni jilovlashimiz kerak." },
            { who: "James", en: "Agreed. Let's mention it in the overview, and give the figures in the second paragraph.", uz: "Roziman. Buni overview'da aytamiz va raqamlarni ikkinchi abzatsda keltiramiz." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "What does Sophie suggest dealing with first?", opts: ["Water lost in old pipes", "Raising prices", "Building a new lake", "Closing farms"], a: 0, why: "*We should curb the losses first.*" } },
      ],
    },
  ],
  words: [
    { en: "deteriorate", uz: "yomonlashmoq", ipa: "dɪˈtɪə.ri.ə.reɪt", pos: "verb", ex: "The air quality deteriorates in winter.", exUz: "Havo sifati qishda yomonlashadi." },
    { en: "drought", uz: "qurg'oqchilik", ipa: "draʊt", pos: "noun", ex: "The drought destroyed most of the wheat.", exUz: "Qurg'oqchilik bug'doyning ko'pini yo'q qildi." },
    { en: "alarming", uz: "xavotirli, tashvishli", ipa: "əˈlɑː.mɪŋ", pos: "adj", ex: "The speed of the ice melting is alarming.", exUz: "Muzning erish tezligi xavotirli." },
    { en: "vulnerable", uz: "himoyasiz, zaif", ipa: "ˈvʌl.nər.ə.bəl", pos: "adj", ex: "Young children are vulnerable to infections.", exUz: "Yosh bolalar infeksiyalarga zaif." },
    { en: "threat", uz: "tahdid", ipa: "θret", pos: "noun", ex: "Pollution is a serious threat to wildlife.", exUz: "Ifloslanish yovvoyi tabiatga jiddiy tahdid." },
    { en: "shrink", uz: "kichrayib bormoq, qisqarmoq", ipa: "ʃrɪŋk", pos: "verb", ex: "The glacier has shrunk by half in thirty years.", exUz: "Muzlik o'ttiz yilda yarmiga qisqardi." },
    { en: "consumption", uz: "iste'mol", ipa: "kənˈsʌmp.ʃən", pos: "noun", ex: "Energy consumption rises sharply in winter.", exUz: "Energiya iste'moli qishda keskin oshadi." },
    { en: "household", uz: "xonadon, oila xo'jaligi", ipa: "ˈhaʊs.həʊld", pos: "noun", ex: "The average household recycles half of its waste.", exUz: "O'rtacha xonadon chiqindisining yarmini qayta ishlaydi." },
    { en: "per capita", uz: "jon boshiga", ipa: "pə ˈkæp.ɪ.tə", pos: "phrase", ex: "Water use per capita has risen by ten per cent.", exUz: "Jon boshiga suv iste'moli o'n foizga oshdi." },
    { en: "curb", uz: "jilovlamoq, cheklamoq", ipa: "kɜːb", pos: "verb", ex: "The city wants to curb traffic in the centre.", exUz: "Shahar markazda transport harakatini cheklamoqchi." },
  ],
  practice: [
    { k: "choice", q: "The new tariff is only ___ higher than the old one, by a few pence.", opts: ["far", "considerably", "marginally", "a great deal"], a: 2, why: "*A few pence* — kichik farq: **marginally**." },
    { k: "choice", q: "The ___ the weather gets, the more electricity we use for cooling.", opts: ["hotter", "hot", "hottest", "more hot"], a: 0, why: "**The + comparative, the + comparative**: *the hotter*." },
    { k: "listen", say: "The number of households that save water has risen by twenty per cent.", opts: ["The number of households that save water has risen by twenty per cent.", "A number of households that save water has risen by twenty per cent.", "The number of households that save water have risen by twenty per cent.", "The number of household that save water has risen by twenty per cent."], a: 0, why: "**The number of** + ko'plik ot + birlik fe'l (*has risen*)." },
    { k: "fill", q: "A great deal ___ water is lost in the old pipes.", a: ["of"], why: "**A great deal of** + sanalmaydigan ot." },
    { k: "fill", q: "A number of villages ___ run out of water. (have / has)", a: ["have"], uz: "Bir necha qishloqda suv tugadi.", why: "**A number of** + ko'plik fe'l: *have*." },
    { k: "order", uz: "Qanday dahshatli qurg'oqchilik edi!", words: ["What", "a", "terrible", "drought", "it", "was!"], extra: ["such", "the"], why: "**What a + sifat + ot!**" },
    { k: "choice", q: "Which sentence is correct?", opts: ["My aunt is in hospital after an operation.", "My aunt is in hospital after operation.", "My aunt is in hospital after an operations.", "My aunt is hospital after an operation."], a: 0, why: "Bemor sifatida: **in hospital** (artiklsiz, britaniyacha), va **an operation** (artikl kerak)." },
    { k: "translate", uz: "Bu piyoda o'n daqiqalik yo'l.", a: ["It is a ten-minute walk.", "It's a ten-minute walk.", "This is a ten-minute walk.", "That is a ten-minute walk.", "That's a ten-minute walk."], why: "Compound adjective birlikda: **ten-minute**." },
    { k: "translate", uz: "Iste'mol 2010-yilda 120 litrdan 150 litrgacha oshdi.", a: ["Consumption rose from 120 litres to 150 litres in 2010.", "Consumption rose from 120 to 150 litres in 2010.", "Consumption increased from 120 litres to 150 litres in 2010.", "Consumption increased from 120 to 150 litres in 2010.", "In 2010 consumption rose from 120 litres to 150 litres.", "In 2010 consumption rose from 120 to 150 litres."], why: "**rose from … to …**; aniq yil — o'tgan zamon." },
    { k: "match", pairs: [["deteriorate", "yomonlashmoq"], ["drought", "qurg'oqchilik"], ["vulnerable", "himoyasiz"], ["threat", "tahdid"], ["curb", "jilovlamoq"]] },
    { k: "fix", wrong: "Each of the villages have its own well.", a: ["Each of the villages has its own well."], hint: "each of", why: "**Each of** + birlik fe'l: **has**." },
    { k: "fix", wrong: "It was a such long drought that the lake shrank.", a: ["It was such a long drought that the lake shrank."], hint: "such a", why: "**such a + sifat + ot**." },
    { k: "fix", wrong: "The figure was risen to 60 per cent.", a: ["The figure rose to 60 per cent."], hint: "o'timsiz fe'l", why: "**Rise** passive bo'lmaydi." },
    { k: "tf", q: "*Peaked at 52 per cent* ibora balandlik cho'qqisini bildiradi.", a: true, why: "**Peak at** — eng yuqori qiymat." },
    { k: "dictation", say: "The elderly are especially vulnerable during a heatwave.", uz: "Keksalar jazirama paytida ayniqsa himoyasiz.", why: "**The elderly** — odamlar guruhi." },
    { k: "speak", say: "The longer the drought lasts, the more the lake shrinks.", uz: "Qurg'oqchilik qancha uzoq davom etsa, ko'l shuncha kichrayadi." },
  ],
  quiz: [
    { k: "choice", q: "The view from the summit was ___ breathtaking.", opts: ["absolutely", "very", "rather", "fairly"], a: 0, why: "*Breathtaking* — non-gradable: **absolutely**." },
    { k: "choice", q: "The number of cyclists in the city ___ doubled in five years.", opts: ["has", "have", "are", "were"], a: 0, why: "**The number** — birlik: **has**." },
    { k: "choice", q: "Which sentence is correct?", opts: ["Fewer people use the bus than ten years ago.", "Less people use the bus than ten years ago.", "Fewer people use the bus that ten years ago.", "Few people uses the bus than ten years ago."], a: 0, why: "*People* sanaladi: **fewer**; taqqoslashda **than**." },
    { k: "choice", q: "Which verb means 'reached its highest point'?", opts: ["peaked", "plummeted", "levelled off", "dipped"], a: 0, why: "**Peaked** — eng yuqori nuqtaga yetdi." },
    { k: "fill", q: "A ticket costs 12 pounds now. Last year it cost 6 pounds. It costs ___ as much as last year.", a: ["twice", "two times"], uz: "Chipta narxi o'tgan yildan ikki baravar yuqori.", why: "12 = 6 × 2: **twice as much as**." },
    { k: "fill", q: "Sales peaked ___ 9,000 units in December.", a: ["at"], uz: "Savdo dekabrda 9 000 donada cho'qqiga chiqdi.", why: "**Peaked at** + qiymat." },
    { k: "order", uz: "Umuman olganda, iste'mol sezilarli oshdi.", words: ["Overall,", "consumption", "rose", "considerably."], extra: ["is", "rised"], why: "Overview, o'tgan zamon." },
    { k: "translate", uz: "U inglizcha juda yaxshi gapiradi.", a: ["He speaks English very well.", "She speaks English very well."], why: "Fe'lni tavsiflash: **well**." },
    { k: "fix", wrong: "There is not hardly any water left in the well.", a: ["There is hardly any water left in the well."], hint: "ikkilangan inkor", why: "**Hardly** o'zi inkor: *not hardly* xato." },
    { k: "tf", q: "In a data report you can write *I think this result is shocking*.", a: false, why: "Hisobotda shaxsiy fikr yozilmaydi." },
  ],
  summary: [
    "**Taqqoslash:** far / much / marginally + comparative; **the more… the more**; **twice / half as … as**; fewer + sanaladigan, less + sanalmaydigan; **very** comparative oldida emas.",
    "**Miqdor:** a great deal of, hardly any, a handful of; **the number of → is**, **a number of → are**, **each of → has**, foiz/kasr — of dan keyingi otga moslashadi.",
    "**Artikl va sifat:** the elderly, the Alps, in hospital, such a / what a; gradable → very, non-gradable → absolutely; tartib: fikr → o'lcham → yosh → rang → material.",
    "**Ma'lumotlar:** kirish → overview → 2 bo'lim; rose from … to …, by, at; account for; o'tgan yil — o'tgan zamon; fikr yo'q.",
  ],
  homework: "Bu bosqichdagi eng ko'p xato qilgan 5 ta joyingizni daftarga yozing (masalan, *the number of / a number of*, *by / to*), har biri uchun yangi 2 tadan gap tuzing. Keyin 100 so'zli qisqa matn yozing: shahringizdagi suv yoki energiya iste'moli haqida o'ylab topilgan raqamlar bilan.",
};

export default lesson;
