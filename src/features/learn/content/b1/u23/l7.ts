import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u23-l7",
  title: "Writing an opinion essay",
  titleUz: "Yozish: fikr bildiruvchi esse",
  goal: "120-180 so'zlik **fikr bildiruvchi esse** yozasiz: kirish, ikkita asosiy abzats va xulosa; bog'lovchi so'zlar va rasmiy uslubni ishlatasiz (*In my opinion, Firstly, However, In conclusion*), *from one side* kabi xatolardan qochasiz.",
  slides: [
    {
      title: "Esse tuzilmasi",
      blocks: [
        { t: "p", md: "Fikr bildiruvchi esse (*opinion essay*) IELTS va universitet imtihonlarida ham uchraydi. Unda savolga **o'z fikringizni** aytasiz va uni asoslaysiz. Eng yaxshi tuzilma — to'rt abzats:" },
        {
          t: "table", head: ["Abzats", "Nima yoziladi", "Taxminiy hajm"],
          rows: [
            ["1. Introduction", "Mavzu + sizning fikringiz", "2-3 gap"],
            ["2. Body 1", "Birinchi sabab + misol", "3-4 gap"],
            ["3. Body 2", "Ikkinchi sabab + misol (yoki qarama-qarshi fikr)", "3-4 gap"],
            ["4. Conclusion", "Fikrni boshqa so'zlar bilan takrorlash", "2 gap"],
          ],
        },
        { t: "tip", tone: "info", md: "Har bir abzatsda **bitta asosiy fikr** bo'lsin. Abzats **topic sentence** (asosiy fikr gapi) bilan boshlanadi, keyin tushuntirish va misol keladi." },
        { t: "check", ex: { k: "choice", q: "Where do you write your own opinion for the first time?", opts: ["In the introduction", "Only in the conclusion", "Never", "In the last body paragraph"], a: 0, why: "Fikringizni **introduction** da aytasiz, conclusion da esa takrorlaysiz." } },
      ],
    },
    {
      title: "Kirish va fikr bildirish",
      blocks: [
        { t: "p", md: "Kirishda avval savoldagi mavzuni **o'z so'zlaringiz bilan** (paraphrase) yozing, keyin fikringizni ayting. Savolni so'zma-so'z ko'chirmang." },
        {
          t: "examples", items: [
            { en: "Some people believe that homework should be banned.", uz: "Ba'zi odamlar uy vazifasini taqiqlash kerak deb hisoblaydi.", note: "Mavzuni tanishtirish." },
            { en: "It is often said that children learn better without homework.", uz: "Ko'pincha bolalar uy vazifasiz yaxshiroq o'rganadi, deyiladi." },
            { en: "In my opinion, this idea is wrong.", uz: "Mening fikrimcha, bu g'oya noto'g'ri.", note: "Fikringiz." },
            { en: "I strongly believe that homework is useful if it is short.", uz: "Men uy vazifasi qisqa bo'lsa foydali ekaniga qattiq ishonaman." },
          ],
        },
        { t: "tip", tone: "good", md: "Esseda **I think** o'rniga **In my opinion, I believe, In my view** yaxshiroq. Ular *I think* dan rasmiyroq." },
        { t: "check", ex: { k: "fill", q: "It is often ___ that money brings happiness.", a: ["said"], uz: "Ko'pincha pul baxt keltiradi, deyiladi.", why: "**It is often said that…** — esse boshlanishi." } },
      ],
    },
    {
      title: "Asosiy abzatslar va bog'lovchilar",
      blocks: [
        { t: "p", md: "Abzats ichida gaplar bir-biri bilan **bog'lovchi so'zlar** orqali bog'lanadi. Siz ularni oldingi darsda o'rgandingiz; endi esseda ishlating:" },
        {
          t: "table", head: ["Vazifa", "So'zlar"], speak: [1],
          rows: [
            ["Tartib", "Firstly, Secondly, Finally"],
            ["Misol", "For example, For instance"],
            ["Qo'shish", "In addition, Moreover"],
            ["Qarama-qarshilik", "However, On the other hand"],
            ["Natija", "Therefore, As a result"],
          ],
        },
        {
          t: "examples", items: [
            { en: "Firstly, homework teaches children to work alone.", uz: "Birinchidan, uy vazifasi bolalarga mustaqil ishlashni o'rgatadi.", note: "Topic sentence." },
            { en: "For example, a child who writes a short report learns to plan his time.", uz: "Masalan, qisqa hisobot yozgan bola vaqtini rejalashtirishni o'rganadi.", note: "Misol." },
            { en: "However, too much homework makes children tired.", uz: "Biroq, haddan tashqari ko'p uy vazifasi bolalarni charchatadi.", note: "Qarama-qarshi fikr." },
          ],
        },
        { t: "tip", tone: "warn", md: "Bog'lovchi so'zdan keyin odatda **vergul** qo'yiladi: *However, …*, *For example, …*. O'zbek tilida «bir tomondan … ikkinchi tomondan» deymiz, inglizchada **On the one hand … on the other hand**. *From one side … from other side* — xato." },
        { t: "check", ex: { k: "choice", q: "___ , a short walk every day improves your mood.", opts: ["For example", "On the contrary of", "From one side", "In the other hand"], a: 0, why: "Misol keltirishda **For example,** yoziladi." } },
        { t: "check", ex: { k: "fix", wrong: "From one side, cars are fast. From other side, they cause pollution.", a: ["On the one hand, cars are fast. On the other hand, they cause pollution."], hint: "On the one hand … on the other hand", why: "Ikki tomonni taqqoslash: **On the one hand … on the other hand**." } },
      ],
    },
    {
      title: "Rasmiy uslub va xulosa",
      blocks: [
        { t: "p", md: "Esse — rasmiy matn. Do'stingizga yozgan xabar kabi emas. Quyidagi farqlarga e'tibor bering:" },
        {
          t: "compare",
          good: { title: "Rasmiy (esse)", items: ["Many people believe that…", "children", "I do not agree with this idea.", "It is difficult to say."] },
          bad: { title: "Norasmiy (xabar)", items: ["Loads of people think that…", "kids", "I don't agree with this idea.", "It's hard to say, you know."] },
        },
        { t: "tip", tone: "info", md: "Esseda odatda **qisqartmalar** (*don't, can't, it's*) ishlatilmaydi. Savol belgilari va undov belgilari ham kam. Ikkinchi shaxs (*you*) o'rniga **people** yoki **many students** deymiz." },
        { t: "p", md: "**Xulosa** (conclusion) — yangi fikr qo'shilmaydi. Boshlang'ich fikringizni boshqa so'zlar bilan takrorlaysiz:" },
        {
          t: "examples", items: [
            { en: "In conclusion, I believe that short homework is useful for students.", uz: "Xulosa qilib aytganda, qisqa uy vazifasi o'quvchilar uchun foydali deb hisoblayman." },
            { en: "To sum up, schools should keep homework, but teachers must not give too much.", uz: "Xulosa qilib aytsam, maktablar uy vazifasini saqlashi kerak, lekin o'qituvchilar juda ko'p bermasligi lozim." },
          ],
        },
        { t: "check", ex: { k: "tf", q: "A conclusion should introduce a completely new idea.", a: false, why: "Xulosada yangi fikr qo'shilmaydi: asosiy fikr takrorlanadi." } },
      ],
    },
    {
      title: "O'qing: namunaviy esse",
      blocks: [
        {
          t: "text", title: "Should children have smartphones?",
          en: "Some people think that children should not use smartphones until they are sixteen. In my opinion, this idea is too strict. Firstly, phones help children to learn. For example, they can use dictionaries and educational apps. In addition, a phone allows parents to contact their children, which makes families feel safer. However, I agree that children often spend too much time on screens. Therefore, parents should set clear rules, such as no phones at dinner. In conclusion, I believe that smartphones are useful if children use them sensibly. Families should teach good habits instead of banning phones.",
          uz: "Ba'zi odamlar bolalar o'n olti yoshga to'lgunga qadar smartfondan foydalanmasligi kerak deb o'ylaydi. Mening fikrimcha, bu g'oya juda qattiqqo'l. Birinchidan, telefonlar bolalarning o'rganishiga yordam beradi. Masalan, ular lug'atlar va o'quv ilovalaridan foydalanishi mumkin. Bundan tashqari, telefon ota-onalarga bolalari bilan bog'lanish imkonini beradi, bu esa oilalarni xavfsizroq his qildiradi. Biroq, bolalar ko'pincha ekranda haddan tashqari ko'p vaqt o'tkazishiga roziman. Shuning uchun ota-onalar aniq qoidalar o'rnatishi kerak, masalan, kechki ovqatda telefon yo'q. Xulosa qilib aytganda, bolalar telefondan oqilona foydalansa, smartfonlar foydali deb hisoblayman. Oilalar telefonni taqiqlash o'rniga yaxshi odatlarni o'rgatishi kerak.",
        },
        { t: "check", ex: { k: "choice", q: "What is the writer's opinion?", opts: ["Smartphones are useful if children use them sensibly.", "Children must never use smartphones.", "Parents should not set any rules.", "Phones are only for adults."], a: 0, why: "Xulosada: *smartphones are useful if children use them sensibly.*" } },
        { t: "check", ex: { k: "tf", q: "The writer gives only one reason in favour of phones.", a: false, why: "Ikkita sabab bor: o'rganish (*learn*) va oila xavfsizligi (*contact their children*)." } },
      ],
    },
    {
      title: "Tekshirish va dialog",
      blocks: [
        { t: "p", md: "Yozib bo'lgach, esseni **bir marta** diqqat bilan qayta o'qing (*proofread*). Quyidagilarni tekshiring:" },
        {
          t: "table", head: ["Savol", "Nimani tekshirasiz"],
          rows: [
            ["Fikr", "Fikrim kirishda va xulosada aniq yozilganmi?"],
            ["Abzatslar", "Har abzatsda bitta fikr va bitta misol bormi?"],
            ["Bog'lovchilar", "Firstly, However, Therefore kabi so'zlar bormi?"],
            ["Uslub", "Qisqartma (*don't*) va norasmiy so'zlar yo'qmi?"],
            ["Grammatika", "Zamonlar, artikllar (*a, the*), -s qo'shimchasi to'g'rimi?"],
          ],
        },
        {
          t: "dialog", lines: [
            { who: "Nilufar", en: "Jack, could you read my essay? I have written the first draft.", uz: "Jack, esseimni o'qib bera olasanmi? Birinchi qoralamani yozdim." },
            { who: "Jack", en: "Sure. It's good, but your conclusion is too short. Add one more sentence.", uz: "Albatta. Yaxshi, lekin xulosang juda qisqa. Yana bitta gap qo'sh." },
            { who: "Nilufar", en: "Should I use more linking words?", uz: "Ko'proq bog'lovchi so'zlar ishlatishim kerakmi?" },
            { who: "Jack", en: "Yes. Use however and for example. Also, do not use short forms like don't in an essay.", uz: "Ha. However va for example ishlat. Esseda don't kabi qisqartmalar ishlatma." },
            { who: "Nilufar", en: "Thanks. I'll proofread it again tonight.", uz: "Rahmat. Bugun kechqurun uni yana tekshiraman." },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Jack says Nilufar should use short forms like don't in her essay.", a: false, why: "Jack aksincha: esseda qisqartmalar ishlatilmaydi." } },
      ],
    },
  ],
  words: [
    { en: "paragraph", uz: "abzats", ipa: "ˈpær.ə.ɡrɑːf", pos: "noun", ex: "Each paragraph has one main idea.", exUz: "Har bir abzatsda bitta asosiy fikr bor." },
    { en: "introduction", uz: "kirish", ipa: "ˌɪn.trəˈdʌk.ʃən", pos: "noun", ex: "Write a short introduction first.", exUz: "Avval qisqa kirish yozing." },
    { en: "outline", uz: "reja, qisqa tuzilma; reja tuzmoq", ipa: "ˈaʊt.laɪn", pos: "noun", ex: "Write an outline before you start the essay.", exUz: "Esseni boshlashdan oldin reja tuzing." },
    { en: "topic sentence", uz: "abzatsning bosh gapi", ipa: "ˈtɒp.ɪk ˌsen.təns", pos: "noun", ex: "The topic sentence tells us what the paragraph is about.", exUz: "Bosh gap abzats nima haqida ekanini aytadi." },
    { en: "balanced", uz: "muvozanatli, xolis", ipa: "ˈbæl.ənst", pos: "adj", ex: "A balanced essay shows both sides.", exUz: "Xolis esse ikkala tomonni ko'rsatadi." },
    { en: "formal", uz: "rasmiy", ipa: "ˈfɔː.məl", pos: "adj", ex: "Use formal language in an essay.", exUz: "Esseda rasmiy tildan foydalaning." },
    { en: "firstly", uz: "birinchidan", ipa: "ˈfɜːst.li", pos: "adv", ex: "Firstly, I would like to explain why this matters.", exUz: "Birinchidan, bu nega muhimligini tushuntirmoqchiman." },
    { en: "to sum up", uz: "xulosa qilib aytganda", ipa: "tə ˈsʌm ʌp", pos: "phrase", ex: "To sum up, both sides have good arguments.", exUz: "Xulosa qilib aytganda, ikkala tomonning ham yaxshi dalillari bor." },
    { en: "for instance", uz: "masalan", ipa: "fər ˈɪn.stəns", pos: "phrase", ex: "Many cities have problems, for instance traffic and noise.", exUz: "Ko'p shaharlarda muammolar bor, masalan tirbandlik va shovqin." },
    { en: "proofread", uz: "xatolarni tekshirib o'qimoq", ipa: "ˈpruːf.riːd", pos: "verb", ex: "Always proofread your work before you send it.", exUz: "Yuborishdan oldin ishingizni doim tekshirib chiqing." },
  ],
  practice: [
    { k: "match", pairs: [["paragraph", "abzats"], ["introduction", "kirish"], ["conclusion", "xulosa"], ["draft", "qoralama"], ["persuade", "ishontirmoq"]] },
    { k: "choice", q: "Which expression is best for a formal essay?", opts: ["In my opinion", "I dunno", "Loads of people", "You know what"], a: 0, why: "Esseda **In my opinion** kabi rasmiy iboralar ishlatiladi." },
    { k: "choice", q: "Which word is formal?", opts: ["children", "kids", "guys", "little ones"], a: 0, why: "Esseda **children**; *kids* norasmiy." },
    { k: "choice", q: "The conclusion of an essay should", opts: ["repeat your main opinion in different words.", "add a completely new argument.", "ask the reader five questions.", "copy the first sentence exactly."], a: 0, why: "Xulosa asosiy fikrni boshqa so'zlar bilan takrorlaydi." },
    { k: "fill", q: "___, homework teaches children to work alone. (birinchidan)", a: ["Firstly", "First", "Firstly,", "First,"], uz: "Birinchidan, uy vazifasi bolalarni mustaqil ishlashga o'rgatadi.", why: "**Firstly** — birinchi sabab." },
    { k: "fill", q: "Many students are tired. ___, schools should start later. (shuning uchun)", a: ["Therefore", "Therefore,", "As a result", "As a result,"], uz: "Ko'p o'quvchilar charchagan. Shuning uchun maktablar kechroq boshlanishi kerak.", why: "Natijani **Therefore** bildiradi." },
    { k: "fill", q: "I strongly ___ that the city needs more parks.", a: ["believe"], uz: "Men shaharga ko'proq parklar kerakligiga qattiq ishonaman.", why: "**I strongly believe that…** — fikr bildirish." },
    { k: "listen", say: "In conclusion, I believe that this idea is useful.", opts: ["In conclusion, I believe that this idea is useful.", "In addition, I believe that this idea is useful.", "In conclusion, I believe that this idea is useless.", "In conclusion, I believed that this idea is useful."], a: 0 },
    { k: "dictation", say: "However, too much homework makes children tired.", uz: "Biroq, haddan tashqari ko'p uy vazifasi bolalarni charchatadi." },
    { k: "order", uz: "Mening fikrimcha, bu g'oya juda qattiqqo'l.", words: ["In", "my", "opinion,", "this", "idea", "is", "too", "strict."], extra: ["on", "much"] },
    { k: "order", uz: "Masalan, bola lug'atdan foydalanishi mumkin.", words: ["For", "example,", "a", "child", "can", "use", "a", "dictionary."], extra: ["the", "using"] },
    { k: "fix", wrong: "Kids don't need long homework.", a: ["Children do not need long homework.", "Children do not need much homework."], hint: "Rasmiy uslub", why: "Esseda *kids* va qisqartma o'rniga **children** va **do not**." },
    { k: "fix", wrong: "From one side, cities are exciting. From other side, they are expensive.", a: ["On the one hand, cities are exciting. On the other hand, they are expensive.", "On the one hand, cities are exciting, but on the other hand, they are expensive."], hint: "On the one hand", why: "**On the one hand … on the other hand** deymiz." },
    { k: "tf", q: "In an essay you can write **don't** and **can't** because it is easier.", a: false, why: "Esseda qisqartmalar odatda yozilmaydi: *do not, cannot*." },
    { k: "translate", uz: "Xulosa qilib aytganda, men bu fikrga qo'shilaman.", a: ["In conclusion, I agree with this idea.", "To sum up, I agree with this idea.", "In conclusion, I agree with this view.", "To sum up, I agree with this view."], why: "Xulosa ibora + fikr." },
    { k: "speak", say: "In my opinion, a short essay needs a clear introduction and conclusion.", uz: "Mening fikrimcha, qisqa esseda aniq kirish va xulosa bo'lishi kerak." },
  ],
  quiz: [
    { k: "choice", q: "Which sentence is the best topic sentence for a paragraph about sport?", opts: ["Firstly, regular sport improves health.", "Sport, you know.", "I like football a lot, lol.", "Because sport."], a: 0, why: "Topic sentence aniq fikrni beradi." },
    { k: "choice", q: "___, many young people spend too much time online.", opts: ["However", "From one side", "Also but", "In the other hand"], a: 0, why: "Qarama-qarshilik uchun **However,**." },
    { k: "choice", q: "A balanced essay", opts: ["shows more than one side of the question.", "has no opinion at all.", "is always very long.", "uses only short forms."], a: 0, why: "**balanced** — ikkala tomonni ko'rsatadi." },
    { k: "fill", q: "Students should ___ their essay before they hand it in.", a: ["proofread"], uz: "O'quvchilar topshirishdan oldin esselarini tekshirib chiqishi kerak.", why: "**proofread** — xatolarni tekshirmoq." },
    { k: "fill", q: "Each ___ should have one main idea.", a: ["paragraph"], uz: "Har bir abzatsda bitta asosiy fikr bo'lishi kerak.", why: "**paragraph** — abzats." },
    { k: "fill", q: "It is ___ said that money cannot buy happiness.", a: ["often", "sometimes", "commonly", "usually"], uz: "Ko'pincha pul baxt sotib ololmaydi, deyiladi.", why: "**It is often said that…** — kirish uchun qolip." },
    { k: "listen", say: "Moreover, public transport reduces pollution.", opts: ["Moreover, public transport reduces pollution.", "However, public transport reduces pollution.", "Moreover, public transport produces pollution.", "Moreover, private transport reduces pollution."], a: 0 },
    { k: "tf", q: "A good conclusion usually repeats the opinion from the introduction.", a: true, why: "Xulosa asosiy fikrni boshqa so'zlar bilan takrorlaydi." },
    { k: "order", uz: "Shuning uchun ota-onalar qoidalar o'rnatishi kerak.", words: ["Therefore,", "parents", "should", "set", "rules."], extra: ["setting", "However,"] },
    { k: "translate", uz: "Umuman olganda, men bu g'oyani qo'llab-quvvatlayman.", a: ["Overall, I support this idea.", "Overall, I agree with this idea.", "Overall, I am in favour of this idea.", "Overall, I am in favor of this idea."], why: "**Overall** — umuman olganda." },
  ],
  summary: [
    "Esse tuzilmasi: **introduction** (mavzu + fikr), ikkita **body** abzats (sabab + misol), **conclusion** (fikrni takrorlash, yangi fikr yo'q).",
    "Fikr bildirish: *In my opinion… I strongly believe that… It is often said that…*",
    "Bog'lovchilar: *Firstly, For example, In addition, However, Therefore, In conclusion.* Xato: ~~from one side~~ → **On the one hand**.",
    "Rasmiy uslub: qisqartma (*don't*) va norasmiy so'zlar (*kids, loads of*) ishlatilmaydi.",
    "Yozgach, **proofread**: fikr, abzatslar, bog'lovchilar, uslub, grammatika.",
  ],
  homework: "«Should students wear school uniforms?» savoliga 120-150 so'zlik esse yozing: kirish, ikkita asosiy abzats, xulosa. Keyin yuqoridagi tekshiruv jadvali bo'yicha uni bir marta qayta o'qing va xatolarni tuzating.",
};

export default lesson;
