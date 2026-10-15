import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u21-l4",
  title: "Articles and determiners",
  titleUz: "Artikl va aniqlovchilar: a, the, artikl yo'q; some, any, much, many",
  goal: "**a / an / the** va **artiklsiz** holatlarni to'g'ri tanlaysiz, sanaladigan va sanalmaydigan otlarni farqlaysiz va **some, any, much, many, a few, a little, enough** so'zlarini ishlatasiz. **an advice** va **informations** kabi xatolardan qochasiz.",
  slides: [
    {
      title: "A, an yoki the?",
      blocks: [
        { t: "p", md: "O'zbek tilida artikl yo'q, shuning uchun bu mavzu o'zbek o'quvchilar uchun eng qiyinlaridan biri. Asosiy g'oya oddiy: **a / an** — «biror, bitta» (tinglovchi bilmaydi), **the** — «o'sha aniq» (ikkalamiz ham bilamiz)." },
        {
          t: "table", head: ["Artikl", "Qachon", "Misol"], speak: [2],
          rows: [
            ["a / an", "birinchi marta aytilganda", "I bought a jacket and a hat."],
            ["the", "ikkinchi marta yoki ikkalamiz bilgan narsa", "The jacket was expensive."],
            ["the", "dunyoda yagona narsa", "The sun rises in the east."],
            ["the", "oliy daraja va tartib son", "She is the best student. It's the first door."],
            ["a / an", "kasb va kim ekani", "My father is an engineer."],
          ],
        },
        { t: "tip", tone: "warn", md: "**a / an** ni **yozuvga emas, tovushga** qarab tanlang. Unli tovush bilan boshlansa **an**: *an apple, an hour* (h aytilmaydi). Undosh tovush bilan boshlansa **a**: *a university* (yu- tovushi), *a European*." },
        { t: "check", ex: { k: "choice", q: "She is studying at ___ university in London.", opts: ["a", "an", "the", "no article"], a: 0, why: "*University* — **yu-** undosh tovush bilan boshlanadi → **a**." } },
        { t: "check", ex: { k: "choice", q: "I saw a dog. ___ dog was very big.", opts: ["The", "A", "An", "No article"], a: 0, why: "Ikkinchi marta, o'sha it → **The**." } },
      ],
    },
    {
      title: "Artikl kerak emas",
      blocks: [
        { t: "p", md: "Ba'zan hech qanday artikl ishlatilmaydi (**zero article**). Mana asosiy hollar:" },
        {
          t: "table", head: ["Holat", "Misol"],
          rows: [
            ["Umuman olganda ko'plik ot", "Books are expensive. I like dogs."],
            ["Umuman olganda sanalmaydigan ot", "Music helps me relax. Water is important."],
            ["Ovqat nomlari", "I have breakfast at seven."],
            ["Tillar, ko'pchilik mamlakatlar", "She speaks English. He lives in Uzbekistan."],
            ["go to school, work, bed, university (asosiy vazifasi uchun)", "I go to work by bus. The children are at school."],
          ],
        },
        { t: "p", md: "**The** ni ba'zi nomlar bilan yodlab oling: *the UK, the USA, the Alps, the Pacific Ocean, the Volga*. Alohida tog' va ko'llar odatda artiklsiz: *Mount Everest, Lake Baikal*." },
        { t: "tip", tone: "warn", md: "Umumiy fikr aytilsa **the** kerak emas: *Life is short* (hayot qisqa). Aniq narsa bo'lsa kerak: *The life of a student is busy* (talabaning hayoti)." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I go to school by bus.", "I love music.", "She speaks English well."] },
          bad: { title: "Xato", items: ["I go to the school by bus. (o'quvchi sifatida)", "I love the music. (umuman)", "She speaks the English well."] },
        },
        { t: "check", ex: { k: "fix", wrong: "I have the breakfast at seven.", a: ["I have breakfast at seven."], hint: "ovqat nomi", why: "Ovqat nomlari odatda artiklsiz: **have breakfast**." } },
        { t: "check", ex: { k: "choice", q: "Which sentence is correct?", opts: ["Dogs need exercise.", "The dogs need the exercise.", "A dogs need exercise.", "Dogs needs exercise."], a: 0, why: "Umuman it haqida: ko'plik, artiklsiz → **Dogs need exercise.**" } },
      ],
    },
    {
      title: "Sanaladigan va sanalmaydigan otlar",
      blocks: [
        { t: "p", md: "**Sanaladigan** otni sanash mumkin (*one book, two books*) va u ko'plik oladi. **Sanalmaydigan** otni sanab bo'lmaydi (*water, music, time*), uning ko'plik shakli yo'q va fe'l birlikda turadi." },
        { t: "p", md: "Quyidagi otlar o'zbek tilida sanaladigandek tuyulsa ham, inglizchada **sanalmaydigan**: **advice, information, furniture, equipment, luggage, news, progress, research, knowledge**." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["She gave me some advice.", "I need some information.", "The furniture is new.", "The news is good."] },
          bad: { title: "Xato", items: ["She gave me an advice.", "I need some informations.", "The furnitures are new.", "The news are good."] },
        },
        { t: "tip", tone: "good", md: "Bittasini aytmoqchi bo'lsangiz **a piece of** ishlating: *a piece of advice, a piece of information, a piece of furniture*." },
        {
          t: "table", head: ["", "Sanaladigan (ko'plik)", "Sanalmaydigan"],
          rows: [
            ["Ko'p", "many books", "much money"],
            ["Biroz (darak)", "some books", "some money"],
            ["Savol va inkor", "any books", "any money"],
            ["Ikkalasi ham", "a lot of books, plenty of books", "a lot of money, plenty of money"],
          ],
        },
        { t: "check", ex: { k: "choice", q: "How ___ luggage have you got?", opts: ["much", "many", "a few", "several"], a: 0, why: "**Luggage** — sanalmaydigan ot → **much**." } },
        { t: "check", ex: { k: "fill", q: "There aren't ___ chairs in the room.", a: ["any"], why: "Inkor gap + ko'plik → **any**." } },
      ],
    },
    {
      title: "A few, few, a little, little, enough",
      blocks: [
        { t: "p", md: "Bu so'zlar miqdorni bildiradi. Ularning ma'nosi **a** bor-yo'qligiga qarab o'zgaradi." },
        {
          t: "table", head: ["So'z", "Qaysi otlar bilan", "Ma'nosi", "Misol"], speak: [3],
          rows: [
            ["a few", "sanaladigan", "bir nechta (yetarli)", "I have a few friends in Leeds."],
            ["few", "sanaladigan", "juda kam (yetishmaydi)", "Few people came to the meeting."],
            ["a little", "sanalmaydigan", "ozgina (yetarli)", "There is a little milk left."],
            ["little", "sanalmaydigan", "juda oz (yetishmaydi)", "We have little time."],
            ["enough", "ikkalasi", "yetarli", "Do we have enough chairs?"],
          ],
        },
        { t: "tip", tone: "info", md: "**a few / a little** — ijobiy (borini aytyapmiz). **few / little** — salbiy (kam, yetmayapti). **several** — bir nechta (*a few* dan sal ko'proq), faqat sanaladigan otlar bilan." },
        { t: "check", ex: { k: "choice", q: "Hurry up! We have only ___ minutes.", opts: ["a few", "a little", "much", "little"], a: 0, why: "*Minutes* — sanaladigan → **a few**." } },
        { t: "check", ex: { k: "fill", q: "Can I have ___ sugar in my tea, please? Just a little.", a: ["some"], why: "Taklif yoki iltimosda darak gap kabi **some** ishlatiladi." } },
      ],
    },
    {
      title: "O'qing: Yangi kvartira",
      blocks: [
        {
          t: "text", title: "Moving into a new flat",
          en: "Last month I moved into a new flat. It is on the second floor, and the kitchen is the biggest room. I don't have much furniture yet, only a bed, a table and a few chairs. My friend gave me some good advice: buy things slowly. I have plenty of boxes, but I haven't unpacked them. I need more equipment for the kitchen, but I have very little money at the moment. Luckily, the neighbours are friendly. One of them lent me a lamp, and another gave me some useful information about the local shops.",
          uz: "O'tgan oy yangi kvartiraga ko'chib o'tdim. U ikkinchi qavatda, oshxona eng katta xona. Hozircha mebelim ko'p emas: faqat karavot, stol va bir nechta stul. Do'stim menga yaxshi maslahat berdi: narsalarni sekin sotib ol. Menda qutilar ko'p, lekin ularni hali ochmaganman. Oshxona uchun ko'proq jihoz kerak, lekin hozir pulim juda oz. Yaxshiyamki, qo'shnilar ochiq ko'ngil. Biri menga chiroq qarz berdi, boshqasi mahalliy do'konlar haqida foydali ma'lumot berdi.",
        },
        { t: "check", ex: { k: "tf", q: "The writer has a lot of furniture.", a: false, why: "*I don't have much furniture yet* — mebel kam." } },
        { t: "check", ex: { k: "choice", q: "What did the friend give the writer?", opts: ["Some good advice", "A lamp", "Some boxes", "Some money"], a: 0, why: "*My friend gave me some good advice.*" } },
      ],
    },
    {
      title: "Dialog: Ko'chib o'tish",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Sara", en: "Aziz, how much luggage have you got?", uz: "Aziz, qancha yukingiz bor?" },
            { who: "Aziz", en: "Not much. Just two suitcases and a few boxes of books.", uz: "Ko'p emas. Faqat ikkita chamadon va bir nechta quti kitob." },
            { who: "Sara", en: "Great. Is there any furniture in the new flat?", uz: "Ajoyib. Yangi kvartirada mebel bormi?" },
            { who: "Aziz", en: "Yes, there is a sofa and a table. We need some more chairs, though.", uz: "Ha, divan va stol bor. Lekin yana bir nechta stul kerak." },
            { who: "Sara", en: "I can ask my cousin. He has plenty of old chairs.", uz: "Amakivachchamdan so'rayman. Uning eski stullari ko'p." },
            { who: "Aziz", en: "That would be great. Thanks for the advice and the help!", uz: "Zo'r bo'lardi. Maslahat va yordam uchun rahmat!" },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Aziz has a lot of luggage.", a: false, why: "*Not much* — yuki oz: ikkita chamadon va bir necha quti." } },
      ],
    },
  ],
  words: [
    { en: "advice", uz: "maslahat", ipa: "ədˈvaɪs", pos: "noun", ex: "Can I ask you for some advice?", exUz: "Sizdan maslahat so'rasam bo'ladimi?" },
    { en: "information", uz: "ma'lumot", ipa: "ˌɪn.fəˈmeɪ.ʃən", pos: "noun", ex: "I need more information about the course.", exUz: "Kurs haqida ko'proq ma'lumot kerak." },
    { en: "furniture", uz: "mebel", ipa: "ˈfɜː.nɪ.tʃər", pos: "noun", ex: "We bought some new furniture for the living room.", exUz: "Mehmonxona uchun yangi mebel sotib oldik." },
    { en: "equipment", uz: "jihoz, uskunalar", ipa: "ɪˈkwɪp.mənt", pos: "noun", ex: "The gym has modern equipment.", exUz: "Sport zalida zamonaviy jihozlar bor." },
    { en: "luggage", uz: "yuk, bagaj", ipa: "ˈlʌɡ.ɪdʒ", pos: "noun", ex: "Please leave your luggage at the hotel.", exUz: "Iltimos, yukingizni mehmonxonada qoldiring." },
    { en: "progress", uz: "taraqqiyot, yutuq", ipa: "ˈprəʊ.ɡres", pos: "noun", ex: "You are making good progress in English.", exUz: "Inglizchada yaxshi o'sib borayapsiz." },
    { en: "research", uz: "tadqiqot", ipa: "rɪˈsɜːtʃ", pos: "noun", ex: "Scientists are doing research on healthy food.", exUz: "Olimlar sog'lom ovqat bo'yicha tadqiqot olib borishmoqda." },
    { en: "knowledge", uz: "bilim", ipa: "ˈnɒl.ɪdʒ", pos: "noun", ex: "She has a good knowledge of history.", exUz: "U tarixni yaxshi biladi." },
    { en: "plenty of", uz: "yetarlicha, ko'p", ipa: "ˈplen.ti əv", pos: "phrase", ex: "We have plenty of time before the train.", exUz: "Poyezdgacha vaqtimiz yetarli." },
    { en: "several", uz: "bir nechta", ipa: "ˈsev.ər.əl", pos: "det", ex: "I called her several times, but she didn't answer.", exUz: "Unga bir necha marta qo'ng'iroq qildim, lekin javob bermadi." },
  ],
  practice: [
    { k: "choice", q: "I bought a jacket and a hat. ___ jacket was expensive.", opts: ["The", "A", "An", "No article"], a: 0, why: "Ikkinchi marta aytilgan → **The**." },
    { k: "choice", q: "I usually have ___ breakfast at seven.", opts: ["no article", "a", "an", "the"], a: 0, why: "Ovqat nomlari artiklsiz: **have breakfast**." },
    { k: "choice", q: "Can you give me ___ advice about my CV?", opts: ["some", "an", "many", "a few"], a: 0, why: "**Advice** — sanalmaydigan: **some advice**." },
    { k: "choice", q: "How ___ money do you need?", opts: ["much", "many", "a few", "several"], a: 0, why: "**Money** — sanalmaydigan → **much**." },
    { k: "listen", say: "I need some information about the course.", opts: ["I need some information about the course.", "I need some informations about the course.", "I need an information about the course.", "I need many information about the course."], a: 0, why: "**Information** — sanalmaydigan, ko'plik shakli yo'q." },
    { k: "fill", q: "There isn't ___ milk in the fridge.", a: ["any"], uz: "Muzlatgichda sut yo'q.", why: "Inkor gap → **any**." },
    { k: "fill", q: "Hurry up! We have only a ___ minutes.", a: ["few"], uz: "Shoshiling! Bizda atigi bir necha daqiqa bor.", why: "Sanaladigan ko'plik → **a few**." },
    { k: "fill", q: "She is ___ engineer at a big company.", a: ["an"], uz: "U katta kompaniyada muhandis.", why: "Unli tovush (engineer) → **an**." },
    { k: "order", uz: "Ular menga yaxshi maslahat berishdi.", words: ["They", "gave", "me", "some", "good", "advice."], extra: ["an", "advices"], why: "**advice** — sanalmaydigan, **some advice**." },
    { k: "order", uz: "Sizda qancha yuk bor?", words: ["How", "much", "luggage", "do", "you", "have?"], extra: ["many", "luggages"], why: "**Luggage** — sanalmaydigan: **how much**." },
    { k: "translate", uz: "Menga yangi mebel kerak.", a: ["I need some new furniture.", "I need new furniture.", "I need some furniture.", "I need furniture."], why: "**Furniture** — sanalmaydigan, ko'plik shakli yo'q." },
    { k: "translate", uz: "Uning maslahati juda foydali edi.", a: ["His advice was very useful.", "Her advice was very useful.", "His advice was really useful.", "Her advice was really useful."], why: "**Advice** sanalmaydigan: **was** (birlik fe'l)." },
    { k: "fix", wrong: "She gave me an advice.", a: ["She gave me some advice.", "She gave me advice.", "She gave me a piece of advice."], hint: "advice sanalmaydi", why: "**Advice** bilan *an* ishlatilmaydi: **some advice / a piece of advice**." },
    { k: "fix", wrong: "I have two informations for you.", a: ["I have some information for you.", "I have two pieces of information for you.", "I have information for you."], hint: "information ko'plik olmaydi", why: "**Information** ko'plik olmaydi; sanash uchun **pieces of**." },
    { k: "fix", wrong: "I go to the school by bus every day.", a: ["I go to school by bus every day."], hint: "o'qish uchun", why: "O'quvchi sifatida **go to school** — artiklsiz." },
    { k: "match", pairs: [["advice", "maslahat"], ["luggage", "yuk, bagaj"], ["furniture", "mebel"], ["equipment", "jihoz"], ["knowledge", "bilim"]] },
    { k: "tf", q: "**Informations** — *information* so'zining to'g'ri ko'plik shakli.", a: false, why: "**Information** sanalmaydigan, ko'plik shakli yo'q." },
    { k: "speak", say: "I need some advice and a little more information.", uz: "Menga maslahat va yana ozgina ma'lumot kerak." },
  ],
  quiz: [
    { k: "choice", q: "Tashkent is ___ capital of Uzbekistan.", opts: ["the", "a", "an", "no article"], a: 0, why: "Yagona narsa → **the**." },
    { k: "choice", q: "I'd like ___ apple, please.", opts: ["an", "a", "the", "some"], a: 0, why: "Unli tovush (apple) → **an**." },
    { k: "choice", q: "There are ___ chairs in the room, so we can all sit down.", opts: ["several", "much", "a little", "an"], a: 0, why: "Sanaladigan ko'plik → **several**." },
    { k: "choice", q: "How ___ time do we have before the film?", opts: ["much", "many", "a few", "several"], a: 0, why: "**Time** — sanalmaydigan → **much**." },
    { k: "fill", q: "I'm not hungry. I don't want ___ food.", a: ["any"], uz: "Men och emasman. Ovqat xohlamayman.", why: "Inkor gap → **any**." },
    { k: "fill", q: "He has very ___ friends, so he feels lonely.", a: ["few"], uz: "Uning do'stlari juda kam, shuning uchun yolg'iz sezadi.", why: "Kam, yetishmaydi → **few** (sanaladigan ko'plik)." },
    { k: "order", uz: "Bizda juda kam vaqt bor.", words: ["We", "have", "very", "little", "time."], extra: ["few", "a"], why: "**Time** sanalmaydigan, kam → **little**." },
    { k: "translate", uz: "Stolda bir nechta kitob bor.", a: ["There are a few books on the table.", "There are some books on the table.", "There are several books on the table."], why: "Sanaladigan ko'plik → **a few / some / several**." },
    { k: "fix", wrong: "I have a lot of informations.", a: ["I have a lot of information."], hint: "information ko'plik olmaydi", why: "**Information** ko'plik olmaydi." },
    { k: "tf", q: "*The news is good* gapida **is** to'g'ri.", a: true, why: "**News** sanalmaydigan: birlik fe'l bilan keladi." },
  ],
  summary: [
    "**a / an** — birinchi marta, bitta, kasb; tovushga qarang: *an hour, a university*. **the** — ikkalamiz bilgan, ikkinchi marta, yagona, oliy daraja.",
    "**Artiklsiz**: umumiy ko'plik va sanalmaydigan otlar (*Books are expensive*), ovqat nomlari, tillar, *go to school / work / bed*.",
    "**Sanalmaydigan** otlar: *advice, information, furniture, equipment, luggage, news, progress, research, knowledge*. Ko'plik shakli yo'q, **a piece of** bilan sanaladi.",
    "Sanaladigan ko'plik: **many, a few, few, several**. Sanalmaydigan: **much, a little, little**. Ikkalasi bilan: **some, any, a lot of, plenty of, enough**.",
    "**some** — darak gap va taklif; **any** — savol va inkor. **a few / a little** — yetarli; **few / little** — kam.",
  ],
  homework: "Yangi uyingiz yoki xonangizni 8 ta gap bilan ta'riflang: *There is a…, The … is big, I have a lot of…, I don't have much…, I need some…*. Har bir gapda artikl va **some / any / much / many** to'g'ri ishlatilganini tekshiring.",
};

export default lesson;
