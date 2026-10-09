import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u14-l3",
  title: "As ... as",
  titleUz: "as ... as va the same as",
  goal: "Ikki narsa **teng** ekanini aytasiz (**as tall as**), **teng emas** ekanini aytasiz (**not as expensive as**), **the same as**, **different from**, **similar to** va **like** ni to'g'ri ishlatasiz. *same with*, *different with*, *as tall than* kabi xatolardan qochasiz.",
  slides: [
    {
      title: "as + sifat + as: tenglik",
      blocks: [
        { t: "p", md: "Ikki narsa **bir xil darajada** bo'lsa, **as + sifat + as** qolipidan foydalanamiz. Sifat o'zgarmaydi (-er ham, more ham yo'q):" },
        {
          t: "examples", items: [
            { en: "Aziz is as tall as Kamol.", uz: "Aziz Kamolchalik baland." },
            { en: "My phone is as old as yours.", uz: "Mening telefonim seniknichalik eski." },
            { en: "Tea is as popular as coffee here.", uz: "Bu yerda choy qahvachalik ommabop." },
          ],
        },
        { t: "table", head: ["Qolip", "Misol", "Ma'nosi"], speak: [1], rows: [["as + sifat + as", "She is as busy as me.", "U menchalik band."]] },
        { t: "tip", tone: "info", md: "O'zbekchadagi **-cha / -dek** (*Kamolchalik*) ning inglizchasi — **as ... as**. Birinchi *as* — \"shunchalik\", ikkinchi *as* — \"...chalik\"." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["Laylo is as tall as Dilnoza.", "This test is as easy as the last one."] },
          bad: { title: "Xato", items: ["Laylo is as taller as Dilnoza.", "This test is as easy than the last one."] },
        },
        { t: "check", ex: { k: "choice", q: "\"Mening uyim seningnikidek katta.\"", opts: ["My house is as big than yours.", "My house is as bigger as yours.", "My house is as big as yours.", "My house is so big as yours."], a: 2, why: "**as + oddiy sifat + as**." } },
      ],
    },
    {
      title: "not as ... as: teng emas",
      blocks: [
        { t: "p", md: "**not as ... as** — \"...chalik emas\". Ikkinchi narsa birinchisidan **kamroq** ekanini bildiradi:" },
        {
          t: "examples", items: [
            { en: "This bag is not as heavy as that one.", uz: "Bu sumka anavichalik og'ir emas." },
            { en: "Bukhara isn't as big as Tashkent.", uz: "Buxoro Toshkentchalik katta emas." },
            { en: "I'm not as tired as I was yesterday.", uz: "Men kechagichalik charchagan emasman." },
          ],
        },
        { t: "p", md: "Bu qolip qiyosiy daraja bilan bir xil ma'noni beradi. Ikkala gap ham to'g'ri:" },
        {
          t: "table", head: ["not as ... as", "qiyosiy daraja"], speak: [0, 1],
          rows: [
            ["The metro isn't as slow as the bus.", "The bus is slower than the metro."],
            ["My brother isn't as tall as me.", "I'm taller than my brother."],
          ],
        },
        { t: "tip", tone: "info", md: "Ba'zan **so** ham ishlatiladi: *It's not **so** cold as yesterday.* Lekin **as ... as** ko'proq uchraydi — shuni ishlating." },
        { t: "check", ex: { k: "fill", q: "Samarkand isn't as modern ___ Tashkent.", a: ["as"], why: "Qolip: *not as ... **as***." } },
        { t: "check", ex: { k: "tf", q: "**Tea is not as expensive as coffee** = Coffee is more expensive than tea.", a: true, why: "Choy kamroq qimmat → qahva qimmatroq." } },
      ],
    },
    {
      title: "The same as; different from; similar to",
      blocks: [
        { t: "p", md: "Narsalarning **bir xil** yoki **boshqacha** ekanini aytish uchun yana qoliplar bor:" },
        {
          t: "table", head: ["Qolip", "Misol", "Ma'nosi"], speak: [1],
          rows: [
            ["the same **as**", "Your bag is the same as mine.", "Sening sumkang meniknidek (bir xil)."],
            ["the same + ot + as", "We are the same age as our cousins.", "Biz amakivachchalarimiz bilan tengdoshmiz."],
            ["different **from**", "My opinion is different from yours.", "Mening fikrim seniknidan farq qiladi."],
            ["similar **to**", "Her dress is similar to mine.", "Uning ko'ylagi meniknaga o'xshash."],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["This is the same as that.", "He is different from his brother.", "Her job is similar to mine."] },
          bad: { title: "Xato", items: ["This is the same with that.", "He is different with his brother.", "Her job is similar with mine."] },
        },
        { t: "tip", tone: "warn", md: "O'zbekchada \"**bilan** bir xil / farq qiladi\" deymiz, shuning uchun *with* aytgingiz keladi. Inglizchada esa: **the same AS**, **different FROM** (inglizcha Britaniya variantida *different to*, amerikada *different than* ham uchraydi), **similar TO**." },
        { t: "check", ex: { k: "choice", q: "\"Mening telefonim seniknidek.\"", opts: ["My phone is the same with yours.", "My phone is the same as yours.", "My phone is same as yours.", "My phone is the same like yours."], a: 1, why: "**the same as** — *the* ni unutmang." } },
        { t: "check", ex: { k: "fill", q: "Life in a village is different ___ life in a city.", a: ["from", "to", "than"], why: "**different from** (Britaniyada *to*, Amerikada *than* ham uchraydi)." } },
      ],
    },
    {
      title: "like va alike; as ... as boshqa ishlatishlari",
      blocks: [
        { t: "p", md: "**like** (ot / olmosh bilan) — \"...ga o'xshab, ...dek\". **alike** esa oxirida keladi va ikki narsa \"bir-biriga o'xshash\" demakdir:" },
        {
          t: "examples", items: [
            { en: "You look like your mother.", uz: "Sen onangga o'xshaysan." },
            { en: "This tastes like my grandma's plov.", uz: "Bu buvimning palovidek mazali." },
            { en: "The two sisters are very alike.", uz: "Ikki opa-singil bir-biriga juda o'xshash." },
          ],
        },
        { t: "p", md: "**as ... as** boshqa foydali iboralarda ham uchraydi:" },
        {
          t: "table", head: ["Ibora", "Ma'nosi", "Misol"], speak: [0],
          rows: [
            ["as soon as possible (ASAP)", "iloji boricha tezroq", "Please call me as soon as possible."],
            ["as much as", "qancha xohlasangiz", "Eat as much as you like."],
            ["twice as ... as", "ikki baravar ...", "This bag is twice as heavy as that one."],
            ["as well as", "... bilan birga, ham", "She speaks English as well as Russian."],
          ],
        },
        { t: "tip", tone: "info", md: "**as** va **like** ni adashtirmang: *as* odatda \"sifatida\" (*He works as a driver.*), *like* esa \"...dek\" (*He drives like a racing driver.*)." },
        { t: "check", ex: { k: "choice", q: "\"U onasiga o'xshaydi.\"", opts: ["She looks as her mother.", "She looks like her mother.", "She looks alike her mother.", "She looks same her mother."], a: 1, why: "**look like** + ot." } },
      ],
    },
    {
      title: "O'qing: Egizaklar",
      blocks: [
        {
          t: "text", title: "Twin sisters",
          en: "Nilufar and Madina are twin sisters. They are the same age, and they look very similar. They have the same black hair and the same brown eyes. But their characters are different. Nilufar is not as shy as Madina. She talks to everybody and she is always in a hurry. Madina is quieter and she is as careful as a teacher. Nilufar loves football, but Madina likes books. They are different from each other, but they are best friends. \"People say we are alike,\" says Madina, \"but I'm not as fast as my sister, and she isn't as patient as I am!\"",
          uz: "Nilufar va Madina egizak opa-singil. Ular tengdosh va bir-biriga juda o'xshash. Ikkalasining sochi qora, ko'zi qo'ng'ir. Lekin xarakterlari boshqacha. Nilufar Madinachalik uyatchan emas. U hamma bilan gaplashadi va doim shoshib yuradi. Madina esa tinchroq, u o'qituvchidek ehtiyotkor. Nilufar futbolni yaxshi ko'radi, Madina esa kitoblarni. Ular bir-biridan farq qiladi, lekin eng yaqin do'st. \"Odamlar bizni o'xshash deydi,\" deydi Madina, \"lekin men opamchalik tez emasman, u esa menchalik sabrli emas!\"",
        },
        { t: "check", ex: { k: "tf", q: "Nilufar is shyer than Madina.", a: false, why: "*Nilufar is not as shy as Madina* → Madina shyer." } },
        { t: "check", ex: { k: "choice", q: "What is the same about the sisters?", opts: ["Their characters.", "Their hobbies.", "Their hair and eyes.", "Their speed."], a: 2, why: "*They have the same black hair and the same brown eyes.*" } },
      ],
    },
    {
      title: "Dialog: ikki telefon",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Aziz", en: "Is your new phone the same as Kamol's?", uz: "Yangi telefoning Kamolnikiga o'xshashmi?" },
            { who: "Laylo", en: "No, it's different from his. It's similar, but mine is not as big.", uz: "Yo'q, uniki bilan farq qiladi. O'xshash, lekin meniki unchalik katta emas." },
            { who: "Aziz", en: "Is it as fast as his?", uz: "Uniki kabi tezmi?" },
            { who: "Laylo", en: "Yes, it's as fast as his, and the camera is just as good.", uz: "Ha, uniki kabi tez, kamerasi ham xuddi shunday yaxshi." },
            { who: "Aziz", en: "Great! Was it as expensive as his?", uz: "Zo'r! Uniki kabi qimmat edimi?" },
            { who: "Laylo", en: "No, it wasn't as expensive. It was much cheaper!", uz: "Yo'q, unchalik qimmat emas edi. Ancha arzon edi!" },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Laylo's phone is as fast as Kamol's phone.", a: true, why: "*It's as fast as his.*" } },
      ],
    },
  ],
  words: [
    { en: "similar", uz: "o'xshash", ipa: "ˈsɪmələ", pos: "adj", ex: "Our jobs are similar.", exUz: "Bizning ishlarimiz o'xshash." },
    { en: "different", uz: "boshqacha, farqli", ipa: "ˈdɪfrənt", pos: "adj", ex: "Life here is different.", exUz: "Bu yerdagi hayot boshqacha." },
    { en: "the same", uz: "bir xil", ipa: "ðə seɪm", pos: "phrase", ex: "We have the same teacher.", exUz: "Bizning o'qituvchimiz bir xil." },
    { en: "alike", uz: "bir-biriga o'xshash", ipa: "əˈlaɪk", pos: "adj", ex: "The two brothers are very alike.", exUz: "Ikki aka-uka bir-biriga juda o'xshash." },
    { en: "twin", uz: "egizak", ipa: "twɪn", pos: "noun", ex: "She has a twin sister.", exUz: "Uning egizak singlisi bor." },
    { en: "opposite", uz: "teskari, qarama-qarshi", ipa: "ˈɒpəzɪt", pos: "adj", ex: "Hot is the opposite of cold.", exUz: "Issiq sovuqning teskarisi." },
    { en: "in common", uz: "umumiy (narsa)", ipa: "ɪn ˈkɒmən", pos: "phrase", ex: "We have a lot in common.", exUz: "Bizda ko'p umumiy narsa bor." },
    { en: "compare", uz: "solishtirmoq", ipa: "kəmˈpeə", pos: "verb", ex: "Let's compare the two phones.", exUz: "Ikki telefonni solishtiraylik." },
    { en: "difference", uz: "farq", ipa: "ˈdɪfrəns", pos: "noun", ex: "What's the difference?", exUz: "Farqi nima?" },
    { en: "equal", uz: "teng", ipa: "ˈiːkwəl", pos: "adj", ex: "The two teams are equal.", exUz: "Ikki jamoa teng." },
  ],
  practice: [
    { k: "match", pairs: [["similar", "o'xshash"], ["different", "boshqacha"], ["twin", "egizak"], ["difference", "farq"], ["compare", "solishtirmoq"]] },
    { k: "match", pairs: [["the same as", "bilan bir xil"], ["different from", "dan farqli"], ["similar to", "ga o'xshash"], ["as ... as", "...chalik"]] },
    { k: "listen", say: "She is as tall as her brother.", opts: ["She is as tall as her brother.", "She is taller than her brother.", "She is not as tall as her brother."], a: 0 },
    { k: "listen", say: "My bag is not the same as yours.", opts: ["My bag is not the same as yours.", "My bag is the same as yours.", "My bag is not as big as yours."], a: 0 },
    { k: "fill", q: "Laylo is as tall ___ Dilnoza.", a: ["as"], why: "**as tall as**." },
    { k: "fill", q: "Bukhara isn't as big ___ Tashkent.", a: ["as"], why: "**not as big as**." },
    { k: "fill", q: "Your bag is the same ___ mine.", a: ["as"], why: "**the same as**." },
    { k: "fill", q: "My opinion is different ___ yours.", a: ["from", "to", "than"], why: "**different from** (*to*, *than* ham uchraydi)." },
    { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["He is as old than me.", "He is as old as me.", "He is so old than me.", "He is same old as me."], a: 1, why: "**as + sifat + as**." },
    { k: "choice", q: "Her dress is similar ___ mine.", opts: ["with", "as", "to", "than"], a: 2, why: "**similar to**." },
    { k: "tf", q: "**This phone isn't as expensive as that one** = That phone is more expensive.", a: true, why: "Birinchisi kamroq qimmat → ikkinchisi qimmatroq." },
    { k: "tf", q: "**the same with** — to'g'ri ibora.", a: false, why: "To'g'risi: **the same as**." },
    { k: "order", uz: "Mening telefonim seniknidek tez.", words: ["My", "phone", "is", "as", "fast", "as", "yours."], extra: ["faster", "than"] },
    { k: "translate", uz: "Bu savol anavisidek oson.", a: ["This question is as easy as that one.", "This question is as easy as that.", "This question is as easy as the other one."] },
    { k: "speak", say: "My sister is not as tall as me, but she is as clever as me.", uz: "Singlim mendek baland emas, lekin men kabi aqlli." },
  ],
  quiz: [
    { k: "choice", q: "Samarkand is not ___ big as Tashkent.", opts: ["more", "as", "than", "so much"], a: 1, why: "**not as big as**." },
    { k: "choice", q: "\"U akasidan farq qiladi.\"", opts: ["He is different with his brother.", "He is different from his brother.", "He is the same as his brother.", "He is different as his brother."], a: 1, why: "**different from**." },
    { k: "choice", q: "\"Mening ismim seniknidek.\"", opts: ["My name is the same as yours.", "My name is same like yours.", "My name is as same as yours.", "My name is the same with yours."], a: 0 },
    { k: "fill", q: "She looks ___ her mother. (o'xshaydi)", a: ["like"], why: "**look like** + ot." },
    { k: "fill", q: "This test wasn't as difficult ___ the last one.", a: ["as"], why: "**not as ... as**." },
    { k: "listen", say: "I have a lot in common with my sister.", opts: ["I have a lot in common with my sister.", "I have a lot of coffee with my sister.", "I am a lot common to my sister."], a: 0 },
    { k: "tf", q: "**as taller as** — to'g'ri shakl.", a: false, why: "**as ... as** orasida oddiy sifat: **as tall as**." },
    { k: "tf", q: "**Tea is as popular as coffee** — ikkalasi ham bir xil ommabop.", a: true },
    { k: "order", uz: "Bu menikidan farq qiladi.", words: ["It", "is", "different", "from", "mine."], extra: ["with", "same"] },
    { k: "translate", uz: "Uning ishi meniki kabi qiyin emas.", a: ["His job is not as difficult as mine.", "His job isn't as difficult as mine.", "His job is not as hard as mine.", "His job isn't as hard as mine.", "Her job is not as difficult as mine.", "Her job isn't as difficult as mine.", "Her job is not as hard as mine.", "Her job isn't as hard as mine."] },
  ],
  summary: [
    "**as + sifat + as** — tenglik: *Aziz is as tall as Kamol.* Sifat o'zgarmaydi: ❌ *as taller as*.",
    "**not as + sifat + as** — \"...chalik emas\": *Bukhara isn't as big as Tashkent.* (= *Tashkent is bigger.*)",
    "**the same as**, **different from**, **similar to** — ❌ *same with, different with, similar with*.",
    "**look like** — o'xshamoq: *You look like your mother.* **alike** — *The two sisters are alike.*",
    "Foydali iboralar: **as soon as possible**, **as much as you like**, **twice as ... as**.",
  ],
  homework: "O'zingiz va yaqin do'stingiz (yoki akangiz / singlingiz) haqida 8 ta gap yozing: 3 ta **as ... as**, 2 ta **not as ... as**, 2 ta **the same as / different from / similar to**, 1 ta **look like**. Misol: *My brother is not as tall as me, but he is as clever as me.*",
};

export default lesson;
