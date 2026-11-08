import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, BookOpen, BrainCircuit, Check, Flame, Headphones, Mic, PenTool, Sparkles } from 'lucide-react';
import { useT } from '@/i18n';
import { learningStats, useLearningState } from '@/features/learn/api';
import { learningPlan } from '@/features/learn/plan';
import { levelOf } from '@/features/learn/course';
import { useReviewQueue } from '@/features/learn/engine/api';
import { useSubscription } from '@/hooks/useSubscription';
import { Button } from './ui/button';

export function DesktopDashboard({ name, onPlan }: { name: string; onPlan: () => void }) {
  const { t, lang } = useT();
  const { data: state, isLoading, isError } = useLearningState();
  const { data: review } = useReviewQueue(!!state?.profile, false);
  const subscription = useSubscription();
  const plan = learningPlan(state, 1, lang);
  const stats = learningStats(state, lang);
  const streak = state?.streak_info?.current ?? state?.streak ?? 0;
  const goal = Math.max(1, state?.goal?.daily_goal_xp ?? 30);
  const xp = state?.goal?.today_xp ?? 0;
  const due = (review?.stats.due ?? 0) + (review?.stats.mistakes ?? 0);
  const started = !!state?.profile;
  const uz = lang === 'uz';
  const skillLinks = [{ title: 'Writing', icon: PenTool, to: '/writing' }, { title: 'Speaking', icon: Mic, to: '/speaking' }, { title: 'Reading', icon: BookOpen, to: '/reading' }, { title: 'Listening', icon: Headphones, to: '/listening' }];
  return <div className="hidden space-y-6 lg:block">
    <header className="flex flex-wrap items-center justify-between gap-5 pb-1">
      <div><h1 className="text-3xl font-extrabold tracking-tight xl:text-4xl">{uz ? 'Xush kelibsiz' : 'Welcome back'}, {name}</h1><p className="mt-2 text-sm text-muted-foreground">{uz ? 'Kichik qadamlar, katta natijalar. Bugun ham davom etamiz.' : 'Keep going. Your next step is right here.'}</p></div>
      <Link to="/learn" className="flex items-center gap-4 rounded-2xl border border-primary/15 bg-card px-5 py-3 hover:border-primary/40"><Flame className="h-8 w-8 fill-primary/10 text-primary" /><span><b className="block text-lg">{streak} {uz ? 'kunlik streak' : 'day streak'}</b><span className="text-xs text-muted-foreground">{state?.streak_info?.done_today ? (uz ? 'Bugungi dars bajarildi' : 'You showed up today') : (uz ? 'Bugun bir darsni tugating' : 'Keep it going with a lesson today')}</span></span><div className="ml-2 w-28 border-l pl-4"><span className="text-xs text-muted-foreground">{xp}/{goal} XP</span><div className="mt-2 h-1.5 rounded-full bg-secondary"><div className="h-full rounded-full bg-primary" style={{ width: `${Math.min(100, xp / goal * 100)}%` }} /></div></div></Link>
    </header>
    <div className="grid grid-cols-2 gap-5">
      <section className="workspace-card relative flex min-h-[330px] flex-col overflow-hidden bg-gradient-to-br from-primary/[0.06] via-card to-primary/[0.02] p-7">
        <div aria-hidden className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full border border-primary/10" /><div aria-hidden className="pointer-events-none absolute -right-6 -top-12 h-44 w-44 rounded-full border border-primary/10" />
        <p className="relative text-xs font-extrabold uppercase tracking-wider text-primary">{uz ? 'Ingliz tili kursi' : 'English course'}</p>
        <h2 className="relative mt-4 text-2xl font-extrabold tracking-tight">{uz ? 'O‘rganishda davom eting' : 'Continue your learning'}</h2>
        <span className="mt-4 w-fit rounded-lg bg-primary/[0.08] px-3 py-1 text-xs font-semibold">{levelOf(state?.profile?.level).title}</span>
        {isLoading ? <div className="mt-4 h-16 animate-pulse rounded-xl bg-secondary" /> : <><h3 className="relative mt-4 max-w-md text-xl font-bold leading-snug">{isError ? (uz ? 'Darslaringizni oching' : 'Open your learning path') : started ? (plan.steps[0]?.title ?? t('learn.continue.allDone')) : (uz ? 'Birinchi darsingizdan boshlang' : 'Your first lesson is waiting')}</h3><p className="mt-2 text-sm text-muted-foreground">{plan.unit?.titleUz ?? (uz ? 'Qisqa darslar, talaffuz va amaliy mashqlar' : 'Short lessons, pronunciation and hands-on practice')}</p></>}
        <div className="mt-auto flex items-center justify-between gap-3 pt-7"><Link to="/learn"><Button className="gap-3 rounded-xl px-5 font-bold">{started ? t('dash.continueLesson') : (uz ? 'O‘rganishni boshlash' : 'Start learning')}<ArrowRight className="h-4 w-4" /></Button></Link><Link to="/learn" className="text-xs font-medium text-muted-foreground hover:text-primary">{uz ? 'Kursni ko‘rish' : 'View course'}</Link></div>
      </section>
      <section className="workspace-card relative flex min-h-[330px] flex-col overflow-hidden p-7">
        <div aria-hidden className="pointer-events-none absolute -right-14 -top-16 grid h-52 w-52 place-items-center rounded-full border border-primary/10 bg-primary/[0.02]"><span className="grid h-32 w-32 place-items-center rounded-full border border-primary/10"><span className="h-12 w-12 rounded-full bg-primary/10" /></span></div>
        <p className="relative text-xs font-extrabold uppercase tracking-wider text-primary">{uz ? 'IELTS tayyorgarlik' : 'IELTS preparation'}</p><h2 className="relative mt-4 text-2xl font-extrabold tracking-tight">{uz ? 'Keyingi band shu yerdan boshlanadi' : 'Your next band starts here'}</h2><p className="relative mt-2 text-sm text-muted-foreground">{uz ? 'Ko‘nikmani tanlang va mashq qiling.' : 'Choose a skill and start practising.'}</p>
        <div className="mt-5 grid grid-cols-2 gap-x-6">{skillLinks.map(({ title, icon: Icon, to }) => <Link key={to} to={to} className="flex items-center gap-3 border-b border-border/60 py-3 font-semibold transition-colors hover:text-primary"><Icon className="h-6 w-6 text-primary" />{title}<ArrowUpRight className="ml-auto h-3.5 w-3.5 text-muted-foreground" /></Link>)}</div>
        <div className="mt-auto flex items-center justify-between gap-3 pt-6"><Link to="/practice"><Button className="gap-3 rounded-xl px-5 font-bold">{uz ? 'Mashqni boshlash' : 'Start practice'}<ArrowRight className="h-4 w-4" /></Button></Link><Link to="/mock-test" className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-primary">Mock test<ArrowUpRight className="h-3.5 w-3.5" /></Link></div>
      </section>
    </div>
    <div className="grid grid-cols-[1.2fr_1fr] gap-5">
      <section className="workspace-card relative flex min-h-[215px] flex-col overflow-hidden p-7">
        <h2 className="relative z-10 max-w-[65%] text-xl font-extrabold">{uz ? 'Oz-ozdan takrorlang, yaxshiroq eslab qoling' : 'A little review goes a long way'}</h2><p className="relative z-10 mt-2 max-w-[60%] text-sm text-muted-foreground">{due > 0 ? (uz ? `${due} ta mashq takrorlash uchun tayyor.` : `${due} review items are ready for another look.`) : (uz ? 'Darslarda o‘rgangan so‘zlaringizni mustahkamlang.' : 'Keep the words from your lessons fresh in your memory.')}</p>
        <div aria-hidden className="pointer-events-none absolute bottom-7 right-6 flex items-end -space-x-6"><div className="rotate-[-12deg] rounded-xl border border-primary/10 bg-card p-4 shadow-lg"><b className="text-sm">discover</b><p className="text-[10px] text-muted-foreground">kashf etmoq</p></div><div className="z-10 -translate-y-3 rotate-6 rounded-xl border border-primary/10 bg-card p-5 shadow-lg"><b className="text-sm">improve</b><p className="text-[10px] text-muted-foreground">yaxshilamoq</p></div></div>
        <Link to="/learn?tab=words" className="relative z-10 mt-auto w-fit pt-5"><Button variant="outline" className="rounded-xl border-primary/40 text-primary">{uz ? 'So‘zlarni takrorlash' : 'Review words'}</Button></Link>
      </section>
      <section className="workspace-card p-6"><div className="mb-6 flex items-center justify-between"><h2 className="flex items-center gap-3 text-lg font-bold"><span className="rounded-lg bg-primary/[0.08] px-2 py-1 text-xs text-primary">{subscription.planName}</span>{t('dash.yourPlan')}</h2><button onClick={onPlan} className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary">{uz ? 'Boshqarish' : 'Manage'}<ArrowUpRight className="h-3 w-3" /></button></div><div className="space-y-5">{[['Writing', subscription.writingUsed, subscription.writingLimit], ['Speaking', subscription.speakingUsed, subscription.speakingLimit], [t('dash.mocks'), subscription.mockUsed, subscription.mockLimit]].map(([label, used, limit]) => <div key={label} className="grid grid-cols-[80px_1fr_48px] items-center gap-3 text-xs"><span className="font-medium">{label}</span><div className="h-1.5 overflow-hidden rounded-full bg-secondary"><div className="h-full rounded-full bg-primary" style={{ width: `${Number(limit) > 0 ? Math.min(100, Number(used) / Number(limit) * 100) : 0}%` }} /></div><span className="text-right text-muted-foreground">{used}/{limit}</span></div>)}</div></section>
    </div>
    <section className="workspace-card flex items-center gap-7 p-6"><div className="w-44 shrink-0 border-r pr-5"><h2 className="text-lg font-extrabold">{t('learn.home.thisWeek')}</h2><p className="mt-1 text-xs text-muted-foreground">{uz ? 'Har kun — yangi imkoniyat.' : 'Small steps, steady progress.'}</p></div><div className="grid flex-1 grid-cols-7 gap-2">{stats.week.map(day => <div key={day.day} className="text-center"><span className={`mx-auto grid h-8 w-8 place-items-center rounded-full border ${day.xp > 0 ? 'border-primary bg-primary text-white' : 'border-border bg-card text-muted-foreground'}`}>{day.xp > 0 ? <Check className="h-4 w-4" /> : null}</span><span className="mt-2 block text-xs font-medium">{day.label}</span><span className="text-[11px] text-muted-foreground">{new Date(`${day.day}T12:00:00`).toLocaleDateString(uz ? 'uz-UZ' : 'en-GB', { day: 'numeric', month: 'short' })}</span></div>)}</div></section>
    <div className="grid grid-cols-2 gap-4"><Link to="/grammar-test" className="workspace-card flex items-center gap-4 p-5 hover:border-primary/30"><BrainCircuit className="h-6 w-6 text-primary" /><span className="flex-1"><b className="text-sm">{t('nav.grammar')}</b><p className="mt-1 text-xs text-muted-foreground">{t('dash.grammarText')}</p></span><ArrowRight className="h-4 w-4" /></Link><Link to="/leaderboard" className="workspace-card flex items-center gap-4 p-5 hover:border-primary/30"><Sparkles className="h-6 w-6 text-primary" /><span className="flex-1"><b className="text-sm">{t('nav.leaderboard')}</b><p className="mt-1 text-xs text-muted-foreground">{uz ? 'Har kungi harakatingizni reytingda ko‘ring.' : 'See where your daily effort takes you.'}</p></span><ArrowRight className="h-4 w-4" /></Link></div>
  </div>;
}
