import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u28-l6",
  title: "Structuring an argument",
  titleUz: "Fikrni tuzish: introduction, thesis, topic sentence, examples, conclusion",
  goal: "Essay va nutqda fikrni **izchil tuzasiz**: **introduction** (hook, background, thesis), **body paragraph** (topic sentence, explanation, example, link), **counter-argument va refutation**, **conclusion**. Signposting iboralarini (*Firstly, Moreover, Admittedly, On the contrary, In conclusion*) o'rnida ishlatasiz va **At last**, **In my opinion I think**, **Because of this reason** kabi xatolardan qochasiz.",
  slides: [
    {
      title: "Nima uchun tuzilma muhim?",
      blocks: [
        { t: "p", md: "Yaxshi g'oya bo'lsa ham, tartibsiz yozilgan essayni o'quvchi **tushunmaydi** va sizni **ishontirolmaydi**. IELTS Writing da *Coherence and Cohesion* (izchillik va bog'lanish) alohida baholanadi. Ya'ni, mazmun, tartib va bog'lovchilar teng ahamiyatli." },
        { t: "p", md: "Opinion yoki for-and-against essay odatda **4–5 paragrafdan** iborat. Har bir paragrafning **bitta vazifasi** bor:" },
        {
          t: "table", head: ["Qism", "Vazifasi", "Hajmi"],
          rows: [
            ["Introduction", "mavzuga kirish va **thesis** (asosiy fikr)", "2–3 gap"],
            ["Body 1", "birinchi asosiy dalil + misol", "4–5 gap"],
            ["Body 2", "ikkinchi asosiy dalil + misol", "4–5 gap"],
            ["Counter-argument", "qarshi fikrni tan olish va **rad etish**", "3–4 gap"],
            ["Conclusion", "xulosa: thesis yangi so'zlar bilan", "2–3 gap"],
          ],
        },
        { t: "tip", tone: "info", md: "250 so'zli essayda o'rtacha: kirish 40, ikkita body 70 + 70, qarshi fikr 40, xulosa 30 so'z. **Bitta paragraf — bitta fikr**. Ikkinchi fikr uchun yangi paragraf oching." },
        { t: "check", ex: { k: "choice", q: "Qaysi qism asosiy fikrni (**thesis**) bildiradi?", opts: ["Introduction", "Body 1", "Counter-argument", "Faqat Conclusion"], a: 0, why: "**Thesis** kirish qismida (oxirida) beriladi, xulosada esa takrorlanadi." } },
      ],
    },
    {
      title: "Introduction: hook, background, thesis",
      blocks: [
        { t: "p", md: "Kirish qismi uch bosqichdan iborat: **hook** (diqqatni tortish: savol, qiziq fakt yoki umumiy fikr), **background** (mavzu haqida qisqa ma'lumot) va **thesis** (sizning pozitsiyangiz, bitta aniq gapda)." },
        {
          t: "examples", items: [
            { en: "Is a university degree still worth the cost?", uz: "Universitet diplomi hanuz o'z narxiga arzimi?", note: "**Hook** (savol)" },
            { en: "In recent years, tuition fees have risen sharply in many countries.", uz: "So'nggi yillarda ko'p mamlakatlarda o'qish narxi keskin oshdi.", note: "**Background**" },
            { en: "In my view, a degree remains a sound investment, although students should think carefully about what they study.", uz: "Mening fikrimcha, diplom hanuz yaxshi sarmoya, lekin talabalar nimani o'qishini puxta o'ylashi kerak.", note: "**Thesis**" },
          ],
        },
        { t: "p", md: "**Thesis** (asosiy da'vo) **bahsli**, **aniq** va **bitta gap** bo'lishi kerak. «Men bu haqda yozaman» — mavzu e'lon qilish, thesis emas." },
        {
          t: "compare",
          good: { title: "Kuchli thesis", items: ["Governments should ban mobile phones in classrooms because they damage concentration.", "In my view, remote work benefits both employees and companies, although it requires careful management."] },
          bad: { title: "Zaif thesis", items: ["In this essay I will talk about mobile phones.", "Mobile phones are used by many people."] },
        },
        { t: "tip", tone: "warn", md: "**Thesis ni** *I think* bilan ham, *In my view* bilan ham yozish mumkin, lekin **ikkalasini birga** emas: ~~In my opinion, I think~~. Rasmiy essayda *I* kamroq: *It could be argued that…, This essay argues that…*." },
        { t: "check", ex: { k: "choice", q: "Which is the strongest thesis?", opts: ["Social media is everywhere.", "In this essay I will discuss social media.", "Schools should teach students how to use social media safely, because the risks are growing.", "Many teenagers like social media."], a: 2, why: "Thesis aniq pozitsiya + sabab beradi; qolganlari fakt yoki e'lon." } },
      ],
    },
    {
      title: "Body paragraph: topic sentence → explanation → example → link",
      blocks: [
        { t: "p", md: "Har bir **body paragraph** bitta fikrni to'liq ochadi. Eng ishonchli tuzilma — **PEEL**: **P**oint (topic sentence), **E**xplanation, **E**xample, **L**ink (tezisga qaytish)." },
        {
          t: "table", head: ["Qadam", "Vazifasi", "Qanday boshlanadi"],
          rows: [
            ["Topic sentence", "paragrafning bitta asosiy fikri", "Firstly, … / One major advantage is that …"],
            ["Explanation", "nega shunday? (elaborate)", "This is because … / In other words, …"],
            ["Example", "aniq misol yoki dalil", "For example, … / For instance, …"],
            ["Link", "tezis bilan bog'lash", "Therefore, … / This shows that …"],
          ],
        },
        {
          t: "examples", items: [
            { en: "Firstly, remote work saves employees a great deal of time.", uz: "Birinchidan, uzoqdan ishlash xodimlarning ko'p vaqtini tejaydi.", note: "**Topic sentence**" },
            { en: "This is because they no longer have to commute every day.", uz: "Chunki ular endi har kuni yo'lga sarflamaydi.", note: "**Explanation**" },
            { en: "For example, many people in large cities spend two hours a day travelling to the office.", uz: "Masalan, katta shaharlarda ko'p odam ofisga borishga kuniga ikki soat sarflaydi.", note: "**Example**" },
            { en: "Therefore, remote work gives people more time for their families and rest.", uz: "Shuning uchun uzoqdan ishlash odamlarga oila va dam olish uchun ko'proq vaqt beradi.", note: "**Link**" },
          ],
        },
        { t: "tip", tone: "info", md: "**Elaborate** — fikrni ochib bermoq: «nega?», «qanday?», «masalan?» savollariga javob bering. Dalilsiz da'vo (*Remote work is good.*) **ishontirmaydi**. Dalil bilan (*…saves two hours a day*) **ishontiradi**." },
        { t: "check", ex: { k: "choice", q: "\"For example, many people spend two hours a day commuting.\" — bu paragrafning qaysi qismi?", opts: ["Example", "Topic sentence", "Link", "Hook"], a: 0, why: "**For example** — misol (dalil) qismi." } },
        { t: "check", ex: { k: "tf", q: "Body paragraphning birinchi gapi odatda bitta asosiy fikrni (**topic sentence**) beradi.", a: true, why: "Topic sentence paragrafning mazmunini bir gapda e'lon qiladi." } },
      ],
    },
    {
      title: "Qarshi fikr, rad etish va xulosa",
      blocks: [
        { t: "p", md: "B2 essayda faqat o'z fikringiz yetarli emas. **Counter-argument** (qarshi dalil) ni tan olib, keyin **refute** (rad etish, *rebuttal*) qilsangiz, essay ancha **ishontiruvchi** bo'ladi. Tuzilma: **tan olish → rad etish**." },
        {
          t: "table", head: ["Bosqich", "Iboralar", "Misol"], speak: [2],
          rows: [
            ["Qarshi fikrni tan olish (**concede**)", "Admittedly, … / It is true that … / Some people argue that …", "Admittedly, some jobs cannot be done from home."],
            ["Rad etish (**rebuttal**)", "However, … / Nevertheless, … / This view overlooks the fact that …", "However, most office tasks can be done online."],
          ],
        },
        { t: "p", md: "**Conclusion** (xulosa) uch ishni qiladi: 1) **thesis ni boshqa so'zlar bilan** takrorlaydi; 2) asosiy dalillarni **qisqa** jamlaydi; 3) (ixtiyoriy) oxirgi fikr yoki tavsiya beradi. **Yangi dalil** kiritilmaydi." },
        {
          t: "examples", items: [
            { en: "In conclusion, although remote work has drawbacks, its benefits outweigh them.", uz: "Xulosa qilib aytganda, uzoqdan ishlashning kamchiliklari bo'lsa ham, afzalliklari ustun.", note: "Thesis yangi so'zlar bilan" },
            { en: "To sum up, companies should offer flexible working while setting clear rules.", uz: "Xulosa qilsak, kompaniyalar aniq qoidalar bilan birga moslashuvchan ish tartibini taklif qilishi kerak.", note: "Qisqa jamlash + tavsiya" },
          ],
        },
        { t: "tip", tone: "warn", md: "Xulosani **In conclusion, / To sum up, / Overall,** bilan boshlang. **At last** — «nihoyat, uzoq kutgandan keyin» ma'nosida; xulosa uchun **mos emas**." },
        { t: "check", ex: { k: "choice", q: "Which sentence is a concession (admits the other side)?", opts: ["Admittedly, some jobs cannot be done from home.", "For example, many people commute for two hours.", "In conclusion, remote work is beneficial.", "Firstly, it saves time."], a: 0, why: "**Admittedly** — qarshi tomonning haqligini tan olish (concession)." } },
      ],
    },
    {
      title: "Signposting: bog'lovchi iboralar jadvali",
      blocks: [
        { t: "p", md: "**Signpost** (yo'l ko'rsatkichi) iboralar o'quvchiga «endi nima bo'ladi» deb aytadi. Ular har bir vazifaga mos bo'lishi kerak va **ortiqcha takrorlanmasligi** kerak." },
        {
          t: "table", head: ["Vazifa", "Iboralar"], speak: [1],
          rows: [
            ["Tartib", "Firstly, / Secondly, / Finally, / First of all, / Lastly,"],
            ["Qo'shish", "Moreover, / Furthermore, / In addition, / What is more,"],
            ["Misol", "For example, / For instance, / such as / A case in point is …"],
            ["Qarshi qo'yish", "However, / On the other hand, / On the contrary, / Admittedly,"],
            ["Natija", "Therefore, / Consequently, / As a result, / For this reason,"],
            ["Xulosa", "In conclusion, / To sum up, / Overall, / All things considered,"],
          ],
        },
        { t: "p", md: "**On the contrary** — «aksincha» (oldingi gapni **inkor** qiladi): *Some say learning is easy. On the contrary, it requires effort.* **On the other hand** — boshqa tomondan (fikrning ikkinchi qirrasi): *The job is well paid. On the other hand, it is stressful.*" },
        { t: "tip", tone: "info", md: "**Maslahat:** bir essayda har bir iboradan **bittadan** foydalaning. *However* ni besh marta takrorlasangiz, izchillik yo'qoladi. Bir xil ma'noli iboralarni almashtiring: *however → nevertheless → even so*." },
        { t: "check", ex: { k: "choice", q: "Some people say exams reduce stress. ___, they usually increase it.", opts: ["On the contrary", "For example", "In addition", "As a result"], a: 0, why: "Oldingi gapni **inkor** qilish: **On the contrary**." } },
        { t: "check", ex: { k: "fill", q: "To sum ___, free education has both advantages and drawbacks.", a: ["up"], why: "**To sum up** — xulosa iborasi." } },
      ],
    },
    {
      title: "Tipik xatolar (o'zbek tilidan interferensiya)",
      blocks: [
        { t: "p", md: "O'zbek tilida *oxirida, nihoyat, bu sababli* kabi so'zlar ko'p. Ularni **so'zma-so'z** tarjima qilsak, essayda noto'g'ri signposting chiqadi. Tipik xatolar:" },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["In conclusion, technology is useful.", "In my opinion, cities are better.", "First of all, cost is a problem.", "For this reason, many people prefer cars."] },
          bad: { title: "Xato", items: ["At last, I want to say that technology is useful.", "In my opinion, I think that cities are better.", "Firstly of all, cost is a problem.", "Because of this reason, many people prefer cars."] },
        },
        { t: "p", md: "1) **At last** — kutilgan ish nihoyat bo'lganda: *At last, the bus came.* Xulosa: **In conclusion**. 2) **In my opinion** va **I think** ma'nosi bir xil — bittasini tanlang. 3) **First of all** yoki **Firstly**, ikkalasini birga emas. 4) **For this reason** yoki **Because of this**; ~~because of this reason~~ yo'q." },
        { t: "check", ex: { k: "fix", wrong: "At last, I want to say that technology is useful.", a: ["In conclusion, I want to say that technology is useful.", "In conclusion, technology is useful.", "To conclude, I want to say that technology is useful.", "To conclude, technology is useful."], hint: "xulosa iborasi", why: "**At last** — «nihoyat». Xulosa uchun **In conclusion / To conclude**." } },
        { t: "check", ex: { k: "fix", wrong: "In my opinion, I think that cities are better.", a: ["In my opinion, cities are better.", "I think that cities are better.", "I think cities are better."], hint: "ikki marta", why: "**In my opinion** va **I think** — ikkalasi birga takror bo'ladi." } },
        { t: "check", ex: { k: "fix", wrong: "Firstly of all, cost is a problem.", a: ["First of all, cost is a problem.", "Firstly, cost is a problem."], hint: "first of all", why: "**First of all** yoki **Firstly**." } },
        { t: "check", ex: { k: "fix", wrong: "Because of this reason, many people prefer cars.", a: ["For this reason, many people prefer cars.", "Because of this, many people prefer cars."], hint: "for this reason", why: "**for this reason** yoki **because of this**." } },
      ],
    },
    {
      title: "O'qing: Namunani tahlil qilamiz",
      blocks: [
        {
          t: "text", title: "Should university education be free?", voice: "george",
          en: "Many people believe that higher education should be free for everyone. In my view, however, a fully free system is neither fair nor realistic, and students should contribute to the cost in a limited way.\n\nFirstly, free education places a heavy burden on taxpayers. For example, a country that funds every student must raise taxes or cut spending on hospitals and schools. Consequently, people who never attend university would pay for those who do.\n\nAdmittedly, supporters argue that fees prevent talented students from poor families from studying. However, this problem can be solved by grants and loans that help only those who need them.\n\nIn conclusion, a system with low fees and strong financial support is a more balanced solution than free education for all.",
          uz: "Ko'pchilik oliy ta'lim hamma uchun bepul bo'lishi kerak deb hisoblaydi. Mening fikrimcha, to'liq bepul tizim adolatli ham, real ham emas va talabalar xarajatning bir qismini cheklangan miqdorda to'lashi kerak.\n\nBirinchidan, bepul ta'lim soliq to'lovchilarga og'ir yuk soladi. Masalan, har bir talabani moliyalashtiradigan mamlakat soliqlarni oshirishi yoki kasalxona va maktablarga sarfni qisqartirishi kerak. Natijada universitetga bormaydigan odamlar borganlar uchun to'lab beradi.\n\nTan olish kerakki, tarafdorlar to'lov kambag'al oilalardan chiqqan iqtidorli talabalarning o'qishiga to'sqinlik qiladi, deb bahslashadi. Biroq bu muammoni faqat muhtojlarga yordam beradigan grant va kreditlar bilan hal qilish mumkin.\n\nXulosa qilib aytganda, past to'lov va kuchli moliyaviy yordamli tizim hamma uchun bepul ta'limdan ko'ra muvozanatliroq yechim.",
        },
        { t: "check", ex: { k: "choice", q: "Which sentence is the writer's thesis?", opts: ["In my view, however, a fully free system is neither fair nor realistic.", "Many people believe that higher education should be free.", "For example, a country that funds every student must raise taxes.", "In conclusion, a system with low fees is more balanced."], a: 0, why: "Thesis — yozuvchining pozitsiyasi: *In my view … neither fair nor realistic*." } },
        { t: "check", ex: { k: "choice", q: "What is the function of \"Admittedly, supporters argue …\"?", opts: ["It admits the opposing view", "It gives an example", "It begins the conclusion", "It repeats the thesis"], a: 0, why: "**Admittedly** — qarshi tomonning dalilini tan olish (concession)." } },
        { t: "check", ex: { k: "tf", q: "The writer answers the counter-argument with grants and loans.", a: true, why: "*However, this problem can be solved by grants and loans* — rebuttal." } },
      ],
    },
    {
      title: "Dialog: Essay rejasi",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Zarina", en: "Timur, I have forty minutes to write an essay on remote work. Where should I start?", uz: "Timur, uzoqdan ishlash haqida essay yozishga qirq daqiqam bor. Qaerdan boshlay?" },
            { who: "Timur", en: "Spend five minutes on a plan. First decide your thesis. Are you for or against?", uz: "Besh daqiqani rejaga ajrat. Avval thesis ni hal qil. Tarafdormisan yoki qarshimisan?" },
            { who: "Zarina", en: "For, mostly. It saves time and money, although it can feel lonely.", uz: "Asosan tarafdorman. Vaqt va pulni tejaydi, garchi yolg'iz his qilish mumkin." },
            { who: "Timur", en: "Good. Then you have two body paragraphs: time and money. Each needs a topic sentence and an example.", uz: "Yaxshi. Demak, ikkita body paragraf: vaqt va pul. Har biriga topic sentence va misol kerak." },
            { who: "Zarina", en: "And the loneliness goes in the counter-argument, right?", uz: "Yolg'izlik esa qarshi fikr qismiga tushadi, shunday emasmi?" },
            { who: "Timur", en: "Exactly. Admit it, then refute it. For instance, companies can organise weekly meetings.", uz: "Aynan. Uni tan ol, keyin rad et. Masalan, kompaniyalar haftalik uchrashuv o'tkazishi mumkin." },
            { who: "Zarina", en: "That's a coherent plan. Thanks, Timur. I feel much less nervous now.", uz: "Bu izchil reja. Rahmat, Timur. Endi ancha kamroq hayajondaman." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "How does Timur suggest dealing with the loneliness problem?", opts: ["Admit it, then refute it", "Ignore it", "Make it the thesis", "Move it to the introduction"], a: 0, why: "*Admit it, then refute it.*" } },
      ],
    },
  ],
  words: [
    { en: "thesis", uz: "tezis, asosiy da'vo", ipa: "ˈθiː.sɪs", pos: "noun", ex: "Your thesis should appear at the end of the introduction.", exUz: "Tezisingiz kirish qismi oxirida bo'lishi kerak." },
    { en: "counter-argument", uz: "qarshi dalil", ipa: "ˈkaʊn.tə ˌɑː.ɡjə.mənt", pos: "noun", ex: "A good essay mentions at least one counter-argument.", exUz: "Yaxshi essayda kamida bitta qarshi dalil eslanadi." },
    { en: "refute", uz: "rad etmoq, isbotlab inkor qilmoq", ipa: "rɪˈfjuːt", pos: "verb", ex: "The scientist refuted the claim with new evidence.", exUz: "Olim bu da'voni yangi dalillar bilan rad etdi." },
    { en: "rebuttal", uz: "rad javobi", ipa: "rɪˈbʌt.əl", pos: "noun", ex: "His rebuttal was short but convincing.", exUz: "Uning rad javobi qisqa, lekin ishonarli edi." },
    { en: "coherent", uz: "izchil, mantiqan bog'langan", ipa: "kəʊˈhɪə.rənt", pos: "adjective", ex: "She gave a clear and coherent argument.", exUz: "U aniq va izchil dalil keltirdi." },
    { en: "elaborate", uz: "batafsil ochib bermoq", ipa: "ɪˈlæb.ə.reɪt", pos: "verb", ex: "Could you elaborate on your second point?", exUz: "Ikkinchi fikringizni batafsilroq ochib bera olasizmi?" },
    { en: "persuasive", uz: "ishontiruvchi", ipa: "pəˈsweɪ.sɪv", pos: "adjective", ex: "Concrete examples make an essay more persuasive.", exUz: "Aniq misollar essayni ishontiruvchanroq qiladi." },
    { en: "assert", uz: "qat'iy da'vo qilmoq", ipa: "əˈsɜːt", pos: "verb", ex: "The author asserts that cities will grow faster.", exUz: "Muallif shaharlar tezroq o'sadi, deb qat'iy da'vo qiladi." },
    { en: "concede", uz: "tan olmoq, ruxsat bermoq (haqligini)", ipa: "kənˈsiːd", pos: "verb", ex: "I concede that the plan has some risks.", exUz: "Rejada ba'zi xavflar borligini tan olaman." },
    { en: "signpost", uz: "yo'l ko'rsatkich (iboraning), bog'lovchi ibora", ipa: "ˈsaɪn.pəʊst", pos: "noun", ex: "Words such as firstly and moreover act as signposts for the reader.", exUz: "Firstly va moreover kabi so'zlar o'quvchi uchun yo'l ko'rsatkichdir." },
  ],
  practice: [
    { k: "choice", q: "Which sentence is the best thesis?", opts: ["Many people use phones.", "In this essay I will talk about phones.", "Schools should ban phones in lessons because they damage concentration.", "Phones are a topic."], a: 2, why: "Thesis aniq pozitsiya + sabab beradi." },
    { k: "choice", q: "In a body paragraph, what usually comes after the topic sentence?", opts: ["Explanation", "Conclusion", "Hook", "Refutation of another point"], a: 0, why: "Tartib: topic sentence → explanation → example → link." },
    { k: "listen", say: "In conclusion, a balanced approach is more realistic.", opts: ["In conclusion, a balanced approach is more realistic.", "At last, a balanced approach is more realistic.", "In conclusion a balance approach is realistic.", "In the end, balanced approach more realistic."], a: 0, why: "Xulosa iborasi: **In conclusion**." },
    { k: "fill", q: "To sum ___, the benefits outweigh the costs.", a: ["up"], uz: "Xulosa qilsak, afzalliklari xarajatlardan ustun.", why: "**To sum up**." },
    { k: "fill", q: "For ___, in Japan, many trains arrive exactly on time.", a: ["example", "instance"], uz: "Masalan, Yaponiyada ko'p poyezdlar aniq vaqtida keladi.", why: "**For example / For instance**." },
    { k: "fill", q: "First of all, cost is a problem. Secondly, time is limited. ___, health must be considered.", a: ["Finally", "Lastly", "Thirdly"], uz: "Va nihoyat, sog'liq ham hisobga olinishi kerak.", why: "Oxirgi dalil uchun: **Finally / Lastly / Thirdly**." },
    { k: "order", uz: "Mening fikrimcha, muvozanatli yondashuv — eng yaxshi yechim.", words: ["In", "my", "view,", "a", "balanced", "approach", "is", "the", "best", "solution."], extra: ["opinion", "think"], why: "**In my view, …**" },
    { k: "order", uz: "Biroq bu muammoni grantlar bilan hal qilish mumkin.", words: ["However,", "this", "problem", "can", "be", "solved", "by", "grants."], extra: ["although", "but"], why: "**However,** — rebuttal." },
    { k: "translate", uz: "Xulosa qilib aytganda, ikkala tomonning dalillari ham asosli.", a: ["In conclusion, both sides have valid arguments.", "In conclusion, both sides make valid arguments.", "To conclude, both sides have valid arguments.", "To sum up, both sides have valid arguments.", "In conclusion, both sides have valid points.", "In conclusion, both sides make valid points."], why: "**In conclusion, …**" },
    { k: "translate", uz: "Avvalo, bu yechim ancha arzon.", a: ["Firstly, this solution is much cheaper.", "First of all, this solution is much cheaper.", "Firstly, this solution is far cheaper.", "Firstly, this solution is a lot cheaper.", "First of all, this solution is far cheaper.", "First of all, this solution is a lot cheaper."], why: "**Firstly / First of all**." },
    { k: "fix", wrong: "At last, I want to say that technology is useful.", a: ["In conclusion, I want to say that technology is useful.", "In conclusion, technology is useful.", "To conclude, I want to say that technology is useful.", "To conclude, technology is useful."], hint: "xulosa iborasi", why: "**At last** xulosa emas; **In conclusion**." },
    { k: "fix", wrong: "In my opinion, I think that cities are better.", a: ["In my opinion, cities are better.", "I think that cities are better.", "I think cities are better."], hint: "ikki marta", why: "**In my opinion** va **I think** — bittasini tanlang." },
    { k: "match", pairs: [["thesis", "asosiy da'vo"], ["refute", "rad etmoq"], ["coherent", "izchil"], ["persuasive", "ishontiruvchi"], ["concede", "tan olmoq"]] },
    { k: "tf", q: "**Topic sentence** odatda paragrafning boshida turadi va paragrafning asosiy fikrini beradi.", a: true, why: "U paragraf mazmunini bir gapda e'lon qiladi." },
    { k: "dictation", say: "Admittedly, this view has some merit, but it ignores the cost.", uz: "Tan olish kerak, bu qarashda ma'no bor, lekin u narxni e'tiborsiz qoldiradi.", why: "**Admittedly** + qarshi fikr, keyin **but / however**." },
    { k: "choice", q: "Which sentence should NOT appear in a conclusion?", opts: ["A completely new argument with a new example", "A summary of the main points", "The thesis in new words", "A final recommendation"], a: 0, why: "Xulosada yangi dalil keltirilmaydi." },
    { k: "speak", say: "In my view, remote work benefits both employees and companies.", uz: "Mening fikrimcha, uzoqdan ishlash xodimlarga ham, kompaniyalarga ham foyda keltiradi." },
  ],
  quiz: [
    { k: "choice", q: "Which phrase introduces a counter-argument?", opts: ["Admittedly,", "Furthermore,", "For instance,", "In conclusion,"], a: 0, why: "**Admittedly** — qarshi fikrni tan olish." },
    { k: "choice", q: "Some say learning English is easy. ___, it requires years of practice.", opts: ["On the contrary", "For example", "In addition", "As a result"], a: 0, why: "Oldingi fikrni inkor qilish: **On the contrary**." },
    { k: "choice", q: "Which expression best introduces an example?", opts: ["A case in point is …", "Nevertheless,", "On the contrary,", "To sum up,"], a: 0, why: "**A case in point is …** (yoki *For example*) — misol keltiradi." },
    { k: "choice", q: "Which word adds another point?", opts: ["Moreover", "However", "Nevertheless", "Whereas"], a: 0, why: "**Moreover** — qo'shimcha dalil." },
    { k: "fill", q: "In my ___, free tuition is neither fair nor realistic.", a: ["view", "opinion"], uz: "Mening fikrimcha, bepul o'qish na adolatli, na real.", why: "**In my view / opinion**." },
    { k: "fix", wrong: "Because of this reason, many people prefer cars.", a: ["For this reason, many people prefer cars.", "Because of this, many people prefer cars."], hint: "for this reason", why: "**for this reason / because of this**." },
    { k: "order", uz: "Birinchidan, jamoat transporti ifloslanishni kamaytiradi.", words: ["First", "of", "all,", "public", "transport", "reduces", "pollution."], extra: ["firstly", "reduce"], why: "**First of all**." },
    { k: "translate", uz: "Masalan, Yaponiyada poyezdlar juda aniq vaqtida yuradi.", a: ["For example, trains in Japan are very punctual.", "For instance, trains in Japan are very punctual.", "For example, in Japan trains are very punctual.", "For instance, in Japan trains are very punctual."], why: "**For example, …**" },
    { k: "tf", q: "A thesis statement gives the writer's main position in the essay.", a: true, why: "Thesis — asosiy pozitsiya, kirishda beriladi." },
    { k: "dictation", say: "In conclusion, a balanced approach is the best solution.", uz: "Xulosa qilib aytganda, muvozanatli yondashuv — eng yaxshi yechim.", why: "**In conclusion, …**" },
  ],
  summary: [
    "Essay tuzilishi: **Introduction** (hook, background, **thesis**) → **Body 1–2** (topic sentence, explanation, example, link) → **counter-argument + refutation** → **Conclusion**.",
    "**Thesis** — bitta aniq, bahsli gap. **Body paragraph** — bitta fikr; PEEL: Point, Explanation, Example, Link. Dalilsiz da'vo ishontirmaydi (**elaborate**).",
    "Qarshi fikr: **concede → refute** (*Admittedly, … However, …*). Xulosa: thesis yangi so'zlar bilan, **yangi dalilsiz**.",
    "Signpost: *Firstly, Moreover, For example, However, Therefore, In conclusion*. Xatolar: ~~At last~~, ~~In my opinion I think~~, ~~Firstly of all~~, ~~Because of this reason~~.",
  ],
  homework: "Mavzu: «Should children learn to cook at school?» 5 daqiqada reja tuzing (thesis, ikkita body paragraf, qarshi fikr) va 200 so'zli essay yozing. Har bir paragrafda topic sentence, misol va kamida bitta signpost bo'lsin. Keyin xulosaning **thesis ni yangi so'zlar bilan** takrorlaganini tekshiring.",
};

export default lesson;
