import { motion, useReducedMotion } from 'framer-motion';
import type { ScenePlace } from '../types';

/** Colours and floating props of every place: each scene gets its own small animated "picture". */
export const PLACE_THEME: Record<ScenePlace, { label: string; gradient: string; props: string[]; ground: string }> = {
  meet: { label: 'Tanishuv', gradient: 'from-rose-400 via-orange-300 to-amber-200', props: ['👋', '😊', '💬', '🤝', '✨'], ground: 'bg-orange-300/60' },
  desk: { label: 'Ro‘yxatdan o‘tish', gradient: 'from-sky-400 via-cyan-300 to-teal-200', props: ['📋', '☎️', '🔢', '✏️', '🪪'], ground: 'bg-cyan-400/50' },
  school: { label: 'Til maktabi', gradient: 'from-violet-400 via-fuchsia-300 to-pink-200', props: ['🏫', '📝', '🎒', '📚', '✏️'], ground: 'bg-fuchsia-300/50' },
  family: { label: 'Oila', gradient: 'from-pink-400 via-rose-300 to-red-200', props: ['👨‍👩‍👧', '🖼️', '🏠', '❤️', '📸'], ground: 'bg-rose-300/60' },
  cafe: { label: 'Kafe', gradient: 'from-amber-500 via-orange-400 to-yellow-200', props: ['☕', '🥐', '🍰', '🧁', '🍵'], ground: 'bg-amber-600/40' },
  time: { label: 'Vaqt va uchrashuv', gradient: 'from-indigo-400 via-blue-300 to-sky-200', props: ['⏰', '📅', '🕔', '📱', '🗓️'], ground: 'bg-blue-400/50' },
  bus: { label: 'Transport', gradient: 'from-emerald-400 via-teal-300 to-cyan-200', props: ['🚌', '🚉', '🎫', '🚕', '🗺️'], ground: 'bg-slate-500/40' },
  day: { label: 'Kun tartibi', gradient: 'from-yellow-400 via-amber-300 to-orange-200', props: ['🌅', '🪥', '🚿', '💼', '🌙'], ground: 'bg-yellow-500/40' },
  street: { label: 'Ko‘cha va yo‘l', gradient: 'from-lime-400 via-green-300 to-emerald-200', props: ['🗺️', '📍', '🧭', '🏦', '🌳'], ground: 'bg-green-500/40' },
  shop: { label: 'Do‘kon', gradient: 'from-red-400 via-rose-300 to-orange-200', props: ['🛒', '🍎', '🥛', '💵', '🧾'], ground: 'bg-red-400/40' },
  hotel: { label: 'Mehmonxona', gradient: 'from-purple-500 via-indigo-400 to-sky-300', props: ['🏨', '🔑', '🧳', '🛎️', '🛏️'], ground: 'bg-purple-500/40' },
  weekend: { label: 'Dam olish kuni', gradient: 'from-green-400 via-lime-300 to-yellow-200', props: ['🌳', '⚽', '🎬', '☀️', '🧺'], ground: 'bg-green-500/40' },
  plans: { label: 'Rejalar', gradient: 'from-blue-500 via-sky-400 to-cyan-200', props: ['📆', '✈️', '🎒', '🍿', '⛰️'], ground: 'bg-sky-500/40' },
  mission: { label: 'Yakuniy missiya', gradient: 'from-fuchsia-500 via-purple-400 to-amber-300', props: ['🏙️', '🎯', '⭐', '🗺️', '🏆'], ground: 'bg-purple-500/40' },
};

const SLOTS = [
  { left: '8%', top: '16%', size: 'text-3xl', dur: 5.2, dy: 10 },
  { left: '24%', top: '52%', size: 'text-2xl', dur: 6.4, dy: 14 },
  { left: '70%', top: '14%', size: 'text-4xl', dur: 5.8, dy: 12 },
  { left: '84%', top: '48%', size: 'text-3xl', dur: 7, dy: 9 },
  { left: '50%', top: '8%', size: 'text-2xl', dur: 6, dy: 11 },
];

/**
 * The animated picture of a scene: a coloured sky with drifting clouds, floating props of the place and the partner
 * standing in front. `speaking` makes the partner bounce and ring while their line plays. Motion is switched off for
 * people who ask their device for reduced motion.
 */
export function SceneArt({ place, emoji, speaking = false, height = 'h-52', celebrate = false }: {
  place: ScenePlace; emoji: string; speaking?: boolean; height?: string; celebrate?: boolean;
}) {
  const theme = PLACE_THEME[place];
  const still = useReducedMotion();
  return (
    <div className={`relative ${height} w-full overflow-hidden rounded-3xl bg-gradient-to-br ${theme.gradient} shadow-lg`} aria-hidden="true" data-testid="scene-art">
      {/* clouds */}
      {[0, 1].map((i) => (
        <motion.div key={i} className="absolute h-6 w-20 rounded-full bg-white/50 blur-[1px]" style={{ top: `${18 + i * 26}%` }}
          initial={{ left: i ? '-25%' : '60%' }} animate={still ? undefined : { left: i ? '110%' : '-25%' }}
          transition={{ duration: 26 + i * 9, repeat: Infinity, ease: 'linear', delay: i * 4 }} />
      ))}
      {/* floating props */}
      {theme.props.map((p, i) => (
        <motion.span key={p + i} className={`absolute ${SLOTS[i].size} drop-shadow`} style={{ left: SLOTS[i].left, top: SLOTS[i].top }}
          animate={still ? undefined : { y: [0, -SLOTS[i].dy, 0], rotate: [-6, 6, -6] }} transition={{ duration: SLOTS[i].dur, repeat: Infinity, ease: 'easeInOut' }}>{p}</motion.span>
      ))}
      <div className={`absolute inset-x-0 bottom-0 h-8 ${theme.ground}`} />
      {/* the partner */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
        {speaking && !still && [0, 1].map((i) => (
          <motion.span key={i} className="absolute inset-0 rounded-full border-2 border-white/80"
            initial={{ scale: 1, opacity: 0.8 }} animate={{ scale: 1.9, opacity: 0 }} transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.55 }} />
        ))}
        <motion.div className="relative grid h-20 w-20 place-items-center rounded-full bg-white text-5xl shadow-xl"
          animate={still ? undefined : speaking ? { y: [0, -6, 0], rotate: [-3, 3, -3] } : celebrate ? { y: [0, -14, 0], scale: [1, 1.08, 1] } : { y: [0, -3, 0] }}
          transition={{ duration: speaking ? 0.6 : celebrate ? 0.8 : 2.4, repeat: Infinity, ease: 'easeInOut' }}>{emoji}</motion.div>
      </div>
      {celebrate && !still && ['🎉', '✨', '⭐', '🎊'].map((c, i) => (
        <motion.span key={c} className="absolute text-2xl" style={{ left: `${20 + i * 20}%`, bottom: '30%' }}
          initial={{ y: 0, opacity: 0 }} animate={{ y: -90, opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.35 }}>{c}</motion.span>
      ))}
    </div>
  );
}

/** Small burst shown over a correct answer. */
export function Sparkles() {
  const still = useReducedMotion();
  return (
    <span className="pointer-events-none absolute inset-x-0 -top-2 flex justify-center gap-3" aria-hidden="true">
      {['✨', '⭐', '✨'].map((c, i) => (
        <motion.span key={i} className="text-xl" initial={{ y: 4, opacity: 0, scale: 0.5 }} animate={still ? { opacity: 1 } : { y: -26, opacity: [0, 1, 0], scale: 1.2 }} transition={{ duration: 0.9, delay: i * 0.08 }}>{c}</motion.span>
      ))}
    </span>
  );
}

/** The partner in the sticky header of a running scene: a small avatar in the colours of the place. */
export function MiniAvatar({ place, emoji, speaking }: { place: ScenePlace; emoji: string; speaking: boolean }) {
  const still = useReducedMotion();
  return (
    <div className={`relative grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${PLACE_THEME[place].gradient} shadow`} aria-hidden="true">
      {speaking && !still && <motion.span className="absolute inset-0 rounded-2xl border-2 border-white/90" initial={{ scale: 1, opacity: 0.9 }} animate={{ scale: 1.35, opacity: 0 }} transition={{ duration: 1.2, repeat: Infinity }} />}
      <motion.span className="text-3xl" animate={still ? undefined : speaking ? { y: [0, -3, 0], rotate: [-4, 4, -4] } : { y: [0, -1.5, 0] }} transition={{ duration: speaking ? 0.55 : 2.4, repeat: Infinity, ease: 'easeInOut' }}>{emoji}</motion.span>
    </div>
  );
}
