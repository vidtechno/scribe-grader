import { Link } from 'react-router-dom';
import { Award, Clock, CheckCircle2, AlertCircle, Loader2, FileText } from 'lucide-react';
import { format } from 'date-fns';

export interface MockTestSummary {
  id: string;
  status: string;
  overall_band: number | null;
  task1_band: number | null;
  task2_band: number | null;
  speaking_band: number | null;
  created_at: string;
  completed_at: string | null;
}

const statusMeta: Record<string, { label: string; icon: any; cls: string }> = {
  in_progress: { label: 'In Progress', icon: Clock, cls: 'bg-amber-500/10 text-amber-600 border-amber-500/30' },
  submitted:   { label: 'Pending',     icon: Loader2, cls: 'bg-blue-500/10 text-blue-600 border-blue-500/30' },
  grading:     { label: 'Grading',     icon: Loader2, cls: 'bg-blue-500/10 text-blue-600 border-blue-500/30' },
  completed:   { label: 'Completed',   icon: CheckCircle2, cls: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/30' },
  failed:      { label: 'Failed',      icon: AlertCircle,  cls: 'bg-destructive/10 text-destructive border-destructive/30' },
};

export function MockTestHistoryCard({ mt }: { mt: MockTestSummary }) {
  const meta = statusMeta[mt.status] || statusMeta.in_progress;
  const Icon = meta.icon;
  const spinning = mt.status === 'submitted' || mt.status === 'grading';
  const isCompleted = mt.status === 'completed';
  const isResumable = mt.status === 'in_progress';
  const href = isCompleted
    ? `/mock-test/result/${mt.id}`
    : isResumable
      ? `/mock-test/exam/${mt.id}`
      : `/mock-test/thank-you/${mt.id}`;

  return (
    <Link to={href} className="block">
      <div className="glass-card p-4 hover:bg-secondary/30 transition-all">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <FileText className="h-5 w-5 text-primary" />
            </div>
            <div className="min-w-0">
              <p className="font-semibold text-sm truncate">Mock Test</p>
              <p className="text-xs text-muted-foreground">
                {format(new Date(mt.created_at), 'MMM d, yyyy • HH:mm')}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className={`text-[11px] font-medium px-2 py-1 rounded-full border flex items-center gap-1 ${meta.cls}`}>
              <Icon className={`h-3 w-3 ${spinning ? 'animate-spin' : ''}`} /> {meta.label}
            </span>
            {isCompleted && mt.overall_band != null && (
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-primary/10 text-primary flex items-center gap-1">
                <Award className="h-3 w-3" /> Band {mt.overall_band}
              </span>
            )}
          </div>
        </div>
        {isCompleted && (
          <div className="mt-3 grid grid-cols-3 gap-2 text-center">
            <div className="bg-secondary/30 rounded-lg py-1.5">
              <p className="text-[10px] text-muted-foreground">Task 1</p>
              <p className="text-sm font-semibold">{mt.task1_band ?? '—'}</p>
            </div>
            <div className="bg-secondary/30 rounded-lg py-1.5">
              <p className="text-[10px] text-muted-foreground">Task 2</p>
              <p className="text-sm font-semibold">{mt.task2_band ?? '—'}</p>
            </div>
            <div className="bg-secondary/30 rounded-lg py-1.5">
              <p className="text-[10px] text-muted-foreground">Speaking</p>
              <p className="text-sm font-semibold">{mt.speaking_band ?? '—'}</p>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}