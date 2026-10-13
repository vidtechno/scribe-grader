import type { Lesson } from '../../../types';

// Mini lesson (skill): reading a short past story and writing one with linking words.
const lesson: Lesson = {
  id: 'u9-l15',
  title: 'Reading and writing: a short story',
  titleUz: "O'qish va yozish: qisqa hikoya",
  mini: true,
  kind: 'skill',
  goal: "O'tgan zamondagi qisqa hikoyani **o'qib tushunasiz** va o'zingiz hikoya **yozasiz**: voqealarni *one day, at first, then, finally* bilan tartiblab, *and, but, so, because* bilan bog'laysiz.",
  slides: [
    {
      title: "O'qing: Yo'qolgan kalit",
      blocks: [
        {
          t: 'text', title: 'The lost key',
          en: "One day, Madina came home from work and couldn't find her key. At first, she looked in her bag, but it wasn't there. Then she called her brother, and he came with his key. They went inside, but the key was not in the house.\nFinally, the next morning, a neighbour knocked on the door. \"I found this in the garden,\" she said. It was Madina's key! Madina was very happy, so she gave her neighbour a gift.",
          uz: "Bir kuni Madina ishdan uyga keldi va kalitini topa olmadi. Avval sumkasidan qidirdi, lekin u yerda yo'q edi. Keyin akasiga qo'ng'iroq qildi va u o'z kaliti bilan keldi. Ichkariga kirishdi, lekin kalit uyda yo'q edi.\nOxiri, ertasi kuni ertalab qo'shni eshikni taqillatdi. \"Buni bog'da topdim\", dedi u. Bu Madinaning kaliti edi! Madina juda xursand bo'ldi va shuning uchun qo'shnisiga sovg'a berdi.",
        },
        { t: 'check', ex: { k: 'choice', q: 'Where did the neighbour find the key?', opts: ['In the garden', 'In the house', 'In the bag', 'At work'], a: 0, why: "*I found this in the garden.*" } },
        { t: 'check', ex: { k: 'tf', q: 'Madina found her key on the first evening.', a: false, why: "Kalitni **ertasi kuni ertalab** qo'shni topdi (*finally, the next morning*)." } },
      ],
    },
    {
      title: 'Hikoya tuzilishi',
      blocks: [
        { t: 'p', md: "Yaxshi hikoya tartib bilan boradi: **boshlanish → voqealar → oxiri**. Tartibni ko'rsatadigan so'zlar:" },
        { t: 'table', head: ["So'z", "Vazifasi", 'Misol'], speak: [2], rows: [
          ['One day', 'Hikoyani boshlaydi', 'One day, I lost my phone.'],
          ['At first', 'Birinchi harakat', 'At first, I looked in my bag.'],
          ['Then / After that', 'Keyingi harakat', 'Then I called my brother.'],
          ['Finally', 'Oxirgi, natija', 'Finally, I found it.'],
        ] },
        { t: 'tip', tone: 'good', md: "Gaplarni **and** (qo'shish), **but** (qarama-qarshilik), **so** (natija), **because** (sabab) bilan bog'lang: *I looked in my bag, but it wasn't there, so I called my brother.*" },
        { t: 'compare', good: { title: "To'g'ri", items: ['One day, I lost my key.', 'I was happy because I found it.', "I looked in my bag, but it wasn't there."], }, bad: { title: "Noto'g'ri", items: ['One day, I lose my key.', 'I was happy so I found it.', "I looked in my bag, because it wasn't there."], } },
        { t: 'check', ex: { k: 'choice', q: "It was cold, ___ we stayed at home.", opts: ['so', 'but', 'because', 'finally'], a: 0, why: "Natija → **so**." } },
      ],
    },
    {
      title: 'Yozing: namuna va mashq',
      blocks: [
        {
          t: 'text', title: 'My story',
          en: "Last Friday, I lost my wallet. At first, I looked in my room, but I didn't find it. Then I called my friend because I was at her house in the afternoon. She looked on the sofa, and she found it! I was very happy, so I bought a lovely cake for her.",
          uz: "O'tgan juma kuni hamyonimni yo'qotdim. Avval xonamdan qidirdim, lekin topolmadim. Keyin do'stimga qo'ng'iroq qildim, chunki tushdan keyin uning uyida edim. U divandan qaradi va topdi! Men juda xursand bo'ldim, shuning uchun unga chiroyli tort sotib oldim.",
        },
        { t: 'check', ex: { k: 'order', uz: 'Avval xonamdan qidirdim, lekin topolmadim.', words: ['At', 'first,', 'I', 'looked', 'in', 'my', 'room,', 'but', 'I', "didn't", 'find', 'it'], extra: ['finally', 'found'] } },
        { t: 'check', ex: { k: 'fix', wrong: 'I was happy so I found it.', a: ['I was happy because I found it.', 'I found it, so I was happy.'], why: "Sabab → **because**, natija → **so**." } },
      ],
    },
  ],
  words: [
    { en: 'at first', uz: 'avval, dastlab', ipa: 'æt fɜːst', pos: 'phrase', ex: 'At first, I was afraid.', exUz: "Avval qo'rqdim." },
    { en: 'finally', uz: 'oxiri, nihoyat', ipa: 'ˈfaɪ.nəl.i', pos: 'adverb', ex: 'Finally, we found a taxi.', exUz: 'Nihoyat, taksi topdik.' },
    { en: 'one day', uz: 'bir kuni', ipa: 'wʌn deɪ', pos: 'phrase', ex: 'One day, I met an old friend.', exUz: "Bir kuni eski do'stimni uchratdim." },
    { en: 'gift', uz: 'sovg\'a', ipa: 'ɡɪft', pos: 'noun', ex: 'She gave me a lovely gift.', exUz: "U menga chiroyli sovg'a berdi." },
    { en: 'neighbour', uz: "qo'shni", ipa: 'ˈneɪ.bə', pos: 'noun', ex: 'My neighbour helped me.', exUz: "Qo'shnim menga yordam berdi." },
    { en: 'knock', uz: 'taqillatmoq', ipa: 'nɒk', pos: 'verb', ex: 'My friend knocked on the door.', exUz: 'Do\'stim eshikni taqillatdi.' },
  ],
  practice: [
    { k: 'choice', q: '___, Madina looked in her bag.', opts: ['At first', 'Finally', 'Because', 'So'], a: 0, why: "Birinchi harakat → **At first**." },
    { k: 'choice', q: 'Why did Madina give her neighbour a gift?', opts: ['Because the neighbour found her key.', 'Because it was her birthday.', 'Because the neighbour called her brother.', 'Because she lost her bag.'], a: 0, why: "Kalitni qo'shni topgani uchun." },
    { k: 'fill', q: 'My friend ___ on the door. (knock)', a: ['knocked'], uz: 'Do\'stim eshikni taqillatdi.', why: "Muntazam fe'l: knock + **ed**." },
    { k: 'order', uz: 'Nihoyat, men kalitni topdim.', words: ['Finally,', 'I', 'found', 'the', 'key'], extra: ['find', 'then'] },
    { k: 'translate', uz: "Bir kuni men hamyonimni yo'qotdim.", a: ['One day, I lost my wallet.', 'One day I lost my wallet.', 'One day, I lost my wallet'], why: "**lose – lost**." },
    { k: 'fix', wrong: 'I was tired because I went to bed early.', a: ['I was tired, so I went to bed early.', 'I went to bed early because I was tired.'], why: "Sabab: **tired**; natija: **went to bed**." },
    { k: 'fill', q: "I looked in my bag, ___ it wasn't there.", a: ['but'], uz: "Sumkamdan qidirdim, lekin u yerda yo'q edi.", why: "Qarama-qarshilik → **but**." },
    { k: 'tf', q: "*Madina's brother came with his key.* — matnga mos.", a: true, why: "*she called her brother, and he came with his key.*" },
    { k: 'match', pairs: [['at first', 'avval'], ['finally', 'nihoyat'], ['gift', "sovg'a"], ['neighbour', "qo'shni"], ['knock', 'taqillatmoq']] },
    { k: 'order', uz: "Men xursand bo'ldim, shuning uchun do'stimga tort sotib oldim.", words: ['I', 'was', 'happy,', 'so', 'I', 'bought', 'my', 'friend', 'a', 'cake'], extra: ['because', 'buy'] },
    { k: 'translate', uz: "Avval men sumkamdan qidirdim, lekin topolmadim.", a: ["At first, I looked in my bag, but I didn't find it.", "At first I looked in my bag, but I didn't find it.", "At first, I looked in my bag, but I did not find it.", "At first I looked in my bag, but I did not find it."], why: "**looked** (V2), **didn't find** (didn't + V1)." },
  ],
  quiz: [
    { k: 'choice', q: 'One day, I ___ a lovely gift.', opts: ['get', 'got', 'getting', 'did got'], a: 1, why: "**get – got**." },
    { k: 'fill', q: "It was late, ___ I went home.", a: ['so'], uz: "Kech bo'ldi, shuning uchun uyga ketdim." },
    { k: 'order', uz: 'Oxiri, qo\'shnim eshikni taqillatdi.', words: ['Finally,', 'my', 'neighbour', 'knocked', 'on', 'the', 'door'], extra: ['knock', 'at'] },
    { k: 'translate', uz: "Men xursand edim, chunki kalitni topdim.", a: ['I was happy because I found the key.', 'I was happy because I found my key.'] },
    { k: 'fix', wrong: 'One day, I lose my gift.', a: ['One day, I lost my gift.', 'One day I lost my gift.'], why: "O'tgan zamon: **lose – lost**." },
    { k: 'tf', q: "*Finally* hikoyaning boshida ishlatiladi.", a: false, why: "**Finally** — oxirida; boshida **one day / at first**." },
    { k: 'match', pairs: [['one day', 'bir kuni'], ['finally', 'nihoyat'], ['gift', "sovg'a"], ['neighbour', "qo'shni"]] },
    { k: 'choice', q: 'Which sentence starts a story well?', opts: ['One day, I went to the market.', 'Finally, I went to the market.', 'So I went to the market.', 'Because I went to the market.'], a: 0 },
  ],
  summary: [
    "Hikoya tartibi: **One day → At first → Then / After that → Finally**.",
    "Bog'lovchilar: **and** (qo'shish), **but** (qarama-qarshilik), **so** (natija), **because** (sabab).",
    "Hikoya o'tgan zamonda yoziladi: **V2**, inkorda **didn't + V1**.",
    "Yangi so'zlar: **at first, finally, one day, gift, neighbour, knock**.",
  ],
  homework: "6–8 gapdan iborat qisqa hikoya yozing (masalan, \"Yo'qotilgan narsa\" yoki \"Eslab qolarli kun\"). Kamida 3 ta tartib so'zi va 3 ta bog'lovchi ishlating.",
};

export default lesson;
