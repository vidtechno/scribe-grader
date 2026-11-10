import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u26-l3",
  title: "Causative: have / get something done",
  titleUz: "Causative: have / get something done, make / let / allow",
  goal: "**Causative** tuzilmalarni ishlatasiz: *I had my hair cut. I'm getting my laptop repaired. She had her bag stolen.* Shuningdek **make / let / allow / force / enable** qoliplarini to'g'ri tuzasiz va **I cut my hair** (boshqa odam kesgan bo'lsa), **made me to wait** kabi xatolardan qochasiz.",
  slides: [
    {
      title: "Causative nima uchun kerak?",
      blocks: [
        { t: "p", md: "O'zbek tilida «soch oldirdim, telefonimni ta'mirlatdim, kostyum tikdirdim» deymiz: ishni **boshqa odam** qilgan, biz esa uni **tashkil qilganmiz**. Inglizchada buning uchun alohida qolip bor — **causative**." },
        {
          t: "table", head: ["Qolip", "Misol", "Ma'no"], speak: [1],
          rows: [
            ["have + object + V3", "I had my hair cut.", "Soch oldirdim (mutaxassis qildi)"],
            ["get + object + V3", "I got my laptop repaired.", "Noutbukni ta'mirlatdim (norasmiyroq)"],
          ],
        },
        { t: "p", md: "**Object** (*my hair, my laptop*) ikkita fe'l orasiga o'tadi, fe'l esa doim **V3**. Zamon **have / get** da ko'rinadi." },
        {
          t: "table", head: ["Zamon", "Misol"], speak: [1],
          rows: [
            ["Present Simple", "She has her nails done every month."],
            ["Present Continuous", "I'm having my car serviced this afternoon."],
            ["Past Simple", "We had the kitchen painted last spring."],
            ["Present Perfect", "I've had my phone insured."],
            ["Future / infinitive", "I need to get my passport renewed."],
          ],
        },
        { t: "tip", tone: "info", md: "**have** — neutral va rasmiyroq, **get** — gaplashuvda ko'proq. Ma'no deyarli bir xil: *I had my car washed* = *I got my car washed*." },
        { t: "check", ex: { k: "choice", q: "Qaysi gap «boshqa odam ta'mirladi» ma'nosini beradi?", opts: ["I repaired my bike.", "I had my bike repaired.", "My bike is repairing.", "I have repaired bike."], a: 1, why: "**have + object + V3** — ishni boshqa odam bajargan." } },
      ],
    },
    {
      title: "Xizmat va yomon tajriba: ikki ma'no",
      blocks: [
        { t: "p", md: "Bir xil qolip ikkita ma'noda ishlatiladi:" },
        {
          t: "table", head: ["Ma'no", "Misol"], speak: [1],
          rows: [
            ["**Xizmat** (o'zimiz tashkil qilamiz)", "I had my suit tailored for the wedding."],
            ["**Yomon tajriba** (o'zimizga yoqmagan voqea)", "She had her wallet stolen on the way to the airport."],
            ["**Yomon tajriba**", "He had his licence taken away for speeding."],
            ["**Epchillik:** ishni bajara olmoq (*get* bilan)", "I finally got the report finished."],
          ],
        },
        { t: "p", md: "Ikkinchi ma'noda biz **ishni xohlamaganmiz**. Passive fikr beradi, lekin **have** gapda egasini ko'rsatadi: *kimning* hamyoni, *kimning* ruxsatnomasi." },
        {
          t: "examples", items: [
            { en: "We had our house broken into last year.", uz: "O'tgan yili uyimizga o'g'ri tushdi.", note: "Yomon tajriba." },
            { en: "I got my hair done before the party.", uz: "Bazmdan oldin soch turmaktirdim.", note: "Xizmat." },
            { en: "She got her bag snatched outside the station.", uz: "Bekat oldida sumkasini tortib olishdi.", note: "Norasmiy yomon tajriba (get)." },
          ],
        },
        { t: "tip", tone: "warn", md: "**I had stolen my bag** — boshqa ma'no beradi: «men sumkamni o'g'irlagan edim» (Past Perfect). Tartib shart: **have + object + V3** (*I had my bag stolen*)." },
        { t: "check", ex: { k: "fill", q: "She ___ her wallet stolen on the way to the airport. (past)", a: ["had", "got"], why: "Yomon tajriba, o'tgan zamon: **had / got** her wallet stolen." } },
        { t: "check", ex: { k: "tf", q: "*We had our house broken into.* — bu gap uyga kirishni biz buyurganimizni bildiradi.", a: false, why: "Bu **yomon tajriba**: biz xohlamagan, boshqalar qilgan." } },
      ],
    },
    {
      title: "have / get someone to do something",
      blocks: [
        { t: "p", md: "Agar ishni **kim bajarishini** aytmoqchi bo'lsak, boshqa qolip ishlatamiz:" },
        {
          t: "table", head: ["Qolip", "Misol", "Eslatma"], speak: [1],
          rows: [
            ["have + kim + **V** (to'siz)", "I had the mechanic check the brakes.", "Neytral, buyurish yoki xizmat"],
            ["get + kim + **to V**", "I got my brother to help me move.", "Ko'ndirish, tayyorlash"],
            ["make + kim + **V**", "The boss made us rewrite the report.", "Majburlash"],
            ["let + kim + **V**", "My parents let me stay out late.", "Ruxsat"],
          ],
        },
        { t: "tip", tone: "info", md: "**have someone do** va **get someone to do** — ma'no yaqin, lekin *get* ko'pincha «ko'ndirish, harakat qilish» ma'nosini beradi: *I got him to apologise* (ko'ndirdim) va *I had him apologise* (buyurdim)." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I got my brother to fix my bike.", "I had my brother fix my bike.", "I had my bike fixed."] },
          bad: { title: "Xato", items: ["I got my brother fix my bike.", "I had my brother to fix my bike.", "I had my bike fix."] },
        },
        { t: "check", ex: { k: "choice", q: "I finally ___ my sister to help me with the project.", opts: ["got", "let", "had to", "made to"], a: 0, why: "**get + kim + to V**: *I got my sister to help me.*" } },
        { t: "check", ex: { k: "fill", q: "The doctor had the nurse ___ my blood pressure. (check)", a: ["check"], why: "**have + kim + V (to'siz)**: *had the nurse check*." } },
      ],
    },
    {
      title: "make, let, allow, force, enable",
      blocks: [
        { t: "p", md: "Bu fe'llar ham «kimdir boshqa odamni biror ishga undaydi» ma'nosini beradi, lekin qoliplari har xil:" },
        {
          t: "table", head: ["Fe'l", "Qolip", "Misol"], speak: [2],
          rows: [
            ["make", "make + kim + **V**", "The coach made us run ten laps."],
            ["let", "let + kim + **V**", "She let me borrow her laptop."],
            ["allow", "allow + kim + **to V**", "The school allows students to use phones."],
            ["force", "force + kim + **to V**", "Bad weather forced them to cancel the match."],
            ["enable", "enable + kim + **to V**", "This app enables you to back up your photos."],
            ["require", "require + kim + **to V**", "The law requires companies to protect data."],
          ],
        },
        { t: "p", md: "Passive'da **make** o'zgaradi: *The coach made us run* → *We were made to run* (**to** paydo bo'ladi). **let** passive bo'lmaydi: *We were allowed to leave*." },
        {
          t: "examples", items: [
            { en: "The company made all employees attend the training.", uz: "Kompaniya barcha xodimlarni treningda qatnashishga majbur qildi." },
            { en: "All employees were made to attend the training.", uz: "Barcha xodimlar treningda qatnashishga majbur qilindi." },
            { en: "Visitors are not allowed to take photos here.", uz: "Mehmonlarga bu yerda rasmga tushish mumkin emas." },
          ],
        },
        { t: "tip", tone: "warn", md: "**make** va **let** dan keyin **to** kerak emas (*made me wait*, *let me go*), lekin **allow, force, enable, require** dan keyin **to** kerak (*allowed me to go*)." },
        { t: "check", ex: { k: "choice", q: "The teacher ___ us to leave early because of the storm.", opts: ["let", "made", "allowed", "had"], a: 2, why: "**allow + kim + to V**. *let/made/had* dan keyin **to** kelmaydi." } },
        { t: "check", ex: { k: "choice", q: "She ___ made to pay the fine.", opts: ["was", "had", "got", "let"], a: 0, why: "Passive: **was made to pay**." } },
      ],
    },
    {
      title: "Tipik xatolar: o'zbek tilidan interferensiya",
      blocks: [
        { t: "p", md: "O'zbek tilida «ta'mirlatdim» tarjimasi bitta fe'l. Natijada o'quvchilar *I repaired* yoki noto'g'ri tartib yozadilar." },
        {
          t: "compare",
          good: { title: "1. Tartib: have + object + V3", items: ["I need to have my phone repaired.", "She had her hair cut.", "We're having the flat painted."] },
          bad: { title: "Xato", items: ["I need to have repaired my phone.", "She had cut her hair. (boshqa ma'no)", "We're having painted the flat."] },
        },
        { t: "check", ex: { k: "fix", wrong: "I need to have repaired my phone.", a: ["I need to have my phone repaired.", "I need to get my phone repaired."], hint: "have + object + V3", why: "Object **ikkita fe'l orasida**: *have my phone repaired*." } },
        {
          t: "compare",
          good: { title: "2. Yomon tajriba", items: ["She had her phone stolen on the bus.", "We had our car damaged in the car park."] },
          bad: { title: "Xato", items: ["She had her phone steal on the bus.", "We had our car damage in the car park."] },
        },
        { t: "check", ex: { k: "fix", wrong: "She had her phone steal on the bus.", a: ["She had her phone stolen on the bus.", "She got her phone stolen on the bus."], hint: "V3 kerak", why: "Causative'da fe'l **V3**: *stolen*." } },
        {
          t: "compare",
          good: { title: "3. make / let — to yo'q", items: ["My boss made me stay late.", "My parents let me go out."] },
          bad: { title: "Xato", items: ["My boss made me to stay late.", "My parents let me to go out."] },
        },
        { t: "check", ex: { k: "fix", wrong: "My boss made me to stay late yesterday.", a: ["My boss made me stay late yesterday."], hint: "make + V", why: "**make + kim + V** (to'siz)." } },
        {
          t: "compare",
          good: { title: "4. allow / get — to bor", items: ["The school doesn't allow students to use phones.", "I got my brother to help me."] },
          bad: { title: "Xato", items: ["The school doesn't allow students use phones.", "I got my brother help me."] },
        },
        { t: "check", ex: { k: "fix", wrong: "The school doesn't allow students use phones in class.", a: ["The school doesn't allow students to use phones in class."], hint: "allow + to", why: "**allow + kim + to V**." } },
      ],
    },
    {
      title: "O'qing: Qimmat oy",
      blocks: [
        {
          t: "text", title: "An expensive month", voice: "emma",
          en: "Last month was a busy one for me. My laptop kept freezing, so I had it diagnosed at a service centre, and the technician advised me to have it upgraded. While it was being overhauled, I had my phone insured, because I never want to pay for a new one again. The worst part came on the way home: I had my bag stolen on the bus. The police made me fill in a long form, but they let me keep a copy. My bank got the card cancelled within ten minutes, which I really appreciated. Now I have decided to get all my files backed up every Friday, and I am even thinking of having my keys engraved with my name and my phone case customised.",
          uz: "O'tgan oy men uchun band o'tdi. Noutbukim qotib qolaverdi, shuning uchun uni servis markazida tekshirtirdim va texnik uni yangilatishni maslahat berdi. U to'liq ta'mirlanayotganda telefonimni sug'urtalatdim, chunki yangisini qayta sotib olishni xohlamayman. Eng yomoni uyga qaytayotganda bo'ldi: avtobusda sumkamni o'g'irlatib qo'ydim. Politsiya meni uzun anketa to'ldirishga majbur qildi, lekin nusxasini olib qolishga ruxsat berdi. Bankim kartani o'n daqiqa ichida bekor qildirdi, buni juda qadrladim. Endi har juma kuni hamma fayllarimni zaxiralashga qaror qildim va hatto kalitlarimga ismimni o'yib yozdirishni, telefon g'ilofimni esa o'zimga moslashtirtirishni o'ylayapman.",
        },
        { t: "check", ex: { k: "tf", q: "The writer repaired the laptop herself.", a: false, why: "*I had it diagnosed* — texnik tekshirdi, o'zi emas." } },
        { t: "check", ex: { k: "choice", q: "What does *I had my bag stolen* mean here?", opts: ["Someone stole her bag, and she did not want it.", "She asked someone to steal her bag.", "She stole someone's bag.", "She sold her bag."], a: 0, why: "Yomon tajriba: o'z xohishidan tashqari voqea." } },
      ],
    },
    {
      title: "Dialog: Kurtka va velosiped",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Ben", en: "Nice jacket, Lucy! Is it new?", uz: "Zo'r kurtka, Lucy! Yangimi?" },
            { who: "Lucy", en: "Not really. I had it altered last week because the sleeves were too long.", uz: "Unchalik emas. O'tgan hafta yenglari uzun bo'lgani uchun uni toraytirtirdim." },
            { who: "Ben", en: "Where did you have it done?", uz: "Uni qayerda qildirdingiz?" },
            { who: "Lucy", en: "At a tailor near the market. He did it in two days. And you? Any plans for the weekend?", uz: "Bozor yaqinidagi tikuvchida. U buni ikki kunda qildi. Siz-chi? Dam olish kunlari uchun rejalar bormi?" },
            { who: "Ben", en: "I'm getting my bike overhauled on Saturday. The brakes need to be inspected, too.", uz: "Shanba kuni velosipedimni to'liq ta'mirlatyapman. Tormozlarni ham tekshirtirish kerak." },
            { who: "Lucy", en: "Why don't you get your brother to do it? He's good with bikes.", uz: "Nega akangizni ko'ndirmaysiz? U velosipedga yaxshi." },
            { who: "Ben", en: "I could, but last time he made me pay for the parts, and I'd rather have a professional do it.", uz: "Mumkin edi, lekin o'tgan safar u menga ehtiyot qismlar uchun to'latgan edi, mutaxassis qilganini afzal ko'raman." },
            { who: "Lucy", en: "Fair enough. Then I'll get my watch engraved for my dad's birthday while you're busy.", uz: "To'g'ri. Unda siz band bo'lganingizda men dadamning tug'ilgan kuniga soatimni o'ydirib yozdiraman." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "Why did Lucy have her jacket altered?", opts: ["The sleeves were too long.", "It was torn.", "It was too short.", "She wanted a new colour."], a: 0, why: "*the sleeves were too long*." } },
      ],
    },
  ],
  words: [
    { en: "alter", uz: "o'zgartirmoq (kiyimni o'lchamga)", ipa: "ˈɔːl.tə", pos: "verb", ex: "I had my trousers altered because they were too long.", exUz: "Shimim uzun bo'lgani uchun uni qisqartirdim." },
    { en: "upgrade", uz: "yangilamoq, kuchaytirmoq", ipa: "ʌpˈɡreɪd", pos: "verb", ex: "We are getting our computers upgraded next month.", exUz: "Kelasi oy kompyuterlarimizni yangilatamiz." },
    { en: "insure", uz: "sug'urtalamoq", ipa: "ɪnˈʃɔː", pos: "verb", ex: "I had my new camera insured against theft.", exUz: "Yangi kameramni o'g'irlikka qarshi sug'urtalatdim." },
    { en: "inspect", uz: "tekshirmoq, ko'zdan kechirmoq", ipa: "ɪnˈspekt", pos: "verb", ex: "The brakes must be inspected every year.", exUz: "Tormozlar har yili tekshirilishi kerak." },
    { en: "diagnose", uz: "nosozlikni yoki kasallikni aniqlamoq", ipa: "ˈdaɪ.əɡ.nəʊz", pos: "verb", ex: "The mechanic diagnosed the problem in five minutes.", exUz: "Usta muammoni besh daqiqada aniqladi." },
    { en: "engrave", uz: "o'yib yozmoq", ipa: "ɪnˈɡreɪv", pos: "verb", ex: "She had her name engraved on the ring.", exUz: "U uzukka ismini o'ydirib yozdirdi." },
    { en: "overhaul", uz: "to'liq ta'mirlamoq, qayta ko'rib chiqmoq", ipa: "ˌəʊ.vəˈhɔːl", pos: "verb", ex: "The engine was completely overhauled last winter.", exUz: "Dvigatel o'tgan qishda to'liq ta'mirlandi." },
    { en: "tailor", uz: "buyurtma bo'yicha tikmoq; tikuvchi", ipa: "ˈteɪ.lə", pos: "verb / noun", ex: "He had his wedding suit tailored in Milan.", exUz: "U to'y kostyumini Milanda buyurtma bilan tiktirdi." },
    { en: "reinforce", uz: "mustahkamlamoq", ipa: "ˌriː.ɪnˈfɔːs", pos: "verb", ex: "The walls were reinforced after the earthquake.", exUz: "Devorlar zilziladan keyin mustahkamlandi." },
    { en: "customise", uz: "xohishga qarab sozlamoq, moslashtirmoq", ipa: "ˈkʌs.tə.maɪz", pos: "verb", ex: "She had her phone case customised with her initials.", exUz: "U telefon g'ilofini bosh harflari bilan maxsus bezatdirdi." },
  ],
  practice: [
    { k: "choice", q: "I never cut my own hair. I always ___ cut at the same salon.", opts: ["have my hair", "have cut my hair", "cut my hair", "get cut my hair"], a: 0, why: "Odatiy xizmat: **have my hair cut**." },
    { k: "choice", q: "She ___ her bag stolen on the train yesterday.", opts: ["made", "let", "had", "was"], a: 2, why: "Yomon tajriba: **had her bag stolen**." },
    { k: "listen", say: "I'm having my car serviced tomorrow.", opts: ["I'm having my car service tomorrow.", "I'm having my car serviced tomorrow.", "I had my car serviced tomorrow.", "I'm servicing my car tomorrow."], a: 1, why: "Present Continuous causative: **I'm having my car serviced**." },
    { k: "fill", q: "My laptop is slow, so I'm going to get it ___. (upgrade)", a: ["upgraded"], uz: "Noutbukim sekin, shuning uchun uni yangilatmoqchiman.", why: "**get + object + V3**." },
    { k: "fill", q: "The manager made us ___ until nine o'clock. (stay)", a: ["stay"], uz: "Menejer bizni soat to'qqizgacha qolishga majbur qildi.", why: "**make + kim + V** (to'siz)." },
    { k: "fill", q: "We weren't allowed ___ photos in the museum. (take)", a: ["to take"], uz: "Muzeyda rasmga olishga ruxsat yo'q edi.", why: "Passive: **allowed to take**." },
    { k: "order", uz: "Men sochimni kecha oldirdim.", words: ["I", "had", "my", "hair", "cut", "yesterday."], extra: ["made", "did"], alt: [["Yesterday", "I", "had", "my", "hair", "cut."]], why: "**have + object + V3**." },
    { k: "order", uz: "Menejer bizni hisobotni qayta yozishga majbur qildi.", words: ["The", "manager", "made", "us", "rewrite", "the", "report."], extra: ["to", "let"], why: "**made us rewrite** — to'siz." },
    { k: "translate", uz: "Men telefonimni ta'mirlatdim.", a: ["I had my phone repaired.", "I got my phone repaired.", "I have had my phone repaired.", "I've had my phone repaired.", "I have got my phone repaired.", "I've got my phone repaired."], why: "**had / got + object + V3**." },
    { k: "translate", uz: "Men ukamni mashinani yuvishga ko'ndirdim.", a: ["I got my brother to wash the car.", "I got my younger brother to wash the car.", "I got my little brother to wash the car."], why: "**get + kim + to V**: ko'ndirish." },
    { k: "fix", wrong: "I need to have repaired my phone.", a: ["I need to have my phone repaired.", "I need to get my phone repaired."], hint: "object o'rtada", why: "**have + object + V3**." },
    { k: "fix", wrong: "My boss made me to stay late yesterday.", a: ["My boss made me stay late yesterday."], hint: "make + V", why: "**make** dan keyin **to** yo'q." },
    { k: "match", pairs: [["alter", "kiyimni o'lchamga keltirmoq"], ["upgrade", "yangilamoq, kuchaytirmoq"], ["insure", "sug'urtalamoq"], ["engrave", "o'yib yozmoq"], ["diagnose", "nosozlikni aniqlamoq"]] },
    { k: "tf", q: "*I cut my hair* va *I had my hair cut* bir xil ma'noni bildiradi.", a: false, why: "Birinchisida o'zi kesgan, ikkinchisida boshqa odam kesgan." },
    { k: "dictation", say: "She had her wallet stolen on the way to the airport.", uz: "Aeroportga ketayotganda hamyoni o'g'irlangan.", why: "Yomon tajriba: **had her wallet stolen**." },
    { k: "speak", say: "I'm going to get my laptop upgraded, and I'll have all my files backed up first.", uz: "Noutbukimni yangilataman va avval hamma fayllarimni zaxiralataman." },
  ],
  quiz: [
    { k: "choice", q: "Yesterday we ___ the windows cleaned.", opts: ["had", "did", "made", "let"], a: 0, why: "**had + object + V3**: xizmat." },
    { k: "choice", q: "Qaysi gap «boshqa odam ta'mirladi» ma'nosini beradi?", opts: ["I repaired my bike.", "I had my bike repaired.", "My bike repaired.", "I had repaired my bike."], a: 1, why: "**had my bike repaired**." },
    { k: "choice", q: "The teacher ___ us to leave early.", opts: ["let", "allowed", "made", "had"], a: 1, why: "**allow + kim + to V**." },
    { k: "choice", q: "She was ___ pay the fine.", opts: ["made to", "made", "let to", "allowed"], a: 0, why: "Passive: **was made to pay**." },
    { k: "fill", q: "I'll get my bike ___ before the trip. (overhaul)", a: ["overhauled"], uz: "Safardan oldin velosipedimni to'liq ta'mirlataman.", why: "**get + object + V3**." },
    { k: "fill", q: "He had his licence ___ away for speeding. (take)", a: ["taken"], uz: "Tezlikni oshirgani uchun haydovchilik guvohnomasi olib qo'yildi.", why: "**had + object + V3 (taken)**." },
    { k: "order", uz: "Kostyumni qayerda tikdirdingiz?", words: ["Where", "did", "you", "have", "your", "suit", "made?"], extra: ["do", "making"], why: "Savol: **did you have your suit made?**" },
    { k: "translate", uz: "Men kompyuterimni tekshirtirdim.", a: ["I had my computer checked.", "I got my computer checked.", "I had my computer inspected.", "I got my computer inspected."], why: "**had / got + object + V3**." },
    { k: "fix", wrong: "She had her phone steal on the bus.", a: ["She had her phone stolen on the bus.", "She got her phone stolen on the bus."], hint: "V3", why: "Causative'da **V3**." },
    { k: "tf", q: "*My teacher let me to leave early.* — bu gap to'g'ri.", a: false, why: "**let** dan keyin **to** yo'q: *let me leave*." },
  ],
  summary: [
    "**have / get + object + V3** — ishni boshqa odam qiladi: *I had my hair cut. I'm getting my laptop repaired.* Object — ikki fe'l orasida.",
    "Xuddi shu qolip yomon tajribani ham bildiradi: *She had her bag stolen.* Bu yerda ish qiluvchini ko'rsatmaymiz.",
    "**have someone do** (to'siz), **get someone to do** (to bilan): *I had him check it. I got him to check it.*",
    "**make / let + kim + V** (to'siz); **allow / force / enable / require + kim + to V**. Passive: *was made to, was allowed to*.",
    "Xatolar: *I cut my hair* (boshqa kesgan bo'lsa), *have repaired my phone*, *made me to wait*, *allow students use*.",
  ],
  homework: "Bu hafta o'zingiz bajarmagan 5 ta xizmatni (soch, kiyim, telefon, mashina…) **have / get + object + V3** bilan yozing. Yana 3 ta gap: kimdir sizni majbur qilgan (**made me**), ruxsat bergan (**let me / allowed me to**) va siz ko'ndirgan (**got … to**) vaziyatlarni toping.",
};

export default lesson;
