import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u28-l5",
  title: "Academic and formal vocabulary",
  titleUz: "Akademik va rasmiy lug'at: collocations (draw attention to, raise concern, play a role)",
  goal: "Essay, ma'ruza va rasmiy suhbatda ishlatiladigan **akademik so'zlar** va **collocation** larni o'zlashtirasiz: *significant, crucial, undermine, perspective, implication, controversial, play a role, raise concern, draw a conclusion, reach a consensus, draw attention to*. So'z oilalarini (*significant → significance → significantly*) va rasmiy sinonimlarni bilasiz, **make a conclusion**, **rised concern** kabi xatolardan qochasiz.",
  slides: [
    {
      title: "Nima uchun akademik lug'at kerak?",
      blocks: [
        { t: "p", md: "B2 da gapirganda va yozganda siz **fikr bildirishdan** tashqari uni **asoslashingiz** kerak. IELTS Writing, universitet ma'ruzalari, ish hisobotlari **akademik** va **rasmiy** so'zlarni talab qiladi. *Very important* o'rniga **crucial**, *big* o'rniga **significant**, *make weaker* o'rniga **undermine** deyish matnni darrov kuchliroq qiladi." },
        {
          t: "table", head: ["Oddiy (neytral)", "Akademik / rasmiy", "Misol"], speak: [2],
          rows: [
            ["very important", "crucial", "Trust is crucial in any team."],
            ["big, large", "significant", "There has been a significant rise in prices."],
            ["make weaker", "undermine", "Rumours undermined his authority."],
            ["point of view", "perspective", "From a student's perspective, fees are too high."],
            ["something people argue about", "controversial", "The decision was highly controversial."],
          ],
        },
        { t: "tip", tone: "info", md: "Akademik so'z — **ma'no** ni emas, **aniqlik va uslub** ni yaxshilaydi. Hamma joyda ishlatmang: har bir paragrafda 3–5 ta yetarli, ular **o'z collocation lari** bilan birga ishlatilsin." },
        { t: "check", ex: { k: "choice", q: "***Very important* ning akademik varianti qaysi?**", opts: ["crucial", "controversial", "undermine", "perspective"], a: 0, why: "**crucial** = juda muhim, hal qiluvchi." } },
      ],
    },
    {
      title: "Sifat va fe'llar: significant, crucial, controversial, undermine",
      blocks: [
        { t: "p", md: "Birinchi guruh — **baho beruvchi** so'zlar. Ular fikringizni darrov kuchli va aniq qiladi." },
        {
          t: "examples", items: [
            { en: "The report shows a significant increase in online learning.", uz: "Hisobot onlayn ta'limning sezilarli o'sishini ko'rsatadi.", note: "**significant** = muhim yoki sezilarli (raqam, o'zgarish)." },
            { en: "Sleep is crucial for good concentration.", uz: "Yaxshi e'tibor uchun uyqu hal qiluvchi ahamiyatga ega.", note: "**crucial** = juda muhim, busiz bo'lmaydi." },
            { en: "Experimenting on animals is a controversial issue.", uz: "Hayvonlarda tajriba qilish — munozarali masala.", note: "**controversial** = odamlar bahslashadigan, fikrlar har xil." },
            { en: "Constant changes of plan can undermine the team's confidence.", uz: "Rejaning doimiy o'zgarishi jamoaning ishonchini susaytirishi mumkin.", note: "**undermine** = asta-sekin zaiflashtirmoq." },
          ],
        },
        { t: "tip", tone: "warn", md: "**Significant** — «muhim, sezilarli», **significantly** — «sezilarli darajada»: *prices rose significantly*. **Important** va **significant** farqi: significant raqam yoki dalil bilan tasdiqlanadigan, katta bo'lgan narsa; *important* — oddiy muhimlik." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["It was a significant improvement.", "Prices rose significantly.", "A controversial decision.", "Stress can undermine your health."] },
          bad: { title: "Xato", items: ["It was a significantly improvement.", "Prices rose significant.", "A controversy decision.", "Stress can underminate your health."] },
        },
        { t: "check", ex: { k: "fill", q: "Constant criticism can ___ a student's confidence.", a: ["undermine"], hint: "u______", why: "**undermine** + ob'ekt: asta-sekin zaiflashtirmoq." } },
        { t: "check", ex: { k: "choice", q: "There has been a ___ rise in house prices since 2015.", opts: ["significant", "significantly", "significance", "signify"], a: 0, why: "Ot (*rise*) oldidan **sifat**: **significant**." } },
      ],
    },
    {
      title: "Ot: perspective, implication va so'z oilalari",
      blocks: [
        { t: "p", md: "**Perspective** — nuqtai nazar (qaysi tomondan qaraymiz): *from a teacher's perspective*. **Implication** — oqibat yoki yashirin ma'no: *the implications of the decision*. Ikkalasi ham ko'pincha **ko'plikda** va **for** bilan ishlatiladi." },
        {
          t: "examples", items: [
            { en: "From an employer's perspective, experience matters more than grades.", uz: "Ish beruvchi nuqtai nazaridan tajriba baholardan muhimroq.", note: "**from … perspective** = «… nuqtai nazaridan»" },
            { en: "The new law has serious implications for small businesses.", uz: "Yangi qonun kichik biznes uchun jiddiy oqibatlarga ega.", note: "**implications for** = «…uchun oqibatlari»" },
          ],
        },
        { t: "p", md: "**So'z oilasi** (*word family*) — bir ildizdan so'zlar. Ularni bilsangiz, bitta so'zdan to'rtta ishlatish mumkin va **sifat / ot / ravish** xatosi kamayadi." },
        {
          t: "table", head: ["Fe'l", "Ot", "Sifat", "Ravish"], speak: [0, 1],
          rows: [
            ["signify", "significance", "significant", "significantly"],
            ["imply", "implication", "implicit", "implicitly"],
            ["conclude", "conclusion", "conclusive", "conclusively"],
            ["—", "controversy", "controversial", "controversially"],
          ],
        },
        { t: "tip", tone: "warn", md: "**Controversial** — sifat (*a controversial plan*), **controversy** — ot (*the plan caused controversy*). Ularni aralashtirmang. **Imply** — fe'l, **implication** — ot." },
        { t: "check", ex: { k: "fill", q: "The plan caused great ___ among local people. (controversial)", a: ["controversy"], hint: "ot shakli", why: "Gapda ot kerak (*caused great …*): **controversy**." } },
        { t: "check", ex: { k: "choice", q: "The results have important ___ for public health.", opts: ["implications", "implicates", "implicit", "implied"], a: 0, why: "Ot kerak: **implications for**." } },
      ],
    },
    {
      title: "Collocation: play a role, raise concern, draw a conclusion, reach a consensus",
      blocks: [
        { t: "p", md: "**Collocation** — so'zlarning o'zaro «do'st» bo'lib kelishi. Inglizcha **o'ziga xos** fe'l bilan keladi. Uni so'zma-so'z tarjima qilib bo'lmaydi: o'zbekchada «xulosa qilmoq», inglizchada **draw a conclusion**, ~~make a conclusion~~ emas." },
        {
          t: "table", head: ["Collocation", "Ma'no", "Misol"], speak: [2],
          rows: [
            ["play a role (in)", "rol o'ynamoq", "Diet plays a major role in health."],
            ["raise concern(s) (about)", "xavotir uyg'otmoq", "The report raised concerns about safety."],
            ["draw a conclusion", "xulosa chiqarmoq", "We can draw the conclusion that sleep matters."],
            ["reach a consensus", "umumiy kelishuvga erishmoq", "The committee reached a consensus after a long debate."],
            ["draw attention to", "e'tiborni qaratmoq", "The article draws attention to the lack of funding."],
          ],
        },
        { t: "p", md: "**Fe'lni tanlash:** *play* (role), *raise* (concern, question, awareness), *draw* (conclusion, attention, comparison), *reach* (consensus, agreement, conclusion), *tackle* (problem). Bular — **qat'iy juftliklar**." },
        { t: "tip", tone: "warn", md: "**Raise** (ko'tarmoq, o'tkazma fe'l, *raise, raised, raised*) bilan **rise** (ko'tarilmoq, o'timsiz, *rise, rose, risen*) ni aralashtirmang: *The news **raised** concerns. Prices **rose**.*" },
        { t: "check", ex: { k: "fill", q: "The study draws attention ___ the problem of air pollution.", a: ["to"], why: "**draw attention to**." } },
        { t: "check", ex: { k: "choice", q: "After three hours, the committee finally ___ a consensus.", opts: ["reached", "made", "did", "took"], a: 0, why: "**reach a consensus**." } },
      ],
    },
    {
      title: "Tipik xatolar (o'zbek tilidan interferensiya)",
      blocks: [
        { t: "p", md: "O'zbek tilida *xulosa qilmoq, rol o'ynamoq, xavotir uyg'otmoq* deymiz va fe'lni so'zma-so'z tarjima qilamiz. Natijada noto'g'ri **collocation** va **so'z turi** xatolari chiqadi:" },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["We can draw a conclusion from this data.", "The news raised concerns.", "It was a significant improvement.", "Sleep plays an important role in learning."] },
          bad: { title: "Xato", items: ["We can make a conclusion from this data.", "The news rised concerns.", "It was a significantly improvement.", "Sleep does an important role in learning."] },
        },
        { t: "p", md: "1) **draw** a conclusion, **make** emas. 2) **raise** — o'tkazma fe'l: *raised* (V2/V3), ~~rised~~ yo'q. 3) Ot oldidan **sifat**: *significant improvement*. 4) **play** a role, *do* emas." },
        { t: "check", ex: { k: "fix", wrong: "We can make a conclusion from this data.", a: ["We can draw a conclusion from this data."], hint: "collocation", why: "**draw a conclusion** — qat'iy birikma." } },
        { t: "check", ex: { k: "fix", wrong: "The news rised concerns among parents.", a: ["The news raised concerns among parents."], hint: "raise, raised", why: "**raise** — *raised, raised* (**rise** — *rose, risen*)." } },
        { t: "check", ex: { k: "fix", wrong: "It was a significantly improvement.", a: ["It was a significant improvement."], hint: "ot oldidan sifat", why: "Ot (*improvement*) oldidan sifat: **significant**." } },
        { t: "check", ex: { k: "fix", wrong: "Sleep does an important role in learning.", a: ["Sleep plays an important role in learning."], hint: "collocation", why: "**play a role**, ~~do a role~~." } },
      ],
    },
    {
      title: "O'qing: To'rt kunlik ish haftasi",
      blocks: [
        {
          t: "text", title: "A controversial experiment", voice: "emma",
          en: "Last year our company tried a four-day working week, and the idea proved highly controversial. Supporters argued that shorter weeks play a crucial role in reducing stress. Critics raised concerns that clients would be unhappy and that productivity would fall. After six months, the managers studied the figures and drew a conclusion that surprised many: output stayed the same, while sick leave dropped significantly. From a manager's perspective, the implications are clear. Longer weekends can improve concentration rather than undermine it. After weeks of debate, staff and managers finally reached a consensus to continue the trial. The experiment also drew attention to a wider question: how much working time do we really need?",
          uz: "O'tgan yili kompaniyamiz to'rt kunlik ish haftasini sinab ko'rdi va bu g'oya juda munozarali bo'ldi. Tarafdorlar qisqa hafta stressni kamaytirishda hal qiluvchi rol o'ynaydi, deb bahslashdi. Tanqidchilar mijozlar norozi bo'ladi va samaradorlik tushadi, deb xavotir bildirdi. Olti oydan keyin rahbarlar raqamlarni o'rganib, ko'pchilikni hayratga solgan xulosa chiqardi: natija o'zgarmadi, kasallik ta'tillari esa sezilarli kamaydi. Rahbar nuqtai nazaridan oqibatlar ravshan. Uzoqroq dam olish kunlari e'tiborni zaiflashtirmaydi, aksincha, yaxshilashi mumkin. Haftalar davom etgan bahsdan keyin xodimlar va rahbarlar tajribani davom ettirish bo'yicha umumiy kelishuvga erishdi. Tajriba yana kengroq savolga e'tiborni qaratdi: bizga aslida qancha ish vaqti kerak?",
        },
        { t: "check", ex: { k: "tf", q: "After six months, output fell while sick leave stayed the same.", a: false, why: "Aksincha: *output stayed the same, while sick leave dropped significantly.*" } },
        { t: "check", ex: { k: "choice", q: "What does \"raised concerns\" mean in the text?", opts: ["Critics expressed worries", "Critics earned more money", "Clients complained", "Managers rose in rank"], a: 0, why: "**raise concerns** = xavotir bildirmoq." } },
        { t: "check", ex: { k: "choice", q: "What did the staff and managers finally do?", opts: ["Reached a consensus to continue the trial", "Stopped the experiment", "Increased working hours", "Closed the office"], a: 0, why: "*finally reached a consensus to continue the trial*." } },
      ],
    },
    {
      title: "Dialog: Essay uchun maslahat",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Peter", en: "Helen, my tutor says my essay doesn't sound academic enough. What can I change?", uz: "Helen, tutorim essayim yetarlicha akademik emas deydi. Nimani o'zgartirsam bo'ladi?" },
            { who: "Helen", en: "Show me a sentence.", uz: "Bir gapni ko'rsat." },
            { who: "Peter", en: "\"Social media is a very big problem for teenagers.\"", uz: "«Ijtimoiy tarmoqlar o'smirlar uchun juda katta muammo.»" },
            { who: "Helen", en: "Try this: \"Social media poses a significant risk to teenagers.\" It is more precise, and the word significant carries weight.", uz: "Mana buni sinab ko'r: «Ijtimoiy tarmoqlar o'smirlar uchun jiddiy xavf tug'diradi.» Bu aniqroq, significant so'zi og'irlik beradi." },
            { who: "Peter", en: "And for the conclusion? I wrote \"I make a conclusion that…\"", uz: "Xulosa uchun-chi? «Men xulosa qilaman…» deb yozdim." },
            { who: "Helen", en: "You draw a conclusion, you don't make one. Also, don't forget to mention the implications for schools.", uz: "Xulosani «draw» qilinadi, «make» emas. Yana maktablar uchun oqibatlarni eslashni unutma." },
            { who: "Peter", en: "Right. It's controversial, so I should show two perspectives.", uz: "To'g'ri. Bu munozarali, shuning uchun ikki nuqtai nazarni ko'rsatishim kerak." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "What correction does Helen give for the conclusion?", opts: ["draw a conclusion", "make a conclusion", "do a conclusion", "take a conclusion"], a: 0, why: "**draw a conclusion** — to'g'ri collocation." } },
        { t: "check", ex: { k: "tf", q: "Peter decides to show two perspectives because the topic is controversial.", a: true, why: "*It's controversial, so I should show two perspectives.*" } },
      ],
    },
  ],
  words: [
    { en: "significant", uz: "sezilarli, muhim", ipa: "sɪɡˈnɪf.ɪ.kənt", pos: "adjective", ex: "There was a significant drop in unemployment last year.", exUz: "O'tgan yili ishsizlik sezilarli darajada kamaydi." },
    { en: "crucial", uz: "hal qiluvchi, juda muhim", ipa: "ˈkruː.ʃəl", pos: "adjective", ex: "Good communication is crucial in a team.", exUz: "Jamoada yaxshi muloqot hal qiluvchi ahamiyatga ega." },
    { en: "undermine", uz: "zaiflashtirmoq, asta-sekin buzmoq", ipa: "ˌʌn.dəˈmaɪn", pos: "verb", ex: "Rumours can undermine trust in a company.", exUz: "Mish-mishlar kompaniyaga bo'lgan ishonchni susaytirishi mumkin." },
    { en: "perspective", uz: "nuqtai nazar, qarash", ipa: "pəˈspek.tɪv", pos: "noun", ex: "Travelling gives you a new perspective on life.", exUz: "Sayohat hayotga yangi nazar beradi." },
    { en: "implication", uz: "oqibat, yashirin ma'no", ipa: "ˌɪm.plɪˈkeɪ.ʃən", pos: "noun", ex: "The implications of the new law are still unclear.", exUz: "Yangi qonunning oqibatlari hali noaniq." },
    { en: "controversial", uz: "munozarali", ipa: "ˌkɒn.trəˈvɜː.ʃəl", pos: "adjective", ex: "The mayor's plan is extremely controversial.", exUz: "Merning rejasi juda munozarali." },
    { en: "raise concern", uz: "xavotir uyg'otmoq", ipa: "reɪz kənˈsɜːn", pos: "phrase", ex: "The report raised concern about the safety of the bridge.", exUz: "Hisobot ko'prikning xavfsizligi haqida xavotir uyg'otdi." },
    { en: "play a role", uz: "rol o'ynamoq", ipa: "pleɪ ə rəʊl", pos: "phrase", ex: "Teachers play a vital role in children's development.", exUz: "O'qituvchilar bolalar rivojida muhim rol o'ynaydi." },
    { en: "draw a conclusion", uz: "xulosa chiqarmoq", ipa: "drɔː ə kənˈkluː.ʒən", pos: "phrase", ex: "It is too early to draw a conclusion from one survey.", exUz: "Bitta so'rovdan xulosa chiqarish uchun hali erta." },
    { en: "reach a consensus", uz: "umumiy kelishuvga erishmoq", ipa: "riːtʃ ə kənˈsen.səs", pos: "phrase", ex: "After a long debate, the board reached a consensus.", exUz: "Uzoq bahsdan keyin kengash umumiy kelishuvga erishdi." },
  ],
  practice: [
    { k: "choice", q: "Exercise plays an important ___ in staying healthy.", opts: ["role", "work", "duty", "post"], a: 0, why: "**play a role** — qat'iy collocation." },
    { k: "choice", q: "The study ___ concern about the safety of the drug.", opts: ["raised", "rose", "arose", "lifted"], a: 0, why: "**raise concern**; *rise* o'timsiz fe'l." },
    { k: "listen", say: "It is crucial that we reach a consensus.", opts: ["It is crucial that we reach a consensus.", "It is crucial that we make a consensus.", "It is crucial that we reach a conclusion.", "It is crucial that we raise a consensus."], a: 0, why: "**reach a consensus**." },
    { k: "fill", q: "After studying the data, we can draw a ___ that sleep matters.", a: ["conclusion"], uz: "Ma'lumotlarni o'rganib, uyqu muhimligi haqida xulosa chiqara olamiz.", why: "**draw a conclusion**." },
    { k: "fill", q: "The new tax proposal is highly ___, and many people oppose it.", a: ["controversial"], hint: "c___________", uz: "Yangi soliq taklifi juda munozarali, ko'pchilik qarshi.", why: "Odamlar bahslashadigan — **controversial**." },
    { k: "order", uz: "Qo'mita byudjet bo'yicha umumiy kelishuvga erishdi.", words: ["The", "committee", "reached", "a", "consensus", "on", "the", "budget."], extra: ["made", "did"], why: "**reach a consensus**." },
    { k: "order", uz: "Bu hisobot jiddiy muammoga e'tiborni qaratadi.", words: ["This", "report", "draws", "attention", "to", "a", "serious", "problem."], extra: ["for", "makes"], why: "**draw attention to**." },
    { k: "translate", uz: "Bu qaror kompaniya uchun jiddiy oqibatlarga ega.", a: ["This decision has serious implications for the company.", "The decision has serious implications for the company.", "This decision has significant implications for the company.", "This decision has important implications for the company.", "This decision has major implications for the company."], why: "**have implications for**." },
    { k: "translate", uz: "Ular umumiy kelishuvga erisha olmadi.", a: ["They could not reach a consensus.", "They couldn't reach a consensus.", "They were unable to reach a consensus.", "They failed to reach a consensus.", "They did not reach a consensus.", "They didn't reach a consensus."], why: "**reach a consensus**." },
    { k: "fix", wrong: "We can make a conclusion from the results.", a: ["We can draw a conclusion from the results."], hint: "collocation", why: "**draw a conclusion**." },
    { k: "fix", wrong: "It was a significantly change in policy.", a: ["It was a significant change in policy."], hint: "sifat kerak", why: "Ot oldidan sifat: **significant**." },
    { k: "match", pairs: [["crucial", "hal qiluvchi"], ["undermine", "zaiflashtirmoq"], ["perspective", "nuqtai nazar"], ["implication", "oqibat"], ["controversial", "munozarali"]] },
    { k: "tf", q: "**Significant** so'zi «juda kichik» degan ma'noni bildiradi.", a: false, why: "**significant** = sezilarli, katta yoki muhim." },
    { k: "dictation", say: "The new policy has serious implications for small businesses.", uz: "Yangi siyosat kichik biznes uchun jiddiy oqibatlarga ega.", why: "**implications for** + ot." },
    { k: "choice", q: "Which verb pair is CORRECT?", opts: ["raise concerns / rise prices", "raise concerns / prices rise", "rise concerns / prices raise", "rise concerns / raise prices up"], a: 1, why: "**raise** — o'tkazma (*raise concerns*), **rise** — o'timsiz (*prices rise*)." },
    { k: "speak", say: "From a student's perspective, the decision raises serious concerns.", uz: "Talaba nuqtai nazaridan bu qaror jiddiy xavotir uyg'otadi." },
  ],
  quiz: [
    { k: "choice", q: "Good sleep plays a ___ role in learning.", opts: ["crucial", "crucially", "crux", "cruciality"], a: 0, why: "Ot (*role*) oldidan sifat: **crucial**." },
    { k: "choice", q: "The article draws attention ___ the lack of funding.", opts: ["to", "for", "at", "on"], a: 0, why: "**draw attention to**." },
    { k: "choice", q: "Rumours can ___ people's trust in leaders.", opts: ["undermine", "underline", "undertake", "understand"], a: 0, why: "**undermine trust**." },
    { k: "choice", q: "The council ___ a consensus after a long debate.", opts: ["reached", "made", "did", "took"], a: 0, why: "**reach a consensus**." },
    { k: "fill", q: "From a customer's ___, the delay is unacceptable.", a: ["perspective"], uz: "Mijoz nuqtai nazaridan kechikish qabul qilib bo'lmaydi.", why: "**from … perspective**." },
    { k: "fill", q: "The new law has important ___ for students. (implication)", a: ["implications"], uz: "Yangi qonun talabalar uchun muhim oqibatlarga ega.", why: "Ko'plik ot: **implications for**." },
    { k: "fix", wrong: "The report rised concerns about safety.", a: ["The report raised concerns about safety."], hint: "raise, raised", why: "**raise** — *raised*." },
    { k: "order", uz: "Bu masala juda munozarali.", words: ["This", "issue", "is", "highly", "controversial."], extra: ["controversy", "very"], why: "**highly controversial**." },
    { k: "translate", uz: "Uyqu sog'liqda katta rol o'ynaydi.", a: ["Sleep plays a major role in health.", "Sleep plays an important role in health.", "Sleep plays a big role in health.", "Sleep plays a crucial role in health.", "Sleep plays a vital role in health.", "Sleep plays a significant role in health."], why: "**play a role in**." },
    { k: "tf", q: "**We can make a conclusion** — bu to'g'ri collocation.", a: false, why: "**draw a conclusion** to'g'ri; *make a conclusion* xato." },
  ],
  summary: [
    "**Akademik so'zlar:** *significant, crucial, controversial, undermine, perspective, implication* — fikrni aniqroq va kuchliroq qiladi (*very important → crucial*).",
    "**Collocation:** *play a role (in), raise concern(s), draw a conclusion, reach a consensus, draw attention to*. Fe'lni so'zma-so'z tarjima qilmang: ~~make a conclusion~~, ~~do a role~~.",
    "**So'z oilasi:** *significant / significance / significantly*, *controversial / controversy*, *imply / implication*. Ot oldidan **sifat**, fe'l oldidan **ravish** kerak.",
    "**Raise** (o'tkazma: *raised concerns*) va **rise** (o'timsiz: *prices rise*) ni aralashtirmang.",
  ],
  homework: "Mavzu tanlang (masalan, onlayn ta'lim yoki ish haftasi) va 8 ta gap yozing: **significant, crucial, undermine, perspective, implication, controversial** hamda 3 ta collocation (*play a role, raise concerns, draw a conclusion*) ishlatib. Har bir so'zning so'z turini (sifat, ot, fe'l) tekshiring va ovoz chiqarib o'qing.",
};

export default lesson;
