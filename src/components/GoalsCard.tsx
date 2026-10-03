import { useMemo, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { ACTIVITY_WEEKS, useActivityData, useGoalsData } from '@/hooks/useDashboardData';
import { Link } from 'react-router-dom';
import { CartesianGrid, Line, LineChart, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { addWeeks, differenceInCalendarDays, eachDayOfInterval, format, startOfDay, startOfWeek, subDays } from 'date-fns';
import { Flame, Loader2, Mic, PenLine, Settings2, Target, CalendarDays, Bell } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';

type Goals = { target_band: number; weekly_essays: number; weekly_speaking: number; exam_date: string | null };
type Attempt = { kind: 'essay' | 'speaking'; score: number | null; at: Date };

const DEFAULT_GOALS: Goals = { target_band: 7, weekly_essays: 3, weekly_speaking: 2, exam_date: null };
const BANDS = Array.from({ length: 11 }, (_, i) => 4 + i * 0.5);
const WEEKS = ACTIVITY_WEEKS;

const roundHalf = (n: number) => Math.round(n * 2) / 2;
const dayKey = (d: Date) => format(d, 'yyyy-MM-dd');

function Ring({ value, goal, label, icon: Icon }: { value: number; goal: number; label: string; icon: typeof PenLine }) {
  const pct = goal > 0 ? Math.min(1, value / goal) : 0;
  const r = 30; const c = 2 * Math.PI * r;
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-[76px] w-[76px] shrink-0">
        <svg viewBox="0 0 76 76" className="h-full w-full -rotate-90">
          <circle cx="38" cy="38" r={r} fill="none" strokeWidth="7" className="stroke-secondary" />
          <circle cx="38" cy="38" r={r} fill="none" strokeWidth="7" strokeLinecap="round" className="stroke-primary transition-all duration-700"
            strokeDasharray={c} strokeDashoffset={c * (1 - pct)} />
        </svg>
        <Icon className="absolute inset-0 m-auto h-5 w-5 text-primary" />
      </div>
      <div>
        <p className="text-xl font-bold leading-none">{value}<span className="text-sm font-medium text-muted-foreground"> / {goal}</span></p>
        <p className="text-xs text-muted-foreground mt-1">{label} this week</p>
      </div>
    </div>
  );
}

export function GoalsCard() {
  const { user } = useAuth();
  const goalsQ = useGoalsData();
  const activityQ = useActivityData();
  const qc = useQueryClient();
  const [goalsOverride, setGoalsOverride] = useState<Goals | null>(null);
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState<Goals>(DEFAULT_GOALS);
  const [saving, setSaving] = useState(false);

  const goals: Goals = goalsOverride ?? goalsQ.data ?? DEFAULT_GOALS;
  const hasGoals = !!(goalsOverride ?? goalsQ.data);
  const loading = goalsQ.isLoading || activityQ.isLoading;
  const attempts: Attempt[] = useMemo(() => [
    ...(activityQ.data?.essays || []).filter(x => x.status !== 'draft').map(x => ({ kind: 'essay' as const, score: x.score, at: new Date(x.created_at) })),
    ...(activityQ.data?.speaking || []).filter(x => x.status !== 'draft').map(x => ({ kind: 'speaking' as const, score: x.score, at: new Date(x.created_at) })),
  ], [activityQ.data]);

  const stats = useMemo(() => {
    const now = new Date();
    const weekStart = startOfWeek(now, { weekStartsOn: 1 });
    const essaysThisWeek = attempts.filter(a => a.kind === 'essay' && a.at >= weekStart).length;
    const speakingThisWeek = attempts.filter(a => a.kind === 'speaking' && a.at >= weekStart).length;

    const days = new Set(attempts.map(a => dayKey(a.at)));
    let streak = 0;
    let cursor = startOfDay(now);
    const practisedToday = days.has(dayKey(cursor));
    if (!practisedToday) cursor = subDays(cursor, 1);
    while (days.has(dayKey(cursor))) { streak++; cursor = subDays(cursor, 1); }

    const scored = attempts.filter(a => a.score != null).sort((a, b) => +b.at - +a.at);
    const recent = scored.slice(0, 5);
    const current = recent.length ? roundHalf(recent.reduce((t, a) => t + (a.score as number), 0) / recent.length) : null;

    const weekly = Array.from({ length: WEEKS }, (_, i) => {
      const start = addWeeks(weekStart, i - (WEEKS - 1));
      const end = addWeeks(start, 1);
      const inWeek = scored.filter(a => a.at >= start && a.at < end);
      const avg = (kind: Attempt['kind']) => {
        const list = inWeek.filter(a => a.kind === kind);
        return list.length ? roundHalf(list.reduce((t, a) => t + (a.score as number), 0) / list.length) : null;
      };
      const all = inWeek.length ? roundHalf(inWeek.reduce((t, a) => t + (a.score as number), 0) / inWeek.length) : null;
      return { label: format(start, 'd MMM'), Overall: all, Writing: avg('essay'), Speaking: avg('speaking'), count: inWeek.length };
    });

    const last7 = eachDayOfInterval({ start: subDays(startOfDay(now), 6), end: startOfDay(now) })
      .map(d => ({ d, done: days.has(dayKey(d)) }));
    return { essaysThisWeek, speakingThisWeek, streak, practisedToday, current, weekly, last7 };
  }, [attempts]);

  const save = async () => {
    if (!user) return;
    setSaving(true);
    const { error } = await supabase.from('user_goals').upsert({ user_id: user.id, ...draft, updated_at: new Date().toISOString() });
    setSaving(false);
    if (error) { toast.error('Could not save your goals'); return; }
    setGoalsOverride(draft); void qc.invalidateQueries({ queryKey: ['goals'] }); setEditing(false);
    toast.success('Goals saved');
  };

  if (loading) return <div className="glass-card p-6 mb-7 h-[280px] animate-pulse"><div className="h-4 w-40 rounded bg-secondary/60 mb-4" /><div className="h-3 w-64 rounded bg-secondary/40 mb-8" /><div className="h-24 rounded-xl bg-secondary/30" /></div>;

  const gap = stats.current != null ? goals.target_band - stats.current : null;
  const examDays = goals.exam_date ? differenceInCalendarDays(new Date(goals.exam_date), new Date()) : null;
  const essaysLeft = Math.max(0, goals.weekly_essays - stats.essaysThisWeek);
  const speakingLeft = Math.max(0, goals.weekly_speaking - stats.speakingThisWeek);

  let reminder: { text: string; to: string; cta: string } | null = null;
  if (essaysLeft === 0 && speakingLeft === 0 && (goals.weekly_essays + goals.weekly_speaking) > 0) {
    reminder = { text: 'Weekly goal complete. Great work — keep the streak going!', to: '/writing', cta: 'Practise more' };
  } else if (!stats.practisedToday) {
    const parts = [essaysLeft > 0 ? `${essaysLeft} more essay${essaysLeft === 1 ? '' : 's'}` : '', speakingLeft > 0 ? `${speakingLeft} more speaking` : ''].filter(Boolean).join(' and ');
    reminder = { text: stats.streak > 0 ? `You have a ${stats.streak}-day streak. Practise today to keep it! This week: ${parts}.` : `You haven't practised today. This week: ${parts}.`, to: essaysLeft > 0 ? '/writing' : '/speaking', cta: 'Practise now' };
  }

  return (
    <section className="glass-card p-5 sm:p-6 mb-7" aria-label="Goals and progress">
      <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.18em] text-primary">Your goal</p>
          <h2 className="text-xl font-bold mt-1 flex items-center gap-2"><Target className="h-5 w-5 text-primary" />
            {hasGoals ? <>Target Band {goals.target_band.toFixed(1)}</> : 'Set your IELTS target'}
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            {stats.current != null
              ? gap != null && gap > 0 ? `Your recent average is Band ${stats.current.toFixed(1)} — ${gap.toFixed(1)} to go.` : `Your recent average is Band ${stats.current.toFixed(1)}. You are at your target!`
              : 'Complete a Writing or Speaking practice to see how close you are.'}
            {examDays != null && examDays >= 0 && <span className="inline-flex items-center gap-1 ml-2 text-foreground"><CalendarDays className="h-3.5 w-3.5" />{examDays === 0 ? 'Exam today' : `${examDays} days to exam`}</span>}
          </p>
        </div>
        <Button variant="outline" size="sm" className="gap-2" onClick={() => { setDraft(goals); setEditing(true); }}>
          <Settings2 className="h-4 w-4" />{hasGoals ? 'Edit goals' : 'Set goals'}
        </Button>
      </div>

      {reminder && (
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-primary/25 bg-primary/5 p-4">
          <p className="text-sm flex items-start gap-2"><Bell className="h-4 w-4 text-primary mt-0.5 shrink-0" />{reminder.text}</p>
          <Link to={reminder.to}><Button size="sm" variant="glow">{reminder.cta}</Button></Link>
        </div>
      )}

      <div className="grid lg:grid-cols-[1fr_1.4fr] gap-6">
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <div className={`h-[76px] w-[76px] rounded-full grid place-items-center ${stats.streak > 0 ? 'bg-orange-500/10' : 'bg-secondary'}`}>
              <Flame className={`h-9 w-9 ${stats.streak > 0 ? 'text-orange-500' : 'text-muted-foreground'}`} />
            </div>
            <div>
              <p className="text-xl font-bold leading-none">{stats.streak}<span className="text-sm font-medium text-muted-foreground"> day streak</span></p>
              <div className="flex gap-1 mt-2" aria-label="Last 7 days">
                {stats.last7.map(({ d, done }) => (
                  <span key={d.toISOString()} title={format(d, 'EEE d MMM')} className={`h-5 w-5 rounded-md text-[9px] grid place-items-center font-semibold ${done ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground'}`}>{format(d, 'EEEEE')}</span>
                ))}
              </div>
            </div>
          </div>
          <Ring value={stats.essaysThisWeek} goal={goals.weekly_essays} label="Essays" icon={PenLine} />
          <Ring value={stats.speakingThisWeek} goal={goals.weekly_speaking} label="Speaking" icon={Mic} />
        </div>

        <div>
          <p className="text-sm font-semibold mb-2">Weekly band progress</p>
          {stats.weekly.some(w => w.count > 0) ? (
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={stats.weekly} margin={{ left: -20, right: 8, top: 8 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="label" stroke="hsl(var(--muted-foreground))" fontSize={11} />
                  <YAxis domain={[3, 9]} ticks={[3, 4, 5, 6, 7, 8, 9]} stroke="hsl(var(--muted-foreground))" fontSize={11} />
                  <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: 8 }} />
                  <ReferenceLine y={goals.target_band} stroke="hsl(var(--primary))" strokeDasharray="5 4" label={{ value: `Target ${goals.target_band.toFixed(1)}`, fill: 'hsl(var(--primary))', fontSize: 11, position: 'insideTopRight' }} />
                  <Line type="monotone" dataKey="Overall" stroke="hsl(var(--primary))" strokeWidth={3} dot={{ r: 4 }} connectNulls />
                  <Line type="monotone" dataKey="Writing" stroke="hsl(var(--accent))" strokeWidth={1.5} dot={{ r: 2 }} connectNulls />
                  <Line type="monotone" dataKey="Speaking" stroke="#10b981" strokeWidth={1.5} dot={{ r: 2 }} connectNulls />
                </LineChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <div className="h-56 grid place-items-center text-sm text-muted-foreground rounded-2xl border border-dashed">Your weekly progress chart appears after your first scored practice.</div>
          )}
        </div>
      </div>

      <Dialog open={editing} onOpenChange={setEditing}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Your IELTS goals</DialogTitle>
            <DialogDescription>Pick a target and a weekly routine you can keep.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Target band</Label>
              <Select value={String(draft.target_band)} onValueChange={(v) => setDraft({ ...draft, target_band: Number(v) })}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>{BANDS.map(b => <SelectItem key={b} value={String(b)}>Band {b.toFixed(1)}</SelectItem>)}</SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2"><Label htmlFor="we">Essays per week</Label>
                <Input id="we" type="number" min={0} max={21} value={draft.weekly_essays} onChange={(e) => setDraft({ ...draft, weekly_essays: Math.max(0, Math.min(21, Number(e.target.value) || 0)) })} /></div>
              <div className="space-y-2"><Label htmlFor="ws">Speaking per week</Label>
                <Input id="ws" type="number" min={0} max={21} value={draft.weekly_speaking} onChange={(e) => setDraft({ ...draft, weekly_speaking: Math.max(0, Math.min(21, Number(e.target.value) || 0)) })} /></div>
            </div>
            <div className="space-y-2"><Label htmlFor="ed">Exam date (optional)</Label>
              <Input id="ed" type="date" value={draft.exam_date ?? ''} onChange={(e) => setDraft({ ...draft, exam_date: e.target.value || null })} /></div>
            <Button variant="glow" className="w-full" onClick={save} disabled={saving}>{saving ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Save goals'}</Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
