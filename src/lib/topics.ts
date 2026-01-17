export const task1Topics = [
  {
    type: "Line Graph",
    prompt: "The graph below shows the number of international students studying in four different countries between 2010 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant."
  },
  {
    type: "Bar Chart",
    prompt: "The chart below shows the percentage of households owning different types of technology in three countries in 2019. Summarise the information by selecting and reporting the main features, and make comparisons where relevant."
  },
  {
    type: "Pie Chart",
    prompt: "The pie charts below show the main reasons for migration to and from the UK in 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant."
  },
  {
    type: "Table",
    prompt: "The table below gives information about the underground railway systems in six major cities. Summarise the information by selecting and reporting the main features, and make comparisons where relevant."
  },
  {
    type: "Process Diagram",
    prompt: "The diagram below shows how electricity is generated in a hydroelectric power station. Summarise the information by selecting and reporting the main features, and make comparisons where relevant."
  },
  {
    type: "Map",
    prompt: "The maps below show the development of a small village between 1990 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant."
  },
  {
    type: "Mixed Charts",
    prompt: "The charts below show the sources of electricity in Australia and France in 2021. Summarise the information by selecting and reporting the main features, and make comparisons where relevant."
  },
  {
    type: "Line Graph",
    prompt: "The graph shows changes in global average temperatures and CO2 emissions since 1900. Summarise the information by selecting and reporting the main features, and make comparisons where relevant."
  }
];

export const task2Topics = [
  {
    category: "Education",
    prompt: "Some people believe that universities should focus on providing academic skills, while others think they should prepare students for employment. Discuss both views and give your opinion."
  },
  {
    category: "Technology",
    prompt: "Many people believe that social media has a negative impact on both individuals and society. To what extent do you agree or disagree?"
  },
  {
    category: "Environment",
    prompt: "Some people say that the best way to improve public health is by increasing the number of sports facilities. Others, however, say that this would have little effect on public health and that other measures are required. Discuss both views and give your opinion."
  },
  {
    category: "Society",
    prompt: "In many countries, the gap between the rich and the poor is increasing. What problems does this cause and what solutions can be proposed?"
  },
  {
    category: "Work",
    prompt: "Some employers think that formal academic qualifications are more important than life experience and personal qualities when looking for an employee. To what extent do you agree or disagree?"
  },
  {
    category: "Globalization",
    prompt: "Some people think that cultural traditions will be destroyed when they are used as money-making attractions aimed at tourists. Others believe this is the only way to save such traditions. Discuss both views and give your opinion."
  },
  {
    category: "Health",
    prompt: "In some countries, the average weight of people is increasing and their level of health and fitness is decreasing. What do you think are the causes of these problems and what measures could be taken to solve them?"
  },
  {
    category: "Crime",
    prompt: "Some people think that the best way to reduce crime is to give longer prison sentences. Others, however, believe there are better alternative ways of reducing crime. Discuss both views and give your opinion."
  },
  {
    category: "Media",
    prompt: "News editors decide what to broadcast on television and what to print in newspapers. What factors influence these decisions? Do you think we should leave these decisions to the news editors?"
  },
  {
    category: "Government",
    prompt: "Some people believe that governments should focus spending only on public services like healthcare and education rather than on the arts. To what extent do you agree or disagree?"
  }
];

export function getRandomTopic(taskType: 'Task 1' | 'Task 2') {
  const topics = taskType === 'Task 1' ? task1Topics : task2Topics;
  const randomIndex = Math.floor(Math.random() * topics.length);
  return topics[randomIndex];
}
