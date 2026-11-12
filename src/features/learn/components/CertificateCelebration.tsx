import { useEffect, useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { useT } from '@/i18n';
import { Button } from '@/components/ui/button';
import type { CertificateData } from '../certificate';
import { makeConfetti } from '../confetti';
import { CertificateShare } from './CertificateShare';

/** Length of the full animation; after it the overlay stays with the share buttons until the learner continues. */
export const CELEBRATION_MS = 3200;

function useCountUp(target: number, ms: number, still: boolean) {
  const [value, setValue] = useState(still ? target : 0);
  useEffect(() => {
    if (still) { setValue(target); return; }
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / ms);
      setValue(Math.round(target * (1 - (1 - p) ** 3)));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, ms, still]);
  return value;
}

/**
 * Full-screen "you did it" moment right after a certificate is issued: confetti, the certificate flipping in, the level and
 * the test result, then the share buttons. A tap during the animation skips it (`onDone`); with reduced motion it is a calm fade.
 */
export function CertificateCelebration({ data, previewSrc, nextLevel, onDone }: {
  data: CertificateData;
  previewSrc: string;
  nextLevel?: { title: string; cefr: string } | null;
  onDone: () => void;
}) {
  const { t } = useT();
  const still = !!useReducedMotion();
  const [settled, setSettled] = useState(false);
  const particles = useMemo(() => (still ? [] : makeConfetti(56)), [still]);
  const percent = typeof data.percent === 'number' ? Math.round(data.percent) : null;
  const shown = useCountUp(percent ?? 0, 1400, still);

  useEffect(() => {
    const id = window.setTimeout(() => setSettled(true), still ? 600 : CELEBRATION_MS);
    return () => window.clearTimeout(id);
  }, [still]);

  const line = nextLevel ? t('learn.certParty.next', { next: nextLevel.title, cefr: nextLevel.cefr }) : t('learn.certParty.general');
  const rise = (delay: number) => (still
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.4, delay: delay / 3 } }
    : { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay } });

  return (
    <div
      className="fixed inset-0 z-[70] overflow-y-auto bg-gradient-to-b from-rose-950 via-rose-800 to-rose-600 text-white"
      role="dialog" aria-modal="true" aria-label={t('learn.certParty.headline')}
      onClick={() => { if (!settled) onDone(); }}
    >
      {particles.length > 0 && (
        <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
          {particles.map((p) => (
            <motion.span
              key={p.id}
              className="absolute top-[38%]"
              style={{ left: `${p.originX}%`, width: p.size, height: p.round ? p.size : p.size * 0.5, background: p.color, borderRadius: p.round ? '9999px' : 2 }}
              initial={{ x: 0, y: 0, opacity: 0, rotate: 0 }}
              animate={{ x: p.dx, y: [0, -p.rise, p.fall], opacity: [0, 1, 1, 0], rotate: p.rotate }}
              transition={{ duration: p.duration, delay: p.delay, ease: 'easeOut', times: [0, 0.4, 1] }}
            />
          ))}
        </div>
      )}

      <div className="relative max-w-md mx-auto px-5 py-8 min-h-full flex flex-col items-center text-center">
        {!settled && (
          <button type="button" className="absolute right-4 top-4 text-xs text-white/70 underline" onClick={(e) => { e.stopPropagation(); onDone(); }}>
            {t('learn.certParty.skip')}
          </button>
        )}

        <motion.div
          className="mt-6 h-16 w-16 rounded-full bg-white/15 grid place-items-center"
          initial={still ? { opacity: 0 } : { scale: 0, rotate: -20 }}
          animate={still ? { opacity: 1 } : { scale: [0, 1.2, 1], rotate: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span animate={still ? undefined : { scale: [1, 1.12, 1] }} transition={{ duration: 1.2, repeat: Infinity, delay: 0.7 }} className="grid place-items-center">
            <Trophy className="h-8 w-8 text-amber-300" />
          </motion.span>
        </motion.div>

        <motion.h2 className="mt-4 text-3xl font-extrabold" {...rise(0.2)}>{t('learn.certParty.headline')}</motion.h2>
        <motion.p className="mt-1 text-white/85" {...rise(0.35)}>{t('learn.certParty.owned', { level: data.levelTitle })}</motion.p>
        <motion.p className="mt-3 text-2xl font-extrabold" {...rise(0.5)}>{data.levelTitle} · {data.cefr}</motion.p>

        <motion.div
          className="relative mt-5 w-full"
          style={{ perspective: 1000 }}
          initial={still ? { opacity: 0 } : { opacity: 0, rotateY: -90, scale: 0.7 }}
          animate={still ? { opacity: 1 } : { opacity: 1, rotateY: 0, scale: 1 }}
          transition={{ duration: still ? 0.5 : 0.8, delay: still ? 0.2 : 0.6, ease: 'easeOut' }}
        >
          <div className="absolute -inset-3 rounded-3xl bg-amber-300/30 blur-2xl" aria-hidden="true" />
          <img src={previewSrc} alt="" className="relative w-full rounded-2xl shadow-2xl" />
        </motion.div>

        {percent !== null && (
          <motion.p className="mt-5 text-white/85" {...rise(1.1)}>
            {t('learn.certParty.score')} <b className="text-2xl font-extrabold text-white tabular-nums">{shown}%</b>
          </motion.p>
        )}
        <motion.p className="mt-2 text-sm text-white/80" {...rise(1.4)}>{line}</motion.p>

        {settled && (
          <motion.div className="w-full mt-6" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} onClick={(e) => e.stopPropagation()}>
            <p className="font-semibold mb-2">{t('learn.certShare.title')}</p>
            <CertificateShare data={data} />
            <Button variant="ghost" className="mt-3 w-full text-white hover:bg-white/10 hover:text-white" onClick={onDone}>{t('learn.certDialog.view')}</Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
