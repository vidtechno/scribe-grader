import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u29-l5",
  title: "Environment and health",
  titleUz: "Atrof-muhit va salomatlik: so'zlar va birikmalar (carbon footprint, sustainable, diet)",
  goal: "Atrof-muhit va salomatlik mavzusida 10 ta B2 so'z va ularning **birikmalarini** (*reduce waste, take exercise, suffer from, raise awareness*) o'rganasiz, **so'z oilalarini** (*conserve – conservation, nutrition – nutritious*) bilasiz, bu mavzudagi tipik xatolardan (*suffer of, make sport, the nature*) qochasiz va IELTS Speaking / Writing da shu so'zlarni tabiiy ishlatasiz.",
  slides: [
    {
      title: "Nima uchun kerak? IELTS va hayotiy mavzular",
      blocks: [
        { t: "p", md: "**Atrof-muhit** va **salomatlik** — IELTS Speaking, Writing va suhbatda eng ko'p uchraydigan mavzular: *Is climate change the biggest problem? How can people stay healthy?* Bu darsda mavzuga oid **10 ta asosiy so'z**, ularning **birikmalari** va **so'z oilalari** bilan ishlaymiz." },
        { t: "p", md: "Birinchi guruh — **atrof-muhit** so'zlari:" },
        {
          t: "table", head: ["So'z", "Ma'no", "Misol"], speak: [0, 2],
          rows: [
            ["carbon footprint", "insonning (yoki kompaniyaning) chiqaradigan uglerod miqdori", "Flying increases your carbon footprint."],
            ["renewable", "qayta tiklanadigan (energiya)", "Wind and solar are renewable sources."],
            ["wildlife", "yovvoyi tabiat, yovvoyi hayvonlar", "The park protects local wildlife."],
            ["deplete", "tugatmoq, kamaytirmoq (resurs)", "Overfishing depletes the oceans."],
            ["conserve", "asramoq, tejamoq", "We must conserve water in summer."],
          ],
        },
        { t: "tip", tone: "info", md: "**Sustainable** («barqaror, tabiatga zarar keltirmaydigan») va **pollution** (ifloslanish) so'zlari oldingi bosqichlardan ma'lum. Ular bilan bu darsdagi so'zlarni birga ishlating: *sustainable energy, reduce pollution*." },
        { t: "check", ex: { k: "choice", q: "Solar and wind power are ___ energy sources.", opts: ["renewable", "depleted", "chronic", "sedentary"], a: 0, why: "**Renewable** — qayta tiklanadigan. Boshqa so'zlar boshqa mavzuga oid." } },
        { t: "check", ex: { k: "match", pairs: [["carbon footprint", "uglerod izi"], ["wildlife", "yovvoyi tabiat"], ["deplete", "tugatmoq"], ["conserve", "asramoq"]] } },
      ],
    },
    {
      title: "Salomatlik so'zlari",
      blocks: [
        { t: "p", md: "Ikkinchi guruh — **salomatlik** so'zlari. Ularni *a balanced diet* yoki *a sedentary lifestyle* kabi birikmalar bilan yodlang." },
        {
          t: "table", head: ["So'z", "Ma'no", "Misol"], speak: [0, 2],
          rows: [
            ["sedentary", "kam harakatli, o'tirib ishlaydigan", "Office workers often have a sedentary lifestyle."],
            ["immune system", "immunitet tizimi", "Sleep strengthens your immune system."],
            ["chronic", "surunkali (uzoq davom etadigan)", "He suffers from chronic back pain."],
            ["nutrition", "ovqatlanish, oziqa moddalari", "Good nutrition is important for children."],
            ["balanced diet", "muvozanatli ovqatlanish", "A balanced diet includes fruit, vegetables and protein."],
          ],
        },
        {
          t: "examples", items: [
            { en: "A sedentary job can lead to chronic health problems.", uz: "Kam harakatli ish surunkali sog'liq muammolariga olib kelishi mumkin." },
            { en: "Vitamin C helps the immune system fight infections.", uz: "C vitamini immunitet tizimiga infeksiyalarga qarshi kurashishga yordam beradi." },
            { en: "Nutrition is more than just eating less sugar.", uz: "Ovqatlanish shunchaki kamroq shakar yeyishdan ko'proq narsa." },
          ],
        },
        { t: "tip", tone: "warn", md: "**Chronic** («surunkali») ≠ **acute** («o'tkir»). *Chronic* kasallik uzoq davom etadi; *acute* — tez boshlanadi va qisqa. **Diet** ikki ma'noda: *a balanced diet* (odat bo'lgan ovqatlanish) va *to be on a diet* (vazn tashlash uchun cheklov)." },
        { t: "check", ex: { k: "choice", q: "He works at a desk all day and rarely moves. He has a ___ lifestyle.", opts: ["sedentary", "chronic", "renewable", "balanced"], a: 0, why: "**Sedentary lifestyle** — kam harakatli hayot tarzi." } },
        { t: "check", ex: { k: "fill", q: "A person with a weak immune ___ catches colds easily.", a: ["system"], why: "**Immune system** — immunitet tizimi.", hint: "s_____" } },
      ],
    },
    {
      title: "Muhim birikmalar (collocations)",
      blocks: [
        { t: "p", md: "So'zlar yolg'iz emas, **birikma** bilan yashaydi. Quyidagilarni butun holda yodlang, chunki noto'g'ri fe'l qo'ysangiz, gap g'alati eshitiladi." },
        {
          t: "table", head: ["Birikma", "Ma'no", "Misol"], speak: [0, 2],
          rows: [
            ["reduce waste / cut emissions", "chiqindini / emissiyani kamaytirmoq", "Factories must cut emissions."],
            ["protect wildlife", "yovvoyi tabiatni muhofaza qilmoq", "National parks protect wildlife."],
            ["raise awareness (of / about)", "xabardorlikni oshirmoq", "The campaign raised awareness of plastic waste."],
            ["take exercise / do sport", "jismoniy mashq qilmoq", "I try to take exercise three times a week."],
            ["suffer from", "…dan azob chekmoq, …bilan og'rimoq", "Many people suffer from stress."],
            ["follow / be on a diet", "parhez tutmoq", "She follows a strict diet."],
            ["boost your immune system", "immunitetni mustahkamlamoq", "Fruit boosts your immune system."],
            ["make a difference", "o'zgarish yaratmoq, ta'sir qilmoq", "Small actions can make a big difference."],
          ],
        },
        { t: "tip", tone: "info", md: "**Take exercise** = jismoniy mashq qilmoq (umumiy). **Do sport / play a sport** — sport turi bilan: *do athletics, play tennis*. ~~Make sport~~ inglizchada yo'q." },
        { t: "check", ex: { k: "choice", q: "The new campaign aims to ___ awareness of air pollution.", opts: ["raise", "make", "give", "take"], a: 0, why: "**Raise awareness** — barqaror birikma." } },
        { t: "check", ex: { k: "choice", q: "Many people living near the factory ___ breathing problems.", opts: ["suffer from", "suffer of", "suffer with", "suffer about"], a: 0, why: "**Suffer from** + kasallik / muammo." } },
        { t: "check", ex: { k: "fill", q: "Governments should ___ emissions from cars. (reduce quickly)", a: ["cut", "reduce"], why: "**Cut / reduce emissions** — emissiyani kamaytirmoq.", hint: "c__ yoki r_____" } },
      ],
    },
    {
      title: "So'z oilalari",
      blocks: [
        { t: "p", md: "Bir ildizdan bir nechta so'z yasaladi. IELTS da ularni to'g'ri turkumda ishlatish ball beradi. Ot, fe'l, sifat shakllari:" },
        {
          t: "table", head: ["Fe'l", "Ot", "Sifat / shaxs"], speak: [0, 1, 2],
          rows: [
            ["conserve", "conservation", "conservationist (shaxs)"],
            ["pollute", "pollution, pollutant", "polluted"],
            ["renew", "renewal", "renewable"],
            ["nourish", "nourishment, nutrition", "nutritious (to'yimli, foydali)"],
            ["deplete", "depletion", "depleted"],
            ["(be) healthy", "health", "healthy, unhealthy"],
          ],
        },
        {
          t: "examples", items: [
            { en: "Conservation of forests is a global priority.", uz: "O'rmonlarni asrash — butun dunyo ustuvor vazifasi." },
            { en: "Pollution is higher in winter, when more coal is burned.", uz: "Ifloslanish qishda, ko'proq ko'mir yoqilganda yuqori." },
            { en: "Nutritious food gives children energy for school.", uz: "To'yimli ovqat bolalarga maktab uchun quvvat beradi." },
          ],
        },
        { t: "tip", tone: "warn", md: "**Healthy** — sog'lom yoki foydali (*healthy food*). **Healthily** — ravish: *eat healthily*. **Health** — ot: *good health*. ~~Eat healthy~~ kundalik tilda aytiladi, lekin yozma ishda **eat healthily / a healthy diet** deng." },
        { t: "check", ex: { k: "fill", q: "The ___ of wildlife is the job of many charities. (conserve)", a: ["conservation"], why: "Ot shakli: **conservation**.", hint: "c____________" } },
        { t: "check", ex: { k: "choice", q: "She wants to live more ___. (healthy)", opts: ["healthily", "healthy", "health", "healthier of"], a: 0, why: "Fe'lni tavsiflaydi — ravish: **healthily**." } },
      ],
    },
    {
      title: "Tipik xatolar: o'zbek tilidan interferensiya",
      blocks: [
        { t: "p", md: "O'zbekchada «kasallikdan azob chekmoq», «sport bilan shug'ullanmoq», «tabiat» deymiz. Inglizchaga so'zma-so'z o'girganimizda quyidagi xatolar chiqadi:" },
        { t: "compare",
          good: { title: "To'g'ri", items: ["She suffers from asthma.", "He does sport every day.", "Nature is in danger.", "We should eat healthily."] },
          bad: { title: "Xato", items: ["She suffers of asthma.", "He makes sport every day.", "The nature is in danger.", "We should eat healthy."] } },
        { t: "check", ex: { k: "fix", wrong: "My father suffers of chronic back pain.", a: ["My father suffers from chronic back pain."], hint: "preposition", why: "**Suffer from**, *of* emas." } },
        { t: "check", ex: { k: "fix", wrong: "He makes sport three times a week.", a: ["He does sport three times a week.", "He plays sport three times a week.", "He does sports three times a week.", "He plays sports three times a week."], hint: "make emas", why: "Inglizchada **do sport / play sport**, ~~make sport~~ yo'q." } },
        { t: "check", ex: { k: "fix", wrong: "The nature gives us clean air and water.", a: ["Nature gives us clean air and water."], hint: "umumiy ot", why: "**Nature** umumiy ma'noda artiklsiz ishlatiladi." } },
        { t: "check", ex: { k: "fix", wrong: "Doctors say we must eat healthy every day.", a: ["Doctors say we must eat healthily every day.", "Doctors say we must eat healthy food every day."], hint: "ravish", why: "Fe'lni tavsiflash uchun **healthily**, yoki **healthy food**." } },
      ],
    },
    {
      title: "O'qing: Kichik odatlar, katta ta'sir",
      blocks: [
        {
          t: "text", title: "Small habits, big difference", voice: "emma",
          en: "Many of us want to look after both our health and the planet, and the two goals are closely connected. A sedentary lifestyle can lead to chronic problems, so I try to take exercise every day, and I cycle to work, which also reduces my carbon footprint. I follow a balanced diet with plenty of vegetables, because good nutrition helps the immune system to fight illness. At home we conserve energy and use renewable electricity from a local scheme. Of course, resources are being depleted faster than ever, and wildlife is suffering from the loss of its habitat. Governments must act, but individuals can raise awareness too. Small changes in our daily habits really can make a difference.",
          uz: "Ko'pimiz o'z sog'ligimiz va sayyoramizga ham g'amxo'rlik qilishni xohlaymiz va bu ikki maqsad bir-biri bilan chambarchas bog'liq. Kam harakatli hayot tarzi surunkali muammolarga olib kelishi mumkin, shuning uchun har kuni mashq qilishga harakat qilaman va ishga velosipedda boraman, bu mening uglerod izimni ham kamaytiradi. Men sabzavotga boy muvozanatli ovqatlanaman, chunki yaxshi oziqlanish immunitet tizimiga kasallikka qarshi kurashishga yordam beradi. Uyda energiyani tejaymiz va mahalliy dasturdan qayta tiklanadigan elektr energiyasidan foydalanamiz. Albatta, resurslar avvalgidan tez tugamoqda va yovvoyi tabiat yashash muhitini yo'qotishdan azob chekmoqda. Hukumatlar harakat qilishi kerak, lekin shaxslar ham xabardorlikni oshira oladi. Kundalik odatlardagi kichik o'zgarishlar haqiqatan ham ta'sir qilishi mumkin.",
        },
        { t: "check", ex: { k: "tf", q: "The writer cycles to work to reduce her carbon footprint.", a: true, why: "*I cycle to work, which also reduces my carbon footprint.*" } },
        { t: "check", ex: { k: "choice", q: "According to the writer, good nutrition helps ___.", opts: ["the immune system fight illness", "wildlife to grow", "the planet to cool", "people to work longer"], a: 0, why: "*Good nutrition helps the immune system to fight illness.*" } },
      ],
    },
    {
      title: "Dialog: Maslahat",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Peter", en: "Grace, you look tired. Are you sleeping well?", uz: "Greys, charchagan ko'rinasiz. Yaxshi uxlayapsizmi?" },
            { who: "Grace", en: "Not really. I sit at a desk all day, and I think I'm becoming too sedentary.", uz: "Unchalik emas. Kun bo'yi stolda o'tiraman va juda kam harakatli bo'lib qoldim shekilli." },
            { who: "Peter", en: "You should take some exercise. Even a short walk boosts your immune system.", uz: "Mashq qilishingiz kerak. Hatto qisqa sayr ham immunitetni mustahkamlaydi." },
            { who: "Grace", en: "I know. I also suffer from headaches, and I want to follow a more balanced diet.", uz: "Bilaman. Boshim ham og'riydi va men muvozanatli ovqatlanishni xohlayman." },
            { who: "Peter", en: "Good idea. Good nutrition makes a real difference. Why not cook at home more often?", uz: "Yaxshi fikr. Yaxshi ovqatlanish katta ta'sir qiladi. Nega uyda ko'proq pishirmaysiz?" },
            { who: "Grace", en: "That would also cut my food waste and reduce my carbon footprint.", uz: "Bu oziq-ovqat chiqindisini ham kamaytirardi va uglerod izimni qisqartirardi." },
            { who: "Peter", en: "Exactly. Look after yourself, and you protect the planet too.", uz: "Aynan. O'zingizga qarasangiz, sayyorani ham asraysiz." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "Why does Grace think she is too sedentary?", opts: ["She sits at a desk all day.", "She does too much sport.", "She cooks every day.", "She sleeps too much."], a: 0, why: "*I sit at a desk all day.*" } },
        { t: "check", ex: { k: "tf", q: "Peter advises Grace to eat less food.", a: false, why: "Peter faqat mashq qilish va uyda pishirishni maslahat beradi, kamroq yeyishni emas." } },
      ],
    },
  ],
  words: [
    { en: "carbon footprint", uz: "uglerod izi", ipa: "ˌkɑː.bən ˈfʊt.prɪnt", pos: "noun", ex: "Eating less meat can reduce your carbon footprint.", exUz: "Kamroq go'sht yeyish uglerod izingizni kamaytirishi mumkin." },
    { en: "renewable", uz: "qayta tiklanadigan", ipa: "rɪˈnjuː.ə.bəl", pos: "adj", ex: "Wind is a renewable source of energy.", exUz: "Shamol qayta tiklanadigan energiya manbai." },
    { en: "wildlife", uz: "yovvoyi tabiat", ipa: "ˈwaɪld.laɪf", pos: "noun", ex: "The reserve is home to a lot of wildlife.", exUz: "Qo'riqxonada yovvoyi tabiat vakillari ko'p." },
    { en: "sedentary", uz: "kam harakatli, o'tirib ishlaydigan", ipa: "ˈsed.ən.tri", pos: "adj", ex: "A sedentary lifestyle is bad for your back.", exUz: "Kam harakatli hayot tarzi belingiz uchun yomon." },
    { en: "immune system", uz: "immunitet tizimi", ipa: "ɪˈmjuːn ˌsɪs.təm", pos: "noun", ex: "Regular sleep supports a strong immune system.", exUz: "Muntazam uyqu kuchli immunitet tizimini qo'llab-quvvatlaydi." },
    { en: "chronic", uz: "surunkali", ipa: "ˈkrɒn.ɪk", pos: "adj", ex: "Chronic stress can damage your health.", exUz: "Surunkali stress sog'ligingizga zarar yetkazishi mumkin." },
    { en: "nutrition", uz: "oziqlanish", ipa: "njuːˈtrɪʃ.ən", pos: "noun", ex: "Good nutrition is essential for growing children.", exUz: "Yaxshi oziqlanish o'sayotgan bolalar uchun zarur." },
    { en: "deplete", uz: "tugatmoq, kamaytirmoq", ipa: "dɪˈpliːt", pos: "verb", ex: "Heavy farming can deplete the soil of nutrients.", exUz: "Jadal dehqonchilik tuproqdagi oziq moddalarni tugatishi mumkin." },
    { en: "conserve", uz: "asramoq, tejamoq", ipa: "kənˈsɜːv", pos: "verb", ex: "Turn off the lights to conserve energy.", exUz: "Energiyani tejash uchun chiroqlarni o'chiring." },
    { en: "balanced diet", uz: "muvozanatli ovqatlanish", ipa: "ˌbæl.ənst ˈdaɪ.ət", pos: "noun", ex: "A balanced diet contains all the main food groups.", exUz: "Muvozanatli ovqatlanish barcha asosiy oziq guruhlarini o'z ichiga oladi." },
  ],
  practice: [
    { k: "choice", q: "He has suffered from ___ back pain for ten years.", opts: ["chronic", "renewable", "sedentary", "balanced"], a: 0, why: "O'n yildan beri davom etayotgan og'riq — **chronic**." },
    { k: "choice", q: "Which is a collocation?", opts: ["raise awareness", "make awareness", "do awareness", "take awareness"], a: 0, why: "**Raise awareness** — barqaror birikma." },
    { k: "listen", say: "Small changes in our daily habits can make a big difference.", opts: ["Small changes in our daily habits can make a big difference.", "Small changes in our daily habits can do a big difference.", "Small changes in your daily habit can make a big difference.", "Small changes in our daily habits can make big different."], a: 0, why: "**Make a difference** — o'zgarish yaratmoq." },
    { k: "fill", q: "Wind and solar are examples of ___ energy. (can be used again and again)", a: ["renewable"], why: "**Renewable energy** — qayta tiklanadigan energiya." },
    { k: "fill", q: "We should try to ___ water during the dry season. (save carefully)", a: ["conserve", "save"], why: "**Conserve** (yoki *save*) water — suvni tejamoq.", hint: "c______" },
    { k: "fill", q: "She suffers ___ asthma, so she carries an inhaler.", a: ["from"], why: "**Suffer from** + kasallik." },
    { k: "order", uz: "Muvozanatli ovqatlanish immunitet tizimini mustahkamlaydi.", words: ["A", "balanced", "diet", "boosts", "the", "immune", "system."], extra: ["boost", "chronic"], why: "**Balanced diet** birlik: **boosts**." },
    { k: "order", uz: "Biz uglerod izimizni kamaytirishimiz kerak.", words: ["We", "need", "to", "reduce", "our", "carbon", "footprint."], extra: ["make", "renewable"], why: "**Reduce one's carbon footprint**." },
    { k: "translate", uz: "Kam harakatli hayot tarzi uning sog'lig'iga zarar yetkazdi.", a: ["His sedentary lifestyle damaged his health.", "His sedentary lifestyle has damaged his health.", "His sedentary lifestyle harmed his health.", "His sedentary lifestyle has harmed his health.", "Her sedentary lifestyle damaged her health.", "Her sedentary lifestyle has damaged her health."], why: "**Sedentary lifestyle** — kam harakatli hayot tarzi." },
    { k: "translate", uz: "Yovvoyi tabiatni muhofaza qilish juda muhim.", a: ["Protecting wildlife is very important.", "It is very important to protect wildlife.", "Protecting wildlife is extremely important.", "It is important to protect wildlife."], why: "**Protect wildlife**: wildlife sanalmaydigan ot." },
    { k: "match", pairs: [["sedentary", "kam harakatli"], ["chronic", "surunkali"], ["nutrition", "oziqlanish"], ["deplete", "tugatmoq"], ["immune system", "immunitet tizimi"]] },
    { k: "fix", wrong: "He makes sport every morning.", a: ["He does sport every morning.", "He plays sport every morning.", "He does sports every morning.", "He plays sports every morning."], hint: "make emas", why: "**Do / play sport**." },
    { k: "fix", wrong: "My mother suffers of high blood pressure.", a: ["My mother suffers from high blood pressure."], hint: "preposition", why: "**Suffer from**." },
    { k: "tf", q: "*Chronic* kasallik tez boshlanadi va tez tugaydi.", a: false, why: "**Chronic** — uzoq davom etadi. Tez boshlanadigan — **acute**." },
    { k: "dictation", say: "Governments must cut emissions to protect wildlife.", uz: "Hukumatlar yovvoyi tabiatni asrash uchun emissiyani kamaytirishi kerak.", why: "**Cut emissions** va **protect wildlife** — birikmalar." },
    { k: "choice", q: "Which sentence is correct?", opts: ["Nature is in danger.", "The nature is in danger.", "A nature is in danger.", "Natures are in danger."], a: 0, why: "Umumiy ma'noda **nature** artiklsiz." },
    { k: "speak", say: "I follow a balanced diet and take exercise every day.", uz: "Men muvozanatli ovqatlanaman va har kuni mashq qilaman." },
  ],
  quiz: [
    { k: "choice", q: "Overfishing is ___ the world's oceans.", opts: ["depleting", "conserving", "boosting", "renewing"], a: 0, why: "Haddan ortiq baliq ovlash okeanlarni **tugatmoqda**." },
    { k: "choice", q: "The charity wants to raise ___ of the danger of plastic bags.", opts: ["awareness", "nutrition", "wildlife", "diet"], a: 0, why: "**Raise awareness of** — xabardorlikni oshirmoq." },
    { k: "choice", q: "Which sentence is correct?", opts: ["We must eat healthily.", "We must eat health.", "We must to eat healthily.", "We must eating healthy."], a: 0, why: "Ravish **healthily** fe'lni tavsiflaydi." },
    { k: "choice", q: "A nutritionist advises people on ___.", opts: ["nutrition", "wildlife", "renewables", "footprints"], a: 0, why: "**Nutritionist** — oziqlanish bo'yicha mutaxassis." },
    { k: "fill", q: "Sitting for long hours is part of a ___ lifestyle. (little movement)", a: ["sedentary"], uz: "Uzoq o'tirish kam harakatli hayot tarzining bir qismi.", why: "**Sedentary lifestyle**." },
    { k: "fill", q: "Good sleep boosts your ___ system.", a: ["immune"], uz: "Yaxshi uyqu immunitet tizimingizni mustahkamlaydi.", why: "**Immune system**." },
    { k: "order", uz: "Sayyorani asrash uchun energiyani tejash kerak.", words: ["We", "must", "conserve", "energy", "to", "protect", "the", "planet."], extra: ["deplete", "with"], why: "**Conserve energy** — energiyani tejamoq." },
    { k: "translate", uz: "U surunkali kasallikdan azob chekadi.", a: ["He suffers from a chronic illness.", "She suffers from a chronic illness.", "He suffers from chronic illness.", "She suffers from chronic illness.", "He suffers from a chronic disease.", "She suffers from a chronic disease.", "He suffers from a chronic condition.", "She suffers from a chronic condition."], why: "**Suffer from** + **chronic**." },
    { k: "fix", wrong: "The nature is beautiful in spring.", a: ["Nature is beautiful in spring."], hint: "artikl", why: "Umumiy **nature** artiklsiz." },
    { k: "tf", q: "*Renewable energy* bir marta ishlatiladigan va tugaydigan energiya.", a: false, why: "**Renewable** — qayta tiklanadi (quyosh, shamol)." },
  ],
  summary: [
    "Atrof-muhit: **carbon footprint, renewable, wildlife, deplete, conserve**. Salomatlik: **sedentary, immune system, chronic, nutrition, balanced diet**.",
    "Birikmalar: **reduce waste / cut emissions, protect wildlife, raise awareness, take exercise, suffer from, make a difference**.",
    "So'z oilalari: *conserve – conservation*, *nutrition – nutritious*, *renew – renewable*, *health – healthy – healthily*.",
    "Xatolar: ~~suffer of~~, ~~make sport~~, ~~the nature~~, ~~eat healthy~~ → **suffer from, do sport, nature, eat healthily**.",
  ],
  homework: "**Sog'lom hayot va atrof-muhit** haqida 80 so'zdan iborat qisqa matn yozing. Unda kamida 7 ta so'z yoki birikma bo'lsin (*carbon footprint, take exercise, suffer from, raise awareness…*). Keyin matnni 1 daqiqa ichida baland ovozda aytib, yozib oling.",
};

export default lesson;
