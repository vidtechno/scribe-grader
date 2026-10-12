import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u12-l11",
  title: "Stories from the past: final review",
  titleUz: "O'tmish hikoyalari: yakuniy takror",
  mini: true,
  kind: 'review',
  goal: "Butun bosqichni takrorlaysiz: **Past Simple** (to'g'ri/noto'g'ri fe'llar, savol, inkor, *ago*), **Past Continuous**, **when / while**, **used to**, **because / so / but / although** va hikoya tartibi (**first, then, after that, finally**) — va ularni bitta kichik hikoyada birga ishlatasiz.",
  slides: [
    {
      title: "Zamonlarni eslaymiz",
      blocks: [
        {
          t: "table", head: ["Mavzu", "Qoida", "Misol"], speak: [2],
          rows: [
            ["Past Simple", "V2 (-ed yoki noto'g'ri fe'l)", "I visited Bukhara. We went by train."],
            ["Savol / inkor", "did / didn't + V1", "Did you enjoy it? I didn't see him."],
            ["ago", "o'tgan vaqt + ago", "She arrived two hours ago."],
            ["Past Continuous", "was / were + -ing", "It was raining when I left."],
            ["used to", "avvalgi odat (+ V1)", "I used to live in a village."],
          ],
        },
        { t: "tip", tone: "warn", md: "**Did** dan keyin fe'l oddiy shaklda: *Did you **see**…? I didn't **go**.* (❌ *Did you saw*, ❌ *didn't went*)." },
        { t: "check", ex: { k: "fill", q: "She didn't ___ the news. (hear)", a: ["hear"], why: "*didn't* + V1: **hear**." } },
        { t: "check", ex: { k: "choice", q: "We ___ to Samarkand two years ago.", opts: ["go", "went", "were going", "goed"], a: 1, why: "*ago* → Past Simple: **went**." } },
      ],
    },
    {
      title: "Bog'lovchilar va tartib",
      blocks: [
        {
          t: "table", head: ["So'z", "Vazifasi", "Misol"], speak: [2],
          rows: [
            ["**when / while**", "uzun ish + qisqa voqea", "I was cooking when the phone rang."],
            ["**because**", "sabab", "I stayed home because I was ill."],
            ["**so**", "natija", "I was ill, so I stayed home."],
            ["**but**", "qarama-qarshilik", "It was cold, but we went out."],
            ["**although**", "garchi", "Although it was cold, we went out."],
            ["**first, then, after that, finally**", "tartib", "First we ate. Then we walked. Finally, we went home."],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["Although it rained, we had a good day.", "I was late because I missed the bus.", "While I was walking, I saw Laylo."] },
          bad: { title: "Xato", items: ["Although it rained, but we had a good day.", "I missed the bus, because I was late.", "While I walked, I was seeing Laylo."] },
        },
        { t: "check", ex: { k: "choice", q: "___ he was very tired, he finished the work.", opts: ["Although", "Because", "So", "While"], a: 0, why: "Qarama-qarshilik: charchagan, **lekin** tugatdi → **Although**." } },
        { t: "check", ex: { k: "choice", q: "I got up at seven. ___ I had breakfast.", opts: ["Then", "Because", "Although", "Used to"], a: 0, why: "Ketma-ketlik → **Then**." } },
      ],
    },
    {
      title: "O'qing: Qiyin sayohat",
      blocks: [
        {
          t: "text", title: "A long journey",
          en: "Last summer my brother and I went to Khiva. We used to travel by bus, but this time we took the train. First, we arrived at the station early because we didn't want to miss it. While we were waiting, it started to rain. Then the train was late, so we waited for an hour. Although we were tired, we enjoyed the journey. After that, we found a hotel near the old city. Finally, we went to bed. It was a long day, but it was fantastic.",
          uz: "O'tgan yozda akam bilan Xivaga bordik. Biz avval avtobusda sayohat qilardik, lekin bu safar poyezdda bordik. Avval vokzalga erta keldik, chunki poyezddan qolishni xohlamadik. Kutib turganimizda yomg'ir yog'a boshladi. Keyin poyezd kechikdi, shuning uchun bir soat kutdik. Charchagan bo'lsak ham, sayohatdan zavqlandik. Shundan so'ng eski shahar yonidan mehmonxona topdik. Nihoyat, uxlashga yotdik. Uzoq kun bo'ldi, lekin ajoyib edi.",
        },
        { t: "check", ex: { k: "choice", q: "Why did they arrive at the station early?", opts: ["They didn't want to miss the train.", "It was raining.", "The train was early.", "They were tired."], a: 0, why: "*…because we didn't want to miss it.*" } },
        { t: "check", ex: { k: "tf", q: "They always travelled by train before.", a: false, why: "Ular avval **avtobusda** yurishardi (*used to travel by bus*)." } },
        { t: "check", ex: { k: "choice", q: "What happened while they were waiting?", opts: ["It started to rain.", "The train arrived.", "They found a hotel.", "They went to bed."], a: 0, why: "*While we were waiting, it started to rain.*" } },
      ],
    },
  ],
  words: [
    { en: "terrified", uz: "dahshatga tushgan, juda qo'rqqan", ipa: "ˈterɪfaɪd", pos: "adj", ex: "I was terrified when the lights went out.", exUz: "Chiroq o'chganda juda qo'rqib ketdim." },
    { en: "relieved", uz: "yengil tortgan", ipa: "rɪˈliːvd", pos: "adj", ex: "I felt relieved when I found my keys.", exUz: "Kalitlarimni topganimda yengil tortdim." },
    { en: "all of a sudden", uz: "to'satdan, birdan", ipa: "ɔːl əv ə ˈsʌdn", pos: "phrase", ex: "All of a sudden, the door opened.", exUz: "To'satdan eshik ochildi." },
    { en: "at last", uz: "nihoyat, oxiri", ipa: "æt lɑːst", pos: "phrase", ex: "At last, the bus came.", exUz: "Nihoyat, avtobus keldi." },
    { en: "in the middle of", uz: "o'rtasida", ipa: "ɪn ðə ˈmɪdl əv", pos: "phrase", ex: "The phone rang in the middle of the night.", exUz: "Telefon tun o'rtasida jiringladi." },
  ],
  practice: [
    { k: "match", pairs: [["terrified", "dahshatga tushgan"], ["relieved", "yengil tortgan"], ["at last", "nihoyat"], ["all of a sudden", "to'satdan"], ["in the middle of", "o'rtasida"]] },
    { k: "choice", q: "I ___ my keys yesterday.", opts: ["lose", "lost", "losed", "was lose"], a: 1, why: "**lose – lost**." },
    { k: "choice", q: "Did you ___ the film last night?", opts: ["enjoyed", "enjoy", "enjoying", "were enjoy"], a: 1, why: "*Did* + V1: **enjoy**." },
    { k: "fill", q: "We were having dinner when the lights ___ out. (go)", a: ["went"], why: "Qisqa voqea: **went**." },
    { k: "fill", q: "I ___ to live in a small village when I was a child.", a: ["used"], why: "**used to** + V1." },
    { k: "fill", q: "It was cold, ___ we went for a walk.", a: ["but"], why: "Qarama-qarshilik → **but**." },
    { k: "choice", q: "She was ill, ___ she didn't go to work.", opts: ["so", "although", "but", "while"], a: 0, why: "Natija → **so**." },
    { k: "fix", wrong: "Although it was late, but we kept talking.", a: ["Although it was late, we kept talking.", "It was late, but we kept talking."], why: "*Although* va *but* birga kelmaydi." },
    { k: "fix", wrong: "She didn't went to school yesterday.", a: ["She didn't go to school yesterday."], why: "*didn't* + V1: **go**." },
    { k: "fix", wrong: "While I walked home, I was seeing an accident.", a: ["While I was walking home, I saw an accident."], why: "Fon — *was walking*, qisqa voqea — *saw*." },
    { k: "order", uz: "Avval biz kechki ovqat qildik, keyin sayr qildik.", words: ["First", "we", "had", "dinner,", "then", "we", "went", "for", "a", "walk."], extra: ["was", "did"] },
    { k: "order", uz: "U ikki soat oldin keldi.", words: ["She", "arrived", "two", "hours", "ago."], extra: ["arrive", "before"] },
    { k: "translate", uz: "Men bolaligimda Toshkentda yashardim.", a: ["I used to live in Tashkent when I was a child.", "When I was a child, I used to live in Tashkent.", "I used to live in Tashkent as a child."] },
    { k: "translate", uz: "Yomg'ir yog'ayotgan edi, shuning uchun uyda qoldik.", a: ["It was raining, so we stayed at home.", "It was raining, so we stayed home.", "It was raining so we stayed at home."] },
  ],
  quiz: [
    { k: "choice", q: "They ___ TV when I arrived.", opts: ["watched", "were watching", "was watching", "watch"], a: 1, why: "Fon, *they* → **were watching**." },
    { k: "choice", q: "___ it was raining, we played football.", opts: ["Although", "Because", "So", "Then"], a: 0, why: "Qarama-qarshilik → **Although**." },
    { k: "choice", q: "Which sentence is correct?", opts: ["I didn't saw him.", "I didn't see him.", "I not saw him.", "I didn't seen him."], a: 1, why: "*didn't* + V1." },
    { k: "fill", q: "My grandfather ___ to walk to school every day. (use)", a: ["used"], why: "**used to** + V1." },
    { k: "fill", q: "I was late ___ I missed the bus.", a: ["because"], why: "Sabab → **because**." },
    { k: "tf", q: "**She was cooking while he watched TV yesterday evening.** — yaxshiroq: *…while he was watching TV*.", a: true, why: "Ikki parallel ish: ikkalasi ham Past Continuous bo'lishi tabiiyroq." },
    { k: "order", uz: "Nihoyat, avtobus keldi.", words: ["At", "last,", "the", "bus", "came."], extra: ["comes", "was"] },
    { k: "translate", uz: "Ular choy ichib o'tirganda, telefon jiringladi.", a: ["The phone rang while they were drinking tea.", "While they were drinking tea, the phone rang.", "The phone rang when they were drinking tea.", "When they were drinking tea, the phone rang."] },
  ],
  summary: [
    "**Past Simple**: V2; savol — *Did you…?*, inkor — *didn't* + V1; **ago** — o'tgan vaqt.",
    "**Past Continuous** (*was / were + -ing*) — fon; **Past Simple** — voqea; **when / while** bog'laydi.",
    "**used to** + V1 — avvalgi odat.",
    "**because** — sabab, **so** — natija, **but / although** — qarama-qarshilik.",
    "Tartib: **First, then, after that, finally** — hikoya shunday quriladi.",
  ],
  homework: "Bosqichdagi barcha mavzularni ishlatib, 8–10 gapdan iborat o'z sayohatingiz haqida hikoya yozing: *used to*, *ago*, *when/while*, *because/so/but/although* va *first, then, finally* bo'lsin. Keyin fe'llarni tekshiring: noto'g'ri fe'llar to'g'ri V2 dami?",
};

export default lesson;
