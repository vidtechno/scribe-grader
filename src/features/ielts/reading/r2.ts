import type { ReadingTest } from '../types';

const r2: ReadingTest = {
  id: 'r2',
  title: 'Academic Reading Test 2',
  topics: ['Environment', 'Psychology', 'Technology'],
  passages: [
    // ---------------------------------------------------------------- PASSAGE 1
    {
      title: 'The Beaver Returns',
      intro: 'After four centuries of absence, one of Europe’s most influential animals is back in British rivers.',
      labelled: true,
      paragraphs: [
        `Beavers were once common across Britain. Hunted for their thick fur, and for castoreum, a strong-smelling substance from a gland that was used in medicine and perfume, they had vanished from England and Wales by the sixteenth century and from Scotland soon afterwards. For some four hundred years the animal was absent from the landscape, and most people knew it only from picture books. That changed in 2009, when an official trial began at Knapdale, a forested area on the west coast of Scotland. Four families of beavers, brought from Norway, were released into a chain of small lochs under the supervision of wildlife scientists. Meanwhile, quite separately, a wild population had appeared on the River Tay in eastern Scotland, probably descended from animals that had escaped from private collections around 2001.`,
        `The Knapdale project was deliberately cautious. Researchers monitored the animals for five years, recording where they built dams, how much timber they felled and how local people reacted. Not everyone welcomed the experiment. Farmers worried that rising water would flood their fields, while anglers feared that dams would block the routes of migrating salmon. Yet the official report published in 2015 found few of these fears to be justified, and it recommended that the beavers be allowed to remain. Salmon, it noted, were still able to pass most dams, particularly when the river was running high. The researchers also observed that the animals rarely moved far from the water, so that damage to crops was confined to a narrow strip beside lakes and streams. Local residents were invited to public meetings throughout the trial, and by its end a survey showed that attitudes towards the animals had become noticeably warmer than at the start, partly because many people simply enjoyed seeing them at dusk.`,
        `The effects on the landscape proved dramatic. Beavers build dams to create deep pools, in which they can shelter from predators and store food for the winter. Behind each dam, water spreads across the surrounding ground, forming ponds and marshy patches that attract insects, amphibians and birds. A survey of one Scottish site found that the number of plant species in the beaver-created wetland was about a third higher than in a neighbouring stretch of ordinary woodland. Dams also trap silt, so the water leaving a beaver site is cleaner than the water entering it, which benefits fish and the communities that depend on rivers for drinking water. The felling of trees, which alarmed some observers at first, also lets light reach the woodland floor, encouraging the growth of flowers and young saplings that would otherwise be shaded out. Over time, dead wood left in the water becomes a home for beetles and fungi, adding further variety to the habitat.`,
        `Flooding is another area in which the animals may help. In 2017, a team from the University of Exeter studied a small catchment in Devon where a pair of beavers had been living since 2011. During heavy rain, the peak flow of water leaving the area was found to be 30 per cent lower than it had been before the dams were built, because the ponds held water back and released it slowly. Downstream villages, which had been flooded twice in the previous decade, escaped damage. The researchers caution that results from one small site cannot simply be applied everywhere, but their findings have encouraged several councils to consider beavers as a cheap alternative to concrete barriers.`,
        `Not all landowners are convinced. Gordon Hale, who farms near the Tay, lost around two hectares of barley in 2014 when a dam raised the water level in a drainage ditch. “Nobody asked me whether I wanted beavers,” he says. Under a licence scheme introduced in 2019, farmers may apply to have dams removed or animals relocated if the damage is serious, but critics say the process is slow. Conservation groups reply that compensation and simple precautions, such as fixing wire around valuable trees, cost far less than the benefits the animals provide.`,
        `The future of the species in Britain now depends on policy as much as on biology. In 2022 the Scottish government granted beavers legal protection, and England has since begun issuing licences for wild releases. Population estimates suggest there are now more than 1,500 beavers across Britain, compared with fewer than 500 a decade ago. Ecologists expect the numbers to keep rising, as the animals have no natural predators here and there are plenty of unoccupied rivers. Dr Helen Marsh, who led the Knapdale monitoring team, believes that within thirty years beavers will be as unremarkable a sight as otters, whose own recovery once seemed equally unlikely.`,
      ],
      groups: [
        {
          kind: 'match',
          instruction:
            'The passage has six paragraphs, A–F. Which paragraph contains the following information? You may use any letter more than once.',
          options: ['A', 'B', 'C', 'D', 'E', 'F'],
          items: [
            { q: 'A reason why people once killed the animal for profit', a: 0, why: 'A-paragrafda "Hunted for their thick fur, and for castoreum" deyilgan: hayvon mo‘yna va dori/atir uchun ovlangan.' },
            { q: 'Two groups of people who feared the animal would harm their interests', a: 1, why: 'B-paragrafda "Farmers worried… while anglers feared" deyilgan: fermerlar va baliqchilar xavotirda bo‘lgan.' },
            { q: 'A comparison showing greater plant variety in one habitat than in another', a: 2, why: 'C-paragrafda "plant species… about a third higher than in a neighbouring stretch of ordinary woodland" deyilgan.' },
            { q: 'Evidence that the animals could lower the danger of flooding in a settled area', a: 3, why: 'D-paragrafda "peak flow… 30 per cent lower" va "Downstream villages… escaped damage" deyilgan.' },
            { q: 'A prediction about how ordinary the animal will eventually seem to the public', a: 5, why: 'F-paragrafda "within thirty years beavers will be as unremarkable a sight as otters" deyilgan.' },
          ],
        },
        {
          kind: 'fill',
          title: 'Notes: Beavers in Britain',
          instruction: 'Complete the notes below. Choose NO MORE THAN TWO WORDS from the passage for each answer.',
          items: [
            { q: 'Beavers were killed for their pelts and for a scented gland product called ___.', a: ['castoreum'], why: 'A-paragrafda "castoreum, a strong-smelling substance from a gland" deyilgan.' },
            { q: 'The animals released at Knapdale in 2009 had been brought from ___.', a: ['Norway'], why: 'A-paragrafda "Four families of beavers, brought from Norway" deyilgan.' },
            { q: 'Because dams catch ___, the water that flows out of a beaver site is cleaner.', a: ['silt'], why: 'C-paragrafda "Dams also trap silt, so the water leaving… is cleaner" deyilgan.' },
            { q: 'Farmers can protect valuable trees by putting ___ around them.', a: ['wire'], why: 'E-paragrafda "fixing wire around valuable trees" deyilgan.' },
          ],
        },
        {
          kind: 'tfng',
          instruction: 'Do the following statements agree with the information given in the passage? Choose TRUE, FALSE or NOT GIVEN.',
          items: [
            { q: 'The beavers living on the River Tay were released there as part of the official Knapdale trial.', a: 'false', why: 'A-paragrafda Tay populyatsiyasi "quite separately" paydo bo‘lgan, "escaped from private collections" — rasmiy loyihaning qismi emas.' },
            { q: 'The report that followed the Knapdale trial supported the animals’ continued presence in Scotland.', a: 'true', why: 'B-paragrafda "recommended that the beavers be allowed to remain" deyilgan.' },
            { q: 'Most Scottish farmers now approve of the system for removing problem animals.', a: 'not-given', why: 'E-paragrafda faqat "critics say the process is slow" deyilgan; fermerlarning ko‘pchiligi fikri haqida ma’lumot yo‘q, shuning uchun NOT GIVEN.' },
            { q: 'The number of beavers in Britain has more than tripled over the past ten years.', a: 'true', why: 'F-paragrafda "more than 1,500… compared with fewer than 500 a decade ago" — uch baravardan ko‘p.' },
          ],
        },
      ],
    },

    // ---------------------------------------------------------------- PASSAGE 2
    {
      title: 'Why We Put Things Off',
      intro: 'Psychologists are rethinking procrastination: not as laziness, but as a problem of time and emotion.',
      labelled: false,
      paragraphs: [
        `Procrastination is usually treated as a character flaw, a sign of laziness or poor discipline. Yet surveys suggest it is far too widespread for that explanation to be convincing. In a study of 1,200 university students conducted by Dr Marianne Cole at the University of Leeds in 2011, around 80 per cent admitted to delaying coursework “often” or “always”, and nearly one in four described the habit as a serious problem. Cole argues that a trait shared by so many people is better understood as a by-product of the way human minds are built than as a moral failing.`,
        `One influential account focuses on time. Behavioural economists have long observed that people value rewards less the further away they are, a tendency known as present bias. A weekend of leisure is vivid and immediate, whereas the exam result it may damage is distant and abstract. In a classic experiment, Cole’s colleague Professor Tom Haldane offered volunteers a choice between £50 today and £60 in a month; most took the smaller sum. When the same choice was moved a year into the future, £50 in twelve months or £60 in thirteen, most chose to wait for the larger amount. The difference, Haldane says, shows that we are patient on behalf of our future selves but impatient on behalf of our present ones.`,
        `A second explanation concerns emotion rather than time. Brain-imaging research carried out in Hamburg in 2015 compared chronic procrastinators with people who usually finished tasks on schedule. The procrastinators had a larger amygdala, a region involved in detecting threat, and weaker connections between it and the area of the brain that helps to organise action. The researchers concluded that a task that provokes anxiety, such as a difficult report, is treated by the brain rather like a danger, and that avoiding it brings immediate relief. Because relief feels pleasant, the avoidance is rewarded and the habit grows stronger. The scientists were careful to add that they could not say whether the differences were present from birth or developed through years of avoiding unpleasant jobs.`,
        `Experiments also show how much the structure of a task matters. In a study at a Dutch university, students on a psychology course were divided into three groups for a series of written assignments. The first group was given three deadlines, fixed by the tutor and evenly spaced through the term. The second group was free to choose its own dates, and the third faced a single deadline at the end. The first group earned the highest marks and the third group the lowest, with the self-selecting students in between. Most of those who picked their own dates chose ones that were too close to the end of term, which suggests that they recognised their weakness but underestimated it.`,
        `Delay has costs beyond grades. Over a single term, Dr Cole followed 400 students and recorded their stress levels and their health. In the first weeks, procrastinators reported lower stress than their classmates and made fewer visits to the health centre. By the final weeks the position had reversed: they reported higher stress and poorer sleep, and they were more likely to have suffered from colds and other minor infections. Cole describes the pattern as a short-term gain bought at a long-term price, which she believes helps to explain why the habit is so hard to break.`,
        `Popular advice usually recommends better time management, but Cole is sceptical. Such training, she says, treats a symptom rather than a cause, because people who put off tasks rarely lack a diary; they lack the willingness to face a task that makes them feel uncomfortable. She points instead to a study of first-year students in which those who forgave themselves for delaying their revision for a first examination went on to procrastinate less before the second. Guilt, it seems, makes the task more unpleasant and therefore more likely to be avoided. A further approach involves simple plans in the form “if this happens, I will do that”, which have been shown to help people begin tasks they dislike.`,
        `Not every researcher accepts that delay is always harmful. Haldane has pointed to so-called active procrastinators, people who deliberately postpone work because they believe they perform better under pressure, and who in some surveys achieve grades as good as those of early starters. Cole remains unconvinced. The evidence for the group, she observes, relies almost entirely on what people say about themselves, and people who leave everything to the last minute may be inclined to present necessity as choice. Both agree, however, that the passive kind of procrastination, in which people delay in spite of knowing it will hurt them, deserves the most attention.`,
      ],
      groups: [
        {
          kind: 'mcq',
          instruction: 'Choose the correct letter, A, B, C or D.',
          items: [
            {
              q: 'What does Dr Cole suggest about procrastination in the first paragraph?',
              options: [
                'It is a normal outcome of how the human mind works.',
                'It is a rare problem that mainly affects university students.',
                'It is a weakness that can be cured by greater discipline.',
                'It is becoming more common than it was in the past.',
              ],
              a: 0,
              why: 'A-paragrafda Cole "a by-product of the way human minds are built than as a moral failing" deydi — ya’ni inson miyasining tabiiy natijasi.',
            },
            {
              q: 'What do the results of Haldane’s experiment indicate?',
              options: [
                'People generally prefer smaller rewards to larger ones.',
                'People are more willing to wait when the decision concerns the distant future.',
                'People become more patient as they grow older.',
                'People choose money more readily than leisure.',
              ],
              a: 1,
              why: 'B-paragrafda bir yil keyingi tanlovda "most chose to wait" deyilgan, bugungi tanlovda esa kichik summa tanlangan.',
            },
            {
              q: 'What did the Hamburg researchers say about the brain differences they found?',
              options: [
                'They were present in every person who delays tasks.',
                'They proved that procrastination is inherited.',
                'They could not be sure whether they caused the habit or resulted from it.',
                'They disappeared once the anxiety had been treated.',
              ],
              a: 2,
              why: 'C-paragrafda "could not say whether the differences were present from birth or developed through years of avoiding" deyilgan.',
            },
            {
              q: 'Why is Cole doubtful about time-management training?',
              options: [
                'It takes too long to produce results.',
                'It is only suitable for people with busy diaries.',
                'It addresses the outward sign of the problem, not its source.',
                'It makes people feel guilty about their habits.',
              ],
              a: 2,
              why: 'F-paragrafda "treats a symptom rather than a cause" deyilgan.',
            },
            {
              q: 'Why does Cole doubt the findings about active procrastinators?',
              options: [
                'The groups studied were far too small.',
                'The grades were recorded by the students’ own tutors.',
                'The research did not include any passive procrastinators.',
                'The information comes mainly from the participants’ own accounts.',
              ],
              a: 3,
              why: 'G-paragrafda "relies almost entirely on what people say about themselves" deyilgan.',
            },
          ],
        },
        {
          kind: 'fill',
          instruction: 'Complete each sentence with ONE WORD ONLY from the passage.',
          items: [
            { q: 'In Haldane’s first choice, volunteers who had to wait a ___ for the larger payment usually refused it.', a: ['month'], why: 'B-paragrafda "£50 today and £60 in a month; most took the smaller sum" deyilgan.' },
            { q: 'Chronic procrastinators were found to have an unusually large ___, the part of the brain that detects threats.', a: ['amygdala'], why: 'C-paragrafda "a larger amygdala, a region involved in detecting threat" deyilgan.' },
            { q: 'By the end of term, students who delayed work were more likely to have suffered from ___ and similar minor illnesses.', a: ['colds'], why: 'E-paragrafda "more likely to have suffered from colds and other minor infections" deyilgan.' },
            { q: 'Students who forgave themselves for putting off revision were less likely to delay before their next ___.', a: ['examination', 'exam'], why: 'F-paragrafda "delaying their revision for a first examination… less before the second" deyilgan.' },
          ],
        },
        {
          kind: 'match',
          title: 'The deadline experiment',
          instruction:
            'Complete the summary using the list of words, A–H, below. Choose the correct word for each gap.',
          options: ['imposed', 'regular', 'single', 'late', 'highest', 'lowest', 'optional', 'early'],
          items: [
            { q: 'One group of students had deadlines that were ___ by the tutor rather than chosen by themselves.', a: 0, why: 'D-paragrafda "fixed by the tutor" deyilgan — ya’ni majburiy belgilangan (imposed).' },
            { q: 'These deadlines were also ___, falling at equal intervals through the term.', a: 1, why: 'D-paragrafda "evenly spaced through the term" deyilgan — ya’ni muntazam (regular).' },
            { q: 'The group that did worst had only a ___ deadline, at the very end.', a: 2, why: 'D-paragrafda "the third faced a single deadline at the end" va "the third group the lowest" deyilgan.' },
            { q: 'Most students who set their own dates picked ones that were too ___ in the term.', a: 3, why: 'D-paragrafda "chose ones that were too close to the end of term" deyilgan — ya’ni kech (late).' },
          ],
        },
      ],
    },

    // ---------------------------------------------------------------- PASSAGE 3
    {
      title: 'Machines at Work: Who Gains?',
      intro: 'As algorithms learn to perform tasks once thought uniquely human, experts disagree about what it will mean for workers.',
      labelled: true,
      paragraphs: [
        `Every wave of mechanisation has provoked the fear that machines will leave people without work. In 1811, English textile workers known as Luddites smashed the looms they blamed for their falling wages, and similar anxieties have returned with each new generation of technology. Today the argument has a sharper edge, because machines no longer merely repeat; they learn. Software reads medical scans, lorries steer themselves along motorways and programs draft legal documents in seconds. A widely quoted 2018 report from the Brandt Institute estimated that 38 per cent of jobs in wealthy countries were at high risk of automation by 2035. The debate, however, tends to be conducted in extremes, as if the only possible futures were mass idleness or effortless prosperity, and this obscures more than it reveals.`,
        `The optimists begin with the historical record. Professor Ingrid Solheim, an economist at the University of Bergen, points out that two centuries ago around seven in ten workers in industrial countries were employed on farms, while today the figure is about two in a hundred; yet there has been no permanent rise in unemployment. Her favourite example is the cash machine. When ATMs spread in the 1980s, many predicted that bank tellers would disappear. Instead, their numbers held steady for decades, because the machines made each branch cheaper to run, banks opened more branches, and the tellers who remained took on advisory work. Technology, Solheim concludes, destroys tasks, but the savings it creates generate demand for new ones.`,
        `Dr Rahul Menon, a sociologist at the University of Leeds, regards this reasoning as dangerously comfortable. Earlier machines, he argues, replaced human muscle and left people free to move into jobs that required thought. Modern systems target the thinking itself, which leaves fewer places for displaced workers to retreat. There is also the question of pace. The shift from farming to factories unfolded over several generations, giving families time to adapt; Menon suggests that some of today’s changes may arrive within a single decade, far too quickly for retraining programmes to keep up. Solheim’s evidence is impressive, but it is a record of the past, and Menon’s point about speed is difficult to dismiss.`,
        `Even if jobs survive, there is the matter of who benefits. A study of warehouse firms, published in 2022, found that productivity had risen by about 25 per cent over five years after the introduction of robotic sorting, while the average pay of warehouse employees rose by only 3 per cent. Marcus Teller, a trade-union official, says that workers are routinely told to “retrain” without being told who will pay for it or what they will be retrained for. Economists on both sides acknowledge that wages do not always follow output. The figures do not prove, however, that companies have acted unfairly; the gap may simply reflect the weakened bargaining power of workers in a market where machines are an alternative.`,
        `A further concern is that software increasingly acts not as a replacement for workers but as their supervisor. Dr Aiko Tanaka, who studies the ethics of technology, has interviewed delivery drivers whose speed, route and rest breaks are tracked and scored by an algorithm. Many described the experience as being watched by someone who could never be persuaded or reasoned with. Tanaka argues that efficiency gained in this way carries a hidden cost in dignity and autonomy, since people lose the ability to exercise judgement about their own work. Employers, she notes, often present such systems as neutral, yet the targets they enforce reflect human choices about what should be measured.`,
        `The experts propose very different remedies. Solheim favours investment in education and is wary of schemes that pay every citizen a basic income, which she considers too expensive to sustain. Menon would tax companies that replace staff with machines and use the revenue to support affected communities. Teller wants firms to be legally required to fund training for any employee whose job is changed by technology, while Tanaka calls for a right to challenge decisions made by workplace software. These proposals are not mutually exclusive, and a society could sensibly adopt several of them at once.`,
        `What, then, should an ordinary reader conclude? Perhaps chiefly that confident forecasts deserve suspicion. In 1930 the economist John Maynard Keynes predicted that, within a century, rising productivity would reduce the working week to fifteen hours. He was right about the growth in output and wrong about its consequences: people chose to consume more rather than work less. The lesson is not that technology is harmless, nor that it is a threat, but that its effects depend on decisions that societies make, and these are decisions that have not yet been taken.`,
      ],
      groups: [
        {
          kind: 'match',
          instruction:
            'The passage has seven paragraphs, A–G. Choose the correct heading for paragraphs B–F from the list of headings below.',
          options: [
            'A reassuring historical record',
            'Why the past may be a poor guide',
            'Who gains from higher productivity?',
            'Software as supervisor',
            'Rival proposals for helping workers',
            'Why developing countries face the greatest risk',
            'The environmental cost of building robots',
            'A shortage of skilled engineers',
          ],
          items: [
            { q: 'Paragraph B', a: 0, why: 'B-paragrafda Solheim tarixiy dalillarni (fermerlar, ATM) keltiradi: "The optimists begin with the historical record".' },
            { q: 'Paragraph C', a: 1, why: 'C-paragrafda Menon "Earlier machines… replaced human muscle", hozirgi tizimlar esa fikrlashni almashtiradi — o‘tmish yaxshi qo‘llanma emas.' },
            { q: 'Paragraph D', a: 2, why: 'D-paragrafda "productivity had risen by about 25 per cent… pay… only 3 per cent" — foyda kimga ketayotgani muhokama qilinadi.' },
            { q: 'Paragraph E', a: 3, why: 'E-paragrafda "software increasingly acts… as their supervisor" deyilgan.' },
            { q: 'Paragraph F', a: 4, why: 'F-paragrafda "The experts propose very different remedies" — turli takliflar sanab o‘tiladi.' },
          ],
        },
        {
          kind: 'ynng',
          instruction:
            'Do the following statements agree with the views of the writer of the passage? Choose YES, NO or NOT GIVEN.',
          items: [
            { q: 'It is helpful to discuss the future of work as a choice between two extreme outcomes.', a: 'no', why: 'A-paragrafda yozuvchi "conducted in extremes… this obscures more than it reveals" deydi — bu foydali emas.' },
            { q: 'Menon’s argument about how quickly change may happen deserves to be taken seriously.', a: 'yes', why: 'C-paragrafda yozuvchi "Menon’s point about speed is difficult to dismiss" deydi.' },
            { q: 'The warehouse figures show that employers deliberately kept wages low.', a: 'no', why: 'D-paragrafda "The figures do not prove, however, that companies have acted unfairly" deyilgan.' },
            { q: 'Workplace monitoring systems of the kind Tanaka describes ought to be made illegal.', a: 'not-given', why: 'E-paragrafda taqiqlash haqida hech narsa aytilmagan; faqat Tanaka tashvishi bayon qilingan, shuning uchun NOT GIVEN.' },
            { q: 'Predictions about the future effects of technology should be treated with caution.', a: 'yes', why: 'G-paragrafda "confident forecasts deserve suspicion" deyilgan.' },
          ],
        },
        {
          kind: 'mcq',
          instruction: 'Choose the correct letter, A, B, C or D.',
          items: [
            {
              q: 'According to Solheim, why did the number of bank tellers stay steady after cash machines were introduced?',
              options: [
                'Customers refused to use the new machines.',
                'Cheaper branches meant that banks opened more of them.',
                'Banks employed tellers to repair the machines.',
                'Tellers were willing to accept lower pay.',
              ],
              a: 1,
              why: 'B-paragrafda "the machines made each branch cheaper to run, banks opened more branches" deyilgan.',
            },
            {
              q: 'Why does Menon believe modern automation may differ from earlier technology?',
              options: [
                'It is being introduced by fewer companies.',
                'It affects mental work, so displaced workers have fewer alternatives.',
                'It requires workers to be retrained as engineers.',
                'It is more expensive than the machines of the past.',
              ],
              a: 1,
              why: 'C-paragrafda "Modern systems target the thinking itself, which leaves fewer places for displaced workers to retreat" deyilgan.',
            },
            {
              q: 'What did the 2022 study of warehouse firms find?',
              options: [
                'Pay rose by about the same amount as output.',
                'Robotic sorting made little difference to productivity.',
                'Pay increased far more slowly than output.',
                'Employees mostly refused offers of retraining.',
              ],
              a: 2,
              why: 'D-paragrafda "productivity… about 25 per cent… pay… only 3 per cent" deyilgan.',
            },
            {
              q: 'What point does the writer make about Keynes’s 1930 prediction?',
              options: [
                'Economists have always underestimated technological change.',
                'Output grew less quickly than he expected.',
                'Workers today are less happy than he hoped.',
                'He correctly foresaw the growth but misjudged how people would respond.',
              ],
              a: 3,
              why: 'G-paragrafda "He was right about the growth in output and wrong about its consequences: people chose to consume more rather than work less" deyilgan.',
            },
          ],
        },
      ],
    },
  ],
};

export default r2;
