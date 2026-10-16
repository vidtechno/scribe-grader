import type { Lesson } from '../../../types';

// Mini lesson (skill): reading and writing, a hotel review. Builds on l7 (writing a travel review) with a new text type and new details.
const lesson: Lesson = {
  id: 'u21-l15',
  title: 'Reading and writing: a hotel review',
  titleUz: "O'qish va yozish: mehmonxona sharhi",
  mini: true,
  kind: 'skill',
  goal: "Mehmonxona sharhini **o'qib**, undan fikr va faktlarni ajratasiz, o'zingiz esa 6-8 gapdan iborat sharh yozasiz: **sarlavha, umumiy fikr, yaxshi va yomon tomonlar, tavsiya**; **although, however, but** bilan fikrlarni bog'laysiz.",
  slides: [
    {
      title: "O'qing: yaxshi sharh",
      blocks: [
        { t: 'p', md: "Sharhni o'qing. Avval savol bering: **muallif mamnunmi? nimalar yoqdi? nimalar yoqmadi? tavsiya qiladimi?**" },
        { t: 'text', title: 'Lovely hotel, great staff', en: "We stayed at the Riverside Hotel for three nights in May. The staff were friendly and helpful, and our room was spotless and very comfortable. Breakfast, which was served until eleven, was delicious. Although the hotel is close to the main road, it was not noisy at night. The only problem was the Wi-Fi, which was slow. However, we really enjoyed our stay, and we would recommend it to anyone who wants a quiet weekend. Four stars out of five.", uz: "Biz Riverside mehmonxonasida may oyida uch kecha qoldik. Xodimlar mehribon va yordam berishga tayyor edi, xonamiz esa juda toza va qulay edi. Soat o'n birgacha berilgan nonushta mazali edi. Mehmonxona asosiy yo'lga yaqin bo'lsa-da, kechasi shovqinli emas edi. Yagona muammo — sekin Wi-Fi bo'ldi. Shunday bo'lsa-da, biz dam olishdan juda xursand bo'ldik va tinch dam olish kunlarini istagan har kimga tavsiya qilamiz. Besh yulduzdan to'rttasi." },
        { t: 'check', ex: { k: 'choice', q: "What was the problem at the hotel?", opts: ['The Wi-Fi was slow', 'The room was dirty', 'The staff were unfriendly', 'Breakfast was bad'], a: 0, why: "*The only problem was the Wi-Fi, which was slow.*" } },
        { t: 'check', ex: { k: 'tf', q: 'The writer would not recommend the hotel.', a: false, why: "*We would recommend it to anyone…*" } },
      ],
    },
    {
      title: "Sharh tuzilishi va iboralar",
      blocks: [
        { t: 'p', md: "Yaxshi sharh qisqa va tartibli bo'ladi. Odatiy tuzilma:" },
        { t: 'table', head: ['Qism', 'Nima yoziladi', 'Ibora'], speak: [2], rows: [
          ['1. Kirish', 'Qayerda, qachon, necha kecha', 'We stayed at the hotel for two nights in June.'],
          ['2. Yaxshi tomon', 'Xodimlar, xona, ovqat', 'The staff were friendly and the room was spotless.'],
          ['3. Muammo', 'Kamchilik', 'The only problem was the noise.'],
          ['4. Qarama-qarshilik', 'although, however', 'Although the room was small, it was comfortable.'],
          ['5. Xulosa', 'Tavsiya va baho', 'I would definitely recommend it.'],
        ] },
        { t: 'compare',
          good: { title: "To'g'ri", items: ['Although it was cheap, the room was clean.', 'The room was small. However, it was comfortable.', 'The rooms were spotless.'] },
          bad: { title: 'Xato', items: ['Although it was cheap, but the room was clean.', 'The room was small, however it was comfortable.', 'The rooms was spotless.'] } },
        { t: 'tip', tone: 'warn', md: "**although** bilan **but** birga ishlatilmaydi: *Although it was cheap, the room was clean.* **However** gap boshida keladi va undan keyin vergul qo'yiladi: *However, the room was small.* Fe'l egaga mos bo'lsin: *The rooms were clean.* (*staff* so'zi britaniya ingliz tilida ko'plik fe'l bilan ham keladi: *The staff were friendly.*)" },
        { t: 'check', ex: { k: 'choice', q: "___ the hotel was cheap, the room was very clean.", opts: ['Although', 'However', 'But', 'Because'], a: 0, why: "Gap boshida qarama-qarshilik → **Although**, keyin **but** kerak emas." } },
        { t: 'check', ex: { k: 'fill', q: "The room was small. ___, it was very comfortable.", a: ['However'], why: "Alohida gap boshida: **However,**." } },
      ],
    },
    {
      title: "O'qing: yomon sharh",
      blocks: [
        { t: 'text', title: 'Not what we expected', en: "I was disappointed with this hotel. The pictures on the website were beautiful, but our room was dark and noisy because it was next to the lift. The receptionist wasn't very polite, and nobody answered the phone in the evening. On the other hand, the location was perfect, and the bed was comfortable. I'm afraid I can't recommend it, but I would stay again if the service improved. Two stars.", uz: "Men bu mehmonxonadan hafsalam pir bo'ldi. Saytdagi suratlar chiroyli edi, lekin xonamiz qorong'i va shovqinli edi, chunki lift yonida edi. Qabulxonadagi xodim unchalik odobli emas edi va kechqurun hech kim telefonga javob bermadi. Boshqa tomondan, joylashuvi a'lo va to'shak qulay edi. Afsuski, tavsiya qila olmayman, lekin xizmat yaxshilansa, yana qolgan bo'lardim. Ikki yulduz." },
        { t: 'tip', tone: 'info', md: "Salbiy sharhda ham **muloyim** bo'ling va **ikkala tomonni** ko'rsating: *On the other hand…, I'm afraid I can't recommend it.* Bu ishonchli va adolatli eshitiladi." },
        { t: 'check', ex: { k: 'choice', q: "Why was the room noisy?", opts: ['It was next to the lift', 'It was near the beach', 'There was a party', 'It was on the top floor'], a: 0, why: "*because it was next to the lift.*" } },
        { t: 'check', ex: { k: 'tf', q: 'The writer liked the location.', a: true, why: "*the location was perfect.*" } },
      ],
    },
    {
      title: "Endi siz yozing",
      blocks: [
        { t: 'p', md: "Qaysi mehmonxonada (yoki hostelda) qolgan bo'lsangiz, ana shu haqida 6-8 gap yozing. Shablon:" },
        { t: 'table', head: ['Qadam', 'Shablon'], speak: [1], rows: [
          ['1', "We stayed at … for … nights in …."],
          ['2', "The staff were … and the room was …."],
          ['3', "Although …, …."],
          ['4', "The only problem was …."],
          ['5', "However, …."],
          ['6', "I would / wouldn't recommend it because …."],
        ] },
        { t: 'tip', tone: 'good', md: "Tekshiring: 1) har gapda ega va fe'l bormi? 2) **although** va **but** birga emasmi? 3) fe'l egaga mosmi (*the rooms were*)? 4) oxirida baho yoki tavsiya bormi?" },
        { t: 'check', ex: { k: 'order', uz: "Faqat bitta muammo shovqin edi.", words: ['The', 'only', 'problem', 'was', 'the', 'noise.'], extra: ['were', 'noisy'], alt: [['The', 'only', 'problem', 'was', 'noise.']] } },
        { t: 'check', ex: { k: 'fix', wrong: 'Although the room was small, but it was comfortable.', a: ['Although the room was small, it was comfortable.', 'The room was small, but it was comfortable.'], why: "**although** va **but** birga ishlatilmaydi." } },
      ],
    },
  ],
  words: [
    { en: 'cleanliness', uz: 'tozalik', ipa: 'ˈkliːn.li.nəs', pos: 'noun', ex: 'The cleanliness of the room was excellent.', exUz: 'Xonaning tozaligi a\'lo darajada edi.' },
    { en: 'outdated', uz: 'eskirgan', ipa: 'ˌaʊtˈdeɪ.tɪd', pos: 'adj', ex: 'The furniture in the room was a bit outdated.', exUz: 'Xonadagi mebel biroz eskirgan edi.' },
    { en: 'satisfied', uz: 'mamnun', ipa: 'ˈsæt.ɪs.faɪd', pos: 'adj', ex: 'We were very satisfied with our stay.', exUz: 'Biz turib o\'tganimizdan juda mamnun edik.' },
    { en: 'amenities', uz: 'qulayliklar', ipa: 'əˈmiː.nə.tiz', pos: 'noun', ex: 'The hotel has great amenities, including a gym and a pool.', exUz: 'Mehmonxonada sport zali va basseyn kabi ajoyib qulayliklar bor.' },
    { en: 'hospitality', uz: 'mehmondo\'stlik', ipa: 'ˌhɒs.pɪˈtæl.ə.ti', pos: 'noun', ex: 'We were impressed by the warm hospitality.', exUz: 'Biz iliq mehmondo\'stlikdan hayratda qoldik.' },
    { en: 'courteous', uz: 'xushmuomala', ipa: 'ˈkɜː.ti.əs', pos: 'adj', ex: 'The receptionist was polite and courteous.', exUz: 'Qabulxona xodimi odobli va xushmuomala edi.' },
  ],
  practice: [
    { k: 'match', pairs: [['staff', 'xodimlar'], ['comfortable', 'qulay'], ['helpful', 'yordamga tayyor'], ['disappointed', "hafsalasi pir bo'lgan"], ['noisy', 'shovqinli'], ['complaint', 'shikoyat']] },
    { k: 'choice', q: "___ the hotel was expensive, the service was excellent.", opts: ['Although', 'However', 'So', 'Because'], a: 0, why: "Gap boshida bog'lovchi → **Although**." },
    { k: 'choice', q: "The rooms ___ very clean.", opts: ['were', 'was', 'is', 'be'], a: 0, why: "Ko'plik ega (*rooms*) → **were**." },
    { k: 'fill', q: "The room was small. ___, it was very clean.", a: ['However'], uz: "Xona kichik edi. Ammo juda toza edi.", why: "**However,** — alohida gap boshida." },
    { k: 'fill', q: "I would ___ this hotel to my friends.", a: ['recommend'], uz: "Men bu mehmonxonani do'stlarimga tavsiya qilardim.", why: "**recommend** — tavsiya qilmoq." },
    { k: 'listen', say: 'Although the room was small, it was very comfortable.', opts: ['Although the room was small, it was very comfortable.', 'The room was small, but it was not comfortable.', 'Although the room was big, it was very comfortable.', 'The room was small, however it was comfortable.'], a: 0 },
    { k: 'order', uz: "Faqat bitta muammo sekin Wi-Fi edi.", words: ['The', 'only', 'problem', 'was', 'the', 'slow', 'Wi-Fi.'], extra: ['were', 'fast'], why: "**The only problem was…**" },
    { k: 'order', uz: "Biz uch kecha qoldik.", words: ['We', 'stayed', 'there', 'for', 'three', 'nights.'], extra: ['since', 'night'], alt: [['We', 'stayed', 'for', 'three', 'nights.']], why: "**for** + davomiylik." },
    { k: 'fix', wrong: 'Although it was cheap, but the room was spotless.', a: ['Although it was cheap, the room was spotless.', 'It was cheap, but the room was spotless.'], why: "**although** bilan **but** birga bo'lmaydi." },
    { k: 'fix', wrong: 'The rooms was very clean.', a: ['The rooms were very clean.'], why: "Ko'plik ega (*rooms*) → **were**." },
    { k: 'translate', uz: "Xonamiz toza va qulay edi.", a: ['Our room was clean and comfortable.', 'Our room was spotless and comfortable.', 'The room was clean and comfortable.', 'Our room was comfortable and clean.'], why: "**was** + sifatlar." },
    { k: 'translate', uz: "Men bu mehmonxonani hammaga tavsiya qilaman.", a: ['I recommend this hotel to everyone.', 'I would recommend this hotel to everyone.', 'I recommend this hotel to everybody.', 'I would recommend this hotel to everybody.'], why: "**recommend … to …**" },
    { k: 'tf', q: "Sharhda *however* dan keyin vergul qo'yiladi.", a: true, why: "*However, …* — gap boshida vergul bilan." },
    { k: 'dictation', say: 'The only problem was the noise.', a: ['The only problem was the noise.'], uz: 'Yagona muammo shovqin edi.' },
    { k: 'speak', say: 'We would recommend this hotel to anyone.', uz: "Biz bu mehmonxonani har kimga tavsiya qilamiz." },
  ],
  quiz: [
    { k: 'choice', q: "The room was dark and ___ because it was next to the lift.", opts: ['noisy', 'spotless', 'comfortable', 'delicious'], a: 0, why: "Lift yonida → shovqinli." },
    { k: 'choice', q: "I was ___ with the service. It was very slow.", opts: ['disappointed', 'disappointing', 'excited', 'pleased'], a: 0, why: "His-tuyg'u → **-ed**: *disappointed*." },
    { k: 'choice', q: "Qaysi gap to'g'ri?", opts: ['Although it was late, we went out.', 'Although it was late, but we went out.', 'Although was late, we went out.', 'Although it late, we went out.'], a: 0, why: "**Although** + gap + vergul + asosiy gap (but kerak emas)." },
    { k: 'fill', q: "We stayed at the Grand Hotel ___ three nights.", a: ['for'], uz: "Biz Grand mehmonxonasida uch kecha qoldik.", why: "**for** + davomiylik." },
    { k: 'fill', q: "Breakfast, which ___ served until ten, was delicious.", a: ['was'], uz: "Soat o'ngacha berilgan nonushta mazali edi.", why: "Majhul + o'tgan zamon: **was served**." },
    { k: 'order', uz: "Biroq biz dam olishdan zavq oldik.", words: ['However,', 'we', 'enjoyed', 'our', 'stay.'], extra: ['although', 'enjoying'], why: "**However,** gap boshida." },
    { k: 'listen', say: "I'm afraid I can't recommend it.", opts: ["I'm afraid I can't recommend it.", "I'm happy to recommend it.", "I'm afraid I can't remember it.", "I'm afraid I can't reserve it."], a: 0 },
    { k: 'tf', q: "*The rooms was clean.* — bu gap to'g'ri.", a: false, why: "Ko'plik ega: *The rooms were clean.*" },
  ],
  summary: [
    "Sharh tuzilishi: **kirish, yaxshi tomon, muammo, qarama-qarshilik, tavsiya**.",
    "**Although** + gap, asosiy gap (**but** yo'q); **However,** — alohida gap boshida, vergul bilan.",
    "Fe'l egaga mos bo'lsin (*the rooms were*). Shovqin, xona, xizmat haqida aniq so'zlar ishlating: **spotless, comfortable, noisy**.",
    "Tavsiya: *I would (definitely) recommend it. / I'm afraid I can't recommend it.*",
    "Yangi so'zlar: **cleanliness, outdated, satisfied, amenities, hospitality, courteous**.",
  ],
  homework: "Oxirgi marta qolgan mehmonxona, hostel yoki kurort haqida 6-8 gaplik sharh yozing. Kamida bitta *although* va bitta *However,* ishlating. Oxirida baho (1 dan 5 gacha) qo'ying.",
};

export default lesson;
