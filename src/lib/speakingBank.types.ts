export type TopicCategory = 'People' | 'Places' | 'Objects' | 'Events' | 'Experiences' | 'Media' | 'Study & work' | 'Technology' | 'Environment' | 'Society' | 'Lifestyle';
export const TOPIC_CATEGORIES: TopicCategory[] = ['People', 'Places', 'Objects', 'Events', 'Experiences', 'Media', 'Study & work', 'Technology', 'Environment', 'Society', 'Lifestyle'];

/** Part 1: an interview theme with 4 short everyday questions. */
export interface Part1Theme { id: string; theme: string; category: TopicCategory; questions: string[] }
/** Part 2: a cue card; `part3` are the follow-up discussion questions that belong to it. */
export interface CueCard { id: string; category: TopicCategory; title: string; points: string[]; explain: string; part3: string[] }
/** Part 3: an abstract discussion set on a theme. */
export interface Part3Set { id: string; theme: string; category: TopicCategory; questions: string[] }
