import type { Lesson } from '../../../types';

// Mini lesson (skill): listening and speaking, giving directions. Recycles l7/l10 route phrases, adds place words.
const lesson: Lesson = {
  id: 'u6-l14',
  title: 'Listening and speaking: giving directions',
  titleUz: "Tinglash va gapirish: yo'l ko'rsatish",
  mini: true,
  kind: 'skill',
  goal: "Yo'l ko'rsatilganini **tinglab tushunasiz** va o'zingiz aniq yo'l ko'rsatasiz: *Go straight on, turn left, it's next to the bank, opposite the pharmacy.*",
  slides: [
    {
      title: "Tinglang: pochtaga qanday boraman?",
      blocks: [
        { t: 'p', md: "Dialogni tinglang (▶), keyin matnga qarang. Avval umumiy ma'noni tushuning: **qayerga boradi? qaysi tomonga buriladi? nima yonida?**" },
        { t: 'dialog', lines: [
          { who: 'Tourist', en: 'Excuse me, is there a post office near here?', uz: "Kechirasiz, yaqin atrofda pochta bormi?" },
          { who: 'Local', en: "Yes, there is. Go straight on, then turn left at the bridge.", uz: "Ha, bor. To'g'riga yuring, keyin ko'prikda chapga buriling." },
          { who: 'Tourist', en: 'Left at the bridge. And then?', uz: "Ko'prikda chapga. Keyin-chi?" },
          { who: 'Local', en: "Go past the bank. The post office is at the end of the street, next to the bakery.", uz: "Bankning yonidan o'ting. Pochta ko'chaning oxirida, novvoyxona yonida." },
          { who: 'Tourist', en: 'Is it far?', uz: 'Uzoqmi?' },
          { who: 'Local', en: "No, it's about five minutes on foot. It's opposite the pharmacy.", uz: "Yo'q, piyoda taxminan besh daqiqa. U dorixona qarshisida." },
        ] },
        { t: 'check', ex: { k: 'choice', q: "Where do you turn left?", opts: ['At the bridge.', 'At the bank.', 'At the bakery.', 'At the pharmacy.'], a: 0, why: "Dialog: *turn left at the bridge*." } },
        { t: 'check', ex: { k: 'listen', say: 'The post office is next to the bakery.', opts: ['The post office is next to the bakery.', 'The post office is next to the bank.', 'The bank is next to the bakery.', 'The post office is behind the bakery.'], a: 0 } },
      ],
    },
    {
      title: "Joylashuvni aytish",
      blocks: [
        { t: 'table', head: ['Inglizcha', "O'zbekcha"], speak: [0], rows: [
          ['next to the bank', 'bankning yonida'],
          ['opposite the pharmacy', 'dorixona qarshisida'],
          ['between the bank and the school', 'bank va maktab orasida'],
          ['behind the station', 'bekat orqasida'],
          ['in front of the museum', 'muzey oldida'],
          ['at the end of the street', "ko'cha oxirida"],
        ] },
        { t: 'tip', tone: 'info', md: "Yo'lni tartib bilan ayting: **Go straight on… Then turn left… The … is next to …**. Tinglovchiga qulay bo'lishi uchun sekin va aniq gapiring." },
        { t: 'compare', good: { title: "To'g'ri", items: ['Turn left at the bridge.', 'It is next to the bank.', 'Go past the school.'] }, bad: { title: "Noto'g'ri", items: ['Turn to left at the bridge.', 'It is next the bank.', 'Go past to the school.'] } },
        { t: 'check', ex: { k: 'fill', q: 'The café is ___ the bank and the school.', a: ['between'], uz: 'Kafe bank va maktab orasida.', why: "Ikki narsa orasida — **between**." } },
      ],
    },
    {
      title: "Endi siz ayting",
      blocks: [
        { t: 'dialog', lines: [
          { who: 'Anna', en: "Excuse me, how do I get to the museum?", uz: "Kechirasiz, muzeyga qanday boraman?" },
          { who: 'Bobur', en: "Cross the bridge and turn right. The museum is in front of the park.", uz: "Ko'prikdan o'ting va o'ngga buriling. Muzey park oldida." },
          { who: 'Anna', en: "Can you say that again, please?", uz: "Yana bir marta ayta olasizmi?" },
          { who: 'Bobur', en: "Sure. Cross the bridge, turn right, and you can see it.", uz: "Albatta. Ko'prikdan o'ting, o'ngga buriling, o'zi ko'rinadi." },
        ] },
        { t: 'tip', tone: 'good', md: "Ovoz chiqarib takrorlang: avval **savol** (*How do I get to…?*), keyin **yo'nalish** (*Turn right*), keyin **joy** (*in front of the park*)." },
        { t: 'check', ex: { k: 'dictation', say: 'Cross the bridge and turn right.', a: ['Cross the bridge and turn right.'] } },
      ],
    },
  ],
  words: [
    { en: 'bridge', uz: "ko'prik", ipa: 'brɪdʒ', pos: 'noun', ex: 'Cross the bridge and turn left.', exUz: "Ko'prikdan o'ting va chapga buriling." },
    { en: 'entrance', uz: 'kirish', ipa: 'ˈen.trəns', pos: 'noun', ex: 'The entrance is on the left.', exUz: "Kirish chap tomonda." },
    { en: 'exit', uz: 'chiqish', ipa: 'ˈek.sɪt', pos: 'noun', ex: 'The exit is next to the bank.', exUz: "Chiqish bank yonida." },
    { en: 'pavement', uz: "yo'lak, trotuar", ipa: 'ˈpeɪv.mənt', pos: 'noun', ex: 'Walk on the pavement.', exUz: "Yo'lakdan yuring." },
    { en: 'tunnel', uz: 'tunnel', ipa: 'ˈtʌn.əl', pos: 'noun', ex: 'Go through the tunnel.', exUz: "Tunneldan o'ting." },
    { en: 'at the end of', uz: 'oxirida', ipa: 'ət ði ˈend əv', pos: 'phrase', ex: 'It is at the end of the street.', exUz: "U ko'chaning oxirida." },
  ],
  practice: [
    { k: 'listen', say: 'Turn left at the bridge.', opts: ['Turn left at the bridge.', 'Turn right at the bridge.', 'Turn left at the bank.', 'Go straight on at the bridge.'], a: 0 },
    { k: 'choice', q: 'The café is ___ the bank and the post office.', opts: ['between', 'behind', 'opposite', 'in'], a: 0, why: "Ikki joy orasida — **between**." },
    { k: 'order', uz: 'Pochta bankning yonida.', words: ['The', 'post', 'office', 'is', 'next', 'to', 'the', 'bank'], extra: ['on', 'in'] },
    { k: 'fill', q: 'Go straight on to the end ___ the street.', a: ['of'], uz: "Ko'chaning oxirigacha to'g'riga yuring.", why: "**at the end of** + joy." },
    { k: 'match', pairs: [['next to', 'yonida'], ['behind', 'orqasida'], ['in front of', 'oldida'], ['between', 'orasida'], ['opposite', 'qarshisida']] },
    { k: 'choice', q: 'The ___ is on the left. (kirish)', opts: ['entrance', 'exit', 'tunnel', 'pavement'], a: 0, why: "**entrance** — kirish, **exit** — chiqish." },
    { k: 'dictation', say: 'Cross the bridge and turn right.', a: ['Cross the bridge and turn right.'] },
    { k: 'fix', wrong: 'Turn to left at the traffic lights.', a: ['Turn left at the traffic lights.'], why: "**turn left** — oldida **to** kerak emas." },
    { k: 'translate', uz: "Bankning yonidan o'ting va o'ngga buriling.", a: ['Go past the bank and turn right.', 'Go past the bank, then turn right.', 'Go past the bank. Turn right.'], why: "**go past** + joy, **turn right**." },
    { k: 'tf', q: "*The bank is behind the school* — bank maktab **oldida**.", a: false, why: "**behind** — orqasida." },
    { k: 'choice', q: 'Excuse me, is there a bank near here?', opts: ["Yes, it's next to the post office.", 'Yes, I do.', 'No, I am not.', 'Thank you, I am fine.'], a: 0, why: "Joyni aytish: **it's next to…**" },
    { k: 'speak', say: 'Excuse me, how do I get to the station?', uz: 'Kechirasiz, bekatga qanday boraman?' },
    { k: 'speak', say: 'Go straight on and turn left at the traffic lights.', uz: "To'g'riga yuring va svetoforda chapga buriling." },
    { k: 'speak', say: "It's next to the bakery, opposite the pharmacy.", uz: 'U novvoyxona yonida, dorixona qarshisida.' },
  ],
  quiz: [
    { k: 'choice', q: 'The museum is ___ the park. (park oldida)', opts: ['in front of', 'behind', 'between', 'at'], a: 0 },
    { k: 'fill', q: 'The pharmacy is ___ the bank. (qarshisida)', a: ['opposite'], why: "**opposite** — qarshisida." },
    { k: 'order', uz: "Ko'prikda chapga buriling.", words: ['Turn', 'left', 'at', 'the', 'bridge'], extra: ['to', 'in'] },
    { k: 'translate', uz: "U ko'chaning oxirida.", a: ["It's at the end of the street.", 'It is at the end of the street.'] },
    { k: 'tf', q: "*Go past the school* — maktabning yonidan o'ting.", a: true },
    { k: 'fix', wrong: 'The bakery is next the bank.', a: ['The bakery is next to the bank.'], why: "To'g'ri ibora: **next to**." },
    { k: 'match', pairs: [['bridge', "ko'prik"], ['entrance', 'kirish'], ['exit', 'chiqish'], ['pavement', "yo'lak"]] },
    { k: 'listen', say: 'The café is behind the station.', opts: ['The café is behind the station.', 'The café is next to the station.', 'The café is opposite the station.', 'The station is behind the café.'], a: 0 },
  ],
  summary: [
    "Yo'l ko'rsatish: **Go straight on… Turn left/right at… Go past… Cross the bridge…**",
    "Joylashuv: **next to, opposite, between, behind, in front of, at the end of**. Yangi so'zlar: **bridge, entrance, exit, pavement, tunnel**.",
    "Tushunmasangiz: **Can you say that again, please?**",
  ],
  homework: "Uyingizdan eng yaqin do'kongacha yo'lni 4 ta gapda ovoz chiqarib ayting va telefonga yozib oling.",
};

export default lesson;
