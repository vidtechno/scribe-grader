import type { ReadingTest } from '../types';

const r4: ReadingTest = {
  id: 'r4',
  title: 'Academic Reading Test 4',
  topics: ['Language', 'Space', 'Business'],
  passages: [
    {
      title: 'The Quiet Disappearance of Languages',
      intro: 'Why thousands of the world’s languages are in danger, and whether anything can be done.',
      labelled: false,
      paragraphs: [
        'Linguists usually describe a language as dead when nobody speaks it any more, but the decline normally begins several generations earlier. The world is home to around seven thousand languages, though they are very unevenly shared out: a few, such as Mandarin, Spanish and English, are spoken by hundreds of millions of people, while most are used by small communities, and some by only a few dozen families. The Calder Institute for Language Documentation, founded in 1987, has estimated that about 40 per cent of the world’s languages are now endangered. Its researchers admit, however, that any such figure depends on how a language is distinguished from a dialect, and on how much is known about remote regions.',
        'Violence and open persecution are not the usual causes. More often the pressure is economic. Parents in a village notice that the best jobs go to people who speak the national language, and so they gradually stop using the heritage language with their children. The case of Kelvari, spoken in a mountain valley, is typical. In 1960 it had some four thousand speakers. A road linking the valley to the capital was completed in 1974, and over the following years the schools began teaching entirely in the national language. By 2010 fewer than three hundred people still spoke Kelvari, and most of them were over sixty.',
        'The sociolinguist Dr Elena Marchetti, who spent six years in the valley, argues that the critical moment comes much earlier than most people suppose. In her model, the grandparents speak the language fluently, their children understand it but reply in the national language, and the grandchildren know only a few words. She calls the middle generation “the silent bridge”, because once it stops passing the language on, the chain is broken. “By the time a community notices that something is wrong,” she says, “the damage has usually been under way for thirty years.”',
        'What is lost is more than a set of words. Kelvari, for example, has fourteen terms for different kinds of mountain mist, and the herders who used them could predict a storm a day in advance. Such knowledge is rarely written down, and it disappears when the vocabulary does. Some scholars go further and claim that each language shapes the thinking of its speakers. Professor Daniel Okafor of Northfield University is unconvinced. “Any idea can be expressed in any language,” he argues, “though it may take more words.” The real loss, he believes, is cultural memory rather than a way of thinking.',
        'Documentation is the first response. A generation ago, linguists worked with notebooks and bulky tape recorders; today a smartphone can capture hours of speech, and the recordings can be kept in a digital archive that anyone can consult. A project in the Kelvari valley between 2008 and 2012 collected two hundred hours of conversation, stories and songs. Yet Marchetti is blunt about its limits. “A dictionary is not a community,” she says. “Recording a language preserves it as an object, but it does nothing to put it back into children’s mouths.”',
        'Revival is possible, though rare and demanding. The best-known example is Hebrew, which for nearly two thousand years was used mainly for prayer and writing before it became an everyday spoken language again in the late nineteenth and twentieth centuries. A more modest approach is the “language nest”, in which elders look after pre-school children and speak only the heritage language. A nest opened in the Kelvari valley in 2015 with twelve children. Six years later, nine of them could hold a simple conversation with their grandparents, although none yet used the language with friends in the playground.',
        'Not everyone agrees that outside intervention is wise. Okafor points out that communities have the right to decide for themselves, and that many parents choose the national language precisely because they want their children to have opportunities. He believes the best policy is to remove obstacles, such as bans on using a language in schools or courts, rather than to press anyone to speak it. Marchetti accepts the principle but replies that choice is hardly free when the alternative has no place in the classroom or the workplace. Both agree on one thing: whatever is done, it must be done with the speakers rather than for them.',
      ],
      groups: [
        {
          kind: 'tfng',
          instruction:
            'Do the following statements agree with the information given in the passage?\nWrite TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, or NOT GIVEN if there is no information on this.',
          items: [
            { q: 'The Calder Institute believes that fewer than one in ten of the world’s languages is currently at risk.', a: 'false', why: '1-paragrafda Institut "about 40 per cent" tillar xavf ostida deb hisoblaydi, ya’ni o’ndan birdan ancha ko’p, shuning uchun FALSE.' },
            { q: 'The researchers accept that their estimate is affected by the way a language is told apart from a dialect.', a: 'true', why: '1-paragrafda "depends on how a language is distinguished from a dialect" deyilgan, shuning uchun TRUE.' },
            { q: 'In the Kelvari valley, lessons came to be given only in the national language once the road to the capital had been built.', a: 'true', why: '2-paragrafda yo’l 1974-yilda qurilgan va keyin "schools began teaching entirely in the national language" deyilgan, shuning uchun TRUE.' },
            { q: 'Marchetti became a fluent speaker of Kelvari during her time in the valley.', a: 'not-given', why: '3-paragrafda Marchetti vodiyda olti yil o’tkazgani aytilgan, lekin tilni ravon o’rganganligi haqida hech narsa yo’q, shuning uchun NOT GIVEN.' },
            { q: 'Okafor agrees that every language gives its speakers a unique way of thinking.', a: 'false', why: '4-paragrafda Okafor bunga "is unconvinced" va "Any idea can be expressed in any language" deydi, shuning uchun FALSE.' },
            { q: 'The recordings made in the Kelvari valley between 2008 and 2012 have since been used by many researchers.', a: 'not-given', why: '5-paragrafda yozuvlar to’plangani aytilgan, lekin ulardan ko’plab tadqiqotchilar foydalangani haqida ma’lumot yo’q, shuning uchun NOT GIVEN.' },
          ],
        },
        {
          kind: 'mcq',
          instruction: 'Choose the correct letter, A, B, C or D.',
          items: [
            {
              q: 'Why does Marchetti regard the middle generation as so important?',
              options: [
                'It is the group that earns the most money in the community.',
                'It is the only group able to write the language down.',
                'Its decision not to pass the language on breaks the chain.',
                'It is responsible for teaching the language in schools.',
              ],
              a: 2,
              why: '3-paragrafda o’rta avlod "stops passing the language on" bo’lsa, "the chain is broken" deyilgan, shuning uchun C.',
            },
            {
              q: 'What policy does Okafor favour?',
              options: [
                'Requiring every child to study a heritage language.',
                'Taking away barriers to using a language rather than pushing people to speak it.',
                'Replacing small languages with one national language.',
                'Leaving the question entirely to linguists.',
              ],
              a: 1,
              why: '7-paragrafda Okafor "remove obstacles ... rather than to press anyone to speak it" deb hisoblaydi, shuning uchun B.',
            },
          ],
        },
        {
          kind: 'fill',
          title: 'Notes: the decline of Kelvari',
          instruction: 'Complete the notes below.\nChoose NO MORE THAN TWO WORDS from the passage for each answer.',
          items: [
            { q: 'Kelvari’s decline began after a ___ connecting the valley to the capital was finished in 1974.', a: ['road'], why: '2-paragrafda "A road linking the valley to the capital was completed in 1974" deyilgan.' },
            { q: 'Marchetti uses the term “the silent ___” for the generation that understands the language but replies in another.', a: ['bridge'], why: '3-paragrafda "She calls the middle generation “the silent bridge”" deyilgan.' },
            { q: 'Herders used fourteen words for different kinds of mountain ___ to forecast storms.', a: ['mist'], why: '4-paragrafda "fourteen terms for different kinds of mountain mist" deyilgan.' },
            { q: 'Recordings of speech can now be stored in a ___ which anyone can consult.', a: ['digital archive'], why: '5-paragrafda "kept in a digital archive that anyone can consult" deyilgan.' },
            { q: 'In a language nest, ___ look after pre-school children and speak only the heritage language.', a: ['elders'], why: '6-paragrafda "in which elders look after pre-school children" deyilgan.' },
          ],
        },
      ],
    },
    {
      title: 'Hunting for Worlds Beyond the Sun',
      intro: 'How astronomers find planets that are far too faint to see.',
      labelled: true,
      paragraphs: [
        'Until the early 1990s, astronomers could point only to the planets orbiting our own Sun. Today the confirmed total beyond the solar system runs to several thousand, and discoveries show no sign of slowing. The achievement is all the more remarkable because a planet is almost impossible to see. It shines only by reflecting light from its star, and that star is typically many millions of times brighter. Dr Sofia Almeida of the Arden Observatory compares the task to spotting a firefly hovering beside a searchlight from several kilometres away. As a result, most planets have been found not by looking at them but by looking for their effects on the star.',
        'The oldest of these indirect techniques is known as the wobble method. A planet and its star actually circle a shared centre of gravity, so the star is tugged slightly back and forth as the planet goes round. When the star moves towards Earth, its light is shifted a little towards the blue end of the spectrum; when it moves away, the light shifts towards red. By measuring these shifts with a spectrograph, astronomers can detect planets they never see. The instrument installed at the Arden Observatory in 2011 can register a change in a star’s speed of less than one metre per second, slower than a person strolling. The method has a clear bias, however. It finds massive planets that orbit close to their star most easily, because these produce the strongest tug, and it reveals only a minimum value for a planet’s mass, since the angle of the orbit is unknown.',
        'The second technique, the transit method, looks for a tiny dip in starlight when a planet crosses the face of its star. The Kepler space telescope, launched in 2009, stared at more than a hundred thousand stars in one patch of sky for several years, and its catalogue transformed the field. A planet the size of Jupiter blocks about one per cent of the light of a star like the Sun, but an Earth-sized one blocks less than one hundredth of that amount, a dip so small that it can be measured reliably only from space. Transits give a planet’s diameter; combined with a mass obtained by the wobble method, they reveal its density, showing whether the world is rocky or gaseous. The drawback is geometry. The orbit must be seen almost edge-on, and Dr Almeida calculates that, for an Earth-like orbit, only about one planet in two hundred would ever pass in front of its star as seen from our direction.',
        'Direct imaging, the most intuitive method, is also the hardest. To photograph a planet, astronomers must first suppress the glare of its star, using a mask called a coronagraph that blocks the central light much as a thumb held up blocks the Sun. Even so, only young, massive planets that still glow with the heat of their formation, and that lie far from their star, can be separated from its glare. Only a small number have been captured this way. In 2017 a team led by Dr Tomas Wirth imaged a giant planet orbiting some 130 times as far from its star as the Earth is from the Sun. Such a world raises awkward questions, because theories cannot easily explain how a planet could form so far out.',
        'Finding a planet is only the beginning; the next question is what it is made of. During a transit, a thin ring of starlight filters through the planet’s atmosphere, and the gases there absorb particular colours. In 2022 a team led by Dr Ravi Menon announced that it had detected water vapour in the atmosphere of a hot giant known as Kestrel-9b, some three hundred light-years away. Similar measurements have revealed sodium and clouds on other worlds. The hope is that one day the same analysis of a small rocky planet will show oxygen or methane, gases that on Earth are linked to living things. Dr Almeida urges restraint. Oxygen can be produced by chemical processes that involve no life at all, she argues, so it would be a clue rather than proof, and any claim would need several independent lines of evidence.',
        'The next generation of instruments is designed to turn such clues into a systematic search. The proposed Halcyon telescope, which its designers hope to launch in the 2040s, would carry a starshade, a flower-shaped screen tens of metres across that would fly far from the telescope and cast a shadow over the light of a star. Its targets would be Earth-sized planets in the habitable zone, the band around a star where temperatures allow liquid water to exist on a surface. Critics point to the cost, which one estimate puts at more than ten billion dollars, and argue that giant ground-based telescopes could do part of the work more cheaply. Dr Almeida accepts that the project is a gamble, but recalls that in her student days many astronomers doubted that planets around other stars could ever be detected at all.',
      ],
      groups: [
        {
          kind: 'match',
          instruction:
            'The passage has paragraphs A–F.\nChoose the correct heading for paragraphs B–F from the list of headings below.',
          options: [
            'Why planets are so hard to see directly',
            'Detecting a star’s tiny movements',
            'A dip in starlight, and the limits of chance',
            'Photographing planets despite the glare',
            'Reading the chemistry of distant air',
            'Plans for the next generation of instruments',
            'A dispute over the definition of a planet',
            'Planet hunting by amateur astronomers',
          ],
          items: [
            { q: 'Paragraph B', a: 1, why: 'B-paragrafda yulduzning "tugged slightly back and forth" bo’lishi va spektr siljishi (wobble method) tushuntirilgan: ii.' },
            { q: 'Paragraph C', a: 2, why: 'C-paragrafda yulduz yorug’ligining pasayishi (transit) va "only about one planet in two hundred" ko’rinishi aytilgan: iii.' },
            { q: 'Paragraph D', a: 3, why: 'D-paragrafda yulduz nurini to’suvchi "coronagraph" yordamida suratga olish tasvirlangan: iv.' },
            { q: 'Paragraph E', a: 4, why: 'E-paragrafda sayyora atmosferasidagi gazlar ("water vapour", "oxygen or methane") o’rganilishi aytilgan: v.' },
            { q: 'Paragraph F', a: 5, why: 'F-paragrafda "The next generation of instruments" va Halcyon teleskopi haqida gap ketadi: vi.' },
          ],
        },
        {
          kind: 'mcq',
          instruction: 'Choose the correct letter, A, B, C or D.',
          items: [
            {
              q: 'According to paragraph A, why is it so difficult to see a planet directly?',
              options: [
                'Planets are too small for any telescope to detect.',
                'Planets are hidden behind clouds of dust.',
                'The faint light a planet reflects is drowned by the far brighter star.',
                'Planets move too quickly to be photographed.',
              ],
              a: 2,
              why: 'A-paragrafda planet "shines only by reflecting light" va yulduz "many millions of times brighter" ekani aytilgan, shuning uchun C.',
            },
            {
              q: 'What limitation of the wobble method is mentioned in paragraph B?',
              options: [
                'It cannot detect planets that are heavier than Jupiter.',
                'It gives only the lowest possible figure for a planet’s mass.',
                'It can be used only from a space telescope.',
                'It works only on stars that are moving towards Earth.',
              ],
              a: 1,
              why: 'B-paragrafda usul "reveals only a minimum value for a planet’s mass" deyilgan, shuning uchun B.',
            },
            {
              q: 'Why does the transit method miss most planets with Earth-like orbits?',
              options: [
                'Their orbits are too long for astronomers to wait for.',
                'Kepler observed too few stars to find them.',
                'They pass in front of their star only once.',
                'Very few such orbits are lined up so that the planet crosses its star as seen from Earth.',
              ],
              a: 3,
              why: 'C-paragrafda orbita "almost edge-on" bo’lishi kerak va "only about one planet in two hundred" yulduz oldidan o’tadi deyilgan, shuning uchun D.',
            },
            {
              q: 'What is Dr Almeida’s view of finding oxygen on a rocky planet?',
              options: [
                'It would be a useful clue but not proof of life.',
                'It would prove that living things exist there.',
                'It could never be done with any instrument.',
                'It would matter less than finding water vapour.',
              ],
              a: 0,
              why: 'E-paragrafda Almeida kislorod "a clue rather than proof" bo’lishini aytadi, shuning uchun A.',
            },
          ],
        },
        {
          kind: 'fill',
          title: 'Notes: methods of finding planets',
          instruction: 'Complete the notes below.\nChoose NO MORE THAN TWO WORDS from the passage for each answer.',
          items: [
            { q: 'The wobble method most easily finds massive planets which orbit ___ to their star.', a: ['close'], why: 'B-paragrafda "massive planets that orbit close to their star most easily" deyilgan.' },
            { q: 'Combining a planet’s diameter with its mass reveals its ___, which shows whether it is rocky or gaseous.', a: ['density'], why: 'C-paragrafda "they reveal its density, showing whether the world is rocky or gaseous" deyilgan.' },
            { q: 'To photograph a planet, astronomers block the starlight with a device called a ___.', a: ['coronagraph'], why: 'D-paragrafda "using a mask called a coronagraph" deyilgan.' },
            { q: 'In 2022 astronomers announced that they had found ___ in the atmosphere of Kestrel-9b.', a: ['water vapour', 'water vapor'], why: 'E-paragrafda "detected water vapour in the atmosphere of a hot giant known as Kestrel-9b" deyilgan.' },
          ],
        },
      ],
    },
    {
      title: 'Why Start-ups Fail: Four Theories',
      intro: 'Experts agree that most new businesses close, but not on why.',
      labelled: false,
      paragraphs: [
        'Every year, thousands of people leave secure jobs to start a business, encouraged by stories of garages that became global companies. The reality is less cheerful. The Hollis Centre for Enterprise followed 3,000 companies founded in 2014 and found that a little under 60 per cent had closed within five years. Which factor is most to blame has been argued over for decades, and the explanations offered by experts differ so sharply that they sometimes seem to describe different worlds. Four of the most influential are summarised here.',
        'The economist Helen Brandt argues that the main killer is not a poor idea but a shortage of cash at the wrong moment. A firm can be admired by customers and growing fast, she points out, yet still collapse if its clients take ninety days to pay while its suppliers and staff expect payment within thirty. In her study of 400 small manufacturers, many of those that closed had been profitable on paper in their final year. “Growth consumes money before it produces it,” she says, “and most founders learn this too late.” She recommends that new firms keep at least six months of running costs in reserve, even if doing so slows their expansion.',
        'The venture investor Rajiv Anand has a different priority. Having backed more than sixty companies over twenty years, he now spends more time studying the founders than the product. He believes that nothing destroys a young company as reliably as a breakdown of trust between the people who started it. Where co-founders fall out over money, credit or direction, he says, even a strong market cannot save the business; where they work well together, they survive repeated setbacks. Anand admits that this is hard to measure, but he insists that every failure he has seen at close quarters had a personal conflict somewhere near its centre.',
        'For the consultant Claire Dubois, both views miss the point. She maintains that most start-ups fail because they build something that too few people want. Founders fall in love with their invention, she says, and spend a year or two perfecting it in secret rather than showing a rough version to potential customers. She cites a food-delivery app whose designers spent eighteen months on a sophisticated route-planning system, only to discover that restaurants had no wish to use it. Her advice is to release an unfinished product quickly, learn from the response and improve it in public. “Nobody ever failed by being embarrassed early,” she says.',
        'The psychologist Tomás Ferreira looks inside the founder’s head. In an experiment, he asked 200 entrepreneurs to estimate the chance that their own firm would still be trading in five years, and then the chance for a similar firm run by someone else. On average they rated their own prospects at around 80 per cent, but gave comparable businesses only 40. Ferreira concludes that confidence, which helps people to begin, also leads them to explain away bad news: a fall in sales is blamed on the weather, a rival’s success on luck. He suggests that founders appoint a trusted outsider whose job is to challenge their assumptions.',
        'Each of these accounts captures something real, and none of them is enough on its own. Brandt is right that cash can run out, but a shortage of money is usually the final symptom rather than the original disease: companies with the right product and a united team can normally persuade someone to lend. Anand’s focus on the founders is persuasive, but it ignores firms that fail even though their partnership is healthy. The more useful insight is that the four problems feed on one another. An overconfident founder delays testing the product, which delays sales, which drains cash, which causes arguments.',
        'Nor is it true that a company which changes course has therefore failed. Firms that abandon their first plan in response to what customers say are showing exactly the flexibility that Dubois recommends; it is those that refuse to change which give most cause for concern. The technology industry’s habit of celebrating failure, with its conferences and “failure nights”, has also gone too far. Nobody who has watched a founder lose the family’s savings could regard failure as merely a useful lesson, and the cheerful language can make it harder for people to ask for help.',
        'Perhaps the most practical conclusion is a modest one. A would-be founder should test an idea early, keep a cash reserve, choose partners carefully and listen to people who disagree. None of this guarantees success, but it removes the most common ways of failing. The experts quarrel about which danger is greatest; the sensible entrepreneur will assume that all four are waiting.',
      ],
      groups: [
        {
          kind: 'ynng',
          instruction:
            'Do the following statements agree with the views of the writer in the passage?\nWrite YES if the statement agrees with the views of the writer, NO if the statement contradicts the views of the writer, or NOT GIVEN if it is impossible to say what the writer thinks about this.',
          items: [
            { q: 'No single one of the experts’ explanations is adequate to account for why start-ups fail.', a: 'yes', why: '6-paragrafda yozuvchi "none of them is enough on its own" deydi, shuning uchun YES.' },
            { q: 'Running out of money is the underlying cause of most business failures.', a: 'no', why: '6-paragrafda yozuvchi pul yetishmasligi "the final symptom rather than the original disease" deydi, shuning uchun NO.' },
            { q: 'A start-up that gives up its original plan is probably heading for failure.', a: 'no', why: '7-paragrafda yozuvchi rejani o’zgartirish "exactly the flexibility" ekanini, tashvish esa o’zgarishni rad etganlarda ekanini aytadi, shuning uchun NO.' },
            { q: 'Public grants would reduce the number of new businesses that close.', a: 'not-given', why: 'Matnda davlat grantlari haqida hech narsa aytilmagan, shuning uchun NOT GIVEN.' },
            { q: 'The enthusiasm for celebrating business failure has been taken too far.', a: 'yes', why: '7-paragrafda yozuvchi "has also gone too far" deydi, shuning uchun YES.' },
            { q: 'Founders who have run a company before are less likely to see their new business fail.', a: 'not-given', why: 'Matnda oldingi tajribaning ta’siri haqida gap yo’q, shuning uchun NOT GIVEN.' },
          ],
        },
        {
          kind: 'match',
          instruction:
            'Look at the following statements and the list of experts below.\nMatch each statement with the correct expert, A–D.',
          options: ['Helen Brandt', 'Rajiv Anand', 'Claire Dubois', 'Tomás Ferreira'],
          items: [
            { q: 'Business owners often disregard signs that their plans are going wrong because they are too sure of themselves.', a: 3, why: '5-paragrafda Ferreira: ishonch odamlarni "explain away bad news" ga olib keladi: D.' },
            { q: 'Quarrels among the people who set up a company do more harm than the state of the market.', a: 1, why: '3-paragrafda Anand: sheriklar o’rtasidagi ishonch buzilsa, "even a strong market cannot save the business": B.' },
            { q: 'Too many firms spend a long time perfecting a product before finding out whether anyone wants it.', a: 2, why: '4-paragrafda Dubois: asoschilar mahsulotni "perfecting it in secret" qilib, mijozlarga ko’rsatmaydi: C.' },
            { q: 'A company that customers like can still collapse because of the timing of payments coming in and going out.', a: 0, why: '2-paragrafda Brandt: mijozlar 90 kunda to’laydi, ta’minotchilar esa 30 kunda: A.' },
          ],
        },
        {
          kind: 'mcq',
          instruction: 'Choose the correct letter, A, B, C or D.',
          items: [
            {
              q: 'What did the Hollis Centre study discover?',
              options: [
                'Only a small minority of the companies survived their first year.',
                'More than half of the companies had shut within five years.',
                'Technology firms closed more often than other firms.',
                'Most of the companies had been set up by people without jobs.',
              ],
              a: 1,
              why: '1-paragrafda "a little under 60 per cent had closed within five years" deyilgan, shuning uchun B.',
            },
            {
              q: 'What point does Brandt make about the small manufacturers she studied?',
              options: [
                'Most of them closed because their products were poor.',
                'Many of those that failed had been making a profit on paper.',
                'They all kept six months of costs in reserve.',
                'They expanded more slowly than other firms.',
              ],
              a: 1,
              why: '2-paragrafda "many of those that closed had been profitable on paper in their final year" deyilgan, shuning uchun B.',
            },
            {
              q: 'What went wrong for the food-delivery app described by Dubois?',
              options: [
                'It was released before it was ready.',
                'Its designers ran out of money after eighteen months.',
                'Its customers disliked the route-planning system.',
                'The businesses it was meant for did not want to use its main feature.',
              ],
              a: 3,
              why: '4-paragrafda "restaurants had no wish to use it" deyilgan, shuning uchun D.',
            },
            {
              q: 'What did Ferreira’s experiment show about the entrepreneurs?',
              options: [
                'They believed their own firm had a much better chance than similar firms.',
                'They were more cautious about their own firms than about others.',
                'They changed their estimates after hearing from an outsider.',
                'They were unable to estimate their chances at all.',
              ],
              a: 0,
              why: '5-paragrafda o’z firmalarini "around 80 per cent", o’xshash firmalarni esa "only 40" deb baholagan, shuning uchun A.',
            },
          ],
        },
      ],
    },
  ],
};

export default r4;
