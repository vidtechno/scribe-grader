import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u14-l11",
  title: "Comparing things: final review",
  titleUz: "Taqqoslash: yakuniy takror",
  mini: true,
  kind: 'review',
  goal: "Bosqichni yakuniy takrorlaysiz: **qiyosiy va orttirma daraja**, **as ... as / the same as**, **too / enough**, **ravishlar** va **odamlar hamda joylarni tasvirlash**. Aralash mashqlar sizni taqqoslash haqida ishonchli gapirishga tayyorlaydi.",
  slides: [
    {
      title: "Dialog: ikki shahar, ikki do'st",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Laylo", en: "My brother and I are very different. He's taller than me, and he speaks more quietly.", uz: "Akam va men juda farq qilamiz. U mendan baland va tinchroq gapiradi." },
            { who: "Aziz", en: "Is he as shy as you?", uz: "U sendek uyatchanmi?" },
            { who: "Laylo", en: "No, he's more confident. He works harder, too, and the quality of his work is excellent.", uz: "Yo'q, u ancha ishonchli. U ham qattiqroq ishlaydi, ishining sifati ham a'lo." },
            { who: "Aziz", en: "Does he live in Tashkent? It's the biggest city, but it's too crowded for me.", uz: "U Toshkentda yashaydimi? U eng katta shahar, lekin men uchun juda gavjum." },
            { who: "Laylo", en: "Yes. His flat is small, but it's big enough for one person.", uz: "Ha. Uning uyi kichik, lekin bir kishiga yetarlicha katta." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "How is Laylo's brother different from her?", opts: ["He is more confident.", "He is shorter.", "He is shyer.", "He works less."], a: 0, why: "*No, he's more confident.*" } },
        { t: "check", ex: { k: "tf", q: "Aziz thinks Tashkent is not crowded enough.", a: false, why: "Aziz: *it's too crowded for me* — juda gavjum." } },
      ],
    },
    {
      title: "Qisqa takror",
      blocks: [
        {
          t: "table", head: ["Mavzu", "Qolip", "Misol"], speak: [2],
          rows: [
            ["qiyosiy", "-er / more + than", "My brother is taller than me."],
            ["orttirma", "the -est / the most", "It's the biggest city in the country."],
            ["teng / kam", "as ... as, not as ... as", "I'm not as tall as him."],
            ["bir xil", "the same as, different from", "His phone is the same as mine."],
            ["too / enough", "too + sifat, sifat + enough", "The room is big enough."],
            ["ravish", "-ly, well, hard, fast", "She works hard and speaks clearly."],
            ["tasvir", "is / has / looks like / is like", "What is he like? He's friendly."],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["He works harder than me.", "She speaks English well.", "The soup is too hot."] },
          bad: { title: "Xato", items: ["He works more hard than me.", "She speaks English good.", "The soup is too much hot."] },
        },
        { t: "check", ex: { k: "fill", q: "She sings ___. (good)", a: ["well"], why: "Ravish: **well**." } },
        { t: "check", ex: { k: "choice", q: "\"Mening telefonim seniknidek.\"", opts: ["My phone is the same as yours.", "My phone is same with yours.", "My phone is the same like yours.", "My phone is as same as yours."], a: 0 } },
      ],
    },
    {
      title: "Shaharlarni solishtirish",
      blocks: [
        {
          t: "examples", items: [
            { en: "Tashkent is bigger and busier, while Bukhara is quieter.", uz: "Toshkent kattaroq va gavjumroq, Buxoro esa sokinroq." },
            { en: "Both cities are interesting. However, the cost of living is higher in Tashkent.", uz: "Ikkala shahar ham qiziq. Biroq Toshkentda yashash xarajati yuqoriroq." },
            { en: "Khiva isn't as big as Samarkand, but it's small enough to walk around.", uz: "Xiva Samarqandchalik katta emas, lekin piyoda aylanib chiqishga yetarlicha kichik." },
          ],
        },
        { t: "check", ex: { k: "fill", q: "Khiva is ___ than Samarkand. (small)", a: ["smaller"] } },
        { t: "check", ex: { k: "choice", q: "Which sentence is correct?", opts: ["Both cities are nice.", "Both of city is nice.", "Both cities is nice.", "Both city are nice."], a: 0 } },
      ],
    },
  ],
  words: [
    { en: "quality", uz: "sifat (sifatlilik)", ipa: "ˈkwɒləti", pos: "noun", ex: "The quality of this bag is excellent.", exUz: "Bu sumkaning sifati a'lo." },
    { en: "size", uz: "o'lcham", ipa: "saɪz", pos: "noun", ex: "What size are your shoes?", exUz: "Poyabzalingiz o'lchami nechta?" },
    { en: "speed", uz: "tezlik", ipa: "spiːd", pos: "noun", ex: "The speed of the train is high.", exUz: "Poyezdning tezligi yuqori." },
    { en: "weight", uz: "og'irlik, vazn", ipa: "weɪt", pos: "noun", ex: "The weight of my bag is five kilos.", exUz: "Sumkamning og'irligi besh kilo." },
    { en: "cost", uz: "turmoq (narxi); narx", ipa: "kɒst", pos: "verb", ex: "How much does it cost?", exUz: "U qancha turadi?" },
    { en: "confident", uz: "o'ziga ishongan", ipa: "ˈkɒnfɪdənt", pos: "adj", ex: "He is a confident speaker.", exUz: "U o'ziga ishongan notiq." },
  ],
  practice: [
    { k: "match", pairs: [["quality", "sifat"], ["size", "o'lcham"], ["speed", "tezlik"], ["weight", "og'irlik"], ["confident", "o'ziga ishongan"]] },
    { k: "choice", q: "Tashkent is ___ than Samarkand.", opts: ["bigger", "more big", "the biggest", "biggest"], a: 0 },
    { k: "choice", q: "She is ___ student in our class.", opts: ["the best", "the better", "best", "the goodest"], a: 0 },
    { k: "choice", q: "\"Akang qanday odam?\" (xarakteri)", opts: ["What is your brother like?", "What does your brother look like?", "What does your brother like?", "How is your brother like?"], a: 0 },
    { k: "choice", q: "He drives ___, so we feel safe.", opts: ["carefully", "careful", "more careful", "carefulness"], a: 0 },
    { k: "fill", q: "My bag is as heavy ___ yours.", a: ["as"] },
    { k: "fill", q: "It's ___ cold to swim today. (juda)", a: ["too"] },
    { k: "fill", q: "The room is warm ___. (yetarlicha)", a: ["enough"] },
    { k: "listen", say: "Bukhara isn't as big as Tashkent.", opts: ["Bukhara isn't as big as Tashkent.", "Bukhara isn't bigger than Tashkent.", "Bukhara is as big as Tashkent."], a: 0 },
    { k: "fix", wrong: "He speaks more quickly then me.", a: ["He speaks more quickly than me.", "He speaks more quickly than I do."], why: "Solishtirishda **than** ishlatiladi." },
    { k: "fix", wrong: "She speaks English very good.", a: ["She speaks English very well."], why: "Fe'ldan keyin ravish: **well**." },
    { k: "order", uz: "U menga o'xshaydi, lekin mendan balandroq.", words: ["He", "looks", "like", "me,", "but", "he", "is", "taller."], extra: ["then", "same"] },
    { k: "translate", uz: "Bu men ko'rgan eng arzon telefon.", a: ["This is the cheapest phone I've ever seen.", "It's the cheapest phone I've ever seen.", "This is the cheapest phone I have ever seen.", "It is the cheapest phone I've ever seen.", "It is the cheapest phone I have ever seen."] },
    { k: "translate", uz: "Bu sumka men uchun juda og'ir.", a: ["This bag is too heavy for me.", "The bag is too heavy for me.", "It's too heavy for me.", "It is too heavy for me."] },
    { k: "speak", say: "My flat is smaller than yours, but it is quieter.", uz: "Mening uyim seniknidan kichikroq, lekin sokinroq." },
  ],
  quiz: [
    { k: "choice", q: "Bukhara is ___ than Tashkent.", opts: ["quieter", "more quiet", "the quietest", "quiet"], a: 0 },
    { k: "choice", q: "It is one of the ___ places in Uzbekistan.", opts: ["most beautiful", "more beautiful", "beautifulest", "most beautifuler"], a: 0 },
    { k: "choice", q: "I can't buy it. It's ___ expensive.", opts: ["too", "enough", "as", "much"], a: 0 },
    { k: "choice", q: "\"U baland bo'yli va sochi jingalak.\"", opts: ["He is tall and has curly hair.", "He has tall and is curly hair.", "He is tall and have curly hair.", "He has tall and curly hair."], a: 0 },
    { k: "fill", q: "My sister works ___ than me. (hard)", a: ["harder"] },
    { k: "fill", q: "This test isn't ___ difficult as the last one.", a: ["as"] },
    { k: "listen", say: "He is too tired to study.", opts: ["He is too tired to study.", "He is tired enough to study.", "He is the most tired to study."], a: 0 },
    { k: "translate", uz: "Bu uy anavi uydan kattaroq.", a: ["This flat is bigger than that one.", "This house is bigger than that one.", "This flat is bigger than that flat.", "This house is bigger than that house.", "This flat is bigger than that.", "This house is bigger than that."] },
    { k: "translate", uz: "U yaxshi gapiradi va qattiq ishlaydi.", a: ["He speaks well and works hard.", "She speaks well and works hard.", "He speaks well and he works hard.", "She speaks well and she works hard."] },
  ],
  summary: [
    "**Qiyosiy** (*-er / more + than*) ikki narsa uchun; **orttirma** (*the -est / the most*) uch va undan ko'p uchun. *good → better → the best*.",
    "**as ... as**, **not as ... as**, **the same as**, **different from**.",
    "**too + sifat** (muammo), **sifat + enough** (yetarli).",
    "**Ravish**: *slowly, carefully, well, hard, fast*. **Tasvir**: *is tall, has curly hair, looks like, What is he like?*",
    "Yangi so'zlar: *quality, size, speed, weight, cost, confident*.",
  ],
  homework: "Ikki do'stingiz yoki ikki shahar haqida 10 gapli matn yozing (*than, the most, as ... as, too, enough, both, however*). Uni ovoz chiqarib o'qing va xatolarni tekshiring.",
};

export default lesson;
