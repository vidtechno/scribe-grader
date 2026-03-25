import { AlertTriangle, CheckCircle2 } from 'lucide-react';

interface ErrorCorrection {
  original: string;
  corrected: string;
  explanation: string;
}

interface ErrorCorrectionsProps {
  corrections: ErrorCorrection[];
}

export function ErrorCorrections({ corrections }: ErrorCorrectionsProps) {
  if (!corrections || corrections.length === 0) {
    return (
      <div className="text-center py-6 text-muted-foreground">
        <CheckCircle2 className="h-10 w-10 mx-auto mb-2 text-primary opacity-60" />
        <p className="text-sm">No errors found. Great job!</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {corrections.map((correction, index) => (
        <div key={index} className="rounded-lg border border-border bg-secondary/20 p-4">
          <div className="flex items-start gap-3 mb-2">
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <span className="w-5 h-5 rounded-full bg-destructive/15 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="h-3 w-3 text-destructive" />
              </span>
              <p className="text-sm text-destructive line-through break-words">{correction.original}</p>
            </div>
          </div>
          <div className="flex items-start gap-3 mb-2">
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <span className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="h-3 w-3 text-primary" />
              </span>
              <p className="text-sm text-primary font-medium break-words">{correction.corrected}</p>
            </div>
          </div>
          {correction.explanation && (
            <p className="text-xs text-muted-foreground ml-8">{correction.explanation}</p>
          )}
        </div>
      ))}
    </div>
  );
}
