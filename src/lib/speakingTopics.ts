export const speakingPart1Topics = [
  "Do you work or are you a student?",
  "What do you enjoy most about your studies?",
  "Do you like reading? What kind of books do you read?",
  "How often do you use the internet?",
  "What is your favourite type of music?",
  "Do you like cooking? Why or why not?",
  "What do you usually do on weekends?",
  "Do you prefer morning or evening? Why?",
  "What kind of weather do you like best?",
  "Do you enjoy traveling? Where have you been?",
];

export const speakingPart2Topics = [
  "Describe a person who has influenced you. You should say: who this person is, how you know them, what they have done that influenced you, and explain why they have had such an influence on you.",
  "Describe a place you would like to visit. You should say: where it is, how you know about it, what you would do there, and explain why you want to visit this place.",
  "Describe a book that you have recently read. You should say: what it was about, why you chose to read it, how long it took you to read, and explain what you liked or disliked about it.",
  "Describe a memorable event in your life. You should say: what the event was, when and where it happened, who was involved, and explain why it was memorable.",
  "Describe a skill you would like to learn. You should say: what the skill is, how you would learn it, why you want to learn it, and explain how it would be useful to you.",
  "Describe an important decision you made. You should say: what the decision was, when you made it, how you made it, and explain why it was important.",
  "Describe a hobby you enjoy. You should say: what the hobby is, how long you have been doing it, who you do it with, and explain why you enjoy it.",
  "Describe a teacher who has helped you. You should say: who the teacher was, what subject they taught, how they helped you, and explain why they were important to you.",
];

export const speakingPart3Topics = [
  "What are the advantages and disadvantages of living in a big city compared to a small town?",
  "How has technology changed the way people communicate?",
  "Do you think education systems need to change? In what ways?",
  "What impact does tourism have on local cultures?",
  "How important is it for people to have a work-life balance?",
  "Do you think governments should invest more in public transport? Why?",
  "What role does social media play in modern society?",
  "How can individuals contribute to protecting the environment?",
];

export function getRandomSpeakingTopic(part: 'part1' | 'part2' | 'part3') {
  const topics = part === 'part1' ? speakingPart1Topics : part === 'part2' ? speakingPart2Topics : speakingPart3Topics;
  return topics[Math.floor(Math.random() * topics.length)];
}
