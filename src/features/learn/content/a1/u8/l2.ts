import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u8-l2",
  title: "a lot of, a few, a little, no",
  titleUz: "Miqdor: a lot of, a few, a little, no",
  goal: "Miqdorni aniq aytasiz: **a lot of** (ko'p), **a few / a little** (bir nechta / ozgina), **not many / not much** (ko'p emas) va **no** (umuman yo'q) — qaysi biri sanaladigan, qaysi biri sanalmaydigan ot bilan kelishini adashtirmaysiz.",
  slides: [
    {
      title: "Takrorlash: a lot of — hammasiga",
      blocks: [
        { t: "p", md: "Beginner darajasida **many** (sanaladigan) va **much** (sanalmaydigan) ni o'rgandik. Eslatma: ijobiy gapda odatda **a lot of** (yoki **lots of**) ishlatiladi — u **ikkala** tur bilan ham ishlaydi:" },
        {
          t: "examples", items: [
            { en: "We have a lot of potatoes.", uz: "Bizda kartoshka ko'p.", note: "sanaladigan (potatoes)" },
            { en: "There's a lot of rice in the cupboard.", uz: "Shkafda guruch ko'p.", note: "sanalmaydigan (rice)" },
            { en: "She drinks lots of tea.", uz: "U ko'p choy ichadi.", note: "**lots of** = a lot of (og'zaki)" },
            { en: "We don't have many eggs. / We don't have much milk.", uz: "Bizda tuxum ko'p emas. / Sut ko'p emas." },
          ],
        },
        { t: "tip", tone: "warn", md: "**a lot of** — uchta so'z, **a** ni tushirib qoldirmang: *We have lot of apples* ❌ → *We have **a lot of** apples* ✅. **lots of** da esa **a** yo'q: *lots of apples* ✅, *a lots of* ❌." },
        { t: "check", ex: { k: "choice", q: "\"Bizda pomidor ko'p.\"", opts: ["We have a lot of tomatoes.", "We have lot of tomatoes.", "We have a lots of tomatoes.", "We have much tomatoes."], a: 0, why: "Ijobiy gapda **a lot of** — eng tabiiy variant. *much* ijobiy gapda va sanaladigan ot bilan ishlatilmaydi." } },
      ],
    },
    {
      title: "a few va a little — \"ozgina\"",
      blocks: [
        { t: "p", md: "O'zbekchada \"bir nechta\" ham, \"ozgina\" ham deymiz. Inglizchada ham ikkita so'z bor va ular **ot turiga** qarab tanlanadi:" },
        {
          t: "table", head: ["So'z", "Qaysi ot bilan?", "Misol"],
          rows: [
            ["a few", "sanaladigan, ko'plik (-s)", "a few eggs, a few onions, a few friends"],
            ["a little", "sanalmaydigan", "a little sugar, a little milk, a little time"],
          ],
          speak: [0, 2],
        },
        {
          t: "examples", items: [
            { en: "Can I have a few grapes?", uz: "Bir nechta uzum olsam bo'ladimi?" },
            { en: "Add a little salt to the soup.", uz: "Sho'rvaga ozgina tuz qo'shing." },
            { en: "I've got a few questions.", uz: "Bir nechta savolim bor." },
            { en: "We have a little time before the film.", uz: "Kinodan oldin ozgina vaqtimiz bor." },
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["a few apples", "a little water", "a few minutes", "a little money"] },
          bad: { title: "Xato", items: ["a few water", "a little apples", "a little minutes", "a few money"] },
        },
        { t: "tip", tone: "info", md: "Yodlash uchun: **a few** — \"bir nechta\" (sanab chiqsa bo'ladi: *eggs, minutes*), **a little** — \"ozgina\" (sanab bo'lmaydi: suv, vaqt, pul). Diqqat: **money** va **time** inglizchada sanalmaydi!\n\n*I speak English **a little**.* — bu yerda *a little* fe'ldan keyin keladi va \"biroz\" degani." },
        { t: "check", ex: { k: "fill", q: "Can I have a ___ milk in my coffee, please?", a: ["little"], uz: "Qahvamga ozgina sut qo'shsangiz bo'ladimi?", why: "**milk** sanalmaydi → **a little milk**." } },
      ],
    },
    {
      title: "no = umuman yo'q",
      blocks: [
        { t: "p", md: "**no + ot** = \"hech qanday … yo'q\". Ma'nosi **not any** bilan bir xil, lekin fe'l **ijobiy** shaklda qoladi:" },
        {
          t: "table", head: ["no bilan", "not any bilan", "O'zbekcha"],
          rows: [
            ["There's no milk.", "There isn't any milk.", "Sut yo'q."],
            ["There are no carrots.", "There aren't any carrots.", "Sabzi yo'q."],
            ["We have no bread.", "We don't have any bread.", "Bizda non yo'q."],
            ["I have no time.", "I don't have any time.", "Vaqtim yo'q."],
          ],
          speak: [0, 1],
        },
        { t: "tip", tone: "warn", md: "O'zbekchada \"hech narsa **yo'q**\" — ikki inkor normal. Inglizchada esa **bitta gapda bitta inkor**!\n*There isn't no milk* ❌ → *There's **no** milk* ✅ yoki *There **isn't any** milk* ✅." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["There are no eggs.", "We don't have any eggs.", "I have no money."] },
          bad: { title: "Xato", items: ["There aren't no eggs.", "We don't have no eggs.", "I have no any money."] },
        },
        { t: "check", ex: { k: "choice", q: "Qaysi gap **to'g'ri**?", opts: ["There isn't no sugar.", "There is no sugar.", "There is no any sugar.", "There no sugar."], a: 1, why: "**no** bilan fe'l ijobiy: **There is no sugar.** = *There isn't any sugar.*" } },
      ],
    },
    {
      title: "Miqdor shkalasi: ko'pdan yo'qgacha",
      blocks: [
        {
          t: "table", head: ["Miqdor", "Sanaladigan (eggs)", "Sanalmaydigan (milk)"],
          rows: [
            ["ko'p", "a lot of eggs", "a lot of milk"],
            ["biroz, bir nechta", "some eggs / a few eggs", "some milk / a little milk"],
            ["ko'p emas", "not many eggs", "not much milk"],
            ["umuman yo'q", "no eggs / not any eggs", "no milk / not any milk"],
          ],
          speak: [1, 2],
        },
        { t: "p", md: "Savol va qisqa javob:" },
        {
          t: "dialog", lines: [
            { who: "A", en: "How many onions do we have?", uz: "Bizda nechta piyoz bor?" },
            { who: "B", en: "Only a few. Three, I think.", uz: "Bir nechtagina. Menimcha, uchta." },
            { who: "A", en: "And how much butter is there?", uz: "Sariyog'-chi, qancha bor?" },
            { who: "B", en: "Not much. Just a little.", uz: "Ko'p emas. Ozginagina." },
            { who: "A", en: "And meat?", uz: "Go'sht-chi?" },
            { who: "B", en: "None! We need to buy some.", uz: "Umuman yo'q! Sotib olishimiz kerak." },
          ],
        },
        { t: "tip", tone: "good", md: "Qisqa javobda ot takrorlanmaydi: **A lot. / A few. / A little. / Not many. / Not much.** \"Umuman yo'q\" — **None.** (*No.* emas)." },
        { t: "check", ex: { k: "choice", q: "\"How much money have you got?\" — \"Not ___. Only five dollars.\"", opts: ["many", "much", "few", "no"], a: 1, why: "**money** sanalmaydi → **not much**." } },
      ],
    },
    {
      title: "Talaffuz: a lot of, a few, a little",
      blocks: [
        {
          t: "sounds", items: [
            { label: "a lot of", say: "a lot of carrots", uz: "**\"ə lotəv\"** — uchta so'z bitta bo'lib aytiladi; *of* kuchsiz.", examples: ["a lot of", "a lot of carrots"] },
            { label: "a few", say: "a few eggs", uz: "**\"ə fyu:\"** — *few* da \"yu:\" tovushi bor, \"fe:\" emas.", examples: ["a few", "a few eggs"] },
            { label: "a little", say: "a little water", uz: "**\"ə litl\"** — oxiri \"tl\", \"litle\" emas.", examples: ["a little", "a little water"] },
            { label: "onion", say: "onion", uz: "**\"anyən\"** — birinchi harf *o*, lekin \"a\" deb o'qiladi!", examples: ["onion", "two onions"] },
            { label: "potato", say: "potato", uz: "**\"pə-TEY-təu\"** — urg'u o'rtada.", examples: ["potato", "potatoes"] },
          ],
        },
        { t: "check", ex: { k: "listen", say: "There are a few onions in the bag.", opts: ["There are a few onions in the bag.", "There are no onions in the bag.", "There are a lot of onions in the bag."], a: 0, why: "\"ə fyu:\" — **a few** (bir nechta)." } },
      ],
    },
    {
      title: "O'qing: mehmonlar soat yettida",
      blocks: [
        {
          t: "text", title: "Guests at seven",
          en: "It's five o'clock on Friday. Sardor's friends are coming for dinner at seven, and he wants to make plov. He opens the fridge. Oh no! It's almost empty. There's a little butter, a few eggs and no meat at all. In the cupboard there's a lot of rice, but there are only two onions and no carrots. Plov needs a lot of carrots!\nSardor takes a bag and runs to the market. He buys a kilo of meat, two kilos of carrots and a few onions. When he gets home, it's six o'clock. He has only a little time, but he isn't worried. His plov is always delicious.",
          uz: "Juma, soat besh. Sardorning do'stlari soat yettida kechki ovqatga kelishyapti, u esa palov qilmoqchi. U muzlatkichni ochadi. Voy! U deyarli bo'sh. Ozgina sariyog', bir nechta tuxum bor, go'sht esa umuman yo'q. Shkafda guruch ko'p, lekin bor-yo'g'i ikkita piyoz bor, sabzi esa yo'q. Palovga ko'p sabzi kerak!\nSardor sumka olib bozorga yuguradi. U bir kilo go'sht, ikki kilo sabzi va bir nechta piyoz sotib oladi. Uyga kelganda soat olti bo'ladi. Vaqti ozgina qolgan, lekin u xavotir olmaydi. Uning palovi doim mazali bo'ladi.",
        },
        { t: "check", ex: { k: "tf", q: "Sardorning shkafida guruch ko'p, lekin sabzi yo'q.", a: true, why: "*there's a lot of rice, but … no carrots*." } },
        { t: "check", ex: { k: "choice", q: "What is in the fridge?", opts: ["a lot of meat and a few eggs", "a little butter and a few eggs", "a few butter and a little eggs"], a: 1, why: "*There's a little butter, a few eggs and no meat at all.*" } },
      ],
    },
    {
      title: "Dialog: xarid ro'yxati",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Lola", en: "I'm going to the supermarket. Do we need anything?", uz: "Supermarketga ketyapman. Bizga biror narsa kerakmi?" },
            { who: "Kamola", en: "Let me check. We've got a lot of pasta, but there's no cheese.", uz: "Tekshirib ko'ray. Makaron ko'p, lekin pishloq yo'q." },
            { who: "Lola", en: "OK, cheese. What about fruit?", uz: "Xo'p, pishloq. Mevalar-chi?" },
            { who: "Kamola", en: "There are only a few apples. Get a bunch of bananas too.", uz: "Bir nechtagina olma bor. Bir bosh banan ham ol." },
            { who: "Lola", en: "And coffee? I drink a lot of coffee!", uz: "Qahva-chi? Men qahvani ko'p ichaman!" },
            { who: "Kamola", en: "There's a little coffee, but not much. Buy a packet.", uz: "Ozgina qahva bor, lekin ko'p emas. Bir pachka ol." },
            { who: "Lola", en: "Great. Have we got enough money for all that?", uz: "Zo'r. Hammasiga pulimiz yetadimi?" },
            { who: "Kamola", en: "Yes, don't worry.", uz: "Ha, xavotir olma." },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Kamolaning aytishicha, uyda qahva umuman yo'q.", a: false, why: "*There's a little coffee, but not much.* — ozgina bor." } },
      ],
    },
  ],
  words: [
    { en: "onion", uz: "piyoz", ipa: "ˈʌn.jən", pos: "noun (countable)", ex: "Plov needs a lot of onions.", exUz: "Palovga ko'p piyoz kerak." },
    { en: "carrot", uz: "sabzi", ipa: "ˈkær.ət", pos: "noun (countable)", ex: "There are no carrots in the fridge.", exUz: "Muzlatkichda sabzi yo'q." },
    { en: "potato", uz: "kartoshka", ipa: "pəˈteɪ.təʊ", pos: "noun (countable)", ex: "We have a lot of potatoes.", exUz: "Bizda kartoshka ko'p." },
    { en: "tomato", uz: "pomidor", ipa: "təˈmɑː.təʊ", pos: "noun (countable)", ex: "Can I have a few tomatoes?", exUz: "Bir nechta pomidor olsam bo'ladimi?" },
    { en: "nuts", uz: "yong'oq (har xil)", ipa: "nʌts", pos: "noun (plural)", ex: "I eat a few nuts every morning.", exUz: "Har tong bir nechta yong'oq yeyman." },
    { en: "pepper", uz: "murch; qalampir", ipa: "ˈpep.ə", pos: "noun", ex: "Add a little salt and pepper.", exUz: "Ozgina tuz va murch qo'shing." },
    { en: "cupboard", uz: "shkaf (oshxona javoni)", ipa: "ˈkʌb.əd", pos: "noun", ex: "The rice is in the cupboard.", exUz: "Guruch shkafda." },
    { en: "empty", uz: "bo'sh", ipa: "ˈemp.ti", pos: "adjective", ex: "The fridge is almost empty.", exUz: "Muzlatkich deyarli bo'sh." },
    { en: "enough", uz: "yetarli", ipa: "ɪˈnʌf", pos: "adjective / adverb", ex: "Have we got enough eggs?", exUz: "Tuxumimiz yetarlimi?" },
    { en: "only", uz: "faqat, bor-yo'g'i", ipa: "ˈəʊn.li", pos: "adverb", ex: "There are only two onions.", exUz: "Bor-yo'g'i ikkita piyoz bor." },
  ],
  practice: [
    { k: "choice", q: "There are ___ apples in the bowl.", opts: ["a few", "a little", "much"], a: 0, why: "**apples** — sanaladigan ko'plik → **a few**." },
    { k: "choice", q: "Please add ___ salt.", opts: ["a few", "a little", "many"], a: 1, why: "**salt** sanalmaydi → **a little**." },
    { k: "choice", q: "Qaysi gap **xato**?", opts: ["We have a lot of rice.", "We have a few rice.", "We have a little rice.", "We have no rice."], a: 1, why: "**rice** sanalmaydi, shuning uchun *a few rice* bo'lmaydi." },
    { k: "fill", q: "We have ___ eggs. Let's go to the shop.", a: ["no"], uz: "Bizda tuxum yo'q. Do'konga boraylik.", why: "**no + ot**, fe'l ijobiy: *We have no eggs.*" },
    { k: "fill", q: "I eat a ___ of fruit every day.", a: ["lot"], uz: "Men har kuni ko'p meva yeyman." },
    { k: "fill", q: "I've got a ___ friends in London.", a: ["few"], uz: "Londonda bir nechta do'stim bor.", why: "**friends** sanaladi → **a few**." },
    { k: "fill", q: "Hurry up! We've only got a ___ time.", a: ["little"], uz: "Tezroq! Vaqtimiz ozgina qoldi.", why: "**time** sanalmaydi → **a little time**." },
    { k: "tf", q: "**There isn't no milk.** — to'g'ri gap.", a: false, why: "Ikki inkor bo'lmaydi: *There's no milk* yoki *There isn't any milk*." },
    { k: "tf", q: "**money** sanalmaydi, shuning uchun **a little money** deymiz.", a: true },
    { k: "match", pairs: [["a few", "bir nechta"], ["a little", "ozgina"], ["a lot of", "ko'p"], ["no", "hech qanday … yo'q"], ["not many", "ko'p emas (sanaladigan)"]] },
    { k: "order", uz: "Muzlatkichda ozgina pishloq bor.", words: ["There", "is", "a", "little", "cheese", "in", "the", "fridge."], extra: ["few", "are"], why: "**cheese** sanalmaydi → **a little**, **is**." },
    { k: "order", uz: "Bizda kartoshka ko'p, lekin piyoz kam.", words: ["We", "have", "a", "lot", "of", "potatoes,", "but", "not", "many", "onions."], extra: ["much", "few"], why: "**onions** sanaladi → **not many**." },
    { k: "translate", uz: "Uyda non yo'q.", a: ["There is no bread at home", "There's no bread at home", "There isn't any bread at home", "There is not any bread at home", "We have no bread at home", "We don't have any bread at home", "We do not have any bread at home", "We haven't got any bread at home", "There is no bread in the house", "There's no bread in the house"] },
    { k: "translate", uz: "Men ozgina inglizcha gapiraman.", a: ["I speak a little English", "I speak English a little", "I can speak a little English", "I can speak English a little"] },
    { k: "listen", say: "Only a little sugar, please.", opts: ["Only a little sugar, please.", "Only a few sugar, please.", "Only a lot of sugar, please."], a: 0 },
    { k: "speak", say: "We've got a lot of potatoes, but only a few onions.", uz: "Bizda kartoshka ko'p, lekin bir nechtagina piyoz bor." },
  ],
  quiz: [
    { k: "choice", q: "I need ___ salt for the soup.", opts: ["a little", "a few", "many"], a: 0 },
    { k: "choice", q: "She has ___ friends in Tashkent — four or five.", opts: ["a little", "a few", "much", "no"], a: 1, why: "**friends** sanaladi, 4–5 ta → **a few**." },
    { k: "choice", q: "\"Bizda shakar yo'q.\"", opts: ["We have no sugar.", "We have not sugar.", "We haven't no sugar.", "We have no any sugar."], a: 0, why: "**no + ot**: *We have no sugar.* (= *We don't have any sugar.*)" },
    { k: "choice", q: "\"How many eggs are there?\" — \"Not ___.\"", opts: ["much", "many", "little"], a: 1, why: "**eggs** sanaladi → **not many**." },
    { k: "fill", q: "There are a ___ of tomatoes in the fridge.", a: ["lot"], uz: "Muzlatkichda pomidor ko'p." },
    { k: "fill", q: "There isn't ___ milk. The fridge is empty.", a: ["any"], uz: "Sut umuman yo'q. Muzlatkich bo'sh.", why: "Inkor gapda **not any** = no." },
    { k: "tf", q: "**a few** sanaladigan ko'plik ot bilan, **a little** esa sanalmaydigan ot bilan ishlatiladi.", a: true },
    { k: "match", pairs: [["onion", "piyoz"], ["carrot", "sabzi"], ["potato", "kartoshka"], ["cupboard", "oshxona shkafi"], ["empty", "bo'sh"]] },
    { k: "translate", uz: "Bizda kartoshka ko'p.", a: ["We have a lot of potatoes", "We have lots of potatoes", "We've got a lot of potatoes", "We have got a lot of potatoes", "We've got lots of potatoes", "We have got lots of potatoes", "We have many potatoes", "There are a lot of potatoes", "There are lots of potatoes"] },
    { k: "order", uz: "Choyimga ozgina asal qo'shaman.", words: ["I", "put", "a", "little", "honey", "in", "my", "tea."], extra: ["few", "honeys"] },
  ],
  summary: [
    "**a lot of / lots of** — ko'p, ikkala tur bilan: *a lot of eggs, a lot of milk*.",
    "**a few** + sanaladigan ko'plik (*a few eggs*), **a little** + sanalmaydigan (*a little milk, a little time*).",
    "**not many** (sanaladigan) / **not much** (sanalmaydigan) — ko'p emas.",
    "**no + ot** = not any: *There's no milk.* Bitta gapda bitta inkor — *There isn't no…* ❌.",
  ],
  homework: "Muzlatkich va shkafingizdagi 8 ta mahsulot haqida gap yozing: *There's a lot of rice. There are a few eggs. There's no butter.* Keyin do'stingizga 3 ta savol bering: *How many…? How much…?* — va qisqa javob bering: *A few. / Not much. / None.*",
};

export default lesson;
