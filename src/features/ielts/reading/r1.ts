import type { ReadingTest } from '../types';

const r1: ReadingTest = {
  id: 'r1',
  title: 'Academic Reading Test 1',
  topics: ['Science', 'History', 'Society'],
  free: true,
  passages: [
    {
      title: 'How Honeybees Find Their Way Home',
      intro: 'A magazine feature on the navigation skills of one of the most familiar insects.',
      labelled: true,
      paragraphs: [
        'A honeybee worker leaves her hive on a summer morning and may fly up to three kilometres in search of flowers. During a single trip she can visit several hundred blossoms, yet when her load of nectar is complete she returns to a hive entrance only a few centimetres wide. For many centuries naturalists assumed that such precision must depend on some simple, inborn instinct. It was not until the twentieth century that researchers began to appreciate how many different sources of information the insect combines in order to find its way, and some of the details are still being worked out today.',
        'The Austrian zoologist Karl von Frisch, who began studying bees in the 1910s, was one of the first to show that they use the sun as a compass. He trained foragers to visit a dish of sugar water and then moved the dish; the bees, he found, adjusted the angle of their flight to the position of the sun. Later work revealed that even when the sun is hidden behind cloud, bees can detect a pattern of polarised light in any patch of blue sky, and this pattern tells them where the sun is. Because the sun moves across the sky during the day, the insects also possess an internal clock that corrects for the change. In experiments carried out in the 1950s, bees kept in darkness for several hours still set off in the right direction when they were released.',
        'Von Frisch is best remembered, however, for decoding the “waggle dance”. Inside the dark hive, a forager that has found a good source of food performs a figure of eight, waggling her body as she runs along the straight central line. The angle of this line, measured from the vertical, shows the direction of the food in relation to the sun, while the length of the waggling phase indicates the distance: roughly one second of waggling for every kilometre. Other workers crowd around the dancer and follow her movements by touch and smell, then fly out to the correct place without ever having seen it. Von Frisch shared the Nobel Prize in 1973 for this discovery, which many biologists still regard as one of the most elegant studies of animal behaviour ever carried out.',
        'The dance cannot explain everything, though. Bees also learn the appearance of their surroundings, memorising trees, buildings and the shape of the horizon. The introduction of harmonic radar in the late 1990s allowed scientists to follow individual insects across open fields for the first time, and the tracks were revealing. Experienced foragers did not fly in a straight line from hive to flowers; instead, they followed familiar routes that linked one landmark to the next. When researchers captured bees at the hive entrance and released them some distance away, the insects first flew off in the direction they had been heading, then began to fly in widening spiral loops until they recognised a landmark and set a course for home.',
        'Whether this behaviour means that bees carry a map in their heads is a matter of continuing debate. Some scientists argue that the released bees must have combined their memories into a kind of mental map, which would place the insect, with its brain of roughly a million neurons, on a par with much larger animals. Others believe that a simpler explanation is enough: that a bee stores a series of snapshots of the scenery and moves in whichever direction makes its view match the closest stored image. So far, no experiment has decided the question conclusively, and each side has been able to explain the other’s results.',
        'Other senses contribute as well. Each bee has tiny particles of iron in its abdomen, and laboratory tests suggest that these allow it to detect the Earth’s magnetic field, which may serve as a back-up when the sun and sky are out of sight. Smell is equally important near the nest: guard bees release a scent from a gland at the hive entrance, and returning foragers use it to find the right opening among the many that may sit side by side in an apiary. Colour and pattern help too, which is why beekeepers often paint the fronts of their hives in different shades.',
        'Understanding these systems has become urgent. Farmers depend on bees to pollinate crops worth billions of pounds each year, and several studies suggest that certain pesticides damage the insect’s ability to navigate. In one French field trial in 2012, bees given a small dose of a common chemical were far more likely to fail to return, with losses rising from about 10 per cent to about 30 per cent. Engineers, meanwhile, have begun to borrow from bees: small flying robots that use a few cheap sensors rather than expensive satellite equipment can steer between obstacles by copying the way the insects judge distance from the flow of the scenery past their eyes.',
      ],
      groups: [
        {
          kind: 'tfng',
          instruction:
            'Do the following statements agree with the information given in the passage?\nWrite TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, or NOT GIVEN if there is no information on this.',
          items: [
            { q: 'Von Frisch’s first experiments suggested that bees pay no attention to where the sun is.', a: 'false', why: 'B-paragrafda bees "adjusted the angle of their flight to the position of the sun" deyilgan, ya’ni quyoshga e’tibor beradi, shuning uchun FALSE.' },
            { q: 'Bees are able to judge the position of the sun even when part of the sky is covered by cloud.', a: 'true', why: 'B-paragrafda "even when the sun is hidden behind cloud, bees can detect a pattern of polarised light in any patch of blue sky" deyilgan, shuning uchun TRUE.' },
            { q: 'Von Frisch was the first scientist to keep honeybees inside an observation hive.', a: 'not-given', why: 'Matnda kuzatuv uyasi (observation hive) haqida hech narsa aytilmagan, shuning uchun NOT GIVEN.' },
            { q: 'The longer the waggling part of the dance lasts, the further away the food is.', a: 'true', why: 'C-paragrafda "the length of the waggling phase indicates the distance" deyilgan, shuning uchun TRUE.' },
            { q: 'Harmonic radar showed that experienced bees normally fly straight from the hive to their food source.', a: 'false', why: 'D-paragrafda "did not fly in a straight line ... followed familiar routes" deyilgan, shuning uchun FALSE.' },
            { q: 'Bumblebees use landmarks in the same way as honeybees.', a: 'not-given', why: 'Matnda faqat asalarilar haqida gap boradi, bumblebee (yirik arilar) haqida ma’lumot yo’q, shuning uchun NOT GIVEN.' },
          ],
        },
        {
          kind: 'mcq',
          instruction: 'Choose the correct letter, A, B, C or D.',
          items: [
            {
              q: 'What is the purpose of the scent that guard bees release at the hive entrance?',
              options: [
                'It warns foragers that food is nearby.',
                'It helps returning foragers to identify their own hive opening.',
                'It frightens away other insects.',
                'It tells the bees which direction the sun is in.',
              ],
              a: 1,
              why: 'F-paragrafda scent "returning foragers use it to find the right opening" uchun ishlatilishi aytilgan, shuning uchun B.',
            },
            {
              q: 'What did the 2012 French field trial suggest about certain pesticides?',
              options: [
                'They make bees fly faster than usual.',
                'They reduce the amount of nectar that bees collect.',
                'They can stop bees from finding their way back to the hive.',
                'They have no effect on bees in small doses.',
              ],
              a: 2,
              why: 'G-paragrafda kichik doza olgan asalarilar "far more likely to fail to return" bo\u2019lgani aytilgan, shuning uchun C.',
            },
          ],
        },
        {
          kind: 'fill',
          title: 'Notes: how honeybees navigate',
          instruction: 'Complete the notes below.\nChoose NO MORE THAN TWO WORDS from the passage for each answer.',
          items: [
            { q: 'Bees have an internal ___ which allows them to take account of the sun’s movement.', a: ['clock'], why: 'B-paragrafda "the insects also possess an internal clock" deyilgan.' },
            { q: 'Individual bees were first tracked across open fields using ___ radar.', a: ['harmonic'], why: 'D-paragrafda "The introduction of harmonic radar in the late 1990s" deyilgan.' },
            { q: 'Released bees flew off in their original direction, then searched in widening ___ loops.', a: ['spiral'], why: 'D-paragrafda "began to fly in widening spiral loops" deyilgan.' },
            { q: 'One theory says a bee remembers a series of ___ of the scenery instead of a mental map.', a: ['snapshots'], why: 'E-paragrafda "stores a series of snapshots of the scenery" deyilgan.' },
            { q: 'Particles of ___ in the abdomen may help bees to sense the Earth’s magnetic field.', a: ['iron'], why: 'F-paragrafda "tiny particles of iron in its abdomen" deyilgan.' },
          ],
        },
      ],
    },
    {
      title: 'Solving the Problem of Longitude',
      intro: 'How a Yorkshire carpenter built the timekeeper that changed navigation.',
      labelled: true,
      paragraphs: [
        'Sailors have long found it simple to work out how far north or south of the equator they are: the height of the sun at noon, or of the Pole Star at night, gives the latitude when measured with a quadrant or a similar instrument. Finding the distance east or west is far harder. The Earth turns through fifteen degrees every hour, so a navigator who knows the time at a home port and the local time on board can convert the difference into longitude, with each four minutes of difference equal to one degree. Yet until the eighteenth century no clock could keep accurate time on a rolling ship. At the equator a single degree covers about 111 kilometres, so an error of only a few minutes could place a vessel hundreds of kilometres from where its crew believed it to be.',
        'The cost of that uncertainty became painfully clear in October 1707, when a fleet of Royal Navy warships returning from the Mediterranean, led by Sir Cloudesley Shovell, struck rocks off the Isles of Scilly in fog. Four ships were lost and an estimated 1,400 men drowned, because the navigators had believed they were well to the west of the English coast. Public anger forced Parliament to act, and in 1714 it passed the Longitude Act, which offered a prize of up to £20,000, a fortune at the time, to anyone who could devise a method accurate to within half a degree. A permanent Board of Longitude was set up to judge the entries. Isaac Newton gave evidence to it and warned that a watch could never keep good time at sea, because the motion of the ship, changes in temperature and differences in gravity would all disturb it.',
        'Many scientists therefore looked to the heavens rather than to machinery. The lunar-distance method measured the angle between the Moon and a chosen star; the navigator then consulted published tables to learn what time it was at Greenwich. In principle this required only a sextant, and the Astronomer Royal, Nevil Maskelyne, championed it enthusiastically, publishing the first Nautical Almanac in 1767. In practice, however, the sums were long and difficult, taking up to four hours for a single position fix, and cloudy weather or a missing Moon could make the method useless. Many ships’ officers lacked the mathematical training to carry it out reliably, and the technique was never popular on merchant vessels.',
        'The alternative was a clock that could be trusted, and the man who believed he could build one was John Harrison (1693–1776), a self-taught carpenter from Yorkshire who had already made some of the most accurate pendulum clocks in Britain. His first sea clock, H1, finished in 1735, weighed about 34 kilograms and was tested on a voyage to Lisbon in 1736; it worked well but was far too large to be convenient. He spent the next two decades refining the design through H2 and H3, each time dissatisfied, before turning to a much smaller form. The result, H4, completed in 1759, looked like an enormous pocket watch only thirteen centimetres across, and contained jewels to reduce friction between its moving parts.',
        'In 1761 H4 was carried to Jamaica aboard HMS Deptford under the supervision of Harrison’s son William. After 81 days at sea it was found to have lost only five seconds, comfortably inside the standard demanded by the Act. The Board, however, was reluctant to pay. Some of its members, including Maskelyne, suggested that the result might have been luck, and demanded a second trial, to Barbados in 1764, in which the watch again performed superbly. Even then, only part of the prize was handed over. Harrison, by now in his seventies, appealed to the king, George III, who had the watch tested at his own observatory. In 1773 Parliament finally paid Harrison a further £8,750, though he never received the official title of winner.',
        'Harrison’s design was soon copied. In 1772 Captain James Cook set out on his second Pacific voyage carrying K1, a replica of H4 made by Larcum Kendall, and his journals were full of praise for it. Makers such as John Arnold and Thomas Earnshaw then simplified the mechanism, and the price of a chronometer fell steadily, so that by the early nineteenth century the ships of the Royal Navy routinely carried them. Lunar distances remained in use for some decades, but they gradually faded. Historians still debate whether the Board was unreasonably obstructive or merely careful with public money; what is certain is that the voyages of exploration and trade which followed would have been far more dangerous without Harrison’s invention.',
      ],
      groups: [
        {
          kind: 'match',
          instruction:
            'The passage has paragraphs A–F.\nChoose the correct heading for paragraphs B–F from the list of headings below.',
          options: [
            'Early attempts to measure latitude with the Pole Star',
            'An outsider’s long search for a reliable machine',
            'A tragedy that prompted government action',
            'A Dutch inventor who won the prize',
            'A solution based on observing the sky',
            'The use of chronometers in modern satellite navigation',
            'Proof of success, and a dispute over payment',
            'The spread of the invention after Harrison’s time',
          ],
          items: [
            { q: 'Paragraph B', a: 2, why: 'B-paragrafda 1707-yildagi kemalar halokati ("struck rocks off the Isles of Scilly") va undan keyin Parlament qabul qilgan Longitude Act tasvirlangan: iii.' },
            { q: 'Paragraph C', a: 4, why: 'C-paragrafda "looked to the heavens" va Oy hamda yulduz orasidagi burchakni o’lchash usuli (lunar distance) tushuntirilgan: v.' },
            { q: 'Paragraph D', a: 1, why: 'D-paragrafda "self-taught carpenter" Harrison H1dan H4gacha yillar davomida mashina yasagani aytilgan: ii.' },
            { q: 'Paragraph E', a: 6, why: 'E-paragrafda H4 sinovda "lost only five seconds" bo’lgani, ammo Kengash to’lashni kechiktirgani aytilgan: vii.' },
            { q: 'Paragraph F', a: 7, why: 'F-paragrafda Kendall nusxasi, Arnold va Earnshaw hamda Royal Navy kemalarida keng tarqalishi aytilgan: viii.' },
          ],
        },
        {
          kind: 'mcq',
          instruction: 'Choose the correct letter, A, B, C or D.',
          items: [
            {
              q: 'According to paragraph A, why could a small timing error be serious?',
              options: [
                'It made it impossible to measure latitude.',
                'It could leave a ship hundreds of kilometres from its believed position.',
                'It meant that the Pole Star could not be seen.',
                'It slowed down the progress of the ship.',
              ],
              a: 1,
              why: 'A-paragrafda "an error of only a few minutes could place a vessel hundreds of kilometres from where its crew believed it to be" deyilgan, shuning uchun B.',
            },
            {
              q: 'What did Isaac Newton tell the Board of Longitude?',
              options: [
                'The prize was too small to attract inventors.',
                'Astronomical tables would never be accurate enough.',
                'Conditions on a ship would prevent a watch from keeping reliable time.',
                'No method of finding longitude would ever be discovered.',
              ],
              a: 2,
              why: 'B-paragrafda Newton "a watch could never keep good time at sea" deb, kema harakati, harorat va tortishish farqini sabab qilgan, shuning uchun C.',
            },
            {
              q: 'What is given as a disadvantage of the lunar-distance method?',
              options: [
                'It needed more expensive instruments than a clock.',
                'It could only be used in the northern hemisphere.',
                'Its tables were not published until the nineteenth century.',
                'The calculations were long and difficult.',
              ],
              a: 3,
              why: 'C-paragrafda "the sums were long and difficult, taking up to four hours" deyilgan, shuning uchun D. Jadvallar 1767-yilda nashr etilgan, shuning uchun C noto’g’ri.',
            },
            {
              q: 'How did some members of the Board react to H4’s performance on the voyage to Jamaica?',
              options: [
                'They suggested that it might have been the result of chance.',
                'They refused to allow any further tests.',
                'They said that the watch was too large for ships.',
                'They immediately awarded Harrison the full prize.',
              ],
              a: 0,
              why: 'E-paragrafda Maskelyne kabilar "the result might have been luck" deb ikkinchi sinovni talab qilgan, shuning uchun A.',
            },
          ],
        },
        {
          kind: 'fill',
          title: 'Summary: John Harrison and his timekeepers',
          instruction: 'Complete the summary below.\nChoose NO MORE THAN TWO WORDS from the passage for each answer.',
          items: [
            { q: 'John Harrison, who began his career as a ___ in Yorkshire, spent many years improving his sea clocks.', a: ['carpenter'], why: 'D-paragrafda "a self-taught carpenter from Yorkshire" deyilgan.' },
            { q: 'On the voyage to Jamaica, his watch H4 lost only ___ seconds.', a: ['five', '5'], why: 'E-paragrafda "it was found to have lost only five seconds" deyilgan.' },
            { q: 'To obtain the rest of his reward, Harrison appealed to the ___.', a: ['king'], why: 'E-paragrafda "Harrison ... appealed to the king, George III" deyilgan.' },
            { q: 'A replica of H4 made by ___ was carried by Captain Cook in 1772.', a: ['Larcum Kendall', 'Kendall'], why: 'F-paragrafda "K1, a replica of H4 made by Larcum Kendall" deyilgan.' },
          ],
        },
      ],
    },
    {
      title: 'Working Apart: The Remote Work Debate',
      intro: 'Researchers disagree about what the shift away from the office has really done to work and to society.',
      labelled: false,
      paragraphs: [
        'Before 2020, fewer than one employee in twenty in most wealthy countries worked mainly from home. Within weeks of the first lockdowns, that proportion had risen to nearly half in some sectors, such as finance and software. The change was imposed rather than chosen, yet it has transformed the argument about where work ought to happen. Enthusiasts claim that the daily commute and the city-centre office are expensive habits which technology has made unnecessary; critics warn that their disappearance would weaken the ties that hold organisations together. Researchers who have studied the question for several years have reached some strikingly different conclusions.',
        'The most influential evidence in favour of remote work comes from the economist Marcus Obi. In a widely cited study published in 2022, he and his colleagues randomly assigned staff at a large travel company to spend either two days a week at home or all five in the office. Those working from home performed just as well on measures such as completed tasks and customer satisfaction, and they were about a third less likely to resign during the following year. Obi describes the hybrid arrangement as “a rare free lunch” for employers. His findings deserve respect, but they should not be applied everywhere without thought: the staff in question were all graduates performing fairly routine tasks, and it is far from clear that work which depends on constant improvisation would produce the same results.',
        'The organisational psychologist Anna Keller is more cautious. Her team analysed the pattern of messages and meetings at a technology company over eighteen months, during which its engineers moved from the office to their homes. Contacts between employees in different departments fell by roughly a quarter, while contact within teams rose slightly. Keller argues that new ideas often arise from chance conversations between people with different expertise, and that remote work therefore narrows the flow of information, a process she calls “the silo effect”. She adds that newer recruits suffer most, since they lose the chance to learn by watching experienced colleagues. Her data suggest, rather than prove, that innovation will suffer: the study could not record telephone calls or informal chats, and the company was never compared with a rival that stayed in its offices.',
        'The management scholar Tom Haldane believes that the debate has been framed wrongly. In his view, most of the problems blamed on remote work stem from managers who judge commitment by visible presence, and who therefore struggle when they cannot see their staff. Companies that set clear targets and review results, he says, have found distributed teams easy to run, whereas those that responded by installing software to record keystrokes and screen time saw trust and morale decline. Such monitoring is hardly a solution; it treats a failure of management as if it were a failure of employees, and it is likely to drive out precisely the people a firm most wants to keep.',
        'The sociologist Priya Nair looks instead at who benefits. Interviewing some two thousand workers in several countries, she found that home working had opened up jobs to people who previously struggled to reach a workplace, including those with disabilities, parents of young children and residents of remote villages. Their spending has also revived cafés and shops in small towns that were once empty on weekdays. Nair is concerned, however, about isolation and about the way work now spills into evenings, and she has called for a legal right to request remote working, as already exists in some countries.',
        'The predictions that city centres would empty permanently look overstated. Office attendance in major cities has settled at around two-thirds of its former level, and while sandwich shops and station kiosks have lost custom, many suburban high streets have gained it. Property owners are converting some surplus offices into flats, which may eventually bring as many people to live in the centre as once worked there. Cities have survived the loss of their factories, their docks and their department stores; it would be surprising if they could not adapt to a change in the way offices are used.',
        'A more serious concern is fairness. The jobs that can be done from home are mostly held by graduates in well-paid professions; nurses, delivery drivers, cleaners and shop assistants cannot log on from their kitchens. If flexible working becomes the norm for one group while others remain tied to fixed hours and places, it may harden existing divisions rather than relieve them. A right to work from home is of little value to those whose jobs cannot be done there, and that fact deserves more attention than it receives in most of the debate.',
        'Perhaps the most useful question is therefore not whether people should work at home or in an office, but which tasks benefit from being done together. Routine work that needs concentration may be done best alone, whereas induction, brainstorming and the resolution of disputes often go better face to face. Employers who treat this as a matter for each team to decide, rather than imposing a single rule, are likely to learn more than those who simply order everyone back or send everyone home. The pandemic ran the experiment; the interpretation of its results is still under way.',
      ],
      groups: [
        {
          kind: 'ynng',
          instruction:
            'Do the following statements agree with the views of the writer in the passage?\nWrite YES if the statement agrees with the views of the writer, NO if the statement contradicts the views of the writer, or NOT GIVEN if it is impossible to say what the writer thinks about this.',
          items: [
            { q: 'The results of Obi’s study should not automatically be assumed to hold true for all kinds of job.', a: 'yes', why: 'Ikkinchi paragrafda yozuvchi "should not be applied everywhere without thought" deb, xodimlar oddiy vazifalarni bajargan graduatelar edi, deydi, shuning uchun YES.' },
            { q: 'Keller’s research has demonstrated that remote work damages innovation.', a: 'no', why: 'Uchinchi paragrafda yozuvchi "Her data suggest, rather than prove" deydi, ya’ni isbotlamagan, shuning uchun NO.' },
            { q: 'Software that records what employees type is an effective answer to the difficulties of managing remote staff.', a: 'no', why: 'To’rtinchi paragrafda yozuvchi "Such monitoring is hardly a solution" deydi, shuning uchun NO.' },
            { q: 'Nair is right to call for a legal right to request remote working.', a: 'not-given', why: 'Beshinchi paragrafda Nair’ning taklifi aytilgan, lekin yozuvchi unga o’z fikrini bildirmagan, shuning uchun NOT GIVEN.' },
            { q: 'The idea that city centres will permanently lose their workers has been exaggerated.', a: 'yes', why: 'Oltinchi paragrafda yozuvchi "The predictions that city centres would empty permanently look overstated" deydi, shuning uchun YES.' },
            { q: 'Remote working is more valuable to large companies than to small ones.', a: 'not-given', why: 'Matnda katta va kichik kompaniyalarni taqqoslash yo’q, shuning uchun NOT GIVEN.' },
          ],
        },
        {
          kind: 'match',
          instruction:
            'Look at the following statements and the list of researchers below.\nMatch each statement with the correct researcher, A–D.',
          options: ['Marcus Obi', 'Anna Keller', 'Priya Nair', 'Tom Haldane'],
          items: [
            { q: 'Working remotely can reduce the quality of contact between different parts of a company.', a: 1, why: 'Uchinchi paragrafda Keller "Contacts between employees in different departments fell" va "the silo effect" haqida yozgan: B.' },
            { q: 'Remote work widens job opportunities for people who find it hard to travel to a workplace.', a: 2, why: 'Beshinchi paragrafda Nair "opened up jobs to people who previously struggled to reach a workplace" degan: C.' },
            { q: 'Difficulties with remote teams usually arise from poor management rather than from the place where people work.', a: 3, why: 'To’rtinchi paragrafda Haldane muammolar "managers who judge commitment by visible presence" tufayli deydi: D.' },
            { q: 'Allowing some work from home reduces the number of employees who leave their jobs.', a: 0, why: 'Ikkinchi paragrafda Obi: uydan ishlaganlar "about a third less likely to resign": A.' },
          ],
        },
        {
          kind: 'mcq',
          instruction: 'Choose the correct letter, A, B, C or D.',
          items: [
            {
              q: 'What does the writer suggest in the first paragraph about the rise in home working after 2020?',
              options: [
                'It was a change that employees had demanded for years.',
                'It happened because circumstances forced it.',
                'It was limited to the technology industry.',
                'It was planned in advance by governments.',
              ],
              a: 1,
              why: 'Birinchi paragrafda "The change was imposed rather than chosen" deyilgan, shuning uchun B.',
            },
            {
              q: 'Why does the writer advise caution about Obi’s study?',
              options: [
                'The group of employees studied was very small.',
                'The employees were not chosen at random.',
                'The employees’ jobs may not be typical of all kinds of work.',
                'The study lasted only a few weeks.',
              ],
              a: 2,
              why: 'Ikkinchi paragrafda xodimlar "all graduates performing fairly routine tasks" bo’lgani aytilgan; ular tasodifiy tanlangan va kuzatuv bir yil davom etgan, shuning uchun C.',
            },
            {
              q: 'What did Keller’s study find about communication after the engineers began working from home?',
              options: [
                'Contact between departments became less frequent.',
                'Contact within teams dropped sharply.',
                'New recruits made more contact with experienced colleagues.',
                'The total amount of contact doubled.',
              ],
              a: 0,
              why: 'Uchinchi paragrafda bo’limlararo aloqa "fell by roughly a quarter" deyilgan, shuning uchun A.',
            },
            {
              q: 'What is the writer’s main concern in the seventh paragraph?',
              options: [
                'Many graduates are unhappy about working from home.',
                'Nurses and drivers are paid too little for their work.',
                'Companies cannot afford the technology needed for remote work.',
                'Flexible working could increase the gap between different groups of workers.',
              ],
              a: 3,
              why: 'Yettinchi paragrafda "it may harden existing divisions rather than relieve them" deyilgan, shuning uchun D.',
            },
          ],
        },
      ],
    },
  ],
};

export default r1;
