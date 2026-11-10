import type { Lesson } from '../../../types';

// Mini lesson (situation): meeting an old friend after years. Recycles Present Perfect (simple/continuous), used to and future forms from l2-l4.
const lesson: Lesson = {
  id: 'u24-l9',
  title: 'Catching up with an old friend',
  titleUz: "Eski do'st bilan uchrashuv: hayotingizdagi o'zgarishlar haqida gapirish",
  mini: true,
  kind: 'situation',
  goal: "Eski do'stingiz bilan yillar o'tib uchrashganda **small talk** boshlaysiz (*What have you been up to?*), nima o'zgarganini (**Present Perfect**), avval nima qilganingizni (**used to**) va kelasi yilgi rejalaringizni (**will be doing**) tabiiy gapirib berasiz.",
  slides: [
    {
      title: "Vaziyat: yillar o'tib uchrashuv",
      blocks: [
        { t: 'p', md: "Siz maktab do'stingizni beshinchi yildan beri birinchi marta ko'rdingiz. Nima deysiz? Ingliz tilida bunday suhbat odatda **iliq salom, hol-ahvol, o'zgarishlar, kelajak** tartibida boradi. Quyidagi iboralar B2 darajasida tabiiy eshitiladi." },
        { t: 'table', head: ['Maqsad', 'Ibora'], speak: [1], rows: [
          ['Hayratlanish', "I can't believe it! It's been ages!"],
          ['Iltifot', "You haven't changed a bit!"],
          ['Hol-ahvol', "What have you been up to?"],
          ['Javob', "Oh, the usual. Work, family, you know."],
          ['Aloqa', "We really should keep in touch."],
          ['Xayrlashish', "Let's not leave it so long next time."],
        ] },
        { t: 'tip', tone: 'info', md: "*What have you been up to?* — *Nima bilan band bo'ldingiz?* **Present Perfect Continuous**: biz so'nggi vaqt davomidagi faoliyat haqida so'raymiz. *What did you do?* deb so'rasak, bu aniq bir o'tgan vaqtga tegishli bo'lib qoladi." },
        { t: 'check', ex: { k: 'choice', q: "Do'stingiz yillar o'tib: «Nima bilan band bo'ldingiz?» deb so'raydi. Qaysi savol tabiiy?", opts: ["What have you been up to?", "What are you up to since?", "What did you up to?", "What have you up to?"], a: 0, why: "Tayyor ibora: **What have you been up to?** (Present Perfect Continuous)." } },
        { t: 'check', ex: { k: 'fill', q: "It has ___ ages since we last met!", a: ['been'], uz: "Oxirgi marta uchrashganimizdan beri ancha vaqt o'tdi!", why: "**It's been ages** — vaqt o'tganini bildiradigan o'rnatilgan ibora." } },
      ],
    },
    {
      title: "O'zgarishlar, o'tmish va kelajak",
      blocks: [
        { t: 'p', md: "Suhbat uch vaqtga bo'linadi. Har biri uchun bitta aniq shakl ishlating:" },
        { t: 'table', head: ['Nima haqida', 'Shakl', 'Misol'], speak: [2], rows: [
          ['Hozirgacha davom etayotgan holat', 'Present Perfect (state) / Continuous', "I've lived in Leeds for four years."],
          ['So\'nggi faoliyat', 'Present Perfect Continuous', "I've been working on a new app."],
          ['Eski odat yoki holat', 'used to + V1', "I used to play football every weekend."],
          ['Kelasi yilgi jarayon', 'will be + V-ing', "This time next year I'll be living in Berlin."],
        ] },
        { t: 'examples', items: [
          { en: "I got promoted last spring, so I've been travelling a lot.", uz: "O'tgan bahorda lavozimim oshdi, shuning uchun ko'p sayohat qilyapman.", note: "Past Simple (aniq vaqt) + Present Perfect Continuous (hozirgi natija)." },
          { en: "We used to talk every day, but then we drifted apart.", uz: "Biz har kuni gaplashardik, keyin bir-birimizdan uzoqlashib qoldik.", note: "**used to** — tugagan odat; **drifted apart** — Past Simple." },
          { en: "Next year I'll be working in a different city.", uz: "Kelasi yil boshqa shaharda ishlayotgan bo'laman.", note: "**will be working** — kelajakdagi jarayon." },
        ] },
        { t: 'tip', tone: 'warn', md: "*know, have, live* kabi holat fe'llari odatda **Present Perfect Simple** bilan keladi: *I've known him since school.* Ammo *live* ba'zan *I've been living here* ham bo'ladi (vaqtinchalik holat)." },
        { t: 'check', ex: { k: 'choice', q: "We ___ talk every day, but now we only send messages.", opts: ['used to', 'are used to', 'would to', 'use to'], a: 0, why: "Tugagan odat: **used to + V1**. *are used to* — «ko'nikkan» degani." } },
        { t: 'check', ex: { k: 'fill', q: "This time next year I'll ___ living in a new flat.", a: ['be'], uz: "Kelasi yil shu paytda yangi uyda yashayotgan bo'laman.", why: "Future Continuous: **will be + V-ing**." } },
      ],
    },
    {
      title: "Tipik xatolar (o'zbek tilidan)",
      blocks: [
        { t: 'p', md: "O'zbek tilida *Men 2019-yildan beri bu yerda yashayman* deymiz, fe'l hozirgi zamonda. Inglizchada esa *since / for* bilan **Present Perfect** kerak. Bu eng ko'p uchraydigan xato." },
        { t: 'compare',
          good: { title: "To'g'ri", items: ["I've lived here since 2019.", "I've known her since school.", "You haven't changed at all.", "We used to live in Bukhara."] },
          bad: { title: 'Xato', items: ["I live here since 2019.", "I know her since school.", "You are not changed at all.", "We used to living in Bukhara."] } },
        { t: 'tip', tone: 'warn', md: "*Siz o'zgarmabsiz* so'zma-so'z *You are not changed* bo'lib qoladi. Inglizchada bu **Present Perfect**: *You haven't changed.* *used to* dan keyin esa doim **V1**: *used to live*." },
        { t: 'check', ex: { k: 'fix', wrong: "I live in Tashkent since 2021.", a: ["I've lived in Tashkent since 2021.", "I have lived in Tashkent since 2021.", "I've been living in Tashkent since 2021.", "I have been living in Tashkent since 2021."], why: "*since* bilan hozirgacha davom etgan holat: **Present Perfect**." } },
        { t: 'check', ex: { k: 'fix', wrong: "You are not changed at all.", a: ["You haven't changed at all.", "You have not changed at all."], why: "O'zgarish haqida: **have/has + V3** (*changed*), *are* emas." } },
      ],
    },
    {
      title: "Dialog: kafedagi uchrashuv",
      blocks: [
        { t: 'dialog', lines: [
          { who: 'Sara', en: "Tom? Is that really you? It's been ages!", uz: "Tom? Haqiqatan sen-mi? Qancha vaqt o'tdi!" },
          { who: 'Tom', en: "Sara! You haven't changed a bit. What have you been up to?", uz: "Sara! Sen umuman o'zgarmabsan. Nima bilan band bo'lding?" },
          { who: 'Sara', en: "Well, I got promoted last year, so life has been quite hectic. And you?", uz: "Bilasanmi, o'tgan yili lavozimim oshdi, shuning uchun hayot ancha shov-shuvli. O'zing-chi?" },
          { who: 'Tom', en: "I relocated to Manchester two years ago. I used to hate the rain, but I've got used to it.", uz: "Ikki yil oldin Manchesterga ko'chdim. Avval yomg'irni yomon ko'rardim, endi ko'nikdim." },
          { who: 'Sara', en: "Do you still play the guitar?", uz: "Hali ham gitara chalasanmi?" },
          { who: 'Tom', en: "A little, but I'm a bit rusty. I haven't had time lately.", uz: "Ozgina, lekin biroz esimdan chiqib qolgan. So'nggi paytda vaqtim bo'lmadi." },
          { who: 'Sara', en: "This time next year I'll be living in Dubai, actually. It's a life-changing opportunity.", uz: "Aslida kelasi yil shu paytda Dubayda yashayotgan bo'laman. Bu hayotni o'zgartiruvchi imkoniyat." },
          { who: 'Tom', en: "Wow, congratulations! We really should keep in touch this time.", uz: "Voy, tabriklayman! Bu safar albatta aloqada bo'lishimiz kerak." },
        ] },
        { t: 'check', ex: { k: 'tf', q: "Tom has lived in Manchester since he was a child.", a: false, why: "Tom: *I relocated to Manchester two years ago.*" } },
        { t: 'check', ex: { k: 'choice', q: "Why does Tom say he is rusty?", opts: ["He hasn't had much time to practise the guitar.", "He has just bought a new guitar.", "He is going to Dubai.", "He hated the rain."], a: 0, why: "*A little, but I'm a bit rusty. I haven't had time lately.*" } },
      ],
    },
  ],
  words: [
    { en: 'drift apart', uz: "bir-biridan uzoqlashmoq (munosabat susayishi)", ipa: 'drɪft əˈpɑːt', pos: 'phrasal verb', ex: 'We were close at school, but we gradually drifted apart.', exUz: "Maktabda yaqin edik, lekin asta-sekin uzoqlashib qoldik." },
    { en: 'hectic', uz: "shov-shuvli, juda band", ipa: 'ˈhek.tɪk', pos: 'adj', ex: 'My week has been hectic: three deadlines and a trip.', exUz: "Haftam juda shov-shuvli o'tdi: uchta muddat va bitta safar." },
    { en: 'rusty', uz: "zanglagan; (ko'nikma) esdan chiqqan", ipa: 'ˈrʌs.ti', pos: 'adj', ex: "My French is rusty because I never speak it now.", exUz: "Frantsuzchamni esdan chiqarib qo'yganman, chunki endi gaplashmayman." },
    { en: 'relocate', uz: "boshqa joyga ko'chmoq (ish yoki yashash uchun)", ipa: 'ˌriː.ləʊˈkeɪt', pos: 'verb', ex: 'The company relocated its office to a smaller city.', exUz: "Kompaniya ofisini kichikroq shaharga ko'chirdi." },
    { en: 'get promoted', uz: "lavozimi oshmoq", ipa: 'get prəˈməʊ.tɪd', pos: 'phrase', ex: 'She got promoted after only a year in the team.', exUz: "U jamoada atigi bir yil ishlagach, lavozimi oshdi." },
    { en: 'life-changing', uz: "hayotni o'zgartiradigan", ipa: 'ˌlaɪf ˈtʃeɪn.dʒɪŋ', pos: 'adj', ex: 'Studying abroad was a life-changing experience for him.', exUz: "Chet elda o'qish u uchun hayotni o'zgartirgan tajriba bo'ldi." },
  ],
  practice: [
    { k: 'match', pairs: [['drift apart', "bir-biridan uzoqlashmoq"], ['hectic', "shov-shuvli, band"], ['rusty', "esdan chiqqan (ko'nikma)"], ['relocate', "boshqa joyga ko'chmoq"], ['get promoted', "lavozimi oshmoq"], ['life-changing', "hayotni o'zgartiradigan"]] },
    { k: 'choice', q: "Do'stingizga: «Siz umuman o'zgarmabsiz!» demoqchisiz.", opts: ["You haven't changed a bit!", "You don't change a bit!", "You didn't changed a bit!", "You aren't changing a bit!"], a: 0, why: "Natija hozir ko'rinib turibdi: **Present Perfect** (*haven't changed*)." },
    { k: 'fill', q: "A: What have you ___ up to lately?  B: Mostly work.", a: ['been'], uz: "So'nggi paytda nima bilan band bo'ldingiz?", why: "Tayyor ibora: **What have you been up to?**" },
    { k: 'listen', say: 'We used to meet every Friday after class.', opts: ['We used to meet every Friday after class.', 'We are used to meeting every Friday after class.', 'We use to meet every Friday after class.', 'We used to meeting every Friday after class.'], a: 0 },
    { k: 'fill', q: "We ___ live in a tiny flat, but now we have a house.", a: ['used to'], uz: "Biz kichkina kvartirada yashar edik, hozir uyimiz bor.", why: "Tugagan holat: **used to + V1** (*would* holat fe'llari bilan ishlatilmaydi)." },
    { k: 'order', uz: "Men bu yerda uch yildan beri ishlayapman.", words: ["I've", 'been', 'working', 'here', 'for', 'three', 'years.'], extra: ['am', 'since'], alt: [['I', 'have', 'been', 'working', 'here', 'for', 'three', 'years.']], why: "**have been working + for** (muddat)." },
    { k: 'fix', wrong: "I live in Tashkent since 2021.", a: ["I've lived in Tashkent since 2021.", "I have lived in Tashkent since 2021.", "I've been living in Tashkent since 2021.", "I have been living in Tashkent since 2021."], why: "*since* bilan **Present Perfect** kerak." },
    { k: 'tf', q: "*What have you been up to?* — bu so'nggi vaqt faoliyati haqidagi savol.", a: true, why: "**Present Perfect Continuous** so'nggi paytdagi faoliyatni so'raydi." },
    { k: 'choice', q: "Reja: «Kelasi yil shu paytda men yangi ofisda ishlayotgan bo'laman.»", opts: ["This time next year I'll be working in a new office.", "This time next year I work in a new office.", "This time next year I've worked in a new office.", "This time next year I am work in a new office."], a: 0, why: "Kelajakdagi jarayon: **will be + V-ing**." },
    { k: 'translate', uz: "Biz bir-birimizdan uzoqlashib qoldik.", a: ['We drifted apart.', 'We have drifted apart.', "We've drifted apart.", 'We grew apart.', "We've grown apart.", 'We have grown apart.'], why: "**drift apart** — munosabatlar susayishi; Past Simple yoki Present Perfect." },
    { k: 'dictation', say: "It's been ages since we last met.", a: ["It's been ages since we last met.", "It has been ages since we last met."], uz: "Oxirgi marta uchrashganimizdan beri ancha vaqt o'tdi." },
    { k: 'choice', q: "«What have you been up to?» savoliga eng tabiiy javob qaysi?", opts: ["I've been working on a new project at the bank.", "I was born in 1995.", "Yes, I have.", "I am fine because I up."], a: 0, why: "Savol so'nggi faoliyat haqida: **I've been working on …** mos keladi." },
    { k: 'fix', wrong: "I know her since school.", a: ["I've known her since school.", "I have known her since school."], why: "*know* holat fe'li: **Present Perfect Simple** (*have known*), Continuous emas." },
    { k: 'speak', say: "I've been working as a designer since I moved here.", uz: "Bu yerga ko'chganimdan beri dizayner bo'lib ishlayapman." },
  ],
  quiz: [
    { k: 'choice', q: "My week has been really ___: three meetings a day and no lunch break.", opts: ['hectic', 'rusty', 'life-changing', 'relocated'], a: 0, why: "**hectic** — juda band, shov-shuvli." },
    { k: 'fill', q: "I haven't played chess for years, so I'm a bit ___.", a: ['rusty'], uz: "Bir necha yildan beri shaxmat o'ynamaganman, shuning uchun biroz esimdan chiqqan.", why: "**rusty** — uzoq vaqt qo'llanmagan ko'nikma." },
    { k: 'fix', wrong: "We are knowing each other since 2010.", a: ["We've known each other since 2010.", "We have known each other since 2010."], why: "*know* — holat fe'li, Continuous ishlatilmaydi: **have known**." },
    { k: 'order', uz: "Biz har kuni gaplashardik.", words: ['We', 'used', 'to', 'talk', 'every', 'day.'], extra: ['use', 'talking'], why: "**used to + V1**." },
    { k: 'listen', say: 'This time next year I will be living abroad.', opts: ['This time next year I will be living abroad.', 'This time next year I have been living abroad.', 'This time next year I lived abroad.', 'This time next year I will live abroad.'], a: 0 },
    { k: 'tf', q: "*I used to living in Bukhara.* — Gap to'g'ri.", a: false, why: "*used to* dan keyin V1: **I used to live in Bukhara.**" },
    { k: 'translate', uz: "Kompaniya ofisini boshqa shaharga ko'chirdi.", a: ['The company relocated its office to another city.', 'The company relocated its office to a different city.', 'The company has relocated its office to another city.', 'The company has relocated its office to a different city.'], why: "**relocate** — joyni o'zgartirmoq." },
    { k: 'choice', q: "Which sentence is correct?", opts: ["She got promoted last year, so she has been travelling a lot.", "She has got promoted last year, so she travels a lot since.", "She gets promoted last year, so she has travel a lot.", "She got promote last year, so she is travelling a lot since."], a: 0, why: "Aniq vaqt (*last year*) — Past Simple; hozirgi natija — Present Perfect Continuous." },
  ],
  summary: [
    "**What have you been up to?** va **You haven't changed a bit!** — eski do'st bilan suhbat uchun tayyor iboralar.",
    "Hozirgacha davom etayotgan holat: **I've lived here since 2019** (*since* + nuqta, *for* + muddat); *know, have* bilan Continuous ishlatilmaydi.",
    "Tugagan odat: **used to + V1**; kelasi yilgi jarayon: **will be + V-ing**.",
    "Yangi so'zlar: **drift apart, hectic, rusty, relocate, get promoted, life-changing**.",
  ],
  homework: "Eski do'stingiz yoki sinfdoshingiz bilan 8 qatorlik tasavvuriy suhbat yozing. Unda kamida bitta *What have you been up to?*, bitta *used to*, bitta *I've been … -ing* va bitta *I'll be … -ing* ishlating. Keyin uni ovoz chiqarib ayting.",
};

export default lesson;
