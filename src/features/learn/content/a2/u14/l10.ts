import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u14-l10",
  title: "Two flats to rent: which is better?",
  titleUz: "Ikki ijara uyi: qaysi biri yaxshi?",
  mini: true,
  kind: 'situation',
  goal: "Ijaraga olinadigan ikki uyni narx, o'lcham va joylashuv bo'yicha solishtirasiz va nega bittasini tanlaganingizni inglizcha tushuntira olasiz: *than, the most, as ... as, too, enough, both, however*.",
  slides: [
    {
      title: "Dialog: ikki uy",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Dilnoza", en: "I've seen two flats. The first one is in the city centre, but the rent is higher.", uz: "Men ikkita uyni ko'rdim. Birinchisi shahar markazida, lekin ijara haqi yuqoriroq." },
            { who: "Kamol", en: "What about the second one?", uz: "Ikkinchisi-chi?" },
            { who: "Dilnoza", en: "It's cheaper and it has two bedrooms, but it's in a quiet suburb. It's far from my work.", uz: "U arzonroq va ikkita yotoqxonasi bor, lekin sokin chekkada. Ishimdan uzoq." },
            { who: "Kamol", en: "Is it big enough for you and your sister?", uz: "U sen va singlingga yetarlicha kattami?" },
            { who: "Dilnoza", en: "Yes, and it has a balcony. However, the landlord says there are no bills in the first flat. That's a big advantage.", uz: "Ha, balkoni ham bor. Biroq uy egasi birinchi uyda kommunal to'lovlar yo'q deydi. Bu katta afzallik." },
            { who: "Kamol", en: "Both are good. Which one is the best for you?", uz: "Ikkalasi ham yaxshi. Qaysi biri senga eng mos?" },
          ],
        },
        { t: "check", ex: { k: "choice", q: "Which flat is cheaper?", opts: ["The one in the suburb", "The one in the centre", "Both are the same", "We don't know"], a: 0, why: "*The second one ... is cheaper.*" } },
        { t: "check", ex: { k: "tf", q: "The second flat is too small for two people.", a: false, why: "Kamol so'raydi, Dilnoza *Yes* (yetarlicha katta) deydi." } },
      ],
    },
    {
      title: "Uylarni solishtirish",
      blocks: [
        { t: "p", md: "Narx, o'lcham, joylashuvni solishtirish uchun ishlatadigan jumlalar:" },
        {
          t: "table", head: ["Maqsad", "Misol"], speak: [1],
          rows: [
            ["narx", "The flat in the centre is more expensive than the flat in the suburb."],
            ["o'lcham", "The second flat is bigger, and the bedrooms are as large as mine."],
            ["joylashuv", "The first flat is closer to the metro."],
            ["muammo", "It's too far from my work."],
            ["yetarli", "The kitchen is big enough for two people."],
            ["qarama-qarshilik", "Both are nice. However, the second one is quieter."],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["The flat is closer to the centre than my house.", "It's too far from my work.", "Both flats are nice."] },
          bad: { title: "Xato", items: ["The flat is more close to the centre than my house.", "It's too much far from my work.", "Both of flats are nice."] },
        },
        { t: "check", ex: { k: "fill", q: "The first flat is ___ than the second. (expensive)", a: ["more expensive"], why: "Uzun sifat: **more expensive** + than." } },
        { t: "check", ex: { k: "choice", q: "\"Bu uy men ko'rgan eng arzon uy.\"", opts: ["It's the cheapest flat I've seen.", "It's the more cheap flat I've seen.", "It's cheapest flat I've seen.", "It's the most cheap flat I've seen."], a: 0 } },
      ],
    },
    {
      title: "Tanlovni tushuntirish",
      blocks: [
        { t: "p", md: "Qaror qilganda **because**, **but** va **However** dan foydalaning:" },
        {
          t: "examples", items: [
            { en: "I prefer the second flat because it's cheaper and quieter.", uz: "Men ikkinchi uyni afzal ko'raman, chunki u arzonroq va sokinroq." },
            { en: "The first flat is the most expensive. However, it's the closest to my work.", uz: "Birinchi uy eng qimmat. Biroq ishimga eng yaqin." },
            { en: "The flat isn't furnished, so I need to buy a bed.", uz: "Uy mebelsiz, shuning uchun karavot sotib olishim kerak." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "\"Men bu uyni tanlayman, chunki u yaqinroq.\"", opts: ["I choose this flat because it's closer.", "I choose this flat because it's more close.", "I choose this flat because closer.", "I choose this flat so it's closer."], a: 0 } },
        { t: "check", ex: { k: "tf", q: "**It's the most close to the metro.** — to'g'ri gap.", a: false, why: "**the closest** to the metro." } },
      ],
    },
  ],
  words: [
    { en: "rent", uz: "ijara (haqi); ijaraga olmoq", ipa: "rent", pos: "noun", ex: "The rent is 300 dollars a month.", exUz: "Ijara haqi oyiga 300 dollar." },
    { en: "landlord", uz: "uy egasi", ipa: "ˈlændlɔːd", pos: "noun", ex: "The landlord lives next door.", exUz: "Uy egasi yonimizda yashaydi." },
    { en: "bedroom", uz: "yotoqxona", ipa: "ˈbedruːm", pos: "noun", ex: "My flat has two bedrooms.", exUz: "Mening uyimda ikkita yotoqxona bor." },
    { en: "balcony", uz: "balkon", ipa: "ˈbælkəni", pos: "noun", ex: "We have tea on the balcony.", exUz: "Biz balkonda choy ichamiz." },
    { en: "furnished", uz: "mebelli", ipa: "ˈfɜːnɪʃt", pos: "adj", ex: "The flat is furnished.", exUz: "Uy mebelli." },
    { en: "bills", uz: "kommunal to'lovlar, hisoblar", ipa: "bɪlz", pos: "noun", ex: "The bills are not expensive.", exUz: "Kommunal to'lovlar qimmat emas." },
  ],
  practice: [
    { k: "match", pairs: [["rent", "ijara haqi"], ["landlord", "uy egasi"], ["bedroom", "yotoqxona"], ["balcony", "balkon"], ["furnished", "mebelli"]] },
    { k: "choice", q: "The flat in the suburb is ___ than the flat in the centre.", opts: ["cheaper", "more cheap", "the cheapest", "cheap"], a: 0 },
    { k: "choice", q: "Of the three flats, this one is ___.", opts: ["the biggest", "bigger", "more big", "the bigger"], a: 0 },
    { k: "choice", q: "The flat is ___ far from my work. I can't walk there.", opts: ["too", "enough", "much", "very enough"], a: 0 },
    { k: "fill", q: "This flat isn't as modern ___ the other one.", a: ["as"] },
    { k: "fill", q: "Is the kitchen big ___ for four people?", a: ["enough"] },
    { k: "fill", q: "___ flats are nice, but I like the second one more. (ikkalasi)", a: ["Both"], why: "**Both** flats are nice." },
    { k: "listen", say: "The rent is lower, but the bills are higher.", opts: ["The rent is lower, but the bills are higher.", "The rent is lowest, but the bills are higher.", "The rent is lower, but the bills are highest."], a: 0 },
    { k: "fix", wrong: "The second flat is more quiet than the first.", a: ["The second flat is quieter than the first.", "The second flat is quieter than the first one."], why: "*quiet* → **quieter**." },
    { k: "tf", q: "**The flat is too big enough for me.** — to'g'ri gap.", a: false, why: "*too* va *enough* birga kelmaydi: **big enough** yoki **too big**." },
    { k: "order", uz: "Bu uyning balkoni bor, lekin ijara haqi juda yuqori.", words: ["It", "has", "a", "balcony,", "but", "the", "rent", "is", "too", "high."], extra: ["enough", "more"] },
    { k: "translate", uz: "Birinchi uy ikkinchisidan qimmatroq.", a: ["The first flat is more expensive than the second one.", "The first flat is more expensive than the second.", "The first one is more expensive than the second one.", "The first one is more expensive than the second."] },
    { k: "translate", uz: "Ikkinchi uy markazdan uzoqroq.", a: ["The second flat is farther from the centre than the first.", "The second flat is further from the centre than the first.", "The second flat is farther from the centre.", "The second flat is further from the centre.", "The second flat is farther from the center than the first.", "The second flat is further from the center than the first."] },
  ],
  quiz: [
    { k: "choice", q: "\"Bu uy mening uyimdek katta emas.\"", opts: ["This flat isn't as big as my flat.", "This flat isn't so bigger as my flat.", "This flat is not as big than my flat.", "This flat isn't as bigger as my flat."], a: 0 },
    { k: "choice", q: "The flat is on the first floor, ___ the balcony is small.", opts: ["but", "so", "than", "enough"], a: 0 },
    { k: "choice", q: "Who owns the flat and gets the rent?", opts: ["The landlord", "The balcony", "The bedroom", "The discount"], a: 0 },
    { k: "choice", q: "Which sentence is correct?", opts: ["This is the best flat I've ever seen.", "This is the most good flat I've ever seen.", "This is best flat I've ever seen.", "This is the better flat I've ever seen."], a: 0 },
    { k: "fill", q: "The bedroom is ___ than the kitchen. (big)", a: ["bigger"] },
    { k: "fill", q: "There are ___ many stairs. I don't want to carry my bags. (juda)", a: ["too"] },
    { k: "listen", say: "Both flats are close to the metro.", opts: ["Both flats are close to the metro.", "Both of flat is close to the metro.", "Both flats are closer the metro."], a: 0 },
    { k: "translate", uz: "Bu uy yetarlicha katta.", a: ["This flat is big enough.", "The flat is big enough.", "It's big enough.", "It is big enough.", "This flat is large enough.", "The flat is large enough."] },
  ],
  summary: [
    "Uylarni solishtirish: *cheaper, more expensive, closer, bigger* + **than**; uchtadan biri: **the cheapest / the biggest**.",
    "**too** muammoni bildiradi (*too far*), **enough** sifatdan keyin keladi (*big enough*). *too ... enough* birga ishlatilmaydi.",
    "**Both** + ko'plik: *Both flats are nice.* Qarama-qarshilik uchun: **but, however**.",
    "Yangi so'zlar: *rent, landlord, bedroom, balcony, furnished, bills*.",
  ],
  homework: "Ikki uy yoki xonani tasavvur qiling va qaysi biri yaxshiroq ekanini 6–8 gapda yozing: narx, o'lcham, joylashuv. Oxirida *I prefer ... because ...* deb tanlovingizni tushuntiring.",
};

export default lesson;
