import { Fragment } from 'react';

/** Renders a translated string where <b>…</b> marks bold parts (messages stay plain strings, no HTML injection). */
export function Rich({ text, boldClassName }: { text: string; boldClassName?: string }) {
  const parts = text.split(/<b>(.*?)<\/b>/g);
  return <>{parts.map((p, i) => (i % 2 ? <b key={i} className={boldClassName}>{p}</b> : <Fragment key={i}>{p}</Fragment>))}</>;
}
