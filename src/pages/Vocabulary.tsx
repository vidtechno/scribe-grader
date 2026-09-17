import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Check, Eye, RotateCcw, X } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { dueWords, reviewWord, WORDS, type ProgressMap, type Word } from '@/lib/vocabulary';

function readProgress(key: string): ProgressMap {
  try {
    const parsed: unknown = JSON.parse(localStorage.getItem(key) || '{}');
    return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed as ProgressMap : {};
  } catch { return {}; }
}

function quizOptions(word: Word): Word[] {
  const others = WORDS.filter((item) => item.word !== word.word);
  const first = WORDS.findIndex((item) => item.word === word.word);
  const picks = [word, ...[1, 4, 9].map((offset) => others[(first + offset) % others.length])];
  return [picks[2], picks[0], picks[3], picks[1]];
}

export default function Vocabulary() {
  const { user } = useAuth();
  const storageKey = `scorify-vocabulary-v2-${user?.id ?? 'guest'}`;
  const [progress, setProgress] = useState<ProgressMap>(() => readProgress(storageKey));
  const [topic, setTopic] = useState('All topics');
  const [mode, setMode] = useState<'cards' | 'quiz'>('cards');
  const [seen, setSeen] = useState<string[]>([]);
  const [revealed, setRevealed] = useState(false);
  const [quizChoice, setQuizChoice] = useState<number | null>(null);
  const [sessionCorrect, setSessionCorrect] = useState(0);

  const topics = useMemo(() => ['All topics', ...new Set(WORDS.map((word) => word.topic))], []);
  const topicWords = useMemo(() => topic === 'All topics' ? WORDS : WORDS.filter((word) => word.topic === topic), [topic]);
  const due = dueWords(topicWords, progress);
  const pending = due.filter((word) => !seen.includes(word.word));
  const current = pending[0];
  const options = current ? quizOptions(current) : [];
  const learned = WORDS.filter((word) => (progress[word.word]?.stage ?? 0) > 0).length;
  const dueCount = dueWords(WORDS, progress).length;

  const changeTopic = (next: string) => { setTopic(next); setSeen([]); setRevealed(false); setQuizChoice(null); setSessionCorrect(0); };
  const changeMode = (next: 'cards' | 'quiz') => { setMode(next); setSeen([]); setRevealed(false); setQuizChoice(null); setSessionCorrect(0); };
  const mark = (remembered: boolean) => {
    if (!current) return;
    const next = { ...progress, [current.word]: reviewWord(progress[current.word], remembered) };
    setProgress(next);
    localStorage.setItem(storageKey, JSON.stringify(next));
    setSeen((previous) => [...previous, current.word]);
    if (remembered) setSessionCorrect((value) => value + 1);
    setRevealed(false); setQuizChoice(null);
  };
  const reset = () => {
    if (!window.confirm('Reset your vocabulary progress on this device?')) return;
    localStorage.removeItem(storageKey);
    setProgress({}); setSeen([]); setRevealed(false); setQuizChoice(null); setSessionCorrect(0);
  };

  return <div className="min-h-screen bg-background pb-24">
    <SEOHead title="Vocabulary Builder" description="Learn and review IELTS vocabulary with flashcards and quizzes." path="/vocabulary" noindex />
    <Navbar />
    <main className="pt-24 px-4 sm:px-6 max-w-5xl mx-auto">
      <Link to="/dashboard" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"><ArrowLeft className="h-4 w-4" /> Back to Dashboard</Link>
      <div className="flex flex-wrap items-end justify-between gap-4 mb-7">
        <div><p className="text-sm font-medium text-primary mb-2">Daily learning</p><h1 className="text-3xl font-bold">Vocabulary Builder</h1><p className="text-muted-foreground mt-2">Learn useful IELTS words, then review them at the right time.</p></div>
        <Button variant="ghost" size="sm" onClick={reset}><RotateCcw className="h-4 w-4 mr-2" /> Reset progress</Button>
      </div>
      <div className="grid sm:grid-cols-3 gap-3 mb-7">
        <div className="glass-card p-4"><p className="text-sm text-muted-foreground">Words learned</p><p className="text-2xl font-bold">{learned}/{WORDS.length}</p></div>
        <div className="glass-card p-4"><p className="text-sm text-muted-foreground">Ready to review</p><p className="text-2xl font-bold">{dueCount}</p></div>
        <div className="glass-card p-4"><p className="text-sm text-muted-foreground">Correct this session</p><p className="text-2xl font-bold">{sessionCorrect}</p></div>
      </div>
      <div className="flex gap-2 overflow-x-auto pb-3 mb-4" aria-label="Vocabulary topics">{topics.map((item) => <Button key={item} size="sm" variant={topic === item ? 'default' : 'outline'} onClick={() => changeTopic(item)}>{item}</Button>)}</div>
      <div className="flex gap-2 mb-6">
        <Button variant={mode === 'cards' ? 'default' : 'outline'} onClick={() => changeMode('cards')}><BookOpen className="h-4 w-4 mr-2" /> Flashcards</Button>
        <Button variant={mode === 'quiz' ? 'default' : 'outline'} onClick={() => changeMode('quiz')}><Check className="h-4 w-4 mr-2" /> Meaning quiz</Button>
      </div>
      <div className="grid lg:grid-cols-[1fr_290px] gap-6">
        {!current ? <section className="glass-card p-10 text-center">
          <Check className="h-12 w-12 text-primary mx-auto mb-4" /><h2 className="text-2xl font-bold mb-2">Session complete</h2>
          <p className="text-muted-foreground mb-4">You practised {seen.length} {seen.length === 1 ? 'word' : 'words'} in this session. Remembered words return after 1, 3, 7, 14 and 30 days. Missed words remain due for your next session.</p>
          <Button variant="outline" onClick={() => { setSeen([]); setSessionCorrect(0); }}>Practise due words again</Button>
        </section> : <section className="glass-card p-6 sm:p-9 min-h-[390px] flex flex-col">
          <div className="flex justify-between text-xs uppercase tracking-wide text-muted-foreground"><span>{current.topic} · {current.level}</span><span>{seen.length + 1} / {due.length + seen.length}</span></div>
          <div className="flex-1 py-10">
            {mode === 'cards' ? <>
              <h2 className="text-4xl font-bold mb-6">{current.word}</h2>
              {!revealed ? <Button variant="outline" onClick={() => setRevealed(true)}><Eye className="h-4 w-4 mr-2" /> Show meaning</Button> : <>
                <p className="text-xl mb-2">{current.definition}</p><p className="text-primary mb-5">{current.uzbek}</p><p className="italic text-muted-foreground">“{current.example}”</p>
              </>}
            </> : <>
              <p className="text-sm text-muted-foreground mb-2">Choose the correct meaning:</p><h2 className="text-3xl font-bold mb-6">{current.word}</h2>
              <div className="space-y-2">{options.map((option, index) => {
                const answered = quizChoice !== null;
                return <button key={option.word} type="button" disabled={answered} onClick={() => setQuizChoice(index)}
                  className={`w-full border rounded-xl p-3 text-left ${answered && option.word === current.word ? 'border-emerald-500 bg-emerald-500/10' : answered && quizChoice === index ? 'border-destructive bg-destructive/10' : 'border-border hover:border-primary/50'}`}>
                  {String.fromCharCode(65 + index)}. {option.definition}
                </button>;
              })}</div>
              {quizChoice !== null && <p className="mt-4 text-sm"><strong>Example:</strong> {current.example} <span className="text-primary">({current.uzbek})</span></p>}
            </>}
          </div>
          {mode === 'cards' ? <div className="flex gap-3"><Button variant="outline" className="flex-1" disabled={!revealed} onClick={() => mark(false)}><X className="h-4 w-4 mr-2" /> Review again</Button><Button className="flex-1" disabled={!revealed} onClick={() => mark(true)}><Check className="h-4 w-4 mr-2" /> I remembered</Button></div>
            : <Button disabled={quizChoice === null} onClick={() => mark(quizChoice !== null && options[quizChoice].word === current.word)}>Next word</Button>}
        </section>}
        <aside className="glass-card p-5 h-fit">
          <h3 className="font-semibold mb-4">How it works</h3>
          <ol className="space-y-4 text-sm text-muted-foreground"><li><strong className="text-primary mr-2">1.</strong>Choose an IELTS topic and Flashcards or Meaning quiz.</li><li><strong className="text-primary mr-2">2.</strong>Try to recall the meaning before revealing it, or pick the right answer.</li><li><strong className="text-primary mr-2">3.</strong>Remembered words return after 1, 3, 7, 14 and 30 days. Missed words stay ready to practise.</li></ol>
          <p className="text-xs text-muted-foreground border-t border-border pt-4 mt-5">Progress is saved in this browser for your account. It is not yet synced across devices.</p>
        </aside>
      </div>
    </main>
  </div>;
}
