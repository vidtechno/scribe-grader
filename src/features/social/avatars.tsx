/** The 10 ready-made profile pictures (the same keys live in the `profile_avatars` table). */
export const AVATARS = [
  { key: 'av01', label: 'Tulki', emoji: '🦊', bg: 'from-orange-400 to-amber-500' },
  { key: 'av02', label: 'Panda', emoji: '🐼', bg: 'from-slate-400 to-slate-600' },
  { key: 'av03', label: 'Sher', emoji: '🦁', bg: 'from-yellow-400 to-orange-500' },
  { key: 'av04', label: 'Pingvin', emoji: '🐧', bg: 'from-sky-400 to-indigo-500' },
  { key: 'av05', label: 'Koala', emoji: '🐨', bg: 'from-zinc-400 to-stone-500' },
  { key: 'av06', label: 'Qurbaqa', emoji: '🐸', bg: 'from-emerald-400 to-green-600' },
  { key: 'av07', label: 'Yulduz', emoji: '⭐', bg: 'from-amber-300 to-yellow-500' },
  { key: 'av08', label: 'Raketa', emoji: '🚀', bg: 'from-violet-500 to-fuchsia-500' },
  { key: 'av09', label: 'Kitob', emoji: '📚', bg: 'from-rose-400 to-red-500' },
  { key: 'av10', label: 'Olov', emoji: '🔥', bg: 'from-red-500 to-orange-500' },
] as const;

export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';
const SIZES: Record<AvatarSize, string> = {
  sm: 'h-9 w-9 text-lg', md: 'h-11 w-11 text-xl', lg: 'h-16 w-16 text-3xl', xl: 'h-24 w-24 sm:h-28 sm:w-28 text-5xl',
};

/** A round profile picture: the chosen preset, or the initials when none is set. */
export function UserAvatar({ avatar, name, size = 'md', ring = false }: { avatar?: string | null; name: string; size?: AvatarSize; ring?: boolean }) {
  const preset = AVATARS.find((a) => a.key === avatar);
  const initials = name.split(/\s+/).map((s) => s[0]).join('').slice(0, 2).toUpperCase() || 'O';
  return (
    <span aria-hidden className={`${SIZES[size]} shrink-0 grid place-items-center rounded-full bg-gradient-to-br ${preset?.bg ?? 'from-primary to-brand-red-soft'} ${ring ? 'ring-4 ring-background outline outline-2 outline-primary/40' : ''} font-bold text-white select-none`}>
      {preset ? <span className="leading-none">{preset.emoji}</span> : <span className="text-[0.45em]">{initials}</span>}
    </span>
  );
}
