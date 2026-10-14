import { A2_UNITS, loadDrills } from '../../src/features/learn/course';
async function main() {
  for (const u of A2_UNITS) for (const d of await loadDrills(u.id)) {
    const h: Record<string, number> = {};
    d.exercises.forEach((e) => { h[e.k] = (h[e.k] ?? 0) + 1; });
    console.log(d.id, d.title, JSON.stringify(h));
  }
}
main();
