import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Headphones, BookOpen, Lock } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useSubscription } from '@/hooks/useSubscription';
import { Navbar } from '@/components/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { LISTENING_TESTS, READING_TESTS } from '@/features/ielts/registry';
import { useAttempts } from '@/features/ielts/useAttempts';

/** The list of Reading or Listening practice tests, with the learner's best band for each. */
export default function IeltsTests({ skill }: { skill: 'reading' | 'listening' }) {
  const { user } = useAuth();
  const { isPremium } = useSubscription();
  const attempts = useAttempts(skill, user?.id);
  const tests = skill === 'reading' ? READING_TESTS : LISTENING_TESTS;
  const Icon = skill === 'reading' ? BookOpen : Headphones;
  const best = (id: string) => Math.max(0, ...(attempts.data ?? []).filter((a) => a.test_id === id && a.mode === 'full').map((a) => a.band));
  const count = (id: string) => (attempts.data ?? []).filter((a) => a.test_id === id).length;
  const title = skill === 'reading' ? 'IELTS Academic Reading' : 'IELTS Listening';
  return (
    <div className="min-h-screen bg-background pb-24 md:pb-0">
      <SEOHead title={`${title} practice`} description={`Full ${title} practice tests with an estimated band score and answer review.`} path={`/${skill}`} noindex />
      <Navbar />
      <main className="pt-24 pb-12 px-4 sm:px-6 max-w-3xl mx-auto">
        <Link to="/practice" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6"><ArrowLeft className="h-4 w-4" />IELTS practice</Link>
        <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">IELTS {skill}</p>
        <h1 className="text-2xl sm:text-3xl font-bold mb-1">{title}</h1>
        <p className="text-muted-foreground text-sm mb-6">
          {skill === 'reading'
            ? '3 passages · 40 questions · 60 minutes. All official question types: True/False/Not Given, Yes/No/Not Given, matching headings, completion and multiple choice.'
            : '4 sections · 40 questions · about 30 minutes. British voices; the audio plays once in exam mode.'}
        </p>
        <div className="space-y-3">
          {tests.map((t) => {
            const locked = !t.free && !isPremium;
            const b = best(t.id);
            return (
              <Link key={t.id} to={`/${skill}/${t.id}`} className="group glass-card-hover p-4 flex items-center gap-3">
                <span className="w-11 h-11 rounded-xl bg-primary/10 text-primary grid place-items-center shrink-0"><Icon className="h-5 w-5" /></span>
                <span className="min-w-0 flex-1">
                  <span className="block font-semibold">{t.title}{t.free && <span className="ml-2 text-[10px] uppercase tracking-wide bg-primary/10 text-primary rounded px-1.5 py-0.5">Free</span>}</span>
                  <span className="block text-xs text-muted-foreground truncate">{t.topics.join(' · ')}</span>
                  {count(t.id) > 0 && <span className="block text-xs text-muted-foreground">{count(t.id)} attempt{count(t.id) > 1 ? 's' : ''}{b > 0 ? ` · best band ${b.toFixed(1)}` : ''}</span>}
                </span>
                {locked ? <Lock className="h-4 w-4 text-muted-foreground" /> : <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />}
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}
