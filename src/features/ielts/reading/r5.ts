import type { ReadingTest } from '../types';

const r5: ReadingTest = {
  id: 'r5',
  title: 'Academic Reading Test 5',
  topics: ['Marine biology', 'Education', 'Art history'],
  passages: [
    // ---------------------------------------------------------------- PASSAGE 1
    {
      title: 'How a Reef Rebuilds Itself',
      intro: 'Long-term surveys in the Pacific suggest that damaged coral reefs can recover faster than scientists once believed.',
      labelled: true,
      paragraphs: [
        `Coral reefs occupy only a tiny fraction of the sea floor, yet they shelter an extraordinary variety of life, from tiny shrimps to sharks, and they protect many coastlines from the full force of the waves. For decades, marine scientists assumed that a reef damaged by storms, disease or warm water would need at least fifty years to regain its former richness, if it recovered at all. That pessimism is now being challenged by evidence from the Tavua Bank, a chain of reefs off a small Pacific island. Researchers from the Pacific Reef Institute have followed the fortunes of forty survey sites there since 2004, diving every six months to count coral colonies, measure their size and record the fish that live among them. The resulting record is one of the longest of its kind in the region.`,
        `In 2009 a cyclone destroyed roughly two-thirds of the living coral on the Bank. Dr Lena Okafor, who leads the monitoring team, expected a slow and patchy return. Instead, within seven years, coral cover at the most sheltered sites had climbed back to nearly its earlier level. The key, she explains, was the arrival of fast-growing branching species, which settled on bare rock within months and created a framework that slower, sturdier corals could later occupy. Okafor compares the process to a woodland in which quick-growing shrubs prepare the ground for oaks. Without the early arrivals, she argues, the heavier corals that give a reef its strength would have found nothing to cling to, and the sea floor would have been left as a bare expanse of rubble.`,
        `Fish proved to be as important as the coral itself. Parrotfish and surgeonfish graze on seaweed, which would otherwise smother young coral before it could establish itself. After the cyclone, the island’s fishing villages agreed in 2010 to a ban on fishing at half of the survey sites. On those protected sites, grazing fish were about four times more abundant than on neighbouring sites that stayed open, and the coral recovered far faster. The ban was unpopular at first, and several village leaders predicted hunger. Within three years, however, catches in the surrounding waters had risen, because young fish raised on the protected reef were swimming out into the open areas. By 2014, the same leaders were asking for the ban to be extended.`,
        `Not every site recovered. Reefs on the western side of the Bank, exposed to polluted water from a river, were still covered in seaweed a decade after the storm. Professor Daniel Reyes, an independent ecologist who reviewed the project for its funders, warns that Tavua’s success may be unusual. Its reefs are remote, and healthy neighbours supplied a steady stream of coral larvae to settle on the damaged ground. A reef with no such neighbours, he says, may never recover without help, however carefully it is protected. “Tavua tells us what is possible,” Reyes says, “not what is typical.” Okafor accepts the point, but she notes that the Bank still offers a rare chance to watch natural recovery from beginning to end.`,
        `Scientists have also tried to speed recovery up. At Tavua, a nursery was built in 2012: small fragments of healthy coral were grown on underwater frames until they were large enough to be fixed to the damaged reef with cement. Between 2012 and 2016 the team planted about 12,000 fragments, and roughly seventy per cent survived their first year. The method has its critics, who point out that it is slow and needs trained divers, and that the fragments come from only a handful of parent colonies, so the new coral is genetically alike and may be equally vulnerable to disease. Okafor agrees that gardening cannot replace the protection of water quality, but she believes it is valuable on sites where natural settlement has failed.`,
        `Warming seas remain the greatest threat. In 2023 a marine heatwave bleached about a fifth of the colonies at Tavua, turning them white as they expelled the algae that normally feed them. Yet many of the colonies that had survived earlier episodes of heat appeared to cope better, which suggests that some corals may be adapting. Okafor is careful not to overstate this. “Recovery is not the same as safety,” she says. “A reef can rebuild in a decade and be lost again in a summer.” Her team plans to extend its surveys to one hundred sites by 2030, in the hope of discovering which reefs are most likely to survive the coming decades.`,
      ],
      groups: [
        {
          kind: 'match',
          instruction:
            'The passage has six paragraphs, A–F. Which paragraph contains the following information? You may use any letter more than once.',
          options: ['A', 'B', 'C', 'D', 'E', 'F'],
          items: [
            { q: 'A comparison between the way a reef develops and the way a woodland grows', a: 1, why: 'B-paragrafda "a woodland in which quick-growing shrubs prepare the ground for oaks" deyilgan.' },
            { q: 'An example of local people benefiting from a restriction they first disliked', a: 2, why: 'C-paragrafda ban "unpopular at first", keyin "catches… had risen" va rahbarlar uni uzaytirishni so‘ragan.' },
            { q: 'A reason why some reefs may fail to recover without human assistance', a: 3, why: 'D-paragrafda "A reef with no such neighbours… may never recover without help" deyilgan.' },
            { q: 'Criticism of a technique because the new coral is too similar genetically', a: 4, why: 'E-paragrafda "the new coral is genetically alike and may be equally vulnerable to disease" deyilgan.' },
            { q: 'A warning that a recovered reef is still at risk', a: 5, why: 'F-paragrafda "Recovery is not the same as safety" va "lost again in a summer" deyilgan.' },
          ],
        },
        {
          kind: 'fill',
          title: 'Notes: Recovery at the Tavua Bank',
          instruction: 'Complete the notes below. Choose NO MORE THAN TWO WORDS from the passage for each answer.',
          items: [
            { q: 'In 2009 a ___ killed about two-thirds of the living coral on the Bank.', a: ['cyclone'], why: 'B-paragrafda "In 2009 a cyclone destroyed roughly two-thirds of the living coral" deyilgan.' },
            { q: 'The first corals to settle on bare rock were fast-growing ___ species.', a: ['branching'], why: 'B-paragrafda "fast-growing branching species, which settled on bare rock within months" deyilgan.' },
            { q: 'Grazing fish stop ___ from smothering young coral.', a: ['seaweed'], why: 'C-paragrafda "graze on seaweed, which would otherwise smother young coral" deyilgan.' },
            { q: 'Reefs on the western side suffered because of ___ coming from a river.', a: ['polluted water'], why: 'D-paragrafda "exposed to polluted water from a river" deyilgan.' },
          ],
        },
        {
          kind: 'tfng',
          instruction: 'Do the following statements agree with the information given in the passage? Choose TRUE, FALSE or NOT GIVEN.',
          items: [
            { q: 'Within a decade of the cyclone, coral at the best-protected sites had almost returned to its former extent.', a: 'true', why: 'B-paragrafda "within seven years, coral cover at the most sheltered sites had climbed back to nearly its earlier level" deyilgan.' },
            { q: 'The fishing villages supported the ban on fishing from the moment it was proposed.', a: 'false', why: 'C-paragrafda "The ban was unpopular at first" deyilgan — dastlab qo‘llab-quvvatlanmagan.' },
            { q: 'Reyes believes that other reefs may not be able to repeat the Tavua recovery.', a: 'true', why: 'D-paragrafda Reyes "Tavua’s success may be unusual… not what is typical" deydi.' },
            { q: 'Most of the coral fragments in the nursery were taken from the western side of the Bank.', a: 'not-given', why: 'E-paragrafda parcha qayerdan olingani aytilmagan; faqat "only a handful of parent colonies" deyilgan, shuning uchun NOT GIVEN.' },
          ],
        },
      ],
    },

    // ---------------------------------------------------------------- PASSAGE 2
    {
      title: 'Does Homework Help?',
      intro: 'Researchers are looking more closely at one of the oldest arguments in education, and the answers are not simple.',
      labelled: false,
      paragraphs: [
        `Few topics divide parents, teachers and researchers as sharply as homework. Supporters argue that it teaches children to work independently and gives them extra practice, while opponents claim that it exhausts pupils, causes arguments at home and takes up time that could be spent playing or sleeping. For many years the argument was conducted largely on the basis of opinion. That began to change in 2014, when Professor Anita Verma and her colleagues at the Northfield Institute of Education compared the homework habits and test results of 9,000 pupils in 120 schools. It remains one of the largest studies of its kind, and its findings are still quoted by both sides.`,
        `The results depended heavily on age. Among secondary pupils, those who did up to ninety minutes of homework a night achieved clearly higher scores than classmates who did none. Beyond ninety minutes, however, there was no further improvement, and the most heavily burdened pupils reported the lowest levels of satisfaction with school. Among primary pupils the picture was different: Verma’s team found almost no link between the time spent on homework and test results. Verma cautions that her study shows association, not cause, since pupils who do more homework may also be more motivated in the first place. She nevertheless regards the primary finding as striking, because primary homework is so widely set.`,
        `A second study tested the question more directly. In 2017 the psychologist Dr Tomasz Wrona divided 800 eight-year-olds in forty classes into two groups for a single term. One group was given reading tasks to complete on four evenings a week, while the other had none. At the end of term the difference in reading scores between the groups was less than one point on a hundred-point scale. The children who had received homework, however, reported less enjoyment of reading than the others. Wrona concludes that at this age homework mainly builds habits, and that if the habit is formed unhappily it may do more harm than good.`,
        `Homework may also widen the gap between rich and poor. In a survey of 2,000 families, Dr Grace Mbeki found that one in five secondary pupils had no desk or quiet room at home in which to work. Their homework was, on average, shorter and less accurate than that of their classmates. Mbeki’s findings persuaded several schools to open supervised homework clubs after lessons. In the schools that did so, the difference in homework quality between pupils with and without a quiet space narrowed by about a third within two years. “The task itself is not unfair,” Mbeki says. “The conditions in which it is done are.”`,
        `Some schools have gone further. In 2016 Simon Aldridge, headteacher of a primary school in the north of England, scrapped homework entirely. Instead, he asked families to encourage pupils to read for pleasure in the evenings, with no tasks to complete and nothing to hand in. Critics predicted that standards would fall. After three years, however, the school’s test results were unchanged, while a survey showed that the proportion of parents who described evenings at home as “calm” had risen from under half to nearly three quarters. Aldridge admits that the experience of one school proves little, but he says he has no intention of going back.`,
        `Verma has since turned her attention to what pupils actually do with their time. In a further experiment, one group of secondary pupils spent twenty minutes taking short quizzes on the week’s lessons, while another group spent forty minutes copying out their notes. A month later the quiz group remembered considerably more. Verma explains that trying to recall information strengthens memory, whereas copying gives an illusion of learning because the material feels familiar. She argues that teachers should therefore set shorter tasks that make pupils retrieve what they already know, rather than long tasks that simply keep them busy for an evening.`,
        `The researchers do not agree on every point. Verma wants age-based limits on the amount of homework, Wrona would scrap it in primary schools altogether, and Mbeki puts her faith in better support at school for pupils who lack space at home. They do agree on one thing: that homework which is never looked at by a teacher is the least valuable kind. Feedback, Wrona says, tells a child that the effort mattered, and without it even the best-designed task becomes an empty ritual. Whatever policy a school adopts, he adds, it should be judged by what pupils learn, not by how tired they are.`,
      ],
      groups: [
        {
          kind: 'mcq',
          instruction: 'Choose the correct letter, A, B, C or D.',
          items: [
            {
              q: 'What did the Northfield study find about primary pupils?',
              options: [
                'Their homework brought larger gains than that of older pupils.',
                'There was hardly any connection between homework time and their test results.',
                'They were given more homework than secondary pupils.',
                'They reported greater satisfaction with school than older pupils.',
              ],
              a: 1,
              why: '2-paragrafda "almost no link between the time spent on homework and test results" deyilgan.',
            },
            {
              q: 'What did Wrona’s experiment with eight-year-olds show?',
              options: [
                'Homework raised reading scores by a large margin.',
                'Children without homework enjoyed reading less.',
                'Homework made almost no difference to scores and reduced enjoyment.',
                'Homework helped only the children who read for four evenings a week.',
              ],
              a: 2,
              why: '3-paragrafda "less than one point" farq va "reported less enjoyment of reading" deyilgan.',
            },
            {
              q: 'What was the effect of the homework clubs that Mbeki’s findings inspired?',
              options: [
                'They reduced the gap in homework quality between pupils.',
                'They persuaded parents to buy desks for their children.',
                'They shortened the time pupils spent on homework.',
                'They raised the test scores of every pupil in the school.',
              ],
              a: 0,
              why: '4-paragrafda "the difference in homework quality… narrowed by about a third" deyilgan.',
            },
            {
              q: 'What happened at Aldridge’s school after homework was abolished?',
              options: [
                'Test results fell, but pupils became happier.',
                'Test results rose, and more parents supported the change.',
                'Parents asked the headteacher to bring homework back.',
                'Test results stayed the same and family evenings became calmer.',
              ],
              a: 3,
              why: '5-paragrafda "test results were unchanged" va "evenings at home as ‘calm’ had risen" deyilgan.',
            },
            {
              q: 'What do the researchers agree about at the end of the passage?',
              options: [
                'Homework should be banned in all primary schools.',
                'Homework that no teacher reads has the least value.',
                'Pupils from poorer homes should receive less homework.',
                'Schools should set homework only at weekends.',
              ],
              a: 1,
              why: '7-paragrafda "homework which is never looked at by a teacher is the least valuable kind" deyilgan.',
            },
          ],
        },
        {
          kind: 'fill',
          instruction: 'Complete each sentence with ONE WORD ONLY from the passage.',
          items: [
            { q: 'For secondary pupils, doing more than ninety minutes a night brought no further ___ in test scores.', a: ['improvement'], why: '2-paragrafda "Beyond ninety minutes, however, there was no further improvement" deyilgan.' },
            { q: 'The eight-year-olds who did homework reported less ___ of reading.', a: ['enjoyment'], why: '3-paragrafda "reported less enjoyment of reading than the others" deyilgan.' },
            { q: 'One in five secondary pupils had no desk or quiet ___ at home.', a: ['room'], why: '4-paragrafda "no desk or quiet room at home in which to work" deyilgan.' },
            { q: 'In Verma’s memory experiment, one group took short ___ on the week’s lessons.', a: ['quizzes'], why: '6-paragrafda "twenty minutes taking short quizzes on the week’s lessons" deyilgan.' },
          ],
        },
        {
          kind: 'match',
          title: 'Two experiments in changing homework',
          instruction:
            'Complete the summary using the list of words, A–H, below. Choose the correct word for each gap.',
          options: ['abolished', 'extended', 'reading', 'copying', 'unchanged', 'improved', 'marked', 'shorter'],
          items: [
            { q: 'Simon Aldridge ___ homework at his primary school in 2016.', a: 0, why: '5-paragrafda Aldridge "scrapped homework entirely" — ya’ni bekor qilgan (abolished).' },
            { q: 'Instead, families were asked to encourage pupils to spend their evenings ___ for pleasure.', a: 2, why: '5-paragrafda "encourage pupils to read for pleasure in the evenings" deyilgan.' },
            { q: 'Three years later, the school’s test results were ___.', a: 4, why: '5-paragrafda "the school’s test results were unchanged" deyilgan.' },
            { q: 'In Verma’s experiment, pupils who spent forty minutes ___ out their notes remembered less than the quiz group.', a: 3, why: '6-paragrafda "forty minutes copying out their notes" va "the quiz group remembered considerably more" deyilgan.' },
          ],
        },
      ],
    },

    // ---------------------------------------------------------------- PASSAGE 3
    {
      title: 'Who Invented Perspective?',
      intro: 'The technique that made paintings look like windows on the world has a history that scholars still cannot agree on.',
      labelled: true,
      paragraphs: [
        `Walk into almost any gallery and look at a painting of a street, and the buildings will shrink towards a single point on the horizon. We take this for granted, yet it is not the only way to show space, and for much of history it was not the usual one. Medieval painters in Europe generally showed importance rather than distance: a king or a saint was drawn larger than the people around him, whatever his position in the scene. The system of linear perspective, which represents a three-dimensional scene on a flat surface by means of lines that meet at a vanishing point, took hold in Italy during the fifteenth century. How and why this happened has been argued over ever since.`,
        `The traditional story is a simple one. According to it, the Florentine architect Filippo Brunelleschi worked out the geometry in the early fifteenth century, and in 1435 his friend Leon Battista Alberti set out the rules in a treatise on painting. Professor Clara Whitcombe of the Brightwell Institute of Art History accepts that both men mattered, but she calls the single-inventor tale a convenient myth, and it is hard to disagree that it is too simple. Tracing the techniques of surveyors, stonemasons and instrument-makers, she shows that practical trades had been using similar methods for decades. In her view, Brunelleschi and Alberti did not invent a new idea so much as gather up and clarify methods already circulating in workshops.`,
        `Dr Matteo Ferrante of the University of Torrente offers a different explanation, which looks to money rather than workshops. Italian merchants of the period learned arithmetic and proportion in special schools, and used them daily to compare prices, convert currencies and calculate shares of a cargo. Ferrante argues that a society so used to measuring and ratio was ready to accept a picture built on measurement. The merchants who commissioned paintings, he adds, wanted pictures of rooms and streets that looked like places they might actually enter. Whitcombe finds the argument attractive but says that it explains the demand for perspective better than the ability to produce it.`,
        `A third line of inquiry looks further afield. Dr Yusuf Haddad, a historian of science, has drawn attention to the work of scholars writing in Arabic on how light enters the eye and forms images. By the end of the Middle Ages, he points out, translations of their treatises were available to Latin readers, and Italian thinkers were therefore familiar with the idea that vision could be described in terms of straight lines. Haddad believes this optical tradition has been underrated in accounts of the Renaissance, which often treat Europe as if it developed its ideas in isolation. His case rests on the availability of the texts rather than on proof that any particular painter read them, but it deserves to be much better known.`,
        `Not everyone sees perspective as a neutral technical achievement. Professor Hannah Lindqvist of the Strandholm Academy argues that it carries a particular view of the world. A perspective picture is organised around a single, fixed eye, and anyone who stands elsewhere sees the scene slightly wrongly. Lindqvist claims that this reflects a culture which came to place the individual observer at the centre of things. She contrasts it with the long scroll paintings of China, in which the viewpoint shifts as the eye travels from one section to the next, so that the viewer seems to walk through the landscape instead of looking at it from outside.`,
        `Lindqvist’s claim, however, goes further than the evidence allows. Whitcombe notes that Renaissance painters were seldom slaves to the rules. In some altarpieces, the lines are deliberately made inconsistent so that the most important figure appears to be looking directly at the worshipper. Ferrante adds that wealthy patrons were as interested in the splendour of gold and bright colour as in accurate space. If perspective shaped how Europeans thought, he says, it did so far more gradually and less completely than Lindqvist supposes, and painters bent the rules whenever expression demanded it.`,
        `What, then, should we make of the debate? Perhaps the safest conclusion is that perspective had several roots: the geometry of builders and surveyors, the numerical habits of merchants and the optical science of earlier centuries. Each scholar has found a real part of the picture, and the search for a single cause says more about our fondness for neat stories than about the past. Whatever its origins, the system has proved remarkably durable. The virtual worlds of modern video games are still built on the same principle of lines converging on a point, and few players stop to wonder who first worked it out.`,
      ],
      groups: [
        {
          kind: 'match',
          instruction:
            'The passage has seven paragraphs, A–G. Choose the correct heading for paragraphs B–F from the list of headings below.',
          options: [
            'The accepted story of a single discovery',
            'Merchants and the habit of calculation',
            'Learning from earlier optical science',
            'A way of seeing, not a neutral fact',
            'Rules that artists chose to break',
            'The decline of religious painting',
            'A technique that spread quickly to northern Europe',
            'The cost of materials for painters',
          ],
          items: [
            { q: 'Paragraph B', a: 0, why: 'B-paragrafda "The traditional story" (Brunelleschi va Alberti) va Whitcombe uni "myth" deb baholashi haqida so‘z boradi.' },
            { q: 'Paragraph C', a: 1, why: 'C-paragrafda Ferrante: savdogarlar "arithmetic and proportion" ni o‘rgangan, o‘lchashga o‘rgangan jamiyat.' },
            { q: 'Paragraph D', a: 2, why: 'D-paragrafda Haddad arabcha yozilgan optika asarlari ("how light enters the eye") haqida gapiradi.' },
            { q: 'Paragraph E', a: 3, why: 'E-paragrafda Lindqvist: "carries a particular view of the world" — perspektiva betaraf emas.' },
            { q: 'Paragraph F', a: 4, why: 'F-paragrafda "painters bent the rules whenever expression demanded it" deyilgan.' },
          ],
        },
        {
          kind: 'ynng',
          instruction:
            'Do the following statements agree with the views of the writer of the passage? Choose YES, NO or NOT GIVEN.',
          items: [
            { q: 'The idea that one person invented perspective is an oversimplification.', a: 'yes', why: 'B-paragrafda yozuvchi "it is hard to disagree that it is too simple" deydi.' },
            { q: 'Ferrante’s account of perspective is more persuasive than Whitcombe’s.', a: 'not-given', why: 'C-paragrafda yozuvchi ikkalasidan birini afzal ko‘rmaydi; shuning uchun NOT GIVEN.' },
            { q: 'Haddad’s research ought to receive more attention than it currently does.', a: 'yes', why: 'D-paragrafda "it deserves to be much better known" deyilgan.' },
            { q: 'Lindqvist’s claim about the influence of perspective is fully supported by the evidence.', a: 'no', why: 'F-paragrafda "Lindqvist’s claim, however, goes further than the evidence allows" deyilgan.' },
            { q: 'Designers of modern digital worlds ought to stop using the rules of perspective.', a: 'not-given', why: 'G-paragrafda video o‘yinlar faqat misol sifatida keltirilgan; ularni tark etish haqida fikr yo‘q.' },
          ],
        },
        {
          kind: 'mcq',
          instruction: 'Choose the correct letter, A, B, C or D.',
          items: [
            {
              q: 'How did medieval painters in Europe generally show that a figure was important?',
              options: [
                'By placing the figure near the vanishing point.',
                'By using brighter colours than elsewhere in the scene.',
                'By drawing the figure larger than the others.',
                'By showing the figure in the distance.',
              ],
              a: 2,
              why: 'A-paragrafda "a king or a saint was drawn larger than the people around him" deyilgan.',
            },
            {
              q: 'Why does Ferrante think Italian society accepted perspective?',
              options: [
                'People were already accustomed to thinking in terms of measurement and ratio.',
                'Painters had learned the technique from foreign merchants.',
                'Wealthy patrons paid artists to study geometry.',
                'Schools began teaching painting to the children of merchants.',
              ],
              a: 0,
              why: 'C-paragrafda "a society so used to measuring and ratio was ready to accept a picture built on measurement" deyilgan.',
            },
            {
              q: 'What is Haddad’s main point about the Arabic optical treatises?',
              options: [
                'They were studied closely by every Renaissance painter.',
                'They were available in Latin, so Italian thinkers could know their ideas.',
                'They proved that perspective was first invented outside Europe.',
                'They were ignored in Europe until the sixteenth century.',
              ],
              a: 1,
              why: 'D-paragrafda "translations of their treatises were available to Latin readers" deyilgan; rassomlar o‘qiganiga isbot yo‘q.',
            },
            {
              q: 'What does Whitcombe say about Renaissance painters and the rules of perspective?',
              options: [
                'They followed the rules more strictly than Alberti had hoped.',
                'They rejected the rules after the fifteenth century.',
                'They applied the rules only to buildings.',
                'They sometimes broke the rules on purpose.',
              ],
              a: 3,
              why: 'F-paragrafda Whitcombe "lines are deliberately made inconsistent" va "seldom slaves to the rules" deydi.',
            },
          ],
        },
      ],
    },
  ],
};

export default r5;
