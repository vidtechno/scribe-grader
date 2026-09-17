import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Check, ChevronLeft, ChevronRight, RotateCcw, X } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';

type Word = {
  word: string;
  definition: string;
  example: string;
  topic: string;
  level: 'Intermediate' | 'Upper-intermediate' | 'Advanced';
};

const WORDS: Word[] = [
  { word: 'substantial', definition: 'large in amount or importance', example: 'The project requires substantial investment.', topic: 'Education', level: 'Upper-intermediate' },
  { word: 'compulsory', definition: 'required by a rule or law', example: 'Physical education is compulsory at this school.', topic: 'Education', level: 'Intermediate' },
  { word: 'curriculum', definition: 'the subjects taught in a course or school', example: 'The curriculum includes practical digital skills.', topic: 'Education', level: 'Upper-intermediate' },
  { word: 'mitigate', definition: 'to reduce the harmful effect of something', example: 'Better planning can mitigate the risks of flooding.', topic: 'Environment', level: 'Advanced' },
  { word: 'sustainable', definition: 'able to continue without damaging the environment', example: 'Cities need sustainable transport systems.', topic: 'Environment', level: 'Intermediate' },
  { word: 'biodiversity', definition: 'the variety of plants and animals in an area', example: 'Deforestation threatens local biodiversity.', topic: 'Environment', level: 'Advanced' },
  { word: 'allocate', definition: 'to officially give time, money, or resources for a purpose', example: 'The council allocated more money to public transport.', topic: 'Society', level: 'Advanced' },
  { word: 'inequality', definition: 'an unfair difference between groups of people', example: 'Education can help reduce social inequality.', topic: 'Society', level: 'Upper-intermediate' },
  { word: 'congestion', definition: 'a situation in which a place is overcrowded or traffic is slow', example: 'Congestion is a major problem in large cities.', topic: 'Cities', level: 'Intermediate' },
  { word: 'infrastructure', definition: 'the basic systems and services a country or city needs', example: 'Investment in infrastructure improves quality of life.', topic: 'Cities', level: 'Upper-intermediate' },
  { word: 'conventional', definition: 'usual or traditional', example: 'Some people prefer conventional classrooms.', topic: 'Technology', level: 'Intermediate' },
  { word: 'innovation', definition: 'a new idea, method, or product', example: 'Innovation has transformed the way people work.', topic: 'Technology', level: 'Intermediate' },
];

const STORAGE_KEY = 'scorify-vocabulary-progress-v1';

function readKnownWords(): string[] {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); } catch { return []; }
}

export default function Vocabulary() {
  const [topic, setTopic] = useState('All topics');
  const [known, setKnown] = useState<string[]>(readKnownWords);
  const [index, setIndex] = useState(0);
  const topics = useMemo(() => ['All topics', ...Array.from(new Set(WORDS.map((word) => word.topic)))], []);
  const words = useMemo(() => topic === 'All topics' ? WORDS : WORDS.filter((word) => word.topic === topic), [topic]);
  const current = words[index % words.length];
  const completed = known.length;

  const mark = (isKnown: boolean) => {
    if (isKnown && current && !known.includes(current.word)) {
      const next = [...known, current.word];
      setKnown(next);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    }
    setIndex((value) => (value + 1) % words.length);
  };

  const reset = () => { setKnown([]); localStorage.removeItem(STORAGE_KEY); setIndex(0); };

  return (
    <div className="min-h-screen bg-background pb-20">
      <SEOHead title="Vocabulary Builder" description="Build practical IELTS vocabulary with spaced practice." path="/vocabulary" noindex />
      <Navbar />
      <main className="pt-24 px-4 sm:px-6 max-w-5xl mx-auto">
        <Link to="/dashboard" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"><ArrowLeft className="h-4 w-4" /> Back to Dashboard</Link>
        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-8">
          <div><p className="text-sm font-medium text-primary mb-2">Daily practice</p><h1 className="text-3xl font-bold">Vocabulary Builder</h1><p className="text-muted-foreground mt-2">Learn high-value IELTS words in small, focused sessions.</p></div>
          <div className="flex items-center gap-2"><span className="text-sm text-muted-foreground">{completed}/{WORDS.length} learned</span><Button variant="ghost" size="sm" onClick={reset}><RotateCcw className="h-4 w-4 mr-2" /> Reset</Button></div>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 mb-6">{topics.map((item) => <Button key={item} size="sm" variant={topic === item ? 'default' : 'outline'} onClick={() => { setTopic(item); setIndex(0); }}>{item}</Button>)}</div>
        <div className="grid lg:grid-cols-[1fr_280px] gap-6">
          <section className="glass-card p-6 sm:p-10 min-h-[390px] flex flex-col justify-between">
            <div className="flex justify-between items-center"><span className="text-xs uppercase tracking-wider text-muted-foreground">{current.topic} · {current.level}</span><span className="text-sm text-muted-foreground">{(index % words.length) + 1} / {words.length}</span></div>
            <div className="py-10"><div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-5"><BookOpen className="h-8 w-8 text-primary" /></div><h2 className="text-4xl font-bold mb-4">{current.word}</h2><p className="text-xl leading-relaxed mb-5">{current.definition}</p><p className="text-muted-foreground italic">“{current.example}”</p></div>
            <div className="flex flex-col sm:flex-row gap-3"><Button variant="outline" className="flex-1" onClick={() => mark(false)}><X className="h-4 w-4 mr-2" /> Still learning</Button><Button className="flex-1" onClick={() => mark(true)}><Check className="h-4 w-4 mr-2" /> I know this</Button></div>
          </section>
          <aside className="glass-card p-5 h-fit"><h3 className="font-semibold mb-4">How it works</h3><ol className="space-y-4 text-sm text-muted-foreground"><li className="flex gap-3"><span className="font-bold text-primary">1</span>Read the meaning and example.</li><li className="flex gap-3"><span className="font-bold text-primary">2</span>Mark words you know.</li><li className="flex gap-3"><span className="font-bold text-primary">3</span>Return tomorrow and review your progress.</li></ol><div className="border-t border-border mt-5 pt-5 flex justify-between"><Button variant="ghost" size="icon" onClick={() => setIndex((value) => (value - 1 + words.length) % words.length)} aria-label="Previous word"><ChevronLeft /></Button><Button variant="ghost" size="icon" onClick={() => setIndex((value) => (value + 1) % words.length)} aria-label="Next word"><ChevronRight /></Button></div></aside>
        </div>
      </main>
    </div>
  );
}
