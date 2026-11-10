import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u25-l5",
  title: "Feelings, personality and character",
  titleUz: "Hissiyotlar, shaxs va xarakter: so'zlar va birikmalar",
  goal: "Hissiyotlar va xarakterni **aniq va nozik** tasvirlaysiz: **resentful, easy-going, down-to-earth, self-conscious, tolerant, insecure, gullible, wary, open-minded, disillusioned** so'zlarini to'g'ri **predlog** bilan (*wary of, tolerant of, disillusioned with*) ishlatasiz, **-ed / -ing** sifatlarini (*bored / boring*) adashtirmaysiz va intervyu yoki IELTS Speaking'da odam haqida boy gapirasiz.",
  slides: [
    {
      title: "Nega «good» va «bad» yetarli emas",
      blocks: [
        { t: "p", md: "Intervyuda sizdan so'rashadi: *«Rahbaringizni qanday tasvirlaysiz?»* yoki IELTS Speaking'da: *«Describe a person you admire.»* Agar siz faqat *good*, *nice*, *bad*, *angry* desangiz, javob **sodda** bo'ladi. B2 darajada odamni **aniq** tasvirlash kerak: u **xarakteri** (personality: doimiy xususiyat) yoki **hissi** (feeling: vaqtinchalik holat) haqida ekanini ajrata olishingiz muhim." },
        {
          t: "table", head: ["Xarakter (doimiy)", "His (vaqtinchalik)"], speak: [0, 1],
          rows: [
            ["easy-going, down-to-earth, tolerant", "resentful, wary, disillusioned"],
            ["gullible, open-minded", "self-conscious, insecure (ba'zan xarakter, ba'zan his)"],
          ],
        },
        { t: "tip", tone: "info", md: "Chegarasi qat'iy emas: **insecure** doimiy xarakter ham, yomon kunning hissi ham bo'lishi mumkin. Muhimi: gapda **bu** odam uchun doim shundaymi yoki hozir shundaymi, buni kontekst ko'rsatadi: *He is a gullible person* (doim) va *I felt self-conscious at the party* (o'sha kuni)." },
        { t: "check", ex: { k: "choice", q: "Qaysi so'z ko'proq **doimiy xarakter**ni bildiradi?", opts: ["easy-going", "resentful about yesterday's decision", "wary of the stranger today", "disillusioned after the news"], a: 0, why: "**easy-going** — odamning doimiy xususiyati (xotirjam, sodda munosabat). Qolganlari aniq voqeaga bog'langan his." } },
      ],
    },
    {
      title: "Xarakter: easy-going, down-to-earth, tolerant, open-minded, gullible",
      blocks: [
        {
          t: "table", head: ["So'z", "Ma'nosi", "Misol"], speak: [2],
          rows: [
            ["easy-going", "xotirjam, qiyinchilik tug'dirmaydigan", "My manager is easy-going; she rarely loses her temper."],
            ["down-to-earth", "oddiy, real fikrlaydigan, kibrsiz", "Despite her fame, she is very down-to-earth."],
            ["tolerant", "bag'rikeng", "A tolerant teacher accepts different opinions."],
            ["open-minded", "yangi g'oyalarga ochiq", "Be open-minded about other ways of working."],
            ["gullible", "tez ishonuvchan, aldanuvchan", "Gullible people believe anything they read online."],
          ],
        },
        { t: "p", md: "**Predloglar:** **tolerant of** (*tolerant of criticism*), **open-minded about** (*open-minded about new methods*). **Easy-going**, **down-to-earth** va **gullible** dan keyin predlog kerak emas. Bular odatda **ijobiy** (*easy-going, down-to-earth, tolerant, open-minded*), faqat **gullible** — **salbiy** (aldanib qolishga moyil)." },
        {
          t: "examples", items: [
            { en: "Our team leader is easy-going, so nobody is afraid to ask questions.", uz: "Jamoa rahbarimiz xotirjam, shuning uchun hech kim savol berishdan qo'rqmaydi." },
            { en: "He is tolerant of mistakes as long as people learn from them.", uz: "U xatolarga bag'rikeng, agar odamlar ulardan o'rgansa." },
            { en: "Gullible customers often fall for fake offers.", uz: "Tez ishonuvchan mijozlar ko'pincha soxta takliflarga aldanadi." },
          ],
        },
        { t: "check", ex: { k: "fill", q: "A good manager should be tolerant ___ different opinions in the team.", a: ["of", "towards"], hint: "tolerant + predlog", why: "**tolerant of** (*something*) birikmasi." } },
        { t: "check", ex: { k: "choice", q: "He is so ___ that he believed an email saying he had won a car.", opts: ["gullible", "tolerant", "down-to-earth", "easy-going"], a: 0, why: "**gullible** — tez ishonuvchan, aldanuvchan. Boshqa so'zlar ijobiy xarakter." } },
      ],
    },
    {
      title: "His-tuyg'ular: resentful, self-conscious, insecure, wary, disillusioned",
      blocks: [
        {
          t: "table", head: ["So'z", "Ma'nosi", "Predlog + misol"], speak: [2],
          rows: [
            ["resentful", "xafa, ichida alam saqlagan", "resentful of / about: She felt resentful about not being promoted."],
            ["self-conscious", "o'zini noqulay his qilgan, uyalgan", "self-conscious about: He's self-conscious about his accent."],
            ["insecure", "o'ziga ishonmaydigan, xavotirli", "insecure about: She feels insecure about her new job."],
            ["wary", "ehtiyotkor, shubhalanuvchi", "wary of: Be wary of offers that seem too good."],
            ["disillusioned", "umidi puchga chiqqan, ko'ngli qolgan", "disillusioned with: He became disillusioned with politics."],
          ],
        },
        { t: "p", md: "**Resentful** o'tmishdagi adolatsizlik haqidagi **uzoq saqlangan** alamni bildiradi (*xafa* bo'lishdan kuchliroq). **Disillusioned** — avval nimagadir **umid** bog'lagan, keyin **ko'ngli qolgan**. **Wary** — qo'rqmaydi, lekin **ehtiyot** bo'ladi (xavf bor deb o'ylaydi)." },
        { t: "tip", tone: "warn", md: "**Self-conscious** — «o'zini ongli» emas, balki «**boshqalar meni qanday ko'rishidan xavotirda**». *She felt self-conscious in front of the camera.* Salbiy ma'no." },
        { t: "check", ex: { k: "choice", q: "Prices rose again and she lost her trust in the system. She felt ___ with the government.", opts: ["disillusioned", "easy-going", "tolerant", "gullible"], a: 0, why: "Avval umid bor edi, keyin ko'ngli qoldi: **disillusioned with**." } },
        { t: "check", ex: { k: "choice", q: "Be ___ of strangers who ask for your bank details by phone.", opts: ["wary", "open-minded", "resentful", "tolerant"], a: 0, why: "Xavf bor, shuning uchun ehtiyotkor: **wary of**." } },
      ],
    },
    {
      title: "-ed va -ing sifatlari, predloglar",
      blocks: [
        { t: "p", md: "**-ed** sifat **his-tuyg'uni** (kim his qilayotgani), **-ing** sifat **sababni** (nima his uyg'otayotgani) bildiradi: *I am **bored**. The film is **boring**.* Ko'p fe'llar shu qoliplarga ega: *embarrass → embarrassed / embarrassing, exhaust → exhausted / exhausting, frustrate → frustrated / frustrating.*" },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I felt embarrassed when I forgot his name.", "The lecture was boring, so I got bored.", "It was an exhausting week; I'm exhausted."] },
          bad: { title: "Xato", items: ["I felt embarrassing when I forgot his name.", "The lecture was bored, so I got boring.", "It was an exhausted week; I'm exhausting."] },
        },
        { t: "p", md: "Hissiyot sifatlaridan keyingi **predloglar** o'zbek tilidagi tarjimaga mos kelmaydi, ularni **birikma** sifatida yodlang:" },
        {
          t: "table", head: ["Sifat", "Predlog", "Misol"], speak: [2],
          rows: [
            ["jealous / proud / afraid / capable", "of", "She is jealous of her sister's success."],
            ["wary / tolerant / resentful", "of (resentful: of / about)", "He is wary of new software."],
            ["disillusioned / disappointed / fed up", "with", "I'm disillusioned with the project."],
            ["self-conscious / insecure / worried", "about", "He's self-conscious about his height."],
            ["relieved / thrilled / amazed", "that / at / by", "I was relieved that the results were good."],
          ],
        },
        { t: "check", ex: { k: "fill", q: "She is very proud ___ her daughter's achievements.", a: ["of"], why: "**proud of** birikmasi." } },
        { t: "check", ex: { k: "choice", q: "After eight hours of meetings, I was totally ___.", opts: ["exhausted", "exhausting", "exhaust", "exhaustion"], a: 0, why: "Men his qilaman: **-ed** sifat." } },
      ],
    },
    {
      title: "Tipik xatolar (o'zbek tilidan interferensiya)",
      blocks: [
        { t: "p", md: "O'zbek tilida «hasad qilmoq, g'ururlanmoq, ko'ngli qolmoq» kabi fe'llar qo'shimchalar bilan keladi (*-dan, -ga, -dan*). Inglizchada esa **sifat + predlog** ishlatiladi va har bir sifat uchun predlog **qat'iy**. Bundan tashqari, **bored / boring** farqi o'zbek tilida kam seziladi." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["He is jealous of his brother.", "She is wary of strangers.", "The lecture was so boring that I fell asleep."] },
          bad: { title: "Xato", items: ["He is jealous from his brother.", "She is wary from strangers.", "The lecture was so bored that I fell asleep."] },
        },
        { t: "tip", tone: "warn", md: "**1.** *jealous* — **of** (*from*, *to* emas). **2.** *wary* — **of**. **3.** Sabab (nima?) — **-ing**: *boring lecture*; his (kim?) — **-ed**: *bored students*. **4.** *tolerant of*, *disillusioned with*, *self-conscious about* birikmasini bir butun sifatida yod oling." },
        { t: "check", ex: { k: "fix", wrong: "He is jealous from his brother's success.", a: ["He is jealous of his brother's success."], hint: "jealous + predlog", why: "**jealous of**." } },
        { t: "check", ex: { k: "fix", wrong: "The lecture was so bored that I fell asleep.", a: ["The lecture was so boring that I fell asleep."], hint: "sabab uchun -ing", why: "Lecture — sabab, shuning uchun **boring**." } },
        { t: "check", ex: { k: "fix", wrong: "She is wary from strangers.", a: ["She is wary of strangers."], hint: "wary + predlog", why: "**wary of** (something)." } },
      ],
    },
    {
      title: "O'qing: Ikki xil rahbar",
      blocks: [
        {
          t: "text", title: "Two very different bosses", voice: "emma",
          en: "I have worked for two managers, and they could not have been more different. My first boss, Mr Hale, was ambitious but not at all down-to-earth. He was wary of new ideas and rarely tolerant of mistakes. When I made a small error in my first month, I felt so self-conscious that I stopped speaking in meetings. Looking back, I was resentful about it for a long time. By the end of the year I was disillusioned with the whole company. My second boss, Ms Grant, is the opposite. She is easy-going and open-minded, and she listens to everyone, even to the youngest trainee. She is never gullible, though; she always checks the facts before she decides. In her team nobody feels insecure, because mistakes are treated as part of learning. I am much happier now, and I think the difference shows that character in a leader matters as much as skill.",
          uz: "Men ikki rahbar ostida ishlaganman va ular bir-biridan juda farq qilardi. Birinchi boshliqim janob Heyl shuhratparast edi, lekin sira ham oddiy emas edi. U yangi g'oyalardan ehtiyot bo'lardi va xatolarga kamdan-kam bag'rikeng edi. Birinchi oyda kichik xato qilganimda, o'zimni shu qadar noqulay his qildimki, yig'ilishlarda gapirmay qo'ydim. Orqaga qarasam, men bu haqda uzoq vaqt alam saqlab yurdim. Yil oxiriga kelib butun kompaniyadan ko'nglim qoldi. Ikkinchi boshliqim, xonim Grant, aksincha. U xotirjam va yangi g'oyalarga ochiq, hammani, hatto eng yosh stajyorni ham tinglaydi. Lekin u hech qachon tez ishonuvchan emas, qaror qilishdan oldin faktlarni tekshiradi. Uning jamoasida hech kim o'zini ishonchsiz his qilmaydi, chunki xatolar o'rganishning bir qismi sifatida qabul qilinadi. Men endi ancha baxtliman va menimcha, bu farq rahbarda xarakter mahoratdek muhim ekanini ko'rsatadi.",
        },
        { t: "check", ex: { k: "tf", q: "Ms Grant believes everything people tell her.", a: false, why: "Matnda: *She is never gullible; she always checks the facts.*" } },
        { t: "check", ex: { k: "choice", q: "Why did the writer stop speaking in meetings?", opts: ["She felt self-conscious after a small mistake.", "She became easy-going.", "She was promoted.", "Her boss was open-minded."], a: 0, why: "Matnda: *I felt so self-conscious that I stopped speaking in meetings.*" } },
      ],
    },
    {
      title: "Dialog: Yangi hamkasb haqida",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Tom", en: "How is your new colleague, Olivia? You said she was a bit insecure at first.", uz: "Yangi hamkasbingiz qalay, Olivia? Dastlab biroz o'ziga ishonchsiz deb aytgan edingiz." },
            { who: "Olivia", en: "She's much better now. She felt self-conscious about her English, but everybody is tolerant of her mistakes.", uz: "Hozir ancha yaxshi. U ingliz tili haqida noqulay his qilgan edi, lekin hamma uning xatolariga bag'rikeng." },
            { who: "Tom", en: "That's good. Is she easy-going?", uz: "Yaxshi. U xotirjam odammi?" },
            { who: "Olivia", en: "Very. And she's down-to-earth, too. She never talks about her degree from abroad.", uz: "Juda. Va u oddiy ham. U chet eldagi diplomi haqida hech gapirmaydi." },
            { who: "Tom", en: "Unlike our old manager. He was resentful of anyone who asked for a raise.", uz: "Bizning eski boshliqdan farqli. U ish haqini oshirishni so'ragan har bir kishidan xafa bo'lardi." },
            { who: "Olivia", en: "True. I was disillusioned with the job by the time he left.", uz: "To'g'ri. U ketguncha men ishdan ko'nglim qolgan edi." },
            { who: "Tom", en: "Let's hope the new team keeps an open mind. Don't be too gullible about the promises, though.", uz: "Umid qilaylik, yangi jamoa yangi g'oyalarga ochiq bo'ladi. Lekin va'dalarga haddan ortiq ishonib ketmang." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "Why does Tom call the old manager resentful?", opts: ["He disliked people who asked for a raise.", "He was easy-going.", "He was tolerant of mistakes.", "He loved the new colleague."], a: 0, why: "Dialogda: *He was resentful of anyone who asked for a raise.*" } },
      ],
    },
  ],
  words: [
    { en: "resentful", uz: "xafa, alamli (ichida saqlagan)", ipa: "rɪˈzent.fəl", pos: "adj", ex: "He felt resentful that his colleague got the credit for his idea.", exUz: "U hamkasbi uning g'oyasi uchun maqtovga sazovor bo'lganidan alam qilardi." },
    { en: "easy-going", uz: "xotirjam, sodda munosabatli", ipa: "ˌiː.ziˈɡəʊ.ɪŋ", pos: "adj", ex: "Her easy-going attitude makes her popular with everyone.", exUz: "Uning xotirjam munosabati uni hamma orasida mashhur qiladi." },
    { en: "down-to-earth", uz: "oddiy, real fikrlaydigan", ipa: "ˌdaʊn tu ˈɜːθ", pos: "adj", ex: "The director is surprisingly down-to-earth for a famous author.", exUz: "Rejissyor mashhur muallif uchun hayratlanarli darajada oddiy." },
    { en: "self-conscious", uz: "o'zini noqulay his qilgan, uyalgan", ipa: "ˌself ˈkɒn.ʃəs", pos: "adj", ex: "I always feel self-conscious when I have to speak in public.", exUz: "Omma oldida gapirishim kerak bo'lsa, o'zimni doim noqulay his qilaman." },
    { en: "tolerant", uz: "bag'rikeng, sabr-toqatli", ipa: "ˈtɒl.ər.ənt", pos: "adj", ex: "She is tolerant of other people's mistakes.", exUz: "U boshqalarning xatolariga bag'rikeng." },
    { en: "insecure", uz: "ishonchsiz, o'ziga ishonmaydigan", ipa: "ˌɪn.sɪˈkjʊər", pos: "adj", ex: "Many teenagers feel insecure about their appearance.", exUz: "Ko'p o'smirlar tashqi ko'rinishi haqida o'zlarini ishonchsiz his qiladi." },
    { en: "gullible", uz: "tez ishonuvchan, aldanuvchan", ipa: "ˈɡʌl.ə.bəl", pos: "adj", ex: "Scammers often target gullible people.", exUz: "Firibgarlar ko'pincha tez ishonuvchan odamlarni nishonga oladi." },
    { en: "wary", uz: "ehtiyotkor, shubhalanuvchi", ipa: "ˈweə.ri", pos: "adj", ex: "Investors are wary of risky companies.", exUz: "Investorlar xavfli kompaniyalardan ehtiyot bo'lishadi." },
    { en: "open-minded", uz: "yangi g'oyalarga ochiq", ipa: "ˌəʊ.pənˈmaɪn.dɪd", pos: "adj", ex: "A good scientist stays open-minded about new evidence.", exUz: "Yaxshi olim yangi dalillarga ochiq bo'lib qoladi." },
    { en: "disillusioned", uz: "umidi puchga chiqqan, ko'ngli qolgan", ipa: "ˌdɪs.ɪˈluː.ʒənd", pos: "adj", ex: "After years of broken promises, voters became disillusioned.", exUz: "Yillab buzilgan va'dalardan keyin saylovchilarning ko'ngli qoldi." },
  ],
  practice: [
    { k: "choice", q: "She never judges people and accepts different views. She is very ___.", opts: ["tolerant", "resentful", "gullible", "wary"], a: 0, why: "Boshqalarning fikrini qabul qiladi: **tolerant**." },
    { k: "choice", q: "He is ___ of anyone who asks for too much personal information.", opts: ["wary", "easy-going", "open-minded", "down-to-earth"], a: 0, why: "Ehtiyotkor, shubhalanuvchi: **wary of**." },
    { k: "listen", say: "She felt self-conscious about her accent.", opts: ["She felt self-conscious about her accent.", "She felt self-confident about her accent.", "She felt resentful about her accent.", "She felt wary of her accent."], a: 0, why: "Audioda: **self-conscious about**." },
    { k: "fill", q: "He felt resentful ___ not being invited to the meeting.", a: ["about", "of"], hint: "resentful + predlog", why: "**resentful about / of** (something)." },
    { k: "fill", q: "After the third broken promise, the voters felt disillusioned ___ the party.", a: ["with", "by"], hint: "disillusioned + predlog", why: "**disillusioned with** (someone/something)." },
    { k: "fill", q: "She is quite insecure ___ her new role.", a: ["about", "in"], hint: "insecure + predlog", why: "**insecure about**." },
    { k: "order", uz: "U hamma narsaga ishonadi, chunki juda tez ishonuvchan.", words: ["He", "believes", "everything", "because", "he", "is", "gullible."], extra: ["wary", "tolerant"], why: "**gullible** — tez ishonuvchan." },
    { k: "order", uz: "Boshliqimiz xotirjam va oddiy odam.", words: ["Our", "boss", "is", "easy-going", "and", "down-to-earth."], extra: ["resentful", "wary"], alt: [["Our", "boss", "is", "down-to-earth", "and", "easy-going."]], why: "Ikkala sifat ham ijobiy xarakter." },
    { k: "translate", uz: "U boshqalarning xatolariga bag'rikeng.", a: ["He is tolerant of other people's mistakes.", "She is tolerant of other people's mistakes.", "He is tolerant of others' mistakes.", "She is tolerant of others' mistakes."], why: "**tolerant of**." },
    { k: "translate", uz: "Men ko'p ish sababli juda charchadim.", a: ["I am exhausted because of the amount of work.", "I'm exhausted because of the amount of work.", "I am exhausted because of all the work.", "I'm exhausted because of all the work.", "I am exhausted because of the work.", "I'm exhausted because of the work.", "I am exhausted because I have so much work.", "I'm exhausted because I have so much work."], why: "Hissiyot — **-ed** sifat: *exhausted*." },
    { k: "fix", wrong: "He is jealous from his colleague's promotion.", a: ["He is jealous of his colleague's promotion."], hint: "jealous + predlog", why: "**jealous of**." },
    { k: "fix", wrong: "The film was so bored that we left early.", a: ["The film was so boring that we left early."], hint: "sabab uchun -ing", why: "Film — sabab: **boring**." },
    { k: "match", pairs: [["resentful", "xafa, alamli"], ["tolerant", "bag'rikeng"], ["wary", "ehtiyotkor"], ["gullible", "tez ishonuvchan"], ["disillusioned", "ko'ngli qolgan"]] },
    { k: "tf", q: "*Easy-going* odamni salbiy ma'noda ta'riflaydi.", a: false, why: "**easy-going** odatda ijobiy: xotirjam, qiyinchilik tug'dirmaydigan." },
    { k: "choice", q: "The news was really ___, so we were all ___.", opts: ["shocking / shocked", "shocked / shocking", "shocking / shocking", "shocked / shocked"], a: 0, why: "Sabab — **-ing** (*shocking news*), his — **-ed** (*we were shocked*)." },
    { k: "dictation", say: "He is open-minded about new ideas, but he is wary of big promises.", uz: "U yangi g'oyalarga ochiq, lekin katta va'dalardan ehtiyot bo'ladi.", why: "**open-minded about**, **wary of**." },
    { k: "speak", say: "I felt self-conscious, but my team was very tolerant.", uz: "O'zimni noqulay his qildim, lekin jamoam juda bag'rikeng edi." },
  ],
  quiz: [
    { k: "choice", q: "He is ___ about what other people think of his clothes.", opts: ["self-conscious", "open-minded", "tolerant", "easy-going"], a: 0, why: "Boshqalar qanday ko'rishidan xavotirda: **self-conscious about**." },
    { k: "choice", q: "She has no ambition to impress anyone. She is very ___.", opts: ["down-to-earth", "resentful", "gullible", "insecure"], a: 0, why: "Kibrsiz, real fikrlaydigan: **down-to-earth**." },
    { k: "choice", q: "The customer was ___ of the free offer, because it looked too good to be true.", opts: ["wary", "thrilled with", "easy-going", "tolerant"], a: 0, why: "Ehtiyotkor: **wary of**." },
    { k: "fill", q: "Many young graduates become disillusioned ___ the job market.", a: ["with", "about", "by"], uz: "Ko'p yosh bitiruvchilar mehnat bozoridan ko'ngli qolib ketadi.", hint: "disillusioned + predlog", why: "**disillusioned with / about**." },
    { k: "fill", q: "The long journey was exhausting and we were all ___.", a: ["exhausted"], uz: "Uzoq yo'l charchatuvchi edi va hammamiz charchagan edik.", hint: "his uchun -ed", why: "**exhausted** — his holati." },
    { k: "order", uz: "U yangi g'oyalarga ochiq odam.", words: ["She", "is", "open-minded", "about", "new", "ideas."], extra: ["gullible", "of"], why: "**open-minded about**." },
    { k: "translate", uz: "U hech kimning gapiga ishonadigan darajada tez ishonuvchan.", a: ["He is gullible enough to believe anyone.", "She is gullible enough to believe anyone.", "He is so gullible that he believes anyone.", "She is so gullible that she believes anyone."], why: "**gullible** — tez ishonuvchan." },
    { k: "fix", wrong: "She is wary from strangers.", a: ["She is wary of strangers."], hint: "predlog", why: "**wary of**." },
    { k: "tf", q: "*Resentful* so'zi o'tmishdagi adolatsizlik haqidagi saqlangan alamni bildiradi.", a: true, why: "**resentful** — ichida uzoq saqlangan xafagarchilik." },
    { k: "listen", say: "He is very easy-going and tolerant of mistakes.", opts: ["He is very easy-going and tolerant of mistakes.", "He is very resentful and tolerant of mistakes.", "He is very easy-going and wary of mistakes.", "He is very gullible and tolerant of mistakes."], a: 0, why: "Audioda: **easy-going** va **tolerant of mistakes**." },
  ],
  summary: [
    "**Xarakter:** *easy-going, down-to-earth, tolerant, open-minded* (ijobiy), *gullible* (salbiy).",
    "**His:** *resentful* (alam), *self-conscious* (noqulaylik), *insecure* (ishonchsizlik), *wary* (ehtiyotkorlik), *disillusioned* (ko'ngli qolish).",
    "**Predloglar:** *tolerant of, wary of, jealous of, proud of; resentful of/about; self-conscious / insecure about; disillusioned with.*",
    "**-ed** — his (kim?): *bored, exhausted*; **-ing** — sabab (nima?): *boring, exhausting*.",
    "Xatolar: ~~jealous from~~ → **jealous of**; ~~wary from~~ → **wary of**; ~~The film was bored~~ → **The film was boring**.",
  ],
  homework: "Hayotingizdagi **uch kishini** (hamkasb, o'qituvchi, qarindosh) tanlang va har biri haqida 2-3 gap yozing: xarakter (*easy-going, tolerant…*) va bitta aniq vaziyatdagi his (*She felt self-conscious when…*). Kamida 6 ta yangi so'zdan foydalaning va to'g'ri predlogni tekshiring (*wary of, disillusioned with…*). Keyin 60 soniyalik javobni **ovoz chiqarib** yozib oling: *Describe a person you admire.*",
};

export default lesson;
