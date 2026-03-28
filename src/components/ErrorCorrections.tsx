import { AlertTriangle, CheckCircle2, ArrowUp, Info } from 'lucide-react';

interface ErrorCorrection {
  original: string;
  corrected: string;
  explanation: string;
  type?: 'error' | 'improvement';
}

interface ErrorCorrectionsProps {
  corrections: ErrorCorrection[];
  limitCount?: number;
}

export function ErrorCorrections({ corrections, limitCount }: ErrorCorrectionsProps) {
  if (!corrections || corrections.length === 0) {
    return (
      <div className="text-center py-6 text-muted-foreground">
        <CheckCircle2 className="h-10 w-10 mx-auto mb-2 text-primary opacity-60" />
        <p className="text-sm">No errors found. Great job!</p>
      </div>
    );
  }

  const displayed = limitCount ? corrections.slice(0, limitCount) : corrections;
  const errors = displayed.filter(c => c.type !== 'improvement');
  const improvements = displayed.filter(c => c.type === 'improvement');

  return (
    <div className="space-y-4">
      {/* Errors Section */}
      {errors.length > 0 && (
        <div className="space-y-3">
          <h4 className="text-sm font-semibold flex items-center gap-2 text-destructive">
            <AlertTriangle className="h-4 w-4" /> Errors Found ({errors.length})
          </h4>
          {errors.map((correction, index) => (
            <div key={`err-${index}`} className="rounded-lg border border-destructive/20 bg-destructive/5 p-4">
              <div className="flex items-start gap-3 mb-2">
                <span className="w-5 h-5 rounded-full bg-destructive/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <AlertTriangle className="h-3 w-3 text-destructive" />
                </span>
                <p className="text-sm text-destructive line-through break-words font-medium">{correction.original}</p>
              </div>
              <div className="flex items-start gap-3 mb-2">
                <span className="w-5 h-5 rounded-full bg-emerald-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                </span>
                <p className="text-sm text-emerald-500 font-medium break-words">{correction.corrected}</p>
              </div>
              {correction.explanation && (
                <div className="flex items-start gap-2 ml-8">
                  <Info className="h-3 w-3 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-muted-foreground">{correction.explanation}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Improvements Section */}
      {improvements.length > 0 && (
        <div className="space-y-3">
          <h4 className="text-sm font-semibold flex items-center gap-2 text-emerald-500">
            <ArrowUp className="h-4 w-4" /> High-Band Improvements ({improvements.length})
          </h4>
          {improvements.map((correction, index) => (
            <div key={`imp-${index}`} className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-4">
              <div className="flex items-start gap-3 mb-2">
                <span className="w-5 h-5 rounded-full bg-yellow-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-yellow-500 text-xs">~</span>
                </span>
                <p className="text-sm text-yellow-600 dark:text-yellow-400 break-words">{correction.original}</p>
              </div>
              <div className="flex items-start gap-3 mb-2">
                <span className="w-5 h-5 rounded-full bg-emerald-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ArrowUp className="h-3 w-3 text-emerald-500" />
                </span>
                <p className="text-sm text-emerald-500 font-medium break-words">{correction.corrected}</p>
              </div>
              {correction.explanation && (
                <div className="flex items-start gap-2 ml-8">
                  <Info className="h-3 w-3 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-muted-foreground">{correction.explanation}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {limitCount && corrections.length > limitCount && (
        <p className="text-xs text-muted-foreground text-center">
          Showing {limitCount} of {corrections.length} corrections
        </p>
      )}
    </div>
  );
}
