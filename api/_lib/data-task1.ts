import type { Task1Page } from './types.js';

export const TASK1: Task1Page[] = [
  {
    slug: "internet-users-four-countries",
    title: "Internet users in four countries",
    chartType: "Line graph",
    question: "The line graph shows the percentage of the population who used the internet in four countries between 2000 and 2020.",
    chart: { kind: 'line', title: 'Internet users (% of population), 2000–2020', unit: '%', xLabels: ['2000', '2005', '2010', '2015', '2020'], series: [
      { name: 'Country A', values: [5, 20, 45, 70, 88] }, { name: 'Country B', values: [2, 10, 30, 55, 75] },
      { name: 'Country C', values: [10, 25, 50, 60, 65] }, { name: 'Country D', values: [1, 4, 12, 30, 52] } ] },
    analysis: "Look for the overall direction first: all four lines rise. Then compare the starting points, the end points and the speed of growth. Country C starts highest but slows down, while Country A overtakes it and finishes first. Country D is lowest throughout but grows steadily after 2010. Group countries with similar patterns in the detail paragraphs.",
    sample: [
      "The line graph illustrates the proportion of people using the internet in four countries over a twenty-year period from 2000 to 2020.",
      "Overall, internet use increased significantly in all four countries. Country A showed the strongest growth and had the highest figure by the end of the period, whereas Country D remained the lowest throughout.",
      "In 2000, Country C had the largest share of users at 10%, compared with only 1% in Country D. Over the next decade, Country A rose rapidly from 5% to 45% and then overtook Country C between 2010 and 2015, whereas Country C, which reached 50% in 2010, grew only slowly to 65% in 2020.",
      "Country A continued to climb and reached 88% by 2020. Country B followed a similar upward trend, increasing from 2% to 75%. Although Country D started from the lowest base, it experienced faster growth after 2010, rising from 12% to 52% in the final decade."
    ],
    language: [["illustrate / show / depict", "verbs for introducing the graph"], ["rise significantly / increase steadily", "describing upward trends"], ["overtake", "pass another line to become higher"], ["remain the lowest", "stay at the bottom throughout"], ["reach a peak of", "go up to the highest point"], ["in the final decade", "a time phrase for the last ten years"], ["whereas / while", "contrasting two groups"]],
    mistakes: ["Giving an opinion or reasons (“because people bought smartphones”) when the chart gives no reasons.", "Describing every number instead of selecting the key trends.", "Forgetting the overview paragraph."],
  },
  {
    slug: "monthly-temperatures-two-cities",
    title: "Average monthly temperatures in two cities",
    chartType: "Line graph",
    question: "The line graph shows the average temperatures in two cities in six months of the year.",
    chart: { kind: 'line', title: 'Average temperature (°C)', unit: '°C', xLabels: ['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'], series: [
      { name: 'City X', values: [2, 9, 17, 24, 18, 8] }, { name: 'City Y', values: [14, 18, 24, 31, 27, 19] } ] },
    analysis: "Both lines follow the same shape: they rise to a peak in July and fall afterwards. The key comparison is that City Y is warmer in every month, by between 8 and 12 degrees. Mention the highest and lowest points of each line and the size of the gap.",
    sample: [
      "The line graph compares average temperatures in two cities across six months of the year.",
      "Overall, both cities experienced their warmest weather in July, and City Y was consistently warmer than City X in every month shown.",
      "In January, the average temperature in City X was only 2°C, compared with 14°C in City Y. Temperatures in both cities then rose steadily until the summer. City X reached a peak of 24°C in July, while City Y recorded a much higher maximum of 31°C in the same month.",
      "After July, the figures fell in both cities. By November, City X had cooled to 8°C and City Y to 19°C. The gap between the two cities was widest in January, at 12 degrees, and narrowest in May and July, at 7 degrees.",
      "The pattern also shows that the temperature in City Y never fell below 14°C, while City X dropped to as low as 2°C at the start of the year, which indicates much milder winters in City Y overall."
    ],
    language: [["peak at", "reach the highest point"], ["consistently", "in every case without change"], ["fall steadily", "decrease gradually"], ["the gap between", "the difference between two figures"], ["respectively", "in the same order as mentioned"], ["record a maximum of", "reach a highest value of"], ["compared with", "used to contrast two figures"]],
    mistakes: ["Mixing up “temperature” and “weather”; describe only the numbers.", "Not giving units (°C).", "Using “respectively” incorrectly; the order of the figures must match."],
  },
  {
    slug: "weekly-sales-three-products",
    title: "Weekly sales of three products",
    chartType: "Line graph",
    question: "The graph shows the weekly sales, in thousands of units, of three products over a six-week period.",
    chart: { kind: 'line', title: 'Weekly sales (thousand units)', unit: 'thousand', xLabels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'], series: [
      { name: 'Product A', values: [20, 25, 30, 28, 35, 40] }, { name: 'Product B', values: [35, 32, 30, 25, 20, 18] },
      { name: 'Product C', values: [15, 15, 18, 22, 25, 30] } ] },
    analysis: "The lines show different trends: A and C go up, B goes down. A and B cross at week 3 (both at 30). C stays lowest but rises in the second half. Open with the overall contrast, then describe the products with opposite trends separately.",
    sample: [
      "The line graph shows how many units of three different products were sold each week over six weeks.",
      "Overall, sales of Products A and C rose over the period, whereas sales of Product B fell. Product A ended as the best-selling product, overtaking Product B from the fourth week.",
      "Product A started at 20 thousand units and grew steadily to 40 thousand by week 6, despite a slight dip to 28 thousand in week 4. In contrast, Product B began as the market leader at 35 thousand units but declined every week, reaching only 18 thousand at the end.",
      "Product C had the lowest sales at the start, at 15 thousand units, and the figure stayed unchanged in week 2. It then increased from week 3 onwards and climbed to 30 thousand by the final week, doubling its starting level.",
      "By the end of the period, the order of the products had completely reversed: Product A was first with 40 thousand units, Product C second with 30 thousand, and Product B had fallen to last place with 18 thousand."
    ],
    language: [["market leader", "the product with the highest sales"], ["dip", "a small, temporary fall"], ["remain unchanged", "stay the same"], ["double", "increase to twice the amount"], ["onwards", "from a point in time continuing"], ["in contrast", "introducing an opposite trend"], ["overtake", "become higher than"]],
    mistakes: ["Writing “sold 40” without the unit (thousand).", "Not mentioning the point where lines cross.", "Using the wrong tense; a past period needs past tenses."],
  },
  {
    slug: "unemployment-rates-three-countries",
    title: "Unemployment rates in three countries",
    chartType: "Line graph",
    question: "The graph shows the unemployment rate in three countries between 1990 and 2015.",
    chart: { kind: 'line', title: 'Unemployment rate (%)', unit: '%', xLabels: ['1990', '1995', '2000', '2005', '2010', '2015'], series: [
      { name: 'Country P', values: [8, 10, 7, 5, 9, 6] }, { name: 'Country Q', values: [5, 6, 4, 4, 6, 5] },
      { name: 'Country R', values: [12, 14, 13, 9, 11, 8] } ] },
    analysis: "These lines fluctuate rather than moving in one direction. Describe highs and lows, and note that Country R is always the highest and Country Q always the lowest. Use verbs like fluctuate, peak and recover instead of repeating “rise” and “fall”.",
    sample: [
      "The line graph compares unemployment rates in three countries over a twenty-five-year period, from 1990 to 2015.",
      "Overall, unemployment fluctuated in all three countries, but it was lower in 2015 than in 1990 in Countries P and R. Country R had the highest rate throughout, while Country Q consistently had the lowest.",
      "Country R's rate peaked at 14% in 1995, then fell to 9% in 2005, before rising again to 11% in 2010 and finally dropping to 8% in 2015. Country P followed a similar pattern, climbing from 8% to 10% in 1995 and falling to 5% in 2005, with a second rise to 9% in 2010.",
      "Country Q showed the most stable figures, remaining between 4% and 6% for the entire period. Its rate ended where it started, at 5%, whereas Country P finished at 6%, two points below its 1990 level.",
      "Country R's rate was higher than Country Q's in every year shown, and the gap was widest in 2000, when the figures were 13% and 4% respectively, a difference of nine percentage points."
    ],
    language: [["fluctuate", "go up and down repeatedly"], ["peak at", "reach the highest point"], ["stable", "not changing much"], ["recover", "rise again after a fall"], ["throughout", "during the whole period"], ["a similar pattern", "a comparable shape"], ["finish at", "end at a particular value"]],
    mistakes: ["Describing fluctuating data as a simple rise or fall.", "Ignoring the difference between countries.", "Giving reasons for unemployment."],
  },
  {
    slug: "household-technology-three-countries",
    title: "Household technology in three countries",
    chartType: "Bar chart",
    question: "The bar chart shows the percentage of households owning four types of technology in three countries in 2019.",
    chart: { kind: 'bar', title: 'Households owning technology (%), 2019', unit: '%', categories: ['Computer', 'Smartphone', 'Tablet', 'Smart TV'], series: [
      { name: 'Country X', values: [85, 90, 45, 60] }, { name: 'Country Y', values: [70, 82, 38, 48] }, { name: 'Country Z', values: [55, 75, 30, 35] } ] },
    analysis: "Compare the countries for each item. Country X is highest in every category and Country Z lowest. Smartphones are the most common item everywhere, while tablets are the least common. The order of popularity is the same in all three countries.",
    sample: [
      "The bar chart compares the proportion of households in three countries that owned four kinds of technology in 2019.",
      "Overall, smartphones were the most widely owned item in all three countries, whereas tablets were the least common. Country X recorded the highest ownership of every item, and Country Z the lowest.",
      "Smartphone ownership ranged from 75% in Country Z to 90% in Country X. Computers came second in Country X, at 85%, and were found in 70% of households in Country Y and 55% in Country Z.",
      "Smart TVs were less common, owned by 60% of households in Country X, 48% in Country Y and just 35% in Country Z. Tablets were the least popular item, with ownership between 30% and 45%, and the gap between the countries was much smaller for this item than for computers.",
      "To summarise the ranking, the order of the countries did not change from one item to another: Country X first, Country Y second and Country Z third, which suggests that overall access to technology was greatest in Country X."
    ],
    language: [["the proportion of", "the share or percentage"], ["range from … to", "show the lowest and highest values"], ["recorded the highest", "had the largest figure"], ["the least common", "owned by the fewest"], ["widely owned", "owned by many"], ["came second", "was in second place"], ["the gap between", "the difference between"]],
    mistakes: ["Listing all twelve bars one by one.", "Missing the overall pattern that the same order applies in every country.", "Writing “people” instead of “households”."],
  },
  {
    slug: "exercise-hours-by-age-and-gender",
    title: "Weekly exercise by age group and gender",
    chartType: "Bar chart",
    question: "The bar chart shows the average number of hours men and women of different ages spent on exercise per week.",
    chart: { kind: 'bar', title: 'Average hours of exercise per week', unit: 'hours', categories: ['10–17', '18–29', '30–49', '50+'], series: [
      { name: 'Men', values: [6.5, 5, 3.5, 2.5] }, { name: 'Women', values: [5, 3.5, 3, 2.8] } ] },
    analysis: "There is a clear downward pattern with age for both genders. Men exercise more than women in every group, but the gap narrows in the oldest group. Highlight the highest and lowest values and the change of the gap.",
    sample: [
      "The bar chart illustrates how many hours per week men and women in four age groups spent on exercise.",
      "Overall, the amount of exercise decreased with age for both genders, and men exercised more than women in every age group, although the difference became very small among people aged 50 and over.",
      "Teenagers aged 10 to 17 exercised the most, with men averaging 6.5 hours and women 5 hours per week. Among 18 to 29-year-olds, the figures dropped to 5 hours for men and 3.5 hours for women.",
      "The decline continued in the 30 to 49 group, at 3.5 hours for men and 3 hours for women. In the oldest group, men exercised for 2.5 hours and women for 2.8 hours, so it was the only category in which women exercised slightly more than men.",
      "The biggest difference between men and women appeared in the two youngest groups, where men exercised for 1.5 hours more per week, while the smallest difference was among people over 50, at only 0.3 hours."
    ],
    language: [["decline with age", "decrease as people get older"], ["average", "the typical amount"], ["the difference became small", "the gap narrowed"], ["the only category in which", "a unique exception"], ["slightly more than", "a little more than"], ["hours per week", "unit of measurement"], ["the oldest group", "people aged 50 and over"]],
    mistakes: ["Calling the oldest group a “winner”; keep neutral language.", "Not noticing the one exception.", "Forgetting units."],
  },
  {
    slug: "student-enrolment-by-subject",
    title: "Student enrolment by subject, 2010 and 2020",
    chartType: "Bar chart",
    question: "The bar chart shows the number of students (in thousands) enrolled in five subjects at a university in 2010 and 2020.",
    chart: { kind: 'bar', title: 'Students enrolled (thousands)', unit: 'thousand', categories: ['Business', 'Engineering', 'Medicine', 'Arts', 'Science'], series: [
      { name: '2010', values: [120, 90, 60, 80, 70] }, { name: '2020', values: [150, 130, 85, 60, 95] } ] },
    analysis: "Compare each subject across the two years. Four subjects increased and only Arts decreased. Engineering shows the largest rise (40 thousand), and Business is the largest subject in both years. Group the increases and then the one decrease.",
    sample: [
      "The bar chart compares enrolment in five university subjects in 2010 and 2020, measured in thousands of students.",
      "Overall, enrolment rose in four of the five subjects, with Arts being the only subject that lost students. Business remained the most popular subject in both years.",
      "Business enrolment grew from 120 thousand to 150 thousand, while Engineering saw the biggest increase, from 90 thousand to 130 thousand. Medicine and Science also expanded, rising from 60 thousand to 85 thousand and from 70 thousand to 95 thousand respectively.",
      "In contrast, the number of Arts students fell from 80 thousand in 2010 to 60 thousand in 2020. As a result, Arts changed from the third most popular subject to the least popular one.",
      "In total, the number of students in these five subjects increased from 420 thousand in 2010 to 520 thousand in 2020, which means that the overall growth was largely a result of the increases in Business and Engineering."
    ],
    language: [["enrolment", "the number of students registered"], ["saw the biggest increase", "grew the most"], ["expand", "grow in size"], ["lose students", "have a decrease in numbers"], ["remain the most popular", "stay at the top"], ["in contrast", "introducing an opposite change"], ["change from … to …", "describe a change in position"]],
    mistakes: ["Describing 2010 and 2020 in separate paragraphs and not comparing.", "Missing that Arts is the only decrease.", "Using “people” instead of “students”."],
  },
  {
    slug: "energy-sources-1990-and-2020",
    title: "Energy sources in 1990 and 2020",
    chartType: "Pie chart",
    question: "The pie charts show the sources of energy used in one country in 1990 and 2020.",
    chart: { kind: 'pie', title: 'Energy sources (%)', pies: [
      { label: '1990', slices: [{ label: 'Coal', value: 45 }, { label: 'Oil', value: 25 }, { label: 'Gas', value: 15 }, { label: 'Nuclear', value: 10 }, { label: 'Renewables', value: 5 }] },
      { label: '2020', slices: [{ label: 'Coal', value: 20 }, { label: 'Oil', value: 20 }, { label: 'Gas', value: 30 }, { label: 'Nuclear', value: 10 }, { label: 'Renewables', value: 20 }] } ] },
    analysis: "With two pies, compare slice by slice. Coal falls sharply, gas and renewables rise, oil falls slightly and nuclear stays constant. The main change is that coal is no longer the main source. Group the sources that fell and the sources that rose.",
    sample: [
      "The two pie charts show the proportion of energy produced from five sources in a country in 1990 and in 2020.",
      "Overall, coal was the dominant source in 1990, but by 2020 it had lost its leading position, and gas had become the main source. Renewable energy saw a considerable increase over the period.",
      "In 1990, coal supplied 45% of the energy, followed by oil at 25%, gas at 15%, nuclear power at 10% and renewables at just 5%. Thirty years later, coal had fallen sharply to 20%, and oil had declined slightly to the same level.",
      "In contrast, the share of gas doubled to 30%, and renewables quadrupled from 5% to 20%. Nuclear energy was the only source that did not change, remaining at 10% in both years.",
      "It is also noticeable that the three fossil fuels together supplied 85% of the energy in 1990, but only 70% in 2020, so the country had become less dependent on them over the thirty-year period."
    ],
    language: [["the dominant source", "the largest source"], ["supply", "provide"], ["decline slightly", "decrease by a small amount"], ["double / quadruple", "increase two / four times"], ["remain at", "stay at the same value"], ["thirty years later", "a time phrase for the second chart"], ["lose its leading position", "stop being the largest"]],
    mistakes: ["Describing each pie separately without comparing.", "Using “percentage” when you mean “proportion”: say “the proportion of 45%”.", "Not stating the overview that gas replaced coal as the main source."],
  },
  {
    slug: "household-spending-2000-and-2020",
    title: "How a household spent its income, 2000 and 2020",
    chartType: "Pie chart",
    question: "The pie charts show how an average household spent its income in 2000 and in 2020.",
    chart: { kind: 'pie', title: 'Household spending (%)', pies: [
      { label: '2000', slices: [{ label: 'Housing', value: 30 }, { label: 'Food', value: 25 }, { label: 'Transport', value: 15 }, { label: 'Leisure', value: 10 }, { label: 'Other', value: 20 }] },
      { label: '2020', slices: [{ label: 'Housing', value: 35 }, { label: 'Food', value: 15 }, { label: 'Transport', value: 18 }, { label: 'Leisure', value: 17 }, { label: 'Other', value: 15 }] } ] },
    analysis: "The biggest change is food, which falls by ten points. Housing, transport and leisure all increase, with leisure showing the largest relative growth. 'Other' shrinks. Start with the overview, then describe increases and decreases separately.",
    sample: [
      "The pie charts compare the way a typical household divided its income among five categories in 2000 and 2020.",
      "Overall, housing was the largest item of expenditure in both years, while spending on food fell considerably. Leisure and transport became more significant parts of the household budget.",
      "In 2000, housing accounted for 30% of spending and food for 25%. By 2020, the proportion spent on housing had risen to 35%, whereas food had dropped to just 15%, the biggest decrease of any category.",
      "Transport rose slightly from 15% to 18%, and leisure increased from 10% to 17%, showing the largest relative growth. Spending in the “other” category declined from 20% to 15%.",
      "Taken together, housing, food and transport accounted for 70% of the household budget in 2000 and 68% in 2020, so the main structure of spending remained similar even though the balance among the categories changed. In other words, a typical household in 2020 had less money left over for the remaining items grouped under “other”."
    ],
    language: [["account for", "make up a share"], ["expenditure", "money spent"], ["fall considerably", "decrease by a lot"], ["the biggest decrease", "the largest fall"], ["relative growth", "growth compared with the starting size"], ["a typical household", "an average household"], ["divide … among", "share between categories"]],
    mistakes: ["Confusing percentage points and percent: a rise from 10% to 17% is seven points.", "Not stating that housing is the largest in both years.", "Explaining why spending changed."],
  },
  {
    slug: "underground-railway-systems-six-cities",
    title: "Underground railway systems in six cities",
    chartType: "Table",
    question: "The table gives information about the underground railway systems in six cities.",
    chart: { kind: 'table', title: 'Underground railway systems', headers: ['City', 'Date opened', 'Length (km)', 'Passengers per year (millions)'], rows: [
      ['City A', 1863, 394, 1180], ['City B', 1900, 214, 1500], ['City C', 1935, 303, 2500], ['City D', 1969, 199, 1000], ['City E', 1976, 56, 25], ['City F', 1995, 68, 120] ] },
    analysis: "A table needs selection, not a list of every figure. Identify the extremes: City A is the oldest and longest, City C has the most passengers and City E the fewest. Notice that longer systems do not always carry more passengers: City B has fewer kilometres than City A but more passengers.",
    sample: [
      "The table provides data on the underground railway systems of six cities, including when they opened, how long they are and how many passengers they carry each year.",
      "Overall, the oldest systems tend to be the longest, but the number of passengers does not depend only on length. City C carries by far the most passengers, while City E has the smallest system.",
      "City A has the oldest network, which opened in 1863, and also the longest at 394 kilometres. However, it carries 1,180 million passengers a year, which is less than City B, whose 214-kilometre system carries 1,500 million, and much less than City C, with 2,500 million.",
      "The newest systems are in City E and City F, which opened in 1976 and 1995 respectively. They are also the smallest, at 56 and 68 kilometres, and they handle only 25 million and 120 million passengers a year.",
      "Finally, there is no simple link between age and passenger numbers, since City D, which opened in 1969, carries 1,000 million passengers a year, far more than the much newer systems in City E and City F."
    ],
    language: [["the oldest / the newest", "superlatives for dates"], ["by far the most", "much more than all the others"], ["carry passengers", "transport people"], ["tend to", "show a general pattern"], ["depend on", "be influenced by"], ["handle", "deal with a number of people"], ["respectively", "in the same order as mentioned"]],
    mistakes: ["Copying all 24 numbers.", "Missing the extremes (oldest, longest, busiest).", "Forgetting units (km, millions)."],
  },
  {
    slug: "daily-activities-by-age-group",
    title: "Time spent on daily activities by age group",
    chartType: "Table",
    question: "The table shows the average number of minutes per day that people in four age groups spent on four activities.",
    chart: { kind: 'table', title: 'Average minutes per day', headers: ['Age group', 'Work or study', 'Social media', 'Exercise', 'Sleep'], rows: [
      ['16–24', 420, 150, 40, 480], ['25–44', 480, 90, 25, 450], ['45–64', 450, 60, 30, 440], ['65+', 60, 40, 35, 520] ] },
    analysis: "Compare the groups for each activity. Work or study peaks for 25–44-year-olds and is very low for 65+. Social media falls with age. Exercise stays low and varies little. The oldest group sleeps the most. Select two or three clear trends and support each with figures.",
    sample: [
      "The table compares how many minutes per day people in four age groups spent on work or study, social media, exercise and sleep.",
      "Overall, the time spent on social media decreased with age, whereas the oldest group stood out for sleeping the most and working the least. Exercise took up the smallest amount of time in every group.",
      "People aged 25 to 44 spent the longest on work or study, at 480 minutes, followed closely by the 45 to 64 group with 450 minutes. The youngest group spent 420 minutes, while those aged 65 and over spent only 60 minutes.",
      "Young people aged 16 to 24 spent 150 minutes a day on social media, compared with 90, 60 and 40 minutes in the older groups. Exercise ranged from 25 to 40 minutes, and the 65-plus group slept for 520 minutes, around 40 minutes more than the youngest group.",
      "In general, working-age groups followed similar patterns, with sleep of between 440 and 450 minutes, while the figures for social media and exercise were the main differences between younger and older respondents."
    ],
    language: [["stand out for", "be noticeably different"], ["followed closely by", "just behind"], ["take up", "use time"], ["decrease with age", "get lower as people get older"], ["compared with", "contrasting figures"], ["the smallest amount of time", "the least time"], ["aged 65 and over", "65-plus"]],
    mistakes: ["Describing each age group in turn instead of comparing activities.", "Not converting “480 minutes” to a natural comment (such as eight hours) when it helps the reader.", "Ignoring the exception: 65+ sleeps the most."],
  },
  {
    slug: "recycling-plastic-bottles-process",
    title: "The process of recycling plastic bottles",
    chartType: "Process",
    question: "The diagram shows how plastic bottles are recycled into new products.",
    chart: { kind: 'process', title: 'Recycling plastic bottles', steps: ['Bottles collected from bins', 'Sorted by type and colour', 'Crushed into small pieces', 'Washed to remove labels', 'Melted at high temperature', 'Formed into small pellets', 'Pellets made into new products'] },
    analysis: "A process description uses present simple passive (“are collected”, “is melted”) and sequence words (first, then, next, finally). State how many stages there are and what the start and end of the process are. Do not describe the diagram as if it were data.",
    sample: [
      "The diagram illustrates the process by which used plastic bottles are recycled and turned into new plastic products.",
      "Overall, the process consists of seven stages, beginning with the collection of bottles from recycling bins and ending with the production of new items.",
      "First, the used bottles are collected from public bins and taken to a recycling plant, where they are sorted according to type and colour. Next, the sorted bottles are crushed into small pieces so that they can be processed more easily, and these pieces are then washed to remove labels and dirt.",
      "After that, the clean plastic is melted at a high temperature. The liquid plastic is formed into small pellets, which are cooled and hardened. Finally, the pellets are used by factories to make new products such as containers, clothing fibres or toys.",
      "The process is therefore a closed cycle, because the plastic that comes from used bottles becomes the raw material for new items, which reduces the need for new plastic and keeps waste out of landfill."
    ],
    language: [["consist of … stages", "have a number of steps"], ["first / next / after that / finally", "sequence words"], ["is / are + past participle", "passive voice for processes"], ["so that", "showing purpose"], ["according to", "based on"], ["such as", "giving examples"], ["be turned into", "be changed into"]],
    mistakes: ["Using active voice and “they” for machines.", "Forgetting the overview (number of stages and start/end).", "Adding steps that are not in the diagram."],
  },
];
