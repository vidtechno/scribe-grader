/** Tiny shared flag so the XP toast waits while the full-screen streak celebration is open. */
let open = false;
const listeners = new Set<() => void>();

export function setStreakModalOpen(value: boolean) {
  if (open === value) return;
  open = value;
  listeners.forEach((l) => l());
}
export const isStreakModalOpen = () => open;
export function subscribeStreakModal(fn: () => void) {
  listeners.add(fn);
  return () => { listeners.delete(fn); };
}
