import { Fragment, type ReactNode } from 'react';

/** Renders the small markdown subset used in lessons: **bold**, *italic*, `highlight` and line breaks. */
export function Md({ text, className }: { text: string; className?: string }) {
  const lines = text.split('\n');
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <Fragment key={i}>
          {i > 0 && <br />}
          {inline(line)}
        </Fragment>
      ))}
    </span>
  );
}

function inline(line: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;
  while ((m = re.exec(line))) {
    if (m.index > last) out.push(line.slice(last, m.index));
    const token = m[0];
    if (token.startsWith('**')) out.push(<strong key={k++} className="font-semibold text-foreground">{token.slice(2, -2)}</strong>);
    else if (token.startsWith('`')) out.push(<mark key={k++} className="rounded px-1 py-0.5 bg-primary/10 text-primary font-semibold">{token.slice(1, -1)}</mark>);
    else out.push(<em key={k++}>{token.slice(1, -1)}</em>);
    last = m.index + token.length;
  }
  if (last < line.length) out.push(line.slice(last));
  return out;
}
